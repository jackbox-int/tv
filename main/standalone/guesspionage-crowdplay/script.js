var yh = Object.defineProperty;
var wh = (t, e, n) => e in t ? yh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var ot = (t, e, n) => (wh(t, typeof e != "symbol" ? e + "" : e, n), n);
const bh = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const f of a)
            if (f.type === "childList")
                for (const m of f.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && i(m)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(a) {
        const f = {};
        return a.integrity && (f.integrity = a.integrity), a.referrerpolicy && (f.referrerPolicy = a.referrerpolicy), a.crossorigin === "use-credentials" ? f.credentials = "include" : a.crossorigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin", f
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const f = n(a);
        fetch(a.href, f)
    }
};
bh();
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Ch(t) {
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
        var a = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(n, i, a.get ? a : {
            enumerable: !0,
            get: function() {
                return t[i]
            }
        })
    }), n
}
var Ni = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            a = Array.prototype,
            f = Object.prototype,
            m = Function.prototype,
            b = a.push,
            k = a.slice,
            A = f.toString,
            M = f.hasOwnProperty,
            V = Array.isArray,
            U = Object.keys,
            ne = m.bind,
            K = Object.create,
            re = function() {},
            v = function(l) {
                if (l instanceof v) return l;
                if (!(this instanceof v)) return new v(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = v), e._ = v, v.VERSION = "1.8.3";
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
            W = function(l, g, S) {
                return l == null ? v.identity : v.isFunction(l) ? P(l, g, S) : v.isObject(l) ? v.matcher(l) : v.property(l)
            };
        v.iteratee = function(l, g) {
            return W(l, g, 1 / 0)
        };
        var ae = function(l, g) {
                return function(S) {
                    var R = arguments.length;
                    if (R < 2 || S == null) return S;
                    for (var L = 1; L < R; L++)
                        for (var B = arguments[L], te = l(B), Se = te.length, he = 0; he < Se; he++) {
                            var Me = te[he];
                            (!g || S[Me] === void 0) && (S[Me] = B[Me])
                        }
                    return S
                }
            },
            se = function(l) {
                if (!v.isObject(l)) return {};
                if (K) return K(l);
                re.prototype = l;
                var g = new re;
                return re.prototype = null, g
            },
            ve = function(l) {
                return function(g) {
                    return g == null ? void 0 : g[l]
                }
            },
            d = Math.pow(2, 53) - 1,
            Ee = ve("length"),
            Ae = function(l) {
                var g = Ee(l);
                return typeof g == "number" && g >= 0 && g <= d
            };
        v.each = v.forEach = function(l, g, S) {
            g = P(g, S);
            var R, L;
            if (Ae(l))
                for (R = 0, L = l.length; R < L; R++) g(l[R], R, l);
            else {
                var B = v.keys(l);
                for (R = 0, L = B.length; R < L; R++) g(l[B[R]], B[R], l)
            }
            return l
        }, v.map = v.collect = function(l, g, S) {
            g = W(g, S);
            for (var R = !Ae(l) && v.keys(l), L = (R || l).length, B = Array(L), te = 0; te < L; te++) {
                var Se = R ? R[te] : te;
                B[te] = g(l[Se], Se, l)
            }
            return B
        };

        function Pe(l) {
            function g(S, R, L, B, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var he = B ? B[te] : te;
                    L = R(L, S[he], he, S)
                }
                return L
            }
            return function(S, R, L, B) {
                R = P(R, B, 4);
                var te = !Ae(S) && v.keys(S),
                    Se = (te || S).length,
                    he = l > 0 ? 0 : Se - 1;
                return arguments.length < 3 && (L = S[te ? te[he] : he], he += l), g(S, R, L, te, he, Se)
            }
        }
        v.reduce = v.foldl = v.inject = Pe(1), v.reduceRight = v.foldr = Pe(-1), v.find = v.detect = function(l, g, S) {
            var R;
            if (Ae(l) ? R = v.findIndex(l, g, S) : R = v.findKey(l, g, S), R !== void 0 && R !== -1) return l[R]
        }, v.filter = v.select = function(l, g, S) {
            var R = [];
            return g = W(g, S), v.each(l, function(L, B, te) {
                g(L, B, te) && R.push(L)
            }), R
        }, v.reject = function(l, g, S) {
            return v.filter(l, v.negate(W(g)), S)
        }, v.every = v.all = function(l, g, S) {
            g = W(g, S);
            for (var R = !Ae(l) && v.keys(l), L = (R || l).length, B = 0; B < L; B++) {
                var te = R ? R[B] : B;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, g, S) {
            g = W(g, S);
            for (var R = !Ae(l) && v.keys(l), L = (R || l).length, B = 0; B < L; B++) {
                var te = R ? R[B] : B;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, g, S, R) {
            return Ae(l) || (l = v.values(l)), (typeof S != "number" || R) && (S = 0), v.indexOf(l, g, S) >= 0
        }, v.invoke = function(l, g) {
            var S = k.call(arguments, 2),
                R = v.isFunction(g);
            return v.map(l, function(L) {
                var B = R ? g : L[g];
                return B == null ? B : B.apply(L, S)
            })
        }, v.pluck = function(l, g) {
            return v.map(l, v.property(g))
        }, v.where = function(l, g) {
            return v.filter(l, v.matcher(g))
        }, v.findWhere = function(l, g) {
            return v.find(l, v.matcher(g))
        }, v.max = function(l, g, S) {
            var R = -1 / 0,
                L = -1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : v.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) B = l[Se], B > R && (R = B)
            } else g = W(g, S), v.each(l, function(Me, De, it) {
                te = g(Me, De, it), (te > L || te === -1 / 0 && R === -1 / 0) && (R = Me, L = te)
            });
            return R
        }, v.min = function(l, g, S) {
            var R = 1 / 0,
                L = 1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : v.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) B = l[Se], B < R && (R = B)
            } else g = W(g, S), v.each(l, function(Me, De, it) {
                te = g(Me, De, it), (te < L || te === 1 / 0 && R === 1 / 0) && (R = Me, L = te)
            });
            return R
        }, v.shuffle = function(l) {
            for (var g = Ae(l) ? l : v.values(l), S = g.length, R = Array(S), L = 0, B; L < S; L++) B = v.random(0, L), B !== L && (R[L] = R[B]), R[B] = g[L];
            return R
        }, v.sample = function(l, g, S) {
            return g == null || S ? (Ae(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, g))
        }, v.sortBy = function(l, g, S) {
            return g = W(g, S), v.pluck(v.map(l, function(R, L, B) {
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
                return S = W(S, R), v.each(g, function(B, te) {
                    var Se = S(B, te, g);
                    l(L, B, Se)
                }), L
            }
        };
        v.groupBy = lt(function(l, g, S) {
            v.has(l, S) ? l[S].push(g) : l[S] = [g]
        }), v.indexBy = lt(function(l, g, S) {
            l[S] = g
        }), v.countBy = lt(function(l, g, S) {
            v.has(l, S) ? l[S]++ : l[S] = 1
        }), v.toArray = function(l) {
            return l ? v.isArray(l) ? k.call(l) : Ae(l) ? v.map(l, v.identity) : v.values(l) : []
        }, v.size = function(l) {
            return l == null ? 0 : Ae(l) ? l.length : v.keys(l).length
        }, v.partition = function(l, g, S) {
            g = W(g, S);
            var R = [],
                L = [];
            return v.each(l, function(B, te, Se) {
                (g(B, te, Se) ? R : L).push(B)
            }), [R, L]
        }, v.first = v.head = v.take = function(l, g, S) {
            if (l != null) return g == null || S ? l[0] : v.initial(l, l.length - g)
        }, v.initial = function(l, g, S) {
            return k.call(l, 0, Math.max(0, l.length - (g == null || S ? 1 : g)))
        }, v.last = function(l, g, S) {
            if (l != null) return g == null || S ? l[l.length - 1] : v.rest(l, Math.max(0, l.length - g))
        }, v.rest = v.tail = v.drop = function(l, g, S) {
            return k.call(l, g == null || S ? 1 : g)
        }, v.compact = function(l) {
            return v.filter(l, v.identity)
        };
        var Be = function(l, g, S, R) {
            for (var L = [], B = 0, te = R || 0, Se = Ee(l); te < Se; te++) {
                var he = l[te];
                if (Ae(he) && (v.isArray(he) || v.isArguments(he))) {
                    g || (he = Be(he, g, S));
                    var Me = 0,
                        De = he.length;
                    for (L.length += De; Me < De;) L[B++] = he[Me++]
                } else S || (L[B++] = he)
            }
            return L
        };
        v.flatten = function(l, g) {
            return Be(l, g, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, g, S, R) {
            v.isBoolean(g) || (R = S, S = g, g = !1), S != null && (S = W(S, R));
            for (var L = [], B = [], te = 0, Se = Ee(l); te < Se; te++) {
                var he = l[te],
                    Me = S ? S(he, te, l) : he;
                g ? ((!te || B !== Me) && L.push(he), B = Me) : S ? v.contains(B, Me) || (B.push(Me), L.push(he)) : v.contains(L, he) || L.push(he)
            }
            return L
        }, v.union = function() {
            return v.uniq(Be(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var g = [], S = arguments.length, R = 0, L = Ee(l); R < L; R++) {
                var B = l[R];
                if (!v.contains(g, B)) {
                    for (var te = 1; te < S && v.contains(arguments[te], B); te++);
                    te === S && g.push(B)
                }
            }
            return g
        }, v.difference = function(l) {
            var g = Be(arguments, !0, !0, 1);
            return v.filter(l, function(S) {
                return !v.contains(g, S)
            })
        }, v.zip = function() {
            return v.unzip(arguments)
        }, v.unzip = function(l) {
            for (var g = l && v.max(l, Ee).length || 0, S = Array(g), R = 0; R < g; R++) S[R] = v.pluck(l, R);
            return S
        }, v.object = function(l, g) {
            for (var S = {}, R = 0, L = Ee(l); R < L; R++) g ? S[l[R]] = g[R] : S[l[R][0]] = l[R][1];
            return S
        };

        function J(l) {
            return function(g, S, R) {
                S = W(S, R);
                for (var L = Ee(g), B = l > 0 ? 0 : L - 1; B >= 0 && B < L; B += l)
                    if (S(g[B], B, g)) return B;
                return -1
            }
        }
        v.findIndex = J(1), v.findLastIndex = J(-1), v.sortedIndex = function(l, g, S, R) {
            S = W(S, R, 1);
            for (var L = S(g), B = 0, te = Ee(l); B < te;) {
                var Se = Math.floor((B + te) / 2);
                S(l[Se]) < L ? B = Se + 1 : te = Se
            }
            return B
        };

        function je(l, g, S) {
            return function(R, L, B) {
                var te = 0,
                    Se = Ee(R);
                if (typeof B == "number") l > 0 ? te = B >= 0 ? B : Math.max(B + Se, te) : Se = B >= 0 ? Math.min(B + 1, Se) : B + Se + 1;
                else if (S && B && Se) return B = S(R, L), R[B] === L ? B : -1;
                if (L !== L) return B = g(k.call(R, te, Se), v.isNaN), B >= 0 ? B + te : -1;
                for (B = l > 0 ? te : Se - 1; B >= 0 && B < Se; B += l)
                    if (R[B] === L) return B;
                return -1
            }
        }
        v.indexOf = je(1, v.findIndex, v.sortedIndex), v.lastIndexOf = je(-1, v.findLastIndex), v.range = function(l, g, S) {
            g == null && (g = l || 0, l = 0), S = S || 1;
            for (var R = Math.max(Math.ceil((g - l) / S), 0), L = Array(R), B = 0; B < R; B++, l += S) L[B] = l;
            return L
        };
        var H = function(l, g, S, R, L) {
            if (!(R instanceof g)) return l.apply(S, L);
            var B = se(l.prototype),
                te = l.apply(B, L);
            return v.isObject(te) ? te : B
        };
        v.bind = function(l, g) {
            if (ne && l.bind === ne) return ne.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                R = function() {
                    return H(l, R, g, this, S.concat(k.call(arguments)))
                };
            return R
        }, v.partial = function(l) {
            var g = k.call(arguments, 1),
                S = function() {
                    for (var R = 0, L = g.length, B = Array(L), te = 0; te < L; te++) B[te] = g[te] === v ? arguments[R++] : g[te];
                    for (; R < arguments.length;) B.push(arguments[R++]);
                    return H(l, S, this, this, B)
                };
            return S
        }, v.bindAll = function(l) {
            var g, S = arguments.length,
                R;
            if (S <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < S; g++) R = arguments[g], l[R] = v.bind(l[R], l);
            return l
        }, v.memoize = function(l, g) {
            var S = function(R) {
                var L = S.cache,
                    B = "" + (g ? g.apply(this, arguments) : R);
                return v.has(L, B) || (L[B] = l.apply(this, arguments)), L[B]
            };
            return S.cache = {}, S
        }, v.delay = function(l, g) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, g)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, g, S) {
            var R, L, B, te = null,
                Se = 0;
            S || (S = {});
            var he = function() {
                Se = S.leading === !1 ? 0 : v.now(), te = null, B = l.apply(R, L), te || (R = L = null)
            };
            return function() {
                var Me = v.now();
                !Se && S.leading === !1 && (Se = Me);
                var De = g - (Me - Se);
                return R = this, L = arguments, De <= 0 || De > g ? (te && (clearTimeout(te), te = null), Se = Me, B = l.apply(R, L), te || (R = L = null)) : !te && S.trailing !== !1 && (te = setTimeout(he, De)), B
            }
        }, v.debounce = function(l, g, S) {
            var R, L, B, te, Se, he = function() {
                var Me = v.now() - te;
                Me < g && Me >= 0 ? R = setTimeout(he, g - Me) : (R = null, S || (Se = l.apply(B, L), R || (B = L = null)))
            };
            return function() {
                B = this, L = arguments, te = v.now();
                var Me = S && !R;
                return R || (R = setTimeout(he, g)), Me && (Se = l.apply(B, L), B = L = null), Se
            }
        }, v.wrap = function(l, g) {
            return v.partial(g, l)
        }, v.negate = function(l) {
            return function() {
                return !l.apply(this, arguments)
            }
        }, v.compose = function() {
            var l = arguments,
                g = l.length - 1;
            return function() {
                for (var S = g, R = l[g].apply(this, arguments); S--;) R = l[S].call(this, R);
                return R
            }
        }, v.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, v.before = function(l, g) {
            var S;
            return function() {
                return --l > 0 && (S = g.apply(this, arguments)), l <= 1 && (g = null), S
            }
        }, v.once = v.partial(v.before, 2);
        var oe = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Te = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function we(l, g) {
            var S = Te.length,
                R = l.constructor,
                L = v.isFunction(R) && R.prototype || f,
                B = "constructor";
            for (v.has(l, B) && !v.contains(g, B) && g.push(B); S--;) B = Te[S], B in l && l[B] !== L[B] && !v.contains(g, B) && g.push(B)
        }
        v.keys = function(l) {
            if (!v.isObject(l)) return [];
            if (U) return U(l);
            var g = [];
            for (var S in l) v.has(l, S) && g.push(S);
            return oe && we(l, g), g
        }, v.allKeys = function(l) {
            if (!v.isObject(l)) return [];
            var g = [];
            for (var S in l) g.push(S);
            return oe && we(l, g), g
        }, v.values = function(l) {
            for (var g = v.keys(l), S = g.length, R = Array(S), L = 0; L < S; L++) R[L] = l[g[L]];
            return R
        }, v.mapObject = function(l, g, S) {
            g = W(g, S);
            for (var R = v.keys(l), L = R.length, B = {}, te, Se = 0; Se < L; Se++) te = R[Se], B[te] = g(l[te], te, l);
            return B
        }, v.pairs = function(l) {
            for (var g = v.keys(l), S = g.length, R = Array(S), L = 0; L < S; L++) R[L] = [g[L], l[g[L]]];
            return R
        }, v.invert = function(l) {
            for (var g = {}, S = v.keys(l), R = 0, L = S.length; R < L; R++) g[l[S[R]]] = S[R];
            return g
        }, v.functions = v.methods = function(l) {
            var g = [];
            for (var S in l) v.isFunction(l[S]) && g.push(S);
            return g.sort()
        }, v.extend = ae(v.allKeys), v.extendOwn = v.assign = ae(v.keys), v.findKey = function(l, g, S) {
            g = W(g, S);
            for (var R = v.keys(l), L, B = 0, te = R.length; B < te; B++)
                if (L = R[B], g(l[L], L, l)) return L
        }, v.pick = function(l, g, S) {
            var R = {},
                L = l,
                B, te;
            if (L == null) return R;
            v.isFunction(g) ? (te = v.allKeys(L), B = P(g, S)) : (te = Be(arguments, !1, !1, 1), B = function(it, xt, rn) {
                return xt in rn
            }, L = Object(L));
            for (var Se = 0, he = te.length; Se < he; Se++) {
                var Me = te[Se],
                    De = L[Me];
                B(De, Me, L) && (R[Me] = De)
            }
            return R
        }, v.omit = function(l, g, S) {
            if (v.isFunction(g)) g = v.negate(g);
            else {
                var R = v.map(Be(arguments, !1, !1, 1), String);
                g = function(L, B) {
                    return !v.contains(R, B)
                }
            }
            return v.pick(l, g, S)
        }, v.defaults = ae(v.allKeys, !0), v.create = function(l, g) {
            var S = se(l);
            return g && v.extendOwn(S, g), S
        }, v.clone = function(l) {
            return v.isObject(l) ? v.isArray(l) ? l.slice() : v.extend({}, l) : l
        }, v.tap = function(l, g) {
            return g(l), l
        }, v.isMatch = function(l, g) {
            var S = v.keys(g),
                R = S.length;
            if (l == null) return !R;
            for (var L = Object(l), B = 0; B < R; B++) {
                var te = S[B];
                if (g[te] !== L[te] || !(te in L)) return !1
            }
            return !0
        };
        var ye = function(l, g, S, R) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof v && (l = l._wrapped), g instanceof v && (g = g._wrapped);
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
                    Se = g.constructor;
                if (te !== Se && !(v.isFunction(te) && te instanceof te && v.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
            }
            S = S || [], R = R || [];
            for (var he = S.length; he--;)
                if (S[he] === l) return R[he] === g;
            if (S.push(l), R.push(g), B) {
                if (he = l.length, he !== g.length) return !1;
                for (; he--;)
                    if (!ye(l[he], g[he], S, R)) return !1
            } else {
                var Me = v.keys(l),
                    De;
                if (he = Me.length, v.keys(g).length !== he) return !1;
                for (; he--;)
                    if (De = Me[he], !(v.has(g, De) && ye(l[De], g[De], S, R))) return !1
            }
            return S.pop(), R.pop(), !0
        };
        v.isEqual = function(l, g) {
            return ye(l, g)
        }, v.isEmpty = function(l) {
            return l == null ? !0 : Ae(l) && (v.isArray(l) || v.isString(l) || v.isArguments(l)) ? l.length === 0 : v.keys(l).length === 0
        }, v.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, v.isArray = V || function(l) {
            return A.call(l) === "[object Array]"
        }, v.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            v["is" + l] = function(g) {
                return A.call(g) === "[object " + l + "]"
            }
        }), v.isArguments(arguments) || (v.isArguments = function(l) {
            return v.has(l, "callee")
        }), typeof /./ != "function" && typeof Int8Array != "object" && (v.isFunction = function(l) {
            return typeof l == "function" || !1
        }), v.isFinite = function(l) {
            return isFinite(l) && !isNaN(parseFloat(l))
        }, v.isNaN = function(l) {
            return v.isNumber(l) && l !== +l
        }, v.isBoolean = function(l) {
            return l === !0 || l === !1 || A.call(l) === "[object Boolean]"
        }, v.isNull = function(l) {
            return l === null
        }, v.isUndefined = function(l) {
            return l === void 0
        }, v.has = function(l, g) {
            return l != null && M.call(l, g)
        }, v.noConflict = function() {
            return n._ = i, this
        }, v.identity = function(l) {
            return l
        }, v.constant = function(l) {
            return function() {
                return l
            }
        }, v.noop = function() {}, v.property = ve, v.propertyOf = function(l) {
            return l == null ? function() {} : function(g) {
                return l[g]
            }
        }, v.matcher = v.matches = function(l) {
            return l = v.extendOwn({}, l),
                function(g) {
                    return v.isMatch(g, l)
                }
        }, v.times = function(l, g, S) {
            var R = Array(Math.max(0, l));
            g = P(g, S, 1);
            for (var L = 0; L < l; L++) R[L] = g(L);
            return R
        }, v.random = function(l, g) {
            return g == null && (g = l, l = 0), l + Math.floor(Math.random() * (g - l + 1))
        }, v.now = Date.now || function() {
            return new Date().getTime()
        };
        var ue = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            _e = v.invert(ue),
            ke = function(l) {
                var g = function(B) {
                        return l[B]
                    },
                    S = "(?:" + v.keys(l).join("|") + ")",
                    R = RegExp(S),
                    L = RegExp(S, "g");
                return function(B) {
                    return B = B == null ? "" : "" + B, R.test(B) ? B.replace(L, g) : B
                }
            };
        v.escape = ke(ue), v.unescape = ke(_e), v.result = function(l, g, S) {
            var R = l == null ? void 0 : l[g];
            return R === void 0 && (R = S), v.isFunction(R) ? R.call(l) : R
        };
        var $e = 0;
        v.uniqueId = function(l) {
            var g = ++$e + "";
            return l ? l + g : g
        }, v.templateSettings = {
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
            Ut = function(l) {
                return "\\" + dt[l]
            };
        v.template = function(l, g, S) {
            !g && S && (g = S), g = v.defaults({}, g, v.templateSettings);
            var R = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                L = 0,
                B = "__p+='";
            l.replace(R, function(Me, De, it, xt, rn) {
                return B += l.slice(L, rn).replace(Bt, Ut), L = rn + Me.length, De ? B += `'+
((__t=(` + De + `))==null?'':_.escape(__t))+
'` : it ? B += `'+
((__t=(` + it + `))==null?'':__t)+
'` : xt && (B += `';
` + xt + `
__p+='`), Me
            }), B += `';
`, g.variable || (B = `with(obj||{}){
` + B + `}
`), B = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + B + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", B)
            } catch (Me) {
                throw Me.source = B, Me
            }
            var Se = function(Me) {
                    return te.call(this, Me, v)
                },
                he = g.variable || "obj";
            return Se.source = "function(" + he + `){
` + B + "}", Se
        }, v.chain = function(l) {
            var g = v(l);
            return g._chain = !0, g
        };
        var _ = function(l, g) {
            return l._chain ? v(g).chain() : g
        };
        v.mixin = function(l) {
            v.each(v.functions(l), function(g) {
                var S = v[g] = l[g];
                v.prototype[g] = function() {
                    var R = [this._wrapped];
                    return b.apply(R, arguments), _(this, S.apply(v, R))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = a[l];
            v.prototype[l] = function() {
                var S = this._wrapped;
                return g.apply(S, arguments), (l === "shift" || l === "splice") && S.length === 0 && delete S[0], _(this, S)
            }
        }), v.each(["concat", "join", "slice"], function(l) {
            var g = a[l];
            v.prototype[l] = function() {
                return _(this, g.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(yt)
})(Ni, Ni.exports);
const Ze = Ni.exports;
var Qo = {
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
var vl;

function Ec() {
    return vl || (vl = 1, function(t) {
        (function(e, n) {
            t.exports = e.document ? n(e, !0) : function(i) {
                if (!i.document) throw new Error("jQuery requires a window with a document");
                return n(i)
            }
        })(typeof window < "u" ? window : yt, function(e, n) {
            var i = [],
                a = Object.getPrototypeOf,
                f = i.slice,
                m = i.flat ? function(r) {
                    return i.flat.call(r)
                } : function(r) {
                    return i.concat.apply([], r)
                },
                b = i.push,
                k = i.indexOf,
                A = {},
                M = A.toString,
                V = A.hasOwnProperty,
                U = V.toString,
                ne = U.call(Object),
                K = {},
                re = function(s) {
                    return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
                },
                v = function(s) {
                    return s != null && s === s.window
                },
                P = e.document,
                W = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function ae(r, s, u) {
                u = u || P;
                var p, w, E = u.createElement("script");
                if (E.text = r, s)
                    for (p in W) w = s[p] || s.getAttribute && s.getAttribute(p), w && E.setAttribute(p, w);
                u.head.appendChild(E).parentNode.removeChild(E)
            }

            function se(r) {
                return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? A[M.call(r)] || "object" : typeof r
            }
            var ve = "3.6.0",
                d = function(r, s) {
                    return new d.fn.init(r, s)
                };
            d.fn = d.prototype = {
                jquery: ve,
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
                expando: "jQuery" + (ve + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(r) {
                    throw new Error(r)
                },
                noop: function() {},
                isPlainObject: function(r) {
                    var s, u;
                    return !r || M.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = V.call(s, "constructor") && s.constructor, typeof u == "function" && U.call(u) === ne) : !0)
                },
                isEmptyObject: function(r) {
                    var s;
                    for (s in r) return !1;
                    return !0
                },
                globalEval: function(r, s, u) {
                    ae(r, {
                        nonce: s && s.nonce
                    }, u)
                },
                each: function(r, s) {
                    var u, p = 0;
                    if (Ee(r))
                        for (u = r.length; p < u && s.call(r[p], p, r[p]) !== !1; p++);
                    else
                        for (p in r)
                            if (s.call(r[p], p, r[p]) === !1) break;
                    return r
                },
                makeArray: function(r, s) {
                    var u = s || [];
                    return r != null && (Ee(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : b.call(u, r)), u
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
                    if (Ee(r))
                        for (p = r.length; E < p; E++) w = s(r[E], E, u), w != null && T.push(w);
                    else
                        for (E in r) w = s(r[E], E, u), w != null && T.push(w);
                    return m(T)
                },
                guid: 1,
                support: K
            }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
                A["[object " + s + "]"] = s.toLowerCase()
            });

            function Ee(r) {
                var s = !!r && "length" in r && r.length,
                    u = se(r);
                return re(r) || v(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
            }
            var Ae = function(r) {
                var s, u, p, w, E, T, z, G, Z, le, be, ie, ce, Ue, st, Fe, zt, Nt, un, _t = "sizzle" + 1 * new Date,
                    tt = r.document,
                    on = 0,
                    ft = 0,
                    Mt = Yi(),
                    Si = Yi(),
                    Wi = Yi(),
                    hn = Yi(),
                    Qn = function(I, j) {
                        return I === j && (be = !0), 0
                    },
                    Zn = {}.hasOwnProperty,
                    an = [],
                    Dn = an.pop,
                    vn = an.push,
                    Cn = an.push,
                    _s = an.slice,
                    ei = function(I, j) {
                        for (var Y = 0, de = I.length; Y < de; Y++)
                            if (I[Y] === j) return Y;
                        return -1
                    },
                    jr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    gt = "[\\x20\\t\\r\\n\\f]",
                    ti = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    Ss = "\\[" + gt + "*(" + ti + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ti + "))|)" + gt + "*\\]",
                    zr = ":(" + ti + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ss + ")*)|.*)\\)|)",
                    ks = new RegExp(gt + "+", "g"),
                    ki = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                    Ts = new RegExp("^" + gt + "*," + gt + "*"),
                    As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                    Fo = new RegExp(gt + "|>"),
                    jo = new RegExp(zr),
                    zo = new RegExp("^" + ti + "$"),
                    Xi = {
                        ID: new RegExp("^#(" + ti + ")"),
                        CLASS: new RegExp("^\\.(" + ti + ")"),
                        TAG: new RegExp("^(" + ti + "|[*])"),
                        ATTR: new RegExp("^" + Ss),
                        PSEUDO: new RegExp("^" + zr),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + jr + ")$", "i"),
                        needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Go = /HTML$/i,
                    Ho = /^(?:input|select|textarea|button)$/i,
                    Uo = /^h\d$/i,
                    Ti = /^[^{]+\{\s*\[native \w/,
                    qo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Gr = /[+~]/,
                    Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                    xn = function(I, j) {
                        var Y = "0x" + I.slice(1) - 65536;
                        return j || (Y < 0 ? String.fromCharCode(Y + 65536) : String.fromCharCode(Y >> 10 | 55296, Y & 1023 | 56320))
                    },
                    Hr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Os = function(I, j) {
                        return j ? I === "\0" ? "\uFFFD" : I.slice(0, -1) + "\\" + I.charCodeAt(I.length - 1).toString(16) + " " : "\\" + I
                    },
                    Rs = function() {
                        ie()
                    },
                    Wo = Zi(function(I) {
                        return I.disabled === !0 && I.nodeName.toLowerCase() === "fieldset"
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Cn.apply(an = _s.call(tt.childNodes), tt.childNodes), an[tt.childNodes.length].nodeType
                } catch {
                    Cn = {
                        apply: an.length ? function(j, Y) {
                            vn.apply(j, _s.call(Y))
                        } : function(j, Y) {
                            for (var de = j.length, ee = 0; j[de++] = Y[ee++];);
                            j.length = de - 1
                        }
                    }
                }

                function St(I, j, Y, de) {
                    var ee, me, xe, Oe, Le, ze, He, Xe = j && j.ownerDocument,
                        ht = j ? j.nodeType : 9;
                    if (Y = Y || [], typeof I != "string" || !I || ht !== 1 && ht !== 9 && ht !== 11) return Y;
                    if (!de && (ie(j), j = j || ce, st)) {
                        if (ht !== 11 && (Le = qo.exec(I)))
                            if (ee = Le[1]) {
                                if (ht === 9)
                                    if (xe = j.getElementById(ee)) {
                                        if (xe.id === ee) return Y.push(xe), Y
                                    } else return Y;
                                else if (Xe && (xe = Xe.getElementById(ee)) && un(j, xe) && xe.id === ee) return Y.push(xe), Y
                            } else {
                                if (Le[2]) return Cn.apply(Y, j.getElementsByTagName(I)), Y;
                                if ((ee = Le[3]) && u.getElementsByClassName && j.getElementsByClassName) return Cn.apply(Y, j.getElementsByClassName(ee)), Y
                            } if (u.qsa && !hn[I + " "] && (!Fe || !Fe.test(I)) && (ht !== 1 || j.nodeName.toLowerCase() !== "object")) {
                            if (He = I, Xe = j, ht === 1 && (Fo.test(I) || As.test(I))) {
                                for (Xe = Gr.test(I) && Ur(j.parentNode) || j, (Xe !== j || !u.scope) && ((Oe = j.getAttribute("id")) ? Oe = Oe.replace(Hr, Os) : j.setAttribute("id", Oe = _t)), ze = T(I), me = ze.length; me--;) ze[me] = (Oe ? "#" + Oe : ":scope") + " " + Qi(ze[me]);
                                He = ze.join(",")
                            }
                            try {
                                return Cn.apply(Y, Xe.querySelectorAll(He)), Y
                            } catch {
                                hn(I, !0)
                            } finally {
                                Oe === _t && j.removeAttribute("id")
                            }
                        }
                    }
                    return G(I.replace(ki, "$1"), j, Y, de)
                }

                function Yi() {
                    var I = [];

                    function j(Y, de) {
                        return I.push(Y + " ") > p.cacheLength && delete j[I.shift()], j[Y + " "] = de
                    }
                    return j
                }

                function dn(I) {
                    return I[_t] = !0, I
                }

                function yn(I) {
                    var j = ce.createElement("fieldset");
                    try {
                        return !!I(j)
                    } catch {
                        return !1
                    } finally {
                        j.parentNode && j.parentNode.removeChild(j), j = null
                    }
                }

                function Ki(I, j) {
                    for (var Y = I.split("|"), de = Y.length; de--;) p.attrHandle[Y[de]] = j
                }

                function Ji(I, j) {
                    var Y = j && I,
                        de = Y && I.nodeType === 1 && j.nodeType === 1 && I.sourceIndex - j.sourceIndex;
                    if (de) return de;
                    if (Y) {
                        for (; Y = Y.nextSibling;)
                            if (Y === j) return -1
                    }
                    return I ? 1 : -1
                }

                function Xo(I) {
                    return function(j) {
                        var Y = j.nodeName.toLowerCase();
                        return Y === "input" && j.type === I
                    }
                }

                function Yo(I) {
                    return function(j) {
                        var Y = j.nodeName.toLowerCase();
                        return (Y === "input" || Y === "button") && j.type === I
                    }
                }

                function Is(I) {
                    return function(j) {
                        return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === I : j.disabled === I : j.isDisabled === I || j.isDisabled !== !I && Wo(j) === I : j.disabled === I : "label" in j ? j.disabled === I : !1
                    }
                }

                function An(I) {
                    return dn(function(j) {
                        return j = +j, dn(function(Y, de) {
                            for (var ee, me = I([], Y.length, j), xe = me.length; xe--;) Y[ee = me[xe]] && (Y[ee] = !(de[ee] = Y[ee]))
                        })
                    })
                }

                function Ur(I) {
                    return I && typeof I.getElementsByTagName < "u" && I
                }
                u = St.support = {}, E = St.isXML = function(I) {
                    var j = I && I.namespaceURI,
                        Y = I && (I.ownerDocument || I).documentElement;
                    return !Go.test(j || Y && Y.nodeName || "HTML")
                }, ie = St.setDocument = function(I) {
                    var j, Y, de = I ? I.ownerDocument || I : tt;
                    return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, Ue = ce.documentElement, st = !E(ce), tt != ce && (Y = ce.defaultView) && Y.top !== Y && (Y.addEventListener ? Y.addEventListener("unload", Rs, !1) : Y.attachEvent && Y.attachEvent("onunload", Rs)), u.scope = yn(function(ee) {
                        return Ue.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                    }), u.attributes = yn(function(ee) {
                        return ee.className = "i", !ee.getAttribute("className")
                    }), u.getElementsByTagName = yn(function(ee) {
                        return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                    }), u.getElementsByClassName = Ti.test(ce.getElementsByClassName), u.getById = yn(function(ee) {
                        return Ue.appendChild(ee).id = _t, !ce.getElementsByName || !ce.getElementsByName(_t).length
                    }), u.getById ? (p.filter.ID = function(ee) {
                        var me = ee.replace(Tn, xn);
                        return function(xe) {
                            return xe.getAttribute("id") === me
                        }
                    }, p.find.ID = function(ee, me) {
                        if (typeof me.getElementById < "u" && st) {
                            var xe = me.getElementById(ee);
                            return xe ? [xe] : []
                        }
                    }) : (p.filter.ID = function(ee) {
                        var me = ee.replace(Tn, xn);
                        return function(xe) {
                            var Oe = typeof xe.getAttributeNode < "u" && xe.getAttributeNode("id");
                            return Oe && Oe.value === me
                        }
                    }, p.find.ID = function(ee, me) {
                        if (typeof me.getElementById < "u" && st) {
                            var xe, Oe, Le, ze = me.getElementById(ee);
                            if (ze) {
                                if (xe = ze.getAttributeNode("id"), xe && xe.value === ee) return [ze];
                                for (Le = me.getElementsByName(ee), Oe = 0; ze = Le[Oe++];)
                                    if (xe = ze.getAttributeNode("id"), xe && xe.value === ee) return [ze]
                            }
                            return []
                        }
                    }), p.find.TAG = u.getElementsByTagName ? function(ee, me) {
                        if (typeof me.getElementsByTagName < "u") return me.getElementsByTagName(ee);
                        if (u.qsa) return me.querySelectorAll(ee)
                    } : function(ee, me) {
                        var xe, Oe = [],
                            Le = 0,
                            ze = me.getElementsByTagName(ee);
                        if (ee === "*") {
                            for (; xe = ze[Le++];) xe.nodeType === 1 && Oe.push(xe);
                            return Oe
                        }
                        return ze
                    }, p.find.CLASS = u.getElementsByClassName && function(ee, me) {
                        if (typeof me.getElementsByClassName < "u" && st) return me.getElementsByClassName(ee)
                    }, zt = [], Fe = [], (u.qsa = Ti.test(ce.querySelectorAll)) && (yn(function(ee) {
                        var me;
                        Ue.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && Fe.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || Fe.push("\\[" + gt + "*(?:value|" + jr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || Fe.push("~="), me = ce.createElement("input"), me.setAttribute("name", ""), ee.appendChild(me), ee.querySelectorAll("[name='']").length || Fe.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || Fe.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || Fe.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), Fe.push("[\\r\\n\\f]")
                    }), yn(function(ee) {
                        ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var me = ce.createElement("input");
                        me.setAttribute("type", "hidden"), ee.appendChild(me).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && Fe.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && Fe.push(":enabled", ":disabled"), Ue.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && Fe.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), Fe.push(",.*:")
                    })), (u.matchesSelector = Ti.test(Nt = Ue.matches || Ue.webkitMatchesSelector || Ue.mozMatchesSelector || Ue.oMatchesSelector || Ue.msMatchesSelector)) && yn(function(ee) {
                        u.disconnectedMatch = Nt.call(ee, "*"), Nt.call(ee, "[s!='']:x"), zt.push("!=", zr)
                    }), Fe = Fe.length && new RegExp(Fe.join("|")), zt = zt.length && new RegExp(zt.join("|")), j = Ti.test(Ue.compareDocumentPosition), un = j || Ti.test(Ue.contains) ? function(ee, me) {
                        var xe = ee.nodeType === 9 ? ee.documentElement : ee,
                            Oe = me && me.parentNode;
                        return ee === Oe || !!(Oe && Oe.nodeType === 1 && (xe.contains ? xe.contains(Oe) : ee.compareDocumentPosition && ee.compareDocumentPosition(Oe) & 16))
                    } : function(ee, me) {
                        if (me) {
                            for (; me = me.parentNode;)
                                if (me === ee) return !0
                        }
                        return !1
                    }, Qn = j ? function(ee, me) {
                        if (ee === me) return be = !0, 0;
                        var xe = !ee.compareDocumentPosition - !me.compareDocumentPosition;
                        return xe || (xe = (ee.ownerDocument || ee) == (me.ownerDocument || me) ? ee.compareDocumentPosition(me) : 1, xe & 1 || !u.sortDetached && me.compareDocumentPosition(ee) === xe ? ee == ce || ee.ownerDocument == tt && un(tt, ee) ? -1 : me == ce || me.ownerDocument == tt && un(tt, me) ? 1 : le ? ei(le, ee) - ei(le, me) : 0 : xe & 4 ? -1 : 1)
                    } : function(ee, me) {
                        if (ee === me) return be = !0, 0;
                        var xe, Oe = 0,
                            Le = ee.parentNode,
                            ze = me.parentNode,
                            He = [ee],
                            Xe = [me];
                        if (!Le || !ze) return ee == ce ? -1 : me == ce ? 1 : Le ? -1 : ze ? 1 : le ? ei(le, ee) - ei(le, me) : 0;
                        if (Le === ze) return Ji(ee, me);
                        for (xe = ee; xe = xe.parentNode;) He.unshift(xe);
                        for (xe = me; xe = xe.parentNode;) Xe.unshift(xe);
                        for (; He[Oe] === Xe[Oe];) Oe++;
                        return Oe ? Ji(He[Oe], Xe[Oe]) : He[Oe] == tt ? -1 : Xe[Oe] == tt ? 1 : 0
                    }), ce
                }, St.matches = function(I, j) {
                    return St(I, null, null, j)
                }, St.matchesSelector = function(I, j) {
                    if (ie(I), u.matchesSelector && st && !hn[j + " "] && (!zt || !zt.test(j)) && (!Fe || !Fe.test(j))) try {
                        var Y = Nt.call(I, j);
                        if (Y || u.disconnectedMatch || I.document && I.document.nodeType !== 11) return Y
                    } catch {
                        hn(j, !0)
                    }
                    return St(j, ce, null, [I]).length > 0
                }, St.contains = function(I, j) {
                    return (I.ownerDocument || I) != ce && ie(I), un(I, j)
                }, St.attr = function(I, j) {
                    (I.ownerDocument || I) != ce && ie(I);
                    var Y = p.attrHandle[j.toLowerCase()],
                        de = Y && Zn.call(p.attrHandle, j.toLowerCase()) ? Y(I, j, !st) : void 0;
                    return de !== void 0 ? de : u.attributes || !st ? I.getAttribute(j) : (de = I.getAttributeNode(j)) && de.specified ? de.value : null
                }, St.escape = function(I) {
                    return (I + "").replace(Hr, Os)
                }, St.error = function(I) {
                    throw new Error("Syntax error, unrecognized expression: " + I)
                }, St.uniqueSort = function(I) {
                    var j, Y = [],
                        de = 0,
                        ee = 0;
                    if (be = !u.detectDuplicates, le = !u.sortStable && I.slice(0), I.sort(Qn), be) {
                        for (; j = I[ee++];) j === I[ee] && (de = Y.push(ee));
                        for (; de--;) I.splice(Y[de], 1)
                    }
                    return le = null, I
                }, w = St.getText = function(I) {
                    var j, Y = "",
                        de = 0,
                        ee = I.nodeType;
                    if (ee) {
                        if (ee === 1 || ee === 9 || ee === 11) {
                            if (typeof I.textContent == "string") return I.textContent;
                            for (I = I.firstChild; I; I = I.nextSibling) Y += w(I)
                        } else if (ee === 3 || ee === 4) return I.nodeValue
                    } else
                        for (; j = I[de++];) Y += w(j);
                    return Y
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
                            var j, Y = !I[6] && I[2];
                            return Xi.CHILD.test(I[0]) ? null : (I[3] ? I[2] = I[4] || I[5] || "" : Y && jo.test(Y) && (j = T(Y, !0)) && (j = Y.indexOf(")", Y.length - j) - Y.length) && (I[0] = I[0].slice(0, j), I[2] = Y.slice(0, j)), I.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(I) {
                            var j = I.replace(Tn, xn).toLowerCase();
                            return I === "*" ? function() {
                                return !0
                            } : function(Y) {
                                return Y.nodeName && Y.nodeName.toLowerCase() === j
                            }
                        },
                        CLASS: function(I) {
                            var j = Mt[I + " "];
                            return j || (j = new RegExp("(^|" + gt + ")" + I + "(" + gt + "|$)")) && Mt(I, function(Y) {
                                return j.test(typeof Y.className == "string" && Y.className || typeof Y.getAttribute < "u" && Y.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(I, j, Y) {
                            return function(de) {
                                var ee = St.attr(de, I);
                                return ee == null ? j === "!=" : j ? (ee += "", j === "=" ? ee === Y : j === "!=" ? ee !== Y : j === "^=" ? Y && ee.indexOf(Y) === 0 : j === "*=" ? Y && ee.indexOf(Y) > -1 : j === "$=" ? Y && ee.slice(-Y.length) === Y : j === "~=" ? (" " + ee.replace(ks, " ") + " ").indexOf(Y) > -1 : j === "|=" ? ee === Y || ee.slice(0, Y.length + 1) === Y + "-" : !1) : !0
                            }
                        },
                        CHILD: function(I, j, Y, de, ee) {
                            var me = I.slice(0, 3) !== "nth",
                                xe = I.slice(-4) !== "last",
                                Oe = j === "of-type";
                            return de === 1 && ee === 0 ? function(Le) {
                                return !!Le.parentNode
                            } : function(Le, ze, He) {
                                var Xe, ht, Tt, We, Gt, Jt, fn = me !== xe ? "nextSibling" : "previousSibling",
                                    At = Le.parentNode,
                                    c = Oe && Le.nodeName.toLowerCase(),
                                    h = !He && !Oe,
                                    C = !1;
                                if (At) {
                                    if (me) {
                                        for (; fn;) {
                                            for (We = Le; We = We[fn];)
                                                if (Oe ? We.nodeName.toLowerCase() === c : We.nodeType === 1) return !1;
                                            Jt = fn = I === "only" && !Jt && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (Jt = [xe ? At.firstChild : At.lastChild], xe && h) {
                                        for (We = At, Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), Xe = ht[I] || [], Gt = Xe[0] === on && Xe[1], C = Gt && Xe[2], We = Gt && At.childNodes[Gt]; We = ++Gt && We && We[fn] || (C = Gt = 0) || Jt.pop();)
                                            if (We.nodeType === 1 && ++C && We === Le) {
                                                ht[I] = [on, Gt, C];
                                                break
                                            }
                                    } else if (h && (We = Le, Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), Xe = ht[I] || [], Gt = Xe[0] === on && Xe[1], C = Gt), C === !1)
                                        for (;
                                            (We = ++Gt && We && We[fn] || (C = Gt = 0) || Jt.pop()) && !((Oe ? We.nodeName.toLowerCase() === c : We.nodeType === 1) && ++C && (h && (Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), ht[I] = [on, C]), We === Le)););
                                    return C -= ee, C === de || C % de === 0 && C / de >= 0
                                }
                            }
                        },
                        PSEUDO: function(I, j) {
                            var Y, de = p.pseudos[I] || p.setFilters[I.toLowerCase()] || St.error("unsupported pseudo: " + I);
                            return de[_t] ? de(j) : de.length > 1 ? (Y = [I, I, "", j], p.setFilters.hasOwnProperty(I.toLowerCase()) ? dn(function(ee, me) {
                                for (var xe, Oe = de(ee, j), Le = Oe.length; Le--;) xe = ei(ee, Oe[Le]), ee[xe] = !(me[xe] = Oe[Le])
                            }) : function(ee) {
                                return de(ee, 0, Y)
                            }) : de
                        }
                    },
                    pseudos: {
                        not: dn(function(I) {
                            var j = [],
                                Y = [],
                                de = z(I.replace(ki, "$1"));
                            return de[_t] ? dn(function(ee, me, xe, Oe) {
                                for (var Le, ze = de(ee, null, Oe, []), He = ee.length; He--;)(Le = ze[He]) && (ee[He] = !(me[He] = Le))
                            }) : function(ee, me, xe) {
                                return j[0] = ee, de(j, null, xe, Y), j[0] = null, !Y.pop()
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
                            return zo.test(I || "") || St.error("unsupported lang: " + I), I = I.replace(Tn, xn).toLowerCase(),
                                function(j) {
                                    var Y;
                                    do
                                        if (Y = st ? j.lang : j.getAttribute("xml:lang") || j.getAttribute("lang")) return Y = Y.toLowerCase(), Y === I || Y.indexOf(I + "-") === 0; while ((j = j.parentNode) && j.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(I) {
                            var j = r.location && r.location.hash;
                            return j && j.slice(1) === I.id
                        },
                        root: function(I) {
                            return I === Ue
                        },
                        focus: function(I) {
                            return I === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(I.type || I.href || ~I.tabIndex)
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
                            return Ho.test(I.nodeName)
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
                        eq: An(function(I, j, Y) {
                            return [Y < 0 ? Y + j : Y]
                        }),
                        even: An(function(I, j) {
                            for (var Y = 0; Y < j; Y += 2) I.push(Y);
                            return I
                        }),
                        odd: An(function(I, j) {
                            for (var Y = 1; Y < j; Y += 2) I.push(Y);
                            return I
                        }),
                        lt: An(function(I, j, Y) {
                            for (var de = Y < 0 ? Y + j : Y > j ? j : Y; --de >= 0;) I.push(de);
                            return I
                        }),
                        gt: An(function(I, j, Y) {
                            for (var de = Y < 0 ? Y + j : Y; ++de < j;) I.push(de);
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
                    }) p.pseudos[s] = Xo(s);
                for (s in {
                        submit: !0,
                        reset: !0
                    }) p.pseudos[s] = Yo(s);

                function Ms() {}
                Ms.prototype = p.filters = p.pseudos, p.setFilters = new Ms, T = St.tokenize = function(I, j) {
                    var Y, de, ee, me, xe, Oe, Le, ze = Si[I + " "];
                    if (ze) return j ? 0 : ze.slice(0);
                    for (xe = I, Oe = [], Le = p.preFilter; xe;) {
                        (!Y || (de = Ts.exec(xe))) && (de && (xe = xe.slice(de[0].length) || xe), Oe.push(ee = [])), Y = !1, (de = As.exec(xe)) && (Y = de.shift(), ee.push({
                            value: Y,
                            type: de[0].replace(ki, " ")
                        }), xe = xe.slice(Y.length));
                        for (me in p.filter)(de = Xi[me].exec(xe)) && (!Le[me] || (de = Le[me](de))) && (Y = de.shift(), ee.push({
                            value: Y,
                            type: me,
                            matches: de
                        }), xe = xe.slice(Y.length));
                        if (!Y) break
                    }
                    return j ? xe.length : xe ? St.error(I) : Si(I, Oe).slice(0)
                };

                function Qi(I) {
                    for (var j = 0, Y = I.length, de = ""; j < Y; j++) de += I[j].value;
                    return de
                }

                function Zi(I, j, Y) {
                    var de = j.dir,
                        ee = j.next,
                        me = ee || de,
                        xe = Y && me === "parentNode",
                        Oe = ft++;
                    return j.first ? function(Le, ze, He) {
                        for (; Le = Le[de];)
                            if (Le.nodeType === 1 || xe) return I(Le, ze, He);
                        return !1
                    } : function(Le, ze, He) {
                        var Xe, ht, Tt, We = [on, Oe];
                        if (He) {
                            for (; Le = Le[de];)
                                if ((Le.nodeType === 1 || xe) && I(Le, ze, He)) return !0
                        } else
                            for (; Le = Le[de];)
                                if (Le.nodeType === 1 || xe)
                                    if (Tt = Le[_t] || (Le[_t] = {}), ht = Tt[Le.uniqueID] || (Tt[Le.uniqueID] = {}), ee && ee === Le.nodeName.toLowerCase()) Le = Le[de] || Le;
                                    else {
                                        if ((Xe = ht[me]) && Xe[0] === on && Xe[1] === Oe) return We[2] = Xe[2];
                                        if (ht[me] = We, We[2] = I(Le, ze, He)) return !0
                                    } return !1
                    }
                }

                function er(I) {
                    return I.length > 1 ? function(j, Y, de) {
                        for (var ee = I.length; ee--;)
                            if (!I[ee](j, Y, de)) return !1;
                        return !0
                    } : I[0]
                }

                function Ko(I, j, Y) {
                    for (var de = 0, ee = j.length; de < ee; de++) St(I, j[de], Y);
                    return Y
                }

                function tr(I, j, Y, de, ee) {
                    for (var me, xe = [], Oe = 0, Le = I.length, ze = j != null; Oe < Le; Oe++)(me = I[Oe]) && (!Y || Y(me, de, ee)) && (xe.push(me), ze && j.push(Oe));
                    return xe
                }

                function qr(I, j, Y, de, ee, me) {
                    return de && !de[_t] && (de = qr(de)), ee && !ee[_t] && (ee = qr(ee, me)), dn(function(xe, Oe, Le, ze) {
                        var He, Xe, ht, Tt = [],
                            We = [],
                            Gt = Oe.length,
                            Jt = xe || Ko(j || "*", Le.nodeType ? [Le] : Le, []),
                            fn = I && (xe || !j) ? tr(Jt, Tt, I, Le, ze) : Jt,
                            At = Y ? ee || (xe ? I : Gt || de) ? [] : Oe : fn;
                        if (Y && Y(fn, At, Le, ze), de)
                            for (He = tr(At, We), de(He, [], Le, ze), Xe = He.length; Xe--;)(ht = He[Xe]) && (At[We[Xe]] = !(fn[We[Xe]] = ht));
                        if (xe) {
                            if (ee || I) {
                                if (ee) {
                                    for (He = [], Xe = At.length; Xe--;)(ht = At[Xe]) && He.push(fn[Xe] = ht);
                                    ee(null, At = [], He, ze)
                                }
                                for (Xe = At.length; Xe--;)(ht = At[Xe]) && (He = ee ? ei(xe, ht) : Tt[Xe]) > -1 && (xe[He] = !(Oe[He] = ht))
                            }
                        } else At = tr(At === Oe ? At.splice(Gt, At.length) : At), ee ? ee(null, Oe, At, ze) : Cn.apply(Oe, At)
                    })
                }

                function Wr(I) {
                    for (var j, Y, de, ee = I.length, me = p.relative[I[0].type], xe = me || p.relative[" "], Oe = me ? 1 : 0, Le = Zi(function(Xe) {
                            return Xe === j
                        }, xe, !0), ze = Zi(function(Xe) {
                            return ei(j, Xe) > -1
                        }, xe, !0), He = [function(Xe, ht, Tt) {
                            var We = !me && (Tt || ht !== Z) || ((j = ht).nodeType ? Le(Xe, ht, Tt) : ze(Xe, ht, Tt));
                            return j = null, We
                        }]; Oe < ee; Oe++)
                        if (Y = p.relative[I[Oe].type]) He = [Zi(er(He), Y)];
                        else {
                            if (Y = p.filter[I[Oe].type].apply(null, I[Oe].matches), Y[_t]) {
                                for (de = ++Oe; de < ee && !p.relative[I[de].type]; de++);
                                return qr(Oe > 1 && er(He), Oe > 1 && Qi(I.slice(0, Oe - 1).concat({
                                    value: I[Oe - 2].type === " " ? "*" : ""
                                })).replace(ki, "$1"), Y, Oe < de && Wr(I.slice(Oe, de)), de < ee && Wr(I = I.slice(de)), de < ee && Qi(I))
                            }
                            He.push(Y)
                        } return er(He)
                }

                function Ds(I, j) {
                    var Y = j.length > 0,
                        de = I.length > 0,
                        ee = function(me, xe, Oe, Le, ze) {
                            var He, Xe, ht, Tt = 0,
                                We = "0",
                                Gt = me && [],
                                Jt = [],
                                fn = Z,
                                At = me || de && p.find.TAG("*", ze),
                                c = on += fn == null ? 1 : Math.random() || .1,
                                h = At.length;
                            for (ze && (Z = xe == ce || xe || ze); We !== h && (He = At[We]) != null; We++) {
                                if (de && He) {
                                    for (Xe = 0, !xe && He.ownerDocument != ce && (ie(He), Oe = !st); ht = I[Xe++];)
                                        if (ht(He, xe || ce, Oe)) {
                                            Le.push(He);
                                            break
                                        } ze && (on = c)
                                }
                                Y && ((He = !ht && He) && Tt--, me && Gt.push(He))
                            }
                            if (Tt += We, Y && We !== Tt) {
                                for (Xe = 0; ht = j[Xe++];) ht(Gt, Jt, xe, Oe);
                                if (me) {
                                    if (Tt > 0)
                                        for (; We--;) Gt[We] || Jt[We] || (Jt[We] = Dn.call(Le));
                                    Jt = tr(Jt)
                                }
                                Cn.apply(Le, Jt), ze && !me && Jt.length > 0 && Tt + j.length > 1 && St.uniqueSort(Le)
                            }
                            return ze && (on = c, Z = fn), Gt
                        };
                    return Y ? dn(ee) : ee
                }
                return z = St.compile = function(I, j) {
                    var Y, de = [],
                        ee = [],
                        me = Wi[I + " "];
                    if (!me) {
                        for (j || (j = T(I)), Y = j.length; Y--;) me = Wr(j[Y]), me[_t] ? de.push(me) : ee.push(me);
                        me = Wi(I, Ds(ee, de)), me.selector = I
                    }
                    return me
                }, G = St.select = function(I, j, Y, de) {
                    var ee, me, xe, Oe, Le, ze = typeof I == "function" && I,
                        He = !de && T(I = ze.selector || I);
                    if (Y = Y || [], He.length === 1) {
                        if (me = He[0] = He[0].slice(0), me.length > 2 && (xe = me[0]).type === "ID" && j.nodeType === 9 && st && p.relative[me[1].type]) {
                            if (j = (p.find.ID(xe.matches[0].replace(Tn, xn), j) || [])[0], j) ze && (j = j.parentNode);
                            else return Y;
                            I = I.slice(me.shift().value.length)
                        }
                        for (ee = Xi.needsContext.test(I) ? 0 : me.length; ee-- && (xe = me[ee], !p.relative[Oe = xe.type]);)
                            if ((Le = p.find[Oe]) && (de = Le(xe.matches[0].replace(Tn, xn), Gr.test(me[0].type) && Ur(j.parentNode) || j))) {
                                if (me.splice(ee, 1), I = de.length && Qi(me), !I) return Cn.apply(Y, de), Y;
                                break
                            }
                    }
                    return (ze || z(I, He))(de, j, !st, Y, !j || Gr.test(I) && Ur(j.parentNode) || j), Y
                }, u.sortStable = _t.split("").sort(Qn).join("") === _t, u.detectDuplicates = !!be, ie(), u.sortDetached = yn(function(I) {
                    return I.compareDocumentPosition(ce.createElement("fieldset")) & 1
                }), yn(function(I) {
                    return I.innerHTML = "<a href='#'></a>", I.firstChild.getAttribute("href") === "#"
                }) || Ki("type|href|height|width", function(I, j, Y) {
                    if (!Y) return I.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
                }), (!u.attributes || !yn(function(I) {
                    return I.innerHTML = "<input/>", I.firstChild.setAttribute("value", ""), I.firstChild.getAttribute("value") === ""
                })) && Ki("value", function(I, j, Y) {
                    if (!Y && I.nodeName.toLowerCase() === "input") return I.defaultValue
                }), yn(function(I) {
                    return I.getAttribute("disabled") == null
                }) || Ki(jr, function(I, j, Y) {
                    var de;
                    if (!Y) return I[j] === !0 ? j.toLowerCase() : (de = I.getAttributeNode(j)) && de.specified ? de.value : null
                }), St
            }(e);
            d.find = Ae, d.expr = Ae.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = Ae.uniqueSort, d.text = Ae.getText, d.isXMLDoc = Ae.isXML, d.contains = Ae.contains, d.escapeSelector = Ae.escape;
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

            function H(r, s, u) {
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
                    return this.pushStack(H(this, r || [], !1))
                },
                not: function(r) {
                    return this.pushStack(H(this, r || [], !0))
                },
                is: function(r) {
                    return !!H(this, typeof r == "string" && Be.test(r) ? d(r) : r || [], !1).length
                }
            });
            var oe, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                we = d.fn.init = function(r, s, u) {
                    var p, w;
                    if (!r) return this;
                    if (u = u || oe, typeof r == "string")
                        if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Te.exec(r), p && (p[1] || !s))
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
            we.prototype = d.fn, oe = d(P);
            var ye = /^(?:parents|prev(?:Until|All))/,
                ue = {
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

            function _e(r, s) {
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
                    return _e(r, "nextSibling")
                },
                prev: function(r) {
                    return _e(r, "previousSibling")
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
                    return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (J(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
                }
            }, function(r, s) {
                d.fn[r] = function(u, p) {
                    var w = d.map(this, s, u);
                    return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = d.filter(p, w)), this.length > 1 && (ue[r] || d.uniqueSort(w), ye.test(r) && w.reverse()), this.pushStack(w)
                }
            });
            var ke = /[^\x20\t\r\n\f]+/g;

            function $e(r) {
                var s = {};
                return d.each(r.match(ke) || [], function(u, p) {
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
                            return E && (u && !s && (z = E.length - 1, T.push(u)), function le(be) {
                                d.each(be, function(ie, ce) {
                                    re(ce) ? (!r.unique || !Z.has(ce)) && E.push(ce) : ce && ce.length && se(ce) !== "string" && le(ce)
                                })
                            }(arguments), u && !s && G()), this
                        },
                        remove: function() {
                            return d.each(arguments, function(le, be) {
                                for (var ie;
                                    (ie = d.inArray(be, E, ie)) > -1;) E.splice(ie, 1), ie <= z && z--
                            }), this
                        },
                        has: function(le) {
                            return le ? d.inArray(le, E) > -1 : E.length > 0
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
                        fireWith: function(le, be) {
                            return w || (be = be || [], be = [le, be.slice ? be.slice() : be], T.push(be), s || G()), this
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
                                            var le = Z && Z.apply(this, arguments);
                                            le && re(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[G[0] + "With"](this, Z ? [le] : arguments)
                                        })
                                    }), E = null
                                }).promise()
                            },
                            then: function(E, T, z) {
                                var G = 0;

                                function Z(le, be, ie, ce) {
                                    return function() {
                                        var Ue = this,
                                            st = arguments,
                                            Fe = function() {
                                                var Nt, un;
                                                if (!(le < G)) {
                                                    if (Nt = ie.apply(Ue, st), Nt === be.promise()) throw new TypeError("Thenable self-resolution");
                                                    un = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, re(un) ? ce ? un.call(Nt, Z(G, be, Ke, ce), Z(G, be, dt, ce)) : (G++, un.call(Nt, Z(G, be, Ke, ce), Z(G, be, dt, ce), Z(G, be, Ke, be.notifyWith))) : (ie !== Ke && (Ue = void 0, st = [Nt]), (ce || be.resolveWith)(Ue, st))
                                                }
                                            },
                                            zt = ce ? Fe : function() {
                                                try {
                                                    Fe()
                                                } catch (Nt) {
                                                    d.Deferred.exceptionHook && d.Deferred.exceptionHook(Nt, zt.stackTrace), le + 1 >= G && (ie !== dt && (Ue = void 0, st = [Nt]), be.rejectWith(Ue, st))
                                                }
                                            };
                                        le ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                    }
                                }
                                return d.Deferred(function(le) {
                                    s[0][3].add(Z(0, le, re(z) ? z : Ke, le.notifyWith)), s[1][3].add(Z(0, le, re(E) ? E : Ke)), s[2][3].add(Z(0, le, re(T) ? T : dt))
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
            var Ut = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            d.Deferred.exceptionHook = function(r, s) {
                e.console && e.console.warn && r && Ut.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
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
                    } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(le, be, ie) {
                            return Z.call(d(le), ie)
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

            function Se() {
                this.expando = d.expando + Se.uid++
            }
            Se.uid = 1, Se.prototype = {
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
                            for (Array.isArray(s) ? s = s.map(B) : (s = B(s), s = s in p ? [s] : s.match(ke) || []), u = s.length; u--;) delete p[s[u]];
                        (s === void 0 || d.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                    }
                },
                hasData: function(r) {
                    var s = r[this.expando];
                    return s !== void 0 && !d.isEmptyObject(s)
                }
            };
            var he = new Se,
                Me = new Se,
                De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                it = /[A-Z]/g;

            function xt(r) {
                return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : De.test(r) ? JSON.parse(r) : r
            }

            function rn(r, s, u) {
                var p;
                if (u === void 0 && r.nodeType === 1)
                    if (p = "data-" + s.replace(it, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                        try {
                            u = xt(u)
                        } catch {}
                        Me.set(r, s, u)
                    } else u = void 0;
                return u
            }
            d.extend({
                hasData: function(r) {
                    return Me.hasData(r) || he.hasData(r)
                },
                data: function(r, s, u) {
                    return Me.access(r, s, u)
                },
                removeData: function(r, s) {
                    Me.remove(r, s)
                },
                _data: function(r, s, u) {
                    return he.access(r, s, u)
                },
                _removeData: function(r, s) {
                    he.remove(r, s)
                }
            }), d.fn.extend({
                data: function(r, s) {
                    var u, p, w, E = this[0],
                        T = E && E.attributes;
                    if (r === void 0) {
                        if (this.length && (w = Me.get(E), E.nodeType === 1 && !he.get(E, "hasDataAttrs"))) {
                            for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = B(p.slice(5)), rn(E, p, w[p])));
                            he.set(E, "hasDataAttrs", !0)
                        }
                        return w
                    }
                    return typeof r == "object" ? this.each(function() {
                        Me.set(this, r)
                    }) : g(this, function(z) {
                        var G;
                        if (E && z === void 0) return G = Me.get(E, r), G !== void 0 || (G = rn(E, r), G !== void 0) ? G : void 0;
                        this.each(function() {
                            Me.set(this, r, z)
                        })
                    }, null, s, arguments.length > 1, null, !0)
                },
                removeData: function(r) {
                    return this.each(function() {
                        Me.remove(this, r)
                    })
                }
            }), d.extend({
                queue: function(r, s, u) {
                    var p;
                    if (r) return s = (s || "fx") + "queue", p = he.get(r, s), u && (!p || Array.isArray(u) ? p = he.access(r, s, d.makeArray(u)) : p.push(u)), p || []
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
                    return he.get(r, u) || he.access(r, u, {
                        empty: d.Callbacks("once memory").add(function() {
                            he.remove(r, [s + "queue", u])
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
                    for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = he.get(E[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                    return z(), w.promise(s)
                }
            });
            var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                wt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
                Ct = ["Top", "Right", "Bottom", "Left"],
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
                    le = r.nodeType && (d.cssNumber[s] || Z !== "px" && +G) && wt.exec(d.css(r, s));
                if (le && le[3] !== Z) {
                    for (G = G / 2, Z = Z || le[3], le = +G || 1; T--;) d.style(r, s, le + Z), (1 - E) * (1 - (E = z() / G || .5)) <= 0 && (T = 0), le = le / E;
                    le = le * 2, d.style(r, s, le + Z), u = u || []
                }
                return u && (le = +le || +G || 0, w = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = w)), w
            }
            var X = {};

            function D(r) {
                var s, u = r.ownerDocument,
                    p = r.nodeName,
                    w = X[p];
                return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), X[p] = w, w)
            }

            function q(r, s) {
                for (var u, p, w = [], E = 0, T = r.length; E < T; E++) p = r[E], p.style && (u = p.style.display, s ? (u === "none" && (w[E] = he.get(p, "display") || null, w[E] || (p.style.display = "")), p.style.display === "" && F(p) && (w[E] = D(p))) : u !== "none" && (w[E] = "none", he.set(p, "display", u)));
                for (E = 0; E < T; E++) w[E] != null && (r[E].style.display = w[E]);
                return r
            }
            d.fn.extend({
                show: function() {
                    return q(this, !0)
                },
                hide: function() {
                    return q(this)
                },
                toggle: function(r) {
                    return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                        F(this) ? d(this).show() : d(this).hide()
                    })
                }
            });
            var fe = /^(?:checkbox|radio)$/i,
                pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
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
                for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
            }
            var Ye = /<|&#?\w+;/;

            function In(r, s, u, p, w) {
                for (var E, T, z, G, Z, le, be = s.createDocumentFragment(), ie = [], ce = 0, Ue = r.length; ce < Ue; ce++)
                    if (E = r[ce], E || E === 0)
                        if (se(E) === "object") d.merge(ie, E.nodeType ? [E] : E);
                        else if (!Ye.test(E)) ie.push(s.createTextNode(E));
                else {
                    for (T = T || be.appendChild(s.createElement("div")), z = (pe.exec(E) || ["", ""])[1].toLowerCase(), G = Ve[z] || Ve._default, T.innerHTML = G[1] + d.htmlPrefilter(E) + G[2], le = G[0]; le--;) T = T.lastChild;
                    d.merge(ie, T.childNodes), T = be.firstChild, T.textContent = ""
                }
                for (be.textContent = "", ce = 0; E = ie[ce++];) {
                    if (p && d.inArray(E, p) > -1) {
                        w && w.push(E);
                        continue
                    }
                    if (Z = Je(E), T = pt(be.appendChild(E), "script"), Z && Ft(T), u)
                        for (le = 0; E = T[le++];) Ne.test(E.type || "") && u.push(E)
                }
                return be
            }
            var Vn = /^([^.]*)(?:\.(.+)|)/;

            function rt() {
                return !0
            }

            function Mn() {
                return !1
            }

            function mi(r, s) {
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
                if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Mn;
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
                    var E, T, z, G, Z, le, be, ie, ce, Ue, st, Fe = he.get(r);
                    if (!!te(r))
                        for (u.handler && (E = u, u = E.handler, w = E.selector), w && d.find.matchesSelector(Kt, w), u.guid || (u.guid = d.guid++), (G = Fe.events) || (G = Fe.events = Object.create(null)), (T = Fe.handle) || (T = Fe.handle = function(zt) {
                                return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                            }), s = (s || "").match(ke) || [""], Z = s.length; Z--;) z = Vn.exec(s[Z]) || [], ce = st = z[1], Ue = (z[2] || "").split(".").sort(), ce && (be = d.event.special[ce] || {}, ce = (w ? be.delegateType : be.bindType) || ce, be = d.event.special[ce] || {}, le = d.extend({
                            type: ce,
                            origType: st,
                            data: p,
                            handler: u,
                            guid: u.guid,
                            selector: w,
                            needsContext: w && d.expr.match.needsContext.test(w),
                            namespace: Ue.join(".")
                        }, E), (ie = G[ce]) || (ie = G[ce] = [], ie.delegateCount = 0, (!be.setup || be.setup.call(r, p, Ue, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), be.add && (be.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? ie.splice(ie.delegateCount++, 0, le) : ie.push(le), d.event.global[ce] = !0)
                },
                remove: function(r, s, u, p, w) {
                    var E, T, z, G, Z, le, be, ie, ce, Ue, st, Fe = he.hasData(r) && he.get(r);
                    if (!(!Fe || !(G = Fe.events))) {
                        for (s = (s || "").match(ke) || [""], Z = s.length; Z--;) {
                            if (z = Vn.exec(s[Z]) || [], ce = st = z[1], Ue = (z[2] || "").split(".").sort(), !ce) {
                                for (ce in G) d.event.remove(r, ce + s[Z], u, p, !0);
                                continue
                            }
                            for (be = d.event.special[ce] || {}, ce = (p ? be.delegateType : be.bindType) || ce, ie = G[ce] || [], z = z[2] && new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = E = ie.length; E--;) le = ie[E], (w || st === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ie.splice(E, 1), le.selector && ie.delegateCount--, be.remove && be.remove.call(r, le));
                            T && !ie.length && ((!be.teardown || be.teardown.call(r, Ue, Fe.handle) === !1) && d.removeEvent(r, ce, Fe.handle), delete G[ce])
                        }
                        d.isEmptyObject(G) && he.remove(r, "handle events")
                    }
                },
                dispatch: function(r) {
                    var s, u, p, w, E, T, z = new Array(arguments.length),
                        G = d.event.fix(r),
                        Z = (he.get(this, "events") || Object.create(null))[G.type] || [],
                        le = d.event.special[G.type] || {};
                    for (z[0] = G, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                    if (G.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, G) === !1)) {
                        for (T = d.event.handlers.call(this, G, Z), s = 0;
                            (w = T[s++]) && !G.isPropagationStopped();)
                            for (G.currentTarget = w.elem, u = 0;
                                (E = w.handlers[u++]) && !G.isImmediatePropagationStopped();)(!G.rnamespace || E.namespace === !1 || G.rnamespace.test(E.namespace)) && (G.handleObj = E, G.data = E.data, p = ((d.event.special[E.origType] || {}).handle || E.handler).apply(w.elem, z), p !== void 0 && (G.result = p) === !1 && (G.preventDefault(), G.stopPropagation()));
                        return le.postDispatch && le.postDispatch.call(this, G), G.result
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
                            return fe.test(s.type) && s.click && J(s, "input") && sn(s, "click", rt), !1
                        },
                        trigger: function(r) {
                            var s = this || r;
                            return fe.test(s.type) && s.click && J(s, "input") && sn(s, "click"), !0
                        },
                        _default: function(r) {
                            var s = r.target;
                            return fe.test(s.type) && s.click && J(s, "input") && he.get(s, "click") || J(s, "a")
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
                    he.get(r, s) === void 0 && d.event.add(r, s, rt);
                    return
                }
                he.set(r, s, !1), d.event.add(r, s, {
                    namespace: !1,
                    handler: function(p) {
                        var w, E, T = he.get(this, s);
                        if (p.isTrigger & 1 && this[s]) {
                            if (T.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                            else if (T = f.call(arguments), he.set(this, s, T), w = u(this, s), this[s](), E = he.get(this, s), T !== E || w ? he.set(this, s, !1) : E = {}, T !== E) return p.stopImmediatePropagation(), p.preventDefault(), E && E.value
                        } else T.length && (he.set(this, s, {
                            value: d.event.trigger(d.extend(T[0], d.Event.prototype), T.slice(1), this)
                        }), p.stopImmediatePropagation())
                    }
                })
            }
            d.removeEvent = function(r, s, u) {
                r.removeEventListener && r.removeEventListener(s, u)
            }, d.Event = function(r, s) {
                if (!(this instanceof d.Event)) return new d.Event(r, s);
                r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? rt : Mn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && d.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[d.expando] = !0
            }, d.Event.prototype = {
                constructor: d.Event,
                isDefaultPrevented: Mn,
                isPropagationStopped: Mn,
                isImmediatePropagationStopped: Mn,
                isSimulated: !1,
                preventDefault: function() {
                    var r = this.originalEvent;
                    this.isDefaultPrevented = rt, r && !this.isSimulated && r.preventDefault()
                },
                stopPropagation: function() {
                    var r = this.originalEvent;
                    this.isPropagationStopped = rt, r && !this.isSimulated && r.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var r = this.originalEvent;
                    this.isImmediatePropagationStopped = rt, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation()
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
                        return sn(this, r, mi), !1
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
                    return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Mn), this.each(function() {
                        d.event.remove(this, r, u, s)
                    })
                }
            });
            var kr = /<script|<style|<link/i,
                Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
                vi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function $i(r, s) {
                return J(r, "table") && J(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
            }

            function yi(r) {
                return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
            }

            function wi(r) {
                return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
            }

            function Fi(r, s) {
                var u, p, w, E, T, z, G;
                if (s.nodeType === 1) {
                    if (he.hasData(r) && (E = he.get(r), G = E.events, G)) {
                        he.remove(s, "handle events");
                        for (w in G)
                            for (u = 0, p = G[w].length; u < p; u++) d.event.add(s, w, G[w][u])
                    }
                    Me.hasData(r) && (T = Me.access(r), z = d.extend({}, T), Me.set(s, z))
                }
            }

            function ji(r, s) {
                var u = s.nodeName.toLowerCase();
                u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
            }

            function mn(r, s, u, p) {
                s = m(s);
                var w, E, T, z, G, Z, le = 0,
                    be = r.length,
                    ie = be - 1,
                    ce = s[0],
                    Ue = re(ce);
                if (Ue || be > 1 && typeof ce == "string" && !K.checkClone && Tr.test(ce)) return r.each(function(st) {
                    var Fe = r.eq(st);
                    Ue && (s[0] = ce.call(this, st, Fe.html())), mn(Fe, s, u, p)
                });
                if (be && (w = In(s, r[0].ownerDocument, !1, r, p), E = w.firstChild, w.childNodes.length === 1 && (w = E), E || p)) {
                    for (T = d.map(pt(w, "script"), yi), z = T.length; le < be; le++) G = w, le !== ie && (G = d.clone(G, !0, !0), z && d.merge(T, pt(G, "script"))), u.call(r[le], G, le);
                    if (z)
                        for (Z = T[T.length - 1].ownerDocument, d.map(T, wi), le = 0; le < z; le++) G = T[le], Ne.test(G.type || "") && !he.access(G, "globalEval") && d.contains(Z, G) && (G.src && (G.type || "").toLowerCase() !== "module" ? d._evalUrl && !G.noModule && d._evalUrl(G.src, {
                            nonce: G.nonce || G.getAttribute("nonce")
                        }, Z) : ae(G.textContent.replace(vi, ""), G, Z))
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
                            if (s = u[he.expando]) {
                                if (s.events)
                                    for (p in s.events) w[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                                u[he.expando] = void 0
                            }
                            u[Me.expando] && (u[Me.expando] = void 0)
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
                        if (typeof s == "string" && !kr.test(s) && !Ve[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
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
            var bi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
                Un = function(r) {
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
                Ci = new RegExp(Ct.join("|"), "i");
            (function() {
                function r() {
                    if (!!Z) {
                        G.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Kt.appendChild(G).appendChild(Z);
                        var le = e.getComputedStyle(Z);
                        u = le.top !== "1%", z = s(le.marginLeft) === 12, Z.style.right = "60%", E = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Kt.removeChild(G), Z = null
                    }
                }

                function s(le) {
                    return Math.round(parseFloat(le))
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
                        var le, be, ie, ce;
                        return T == null && (le = P.createElement("table"), be = P.createElement("tr"), ie = P.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", be.style.cssText = "border:1px solid", be.style.height = "1px", ie.style.height = "9px", ie.style.display = "block", Kt.appendChild(le).appendChild(be).appendChild(ie), ce = e.getComputedStyle(be), T = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === be.offsetHeight, Kt.removeChild(le)), T
                    }
                }))
            })();

            function et(r, s, u) {
                var p, w, E, T, z = r.style;
                return u = u || Un(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = d.style(r, s)), !K.pixelBoxStyles() && bi.test(T) && Ci.test(s) && (p = z.width, w = z.minWidth, E = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = E)), T !== void 0 ? T + "" : T
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
            var o = ["Webkit", "Moz", "ms"],
                x = P.createElement("div").style,
                O = {};

            function Q(r) {
                for (var s = r[0].toUpperCase() + r.slice(1), u = o.length; u--;)
                    if (r = o[u] + s, r in x) return r
            }

            function Ce(r) {
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
                qn = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Bn(r, s, u) {
                var p = wt.exec(s);
                return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
            }

            function Wn(r, s, u, p, w, E) {
                var T = s === "width" ? 1 : 0,
                    z = 0,
                    G = 0;
                if (u === (p ? "border" : "content")) return 0;
                for (; T < 4; T += 2) u === "margin" && (G += d.css(r, u + Ct[T], !0, w)), p ? (u === "content" && (G -= d.css(r, "padding" + Ct[T], !0, w)), u !== "margin" && (G -= d.css(r, "border" + Ct[T] + "Width", !0, w))) : (G += d.css(r, "padding" + Ct[T], !0, w), u !== "padding" ? G += d.css(r, "border" + Ct[T] + "Width", !0, w) : z += d.css(r, "border" + Ct[T] + "Width", !0, w));
                return !p && E >= 0 && (G += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - E - G - z - .5)) || 0), G
            }

            function Ar(r, s, u) {
                var p = Un(r),
                    w = !K.boxSizingReliable() || u,
                    E = w && d.css(r, "boxSizing", !1, p) === "border-box",
                    T = E,
                    z = et(r, s, p),
                    G = "offset" + s[0].toUpperCase() + s.slice(1);
                if (bi.test(z)) {
                    if (!u) return z;
                    z = "auto"
                }
                return (!K.boxSizingReliable() && E || !K.reliableTrDimensions() && J(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (E = d.css(r, "boxSizing", !1, p) === "border-box", T = G in r, T && (z = r[G])), z = parseFloat(z) || 0, z + Wn(r, s, u || (E ? "border" : "content"), T, p, z) + "px"
            }
            d.extend({
                cssHooks: {
                    opacity: {
                        get: function(r, s) {
                            if (s) {
                                var u = et(r, "opacity");
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
                        if (G || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                            if (E = typeof u, E === "string" && (w = wt.exec(u)) && w[1] && (u = N(r, s, w), E = "number"), u == null || u !== u) return;
                            E === "number" && !G && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !K.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (G ? Z.setProperty(s, u) : Z[s] = u)
                        } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                    }
                },
                css: function(r, s, u, p) {
                    var w, E, T, z = B(s),
                        G = It.test(s);
                    return G || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = et(r, s, p)), w === "normal" && s in qn && (w = qn[s]), u === "" || u ? (E = parseFloat(w), u === !0 || isFinite(E) ? E || 0 : w) : w
                }
            }), d.each(["height", "width"], function(r, s) {
                d.cssHooks[s] = {
                    get: function(u, p, w) {
                        if (p) return qe.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Gi(u, Wt, function() {
                            return Ar(u, s, w)
                        }) : Ar(u, s, w)
                    },
                    set: function(u, p, w) {
                        var E, T = Un(u),
                            z = !K.scrollboxSize() && T.position === "absolute",
                            G = z || w,
                            Z = G && d.css(u, "boxSizing", !1, T) === "border-box",
                            le = w ? Wn(u, s, w, Z, T) : 0;
                        return Z && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Wn(u, s, "border", !1, T) - .5)), le && (E = wt.exec(p)) && (E[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Bn(u, p, le)
                    }
                }
            }), d.cssHooks.marginLeft = y(K.reliableMarginLeft, function(r, s) {
                if (s) return (parseFloat(et(r, "marginLeft")) || r.getBoundingClientRect().left - Gi(r, {
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
                        for (var p = 0, w = {}, E = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) w[r + Ct[p] + s] = E[p] || E[p - 2] || E[0];
                        return w
                    }
                }, r !== "margin" && (d.cssHooks[r + s].set = Bn)
            }), d.fn.extend({
                css: function(r, s) {
                    return g(this, function(u, p, w) {
                        var E, T, z = {},
                            G = 0;
                        if (Array.isArray(p)) {
                            for (E = Un(u), T = p.length; G < T; G++) z[p[G]] = d.css(u, p[G], !1, E);
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
                        d.fx.step[r.prop] ? d.fx.step[r.prop](r) : r.elem.nodeType === 1 && (d.cssHooks[r.prop] || r.elem.style[Ce(r.prop)] != null) ? d.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
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
            var jt, Hi, Co = /^(?:toggle|show|hide)$/,
                xo = /queueHooks$/;

            function Or() {
                Hi && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, d.fx.interval), d.fx.tick())
            }

            function Rr() {
                return e.setTimeout(function() {
                    jt = void 0
                }), jt = Date.now()
            }

            function Ui(r, s) {
                var u, p = 0,
                    w = {
                        height: r
                    };
                for (s = s ? 1 : 0; p < 4; p += 2 - s) u = Ct[p], w["margin" + u] = w["padding" + u] = r;
                return s && (w.opacity = w.width = r), w
            }

            function gs(r, s, u) {
                for (var p, w = (bn.tweeners[s] || []).concat(bn.tweeners["*"]), E = 0, T = w.length; E < T; E++)
                    if (p = w[E].call(u, s, r)) return p
            }

            function Eo(r, s, u) {
                var p, w, E, T, z, G, Z, le, be = "width" in s || "height" in s,
                    ie = this,
                    ce = {},
                    Ue = r.style,
                    st = r.nodeType && F(r),
                    Fe = he.get(r, "fxshow");
                u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                    T.unqueued || z()
                }), T.unqueued++, ie.always(function() {
                    ie.always(function() {
                        T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                    })
                }));
                for (p in s)
                    if (w = s[p], Co.test(w)) {
                        if (delete s[p], E = E || w === "toggle", w === (st ? "hide" : "show"))
                            if (w === "show" && Fe && Fe[p] !== void 0) st = !0;
                            else continue;
                        ce[p] = Fe && Fe[p] || d.style(r, p)
                    } if (G = !d.isEmptyObject(s), !(!G && d.isEmptyObject(ce))) {
                    be && r.nodeType === 1 && (u.overflow = [Ue.overflow, Ue.overflowX, Ue.overflowY], Z = Fe && Fe.display, Z == null && (Z = he.get(r, "display")), le = d.css(r, "display"), le === "none" && (Z ? le = Z : (q([r], !0), Z = r.style.display || Z, le = d.css(r, "display"), q([r]))), (le === "inline" || le === "inline-block" && Z != null) && d.css(r, "float") === "none" && (G || (ie.done(function() {
                        Ue.display = Z
                    }), Z == null && (le = Ue.display, Z = le === "none" ? "" : le)), Ue.display = "inline-block")), u.overflow && (Ue.overflow = "hidden", ie.always(function() {
                        Ue.overflow = u.overflow[0], Ue.overflowX = u.overflow[1], Ue.overflowY = u.overflow[2]
                    })), G = !1;
                    for (p in ce) G || (Fe ? "hidden" in Fe && (st = Fe.hidden) : Fe = he.access(r, "fxshow", {
                        display: Z
                    }), E && (Fe.hidden = !st), st && q([r], !0), ie.done(function() {
                        st || q([r]), he.remove(r, "fxshow");
                        for (p in ce) d.style(r, p, ce[p])
                    })), G = gs(st ? Fe[p] : 0, p, ie), p in Fe || (Fe[p] = G.start, st && (G.end = G.start, G.start = 0))
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
                        for (var be = jt || Rr(), ie = Math.max(0, Z.startTime + Z.duration - be), ce = ie / Z.duration || 0, Ue = 1 - ce, st = 0, Fe = Z.tweens.length; st < Fe; st++) Z.tweens[st].run(Ue);
                        return z.notifyWith(r, [Z, Ue, ie]), Ue < 1 && Fe ? ie : (Fe || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
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
                        createTween: function(be, ie) {
                            var ce = d.Tween(r, Z.opts, be, ie, Z.opts.specialEasing[be] || Z.opts.easing);
                            return Z.tweens.push(ce), ce
                        },
                        stop: function(be) {
                            var ie = 0,
                                ce = be ? Z.tweens.length : 0;
                            if (w) return this;
                            for (w = !0; ie < ce; ie++) Z.tweens[ie].run(1);
                            return be ? (z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z, be])) : z.rejectWith(r, [Z, be]), this
                        }
                    }),
                    le = Z.props;
                for (ms(le, Z.opts.specialEasing); E < T; E++)
                    if (p = bn.prefilters[E].call(Z, r, le, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
                return d.map(le, gs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(G, {
                    elem: r,
                    anim: Z,
                    queue: Z.opts.queue
                })), Z
            }
            d.Animation = d.extend(bn, {
                    tweeners: {
                        "*": [function(r, s) {
                            var u = this.createTween(r, s);
                            return N(u.elem, r, wt.exec(s), u), u
                        }]
                    },
                    tweener: function(r, s) {
                        re(r) ? (s = r, r = ["*"]) : r = r.match(ke);
                        for (var u, p = 0, w = r.length; p < w; p++) u = r[p], bn.tweeners[u] = bn.tweeners[u] || [], bn.tweeners[u].unshift(s)
                    },
                    prefilters: [Eo],
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
                                (w || he.get(this, "finish")) && z.stop(!0)
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
                                z = he.get(this);
                            if (E) z[E] && z[E].stop && p(z[E]);
                            else
                                for (E in z) z[E] && z[E].stop && xo.test(E) && p(z[E]);
                            for (E = T.length; E--;) T[E].elem === this && (r == null || T[E].queue === r) && (T[E].anim.stop(u), w = !1, T.splice(E, 1));
                            (w || !u) && d.dequeue(this, r)
                        })
                    },
                    finish: function(r) {
                        return r !== !1 && (r = r || "fx"), this.each(function() {
                            var s, u = he.get(this),
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
                        return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Ui(s, !0), p, w, E)
                    }
                }), d.each({
                    slideDown: Ui("show"),
                    slideUp: Ui("hide"),
                    slideToggle: Ui("toggle"),
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
                    Hi || (Hi = !0, Or())
                }, d.fx.stop = function() {
                    Hi = null
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
            var Ir, xi = d.expr.attrHandle;
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
                        w = s && s.match(ke);
                    if (w && r.nodeType === 1)
                        for (; u = w[p++];) r.removeAttribute(u)
                }
            }), Ir = {
                set: function(r, s, u) {
                    return s === !1 ? d.removeAttr(r, u) : r.setAttribute(u, u), u
                }
            }, d.each(d.expr.match.bool.source.match(/\w+/g), function(r, s) {
                var u = xi[s] || d.find.attr;
                xi[s] = function(p, w, E) {
                    var T, z, G = w.toLowerCase();
                    return E || (z = xi[G], xi[G] = T, T = u(p, w, E) != null ? G : null, xi[G] = z), T
                }
            });
            var _o = /^(?:input|select|textarea|button)$/i,
                So = /^(?:a|area)$/i;
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
                            return s ? parseInt(s, 10) : _o.test(r.nodeName) || So.test(r.nodeName) && r.href ? 0 : -1
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

            function Xn(r) {
                var s = r.match(ke) || [];
                return s.join(" ")
            }

            function Yn(r) {
                return r.getAttribute && r.getAttribute("class") || ""
            }

            function Mr(r) {
                return Array.isArray(r) ? r : typeof r == "string" ? r.match(ke) || [] : []
            }
            d.fn.extend({
                addClass: function(r) {
                    var s, u, p, w, E, T, z, G = 0;
                    if (re(r)) return this.each(function(Z) {
                        d(this).addClass(r.call(this, Z, Yn(this)))
                    });
                    if (s = Mr(r), s.length) {
                        for (; u = this[G++];)
                            if (w = Yn(u), p = u.nodeType === 1 && " " + Xn(w) + " ", p) {
                                for (T = 0; E = s[T++];) p.indexOf(" " + E + " ") < 0 && (p += E + " ");
                                z = Xn(p), w !== z && u.setAttribute("class", z)
                            }
                    }
                    return this
                },
                removeClass: function(r) {
                    var s, u, p, w, E, T, z, G = 0;
                    if (re(r)) return this.each(function(Z) {
                        d(this).removeClass(r.call(this, Z, Yn(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if (s = Mr(r), s.length) {
                        for (; u = this[G++];)
                            if (w = Yn(u), p = u.nodeType === 1 && " " + Xn(w) + " ", p) {
                                for (T = 0; E = s[T++];)
                                    for (; p.indexOf(" " + E + " ") > -1;) p = p.replace(" " + E + " ", " ");
                                z = Xn(p), w !== z && u.setAttribute("class", z)
                            }
                    }
                    return this
                },
                toggleClass: function(r, s) {
                    var u = typeof r,
                        p = u === "string" || Array.isArray(r);
                    return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(w) {
                        d(this).toggleClass(r.call(this, w, Yn(this), s), s)
                    }) : this.each(function() {
                        var w, E, T, z;
                        if (p)
                            for (E = 0, T = d(this), z = Mr(r); w = z[E++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                        else(r === void 0 || u === "boolean") && (w = Yn(this), w && he.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : he.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(r) {
                    var s, u, p = 0;
                    for (s = " " + r + " "; u = this[p++];)
                        if (u.nodeType === 1 && (" " + Xn(Yn(u)) + " ").indexOf(s) > -1) return !0;
                    return !1
                }
            });
            var ko = /\r/g;
            d.fn.extend({
                val: function(r) {
                    var s, u, p, w = this[0];
                    return arguments.length ? (p = re(r), this.each(function(E) {
                        var T;
                        this.nodeType === 1 && (p ? T = r.call(this, E, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                            return z == null ? "" : z + ""
                        })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                    })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(ko, "") : u == null ? "" : u)) : void 0
                }
            }), d.extend({
                valHooks: {
                    option: {
                        get: function(r) {
                            var s = d.find.attr(r, "value");
                            return s != null ? s : Xn(d.text(r))
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
            var Dr = /^(?:focusinfocus|focusoutblur)$/,
                Kn = function(r) {
                    r.stopPropagation()
                };
            d.extend(d.event, {
                trigger: function(r, s, u, p) {
                    var w, E, T, z, G, Z, le, be, ie = [u || P],
                        ce = V.call(r, "type") ? r.type : r,
                        Ue = V.call(r, "namespace") ? r.namespace.split(".") : [];
                    if (E = be = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Dr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (Ue = ce.split("."), ce = Ue.shift(), Ue.sort()), G = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ue.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                        if (!p && !le.noBubble && !v(u)) {
                            for (z = le.delegateType || ce, Dr.test(z + ce) || (E = E.parentNode); E; E = E.parentNode) ie.push(E), T = E;
                            T === (u.ownerDocument || P) && ie.push(T.defaultView || T.parentWindow || e)
                        }
                        for (w = 0;
                            (E = ie[w++]) && !r.isPropagationStopped();) be = E, r.type = w > 1 ? z : le.bindType || ce, Z = (he.get(E, "events") || Object.create(null))[r.type] && he.get(E, "handle"), Z && Z.apply(E, s), Z = G && E[G], Z && Z.apply && te(E) && (r.result = Z.apply(E, s), r.result === !1 && r.preventDefault());
                        return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ie.pop(), s) === !1) && te(u) && G && re(u[ce]) && !v(u) && (T = u[G], T && (u[G] = null), d.event.triggered = ce, r.isPropagationStopped() && be.addEventListener(ce, Kn), u[ce](), r.isPropagationStopped() && be.removeEventListener(ce, Kn), d.event.triggered = void 0, T && (u[G] = T)), r.result
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
                            w = he.access(p, s);
                        w || p.addEventListener(r, u, !0), he.access(p, s, (w || 0) + 1)
                    },
                    teardown: function() {
                        var p = this.ownerDocument || this.document || this,
                            w = he.access(p, s) - 1;
                        w ? he.access(p, s, w) : (p.removeEventListener(r, u, !0), he.remove(p, s))
                    }
                }
            });
            var Ei = e.location,
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
            var To = /\[\]$/,
                vs = /\r?\n/g,
                Ao = /^(?:submit|button|image|reset|file)$/i,
                Oo = /^(?:input|select|textarea|keygen)/i;

            function Pr(r, s, u, p) {
                var w;
                if (Array.isArray(s)) d.each(s, function(E, T) {
                    u || To.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? E : "") + "]", T, u, p)
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
                        return this.name && !d(this).is(":disabled") && Oo.test(this.nodeName) && !Ao.test(r) && (this.checked || !fe.test(r))
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
            var Ro = /%20/g,
                Io = /#.*$/,
                Mo = /([?&])_=[^&]*/,
                Jn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                ys = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Do = /^(?:GET|HEAD)$/,
                Lo = /^\/\//,
                ws = {},
                Nr = {},
                bs = "*/".concat("*"),
                Vr = P.createElement("a");
            Vr.href = Ei.href;

            function Cs(r) {
                return function(s, u) {
                    typeof s != "string" && (u = s, s = "*");
                    var p, w = 0,
                        E = s.toLowerCase().match(ke) || [];
                    if (re(u))
                        for (; p = E[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
                }
            }

            function xs(r, s, u, p) {
                var w = {},
                    E = r === Nr;

                function T(z) {
                    var G;
                    return w[z] = !0, d.each(r[z] || [], function(Z, le) {
                        var be = le(s, u, p);
                        if (typeof be == "string" && !E && !w[be]) return s.dataTypes.unshift(be), T(be), !1;
                        if (E) return !(G = be)
                    }), G
                }
                return T(s.dataTypes[0]) || !w["*"] && T("*")
            }

            function Br(r, s) {
                var u, p, w = d.ajaxSettings.flatOptions || {};
                for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
                return p && d.extend(!0, r, p), r
            }

            function Po(r, s, u) {
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

            function No(r, s, u, p) {
                var w, E, T, z, G, Z = {},
                    le = r.dataTypes.slice();
                if (le[1])
                    for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
                for (E = le.shift(); E;)
                    if (r.responseFields[E] && (u[r.responseFields[E]] = s), !G && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), G = E, E = le.shift(), E) {
                        if (E === "*") E = G;
                        else if (G !== "*" && G !== E) {
                            if (T = Z[G + " " + E] || Z["* " + E], !T) {
                                for (w in Z)
                                    if (z = w.split(" "), z[1] === E && (T = Z[G + " " + z[0]] || Z["* " + z[0]], T)) {
                                        T === !0 ? T = Z[w] : Z[w] !== !0 && (E = z[0], le.unshift(z[1]));
                                        break
                                    }
                            }
                            if (T !== !0)
                                if (T && r.throws) s = T(s);
                                else try {
                                    s = T(s)
                                } catch (be) {
                                    return {
                                        state: "parsererror",
                                        error: T ? be : "No conversion from " + G + " to " + E
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
                    url: Ei.href,
                    type: "GET",
                    isLocal: ys.test(Ei.protocol),
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
                    var u, p, w, E, T, z, G, Z, le, be, ie = d.ajaxSetup({}, s),
                        ce = ie.context || ie,
                        Ue = ie.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                        st = d.Deferred(),
                        Fe = d.Callbacks("once memory"),
                        zt = ie.statusCode || {},
                        Nt = {},
                        un = {},
                        _t = "canceled",
                        tt = {
                            readyState: 0,
                            getResponseHeader: function(ft) {
                                var Mt;
                                if (G) {
                                    if (!E)
                                        for (E = {}; Mt = Jn.exec(w);) E[Mt[1].toLowerCase() + " "] = (E[Mt[1].toLowerCase() + " "] || []).concat(Mt[2]);
                                    Mt = E[ft.toLowerCase() + " "]
                                }
                                return Mt == null ? null : Mt.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return G ? w : null
                            },
                            setRequestHeader: function(ft, Mt) {
                                return G == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Nt[ft] = Mt), this
                            },
                            overrideMimeType: function(ft) {
                                return G == null && (ie.mimeType = ft), this
                            },
                            statusCode: function(ft) {
                                var Mt;
                                if (ft)
                                    if (G) tt.always(ft[tt.status]);
                                    else
                                        for (Mt in ft) zt[Mt] = [zt[Mt], ft[Mt]];
                                return this
                            },
                            abort: function(ft) {
                                var Mt = ft || _t;
                                return u && u.abort(Mt), on(0, Mt), this
                            }
                        };
                    if (st.promise(tt), ie.url = ((r || ie.url || Ei.href) + "").replace(Lo, Ei.protocol + "//"), ie.type = s.method || s.type || ie.method || ie.type, ie.dataTypes = (ie.dataType || "*").toLowerCase().match(ke) || [""], ie.crossDomain == null) {
                        z = P.createElement("a");
                        try {
                            z.href = ie.url, z.href = z.href, ie.crossDomain = Vr.protocol + "//" + Vr.host != z.protocol + "//" + z.host
                        } catch {
                            ie.crossDomain = !0
                        }
                    }
                    if (ie.data && ie.processData && typeof ie.data != "string" && (ie.data = d.param(ie.data, ie.traditional)), xs(ws, ie, s, tt), G) return tt;
                    Z = d.event && ie.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ie.type = ie.type.toUpperCase(), ie.hasContent = !Do.test(ie.type), p = ie.url.replace(Io, ""), ie.hasContent ? ie.data && ie.processData && (ie.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ie.data = ie.data.replace(Ro, "+")) : (be = ie.url.slice(p.length), ie.data && (ie.processData || typeof ie.data == "string") && (p += (qi.test(p) ? "&" : "?") + ie.data, delete ie.data), ie.cache === !1 && (p = p.replace(Mo, "$1"), be = (qi.test(p) ? "&" : "?") + "_=" + Lr.guid++ + be), ie.url = p + be), ie.ifModified && (d.lastModified[p] && tt.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && tt.setRequestHeader("If-None-Match", d.etag[p])), (ie.data && ie.hasContent && ie.contentType !== !1 || s.contentType) && tt.setRequestHeader("Content-Type", ie.contentType), tt.setRequestHeader("Accept", ie.dataTypes[0] && ie.accepts[ie.dataTypes[0]] ? ie.accepts[ie.dataTypes[0]] + (ie.dataTypes[0] !== "*" ? ", " + bs + "; q=0.01" : "") : ie.accepts["*"]);
                    for (le in ie.headers) tt.setRequestHeader(le, ie.headers[le]);
                    if (ie.beforeSend && (ie.beforeSend.call(ce, tt, ie) === !1 || G)) return tt.abort();
                    if (_t = "abort", Fe.add(ie.complete), tt.done(ie.success), tt.fail(ie.error), u = xs(Nr, ie, s, tt), !u) on(-1, "No Transport");
                    else {
                        if (tt.readyState = 1, Z && Ue.trigger("ajaxSend", [tt, ie]), G) return tt;
                        ie.async && ie.timeout > 0 && (T = e.setTimeout(function() {
                            tt.abort("timeout")
                        }, ie.timeout));
                        try {
                            G = !1, u.send(Nt, on)
                        } catch (ft) {
                            if (G) throw ft;
                            on(-1, ft)
                        }
                    }

                    function on(ft, Mt, Si, Wi) {
                        var hn, Qn, Zn, an, Dn, vn = Mt;
                        G || (G = !0, T && e.clearTimeout(T), u = void 0, w = Wi || "", tt.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, Si && (an = Po(ie, tt, Si)), !hn && d.inArray("script", ie.dataTypes) > -1 && d.inArray("json", ie.dataTypes) < 0 && (ie.converters["text script"] = function() {}), an = No(ie, an, tt, hn), hn ? (ie.ifModified && (Dn = tt.getResponseHeader("Last-Modified"), Dn && (d.lastModified[p] = Dn), Dn = tt.getResponseHeader("etag"), Dn && (d.etag[p] = Dn)), ft === 204 || ie.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Qn = an.data, Zn = an.error, hn = !Zn)) : (Zn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), tt.status = ft, tt.statusText = (Mt || vn) + "", hn ? st.resolveWith(ce, [Qn, vn, tt]) : st.rejectWith(ce, [tt, vn, Zn]), tt.statusCode(zt), zt = void 0, Z && Ue.trigger(hn ? "ajaxSuccess" : "ajaxError", [tt, ie, hn ? Qn : Zn]), Fe.fireWith(ce, [tt, vn]), Z && (Ue.trigger("ajaxComplete", [tt, ie]), --d.active || d.event.trigger("ajaxStop")))
                    }
                    return tt
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
            var Vo = {
                    0: 200,
                    1223: 204
                },
                _i = d.ajaxSettings.xhr();
            K.cors = !!_i && "withCredentials" in _i, K.ajax = _i = !!_i, d.ajaxTransport(function(r) {
                var s, u;
                if (K.cors || _i && !r.crossDomain) return {
                    send: function(p, w) {
                        var E, T = r.xhr();
                        if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                            for (E in r.xhrFields) T[E] = r.xhrFields[E];
                        r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                        for (E in p) T.setRequestHeader(E, p[E]);
                        s = function(z) {
                            return function() {
                                s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(Vo[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
                return z > -1 && (p = Xn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
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
                    var p, w, E, T, z, G, Z, le = d.css(r, "position"),
                        be = d(r),
                        ie = {};
                    le === "static" && (r.style.position = "relative"), z = be.offset(), E = d.css(r, "top"), G = d.css(r, "left"), Z = (le === "absolute" || le === "fixed") && (E + G).indexOf("auto") > -1, Z ? (p = be.position(), T = p.top, w = p.left) : (T = parseFloat(E) || 0, w = parseFloat(G) || 0), re(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (ie.top = s.top - z.top + T), s.left != null && (ie.left = s.left - z.left + w), "using" in s ? s.using.call(r, ie) : be.css(ie)
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
                        if (v(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[E];
                        z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[E] = T
                    }, r, p, arguments.length)
                }
            }), d.each(["top", "left"], function(r, s) {
                d.cssHooks[s] = y(K.pixelPosition, function(u, p) {
                    if (p) return p = et(u, s), bi.test(p) ? d(u).position()[s] + "px" : p
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
                        return g(this, function(G, Z, le) {
                            var be;
                            return v(G) ? p.indexOf("outer") === 0 ? G["inner" + r] : G.document.documentElement["client" + r] : G.nodeType === 9 ? (be = G.documentElement, Math.max(G.body["scroll" + r], be["scroll" + r], G.body["offset" + r], be["offset" + r], be["client" + r])) : le === void 0 ? d.css(G, Z, z) : d.style(G, Z, le, z)
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
            }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = J, d.isFunction = re, d.isWindow = v, d.camelCase = B, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
                var s = d.type(r);
                return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
            }, d.trim = function(r) {
                return r == null ? "" : (r + "").replace(Es, "")
            };
            var Bo = e.jQuery,
                $o = e.$;
            return d.noConflict = function(r) {
                return e.$ === d && (e.$ = $o), r && e.jQuery === d && (e.jQuery = Bo), d
            }, typeof n > "u" && (e.jQuery = e.$ = d), d
        })
    }(Qo)), Qo.exports
}
var Ie = Ec(),
    Zo = {},
    yl;

function ao() {
    return yl || (yl = 1, function(t) {
        (function(e) {
            var n = typeof self == "object" && self.self === self && self || typeof yt == "object" && yt.global === yt && yt; {
                var i = Ni.exports,
                    a;
                try {
                    a = Ec()
                } catch {}
                e(n, t, i, a)
            }
        })(function(e, n, i, a) {
            var f = e.Backbone,
                m = Array.prototype.slice;
            n.VERSION = "1.3.3", n.$ = a, n.noConflict = function() {
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
                                var S = m.call(arguments);
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
                    return i.isFunction(_) ? _ : i.isObject(_) && !l._isModel(_) ? M(_) : i.isString(_) ? function(g) {
                        return g.get(_)
                    } : _
                },
                M = function(_) {
                    var l = i.matches(_);
                    return function(g) {
                        return l(g.attributes)
                    }
                },
                V = n.Events = {},
                U = /\s+/,
                ne = function(_, l, g, S, R) {
                    var L = 0,
                        B;
                    if (g && typeof g == "object")
                        for (S !== void 0 && ("context" in R) && R.context === void 0 && (R.context = S), B = i.keys(g); L < B.length; L++) l = ne(_, l, B[L], g[B[L]], R);
                    else if (g && U.test(g))
                        for (B = g.split(U); L < B.length; L++) l = _(l, B[L], S, R);
                    else l = _(l, g, S, R);
                    return l
                };
            V.on = function(_, l, g) {
                return K(this, _, l, g)
            };
            var K = function(_, l, g, S, R) {
                if (_._events = ne(re, _._events || {}, l, g, {
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
                return this._events ? (this._events = ne(v, this._events, _, l, {
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
            var v = function(_, l, g, S) {
                if (!!_) {
                    var R = 0,
                        L, B = S.context,
                        te = S.listeners;
                    if (!l && !g && !B) {
                        for (var Se = i.keys(te); R < Se.length; R++) L = te[Se[R]], delete te[L.id], delete L.listeningTo[L.objId];
                        return
                    }
                    for (var he = l ? [l] : i.keys(_); R < he.length; R++) {
                        l = he[R];
                        var Me = _[l];
                        if (!Me) break;
                        for (var De = [], it = 0; it < Me.length; it++) {
                            var xt = Me[it];
                            g && g !== xt.callback && g !== xt.callback._callback || B && B !== xt.context ? De.push(xt) : (L = xt.listening, L && --L.count === 0 && (delete te[L.id], delete L.listeningTo[L.objId]))
                        }
                        De.length ? _[l] = De : delete _[l]
                    }
                    return _
                }
            };
            V.once = function(_, l, g) {
                var S = ne(P, {}, _, l, i.bind(this.off, this));
                return typeof _ == "string" && g == null && (l = void 0), this.on(S, l, g)
            }, V.listenToOnce = function(_, l, g) {
                var S = ne(P, {}, l, g, i.bind(this.stopListening, this, _));
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
                return ne(W, this._events, _, void 0, g), this
            };
            var W = function(_, l, g, S) {
                    if (_) {
                        var R = _[l],
                            L = _.all;
                        R && L && (L = L.slice()), R && ae(R, S), L && ae(L, [l].concat(S))
                    }
                    return _
                },
                ae = function(_, l) {
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
                    var Se = this.attributes,
                        he = this.changed,
                        Me = this._previousAttributes;
                    for (var De in S) l = S[De], i.isEqual(Se[De], l) || B.push(De), i.isEqual(Me[De], l) ? delete he[De] : he[De] = l, R ? delete Se[De] : Se[De] = l;
                    if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !L) {
                        B.length && (this._pending = g);
                        for (var it = 0; it < B.length; it++) this.trigger("change:" + B[it], this, Se[B[it]], g)
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
                    }, Ut(this, _), this.sync("read", this, _)
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
                    g.success = function(Me) {
                        L.attributes = te;
                        var De = g.parse ? L.parse(Me, g) : Me;
                        if (R && (De = i.extend({}, S, De)), De && !L.set(De, g)) return !1;
                        B && B.call(g.context, L, Me, g), L.trigger("sync", L, Me, g)
                    }, Ut(this, g), S && R && (this.attributes = i.extend({}, te, S));
                    var Se = this.isNew() ? "create" : g.patch ? "patch" : "update";
                    Se === "patch" && !g.attrs && (g.attrs = S);
                    var he = this.sync(Se, this, g);
                    return this.attributes = te, he
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
                    return this.isNew() ? i.defer(_.success) : (Ut(this, _), L = this.sync("delete", this, _)), S || R(), L
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
            var ve = {
                keys: 1,
                values: 1,
                pairs: 1,
                invert: 1,
                pick: 0,
                omit: 0,
                chain: 1,
                isEmpty: 1
            };
            k(se, ve, "attributes");
            var d = n.Collection = function(_, l) {
                    l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), _ && this.reset(_, i.extend({
                        silent: !0
                    }, l))
                },
                Ee = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                Ae = {
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
                    }, l, Ae))
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
                        l = i.extend({}, Ee, l), l.parse && !this._isModel(_) && (_ = this.parse(_, l) || []);
                        var g = !i.isArray(_);
                        _ = g ? [_] : _.slice();
                        var S = l.at;
                        S != null && (S = +S), S > this.length && (S = this.length), S < 0 && (S += this.length + 1);
                        var R = [],
                            L = [],
                            B = [],
                            te = [],
                            Se = {},
                            he = l.add,
                            Me = l.merge,
                            De = l.remove,
                            it = !1,
                            xt = this.comparator && S == null && l.sort !== !1,
                            rn = i.isString(this.comparator) ? this.comparator : null,
                            ct, wt;
                        for (wt = 0; wt < _.length; wt++) {
                            ct = _[wt];
                            var Ct = this.get(ct);
                            if (Ct) {
                                if (Me && ct !== Ct) {
                                    var Kt = this._isModel(ct) ? ct.attributes : ct;
                                    l.parse && (Kt = Ct.parse(Kt, l)), Ct.set(Kt, l), B.push(Ct), xt && !it && (it = Ct.hasChanged(rn))
                                }
                                Se[Ct.cid] || (Se[Ct.cid] = !0, R.push(Ct)), _[wt] = Ct
                            } else he && (ct = _[wt] = this._prepareModel(ct, l), ct && (L.push(ct), this._addReference(ct, l), Se[ct.cid] = !0, R.push(ct)))
                        }
                        if (De) {
                            for (wt = 0; wt < this.length; wt++) ct = this.models[wt], Se[ct.cid] || te.push(ct);
                            te.length && this._removeModels(te, l)
                        }
                        var Je = !1,
                            Lt = !xt && he && De;
                        if (R.length && Lt ? (Je = this.length !== R.length || i.some(this.models, function(F, N) {
                                return F !== R[N]
                            }), this.models.length = 0, Pe(this.models, R, 0), this.length = this.models.length) : L.length && (xt && (it = !0), Pe(this.models, L, S == null ? this.length : S), this.length = this.models.length), it && this.sort({
                                silent: !0
                            }), !l.silent) {
                            for (wt = 0; wt < L.length; wt++) S != null && (l.index = S + wt), ct = L[wt], ct.trigger("add", ct, this, l);
                            (it || Je) && this.trigger("sort", this, l), (L.length || te.length || B.length) && (l.changes = {
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
                    return m.apply(this.models, arguments)
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
                    }, Ut(this, _), this.sync("read", this, _)
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
                var S = H[_];
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
                    g.beforeSend = function(Se) {
                        if (Se.setRequestHeader("X-HTTP-Method-Override", S), L) return L.apply(this, arguments)
                    }
                }
                R.type !== "GET" && !g.emulateJSON && (R.processData = !1);
                var B = g.error;
                g.error = function(Se, he, Me) {
                    g.textStatus = he, g.errorThrown = Me, B && B.call(g.context, Se, he, Me)
                };
                var te = g.xhr = n.ajax(i.extend(R, g));
                return l.trigger("request", l, te, g), te
            };
            var H = {
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
                Te = /\((.*?)\)/g,
                we = /(\(\?)?:\w+/g,
                ye = /\*\w+/g,
                ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
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
                    return _ = _.replace(ue, "\\$&").replace(Te, "(?:$1)?").replace(we, function(l, g) {
                        return g ? l : "([^/?]+)"
                    }).replace(ye, "([^?]*?)"), new RegExp("^" + _ + "(?:\\?([\\s\\S]*))?$")
                },
                _extractParameters: function(_, l) {
                    var g = _.exec(l).slice(1);
                    return i.map(g, function(S, R) {
                        return R === g.length - 1 ? S || null : S ? decodeURIComponent(S) : null
                    })
                }
            });
            var _e = n.History = function() {
                    this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
                },
                ke = /^[#\/]|\s+$/g,
                $e = /^\/+|\/+$/g,
                Ke = /#.*$/;
            _e.started = !1, i.extend(_e.prototype, V, {
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
                    return _ == null && (this._usePushState || !this._wantsHashChange ? _ = this.getPath() : _ = this.getHash()), _.replace(ke, "")
                },
                start: function(_) {
                    if (_e.started) throw new Error("Backbone.history has already been started");
                    if (_e.started = !0, this.options = i.extend({
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
                    this._usePushState ? _("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && _("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), _e.started = !1
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
                    if (!_e.started) return !1;
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
            }), n.history = new _e;
            var dt = function(_, l) {
                var g = this,
                    S;
                return _ && i.has(_, "constructor") ? S = _.constructor : S = function() {
                    return g.apply(this, arguments)
                }, i.extend(S, g, l), S.prototype = i.create(g.prototype, _), S.prototype.constructor = S, S.__super__ = g.prototype, S
            };
            se.extend = d.extend = oe.extend = Be.extend = _e.extend = dt;
            var Bt = function() {
                    throw new Error('A "url" property or function must be specified')
                },
                Ut = function(_, l) {
                    var g = l.error;
                    l.error = function(S) {
                        g && g.call(l.context, _, S, l), _.trigger("error", _, S, l)
                    }
                };
            return n
        })
    }(Zo)), Zo
}
var at = ao(),
    _c = {
        exports: {}
    },
    ea = {
        exports: {}
    },
    wl;

function xh() {
    return wl || (wl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Ni.exports, ao())
        })(yt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                    return typeof v
                } : function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol ? "symbol" : typeof v
                },
                f = i.Radio,
                m = i.Radio = {};
            m.VERSION = "2.0.0", m.noConflict = function() {
                return i.Radio = f, this
            }, m.DEBUG = !1, m._debugText = function(v, P, W) {
                return v + (W ? " on the " + W + " channel" : "") + ': "' + P + '"'
            }, m.debugLog = function(v, P, W) {
                m.DEBUG && console && console.warn && console.warn(m._debugText(v, P, W))
            };
            var b = /\s+/;
            m._eventsApi = function(v, P, W, ae) {
                if (!W) return !1;
                var se = {};
                if ((typeof W > "u" ? "undefined" : a(W)) === "object") {
                    for (var ve in W) {
                        var d = v[P].apply(v, [ve, W[ve]].concat(ae));
                        b.test(ve) ? n.extend(se, d) : se[ve] = d
                    }
                    return se
                }
                if (b.test(W)) {
                    for (var Ee = W.split(b), Ae = 0, Pe = Ee.length; Ae < Pe; Ae++) se[Ee[Ae]] = v[P].apply(v, [Ee[Ae]].concat(ae));
                    return se
                }
                return !1
            }, m._callHandler = function(v, P, W) {
                var ae = W[0],
                    se = W[1],
                    ve = W[2];
                switch (W.length) {
                    case 0:
                        return v.call(P);
                    case 1:
                        return v.call(P, ae);
                    case 2:
                        return v.call(P, ae, se);
                    case 3:
                        return v.call(P, ae, se, ve);
                    default:
                        return v.apply(P, W)
                }
            };

            function k(v, P, W, ae) {
                var se = v[P];
                if ((!W || W === se.callback || W === se.callback._callback) && (!ae || ae === se.context)) return delete v[P], !0
            }

            function A(v, P, W, ae) {
                v || (v = {});
                for (var se = P ? [P] : n.keys(v), ve = !1, d = 0, Ee = se.length; d < Ee; d++) P = se[d], !!v[P] && k(v, P, W, ae) && (ve = !0);
                return ve
            }
            var M = {};

            function V(v) {
                return M[v] || (M[v] = n.bind(m.log, m, v))
            }
            n.extend(m, {
                log: function(P, W) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + W + '"', ae)
                    }
                },
                tuneIn: function(P) {
                    var W = m.channel(P);
                    return W._tunedIn = !0, W.on("all", V(P)), this
                },
                tuneOut: function(P) {
                    var W = m.channel(P);
                    return W._tunedIn = !1, W.off("all", V(P)), delete M[P], this
                }
            });

            function U(v) {
                return n.isFunction(v) ? v : function() {
                    return v
                }
            }
            m.Requests = {
                request: function(P) {
                    var W = n.toArray(arguments).slice(1),
                        ae = m._eventsApi(this, "request", P, W);
                    if (ae) return ae;
                    var se = this.channelName,
                        ve = this._requests;
                    if (se && this._tunedIn && m.log.apply(this, [se, P].concat(W)), ve && (ve[P] || ve.default)) {
                        var d = ve[P] || ve.default;
                        return W = ve[P] ? W : arguments, m._callHandler(d.callback, d.context, W)
                    } else m.debugLog("An unhandled request was fired", P, se)
                },
                reply: function(P, W, ae) {
                    return m._eventsApi(this, "reply", P, [W, ae]) ? this : (this._requests || (this._requests = {}), this._requests[P] && m.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: U(W),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(P, W, ae) {
                    if (m._eventsApi(this, "replyOnce", P, [W, ae])) return this;
                    var se = this,
                        ve = n.once(function() {
                            return se.stopReplying(P), U(W).apply(this, arguments)
                        });
                    return this.reply(P, ve, ae)
                },
                stopReplying: function(P, W, ae) {
                    return m._eventsApi(this, "stopReplying", P) ? this : (!P && !W && !ae ? delete this._requests : A(this._requests, P, W, ae) || m.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
                }
            }, m._channels = {}, m.channel = function(v) {
                if (!v) throw new Error("You must provide a name for the channel.");
                return m._channels[v] ? m._channels[v] : m._channels[v] = new m.Channel(v)
            }, m.Channel = function(v) {
                this.channelName = v
            }, n.extend(m.Channel.prototype, i.Events, m.Requests, {
                reset: function() {
                    return this.off(), this.stopListening(), this.stopReplying(), this
                }
            });
            var ne, K, re = [i.Events, m.Requests];
            return n.each(re, function(v) {
                n.each(v, function(P, W) {
                    m[W] = function(ae) {
                        return K = n.toArray(arguments).slice(1), ne = this.channel(ae), ne[W].apply(ne, K)
                    }
                })
            }), m.reset = function(v) {
                var P = v ? [this._channels[v]] : this._channels;
                n.each(P, function(W) {
                    W.reset()
                })
            }, m
        })
    }(ea)), ea.exports
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
        t.exports = i(ao(), Ni.exports, xh())
    })(yt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            m = function(o) {
                return function(x) {
                    for (var O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), Ce = 1; Ce < O; Ce++) Q[Ce - 1] = arguments[Ce];
                    return o.apply(x, Q)
                }
            },
            b = n.Model.extend,
            k = function y(o, x) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!et.DEV_MODE && (x === void 0 || !x) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var A = function(o) {
                return document.documentElement.contains(o && o.parentNode)
            },
            M = function(o, x) {
                var O = this;
                !o || i.each(x, function(Q) {
                    var Ce = o[Q];
                    Ce !== void 0 && (O[Q] = Ce)
                })
            },
            V = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            U = function(o) {
                var x = this;
                return i.reduce(o, function(O, Q, Ce) {
                    return i.isFunction(Q) || (Q = x[Q]), Q && (O[Ce] = Q), O
                }, {})
            },
            ne = /(^|:)(\w)/gi;

        function K(y, o, x) {
            return x.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ne, K)
        });

        function v(y) {
            for (var o = arguments.length, x = Array(o > 1 ? o - 1 : 0), O = 1; O < o; O++) x[O - 1] = arguments[O];
            var Q = re(y),
                Ce = V.call(this, Q),
                qe = void 0;
            return i.isFunction(Ce) && (qe = Ce.apply(this, x)), this.trigger.apply(this, arguments), qe
        }

        function P(y) {
            for (var o = arguments.length, x = Array(o > 1 ? o - 1 : 0), O = 1; O < o; O++) x[O - 1] = arguments[O];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, x) : v.apply(y, x)
        }

        function W(y, o, x) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(O) {
                !x(O) || P(O, o, O)
            })
        }

        function ae(y) {
            return !y._isAttached
        }

        function se(y) {
            return ae(y) ? (y._isAttached = !0, !0) : !1
        }

        function ve(y) {
            return y._isAttached
        }

        function d(y) {
            return ve(y) ? (y._isAttached = !1, !0) : !1
        }

        function Ee(y) {
            y._isAttached && y._isRendered && P(y, "dom:refresh", y)
        }

        function Ae(y) {
            y._isAttached && y._isRendered && P(y, "dom:remove", y)
        }

        function Pe() {
            W(this, "before:attach", ae)
        }

        function lt() {
            W(this, "attach", se), Ee(this)
        }

        function Be() {
            W(this, "before:detach", ve), Ae(this)
        }

        function J() {
            W(this, "detach", d)
        }

        function je() {
            Ae(this)
        }

        function H() {
            Ee(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Be,
                detach: J,
                "before:render": je,
                render: H
            }))
        }
        var Te = ["description", "fileName", "lineNumber", "name", "message", "number"],
            we = b.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(o, x) {
                    i.isObject(o) ? (x = o, o = x.message) : x || (x = {});
                    var O = Error.call(this, o);
                    i.extend(this, i.pick(O, Te), i.pick(x, Te)), this.captureStackTrace(), x.url && (this.url = this.urlRoot + x.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, we)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        we.extend = b;

        function ye(y, o, x, O, Q) {
            var Ce = O.split(/\s+/);
            Ce.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(Ce, function(qe) {
                var It = y[qe];
                if (!It) throw new we('Method "' + qe + '" was configured as an event handler, but does not exist.');
                y[Q](o, x, It)
            })
        }

        function ue(y, o, x, O) {
            if (!i.isObject(x)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(x, function(Q, Ce) {
                if (i.isString(Q)) {
                    ye(y, o, Ce, Q, O);
                    return
                }
                y[O](o, Ce, Q)
            })
        }

        function _e(y, o) {
            return !y || !o ? this : (ue(this, y, o, "listenTo"), this)
        }

        function ke(y, o) {
            return y ? o ? (ue(this, y, o, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, o, x, O) {
            if (!i.isObject(x)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = U.call(y, x);
            o[O](Q, y)
        }

        function Ke(y, o) {
            return !y || !o ? this : ($e(this, y, o, "reply"), this)
        }

        function dt(y, o) {
            return y ? o ? ($e(this, y, o, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var Bt = function(o) {
                this.options = i.extend({}, i.result(this, "options"), o)
            },
            Ut = {
                normalizeMethods: U,
                _setOptions: Bt,
                mergeOptions: M,
                getOption: V,
                bindEvents: _e,
                unbindEvents: ke
            },
            _ = {
                _initRadio: function() {
                    var o = i.result(this, "channelName");
                    if (!!o) {
                        if (!a) throw new we({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var x = this._channel = a.channel(o),
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
                bindEvents: _e,
                unbindEvents: ke,
                bindRequests: Ke,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = b, i.extend(g.prototype, n.Events, Ut, _, {
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
                for (var o = arguments.length, x = Array(o), O = 0; O < o; O++) x[O] = arguments[O];
                return this.triggerMethod.apply(this, ["before:destroy", this].concat(x)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(x)), this.stopListening(), this
            },
            triggerMethod: v
        });
        var S = function(o) {
            this.templateId = o
        };
        i.extend(S, {
            templateCaches: {},
            get: function(o, x) {
                var O = this.templateCaches[o];
                return O || (O = new S(o), this.templateCaches[o] = O), O.load(x)
            },
            clear: function() {
                for (var o = void 0, x = arguments.length, O = Array(x), Q = 0; Q < x; Q++) O[Q] = arguments[Q];
                var Ce = O.length;
                if (Ce > 0)
                    for (o = 0; o < Ce; o++) delete this.templateCaches[O[o]];
                else this.templateCaches = {}
            }
        }), i.extend(S.prototype, {
            load: function(o) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var x = this.loadTemplate(this.templateId, o);
                return this.compiledTemplate = this.compileTemplate(x, o), this.compiledTemplate
            },
            loadTemplate: function(o, x) {
                var O = n.$(o);
                if (!O.length) throw new we({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + o + '"'
                });
                return O.html()
            },
            compileTemplate: function(o, x) {
                return i.template(o, x)
            }
        });
        var R = i.invokeMap || i.invoke;

        function L(y, o) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(et.Behaviors.behaviorsLookup) ? et.Behaviors.behaviorsLookup(y, o)[o] : et.Behaviors.behaviorsLookup[o]
        }

        function B(y, o) {
            return i.chain(o).map(function(x, O) {
                var Q = L(x, O),
                    Ce = x === Q ? {} : x,
                    qe = new Q(Ce, y),
                    It = B(y, i.result(qe, "behaviors"));
                return [qe].concat(It)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var o = i.result(this, "behaviors");
                    return i.isObject(o) ? B(this, o) : {}
                },
                _getBehaviorTriggers: function() {
                    var o = R(this._behaviors, "getTriggers");
                    return i.reduce(o, function(x, O) {
                        return i.extend(x, O)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var o = R(this._behaviors, "getEvents");
                    return i.reduce(o, function(x, O) {
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
                    for (var o = arguments.length, x = Array(o), O = 0; O < o; O++) x[O] = arguments[O];
                    R.apply(void 0, [this._behaviors, "destroy"].concat(x))
                },
                _removeBehavior: function(o) {
                    this._isDestroyed || (this.undelegate(".trig" + o.cid + " ." + o.cid), this._behaviors = i.without(this._behaviors, o))
                },
                _bindBehaviorUIElements: function() {
                    R(this._behaviors, "bindUIElements")
                },
                _unbindBehaviorUIElements: function() {
                    R(this._behaviors, "unbindUIElements")
                },
                _triggerEventOnBehaviors: function() {
                    for (var o = this._behaviors, x = 0, O = o && o.length; x < O; x++) v.apply(o[x], arguments)
                }
            },
            Se = {
                _delegateEntityEvents: function(o, x) {
                    var O = i.result(this, "modelEvents");
                    O && (ke.call(this, o, O), _e.call(this, o, O));
                    var Q = i.result(this, "collectionEvents");
                    Q && (ke.call(this, x, Q), _e.call(this, x, Q))
                },
                _undelegateEntityEvents: function(o, x) {
                    var O = i.result(this, "modelEvents");
                    ke.call(this, o, O);
                    var Q = i.result(this, "collectionEvents");
                    ke.call(this, x, Q)
                }
            },
            he = /^(\S+)\s*(.*)$/,
            Me = function(o, x) {
                var O = o.match(he);
                return O[1] + "." + x + " " + O[2]
            },
            De = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function it(y) {
            return !!De[y]
        }

        function xt(y, o) {
            return De[y] = o
        }

        function rn(y, o) {
            i.isString(o) && (o = {
                event: o
            });
            var x = o.event,
                O = !!o.preventDefault;
            it("triggersPreventDefault") && (O = o.preventDefault !== !1);
            var Q = !!o.stopPropagation;
            return it("triggersStopPropagation") && (Q = o.stopPropagation !== !1),
                function(Ce) {
                    O && Ce.preventDefault(), Q && Ce.stopPropagation(), y.triggerMethod(x, y, Ce)
                }
        }
        var ct = {
                _getViewTriggers: function(o, x) {
                    var O = this;
                    return i.reduce(x, function(Q, Ce, qe) {
                        return qe = Me(qe, "trig" + O.cid), Q[qe] = rn(o, Ce), Q
                    }, {})
                }
            },
            wt = function(o, x) {
                return i.reduce(o, function(O, Q, Ce) {
                    var qe = Ct(Ce, x);
                    return O[qe] = Q, O
                }, {})
            },
            Ct = function(o, x) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(O) {
                    return x[O.slice(4)]
                })
            },
            Kt = function y(o, x, O) {
                return i.each(o, function(Q, Ce) {
                    i.isString(Q) ? o[Ce] = Ct(Q, x) : i.isObject(Q) && i.isArray(O) && (i.extend(Q, y(i.pick(Q, O), x)), i.each(O, function(qe) {
                        var It = Q[qe];
                        i.isString(It) && (Q[qe] = Ct(It, x))
                    }))
                }), o
            },
            Je = {
                normalizeUIKeys: function(o) {
                    var x = this._getUIBindings();
                    return wt(o, x)
                },
                normalizeUIString: function(o) {
                    var x = this._getUIBindings();
                    return Ct(o, x)
                },
                normalizeUIValues: function(o, x) {
                    var O = this._getUIBindings();
                    return Kt(o, O, x)
                },
                _getUIBindings: function() {
                    var o = i.result(this, "_uiBindings"),
                        x = i.result(this, "ui");
                    return o || x
                },
                _bindUIElements: function() {
                    var o = this;
                    if (!!this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var x = i.result(this, "_uiBindings");
                        this._ui = {}, i.each(x, function(O, Q) {
                            o._ui[Q] = o.$(O)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var o = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(x, O) {
                        delete o.ui[O]
                    }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui)
                },
                _getUI: function(o) {
                    return this._ui[o]
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
                getEl: function(o) {
                    return Lt(o)
                },
                findEl: function(o, x) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    return O.find(x)
                },
                hasEl: function(o, x) {
                    return o.contains(x && x.parentNode)
                },
                detachEl: function(o) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(o);
                    x.detach()
                },
                replaceEl: function(o, x) {
                    if (o !== x) {
                        var O = x.parentNode;
                        !O || O.replaceChild(o, x)
                    }
                },
                swapEl: function(o, x) {
                    if (o !== x) {
                        var O = o.parentNode,
                            Q = x.parentNode;
                        if (!(!O || !Q)) {
                            var Ce = o.nextSibling,
                                qe = x.nextSibling;
                            O.insertBefore(x, Ce), Q.insertBefore(o, qe)
                        }
                    }
                },
                setContents: function(o, x) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    O.html(x)
                },
                appendContents: function(o, x) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = O._$el,
                        Ce = Q === void 0 ? Lt(o) : Q,
                        qe = O._$contents,
                        It = qe === void 0 ? Lt(x) : qe;
                    Ce.append(It)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(o);
                    x.contents().detach()
                }
            },
            X = {
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
                delegateEvents: function(o) {
                    this._proxyBehaviorViewProperties(), this._buildEventProxies();
                    var x = this._getEvents(o);
                    typeof o > "u" && (this.events = x);
                    var O = i.extend({}, this._getBehaviorEvents(), x, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, O), this
                },
                _getEvents: function(o) {
                    var x = o || this.events;
                    return i.isFunction(x) ? this.normalizeUIKeys(x.call(this)) : this.normalizeUIKeys(x)
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this, o)
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
                    for (var o = this._isAttached && !this._shouldDisableEvents, x = arguments.length, O = Array(x), Q = 0; Q < x; Q++) O[Q] = arguments[Q];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(O)), o && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), o && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, O), this.triggerMethod.apply(this, ["destroy", this].concat(O)), this.stopListening(), this
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
                getUI: function(o) {
                    return this._getUI(o)
                },
                childViewEventPrefix: function() {
                    return it("childViewEventPrefix") ? "childview" : !1
                },
                triggerMethod: function() {
                    var o = v.apply(this, arguments);
                    return this._triggerEventOnBehaviors.apply(this, arguments), o
                },
                _buildEventProxies: function() {
                    this._childViewEvents = i.result(this, "childViewEvents"), this._childViewTriggers = i.result(this, "childViewTriggers")
                },
                _proxyChildViewEvents: function(o) {
                    this.listenTo(o, "all", this._childViewEventHandler)
                },
                _childViewEventHandler: function(o) {
                    for (var x = this.normalizeMethods(this._childViewEvents), O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), Ce = 1; Ce < O; Ce++) Q[Ce - 1] = arguments[Ce];
                    typeof x < "u" && i.isFunction(x[o]) && x[o].apply(this, Q);
                    var qe = this._childViewTriggers;
                    qe && i.isString(qe[o]) && this.triggerMethod.apply(this, [qe[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Wt = It + ":" + o;
                        this.triggerMethod.apply(this, [Wt].concat(Q))
                    }
                }
            };
        i.extend(X, te, Ut, Se, ct, Je);

        function D(y) {
            y._isRendered || (y.supportsRenderLifecycle || P(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, P(y, "render", y)))
        }

        function q(y) {
            if (y.destroy) {
                y.destroy();
                return
            }
            y.supportsDestroyLifecycle || P(y, "before:destroy", y);
            var o = y._isAttached && !y._shouldDisableEvents;
            o && P(y, "before:detach", y), y.remove(), o && (y._isAttached = !1, P(y, "detach", y)), y._isDestroyed = !0, y.supportsDestroyLifecycle || P(y, "destroy", y)
        }
        var fe = ["allowMissingEl", "parentEl", "replaceElement"],
            pe = g.extend({
                Dom: N,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(o) {
                    if (this._setOptions(o), this.mergeOptions(o, fe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new we({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, o)
                },
                show: function(o, x) {
                    if (!!this._ensureElement(x)) return o = this._getView(o, x), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, x), o._isAttached || this.empty(x), this._setupChildView(o), this.currentView = o, D(o), this._attachView(o, x), this.triggerMethod("show", this, o, x), this._isSwappingView = !1, this)
                },
                _setupChildView: function(o) {
                    oe(o), this._proxyChildViewEvents(o), o.on("destroy", this._empty, this)
                },
                _proxyChildViewEvents: function(o) {
                    var x = this._parentView;
                    !x || x._proxyChildViewEvents(o)
                },
                _shouldDisableMonitoring: function() {
                    return this._parentView && this._parentView.monitorViewEvents === !1
                },
                _attachView: function(o) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = !o._isAttached && A(this.el) && !this._shouldDisableMonitoring(),
                        Q = typeof x.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!x.replaceElement;
                    O && P(o, "before:attach", o), Q ? this._replaceEl(o) : this.attachHtml(o), O && (o._isAttached = !0, P(o, "attach", o))
                },
                _ensureElement: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var x = typeof o.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!o.allowMissingEl;
                        if (x) return !1;
                        throw new we('An "el" must exist in DOM for this region ' + this.cid)
                    }
                    return !0
                },
                _getView: function(o) {
                    if (!o) throw new we({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                    });
                    if (o._isDestroyed) throw new we({
                        name: "ViewDestroyedError",
                        message: 'View (cid: "' + o.cid + '") has already been destroyed and cannot be used.'
                    });
                    if (o instanceof n.View) return o;
                    var x = this._getViewOptions(o);
                    return new Vn(x)
                },
                _getViewOptions: function(o) {
                    if (i.isFunction(o)) return {
                        template: o
                    };
                    if (i.isObject(o)) return o;
                    var x = function() {
                        return o
                    };
                    return {
                        template: x
                    }
                },
                getEl: function(o) {
                    var x = i.result(this, "parentEl");
                    return x && i.isString(o) ? this.Dom.findEl(x, o) : this.Dom.getEl(o)
                },
                _replaceEl: function(o) {
                    this._restoreEl(), o.on("before:destroy", this._restoreEl, this), this.Dom.replaceEl(o.el, this.el), this._isReplaced = !0
                },
                _restoreEl: function() {
                    if (!!this._isReplaced) {
                        var o = this.currentView;
                        !o || (this._detachView(o), this._isReplaced = !1)
                    }
                },
                isReplaced: function() {
                    return !!this._isReplaced
                },
                isSwappingView: function() {
                    return !!this._isSwappingView
                },
                attachHtml: function(o) {
                    this.Dom.appendContents(this.el, o.el, {
                        _$el: this.$el,
                        _$contents: o.$el
                    })
                },
                empty: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                            allowMissingEl: !0
                        },
                        x = this.currentView;
                    if (!x) return this._ensureElement(o) && this.detachHtml(), this;
                    var O = !o.preventDestroy;
                    return O || k("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(x, O), this
                },
                _empty: function(o, x) {
                    o.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, o), this._restoreEl(), delete this.currentView, o._isDestroyed || (x ? this.removeView(o) : this._detachView(o), this._stopChildViewEvents(o)), this.triggerMethod("empty", this, o)
                },
                _stopChildViewEvents: function(o) {
                    var x = this._parentView;
                    !x || this._parentView.stopListening(o)
                },
                destroyView: function(o) {
                    return o._isDestroyed || (o._shouldDisableEvents = this._shouldDisableMonitoring(), q(o)), o
                },
                removeView: function(o) {
                    this.destroyView(o)
                },
                detachView: function() {
                    var o = this.currentView;
                    if (!!o) return this._empty(o), o
                },
                _detachView: function(o) {
                    var x = o._isAttached && !this._shouldDisableMonitoring(),
                        O = this._isReplaced;
                    x && P(o, "before:detach", o), O ? this.Dom.replaceEl(this.el, o.el) : this.detachHtml(), x && (o._isAttached = !1, P(o, "detach", o))
                },
                detachHtml: function() {
                    this.Dom.detachContents(this.el, this.$el)
                },
                hasView: function() {
                    return !!this.currentView
                },
                reset: function(o) {
                    return this.empty(o), this.$el && (this.el = this._initEl), delete this.$el, this
                },
                destroy: function(o) {
                    return this._isDestroyed ? this : (this.reset(o), this._name && this._parentView._removeReferences(this._name), delete this._parentView, delete this._name, g.prototype.destroy.apply(this, arguments))
                }
            }, {
                setDomApi: F
            }),
            Ne = function(y, o) {
                return y instanceof pe ? y : Ve(y, o)
            };

        function Ve(y, o) {
            var x = i.extend({}, o);
            if (i.isString(y)) return i.extend(x, {
                el: y
            }), pt(x);
            if (i.isFunction(y)) return i.extend(x, {
                regionClass: y
            }), pt(x);
            if (i.isObject(y)) return y.selector && k("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(x, {
                el: y.selector
            }, y), pt(x);
            throw new we({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function pt(y) {
            var o = y.regionClass,
                x = i.omit(y, "regionClass");
            return new o(x)
        }
        var Ft = {
                regionClass: pe,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    R(this._regions, "reset")
                },
                addRegion: function(o, x) {
                    var O = {};
                    return O[o] = x, this.addRegions(O)[o]
                },
                addRegions: function(o) {
                    if (!i.isEmpty(o)) return o = this.normalizeUIValues(o, ["selector", "el"]), this.regions = i.extend({}, this.regions, o), this._addRegions(o)
                },
                _addRegions: function(o) {
                    var x = this,
                        O = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(o, function(Q, Ce, qe) {
                        return Q[qe] = Ne(Ce, O), x._addRegion(Q[qe], qe), Q
                    }, {})
                },
                _addRegion: function(o, x) {
                    this.triggerMethod("before:add:region", this, x, o), o._parentView = this, o._name = x, this._regions[x] = o, this.triggerMethod("add:region", this, x, o)
                },
                removeRegion: function(o) {
                    var x = this._regions[o];
                    return this._removeRegion(x, o), x
                },
                removeRegions: function() {
                    var o = this._getRegions();
                    return i.each(this._regions, i.bind(this._removeRegion, this)), o
                },
                _removeRegion: function(o, x) {
                    this.triggerMethod("before:remove:region", this, x, o), o.destroy(), this.triggerMethod("remove:region", this, x, o)
                },
                _removeReferences: function(o) {
                    delete this.regions[o], delete this._regions[o]
                },
                emptyRegions: function() {
                    var o = this.getRegions();
                    return R(o, "empty"), o
                },
                hasRegion: function(o) {
                    return !!this.getRegion(o)
                },
                getRegion: function(o) {
                    return this._isRendered || this.render(), this._regions[o]
                },
                _getRegions: function() {
                    return i.clone(this._regions)
                },
                getRegions: function() {
                    return this._isRendered || this.render(), this._getRegions()
                },
                showChildView: function(o, x) {
                    for (var O = this.getRegion(o), Q = arguments.length, Ce = Array(Q > 2 ? Q - 2 : 0), qe = 2; qe < Q; qe++) Ce[qe - 2] = arguments[qe];
                    return O.show.apply(O, [x].concat(Ce))
                },
                detachChildView: function(o) {
                    return this.getRegion(o).detachView()
                },
                getChildView: function(o) {
                    return this.getRegion(o).currentView
                }
            },
            Ye = {
                render: function(o, x) {
                    if (!o) throw new we({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var O = i.isFunction(o) ? o : S.get(o);
                    return O(x)
                }
            },
            In = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Vn = n.View.extend({
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, In), oe(this), this._initBehaviors(), this._initRegions();
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
                    return this.collection ? this.collection.map(function(o) {
                        return i.clone(o.attributes)
                    }) : {}
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = A(this.el), this._isRendered && this.bindUIElements(), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._isRendered && this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                _renderTemplate: function() {
                    var o = this.getTemplate();
                    if (o === !1) {
                        k("template:false is deprecated.  Use _.noop.");
                        return
                    }
                    var x = this.mixinTemplateContext(this.serializeData()),
                        O = this._renderHtml(o, x);
                    this.attachElContent(O)
                },
                _renderHtml: function(o, x) {
                    return Ye.render(o, x, this)
                },
                getTemplate: function() {
                    return this.template
                },
                mixinTemplateContext: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        x = i.result(this, "templateContext");
                    return i.extend(o, x)
                },
                attachElContent: function(o) {
                    return this.Dom.setContents(this.el, o, this.$el), this
                },
                _removeChildren: function() {
                    this.removeRegions()
                },
                _getImmediateChildren: function() {
                    return i.chain(this._getRegions()).map("currentView").compact().value()
                }
            }, {
                setRenderer: function(o) {
                    return this.prototype._renderHtml = o, this
                },
                setDomApi: F
            });
        i.extend(Vn.prototype, X, Ft);
        var rt = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Mn = function(o, x) {
                i.each(rt, function(O) {
                    o[O] = function() {
                        var Q = i.result(this, x),
                            Ce = Array.prototype.slice.call(arguments);
                        return i[O].apply(i, [Q].concat(Ce))
                    }
                })
            },
            mi = function(o) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(o, i.bind(this.add, this))
            };
        Mn(mi.prototype, "_getViews"), i.extend(mi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(o, x) {
                return this._add(o, x)._updateLength()
            },
            _add: function(o, x) {
                var O = o.cid;
                return this._views[O] = o, o.model && (this._indexByModel[o.model.cid] = O), x && (this._indexByCustom[x] = O), this
            },
            findByModel: function(o) {
                return this.findByModelCid(o.cid)
            },
            findByModelCid: function(o) {
                var x = this._indexByModel[o];
                return this.findByCid(x)
            },
            findByCustom: function(o) {
                var x = this._indexByCustom[o];
                return this.findByCid(x)
            },
            findByIndex: function(o) {
                return i.values(this._views)[o]
            },
            findByCid: function(o) {
                return this._views[o]
            },
            remove: function(o) {
                return this._remove(o)._updateLength()
            },
            _remove: function(o) {
                var x = o.cid;
                return o.model && delete this._indexByModel[o.model.cid], i.some(this._indexByCustom, i.bind(function(O, Q) {
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
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Sr), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var x = Array.prototype.slice.call(arguments);
                    x[0] = this.options, n.View.prototype.constructor.apply(this, x), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var o = this._isAttached && this.monitorViewEvents !== !1,
                        x = o ? this._getImmediateChildren() : [];
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
                _onCollectionAdd: function(o, x, O) {
                    var Q = O.at !== void 0 && (O.index || x.indexOf(o));
                    (this.filter || Q === !1) && (Q = i.indexOf(this._filteredSortedModels(Q), o)), this._shouldAddChild(o, Q) && (this._destroyEmptyView(), this._addChild(o, Q))
                },
                _onCollectionUpdate: function(o, x) {
                    var O = x.changes;
                    this._removeChildModels(O.removed)
                },
                _removeChildModels: function(o) {
                    var x = this._getRemovedViews(o);
                    !x.length || (this.children._updateLength(), this._updateIndices(x, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(o) {
                    var x = this;
                    return i.reduce(o, function(O, Q) {
                        var Ce = Q && x.children.findByModel(Q);
                        return !Ce || Ce._isDestroyed || (x._removeChildView(Ce), O.push(Ce)), O
                    }, [])
                },
                _removeChildView: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, q(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = A(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(o) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.preventRender,
                        Q = this._isRendered && !this._isDestroyed,
                        Ce = this.filter !== o,
                        qe = Q && Ce && !O;
                    if (qe) {
                        var It = this._filteredSortedModels();
                        this.filter = o;
                        var Wt = this._filteredSortedModels();
                        this._applyModelDeltas(Wt, It)
                    } else this.filter = o;
                    return this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _applyModelDeltas: function(o, x) {
                    var O = this,
                        Q = {};
                    i.each(o, function(qe, It) {
                        var Wt = !O.children.findByModel(qe);
                        Wt && O._onCollectionAdd(qe, O.collection, {
                            at: It
                        }), Q[qe.cid] = !0
                    });
                    var Ce = i.filter(x, function(qe) {
                        return !Q[qe.cid] && O.children.findByModel(qe)
                    });
                    this._removeChildModels(Ce)
                },
                reorder: function() {
                    var o = this,
                        x = this.children,
                        O = this._filteredSortedModels();
                    if (!O.length && this._showingEmptyView) return this;
                    var Q = i.some(O, function(Wt) {
                        return !x.findByModel(Wt)
                    });
                    if (Q) this.render();
                    else {
                        var Ce = [],
                            qe = i.reduce(this.children._views, function(Wt, qn) {
                                var Bn = i.indexOf(O, qn.model);
                                return Bn === -1 ? (Ce.push(qn.model), Wt) : (qn._index = Bn, Wt[Bn] = qn.el, Wt)
                            }, new Array(O.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(qe, function(Wt) {
                            o.Dom.appendContents(It, Wt)
                        }), this._appendReorderedChildren(It), this._removeChildModels(Ce), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var o = this,
                        x = this._filteredSortedModels(),
                        O = i.find(x, function(Q, Ce) {
                            var qe = o.children.findByModel(Q);
                            return !qe || qe._index !== Ce
                        });
                    O && this.resortView()
                },
                _emptyViewIndex: -1,
                _appendReorderedChildren: function(o) {
                    this.Dom.appendContents(this.el, o, {
                        _$el: this.$el
                    })
                },
                _renderChildren: function() {
                    this._isRendered && (this._destroyEmptyView(), this._destroyChildren());
                    var o = this._filteredSortedModels();
                    this.isEmpty({
                        processedModels: o
                    }) ? this._showEmptyView() : (this.triggerMethod("before:render:children", this), this._startBuffering(), this._showCollection(o), this._endBuffering(), this.triggerMethod("render:children", this))
                },
                _createView: function(o, x) {
                    var O = this._getChildView(o),
                        Q = this._getChildViewOptions(o, x),
                        Ce = this.buildChildView(o, O, Q);
                    return Ce
                },
                _setupChildView: function(o, x) {
                    oe(o), this._proxyChildViewEvents(o), this.sort && (o._index = x)
                },
                _showCollection: function(o) {
                    i.each(o, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(o) {
                    if (!this.collection || !this.collection.length) return [];
                    var x = this.getViewComparator(),
                        O = this.collection.models;
                    if (o = Math.min(Math.max(o, 0), O.length - 1), x) {
                        var Q = void 0;
                        o && (Q = O[o], O = O.slice(0, o).concat(O.slice(o + 1))), O = this._sortModelsBy(O, x), Q && O.splice(o, 0, Q)
                    }
                    return O = this._filterModels(O), O
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(o) {
                    var x = this;
                    return this.filter && (o = i.filter(o, function(O, Q) {
                        return x._shouldAddChild(O, Q)
                    })), o
                },
                _sortModelsBy: function(o, x) {
                    return typeof x == "string" ? i.sortBy(o, function(O) {
                        return O.get(x)
                    }) : x.length === 1 ? i.sortBy(o, i.bind(x, this)) : i.clone(o).sort(i.bind(x, this))
                },
                _showEmptyView: function() {
                    var o = this._getEmptyView();
                    if (o && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var x = new n.Model,
                            O = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(O) && (O = O.call(this, x, this._emptyViewIndex));
                        var Q = this.buildChildView(x, o, O);
                        this.triggerMethod("before:render:empty", this, Q), this.addChildView(Q, 0), this.triggerMethod("render:empty", this, Q)
                    }
                },
                _destroyEmptyView: function() {
                    this._showingEmptyView && (this.triggerMethod("before:remove:empty", this), this._destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty", this))
                },
                _getEmptyView: function() {
                    var o = this.emptyView;
                    if (!!o) return this._getView(o)
                },
                _getChildView: function(o) {
                    var x = this.childView;
                    if (!x) throw new we({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (x = this._getView(x, o), !x) throw new we({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return x
                },
                _getView: function(o, x) {
                    if (o.prototype instanceof n.View || o === n.View) return o;
                    if (i.isFunction(o)) return o.call(this, x)
                },
                _addChild: function(o, x) {
                    var O = this._createView(o, x);
                    return this.addChildView(O, x), O
                },
                _getChildViewOptions: function(o, x) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(o, x) : this.childViewOptions
                },
                addChildView: function(o, x) {
                    return this.triggerMethod("before:add:child", this, o), this._setupChildView(o, x), this._isBuffering ? this.children._add(o) : (this._updateIndices(o, !0), this.children.add(o)), D(o), this._attachView(o, x), this.triggerMethod("add:child", this, o), o
                },
                _updateIndices: function(o, x) {
                    if (!!this.sort) {
                        if (!x) {
                            i.each(i.sortBy(this.children._views, "_index"), function(Q, Ce) {
                                Q._index = Ce
                            });
                            return
                        }
                        var O = i.isArray(o) ? i.max(o, "_index") : o;
                        i.isObject(O) && i.each(this.children._views, function(Q) {
                            Q._index >= O._index && (Q._index += 1)
                        })
                    }
                },
                _attachView: function(o, x) {
                    var O = !o._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    O && P(o, "before:attach", o), this.attachHtml(this, o, x), O && (o._isAttached = !0, P(o, "attach", o))
                },
                buildChildView: function(o, x, O) {
                    var Q = i.extend({
                        model: o
                    }, O);
                    return new x(Q)
                },
                removeChildView: function(o) {
                    return !o || o._isDestroyed || (this._removeChildView(o), this.children._updateLength(), this._updateIndices(o, !1)), o
                },
                isEmpty: function(o) {
                    var x = void 0;
                    return i.result(o, "processedModels") ? x = o.processedModels : (x = this.collection ? this.collection.models : [], x = this._filterModels(x)), x.length === 0
                },
                attachBuffer: function(o, x) {
                    this.Dom.appendContents(o.el, x, {
                        _$el: o.$el
                    })
                },
                _createBuffer: function() {
                    var o = this,
                        x = this.Dom.createBuffer();
                    return i.each(this._bufferedChildren, function(O) {
                        o.Dom.appendContents(x, O.el, {
                            _$contents: O.$el
                        })
                    }), x
                },
                attachHtml: function(o, x, O) {
                    o._isBuffering ? o._bufferedChildren.splice(O, 0, x) : o._insertBefore(x, O) || o._insertAfter(x)
                },
                _insertBefore: function(o, x) {
                    var O = void 0,
                        Q = this.sort && x < this.children.length - 1;
                    return Q && (O = i.find(this.children._views, function(Ce) {
                        return Ce._index === x + 1
                    })), O ? (this.beforeEl(O.el, o.el), !0) : !1
                },
                beforeEl: function(o, x) {
                    this.$(o).before(x)
                },
                _insertAfter: function(o) {
                    this.Dom.appendContents(this.el, o.el, {
                        _$el: this.$el,
                        _$contents: o.$el
                    })
                },
                _initChildViewStorage: function() {
                    this.children = new mi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(o) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(o, x) {
                    var O = this.filter;
                    return !i.isFunction(O) || O.call(this, o, x, this.collection)
                }
            }, {
                setDomApi: F
            });
        i.extend(kn.prototype, X);
        var sn = function() {
            this._init()
        };
        Mn(sn.prototype, "_views");

        function kr(y, o) {
            return o.model && o.model.get(y)
        }
        i.extend(sn.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(o) {
                var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    O = o.cid;
                this._viewsByCid[O] = o, o.model && (this._indexByModel[o.model.cid] = O), this._views.splice(x, 0, o), this._updateLength()
            },
            _sort: function(o, x) {
                return typeof o == "string" ? (o = i.partial(kr, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, x)) : this._views.sort(i.bind(o, x))
            },
            _sortBy: function(o) {
                var x = i.sortBy(this._views, o);
                return this._set(x), x
            },
            _set: function(o) {
                this._views.length = 0, this._views.push.apply(this._views, o.slice(0)), this._updateLength()
            },
            _swap: function(o, x) {
                var O = this.findIndexByView(o),
                    Q = this.findIndexByView(x);
                if (!(O === -1 || Q === -1)) {
                    var Ce = this._views[O];
                    this._views[O] = this._views[Q], this._views[Q] = Ce
                }
            },
            findByModel: function(o) {
                return this.findByModelCid(o.cid)
            },
            findByModelCid: function(o) {
                var x = this._indexByModel[o];
                return this.findByCid(x)
            },
            findByIndex: function(o) {
                return this._views[o]
            },
            findIndexByView: function(o) {
                return this._views.indexOf(o)
            },
            findByCid: function(o) {
                return this._viewsByCid[o]
            },
            hasView: function(o) {
                return !!this.findByCid(o.cid)
            },
            _remove: function(o) {
                if (!!this._viewsByCid[o.cid]) {
                    o.model && delete this._indexByModel[o.model.cid], delete this._viewsByCid[o.cid];
                    var x = this.findIndexByView(o);
                    this._views.splice(x, 1), this._updateLength()
                }
            },
            _updateLength: function() {
                this.length = this._views.length
            }
        });
        var Tr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            vi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Tr), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var x = Array.prototype.slice.call(arguments);
                    x[0] = this.options, n.View.prototype.constructor.apply(this, x), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _initChildViewStorage: function() {
                    this.children = new sn
                },
                getEmptyRegion: function() {
                    return this._emptyRegion && !this._emptyRegion.isDestroyed() ? this._emptyRegion : (this._emptyRegion = new pe({
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
                _onCollectionSort: function(o, x) {
                    var O = x.add,
                        Q = x.merge,
                        Ce = x.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || O || Ce || Q || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(o, x) {
                    var O = x.changes,
                        Q = O.removed.length && this._removeChildModels(O.removed);
                    this._addedViews = O.added.length && this._addChildModels(O.added), this._detachChildren(Q), this._showChildren(), this._removeChildViews(Q)
                },
                _removeChildModels: function(o) {
                    var x = this;
                    return i.reduce(o, function(O, Q) {
                        var Ce = x._removeChildModel(Q);
                        return Ce && O.push(Ce), O
                    }, [])
                },
                _removeChildModel: function(o) {
                    var x = this.children.findByModel(o);
                    return x && this._removeChild(x), x
                },
                _removeChild: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), this.triggerMethod("remove:child", this, o)
                },
                _addChildModels: function(o) {
                    return i.map(o, i.bind(this._addChildModel, this))
                },
                _addChildModel: function(o) {
                    var x = this._createChildView(o);
                    return this._addChild(x), x
                },
                _createChildView: function(o) {
                    var x = this._getChildView(o),
                        O = this._getChildViewOptions(o),
                        Q = this.buildChildView(o, x, O);
                    return Q
                },
                _addChild: function(o, x) {
                    this.triggerMethod("before:add:child", this, o), this._setupChildView(o), this.children._add(o, x), this.triggerMethod("add:child", this, o)
                },
                _getChildView: function(o) {
                    var x = this.childView;
                    if (!x) throw new we({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (x = this._getView(x, o), !x) throw new we({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return x
                },
                _getView: function(o, x) {
                    if (o.prototype instanceof n.View || o === n.View) return o;
                    if (i.isFunction(o)) return o.call(this, x)
                },
                _getChildViewOptions: function(o) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(o) : this.childViewOptions
                },
                buildChildView: function(o, x, O) {
                    var Q = i.extend({
                        model: o
                    }, O);
                    return new x(Q)
                },
                _setupChildView: function(o) {
                    oe(o), o.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(o)
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
                isEmpty: function(o) {
                    return o || !this.children.length
                },
                _showEmptyView: function() {
                    var o = this._getEmptyView();
                    if (!!o) {
                        var x = this._getEmptyViewOptions(),
                            O = this.getEmptyRegion();
                        O.show(new o(x))
                    }
                },
                _getEmptyView: function() {
                    var o = this.emptyView;
                    if (!!o) return this._getView(o)
                },
                _destroyEmptyView: function() {
                    var o = this.getEmptyRegion();
                    o.hasView() && o.empty()
                },
                _getEmptyViewOptions: function() {
                    var o = this.emptyViewOptions || this.childViewOptions;
                    return i.isFunction(o) ? o.call(this) : o
                },
                _sortChildren: function() {
                    var o = this.getComparator();
                    !o || (delete this._addedViews, this.triggerMethod("before:sort", this), this.children._sort(o, this), this.triggerMethod("sort", this))
                },
                setComparator: function(o) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.preventRender,
                        Q = this.viewComparator !== o,
                        Ce = Q && !O;
                    return this.viewComparator = o, Ce && this.sort(), this
                },
                removeComparator: function(o) {
                    return this.setComparator(null, o)
                },
                getComparator: function() {
                    return this.viewComparator ? this.viewComparator : !this.sortWithCollection || this.viewComparator === !1 || !this.collection ? !1 : this._viewComparator
                },
                _viewComparator: function(o) {
                    return this.collection.indexOf(o.model)
                },
                filter: function() {
                    if (this._isDestroyed) return this;
                    if (!this.children.length) return this;
                    var o = this._filterChildren();
                    return this._renderChildren(o), this
                },
                _filterChildren: function() {
                    var o = this,
                        x = this._getFilter(),
                        O = this._addedViews;
                    if (delete this._addedViews, !x) return O || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var Q = [],
                        Ce = [];
                    return i.each(this.children._views, function(qe, It, Wt) {
                        (x.call(o, qe, It, Wt) ? Q : Ce).push(qe)
                    }), this._detachChildren(Ce), this.triggerMethod("filter", this, Q, Ce), Q
                },
                _getFilter: function() {
                    var o = this.getFilter();
                    if (!o) return !1;
                    if (i.isFunction(o)) return o;
                    if (i.isObject(o)) {
                        var x = i.matches(o);
                        return function(O) {
                            return x(O.model && O.model.attributes)
                        }
                    }
                    if (i.isString(o)) return function(O) {
                        return O.model && O.model.get(o)
                    };
                    throw new we({
                        name: "InvalidViewFilterError",
                        message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'
                    })
                },
                getFilter: function() {
                    return this.viewFilter
                },
                setFilter: function(o) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.preventRender,
                        Q = this.viewFilter !== o,
                        Ce = Q && !O;
                    return this.viewFilter = o, Ce && this.filter(), this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _detachChildren: function(o) {
                    i.each(o, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(o) {
                    var x = o._isAttached && this.monitorViewEvents !== !1;
                    x && P(o, "before:detach", o), this.detachHtml(o), x && (o._isAttached = !1, P(o, "detach", o))
                },
                detachHtml: function(o) {
                    this.Dom.detachEl(o.el, o.$el)
                },
                _renderChildren: function(o) {
                    if (this.isEmpty(!o.length)) {
                        this._showEmptyView();
                        return
                    }
                    this._destroyEmptyView(), this.triggerMethod("before:render:children", this, o);
                    var x = this._getBuffer(o);
                    this._attachChildren(x, o), this.triggerMethod("render:children", this, o)
                },
                _attachChildren: function(o, x) {
                    var O = this._isAttached && this.monitorViewEvents !== !1;
                    x = O ? x : [], i.each(x, function(Q) {
                        Q._isAttached || P(Q, "before:attach", Q)
                    }), this.attachHtml(o), i.each(x, function(Q) {
                        Q._isAttached || (Q._isAttached = !0, P(Q, "attach", Q))
                    })
                },
                _getBuffer: function(o) {
                    var x = this,
                        O = this.Dom.createBuffer();
                    return i.each(o, function(Q) {
                        D(Q), x.Dom.appendContents(O, Q.el, {
                            _$contents: Q.$el
                        })
                    }), O
                },
                attachHtml: function(o) {
                    this.Dom.appendContents(this.el, o, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(o, x) {
                    if (!this.children.hasView(o) || !this.children.hasView(x)) throw new we({
                        name: "ChildSwapError",
                        message: "Both views must be children of the collection view"
                    });
                    return this.children._swap(o, x), this.Dom.swapEl(o.el, x.el), this.Dom.hasEl(this.el, o.el) !== this.Dom.hasEl(this.el, x.el) && this.filter(), this
                },
                addChildView: function(o, x) {
                    return !o || o._isDestroyed || ((!x || x >= this.children.length) && (this._addedViews = [o]), this._addChild(o, x), this._showChildren()), o
                },
                detachChildView: function(o) {
                    return this.removeChildView(o, {
                        shouldDetach: !0
                    }), o
                },
                removeChildView: function(o, x) {
                    return o && (this._removeChildView(o, x), this._removeChild(o), this.isEmpty() && this._showEmptyView(), o)
                },
                _removeChildViews: function(o) {
                    i.each(o, i.bind(this._removeChildView, this))
                },
                _removeChildView: function(o) {
                    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = x.shouldDetach;
                    o.off("destroy", this.removeChildView, this), O ? this._detachChildView(o) : this._destroyChildView(o), this.stopListening(o)
                },
                _destroyChildView: function(o) {
                    o._isDestroyed || (o._shouldDisableEvents = this.monitorViewEvents === !1, q(o))
                },
                _removeChildren: function() {
                    this._destroyChildren();
                    var o = this.getEmptyRegion();
                    o.destroy(), delete this._addedViews
                },
                _destroyChildren: function() {
                    !this.children || !this.children.length || (this.triggerMethod("before:destroy:children", this), this.monitorViewEvents === !1 && this.Dom.detachContents(this.el, this.$el), i.each(this.children._views, i.bind(this._removeChildView, this)), this.triggerMethod("destroy:children", this))
                }
            }, {
                setDomApi: F
            });
        i.extend(vi.prototype, X);
        var $i = ["childViewContainer", "template", "templateContext"],
            yi = kn.extend({
                constructor: function(o) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, $i), kn.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(o) {
                    var x = this.childView;
                    if (!x) return this.constructor;
                    if (x = this._getView(x, o), !x) throw new we({
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
                attachBuffer: function(o, x) {
                    var O = this.getChildViewContainer(o);
                    this.Dom.appendContents(O[0], x, {
                        _$el: O
                    })
                },
                _insertAfter: function(o) {
                    var x = this.getChildViewContainer(this, o);
                    this.Dom.appendContents(x[0], o.el, {
                        _$el: x,
                        _$contents: o.$el
                    })
                },
                _appendReorderedChildren: function(o) {
                    var x = this.getChildViewContainer(this);
                    this.Dom.appendContents(x[0], o, {
                        _$el: x
                    })
                },
                getChildViewContainer: function(o, x) {
                    if (o.$childViewContainer) return o.$childViewContainer;
                    var O = void 0,
                        Q = o.childViewContainer;
                    if (Q) {
                        var Ce = i.result(o, "childViewContainer");
                        if (Ce.charAt(0) === "@" && o.ui ? O = o.ui[Ce.substr(4)] : O = this.$(Ce), O.length <= 0) throw new we({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + o.childViewContainer
                        })
                    } else O = o.$el;
                    return o.$childViewContainer = O, O
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            wi = i.pick(Vn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(yi.prototype, wi);
        var Fi = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            ji = g.extend({
                cidPrefix: "mnb",
                constructor: function(o, x) {
                    this.view = x, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, o)), this.mergeOptions(this.options, Fi), this.ui = i.extend({}, i.result(this, "ui"), i.result(x, "ui")), g.apply(this, arguments)
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
                getUI: function(o) {
                    return this._getUI(o)
                },
                delegateEntityEvents: function() {
                    return this._delegateEntityEvents(this.view.model, this.view.collection), this
                },
                undelegateEntityEvents: function() {
                    return this._undelegateEntityEvents(this.view.model, this.view.collection), this
                },
                getEvents: function() {
                    var o = this,
                        x = this.normalizeUIKeys(i.result(this, "events"));
                    return i.reduce(x, function(O, Q, Ce) {
                        return i.isFunction(Q) || (Q = o[Q]), Q && (Ce = Me(Ce, o.cid), O[Ce] = i.bind(Q, o)), O
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, o)
                    }
                }
            });
        i.extend(ji.prototype, Se, ct, Je);
        var mn = ["region", "regionClass"],
            zi = g.extend({
                cidPrefix: "mna",
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, mn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: pe,
                _initRegion: function() {
                    var o = this.region;
                    if (!!o) {
                        var x = {
                            regionClass: this.regionClass
                        };
                        this._region = Ne(o, x)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(o) {
                    for (var x = this.getRegion(), O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), Ce = 1; Ce < O; Ce++) Q[Ce - 1] = arguments[Ce];
                    return x.show.apply(x, [o].concat(Q))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(o) {
                    return this.triggerMethod("before:start", this, o), this.triggerMethod("start", this, o), this
                }
            }),
            bi = ["appRoutes", "controller"],
            Un = n.Router.extend({
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, bi), n.Router.apply(this, arguments);
                    var x = this.appRoutes,
                        O = this._getController();
                    this.processAppRoutes(O, x), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(o, x) {
                    var O = this._getController();
                    return this._addAppRoute(O, o, x), this
                },
                _processOnRoute: function(o, x) {
                    if (i.isFunction(this.onRoute)) {
                        var O = i.invert(this.appRoutes)[o];
                        this.onRoute(o, O, x)
                    }
                },
                processAppRoutes: function(o, x) {
                    var O = this;
                    if (!x) return this;
                    var Q = i.keys(x).reverse();
                    return i.each(Q, function(Ce) {
                        O._addAppRoute(o, Ce, x[Ce])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(o, x, O) {
                    var Q = o[O];
                    if (!Q) throw new we('Method "' + O + '" was not found on the controller');
                    this.route(x, O, i.bind(Q, o))
                },
                triggerMethod: v
            });
        i.extend(Un.prototype, Ut);

        function Gi() {
            throw new we({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var Ci = n.Marionette,
            et = n.Marionette = {};
        return et.noConflict = function() {
            return n.Marionette = Ci, this
        }, et.bindEvents = m(_e), et.unbindEvents = m(ke), et.bindRequests = m(Ke), et.unbindRequests = m(dt), et.mergeOptions = m(M), et.getOption = m(V), et.normalizeMethods = m(U), et.extend = b, et.isNodeAttached = A, et.deprecate = k, et.triggerMethod = m(v), et.triggerMethodOn = P, et.isEnabled = it, et.setEnabled = xt, et.monitorViewEvents = oe, et.Behaviors = {}, et.Behaviors.behaviorsLookup = Gi, et.Application = zi, et.AppRouter = Un, et.Renderer = Ye, et.TemplateCache = S, et.View = Vn, et.CollectionView = kn, et.NextCollectionView = vi, et.CompositeView = yi, et.Behavior = ji, et.Region = pe, et.Error = we, et.Object = g, et.DEV_MODE = !1, et.FEATURES = De, et.VERSION = f, et.DomApi = N, et.setDomApi = function(y) {
            kn.setDomApi(y), yi.setDomApi(y), vi.setDomApi(y), pe.setDomApi(y), Vn.setDomApi(y)
        }, et
    }), yt && yt.Marionette && (yt.Mn = yt.Marionette)
})(_c);
const mt = _c.exports;
class Eh {
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

function _h() {
    this.__data__ = [], this.size = 0
}
var Sh = _h;

function kh(t, e) {
    return t === e || t !== t && e !== e
}
var lo = kh,
    Th = lo;

function Ah(t, e) {
    for (var n = t.length; n--;)
        if (Th(t[n][0], e)) return n;
    return -1
}
var co = Ah,
    Oh = co,
    Rh = Array.prototype,
    Ih = Rh.splice;

function Mh(t) {
    var e = this.__data__,
        n = Oh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Ih.call(e, n, 1), --this.size, !0
}
var Dh = Mh,
    Lh = co;

function Ph(t) {
    var e = this.__data__,
        n = Lh(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Nh = Ph,
    Vh = co;

function Bh(t) {
    return Vh(this.__data__, t) > -1
}
var $h = Bh,
    Fh = co;

function jh(t, e) {
    var n = this.__data__,
        i = Fh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var zh = jh,
    Gh = Sh,
    Hh = Dh,
    Uh = Nh,
    qh = $h,
    Wh = zh;

function wr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
wr.prototype.clear = Gh;
wr.prototype.delete = Hh;
wr.prototype.get = Uh;
wr.prototype.has = qh;
wr.prototype.set = Wh;
var uo = wr,
    Xh = uo;

function Yh() {
    this.__data__ = new Xh, this.size = 0
}
var Kh = Yh;

function Jh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Qh = Jh;

function Zh(t) {
    return this.__data__.get(t)
}
var ed = Zh;

function td(t) {
    return this.__data__.has(t)
}
var nd = td,
    id = typeof yt == "object" && yt && yt.Object === Object && yt,
    Sc = id,
    rd = Sc,
    sd = typeof self == "object" && self && self.Object === Object && self,
    od = rd || sd || Function("return this")(),
    br = od,
    ad = br,
    ld = ad.Symbol,
    kc = ld,
    bl = kc,
    Tc = Object.prototype,
    cd = Tc.hasOwnProperty,
    ud = Tc.toString,
    Xr = bl ? bl.toStringTag : void 0;

function hd(t) {
    var e = cd.call(t, Xr),
        n = t[Xr];
    try {
        t[Xr] = void 0;
        var i = !0
    } catch {}
    var a = ud.call(t);
    return i && (e ? t[Xr] = n : delete t[Xr]), a
}
var dd = hd,
    fd = Object.prototype,
    pd = fd.toString;

function gd(t) {
    return pd.call(t)
}
var md = gd,
    Cl = kc,
    vd = dd,
    yd = md,
    wd = "[object Null]",
    bd = "[object Undefined]",
    xl = Cl ? Cl.toStringTag : void 0;

function Cd(t) {
    return t == null ? t === void 0 ? bd : wd : xl && xl in Object(t) ? vd(t) : yd(t)
}
var ho = Cd;

function xd(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Bi = xd,
    Ed = ho,
    _d = Bi,
    Sd = "[object AsyncFunction]",
    kd = "[object Function]",
    Td = "[object GeneratorFunction]",
    Ad = "[object Proxy]";

function Od(t) {
    if (!_d(t)) return !1;
    var e = Ed(t);
    return e == kd || e == Td || e == Sd || e == Ad
}
var Fa = Od,
    Rd = br,
    Id = Rd["__core-js_shared__"],
    Md = Id,
    ta = Md,
    El = function() {
        var t = /[^.]+$/.exec(ta && ta.keys && ta.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Dd(t) {
    return !!El && El in t
}
var Ld = Dd,
    Pd = Function.prototype,
    Nd = Pd.toString;

function Vd(t) {
    if (t != null) {
        try {
            return Nd.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Bd = Vd,
    $d = Fa,
    Fd = Ld,
    jd = Bi,
    zd = Bd,
    Gd = /[\\^$.*+?()[\]{}|]/g,
    Hd = /^\[object .+?Constructor\]$/,
    Ud = Function.prototype,
    qd = Object.prototype,
    Wd = Ud.toString,
    Xd = qd.hasOwnProperty,
    Yd = RegExp("^" + Wd.call(Xd).replace(Gd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Kd(t) {
    if (!jd(t) || Fd(t)) return !1;
    var e = $d(t) ? Yd : Hd;
    return e.test(zd(t))
}
var Jd = Kd;

function Qd(t, e) {
    return t == null ? void 0 : t[e]
}
var Zd = Qd,
    ef = Jd,
    tf = Zd;

function nf(t, e) {
    var n = tf(t, e);
    return ef(n) ? n : void 0
}
var ja = nf,
    rf = ja,
    sf = br,
    of = rf(sf, "Map"),
    Ac = of,
    af = ja,
    lf = af(Object, "create"),
    fo = lf,
    _l = fo;

function cf() {
    this.__data__ = _l ? _l(null) : {}, this.size = 0
}
var uf = cf;

function hf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var df = hf,
    ff = fo,
    pf = "__lodash_hash_undefined__",
    gf = Object.prototype,
    mf = gf.hasOwnProperty;

function vf(t) {
    var e = this.__data__;
    if (ff) {
        var n = e[t];
        return n === pf ? void 0 : n
    }
    return mf.call(e, t) ? e[t] : void 0
}
var yf = vf,
    wf = fo,
    bf = Object.prototype,
    Cf = bf.hasOwnProperty;

function xf(t) {
    var e = this.__data__;
    return wf ? e[t] !== void 0 : Cf.call(e, t)
}
var Ef = xf,
    _f = fo,
    Sf = "__lodash_hash_undefined__";

function kf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = _f && e === void 0 ? Sf : e, this
}
var Tf = kf,
    Af = uf,
    Of = df,
    Rf = yf,
    If = Ef,
    Mf = Tf;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = Af;
Cr.prototype.delete = Of;
Cr.prototype.get = Rf;
Cr.prototype.has = If;
Cr.prototype.set = Mf;
var Df = Cr,
    Sl = Df,
    Lf = uo,
    Pf = Ac;

function Nf() {
    this.size = 0, this.__data__ = {
        hash: new Sl,
        map: new(Pf || Lf),
        string: new Sl
    }
}
var Vf = Nf;

function Bf(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var $f = Bf,
    Ff = $f;

function jf(t, e) {
    var n = t.__data__;
    return Ff(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var po = jf,
    zf = po;

function Gf(t) {
    var e = zf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Hf = Gf,
    Uf = po;

function qf(t) {
    return Uf(this, t).get(t)
}
var Wf = qf,
    Xf = po;

function Yf(t) {
    return Xf(this, t).has(t)
}
var Kf = Yf,
    Jf = po;

function Qf(t, e) {
    var n = Jf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Zf = Qf,
    ep = Vf,
    tp = Hf,
    np = Wf,
    ip = Kf,
    rp = Zf;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = ep;
xr.prototype.delete = tp;
xr.prototype.get = np;
xr.prototype.has = ip;
xr.prototype.set = rp;
var sp = xr,
    op = uo,
    ap = Ac,
    lp = sp,
    cp = 200;

function up(t, e) {
    var n = this.__data__;
    if (n instanceof op) {
        var i = n.__data__;
        if (!ap || i.length < cp - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new lp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var hp = up,
    dp = uo,
    fp = Kh,
    pp = Qh,
    gp = ed,
    mp = nd,
    vp = hp;

function Er(t) {
    var e = this.__data__ = new dp(t);
    this.size = e.size
}
Er.prototype.clear = fp;
Er.prototype.delete = pp;
Er.prototype.get = gp;
Er.prototype.has = mp;
Er.prototype.set = vp;
var yp = Er,
    wp = ja,
    bp = function() {
        try {
            var t = wp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Oc = bp,
    kl = Oc;

function Cp(t, e, n) {
    e == "__proto__" && kl ? kl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var za = Cp,
    xp = za,
    Ep = lo;

function _p(t, e, n) {
    (n !== void 0 && !Ep(t[e], n) || n === void 0 && !(e in t)) && xp(t, e, n)
}
var Rc = _p;

function Sp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), m = i(e), b = m.length; b--;) {
            var k = m[t ? b : ++a];
            if (n(f[k], k, f) === !1) break
        }
        return e
    }
}
var kp = Sp,
    Tp = kp,
    Ap = Tp(),
    Op = Ap,
    Ea = {
        exports: {}
    };
(function(t, e) {
    var n = br,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        m = f ? n.Buffer : void 0,
        b = m ? m.allocUnsafe : void 0;

    function k(A, M) {
        if (M) return A.slice();
        var V = A.length,
            U = b ? b(V) : new A.constructor(V);
        return A.copy(U), U
    }
    t.exports = k
})(Ea, Ea.exports);
var Rp = br,
    Ip = Rp.Uint8Array,
    Mp = Ip,
    Tl = Mp;

function Dp(t) {
    var e = new t.constructor(t.byteLength);
    return new Tl(e).set(new Tl(t)), e
}
var Lp = Dp,
    Pp = Lp;

function Np(t, e) {
    var n = e ? Pp(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Vp = Np;

function Bp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var $p = Bp,
    Fp = Bi,
    Al = Object.create,
    jp = function() {
        function t() {}
        return function(e) {
            if (!Fp(e)) return {};
            if (Al) return Al(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    zp = jp;

function Gp(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Hp = Gp,
    Up = Hp,
    qp = Up(Object.getPrototypeOf, Object),
    Ic = qp,
    Wp = Object.prototype;

function Xp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || Wp;
    return t === n
}
var Mc = Xp,
    Yp = zp,
    Kp = Ic,
    Jp = Mc;

function Qp(t) {
    return typeof t.constructor == "function" && !Jp(t) ? Yp(Kp(t)) : {}
}
var Zp = Qp;

function eg(t) {
    return t != null && typeof t == "object"
}
var us = eg,
    tg = ho,
    ng = us,
    ig = "[object Arguments]";

function rg(t) {
    return ng(t) && tg(t) == ig
}
var sg = rg,
    Ol = sg,
    og = us,
    Dc = Object.prototype,
    ag = Dc.hasOwnProperty,
    lg = Dc.propertyIsEnumerable,
    cg = Ol(function() {
        return arguments
    }()) ? Ol : function(t) {
        return og(t) && ag.call(t, "callee") && !lg.call(t, "callee")
    },
    Lc = cg,
    ug = Array.isArray,
    Pc = ug,
    hg = 9007199254740991;

function dg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hg
}
var Nc = dg,
    fg = Fa,
    pg = Nc;

function gg(t) {
    return t != null && pg(t.length) && !fg(t)
}
var Ga = gg,
    mg = Ga,
    vg = us;

function yg(t) {
    return vg(t) && mg(t)
}
var wg = yg,
    Ks = {
        exports: {}
    };

function bg() {
    return !1
}
var Cg = bg;
(function(t, e) {
    var n = br,
        i = Cg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        m = f && f.exports === a,
        b = m ? n.Buffer : void 0,
        k = b ? b.isBuffer : void 0,
        A = k || i;
    t.exports = A
})(Ks, Ks.exports);
var xg = ho,
    Eg = Ic,
    _g = us,
    Sg = "[object Object]",
    kg = Function.prototype,
    Tg = Object.prototype,
    Vc = kg.toString,
    Ag = Tg.hasOwnProperty,
    Og = Vc.call(Object);

function Rg(t) {
    if (!_g(t) || xg(t) != Sg) return !1;
    var e = Eg(t);
    if (e === null) return !0;
    var n = Ag.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Vc.call(n) == Og
}
var Ig = Rg,
    Mg = ho,
    Dg = Nc,
    Lg = us,
    Pg = "[object Arguments]",
    Ng = "[object Array]",
    Vg = "[object Boolean]",
    Bg = "[object Date]",
    $g = "[object Error]",
    Fg = "[object Function]",
    jg = "[object Map]",
    zg = "[object Number]",
    Gg = "[object Object]",
    Hg = "[object RegExp]",
    Ug = "[object Set]",
    qg = "[object String]",
    Wg = "[object WeakMap]",
    Xg = "[object ArrayBuffer]",
    Yg = "[object DataView]",
    Kg = "[object Float32Array]",
    Jg = "[object Float64Array]",
    Qg = "[object Int8Array]",
    Zg = "[object Int16Array]",
    em = "[object Int32Array]",
    tm = "[object Uint8Array]",
    nm = "[object Uint8ClampedArray]",
    im = "[object Uint16Array]",
    rm = "[object Uint32Array]",
    Dt = {};
Dt[Kg] = Dt[Jg] = Dt[Qg] = Dt[Zg] = Dt[em] = Dt[tm] = Dt[nm] = Dt[im] = Dt[rm] = !0;
Dt[Pg] = Dt[Ng] = Dt[Xg] = Dt[Vg] = Dt[Yg] = Dt[Bg] = Dt[$g] = Dt[Fg] = Dt[jg] = Dt[zg] = Dt[Gg] = Dt[Hg] = Dt[Ug] = Dt[qg] = Dt[Wg] = !1;

function sm(t) {
    return Lg(t) && Dg(t.length) && !!Dt[Mg(t)]
}
var om = sm;

function am(t) {
    return function(e) {
        return t(e)
    }
}
var lm = am,
    _a = {
        exports: {}
    };
(function(t, e) {
    var n = Sc,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        m = f && n.process,
        b = function() {
            try {
                var k = a && a.require && a.require("util").types;
                return k || m && m.binding && m.binding("util")
            } catch {}
        }();
    t.exports = b
})(_a, _a.exports);
var cm = om,
    um = lm,
    Rl = _a.exports,
    Il = Rl && Rl.isTypedArray,
    hm = Il ? um(Il) : cm,
    Bc = hm;

function dm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var $c = dm,
    fm = za,
    pm = lo,
    gm = Object.prototype,
    mm = gm.hasOwnProperty;

function vm(t, e, n) {
    var i = t[e];
    (!(mm.call(t, e) && pm(i, n)) || n === void 0 && !(e in t)) && fm(t, e, n)
}
var ym = vm,
    wm = ym,
    bm = za;

function Cm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, m = e.length; ++f < m;) {
        var b = e[f],
            k = i ? i(n[b], t[b], b, n, t) : void 0;
        k === void 0 && (k = t[b]), a ? bm(n, b, k) : wm(n, b, k)
    }
    return n
}
var xm = Cm;

function Em(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var _m = Em,
    Sm = 9007199254740991,
    km = /^(?:0|[1-9]\d*)$/;

function Tm(t, e) {
    var n = typeof t;
    return e = e == null ? Sm : e, !!e && (n == "number" || n != "symbol" && km.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Fc = Tm,
    Am = _m,
    Om = Lc,
    Rm = Pc,
    Im = Ks.exports,
    Mm = Fc,
    Dm = Bc,
    Lm = Object.prototype,
    Pm = Lm.hasOwnProperty;

function Nm(t, e) {
    var n = Rm(t),
        i = !n && Om(t),
        a = !n && !i && Im(t),
        f = !n && !i && !a && Dm(t),
        m = n || i || a || f,
        b = m ? Am(t.length, String) : [],
        k = b.length;
    for (var A in t)(e || Pm.call(t, A)) && !(m && (A == "length" || a && (A == "offset" || A == "parent") || f && (A == "buffer" || A == "byteLength" || A == "byteOffset") || Mm(A, k))) && b.push(A);
    return b
}
var Vm = Nm;

function Bm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var $m = Bm,
    Fm = Bi,
    jm = Mc,
    zm = $m,
    Gm = Object.prototype,
    Hm = Gm.hasOwnProperty;

function Um(t) {
    if (!Fm(t)) return zm(t);
    var e = jm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Hm.call(t, i)) || n.push(i);
    return n
}
var qm = Um,
    Wm = Vm,
    Xm = qm,
    Ym = Ga;

function Km(t) {
    return Ym(t) ? Wm(t, !0) : Xm(t)
}
var jc = Km,
    Jm = xm,
    Qm = jc;

function Zm(t) {
    return Jm(t, Qm(t))
}
var ev = Zm,
    Ml = Rc,
    tv = Ea.exports,
    nv = Vp,
    iv = $p,
    rv = Zp,
    Dl = Lc,
    Ll = Pc,
    sv = wg,
    ov = Ks.exports,
    av = Fa,
    lv = Bi,
    cv = Ig,
    uv = Bc,
    Pl = $c,
    hv = ev;

function dv(t, e, n, i, a, f, m) {
    var b = Pl(t, n),
        k = Pl(e, n),
        A = m.get(k);
    if (A) {
        Ml(t, n, A);
        return
    }
    var M = f ? f(b, k, n + "", t, e, m) : void 0,
        V = M === void 0;
    if (V) {
        var U = Ll(k),
            ne = !U && ov(k),
            K = !U && !ne && uv(k);
        M = k, U || ne || K ? Ll(b) ? M = b : sv(b) ? M = iv(b) : ne ? (V = !1, M = tv(k, !0)) : K ? (V = !1, M = nv(k, !0)) : M = [] : cv(k) || Dl(k) ? (M = b, Dl(b) ? M = hv(b) : (!lv(b) || av(b)) && (M = rv(k))) : V = !1
    }
    V && (m.set(k, M), a(M, k, i, f, m), m.delete(k)), Ml(t, n, M)
}
var fv = dv,
    pv = yp,
    gv = Rc,
    mv = Op,
    vv = fv,
    yv = Bi,
    wv = jc,
    bv = $c;

function zc(t, e, n, i, a) {
    t !== e && mv(e, function(f, m) {
        if (a || (a = new pv), yv(f)) vv(t, e, m, n, zc, i, a);
        else {
            var b = i ? i(bv(t, m), f, m + "", t, e, a) : void 0;
            b === void 0 && (b = f), gv(t, m, b)
        }
    }, wv)
}
var Cv = zc;

function xv(t) {
    return t
}
var Gc = xv;

function Ev(t, e, n) {
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
var _v = Ev,
    Sv = _v,
    Nl = Math.max;

function kv(t, e, n) {
    return e = Nl(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = Nl(i.length - e, 0), m = Array(f); ++a < f;) m[a] = i[e + a];
            a = -1;
            for (var b = Array(e + 1); ++a < e;) b[a] = i[a];
            return b[e] = n(m), Sv(t, this, b)
        }
}
var Tv = kv;

function Av(t) {
    return function() {
        return t
    }
}
var Ov = Av,
    Rv = Ov,
    Vl = Oc,
    Iv = Gc,
    Mv = Vl ? function(t, e) {
        return Vl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Rv(e),
            writable: !0
        })
    } : Iv,
    Dv = Mv,
    Lv = 800,
    Pv = 16,
    Nv = Date.now;

function Vv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Nv(),
            a = Pv - (i - n);
        if (n = i, a > 0) {
            if (++e >= Lv) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Bv = Vv,
    $v = Dv,
    Fv = Bv,
    jv = Fv($v),
    zv = jv,
    Gv = Gc,
    Hv = Tv,
    Uv = zv;

function qv(t, e) {
    return Uv(Hv(t, e, Gv), t + "")
}
var Wv = qv,
    Xv = lo,
    Yv = Ga,
    Kv = Fc,
    Jv = Bi;

function Qv(t, e, n) {
    if (!Jv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Yv(n) && Kv(e, n.length) : i == "string" && e in n) ? Xv(n[e], t) : !1
}
var Zv = Qv,
    ey = Wv,
    ty = Zv;

function ny(t) {
    return ey(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            m = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, m && ty(n[0], n[1], m) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var b = n[i];
            b && t(e, b, i, f)
        }
        return e
    })
}
var iy = ny,
    ry = Cv,
    sy = iy,
    oy = sy(function(t, e, n) {
        ry(t, e, n)
    }),
    ay = oy;
class Sa {
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
        return ay(e[0], ...e)
    }
}
ot(Sa, "locale"), ot(Sa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const ml = class {
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
        return n.reduce((i, a) => (i.replaceAll(`<${a[0]}>`, `[${a[1]}]`), i.replaceAll(`</${a[0]}>`, `</${a[1]}>`), i), e)
    }
    static hexToRgb(e) {
        const n = new ArrayBuffer(4);
        new DataView(n).setUint32(0, parseInt(e.replace("#", ""), 16), !1);
        const a = new Uint8Array(n);
        return `${a[1]},${a[2]},${a[3]}`
    }
    static adjustColor(e, n) {
        let i = !1,
            a = e;
        a[0] === "#" && (a = a.slice(1), i = !0);
        const f = parseInt(a, 16),
            m = Math.min(Math.max(0, (f >> 16) * n), 255),
            b = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let A = (Math.min(Math.max(0, (f & 255) * n), 255) | b << 8 | m << 16).toString(16);
        for (; A.length < a.length;) A = `0${A}`;
        return (i ? "#" : "") + A
    }
    static isInTolerance(e, n, i) {
        return !(Math.abs(e.x - n.x) < i || Math.abs(e.y - n.y) > i)
    }
    static getDistanceBetweenPoints(e, n) {
        const i = [e.x - n.x, e.y - n.y],
            a = Math.hypot(...i);
        return Math.round(a * 100) / 100
    }
    static getMidpoint(e, n) {
        return {
            x: (e.x + n.x) / 2,
            y: (e.y + n.y) / 2
        }
    }
    static getAngleBetweenPoints(e, n) {
        let a = Math.atan2(n.y - e.y, n.x - e.x) * (180 / Math.PI);
        return a < 0 && (a += 360), 360 - a
    }
    static getAngularDistance(e, n) {
        let i = (n - e) % 360;
        const a = i < 0 ? 1 : -1;
        return i = Math.abs(i), i > 180 ? a * (360 - i) : a * i
    }
    static getVelocity(e, n, i, a) {
        return this.getDistanceBetweenPoints(e, i) / (a - n)
    }
    static isInsideElement(e, n) {
        const i = n.getBoundingClientRect();
        return !(e.x < i.left || e.x > i.left + i.width || e.y < i.top || e.y > i.top + i.height)
    }
};
let nn = ml;
ot(nn, "queryParams", new URLSearchParams(window.location.search)), ot(nn, "getQueryParam", e => ml.queryParams.get(e)), ot(nn, "sleep", e => new Promise(n => {
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
        var i, a;
        delete window.tv.storage, window.tv.storage = {
            namespace: (a = (i = nn.getQueryParam("namespace")) != null ? i : nn.getQueryParam("ns")) != null ? a : this.defaultNamespace,
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
        var m;
        const n = e.toLowerCase(),
            i = (m = this.get("tags")) != null ? m : "[]",
            a = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(b => {
            const k = b.split("-")[0];
            return a !== k
        }), f.push(n), this.set("tags", JSON.stringify(f))
    }
    static getScopedKey(e, n) {
        const i = `${this.namespace}:${e}`,
            a = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            f = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (n === "none") return i;
        if (n === "tag") {
            if (!a) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return a
        }
        if (n === "code") {
            if (!f) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return f
        }
        return f && window.localStorage.getItem(f) !== null ? f : a && window.localStorage.getItem(a) !== null ? a : i
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
            const a = i.replace(`${e}-`, `${n}:`),
                f = window.localStorage.getItem(i);
            !f || (window.localStorage.setItem(a, f), window.localStorage.removeItem(i))
        })
    }
}
ot(Zt, "defaultNamespace", "tv");
class Vi {
    constructor() {
        ot(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Vi.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!Zt.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            m = Zt.get("galleries") || "[]";
        try {
            const b = JSON.parse(m) || [];
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
        Vi.setAsViewed(e), this.artifacts = this.list()
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
        const e = new Intl.DateTimeFormat(Sa.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = Zt.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const m = new Date(f.time),
                    b = e.format(m),
                    k = f.url.split("/"),
                    A = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let M = f.categoryId;
                return M || (f.url.indexOf("Quiplash2") !== -1 ? M = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? M = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? M = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (M = "TriviaDeathResults")), {
                    id: A,
                    gameName: M,
                    date: b,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var ka = {
    exports: {}
};
(function(t, e) {
    var n = typeof self < "u" ? self : yt,
        i = function() {
            function f() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return f.prototype = n, new f
        }();
    (function(f) {
        (function(m) {
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

            function k(H) {
                return H && DataView.prototype.isPrototypeOf(H)
            }
            if (b.arrayBuffer) var A = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                M = ArrayBuffer.isView || function(H) {
                    return H && A.indexOf(Object.prototype.toString.call(H)) > -1
                };

            function V(H) {
                if (typeof H != "string" && (H = String(H)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(H)) throw new TypeError("Invalid character in header field name");
                return H.toLowerCase()
            }

            function U(H) {
                return typeof H != "string" && (H = String(H)), H
            }

            function ne(H) {
                var oe = {
                    next: function() {
                        var Te = H.shift();
                        return {
                            done: Te === void 0,
                            value: Te
                        }
                    }
                };
                return b.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function K(H) {
                this.map = {}, H instanceof K ? H.forEach(function(oe, Te) {
                    this.append(Te, oe)
                }, this) : Array.isArray(H) ? H.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : H && Object.getOwnPropertyNames(H).forEach(function(oe) {
                    this.append(oe, H[oe])
                }, this)
            }
            K.prototype.append = function(H, oe) {
                H = V(H), oe = U(oe);
                var Te = this.map[H];
                this.map[H] = Te ? Te + ", " + oe : oe
            }, K.prototype.delete = function(H) {
                delete this.map[V(H)]
            }, K.prototype.get = function(H) {
                return H = V(H), this.has(H) ? this.map[H] : null
            }, K.prototype.has = function(H) {
                return this.map.hasOwnProperty(V(H))
            }, K.prototype.set = function(H, oe) {
                this.map[V(H)] = U(oe)
            }, K.prototype.forEach = function(H, oe) {
                for (var Te in this.map) this.map.hasOwnProperty(Te) && H.call(oe, this.map[Te], Te, this)
            }, K.prototype.keys = function() {
                var H = [];
                return this.forEach(function(oe, Te) {
                    H.push(Te)
                }), ne(H)
            }, K.prototype.values = function() {
                var H = [];
                return this.forEach(function(oe) {
                    H.push(oe)
                }), ne(H)
            }, K.prototype.entries = function() {
                var H = [];
                return this.forEach(function(oe, Te) {
                    H.push([Te, oe])
                }), ne(H)
            }, b.iterable && (K.prototype[Symbol.iterator] = K.prototype.entries);

            function re(H) {
                if (H.bodyUsed) return Promise.reject(new TypeError("Already read"));
                H.bodyUsed = !0
            }

            function v(H) {
                return new Promise(function(oe, Te) {
                    H.onload = function() {
                        oe(H.result)
                    }, H.onerror = function() {
                        Te(H.error)
                    }
                })
            }

            function P(H) {
                var oe = new FileReader,
                    Te = v(oe);
                return oe.readAsArrayBuffer(H), Te
            }

            function W(H) {
                var oe = new FileReader,
                    Te = v(oe);
                return oe.readAsText(H), Te
            }

            function ae(H) {
                for (var oe = new Uint8Array(H), Te = new Array(oe.length), we = 0; we < oe.length; we++) Te[we] = String.fromCharCode(oe[we]);
                return Te.join("")
            }

            function se(H) {
                if (H.slice) return H.slice(0);
                var oe = new Uint8Array(H.byteLength);
                return oe.set(new Uint8Array(H)), oe.buffer
            }

            function ve() {
                return this.bodyUsed = !1, this._initBody = function(H) {
                    this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : b.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : b.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : b.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : b.arrayBuffer && b.blob && k(H) ? (this._bodyArrayBuffer = se(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : b.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || M(H)) ? this._bodyArrayBuffer = se(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : b.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, b.blob && (this.blob = function() {
                    var H = re(this);
                    if (H) return H;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? re(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(P)
                }), this.text = function() {
                    var H = re(this);
                    if (H) return H;
                    if (this._bodyBlob) return W(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, b.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Ee(H) {
                var oe = H.toUpperCase();
                return d.indexOf(oe) > -1 ? oe : H
            }

            function Ae(H, oe) {
                oe = oe || {};
                var Te = oe.body;
                if (H instanceof Ae) {
                    if (H.bodyUsed) throw new TypeError("Already read");
                    this.url = H.url, this.credentials = H.credentials, oe.headers || (this.headers = new K(H.headers)), this.method = H.method, this.mode = H.mode, this.signal = H.signal, !Te && H._bodyInit != null && (Te = H._bodyInit, H.bodyUsed = !0)
                } else this.url = String(H);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new K(oe.headers)), this.method = Ee(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Te) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Te)
            }
            Ae.prototype.clone = function() {
                return new Ae(this, {
                    body: this._bodyInit
                })
            };

            function Pe(H) {
                var oe = new FormData;
                return H.trim().split("&").forEach(function(Te) {
                    if (Te) {
                        var we = Te.split("="),
                            ye = we.shift().replace(/\+/g, " "),
                            ue = we.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(ye), decodeURIComponent(ue))
                    }
                }), oe
            }

            function lt(H) {
                var oe = new K,
                    Te = H.replace(/\r?\n[\t ]+/g, " ");
                return Te.split(/\r?\n/).forEach(function(we) {
                    var ye = we.split(":"),
                        ue = ye.shift().trim();
                    if (ue) {
                        var _e = ye.join(":").trim();
                        oe.append(ue, _e)
                    }
                }), oe
            }
            ve.call(Ae.prototype);

            function Be(H, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new K(oe.headers), this.url = oe.url || "", this._initBody(H)
            }
            ve.call(Be.prototype), Be.prototype.clone = function() {
                return new Be(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new K(this.headers),
                    url: this.url
                })
            }, Be.error = function() {
                var H = new Be(null, {
                    status: 0,
                    statusText: ""
                });
                return H.type = "error", H
            };
            var J = [301, 302, 303, 307, 308];
            Be.redirect = function(H, oe) {
                if (J.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
                    status: oe,
                    headers: {
                        location: H
                    }
                })
            }, m.DOMException = f.DOMException;
            try {
                new m.DOMException
            } catch {
                m.DOMException = function(oe, Te) {
                    this.message = oe, this.name = Te;
                    var we = Error(oe);
                    this.stack = we.stack
                }, m.DOMException.prototype = Object.create(Error.prototype), m.DOMException.prototype.constructor = m.DOMException
            }

            function je(H, oe) {
                return new Promise(function(Te, we) {
                    var ye = new Ae(H, oe);
                    if (ye.signal && ye.signal.aborted) return we(new m.DOMException("Aborted", "AbortError"));
                    var ue = new XMLHttpRequest;

                    function _e() {
                        ue.abort()
                    }
                    ue.onload = function() {
                        var ke = {
                            status: ue.status,
                            statusText: ue.statusText,
                            headers: lt(ue.getAllResponseHeaders() || "")
                        };
                        ke.url = "responseURL" in ue ? ue.responseURL : ke.headers.get("X-Request-URL");
                        var $e = "response" in ue ? ue.response : ue.responseText;
                        Te(new Be($e, ke))
                    }, ue.onerror = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        we(new m.DOMException("Aborted", "AbortError"))
                    }, ue.open(ye.method, ye.url, !0), ye.credentials === "include" ? ue.withCredentials = !0 : ye.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && b.blob && (ue.responseType = "blob"), ye.headers.forEach(function(ke, $e) {
                        ue.setRequestHeader($e, ke)
                    }), ye.signal && (ye.signal.addEventListener("abort", _e), ue.onreadystatechange = function() {
                        ue.readyState === 4 && ye.signal.removeEventListener("abort", _e)
                    }), ue.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                })
            }
            return je.polyfill = !0, f.fetch || (f.fetch = je, f.Headers = K, f.Request = Ae, f.Response = Be), m.Headers = K, m.Request = Ae, m.Response = Be, m.fetch = je, Object.defineProperty(m, "__esModule", {
                value: !0
            }), m
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(ka, ka.exports);
var ly = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var e = {},
            n = Symbol("test"),
            i = Object(n);
        if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]") return !1;
        var a = 42;
        e[n] = a;
        for (n in e) return !1;
        if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0) return !1;
        var f = Object.getOwnPropertySymbols(e);
        if (f.length !== 1 || f[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var m = Object.getOwnPropertyDescriptor(e, n);
            if (m.value !== a || m.enumerable !== !0) return !1
        }
        return !0
    },
    Bl = typeof Symbol < "u" && Symbol,
    cy = ly,
    uy = function() {
        return typeof Bl != "function" || typeof Symbol != "function" || typeof Bl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : cy()
    },
    hy = "Function.prototype.bind called on incompatible ",
    na = Array.prototype.slice,
    dy = Object.prototype.toString,
    fy = "[object Function]",
    py = function(e) {
        var n = this;
        if (typeof n != "function" || dy.call(n) !== fy) throw new TypeError(hy + n);
        for (var i = na.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var M = n.apply(this, i.concat(na.call(arguments)));
                    return Object(M) === M ? M : this
                } else return n.apply(e, i.concat(na.call(arguments)))
            }, m = Math.max(0, n.length - i.length), b = [], k = 0; k < m; k++) b.push("$" + k);
        if (a = Function("binder", "return function (" + b.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var A = function() {};
            A.prototype = n.prototype, a.prototype = new A, A.prototype = null
        }
        return a
    },
    gy = py,
    Ha = Function.prototype.bind || gy,
    my = Ha,
    vy = my.call(Function.call, Object.prototype.hasOwnProperty),
    vt, gr = SyntaxError,
    Hc = Function,
    ur = TypeError,
    ia = function(t) {
        try {
            return Hc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Pi = Object.getOwnPropertyDescriptor;
if (Pi) try {
    Pi({}, "")
} catch {
    Pi = null
}
var ra = function() {
        throw new ur
    },
    yy = Pi ? function() {
        try {
            return arguments.callee, ra
        } catch {
            try {
                return Pi(arguments, "callee").get
            } catch {
                return ra
            }
        }
    }() : ra,
    ir = uy(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    or = {},
    wy = typeof Uint8Array > "u" ? vt : ai(Uint8Array),
    hr = {
        "%AggregateError%": typeof AggregateError > "u" ? vt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? vt : ArrayBuffer,
        "%ArrayIteratorPrototype%": ir ? ai([][Symbol.iterator]()) : vt,
        "%AsyncFromSyncIteratorPrototype%": vt,
        "%AsyncFunction%": or,
        "%AsyncGenerator%": or,
        "%AsyncGeneratorFunction%": or,
        "%AsyncIteratorPrototype%": or,
        "%Atomics%": typeof Atomics > "u" ? vt : Atomics,
        "%BigInt%": typeof BigInt > "u" ? vt : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? vt : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? vt : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? vt : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? vt : FinalizationRegistry,
        "%Function%": Hc,
        "%GeneratorFunction%": or,
        "%Int8Array%": typeof Int8Array > "u" ? vt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? vt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? vt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": ir ? ai(ai([][Symbol.iterator]())) : vt,
        "%JSON%": typeof JSON == "object" ? JSON : vt,
        "%Map%": typeof Map > "u" ? vt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !ir ? vt : ai(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? vt : Promise,
        "%Proxy%": typeof Proxy > "u" ? vt : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? vt : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? vt : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !ir ? vt : ai(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? vt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": ir ? ai("" [Symbol.iterator]()) : vt,
        "%Symbol%": ir ? Symbol : vt,
        "%SyntaxError%": gr,
        "%ThrowTypeError%": yy,
        "%TypedArray%": wy,
        "%TypeError%": ur,
        "%Uint8Array%": typeof Uint8Array > "u" ? vt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? vt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? vt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? vt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? vt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? vt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? vt : WeakSet
    },
    by = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = ia("async function () {}");
        else if (e === "%GeneratorFunction%") n = ia("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = ia("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = ai(a.prototype))
        }
        return hr[e] = n, n
    },
    $l = {
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
    hs = Ha,
    Js = vy,
    Cy = hs.call(Function.call, Array.prototype.concat),
    xy = hs.call(Function.apply, Array.prototype.splice),
    Fl = hs.call(Function.call, String.prototype.replace),
    Qs = hs.call(Function.call, String.prototype.slice),
    Ey = hs.call(Function.call, RegExp.prototype.exec),
    _y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Sy = /\\(\\)?/g,
    ky = function(e) {
        var n = Qs(e, 0, 1),
            i = Qs(e, -1);
        if (n === "%" && i !== "%") throw new gr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new gr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Fl(e, _y, function(f, m, b, k) {
            a[a.length] = b ? Fl(k, Sy, "$1") : m || f
        }), a
    },
    Ty = function(e, n) {
        var i = e,
            a;
        if (Js($l, i) && (a = $l[i], i = "%" + a[0] + "%"), Js(hr, i)) {
            var f = hr[i];
            if (f === or && (f = by(i)), typeof f > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new gr("intrinsic " + e + " does not exist!")
    },
    Ua = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new ur("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new ur('"allowMissing" argument must be a boolean');
        if (Ey(/^%?[^%]*%?$/g, e) === null) throw new gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = ky(e),
            a = i.length > 0 ? i[0] : "",
            f = Ty("%" + a + "%", n),
            m = f.name,
            b = f.value,
            k = !1,
            A = f.alias;
        A && (a = A[0], xy(i, Cy([0, 1], A)));
        for (var M = 1, V = !0; M < i.length; M += 1) {
            var U = i[M],
                ne = Qs(U, 0, 1),
                K = Qs(U, -1);
            if ((ne === '"' || ne === "'" || ne === "`" || K === '"' || K === "'" || K === "`") && ne !== K) throw new gr("property names with quotes must have matching quotes");
            if ((U === "constructor" || !V) && (k = !0), a += "." + U, m = "%" + a + "%", Js(hr, m)) b = hr[m];
            else if (b != null) {
                if (!(U in b)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Pi && M + 1 >= i.length) {
                    var re = Pi(b, U);
                    V = !!re, V && "get" in re && !("originalValue" in re.get) ? b = re.get : b = b[U]
                } else V = Js(b, U), b = b[U];
                V && !k && (hr[m] = b)
            }
        }
        return b
    },
    Uc = {
        exports: {}
    };
(function(t) {
    var e = Ha,
        n = Ua,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(a, i),
        m = n("%Object.getOwnPropertyDescriptor%", !0),
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
        var U = f(e, a, arguments);
        if (m && b) {
            var ne = m(U, "length");
            ne.configurable && b(U, "length", {
                value: 1 + k(0, V.length - (arguments.length - 1))
            })
        }
        return U
    };
    var A = function() {
        return f(e, i, arguments)
    };
    b ? b(t.exports, "apply", {
        value: A
    }) : t.exports.apply = A
})(Uc);
var qc = Ua,
    Wc = Uc.exports,
    Ay = Wc(qc("String.prototype.indexOf")),
    Oy = function(e, n) {
        var i = qc(e, !!n);
        return typeof i == "function" && Ay(e, ".prototype.") > -1 ? Wc(i) : i
    };
const Ry = {},
    Iy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ry
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    My = Ch(Iy);
var qa = typeof Map == "function" && Map.prototype,
    sa = Object.getOwnPropertyDescriptor && qa ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = qa && sa && typeof sa.get == "function" ? sa.get : null,
    Dy = qa && Map.prototype.forEach,
    Wa = typeof Set == "function" && Set.prototype,
    oa = Object.getOwnPropertyDescriptor && Wa ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Wa && oa && typeof oa.get == "function" ? oa.get : null,
    Ly = Wa && Set.prototype.forEach,
    Py = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Py ? WeakMap.prototype.has : null,
    Ny = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Ny ? WeakSet.prototype.has : null,
    Vy = typeof WeakRef == "function" && WeakRef.prototype,
    jl = Vy ? WeakRef.prototype.deref : null,
    By = Boolean.prototype.valueOf,
    $y = Object.prototype.toString,
    Fy = Function.prototype.toString,
    jy = String.prototype.match,
    Xa = String.prototype.slice,
    hi = String.prototype.replace,
    zy = String.prototype.toUpperCase,
    zl = String.prototype.toLowerCase,
    Xc = RegExp.prototype.test,
    Gl = Array.prototype.concat,
    zn = Array.prototype.join,
    Gy = Array.prototype.slice,
    Hl = Math.floor,
    Ta = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    aa = Object.getOwnPropertySymbols,
    Aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Yc = Object.prototype.propertyIsEnumerable,
    Ul = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function ql(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Xc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Hl(-t) : Hl(t);
        if (i !== t) {
            var a = String(i),
                f = Xa.call(e, a.length + 1);
            return hi.call(a, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var Oa = My,
    Wl = Oa.custom,
    Xl = Jc(Wl) ? Wl : null,
    Hy = function t(e, n, i, a) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof m != "boolean" && m !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var b = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Zc(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return b ? ql(e, k) : k
        }
        if (typeof e == "bigint") {
            var A = String(e) + "n";
            return b ? ql(e, A) : A
        }
        var M = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= M && M > 0 && typeof e == "object") return Ra(e) ? "[Array]" : "[Object]";
        var V = lw(f, i);
        if (typeof a > "u") a = [];
        else if (Qc(a, e) >= 0) return "[Circular]";

        function U(je, H, oe) {
            if (H && (a = Gy.call(a), a.push(H)), oe) {
                var Te = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (Te.quoteStyle = f.quoteStyle), t(je, Te, i + 1, a)
            }
            return t(je, f, i + 1, a)
        }
        if (typeof e == "function" && !Yl(e)) {
            var ne = Zy(e),
                K = Ls(e, U);
            return "[Function" + (ne ? ": " + ne : " (anonymous)") + "]" + (K.length > 0 ? " { " + zn.call(K, ", ") + " }" : "")
        }
        if (Jc(e)) {
            var re = mr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Aa.call(e);
            return typeof e == "object" && !mr ? Yr(re) : re
        }
        if (sw(e)) {
            for (var v = "<" + zl.call(String(e.nodeName)), P = e.attributes || [], W = 0; W < P.length; W++) v += " " + P[W].name + "=" + Kc(Uy(P[W].value), "double", f);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + zl.call(String(e.nodeName)) + ">", v
        }
        if (Ra(e)) {
            if (e.length === 0) return "[]";
            var ae = Ls(e, U);
            return V && !aw(ae) ? "[" + Ia(ae, V) + "]" : "[ " + zn.call(ae, ", ") + " ]"
        }
        if (Wy(e)) {
            var se = Ls(e, U);
            return !("cause" in Error.prototype) && "cause" in e && !Yc.call(e, "cause") ? "{ [" + String(e) + "] " + zn.call(Gl.call("[cause]: " + U(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + zn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && m) {
            if (Xl && typeof e[Xl] == "function" && Oa) return Oa(e, {
                depth: M - i
            });
            if (m !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (ew(e)) {
            var ve = [];
            return Dy.call(e, function(je, H) {
                ve.push(U(H, e, !0) + " => " + U(je, e))
            }), Kl("Map", Zs.call(e), ve, V)
        }
        if (iw(e)) {
            var d = [];
            return Ly.call(e, function(je) {
                d.push(U(je, e))
            }), Kl("Set", eo.call(e), d, V)
        }
        if (tw(e)) return la("WeakMap");
        if (rw(e)) return la("WeakSet");
        if (nw(e)) return la("WeakRef");
        if (Yy(e)) return Yr(U(Number(e)));
        if (Jy(e)) return Yr(U(Ta.call(e)));
        if (Ky(e)) return Yr(By.call(e));
        if (Xy(e)) return Yr(U(String(e)));
        if (!qy(e) && !Yl(e)) {
            var Ee = Ls(e, U),
                Ae = Ul ? Ul(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Ae && cn && Object(e) === e && cn in e ? Xa.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Be = Ae || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                J = Be + (lt || Pe ? "[" + zn.call(Gl.call([], lt || [], Pe || []), ": ") + "] " : "");
            return Ee.length === 0 ? J + "{}" : V ? J + "{" + Ia(Ee, V) + "}" : J + "{ " + zn.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function Kc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function Uy(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Ra(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function qy(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Yl(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function Wy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function Xy(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function Yy(t) {
    return pi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Ky(t) {
    return pi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function Jc(t) {
    if (mr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Aa) return !1;
    try {
        return Aa.call(t), !0
    } catch {}
    return !1
}

function Jy(t) {
    if (!t || typeof t != "object" || !Ta) return !1;
    try {
        return Ta.call(t), !0
    } catch {}
    return !1
}
var Qy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return Qy.call(t, e)
}

function pi(t) {
    return $y.call(t)
}

function Zy(t) {
    if (t.name) return t.name;
    var e = jy.call(Fy.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Qc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function ew(t) {
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

function tw(t) {
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

function nw(t) {
    if (!jl || !t || typeof t != "object") return !1;
    try {
        return jl.call(t), !0
    } catch {}
    return !1
}

function iw(t) {
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

function rw(t) {
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

function sw(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Zc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Zc(Xa.call(t, 0, e.maxStringLength), e) + i
    }
    var a = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ow);
    return Kc(a, "single", e)
}

function ow(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + zy.call(e.toString(16))
}

function Yr(t) {
    return "Object(" + t + ")"
}

function la(t) {
    return t + " { ? }"
}

function Kl(t, e, n, i) {
    var a = i ? Ia(n, i) : zn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function aw(t) {
    for (var e = 0; e < t.length; e++)
        if (Qc(t[e], `
`) >= 0) return !1;
    return !0
}

function lw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = zn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: zn.call(Array(e + 1), n)
    }
}

function Ia(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + zn.call(t, "," + n) + `
` + e.prev
}

function Ls(t, e) {
    var n = Ra(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = li(t, a) ? e(t[a], t) : ""
    }
    var f = typeof aa == "function" ? aa(t) : [],
        m;
    if (mr) {
        m = {};
        for (var b = 0; b < f.length; b++) m["$" + f[b]] = f[b]
    }
    for (var k in t) !li(t, k) || n && String(Number(k)) === k && k < t.length || mr && m["$" + k] instanceof Symbol || (Xc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof aa == "function")
        for (var A = 0; A < f.length; A++) Yc.call(t, f[A]) && i.push("[" + e(f[A]) + "]: " + e(t[f[A]], t));
    return i
}
var Ya = Ua,
    _r = Oy,
    cw = Hy,
    uw = Ya("%TypeError%"),
    Ps = Ya("%WeakMap%", !0),
    Ns = Ya("%Map%", !0),
    hw = _r("WeakMap.prototype.get", !0),
    dw = _r("WeakMap.prototype.set", !0),
    fw = _r("WeakMap.prototype.has", !0),
    pw = _r("Map.prototype.get", !0),
    gw = _r("Map.prototype.set", !0),
    mw = _r("Map.prototype.has", !0),
    Ka = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    vw = function(t, e) {
        var n = Ka(t, e);
        return n && n.value
    },
    yw = function(t, e, n) {
        var i = Ka(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    ww = function(t, e) {
        return !!Ka(t, e)
    },
    bw = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new uw("Side channel does not contain " + cw(f))
            },
            get: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return hw(e, f)
                } else if (Ns) {
                    if (n) return pw(n, f)
                } else if (i) return vw(i, f)
            },
            has: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return fw(e, f)
                } else if (Ns) {
                    if (n) return mw(n, f)
                } else if (i) return ww(i, f);
                return !1
            },
            set: function(f, m) {
                Ps && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ps), dw(e, f, m)) : Ns ? (n || (n = new Ns), gw(n, f, m)) : (i || (i = {
                    key: {},
                    next: null
                }), yw(i, f, m))
            }
        };
        return a
    },
    Cw = String.prototype.replace,
    xw = /%20/g,
    ca = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Ja = {
        default: ca.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return Cw.call(t, xw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: ca.RFC1738,
        RFC3986: ca.RFC3986
    },
    Ew = Ja,
    ua = Object.prototype.hasOwnProperty,
    Di = Array.isArray,
    Fn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    _w = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Di(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    eu = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    Sw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Di(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !ua.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Di(e) && !Di(n) && (a = eu(e, i)), Di(e) && Di(n) ? (n.forEach(function(f, m) {
            if (ua.call(e, m)) {
                var b = e[m];
                b && typeof b == "object" && f && typeof f == "object" ? e[m] = t(b, f, i) : e.push(f)
            } else e[m] = f
        }), e) : Object.keys(n).reduce(function(f, m) {
            var b = n[m];
            return ua.call(f, m) ? f[m] = t(f[m], b, i) : f[m] = b, f
        }, a)
    },
    kw = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    Tw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Aw = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var m = e;
        if (typeof e == "symbol" ? m = Symbol.prototype.toString.call(e) : typeof e != "string" && (m = String(e)), i === "iso-8859-1") return escape(m).replace(/%u[0-9a-f]{4}/gi, function(M) {
            return "%26%23" + parseInt(M.slice(2), 16) + "%3B"
        });
        for (var b = "", k = 0; k < m.length; ++k) {
            var A = m.charCodeAt(k);
            if (A === 45 || A === 46 || A === 95 || A === 126 || A >= 48 && A <= 57 || A >= 65 && A <= 90 || A >= 97 && A <= 122 || f === Ew.RFC1738 && (A === 40 || A === 41)) {
                b += m.charAt(k);
                continue
            }
            if (A < 128) {
                b = b + Fn[A];
                continue
            }
            if (A < 2048) {
                b = b + (Fn[192 | A >> 6] + Fn[128 | A & 63]);
                continue
            }
            if (A < 55296 || A >= 57344) {
                b = b + (Fn[224 | A >> 12] + Fn[128 | A >> 6 & 63] + Fn[128 | A & 63]);
                continue
            }
            k += 1, A = 65536 + ((A & 1023) << 10 | m.charCodeAt(k) & 1023), b += Fn[240 | A >> 18] + Fn[128 | A >> 12 & 63] + Fn[128 | A >> 6 & 63] + Fn[128 | A & 63]
        }
        return b
    },
    Ow = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], m = f.obj[f.prop], b = Object.keys(m), k = 0; k < b.length; ++k) {
                var A = b[k],
                    M = m[A];
                typeof M == "object" && M !== null && i.indexOf(M) === -1 && (n.push({
                    obj: m,
                    prop: A
                }), i.push(M))
            }
        return _w(n), e
    },
    Rw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Iw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Mw = function(e, n) {
        return [].concat(e, n)
    },
    Dw = function(e, n) {
        if (Di(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    tu = {
        arrayToObject: eu,
        assign: kw,
        combine: Mw,
        compact: Ow,
        decode: Tw,
        encode: Aw,
        isBuffer: Iw,
        isRegExp: Rw,
        maybeMap: Dw,
        merge: Sw
    },
    nu = bw,
    Ma = tu,
    is = Ja,
    Lw = Object.prototype.hasOwnProperty,
    Jl = {
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
    ni = Array.isArray,
    Pw = String.prototype.split,
    Nw = Array.prototype.push,
    iu = function(t, e) {
        Nw.apply(t, ni(e) ? e : [e])
    },
    Vw = Date.prototype.toISOString,
    Ql = is.default,
    tn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Ma.encode,
        encodeValuesOnly: !1,
        format: Ql,
        formatter: is.formatters[Ql],
        indices: !1,
        serializeDate: function(e) {
            return Vw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Bw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    ha = {},
    $w = function t(e, n, i, a, f, m, b, k, A, M, V, U, ne, K, re, v) {
        for (var P = e, W = v, ae = 0, se = !1;
            (W = W.get(ha)) !== void 0 && !se;) {
            var ve = W.get(e);
            if (ae += 1, typeof ve < "u") {
                if (ve === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof W.get(ha) > "u" && (ae = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = V(P) : i === "comma" && ni(P) && (P = Ma.maybeMap(P, function(ue) {
                return ue instanceof Date ? V(ue) : ue
            })), P === null) {
            if (f) return b && !K ? b(n, tn.encoder, re, "key", U) : n;
            P = ""
        }
        if (Bw(P) || Ma.isBuffer(P)) {
            if (b) {
                var d = K ? n : b(n, tn.encoder, re, "key", U);
                if (i === "comma" && K) {
                    for (var Ee = Pw.call(String(P), ","), Ae = "", Pe = 0; Pe < Ee.length; ++Pe) Ae += (Pe === 0 ? "" : ",") + ne(b(Ee[Pe], tn.encoder, re, "value", U));
                    return [ne(d) + (a && ni(P) && Ee.length === 1 ? "[]" : "") + "=" + Ae]
                }
                return [ne(d) + "=" + ne(b(P, tn.encoder, re, "value", U))]
            }
            return [ne(n) + "=" + ne(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var Be;
        if (i === "comma" && ni(P)) Be = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ni(k)) Be = k;
        else {
            var J = Object.keys(P);
            Be = A ? J.sort(A) : J
        }
        for (var je = a && ni(P) && P.length === 1 ? n + "[]" : n, H = 0; H < Be.length; ++H) {
            var oe = Be[H],
                Te = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(m && Te === null)) {
                var we = ni(P) ? typeof i == "function" ? i(je, oe) : je : je + (M ? "." + oe : "[" + oe + "]");
                v.set(e, ae);
                var ye = nu();
                ye.set(ha, v), iu(lt, t(Te, we, i, a, f, m, b, k, A, M, V, U, ne, K, re, ye))
            }
        }
        return lt
    },
    Fw = function(e) {
        if (!e) return tn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || tn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!Lw.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = is.formatters[i],
            f = tn.filter;
        return (typeof e.filter == "function" || ni(e.filter)) && (f = e.filter), {
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
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : tn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : tn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : tn.strictNullHandling
        }
    },
    jw = function(t, e) {
        var n = t,
            i = Fw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ni(i.filter) && (f = i.filter, a = f);
        var m = [];
        if (typeof n != "object" || n === null) return "";
        var b;
        e && e.arrayFormat in Jl ? b = e.arrayFormat : e && "indices" in e ? b = e.indices ? "indices" : "repeat" : b = "indices";
        var k = Jl[b];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var A = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var M = nu(), V = 0; V < a.length; ++V) {
            var U = a[V];
            i.skipNulls && n[U] === null || iu(m, $w(n[U], U, k, A, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, M))
        }
        var ne = m.join(i.delimiter),
            K = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? K += "utf8=%26%2310003%3B&" : K += "utf8=%E2%9C%93&"), ne.length > 0 ? K + ne : ""
    },
    vr = tu,
    Da = Object.prototype.hasOwnProperty,
    zw = Array.isArray,
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
    Gw = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    ru = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Hw = "utf8=%26%2310003%3B",
    Uw = "utf8=%E2%9C%93",
    qw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            m = a.split(n.delimiter, f),
            b = -1,
            k, A = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < m.length; ++k) m[k].indexOf("utf8=") === 0 && (m[k] === Uw ? A = "utf-8" : m[k] === Hw && (A = "iso-8859-1"), b = k, k = m.length);
        for (k = 0; k < m.length; ++k)
            if (k !== b) {
                var M = m[k],
                    V = M.indexOf("]="),
                    U = V === -1 ? M.indexOf("=") : V + 1,
                    ne, K;
                U === -1 ? (ne = n.decoder(M, Qt.decoder, A, "key"), K = n.strictNullHandling ? null : "") : (ne = n.decoder(M.slice(0, U), Qt.decoder, A, "key"), K = vr.maybeMap(ru(M.slice(U + 1), n), function(re) {
                    return n.decoder(re, Qt.decoder, A, "value")
                })), K && n.interpretNumericEntities && A === "iso-8859-1" && (K = Gw(K)), M.indexOf("[]=") > -1 && (K = zw(K) ? [K] : K), Da.call(i, ne) ? i[ne] = vr.combine(i[ne], K) : i[ne] = K
            } return i
    },
    Ww = function(t, e, n, i) {
        for (var a = i ? e : ru(e, n), f = t.length - 1; f >= 0; --f) {
            var m, b = t[f];
            if (b === "[]" && n.parseArrays) m = [].concat(a);
            else {
                m = n.plainObjects ? Object.create(null) : {};
                var k = b.charAt(0) === "[" && b.charAt(b.length - 1) === "]" ? b.slice(1, -1) : b,
                    A = parseInt(k, 10);
                !n.parseArrays && k === "" ? m = {
                    0: a
                } : !isNaN(A) && b !== k && String(A) === k && A >= 0 && n.parseArrays && A <= n.arrayLimit ? (m = [], m[A] = a) : k !== "__proto__" && (m[k] = a)
            }
            a = m
        }
        return a
    },
    Xw = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                m = /(\[[^[\]]*])/,
                b = /(\[[^[\]]*])/g,
                k = i.depth > 0 && m.exec(f),
                A = k ? f.slice(0, k.index) : f,
                M = [];
            if (A) {
                if (!i.plainObjects && Da.call(Object.prototype, A) && !i.allowPrototypes) return;
                M.push(A)
            }
            for (var V = 0; i.depth > 0 && (k = b.exec(f)) !== null && V < i.depth;) {
                if (V += 1, !i.plainObjects && Da.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                M.push(k[1])
            }
            return k && M.push("[" + f.slice(k.index) + "]"), Ww(M, n, i, a)
        }
    },
    Yw = function(e) {
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
    Kw = function(t, e) {
        var n = Yw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? qw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), m = 0; m < f.length; ++m) {
            var b = f[m],
                k = Xw(b, i[b], n, typeof t == "string");
            a = vr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : vr.compact(a)
    },
    Jw = jw,
    Qw = Kw,
    Zw = Ja,
    su = {
        formats: Zw,
        parse: Qw,
        stringify: Jw
    };
class eb {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class tb {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class nb {
    constructor(e) {
        this.connections = e.connections
    }
}
class ib {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class rb {}
var go = {
    CreateRoomReply: eb,
    GetRoomReply: tb,
    GetAudienceReply: nb,
    RoomExit: ib,
    RoomLock: rb
};
const Zl = ka.exports,
    sb = su,
    {
        CreateRoomReply: ob,
        GetRoomReply: ab
    } = go;
class lb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = sb.stringify(n);
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
            m = await (await Zl(i, {
                method: "POST"
            })).json();
        if (!m.ok) throw new Error(`failed to create room: ${m.error}`);
        let b = m.body;
        return new ob({
            code: b.code,
            token: b.token,
            host: b.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Zl(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
        return new ab({
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
var cb = {
        APIClient: lb
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof yt < "u" ? ar = yt.WebSocket || yt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var ub = ar,
    Qa = {
        exports: {}
    },
    dr = typeof Reflect == "object" ? Reflect : null,
    ec = dr && typeof dr.apply == "function" ? dr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Gs;
dr && typeof dr.ownKeys == "function" ? Gs = dr.ownKeys : Object.getOwnPropertySymbols ? Gs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Gs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function hb(t) {
    console && console.warn && console.warn(t)
}
var ou = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Qa.exports = Rt;
Qa.exports.once = gb;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var tc = 10;

function mo(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return tc
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || ou(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        tc = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || ou(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function au(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return au(this)
};
Rt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var a = e === "error",
        f = this._events;
    if (f !== void 0) a = a && f.error === void 0;
    else if (!a) return !1;
    if (a) {
        var m;
        if (n.length > 0 && (m = n[0]), m instanceof Error) throw m;
        var b = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw b.context = m, b
    }
    var k = f[e];
    if (k === void 0) return !1;
    if (typeof k == "function") ec(k, this, n);
    else
        for (var A = k.length, M = du(k, A), i = 0; i < A; ++i) ec(M[i], this, n);
    return !0
};

function lu(t, e, n, i) {
    var a, f, m;
    if (mo(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), m = f[e]), m === void 0) m = f[e] = n, ++t._eventsCount;
    else if (typeof m == "function" ? m = f[e] = i ? [n, m] : [m, n] : i ? m.unshift(n) : m.push(n), a = au(t), a > 0 && m.length > a && !m.warned) {
        m.warned = !0;
        var b = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        b.name = "MaxListenersExceededWarning", b.emitter = t, b.type = e, b.count = m.length, hb(b)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return lu(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return lu(this, e, n, !0)
};

function db() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function cu(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = db.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return mo(n), this.on(e, cu(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return mo(n), this.prependListener(e, cu(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, m, b;
    if (mo(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, m = i.length - 1; m >= 0; m--)
            if (i[m] === n || i[m].listener === n) {
                b = i[m].listener, f = m;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : fb(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, b || n)
    }
    return this
};
Rt.prototype.off = Rt.prototype.removeListener;
Rt.prototype.removeAllListeners = function(e) {
    var n, i, a;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var f = Object.keys(i),
            m;
        for (a = 0; a < f.length; ++a) m = f[a], m !== "removeListener" && this.removeAllListeners(m);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (a = n.length - 1; a >= 0; a--) this.removeListener(e, n[a]);
    return this
};

function uu(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? pb(a) : du(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return uu(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return uu(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : hu.call(t, e)
};
Rt.prototype.listenerCount = hu;

function hu(t) {
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

function du(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function fb(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function pb(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function gb(t, e) {
    return new Promise(function(n, i) {
        function a(m) {
            t.removeListener(e, f), i(m)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        fu(t, e, f, {
            once: !0
        }), e !== "error" && mb(t, a, {
            once: !0
        })
    })
}

function mb(t, e, n) {
    typeof t.on == "function" && fu(t, "error", e, n)
}

function fu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class vb {
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
class vo extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class ds extends vo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class pu extends ds {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class gu extends ds {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class mu extends ds {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class kt extends vo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class vu extends kt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class yu extends kt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class wu extends kt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class bu extends kt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class Cu extends kt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class xu extends kt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class Eu extends kt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class _u extends kt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class Su extends kt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class ku extends kt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Tu extends kt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Au extends kt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Ou extends kt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Ru extends kt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Iu extends kt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Mu extends kt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Du extends kt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Lu extends kt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Pu extends kt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Nu extends kt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Vu extends kt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Bu extends kt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class $u extends kt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Fu extends kt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class ju extends kt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class zu extends kt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Gu extends kt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class Hu extends kt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function yb({
    code: t,
    message: e
}) {
    const n = wb[t];
    return n ? new n({
        message: e
    }) : new vo({
        message: e
    })
}
var ii = {
    createError: yb,
    CallError: vo,
    EcastServerError: ds,
    EcastCreateRoomFailed: pu,
    EcastDialRoomFailed: gu,
    EcastServerIsShuttingDown: mu,
    EcastClientError: kt,
    EcastParseError: vu,
    EcastRequestIsMissingOpcode: yu,
    EcastRequestHasInvalidOpcode: wu,
    EcastRequestHasInvalidArguments: bu,
    EcastEntityNotFound: Cu,
    EcastEntityAlreadyExists: xu,
    EcastEntityTypeError: Eu,
    EcastNoSuchClient: _u,
    EcastRoomIsLocked: Su,
    EcastRoomIsFull: ku,
    EcastLicenseNotFound: Tu,
    EcastLicenseCheckFailed: Au,
    EcastRoomNotFound: Ou,
    EcastInvalidRole: Ru,
    EcastTwitchLoginRequired: Iu,
    EcastInvalidOption: Mu,
    EcastPasswordRequired: Du,
    EcastInvalidPassword: Lu,
    EcastNameRequired: Pu,
    EcastFilterError: Nu,
    EcastNoSuchFilter: Vu,
    EcastPermissionDenied: Bu,
    EcastNotConnected: $u,
    EcastIllegalOperation: Fu,
    EcastACLChangeDenied: ju,
    EcastRoomHasEnded: zu,
    EcastEntityLocked: Gu,
    EcastRateLimitExceeded: Hu,
    ObservedError: vb
};
const wb = {
    1e3: ds,
    1001: pu,
    1002: gu,
    1003: mu,
    2e3: kt,
    2001: vu,
    2002: yu,
    2003: wu,
    2004: bu,
    2005: Cu,
    2006: xu,
    2007: Eu,
    2008: _u,
    2009: Su,
    2010: ku,
    2011: Tu,
    2012: Au,
    2013: Ou,
    2014: Ru,
    2015: Iu,
    2016: Mu,
    2017: Du,
    2018: Lu,
    2019: Pu,
    2021: Nu,
    2022: Vu,
    2023: Bu,
    2024: $u,
    2025: Fu,
    2026: ju,
    2027: zu,
    2028: Gu,
    2420: Hu
};
class bb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class Cb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class xb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class Eb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class _b {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Za = {
    ClientConnected: Cb,
    ClientDisconnected: xb,
    ClientKicked: _b,
    ClientSend: Eb,
    ClientWelcome: bb
};
class Sb {
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
var el = {
    CountGroup: Sb
};
class kb {
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
var tl = {
    GCounter: kb
};
class Tb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var Uu = {
    Notification: Tb
};
class Ab {
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
class Ob {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var nl = {
    ObjectEntity: Ab,
    ObjectEcho: Ob
};
class Rb {
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
var il = {
    PNCounter: Rb
};
class Ib {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var qu = {
    Reply: Ib
};
class Mb {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Db = {
    Request: Mb
};
class Lb {
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
class Pb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var rl = {
    TextEntity: Lb,
    TextEcho: Pb
};
class Nb {
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
var sl = {
    TextRing: Nb
};
class Vb {
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
var Wu = {
    ArtifactEntity: Vb
};
class Bb {
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
class $b {
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
class Fb {
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
var ol = {
    DoodleEntity: Bb,
    DoodleLine: $b,
    DoodleLineRemoved: Fb
};
class jb {
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
class zb {
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
class Gb {
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
var Xu = {
    StackEntity: jb,
    StackElement: zb,
    StackElements: Gb
};
class Hb {
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
var Yu = {
    DropEntity: Hb
};
class Ub {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var qb = {
    Echo: Ub
};
class Wb {
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
var Xb = {
    LockEntity: Wb
};
class Yb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Ku = {
    OK: Yb
};
class Kb {
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
var Ju = {
    NumberEntity: Kb
};
const {
    ArtifactEntity: Jb
} = Wu, {
    ClientWelcome: Qb,
    ClientConnected: Zb,
    ClientDisconnected: e0,
    ClientKicked: t0,
    ClientSend: n0
} = Za, {
    CountGroup: i0
} = el, {
    DoodleEntity: r0,
    DoodleLine: s0,
    DoodleLineRemoved: o0
} = ol, {
    StackEntity: a0,
    StackElement: l0,
    StackElements: c0
} = Xu, {
    DropEntity: u0
} = Yu, {
    Echo: h0
} = qb, {
    LockEntity: d0
} = Xb, {
    GCounter: f0
} = tl, {
    GetAudienceReply: p0,
    RoomExit: g0,
    RoomLock: m0
} = go, {
    Notification: v0
} = Uu, {
    OK: y0
} = Ku, {
    NumberEntity: w0
} = Ju, {
    ObjectEcho: b0,
    ObjectEntity: C0
} = nl, {
    PNCounter: nc
} = il, {
    Reply: x0
} = qu, {
    TextEcho: E0,
    TextEntity: _0
} = rl, {
    TextRing: S0
} = sl, {
    createError: ic,
    ObservedError: k0
} = ii;

function La(t, e, n) {
    switch (t) {
        case "ok":
            return new y0;
        case "echo":
            return new h0({
                message: e.message
            });
        case "lock":
            return new d0({
                key: e.key,
                from: e.from
            });
        case "error":
            return ic({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new k0({
                to: e.to,
                error: ic({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new _0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new E0({
                message: e.message
            });
        case "object":
            return new C0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new b0({
                message: e.message
            });
        case "drop":
            return new u0({
                key: e.key
            });
        case "artifact":
            return new Jb({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new Zb({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new e0({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new t0({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new n0({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Qb({
                id: e.id,
                name: e.name,
                secret: e.secret,
                reconnect: e.reconnect,
                here: e.here,
                profile: e.profile,
                replayEnd: e.replayEnd
            });
            if (e.entities) {
                let a = {};
                Object.entries(e.entities).forEach(([f, m]) => {
                    a[f] = La(m[0], m[1], m[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new r0({
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
            return new s0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new o0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new a0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new l0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new c0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new w0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new g0({
                cause: e.cause
            });
        case "room/lock":
            return new m0;
        case "room/get-audience":
            return new p0({
                connections: e.connections
            });
        case "audience":
            return new nc({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new i0({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new S0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new f0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new nc({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function T0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new x0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: La(n, e.result)
    }) : new v0({
        pc: e.pc,
        opcode: n,
        result: La(n, e.result)
    })
}
var A0 = {
    parseResponseMessage: T0
};
const rc = ub,
    O0 = su,
    R0 = Qa.exports,
    {
        CallError: I0
    } = ii,
    {
        ClientWelcome: M0
    } = Za,
    {
        CountGroup: D0
    } = el,
    {
        GCounter: L0
    } = tl,
    {
        Notification: sc
    } = Uu,
    {
        ObjectEntity: da
    } = nl,
    {
        PNCounter: P0
    } = il,
    {
        Reply: N0
    } = qu,
    {
        Request: V0
    } = Db,
    {
        TextEntity: fa
    } = rl,
    {
        TextRing: B0
    } = sl,
    {
        parseResponseMessage: $0
    } = A0,
    {
        DoodleEntity: F0
    } = ol,
    {
        StackEntity: j0
    } = Xu,
    z0 = 1e3 + Math.floor(Math.random() * 500),
    oc = 13e3;
class G0 extends R0 {
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
        const n = O0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let m = !1,
                b = !1,
                k = M => {
                    a(M), m = !0
                },
                A = M => {
                    f(M), m = !0
                };
            this.conn = new rc(i, "ecast-v0"), this.conn.onmessage = M => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(M.data),null,2)}`);
                const V = $0(M);
                if (V instanceof N0) this.onReply(V);
                else if (V instanceof sc) {
                    if (V.result instanceof M0) b = !0, this.id = V.result.id, this.deviceId = V.result.deviceId, this.entities = V.result.entities, this.secret = V.result.secret, V.result.name && (this.name = V.result.name), k(V.result);
                    else if (!m) {
                        A(V.result);
                        return
                    }
                    this.onNotification(V)
                } else console.error(`failed to parse response messsage: ${V}`)
            }, this.conn.onerror = M => {
                m ? this.emit("socketError", M) : A(M)
            }, this.conn.onclose = M => {
                this.debugLog("onclose", M.code), b && M.code === 1006 ? this.reconnect() : this.emit("socketClose", M)
            }, this.conn.onopen = M => {
                this.emit("socketOpen", M)
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
            n = z0;
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
            if (n >= oc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(oc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new sc(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof I0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== rc.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new V0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((b, k) => {
                this.pending[i] = {
                    resolve: b,
                    reject: k,
                    request: a
                }
            }),
            m = JSON.stringify(a);
        return this.debugLog(`send -> ${m}`), this.conn.send(m), f
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
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/create", a);
        return this.entities[e] = new da({
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
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/set", a);
        return this.entities[e] = new da({
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
        return this.entities[e] = new da({
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
        const a = {
                key: e,
                val: n
            },
            {
                acl: f,
                accept: m,
                reject: b
            } = i;
        f && (a.acl = f), m && (a.accept = m), b && (a.reject = b);
        const k = await this.send("text/create", a);
        return this.entities[e] = new fa({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), k
    }
    async setText(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("text/set", a);
        return this.entities[e] = new fa({
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
        return this.entities[e] = new fa({
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
            acl: a,
            colors: f,
            live: m,
            maxPoints: b,
            size: k,
            weights: A
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = m, b != null && (i.maxPoints = b), k && (i.size = k), A && (i.weights = A);
        const M = await this.send("doodle/create", i);
        return this.entities[e] = new F0({
            key: e,
            colors: f,
            lines: [],
            live: m,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: k,
            weights: A,
            meta: {
                locked: !1
            }
        }), M
    }
    async getDoodle(e) {
        return this.send("doodle/get", {
            key: e
        })
    }
    async strokeDoodle(e, n) {
        const {
            layer: i,
            color: a,
            weight: f,
            points: m
        } = n, b = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: f,
            points: m
        }), k = {
            layer: i,
            color: a,
            weight: f,
            points: m
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
        const a = await this.send("stack/create", i);
        return this.entities[e] = new j0({
            key: e,
            size: 0,
            meta: {
                locked: !1
            }
        }), a
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
        return this.entities[e] = new D0({
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
        return this.entities[e] = new L0({
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
        return this.entities[e] = new P0({
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
                limit: a,
                accept: f,
                reject: m
            } = n;
        a && (i.limit = a), f && (i.accept = f), m && (i.reject = m);
        const b = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new B0({
            key: e,
            elements: [],
            limit: a,
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
var H0 = {
    WSClient: G0
};
const {
    APIClient: U0
} = cb, {
    WSClient: q0
} = H0, {
    CreateRoomReply: W0,
    GetRoomReply: X0
} = go, {
    ClientWelcome: Y0,
    ClientDisconnected: K0
} = Za, {
    ArtifactEntity: J0
} = Wu, {
    GCounter: Q0
} = tl, {
    NumberEntity: Z0
} = Ju, {
    TextEntity: eC
} = rl, {
    DoodleEntity: tC
} = ol, {
    ObjectEntity: nC
} = nl, {
    CountGroup: iC
} = el, {
    DropEntity: rC
} = Yu, {
    OK: sC
} = Ku, {
    RoomExit: oC
} = go, {
    TextRing: aC
} = sl, {
    PNCounter: lC
} = il;
var Ii = {
    APIClient: U0,
    WSClient: q0,
    ClientWelcome: Y0,
    CreateRoomReply: W0,
    DropEntity: rC,
    GetRoomReply: X0,
    ClientDisconnected: K0,
    RoomExit: oC,
    OK: sC,
    ArtifactEntity: J0,
    DoodleEntity: tC,
    NumberEntity: Z0,
    CountGroup: iC,
    GCounter: Q0,
    ObjectEntity: nC,
    PNCounter: lC,
    TextEntity: eC,
    TextRing: aC
};

function ac(...t) {
    console.log(...t)
}

function cC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var lc = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(yt, function(n) {
        var i = typeof window < "u" ? window : typeof yt < "u" ? yt : typeof self < "u" ? self : {},
            a = function(N, X) {
                if (X = X.split(":")[0], N = +N, !N) return !1;
                switch (X) {
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
            m;

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
            for (var N = /([^=?#&]+)=?([^&]*)/g, X = {}, D; D = N.exec(F);) {
                var q = b(D[1]),
                    fe = b(D[2]);
                q === null || fe === null || q in X || (X[q] = fe)
            }
            return X
        }

        function M(F, N) {
            N = N || "";
            var X = [],
                D, q;
            typeof N != "string" && (N = "?");
            for (q in F)
                if (f.call(F, q)) {
                    if (D = F[q], !D && (D === null || D === m || isNaN(D)) && (D = ""), q = k(q), D = k(D), q === null || D === null) continue;
                    X.push(q + "=" + D)
                } return X.length ? N + X.join("&") : ""
        }
        var V = M,
            U = A,
            ne = {
                stringify: V,
                parse: U
            },
            K = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + v + "+");

        function W(F) {
            return (F || "").toString().replace(P, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(N, X) {
                    return d(X.protocol) ? N.replace(/\\/g, "/") : N
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

        function ve(F) {
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var X = N.location || {};
            F = F || X;
            var D = {},
                q = typeof F,
                fe;
            if (F.protocol === "blob:") D = new Pe(unescape(F.pathname), {});
            else if (q === "string") {
                D = new Pe(F, {});
                for (fe in se) delete D[fe]
            } else if (q === "object") {
                for (fe in F) fe in se || (D[fe] = F[fe]);
                D.slashes === void 0 && (D.slashes = K.test(F.href))
            }
            return D
        }

        function d(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function Ee(F, N) {
            F = W(F), N = N || {};
            var X = re.exec(F),
                D = X[1] ? X[1].toLowerCase() : "",
                q = !!X[2],
                fe = !!X[3],
                pe = 0,
                Ne;
            return q ? fe ? (Ne = X[2] + X[3] + X[4], pe = X[2].length + X[3].length) : (Ne = X[2] + X[4], pe = X[2].length) : fe ? (Ne = X[3] + X[4], pe = X[3].length) : Ne = X[4], D === "file:" ? pe >= 2 && (Ne = Ne.slice(2)) : d(D) ? Ne = X[4] : D ? q && (Ne = Ne.slice(2)) : pe >= 2 && d(N.protocol) && (Ne = X[4]), {
                protocol: D,
                slashes: q || d(D),
                slashesCount: pe,
                rest: Ne
            }
        }

        function Ae(F, N) {
            if (F === "") return N;
            for (var X = (N || "/").split("/").slice(0, -1).concat(F.split("/")), D = X.length, q = X[D - 1], fe = !1, pe = 0; D--;) X[D] === "." ? X.splice(D, 1) : X[D] === ".." ? (X.splice(D, 1), pe++) : pe && (D === 0 && (fe = !0), X.splice(D, 1), pe--);
            return fe && X.unshift(""), (q === "." || q === "..") && X.push(""), X.join("/")
        }

        function Pe(F, N, X) {
            if (F = W(F), !(this instanceof Pe)) return new Pe(F, N, X);
            var D, q, fe, pe, Ne, Ve, pt = ae.slice(),
                Ft = typeof N,
                Ye = this,
                In = 0;
            for (Ft !== "object" && Ft !== "string" && (X = N, N = null), X && typeof X != "function" && (X = ne.parse), N = ve(N), q = Ee(F || "", N), D = !q.protocol && !q.slashes, Ye.slashes = q.slashes || D && N.slashes, Ye.protocol = q.protocol || N.protocol || "", F = q.rest, (Ye.protocol === "file:" || !q.slashes && (q.protocol || q.slashesCount < 2 || !d(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (pe = pt[In], typeof pe == "function") {
                    F = pe(F, Ye);
                    continue
                }
                fe = pe[0], Ve = pe[1], fe !== fe ? Ye[Ve] = F : typeof fe == "string" ? ~(Ne = F.indexOf(fe)) && (typeof pe[2] == "number" ? (Ye[Ve] = F.slice(0, Ne), F = F.slice(Ne + pe[2])) : (Ye[Ve] = F.slice(Ne), F = F.slice(0, Ne))) : (Ne = fe.exec(F)) && (Ye[Ve] = Ne[1], F = F.slice(0, Ne.index)), Ye[Ve] = Ye[Ve] || D && pe[3] && N[Ve] || "", pe[4] && (Ye[Ve] = Ye[Ve].toLowerCase())
            }
            X && (Ye.query = X(Ye.query)), D && N.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || N.pathname !== "") && (Ye.pathname = Ae(Ye.pathname, N.pathname)), Ye.pathname.charAt(0) !== "/" && d(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), a(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (pe = Ye.auth.split(":"), Ye.username = pe[0] || "", Ye.password = pe[1] || ""), Ye.origin = Ye.protocol !== "file:" && d(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(F, N, X) {
            var D = this;
            switch (F) {
                case "query":
                    typeof N == "string" && N.length && (N = (X || ne.parse)(N)), D[F] = N;
                    break;
                case "port":
                    D[F] = N, a(N, D.protocol) ? N && (D.host = D.hostname + ":" + N) : (D.host = D.hostname, D[F] = "");
                    break;
                case "hostname":
                    D[F] = N, D.port && (N += ":" + D.port), D.host = N;
                    break;
                case "host":
                    D[F] = N, /:\d+$/.test(N) ? (N = N.split(":"), D.port = N.pop(), D.hostname = N.join(":")) : (D.hostname = N, D.port = "");
                    break;
                case "protocol":
                    D.protocol = N.toLowerCase(), D.slashes = !X;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var q = F === "pathname" ? "/" : "#";
                        D[F] = N.charAt(0) !== q ? q + N : N
                    } else D[F] = N;
                    break;
                default:
                    D[F] = N
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (D[pe[1]] = D[pe[1]].toLowerCase())
            }
            return D.origin = D.protocol !== "file:" && d(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
        }

        function Be(F) {
            (!F || typeof F != "function") && (F = ne.stringify);
            var N, X = this,
                D = X.protocol;
            D && D.charAt(D.length - 1) !== ":" && (D += ":");
            var q = D + (X.slashes || d(X.protocol) ? "//" : "");
            return X.username && (q += X.username, X.password && (q += ":" + X.password), q += "@"), q += X.host + X.pathname, N = typeof X.query == "object" ? F(X.query) : X.query, N && (q += N.charAt(0) !== "?" ? "?" + N : N), X.hash && (q += X.hash), q
        }
        Pe.prototype = {
            set: lt,
            toString: Be
        }, Pe.extractProtocol = Ee, Pe.location = ve, Pe.trimLeft = W, Pe.qs = ne;
        var J = Pe;

        function je(F, N) {
            setTimeout(function(X) {
                return F.call(X)
            }, 4, N)
        }

        function H(F, N) {
            typeof process < "u" && console[F].call(null, N)
        }

        function oe(F, N) {
            F === void 0 && (F = []);
            var X = [];
            return F.forEach(function(D) {
                N(D) || X.push(D)
            }), X
        }

        function Te(F, N) {
            F === void 0 && (F = []);
            var X = [];
            return F.forEach(function(D) {
                N(D) && X.push(D)
            }), X
        }
        var we = function() {
            this.listeners = {}
        };
        we.prototype.addEventListener = function(N, X) {
            typeof X == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Te(this.listeners[N], function(D) {
                return D === X
            }).length === 0 && this.listeners[N].push(X))
        }, we.prototype.removeEventListener = function(N, X) {
            var D = this.listeners[N];
            this.listeners[N] = oe(D, function(q) {
                return q === X
            })
        }, we.prototype.dispatchEvent = function(N) {
            for (var X = this, D = [], q = arguments.length - 1; q-- > 0;) D[q] = arguments[q + 1];
            var fe = N.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Ne) {
                D.length > 0 ? Ne.apply(X, D) : Ne.call(X, N)
            }), !0) : !1
        };

        function ye(F) {
            var N = F.indexOf("?");
            return N >= 0 ? F.slice(0, N) : F
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(N, X) {
            var D = ye(X),
                q = this.urlMap[D];
            if (q && q.server && q.websockets.indexOf(N) === -1) return q.websockets.push(N), q.server
        }, ue.prototype.addMembershipToRoom = function(N, X) {
            var D = this.urlMap[ye(N.url)];
            D && D.server && D.websockets.indexOf(N) !== -1 && (D.roomMemberships[X] || (D.roomMemberships[X] = []), D.roomMemberships[X].push(N))
        }, ue.prototype.attachServer = function(N, X) {
            var D = ye(X),
                q = this.urlMap[D];
            if (!q) return this.urlMap[D] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, ue.prototype.serverLookup = function(N) {
            var X = ye(N),
                D = this.urlMap[X];
            if (D) return D.server
        }, ue.prototype.websocketsLookup = function(N, X, D) {
            var q = ye(N),
                fe, pe = this.urlMap[q];
            if (fe = pe ? pe.websockets : [], X) {
                var Ne = pe.roomMemberships[X];
                fe = Ne || []
            }
            return D ? fe.filter(function(Ve) {
                return Ve !== D
            }) : fe
        }, ue.prototype.removeServer = function(N) {
            delete this.urlMap[ye(N)]
        }, ue.prototype.removeWebSocket = function(N, X) {
            var D = ye(X),
                q = this.urlMap[D];
            q && (q.websockets = oe(q.websockets, function(fe) {
                return fe === N
            }))
        }, ue.prototype.removeMembershipFromRoom = function(N, X) {
            var D = this.urlMap[ye(N.url)],
                q = D.roomMemberships[X];
            D && q !== null && (D.roomMemberships[X] = oe(q, function(fe) {
                return fe === N
            }))
        };
        var _e = new ue,
            ke = {
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, X, D) {
            N === void 0 && (N = "undefined"), X === void 0 && (X = !1), D === void 0 && (D = !1), this.type = "" + N, this.bubbles = Boolean(X), this.cancelable = Boolean(D)
        };
        var dt = function(F) {
                function N(X, D) {
                    if (D === void 0 && (D = {}), F.call(this), !X) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var q = D.bubbles,
                        fe = D.cancelable;
                    this.type = "" + X, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = q ? Boolean(q) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Bt = function(F) {
                function N(X, D) {
                    if (D === void 0 && (D = {}), F.call(this), !X) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var q = D.bubbles,
                        fe = D.cancelable,
                        pe = D.data,
                        Ne = D.origin,
                        Ve = D.lastEventId,
                        pt = D.ports;
                    this.type = "" + X, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = q ? Boolean(q) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Ve || "")
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Ut = function(F) {
                function N(X, D) {
                    if (D === void 0 && (D = {}), F.call(this), !X) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var q = D.bubbles,
                        fe = D.cancelable,
                        pe = D.code,
                        Ne = D.reason,
                        Ve = D.wasClean;
                    this.type = "" + X, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = q ? Boolean(q) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke);

        function _(F) {
            var N = F.type,
                X = F.target,
                D = new dt(N);
            return X && (D.target = X, D.srcElement = X, D.currentTarget = X), D
        }

        function l(F) {
            var N = F.type,
                X = F.origin,
                D = F.data,
                q = F.target,
                fe = new Bt(N, {
                    data: D,
                    origin: X
                });
            return q && (fe.target = q, fe.srcElement = q, fe.currentTarget = q), fe
        }

        function g(F) {
            var N = F.code,
                X = F.reason,
                D = F.type,
                q = F.target,
                fe = F.wasClean;
            fe || (fe = N === ke.CLOSE_NORMAL || N === ke.CLOSE_NO_STATUS);
            var pe = new Ut(D, {
                code: N,
                reason: X,
                wasClean: fe
            });
            return q && (pe.target = q, pe.srcElement = q, pe.currentTarget = q), pe
        }

        function S(F, N, X) {
            F.readyState = De.CLOSING;
            var D = _e.serverLookup(F.url),
                q = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: X
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: X
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(q), F.dispatchEvent(fe), D && D.dispatchEvent(q, D)
            }, F)
        }

        function R(F, N, X) {
            F.readyState = De.CLOSING;
            var D = _e.serverLookup(F.url),
                q = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: X,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: X,
                    wasClean: !1
                }),
                pe = _({
                    type: "error",
                    target: F.target
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(pe), F.dispatchEvent(q), F.dispatchEvent(fe), D && D.dispatchEvent(q, D)
            }, F)
        }

        function L(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var B = new WeakMap;

        function te(F) {
            if (B.has(F)) return B.get(F);
            var N = new Proxy(F, {
                get: function(D, q) {
                    return q === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Ne = pe.code || ke.CLOSE_NORMAL,
                            Ve = pe.reason || "";
                        S(N, Ne, Ve)
                    } : q === "send" ? function(pe) {
                        pe = L(pe), F.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: F
                        }))
                    } : q === "on" ? function(pe, Ne) {
                        F.addEventListener("server::" + pe, Ne)
                    } : q === "target" ? F : D[q]
                }
            });
            return B.set(F, N), N
        }

        function Se(F) {
            var N = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (N ? N.length : 0)
        }

        function he(F) {
            var N = new J(F),
                X = N.pathname,
                D = N.protocol,
                q = N.hash;
            if (!F) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (X || (N.pathname = "/"), D === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (D !== "ws:" && D !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + D + "' is not allowed.");
            if (q !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + q + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function Me(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var N = F.map(function(D) {
                    return {
                        count: 1,
                        protocol: D
                    }
                }).reduce(function(D, q) {
                    return D[q.protocol] = (D[q.protocol] || 0) + q.count, D
                }, {}),
                X = Object.keys(N).filter(function(D) {
                    return N[D] > 1
                });
            if (X.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + X[0] + "' is duplicated.");
            return F
        }
        var De = function(F) {
            function N(D, q) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(D), q = Me(q), this.protocol = q[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var fe = te(this),
                    pe = _e.attachWebSocket(fe, this.url);
                je(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = N.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(_({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: ke.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var Ve = pe.options.selectProtocol(q),
                                    pt = Ve !== "",
                                    Ft = q.indexOf(Ve) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = N.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(_({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: ke.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Ve
                            }
                            this.readyState = N.OPEN, this.dispatchEvent(_({
                                type: "open",
                                target: this
                            })), pe.dispatchEvent(_({
                                type: "connection"
                            }), fe)
                        }
                    else this.readyState = N.CLOSED, this.dispatchEvent(_({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), H("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var X = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return X.onopen.get = function() {
                return this._onopen
            }, X.onmessage.get = function() {
                return this._onmessage
            }, X.onclose.get = function() {
                return this._onclose
            }, X.onerror.get = function() {
                return this._onerror
            }, X.onopen.set = function(D) {
                this.removeEventListener("open", this._onopen), this._onopen = D, this.addEventListener("open", D)
            }, X.onmessage.set = function(D) {
                this.removeEventListener("message", this._onmessage), this._onmessage = D, this.addEventListener("message", D)
            }, X.onclose.set = function(D) {
                this.removeEventListener("close", this._onclose), this._onclose = D, this.addEventListener("close", D)
            }, X.onerror.set = function(D) {
                this.removeEventListener("error", this._onerror), this._onerror = D, this.addEventListener("error", D)
            }, N.prototype.send = function(q) {
                var fe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: L(q)
                    }),
                    Ne = _e.serverLookup(this.url);
                Ne && je(function() {
                    fe.dispatchEvent(pe, q)
                }, Ne)
            }, N.prototype.close = function(q, fe) {
                if (q !== void 0 && (typeof q != "number" || q !== 1e3 && (q < 3e3 || q > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + q + " is neither.");
                if (fe !== void 0) {
                    var pe = Se(fe);
                    if (pe > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === N.CLOSING || this.readyState === N.CLOSED)) {
                    var Ne = te(this);
                    this.readyState === N.CONNECTING ? R(Ne, q || ke.CLOSE_ABNORMAL, fe) : S(Ne, q || ke.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(N.prototype, X), N
        }(we);
        De.CONNECTING = 0, De.prototype.CONNECTING = De.CONNECTING, De.OPEN = 1, De.prototype.OPEN = De.OPEN, De.CLOSING = 2, De.prototype.CLOSING = De.CLOSING, De.CLOSED = 3, De.prototype.CLOSED = De.CLOSED;
        var it = function(F) {
            return F.reduce(function(N, X) {
                return N.indexOf(X) > -1 ? N : N.concat(X)
            }, [])
        };

        function xt() {
            return typeof window < "u" ? window : typeof process == "object" && typeof cC == "function" && typeof yt == "object" ? yt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(F) {
                function N(X, D) {
                    D === void 0 && (D = rn), F.call(this);
                    var q = new J(X);
                    q.pathname || (q.pathname = "/"), this.url = q.toString(), this.originalWebSocket = null;
                    var fe = _e.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(_({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, D), this.options.mock && this.mockWebsocket()
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket = D.WebSocket, D.WebSocket = De
                }, N.prototype.restoreWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket !== null && (D.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(D) {
                    D === void 0 && (D = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof D == "function" && D()
                }, N.prototype.on = function(D, q) {
                    this.addEventListener(D, q)
                }, N.prototype.close = function(D) {
                    D === void 0 && (D = {});
                    var q = D.code,
                        fe = D.reason,
                        pe = D.wasClean,
                        Ne = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = De.CLOSED, Ve.dispatchEvent(g({
                            type: "close",
                            target: Ve.target,
                            code: q || ke.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(D, q, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Ne = fe.websockets;
                    Ne || (Ne = _e.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (q = Array.prototype.slice.call(arguments, 1, arguments.length), q = q.map(function(Ve) {
                        return L(Ve)
                    })) : q = L(q), Ne.forEach(function(Ve) {
                        Array.isArray(q) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: D,
                            data: q,
                            origin: pe.url,
                            target: Ve.target
                        })].concat(q)) : Ve.dispatchEvent(l({
                            type: D,
                            data: q,
                            origin: pe.url,
                            target: Ve.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, N.prototype.to = function(D, q, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Ne = this,
                        Ve = it(fe.concat(_e.websocketsLookup(this.url, D, q)));
                    return {
                        to: function(pt, Ft) {
                            return pe.to.call(pe, pt, Ft, Ve)
                        },
                        emit: function(Ft, Ye) {
                            Ne.emit(Ft, Ye, {
                                websockets: Ve
                            })
                        }
                    }
                }, N.prototype.in = function() {
                    for (var D = [], q = arguments.length; q--;) D[q] = arguments[q];
                    return this.to.apply(null, D)
                }, N.prototype.simulate = function(D) {
                    var q = _e.websocketsLookup(this.url);
                    D === "error" && q.forEach(function(fe) {
                        fe.readyState = De.CLOSED, fe.dispatchEvent(_({
                            type: "error"
                        }))
                    })
                }, N
            }(we);
        ct.of = function(N) {
            return new ct(N)
        };
        var wt = function(F) {
            function N(D, q) {
                var fe = this;
                D === void 0 && (D = "socket.io"), q === void 0 && (q = ""), F.call(this), this.binaryType = "blob";
                var pe = new J(D);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof q == "string" || typeof q == "object" && q !== null ? this.protocol = q : Array.isArray(q) && q.length > 0 && (this.protocol = q[0]);
                var Ne = _e.attachWebSocket(this, this.url);
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
                        code: ke.CLOSE_NORMAL
                    })), H("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ve) {
                    fe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ve.target,
                        code: Ve.code
                    }))
                })
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var X = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var q = _e.serverLookup(this.url);
                    return _e.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), q && q.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    }), q), this
                }
            }, N.prototype.disconnect = function() {
                return this.close()
            }, N.prototype.emit = function(q) {
                for (var fe = [], pe = arguments.length - 1; pe-- > 0;) fe[pe] = arguments[pe + 1];
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ne = l({
                        type: q,
                        origin: this.url,
                        data: fe
                    }),
                    Ve = _e.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(fe)), this
            }, N.prototype.send = function(q) {
                return this.emit("message", q), this
            }, X.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var D = this,
                    q = _e.serverLookup(this.url);
                if (!q) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Ne) {
                        return q.emit(pe, Ne, {
                            websockets: _e.websocketsLookup(D.url, null, D)
                        }), D
                    },
                    to: function(pe) {
                        return q.to(pe, D)
                    },
                    in: function(pe) {
                        return q.in(pe, D)
                    }
                }
            }, N.prototype.on = function(q, fe) {
                return this.addEventListener(q, fe), this
            }, N.prototype.off = function(q, fe) {
                this.removeEventListener(q, fe)
            }, N.prototype.hasListeners = function(q) {
                var fe = this.listeners[q];
                return Array.isArray(fe) ? !!fe.length : !1
            }, N.prototype.join = function(q) {
                _e.addMembershipToRoom(this, q)
            }, N.prototype.leave = function(q) {
                _e.removeMembershipFromRoom(this, q)
            }, N.prototype.to = function(q) {
                return this.broadcast.to(q)
            }, N.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, N.prototype.dispatchEvent = function(q) {
                for (var fe = this, pe = [], Ne = arguments.length - 1; Ne-- > 0;) pe[Ne] = arguments[Ne + 1];
                var Ve = q.type,
                    pt = this.listeners[Ve];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    pe.length > 0 ? Ft.apply(fe, pe) : Ft.call(fe, q.data ? q.data : q)
                })
            }, Object.defineProperties(N.prototype, X), N
        }(we);
        wt.CONNECTING = 0, wt.OPEN = 1, wt.CLOSING = 2, wt.CLOSED = 3;
        var Ct = function(N, X) {
            return new wt(N, X)
        };
        Ct.connect = function(N, X) {
            return Ct(N, X)
        };
        var Kt = ct,
            Je = De,
            Lt = Ct;
        n.Server = Kt, n.WebSocket = Je, n.SocketIO = Lt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(lc, lc.exports);
var uC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(b, k) {
            var A = b.x - k.x,
                M = b.y - k.y;
            return A * A + M * M
        }

        function n(b, k, A) {
            var M = k.x,
                V = k.y,
                U = A.x - M,
                ne = A.y - V;
            if (U !== 0 || ne !== 0) {
                var K = ((b.x - M) * U + (b.y - V) * ne) / (U * U + ne * ne);
                K > 1 ? (M = A.x, V = A.y) : K > 0 && (M += U * K, V += ne * K)
            }
            return U = b.x - M, ne = b.y - V, U * U + ne * ne
        }

        function i(b, k) {
            for (var A = b[0], M = [A], V, U = 1, ne = b.length; U < ne; U++) V = b[U], e(V, A) > k && (M.push(V), A = V);
            return A !== V && M.push(V), M
        }

        function a(b, k, A, M, V) {
            for (var U = M, ne, K = k + 1; K < A; K++) {
                var re = n(b[K], b[k], b[A]);
                re > U && (ne = K, U = re)
            }
            U > M && (ne - k > 1 && a(b, k, ne, M, V), V.push(b[ne]), A - ne > 1 && a(b, ne, A, M, V))
        }

        function f(b, k) {
            var A = b.length - 1,
                M = [b[0]];
            return a(b, 0, A, k, M), M.push(b[A]), M
        }

        function m(b, k, A) {
            if (b.length <= 2) return b;
            var M = k !== void 0 ? k * k : 1;
            return b = A ? b : i(b, M), b = f(b, M), b
        }
        t.exports = m, t.exports.default = m
    })()
})(uC);
const hC = mt.View.extend({
    el: "#banner",
    template: Ze.template(`
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
        Eh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            Ie(window).trigger("resize")
        }, .5)
    },
    getCampaign() {
        const t = this.model.get("url");
        if (!t) return "";
        let e = "";
        return t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || ""), e
    }
});
class Pn {
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new hC({
            model: new at.Model(this.bannerData)
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
                BASE_URL: "https://bundles.jackbox.tv/main/standalone-guesspionage-crowdplay/",
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
ot(Pn, "view", null), ot(Pn, "isInitialized", !1), ot(Pn, "bannerConfig", null);
var dC = {};
(function(t) {
    (function(e) {
        e(Ni.exports, ao(), t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(v) {
            v = e.map(e.flatten([v]), function(P) {
                return e.defaults({}, P, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(v)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(v, P) {
                if (e.isObject(P)) {
                    e.each(P, function(se, ve) {
                        this.unstickit(v, ve)
                    }, this);
                    return
                }
                var W = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(v && se.model !== v) && !(P && se.config.selector != P)) return se.model.off(se.event, se.fn), ae.push(se.config._destroy), W.push(se.model), !0
                }), e.invoke(e.uniq(W), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (v ? "." + v.cid : ""), P)
            },
            stickit: function(v, P) {
                var W = v || this.model,
                    ae = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(W, ae);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var ve = this;
                    return this.unstickit(), se && (ve = se.apply(this, arguments)), ve
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(v, P, W) {
                var ae = v || this.model,
                    se = ".stickit." + ae.cid;
                if (W = W || {}, e.isObject(P)) {
                    var ve = P;
                    e.each(ve, function(J, je) {
                        this.addBinding(ae, je, J)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(ae, P), !!d.length) {
                    e.isString(W) && (W = {
                        observe: W
                    }), e.isFunction(W.observe) && (W.observe = W.observe.call(this));
                    var Ee = V(d, W),
                        Ae = Ee.observe;
                    Ee.selector = P, Ee.view = this;
                    var Pe = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            m.call(this, Ee.destroy, d, ae, Ee)
                        }, U(d, Ee, ae, Ae), K(d, Ee, ae, Ae), ne(d, Ee, ae), Ae) {
                        e.each(Ee.events, function(J) {
                            var je = J + se,
                                H = function(Te) {
                                    var we = m.call(this, Ee.getVal, d, Te, Ee, a.call(arguments, 1)),
                                        ye = b(Ee.updateModel, we, Te, Ee);
                                    ye && A(ae, Ae, we, lt, Ee)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(je, oe, e.bind(H, this))
                        }, this), e.each(e.flatten([Ae]), function(J) {
                            k(ae, "change:" + J, Ee, function(je, H, oe) {
                                var Te = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Te !== Pe) {
                                    var we = M(ae, Ae, Ee);
                                    re(d, Ee, we, ae)
                                }
                            })
                        });
                        var Be = M(ae, Ae, Ee);
                        re(d, Ee, Be, ae, !0)
                    }
                    m.call(this, Ee.initialize, d, ae, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(v, P) {
                var W = (P || "").split("."),
                    ae = e.reduce(W, function(se, ve) {
                        return se[ve]
                    }, v);
                return ae == null ? v : ae
            },
            m = function(v) {
                if (v = e.isString(v) ? f(this, v) : v, v) return v.apply(this, a.call(arguments, 1))
            },
            b = function(v, P, W) {
                if (e.isBoolean(v)) return v;
                if (e.isFunction(v) || e.isString(v)) {
                    var ae = e.last(arguments).view;
                    return m.apply(ae, arguments)
                }
                return !1
            },
            k = function(v, P, W, ae) {
                var se = W.view;
                v.on(P, ae, se), se._modelBindings.push({
                    model: v,
                    event: P,
                    fn: ae,
                    config: W
                })
            },
            A = function(v, P, W, ae, se) {
                var ve = {},
                    d = se.view;
                se.onSet && (W = m.call(d, se.onSet, W, se)), se.set ? m.call(d, se.set, P, W, ae, se) : (ve[P] = W, e.isArray(P) && e.isArray(W) && (ve = e.reduce(P, function(Ee, Ae, Pe) {
                    return Ee[Ae] = e.has(W, Pe) ? W[Pe] : null, Ee
                }, {})), v.set(ve, ae))
            },
            M = function(v, P, W) {
                var ae = W.view,
                    se = function(Ee) {
                        return v[W.escape ? "escape" : "get"](Ee)
                    },
                    ve = function(Ee) {
                        return Ee == null ? "" : Ee
                    },
                    d = e.isArray(P) ? e.map(P, se) : se(P);
                return W.onGet && (d = m.call(ae, W.onGet, d, W)), e.isArray(d) ? e.map(d, ve) : ve(d)
            },
            V = i.getConfiguration = function(v, P) {
                var W = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(se, ve, d, Ee) {
                        se[Ee.updateMethod] && se[Ee.updateMethod](ve)
                    },
                    getVal: function(se, ve, d) {
                        return se[d.updateMethod]()
                    }
                }];
                W = W.concat(e.filter(i._handlers, function(se) {
                    return v.is(se.selector)
                })), W.push(P);
                var ae = e.extend.apply(e, W);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            U = function(v, P, W, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ve = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ve;
                    var Ee = "",
                        Ae = d.observe || (d.observe = ae),
                        Pe = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Be = M(W, Ae, d);
                            d.name === "class" ? (v.removeClass(Ee).addClass(Be), Ee = Be) : v[lt](d.name, Be)
                        };
                    e.each(e.flatten([Ae]), function(lt) {
                        k(W, "change:" + lt, P, Pe)
                    }), Pe()
                })
            },
            ne = function(v, P, W, ae) {
                e.each(P.classes || [], function(se, ve) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var d = se.observe,
                        Ee = function() {
                            var Ae = M(W, d, se);
                            v.toggleClass(ve, !!Ae)
                        };
                    e.each(e.flatten([d]), function(Ae) {
                        k(W, "change:" + Ae, P, Ee)
                    }), Ee()
                })
            },
            K = function(v, P, W, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ve = function() {
                            var d = P.visible,
                                Ee = P.visibleFn,
                                Ae = M(W, ae, P),
                                Pe = !!Ae;
                            (e.isFunction(d) || e.isString(d)) && (Pe = !!m.call(se, d, Ae, P)), Ee ? m.call(se, Ee, v, Pe, P) : v.toggle(Pe)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        k(W, "change:" + d, P, ve)
                    }), ve()
                }
            },
            re = function(v, P, W, ae, se) {
                var ve = P.view;
                !b(P.updateView, W, P) || (m.call(ve, P.update, v, W, ae, P), se || m.call(ve, P.afterUpdate, v, W, P))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(v, P) {
                v.val(P)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(v, P) {
                v.val(P)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(v, P) {
                v.filter('[value="' + P + '"]').prop("checked", !0)
            },
            getVal: function(v) {
                return v.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(v, P, W, ae) {
                if (v.length > 1) P || (P = []), v.each(function(ve, d) {
                    var Ee = n.$(d),
                        Ae = e.contains(P, Ee.val());
                    Ee.prop("checked", Ae)
                });
                else {
                    var se = e.isBoolean(P) ? P : P === v.val();
                    v.prop("checked", se)
                }
            },
            getVal: function(v) {
                var P;
                if (v.length > 1) P = e.reduce(v, function(ae, se) {
                    var ve = n.$(se);
                    return ve.prop("checked") && ae.push(ve.val()), ae
                }, []);
                else {
                    P = v.prop("checked");
                    var W = v.val();
                    W !== "on" && W != null && (P = P ? v.val() : null)
                }
                return P
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(v, P, W, ae) {
                var se, ve = ae.selectOptions,
                    d = ve && ve.collection || void 0,
                    Ee = v.prop("multiple");
                if (!ve) {
                    ve = {};
                    var Ae = function(ue) {
                        return ue.map(function(_e, ke) {
                            var $e = n.$(ke).data("stickit-bind-val");
                            return {
                                value: $e !== void 0 ? $e : ke.value,
                                label: ke.text
                            }
                        }).get()
                    };
                    v.find("optgroup").length ? (d = {
                        opt_labels: []
                    }, v.find("> option").length && (d.opt_labels.push(void 0), e.each(v.find("> option"), function(ue) {
                        d[void 0] = Ae(n.$(ue))
                    })), e.each(v.find("optgroup"), function(ue) {
                        var _e = n.$(ue).attr("label");
                        d.opt_labels.push(_e), d[_e] = Ae(n.$(ue).find("option"))
                    })) : d = Ae(v.find("option"))
                }
                ve.valuePath = ve.valuePath || "value", ve.labelPath = ve.labelPath || "label", ve.disabledPath = ve.disabledPath || "disabled";
                var Pe = function(ue, _e, ke) {
                    e.each(ue, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            Bt = function(S, R, L) {
                                Ke.text(S), dt = R, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), L === !0 && Ke.prop("disabled", "disabled")
                            },
                            Ut, _, l;
                        $e === "__default__" ? (Ut = ke.label, _ = ke.value, l = ke.disabled) : (Ut = f($e, ve.labelPath), _ = f($e, ve.valuePath), l = f($e, ve.disabledPath)), Bt(Ut, _, l);
                        var g = function() {
                            return !Ee && dt != null && ke != null && dt === ke ? !0 : !!(e.isObject(ke) && e.isEqual(dt, ke))
                        };
                        g() ? Ke.prop("selected", !0) : Ee && e.isArray(ke) && e.each(ke, function(S) {
                            e.isObject(S) && (S = f(S, ve.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Ke.prop("selected", !0)
                        }), _e.append(Ke)
                    })
                };
                if (v.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = m.call(this, d, v, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Be = se,
                        J = function() {
                            var ue = M(W, ae.observe, ae);
                            m.call(this, ae.update, v, ue, W, ae)
                        },
                        je = function() {
                            Be.off("add remove reset sort", J)
                        },
                        H = function() {
                            je(), Be.off("stickit:selectRefresh"), W.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", je, this), Be.on("add remove reset sort", J, this), W.trigger("stickit:selectRefresh"), W.once("stickit:selectRefresh", function() {
                        W.off("stickit:unstuck", H)
                    }), W.once("stickit:unstuck", H, this), se = se.toJSON()
                }
                if (ve.defaultOption) {
                    var oe = e.isFunction(ve.defaultOption) ? ve.defaultOption.call(this, v, ae) : ve.defaultOption;
                    Pe(["__default__"], v, oe)
                }
                if (e.isArray(se)) Pe(se, v, P);
                else if (se.opt_labels) e.each(se.opt_labels, function(ue) {
                    var _e = n.$("<optgroup/>").attr("label", ue);
                    Pe(se[ue], _e, P), v.append(_e)
                });
                else {
                    var Te = [],
                        we;
                    for (var ye in se) we = {}, we[ve.valuePath] = ye, we[ve.labelPath] = se[ye], Te.push(we);
                    Te = e.sortBy(Te, ve.comparator || ve.labelPath), Pe(Te, v, P)
                }
            },
            getVal: function(v) {
                var P = v.find("option:selected");
                return v.prop("multiple") ? e.map(P, function(W) {
                    return n.$(W).data("stickit-bind-val")
                }) : P.data("stickit-bind-val")
            }
        }]), i
    })
})(dC);
const fC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    Qu = mt.View.extend({
        template: Ze.template(fC),
        model: new at.Model({}),
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
                        let a = "";
                        return t && (a += t), e && (a += " selected"), n && (a += " disabled"), i && (a += " active"), a
                    }
                }]
            },
            "button:first": {
                observe: ["text", "html", "label"],
                updateMethod: "html",
                onGet([t, e, n]) {
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || Ie("<div />").text(t).html()
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
            const e = Ie(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ai, Vs, rs = typeof Map == "function" ? new Map : (Ai = [], Vs = [], {
        has: function(t) {
            return Ai.indexOf(t) > -1
        },
        get: function(t) {
            return Vs[Ai.indexOf(t)]
        },
        set: function(t, e) {
            Ai.indexOf(t) === -1 && (Ai.push(t), Vs.push(e))
        },
        delete: function(t) {
            var e = Ai.indexOf(t);
            e > -1 && (Ai.splice(e, 1), Vs.splice(e, 1))
        }
    }),
    Zu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Zu = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function pC(t) {
    var e = rs.get(t);
    e && e.destroy()
}

function gC(t) {
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
                var a, f = null,
                    m = null,
                    b = null,
                    k = function() {
                        i.clientWidth !== m && U()
                    },
                    A = function(ne) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", U, !1), i.removeEventListener("keyup", U, !1), i.removeEventListener("autosize:destroy", A, !1), i.removeEventListener("autosize:update", U, !1), Object.keys(ne).forEach(function(K) {
                            i.style[K] = ne[K]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", A, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", U, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", U, !1), i.addEventListener("autosize:update", U, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
                    destroy: A,
                    update: U
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), f = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(f) && (f = 0), U()
            }

            function M(ne) {
                var K = i.style.width;
                i.style.width = "0px", i.style.width = K, i.style.overflowY = ne
            }

            function V() {
                if (i.scrollHeight !== 0) {
                    var ne = function(re) {
                            for (var v = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && v.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return v
                        }(i),
                        K = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", m = i.clientWidth, ne.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), K && (document.documentElement.scrollTop = K)
                }
            }

            function U() {
                V();
                var ne = Math.round(parseFloat(i.style.height)),
                    K = window.getComputedStyle(i, null),
                    re = K.boxSizing === "content-box" ? Math.round(parseFloat(K.height)) : i.offsetHeight;
                if (re < ne ? K.overflowY === "hidden" && (M("scroll"), V(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : K.overflowY !== "hidden" && (M("hidden"), V(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), b !== re) {
                    b = re;
                    var v = Zu("autosize:resized");
                    try {
                        i.dispatchEvent(v)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], pC), t
}, Kr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], gC), t
});
var cc = Kr;
const mC = `<form>\r
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
    to = mt.View.extend({
        tagName: "div",
        className: "input",
        model: new at.Model({}),
        template: Ze.template(mC),
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
                    return t ? typeof t == "object" ? t.html ? t.html : Ie("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || cc(Ie("textarea"))
        },
        onSubmitClick() {
            return Ie("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (Ie("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            Ie(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = Ie(this.$el).find("textarea");
            Ie(t).val(""), this.getOption("preventAutosize") || cc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Ie(this.$el).find("textarea");
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
    vC = '<div class="text"></div>',
    gi = mt.View.extend({
        tagName: "div",
        template: Ze.template(vC),
        model: new at.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : Ie("<div />").text(t).html()
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
    fi = mt.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? to : t.get("type") === "text" ? gi : Qu
        },
        collection: new at.Collection([]),
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
let uc = {};

function eh(t, ...e) {
    !uc[t] || uc[t].map(n => n(...e))
}
let Jr, Hs;

function Li() {
    return Jr
}

function yo() {
    return Hs
}

function yC(t) {
    if (Jr = document.getElementById(t) || t || document.querySelector("canvas"), !Jr) throw Error("You must provide a canvas element for the game");
    return Hs = Jr.getContext("2d"), Hs.imageSmoothingEnabled = !1, eh("init"), {
        canvas: Jr,
        context: Hs
    }
}
class al {
    constructor({
        spriteSheet: e,
        frames: n,
        frameRate: i,
        loop: a = !0
    } = {}) {
        this.spriteSheet = e, this.frames = n, this.frameRate = i, this.loop = a;
        let {
            width: f,
            height: m,
            margin: b = 0
        } = e.frame;
        this.width = f, this.height = m, this.margin = b, this._f = 0, this._a = 0
    }
    clone() {
        return wo(this)
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
        height: a = this.height,
        context: f = yo()
    } = {}) {
        let m = this.frames[this._f] / this.spriteSheet._f | 0,
            b = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, b * this.width + (b * 2 + 1) * this.margin, m * this.height + (m * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function wo(t) {
    return new al(t)
}
wo.prototype = al.prototype;
wo.class = al;
const wC = () => {};

function bC() {
    let t = Li();
    yo().clearRect(0, 0, t.width, t.height)
}

function CC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        m = 1 / t,
        b = e ? bC : wC,
        k, A, M, V, U;
    const ne = window.performance || Date;

    function K() {
        if (A = requestAnimationFrame(K), M = ne.now(), V = M - k, k = M, !(V > 1e3)) {
            for (eh("tick"), a += V; a >= f;) U.update(m), a -= f;
            b(), U.render()
        }
    }
    return U = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = ne.now(), this.isStopped = !1, requestAnimationFrame(K)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(A)
        },
        _frame: K,
        set _last(re) {
            k = re
        }
    }, U
}
class xC {
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
        for (let a = this.size; a--;) n = this.objects[a], n.update(e), n.isAlive() || (i = !0, this.size--);
        i && this.objects.sort((a, f) => f.isAlive() - a.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
xC.prototype;

function hc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        m = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), m && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), m && n.push(3)), n
}
class ll {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Li();
        this.bounds = i || {
            x: 0,
            y: 0,
            width: a.width,
            height: a.height
        }, this._b = !1, this._d = 0, this._o = [], this._s = [], this._p = null
    }
    clear() {
        this._s.map(function(e) {
            e.clear()
        }), this._b = !1, this._o.length = 0
    }
    get(e) {
        let n = new Set,
            i, a;
        for (; this._s.length && this._b;) {
            for (i = hc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
            return Array.from(n)
        }
        return this._o.filter(f => f !== e)
    }
    add() {
        let e, n, i, a;
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
                for (this._sp(), e = 0; a = this._o[e]; e++) this._a(a);
                this._o.length = 0
            }
        }
    }
    _a(e, n, i) {
        for (n = hc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = cl({
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

function cl(t) {
    return new ll(t)
}
cl.prototype = ll.prototype;
cl.class = ll;
class ul {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return fr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
    }
    clamp(e, n, i, a) {
        this._c = !0, this._a = e, this._b = n, this._d = i, this._e = a
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
    let i = new ul(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
fr.prototype = ul.prototype;
fr.class = ul;
class hl {
    constructor(e) {
        this.init(e)
    }
    init(e = {}) {
        let {
            x: n,
            y: i,
            dx: a,
            dy: f,
            ddx: m,
            ddy: b,
            width: k,
            height: A,
            image: M
        } = e;
        this.position = fr(n, i), this.velocity = fr(a, f), this.acceleration = fr(m, b), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = yo();
        for (let V in e) this[V] = e[V];
        M && (this.width = k !== void 0 ? k : M.width, this.height = A !== void 0 ? A : M.height), this.sx = 0, this.sy = 0
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
            a = e.x,
            f = e.y;
        return e.anchor && (a -= e.width * e.anchor.x, f -= e.height * e.anchor.y), n < a + e.width && n + this.width > a && i < f + e.height && i + this.height > f
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
                a = this.height / 2 + n;
            this.context.translate(i, a), this.context.scale(this._fx, this._fy), this.context.translate(-i, -a)
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

function dl(t) {
    return new hl(t)
}
dl.prototype = hl.prototype;
dl.class = hl;

function EC(t) {
    if (+t === t) return t;
    let e = [],
        n = t.split(".."),
        i = +n[0],
        a = +n[1],
        f = i;
    if (i < a)
        for (; f <= a; f++) e.push(f);
    else
        for (; f >= a; f--) e.push(f);
    return e
}
class _C {
    constructor({
        image: e,
        frameWidth: n,
        frameHeight: i,
        frameMargin: a,
        animations: f
    } = {}) {
        if (!e) throw Error("You must provide an Image for the SpriteSheet");
        this.animations = {}, this.image = e, this.frame = {
            width: n,
            height: i,
            margin: a
        }, this._f = e.width / n | 0, this.createAnimations(f)
    }
    createAnimations(e) {
        let n, i;
        for (i in e) {
            let {
                frames: a,
                frameRate: f,
                loop: m
            } = e[i];
            if (n = [], a === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(a).map(b => {
                n = n.concat(EC(b))
            }), this.animations[i] = wo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: m
            })
        }
    }
}
_C.prototype;
var th = {
    exports: {}
};
/*!
 * sweetalert2 v11.4.26
 * Released under the MIT License.
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i()
    })(yt, function() {
        const n = "SweetAlert2:",
            i = c => {
                const h = [];
                for (let C = 0; C < c.length; C++) h.indexOf(c[C]) === -1 && h.push(c[C]);
                return h
            },
            a = c => c.charAt(0).toUpperCase() + c.slice(1),
            f = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            m = c => {
                console.error("".concat(n, " ").concat(c))
            },
            b = [],
            k = c => {
                b.includes(c) || (b.push(c), f(c))
            },
            A = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            M = c => typeof c == "function" ? c() : c,
            V = c => c && typeof c.toPromise == "function",
            U = c => V(c) ? c.toPromise() : Promise.resolve(c),
            ne = c => c && Promise.resolve(c) === c,
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
            v = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            P = {},
            W = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => v.indexOf(c) !== -1,
            ve = c => P[c],
            d = c => {
                ae(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            Ee = c => {
                W.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Ae = c => {
                ve(c) && A(c, ve(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && Ee(h), Ae(h)
            },
            lt = "swal2-",
            Be = c => {
                const h = {};
                for (const C in c) h[c[C]] = lt + c[C];
                return h
            },
            J = Be(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            je = Be(["success", "warning", "info", "question", "error"]),
            H = () => document.body.querySelector(".".concat(J.container)),
            oe = c => {
                const h = H();
                return h ? h.querySelector(c) : null
            },
            Te = c => oe(".".concat(c)),
            we = () => Te(J.popup),
            ye = () => Te(J.icon),
            ue = () => Te(J.title),
            _e = () => Te(J["html-container"]),
            ke = () => Te(J.image),
            $e = () => Te(J["progress-steps"]),
            Ke = () => Te(J["validation-message"]),
            dt = () => oe(".".concat(J.actions, " .").concat(J.confirm)),
            Bt = () => oe(".".concat(J.actions, " .").concat(J.deny)),
            Ut = () => Te(J["input-label"]),
            _ = () => oe(".".concat(J.loader)),
            l = () => oe(".".concat(J.actions, " .").concat(J.cancel)),
            g = () => Te(J.actions),
            S = () => Te(J.footer),
            R = () => Te(J["timer-progress-bar"]),
            L = () => Te(J.close),
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
                const c = Array.from(we().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((C, $) => {
                        const ge = parseInt(C.getAttribute("tabindex")),
                            Ge = parseInt($.getAttribute("tabindex"));
                        return ge > Ge ? 1 : ge < Ge ? -1 : 0
                    }),
                    h = Array.from(we().querySelectorAll(B)).filter(C => C.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(C => pe(C))
            },
            Se = () => xt(document.body, J.shown) && !xt(document.body, J["toast-shown"]) && !xt(document.body, J["no-backdrop"]),
            he = () => we() && xt(we(), J.toast),
            Me = () => we().hasAttribute("data-loading"),
            De = {
                previousBodyPadding: null
            },
            it = (c, h) => {
                if (c.textContent = "", h) {
                    const $ = new DOMParser().parseFromString(h, "text/html");
                    Array.from($.querySelector("head").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    }), Array.from($.querySelector("body").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    })
                }
            },
            xt = (c, h) => {
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
            wt = (c, h) => {
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
            Ct = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Kt = (c, h, C) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach($ => {
                    Array.isArray(c) ? c.forEach(ge => {
                        C ? ge.classList.add($) : ge.classList.remove($)
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
                    const ge = C[$];
                    if (ge instanceof HTMLElement && xt(ge, h)) return ge
                }
            },
            N = (c, h, C) => {
                C === "".concat(parseInt(C)) && (C = parseInt(C)), C || parseInt(C) === 0 ? c.style[h] = typeof C == "number" ? "".concat(C, "px") : C : c.style.removeProperty(h)
            },
            X = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            D = c => {
                c.style.display = "none"
            },
            q = (c, h, C, $) => {
                const ge = c.querySelector(h);
                ge && (ge.style[C] = $)
            },
            fe = function(c, h) {
                let C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? X(c, C) : D(c)
            },
            pe = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !pe(dt()) && !pe(Bt()) && !pe(l()),
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
                pe(C) && (h && (C.style.transition = "none", C.style.width = "100%"), setTimeout(() => {
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
            Vn = 100,
            rt = {},
            Mn = () => {
                rt.previousActiveElement instanceof HTMLElement ? (rt.previousActiveElement.focus(), rt.previousActiveElement = null) : document.body && document.body.focus()
            },
            mi = c => new Promise(h => {
                if (!c) return h();
                const C = window.scrollX,
                    $ = window.scrollY;
                rt.restoreFocusTimeout = setTimeout(() => {
                    Mn(), h()
                }, Vn), window.scrollTo(C, $)
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
                const c = H();
                return c ? (c.remove(), Lt([document.documentElement, document.body], [J["no-backdrop"], J["toast-shown"], J["has-column"]]), !0) : !1
            },
            sn = () => {
                rt.currentInstance.resetValidationMessage()
            },
            kr = () => {
                const c = we(),
                    h = F(c, J.input),
                    C = F(c, J.file),
                    $ = c.querySelector(".".concat(J.range, " input")),
                    ge = c.querySelector(".".concat(J.range, " output")),
                    Ge = F(c, J.select),
                    Ht = c.querySelector(".".concat(J.checkbox, " input")),
                    $n = F(c, J.textarea);
                h.oninput = sn, C.onchange = sn, Ge.onchange = sn, Ht.onchange = sn, $n.oninput = sn, $.oninput = () => {
                    sn(), ge.value = $.value
                }, $.onchange = () => {
                    sn(), ge.value = $.value
                }
            },
            Tr = c => typeof c == "string" ? document.querySelector(c) : c,
            vi = c => {
                const h = we();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            $i = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(H(), J.rtl)
            },
            yi = c => {
                const h = kn();
                if (In()) {
                    m("SweetAlert2 requires document to initialize");
                    return
                }
                const C = document.createElement("div");
                C.className = J.container, h && Je(C, J["no-transition"]), it(C, Sr);
                const $ = Tr(c.target);
                $.appendChild(C), vi(c), $i($), kr()
            },
            wi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? Fi(c, h) : c && it(h, c)
            },
            Fi = (c, h) => {
                c.jquery ? ji(h, c) : it(h, c.toString())
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
            bi = (c, h) => {
                const C = g(),
                    $ = _();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? D(C) : X(C), ct(C, h, "actions"), Un(C, $, h), it($, h.loaderHtml), ct($, h, "loader")
            };

        function Un(c, h, C) {
            const $ = dt(),
                ge = Bt(),
                Ge = l();
            Ci($, "confirm", C), Ci(ge, "deny", C), Ci(Ge, "cancel", C), Gi($, ge, Ge, C), C.reverseButtons && (C.toast ? (c.insertBefore(Ge, $), c.insertBefore(ge, $)) : (c.insertBefore(Ge, h), c.insertBefore(ge, h), c.insertBefore($, h)))
        }

        function Gi(c, h, C, $) {
            if (!$.buttonsStyling) return Lt([c, h, C], J.styled);
            Je([c, h, C], J.styled), $.confirmButtonColor && (c.style.backgroundColor = $.confirmButtonColor, Je(c, J["default-outline"])), $.denyButtonColor && (h.style.backgroundColor = $.denyButtonColor, Je(h, J["default-outline"])), $.cancelButtonColor && (C.style.backgroundColor = $.cancelButtonColor, Je(C, J["default-outline"]))
        }

        function Ci(c, h, C) {
            fe(c, C["show".concat(a(h), "Button")], "inline-block"), it(c, C["".concat(h, "ButtonText")]), c.setAttribute("aria-label", C["".concat(h, "ButtonAriaLabel")]), c.className = J[h], ct(c, C, "".concat(h, "Button")), Je(c, C["".concat(h, "ButtonClass")])
        }
        const et = (c, h) => {
            const C = H();
            !C || (y(C, h.backdrop), o(C, h.position), x(C, h.grow), ct(C, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], J["no-backdrop"])
        }

        function o(c, h) {
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
            Ce = (c, h) => {
                const C = we(),
                    $ = O.innerParams.get(c),
                    ge = !$ || h.input !== $.input;
                Q.forEach(Ge => {
                    const Ht = F(C, J[Ge]);
                    Wt(Ge, h.inputAttributes), Ht.className = J[Ge], ge && D(Ht)
                }), h.input && (ge && qe(h), qn(h))
            },
            qe = c => {
                if (!jt[c.input]) return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Ar(c.input),
                    C = jt[c.input](h, c);
                X(h), setTimeout(() => {
                    Ct(C)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const C = c.attributes[h].name;
                    ["type", "value", "style"].includes(C) || c.removeAttribute(C)
                }
            },
            Wt = (c, h) => {
                const C = wt(we(), c);
                if (!!C) {
                    It(C);
                    for (const $ in h) C.setAttribute($, h[$])
                }
            },
            qn = c => {
                const h = Ar(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Bn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Wn = (c, h, C) => {
                if (C.inputLabel) {
                    c.id = J.input;
                    const $ = document.createElement("label"),
                        ge = J["input-label"];
                    $.setAttribute("for", c.id), $.className = ge, typeof C.customClass == "object" && Je($, C.customClass.inputLabel), $.innerText = C.inputLabel, h.insertAdjacentElement("beforebegin", $)
                }
            },
            Ar = c => F(we(), J[c] || J.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ne(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            jt = {};
        jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = (c, h) => (Xt(c, h.inputValue), Wn(c, c, h), Bn(c, h), c.type = h.input, c), jt.file = (c, h) => (Wn(c, c, h), Bn(c, h), c), jt.range = (c, h) => {
            const C = c.querySelector("input"),
                $ = c.querySelector("output");
            return Xt(C, h.inputValue), C.type = h.input, Xt($, h.inputValue), Wn(C, c, h), c
        }, jt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const C = document.createElement("option");
                it(C, h.inputPlaceholder), C.value = "", C.disabled = !0, C.selected = !0, c.appendChild(C)
            }
            return Wn(c, c, h), c
        }, jt.radio = c => (c.textContent = "", c), jt.checkbox = (c, h) => {
            const C = wt(we(), "checkbox");
            C.value = "1", C.id = J.checkbox, C.checked = Boolean(h.inputValue);
            const $ = c.querySelector("span");
            return it($, h.inputPlaceholder), C
        }, jt.textarea = (c, h) => {
            Xt(c, h.inputValue), Bn(c, h), Wn(c, c, h);
            const C = $ => parseInt(window.getComputedStyle($).marginLeft) + parseInt(window.getComputedStyle($).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const $ = parseInt(window.getComputedStyle(we()).width),
                        ge = () => {
                            const Ge = c.offsetWidth + C(c);
                            Ge > $ ? we().style.width = "".concat(Ge, "px") : we().style.width = null
                        };
                    new MutationObserver(ge).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Hi = (c, h) => {
                const C = _e();
                ct(C, h, "htmlContainer"), h.html ? (wi(h.html, C), X(C, "block")) : h.text ? (C.textContent = h.text, X(C, "block")) : D(C), Ce(c, h)
            },
            Co = (c, h) => {
                const C = S();
                fe(C, h.footer), h.footer && wi(h.footer, C), ct(C, h, "footer")
            },
            xo = (c, h) => {
                const C = L();
                it(C, h.closeButtonHtml), ct(C, h, "closeButton"), fe(C, h.showCloseButton), C.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const C = O.innerParams.get(c),
                    $ = ye();
                if (C && h.icon === C.icon) {
                    ms($, h), Rr($, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    D($);
                    return
                }
                if (h.icon && Object.keys(je).indexOf(h.icon) === -1) {
                    m('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), D($);
                    return
                }
                X($), ms($, h), Rr($, h), Je($, h.showClass.icon)
            },
            Rr = (c, h) => {
                for (const C in je) h.icon !== C && Lt(c, je[C]);
                Je(c, je[h.icon]), bn(c, h), Ui(), ct(c, h, "icon")
            },
            Ui = () => {
                const c = we(),
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
            Eo = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            ms = (c, h) => {
                let C = c.innerHTML,
                    $;
                h.iconHtml ? $ = Ir(h.iconHtml) : h.icon === "success" ? ($ = gs, C = C.replace(/ style=".*?"/g, "")) : h.icon === "error" ? $ = Eo : $ = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), C.trim() !== $.trim() && it(c, $)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const C of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) q(c, C, "backgroundColor", h.iconColor);
                    q(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Ir = c => '<div class="'.concat(J["icon-content"], '">').concat(c, "</div>"),
            xi = (c, h) => {
                const C = ke();
                if (!h.imageUrl) return D(C);
                X(C, ""), C.setAttribute("src", h.imageUrl), C.setAttribute("alt", h.imageAlt), N(C, "width", h.imageWidth), N(C, "height", h.imageHeight), C.className = J.image, ct(C, h, "image")
            },
            _o = (c, h) => {
                const C = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return D(C);
                X(C), C.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach(($, ge) => {
                    const Ge = So($);
                    if (C.appendChild(Ge), ge === h.currentProgressStep && Je(Ge, J["active-progress-step"]), ge !== h.progressSteps.length - 1) {
                        const Ht = Xn(h);
                        C.appendChild(Ht)
                    }
                })
            },
            So = c => {
                const h = document.createElement("li");
                return Je(h, J["progress-step"]), it(h, c), h
            },
            Xn = c => {
                const h = document.createElement("li");
                return Je(h, J["progress-step-line"]), c.progressStepsDistance && N(h, "width", c.progressStepsDistance), h
            },
            Yn = (c, h) => {
                const C = ue();
                fe(C, h.title || h.titleText, "block"), h.title && wi(h.title, C), h.titleText && (C.innerText = h.titleText), ct(C, h, "title")
            },
            Mr = (c, h) => {
                const C = H(),
                    $ = we();
                h.toast ? (N(C, "width", h.width), $.style.width = "100%", $.insertBefore(_(), ye())) : N($, "width", h.width), N($, "padding", h.padding), h.color && ($.style.color = h.color), h.background && ($.style.background = h.background), D(Ke()), ko($, h)
            },
            ko = (c, h) => {
                c.className = "".concat(J.popup, " ").concat(pe(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], J["toast-shown"]), Je(c, J.toast)) : Je(c, J.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, J["icon-".concat(h.icon)])
            },
            Dr = (c, h) => {
                Mr(c, h), et(c, h), _o(c, h), Or(c, h), xi(c, h), Yn(c, h), xo(c, h), Hi(c, h), bi(c, h), Co(c, h), typeof h.didRender == "function" && h.didRender(we())
            },
            Kn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            Ei = () => {
                Array.from(document.body.children).forEach(h => {
                    h === H() || h.contains(H()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Lr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            qi = ["swal-title", "swal-html", "swal-footer"],
            To = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const C = h.content;
                return Mo(C), Object.assign(vs(C), Ao(C), Oo(C), Pr(C), Ro(C), Io(C, qi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach($ => {
                    Jn($, ["name", "value"]);
                    const ge = $.getAttribute("name"),
                        Ge = $.getAttribute("value");
                    typeof re[ge] == "boolean" && Ge === "false" && (h[ge] = !1), typeof re[ge] == "object" && (h[ge] = JSON.parse(Ge))
                }), h
            },
            Ao = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach($ => {
                    Jn($, ["type", "color", "aria-label"]);
                    const ge = $.getAttribute("type");
                    h["".concat(ge, "ButtonText")] = $.innerHTML, h["show".concat(a(ge), "Button")] = !0, $.hasAttribute("color") && (h["".concat(ge, "ButtonColor")] = $.getAttribute("color")), $.hasAttribute("aria-label") && (h["".concat(ge, "ButtonAriaLabel")] = $.getAttribute("aria-label"))
                }), h
            },
            Oo = c => {
                const h = {},
                    C = c.querySelector("swal-image");
                return C && (Jn(C, ["src", "width", "height", "alt"]), C.hasAttribute("src") && (h.imageUrl = C.getAttribute("src")), C.hasAttribute("width") && (h.imageWidth = C.getAttribute("width")), C.hasAttribute("height") && (h.imageHeight = C.getAttribute("height")), C.hasAttribute("alt") && (h.imageAlt = C.getAttribute("alt"))), h
            },
            Pr = c => {
                const h = {},
                    C = c.querySelector("swal-icon");
                return C && (Jn(C, ["type", "color"]), C.hasAttribute("type") && (h.icon = C.getAttribute("type")), C.hasAttribute("color") && (h.iconColor = C.getAttribute("color")), h.iconHtml = C.innerHTML), h
            },
            Ro = c => {
                const h = {},
                    C = c.querySelector("swal-input");
                C && (Jn(C, ["type", "label", "placeholder", "value"]), h.input = C.getAttribute("type") || "text", C.hasAttribute("label") && (h.inputLabel = C.getAttribute("label")), C.hasAttribute("placeholder") && (h.inputPlaceholder = C.getAttribute("placeholder")), C.hasAttribute("value") && (h.inputValue = C.getAttribute("value")));
                const $ = Array.from(c.querySelectorAll("swal-input-option"));
                return $.length && (h.inputOptions = {}, $.forEach(ge => {
                    Jn(ge, ["value"]);
                    const Ge = ge.getAttribute("value"),
                        Ht = ge.innerHTML;
                    h.inputOptions[Ge] = Ht
                })), h
            },
            Io = (c, h) => {
                const C = {};
                for (const $ in h) {
                    const ge = h[$],
                        Ge = c.querySelector(ge);
                    Ge && (Jn(Ge, []), C[ge.replace(/^swal-/, "")] = Ge.innerHTML.trim())
                }
                return C
            },
            Mo = c => {
                const h = qi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(C => {
                    const $ = C.tagName.toLowerCase();
                    h.indexOf($) === -1 && f("Unrecognized element <".concat($, ">"))
                })
            },
            Jn = (c, h) => {
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

        function Lo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function ws(c) {
            Do(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Lo(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), yi(c)
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
                De.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (De.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(De.previousBodyPadding + zi(), "px"))
            },
            Vr = () => {
                De.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(De.previousBodyPadding, "px"), De.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !xt(document.body, J.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, J.iosfix), Br(), xs()
                }
            },
            xs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    C = !!c.match(/WebKit/i);
                h && C && !c.match(/CriOS/i) && we().scrollHeight > window.innerHeight - 44 && (H().style.paddingBottom = "".concat(44, "px"))
            },
            Br = () => {
                const c = H();
                let h;
                c.ontouchstart = C => {
                    h = Po(C)
                }, c.ontouchmove = C => {
                    h && (C.preventDefault(), C.stopPropagation())
                }
            },
            Po = c => {
                const h = c.target,
                    C = H();
                return No(c) || Vo(c) ? !1 : h === C || !Ve(C) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ve(_e()) && _e().contains(h))
            },
            No = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            Vo = c => c.touches && c.touches.length > 1,
            _i = () => {
                if (xt(document.body, J.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Lt(document.body, J.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            $r = 10,
            Fr = c => {
                const h = H(),
                    C = we();
                typeof c.willOpen == "function" && c.willOpen(C);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(h, C, c), setTimeout(() => {
                    Bo(h, C)
                }, $r), Se() && ($o(h, c.scrollbarPadding, ge), Ei()), !he() && !rt.previousActiveElement && (rt.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(C)), Lt(h, J["no-transition"])
            },
            Es = c => {
                const h = we();
                if (c.target !== h) return;
                const C = H();
                h.removeEventListener(mn, Es), C.style.overflowY = "auto"
            },
            Bo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, Es)) : c.style.overflowY = "auto"
            },
            $o = (c, h, C) => {
                Cs(), h && C !== "hidden" && bs(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, C) => {
                Je(c, C.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), X(h, "grid"), setTimeout(() => {
                    Je(h, C.showClass.popup), h.style.removeProperty("opacity")
                }, $r), Je([document.documentElement, document.body], J.shown), C.heightAuto && C.backdrop && !C.toast && Je([document.documentElement, document.body], J["height-auto"])
            },
            s = c => {
                let h = we();
                h || new At, h = we();
                const C = _();
                he() ? D(ye()) : u(h, c), X(C), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const C = g(),
                    $ = _();
                !h && pe(dt()) && (h = dt()), X(C), h && (D(h), $.setAttribute("data-button-to-replace", h.className)), $.parentNode.insertBefore($, h), Je([c, C], J.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? G(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && (V(h.inputValue) || ne(h.inputValue)) && (s(dt()), Z(c, h))
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
                const C = we(),
                    $ = ge => le[h.input](C, be(ge), h);
                V(h.inputOptions) || ne(h.inputOptions) ? (s(dt()), U(h.inputOptions).then(ge => {
                    c.hideLoading(), $(ge)
                })) : typeof h.inputOptions == "object" ? $(h.inputOptions) : m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const C = c.getInput();
                D(C), U(h.inputValue).then($ => {
                    C.value = h.input === "number" ? parseFloat($) || 0 : "".concat($), X(C), C.focus(), c.hideLoading()
                }).catch($ => {
                    m("Error in inputValue promise: ".concat($)), C.value = "", X(C), C.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, C) => {
                    const $ = F(c, J.select),
                        ge = (Ge, Ht, $n) => {
                            const pn = document.createElement("option");
                            pn.value = $n, it(pn, Ht), pn.selected = ie($n, C.inputValue), Ge.appendChild(pn)
                        };
                    h.forEach(Ge => {
                        const Ht = Ge[0],
                            $n = Ge[1];
                        if (Array.isArray($n)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ht, pn.disabled = !1, $.appendChild(pn), $n.forEach(nr => ge(pn, nr[1], nr[0]))
                        } else ge($, $n, Ht)
                    }), $.focus()
                },
                radio: (c, h, C) => {
                    const $ = F(c, J.radio);
                    h.forEach(Ge => {
                        const Ht = Ge[0],
                            $n = Ge[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = J.radio, pn.value = Ht, ie(Ht, C.inputValue) && (pn.checked = !0);
                        const Jo = document.createElement("span");
                        it(Jo, $n), Jo.className = J.label, nr.appendChild(pn), nr.appendChild(Jo), $.appendChild(nr)
                    });
                    const ge = $.querySelectorAll("input");
                    ge.length && ge[0].focus()
                }
            },
            be = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((C, $) => {
                    let ge = C;
                    typeof ge == "object" && (ge = be(ge)), h.push([$, ge])
                }) : Object.keys(c).forEach(C => {
                    let $ = c[C];
                    typeof $ == "object" && ($ = be($)), h.push([C, $])
                }), h
            },
            ie = (c, h) => h && h.toString() === c.toString();

        function ce() {
            const c = O.innerParams.get(this);
            if (!c) return;
            const h = O.domCache.get(this);
            D(h.loader), he() ? c.icon && X(ye()) : Ue(h), Lt([h.popup, h.actions], J.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ue = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? X(h[0], "inline-block") : Ne() && D(c.actions)
        };

        function st(c) {
            const h = O.innerParams.get(c || this),
                C = O.domCache.get(c || this);
            return C ? wt(C.popup, h.input) : null
        }
        var Fe = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => pe(we()),
            Nt = () => dt() && dt().click(),
            un = () => Bt() && Bt().click(),
            _t = () => l() && l().click(),
            tt = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, C, $) => {
                tt(h), C.toast || (h.keydownHandler = ge => Wi(c, ge, $), h.keydownTarget = C.keydownListenerCapture ? window : we(), h.keydownListenerCapture = C.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, C) => {
                const $ = te();
                if ($.length) return h = h + C, h === $.length ? h = 0 : h === -1 && (h = $.length - 1), $[h].focus();
                we().focus()
            },
            Mt = ["ArrowRight", "ArrowDown"],
            Si = ["ArrowLeft", "ArrowUp"],
            Wi = (c, h, C) => {
                const $ = O.innerParams.get(c);
                !$ || h.isComposing || h.keyCode === 229 || ($.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, $) : h.key === "Tab" ? Qn(h, $) : [...Mt, ...Si].includes(h.key) ? Zn(h.key) : h.key === "Escape" && an(h, $, C))
            },
            hn = (c, h, C) => {
                if (!!M(C.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(C.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Qn = (c, h) => {
                const C = c.target,
                    $ = te();
                let ge = -1;
                for (let Ge = 0; Ge < $.length; Ge++)
                    if (C === $[Ge]) {
                        ge = Ge;
                        break
                    } c.shiftKey ? ft(h, ge, -1) : ft(h, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            Zn = c => {
                const h = dt(),
                    C = Bt(),
                    $ = l();
                if (document.activeElement instanceof HTMLElement && ![h, C, $].includes(document.activeElement)) return;
                const ge = Mt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Ge = document.activeElement;
                for (let Ht = 0; Ht < g().children.length; Ht++) {
                    if (Ge = Ge[ge], !Ge) return;
                    if (Ge instanceof HTMLButtonElement && pe(Ge)) break
                }
                Ge instanceof HTMLButtonElement && Ge.focus()
            },
            an = (c, h, C) => {
                M(h.allowEscapeKey) && (c.preventDefault(), C(Kn.esc))
            };

        function Dn(c, h, C, $) {
            he() ? ks(c, $) : (mi(C).then(() => ks(c, $)), tt(rt)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), Se() && (Vr(), _i(), Lr()), vn()
        }

        function vn() {
            Lt([document.documentElement, document.body], [J.shown, J["height-auto"], J["no-backdrop"], J["toast-shown"]])
        }

        function Cn(c) {
            c = ti(c);
            const h = Fe.swalPromiseResolve.get(this),
                C = ei(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : C && h(c)
        }

        function _s() {
            return !!O.awaitingPromise.get(this)
        }
        const ei = c => {
            const h = we();
            if (!h) return !1;
            const C = O.innerParams.get(c);
            if (!C || xt(h, C.hideClass.popup)) return !1;
            Lt(h, C.showClass.popup), Je(h, C.hideClass.popup);
            const $ = H();
            return Lt($, C.showClass.backdrop), Je($, C.hideClass.backdrop), Ss(c, h, C), !0
        };

        function jr(c) {
            const h = Fe.swalPromiseReject.get(this);
            gt(this), h && h(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (O.awaitingPromise.delete(c), O.innerParams.get(c) || c._destroy())
            },
            ti = c => typeof c > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c),
            Ss = (c, h, C) => {
                const $ = H(),
                    ge = mn && pt(h);
                typeof C.willClose == "function" && C.willClose(h), ge ? zr(c, h, $, C.returnFocus, C.didClose) : Dn(c, $, C.returnFocus, C.didClose)
            },
            zr = (c, h, C, $, ge) => {
                rt.swalCloseEventFinishedCallback = Dn.bind(null, c, C, $, ge), h.addEventListener(mn, function(Ge) {
                    Ge.target === h && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback)
                })
            },
            ks = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function ki(c, h, C) {
            const $ = O.domCache.get(c);
            h.forEach(ge => {
                $[ge].disabled = C
            })
        }

        function Ts(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const $ = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < $.length; ge++) $[ge].disabled = h
            } else c.disabled = h
        }

        function As() {
            ki(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function Fo() {
            ki(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function jo() {
            return Ts(this.getInput(), !1)
        }

        function zo() {
            return Ts(this.getInput(), !0)
        }

        function Xi(c) {
            const h = O.domCache.get(this),
                C = O.innerParams.get(this);
            it(h.validationMessage, c), h.validationMessage.className = J["validation-message"], C.customClass && C.customClass.validationMessage && Je(h.validationMessage, C.customClass.validationMessage), X(h.validationMessage);
            const $ = this.getInput();
            $ && ($.setAttribute("aria-invalid", !0), $.setAttribute("aria-describedby", J["validation-message"]), Ct($), Je($, J.inputerror))
        }

        function Go() {
            const c = O.domCache.get(this);
            c.validationMessage && D(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Lt(h, J.inputerror))
        }

        function Ho() {
            return O.domCache.get(this).progressSteps
        }

        function Uo(c) {
            const h = we(),
                C = O.innerParams.get(this);
            if (!h || xt(h, C.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const $ = Ti(c),
                ge = Object.assign({}, C, $);
            Dr(this, ge), O.innerParams.set(this, ge), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Ti = c => {
            const h = {};
            return Object.keys(c).forEach(C => {
                se(C) ? h[C] = c[C] : f("Invalid parameter to update: ".concat(C))
            }), h
        };

        function qo() {
            const c = O.domCache.get(this),
                h = O.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && rt.swalCloseEventFinishedCallback && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Gr(this)
        }
        const Gr = c => {
                Tn(c), delete c.params, delete rt.keydownHandler, delete rt.keydownTarget, delete rt.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(O, c), O.awaitingPromise.set(c, !0)) : (xn(Fe, c), xn(O, c))
            },
            xn = (c, h) => {
                for (const C in c) c[C].delete(h)
            };
        var Hr = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: st,
            close: Cn,
            isAwaitingPromise: _s,
            rejectPromise: jr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: As,
            disableButtons: Fo,
            enableInput: jo,
            disableInput: zo,
            showValidationMessage: Xi,
            resetValidationMessage: Go,
            getProgressSteps: Ho,
            update: Uo,
            _destroy: qo
        });
        const Os = c => {
                const h = O.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Ji(c, !0)
            },
            Rs = c => {
                const h = O.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            Wo = (c, h) => {
                c.disableButtons(), h(Kn.cancel)
            },
            St = (c, h) => {
                const C = O.innerParams.get(c);
                if (!C.input) {
                    m('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const $ = w(c, C);
                C.inputValidator ? Yi(c, $, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, $) : Ji(c, $) : (c.enableButtons(), c.showValidationMessage(C.validationMessage))
            },
            Yi = (c, h, C) => {
                const $ = O.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => U($.inputValidator(h, $.validationMessage))).then(Ge => {
                    c.enableButtons(), c.enableInput(), Ge ? c.showValidationMessage(Ge) : C === "deny" ? dn(c, h) : Ji(c, h)
                })
            },
            dn = (c, h) => {
                const C = O.innerParams.get(c || void 0);
                C.showLoaderOnDeny && s(Bt()), C.preDeny ? (O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => U(C.preDeny(h, C.validationMessage))).then(ge => {
                    ge === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? h : ge
                    })
                }).catch(ge => Ki(c || void 0, ge))) : c.close({
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
                C.showLoaderOnConfirm && s(), C.preConfirm ? (c.resetValidationMessage(), O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => U(C.preConfirm(h, C.validationMessage))).then(ge => {
                    pe(Ke()) || ge === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof ge > "u" ? h : ge)
                }).catch(ge => Ki(c || void 0, ge))) : yn(c, h)
            },
            Xo = (c, h, C) => {
                O.innerParams.get(c).toast ? Yo(c, h, C) : (Ur(h), Ms(h), Qi(c, h, C))
            },
            Yo = (c, h, C) => {
                h.popup.onclick = () => {
                    const $ = O.innerParams.get(c);
                    $ && (Is($) || $.timer || $.input) || C(Kn.close)
                }
            },
            Is = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let An = !1;
        const Ur = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (An = !0)
                    }
                }
            },
            Ms = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (An = !0)
                    }
                }
            },
            Qi = (c, h, C) => {
                h.container.onclick = $ => {
                    const ge = O.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    $.target === h.container && M(ge.allowOutsideClick) && C(Kn.backdrop)
                }
            },
            Zi = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || Zi(c),
            Ko = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((C, $) => {
                    const ge = c[$];
                    typeof ge == "string" || er(ge) ? h[C] = ge : ge !== void 0 && m("Unexpected type of ".concat(C, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, C = new Array(h), $ = 0; $ < h; $++) C[$] = arguments[$];
            return new c(...C)
        }

        function qr(c) {
            class h extends this {
                _main($, ge) {
                    return super._main($, Object.assign({}, c, ge))
                }
            }
            return h
        }
        const Wr = () => rt.timeout && rt.timeout.getTimerLeft(),
            Ds = () => {
                if (rt.timeout) return Ye(), rt.timeout.stop()
            },
            I = () => {
                if (rt.timeout) {
                    const c = rt.timeout.start();
                    return Ft(c), c
                }
            },
            j = () => {
                const c = rt.timeout;
                return c && (c.running ? Ds() : I())
            },
            Y = c => {
                if (rt.timeout) {
                    const h = rt.timeout.increase(c);
                    return Ft(h, !0), h
                }
            },
            de = () => rt.timeout && rt.timeout.isRunning();
        let ee = !1;
        const me = {};

        function xe() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            me[c] = this, ee || (document.body.addEventListener("click", Oe), ee = !0)
        }
        const Oe = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const C in me) {
                    const $ = h.getAttribute(C);
                    if ($) {
                        me[C].fire({
                            template: $
                        });
                        return
                    }
                }
        };
        var Le = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: ve,
            argsToParams: Ko,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: H,
            getPopup: we,
            getTitle: ue,
            getHtmlContainer: _e,
            getImage: ke,
            getIcon: ye,
            getInputLabel: Ut,
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
            isLoading: Me,
            fire: tr,
            mixin: qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Wr,
            stopTimer: Ds,
            resumeTimer: I,
            toggleTimer: j,
            increaseTimer: Y,
            isTimerRunning: de,
            bindClickHandler: xe
        });
        let ze;
        class He {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, C = new Array(h), $ = 0; $ < h; $++) C[$] = arguments[$];
                const ge = Object.freeze(this.constructor.argsToParams(C));
                Object.defineProperties(this, {
                    params: {
                        value: ge,
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
                Pe(Object.assign({}, C, h)), rt.currentInstance && (rt.currentInstance._destroy(), Se() && Lr()), rt.currentInstance = ze;
                const $ = ht(h, C);
                ws($), Object.freeze($), rt.timeout && (rt.timeout.stop(), delete rt.timeout), clearTimeout(rt.restoreFocusTimeout);
                const ge = Tt(ze);
                return Dr(ze, $), O.innerParams.set(ze, $), Xe(ze, ge, $)
            }
            then(h) {
                return O.promise.get(this).then(h)
            } finally(h) {
                return O.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, C) => new Promise(($, ge) => {
                const Ge = Ht => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ht
                    })
                };
                Fe.swalPromiseResolve.set(c, $), Fe.swalPromiseReject.set(c, ge), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => Wo(c, Ge), h.closeButton.onclick = () => Ge(Kn.close), Xo(c, h, Ge), on(c, rt, C, Ge), p(c, C), Fr(C), We(rt, C, Ge), Gt(h, C), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const C = To(c),
                    $ = Object.assign({}, re, h, C, c);
                return $.showClass = Object.assign({}, re.showClass, $.showClass), $.hideClass = Object.assign({}, re.hideClass, $.hideClass), $
            },
            Tt = c => {
                const h = {
                    popup: we(),
                    container: H(),
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
                D($), h.timer && (c.timeout = new Nr(() => {
                    C("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (X($), ct($, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(h.timer)
                })))
            },
            Gt = (c, h) => {
                if (!h.toast) {
                    if (!M(h.allowEnterKey)) return fn();
                    Jt(c, h) || ft(h, -1, 1)
                }
            },
            Jt = (c, h) => h.focusDeny && pe(c.denyButton) ? (c.denyButton.focus(), !0) : h.focusCancel && pe(c.cancelButton) ? (c.cancelButton.focus(), !0) : h.focusConfirm && pe(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
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
            it(c, `
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
        Object.assign(He.prototype, Hr), Object.assign(He, Le), Object.keys(Hr).forEach(c => {
            He[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), He.DismissReason = Kn, He.version = "11.4.26";
        const At = He;
        return At.default = At, At
    }), typeof yt < "u" && yt.Sweetalert2 && (yt.swal = yt.sweetAlert = yt.Swal = yt.SweetAlert = yt.Sweetalert2), typeof document < "u" && function(n, i) {
        var a = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.disabled || (a.styleSheet.cssText = i);
        else try {
            a.innerHTML = i
        } catch {
            a.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(th);
const Rn = th.exports;
class Ot {
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
        const n = new URL("main/standalone/guesspionage-crowdplay/assets/8cdd50e7.png", self.location).href,
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
const SC = `<div class="canvasContainer">\r
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
    kC = {
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
                i = Li().width,
                a = Li().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = yo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Li().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Li().width, Li().height))
        }
    },
    TC = mt.View.extend({
        template: Ze.template(SC),
        className: "CameraUser",
        model: new at.Model({
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
            yC("cameraCanvas"), t.sprites = [], t.gameLoop = CC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = dl(kC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                        a = await navigator.mediaDevices.enumerateDevices();
                    this.currentStream = i, this.video.srcObject = i, await this.video.play(), this.gotDevices(a)
                } catch (i) {
                    console.error(i), Ot.show("alert", {
                        titleText: "Unable to Access Camera",
                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else Ot.show("alert", {
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
                const a = i.getContext("2d");
                this.previewImage && a.drawImage(this.previewImage, 0, 0, i.width, i.height), this.model.set("transmitting", !0);
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
                i = Ie(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(Ie(window).innerHeight(), 250),
                m = Math.min(a / t, f / e),
                b = t * m,
                k = e * m;
            n.style.width = `${b}px`, n.style.height = `${k}px`, n.width = b, n.height = k
        }
    }),
    Nn = at.Model.extend({
        defaults: {},
        set(t, e) {
            const n = Ze.extend({}, this.attributes, this.defaults, t);
            return at.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = Ze.extend({}, this.defaults, this.attributes, t);
            return at.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    AC = Nn.extend({
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
    OC = mt.View.extend({
        template: Ze.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new AC,
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
            this.cameraView = this.cameraView || new TC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    RC = '<a class="change-color button-color btn"></a>',
    IC = mt.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: Ze.template(RC),
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
    MC = mt.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: IC,
        collection: new at.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    DC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/standalone/guesspionage-crowdplay/assets/5f12600b.png"/></svg>\r
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
    LC = mt.View.extend({
        tagName: "div",
        className: "picker",
        template: Ze.template(DC),
        model: new at.Model({}),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new MC({
                collection: new at.Collection
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
class nh {
    constructor(e, n, i) {
        ot(this, "options");
        ot(this, "canvas");
        ot(this, "canvasCTX");
        ot(this, "tipCanvas");
        ot(this, "tipCanvasCTX");
        ot(this, "lines", []);
        ot(this, "image");
        ot(this, "startX", null);
        ot(this, "startY", null);
        ot(this, "smoothedMouseX", null);
        ot(this, "smoothedMouseY", null);
        ot(this, "lastMouse", {});
        ot(this, "lastMouseChangeVector", {});
        ot(this, "lastSmoothedMouse", {});
        ot(this, "lastThickness");
        ot(this, "lastRotation");
        ot(this, "colorLevel");
        this.options = i, this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = n, this.canvasCTX = this.canvas.getContext("2d"), this.tipCanvas = document.createElement("canvas"), this.tipCanvas.width = e, this.tipCanvas.height = n, this.tipCanvasCTX = this.tipCanvas.getContext("2d")
    }
    addLine(e, n, i, a) {
        this.lines.push({
            thickness: e,
            color: n,
            highlighter: i,
            points: []
        }), this.addPoint(a), this.update()
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
                const a = i.points[i.points.length - 1];
                if (a.x === n.x && a.y === n.y) return
            }
            i.points.push(n), i.points.length === 2 && i.points.unshift(i.points[1]), this.update()
        }
    }
    setLines(e) {
        const n = e.map(i => {
            let a = i.points;
            return typeof a == "string" ? a = i.points.split("|").map(f => ({
                x: parseInt(f.split(",")[0], 10),
                y: parseInt(f.split(",")[1], 10)
            })) : a = a.map(f => ({
                x: parseInt(f.x, 10),
                y: parseInt(f.y, 10)
            })), {
                color: i.color,
                thickness: i.thickness,
                points: a
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
        const a = e * this.options.minThickness;
        this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, a * this.options.dotMultiplier, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.options.cappedEnds && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.lastMouseChangeVector = {
            x: 0,
            y: 0
        }, this.startX = n, this.lastMouse.x = n, this.smoothedMouseX = n, this.lastSmoothedMouse.x = n, this.startY = i, this.lastMouse.y = i, this.smoothedMouseY = i, this.lastSmoothedMouse.y = i, this.lastThickness = a, this.lastRotation = void 0, this.colorLevel = 0
    }
    continueLineInContext(e, n, i) {
        const a = n - this.lastMouse.x,
            f = i - this.lastMouse.y;
        a * this.lastMouseChangeVector.x + f * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (n - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
        const m = this.smoothedMouseX - this.lastSmoothedMouse.x,
            b = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(m * m + b * b);
        let A;
        k !== 0 ? A = Math.PI / 2 + Math.atan2(b, m) : A = 0;
        const M = this.options.minThickness * e + this.options.thicknessFactor * k,
            V = this.lastThickness + this.options.thicknessSmoothingFactor * (M - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = A);
        const U = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(A),
            ne = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(A),
            K = Math.sin(A),
            re = Math.cos(A),
            v = this.lastThickness * U,
            P = this.lastThickness * ne,
            W = V * K,
            ae = V * re,
            se = .33 * k * U,
            ve = -.33 * k * ne,
            d = this.lastSmoothedMouse.x + P + se,
            Ee = this.lastSmoothedMouse.y + v + ve,
            Ae = this.lastSmoothedMouse.x - P + se,
            Pe = this.lastSmoothedMouse.y - v + ve;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(d, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + W), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.canvasCTX.quadraticCurveTo(Ae, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * V;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + W), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = A, this.lastThickness = V, this.lastMouseChangeVector = {
            x: a,
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
const dc = {
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
class PC {
    constructor(e, n = {}) {
        ot(this, "canvasSelector");
        ot(this, "canvas");
        ot(this, "ctx");
        ot(this, "options");
        ot(this, "history");
        ot(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Ie(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(dc, n), this.history = [], this.layerNames.forEach(i => {
            const a = new nh(this.canvas.width, this.canvas.height, this.options.sketchOptions);
            a.name = i, this[i] = a
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
        const n = Object.assign(dc.sketchOptions, e);
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
            a = this.canvas.width * e,
            f = this.canvas.height * e;
        i.width = a, i.height = f;
        const m = i.getContext("2d");
        return n && (m.fillStyle = n, m.fillRect(0, 0, a, f)), m.drawImage(this.highlighterSketch.canvas, 0, 0, a, f), m.drawImage(this.markerSketch.canvas, 0, 0, a, f), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const NC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    VC = mt.View.extend({
        className: "Sketchpad canvasContainer",
        template: Ze.template(NC),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new PC(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = Ie(n)[0].width / Ie(n).width(),
                a = n.getBoundingClientRect(),
                f = this.model.get("size"),
                m = this.sketchpad.options.thickness;
            let b = (e.clientX - a.left) * i;
            b = Math.min(f.width - m, Math.max(m, b));
            let k = (e.clientY - a.top) * i;
            return k = Math.min(f.height - m, Math.max(m, k)), {
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
                const a = i.target;
                this.sketchpad.setLayerImage("backgroundSketch", a)
            }, n.src = e
        },
        handleContextMenu(t) {
            t.preventDefault()
        }
    }),
    BC = `<div class="controller-content">\r
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
    $C = Nn.extend({
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
    FC = mt.View.extend({
        className: "Draw",
        template: Ze.template(BC),
        model: new $C,
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
                    return t ? t.html ? t.html : Ie("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new gi({}), this.toolbarComponent = this.toolbarComponent || new LC({
                model: new at.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new VC({
                model: new at.Model
            }), this.buttonsCollection = this.buttonsCollection || new at.Collection([]), this.buttonsComponent = this.buttonsComponent || new fi({
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
            this.stickit(), this.update(), this.onResize(), Ot.vibrate()
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
            if (t.length === 0 && !this.model.get("allowEmpty")) return Ot.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                    lines: t,
                    action: "submit"
                },
                n = this.model.get("objectKey");
            return n && (e.objectKey = n, e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), this.model.get("debug") && Ot.show("custom", {
                html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
            }), !1
        },
        onObjectFilterError() {
            Ot.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
        },
        onResize() {
            const t = Ie("#sketchpad"),
                e = Ie("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(Ie(".controller-content").css("border-top-width"), 10) * 2 + Ie(".playerTopBar").innerHeight() + Ie("#prompt").innerHeight() + Ie("#toolbar").innerHeight() + parseInt(Ie(".canvasContainer").css("border-top-width"), 10) * 2 + Ie("#buttons").innerHeight() + Ie("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(Ie(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(Ie(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(Ie(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                m = 2,
                b = Math.min(t.width() - i, a * m),
                k = Math.max(Ie("#controller-container").innerHeight() - n, 250),
                A = Math.min(b / a, k / f),
                M = a * A,
                V = f * A;
            e.style.width = `${M}px`, e.style.height = `${V}px`, window.scrollTo(0, 0)
        }
    }),
    jC = `<div>
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
    zC = Nn.extend({
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
    GC = mt.View.extend({
        className: "EnterSingleText scrollable",
        template: Ze.template(jC),
        model: new zC,
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
                    return t ? t.html ? t.html : Ie("<div />").text(t.text).html() : ""
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new gi({
                model: new at.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new to({
                model: new at.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new at.Collection([{
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
            this.update(), Ot.vibrate()
        },
        onChildviewInputText(t) {
            let e = t.getValue();
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = Ze.throttle(() => {
                const n = t.getSanitizedValue();
                if (n.length === 0) return;
                const i = {
                        action: "write-live",
                        entry: n
                    },
                    a = this.model.get("textKey");
                a !== void 0 && (i.textKey = a, i.val = n), this.triggerMethod("client:message", i)
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
                n = Ze.without(t, e);
            return this.inputComponent.setValue(Ze.shuffle(n)[0]), !1
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
mt.View.extend({
    model: new at.Model({}),
    myViewOptions: ["width", "height", "sketchOptions"],
    template: Ze.template(`
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
        const a = new nh(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
mt.View.extend({
    appId: "legacymain",
    appTag: "legacymain",
    template: null,
    client: null,
    initialize(t) {
        this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new at.Model({});
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
        !n && e.indexOf("_") !== -1 && (n = t.state.split("_")[1]), n === "PostGame" || e === "Credits" || e === "GameOver" || e === "PostGame" || e === "DayEnd" || t.gameResults ? Pn.isInitialized ? Pn.show() : Pn.init(this.getOption("appTag")).then(() => {
            Pn.show()
        }) : Pn.hide(), t.platformId && Zt.setTag(`platform-${t.platformId}`)
    },
    async update() {
        return null
    },
    caughtError(t) {
        throw t
    },
    onAttach() {
        this.update().catch(this.caughtError), Ie(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
    },
    showTwitchBroadcasterDialog(t) {
        let e = `<div class='icon-${this.client.roles.broadcaster.platform}'>${this.client.roles.broadcaster.name}</div>`;
        e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), Ot.show("custom", {
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
        Vi.setAsViewed(0)
    },
    showScreen(t, e) {
        const n = Ie(t);
        return this.activeScreen && t === this.activeScreen || (this.activeScreen && (Ie(this.activeScreen).fadeOut("fast", () => {}), Ie(this.activeScreen).show(), Ie(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
            e && e()
        }), this.activeScreen = t, this.onResize()), !1
    },
    notify() {
        Ot.vibrate()
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), Ot.show("error", {
            titleText: "Disconnected",
            text: "Thanks for playing!",
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        Ot.show("error", {
            titleText: "Disconnected",
            text: "You have been disconnected.",
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
        if (Ot.show("toast", {
                text: e
            }), t.status === "connected") {
            const n = this.client.parseEntities();
            this.model.set(n)
        }
    },
    onResize() {
        const t = Ie("#player").outerHeight(!0) || 0,
            e = Pn.isVisible ? Ie("#slide-in-banner").outerHeight(!0) : 0,
            n = Ie(window).width(),
            i = Ie(window).height() - t;
        Ie(`.${this.getOption("appTag")}-page`).css("height", i - e), Ie(`.${this.getOption("appTag")}-page`).attr("height", i - e), Ie(`.${this.getOption("appTag")}-page`).css("top", t), Ie(`.${this.getOption("appTag")}-page`).css("width", n), Ie(`.${this.getOption("appTag")}-page`).attr("width", n)
    }
});
const HC = `<div id="controller" class="state-controller controller-content">
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
    UC = Nn.extend({
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
    qC = mt.View.extend({
        tagName: "button",
        template: Ze.template('<span class="flex-item"></span>'),
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
    WC = mt.View.extend({
        className: "Lobby scrollable",
        template: Ze.template(HC),
        model: new UC,
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
                    return t && !Ze.isEmpty(t)
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
            this.titleComponent = new gi({
                model: new at.Model({})
            }), this.choicesListView = this.choicesListView || new fi, this.charactersListView = new mt.CollectionView({
                childView: qC,
                className: "charactersList",
                collection: new at.Collection
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
                        a = i && i.metadata ? nn.htmlUnescape(i.metadata.title) : null;
                    a && this.choicesListView.collection.add({
                        type: "text",
                        text: a
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
                e && e.error && this.lastUGCResultId !== e.id && (Ot.show("alert", {
                    text: e.error
                }), this.lastUGCResultId = e.id)
            }
            this.model.get("canChangeName") && this.choicesListView.collection.add({
                html: this.getOption("strings").button_changename,
                action: "changeName"
            }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
            const t = this.model.get("characters") || [];
            this.charactersListView.collection.set(Ze.map(t, e => {
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
            }), Vi.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = Ie(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const a = await Ot.show("custom", {
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
                        if (a.dismiss) return;
                        this.triggerMethod("client:message", {
                            name: a.value
                        })
                    } catch {} else if (i === "censorOptions") Ot.show("custom", {
                        target: this.el,
                        html: "",
                        confirmButtonText: this.model.get("strings").button_cancel,
                        customClass: {
                            popup: "censorOptionsModal",
                            confirmButton: "cancelButton"
                        },
                        didOpen() {
                            const a = new fi({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new at.Collection
                                }),
                                f = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(m => ({
                                    action: "censorConfirm",
                                    html: m.name,
                                    key: m.id
                                }))];
                            a.collection.set(f), a.render(), e.listenTo(a, "childview:button:censorConfirm", e.censorPlayer)
                        }
                    });
                    else if (i === "ugc-unload") this.triggerMethod("client:message", {
                clearContentId: !0
            });
            else if (i === "ugc-report") {
                const a = "http://support.jackboxgames.com/",
                    f = this.model.get("formattedActiveContentId");
                window.open(`${a}?episodeID=${f}`, "_blank")
            } else i === "ugc-view-author" ? this.triggerMethod("client:message", {
                viewAuthor: !0
            }) : i === "ugc" ? Ot.show("custom", {
                target: this.el,
                html: "",
                showConfirmButton: !1,
                customClass: {
                    popup: "episodesModal"
                },
                background: e.model.get("playerInfo") && e.model.get("playerInfo").bgColor ? e.model.get("playerInfo").bgColor : null,
                padding: "10px 5px",
                didOpen: () => {
                    const a = new fi({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new at.Collection([])
                    });
                    a.collection.add({
                        html: this.model.get("strings").vip_episodes_back || "Back",
                        action: "back",
                        className: "backButton"
                    }), a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_load || "Load an episode by id:",
                        className: "header"
                    }), a.collection.add({
                        type: "input",
                        preventAutosize: !0,
                        placeholder: "???-????",
                        inlineSubmit: !0,
                        inlineSubmitText: this.model.get("strings").vip_episodes_submit || "SUBMIT",
                        className: "lobbyUgcInput"
                    }), a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_warning || "Warning: user generated content is not rated",
                        className: "danger"
                    }), e.model.get("history").length && (a.collection.add({
                        type: "text",
                        html: this.model.get("strings").vip_episodes_select || "Or select an episode:",
                        className: "episodesListHeader"
                    }), a.collection.add(e.model.get("history").map(f => ({
                        action: "activateContentId",
                        html: f.remoteContentId ? `${f.metadata.title}<br/>${f.formattedRemoteContentId}` : `${f.metadata.title}`,
                        key: f.remoteContentId || f.localContentId
                    })))), a.render(), Ie(".lobbyUgcInput").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), e.listenTo(a, "childview:button:activateContentId", e.activateContentId), e.listenTo(a, "childview:button:back", () => {
                        Ot.close()
                    }), e.listenTo(a, "childview:input:submit", e.activateContentIdFromInput)
                }
            }) : this.triggerMethod("client:message", {
                action: i
            })
        },
        censorPlayer(t) {
            Ot.close(), this.triggerMethod("client:message", {
                action: "censor",
                id: t.get("key")
            })
        },
        activateContentId(t) {
            Ot.close(), this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.get("key")
            })
        },
        activateContentIdFromInput(t) {
            (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
            }), Ot.close())
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
    XC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    YC = Nn.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    Pa = mt.View.extend({
        className: "Logo",
        template: Ze.template(XC),
        model: new YC,
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : Ie("<div />").text(t.text).html()
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
            }), Vi.setAsViewed(0)
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
    KC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    JC = mt.View.extend({
        className: "playerTopBarView",
        template: Ze.template(KC),
        model: new at.Model,
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
    QC = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    ZC = Nn.extend({
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
    ih = mt.View.extend({
        className: "MakeSingleChoice scrollable",
        template: Ze.template(QC),
        model: new ZC,
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
                    return t ? t.html ? t.html : Ie("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : Ie("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new gi({
                model: new at.Model
            }), this.choicesList = this.choicesList || new fi({
                action: "choose",
                collection: new at.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && Ze.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
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
            this.update(), Ot.vibrate()
        },
        onChildviewChildviewButtonChoose(t) {
            const e = t.get("action") || "choose",
                n = t.get("index"),
                i = this.model.get("type");
            switch (this.choicesList.children.forEach(a => {
                    a.model.set("disabled", i === "single"), a.model.set("active", !1)
                }), i) {
                case "multiple":
                    if (this.model.get("toggle") ? t.set("selected", !t.get("selected")) : t.set("selected", !0), this.model.get("isAudience")) {
                        const a = [];
                        this.choicesList.children.forEach(f => {
                            f.model.get("selected") && a.push(f.getOption("index"))
                        }), this.selected = a
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
            const n = t.map(a => {
                const f = this.choicesList.children.find(m => m.model.get("index") === a);
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
function fc(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function Hn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? fc(Object(n), !0).forEach(function(i) {
            ex(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Us(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Us = function(e) {
        return typeof e
    } : Us = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Us(t)
}

function ex(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function si() {
    return si = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, si.apply(this, arguments)
}

function tx(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function nx(t, e) {
    if (t == null) return {};
    var n = tx(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var ix = "1.15.0";

function ri(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ri(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    fs = ri(/Edge/i),
    pc = ri(/firefox/i),
    ss = ri(/safari/i) && !ri(/chrome/i) && !ri(/android/i),
    rh = ri(/iP(ad|od|hone)/i),
    sh = ri(/chrome/i) && ri(/android/i),
    oh = {
        capture: !1,
        passive: !1
    };

function Et(t, e, n) {
    t.addEventListener(e, n, !oi && oh)
}

function bt(t, e, n) {
    t.removeEventListener(e, n, !oi && oh)
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

function rx(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function jn(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && no(t, e) : no(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = rx(t))
    }
    return null
}
var gc = /\s+/g;

function En(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(gc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(gc, " ")
        }
}

function nt(t, e, n) {
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
            var i = nt(t, "transform");
            i && i !== "none" && (n = i + " " + n)
        } while (!e && (t = t.parentNode));
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function ah(t, e, n) {
    if (t) {
        var i = t.getElementsByTagName(e),
            a = 0,
            f = i.length;
        if (n)
            for (; a < f; a++) n(i[a], a);
        return i
    }
    return []
}

function Gn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Yt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, m, b, k, A, M, V;
        if (t !== window && t.parentNode && t !== Gn() ? (f = t.getBoundingClientRect(), m = f.top, b = f.left, k = f.bottom, A = f.right, M = f.height, V = f.width) : (m = 0, b = 0, k = window.innerHeight, A = window.innerWidth, M = window.innerHeight, V = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !oi))
            do
                if (a && a.getBoundingClientRect && (nt(a, "transform") !== "none" || n && nt(a, "position") !== "static")) {
                    var U = a.getBoundingClientRect();
                    m -= U.top + parseInt(nt(a, "border-top-width")), b -= U.left + parseInt(nt(a, "border-left-width")), k = m + f.height, A = b + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ne = pr(a || t),
                K = ne && ne.a,
                re = ne && ne.d;
            ne && (m /= re, b /= K, V /= K, M /= re, k = m + M, A = b + V)
        }
        return {
            top: m,
            left: b,
            bottom: k,
            right: A,
            width: V,
            height: M
        }
    }
}

function mc(t, e, n) {
    for (var i = di(t, !0), a = Yt(t)[e]; i;) {
        var f = Yt(i)[n],
            m = void 0;
        if (n === "top" || n === "left" ? m = a >= f : m = a <= f, !m) return i;
        if (i === Gn()) break;
        i = di(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var a = 0, f = 0, m = t.children; f < m.length;) {
        if (m[f].style.display !== "none" && m[f] !== Qe.ghost && (i || m[f] !== Qe.dragged) && jn(m[f], n.draggable, t, !1)) {
            if (a === e) return m[f];
            a++
        }
        f++
    }
    return null
}

function fl(t, e) {
    for (var n = t.lastElementChild; n && (n === Qe.ghost || nt(n, "display") === "none" || e && !no(n, e));) n = n.previousElementSibling;
    return n || null
}

function On(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Qe.clone && (!e || no(t, e)) && n++;
    return n
}

function vc(t) {
    var e = 0,
        n = 0,
        i = Gn();
    if (t)
        do {
            var a = pr(t),
                f = a.a,
                m = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * m
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function sx(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function di(t, e) {
    if (!t || !t.getBoundingClientRect) return Gn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = nt(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return Gn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return Gn()
}

function ox(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function pa(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var os;

function lh(t, e) {
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

function ax() {
    clearTimeout(os), os = void 0
}

function ch(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function uh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var Sn = "Sortable" + new Date().getTime();

function lx() {
    var t = [],
        e;
    return {
        captureAnimationState: function() {
            if (t = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(a) {
                    if (!(nt(a, "display") === "none" || a === Qe.ghost)) {
                        t.push({
                            target: a,
                            rect: Yt(a)
                        });
                        var f = Hn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var m = pr(a, !0);
                            m && (f.top -= m.f, f.left -= m.e)
                        }
                        a.fromRect = f
                    }
                })
            }
        },
        addAnimationState: function(i) {
            t.push(i)
        },
        removeAnimationState: function(i) {
            t.splice(sx(t, {
                target: i
            }), 1)
        },
        animateAll: function(i) {
            var a = this;
            if (!this.options.animation) {
                clearTimeout(e), typeof i == "function" && i();
                return
            }
            var f = !1,
                m = 0;
            t.forEach(function(b) {
                var k = 0,
                    A = b.target,
                    M = A.fromRect,
                    V = Yt(A),
                    U = A.prevFromRect,
                    ne = A.prevToRect,
                    K = b.rect,
                    re = pr(A, !0);
                re && (V.top -= re.f, V.left -= re.e), A.toRect = V, A.thisAnimationDuration && pa(U, V) && !pa(M, V) && (K.top - V.top) / (K.left - V.left) === (M.top - V.top) / (M.left - V.left) && (k = ux(K, U, ne, a.options)), pa(V, M) || (A.prevFromRect = M, A.prevToRect = V, k || (k = a.options.animation), a.animate(A, K, V, k)), k && (f = !0, m = Math.max(m, k), clearTimeout(A.animationResetTimer), A.animationResetTimer = setTimeout(function() {
                    A.animationTime = 0, A.prevFromRect = null, A.fromRect = null, A.prevToRect = null, A.thisAnimationDuration = null
                }, k), A.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, m) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, m) {
            if (m) {
                nt(i, "transition", ""), nt(i, "transform", "");
                var b = pr(this.el),
                    k = b && b.a,
                    A = b && b.d,
                    M = (a.left - f.left) / (k || 1),
                    V = (a.top - f.top) / (A || 1);
                i.animatingX = !!M, i.animatingY = !!V, nt(i, "transform", "translate3d(" + M + "px," + V + "px,0)"), this.forRepaintDummy = cx(i), nt(i, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), nt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    nt(i, "transition", ""), nt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, m)
            }
        }
    }
}

function cx(t) {
    return t.offsetWidth
}

function ux(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var rr = [],
    ga = {
        initializeByDefault: !0
    },
    ps = {
        mount: function(e) {
            for (var n in ga) ga.hasOwnProperty(n) && !(n in e) && (e[n] = ga[n]);
            rr.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), rr.push(e)
        },
        pluginEvent: function(e, n, i) {
            var a = this;
            this.eventCanceled = !1, i.cancel = function() {
                a.eventCanceled = !0
            };
            var f = e + "Global";
            rr.forEach(function(m) {
                !n[m.pluginName] || (n[m.pluginName][f] && n[m.pluginName][f](Hn({
                    sortable: n
                }, i)), n.options[m.pluginName] && n[m.pluginName][e] && n[m.pluginName][e](Hn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            rr.forEach(function(b) {
                var k = b.pluginName;
                if (!(!e.options[k] && !b.initializeByDefault)) {
                    var A = new b(e, n, e.options);
                    A.sortable = e, A.options = e.options, e[k] = A, si(i, A.defaults)
                }
            });
            for (var f in e.options)
                if (!!e.options.hasOwnProperty(f)) {
                    var m = this.modifyOption(e, f, e.options[f]);
                    typeof m < "u" && (e.options[f] = m)
                }
        },
        getEventProperties: function(e, n) {
            var i = {};
            return rr.forEach(function(a) {
                typeof a.eventProperties == "function" && si(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return rr.forEach(function(f) {
                !e[f.pluginName] || f.optionListeners && typeof f.optionListeners[n] == "function" && (a = f.optionListeners[n].call(e[f.pluginName], i))
            }), a
        }
    };

function hx(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        f = t.cloneEl,
        m = t.toEl,
        b = t.fromEl,
        k = t.oldIndex,
        A = t.newIndex,
        M = t.oldDraggableIndex,
        V = t.newDraggableIndex,
        U = t.originalEvent,
        ne = t.putSortable,
        K = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var re, v = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = m || n, re.from = b || n, re.item = a || n, re.clone = f, re.oldIndex = k, re.newIndex = A, re.oldDraggableIndex = M, re.newDraggableIndex = V, re.originalEvent = U, re.pullMode = ne ? ne.lastPutMode : void 0;
        var W = Hn(Hn({}, K), ps.getEventProperties(i, e));
        for (var ae in W) re[ae] = W[ae];
        n && n.dispatchEvent(re), v[P] && v[P].call(e, re)
    }
}
var dx = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = nx(i, dx);
        ps.pluginEvent.bind(Qe)(e, n, Hn({
            dragEl: Re,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Mi,
            lastDownEl: qs,
            cloneEl: Vt,
            cloneHidden: ui,
            dragStarted: Qr,
            putSortable: en,
            activeSortable: Qe.active,
            originalEvent: a,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: _n,
            newDraggableIndex: ci,
            hideGhostForTarget: ph,
            unhideGhostForTarget: gh,
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
                    originalEvent: a
                })
            }
        }, f))
    };

function gn(t) {
    hx(Hn({
        putSortable: en,
        cloneEl: Vt,
        targetEl: Re,
        rootEl: Pt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: _n,
        newDraggableIndex: ci
    }, t))
}
var Re, $t, ut, Pt, Mi, qs, Vt, ui, cr, _n, as, ci, $s, en, lr = !1,
    io = !1,
    ro = [],
    Oi, Ln, ma, va, yc, wc, Qr, sr, ls, cs = !1,
    Fs = !1,
    Ws, ln, ya = [],
    Na = !1,
    so = [],
    bo = typeof document < "u",
    js = rh,
    bc = fs || oi ? "cssFloat" : "float",
    fx = bo && !sh && !rh && "draggable" in document.createElement("div"),
    hh = function() {
        if (!!bo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    dh = function(e, n) {
        var i = nt(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = yr(e, 0, n),
            m = yr(e, 1, n),
            b = f && nt(f),
            k = m && nt(m),
            A = b && parseInt(b.marginLeft) + parseInt(b.marginRight) + Yt(f).width,
            M = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Yt(m).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && b.float && b.float !== "none") {
            var V = b.float === "left" ? "left" : "right";
            return m && (k.clear === "both" || k.clear === V) ? "vertical" : "horizontal"
        }
        return f && (b.display === "block" || b.display === "flex" || b.display === "table" || b.display === "grid" || A >= a && i[bc] === "none" || m && i[bc] === "none" && A + M > a) ? "vertical" : "horizontal"
    },
    px = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            m = i ? e.width : e.height,
            b = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            A = i ? n.width : n.height;
        return a === b || f === k || a + m / 2 === b + A / 2
    },
    gx = function(e, n) {
        var i;
        return ro.some(function(a) {
            var f = a[Sn].options.emptyInsertThreshold;
            if (!(!f || fl(a))) {
                var m = Yt(a),
                    b = e >= m.left - f && e <= m.right + f,
                    k = n >= m.top - f && n <= m.bottom + f;
                if (b && k) return i = a
            }
        }), i
    },
    fh = function(e) {
        function n(f, m) {
            return function(b, k, A, M) {
                var V = b.options.group.name && k.options.group.name && b.options.group.name === k.options.group.name;
                if (f == null && (m || V)) return !0;
                if (f == null || f === !1) return !1;
                if (m && f === "clone") return f;
                if (typeof f == "function") return n(f(b, k, A, M), m)(b, k, A, M);
                var U = (m ? b : k).options.group.name;
                return f === !0 || typeof f == "string" && f === U || f.join && f.indexOf(U) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Us(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    ph = function() {
        !hh && ut && nt(ut, "display", "none")
    },
    gh = function() {
        !hh && ut && nt(ut, "display", "")
    };
bo && !sh && document.addEventListener("click", function(t) {
    if (io) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), io = !1, !1
}, !0);
var Ri = function(e) {
        if (Re) {
            e = e.touches ? e.touches[0] : e;
            var n = gx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Sn]._onDragOver(i)
            }
        }
    },
    mx = function(e) {
        Re && Re.parentNode[Sn]._isOutsideThisEl(e.target)
    };

function Qe(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = si({}, e), t[Sn] = this;
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
            return dh(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(m, b) {
            m.setData("Text", b.textContent)
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
    fh(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : fx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Et(t, "pointerdown", this._onTapStart) : (Et(t, "mousedown", this._onTapStart), Et(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Et(t, "dragover", this), Et(t, "dragenter", this)), ro.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), si(this, lx())
}
Qe.prototype = {
    constructor: Qe,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (sr = null)
    },
    _getDirection: function(e, n) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Re) : this.options.direction
    },
    _onTapStart: function(e) {
        if (!!e.cancelable) {
            var n = this,
                i = this.el,
                a = this.options,
                f = a.preventOnFilter,
                m = e.type,
                b = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (b || e).target,
                A = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                M = a.filter;
            if (_x(i), !Re && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || a.disabled) && !A.isContentEditable && !(!this.nativeDraggable && ss && k && k.tagName.toUpperCase() === "SELECT") && (k = jn(k, a.draggable, i, !1), !(k && k.animated) && qs !== k)) {
                if (cr = On(k), as = On(k, a.draggable), typeof M == "function") {
                    if (M.call(this, e, k, this)) {
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
                } else if (M && (M = M.split(",").some(function(V) {
                        if (V = jn(A, V.trim(), i, !1), V) return gn({
                            sortable: n,
                            rootEl: V,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), !0
                    }), M)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !jn(A, a.handle, i, !1) || this._prepareDragStart(e, b, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            f = a.el,
            m = a.options,
            b = f.ownerDocument,
            k;
        if (i && !Re && i.parentNode === f) {
            var A = Yt(i);
            if (Pt = f, Re = i, $t = Re.parentNode, Mi = Re.nextSibling, qs = i, $s = m.group, Qe.dragged = Re, Oi = {
                    target: Re,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, yc = Oi.clientX - A.left, wc = Oi.clientY - A.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Re.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", a, {
                            evt: e
                        }), Qe.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !pc && a.nativeDraggable && (Re.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Re, m.chosenClass, !0)
                }, m.ignore.split(",").forEach(function(M) {
                    ah(Re, M.trim(), wa)
                }), Et(b, "dragover", Ri), Et(b, "mousemove", Ri), Et(b, "touchmove", Ri), Et(b, "mouseup", a._onDrop), Et(b, "touchend", a._onDrop), Et(b, "touchcancel", a._onDrop), pc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Re.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), m.delay && (!m.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                Et(b, "mouseup", a._disableDelayedDrag), Et(b, "touchend", a._disableDelayedDrag), Et(b, "touchcancel", a._disableDelayedDrag), Et(b, "mousemove", a._delayedDragTouchMoveHandler), Et(b, "touchmove", a._delayedDragTouchMoveHandler), m.supportPointer && Et(b, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, m.delay)
            } else k()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Re && wa(Re), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._disableDelayedDrag), bt(e, "touchend", this._disableDelayedDrag), bt(e, "touchcancel", this._disableDelayedDrag), bt(e, "mousemove", this._delayedDragTouchMoveHandler), bt(e, "touchmove", this._delayedDragTouchMoveHandler), bt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Et(document, "pointermove", this._onTouchMove) : n ? Et(document, "touchmove", this._onTouchMove) : Et(document, "mousemove", this._onTouchMove) : (Et(Re, "dragend", this), Et(Pt, "dragstart", this._onDragStart));
        try {
            document.selection ? Xs(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (lr = !1, Pt && Re) {
            wn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && Et(document, "dragover", mx);
            var i = this.options;
            !e && En(Re, i.dragClass, !1), En(Re, i.ghostClass, !0), Qe.active = this, e && this._appendGhost(), gn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Ln) {
            this._lastX = Ln.clientX, this._lastY = Ln.clientY, ph();
            for (var e = document.elementFromPoint(Ln.clientX, Ln.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Ln.clientX, Ln.clientY), e !== n);) n = e;
            if (Re.parentNode[Sn]._isOutsideThisEl(e), n)
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
            gh()
        }
    },
    _onTouchMove: function(e) {
        if (Oi) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                m = ut && pr(ut, !0),
                b = ut && m && m.a,
                k = ut && m && m.d,
                A = js && ln && vc(ln),
                M = (f.clientX - Oi.clientX + a.x) / (b || 1) + (A ? A[0] - ya[0] : 0) / (b || 1),
                V = (f.clientY - Oi.clientY + a.y) / (k || 1) + (A ? A[1] - ya[1] : 0) / (k || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                m ? (m.e += M - (ma || 0), m.f += V - (va || 0)) : m = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: M,
                    f: V
                };
                var U = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
                nt(ut, "webkitTransform", U), nt(ut, "mozTransform", U), nt(ut, "msTransform", U), nt(ut, "transform", U), ma = M, va = V, Ln = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Yt(Re, !0, js, !0, e),
                i = this.options;
            if (js) {
                for (ln = e; nt(ln, "position") === "static" && nt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = Gn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = Gn(), ya = vc(ln)
            }
            ut = Re.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), nt(ut, "transition", ""), nt(ut, "transform", ""), nt(ut, "box-sizing", "border-box"), nt(ut, "margin", 0), nt(ut, "top", n.top), nt(ut, "left", n.left), nt(ut, "width", n.width), nt(ut, "height", n.height), nt(ut, "opacity", "0.8"), nt(ut, "position", js ? "absolute" : "fixed"), nt(ut, "zIndex", "100000"), nt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), nt(ut, "transform-origin", yc / parseInt(ut.style.width) * 100 + "% " + wc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            a = e.dataTransfer,
            f = i.options;
        if (wn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        wn("setupClone", this), Qe.eventCanceled || (Vt = uh(Re), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), En(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = Xs(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Vt, Re), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Re, f.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (bt(document, "mouseup", i._onDrop), bt(document, "touchend", i._onDrop), bt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Re)), Et(document, "drop", i), nt(Re, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Xs(i._dragStarted.bind(i, n, e)), Et(document, "selectstart", i), Qr = !0, ss && nt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, m, b = this.options,
            k = b.group,
            A = Qe.active,
            M = $s === k,
            V = b.sort,
            U = en || A,
            ne, K = this,
            re = !1;
        if (Na) return;

        function v(ye, ue) {
            wn(ye, K, Hn({
                evt: e,
                isOwner: M,
                axis: ne ? "vertical" : "horizontal",
                revert: m,
                dragRect: a,
                targetRect: f,
                canSort: V,
                fromSortable: U,
                target: i,
                completed: W,
                onMove: function(ke, $e) {
                    return zs(Pt, n, Re, a, ke, Yt(ke), e, $e)
                },
                changed: ae
            }, ue))
        }

        function P() {
            v("dragOverAnimationCapture"), K.captureAnimationState(), K !== U && U.captureAnimationState()
        }

        function W(ye) {
            return v("dragOverCompleted", {
                insertion: ye
            }), ye && (M ? A._hideClone() : A._showClone(K), K !== U && (En(Re, en ? en.options.ghostClass : A.options.ghostClass, !1), En(Re, b.ghostClass, !0)), en !== K && K !== Qe.active ? en = K : K === Qe.active && en && (en = null), U === K && (K._ignoreWhileAnimating = i), K.animateAll(function() {
                v("dragOverAnimationComplete"), K._ignoreWhileAnimating = null
            }), K !== U && (U.animateAll(), U._ignoreWhileAnimating = null)), (i === Re && !Re.animated || i === n && !i.animated) && (sr = null), !b.dragoverBubble && !e.rootEl && i !== document && (Re.parentNode[Sn]._isOutsideThisEl(e.target), !ye && Ri(e)), !b.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            _n = On(Re), ci = On(Re, b.draggable), gn({
                sortable: K,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = jn(i, b.draggable, n, !0), v("dragOver"), Qe.eventCanceled) return re;
        if (Re.contains(e.target) || i.animated && i.animatingX && i.animatingY || K._ignoreWhileAnimating === i) return W(!1);
        if (io = !1, A && !b.disabled && (M ? V || (m = $t !== Pt) : en === this || (this.lastPutMode = $s.checkPull(this, A, Re, e)) && k.checkPut(this, A, Re, e))) {
            if (ne = this._getDirection(e, i) === "vertical", a = Yt(Re), v("dragOverValid"), Qe.eventCanceled) return re;
            if (m) return $t = Pt, P(), this._hideClone(), v("revert"), Qe.eventCanceled || (Mi ? Pt.insertBefore(Re, Mi) : Pt.appendChild(Re)), W(!0);
            var se = fl(n, b.draggable);
            if (!se || bx(e, ne, this) && !se.animated) {
                if (se === Re) return W(!1);
                if (se && n === e.target && (i = se), i && (f = Yt(i)), zs(Pt, n, Re, a, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Re, se.nextSibling) : n.appendChild(Re), $t = n, ae(), W(!0)
            } else if (se && wx(e, ne, this)) {
                var ve = yr(n, 0, b, !0);
                if (ve === Re) return W(!1);
                if (i = ve, f = Yt(i), zs(Pt, n, Re, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Re, ve), $t = n, ae(), W(!0)
            } else if (i.parentNode === n) {
                f = Yt(i);
                var d = 0,
                    Ee, Ae = Re.parentNode !== n,
                    Pe = !px(Re.animated && Re.toRect || a, i.animated && i.toRect || f, ne),
                    lt = ne ? "top" : "left",
                    Be = mc(i, "top", "top") || mc(Re, "top", "top"),
                    J = Be ? Be.scrollTop : void 0;
                sr !== i && (Ee = f[lt], cs = !1, Fs = !Pe && b.invertSwap || Ae), d = Cx(e, i, f, ne, Pe ? 1 : b.swapThreshold, b.invertedSwapThreshold == null ? b.swapThreshold : b.invertedSwapThreshold, Fs, sr === i);
                var je;
                if (d !== 0) {
                    var H = On(Re);
                    do H -= d, je = $t.children[H]; while (je && (nt(je, "display") === "none" || je === ut))
                }
                if (d === 0 || je === i) return W(!1);
                sr = i, ls = d;
                var oe = i.nextElementSibling,
                    Te = !1;
                Te = d === 1;
                var we = zs(Pt, n, Re, a, i, f, e, Te);
                if (we !== !1) return (we === 1 || we === -1) && (Te = we === 1), Na = !0, setTimeout(yx, 30), P(), Te && !oe ? n.appendChild(Re) : i.parentNode.insertBefore(Re, Te ? oe : i), Be && ch(Be, 0, J - Be.scrollTop), $t = Re.parentNode, Ee !== void 0 && !Fs && (Ws = Math.abs(Ee - Yt(i)[lt])), ae(), W(!0)
            }
            if (n.contains(Re)) return W(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        bt(document, "mousemove", this._onTouchMove), bt(document, "touchmove", this._onTouchMove), bt(document, "pointermove", this._onTouchMove), bt(document, "dragover", Ri), bt(document, "mousemove", Ri), bt(document, "touchmove", Ri)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._onDrop), bt(e, "touchend", this._onDrop), bt(e, "pointerup", this._onDrop), bt(e, "touchcancel", this._onDrop), bt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (_n = On(Re), ci = On(Re, i.draggable), wn("drop", this, {
                evt: e
            }), $t = Re && Re.parentNode, _n = On(Re), ci = On(Re, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, Fs = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Va(this.cloneId), Va(this._dragStartId), this.nativeDraggable && (bt(document, "drop", this), bt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && nt(document.body, "user-select", ""), nt(Re, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || en && en.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Re && (this.nativeDraggable && bt(Re, "dragend", this), wa(Re), Re.style["will-change"] = "", Qr && !lr && En(Re, en ? en.options.ghostClass : this.options.ghostClass, !1), En(Re, this.options.chosenClass, !1), gn({
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
        wn("nulling", this), Pt = Re = $t = ut = Mi = Vt = qs = ui = Oi = Ln = Qr = _n = ci = cr = as = sr = ls = en = $s = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
            e.checked = !0
        }), so.length = ma = va = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Re && (this._onDragOver(e), vx(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, m = this.options; a < f; a++) n = i[a], jn(n, m.draggable, this.el, !1) && e.push(n.getAttribute(m.dataIdAttr) || Ex(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, m) {
            var b = a.children[m];
            jn(b, this.options.draggable, a, !1) && (i[f] = b)
        }, this), n && this.captureAnimationState(), e.forEach(function(f) {
            i[f] && (a.removeChild(i[f]), a.appendChild(i[f]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return jn(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var a = ps.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && fh(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[Sn] = null, bt(e, "mousedown", this._onTapStart), bt(e, "touchstart", this._onTapStart), bt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (bt(e, "dragover", this), bt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ui) {
            if (wn("hideClone", this), Qe.eventCanceled) return;
            nt(Vt, "display", "none"), this.options.removeCloneOnHide && Vt.parentNode && Vt.parentNode.removeChild(Vt), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (wn("showClone", this), Qe.eventCanceled) return;
            Re.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Vt, Re) : Mi ? Pt.insertBefore(Vt, Mi) : Pt.appendChild(Vt), this.options.group.revertClone && this.animate(Re, Vt), nt(Vt, "display", ""), ui = !1
        }
    }
};

function vx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, a, f, m, b) {
    var k, A = t[Sn],
        M = A.options.onMove,
        V;
    return window.CustomEvent && !oi && !fs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = f || Yt(e), k.willInsertAfter = b, k.originalEvent = m, t.dispatchEvent(k), M && (V = M.call(A, k, m)), V
}

function wa(t) {
    t.draggable = !1
}

function yx() {
    Na = !1
}

function wx(t, e, n) {
    var i = Yt(yr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function bx(t, e, n) {
    var i = Yt(fl(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function Cx(t, e, n, i, a, f, m, b) {
    var k = i ? t.clientY : t.clientX,
        A = i ? n.height : n.width,
        M = i ? n.top : n.left,
        V = i ? n.bottom : n.right,
        U = !1;
    if (!m) {
        if (b && Ws < A * a) {
            if (!cs && (ls === 1 ? k > M + A * f / 2 : k < V - A * f / 2) && (cs = !0), cs) U = !0;
            else if (ls === 1 ? k < M + Ws : k > V - Ws) return -ls
        } else if (k > M + A * (1 - a) / 2 && k < V - A * (1 - a) / 2) return xx(e)
    }
    return U = U || m, U && (k < M + A * f / 2 || k > V - A * f / 2) ? k > M + A / 2 ? 1 : -1 : 0
}

function xx(t) {
    return On(Re) < On(t) ? 1 : -1
}

function Ex(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function _x(t) {
    so.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && so.push(i)
    }
}

function Xs(t) {
    return setTimeout(t, 0)
}

function Va(t) {
    return clearTimeout(t)
}
bo && Et(document, "touchmove", function(t) {
    (Qe.active || lr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: Et,
    off: bt,
    css: nt,
    find: ah,
    is: function(e, n) {
        return !!jn(e, n, e, !1)
    },
    extend: ox,
    throttle: lh,
    closest: jn,
    toggleClass: En,
    clone: uh,
    index: On,
    nextTick: Xs,
    cancelNextTick: Va,
    detectDirection: dh,
    getChild: yr
};
Qe.get = function(t) {
    return t[Sn]
};
Qe.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (Qe.utils = Hn(Hn({}, Qe.utils), i.utils)), ps.mount(i)
    })
};
Qe.create = function(t, e) {
    return new Qe(t, e)
};
Qe.version = ix;
var qt = [],
    Zr, Ba, $a = !1,
    ba, Ca, oo, es;

function Sx() {
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
            this.sortable.nativeDraggable ? Et(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Et(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? Et(document, "touchmove", this._handleFallbackAutoScroll) : Et(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(n) {
            var i = n.originalEvent;
            !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i)
        },
        drop: function() {
            this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : (bt(document, "pointermove", this._handleFallbackAutoScroll), bt(document, "touchmove", this._handleFallbackAutoScroll), bt(document, "mousemove", this._handleFallbackAutoScroll)), Cc(), Ys(), ax()
        },
        nulling: function() {
            oo = Ba = Zr = $a = es = ba = Ca = null, qt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                m = (n.touches ? n.touches[0] : n).clientY,
                b = document.elementFromPoint(f, m);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                xa(n, this.options, b, i);
                var k = di(b, !0);
                $a && (!es || f !== ba || m !== Ca) && (es && Cc(), es = setInterval(function() {
                    var A = di(document.elementFromPoint(f, m), !0);
                    A !== k && (k = A, Ys()), xa(n, a.options, A, i)
                }, 10), ba = f, Ca = m)
            } else {
                if (!this.options.bubbleScroll || di(b, !0) === Gn()) {
                    Ys();
                    return
                }
                xa(n, this.options, di(b, !1), !1)
            }
        }
    }, si(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Ys() {
    qt.forEach(function(t) {
        clearInterval(t.pid)
    }), qt = []
}

function Cc() {
    clearInterval(es)
}
var xa = lh(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                m = e.scrollSensitivity,
                b = e.scrollSpeed,
                k = Gn(),
                A = !1,
                M;
            Ba !== n && (Ba = n, Ys(), Zr = e.scroll, M = e.scrollFn, Zr === !0 && (Zr = di(n, !0)));
            var V = 0,
                U = Zr;
            do {
                var ne = U,
                    K = Yt(ne),
                    re = K.top,
                    v = K.bottom,
                    P = K.left,
                    W = K.right,
                    ae = K.width,
                    se = K.height,
                    ve = void 0,
                    d = void 0,
                    Ee = ne.scrollWidth,
                    Ae = ne.scrollHeight,
                    Pe = nt(ne),
                    lt = ne.scrollLeft,
                    Be = ne.scrollTop;
                ne === k ? (ve = ae < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), d = se < Ae && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ve = ae < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), d = se < Ae && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var J = ve && (Math.abs(W - a) <= m && lt + ae < Ee) - (Math.abs(P - a) <= m && !!lt),
                    je = d && (Math.abs(v - f) <= m && Be + se < Ae) - (Math.abs(re - f) <= m && !!Be);
                if (!qt[V])
                    for (var H = 0; H <= V; H++) qt[H] || (qt[H] = {});
                (qt[V].vx != J || qt[V].vy != je || qt[V].el !== ne) && (qt[V].el = ne, qt[V].vx = J, qt[V].vy = je, clearInterval(qt[V].pid), (J != 0 || je != 0) && (A = !0, qt[V].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var oe = qt[this.layer].vy ? qt[this.layer].vy * b : 0,
                        Te = qt[this.layer].vx ? qt[this.layer].vx * b : 0;
                    typeof M == "function" && M.call(Qe.dragged.parentNode[Sn], Te, oe, t, oo, qt[this.layer].el) !== "continue" || ch(qt[this.layer].el, Te, oe)
                }.bind({
                    layer: V
                }), 24))), V++
            } while (e.bubbleScroll && U !== k && (U = di(U, !1)));
            $a = A
        }
    }, 30),
    mh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            m = e.dispatchSortableEvent,
            b = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var A = i || f;
            b();
            var M = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                V = document.elementFromPoint(M.clientX, M.clientY);
            k(), A && !A.el.contains(V) && (m("spill"), this.onSpill({
                dragEl: a,
                putSortable: i
            }))
        }
    };

function pl() {}
pl.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var a = yr(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: mh
};
si(pl, {
    pluginName: "revertOnSpill"
});

function gl() {}
gl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
    },
    drop: mh
};
si(gl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new Sx);
Qe.mount(gl, pl);
const kx = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Tx = Nn.extend({
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
    Ax = mt.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: Ze.template("<div class='text'></div>"),
        model: new at.Model({}),
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
    xc = mt.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: Ax,
        collection: new at.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    Ox = mt.View.extend({
        className: "SorterView",
        template: Ze.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new at.Model({
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
            this.rankedCollectionView = this.rankedCollectionView || new xc({
                collection: new at.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new xc({
                className: "sortable-collection unranked",
                collection: new at.Collection([])
            }), this.lockInView = this.lockInView || new Qu({
                block: !1,
                model: new at.Model({
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
            const a = i[e];
            return i.splice(e, 1), i.splice(n, 0, a), i
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
    Rx = mt.View.extend({
        className: "Sortable scrollable",
        template: Ze.template(kx),
        model: new Tx,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new gi({
                model: new at.Model
            }), this.sorterView = this.sorterView || new Ox({}), this.listenTo(this.model, "change", this.update, this)
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
    Ix = `<div id="controller" class="state-controller controller-content">
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
    Mx = Nn.extend({
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
    Dx = mt.View.extend({
        className: "UGC scrollable",
        template: Ze.template(Ix),
        model: new Mx,
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
                        a = n.length;
                    let f = `${t}/${e}`;
                    return a < t && (f += ` (${t-a} ${i})`), f
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.promptComponent = this.promptComponent || new gi({
                model: new at.Model
            }), this.episodesList = this.episodesList || new fi({
                action: "load",
                collection: new at.Collection
            }), this.inputComponent = this.inputComponent || new to({
                model: new at.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new to({
                model: new at.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new fi({
                action: "remove",
                collection: new at.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("episodes", this.episodesList), this.showChildView("input", this.inputComponent), this.showChildView("titleInput", this.titleInputComponent), this.showChildView("prompts", this.promptsList)
        },
        onAttach() {
            this.stickit(), this.update(), Ot.vibrate()
        },
        update() {
            const t = this.model.get("validActions").length === 0 ? this.model.get("noActionsText") : this.model.get("text");
            this.promptComponent.model.set("text", t);
            const e = this.model.get("episodes").map(n => {
                const i = nn.htmlUnescape(n.metadata.title);
                let a = nn.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = Ze.extend({}, n);
                i.text = nn.htmlUnescape(n.text);
                let a = n.author !== this.client.userId ? "other" : "self";
                return n.className && (a += ` ${n.className}`), {
                    ...i,
                    className: a
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
            const e = Ie(t.currentTarget).data("action");
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
    Lx = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    Px = mt.View.extend({
        className: "RadialView",
        template: Ze.template(Lx),
        model: new at.Model({
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
                        const a = n * 207,
                            f = 207 * (1 - n);
                        return e += `stroke-dasharray:${a} ${f};`, e += `transform:rotate(${-360*n-90}deg);`, e
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
            const t = Ze.extend({}, this.model.get("vector"));
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
            const a = this.getDistance(n);
            if (a > 32) {
                const f = 32 / a;
                n.x *= f, n.y *= f
            }
            return n
        }
    }),
    Nx = `<div id="status-bar" class="health text">\r
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
    Vx = Nn.extend({
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
    Bx = mt.View.extend({
        model: new Vx,
        template: Ze.template(Nx),
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
                a = this.radialComponent.model.get("angle"),
                f = Math.floor(a / 10);
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
            this.client = t.client, this.radialComponent = new Px({
                model: new at.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = Ze.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Ie(window).on("mousemove", this.move.bind(this)), Ie(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), Ie(window).off("mousemove"), Ie(window).off("mouseup")
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
                }), this.throttledUpdate = Ze.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
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
                    Ot.vibrate(n)
                }
                this.notified = !0
            }
        },
        onRender() {
            this.showChildView("radial", this.radialComponent), this.stickit()
        },
        onAttach() {
            this.update(), this.onResize(), Ot.vibrate()
        },
        onResize() {
            const t = Ie(".radial"),
                e = Ie("#status-bar").outerHeight() + Ie(".playerTopBar").outerHeight() + Ie("#control-panel").outerHeight() + 10,
                n = Ie(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
        }
    }),
    $x = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
const Fx = mt.View.extend({
    client: null,
    template: Ze.template($x),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new JC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new at.Model({});
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
                return this.setLayout(FC);
            case "EnterSingleText":
                return this.setLayout(GC);
            case "Lobby":
                return this.setLayout(WC);
            case "Logo":
                return this.setLayout(Pa);
            case "MakeSingleChoice":
                return this.setLayout(ih);
            case "Shoot":
                return this.setLayout(Bx);
            case "Sortable":
                return this.setLayout(Rx);
            case "Camera":
                return this.setLayout(OC);
            case "UGC":
                return this.setLayout(Dx);
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
        t && !Ze.isEmpty(t) ? i = {
            ...Ze.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...Ze.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...Ze.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && Zt.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: Ze.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Vi.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), Ie("#textDescriptions").append(Ie("<p />").text(e.text)))
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
            </div>`, this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), Ot.show("custom", {
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
        const t = Ie(window).width(),
            e = Ie(window).height();
        Ie(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), Ot.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        Ot.show("error", {
            titleText: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Bs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
        if (Ot.show("toast", {
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
                if (e instanceof ii.EcastEntityNotFound || e instanceof ii.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                else if (e instanceof ii.EcastFilterError) this.currentLayout.onTextFilterError && this.currentLayout.onTextFilterError(e);
                else throw console.error(`Unhandled error updating text entity ${t.textKey}`), e
            } else if (t.objectKey) try {
                await this.client.updateObject(t.objectKey, t.val)
            } catch (e) {
                if (e instanceof ii.EcastEntityNotFound || e instanceof ii.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                else if (e instanceof ii.EcastFilterError) this.currentLayout.onObjectFilterError && this.currentLayout.onObjectFilterError(e);
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
                        a = n.vote;
                    this.onChildviewClientCountGroup({
                        name: i,
                        vote: a
                    })
                }
                if (e === "comment") {
                    const i = this.currentLayout.model.get("textRingName"),
                        a = n.entry;
                    this.onChildviewClientTextRing({
                        name: i,
                        text: a
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
var vh = {
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
            a = e.EventEmitter;

        function f(k, A) {
            for (var M = k.length; M--;)
                if (k[M].listener === A) return M;
            return -1
        }

        function m(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(A) {
            var M = this._getEvents(),
                V, U;
            if (A instanceof RegExp) {
                V = {};
                for (U in M) M.hasOwnProperty(U) && A.test(U) && (V[U] = M[U])
            } else V = M[A] || (M[A] = []);
            return V
        }, i.flattenListeners = function(A) {
            var M = [],
                V;
            for (V = 0; V < A.length; V += 1) M.push(A[V].listener);
            return M
        }, i.getListenersAsObject = function(A) {
            var M = this.getListeners(A),
                V;
            return M instanceof Array && (V = {}, V[A] = M), V || M
        };

        function b(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? b(k.listener) : !1
        }
        i.addListener = function(A, M) {
            if (!b(M)) throw new TypeError("listener must be a function");
            var V = this.getListenersAsObject(A),
                U = typeof M == "object",
                ne;
            for (ne in V) V.hasOwnProperty(ne) && f(V[ne], M) === -1 && V[ne].push(U ? M : {
                listener: M,
                once: !1
            });
            return this
        }, i.on = m("addListener"), i.addOnceListener = function(A, M) {
            return this.addListener(A, {
                listener: M,
                once: !0
            })
        }, i.once = m("addOnceListener"), i.defineEvent = function(A) {
            return this.getListeners(A), this
        }, i.defineEvents = function(A) {
            for (var M = 0; M < A.length; M += 1) this.defineEvent(A[M]);
            return this
        }, i.removeListener = function(A, M) {
            var V = this.getListenersAsObject(A),
                U, ne;
            for (ne in V) V.hasOwnProperty(ne) && (U = f(V[ne], M), U !== -1 && V[ne].splice(U, 1));
            return this
        }, i.off = m("removeListener"), i.addListeners = function(A, M) {
            return this.manipulateListeners(!1, A, M)
        }, i.removeListeners = function(A, M) {
            return this.manipulateListeners(!0, A, M)
        }, i.manipulateListeners = function(A, M, V) {
            var U, ne, K = A ? this.removeListener : this.addListener,
                re = A ? this.removeListeners : this.addListeners;
            if (typeof M == "object" && !(M instanceof RegExp))
                for (U in M) M.hasOwnProperty(U) && (ne = M[U]) && (typeof ne == "function" ? K.call(this, U, ne) : re.call(this, U, ne));
            else
                for (U = V.length; U--;) K.call(this, M, V[U]);
            return this
        }, i.removeEvent = function(A) {
            var M = typeof A,
                V = this._getEvents(),
                U;
            if (M === "string") delete V[A];
            else if (A instanceof RegExp)
                for (U in V) V.hasOwnProperty(U) && A.test(U) && delete V[U];
            else delete this._events;
            return this
        }, i.removeAllListeners = m("removeEvent"), i.emitEvent = function(A, M) {
            var V = this.getListenersAsObject(A),
                U, ne, K, re, v;
            for (re in V)
                if (V.hasOwnProperty(re))
                    for (U = V[re].slice(0), K = 0; K < U.length; K++) ne = U[K], ne.once === !0 && this.removeListener(A, ne.listener), v = ne.listener.apply(this, M || []), v === this._getOnceReturnValue() && this.removeListener(A, ne.listener);
            return this
        }, i.trigger = m("emitEvent"), i.emit = function(A) {
            var M = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(A, M)
        }, i.setOnceReturnValue = function(A) {
            return this._onceReturnValue = A, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = a, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : yt || {})
})(vh);
const jx = vh.exports;
class zx extends jx {
    constructor(n, i) {
        super();
        ot(this, "wsClient");
        ot(this, "name");
        ot(this, "id");
        ot(this, "userId");
        ot(this, "uuid");
        ot(this, "joinAs", "player");
        ot(this, "room");
        ot(this, "roles", {});
        ot(this, "code", null);
        ot(this, "host");
        ot(this, "onPlayerWelcome", n => {
            this.id = n.id, this.roles = n.profile ? n.profile.roles : {}, n.here && (this.host = Object.values(n.here).find(({
                roles: i
            }) => i.host)), this.emit("client:didJoinRoom", {
                appId: this.room.appId,
                appTag: this.room.appTag,
                id: n.id,
                reconnect: `${n.id}:${this.joinAs}:${n.secret}`
            })
        });
        ot(this, "parseEntities", () => {
            if (!this.wsClient) return {};
            const n = this.wsClient.entities,
                i = {};
            return Object.keys(n).forEach(a => {
                const f = n[a];
                a === "room" || a === "bc:room" || a === "roomBlob" ? (f instanceof Ii.TextEntity && (i.room = f.toBlob()), f instanceof Ii.ObjectEntity && (i.room = f.val)) : a === "player" || a === `player:${this.id}` || a === `bc:customer:${this.userId}` ? (f instanceof Ii.TextEntity && (i.player = f.toBlob()), f instanceof Ii.ObjectEntity && (i.player = f.val)) : a === "audiencePlayer" && (f instanceof Ii.TextEntity && (i.audiencePlayer = f.toBlob()), f instanceof Ii.ObjectEntity && (i.audiencePlayer = f.val))
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
        return Object.keys(this.roles).includes(n)
    }
    disconnect() {
        !this.wsClient || (this.wsClient.disconnect(), this.wsClient = null)
    }
    onText(n) {
        const i = n.key,
            a = n.text;
        let f = n.text;
        try {
            f = JSON.parse(f)
        } catch {
            ac(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const m = f;
        i === "room" ? this.emit("client:entityDidChange", i, m) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", m) : i === "bc:room" ? this.emit("client:entityDidChange", "room", m) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", m) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", m) : ac(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            a = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, a) : i === "player" ? this.emit("client:entityDidChange", "player", a) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", a) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, a) : i === "bc:room" ? this.emit("client:entityDidChange", "room", a) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", a) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", a) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onSocketClose(n) {
        n instanceof ii.EcastServerError || n.code === 1005 || n.code === 1e3 ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
    }
    onRoomExit(n) {
        this.emit("client:disconnected", n), this.disconnect()
    }
    onConnection(n) {
        this.emit("client:connection", n)
    }
    async send(n, i) {
        var a, f;
        if (!!this.isReady) try {
            if (n === "SendMessageToRoomOwner") {
                const m = (f = (a = this.host) == null ? void 0 : a.id) != null ? f : "1";
                await this.wsClient.mail(m, i)
            } else await this.wsClient.send(n, i)
        } catch (m) {
            console.error(m)
        }
    }
    sessionSend(n, i, a) {
        !this.isReady || (n === "vote" && this.incrementCountGroupCounter(i, `${a.vote}`), n === "comment" && this.pushTextRing(i, `${a.comment}`))
    }
    async updateText(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateText(n, i)
        } catch (a) {
            throw console.warn("Text update rejected.", a), a
        }
    }
    async updateObject(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.updateObject(n, i)
        } catch (a) {
            throw console.warn("Object update rejected.", a), a
        }
    }
    async incrementCountGroupCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementCountGroupCounter(n, `${i}`)
        } catch (a) {
            console.error(a)
        }
    }
    async incrementGCounter(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.incrementGCounter(n, i)
        } catch (a) {
            console.error(a)
        }
    }
    async pushTextRing(n, i) {
        if (!!this.isReady) try {
            await this.wsClient.pushTextRing(n, `${i}`)
        } catch (a) {
            console.error(a)
        }
    }
}
const Gx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(Ie)
})(function(t) {
    var e, n = navigator.userAgent,
        i = /iphone/i.test(n),
        a = /chrome/i.test(n),
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
        caret: function(m, b) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof m == "number" ? (b = typeof b == "number" ? b : m, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(m, b) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", b), k.moveStart("character", m), k.select())
            })) : (this[0].setSelectionRange ? (m = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), m = 0 - k.duplicate().moveStart("character", -1e5), b = m + k.text.length), {
                begin: m,
                end: b
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(m, b) {
            var k, A, M, V, U, ne, K, re;
            if (!m && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return b = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, b), A = t.mask.definitions, M = [], V = K = m.length, U = null, t.each(m.split(""), function(P, W) {
                W == "?" ? (K--, V = P) : A[W] ? (M.push(new RegExp(A[W])), U === null && (U = M.length - 1), V > P && (ne = M.length - 1)) : M.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (b.completed) {
                        for (var ye = U; ne >= ye; ye++)
                            if (M[ye] && oe[ye] === W(ye)) return;
                        b.completed.call(H)
                    }
                }

                function W(ye) {
                    return b.placeholder.charAt(ye < b.placeholder.length ? ye : 0)
                }

                function ae(ye) {
                    for (; ++ye < K && !M[ye];);
                    return ye
                }

                function se(ye) {
                    for (; --ye >= 0 && !M[ye];);
                    return ye
                }

                function ve(ye, ue) {
                    var _e, ke;
                    if (!(0 > ye)) {
                        for (_e = ye, ke = ae(ue); K > _e; _e++)
                            if (M[_e]) {
                                if (!(K > ke && M[_e].test(oe[ke]))) break;
                                oe[_e] = oe[ke], oe[ke] = W(ke), ke = ae(ke)
                            } J(), H.caret(Math.max(U, ye))
                    }
                }

                function d(ye) {
                    var ue, _e, ke, $e;
                    for (ue = ye, _e = W(ye); K > ue; ue++)
                        if (M[ue]) {
                            if (ke = ae(ue), $e = oe[ue], oe[ue] = _e, !(K > ke && M[ke].test($e))) break;
                            _e = $e
                        }
                }

                function Ee() {
                    var ye = H.val(),
                        ue = H.caret();
                    if (re && re.length && re.length > ye.length) {
                        for (je(!0); ue.begin > 0 && !M[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < U && !M[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    } else {
                        for (je(!0); ue.begin < K && !M[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    }
                    P()
                }

                function Ae() {
                    je(), H.val() != we && H.change()
                }

                function Pe(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode;
                        re = H.val(), $e === 8 || $e === 46 || i && $e === 127 ? (ue = H.caret(), _e = ue.begin, ke = ue.end, ke - _e === 0 && (_e = $e !== 46 ? se(_e) : ke = ae(_e - 1), ke = $e === 46 ? ae(ke) : ke), Be(_e, ke), ve(_e, ke - 1), ye.preventDefault()) : $e === 13 ? Ae.call(this, ye) : $e === 27 && (H.val(we), H.caret(0, je()), ye.preventDefault())
                    }
                }

                function lt(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode,
                            Ke = H.caret();
                        if (!(ye.ctrlKey || ye.altKey || ye.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Be(Ke.begin, Ke.end), ve(Ke.begin, Ke.end - 1)), ue = ae(Ke.begin - 1), K > ue && (_e = String.fromCharCode($e), M[ue].test(_e))) {
                                if (d(ue), oe[ue] = _e, J(), ke = ae(ue), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, H, ke)()
                                    };
                                    setTimeout(dt, 0)
                                } else H.caret(ke);
                                Ke.begin <= ne && P()
                            }
                            ye.preventDefault()
                        }
                    }
                }

                function Be(ye, ue) {
                    var _e;
                    for (_e = ye; ue > _e && K > _e; _e++) M[_e] && (oe[_e] = W(_e))
                }

                function J() {
                    H.val(oe.join(""))
                }

                function je(ye) {
                    var ue, _e, ke, $e = H.val(),
                        Ke = -1;
                    for (ue = 0, ke = 0; K > ue; ue++)
                        if (M[ue]) {
                            for (oe[ue] = W(ue); ke++ < $e.length;)
                                if (_e = $e.charAt(ke - 1), M[ue].test(_e)) {
                                    oe[ue] = _e, Ke = ue;
                                    break
                                } if (ke > $e.length) {
                                Be(ue + 1, K);
                                break
                            }
                        } else oe[ue] === $e.charAt(ke) && ke++, V > ue && (Ke = ue);
                    return ye ? J() : V > Ke + 1 ? b.autoclear || oe.join("") === Te ? (H.val() && H.val(""), Be(0, K)) : J() : (J(), H.val(H.val().substring(0, Ke + 1))), V ? ue : U
                }
                var H = t(this),
                    oe = t.map(m.split(""), function(ye, ue) {
                        return ye != "?" ? A[ye] ? W(ue) : ye : void 0
                    }),
                    Te = oe.join(""),
                    we = H.val();
                H.data(t.mask.dataName, function() {
                    return t.map(oe, function(ye, ue) {
                        return M[ue] && ye != W(ue) ? ye : null
                    }).join("")
                }), H.one("unmask", function() {
                    H.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!H.prop("readonly")) {
                        clearTimeout(e);
                        var ye;
                        we = H.val(), ye = je(), e = setTimeout(function() {
                            H.get(0) === document.activeElement && (J(), ye == m.replace("?", "").length ? H.caret(0, ye) : H.caret(ye))
                        }, 10)
                    }
                }).on("blur.mask", Ae).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    H.prop("readonly") || setTimeout(function() {
                        var ye = je(!0);
                        H.caret(ye), P()
                    }, 0)
                }), a && f && H.off("input.mask").on("input.mask", Ee), je()
            })
        }
    })
});
window.$ = Ie;
window.jQuery = Ie;
const Hx = mt.View.extend({
        className: "app-root",
        template: Ze.template(Gx),
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
    Ux = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Ii.WSClient(n), e.connect()),
            mount: n => {
                const i = new zx(e, n);
                let a = new mt.Application({
                    region: "#app",
                    onStart() {
                        const f = new Hx;
                        this.showView(f), f.showView(t.MainView, {
                            appId: n.room.appId,
                            appTag: n.room.appTag,
                            replayer: n.replayer,
                            client: i
                        })
                    }
                });
                return a.start(), () => {
                    a.destroy(), a = null
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
    qx = function(t, e, n) {
        this.element = t, this.isEnabled = !0, this.percentage = 50, this.widthMargin = e, this.heightDiffArray = n, this.elementAspectRatio = 1;
        const i = () => {
            let b = 0;
            n.forEach(V => {
                Ie(V).each(function() {
                    b += Ie(this).outerHeight(!0)
                })
            });
            let k = window.innerWidth - this.widthMargin,
                A = window.innerHeight - b;
            A < 100 && (A = 100, k = A * (window.innerWidth / window.innerHeight));
            const M = k / A;
            this.elementAspectRatio < M ? (Ie(this.element)[0].style.width = `${A/this.elementAspectRatio}px`, Ie(this.element)[0].style.height = `${A}px`) : (Ie(this.element)[0].style.width = `${k}px`, Ie(this.element)[0].style.height = `${k/this.elementAspectRatio}px`), window.scrollTo(0, 0)
        };
        window.onresize = i;
        const a = b => {
                if (b.type === "touchmove") b.preventDefault();
                else if (b.type === "touchend") {
                    this[b.type]();
                    return
                }
                const k = Ie(this.element)[0].getBoundingClientRect(),
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
                const k = Ie(this.element)[0].getBoundingClientRect(),
                    A = {
                        x: b.clientX - k.left,
                        y: b.clientY - k.top
                    };
                this[b.type](A)
            },
            m = {
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
                case m.left:
                case m.down:
                    this.setPercentage(this.percentage - 1), k = !0;
                    break;
                case m.right:
                case m.up:
                    this.setPercentage(this.percentage + 1), k = !0;
                    break;
                case m.pageDown:
                    this.setPercentage(this.percentage - 10), k = !0;
                    break;
                case m.pageUp:
                    this.setPercentage(this.percentage + 10), k = !0;
                    break;
                case m.home:
                    this.setPercentage(0), k = !0;
                    break;
                case m.end:
                    this.setPercentage(100), k = !0;
                    break
            }
            k && (b.preventDefault(), b.stopPropagation())
        }, document.addEventListener("touchend", a), this.element.on("touchstart", a), this.element.on("touchmove", a), this.element.on("mousedown", f), this.element.on("mousemove", f), document.addEventListener("mouseup", f), this.element.on("keydown", this.handleKeyDown.bind(this)), this.getPercentage = function() {
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
            const M = this.element.find("line.helper");
            M.attr("x2", k.x), M.attr("y2", k.y);
            const V = this.element.find("text.percent")[0];
            Ie(V).html(this.percentage);
            let U;
            try {
                U = this.element.getElementById("percent").getBBox().width
            } catch {
                U = 28.6
            }
            U || (U = 28.6), this.element.find("text.percent-sign").attr("x", U / 2)
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
            let M = Math.atan(A.y / A.x);
            A.x < 0 && (M += Math.PI);
            let V = Math.floor((M + Math.PI / 2) / (2 * Math.PI) * 100);
            k && (V < 5 && this.percentage > 95 ? V = 100 : this.percentage < 5 && V > 95 && (V = 0)), this.setPercentage(V), this.redrawSvg()
        }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, i(), this.resize = i
    },
    Wx = `<div id="prompt" class="pollposition-range-buffer prompt text col-xs-12"></div>

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
<div class="container"> 
    <form class="form" id="pollposition-enterpercentage-field"> 
        <div class="pollposition-submitpercentage-container"> 
            <button type="submit" id="pollposition-submitpercentage" class="pollposition-button"><span>Submit</span></button> 
            <div id="pollposition-submitpercentage-loading" class="button-pollposition-loading gridmargin right" style="display:none; width: 110px; height: 48px; margin-top:10px;" ></div> 
        </div> 
    </form> 
</div> 
`,
    Xx = Nn.extend({
        defaults: {
            question: "",
            module: "trivia",
            voteOptions: {
                type: "voteWithScoring",
                scoringType: "singlechoice"
            },
            survey: ""
        }
    }),
    Yx = mt.View.extend({
        template: Ze.template(Wx),
        model: new Xx,
        className: "EnterPercentage noselect",
        sessionModule: "trivia",
        sessionName: " Vote",
        sessionMessage: {
            type: "voteWithScoring",
            scoringType: "singlechoice"
        },
        regions: {
            prompt: "#prompt",
            buttons: "#buttons"
        },
        events: {
            "click #pollposition-submitpercentage": "submitPercentage",
            "input #pollposition-percentage": "updatePercentage",
            "change #pollposition-percentage": "updatePercentage"
        },
        bindings: {
            "#playername": {
                observe: "username",
                onGet(t) {
                    return `You are:  ${t}`
                }
            }
        },
        initialize() {
            this.promptComponent = new gi({
                model: new at.Model
            }), this.update(), this.listenTo(this.model, "change", this.update, this), this.triggerMethod("lastGuess", void 0)
        },
        update() {
            this.blob = this.model.attributes, this.promptComponent.model.set("html", this.model.get("question")), this.blob.entryId && this.blob.entryId !== this.currentEntry && (this.currentEntry = this.blob.entryId)
        },
        onRender() {
            this.getRegion("prompt").show(this.promptComponent), this.stickit()
        },
        onAttach() {
            Ot.vibrate(), this.startRangeInterface()
        },
        startRangeInterface() {
            if (this.currentRange) return;
            const t = ["#playerRegion", ".pollposition-range-buffer", "#pollposition-submitpercentage"];
            this.currentRange = new qx("pollposition-percentage-picker", 10, t), this.currentRange.setPercentage(50)
        },
        submitPercentage(t) {
            const e = this.currentRange.getPercentage();
            if (!this.isInt(e)) {
                const n = Ie("#pollposition-submit-alert");
                return Ie("#pollposition-submit-alert").html("you can't enter nothing!"), n.removeClass("alert-info"), n.addClass("alert-danger"), n.show(), !1
            }
            return this.currentRange.end(), Ie(t.currentTarget).hide(), Ie("#pollposition-percentage-picker").hide(), this.sessionMessage.vote = e, this.client.sessionSend(this.sessionModule, this.sessionName, this.sessionMessage), this.promptComponent.model.set("html", `${this.model.get("question")}<br>Thank you. Your guess: <span style="color: #00ffff; font-size: 40px;">${e}%</span>`), this.triggerMethod("lastGuess", e), !1
        },
        updatePercentage() {
            this.currentPercentage = this.currentRange.getPercentage()
        },
        isInt(t) {
            return Number.isInteger(t)
        }
    }),
    Kx = `<div class="text" id="answer-text">
    <span class="stat" id="answer"></span> is the correct answer
</div>
<br />
<div class="text" id="guess-text">
    <span class="stat" id="guess"></span> was your guess
</div>
<br />
<div class="text" id="earned-text">
        <span class="stat" id="earned"></span> for being <span class="text" id="answerDiff"></span> off.
    </div>
<br />
<div class="text" id="rank-text">
    <span id="rank" class="stat"></span> place
    <span class="text" id="count-text"> out of 
    	<span id="count"></span>
    </span>
</div>
<br />
<div class="text" id="total-text">
    <span id="score" class="stat"></span> total
</div>`,
    Jx = mt.View.extend({
        tagName: "div",
        className: "ScoreView",
        template: Ze.template(Kx),
        bindings: {
            "#answer": {
                observe: "answer",
                onGet(t) {
                    return this.isInt(t) ? `${t}%` : ""
                }
            },
            "#guess": {
                observe: "lastGuess",
                onGet(t) {
                    return this.isInt(t) ? `${t}%` : ""
                }
            },
            "#guess-text": {
                observe: "lastGuess",
                visible(t) {
                    return this.isInt(t)
                }
            },
            "#earned-text": {
                observe: "earned",
                visible(t) {
                    return this.isInt(t)
                }
            },
            "#earned": {
                observe: "earned",
                onGet(t) {
                    return `${this.formatScore(t,!0,0,"")}pts`
                }
            },
            "#answerDiff": {
                observe: "answerDiff",
                onGet(t) {
                    return this.isInt(t) ? `${t}%` : ""
                }
            },
            "#score": {
                observe: "score",
                onGet(t) {
                    return `${this.formatScore(t,!0,0,"")}pts`
                }
            },
            "#rank-text": {
                observe: "rank",
                visible(t) {
                    return this.isInt(t)
                }
            },
            "#rank": {
                observe: "rank",
                onGet(t) {
                    const e = t + 1;
                    return `${e}${this.formatPlace(e)}`
                }
            },
            "#count-text": {
                observe: "showCount",
                visible(t) {
                    return t
                }
            },
            "#count": {
                observe: "count",
                onGet(t) {
                    return this.formatScore(t, !0, 0, "")
                }
            }
        },
        onRender() {
            this.stickit()
        },
        isInt(t) {
            return Number.isInteger(t)
        },
        formatPlace(t) {
            const e = ["st", "nd", "rd"],
                n = t % 10,
                i = Math.floor(t / 10 % 10);
            let a = "th";
            return n !== 0 && n <= e.length && i !== 1 && (a = e[n - 1]), a
        },
        formatScore(t, e, n, i) {
            t = this.isInt(t) ? t : 0, e = e === void 0 ? !0 : e, n = n === void 0 ? 2 : n, i = i === void 0 ? "$" : i;
            const a = t < 0;
            t = Math.abs(t);
            let f = t.toString();
            const m = f.split(".");
            m.length === 2 && (f = `${m[0]}.${m[1].substr(0,n)}`);
            const b = f.split(".")[0],
                k = f.split(".")[1];
            let A = "";
            if (e)
                for (let U = 0; U < b.length; U++) U > 0 && U % 3 === 0 && (A = `,${A}`), A = b.substr(-U - 1, 1) + A;
            else A = b;
            let M = "";
            if (k !== void 0 && (M = k), M.length < n) {
                const U = n - M.length;
                for (let ne = 0; ne < U; ne++) M += "0"
            }
            let V = "";
            return a && (V = "-"), V += i + A, n > 0 && (V += `.${M}`), V
        }
    }),
    Qx = `<div id="controller" class="state-controller controller-content">
    <div class="question"></div>
    <br /><br />
    <div id="scorereview" class="scorereviewContainer"></div>
</div>
`,
    Zx = mt.View.extend({
        model: new Nn({}),
        template: Ze.template(Qx),
        className: "AnswerReview scrollable",
        sessionModule: "trivia",
        sessionName: " Vote",
        sessionMessage: {
            type: "getRank"
        },
        showCount: !1,
        regions: {
            scorereview: "#scorereview"
        },
        bindings: {
            ".question": {
                updateMethod: "html",
                observe: "question"
            }
        },
        initialize() {
            this.scoreComponent = new Jx({
                model: new at.Model
            }), this.listenTo(this.model, "change", this.update, this), this.listenTo(this.model.sessionModel, "change", this.updateFromSession, this), this.client.sessionSend(this.sessionModule, this.model.get("sessionModulePrefix") + this.sessionName, this.sessionMessage)
        },
        update() {
            this.blob = this.model.attributes, this.blob.entryId && this.blob.entryId !== this.currentEntry && (this.currentEntry = this.blob.entryId)
        },
        updateFromSession() {
            const t = this.model.sessionModel.attributes[`sessionMessage::${this.sessionModule}::${this.model.get("sessionModulePrefix")+this.sessionName}`];
            t.showCount = this.model.get("room").audience.showCount, t.answer = this.model.get("room").audience.answer, this.isInt(this.model.get("lastGuess")) && (t.lastGuess = this.model.get("lastGuess"), t.answerDiff = Math.abs(t.lastGuess - t.answer), t.earned = this.scores[t.answerDiff]), this.scoreComponent.model.set(t)
        },
        onRender() {
            this.getRegion("scorereview").show(this.scoreComponent), this.stickit()
        },
        isInt(t) {
            return Number.isInteger(t)
        },
        scores: [1e3, 930, 893, 857, 824, 791, 759, 732, 705, 677, 650, 624, 605, 587, 569, 552, 535, 519, 503, 488, 473, 459, 445, 432, 419, 406, 394, 382, 371, 360, 349, 339, 329, 319, 309, 300, 291, 282, 274, 266, 258, 248, 238, 228, 219, 210, 202, 194, 186, 179, 172, 165, 158, 152, 146, 140, 134, 129, 124, 119, 114, 108, 103, 98, 93, 88, 84, 80, 76, 72, 68, 65, 62, 59, 56, 53, 50, 47, 45, 43, 41, 38, 34, 33, 30, 28, 25, 23, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 1, 0]
    }),
    e1 = `<div class="text" id="rank-text">You finished in <span id="rank" style="color: #00ffff; font-size: 40px;"></span> place<span class="text" id="count-text"> of <span id="count" style="color: #00ffff; font-size: 40px;"></span></span> with <span id="score" style="color: #00ffff; font-size: 40px;"></span> points!</div>
<br /><br />
<div class="text" id="winner-text">Congratulations!  You Won!</div>
<div class="text" id="loser-text">Better luck next time!</div>
<br /><br />
<div class="text" id="thanks-text">Thanks for playing GUESSPIONAGE.</div>`,
    t1 = mt.View.extend({
        tagName: "div",
        template: Ze.template(e1),
        bindings: {
            "#winner-text": {
                observe: "rank",
                visible(t) {
                    return t === 0
                }
            },
            "#loser-text": {
                observe: "rank",
                visible(t) {
                    return t > 0
                }
            },
            "#score": {
                observe: "score",
                onGet(t) {
                    return this.formatScore(t, !0, 0, "")
                }
            },
            "#rank-text": {
                observe: "rank",
                visible(t) {
                    return this.isInt(t)
                }
            },
            "#rank": {
                observe: "rank",
                onGet(t) {
                    const e = t + 1;
                    return `${e}${this.formatPlace(e)}`
                }
            },
            "#count-text": {
                observe: "showCount",
                visible(t) {
                    return t
                }
            },
            "#count": {
                observe: "count",
                onGet(t) {
                    return this.formatScore(t, !0, 0, "")
                }
            }
        },
        onRender() {
            this.stickit()
        },
        isInt(t) {
            return !Number.isNaN(t) && function(n) {
                return (n | 0) === n
            }(parseFloat(t))
        },
        formatPlace(t) {
            const e = ["st", "nd", "rd"],
                n = t % 10,
                i = Math.floor(t / 10 % 10);
            let a = "th";
            return n !== 0 && n <= e.length && i !== 1 && (a = e[n - 1]), a
        },
        formatScore(t, e, n, i) {
            t = this.isInt(t) ? t : 0, e = e === void 0 ? !0 : e, n = n === void 0 ? 2 : n, i = i === void 0 ? "$" : i;
            const a = t < 0;
            t = Math.abs(t);
            let f = t.toString();
            const m = f.split(".");
            m.length === 2 && (f = `${m[0]}.${m[1].substr(0,n)}`);
            const b = f.split(".")[0],
                k = f.split(".")[1];
            let A = "";
            if (e)
                for (let U = 0; U < b.length; U++) U > 0 && U % 3 === 0 && (A = `,${A}`), A = b.substr(-U - 1, 1) + A;
            else A = b;
            let M = "";
            if (k !== void 0 && (M = k), M.length < n) {
                const U = n - M.length;
                for (let ne = 0; ne < U; ne++) M += "0"
            }
            let V = "";
            return a && (V = "-"), V += i + A, n > 0 && (V += `.${M}`), V
        }
    }),
    n1 = '<div id="finalrank"></div>',
    i1 = mt.View.extend({
        template: Ze.template(n1),
        className: "EndGame scrollable",
        sessionModule: "trivia",
        sessionName: " Vote",
        sessionMessage: {
            type: "getRank"
        },
        regions: {
            finalrank: "#finalrank"
        },
        bindings: {
            "#playername": {
                observe: "username",
                onGet(t) {
                    return `You are:  ${t}`
                }
            },
            "#endgame-message": {
                observe: "rank",
                visible(t) {
                    return this.isInt(t)
                },
                onGet(t) {
                    return t === 0 ? "You're the winner, congratulations!" : "Better luck next time!"
                }
            }
        },
        initialize() {
            this.rankComponent = new t1({
                model: new at.Model
            }), this.listenTo(this.model, "change", this.update, this), this.listenTo(this.model.sessionModel, "change", this.updateFromSession, this), this.model.sendSessionMessage(this.sessionModule, this.model.get("sessionModulePrefix") + this.sessionName, this.sessionMessage)
        },
        update() {
            this.blob = this.model.get("room").audience, this.blob.entryId && this.blob.entryId !== this.currentEntry && (this.currentEntry = this.blob.entryId)
        },
        updateFromSession() {
            const t = this.model.sessionModel.attributes[`sessionMessage::${this.sessionModule}::${this.model.get("sessionModulePrefix")+this.sessionName}`];
            t.showCount = this.model.get("room").audience.showCount, this.rankComponent.model.set(t)
        },
        onRender() {
            this.getRegion("finalrank").show(this.rankComponent), this.stickit()
        },
        isInt(t) {
            return Number.isInteger(t)
        }
    }),
    r1 = ih.extend({
        sessionModule: "trivia"
    }),
    s1 = Pa.extend({
        bindings: Ze.extend({}, Pa.prototype.bindings, {
            "#playername": {
                observe: "username",
                onGet(t) {
                    return t ? `You are:  ${t}` : ""
                }
            },
            ".messageText": {
                observe: ["player", "room"],
                updateMethod: "html",
                onGet(t) {
                    if (!t[1]) return "Get ready, the next round is about to start!";
                    const e = t[0] !== void 0 ? t[0] : t[1];
                    return e && e.message
                }
            }
        })
    });
const o1 = Fx.extend({
    sessionModulePrefix: "Guesspionage-Crowdplay",
    parseBlob(t) {
        return t.state === "EnterPercentage" ? Pn.hide() : Pn.show(), t.playerInfo = t.playerInfo || {}, t.playerInfo.username = this.model.get("username") ? `You are: ${this.model.get("username")}` : "", t.state === "MakeSingleChoice" && (t.prompt = {
            html: t.text
        }, t.choices = Ze.map(t.choices, e => ({
            html: e
        }))), t.state === "AnswerReview" && (t.lastGuess = this.model.get("lastGuess")), t.state === "ScoreView" && (t.lastGuess = this.model.get("lastGuess")), t
    },
    getGameLayout(t) {
        switch (t) {
            case "EnterPercentage":
                return this.setLayout(Yx);
            case "AnswerReview":
                return this.setLayout(Zx);
            case "EndGame":
                return this.setLayout(i1);
            case "MakeSingleChoice":
                return this.setLayout(r1);
            case "Logo":
                return this.setLayout(s1);
            default:
                return -1
        }
    },
    onChildviewLastGuess(t) {
        this.model.set("lastGuess", t, {
            silent: !0
        })
    }
});
Ux({
    MainView: o1
});
//# sourceMappingURL=d8e22d89.js.map