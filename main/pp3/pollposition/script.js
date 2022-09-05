var dh = Object.defineProperty;
var fh = (t, e, n) => e in t ? dh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var st = (t, e, n) => (fh(t, typeof e != "symbol" ? e + "" : e, n), n);
const ph = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
    new MutationObserver(o => {
        for (const f of o)
            if (f.type === "childList")
                for (const v of f.addedNodes) v.tagName === "LINK" && v.rel === "modulepreload" && i(v)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const f = {};
        return o.integrity && (f.integrity = o.integrity), o.referrerpolicy && (f.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? f.credentials = "include" : o.crossorigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function i(o) {
        if (o.ep) return;
        o.ep = !0;
        const f = n(o);
        fetch(o.href, f)
    }
};
ph();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function gh(t) {
    var e = t.default;
    if (typeof e == "function") {
        var n = function() {
            return e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(t).forEach(function(i) {
        var o = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(n, i, o.get ? o : {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    }), n
}
var Pi = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            o = Array.prototype,
            f = Object.prototype,
            v = Function.prototype,
            b = o.push,
            k = o.slice,
            A = f.toString,
            D = f.hasOwnProperty,
            V = Array.isArray,
            Y = Object.keys,
            ie = v.bind,
            K = Object.create,
            re = function() {},
            m = function(l) {
                if (l instanceof m) return l;
                if (!(this instanceof m)) return new m(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = m), e._ = m, m.VERSION = "1.8.3";
        var P = function(l, g, S) {
                if (g === void 0) return l;
                switch (S == null ? 3 : S) {
                    case 1:
                        return function(R) {
                            return l.call(g, R)
                        };
                    case 2:
                        return function(R, L) {
                            return l.call(g, R, L)
                        };
                    case 3:
                        return function(R, L, B) {
                            return l.call(g, R, L, B)
                        };
                    case 4:
                        return function(R, L, B, te) {
                            return l.call(g, R, L, B, te)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            q = function(l, g, S) {
                return l == null ? m.identity : m.isFunction(l) ? P(l, g, S) : m.isObject(l) ? m.matcher(l) : m.property(l)
            };
        m.iteratee = function(l, g) {
            return q(l, g, 1 / 0)
        };
        var le = function(l, g) {
                return function(S) {
                    var R = arguments.length;
                    if (R < 2 || S == null) return S;
                    for (var L = 1; L < R; L++)
                        for (var B = arguments[L], te = l(B), ke = te.length, de = 0; de < ke; de++) {
                            var De = te[de];
                            (!g || S[De] === void 0) && (S[De] = B[De])
                        }
                    return S
                }
            },
            se = function(l) {
                if (!m.isObject(l)) return {};
                if (K) return K(l);
                re.prototype = l;
                var g = new re;
                return re.prototype = null, g
            },
            ye = function(l) {
                return function(g) {
                    return g == null ? void 0 : g[l]
                }
            },
            d = Math.pow(2, 53) - 1,
            _e = ye("length"),
            Oe = function(l) {
                var g = _e(l);
                return typeof g == "number" && g >= 0 && g <= d
            };
        m.each = m.forEach = function(l, g, S) {
            g = P(g, S);
            var R, L;
            if (Oe(l))
                for (R = 0, L = l.length; R < L; R++) g(l[R], R, l);
            else {
                var B = m.keys(l);
                for (R = 0, L = B.length; R < L; R++) g(l[B[R]], B[R], l)
            }
            return l
        }, m.map = m.collect = function(l, g, S) {
            g = q(g, S);
            for (var R = !Oe(l) && m.keys(l), L = (R || l).length, B = Array(L), te = 0; te < L; te++) {
                var ke = R ? R[te] : te;
                B[te] = g(l[ke], ke, l)
            }
            return B
        };

        function Pe(l) {
            function g(S, R, L, B, te, ke) {
                for (; te >= 0 && te < ke; te += l) {
                    var de = B ? B[te] : te;
                    L = R(L, S[de], de, S)
                }
                return L
            }
            return function(S, R, L, B) {
                R = P(R, B, 4);
                var te = !Oe(S) && m.keys(S),
                    ke = (te || S).length,
                    de = l > 0 ? 0 : ke - 1;
                return arguments.length < 3 && (L = S[te ? te[de] : de], de += l), g(S, R, L, te, de, ke)
            }
        }
        m.reduce = m.foldl = m.inject = Pe(1), m.reduceRight = m.foldr = Pe(-1), m.find = m.detect = function(l, g, S) {
            var R;
            if (Oe(l) ? R = m.findIndex(l, g, S) : R = m.findKey(l, g, S), R !== void 0 && R !== -1) return l[R]
        }, m.filter = m.select = function(l, g, S) {
            var R = [];
            return g = q(g, S), m.each(l, function(L, B, te) {
                g(L, B, te) && R.push(L)
            }), R
        }, m.reject = function(l, g, S) {
            return m.filter(l, m.negate(q(g)), S)
        }, m.every = m.all = function(l, g, S) {
            g = q(g, S);
            for (var R = !Oe(l) && m.keys(l), L = (R || l).length, B = 0; B < L; B++) {
                var te = R ? R[B] : B;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, m.some = m.any = function(l, g, S) {
            g = q(g, S);
            for (var R = !Oe(l) && m.keys(l), L = (R || l).length, B = 0; B < L; B++) {
                var te = R ? R[B] : B;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(l, g, S, R) {
            return Oe(l) || (l = m.values(l)), (typeof S != "number" || R) && (S = 0), m.indexOf(l, g, S) >= 0
        }, m.invoke = function(l, g) {
            var S = k.call(arguments, 2),
                R = m.isFunction(g);
            return m.map(l, function(L) {
                var B = R ? g : L[g];
                return B == null ? B : B.apply(L, S)
            })
        }, m.pluck = function(l, g) {
            return m.map(l, m.property(g))
        }, m.where = function(l, g) {
            return m.filter(l, m.matcher(g))
        }, m.findWhere = function(l, g) {
            return m.find(l, m.matcher(g))
        }, m.max = function(l, g, S) {
            var R = -1 / 0,
                L = -1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : m.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) B = l[ke], B > R && (R = B)
            } else g = q(g, S), m.each(l, function(De, Me, nt) {
                te = g(De, Me, nt), (te > L || te === -1 / 0 && R === -1 / 0) && (R = De, L = te)
            });
            return R
        }, m.min = function(l, g, S) {
            var R = 1 / 0,
                L = 1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : m.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) B = l[ke], B < R && (R = B)
            } else g = q(g, S), m.each(l, function(De, Me, nt) {
                te = g(De, Me, nt), (te < L || te === 1 / 0 && R === 1 / 0) && (R = De, L = te)
            });
            return R
        }, m.shuffle = function(l) {
            for (var g = Oe(l) ? l : m.values(l), S = g.length, R = Array(S), L = 0, B; L < S; L++) B = m.random(0, L), B !== L && (R[L] = R[B]), R[B] = g[L];
            return R
        }, m.sample = function(l, g, S) {
            return g == null || S ? (Oe(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
        }, m.sortBy = function(l, g, S) {
            return g = q(g, S), m.pluck(m.map(l, function(R, L, B) {
                return {
                    value: R,
                    index: L,
                    criteria: g(R, L, B)
                }
            }).sort(function(R, L) {
                var B = R.criteria,
                    te = L.criteria;
                if (B !== te) {
                    if (B > te || B === void 0) return 1;
                    if (B < te || te === void 0) return -1
                }
                return R.index - L.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, S, R) {
                var L = {};
                return S = q(S, R), m.each(g, function(B, te) {
                    var ke = S(B, te, g);
                    l(L, B, ke)
                }), L
            }
        };
        m.groupBy = lt(function(l, g, S) {
            m.has(l, S) ? l[S].push(g) : l[S] = [g]
        }), m.indexBy = lt(function(l, g, S) {
            l[S] = g
        }), m.countBy = lt(function(l, g, S) {
            m.has(l, S) ? l[S]++ : l[S] = 1
        }), m.toArray = function(l) {
            return l ? m.isArray(l) ? k.call(l) : Oe(l) ? m.map(l, m.identity) : m.values(l) : []
        }, m.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : m.keys(l).length
        }, m.partition = function(l, g, S) {
            g = q(g, S);
            var R = [],
                L = [];
            return m.each(l, function(B, te, ke) {
                (g(B, te, ke) ? R : L).push(B)
            }), [R, L]
        }, m.first = m.head = m.take = function(l, g, S) {
            if (l != null) return g == null || S ? l[0] : m.initial(l, l.length - g)
        }, m.initial = function(l, g, S) {
            return k.call(l, 0, Math.max(0, l.length - (g == null || S ? 1 : g)))
        }, m.last = function(l, g, S) {
            if (l != null) return g == null || S ? l[l.length - 1] : m.rest(l, Math.max(0, l.length - g))
        }, m.rest = m.tail = m.drop = function(l, g, S) {
            return k.call(l, g == null || S ? 1 : g)
        }, m.compact = function(l) {
            return m.filter(l, m.identity)
        };
        var Be = function(l, g, S, R) {
            for (var L = [], B = 0, te = R || 0, ke = _e(l); te < ke; te++) {
                var de = l[te];
                if (Oe(de) && (m.isArray(de) || m.isArguments(de))) {
                    g || (de = Be(de, g, S));
                    var De = 0,
                        Me = de.length;
                    for (L.length += Me; De < Me;) L[B++] = de[De++]
                } else S || (L[B++] = de)
            }
            return L
        };
        m.flatten = function(l, g) {
            return Be(l, g, !1)
        }, m.without = function(l) {
            return m.difference(l, k.call(arguments, 1))
        }, m.uniq = m.unique = function(l, g, S, R) {
            m.isBoolean(g) || (R = S, S = g, g = !1), S != null && (S = q(S, R));
            for (var L = [], B = [], te = 0, ke = _e(l); te < ke; te++) {
                var de = l[te],
                    De = S ? S(de, te, l) : de;
                g ? ((!te || B !== De) && L.push(de), B = De) : S ? m.contains(B, De) || (B.push(De), L.push(de)) : m.contains(L, de) || L.push(de)
            }
            return L
        }, m.union = function() {
            return m.uniq(Be(arguments, !0, !0))
        }, m.intersection = function(l) {
            for (var g = [], S = arguments.length, R = 0, L = _e(l); R < L; R++) {
                var B = l[R];
                if (!m.contains(g, B)) {
                    for (var te = 1; te < S && m.contains(arguments[te], B); te++);
                    te === S && g.push(B)
                }
            }
            return g
        }, m.difference = function(l) {
            var g = Be(arguments, !0, !0, 1);
            return m.filter(l, function(S) {
                return !m.contains(g, S)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(l) {
            for (var g = l && m.max(l, _e).length || 0, S = Array(g), R = 0; R < g; R++) S[R] = m.pluck(l, R);
            return S
        }, m.object = function(l, g) {
            for (var S = {}, R = 0, L = _e(l); R < L; R++) g ? S[l[R]] = g[R] : S[l[R][0]] = l[R][1];
            return S
        };

        function J(l) {
            return function(g, S, R) {
                S = q(S, R);
                for (var L = _e(g), B = l > 0 ? 0 : L - 1; B >= 0 && B < L; B += l)
                    if (S(g[B], B, g)) return B;
                return -1
            }
        }
        m.findIndex = J(1), m.findLastIndex = J(-1), m.sortedIndex = function(l, g, S, R) {
            S = q(S, R, 1);
            for (var L = S(g), B = 0, te = _e(l); B < te;) {
                var ke = Math.floor((B + te) / 2);
                S(l[ke]) < L ? B = ke + 1 : te = ke
            }
            return B
        };

        function je(l, g, S) {
            return function(R, L, B) {
                var te = 0,
                    ke = _e(R);
                if (typeof B == "number") l > 0 ? te = B >= 0 ? B : Math.max(B + ke, te) : ke = B >= 0 ? Math.min(B + 1, ke) : B + ke + 1;
                else if (S && B && ke) return B = S(R, L), R[B] === L ? B : -1;
                if (L !== L) return B = g(k.call(R, te, ke), m.isNaN), B >= 0 ? B + te : -1;
                for (B = l > 0 ? te : ke - 1; B >= 0 && B < ke; B += l)
                    if (R[B] === L) return B;
                return -1
            }
        }
        m.indexOf = je(1, m.findIndex, m.sortedIndex), m.lastIndexOf = je(-1, m.findLastIndex), m.range = function(l, g, S) {
            g == null && (g = l || 0, l = 0), S = S || 1;
            for (var R = Math.max(Math.ceil((g - l) / S), 0), L = Array(R), B = 0; B < R; B++, l += S) L[B] = l;
            return L
        };
        var U = function(l, g, S, R, L) {
            if (!(R instanceof g)) return l.apply(S, L);
            var B = se(l.prototype),
                te = l.apply(B, L);
            return m.isObject(te) ? te : B
        };
        m.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, k.call(arguments, 1));
            if (!m.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                R = function() {
                    return U(l, R, g, this, S.concat(k.call(arguments)))
                };
            return R
        }, m.partial = function(l) {
            var g = k.call(arguments, 1),
                S = function() {
                    for (var R = 0, L = g.length, B = Array(L), te = 0; te < L; te++) B[te] = g[te] === m ? arguments[R++] : g[te];
                    for (; R < arguments.length;) B.push(arguments[R++]);
                    return U(l, S, this, this, B)
                };
            return S
        }, m.bindAll = function(l) {
            var g, S = arguments.length,
                R;
            if (S <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < S; g++) R = arguments[g], l[R] = m.bind(l[R], l);
            return l
        }, m.memoize = function(l, g) {
            var S = function(R) {
                var L = S.cache,
                    B = "" + (g ? g.apply(this, arguments) : R);
                return m.has(L, B) || (L[B] = l.apply(this, arguments)), L[B]
            };
            return S.cache = {}, S
        }, m.delay = function(l, g) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, g)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(l, g, S) {
            var R, L, B, te = null,
                ke = 0;
            S || (S = {});
            var de = function() {
                ke = S.leading === !1 ? 0 : m.now(), te = null, B = l.apply(R, L), te || (R = L = null)
            };
            return function() {
                var De = m.now();
                !ke && S.leading === !1 && (ke = De);
                var Me = g - (De - ke);
                return R = this, L = arguments, Me <= 0 || Me > g ? (te && (clearTimeout(te), te = null), ke = De, B = l.apply(R, L), te || (R = L = null)) : !te && S.trailing !== !1 && (te = setTimeout(de, Me)), B
            }
        }, m.debounce = function(l, g, S) {
            var R, L, B, te, ke, de = function() {
                var De = m.now() - te;
                De < g && De >= 0 ? R = setTimeout(de, g - De) : (R = null, S || (ke = l.apply(B, L), R || (B = L = null)))
            };
            return function() {
                B = this, L = arguments, te = m.now();
                var De = S && !R;
                return R || (R = setTimeout(de, g)), De && (ke = l.apply(B, L), B = L = null), ke
            }
        }, m.wrap = function(l, g) {
            return m.partial(g, l)
        }, m.negate = function(l) {
            return function() {
                return !l.apply(this, arguments)
            }
        }, m.compose = function() {
            var l = arguments,
                g = l.length - 1;
            return function() {
                for (var S = g, R = l[g].apply(this, arguments); S--;) R = l[S].call(this, R);
                return R
            }
        }, m.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, m.before = function(l, g) {
            var S;
            return function() {
                return --l > 0 && (S = g.apply(this, arguments)), l <= 1 && (g = null), S
            }
        }, m.once = m.partial(m.before, 2);
        var oe = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Ae = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function be(l, g) {
            var S = Ae.length,
                R = l.constructor,
                L = m.isFunction(R) && R.prototype || f,
                B = "constructor";
            for (m.has(l, B) && !m.contains(g, B) && g.push(B); S--;) B = Ae[S], B in l && l[B] !== L[B] && !m.contains(g, B) && g.push(B)
        }
        m.keys = function(l) {
            if (!m.isObject(l)) return [];
            if (Y) return Y(l);
            var g = [];
            for (var S in l) m.has(l, S) && g.push(S);
            return oe && be(l, g), g
        }, m.allKeys = function(l) {
            if (!m.isObject(l)) return [];
            var g = [];
            for (var S in l) g.push(S);
            return oe && be(l, g), g
        }, m.values = function(l) {
            for (var g = m.keys(l), S = g.length, R = Array(S), L = 0; L < S; L++) R[L] = l[g[L]];
            return R
        }, m.mapObject = function(l, g, S) {
            g = q(g, S);
            for (var R = m.keys(l), L = R.length, B = {}, te, ke = 0; ke < L; ke++) te = R[ke], B[te] = g(l[te], te, l);
            return B
        }, m.pairs = function(l) {
            for (var g = m.keys(l), S = g.length, R = Array(S), L = 0; L < S; L++) R[L] = [g[L], l[g[L]]];
            return R
        }, m.invert = function(l) {
            for (var g = {}, S = m.keys(l), R = 0, L = S.length; R < L; R++) g[l[S[R]]] = S[R];
            return g
        }, m.functions = m.methods = function(l) {
            var g = [];
            for (var S in l) m.isFunction(l[S]) && g.push(S);
            return g.sort()
        }, m.extend = le(m.allKeys), m.extendOwn = m.assign = le(m.keys), m.findKey = function(l, g, S) {
            g = q(g, S);
            for (var R = m.keys(l), L, B = 0, te = R.length; B < te; B++)
                if (L = R[B], g(l[L], L, l)) return L
        }, m.pick = function(l, g, S) {
            var R = {},
                L = l,
                B, te;
            if (L == null) return R;
            m.isFunction(g) ? (te = m.allKeys(L), B = P(g, S)) : (te = Be(arguments, !1, !1, 1), B = function(nt, Ct, rn) {
                return Ct in rn
            }, L = Object(L));
            for (var ke = 0, de = te.length; ke < de; ke++) {
                var De = te[ke],
                    Me = L[De];
                B(Me, De, L) && (R[De] = Me)
            }
            return R
        }, m.omit = function(l, g, S) {
            if (m.isFunction(g)) g = m.negate(g);
            else {
                var R = m.map(Be(arguments, !1, !1, 1), String);
                g = function(L, B) {
                    return !m.contains(R, B)
                }
            }
            return m.pick(l, g, S)
        }, m.defaults = le(m.allKeys, !0), m.create = function(l, g) {
            var S = se(l);
            return g && m.extendOwn(S, g), S
        }, m.clone = function(l) {
            return m.isObject(l) ? m.isArray(l) ? l.slice() : m.extend({}, l) : l
        }, m.tap = function(l, g) {
            return g(l), l
        }, m.isMatch = function(l, g) {
            var S = m.keys(g),
                R = S.length;
            if (l == null) return !R;
            for (var L = Object(l), B = 0; B < R; B++) {
                var te = S[B];
                if (g[te] !== L[te] || !(te in L)) return !1
            }
            return !0
        };
        var we = function(l, g, S, R) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof m && (l = l._wrapped), g instanceof m && (g = g._wrapped);
            var L = A.call(l);
            if (L !== A.call(g)) return !1;
            switch (L) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + g;
                case "[object Number]":
                    return +l != +l ? +g != +g : +l == 0 ? 1 / +l === 1 / g : +l == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +g
            }
            var B = L === "[object Array]";
            if (!B) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    ke = g.constructor;
                if (te !== ke && !(m.isFunction(te) && te instanceof te && m.isFunction(ke) && ke instanceof ke) && "constructor" in l && "constructor" in g) return !1
            }
            S = S || [], R = R || [];
            for (var de = S.length; de--;)
                if (S[de] === l) return R[de] === g;
            if (S.push(l), R.push(g), B) {
                if (de = l.length, de !== g.length) return !1;
                for (; de--;)
                    if (!we(l[de], g[de], S, R)) return !1
            } else {
                var De = m.keys(l),
                    Me;
                if (de = De.length, m.keys(g).length !== de) return !1;
                for (; de--;)
                    if (Me = De[de], !(m.has(g, Me) && we(l[Me], g[Me], S, R))) return !1
            }
            return S.pop(), R.pop(), !0
        };
        m.isEqual = function(l, g) {
            return we(l, g)
        }, m.isEmpty = function(l) {
            return l == null ? !0 : Oe(l) && (m.isArray(l) || m.isString(l) || m.isArguments(l)) ? l.length === 0 : m.keys(l).length === 0
        }, m.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, m.isArray = V || function(l) {
            return A.call(l) === "[object Array]"
        }, m.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            m["is" + l] = function(g) {
                return A.call(g) === "[object " + l + "]"
            }
        }), m.isArguments(arguments) || (m.isArguments = function(l) {
            return m.has(l, "callee")
        }), typeof /./ != "function" && typeof Int8Array != "object" && (m.isFunction = function(l) {
            return typeof l == "function" || !1
        }), m.isFinite = function(l) {
            return isFinite(l) && !isNaN(parseFloat(l))
        }, m.isNaN = function(l) {
            return m.isNumber(l) && l !== +l
        }, m.isBoolean = function(l) {
            return l === !0 || l === !1 || A.call(l) === "[object Boolean]"
        }, m.isNull = function(l) {
            return l === null
        }, m.isUndefined = function(l) {
            return l === void 0
        }, m.has = function(l, g) {
            return l != null && D.call(l, g)
        }, m.noConflict = function() {
            return n._ = i, this
        }, m.identity = function(l) {
            return l
        }, m.constant = function(l) {
            return function() {
                return l
            }
        }, m.noop = function() {}, m.property = ye, m.propertyOf = function(l) {
            return l == null ? function() {} : function(g) {
                return l[g]
            }
        }, m.matcher = m.matches = function(l) {
            return l = m.extendOwn({}, l),
                function(g) {
                    return m.isMatch(g, l)
                }
        }, m.times = function(l, g, S) {
            var R = Array(Math.max(0, l));
            g = P(g, S, 1);
            for (var L = 0; L < l; L++) R[L] = g(L);
            return R
        }, m.random = function(l, g) {
            return g == null && (g = l, l = 0), l + Math.floor(Math.random() * (g - l + 1))
        }, m.now = Date.now || function() {
            return new Date().getTime()
        };
        var he = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            Se = m.invert(he),
            Te = function(l) {
                var g = function(B) {
                        return l[B]
                    },
                    S = "(?:" + m.keys(l).join("|") + ")",
                    R = RegExp(S),
                    L = RegExp(S, "g");
                return function(B) {
                    return B = B == null ? "" : "" + B, R.test(B) ? B.replace(L, g) : B
                }
            };
        m.escape = Te(he), m.unescape = Te(Se), m.result = function(l, g, S) {
            var R = l == null ? void 0 : l[g];
            return R === void 0 && (R = S), m.isFunction(R) ? R.call(l) : R
        };
        var $e = 0;
        m.uniqueId = function(l) {
            var g = ++$e + "";
            return l ? l + g : g
        }, m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var Ke = /(.)^/,
            dt = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Bt = /\\|'|\r|\n|\u2028|\u2029/g,
            Ht = function(l) {
                return "\\" + dt[l]
            };
        m.template = function(l, g, S) {
            !g && S && (g = S), g = m.defaults({}, g, m.templateSettings);
            var R = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                L = 0,
                B = "__p+='";
            l.replace(R, function(De, Me, nt, Ct, rn) {
                return B += l.slice(L, rn).replace(Bt, Ht), L = rn + De.length, Me ? B += `'+
((__t=(` + Me + `))==null?'':_.escape(__t))+
'` : nt ? B += `'+
((__t=(` + nt + `))==null?'':__t)+
'` : Ct && (B += `';
` + Ct + `
__p+='`), De
            }), B += `';
`, g.variable || (B = `with(obj||{}){
` + B + `}
`), B = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + B + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", B)
            } catch (De) {
                throw De.source = B, De
            }
            var ke = function(De) {
                    return te.call(this, De, m)
                },
                de = g.variable || "obj";
            return ke.source = "function(" + de + `){
` + B + "}", ke
        }, m.chain = function(l) {
            var g = m(l);
            return g._chain = !0, g
        };
        var _ = function(l, g) {
            return l._chain ? m(g).chain() : g
        };
        m.mixin = function(l) {
            m.each(m.functions(l), function(g) {
                var S = m[g] = l[g];
                m.prototype[g] = function() {
                    var R = [this._wrapped];
                    return b.apply(R, arguments), _(this, S.apply(m, R))
                }
            })
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = o[l];
            m.prototype[l] = function() {
                var S = this._wrapped;
                return g.apply(S, arguments), (l === "shift" || l === "splice") && S.length === 0 && delete S[0], _(this, S)
            }
        }), m.each(["concat", "join", "slice"], function(l) {
            var g = o[l];
            m.prototype[l] = function() {
                return _(this, g.apply(this._wrapped, arguments))
            }
        }), m.prototype.value = function() {
            return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(vt)
})(Pi, Pi.exports);
const at = Pi.exports;
var Na = {
    exports: {}
};
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
(function(t) {
    (function(e, n) {
        t.exports = e.document ? n(e, !0) : function(i) {
            if (!i.document) throw new Error("jQuery requires a window with a document");
            return n(i)
        }
    })(typeof window < "u" ? window : vt, function(e, n) {
        var i = [],
            o = Object.getPrototypeOf,
            f = i.slice,
            v = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            b = i.push,
            k = i.indexOf,
            A = {},
            D = A.toString,
            V = A.hasOwnProperty,
            Y = V.toString,
            ie = Y.call(Object),
            K = {},
            re = function(s) {
                return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
            },
            m = function(s) {
                return s != null && s === s.window
            },
            P = e.document,
            q = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function le(r, s, u) {
            u = u || P;
            var p, w, E = u.createElement("script");
            if (E.text = r, s)
                for (p in q) w = s[p] || s.getAttribute && s.getAttribute(p), w && E.setAttribute(p, w);
            u.head.appendChild(E).parentNode.removeChild(E)
        }

        function se(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? A[D.call(r)] || "object" : typeof r
        }
        var ye = "3.6.0",
            d = function(r, s) {
                return new d.fn.init(r, s)
            };
        d.fn = d.prototype = {
            jquery: ye,
            constructor: d,
            length: 0,
            toArray: function() {
                return f.call(this)
            },
            get: function(r) {
                return r == null ? f.call(this) : r < 0 ? this[r + this.length] : this[r]
            },
            pushStack: function(r) {
                var s = d.merge(this.constructor(), r);
                return s.prevObject = this, s
            },
            each: function(r) {
                return d.each(this, r)
            },
            map: function(r) {
                return this.pushStack(d.map(this, function(s, u) {
                    return r.call(s, u, s)
                }))
            },
            slice: function() {
                return this.pushStack(f.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(d.grep(this, function(r, s) {
                    return (s + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(d.grep(this, function(r, s) {
                    return s % 2
                }))
            },
            eq: function(r) {
                var s = this.length,
                    u = +r + (r < 0 ? s : 0);
                return this.pushStack(u >= 0 && u < s ? [this[u]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: b,
            sort: i.sort,
            splice: i.splice
        }, d.extend = d.fn.extend = function() {
            var r, s, u, p, w, E, T = arguments[0] || {},
                z = 1,
                G = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === G && (T = this, z--); z < G; z++)
                if ((r = arguments[z]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (Z && p && (d.isPlainObject(p) || (w = Array.isArray(p))) ? (u = T[s], w && !Array.isArray(u) ? E = [] : !w && !d.isPlainObject(u) ? E = {} : E = u, w = !1, T[s] = d.extend(Z, E, p)) : p !== void 0 && (T[s] = p));
            return T
        }, d.extend({
            expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(r) {
                throw new Error(r)
            },
            noop: function() {},
            isPlainObject: function(r) {
                var s, u;
                return !r || D.call(r) !== "[object Object]" ? !1 : (s = o(r), s ? (u = V.call(s, "constructor") && s.constructor, typeof u == "function" && Y.call(u) === ie) : !0)
            },
            isEmptyObject: function(r) {
                var s;
                for (s in r) return !1;
                return !0
            },
            globalEval: function(r, s, u) {
                le(r, {
                    nonce: s && s.nonce
                }, u)
            },
            each: function(r, s) {
                var u, p = 0;
                if (_e(r))
                    for (u = r.length; p < u && s.call(r[p], p, r[p]) !== !1; p++);
                else
                    for (p in r)
                        if (s.call(r[p], p, r[p]) === !1) break;
                return r
            },
            makeArray: function(r, s) {
                var u = s || [];
                return r != null && (_e(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : b.call(u, r)), u
            },
            inArray: function(r, s, u) {
                return s == null ? -1 : k.call(s, r, u)
            },
            merge: function(r, s) {
                for (var u = +s.length, p = 0, w = r.length; p < u; p++) r[w++] = s[p];
                return r.length = w, r
            },
            grep: function(r, s, u) {
                for (var p, w = [], E = 0, T = r.length, z = !u; E < T; E++) p = !s(r[E], E), p !== z && w.push(r[E]);
                return w
            },
            map: function(r, s, u) {
                var p, w, E = 0,
                    T = [];
                if (_e(r))
                    for (p = r.length; E < p; E++) w = s(r[E], E, u), w != null && T.push(w);
                else
                    for (E in r) w = s(r[E], E, u), w != null && T.push(w);
                return v(T)
            },
            guid: 1,
            support: K
        }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            A["[object " + s + "]"] = s.toLowerCase()
        });

        function _e(r) {
            var s = !!r && "length" in r && r.length,
                u = se(r);
            return re(r) || m(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, u, p, w, E, T, z, G, Z, ce, Ce, ne, ue, He, rt, Fe, zt, Nt, un, _t = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Dt = Yi(),
                _i = Yi(),
                Wi = Yi(),
                hn = Yi(),
                Kn = function(I, j) {
                    return I === j && (Ce = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Mn = an.pop,
                vn = an.push,
                Cn = an.push,
                _s = an.slice,
                Qn = function(I, j) {
                    for (var X = 0, fe = I.length; X < fe; X++)
                        if (I[X] === j) return X;
                    return -1
                },
                jr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ss = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                zr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ss + ")*)|.*)\\)|)",
                ks = new RegExp(gt + "+", "g"),
                Si = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ts = new RegExp("^" + gt + "*," + gt + "*"),
                As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                $o = new RegExp(gt + "|>"),
                Fo = new RegExp(zr),
                jo = new RegExp("^" + Zn + "$"),
                Xi = {
                    ID: new RegExp("^#(" + Zn + ")"),
                    CLASS: new RegExp("^\\.(" + Zn + ")"),
                    TAG: new RegExp("^(" + Zn + "|[*])"),
                    ATTR: new RegExp("^" + Ss),
                    PSEUDO: new RegExp("^" + zr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + jr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                zo = /HTML$/i,
                Go = /^(?:input|select|textarea|button)$/i,
                Uo = /^h\d$/i,
                ki = /^[^{]+\{\s*\[native \w/,
                Ho = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Gr = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(I, j) {
                    var X = "0x" + I.slice(1) - 65536;
                    return j || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                },
                Ur = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Os = function(I, j) {
                    return j ? I === "\0" ? "\uFFFD" : I.slice(0, -1) + "\\" + I.charCodeAt(I.length - 1).toString(16) + " " : "\\" + I
                },
                Rs = function() {
                    ne()
                },
                qo = Zi(function(I) {
                    return I.disabled === !0 && I.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = _s.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(j, X) {
                        vn.apply(j, _s.call(X))
                    } : function(j, X) {
                        for (var fe = j.length, ee = 0; j[fe++] = X[ee++];);
                        j.length = fe - 1
                    }
                }
            }

            function St(I, j, X, fe) {
                var ee, ve, Ee, Re, Le, ze, Ue, Xe = j && j.ownerDocument,
                    ht = j ? j.nodeType : 9;
                if (X = X || [], typeof I != "string" || !I || ht !== 1 && ht !== 9 && ht !== 11) return X;
                if (!fe && (ne(j), j = j || ue, rt)) {
                    if (ht !== 11 && (Le = Ho.exec(I)))
                        if (ee = Le[1]) {
                            if (ht === 9)
                                if (Ee = j.getElementById(ee)) {
                                    if (Ee.id === ee) return X.push(Ee), X
                                } else return X;
                            else if (Xe && (Ee = Xe.getElementById(ee)) && un(j, Ee) && Ee.id === ee) return X.push(Ee), X
                        } else {
                            if (Le[2]) return Cn.apply(X, j.getElementsByTagName(I)), X;
                            if ((ee = Le[3]) && u.getElementsByClassName && j.getElementsByClassName) return Cn.apply(X, j.getElementsByClassName(ee)), X
                        } if (u.qsa && !hn[I + " "] && (!Fe || !Fe.test(I)) && (ht !== 1 || j.nodeName.toLowerCase() !== "object")) {
                        if (Ue = I, Xe = j, ht === 1 && ($o.test(I) || As.test(I))) {
                            for (Xe = Gr.test(I) && Hr(j.parentNode) || j, (Xe !== j || !u.scope) && ((Re = j.getAttribute("id")) ? Re = Re.replace(Ur, Os) : j.setAttribute("id", Re = _t)), ze = T(I), ve = ze.length; ve--;) ze[ve] = (Re ? "#" + Re : ":scope") + " " + Qi(ze[ve]);
                            Ue = ze.join(",")
                        }
                        try {
                            return Cn.apply(X, Xe.querySelectorAll(Ue)), X
                        } catch {
                            hn(I, !0)
                        } finally {
                            Re === _t && j.removeAttribute("id")
                        }
                    }
                }
                return G(I.replace(Si, "$1"), j, X, fe)
            }

            function Yi() {
                var I = [];

                function j(X, fe) {
                    return I.push(X + " ") > p.cacheLength && delete j[I.shift()], j[X + " "] = fe
                }
                return j
            }

            function dn(I) {
                return I[_t] = !0, I
            }

            function yn(I) {
                var j = ue.createElement("fieldset");
                try {
                    return !!I(j)
                } catch {
                    return !1
                } finally {
                    j.parentNode && j.parentNode.removeChild(j), j = null
                }
            }

            function Ki(I, j) {
                for (var X = I.split("|"), fe = X.length; fe--;) p.attrHandle[X[fe]] = j
            }

            function Ji(I, j) {
                var X = j && I,
                    fe = X && I.nodeType === 1 && j.nodeType === 1 && I.sourceIndex - j.sourceIndex;
                if (fe) return fe;
                if (X) {
                    for (; X = X.nextSibling;)
                        if (X === j) return -1
                }
                return I ? 1 : -1
            }

            function Wo(I) {
                return function(j) {
                    var X = j.nodeName.toLowerCase();
                    return X === "input" && j.type === I
                }
            }

            function Xo(I) {
                return function(j) {
                    var X = j.nodeName.toLowerCase();
                    return (X === "input" || X === "button") && j.type === I
                }
            }

            function Is(I) {
                return function(j) {
                    return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === I : j.disabled === I : j.isDisabled === I || j.isDisabled !== !I && qo(j) === I : j.disabled === I : "label" in j ? j.disabled === I : !1
                }
            }

            function An(I) {
                return dn(function(j) {
                    return j = +j, dn(function(X, fe) {
                        for (var ee, ve = I([], X.length, j), Ee = ve.length; Ee--;) X[ee = ve[Ee]] && (X[ee] = !(fe[ee] = X[ee]))
                    })
                })
            }

            function Hr(I) {
                return I && typeof I.getElementsByTagName < "u" && I
            }
            u = St.support = {}, E = St.isXML = function(I) {
                var j = I && I.namespaceURI,
                    X = I && (I.ownerDocument || I).documentElement;
                return !zo.test(j || X && X.nodeName || "HTML")
            }, ne = St.setDocument = function(I) {
                var j, X, fe = I ? I.ownerDocument || I : et;
                return fe == ue || fe.nodeType !== 9 || !fe.documentElement || (ue = fe, He = ue.documentElement, rt = !E(ue), et != ue && (X = ue.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Rs, !1) : X.attachEvent && X.attachEvent("onunload", Rs)), u.scope = yn(function(ee) {
                    return He.appendChild(ee).appendChild(ue.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = yn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = yn(function(ee) {
                    return ee.appendChild(ue.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = ki.test(ue.getElementsByClassName), u.getById = yn(function(ee) {
                    return He.appendChild(ee).id = _t, !ue.getElementsByName || !ue.getElementsByName(_t).length
                }), u.getById ? (p.filter.ID = function(ee) {
                    var ve = ee.replace(Tn, xn);
                    return function(Ee) {
                        return Ee.getAttribute("id") === ve
                    }
                }, p.find.ID = function(ee, ve) {
                    if (typeof ve.getElementById < "u" && rt) {
                        var Ee = ve.getElementById(ee);
                        return Ee ? [Ee] : []
                    }
                }) : (p.filter.ID = function(ee) {
                    var ve = ee.replace(Tn, xn);
                    return function(Ee) {
                        var Re = typeof Ee.getAttributeNode < "u" && Ee.getAttributeNode("id");
                        return Re && Re.value === ve
                    }
                }, p.find.ID = function(ee, ve) {
                    if (typeof ve.getElementById < "u" && rt) {
                        var Ee, Re, Le, ze = ve.getElementById(ee);
                        if (ze) {
                            if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze];
                            for (Le = ve.getElementsByName(ee), Re = 0; ze = Le[Re++];)
                                if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(ee, ve) {
                    if (typeof ve.getElementsByTagName < "u") return ve.getElementsByTagName(ee);
                    if (u.qsa) return ve.querySelectorAll(ee)
                } : function(ee, ve) {
                    var Ee, Re = [],
                        Le = 0,
                        ze = ve.getElementsByTagName(ee);
                    if (ee === "*") {
                        for (; Ee = ze[Le++];) Ee.nodeType === 1 && Re.push(Ee);
                        return Re
                    }
                    return ze
                }, p.find.CLASS = u.getElementsByClassName && function(ee, ve) {
                    if (typeof ve.getElementsByClassName < "u" && rt) return ve.getElementsByClassName(ee)
                }, zt = [], Fe = [], (u.qsa = ki.test(ue.querySelectorAll)) && (yn(function(ee) {
                    var ve;
                    He.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && Fe.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || Fe.push("\\[" + gt + "*(?:value|" + jr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || Fe.push("~="), ve = ue.createElement("input"), ve.setAttribute("name", ""), ee.appendChild(ve), ee.querySelectorAll("[name='']").length || Fe.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || Fe.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || Fe.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), Fe.push("[\\r\\n\\f]")
                }), yn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var ve = ue.createElement("input");
                    ve.setAttribute("type", "hidden"), ee.appendChild(ve).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && Fe.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && Fe.push(":enabled", ":disabled"), He.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && Fe.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), Fe.push(",.*:")
                })), (u.matchesSelector = ki.test(Nt = He.matches || He.webkitMatchesSelector || He.mozMatchesSelector || He.oMatchesSelector || He.msMatchesSelector)) && yn(function(ee) {
                    u.disconnectedMatch = Nt.call(ee, "*"), Nt.call(ee, "[s!='']:x"), zt.push("!=", zr)
                }), Fe = Fe.length && new RegExp(Fe.join("|")), zt = zt.length && new RegExp(zt.join("|")), j = ki.test(He.compareDocumentPosition), un = j || ki.test(He.contains) ? function(ee, ve) {
                    var Ee = ee.nodeType === 9 ? ee.documentElement : ee,
                        Re = ve && ve.parentNode;
                    return ee === Re || !!(Re && Re.nodeType === 1 && (Ee.contains ? Ee.contains(Re) : ee.compareDocumentPosition && ee.compareDocumentPosition(Re) & 16))
                } : function(ee, ve) {
                    if (ve) {
                        for (; ve = ve.parentNode;)
                            if (ve === ee) return !0
                    }
                    return !1
                }, Kn = j ? function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee = !ee.compareDocumentPosition - !ve.compareDocumentPosition;
                    return Ee || (Ee = (ee.ownerDocument || ee) == (ve.ownerDocument || ve) ? ee.compareDocumentPosition(ve) : 1, Ee & 1 || !u.sortDetached && ve.compareDocumentPosition(ee) === Ee ? ee == ue || ee.ownerDocument == et && un(et, ee) ? -1 : ve == ue || ve.ownerDocument == et && un(et, ve) ? 1 : ce ? Qn(ce, ee) - Qn(ce, ve) : 0 : Ee & 4 ? -1 : 1)
                } : function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee, Re = 0,
                        Le = ee.parentNode,
                        ze = ve.parentNode,
                        Ue = [ee],
                        Xe = [ve];
                    if (!Le || !ze) return ee == ue ? -1 : ve == ue ? 1 : Le ? -1 : ze ? 1 : ce ? Qn(ce, ee) - Qn(ce, ve) : 0;
                    if (Le === ze) return Ji(ee, ve);
                    for (Ee = ee; Ee = Ee.parentNode;) Ue.unshift(Ee);
                    for (Ee = ve; Ee = Ee.parentNode;) Xe.unshift(Ee);
                    for (; Ue[Re] === Xe[Re];) Re++;
                    return Re ? Ji(Ue[Re], Xe[Re]) : Ue[Re] == et ? -1 : Xe[Re] == et ? 1 : 0
                }), ue
            }, St.matches = function(I, j) {
                return St(I, null, null, j)
            }, St.matchesSelector = function(I, j) {
                if (ne(I), u.matchesSelector && rt && !hn[j + " "] && (!zt || !zt.test(j)) && (!Fe || !Fe.test(j))) try {
                    var X = Nt.call(I, j);
                    if (X || u.disconnectedMatch || I.document && I.document.nodeType !== 11) return X
                } catch {
                    hn(j, !0)
                }
                return St(j, ue, null, [I]).length > 0
            }, St.contains = function(I, j) {
                return (I.ownerDocument || I) != ue && ne(I), un(I, j)
            }, St.attr = function(I, j) {
                (I.ownerDocument || I) != ue && ne(I);
                var X = p.attrHandle[j.toLowerCase()],
                    fe = X && Jn.call(p.attrHandle, j.toLowerCase()) ? X(I, j, !rt) : void 0;
                return fe !== void 0 ? fe : u.attributes || !rt ? I.getAttribute(j) : (fe = I.getAttributeNode(j)) && fe.specified ? fe.value : null
            }, St.escape = function(I) {
                return (I + "").replace(Ur, Os)
            }, St.error = function(I) {
                throw new Error("Syntax error, unrecognized expression: " + I)
            }, St.uniqueSort = function(I) {
                var j, X = [],
                    fe = 0,
                    ee = 0;
                if (Ce = !u.detectDuplicates, ce = !u.sortStable && I.slice(0), I.sort(Kn), Ce) {
                    for (; j = I[ee++];) j === I[ee] && (fe = X.push(ee));
                    for (; fe--;) I.splice(X[fe], 1)
                }
                return ce = null, I
            }, w = St.getText = function(I) {
                var j, X = "",
                    fe = 0,
                    ee = I.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof I.textContent == "string") return I.textContent;
                        for (I = I.firstChild; I; I = I.nextSibling) X += w(I)
                    } else if (ee === 3 || ee === 4) return I.nodeValue
                } else
                    for (; j = I[fe++];) X += w(j);
                return X
            }, p = St.selectors = {
                cacheLength: 50,
                createPseudo: dn,
                match: Xi,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(I) {
                        return I[1] = I[1].replace(Tn, xn), I[3] = (I[3] || I[4] || I[5] || "").replace(Tn, xn), I[2] === "~=" && (I[3] = " " + I[3] + " "), I.slice(0, 4)
                    },
                    CHILD: function(I) {
                        return I[1] = I[1].toLowerCase(), I[1].slice(0, 3) === "nth" ? (I[3] || St.error(I[0]), I[4] = +(I[4] ? I[5] + (I[6] || 1) : 2 * (I[3] === "even" || I[3] === "odd")), I[5] = +(I[7] + I[8] || I[3] === "odd")) : I[3] && St.error(I[0]), I
                    },
                    PSEUDO: function(I) {
                        var j, X = !I[6] && I[2];
                        return Xi.CHILD.test(I[0]) ? null : (I[3] ? I[2] = I[4] || I[5] || "" : X && Fo.test(X) && (j = T(X, !0)) && (j = X.indexOf(")", X.length - j) - X.length) && (I[0] = I[0].slice(0, j), I[2] = X.slice(0, j)), I.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(I) {
                        var j = I.replace(Tn, xn).toLowerCase();
                        return I === "*" ? function() {
                            return !0
                        } : function(X) {
                            return X.nodeName && X.nodeName.toLowerCase() === j
                        }
                    },
                    CLASS: function(I) {
                        var j = Dt[I + " "];
                        return j || (j = new RegExp("(^|" + gt + ")" + I + "(" + gt + "|$)")) && Dt(I, function(X) {
                            return j.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(I, j, X) {
                        return function(fe) {
                            var ee = St.attr(fe, I);
                            return ee == null ? j === "!=" : j ? (ee += "", j === "=" ? ee === X : j === "!=" ? ee !== X : j === "^=" ? X && ee.indexOf(X) === 0 : j === "*=" ? X && ee.indexOf(X) > -1 : j === "$=" ? X && ee.slice(-X.length) === X : j === "~=" ? (" " + ee.replace(ks, " ") + " ").indexOf(X) > -1 : j === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                        }
                    },
                    CHILD: function(I, j, X, fe, ee) {
                        var ve = I.slice(0, 3) !== "nth",
                            Ee = I.slice(-4) !== "last",
                            Re = j === "of-type";
                        return fe === 1 && ee === 0 ? function(Le) {
                            return !!Le.parentNode
                        } : function(Le, ze, Ue) {
                            var Xe, ht, At, We, Gt, Jt, fn = ve !== Ee ? "nextSibling" : "previousSibling",
                                Ot = Le.parentNode,
                                c = Re && Le.nodeName.toLowerCase(),
                                h = !Ue && !Re,
                                C = !1;
                            if (Ot) {
                                if (ve) {
                                    for (; fn;) {
                                        for (We = Le; We = We[fn];)
                                            if (Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) return !1;
                                        Jt = fn = I === "only" && !Jt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Jt = [Ee ? Ot.firstChild : Ot.lastChild], Ee && h) {
                                    for (We = Ot, At = We[_t] || (We[_t] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), Xe = ht[I] || [], Gt = Xe[0] === on && Xe[1], C = Gt && Xe[2], We = Gt && Ot.childNodes[Gt]; We = ++Gt && We && We[fn] || (C = Gt = 0) || Jt.pop();)
                                        if (We.nodeType === 1 && ++C && We === Le) {
                                            ht[I] = [on, Gt, C];
                                            break
                                        }
                                } else if (h && (We = Le, At = We[_t] || (We[_t] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), Xe = ht[I] || [], Gt = Xe[0] === on && Xe[1], C = Gt), C === !1)
                                    for (;
                                        (We = ++Gt && We && We[fn] || (C = Gt = 0) || Jt.pop()) && !((Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) && ++C && (h && (At = We[_t] || (We[_t] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), ht[I] = [on, C]), We === Le)););
                                return C -= ee, C === fe || C % fe === 0 && C / fe >= 0
                            }
                        }
                    },
                    PSEUDO: function(I, j) {
                        var X, fe = p.pseudos[I] || p.setFilters[I.toLowerCase()] || St.error("unsupported pseudo: " + I);
                        return fe[_t] ? fe(j) : fe.length > 1 ? (X = [I, I, "", j], p.setFilters.hasOwnProperty(I.toLowerCase()) ? dn(function(ee, ve) {
                            for (var Ee, Re = fe(ee, j), Le = Re.length; Le--;) Ee = Qn(ee, Re[Le]), ee[Ee] = !(ve[Ee] = Re[Le])
                        }) : function(ee) {
                            return fe(ee, 0, X)
                        }) : fe
                    }
                },
                pseudos: {
                    not: dn(function(I) {
                        var j = [],
                            X = [],
                            fe = z(I.replace(Si, "$1"));
                        return fe[_t] ? dn(function(ee, ve, Ee, Re) {
                            for (var Le, ze = fe(ee, null, Re, []), Ue = ee.length; Ue--;)(Le = ze[Ue]) && (ee[Ue] = !(ve[Ue] = Le))
                        }) : function(ee, ve, Ee) {
                            return j[0] = ee, fe(j, null, Ee, X), j[0] = null, !X.pop()
                        }
                    }),
                    has: dn(function(I) {
                        return function(j) {
                            return St(I, j).length > 0
                        }
                    }),
                    contains: dn(function(I) {
                        return I = I.replace(Tn, xn),
                            function(j) {
                                return (j.textContent || w(j)).indexOf(I) > -1
                            }
                    }),
                    lang: dn(function(I) {
                        return jo.test(I || "") || St.error("unsupported lang: " + I), I = I.replace(Tn, xn).toLowerCase(),
                            function(j) {
                                var X;
                                do
                                    if (X = rt ? j.lang : j.getAttribute("xml:lang") || j.getAttribute("lang")) return X = X.toLowerCase(), X === I || X.indexOf(I + "-") === 0; while ((j = j.parentNode) && j.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(I) {
                        var j = r.location && r.location.hash;
                        return j && j.slice(1) === I.id
                    },
                    root: function(I) {
                        return I === He
                    },
                    focus: function(I) {
                        return I === ue.activeElement && (!ue.hasFocus || ue.hasFocus()) && !!(I.type || I.href || ~I.tabIndex)
                    },
                    enabled: Is(!1),
                    disabled: Is(!0),
                    checked: function(I) {
                        var j = I.nodeName.toLowerCase();
                        return j === "input" && !!I.checked || j === "option" && !!I.selected
                    },
                    selected: function(I) {
                        return I.parentNode && I.parentNode.selectedIndex, I.selected === !0
                    },
                    empty: function(I) {
                        for (I = I.firstChild; I; I = I.nextSibling)
                            if (I.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(I) {
                        return !p.pseudos.empty(I)
                    },
                    header: function(I) {
                        return Uo.test(I.nodeName)
                    },
                    input: function(I) {
                        return Go.test(I.nodeName)
                    },
                    button: function(I) {
                        var j = I.nodeName.toLowerCase();
                        return j === "input" && I.type === "button" || j === "button"
                    },
                    text: function(I) {
                        var j;
                        return I.nodeName.toLowerCase() === "input" && I.type === "text" && ((j = I.getAttribute("type")) == null || j.toLowerCase() === "text")
                    },
                    first: An(function() {
                        return [0]
                    }),
                    last: An(function(I, j) {
                        return [j - 1]
                    }),
                    eq: An(function(I, j, X) {
                        return [X < 0 ? X + j : X]
                    }),
                    even: An(function(I, j) {
                        for (var X = 0; X < j; X += 2) I.push(X);
                        return I
                    }),
                    odd: An(function(I, j) {
                        for (var X = 1; X < j; X += 2) I.push(X);
                        return I
                    }),
                    lt: An(function(I, j, X) {
                        for (var fe = X < 0 ? X + j : X > j ? j : X; --fe >= 0;) I.push(fe);
                        return I
                    }),
                    gt: An(function(I, j, X) {
                        for (var fe = X < 0 ? X + j : X; ++fe < j;) I.push(fe);
                        return I
                    })
                }
            }, p.pseudos.nth = p.pseudos.eq;
            for (s in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) p.pseudos[s] = Wo(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[s] = Xo(s);

            function Ds() {}
            Ds.prototype = p.filters = p.pseudos, p.setFilters = new Ds, T = St.tokenize = function(I, j) {
                var X, fe, ee, ve, Ee, Re, Le, ze = _i[I + " "];
                if (ze) return j ? 0 : ze.slice(0);
                for (Ee = I, Re = [], Le = p.preFilter; Ee;) {
                    (!X || (fe = Ts.exec(Ee))) && (fe && (Ee = Ee.slice(fe[0].length) || Ee), Re.push(ee = [])), X = !1, (fe = As.exec(Ee)) && (X = fe.shift(), ee.push({
                        value: X,
                        type: fe[0].replace(Si, " ")
                    }), Ee = Ee.slice(X.length));
                    for (ve in p.filter)(fe = Xi[ve].exec(Ee)) && (!Le[ve] || (fe = Le[ve](fe))) && (X = fe.shift(), ee.push({
                        value: X,
                        type: ve,
                        matches: fe
                    }), Ee = Ee.slice(X.length));
                    if (!X) break
                }
                return j ? Ee.length : Ee ? St.error(I) : _i(I, Re).slice(0)
            };

            function Qi(I) {
                for (var j = 0, X = I.length, fe = ""; j < X; j++) fe += I[j].value;
                return fe
            }

            function Zi(I, j, X) {
                var fe = j.dir,
                    ee = j.next,
                    ve = ee || fe,
                    Ee = X && ve === "parentNode",
                    Re = ft++;
                return j.first ? function(Le, ze, Ue) {
                    for (; Le = Le[fe];)
                        if (Le.nodeType === 1 || Ee) return I(Le, ze, Ue);
                    return !1
                } : function(Le, ze, Ue) {
                    var Xe, ht, At, We = [on, Re];
                    if (Ue) {
                        for (; Le = Le[fe];)
                            if ((Le.nodeType === 1 || Ee) && I(Le, ze, Ue)) return !0
                    } else
                        for (; Le = Le[fe];)
                            if (Le.nodeType === 1 || Ee)
                                if (At = Le[_t] || (Le[_t] = {}), ht = At[Le.uniqueID] || (At[Le.uniqueID] = {}), ee && ee === Le.nodeName.toLowerCase()) Le = Le[fe] || Le;
                                else {
                                    if ((Xe = ht[ve]) && Xe[0] === on && Xe[1] === Re) return We[2] = Xe[2];
                                    if (ht[ve] = We, We[2] = I(Le, ze, Ue)) return !0
                                } return !1
                }
            }

            function er(I) {
                return I.length > 1 ? function(j, X, fe) {
                    for (var ee = I.length; ee--;)
                        if (!I[ee](j, X, fe)) return !1;
                    return !0
                } : I[0]
            }

            function Yo(I, j, X) {
                for (var fe = 0, ee = j.length; fe < ee; fe++) St(I, j[fe], X);
                return X
            }

            function tr(I, j, X, fe, ee) {
                for (var ve, Ee = [], Re = 0, Le = I.length, ze = j != null; Re < Le; Re++)(ve = I[Re]) && (!X || X(ve, fe, ee)) && (Ee.push(ve), ze && j.push(Re));
                return Ee
            }

            function qr(I, j, X, fe, ee, ve) {
                return fe && !fe[_t] && (fe = qr(fe)), ee && !ee[_t] && (ee = qr(ee, ve)), dn(function(Ee, Re, Le, ze) {
                    var Ue, Xe, ht, At = [],
                        We = [],
                        Gt = Re.length,
                        Jt = Ee || Yo(j || "*", Le.nodeType ? [Le] : Le, []),
                        fn = I && (Ee || !j) ? tr(Jt, At, I, Le, ze) : Jt,
                        Ot = X ? ee || (Ee ? I : Gt || fe) ? [] : Re : fn;
                    if (X && X(fn, Ot, Le, ze), fe)
                        for (Ue = tr(Ot, We), fe(Ue, [], Le, ze), Xe = Ue.length; Xe--;)(ht = Ue[Xe]) && (Ot[We[Xe]] = !(fn[We[Xe]] = ht));
                    if (Ee) {
                        if (ee || I) {
                            if (ee) {
                                for (Ue = [], Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && Ue.push(fn[Xe] = ht);
                                ee(null, Ot = [], Ue, ze)
                            }
                            for (Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && (Ue = ee ? Qn(Ee, ht) : At[Xe]) > -1 && (Ee[Ue] = !(Re[Ue] = ht))
                        }
                    } else Ot = tr(Ot === Re ? Ot.splice(Gt, Ot.length) : Ot), ee ? ee(null, Re, Ot, ze) : Cn.apply(Re, Ot)
                })
            }

            function Wr(I) {
                for (var j, X, fe, ee = I.length, ve = p.relative[I[0].type], Ee = ve || p.relative[" "], Re = ve ? 1 : 0, Le = Zi(function(Xe) {
                        return Xe === j
                    }, Ee, !0), ze = Zi(function(Xe) {
                        return Qn(j, Xe) > -1
                    }, Ee, !0), Ue = [function(Xe, ht, At) {
                        var We = !ve && (At || ht !== Z) || ((j = ht).nodeType ? Le(Xe, ht, At) : ze(Xe, ht, At));
                        return j = null, We
                    }]; Re < ee; Re++)
                    if (X = p.relative[I[Re].type]) Ue = [Zi(er(Ue), X)];
                    else {
                        if (X = p.filter[I[Re].type].apply(null, I[Re].matches), X[_t]) {
                            for (fe = ++Re; fe < ee && !p.relative[I[fe].type]; fe++);
                            return qr(Re > 1 && er(Ue), Re > 1 && Qi(I.slice(0, Re - 1).concat({
                                value: I[Re - 2].type === " " ? "*" : ""
                            })).replace(Si, "$1"), X, Re < fe && Wr(I.slice(Re, fe)), fe < ee && Wr(I = I.slice(fe)), fe < ee && Qi(I))
                        }
                        Ue.push(X)
                    } return er(Ue)
            }

            function Ms(I, j) {
                var X = j.length > 0,
                    fe = I.length > 0,
                    ee = function(ve, Ee, Re, Le, ze) {
                        var Ue, Xe, ht, At = 0,
                            We = "0",
                            Gt = ve && [],
                            Jt = [],
                            fn = Z,
                            Ot = ve || fe && p.find.TAG("*", ze),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = Ot.length;
                        for (ze && (Z = Ee == ue || Ee || ze); We !== h && (Ue = Ot[We]) != null; We++) {
                            if (fe && Ue) {
                                for (Xe = 0, !Ee && Ue.ownerDocument != ue && (ne(Ue), Re = !rt); ht = I[Xe++];)
                                    if (ht(Ue, Ee || ue, Re)) {
                                        Le.push(Ue);
                                        break
                                    } ze && (on = c)
                            }
                            X && ((Ue = !ht && Ue) && At--, ve && Gt.push(Ue))
                        }
                        if (At += We, X && We !== At) {
                            for (Xe = 0; ht = j[Xe++];) ht(Gt, Jt, Ee, Re);
                            if (ve) {
                                if (At > 0)
                                    for (; We--;) Gt[We] || Jt[We] || (Jt[We] = Mn.call(Le));
                                Jt = tr(Jt)
                            }
                            Cn.apply(Le, Jt), ze && !ve && Jt.length > 0 && At + j.length > 1 && St.uniqueSort(Le)
                        }
                        return ze && (on = c, Z = fn), Gt
                    };
                return X ? dn(ee) : ee
            }
            return z = St.compile = function(I, j) {
                var X, fe = [],
                    ee = [],
                    ve = Wi[I + " "];
                if (!ve) {
                    for (j || (j = T(I)), X = j.length; X--;) ve = Wr(j[X]), ve[_t] ? fe.push(ve) : ee.push(ve);
                    ve = Wi(I, Ms(ee, fe)), ve.selector = I
                }
                return ve
            }, G = St.select = function(I, j, X, fe) {
                var ee, ve, Ee, Re, Le, ze = typeof I == "function" && I,
                    Ue = !fe && T(I = ze.selector || I);
                if (X = X || [], Ue.length === 1) {
                    if (ve = Ue[0] = Ue[0].slice(0), ve.length > 2 && (Ee = ve[0]).type === "ID" && j.nodeType === 9 && rt && p.relative[ve[1].type]) {
                        if (j = (p.find.ID(Ee.matches[0].replace(Tn, xn), j) || [])[0], j) ze && (j = j.parentNode);
                        else return X;
                        I = I.slice(ve.shift().value.length)
                    }
                    for (ee = Xi.needsContext.test(I) ? 0 : ve.length; ee-- && (Ee = ve[ee], !p.relative[Re = Ee.type]);)
                        if ((Le = p.find[Re]) && (fe = Le(Ee.matches[0].replace(Tn, xn), Gr.test(ve[0].type) && Hr(j.parentNode) || j))) {
                            if (ve.splice(ee, 1), I = fe.length && Qi(ve), !I) return Cn.apply(X, fe), X;
                            break
                        }
                }
                return (ze || z(I, Ue))(fe, j, !rt, X, !j || Gr.test(I) && Hr(j.parentNode) || j), X
            }, u.sortStable = _t.split("").sort(Kn).join("") === _t, u.detectDuplicates = !!Ce, ne(), u.sortDetached = yn(function(I) {
                return I.compareDocumentPosition(ue.createElement("fieldset")) & 1
            }), yn(function(I) {
                return I.innerHTML = "<a href='#'></a>", I.firstChild.getAttribute("href") === "#"
            }) || Ki("type|href|height|width", function(I, j, X) {
                if (!X) return I.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !yn(function(I) {
                return I.innerHTML = "<input/>", I.firstChild.setAttribute("value", ""), I.firstChild.getAttribute("value") === ""
            })) && Ki("value", function(I, j, X) {
                if (!X && I.nodeName.toLowerCase() === "input") return I.defaultValue
            }), yn(function(I) {
                return I.getAttribute("disabled") == null
            }) || Ki(jr, function(I, j, X) {
                var fe;
                if (!X) return I[j] === !0 ? j.toLowerCase() : (fe = I.getAttributeNode(j)) && fe.specified ? fe.value : null
            }), St
        }(e);
        d.find = Oe, d.expr = Oe.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = Oe.uniqueSort, d.text = Oe.getText, d.isXMLDoc = Oe.isXML, d.contains = Oe.contains, d.escapeSelector = Oe.escape;
        var Pe = function(r, s, u) {
                for (var p = [], w = u !== void 0;
                    (r = r[s]) && r.nodeType !== 9;)
                    if (r.nodeType === 1) {
                        if (w && d(r).is(u)) break;
                        p.push(r)
                    } return p
            },
            lt = function(r, s) {
                for (var u = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && u.push(r);
                return u
            },
            Be = d.expr.match.needsContext;

        function J(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function U(r, s, u) {
            return re(s) ? d.grep(r, function(p, w) {
                return !!s.call(p, w, p) !== u
            }) : s.nodeType ? d.grep(r, function(p) {
                return p === s !== u
            }) : typeof s != "string" ? d.grep(r, function(p) {
                return k.call(s, p) > -1 !== u
            }) : d.filter(s, r, u)
        }
        d.filter = function(r, s, u) {
            var p = s[0];
            return u && (r = ":not(" + r + ")"), s.length === 1 && p.nodeType === 1 ? d.find.matchesSelector(p, r) ? [p] : [] : d.find.matches(r, d.grep(s, function(w) {
                return w.nodeType === 1
            }))
        }, d.fn.extend({
            find: function(r) {
                var s, u, p = this.length,
                    w = this;
                if (typeof r != "string") return this.pushStack(d(r).filter(function() {
                    for (s = 0; s < p; s++)
                        if (d.contains(w[s], this)) return !0
                }));
                for (u = this.pushStack([]), s = 0; s < p; s++) d.find(r, w[s], u);
                return p > 1 ? d.uniqueSort(u) : u
            },
            filter: function(r) {
                return this.pushStack(U(this, r || [], !1))
            },
            not: function(r) {
                return this.pushStack(U(this, r || [], !0))
            },
            is: function(r) {
                return !!U(this, typeof r == "string" && Be.test(r) ? d(r) : r || [], !1).length
            }
        });
        var oe, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            be = d.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || oe, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), je.test(p[1]) && d.isPlainObject(s))
                                for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return w = P.getElementById(p[2]), w && (this[0] = w, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (re(r)) return u.ready !== void 0 ? u.ready(r) : r(d)
                }
                return d.makeArray(r, this)
            };
        be.prototype = d.fn, oe = d(P);
        var we = /^(?:parents|prev(?:Until|All))/,
            he = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        d.fn.extend({
            has: function(r) {
                var s = d(r, this),
                    u = s.length;
                return this.filter(function() {
                    for (var p = 0; p < u; p++)
                        if (d.contains(this, s[p])) return !0
                })
            },
            closest: function(r, s) {
                var u, p = 0,
                    w = this.length,
                    E = [],
                    T = typeof r != "string" && d(r);
                if (!Be.test(r)) {
                    for (; p < w; p++)
                        for (u = this[p]; u && u !== s; u = u.parentNode)
                            if (u.nodeType < 11 && (T ? T.index(u) > -1 : u.nodeType === 1 && d.find.matchesSelector(u, r))) {
                                E.push(u);
                                break
                            }
                }
                return this.pushStack(E.length > 1 ? d.uniqueSort(E) : E)
            },
            index: function(r) {
                return r ? typeof r == "string" ? k.call(d(r), this[0]) : k.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(r, s) {
                return this.pushStack(d.uniqueSort(d.merge(this.get(), d(r, s))))
            },
            addBack: function(r) {
                return this.add(r == null ? this.prevObject : this.prevObject.filter(r))
            }
        });

        function Se(r, s) {
            for (;
                (r = r[s]) && r.nodeType !== 1;);
            return r
        }
        d.each({
            parent: function(r) {
                var s = r.parentNode;
                return s && s.nodeType !== 11 ? s : null
            },
            parents: function(r) {
                return Pe(r, "parentNode")
            },
            parentsUntil: function(r, s, u) {
                return Pe(r, "parentNode", u)
            },
            next: function(r) {
                return Se(r, "nextSibling")
            },
            prev: function(r) {
                return Se(r, "previousSibling")
            },
            nextAll: function(r) {
                return Pe(r, "nextSibling")
            },
            prevAll: function(r) {
                return Pe(r, "previousSibling")
            },
            nextUntil: function(r, s, u) {
                return Pe(r, "nextSibling", u)
            },
            prevUntil: function(r, s, u) {
                return Pe(r, "previousSibling", u)
            },
            siblings: function(r) {
                return lt((r.parentNode || {}).firstChild, r)
            },
            children: function(r) {
                return lt(r.firstChild)
            },
            contents: function(r) {
                return r.contentDocument != null && o(r.contentDocument) ? r.contentDocument : (J(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
            }
        }, function(r, s) {
            d.fn[r] = function(u, p) {
                var w = d.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = d.filter(p, w)), this.length > 1 && (he[r] || d.uniqueSort(w), we.test(r) && w.reverse()), this.pushStack(w)
            }
        });
        var Te = /[^\x20\t\r\n\f]+/g;

        function $e(r) {
            var s = {};
            return d.each(r.match(Te) || [], function(u, p) {
                s[p] = !0
            }), s
        }
        d.Callbacks = function(r) {
            r = typeof r == "string" ? $e(r) : d.extend({}, r);
            var s, u, p, w, E = [],
                T = [],
                z = -1,
                G = function() {
                    for (w = w || r.once, p = s = !0; T.length; z = -1)
                        for (u = T.shift(); ++z < E.length;) E[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = E.length, u = !1);
                    r.memory || (u = !1), s = !1, w && (u ? E = [] : E = "")
                },
                Z = {
                    add: function() {
                        return E && (u && !s && (z = E.length - 1, T.push(u)), function ce(Ce) {
                            d.each(Ce, function(ne, ue) {
                                re(ue) ? (!r.unique || !Z.has(ue)) && E.push(ue) : ue && ue.length && se(ue) !== "string" && ce(ue)
                            })
                        }(arguments), u && !s && G()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(ce, Ce) {
                            for (var ne;
                                (ne = d.inArray(Ce, E, ne)) > -1;) E.splice(ne, 1), ne <= z && z--
                        }), this
                    },
                    has: function(ce) {
                        return ce ? d.inArray(ce, E) > -1 : E.length > 0
                    },
                    empty: function() {
                        return E && (E = []), this
                    },
                    disable: function() {
                        return w = T = [], E = u = "", this
                    },
                    disabled: function() {
                        return !E
                    },
                    lock: function() {
                        return w = T = [], !u && !s && (E = u = ""), this
                    },
                    locked: function() {
                        return !!w
                    },
                    fireWith: function(ce, Ce) {
                        return w || (Ce = Ce || [], Ce = [ce, Ce.slice ? Ce.slice() : Ce], T.push(Ce), s || G()), this
                    },
                    fire: function() {
                        return Z.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!p
                    }
                };
            return Z
        };

        function Ke(r) {
            return r
        }

        function dt(r) {
            throw r
        }

        function Bt(r, s, u, p) {
            var w;
            try {
                r && re(w = r.promise) ? w.call(r).done(s).fail(u) : r && re(w = r.then) ? w.call(r, s, u) : s.apply(void 0, [r].slice(p))
            } catch (E) {
                u.apply(void 0, [E])
            }
        }
        d.extend({
            Deferred: function(r) {
                var s = [
                        ["notify", "progress", d.Callbacks("memory"), d.Callbacks("memory"), 2],
                        ["resolve", "done", d.Callbacks("once memory"), d.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", d.Callbacks("once memory"), d.Callbacks("once memory"), 1, "rejected"]
                    ],
                    u = "pending",
                    p = {
                        state: function() {
                            return u
                        },
                        always: function() {
                            return w.done(arguments).fail(arguments), this
                        },
                        catch: function(E) {
                            return p.then(null, E)
                        },
                        pipe: function() {
                            var E = arguments;
                            return d.Deferred(function(T) {
                                d.each(s, function(z, G) {
                                    var Z = re(E[G[4]]) && E[G[4]];
                                    w[G[1]](function() {
                                        var ce = Z && Z.apply(this, arguments);
                                        ce && re(ce.promise) ? ce.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[G[0] + "With"](this, Z ? [ce] : arguments)
                                    })
                                }), E = null
                            }).promise()
                        },
                        then: function(E, T, z) {
                            var G = 0;

                            function Z(ce, Ce, ne, ue) {
                                return function() {
                                    var He = this,
                                        rt = arguments,
                                        Fe = function() {
                                            var Nt, un;
                                            if (!(ce < G)) {
                                                if (Nt = ne.apply(He, rt), Nt === Ce.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, re(un) ? ue ? un.call(Nt, Z(G, Ce, Ke, ue), Z(G, Ce, dt, ue)) : (G++, un.call(Nt, Z(G, Ce, Ke, ue), Z(G, Ce, dt, ue), Z(G, Ce, Ke, Ce.notifyWith))) : (ne !== Ke && (He = void 0, rt = [Nt]), (ue || Ce.resolveWith)(He, rt))
                                            }
                                        },
                                        zt = ue ? Fe : function() {
                                            try {
                                                Fe()
                                            } catch (Nt) {
                                                d.Deferred.exceptionHook && d.Deferred.exceptionHook(Nt, zt.stackTrace), ce + 1 >= G && (ne !== dt && (He = void 0, rt = [Nt]), Ce.rejectWith(He, rt))
                                            }
                                        };
                                    ce ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return d.Deferred(function(ce) {
                                s[0][3].add(Z(0, ce, re(z) ? z : Ke, ce.notifyWith)), s[1][3].add(Z(0, ce, re(E) ? E : Ke)), s[2][3].add(Z(0, ce, re(T) ? T : dt))
                            }).promise()
                        },
                        promise: function(E) {
                            return E != null ? d.extend(E, p) : p
                        }
                    },
                    w = {};
                return d.each(s, function(E, T) {
                    var z = T[2],
                        G = T[5];
                    p[T[1]] = z.add, G && z.add(function() {
                        u = G
                    }, s[3 - E][2].disable, s[3 - E][3].disable, s[0][2].lock, s[0][3].lock), z.add(T[3].fire), w[T[0]] = function() {
                        return w[T[0] + "With"](this === w ? void 0 : this, arguments), this
                    }, w[T[0] + "With"] = z.fireWith
                }), p.promise(w), r && r.call(w, w), w
            },
            when: function(r) {
                var s = arguments.length,
                    u = s,
                    p = Array(u),
                    w = f.call(arguments),
                    E = d.Deferred(),
                    T = function(z) {
                        return function(G) {
                            p[z] = this, w[z] = arguments.length > 1 ? f.call(arguments) : G, --s || E.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && (Bt(r, E.done(T(u)).resolve, E.reject, !s), E.state() === "pending" || re(w[u] && w[u].then))) return E.then();
                for (; u--;) Bt(w[u], T(u), E.reject);
                return E.promise()
            }
        });
        var Ht = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        d.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && Ht.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
        }, d.readyException = function(r) {
            e.setTimeout(function() {
                throw r
            })
        };
        var _ = d.Deferred();
        d.fn.ready = function(r) {
            return _.then(r).catch(function(s) {
                d.readyException(s)
            }), this
        }, d.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(r) {
                (r === !0 ? --d.readyWait : d.isReady) || (d.isReady = !0, !(r !== !0 && --d.readyWait > 0) && _.resolveWith(P, [d]))
            }
        }), d.ready.then = _.then;

        function l() {
            P.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), d.ready()
        }
        P.readyState === "complete" || P.readyState !== "loading" && !P.documentElement.doScroll ? e.setTimeout(d.ready) : (P.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(r, s, u, p, w, E, T) {
                var z = 0,
                    G = r.length,
                    Z = u == null;
                if (se(u) === "object") {
                    w = !0;
                    for (z in u) g(r, s, z, u[z], !0, E, T)
                } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(ce, Ce, ne) {
                        return Z.call(d(ce), ne)
                    })), s))
                    for (; z < G; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return w ? r : Z ? s.call(r) : G ? s(r[0], u) : E
            },
            S = /^-ms-/,
            R = /-([a-z])/g;

        function L(r, s) {
            return s.toUpperCase()
        }

        function B(r) {
            return r.replace(S, "ms-").replace(R, L)
        }
        var te = function(r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function ke() {
            this.expando = d.expando + ke.uid++
        }
        ke.uid = 1, ke.prototype = {
            cache: function(r) {
                var s = r[this.expando];
                return s || (s = {}, te(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
                    value: s,
                    configurable: !0
                }))), s
            },
            set: function(r, s, u) {
                var p, w = this.cache(r);
                if (typeof s == "string") w[B(s)] = u;
                else
                    for (p in s) w[B(p)] = s[p];
                return w
            },
            get: function(r, s) {
                return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][B(s)]
            },
            access: function(r, s, u) {
                return s === void 0 || s && typeof s == "string" && u === void 0 ? this.get(r, s) : (this.set(r, s, u), u !== void 0 ? u : s)
            },
            remove: function(r, s) {
                var u, p = r[this.expando];
                if (p !== void 0) {
                    if (s !== void 0)
                        for (Array.isArray(s) ? s = s.map(B) : (s = B(s), s = s in p ? [s] : s.match(Te) || []), u = s.length; u--;) delete p[s[u]];
                    (s === void 0 || d.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            },
            hasData: function(r) {
                var s = r[this.expando];
                return s !== void 0 && !d.isEmptyObject(s)
            }
        };
        var de = new ke,
            De = new ke,
            Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            nt = /[A-Z]/g;

        function Ct(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Me.test(r) ? JSON.parse(r) : r
        }

        function rn(r, s, u) {
            var p;
            if (u === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(nt, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                    try {
                        u = Ct(u)
                    } catch {}
                    De.set(r, s, u)
                } else u = void 0;
            return u
        }
        d.extend({
            hasData: function(r) {
                return De.hasData(r) || de.hasData(r)
            },
            data: function(r, s, u) {
                return De.access(r, s, u)
            },
            removeData: function(r, s) {
                De.remove(r, s)
            },
            _data: function(r, s, u) {
                return de.access(r, s, u)
            },
            _removeData: function(r, s) {
                de.remove(r, s)
            }
        }), d.fn.extend({
            data: function(r, s) {
                var u, p, w, E = this[0],
                    T = E && E.attributes;
                if (r === void 0) {
                    if (this.length && (w = De.get(E), E.nodeType === 1 && !de.get(E, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = B(p.slice(5)), rn(E, p, w[p])));
                        de.set(E, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    De.set(this, r)
                }) : g(this, function(z) {
                    var G;
                    if (E && z === void 0) return G = De.get(E, r), G !== void 0 || (G = rn(E, r), G !== void 0) ? G : void 0;
                    this.each(function() {
                        De.set(this, r, z)
                    })
                }, null, s, arguments.length > 1, null, !0)
            },
            removeData: function(r) {
                return this.each(function() {
                    De.remove(this, r)
                })
            }
        }), d.extend({
            queue: function(r, s, u) {
                var p;
                if (r) return s = (s || "fx") + "queue", p = de.get(r, s), u && (!p || Array.isArray(u) ? p = de.access(r, s, d.makeArray(u)) : p.push(u)), p || []
            },
            dequeue: function(r, s) {
                s = s || "fx";
                var u = d.queue(r, s),
                    p = u.length,
                    w = u.shift(),
                    E = d._queueHooks(r, s),
                    T = function() {
                        d.dequeue(r, s)
                    };
                w === "inprogress" && (w = u.shift(), p--), w && (s === "fx" && u.unshift("inprogress"), delete E.stop, w.call(r, T, E)), !p && E && E.empty.fire()
            },
            _queueHooks: function(r, s) {
                var u = s + "queueHooks";
                return de.get(r, u) || de.access(r, u, {
                    empty: d.Callbacks("once memory").add(function() {
                        de.remove(r, [s + "queue", u])
                    })
                })
            }
        }), d.fn.extend({
            queue: function(r, s) {
                var u = 2;
                return typeof r != "string" && (s = r, r = "fx", u--), arguments.length < u ? d.queue(this[0], r) : s === void 0 ? this : this.each(function() {
                    var p = d.queue(this, r, s);
                    d._queueHooks(this, r), r === "fx" && p[0] !== "inprogress" && d.dequeue(this, r)
                })
            },
            dequeue: function(r) {
                return this.each(function() {
                    d.dequeue(this, r)
                })
            },
            clearQueue: function(r) {
                return this.queue(r || "fx", [])
            },
            promise: function(r, s) {
                var u, p = 1,
                    w = d.Deferred(),
                    E = this,
                    T = this.length,
                    z = function() {
                        --p || w.resolveWith(E, [E])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = de.get(E[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                return z(), w.promise(s)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            yt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            bt = ["Top", "Right", "Bottom", "Left"],
            Kt = P.documentElement,
            Je = function(r) {
                return d.contains(r.ownerDocument, r)
            },
            Lt = {
                composed: !0
            };
        Kt.getRootNode && (Je = function(r) {
            return d.contains(r.ownerDocument, r) || r.getRootNode(Lt) === r.ownerDocument
        });
        var F = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && d.css(r, "display") === "none"
        };

        function N(r, s, u, p) {
            var w, E, T = 20,
                z = p ? function() {
                    return p.cur()
                } : function() {
                    return d.css(r, s, "")
                },
                G = z(),
                Z = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                ce = r.nodeType && (d.cssNumber[s] || Z !== "px" && +G) && yt.exec(d.css(r, s));
            if (ce && ce[3] !== Z) {
                for (G = G / 2, Z = Z || ce[3], ce = +G || 1; T--;) d.style(r, s, ce + Z), (1 - E) * (1 - (E = z() / G || .5)) <= 0 && (T = 0), ce = ce / E;
                ce = ce * 2, d.style(r, s, ce + Z), u = u || []
            }
            return u && (ce = +ce || +G || 0, w = u[1] ? ce + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = ce, p.end = w)), w
        }
        var W = {};

        function M(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = W[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), W[p] = w, w)
        }

        function H(r, s) {
            for (var u, p, w = [], E = 0, T = r.length; E < T; E++) p = r[E], p.style && (u = p.style.display, s ? (u === "none" && (w[E] = de.get(p, "display") || null, w[E] || (p.style.display = "")), p.style.display === "" && F(p) && (w[E] = M(p))) : u !== "none" && (w[E] = "none", de.set(p, "display", u)));
            for (E = 0; E < T; E++) w[E] != null && (r[E].style.display = w[E]);
            return r
        }
        d.fn.extend({
            show: function() {
                return H(this, !0)
            },
            hide: function() {
                return H(this)
            },
            toggle: function(r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                    F(this) ? d(this).show() : d(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ne = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var r = P.createDocumentFragment(),
                s = r.appendChild(P.createElement("div")),
                u = P.createElement("input");
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), K.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", K.option = !!s.lastChild
        })();
        var Ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, K.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && J(r, s) ? d.merge([r], u) : u
        }

        function Ft(r, s) {
            for (var u = 0, p = r.length; u < p; u++) de.set(r[u], "globalEval", !s || de.get(s[u], "globalEval"))
        }
        var Ye = /<|&#?\w+;/;

        function In(r, s, u, p, w) {
            for (var E, T, z, G, Z, ce, Ce = s.createDocumentFragment(), ne = [], ue = 0, He = r.length; ue < He; ue++)
                if (E = r[ue], E || E === 0)
                    if (se(E) === "object") d.merge(ne, E.nodeType ? [E] : E);
                    else if (!Ye.test(E)) ne.push(s.createTextNode(E));
            else {
                for (T = T || Ce.appendChild(s.createElement("div")), z = (ge.exec(E) || ["", ""])[1].toLowerCase(), G = Ve[z] || Ve._default, T.innerHTML = G[1] + d.htmlPrefilter(E) + G[2], ce = G[0]; ce--;) T = T.lastChild;
                d.merge(ne, T.childNodes), T = Ce.firstChild, T.textContent = ""
            }
            for (Ce.textContent = "", ue = 0; E = ne[ue++];) {
                if (p && d.inArray(E, p) > -1) {
                    w && w.push(E);
                    continue
                }
                if (Z = Je(E), T = pt(Ce.appendChild(E), "script"), Z && Ft(T), u)
                    for (ce = 0; E = T[ce++];) Ne.test(E.type || "") && u.push(E)
            }
            return Ce
        }
        var Pn = /^([^.]*)(?:\.(.+)|)/;

        function it() {
            return !0
        }

        function Dn() {
            return !1
        }

        function gi(r, s) {
            return r === Sr() == (s === "focus")
        }

        function Sr() {
            try {
                return P.activeElement
            } catch {}
        }

        function kn(r, s, u, p, w, E) {
            var T, z;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (z in s) kn(r, z, u, p, s[z], E);
                return r
            }
            if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Dn;
            else if (!w) return r;
            return E === 1 && (T = w, w = function(G) {
                return d().off(G), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = d.guid++)), r.each(function() {
                d.event.add(this, s, w, p, u)
            })
        }
        d.event = {
            global: {},
            add: function(r, s, u, p, w) {
                var E, T, z, G, Z, ce, Ce, ne, ue, He, rt, Fe = de.get(r);
                if (!!te(r))
                    for (u.handler && (E = u, u = E.handler, w = E.selector), w && d.find.matchesSelector(Kt, w), u.guid || (u.guid = d.guid++), (G = Fe.events) || (G = Fe.events = Object.create(null)), (T = Fe.handle) || (T = Fe.handle = function(zt) {
                            return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], Z = s.length; Z--;) z = Pn.exec(s[Z]) || [], ue = rt = z[1], He = (z[2] || "").split(".").sort(), ue && (Ce = d.event.special[ue] || {}, ue = (w ? Ce.delegateType : Ce.bindType) || ue, Ce = d.event.special[ue] || {}, ce = d.extend({
                        type: ue,
                        origType: rt,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && d.expr.match.needsContext.test(w),
                        namespace: He.join(".")
                    }, E), (ne = G[ue]) || (ne = G[ue] = [], ne.delegateCount = 0, (!Ce.setup || Ce.setup.call(r, p, He, T) === !1) && r.addEventListener && r.addEventListener(ue, T)), Ce.add && (Ce.add.call(r, ce), ce.handler.guid || (ce.handler.guid = u.guid)), w ? ne.splice(ne.delegateCount++, 0, ce) : ne.push(ce), d.event.global[ue] = !0)
            },
            remove: function(r, s, u, p, w) {
                var E, T, z, G, Z, ce, Ce, ne, ue, He, rt, Fe = de.hasData(r) && de.get(r);
                if (!(!Fe || !(G = Fe.events))) {
                    for (s = (s || "").match(Te) || [""], Z = s.length; Z--;) {
                        if (z = Pn.exec(s[Z]) || [], ue = rt = z[1], He = (z[2] || "").split(".").sort(), !ue) {
                            for (ue in G) d.event.remove(r, ue + s[Z], u, p, !0);
                            continue
                        }
                        for (Ce = d.event.special[ue] || {}, ue = (p ? Ce.delegateType : Ce.bindType) || ue, ne = G[ue] || [], z = z[2] && new RegExp("(^|\\.)" + He.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = E = ne.length; E--;) ce = ne[E], (w || rt === ce.origType) && (!u || u.guid === ce.guid) && (!z || z.test(ce.namespace)) && (!p || p === ce.selector || p === "**" && ce.selector) && (ne.splice(E, 1), ce.selector && ne.delegateCount--, Ce.remove && Ce.remove.call(r, ce));
                        T && !ne.length && ((!Ce.teardown || Ce.teardown.call(r, He, Fe.handle) === !1) && d.removeEvent(r, ue, Fe.handle), delete G[ue])
                    }
                    d.isEmptyObject(G) && de.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, E, T, z = new Array(arguments.length),
                    G = d.event.fix(r),
                    Z = (de.get(this, "events") || Object.create(null))[G.type] || [],
                    ce = d.event.special[G.type] || {};
                for (z[0] = G, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (G.delegateTarget = this, !(ce.preDispatch && ce.preDispatch.call(this, G) === !1)) {
                    for (T = d.event.handlers.call(this, G, Z), s = 0;
                        (w = T[s++]) && !G.isPropagationStopped();)
                        for (G.currentTarget = w.elem, u = 0;
                            (E = w.handlers[u++]) && !G.isImmediatePropagationStopped();)(!G.rnamespace || E.namespace === !1 || G.rnamespace.test(E.namespace)) && (G.handleObj = E, G.data = E.data, p = ((d.event.special[E.origType] || {}).handle || E.handler).apply(w.elem, z), p !== void 0 && (G.result = p) === !1 && (G.preventDefault(), G.stopPropagation()));
                    return ce.postDispatch && ce.postDispatch.call(this, G), G.result
                }
            },
            handlers: function(r, s) {
                var u, p, w, E, T, z = [],
                    G = s.delegateCount,
                    Z = r.target;
                if (G && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; Z !== this; Z = Z.parentNode || this)
                        if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                            for (E = [], T = {}, u = 0; u < G; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? d(w, this).index(Z) > -1 : d.find(w, this, null, [Z]).length), T[w] && E.push(p);
                            E.length && z.push({
                                elem: Z,
                                handlers: E
                            })
                        }
                }
                return Z = this, G < s.length && z.push({
                    elem: Z,
                    handlers: s.slice(G)
                }), z
            },
            addProp: function(r, s) {
                Object.defineProperty(d.Event.prototype, r, {
                    enumerable: !0,
                    configurable: !0,
                    get: re(s) ? function() {
                        if (this.originalEvent) return s(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[r]
                    },
                    set: function(u) {
                        Object.defineProperty(this, r, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: u
                        })
                    }
                })
            },
            fix: function(r) {
                return r[d.expando] ? r : new d.Event(r)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && J(s, "input") && sn(s, "click", it), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && J(s, "input") && sn(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return pe.test(s.type) && s.click && J(s, "input") && de.get(s, "click") || J(s, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(r) {
                        r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result)
                    }
                }
            }
        };

        function sn(r, s, u) {
            if (!u) {
                de.get(r, s) === void 0 && d.event.add(r, s, it);
                return
            }
            de.set(r, s, !1), d.event.add(r, s, {
                namespace: !1,
                handler: function(p) {
                    var w, E, T = de.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = f.call(arguments), de.set(this, s, T), w = u(this, s), this[s](), E = de.get(this, s), T !== E || w ? de.set(this, s, !1) : E = {}, T !== E) return p.stopImmediatePropagation(), p.preventDefault(), E && E.value
                    } else T.length && (de.set(this, s, {
                        value: d.event.trigger(d.extend(T[0], d.Event.prototype), T.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        d.removeEvent = function(r, s, u) {
            r.removeEventListener && r.removeEventListener(s, u)
        }, d.Event = function(r, s) {
            if (!(this instanceof d.Event)) return new d.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? it : Dn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && d.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[d.expando] = !0
        }, d.Event.prototype = {
            constructor: d.Event,
            isDefaultPrevented: Dn,
            isPropagationStopped: Dn,
            isImmediatePropagationStopped: Dn,
            isSimulated: !1,
            preventDefault: function() {
                var r = this.originalEvent;
                this.isDefaultPrevented = it, r && !this.isSimulated && r.preventDefault()
            },
            stopPropagation: function() {
                var r = this.originalEvent;
                this.isPropagationStopped = it, r && !this.isSimulated && r.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var r = this.originalEvent;
                this.isImmediatePropagationStopped = it, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation()
            }
        }, d.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, d.event.addProp), d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            d.event.special[r] = {
                setup: function() {
                    return sn(this, r, gi), !1
                },
                trigger: function() {
                    return sn(this, r), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: s
            }
        }), d.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(r, s) {
            d.event.special[r] = {
                delegateType: s,
                bindType: s,
                handle: function(u) {
                    var p, w = this,
                        E = u.relatedTarget,
                        T = u.handleObj;
                    return (!E || E !== w && !d.contains(w, E)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = s), p
                }
            }
        }), d.fn.extend({
            on: function(r, s, u, p) {
                return kn(this, r, s, u, p)
            },
            one: function(r, s, u, p) {
                return kn(this, r, s, u, p, 1)
            },
            off: function(r, s, u) {
                var p, w;
                if (r && r.preventDefault && r.handleObj) return p = r.handleObj, d(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof r == "object") {
                    for (w in r) this.off(w, s, r[w]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Dn), this.each(function() {
                    d.event.remove(this, r, u, s)
                })
            }
        });
        var kr = /<script|<style|<link/i,
            Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            mi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $i(r, s) {
            return J(r, "table") && J(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
        }

        function vi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function yi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function Fi(r, s) {
            var u, p, w, E, T, z, G;
            if (s.nodeType === 1) {
                if (de.hasData(r) && (E = de.get(r), G = E.events, G)) {
                    de.remove(s, "handle events");
                    for (w in G)
                        for (u = 0, p = G[w].length; u < p; u++) d.event.add(s, w, G[w][u])
                }
                De.hasData(r) && (T = De.access(r), z = d.extend({}, T), De.set(s, z))
            }
        }

        function ji(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && pe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, u, p) {
            s = v(s);
            var w, E, T, z, G, Z, ce = 0,
                Ce = r.length,
                ne = Ce - 1,
                ue = s[0],
                He = re(ue);
            if (He || Ce > 1 && typeof ue == "string" && !K.checkClone && Tr.test(ue)) return r.each(function(rt) {
                var Fe = r.eq(rt);
                He && (s[0] = ue.call(this, rt, Fe.html())), mn(Fe, s, u, p)
            });
            if (Ce && (w = In(s, r[0].ownerDocument, !1, r, p), E = w.firstChild, w.childNodes.length === 1 && (w = E), E || p)) {
                for (T = d.map(pt(w, "script"), vi), z = T.length; ce < Ce; ce++) G = w, ce !== ne && (G = d.clone(G, !0, !0), z && d.merge(T, pt(G, "script"))), u.call(r[ce], G, ce);
                if (z)
                    for (Z = T[T.length - 1].ownerDocument, d.map(T, yi), ce = 0; ce < z; ce++) G = T[ce], Ne.test(G.type || "") && !de.access(G, "globalEval") && d.contains(Z, G) && (G.src && (G.type || "").toLowerCase() !== "module" ? d._evalUrl && !G.noModule && d._evalUrl(G.src, {
                        nonce: G.nonce || G.getAttribute("nonce")
                    }, Z) : le(G.textContent.replace(mi, ""), G, Z))
            }
            return r
        }

        function zi(r, s, u) {
            for (var p, w = s ? d.filter(s, r) : r, E = 0;
                (p = w[E]) != null; E++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Je(p) && Ft(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        d.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, E, T, z = r.cloneNode(!0),
                    G = Je(r);
                if (!K.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                    for (T = pt(z), E = pt(r), p = 0, w = E.length; p < w; p++) ji(E[p], T[p]);
                if (s)
                    if (u)
                        for (E = E || pt(r), T = T || pt(z), p = 0, w = E.length; p < w; p++) Fi(E[p], T[p]);
                    else Fi(r, z);
                return T = pt(z, "script"), T.length > 0 && Ft(T, !G && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, w = d.event.special, E = 0;
                    (u = r[E]) !== void 0; E++)
                    if (te(u)) {
                        if (s = u[de.expando]) {
                            if (s.events)
                                for (p in s.events) w[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                            u[de.expando] = void 0
                        }
                        u[De.expando] && (u[De.expando] = void 0)
                    }
            }
        }), d.fn.extend({
            detach: function(r) {
                return zi(this, r, !0)
            },
            remove: function(r) {
                return zi(this, r)
            },
            text: function(r) {
                return g(this, function(s) {
                    return s === void 0 ? d.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = s)
                    })
                }, null, r, arguments.length)
            },
            append: function() {
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = $i(this, r);
                        s.appendChild(r)
                    }
                })
            },
            prepend: function() {
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = $i(this, r);
                        s.insertBefore(r, s.firstChild)
                    }
                })
            },
            before: function() {
                return mn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this)
                })
            },
            after: function() {
                return mn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this.nextSibling)
                })
            },
            empty: function() {
                for (var r, s = 0;
                    (r = this[s]) != null; s++) r.nodeType === 1 && (d.cleanData(pt(r, !1)), r.textContent = "");
                return this
            },
            clone: function(r, s) {
                return r = r == null ? !1 : r, s = s == null ? r : s, this.map(function() {
                    return d.clone(this, r, s)
                })
            },
            html: function(r) {
                return g(this, function(s) {
                    var u = this[0] || {},
                        p = 0,
                        w = this.length;
                    if (s === void 0 && u.nodeType === 1) return u.innerHTML;
                    if (typeof s == "string" && !kr.test(s) && !Ve[(ge.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = d.htmlPrefilter(s);
                        try {
                            for (; p < w; p++) u = this[p] || {}, u.nodeType === 1 && (d.cleanData(pt(u, !1)), u.innerHTML = s);
                            u = 0
                        } catch {}
                    }
                    u && this.empty().append(s)
                }, null, r, arguments.length)
            },
            replaceWith: function() {
                var r = [];
                return mn(this, arguments, function(s) {
                    var u = this.parentNode;
                    d.inArray(this, r) < 0 && (d.cleanData(pt(this)), u && u.replaceChild(s, this))
                }, r)
            }
        }), d.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(r, s) {
            d.fn[r] = function(u) {
                for (var p, w = [], E = d(u), T = E.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), d(E[z])[s](p), b.apply(w, p.get());
                return this.pushStack(w)
            }
        });
        var wi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            Gn = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Gi = function(r, s, u) {
                var p, w, E = {};
                for (w in s) E[w] = r.style[w], r.style[w] = s[w];
                p = u.call(r);
                for (w in s) r.style[w] = E[w];
                return p
            },
            bi = new RegExp(bt.join("|"), "i");
        (function() {
            function r() {
                if (!!Z) {
                    G.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Kt.appendChild(G).appendChild(Z);
                    var ce = e.getComputedStyle(Z);
                    u = ce.top !== "1%", z = s(ce.marginLeft) === 12, Z.style.right = "60%", E = s(ce.right) === 36, p = s(ce.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Kt.removeChild(G), Z = null
                }
            }

            function s(ce) {
                return Math.round(parseFloat(ce))
            }
            var u, p, w, E, T, z, G = P.createElement("div"),
                Z = P.createElement("div");
            !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = Z.style.backgroundClip === "content-box", d.extend(K, {
                boxSizingReliable: function() {
                    return r(), p
                },
                pixelBoxStyles: function() {
                    return r(), E
                },
                pixelPosition: function() {
                    return r(), u
                },
                reliableMarginLeft: function() {
                    return r(), z
                },
                scrollboxSize: function() {
                    return r(), w
                },
                reliableTrDimensions: function() {
                    var ce, Ce, ne, ue;
                    return T == null && (ce = P.createElement("table"), Ce = P.createElement("tr"), ne = P.createElement("div"), ce.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Ce.style.cssText = "border:1px solid", Ce.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Kt.appendChild(ce).appendChild(Ce).appendChild(ne), ue = e.getComputedStyle(Ce), T = parseInt(ue.height, 10) + parseInt(ue.borderTopWidth, 10) + parseInt(ue.borderBottomWidth, 10) === Ce.offsetHeight, Kt.removeChild(ce)), T
                }
            }))
        })();

        function Ze(r, s, u) {
            var p, w, E, T, z = r.style;
            return u = u || Gn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = d.style(r, s)), !K.pixelBoxStyles() && wi.test(T) && bi.test(s) && (p = z.width, w = z.minWidth, E = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = E)), T !== void 0 ? T + "" : T
        }

        function y(r, s) {
            return {
                get: function() {
                    if (r()) {
                        delete this.get;
                        return
                    }
                    return (this.get = s).apply(this, arguments)
                }
            }
        }
        var a = ["Webkit", "Moz", "ms"],
            x = P.createElement("div").style,
            O = {};

        function Q(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), u = a.length; u--;)
                if (r = a[u] + s, r in x) return r
        }

        function xe(r) {
            var s = d.cssProps[r] || O[r];
            return s || (r in x ? r : O[r] = Q(r) || r)
        }
        var qe = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            Wt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Un = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Nn(r, s, u) {
            var p = yt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function Hn(r, s, u, p, w, E) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                G = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (G += d.css(r, u + bt[T], !0, w)), p ? (u === "content" && (G -= d.css(r, "padding" + bt[T], !0, w)), u !== "margin" && (G -= d.css(r, "border" + bt[T] + "Width", !0, w))) : (G += d.css(r, "padding" + bt[T], !0, w), u !== "padding" ? G += d.css(r, "border" + bt[T] + "Width", !0, w) : z += d.css(r, "border" + bt[T] + "Width", !0, w));
            return !p && E >= 0 && (G += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - E - G - z - .5)) || 0), G
        }

        function Ar(r, s, u) {
            var p = Gn(r),
                w = !K.boxSizingReliable() || u,
                E = w && d.css(r, "boxSizing", !1, p) === "border-box",
                T = E,
                z = Ze(r, s, p),
                G = "offset" + s[0].toUpperCase() + s.slice(1);
            if (wi.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!K.boxSizingReliable() && E || !K.reliableTrDimensions() && J(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (E = d.css(r, "boxSizing", !1, p) === "border-box", T = G in r, T && (z = r[G])), z = parseFloat(z) || 0, z + Hn(r, s, u || (E ? "border" : "content"), T, p, z) + "px"
        }
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(r, s) {
                        if (s) {
                            var u = Ze(r, "opacity");
                            return u === "" ? "1" : u
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(r, s, u, p) {
                if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
                    var w, E, T, z = B(s),
                        G = It.test(s),
                        Z = r.style;
                    if (G || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                        if (E = typeof u, E === "string" && (w = yt.exec(u)) && w[1] && (u = N(r, s, w), E = "number"), u == null || u !== u) return;
                        E === "number" && !G && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !K.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (G ? Z.setProperty(s, u) : Z[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                }
            },
            css: function(r, s, u, p) {
                var w, E, T, z = B(s),
                    G = It.test(s);
                return G || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = Ze(r, s, p)), w === "normal" && s in Un && (w = Un[s]), u === "" || u ? (E = parseFloat(w), u === !0 || isFinite(E) ? E || 0 : w) : w
            }
        }), d.each(["height", "width"], function(r, s) {
            d.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return qe.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Gi(u, Wt, function() {
                        return Ar(u, s, w)
                    }) : Ar(u, s, w)
                },
                set: function(u, p, w) {
                    var E, T = Gn(u),
                        z = !K.scrollboxSize() && T.position === "absolute",
                        G = z || w,
                        Z = G && d.css(u, "boxSizing", !1, T) === "border-box",
                        ce = w ? Hn(u, s, w, Z, T) : 0;
                    return Z && z && (ce -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Hn(u, s, "border", !1, T) - .5)), ce && (E = yt.exec(p)) && (E[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Nn(u, p, ce)
                }
            }
        }), d.cssHooks.marginLeft = y(K.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Gi(r, {
                marginLeft: 0
            }, function() {
                return r.getBoundingClientRect().left
            })) + "px"
        }), d.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, s) {
            d.cssHooks[r + s] = {
                expand: function(u) {
                    for (var p = 0, w = {}, E = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) w[r + bt[p] + s] = E[p] || E[p - 2] || E[0];
                    return w
                }
            }, r !== "margin" && (d.cssHooks[r + s].set = Nn)
        }), d.fn.extend({
            css: function(r, s) {
                return g(this, function(u, p, w) {
                    var E, T, z = {},
                        G = 0;
                    if (Array.isArray(p)) {
                        for (E = Gn(u), T = p.length; G < T; G++) z[p[G]] = d.css(u, p[G], !1, E);
                        return z
                    }
                    return w !== void 0 ? d.style(u, p, w) : d.css(u, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Xt(r, s, u, p, w) {
            return new Xt.prototype.init(r, s, u, p, w)
        }
        d.Tween = Xt, Xt.prototype = {
            constructor: Xt,
            init: function(r, s, u, p, w, E) {
                this.elem = r, this.prop = u, this.easing = w || d.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = E || (d.cssNumber[u] ? "" : "px")
            },
            cur: function() {
                var r = Xt.propHooks[this.prop];
                return r && r.get ? r.get(this) : Xt.propHooks._default.get(this)
            },
            run: function(r) {
                var s, u = Xt.propHooks[this.prop];
                return this.options.duration ? this.pos = s = d.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : Xt.propHooks._default.set(this), this
            }
        }, Xt.prototype.init.prototype = Xt.prototype, Xt.propHooks = {
            _default: {
                get: function(r) {
                    var s;
                    return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = d.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s)
                },
                set: function(r) {
                    d.fx.step[r.prop] ? d.fx.step[r.prop](r) : r.elem.nodeType === 1 && (d.cssHooks[r.prop] || r.elem.style[xe(r.prop)] != null) ? d.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
                }
            }
        }, Xt.propHooks.scrollTop = Xt.propHooks.scrollLeft = {
            set: function(r) {
                r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now)
            }
        }, d.easing = {
            linear: function(r) {
                return r
            },
            swing: function(r) {
                return .5 - Math.cos(r * Math.PI) / 2
            },
            _default: "swing"
        }, d.fx = Xt.prototype.init, d.fx.step = {};
        var jt, Ui, bo = /^(?:toggle|show|hide)$/,
            Co = /queueHooks$/;

        function Or() {
            Ui && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, d.fx.interval), d.fx.tick())
        }

        function Rr() {
            return e.setTimeout(function() {
                jt = void 0
            }), jt = Date.now()
        }

        function Hi(r, s) {
            var u, p = 0,
                w = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) u = bt[p], w["margin" + u] = w["padding" + u] = r;
            return s && (w.opacity = w.width = r), w
        }

        function gs(r, s, u) {
            for (var p, w = (bn.tweeners[s] || []).concat(bn.tweeners["*"]), E = 0, T = w.length; E < T; E++)
                if (p = w[E].call(u, s, r)) return p
        }

        function xo(r, s, u) {
            var p, w, E, T, z, G, Z, ce, Ce = "width" in s || "height" in s,
                ne = this,
                ue = {},
                He = r.style,
                rt = r.nodeType && F(r),
                Fe = de.get(r, "fxshow");
            u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, ne.always(function() {
                ne.always(function() {
                    T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], bo.test(w)) {
                    if (delete s[p], E = E || w === "toggle", w === (rt ? "hide" : "show"))
                        if (w === "show" && Fe && Fe[p] !== void 0) rt = !0;
                        else continue;
                    ue[p] = Fe && Fe[p] || d.style(r, p)
                } if (G = !d.isEmptyObject(s), !(!G && d.isEmptyObject(ue))) {
                Ce && r.nodeType === 1 && (u.overflow = [He.overflow, He.overflowX, He.overflowY], Z = Fe && Fe.display, Z == null && (Z = de.get(r, "display")), ce = d.css(r, "display"), ce === "none" && (Z ? ce = Z : (H([r], !0), Z = r.style.display || Z, ce = d.css(r, "display"), H([r]))), (ce === "inline" || ce === "inline-block" && Z != null) && d.css(r, "float") === "none" && (G || (ne.done(function() {
                    He.display = Z
                }), Z == null && (ce = He.display, Z = ce === "none" ? "" : ce)), He.display = "inline-block")), u.overflow && (He.overflow = "hidden", ne.always(function() {
                    He.overflow = u.overflow[0], He.overflowX = u.overflow[1], He.overflowY = u.overflow[2]
                })), G = !1;
                for (p in ue) G || (Fe ? "hidden" in Fe && (rt = Fe.hidden) : Fe = de.access(r, "fxshow", {
                    display: Z
                }), E && (Fe.hidden = !rt), rt && H([r], !0), ne.done(function() {
                    rt || H([r]), de.remove(r, "fxshow");
                    for (p in ue) d.style(r, p, ue[p])
                })), G = gs(rt ? Fe[p] : 0, p, ne), p in Fe || (Fe[p] = G.start, rt && (G.end = G.start, G.start = 0))
            }
        }

        function ms(r, s) {
            var u, p, w, E, T;
            for (u in r)
                if (p = B(u), w = s[p], E = r[u], Array.isArray(E) && (w = E[1], E = r[u] = E[0]), u !== p && (r[p] = E, delete r[u]), T = d.cssHooks[p], T && "expand" in T) {
                    E = T.expand(E), delete r[p];
                    for (u in E) u in r || (r[u] = E[u], s[u] = w)
                } else s[p] = w
        }

        function bn(r, s, u) {
            var p, w, E = 0,
                T = bn.prefilters.length,
                z = d.Deferred().always(function() {
                    delete G.elem
                }),
                G = function() {
                    if (w) return !1;
                    for (var Ce = jt || Rr(), ne = Math.max(0, Z.startTime + Z.duration - Ce), ue = ne / Z.duration || 0, He = 1 - ue, rt = 0, Fe = Z.tweens.length; rt < Fe; rt++) Z.tweens[rt].run(He);
                    return z.notifyWith(r, [Z, He, ne]), He < 1 && Fe ? ne : (Fe || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
                },
                Z = z.promise({
                    elem: r,
                    props: d.extend({}, s),
                    opts: d.extend(!0, {
                        specialEasing: {},
                        easing: d.easing._default
                    }, u),
                    originalProperties: s,
                    originalOptions: u,
                    startTime: jt || Rr(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(Ce, ne) {
                        var ue = d.Tween(r, Z.opts, Ce, ne, Z.opts.specialEasing[Ce] || Z.opts.easing);
                        return Z.tweens.push(ue), ue
                    },
                    stop: function(Ce) {
                        var ne = 0,
                            ue = Ce ? Z.tweens.length : 0;
                        if (w) return this;
                        for (w = !0; ne < ue; ne++) Z.tweens[ne].run(1);
                        return Ce ? (z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z, Ce])) : z.rejectWith(r, [Z, Ce]), this
                    }
                }),
                ce = Z.props;
            for (ms(ce, Z.opts.specialEasing); E < T; E++)
                if (p = bn.prefilters[E].call(Z, r, ce, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return d.map(ce, gs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(G, {
                elem: r,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        d.Animation = d.extend(bn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return N(u.elem, r, yt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    re(r) ? (s = r, r = ["*"]) : r = r.match(Te);
                    for (var u, p = 0, w = r.length; p < w; p++) u = r[p], bn.tweeners[u] = bn.tweeners[u] || [], bn.tweeners[u].unshift(s)
                },
                prefilters: [xo],
                prefilter: function(r, s) {
                    s ? bn.prefilters.unshift(r) : bn.prefilters.push(r)
                }
            }), d.speed = function(r, s, u) {
                var p = r && typeof r == "object" ? d.extend({}, r) : {
                    complete: u || !u && s || re(r) && r,
                    duration: r,
                    easing: u && s || s && !re(s) && s
                };
                return d.fx.off ? p.duration = 0 : typeof p.duration != "number" && (p.duration in d.fx.speeds ? p.duration = d.fx.speeds[p.duration] : p.duration = d.fx.speeds._default), (p.queue == null || p.queue === !0) && (p.queue = "fx"), p.old = p.complete, p.complete = function() {
                    re(p.old) && p.old.call(this), p.queue && d.dequeue(this, p.queue)
                }, p
            }, d.fn.extend({
                fadeTo: function(r, s, u, p) {
                    return this.filter(F).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, u, p)
                },
                animate: function(r, s, u, p) {
                    var w = d.isEmptyObject(r),
                        E = d.speed(s, u, p),
                        T = function() {
                            var z = bn(this, d.extend({}, r), E);
                            (w || de.get(this, "finish")) && z.stop(!0)
                        };
                    return T.finish = T, w || E.queue === !1 ? this.each(T) : this.queue(E.queue, T)
                },
                stop: function(r, s, u) {
                    var p = function(w) {
                        var E = w.stop;
                        delete w.stop, E(u)
                    };
                    return typeof r != "string" && (u = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
                        var w = !0,
                            E = r != null && r + "queueHooks",
                            T = d.timers,
                            z = de.get(this);
                        if (E) z[E] && z[E].stop && p(z[E]);
                        else
                            for (E in z) z[E] && z[E].stop && Co.test(E) && p(z[E]);
                        for (E = T.length; E--;) T[E].elem === this && (r == null || T[E].queue === r) && (T[E].anim.stop(u), w = !1, T.splice(E, 1));
                        (w || !u) && d.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = de.get(this),
                            p = u[r + "queue"],
                            w = u[r + "queueHooks"],
                            E = d.timers,
                            T = p ? p.length : 0;
                        for (u.finish = !0, d.queue(this, r, []), w && w.stop && w.stop.call(this, !0), s = E.length; s--;) E[s].elem === this && E[s].queue === r && (E[s].anim.stop(!0), E.splice(s, 1));
                        for (s = 0; s < T; s++) p[s] && p[s].finish && p[s].finish.call(this);
                        delete u.finish
                    })
                }
            }), d.each(["toggle", "show", "hide"], function(r, s) {
                var u = d.fn[s];
                d.fn[s] = function(p, w, E) {
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Hi(s, !0), p, w, E)
                }
            }), d.each({
                slideDown: Hi("show"),
                slideUp: Hi("hide"),
                slideToggle: Hi("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(r, s) {
                d.fn[r] = function(u, p, w) {
                    return this.animate(s, u, p, w)
                }
            }), d.timers = [], d.fx.tick = function() {
                var r, s = 0,
                    u = d.timers;
                for (jt = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || d.fx.stop(), jt = void 0
            }, d.fx.timer = function(r) {
                d.timers.push(r), d.fx.start()
            }, d.fx.interval = 13, d.fx.start = function() {
                Ui || (Ui = !0, Or())
            }, d.fx.stop = function() {
                Ui = null
            }, d.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, d.fn.delay = function(r, s) {
                return r = d.fx && d.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(u, p) {
                    var w = e.setTimeout(u, r);
                    p.stop = function() {
                        e.clearTimeout(w)
                    }
                })
            },
            function() {
                var r = P.createElement("input"),
                    s = P.createElement("select"),
                    u = s.appendChild(P.createElement("option"));
                r.type = "checkbox", K.checkOn = r.value !== "", K.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", K.radioValue = r.value === "t"
            }();
        var Ir, Ci = d.expr.attrHandle;
        d.fn.extend({
            attr: function(r, s) {
                return g(this, d.attr, r, s, arguments.length > 1)
            },
            removeAttr: function(r) {
                return this.each(function() {
                    d.removeAttr(this, r)
                })
            }
        }), d.extend({
            attr: function(r, s, u) {
                var p, w, E = r.nodeType;
                if (!(E === 3 || E === 8 || E === 2)) {
                    if (typeof r.getAttribute > "u") return d.prop(r, s, u);
                    if ((E !== 1 || !d.isXMLDoc(r)) && (w = d.attrHooks[s.toLowerCase()] || (d.expr.match.bool.test(s) ? Ir : void 0)), u !== void 0) {
                        if (u === null) {
                            d.removeAttr(r, s);
                            return
                        }
                        return w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : (r.setAttribute(s, u + ""), u)
                    }
                    return w && "get" in w && (p = w.get(r, s)) !== null ? p : (p = d.find.attr(r, s), p == null ? void 0 : p)
                }
            },
            attrHooks: {
                type: {
                    set: function(r, s) {
                        if (!K.radioValue && s === "radio" && J(r, "input")) {
                            var u = r.value;
                            return r.setAttribute("type", s), u && (r.value = u), s
                        }
                    }
                }
            },
            removeAttr: function(r, s) {
                var u, p = 0,
                    w = s && s.match(Te);
                if (w && r.nodeType === 1)
                    for (; u = w[p++];) r.removeAttribute(u)
            }
        }), Ir = {
            set: function(r, s, u) {
                return s === !1 ? d.removeAttr(r, u) : r.setAttribute(u, u), u
            }
        }, d.each(d.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var u = Ci[s] || d.find.attr;
            Ci[s] = function(p, w, E) {
                var T, z, G = w.toLowerCase();
                return E || (z = Ci[G], Ci[G] = T, T = u(p, w, E) != null ? G : null, Ci[G] = z), T
            }
        });
        var Eo = /^(?:input|select|textarea|button)$/i,
            _o = /^(?:a|area)$/i;
        d.fn.extend({
            prop: function(r, s) {
                return g(this, d.prop, r, s, arguments.length > 1)
            },
            removeProp: function(r) {
                return this.each(function() {
                    delete this[d.propFix[r] || r]
                })
            }
        }), d.extend({
            prop: function(r, s, u) {
                var p, w, E = r.nodeType;
                if (!(E === 3 || E === 8 || E === 2)) return (E !== 1 || !d.isXMLDoc(r)) && (s = d.propFix[s] || s, w = d.propHooks[s]), u !== void 0 ? w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : r[s] = u : w && "get" in w && (p = w.get(r, s)) !== null ? p : r[s]
            },
            propHooks: {
                tabIndex: {
                    get: function(r) {
                        var s = d.find.attr(r, "tabindex");
                        return s ? parseInt(s, 10) : Eo.test(r.nodeName) || _o.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), K.optSelected || (d.propHooks.selected = {
            get: function(r) {
                var s = r.parentNode;
                return s && s.parentNode && s.parentNode.selectedIndex, null
            },
            set: function(r) {
                var s = r.parentNode;
                s && (s.selectedIndex, s.parentNode && s.parentNode.selectedIndex)
            }
        }), d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            d.propFix[this.toLowerCase()] = this
        });

        function qn(r) {
            var s = r.match(Te) || [];
            return s.join(" ")
        }

        function Wn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Dr(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Te) || [] : []
        }
        d.fn.extend({
            addClass: function(r) {
                var s, u, p, w, E, T, z, G = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).addClass(r.call(this, Z, Wn(this)))
                });
                if (s = Dr(r), s.length) {
                    for (; u = this[G++];)
                        if (w = Wn(u), p = u.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; E = s[T++];) p.indexOf(" " + E + " ") < 0 && (p += E + " ");
                            z = qn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, w, E, T, z, G = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).removeClass(r.call(this, Z, Wn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Dr(r), s.length) {
                    for (; u = this[G++];)
                        if (w = Wn(u), p = u.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; E = s[T++];)
                                for (; p.indexOf(" " + E + " ") > -1;) p = p.replace(" " + E + " ", " ");
                            z = qn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(w) {
                    d(this).toggleClass(r.call(this, w, Wn(this), s), s)
                }) : this.each(function() {
                    var w, E, T, z;
                    if (p)
                        for (E = 0, T = d(this), z = Dr(r); w = z[E++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || u === "boolean") && (w = Wn(this), w && de.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : de.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, u, p = 0;
                for (s = " " + r + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + qn(Wn(u)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var So = /\r/g;
        d.fn.extend({
            val: function(r) {
                var s, u, p, w = this[0];
                return arguments.length ? (p = re(r), this.each(function(E) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, E, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                        return z == null ? "" : z + ""
                    })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(So, "") : u == null ? "" : u)) : void 0
            }
        }), d.extend({
            valHooks: {
                option: {
                    get: function(r) {
                        var s = d.find.attr(r, "value");
                        return s != null ? s : qn(d.text(r))
                    }
                },
                select: {
                    get: function(r) {
                        var s, u, p, w = r.options,
                            E = r.selectedIndex,
                            T = r.type === "select-one",
                            z = T ? null : [],
                            G = T ? E + 1 : w.length;
                        for (E < 0 ? p = G : p = T ? E : 0; p < G; p++)
                            if (u = w[p], (u.selected || p === E) && !u.disabled && (!u.parentNode.disabled || !J(u.parentNode, "optgroup"))) {
                                if (s = d(u).val(), T) return s;
                                z.push(s)
                            } return z
                    },
                    set: function(r, s) {
                        for (var u, p, w = r.options, E = d.makeArray(s), T = w.length; T--;) p = w[T], (p.selected = d.inArray(d.valHooks.option.get(p), E) > -1) && (u = !0);
                        return u || (r.selectedIndex = -1), E
                    }
                }
            }
        }), d.each(["radio", "checkbox"], function() {
            d.valHooks[this] = {
                set: function(r, s) {
                    if (Array.isArray(s)) return r.checked = d.inArray(d(r).val(), s) > -1
                }
            }, K.checkOn || (d.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), K.focusin = "onfocusin" in e;
        var Mr = /^(?:focusinfocus|focusoutblur)$/,
            Xn = function(r) {
                r.stopPropagation()
            };
        d.extend(d.event, {
            trigger: function(r, s, u, p) {
                var w, E, T, z, G, Z, ce, Ce, ne = [u || P],
                    ue = V.call(r, "type") ? r.type : r,
                    He = V.call(r, "namespace") ? r.namespace.split(".") : [];
                if (E = Ce = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Mr.test(ue + d.event.triggered) && (ue.indexOf(".") > -1 && (He = ue.split("."), ue = He.shift(), He.sort()), G = ue.indexOf(":") < 0 && "on" + ue, r = r[d.expando] ? r : new d.Event(ue, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = He.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + He.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), ce = d.event.special[ue] || {}, !(!p && ce.trigger && ce.trigger.apply(u, s) === !1))) {
                    if (!p && !ce.noBubble && !m(u)) {
                        for (z = ce.delegateType || ue, Mr.test(z + ue) || (E = E.parentNode); E; E = E.parentNode) ne.push(E), T = E;
                        T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (E = ne[w++]) && !r.isPropagationStopped();) Ce = E, r.type = w > 1 ? z : ce.bindType || ue, Z = (de.get(E, "events") || Object.create(null))[r.type] && de.get(E, "handle"), Z && Z.apply(E, s), Z = G && E[G], Z && Z.apply && te(E) && (r.result = Z.apply(E, s), r.result === !1 && r.preventDefault());
                    return r.type = ue, !p && !r.isDefaultPrevented() && (!ce._default || ce._default.apply(ne.pop(), s) === !1) && te(u) && G && re(u[ue]) && !m(u) && (T = u[G], T && (u[G] = null), d.event.triggered = ue, r.isPropagationStopped() && Ce.addEventListener(ue, Xn), u[ue](), r.isPropagationStopped() && Ce.removeEventListener(ue, Xn), d.event.triggered = void 0, T && (u[G] = T)), r.result
                }
            },
            simulate: function(r, s, u) {
                var p = d.extend(new d.Event, u, {
                    type: r,
                    isSimulated: !0
                });
                d.event.trigger(p, null, s)
            }
        }), d.fn.extend({
            trigger: function(r, s) {
                return this.each(function() {
                    d.event.trigger(r, s, this)
                })
            },
            triggerHandler: function(r, s) {
                var u = this[0];
                if (u) return d.event.trigger(r, s, u, !0)
            }
        }), K.focusin || d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            var u = function(p) {
                d.event.simulate(s, p.target, d.event.fix(p))
            };
            d.event.special[s] = {
                setup: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = de.access(p, s);
                    w || p.addEventListener(r, u, !0), de.access(p, s, (w || 0) + 1)
                },
                teardown: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = de.access(p, s) - 1;
                    w ? de.access(p, s, w) : (p.removeEventListener(r, u, !0), de.remove(p, s))
                }
            }
        });
        var xi = e.location,
            Lr = {
                guid: Date.now()
            },
            qi = /\?/;
        d.parseXML = function(r) {
            var s, u;
            if (!r || typeof r != "string") return null;
            try {
                s = new e.DOMParser().parseFromString(r, "text/xml")
            } catch {}
            return u = s && s.getElementsByTagName("parsererror")[0], (!s || u) && d.error("Invalid XML: " + (u ? d.map(u.childNodes, function(p) {
                return p.textContent
            }).join(`
`) : r)), s
        };
        var ko = /\[\]$/,
            vs = /\r?\n/g,
            To = /^(?:submit|button|image|reset|file)$/i,
            Ao = /^(?:input|select|textarea|keygen)/i;

        function Pr(r, s, u, p) {
            var w;
            if (Array.isArray(s)) d.each(s, function(E, T) {
                u || ko.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? E : "") + "]", T, u, p)
            });
            else if (!u && se(s) === "object")
                for (w in s) Pr(r + "[" + w + "]", s[w], u, p);
            else p(r, s)
        }
        d.param = function(r, s) {
            var u, p = [],
                w = function(E, T) {
                    var z = re(T) ? T() : T;
                    p[p.length] = encodeURIComponent(E) + "=" + encodeURIComponent(z == null ? "" : z)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !d.isPlainObject(r)) d.each(r, function() {
                w(this.name, this.value)
            });
            else
                for (u in r) Pr(u, r[u], s, w);
            return p.join("&")
        }, d.fn.extend({
            serialize: function() {
                return d.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var r = d.prop(this, "elements");
                    return r ? d.makeArray(r) : this
                }).filter(function() {
                    var r = this.type;
                    return this.name && !d(this).is(":disabled") && Ao.test(this.nodeName) && !To.test(r) && (this.checked || !pe.test(r))
                }).map(function(r, s) {
                    var u = d(this).val();
                    return u == null ? null : Array.isArray(u) ? d.map(u, function(p) {
                        return {
                            name: s.name,
                            value: p.replace(vs, `\r
`)
                        }
                    }) : {
                        name: s.name,
                        value: u.replace(vs, `\r
`)
                    }
                }).get()
            }
        });
        var Oo = /%20/g,
            Ro = /#.*$/,
            Io = /([?&])_=[^&]*/,
            Yn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ys = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Do = /^(?:GET|HEAD)$/,
            Mo = /^\/\//,
            ws = {},
            Nr = {},
            bs = "*/".concat("*"),
            Vr = P.createElement("a");
        Vr.href = xi.href;

        function Cs(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, w = 0,
                    E = s.toLowerCase().match(Te) || [];
                if (re(u))
                    for (; p = E[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function xs(r, s, u, p) {
            var w = {},
                E = r === Nr;

            function T(z) {
                var G;
                return w[z] = !0, d.each(r[z] || [], function(Z, ce) {
                    var Ce = ce(s, u, p);
                    if (typeof Ce == "string" && !E && !w[Ce]) return s.dataTypes.unshift(Ce), T(Ce), !1;
                    if (E) return !(G = Ce)
                }), G
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function Br(r, s) {
            var u, p, w = d.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && d.extend(!0, r, p), r
        }

        function Lo(r, s, u) {
            for (var p, w, E, T, z = r.contents, G = r.dataTypes; G[0] === "*";) G.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (w in z)
                    if (z[w] && z[w].test(p)) {
                        G.unshift(w);
                        break
                    }
            }
            if (G[0] in u) E = G[0];
            else {
                for (w in u) {
                    if (!G[0] || r.converters[w + " " + G[0]]) {
                        E = w;
                        break
                    }
                    T || (T = w)
                }
                E = E || T
            }
            if (E) return E !== G[0] && G.unshift(E), u[E]
        }

        function Po(r, s, u, p) {
            var w, E, T, z, G, Z = {},
                ce = r.dataTypes.slice();
            if (ce[1])
                for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
            for (E = ce.shift(); E;)
                if (r.responseFields[E] && (u[r.responseFields[E]] = s), !G && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), G = E, E = ce.shift(), E) {
                    if (E === "*") E = G;
                    else if (G !== "*" && G !== E) {
                        if (T = Z[G + " " + E] || Z["* " + E], !T) {
                            for (w in Z)
                                if (z = w.split(" "), z[1] === E && (T = Z[G + " " + z[0]] || Z["* " + z[0]], T)) {
                                    T === !0 ? T = Z[w] : Z[w] !== !0 && (E = z[0], ce.unshift(z[1]));
                                    break
                                }
                        }
                        if (T !== !0)
                            if (T && r.throws) s = T(s);
                            else try {
                                s = T(s)
                            } catch (Ce) {
                                return {
                                    state: "parsererror",
                                    error: T ? Ce : "No conversion from " + G + " to " + E
                                }
                            }
                    }
                } return {
                state: "success",
                data: s
            }
        }
        d.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xi.href,
                type: "GET",
                isLocal: ys.test(xi.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": bs,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": d.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(r, s) {
                return s ? Br(Br(r, d.ajaxSettings), s) : Br(d.ajaxSettings, r)
            },
            ajaxPrefilter: Cs(ws),
            ajaxTransport: Cs(Nr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, w, E, T, z, G, Z, ce, Ce, ne = d.ajaxSetup({}, s),
                    ue = ne.context || ne,
                    He = ne.context && (ue.nodeType || ue.jquery) ? d(ue) : d.event,
                    rt = d.Deferred(),
                    Fe = d.Callbacks("once memory"),
                    zt = ne.statusCode || {},
                    Nt = {},
                    un = {},
                    _t = "canceled",
                    et = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Dt;
                            if (G) {
                                if (!E)
                                    for (E = {}; Dt = Yn.exec(w);) E[Dt[1].toLowerCase() + " "] = (E[Dt[1].toLowerCase() + " "] || []).concat(Dt[2]);
                                Dt = E[ft.toLowerCase() + " "]
                            }
                            return Dt == null ? null : Dt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return G ? w : null
                        },
                        setRequestHeader: function(ft, Dt) {
                            return G == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Nt[ft] = Dt), this
                        },
                        overrideMimeType: function(ft) {
                            return G == null && (ne.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Dt;
                            if (ft)
                                if (G) et.always(ft[et.status]);
                                else
                                    for (Dt in ft) zt[Dt] = [zt[Dt], ft[Dt]];
                            return this
                        },
                        abort: function(ft) {
                            var Dt = ft || _t;
                            return u && u.abort(Dt), on(0, Dt), this
                        }
                    };
                if (rt.promise(et), ne.url = ((r || ne.url || xi.href) + "").replace(Mo, xi.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(Te) || [""], ne.crossDomain == null) {
                    z = P.createElement("a");
                    try {
                        z.href = ne.url, z.href = z.href, ne.crossDomain = Vr.protocol + "//" + Vr.host != z.protocol + "//" + z.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), xs(ws, ne, s, et), G) return et;
                Z = d.event && ne.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Do.test(ne.type), p = ne.url.replace(Ro, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Oo, "+")) : (Ce = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (qi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Io, "$1"), Ce = (qi.test(p) ? "&" : "?") + "_=" + Lr.guid++ + Ce), ne.url = p + Ce), ne.ifModified && (d.lastModified[p] && et.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && et.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", ne.contentType), et.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + bs + "; q=0.01" : "") : ne.accepts["*"]);
                for (ce in ne.headers) et.setRequestHeader(ce, ne.headers[ce]);
                if (ne.beforeSend && (ne.beforeSend.call(ue, et, ne) === !1 || G)) return et.abort();
                if (_t = "abort", Fe.add(ne.complete), et.done(ne.success), et.fail(ne.error), u = xs(Nr, ne, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, Z && He.trigger("ajaxSend", [et, ne]), G) return et;
                    ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                        et.abort("timeout")
                    }, ne.timeout));
                    try {
                        G = !1, u.send(Nt, on)
                    } catch (ft) {
                        if (G) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Dt, _i, Wi) {
                    var hn, Kn, Jn, an, Mn, vn = Dt;
                    G || (G = !0, T && e.clearTimeout(T), u = void 0, w = Wi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, _i && (an = Lo(ne, et, _i)), !hn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = Po(ne, an, et, hn), hn ? (ne.ifModified && (Mn = et.getResponseHeader("Last-Modified"), Mn && (d.lastModified[p] = Mn), Mn = et.getResponseHeader("etag"), Mn && (d.etag[p] = Mn)), ft === 204 || ne.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? rt.resolveWith(ue, [Kn, vn, et]) : rt.rejectWith(ue, [et, vn, Jn]), et.statusCode(zt), zt = void 0, Z && He.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, ne, hn ? Kn : Jn]), Fe.fireWith(ue, [et, vn]), Z && (He.trigger("ajaxComplete", [et, ne]), --d.active || d.event.trigger("ajaxStop")))
                }
                return et
            },
            getJSON: function(r, s, u) {
                return d.get(r, s, u, "json")
            },
            getScript: function(r, s) {
                return d.get(r, void 0, s, "script")
            }
        }), d.each(["get", "post"], function(r, s) {
            d[s] = function(u, p, w, E) {
                return re(p) && (E = E || w, w = p, p = void 0), d.ajax(d.extend({
                    url: u,
                    type: s,
                    dataType: E,
                    data: p,
                    success: w
                }, d.isPlainObject(u) && u))
            }
        }), d.ajaxPrefilter(function(r) {
            var s;
            for (s in r.headers) s.toLowerCase() === "content-type" && (r.contentType = r.headers[s] || "")
        }), d._evalUrl = function(r, s, u) {
            return d.ajax({
                url: r,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(p) {
                    d.globalEval(p, s, u)
                }
            })
        }, d.fn.extend({
            wrapAll: function(r) {
                var s;
                return this[0] && (re(r) && (r = r.call(this[0])), s = d(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
                    for (var u = this; u.firstElementChild;) u = u.firstElementChild;
                    return u
                }).append(this)), this
            },
            wrapInner: function(r) {
                return re(r) ? this.each(function(s) {
                    d(this).wrapInner(r.call(this, s))
                }) : this.each(function() {
                    var s = d(this),
                        u = s.contents();
                    u.length ? u.wrapAll(r) : s.append(r)
                })
            },
            wrap: function(r) {
                var s = re(r);
                return this.each(function(u) {
                    d(this).wrapAll(s ? r.call(this, u) : r)
                })
            },
            unwrap: function(r) {
                return this.parent(r).not("body").each(function() {
                    d(this).replaceWith(this.childNodes)
                }), this
            }
        }), d.expr.pseudos.hidden = function(r) {
            return !d.expr.pseudos.visible(r)
        }, d.expr.pseudos.visible = function(r) {
            return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length)
        }, d.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch {}
        };
        var No = {
                0: 200,
                1223: 204
            },
            Ei = d.ajaxSettings.xhr();
        K.cors = !!Ei && "withCredentials" in Ei, K.ajax = Ei = !!Ei, d.ajaxTransport(function(r) {
            var s, u;
            if (K.cors || Ei && !r.crossDomain) return {
                send: function(p, w) {
                    var E, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (E in r.xhrFields) T[E] = r.xhrFields[E];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (E in p) T.setRequestHeader(E, p[E]);
                    s = function(z) {
                        return function() {
                            s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(No[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
                                binary: T.response
                            } : {
                                text: T.responseText
                            }, T.getAllResponseHeaders()))
                        }
                    }, T.onload = s(), u = T.onerror = T.ontimeout = s("error"), T.onabort !== void 0 ? T.onabort = u : T.onreadystatechange = function() {
                        T.readyState === 4 && e.setTimeout(function() {
                            s && u()
                        })
                    }, s = s("abort");
                    try {
                        T.send(r.hasContent && r.data || null)
                    } catch (z) {
                        if (s) throw z
                    }
                },
                abort: function() {
                    s && s()
                }
            }
        }), d.ajaxPrefilter(function(r) {
            r.crossDomain && (r.contents.script = !1)
        }), d.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(r) {
                    return d.globalEval(r), r
                }
            }
        }), d.ajaxPrefilter("script", function(r) {
            r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET")
        }), d.ajaxTransport("script", function(r) {
            if (r.crossDomain || r.scriptAttrs) {
                var s, u;
                return {
                    send: function(p, w) {
                        s = d("<script>").attr(r.scriptAttrs || {}).prop({
                            charset: r.scriptCharset,
                            src: r.url
                        }).on("load error", u = function(E) {
                            s.remove(), u = null, E && w(E.type === "error" ? 404 : 200, E.type)
                        }), P.head.appendChild(s[0])
                    },
                    abort: function() {
                        u && u()
                    }
                }
            }
        });
        var $r = [],
            Fr = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = $r.pop() || d.expando + "_" + Lr.guid++;
                return this[r] = !0, r
            }
        }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, w, E, T = r.jsonp !== !1 && (Fr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Fr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(Fr, "$1" + p) : r.jsonp !== !1 && (r.url += (qi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return E || d.error(p + " was not called"), E[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                E = arguments
            }, u.always(function() {
                w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, $r.push(p)), E && re(w) && w(E[0]), E = w = void 0
            }), "script"
        }), K.createHTMLDocument = function() {
            var r = P.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), d.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, E;
            return s || (K.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = je.exec(r), E = !u && [], w ? [s.createElement(w[1])] : (w = In([r], s, E), E && E.length && d(E).remove(), d.merge([], w.childNodes))
        }, d.fn.load = function(r, s, u) {
            var p, w, E, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = qn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(G) {
                E = arguments, T.html(p ? d("<div>").append(d.parseHTML(G)).find(p) : G)
            }).always(u && function(G, Z) {
                T.each(function() {
                    u.apply(this, E || [G.responseText, Z, G])
                })
            }), this
        }, d.expr.pseudos.animated = function(r) {
            return d.grep(d.timers, function(s) {
                return r === s.elem
            }).length
        }, d.offset = {
            setOffset: function(r, s, u) {
                var p, w, E, T, z, G, Z, ce = d.css(r, "position"),
                    Ce = d(r),
                    ne = {};
                ce === "static" && (r.style.position = "relative"), z = Ce.offset(), E = d.css(r, "top"), G = d.css(r, "left"), Z = (ce === "absolute" || ce === "fixed") && (E + G).indexOf("auto") > -1, Z ? (p = Ce.position(), T = p.top, w = p.left) : (T = parseFloat(E) || 0, w = parseFloat(G) || 0), re(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (ne.top = s.top - z.top + T), s.left != null && (ne.left = s.left - z.left + w), "using" in s ? s.using.call(r, ne) : Ce.css(ne)
            }
        }, d.fn.extend({
            offset: function(r) {
                if (arguments.length) return r === void 0 ? this : this.each(function(w) {
                    d.offset.setOffset(this, r, w)
                });
                var s, u, p = this[0];
                if (!!p) return p.getClientRects().length ? (s = p.getBoundingClientRect(), u = p.ownerDocument.defaultView, {
                    top: s.top + u.pageYOffset,
                    left: s.left + u.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (!!this[0]) {
                    var r, s, u, p = this[0],
                        w = {
                            top: 0,
                            left: 0
                        };
                    if (d.css(p, "position") === "fixed") s = p.getBoundingClientRect();
                    else {
                        for (s = this.offset(), u = p.ownerDocument, r = p.offsetParent || u.documentElement; r && (r === u.body || r === u.documentElement) && d.css(r, "position") === "static";) r = r.parentNode;
                        r && r !== p && r.nodeType === 1 && (w = d(r).offset(), w.top += d.css(r, "borderTopWidth", !0), w.left += d.css(r, "borderLeftWidth", !0))
                    }
                    return {
                        top: s.top - w.top - d.css(p, "marginTop", !0),
                        left: s.left - w.left - d.css(p, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var r = this.offsetParent; r && d.css(r, "position") === "static";) r = r.offsetParent;
                    return r || Kt
                })
            }
        }), d.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(r, s) {
            var u = s === "pageYOffset";
            d.fn[r] = function(p) {
                return g(this, function(w, E, T) {
                    var z;
                    if (m(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[E];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[E] = T
                }, r, p, arguments.length)
            }
        }), d.each(["top", "left"], function(r, s) {
            d.cssHooks[s] = y(K.pixelPosition, function(u, p) {
                if (p) return p = Ze(u, s), wi.test(p) ? d(u).position()[s] + "px" : p
            })
        }), d.each({
            Height: "height",
            Width: "width"
        }, function(r, s) {
            d.each({
                padding: "inner" + r,
                content: s,
                "": "outer" + r
            }, function(u, p) {
                d.fn[p] = function(w, E) {
                    var T = arguments.length && (u || typeof w != "boolean"),
                        z = u || (w === !0 || E === !0 ? "margin" : "border");
                    return g(this, function(G, Z, ce) {
                        var Ce;
                        return m(G) ? p.indexOf("outer") === 0 ? G["inner" + r] : G.document.documentElement["client" + r] : G.nodeType === 9 ? (Ce = G.documentElement, Math.max(G.body["scroll" + r], Ce["scroll" + r], G.body["offset" + r], Ce["offset" + r], Ce["client" + r])) : ce === void 0 ? d.css(G, Z, z) : d.style(G, Z, ce, z)
                    }, s, T ? w : void 0, T)
                }
            })
        }), d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(r, s) {
            d.fn[s] = function(u) {
                return this.on(s, u)
            }
        }), d.fn.extend({
            bind: function(r, s, u) {
                return this.on(r, null, s, u)
            },
            unbind: function(r, s) {
                return this.off(r, null, s)
            },
            delegate: function(r, s, u, p) {
                return this.on(s, r, u, p)
            },
            undelegate: function(r, s, u) {
                return arguments.length === 1 ? this.off(r, "**") : this.off(s, r || "**", u)
            },
            hover: function(r, s) {
                return this.mouseenter(r).mouseleave(s || r)
            }
        }), d.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(r, s) {
            d.fn[s] = function(u, p) {
                return arguments.length > 0 ? this.on(s, null, u, p) : this.trigger(s)
            }
        });
        var Es = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        d.proxy = function(r, s) {
            var u, p, w;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = f.call(arguments, 2), w = function() {
                return r.apply(s || this, p.concat(f.call(arguments)))
            }, w.guid = r.guid = r.guid || d.guid++, w
        }, d.holdReady = function(r) {
            r ? d.readyWait++ : d.ready(!0)
        }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = J, d.isFunction = re, d.isWindow = m, d.camelCase = B, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
            var s = d.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, d.trim = function(r) {
            return r == null ? "" : (r + "").replace(Es, "")
        };
        var Vo = e.jQuery,
            Bo = e.$;
        return d.noConflict = function(r) {
            return e.$ === d && (e.$ = Bo), r && e.jQuery === d && (e.jQuery = Vo), d
        }, typeof n > "u" && (e.jQuery = e.$ = d), d
    })
})(Na);
const ae = Na.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Pi.exports,
                o;
            try {
                o = Na.exports
            } catch {}
            e(n, t, i, o)
        }
    })(function(e, n, i, o) {
        var f = e.Backbone,
            v = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = o, n.noConflict = function() {
            return e.Backbone = f, this
        }, n.emulateHTTP = !1, n.emulateJSON = !1;
        var b = function(_, l, g) {
                switch (_) {
                    case 1:
                        return function() {
                            return i[l](this[g])
                        };
                    case 2:
                        return function(S) {
                            return i[l](this[g], S)
                        };
                    case 3:
                        return function(S, R) {
                            return i[l](this[g], A(S, this), R)
                        };
                    case 4:
                        return function(S, R, L) {
                            return i[l](this[g], A(S, this), R, L)
                        };
                    default:
                        return function() {
                            var S = v.call(arguments);
                            return S.unshift(this[g]), i[l].apply(i, S)
                        }
                }
            },
            k = function(_, l, g) {
                i.each(l, function(S, R) {
                    i[R] && (_.prototype[R] = b(S, R, g))
                })
            },
            A = function(_, l) {
                return i.isFunction(_) ? _ : i.isObject(_) && !l._isModel(_) ? D(_) : i.isString(_) ? function(g) {
                    return g.get(_)
                } : _
            },
            D = function(_) {
                var l = i.matches(_);
                return function(g) {
                    return l(g.attributes)
                }
            },
            V = n.Events = {},
            Y = /\s+/,
            ie = function(_, l, g, S, R) {
                var L = 0,
                    B;
                if (g && typeof g == "object")
                    for (S !== void 0 && ("context" in R) && R.context === void 0 && (R.context = S), B = i.keys(g); L < B.length; L++) l = ie(_, l, B[L], g[B[L]], R);
                else if (g && Y.test(g))
                    for (B = g.split(Y); L < B.length; L++) l = _(l, B[L], S, R);
                else l = _(l, g, S, R);
                return l
            };
        V.on = function(_, l, g) {
            return K(this, _, l, g)
        };
        var K = function(_, l, g, S, R) {
            if (_._events = ie(re, _._events || {}, l, g, {
                    context: S,
                    ctx: _,
                    listening: R
                }), R) {
                var L = _._listeners || (_._listeners = {});
                L[R.id] = R
            }
            return _
        };
        V.listenTo = function(_, l, g) {
            if (!_) return this;
            var S = _._listenId || (_._listenId = i.uniqueId("l")),
                R = this._listeningTo || (this._listeningTo = {}),
                L = R[S];
            if (!L) {
                var B = this._listenId || (this._listenId = i.uniqueId("l"));
                L = R[S] = {
                    obj: _,
                    objId: S,
                    id: B,
                    listeningTo: R,
                    count: 0
                }
            }
            return K(_, l, g, this, L), this
        };
        var re = function(_, l, g, S) {
            if (g) {
                var R = _[l] || (_[l] = []),
                    L = S.context,
                    B = S.ctx,
                    te = S.listening;
                te && te.count++, R.push({
                    callback: g,
                    context: L,
                    ctx: L || B,
                    listening: te
                })
            }
            return _
        };
        V.off = function(_, l, g) {
            return this._events ? (this._events = ie(m, this._events, _, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, V.stopListening = function(_, l, g) {
            var S = this._listeningTo;
            if (!S) return this;
            for (var R = _ ? [_._listenId] : i.keys(S), L = 0; L < R.length; L++) {
                var B = S[R[L]];
                if (!B) break;
                B.obj.off(l, g, this)
            }
            return this
        };
        var m = function(_, l, g, S) {
            if (!!_) {
                var R = 0,
                    L, B = S.context,
                    te = S.listeners;
                if (!l && !g && !B) {
                    for (var ke = i.keys(te); R < ke.length; R++) L = te[ke[R]], delete te[L.id], delete L.listeningTo[L.objId];
                    return
                }
                for (var de = l ? [l] : i.keys(_); R < de.length; R++) {
                    l = de[R];
                    var De = _[l];
                    if (!De) break;
                    for (var Me = [], nt = 0; nt < De.length; nt++) {
                        var Ct = De[nt];
                        g && g !== Ct.callback && g !== Ct.callback._callback || B && B !== Ct.context ? Me.push(Ct) : (L = Ct.listening, L && --L.count === 0 && (delete te[L.id], delete L.listeningTo[L.objId]))
                    }
                    Me.length ? _[l] = Me : delete _[l]
                }
                return _
            }
        };
        V.once = function(_, l, g) {
            var S = ie(P, {}, _, l, i.bind(this.off, this));
            return typeof _ == "string" && g == null && (l = void 0), this.on(S, l, g)
        }, V.listenToOnce = function(_, l, g) {
            var S = ie(P, {}, l, g, i.bind(this.stopListening, this, _));
            return this.listenTo(_, S)
        };
        var P = function(_, l, g, S) {
            if (g) {
                var R = _[l] = i.once(function() {
                    S(l, R), g.apply(this, arguments)
                });
                R._callback = g
            }
            return _
        };
        V.trigger = function(_) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), S = 0; S < l; S++) g[S] = arguments[S + 1];
            return ie(q, this._events, _, void 0, g), this
        };
        var q = function(_, l, g, S) {
                if (_) {
                    var R = _[l],
                        L = _.all;
                    R && L && (L = L.slice()), R && le(R, S), L && le(L, [l].concat(S))
                }
                return _
            },
            le = function(_, l) {
                var g, S = -1,
                    R = _.length,
                    L = l[0],
                    B = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++S < R;)(g = _[S]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++S < R;)(g = _[S]).callback.call(g.ctx, L);
                        return;
                    case 2:
                        for (; ++S < R;)(g = _[S]).callback.call(g.ctx, L, B);
                        return;
                    case 3:
                        for (; ++S < R;)(g = _[S]).callback.call(g.ctx, L, B, te);
                        return;
                    default:
                        for (; ++S < R;)(g = _[S]).callback.apply(g.ctx, l);
                        return
                }
            };
        V.bind = V.on, V.unbind = V.off, i.extend(n, V);
        var se = n.Model = function(_, l) {
            var g = _ || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var S = i.result(this, "defaults");
            g = i.defaults(i.extend({}, S, g), S), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(se.prototype, V, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function() {},
            toJSON: function(_) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            get: function(_) {
                return this.attributes[_]
            },
            escape: function(_) {
                return i.escape(this.get(_))
            },
            has: function(_) {
                return this.get(_) != null
            },
            matches: function(_) {
                return !!i.iteratee(_, this)(this.attributes)
            },
            set: function(_, l, g) {
                if (_ == null) return this;
                var S;
                if (typeof _ == "object" ? (S = _, g = l) : (S = {})[_] = l, g || (g = {}), !this._validate(S, g)) return !1;
                var R = g.unset,
                    L = g.silent,
                    B = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var ke = this.attributes,
                    de = this.changed,
                    De = this._previousAttributes;
                for (var Me in S) l = S[Me], i.isEqual(ke[Me], l) || B.push(Me), i.isEqual(De[Me], l) ? delete de[Me] : de[Me] = l, R ? delete ke[Me] : ke[Me] = l;
                if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !L) {
                    B.length && (this._pending = g);
                    for (var nt = 0; nt < B.length; nt++) this.trigger("change:" + B[nt], this, ke[B[nt]], g)
                }
                if (te) return this;
                if (!L)
                    for (; this._pending;) g = this._pending, this._pending = !1, this.trigger("change", this, g);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(_, l) {
                return this.set(_, void 0, i.extend({}, l, {
                    unset: !0
                }))
            },
            clear: function(_) {
                var l = {};
                for (var g in this.attributes) l[g] = void 0;
                return this.set(l, i.extend({}, _, {
                    unset: !0
                }))
            },
            hasChanged: function(_) {
                return _ == null ? !i.isEmpty(this.changed) : i.has(this.changed, _)
            },
            changedAttributes: function(_) {
                if (!_) return this.hasChanged() ? i.clone(this.changed) : !1;
                var l = this._changing ? this._previousAttributes : this.attributes,
                    g = {};
                for (var S in _) {
                    var R = _[S];
                    i.isEqual(l[S], R) || (g[S] = R)
                }
                return i.size(g) ? g : !1
            },
            previous: function(_) {
                return _ == null || !this._previousAttributes ? null : this._previousAttributes[_]
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            fetch: function(_) {
                _ = i.extend({
                    parse: !0
                }, _);
                var l = this,
                    g = _.success;
                return _.success = function(S) {
                    var R = _.parse ? l.parse(S, _) : S;
                    if (!l.set(R, _)) return !1;
                    g && g.call(_.context, l, S, _), l.trigger("sync", l, S, _)
                }, Ht(this, _), this.sync("read", this, _)
            },
            save: function(_, l, g) {
                var S;
                _ == null || typeof _ == "object" ? (S = _, g = l) : (S = {})[_] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var R = g.wait;
                if (S && !R) {
                    if (!this.set(S, g)) return !1
                } else if (!this._validate(S, g)) return !1;
                var L = this,
                    B = g.success,
                    te = this.attributes;
                g.success = function(De) {
                    L.attributes = te;
                    var Me = g.parse ? L.parse(De, g) : De;
                    if (R && (Me = i.extend({}, S, Me)), Me && !L.set(Me, g)) return !1;
                    B && B.call(g.context, L, De, g), L.trigger("sync", L, De, g)
                }, Ht(this, g), S && R && (this.attributes = i.extend({}, te, S));
                var ke = this.isNew() ? "create" : g.patch ? "patch" : "update";
                ke === "patch" && !g.attrs && (g.attrs = S);
                var de = this.sync(ke, this, g);
                return this.attributes = te, de
            },
            destroy: function(_) {
                _ = _ ? i.clone(_) : {};
                var l = this,
                    g = _.success,
                    S = _.wait,
                    R = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, _)
                    };
                _.success = function(B) {
                    S && R(), g && g.call(_.context, l, B, _), l.isNew() || l.trigger("sync", l, B, _)
                };
                var L = !1;
                return this.isNew() ? i.defer(_.success) : (Ht(this, _), L = this.sync("delete", this, _)), S || R(), L
            },
            url: function() {
                var _ = i.result(this, "urlRoot") || i.result(this.collection, "url") || Bt();
                if (this.isNew()) return _;
                var l = this.get(this.idAttribute);
                return _.replace(/[^\/]$/, "$&/") + encodeURIComponent(l)
            },
            parse: function(_, l) {
                return _
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(_) {
                return this._validate({}, i.extend({}, _, {
                    validate: !0
                }))
            },
            _validate: function(_, l) {
                if (!l.validate || !this.validate) return !0;
                _ = i.extend({}, this.attributes, _);
                var g = this.validationError = this.validate(_, l) || null;
                return g ? (this.trigger("invalid", this, g, i.extend(l, {
                    validationError: g
                })), !1) : !0
            }
        });
        var ye = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        k(se, ye, "attributes");
        var d = n.Collection = function(_, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), _ && this.reset(_, i.extend({
                    silent: !0
                }, l))
            },
            _e = {
                add: !0,
                remove: !0,
                merge: !0
            },
            Oe = {
                add: !0,
                remove: !1
            },
            Pe = function(_, l, g) {
                g = Math.min(Math.max(g, 0), _.length);
                var S = Array(_.length - g),
                    R = l.length,
                    L;
                for (L = 0; L < S.length; L++) S[L] = _[L + g];
                for (L = 0; L < R; L++) _[L + g] = l[L];
                for (L = 0; L < S.length; L++) _[L + R + g] = S[L]
            };
        i.extend(d.prototype, V, {
            model: se,
            initialize: function() {},
            toJSON: function(_) {
                return this.map(function(l) {
                    return l.toJSON(_)
                })
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            add: function(_, l) {
                return this.set(_, i.extend({
                    merge: !1
                }, l, Oe))
            },
            remove: function(_, l) {
                l = i.extend({}, l);
                var g = !i.isArray(_);
                _ = g ? [_] : _.slice();
                var S = this._removeModels(_, l);
                return !l.silent && S.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: S
                }, this.trigger("update", this, l)), g ? S[0] : S
            },
            set: function(_, l) {
                if (_ != null) {
                    l = i.extend({}, _e, l), l.parse && !this._isModel(_) && (_ = this.parse(_, l) || []);
                    var g = !i.isArray(_);
                    _ = g ? [_] : _.slice();
                    var S = l.at;
                    S != null && (S = +S), S > this.length && (S = this.length), S < 0 && (S += this.length + 1);
                    var R = [],
                        L = [],
                        B = [],
                        te = [],
                        ke = {},
                        de = l.add,
                        De = l.merge,
                        Me = l.remove,
                        nt = !1,
                        Ct = this.comparator && S == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < _.length; yt++) {
                        ct = _[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (De && ct !== bt) {
                                var Kt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Kt = bt.parse(Kt, l)), bt.set(Kt, l), B.push(bt), Ct && !nt && (nt = bt.hasChanged(rn))
                            }
                            ke[bt.cid] || (ke[bt.cid] = !0, R.push(bt)), _[yt] = bt
                        } else de && (ct = _[yt] = this._prepareModel(ct, l), ct && (L.push(ct), this._addReference(ct, l), ke[ct.cid] = !0, R.push(ct)))
                    }
                    if (Me) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], ke[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Je = !1,
                        Lt = !Ct && de && Me;
                    if (R.length && Lt ? (Je = this.length !== R.length || i.some(this.models, function(F, N) {
                            return F !== R[N]
                        }), this.models.length = 0, Pe(this.models, R, 0), this.length = this.models.length) : L.length && (Ct && (nt = !0), Pe(this.models, L, S == null ? this.length : S), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < L.length; yt++) S != null && (l.index = S + yt), ct = L[yt], ct.trigger("add", ct, this, l);
                        (nt || Je) && this.trigger("sort", this, l), (L.length || te.length || B.length) && (l.changes = {
                            added: L,
                            removed: te,
                            merged: B
                        }, this.trigger("update", this, l))
                    }
                    return g ? _[0] : _
                }
            },
            reset: function(_, l) {
                l = l ? i.clone(l) : {};
                for (var g = 0; g < this.models.length; g++) this._removeReference(this.models[g], l);
                return l.previousModels = this.models, this._reset(), _ = this.add(_, i.extend({
                    silent: !0
                }, l)), l.silent || this.trigger("reset", this, l), _
            },
            push: function(_, l) {
                return this.add(_, i.extend({
                    at: this.length
                }, l))
            },
            pop: function(_) {
                var l = this.at(this.length - 1);
                return this.remove(l, _)
            },
            unshift: function(_, l) {
                return this.add(_, i.extend({
                    at: 0
                }, l))
            },
            shift: function(_) {
                var l = this.at(0);
                return this.remove(l, _)
            },
            slice: function() {
                return v.apply(this.models, arguments)
            },
            get: function(_) {
                if (_ != null) return this._byId[_] || this._byId[this.modelId(_.attributes || _)] || _.cid && this._byId[_.cid]
            },
            has: function(_) {
                return this.get(_) != null
            },
            at: function(_) {
                return _ < 0 && (_ += this.length), this.models[_]
            },
            where: function(_, l) {
                return this[l ? "find" : "filter"](_)
            },
            findWhere: function(_) {
                return this.where(_, !0)
            },
            sort: function(_) {
                var l = this.comparator;
                if (!l) throw new Error("Cannot sort a set without a comparator");
                _ || (_ = {});
                var g = l.length;
                return i.isFunction(l) && (l = i.bind(l, this)), g === 1 || i.isString(l) ? this.models = this.sortBy(l) : this.models.sort(l), _.silent || this.trigger("sort", this, _), this
            },
            pluck: function(_) {
                return this.map(_ + "")
            },
            fetch: function(_) {
                _ = i.extend({
                    parse: !0
                }, _);
                var l = _.success,
                    g = this;
                return _.success = function(S) {
                    var R = _.reset ? "reset" : "set";
                    g[R](S, _), l && l.call(_.context, g, S, _), g.trigger("sync", g, S, _)
                }, Ht(this, _), this.sync("read", this, _)
            },
            create: function(_, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (_ = this._prepareModel(_, l), !_) return !1;
                g || this.add(_, l);
                var S = this,
                    R = l.success;
                return l.success = function(L, B, te) {
                    g && S.add(L, te), R && R.call(te.context, L, B, te)
                }, _.save(null, l), _
            },
            parse: function(_, l) {
                return _
            },
            clone: function() {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function(_) {
                return _[this.model.prototype.idAttribute || "id"]
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(_, l) {
                if (this._isModel(_)) return _.collection || (_.collection = this), _;
                l = l ? i.clone(l) : {}, l.collection = this;
                var g = new this.model(_, l);
                return g.validationError ? (this.trigger("invalid", this, g.validationError, l), !1) : g
            },
            _removeModels: function(_, l) {
                for (var g = [], S = 0; S < _.length; S++) {
                    var R = this.get(_[S]);
                    if (!!R) {
                        var L = this.indexOf(R);
                        this.models.splice(L, 1), this.length--, delete this._byId[R.cid];
                        var B = this.modelId(R.attributes);
                        B != null && delete this._byId[B], l.silent || (l.index = L, R.trigger("remove", R, this, l)), g.push(R), this._removeReference(R, l)
                    }
                }
                return g
            },
            _isModel: function(_) {
                return _ instanceof se
            },
            _addReference: function(_, l) {
                this._byId[_.cid] = _;
                var g = this.modelId(_.attributes);
                g != null && (this._byId[g] = _), _.on("all", this._onModelEvent, this)
            },
            _removeReference: function(_, l) {
                delete this._byId[_.cid];
                var g = this.modelId(_.attributes);
                g != null && delete this._byId[g], this === _.collection && delete _.collection, _.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(_, l, g, S) {
                if (l) {
                    if ((_ === "add" || _ === "remove") && g !== this) return;
                    if (_ === "destroy" && this.remove(l, S), _ === "change") {
                        var R = this.modelId(l.previousAttributes()),
                            L = this.modelId(l.attributes);
                        R !== L && (R != null && delete this._byId[R], L != null && (this._byId[L] = l))
                    }
                }
                this.trigger.apply(this, arguments)
            }
        });
        var lt = {
            forEach: 3,
            each: 3,
            map: 3,
            collect: 3,
            reduce: 0,
            foldl: 0,
            inject: 0,
            reduceRight: 0,
            foldr: 0,
            find: 3,
            detect: 3,
            filter: 3,
            select: 3,
            reject: 3,
            every: 3,
            all: 3,
            some: 3,
            any: 3,
            include: 3,
            includes: 3,
            contains: 3,
            invoke: 0,
            max: 3,
            min: 3,
            toArray: 1,
            size: 1,
            first: 3,
            head: 3,
            take: 3,
            initial: 3,
            rest: 3,
            tail: 3,
            drop: 3,
            last: 3,
            without: 0,
            difference: 0,
            indexOf: 3,
            shuffle: 1,
            lastIndexOf: 3,
            isEmpty: 1,
            chain: 1,
            sample: 3,
            partition: 3,
            groupBy: 3,
            countBy: 3,
            sortBy: 3,
            indexBy: 3,
            findIndex: 3,
            findLastIndex: 3
        };
        k(d, lt, "models");
        var Be = n.View = function(_) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(_, je)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            J = /^(\S+)\s*(.*)$/,
            je = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Be.prototype, V, {
            tagName: "div",
            $: function(_) {
                return this.$el.find(_)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this._removeElement(), this.stopListening(), this
            },
            _removeElement: function() {
                this.$el.remove()
            },
            setElement: function(_) {
                return this.undelegateEvents(), this._setElement(_), this.delegateEvents(), this
            },
            _setElement: function(_) {
                this.$el = _ instanceof n.$ ? _ : n.$(_), this.el = this.$el[0]
            },
            delegateEvents: function(_) {
                if (_ || (_ = i.result(this, "events")), !_) return this;
                this.undelegateEvents();
                for (var l in _) {
                    var g = _[l];
                    if (i.isFunction(g) || (g = this[g]), !!g) {
                        var S = l.match(J);
                        this.delegate(S[1], S[2], i.bind(g, this))
                    }
                }
                return this
            },
            delegate: function(_, l, g) {
                return this.$el.on(_ + ".delegateEvents" + this.cid, l, g), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(_, l, g) {
                return this.$el.off(_ + ".delegateEvents" + this.cid, l, g), this
            },
            _createElement: function(_) {
                return document.createElement(_)
            },
            _ensureElement: function() {
                if (this.el) this.setElement(i.result(this, "el"));
                else {
                    var _ = i.extend({}, i.result(this, "attributes"));
                    this.id && (_.id = i.result(this, "id")), this.className && (_.class = i.result(this, "className")), this.setElement(this._createElement(i.result(this, "tagName"))), this._setAttributes(_)
                }
            },
            _setAttributes: function(_) {
                this.$el.attr(_)
            }
        }), n.sync = function(_, l, g) {
            var S = U[_];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var R = {
                type: S,
                dataType: "json"
            };
            if (g.url || (R.url = i.result(l, "url") || Bt()), g.data == null && l && (_ === "create" || _ === "update" || _ === "patch") && (R.contentType = "application/json", R.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (R.contentType = "application/x-www-form-urlencoded", R.data = R.data ? {
                    model: R.data
                } : {}), g.emulateHTTP && (S === "PUT" || S === "DELETE" || S === "PATCH")) {
                R.type = "POST", g.emulateJSON && (R.data._method = S);
                var L = g.beforeSend;
                g.beforeSend = function(ke) {
                    if (ke.setRequestHeader("X-HTTP-Method-Override", S), L) return L.apply(this, arguments)
                }
            }
            R.type !== "GET" && !g.emulateJSON && (R.processData = !1);
            var B = g.error;
            g.error = function(ke, de, De) {
                g.textStatus = de, g.errorThrown = De, B && B.call(g.context, ke, de, De)
            };
            var te = g.xhr = n.ajax(i.extend(R, g));
            return l.trigger("request", l, te, g), te
        };
        var U = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        n.ajax = function() {
            return n.$.ajax.apply(n.$, arguments)
        };
        var oe = n.Router = function(_) {
                _ || (_ = {}), _.routes && (this.routes = _.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Ae = /\((.*?)\)/g,
            be = /(\(\?)?:\w+/g,
            we = /\*\w+/g,
            he = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(oe.prototype, V, {
            initialize: function() {},
            route: function(_, l, g) {
                i.isRegExp(_) || (_ = this._routeToRegExp(_)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var S = this;
                return n.history.route(_, function(R) {
                    var L = S._extractParameters(_, R);
                    S.execute(g, L, l) !== !1 && (S.trigger.apply(S, ["route:" + l].concat(L)), S.trigger("route", l, L), n.history.trigger("route", S, l, L))
                }), this
            },
            execute: function(_, l, g) {
                _ && _.apply(this, l)
            },
            navigate: function(_, l) {
                return n.history.navigate(_, l), this
            },
            _bindRoutes: function() {
                if (!!this.routes) {
                    this.routes = i.result(this, "routes");
                    for (var _, l = i.keys(this.routes);
                        (_ = l.pop()) != null;) this.route(_, this.routes[_])
                }
            },
            _routeToRegExp: function(_) {
                return _ = _.replace(he, "\\$&").replace(Ae, "(?:$1)?").replace(be, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(we, "([^?]*?)"), new RegExp("^" + _ + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(_, l) {
                var g = _.exec(l).slice(1);
                return i.map(g, function(S, R) {
                    return R === g.length - 1 ? S || null : S ? decodeURIComponent(S) : null
                })
            }
        });
        var Se = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Te = /^[#\/]|\s+$/g,
            $e = /^\/+|\/+$/g,
            Ke = /#.*$/;
        Se.started = !1, i.extend(Se.prototype, V, {
            interval: 50,
            atRoot: function() {
                var _ = this.location.pathname.replace(/[^\/]$/, "$&/");
                return _ === this.root && !this.getSearch()
            },
            matchRoot: function() {
                var _ = this.decodeFragment(this.location.pathname),
                    l = _.slice(0, this.root.length - 1) + "/";
                return l === this.root
            },
            decodeFragment: function(_) {
                return decodeURI(_.replace(/%25/g, "%2525"))
            },
            getSearch: function() {
                var _ = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return _ ? _[0] : ""
            },
            getHash: function(_) {
                var l = (_ || this).location.href.match(/#(.*)$/);
                return l ? l[1] : ""
            },
            getPath: function() {
                var _ = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return _.charAt(0) === "/" ? _.slice(1) : _
            },
            getFragment: function(_) {
                return _ == null && (this._usePushState || !this._wantsHashChange ? _ = this.getPath() : _ = this.getHash()), _.replace(Te, "")
            },
            start: function(_) {
                if (Se.started) throw new Error("Backbone.history has already been started");
                if (Se.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, _), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace($e, "/"), this._wantsHashChange && this._wantsPushState)
                    if (!this._hasPushState && !this.atRoot()) {
                        var l = this.root.slice(0, -1) || "/";
                        return this.location.replace(l + "#" + this.getPath()), !0
                    } else this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    });
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var g = document.body,
                        S = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    S.document.open(), S.document.close(), S.location.hash = "#" + this.fragment
                }
                var R = window.addEventListener || function(L, B) {
                    return attachEvent("on" + L, B)
                };
                if (this._usePushState ? R("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? R("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var _ = window.removeEventListener || function(l, g) {
                    return detachEvent("on" + l, g)
                };
                this._usePushState ? _("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && _("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), Se.started = !1
            },
            route: function(_, l) {
                this.handlers.unshift({
                    route: _,
                    callback: l
                })
            },
            checkUrl: function(_) {
                var l = this.getFragment();
                if (l === this.fragment && this.iframe && (l = this.getHash(this.iframe.contentWindow)), l === this.fragment) return !1;
                this.iframe && this.navigate(l), this.loadUrl()
            },
            loadUrl: function(_) {
                return this.matchRoot() ? (_ = this.fragment = this.getFragment(_), i.some(this.handlers, function(l) {
                    if (l.route.test(_)) return l.callback(_), !0
                })) : !1
            },
            navigate: function(_, l) {
                if (!Se.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), _ = this.getFragment(_ || "");
                var g = this.root;
                (_ === "" || _.charAt(0) === "?") && (g = g.slice(0, -1) || "/");
                var S = g + _;
                if (_ = this.decodeFragment(_.replace(Ke, "")), this.fragment !== _) {
                    if (this.fragment = _, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, S);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, _, l.replace), this.iframe && _ !== this.getHash(this.iframe.contentWindow)) {
                            var R = this.iframe.contentWindow;
                            l.replace || (R.document.open(), R.document.close()), this._updateHash(R.location, _, l.replace)
                        }
                    } else return this.location.assign(S);
                    if (l.trigger) return this.loadUrl(_)
                }
            },
            _updateHash: function(_, l, g) {
                if (g) {
                    var S = _.href.replace(/(javascript:|#).*$/, "");
                    _.replace(S + "#" + l)
                } else _.hash = "#" + l
            }
        }), n.history = new Se;
        var dt = function(_, l) {
            var g = this,
                S;
            return _ && i.has(_, "constructor") ? S = _.constructor : S = function() {
                return g.apply(this, arguments)
            }, i.extend(S, g, l), S.prototype = i.create(g.prototype, _), S.prototype.constructor = S, S.__super__ = g.prototype, S
        };
        se.extend = d.extend = oe.extend = Be.extend = Se.extend = dt;
        var Bt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Ht = function(_, l) {
                var g = l.error;
                l.error = function(S) {
                    g && g.call(l.context, _, S, l), _.trigger("error", _, S, l)
                }
            };
        return n
    })
})(ot);
var wc = {
        exports: {}
    },
    Jo = {
        exports: {}
    },
    pl;

function mh() {
    return pl || (pl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Pi.exports, ot)
        })(vt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
                    return typeof m
                } : function(m) {
                    return m && typeof Symbol == "function" && m.constructor === Symbol ? "symbol" : typeof m
                },
                f = i.Radio,
                v = i.Radio = {};
            v.VERSION = "2.0.0", v.noConflict = function() {
                return i.Radio = f, this
            }, v.DEBUG = !1, v._debugText = function(m, P, q) {
                return m + (q ? " on the " + q + " channel" : "") + ': "' + P + '"'
            }, v.debugLog = function(m, P, q) {
                v.DEBUG && console && console.warn && console.warn(v._debugText(m, P, q))
            };
            var b = /\s+/;
            v._eventsApi = function(m, P, q, le) {
                if (!q) return !1;
                var se = {};
                if ((typeof q > "u" ? "undefined" : o(q)) === "object") {
                    for (var ye in q) {
                        var d = m[P].apply(m, [ye, q[ye]].concat(le));
                        b.test(ye) ? n.extend(se, d) : se[ye] = d
                    }
                    return se
                }
                if (b.test(q)) {
                    for (var _e = q.split(b), Oe = 0, Pe = _e.length; Oe < Pe; Oe++) se[_e[Oe]] = m[P].apply(m, [_e[Oe]].concat(le));
                    return se
                }
                return !1
            }, v._callHandler = function(m, P, q) {
                var le = q[0],
                    se = q[1],
                    ye = q[2];
                switch (q.length) {
                    case 0:
                        return m.call(P);
                    case 1:
                        return m.call(P, le);
                    case 2:
                        return m.call(P, le, se);
                    case 3:
                        return m.call(P, le, se, ye);
                    default:
                        return m.apply(P, q)
                }
            };

            function k(m, P, q, le) {
                var se = m[P];
                if ((!q || q === se.callback || q === se.callback._callback) && (!le || le === se.context)) return delete m[P], !0
            }

            function A(m, P, q, le) {
                m || (m = {});
                for (var se = P ? [P] : n.keys(m), ye = !1, d = 0, _e = se.length; d < _e; d++) P = se[d], !!m[P] && k(m, P, q, le) && (ye = !0);
                return ye
            }
            var D = {};

            function V(m) {
                return D[m] || (D[m] = n.bind(v.log, v, m))
            }
            n.extend(v, {
                log: function(P, q) {
                    if (!(typeof console > "u")) {
                        var le = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + q + '"', le)
                    }
                },
                tuneIn: function(P) {
                    var q = v.channel(P);
                    return q._tunedIn = !0, q.on("all", V(P)), this
                },
                tuneOut: function(P) {
                    var q = v.channel(P);
                    return q._tunedIn = !1, q.off("all", V(P)), delete D[P], this
                }
            });

            function Y(m) {
                return n.isFunction(m) ? m : function() {
                    return m
                }
            }
            v.Requests = {
                request: function(P) {
                    var q = n.toArray(arguments).slice(1),
                        le = v._eventsApi(this, "request", P, q);
                    if (le) return le;
                    var se = this.channelName,
                        ye = this._requests;
                    if (se && this._tunedIn && v.log.apply(this, [se, P].concat(q)), ye && (ye[P] || ye.default)) {
                        var d = ye[P] || ye.default;
                        return q = ye[P] ? q : arguments, v._callHandler(d.callback, d.context, q)
                    } else v.debugLog("An unhandled request was fired", P, se)
                },
                reply: function(P, q, le) {
                    return v._eventsApi(this, "reply", P, [q, le]) ? this : (this._requests || (this._requests = {}), this._requests[P] && v.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: Y(q),
                        context: le || this
                    }, this)
                },
                replyOnce: function(P, q, le) {
                    if (v._eventsApi(this, "replyOnce", P, [q, le])) return this;
                    var se = this,
                        ye = n.once(function() {
                            return se.stopReplying(P), Y(q).apply(this, arguments)
                        });
                    return this.reply(P, ye, le)
                },
                stopReplying: function(P, q, le) {
                    return v._eventsApi(this, "stopReplying", P) ? this : (!P && !q && !le ? delete this._requests : A(this._requests, P, q, le) || v.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
                }
            }, v._channels = {}, v.channel = function(m) {
                if (!m) throw new Error("You must provide a name for the channel.");
                return v._channels[m] ? v._channels[m] : v._channels[m] = new v.Channel(m)
            }, v.Channel = function(m) {
                this.channelName = m
            }, n.extend(v.Channel.prototype, i.Events, v.Requests, {
                reset: function() {
                    return this.off(), this.stopListening(), this.stopReplying(), this
                }
            });
            var ie, K, re = [i.Events, v.Requests];
            return n.each(re, function(m) {
                n.each(m, function(P, q) {
                    v[q] = function(le) {
                        return K = n.toArray(arguments).slice(1), ie = this.channel(le), ie[q].apply(ie, K)
                    }
                })
            }), v.reset = function(m) {
                var P = m ? [this._channels[m]] : this._channels;
                n.each(P, function(q) {
                    q.reset()
                })
            }, v
        })
    }(Jo)), Jo.exports
}
/**
 * @license
 * MarionetteJS (Backbone.Marionette)
 * ----------------------------------
 * v3.5.1
 *
 * Copyright (c)2017 Derick Bailey, Muted Solutions, LLC.
 * Distributed under MIT license
 *
 * http://marionettejs.com
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i(ot, Pi.exports, mh())
    })(vt, function(n, i, o) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, o = o && o.hasOwnProperty("default") ? o.default : o;
        var f = "3.5.1",
            v = function(a) {
                return function(x) {
                    for (var O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), xe = 1; xe < O; xe++) Q[xe - 1] = arguments[xe];
                    return a.apply(x, Q)
                }
            },
            b = n.Model.extend,
            k = function y(a, x) {
                i.isObject(a) && (a = a.prev + " is going to be removed in the future. Please use " + a.next + " instead." + (a.url ? " See: " + a.url : "")), !!Ze.DEV_MODE && (x === void 0 || !x) && !y._cache[a] && (y._warn("Deprecation warning: " + a), y._cache[a] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var A = function(a) {
                return document.documentElement.contains(a && a.parentNode)
            },
            D = function(a, x) {
                var O = this;
                !a || i.each(x, function(Q) {
                    var xe = a[Q];
                    xe !== void 0 && (O[Q] = xe)
                })
            },
            V = function(a) {
                if (!!a) return this.options && this.options[a] !== void 0 ? this.options[a] : this[a]
            },
            Y = function(a) {
                var x = this;
                return i.reduce(a, function(O, Q, xe) {
                    return i.isFunction(Q) || (Q = x[Q]), Q && (O[xe] = Q), O
                }, {})
            },
            ie = /(^|:)(\w)/gi;

        function K(y, a, x) {
            return x.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ie, K)
        });

        function m(y) {
            for (var a = arguments.length, x = Array(a > 1 ? a - 1 : 0), O = 1; O < a; O++) x[O - 1] = arguments[O];
            var Q = re(y),
                xe = V.call(this, Q),
                qe = void 0;
            return i.isFunction(xe) && (qe = xe.apply(this, x)), this.trigger.apply(this, arguments), qe
        }

        function P(y) {
            for (var a = arguments.length, x = Array(a > 1 ? a - 1 : 0), O = 1; O < a; O++) x[O - 1] = arguments[O];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, x) : m.apply(y, x)
        }

        function q(y, a, x) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(O) {
                !x(O) || P(O, a, O)
            })
        }

        function le(y) {
            return !y._isAttached
        }

        function se(y) {
            return le(y) ? (y._isAttached = !0, !0) : !1
        }

        function ye(y) {
            return y._isAttached
        }

        function d(y) {
            return ye(y) ? (y._isAttached = !1, !0) : !1
        }

        function _e(y) {
            y._isAttached && y._isRendered && P(y, "dom:refresh", y)
        }

        function Oe(y) {
            y._isAttached && y._isRendered && P(y, "dom:remove", y)
        }

        function Pe() {
            q(this, "before:attach", le)
        }

        function lt() {
            q(this, "attach", se), _e(this)
        }

        function Be() {
            q(this, "before:detach", ye), Oe(this)
        }

        function J() {
            q(this, "detach", d)
        }

        function je() {
            Oe(this)
        }

        function U() {
            _e(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Be,
                detach: J,
                "before:render": je,
                render: U
            }))
        }
        var Ae = ["description", "fileName", "lineNumber", "name", "message", "number"],
            be = b.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(a, x) {
                    i.isObject(a) ? (x = a, a = x.message) : x || (x = {});
                    var O = Error.call(this, a);
                    i.extend(this, i.pick(O, Ae), i.pick(x, Ae)), this.captureStackTrace(), x.url && (this.url = this.urlRoot + x.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, be)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        be.extend = b;

        function we(y, a, x, O, Q) {
            var xe = O.split(/\s+/);
            xe.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(xe, function(qe) {
                var It = y[qe];
                if (!It) throw new be('Method "' + qe + '" was configured as an event handler, but does not exist.');
                y[Q](a, x, It)
            })
        }

        function he(y, a, x, O) {
            if (!i.isObject(x)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(x, function(Q, xe) {
                if (i.isString(Q)) {
                    we(y, a, xe, Q, O);
                    return
                }
                y[O](a, xe, Q)
            })
        }

        function Se(y, a) {
            return !y || !a ? this : (he(this, y, a, "listenTo"), this)
        }

        function Te(y, a) {
            return y ? a ? (he(this, y, a, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, a, x, O) {
            if (!i.isObject(x)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = Y.call(y, x);
            a[O](Q, y)
        }

        function Ke(y, a) {
            return !y || !a ? this : ($e(this, y, a, "reply"), this)
        }

        function dt(y, a) {
            return y ? a ? ($e(this, y, a, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var Bt = function(a) {
                this.options = i.extend({}, i.result(this, "options"), a)
            },
            Ht = {
                normalizeMethods: Y,
                _setOptions: Bt,
                mergeOptions: D,
                getOption: V,
                bindEvents: Se,
                unbindEvents: Te
            },
            _ = {
                _initRadio: function() {
                    var a = i.result(this, "channelName");
                    if (!!a) {
                        if (!o) throw new be({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var x = this._channel = o.channel(a),
                            O = i.result(this, "radioEvents");
                        this.bindEvents(x, O);
                        var Q = i.result(this, "radioRequests");
                        this.bindRequests(x, Q), this.on("destroy", this._destroyRadio)
                    }
                },
                _destroyRadio: function() {
                    this._channel.stopReplying(null, null, this)
                },
                getChannel: function() {
                    return this._channel
                },
                bindEvents: Se,
                unbindEvents: Te,
                bindRequests: Ke,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(a) {
                this.hasOwnProperty("options") || this._setOptions(a), this.mergeOptions(a, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = b, i.extend(g.prototype, n.Events, Ht, _, {
            cidPrefix: "mno",
            _isDestroyed: !1,
            isDestroyed: function() {
                return this._isDestroyed
            },
            initialize: function() {},
            _setCid: function() {
                this.cid || (this.cid = i.uniqueId(this.cidPrefix))
            },
            destroy: function() {
                if (this._isDestroyed) return this;
                for (var a = arguments.length, x = Array(a), O = 0; O < a; O++) x[O] = arguments[O];
                return this.triggerMethod.apply(this, ["before:destroy", this].concat(x)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(x)), this.stopListening(), this
            },
            triggerMethod: m
        });
        var S = function(a) {
            this.templateId = a
        };
        i.extend(S, {
            templateCaches: {},
            get: function(a, x) {
                var O = this.templateCaches[a];
                return O || (O = new S(a), this.templateCaches[a] = O), O.load(x)
            },
            clear: function() {
                for (var a = void 0, x = arguments.length, O = Array(x), Q = 0; Q < x; Q++) O[Q] = arguments[Q];
                var xe = O.length;
                if (xe > 0)
                    for (a = 0; a < xe; a++) delete this.templateCaches[O[a]];
                else this.templateCaches = {}
            }
        }), i.extend(S.prototype, {
            load: function(a) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var x = this.loadTemplate(this.templateId, a);
                return this.compiledTemplate = this.compileTemplate(x, a), this.compiledTemplate
            },
            loadTemplate: function(a, x) {
                var O = n.$(a);
                if (!O.length) throw new be({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + a + '"'
                });
                return O.html()
            },
            compileTemplate: function(a, x) {
                return i.template(a, x)
            }
        });
        var R = i.invokeMap || i.invoke;

        function L(y, a) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, a)[a] : Ze.Behaviors.behaviorsLookup[a]
        }

        function B(y, a) {
            return i.chain(a).map(function(x, O) {
                var Q = L(x, O),
                    xe = x === Q ? {} : x,
                    qe = new Q(xe, y),
                    It = B(y, i.result(qe, "behaviors"));
                return [qe].concat(It)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var a = i.result(this, "behaviors");
                    return i.isObject(a) ? B(this, a) : {}
                },
                _getBehaviorTriggers: function() {
                    var a = R(this._behaviors, "getTriggers");
                    return i.reduce(a, function(x, O) {
                        return i.extend(x, O)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var a = R(this._behaviors, "getEvents");
                    return i.reduce(a, function(x, O) {
                        return i.extend(x, O)
                    }, {})
                },
                _proxyBehaviorViewProperties: function() {
                    R(this._behaviors, "proxyViewProperties")
                },
                _delegateBehaviorEntityEvents: function() {
                    R(this._behaviors, "delegateEntityEvents")
                },
                _undelegateBehaviorEntityEvents: function() {
                    R(this._behaviors, "undelegateEntityEvents")
                },
                _destroyBehaviors: function() {
                    for (var a = arguments.length, x = Array(a), O = 0; O < a; O++) x[O] = arguments[O];
                    R.apply(void 0, [this._behaviors, "destroy"].concat(x))
                },
                _removeBehavior: function(a) {
                    this._isDestroyed || (this.undelegate(".trig" + a.cid + " ." + a.cid), this._behaviors = i.without(this._behaviors, a))
                },
                _bindBehaviorUIElements: function() {
                    R(this._behaviors, "bindUIElements")
                },
                _unbindBehaviorUIElements: function() {
                    R(this._behaviors, "unbindUIElements")
                },
                _triggerEventOnBehaviors: function() {
                    for (var a = this._behaviors, x = 0, O = a && a.length; x < O; x++) m.apply(a[x], arguments)
                }
            },
            ke = {
                _delegateEntityEvents: function(a, x) {
                    var O = i.result(this, "modelEvents");
                    O && (Te.call(this, a, O), Se.call(this, a, O));
                    var Q = i.result(this, "collectionEvents");
                    Q && (Te.call(this, x, Q), Se.call(this, x, Q))
                },
                _undelegateEntityEvents: function(a, x) {
                    var O = i.result(this, "modelEvents");
                    Te.call(this, a, O);
                    var Q = i.result(this, "collectionEvents");
                    Te.call(this, x, Q)
                }
            },
            de = /^(\S+)\s*(.*)$/,
            De = function(a, x) {
                var O = a.match(de);
                return O[1] + "." + x + " " + O[2]
            },
            Me = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function nt(y) {
            return !!Me[y]
        }

        function Ct(y, a) {
            return Me[y] = a
        }

        function rn(y, a) {
            i.isString(a) && (a = {
                event: a
            });
            var x = a.event,
                O = !!a.preventDefault;
            nt("triggersPreventDefault") && (O = a.preventDefault !== !1);
            var Q = !!a.stopPropagation;
            return nt("triggersStopPropagation") && (Q = a.stopPropagation !== !1),
                function(xe) {
                    O && xe.preventDefault(), Q && xe.stopPropagation(), y.triggerMethod(x, y, xe)
                }
        }
        var ct = {
                _getViewTriggers: function(a, x) {
                    var O = this;
                    return i.reduce(x, function(Q, xe, qe) {
                        return qe = De(qe, "trig" + O.cid), Q[qe] = rn(a, xe), Q
                    }, {})
                }
            },
            yt = function(a, x) {
                return i.reduce(a, function(O, Q, xe) {
                    var qe = bt(xe, x);
                    return O[qe] = Q, O
                }, {})
            },
            bt = function(a, x) {
                return a.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(O) {
                    return x[O.slice(4)]
                })
            },
            Kt = function y(a, x, O) {
                return i.each(a, function(Q, xe) {
                    i.isString(Q) ? a[xe] = bt(Q, x) : i.isObject(Q) && i.isArray(O) && (i.extend(Q, y(i.pick(Q, O), x)), i.each(O, function(qe) {
                        var It = Q[qe];
                        i.isString(It) && (Q[qe] = bt(It, x))
                    }))
                }), a
            },
            Je = {
                normalizeUIKeys: function(a) {
                    var x = this._getUIBindings();
                    return yt(a, x)
                },
                normalizeUIString: function(a) {
                    var x = this._getUIBindings();
                    return bt(a, x)
                },
                normalizeUIValues: function(a, x) {
                    var O = this._getUIBindings();
                    return Kt(a, O, x)
                },
                _getUIBindings: function() {
                    var a = i.result(this, "_uiBindings"),
                        x = i.result(this, "ui");
                    return a || x
                },
                _bindUIElements: function() {
                    var a = this;
                    if (!!this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var x = i.result(this, "_uiBindings");
                        this._ui = {}, i.each(x, function(O, Q) {
                            a._ui[Q] = a.$(O)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var a = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(x, O) {
                        delete a.ui[O]
                    }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui)
                },
                _getUI: function(a) {
                    return this._ui[a]
                }
            };

        function Lt(y) {
            return y instanceof n.$ ? y : n.$(y)
        }

        function F(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var N = {
                createBuffer: function() {
                    return document.createDocumentFragment()
                },
                getEl: function(a) {
                    return Lt(a)
                },
                findEl: function(a, x) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(a);
                    return O.find(x)
                },
                hasEl: function(a, x) {
                    return a.contains(x && x.parentNode)
                },
                detachEl: function(a) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(a);
                    x.detach()
                },
                replaceEl: function(a, x) {
                    if (a !== x) {
                        var O = x.parentNode;
                        !O || O.replaceChild(a, x)
                    }
                },
                swapEl: function(a, x) {
                    if (a !== x) {
                        var O = a.parentNode,
                            Q = x.parentNode;
                        if (!(!O || !Q)) {
                            var xe = a.nextSibling,
                                qe = x.nextSibling;
                            O.insertBefore(x, xe), Q.insertBefore(a, qe)
                        }
                    }
                },
                setContents: function(a, x) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(a);
                    O.html(x)
                },
                appendContents: function(a, x) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = O._$el,
                        xe = Q === void 0 ? Lt(a) : Q,
                        qe = O._$contents,
                        It = qe === void 0 ? Lt(x) : qe;
                    xe.append(It)
                },
                hasContents: function(a) {
                    return !!a && a.hasChildNodes()
                },
                detachContents: function(a) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(a);
                    x.contents().detach()
                }
            },
            W = {
                Dom: N,
                supportsRenderLifecycle: !0,
                supportsDestroyLifecycle: !0,
                _isDestroyed: !1,
                isDestroyed: function() {
                    return !!this._isDestroyed
                },
                _isRendered: !1,
                isRendered: function() {
                    return !!this._isRendered
                },
                _isAttached: !1,
                isAttached: function() {
                    return !!this._isAttached
                },
                delegateEvents: function(a) {
                    this._proxyBehaviorViewProperties(), this._buildEventProxies();
                    var x = this._getEvents(a);
                    typeof a > "u" && (this.events = x);
                    var O = i.extend({}, this._getBehaviorEvents(), x, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, O), this
                },
                _getEvents: function(a) {
                    var x = a || this.events;
                    return i.isFunction(x) ? this.normalizeUIKeys(x.call(this)) : this.normalizeUIKeys(x)
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var a = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this, a)
                    }
                },
                delegateEntityEvents: function() {
                    return this._delegateEntityEvents(this.model, this.collection), this._delegateBehaviorEntityEvents(), this
                },
                undelegateEntityEvents: function() {
                    return this._undelegateEntityEvents(this.model, this.collection), this._undelegateBehaviorEntityEvents(), this
                },
                destroy: function() {
                    if (this._isDestroyed) return this;
                    for (var a = this._isAttached && !this._shouldDisableEvents, x = arguments.length, O = Array(x), Q = 0; Q < x; Q++) O[Q] = arguments[Q];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(O)), a && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), a && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, O), this.triggerMethod.apply(this, ["destroy", this].concat(O)), this.stopListening(), this
                },
                _removeElement: function() {
                    this.$el.off().removeData(), this.Dom.detachEl(this.el, this.$el)
                },
                bindUIElements: function() {
                    return this._bindUIElements(), this._bindBehaviorUIElements(), this
                },
                unbindUIElements: function() {
                    return this._unbindUIElements(), this._unbindBehaviorUIElements(), this
                },
                getUI: function(a) {
                    return this._getUI(a)
                },
                childViewEventPrefix: function() {
                    return nt("childViewEventPrefix") ? "childview" : !1
                },
                triggerMethod: function() {
                    var a = m.apply(this, arguments);
                    return this._triggerEventOnBehaviors.apply(this, arguments), a
                },
                _buildEventProxies: function() {
                    this._childViewEvents = i.result(this, "childViewEvents"), this._childViewTriggers = i.result(this, "childViewTriggers")
                },
                _proxyChildViewEvents: function(a) {
                    this.listenTo(a, "all", this._childViewEventHandler)
                },
                _childViewEventHandler: function(a) {
                    for (var x = this.normalizeMethods(this._childViewEvents), O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), xe = 1; xe < O; xe++) Q[xe - 1] = arguments[xe];
                    typeof x < "u" && i.isFunction(x[a]) && x[a].apply(this, Q);
                    var qe = this._childViewTriggers;
                    qe && i.isString(qe[a]) && this.triggerMethod.apply(this, [qe[a]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Wt = It + ":" + a;
                        this.triggerMethod.apply(this, [Wt].concat(Q))
                    }
                }
            };
        i.extend(W, te, Ht, ke, ct, Je);

        function M(y) {
            y._isRendered || (y.supportsRenderLifecycle || P(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, P(y, "render", y)))
        }

        function H(y) {
            if (y.destroy) {
                y.destroy();
                return
            }
            y.supportsDestroyLifecycle || P(y, "before:destroy", y);
            var a = y._isAttached && !y._shouldDisableEvents;
            a && P(y, "before:detach", y), y.remove(), a && (y._isAttached = !1, P(y, "detach", y)), y._isDestroyed = !0, y.supportsDestroyLifecycle || P(y, "destroy", y)
        }
        var pe = ["allowMissingEl", "parentEl", "replaceElement"],
            ge = g.extend({
                Dom: N,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(a) {
                    if (this._setOptions(a), this.mergeOptions(a, pe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new be({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, a)
                },
                show: function(a, x) {
                    if (!!this._ensureElement(x)) return a = this._getView(a, x), a === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, a, x), a._isAttached || this.empty(x), this._setupChildView(a), this.currentView = a, M(a), this._attachView(a, x), this.triggerMethod("show", this, a, x), this._isSwappingView = !1, this)
                },
                _setupChildView: function(a) {
                    oe(a), this._proxyChildViewEvents(a), a.on("destroy", this._empty, this)
                },
                _proxyChildViewEvents: function(a) {
                    var x = this._parentView;
                    !x || x._proxyChildViewEvents(a)
                },
                _shouldDisableMonitoring: function() {
                    return this._parentView && this._parentView.monitorViewEvents === !1
                },
                _attachView: function(a) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = !a._isAttached && A(this.el) && !this._shouldDisableMonitoring(),
                        Q = typeof x.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!x.replaceElement;
                    O && P(a, "before:attach", a), Q ? this._replaceEl(a) : this.attachHtml(a), O && (a._isAttached = !0, P(a, "attach", a))
                },
                _ensureElement: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var x = typeof a.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!a.allowMissingEl;
                        if (x) return !1;
                        throw new be('An "el" must exist in DOM for this region ' + this.cid)
                    }
                    return !0
                },
                _getView: function(a) {
                    if (!a) throw new be({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                    });
                    if (a._isDestroyed) throw new be({
                        name: "ViewDestroyedError",
                        message: 'View (cid: "' + a.cid + '") has already been destroyed and cannot be used.'
                    });
                    if (a instanceof n.View) return a;
                    var x = this._getViewOptions(a);
                    return new Pn(x)
                },
                _getViewOptions: function(a) {
                    if (i.isFunction(a)) return {
                        template: a
                    };
                    if (i.isObject(a)) return a;
                    var x = function() {
                        return a
                    };
                    return {
                        template: x
                    }
                },
                getEl: function(a) {
                    var x = i.result(this, "parentEl");
                    return x && i.isString(a) ? this.Dom.findEl(x, a) : this.Dom.getEl(a)
                },
                _replaceEl: function(a) {
                    this._restoreEl(), a.on("before:destroy", this._restoreEl, this), this.Dom.replaceEl(a.el, this.el), this._isReplaced = !0
                },
                _restoreEl: function() {
                    if (!!this._isReplaced) {
                        var a = this.currentView;
                        !a || (this._detachView(a), this._isReplaced = !1)
                    }
                },
                isReplaced: function() {
                    return !!this._isReplaced
                },
                isSwappingView: function() {
                    return !!this._isSwappingView
                },
                attachHtml: function(a) {
                    this.Dom.appendContents(this.el, a.el, {
                        _$el: this.$el,
                        _$contents: a.$el
                    })
                },
                empty: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                            allowMissingEl: !0
                        },
                        x = this.currentView;
                    if (!x) return this._ensureElement(a) && this.detachHtml(), this;
                    var O = !a.preventDestroy;
                    return O || k("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(x, O), this
                },
                _empty: function(a, x) {
                    a.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, a), this._restoreEl(), delete this.currentView, a._isDestroyed || (x ? this.removeView(a) : this._detachView(a), this._stopChildViewEvents(a)), this.triggerMethod("empty", this, a)
                },
                _stopChildViewEvents: function(a) {
                    var x = this._parentView;
                    !x || this._parentView.stopListening(a)
                },
                destroyView: function(a) {
                    return a._isDestroyed || (a._shouldDisableEvents = this._shouldDisableMonitoring(), H(a)), a
                },
                removeView: function(a) {
                    this.destroyView(a)
                },
                detachView: function() {
                    var a = this.currentView;
                    if (!!a) return this._empty(a), a
                },
                _detachView: function(a) {
                    var x = a._isAttached && !this._shouldDisableMonitoring(),
                        O = this._isReplaced;
                    x && P(a, "before:detach", a), O ? this.Dom.replaceEl(this.el, a.el) : this.detachHtml(), x && (a._isAttached = !1, P(a, "detach", a))
                },
                detachHtml: function() {
                    this.Dom.detachContents(this.el, this.$el)
                },
                hasView: function() {
                    return !!this.currentView
                },
                reset: function(a) {
                    return this.empty(a), this.$el && (this.el = this._initEl), delete this.$el, this
                },
                destroy: function(a) {
                    return this._isDestroyed ? this : (this.reset(a), this._name && this._parentView._removeReferences(this._name), delete this._parentView, delete this._name, g.prototype.destroy.apply(this, arguments))
                }
            }, {
                setDomApi: F
            }),
            Ne = function(y, a) {
                return y instanceof ge ? y : Ve(y, a)
            };

        function Ve(y, a) {
            var x = i.extend({}, a);
            if (i.isString(y)) return i.extend(x, {
                el: y
            }), pt(x);
            if (i.isFunction(y)) return i.extend(x, {
                regionClass: y
            }), pt(x);
            if (i.isObject(y)) return y.selector && k("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(x, {
                el: y.selector
            }, y), pt(x);
            throw new be({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function pt(y) {
            var a = y.regionClass,
                x = i.omit(y, "regionClass");
            return new a(x)
        }
        var Ft = {
                regionClass: ge,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    R(this._regions, "reset")
                },
                addRegion: function(a, x) {
                    var O = {};
                    return O[a] = x, this.addRegions(O)[a]
                },
                addRegions: function(a) {
                    if (!i.isEmpty(a)) return a = this.normalizeUIValues(a, ["selector", "el"]), this.regions = i.extend({}, this.regions, a), this._addRegions(a)
                },
                _addRegions: function(a) {
                    var x = this,
                        O = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(a, function(Q, xe, qe) {
                        return Q[qe] = Ne(xe, O), x._addRegion(Q[qe], qe), Q
                    }, {})
                },
                _addRegion: function(a, x) {
                    this.triggerMethod("before:add:region", this, x, a), a._parentView = this, a._name = x, this._regions[x] = a, this.triggerMethod("add:region", this, x, a)
                },
                removeRegion: function(a) {
                    var x = this._regions[a];
                    return this._removeRegion(x, a), x
                },
                removeRegions: function() {
                    var a = this._getRegions();
                    return i.each(this._regions, i.bind(this._removeRegion, this)), a
                },
                _removeRegion: function(a, x) {
                    this.triggerMethod("before:remove:region", this, x, a), a.destroy(), this.triggerMethod("remove:region", this, x, a)
                },
                _removeReferences: function(a) {
                    delete this.regions[a], delete this._regions[a]
                },
                emptyRegions: function() {
                    var a = this.getRegions();
                    return R(a, "empty"), a
                },
                hasRegion: function(a) {
                    return !!this.getRegion(a)
                },
                getRegion: function(a) {
                    return this._isRendered || this.render(), this._regions[a]
                },
                _getRegions: function() {
                    return i.clone(this._regions)
                },
                getRegions: function() {
                    return this._isRendered || this.render(), this._getRegions()
                },
                showChildView: function(a, x) {
                    for (var O = this.getRegion(a), Q = arguments.length, xe = Array(Q > 2 ? Q - 2 : 0), qe = 2; qe < Q; qe++) xe[qe - 2] = arguments[qe];
                    return O.show.apply(O, [x].concat(xe))
                },
                detachChildView: function(a) {
                    return this.getRegion(a).detachView()
                },
                getChildView: function(a) {
                    return this.getRegion(a).currentView
                }
            },
            Ye = {
                render: function(a, x) {
                    if (!a) throw new be({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var O = i.isFunction(a) ? a : S.get(a);
                    return O(x)
                }
            },
            In = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Pn = n.View.extend({
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, In), oe(this), this._initBehaviors(), this._initRegions();
                    var x = Array.prototype.slice.call(arguments);
                    x[0] = this.options, n.View.prototype.constructor.apply(this, x), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                serializeData: function() {
                    return !this.model && !this.collection ? {} : this.model ? this.serializeModel() : {
                        items: this.serializeCollection()
                    }
                },
                serializeModel: function() {
                    return this.model ? i.clone(this.model.attributes) : {}
                },
                serializeCollection: function() {
                    return this.collection ? this.collection.map(function(a) {
                        return i.clone(a.attributes)
                    }) : {}
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = A(this.el), this._isRendered && this.bindUIElements(), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._isRendered && this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                _renderTemplate: function() {
                    var a = this.getTemplate();
                    if (a === !1) {
                        k("template:false is deprecated.  Use _.noop.");
                        return
                    }
                    var x = this.mixinTemplateContext(this.serializeData()),
                        O = this._renderHtml(a, x);
                    this.attachElContent(O)
                },
                _renderHtml: function(a, x) {
                    return Ye.render(a, x, this)
                },
                getTemplate: function() {
                    return this.template
                },
                mixinTemplateContext: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        x = i.result(this, "templateContext");
                    return i.extend(a, x)
                },
                attachElContent: function(a) {
                    return this.Dom.setContents(this.el, a, this.$el), this
                },
                _removeChildren: function() {
                    this.removeRegions()
                },
                _getImmediateChildren: function() {
                    return i.chain(this._getRegions()).map("currentView").compact().value()
                }
            }, {
                setRenderer: function(a) {
                    return this.prototype._renderHtml = a, this
                },
                setDomApi: F
            });
        i.extend(Pn.prototype, W, Ft);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(a, x) {
                i.each(it, function(O) {
                    a[O] = function() {
                        var Q = i.result(this, x),
                            xe = Array.prototype.slice.call(arguments);
                        return i[O].apply(i, [Q].concat(xe))
                    }
                })
            },
            gi = function(a) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(a, i.bind(this.add, this))
            };
        Dn(gi.prototype, "_getViews"), i.extend(gi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(a, x) {
                return this._add(a, x)._updateLength()
            },
            _add: function(a, x) {
                var O = a.cid;
                return this._views[O] = a, a.model && (this._indexByModel[a.model.cid] = O), x && (this._indexByCustom[x] = O), this
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var x = this._indexByModel[a];
                return this.findByCid(x)
            },
            findByCustom: function(a) {
                var x = this._indexByCustom[a];
                return this.findByCid(x)
            },
            findByIndex: function(a) {
                return i.values(this._views)[a]
            },
            findByCid: function(a) {
                return this._views[a]
            },
            remove: function(a) {
                return this._remove(a)._updateLength()
            },
            _remove: function(a) {
                var x = a.cid;
                return a.model && delete this._indexByModel[a.model.cid], i.some(this._indexByCustom, i.bind(function(O, Q) {
                    if (O === x) return delete this._indexByCustom[Q], !0
                }, this)), delete this._views[x], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var Sr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            kn = n.View.extend({
                sort: !0,
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, Sr), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var x = Array.prototype.slice.call(arguments);
                    x[0] = this.options, n.View.prototype.constructor.apply(this, x), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var a = this._isAttached && this.monitorViewEvents !== !1,
                        x = a ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(x, function(O) {
                        P(O, "before:attach", O)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(x, function(O) {
                        O._isAttached = !0, P(O, "attach", O)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(a, x, O) {
                    var Q = O.at !== void 0 && (O.index || x.indexOf(a));
                    (this.filter || Q === !1) && (Q = i.indexOf(this._filteredSortedModels(Q), a)), this._shouldAddChild(a, Q) && (this._destroyEmptyView(), this._addChild(a, Q))
                },
                _onCollectionUpdate: function(a, x) {
                    var O = x.changes;
                    this._removeChildModels(O.removed)
                },
                _removeChildModels: function(a) {
                    var x = this._getRemovedViews(a);
                    !x.length || (this.children._updateLength(), this._updateIndices(x, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(a) {
                    var x = this;
                    return i.reduce(a, function(O, Q) {
                        var xe = Q && x.children.findByModel(Q);
                        return !xe || xe._isDestroyed || (x._removeChildView(xe), O.push(xe)), O
                    }, [])
                },
                _removeChildView: function(a) {
                    this.triggerMethod("before:remove:child", this, a), this.children._remove(a), a._shouldDisableEvents = this.monitorViewEvents === !1, H(a), this.stopListening(a), this.triggerMethod("remove:child", this, a)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = A(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(a) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.preventRender,
                        Q = this._isRendered && !this._isDestroyed,
                        xe = this.filter !== a,
                        qe = Q && xe && !O;
                    if (qe) {
                        var It = this._filteredSortedModels();
                        this.filter = a;
                        var Wt = this._filteredSortedModels();
                        this._applyModelDeltas(Wt, It)
                    } else this.filter = a;
                    return this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _applyModelDeltas: function(a, x) {
                    var O = this,
                        Q = {};
                    i.each(a, function(qe, It) {
                        var Wt = !O.children.findByModel(qe);
                        Wt && O._onCollectionAdd(qe, O.collection, {
                            at: It
                        }), Q[qe.cid] = !0
                    });
                    var xe = i.filter(x, function(qe) {
                        return !Q[qe.cid] && O.children.findByModel(qe)
                    });
                    this._removeChildModels(xe)
                },
                reorder: function() {
                    var a = this,
                        x = this.children,
                        O = this._filteredSortedModels();
                    if (!O.length && this._showingEmptyView) return this;
                    var Q = i.some(O, function(Wt) {
                        return !x.findByModel(Wt)
                    });
                    if (Q) this.render();
                    else {
                        var xe = [],
                            qe = i.reduce(this.children._views, function(Wt, Un) {
                                var Nn = i.indexOf(O, Un.model);
                                return Nn === -1 ? (xe.push(Un.model), Wt) : (Un._index = Nn, Wt[Nn] = Un.el, Wt)
                            }, new Array(O.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(qe, function(Wt) {
                            a.Dom.appendContents(It, Wt)
                        }), this._appendReorderedChildren(It), this._removeChildModels(xe), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var a = this,
                        x = this._filteredSortedModels(),
                        O = i.find(x, function(Q, xe) {
                            var qe = a.children.findByModel(Q);
                            return !qe || qe._index !== xe
                        });
                    O && this.resortView()
                },
                _emptyViewIndex: -1,
                _appendReorderedChildren: function(a) {
                    this.Dom.appendContents(this.el, a, {
                        _$el: this.$el
                    })
                },
                _renderChildren: function() {
                    this._isRendered && (this._destroyEmptyView(), this._destroyChildren());
                    var a = this._filteredSortedModels();
                    this.isEmpty({
                        processedModels: a
                    }) ? this._showEmptyView() : (this.triggerMethod("before:render:children", this), this._startBuffering(), this._showCollection(a), this._endBuffering(), this.triggerMethod("render:children", this))
                },
                _createView: function(a, x) {
                    var O = this._getChildView(a),
                        Q = this._getChildViewOptions(a, x),
                        xe = this.buildChildView(a, O, Q);
                    return xe
                },
                _setupChildView: function(a, x) {
                    oe(a), this._proxyChildViewEvents(a), this.sort && (a._index = x)
                },
                _showCollection: function(a) {
                    i.each(a, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(a) {
                    if (!this.collection || !this.collection.length) return [];
                    var x = this.getViewComparator(),
                        O = this.collection.models;
                    if (a = Math.min(Math.max(a, 0), O.length - 1), x) {
                        var Q = void 0;
                        a && (Q = O[a], O = O.slice(0, a).concat(O.slice(a + 1))), O = this._sortModelsBy(O, x), Q && O.splice(a, 0, Q)
                    }
                    return O = this._filterModels(O), O
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(a) {
                    var x = this;
                    return this.filter && (a = i.filter(a, function(O, Q) {
                        return x._shouldAddChild(O, Q)
                    })), a
                },
                _sortModelsBy: function(a, x) {
                    return typeof x == "string" ? i.sortBy(a, function(O) {
                        return O.get(x)
                    }) : x.length === 1 ? i.sortBy(a, i.bind(x, this)) : i.clone(a).sort(i.bind(x, this))
                },
                _showEmptyView: function() {
                    var a = this._getEmptyView();
                    if (a && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var x = new n.Model,
                            O = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(O) && (O = O.call(this, x, this._emptyViewIndex));
                        var Q = this.buildChildView(x, a, O);
                        this.triggerMethod("before:render:empty", this, Q), this.addChildView(Q, 0), this.triggerMethod("render:empty", this, Q)
                    }
                },
                _destroyEmptyView: function() {
                    this._showingEmptyView && (this.triggerMethod("before:remove:empty", this), this._destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty", this))
                },
                _getEmptyView: function() {
                    var a = this.emptyView;
                    if (!!a) return this._getView(a)
                },
                _getChildView: function(a) {
                    var x = this.childView;
                    if (!x) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (x = this._getView(x, a), !x) throw new be({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return x
                },
                _getView: function(a, x) {
                    if (a.prototype instanceof n.View || a === n.View) return a;
                    if (i.isFunction(a)) return a.call(this, x)
                },
                _addChild: function(a, x) {
                    var O = this._createView(a, x);
                    return this.addChildView(O, x), O
                },
                _getChildViewOptions: function(a, x) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(a, x) : this.childViewOptions
                },
                addChildView: function(a, x) {
                    return this.triggerMethod("before:add:child", this, a), this._setupChildView(a, x), this._isBuffering ? this.children._add(a) : (this._updateIndices(a, !0), this.children.add(a)), M(a), this._attachView(a, x), this.triggerMethod("add:child", this, a), a
                },
                _updateIndices: function(a, x) {
                    if (!!this.sort) {
                        if (!x) {
                            i.each(i.sortBy(this.children._views, "_index"), function(Q, xe) {
                                Q._index = xe
                            });
                            return
                        }
                        var O = i.isArray(a) ? i.max(a, "_index") : a;
                        i.isObject(O) && i.each(this.children._views, function(Q) {
                            Q._index >= O._index && (Q._index += 1)
                        })
                    }
                },
                _attachView: function(a, x) {
                    var O = !a._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    O && P(a, "before:attach", a), this.attachHtml(this, a, x), O && (a._isAttached = !0, P(a, "attach", a))
                },
                buildChildView: function(a, x, O) {
                    var Q = i.extend({
                        model: a
                    }, O);
                    return new x(Q)
                },
                removeChildView: function(a) {
                    return !a || a._isDestroyed || (this._removeChildView(a), this.children._updateLength(), this._updateIndices(a, !1)), a
                },
                isEmpty: function(a) {
                    var x = void 0;
                    return i.result(a, "processedModels") ? x = a.processedModels : (x = this.collection ? this.collection.models : [], x = this._filterModels(x)), x.length === 0
                },
                attachBuffer: function(a, x) {
                    this.Dom.appendContents(a.el, x, {
                        _$el: a.$el
                    })
                },
                _createBuffer: function() {
                    var a = this,
                        x = this.Dom.createBuffer();
                    return i.each(this._bufferedChildren, function(O) {
                        a.Dom.appendContents(x, O.el, {
                            _$contents: O.$el
                        })
                    }), x
                },
                attachHtml: function(a, x, O) {
                    a._isBuffering ? a._bufferedChildren.splice(O, 0, x) : a._insertBefore(x, O) || a._insertAfter(x)
                },
                _insertBefore: function(a, x) {
                    var O = void 0,
                        Q = this.sort && x < this.children.length - 1;
                    return Q && (O = i.find(this.children._views, function(xe) {
                        return xe._index === x + 1
                    })), O ? (this.beforeEl(O.el, a.el), !0) : !1
                },
                beforeEl: function(a, x) {
                    this.$(a).before(x)
                },
                _insertAfter: function(a) {
                    this.Dom.appendContents(this.el, a.el, {
                        _$el: this.$el,
                        _$contents: a.$el
                    })
                },
                _initChildViewStorage: function() {
                    this.children = new gi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(a) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(a, x) {
                    var O = this.filter;
                    return !i.isFunction(O) || O.call(this, a, x, this.collection)
                }
            }, {
                setDomApi: F
            });
        i.extend(kn.prototype, W);
        var sn = function() {
            this._init()
        };
        Dn(sn.prototype, "_views");

        function kr(y, a) {
            return a.model && a.model.get(y)
        }
        i.extend(sn.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(a) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    O = a.cid;
                this._viewsByCid[O] = a, a.model && (this._indexByModel[a.model.cid] = O), this._views.splice(x, 0, a), this._updateLength()
            },
            _sort: function(a, x) {
                return typeof a == "string" ? (a = i.partial(kr, a), this._sortBy(a)) : a.length === 1 ? this._sortBy(i.bind(a, x)) : this._views.sort(i.bind(a, x))
            },
            _sortBy: function(a) {
                var x = i.sortBy(this._views, a);
                return this._set(x), x
            },
            _set: function(a) {
                this._views.length = 0, this._views.push.apply(this._views, a.slice(0)), this._updateLength()
            },
            _swap: function(a, x) {
                var O = this.findIndexByView(a),
                    Q = this.findIndexByView(x);
                if (!(O === -1 || Q === -1)) {
                    var xe = this._views[O];
                    this._views[O] = this._views[Q], this._views[Q] = xe
                }
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var x = this._indexByModel[a];
                return this.findByCid(x)
            },
            findByIndex: function(a) {
                return this._views[a]
            },
            findIndexByView: function(a) {
                return this._views.indexOf(a)
            },
            findByCid: function(a) {
                return this._viewsByCid[a]
            },
            hasView: function(a) {
                return !!this.findByCid(a.cid)
            },
            _remove: function(a) {
                if (!!this._viewsByCid[a.cid]) {
                    a.model && delete this._indexByModel[a.model.cid], delete this._viewsByCid[a.cid];
                    var x = this.findIndexByView(a);
                    this._views.splice(x, 1), this._updateLength()
                }
            },
            _updateLength: function() {
                this.length = this._views.length
            }
        });
        var Tr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            mi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, Tr), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var x = Array.prototype.slice.call(arguments);
                    x[0] = this.options, n.View.prototype.constructor.apply(this, x), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _initChildViewStorage: function() {
                    this.children = new sn
                },
                getEmptyRegion: function() {
                    return this._emptyRegion && !this._emptyRegion.isDestroyed() ? this._emptyRegion : (this._emptyRegion = new ge({
                        el: this.el,
                        replaceElement: !1
                    }), this._emptyRegion._parentView = this, this._emptyRegion)
                },
                _initialEvents: function() {
                    this.listenTo(this.collection, {
                        sort: this._onCollectionSort,
                        reset: this._onCollectionReset,
                        update: this._onCollectionUpdate
                    })
                },
                _onCollectionSort: function(a, x) {
                    var O = x.add,
                        Q = x.merge,
                        xe = x.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || O || xe || Q || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(a, x) {
                    var O = x.changes,
                        Q = O.removed.length && this._removeChildModels(O.removed);
                    this._addedViews = O.added.length && this._addChildModels(O.added), this._detachChildren(Q), this._showChildren(), this._removeChildViews(Q)
                },
                _removeChildModels: function(a) {
                    var x = this;
                    return i.reduce(a, function(O, Q) {
                        var xe = x._removeChildModel(Q);
                        return xe && O.push(xe), O
                    }, [])
                },
                _removeChildModel: function(a) {
                    var x = this.children.findByModel(a);
                    return x && this._removeChild(x), x
                },
                _removeChild: function(a) {
                    this.triggerMethod("before:remove:child", this, a), this.children._remove(a), this.triggerMethod("remove:child", this, a)
                },
                _addChildModels: function(a) {
                    return i.map(a, i.bind(this._addChildModel, this))
                },
                _addChildModel: function(a) {
                    var x = this._createChildView(a);
                    return this._addChild(x), x
                },
                _createChildView: function(a) {
                    var x = this._getChildView(a),
                        O = this._getChildViewOptions(a),
                        Q = this.buildChildView(a, x, O);
                    return Q
                },
                _addChild: function(a, x) {
                    this.triggerMethod("before:add:child", this, a), this._setupChildView(a), this.children._add(a, x), this.triggerMethod("add:child", this, a)
                },
                _getChildView: function(a) {
                    var x = this.childView;
                    if (!x) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (x = this._getView(x, a), !x) throw new be({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return x
                },
                _getView: function(a, x) {
                    if (a.prototype instanceof n.View || a === n.View) return a;
                    if (i.isFunction(a)) return a.call(this, x)
                },
                _getChildViewOptions: function(a) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(a) : this.childViewOptions
                },
                buildChildView: function(a, x, O) {
                    var Q = i.extend({
                        model: a
                    }, O);
                    return new x(Q)
                },
                _setupChildView: function(a) {
                    oe(a), a.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(a)
                },
                _getImmediateChildren: function() {
                    return this.children._views
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = A(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._destroyChildren(), this.children._init(), this.collection && this._addChildModels(this.collection.models), this._showChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                sort: function() {
                    return this._isDestroyed ? this : this.children.length ? (this._showChildren(), this) : this
                },
                _showChildren: function() {
                    if (this.isEmpty()) {
                        this._showEmptyView();
                        return
                    }
                    this._sortChildren(), this.filter()
                },
                isEmpty: function(a) {
                    return a || !this.children.length
                },
                _showEmptyView: function() {
                    var a = this._getEmptyView();
                    if (!!a) {
                        var x = this._getEmptyViewOptions(),
                            O = this.getEmptyRegion();
                        O.show(new a(x))
                    }
                },
                _getEmptyView: function() {
                    var a = this.emptyView;
                    if (!!a) return this._getView(a)
                },
                _destroyEmptyView: function() {
                    var a = this.getEmptyRegion();
                    a.hasView() && a.empty()
                },
                _getEmptyViewOptions: function() {
                    var a = this.emptyViewOptions || this.childViewOptions;
                    return i.isFunction(a) ? a.call(this) : a
                },
                _sortChildren: function() {
                    var a = this.getComparator();
                    !a || (delete this._addedViews, this.triggerMethod("before:sort", this), this.children._sort(a, this), this.triggerMethod("sort", this))
                },
                setComparator: function(a) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.preventRender,
                        Q = this.viewComparator !== a,
                        xe = Q && !O;
                    return this.viewComparator = a, xe && this.sort(), this
                },
                removeComparator: function(a) {
                    return this.setComparator(null, a)
                },
                getComparator: function() {
                    return this.viewComparator ? this.viewComparator : !this.sortWithCollection || this.viewComparator === !1 || !this.collection ? !1 : this._viewComparator
                },
                _viewComparator: function(a) {
                    return this.collection.indexOf(a.model)
                },
                filter: function() {
                    if (this._isDestroyed) return this;
                    if (!this.children.length) return this;
                    var a = this._filterChildren();
                    return this._renderChildren(a), this
                },
                _filterChildren: function() {
                    var a = this,
                        x = this._getFilter(),
                        O = this._addedViews;
                    if (delete this._addedViews, !x) return O || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var Q = [],
                        xe = [];
                    return i.each(this.children._views, function(qe, It, Wt) {
                        (x.call(a, qe, It, Wt) ? Q : xe).push(qe)
                    }), this._detachChildren(xe), this.triggerMethod("filter", this, Q, xe), Q
                },
                _getFilter: function() {
                    var a = this.getFilter();
                    if (!a) return !1;
                    if (i.isFunction(a)) return a;
                    if (i.isObject(a)) {
                        var x = i.matches(a);
                        return function(O) {
                            return x(O.model && O.model.attributes)
                        }
                    }
                    if (i.isString(a)) return function(O) {
                        return O.model && O.model.get(a)
                    };
                    throw new be({
                        name: "InvalidViewFilterError",
                        message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'
                    })
                },
                getFilter: function() {
                    return this.viewFilter
                },
                setFilter: function(a) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.preventRender,
                        Q = this.viewFilter !== a,
                        xe = Q && !O;
                    return this.viewFilter = a, xe && this.filter(), this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _detachChildren: function(a) {
                    i.each(a, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(a) {
                    var x = a._isAttached && this.monitorViewEvents !== !1;
                    x && P(a, "before:detach", a), this.detachHtml(a), x && (a._isAttached = !1, P(a, "detach", a))
                },
                detachHtml: function(a) {
                    this.Dom.detachEl(a.el, a.$el)
                },
                _renderChildren: function(a) {
                    if (this.isEmpty(!a.length)) {
                        this._showEmptyView();
                        return
                    }
                    this._destroyEmptyView(), this.triggerMethod("before:render:children", this, a);
                    var x = this._getBuffer(a);
                    this._attachChildren(x, a), this.triggerMethod("render:children", this, a)
                },
                _attachChildren: function(a, x) {
                    var O = this._isAttached && this.monitorViewEvents !== !1;
                    x = O ? x : [], i.each(x, function(Q) {
                        Q._isAttached || P(Q, "before:attach", Q)
                    }), this.attachHtml(a), i.each(x, function(Q) {
                        Q._isAttached || (Q._isAttached = !0, P(Q, "attach", Q))
                    })
                },
                _getBuffer: function(a) {
                    var x = this,
                        O = this.Dom.createBuffer();
                    return i.each(a, function(Q) {
                        M(Q), x.Dom.appendContents(O, Q.el, {
                            _$contents: Q.$el
                        })
                    }), O
                },
                attachHtml: function(a) {
                    this.Dom.appendContents(this.el, a, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(a, x) {
                    if (!this.children.hasView(a) || !this.children.hasView(x)) throw new be({
                        name: "ChildSwapError",
                        message: "Both views must be children of the collection view"
                    });
                    return this.children._swap(a, x), this.Dom.swapEl(a.el, x.el), this.Dom.hasEl(this.el, a.el) !== this.Dom.hasEl(this.el, x.el) && this.filter(), this
                },
                addChildView: function(a, x) {
                    return !a || a._isDestroyed || ((!x || x >= this.children.length) && (this._addedViews = [a]), this._addChild(a, x), this._showChildren()), a
                },
                detachChildView: function(a) {
                    return this.removeChildView(a, {
                        shouldDetach: !0
                    }), a
                },
                removeChildView: function(a, x) {
                    return a && (this._removeChildView(a, x), this._removeChild(a), this.isEmpty() && this._showEmptyView(), a)
                },
                _removeChildViews: function(a) {
                    i.each(a, i.bind(this._removeChildView, this))
                },
                _removeChildView: function(a) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.shouldDetach;
                    a.off("destroy", this.removeChildView, this), O ? this._detachChildView(a) : this._destroyChildView(a), this.stopListening(a)
                },
                _destroyChildView: function(a) {
                    a._isDestroyed || (a._shouldDisableEvents = this.monitorViewEvents === !1, H(a))
                },
                _removeChildren: function() {
                    this._destroyChildren();
                    var a = this.getEmptyRegion();
                    a.destroy(), delete this._addedViews
                },
                _destroyChildren: function() {
                    !this.children || !this.children.length || (this.triggerMethod("before:destroy:children", this), this.monitorViewEvents === !1 && this.Dom.detachContents(this.el, this.$el), i.each(this.children._views, i.bind(this._removeChildView, this)), this.triggerMethod("destroy:children", this))
                }
            }, {
                setDomApi: F
            });
        i.extend(mi.prototype, W);
        var $i = ["childViewContainer", "template", "templateContext"],
            vi = kn.extend({
                constructor: function(a) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(a, $i), kn.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(a) {
                    var x = this.childView;
                    if (!x) return this.constructor;
                    if (x = this._getView(x, a), !x) throw new be({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return x
                },
                serializeData: function() {
                    return this.serializeModel()
                },
                render: function() {
                    return this._isDestroyed ? this : (this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.renderChildren(), this._isRendering = !1, this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                renderChildren: function() {
                    (this._isRendered || this._isRendering) && kn.prototype._renderChildren.call(this)
                },
                attachBuffer: function(a, x) {
                    var O = this.getChildViewContainer(a);
                    this.Dom.appendContents(O[0], x, {
                        _$el: O
                    })
                },
                _insertAfter: function(a) {
                    var x = this.getChildViewContainer(this, a);
                    this.Dom.appendContents(x[0], a.el, {
                        _$el: x,
                        _$contents: a.$el
                    })
                },
                _appendReorderedChildren: function(a) {
                    var x = this.getChildViewContainer(this);
                    this.Dom.appendContents(x[0], a, {
                        _$el: x
                    })
                },
                getChildViewContainer: function(a, x) {
                    if (a.$childViewContainer) return a.$childViewContainer;
                    var O = void 0,
                        Q = a.childViewContainer;
                    if (Q) {
                        var xe = i.result(a, "childViewContainer");
                        if (xe.charAt(0) === "@" && a.ui ? O = a.ui[xe.substr(4)] : O = this.$(xe), O.length <= 0) throw new be({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + a.childViewContainer
                        })
                    } else O = a.$el;
                    return a.$childViewContainer = O, O
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            yi = i.pick(Pn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(vi.prototype, yi);
        var Fi = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            ji = g.extend({
                cidPrefix: "mnb",
                constructor: function(a, x) {
                    this.view = x, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, a)), this.mergeOptions(this.options, Fi), this.ui = i.extend({}, i.result(this, "ui"), i.result(x, "ui")), g.apply(this, arguments)
                },
                $: function() {
                    return this.view.$.apply(this.view, arguments)
                },
                destroy: function() {
                    return this.stopListening(), this.view._removeBehavior(this), this
                },
                proxyViewProperties: function() {
                    return this.$el = this.view.$el, this.el = this.view.el, this
                },
                bindUIElements: function() {
                    return this._bindUIElements(), this
                },
                unbindUIElements: function() {
                    return this._unbindUIElements(), this
                },
                getUI: function(a) {
                    return this._getUI(a)
                },
                delegateEntityEvents: function() {
                    return this._delegateEntityEvents(this.view.model, this.view.collection), this
                },
                undelegateEntityEvents: function() {
                    return this._undelegateEntityEvents(this.view.model, this.view.collection), this
                },
                getEvents: function() {
                    var a = this,
                        x = this.normalizeUIKeys(i.result(this, "events"));
                    return i.reduce(x, function(O, Q, xe) {
                        return i.isFunction(Q) || (Q = a[Q]), Q && (xe = De(xe, a.cid), O[xe] = i.bind(Q, a)), O
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var a = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, a)
                    }
                }
            });
        i.extend(ji.prototype, ke, ct, Je);
        var mn = ["region", "regionClass"],
            zi = g.extend({
                cidPrefix: "mna",
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, mn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: ge,
                _initRegion: function() {
                    var a = this.region;
                    if (!!a) {
                        var x = {
                            regionClass: this.regionClass
                        };
                        this._region = Ne(a, x)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(a) {
                    for (var x = this.getRegion(), O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), xe = 1; xe < O; xe++) Q[xe - 1] = arguments[xe];
                    return x.show.apply(x, [a].concat(Q))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(a) {
                    return this.triggerMethod("before:start", this, a), this.triggerMethod("start", this, a), this
                }
            }),
            wi = ["appRoutes", "controller"],
            Gn = n.Router.extend({
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, wi), n.Router.apply(this, arguments);
                    var x = this.appRoutes,
                        O = this._getController();
                    this.processAppRoutes(O, x), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(a, x) {
                    var O = this._getController();
                    return this._addAppRoute(O, a, x), this
                },
                _processOnRoute: function(a, x) {
                    if (i.isFunction(this.onRoute)) {
                        var O = i.invert(this.appRoutes)[a];
                        this.onRoute(a, O, x)
                    }
                },
                processAppRoutes: function(a, x) {
                    var O = this;
                    if (!x) return this;
                    var Q = i.keys(x).reverse();
                    return i.each(Q, function(xe) {
                        O._addAppRoute(a, xe, x[xe])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(a, x, O) {
                    var Q = a[O];
                    if (!Q) throw new be('Method "' + O + '" was not found on the controller');
                    this.route(x, O, i.bind(Q, a))
                },
                triggerMethod: m
            });
        i.extend(Gn.prototype, Ht);

        function Gi() {
            throw new be({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var bi = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = bi, this
        }, Ze.bindEvents = v(Se), Ze.unbindEvents = v(Te), Ze.bindRequests = v(Ke), Ze.unbindRequests = v(dt), Ze.mergeOptions = v(D), Ze.getOption = v(V), Ze.normalizeMethods = v(Y), Ze.extend = b, Ze.isNodeAttached = A, Ze.deprecate = k, Ze.triggerMethod = v(m), Ze.triggerMethodOn = P, Ze.isEnabled = nt, Ze.setEnabled = Ct, Ze.monitorViewEvents = oe, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Gi, Ze.Application = zi, Ze.AppRouter = Gn, Ze.Renderer = Ye, Ze.TemplateCache = S, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = mi, Ze.CompositeView = vi, Ze.Behavior = ji, Ze.Region = ge, Ze.Error = be, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = Me, Ze.VERSION = f, Ze.DomApi = N, Ze.setDomApi = function(y) {
            kn.setDomApi(y), vi.setDomApi(y), mi.setDomApi(y), ge.setDomApi(y), Pn.setDomApi(y)
        }, Ze
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
})(wc);
const Et = wc.exports;
class vh {
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
    static gameStarted(e, n) {
        const i = {
            tag: e
        };
        n.isUGC !== void 0 && (i.is_ugc = n.isUGC), n.isSequel !== void 0 && (i.is_sequel = n.isSequel), n.locale !== void 0 && (i.locale = n.locale), n.mode !== void 0 && (i.mode = n.mode), n.numberOfPlayer !== void 0 && (i.number_of_players = n.numberOfPlayer), gtag("event", "game_start", i)
    }
    static bannerClick(e, n) {
        gtag("event", "banner_click", {
            url: e,
            location: n
        })
    }
    static externalLinkClick(e, n) {
        gtag("event", "external_link_click", {
            url: e,
            location: n
        })
    }
    static galleryClick(e, n) {
        gtag("event", "gallery_click", {
            category_id: e,
            location: n
        })
    }
    static galleryImpression(e, n) {
        gtag("event", "gallery_impression", {
            category_id: e,
            location: n
        })
    }
    static moderatorConnected(e) {
        gtag("event", "moderator_connected", {
            tag: e
        })
    }
    static itemModerated(e, n) {
        gtag("event", "item_moderated", {
            tag: e,
            was_rejected: n
        })
    }
    static playerKicked(e, n) {
        gtag("event", "player_kicked", {
            tag: e,
            is_lobby: n
        })
    }
}

function yh() {
    this.__data__ = [], this.size = 0
}
var wh = yh;

function bh(t, e) {
    return t === e || t !== t && e !== e
}
var ao = bh,
    Ch = ao;

function xh(t, e) {
    for (var n = t.length; n--;)
        if (Ch(t[n][0], e)) return n;
    return -1
}
var lo = xh,
    Eh = lo,
    _h = Array.prototype,
    Sh = _h.splice;

function kh(t) {
    var e = this.__data__,
        n = Eh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Sh.call(e, n, 1), --this.size, !0
}
var Th = kh,
    Ah = lo;

function Oh(t) {
    var e = this.__data__,
        n = Ah(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Rh = Oh,
    Ih = lo;

function Dh(t) {
    return Ih(this.__data__, t) > -1
}
var Mh = Dh,
    Lh = lo;

function Ph(t, e) {
    var n = this.__data__,
        i = Lh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Nh = Ph,
    Vh = wh,
    Bh = Th,
    $h = Rh,
    Fh = Mh,
    jh = Nh;

function wr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
wr.prototype.clear = Vh;
wr.prototype.delete = Bh;
wr.prototype.get = $h;
wr.prototype.has = Fh;
wr.prototype.set = jh;
var co = wr,
    zh = co;

function Gh() {
    this.__data__ = new zh, this.size = 0
}
var Uh = Gh;

function Hh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var qh = Hh;

function Wh(t) {
    return this.__data__.get(t)
}
var Xh = Wh;

function Yh(t) {
    return this.__data__.has(t)
}
var Kh = Yh,
    Jh = typeof vt == "object" && vt && vt.Object === Object && vt,
    bc = Jh,
    Qh = bc,
    Zh = typeof self == "object" && self && self.Object === Object && self,
    ed = Qh || Zh || Function("return this")(),
    br = ed,
    td = br,
    nd = td.Symbol,
    Cc = nd,
    gl = Cc,
    xc = Object.prototype,
    id = xc.hasOwnProperty,
    rd = xc.toString,
    Xr = gl ? gl.toStringTag : void 0;

function sd(t) {
    var e = id.call(t, Xr),
        n = t[Xr];
    try {
        t[Xr] = void 0;
        var i = !0
    } catch {}
    var o = rd.call(t);
    return i && (e ? t[Xr] = n : delete t[Xr]), o
}
var od = sd,
    ad = Object.prototype,
    ld = ad.toString;

function cd(t) {
    return ld.call(t)
}
var ud = cd,
    ml = Cc,
    hd = od,
    dd = ud,
    fd = "[object Null]",
    pd = "[object Undefined]",
    vl = ml ? ml.toStringTag : void 0;

function gd(t) {
    return t == null ? t === void 0 ? pd : fd : vl && vl in Object(t) ? hd(t) : dd(t)
}
var uo = gd;

function md(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Vi = md,
    vd = uo,
    yd = Vi,
    wd = "[object AsyncFunction]",
    bd = "[object Function]",
    Cd = "[object GeneratorFunction]",
    xd = "[object Proxy]";

function Ed(t) {
    if (!yd(t)) return !1;
    var e = vd(t);
    return e == bd || e == Cd || e == wd || e == xd
}
var Va = Ed,
    _d = br,
    Sd = _d["__core-js_shared__"],
    kd = Sd,
    Qo = kd,
    yl = function() {
        var t = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Td(t) {
    return !!yl && yl in t
}
var Ad = Td,
    Od = Function.prototype,
    Rd = Od.toString;

function Id(t) {
    if (t != null) {
        try {
            return Rd.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Dd = Id,
    Md = Va,
    Ld = Ad,
    Pd = Vi,
    Nd = Dd,
    Vd = /[\\^$.*+?()[\]{}|]/g,
    Bd = /^\[object .+?Constructor\]$/,
    $d = Function.prototype,
    Fd = Object.prototype,
    jd = $d.toString,
    zd = Fd.hasOwnProperty,
    Gd = RegExp("^" + jd.call(zd).replace(Vd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Ud(t) {
    if (!Pd(t) || Ld(t)) return !1;
    var e = Md(t) ? Gd : Bd;
    return e.test(Nd(t))
}
var Hd = Ud;

function qd(t, e) {
    return t == null ? void 0 : t[e]
}
var Wd = qd,
    Xd = Hd,
    Yd = Wd;

function Kd(t, e) {
    var n = Yd(t, e);
    return Xd(n) ? n : void 0
}
var Ba = Kd,
    Jd = Ba,
    Qd = br,
    Zd = Jd(Qd, "Map"),
    Ec = Zd,
    ef = Ba,
    tf = ef(Object, "create"),
    ho = tf,
    wl = ho;

function nf() {
    this.__data__ = wl ? wl(null) : {}, this.size = 0
}
var rf = nf;

function sf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var of = sf, af = ho, lf = "__lodash_hash_undefined__", cf = Object.prototype, uf = cf.hasOwnProperty;

function hf(t) {
    var e = this.__data__;
    if (af) {
        var n = e[t];
        return n === lf ? void 0 : n
    }
    return uf.call(e, t) ? e[t] : void 0
}
var df = hf,
    ff = ho,
    pf = Object.prototype,
    gf = pf.hasOwnProperty;

function mf(t) {
    var e = this.__data__;
    return ff ? e[t] !== void 0 : gf.call(e, t)
}
var vf = mf,
    yf = ho,
    wf = "__lodash_hash_undefined__";

function bf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = yf && e === void 0 ? wf : e, this
}
var Cf = bf,
    xf = rf,
    Ef = of,
    _f = df,
    Sf = vf,
    kf = Cf;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = xf;
Cr.prototype.delete = Ef;
Cr.prototype.get = _f;
Cr.prototype.has = Sf;
Cr.prototype.set = kf;
var Tf = Cr,
    bl = Tf,
    Af = co,
    Of = Ec;

function Rf() {
    this.size = 0, this.__data__ = {
        hash: new bl,
        map: new(Of || Af),
        string: new bl
    }
}
var If = Rf;

function Df(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Mf = Df,
    Lf = Mf;

function Pf(t, e) {
    var n = t.__data__;
    return Lf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var fo = Pf,
    Nf = fo;

function Vf(t) {
    var e = Nf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Bf = Vf,
    $f = fo;

function Ff(t) {
    return $f(this, t).get(t)
}
var jf = Ff,
    zf = fo;

function Gf(t) {
    return zf(this, t).has(t)
}
var Uf = Gf,
    Hf = fo;

function qf(t, e) {
    var n = Hf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Wf = qf,
    Xf = If,
    Yf = Bf,
    Kf = jf,
    Jf = Uf,
    Qf = Wf;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = Xf;
xr.prototype.delete = Yf;
xr.prototype.get = Kf;
xr.prototype.has = Jf;
xr.prototype.set = Qf;
var Zf = xr,
    ep = co,
    tp = Ec,
    np = Zf,
    ip = 200;

function rp(t, e) {
    var n = this.__data__;
    if (n instanceof ep) {
        var i = n.__data__;
        if (!tp || i.length < ip - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new np(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var sp = rp,
    op = co,
    ap = Uh,
    lp = qh,
    cp = Xh,
    up = Kh,
    hp = sp;

function Er(t) {
    var e = this.__data__ = new op(t);
    this.size = e.size
}
Er.prototype.clear = ap;
Er.prototype.delete = lp;
Er.prototype.get = cp;
Er.prototype.has = up;
Er.prototype.set = hp;
var dp = Er,
    fp = Ba,
    pp = function() {
        try {
            var t = fp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    _c = pp,
    Cl = _c;

function gp(t, e, n) {
    e == "__proto__" && Cl ? Cl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var $a = gp,
    mp = $a,
    vp = ao;

function yp(t, e, n) {
    (n !== void 0 && !vp(t[e], n) || n === void 0 && !(e in t)) && mp(t, e, n)
}
var Sc = yp;

function wp(t) {
    return function(e, n, i) {
        for (var o = -1, f = Object(e), v = i(e), b = v.length; b--;) {
            var k = v[t ? b : ++o];
            if (n(f[k], k, f) === !1) break
        }
        return e
    }
}
var bp = wp,
    Cp = bp,
    xp = Cp(),
    Ep = xp,
    ba = {
        exports: {}
    };
(function(t, e) {
    var n = br,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        f = o && o.exports === i,
        v = f ? n.Buffer : void 0,
        b = v ? v.allocUnsafe : void 0;

    function k(A, D) {
        if (D) return A.slice();
        var V = A.length,
            Y = b ? b(V) : new A.constructor(V);
        return A.copy(Y), Y
    }
    t.exports = k
})(ba, ba.exports);
var _p = br,
    Sp = _p.Uint8Array,
    kp = Sp,
    xl = kp;

function Tp(t) {
    var e = new t.constructor(t.byteLength);
    return new xl(e).set(new xl(t)), e
}
var Ap = Tp,
    Op = Ap;

function Rp(t, e) {
    var n = e ? Op(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Ip = Rp;

function Dp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Mp = Dp,
    Lp = Vi,
    El = Object.create,
    Pp = function() {
        function t() {}
        return function(e) {
            if (!Lp(e)) return {};
            if (El) return El(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Np = Pp;

function Vp(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Bp = Vp,
    $p = Bp,
    Fp = $p(Object.getPrototypeOf, Object),
    kc = Fp,
    jp = Object.prototype;

function zp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || jp;
    return t === n
}
var Tc = zp,
    Gp = Np,
    Up = kc,
    Hp = Tc;

function qp(t) {
    return typeof t.constructor == "function" && !Hp(t) ? Gp(Up(t)) : {}
}
var Wp = qp;

function Xp(t) {
    return t != null && typeof t == "object"
}
var us = Xp,
    Yp = uo,
    Kp = us,
    Jp = "[object Arguments]";

function Qp(t) {
    return Kp(t) && Yp(t) == Jp
}
var Zp = Qp,
    _l = Zp,
    eg = us,
    Ac = Object.prototype,
    tg = Ac.hasOwnProperty,
    ng = Ac.propertyIsEnumerable,
    ig = _l(function() {
        return arguments
    }()) ? _l : function(t) {
        return eg(t) && tg.call(t, "callee") && !ng.call(t, "callee")
    },
    Oc = ig,
    rg = Array.isArray,
    Rc = rg,
    sg = 9007199254740991;

function og(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= sg
}
var Ic = og,
    ag = Va,
    lg = Ic;

function cg(t) {
    return t != null && lg(t.length) && !ag(t)
}
var Fa = cg,
    ug = Fa,
    hg = us;

function dg(t) {
    return hg(t) && ug(t)
}
var fg = dg,
    Ks = {
        exports: {}
    };

function pg() {
    return !1
}
var gg = pg;
(function(t, e) {
    var n = br,
        i = gg,
        o = e && !e.nodeType && e,
        f = o && !0 && t && !t.nodeType && t,
        v = f && f.exports === o,
        b = v ? n.Buffer : void 0,
        k = b ? b.isBuffer : void 0,
        A = k || i;
    t.exports = A
})(Ks, Ks.exports);
var mg = uo,
    vg = kc,
    yg = us,
    wg = "[object Object]",
    bg = Function.prototype,
    Cg = Object.prototype,
    Dc = bg.toString,
    xg = Cg.hasOwnProperty,
    Eg = Dc.call(Object);

function _g(t) {
    if (!yg(t) || mg(t) != wg) return !1;
    var e = vg(t);
    if (e === null) return !0;
    var n = xg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Dc.call(n) == Eg
}
var Sg = _g,
    kg = uo,
    Tg = Ic,
    Ag = us,
    Og = "[object Arguments]",
    Rg = "[object Array]",
    Ig = "[object Boolean]",
    Dg = "[object Date]",
    Mg = "[object Error]",
    Lg = "[object Function]",
    Pg = "[object Map]",
    Ng = "[object Number]",
    Vg = "[object Object]",
    Bg = "[object RegExp]",
    $g = "[object Set]",
    Fg = "[object String]",
    jg = "[object WeakMap]",
    zg = "[object ArrayBuffer]",
    Gg = "[object DataView]",
    Ug = "[object Float32Array]",
    Hg = "[object Float64Array]",
    qg = "[object Int8Array]",
    Wg = "[object Int16Array]",
    Xg = "[object Int32Array]",
    Yg = "[object Uint8Array]",
    Kg = "[object Uint8ClampedArray]",
    Jg = "[object Uint16Array]",
    Qg = "[object Uint32Array]",
    Mt = {};
Mt[Ug] = Mt[Hg] = Mt[qg] = Mt[Wg] = Mt[Xg] = Mt[Yg] = Mt[Kg] = Mt[Jg] = Mt[Qg] = !0;
Mt[Og] = Mt[Rg] = Mt[zg] = Mt[Ig] = Mt[Gg] = Mt[Dg] = Mt[Mg] = Mt[Lg] = Mt[Pg] = Mt[Ng] = Mt[Vg] = Mt[Bg] = Mt[$g] = Mt[Fg] = Mt[jg] = !1;

function Zg(t) {
    return Ag(t) && Tg(t.length) && !!Mt[kg(t)]
}
var em = Zg;

function tm(t) {
    return function(e) {
        return t(e)
    }
}
var nm = tm,
    Ca = {
        exports: {}
    };
(function(t, e) {
    var n = bc,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        f = o && o.exports === i,
        v = f && n.process,
        b = function() {
            try {
                var k = o && o.require && o.require("util").types;
                return k || v && v.binding && v.binding("util")
            } catch {}
        }();
    t.exports = b
})(Ca, Ca.exports);
var im = em,
    rm = nm,
    Sl = Ca.exports,
    kl = Sl && Sl.isTypedArray,
    sm = kl ? rm(kl) : im,
    Mc = sm;

function om(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Lc = om,
    am = $a,
    lm = ao,
    cm = Object.prototype,
    um = cm.hasOwnProperty;

function hm(t, e, n) {
    var i = t[e];
    (!(um.call(t, e) && lm(i, n)) || n === void 0 && !(e in t)) && am(t, e, n)
}
var dm = hm,
    fm = dm,
    pm = $a;

function gm(t, e, n, i) {
    var o = !n;
    n || (n = {});
    for (var f = -1, v = e.length; ++f < v;) {
        var b = e[f],
            k = i ? i(n[b], t[b], b, n, t) : void 0;
        k === void 0 && (k = t[b]), o ? pm(n, b, k) : fm(n, b, k)
    }
    return n
}
var mm = gm;

function vm(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var ym = vm,
    wm = 9007199254740991,
    bm = /^(?:0|[1-9]\d*)$/;

function Cm(t, e) {
    var n = typeof t;
    return e = e == null ? wm : e, !!e && (n == "number" || n != "symbol" && bm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Pc = Cm,
    xm = ym,
    Em = Oc,
    _m = Rc,
    Sm = Ks.exports,
    km = Pc,
    Tm = Mc,
    Am = Object.prototype,
    Om = Am.hasOwnProperty;

function Rm(t, e) {
    var n = _m(t),
        i = !n && Em(t),
        o = !n && !i && Sm(t),
        f = !n && !i && !o && Tm(t),
        v = n || i || o || f,
        b = v ? xm(t.length, String) : [],
        k = b.length;
    for (var A in t)(e || Om.call(t, A)) && !(v && (A == "length" || o && (A == "offset" || A == "parent") || f && (A == "buffer" || A == "byteLength" || A == "byteOffset") || km(A, k))) && b.push(A);
    return b
}
var Im = Rm;

function Dm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Mm = Dm,
    Lm = Vi,
    Pm = Tc,
    Nm = Mm,
    Vm = Object.prototype,
    Bm = Vm.hasOwnProperty;

function $m(t) {
    if (!Lm(t)) return Nm(t);
    var e = Pm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Bm.call(t, i)) || n.push(i);
    return n
}
var Fm = $m,
    jm = Im,
    zm = Fm,
    Gm = Fa;

function Um(t) {
    return Gm(t) ? jm(t, !0) : zm(t)
}
var Nc = Um,
    Hm = mm,
    qm = Nc;

function Wm(t) {
    return Hm(t, qm(t))
}
var Xm = Wm,
    Tl = Sc,
    Ym = ba.exports,
    Km = Ip,
    Jm = Mp,
    Qm = Wp,
    Al = Oc,
    Ol = Rc,
    Zm = fg,
    ev = Ks.exports,
    tv = Va,
    nv = Vi,
    iv = Sg,
    rv = Mc,
    Rl = Lc,
    sv = Xm;

function ov(t, e, n, i, o, f, v) {
    var b = Rl(t, n),
        k = Rl(e, n),
        A = v.get(k);
    if (A) {
        Tl(t, n, A);
        return
    }
    var D = f ? f(b, k, n + "", t, e, v) : void 0,
        V = D === void 0;
    if (V) {
        var Y = Ol(k),
            ie = !Y && ev(k),
            K = !Y && !ie && rv(k);
        D = k, Y || ie || K ? Ol(b) ? D = b : Zm(b) ? D = Jm(b) : ie ? (V = !1, D = Ym(k, !0)) : K ? (V = !1, D = Km(k, !0)) : D = [] : iv(k) || Al(k) ? (D = b, Al(b) ? D = sv(b) : (!nv(b) || tv(b)) && (D = Qm(k))) : V = !1
    }
    V && (v.set(k, D), o(D, k, i, f, v), v.delete(k)), Tl(t, n, D)
}
var av = ov,
    lv = dp,
    cv = Sc,
    uv = Ep,
    hv = av,
    dv = Vi,
    fv = Nc,
    pv = Lc;

function Vc(t, e, n, i, o) {
    t !== e && uv(e, function(f, v) {
        if (o || (o = new lv), dv(f)) hv(t, e, v, n, Vc, i, o);
        else {
            var b = i ? i(pv(t, v), f, v + "", t, e, o) : void 0;
            b === void 0 && (b = f), cv(t, v, b)
        }
    }, fv)
}
var gv = Vc;

function mv(t) {
    return t
}
var Bc = mv;

function vv(t, e, n) {
    switch (n.length) {
        case 0:
            return t.call(e);
        case 1:
            return t.call(e, n[0]);
        case 2:
            return t.call(e, n[0], n[1]);
        case 3:
            return t.call(e, n[0], n[1], n[2])
    }
    return t.apply(e, n)
}
var yv = vv,
    wv = yv,
    Il = Math.max;

function bv(t, e, n) {
    return e = Il(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, o = -1, f = Il(i.length - e, 0), v = Array(f); ++o < f;) v[o] = i[e + o];
            o = -1;
            for (var b = Array(e + 1); ++o < e;) b[o] = i[o];
            return b[e] = n(v), wv(t, this, b)
        }
}
var Cv = bv;

function xv(t) {
    return function() {
        return t
    }
}
var Ev = xv,
    _v = Ev,
    Dl = _c,
    Sv = Bc,
    kv = Dl ? function(t, e) {
        return Dl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: _v(e),
            writable: !0
        })
    } : Sv,
    Tv = kv,
    Av = 800,
    Ov = 16,
    Rv = Date.now;

function Iv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Rv(),
            o = Ov - (i - n);
        if (n = i, o > 0) {
            if (++e >= Av) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Dv = Iv,
    Mv = Tv,
    Lv = Dv,
    Pv = Lv(Mv),
    Nv = Pv,
    Vv = Bc,
    Bv = Cv,
    $v = Nv;

function Fv(t, e) {
    return $v(Bv(t, e, Vv), t + "")
}
var jv = Fv,
    zv = ao,
    Gv = Fa,
    Uv = Pc,
    Hv = Vi;

function qv(t, e, n) {
    if (!Hv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Gv(n) && Uv(e, n.length) : i == "string" && e in n) ? zv(n[e], t) : !1
}
var Wv = qv,
    Xv = jv,
    Yv = Wv;

function Kv(t) {
    return Xv(function(e, n) {
        var i = -1,
            o = n.length,
            f = o > 1 ? n[o - 1] : void 0,
            v = o > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (o--, f) : void 0, v && Yv(n[0], n[1], v) && (f = o < 3 ? void 0 : f, o = 1), e = Object(e); ++i < o;) {
            var b = n[i];
            b && t(e, b, i, f)
        }
        return e
    })
}
var Jv = Kv,
    Qv = gv,
    Zv = Jv,
    ey = Zv(function(t, e, n) {
        Qv(t, e, n)
    }),
    ty = ey;
class xa {
    static set(e) {
        if (e && this.isSupported(e)) {
            this.locale = e;
            return
        }
        this.locale = this.getPreferredDeviceLocale()
    }
    static getPreferredDeviceLocale() {
        const e = navigator.languages;
        for (let n = 0; n < e.length; n++)
            if (this.isSupported(e[n])) return e[n];
        return this.supported[0]
    }
    static isSupported(e) {
        return Object.values(this.supported).includes(e)
    }
    static mergeMessages(...e) {
        return ty(e[0], ...e)
    }
}
st(xa, "locale"), st(xa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const fl = class {
    static get serverUrl() {
        var n;
        const e = (n = this.getQueryParam("server")) != null ? n : this.getQueryParam("s");
        return !e || e === "live" ? "ecast.jackboxgames.com" : e === "local" ? "https://localhost" : e.includes("localhost") ? e : `${e}.jackboxgames.com`
    }
    static get isCanvasSupported() {
        const e = document.createElement("canvas");
        return !!(e.getContext && e.getContext("2d"))
    }
    static toPrecision(e, n) {
        const i = 10 ** n;
        return Math.round((e + Number.EPSILON) * i) / i
    }
    static htmlUnescape(e) {
        return String(e).replace(/&quot;/gi, '"').replace(/&#39;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&")
    }
    static htmlEscape(e) {
        return String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }
    static sanitize(e) {
        const n = this.sanitizeInput(e).replace(/'/g, "\u2019");
        return this.htmlEscape(n).trim()
    }
    static sanitizeName(e) {
        return e.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF\u2026!?*$+\-'_ .,]/gi, "").replace(/'/g, "\u2019")
    }
    static sanitizeInput(e) {
        return e.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF’]/gi, "")
    }
    static sanitizeEmoji(e) {
        return e.replace(/(\u00a9|\u00ae|[\u2000-\u2017]|[\u2020-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/, "")
    }
    static safeText(e) {
        const n = document.createElement("div");
        return n.textContent = e, n.innerHTML
    }
    static htmlTagsToBBCode(e, n) {
        if (!n.length) throw new Error("[Utils.htmlTagsToBBCode] No tag pairs were passed in");
        return n.reduce((i, o) => (i.replaceAll(`<${o[0]}>`, `[${o[1]}]`), i.replaceAll(`</${o[0]}>`, `</${o[1]}>`), i), e)
    }
    static hexToRgb(e) {
        const n = new ArrayBuffer(4);
        new DataView(n).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const o = new Uint8Array(n);
        return `${o[1]},${o[2]},${o[3]}`
    }
    static adjustColor(e, n) {
        let i = !1,
            o = e;
        o[0] === "#" && (o = o.slice(1), i = !0);
        const f = parseInt(o, 16),
            v = Math.min(Math.max(0, (f >> 16) * n), 255),
            b = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let A = (Math.min(Math.max(0, (f & 255) * n), 255) | b << 8 | v << 16).toString(16);
        for (; A.length < o.length;) A = `0${A}`;
        return (i ? "#" : "") + A
    }
    static isInTolerance(e, n, i) {
        return !(Math.abs(e.x - n.x) < i || Math.abs(e.y - n.y) > i)
    }
    static getDistanceBetweenPoints(e, n) {
        const i = [e.x - n.x, e.y - n.y],
            o = Math.hypot(...i);
        return Math.round(o * 100) / 100
    }
    static getMidpoint(e, n) {
        return {
            x: (e.x + n.x) / 2,
            y: (e.y + n.y) / 2
        }
    }
    static getAngleBetweenPoints(e, n) {
        let o = Math.atan2(n.y - e.y, n.x - e.x) * (180 / Math.PI);
        return o < 0 && (o += 360), 360 - o
    }
    static getAngularDistance(e, n) {
        let i = (n - e) % 360;
        const o = i < 0 ? 1 : -1;
        return i = Math.abs(i), i > 180 ? o * (360 - i) : o * i
    }
    static getVelocity(e, n, i, o) {
        return this.getDistanceBetweenPoints(e, i) / (o - n)
    }
    static isInsideElement(e, n) {
        const i = n.getBoundingClientRect();
        return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
    }
};
let nn = fl;
st(nn, "queryParams", new URLSearchParams(window.location.search)), st(nn, "getQueryParam", e => fl.queryParams.get(e)), st(nn, "sleep", e => new Promise(n => {
    window.setTimeout(n, e)
}));
class Zt {
    static get namespace() {
        var e, n;
        return (n = (e = window.tv.storage) == null ? void 0 : e.namespace) != null ? n : this.defaultNamespace
    }
    static get isDisabled() {
        var e, n;
        return (n = (e = window.tv.storage) == null ? void 0 : e.isDisabled) != null ? n : !1
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
    static setup(e, n) {
        var i, o;
        delete window.tv.storage, window.tv.storage = {
            namespace: (o = (i = nn.getQueryParam("namespace")) != null ? i : nn.getQueryParam("ns")) != null ? o : this.defaultNamespace,
            isDisabled: nn.queryParams.has("incognito") || nn.queryParams.has("nc")
        }, e && (window.tv.storage.tag = e), n && (window.tv.storage.code = n.toLowerCase(), this.clearCodeScopedKeys(window.tv.storage.code)), this.migrateNamespace("blobcast", this.defaultNamespace)
    }
    static get(e, n) {
        return this.isSupported ? window.localStorage.getItem(this.getScopedKey(e, n)) : null
    }
    static set(e, n, i = "none") {
        if (!!this.isSupported) return window.localStorage.setItem(this.getScopedSetKey(e, i), n)
    }
    static remove(e, n) {
        if (!!this.isSupported) return window.localStorage.removeItem(this.getScopedKey(e, n))
    }
    static setTag(e) {
        var v;
        const n = e.toLowerCase(),
            i = (v = this.get("tags")) != null ? v : "[]",
            o = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(b => {
            const k = b.split("-")[0];
            return o !== k
        }), f.push(n), this.set("tags", JSON.stringify(f))
    }
    static getScopedKey(e, n) {
        const i = `${this.namespace}:${e}`,
            o = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            f = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (n === "none") return i;
        if (n === "tag") {
            if (!o) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return o
        }
        if (n === "code") {
            if (!f) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return f
        }
        return f && window.localStorage.getItem(f) !== null ? f : o && window.localStorage.getItem(o) !== null ? o : i
    }
    static getScopedSetKey(e, n = "none") {
        if (n === "tag") {
            if (!this.tag) throw new Error('[Storage] requested "room" scope but tv.storage.tag is undefined');
            return `${this.namespace}:${e}:tag:${this.tag}`
        }
        if (n === "code") {
            if (!this.code) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return `${this.namespace}:${e}:code:${this.code}`
        }
        return `${this.namespace}:${e}`
    }
    static clearCodeScopedKeys(e) {
        !this.isSupported || Object.keys(window.localStorage).forEach(n => {
            const i = n.split(":code:");
            i.length <= 1 || i[1] !== e && window.localStorage.removeItem(n)
        })
    }
    static migrateNamespace(e, n) {
        !this.isSupported || Object.keys(window.localStorage).forEach(i => {
            if (!i.startsWith(`${e}-`)) return;
            const o = i.replace(`${e}-`, `${n}:`),
                f = window.localStorage.getItem(i);
            !f || (window.localStorage.setItem(o, f), window.localStorage.removeItem(i))
        })
    }
}
st(Zt, "defaultNamespace", "tv");
class Ni {
    constructor() {
        st(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Ni.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!Zt.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            o = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${o}/artifact/${e.categoryId}/${e.artifactId}/`,
            v = Zt.get("galleries") || "[]";
        try {
            const b = JSON.parse(v) || [];
            if (b.some(k => k.url === f)) return;
            b.unshift({
                url: f,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), Zt.set("galleries", JSON.stringify(b.slice(0, 40)))
        } catch {
            console.warn("[Artifacts] Unable to add artifact to local storage")
        }
    }
    remove(e) {
        if (!Zt.isSupported) return;
        const n = Zt.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.splice(e, 1), Zt.set("galleries", JSON.stringify(i)), this.artifacts = this.list()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    setAsViewed(e) {
        Ni.setAsViewed(e), this.artifacts = this.list()
    }
    static setAsViewed(e) {
        if (!Zt.isSupported) return;
        const n = Zt.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.length && (i[e].viewed = !0), Zt.set("galleries", JSON.stringify(i))
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    static isTestArtifact(e) {
        var n;
        return ((n = e == null ? void 0 : e.rootId) == null ? void 0 : n.indexOf("test")) !== -1
    }
    list() {
        if (!Zt.isSupported) return [];
        const e = new Intl.DateTimeFormat(xa.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = Zt.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const v = new Date(f.time),
                    b = e.format(v),
                    k = f.url.split("/"),
                    A = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let D = f.categoryId;
                return D || (f.url.indexOf("Quiplash2") !== -1 ? D = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? D = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? D = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (D = "TriviaDeathResults")), {
                    id: A,
                    gameName: D,
                    date: b,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Ea = {
    exports: {}
};
(function(t, e) {
    var n = typeof self < "u" ? self : vt,
        i = function() {
            function f() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return f.prototype = n, new f
        }();
    (function(f) {
        (function(v) {
            var b = {
                searchParams: "URLSearchParams" in f,
                iterable: "Symbol" in f && "iterator" in Symbol,
                blob: "FileReader" in f && "Blob" in f && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in f,
                arrayBuffer: "ArrayBuffer" in f
            };

            function k(U) {
                return U && DataView.prototype.isPrototypeOf(U)
            }
            if (b.arrayBuffer) var A = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(U) {
                    return U && A.indexOf(Object.prototype.toString.call(U)) > -1
                };

            function V(U) {
                if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                return U.toLowerCase()
            }

            function Y(U) {
                return typeof U != "string" && (U = String(U)), U
            }

            function ie(U) {
                var oe = {
                    next: function() {
                        var Ae = U.shift();
                        return {
                            done: Ae === void 0,
                            value: Ae
                        }
                    }
                };
                return b.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function K(U) {
                this.map = {}, U instanceof K ? U.forEach(function(oe, Ae) {
                    this.append(Ae, oe)
                }, this) : Array.isArray(U) ? U.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : U && Object.getOwnPropertyNames(U).forEach(function(oe) {
                    this.append(oe, U[oe])
                }, this)
            }
            K.prototype.append = function(U, oe) {
                U = V(U), oe = Y(oe);
                var Ae = this.map[U];
                this.map[U] = Ae ? Ae + ", " + oe : oe
            }, K.prototype.delete = function(U) {
                delete this.map[V(U)]
            }, K.prototype.get = function(U) {
                return U = V(U), this.has(U) ? this.map[U] : null
            }, K.prototype.has = function(U) {
                return this.map.hasOwnProperty(V(U))
            }, K.prototype.set = function(U, oe) {
                this.map[V(U)] = Y(oe)
            }, K.prototype.forEach = function(U, oe) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && U.call(oe, this.map[Ae], Ae, this)
            }, K.prototype.keys = function() {
                var U = [];
                return this.forEach(function(oe, Ae) {
                    U.push(Ae)
                }), ie(U)
            }, K.prototype.values = function() {
                var U = [];
                return this.forEach(function(oe) {
                    U.push(oe)
                }), ie(U)
            }, K.prototype.entries = function() {
                var U = [];
                return this.forEach(function(oe, Ae) {
                    U.push([Ae, oe])
                }), ie(U)
            }, b.iterable && (K.prototype[Symbol.iterator] = K.prototype.entries);

            function re(U) {
                if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                U.bodyUsed = !0
            }

            function m(U) {
                return new Promise(function(oe, Ae) {
                    U.onload = function() {
                        oe(U.result)
                    }, U.onerror = function() {
                        Ae(U.error)
                    }
                })
            }

            function P(U) {
                var oe = new FileReader,
                    Ae = m(oe);
                return oe.readAsArrayBuffer(U), Ae
            }

            function q(U) {
                var oe = new FileReader,
                    Ae = m(oe);
                return oe.readAsText(U), Ae
            }

            function le(U) {
                for (var oe = new Uint8Array(U), Ae = new Array(oe.length), be = 0; be < oe.length; be++) Ae[be] = String.fromCharCode(oe[be]);
                return Ae.join("")
            }

            function se(U) {
                if (U.slice) return U.slice(0);
                var oe = new Uint8Array(U.byteLength);
                return oe.set(new Uint8Array(U)), oe.buffer
            }

            function ye() {
                return this.bodyUsed = !1, this._initBody = function(U) {
                    this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : b.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : b.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : b.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : b.arrayBuffer && b.blob && k(U) ? (this._bodyArrayBuffer = se(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : b.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || D(U)) ? this._bodyArrayBuffer = se(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : b.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, b.blob && (this.blob = function() {
                    var U = re(this);
                    if (U) return U;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? re(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(P)
                }), this.text = function() {
                    var U = re(this);
                    if (U) return U;
                    if (this._bodyBlob) return q(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(le(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, b.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function _e(U) {
                var oe = U.toUpperCase();
                return d.indexOf(oe) > -1 ? oe : U
            }

            function Oe(U, oe) {
                oe = oe || {};
                var Ae = oe.body;
                if (U instanceof Oe) {
                    if (U.bodyUsed) throw new TypeError("Already read");
                    this.url = U.url, this.credentials = U.credentials, oe.headers || (this.headers = new K(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !Ae && U._bodyInit != null && (Ae = U._bodyInit, U.bodyUsed = !0)
                } else this.url = String(U);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new K(oe.headers)), this.method = _e(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Ae)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(U) {
                var oe = new FormData;
                return U.trim().split("&").forEach(function(Ae) {
                    if (Ae) {
                        var be = Ae.split("="),
                            we = be.shift().replace(/\+/g, " "),
                            he = be.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(we), decodeURIComponent(he))
                    }
                }), oe
            }

            function lt(U) {
                var oe = new K,
                    Ae = U.replace(/\r?\n[\t ]+/g, " ");
                return Ae.split(/\r?\n/).forEach(function(be) {
                    var we = be.split(":"),
                        he = we.shift().trim();
                    if (he) {
                        var Se = we.join(":").trim();
                        oe.append(he, Se)
                    }
                }), oe
            }
            ye.call(Oe.prototype);

            function Be(U, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new K(oe.headers), this.url = oe.url || "", this._initBody(U)
            }
            ye.call(Be.prototype), Be.prototype.clone = function() {
                return new Be(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new K(this.headers),
                    url: this.url
                })
            }, Be.error = function() {
                var U = new Be(null, {
                    status: 0,
                    statusText: ""
                });
                return U.type = "error", U
            };
            var J = [301, 302, 303, 307, 308];
            Be.redirect = function(U, oe) {
                if (J.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
                    status: oe,
                    headers: {
                        location: U
                    }
                })
            }, v.DOMException = f.DOMException;
            try {
                new v.DOMException
            } catch {
                v.DOMException = function(oe, Ae) {
                    this.message = oe, this.name = Ae;
                    var be = Error(oe);
                    this.stack = be.stack
                }, v.DOMException.prototype = Object.create(Error.prototype), v.DOMException.prototype.constructor = v.DOMException
            }

            function je(U, oe) {
                return new Promise(function(Ae, be) {
                    var we = new Oe(U, oe);
                    if (we.signal && we.signal.aborted) return be(new v.DOMException("Aborted", "AbortError"));
                    var he = new XMLHttpRequest;

                    function Se() {
                        he.abort()
                    }
                    he.onload = function() {
                        var Te = {
                            status: he.status,
                            statusText: he.statusText,
                            headers: lt(he.getAllResponseHeaders() || "")
                        };
                        Te.url = "responseURL" in he ? he.responseURL : Te.headers.get("X-Request-URL");
                        var $e = "response" in he ? he.response : he.responseText;
                        Ae(new Be($e, Te))
                    }, he.onerror = function() {
                        be(new TypeError("Network request failed"))
                    }, he.ontimeout = function() {
                        be(new TypeError("Network request failed"))
                    }, he.onabort = function() {
                        be(new v.DOMException("Aborted", "AbortError"))
                    }, he.open(we.method, we.url, !0), we.credentials === "include" ? he.withCredentials = !0 : we.credentials === "omit" && (he.withCredentials = !1), "responseType" in he && b.blob && (he.responseType = "blob"), we.headers.forEach(function(Te, $e) {
                        he.setRequestHeader($e, Te)
                    }), we.signal && (we.signal.addEventListener("abort", Se), he.onreadystatechange = function() {
                        he.readyState === 4 && we.signal.removeEventListener("abort", Se)
                    }), he.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                })
            }
            return je.polyfill = !0, f.fetch || (f.fetch = je, f.Headers = K, f.Request = Oe, f.Response = Be), v.Headers = K, v.Request = Oe, v.Response = Be, v.fetch = je, Object.defineProperty(v, "__esModule", {
                value: !0
            }), v
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var o = i;
    e = o.fetch, e.default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, t.exports = e
})(Ea, Ea.exports);
var ny = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            n = Symbol("test"),
            i = Object(n);
        if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]") return !1;
        var o = 42;
        e[n] = o;
        for (n in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var f = Object.getOwnPropertySymbols(e);
        if (f.length !== 1 || f[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var v = Object.getOwnPropertyDescriptor(e, n);
            if (v.value !== o || v.enumerable !== !0) return !1
        }
        return !0
    },
    Ml = typeof Symbol < "u" && Symbol,
    iy = ny,
    ry = function() {
        return typeof Ml != "function" || typeof Symbol != "function" || typeof Ml("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : iy()
    },
    sy = "Function.prototype.bind called on incompatible ",
    Zo = Array.prototype.slice,
    oy = Object.prototype.toString,
    ay = "[object Function]",
    ly = function(e) {
        var n = this;
        if (typeof n != "function" || oy.call(n) !== ay) throw new TypeError(sy + n);
        for (var i = Zo.call(arguments, 1), o, f = function() {
                if (this instanceof o) {
                    var D = n.apply(this, i.concat(Zo.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(Zo.call(arguments)))
            }, v = Math.max(0, n.length - i.length), b = [], k = 0; k < v; k++) b.push("$" + k);
        if (o = Function("binder", "return function (" + b.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var A = function() {};
            A.prototype = n.prototype, o.prototype = new A, A.prototype = null
        }
        return o
    },
    cy = ly,
    ja = Function.prototype.bind || cy,
    uy = ja,
    hy = uy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, gr = SyntaxError,
    $c = Function,
    ur = TypeError,
    ea = function(t) {
        try {
            return $c('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Li = Object.getOwnPropertyDescriptor;
if (Li) try {
    Li({}, "")
} catch {
    Li = null
}
var ta = function() {
        throw new ur
    },
    dy = Li ? function() {
        try {
            return arguments.callee, ta
        } catch {
            try {
                return Li(arguments, "callee").get
            } catch {
                return ta
            }
        }
    }() : ta,
    ir = ry(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    or = {},
    fy = typeof Uint8Array > "u" ? mt : ai(Uint8Array),
    hr = {
        "%AggregateError%": typeof AggregateError > "u" ? mt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? mt : ArrayBuffer,
        "%ArrayIteratorPrototype%": ir ? ai([][Symbol.iterator]()) : mt,
        "%AsyncFromSyncIteratorPrototype%": mt,
        "%AsyncFunction%": or,
        "%AsyncGenerator%": or,
        "%AsyncGeneratorFunction%": or,
        "%AsyncIteratorPrototype%": or,
        "%Atomics%": typeof Atomics > "u" ? mt : Atomics,
        "%BigInt%": typeof BigInt > "u" ? mt : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? mt : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? mt : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? mt : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? mt : FinalizationRegistry,
        "%Function%": $c,
        "%GeneratorFunction%": or,
        "%Int8Array%": typeof Int8Array > "u" ? mt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? mt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? mt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": ir ? ai(ai([][Symbol.iterator]())) : mt,
        "%JSON%": typeof JSON == "object" ? JSON : mt,
        "%Map%": typeof Map > "u" ? mt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !ir ? mt : ai(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? mt : Promise,
        "%Proxy%": typeof Proxy > "u" ? mt : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? mt : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? mt : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !ir ? mt : ai(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? mt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": ir ? ai("" [Symbol.iterator]()) : mt,
        "%Symbol%": ir ? Symbol : mt,
        "%SyntaxError%": gr,
        "%ThrowTypeError%": dy,
        "%TypedArray%": fy,
        "%TypeError%": ur,
        "%Uint8Array%": typeof Uint8Array > "u" ? mt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? mt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? mt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? mt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? mt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? mt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? mt : WeakSet
    },
    py = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = ea("async function () {}");
        else if (e === "%GeneratorFunction%") n = ea("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = ea("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var o = t("%AsyncGenerator%");
            o && (n = ai(o.prototype))
        }
        return hr[e] = n, n
    },
    Ll = {
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
    hs = ja,
    Js = hy,
    gy = hs.call(Function.call, Array.prototype.concat),
    my = hs.call(Function.apply, Array.prototype.splice),
    Pl = hs.call(Function.call, String.prototype.replace),
    Qs = hs.call(Function.call, String.prototype.slice),
    vy = hs.call(Function.call, RegExp.prototype.exec),
    yy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    wy = /\\(\\)?/g,
    by = function(e) {
        var n = Qs(e, 0, 1),
            i = Qs(e, -1);
        if (n === "%" && i !== "%") throw new gr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new gr("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return Pl(e, yy, function(f, v, b, k) {
            o[o.length] = b ? Pl(k, wy, "$1") : v || f
        }), o
    },
    Cy = function(e, n) {
        var i = e,
            o;
        if (Js(Ll, i) && (o = Ll[i], i = "%" + o[0] + "%"), Js(hr, i)) {
            var f = hr[i];
            if (f === or && (f = py(i)), typeof f > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: o,
                name: i,
                value: f
            }
        }
        throw new gr("intrinsic " + e + " does not exist!")
    },
    za = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new ur("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new ur('"allowMissing" argument must be a boolean');
        if (vy(/^%?[^%]*%?$/g, e) === null) throw new gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = by(e),
            o = i.length > 0 ? i[0] : "",
            f = Cy("%" + o + "%", n),
            v = f.name,
            b = f.value,
            k = !1,
            A = f.alias;
        A && (o = A[0], my(i, gy([0, 1], A)));
        for (var D = 1, V = !0; D < i.length; D += 1) {
            var Y = i[D],
                ie = Qs(Y, 0, 1),
                K = Qs(Y, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || K === '"' || K === "'" || K === "`") && ie !== K) throw new gr("property names with quotes must have matching quotes");
            if ((Y === "constructor" || !V) && (k = !0), o += "." + Y, v = "%" + o + "%", Js(hr, v)) b = hr[v];
            else if (b != null) {
                if (!(Y in b)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Li && D + 1 >= i.length) {
                    var re = Li(b, Y);
                    V = !!re, V && "get" in re && !("originalValue" in re.get) ? b = re.get : b = b[Y]
                } else V = Js(b, Y), b = b[Y];
                V && !k && (hr[v] = b)
            }
        }
        return b
    },
    Fc = {
        exports: {}
    };
(function(t) {
    var e = ja,
        n = za,
        i = n("%Function.prototype.apply%"),
        o = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(o, i),
        v = n("%Object.getOwnPropertyDescriptor%", !0),
        b = n("%Object.defineProperty%", !0),
        k = n("%Math.max%");
    if (b) try {
        b({}, "a", {
            value: 1
        })
    } catch {
        b = null
    }
    t.exports = function(V) {
        var Y = f(e, o, arguments);
        if (v && b) {
            var ie = v(Y, "length");
            ie.configurable && b(Y, "length", {
                value: 1 + k(0, V.length - (arguments.length - 1))
            })
        }
        return Y
    };
    var A = function() {
        return f(e, i, arguments)
    };
    b ? b(t.exports, "apply", {
        value: A
    }) : t.exports.apply = A
})(Fc);
var jc = za,
    zc = Fc.exports,
    xy = zc(jc("String.prototype.indexOf")),
    Ey = function(e, n) {
        var i = jc(e, !!n);
        return typeof i == "function" && xy(e, ".prototype.") > -1 ? zc(i) : i
    };
const _y = {},
    Sy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: _y
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ky = gh(Sy);
var Ga = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = Ga && na && typeof na.get == "function" ? na.get : null,
    Ty = Ga && Map.prototype.forEach,
    Ua = typeof Set == "function" && Set.prototype,
    ia = Object.getOwnPropertyDescriptor && Ua ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Ua && ia && typeof ia.get == "function" ? ia.get : null,
    Ay = Ua && Set.prototype.forEach,
    Oy = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Oy ? WeakMap.prototype.has : null,
    Ry = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Ry ? WeakSet.prototype.has : null,
    Iy = typeof WeakRef == "function" && WeakRef.prototype,
    Nl = Iy ? WeakRef.prototype.deref : null,
    Dy = Boolean.prototype.valueOf,
    My = Object.prototype.toString,
    Ly = Function.prototype.toString,
    Py = String.prototype.match,
    Ha = String.prototype.slice,
    hi = String.prototype.replace,
    Ny = String.prototype.toUpperCase,
    Vl = String.prototype.toLowerCase,
    Gc = RegExp.prototype.test,
    Bl = Array.prototype.concat,
    Fn = Array.prototype.join,
    Vy = Array.prototype.slice,
    $l = Math.floor,
    _a = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Uc = Object.prototype.propertyIsEnumerable,
    Fl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function jl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Gc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -$l(-t) : $l(t);
        if (i !== t) {
            var o = String(i),
                f = Ha.call(e, o.length + 1);
            return hi.call(o, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var ka = ky,
    zl = ka.custom,
    Gl = qc(zl) ? zl : null,
    By = function t(e, n, i, o) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var v = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof v != "boolean" && v !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var b = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Xc(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return b ? jl(e, k) : k
        }
        if (typeof e == "bigint") {
            var A = String(e) + "n";
            return b ? jl(e, A) : A
        }
        var D = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Ta(e) ? "[Array]" : "[Object]";
        var V = nw(f, i);
        if (typeof o > "u") o = [];
        else if (Wc(o, e) >= 0) return "[Circular]";

        function Y(je, U, oe) {
            if (U && (o = Vy.call(o), o.push(U)), oe) {
                var Ae = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (Ae.quoteStyle = f.quoteStyle), t(je, Ae, i + 1, o)
            }
            return t(je, f, i + 1, o)
        }
        if (typeof e == "function" && !Ul(e)) {
            var ie = Wy(e),
                K = Ls(e, Y);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (K.length > 0 ? " { " + Fn.call(K, ", ") + " }" : "")
        }
        if (qc(e)) {
            var re = mr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Sa.call(e);
            return typeof e == "object" && !mr ? Yr(re) : re
        }
        if (Zy(e)) {
            for (var m = "<" + Vl.call(String(e.nodeName)), P = e.attributes || [], q = 0; q < P.length; q++) m += " " + P[q].name + "=" + Hc($y(P[q].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Vl.call(String(e.nodeName)) + ">", m
        }
        if (Ta(e)) {
            if (e.length === 0) return "[]";
            var le = Ls(e, Y);
            return V && !tw(le) ? "[" + Aa(le, V) + "]" : "[ " + Fn.call(le, ", ") + " ]"
        }
        if (jy(e)) {
            var se = Ls(e, Y);
            return !("cause" in Error.prototype) && "cause" in e && !Uc.call(e, "cause") ? "{ [" + String(e) + "] " + Fn.call(Bl.call("[cause]: " + Y(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Fn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && v) {
            if (Gl && typeof e[Gl] == "function" && ka) return ka(e, {
                depth: D - i
            });
            if (v !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Xy(e)) {
            var ye = [];
            return Ty.call(e, function(je, U) {
                ye.push(Y(U, e, !0) + " => " + Y(je, e))
            }), Hl("Map", Zs.call(e), ye, V)
        }
        if (Jy(e)) {
            var d = [];
            return Ay.call(e, function(je) {
                d.push(Y(je, e))
            }), Hl("Set", eo.call(e), d, V)
        }
        if (Yy(e)) return sa("WeakMap");
        if (Qy(e)) return sa("WeakSet");
        if (Ky(e)) return sa("WeakRef");
        if (Gy(e)) return Yr(Y(Number(e)));
        if (Hy(e)) return Yr(Y(_a.call(e)));
        if (Uy(e)) return Yr(Dy.call(e));
        if (zy(e)) return Yr(Y(String(e)));
        if (!Fy(e) && !Ul(e)) {
            var _e = Ls(e, Y),
                Oe = Fl ? Fl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Ha.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Be = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                J = Be + (lt || Pe ? "[" + Fn.call(Bl.call([], lt || [], Pe || []), ": ") + "] " : "");
            return _e.length === 0 ? J + "{}" : V ? J + "{" + Aa(_e, V) + "}" : J + "{ " + Fn.call(_e, ", ") + " }"
        }
        return String(e)
    };

function Hc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function $y(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Ta(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function Fy(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Ul(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function jy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function zy(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gy(t) {
    return pi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Uy(t) {
    return pi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function qc(t) {
    if (mr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Sa) return !1;
    try {
        return Sa.call(t), !0
    } catch {}
    return !1
}

function Hy(t) {
    if (!t || typeof t != "object" || !_a) return !1;
    try {
        return _a.call(t), !0
    } catch {}
    return !1
}
var qy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return qy.call(t, e)
}

function pi(t) {
    return My.call(t)
}

function Wy(t) {
    if (t.name) return t.name;
    var e = Py.call(Ly.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Wc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function Xy(t) {
    if (!Zs || !t || typeof t != "object") return !1;
    try {
        Zs.call(t);
        try {
            eo.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function Yy(t) {
    if (!ts || !t || typeof t != "object") return !1;
    try {
        ts.call(t, ts);
        try {
            ns.call(t, ns)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function Ky(t) {
    if (!Nl || !t || typeof t != "object") return !1;
    try {
        return Nl.call(t), !0
    } catch {}
    return !1
}

function Jy(t) {
    if (!eo || !t || typeof t != "object") return !1;
    try {
        eo.call(t);
        try {
            Zs.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function Qy(t) {
    if (!ns || !t || typeof t != "object") return !1;
    try {
        ns.call(t, ns);
        try {
            ts.call(t, ts)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function Zy(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Xc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Xc(Ha.call(t, 0, e.maxStringLength), e) + i
    }
    var o = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ew);
    return Hc(o, "single", e)
}

function ew(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Ny.call(e.toString(16))
}

function Yr(t) {
    return "Object(" + t + ")"
}

function sa(t) {
    return t + " { ? }"
}

function Hl(t, e, n, i) {
    var o = i ? Aa(n, i) : Fn.call(n, ", ");
    return t + " (" + e + ") {" + o + "}"
}

function tw(t) {
    for (var e = 0; e < t.length; e++)
        if (Wc(t[e], `
`) >= 0) return !1;
    return !0
}

function nw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = Fn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: Fn.call(Array(e + 1), n)
    }
}

function Aa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + Fn.call(t, "," + n) + `
` + e.prev
}

function Ls(t, e) {
    var n = Ta(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var o = 0; o < t.length; o++) i[o] = li(t, o) ? e(t[o], t) : ""
    }
    var f = typeof ra == "function" ? ra(t) : [],
        v;
    if (mr) {
        v = {};
        for (var b = 0; b < f.length; b++) v["$" + f[b]] = f[b]
    }
    for (var k in t) !li(t, k) || n && String(Number(k)) === k && k < t.length || mr && v["$" + k] instanceof Symbol || (Gc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ra == "function")
        for (var A = 0; A < f.length; A++) Uc.call(t, f[A]) && i.push("[" + e(f[A]) + "]: " + e(t[f[A]], t));
    return i
}
var qa = za,
    _r = Ey,
    iw = By,
    rw = qa("%TypeError%"),
    Ps = qa("%WeakMap%", !0),
    Ns = qa("%Map%", !0),
    sw = _r("WeakMap.prototype.get", !0),
    ow = _r("WeakMap.prototype.set", !0),
    aw = _r("WeakMap.prototype.has", !0),
    lw = _r("Map.prototype.get", !0),
    cw = _r("Map.prototype.set", !0),
    uw = _r("Map.prototype.has", !0),
    Wa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    hw = function(t, e) {
        var n = Wa(t, e);
        return n && n.value
    },
    dw = function(t, e, n) {
        var i = Wa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    fw = function(t, e) {
        return !!Wa(t, e)
    },
    pw = function() {
        var e, n, i, o = {
            assert: function(f) {
                if (!o.has(f)) throw new rw("Side channel does not contain " + iw(f))
            },
            get: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return sw(e, f)
                } else if (Ns) {
                    if (n) return lw(n, f)
                } else if (i) return hw(i, f)
            },
            has: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return aw(e, f)
                } else if (Ns) {
                    if (n) return uw(n, f)
                } else if (i) return fw(i, f);
                return !1
            },
            set: function(f, v) {
                Ps && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ps), ow(e, f, v)) : Ns ? (n || (n = new Ns), cw(n, f, v)) : (i || (i = {
                    key: {},
                    next: null
                }), dw(i, f, v))
            }
        };
        return o
    },
    gw = String.prototype.replace,
    mw = /%20/g,
    oa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Xa = {
        default: oa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return gw.call(t, mw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: oa.RFC1738,
        RFC3986: oa.RFC3986
    },
    vw = Xa,
    aa = Object.prototype.hasOwnProperty,
    Di = Array.isArray,
    Bn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    yw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Di(i)) {
                for (var o = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && o.push(i[f]);
                n.obj[n.prop] = o
            }
        }
    },
    Yc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o) typeof e[o] < "u" && (i[o] = e[o]);
        return i
    },
    ww = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Di(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !aa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var o = e;
        return Di(e) && !Di(n) && (o = Yc(e, i)), Di(e) && Di(n) ? (n.forEach(function(f, v) {
            if (aa.call(e, v)) {
                var b = e[v];
                b && typeof b == "object" && f && typeof f == "object" ? e[v] = t(b, f, i) : e.push(f)
            } else e[v] = f
        }), e) : Object.keys(n).reduce(function(f, v) {
            var b = n[v];
            return aa.call(f, v) ? f[v] = t(f[v], b, i) : f[v] = b, f
        }, o)
    },
    bw = function(e, n) {
        return Object.keys(n).reduce(function(i, o) {
            return i[o] = n[o], i
        }, e)
    },
    Cw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    xw = function(e, n, i, o, f) {
        if (e.length === 0) return e;
        var v = e;
        if (typeof e == "symbol" ? v = Symbol.prototype.toString.call(e) : typeof e != "string" && (v = String(e)), i === "iso-8859-1") return escape(v).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var b = "", k = 0; k < v.length; ++k) {
            var A = v.charCodeAt(k);
            if (A === 45 || A === 46 || A === 95 || A === 126 || A >= 48 && A <= 57 || A >= 65 && A <= 90 || A >= 97 && A <= 122 || f === vw.RFC1738 && (A === 40 || A === 41)) {
                b += v.charAt(k);
                continue
            }
            if (A < 128) {
                b = b + Bn[A];
                continue
            }
            if (A < 2048) {
                b = b + (Bn[192 | A >> 6] + Bn[128 | A & 63]);
                continue
            }
            if (A < 55296 || A >= 57344) {
                b = b + (Bn[224 | A >> 12] + Bn[128 | A >> 6 & 63] + Bn[128 | A & 63]);
                continue
            }
            k += 1, A = 65536 + ((A & 1023) << 10 | v.charCodeAt(k) & 1023), b += Bn[240 | A >> 18] + Bn[128 | A >> 12 & 63] + Bn[128 | A >> 6 & 63] + Bn[128 | A & 63]
        }
        return b
    },
    Ew = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], o = 0; o < n.length; ++o)
            for (var f = n[o], v = f.obj[f.prop], b = Object.keys(v), k = 0; k < b.length; ++k) {
                var A = b[k],
                    D = v[A];
                typeof D == "object" && D !== null && i.indexOf(D) === -1 && (n.push({
                    obj: v,
                    prop: A
                }), i.push(D))
            }
        return yw(n), e
    },
    _w = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Sw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    kw = function(e, n) {
        return [].concat(e, n)
    },
    Tw = function(e, n) {
        if (Di(e)) {
            for (var i = [], o = 0; o < e.length; o += 1) i.push(n(e[o]));
            return i
        }
        return n(e)
    },
    Kc = {
        arrayToObject: Yc,
        assign: bw,
        combine: kw,
        compact: Ew,
        decode: Cw,
        encode: xw,
        isBuffer: Sw,
        isRegExp: _w,
        maybeMap: Tw,
        merge: ww
    },
    Jc = pw,
    Oa = Kc,
    is = Xa,
    Aw = Object.prototype.hasOwnProperty,
    ql = {
        brackets: function(e) {
            return e + "[]"
        },
        comma: "comma",
        indices: function(e, n) {
            return e + "[" + n + "]"
        },
        repeat: function(e) {
            return e
        }
    },
    ei = Array.isArray,
    Ow = String.prototype.split,
    Rw = Array.prototype.push,
    Qc = function(t, e) {
        Rw.apply(t, ei(e) ? e : [e])
    },
    Iw = Date.prototype.toISOString,
    Wl = is.default,
    tn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Oa.encode,
        encodeValuesOnly: !1,
        format: Wl,
        formatter: is.formatters[Wl],
        indices: !1,
        serializeDate: function(e) {
            return Iw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Dw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    la = {},
    Mw = function t(e, n, i, o, f, v, b, k, A, D, V, Y, ie, K, re, m) {
        for (var P = e, q = m, le = 0, se = !1;
            (q = q.get(la)) !== void 0 && !se;) {
            var ye = q.get(e);
            if (le += 1, typeof ye < "u") {
                if (ye === le) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof q.get(la) > "u" && (le = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = V(P) : i === "comma" && ei(P) && (P = Oa.maybeMap(P, function(he) {
                return he instanceof Date ? V(he) : he
            })), P === null) {
            if (f) return b && !K ? b(n, tn.encoder, re, "key", Y) : n;
            P = ""
        }
        if (Dw(P) || Oa.isBuffer(P)) {
            if (b) {
                var d = K ? n : b(n, tn.encoder, re, "key", Y);
                if (i === "comma" && K) {
                    for (var _e = Ow.call(String(P), ","), Oe = "", Pe = 0; Pe < _e.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + ie(b(_e[Pe], tn.encoder, re, "value", Y));
                    return [ie(d) + (o && ei(P) && _e.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [ie(d) + "=" + ie(b(P, tn.encoder, re, "value", Y))]
            }
            return [ie(n) + "=" + ie(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var Be;
        if (i === "comma" && ei(P)) Be = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ei(k)) Be = k;
        else {
            var J = Object.keys(P);
            Be = A ? J.sort(A) : J
        }
        for (var je = o && ei(P) && P.length === 1 ? n + "[]" : n, U = 0; U < Be.length; ++U) {
            var oe = Be[U],
                Ae = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(v && Ae === null)) {
                var be = ei(P) ? typeof i == "function" ? i(je, oe) : je : je + (D ? "." + oe : "[" + oe + "]");
                m.set(e, le);
                var we = Jc();
                we.set(la, m), Qc(lt, t(Ae, be, i, o, f, v, b, k, A, D, V, Y, ie, K, re, we))
            }
        }
        return lt
    },
    Lw = function(e) {
        if (!e) return tn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || tn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!Aw.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var o = is.formatters[i],
            f = tn.filter;
        return (typeof e.filter == "function" || ei(e.filter)) && (f = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : tn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? tn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : tn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? tn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : tn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : tn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : tn.encodeValuesOnly,
            filter: f,
            format: i,
            formatter: o,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : tn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : tn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : tn.strictNullHandling
        }
    },
    Pw = function(t, e) {
        var n = t,
            i = Lw(e),
            o, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, o = f);
        var v = [];
        if (typeof n != "object" || n === null) return "";
        var b;
        e && e.arrayFormat in ql ? b = e.arrayFormat : e && "indices" in e ? b = e.indices ? "indices" : "repeat" : b = "indices";
        var k = ql[b];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var A = k === "comma" && e && e.commaRoundTrip;
        o || (o = Object.keys(n)), i.sort && o.sort(i.sort);
        for (var D = Jc(), V = 0; V < o.length; ++V) {
            var Y = o[V];
            i.skipNulls && n[Y] === null || Qc(v, Mw(n[Y], Y, k, A, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var ie = v.join(i.delimiter),
            K = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? K += "utf8=%26%2310003%3B&" : K += "utf8=%E2%9C%93&"), ie.length > 0 ? K + ie : ""
    },
    vr = Kc,
    Ra = Object.prototype.hasOwnProperty,
    Nw = Array.isArray,
    Qt = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: vr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    Vw = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    Zc = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Bw = "utf8=%26%2310003%3B",
    $w = "utf8=%E2%9C%93",
    Fw = function(e, n) {
        var i = {},
            o = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            v = o.split(n.delimiter, f),
            b = -1,
            k, A = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < v.length; ++k) v[k].indexOf("utf8=") === 0 && (v[k] === $w ? A = "utf-8" : v[k] === Bw && (A = "iso-8859-1"), b = k, k = v.length);
        for (k = 0; k < v.length; ++k)
            if (k !== b) {
                var D = v[k],
                    V = D.indexOf("]="),
                    Y = V === -1 ? D.indexOf("=") : V + 1,
                    ie, K;
                Y === -1 ? (ie = n.decoder(D, Qt.decoder, A, "key"), K = n.strictNullHandling ? null : "") : (ie = n.decoder(D.slice(0, Y), Qt.decoder, A, "key"), K = vr.maybeMap(Zc(D.slice(Y + 1), n), function(re) {
                    return n.decoder(re, Qt.decoder, A, "value")
                })), K && n.interpretNumericEntities && A === "iso-8859-1" && (K = Vw(K)), D.indexOf("[]=") > -1 && (K = Nw(K) ? [K] : K), Ra.call(i, ie) ? i[ie] = vr.combine(i[ie], K) : i[ie] = K
            } return i
    },
    jw = function(t, e, n, i) {
        for (var o = i ? e : Zc(e, n), f = t.length - 1; f >= 0; --f) {
            var v, b = t[f];
            if (b === "[]" && n.parseArrays) v = [].concat(o);
            else {
                v = n.plainObjects ? Object.create(null) : {};
                var k = b.charAt(0) === "[" && b.charAt(b.length - 1) === "]" ? b.slice(1, -1) : b,
                    A = parseInt(k, 10);
                !n.parseArrays && k === "" ? v = {
                    0: o
                } : !isNaN(A) && b !== k && String(A) === k && A >= 0 && n.parseArrays && A <= n.arrayLimit ? (v = [], v[A] = o) : k !== "__proto__" && (v[k] = o)
            }
            o = v
        }
        return o
    },
    zw = function(e, n, i, o) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                v = /(\[[^[\]]*])/,
                b = /(\[[^[\]]*])/g,
                k = i.depth > 0 && v.exec(f),
                A = k ? f.slice(0, k.index) : f,
                D = [];
            if (A) {
                if (!i.plainObjects && Ra.call(Object.prototype, A) && !i.allowPrototypes) return;
                D.push(A)
            }
            for (var V = 0; i.depth > 0 && (k = b.exec(f)) !== null && V < i.depth;) {
                if (V += 1, !i.plainObjects && Ra.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(k[1])
            }
            return k && D.push("[" + f.slice(k.index) + "]"), jw(D, n, i, o)
        }
    },
    Gw = function(e) {
        if (!e) return Qt;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = typeof e.charset > "u" ? Qt.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? Qt.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Qt.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Qt.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Qt.arrayLimit,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Qt.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : Qt.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : Qt.decoder,
            delimiter: typeof e.delimiter == "string" || vr.isRegExp(e.delimiter) ? e.delimiter : Qt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Qt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Qt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Qt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Qt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Qt.strictNullHandling
        }
    },
    Uw = function(t, e) {
        var n = Gw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? Fw(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), v = 0; v < f.length; ++v) {
            var b = f[v],
                k = zw(b, i[b], n, typeof t == "string");
            o = vr.merge(o, k, n)
        }
        return n.allowSparse === !0 ? o : vr.compact(o)
    },
    Hw = Pw,
    qw = Uw,
    Ww = Xa,
    eu = {
        formats: Ww,
        parse: qw,
        stringify: Hw
    };
class Xw {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Yw {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Kw {
    constructor(e) {
        this.connections = e.connections
    }
}
class Jw {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class Qw {}
var po = {
    CreateRoomReply: Xw,
    GetRoomReply: Yw,
    GetAudienceReply: Kw,
    RoomExit: Jw,
    RoomLock: Qw
};
const Xl = Ea.exports,
    Zw = eu,
    {
        CreateRoomReply: eb,
        GetRoomReply: tb
    } = po;
class nb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = Zw.stringify(n);
            return `${this.scheme}://${this.host}/api/v2${e}?${i}`
        }
        return `${this.scheme}://${this.host}/api/v2${e}`
    }
    async createRoom(e) {
        let n = {
            userId: e.userId || "fart",
            appTag: e.appTag || "test"
        };
        e.password && (n.password = e.password), e.moderatorPassword && (n.moderatorPassword = e.moderatorPassword), e.twitchLocked && (n.twitchLocked = e.twitchLocked), e.locale && (n.locale = e.locale), e.keepalive && (n.keepalive = e.keepalive), e.controllerBranch && (n.controllerBranch = e.controllerBranch);
        let i = this.url("/rooms", n),
            v = await (await Xl(i, {
                method: "POST"
            })).json();
        if (!v.ok) throw new Error(`failed to create room: ${v.error}`);
        let b = v.body;
        return new eb({
            code: b.code,
            token: b.token,
            host: b.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            o = await (await Xl(n)).json();
        if (!o.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${o.error}`);
        let f = o.body;
        return new tb({
            appId: f.appId,
            appTag: f.appTag,
            audienceEnabled: f.audienceEnabled,
            code: f.code,
            host: f.host,
            audienceHost: f.audienceHost,
            locked: f.locked,
            full: f.full,
            moderationEnabled: f.moderationEnabled,
            passwordRequired: f.passwordRequired,
            twitchLocked: f.twitchLocked,
            locale: f.locale,
            keepalive: f.keepalive,
            controllerBranch: f.controllerBranch
        })
    }
}
var ib = {
        APIClient: nb
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof vt < "u" ? ar = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var rb = ar,
    Ya = {
        exports: {}
    },
    dr = typeof Reflect == "object" ? Reflect : null,
    Yl = dr && typeof dr.apply == "function" ? dr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Gs;
dr && typeof dr.ownKeys == "function" ? Gs = dr.ownKeys : Object.getOwnPropertySymbols ? Gs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Gs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function sb(t) {
    console && console.warn && console.warn(t)
}
var tu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Ya.exports = Rt;
Ya.exports.once = cb;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var Kl = 10;

function go(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Kl
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || tu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Kl = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || tu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function nu(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return nu(this)
};
Rt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var o = e === "error",
        f = this._events;
    if (f !== void 0) o = o && f.error === void 0;
    else if (!o) return !1;
    if (o) {
        var v;
        if (n.length > 0 && (v = n[0]), v instanceof Error) throw v;
        var b = new Error("Unhandled error." + (v ? " (" + v.message + ")" : ""));
        throw b.context = v, b
    }
    var k = f[e];
    if (k === void 0) return !1;
    if (typeof k == "function") Yl(k, this, n);
    else
        for (var A = k.length, D = au(k, A), i = 0; i < A; ++i) Yl(D[i], this, n);
    return !0
};

function iu(t, e, n, i) {
    var o, f, v;
    if (go(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), v = f[e]), v === void 0) v = f[e] = n, ++t._eventsCount;
    else if (typeof v == "function" ? v = f[e] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), o = nu(t), o > 0 && v.length > o && !v.warned) {
        v.warned = !0;
        var b = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        b.name = "MaxListenersExceededWarning", b.emitter = t, b.type = e, b.count = v.length, sb(b)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return iu(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return iu(this, e, n, !0)
};

function ob() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function ru(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        o = ob.bind(i);
    return o.listener = n, i.wrapFn = o, o
}
Rt.prototype.once = function(e, n) {
    return go(n), this.on(e, ru(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, ru(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, o, f, v, b;
    if (go(n), o = this._events, o === void 0) return this;
    if (i = o[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, v = i.length - 1; v >= 0; v--)
            if (i[v] === n || i[v].listener === n) {
                b = i[v].listener, f = v;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : ab(i, f), i.length === 1 && (o[e] = i[0]), o.removeListener !== void 0 && this.emit("removeListener", e, b || n)
    }
    return this
};
Rt.prototype.off = Rt.prototype.removeListener;
Rt.prototype.removeAllListeners = function(e) {
    var n, i, o;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var f = Object.keys(i),
            v;
        for (o = 0; o < f.length; ++o) v = f[o], v !== "removeListener" && this.removeAllListeners(v);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (o = n.length - 1; o >= 0; o--) this.removeListener(e, n[o]);
    return this
};

function su(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var o = i[e];
    return o === void 0 ? [] : typeof o == "function" ? n ? [o.listener || o] : [o] : n ? lb(o) : au(o, o.length)
}
Rt.prototype.listeners = function(e) {
    return su(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return su(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : ou.call(t, e)
};
Rt.prototype.listenerCount = ou;

function ou(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
Rt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Gs(this._events) : []
};

function au(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function ab(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function lb(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function cb(t, e) {
    return new Promise(function(n, i) {
        function o(v) {
            t.removeListener(e, f), i(v)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", o), n([].slice.call(arguments))
        }
        lu(t, e, f, {
            once: !0
        }), e !== "error" && ub(t, o, {
            once: !0
        })
    })
}

function ub(t, e, n) {
    typeof t.on == "function" && lu(t, "error", e, n)
}

function lu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function o(f) {
        i.once && t.removeEventListener(e, o), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class hb {
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
class mo extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class ds extends mo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class cu extends ds {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class uu extends ds {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class hu extends ds {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class Tt extends mo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class du extends Tt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class fu extends Tt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class pu extends Tt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class gu extends Tt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class mu extends Tt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class vu extends Tt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class yu extends Tt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class wu extends Tt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class bu extends Tt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Cu extends Tt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class xu extends Tt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Eu extends Tt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class _u extends Tt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Su extends Tt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class ku extends Tt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Tu extends Tt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Au extends Tt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Ou extends Tt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Ru extends Tt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Iu extends Tt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Du extends Tt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Mu extends Tt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Lu extends Tt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Pu extends Tt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Nu extends Tt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Vu extends Tt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Bu extends Tt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class $u extends Tt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function db({
    code: t,
    message: e
}) {
    const n = fb[t];
    return n ? new n({
        message: e
    }) : new mo({
        message: e
    })
}
var ti = {
    createError: db,
    CallError: mo,
    EcastServerError: ds,
    EcastCreateRoomFailed: cu,
    EcastDialRoomFailed: uu,
    EcastServerIsShuttingDown: hu,
    EcastClientError: Tt,
    EcastParseError: du,
    EcastRequestIsMissingOpcode: fu,
    EcastRequestHasInvalidOpcode: pu,
    EcastRequestHasInvalidArguments: gu,
    EcastEntityNotFound: mu,
    EcastEntityAlreadyExists: vu,
    EcastEntityTypeError: yu,
    EcastNoSuchClient: wu,
    EcastRoomIsLocked: bu,
    EcastRoomIsFull: Cu,
    EcastLicenseNotFound: xu,
    EcastLicenseCheckFailed: Eu,
    EcastRoomNotFound: _u,
    EcastInvalidRole: Su,
    EcastTwitchLoginRequired: ku,
    EcastInvalidOption: Tu,
    EcastPasswordRequired: Au,
    EcastInvalidPassword: Ou,
    EcastNameRequired: Ru,
    EcastFilterError: Iu,
    EcastNoSuchFilter: Du,
    EcastPermissionDenied: Mu,
    EcastNotConnected: Lu,
    EcastIllegalOperation: Pu,
    EcastACLChangeDenied: Nu,
    EcastRoomHasEnded: Vu,
    EcastEntityLocked: Bu,
    EcastRateLimitExceeded: $u,
    ObservedError: hb
};
const fb = {
    1e3: ds,
    1001: cu,
    1002: uu,
    1003: hu,
    2e3: Tt,
    2001: du,
    2002: fu,
    2003: pu,
    2004: gu,
    2005: mu,
    2006: vu,
    2007: yu,
    2008: wu,
    2009: bu,
    2010: Cu,
    2011: xu,
    2012: Eu,
    2013: _u,
    2014: Su,
    2015: ku,
    2016: Tu,
    2017: Au,
    2018: Ou,
    2019: Ru,
    2021: Iu,
    2022: Du,
    2023: Mu,
    2024: Lu,
    2025: Pu,
    2026: Nu,
    2027: Vu,
    2028: Bu,
    2420: $u
};
class pb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class gb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class mb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class vb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class yb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ka = {
    ClientConnected: gb,
    ClientDisconnected: mb,
    ClientKicked: yb,
    ClientSend: vb,
    ClientWelcome: pb
};
class wb {
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
var Ja = {
    CountGroup: wb
};
class bb {
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
var Qa = {
    GCounter: bb
};
class Cb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var Fu = {
    Notification: Cb
};
class xb {
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
class Eb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var Za = {
    ObjectEntity: xb,
    ObjectEcho: Eb
};
class _b {
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
var el = {
    PNCounter: _b
};
class Sb {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var ju = {
    Reply: Sb
};
class kb {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Tb = {
    Request: kb
};
class Ab {
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
class Ob {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var tl = {
    TextEntity: Ab,
    TextEcho: Ob
};
class Rb {
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
var nl = {
    TextRing: Rb
};
class Ib {
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
var zu = {
    ArtifactEntity: Ib
};
class Db {
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
class Mb {
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
class Lb {
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
var il = {
    DoodleEntity: Db,
    DoodleLine: Mb,
    DoodleLineRemoved: Lb
};
class Pb {
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
class Nb {
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
class Vb {
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
var Gu = {
    StackEntity: Pb,
    StackElement: Nb,
    StackElements: Vb
};
class Bb {
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
var Uu = {
    DropEntity: Bb
};
class $b {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var Fb = {
    Echo: $b
};
class jb {
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
var zb = {
    LockEntity: jb
};
class Gb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Hu = {
    OK: Gb
};
class Ub {
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
var qu = {
    NumberEntity: Ub
};
const {
    ArtifactEntity: Hb
} = zu, {
    ClientWelcome: qb,
    ClientConnected: Wb,
    ClientDisconnected: Xb,
    ClientKicked: Yb,
    ClientSend: Kb
} = Ka, {
    CountGroup: Jb
} = Ja, {
    DoodleEntity: Qb,
    DoodleLine: Zb,
    DoodleLineRemoved: e0
} = il, {
    StackEntity: t0,
    StackElement: n0,
    StackElements: i0
} = Gu, {
    DropEntity: r0
} = Uu, {
    Echo: s0
} = Fb, {
    LockEntity: o0
} = zb, {
    GCounter: a0
} = Qa, {
    GetAudienceReply: l0,
    RoomExit: c0,
    RoomLock: u0
} = po, {
    Notification: h0
} = Fu, {
    OK: d0
} = Hu, {
    NumberEntity: f0
} = qu, {
    ObjectEcho: p0,
    ObjectEntity: g0
} = Za, {
    PNCounter: Jl
} = el, {
    Reply: m0
} = ju, {
    TextEcho: v0,
    TextEntity: y0
} = tl, {
    TextRing: w0
} = nl, {
    createError: Ql,
    ObservedError: b0
} = ti;

function Ia(t, e, n) {
    switch (t) {
        case "ok":
            return new d0;
        case "echo":
            return new s0({
                message: e.message
            });
        case "lock":
            return new o0({
                key: e.key,
                from: e.from
            });
        case "error":
            return Ql({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new b0({
                to: e.to,
                error: Ql({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new y0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new v0({
                message: e.message
            });
        case "object":
            return new g0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new p0({
                message: e.message
            });
        case "drop":
            return new r0({
                key: e.key
            });
        case "artifact":
            return new Hb({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new Wb({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Xb({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Yb({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Kb({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new qb({
                id: e.id,
                name: e.name,
                secret: e.secret,
                reconnect: e.reconnect,
                here: e.here,
                profile: e.profile,
                replayEnd: e.replayEnd
            });
            if (e.entities) {
                let o = {};
                Object.entries(e.entities).forEach(([f, v]) => {
                    o[f] = Ia(v[0], v[1], v[2])
                }), i.entities = o
            }
            return i
        }
        case "doodle":
            return new Qb({
                key: e.key,
                colors: e.val.colors,
                lines: e.val.lines,
                live: e.val.live,
                maxPoints: e.val.maxPoints,
                size: e.val.size,
                weights: e.val.weights,
                meta: n,
                acl: e.acl
            });
        case "doodle/line":
            return new Zb({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new e0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new t0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new n0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new i0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new f0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new c0({
                cause: e.cause
            });
        case "room/lock":
            return new u0;
        case "room/get-audience":
            return new l0({
                connections: e.connections
            });
        case "audience":
            return new Jl({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new Jb({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new w0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new a0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new Jl({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function C0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new m0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Ia(n, e.result)
    }) : new h0({
        pc: e.pc,
        opcode: n,
        result: Ia(n, e.result)
    })
}
var x0 = {
    parseResponseMessage: C0
};
const Zl = rb,
    E0 = eu,
    _0 = Ya.exports,
    {
        CallError: S0
    } = ti,
    {
        ClientWelcome: k0
    } = Ka,
    {
        CountGroup: T0
    } = Ja,
    {
        GCounter: A0
    } = Qa,
    {
        Notification: ec
    } = Fu,
    {
        ObjectEntity: ca
    } = Za,
    {
        PNCounter: O0
    } = el,
    {
        Reply: R0
    } = ju,
    {
        Request: I0
    } = Tb,
    {
        TextEntity: ua
    } = tl,
    {
        TextRing: D0
    } = nl,
    {
        parseResponseMessage: M0
    } = x0,
    {
        DoodleEntity: L0
    } = il,
    {
        StackEntity: P0
    } = Gu,
    N0 = 1e3 + Math.floor(Math.random() * 500),
    tc = 13e3;
class V0 extends _0 {
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
        const n = E0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((o, f) => {
            let v = !1,
                b = !1,
                k = D => {
                    o(D), v = !0
                },
                A = D => {
                    f(D), v = !0
                };
            this.conn = new Zl(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const V = M0(D);
                if (V instanceof R0) this.onReply(V);
                else if (V instanceof ec) {
                    if (V.result instanceof k0) b = !0, this.id = V.result.id, this.deviceId = V.result.deviceId, this.entities = V.result.entities, this.secret = V.result.secret, V.result.name && (this.name = V.result.name), k(V.result);
                    else if (!v) {
                        A(V.result);
                        return
                    }
                    this.onNotification(V)
                } else console.error(`failed to parse response messsage: ${V}`)
            }, this.conn.onerror = D => {
                v ? this.emit("socketError", D) : A(D)
            }, this.conn.onclose = D => {
                this.debugLog("onclose", D.code), b && D.code === 1006 ? this.reconnect() : this.emit("socketClose", D)
            }, this.conn.onopen = D => {
                this.emit("socketOpen", D)
            }
        })
    }
    sleep(e) {
        return new Promise(n => setTimeout(n, e))
    }
    debugLog(...e) {
        !this.debug || console.log(`%c[WSClient:${this.name}]`, "background-color:blue;color:white;", ...e)
    }
    async reconnect() {
        this.disconnect(), this.debugLog("Attempting to reconnect");
        let e = 1,
            n = N0;
        for (;;) try {
            this.emit("connection", {
                status: "connecting",
                attempt: e
            }), await this.connect(), this.debugLog("reconnected"), this.emit("connection", {
                status: "connected"
            });
            return
        } catch (i) {
            if (this.debugLog("reconnect error", i), i.code === 1005 || i.code === 1e3) {
                this.debugLog("unable to reconnect!", i), this.emit("socketClose", i);
                return
            }
            if (n >= tc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(tc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const o = new ec(e);
            o.re = n, this.emit("notification", o);
            return
        }
        delete this.pending[n], e.result instanceof S0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== Zl.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            o = new I0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((b, k) => {
                this.pending[i] = {
                    resolve: b,
                    reject: k,
                    request: o
                }
            }),
            v = JSON.stringify(o);
        return this.debugLog(`send -> ${v}`), this.conn.send(v), f
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
    mail(e, n) {
        return this.send("client/send", {
            from: this.id,
            to: e,
            body: n
        })
    }
    kick(e, n = !1, i) {
        return this.send("client/kick", {
            id: e,
            ban: n,
            reason: i
        })
    }
    async drop(e) {
        const n = await this.send("drop", {
            key: e
        });
        return delete this.entities[e], n
    }
    echo(e) {
        return this.send("echo", {
            message: e
        })
    }
    async lock(e) {
        const n = await this.send("lock", {
            key: e
        });
        return this.entities[e].meta.locked = !0, n
    }
    async getNumber(e) {
        const n = await this.send("number/get", {
            key: e
        });
        return this.entities[e].val = n.val, this.entities[e].restrictions = n.restrictions, n
    }
    async updateNumber(e, n) {
        const i = await this.send("number/update", {
            key: e,
            val: n
        });
        return this.entities[e].val = n, i
    }
    async createObject(e, n, i) {
        const o = {
            key: e,
            val: n
        };
        i && (o.acl = i);
        const f = await this.send("object/create", o);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), f
    }
    echoObject(e) {
        return this.send("object/echo", {
            message: e
        })
    }
    async setObject(e, n, i) {
        const o = {
            key: e,
            val: n
        };
        i && (o.acl = i);
        const f = await this.send("object/set", o);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), f
    }
    async updateObject(e, n) {
        const i = await this.send("object/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), i
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
    async createText(e, n, i) {
        const o = {
                key: e,
                val: n
            },
            {
                acl: f,
                accept: v,
                reject: b
            } = i;
        f && (o.acl = f), v && (o.accept = v), b && (o.reject = b);
        const k = await this.send("text/create", o);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), k
    }
    async setText(e, n, i) {
        const o = {
            key: e,
            val: n
        };
        i && (o.acl = i);
        const f = await this.send("text/set", o);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), f
    }
    async updateText(e, n) {
        const i = await this.send("text/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), i
    }
    async createDoodle(e, n) {
        let i = {
            key: e
        };
        const {
            acl: o,
            colors: f,
            live: v,
            maxPoints: b,
            size: k,
            weights: A
        } = n;
        o && (i.acl = o), f && (i.colors = f), i.live = v, b != null && (i.maxPoints = b), k && (i.size = k), A && (i.weights = A);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new L0({
            key: e,
            colors: f,
            lines: [],
            live: v,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: k,
            weights: A,
            meta: {
                locked: !1
            }
        }), D
    }
    async getDoodle(e) {
        return this.send("doodle/get", {
            key: e
        })
    }
    async strokeDoodle(e, n) {
        const {
            layer: i,
            color: o,
            weight: f,
            points: v
        } = n, b = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: o,
            weight: f,
            points: v
        }), k = {
            layer: i,
            color: o,
            weight: f,
            points: v
        };
        return this.entities[e].lines.push(k), b
    }
    async undoDoodle(e) {
        const n = await this.send("doodle/undo", {
            key: e
        });
        return this.entities[e].lines.pop(), n
    }
    async createStack(e, n) {
        const i = {
            key: e
        };
        n && (i.acl = n);
        const o = await this.send("stack/create", i);
        return this.entities[e] = new P0({
            key: e,
            size: 0,
            meta: {
                locked: !1
            }
        }), o
    }
    async pushStack(e, n) {
        return await this.send("stack/push", {
            key: e,
            val: n
        })
    }
    async bulkPushStack(e, n) {
        return await this.send("stack/bulkpush", {
            key: e,
            vals: n
        })
    }
    async peekStack(e, n) {
        return await this.send("stack/peek", {
            key: e,
            size: n
        })
    }
    async popStack(e) {
        return await this.send("stack/pop", {
            key: e
        })
    }
    async createCountGroup(e, n) {
        const i = await this.send("audience/count-group/create", {
            name: e,
            options: n
        });
        return this.entities[e] = new T0({
            key: e,
            choices: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementCountGroupCounter(e, n, i = 1) {
        return this.send("audience/count-group/increment", {
            name: e,
            vote: n,
            times: i
        })
    }
    getCountGroup(e) {
        return this.send("audience/count-group/get", {
            name: e
        })
    }
    async createGCounter(e, n) {
        const i = await this.send("audience/g-counter/create", {
            key: e,
            count: n
        });
        return this.entities[e] = new A0({
            key: e,
            count: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementGCounter(e, n) {
        return this.send("audience/g-counter/increment", {
            key: e,
            times: n
        })
    }
    getGCounter(e) {
        return this.send("audience/g-counter/get", {
            key: e
        })
    }
    async createPNCounter(e, n) {
        const i = await this.send("audience/pn-counter/create", {
            key: e,
            count: n
        });
        return this.entities[e] = new O0({
            key: e,
            count: n,
            meta: {
                locked: !1
            }
        }), i
    }
    incrementPNCounter(e, n) {
        return this.send("audience/pn-counter/increment", {
            key: e,
            times: n
        })
    }
    decrementPNCounter(e, n) {
        return this.send("audience/pn-counter/decrement", {
            key: e,
            times: n
        })
    }
    getPNCounter(e) {
        return this.send("audience/pn-counter/get", {
            key: e
        })
    }
    async createTextRing(e, n) {
        const i = {
                key: e
            },
            {
                limit: o,
                accept: f,
                reject: v
            } = n;
        o && (i.limit = o), f && (i.accept = f), v && (i.reject = v);
        const b = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new D0({
            key: e,
            elements: [],
            limit: o,
            meta: {
                locked: !1
            }
        }), b
    }
    getTextRing(e) {
        return this.send("audience/text-ring/get", {
            name: e
        })
    }
    pushTextRing(e, n) {
        return this.send("audience/text-ring/push", {
            name: e,
            text: n
        })
    }
}
var B0 = {
    WSClient: V0
};
const {
    APIClient: $0
} = ib, {
    WSClient: F0
} = B0, {
    CreateRoomReply: j0,
    GetRoomReply: z0
} = po, {
    ClientWelcome: G0,
    ClientDisconnected: U0
} = Ka, {
    ArtifactEntity: H0
} = zu, {
    GCounter: q0
} = Qa, {
    NumberEntity: W0
} = qu, {
    TextEntity: X0
} = tl, {
    DoodleEntity: Y0
} = il, {
    ObjectEntity: K0
} = Za, {
    CountGroup: J0
} = Ja, {
    DropEntity: Q0
} = Uu, {
    OK: Z0
} = Hu, {
    RoomExit: eC
} = po, {
    TextRing: tC
} = nl, {
    PNCounter: nC
} = el;
var Ri = {
    APIClient: $0,
    WSClient: F0,
    ClientWelcome: G0,
    CreateRoomReply: j0,
    DropEntity: Q0,
    GetRoomReply: z0,
    ClientDisconnected: U0,
    RoomExit: eC,
    OK: Z0,
    ArtifactEntity: H0,
    DoodleEntity: Y0,
    NumberEntity: W0,
    CountGroup: J0,
    GCounter: q0,
    ObjectEntity: K0,
    PNCounter: nC,
    TextEntity: X0,
    TextRing: tC
};

function nc(...t) {
    console.log(...t)
}

function iC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ic = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(vt, function(n) {
        var i = typeof window < "u" ? window : typeof vt < "u" ? vt : typeof self < "u" ? self : {},
            o = function(N, W) {
                if (W = W.split(":")[0], N = +N, !N) return !1;
                switch (W) {
                    case "http":
                    case "ws":
                        return N !== 80;
                    case "https":
                    case "wss":
                        return N !== 443;
                    case "ftp":
                        return N !== 21;
                    case "gopher":
                        return N !== 70;
                    case "file":
                        return !1
                }
                return N !== 0
            },
            f = Object.prototype.hasOwnProperty,
            v;

        function b(F) {
            try {
                return decodeURIComponent(F.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function k(F) {
            try {
                return encodeURIComponent(F)
            } catch {
                return null
            }
        }

        function A(F) {
            for (var N = /([^=?#&]+)=?([^&]*)/g, W = {}, M; M = N.exec(F);) {
                var H = b(M[1]),
                    pe = b(M[2]);
                H === null || pe === null || H in W || (W[H] = pe)
            }
            return W
        }

        function D(F, N) {
            N = N || "";
            var W = [],
                M, H;
            typeof N != "string" && (N = "?");
            for (H in F)
                if (f.call(F, H)) {
                    if (M = F[H], !M && (M === null || M === v || isNaN(M)) && (M = ""), H = k(H), M = k(M), H === null || M === null) continue;
                    W.push(H + "=" + M)
                } return W.length ? N + W.join("&") : ""
        }
        var V = D,
            Y = A,
            ie = {
                stringify: V,
                parse: Y
            },
            K = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            m = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + m + "+");

        function q(F) {
            return (F || "").toString().replace(P, "")
        }
        var le = [
                ["#", "hash"],
                ["?", "query"],
                function(N, W) {
                    return d(W.protocol) ? N.replace(/\\/g, "/") : N
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            se = {
                hash: 1,
                query: 1
            };

        function ye(F) {
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var W = N.location || {};
            F = F || W;
            var M = {},
                H = typeof F,
                pe;
            if (F.protocol === "blob:") M = new Pe(unescape(F.pathname), {});
            else if (H === "string") {
                M = new Pe(F, {});
                for (pe in se) delete M[pe]
            } else if (H === "object") {
                for (pe in F) pe in se || (M[pe] = F[pe]);
                M.slashes === void 0 && (M.slashes = K.test(F.href))
            }
            return M
        }

        function d(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function _e(F, N) {
            F = q(F), N = N || {};
            var W = re.exec(F),
                M = W[1] ? W[1].toLowerCase() : "",
                H = !!W[2],
                pe = !!W[3],
                ge = 0,
                Ne;
            return H ? pe ? (Ne = W[2] + W[3] + W[4], ge = W[2].length + W[3].length) : (Ne = W[2] + W[4], ge = W[2].length) : pe ? (Ne = W[3] + W[4], ge = W[3].length) : Ne = W[4], M === "file:" ? ge >= 2 && (Ne = Ne.slice(2)) : d(M) ? Ne = W[4] : M ? H && (Ne = Ne.slice(2)) : ge >= 2 && d(N.protocol) && (Ne = W[4]), {
                protocol: M,
                slashes: H || d(M),
                slashesCount: ge,
                rest: Ne
            }
        }

        function Oe(F, N) {
            if (F === "") return N;
            for (var W = (N || "/").split("/").slice(0, -1).concat(F.split("/")), M = W.length, H = W[M - 1], pe = !1, ge = 0; M--;) W[M] === "." ? W.splice(M, 1) : W[M] === ".." ? (W.splice(M, 1), ge++) : ge && (M === 0 && (pe = !0), W.splice(M, 1), ge--);
            return pe && W.unshift(""), (H === "." || H === "..") && W.push(""), W.join("/")
        }

        function Pe(F, N, W) {
            if (F = q(F), !(this instanceof Pe)) return new Pe(F, N, W);
            var M, H, pe, ge, Ne, Ve, pt = le.slice(),
                Ft = typeof N,
                Ye = this,
                In = 0;
            for (Ft !== "object" && Ft !== "string" && (W = N, N = null), W && typeof W != "function" && (W = ie.parse), N = ye(N), H = _e(F || "", N), M = !H.protocol && !H.slashes, Ye.slashes = H.slashes || M && N.slashes, Ye.protocol = H.protocol || N.protocol || "", F = H.rest, (Ye.protocol === "file:" || !H.slashes && (H.protocol || H.slashesCount < 2 || !d(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (ge = pt[In], typeof ge == "function") {
                    F = ge(F, Ye);
                    continue
                }
                pe = ge[0], Ve = ge[1], pe !== pe ? Ye[Ve] = F : typeof pe == "string" ? ~(Ne = F.indexOf(pe)) && (typeof ge[2] == "number" ? (Ye[Ve] = F.slice(0, Ne), F = F.slice(Ne + ge[2])) : (Ye[Ve] = F.slice(Ne), F = F.slice(0, Ne))) : (Ne = pe.exec(F)) && (Ye[Ve] = Ne[1], F = F.slice(0, Ne.index)), Ye[Ve] = Ye[Ve] || M && ge[3] && N[Ve] || "", ge[4] && (Ye[Ve] = Ye[Ve].toLowerCase())
            }
            W && (Ye.query = W(Ye.query)), M && N.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || N.pathname !== "") && (Ye.pathname = Oe(Ye.pathname, N.pathname)), Ye.pathname.charAt(0) !== "/" && d(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), o(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (ge = Ye.auth.split(":"), Ye.username = ge[0] || "", Ye.password = ge[1] || ""), Ye.origin = Ye.protocol !== "file:" && d(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(F, N, W) {
            var M = this;
            switch (F) {
                case "query":
                    typeof N == "string" && N.length && (N = (W || ie.parse)(N)), M[F] = N;
                    break;
                case "port":
                    M[F] = N, o(N, M.protocol) ? N && (M.host = M.hostname + ":" + N) : (M.host = M.hostname, M[F] = "");
                    break;
                case "hostname":
                    M[F] = N, M.port && (N += ":" + M.port), M.host = N;
                    break;
                case "host":
                    M[F] = N, /:\d+$/.test(N) ? (N = N.split(":"), M.port = N.pop(), M.hostname = N.join(":")) : (M.hostname = N, M.port = "");
                    break;
                case "protocol":
                    M.protocol = N.toLowerCase(), M.slashes = !W;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var H = F === "pathname" ? "/" : "#";
                        M[F] = N.charAt(0) !== H ? H + N : N
                    } else M[F] = N;
                    break;
                default:
                    M[F] = N
            }
            for (var pe = 0; pe < le.length; pe++) {
                var ge = le[pe];
                ge[4] && (M[ge[1]] = M[ge[1]].toLowerCase())
            }
            return M.origin = M.protocol !== "file:" && d(M.protocol) && M.host ? M.protocol + "//" + M.host : "null", M.href = M.toString(), M
        }

        function Be(F) {
            (!F || typeof F != "function") && (F = ie.stringify);
            var N, W = this,
                M = W.protocol;
            M && M.charAt(M.length - 1) !== ":" && (M += ":");
            var H = M + (W.slashes || d(W.protocol) ? "//" : "");
            return W.username && (H += W.username, W.password && (H += ":" + W.password), H += "@"), H += W.host + W.pathname, N = typeof W.query == "object" ? F(W.query) : W.query, N && (H += N.charAt(0) !== "?" ? "?" + N : N), W.hash && (H += W.hash), H
        }
        Pe.prototype = {
            set: lt,
            toString: Be
        }, Pe.extractProtocol = _e, Pe.location = ye, Pe.trimLeft = q, Pe.qs = ie;
        var J = Pe;

        function je(F, N) {
            setTimeout(function(W) {
                return F.call(W)
            }, 4, N)
        }

        function U(F, N) {
            typeof process < "u" && console[F].call(null, N)
        }

        function oe(F, N) {
            F === void 0 && (F = []);
            var W = [];
            return F.forEach(function(M) {
                N(M) || W.push(M)
            }), W
        }

        function Ae(F, N) {
            F === void 0 && (F = []);
            var W = [];
            return F.forEach(function(M) {
                N(M) && W.push(M)
            }), W
        }
        var be = function() {
            this.listeners = {}
        };
        be.prototype.addEventListener = function(N, W) {
            typeof W == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Ae(this.listeners[N], function(M) {
                return M === W
            }).length === 0 && this.listeners[N].push(W))
        }, be.prototype.removeEventListener = function(N, W) {
            var M = this.listeners[N];
            this.listeners[N] = oe(M, function(H) {
                return H === W
            })
        }, be.prototype.dispatchEvent = function(N) {
            for (var W = this, M = [], H = arguments.length - 1; H-- > 0;) M[H] = arguments[H + 1];
            var pe = N.type,
                ge = this.listeners[pe];
            return Array.isArray(ge) ? (ge.forEach(function(Ne) {
                M.length > 0 ? Ne.apply(W, M) : Ne.call(W, N)
            }), !0) : !1
        };

        function we(F) {
            var N = F.indexOf("?");
            return N >= 0 ? F.slice(0, N) : F
        }
        var he = function() {
            this.urlMap = {}
        };
        he.prototype.attachWebSocket = function(N, W) {
            var M = we(W),
                H = this.urlMap[M];
            if (H && H.server && H.websockets.indexOf(N) === -1) return H.websockets.push(N), H.server
        }, he.prototype.addMembershipToRoom = function(N, W) {
            var M = this.urlMap[we(N.url)];
            M && M.server && M.websockets.indexOf(N) !== -1 && (M.roomMemberships[W] || (M.roomMemberships[W] = []), M.roomMemberships[W].push(N))
        }, he.prototype.attachServer = function(N, W) {
            var M = we(W),
                H = this.urlMap[M];
            if (!H) return this.urlMap[M] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, he.prototype.serverLookup = function(N) {
            var W = we(N),
                M = this.urlMap[W];
            if (M) return M.server
        }, he.prototype.websocketsLookup = function(N, W, M) {
            var H = we(N),
                pe, ge = this.urlMap[H];
            if (pe = ge ? ge.websockets : [], W) {
                var Ne = ge.roomMemberships[W];
                pe = Ne || []
            }
            return M ? pe.filter(function(Ve) {
                return Ve !== M
            }) : pe
        }, he.prototype.removeServer = function(N) {
            delete this.urlMap[we(N)]
        }, he.prototype.removeWebSocket = function(N, W) {
            var M = we(W),
                H = this.urlMap[M];
            H && (H.websockets = oe(H.websockets, function(pe) {
                return pe === N
            }))
        }, he.prototype.removeMembershipFromRoom = function(N, W) {
            var M = this.urlMap[we(N.url)],
                H = M.roomMemberships[W];
            M && H !== null && (M.roomMemberships[W] = oe(H, function(pe) {
                return pe === N
            }))
        };
        var Se = new he,
            Te = {
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
            $e = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Ke = function() {};
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, W, M) {
            N === void 0 && (N = "undefined"), W === void 0 && (W = !1), M === void 0 && (M = !1), this.type = "" + N, this.bubbles = Boolean(W), this.cancelable = Boolean(M)
        };
        var dt = function(F) {
                function N(W, M) {
                    if (M === void 0 && (M = {}), F.call(this), !W) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var H = M.bubbles,
                        pe = M.cancelable;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = H ? Boolean(H) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Bt = function(F) {
                function N(W, M) {
                    if (M === void 0 && (M = {}), F.call(this), !W) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var H = M.bubbles,
                        pe = M.cancelable,
                        ge = M.data,
                        Ne = M.origin,
                        Ve = M.lastEventId,
                        pt = M.ports;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.canncelBubble = !1, this.bubbles = H ? Boolean(H) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof ge > "u" ? null : ge, this.lastEventId = "" + (Ve || "")
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Ht = function(F) {
                function N(W, M) {
                    if (M === void 0 && (M = {}), F.call(this), !W) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var H = M.bubbles,
                        pe = M.cancelable,
                        ge = M.code,
                        Ne = M.reason,
                        Ve = M.wasClean;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = H ? Boolean(H) : !1, this.code = typeof ge == "number" ? parseInt(ge, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke);

        function _(F) {
            var N = F.type,
                W = F.target,
                M = new dt(N);
            return W && (M.target = W, M.srcElement = W, M.currentTarget = W), M
        }

        function l(F) {
            var N = F.type,
                W = F.origin,
                M = F.data,
                H = F.target,
                pe = new Bt(N, {
                    data: M,
                    origin: W
                });
            return H && (pe.target = H, pe.srcElement = H, pe.currentTarget = H), pe
        }

        function g(F) {
            var N = F.code,
                W = F.reason,
                M = F.type,
                H = F.target,
                pe = F.wasClean;
            pe || (pe = N === Te.CLOSE_NORMAL || N === Te.CLOSE_NO_STATUS);
            var ge = new Ht(M, {
                code: N,
                reason: W,
                wasClean: pe
            });
            return H && (ge.target = H, ge.srcElement = H, ge.currentTarget = H), ge
        }

        function S(F, N, W) {
            F.readyState = Me.CLOSING;
            var M = Se.serverLookup(F.url),
                H = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: W
                }),
                pe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: W
                });
            je(function() {
                Se.removeWebSocket(F, F.url), F.readyState = Me.CLOSED, F.dispatchEvent(H), F.dispatchEvent(pe), M && M.dispatchEvent(H, M)
            }, F)
        }

        function R(F, N, W) {
            F.readyState = Me.CLOSING;
            var M = Se.serverLookup(F.url),
                H = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: W,
                    wasClean: !1
                }),
                pe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: W,
                    wasClean: !1
                }),
                ge = _({
                    type: "error",
                    target: F.target
                });
            je(function() {
                Se.removeWebSocket(F, F.url), F.readyState = Me.CLOSED, F.dispatchEvent(ge), F.dispatchEvent(H), F.dispatchEvent(pe), M && M.dispatchEvent(H, M)
            }, F)
        }

        function L(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var B = new WeakMap;

        function te(F) {
            if (B.has(F)) return B.get(F);
            var N = new Proxy(F, {
                get: function(M, H) {
                    return H === "close" ? function(ge) {
                        ge === void 0 && (ge = {});
                        var Ne = ge.code || Te.CLOSE_NORMAL,
                            Ve = ge.reason || "";
                        S(N, Ne, Ve)
                    } : H === "send" ? function(ge) {
                        ge = L(ge), F.dispatchEvent(l({
                            type: "message",
                            data: ge,
                            origin: this.url,
                            target: F
                        }))
                    } : H === "on" ? function(ge, Ne) {
                        F.addEventListener("server::" + ge, Ne)
                    } : H === "target" ? F : M[H]
                }
            });
            return B.set(F, N), N
        }

        function ke(F) {
            var N = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (N ? N.length : 0)
        }

        function de(F) {
            var N = new J(F),
                W = N.pathname,
                M = N.protocol,
                H = N.hash;
            if (!F) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (W || (N.pathname = "/"), M === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (M !== "ws:" && M !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + M + "' is not allowed.");
            if (H !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + H + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function De(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var N = F.map(function(M) {
                    return {
                        count: 1,
                        protocol: M
                    }
                }).reduce(function(M, H) {
                    return M[H.protocol] = (M[H.protocol] || 0) + H.count, M
                }, {}),
                W = Object.keys(N).filter(function(M) {
                    return N[M] > 1
                });
            if (W.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + W[0] + "' is duplicated.");
            return F
        }
        var Me = function(F) {
            function N(M, H) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = de(M), H = De(H), this.protocol = H[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var pe = te(this),
                    ge = Se.attachWebSocket(pe, this.url);
                je(function() {
                    if (ge)
                        if (ge.options.verifyClient && typeof ge.options.verifyClient == "function" && !ge.options.verifyClient()) this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(_({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (ge.options.selectProtocol && typeof ge.options.selectProtocol == "function") {
                                var Ve = ge.options.selectProtocol(H),
                                    pt = Ve !== "",
                                    Ft = H.indexOf(Ve) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(_({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: Te.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Ve
                            }
                            this.readyState = N.OPEN, this.dispatchEvent(_({
                                type: "open",
                                target: this
                            })), ge.dispatchEvent(_({
                                type: "connection"
                            }), pe)
                        }
                    else this.readyState = N.CLOSED, this.dispatchEvent(_({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var W = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return W.onopen.get = function() {
                return this._onopen
            }, W.onmessage.get = function() {
                return this._onmessage
            }, W.onclose.get = function() {
                return this._onclose
            }, W.onerror.get = function() {
                return this._onerror
            }, W.onopen.set = function(M) {
                this.removeEventListener("open", this._onopen), this._onopen = M, this.addEventListener("open", M)
            }, W.onmessage.set = function(M) {
                this.removeEventListener("message", this._onmessage), this._onmessage = M, this.addEventListener("message", M)
            }, W.onclose.set = function(M) {
                this.removeEventListener("close", this._onclose), this._onclose = M, this.addEventListener("close", M)
            }, W.onerror.set = function(M) {
                this.removeEventListener("error", this._onerror), this._onerror = M, this.addEventListener("error", M)
            }, N.prototype.send = function(H) {
                var pe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var ge = l({
                        type: "server::message",
                        origin: this.url,
                        data: L(H)
                    }),
                    Ne = Se.serverLookup(this.url);
                Ne && je(function() {
                    pe.dispatchEvent(ge, H)
                }, Ne)
            }, N.prototype.close = function(H, pe) {
                if (H !== void 0 && (typeof H != "number" || H !== 1e3 && (H < 3e3 || H > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + H + " is neither.");
                if (pe !== void 0) {
                    var ge = ke(pe);
                    if (ge > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === N.CLOSING || this.readyState === N.CLOSED)) {
                    var Ne = te(this);
                    this.readyState === N.CONNECTING ? R(Ne, H || Te.CLOSE_ABNORMAL, pe) : S(Ne, H || Te.CLOSE_NO_STATUS, pe)
                }
            }, Object.defineProperties(N.prototype, W), N
        }(be);
        Me.CONNECTING = 0, Me.prototype.CONNECTING = Me.CONNECTING, Me.OPEN = 1, Me.prototype.OPEN = Me.OPEN, Me.CLOSING = 2, Me.prototype.CLOSING = Me.CLOSING, Me.CLOSED = 3, Me.prototype.CLOSED = Me.CLOSED;
        var nt = function(F) {
            return F.reduce(function(N, W) {
                return N.indexOf(W) > -1 ? N : N.concat(W)
            }, [])
        };

        function Ct() {
            return typeof window < "u" ? window : typeof process == "object" && typeof iC == "function" && typeof vt == "object" ? vt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(F) {
                function N(W, M) {
                    M === void 0 && (M = rn), F.call(this);
                    var H = new J(W);
                    H.pathname || (H.pathname = "/"), this.url = H.toString(), this.originalWebSocket = null;
                    var pe = Se.attachServer(this, this.url);
                    if (!pe) throw this.dispatchEvent(_({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, M), this.options.mock && this.mockWebsocket()
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket = M.WebSocket, M.WebSocket = Me
                }, N.prototype.restoreWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket !== null && (M.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(M) {
                    M === void 0 && (M = function() {}), this.options.mock && this.restoreWebsocket(), Se.removeServer(this.url), typeof M == "function" && M()
                }, N.prototype.on = function(M, H) {
                    this.addEventListener(M, H)
                }, N.prototype.close = function(M) {
                    M === void 0 && (M = {});
                    var H = M.code,
                        pe = M.reason,
                        ge = M.wasClean,
                        Ne = Se.websocketsLookup(this.url);
                    Se.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = Me.CLOSED, Ve.dispatchEvent(g({
                            type: "close",
                            target: Ve.target,
                            code: H || Te.CLOSE_NORMAL,
                            reason: pe || "",
                            wasClean: ge
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(M, H, pe) {
                    var ge = this;
                    pe === void 0 && (pe = {});
                    var Ne = pe.websockets;
                    Ne || (Ne = Se.websocketsLookup(this.url)), typeof pe != "object" || arguments.length > 3 ? (H = Array.prototype.slice.call(arguments, 1, arguments.length), H = H.map(function(Ve) {
                        return L(Ve)
                    })) : H = L(H), Ne.forEach(function(Ve) {
                        Array.isArray(H) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: M,
                            data: H,
                            origin: ge.url,
                            target: Ve.target
                        })].concat(H)) : Ve.dispatchEvent(l({
                            type: M,
                            data: H,
                            origin: ge.url,
                            target: Ve.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return Se.websocketsLookup(this.url)
                }, N.prototype.to = function(M, H, pe) {
                    var ge = this;
                    pe === void 0 && (pe = []);
                    var Ne = this,
                        Ve = nt(pe.concat(Se.websocketsLookup(this.url, M, H)));
                    return {
                        to: function(pt, Ft) {
                            return ge.to.call(ge, pt, Ft, Ve)
                        },
                        emit: function(Ft, Ye) {
                            Ne.emit(Ft, Ye, {
                                websockets: Ve
                            })
                        }
                    }
                }, N.prototype.in = function() {
                    for (var M = [], H = arguments.length; H--;) M[H] = arguments[H];
                    return this.to.apply(null, M)
                }, N.prototype.simulate = function(M) {
                    var H = Se.websocketsLookup(this.url);
                    M === "error" && H.forEach(function(pe) {
                        pe.readyState = Me.CLOSED, pe.dispatchEvent(_({
                            type: "error"
                        }))
                    })
                }, N
            }(be);
        ct.of = function(N) {
            return new ct(N)
        };
        var yt = function(F) {
            function N(M, H) {
                var pe = this;
                M === void 0 && (M = "socket.io"), H === void 0 && (H = ""), F.call(this), this.binaryType = "blob";
                var ge = new J(M);
                ge.pathname || (ge.pathname = "/"), this.url = ge.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof H == "string" || typeof H == "object" && H !== null ? this.protocol = H : Array.isArray(H) && H.length > 0 && (this.protocol = H[0]);
                var Ne = Se.attachWebSocket(this, this.url);
                je(function() {
                    Ne ? (this.readyState = N.OPEN, Ne.dispatchEvent(_({
                        type: "connection"
                    }), Ne, this), Ne.dispatchEvent(_({
                        type: "connect"
                    }), Ne, this), this.dispatchEvent(_({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = N.CLOSED, this.dispatchEvent(_({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ve) {
                    pe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ve.target,
                        code: Ve.code
                    }))
                })
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var W = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var H = Se.serverLookup(this.url);
                    return Se.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), H && H.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    }), H), this
                }
            }, N.prototype.disconnect = function() {
                return this.close()
            }, N.prototype.emit = function(H) {
                for (var pe = [], ge = arguments.length - 1; ge-- > 0;) pe[ge] = arguments[ge + 1];
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ne = l({
                        type: H,
                        origin: this.url,
                        data: pe
                    }),
                    Ve = Se.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(pe)), this
            }, N.prototype.send = function(H) {
                return this.emit("message", H), this
            }, W.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var M = this,
                    H = Se.serverLookup(this.url);
                if (!H) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(ge, Ne) {
                        return H.emit(ge, Ne, {
                            websockets: Se.websocketsLookup(M.url, null, M)
                        }), M
                    },
                    to: function(ge) {
                        return H.to(ge, M)
                    },
                    in: function(ge) {
                        return H.in(ge, M)
                    }
                }
            }, N.prototype.on = function(H, pe) {
                return this.addEventListener(H, pe), this
            }, N.prototype.off = function(H, pe) {
                this.removeEventListener(H, pe)
            }, N.prototype.hasListeners = function(H) {
                var pe = this.listeners[H];
                return Array.isArray(pe) ? !!pe.length : !1
            }, N.prototype.join = function(H) {
                Se.addMembershipToRoom(this, H)
            }, N.prototype.leave = function(H) {
                Se.removeMembershipFromRoom(this, H)
            }, N.prototype.to = function(H) {
                return this.broadcast.to(H)
            }, N.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, N.prototype.dispatchEvent = function(H) {
                for (var pe = this, ge = [], Ne = arguments.length - 1; Ne-- > 0;) ge[Ne] = arguments[Ne + 1];
                var Ve = H.type,
                    pt = this.listeners[Ve];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    ge.length > 0 ? Ft.apply(pe, ge) : Ft.call(pe, H.data ? H.data : H)
                })
            }, Object.defineProperties(N.prototype, W), N
        }(be);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(N, W) {
            return new yt(N, W)
        };
        bt.connect = function(N, W) {
            return bt(N, W)
        };
        var Kt = ct,
            Je = Me,
            Lt = bt;
        n.Server = Kt, n.WebSocket = Je, n.SocketIO = Lt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(ic, ic.exports);
var rC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(b, k) {
            var A = b.x - k.x,
                D = b.y - k.y;
            return A * A + D * D
        }

        function n(b, k, A) {
            var D = k.x,
                V = k.y,
                Y = A.x - D,
                ie = A.y - V;
            if (Y !== 0 || ie !== 0) {
                var K = ((b.x - D) * Y + (b.y - V) * ie) / (Y * Y + ie * ie);
                K > 1 ? (D = A.x, V = A.y) : K > 0 && (D += Y * K, V += ie * K)
            }
            return Y = b.x - D, ie = b.y - V, Y * Y + ie * ie
        }

        function i(b, k) {
            for (var A = b[0], D = [A], V, Y = 1, ie = b.length; Y < ie; Y++) V = b[Y], e(V, A) > k && (D.push(V), A = V);
            return A !== V && D.push(V), D
        }

        function o(b, k, A, D, V) {
            for (var Y = D, ie, K = k + 1; K < A; K++) {
                var re = n(b[K], b[k], b[A]);
                re > Y && (ie = K, Y = re)
            }
            Y > D && (ie - k > 1 && o(b, k, ie, D, V), V.push(b[ie]), A - ie > 1 && o(b, ie, A, D, V))
        }

        function f(b, k) {
            var A = b.length - 1,
                D = [b[0]];
            return o(b, 0, A, k, D), D.push(b[A]), D
        }

        function v(b, k, A) {
            if (b.length <= 2) return b;
            var D = k !== void 0 ? k * k : 1;
            return b = A ? b : i(b, D), b = f(b, D), b
        }
        t.exports = v, t.exports.default = v
    })()
})(rC);
const sC = Et.View.extend({
    el: "#banner",
    template: at.template(`
        <div class="banner-image"></div>
        <div class="banner-text"></div>
        <div class="banner-cta"></div>
    `),
    events: {
        click: "onBannerClick"
    },
    bindings: {
        ":el": {
            attributes: [{
                name: "class",
                observe: ["visible", "theme"],
                onGet([t, e]) {
                    let n = e || "no-theme";
                    return t && (n += " show"), n
                }
            }]
        },
        ".banner-text": "copy",
        ".banner-cta": "cta"
    },
    initialize() {
        this.render(), this.listenTo(this.model, "change:visible", this.visibleDidChange)
    },
    onBannerClick() {
        vh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            ae(window).trigger("resize")
        }, .5)
    },
    getCampaign() {
        const t = this.model.get("url");
        if (!t) return "";
        let e = "";
        return t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || ""), e
    }
});
class ni {
    static get isVisible() {
        return this.view ? this.view.state === "on" : !1
    }
    static async update(e, n) {
        if (!n || n.lobbyState !== "PostGame") {
            this.hide();
            return
        }
        this.view || await this.init(e, n), this.show()
    }
    static async init(e) {
        if (!e) {
            this.bannerData = !1;
            return
        }
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new sC({
            model: new ot.Model(this.bannerData)
        }), this.isInitialized = !0)
    }
    static show() {
        !this.view || this.view.model.set({
            visible: !0
        })
    }
    static hide() {
        !this.view || this.view.model.set({
            visible: !1
        })
    }
    static async loadBannerData(e) {
        try {
            const i = await (await fetch({
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp3-pollposition/",
                MODE: "production",
                DEV: !1,
                PROD: !0
            }.TV_BANNERS_URL)).json();
            return !i || !i.postGameBanners ? !1 : i.postGameBanners[e]
        } catch (n) {
            return console.error("Unable to load banner data", n), !1
        }
    }
}
st(ni, "view", null), st(ni, "isInitialized", !1), st(ni, "bannerConfig", null);
var oC = {};
(function(t) {
    (function(e) {
        e(Pi.exports, ot, t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(m) {
            m = e.map(e.flatten([m]), function(P) {
                return e.defaults({}, P, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(m)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(m, P) {
                if (e.isObject(P)) {
                    e.each(P, function(se, ye) {
                        this.unstickit(m, ye)
                    }, this);
                    return
                }
                var q = [],
                    le = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(m && se.model !== m) && !(P && se.config.selector != P)) return se.model.off(se.event, se.fn), le.push(se.config._destroy), q.push(se.model), !0
                }), e.invoke(e.uniq(q), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(le), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (m ? "." + m.cid : ""), P)
            },
            stickit: function(m, P) {
                var q = m || this.model,
                    le = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(q, le);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var ye = this;
                    return this.unstickit(), se && (ye = se.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(m, P, q) {
                var le = m || this.model,
                    se = ".stickit." + le.cid;
                if (q = q || {}, e.isObject(P)) {
                    var ye = P;
                    e.each(ye, function(J, je) {
                        this.addBinding(le, je, J)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(le, P), !!d.length) {
                    e.isString(q) && (q = {
                        observe: q
                    }), e.isFunction(q.observe) && (q.observe = q.observe.call(this));
                    var _e = V(d, q),
                        Oe = _e.observe;
                    _e.selector = P, _e.view = this;
                    var Pe = _e.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: _e
                        }, _e.setOptions);
                    if (_e._destroy = function() {
                            v.call(this, _e.destroy, d, le, _e)
                        }, Y(d, _e, le, Oe), K(d, _e, le, Oe), ie(d, _e, le), Oe) {
                        e.each(_e.events, function(J) {
                            var je = J + se,
                                U = function(Ae) {
                                    var be = v.call(this, _e.getVal, d, Ae, _e, o.call(arguments, 1)),
                                        we = b(_e.updateModel, be, Ae, _e);
                                    we && A(le, Oe, be, lt, _e)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(je, oe, e.bind(U, this))
                        }, this), e.each(e.flatten([Oe]), function(J) {
                            k(le, "change:" + J, _e, function(je, U, oe) {
                                var Ae = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var be = D(le, Oe, _e);
                                    re(d, _e, be, le)
                                }
                            })
                        });
                        var Be = D(le, Oe, _e);
                        re(d, _e, Be, le, !0)
                    }
                    v.call(this, _e.initialize, d, le, _e)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var o = [].slice,
            f = function(m, P) {
                var q = (P || "").split("."),
                    le = e.reduce(q, function(se, ye) {
                        return se[ye]
                    }, m);
                return le == null ? m : le
            },
            v = function(m) {
                if (m = e.isString(m) ? f(this, m) : m, m) return m.apply(this, o.call(arguments, 1))
            },
            b = function(m, P, q) {
                if (e.isBoolean(m)) return m;
                if (e.isFunction(m) || e.isString(m)) {
                    var le = e.last(arguments).view;
                    return v.apply(le, arguments)
                }
                return !1
            },
            k = function(m, P, q, le) {
                var se = q.view;
                m.on(P, le, se), se._modelBindings.push({
                    model: m,
                    event: P,
                    fn: le,
                    config: q
                })
            },
            A = function(m, P, q, le, se) {
                var ye = {},
                    d = se.view;
                se.onSet && (q = v.call(d, se.onSet, q, se)), se.set ? v.call(d, se.set, P, q, le, se) : (ye[P] = q, e.isArray(P) && e.isArray(q) && (ye = e.reduce(P, function(_e, Oe, Pe) {
                    return _e[Oe] = e.has(q, Pe) ? q[Pe] : null, _e
                }, {})), m.set(ye, le))
            },
            D = function(m, P, q) {
                var le = q.view,
                    se = function(_e) {
                        return m[q.escape ? "escape" : "get"](_e)
                    },
                    ye = function(_e) {
                        return _e == null ? "" : _e
                    },
                    d = e.isArray(P) ? e.map(P, se) : se(P);
                return q.onGet && (d = v.call(le, q.onGet, d, q)), e.isArray(d) ? e.map(d, ye) : ye(d)
            },
            V = i.getConfiguration = function(m, P) {
                var q = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(se, ye, d, _e) {
                        se[_e.updateMethod] && se[_e.updateMethod](ye)
                    },
                    getVal: function(se, ye, d) {
                        return se[d.updateMethod]()
                    }
                }];
                q = q.concat(e.filter(i._handlers, function(se) {
                    return m.is(se.selector)
                })), q.push(P);
                var le = e.extend.apply(e, q);
                return e.has(le, "updateView") || (le.updateView = !le.visible), le
            },
            Y = function(m, P, q, le) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ye;
                    var _e = "",
                        Oe = d.observe || (d.observe = le),
                        Pe = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Be = D(q, Oe, d);
                            d.name === "class" ? (m.removeClass(_e).addClass(Be), _e = Be) : m[lt](d.name, Be)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        k(q, "change:" + lt, P, Pe)
                    }), Pe()
                })
            },
            ie = function(m, P, q, le) {
                e.each(P.classes || [], function(se, ye) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var d = se.observe,
                        _e = function() {
                            var Oe = D(q, d, se);
                            m.toggleClass(ye, !!Oe)
                        };
                    e.each(e.flatten([d]), function(Oe) {
                        k(q, "change:" + Oe, P, _e)
                    }), _e()
                })
            },
            K = function(m, P, q, le) {
                if (P.visible != null) {
                    var se = P.view,
                        ye = function() {
                            var d = P.visible,
                                _e = P.visibleFn,
                                Oe = D(q, le, P),
                                Pe = !!Oe;
                            (e.isFunction(d) || e.isString(d)) && (Pe = !!v.call(se, d, Oe, P)), _e ? v.call(se, _e, m, Pe, P) : m.toggle(Pe)
                        };
                    e.each(e.flatten([le]), function(d) {
                        k(q, "change:" + d, P, ye)
                    }), ye()
                }
            },
            re = function(m, P, q, le, se) {
                var ye = P.view;
                !b(P.updateView, q, P) || (v.call(ye, P.update, m, q, le, P), se || v.call(ye, P.afterUpdate, m, q, P))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(m, P) {
                m.val(P)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(m, P) {
                m.val(P)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(m, P) {
                m.filter('[value="' + P + '"]').prop("checked", !0)
            },
            getVal: function(m) {
                return m.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(m, P, q, le) {
                if (m.length > 1) P || (P = []), m.each(function(ye, d) {
                    var _e = n.$(d),
                        Oe = e.contains(P, _e.val());
                    _e.prop("checked", Oe)
                });
                else {
                    var se = e.isBoolean(P) ? P : P === m.val();
                    m.prop("checked", se)
                }
            },
            getVal: function(m) {
                var P;
                if (m.length > 1) P = e.reduce(m, function(le, se) {
                    var ye = n.$(se);
                    return ye.prop("checked") && le.push(ye.val()), le
                }, []);
                else {
                    P = m.prop("checked");
                    var q = m.val();
                    q !== "on" && q != null && (P = P ? m.val() : null)
                }
                return P
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(m, P, q, le) {
                var se, ye = le.selectOptions,
                    d = ye && ye.collection || void 0,
                    _e = m.prop("multiple");
                if (!ye) {
                    ye = {};
                    var Oe = function(he) {
                        return he.map(function(Se, Te) {
                            var $e = n.$(Te).data("stickit-bind-val");
                            return {
                                value: $e !== void 0 ? $e : Te.value,
                                label: Te.text
                            }
                        }).get()
                    };
                    m.find("optgroup").length ? (d = {
                        opt_labels: []
                    }, m.find("> option").length && (d.opt_labels.push(void 0), e.each(m.find("> option"), function(he) {
                        d[void 0] = Oe(n.$(he))
                    })), e.each(m.find("optgroup"), function(he) {
                        var Se = n.$(he).attr("label");
                        d.opt_labels.push(Se), d[Se] = Oe(n.$(he).find("option"))
                    })) : d = Oe(m.find("option"))
                }
                ye.valuePath = ye.valuePath || "value", ye.labelPath = ye.labelPath || "label", ye.disabledPath = ye.disabledPath || "disabled";
                var Pe = function(he, Se, Te) {
                    e.each(he, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            Bt = function(S, R, L) {
                                Ke.text(S), dt = R, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), L === !0 && Ke.prop("disabled", "disabled")
                            },
                            Ht, _, l;
                        $e === "__default__" ? (Ht = Te.label, _ = Te.value, l = Te.disabled) : (Ht = f($e, ye.labelPath), _ = f($e, ye.valuePath), l = f($e, ye.disabledPath)), Bt(Ht, _, l);
                        var g = function() {
                            return !_e && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        g() ? Ke.prop("selected", !0) : _e && e.isArray(Te) && e.each(Te, function(S) {
                            e.isObject(S) && (S = f(S, ye.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Ke.prop("selected", !0)
                        }), Se.append(Ke)
                    })
                };
                if (m.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = v.call(this, d, m, le) : se = d;
                if (se instanceof n.Collection) {
                    var Be = se,
                        J = function() {
                            var he = D(q, le.observe, le);
                            v.call(this, le.update, m, he, q, le)
                        },
                        je = function() {
                            Be.off("add remove reset sort", J)
                        },
                        U = function() {
                            je(), Be.off("stickit:selectRefresh"), q.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", je, this), Be.on("add remove reset sort", J, this), q.trigger("stickit:selectRefresh"), q.once("stickit:selectRefresh", function() {
                        q.off("stickit:unstuck", U)
                    }), q.once("stickit:unstuck", U, this), se = se.toJSON()
                }
                if (ye.defaultOption) {
                    var oe = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, m, le) : ye.defaultOption;
                    Pe(["__default__"], m, oe)
                }
                if (e.isArray(se)) Pe(se, m, P);
                else if (se.opt_labels) e.each(se.opt_labels, function(he) {
                    var Se = n.$("<optgroup/>").attr("label", he);
                    Pe(se[he], Se, P), m.append(Se)
                });
                else {
                    var Ae = [],
                        be;
                    for (var we in se) be = {}, be[ye.valuePath] = we, be[ye.labelPath] = se[we], Ae.push(be);
                    Ae = e.sortBy(Ae, ye.comparator || ye.labelPath), Pe(Ae, m, P)
                }
            },
            getVal: function(m) {
                var P = m.find("option:selected");
                return m.prop("multiple") ? e.map(P, function(q) {
                    return n.$(q).data("stickit-bind-val")
                }) : P.data("stickit-bind-val")
            }
        }]), i
    })
})(oC);
const aC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    Wu = Et.View.extend({
        template: at.template(aC),
        model: new ot.Model({}),
        className() {
            let t = "button-group btn-group";
            return this.options.block !== !1 && (t += " btn-block"), t
        },
        events: {
            "click .button": "onClick"
        },
        bindings: {
            ":el": {
                observe: "visible",
                visible(t) {
                    return t !== !1
                },
                visibleFn(t, e) {
                    t.css("display", e ? "" : "none")
                },
                attributes: [{
                    name: "class",
                    observe: ["className", "selected", "disabled", "active"],
                    onGet([t, e, n, i]) {
                        let o = "";
                        return t && (o += t), e && (o += " selected"), n && (o += " disabled"), i && (o += " active"), o
                    }
                }]
            },
            "button:first": {
                observe: ["text", "html", "label"],
                updateMethod: "html",
                onGet([t, e, n]) {
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || ae("<div />").text(t).html()
                },
                attributes: [{
                    name: "disabled",
                    observe: "disabled"
                }, {
                    name: "data-action",
                    observe: "action",
                    onGet(t) {
                        return t || "choose"
                    }
                }, {
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "data-key",
                    observe: "key"
                }, {
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        if (!t) return "";
                        let e = "";
                        return t.text && (e += `color: ${t.text};`), t.background && (e += `background-color: ${t.background};`), e
                    }
                }, {
                    name: "type",
                    observe: "action",
                    onGet(t) {
                        return t === "submit" ? "submit" : "button"
                    }
                }]
            },
            ".censor-button": {
                observe: "censorable",
                visible: !0,
                visibleFn(t, e) {
                    e || t.remove()
                },
                attributes: [{
                    name: "data-index",
                    observe: "index"
                }, {
                    name: "class",
                    observe: ["className", "isWarned"],
                    onGet(t) {
                        if (!t) return null;
                        let e = "";
                        return t[0] && (e += t[0]), t[1] && (e += " isWarned"), e
                    }
                }]
            }
        },
        onRender() {
            this.model.set("index", this.getOption("index")), this.getOption("action") && this.model.set("action", this.getOption("action")), this.stickit()
        },
        onClick(t) {
            const e = ae(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ti, Vs, rs = typeof Map == "function" ? new Map : (Ti = [], Vs = [], {
        has: function(t) {
            return Ti.indexOf(t) > -1
        },
        get: function(t) {
            return Vs[Ti.indexOf(t)]
        },
        set: function(t, e) {
            Ti.indexOf(t) === -1 && (Ti.push(t), Vs.push(e))
        },
        delete: function(t) {
            var e = Ti.indexOf(t);
            e > -1 && (Ti.splice(e, 1), Vs.splice(e, 1))
        }
    }),
    Xu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Xu = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function lC(t) {
    var e = rs.get(t);
    e && e.destroy()
}

function cC(t) {
    var e = rs.get(t);
    e && e.update()
}
var Kr = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Kr = function(t) {
    return t
}).destroy = function(t) {
    return t
}, Kr.update = function(t) {
    return t
}) : ((Kr = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !rs.has(i)) {
                var o, f = null,
                    v = null,
                    b = null,
                    k = function() {
                        i.clientWidth !== v && Y()
                    },
                    A = function(ie) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", Y, !1), i.removeEventListener("keyup", Y, !1), i.removeEventListener("autosize:destroy", A, !1), i.removeEventListener("autosize:update", Y, !1), Object.keys(ie).forEach(function(K) {
                            i.style[K] = ie[K]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", A, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", Y, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", Y, !1), i.addEventListener("autosize:update", Y, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
                    destroy: A,
                    update: Y
                }), (o = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : o.resize === "both" && (i.style.resize = "horizontal"), f = o.boxSizing === "content-box" ? -(parseFloat(o.paddingTop) + parseFloat(o.paddingBottom)) : parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), isNaN(f) && (f = 0), Y()
            }

            function D(ie) {
                var K = i.style.width;
                i.style.width = "0px", i.style.width = K, i.style.overflowY = ie
            }

            function V() {
                if (i.scrollHeight !== 0) {
                    var ie = function(re) {
                            for (var m = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && m.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return m
                        }(i),
                        K = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", v = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), K && (document.documentElement.scrollTop = K)
                }
            }

            function Y() {
                V();
                var ie = Math.round(parseFloat(i.style.height)),
                    K = window.getComputedStyle(i, null),
                    re = K.boxSizing === "content-box" ? Math.round(parseFloat(K.height)) : i.offsetHeight;
                if (re < ie ? K.overflowY === "hidden" && (D("scroll"), V(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : K.overflowY !== "hidden" && (D("hidden"), V(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), b !== re) {
                    b = re;
                    var m = Xu("autosize:resized");
                    try {
                        i.dispatchEvent(m)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], lC), t
}, Kr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], cC), t
});
var rc = Kr;
const uC = `<form>\r
    <div class="form-group">\r
        <div class="inputGroup">\r
            <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>\r
            <span class="inlineSubmit">\r
                <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button>\r
            </span>\r
            <span id="helpBlock2" class="help-block errorText"></span>\r
            <div class="charCountDisplay"><span class="charRemaining">70</span></div>\r
        </div>\r
    </div>\r
</form>`,
    to = Et.View.extend({
        tagName: "div",
        className: "input",
        model: new ot.Model({}),
        template: at.template(uC),
        events: {
            "keypress textarea": "onKeypress",
            "click .inlineSubmitButton": "onSubmitClick",
            "input textarea": "onInputChange"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "hidden",
                    onGet(t) {
                        return t === !0 ? "display: none;" : "display: block;"
                    }
                }, {
                    name: "class",
                    observe: "className",
                    onGet(t) {
                        return `input ${t!==void 0?t:""}`
                    }
                }]
            },
            textarea: {
                attributes: [{
                    name: "maxlength",
                    observe: "maxLength"
                }, {
                    name: "placeholder",
                    observe: "placeholder"
                }, {
                    name: "autocapitalize",
                    observe: "autocapitalize"
                }, {
                    name: "class",
                    observe: "className",
                    onGet(t) {
                        return `form-control ${t!==void 0?t:""}`
                    }
                }]
            },
            ".inputGroup": {
                attributes: [{
                    name: "class",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "input-group" : ""
                    }
                }]
            },
            ".inlineSubmit": {
                attributes: [{
                    name: "class",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "input-group-btn" : ""
                    }
                }, {
                    name: "style",
                    observe: "inlineSubmit",
                    onGet(t) {
                        return t === !0 ? "" : "display:none;"
                    }
                }]
            },
            ".inlineSubmitText": {
                observe: "inlineSubmitText",
                onGet(t) {
                    return t !== void 0 ? t : "Send"
                }
            },
            ".form-group": {
                attributes: [{
                    name: "class",
                    observe: "error",
                    onGet(t) {
                        return t ? "has-error" : ""
                    }
                }]
            },
            ".errorText": {
                observe: "error",
                updateMethod: "html",
                visible: !0,
                updateView: !0,
                onGet(t) {
                    return t ? typeof t == "object" ? t.html ? t.html : ae("<div />").text(t.text).html() : t : null
                }
            },
            ".charRemaining": "remaining",
            ".maxChars": "maxLength",
            ".charCountDisplay": {
                observe: ["maxLength", "counter"],
                visible(t) {
                    return t[0] && t[1]
                }
            }
        },
        render() {
            this.$el.html(this.template()), this.stickit(), this.model.set("remaining", this.model.get("maxLength"))
        },
        onAttach() {
            this.getOption("preventAutosize") || rc(ae("textarea"))
        },
        onSubmitClick() {
            return ae("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (ae("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            ae(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = ae(this.$el).find("textarea");
            ae(t).val(""), this.getOption("preventAutosize") || rc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = ae(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return nn.sanitize(this.getValue())
        },
        sanitize(t) {
            return nn.sanitize(t)
        },
        sanitizeInput(t) {
            return nn.sanitizeInput(t)
        }
    }),
    hC = '<div class="text"></div>',
    Bi = Et.View.extend({
        tagName: "div",
        template: at.template(hC),
        model: new ot.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : ae("<div />").text(t).html()
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "background",
                    onGet(t) {
                        return t ? `background-color: ${t};` : ""
                    }
                }, {
                    name: "class",
                    observe: "className"
                }]
            }
        },
        onRender() {
            this.stickit()
        }
    }),
    fi = Et.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? to : t.get("type") === "text" ? Bi : Wu
        },
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block", "action"])
        },
        childViewOptions(t, e) {
            let n = !0,
                i;
            return t.get("block") !== void 0 ? n = t.get("block") : this.getOption("block") !== void 0 && (n = this.getOption("block")), t.get("action") !== void 0 ? i = t.get("action") : this.getOption("action") !== void 0 && (i = this.getOption("action")), {
                block: n,
                action: i,
                index: t.get("key") !== void 0 ? t.get("key") : e
            }
        }
    });
let sc = {};

function Yu(t, ...e) {
    !sc[t] || sc[t].map(n => n(...e))
}
let Jr, Us;

function Mi() {
    return Jr
}

function vo() {
    return Us
}

function dC(t) {
    if (Jr = document.getElementById(t) || t || document.querySelector("canvas"), !Jr) throw Error("You must provide a canvas element for the game");
    return Us = Jr.getContext("2d"), Us.imageSmoothingEnabled = !1, Yu("init"), {
        canvas: Jr,
        context: Us
    }
}
class rl {
    constructor({
        spriteSheet: e,
        frames: n,
        frameRate: i,
        loop: o = !0
    } = {}) {
        this.spriteSheet = e, this.frames = n, this.frameRate = i, this.loop = o;
        let {
            width: f,
            height: v,
            margin: b = 0
        } = e.frame;
        this.width = f, this.height = v, this.margin = b, this._f = 0, this._a = 0
    }
    clone() {
        return yo(this)
    }
    reset() {
        this._f = 0, this._a = 0
    }
    update(e = 1 / 60) {
        if (!(!this.loop && this._f == this.frames.length - 1))
            for (this._a += e; this._a * this.frameRate >= 1;) this._f = ++this._f % this.frames.length, this._a -= 1 / this.frameRate
    }
    render({
        x: e,
        y: n,
        width: i = this.width,
        height: o = this.height,
        context: f = vo()
    } = {}) {
        let v = this.frames[this._f] / this.spriteSheet._f | 0,
            b = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, b * this.width + (b * 2 + 1) * this.margin, v * this.height + (v * 2 + 1) * this.margin, this.width, this.height, e, n, i, o)
    }
}

function yo(t) {
    return new rl(t)
}
yo.prototype = rl.prototype;
yo.class = rl;
const fC = () => {};

function pC() {
    let t = Mi();
    vo().clearRect(0, 0, t.width, t.height)
}

function gC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let o = 0,
        f = 1e3 / t,
        v = 1 / t,
        b = e ? pC : fC,
        k, A, D, V, Y;
    const ie = window.performance || Date;

    function K() {
        if (A = requestAnimationFrame(K), D = ie.now(), V = D - k, k = D, !(V > 1e3)) {
            for (Yu("tick"), o += V; o >= f;) Y.update(v), o -= f;
            b(), Y.render()
        }
    }
    return Y = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = ie.now(), this.isStopped = !1, requestAnimationFrame(K)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(A)
        },
        _frame: K,
        set _last(re) {
            k = re
        }
    }, Y
}
class mC {
    constructor({
        create: e,
        maxSize: n = 1024
    } = {}) {
        let i;
        if (!e || !(i = e()) || !(i.update && i.init && i.isAlive)) throw Error("Must provide create() function which returns an object with init(), update(), and isAlive() functions");
        this._c = e, this.objects = [e()], this.size = 0, this.maxSize = n
    }
    get(e = {}) {
        if (this.size === this.objects.length) {
            if (this.size === this.maxSize) return;
            for (let i = 0; i < this.size && this.objects.length < this.maxSize; i++) this.objects.push(this._c())
        }
        let n = this.objects[this.size];
        return this.size++, n.init(e), n
    }
    getAliveObjects() {
        return this.objects.slice(0, this.size)
    }
    clear() {
        this.size = this.objects.length = 0, this.objects.push(this._c())
    }
    update(e) {
        let n, i = !1;
        for (let o = this.size; o--;) n = this.objects[o], n.update(e), n.isAlive() || (i = !0, this.size--);
        i && this.objects.sort((o, f) => f.isAlive() - o.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
mC.prototype;

function oc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        o = e.y + e.height / 2,
        f = t.y < o && t.y + t.height >= e.y,
        v = t.y + t.height >= o && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), v && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), v && n.push(3)), n
}
class sl {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let o = Mi();
        this.bounds = i || {
            x: 0,
            y: 0,
            width: o.width,
            height: o.height
        }, this._b = !1, this._d = 0, this._o = [], this._s = [], this._p = null
    }
    clear() {
        this._s.map(function(e) {
            e.clear()
        }), this._b = !1, this._o.length = 0
    }
    get(e) {
        let n = new Set,
            i, o;
        for (; this._s.length && this._b;) {
            for (i = oc(e, this.bounds), o = 0; o < i.length; o++) this._s[i[o]].get(e).forEach(f => n.add(f));
            return Array.from(n)
        }
        return this._o.filter(f => f !== e)
    }
    add() {
        let e, n, i, o;
        for (n = 0; n < arguments.length; n++) {
            if (i = arguments[n], Array.isArray(i)) {
                this.add.apply(this, i);
                continue
            }
            if (this._b) {
                this._a(i);
                continue
            }
            if (this._o.push(i), this._o.length > this.maxObjects && this._d < this.maxDepth) {
                for (this._sp(), e = 0; o = this._o[e]; e++) this._a(o);
                this._o.length = 0
            }
        }
    }
    _a(e, n, i) {
        for (n = oc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = ol({
                bounds: {
                    x: this.bounds.x + (i % 2 === 1 ? e : 0),
                    y: this.bounds.y + (i >= 2 ? n : 0),
                    width: e,
                    height: n
                },
                maxDepth: this.maxDepth,
                maxObjects: this.maxObjects
            }), this._s[i]._d = this._d + 1, this._s[i]._p = this
    }
}

function ol(t) {
    return new sl(t)
}
ol.prototype = sl.prototype;
ol.class = sl;
class al {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return fr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
    }
    clamp(e, n, i, o) {
        this._c = !0, this._a = e, this._b = n, this._d = i, this._e = o
    }
    get x() {
        return this._x
    }
    get y() {
        return this._y
    }
    set x(e) {
        this._x = this._c ? Math.min(Math.max(this._a, e), this._d) : e
    }
    set y(e) {
        this._y = this._c ? Math.min(Math.max(this._b, e), this._e) : e
    }
}

function fr(t, e, n = {}) {
    let i = new al(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
fr.prototype = al.prototype;
fr.class = al;
class ll {
    constructor(e) {
        this.init(e)
    }
    init(e = {}) {
        let {
            x: n,
            y: i,
            dx: o,
            dy: f,
            ddx: v,
            ddy: b,
            width: k,
            height: A,
            image: D
        } = e;
        this.position = fr(n, i), this.velocity = fr(o, f), this.acceleration = fr(v, b), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = vo();
        for (let V in e) this[V] = e[V];
        D && (this.width = k !== void 0 ? k : D.width, this.height = A !== void 0 ? A : D.height), this.sx = 0, this.sy = 0
    }
    get x() {
        return this.position.x
    }
    get y() {
        return this.position.y
    }
    get dx() {
        return this.velocity.x
    }
    get dy() {
        return this.velocity.y
    }
    get ddx() {
        return this.acceleration.x
    }
    get ddy() {
        return this.acceleration.y
    }
    get animations() {
        return this._a
    }
    get viewX() {
        return this.x - this.sx
    }
    get viewY() {
        return this.y - this.sy
    }
    get width() {
        return this._w
    }
    get height() {
        return this._h
    }
    set x(e) {
        this.position.x = e
    }
    set y(e) {
        this.position.y = e
    }
    set dx(e) {
        this.velocity.x = e
    }
    set dy(e) {
        this.velocity.y = e
    }
    set ddx(e) {
        this.acceleration.x = e
    }
    set ddy(e) {
        this.acceleration.y = e
    }
    set animations(e) {
        let n, i;
        this._a = {};
        for (n in e) this._a[n] = e[n].clone(), i = i || this._a[n];
        this.currentAnimation = i, this.width = this.width || i.width, this.height = this.height || i.height
    }
    set viewX(e) {}
    set viewY(e) {}
    set width(e) {
        let n = e < 0 ? -1 : 1;
        this._fx = n, this._w = e * n
    }
    set height(e) {
        let n = e < 0 ? -1 : 1;
        this._fy = n, this._h = e * n
    }
    isAlive() {
        return this.ttl > 0
    }
    collidesWith(e) {
        if (this.rotation || e.rotation) return null;
        let n = this.x - this.width * this.anchor.x,
            i = this.y - this.height * this.anchor.y,
            o = e.x,
            f = e.y;
        return e.anchor && (o -= e.width * e.anchor.x, f -= e.height * e.anchor.y), n < o + e.width && n + this.width > o && i < f + e.height && i + this.height > f
    }
    update(e) {
        this.advance(e)
    }
    render() {
        this.draw()
    }
    playAnimation(e) {
        this.currentAnimation = this.animations[e], this.currentAnimation.loop || this.currentAnimation.reset()
    }
    advance(e) {
        this.velocity = this.velocity.add(this.acceleration, e), this.position = this.position.add(this.velocity, e), this.ttl--, this.currentAnimation && this.currentAnimation.update(e)
    }
    draw() {
        let e = -this.width * this.anchor.x,
            n = -this.height * this.anchor.y;
        if (this.context.save(), this.context.translate(this.viewX, this.viewY), this.rotation && this.context.rotate(this.rotation), this._fx == -1 || this._fy == -1) {
            let i = this.width / 2 + e,
                o = this.height / 2 + n;
            this.context.translate(i, o), this.context.scale(this._fx, this._fy), this.context.translate(-i, -o)
        }
        this.image ? this.context.drawImage(this.image, e, n, this.width, this.height) : this.currentAnimation ? this.currentAnimation.render({
            x: e,
            y: n,
            width: this.width,
            height: this.height,
            context: this.context
        }) : (this.context.fillStyle = this.color, this.context.fillRect(e, n, this.width, this.height)), this.context.restore()
    }
}

function cl(t) {
    return new ll(t)
}
cl.prototype = ll.prototype;
cl.class = ll;

function vC(t) {
    if (+t === t) return t;
    let e = [],
        n = t.split(".."),
        i = +n[0],
        o = +n[1],
        f = i;
    if (i < o)
        for (; f <= o; f++) e.push(f);
    else
        for (; f >= o; f--) e.push(f);
    return e
}
class yC {
    constructor({
        image: e,
        frameWidth: n,
        frameHeight: i,
        frameMargin: o,
        animations: f
    } = {}) {
        if (!e) throw Error("You must provide an Image for the SpriteSheet");
        this.animations = {}, this.image = e, this.frame = {
            width: n,
            height: i,
            margin: o
        }, this._f = e.width / n | 0, this.createAnimations(f)
    }
    createAnimations(e) {
        let n, i;
        for (i in e) {
            let {
                frames: o,
                frameRate: f,
                loop: v
            } = e[i];
            if (n = [], o === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(o).map(b => {
                n = n.concat(vC(b))
            }), this.animations[i] = yo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: v
            })
        }
    }
}
yC.prototype;
var Ku = {
    exports: {}
};
/*!
 * sweetalert2 v11.4.26
 * Released under the MIT License.
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i()
    })(vt, function() {
        const n = "SweetAlert2:",
            i = c => {
                const h = [];
                for (let C = 0; C < c.length; C++) h.indexOf(c[C]) === -1 && h.push(c[C]);
                return h
            },
            o = c => c.charAt(0).toUpperCase() + c.slice(1),
            f = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            v = c => {
                console.error("".concat(n, " ").concat(c))
            },
            b = [],
            k = c => {
                b.includes(c) || (b.push(c), f(c))
            },
            A = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            D = c => typeof c == "function" ? c() : c,
            V = c => c && typeof c.toPromise == "function",
            Y = c => V(c) ? c.toPromise() : Promise.resolve(c),
            ie = c => c && Promise.resolve(c) === c,
            K = c => c[Math.floor(Math.random() * c.length)],
            re = {
                title: "",
                titleText: "",
                text: "",
                html: "",
                footer: "",
                icon: void 0,
                iconColor: void 0,
                iconHtml: void 0,
                template: void 0,
                toast: !1,
                showClass: {
                    popup: "swal2-show",
                    backdrop: "swal2-backdrop-show",
                    icon: "swal2-icon-show"
                },
                hideClass: {
                    popup: "swal2-hide",
                    backdrop: "swal2-backdrop-hide",
                    icon: "swal2-icon-hide"
                },
                customClass: {},
                target: "body",
                color: void 0,
                backdrop: !0,
                heightAuto: !0,
                allowOutsideClick: !0,
                allowEscapeKey: !0,
                allowEnterKey: !0,
                stopKeydownPropagation: !0,
                keydownListenerCapture: !1,
                showConfirmButton: !0,
                showDenyButton: !1,
                showCancelButton: !1,
                preConfirm: void 0,
                preDeny: void 0,
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "",
                confirmButtonColor: void 0,
                denyButtonText: "No",
                denyButtonAriaLabel: "",
                denyButtonColor: void 0,
                cancelButtonText: "Cancel",
                cancelButtonAriaLabel: "",
                cancelButtonColor: void 0,
                buttonsStyling: !0,
                reverseButtons: !1,
                focusConfirm: !0,
                focusDeny: !1,
                focusCancel: !1,
                returnFocus: !0,
                showCloseButton: !1,
                closeButtonHtml: "&times;",
                closeButtonAriaLabel: "Close this dialog",
                loaderHtml: "",
                showLoaderOnConfirm: !1,
                showLoaderOnDeny: !1,
                imageUrl: void 0,
                imageWidth: void 0,
                imageHeight: void 0,
                imageAlt: "",
                timer: void 0,
                timerProgressBar: !1,
                width: void 0,
                padding: void 0,
                background: void 0,
                input: void 0,
                inputPlaceholder: "",
                inputLabel: "",
                inputValue: "",
                inputOptions: {},
                inputAutoTrim: !0,
                inputAttributes: {},
                inputValidator: void 0,
                returnInputValueOnDeny: !1,
                validationMessage: void 0,
                grow: !1,
                position: "center",
                progressSteps: [],
                currentProgressStep: void 0,
                progressStepsDistance: void 0,
                willOpen: void 0,
                didOpen: void 0,
                didRender: void 0,
                willClose: void 0,
                didClose: void 0,
                didDestroy: void 0,
                scrollbarPadding: !0
            },
            m = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            P = {},
            q = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            le = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => m.indexOf(c) !== -1,
            ye = c => P[c],
            d = c => {
                le(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            _e = c => {
                q.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ye(c) && A(c, ye(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && _e(h), Oe(h)
            },
            lt = "swal2-",
            Be = c => {
                const h = {};
                for (const C in c) h[c[C]] = lt + c[C];
                return h
            },
            J = Be(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            je = Be(["success", "warning", "info", "question", "error"]),
            U = () => document.body.querySelector(".".concat(J.container)),
            oe = c => {
                const h = U();
                return h ? h.querySelector(c) : null
            },
            Ae = c => oe(".".concat(c)),
            be = () => Ae(J.popup),
            we = () => Ae(J.icon),
            he = () => Ae(J.title),
            Se = () => Ae(J["html-container"]),
            Te = () => Ae(J.image),
            $e = () => Ae(J["progress-steps"]),
            Ke = () => Ae(J["validation-message"]),
            dt = () => oe(".".concat(J.actions, " .").concat(J.confirm)),
            Bt = () => oe(".".concat(J.actions, " .").concat(J.deny)),
            Ht = () => Ae(J["input-label"]),
            _ = () => oe(".".concat(J.loader)),
            l = () => oe(".".concat(J.actions, " .").concat(J.cancel)),
            g = () => Ae(J.actions),
            S = () => Ae(J.footer),
            R = () => Ae(J["timer-progress-bar"]),
            L = () => Ae(J.close),
            B = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
            te = () => {
                const c = Array.from(be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((C, $) => {
                        const me = parseInt(C.getAttribute("tabindex")),
                            Ge = parseInt($.getAttribute("tabindex"));
                        return me > Ge ? 1 : me < Ge ? -1 : 0
                    }),
                    h = Array.from(be().querySelectorAll(B)).filter(C => C.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(C => ge(C))
            },
            ke = () => Ct(document.body, J.shown) && !Ct(document.body, J["toast-shown"]) && !Ct(document.body, J["no-backdrop"]),
            de = () => be() && Ct(be(), J.toast),
            De = () => be().hasAttribute("data-loading"),
            Me = {
                previousBodyPadding: null
            },
            nt = (c, h) => {
                if (c.textContent = "", h) {
                    const $ = new DOMParser().parseFromString(h, "text/html");
                    Array.from($.querySelector("head").childNodes).forEach(me => {
                        c.appendChild(me)
                    }), Array.from($.querySelector("body").childNodes).forEach(me => {
                        c.appendChild(me)
                    })
                }
            },
            Ct = (c, h) => {
                if (!h) return !1;
                const C = h.split(/\s+/);
                for (let $ = 0; $ < C.length; $++)
                    if (!c.classList.contains(C[$])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(C => {
                    !Object.values(J).includes(C) && !Object.values(je).includes(C) && !Object.values(h.showClass).includes(C) && c.classList.remove(C)
                })
            },
            ct = (c, h, C) => {
                if (rn(c, h), h.customClass && h.customClass[C]) {
                    if (typeof h.customClass[C] != "string" && !h.customClass[C].forEach) return f("Invalid type of customClass.".concat(C, '! Expected string or iterable object, got "').concat(typeof h.customClass[C], '"'));
                    Je(c, h.customClass[C])
                }
            },
            yt = (c, h) => {
                if (!h) return null;
                switch (h) {
                    case "select":
                    case "textarea":
                    case "file":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J[h]));
                    case "checkbox":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.checkbox, " input"));
                    case "radio":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.radio, " input:checked")) || c.querySelector(".".concat(J.popup, " > .").concat(J.radio, " input:first-child"));
                    case "range":
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.range, " input"));
                    default:
                        return c.querySelector(".".concat(J.popup, " > .").concat(J.input))
                }
            },
            bt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Kt = (c, h, C) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach($ => {
                    Array.isArray(c) ? c.forEach(me => {
                        C ? me.classList.add($) : me.classList.remove($)
                    }) : C ? c.classList.add($) : c.classList.remove($)
                }))
            },
            Je = (c, h) => {
                Kt(c, h, !0)
            },
            Lt = (c, h) => {
                Kt(c, h, !1)
            },
            F = (c, h) => {
                const C = Array.from(c.children);
                for (let $ = 0; $ < C.length; $++) {
                    const me = C[$];
                    if (me instanceof HTMLElement && Ct(me, h)) return me
                }
            },
            N = (c, h, C) => {
                C === "".concat(parseInt(C)) && (C = parseInt(C)), C || parseInt(C) === 0 ? c.style[h] = typeof C == "number" ? "".concat(C, "px") : C : c.style.removeProperty(h)
            },
            W = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            M = c => {
                c.style.display = "none"
            },
            H = (c, h, C, $) => {
                const me = c.querySelector(h);
                me && (me.style[C] = $)
            },
            pe = function(c, h) {
                let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? W(c, C) : M(c)
            },
            ge = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !ge(dt()) && !ge(Bt()) && !ge(l()),
            Ve = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    C = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    $ = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return C > 0 || $ > 0
            },
            Ft = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const C = R();
                ge(C) && (h && (C.style.transition = "none", C.style.width = "100%"), setTimeout(() => {
                    C.style.transition = "width ".concat(c / 1e3, "s linear"), C.style.width = "0%"
                }, 10))
            },
            Ye = () => {
                const c = R(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const C = parseInt(window.getComputedStyle(c).width),
                    $ = h / C * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat($, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            it = {},
            Dn = () => {
                it.previousActiveElement instanceof HTMLElement ? (it.previousActiveElement.focus(), it.previousActiveElement = null) : document.body && document.body.focus()
            },
            gi = c => new Promise(h => {
                if (!c) return h();
                const C = window.scrollX,
                    $ = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(C, $)
            }),
            Sr = `
 <div aria-labelledby="`.concat(J.title, '" aria-describedby="').concat(J["html-container"], '" class="').concat(J.popup, `" tabindex="-1">
   <button type="button" class="`).concat(J.close, `"></button>
   <ul class="`).concat(J["progress-steps"], `"></ul>
   <div class="`).concat(J.icon, `"></div>
   <img class="`).concat(J.image, `" />
   <h2 class="`).concat(J.title, '" id="').concat(J.title, `"></h2>
   <div class="`).concat(J["html-container"], '" id="').concat(J["html-container"], `"></div>
   <input class="`).concat(J.input, `" />
   <input type="file" class="`).concat(J.file, `" />
   <div class="`).concat(J.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(J.select, `"></select>
   <div class="`).concat(J.radio, `"></div>
   <label for="`).concat(J.checkbox, '" class="').concat(J.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(J.label, `"></span>
   </label>
   <textarea class="`).concat(J.textarea, `"></textarea>
   <div class="`).concat(J["validation-message"], '" id="').concat(J["validation-message"], `"></div>
   <div class="`).concat(J.actions, `">
     <div class="`).concat(J.loader, `"></div>
     <button type="button" class="`).concat(J.confirm, `"></button>
     <button type="button" class="`).concat(J.deny, `"></button>
     <button type="button" class="`).concat(J.cancel, `"></button>
   </div>
   <div class="`).concat(J.footer, `"></div>
   <div class="`).concat(J["timer-progress-bar-container"], `">
     <div class="`).concat(J["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            kn = () => {
                const c = U();
                return c ? (c.remove(), Lt([document.documentElement, document.body], [J["no-backdrop"], J["toast-shown"], J["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            kr = () => {
                const c = be(),
                    h = F(c, J.input),
                    C = F(c, J.file),
                    $ = c.querySelector(".".concat(J.range, " input")),
                    me = c.querySelector(".".concat(J.range, " output")),
                    Ge = F(c, J.select),
                    Ut = c.querySelector(".".concat(J.checkbox, " input")),
                    Vn = F(c, J.textarea);
                h.oninput = sn, C.onchange = sn, Ge.onchange = sn, Ut.onchange = sn, Vn.oninput = sn, $.oninput = () => {
                    sn(), me.value = $.value
                }, $.onchange = () => {
                    sn(), me.value = $.value
                }
            },
            Tr = c => typeof c == "string" ? document.querySelector(c) : c,
            mi = c => {
                const h = be();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            $i = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(U(), J.rtl)
            },
            vi = c => {
                const h = kn();
                if (In()) {
                    v("SweetAlert2 requires document to initialize");
                    return
                }
                const C = document.createElement("div");
                C.className = J.container, h && Je(C, J["no-transition"]), nt(C, Sr);
                const $ = Tr(c.target);
                $.appendChild(C), mi(c), $i($), kr()
            },
            yi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? Fi(c, h) : c && nt(h, c)
            },
            Fi = (c, h) => {
                c.jquery ? ji(h, c) : nt(h, c.toString())
            },
            ji = (c, h) => {
                if (c.textContent = "", 0 in h)
                    for (let C = 0; C in h; C++) c.appendChild(h[C].cloneNode(!0));
                else c.appendChild(h.cloneNode(!0))
            },
            mn = (() => {
                if (In()) return !1;
                const c = document.createElement("div"),
                    h = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const C in h)
                    if (Object.prototype.hasOwnProperty.call(h, C) && typeof c.style[C] < "u") return h[C];
                return !1
            })(),
            zi = () => {
                const c = document.createElement("div");
                c.className = J["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            wi = (c, h) => {
                const C = g(),
                    $ = _();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? M(C) : W(C), ct(C, h, "actions"), Gn(C, $, h), nt($, h.loaderHtml), ct($, h, "loader")
            };

        function Gn(c, h, C) {
            const $ = dt(),
                me = Bt(),
                Ge = l();
            bi($, "confirm", C), bi(me, "deny", C), bi(Ge, "cancel", C), Gi($, me, Ge, C), C.reverseButtons && (C.toast ? (c.insertBefore(Ge, $), c.insertBefore(me, $)) : (c.insertBefore(Ge, h), c.insertBefore(me, h), c.insertBefore($, h)))
        }

        function Gi(c, h, C, $) {
            if (!$.buttonsStyling) return Lt([c, h, C], J.styled);
            Je([c, h, C], J.styled), $.confirmButtonColor && (c.style.backgroundColor = $.confirmButtonColor, Je(c, J["default-outline"])), $.denyButtonColor && (h.style.backgroundColor = $.denyButtonColor, Je(h, J["default-outline"])), $.cancelButtonColor && (C.style.backgroundColor = $.cancelButtonColor, Je(C, J["default-outline"]))
        }

        function bi(c, h, C) {
            pe(c, C["show".concat(o(h), "Button")], "inline-block"), nt(c, C["".concat(h, "ButtonText")]), c.setAttribute("aria-label", C["".concat(h, "ButtonAriaLabel")]), c.className = J[h], ct(c, C, "".concat(h, "Button")), Je(c, C["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const C = U();
            !C || (y(C, h.backdrop), a(C, h.position), x(C, h.grow), ct(C, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], J["no-backdrop"])
        }

        function a(c, h) {
            h in J ? Je(c, J[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Je(c, J.center))
        }

        function x(c, h) {
            if (h && typeof h == "string") {
                const C = "grow-".concat(h);
                C in J && Je(c, J[C])
            }
        }
        var O = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Q = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            xe = (c, h) => {
                const C = be(),
                    $ = O.innerParams.get(c),
                    me = !$ || h.input !== $.input;
                Q.forEach(Ge => {
                    const Ut = F(C, J[Ge]);
                    Wt(Ge, h.inputAttributes), Ut.className = J[Ge], me && M(Ut)
                }), h.input && (me && qe(h), Un(h))
            },
            qe = c => {
                if (!jt[c.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Ar(c.input),
                    C = jt[c.input](h, c);
                W(h), setTimeout(() => {
                    bt(C)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const C = c.attributes[h].name;
                    ["type", "value", "style"].includes(C) || c.removeAttribute(C)
                }
            },
            Wt = (c, h) => {
                const C = yt(be(), c);
                if (!!C) {
                    It(C);
                    for (const $ in h) C.setAttribute($, h[$])
                }
            },
            Un = c => {
                const h = Ar(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Hn = (c, h, C) => {
                if (C.inputLabel) {
                    c.id = J.input;
                    const $ = document.createElement("label"),
                        me = J["input-label"];
                    $.setAttribute("for", c.id), $.className = me, typeof C.customClass == "object" && Je($, C.customClass.inputLabel), $.innerText = C.inputLabel, h.insertAdjacentElement("beforebegin", $)
                }
            },
            Ar = c => F(be(), J[c] || J.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            jt = {};
        jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = (c, h) => (Xt(c, h.inputValue), Hn(c, c, h), Nn(c, h), c.type = h.input, c), jt.file = (c, h) => (Hn(c, c, h), Nn(c, h), c), jt.range = (c, h) => {
            const C = c.querySelector("input"),
                $ = c.querySelector("output");
            return Xt(C, h.inputValue), C.type = h.input, Xt($, h.inputValue), Hn(C, c, h), c
        }, jt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const C = document.createElement("option");
                nt(C, h.inputPlaceholder), C.value = "", C.disabled = !0, C.selected = !0, c.appendChild(C)
            }
            return Hn(c, c, h), c
        }, jt.radio = c => (c.textContent = "", c), jt.checkbox = (c, h) => {
            const C = yt(be(), "checkbox");
            C.value = "1", C.id = J.checkbox, C.checked = Boolean(h.inputValue);
            const $ = c.querySelector("span");
            return nt($, h.inputPlaceholder), C
        }, jt.textarea = (c, h) => {
            Xt(c, h.inputValue), Nn(c, h), Hn(c, c, h);
            const C = $ => parseInt(window.getComputedStyle($).marginLeft) + parseInt(window.getComputedStyle($).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const $ = parseInt(window.getComputedStyle(be()).width),
                        me = () => {
                            const Ge = c.offsetWidth + C(c);
                            Ge > $ ? be().style.width = "".concat(Ge, "px") : be().style.width = null
                        };
                    new MutationObserver(me).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Ui = (c, h) => {
                const C = Se();
                ct(C, h, "htmlContainer"), h.html ? (yi(h.html, C), W(C, "block")) : h.text ? (C.textContent = h.text, W(C, "block")) : M(C), xe(c, h)
            },
            bo = (c, h) => {
                const C = S();
                pe(C, h.footer), h.footer && yi(h.footer, C), ct(C, h, "footer")
            },
            Co = (c, h) => {
                const C = L();
                nt(C, h.closeButtonHtml), ct(C, h, "closeButton"), pe(C, h.showCloseButton), C.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const C = O.innerParams.get(c),
                    $ = we();
                if (C && h.icon === C.icon) {
                    ms($, h), Rr($, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    M($);
                    return
                }
                if (h.icon && Object.keys(je).indexOf(h.icon) === -1) {
                    v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), M($);
                    return
                }
                W($), ms($, h), Rr($, h), Je($, h.showClass.icon)
            },
            Rr = (c, h) => {
                for (const C in je) h.icon !== C && Lt(c, je[C]);
                Je(c, je[h.icon]), bn(c, h), Hi(), ct(c, h, "icon")
            },
            Hi = () => {
                const c = be(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    C = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let $ = 0; $ < C.length; $++) C[$].style.backgroundColor = h
            },
            gs = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
            xo = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            ms = (c, h) => {
                let C = c.innerHTML,
                    $;
                h.iconHtml ? $ = Ir(h.iconHtml) : h.icon === "success" ? ($ = gs, C = C.replace(/ style=".*?"/g, "")) : h.icon === "error" ? $ = xo : $ = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), C.trim() !== $.trim() && nt(c, $)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const C of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) H(c, C, "backgroundColor", h.iconColor);
                    H(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Ir = c => '<div class="'.concat(J["icon-content"], '">').concat(c, "</div>"),
            Ci = (c, h) => {
                const C = Te();
                if (!h.imageUrl) return M(C);
                W(C, ""), C.setAttribute("src", h.imageUrl), C.setAttribute("alt", h.imageAlt), N(C, "width", h.imageWidth), N(C, "height", h.imageHeight), C.className = J.image, ct(C, h, "image")
            },
            Eo = (c, h) => {
                const C = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return M(C);
                W(C), C.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach(($, me) => {
                    const Ge = _o($);
                    if (C.appendChild(Ge), me === h.currentProgressStep && Je(Ge, J["active-progress-step"]), me !== h.progressSteps.length - 1) {
                        const Ut = qn(h);
                        C.appendChild(Ut)
                    }
                })
            },
            _o = c => {
                const h = document.createElement("li");
                return Je(h, J["progress-step"]), nt(h, c), h
            },
            qn = c => {
                const h = document.createElement("li");
                return Je(h, J["progress-step-line"]), c.progressStepsDistance && N(h, "width", c.progressStepsDistance), h
            },
            Wn = (c, h) => {
                const C = he();
                pe(C, h.title || h.titleText, "block"), h.title && yi(h.title, C), h.titleText && (C.innerText = h.titleText), ct(C, h, "title")
            },
            Dr = (c, h) => {
                const C = U(),
                    $ = be();
                h.toast ? (N(C, "width", h.width), $.style.width = "100%", $.insertBefore(_(), we())) : N($, "width", h.width), N($, "padding", h.padding), h.color && ($.style.color = h.color), h.background && ($.style.background = h.background), M(Ke()), So($, h)
            },
            So = (c, h) => {
                c.className = "".concat(J.popup, " ").concat(ge(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], J["toast-shown"]), Je(c, J.toast)) : Je(c, J.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, J["icon-".concat(h.icon)])
            },
            Mr = (c, h) => {
                Dr(c, h), Ze(c, h), Eo(c, h), Or(c, h), Ci(c, h), Wn(c, h), Co(c, h), Ui(c, h), wi(c, h), bo(c, h), typeof h.didRender == "function" && h.didRender(be())
            },
            Xn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            xi = () => {
                Array.from(document.body.children).forEach(h => {
                    h === U() || h.contains(U()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Lr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            qi = ["swal-title", "swal-html", "swal-footer"],
            ko = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const C = h.content;
                return Io(C), Object.assign(vs(C), To(C), Ao(C), Pr(C), Oo(C), Ro(C, qi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach($ => {
                    Yn($, ["name", "value"]);
                    const me = $.getAttribute("name"),
                        Ge = $.getAttribute("value");
                    typeof re[me] == "boolean" && Ge === "false" && (h[me] = !1), typeof re[me] == "object" && (h[me] = JSON.parse(Ge))
                }), h
            },
            To = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach($ => {
                    Yn($, ["type", "color", "aria-label"]);
                    const me = $.getAttribute("type");
                    h["".concat(me, "ButtonText")] = $.innerHTML, h["show".concat(o(me), "Button")] = !0, $.hasAttribute("color") && (h["".concat(me, "ButtonColor")] = $.getAttribute("color")), $.hasAttribute("aria-label") && (h["".concat(me, "ButtonAriaLabel")] = $.getAttribute("aria-label"))
                }), h
            },
            Ao = c => {
                const h = {},
                    C = c.querySelector("swal-image");
                return C && (Yn(C, ["src", "width", "height", "alt"]), C.hasAttribute("src") && (h.imageUrl = C.getAttribute("src")), C.hasAttribute("width") && (h.imageWidth = C.getAttribute("width")), C.hasAttribute("height") && (h.imageHeight = C.getAttribute("height")), C.hasAttribute("alt") && (h.imageAlt = C.getAttribute("alt"))), h
            },
            Pr = c => {
                const h = {},
                    C = c.querySelector("swal-icon");
                return C && (Yn(C, ["type", "color"]), C.hasAttribute("type") && (h.icon = C.getAttribute("type")), C.hasAttribute("color") && (h.iconColor = C.getAttribute("color")), h.iconHtml = C.innerHTML), h
            },
            Oo = c => {
                const h = {},
                    C = c.querySelector("swal-input");
                C && (Yn(C, ["type", "label", "placeholder", "value"]), h.input = C.getAttribute("type") || "text", C.hasAttribute("label") && (h.inputLabel = C.getAttribute("label")), C.hasAttribute("placeholder") && (h.inputPlaceholder = C.getAttribute("placeholder")), C.hasAttribute("value") && (h.inputValue = C.getAttribute("value")));
                const $ = Array.from(c.querySelectorAll("swal-input-option"));
                return $.length && (h.inputOptions = {}, $.forEach(me => {
                    Yn(me, ["value"]);
                    const Ge = me.getAttribute("value"),
                        Ut = me.innerHTML;
                    h.inputOptions[Ge] = Ut
                })), h
            },
            Ro = (c, h) => {
                const C = {};
                for (const $ in h) {
                    const me = h[$],
                        Ge = c.querySelector(me);
                    Ge && (Yn(Ge, []), C[me.replace(/^swal-/, "")] = Ge.innerHTML.trim())
                }
                return C
            },
            Io = c => {
                const h = qi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(C => {
                    const $ = C.tagName.toLowerCase();
                    h.indexOf($) === -1 && f("Unrecognized element <".concat($, ">"))
                })
            },
            Yn = (c, h) => {
                Array.from(c.attributes).forEach(C => {
                    h.indexOf(C.name) === -1 && f(['Unrecognized attribute "'.concat(C.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var ys = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Do(c) {
            c.inputValidator || Object.keys(ys).forEach(h => {
                c.input === h && (c.inputValidator = ys[h])
            })
        }

        function Mo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function ws(c) {
            Do(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Mo(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), vi(c)
        }
        class Nr {
            constructor(h, C) {
                this.callback = h, this.remaining = C, this.running = !1, this.start()
            }
            start() {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
            stop() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
            }
            increase(h) {
                const C = this.running;
                return C && this.stop(), this.remaining += h, C && this.start(), this.remaining
            }
            getTimerLeft() {
                return this.running && (this.stop(), this.start()), this.remaining
            }
            isRunning() {
                return this.running
            }
        }
        const bs = () => {
                Me.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Me.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Me.previousBodyPadding + zi(), "px"))
            },
            Vr = () => {
                Me.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Me.previousBodyPadding, "px"), Me.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, J.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, J.iosfix), Br(), xs()
                }
            },
            xs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    C = !!c.match(/WebKit/i);
                h && C && !c.match(/CriOS/i) && be().scrollHeight > window.innerHeight - 44 && (U().style.paddingBottom = "".concat(44, "px"))
            },
            Br = () => {
                const c = U();
                let h;
                c.ontouchstart = C => {
                    h = Lo(C)
                }, c.ontouchmove = C => {
                    h && (C.preventDefault(), C.stopPropagation())
                }
            },
            Lo = c => {
                const h = c.target,
                    C = U();
                return Po(c) || No(c) ? !1 : h === C || !Ve(C) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ve(Se()) && Se().contains(h))
            },
            Po = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            No = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (Ct(document.body, J.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Lt(document.body, J.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            $r = 10,
            Fr = c => {
                const h = U(),
                    C = be();
                typeof c.willOpen == "function" && c.willOpen(C);
                const me = window.getComputedStyle(document.body).overflowY;
                r(h, C, c), setTimeout(() => {
                    Vo(h, C)
                }, $r), ke() && (Bo(h, c.scrollbarPadding, me), xi()), !de() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(C)), Lt(h, J["no-transition"])
            },
            Es = c => {
                const h = be();
                if (c.target !== h) return;
                const C = U();
                h.removeEventListener(mn, Es), C.style.overflowY = "auto"
            },
            Vo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, Es)) : c.style.overflowY = "auto"
            },
            Bo = (c, h, C) => {
                Cs(), h && C !== "hidden" && bs(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, C) => {
                Je(c, C.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), W(h, "grid"), setTimeout(() => {
                    Je(h, C.showClass.popup), h.style.removeProperty("opacity")
                }, $r), Je([document.documentElement, document.body], J.shown), C.heightAuto && C.backdrop && !C.toast && Je([document.documentElement, document.body], J["height-auto"])
            },
            s = c => {
                let h = be();
                h || new Ot, h = be();
                const C = _();
                de() ? M(we()) : u(h, c), W(C), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const C = g(),
                    $ = _();
                !h && ge(dt()) && (h = dt()), W(C), h && (M(h), $.setAttribute("data-button-to-replace", h.className)), $.parentNode.insertBefore($, h), Je([c, C], J.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? G(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && (V(h.inputValue) || ie(h.inputValue)) && (s(dt()), Z(c, h))
            },
            w = (c, h) => {
                const C = c.getInput();
                if (!C) return null;
                switch (h.input) {
                    case "checkbox":
                        return E(C);
                    case "radio":
                        return T(C);
                    case "file":
                        return z(C);
                    default:
                        return h.inputAutoTrim ? C.value.trim() : C.value
                }
            },
            E = c => c.checked ? 1 : 0,
            T = c => c.checked ? c.value : null,
            z = c => c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null,
            G = (c, h) => {
                const C = be(),
                    $ = me => ce[h.input](C, Ce(me), h);
                V(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), Y(h.inputOptions).then(me => {
                    c.hideLoading(), $(me)
                })) : typeof h.inputOptions == "object" ? $(h.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const C = c.getInput();
                M(C), Y(h.inputValue).then($ => {
                    C.value = h.input === "number" ? parseFloat($) || 0 : "".concat($), W(C), C.focus(), c.hideLoading()
                }).catch($ => {
                    v("Error in inputValue promise: ".concat($)), C.value = "", W(C), C.focus(), c.hideLoading()
                })
            },
            ce = {
                select: (c, h, C) => {
                    const $ = F(c, J.select),
                        me = (Ge, Ut, Vn) => {
                            const pn = document.createElement("option");
                            pn.value = Vn, nt(pn, Ut), pn.selected = ne(Vn, C.inputValue), Ge.appendChild(pn)
                        };
                    h.forEach(Ge => {
                        const Ut = Ge[0],
                            Vn = Ge[1];
                        if (Array.isArray(Vn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ut, pn.disabled = !1, $.appendChild(pn), Vn.forEach(nr => me(pn, nr[1], nr[0]))
                        } else me($, Vn, Ut)
                    }), $.focus()
                },
                radio: (c, h, C) => {
                    const $ = F(c, J.radio);
                    h.forEach(Ge => {
                        const Ut = Ge[0],
                            Vn = Ge[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = J.radio, pn.value = Ut, ne(Ut, C.inputValue) && (pn.checked = !0);
                        const Ko = document.createElement("span");
                        nt(Ko, Vn), Ko.className = J.label, nr.appendChild(pn), nr.appendChild(Ko), $.appendChild(nr)
                    });
                    const me = $.querySelectorAll("input");
                    me.length && me[0].focus()
                }
            },
            Ce = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((C, $) => {
                    let me = C;
                    typeof me == "object" && (me = Ce(me)), h.push([$, me])
                }) : Object.keys(c).forEach(C => {
                    let $ = c[C];
                    typeof $ == "object" && ($ = Ce($)), h.push([C, $])
                }), h
            },
            ne = (c, h) => h && h.toString() === c.toString();

        function ue() {
            const c = O.innerParams.get(this);
            if (!c) return;
            const h = O.domCache.get(this);
            M(h.loader), de() ? c.icon && W(we()) : He(h), Lt([h.popup, h.actions], J.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const He = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? W(h[0], "inline-block") : Ne() && M(c.actions)
        };

        function rt(c) {
            const h = O.innerParams.get(c || this),
                C = O.domCache.get(c || this);
            return C ? yt(C.popup, h.input) : null
        }
        var Fe = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => ge(be()),
            Nt = () => dt() && dt().click(),
            un = () => Bt() && Bt().click(),
            _t = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, C, $) => {
                et(h), C.toast || (h.keydownHandler = me => Wi(c, me, $), h.keydownTarget = C.keydownListenerCapture ? window : be(), h.keydownListenerCapture = C.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, C) => {
                const $ = te();
                if ($.length) return h = h + C, h === $.length ? h = 0 : h === -1 && (h = $.length - 1), $[h].focus();
                be().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            _i = ["ArrowLeft", "ArrowUp"],
            Wi = (c, h, C) => {
                const $ = O.innerParams.get(c);
                !$ || h.isComposing || h.keyCode === 229 || ($.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, $) : h.key === "Tab" ? Kn(h, $) : [...Dt, ..._i].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, $, C))
            },
            hn = (c, h, C) => {
                if (!!D(C.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(C.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const C = c.target,
                    $ = te();
                let me = -1;
                for (let Ge = 0; Ge < $.length; Ge++)
                    if (C === $[Ge]) {
                        me = Ge;
                        break
                    } c.shiftKey ? ft(h, me, -1) : ft(h, me, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    C = Bt(),
                    $ = l();
                if (document.activeElement instanceof HTMLElement && ![h, C, $].includes(document.activeElement)) return;
                const me = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Ge = document.activeElement;
                for (let Ut = 0; Ut < g().children.length; Ut++) {
                    if (Ge = Ge[me], !Ge) return;
                    if (Ge instanceof HTMLButtonElement && ge(Ge)) break
                }
                Ge instanceof HTMLButtonElement && Ge.focus()
            },
            an = (c, h, C) => {
                D(h.allowEscapeKey) && (c.preventDefault(), C(Xn.esc))
            };

        function Mn(c, h, C, $) {
            de() ? ks(c, $) : (gi(C).then(() => ks(c, $)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), ke() && (Vr(), Ei(), Lr()), vn()
        }

        function vn() {
            Lt([document.documentElement, document.body], [J.shown, J["height-auto"], J["no-backdrop"], J["toast-shown"]])
        }

        function Cn(c) {
            c = Zn(c);
            const h = Fe.swalPromiseResolve.get(this),
                C = Qn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : C && h(c)
        }

        function _s() {
            return !!O.awaitingPromise.get(this)
        }
        const Qn = c => {
            const h = be();
            if (!h) return !1;
            const C = O.innerParams.get(c);
            if (!C || Ct(h, C.hideClass.popup)) return !1;
            Lt(h, C.showClass.popup), Je(h, C.hideClass.popup);
            const $ = U();
            return Lt($, C.showClass.backdrop), Je($, C.hideClass.backdrop), Ss(c, h, C), !0
        };

        function jr(c) {
            const h = Fe.swalPromiseReject.get(this);
            gt(this), h && h(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (O.awaitingPromise.delete(c), O.innerParams.get(c) || c._destroy())
            },
            Zn = c => typeof c > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c),
            Ss = (c, h, C) => {
                const $ = U(),
                    me = mn && pt(h);
                typeof C.willClose == "function" && C.willClose(h), me ? zr(c, h, $, C.returnFocus, C.didClose) : Mn(c, $, C.returnFocus, C.didClose)
            },
            zr = (c, h, C, $, me) => {
                it.swalCloseEventFinishedCallback = Mn.bind(null, c, C, $, me), h.addEventListener(mn, function(Ge) {
                    Ge.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            ks = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Si(c, h, C) {
            const $ = O.domCache.get(c);
            h.forEach(me => {
                $[me].disabled = C
            })
        }

        function Ts(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const $ = c.parentNode.parentNode.querySelectorAll("input");
                for (let me = 0; me < $.length; me++) $[me].disabled = h
            } else c.disabled = h
        }

        function As() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function $o() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function Fo() {
            return Ts(this.getInput(), !1)
        }

        function jo() {
            return Ts(this.getInput(), !0)
        }

        function Xi(c) {
            const h = O.domCache.get(this),
                C = O.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = J["validation-message"], C.customClass && C.customClass.validationMessage && Je(h.validationMessage, C.customClass.validationMessage), W(h.validationMessage);
            const $ = this.getInput();
            $ && ($.setAttribute("aria-invalid", !0), $.setAttribute("aria-describedby", J["validation-message"]), bt($), Je($, J.inputerror))
        }

        function zo() {
            const c = O.domCache.get(this);
            c.validationMessage && M(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Lt(h, J.inputerror))
        }

        function Go() {
            return O.domCache.get(this).progressSteps
        }

        function Uo(c) {
            const h = be(),
                C = O.innerParams.get(this);
            if (!h || Ct(h, C.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const $ = ki(c),
                me = Object.assign({}, C, $);
            Mr(this, me), O.innerParams.set(this, me), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const ki = c => {
            const h = {};
            return Object.keys(c).forEach(C => {
                se(C) ? h[C] = c[C] : f("Invalid parameter to update: ".concat(C))
            }), h
        };

        function Ho() {
            const c = O.domCache.get(this),
                h = O.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && it.swalCloseEventFinishedCallback && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Gr(this)
        }
        const Gr = c => {
                Tn(c), delete c.params, delete it.keydownHandler, delete it.keydownTarget, delete it.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(O, c), O.awaitingPromise.set(c, !0)) : (xn(Fe, c), xn(O, c))
            },
            xn = (c, h) => {
                for (const C in c) c[C].delete(h)
            };
        var Ur = Object.freeze({
            hideLoading: ue,
            disableLoading: ue,
            getInput: rt,
            close: Cn,
            isAwaitingPromise: _s,
            rejectPromise: jr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: As,
            disableButtons: $o,
            enableInput: Fo,
            disableInput: jo,
            showValidationMessage: Xi,
            resetValidationMessage: zo,
            getProgressSteps: Go,
            update: Uo,
            _destroy: Ho
        });
        const Os = c => {
                const h = O.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Ji(c, !0)
            },
            Rs = c => {
                const h = O.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            qo = (c, h) => {
                c.disableButtons(), h(Xn.cancel)
            },
            St = (c, h) => {
                const C = O.innerParams.get(c);
                if (!C.input) {
                    v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(o(h)));
                    return
                }
                const $ = w(c, C);
                C.inputValidator ? Yi(c, $, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, $) : Ji(c, $) : (c.enableButtons(), c.showValidationMessage(C.validationMessage))
            },
            Yi = (c, h, C) => {
                const $ = O.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => Y($.inputValidator(h, $.validationMessage))).then(Ge => {
                    c.enableButtons(), c.enableInput(), Ge ? c.showValidationMessage(Ge) : C === "deny" ? dn(c, h) : Ji(c, h)
                })
            },
            dn = (c, h) => {
                const C = O.innerParams.get(c || void 0);
                C.showLoaderOnDeny && s(Bt()), C.preDeny ? (O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => Y(C.preDeny(h, C.validationMessage))).then(me => {
                    me === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof me > "u" ? h : me
                    })
                }).catch(me => Ki(c || void 0, me))) : c.close({
                    isDenied: !0,
                    value: h
                })
            },
            yn = (c, h) => {
                c.close({
                    isConfirmed: !0,
                    value: h
                })
            },
            Ki = (c, h) => {
                c.rejectPromise(h)
            },
            Ji = (c, h) => {
                const C = O.innerParams.get(c || void 0);
                C.showLoaderOnConfirm && s(), C.preConfirm ? (c.resetValidationMessage(), O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => Y(C.preConfirm(h, C.validationMessage))).then(me => {
                    ge(Ke()) || me === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof me > "u" ? h : me)
                }).catch(me => Ki(c || void 0, me))) : yn(c, h)
            },
            Wo = (c, h, C) => {
                O.innerParams.get(c).toast ? Xo(c, h, C) : (Hr(h), Ds(h), Qi(c, h, C))
            },
            Xo = (c, h, C) => {
                h.popup.onclick = () => {
                    const $ = O.innerParams.get(c);
                    $ && (Is($) || $.timer || $.input) || C(Xn.close)
                }
            },
            Is = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let An = !1;
        const Hr = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (An = !0)
                    }
                }
            },
            Ds = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (An = !0)
                    }
                }
            },
            Qi = (c, h, C) => {
                h.container.onclick = $ => {
                    const me = O.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    $.target === h.container && D(me.allowOutsideClick) && C(Xn.backdrop)
                }
            },
            Zi = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || Zi(c),
            Yo = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((C, $) => {
                    const me = c[$];
                    typeof me == "string" || er(me) ? h[C] = me : me !== void 0 && v("Unexpected type of ".concat(C, '! Expected "string" or "Element", got ').concat(typeof me))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, C = new Array(h), $ = 0; $ < h; $++) C[$] = arguments[$];
            return new c(...C)
        }

        function qr(c) {
            class h extends this {
                _main($, me) {
                    return super._main($, Object.assign({}, c, me))
                }
            }
            return h
        }
        const Wr = () => it.timeout && it.timeout.getTimerLeft(),
            Ms = () => {
                if (it.timeout) return Ye(), it.timeout.stop()
            },
            I = () => {
                if (it.timeout) {
                    const c = it.timeout.start();
                    return Ft(c), c
                }
            },
            j = () => {
                const c = it.timeout;
                return c && (c.running ? Ms() : I())
            },
            X = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return Ft(h, !0), h
                }
            },
            fe = () => it.timeout && it.timeout.isRunning();
        let ee = !1;
        const ve = {};

        function Ee() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            ve[c] = this, ee || (document.body.addEventListener("click", Re), ee = !0)
        }
        const Re = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const C in ve) {
                    const $ = h.getAttribute(C);
                    if ($) {
                        ve[C].fire({
                            template: $
                        });
                        return
                    }
                }
        };
        var Le = Object.freeze({
            isValidParameter: le,
            isUpdatableParameter: se,
            isDeprecatedParameter: ye,
            argsToParams: Yo,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: U,
            getPopup: be,
            getTitle: he,
            getHtmlContainer: Se,
            getImage: Te,
            getIcon: we,
            getInputLabel: Ht,
            getCloseButton: L,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Bt,
            getCancelButton: l,
            getLoader: _,
            getFooter: S,
            getTimerProgressBar: R,
            getFocusableElements: te,
            getValidationMessage: Ke,
            isLoading: De,
            fire: tr,
            mixin: qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Wr,
            stopTimer: Ms,
            resumeTimer: I,
            toggleTimer: j,
            increaseTimer: X,
            isTimerRunning: fe,
            bindClickHandler: Ee
        });
        let ze;
        class Ue {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, C = new Array(h), $ = 0; $ < h; $++) C[$] = arguments[$];
                const me = Object.freeze(this.constructor.argsToParams(C));
                Object.defineProperties(this, {
                    params: {
                        value: me,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const Ge = ze._main(ze.params);
                O.promise.set(this, Ge)
            }
            _main(h) {
                let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, C, h)), it.currentInstance && (it.currentInstance._destroy(), ke() && Lr()), it.currentInstance = ze;
                const $ = ht(h, C);
                ws($), Object.freeze($), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const me = At(ze);
                return Mr(ze, $), O.innerParams.set(ze, $), Xe(ze, me, $)
            }
            then(h) {
                return O.promise.get(this).then(h)
            } finally(h) {
                return O.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, C) => new Promise(($, me) => {
                const Ge = Ut => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ut
                    })
                };
                Fe.swalPromiseResolve.set(c, $), Fe.swalPromiseReject.set(c, me), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => qo(c, Ge), h.closeButton.onclick = () => Ge(Xn.close), Wo(c, h, Ge), on(c, it, C, Ge), p(c, C), Fr(C), We(it, C, Ge), Gt(h, C), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const C = ko(c),
                    $ = Object.assign({}, re, h, C, c);
                return $.showClass = Object.assign({}, re.showClass, $.showClass), $.hideClass = Object.assign({}, re.hideClass, $.hideClass), $
            },
            At = c => {
                const h = {
                    popup: be(),
                    container: U(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Bt(),
                    cancelButton: l(),
                    loader: _(),
                    closeButton: L(),
                    validationMessage: Ke(),
                    progressSteps: $e()
                };
                return O.domCache.set(c, h), h
            },
            We = (c, h, C) => {
                const $ = R();
                M($), h.timer && (c.timeout = new Nr(() => {
                    C("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (W($), ct($, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(h.timer)
                })))
            },
            Gt = (c, h) => {
                if (!h.toast) {
                    if (!D(h.allowEnterKey)) return fn();
                    Jt(c, h) || ft(h, -1, 1)
                }
            },
            Jt = (c, h) => h.focusDeny && ge(c.denyButton) ? (c.denyButton.focus(), !0) : h.focusCancel && ge(c.cancelButton) ? (c.cancelButton.focus(), !0) : h.focusConfirm && ge(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
            fn = () => {
                document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
            };
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
            const c = document.createElement("div");
            c.className = "leave-russia-now-and-apply-your-skills-to-the-world";
            const h = K([{
                text: `\u0412 \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0442\u043E\u043C,
        <strong>\u0447\u0442\u043E\u0431\u044B \u044D\u0442\u0430 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u0431\u0435\u0441\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043D\u0430\u044F \u0432\u043E\u0439\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C</strong>:`,
                id: "4CfDhaRkw7I"
            }, {
                text: "\u042D\u043C\u043F\u0430\u0442\u0438\u044F - \u0433\u043B\u0430\u0432\u043D\u043E\u0435 <strong>\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0435</strong> \u0447\u0443\u0432\u0441\u0442\u0432\u043E. \u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044C. <strong>\u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E.</strong>",
                id: "s-GLAIY4DXA"
            }]);
            nt(c, `
      <div>
        \u0415\u0441\u043B\u0438 \u043C\u044B \u043D\u0435 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043C \u0432\u043E\u0439\u043D\u0443, \u043E\u043D\u0430 \u043F\u0440\u0438\u0434\u0435\u0442 \u0432 \u0434\u043E\u043C <strong>\u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437 \u043D\u0430\u0441</strong> \u0438 \u0435\u0451 \u043F\u043E\u0441\u043B\u0435\u0434\u0441\u0442\u0432\u0438\u044F \u0431\u0443\u0434\u0443\u0442 <strong>\u0443\u0436\u0430\u0441\u0430\u044E\u0449\u0438\u043C\u0438</strong>.
      </div>
      <div>
        \u041F\u0443\u0442\u0438\u043D\u0441\u043A\u0438\u0439 \u0440\u0435\u0436\u0438\u043C \u0437\u0430 20 \u0441 \u043B\u0438\u0448\u043D\u0438\u043C \u043B\u0435\u0442 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u0432\u0434\u043E\u043B\u0431\u0438\u043B \u043D\u0430\u043C, \u0447\u0442\u043E \u043C\u044B \u0431\u0435\u0441\u0441\u0438\u043B\u044C\u043D\u044B \u0438 \u043E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043D\u0438\u0447\u0435\u0433\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C. <strong>\u042D\u0442\u043E \u043D\u0435 \u0442\u0430\u043A!</strong>
      </div>
      <div>
        `.concat(h.text, `
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/`).concat(h.id, `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
        \u041D\u0435\u0442 \u0432\u043E\u0439\u043D\u0435!
      </div>
      `));
            const C = document.createElement("button");
            C.innerHTML = "&times;", C.onclick = () => c.remove(), c.appendChild(C), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(c)
                }, 1e3)
            })
        }
        Object.assign(Ue.prototype, Ur), Object.assign(Ue, Le), Object.keys(Ur).forEach(c => {
            Ue[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ue.DismissReason = Xn, Ue.version = "11.4.26";
        const Ot = Ue;
        return Ot.default = Ot, Ot
    }), typeof vt < "u" && vt.Sweetalert2 && (vt.swal = vt.sweetAlert = vt.Swal = vt.SweetAlert = vt.Sweetalert2), typeof document < "u" && function(n, i) {
        var o = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = i);
        else try {
            o.innerHTML = i
        } catch {
            o.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(Ku);
const Rn = Ku.exports;
class kt {
    static get DismissReason() {
        return Rn.DismissReason
    }
    static show(e, n = {}) {
        switch (Rn.isVisible() && Rn.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
            case "alert":
                return this.showAlert(n);
            case "custom":
                return this.showCustom(n);
            case "error":
                return this.showError(n);
            case "toast":
                return this.showToast(n);
            default:
                console.warn("Unknown alert type", e)
        }
        return !1
    }
    static close() {
        Rn.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", Rn.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp3/pollposition/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), Rn.fire(e)
    }
    static async showCustom(e) {
        return Rn.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", Rn.fire(e)
    }
}
const wC = `<div class="canvasContainer">\r
    <video id="cameraVideo" class="cameraVideo" autoplay playsinline class=""></video>\r
    <canvas id='cameraCanvas' class="cameraCanvas resizableCanvas" width="300px" height="408px" class=""></canvas>\r
    <img id="cameraImage" class="cameraImage visuallyhidden" />\r
</div>\r
<div class="cameraControls">\r
    <button id="exitButton" class="button exitButton"></button>\r
    <div class="buttons pre">\r
        <button id="switchButton" class="button switchButton"></button>\r
        <button id="snapshotButton" class="button snapshotButton"></button>\r
    </div>\r
    <div class="buttons post">\r
        <button id="cancelButton" class="button cancelButton"></button>\r
        <button id="confirmButton" class="button confirmButton"></button>\r
    </div>\r
</div>\r
<div style="display:none;">\r
    <img id="Mask" src='../../general/images/oval.png' />\r
</div>`,
    bC = {
        type: "camera",
        width: 300,
        height: 408,
        offsetX: 0,
        offsetY: 0,
        transmitting: !1,
        previewImage: null,
        mirror: !0,
        mask: !0,
        update(t) {
            if (this.video || (this.video = document.getElementById("cameraVideo")), this.image || (this.image = document.getElementById("Mask")), !this.video || !this.image) return;
            const e = this.video.videoWidth,
                n = this.video.videoHeight,
                i = Mi().width,
                o = Mi().height,
                f = Math.max(i / e, o / n);
            this.width = i, this.height = o, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (o - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = vo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Mi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Mi().width, Mi().height))
        }
    },
    CC = Et.View.extend({
        template: at.template(wC),
        className: "CameraUser",
        model: new ot.Model({
            image: null,
            width: 300,
            height: 408,
            transmitting: !1,
            access: !1,
            showSwitchButton: !1
        }),
        sprites: [],
        bindings: {
            ".pre": {
                classes: {
                    visible: {
                        observe: "image",
                        onGet(t) {
                            return !t
                        }
                    }
                }
            },
            ".post": {
                classes: {
                    visible: {
                        observe: "image",
                        onGet(t) {
                            return t
                        }
                    }
                }
            }
        },
        events: {
            "click #switchButton": "switchClicked",
            "click #snapshotButton": "snapshotClicked",
            "click #confirmButton": "confirmClicked",
            "click #cancelButton": "cancelClicked",
            "click #exitButton": "exitClicked"
        },
        initialize() {
            this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), this.update()
        },
        update() {
            !this.cameraSprite || (this.model.get("image") ? (this.previewImage = this.previewImage || new Image, this.previewImage.onload = () => {
                this.cameraSprite.preview = this.previewImage
            }, this.previewImage.src = this.model.get("image")) : this.cameraSprite.preview = null, this.cameraSprite.transmitting = this.model.get("transmitting"), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), this.$("#cameraCanvas").width(`${this.model.get("width")}px`), this.$("#cameraCanvas").height(`${this.model.get("height")}px`), this.onResize())
        },
        onRender() {
            this.stickit()
        },
        onAttach() {
            const t = this;
            dC("cameraCanvas"), t.sprites = [], t.gameLoop = gC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = cl(bC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
        },
        async startCamera() {
            this.canvas = document.getElementById("cameraCanvas"), this.image = document.getElementById("cameraImage"), this.video = document.getElementById("cameraVideo");
            const t = this.altOption || "drawing";
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const n = {
                    video: {
                        facingMode: this.facingMode,
                        width: 1280
                    },
                    audio: !1
                };
                try {
                    const i = await navigator.mediaDevices.getUserMedia(n),
                        o = await navigator.mediaDevices.enumerateDevices();
                    this.currentStream = i, this.video.srcObject = i, await this.video.play(), this.gotDevices(o)
                } catch (i) {
                    console.error(i), kt.show("alert", {
                        titleText: "Unable to Access Camera",
                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else kt.show("alert", {
                titleText: "No Camera Access",
                text: `It looks like camera access isn't available from this browser. Try the ${t} option instead.`,
                willClose: () => {
                    this.cameraAccessDenied()
                }
            })
        },
        gotDevices(t) {
            let e = 0;
            t.forEach(n => {
                n.kind === "videoinput" && (e += 1)
            }), this.model.set("showSwitchButton", e > 1)
        },
        stopMediaTracks() {
            this.currentStream.getTracks().forEach(e => {
                e.stop()
            }), this.video.srcObject = null, this.model.unset("image")
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext);
            const t = this;
            for (let n = 0; n < t.sprites.length; n++) t.sprites[n].ttl = 0;
            t.gameLoop.update(1 / 60), t.gameLoop.stop(), this.currentStream && this.stopMediaTracks();
            const e = document.getElementsByClassName("pt-page");
            !e.length || (e[0].style.display = "table", e[0].style.display = "block")
        },
        switchClicked() {
            this.currentStream && this.stopMediaTracks(), this.facingMode = this.facingMode === "user" ? "environment" : "user", this.cameraSprite.mirror = this.facingMode === "user", this.startCamera()
        },
        snapshotClicked() {
            const t = this.canvas.toDataURL();
            this.model.set("image", t), this.model.set("transmitting", !1)
        },
        confirmClicked() {
            const t = this.model.get("sizesToSend") || [{
                    width: this.model.get("width"),
                    height: this.model.get("height")
                }],
                e = [];
            t.forEach(n => {
                if (!n.width || !n.height) return;
                const i = document.createElement("canvas");
                i.width = n.width, i.height = n.height;
                const o = i.getContext("2d");
                this.previewImage && o.drawImage(this.previewImage, 0, 0, i.width, i.height), this.model.set("transmitting", !0);
                const f = i.toDataURL().split(",")[1];
                e.push({
                    size: n,
                    picture: f
                })
            }), this.triggerMethod("camera:snapshot", e)
        },
        cancelClicked() {
            this.model.unset("image")
        },
        exitClicked() {
            this.triggerMethod("camera:exit")
        },
        cameraAccessDenied() {
            this.model.set("failed", !0), this.triggerMethod("camera:exit")
        },
        onResize() {
            const t = this.model.get("width"),
                e = this.model.get("height");
            if (!t || !e) return;
            const n = document.getElementById("cameraCanvas"),
                i = ae(".canvasContainer");
            if (!n || !i) return;
            const o = i.width(),
                f = Math.max(ae(window).innerHeight(), 250),
                v = Math.min(o / t, f / e),
                b = t * v,
                k = e * v;
            n.style.width = `${b}px`, n.style.height = `${k}px`, n.width = b, n.height = k
        }
    }),
    si = ot.Model.extend({
        defaults: {},
        set(t, e) {
            const n = at.extend({}, this.attributes, this.defaults, t);
            return ot.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = at.extend({}, this.defaults, this.attributes, t);
            return ot.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    xC = si.extend({
        defaults: {
            size: {
                width: 300,
                height: 408
            },
            sizesToSend: null,
            mask: !0,
            strings: {
                exitButton: "X",
                switchButton: `
                <svg width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-switch"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M 7.96875 2.578125 C 7.144531 2.578125 6.371094 2.8125 5.652344 3.289062
                        C 4.933594 3.753906 4.367188 4.394531 3.945312 5.210938
                        C 3.527344 6.03125 3.316406 6.921875 3.316406 7.878906 L 3.316406 8.058594 L 3.324219 8.242188
                        L 1.917969 8.347656 L 1.90625 7.878906 C 1.882812 7.273438 1.945312 6.683594 2.085938 6.113281
                        C 2.226562 5.542969 2.433594 4.992188 2.703125 4.457031
                        C 3.242188 3.378906 3.972656 2.527344 4.898438 1.898438
                        C 5.832031 1.273438 6.851562 0.960938 7.957031 0.960938
                        C 8.984375 0.960938 9.949219 1.242188 10.851562 1.808594 L 12.203125 0.15625 L 12.558594 4.71875
                        L 8.328125 4.882812 L 9.847656 3.023438 C 9.546875 2.875 9.238281 2.761719 8.925781 2.6875
                        C 8.617188 2.613281 8.296875 2.578125 7.96875 2.578125 Z M 12.632812 7.558594
                        L 14.03125 7.453125 L 14.039062 7.6875 L 14.039062 7.921875
                        C 14.039062 9.160156 13.761719 10.316406 13.210938 11.394531
                        C 12.664062 12.476562 11.929688 13.320312 11.007812 13.929688
                        C 10.089844 14.53125 9.082031 14.832031 7.980469 14.832031
                        C 6.992188 14.832031 6.035156 14.554688 5.105469 13.992188 L 3.746094 15.644531
                        L 3.394531 11.074219 L 7.621094 10.917969 L 6.101562 12.777344
                        C 6.402344 12.925781 6.710938 13.039062 7.027344 13.113281
                        C 7.339844 13.1875 7.65625 13.222656 7.980469 13.222656
                        C 8.835938 13.222656 9.613281 12.988281 10.316406 12.511719
                        C 11.039062 12.035156 11.601562 11.378906 12.007812 10.554688
                        C 12.433594 9.726562 12.644531 8.839844 12.644531 7.898438 L 12.644531 7.738281
                        Z M 12.632812 7.558594 "
                />
            </svg>`,
                snapshotButton: `
                <svg
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    class="bi bi-camera"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3
                            H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12
                            a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172
                            a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828
                            A2 2 0 0 1 3.172 4H2z"
                    />
                    <path
                        fill-rule="evenodd"
                        d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                    />
                    <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
            `,
                cancelButton: "Cancel",
                confirmButton: "Confirm"
            }
        }
    }),
    EC = Et.View.extend({
        template: at.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new xC,
        regions: {
            camera: "#cameraRegion"
        },
        bindings: {
            "#exitButton": {
                observe: "strings",
                onGet: t => t.exitButton
            },
            "#switchButton": {
                observe: "strings",
                updateMethod: "html",
                onGet: t => t.switchButton
            },
            "#snapshotButton": {
                observe: "strings",
                updateMethod: "html",
                onGet: t => t.snapshotButton
            },
            "#cancelButton": {
                observe: "strings",
                onGet: t => t.cancelButton
            },
            "#confirmButton": {
                observe: "strings",
                onGet: t => t.confirmButton
            }
        },
        initialize(t) {
            this.cameraView = this.cameraView || new CC(t), this.listenTo(this.model, "change", this.update, this), this.update()
        },
        update() {
            this.cameraView.model.set("width", this.model.get("size").width), this.cameraView.model.set("height", this.model.get("size").height), this.cameraView.model.set("mask", this.model.get("mask")), this.cameraView.model.set("sizesToSend", this.model.get("sizesToSend"))
        },
        onBeforeDestroy() {
            this.getRegion("camera").empty()
        },
        onRender() {
            this.showChildView("camera", this.cameraView)
        },
        onChildviewCameraSnapshot(t) {
            t.length === 1 ? this.triggerMethod("client:message", {
                action: "camera",
                ...t[0]
            }) : this.triggerMethod("client:message", {
                action: "camera",
                pictures: t
            })
        },
        onAttach() {
            this.stickit()
        },
        onChildviewCameraExit() {
            this.triggerMethod("client:message", {
                action: "cancel"
            })
        }
    }),
    _C = '<a class="change-color button-color btn"></a>',
    SC = Et.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: at.template(_C),
        events: {
            click: "onClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    observe: ["className", "selected"],
                    name: "class",
                    onGet(t) {
                        let e = "";
                        return t[0] && (e += t[0]), t[1] && (e += " selected"), e
                    }
                }, {
                    name: "data-thickness",
                    observe: "thickness"
                }, {
                    name: "data-color",
                    observe: "hex"
                }]
            },
            "a.button-color": {
                attributes: [{
                    name: "data-color",
                    observe: "hex"
                }, {
                    name: "style",
                    observe: "hex",
                    onGet(t) {
                        return this.getOption("transparent") ? "" : `background-color: ${t};`
                    }
                }]
            }
        },
        onRender() {
            this.stickit()
        },
        onClick() {
            this.triggerMethod("palette:select", this.model)
        }
    }),
    kC = Et.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: SC,
        collection: new ot.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    TC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp3/pollposition/assets/5f12600b.png"/></svg>\r
        </button>\r
    </li>\r
    <li class="pull-left button-pad"> \r
        <button id="thicknessButton" class="thickness button">  \r
            <div class="thickness-circle"></div>  \r
        </button>  \r
    </li> \r
    <li class="pull-right button-pad">\r
        <button id="showPaletteButton" class="showPalette button">\r
        </button>\r
    </li>\r
    <li class="pull-right button-pad">\r
        <button aria-label="choose color" id="currentColorButton" class="button currentColorButton">\r
            <div id="currentColor" class="currentColor"></div>\r
        </button>\r
    </li>\r
    <li id="color-palette" class="hide">\r
    </li>\r
</ul>\r
<div id="colorPaletteRegion" class="colorPaletteRegion">\r
`,
    AC = Et.View.extend({
        tagName: "div",
        className: "picker",
        template: at.template(TC),
        model: new ot.Model({}),
        regions: {
            colorPalette: "#colorPaletteRegion"
        },
        events: {
            "click #currentColorButton": "onPaletteClick",
            "click #showPaletteButton": "onPaletteClick"
        },
        triggers: {
            "click #thicknessButton": "choose:thickness",
            "click #undoButton": "choose:undo"
        },
        bindings: {
            "#currentColor": {
                attributes: [{
                    name: "style",
                    observe: "currentColor",
                    onGet(t) {
                        return `background-color: ${t}`
                    }
                }]
            },
            ".colorPaletteRegion": {
                classes: {
                    visible: {
                        observe: "visiblePalette"
                    }
                }
            },
            ".thickness-circle": {
                attributes: [{
                    name: "style",
                    observe: "thickness",
                    onGet(t) {
                        return `width: ${t*3}px; height: ${t*3}px;`
                    }
                }]
            }
        },
        initialize() {
            this.colorPaletteComponent = this.colorPaletteComponent || new kC({
                collection: new ot.Collection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("colorPalette", this.colorPaletteComponent)
        },
        onAttach() {
            this.stickit()
        },
        update() {
            const t = this.model.get("colors").map(e => typeof e == "object" ? e : {
                hex: e
            });
            this.colorPaletteComponent.collection.set(t)
        },
        onLine() {
            this.showPalette(!1)
        },
        onPaletteClick() {
            this.showPalette(!0)
        },
        showPalette(t = !0) {
            this.model.set("visiblePalette", t)
        },
        onChildviewChildviewPaletteSelect(t) {
            this.triggerMethod("choose:color", t), this.showPalette(!1)
        }
    });
class Ju {
    constructor(e, n, i) {
        st(this, "options");
        st(this, "canvas");
        st(this, "canvasCTX");
        st(this, "tipCanvas");
        st(this, "tipCanvasCTX");
        st(this, "lines", []);
        st(this, "image");
        st(this, "startX", null);
        st(this, "startY", null);
        st(this, "smoothedMouseX", null);
        st(this, "smoothedMouseY", null);
        st(this, "lastMouse", {});
        st(this, "lastMouseChangeVector", {});
        st(this, "lastSmoothedMouse", {});
        st(this, "lastThickness");
        st(this, "lastRotation");
        st(this, "colorLevel");
        this.options = i, this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = n, this.canvasCTX = this.canvas.getContext("2d"), this.tipCanvas = document.createElement("canvas"), this.tipCanvas.width = e, this.tipCanvas.height = n, this.tipCanvasCTX = this.tipCanvas.getContext("2d")
    }
    addLine(e, n, i, o) {
        this.lines.push({
            thickness: e,
            color: n,
            highlighter: i,
            points: []
        }), this.addPoint(o), this.update()
    }
    updateSize(e, n) {
        this.canvas.width = e, this.canvas.height = n
    }
    addPoint(e) {
        const n = {
                x: parseInt(e.x, 10),
                y: parseInt(e.y, 10)
            },
            i = this.lines[this.lines.length - 1];
        if (!(!i || !i.points)) {
            if (i.points.length !== 0) {
                const o = i.points[i.points.length - 1];
                if (o.x === n.x && o.y === n.y) return
            }
            i.points.push(n), i.points.length === 2 && i.points.unshift(i.points[1]), this.update()
        }
    }
    setLines(e) {
        const n = e.map(i => {
            let o = i.points;
            return typeof o == "string" ? o = i.points.split("|").map(f => ({
                x: parseInt(f.split(",")[0], 10),
                y: parseInt(f.split(",")[1], 10)
            })) : o = o.map(f => ({
                x: parseInt(f.x, 10),
                y: parseInt(f.y, 10)
            })), {
                color: i.color,
                thickness: i.thickness,
                points: o
            }
        });
        this.lines = n, this.update()
    }
    setImage(e) {
        this.image = e, this.update()
    }
    reset() {
        this.lines = [], this.image = null, this.update()
    }
    getLastLine() {
        const e = this.lines[this.lines.length - 1];
        return e ? {
            thickness: e.thickness,
            color: e.color,
            points: e.points.map(n => `${n.x},${n.y}`).join("|")
        } : null
    }
    getLines() {
        return this.lines.map(e => ({
            thickness: e.thickness,
            color: e.color,
            points: e.points.map(n => `${n.x},${n.y}`).join("|")
        }))
    }
    update() {
        this.canvasCTX && this.canvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tipCanvasCTX && this.tipCanvasCTX.clearRect(0, 0, this.canvas.width, this.canvas.height), this.image && this.canvasCTX.drawImage(this.image, 0, 0), this.lines && this.lines.forEach(e => this.drawLine(e))
    }
    startLineInContext(e, n, i) {
        const o = e * this.options.minThickness;
        this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, o * this.options.dotMultiplier, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.options.cappedEnds && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.lastMouseChangeVector = {
            x: 0,
            y: 0
        }, this.startX = n, this.lastMouse.x = n, this.smoothedMouseX = n, this.lastSmoothedMouse.x = n, this.startY = i, this.lastMouse.y = i, this.smoothedMouseY = i, this.lastSmoothedMouse.y = i, this.lastThickness = o, this.lastRotation = void 0, this.colorLevel = 0
    }
    continueLineInContext(e, n, i) {
        const o = n - this.lastMouse.x,
            f = i - this.lastMouse.y;
        o * this.lastMouseChangeVector.x + f * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (n - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
        const v = this.smoothedMouseX - this.lastSmoothedMouse.x,
            b = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(v * v + b * b);
        let A;
        k !== 0 ? A = Math.PI / 2 + Math.atan2(b, v) : A = 0;
        const D = this.options.minThickness * e + this.options.thicknessFactor * k,
            V = this.lastThickness + this.options.thicknessSmoothingFactor * (D - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = A);
        const Y = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(A),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(A),
            K = Math.sin(A),
            re = Math.cos(A),
            m = this.lastThickness * Y,
            P = this.lastThickness * ie,
            q = V * K,
            le = V * re,
            se = .33 * k * Y,
            ye = -.33 * k * ie,
            d = this.lastSmoothedMouse.x + P + se,
            _e = this.lastSmoothedMouse.y + m + ye,
            Oe = this.lastSmoothedMouse.x - P + se,
            Pe = this.lastSmoothedMouse.y - m + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(d, _e, this.smoothedMouseX + le, this.smoothedMouseY + q), this.canvasCTX.lineTo(this.smoothedMouseX - le, this.smoothedMouseY - q), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * V;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + le, this.smoothedMouseY + q), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * le, i + this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * le, i - this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(this.smoothedMouseX - le, this.smoothedMouseY - q), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = A, this.lastThickness = V, this.lastMouseChangeVector = {
            x: o,
            y: f
        }, this.lastMouse = {
            x: n,
            y: i
        }
    }
    drawLine(e) {
        if (!(!e || !e.color || !e.points || !e.thickness) && !(!this.canvasCTX || !this.tipCanvasCTX)) {
            this.canvasCTX.strokeStyle = e.color, this.canvasCTX.lineWidth = this.options.borderWidth, this.canvasCTX.lineCap = "round", this.canvasCTX.lineJoin = "bevel", this.canvasCTX.fillStyle = e.color, this.canvasCTX.strokeStyle = e.color, this.tipCanvasCTX.lineWidth = this.options.borderWidth, this.tipCanvasCTX.fillStyle = e.color, this.tipCanvasCTX.strokeStyle = e.color;
            for (let n = 0; n < e.points.length; n++) {
                const i = e.points[n];
                n === 0 && this.startLineInContext(e.thickness, i.x, i.y), this.continueLineInContext(e.thickness, i.x, i.y)
            }
            this.canvasCTX.drawImage(this.tipCanvas, 0, 0)
        }
    }
}
const ac = {
    color: "#000000",
    thickness: 3,
    highlighter: !1,
    sketchOptions: {
        minThickness: .5,
        thicknessFactor: .1,
        smoothingFactor: .55,
        thicknessSmoothingFactor: .6,
        tipTaperFactor: .7,
        cappedEnds: !1,
        borderWidth: 2,
        dotMultiplier: 2
    }
};
class OC {
    constructor(e, n = {}) {
        st(this, "canvasSelector");
        st(this, "canvas");
        st(this, "ctx");
        st(this, "options");
        st(this, "history");
        st(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = ae(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(ac, n), this.history = [], this.layerNames.forEach(i => {
            const o = new Ju(this.canvas.width, this.canvas.height, this.options.sketchOptions);
            o.name = i, this[i] = o
        })
    }
    update() {
        !this.ctx || (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.layerNames.forEach(e => {
            this.ctx.drawImage(this[e].canvas, 0, 0)
        }))
    }
    updateSize(e) {
        this.layerNames.forEach(n => {
            this[n].updateSize(e.width, e.height)
        })
    }
    setThickness(e) {
        this.options.thickness = e
    }
    setColor(e) {
        this.options.color = e
    }
    getHighlighter() {
        return !!this.options.highlighter
    }
    setHighlighter(e) {
        this.options.highlighter = e
    }
    setOptions(e) {
        const n = Object.assign(ac.sketchOptions, e);
        this.layerNames.forEach(i => {
            this[i].options = n, this[i].update()
        }), this.update()
    }
    startLine(e) {
        (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addLine(this.options.thickness, this.options.color, this.options.highlighter, e)
    }
    moveLine(e) {
        (this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch).addPoint(e), this.update()
    }
    endLine() {
        const e = this.options.highlighter ? this.highlighterLineSketch : this.markerLineSketch,
            n = e.lines.pop();
        n.points && n.points.length > 1 && n.points.push(n.points[n.points.length - 2]), this.options.highlighter ? (this.highlighterSketch.lines.push(n), this.highlighterSketch.update(), this.history.push("highlighterSketch")) : (this.markerSketch.lines.push(n), this.markerSketch.update(), this.history.push("markerSketch")), e.reset(), this.update()
    }
    undoLine() {
        if (!this.history.length) return;
        const e = this.history.pop();
        this[e].lines.pop() && this[e].update()
    }
    isClean() {
        return !this.history.length
    }
    setLayerLines(e, n) {
        if (this.layerNames.indexOf(e) === -1) {
            console.error("invalid layer name", e);
            return
        }
        this[e].setLines(n), this.update()
    }
    setLayerImage(e, n) {
        this[e].setImage(n), this.update()
    }
    getLastLine() {
        return this.history.length === 0 ? null : this[this.history[this.history.length - 1]].getLastLine() || null
    }
    getLines() {
        return [...this.highlighterSketch.getLines(), ...this.markerSketch.getLines()]
    }
    getDataURL(e, n) {
        e === void 0 && (e = 1);
        const i = document.createElement("canvas"),
            o = this.canvas.width * e,
            f = this.canvas.height * e;
        i.width = o, i.height = f;
        const v = i.getContext("2d");
        return n && (v.fillStyle = n, v.fillRect(0, 0, o, f)), v.drawImage(this.highlighterSketch.canvas, 0, 0, o, f), v.drawImage(this.markerSketch.canvas, 0, 0, o, f), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const RC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    IC = Et.View.extend({
        className: "Sketchpad canvasContainer",
        template: at.template(RC),
        images: {},
        myViewOptions: ["color", "thickness", "background", "image"],
        sketchpad: null,
        bindings: {
            ".sketchpad": {
                attributes: [{
                    name: "width",
                    observe: "size",
                    onGet(t) {
                        return t ? t.width : ""
                    }
                }, {
                    name: "height",
                    observe: "size",
                    onGet(t) {
                        return t ? t.height : ""
                    }
                }, {
                    name: "style",
                    observe: ["background", "backgroundImageUrl"],
                    onGet([t, e]) {
                        let n = "";
                        return e && (n += `background-image:url(${e});`), t && (n += `background-color:${t};`), n
                    }
                }]
            }
        },
        events: {
            "contextmenu canvas": "handleContextMenu",
            "mousedown canvas": "start",
            "touchstart canvas": "start",
            "mousemove canvas": "move",
            "touchmove canvas": "move"
        },
        initialize(t) {
            this.color = "black", this.thicknessScale = -1, this.mergeOptions(t, this.myViewOptions), this.model.on("change:size", this.onUpdateSize, this), this.endWithContext = this.end.bind(this)
        },
        onUpdateSize() {
            this.sketchpad && this.sketchpad.updateSize(this.model.get("size"))
        },
        onRender() {
            this.stickit(), document.addEventListener("touchend", this.endWithContext), document.addEventListener("mouseup", this.endWithContext)
        },
        onAttach() {
            const t = `sketchpad-${this.model.cid}`;
            this.$("#fullLayer").addClass(t), this.sketchpad = new OC(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = ae(n)[0].width / ae(n).width(),
                o = n.getBoundingClientRect(),
                f = this.model.get("size"),
                v = this.sketchpad.options.thickness;
            let b = (e.clientX - o.left) * i;
            b = Math.min(f.width - v, Math.max(v, b));
            let k = (e.clientY - o.top) * i;
            return k = Math.min(f.height - v, Math.max(v, k)), {
                x: b,
                y: k
            }
        },
        fullImageCoord(t) {
            return `${parseInt(t.x+this.viewportOffset.x,10)},${parseInt(t.y+this.viewportOffset.y,10)}`
        },
        start(t) {
            const e = this.getCoords(t);
            this.sketchpad.startLine(e), this.isDrawing = !0
        },
        move(t) {
            if (!this.isDrawing) return;
            const e = this.getCoords(t);
            this.sketchpad.moveLine(e)
        },
        end(t, e) {
            !this.isDrawing || (this.isDrawing = !1, this.sketchpad.endLine(), e || this.triggerMethod("sketchpad:line", this.sketchpad.getLastLine()))
        },
        onBeforeDestroy() {
            this.getOption("mode") !== null && this.end(null, !0), document.removeEventListener("touchend", this.endWithContext), document.removeEventListener("mouseup", this.endWithContext)
        },
        leave() {
            this.getOption("mode") !== "draw" && this.tipShape.graphics.clear()
        },
        undoLine() {
            this.sketchpad.undoLine(), this.sketchpad.update(), this.triggerMethod("sketchpad:undo", this.sketchpad.history.length)
        },
        resetAll() {
            this.sketchpad && this.sketchpad.resetAll()
        },
        getColor() {
            return this.color
        },
        setColor(t) {
            this.color = t, this.sketchpad && this.sketchpad.setColor(t)
        },
        getThickness() {
            return this.thicknessScale
        },
        setThickness(t) {
            this.thicknessScale = t, this.sketchpad && this.sketchpad.setThickness(t)
        },
        getHighlighter() {
            return this.sketchpad ? this.sketchpad.getHighlighter() : !1
        },
        setHighlighter(t) {
            this.sketchpad && this.sketchpad.setHighlighter(t)
        },
        setOptions(t) {
            this.sketchpad && this.sketchpad.setOptions(t)
        },
        getLines() {
            return this.sketchpad ? this.sketchpad.getLines() : []
        },
        getImageData() {
            return this.sketchpad ? this.sketchpad.getDataURL(1, this.model.get("background")) : null
        },
        getThumbnailImage() {
            return this.sketchpad ? this.sketchpad.getDataURL(.33) : null
        },
        setLines(t) {
            !this.sketchpad || this.sketchpad.setLayerLines("backgroundSketch", t)
        },
        setImage(t) {
            const e = this.getOption("images")[t];
            if (!e) return;
            const n = new Image;
            n.onload = i => {
                const o = i.target;
                this.sketchpad.setLayerImage("backgroundSketch", o)
            }, n.src = e
        },
        handleContextMenu(t) {
            t.preventDefault()
        }
    }),
    DC = `<div class="controller-content">\r
    <div class="canvas-container">\r
        <div id="prompt" class="prompt"></div>\r
        <div id="toolbar" class="toolbar"></div>\r
        <div id="sketchpad"></div>\r
        <div id="buttons" class="buttons"></div>\r
        <div id="post-sketchpad" class="post-sketchpad">\r
            <div id="submit">\r
                <button id='submitdrawing' class="button submitDrawing">Submit</button><br/>\r
            </div>\r
            <button id='censorOptions' class='button'>Censor Options</button>\r
            <div class="footer"></div>\r
        </div>\r
        </div>\r
    </div>\r
</div>\r
`,
    MC = si.extend({
        defaults: {
            drawId: 0,
            objectKey: void 0,
            size: {
                width: 240,
                height: 300
            },
            actions: !1,
            colors: ["#3c6e6f", "#007727", "#b8aa01", "#0350a0", "#000000", "#966401", "#48019d", "#730075", "#9c0e3e"],
            background: "",
            thicknesses: [3, 6],
            defaultIndex: 4,
            classes: [],
            prompt: {
                html: ""
            },
            live: !1,
            image: !1,
            backgroundImageUrl: !1,
            lines: !1,
            hideSubmit: !1,
            autoSubmit: !1,
            allowEmpty: !1,
            disabled: !1,
            debug: !1,
            strings: {
                drawing_empty: "You must draw something!",
                submit: "submit",
                ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!"
            }
        }
    }),
    LC = Et.View.extend({
        className: "Draw",
        template: at.template(DC),
        model: new MC,
        regions: {
            prompt: "#prompt",
            sketchpad: "#sketchpad",
            toolbar: "#toolbar",
            buttons: "#buttons"
        },
        events: {
            "click #submitdrawing": "onChildviewButtonSubmit"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            "#censorOptions": {
                visible: !1
            },
            ".footer": {
                observe: "footer",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : ae("<div />").text(t.text).html() : null
                }
            },
            ".submitDrawing": {
                observe: ["hideSubmit", "actions", "strings"],
                visible: !0,
                updateView: !0,
                onGet(t) {
                    return t[0] || t[1] ? !1 : t[2] === void 0 ? "" : t[2].submit || "Submit"
                }
            }
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({}), this.toolbarComponent = this.toolbarComponent || new AC({
                model: new ot.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new IC({
                model: new ot.Model
            }), this.buttonsCollection = this.buttonsCollection || new ot.Collection([]), this.buttonsComponent = this.buttonsComponent || new fi({
                block: !1,
                collection: this.buttonsCollection
            }), this.options.thicknessIndex = -1, this.options.colorIndex = -1, this.drawId = this.model.get("drawId"), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        update() {
            this.model.get("drawId") !== this.getOption("drawId") && (this.resetDrawing(), this.drawId = this.model.get("drawId")), this.model.get("prompt") && this.promptComponent.model.set(this.model.get("prompt")), this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                width: 720,
                height: 900
            }), this.model.get("image") && (this.sketchpadComponent.setImage(this.images[this.model.get("image")]), this.onResize()), this.model.get("background") && this.sketchpadComponent.model.set("background", this.model.get("background")), this.model.get("backgroundImageUrl") && this.sketchpadComponent.model.set("backgroundImageUrl", this.model.get("backgroundImageUrl")), this.toolbarComponent && this.toolbarComponent.model.set("colors", this.model.get("colors")), this.model.get("actions") && this.buttonsCollection.set(this.model.get("actions")), this.model.get("autoSubmit") && this.autoSubmit(), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.onResize()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("toolbar", this.toolbarComponent), this.showChildView("sketchpad", this.sketchpadComponent), this.showChildView("buttons", this.buttonsComponent)
        },
        onChildviewAttach() {
            this.model.get("size") ? this.sketchpadComponent.model.set("size", this.model.get("size")) : this.sketchpadComponent.model.set("size", {
                width: 720,
                height: 900
            })
        },
        onAttach() {
            this.stickit(), this.update(), this.onResize(), kt.vibrate()
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext)
        },
        resetDrawing() {
            this.sketchpadComponent.resetAll(), this.onChildviewSketchpadReady()
        },
        onChildviewSketchpadReady() {
            this.model.get("thicknesses") && this.options.thicknessIndex === -1 && this.onChildviewChooseThickness(), this.model.get("colors") && this.options.colorIndex === -1 && this.model.get("colors") && this.model.get("defaultIndex") !== void 0 && this.chooseColorByIndex(this.model.get("defaultIndex")), this.model.get("sketchOptions") && this.sketchpadComponent && this.sketchpadComponent.setOptions(this.model.get("sketchOptions")), this.model.get("lines") && this.sketchpadComponent.setLines(this.model.get("lines"))
        },
        chooseColorByIndex(t) {
            (t < 0 || t > this.model.get("colors").length) && (t = 0);
            let e = this.model.get("colors")[t];
            typeof e != "object" && (e = {
                hex: e
            }), this.chooseColor(e.hex, e)
        },
        onChildviewChooseColor(t) {
            this.chooseColor(t.get("hex"), t.attributes)
        },
        onChildviewChooseThickness() {
            this.options.thicknessIndex = (this.options.thicknessIndex + 1) % this.model.get("thicknesses").length;
            const t = this.model.get("thicknesses")[this.options.thicknessIndex];
            this.sketchpadComponent.setThickness(t), this.toolbarComponent && this.toolbarComponent.model.set("thickness", t)
        },
        onChildviewChooseUndo() {
            this.sketchpadComponent.undoLine()
        },
        chooseColor(t, e = {}) {
            this.sketchpadComponent.setColor(t), this.sketchpadComponent.setHighlighter(e.highlighter), this.toolbarComponent.model.set("highlighter", e.highlighter), e.thickness !== void 0 && this.sketchpadComponent.setThickness(e.thickness), this.toolbarComponent.model.set("currentColor", t)
        },
        onChildviewSketchpadLine(t) {
            if (this.toolbarComponent && this.toolbarComponent.onLine && this.toolbarComponent.onLine(), this.model.get("live")) {
                const e = {
                        line: t,
                        highlighter: this.sketchpadComponent.getHighlighter(),
                        action: "line"
                    },
                    n = this.model.get("objectKey");
                if (n !== void 0) {
                    const i = this.sketchpadComponent.getLines();
                    e.objectKey = n, e.val = {
                        lines: i
                    }
                }
                this.triggerMethod("client:message", e)
            }
        },
        onChildviewSketchpadUndo(t) {
            if (this.model.get("live")) {
                const e = {
                        action: "undo",
                        linesLength: t
                    },
                    n = this.model.get("objectKey");
                n !== void 0 && (e.objectKey = n, e.val = {
                    lines: this.sketchpadComponent.getLines()
                }), this.triggerMethod("client:message", e)
            }
        },
        autoSubmit() {
            this.sketchpadComponent.end(), this.sketchpadComponent.getLines().length > 0 && this.onChildviewButtonSubmit()
        },
        onChildviewChildviewButtonChoose(t) {
            this.onChildviewButtonChoose(t)
        },
        onChildviewButtonChoose(t) {
            this.triggerMethod("client:message", {
                action: "choose",
                index: t.get("key")
            })
        },
        onChildviewChildviewButtonSubmit() {
            this.onChildviewButtonSubmit()
        },
        onChildviewButtonSubmit() {
            const t = this.sketchpadComponent.getLines();
            if (t.length === 0 && !this.model.get("allowEmpty")) return kt.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                    lines: t,
                    action: "submit"
                },
                n = this.model.get("objectKey");
            return n && (e.objectKey = n, e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), this.model.get("debug") && kt.show("custom", {
                html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
            }), !1
        },
        onObjectFilterError() {
            kt.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
        },
        onResize() {
            const t = ae("#sketchpad"),
                e = ae("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(ae(".controller-content").css("border-top-width"), 10) * 2 + ae(".playerTopBar").innerHeight() + ae("#prompt").innerHeight() + ae("#toolbar").innerHeight() + parseInt(ae(".canvasContainer").css("border-top-width"), 10) * 2 + ae("#buttons").innerHeight() + ae("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(ae(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(ae(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(ae(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                o = e.width,
                f = e.height,
                v = 2,
                b = Math.min(t.width() - i, o * v),
                k = Math.max(ae("#controller-container").innerHeight() - n, 250),
                A = Math.min(b / o, k / f),
                D = o * A,
                V = f * A;
            e.style.width = `${D}px`, e.style.height = `${V}px`, window.scrollTo(0, 0)
        }
    }),
    PC = `<div>
    <div id="controller" class="state-controller controller-content">
        <form class="enterSingleTextForm">
            <fieldset class="enterSingleTextFieldset">
                <div id="prompt" class="prompt">prompt</div>
                <div id="input-region" class=""></div>
                <div id="buttons" class="">buttons</div>
            </fieldset>
        </form>
        <div class="enterSingleTextDone">
            <span class="doneText"></span>
        </div>
    </div>
</div>
`,
    NC = si.extend({
        defaults: {
            state: "EnterSingleText",
            actions: [{
                text: "submit",
                action: "submit"
            }],
            allowEmpty: !1,
            autoSubmit: !1,
            classes: [],
            doneText: "",
            entryId: void 0,
            entry: null,
            live: !1,
            maxLength: 500,
            textKey: void 0,
            textRingName: null,
            placeholder: "",
            autocapitalize: !1,
            className: "",
            inlineSubmit: !1,
            inlineSubmitText: "Submit",
            error: "",
            strings: {
                ERROR_NOTHING_ENTERED: "You need to enter something!",
                ERROR_REJECTED_TEXT: "That's not allowed, enter something else! (You can change the level of filtering in the game's settings menu)"
            }
        }
    }),
    VC = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: at.template(PC),
        model: new NC,
        sessionModule: "comment",
        sessionName: " Comments",
        regions: {
            prompt: "#prompt",
            input: "#input-region",
            buttons: "#buttons"
        },
        events: {
            "submit form": "onChildviewInputSubmit"
        },
        bindings: {
            ".enterSingleTextForm": {
                observe: "entry",
                visible(t) {
                    return !t
                }
            },
            ".enterSingleTextDone": {
                observe: "entry",
                visible: !0
            },
            ".doneText": {
                observe: "doneText",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : ae("<div />").text(t.text).html() : ""
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor}`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                    }
                }]
            }
        },
        initialize() {
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new Bi({
                model: new ot.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new to({
                model: new ot.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new ot.Collection([{
                text: "submit"
            }]), this.buttonsComponent = this.buttonsComponent || new fi({
                block: !0,
                collection: this.buttonsCollection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        update() {
            this.model.get("isAudience") && ((this.model.get("entryId") === void 0 || this.model.get("entryId") !== this.entryId) && (this.audienceEntry = void 0), this.audienceEntry && this.model.setUpdate({
                entry: this.audienceEntry,
                entryId: this.model.get("entryId") || 0
            })), this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.inputComponent.model.set(this.model.attributes), this.buttonsComponent.options.block = this.model.get("block"), this.buttonsCollection.set(this.model.get("actions") || [{
                text: "submit",
                action: "submit"
            }]), this.model.get("entryId") && this.model.get("entryId") !== this.currentEntry && (this.inputComponent.clearInput(), this.currentEntry = this.model.get("entryId")), this.$el.find(".enterSingleTextFieldset").prop("disabled", !1), this.$el.find("textarea").focus(), this.stickit(), this.model.get("autoSubmit") && this.shouldSubmit && this.onChildviewInputSubmit()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("input", this.inputComponent), this.showChildView("buttons", this.buttonsComponent), this.stickit()
        },
        onAttach() {
            this.update(), kt.vibrate()
        },
        onChildviewInputText(t) {
            let e = t.getValue();
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = at.throttle(() => {
                const n = t.getSanitizedValue();
                if (n.length === 0) return;
                const i = {
                        action: "write-live",
                        entry: n
                    },
                    o = this.model.get("textKey");
                o !== void 0 && (i.textKey = o, i.val = n), this.triggerMethod("client:message", i)
            }, 500)), this.throttledSend())
        },
        onChildviewInputSubmit() {
            let t = this.inputComponent.getValue(),
                e = this.inputComponent.getSanitizedValue();
            if (this.model.setUpdate({
                    error: null
                }), e.length === 0 && !this.model.get("allowEmpty")) return this.model.setUpdate({
                error: this.model.get("strings").ERROR_NOTHING_ENTERED
            }), !1;
            t.length > this.model.get("maxLength") && (this.inputComponent.setValue(t.substr(0, this.model.get("maxLength"))), t = this.inputComponent.getValue(), e = this.inputComponent.getSanitizedValue()), this.shouldSubmit = !1;
            const n = {
                    action: "write",
                    entry: e
                },
                i = this.model.get("textKey");
            return i && (n.textKey = i, n.val = e), this.triggerMethod("client:message", n), this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = e, this.entryId = this.model.get("entryId") || 0, this.model.setUpdate({
                entry: this.audienceEntry,
                shotId: this.entryId
            })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1
        },
        onTextFilterError() {
            this.model.setUpdate({
                error: this.model.get("strings").ERROR_REJECTED_TEXT
            })
        },
        onChildviewChildviewButtonSuggestion() {
            const t = this.model.get("suggestions"),
                e = this.inputComponent.getSanitizedValue(),
                n = at.without(t, e);
            return this.inputComponent.setValue(at.shuffle(n)[0]), !1
        },
        onChildviewChildviewButtonChoose(t) {
            return this.triggerMethod("client:message", {
                action: t.get("key")
            }), !1
        },
        onChildviewChildviewButtonHelp() {
            return this.triggerMethod("client:message", {
                action: "help"
            }), !1
        }
    });
Et.View.extend({
    model: new ot.Model({}),
    myViewOptions: ["width", "height", "sketchOptions"],
    template: at.template(`
        <h1 class='title'>ImageView</h1>
        <img class='imageData'>
    `),
    initialize(t) {
        this.mergeOptions(t, this.myViewOptions), this.model.on({
            "change:lines": this.setImageFromLines.bind(this)
        })
    },
    bindings: {
        ".title": {
            observe: "title",
            visible: !0,
            updateView: !0
        },
        ".imageData": {
            attributes: [{
                name: "src",
                observe: "src"
            }]
        }
    },
    setImageFromLines() {
        const t = this.getOption("width") || 640,
            e = this.getOption("height") || 640,
            n = this.getOption("sketchOptions"),
            i = this.model.get("lines") || [];
        if (!i.length || !n) return;
        const o = new Ju(t, e, n);
        o.setLines(i), this.model.set("src", o.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
const lc = Et.View.extend({
        appId: "legacymain",
        appTag: "legacymain",
        template: null,
        client: null,
        initialize(t) {
            this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new ot.Model({});
            const e = this.client.parseEntities();
            this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
                this.update().catch(this.caughtError)
            }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
        },
        render() {
            this.model.set("username", nn.safeText(this.client.name), {
                silent: !0
            }), this.$el.html(this.template(this.model.toJSON())), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        onEntityDidChange(t, e) {
            this.model.unset(t, {
                silent: !0
            }), this.model.set(t, e)
        },
        controllerUpdate() {
            const t = this.model.get("room") || {},
                e = t.state || "";
            let n = t.lobbyState;
            !n && e.indexOf("_") !== -1 && (n = t.state.split("_")[1]), n === "PostGame" || e === "Credits" || e === "GameOver" || e === "PostGame" || e === "DayEnd" || t.gameResults ? ni.isInitialized ? ni.show() : ni.init(this.getOption("appTag")).then(() => {
                ni.show()
            }) : ni.hide(), t.platformId && Zt.setTag(`platform-${t.platformId}`)
        },
        async update() {
            return null
        },
        caughtError(t) {
            throw t
        },
        onAttach() {
            this.update().catch(this.caughtError), ae(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
        },
        showTwitchBroadcasterDialog(t) {
            let e = `<div class='icon-${this.client.roles.broadcaster.platform}'>${this.client.roles.broadcaster.name}</div>`;
            e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), kt.show("custom", {
                html: e,
                position: "bottom",
                timer: t,
                backdrop: "transparent",
                customClass: {
                    container: "jbgTwitchContainer",
                    popup: "jbgTwitchPopup",
                    htmlContainer: "jbgTwitchContent",
                    closeButton: "jbgCloseButton"
                },
                showCloseButton: !0,
                closeButtonHtml: '<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path><path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" /></svg >',
                showConfirmButton: !1,
                showClass: {
                    popup: "jbgTwitchShow"
                },
                hideClass: {
                    popup: "jbgTwitchHide"
                }
            })
        },
        onBeforeDestroy() {
            this.model.stopListening(), this.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.off("client:connection", this.onConnectionMessageWithContext), this.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.off("client:disconnected", this.onDisconnectedWithContext)
        },
        artifactClicked() {
            Ni.setAsViewed(0)
        },
        showScreen(t, e) {
            const n = ae(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (ae(this.activeScreen).fadeOut("fast", () => {}), ae(this.activeScreen).show(), ae(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
                e && e()
            }), this.activeScreen = t, this.onResize()), !1
        },
        notify() {
            kt.vibrate()
        },
        onRoomWasDestroyed() {
            Zt.remove("roomCode"), Zt.remove("reconnect"), kt.show("error", {
                titleText: "Disconnected",
                text: "Thanks for playing!",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onDisconnected() {
            kt.show("error", {
                titleText: "Disconnected",
                text: "You have been disconnected.",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onConnectionMessage(t) {
            const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
            if (kt.show("toast", {
                    text: e
                }), t.status === "connected") {
                const n = this.client.parseEntities();
                this.model.set(n)
            }
        },
        onResize() {
            const t = ae("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? ae("#slide-in-banner").outerHeight(!0) : 0,
                n = ae(window).width(),
                i = ae(window).height() - t;
            ae(`.${this.getOption("appTag")}-page`).css("height", i - e), ae(`.${this.getOption("appTag")}-page`).attr("height", i - e), ae(`.${this.getOption("appTag")}-page`).css("top", t), ae(`.${this.getOption("appTag")}-page`).css("width", n), ae(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    BC = `<div id="controller" class="state-controller controller-content">
    <div id="title" class="lobbyTitle">title</div>
    <div id="vipMenu" class="vipMenu">
        <div id="choices" class="choicesContainer">choices</div>
    </div>
    <div class="characterSelect">
        <div id="charactersPrompt" class="charactersPrompt">
            <span id="charactersPromptText" class="charactersPromptText"></span>
        </div>
        <div id="characters" class="charactersContainer"></div>
    </div>
    <div id="artifactId" class="artifactContainer text">
        <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
            <button id="artifactButton" class="artifactButton"></button>
        </a>
    </div>
</div>`,
    $C = si.extend({
        defaults: {
            canChangeName: !1,
            playerIsVIP: !1,
            playerCanStartGame: !1,
            playerCanCensor: !1,
            gameCanStart: !1,
            gameIsStarting: !1,
            gameEnded: !1,
            game: {
                familyFriendly: !1,
                extendedTimers: !1,
                requireTwitch: !1,
                controllerOnly: !1,
                skipTutorials: !1
            },
            choices: [],
            artifact: null,
            characters: null,
            censorablePlayers: [],
            playerCanDoEpisodes: !1,
            playerCanReport: !1,
            playerCanViewAuthor: !1,
            lastUGCResult: null,
            history: [],
            activeContentId: null,
            formattedActiveContentId: null,
            isLocal: !1,
            strings: {
                wait: "Sit back and relax!",
                vip_waiting: "Waiting for all players to join",
                vip_canStart: "Press this button when everybody has joined",
                vip_cancel: "Press this button to cancel game start",
                vip_postgame: "What would you like to do now?",
                vip_episodes_menu: "Episodes Menu",
                vip_episodes_unload: "Unload Episode",
                vip_episodes_report: "Report Episode",
                vip_episodes_warning: "Warning: user generated content is not rated",
                vip_episodes_load: "Load an episode by id:",
                vip_episodes_select: "Or select an episode:",
                vip_episodes_back: "Back",
                vip_episodes_submit: "SUBMIT",
                vip_episodes_view_author: "View Author",
                button_start: "Everybody's In",
                button_cancel: "Cancel",
                button_changename: "Change Name",
                button_sameplayers: "Same Players",
                button_newplayers: "New Players",
                prompt_entername: "Enter your name",
                prompt_choosecharacter: "Select your character",
                button_censorOptions: "Censor Options",
                censor_prompt: ""
            }
        }
    }),
    FC = Et.View.extend({
        tagName: "button",
        template: at.template('<span class="flex-item"></span>'),
        className() {
            return `characters ${this.model.get("name")}`
        },
        events: {
            click: "onCharacterClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "bgcolor",
                    onGet(t) {
                        return t ? `background-color: ${t};` : ""
                    }
                }, {
                    name: "aria-label",
                    observe: "name"
                }, {
                    name: "disabled",
                    observe: "available",
                    onGet(t) {
                        return t !== void 0 ? !t : null
                    }
                }],
                classes: {
                    active: "active",
                    selected: {
                        observe: "selected",
                        onGet(t) {
                            return t
                        }
                    },
                    disabled: {
                        observe: "available",
                        onGet(t) {
                            return !t
                        }
                    }
                }
            }
        },
        onCharacterClick() {
            this.trigger("character:click", this.model)
        },
        onRender() {
            this.stickit()
        }
    }),
    jC = Et.View.extend({
        className: "Lobby scrollable",
        template: at.template(BC),
        model: new $C,
        titleComponent: null,
        choicesListView: null,
        charactersListView: null,
        regions: {
            title: "#title",
            choices: "#choices",
            characters: "#characters"
        },
        events: {
            "click .choice-button": "onButtonClick",
            "click .artifactLink": "onArtifactClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor};`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".artifactContainer": {
                observe: "artifact",
                visible: !0
            },
            ".artifactLink": {
                attributes: [{
                    name: "href",
                    observe: "artifact",
                    onGet(t) {
                        if (!t) return null;
                        let e = "games.jackbox.tv";
                        return t.rootId.indexOf("test") !== -1 && (e = "games-test.jackbox.tv"), `https://${e}/artifact/${t.categoryId}/${t.artifactId}/`
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color: ${t.buttonColor}` : null
                    }
                }]
            },
            ".characterSelect": {
                observe: "characters",
                visible: !0
            },
            ".charactersPrompt": {
                observe: "characters",
                visible: !0,
                onGet(t) {
                    return t && !at.isEmpty(t)
                }
            },
            ".charactersPromptText": {
                observe: "strings",
                onGet() {
                    return this.getOption("strings").prompt_choosecharacter
                }
            }
        },
        strings: {},
        initialize() {
            this.titleComponent = new Bi({
                model: new ot.Model({})
            }), this.choicesListView = this.choicesListView || new fi, this.charactersListView = new Et.CollectionView({
                childView: FC,
                className: "charactersList",
                collection: new ot.Collection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        update() {
            if (this.strings = this.model.get("strings"), this.choicesListView.collection.reset(), this.titleComponent.model.set("html", this.getOption("strings").wait), this.model.get("playerIsVIP") && (this.model.get("gameCanStart") ? this.model.get("playerCanStartGame") && (this.model.get("gameIsStarting") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_cancel), this.choicesListView.collection.add({
                    className: "vipCancel",
                    html: this.getOption("strings").button_cancel,
                    action: "cancel"
                })) : this.model.get("gameFinished") ? (this.titleComponent.model.set("html", this.getOption("strings").vip_postgame), this.choicesListView.collection.add({
                    html: this.getOption("strings").button_sameplayers,
                    action: "PostGame_Continue"
                }), this.choicesListView.collection.add({
                    html: this.getOption("strings").button_newplayers,
                    action: "PostGame_NewGame"
                })) : (this.titleComponent.model.set("html", this.getOption("strings").vip_canStart), this.choicesListView.collection.add({
                    className: "vipStart",
                    html: this.getOption("strings").button_start,
                    action: "start"
                }), this.model.get("playerCanCensor") && this.model.get("censorablePlayers").length > 0 && this.choicesListView.collection.add({
                    className: "vipCensorOptions",
                    html: this.getOption("strings").button_censorOptions,
                    action: "censorOptions"
                }))) : this.titleComponent.model.set("html", this.getOption("strings").vip_waiting)), this.model.get("playerCanDoEpisodes")) {
                if (this.model.get("activeContentId")) {
                    const n = this.model.get("activeContentId"),
                        i = this.model.get("history").find(f => n === (f.remoteContentId || f.localContentId)),
                        o = i && i.metadata ? nn.htmlUnescape(i.metadata.title) : null;
                    o && this.choicesListView.collection.add({
                        type: "text",
                        text: o
                    }), this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_unload,
                        action: "ugc-unload",
                        block: !1
                    }), this.model.get("playerCanReport") && this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_report,
                        action: "ugc-report",
                        block: !1
                    }), this.model.get("playerCanViewAuthor") && this.choicesListView.collection.add({
                        html: this.getOption("strings").vip_episodes_view_author,
                        action: "ugc-view-author",
                        block: !1
                    })
                } else this.choicesListView.collection.add({
                    className: "vipEpisodesMenu",
                    html: this.getOption("strings").vip_episodes_menu,
                    action: "ugc"
                });
                const e = this.model.get("lastUGCResult");
                e && e.error && this.lastUGCResultId !== e.id && (kt.show("alert", {
                    text: e.error
                }), this.lastUGCResultId = e.id)
            }
            this.model.get("canChangeName") && this.choicesListView.collection.add({
                html: this.getOption("strings").button_changename,
                action: "changeName"
            }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
            const t = this.model.get("characters") || [];
            this.charactersListView.collection.set(at.map(t, e => {
                const n = this.model.get("playerInfo") || {},
                    i = e;
                return i.bgcolor = n.buttonColor, i.selected = n.avatar === i.name, i
            })), this.stickit()
        },
        onRender() {
            this.showChildView("title", this.titleComponent), this.showChildView("choices", this.choicesListView), this.showChildView("characters", this.charactersListView), this.update()
        },
        onArtifactClick() {
            this.triggerMethod("track:event", {
                category: "PostGame",
                action: "galleryClicked"
            }), Ni.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = ae(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const o = await kt.show("custom", {
                            input: "text",
                            title: this.getOption("strings").prompt_entername,
                            customClass: {
                                input: "playerName"
                            },
                            inputAttributes: {
                                maxlength: 12
                            },
                            inputValidator: f => f ? f.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
                        });
                        if (o.dismiss) return;
                        this.triggerMethod("client:message", {
                            name: o.value
                        })
                    } catch {} else if (i === "censorOptions") kt.show("custom", {
                        target: this.el,
                        html: "",
                        confirmButtonText: this.model.get("strings").button_cancel,
                        customClass: {
                            popup: "censorOptionsModal",
                            confirmButton: "cancelButton"
                        },
                        didOpen() {
                            const o = new fi({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new ot.Collection
                                }),
                                f = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(v => ({
                                    action: "censorConfirm",
                                    html: v.name,
                                    key: v.id
                                }))];
                            o.collection.set(f), o.render(), e.listenTo(o, "childview:button:censorConfirm", e.censorPlayer)
                        }
                    });
                    else if (i === "ugc-unload") this.triggerMethod("client:message", {
                clearContentId: !0
            });
            else if (i === "ugc-report") {
                const o = "http://support.jackboxgames.com/",
                    f = this.model.get("formattedActiveContentId");
                window.open(`${o}?episodeID=${f}`, "_blank")
            } else i === "ugc-view-author" ? this.triggerMethod("client:message", {
                viewAuthor: !0
            }) : i === "ugc" ? kt.show("custom", {
                target: this.el,
                html: "",
                showConfirmButton: !1,
                customClass: {
                    popup: "episodesModal"
                },
                background: e.model.get("playerInfo") && e.model.get("playerInfo").bgColor ? e.model.get("playerInfo").bgColor : null,
                padding: "10px 5px",
                didOpen: () => {
                    const o = new fi({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new ot.Collection([])
                    });
                    o.collection.add({
                        html: this.model.get("strings").vip_episodes_back || "Back",
                        action: "back",
                        className: "backButton"
                    }), o.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_load || "Load an episode by id:",
                        className: "header"
                    }), o.collection.add({
                        type: "input",
                        preventAutosize: !0,
                        placeholder: "???-????",
                        inlineSubmit: !0,
                        inlineSubmitText: this.model.get("strings").vip_episodes_submit || "SUBMIT",
                        className: "lobbyUgcInput"
                    }), o.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_warning || "Warning: user generated content is not rated",
                        className: "danger"
                    }), e.model.get("history").length && (o.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_select || "Or select an episode:",
                        className: "episodesListHeader"
                    }), o.collection.add(e.model.get("history").map(f => ({
                        action: "activateContentId",
                        html: f.remoteContentId ? `${f.metadata.title}<br/>${f.formattedRemoteContentId}` : `${f.metadata.title}`,
                        key: f.remoteContentId || f.localContentId
                    })))), o.render(), ae(".lobbyUgcInput").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), e.listenTo(o, "childview:button:activateContentId", e.activateContentId), e.listenTo(o, "childview:button:back", () => {
                        kt.close()
                    }), e.listenTo(o, "childview:input:submit", e.activateContentIdFromInput)
                }
            }) : this.triggerMethod("client:message", {
                action: i
            })
        },
        censorPlayer(t) {
            kt.close(), this.triggerMethod("client:message", {
                action: "censor",
                id: t.get("key")
            })
        },
        activateContentId(t) {
            kt.close(), this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.get("key")
            })
        },
        activateContentIdFromInput(t) {
            (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
            }), kt.close())
        },
        onChildviewChildviewCharacterClick(t) {
            t.get("available") && !t.get("selected") && (this.triggerMethod("client:message", {
                action: "avatar",
                name: t.get("name")
            }), this.charactersListView.collection.forEach(e => {
                e.unset("active"), e.set("bgcolor", this.model.get("playerInfo").buttonColor)
            }), t.set("active", !0), t.set("bgcolor", this.model.get("playerInfo").textColor))
        }
    }),
    zC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    GC = si.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    UC = Et.View.extend({
        className: "Logo",
        template: at.template(zC),
        model: new GC,
        events: {
            touchstart: "onTouchStart",
            "click .artifactButton": "onArtifactClick"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return (t || []).join(" ")
                    }
                }]
            },
            ".message": {
                attributes: [{
                    name: "style",
                    observe: "message",
                    onGet(t) {
                        let e = "";
                        return t && (t.html || t.text) || (e += "display: none;"), e
                    }
                }]
            },
            ".messageText": {
                observe: "message",
                updateMethod: "html",
                onGet(t) {
                    return !t || !t.html && !t.text ? null : t.html ? t.html : ae("<div />").text(t.text).html()
                }
            },
            "#action": "action",
            ".artifactContainer": {
                observe: "artifact",
                visible: !0
            },
            ".artifactLink": {
                attributes: [{
                    name: "href",
                    observe: "artifact",
                    onGet(t) {
                        const e = t || {
                            rootId: "",
                            categoryId: "",
                            artifactId: ""
                        };
                        let n = "games.jackbox.tv";
                        return e.rootId.indexOf("test") !== -1 && (n = "games-test.jackbox.tv"), `https://${n}/artifact/${e.categoryId}/${e.artifactId}/`
                    }
                }]
            }
        },
        onRender() {
            this.stickit()
        },
        onTouchStart(t) {
            t.target.tagName.toLowerCase() !== "button" && t.preventDefault()
        },
        onArtifactClick() {
            this.triggerMethod("track:event", {
                category: "PostGame",
                action: "galleryClicked"
            }), Ni.setAsViewed(0)
        }
    }),
    Bs = {
        en: {
            LANGUAGE_NAME: "English",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Language",
            LOGIN: "Login",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnected",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Thanks for playing!"
        },
        fr: {
            LANGUAGE_NAME: "Fran\xE7ais",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Langue",
            LOGIN: "Connexion",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "D\xE9connect\xE9",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Vous avez \xE9t\xE9 d\xE9connect\xE9"
        },
        it: {
            LANGUAGE_NAME: "Italiano",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Lingua",
            LOGIN: "Accesso",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Disconnesso",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Disconnesso"
        },
        de: {
            LANGUAGE_NAME: "Deutsche",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Sprache",
            LOGIN: "Login",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Getrennt",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Getrennt"
        },
        es: {
            LANGUAGE_NAME: "Espa\xF1ol",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "idioma",
            LOGIN: "Iniciar sesi\xF3n",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Desconectado",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "Desconectado"
        }
    },
    HC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    qC = Et.View.extend({
        className: "playerTopBarView",
        template: at.template(HC),
        model: new ot.Model,
        bindings: {
            ":el": {
                observe: ["username", "hidden"],
                visible(t) {
                    return t[0] && !t[1]
                },
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return (t || []).join(" ")
                    }
                }]
            },
            "#playername": {
                observe: "username",
                attributes: [{
                    name: "style",
                    observe: "textColor",
                    onGet(t) {
                        return t ? `color: ${t}` : ""
                    }
                }]
            },
            ".playerTopBar": {
                observe: "username",
                visible: !0,
                attributes: [{
                    name: "style",
                    observe: "topBarColor",
                    onGet(t) {
                        return t ? `background-color: ${t}` : ""
                    }
                }]
            },
            "#playericon": {
                observe: "avatar",
                visible: !0,
                attributes: [{
                    name: "class",
                    observe: "avatar"
                }]
            }
        },
        onRender() {
            this.stickit()
        }
    }),
    WC = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    XC = si.extend({
        defaults: {
            choiceId: void 0,
            type: "single",
            censorDialog: "none",
            chosen: null,
            choices: [],
            prompt: {},
            error: null,
            block: !0,
            classes: [],
            maxVotes: 16,
            doneText: {},
            announcePrompt: !1,
            countGroupName: null,
            strings: {
                your_choice: "Thank you. Your choice: ",
                censor_prompt: "Censor this?",
                censor_confirm: "Yes, Censor!",
                censor_cancel: "No!"
            }
        }
    }),
    YC = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(WC),
        model: new XC,
        sessionModule: "vote",
        sessionName: " Vote",
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        bindings: {
            ".chosen": {
                observe: "chosen",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : ae("<div />").text(t.text).html() : null
                }
            },
            ".choices": {
                observe: "chosen",
                visible(t) {
                    return t === "" || t === null
                }
            },
            ".error": {
                observe: "error",
                visible: !0,
                updateView: !0
            },
            ".makeSingleChoiceDone": {
                observe: "chosen",
                visible(t) {
                    return t !== null && t !== ""
                }
            },
            ".doneText": {
                observe: "doneText",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : ae("<div />").text(t.text).html() : null
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return !t || !t.bgColor ? "" : `background-color: ${t.bgColor}`
                    }
                }, {
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t ? t.join(" ") : ""
                    }
                }]
            },
            ".choice-button": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.buttonColor ? `background-color:${t.buttonColor}` : null
                    }
                }]
            }
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.choicesList = this.choicesList || new fi({
                action: "choose",
                collection: new ot.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && at.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
                text: "Submit",
                action: "submit",
                block: !1
            }), this.model.get("isAudience") && ((this.model.get("choiceId") === void 0 || this.model.get("choiceId") !== this.getOption("choiceId")) && (this.selected = [], this.audienceChoice = void 0, this.votesLeft = void 0), this.selected.length > 0 && (this.model.get("type") === "multiple" ? this.choicesList.children.forEach(t => {
                this.selected.find(e => e === t.getOption("index")) !== void 0 && t.model.set("selected", !0)
            }) : this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.model.get("choiceId") || 0
            }))), this.choiceId = this.model.get("choiceId") || 0, this.stickit()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.choicesList), this.stickit()
        },
        onAttach() {
            this.update(), kt.vibrate()
        },
        onChildviewChildviewButtonChoose(t) {
            const e = t.get("action") || "choose",
                n = t.get("index"),
                i = this.model.get("type");
            switch (this.choicesList.children.forEach(o => {
                    o.model.set("disabled", i === "single"), o.model.set("active", !1)
                }), i) {
                case "multiple":
                    if (this.model.get("toggle") ? t.set("selected", !t.get("selected")) : t.set("selected", !0), this.model.get("isAudience")) {
                        const o = [];
                        this.choicesList.children.forEach(f => {
                            f.model.get("selected") && o.push(f.getOption("index"))
                        }), this.selected = o
                    }
                    return !1;
                case "repeating":
                    if (this.votesLeft === void 0 && (this.votesLeft = this.model.get("maxVotes")), this.delaySubmit || this.votesLeft <= 0 && this.model.get("isAudience")) return !1;
                    this.delaySubmit = !0, window.setTimeout(() => {
                        this.delaySubmit = !1
                    }, 101), this.votesLeft -= 1;
                    break;
                case "single":
                    t.set("selected", !0), t.set("active", !0);
                    break
            }
            return this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                action: e,
                choice: n
            }) : this.model.get("isAudience") && (this.selected = [t.get("index")], this.triggerMethod("client:countGroup", {
                name: this.model.get("countGroupName"),
                vote: n
            }), i !== "repeating" && this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.choiceId
            })), !1
        },
        displayAudienceChoice(t) {
            let e = "Thank you.";
            const n = t.map(o => {
                const f = this.choicesList.children.find(v => v.model.get("index") === o);
                return f ? f.model.get("html") || f.model.get("text") : ""
            });
            return t !== void 0 && this.model.get("strings") && (e = this.model.get("strings").your_choice + n.join(", ")), {
                html: e
            }
        },
        onChildviewChildviewButtonCensor(t) {
            const e = t.get("index"),
                n = t.get("html");
            if (this.model.get("censorDialog") === "confirm") t.get("isWarned") ? this.triggerMethod("client:message", {
                action: "censor",
                choice: e
            }) : t.set("isWarned", !0);
            else {
                if (this.model.get("censorDialog") === "warning") return Rn.close(), Rn.fire({
                    customClass: {
                        popup: "Dialog",
                        container: "container",
                        content: "content",
                        title: "title",
                        closeButton: "button closeButton",
                        cancelButton: "button cancelButton",
                        confirmButton: "button confirmButton",
                        denyButton: "button denyButton"
                    },
                    title: this.model.get("strings").censor_prompt,
                    text: n,
                    showCancelButton: !0,
                    confirmButtonText: this.model.get("strings").censor_confirm,
                    cancelButtonText: this.model.get("strings").censor_cancel,
                    confirmButtonColor: "#900"
                }).then(i => {
                    i.value && this.triggerMethod("client:message", {
                        action: "censor",
                        choice: e
                    })
                }), !1;
                this.triggerMethod("client:message", {
                    action: "censor",
                    choice: e
                })
            }
            return !1
        },
        onChildviewChildviewButtonSubmit() {
            let t = [];
            this.choicesList.children.forEach(n => {
                n.model.get("selected") && t.push(n.getOption("index"))
            });
            const e = t.join(",");
            this.model.get("isPlayer") ? this.triggerMethod("client:message", {
                action: "submit",
                choice: e
            }) : this.model.get("isAudience") && (this.triggerMethod("client:countGroup", {
                name: this.model.get("countGroupName"),
                vote: e
            }), this.model.get("type") !== "repeating" && (t = [], this.choicesList.children.forEach(n => {
                n.model.get("selected") && t.push(n.getOption("index"))
            }), this.selected = t, this.model.setUpdate({
                chosen: this.displayAudienceChoice(this.selected),
                choiceId: this.choiceId
            })))
        }
    });
/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function cc(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function zn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? cc(Object(n), !0).forEach(function(i) {
            KC(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Hs(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hs = function(e) {
        return typeof e
    } : Hs = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Hs(t)
}

function KC(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function ri() {
    return ri = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, ri.apply(this, arguments)
}

function JC(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        o, f;
    for (f = 0; f < i.length; f++) o = i[f], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n
}

function QC(t, e) {
    if (t == null) return {};
    var n = JC(t, e),
        i, o;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (o = 0; o < f.length; o++) i = f[o], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var ZC = "1.15.0";

function ii(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    fs = ii(/Edge/i),
    uc = ii(/firefox/i),
    ss = ii(/safari/i) && !ii(/chrome/i) && !ii(/android/i),
    Qu = ii(/iP(ad|od|hone)/i),
    Zu = ii(/chrome/i) && ii(/android/i),
    eh = {
        capture: !1,
        passive: !1
    };

function xt(t, e, n) {
    t.addEventListener(e, n, !oi && eh)
}

function wt(t, e, n) {
    t.removeEventListener(e, n, !oi && eh)
}

function no(t, e) {
    if (!!e) {
        if (e[0] === ">" && (e = e.substring(1)), t) try {
            if (t.matches) return t.matches(e);
            if (t.msMatchesSelector) return t.msMatchesSelector(e);
            if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
        } catch {
            return !1
        }
        return !1
    }
}

function ex(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function $n(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && no(t, e) : no(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = ex(t))
    }
    return null
}
var hc = /\s+/g;

function En(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(hc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(hc, " ")
        }
}

function tt(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function pr(t, e) {
    var n = "";
    if (typeof t == "string") n = t;
    else
        do {
            var i = tt(t, "transform");
            i && i !== "none" && (n = i + " " + n)
        } while (!e && (t = t.parentNode));
    var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return o && new o(n)
}

function th(t, e, n) {
    if (t) {
        var i = t.getElementsByTagName(e),
            o = 0,
            f = i.length;
        if (n)
            for (; o < f; o++) n(i[o], o);
        return i
    }
    return []
}

function jn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Yt(t, e, n, i, o) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, v, b, k, A, D, V;
        if (t !== window && t.parentNode && t !== jn() ? (f = t.getBoundingClientRect(), v = f.top, b = f.left, k = f.bottom, A = f.right, D = f.height, V = f.width) : (v = 0, b = 0, k = window.innerHeight, A = window.innerWidth, D = window.innerHeight, V = window.innerWidth), (e || n) && t !== window && (o = o || t.parentNode, !oi))
            do
                if (o && o.getBoundingClientRect && (tt(o, "transform") !== "none" || n && tt(o, "position") !== "static")) {
                    var Y = o.getBoundingClientRect();
                    v -= Y.top + parseInt(tt(o, "border-top-width")), b -= Y.left + parseInt(tt(o, "border-left-width")), k = v + f.height, A = b + f.width;
                    break
                } while (o = o.parentNode);
        if (i && t !== window) {
            var ie = pr(o || t),
                K = ie && ie.a,
                re = ie && ie.d;
            ie && (v /= re, b /= K, V /= K, D /= re, k = v + D, A = b + V)
        }
        return {
            top: v,
            left: b,
            bottom: k,
            right: A,
            width: V,
            height: D
        }
    }
}

function dc(t, e, n) {
    for (var i = di(t, !0), o = Yt(t)[e]; i;) {
        var f = Yt(i)[n],
            v = void 0;
        if (n === "top" || n === "left" ? v = o >= f : v = o <= f, !v) return i;
        if (i === jn()) break;
        i = di(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var o = 0, f = 0, v = t.children; f < v.length;) {
        if (v[f].style.display !== "none" && v[f] !== Qe.ghost && (i || v[f] !== Qe.dragged) && $n(v[f], n.draggable, t, !1)) {
            if (o === e) return v[f];
            o++
        }
        f++
    }
    return null
}

function ul(t, e) {
    for (var n = t.lastElementChild; n && (n === Qe.ghost || tt(n, "display") === "none" || e && !no(n, e));) n = n.previousElementSibling;
    return n || null
}

function On(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Qe.clone && (!e || no(t, e)) && n++;
    return n
}

function fc(t) {
    var e = 0,
        n = 0,
        i = jn();
    if (t)
        do {
            var o = pr(t),
                f = o.a,
                v = o.d;
            e += t.scrollLeft * f, n += t.scrollTop * v
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function tx(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function di(t, e) {
    if (!t || !t.getBoundingClientRect) return jn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var o = tt(n);
            if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return jn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return jn()
}

function nx(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function ha(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var os;

function nh(t, e) {
    return function() {
        if (!os) {
            var n = arguments,
                i = this;
            n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), os = setTimeout(function() {
                os = void 0
            }, e)
        }
    }
}

function ix() {
    clearTimeout(os), os = void 0
}

function ih(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function rh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var Sn = "Sortable" + new Date().getTime();

function rx() {
    var t = [],
        e;
    return {
        captureAnimationState: function() {
            if (t = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(o) {
                    if (!(tt(o, "display") === "none" || o === Qe.ghost)) {
                        t.push({
                            target: o,
                            rect: Yt(o)
                        });
                        var f = zn({}, t[t.length - 1].rect);
                        if (o.thisAnimationDuration) {
                            var v = pr(o, !0);
                            v && (f.top -= v.f, f.left -= v.e)
                        }
                        o.fromRect = f
                    }
                })
            }
        },
        addAnimationState: function(i) {
            t.push(i)
        },
        removeAnimationState: function(i) {
            t.splice(tx(t, {
                target: i
            }), 1)
        },
        animateAll: function(i) {
            var o = this;
            if (!this.options.animation) {
                clearTimeout(e), typeof i == "function" && i();
                return
            }
            var f = !1,
                v = 0;
            t.forEach(function(b) {
                var k = 0,
                    A = b.target,
                    D = A.fromRect,
                    V = Yt(A),
                    Y = A.prevFromRect,
                    ie = A.prevToRect,
                    K = b.rect,
                    re = pr(A, !0);
                re && (V.top -= re.f, V.left -= re.e), A.toRect = V, A.thisAnimationDuration && ha(Y, V) && !ha(D, V) && (K.top - V.top) / (K.left - V.left) === (D.top - V.top) / (D.left - V.left) && (k = ox(K, Y, ie, o.options)), ha(V, D) || (A.prevFromRect = D, A.prevToRect = V, k || (k = o.options.animation), o.animate(A, K, V, k)), k && (f = !0, v = Math.max(v, k), clearTimeout(A.animationResetTimer), A.animationResetTimer = setTimeout(function() {
                    A.animationTime = 0, A.prevFromRect = null, A.fromRect = null, A.prevToRect = null, A.thisAnimationDuration = null
                }, k), A.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, v) : typeof i == "function" && i(), t = []
        },
        animate: function(i, o, f, v) {
            if (v) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var b = pr(this.el),
                    k = b && b.a,
                    A = b && b.d,
                    D = (o.left - f.left) / (k || 1),
                    V = (o.top - f.top) / (A || 1);
                i.animatingX = !!D, i.animatingY = !!V, tt(i, "transform", "translate3d(" + D + "px," + V + "px,0)"), this.forRepaintDummy = sx(i), tt(i, "transition", "transform " + v + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, v)
            }
        }
    }
}

function sx(t) {
    return t.offsetWidth
}

function ox(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var rr = [],
    da = {
        initializeByDefault: !0
    },
    ps = {
        mount: function(e) {
            for (var n in da) da.hasOwnProperty(n) && !(n in e) && (e[n] = da[n]);
            rr.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), rr.push(e)
        },
        pluginEvent: function(e, n, i) {
            var o = this;
            this.eventCanceled = !1, i.cancel = function() {
                o.eventCanceled = !0
            };
            var f = e + "Global";
            rr.forEach(function(v) {
                !n[v.pluginName] || (n[v.pluginName][f] && n[v.pluginName][f](zn({
                    sortable: n
                }, i)), n.options[v.pluginName] && n[v.pluginName][e] && n[v.pluginName][e](zn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, o) {
            rr.forEach(function(b) {
                var k = b.pluginName;
                if (!(!e.options[k] && !b.initializeByDefault)) {
                    var A = new b(e, n, e.options);
                    A.sortable = e, A.options = e.options, e[k] = A, ri(i, A.defaults)
                }
            });
            for (var f in e.options)
                if (!!e.options.hasOwnProperty(f)) {
                    var v = this.modifyOption(e, f, e.options[f]);
                    typeof v < "u" && (e.options[f] = v)
                }
        },
        getEventProperties: function(e, n) {
            var i = {};
            return rr.forEach(function(o) {
                typeof o.eventProperties == "function" && ri(i, o.eventProperties.call(n[o.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var o;
            return rr.forEach(function(f) {
                !e[f.pluginName] || f.optionListeners && typeof f.optionListeners[n] == "function" && (o = f.optionListeners[n].call(e[f.pluginName], i))
            }), o
        }
    };

function ax(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        o = t.targetEl,
        f = t.cloneEl,
        v = t.toEl,
        b = t.fromEl,
        k = t.oldIndex,
        A = t.newIndex,
        D = t.oldDraggableIndex,
        V = t.newDraggableIndex,
        Y = t.originalEvent,
        ie = t.putSortable,
        K = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var re, m = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = v || n, re.from = b || n, re.item = o || n, re.clone = f, re.oldIndex = k, re.newIndex = A, re.oldDraggableIndex = D, re.newDraggableIndex = V, re.originalEvent = Y, re.pullMode = ie ? ie.lastPutMode : void 0;
        var q = zn(zn({}, K), ps.getEventProperties(i, e));
        for (var le in q) re[le] = q[le];
        n && n.dispatchEvent(re), m[P] && m[P].call(e, re)
    }
}
var lx = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = i.evt,
            f = QC(i, lx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Ii,
            lastDownEl: qs,
            cloneEl: Vt,
            cloneHidden: ui,
            dragStarted: Qr,
            putSortable: en,
            activeSortable: Qe.active,
            originalEvent: o,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: _n,
            newDraggableIndex: ci,
            hideGhostForTarget: lh,
            unhideGhostForTarget: ch,
            cloneNowHidden: function() {
                ui = !0
            },
            cloneNowShown: function() {
                ui = !1
            },
            dispatchSortableEvent: function(b) {
                gn({
                    sortable: n,
                    name: b,
                    originalEvent: o
                })
            }
        }, f))
    };

function gn(t) {
    ax(zn({
        putSortable: en,
        cloneEl: Vt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: _n,
        newDraggableIndex: ci
    }, t))
}
var Ie, $t, ut, Pt, Ii, qs, Vt, ui, cr, _n, as, ci, $s, en, lr = !1,
    io = !1,
    ro = [],
    Ai, Ln, fa, pa, pc, gc, Qr, sr, ls, cs = !1,
    Fs = !1,
    Ws, ln, ga = [],
    Da = !1,
    so = [],
    wo = typeof document < "u",
    js = Qu,
    mc = fs || oi ? "cssFloat" : "float",
    cx = wo && !Zu && !Qu && "draggable" in document.createElement("div"),
    sh = function() {
        if (!!wo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    oh = function(e, n) {
        var i = tt(e),
            o = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = yr(e, 0, n),
            v = yr(e, 1, n),
            b = f && tt(f),
            k = v && tt(v),
            A = b && parseInt(b.marginLeft) + parseInt(b.marginRight) + Yt(f).width,
            D = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Yt(v).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && b.float && b.float !== "none") {
            var V = b.float === "left" ? "left" : "right";
            return v && (k.clear === "both" || k.clear === V) ? "vertical" : "horizontal"
        }
        return f && (b.display === "block" || b.display === "flex" || b.display === "table" || b.display === "grid" || A >= o && i[mc] === "none" || v && i[mc] === "none" && A + D > o) ? "vertical" : "horizontal"
    },
    ux = function(e, n, i) {
        var o = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            v = i ? e.width : e.height,
            b = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            A = i ? n.width : n.height;
        return o === b || f === k || o + v / 2 === b + A / 2
    },
    hx = function(e, n) {
        var i;
        return ro.some(function(o) {
            var f = o[Sn].options.emptyInsertThreshold;
            if (!(!f || ul(o))) {
                var v = Yt(o),
                    b = e >= v.left - f && e <= v.right + f,
                    k = n >= v.top - f && n <= v.bottom + f;
                if (b && k) return i = o
            }
        }), i
    },
    ah = function(e) {
        function n(f, v) {
            return function(b, k, A, D) {
                var V = b.options.group.name && k.options.group.name && b.options.group.name === k.options.group.name;
                if (f == null && (v || V)) return !0;
                if (f == null || f === !1) return !1;
                if (v && f === "clone") return f;
                if (typeof f == "function") return n(f(b, k, A, D), v)(b, k, A, D);
                var Y = (v ? b : k).options.group.name;
                return f === !0 || typeof f == "string" && f === Y || f.join && f.indexOf(Y) > -1
            }
        }
        var i = {},
            o = e.group;
        (!o || Hs(o) != "object") && (o = {
            name: o
        }), i.name = o.name, i.checkPull = n(o.pull, !0), i.checkPut = n(o.put), i.revertClone = o.revertClone, e.group = i
    },
    lh = function() {
        !sh && ut && tt(ut, "display", "none")
    },
    ch = function() {
        !sh && ut && tt(ut, "display", "")
    };
wo && !Zu && document.addEventListener("click", function(t) {
    if (io) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), io = !1, !1
}, !0);
var Oi = function(e) {
        if (Ie) {
            e = e.touches ? e.touches[0] : e;
            var n = hx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Sn]._onDragOver(i)
            }
        }
    },
    dx = function(e) {
        Ie && Ie.parentNode[Sn]._isOutsideThisEl(e.target)
    };

function Qe(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = ri({}, e), t[Sn] = this;
    var n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return oh(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(v, b) {
            v.setData("Text", b.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Qe.supportPointer !== !1 && "PointerEvent" in window && !ss,
        emptyInsertThreshold: 5
    };
    ps.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    ah(e);
    for (var o in this) o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : cx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), ro.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ri(this, rx())
}
Qe.prototype = {
    constructor: Qe,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (sr = null)
    },
    _getDirection: function(e, n) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Ie) : this.options.direction
    },
    _onTapStart: function(e) {
        if (!!e.cancelable) {
            var n = this,
                i = this.el,
                o = this.options,
                f = o.preventOnFilter,
                v = e.type,
                b = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (b || e).target,
                A = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                D = o.filter;
            if (bx(i), !Ie && !(/mousedown|pointerdown/.test(v) && e.button !== 0 || o.disabled) && !A.isContentEditable && !(!this.nativeDraggable && ss && k && k.tagName.toUpperCase() === "SELECT") && (k = $n(k, o.draggable, i, !1), !(k && k.animated) && qs !== k)) {
                if (cr = On(k), as = On(k, o.draggable), typeof D == "function") {
                    if (D.call(this, e, k, this)) {
                        gn({
                            sortable: n,
                            rootEl: A,
                            name: "filter",
                            targetEl: k,
                            toEl: i,
                            fromEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (D && (D = D.split(",").some(function(V) {
                        if (V = $n(A, V.trim(), i, !1), V) return gn({
                            sortable: n,
                            rootEl: V,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), !0
                    }), D)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                o.handle && !$n(A, o.handle, i, !1) || this._prepareDragStart(e, b, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var o = this,
            f = o.el,
            v = o.options,
            b = f.ownerDocument,
            k;
        if (i && !Ie && i.parentNode === f) {
            var A = Yt(i);
            if (Pt = f, Ie = i, $t = Ie.parentNode, Ii = Ie.nextSibling, qs = i, $s = v.group, Qe.dragged = Ie, Ai = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, pc = Ai.clientX - A.left, gc = Ai.clientY - A.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", o, {
                            evt: e
                        }), Qe.eventCanceled) {
                        o._onDrop();
                        return
                    }
                    o._disableDelayedDragEvents(), !uc && o.nativeDraggable && (Ie.draggable = !0), o._triggerDragStart(e, n), gn({
                        sortable: o,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, v.chosenClass, !0)
                }, v.ignore.split(",").forEach(function(D) {
                    th(Ie, D.trim(), ma)
                }), xt(b, "dragover", Oi), xt(b, "mousemove", Oi), xt(b, "touchmove", Oi), xt(b, "mouseup", o._onDrop), xt(b, "touchend", o._onDrop), xt(b, "touchcancel", o._onDrop), uc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), v.delay && (!v.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(b, "mouseup", o._disableDelayedDrag), xt(b, "touchend", o._disableDelayedDrag), xt(b, "touchcancel", o._disableDelayedDrag), xt(b, "mousemove", o._delayedDragTouchMoveHandler), xt(b, "touchmove", o._delayedDragTouchMoveHandler), v.supportPointer && xt(b, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(k, v.delay)
            } else k()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Ie && ma(Ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._disableDelayedDrag), wt(e, "touchend", this._disableDelayedDrag), wt(e, "touchcancel", this._disableDelayedDrag), wt(e, "mousemove", this._delayedDragTouchMoveHandler), wt(e, "touchmove", this._delayedDragTouchMoveHandler), wt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? xt(document, "pointermove", this._onTouchMove) : n ? xt(document, "touchmove", this._onTouchMove) : xt(document, "mousemove", this._onTouchMove) : (xt(Ie, "dragend", this), xt(Pt, "dragstart", this._onDragStart));
        try {
            document.selection ? Xs(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (lr = !1, Pt && Ie) {
            wn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && xt(document, "dragover", dx);
            var i = this.options;
            !e && En(Ie, i.dragClass, !1), En(Ie, i.ghostClass, !0), Qe.active = this, e && this._appendGhost(), gn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Ln) {
            this._lastX = Ln.clientX, this._lastY = Ln.clientY, lh();
            for (var e = document.elementFromPoint(Ln.clientX, Ln.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Ln.clientX, Ln.clientY), e !== n);) n = e;
            if (Ie.parentNode[Sn]._isOutsideThisEl(e), n)
                do {
                    if (n[Sn]) {
                        var i = void 0;
                        if (i = n[Sn]._onDragOver({
                                clientX: Ln.clientX,
                                clientY: Ln.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            ch()
        }
    },
    _onTouchMove: function(e) {
        if (Ai) {
            var n = this.options,
                i = n.fallbackTolerance,
                o = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                v = ut && pr(ut, !0),
                b = ut && v && v.a,
                k = ut && v && v.d,
                A = js && ln && fc(ln),
                D = (f.clientX - Ai.clientX + o.x) / (b || 1) + (A ? A[0] - ga[0] : 0) / (b || 1),
                V = (f.clientY - Ai.clientY + o.y) / (k || 1) + (A ? A[1] - ga[1] : 0) / (k || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                v ? (v.e += D - (fa || 0), v.f += V - (pa || 0)) : v = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: V
                };
                var Y = "matrix(".concat(v.a, ",").concat(v.b, ",").concat(v.c, ",").concat(v.d, ",").concat(v.e, ",").concat(v.f, ")");
                tt(ut, "webkitTransform", Y), tt(ut, "mozTransform", Y), tt(ut, "msTransform", Y), tt(ut, "transform", Y), fa = D, pa = V, Ln = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Yt(Ie, !0, js, !0, e),
                i = this.options;
            if (js) {
                for (ln = e; tt(ln, "position") === "static" && tt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = jn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = jn(), ga = fc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", js ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", pc / parseInt(ut.style.width) * 100 + "% " + gc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            o = e.dataTransfer,
            f = i.options;
        if (wn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        wn("setupClone", this), Qe.eventCanceled || (Vt = rh(Ie), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), En(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = Xs(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Vt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, f.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), o && (o.effectAllowed = "move", f.setData && f.setData.call(i, o, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Xs(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Qr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            o, f, v, b = this.options,
            k = b.group,
            A = Qe.active,
            D = $s === k,
            V = b.sort,
            Y = en || A,
            ie, K = this,
            re = !1;
        if (Da) return;

        function m(we, he) {
            wn(we, K, zn({
                evt: e,
                isOwner: D,
                axis: ie ? "vertical" : "horizontal",
                revert: v,
                dragRect: o,
                targetRect: f,
                canSort: V,
                fromSortable: Y,
                target: i,
                completed: q,
                onMove: function(Te, $e) {
                    return zs(Pt, n, Ie, o, Te, Yt(Te), e, $e)
                },
                changed: le
            }, he))
        }

        function P() {
            m("dragOverAnimationCapture"), K.captureAnimationState(), K !== Y && Y.captureAnimationState()
        }

        function q(we) {
            return m("dragOverCompleted", {
                insertion: we
            }), we && (D ? A._hideClone() : A._showClone(K), K !== Y && (En(Ie, en ? en.options.ghostClass : A.options.ghostClass, !1), En(Ie, b.ghostClass, !0)), en !== K && K !== Qe.active ? en = K : K === Qe.active && en && (en = null), Y === K && (K._ignoreWhileAnimating = i), K.animateAll(function() {
                m("dragOverAnimationComplete"), K._ignoreWhileAnimating = null
            }), K !== Y && (Y.animateAll(), Y._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (sr = null), !b.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !we && Oi(e)), !b.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function le() {
            _n = On(Ie), ci = On(Ie, b.draggable), gn({
                sortable: K,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, b.draggable, n, !0), m("dragOver"), Qe.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || K._ignoreWhileAnimating === i) return q(!1);
        if (io = !1, A && !b.disabled && (D ? V || (v = $t !== Pt) : en === this || (this.lastPutMode = $s.checkPull(this, A, Ie, e)) && k.checkPut(this, A, Ie, e))) {
            if (ie = this._getDirection(e, i) === "vertical", o = Yt(Ie), m("dragOverValid"), Qe.eventCanceled) return re;
            if (v) return $t = Pt, P(), this._hideClone(), m("revert"), Qe.eventCanceled || (Ii ? Pt.insertBefore(Ie, Ii) : Pt.appendChild(Ie)), q(!0);
            var se = ul(n, b.draggable);
            if (!se || mx(e, ie, this) && !se.animated) {
                if (se === Ie) return q(!1);
                if (se && n === e.target && (i = se), i && (f = Yt(i)), zs(Pt, n, Ie, o, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Ie, se.nextSibling) : n.appendChild(Ie), $t = n, le(), q(!0)
            } else if (se && gx(e, ie, this)) {
                var ye = yr(n, 0, b, !0);
                if (ye === Ie) return q(!1);
                if (i = ye, f = Yt(i), zs(Pt, n, Ie, o, i, f, e, !1) !== !1) return P(), n.insertBefore(Ie, ye), $t = n, le(), q(!0)
            } else if (i.parentNode === n) {
                f = Yt(i);
                var d = 0,
                    _e, Oe = Ie.parentNode !== n,
                    Pe = !ux(Ie.animated && Ie.toRect || o, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Be = dc(i, "top", "top") || dc(Ie, "top", "top"),
                    J = Be ? Be.scrollTop : void 0;
                sr !== i && (_e = f[lt], cs = !1, Fs = !Pe && b.invertSwap || Oe), d = vx(e, i, f, ie, Pe ? 1 : b.swapThreshold, b.invertedSwapThreshold == null ? b.swapThreshold : b.invertedSwapThreshold, Fs, sr === i);
                var je;
                if (d !== 0) {
                    var U = On(Ie);
                    do U -= d, je = $t.children[U]; while (je && (tt(je, "display") === "none" || je === ut))
                }
                if (d === 0 || je === i) return q(!1);
                sr = i, ls = d;
                var oe = i.nextElementSibling,
                    Ae = !1;
                Ae = d === 1;
                var be = zs(Pt, n, Ie, o, i, f, e, Ae);
                if (be !== !1) return (be === 1 || be === -1) && (Ae = be === 1), Da = !0, setTimeout(px, 30), P(), Ae && !oe ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? oe : i), Be && ih(Be, 0, J - Be.scrollTop), $t = Ie.parentNode, _e !== void 0 && !Fs && (Ws = Math.abs(_e - Yt(i)[lt])), le(), q(!0)
            }
            if (n.contains(Ie)) return q(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        wt(document, "mousemove", this._onTouchMove), wt(document, "touchmove", this._onTouchMove), wt(document, "pointermove", this._onTouchMove), wt(document, "dragover", Oi), wt(document, "mousemove", Oi), wt(document, "touchmove", Oi)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._onDrop), wt(e, "touchend", this._onDrop), wt(e, "pointerup", this._onDrop), wt(e, "touchcancel", this._onDrop), wt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (_n = On(Ie), ci = On(Ie, i.draggable), wn("drop", this, {
                evt: e
            }), $t = Ie && Ie.parentNode, _n = On(Ie), ci = On(Ie, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, Fs = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ma(this.cloneId), Ma(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || en && en.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Ie && (this.nativeDraggable && wt(Ie, "dragend", this), ma(Ie), Ie.style["will-change"] = "", Qr && !lr && En(Ie, en ? en.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: $t,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Pt !== $t ? (_n >= 0 && (gn({
            rootEl: $t,
            name: "add",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "remove",
            toEl: $t,
            originalEvent: e
        }), gn({
            rootEl: $t,
            name: "sort",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), en && en.save()) : _n !== cr && _n >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), Qe.active && ((_n == null || _n === -1) && (_n = cr, ci = as), gn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        wn("nulling", this), Pt = Ie = $t = ut = Ii = Vt = qs = ui = Ai = Ln = Qr = _n = ci = cr = as = sr = ls = en = $s = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
            e.checked = !0
        }), so.length = fa = pa = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Ie && (this._onDragOver(e), fx(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, o = 0, f = i.length, v = this.options; o < f; o++) n = i[o], $n(n, v.draggable, this.el, !1) && e.push(n.getAttribute(v.dataIdAttr) || wx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            o = this.el;
        this.toArray().forEach(function(f, v) {
            var b = o.children[v];
            $n(b, this.options.draggable, o, !1) && (i[f] = b)
        }, this), n && this.captureAnimationState(), e.forEach(function(f) {
            i[f] && (o.removeChild(i[f]), o.appendChild(i[f]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return $n(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var o = ps.modifyOption(this, e, n);
        typeof o < "u" ? i[e] = o : i[e] = n, e === "group" && ah(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[Sn] = null, wt(e, "mousedown", this._onTapStart), wt(e, "touchstart", this._onTapStart), wt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (wt(e, "dragover", this), wt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ui) {
            if (wn("hideClone", this), Qe.eventCanceled) return;
            tt(Vt, "display", "none"), this.options.removeCloneOnHide && Vt.parentNode && Vt.parentNode.removeChild(Vt), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (wn("showClone", this), Qe.eventCanceled) return;
            Ie.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Vt, Ie) : Ii ? Pt.insertBefore(Vt, Ii) : Pt.appendChild(Vt), this.options.group.revertClone && this.animate(Ie, Vt), tt(Vt, "display", ""), ui = !1
        }
    }
};

function fx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, o, f, v, b) {
    var k, A = t[Sn],
        D = A.options.onMove,
        V;
    return window.CustomEvent && !oi && !fs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = o || e, k.relatedRect = f || Yt(e), k.willInsertAfter = b, k.originalEvent = v, t.dispatchEvent(k), D && (V = D.call(A, k, v)), V
}

function ma(t) {
    t.draggable = !1
}

function px() {
    Da = !1
}

function gx(t, e, n) {
    var i = Yt(yr(n.el, 0, n.options, !0)),
        o = 10;
    return e ? t.clientX < i.left - o || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - o || t.clientY < i.bottom && t.clientX < i.left
}

function mx(t, e, n) {
    var i = Yt(ul(n.el, n.options.draggable)),
        o = 10;
    return e ? t.clientX > i.right + o || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + o
}

function vx(t, e, n, i, o, f, v, b) {
    var k = i ? t.clientY : t.clientX,
        A = i ? n.height : n.width,
        D = i ? n.top : n.left,
        V = i ? n.bottom : n.right,
        Y = !1;
    if (!v) {
        if (b && Ws < A * o) {
            if (!cs && (ls === 1 ? k > D + A * f / 2 : k < V - A * f / 2) && (cs = !0), cs) Y = !0;
            else if (ls === 1 ? k < D + Ws : k > V - Ws) return -ls
        } else if (k > D + A * (1 - o) / 2 && k < V - A * (1 - o) / 2) return yx(e)
    }
    return Y = Y || v, Y && (k < D + A * f / 2 || k > V - A * f / 2) ? k > D + A / 2 ? 1 : -1 : 0
}

function yx(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function wx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function bx(t) {
    so.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && so.push(i)
    }
}

function Xs(t) {
    return setTimeout(t, 0)
}

function Ma(t) {
    return clearTimeout(t)
}
wo && xt(document, "touchmove", function(t) {
    (Qe.active || lr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: xt,
    off: wt,
    css: tt,
    find: th,
    is: function(e, n) {
        return !!$n(e, n, e, !1)
    },
    extend: nx,
    throttle: nh,
    closest: $n,
    toggleClass: En,
    clone: rh,
    index: On,
    nextTick: Xs,
    cancelNextTick: Ma,
    detectDirection: oh,
    getChild: yr
};
Qe.get = function(t) {
    return t[Sn]
};
Qe.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (Qe.utils = zn(zn({}, Qe.utils), i.utils)), ps.mount(i)
    })
};
Qe.create = function(t, e) {
    return new Qe(t, e)
};
Qe.version = ZC;
var qt = [],
    Zr, La, Pa = !1,
    va, ya, oo, es;

function Cx() {
    function t() {
        this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0
        };
        for (var e in this) e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this))
    }
    return t.prototype = {
        dragStarted: function(n) {
            var i = n.originalEvent;
            this.sortable.nativeDraggable ? xt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? xt(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? xt(document, "touchmove", this._handleFallbackAutoScroll) : xt(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(n) {
            var i = n.originalEvent;
            !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i)
        },
        drop: function() {
            this.sortable.nativeDraggable ? wt(document, "dragover", this._handleAutoScroll) : (wt(document, "pointermove", this._handleFallbackAutoScroll), wt(document, "touchmove", this._handleFallbackAutoScroll), wt(document, "mousemove", this._handleFallbackAutoScroll)), vc(), Ys(), ix()
        },
        nulling: function() {
            oo = La = Zr = Pa = es = va = ya = null, qt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var o = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                v = (n.touches ? n.touches[0] : n).clientY,
                b = document.elementFromPoint(f, v);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                wa(n, this.options, b, i);
                var k = di(b, !0);
                Pa && (!es || f !== va || v !== ya) && (es && vc(), es = setInterval(function() {
                    var A = di(document.elementFromPoint(f, v), !0);
                    A !== k && (k = A, Ys()), wa(n, o.options, A, i)
                }, 10), va = f, ya = v)
            } else {
                if (!this.options.bubbleScroll || di(b, !0) === jn()) {
                    Ys();
                    return
                }
                wa(n, this.options, di(b, !1), !1)
            }
        }
    }, ri(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Ys() {
    qt.forEach(function(t) {
        clearInterval(t.pid)
    }), qt = []
}

function vc() {
    clearInterval(es)
}
var wa = nh(function(t, e, n, i) {
        if (!!e.scroll) {
            var o = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                v = e.scrollSensitivity,
                b = e.scrollSpeed,
                k = jn(),
                A = !1,
                D;
            La !== n && (La = n, Ys(), Zr = e.scroll, D = e.scrollFn, Zr === !0 && (Zr = di(n, !0)));
            var V = 0,
                Y = Zr;
            do {
                var ie = Y,
                    K = Yt(ie),
                    re = K.top,
                    m = K.bottom,
                    P = K.left,
                    q = K.right,
                    le = K.width,
                    se = K.height,
                    ye = void 0,
                    d = void 0,
                    _e = ie.scrollWidth,
                    Oe = ie.scrollHeight,
                    Pe = tt(ie),
                    lt = ie.scrollLeft,
                    Be = ie.scrollTop;
                ie === k ? (ye = le < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ye = le < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var J = ye && (Math.abs(q - o) <= v && lt + le < _e) - (Math.abs(P - o) <= v && !!lt),
                    je = d && (Math.abs(m - f) <= v && Be + se < Oe) - (Math.abs(re - f) <= v && !!Be);
                if (!qt[V])
                    for (var U = 0; U <= V; U++) qt[U] || (qt[U] = {});
                (qt[V].vx != J || qt[V].vy != je || qt[V].el !== ie) && (qt[V].el = ie, qt[V].vx = J, qt[V].vy = je, clearInterval(qt[V].pid), (J != 0 || je != 0) && (A = !0, qt[V].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var oe = qt[this.layer].vy ? qt[this.layer].vy * b : 0,
                        Ae = qt[this.layer].vx ? qt[this.layer].vx * b : 0;
                    typeof D == "function" && D.call(Qe.dragged.parentNode[Sn], Ae, oe, t, oo, qt[this.layer].el) !== "continue" || ih(qt[this.layer].el, Ae, oe)
                }.bind({
                    layer: V
                }), 24))), V++
            } while (e.bubbleScroll && Y !== k && (Y = di(Y, !1)));
            Pa = A
        }
    }, 30),
    uh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            o = e.dragEl,
            f = e.activeSortable,
            v = e.dispatchSortableEvent,
            b = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var A = i || f;
            b();
            var D = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                V = document.elementFromPoint(D.clientX, D.clientY);
            k(), A && !A.el.contains(V) && (v("spill"), this.onSpill({
                dragEl: o,
                putSortable: i
            }))
        }
    };

function hl() {}
hl.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var o = yr(this.sortable.el, this.startIndex, this.options);
        o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: uh
};
ri(hl, {
    pluginName: "revertOnSpill"
});

function dl() {}
dl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            o = i || this.sortable;
        o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll()
    },
    drop: uh
};
ri(dl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new Cx);
Qe.mount(dl, hl);
const xx = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Ex = si.extend({
        defaults: {
            choiceId: void 0,
            type: "single",
            censorDialog: "none",
            chosen: null,
            choices: [],
            prompt: {},
            error: null,
            block: !0,
            classes: [],
            maxVotes: 16,
            doneText: {},
            announcePrompt: !1,
            strings: {
                your_choice: "Thank you. Your choice: ",
                censor_prompt: "Censor this?",
                censor_confirm: "Yes, Censor!",
                censor_cancel: "No!"
            }
        }
    }),
    _x = Et.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: at.template("<div class='text'></div>"),
        model: new ot.Model({}),
        bindings: {
            ":el": {
                attributes: [{
                    name: "data-id",
                    observe: "key"
                }]
            },
            ".text": "html"
        },
        onAttach() {
            this.stickit()
        }
    }),
    yc = Et.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: _x,
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    Sx = Et.View.extend({
        className: "SorterView",
        template: at.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new ot.Model({
            rankedLength: 1,
            choices: []
        }),
        bindings: {
            ".instructions": {
                observe: "rankedLength",
                visible: !0,
                onGet(t) {
                    return t < 3
                }
            },
            "#unrankedChoicesRegion": {
                observe: ["rankedLength", "choices"],
                visible: !0,
                onGet(t) {
                    return t[0] !== t[1].length
                }
            },
            "#lockInRegion": {
                observe: ["rankedLength", "choices"],
                visible: !0,
                onGet(t) {
                    return t[0] === t[1].length
                }
            }
        },
        regions: {
            rankedChoices: "#rankedChoicesRegion",
            unrankedChoices: "#unrankedChoicesRegion",
            lockInRegion: "#lockInRegion"
        },
        initialize() {
            this.rankedCollectionView = this.rankedCollectionView || new yc({
                collection: new ot.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new yc({
                className: "sortable-collection unranked",
                collection: new ot.Collection([])
            }), this.lockInView = this.lockInView || new Wu({
                block: !1,
                model: new ot.Model({
                    action: "lock",
                    html: "Lock In"
                })
            }), this.listenTo(this.model, "change:choices", this.update, this)
        },
        onAttach() {
            this.showChildView("rankedChoices", this.rankedCollectionView), this.showChildView("unrankedChoices", this.unrankedCollectionView), this.showChildView("lockInRegion", this.lockInView), this.stickit(), this.update()
        },
        update() {
            const t = this.model.get("choices"),
                e = t.slice(0, 1),
                n = t.slice(1);
            this.rankedSortable && this.rankedSortable.destroy(), this.rankedCollectionView.collection.set(e), this.rankedSortable = Qe.create(this.rankedCollectionView.el, {
                group: "shared",
                onSort: this.handleOnSort.bind(this),
                animation: 100,
                delay: 100
            }), this.unrankedSortable && this.unrankedSortable.destroy(), this.unrankedCollectionView.collection.set(n), this.unrankedSortable = Qe.create(this.unrankedCollectionView.el, {
                className: "unranked",
                group: {
                    name: "shared",
                    put: !1
                },
                sort: !1
            })
        },
        moveItemInArray(t, e, n) {
            const i = t.slice(0);
            if (e === n) return i;
            const o = i[e];
            return i.splice(e, 1), i.splice(n, 0, o), i
        },
        handleOnSort() {
            const t = this.model.get("choices"),
                e = this.rankedSortable.toArray();
            e.length === t.length && this.triggerMethod("sorted", e), this.model.set("rankedLength", e.length)
        },
        onChildviewButtonLock() {
            const t = this.rankedSortable.toArray();
            this.triggerMethod("lock", t)
        }
    }),
    kx = Et.View.extend({
        className: "Sortable scrollable",
        template: at.template(xx),
        model: new Ex,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.sorterView = this.sorterView || new Sx({}), this.listenTo(this.model, "change", this.update, this)
        },
        onAttach() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("choices", this.sorterView)
        },
        update() {
            this.promptComponent.model.set(this.model.get("prompt")), this.model.get("choices").length !== this.sorterView.model.get("choices").length && this.sorterView.model.set("choices", this.model.get("choices"))
        },
        onChildviewSorted(t) {
            this.triggerMethod("client:message", {
                action: "sort",
                order: t
            })
        },
        onChildviewLock(t) {
            this.triggerMethod("client:message", {
                action: "sort",
                lock: !0,
                order: t
            })
        }
    }),
    Tx = `<div id="controller" class="state-controller controller-content">
	<div class="ugc-action-toggle-visibility">
    	<span class="text toggle_prompts_prompt">toggle_prompts_prompt</span><br/>
    	<button id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button ugc-toggle-visibility-button-controller" data-target="controller"></button>
    	<button id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button  ugc-toggle-visibility-button-screen" data-target="screen"></button>
    </div>
    <div class="ugc-action-play">
        <div class="ugc-episode-name"></div>
    </div>
	<div class="ugc-action-new">
		<button class="button action-button create_new_episode" type="button" id="ugc-new-button">create_new_episode</button>
	</div>

	<div class="ugc-action-load">
    	<p class="ugc-option text-box ugc-load previous_episodes">previous_episodes</p>
		<div id="episodesRegion"></div>
	</div>

    <div id="prompt" class="prompt ugc-text"></div>
    <div id="ugc-no-actions">
    	<div id="ugc-no-actions-text"></div>
    </div>

    <div class="ugc-action-add">
    	<div id="inputRegion"></div>
    </div>

    <div class="ugc-action-title">
		<p class="text-box">
            <span class='text create_new_name_prompt'>create_new_name_prompt</span>
        </p>
    	<div id="titleInputRegion"></div>
    </div>

    <div class="ugc-action-close">
    	<button class="button action-button button_close" data-action="close">button_close</button>
    </div>
    <div class="ugc-action-unlock">
    	<button class="button action-button button_edit" data-action="unlock">button_edit</button>
    </div>
	<div class="ugc-action-done">
    	<button class="button action-button button_done" data-action="done">button_done</button>
    </div>
	<div class="ugc-action-submit">
    	<button class="button action-button button_publish" data-action="submit">button_publish</button>
    </div>

    <div class="ugc-action-play">
        <button class="button action-button button_play" data-action="play">button_play</button>
    </div>

    <div class="ugc-action-remove-content">
        <button class="button action-button button_delete" data-action="remove-content">button_delete</button>
    </div>

    <div class="ugc-action-exit">
        <button class="button action-button button_back_to_menu" data-action="exit">button_back_to_menu</button>
    </div>

    <div class="ugc-action-episodes">
        <button class="button action-button button_back_to_episodes" data-action="episodes">button_back_to_episodes</button>
    </div>

    <div class="ugc-action-remove">
        <div id="promptsCount" class="promptsCount"></div>
    	<div id="promptsRegion"></div>
    </div>
</div>`,
    Ax = si.extend({
        defaults: {
            controllerVisibility: !0,
            episodes: [],
            episodeTitle: "",
            index: 0,
            maxContentLength: 45,
            maxTitleLength: 20,
            name: "",
            noActionsText: "",
            prompts: [],
            screenVisibility: !0,
            state: "UGC",
            text: "",
            validActions: [],
            strings: {
                tos_warning: "By sharing content, you agree to our Terms of service",
                tos_warning_agree: "agree and share",
                tos_warning_back: "back to menu",
                create_new_episode: "create a new episode",
                create_new_name_prompt: "first things first, enter a name for the episode that will contain all your prompts and hit create.",
                create_new_button: "create",
                button_back_to_episodes: "back to episodes",
                button_back_to_menu: "back to menu",
                previous_episodes: "previous episodes:",
                toggle_prompts_prompt: "tap to show/hide prompts",
                button_close: "close",
                button_done: "done",
                button_add: "add prompt",
                input_placeholder: "enter a prompt",
                label_hidden: "hidden",
                button_edit: "edit",
                button_save: "save",
                button_publish: "publish",
                button_play: "play",
                button_delete: "delete",
                delete_warning: "Are you sure you want to delete this episode?",
                delete_warning_confirm: "Yes",
                delete_warning_cancel: "No"
            }
        }
    }),
    Ox = Et.View.extend({
        className: "UGC scrollable",
        template: at.template(Tx),
        model: new Ax,
        regions: {
            prompt: "#prompt",
            episodes: "#episodesRegion",
            input: "#inputRegion",
            titleInput: "#titleInputRegion",
            prompts: "#promptsRegion"
        },
        events: {
            "click #ugc-new-button": "onNewButtonClicked",
            "click #ugc-toggle-visibility-button-controller": "onToggleVisibilityController",
            "click #ugc-toggle-visibility-button-screen": "onToggleVisibilityScreen",
            "click .action-button": "onActionButtonClicked"
        },
        bindings: {
            ".ugc-text": {
                observe: "text",
                visible: !0,
                updateView: !0
            },
            ".ugc-action-add": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("add") !== -1
                }
            },
            ".ugc-action-close": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("close") !== -1
                }
            },
            ".ugc-action-exit": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("exit") !== -1
                }
            },
            ".ugc-action-load": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("load") !== -1
                }
            },
            ".ugc-action-new": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("new") !== -1
                }
            },
            ".ugc-action-play": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("play") !== -1
                }
            },
            ".ugc-action-remove": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("remove") !== -1
                }
            },
            ".ugc-action-remove-content": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("remove-content") !== -1
                }
            },
            ".ugc-action-done": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("done") !== -1
                }
            },
            ".ugc-action-submit": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("submit") !== -1
                }
            },
            ".ugc-action-title": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("title") !== -1
                }
            },
            ".ugc-action-toggle-visibility": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("toggle-visibility") !== -1
                }
            },
            ".ugc-action-unlock": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("unlock") !== -1
                }
            },
            ".ugc-action-episodes": {
                observe: "validActions",
                visible(t) {
                    return t && t.indexOf("episodes") !== -1
                }
            },
            "#ugc-no-actions": {
                observe: "validActions",
                visible(t) {
                    return !t || t.length === 0
                }
            },
            "#ugc-no-actions-text": {
                observe: "noActionsText",
                onGet(t) {
                    return typeof t == "string" ? t : ""
                }
            },
            "#ugc-toggle-visibility-button-controller": {
                classes: {
                    on: "controllerVisibility"
                }
            },
            "#ugc-toggle-visibility-button-screen": {
                classes: {
                    on: "screenVisibility"
                }
            },
            ".ugc-episode-name": "episodeTitle",
            ".create_new_episode": {
                observe: "strings",
                onGet(t) {
                    return t.create_new_episode || "create_new_episode"
                }
            },
            ".previous_episodes": {
                observe: "strings",
                onGet(t) {
                    return t.previous_episodes || "previous_episodes"
                }
            },
            ".toggle_prompts_prompt": {
                observe: "strings",
                onGet(t) {
                    return t.toggle_prompts_prompt || "toggle_prompts_prompt"
                }
            },
            ".create_new_name_prompt": {
                observe: "strings",
                onGet(t) {
                    return t.create_new_name_prompt || "create_new_name_prompt"
                }
            },
            ".button_close": {
                observe: "strings",
                onGet(t) {
                    return t.button_close || "button_close"
                }
            },
            ".button_edit": {
                observe: "strings",
                onGet(t) {
                    return t.button_edit || "button_edit"
                }
            },
            ".button_done": {
                observe: "strings",
                onGet(t) {
                    return t.button_done || "button_done"
                }
            },
            ".button_publish": {
                observe: "strings",
                onGet(t) {
                    return t.button_publish || "button_publish"
                }
            },
            ".button_play": {
                observe: "strings",
                onGet(t) {
                    return t.button_play || "button_play"
                }
            },
            ".button_delete": {
                observe: "strings",
                onGet(t) {
                    return t.button_delete || "button_delete"
                }
            },
            ".button_back_to_episodes": {
                observe: "strings",
                onGet(t) {
                    return t.button_back_to_episodes || "button_back_to_episodes"
                }
            },
            ".button_back_to_menu": {
                observe: "strings",
                onGet(t) {
                    return t.button_back_to_menu || "button_back_to_menu"
                }
            },
            "#promptsCount": {
                observe: ["prompts", "strings", "count", "maxCount"],
                onGet() {
                    const t = this.model.get("count"),
                        e = this.model.get("maxCount"),
                        n = this.model.get("prompts") || [],
                        i = this.model.get("strings").label_hidden || "hidden",
                        o = n.length;
                    let f = `${t}/${e}`;
                    return o < t && (f += ` (${t-o} ${i})`), f
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.episodesList = this.episodesList || new fi({
                action: "load",
                collection: new ot.Collection
            }), this.inputComponent = this.inputComponent || new to({
                model: new ot.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new to({
                model: new ot.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new fi({
                action: "remove",
                collection: new ot.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("episodes", this.episodesList), this.showChildView("input", this.inputComponent), this.showChildView("titleInput", this.titleInputComponent), this.showChildView("prompts", this.promptsList)
        },
        onAttach() {
            this.stickit(), this.update(), kt.vibrate()
        },
        update() {
            const t = this.model.get("validActions").length === 0 ? this.model.get("noActionsText") : this.model.get("text");
            this.promptComponent.model.set("text", t);
            const e = this.model.get("episodes").map(n => {
                const i = nn.htmlUnescape(n.metadata.title);
                let o = nn.safeText(i);
                return o += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: o
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = at.extend({}, n);
                i.text = nn.htmlUnescape(n.text);
                let o = n.author !== this.client.userId ? "other" : "self";
                return n.className && (o += ` ${n.className}`), {
                    ...i,
                    className: o
                }
            }))
        },
        onNewButtonClicked() {
            this.triggerMethod("client:message", {
                action: "new"
            })
        },
        onChildviewInputSubmit() {
            let t, e;
            this.model.get("validActions").indexOf("add") !== -1 ? (t = "add", e = this.inputComponent.getSanitizedValue(), this.inputComponent.clearInput(), this.inputComponent.focus()) : this.model.get("validActions").indexOf("title") !== -1 && (t = "title", e = this.titleInputComponent.getValue(), this.titleInputComponent.clearInput()), !(!t || !e) && this.triggerMethod("client:message", {
                action: t,
                text: e
            })
        },
        onChildviewChildviewButtonLoad(t) {
            this.triggerMethod("client:message", {
                action: "load",
                contentId: t.get("key")
            })
        },
        onChildviewChildviewButtonRemove(t) {
            this.triggerMethod("client:message", {
                action: "remove",
                key: t.get("key")
            })
        },
        onToggleVisibilityController() {
            this.triggerMethod("client:message", {
                action: "toggle-visibility",
                target: "controller"
            })
        },
        onToggleVisibilityScreen() {
            this.triggerMethod("client:message", {
                action: "toggle-visibility",
                target: "screen"
            })
        },
        onActionButtonClicked(t) {
            const e = ae(t.currentTarget).data("action");
            if (e === "submit") {
                this.showTermsOfService();
                return
            }
            if (e === "remove-content") {
                this.showConfirmDeleteDialog();
                return
            }
            this.triggerMethod("client:message", {
                action: e
            })
        },
        showTermsOfService() {
            const t = `
            <a href='https://www.jackboxgames.com/terms-of-service/' target='_blank' >
                <br>
                <div class="tosLink">
                    <svg
                        class="bi bi-link-45deg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243
                                l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337
                                L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
                        />
                        <path
                            d="M5.712 6.96l.167-.167a1.99 1.99 0 0 1 .896-.518 1.99 1.99 0 0 1 .518-.896
                                l.167-.167A3.004 3.004 0 0 0 6 5.499c-.22.46-.316.963-.288 1.46z"
                        />
                        <path
                            d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346
                                L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287
                                l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"
                        />
                        <path
                            d="M10 9.5a2.99 2.99 0 0 0 .288-1.46
                                l-.167.167a1.99 1.99 0 0 1-.896.518 1.99 1.99 0 0 1-.518.896
                                l-.167.167A3.004 3.004 0 0 0 10 9.501z"
                        />
                    </svg>
                </div>
            </a>
        `;
            Rn.fire({
                target: this.el,
                html: `${this.model.get("strings").tos_warning}${t}`,
                showCancelButton: !0,
                confirmButtonText: this.model.get("strings").tos_warning_agree,
                cancelButtonText: this.model.get("strings").tos_warning_back,
                customClass: {
                    popup: "ugcModal",
                    confirmButton: "button confirmButton",
                    cancelButton: "button cancelButton"
                }
            }).then(e => {
                e.value && this.triggerMethod("client:message", {
                    action: "submit"
                })
            })
        },
        showConfirmDeleteDialog() {
            Rn.fire({
                target: this.el,
                text: this.model.get("strings").delete_warning,
                showCancelButton: !0,
                confirmButtonText: this.model.get("strings").delete_warning_confirm,
                cancelButtonText: this.model.get("strings").delete_warning_cancel,
                customClass: {
                    popup: "ugcModal",
                    confirmButton: "button confirmButton",
                    cancelButton: "button cancelButton"
                }
            }).then(t => {
                t.value && this.triggerMethod("client:message", {
                    action: "remove-content"
                })
            })
        },
        onChildviewChildviewButtonChoose(t) {
            const e = t.get("text");
            this.triggerMethod("client:message", {
                action: "remove",
                text: e
            })
        }
    }),
    Rx = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
    <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:rgb(0,0,0); stop-opacity:0.5" />
            <stop offset="60%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />
            <stop offset="80%" style="stop-color:rgb(0,0,0); stop-opacity:0.9" />
            <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:0.7" />
        </radialGradient>
        <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 263.67 271.33">
            <title>astroIcon</title>
            <path class="cls-1" d="M253.83,108.17H210.89A57.83,57.83,0,0,1,160,138.5H140a57.83,57.83,0,0,1-50.89-30.33H46.17a19.5,19.5,0,0,0-19.5,19.5v11a19.5,19.5,0,0,0,19.5,19.5H70.4a19.5,19.5,0,0,1,19.5,19.5V259.8a17.37,17.37,0,0,0,17.36,17.37H115A17.37,17.37,0,0,0,132.4,259.8V236.53a17.37,17.37,0,0,1,17.37-17.36h0a17.36,17.36,0,0,1,17.36,17.36V259.8a17.37,17.37,0,0,0,17.37,17.37h9a17.37,17.37,0,0,0,17.36-17.37V177.67a19.5,19.5,0,0,1,19.5-19.5h23.49a19.5,19.5,0,0,0,19.5-19.5v-11A19.5,19.5,0,0,0,253.83,108.17Z" transform="translate(-18.17 -14.33)"/>
            <rect class="cls-1" x="64" y="8.5" width="135.67" height="115.67" rx="57.83" ry="57.83"/>
        </svg>
        <svg
           xmlns:dc="http://purl.org/dc/elements/1.1/"
           xmlns:cc="http://creativecommons.org/ns#"
           xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
           xmlns:svg="http://www.w3.org/2000/svg"
           xmlns="http://www.w3.org/2000/svg"
           height="55"
           width="40"
           xml:space="preserve"
           viewBox="-20 -27.5 40 55"
           y="0px"
           x="0px"
           id="Layer_1"
           version="1.1"><metadata
           id="metadata10"><rdf:RDF><cc:Work
               rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
                 rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
           id="defs8" />
        <path
           style="fill:#ffffff"
           d="m -20,27.5 20,-55 20,55 -20,-13 z"
           class="st0"
           id="aimArrow" />
        </svg>

    </defs>

    <circle class="background" r="16" cx="0" cy="0" />
    <circle class="background-gradient" r="32" cx="0" cy="0" fill="url(#grad1)" />
    <circle class="background-border" r=33 cx=0 cy=0 stroke="black" stroke-width="2" fill="none" />
    <circle id="health-display" class="health-display" r="33" cx="0" cy="0" />
    <circle class="circle-deadzone" fill="black" fill-opacity="0.8" r=1 cx=0 cy=0 stroke="white" stroke-width="0.3" stroke-dasharray="3.5 1.52" />
    
    <circle class="crosshair-center" r=1 cx=0 cy=0 />
    <circle class="circle-border-white" r="32" cx="0" cy="0" stroke="#ffffff" stroke-width="0.3" fill="none"/>
    <line class="line-helper-left" x1="-32" y1="0" x2="0" y2="0" ></line>
    <line class="line-helper-right" x1="32" y1="0" x2="0" y2="0" ></line>
    <circle class="locked-in-fade" r="17" cx="0" cy="0" />
    <line class="locked-in-line" x1="0" y1="0" x2="0" y2="0" display="inline"></line>
    <use class="aimArrow" xlink:href="#Layer_1" transform="rotate(180)" x="-2" y="-2.5" width="4" height="5"></use>
    <use class="astro" xlink:href="#Layer_3" transform="translate(-8, -8)" width="16" height="16"></use>
    <text id="text" class="text" x=0 y=10 text-anchor="middle" font-size=30 stroke="white">H</text>
</svg>`,
    Ix = Et.View.extend({
        className: "RadialView",
        template: at.template(Rx),
        model: new ot.Model({
            isTouching: !1,
            angle: 0,
            vector: {
                x: 0,
                y: 0
            },
            touchBuffer: 5
        }),
        events: {
            "mousedown .range-picker": "start",
            "touchstart .range-picker": "start",
            "touchmove .range-picker": "start",
            touchmove: "move",
            touchend: "end"
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "lockedIn" : ""
                    }
                }]
            },
            ".background": {
                attributes: [{
                    name: "style",
                    observe: "accentColor",
                    onGet(t) {
                        return `stroke: ${t}`
                    }
                }]
            },
            ".health-display": {
                attributes: [{
                    name: "style",
                    observe: ["selector", "accentColor"],
                    onGet(t) {
                        let e = "";
                        const n = t[0],
                            i = t[1];
                        i && (e += `stroke:${i};`);
                        const o = n * 207,
                            f = 207 * (1 - n);
                        return e += `stroke-dasharray:${o} ${f};`, e += `transform:rotate(${-360*n-90}deg);`, e
                    }
                }]
            },
            ".line-helper-left": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "none" : "inline"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".line-helper-right": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "none" : "inline"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".locked-in-line": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "inline" : "none"
                    }
                }, {
                    name: "x2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y2",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }]
            },
            ".circle-deadzone": {
                attributes: [{
                    name: "r",
                    observe: "isTouching",
                    onGet(t) {
                        return "9.6"
                    }
                }]
            },
            ".text": "text",
            ".astro": {
                attributes: [{
                    name: "style",
                    observe: ["accentColor", "lockedIn"],
                    onGet(t) {
                        let e = "";
                        return e += `fill:${t[1]?"black":t[0]};`, e += `stroke:${t[1]?"#cccccc":"#ff00ff"};`, e
                    }
                }, {
                    name: "x",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.x : 1
                    }
                }, {
                    name: "y",
                    observe: "vector",
                    onGet(t) {
                        return t ? t.y : 1
                    }
                }, {
                    name: "width",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? 8 : 16
                    }
                }, {
                    name: "height",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? 8 : 16
                    }
                }, {
                    name: "transform",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "translate(-4, -4)" : "translate(-8,-8)"
                    }
                }]
            },
            ".locked-in-fade": {
                attributes: [{
                    name: "display",
                    observe: "lockedIn",
                    onGet(t) {
                        return t ? "inline" : "none"
                    }
                }]
            },
            ".aimArrow": {
                attributes: [{
                    name: "transform",
                    observe: "angle",
                    onGet(t) {
                        let e = "";
                        return e += ` rotate(${t+180})`, e
                    }
                }, {
                    name: "display",
                    observe: ["lockedIn", "vector"],
                    onGet(t) {
                        return t[0] && this.getDistance(t[1]) > 0 ? "inline" : "none"
                    }
                }]
            }
        },
        initialize() {
            this.model.on("change:angle", this.updateAngle, this), this.model.on("change:vector", this.updateVector, this), this.model.on("change:isTouching", this.updateIsTouching, this)
        },
        updateAngle() {
            this.triggerMethod("angle", this.model.get("angle"))
        },
        updateVector() {
            this.triggerMethod("vector", this.getNormalizedVector())
        },
        updateIsTouching() {
            this.triggerMethod("isTouching", this.model.get("isTouching"))
        },
        onRender() {
            this.stickit()
        },
        start(t) {
            const e = this.eventToCoord(t);
            this.startCoord || (this.startCoord = e)
        },
        move(t) {
            t.preventDefault();
            const e = this.eventToCoord(t);
            if (!this.model.get("isTouching") && this.startCoord && this.getDistance(e, this.startCoord) > this.model.get("touchBuffer") && this.model.set("isTouching", !0), !this.model.get("isTouching") || this.model.get("lockedIn")) return;
            const n = this.coordToVector(e);
            this.model.set("vector", n);
            const i = this.coordToAngle(e);
            this.model.set("angle", i)
        },
        end() {
            this.startCoord = null, this.model.get("isTouching") && (this.model.set("isTouching", !1), this.triggerMethod("end", this.model))
        },
        getDistance(t, e) {
            e || (e = {
                x: 0,
                y: 0
            });
            const n = {
                x: e.x - t.x,
                y: e.y - t.y
            };
            return Math.sqrt(n.x ** 2 + n.y ** 2)
        },
        getNormalizedVector() {
            const t = at.extend({}, this.model.get("vector"));
            return t.x /= 32, t.y /= 32, t
        },
        eventToCoord(t) {
            const e = this.$el[0].getBoundingClientRect();
            return t.targetTouches && t.targetTouches instanceof TouchList && t.targetTouches.length > 0 ? {
                x: t.targetTouches[0].pageX - e.left,
                y: t.targetTouches[0].pageY - e.top
            } : {
                x: t.clientX - e.left,
                y: t.clientY - e.top
            }
        },
        coordToAngle(t) {
            const e = this.coordToVector(t);
            let n = Math.atan2(-e.x, e.y);
            return n += Math.PI, n = parseInt(n * 180 / Math.PI, 10), n
        },
        coordToVector(t) {
            const e = this.$el[0].getBoundingClientRect(),
                n = {
                    x: t.x - parseInt(e.width, 10) / 2,
                    y: t.y - parseInt(e.height, 10) / 2
                },
                i = 76 / e.width;
            n.x *= i, n.y *= i;
            const o = this.getDistance(n);
            if (o > 32) {
                const f = 32 / o;
                n.x *= f, n.y *= f
            }
            return n
        }
    }),
    Dx = `<div id="status-bar" class="health text">\r
    <div id="weaponBorder" class="weaponBorder">\r
        <div id="weaponIcon" class="weaponIcon"></div>\r
    </div>\r
</div>\r
<div id="radial" class="radial"></div>\r
<div id="control-panel" class="control-panel">\r
    <div class="message text">message</div>\r
    <div class="weaponNameContainer text">\r
        <div class="weaponIcon small"></div>\r
        <span class="weaponName">weapon name</span>\r
    </div>\r
    <div class="weaponText text">weapon text</div>\r
</div>`,
    Mx = si.extend({
        defaults: {
            shotId: void 0,
            state: "Shoot",
            throttle: 44,
            weapon: {},
            playerCanSwap: !1,
            characterCurrentHealth: null,
            characterMaxHealth: null,
            lockedIn: !1,
            selectorCircle: !0,
            classes: [],
            message: ""
        }
    }),
    Lx = Et.View.extend({
        model: new Mx,
        template: at.template(Dx),
        className: "Shoot",
        client: null,
        regions: {
            radial: "#radial"
        },
        events: {
            "click .swap-button": "swapPlayer",
            touchstart: "eat",
            "click #reconnect": "reconnect"
        },
        eat(t) {
            t.preventDefault()
        },
        move(t) {
            this.radialComponent.move(t)
        },
        end(t) {
            this.radialComponent.end(t)
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "playerInfo",
                    onGet(t) {
                        return t && t.bgcolor ? `background-color:${t.bgcolor}` : ""
                    }
                }]
            },
            ".swap-button": {
                observe: "playerCanSwap",
                visible: !0
            },
            ".health": {
                observe: "characterCurrentHealth",
                visible(t) {
                    return t !== null
                }
            },
            ".currentHealth": "characterCurrentHealth",
            ".maxHealth": "characterMaxHealth",
            ".weaponText": {
                observe: "weapon",
                onGet(t) {
                    return t.text
                }
            },
            ".message": "message",
            ".weaponBorder": {
                attributes: [{
                    name: "class",
                    observe: "weapon",
                    onGet(t) {
                        return t ? t.count ? `count-${t.count}` : "" : null
                    }
                }]
            },
            ".weaponIcon": {
                attributes: [{
                    name: "class",
                    observe: "weapon",
                    onGet(t) {
                        return t ? t.id : ""
                    }
                }]
            },
            ".weaponName": {
                observe: "weapon",
                onGet(t) {
                    return t ? t.name ? t.name : t.id : ""
                }
            }
        },
        onChildviewVector(t) {
            this.throttledUpdate && this.throttledUpdate(t)
        },
        updateVector(t) {
            this.model.get("isAudience") || t.x === 0 && t.y === 0 || !this.radialComponent.model.get("isTouching") || this.triggerMethod("client:message", {
                action: "move",
                type: "move",
                vector: t
            })
        },
        onChildviewEnd() {
            if (this.model.get("lockedIn")) return;
            const t = this.radialComponent.getNormalizedVector();
            if (Math.sqrt(t.x * t.x + t.y * t.y) < .3) {
                this.radialComponent.model.set("vector", {
                    x: 0,
                    y: 0
                }), this.radialComponent.model.set("angle", 180), this.model.get("isPlayer") && this.triggerMethod("client:message", {
                    action: "cancel",
                    type: "cancel"
                });
                return
            }
            const n = this.model.get("weapon"),
                i = n.id ? n.id : this.model.get("weapon"),
                o = this.radialComponent.model.get("angle"),
                f = Math.floor(o / 10);
            this.triggerMethod("client:message", {
                action: "fire",
                type: "fire",
                weapon: i,
                vector: t
            }), this.model.get("isAudience") && (this.audienceShot = f * 10, this.shotId = this.model.get("shotId") || 0, this.model.setUpdate({
                lockedIn: !0,
                shotId: this.shotId
            }))
        },
        initialize(t) {
            this.client = t.client, this.radialComponent = new Ix({
                model: new ot.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), ae(window).on("mousemove", this.move.bind(this)), ae(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), ae(window).off("mousemove"), ae(window).off("mouseup")
        },
        update() {
            const t = this.model.get("characterCurrentHealth"),
                e = this.model.get("characterMaxHealth");
            if (this.radialComponent.model.set("selector", t / e), this.radialComponent.model.set("accentColor", this.model.get("characterColor")), this.radialComponent.model.set("lockedIn", this.model.get("lockedIn")), this.radialComponent.model.set("text", ""), this.client.isRole("audience") && ((this.model.get("shotId") === void 0 || this.model.get("shotId") !== this.shotId) && (this.audienceShot = void 0), this.audienceShot && (this.model.setUpdate({
                    lockedIn: !0,
                    shotId: this.model.get("shotId") || 0
                }), this.radialComponent.model.set("text", `${this.audienceShot}\xB0`))), !this.model.get("lockedIn") && !this.radialComponent.model.get("isTouching") && this.radialComponent.model.set("vector", {
                    x: 0,
                    y: 0
                }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
            else {
                if (!this.notified && this.model.get("state") === "Shoot") {
                    const n = {
                        ClusterBombs: [45, 60, 45, 60, 45, 60],
                        PlayerWeapon: [100, 100],
                        RainbowCannon: [45, 60, 45, 60, 45, 60],
                        Repeater: [45, 60, 45, 60, 45, 60],
                        Seeker: [45, 60, 45, 60, 45, 60],
                        Shield: [45, 60, 45, 60, 45, 60],
                        Stun: [45, 60, 45, 60, 45, 60],
                        SuperBlaster: [45, 60, 45, 60, 45, 60]
                    } [this.model.get("weapon").id];
                    kt.vibrate(n)
                }
                this.notified = !0
            }
        },
        onRender() {
            this.showChildView("radial", this.radialComponent), this.stickit()
        },
        onAttach() {
            this.update(), this.onResize(), kt.vibrate()
        },
        onResize() {
            const t = ae(".radial"),
                e = ae("#status-bar").outerHeight() + ae(".playerTopBar").outerHeight() + ae("#control-panel").outerHeight() + 10,
                n = ae(".controller-page").width(),
                i = window.innerHeight - e,
                o = Math.max(150, Math.min(n, i));
            t.css("width", `${o}px`), t.css("height", `${o}px`), window.scrollTo(0, 0)
        }
    }),
    Px = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
<div id="controller-container" class="state-controller controller-page">
    <div id="playerRegion"></div>
    <div id="controller-main">
        <div class="loadingSpinner">
            <i class="fas fa-spinner fa-spin" style="font-size:48px"></i>
        </div>
    </div>
</div>
<div id="broadcaster" role="button" aria-label="twitch broadcaster information" style="display:none;" class="twitchBroadcasterIcon"></div>
`;
Et.View.extend({
    client: null,
    template: at.template(Px),
    playerTopBar: null,
    className() {
        return `pt-page ${this.getOption("appTag")}`
    },
    regions: {
        player: "#playerRegion",
        controller: {
            el: "#controller-main",
            replaceElement: !0
        }
    },
    events: {
        "click .twitchBroadcasterIcon": "onTwitchBroadcasterIconClick"
    },
    bindings: {
        ":el": {
            attributes: [{
                name: "class",
                observe: "blob",
                onGet(t) {
                    let e = `pt-page ${this.getOption("appTag")}`;
                    return t && t.locale && (e += ` ${t.locale}`), e
                }
            }]
        },
        ".twitchBroadcasterIcon": {
            observe: ["broadcaster", "blob"],
            visible: !0,
            onGet([t, e]) {
                return t && e && !e.artifact && ["Lobby", "Logo"].includes(e.state)
            }
        }
    },
    initialize(t) {
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new qC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new ot.Model({});
        const e = t.client.parseEntities();
        this.model.set(e), this.model.on({
            "change:player": this.setBlob,
            "change:room": this.setBlob,
            "change:audiencePlayer": this.setBlob,
            "change:blob": this.update
        }, this), this.render(), this.setBlob(), window.addEventListener("resize", this.onResize)
    },
    onRender() {
        this.update(), this.stickit()
    },
    onAttach() {
        this.showChildView("player", this.playerTopBar), this.onResize(), this.client.isRole("broadcaster") && (this.model.set("broadcaster", this.client.isRole("broadcaster")), this.showTwitchBroadcasterDialog(20 * 1e3))
    },
    onBeforeDestroy() {
        this.model.stopListening(), this.client.off("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.off("client:textDescriptions", this.onTextDescriptionsWithContext), this.client.off("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.off("client:disconnected", this.onDisconnectedWithContext), this.client.off("client:connection", this.onConnectionMessageWithContext)
    },
    updateLayout() {
        const e = this.model.get("blob").state;
        if (this.getGameLayout(e) !== -1) return null;
        switch (e) {
            case "Draw":
                return this.setLayout(LC);
            case "EnterSingleText":
                return this.setLayout(VC);
            case "Lobby":
                return this.setLayout(jC);
            case "Logo":
                return this.setLayout(UC);
            case "MakeSingleChoice":
                return this.setLayout(YC);
            case "Shoot":
                return this.setLayout(Lx);
            case "Sortable":
                return this.setLayout(kx);
            case "Camera":
                return this.setLayout(EC);
            case "UGC":
                return this.setLayout(Ox);
            default:
                return new Error("No common layout found")
        }
    },
    setLayout(t) {
        const e = new t(this.options),
            n = this.getRegion("controller");
        !n || (n.reset(), e.model.set(this.model.get("blob")), this.showChildView("controller", e), this.currentLayout = e, this.currentState = this.model.get("blob").state)
    },
    onEntityDidChange(t, e) {
        this.model.unset(t, {
            silent: !0
        }), this.model.set(t, e)
    },
    onTextDescriptions(t, e) {
        this.setTextDescriptions(e.latestDescriptions)
    },
    setBlob() {
        const t = this.model.get("player"),
            e = this.model.get("room"),
            n = this.model.get("audiencePlayer");
        let i = {};
        t && !at.isEmpty(t) ? i = {
            ...at.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...at.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...at.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && Zt.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: at.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Ni.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), ae("#textDescriptions").append(ae("<p />").text(e.text)))
        }))
    },
    parseBlob(t) {
        return t
    },
    getGameLayout() {
        return -1
    },
    formatSessionMessage(t) {
        return t
    },
    onTwitchBroadcasterIconClick() {
        this.showTwitchBroadcasterDialog()
    },
    showTwitchBroadcasterDialog(t) {
        let e = `
            <div class='icon-${this.client.roles.broadcaster.platform}'>
                ${this.client.roles.broadcaster.name}
            </div>`;
        e += `
            <div class='success'>
                You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.
            </div>`, this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), kt.show("custom", {
            html: e,
            position: "bottom",
            timer: t,
            backdrop: "transparent",
            customClass: {
                container: "jbgTwitchContainer",
                popup: "jbgTwitchPopup",
                htmlContainer: "jbgTwitchContent",
                closeButton: "jbgCloseButton"
            },
            showCloseButton: !0,
            closeButtonHtml: `
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2.00006L2 20" stroke="#0C0C0C" stroke-width="3"></path>
                    <path d="M2 2.00001L20 20" stroke="#0C0C0C" stroke-width="3" />
                </svg>`,
            showConfirmButton: !1,
            showClass: {
                popup: "jbgTwitchShow"
            },
            hideClass: {
                popup: "jbgTwitchHide"
            }
        })
    },
    onResize() {
        const t = ae(window).width(),
            e = ae(window).height();
        ae(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), kt.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        kt.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
        if (kt.show("toast", {
                text: e
            }), t.status === "connected") {
            const n = this.client.parseEntities();
            this.model.set(n)
        }
    },
    async onChildviewClientMessage(t) {
        if (this.client.isRole("player"))
            if (t.textKey) try {
                await this.client.updateText(t.textKey, t.val)
            } catch (e) {
                if (e instanceof ti.EcastEntityNotFound || e instanceof ti.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                else if (e instanceof ti.EcastFilterError) this.currentLayout.onTextFilterError && this.currentLayout.onTextFilterError(e);
                else throw console.error(`Unhandled error updating text entity ${t.textKey}`), e
            } else if (t.objectKey) try {
                await this.client.updateObject(t.objectKey, t.val)
            } catch (e) {
                if (e instanceof ti.EcastEntityNotFound || e instanceof ti.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                else if (e instanceof ti.EcastFilterError) this.currentLayout.onObjectFilterError && this.currentLayout.onObjectFilterError(e);
                else throw console.error(`Unhandled error updating object entity ${t.objectKey}`), e
            } else {
                const e = this.formatSessionMessage(t);
                this.client.send("SendMessageToRoomOwner", e)
            } else if (this.client.isRole("audience")) {
                const e = this.currentLayout.sessionModule,
                    n = this.formatSessionMessage(t);
                if (!e) return;
                if (e === "vote") {
                    const i = this.currentLayout.model.get("countGroupName"),
                        o = n.vote;
                    this.onChildviewClientCountGroup({
                        name: i,
                        vote: o
                    })
                }
                if (e === "comment") {
                    const i = this.currentLayout.model.get("textRingName"),
                        o = n.entry;
                    this.onChildviewClientTextRing({
                        name: i,
                        text: o
                    })
                }
            }
    },
    onChildviewClientSessionMessage(t) {
        this.client.sessionSend(t.sessionModule, t.sessionName, t.sessionMessage)
    },
    onChildviewClientCountGroup({
        name: t,
        vote: e
    }) {
        t || (t = this.sessionModulePrefix + this.currentLayout.sessionName), this.client.incrementCountGroupCounter(t, e)
    },
    onChildviewClientGCounter({
        key: t,
        times: e
    }) {
        this.client.incrementGCounter(t, e)
    },
    onChildviewClientTextRing({
        name: t,
        text: e
    }) {
        t || (t = this.sessionModulePrefix + this.currentLayout.sessionName), this.client.pushTextRing(t, e)
    }
});
var hh = {
    exports: {}
};
/*!
 * EventEmitter v5.2.9 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */
(function(t) {
    (function(e) {
        function n() {}
        var i = n.prototype,
            o = e.EventEmitter;

        function f(k, A) {
            for (var D = k.length; D--;)
                if (k[D].listener === A) return D;
            return -1
        }

        function v(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(A) {
            var D = this._getEvents(),
                V, Y;
            if (A instanceof RegExp) {
                V = {};
                for (Y in D) D.hasOwnProperty(Y) && A.test(Y) && (V[Y] = D[Y])
            } else V = D[A] || (D[A] = []);
            return V
        }, i.flattenListeners = function(A) {
            var D = [],
                V;
            for (V = 0; V < A.length; V += 1) D.push(A[V].listener);
            return D
        }, i.getListenersAsObject = function(A) {
            var D = this.getListeners(A),
                V;
            return D instanceof Array && (V = {}, V[A] = D), V || D
        };

        function b(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? b(k.listener) : !1
        }
        i.addListener = function(A, D) {
            if (!b(D)) throw new TypeError("listener must be a function");
            var V = this.getListenersAsObject(A),
                Y = typeof D == "object",
                ie;
            for (ie in V) V.hasOwnProperty(ie) && f(V[ie], D) === -1 && V[ie].push(Y ? D : {
                listener: D,
                once: !1
            });
            return this
        }, i.on = v("addListener"), i.addOnceListener = function(A, D) {
            return this.addListener(A, {
                listener: D,
                once: !0
            })
        }, i.once = v("addOnceListener"), i.defineEvent = function(A) {
            return this.getListeners(A), this
        }, i.defineEvents = function(A) {
            for (var D = 0; D < A.length; D += 1) this.defineEvent(A[D]);
            return this
        }, i.removeListener = function(A, D) {
            var V = this.getListenersAsObject(A),
                Y, ie;
            for (ie in V) V.hasOwnProperty(ie) && (Y = f(V[ie], D), Y !== -1 && V[ie].splice(Y, 1));
            return this
        }, i.off = v("removeListener"), i.addListeners = function(A, D) {
            return this.manipulateListeners(!1, A, D)
        }, i.removeListeners = function(A, D) {
            return this.manipulateListeners(!0, A, D)
        }, i.manipulateListeners = function(A, D, V) {
            var Y, ie, K = A ? this.removeListener : this.addListener,
                re = A ? this.removeListeners : this.addListeners;
            if (typeof D == "object" && !(D instanceof RegExp))
                for (Y in D) D.hasOwnProperty(Y) && (ie = D[Y]) && (typeof ie == "function" ? K.call(this, Y, ie) : re.call(this, Y, ie));
            else
                for (Y = V.length; Y--;) K.call(this, D, V[Y]);
            return this
        }, i.removeEvent = function(A) {
            var D = typeof A,
                V = this._getEvents(),
                Y;
            if (D === "string") delete V[A];
            else if (A instanceof RegExp)
                for (Y in V) V.hasOwnProperty(Y) && A.test(Y) && delete V[Y];
            else delete this._events;
            return this
        }, i.removeAllListeners = v("removeEvent"), i.emitEvent = function(A, D) {
            var V = this.getListenersAsObject(A),
                Y, ie, K, re, m;
            for (re in V)
                if (V.hasOwnProperty(re))
                    for (Y = V[re].slice(0), K = 0; K < Y.length; K++) ie = Y[K], ie.once === !0 && this.removeListener(A, ie.listener), m = ie.listener.apply(this, D || []), m === this._getOnceReturnValue() && this.removeListener(A, ie.listener);
            return this
        }, i.trigger = v("emitEvent"), i.emit = function(A) {
            var D = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(A, D)
        }, i.setOnceReturnValue = function(A) {
            return this._onceReturnValue = A, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = o, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : vt || {})
})(hh);
const Nx = hh.exports;
class Vx extends Nx {
    constructor(n, i) {
        super();
        st(this, "wsClient");
        st(this, "name");
        st(this, "id");
        st(this, "userId");
        st(this, "uuid");
        st(this, "joinAs", "player");
        st(this, "room");
        st(this, "roles", {});
        st(this, "code", null);
        st(this, "host");
        st(this, "onPlayerWelcome", n => {
            this.id = n.id, this.roles = n.profile ? n.profile.roles : {}, n.here && (this.host = Object.values(n.here).find(({
                roles: i
            }) => i.host)), this.emit("client:didJoinRoom", {
                appId: this.room.appId,
                appTag: this.room.appTag,
                id: n.id,
                reconnect: `${n.id}:${this.joinAs}:${n.secret}`
            })
        });
        st(this, "parseEntities", () => {
            if (!this.wsClient) return {};
            const n = this.wsClient.entities,
                i = {};
            return Object.keys(n).forEach(o => {
                const f = n[o];
                o === "room" || o === "bc:room" || o === "roomBlob" ? (f instanceof Ri.TextEntity && (i.room = f.toBlob()), f instanceof Ri.ObjectEntity && (i.room = f.val)) : o === "player" || o === `player:${this.id}` || o === `bc:customer:${this.userId}` ? (f instanceof Ri.TextEntity && (i.player = f.toBlob()), f instanceof Ri.ObjectEntity && (i.player = f.val)) : o === "audiencePlayer" && (f instanceof Ri.TextEntity && (i.audiencePlayer = f.toBlob()), f instanceof Ri.ObjectEntity && (i.audiencePlayer = f.val))
            }), i
        });
        this.wsClient = n, this.name = n.name, this.userId = n.userId, this.uuid = n.userId, this.joinAs = n.role, this.room = i.room, n.on("object", this.onObject.bind(this)), n.on("room/exit", this.onRoomExit.bind(this)), n.on("socketClose", this.onSocketClose.bind(this)), n.on("connection", this.onConnection.bind(this)), n.on("text", this.onText.bind(this)), this.onPlayerWelcome(i.welcome)
    }
    get entities() {
        return this.wsClient ? this.wsClient.entities : {
            none: !0
        }
    }
    get isReady() {
        var n;
        return ((n = this.wsClient) == null ? void 0 : n.conn.readyState) === WebSocket.OPEN
    }
    isRole(n) {
        const i = Object.keys(this.roles);
        return !i.length && n === "audience" ? !0 : i.includes(n)
    }
    disconnect() {
        !this.wsClient || (this.wsClient.disconnect(), this.wsClient = null)
    }
    onText(n) {
        const i = n.key,
            o = n.text;
        let f = n.text;
        try {
            f = JSON.parse(f)
        } catch {
            nc(`[Ecast Client] Unhandled text notification: ${n.key} ${o}`);
            return
        }
        const v = f;
        i === "room" ? this.emit("client:entityDidChange", i, v) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", v) : i === "bc:room" ? this.emit("client:entityDidChange", "room", v) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", v) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", v) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            o = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, o) : i === "player" ? this.emit("client:entityDidChange", "player", o) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", o) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, o) : i === "bc:room" ? this.emit("client:entityDidChange", "room", o) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", o) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", o) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onSocketClose(n) {
        n instanceof ti.EcastServerError || n.code === 1005 || n.code === 1e3 ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
    }
    onRoomExit(n) {
        this.emit("client:disconnected", n), this.disconnect()
    }
    onConnection(n) {
        this.emit("client:connection", n)
    }
    async send(n, i) {
        var o, f;
        if (!!this.isReady) try {
            if (n === "SendMessageToRoomOwner") {
                const v = (f = (o = this.host) == null ? void 0 : o.id) != null ? f : "1";
                await this.wsClient.mail(v, i)
            } else await this.wsClient.send(n, i)
        } catch (v) {
            console.error(v)
        }
    }
    sessionSend(n, i, o) {
        !this.isReady || (n === "vote" && this.incrementCountGroupCounter(i, `${o.vote}`), n === "comment" && this.pushTextRing(i, `${o.comment}`))
    }
    async updateText(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateText(n, i)
        } catch (o) {
            throw console.warn("Text update rejected.", o), o
        }
    }
    async updateObject(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateObject(n, i)
        } catch (o) {
            throw console.warn("Object update rejected.", o), o
        }
    }
    async incrementCountGroupCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementCountGroupCounter(n, `${i}`)
        } catch (o) {
            console.error(o)
        }
    }
    async incrementGCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementGCounter(n, i)
        } catch (o) {
            console.error(o)
        }
    }
    async pushTextRing(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.pushTextRing(n, `${i}`)
        } catch (o) {
            console.error(o)
        }
    }
}
const Bx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(ae)
})(function(t) {
    var e, n = navigator.userAgent,
        i = /iphone/i.test(n),
        o = /chrome/i.test(n),
        f = /android/i.test(n);
    t.mask = {
        definitions: {
            9: "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, t.fn.extend({
        caret: function(v, b) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof v == "number" ? (b = typeof b == "number" ? b : v, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(v, b) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", b), k.moveStart("character", v), k.select())
            })) : (this[0].setSelectionRange ? (v = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), v = 0 - k.duplicate().moveStart("character", -1e5), b = v + k.text.length), {
                begin: v,
                end: b
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(v, b) {
            var k, A, D, V, Y, ie, K, re;
            if (!v && this.length > 0) {
                k = t(this[0]);
                var m = k.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return b = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, b), A = t.mask.definitions, D = [], V = K = v.length, Y = null, t.each(v.split(""), function(P, q) {
                q == "?" ? (K--, V = P) : A[q] ? (D.push(new RegExp(A[q])), Y === null && (Y = D.length - 1), V > P && (ie = D.length - 1)) : D.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (b.completed) {
                        for (var we = Y; ie >= we; we++)
                            if (D[we] && oe[we] === q(we)) return;
                        b.completed.call(U)
                    }
                }

                function q(we) {
                    return b.placeholder.charAt(we < b.placeholder.length ? we : 0)
                }

                function le(we) {
                    for (; ++we < K && !D[we];);
                    return we
                }

                function se(we) {
                    for (; --we >= 0 && !D[we];);
                    return we
                }

                function ye(we, he) {
                    var Se, Te;
                    if (!(0 > we)) {
                        for (Se = we, Te = le(he); K > Se; Se++)
                            if (D[Se]) {
                                if (!(K > Te && D[Se].test(oe[Te]))) break;
                                oe[Se] = oe[Te], oe[Te] = q(Te), Te = le(Te)
                            } J(), U.caret(Math.max(Y, we))
                    }
                }

                function d(we) {
                    var he, Se, Te, $e;
                    for (he = we, Se = q(we); K > he; he++)
                        if (D[he]) {
                            if (Te = le(he), $e = oe[he], oe[he] = Se, !(K > Te && D[Te].test($e))) break;
                            Se = $e
                        }
                }

                function _e() {
                    var we = U.val(),
                        he = U.caret();
                    if (re && re.length && re.length > we.length) {
                        for (je(!0); he.begin > 0 && !D[he.begin - 1];) he.begin--;
                        if (he.begin === 0)
                            for (; he.begin < Y && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    } else {
                        for (je(!0); he.begin < K && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    }
                    P()
                }

                function Oe() {
                    je(), U.val() != be && U.change()
                }

                function Pe(we) {
                    if (!U.prop("readonly")) {
                        var he, Se, Te, $e = we.which || we.keyCode;
                        re = U.val(), $e === 8 || $e === 46 || i && $e === 127 ? (he = U.caret(), Se = he.begin, Te = he.end, Te - Se === 0 && (Se = $e !== 46 ? se(Se) : Te = le(Se - 1), Te = $e === 46 ? le(Te) : Te), Be(Se, Te), ye(Se, Te - 1), we.preventDefault()) : $e === 13 ? Oe.call(this, we) : $e === 27 && (U.val(be), U.caret(0, je()), we.preventDefault())
                    }
                }

                function lt(we) {
                    if (!U.prop("readonly")) {
                        var he, Se, Te, $e = we.which || we.keyCode,
                            Ke = U.caret();
                        if (!(we.ctrlKey || we.altKey || we.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Be(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), he = le(Ke.begin - 1), K > he && (Se = String.fromCharCode($e), D[he].test(Se))) {
                                if (d(he), oe[he] = Se, J(), Te = le(he), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, U, Te)()
                                    };
                                    setTimeout(dt, 0)
                                } else U.caret(Te);
                                Ke.begin <= ie && P()
                            }
                            we.preventDefault()
                        }
                    }
                }

                function Be(we, he) {
                    var Se;
                    for (Se = we; he > Se && K > Se; Se++) D[Se] && (oe[Se] = q(Se))
                }

                function J() {
                    U.val(oe.join(""))
                }

                function je(we) {
                    var he, Se, Te, $e = U.val(),
                        Ke = -1;
                    for (he = 0, Te = 0; K > he; he++)
                        if (D[he]) {
                            for (oe[he] = q(he); Te++ < $e.length;)
                                if (Se = $e.charAt(Te - 1), D[he].test(Se)) {
                                    oe[he] = Se, Ke = he;
                                    break
                                } if (Te > $e.length) {
                                Be(he + 1, K);
                                break
                            }
                        } else oe[he] === $e.charAt(Te) && Te++, V > he && (Ke = he);
                    return we ? J() : V > Ke + 1 ? b.autoclear || oe.join("") === Ae ? (U.val() && U.val(""), Be(0, K)) : J() : (J(), U.val(U.val().substring(0, Ke + 1))), V ? he : Y
                }
                var U = t(this),
                    oe = t.map(v.split(""), function(we, he) {
                        return we != "?" ? A[we] ? q(he) : we : void 0
                    }),
                    Ae = oe.join(""),
                    be = U.val();
                U.data(t.mask.dataName, function() {
                    return t.map(oe, function(we, he) {
                        return D[he] && we != q(he) ? we : null
                    }).join("")
                }), U.one("unmask", function() {
                    U.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!U.prop("readonly")) {
                        clearTimeout(e);
                        var we;
                        be = U.val(), we = je(), e = setTimeout(function() {
                            U.get(0) === document.activeElement && (J(), we == v.replace("?", "").length ? U.caret(0, we) : U.caret(we))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    U.prop("readonly") || setTimeout(function() {
                        var we = je(!0);
                        U.caret(we), P()
                    }, 0)
                }), o && f && U.off("input.mask").on("input.mask", _e), je()
            })
        }
    })
});
window.$ = ae;
window.jQuery = ae;
const $x = Et.View.extend({
        className: "app-root",
        template: at.template(Bx),
        regions: {
            content: "#content-region",
            dialog: "#dialog-region",
            debug: "#debug-region"
        },
        showView(t, e = {}) {
            const n = new t(e);
            this.showChildView("content", n)
        }
    }),
    Fx = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Ri.WSClient(n), e.connect()),
            mount: n => {
                const i = new Vx(e, n);
                let o = new Et.Application({
                    region: "#app",
                    onStart() {
                        const f = new $x;
                        this.showView(f), f.showView(t.MainView, {
                            appId: n.room.appId,
                            appTag: n.room.appTag,
                            replayer: n.replayer,
                            client: i
                        })
                    }
                });
                return o.start(), () => {
                    o.destroy(), o = null
                }
            },
            info: n => ({
                branch: n.branch,
                tag: n.app,
                type: n.type,
                version: n.version,
                wrapper: "marionette"
            })
        })
    },
    jx = function(t, e, n) {
        this.element = t, this.isEnabled = !0, this.percentage = 50, this.widthMargin = e, this.heightDiffArray = n, this.elementAspectRatio = 1;
        const i = () => {
            let b = 0;
            n.forEach(V => {
                ae(V).each(function() {
                    b += ae(this).outerHeight(!0)
                })
            });
            let k = window.innerWidth - this.widthMargin,
                A = window.innerHeight - b;
            A < 100 && (A = 100, k = A * (window.innerWidth / window.innerHeight));
            const D = k / A;
            this.elementAspectRatio < D ? (ae(this.element)[0].style.width = `${A/this.elementAspectRatio}px`, ae(this.element)[0].style.height = `${A}px`) : (ae(this.element)[0].style.width = `${k}px`, ae(this.element)[0].style.height = `${k/this.elementAspectRatio}px`), window.scrollTo(0, 0)
        };
        window.onresize = i;
        const o = b => {
                if (b.type === "touchmove") b.preventDefault();
                else if (b.type === "touchend") {
                    this[b.type]();
                    return
                }
                const k = ae(this.element)[0].getBoundingClientRect(),
                    A = {
                        x: b.targetTouches[0].pageX - k.left,
                        y: b.targetTouches[0].pageY - k.top
                    };
                this[b.type](A)
            },
            f = b => {
                if (b.type === "mousemove") b.preventDefault();
                else if (b.type === "mouseup") {
                    this[b.type]();
                    return
                }
                const k = ae(this.element)[0].getBoundingClientRect(),
                    A = {
                        x: b.clientX - k.left,
                        y: b.clientY - k.top
                    };
                this[b.type](A)
            },
            v = {
                left: 37,
                up: 38,
                right: 39,
                down: 40,
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36
            };
        this.handleKeyDown = function(b) {
            let k = !1;
            switch (b.keyCode) {
                case v.left:
                case v.down:
                    this.setPercentage(this.percentage - 1), k = !0;
                    break;
                case v.right:
                case v.up:
                    this.setPercentage(this.percentage + 1), k = !0;
                    break;
                case v.pageDown:
                    this.setPercentage(this.percentage - 10), k = !0;
                    break;
                case v.pageUp:
                    this.setPercentage(this.percentage + 10), k = !0;
                    break;
                case v.home:
                    this.setPercentage(0), k = !0;
                    break;
                case v.end:
                    this.setPercentage(100), k = !0;
                    break
            }
            k && (b.preventDefault(), b.stopPropagation())
        }, document.addEventListener("touchend", o), this.element.on("touchstart", o), this.element.on("touchmove", o), this.element.on("mousedown", f), this.element.on("mousemove", f), document.addEventListener("mouseup", f), this.element.on("keydown", this.handleKeyDown.bind(this)), this.getPercentage = function() {
            return this.percentage
        }, this.setPercentage = function(b) {
            b > 100 && (b = 100), b < 0 && (b = 0), this.percentage = b, this.element.attr("aria-valuenow", this.percentage), this.redrawSvg()
        }, this.redrawSvg = function() {
            this.element.find("circle.percent-display").css("stroke-dasharray", `${this.percentage*1.005} 100`);
            const b = this.percentage / 100 * (2 * Math.PI) - Math.PI / 2,
                k = {
                    x: Math.cos(b) * (32 + 3),
                    y: Math.sin(b) * (32 + 3)
                },
                A = this.element.find("circle.helper");
            A.attr("cx", k.x), A.attr("cy", k.y);
            const D = this.element.find("line.helper");
            D.attr("x2", k.x), D.attr("y2", k.y);
            const V = this.element.find("text.percent")[0];
            ae(V).html(this.percentage);
            let Y;
            try {
                Y = this.element.getElementById("percent").getBBox().width
            } catch {
                Y = 28.6
            }
            Y || (Y = 28.6), this.element.find("text.percent-sign").attr("x", Y / 2)
        }, this.start = function(b) {
            !this.isEnabled || (this.isTouching = !0, this.setPoint(b, !1))
        }, this.move = function(b) {
            this.isTouching && this.setPoint(b, !0)
        }, this.end = function() {
            this.isTouching && (this.isTouching = !1, this.element.focus())
        }, this.setPoint = function(b, k) {
            const A = {
                x: b.x - parseInt(this.element.width(), 10) / 2,
                y: b.y - parseInt(this.element.height(), 10) / 2
            };
            let D = Math.atan(A.y / A.x);
            A.x < 0 && (D += Math.PI);
            let V = Math.floor((D + Math.PI / 2) / (2 * Math.PI) * 100);
            k && (V < 5 && this.percentage > 95 ? V = 100 : this.percentage < 5 && V > 95 && (V = 0)), this.setPercentage(V), this.redrawSvg()
        }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, i(), this.resize = i
    },
    zx = `<div id="page-pollposition" class="page white pollposition">
    <div id="player" class="pollposition-player">
        <div style="display:inline-block;vertical-align:middle">
            <div id="pollposition-character" style="width:40px; height:40px;display:none;"></div>
        </div>
        <span style="vertical-align:middle;" class="pollposition-text-it"><%=username%></span>
    </div>

    <div id="pollposition-preload" class="pollposition-preload"></div>

    <div id="game" class="game pt-pageholder pollposition-background">
		<div class="pt-page-off state-lobby pollposition-page">
			<div class="container">
				<p id="pollposition-lobby-text" class='pollposition-text'></p>
				<form class="pure-form">
					<button type="button" id="pollposition-startgame" class="pollposition-button button-xlarge pure-button pure-input-1"><span>everybody's in</span></button>
					<button type="button" id="pollposition-stopcountdown" class="pollposition-button button-xlarge pure-button pure-input-1"><span>cancel</span></button>
				</form>
			</div>
		</div>

		<div class="pt-page-off state-post-lobby pollposition-page">
			<div class="container">
				<p id="pollposition-post-lobby-text" class='pollposition-text'></p>
				<form class="pure-form">
					<button type="button" id="pollposition-sameplayers" class="pollposition-button button-xlarge pure-button pure-input-1 pollposition-endbuttons"><span>same players</span></button>
					<button type="button" id="pollposition-newplayers" class="pollposition-button button-xlarge pure-button pure-input-1 pollposition-endbuttons"><span>new players</span></button>
				</form>
				<div align="center" id="pollposition-game-results" class="pollposition-results-padded"></div>
			</div>
		</div>

		<div class="pt-page-off state-nothing pollposition-page">
        </div>

        <div class="pt-page-off state-round pollposition-page">
            <div class="container">
                <div class="round-main"><p class='pollposition-text round-text'></p></div>
            </div>
        </div>

        <div class="pt-page-off state-upordown-sent pollposition-page">
            <div class="container">
                <p id="pollposition-upordown-received" class='pollposition-text'></p>
                <p class='pollposition-text'>thanks for your selection</p>
            </div>
        </div>

        <div class="pt-page-off state-choosecategory pollposition-page">
            <div class="container">
                <p id="choosecategory-text" class='pollposition-text'></p>

                <form id="pollposition-choosecategory" style="width:100%;">
                </form>
            </div>
        </div>

        <div class="pt-page-off state-waitforcategory pollposition-page">
            <div class="container">
                <p id="waitforcategory-text" class='pollposition-text'></p>
            </div>
        </div>

        <div class="pt-page-off state-showquestion pollposition-page">
            <div class="container">
                <p class="pollposition-text survey-text"></p>
                <p class="pollposition-text question-text"></p>
            </div>
        </div>

        <div class="pt-page-off state-waitforallpercentages pollposition-page">
            <div class="container">
                <p class='pollposition-text'>Thanks for your input.<br />Waiting for other players.</p>
            </div>
        </div>

        <div class="pt-page-off state-waitforaudience pollposition-page">
            <div class="container">
                <p class='pollposition-text'>Thanks for your input.<br />Waiting for the audience.</p>
            </div>
        </div>

        <div class="pt-page-off state-waitforpercentage pollposition-page">
            <div class="container">

                <p class="pollposition-text survey-text"></p>
                <p class="pollposition-text question-text"></p>
                <p id="waitingforpercentage-text" class='pollposition-text'></p>
            </div>
        </div>

        <div class="pt-page-off state-enterpercentage pollposition-page noselect">
            <div class="container">
                <div class="pollposition-text question-text pollposition-range-buffer"></div>
                <div id="pollposition-submit-alert" class="alert alert-info pollposition-range-buffer">Alert message goes here</div>
                <svg id="pollposition-percentage-picker" 
                    role="slider"
                    tabindex="0"
                    aria-valuemax="100"
                    aria-valuemin="0"
                    aria-valuenow="50"
                    aria-label="Percent"
                    class="pollposition-percentage-picker"
                    viewBox="-38 -38 76 76">
                    <circle class="background" r="16" cx="0" cy="0" />
                    <circle id="percent-display" class="percent-display" r="16" cx="0" cy="0" />
                    <circle class="helper" r=1.5 cx=-32 cy=0 />
                    <line class="helper" x1="0" y1="0" x2="-32" y2="0" ></line>
                    <circle class="center" r=1 cx=0 cy=0 />
                    <text id="percent" class="percent" x=-2 y=10 text-anchor="middle" font-size=30></text>
                    <text id="percent-sign" class="percent-sign" x=14 y=-2 font-size=12>%</text>
                </svg>
                <div class="pollposition-range-buffer"> 
                    <form class="pure-form" id="pollposition-enterpercentage-field"> 
                        <div class=""> 
                            <button type="submit" id="pollposition-submitpercentage" class="pollposition-button"><span>Submit</span></button> 
                            <div id="pollposition-submitpercentage-loading" class="button-pollposition-loading right" style="display:none; width: 110px; height: 48px; margin-top:10px;" ></div> 
                        </div> 
                    </form> 
                </div> 
            </div>
        </div>

        <div class="pt-page-off state-chooseupordown pollposition-page">
            <div class="container">
                <p class="pollposition-text survey-text"></p>
                <p class="pollposition-text question-text"></p>
                <p id="chooseupordown-text" class='pollposition-text pollposition-text-medium'></p>

                <form id="pollposition-chooseupordown" style="width:100%;" class="pollposition-hangingform">
                </form>
            </div>
        </div>

        <div class="pt-page-off state-waitforupordown pollposition-page">
            <div class="container">
                <p class='pollposition-text'>Thanks for your input.<br />Waiting for other players.</p>
            </div>
        </div>

        <div class="pt-page-off state-upordowndone pollposition-page">
            <div class="container">
                <p class='pollposition-text'>done!</p>
            </div>
        </div>

        <div class="pt-page-off state-choosemultiple pollposition-page">
            <div class="container">
                <p class="pollposition-text question-text"></p>
                <p class="pollposition-text selection-text"></p>
                <form id="pollposition-choosemultiple" style="width:100%; display:block;" class="pollposition-hangingform">
                </form>
            </div>
        </div>

        <div class="pt-page-off state-waitformultiple pollposition-page">
            <div class="container">
                <p class='pollposition-text'>Thanks for your input.<br />Waiting for other players.</p>
            </div>
        </div>

        <!-- Audience screens -->
        <div class="pt-page-off state-audience-wait pollposition-page">
            <div class="container">
                <p class="pollposition-text audience-wait-text"></p>
                <p class="pollposition-text-medium audience-usage-text"></p>
            </div>
        </div>

        <div class="pt-page-off state-audience-choice-sent pollposition-page">
            <div class="container">
                <p id="pollposition-audience-choice-received" class='pollposition-text'></p>
                <p class='pollposition-text'>thanks for your selection</p>
            </div>
        </div>

        <div class="pt-page-off state-audience-chose-option pollposition-page">
            <div class="container">
                <p class="pollposition-text category-text"></p>
                <p class="pollposition-text pollquestion-text"></p>
                <form id="pollposition-audiencechooseoption" style="width:100%; display:block;" class="pollposition-hangingform">
                </form>
            </div>
        </div>

        <div class="pt-page-off state-choosecharacter pollposition-page">
            <div class="container" align="center">
                <p id="pollposition-characterlobby-text" class='pollposition-text'></p>
                <form class="pure-form">
                    <button type="button" id="pollposition-character-startgame" class="pollposition-button button-xlarge pure-button pure-input-1"><span>everybody's in</span></button>
                    <button type="button" id="pollposition-character-stopcountdown" class="pollposition-button button-xlarge pure-button pure-input-1"><span>cancel</span></button>
                </form>
                <p id="pollposition-choosecharacter-text" class='pollposition-text'></p>
                <form id="pollposition-choosecharacter" class="pollposition-character-list" style="max-width:300px;" class="pure-form">
                </form>
            </div>
        </div>

    </div>
</div>
`;
const Gx = lc.extend({
    template: at.template(zx),
    percentageInterval: null,
    lastPercentage: -1,
    currentPercentage: 0,
    percentageDelayTime: 1e3,
    percentageSent: !1,
    events: {
        "click #pollposition-startgame": "startGame",
        "click #pollposition-stopcountdown": "stopCountdown",
        "click #pollposition-character-startgame": "startGame",
        "click #pollposition-character-stopcountdown": "stopCountdown",
        "click #pollposition-lockroom": "lockRoom",
        "click .pollposition-category-button": "submitCategory",
        "click #pollposition-sameplayers": "newGameSamePlayers",
        "click #pollposition-newplayers": "newGameNewPlayers",
        "click .pollposition-character-button": "submitCharacter",
        "click .pollposition-choice-button": "submitChoice",
        "click #pollposition-submitpercentage": "submitPercentage",
        "input #pollposition-percentage": "updatePercentage",
        "change #pollposition-percentage": "updatePercentage",
        "click #pollposition-percentage-decrease": "decreasePercentage",
        "click #pollposition-percentage-increase": "increasePercentage"
    },
    initialize(t) {
        lc.prototype.initialize.apply(this, [t]), this.currentRange = void 0
    },
    async update() {
        this.client.isRole("audience") ? this.updateAudience() : this.model.get("player") && this.updatePlayer(), this.onResize()
    },
    updatePlayer() {
        const t = this.model.get("player") || {},
            e = this.model.get("room") || {},
            n = t ? t.state : "",
            i = e ? e.state : "";
        let o;
        if (this.percentageInterval && (clearInterval(this.percentageInterval), this.percentageInterval = null), t !== void 0 && t.character !== void 0 && ae("#pollposition-character").attr("class", `pollposition-character ${t.character.name}`).show(), n === "RoomFull") {
            kt.show(Error("The room is full"), {
                willClose: () => {
                    window.location.reload(!0)
                }
            }), this.onResize();
            return
        }
        if (n === "GameLocked") {
            kt.show(Error("Game is in progress. Please wait for a new game to start."), {
                willClose: () => {
                    window.location.reload(!0)
                }
            }), this.onResize();
            return
        }
        if (i && i === "Lobby") {
            this.hideLobbyButtons();
            const f = e.lobbyState;
            if (n === "Lobby_ChooseCharacter") {
                this.hideCharacterLobbyButtons(), ae("#pollposition-choosecharacter-text").html("Select your agent");
                let v = "";
                for (o = 0; o < e.characters.length; o++) {
                    const b = e.characters[o].name,
                        k = e.characters[o].id,
                        A = t.character !== void 0 && e.characters[o].id === t.character.id ? " player " : "",
                        D = !A && e.characters[o].isSelected != null ? " selected " : "";
                    v += `<button type='button' ${e.characters[o].isSelected!=null?" disabled ":""} data-character='${k}' aria-label='${b}' class='pollposition-character-button pollposition-character ${b} ${A} ${D}' style='width:64px;height:64px;'></button>`
                }
                ae("#pollposition-choosecharacter").html(v), this.showScreen(".state-choosecharacter"), t.isAllowedToStartGame && (f === "CanStart" ? (ae("#pollposition-characterlobby-text").html("press this button when everybody has joined"), ae("#pollposition-character-startgame").show()) : f === "Countdown" && (ae("#pollposition-characterlobby-text").html("press this button to cancel game start"), ae("#pollposition-character-stopcountdown").show())), this.onResize();
                return
            }
            if (f === "PostGame") {
                t.isAllowedToStartGame ? (ae("#pollposition-post-lobby-text").html("what do you want to do?"), ae(".pollposition-endbuttons").show()) : ae("#pollposition-post-lobby-text").html("Sit back and relax!");
                let v = '<table class="table table-striped table-bordered"><thead><tr><th>Rank</th><th>Player</th><th>Score</th></tr></thead><tbody>';
                for (o = 0; o < e.gameResults.players.length; o++) v += `<tr><td>${e.gameResults.players[o].rank.toString()}</td><td><div style='display:inline-block;vertical-align:middle'><div class='pollposition-character ${e.gameResults.players[o].icon}' style='width:32px; height:32px' /></div><span>${e.gameResults.players[o].name}</span></td><td>${e.gameResults.players[o].score}</td></tr>`;
                v += "</tbody></table>", ae("#pollposition-game-results").html(v), this.showScreen(".state-post-lobby");
                return
            }
            if (!t.isAllowedToStartGame) {
                ae("#pollposition-lobby-text").html("Sit back and relax!"), this.showScreen(".state-lobby");
                return
            }
            f === "WaitingForMore" ? ae("#pollposition-lobby-text").html("waiting for all players to join") : f === "CanStart" ? (ae("#pollposition-lobby-text").html("press this button when everybody has joined"), ae("#pollposition-startgame").show()) : f === "Countdown" && (ae("#pollposition-lobby-text").html("press this button to cancel game start"), ae("#pollposition-stopcountdown").show()), this.showScreen(".state-lobby")
        } else if (i === "Gameplay_Logo") this.showLogo();
        else if (i === "Gameplay_PickCategory") {
            if (n === "Gameplay_WaitForCategory") ae("#waitforcategory-text").html(`Waiting for ${e.player} to pick a category.`), this.showScreen(".state-waitforcategory");
            else if (n === "Gameplay_PickCategory") {
                ae("#choosecategory-text").html("Pick a category");
                let f = "";
                for (o = 0; o < t.choices.length; o++) f += `<button type='button' data-category='${t.choices[o].id.toString()}' class='pure-input-1 pollposition-category-button pure-button button-large'>${t.choices[o].text}</button>`, f += "<br>";
                ae("#pollposition-choosecategory").html(f), this.showScreen(".state-choosecategory")
            }
        } else if (i === "Gameplay_ShowQuestion") ae(".state-showquestion .question-text").html(e.question), this.showScreen(".state-showquestion");
        else if (i === "Gameplay_EnterPercentage") n === "Gameplay_EnterPercentage" ? (this.currentRange || this.startRangeInterface(), this.activeScreen !== ".state-enterpercentage" && (ae(".state-enterpercentage .question-text").html(e.question), this.setDefaultPercentage(50), ae("#pollposition-enterpercentage-field").show(), ae("#pollposition-submitpercentage").show(), ae("#pollposition-submit-alert").hide(), this.lastPercentage = -1, this.percentageSent = !1), this.enableLoadingButton("#pollposition-submitpercentage", !0), this.percentageInterval = setInterval(() => {
            !this.percentageSent && this.lastPercentage !== this.currentRange.getPercentage() && (this.lastPercentage = this.currentRange.getPercentage(), this.sendPercentageUpdate(this.currentRange.getPercentage()))
        }, this.percentageDelayTime), this.showScreen(".state-enterpercentage"), this.currentRange.resize()) : n === "Gameplay_WaitForPercentage" ? (this.activeScreen !== ".state-waitforpercentage" && (ae(".state-waitforpercentage .question-text").html(e.question), ae("#waitingforpercentage-text").html(`Waiting for ${e.player} to enter a percentage.`)), this.showScreen(".state-waitforpercentage")) : n === "Gameplay_WaitForAllPercentages" ? this.showScreen(".state-waitforallpercentages") : n === "Gameplay_WaitForAudience" ? this.showScreen(".state-waitforaudience") : this.showLogo();
        else if (i === "Gameplay_UpOrDownDone") this.showScreen(".state-upordowndone");
        else if (i === "Gameplay_ChooseUpOrDown")
            if (n === "Gameplay_WaitForChooseUpOrDown") this.showScreen(".state-waitforupordown");
            else {
                ae(".state-chooseupordown .survey-text").html(e.survey), ae(".question-text").html(e.question), ae("#chooseupordown-text").html("Do you think the correct answer is:");
                let f = "";
                for (o = 0; o < e.choices.length; o++) f += `<button type='button' data-choice='${e.choices[o].id.toString()}' class='pollposition-button pollposition-high-low-button pollposition-choice-button'><span>${e.choices[o].id.toString().replace("_"," ")}</span></button>`;
                ae("#pollposition-chooseupordown").html(f), this.showScreen(".state-chooseupordown")
            }
        else if (i === "Gameplay_ChooseMultiple")
            if (n === "Gameplay_WaitForChooseMultiple") this.showScreen(".state-waitformultiple");
            else {
                if (ae(".state-choosemultiple .question-text").html(e.question), n === "Gameplay_ChooseMultiple") {
                    let f = "";
                    for (o = 0; o < t.choices.length; o++) t.choices[o].picked ? f += `<button type='button' data-choice='-1' class='pollposition-button pollposition-choice-button' disabled><span>${t.choices[o].text}</span></button>` : f += `<button type='button' data-choice='${o}' class='pollposition-button pollposition-choice-button'><span>${t.choices[o].text}</span></button>`;
                    ae(".state-choosemultiple .selection-text").html(t.selection), ae("#pollposition-choosemultiple").html(f)
                } else ae(".state-choosemultiple .selection-text").html(""), ae("#pollposition-choosemultiple").html("");
                this.showScreen(".state-choosemultiple")
            } this.onResize()
    },
    updateAudience() {
        const t = this.model.get("room"),
            e = t ? t.state : "",
            n = t && t.lobbyState ? t.lobbyState : "";
        let i;
        if (e === "Gameplay_EnterPercentage") {
            ae(".state-audience-chose-option .category-text").html(t.survey), ae(".state-audience-chose-option .pollquestion-text").html(t.poll.question);
            let o = "";
            for (i = 0; i < t.poll.choices.length; i++) o += `<button type='button' data-choice='${t.poll.choices[i].id}' class='pollposition-button pollposition-choice-button'><span>${t.poll.choices[i].choice}</span></button>`, o += "<br>";
            o += "<button type='button' data-choice='-1' class='pollposition-button pollposition-choice-button'><span>This doesn't apply to me</span></button>", ae("#pollposition-audiencechooseoption").html(o), this.showScreen(".state-audience-chose-option")
        } else if (!(e === "Gameplay_ChooseUpOrDown" || e === "Gameplay_ShowQuestion"))
            if (e === "Gameplay_ChooseMultiple" && t.poll) {
                t.survey !== void 0 ? ae(".state-audience-chose-option .category-text").html(t.survey) : ae(".state-audience-chose-option .category-text").html(""), ae(".state-audience-chose-option .pollquestion-text").html(t.poll.question);
                let o = "";
                for (i = 0; i < t.poll.choices.length; i++) o += `<button type='button' data-choice='${t.poll.choices[i].id}' class='pollposition-button pollposition-choice-button '><span>${t.poll.choices[i].choice}</span></button>`, o += "<br>";
                ae("#pollposition-audiencechooseoption").html(o), this.showScreen(".state-audience-chose-option")
            } else if (e === "Gameplay_Logo") this.showLogo();
        else if (e === "Lobby" && n === "PostGame") {
            this.hideLobbyButtons(), ae("#pollposition-post-lobby-text").html("You\u2019re in the audience!");
            let o = '<table class="table table-striped table-bordered"><thead><tr><th>Rank</th><th>Player</th><th>Score</th></tr></thead><tbody>';
            for (i = 0; i < t.gameResults.players.length; i++) o += `<tr><td>${t.gameResults.players[i].rank.toString()}</td><td><div style='display:inline-block;vertical-align:middle'><div class='pollposition-character ${t.gameResults.players[i].icon}' style='width:32px; height:32px' /></div><span>${t.gameResults.players[i].name}</span></td><td>${t.gameResults.players[i].score}</td></tr>`;
            o += "</tbody></table>", ae("#pollposition-game-results").html(o), this.showScreen(".state-post-lobby")
        } else ae(".state-audience-wait .audience-wait-text").html("You\u2019re in the audience! Wait for your time to answer."), ae(".state-audience-wait .audience-usage-text").html("Audience answers are used when 5 or more audience members answer the question."), this.showScreen(".state-audience-wait")
    },
    hideLobbyButtons() {
        ae("#pollposition-startgame").hide(), ae("#pollposition-stopcountdown").hide(), ae(".pollposition-endbuttons").hide()
    },
    hideCharacterLobbyButtons() {
        ae("#pollposition-character-startgame").hide(), ae("#pollposition-character-stopcountdown").hide()
    },
    startGame() {
        return this.client.send("SendMessageToRoomOwner", {
            startGame: !0
        }), !1
    },
    stopCountdown() {
        return this.client.send("SendMessageToRoomOwner", {
            cancelStartGame: !0
        }), !1
    },
    enableLoadingButton(t, e) {
        e ? (ae(t).show(), ae(`${t}-loading`).hide()) : (ae(t).hide(), ae(`${t}-loading`).show())
    },
    startRangeInterface() {
        if (this.enableLoadingButton("#pollposition-submitpercentage", !0), this.currentRange) return;
        const t = ["#player", ".pollposition-range-buffer"],
            e = this.$("#pollposition-percentage-picker");
        this.currentRange = new jx(e, 10, t), this.currentRange.setPercentage(50)
    },
    sendPercentageUpdate(t) {
        return this.isInt(t) && this.client.send("SendMessageToRoomOwner", {
            percentageUpdate: t
        }), !1
    },
    setDefaultPercentage(t) {
        this.currentRange.setPercentage(t), this.updatePercentage()
    },
    updatePercentage() {
        this.currentPercentage = this.currentRange.getPercentage()
    },
    decreasePercentage() {
        return this.setDefaultPercentage(parseInt(this.currentRange.getPercentage(), 10) - 1), !1
    },
    increasePercentage() {
        return this.setDefaultPercentage(parseInt(this.currentRange.getPercentage(), 10) + 1), !1
    },
    isInt(t) {
        return !Number.isNaN(t) && function(n) {
            return (n | 0) === n
        }(parseFloat(t))
    },
    submitCharacter(t) {
        const e = ae(t.currentTarget).data("character");
        return e !== -1 && this.client.send("SendMessageToRoomOwner", {
            character: e
        }), ae(t.currentTarget).blur(), !1
    },
    submitPercentage() {
        const t = this.currentRange.getPercentage();
        if (!this.isInt(t)) {
            const n = ae("#pollposition-submit-alert");
            return ae("#pollposition-submit-alert").html("you can't enter nothing!"), n.removeClass("alert-info"), n.addClass("alert-danger"), n.show(), !1
        }
        this.percentageInterval != null && (clearInterval(this.percentageInterval), this.percentageInterval = null), this.percentageSent = !0, this.enableLoadingButton("#pollposition-submitpercentage", !1);
        const e = {
            percentageEntered: t
        };
        return this.client.send("SendMessageToRoomOwner", e), !1
    },
    submitChoice(t) {
        const e = ae(t.currentTarget).data("choice");
        return ae(".pollposition-choice-button").attr("disabled", !0), this.client.isRole("player") ? this.client.send("SendMessageToRoomOwner", {
            choice: e
        }) : this.client.isRole("audience") && (e !== -1 && this.client.sessionSend("vote", "Poll Position Vote", {
            type: "vote",
            vote: e
        }), ae("#pollposition-audiencechooseoption").html(""), ae(".state-audience-wait .audience-wait-text").html("Thanks, audience member!"), ae(".state-audience-wait .audience-usage-text").html("Audience answers are used when 5 or more audience members answer the question."), this.showScreen(".state-audience-wait")), !1
    },
    submitCategory(t) {
        const e = ae(t.currentTarget).data("category");
        return this.client.isRole("player") && this.client.send("SendMessageToRoomOwner", {
            category: e
        }), !1
    },
    newGameSamePlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            startGame: !0,
            decision: "PostGame_Continue"
        }), !1
    },
    newGameNewPlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            startGame: !0,
            decision: "PostGame_NewGame"
        }), !1
    },
    showLogo() {
        this.showScreen(".state-nothing")
    },
    sanitize(t) {
        return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,]/gi, "").replace(/'/g, "\u2019").trim()
    }
});
Fx({
    MainView: Gx
});
//# sourceMappingURL=f4b8a270.js.map