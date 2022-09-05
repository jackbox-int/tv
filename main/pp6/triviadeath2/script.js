var Fh = Object.defineProperty;
var jh = (t, e, n) => e in t ? Fh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var ot = (t, e, n) => (jh(t, typeof e != "symbol" ? e + "" : e, n), n);
const zh = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
    new MutationObserver(o => {
        for (const h of o)
            if (h.type === "childList")
                for (const m of h.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && i(m)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const h = {};
        return o.integrity && (h.integrity = o.integrity), o.referrerpolicy && (h.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? h.credentials = "include" : o.crossorigin === "anonymous" ? h.credentials = "omit" : h.credentials = "same-origin", h
    }

    function i(o) {
        if (o.ep) return;
        o.ep = !0;
        const h = n(o);
        fetch(o.href, h)
    }
};
zh();
var yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Hh(t) {
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
var $i = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            o = Array.prototype,
            h = Object.prototype,
            m = Function.prototype,
            E = o.push,
            k = o.slice,
            A = h.toString,
            M = h.hasOwnProperty,
            $ = Array.isArray,
            J = Object.keys,
            ie = m.bind,
            Y = Object.create,
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
                        return function(R, L, V) {
                            return l.call(g, R, L, V)
                        };
                    case 4:
                        return function(R, L, V, te) {
                            return l.call(g, R, L, V, te)
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
                        for (var V = arguments[L], te = l(V), Se = te.length, he = 0; he < Se; he++) {
                            var Ie = te[he];
                            (!g || S[Ie] === void 0) && (S[Ie] = V[Ie])
                        }
                    return S
                }
            },
            se = function(l) {
                if (!v.isObject(l)) return {};
                if (Y) return Y(l);
                re.prototype = l;
                var g = new re;
                return re.prototype = null, g
            },
            ve = function(l) {
                return function(g) {
                    return g == null ? void 0 : g[l]
                }
            },
            f = Math.pow(2, 53) - 1,
            Ee = ve("length"),
            Ae = function(l) {
                var g = Ee(l);
                return typeof g == "number" && g >= 0 && g <= f
            };
        v.each = v.forEach = function(l, g, S) {
            g = P(g, S);
            var R, L;
            if (Ae(l))
                for (R = 0, L = l.length; R < L; R++) g(l[R], R, l);
            else {
                var V = v.keys(l);
                for (R = 0, L = V.length; R < L; R++) g(l[V[R]], V[R], l)
            }
            return l
        }, v.map = v.collect = function(l, g, S) {
            g = W(g, S);
            for (var R = !Ae(l) && v.keys(l), L = (R || l).length, V = Array(L), te = 0; te < L; te++) {
                var Se = R ? R[te] : te;
                V[te] = g(l[Se], Se, l)
            }
            return V
        };

        function Pe(l) {
            function g(S, R, L, V, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var he = V ? V[te] : te;
                    L = R(L, S[he], he, S)
                }
                return L
            }
            return function(S, R, L, V) {
                R = P(R, V, 4);
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
            return g = W(g, S), v.each(l, function(L, V, te) {
                g(L, V, te) && R.push(L)
            }), R
        }, v.reject = function(l, g, S) {
            return v.filter(l, v.negate(W(g)), S)
        }, v.every = v.all = function(l, g, S) {
            g = W(g, S);
            for (var R = !Ae(l) && v.keys(l), L = (R || l).length, V = 0; V < L; V++) {
                var te = R ? R[V] : V;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, g, S) {
            g = W(g, S);
            for (var R = !Ae(l) && v.keys(l), L = (R || l).length, V = 0; V < L; V++) {
                var te = R ? R[V] : V;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, g, S, R) {
            return Ae(l) || (l = v.values(l)), (typeof S != "number" || R) && (S = 0), v.indexOf(l, g, S) >= 0
        }, v.invoke = function(l, g) {
            var S = k.call(arguments, 2),
                R = v.isFunction(g);
            return v.map(l, function(L) {
                var V = R ? g : L[g];
                return V == null ? V : V.apply(L, S)
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
                V, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : v.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) V = l[Se], V > R && (R = V)
            } else g = W(g, S), v.each(l, function(Ie, De, it) {
                te = g(Ie, De, it), (te > L || te === -1 / 0 && R === -1 / 0) && (R = Ie, L = te)
            });
            return R
        }, v.min = function(l, g, S) {
            var R = 1 / 0,
                L = 1 / 0,
                V, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : v.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) V = l[Se], V < R && (R = V)
            } else g = W(g, S), v.each(l, function(Ie, De, it) {
                te = g(Ie, De, it), (te < L || te === 1 / 0 && R === 1 / 0) && (R = Ie, L = te)
            });
            return R
        }, v.shuffle = function(l) {
            for (var g = Ae(l) ? l : v.values(l), S = g.length, R = Array(S), L = 0, V; L < S; L++) V = v.random(0, L), V !== L && (R[L] = R[V]), R[V] = g[L];
            return R
        }, v.sample = function(l, g, S) {
            return g == null || S ? (Ae(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, g))
        }, v.sortBy = function(l, g, S) {
            return g = W(g, S), v.pluck(v.map(l, function(R, L, V) {
                return {
                    value: R,
                    index: L,
                    criteria: g(R, L, V)
                }
            }).sort(function(R, L) {
                var V = R.criteria,
                    te = L.criteria;
                if (V !== te) {
                    if (V > te || V === void 0) return 1;
                    if (V < te || te === void 0) return -1
                }
                return R.index - L.index
            }), "value")
        };
        var at = function(l) {
            return function(g, S, R) {
                var L = {};
                return S = W(S, R), v.each(g, function(V, te) {
                    var Se = S(V, te, g);
                    l(L, V, Se)
                }), L
            }
        };
        v.groupBy = at(function(l, g, S) {
            v.has(l, S) ? l[S].push(g) : l[S] = [g]
        }), v.indexBy = at(function(l, g, S) {
            l[S] = g
        }), v.countBy = at(function(l, g, S) {
            v.has(l, S) ? l[S]++ : l[S] = 1
        }), v.toArray = function(l) {
            return l ? v.isArray(l) ? k.call(l) : Ae(l) ? v.map(l, v.identity) : v.values(l) : []
        }, v.size = function(l) {
            return l == null ? 0 : Ae(l) ? l.length : v.keys(l).length
        }, v.partition = function(l, g, S) {
            g = W(g, S);
            var R = [],
                L = [];
            return v.each(l, function(V, te, Se) {
                (g(V, te, Se) ? R : L).push(V)
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
            for (var L = [], V = 0, te = R || 0, Se = Ee(l); te < Se; te++) {
                var he = l[te];
                if (Ae(he) && (v.isArray(he) || v.isArguments(he))) {
                    g || (he = Be(he, g, S));
                    var Ie = 0,
                        De = he.length;
                    for (L.length += De; Ie < De;) L[V++] = he[Ie++]
                } else S || (L[V++] = he)
            }
            return L
        };
        v.flatten = function(l, g) {
            return Be(l, g, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, g, S, R) {
            v.isBoolean(g) || (R = S, S = g, g = !1), S != null && (S = W(S, R));
            for (var L = [], V = [], te = 0, Se = Ee(l); te < Se; te++) {
                var he = l[te],
                    Ie = S ? S(he, te, l) : he;
                g ? ((!te || V !== Ie) && L.push(he), V = Ie) : S ? v.contains(V, Ie) || (V.push(Ie), L.push(he)) : v.contains(L, he) || L.push(he)
            }
            return L
        }, v.union = function() {
            return v.uniq(Be(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var g = [], S = arguments.length, R = 0, L = Ee(l); R < L; R++) {
                var V = l[R];
                if (!v.contains(g, V)) {
                    for (var te = 1; te < S && v.contains(arguments[te], V); te++);
                    te === S && g.push(V)
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

        function K(l) {
            return function(g, S, R) {
                S = W(S, R);
                for (var L = Ee(g), V = l > 0 ? 0 : L - 1; V >= 0 && V < L; V += l)
                    if (S(g[V], V, g)) return V;
                return -1
            }
        }
        v.findIndex = K(1), v.findLastIndex = K(-1), v.sortedIndex = function(l, g, S, R) {
            S = W(S, R, 1);
            for (var L = S(g), V = 0, te = Ee(l); V < te;) {
                var Se = Math.floor((V + te) / 2);
                S(l[Se]) < L ? V = Se + 1 : te = Se
            }
            return V
        };

        function je(l, g, S) {
            return function(R, L, V) {
                var te = 0,
                    Se = Ee(R);
                if (typeof V == "number") l > 0 ? te = V >= 0 ? V : Math.max(V + Se, te) : Se = V >= 0 ? Math.min(V + 1, Se) : V + Se + 1;
                else if (S && V && Se) return V = S(R, L), R[V] === L ? V : -1;
                if (L !== L) return V = g(k.call(R, te, Se), v.isNaN), V >= 0 ? V + te : -1;
                for (V = l > 0 ? te : Se - 1; V >= 0 && V < Se; V += l)
                    if (R[V] === L) return V;
                return -1
            }
        }
        v.indexOf = je(1, v.findIndex, v.sortedIndex), v.lastIndexOf = je(-1, v.findLastIndex), v.range = function(l, g, S) {
            g == null && (g = l || 0, l = 0), S = S || 1;
            for (var R = Math.max(Math.ceil((g - l) / S), 0), L = Array(R), V = 0; V < R; V++, l += S) L[V] = l;
            return L
        };
        var U = function(l, g, S, R, L) {
            if (!(R instanceof g)) return l.apply(S, L);
            var V = se(l.prototype),
                te = l.apply(V, L);
            return v.isObject(te) ? te : V
        };
        v.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                R = function() {
                    return U(l, R, g, this, S.concat(k.call(arguments)))
                };
            return R
        }, v.partial = function(l) {
            var g = k.call(arguments, 1),
                S = function() {
                    for (var R = 0, L = g.length, V = Array(L), te = 0; te < L; te++) V[te] = g[te] === v ? arguments[R++] : g[te];
                    for (; R < arguments.length;) V.push(arguments[R++]);
                    return U(l, S, this, this, V)
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
                    V = "" + (g ? g.apply(this, arguments) : R);
                return v.has(L, V) || (L[V] = l.apply(this, arguments)), L[V]
            };
            return S.cache = {}, S
        }, v.delay = function(l, g) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, g)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, g, S) {
            var R, L, V, te = null,
                Se = 0;
            S || (S = {});
            var he = function() {
                Se = S.leading === !1 ? 0 : v.now(), te = null, V = l.apply(R, L), te || (R = L = null)
            };
            return function() {
                var Ie = v.now();
                !Se && S.leading === !1 && (Se = Ie);
                var De = g - (Ie - Se);
                return R = this, L = arguments, De <= 0 || De > g ? (te && (clearTimeout(te), te = null), Se = Ie, V = l.apply(R, L), te || (R = L = null)) : !te && S.trailing !== !1 && (te = setTimeout(he, De)), V
            }
        }, v.debounce = function(l, g, S) {
            var R, L, V, te, Se, he = function() {
                var Ie = v.now() - te;
                Ie < g && Ie >= 0 ? R = setTimeout(he, g - Ie) : (R = null, S || (Se = l.apply(V, L), R || (V = L = null)))
            };
            return function() {
                V = this, L = arguments, te = v.now();
                var Ie = S && !R;
                return R || (R = setTimeout(he, g)), Ie && (Se = l.apply(V, L), V = L = null), Se
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
                L = v.isFunction(R) && R.prototype || h,
                V = "constructor";
            for (v.has(l, V) && !v.contains(g, V) && g.push(V); S--;) V = Te[S], V in l && l[V] !== L[V] && !v.contains(g, V) && g.push(V)
        }
        v.keys = function(l) {
            if (!v.isObject(l)) return [];
            if (J) return J(l);
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
            for (var R = v.keys(l), L = R.length, V = {}, te, Se = 0; Se < L; Se++) te = R[Se], V[te] = g(l[te], te, l);
            return V
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
            for (var R = v.keys(l), L, V = 0, te = R.length; V < te; V++)
                if (L = R[V], g(l[L], L, l)) return L
        }, v.pick = function(l, g, S) {
            var R = {},
                L = l,
                V, te;
            if (L == null) return R;
            v.isFunction(g) ? (te = v.allKeys(L), V = P(g, S)) : (te = Be(arguments, !1, !1, 1), V = function(it, xt, on) {
                return xt in on
            }, L = Object(L));
            for (var Se = 0, he = te.length; Se < he; Se++) {
                var Ie = te[Se],
                    De = L[Ie];
                V(De, Ie, L) && (R[Ie] = De)
            }
            return R
        }, v.omit = function(l, g, S) {
            if (v.isFunction(g)) g = v.negate(g);
            else {
                var R = v.map(Be(arguments, !1, !1, 1), String);
                g = function(L, V) {
                    return !v.contains(R, V)
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
            for (var L = Object(l), V = 0; V < R; V++) {
                var te = S[V];
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
            var V = L === "[object Array]";
            if (!V) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    Se = g.constructor;
                if (te !== Se && !(v.isFunction(te) && te instanceof te && v.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
            }
            S = S || [], R = R || [];
            for (var he = S.length; he--;)
                if (S[he] === l) return R[he] === g;
            if (S.push(l), R.push(g), V) {
                if (he = l.length, he !== g.length) return !1;
                for (; he--;)
                    if (!ye(l[he], g[he], S, R)) return !1
            } else {
                var Ie = v.keys(l),
                    De;
                if (he = Ie.length, v.keys(g).length !== he) return !1;
                for (; he--;)
                    if (De = Ie[he], !(v.has(g, De) && ye(l[De], g[De], S, R))) return !1
            }
            return S.pop(), R.pop(), !0
        };
        v.isEqual = function(l, g) {
            return ye(l, g)
        }, v.isEmpty = function(l) {
            return l == null ? !0 : Ae(l) && (v.isArray(l) || v.isString(l) || v.isArguments(l)) ? l.length === 0 : v.keys(l).length === 0
        }, v.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, v.isArray = $ || function(l) {
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
                var g = function(V) {
                        return l[V]
                    },
                    S = "(?:" + v.keys(l).join("|") + ")",
                    R = RegExp(S),
                    L = RegExp(S, "g");
                return function(V) {
                    return V = V == null ? "" : "" + V, R.test(V) ? V.replace(L, g) : V
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
            Gt = function(l) {
                return "\\" + dt[l]
            };
        v.template = function(l, g, S) {
            !g && S && (g = S), g = v.defaults({}, g, v.templateSettings);
            var R = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                L = 0,
                V = "__p+='";
            l.replace(R, function(Ie, De, it, xt, on) {
                return V += l.slice(L, on).replace(Bt, Gt), L = on + Ie.length, De ? V += `'+
((__t=(` + De + `))==null?'':_.escape(__t))+
'` : it ? V += `'+
((__t=(` + it + `))==null?'':__t)+
'` : xt && (V += `';
` + xt + `
__p+='`), Ie
            }), V += `';
`, g.variable || (V = `with(obj||{}){
` + V + `}
`), V = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + V + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", V)
            } catch (Ie) {
                throw Ie.source = V, Ie
            }
            var Se = function(Ie) {
                    return te.call(this, Ie, v)
                },
                he = g.variable || "obj";
            return Se.source = "function(" + he + `){
` + V + "}", Se
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
                    return E.apply(R, arguments), _(this, S.apply(v, R))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = o[l];
            v.prototype[l] = function() {
                var S = this._wrapped;
                return g.apply(S, arguments), (l === "shift" || l === "splice") && S.length === 0 && delete S[0], _(this, S)
            }
        }), v.each(["concat", "join", "slice"], function(l) {
            var g = o[l];
            v.prototype[l] = function() {
                return _(this, g.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(yt)
})($i, $i.exports);
const Ze = $i.exports;
var rl = {
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
    })(typeof window < "u" ? window : yt, function(e, n) {
        var i = [],
            o = Object.getPrototypeOf,
            h = i.slice,
            m = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            E = i.push,
            k = i.indexOf,
            A = {},
            M = A.toString,
            $ = A.hasOwnProperty,
            J = $.toString,
            ie = J.call(Object),
            Y = {},
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
            var p, w, x = u.createElement("script");
            if (x.text = r, s)
                for (p in W) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
            u.head.appendChild(x).parentNode.removeChild(x)
        }

        function se(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? A[M.call(r)] || "object" : typeof r
        }
        var ve = "3.6.0",
            f = function(r, s) {
                return new f.fn.init(r, s)
            };
        f.fn = f.prototype = {
            jquery: ve,
            constructor: f,
            length: 0,
            toArray: function() {
                return h.call(this)
            },
            get: function(r) {
                return r == null ? h.call(this) : r < 0 ? this[r + this.length] : this[r]
            },
            pushStack: function(r) {
                var s = f.merge(this.constructor(), r);
                return s.prevObject = this, s
            },
            each: function(r) {
                return f.each(this, r)
            },
            map: function(r) {
                return this.pushStack(f.map(this, function(s, u) {
                    return r.call(s, u, s)
                }))
            },
            slice: function() {
                return this.pushStack(h.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(f.grep(this, function(r, s) {
                    return (s + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(f.grep(this, function(r, s) {
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
            push: E,
            sort: i.sort,
            splice: i.splice
        }, f.extend = f.fn.extend = function() {
            var r, s, u, p, w, x, T = arguments[0] || {},
                z = 1,
                H = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === H && (T = this, z--); z < H; z++)
                if ((r = arguments[z]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (Z && p && (f.isPlainObject(p) || (w = Array.isArray(p))) ? (u = T[s], w && !Array.isArray(u) ? x = [] : !w && !f.isPlainObject(u) ? x = {} : x = u, w = !1, T[s] = f.extend(Z, x, p)) : p !== void 0 && (T[s] = p));
            return T
        }, f.extend({
            expando: "jQuery" + (ve + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(r) {
                throw new Error(r)
            },
            noop: function() {},
            isPlainObject: function(r) {
                var s, u;
                return !r || M.call(r) !== "[object Object]" ? !1 : (s = o(r), s ? (u = $.call(s, "constructor") && s.constructor, typeof u == "function" && J.call(u) === ie) : !0)
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
                return r != null && (Ee(Object(r)) ? f.merge(u, typeof r == "string" ? [r] : r) : E.call(u, r)), u
            },
            inArray: function(r, s, u) {
                return s == null ? -1 : k.call(s, r, u)
            },
            merge: function(r, s) {
                for (var u = +s.length, p = 0, w = r.length; p < u; p++) r[w++] = s[p];
                return r.length = w, r
            },
            grep: function(r, s, u) {
                for (var p, w = [], x = 0, T = r.length, z = !u; x < T; x++) p = !s(r[x], x), p !== z && w.push(r[x]);
                return w
            },
            map: function(r, s, u) {
                var p, w, x = 0,
                    T = [];
                if (Ee(r))
                    for (p = r.length; x < p; x++) w = s(r[x], x, u), w != null && T.push(w);
                else
                    for (x in r) w = s(r[x], x, u), w != null && T.push(w);
                return m(T)
            },
            guid: 1,
            support: Y
        }), typeof Symbol == "function" && (f.fn[Symbol.iterator] = i[Symbol.iterator]), f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            A["[object " + s + "]"] = s.toLowerCase()
        });

        function Ee(r) {
            var s = !!r && "length" in r && r.length,
                u = se(r);
            return re(r) || v(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Ae = function(r) {
            var s, u, p, w, x, T, z, H, Z, le, be, ne, ce, Ge, st, Fe, zt, Nt, dn, _t = "sizzle" + 1 * new Date,
                tt = r.document,
                ln = 0,
                ft = 0,
                Mt = er(),
                Oi = er(),
                Qi = er(),
                fn = er(),
                ti = function(I, j) {
                    return I === j && (be = !0), 0
                },
                ni = {}.hasOwnProperty,
                cn = [],
                Vn = cn.pop,
                wn = cn.push,
                En = cn.push,
                Is = cn.slice,
                ii = function(I, j) {
                    for (var X = 0, de = I.length; X < de; X++)
                        if (I[X] === j) return X;
                    return -1
                },
                qr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                ri = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ms = "\\[" + gt + "*(" + ri + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ri + "))|)" + gt + "*\\]",
                Xr = ":(" + ri + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ms + ")*)|.*)\\)|)",
                Ds = new RegExp(gt + "+", "g"),
                Ri = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ls = new RegExp("^" + gt + "*," + gt + "*"),
                Ps = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                ia = new RegExp(gt + "|>"),
                ra = new RegExp(Xr),
                sa = new RegExp("^" + ri + "$"),
                Zi = {
                    ID: new RegExp("^#(" + ri + ")"),
                    CLASS: new RegExp("^\\.(" + ri + ")"),
                    TAG: new RegExp("^(" + ri + "|[*])"),
                    ATTR: new RegExp("^" + Ms),
                    PSEUDO: new RegExp("^" + Xr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + qr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                oa = /HTML$/i,
                aa = /^(?:input|select|textarea|button)$/i,
                la = /^h\d$/i,
                Ii = /^[^{]+\{\s*\[native \w/,
                ca = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Yr = /[+~]/,
                Rn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                _n = function(I, j) {
                    var X = "0x" + I.slice(1) - 65536;
                    return j || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                },
                Kr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Ns = function(I, j) {
                    return j ? I === "\0" ? "\uFFFD" : I.slice(0, -1) + "\\" + I.charCodeAt(I.length - 1).toString(16) + " " : "\\" + I
                },
                Vs = function() {
                    ne()
                },
                ua = rr(function(I) {
                    return I.disabled === !0 && I.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                En.apply(cn = Is.call(tt.childNodes), tt.childNodes), cn[tt.childNodes.length].nodeType
            } catch {
                En = {
                    apply: cn.length ? function(j, X) {
                        wn.apply(j, Is.call(X))
                    } : function(j, X) {
                        for (var de = j.length, ee = 0; j[de++] = X[ee++];);
                        j.length = de - 1
                    }
                }
            }

            function St(I, j, X, de) {
                var ee, me, xe, Oe, Le, ze, Ue, Xe = j && j.ownerDocument,
                    ht = j ? j.nodeType : 9;
                if (X = X || [], typeof I != "string" || !I || ht !== 1 && ht !== 9 && ht !== 11) return X;
                if (!de && (ne(j), j = j || ce, st)) {
                    if (ht !== 11 && (Le = ca.exec(I)))
                        if (ee = Le[1]) {
                            if (ht === 9)
                                if (xe = j.getElementById(ee)) {
                                    if (xe.id === ee) return X.push(xe), X
                                } else return X;
                            else if (Xe && (xe = Xe.getElementById(ee)) && dn(j, xe) && xe.id === ee) return X.push(xe), X
                        } else {
                            if (Le[2]) return En.apply(X, j.getElementsByTagName(I)), X;
                            if ((ee = Le[3]) && u.getElementsByClassName && j.getElementsByClassName) return En.apply(X, j.getElementsByClassName(ee)), X
                        } if (u.qsa && !fn[I + " "] && (!Fe || !Fe.test(I)) && (ht !== 1 || j.nodeName.toLowerCase() !== "object")) {
                        if (Ue = I, Xe = j, ht === 1 && (ia.test(I) || Ps.test(I))) {
                            for (Xe = Yr.test(I) && Jr(j.parentNode) || j, (Xe !== j || !u.scope) && ((Oe = j.getAttribute("id")) ? Oe = Oe.replace(Kr, Ns) : j.setAttribute("id", Oe = _t)), ze = T(I), me = ze.length; me--;) ze[me] = (Oe ? "#" + Oe : ":scope") + " " + ir(ze[me]);
                            Ue = ze.join(",")
                        }
                        try {
                            return En.apply(X, Xe.querySelectorAll(Ue)), X
                        } catch {
                            fn(I, !0)
                        } finally {
                            Oe === _t && j.removeAttribute("id")
                        }
                    }
                }
                return H(I.replace(Ri, "$1"), j, X, de)
            }

            function er() {
                var I = [];

                function j(X, de) {
                    return I.push(X + " ") > p.cacheLength && delete j[I.shift()], j[X + " "] = de
                }
                return j
            }

            function pn(I) {
                return I[_t] = !0, I
            }

            function bn(I) {
                var j = ce.createElement("fieldset");
                try {
                    return !!I(j)
                } catch {
                    return !1
                } finally {
                    j.parentNode && j.parentNode.removeChild(j), j = null
                }
            }

            function tr(I, j) {
                for (var X = I.split("|"), de = X.length; de--;) p.attrHandle[X[de]] = j
            }

            function nr(I, j) {
                var X = j && I,
                    de = X && I.nodeType === 1 && j.nodeType === 1 && I.sourceIndex - j.sourceIndex;
                if (de) return de;
                if (X) {
                    for (; X = X.nextSibling;)
                        if (X === j) return -1
                }
                return I ? 1 : -1
            }

            function ha(I) {
                return function(j) {
                    var X = j.nodeName.toLowerCase();
                    return X === "input" && j.type === I
                }
            }

            function da(I) {
                return function(j) {
                    var X = j.nodeName.toLowerCase();
                    return (X === "input" || X === "button") && j.type === I
                }
            }

            function Bs(I) {
                return function(j) {
                    return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === I : j.disabled === I : j.isDisabled === I || j.isDisabled !== !I && ua(j) === I : j.disabled === I : "label" in j ? j.disabled === I : !1
                }
            }

            function In(I) {
                return pn(function(j) {
                    return j = +j, pn(function(X, de) {
                        for (var ee, me = I([], X.length, j), xe = me.length; xe--;) X[ee = me[xe]] && (X[ee] = !(de[ee] = X[ee]))
                    })
                })
            }

            function Jr(I) {
                return I && typeof I.getElementsByTagName < "u" && I
            }
            u = St.support = {}, x = St.isXML = function(I) {
                var j = I && I.namespaceURI,
                    X = I && (I.ownerDocument || I).documentElement;
                return !oa.test(j || X && X.nodeName || "HTML")
            }, ne = St.setDocument = function(I) {
                var j, X, de = I ? I.ownerDocument || I : tt;
                return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, Ge = ce.documentElement, st = !x(ce), tt != ce && (X = ce.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Vs, !1) : X.attachEvent && X.attachEvent("onunload", Vs)), u.scope = bn(function(ee) {
                    return Ge.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = bn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = bn(function(ee) {
                    return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = Ii.test(ce.getElementsByClassName), u.getById = bn(function(ee) {
                    return Ge.appendChild(ee).id = _t, !ce.getElementsByName || !ce.getElementsByName(_t).length
                }), u.getById ? (p.filter.ID = function(ee) {
                    var me = ee.replace(Rn, _n);
                    return function(xe) {
                        return xe.getAttribute("id") === me
                    }
                }, p.find.ID = function(ee, me) {
                    if (typeof me.getElementById < "u" && st) {
                        var xe = me.getElementById(ee);
                        return xe ? [xe] : []
                    }
                }) : (p.filter.ID = function(ee) {
                    var me = ee.replace(Rn, _n);
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
                }, zt = [], Fe = [], (u.qsa = Ii.test(ce.querySelectorAll)) && (bn(function(ee) {
                    var me;
                    Ge.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && Fe.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || Fe.push("\\[" + gt + "*(?:value|" + qr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || Fe.push("~="), me = ce.createElement("input"), me.setAttribute("name", ""), ee.appendChild(me), ee.querySelectorAll("[name='']").length || Fe.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || Fe.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || Fe.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), Fe.push("[\\r\\n\\f]")
                }), bn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var me = ce.createElement("input");
                    me.setAttribute("type", "hidden"), ee.appendChild(me).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && Fe.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && Fe.push(":enabled", ":disabled"), Ge.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && Fe.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), Fe.push(",.*:")
                })), (u.matchesSelector = Ii.test(Nt = Ge.matches || Ge.webkitMatchesSelector || Ge.mozMatchesSelector || Ge.oMatchesSelector || Ge.msMatchesSelector)) && bn(function(ee) {
                    u.disconnectedMatch = Nt.call(ee, "*"), Nt.call(ee, "[s!='']:x"), zt.push("!=", Xr)
                }), Fe = Fe.length && new RegExp(Fe.join("|")), zt = zt.length && new RegExp(zt.join("|")), j = Ii.test(Ge.compareDocumentPosition), dn = j || Ii.test(Ge.contains) ? function(ee, me) {
                    var xe = ee.nodeType === 9 ? ee.documentElement : ee,
                        Oe = me && me.parentNode;
                    return ee === Oe || !!(Oe && Oe.nodeType === 1 && (xe.contains ? xe.contains(Oe) : ee.compareDocumentPosition && ee.compareDocumentPosition(Oe) & 16))
                } : function(ee, me) {
                    if (me) {
                        for (; me = me.parentNode;)
                            if (me === ee) return !0
                    }
                    return !1
                }, ti = j ? function(ee, me) {
                    if (ee === me) return be = !0, 0;
                    var xe = !ee.compareDocumentPosition - !me.compareDocumentPosition;
                    return xe || (xe = (ee.ownerDocument || ee) == (me.ownerDocument || me) ? ee.compareDocumentPosition(me) : 1, xe & 1 || !u.sortDetached && me.compareDocumentPosition(ee) === xe ? ee == ce || ee.ownerDocument == tt && dn(tt, ee) ? -1 : me == ce || me.ownerDocument == tt && dn(tt, me) ? 1 : le ? ii(le, ee) - ii(le, me) : 0 : xe & 4 ? -1 : 1)
                } : function(ee, me) {
                    if (ee === me) return be = !0, 0;
                    var xe, Oe = 0,
                        Le = ee.parentNode,
                        ze = me.parentNode,
                        Ue = [ee],
                        Xe = [me];
                    if (!Le || !ze) return ee == ce ? -1 : me == ce ? 1 : Le ? -1 : ze ? 1 : le ? ii(le, ee) - ii(le, me) : 0;
                    if (Le === ze) return nr(ee, me);
                    for (xe = ee; xe = xe.parentNode;) Ue.unshift(xe);
                    for (xe = me; xe = xe.parentNode;) Xe.unshift(xe);
                    for (; Ue[Oe] === Xe[Oe];) Oe++;
                    return Oe ? nr(Ue[Oe], Xe[Oe]) : Ue[Oe] == tt ? -1 : Xe[Oe] == tt ? 1 : 0
                }), ce
            }, St.matches = function(I, j) {
                return St(I, null, null, j)
            }, St.matchesSelector = function(I, j) {
                if (ne(I), u.matchesSelector && st && !fn[j + " "] && (!zt || !zt.test(j)) && (!Fe || !Fe.test(j))) try {
                    var X = Nt.call(I, j);
                    if (X || u.disconnectedMatch || I.document && I.document.nodeType !== 11) return X
                } catch {
                    fn(j, !0)
                }
                return St(j, ce, null, [I]).length > 0
            }, St.contains = function(I, j) {
                return (I.ownerDocument || I) != ce && ne(I), dn(I, j)
            }, St.attr = function(I, j) {
                (I.ownerDocument || I) != ce && ne(I);
                var X = p.attrHandle[j.toLowerCase()],
                    de = X && ni.call(p.attrHandle, j.toLowerCase()) ? X(I, j, !st) : void 0;
                return de !== void 0 ? de : u.attributes || !st ? I.getAttribute(j) : (de = I.getAttributeNode(j)) && de.specified ? de.value : null
            }, St.escape = function(I) {
                return (I + "").replace(Kr, Ns)
            }, St.error = function(I) {
                throw new Error("Syntax error, unrecognized expression: " + I)
            }, St.uniqueSort = function(I) {
                var j, X = [],
                    de = 0,
                    ee = 0;
                if (be = !u.detectDuplicates, le = !u.sortStable && I.slice(0), I.sort(ti), be) {
                    for (; j = I[ee++];) j === I[ee] && (de = X.push(ee));
                    for (; de--;) I.splice(X[de], 1)
                }
                return le = null, I
            }, w = St.getText = function(I) {
                var j, X = "",
                    de = 0,
                    ee = I.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof I.textContent == "string") return I.textContent;
                        for (I = I.firstChild; I; I = I.nextSibling) X += w(I)
                    } else if (ee === 3 || ee === 4) return I.nodeValue
                } else
                    for (; j = I[de++];) X += w(j);
                return X
            }, p = St.selectors = {
                cacheLength: 50,
                createPseudo: pn,
                match: Zi,
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
                        return I[1] = I[1].replace(Rn, _n), I[3] = (I[3] || I[4] || I[5] || "").replace(Rn, _n), I[2] === "~=" && (I[3] = " " + I[3] + " "), I.slice(0, 4)
                    },
                    CHILD: function(I) {
                        return I[1] = I[1].toLowerCase(), I[1].slice(0, 3) === "nth" ? (I[3] || St.error(I[0]), I[4] = +(I[4] ? I[5] + (I[6] || 1) : 2 * (I[3] === "even" || I[3] === "odd")), I[5] = +(I[7] + I[8] || I[3] === "odd")) : I[3] && St.error(I[0]), I
                    },
                    PSEUDO: function(I) {
                        var j, X = !I[6] && I[2];
                        return Zi.CHILD.test(I[0]) ? null : (I[3] ? I[2] = I[4] || I[5] || "" : X && ra.test(X) && (j = T(X, !0)) && (j = X.indexOf(")", X.length - j) - X.length) && (I[0] = I[0].slice(0, j), I[2] = X.slice(0, j)), I.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(I) {
                        var j = I.replace(Rn, _n).toLowerCase();
                        return I === "*" ? function() {
                            return !0
                        } : function(X) {
                            return X.nodeName && X.nodeName.toLowerCase() === j
                        }
                    },
                    CLASS: function(I) {
                        var j = Mt[I + " "];
                        return j || (j = new RegExp("(^|" + gt + ")" + I + "(" + gt + "|$)")) && Mt(I, function(X) {
                            return j.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(I, j, X) {
                        return function(de) {
                            var ee = St.attr(de, I);
                            return ee == null ? j === "!=" : j ? (ee += "", j === "=" ? ee === X : j === "!=" ? ee !== X : j === "^=" ? X && ee.indexOf(X) === 0 : j === "*=" ? X && ee.indexOf(X) > -1 : j === "$=" ? X && ee.slice(-X.length) === X : j === "~=" ? (" " + ee.replace(Ds, " ") + " ").indexOf(X) > -1 : j === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                        }
                    },
                    CHILD: function(I, j, X, de, ee) {
                        var me = I.slice(0, 3) !== "nth",
                            xe = I.slice(-4) !== "last",
                            Oe = j === "of-type";
                        return de === 1 && ee === 0 ? function(Le) {
                            return !!Le.parentNode
                        } : function(Le, ze, Ue) {
                            var Xe, ht, Tt, qe, Ht, Zt, gn = me !== xe ? "nextSibling" : "previousSibling",
                                At = Le.parentNode,
                                c = Oe && Le.nodeName.toLowerCase(),
                                d = !Ue && !Oe,
                                b = !1;
                            if (At) {
                                if (me) {
                                    for (; gn;) {
                                        for (qe = Le; qe = qe[gn];)
                                            if (Oe ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) return !1;
                                        Zt = gn = I === "only" && !Zt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Zt = [xe ? At.firstChild : At.lastChild], xe && d) {
                                    for (qe = At, Tt = qe[_t] || (qe[_t] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), Xe = ht[I] || [], Ht = Xe[0] === ln && Xe[1], b = Ht && Xe[2], qe = Ht && At.childNodes[Ht]; qe = ++Ht && qe && qe[gn] || (b = Ht = 0) || Zt.pop();)
                                        if (qe.nodeType === 1 && ++b && qe === Le) {
                                            ht[I] = [ln, Ht, b];
                                            break
                                        }
                                } else if (d && (qe = Le, Tt = qe[_t] || (qe[_t] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), Xe = ht[I] || [], Ht = Xe[0] === ln && Xe[1], b = Ht), b === !1)
                                    for (;
                                        (qe = ++Ht && qe && qe[gn] || (b = Ht = 0) || Zt.pop()) && !((Oe ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) && ++b && (d && (Tt = qe[_t] || (qe[_t] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), ht[I] = [ln, b]), qe === Le)););
                                return b -= ee, b === de || b % de === 0 && b / de >= 0
                            }
                        }
                    },
                    PSEUDO: function(I, j) {
                        var X, de = p.pseudos[I] || p.setFilters[I.toLowerCase()] || St.error("unsupported pseudo: " + I);
                        return de[_t] ? de(j) : de.length > 1 ? (X = [I, I, "", j], p.setFilters.hasOwnProperty(I.toLowerCase()) ? pn(function(ee, me) {
                            for (var xe, Oe = de(ee, j), Le = Oe.length; Le--;) xe = ii(ee, Oe[Le]), ee[xe] = !(me[xe] = Oe[Le])
                        }) : function(ee) {
                            return de(ee, 0, X)
                        }) : de
                    }
                },
                pseudos: {
                    not: pn(function(I) {
                        var j = [],
                            X = [],
                            de = z(I.replace(Ri, "$1"));
                        return de[_t] ? pn(function(ee, me, xe, Oe) {
                            for (var Le, ze = de(ee, null, Oe, []), Ue = ee.length; Ue--;)(Le = ze[Ue]) && (ee[Ue] = !(me[Ue] = Le))
                        }) : function(ee, me, xe) {
                            return j[0] = ee, de(j, null, xe, X), j[0] = null, !X.pop()
                        }
                    }),
                    has: pn(function(I) {
                        return function(j) {
                            return St(I, j).length > 0
                        }
                    }),
                    contains: pn(function(I) {
                        return I = I.replace(Rn, _n),
                            function(j) {
                                return (j.textContent || w(j)).indexOf(I) > -1
                            }
                    }),
                    lang: pn(function(I) {
                        return sa.test(I || "") || St.error("unsupported lang: " + I), I = I.replace(Rn, _n).toLowerCase(),
                            function(j) {
                                var X;
                                do
                                    if (X = st ? j.lang : j.getAttribute("xml:lang") || j.getAttribute("lang")) return X = X.toLowerCase(), X === I || X.indexOf(I + "-") === 0; while ((j = j.parentNode) && j.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(I) {
                        var j = r.location && r.location.hash;
                        return j && j.slice(1) === I.id
                    },
                    root: function(I) {
                        return I === Ge
                    },
                    focus: function(I) {
                        return I === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(I.type || I.href || ~I.tabIndex)
                    },
                    enabled: Bs(!1),
                    disabled: Bs(!0),
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
                        return la.test(I.nodeName)
                    },
                    input: function(I) {
                        return aa.test(I.nodeName)
                    },
                    button: function(I) {
                        var j = I.nodeName.toLowerCase();
                        return j === "input" && I.type === "button" || j === "button"
                    },
                    text: function(I) {
                        var j;
                        return I.nodeName.toLowerCase() === "input" && I.type === "text" && ((j = I.getAttribute("type")) == null || j.toLowerCase() === "text")
                    },
                    first: In(function() {
                        return [0]
                    }),
                    last: In(function(I, j) {
                        return [j - 1]
                    }),
                    eq: In(function(I, j, X) {
                        return [X < 0 ? X + j : X]
                    }),
                    even: In(function(I, j) {
                        for (var X = 0; X < j; X += 2) I.push(X);
                        return I
                    }),
                    odd: In(function(I, j) {
                        for (var X = 1; X < j; X += 2) I.push(X);
                        return I
                    }),
                    lt: In(function(I, j, X) {
                        for (var de = X < 0 ? X + j : X > j ? j : X; --de >= 0;) I.push(de);
                        return I
                    }),
                    gt: In(function(I, j, X) {
                        for (var de = X < 0 ? X + j : X; ++de < j;) I.push(de);
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
                }) p.pseudos[s] = ha(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[s] = da(s);

            function $s() {}
            $s.prototype = p.filters = p.pseudos, p.setFilters = new $s, T = St.tokenize = function(I, j) {
                var X, de, ee, me, xe, Oe, Le, ze = Oi[I + " "];
                if (ze) return j ? 0 : ze.slice(0);
                for (xe = I, Oe = [], Le = p.preFilter; xe;) {
                    (!X || (de = Ls.exec(xe))) && (de && (xe = xe.slice(de[0].length) || xe), Oe.push(ee = [])), X = !1, (de = Ps.exec(xe)) && (X = de.shift(), ee.push({
                        value: X,
                        type: de[0].replace(Ri, " ")
                    }), xe = xe.slice(X.length));
                    for (me in p.filter)(de = Zi[me].exec(xe)) && (!Le[me] || (de = Le[me](de))) && (X = de.shift(), ee.push({
                        value: X,
                        type: me,
                        matches: de
                    }), xe = xe.slice(X.length));
                    if (!X) break
                }
                return j ? xe.length : xe ? St.error(I) : Oi(I, Oe).slice(0)
            };

            function ir(I) {
                for (var j = 0, X = I.length, de = ""; j < X; j++) de += I[j].value;
                return de
            }

            function rr(I, j, X) {
                var de = j.dir,
                    ee = j.next,
                    me = ee || de,
                    xe = X && me === "parentNode",
                    Oe = ft++;
                return j.first ? function(Le, ze, Ue) {
                    for (; Le = Le[de];)
                        if (Le.nodeType === 1 || xe) return I(Le, ze, Ue);
                    return !1
                } : function(Le, ze, Ue) {
                    var Xe, ht, Tt, qe = [ln, Oe];
                    if (Ue) {
                        for (; Le = Le[de];)
                            if ((Le.nodeType === 1 || xe) && I(Le, ze, Ue)) return !0
                    } else
                        for (; Le = Le[de];)
                            if (Le.nodeType === 1 || xe)
                                if (Tt = Le[_t] || (Le[_t] = {}), ht = Tt[Le.uniqueID] || (Tt[Le.uniqueID] = {}), ee && ee === Le.nodeName.toLowerCase()) Le = Le[de] || Le;
                                else {
                                    if ((Xe = ht[me]) && Xe[0] === ln && Xe[1] === Oe) return qe[2] = Xe[2];
                                    if (ht[me] = qe, qe[2] = I(Le, ze, Ue)) return !0
                                } return !1
                }
            }

            function sr(I) {
                return I.length > 1 ? function(j, X, de) {
                    for (var ee = I.length; ee--;)
                        if (!I[ee](j, X, de)) return !1;
                    return !0
                } : I[0]
            }

            function fa(I, j, X) {
                for (var de = 0, ee = j.length; de < ee; de++) St(I, j[de], X);
                return X
            }

            function or(I, j, X, de, ee) {
                for (var me, xe = [], Oe = 0, Le = I.length, ze = j != null; Oe < Le; Oe++)(me = I[Oe]) && (!X || X(me, de, ee)) && (xe.push(me), ze && j.push(Oe));
                return xe
            }

            function Qr(I, j, X, de, ee, me) {
                return de && !de[_t] && (de = Qr(de)), ee && !ee[_t] && (ee = Qr(ee, me)), pn(function(xe, Oe, Le, ze) {
                    var Ue, Xe, ht, Tt = [],
                        qe = [],
                        Ht = Oe.length,
                        Zt = xe || fa(j || "*", Le.nodeType ? [Le] : Le, []),
                        gn = I && (xe || !j) ? or(Zt, Tt, I, Le, ze) : Zt,
                        At = X ? ee || (xe ? I : Ht || de) ? [] : Oe : gn;
                    if (X && X(gn, At, Le, ze), de)
                        for (Ue = or(At, qe), de(Ue, [], Le, ze), Xe = Ue.length; Xe--;)(ht = Ue[Xe]) && (At[qe[Xe]] = !(gn[qe[Xe]] = ht));
                    if (xe) {
                        if (ee || I) {
                            if (ee) {
                                for (Ue = [], Xe = At.length; Xe--;)(ht = At[Xe]) && Ue.push(gn[Xe] = ht);
                                ee(null, At = [], Ue, ze)
                            }
                            for (Xe = At.length; Xe--;)(ht = At[Xe]) && (Ue = ee ? ii(xe, ht) : Tt[Xe]) > -1 && (xe[Ue] = !(Oe[Ue] = ht))
                        }
                    } else At = or(At === Oe ? At.splice(Ht, At.length) : At), ee ? ee(null, Oe, At, ze) : En.apply(Oe, At)
                })
            }

            function Zr(I) {
                for (var j, X, de, ee = I.length, me = p.relative[I[0].type], xe = me || p.relative[" "], Oe = me ? 1 : 0, Le = rr(function(Xe) {
                        return Xe === j
                    }, xe, !0), ze = rr(function(Xe) {
                        return ii(j, Xe) > -1
                    }, xe, !0), Ue = [function(Xe, ht, Tt) {
                        var qe = !me && (Tt || ht !== Z) || ((j = ht).nodeType ? Le(Xe, ht, Tt) : ze(Xe, ht, Tt));
                        return j = null, qe
                    }]; Oe < ee; Oe++)
                    if (X = p.relative[I[Oe].type]) Ue = [rr(sr(Ue), X)];
                    else {
                        if (X = p.filter[I[Oe].type].apply(null, I[Oe].matches), X[_t]) {
                            for (de = ++Oe; de < ee && !p.relative[I[de].type]; de++);
                            return Qr(Oe > 1 && sr(Ue), Oe > 1 && ir(I.slice(0, Oe - 1).concat({
                                value: I[Oe - 2].type === " " ? "*" : ""
                            })).replace(Ri, "$1"), X, Oe < de && Zr(I.slice(Oe, de)), de < ee && Zr(I = I.slice(de)), de < ee && ir(I))
                        }
                        Ue.push(X)
                    } return sr(Ue)
            }

            function Fs(I, j) {
                var X = j.length > 0,
                    de = I.length > 0,
                    ee = function(me, xe, Oe, Le, ze) {
                        var Ue, Xe, ht, Tt = 0,
                            qe = "0",
                            Ht = me && [],
                            Zt = [],
                            gn = Z,
                            At = me || de && p.find.TAG("*", ze),
                            c = ln += gn == null ? 1 : Math.random() || .1,
                            d = At.length;
                        for (ze && (Z = xe == ce || xe || ze); qe !== d && (Ue = At[qe]) != null; qe++) {
                            if (de && Ue) {
                                for (Xe = 0, !xe && Ue.ownerDocument != ce && (ne(Ue), Oe = !st); ht = I[Xe++];)
                                    if (ht(Ue, xe || ce, Oe)) {
                                        Le.push(Ue);
                                        break
                                    } ze && (ln = c)
                            }
                            X && ((Ue = !ht && Ue) && Tt--, me && Ht.push(Ue))
                        }
                        if (Tt += qe, X && qe !== Tt) {
                            for (Xe = 0; ht = j[Xe++];) ht(Ht, Zt, xe, Oe);
                            if (me) {
                                if (Tt > 0)
                                    for (; qe--;) Ht[qe] || Zt[qe] || (Zt[qe] = Vn.call(Le));
                                Zt = or(Zt)
                            }
                            En.apply(Le, Zt), ze && !me && Zt.length > 0 && Tt + j.length > 1 && St.uniqueSort(Le)
                        }
                        return ze && (ln = c, Z = gn), Ht
                    };
                return X ? pn(ee) : ee
            }
            return z = St.compile = function(I, j) {
                var X, de = [],
                    ee = [],
                    me = Qi[I + " "];
                if (!me) {
                    for (j || (j = T(I)), X = j.length; X--;) me = Zr(j[X]), me[_t] ? de.push(me) : ee.push(me);
                    me = Qi(I, Fs(ee, de)), me.selector = I
                }
                return me
            }, H = St.select = function(I, j, X, de) {
                var ee, me, xe, Oe, Le, ze = typeof I == "function" && I,
                    Ue = !de && T(I = ze.selector || I);
                if (X = X || [], Ue.length === 1) {
                    if (me = Ue[0] = Ue[0].slice(0), me.length > 2 && (xe = me[0]).type === "ID" && j.nodeType === 9 && st && p.relative[me[1].type]) {
                        if (j = (p.find.ID(xe.matches[0].replace(Rn, _n), j) || [])[0], j) ze && (j = j.parentNode);
                        else return X;
                        I = I.slice(me.shift().value.length)
                    }
                    for (ee = Zi.needsContext.test(I) ? 0 : me.length; ee-- && (xe = me[ee], !p.relative[Oe = xe.type]);)
                        if ((Le = p.find[Oe]) && (de = Le(xe.matches[0].replace(Rn, _n), Yr.test(me[0].type) && Jr(j.parentNode) || j))) {
                            if (me.splice(ee, 1), I = de.length && ir(me), !I) return En.apply(X, de), X;
                            break
                        }
                }
                return (ze || z(I, Ue))(de, j, !st, X, !j || Yr.test(I) && Jr(j.parentNode) || j), X
            }, u.sortStable = _t.split("").sort(ti).join("") === _t, u.detectDuplicates = !!be, ne(), u.sortDetached = bn(function(I) {
                return I.compareDocumentPosition(ce.createElement("fieldset")) & 1
            }), bn(function(I) {
                return I.innerHTML = "<a href='#'></a>", I.firstChild.getAttribute("href") === "#"
            }) || tr("type|href|height|width", function(I, j, X) {
                if (!X) return I.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !bn(function(I) {
                return I.innerHTML = "<input/>", I.firstChild.setAttribute("value", ""), I.firstChild.getAttribute("value") === ""
            })) && tr("value", function(I, j, X) {
                if (!X && I.nodeName.toLowerCase() === "input") return I.defaultValue
            }), bn(function(I) {
                return I.getAttribute("disabled") == null
            }) || tr(qr, function(I, j, X) {
                var de;
                if (!X) return I[j] === !0 ? j.toLowerCase() : (de = I.getAttributeNode(j)) && de.specified ? de.value : null
            }), St
        }(e);
        f.find = Ae, f.expr = Ae.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = Ae.uniqueSort, f.text = Ae.getText, f.isXMLDoc = Ae.isXML, f.contains = Ae.contains, f.escapeSelector = Ae.escape;
        var Pe = function(r, s, u) {
                for (var p = [], w = u !== void 0;
                    (r = r[s]) && r.nodeType !== 9;)
                    if (r.nodeType === 1) {
                        if (w && f(r).is(u)) break;
                        p.push(r)
                    } return p
            },
            at = function(r, s) {
                for (var u = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && u.push(r);
                return u
            },
            Be = f.expr.match.needsContext;

        function K(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function U(r, s, u) {
            return re(s) ? f.grep(r, function(p, w) {
                return !!s.call(p, w, p) !== u
            }) : s.nodeType ? f.grep(r, function(p) {
                return p === s !== u
            }) : typeof s != "string" ? f.grep(r, function(p) {
                return k.call(s, p) > -1 !== u
            }) : f.filter(s, r, u)
        }
        f.filter = function(r, s, u) {
            var p = s[0];
            return u && (r = ":not(" + r + ")"), s.length === 1 && p.nodeType === 1 ? f.find.matchesSelector(p, r) ? [p] : [] : f.find.matches(r, f.grep(s, function(w) {
                return w.nodeType === 1
            }))
        }, f.fn.extend({
            find: function(r) {
                var s, u, p = this.length,
                    w = this;
                if (typeof r != "string") return this.pushStack(f(r).filter(function() {
                    for (s = 0; s < p; s++)
                        if (f.contains(w[s], this)) return !0
                }));
                for (u = this.pushStack([]), s = 0; s < p; s++) f.find(r, w[s], u);
                return p > 1 ? f.uniqueSort(u) : u
            },
            filter: function(r) {
                return this.pushStack(U(this, r || [], !1))
            },
            not: function(r) {
                return this.pushStack(U(this, r || [], !0))
            },
            is: function(r) {
                return !!U(this, typeof r == "string" && Be.test(r) ? f(r) : r || [], !1).length
            }
        });
        var oe, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            we = f.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || oe, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Te.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof f ? s[0] : s, f.merge(this, f.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), je.test(p[1]) && f.isPlainObject(s))
                                for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return w = P.getElementById(p[2]), w && (this[0] = w, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (re(r)) return u.ready !== void 0 ? u.ready(r) : r(f)
                }
                return f.makeArray(r, this)
            };
        we.prototype = f.fn, oe = f(P);
        var ye = /^(?:parents|prev(?:Until|All))/,
            ue = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        f.fn.extend({
            has: function(r) {
                var s = f(r, this),
                    u = s.length;
                return this.filter(function() {
                    for (var p = 0; p < u; p++)
                        if (f.contains(this, s[p])) return !0
                })
            },
            closest: function(r, s) {
                var u, p = 0,
                    w = this.length,
                    x = [],
                    T = typeof r != "string" && f(r);
                if (!Be.test(r)) {
                    for (; p < w; p++)
                        for (u = this[p]; u && u !== s; u = u.parentNode)
                            if (u.nodeType < 11 && (T ? T.index(u) > -1 : u.nodeType === 1 && f.find.matchesSelector(u, r))) {
                                x.push(u);
                                break
                            }
                }
                return this.pushStack(x.length > 1 ? f.uniqueSort(x) : x)
            },
            index: function(r) {
                return r ? typeof r == "string" ? k.call(f(r), this[0]) : k.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(r, s) {
                return this.pushStack(f.uniqueSort(f.merge(this.get(), f(r, s))))
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
        f.each({
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
                return at((r.parentNode || {}).firstChild, r)
            },
            children: function(r) {
                return at(r.firstChild)
            },
            contents: function(r) {
                return r.contentDocument != null && o(r.contentDocument) ? r.contentDocument : (K(r, "template") && (r = r.content || r), f.merge([], r.childNodes))
            }
        }, function(r, s) {
            f.fn[r] = function(u, p) {
                var w = f.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = f.filter(p, w)), this.length > 1 && (ue[r] || f.uniqueSort(w), ye.test(r) && w.reverse()), this.pushStack(w)
            }
        });
        var ke = /[^\x20\t\r\n\f]+/g;

        function $e(r) {
            var s = {};
            return f.each(r.match(ke) || [], function(u, p) {
                s[p] = !0
            }), s
        }
        f.Callbacks = function(r) {
            r = typeof r == "string" ? $e(r) : f.extend({}, r);
            var s, u, p, w, x = [],
                T = [],
                z = -1,
                H = function() {
                    for (w = w || r.once, p = s = !0; T.length; z = -1)
                        for (u = T.shift(); ++z < x.length;) x[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = x.length, u = !1);
                    r.memory || (u = !1), s = !1, w && (u ? x = [] : x = "")
                },
                Z = {
                    add: function() {
                        return x && (u && !s && (z = x.length - 1, T.push(u)), function le(be) {
                            f.each(be, function(ne, ce) {
                                re(ce) ? (!r.unique || !Z.has(ce)) && x.push(ce) : ce && ce.length && se(ce) !== "string" && le(ce)
                            })
                        }(arguments), u && !s && H()), this
                    },
                    remove: function() {
                        return f.each(arguments, function(le, be) {
                            for (var ne;
                                (ne = f.inArray(be, x, ne)) > -1;) x.splice(ne, 1), ne <= z && z--
                        }), this
                    },
                    has: function(le) {
                        return le ? f.inArray(le, x) > -1 : x.length > 0
                    },
                    empty: function() {
                        return x && (x = []), this
                    },
                    disable: function() {
                        return w = T = [], x = u = "", this
                    },
                    disabled: function() {
                        return !x
                    },
                    lock: function() {
                        return w = T = [], !u && !s && (x = u = ""), this
                    },
                    locked: function() {
                        return !!w
                    },
                    fireWith: function(le, be) {
                        return w || (be = be || [], be = [le, be.slice ? be.slice() : be], T.push(be), s || H()), this
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
            } catch (x) {
                u.apply(void 0, [x])
            }
        }
        f.extend({
            Deferred: function(r) {
                var s = [
                        ["notify", "progress", f.Callbacks("memory"), f.Callbacks("memory"), 2],
                        ["resolve", "done", f.Callbacks("once memory"), f.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", f.Callbacks("once memory"), f.Callbacks("once memory"), 1, "rejected"]
                    ],
                    u = "pending",
                    p = {
                        state: function() {
                            return u
                        },
                        always: function() {
                            return w.done(arguments).fail(arguments), this
                        },
                        catch: function(x) {
                            return p.then(null, x)
                        },
                        pipe: function() {
                            var x = arguments;
                            return f.Deferred(function(T) {
                                f.each(s, function(z, H) {
                                    var Z = re(x[H[4]]) && x[H[4]];
                                    w[H[1]](function() {
                                        var le = Z && Z.apply(this, arguments);
                                        le && re(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[H[0] + "With"](this, Z ? [le] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, z) {
                            var H = 0;

                            function Z(le, be, ne, ce) {
                                return function() {
                                    var Ge = this,
                                        st = arguments,
                                        Fe = function() {
                                            var Nt, dn;
                                            if (!(le < H)) {
                                                if (Nt = ne.apply(Ge, st), Nt === be.promise()) throw new TypeError("Thenable self-resolution");
                                                dn = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, re(dn) ? ce ? dn.call(Nt, Z(H, be, Ke, ce), Z(H, be, dt, ce)) : (H++, dn.call(Nt, Z(H, be, Ke, ce), Z(H, be, dt, ce), Z(H, be, Ke, be.notifyWith))) : (ne !== Ke && (Ge = void 0, st = [Nt]), (ce || be.resolveWith)(Ge, st))
                                            }
                                        },
                                        zt = ce ? Fe : function() {
                                            try {
                                                Fe()
                                            } catch (Nt) {
                                                f.Deferred.exceptionHook && f.Deferred.exceptionHook(Nt, zt.stackTrace), le + 1 >= H && (ne !== dt && (Ge = void 0, st = [Nt]), be.rejectWith(Ge, st))
                                            }
                                        };
                                    le ? zt() : (f.Deferred.getStackHook && (zt.stackTrace = f.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return f.Deferred(function(le) {
                                s[0][3].add(Z(0, le, re(z) ? z : Ke, le.notifyWith)), s[1][3].add(Z(0, le, re(x) ? x : Ke)), s[2][3].add(Z(0, le, re(T) ? T : dt))
                            }).promise()
                        },
                        promise: function(x) {
                            return x != null ? f.extend(x, p) : p
                        }
                    },
                    w = {};
                return f.each(s, function(x, T) {
                    var z = T[2],
                        H = T[5];
                    p[T[1]] = z.add, H && z.add(function() {
                        u = H
                    }, s[3 - x][2].disable, s[3 - x][3].disable, s[0][2].lock, s[0][3].lock), z.add(T[3].fire), w[T[0]] = function() {
                        return w[T[0] + "With"](this === w ? void 0 : this, arguments), this
                    }, w[T[0] + "With"] = z.fireWith
                }), p.promise(w), r && r.call(w, w), w
            },
            when: function(r) {
                var s = arguments.length,
                    u = s,
                    p = Array(u),
                    w = h.call(arguments),
                    x = f.Deferred(),
                    T = function(z) {
                        return function(H) {
                            p[z] = this, w[z] = arguments.length > 1 ? h.call(arguments) : H, --s || x.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && (Bt(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(w[u] && w[u].then))) return x.then();
                for (; u--;) Bt(w[u], T(u), x.reject);
                return x.promise()
            }
        });
        var Gt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        f.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && Gt.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
        }, f.readyException = function(r) {
            e.setTimeout(function() {
                throw r
            })
        };
        var _ = f.Deferred();
        f.fn.ready = function(r) {
            return _.then(r).catch(function(s) {
                f.readyException(s)
            }), this
        }, f.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(r) {
                (r === !0 ? --f.readyWait : f.isReady) || (f.isReady = !0, !(r !== !0 && --f.readyWait > 0) && _.resolveWith(P, [f]))
            }
        }), f.ready.then = _.then;

        function l() {
            P.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), f.ready()
        }
        P.readyState === "complete" || P.readyState !== "loading" && !P.documentElement.doScroll ? e.setTimeout(f.ready) : (P.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(r, s, u, p, w, x, T) {
                var z = 0,
                    H = r.length,
                    Z = u == null;
                if (se(u) === "object") {
                    w = !0;
                    for (z in u) g(r, s, z, u[z], !0, x, T)
                } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(le, be, ne) {
                        return Z.call(f(le), ne)
                    })), s))
                    for (; z < H; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return w ? r : Z ? s.call(r) : H ? s(r[0], u) : x
            },
            S = /^-ms-/,
            R = /-([a-z])/g;

        function L(r, s) {
            return s.toUpperCase()
        }

        function V(r) {
            return r.replace(S, "ms-").replace(R, L)
        }
        var te = function(r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function Se() {
            this.expando = f.expando + Se.uid++
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
                if (typeof s == "string") w[V(s)] = u;
                else
                    for (p in s) w[V(p)] = s[p];
                return w
            },
            get: function(r, s) {
                return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][V(s)]
            },
            access: function(r, s, u) {
                return s === void 0 || s && typeof s == "string" && u === void 0 ? this.get(r, s) : (this.set(r, s, u), u !== void 0 ? u : s)
            },
            remove: function(r, s) {
                var u, p = r[this.expando];
                if (p !== void 0) {
                    if (s !== void 0)
                        for (Array.isArray(s) ? s = s.map(V) : (s = V(s), s = s in p ? [s] : s.match(ke) || []), u = s.length; u--;) delete p[s[u]];
                    (s === void 0 || f.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            },
            hasData: function(r) {
                var s = r[this.expando];
                return s !== void 0 && !f.isEmptyObject(s)
            }
        };
        var he = new Se,
            Ie = new Se,
            De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            it = /[A-Z]/g;

        function xt(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : De.test(r) ? JSON.parse(r) : r
        }

        function on(r, s, u) {
            var p;
            if (u === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(it, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                    try {
                        u = xt(u)
                    } catch {}
                    Ie.set(r, s, u)
                } else u = void 0;
            return u
        }
        f.extend({
            hasData: function(r) {
                return Ie.hasData(r) || he.hasData(r)
            },
            data: function(r, s, u) {
                return Ie.access(r, s, u)
            },
            removeData: function(r, s) {
                Ie.remove(r, s)
            },
            _data: function(r, s, u) {
                return he.access(r, s, u)
            },
            _removeData: function(r, s) {
                he.remove(r, s)
            }
        }), f.fn.extend({
            data: function(r, s) {
                var u, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = Ie.get(x), x.nodeType === 1 && !he.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = V(p.slice(5)), on(x, p, w[p])));
                        he.set(x, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    Ie.set(this, r)
                }) : g(this, function(z) {
                    var H;
                    if (x && z === void 0) return H = Ie.get(x, r), H !== void 0 || (H = on(x, r), H !== void 0) ? H : void 0;
                    this.each(function() {
                        Ie.set(this, r, z)
                    })
                }, null, s, arguments.length > 1, null, !0)
            },
            removeData: function(r) {
                return this.each(function() {
                    Ie.remove(this, r)
                })
            }
        }), f.extend({
            queue: function(r, s, u) {
                var p;
                if (r) return s = (s || "fx") + "queue", p = he.get(r, s), u && (!p || Array.isArray(u) ? p = he.access(r, s, f.makeArray(u)) : p.push(u)), p || []
            },
            dequeue: function(r, s) {
                s = s || "fx";
                var u = f.queue(r, s),
                    p = u.length,
                    w = u.shift(),
                    x = f._queueHooks(r, s),
                    T = function() {
                        f.dequeue(r, s)
                    };
                w === "inprogress" && (w = u.shift(), p--), w && (s === "fx" && u.unshift("inprogress"), delete x.stop, w.call(r, T, x)), !p && x && x.empty.fire()
            },
            _queueHooks: function(r, s) {
                var u = s + "queueHooks";
                return he.get(r, u) || he.access(r, u, {
                    empty: f.Callbacks("once memory").add(function() {
                        he.remove(r, [s + "queue", u])
                    })
                })
            }
        }), f.fn.extend({
            queue: function(r, s) {
                var u = 2;
                return typeof r != "string" && (s = r, r = "fx", u--), arguments.length < u ? f.queue(this[0], r) : s === void 0 ? this : this.each(function() {
                    var p = f.queue(this, r, s);
                    f._queueHooks(this, r), r === "fx" && p[0] !== "inprogress" && f.dequeue(this, r)
                })
            },
            dequeue: function(r) {
                return this.each(function() {
                    f.dequeue(this, r)
                })
            },
            clearQueue: function(r) {
                return this.queue(r || "fx", [])
            },
            promise: function(r, s) {
                var u, p = 1,
                    w = f.Deferred(),
                    x = this,
                    T = this.length,
                    z = function() {
                        --p || w.resolveWith(x, [x])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = he.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                return z(), w.promise(s)
            }
        });
        var lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wt = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"),
            Ct = ["Top", "Right", "Bottom", "Left"],
            Qt = P.documentElement,
            Je = function(r) {
                return f.contains(r.ownerDocument, r)
            },
            Lt = {
                composed: !0
            };
        Qt.getRootNode && (Je = function(r) {
            return f.contains(r.ownerDocument, r) || r.getRootNode(Lt) === r.ownerDocument
        });
        var F = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && f.css(r, "display") === "none"
        };

        function N(r, s, u, p) {
            var w, x, T = 20,
                z = p ? function() {
                    return p.cur()
                } : function() {
                    return f.css(r, s, "")
                },
                H = z(),
                Z = u && u[3] || (f.cssNumber[s] ? "" : "px"),
                le = r.nodeType && (f.cssNumber[s] || Z !== "px" && +H) && wt.exec(f.css(r, s));
            if (le && le[3] !== Z) {
                for (H = H / 2, Z = Z || le[3], le = +H || 1; T--;) f.style(r, s, le + Z), (1 - x) * (1 - (x = z() / H || .5)) <= 0 && (T = 0), le = le / x;
                le = le * 2, f.style(r, s, le + Z), u = u || []
            }
            return u && (le = +le || +H || 0, w = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = w)), w
        }
        var q = {};

        function D(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = q[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = f.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), q[p] = w, w)
        }

        function G(r, s) {
            for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = he.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && F(p) && (w[x] = D(p))) : u !== "none" && (w[x] = "none", he.set(p, "display", u)));
            for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
            return r
        }
        f.fn.extend({
            show: function() {
                return G(this, !0)
            },
            hide: function() {
                return G(this)
            },
            toggle: function(r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                    F(this) ? f(this).show() : f(this).hide()
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
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), Y.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", Y.option = !!s.lastChild
        })();
        var Ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, Y.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && K(r, s) ? f.merge([r], u) : u
        }

        function Ft(r, s) {
            for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
        }
        var Ye = /<|&#?\w+;/;

        function Pn(r, s, u, p, w) {
            for (var x, T, z, H, Z, le, be = s.createDocumentFragment(), ne = [], ce = 0, Ge = r.length; ce < Ge; ce++)
                if (x = r[ce], x || x === 0)
                    if (se(x) === "object") f.merge(ne, x.nodeType ? [x] : x);
                    else if (!Ye.test(x)) ne.push(s.createTextNode(x));
            else {
                for (T = T || be.appendChild(s.createElement("div")), z = (pe.exec(x) || ["", ""])[1].toLowerCase(), H = Ve[z] || Ve._default, T.innerHTML = H[1] + f.htmlPrefilter(x) + H[2], le = H[0]; le--;) T = T.lastChild;
                f.merge(ne, T.childNodes), T = be.firstChild, T.textContent = ""
            }
            for (be.textContent = "", ce = 0; x = ne[ce++];) {
                if (p && f.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (Z = Je(x), T = pt(be.appendChild(x), "script"), Z && Ft(T), u)
                    for (le = 0; x = T[le++];) Ne.test(x.type || "") && u.push(x)
            }
            return be
        }
        var $n = /^([^.]*)(?:\.(.+)|)/;

        function rt() {
            return !0
        }

        function Nn() {
            return !1
        }

        function bi(r, s) {
            return r === Ir() == (s === "focus")
        }

        function Ir() {
            try {
                return P.activeElement
            } catch {}
        }

        function On(r, s, u, p, w, x) {
            var T, z;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (z in s) On(r, z, u, p, s[z], x);
                return r
            }
            if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Nn;
            else if (!w) return r;
            return x === 1 && (T = w, w = function(H) {
                return f().off(H), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = f.guid++)), r.each(function() {
                f.event.add(this, s, w, p, u)
            })
        }
        f.event = {
            global: {},
            add: function(r, s, u, p, w) {
                var x, T, z, H, Z, le, be, ne, ce, Ge, st, Fe = he.get(r);
                if (!!te(r))
                    for (u.handler && (x = u, u = x.handler, w = x.selector), w && f.find.matchesSelector(Qt, w), u.guid || (u.guid = f.guid++), (H = Fe.events) || (H = Fe.events = Object.create(null)), (T = Fe.handle) || (T = Fe.handle = function(zt) {
                            return typeof f < "u" && f.event.triggered !== zt.type ? f.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(ke) || [""], Z = s.length; Z--;) z = $n.exec(s[Z]) || [], ce = st = z[1], Ge = (z[2] || "").split(".").sort(), ce && (be = f.event.special[ce] || {}, ce = (w ? be.delegateType : be.bindType) || ce, be = f.event.special[ce] || {}, le = f.extend({
                        type: ce,
                        origType: st,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && f.expr.match.needsContext.test(w),
                        namespace: Ge.join(".")
                    }, x), (ne = H[ce]) || (ne = H[ce] = [], ne.delegateCount = 0, (!be.setup || be.setup.call(r, p, Ge, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), be.add && (be.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), f.event.global[ce] = !0)
            },
            remove: function(r, s, u, p, w) {
                var x, T, z, H, Z, le, be, ne, ce, Ge, st, Fe = he.hasData(r) && he.get(r);
                if (!(!Fe || !(H = Fe.events))) {
                    for (s = (s || "").match(ke) || [""], Z = s.length; Z--;) {
                        if (z = $n.exec(s[Z]) || [], ce = st = z[1], Ge = (z[2] || "").split(".").sort(), !ce) {
                            for (ce in H) f.event.remove(r, ce + s[Z], u, p, !0);
                            continue
                        }
                        for (be = f.event.special[ce] || {}, ce = (p ? be.delegateType : be.bindType) || ce, ne = H[ce] || [], z = z[2] && new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) le = ne[x], (w || st === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(x, 1), le.selector && ne.delegateCount--, be.remove && be.remove.call(r, le));
                        T && !ne.length && ((!be.teardown || be.teardown.call(r, Ge, Fe.handle) === !1) && f.removeEvent(r, ce, Fe.handle), delete H[ce])
                    }
                    f.isEmptyObject(H) && he.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, x, T, z = new Array(arguments.length),
                    H = f.event.fix(r),
                    Z = (he.get(this, "events") || Object.create(null))[H.type] || [],
                    le = f.event.special[H.type] || {};
                for (z[0] = H, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (H.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, H) === !1)) {
                    for (T = f.event.handlers.call(this, H, Z), s = 0;
                        (w = T[s++]) && !H.isPropagationStopped();)
                        for (H.currentTarget = w.elem, u = 0;
                            (x = w.handlers[u++]) && !H.isImmediatePropagationStopped();)(!H.rnamespace || x.namespace === !1 || H.rnamespace.test(x.namespace)) && (H.handleObj = x, H.data = x.data, p = ((f.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, z), p !== void 0 && (H.result = p) === !1 && (H.preventDefault(), H.stopPropagation()));
                    return le.postDispatch && le.postDispatch.call(this, H), H.result
                }
            },
            handlers: function(r, s) {
                var u, p, w, x, T, z = [],
                    H = s.delegateCount,
                    Z = r.target;
                if (H && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; Z !== this; Z = Z.parentNode || this)
                        if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                            for (x = [], T = {}, u = 0; u < H; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? f(w, this).index(Z) > -1 : f.find(w, this, null, [Z]).length), T[w] && x.push(p);
                            x.length && z.push({
                                elem: Z,
                                handlers: x
                            })
                        }
                }
                return Z = this, H < s.length && z.push({
                    elem: Z,
                    handlers: s.slice(H)
                }), z
            },
            addProp: function(r, s) {
                Object.defineProperty(f.Event.prototype, r, {
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
                return r[f.expando] ? r : new f.Event(r)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(r) {
                        var s = this || r;
                        return fe.test(s.type) && s.click && K(s, "input") && an(s, "click", rt), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return fe.test(s.type) && s.click && K(s, "input") && an(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return fe.test(s.type) && s.click && K(s, "input") && he.get(s, "click") || K(s, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(r) {
                        r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result)
                    }
                }
            }
        };

        function an(r, s, u) {
            if (!u) {
                he.get(r, s) === void 0 && f.event.add(r, s, rt);
                return
            }
            he.set(r, s, !1), f.event.add(r, s, {
                namespace: !1,
                handler: function(p) {
                    var w, x, T = he.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(f.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = h.call(arguments), he.set(this, s, T), w = u(this, s), this[s](), x = he.get(this, s), T !== x || w ? he.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
                    } else T.length && (he.set(this, s, {
                        value: f.event.trigger(f.extend(T[0], f.Event.prototype), T.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        f.removeEvent = function(r, s, u) {
            r.removeEventListener && r.removeEventListener(s, u)
        }, f.Event = function(r, s) {
            if (!(this instanceof f.Event)) return new f.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? rt : Nn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && f.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            constructor: f.Event,
            isDefaultPrevented: Nn,
            isPropagationStopped: Nn,
            isImmediatePropagationStopped: Nn,
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
        }, f.each({
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
        }, f.event.addProp), f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            f.event.special[r] = {
                setup: function() {
                    return an(this, r, bi), !1
                },
                trigger: function() {
                    return an(this, r), !0
                },
                _default: function() {
                    return !0
                },
                delegateType: s
            }
        }), f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(r, s) {
            f.event.special[r] = {
                delegateType: s,
                bindType: s,
                handle: function(u) {
                    var p, w = this,
                        x = u.relatedTarget,
                        T = u.handleObj;
                    return (!x || x !== w && !f.contains(w, x)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = s), p
                }
            }
        }), f.fn.extend({
            on: function(r, s, u, p) {
                return On(this, r, s, u, p)
            },
            one: function(r, s, u, p) {
                return On(this, r, s, u, p, 1)
            },
            off: function(r, s, u) {
                var p, w;
                if (r && r.preventDefault && r.handleObj) return p = r.handleObj, f(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof r == "object") {
                    for (w in r) this.off(w, s, r[w]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Nn), this.each(function() {
                    f.event.remove(this, r, u, s)
                })
            }
        });
        var Mr = /<script|<style|<link/i,
            Dr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ci = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ui(r, s) {
            return K(r, "table") && K(s.nodeType !== 11 ? s : s.firstChild, "tr") && f(r).children("tbody")[0] || r
        }

        function xi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function Ei(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function Gi(r, s) {
            var u, p, w, x, T, z, H;
            if (s.nodeType === 1) {
                if (he.hasData(r) && (x = he.get(r), H = x.events, H)) {
                    he.remove(s, "handle events");
                    for (w in H)
                        for (u = 0, p = H[w].length; u < p; u++) f.event.add(s, w, H[w][u])
                }
                Ie.hasData(r) && (T = Ie.access(r), z = f.extend({}, T), Ie.set(s, z))
            }
        }

        function Wi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function yn(r, s, u, p) {
            s = m(s);
            var w, x, T, z, H, Z, le = 0,
                be = r.length,
                ne = be - 1,
                ce = s[0],
                Ge = re(ce);
            if (Ge || be > 1 && typeof ce == "string" && !Y.checkClone && Dr.test(ce)) return r.each(function(st) {
                var Fe = r.eq(st);
                Ge && (s[0] = ce.call(this, st, Fe.html())), yn(Fe, s, u, p)
            });
            if (be && (w = Pn(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = f.map(pt(w, "script"), xi), z = T.length; le < be; le++) H = w, le !== ne && (H = f.clone(H, !0, !0), z && f.merge(T, pt(H, "script"))), u.call(r[le], H, le);
                if (z)
                    for (Z = T[T.length - 1].ownerDocument, f.map(T, Ei), le = 0; le < z; le++) H = T[le], Ne.test(H.type || "") && !he.access(H, "globalEval") && f.contains(Z, H) && (H.src && (H.type || "").toLowerCase() !== "module" ? f._evalUrl && !H.noModule && f._evalUrl(H.src, {
                        nonce: H.nonce || H.getAttribute("nonce")
                    }, Z) : ae(H.textContent.replace(Ci, ""), H, Z))
            }
            return r
        }

        function qi(r, s, u) {
            for (var p, w = s ? f.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !u && p.nodeType === 1 && f.cleanData(pt(p)), p.parentNode && (u && Je(p) && Ft(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        f.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, x, T, z = r.cloneNode(!0),
                    H = Je(r);
                if (!Y.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !f.isXMLDoc(r))
                    for (T = pt(z), x = pt(r), p = 0, w = x.length; p < w; p++) Wi(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || pt(r), T = T || pt(z), p = 0, w = x.length; p < w; p++) Gi(x[p], T[p]);
                    else Gi(r, z);
                return T = pt(z, "script"), T.length > 0 && Ft(T, !H && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, w = f.event.special, x = 0;
                    (u = r[x]) !== void 0; x++)
                    if (te(u)) {
                        if (s = u[he.expando]) {
                            if (s.events)
                                for (p in s.events) w[p] ? f.event.remove(u, p) : f.removeEvent(u, p, s.handle);
                            u[he.expando] = void 0
                        }
                        u[Ie.expando] && (u[Ie.expando] = void 0)
                    }
            }
        }), f.fn.extend({
            detach: function(r) {
                return qi(this, r, !0)
            },
            remove: function(r) {
                return qi(this, r)
            },
            text: function(r) {
                return g(this, function(s) {
                    return s === void 0 ? f.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = s)
                    })
                }, null, r, arguments.length)
            },
            append: function() {
                return yn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Ui(this, r);
                        s.appendChild(r)
                    }
                })
            },
            prepend: function() {
                return yn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Ui(this, r);
                        s.insertBefore(r, s.firstChild)
                    }
                })
            },
            before: function() {
                return yn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this)
                })
            },
            after: function() {
                return yn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this.nextSibling)
                })
            },
            empty: function() {
                for (var r, s = 0;
                    (r = this[s]) != null; s++) r.nodeType === 1 && (f.cleanData(pt(r, !1)), r.textContent = "");
                return this
            },
            clone: function(r, s) {
                return r = r == null ? !1 : r, s = s == null ? r : s, this.map(function() {
                    return f.clone(this, r, s)
                })
            },
            html: function(r) {
                return g(this, function(s) {
                    var u = this[0] || {},
                        p = 0,
                        w = this.length;
                    if (s === void 0 && u.nodeType === 1) return u.innerHTML;
                    if (typeof s == "string" && !Mr.test(s) && !Ve[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = f.htmlPrefilter(s);
                        try {
                            for (; p < w; p++) u = this[p] || {}, u.nodeType === 1 && (f.cleanData(pt(u, !1)), u.innerHTML = s);
                            u = 0
                        } catch {}
                    }
                    u && this.empty().append(s)
                }, null, r, arguments.length)
            },
            replaceWith: function() {
                var r = [];
                return yn(this, arguments, function(s) {
                    var u = this.parentNode;
                    f.inArray(this, r) < 0 && (f.cleanData(pt(this)), u && u.replaceChild(s, this))
                }, r)
            }
        }), f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(r, s) {
            f.fn[r] = function(u) {
                for (var p, w = [], x = f(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), f(x[z])[s](p), E.apply(w, p.get());
                return this.pushStack(w)
            }
        });
        var _i = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"),
            Xn = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Xi = function(r, s, u) {
                var p, w, x = {};
                for (w in s) x[w] = r.style[w], r.style[w] = s[w];
                p = u.call(r);
                for (w in s) r.style[w] = x[w];
                return p
            },
            Si = new RegExp(Ct.join("|"), "i");
        (function() {
            function r() {
                if (!!Z) {
                    H.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Qt.appendChild(H).appendChild(Z);
                    var le = e.getComputedStyle(Z);
                    u = le.top !== "1%", z = s(le.marginLeft) === 12, Z.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Qt.removeChild(H), Z = null
                }
            }

            function s(le) {
                return Math.round(parseFloat(le))
            }
            var u, p, w, x, T, z, H = P.createElement("div"),
                Z = P.createElement("div");
            !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = Z.style.backgroundClip === "content-box", f.extend(Y, {
                boxSizingReliable: function() {
                    return r(), p
                },
                pixelBoxStyles: function() {
                    return r(), x
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
                    var le, be, ne, ce;
                    return T == null && (le = P.createElement("table"), be = P.createElement("tr"), ne = P.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", be.style.cssText = "border:1px solid", be.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Qt.appendChild(le).appendChild(be).appendChild(ne), ce = e.getComputedStyle(be), T = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === be.offsetHeight, Qt.removeChild(le)), T
                }
            }))
        })();

        function et(r, s, u) {
            var p, w, x, T, z = r.style;
            return u = u || Xn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = f.style(r, s)), !Y.pixelBoxStyles() && _i.test(T) && Si.test(s) && (p = z.width, w = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = x)), T !== void 0 ? T + "" : T
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
            C = P.createElement("div").style,
            O = {};

        function Q(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), u = a.length; u--;)
                if (r = a[u] + s, r in C) return r
        }

        function Ce(r) {
            var s = f.cssProps[r] || O[r];
            return s || (r in C ? r : O[r] = Q(r) || r)
        }
        var We = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Yn = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Fn(r, s, u) {
            var p = wt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function Kn(r, s, u, p, w, x) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                H = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (H += f.css(r, u + Ct[T], !0, w)), p ? (u === "content" && (H -= f.css(r, "padding" + Ct[T], !0, w)), u !== "margin" && (H -= f.css(r, "border" + Ct[T] + "Width", !0, w))) : (H += f.css(r, "padding" + Ct[T], !0, w), u !== "padding" ? H += f.css(r, "border" + Ct[T] + "Width", !0, w) : z += f.css(r, "border" + Ct[T] + "Width", !0, w));
            return !p && x >= 0 && (H += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - H - z - .5)) || 0), H
        }

        function Lr(r, s, u) {
            var p = Xn(r),
                w = !Y.boxSizingReliable() || u,
                x = w && f.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                z = et(r, s, p),
                H = "offset" + s[0].toUpperCase() + s.slice(1);
            if (_i.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!Y.boxSizingReliable() && x || !Y.reliableTrDimensions() && K(r, "tr") || z === "auto" || !parseFloat(z) && f.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = f.css(r, "boxSizing", !1, p) === "border-box", T = H in r, T && (z = r[H])), z = parseFloat(z) || 0, z + Kn(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
        }
        f.extend({
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
                    var w, x, T, z = V(s),
                        H = It.test(s),
                        Z = r.style;
                    if (H || (s = Ce(z)), T = f.cssHooks[s] || f.cssHooks[z], u !== void 0) {
                        if (x = typeof u, x === "string" && (w = wt.exec(u)) && w[1] && (u = N(r, s, w), x = "number"), u == null || u !== u) return;
                        x === "number" && !H && (u += w && w[3] || (f.cssNumber[z] ? "" : "px")), !Y.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (H ? Z.setProperty(s, u) : Z[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                }
            },
            css: function(r, s, u, p) {
                var w, x, T, z = V(s),
                    H = It.test(s);
                return H || (s = Ce(z)), T = f.cssHooks[s] || f.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = et(r, s, p)), w === "normal" && s in Yn && (w = Yn[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), f.each(["height", "width"], function(r, s) {
            f.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return We.test(f.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Xi(u, Xt, function() {
                        return Lr(u, s, w)
                    }) : Lr(u, s, w)
                },
                set: function(u, p, w) {
                    var x, T = Xn(u),
                        z = !Y.scrollboxSize() && T.position === "absolute",
                        H = z || w,
                        Z = H && f.css(u, "boxSizing", !1, T) === "border-box",
                        le = w ? Kn(u, s, w, Z, T) : 0;
                    return Z && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Kn(u, s, "border", !1, T) - .5)), le && (x = wt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = f.css(u, s)), Fn(u, p, le)
                }
            }
        }), f.cssHooks.marginLeft = y(Y.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(et(r, "marginLeft")) || r.getBoundingClientRect().left - Xi(r, {
                marginLeft: 0
            }, function() {
                return r.getBoundingClientRect().left
            })) + "px"
        }), f.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, s) {
            f.cssHooks[r + s] = {
                expand: function(u) {
                    for (var p = 0, w = {}, x = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) w[r + Ct[p] + s] = x[p] || x[p - 2] || x[0];
                    return w
                }
            }, r !== "margin" && (f.cssHooks[r + s].set = Fn)
        }), f.fn.extend({
            css: function(r, s) {
                return g(this, function(u, p, w) {
                    var x, T, z = {},
                        H = 0;
                    if (Array.isArray(p)) {
                        for (x = Xn(u), T = p.length; H < T; H++) z[p[H]] = f.css(u, p[H], !1, x);
                        return z
                    }
                    return w !== void 0 ? f.style(u, p, w) : f.css(u, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Yt(r, s, u, p, w) {
            return new Yt.prototype.init(r, s, u, p, w)
        }
        f.Tween = Yt, Yt.prototype = {
            constructor: Yt,
            init: function(r, s, u, p, w, x) {
                this.elem = r, this.prop = u, this.easing = w || f.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (f.cssNumber[u] ? "" : "px")
            },
            cur: function() {
                var r = Yt.propHooks[this.prop];
                return r && r.get ? r.get(this) : Yt.propHooks._default.get(this)
            },
            run: function(r) {
                var s, u = Yt.propHooks[this.prop];
                return this.options.duration ? this.pos = s = f.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : Yt.propHooks._default.set(this), this
            }
        }, Yt.prototype.init.prototype = Yt.prototype, Yt.propHooks = {
            _default: {
                get: function(r) {
                    var s;
                    return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = f.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s)
                },
                set: function(r) {
                    f.fx.step[r.prop] ? f.fx.step[r.prop](r) : r.elem.nodeType === 1 && (f.cssHooks[r.prop] || r.elem.style[Ce(r.prop)] != null) ? f.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
                }
            }
        }, Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft = {
            set: function(r) {
                r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now)
            }
        }, f.easing = {
            linear: function(r) {
                return r
            },
            swing: function(r) {
                return .5 - Math.cos(r * Math.PI) / 2
            },
            _default: "swing"
        }, f.fx = Yt.prototype.init, f.fx.step = {};
        var jt, Yi, Bo = /^(?:toggle|show|hide)$/,
            $o = /queueHooks$/;

        function Pr() {
            Yi && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Pr) : e.setTimeout(Pr, f.fx.interval), f.fx.tick())
        }

        function Nr() {
            return e.setTimeout(function() {
                jt = void 0
            }), jt = Date.now()
        }

        function Ki(r, s) {
            var u, p = 0,
                w = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) u = Ct[p], w["margin" + u] = w["padding" + u] = r;
            return s && (w.opacity = w.width = r), w
        }

        function xs(r, s, u) {
            for (var p, w = (xn.tweeners[s] || []).concat(xn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                if (p = w[x].call(u, s, r)) return p
        }

        function Fo(r, s, u) {
            var p, w, x, T, z, H, Z, le, be = "width" in s || "height" in s,
                ne = this,
                ce = {},
                Ge = r.style,
                st = r.nodeType && F(r),
                Fe = he.get(r, "fxshow");
            u.queue || (T = f._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, ne.always(function() {
                ne.always(function() {
                    T.unqueued--, f.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], Bo.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (st ? "hide" : "show"))
                        if (w === "show" && Fe && Fe[p] !== void 0) st = !0;
                        else continue;
                    ce[p] = Fe && Fe[p] || f.style(r, p)
                } if (H = !f.isEmptyObject(s), !(!H && f.isEmptyObject(ce))) {
                be && r.nodeType === 1 && (u.overflow = [Ge.overflow, Ge.overflowX, Ge.overflowY], Z = Fe && Fe.display, Z == null && (Z = he.get(r, "display")), le = f.css(r, "display"), le === "none" && (Z ? le = Z : (G([r], !0), Z = r.style.display || Z, le = f.css(r, "display"), G([r]))), (le === "inline" || le === "inline-block" && Z != null) && f.css(r, "float") === "none" && (H || (ne.done(function() {
                    Ge.display = Z
                }), Z == null && (le = Ge.display, Z = le === "none" ? "" : le)), Ge.display = "inline-block")), u.overflow && (Ge.overflow = "hidden", ne.always(function() {
                    Ge.overflow = u.overflow[0], Ge.overflowX = u.overflow[1], Ge.overflowY = u.overflow[2]
                })), H = !1;
                for (p in ce) H || (Fe ? "hidden" in Fe && (st = Fe.hidden) : Fe = he.access(r, "fxshow", {
                    display: Z
                }), x && (Fe.hidden = !st), st && G([r], !0), ne.done(function() {
                    st || G([r]), he.remove(r, "fxshow");
                    for (p in ce) f.style(r, p, ce[p])
                })), H = xs(st ? Fe[p] : 0, p, ne), p in Fe || (Fe[p] = H.start, st && (H.end = H.start, H.start = 0))
            }
        }

        function Es(r, s) {
            var u, p, w, x, T;
            for (u in r)
                if (p = V(u), w = s[p], x = r[u], Array.isArray(x) && (w = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = f.cssHooks[p], T && "expand" in T) {
                    x = T.expand(x), delete r[p];
                    for (u in x) u in r || (r[u] = x[u], s[u] = w)
                } else s[p] = w
        }

        function xn(r, s, u) {
            var p, w, x = 0,
                T = xn.prefilters.length,
                z = f.Deferred().always(function() {
                    delete H.elem
                }),
                H = function() {
                    if (w) return !1;
                    for (var be = jt || Nr(), ne = Math.max(0, Z.startTime + Z.duration - be), ce = ne / Z.duration || 0, Ge = 1 - ce, st = 0, Fe = Z.tweens.length; st < Fe; st++) Z.tweens[st].run(Ge);
                    return z.notifyWith(r, [Z, Ge, ne]), Ge < 1 && Fe ? ne : (Fe || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
                },
                Z = z.promise({
                    elem: r,
                    props: f.extend({}, s),
                    opts: f.extend(!0, {
                        specialEasing: {},
                        easing: f.easing._default
                    }, u),
                    originalProperties: s,
                    originalOptions: u,
                    startTime: jt || Nr(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(be, ne) {
                        var ce = f.Tween(r, Z.opts, be, ne, Z.opts.specialEasing[be] || Z.opts.easing);
                        return Z.tweens.push(ce), ce
                    },
                    stop: function(be) {
                        var ne = 0,
                            ce = be ? Z.tweens.length : 0;
                        if (w) return this;
                        for (w = !0; ne < ce; ne++) Z.tweens[ne].run(1);
                        return be ? (z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z, be])) : z.rejectWith(r, [Z, be]), this
                    }
                }),
                le = Z.props;
            for (Es(le, Z.opts.specialEasing); x < T; x++)
                if (p = xn.prefilters[x].call(Z, r, le, Z.opts), p) return re(p.stop) && (f._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return f.map(le, xs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), f.fx.timer(f.extend(H, {
                elem: r,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        f.Animation = f.extend(xn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return N(u.elem, r, wt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    re(r) ? (s = r, r = ["*"]) : r = r.match(ke);
                    for (var u, p = 0, w = r.length; p < w; p++) u = r[p], xn.tweeners[u] = xn.tweeners[u] || [], xn.tweeners[u].unshift(s)
                },
                prefilters: [Fo],
                prefilter: function(r, s) {
                    s ? xn.prefilters.unshift(r) : xn.prefilters.push(r)
                }
            }), f.speed = function(r, s, u) {
                var p = r && typeof r == "object" ? f.extend({}, r) : {
                    complete: u || !u && s || re(r) && r,
                    duration: r,
                    easing: u && s || s && !re(s) && s
                };
                return f.fx.off ? p.duration = 0 : typeof p.duration != "number" && (p.duration in f.fx.speeds ? p.duration = f.fx.speeds[p.duration] : p.duration = f.fx.speeds._default), (p.queue == null || p.queue === !0) && (p.queue = "fx"), p.old = p.complete, p.complete = function() {
                    re(p.old) && p.old.call(this), p.queue && f.dequeue(this, p.queue)
                }, p
            }, f.fn.extend({
                fadeTo: function(r, s, u, p) {
                    return this.filter(F).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, u, p)
                },
                animate: function(r, s, u, p) {
                    var w = f.isEmptyObject(r),
                        x = f.speed(s, u, p),
                        T = function() {
                            var z = xn(this, f.extend({}, r), x);
                            (w || he.get(this, "finish")) && z.stop(!0)
                        };
                    return T.finish = T, w || x.queue === !1 ? this.each(T) : this.queue(x.queue, T)
                },
                stop: function(r, s, u) {
                    var p = function(w) {
                        var x = w.stop;
                        delete w.stop, x(u)
                    };
                    return typeof r != "string" && (u = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
                        var w = !0,
                            x = r != null && r + "queueHooks",
                            T = f.timers,
                            z = he.get(this);
                        if (x) z[x] && z[x].stop && p(z[x]);
                        else
                            for (x in z) z[x] && z[x].stop && $o.test(x) && p(z[x]);
                        for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), w = !1, T.splice(x, 1));
                        (w || !u) && f.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = he.get(this),
                            p = u[r + "queue"],
                            w = u[r + "queueHooks"],
                            x = f.timers,
                            T = p ? p.length : 0;
                        for (u.finish = !0, f.queue(this, r, []), w && w.stop && w.stop.call(this, !0), s = x.length; s--;) x[s].elem === this && x[s].queue === r && (x[s].anim.stop(!0), x.splice(s, 1));
                        for (s = 0; s < T; s++) p[s] && p[s].finish && p[s].finish.call(this);
                        delete u.finish
                    })
                }
            }), f.each(["toggle", "show", "hide"], function(r, s) {
                var u = f.fn[s];
                f.fn[s] = function(p, w, x) {
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Ki(s, !0), p, w, x)
                }
            }), f.each({
                slideDown: Ki("show"),
                slideUp: Ki("hide"),
                slideToggle: Ki("toggle"),
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
                f.fn[r] = function(u, p, w) {
                    return this.animate(s, u, p, w)
                }
            }), f.timers = [], f.fx.tick = function() {
                var r, s = 0,
                    u = f.timers;
                for (jt = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || f.fx.stop(), jt = void 0
            }, f.fx.timer = function(r) {
                f.timers.push(r), f.fx.start()
            }, f.fx.interval = 13, f.fx.start = function() {
                Yi || (Yi = !0, Pr())
            }, f.fx.stop = function() {
                Yi = null
            }, f.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, f.fn.delay = function(r, s) {
                return r = f.fx && f.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(u, p) {
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
                r.type = "checkbox", Y.checkOn = r.value !== "", Y.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", Y.radioValue = r.value === "t"
            }();
        var Vr, ki = f.expr.attrHandle;
        f.fn.extend({
            attr: function(r, s) {
                return g(this, f.attr, r, s, arguments.length > 1)
            },
            removeAttr: function(r) {
                return this.each(function() {
                    f.removeAttr(this, r)
                })
            }
        }), f.extend({
            attr: function(r, s, u) {
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) {
                    if (typeof r.getAttribute > "u") return f.prop(r, s, u);
                    if ((x !== 1 || !f.isXMLDoc(r)) && (w = f.attrHooks[s.toLowerCase()] || (f.expr.match.bool.test(s) ? Vr : void 0)), u !== void 0) {
                        if (u === null) {
                            f.removeAttr(r, s);
                            return
                        }
                        return w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : (r.setAttribute(s, u + ""), u)
                    }
                    return w && "get" in w && (p = w.get(r, s)) !== null ? p : (p = f.find.attr(r, s), p == null ? void 0 : p)
                }
            },
            attrHooks: {
                type: {
                    set: function(r, s) {
                        if (!Y.radioValue && s === "radio" && K(r, "input")) {
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
        }), Vr = {
            set: function(r, s, u) {
                return s === !1 ? f.removeAttr(r, u) : r.setAttribute(u, u), u
            }
        }, f.each(f.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var u = ki[s] || f.find.attr;
            ki[s] = function(p, w, x) {
                var T, z, H = w.toLowerCase();
                return x || (z = ki[H], ki[H] = T, T = u(p, w, x) != null ? H : null, ki[H] = z), T
            }
        });
        var jo = /^(?:input|select|textarea|button)$/i,
            zo = /^(?:a|area)$/i;
        f.fn.extend({
            prop: function(r, s) {
                return g(this, f.prop, r, s, arguments.length > 1)
            },
            removeProp: function(r) {
                return this.each(function() {
                    delete this[f.propFix[r] || r]
                })
            }
        }), f.extend({
            prop: function(r, s, u) {
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !f.isXMLDoc(r)) && (s = f.propFix[s] || s, w = f.propHooks[s]), u !== void 0 ? w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : r[s] = u : w && "get" in w && (p = w.get(r, s)) !== null ? p : r[s]
            },
            propHooks: {
                tabIndex: {
                    get: function(r) {
                        var s = f.find.attr(r, "tabindex");
                        return s ? parseInt(s, 10) : jo.test(r.nodeName) || zo.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), Y.optSelected || (f.propHooks.selected = {
            get: function(r) {
                var s = r.parentNode;
                return s && s.parentNode && s.parentNode.selectedIndex, null
            },
            set: function(r) {
                var s = r.parentNode;
                s && (s.selectedIndex, s.parentNode && s.parentNode.selectedIndex)
            }
        }), f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            f.propFix[this.toLowerCase()] = this
        });

        function Jn(r) {
            var s = r.match(ke) || [];
            return s.join(" ")
        }

        function Qn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Br(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(ke) || [] : []
        }
        f.fn.extend({
            addClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (re(r)) return this.each(function(Z) {
                    f(this).addClass(r.call(this, Z, Qn(this)))
                });
                if (s = Br(r), s.length) {
                    for (; u = this[H++];)
                        if (w = Qn(u), p = u.nodeType === 1 && " " + Jn(w) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            z = Jn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (re(r)) return this.each(function(Z) {
                    f(this).removeClass(r.call(this, Z, Qn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Br(r), s.length) {
                    for (; u = this[H++];)
                        if (w = Qn(u), p = u.nodeType === 1 && " " + Jn(w) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                            z = Jn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(w) {
                    f(this).toggleClass(r.call(this, w, Qn(this), s), s)
                }) : this.each(function() {
                    var w, x, T, z;
                    if (p)
                        for (x = 0, T = f(this), z = Br(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || u === "boolean") && (w = Qn(this), w && he.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : he.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, u, p = 0;
                for (s = " " + r + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + Jn(Qn(u)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var Ho = /\r/g;
        f.fn.extend({
            val: function(r) {
                var s, u, p, w = this[0];
                return arguments.length ? (p = re(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, f(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = f.map(T, function(z) {
                        return z == null ? "" : z + ""
                    })), s = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = f.valHooks[w.type] || f.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(Ho, "") : u == null ? "" : u)) : void 0
            }
        }), f.extend({
            valHooks: {
                option: {
                    get: function(r) {
                        var s = f.find.attr(r, "value");
                        return s != null ? s : Jn(f.text(r))
                    }
                },
                select: {
                    get: function(r) {
                        var s, u, p, w = r.options,
                            x = r.selectedIndex,
                            T = r.type === "select-one",
                            z = T ? null : [],
                            H = T ? x + 1 : w.length;
                        for (x < 0 ? p = H : p = T ? x : 0; p < H; p++)
                            if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !K(u.parentNode, "optgroup"))) {
                                if (s = f(u).val(), T) return s;
                                z.push(s)
                            } return z
                    },
                    set: function(r, s) {
                        for (var u, p, w = r.options, x = f.makeArray(s), T = w.length; T--;) p = w[T], (p.selected = f.inArray(f.valHooks.option.get(p), x) > -1) && (u = !0);
                        return u || (r.selectedIndex = -1), x
                    }
                }
            }
        }), f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = {
                set: function(r, s) {
                    if (Array.isArray(s)) return r.checked = f.inArray(f(r).val(), s) > -1
                }
            }, Y.checkOn || (f.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), Y.focusin = "onfocusin" in e;
        var $r = /^(?:focusinfocus|focusoutblur)$/,
            Zn = function(r) {
                r.stopPropagation()
            };
        f.extend(f.event, {
            trigger: function(r, s, u, p) {
                var w, x, T, z, H, Z, le, be, ne = [u || P],
                    ce = $.call(r, "type") ? r.type : r,
                    Ge = $.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = be = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !$r.test(ce + f.event.triggered) && (ce.indexOf(".") > -1 && (Ge = ce.split("."), ce = Ge.shift(), Ge.sort()), H = ce.indexOf(":") < 0 && "on" + ce, r = r[f.expando] ? r : new f.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ge.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : f.makeArray(s, [r]), le = f.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                    if (!p && !le.noBubble && !v(u)) {
                        for (z = le.delegateType || ce, $r.test(z + ce) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                        T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = ne[w++]) && !r.isPropagationStopped();) be = x, r.type = w > 1 ? z : le.bindType || ce, Z = (he.get(x, "events") || Object.create(null))[r.type] && he.get(x, "handle"), Z && Z.apply(x, s), Z = H && x[H], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), s) === !1) && te(u) && H && re(u[ce]) && !v(u) && (T = u[H], T && (u[H] = null), f.event.triggered = ce, r.isPropagationStopped() && be.addEventListener(ce, Zn), u[ce](), r.isPropagationStopped() && be.removeEventListener(ce, Zn), f.event.triggered = void 0, T && (u[H] = T)), r.result
                }
            },
            simulate: function(r, s, u) {
                var p = f.extend(new f.Event, u, {
                    type: r,
                    isSimulated: !0
                });
                f.event.trigger(p, null, s)
            }
        }), f.fn.extend({
            trigger: function(r, s) {
                return this.each(function() {
                    f.event.trigger(r, s, this)
                })
            },
            triggerHandler: function(r, s) {
                var u = this[0];
                if (u) return f.event.trigger(r, s, u, !0)
            }
        }), Y.focusin || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            var u = function(p) {
                f.event.simulate(s, p.target, f.event.fix(p))
            };
            f.event.special[s] = {
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
        var Ti = e.location,
            Fr = {
                guid: Date.now()
            },
            Ji = /\?/;
        f.parseXML = function(r) {
            var s, u;
            if (!r || typeof r != "string") return null;
            try {
                s = new e.DOMParser().parseFromString(r, "text/xml")
            } catch {}
            return u = s && s.getElementsByTagName("parsererror")[0], (!s || u) && f.error("Invalid XML: " + (u ? f.map(u.childNodes, function(p) {
                return p.textContent
            }).join(`
`) : r)), s
        };
        var Uo = /\[\]$/,
            _s = /\r?\n/g,
            Go = /^(?:submit|button|image|reset|file)$/i,
            Wo = /^(?:input|select|textarea|keygen)/i;

        function jr(r, s, u, p) {
            var w;
            if (Array.isArray(s)) f.each(s, function(x, T) {
                u || Uo.test(r) ? p(r, T) : jr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
            });
            else if (!u && se(s) === "object")
                for (w in s) jr(r + "[" + w + "]", s[w], u, p);
            else p(r, s)
        }
        f.param = function(r, s) {
            var u, p = [],
                w = function(x, T) {
                    var z = re(T) ? T() : T;
                    p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(z == null ? "" : z)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !f.isPlainObject(r)) f.each(r, function() {
                w(this.name, this.value)
            });
            else
                for (u in r) jr(u, r[u], s, w);
            return p.join("&")
        }, f.fn.extend({
            serialize: function() {
                return f.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var r = f.prop(this, "elements");
                    return r ? f.makeArray(r) : this
                }).filter(function() {
                    var r = this.type;
                    return this.name && !f(this).is(":disabled") && Wo.test(this.nodeName) && !Go.test(r) && (this.checked || !fe.test(r))
                }).map(function(r, s) {
                    var u = f(this).val();
                    return u == null ? null : Array.isArray(u) ? f.map(u, function(p) {
                        return {
                            name: s.name,
                            value: p.replace(_s, `\r
`)
                        }
                    }) : {
                        name: s.name,
                        value: u.replace(_s, `\r
`)
                    }
                }).get()
            }
        });
        var qo = /%20/g,
            Xo = /#.*$/,
            Yo = /([?&])_=[^&]*/,
            ei = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            Ss = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ko = /^(?:GET|HEAD)$/,
            Jo = /^\/\//,
            ks = {},
            zr = {},
            Ts = "*/".concat("*"),
            Hr = P.createElement("a");
        Hr.href = Ti.href;

        function As(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, w = 0,
                    x = s.toLowerCase().match(ke) || [];
                if (re(u))
                    for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function Os(r, s, u, p) {
            var w = {},
                x = r === zr;

            function T(z) {
                var H;
                return w[z] = !0, f.each(r[z] || [], function(Z, le) {
                    var be = le(s, u, p);
                    if (typeof be == "string" && !x && !w[be]) return s.dataTypes.unshift(be), T(be), !1;
                    if (x) return !(H = be)
                }), H
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function Ur(r, s) {
            var u, p, w = f.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && f.extend(!0, r, p), r
        }

        function Qo(r, s, u) {
            for (var p, w, x, T, z = r.contents, H = r.dataTypes; H[0] === "*";) H.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (w in z)
                    if (z[w] && z[w].test(p)) {
                        H.unshift(w);
                        break
                    }
            }
            if (H[0] in u) x = H[0];
            else {
                for (w in u) {
                    if (!H[0] || r.converters[w + " " + H[0]]) {
                        x = w;
                        break
                    }
                    T || (T = w)
                }
                x = x || T
            }
            if (x) return x !== H[0] && H.unshift(x), u[x]
        }

        function Zo(r, s, u, p) {
            var w, x, T, z, H, Z = {},
                le = r.dataTypes.slice();
            if (le[1])
                for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
            for (x = le.shift(); x;)
                if (r.responseFields[x] && (u[r.responseFields[x]] = s), !H && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), H = x, x = le.shift(), x) {
                    if (x === "*") x = H;
                    else if (H !== "*" && H !== x) {
                        if (T = Z[H + " " + x] || Z["* " + x], !T) {
                            for (w in Z)
                                if (z = w.split(" "), z[1] === x && (T = Z[H + " " + z[0]] || Z["* " + z[0]], T)) {
                                    T === !0 ? T = Z[w] : Z[w] !== !0 && (x = z[0], le.unshift(z[1]));
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
                                    error: T ? be : "No conversion from " + H + " to " + x
                                }
                            }
                    }
                } return {
                state: "success",
                data: s
            }
        }
        f.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ti.href,
                type: "GET",
                isLocal: Ss.test(Ti.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ts,
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
                    "text xml": f.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(r, s) {
                return s ? Ur(Ur(r, f.ajaxSettings), s) : Ur(f.ajaxSettings, r)
            },
            ajaxPrefilter: As(ks),
            ajaxTransport: As(zr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, w, x, T, z, H, Z, le, be, ne = f.ajaxSetup({}, s),
                    ce = ne.context || ne,
                    Ge = ne.context && (ce.nodeType || ce.jquery) ? f(ce) : f.event,
                    st = f.Deferred(),
                    Fe = f.Callbacks("once memory"),
                    zt = ne.statusCode || {},
                    Nt = {},
                    dn = {},
                    _t = "canceled",
                    tt = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Mt;
                            if (H) {
                                if (!x)
                                    for (x = {}; Mt = ei.exec(w);) x[Mt[1].toLowerCase() + " "] = (x[Mt[1].toLowerCase() + " "] || []).concat(Mt[2]);
                                Mt = x[ft.toLowerCase() + " "]
                            }
                            return Mt == null ? null : Mt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return H ? w : null
                        },
                        setRequestHeader: function(ft, Mt) {
                            return H == null && (ft = dn[ft.toLowerCase()] = dn[ft.toLowerCase()] || ft, Nt[ft] = Mt), this
                        },
                        overrideMimeType: function(ft) {
                            return H == null && (ne.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Mt;
                            if (ft)
                                if (H) tt.always(ft[tt.status]);
                                else
                                    for (Mt in ft) zt[Mt] = [zt[Mt], ft[Mt]];
                            return this
                        },
                        abort: function(ft) {
                            var Mt = ft || _t;
                            return u && u.abort(Mt), ln(0, Mt), this
                        }
                    };
                if (st.promise(tt), ne.url = ((r || ne.url || Ti.href) + "").replace(Jo, Ti.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(ke) || [""], ne.crossDomain == null) {
                    z = P.createElement("a");
                    try {
                        z.href = ne.url, z.href = z.href, ne.crossDomain = Hr.protocol + "//" + Hr.host != z.protocol + "//" + z.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = f.param(ne.data, ne.traditional)), Os(ks, ne, s, tt), H) return tt;
                Z = f.event && ne.global, Z && f.active++ === 0 && f.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Ko.test(ne.type), p = ne.url.replace(Xo, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(qo, "+")) : (be = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Ji.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Yo, "$1"), be = (Ji.test(p) ? "&" : "?") + "_=" + Fr.guid++ + be), ne.url = p + be), ne.ifModified && (f.lastModified[p] && tt.setRequestHeader("If-Modified-Since", f.lastModified[p]), f.etag[p] && tt.setRequestHeader("If-None-Match", f.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && tt.setRequestHeader("Content-Type", ne.contentType), tt.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + Ts + "; q=0.01" : "") : ne.accepts["*"]);
                for (le in ne.headers) tt.setRequestHeader(le, ne.headers[le]);
                if (ne.beforeSend && (ne.beforeSend.call(ce, tt, ne) === !1 || H)) return tt.abort();
                if (_t = "abort", Fe.add(ne.complete), tt.done(ne.success), tt.fail(ne.error), u = Os(zr, ne, s, tt), !u) ln(-1, "No Transport");
                else {
                    if (tt.readyState = 1, Z && Ge.trigger("ajaxSend", [tt, ne]), H) return tt;
                    ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                        tt.abort("timeout")
                    }, ne.timeout));
                    try {
                        H = !1, u.send(Nt, ln)
                    } catch (ft) {
                        if (H) throw ft;
                        ln(-1, ft)
                    }
                }

                function ln(ft, Mt, Oi, Qi) {
                    var fn, ti, ni, cn, Vn, wn = Mt;
                    H || (H = !0, T && e.clearTimeout(T), u = void 0, w = Qi || "", tt.readyState = ft > 0 ? 4 : 0, fn = ft >= 200 && ft < 300 || ft === 304, Oi && (cn = Qo(ne, tt, Oi)), !fn && f.inArray("script", ne.dataTypes) > -1 && f.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), cn = Zo(ne, cn, tt, fn), fn ? (ne.ifModified && (Vn = tt.getResponseHeader("Last-Modified"), Vn && (f.lastModified[p] = Vn), Vn = tt.getResponseHeader("etag"), Vn && (f.etag[p] = Vn)), ft === 204 || ne.type === "HEAD" ? wn = "nocontent" : ft === 304 ? wn = "notmodified" : (wn = cn.state, ti = cn.data, ni = cn.error, fn = !ni)) : (ni = wn, (ft || !wn) && (wn = "error", ft < 0 && (ft = 0))), tt.status = ft, tt.statusText = (Mt || wn) + "", fn ? st.resolveWith(ce, [ti, wn, tt]) : st.rejectWith(ce, [tt, wn, ni]), tt.statusCode(zt), zt = void 0, Z && Ge.trigger(fn ? "ajaxSuccess" : "ajaxError", [tt, ne, fn ? ti : ni]), Fe.fireWith(ce, [tt, wn]), Z && (Ge.trigger("ajaxComplete", [tt, ne]), --f.active || f.event.trigger("ajaxStop")))
                }
                return tt
            },
            getJSON: function(r, s, u) {
                return f.get(r, s, u, "json")
            },
            getScript: function(r, s) {
                return f.get(r, void 0, s, "script")
            }
        }), f.each(["get", "post"], function(r, s) {
            f[s] = function(u, p, w, x) {
                return re(p) && (x = x || w, w = p, p = void 0), f.ajax(f.extend({
                    url: u,
                    type: s,
                    dataType: x,
                    data: p,
                    success: w
                }, f.isPlainObject(u) && u))
            }
        }), f.ajaxPrefilter(function(r) {
            var s;
            for (s in r.headers) s.toLowerCase() === "content-type" && (r.contentType = r.headers[s] || "")
        }), f._evalUrl = function(r, s, u) {
            return f.ajax({
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
                    f.globalEval(p, s, u)
                }
            })
        }, f.fn.extend({
            wrapAll: function(r) {
                var s;
                return this[0] && (re(r) && (r = r.call(this[0])), s = f(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
                    for (var u = this; u.firstElementChild;) u = u.firstElementChild;
                    return u
                }).append(this)), this
            },
            wrapInner: function(r) {
                return re(r) ? this.each(function(s) {
                    f(this).wrapInner(r.call(this, s))
                }) : this.each(function() {
                    var s = f(this),
                        u = s.contents();
                    u.length ? u.wrapAll(r) : s.append(r)
                })
            },
            wrap: function(r) {
                var s = re(r);
                return this.each(function(u) {
                    f(this).wrapAll(s ? r.call(this, u) : r)
                })
            },
            unwrap: function(r) {
                return this.parent(r).not("body").each(function() {
                    f(this).replaceWith(this.childNodes)
                }), this
            }
        }), f.expr.pseudos.hidden = function(r) {
            return !f.expr.pseudos.visible(r)
        }, f.expr.pseudos.visible = function(r) {
            return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length)
        }, f.ajaxSettings.xhr = function() {
            try {
                return new e.XMLHttpRequest
            } catch {}
        };
        var ea = {
                0: 200,
                1223: 204
            },
            Ai = f.ajaxSettings.xhr();
        Y.cors = !!Ai && "withCredentials" in Ai, Y.ajax = Ai = !!Ai, f.ajaxTransport(function(r) {
            var s, u;
            if (Y.cors || Ai && !r.crossDomain) return {
                send: function(p, w) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
                    s = function(z) {
                        return function() {
                            s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(ea[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
        }), f.ajaxPrefilter(function(r) {
            r.crossDomain && (r.contents.script = !1)
        }), f.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(r) {
                    return f.globalEval(r), r
                }
            }
        }), f.ajaxPrefilter("script", function(r) {
            r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET")
        }), f.ajaxTransport("script", function(r) {
            if (r.crossDomain || r.scriptAttrs) {
                var s, u;
                return {
                    send: function(p, w) {
                        s = f("<script>").attr(r.scriptAttrs || {}).prop({
                            charset: r.scriptCharset,
                            src: r.url
                        }).on("load error", u = function(x) {
                            s.remove(), u = null, x && w(x.type === "error" ? 404 : 200, x.type)
                        }), P.head.appendChild(s[0])
                    },
                    abort: function() {
                        u && u()
                    }
                }
            }
        });
        var Gr = [],
            Wr = /(=)\?(?=&|$)|\?\?/;
        f.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = Gr.pop() || f.expando + "_" + Fr.guid++;
                return this[r] = !0, r
            }
        }), f.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, w, x, T = r.jsonp !== !1 && (Wr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Wr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(Wr, "$1" + p) : r.jsonp !== !1 && (r.url += (Ji.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || f.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                w === void 0 ? f(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, Gr.push(p)), x && re(w) && w(x[0]), x = w = void 0
            }), "script"
        }), Y.createHTMLDocument = function() {
            var r = P.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), f.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, x;
            return s || (Y.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = je.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = Pn([r], s, x), x && x.length && f(x).remove(), f.merge([], w.childNodes))
        }, f.fn.load = function(r, s, u) {
            var p, w, x, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = Jn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && f.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(H) {
                x = arguments, T.html(p ? f("<div>").append(f.parseHTML(H)).find(p) : H)
            }).always(u && function(H, Z) {
                T.each(function() {
                    u.apply(this, x || [H.responseText, Z, H])
                })
            }), this
        }, f.expr.pseudos.animated = function(r) {
            return f.grep(f.timers, function(s) {
                return r === s.elem
            }).length
        }, f.offset = {
            setOffset: function(r, s, u) {
                var p, w, x, T, z, H, Z, le = f.css(r, "position"),
                    be = f(r),
                    ne = {};
                le === "static" && (r.style.position = "relative"), z = be.offset(), x = f.css(r, "top"), H = f.css(r, "left"), Z = (le === "absolute" || le === "fixed") && (x + H).indexOf("auto") > -1, Z ? (p = be.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(H) || 0), re(s) && (s = s.call(r, u, f.extend({}, z))), s.top != null && (ne.top = s.top - z.top + T), s.left != null && (ne.left = s.left - z.left + w), "using" in s ? s.using.call(r, ne) : be.css(ne)
            }
        }, f.fn.extend({
            offset: function(r) {
                if (arguments.length) return r === void 0 ? this : this.each(function(w) {
                    f.offset.setOffset(this, r, w)
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
                    if (f.css(p, "position") === "fixed") s = p.getBoundingClientRect();
                    else {
                        for (s = this.offset(), u = p.ownerDocument, r = p.offsetParent || u.documentElement; r && (r === u.body || r === u.documentElement) && f.css(r, "position") === "static";) r = r.parentNode;
                        r && r !== p && r.nodeType === 1 && (w = f(r).offset(), w.top += f.css(r, "borderTopWidth", !0), w.left += f.css(r, "borderLeftWidth", !0))
                    }
                    return {
                        top: s.top - w.top - f.css(p, "marginTop", !0),
                        left: s.left - w.left - f.css(p, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var r = this.offsetParent; r && f.css(r, "position") === "static";) r = r.offsetParent;
                    return r || Qt
                })
            }
        }), f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(r, s) {
            var u = s === "pageYOffset";
            f.fn[r] = function(p) {
                return g(this, function(w, x, T) {
                    var z;
                    if (v(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), f.each(["top", "left"], function(r, s) {
            f.cssHooks[s] = y(Y.pixelPosition, function(u, p) {
                if (p) return p = et(u, s), _i.test(p) ? f(u).position()[s] + "px" : p
            })
        }), f.each({
            Height: "height",
            Width: "width"
        }, function(r, s) {
            f.each({
                padding: "inner" + r,
                content: s,
                "": "outer" + r
            }, function(u, p) {
                f.fn[p] = function(w, x) {
                    var T = arguments.length && (u || typeof w != "boolean"),
                        z = u || (w === !0 || x === !0 ? "margin" : "border");
                    return g(this, function(H, Z, le) {
                        var be;
                        return v(H) ? p.indexOf("outer") === 0 ? H["inner" + r] : H.document.documentElement["client" + r] : H.nodeType === 9 ? (be = H.documentElement, Math.max(H.body["scroll" + r], be["scroll" + r], H.body["offset" + r], be["offset" + r], be["client" + r])) : le === void 0 ? f.css(H, Z, z) : f.style(H, Z, le, z)
                    }, s, T ? w : void 0, T)
                }
            })
        }), f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(r, s) {
            f.fn[s] = function(u) {
                return this.on(s, u)
            }
        }), f.fn.extend({
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
        }), f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(r, s) {
            f.fn[s] = function(u, p) {
                return arguments.length > 0 ? this.on(s, null, u, p) : this.trigger(s)
            }
        });
        var Rs = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        f.proxy = function(r, s) {
            var u, p, w;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = h.call(arguments, 2), w = function() {
                return r.apply(s || this, p.concat(h.call(arguments)))
            }, w.guid = r.guid = r.guid || f.guid++, w
        }, f.holdReady = function(r) {
            r ? f.readyWait++ : f.ready(!0)
        }, f.isArray = Array.isArray, f.parseJSON = JSON.parse, f.nodeName = K, f.isFunction = re, f.isWindow = v, f.camelCase = V, f.type = se, f.now = Date.now, f.isNumeric = function(r) {
            var s = f.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, f.trim = function(r) {
            return r == null ? "" : (r + "").replace(Rs, "")
        };
        var ta = e.jQuery,
            na = e.$;
        return f.noConflict = function(r) {
            return e.$ === f && (e.$ = na), r && e.jQuery === f && (e.jQuery = ta), f
        }, typeof n > "u" && (e.jQuery = e.$ = f), f
    })
})(rl);
const Me = rl.exports;
var ga = {},
    Vl;

function Eo() {
    return Vl || (Vl = 1, function(t) {
        (function(e) {
            var n = typeof self == "object" && self.self === self && self || typeof yt == "object" && yt.global === yt && yt; {
                var i = $i.exports,
                    o;
                try {
                    o = rl.exports
                } catch {}
                e(n, t, i, o)
            }
        })(function(e, n, i, o) {
            var h = e.Backbone,
                m = Array.prototype.slice;
            n.VERSION = "1.3.3", n.$ = o, n.noConflict = function() {
                return e.Backbone = h, this
            }, n.emulateHTTP = !1, n.emulateJSON = !1;
            var E = function(_, l, g) {
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
                        i[R] && (_.prototype[R] = E(S, R, g))
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
                $ = n.Events = {},
                J = /\s+/,
                ie = function(_, l, g, S, R) {
                    var L = 0,
                        V;
                    if (g && typeof g == "object")
                        for (S !== void 0 && ("context" in R) && R.context === void 0 && (R.context = S), V = i.keys(g); L < V.length; L++) l = ie(_, l, V[L], g[V[L]], R);
                    else if (g && J.test(g))
                        for (V = g.split(J); L < V.length; L++) l = _(l, V[L], S, R);
                    else l = _(l, g, S, R);
                    return l
                };
            $.on = function(_, l, g) {
                return Y(this, _, l, g)
            };
            var Y = function(_, l, g, S, R) {
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
            $.listenTo = function(_, l, g) {
                if (!_) return this;
                var S = _._listenId || (_._listenId = i.uniqueId("l")),
                    R = this._listeningTo || (this._listeningTo = {}),
                    L = R[S];
                if (!L) {
                    var V = this._listenId || (this._listenId = i.uniqueId("l"));
                    L = R[S] = {
                        obj: _,
                        objId: S,
                        id: V,
                        listeningTo: R,
                        count: 0
                    }
                }
                return Y(_, l, g, this, L), this
            };
            var re = function(_, l, g, S) {
                if (g) {
                    var R = _[l] || (_[l] = []),
                        L = S.context,
                        V = S.ctx,
                        te = S.listening;
                    te && te.count++, R.push({
                        callback: g,
                        context: L,
                        ctx: L || V,
                        listening: te
                    })
                }
                return _
            };
            $.off = function(_, l, g) {
                return this._events ? (this._events = ie(v, this._events, _, l, {
                    context: g,
                    listeners: this._listeners
                }), this) : this
            }, $.stopListening = function(_, l, g) {
                var S = this._listeningTo;
                if (!S) return this;
                for (var R = _ ? [_._listenId] : i.keys(S), L = 0; L < R.length; L++) {
                    var V = S[R[L]];
                    if (!V) break;
                    V.obj.off(l, g, this)
                }
                return this
            };
            var v = function(_, l, g, S) {
                if (!!_) {
                    var R = 0,
                        L, V = S.context,
                        te = S.listeners;
                    if (!l && !g && !V) {
                        for (var Se = i.keys(te); R < Se.length; R++) L = te[Se[R]], delete te[L.id], delete L.listeningTo[L.objId];
                        return
                    }
                    for (var he = l ? [l] : i.keys(_); R < he.length; R++) {
                        l = he[R];
                        var Ie = _[l];
                        if (!Ie) break;
                        for (var De = [], it = 0; it < Ie.length; it++) {
                            var xt = Ie[it];
                            g && g !== xt.callback && g !== xt.callback._callback || V && V !== xt.context ? De.push(xt) : (L = xt.listening, L && --L.count === 0 && (delete te[L.id], delete L.listeningTo[L.objId]))
                        }
                        De.length ? _[l] = De : delete _[l]
                    }
                    return _
                }
            };
            $.once = function(_, l, g) {
                var S = ie(P, {}, _, l, i.bind(this.off, this));
                return typeof _ == "string" && g == null && (l = void 0), this.on(S, l, g)
            }, $.listenToOnce = function(_, l, g) {
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
            $.trigger = function(_) {
                if (!this._events) return this;
                for (var l = Math.max(0, arguments.length - 1), g = Array(l), S = 0; S < l; S++) g[S] = arguments[S + 1];
                return ie(W, this._events, _, void 0, g), this
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
                        V = l[1],
                        te = l[2];
                    switch (l.length) {
                        case 0:
                            for (; ++S < R;)(g = _[S]).callback.call(g.ctx);
                            return;
                        case 1:
                            for (; ++S < R;)(g = _[S]).callback.call(g.ctx, L);
                            return;
                        case 2:
                            for (; ++S < R;)(g = _[S]).callback.call(g.ctx, L, V);
                            return;
                        case 3:
                            for (; ++S < R;)(g = _[S]).callback.call(g.ctx, L, V, te);
                            return;
                        default:
                            for (; ++S < R;)(g = _[S]).callback.apply(g.ctx, l);
                            return
                    }
                };
            $.bind = $.on, $.unbind = $.off, i.extend(n, $);
            var se = n.Model = function(_, l) {
                var g = _ || {};
                l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
                var S = i.result(this, "defaults");
                g = i.defaults(i.extend({}, S, g), S), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
            };
            i.extend(se.prototype, $, {
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
                        V = [],
                        te = this._changing;
                    this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                    var Se = this.attributes,
                        he = this.changed,
                        Ie = this._previousAttributes;
                    for (var De in S) l = S[De], i.isEqual(Se[De], l) || V.push(De), i.isEqual(Ie[De], l) ? delete he[De] : he[De] = l, R ? delete Se[De] : Se[De] = l;
                    if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !L) {
                        V.length && (this._pending = g);
                        for (var it = 0; it < V.length; it++) this.trigger("change:" + V[it], this, Se[V[it]], g)
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
                    }, Gt(this, _), this.sync("read", this, _)
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
                        V = g.success,
                        te = this.attributes;
                    g.success = function(Ie) {
                        L.attributes = te;
                        var De = g.parse ? L.parse(Ie, g) : Ie;
                        if (R && (De = i.extend({}, S, De)), De && !L.set(De, g)) return !1;
                        V && V.call(g.context, L, Ie, g), L.trigger("sync", L, Ie, g)
                    }, Gt(this, g), S && R && (this.attributes = i.extend({}, te, S));
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
                    _.success = function(V) {
                        S && R(), g && g.call(_.context, l, V, _), l.isNew() || l.trigger("sync", l, V, _)
                    };
                    var L = !1;
                    return this.isNew() ? i.defer(_.success) : (Gt(this, _), L = this.sync("delete", this, _)), S || R(), L
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
            var f = n.Collection = function(_, l) {
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
            i.extend(f.prototype, $, {
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
                            V = [],
                            te = [],
                            Se = {},
                            he = l.add,
                            Ie = l.merge,
                            De = l.remove,
                            it = !1,
                            xt = this.comparator && S == null && l.sort !== !1,
                            on = i.isString(this.comparator) ? this.comparator : null,
                            lt, wt;
                        for (wt = 0; wt < _.length; wt++) {
                            lt = _[wt];
                            var Ct = this.get(lt);
                            if (Ct) {
                                if (Ie && lt !== Ct) {
                                    var Qt = this._isModel(lt) ? lt.attributes : lt;
                                    l.parse && (Qt = Ct.parse(Qt, l)), Ct.set(Qt, l), V.push(Ct), xt && !it && (it = Ct.hasChanged(on))
                                }
                                Se[Ct.cid] || (Se[Ct.cid] = !0, R.push(Ct)), _[wt] = Ct
                            } else he && (lt = _[wt] = this._prepareModel(lt, l), lt && (L.push(lt), this._addReference(lt, l), Se[lt.cid] = !0, R.push(lt)))
                        }
                        if (De) {
                            for (wt = 0; wt < this.length; wt++) lt = this.models[wt], Se[lt.cid] || te.push(lt);
                            te.length && this._removeModels(te, l)
                        }
                        var Je = !1,
                            Lt = !xt && he && De;
                        if (R.length && Lt ? (Je = this.length !== R.length || i.some(this.models, function(F, N) {
                                return F !== R[N]
                            }), this.models.length = 0, Pe(this.models, R, 0), this.length = this.models.length) : L.length && (xt && (it = !0), Pe(this.models, L, S == null ? this.length : S), this.length = this.models.length), it && this.sort({
                                silent: !0
                            }), !l.silent) {
                            for (wt = 0; wt < L.length; wt++) S != null && (l.index = S + wt), lt = L[wt], lt.trigger("add", lt, this, l);
                            (it || Je) && this.trigger("sort", this, l), (L.length || te.length || V.length) && (l.changes = {
                                added: L,
                                removed: te,
                                merged: V
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
                    }, Gt(this, _), this.sync("read", this, _)
                },
                create: function(_, l) {
                    l = l ? i.clone(l) : {};
                    var g = l.wait;
                    if (_ = this._prepareModel(_, l), !_) return !1;
                    g || this.add(_, l);
                    var S = this,
                        R = l.success;
                    return l.success = function(L, V, te) {
                        g && S.add(L, te), R && R.call(te.context, L, V, te)
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
                            var V = this.modelId(R.attributes);
                            V != null && delete this._byId[V], l.silent || (l.index = L, R.trigger("remove", R, this, l)), g.push(R), this._removeReference(R, l)
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
            var at = {
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
            k(f, at, "models");
            var Be = n.View = function(_) {
                    this.cid = i.uniqueId("view"), i.extend(this, i.pick(_, je)), this._ensureElement(), this.initialize.apply(this, arguments)
                },
                K = /^(\S+)\s*(.*)$/,
                je = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            i.extend(Be.prototype, $, {
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
                            var S = l.match(K);
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
                    g.beforeSend = function(Se) {
                        if (Se.setRequestHeader("X-HTTP-Method-Override", S), L) return L.apply(this, arguments)
                    }
                }
                R.type !== "GET" && !g.emulateJSON && (R.processData = !1);
                var V = g.error;
                g.error = function(Se, he, Ie) {
                    g.textStatus = he, g.errorThrown = Ie, V && V.call(g.context, Se, he, Ie)
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
                Te = /\((.*?)\)/g,
                we = /(\(\?)?:\w+/g,
                ye = /\*\w+/g,
                ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            i.extend(oe.prototype, $, {
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
            _e.started = !1, i.extend(_e.prototype, $, {
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
                    var R = window.addEventListener || function(L, V) {
                        return attachEvent("on" + L, V)
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
            se.extend = f.extend = oe.extend = Be.extend = _e.extend = dt;
            var Bt = function() {
                    throw new Error('A "url" property or function must be specified')
                },
                Gt = function(_, l) {
                    var g = l.error;
                    l.error = function(S) {
                        g && g.call(l.context, _, S, l), _.trigger("error", _, S, l)
                    }
                };
            return n
        })
    }(ga)), ga
}
var ut = Eo(),
    Gc = {
        exports: {}
    },
    ma = {
        exports: {}
    },
    Bl;

function Uh() {
    return Bl || (Bl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i($i.exports, Eo())
        })(yt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                    return typeof v
                } : function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol ? "symbol" : typeof v
                },
                h = i.Radio,
                m = i.Radio = {};
            m.VERSION = "2.0.0", m.noConflict = function() {
                return i.Radio = h, this
            }, m.DEBUG = !1, m._debugText = function(v, P, W) {
                return v + (W ? " on the " + W + " channel" : "") + ': "' + P + '"'
            }, m.debugLog = function(v, P, W) {
                m.DEBUG && console && console.warn && console.warn(m._debugText(v, P, W))
            };
            var E = /\s+/;
            m._eventsApi = function(v, P, W, ae) {
                if (!W) return !1;
                var se = {};
                if ((typeof W > "u" ? "undefined" : o(W)) === "object") {
                    for (var ve in W) {
                        var f = v[P].apply(v, [ve, W[ve]].concat(ae));
                        E.test(ve) ? n.extend(se, f) : se[ve] = f
                    }
                    return se
                }
                if (E.test(W)) {
                    for (var Ee = W.split(E), Ae = 0, Pe = Ee.length; Ae < Pe; Ae++) se[Ee[Ae]] = v[P].apply(v, [Ee[Ae]].concat(ae));
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
                for (var se = P ? [P] : n.keys(v), ve = !1, f = 0, Ee = se.length; f < Ee; f++) P = se[f], !!v[P] && k(v, P, W, ae) && (ve = !0);
                return ve
            }
            var M = {};

            function $(v) {
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
                    return W._tunedIn = !0, W.on("all", $(P)), this
                },
                tuneOut: function(P) {
                    var W = m.channel(P);
                    return W._tunedIn = !1, W.off("all", $(P)), delete M[P], this
                }
            });

            function J(v) {
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
                        var f = ve[P] || ve.default;
                        return W = ve[P] ? W : arguments, m._callHandler(f.callback, f.context, W)
                    } else m.debugLog("An unhandled request was fired", P, se)
                },
                reply: function(P, W, ae) {
                    return m._eventsApi(this, "reply", P, [W, ae]) ? this : (this._requests || (this._requests = {}), this._requests[P] && m.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: J(W),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(P, W, ae) {
                    if (m._eventsApi(this, "replyOnce", P, [W, ae])) return this;
                    var se = this,
                        ve = n.once(function() {
                            return se.stopReplying(P), J(W).apply(this, arguments)
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
            var ie, Y, re = [i.Events, m.Requests];
            return n.each(re, function(v) {
                n.each(v, function(P, W) {
                    m[W] = function(ae) {
                        return Y = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[W].apply(ie, Y)
                    }
                })
            }), m.reset = function(v) {
                var P = v ? [this._channels[v]] : this._channels;
                n.each(P, function(W) {
                    W.reset()
                })
            }, m
        })
    }(ma)), ma.exports
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
        t.exports = i(Eo(), $i.exports, Uh())
    })(yt, function(n, i, o) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, o = o && o.hasOwnProperty("default") ? o.default : o;
        var h = "3.5.1",
            m = function(a) {
                return function(C) {
                    for (var O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), Ce = 1; Ce < O; Ce++) Q[Ce - 1] = arguments[Ce];
                    return a.apply(C, Q)
                }
            },
            E = n.Model.extend,
            k = function y(a, C) {
                i.isObject(a) && (a = a.prev + " is going to be removed in the future. Please use " + a.next + " instead." + (a.url ? " See: " + a.url : "")), !!et.DEV_MODE && (C === void 0 || !C) && !y._cache[a] && (y._warn("Deprecation warning: " + a), y._cache[a] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var A = function(a) {
                return document.documentElement.contains(a && a.parentNode)
            },
            M = function(a, C) {
                var O = this;
                !a || i.each(C, function(Q) {
                    var Ce = a[Q];
                    Ce !== void 0 && (O[Q] = Ce)
                })
            },
            $ = function(a) {
                if (!!a) return this.options && this.options[a] !== void 0 ? this.options[a] : this[a]
            },
            J = function(a) {
                var C = this;
                return i.reduce(a, function(O, Q, Ce) {
                    return i.isFunction(Q) || (Q = C[Q]), Q && (O[Ce] = Q), O
                }, {})
            },
            ie = /(^|:)(\w)/gi;

        function Y(y, a, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ie, Y)
        });

        function v(y) {
            for (var a = arguments.length, C = Array(a > 1 ? a - 1 : 0), O = 1; O < a; O++) C[O - 1] = arguments[O];
            var Q = re(y),
                Ce = $.call(this, Q),
                We = void 0;
            return i.isFunction(Ce) && (We = Ce.apply(this, C)), this.trigger.apply(this, arguments), We
        }

        function P(y) {
            for (var a = arguments.length, C = Array(a > 1 ? a - 1 : 0), O = 1; O < a; O++) C[O - 1] = arguments[O];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : v.apply(y, C)
        }

        function W(y, a, C) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(O) {
                !C(O) || P(O, a, O)
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

        function f(y) {
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

        function at() {
            W(this, "attach", se), Ee(this)
        }

        function Be() {
            W(this, "before:detach", ve), Ae(this)
        }

        function K() {
            W(this, "detach", f)
        }

        function je() {
            Ae(this)
        }

        function U() {
            Ee(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: at,
                "before:detach": Be,
                detach: K,
                "before:render": je,
                render: U
            }))
        }
        var Te = ["description", "fileName", "lineNumber", "name", "message", "number"],
            we = E.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + h + "/",
                constructor: function(a, C) {
                    i.isObject(a) ? (C = a, a = C.message) : C || (C = {});
                    var O = Error.call(this, a);
                    i.extend(this, i.pick(O, Te), i.pick(C, Te)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, we)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        we.extend = E;

        function ye(y, a, C, O, Q) {
            var Ce = O.split(/\s+/);
            Ce.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(Ce, function(We) {
                var It = y[We];
                if (!It) throw new we('Method "' + We + '" was configured as an event handler, but does not exist.');
                y[Q](a, C, It)
            })
        }

        function ue(y, a, C, O) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(Q, Ce) {
                if (i.isString(Q)) {
                    ye(y, a, Ce, Q, O);
                    return
                }
                y[O](a, Ce, Q)
            })
        }

        function _e(y, a) {
            return !y || !a ? this : (ue(this, y, a, "listenTo"), this)
        }

        function ke(y, a) {
            return y ? a ? (ue(this, y, a, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, a, C, O) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = J.call(y, C);
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
            Gt = {
                normalizeMethods: J,
                _setOptions: Bt,
                mergeOptions: M,
                getOption: $,
                bindEvents: _e,
                unbindEvents: ke
            },
            _ = {
                _initRadio: function() {
                    var a = i.result(this, "channelName");
                    if (!!a) {
                        if (!o) throw new we({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var C = this._channel = o.channel(a),
                            O = i.result(this, "radioEvents");
                        this.bindEvents(C, O);
                        var Q = i.result(this, "radioRequests");
                        this.bindRequests(C, Q), this.on("destroy", this._destroyRadio)
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
            g = function(a) {
                this.hasOwnProperty("options") || this._setOptions(a), this.mergeOptions(a, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = E, i.extend(g.prototype, n.Events, Gt, _, {
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
                for (var a = arguments.length, C = Array(a), O = 0; O < a; O++) C[O] = arguments[O];
                return this.triggerMethod.apply(this, ["before:destroy", this].concat(C)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(C)), this.stopListening(), this
            },
            triggerMethod: v
        });
        var S = function(a) {
            this.templateId = a
        };
        i.extend(S, {
            templateCaches: {},
            get: function(a, C) {
                var O = this.templateCaches[a];
                return O || (O = new S(a), this.templateCaches[a] = O), O.load(C)
            },
            clear: function() {
                for (var a = void 0, C = arguments.length, O = Array(C), Q = 0; Q < C; Q++) O[Q] = arguments[Q];
                var Ce = O.length;
                if (Ce > 0)
                    for (a = 0; a < Ce; a++) delete this.templateCaches[O[a]];
                else this.templateCaches = {}
            }
        }), i.extend(S.prototype, {
            load: function(a) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var C = this.loadTemplate(this.templateId, a);
                return this.compiledTemplate = this.compileTemplate(C, a), this.compiledTemplate
            },
            loadTemplate: function(a, C) {
                var O = n.$(a);
                if (!O.length) throw new we({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + a + '"'
                });
                return O.html()
            },
            compileTemplate: function(a, C) {
                return i.template(a, C)
            }
        });
        var R = i.invokeMap || i.invoke;

        function L(y, a) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(et.Behaviors.behaviorsLookup) ? et.Behaviors.behaviorsLookup(y, a)[a] : et.Behaviors.behaviorsLookup[a]
        }

        function V(y, a) {
            return i.chain(a).map(function(C, O) {
                var Q = L(C, O),
                    Ce = C === Q ? {} : C,
                    We = new Q(Ce, y),
                    It = V(y, i.result(We, "behaviors"));
                return [We].concat(It)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var a = i.result(this, "behaviors");
                    return i.isObject(a) ? V(this, a) : {}
                },
                _getBehaviorTriggers: function() {
                    var a = R(this._behaviors, "getTriggers");
                    return i.reduce(a, function(C, O) {
                        return i.extend(C, O)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var a = R(this._behaviors, "getEvents");
                    return i.reduce(a, function(C, O) {
                        return i.extend(C, O)
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
                    for (var a = arguments.length, C = Array(a), O = 0; O < a; O++) C[O] = arguments[O];
                    R.apply(void 0, [this._behaviors, "destroy"].concat(C))
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
                    for (var a = this._behaviors, C = 0, O = a && a.length; C < O; C++) v.apply(a[C], arguments)
                }
            },
            Se = {
                _delegateEntityEvents: function(a, C) {
                    var O = i.result(this, "modelEvents");
                    O && (ke.call(this, a, O), _e.call(this, a, O));
                    var Q = i.result(this, "collectionEvents");
                    Q && (ke.call(this, C, Q), _e.call(this, C, Q))
                },
                _undelegateEntityEvents: function(a, C) {
                    var O = i.result(this, "modelEvents");
                    ke.call(this, a, O);
                    var Q = i.result(this, "collectionEvents");
                    ke.call(this, C, Q)
                }
            },
            he = /^(\S+)\s*(.*)$/,
            Ie = function(a, C) {
                var O = a.match(he);
                return O[1] + "." + C + " " + O[2]
            },
            De = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function it(y) {
            return !!De[y]
        }

        function xt(y, a) {
            return De[y] = a
        }

        function on(y, a) {
            i.isString(a) && (a = {
                event: a
            });
            var C = a.event,
                O = !!a.preventDefault;
            it("triggersPreventDefault") && (O = a.preventDefault !== !1);
            var Q = !!a.stopPropagation;
            return it("triggersStopPropagation") && (Q = a.stopPropagation !== !1),
                function(Ce) {
                    O && Ce.preventDefault(), Q && Ce.stopPropagation(), y.triggerMethod(C, y, Ce)
                }
        }
        var lt = {
                _getViewTriggers: function(a, C) {
                    var O = this;
                    return i.reduce(C, function(Q, Ce, We) {
                        return We = Ie(We, "trig" + O.cid), Q[We] = on(a, Ce), Q
                    }, {})
                }
            },
            wt = function(a, C) {
                return i.reduce(a, function(O, Q, Ce) {
                    var We = Ct(Ce, C);
                    return O[We] = Q, O
                }, {})
            },
            Ct = function(a, C) {
                return a.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(O) {
                    return C[O.slice(4)]
                })
            },
            Qt = function y(a, C, O) {
                return i.each(a, function(Q, Ce) {
                    i.isString(Q) ? a[Ce] = Ct(Q, C) : i.isObject(Q) && i.isArray(O) && (i.extend(Q, y(i.pick(Q, O), C)), i.each(O, function(We) {
                        var It = Q[We];
                        i.isString(It) && (Q[We] = Ct(It, C))
                    }))
                }), a
            },
            Je = {
                normalizeUIKeys: function(a) {
                    var C = this._getUIBindings();
                    return wt(a, C)
                },
                normalizeUIString: function(a) {
                    var C = this._getUIBindings();
                    return Ct(a, C)
                },
                normalizeUIValues: function(a, C) {
                    var O = this._getUIBindings();
                    return Qt(a, O, C)
                },
                _getUIBindings: function() {
                    var a = i.result(this, "_uiBindings"),
                        C = i.result(this, "ui");
                    return a || C
                },
                _bindUIElements: function() {
                    var a = this;
                    if (!!this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var C = i.result(this, "_uiBindings");
                        this._ui = {}, i.each(C, function(O, Q) {
                            a._ui[Q] = a.$(O)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var a = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(C, O) {
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
                findEl: function(a, C) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(a);
                    return O.find(C)
                },
                hasEl: function(a, C) {
                    return a.contains(C && C.parentNode)
                },
                detachEl: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(a);
                    C.detach()
                },
                replaceEl: function(a, C) {
                    if (a !== C) {
                        var O = C.parentNode;
                        !O || O.replaceChild(a, C)
                    }
                },
                swapEl: function(a, C) {
                    if (a !== C) {
                        var O = a.parentNode,
                            Q = C.parentNode;
                        if (!(!O || !Q)) {
                            var Ce = a.nextSibling,
                                We = C.nextSibling;
                            O.insertBefore(C, Ce), Q.insertBefore(a, We)
                        }
                    }
                },
                setContents: function(a, C) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(a);
                    O.html(C)
                },
                appendContents: function(a, C) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = O._$el,
                        Ce = Q === void 0 ? Lt(a) : Q,
                        We = O._$contents,
                        It = We === void 0 ? Lt(C) : We;
                    Ce.append(It)
                },
                hasContents: function(a) {
                    return !!a && a.hasChildNodes()
                },
                detachContents: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(a);
                    C.contents().detach()
                }
            },
            q = {
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
                    var C = this._getEvents(a);
                    typeof a > "u" && (this.events = C);
                    var O = i.extend({}, this._getBehaviorEvents(), C, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, O), this
                },
                _getEvents: function(a) {
                    var C = a || this.events;
                    return i.isFunction(C) ? this.normalizeUIKeys(C.call(this)) : this.normalizeUIKeys(C)
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
                    for (var a = this._isAttached && !this._shouldDisableEvents, C = arguments.length, O = Array(C), Q = 0; Q < C; Q++) O[Q] = arguments[Q];
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
                    return it("childViewEventPrefix") ? "childview" : !1
                },
                triggerMethod: function() {
                    var a = v.apply(this, arguments);
                    return this._triggerEventOnBehaviors.apply(this, arguments), a
                },
                _buildEventProxies: function() {
                    this._childViewEvents = i.result(this, "childViewEvents"), this._childViewTriggers = i.result(this, "childViewTriggers")
                },
                _proxyChildViewEvents: function(a) {
                    this.listenTo(a, "all", this._childViewEventHandler)
                },
                _childViewEventHandler: function(a) {
                    for (var C = this.normalizeMethods(this._childViewEvents), O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), Ce = 1; Ce < O; Ce++) Q[Ce - 1] = arguments[Ce];
                    typeof C < "u" && i.isFunction(C[a]) && C[a].apply(this, Q);
                    var We = this._childViewTriggers;
                    We && i.isString(We[a]) && this.triggerMethod.apply(this, [We[a]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Xt = It + ":" + a;
                        this.triggerMethod.apply(this, [Xt].concat(Q))
                    }
                }
            };
        i.extend(q, te, Gt, Se, lt, Je);

        function D(y) {
            y._isRendered || (y.supportsRenderLifecycle || P(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, P(y, "render", y)))
        }

        function G(y) {
            if (y.destroy) {
                y.destroy();
                return
            }
            y.supportsDestroyLifecycle || P(y, "before:destroy", y);
            var a = y._isAttached && !y._shouldDisableEvents;
            a && P(y, "before:detach", y), y.remove(), a && (y._isAttached = !1, P(y, "detach", y)), y._isDestroyed = !0, y.supportsDestroyLifecycle || P(y, "destroy", y)
        }
        var fe = ["allowMissingEl", "parentEl", "replaceElement"],
            pe = g.extend({
                Dom: N,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(a) {
                    if (this._setOptions(a), this.mergeOptions(a, fe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new we({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, a)
                },
                show: function(a, C) {
                    if (!!this._ensureElement(C)) return a = this._getView(a, C), a === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, a, C), a._isAttached || this.empty(C), this._setupChildView(a), this.currentView = a, D(a), this._attachView(a, C), this.triggerMethod("show", this, a, C), this._isSwappingView = !1, this)
                },
                _setupChildView: function(a) {
                    oe(a), this._proxyChildViewEvents(a), a.on("destroy", this._empty, this)
                },
                _proxyChildViewEvents: function(a) {
                    var C = this._parentView;
                    !C || C._proxyChildViewEvents(a)
                },
                _shouldDisableMonitoring: function() {
                    return this._parentView && this._parentView.monitorViewEvents === !1
                },
                _attachView: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = !a._isAttached && A(this.el) && !this._shouldDisableMonitoring(),
                        Q = typeof C.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!C.replaceElement;
                    O && P(a, "before:attach", a), Q ? this._replaceEl(a) : this.attachHtml(a), O && (a._isAttached = !0, P(a, "attach", a))
                },
                _ensureElement: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var C = typeof a.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!a.allowMissingEl;
                        if (C) return !1;
                        throw new we('An "el" must exist in DOM for this region ' + this.cid)
                    }
                    return !0
                },
                _getView: function(a) {
                    if (!a) throw new we({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                    });
                    if (a._isDestroyed) throw new we({
                        name: "ViewDestroyedError",
                        message: 'View (cid: "' + a.cid + '") has already been destroyed and cannot be used.'
                    });
                    if (a instanceof n.View) return a;
                    var C = this._getViewOptions(a);
                    return new $n(C)
                },
                _getViewOptions: function(a) {
                    if (i.isFunction(a)) return {
                        template: a
                    };
                    if (i.isObject(a)) return a;
                    var C = function() {
                        return a
                    };
                    return {
                        template: C
                    }
                },
                getEl: function(a) {
                    var C = i.result(this, "parentEl");
                    return C && i.isString(a) ? this.Dom.findEl(C, a) : this.Dom.getEl(a)
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
                        C = this.currentView;
                    if (!C) return this._ensureElement(a) && this.detachHtml(), this;
                    var O = !a.preventDestroy;
                    return O || k("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(C, O), this
                },
                _empty: function(a, C) {
                    a.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, a), this._restoreEl(), delete this.currentView, a._isDestroyed || (C ? this.removeView(a) : this._detachView(a), this._stopChildViewEvents(a)), this.triggerMethod("empty", this, a)
                },
                _stopChildViewEvents: function(a) {
                    var C = this._parentView;
                    !C || this._parentView.stopListening(a)
                },
                destroyView: function(a) {
                    return a._isDestroyed || (a._shouldDisableEvents = this._shouldDisableMonitoring(), G(a)), a
                },
                removeView: function(a) {
                    this.destroyView(a)
                },
                detachView: function() {
                    var a = this.currentView;
                    if (!!a) return this._empty(a), a
                },
                _detachView: function(a) {
                    var C = a._isAttached && !this._shouldDisableMonitoring(),
                        O = this._isReplaced;
                    C && P(a, "before:detach", a), O ? this.Dom.replaceEl(this.el, a.el) : this.detachHtml(), C && (a._isAttached = !1, P(a, "detach", a))
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
                return y instanceof pe ? y : Ve(y, a)
            };

        function Ve(y, a) {
            var C = i.extend({}, a);
            if (i.isString(y)) return i.extend(C, {
                el: y
            }), pt(C);
            if (i.isFunction(y)) return i.extend(C, {
                regionClass: y
            }), pt(C);
            if (i.isObject(y)) return y.selector && k("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(C, {
                el: y.selector
            }, y), pt(C);
            throw new we({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function pt(y) {
            var a = y.regionClass,
                C = i.omit(y, "regionClass");
            return new a(C)
        }
        var Ft = {
                regionClass: pe,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    R(this._regions, "reset")
                },
                addRegion: function(a, C) {
                    var O = {};
                    return O[a] = C, this.addRegions(O)[a]
                },
                addRegions: function(a) {
                    if (!i.isEmpty(a)) return a = this.normalizeUIValues(a, ["selector", "el"]), this.regions = i.extend({}, this.regions, a), this._addRegions(a)
                },
                _addRegions: function(a) {
                    var C = this,
                        O = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(a, function(Q, Ce, We) {
                        return Q[We] = Ne(Ce, O), C._addRegion(Q[We], We), Q
                    }, {})
                },
                _addRegion: function(a, C) {
                    this.triggerMethod("before:add:region", this, C, a), a._parentView = this, a._name = C, this._regions[C] = a, this.triggerMethod("add:region", this, C, a)
                },
                removeRegion: function(a) {
                    var C = this._regions[a];
                    return this._removeRegion(C, a), C
                },
                removeRegions: function() {
                    var a = this._getRegions();
                    return i.each(this._regions, i.bind(this._removeRegion, this)), a
                },
                _removeRegion: function(a, C) {
                    this.triggerMethod("before:remove:region", this, C, a), a.destroy(), this.triggerMethod("remove:region", this, C, a)
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
                showChildView: function(a, C) {
                    for (var O = this.getRegion(a), Q = arguments.length, Ce = Array(Q > 2 ? Q - 2 : 0), We = 2; We < Q; We++) Ce[We - 2] = arguments[We];
                    return O.show.apply(O, [C].concat(Ce))
                },
                detachChildView: function(a) {
                    return this.getRegion(a).detachView()
                },
                getChildView: function(a) {
                    return this.getRegion(a).currentView
                }
            },
            Ye = {
                render: function(a, C) {
                    if (!a) throw new we({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var O = i.isFunction(a) ? a : S.get(a);
                    return O(C)
                }
            },
            Pn = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            $n = n.View.extend({
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, Pn), oe(this), this._initBehaviors(), this._initRegions();
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
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
                    var C = this.mixinTemplateContext(this.serializeData()),
                        O = this._renderHtml(a, C);
                    this.attachElContent(O)
                },
                _renderHtml: function(a, C) {
                    return Ye.render(a, C, this)
                },
                getTemplate: function() {
                    return this.template
                },
                mixinTemplateContext: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        C = i.result(this, "templateContext");
                    return i.extend(a, C)
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
        i.extend($n.prototype, q, Ft);
        var rt = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Nn = function(a, C) {
                i.each(rt, function(O) {
                    a[O] = function() {
                        var Q = i.result(this, C),
                            Ce = Array.prototype.slice.call(arguments);
                        return i[O].apply(i, [Q].concat(Ce))
                    }
                })
            },
            bi = function(a) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(a, i.bind(this.add, this))
            };
        Nn(bi.prototype, "_getViews"), i.extend(bi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(a, C) {
                return this._add(a, C)._updateLength()
            },
            _add: function(a, C) {
                var O = a.cid;
                return this._views[O] = a, a.model && (this._indexByModel[a.model.cid] = O), C && (this._indexByCustom[C] = O), this
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var C = this._indexByModel[a];
                return this.findByCid(C)
            },
            findByCustom: function(a) {
                var C = this._indexByCustom[a];
                return this.findByCid(C)
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
                var C = a.cid;
                return a.model && delete this._indexByModel[a.model.cid], i.some(this._indexByCustom, i.bind(function(O, Q) {
                    if (O === C) return delete this._indexByCustom[Q], !0
                }, this)), delete this._views[C], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var Ir = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            On = n.View.extend({
                sort: !0,
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, Ir), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var a = this._isAttached && this.monitorViewEvents !== !1,
                        C = a ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(C, function(O) {
                        P(O, "before:attach", O)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(C, function(O) {
                        O._isAttached = !0, P(O, "attach", O)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(a, C, O) {
                    var Q = O.at !== void 0 && (O.index || C.indexOf(a));
                    (this.filter || Q === !1) && (Q = i.indexOf(this._filteredSortedModels(Q), a)), this._shouldAddChild(a, Q) && (this._destroyEmptyView(), this._addChild(a, Q))
                },
                _onCollectionUpdate: function(a, C) {
                    var O = C.changes;
                    this._removeChildModels(O.removed)
                },
                _removeChildModels: function(a) {
                    var C = this._getRemovedViews(a);
                    !C.length || (this.children._updateLength(), this._updateIndices(C, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(a) {
                    var C = this;
                    return i.reduce(a, function(O, Q) {
                        var Ce = Q && C.children.findByModel(Q);
                        return !Ce || Ce._isDestroyed || (C._removeChildView(Ce), O.push(Ce)), O
                    }, [])
                },
                _removeChildView: function(a) {
                    this.triggerMethod("before:remove:child", this, a), this.children._remove(a), a._shouldDisableEvents = this.monitorViewEvents === !1, G(a), this.stopListening(a), this.triggerMethod("remove:child", this, a)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = A(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = C.preventRender,
                        Q = this._isRendered && !this._isDestroyed,
                        Ce = this.filter !== a,
                        We = Q && Ce && !O;
                    if (We) {
                        var It = this._filteredSortedModels();
                        this.filter = a;
                        var Xt = this._filteredSortedModels();
                        this._applyModelDeltas(Xt, It)
                    } else this.filter = a;
                    return this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _applyModelDeltas: function(a, C) {
                    var O = this,
                        Q = {};
                    i.each(a, function(We, It) {
                        var Xt = !O.children.findByModel(We);
                        Xt && O._onCollectionAdd(We, O.collection, {
                            at: It
                        }), Q[We.cid] = !0
                    });
                    var Ce = i.filter(C, function(We) {
                        return !Q[We.cid] && O.children.findByModel(We)
                    });
                    this._removeChildModels(Ce)
                },
                reorder: function() {
                    var a = this,
                        C = this.children,
                        O = this._filteredSortedModels();
                    if (!O.length && this._showingEmptyView) return this;
                    var Q = i.some(O, function(Xt) {
                        return !C.findByModel(Xt)
                    });
                    if (Q) this.render();
                    else {
                        var Ce = [],
                            We = i.reduce(this.children._views, function(Xt, Yn) {
                                var Fn = i.indexOf(O, Yn.model);
                                return Fn === -1 ? (Ce.push(Yn.model), Xt) : (Yn._index = Fn, Xt[Fn] = Yn.el, Xt)
                            }, new Array(O.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(We, function(Xt) {
                            a.Dom.appendContents(It, Xt)
                        }), this._appendReorderedChildren(It), this._removeChildModels(Ce), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var a = this,
                        C = this._filteredSortedModels(),
                        O = i.find(C, function(Q, Ce) {
                            var We = a.children.findByModel(Q);
                            return !We || We._index !== Ce
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
                _createView: function(a, C) {
                    var O = this._getChildView(a),
                        Q = this._getChildViewOptions(a, C),
                        Ce = this.buildChildView(a, O, Q);
                    return Ce
                },
                _setupChildView: function(a, C) {
                    oe(a), this._proxyChildViewEvents(a), this.sort && (a._index = C)
                },
                _showCollection: function(a) {
                    i.each(a, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(a) {
                    if (!this.collection || !this.collection.length) return [];
                    var C = this.getViewComparator(),
                        O = this.collection.models;
                    if (a = Math.min(Math.max(a, 0), O.length - 1), C) {
                        var Q = void 0;
                        a && (Q = O[a], O = O.slice(0, a).concat(O.slice(a + 1))), O = this._sortModelsBy(O, C), Q && O.splice(a, 0, Q)
                    }
                    return O = this._filterModels(O), O
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(a) {
                    var C = this;
                    return this.filter && (a = i.filter(a, function(O, Q) {
                        return C._shouldAddChild(O, Q)
                    })), a
                },
                _sortModelsBy: function(a, C) {
                    return typeof C == "string" ? i.sortBy(a, function(O) {
                        return O.get(C)
                    }) : C.length === 1 ? i.sortBy(a, i.bind(C, this)) : i.clone(a).sort(i.bind(C, this))
                },
                _showEmptyView: function() {
                    var a = this._getEmptyView();
                    if (a && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var C = new n.Model,
                            O = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(O) && (O = O.call(this, C, this._emptyViewIndex));
                        var Q = this.buildChildView(C, a, O);
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
                    var C = this.childView;
                    if (!C) throw new we({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, a), !C) throw new we({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                _getView: function(a, C) {
                    if (a.prototype instanceof n.View || a === n.View) return a;
                    if (i.isFunction(a)) return a.call(this, C)
                },
                _addChild: function(a, C) {
                    var O = this._createView(a, C);
                    return this.addChildView(O, C), O
                },
                _getChildViewOptions: function(a, C) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(a, C) : this.childViewOptions
                },
                addChildView: function(a, C) {
                    return this.triggerMethod("before:add:child", this, a), this._setupChildView(a, C), this._isBuffering ? this.children._add(a) : (this._updateIndices(a, !0), this.children.add(a)), D(a), this._attachView(a, C), this.triggerMethod("add:child", this, a), a
                },
                _updateIndices: function(a, C) {
                    if (!!this.sort) {
                        if (!C) {
                            i.each(i.sortBy(this.children._views, "_index"), function(Q, Ce) {
                                Q._index = Ce
                            });
                            return
                        }
                        var O = i.isArray(a) ? i.max(a, "_index") : a;
                        i.isObject(O) && i.each(this.children._views, function(Q) {
                            Q._index >= O._index && (Q._index += 1)
                        })
                    }
                },
                _attachView: function(a, C) {
                    var O = !a._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    O && P(a, "before:attach", a), this.attachHtml(this, a, C), O && (a._isAttached = !0, P(a, "attach", a))
                },
                buildChildView: function(a, C, O) {
                    var Q = i.extend({
                        model: a
                    }, O);
                    return new C(Q)
                },
                removeChildView: function(a) {
                    return !a || a._isDestroyed || (this._removeChildView(a), this.children._updateLength(), this._updateIndices(a, !1)), a
                },
                isEmpty: function(a) {
                    var C = void 0;
                    return i.result(a, "processedModels") ? C = a.processedModels : (C = this.collection ? this.collection.models : [], C = this._filterModels(C)), C.length === 0
                },
                attachBuffer: function(a, C) {
                    this.Dom.appendContents(a.el, C, {
                        _$el: a.$el
                    })
                },
                _createBuffer: function() {
                    var a = this,
                        C = this.Dom.createBuffer();
                    return i.each(this._bufferedChildren, function(O) {
                        a.Dom.appendContents(C, O.el, {
                            _$contents: O.$el
                        })
                    }), C
                },
                attachHtml: function(a, C, O) {
                    a._isBuffering ? a._bufferedChildren.splice(O, 0, C) : a._insertBefore(C, O) || a._insertAfter(C)
                },
                _insertBefore: function(a, C) {
                    var O = void 0,
                        Q = this.sort && C < this.children.length - 1;
                    return Q && (O = i.find(this.children._views, function(Ce) {
                        return Ce._index === C + 1
                    })), O ? (this.beforeEl(O.el, a.el), !0) : !1
                },
                beforeEl: function(a, C) {
                    this.$(a).before(C)
                },
                _insertAfter: function(a) {
                    this.Dom.appendContents(this.el, a.el, {
                        _$el: this.$el,
                        _$contents: a.$el
                    })
                },
                _initChildViewStorage: function() {
                    this.children = new bi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(a) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(a, C) {
                    var O = this.filter;
                    return !i.isFunction(O) || O.call(this, a, C, this.collection)
                }
            }, {
                setDomApi: F
            });
        i.extend(On.prototype, q);
        var an = function() {
            this._init()
        };
        Nn(an.prototype, "_views");

        function Mr(y, a) {
            return a.model && a.model.get(y)
        }
        i.extend(an.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(a) {
                var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    O = a.cid;
                this._viewsByCid[O] = a, a.model && (this._indexByModel[a.model.cid] = O), this._views.splice(C, 0, a), this._updateLength()
            },
            _sort: function(a, C) {
                return typeof a == "string" ? (a = i.partial(Mr, a), this._sortBy(a)) : a.length === 1 ? this._sortBy(i.bind(a, C)) : this._views.sort(i.bind(a, C))
            },
            _sortBy: function(a) {
                var C = i.sortBy(this._views, a);
                return this._set(C), C
            },
            _set: function(a) {
                this._views.length = 0, this._views.push.apply(this._views, a.slice(0)), this._updateLength()
            },
            _swap: function(a, C) {
                var O = this.findIndexByView(a),
                    Q = this.findIndexByView(C);
                if (!(O === -1 || Q === -1)) {
                    var Ce = this._views[O];
                    this._views[O] = this._views[Q], this._views[Q] = Ce
                }
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var C = this._indexByModel[a];
                return this.findByCid(C)
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
                    var C = this.findIndexByView(a);
                    this._views.splice(C, 1), this._updateLength()
                }
            },
            _updateLength: function() {
                this.length = this._views.length
            }
        });
        var Dr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            Ci = n.View.extend({
                sortWithCollection: !0,
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, Dr), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _initChildViewStorage: function() {
                    this.children = new an
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
                _onCollectionSort: function(a, C) {
                    var O = C.add,
                        Q = C.merge,
                        Ce = C.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || O || Ce || Q || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(a, C) {
                    var O = C.changes,
                        Q = O.removed.length && this._removeChildModels(O.removed);
                    this._addedViews = O.added.length && this._addChildModels(O.added), this._detachChildren(Q), this._showChildren(), this._removeChildViews(Q)
                },
                _removeChildModels: function(a) {
                    var C = this;
                    return i.reduce(a, function(O, Q) {
                        var Ce = C._removeChildModel(Q);
                        return Ce && O.push(Ce), O
                    }, [])
                },
                _removeChildModel: function(a) {
                    var C = this.children.findByModel(a);
                    return C && this._removeChild(C), C
                },
                _removeChild: function(a) {
                    this.triggerMethod("before:remove:child", this, a), this.children._remove(a), this.triggerMethod("remove:child", this, a)
                },
                _addChildModels: function(a) {
                    return i.map(a, i.bind(this._addChildModel, this))
                },
                _addChildModel: function(a) {
                    var C = this._createChildView(a);
                    return this._addChild(C), C
                },
                _createChildView: function(a) {
                    var C = this._getChildView(a),
                        O = this._getChildViewOptions(a),
                        Q = this.buildChildView(a, C, O);
                    return Q
                },
                _addChild: function(a, C) {
                    this.triggerMethod("before:add:child", this, a), this._setupChildView(a), this.children._add(a, C), this.triggerMethod("add:child", this, a)
                },
                _getChildView: function(a) {
                    var C = this.childView;
                    if (!C) throw new we({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, a), !C) throw new we({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                _getView: function(a, C) {
                    if (a.prototype instanceof n.View || a === n.View) return a;
                    if (i.isFunction(a)) return a.call(this, C)
                },
                _getChildViewOptions: function(a) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(a) : this.childViewOptions
                },
                buildChildView: function(a, C, O) {
                    var Q = i.extend({
                        model: a
                    }, O);
                    return new C(Q)
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
                        var C = this._getEmptyViewOptions(),
                            O = this.getEmptyRegion();
                        O.show(new a(C))
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
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = C.preventRender,
                        Q = this.viewComparator !== a,
                        Ce = Q && !O;
                    return this.viewComparator = a, Ce && this.sort(), this
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
                        C = this._getFilter(),
                        O = this._addedViews;
                    if (delete this._addedViews, !C) return O || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var Q = [],
                        Ce = [];
                    return i.each(this.children._views, function(We, It, Xt) {
                        (C.call(a, We, It, Xt) ? Q : Ce).push(We)
                    }), this._detachChildren(Ce), this.triggerMethod("filter", this, Q, Ce), Q
                },
                _getFilter: function() {
                    var a = this.getFilter();
                    if (!a) return !1;
                    if (i.isFunction(a)) return a;
                    if (i.isObject(a)) {
                        var C = i.matches(a);
                        return function(O) {
                            return C(O.model && O.model.attributes)
                        }
                    }
                    if (i.isString(a)) return function(O) {
                        return O.model && O.model.get(a)
                    };
                    throw new we({
                        name: "InvalidViewFilterError",
                        message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'
                    })
                },
                getFilter: function() {
                    return this.viewFilter
                },
                setFilter: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = C.preventRender,
                        Q = this.viewFilter !== a,
                        Ce = Q && !O;
                    return this.viewFilter = a, Ce && this.filter(), this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _detachChildren: function(a) {
                    i.each(a, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(a) {
                    var C = a._isAttached && this.monitorViewEvents !== !1;
                    C && P(a, "before:detach", a), this.detachHtml(a), C && (a._isAttached = !1, P(a, "detach", a))
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
                    var C = this._getBuffer(a);
                    this._attachChildren(C, a), this.triggerMethod("render:children", this, a)
                },
                _attachChildren: function(a, C) {
                    var O = this._isAttached && this.monitorViewEvents !== !1;
                    C = O ? C : [], i.each(C, function(Q) {
                        Q._isAttached || P(Q, "before:attach", Q)
                    }), this.attachHtml(a), i.each(C, function(Q) {
                        Q._isAttached || (Q._isAttached = !0, P(Q, "attach", Q))
                    })
                },
                _getBuffer: function(a) {
                    var C = this,
                        O = this.Dom.createBuffer();
                    return i.each(a, function(Q) {
                        D(Q), C.Dom.appendContents(O, Q.el, {
                            _$contents: Q.$el
                        })
                    }), O
                },
                attachHtml: function(a) {
                    this.Dom.appendContents(this.el, a, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(a, C) {
                    if (!this.children.hasView(a) || !this.children.hasView(C)) throw new we({
                        name: "ChildSwapError",
                        message: "Both views must be children of the collection view"
                    });
                    return this.children._swap(a, C), this.Dom.swapEl(a.el, C.el), this.Dom.hasEl(this.el, a.el) !== this.Dom.hasEl(this.el, C.el) && this.filter(), this
                },
                addChildView: function(a, C) {
                    return !a || a._isDestroyed || ((!C || C >= this.children.length) && (this._addedViews = [a]), this._addChild(a, C), this._showChildren()), a
                },
                detachChildView: function(a) {
                    return this.removeChildView(a, {
                        shouldDetach: !0
                    }), a
                },
                removeChildView: function(a, C) {
                    return a && (this._removeChildView(a, C), this._removeChild(a), this.isEmpty() && this._showEmptyView(), a)
                },
                _removeChildViews: function(a) {
                    i.each(a, i.bind(this._removeChildView, this))
                },
                _removeChildView: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        O = C.shouldDetach;
                    a.off("destroy", this.removeChildView, this), O ? this._detachChildView(a) : this._destroyChildView(a), this.stopListening(a)
                },
                _destroyChildView: function(a) {
                    a._isDestroyed || (a._shouldDisableEvents = this.monitorViewEvents === !1, G(a))
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
        i.extend(Ci.prototype, q);
        var Ui = ["childViewContainer", "template", "templateContext"],
            xi = On.extend({
                constructor: function(a) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(a, Ui), On.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(a) {
                    var C = this.childView;
                    if (!C) return this.constructor;
                    if (C = this._getView(C, a), !C) throw new we({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                serializeData: function() {
                    return this.serializeModel()
                },
                render: function() {
                    return this._isDestroyed ? this : (this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.renderChildren(), this._isRendering = !1, this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                renderChildren: function() {
                    (this._isRendered || this._isRendering) && On.prototype._renderChildren.call(this)
                },
                attachBuffer: function(a, C) {
                    var O = this.getChildViewContainer(a);
                    this.Dom.appendContents(O[0], C, {
                        _$el: O
                    })
                },
                _insertAfter: function(a) {
                    var C = this.getChildViewContainer(this, a);
                    this.Dom.appendContents(C[0], a.el, {
                        _$el: C,
                        _$contents: a.$el
                    })
                },
                _appendReorderedChildren: function(a) {
                    var C = this.getChildViewContainer(this);
                    this.Dom.appendContents(C[0], a, {
                        _$el: C
                    })
                },
                getChildViewContainer: function(a, C) {
                    if (a.$childViewContainer) return a.$childViewContainer;
                    var O = void 0,
                        Q = a.childViewContainer;
                    if (Q) {
                        var Ce = i.result(a, "childViewContainer");
                        if (Ce.charAt(0) === "@" && a.ui ? O = a.ui[Ce.substr(4)] : O = this.$(Ce), O.length <= 0) throw new we({
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
            Ei = i.pick($n.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(xi.prototype, Ei);
        var Gi = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Wi = g.extend({
                cidPrefix: "mnb",
                constructor: function(a, C) {
                    this.view = C, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, a)), this.mergeOptions(this.options, Gi), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), g.apply(this, arguments)
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
                        C = this.normalizeUIKeys(i.result(this, "events"));
                    return i.reduce(C, function(O, Q, Ce) {
                        return i.isFunction(Q) || (Q = a[Q]), Q && (Ce = Ie(Ce, a.cid), O[Ce] = i.bind(Q, a)), O
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var a = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, a)
                    }
                }
            });
        i.extend(Wi.prototype, Se, lt, Je);
        var yn = ["region", "regionClass"],
            qi = g.extend({
                cidPrefix: "mna",
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, yn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: pe,
                _initRegion: function() {
                    var a = this.region;
                    if (!!a) {
                        var C = {
                            regionClass: this.regionClass
                        };
                        this._region = Ne(a, C)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(a) {
                    for (var C = this.getRegion(), O = arguments.length, Q = Array(O > 1 ? O - 1 : 0), Ce = 1; Ce < O; Ce++) Q[Ce - 1] = arguments[Ce];
                    return C.show.apply(C, [a].concat(Q))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(a) {
                    return this.triggerMethod("before:start", this, a), this.triggerMethod("start", this, a), this
                }
            }),
            _i = ["appRoutes", "controller"],
            Xn = n.Router.extend({
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, _i), n.Router.apply(this, arguments);
                    var C = this.appRoutes,
                        O = this._getController();
                    this.processAppRoutes(O, C), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(a, C) {
                    var O = this._getController();
                    return this._addAppRoute(O, a, C), this
                },
                _processOnRoute: function(a, C) {
                    if (i.isFunction(this.onRoute)) {
                        var O = i.invert(this.appRoutes)[a];
                        this.onRoute(a, O, C)
                    }
                },
                processAppRoutes: function(a, C) {
                    var O = this;
                    if (!C) return this;
                    var Q = i.keys(C).reverse();
                    return i.each(Q, function(Ce) {
                        O._addAppRoute(a, Ce, C[Ce])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(a, C, O) {
                    var Q = a[O];
                    if (!Q) throw new we('Method "' + O + '" was not found on the controller');
                    this.route(C, O, i.bind(Q, a))
                },
                triggerMethod: v
            });
        i.extend(Xn.prototype, Gt);

        function Xi() {
            throw new we({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var Si = n.Marionette,
            et = n.Marionette = {};
        return et.noConflict = function() {
            return n.Marionette = Si, this
        }, et.bindEvents = m(_e), et.unbindEvents = m(ke), et.bindRequests = m(Ke), et.unbindRequests = m(dt), et.mergeOptions = m(M), et.getOption = m($), et.normalizeMethods = m(J), et.extend = E, et.isNodeAttached = A, et.deprecate = k, et.triggerMethod = m(v), et.triggerMethodOn = P, et.isEnabled = it, et.setEnabled = xt, et.monitorViewEvents = oe, et.Behaviors = {}, et.Behaviors.behaviorsLookup = Xi, et.Application = qi, et.AppRouter = Xn, et.Renderer = Ye, et.TemplateCache = S, et.View = $n, et.CollectionView = On, et.NextCollectionView = Ci, et.CompositeView = xi, et.Behavior = Wi, et.Region = pe, et.Error = we, et.Object = g, et.DEV_MODE = !1, et.FEATURES = De, et.VERSION = h, et.DomApi = N, et.setDomApi = function(y) {
            On.setDomApi(y), xi.setDomApi(y), Ci.setDomApi(y), pe.setDomApi(y), $n.setDomApi(y)
        }, et
    }), yt && yt.Marionette && (yt.Mn = yt.Marionette)
})(Gc);
const mt = Gc.exports;
class Gh {
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

function Wh() {
    this.__data__ = [], this.size = 0
}
var qh = Wh;

function Xh(t, e) {
    return t === e || t !== t && e !== e
}
var _o = Xh,
    Yh = _o;

function Kh(t, e) {
    for (var n = t.length; n--;)
        if (Yh(t[n][0], e)) return n;
    return -1
}
var So = Kh,
    Jh = So,
    Qh = Array.prototype,
    Zh = Qh.splice;

function ed(t) {
    var e = this.__data__,
        n = Jh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Zh.call(e, n, 1), --this.size, !0
}
var td = ed,
    nd = So;

function id(t) {
    var e = this.__data__,
        n = nd(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var rd = id,
    sd = So;

function od(t) {
    return sd(this.__data__, t) > -1
}
var ad = od,
    ld = So;

function cd(t, e) {
    var n = this.__data__,
        i = ld(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var ud = cd,
    hd = qh,
    dd = td,
    fd = rd,
    pd = ad,
    gd = ud;

function Sr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Sr.prototype.clear = hd;
Sr.prototype.delete = dd;
Sr.prototype.get = fd;
Sr.prototype.has = pd;
Sr.prototype.set = gd;
var ko = Sr,
    md = ko;

function vd() {
    this.__data__ = new md, this.size = 0
}
var yd = vd;

function wd(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var bd = wd;

function Cd(t) {
    return this.__data__.get(t)
}
var xd = Cd;

function Ed(t) {
    return this.__data__.has(t)
}
var _d = Ed,
    Sd = typeof yt == "object" && yt && yt.Object === Object && yt,
    Wc = Sd,
    kd = Wc,
    Td = typeof self == "object" && self && self.Object === Object && self,
    Ad = kd || Td || Function("return this")(),
    kr = Ad,
    Od = kr,
    Rd = Od.Symbol,
    qc = Rd,
    $l = qc,
    Xc = Object.prototype,
    Id = Xc.hasOwnProperty,
    Md = Xc.toString,
    es = $l ? $l.toStringTag : void 0;

function Dd(t) {
    var e = Id.call(t, es),
        n = t[es];
    try {
        t[es] = void 0;
        var i = !0
    } catch {}
    var o = Md.call(t);
    return i && (e ? t[es] = n : delete t[es]), o
}
var Ld = Dd,
    Pd = Object.prototype,
    Nd = Pd.toString;

function Vd(t) {
    return Nd.call(t)
}
var Bd = Vd,
    Fl = qc,
    $d = Ld,
    Fd = Bd,
    jd = "[object Null]",
    zd = "[object Undefined]",
    jl = Fl ? Fl.toStringTag : void 0;

function Hd(t) {
    return t == null ? t === void 0 ? zd : jd : jl && jl in Object(t) ? $d(t) : Fd(t)
}
var To = Hd;

function Ud(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var ji = Ud,
    Gd = To,
    Wd = ji,
    qd = "[object AsyncFunction]",
    Xd = "[object Function]",
    Yd = "[object GeneratorFunction]",
    Kd = "[object Proxy]";

function Jd(t) {
    if (!Wd(t)) return !1;
    var e = Gd(t);
    return e == Xd || e == Yd || e == qd || e == Kd
}
var sl = Jd,
    Qd = kr,
    Zd = Qd["__core-js_shared__"],
    ef = Zd,
    va = ef,
    zl = function() {
        var t = /[^.]+$/.exec(va && va.keys && va.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function tf(t) {
    return !!zl && zl in t
}
var nf = tf,
    rf = Function.prototype,
    sf = rf.toString;

function of(t) {
    if (t != null) {
        try {
            return sf.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var af = of,
    lf = sl,
    cf = nf,
    uf = ji,
    hf = af,
    df = /[\\^$.*+?()[\]{}|]/g,
    ff = /^\[object .+?Constructor\]$/,
    pf = Function.prototype,
    gf = Object.prototype,
    mf = pf.toString,
    vf = gf.hasOwnProperty,
    yf = RegExp("^" + mf.call(vf).replace(df, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function wf(t) {
    if (!uf(t) || cf(t)) return !1;
    var e = lf(t) ? yf : ff;
    return e.test(hf(t))
}
var bf = wf;

function Cf(t, e) {
    return t == null ? void 0 : t[e]
}
var xf = Cf,
    Ef = bf,
    _f = xf;

function Sf(t, e) {
    var n = _f(t, e);
    return Ef(n) ? n : void 0
}
var ol = Sf,
    kf = ol,
    Tf = kr,
    Af = kf(Tf, "Map"),
    Yc = Af,
    Of = ol,
    Rf = Of(Object, "create"),
    Ao = Rf,
    Hl = Ao;

function If() {
    this.__data__ = Hl ? Hl(null) : {}, this.size = 0
}
var Mf = If;

function Df(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var Lf = Df,
    Pf = Ao,
    Nf = "__lodash_hash_undefined__",
    Vf = Object.prototype,
    Bf = Vf.hasOwnProperty;

function $f(t) {
    var e = this.__data__;
    if (Pf) {
        var n = e[t];
        return n === Nf ? void 0 : n
    }
    return Bf.call(e, t) ? e[t] : void 0
}
var Ff = $f,
    jf = Ao,
    zf = Object.prototype,
    Hf = zf.hasOwnProperty;

function Uf(t) {
    var e = this.__data__;
    return jf ? e[t] !== void 0 : Hf.call(e, t)
}
var Gf = Uf,
    Wf = Ao,
    qf = "__lodash_hash_undefined__";

function Xf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = Wf && e === void 0 ? qf : e, this
}
var Yf = Xf,
    Kf = Mf,
    Jf = Lf,
    Qf = Ff,
    Zf = Gf,
    ep = Yf;

function Tr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Tr.prototype.clear = Kf;
Tr.prototype.delete = Jf;
Tr.prototype.get = Qf;
Tr.prototype.has = Zf;
Tr.prototype.set = ep;
var tp = Tr,
    Ul = tp,
    np = ko,
    ip = Yc;

function rp() {
    this.size = 0, this.__data__ = {
        hash: new Ul,
        map: new(ip || np),
        string: new Ul
    }
}
var sp = rp;

function op(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var ap = op,
    lp = ap;

function cp(t, e) {
    var n = t.__data__;
    return lp(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var Oo = cp,
    up = Oo;

function hp(t) {
    var e = up(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var dp = hp,
    fp = Oo;

function pp(t) {
    return fp(this, t).get(t)
}
var gp = pp,
    mp = Oo;

function vp(t) {
    return mp(this, t).has(t)
}
var yp = vp,
    wp = Oo;

function bp(t, e) {
    var n = wp(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Cp = bp,
    xp = sp,
    Ep = dp,
    _p = gp,
    Sp = yp,
    kp = Cp;

function Ar(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Ar.prototype.clear = xp;
Ar.prototype.delete = Ep;
Ar.prototype.get = _p;
Ar.prototype.has = Sp;
Ar.prototype.set = kp;
var Tp = Ar,
    Ap = ko,
    Op = Yc,
    Rp = Tp,
    Ip = 200;

function Mp(t, e) {
    var n = this.__data__;
    if (n instanceof Ap) {
        var i = n.__data__;
        if (!Op || i.length < Ip - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new Rp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var Dp = Mp,
    Lp = ko,
    Pp = yd,
    Np = bd,
    Vp = xd,
    Bp = _d,
    $p = Dp;

function Or(t) {
    var e = this.__data__ = new Lp(t);
    this.size = e.size
}
Or.prototype.clear = Pp;
Or.prototype.delete = Np;
Or.prototype.get = Vp;
Or.prototype.has = Bp;
Or.prototype.set = $p;
var Fp = Or,
    jp = ol,
    zp = function() {
        try {
            var t = jp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Kc = zp,
    Gl = Kc;

function Hp(t, e, n) {
    e == "__proto__" && Gl ? Gl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var al = Hp,
    Up = al,
    Gp = _o;

function Wp(t, e, n) {
    (n !== void 0 && !Gp(t[e], n) || n === void 0 && !(e in t)) && Up(t, e, n)
}
var Jc = Wp;

function qp(t) {
    return function(e, n, i) {
        for (var o = -1, h = Object(e), m = i(e), E = m.length; E--;) {
            var k = m[t ? E : ++o];
            if (n(h[k], k, h) === !1) break
        }
        return e
    }
}
var Xp = qp,
    Yp = Xp,
    Kp = Yp(),
    Jp = Kp,
    Fa = {
        exports: {}
    };
(function(t, e) {
    var n = kr,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        h = o && o.exports === i,
        m = h ? n.Buffer : void 0,
        E = m ? m.allocUnsafe : void 0;

    function k(A, M) {
        if (M) return A.slice();
        var $ = A.length,
            J = E ? E($) : new A.constructor($);
        return A.copy(J), J
    }
    t.exports = k
})(Fa, Fa.exports);
var Qp = kr,
    Zp = Qp.Uint8Array,
    eg = Zp,
    Wl = eg;

function tg(t) {
    var e = new t.constructor(t.byteLength);
    return new Wl(e).set(new Wl(t)), e
}
var ng = tg,
    ig = ng;

function rg(t, e) {
    var n = e ? ig(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var sg = rg;

function og(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var ag = og,
    lg = ji,
    ql = Object.create,
    cg = function() {
        function t() {}
        return function(e) {
            if (!lg(e)) return {};
            if (ql) return ql(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    ug = cg;

function hg(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var dg = hg,
    fg = dg,
    pg = fg(Object.getPrototypeOf, Object),
    Qc = pg,
    gg = Object.prototype;

function mg(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || gg;
    return t === n
}
var Zc = mg,
    vg = ug,
    yg = Qc,
    wg = Zc;

function bg(t) {
    return typeof t.constructor == "function" && !wg(t) ? vg(yg(t)) : {}
}
var Cg = bg;

function xg(t) {
    return t != null && typeof t == "object"
}
var vs = xg,
    Eg = To,
    _g = vs,
    Sg = "[object Arguments]";

function kg(t) {
    return _g(t) && Eg(t) == Sg
}
var Tg = kg,
    Xl = Tg,
    Ag = vs,
    eu = Object.prototype,
    Og = eu.hasOwnProperty,
    Rg = eu.propertyIsEnumerable,
    Ig = Xl(function() {
        return arguments
    }()) ? Xl : function(t) {
        return Ag(t) && Og.call(t, "callee") && !Rg.call(t, "callee")
    },
    tu = Ig,
    Mg = Array.isArray,
    nu = Mg,
    Dg = 9007199254740991;

function Lg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Dg
}
var iu = Lg,
    Pg = sl,
    Ng = iu;

function Vg(t) {
    return t != null && Ng(t.length) && !Pg(t)
}
var ll = Vg,
    Bg = ll,
    $g = vs;

function Fg(t) {
    return $g(t) && Bg(t)
}
var jg = Fg,
    oo = {
        exports: {}
    };

function zg() {
    return !1
}
var Hg = zg;
(function(t, e) {
    var n = kr,
        i = Hg,
        o = e && !e.nodeType && e,
        h = o && !0 && t && !t.nodeType && t,
        m = h && h.exports === o,
        E = m ? n.Buffer : void 0,
        k = E ? E.isBuffer : void 0,
        A = k || i;
    t.exports = A
})(oo, oo.exports);
var Ug = To,
    Gg = Qc,
    Wg = vs,
    qg = "[object Object]",
    Xg = Function.prototype,
    Yg = Object.prototype,
    ru = Xg.toString,
    Kg = Yg.hasOwnProperty,
    Jg = ru.call(Object);

function Qg(t) {
    if (!Wg(t) || Ug(t) != qg) return !1;
    var e = Gg(t);
    if (e === null) return !0;
    var n = Kg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && ru.call(n) == Jg
}
var Zg = Qg,
    em = To,
    tm = iu,
    nm = vs,
    im = "[object Arguments]",
    rm = "[object Array]",
    sm = "[object Boolean]",
    om = "[object Date]",
    am = "[object Error]",
    lm = "[object Function]",
    cm = "[object Map]",
    um = "[object Number]",
    hm = "[object Object]",
    dm = "[object RegExp]",
    fm = "[object Set]",
    pm = "[object String]",
    gm = "[object WeakMap]",
    mm = "[object ArrayBuffer]",
    vm = "[object DataView]",
    ym = "[object Float32Array]",
    wm = "[object Float64Array]",
    bm = "[object Int8Array]",
    Cm = "[object Int16Array]",
    xm = "[object Int32Array]",
    Em = "[object Uint8Array]",
    _m = "[object Uint8ClampedArray]",
    Sm = "[object Uint16Array]",
    km = "[object Uint32Array]",
    Dt = {};
Dt[ym] = Dt[wm] = Dt[bm] = Dt[Cm] = Dt[xm] = Dt[Em] = Dt[_m] = Dt[Sm] = Dt[km] = !0;
Dt[im] = Dt[rm] = Dt[mm] = Dt[sm] = Dt[vm] = Dt[om] = Dt[am] = Dt[lm] = Dt[cm] = Dt[um] = Dt[hm] = Dt[dm] = Dt[fm] = Dt[pm] = Dt[gm] = !1;

function Tm(t) {
    return nm(t) && tm(t.length) && !!Dt[em(t)]
}
var Am = Tm;

function Om(t) {
    return function(e) {
        return t(e)
    }
}
var Rm = Om,
    ja = {
        exports: {}
    };
(function(t, e) {
    var n = Wc,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        h = o && o.exports === i,
        m = h && n.process,
        E = function() {
            try {
                var k = o && o.require && o.require("util").types;
                return k || m && m.binding && m.binding("util")
            } catch {}
        }();
    t.exports = E
})(ja, ja.exports);
var Im = Am,
    Mm = Rm,
    Yl = ja.exports,
    Kl = Yl && Yl.isTypedArray,
    Dm = Kl ? Mm(Kl) : Im,
    su = Dm;

function Lm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var ou = Lm,
    Pm = al,
    Nm = _o,
    Vm = Object.prototype,
    Bm = Vm.hasOwnProperty;

function $m(t, e, n) {
    var i = t[e];
    (!(Bm.call(t, e) && Nm(i, n)) || n === void 0 && !(e in t)) && Pm(t, e, n)
}
var Fm = $m,
    jm = Fm,
    zm = al;

function Hm(t, e, n, i) {
    var o = !n;
    n || (n = {});
    for (var h = -1, m = e.length; ++h < m;) {
        var E = e[h],
            k = i ? i(n[E], t[E], E, n, t) : void 0;
        k === void 0 && (k = t[E]), o ? zm(n, E, k) : jm(n, E, k)
    }
    return n
}
var Um = Hm;

function Gm(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var Wm = Gm,
    qm = 9007199254740991,
    Xm = /^(?:0|[1-9]\d*)$/;

function Ym(t, e) {
    var n = typeof t;
    return e = e == null ? qm : e, !!e && (n == "number" || n != "symbol" && Xm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var au = Ym,
    Km = Wm,
    Jm = tu,
    Qm = nu,
    Zm = oo.exports,
    ev = au,
    tv = su,
    nv = Object.prototype,
    iv = nv.hasOwnProperty;

function rv(t, e) {
    var n = Qm(t),
        i = !n && Jm(t),
        o = !n && !i && Zm(t),
        h = !n && !i && !o && tv(t),
        m = n || i || o || h,
        E = m ? Km(t.length, String) : [],
        k = E.length;
    for (var A in t)(e || iv.call(t, A)) && !(m && (A == "length" || o && (A == "offset" || A == "parent") || h && (A == "buffer" || A == "byteLength" || A == "byteOffset") || ev(A, k))) && E.push(A);
    return E
}
var sv = rv;

function ov(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var av = ov,
    lv = ji,
    cv = Zc,
    uv = av,
    hv = Object.prototype,
    dv = hv.hasOwnProperty;

function fv(t) {
    if (!lv(t)) return uv(t);
    var e = cv(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !dv.call(t, i)) || n.push(i);
    return n
}
var pv = fv,
    gv = sv,
    mv = pv,
    vv = ll;

function yv(t) {
    return vv(t) ? gv(t, !0) : mv(t)
}
var lu = yv,
    wv = Um,
    bv = lu;

function Cv(t) {
    return wv(t, bv(t))
}
var xv = Cv,
    Jl = Jc,
    Ev = Fa.exports,
    _v = sg,
    Sv = ag,
    kv = Cg,
    Ql = tu,
    Zl = nu,
    Tv = jg,
    Av = oo.exports,
    Ov = sl,
    Rv = ji,
    Iv = Zg,
    Mv = su,
    ec = ou,
    Dv = xv;

function Lv(t, e, n, i, o, h, m) {
    var E = ec(t, n),
        k = ec(e, n),
        A = m.get(k);
    if (A) {
        Jl(t, n, A);
        return
    }
    var M = h ? h(E, k, n + "", t, e, m) : void 0,
        $ = M === void 0;
    if ($) {
        var J = Zl(k),
            ie = !J && Av(k),
            Y = !J && !ie && Mv(k);
        M = k, J || ie || Y ? Zl(E) ? M = E : Tv(E) ? M = Sv(E) : ie ? ($ = !1, M = Ev(k, !0)) : Y ? ($ = !1, M = _v(k, !0)) : M = [] : Iv(k) || Ql(k) ? (M = E, Ql(E) ? M = Dv(E) : (!Rv(E) || Ov(E)) && (M = kv(k))) : $ = !1
    }
    $ && (m.set(k, M), o(M, k, i, h, m), m.delete(k)), Jl(t, n, M)
}
var Pv = Lv,
    Nv = Fp,
    Vv = Jc,
    Bv = Jp,
    $v = Pv,
    Fv = ji,
    jv = lu,
    zv = ou;

function cu(t, e, n, i, o) {
    t !== e && Bv(e, function(h, m) {
        if (o || (o = new Nv), Fv(h)) $v(t, e, m, n, cu, i, o);
        else {
            var E = i ? i(zv(t, m), h, m + "", t, e, o) : void 0;
            E === void 0 && (E = h), Vv(t, m, E)
        }
    }, jv)
}
var Hv = cu;

function Uv(t) {
    return t
}
var uu = Uv;

function Gv(t, e, n) {
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
var Wv = Gv,
    qv = Wv,
    tc = Math.max;

function Xv(t, e, n) {
    return e = tc(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, o = -1, h = tc(i.length - e, 0), m = Array(h); ++o < h;) m[o] = i[e + o];
            o = -1;
            for (var E = Array(e + 1); ++o < e;) E[o] = i[o];
            return E[e] = n(m), qv(t, this, E)
        }
}
var Yv = Xv;

function Kv(t) {
    return function() {
        return t
    }
}
var Jv = Kv,
    Qv = Jv,
    nc = Kc,
    Zv = uu,
    ey = nc ? function(t, e) {
        return nc(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Qv(e),
            writable: !0
        })
    } : Zv,
    ty = ey,
    ny = 800,
    iy = 16,
    ry = Date.now;

function sy(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = ry(),
            o = iy - (i - n);
        if (n = i, o > 0) {
            if (++e >= ny) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var oy = sy,
    ay = ty,
    ly = oy,
    cy = ly(ay),
    uy = cy,
    hy = uu,
    dy = Yv,
    fy = uy;

function py(t, e) {
    return fy(dy(t, e, hy), t + "")
}
var gy = py,
    my = _o,
    vy = ll,
    yy = au,
    wy = ji;

function by(t, e, n) {
    if (!wy(n)) return !1;
    var i = typeof e;
    return (i == "number" ? vy(n) && yy(e, n.length) : i == "string" && e in n) ? my(n[e], t) : !1
}
var Cy = by,
    xy = gy,
    Ey = Cy;

function _y(t) {
    return xy(function(e, n) {
        var i = -1,
            o = n.length,
            h = o > 1 ? n[o - 1] : void 0,
            m = o > 2 ? n[2] : void 0;
        for (h = t.length > 3 && typeof h == "function" ? (o--, h) : void 0, m && Ey(n[0], n[1], m) && (h = o < 3 ? void 0 : h, o = 1), e = Object(e); ++i < o;) {
            var E = n[i];
            E && t(e, E, i, h)
        }
        return e
    })
}
var Sy = _y,
    ky = Hv,
    Ty = Sy,
    Ay = Ty(function(t, e, n) {
        ky(t, e, n)
    }),
    Oy = Ay;
class za {
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
        return Oy(e[0], ...e)
    }
}
ot(za, "locale"), ot(za, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const Nl = class {
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
        const h = parseInt(o, 16),
            m = Math.min(Math.max(0, (h >> 16) * n), 255),
            E = Math.min(Math.max(0, (h >> 8 & 255) * n), 255);
        let A = (Math.min(Math.max(0, (h & 255) * n), 255) | E << 8 | m << 16).toString(16);
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
let sn = Nl;
ot(sn, "queryParams", new URLSearchParams(window.location.search)), ot(sn, "getQueryParam", e => Nl.queryParams.get(e)), ot(sn, "sleep", e => new Promise(n => {
    window.setTimeout(n, e)
}));
class tn {
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
            namespace: (o = (i = sn.getQueryParam("namespace")) != null ? i : sn.getQueryParam("ns")) != null ? o : this.defaultNamespace,
            isDisabled: sn.queryParams.has("incognito") || sn.queryParams.has("nc")
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
            o = n.split("-")[0];
        let h = JSON.parse(i);
        h = h.filter(E => {
            const k = E.split("-")[0];
            return o !== k
        }), h.push(n), this.set("tags", JSON.stringify(h))
    }
    static getScopedKey(e, n) {
        const i = `${this.namespace}:${e}`,
            o = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            h = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (n === "none") return i;
        if (n === "tag") {
            if (!o) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return o
        }
        if (n === "code") {
            if (!h) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return h
        }
        return h && window.localStorage.getItem(h) !== null ? h : o && window.localStorage.getItem(o) !== null ? o : i
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
                h = window.localStorage.getItem(i);
            !h || (window.localStorage.setItem(o, h), window.localStorage.removeItem(i))
        })
    }
}
ot(tn, "defaultNamespace", "tv");
class Fi {
    constructor() {
        ot(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Fi.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!tn.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            o = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            h = `${i}://${o}/artifact/${e.categoryId}/${e.artifactId}/`,
            m = tn.get("galleries") || "[]";
        try {
            const E = JSON.parse(m) || [];
            if (E.some(k => k.url === h)) return;
            E.unshift({
                url: h,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), tn.set("galleries", JSON.stringify(E.slice(0, 40)))
        } catch {
            console.warn("[Artifacts] Unable to add artifact to local storage")
        }
    }
    remove(e) {
        if (!tn.isSupported) return;
        const n = tn.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.splice(e, 1), tn.set("galleries", JSON.stringify(i)), this.artifacts = this.list()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    setAsViewed(e) {
        Fi.setAsViewed(e), this.artifacts = this.list()
    }
    static setAsViewed(e) {
        if (!tn.isSupported) return;
        const n = tn.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.length && (i[e].viewed = !0), tn.set("galleries", JSON.stringify(i))
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    static isTestArtifact(e) {
        var n;
        return ((n = e == null ? void 0 : e.rootId) == null ? void 0 : n.indexOf("test")) !== -1
    }
    list() {
        if (!tn.isSupported) return [];
        const e = new Intl.DateTimeFormat(za.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = tn.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(h => i - h.time < 525600 * 60 * 1e3).map(h => {
                const m = new Date(h.time),
                    E = e.format(m),
                    k = h.url.split("/"),
                    A = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let M = h.categoryId;
                return M || (h.url.indexOf("Quiplash2") !== -1 ? M = "Quiplash2Game" : h.url.indexOf("Drawful") !== -1 ? M = "DrawfulGame" : h.url.indexOf("TeeKO") !== -1 ? M = "TeeKOGame" : h.url.indexOf("TriviaDeath") !== -1 && (M = "TriviaDeathResults")), {
                    id: A,
                    gameName: M,
                    date: E,
                    ...h
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Ha = {
    exports: {}
};
(function(t, e) {
    var n = typeof self < "u" ? self : yt,
        i = function() {
            function h() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return h.prototype = n, new h
        }();
    (function(h) {
        (function(m) {
            var E = {
                searchParams: "URLSearchParams" in h,
                iterable: "Symbol" in h && "iterator" in Symbol,
                blob: "FileReader" in h && "Blob" in h && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in h,
                arrayBuffer: "ArrayBuffer" in h
            };

            function k(U) {
                return U && DataView.prototype.isPrototypeOf(U)
            }
            if (E.arrayBuffer) var A = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                M = ArrayBuffer.isView || function(U) {
                    return U && A.indexOf(Object.prototype.toString.call(U)) > -1
                };

            function $(U) {
                if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                return U.toLowerCase()
            }

            function J(U) {
                return typeof U != "string" && (U = String(U)), U
            }

            function ie(U) {
                var oe = {
                    next: function() {
                        var Te = U.shift();
                        return {
                            done: Te === void 0,
                            value: Te
                        }
                    }
                };
                return E.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function Y(U) {
                this.map = {}, U instanceof Y ? U.forEach(function(oe, Te) {
                    this.append(Te, oe)
                }, this) : Array.isArray(U) ? U.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : U && Object.getOwnPropertyNames(U).forEach(function(oe) {
                    this.append(oe, U[oe])
                }, this)
            }
            Y.prototype.append = function(U, oe) {
                U = $(U), oe = J(oe);
                var Te = this.map[U];
                this.map[U] = Te ? Te + ", " + oe : oe
            }, Y.prototype.delete = function(U) {
                delete this.map[$(U)]
            }, Y.prototype.get = function(U) {
                return U = $(U), this.has(U) ? this.map[U] : null
            }, Y.prototype.has = function(U) {
                return this.map.hasOwnProperty($(U))
            }, Y.prototype.set = function(U, oe) {
                this.map[$(U)] = J(oe)
            }, Y.prototype.forEach = function(U, oe) {
                for (var Te in this.map) this.map.hasOwnProperty(Te) && U.call(oe, this.map[Te], Te, this)
            }, Y.prototype.keys = function() {
                var U = [];
                return this.forEach(function(oe, Te) {
                    U.push(Te)
                }), ie(U)
            }, Y.prototype.values = function() {
                var U = [];
                return this.forEach(function(oe) {
                    U.push(oe)
                }), ie(U)
            }, Y.prototype.entries = function() {
                var U = [];
                return this.forEach(function(oe, Te) {
                    U.push([Te, oe])
                }), ie(U)
            }, E.iterable && (Y.prototype[Symbol.iterator] = Y.prototype.entries);

            function re(U) {
                if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                U.bodyUsed = !0
            }

            function v(U) {
                return new Promise(function(oe, Te) {
                    U.onload = function() {
                        oe(U.result)
                    }, U.onerror = function() {
                        Te(U.error)
                    }
                })
            }

            function P(U) {
                var oe = new FileReader,
                    Te = v(oe);
                return oe.readAsArrayBuffer(U), Te
            }

            function W(U) {
                var oe = new FileReader,
                    Te = v(oe);
                return oe.readAsText(U), Te
            }

            function ae(U) {
                for (var oe = new Uint8Array(U), Te = new Array(oe.length), we = 0; we < oe.length; we++) Te[we] = String.fromCharCode(oe[we]);
                return Te.join("")
            }

            function se(U) {
                if (U.slice) return U.slice(0);
                var oe = new Uint8Array(U.byteLength);
                return oe.set(new Uint8Array(U)), oe.buffer
            }

            function ve() {
                return this.bodyUsed = !1, this._initBody = function(U) {
                    this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : E.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : E.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : E.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : E.arrayBuffer && E.blob && k(U) ? (this._bodyArrayBuffer = se(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : E.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || M(U)) ? this._bodyArrayBuffer = se(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : E.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, E.blob && (this.blob = function() {
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
                    if (this._bodyBlob) return W(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, E.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Ee(U) {
                var oe = U.toUpperCase();
                return f.indexOf(oe) > -1 ? oe : U
            }

            function Ae(U, oe) {
                oe = oe || {};
                var Te = oe.body;
                if (U instanceof Ae) {
                    if (U.bodyUsed) throw new TypeError("Already read");
                    this.url = U.url, this.credentials = U.credentials, oe.headers || (this.headers = new Y(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !Te && U._bodyInit != null && (Te = U._bodyInit, U.bodyUsed = !0)
                } else this.url = String(U);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new Y(oe.headers)), this.method = Ee(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Te) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Te)
            }
            Ae.prototype.clone = function() {
                return new Ae(this, {
                    body: this._bodyInit
                })
            };

            function Pe(U) {
                var oe = new FormData;
                return U.trim().split("&").forEach(function(Te) {
                    if (Te) {
                        var we = Te.split("="),
                            ye = we.shift().replace(/\+/g, " "),
                            ue = we.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(ye), decodeURIComponent(ue))
                    }
                }), oe
            }

            function at(U) {
                var oe = new Y,
                    Te = U.replace(/\r?\n[\t ]+/g, " ");
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

            function Be(U, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new Y(oe.headers), this.url = oe.url || "", this._initBody(U)
            }
            ve.call(Be.prototype), Be.prototype.clone = function() {
                return new Be(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Y(this.headers),
                    url: this.url
                })
            }, Be.error = function() {
                var U = new Be(null, {
                    status: 0,
                    statusText: ""
                });
                return U.type = "error", U
            };
            var K = [301, 302, 303, 307, 308];
            Be.redirect = function(U, oe) {
                if (K.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
                    status: oe,
                    headers: {
                        location: U
                    }
                })
            }, m.DOMException = h.DOMException;
            try {
                new m.DOMException
            } catch {
                m.DOMException = function(oe, Te) {
                    this.message = oe, this.name = Te;
                    var we = Error(oe);
                    this.stack = we.stack
                }, m.DOMException.prototype = Object.create(Error.prototype), m.DOMException.prototype.constructor = m.DOMException
            }

            function je(U, oe) {
                return new Promise(function(Te, we) {
                    var ye = new Ae(U, oe);
                    if (ye.signal && ye.signal.aborted) return we(new m.DOMException("Aborted", "AbortError"));
                    var ue = new XMLHttpRequest;

                    function _e() {
                        ue.abort()
                    }
                    ue.onload = function() {
                        var ke = {
                            status: ue.status,
                            statusText: ue.statusText,
                            headers: at(ue.getAllResponseHeaders() || "")
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
                    }, ue.open(ye.method, ye.url, !0), ye.credentials === "include" ? ue.withCredentials = !0 : ye.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && E.blob && (ue.responseType = "blob"), ye.headers.forEach(function(ke, $e) {
                        ue.setRequestHeader($e, ke)
                    }), ye.signal && (ye.signal.addEventListener("abort", _e), ue.onreadystatechange = function() {
                        ue.readyState === 4 && ye.signal.removeEventListener("abort", _e)
                    }), ue.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                })
            }
            return je.polyfill = !0, h.fetch || (h.fetch = je, h.Headers = Y, h.Request = Ae, h.Response = Be), m.Headers = Y, m.Request = Ae, m.Response = Be, m.fetch = je, Object.defineProperty(m, "__esModule", {
                value: !0
            }), m
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var o = i;
    e = o.fetch, e.default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, t.exports = e
})(Ha, Ha.exports);
var Ry = function() {
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
        var h = Object.getOwnPropertySymbols(e);
        if (h.length !== 1 || h[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var m = Object.getOwnPropertyDescriptor(e, n);
            if (m.value !== o || m.enumerable !== !0) return !1
        }
        return !0
    },
    ic = typeof Symbol < "u" && Symbol,
    Iy = Ry,
    My = function() {
        return typeof ic != "function" || typeof Symbol != "function" || typeof ic("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Iy()
    },
    Dy = "Function.prototype.bind called on incompatible ",
    ya = Array.prototype.slice,
    Ly = Object.prototype.toString,
    Py = "[object Function]",
    Ny = function(e) {
        var n = this;
        if (typeof n != "function" || Ly.call(n) !== Py) throw new TypeError(Dy + n);
        for (var i = ya.call(arguments, 1), o, h = function() {
                if (this instanceof o) {
                    var M = n.apply(this, i.concat(ya.call(arguments)));
                    return Object(M) === M ? M : this
                } else return n.apply(e, i.concat(ya.call(arguments)))
            }, m = Math.max(0, n.length - i.length), E = [], k = 0; k < m; k++) E.push("$" + k);
        if (o = Function("binder", "return function (" + E.join(",") + "){ return binder.apply(this,arguments); }")(h), n.prototype) {
            var A = function() {};
            A.prototype = n.prototype, o.prototype = new A, A.prototype = null
        }
        return o
    },
    Vy = Ny,
    cl = Function.prototype.bind || Vy,
    By = cl,
    $y = By.call(Function.call, Object.prototype.hasOwnProperty),
    vt, Cr = SyntaxError,
    hu = Function,
    mr = TypeError,
    wa = function(t) {
        try {
            return hu('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Bi = Object.getOwnPropertyDescriptor;
if (Bi) try {
    Bi({}, "")
} catch {
    Bi = null
}
var ba = function() {
        throw new mr
    },
    Fy = Bi ? function() {
        try {
            return arguments.callee, ba
        } catch {
            try {
                return Bi(arguments, "callee").get
            } catch {
                return ba
            }
        }
    }() : ba,
    lr = My(),
    di = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    dr = {},
    jy = typeof Uint8Array > "u" ? vt : di(Uint8Array),
    vr = {
        "%AggregateError%": typeof AggregateError > "u" ? vt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? vt : ArrayBuffer,
        "%ArrayIteratorPrototype%": lr ? di([][Symbol.iterator]()) : vt,
        "%AsyncFromSyncIteratorPrototype%": vt,
        "%AsyncFunction%": dr,
        "%AsyncGenerator%": dr,
        "%AsyncGeneratorFunction%": dr,
        "%AsyncIteratorPrototype%": dr,
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
        "%Function%": hu,
        "%GeneratorFunction%": dr,
        "%Int8Array%": typeof Int8Array > "u" ? vt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? vt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? vt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": lr ? di(di([][Symbol.iterator]())) : vt,
        "%JSON%": typeof JSON == "object" ? JSON : vt,
        "%Map%": typeof Map > "u" ? vt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !lr ? vt : di(new Map()[Symbol.iterator]()),
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
        "%SetIteratorPrototype%": typeof Set > "u" || !lr ? vt : di(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? vt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": lr ? di("" [Symbol.iterator]()) : vt,
        "%Symbol%": lr ? Symbol : vt,
        "%SyntaxError%": Cr,
        "%ThrowTypeError%": Fy,
        "%TypedArray%": jy,
        "%TypeError%": mr,
        "%Uint8Array%": typeof Uint8Array > "u" ? vt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? vt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? vt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? vt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? vt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? vt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? vt : WeakSet
    },
    zy = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = wa("async function () {}");
        else if (e === "%GeneratorFunction%") n = wa("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = wa("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var o = t("%AsyncGenerator%");
            o && (n = di(o.prototype))
        }
        return vr[e] = n, n
    },
    rc = {
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
    ys = cl,
    ao = $y,
    Hy = ys.call(Function.call, Array.prototype.concat),
    Uy = ys.call(Function.apply, Array.prototype.splice),
    sc = ys.call(Function.call, String.prototype.replace),
    lo = ys.call(Function.call, String.prototype.slice),
    Gy = ys.call(Function.call, RegExp.prototype.exec),
    Wy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    qy = /\\(\\)?/g,
    Xy = function(e) {
        var n = lo(e, 0, 1),
            i = lo(e, -1);
        if (n === "%" && i !== "%") throw new Cr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new Cr("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return sc(e, Wy, function(h, m, E, k) {
            o[o.length] = E ? sc(k, qy, "$1") : m || h
        }), o
    },
    Yy = function(e, n) {
        var i = e,
            o;
        if (ao(rc, i) && (o = rc[i], i = "%" + o[0] + "%"), ao(vr, i)) {
            var h = vr[i];
            if (h === dr && (h = zy(i)), typeof h > "u" && !n) throw new mr("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: o,
                name: i,
                value: h
            }
        }
        throw new Cr("intrinsic " + e + " does not exist!")
    },
    ul = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new mr("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new mr('"allowMissing" argument must be a boolean');
        if (Gy(/^%?[^%]*%?$/g, e) === null) throw new Cr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = Xy(e),
            o = i.length > 0 ? i[0] : "",
            h = Yy("%" + o + "%", n),
            m = h.name,
            E = h.value,
            k = !1,
            A = h.alias;
        A && (o = A[0], Uy(i, Hy([0, 1], A)));
        for (var M = 1, $ = !0; M < i.length; M += 1) {
            var J = i[M],
                ie = lo(J, 0, 1),
                Y = lo(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || Y === '"' || Y === "'" || Y === "`") && ie !== Y) throw new Cr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !$) && (k = !0), o += "." + J, m = "%" + o + "%", ao(vr, m)) E = vr[m];
            else if (E != null) {
                if (!(J in E)) {
                    if (!n) throw new mr("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Bi && M + 1 >= i.length) {
                    var re = Bi(E, J);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? E = re.get : E = E[J]
                } else $ = ao(E, J), E = E[J];
                $ && !k && (vr[m] = E)
            }
        }
        return E
    },
    du = {
        exports: {}
    };
(function(t) {
    var e = cl,
        n = ul,
        i = n("%Function.prototype.apply%"),
        o = n("%Function.prototype.call%"),
        h = n("%Reflect.apply%", !0) || e.call(o, i),
        m = n("%Object.getOwnPropertyDescriptor%", !0),
        E = n("%Object.defineProperty%", !0),
        k = n("%Math.max%");
    if (E) try {
        E({}, "a", {
            value: 1
        })
    } catch {
        E = null
    }
    t.exports = function($) {
        var J = h(e, o, arguments);
        if (m && E) {
            var ie = m(J, "length");
            ie.configurable && E(J, "length", {
                value: 1 + k(0, $.length - (arguments.length - 1))
            })
        }
        return J
    };
    var A = function() {
        return h(e, i, arguments)
    };
    E ? E(t.exports, "apply", {
        value: A
    }) : t.exports.apply = A
})(du);
var fu = ul,
    pu = du.exports,
    Ky = pu(fu("String.prototype.indexOf")),
    Jy = function(e, n) {
        var i = fu(e, !!n);
        return typeof i == "function" && Ky(e, ".prototype.") > -1 ? pu(i) : i
    };
const Qy = {},
    Zy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Qy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    ew = Hh(Zy);
var hl = typeof Map == "function" && Map.prototype,
    Ca = Object.getOwnPropertyDescriptor && hl ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    co = hl && Ca && typeof Ca.get == "function" ? Ca.get : null,
    tw = hl && Map.prototype.forEach,
    dl = typeof Set == "function" && Set.prototype,
    xa = Object.getOwnPropertyDescriptor && dl ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    uo = dl && xa && typeof xa.get == "function" ? xa.get : null,
    nw = dl && Set.prototype.forEach,
    iw = typeof WeakMap == "function" && WeakMap.prototype,
    ls = iw ? WeakMap.prototype.has : null,
    rw = typeof WeakSet == "function" && WeakSet.prototype,
    cs = rw ? WeakSet.prototype.has : null,
    sw = typeof WeakRef == "function" && WeakRef.prototype,
    oc = sw ? WeakRef.prototype.deref : null,
    ow = Boolean.prototype.valueOf,
    aw = Object.prototype.toString,
    lw = Function.prototype.toString,
    cw = String.prototype.match,
    fl = String.prototype.slice,
    mi = String.prototype.replace,
    uw = String.prototype.toUpperCase,
    ac = String.prototype.toLowerCase,
    gu = RegExp.prototype.test,
    lc = Array.prototype.concat,
    Un = Array.prototype.join,
    hw = Array.prototype.slice,
    cc = Math.floor,
    Ua = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    Ea = Object.getOwnPropertySymbols,
    Ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    xr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    hn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === xr ? "object" : "symbol") ? Symbol.toStringTag : null,
    mu = Object.prototype.propertyIsEnumerable,
    uc = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function hc(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || gu.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -cc(-t) : cc(t);
        if (i !== t) {
            var o = String(i),
                h = fl.call(e, o.length + 1);
            return mi.call(o, n, "$&_") + "." + mi.call(mi.call(h, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return mi.call(e, n, "$&_")
}
var Wa = ew,
    dc = Wa.custom,
    fc = yu(dc) ? dc : null,
    dw = function t(e, n, i, o) {
        var h = n || {};
        if (fi(h, "quoteStyle") && h.quoteStyle !== "single" && h.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (fi(h, "maxStringLength") && (typeof h.maxStringLength == "number" ? h.maxStringLength < 0 && h.maxStringLength !== 1 / 0 : h.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = fi(h, "customInspect") ? h.customInspect : !0;
        if (typeof m != "boolean" && m !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (fi(h, "indent") && h.indent !== null && h.indent !== "	" && !(parseInt(h.indent, 10) === h.indent && h.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (fi(h, "numericSeparator") && typeof h.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var E = h.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return bu(e, h);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return E ? hc(e, k) : k
        }
        if (typeof e == "bigint") {
            var A = String(e) + "n";
            return E ? hc(e, A) : A
        }
        var M = typeof h.depth > "u" ? 5 : h.depth;
        if (typeof i > "u" && (i = 0), i >= M && M > 0 && typeof e == "object") return qa(e) ? "[Array]" : "[Object]";
        var $ = Rw(h, i);
        if (typeof o > "u") o = [];
        else if (wu(o, e) >= 0) return "[Circular]";

        function J(je, U, oe) {
            if (U && (o = hw.call(o), o.push(U)), oe) {
                var Te = {
                    depth: h.depth
                };
                return fi(h, "quoteStyle") && (Te.quoteStyle = h.quoteStyle), t(je, Te, i + 1, o)
            }
            return t(je, h, i + 1, o)
        }
        if (typeof e == "function" && !pc(e)) {
            var ie = Cw(e),
                Y = js(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (Y.length > 0 ? " { " + Un.call(Y, ", ") + " }" : "")
        }
        if (yu(e)) {
            var re = xr ? mi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ga.call(e);
            return typeof e == "object" && !xr ? ts(re) : re
        }
        if (Tw(e)) {
            for (var v = "<" + ac.call(String(e.nodeName)), P = e.attributes || [], W = 0; W < P.length; W++) v += " " + P[W].name + "=" + vu(fw(P[W].value), "double", h);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + ac.call(String(e.nodeName)) + ">", v
        }
        if (qa(e)) {
            if (e.length === 0) return "[]";
            var ae = js(e, J);
            return $ && !Ow(ae) ? "[" + Xa(ae, $) + "]" : "[ " + Un.call(ae, ", ") + " ]"
        }
        if (gw(e)) {
            var se = js(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !mu.call(e, "cause") ? "{ [" + String(e) + "] " + Un.call(lc.call("[cause]: " + J(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Un.call(se, ", ") + " }"
        }
        if (typeof e == "object" && m) {
            if (fc && typeof e[fc] == "function" && Wa) return Wa(e, {
                depth: M - i
            });
            if (m !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (xw(e)) {
            var ve = [];
            return tw.call(e, function(je, U) {
                ve.push(J(U, e, !0) + " => " + J(je, e))
            }), gc("Map", co.call(e), ve, $)
        }
        if (Sw(e)) {
            var f = [];
            return nw.call(e, function(je) {
                f.push(J(je, e))
            }), gc("Set", uo.call(e), f, $)
        }
        if (Ew(e)) return _a("WeakMap");
        if (kw(e)) return _a("WeakSet");
        if (_w(e)) return _a("WeakRef");
        if (vw(e)) return ts(J(Number(e)));
        if (ww(e)) return ts(J(Ua.call(e)));
        if (yw(e)) return ts(ow.call(e));
        if (mw(e)) return ts(J(String(e)));
        if (!pw(e) && !pc(e)) {
            var Ee = js(e, J),
                Ae = uc ? uc(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                at = !Ae && hn && Object(e) === e && hn in e ? fl.call(wi(e), 8, -1) : Pe ? "Object" : "",
                Be = Ae || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                K = Be + (at || Pe ? "[" + Un.call(lc.call([], at || [], Pe || []), ": ") + "] " : "");
            return Ee.length === 0 ? K + "{}" : $ ? K + "{" + Xa(Ee, $) + "}" : K + "{ " + Un.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function vu(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function fw(t) {
    return mi.call(String(t), /"/g, "&quot;")
}

function qa(t) {
    return wi(t) === "[object Array]" && (!hn || !(typeof t == "object" && hn in t))
}

function pw(t) {
    return wi(t) === "[object Date]" && (!hn || !(typeof t == "object" && hn in t))
}

function pc(t) {
    return wi(t) === "[object RegExp]" && (!hn || !(typeof t == "object" && hn in t))
}

function gw(t) {
    return wi(t) === "[object Error]" && (!hn || !(typeof t == "object" && hn in t))
}

function mw(t) {
    return wi(t) === "[object String]" && (!hn || !(typeof t == "object" && hn in t))
}

function vw(t) {
    return wi(t) === "[object Number]" && (!hn || !(typeof t == "object" && hn in t))
}

function yw(t) {
    return wi(t) === "[object Boolean]" && (!hn || !(typeof t == "object" && hn in t))
}

function yu(t) {
    if (xr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Ga) return !1;
    try {
        return Ga.call(t), !0
    } catch {}
    return !1
}

function ww(t) {
    if (!t || typeof t != "object" || !Ua) return !1;
    try {
        return Ua.call(t), !0
    } catch {}
    return !1
}
var bw = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function fi(t, e) {
    return bw.call(t, e)
}

function wi(t) {
    return aw.call(t)
}

function Cw(t) {
    if (t.name) return t.name;
    var e = cw.call(lw.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function wu(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function xw(t) {
    if (!co || !t || typeof t != "object") return !1;
    try {
        co.call(t);
        try {
            uo.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function Ew(t) {
    if (!ls || !t || typeof t != "object") return !1;
    try {
        ls.call(t, ls);
        try {
            cs.call(t, cs)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function _w(t) {
    if (!oc || !t || typeof t != "object") return !1;
    try {
        return oc.call(t), !0
    } catch {}
    return !1
}

function Sw(t) {
    if (!uo || !t || typeof t != "object") return !1;
    try {
        uo.call(t);
        try {
            co.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function kw(t) {
    if (!cs || !t || typeof t != "object") return !1;
    try {
        cs.call(t, cs);
        try {
            ls.call(t, ls)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function Tw(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function bu(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return bu(fl.call(t, 0, e.maxStringLength), e) + i
    }
    var o = mi.call(mi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Aw);
    return vu(o, "single", e)
}

function Aw(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + uw.call(e.toString(16))
}

function ts(t) {
    return "Object(" + t + ")"
}

function _a(t) {
    return t + " { ? }"
}

function gc(t, e, n, i) {
    var o = i ? Xa(n, i) : Un.call(n, ", ");
    return t + " (" + e + ") {" + o + "}"
}

function Ow(t) {
    for (var e = 0; e < t.length; e++)
        if (wu(t[e], `
`) >= 0) return !1;
    return !0
}

function Rw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = Un.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: Un.call(Array(e + 1), n)
    }
}

function Xa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + Un.call(t, "," + n) + `
` + e.prev
}

function js(t, e) {
    var n = qa(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var o = 0; o < t.length; o++) i[o] = fi(t, o) ? e(t[o], t) : ""
    }
    var h = typeof Ea == "function" ? Ea(t) : [],
        m;
    if (xr) {
        m = {};
        for (var E = 0; E < h.length; E++) m["$" + h[E]] = h[E]
    }
    for (var k in t) !fi(t, k) || n && String(Number(k)) === k && k < t.length || xr && m["$" + k] instanceof Symbol || (gu.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof Ea == "function")
        for (var A = 0; A < h.length; A++) mu.call(t, h[A]) && i.push("[" + e(h[A]) + "]: " + e(t[h[A]], t));
    return i
}
var pl = ul,
    Rr = Jy,
    Iw = dw,
    Mw = pl("%TypeError%"),
    zs = pl("%WeakMap%", !0),
    Hs = pl("%Map%", !0),
    Dw = Rr("WeakMap.prototype.get", !0),
    Lw = Rr("WeakMap.prototype.set", !0),
    Pw = Rr("WeakMap.prototype.has", !0),
    Nw = Rr("Map.prototype.get", !0),
    Vw = Rr("Map.prototype.set", !0),
    Bw = Rr("Map.prototype.has", !0),
    gl = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    $w = function(t, e) {
        var n = gl(t, e);
        return n && n.value
    },
    Fw = function(t, e, n) {
        var i = gl(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    jw = function(t, e) {
        return !!gl(t, e)
    },
    zw = function() {
        var e, n, i, o = {
            assert: function(h) {
                if (!o.has(h)) throw new Mw("Side channel does not contain " + Iw(h))
            },
            get: function(h) {
                if (zs && h && (typeof h == "object" || typeof h == "function")) {
                    if (e) return Dw(e, h)
                } else if (Hs) {
                    if (n) return Nw(n, h)
                } else if (i) return $w(i, h)
            },
            has: function(h) {
                if (zs && h && (typeof h == "object" || typeof h == "function")) {
                    if (e) return Pw(e, h)
                } else if (Hs) {
                    if (n) return Bw(n, h)
                } else if (i) return jw(i, h);
                return !1
            },
            set: function(h, m) {
                zs && h && (typeof h == "object" || typeof h == "function") ? (e || (e = new zs), Lw(e, h, m)) : Hs ? (n || (n = new Hs), Vw(n, h, m)) : (i || (i = {
                    key: {},
                    next: null
                }), Fw(i, h, m))
            }
        };
        return o
    },
    Hw = String.prototype.replace,
    Uw = /%20/g,
    Sa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    ml = {
        default: Sa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return Hw.call(t, Uw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: Sa.RFC1738,
        RFC3986: Sa.RFC3986
    },
    Gw = ml,
    ka = Object.prototype.hasOwnProperty,
    Vi = Array.isArray,
    zn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    Ww = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Vi(i)) {
                for (var o = [], h = 0; h < i.length; ++h) typeof i[h] < "u" && o.push(i[h]);
                n.obj[n.prop] = o
            }
        }
    },
    Cu = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o) typeof e[o] < "u" && (i[o] = e[o]);
        return i
    },
    qw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Vi(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !ka.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var o = e;
        return Vi(e) && !Vi(n) && (o = Cu(e, i)), Vi(e) && Vi(n) ? (n.forEach(function(h, m) {
            if (ka.call(e, m)) {
                var E = e[m];
                E && typeof E == "object" && h && typeof h == "object" ? e[m] = t(E, h, i) : e.push(h)
            } else e[m] = h
        }), e) : Object.keys(n).reduce(function(h, m) {
            var E = n[m];
            return ka.call(h, m) ? h[m] = t(h[m], E, i) : h[m] = E, h
        }, o)
    },
    Xw = function(e, n) {
        return Object.keys(n).reduce(function(i, o) {
            return i[o] = n[o], i
        }, e)
    },
    Yw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Kw = function(e, n, i, o, h) {
        if (e.length === 0) return e;
        var m = e;
        if (typeof e == "symbol" ? m = Symbol.prototype.toString.call(e) : typeof e != "string" && (m = String(e)), i === "iso-8859-1") return escape(m).replace(/%u[0-9a-f]{4}/gi, function(M) {
            return "%26%23" + parseInt(M.slice(2), 16) + "%3B"
        });
        for (var E = "", k = 0; k < m.length; ++k) {
            var A = m.charCodeAt(k);
            if (A === 45 || A === 46 || A === 95 || A === 126 || A >= 48 && A <= 57 || A >= 65 && A <= 90 || A >= 97 && A <= 122 || h === Gw.RFC1738 && (A === 40 || A === 41)) {
                E += m.charAt(k);
                continue
            }
            if (A < 128) {
                E = E + zn[A];
                continue
            }
            if (A < 2048) {
                E = E + (zn[192 | A >> 6] + zn[128 | A & 63]);
                continue
            }
            if (A < 55296 || A >= 57344) {
                E = E + (zn[224 | A >> 12] + zn[128 | A >> 6 & 63] + zn[128 | A & 63]);
                continue
            }
            k += 1, A = 65536 + ((A & 1023) << 10 | m.charCodeAt(k) & 1023), E += zn[240 | A >> 18] + zn[128 | A >> 12 & 63] + zn[128 | A >> 6 & 63] + zn[128 | A & 63]
        }
        return E
    },
    Jw = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], o = 0; o < n.length; ++o)
            for (var h = n[o], m = h.obj[h.prop], E = Object.keys(m), k = 0; k < E.length; ++k) {
                var A = E[k],
                    M = m[A];
                typeof M == "object" && M !== null && i.indexOf(M) === -1 && (n.push({
                    obj: m,
                    prop: A
                }), i.push(M))
            }
        return Ww(n), e
    },
    Qw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Zw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    eb = function(e, n) {
        return [].concat(e, n)
    },
    tb = function(e, n) {
        if (Vi(e)) {
            for (var i = [], o = 0; o < e.length; o += 1) i.push(n(e[o]));
            return i
        }
        return n(e)
    },
    xu = {
        arrayToObject: Cu,
        assign: Xw,
        combine: eb,
        compact: Jw,
        decode: Yw,
        encode: Kw,
        isBuffer: Zw,
        isRegExp: Qw,
        maybeMap: tb,
        merge: qw
    },
    Eu = zw,
    Ya = xu,
    us = ml,
    nb = Object.prototype.hasOwnProperty,
    mc = {
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
    si = Array.isArray,
    ib = String.prototype.split,
    rb = Array.prototype.push,
    _u = function(t, e) {
        rb.apply(t, si(e) ? e : [e])
    },
    sb = Date.prototype.toISOString,
    vc = us.default,
    rn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Ya.encode,
        encodeValuesOnly: !1,
        format: vc,
        formatter: us.formatters[vc],
        indices: !1,
        serializeDate: function(e) {
            return sb.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    ob = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    Ta = {},
    ab = function t(e, n, i, o, h, m, E, k, A, M, $, J, ie, Y, re, v) {
        for (var P = e, W = v, ae = 0, se = !1;
            (W = W.get(Ta)) !== void 0 && !se;) {
            var ve = W.get(e);
            if (ae += 1, typeof ve < "u") {
                if (ve === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof W.get(Ta) > "u" && (ae = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = $(P) : i === "comma" && si(P) && (P = Ya.maybeMap(P, function(ue) {
                return ue instanceof Date ? $(ue) : ue
            })), P === null) {
            if (h) return E && !Y ? E(n, rn.encoder, re, "key", J) : n;
            P = ""
        }
        if (ob(P) || Ya.isBuffer(P)) {
            if (E) {
                var f = Y ? n : E(n, rn.encoder, re, "key", J);
                if (i === "comma" && Y) {
                    for (var Ee = ib.call(String(P), ","), Ae = "", Pe = 0; Pe < Ee.length; ++Pe) Ae += (Pe === 0 ? "" : ",") + ie(E(Ee[Pe], rn.encoder, re, "value", J));
                    return [ie(f) + (o && si(P) && Ee.length === 1 ? "[]" : "") + "=" + Ae]
                }
                return [ie(f) + "=" + ie(E(P, rn.encoder, re, "value", J))]
            }
            return [ie(n) + "=" + ie(String(P))]
        }
        var at = [];
        if (typeof P > "u") return at;
        var Be;
        if (i === "comma" && si(P)) Be = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (si(k)) Be = k;
        else {
            var K = Object.keys(P);
            Be = A ? K.sort(A) : K
        }
        for (var je = o && si(P) && P.length === 1 ? n + "[]" : n, U = 0; U < Be.length; ++U) {
            var oe = Be[U],
                Te = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(m && Te === null)) {
                var we = si(P) ? typeof i == "function" ? i(je, oe) : je : je + (M ? "." + oe : "[" + oe + "]");
                v.set(e, ae);
                var ye = Eu();
                ye.set(Ta, v), _u(at, t(Te, we, i, o, h, m, E, k, A, M, $, J, ie, Y, re, ye))
            }
        }
        return at
    },
    lb = function(e) {
        if (!e) return rn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || rn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = us.default;
        if (typeof e.format < "u") {
            if (!nb.call(us.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var o = us.formatters[i],
            h = rn.filter;
        return (typeof e.filter == "function" || si(e.filter)) && (h = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : rn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? rn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : rn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? rn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : rn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : rn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : rn.encodeValuesOnly,
            filter: h,
            format: i,
            formatter: o,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : rn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : rn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : rn.strictNullHandling
        }
    },
    cb = function(t, e) {
        var n = t,
            i = lb(e),
            o, h;
        typeof i.filter == "function" ? (h = i.filter, n = h("", n)) : si(i.filter) && (h = i.filter, o = h);
        var m = [];
        if (typeof n != "object" || n === null) return "";
        var E;
        e && e.arrayFormat in mc ? E = e.arrayFormat : e && "indices" in e ? E = e.indices ? "indices" : "repeat" : E = "indices";
        var k = mc[E];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var A = k === "comma" && e && e.commaRoundTrip;
        o || (o = Object.keys(n)), i.sort && o.sort(i.sort);
        for (var M = Eu(), $ = 0; $ < o.length; ++$) {
            var J = o[$];
            i.skipNulls && n[J] === null || _u(m, ab(n[J], J, k, A, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, M))
        }
        var ie = m.join(i.delimiter),
            Y = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? Y += "utf8=%26%2310003%3B&" : Y += "utf8=%E2%9C%93&"), ie.length > 0 ? Y + ie : ""
    },
    Er = xu,
    Ka = Object.prototype.hasOwnProperty,
    ub = Array.isArray,
    en = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: Er.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    hb = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    Su = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    db = "utf8=%26%2310003%3B",
    fb = "utf8=%E2%9C%93",
    pb = function(e, n) {
        var i = {},
            o = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            h = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            m = o.split(n.delimiter, h),
            E = -1,
            k, A = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < m.length; ++k) m[k].indexOf("utf8=") === 0 && (m[k] === fb ? A = "utf-8" : m[k] === db && (A = "iso-8859-1"), E = k, k = m.length);
        for (k = 0; k < m.length; ++k)
            if (k !== E) {
                var M = m[k],
                    $ = M.indexOf("]="),
                    J = $ === -1 ? M.indexOf("=") : $ + 1,
                    ie, Y;
                J === -1 ? (ie = n.decoder(M, en.decoder, A, "key"), Y = n.strictNullHandling ? null : "") : (ie = n.decoder(M.slice(0, J), en.decoder, A, "key"), Y = Er.maybeMap(Su(M.slice(J + 1), n), function(re) {
                    return n.decoder(re, en.decoder, A, "value")
                })), Y && n.interpretNumericEntities && A === "iso-8859-1" && (Y = hb(Y)), M.indexOf("[]=") > -1 && (Y = ub(Y) ? [Y] : Y), Ka.call(i, ie) ? i[ie] = Er.combine(i[ie], Y) : i[ie] = Y
            } return i
    },
    gb = function(t, e, n, i) {
        for (var o = i ? e : Su(e, n), h = t.length - 1; h >= 0; --h) {
            var m, E = t[h];
            if (E === "[]" && n.parseArrays) m = [].concat(o);
            else {
                m = n.plainObjects ? Object.create(null) : {};
                var k = E.charAt(0) === "[" && E.charAt(E.length - 1) === "]" ? E.slice(1, -1) : E,
                    A = parseInt(k, 10);
                !n.parseArrays && k === "" ? m = {
                    0: o
                } : !isNaN(A) && E !== k && String(A) === k && A >= 0 && n.parseArrays && A <= n.arrayLimit ? (m = [], m[A] = o) : k !== "__proto__" && (m[k] = o)
            }
            o = m
        }
        return o
    },
    mb = function(e, n, i, o) {
        if (!!e) {
            var h = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                m = /(\[[^[\]]*])/,
                E = /(\[[^[\]]*])/g,
                k = i.depth > 0 && m.exec(h),
                A = k ? h.slice(0, k.index) : h,
                M = [];
            if (A) {
                if (!i.plainObjects && Ka.call(Object.prototype, A) && !i.allowPrototypes) return;
                M.push(A)
            }
            for (var $ = 0; i.depth > 0 && (k = E.exec(h)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Ka.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                M.push(k[1])
            }
            return k && M.push("[" + h.slice(k.index) + "]"), gb(M, n, i, o)
        }
    },
    vb = function(e) {
        if (!e) return en;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = typeof e.charset > "u" ? en.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? en.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : en.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : en.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : en.arrayLimit,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : en.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : en.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : en.decoder,
            delimiter: typeof e.delimiter == "string" || Er.isRegExp(e.delimiter) ? e.delimiter : en.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : en.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : en.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : en.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : en.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : en.strictNullHandling
        }
    },
    yb = function(t, e) {
        var n = vb(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? pb(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, h = Object.keys(i), m = 0; m < h.length; ++m) {
            var E = h[m],
                k = mb(E, i[E], n, typeof t == "string");
            o = Er.merge(o, k, n)
        }
        return n.allowSparse === !0 ? o : Er.compact(o)
    },
    wb = cb,
    bb = yb,
    Cb = ml,
    ku = {
        formats: Cb,
        parse: bb,
        stringify: wb
    };
class xb {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Eb {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class _b {
    constructor(e) {
        this.connections = e.connections
    }
}
class Sb {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class kb {}
var Ro = {
    CreateRoomReply: xb,
    GetRoomReply: Eb,
    GetAudienceReply: _b,
    RoomExit: Sb,
    RoomLock: kb
};
const yc = Ha.exports,
    Tb = ku,
    {
        CreateRoomReply: Ab,
        GetRoomReply: Ob
    } = Ro;
class Rb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = Tb.stringify(n);
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
            m = await (await yc(i, {
                method: "POST"
            })).json();
        if (!m.ok) throw new Error(`failed to create room: ${m.error}`);
        let E = m.body;
        return new Ab({
            code: E.code,
            token: E.token,
            host: E.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            o = await (await yc(n)).json();
        if (!o.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${o.error}`);
        let h = o.body;
        return new Ob({
            appId: h.appId,
            appTag: h.appTag,
            audienceEnabled: h.audienceEnabled,
            code: h.code,
            host: h.host,
            audienceHost: h.audienceHost,
            locked: h.locked,
            full: h.full,
            moderationEnabled: h.moderationEnabled,
            passwordRequired: h.passwordRequired,
            twitchLocked: h.twitchLocked,
            locale: h.locale,
            keepalive: h.keepalive,
            controllerBranch: h.controllerBranch
        })
    }
}
var Ib = {
        APIClient: Rb
    },
    fr = null;
typeof WebSocket < "u" ? fr = WebSocket : typeof MozWebSocket < "u" ? fr = MozWebSocket : typeof yt < "u" ? fr = yt.WebSocket || yt.MozWebSocket : typeof window < "u" ? fr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (fr = self.WebSocket || self.MozWebSocket);
var Mb = fr,
    vl = {
        exports: {}
    },
    yr = typeof Reflect == "object" ? Reflect : null,
    wc = yr && typeof yr.apply == "function" ? yr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Zs;
yr && typeof yr.ownKeys == "function" ? Zs = yr.ownKeys : Object.getOwnPropertySymbols ? Zs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Zs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function Db(t) {
    console && console.warn && console.warn(t)
}
var Tu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
vl.exports = Rt;
vl.exports.once = Vb;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var bc = 10;

function Io(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return bc
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || Tu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        bc = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || Tu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function Au(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return Au(this)
};
Rt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var o = e === "error",
        h = this._events;
    if (h !== void 0) o = o && h.error === void 0;
    else if (!o) return !1;
    if (o) {
        var m;
        if (n.length > 0 && (m = n[0]), m instanceof Error) throw m;
        var E = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw E.context = m, E
    }
    var k = h[e];
    if (k === void 0) return !1;
    if (typeof k == "function") wc(k, this, n);
    else
        for (var A = k.length, M = Du(k, A), i = 0; i < A; ++i) wc(M[i], this, n);
    return !0
};

function Ou(t, e, n, i) {
    var o, h, m;
    if (Io(n), h = t._events, h === void 0 ? (h = t._events = Object.create(null), t._eventsCount = 0) : (h.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), h = t._events), m = h[e]), m === void 0) m = h[e] = n, ++t._eventsCount;
    else if (typeof m == "function" ? m = h[e] = i ? [n, m] : [m, n] : i ? m.unshift(n) : m.push(n), o = Au(t), o > 0 && m.length > o && !m.warned) {
        m.warned = !0;
        var E = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        E.name = "MaxListenersExceededWarning", E.emitter = t, E.type = e, E.count = m.length, Db(E)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return Ou(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return Ou(this, e, n, !0)
};

function Lb() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function Ru(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        o = Lb.bind(i);
    return o.listener = n, i.wrapFn = o, o
}
Rt.prototype.once = function(e, n) {
    return Io(n), this.on(e, Ru(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return Io(n), this.prependListener(e, Ru(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, o, h, m, E;
    if (Io(n), o = this._events, o === void 0) return this;
    if (i = o[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (h = -1, m = i.length - 1; m >= 0; m--)
            if (i[m] === n || i[m].listener === n) {
                E = i[m].listener, h = m;
                break
            } if (h < 0) return this;
        h === 0 ? i.shift() : Pb(i, h), i.length === 1 && (o[e] = i[0]), o.removeListener !== void 0 && this.emit("removeListener", e, E || n)
    }
    return this
};
Rt.prototype.off = Rt.prototype.removeListener;
Rt.prototype.removeAllListeners = function(e) {
    var n, i, o;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var h = Object.keys(i),
            m;
        for (o = 0; o < h.length; ++o) m = h[o], m !== "removeListener" && this.removeAllListeners(m);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (o = n.length - 1; o >= 0; o--) this.removeListener(e, n[o]);
    return this
};

function Iu(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var o = i[e];
    return o === void 0 ? [] : typeof o == "function" ? n ? [o.listener || o] : [o] : n ? Nb(o) : Du(o, o.length)
}
Rt.prototype.listeners = function(e) {
    return Iu(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return Iu(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : Mu.call(t, e)
};
Rt.prototype.listenerCount = Mu;

function Mu(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
Rt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Zs(this._events) : []
};

function Du(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function Pb(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function Nb(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function Vb(t, e) {
    return new Promise(function(n, i) {
        function o(m) {
            t.removeListener(e, h), i(m)
        }

        function h() {
            typeof t.removeListener == "function" && t.removeListener("error", o), n([].slice.call(arguments))
        }
        Lu(t, e, h, {
            once: !0
        }), e !== "error" && Bb(t, o, {
            once: !0
        })
    })
}

function Bb(t, e, n) {
    typeof t.on == "function" && Lu(t, "error", e, n)
}

function Lu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function o(h) {
        i.once && t.removeEventListener(e, o), n(h)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class $b {
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
class Mo extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class ws extends Mo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class Pu extends ws {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class Nu extends ws {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class Vu extends ws {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class kt extends Mo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class Bu extends kt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class $u extends kt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class Fu extends kt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class ju extends kt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class zu extends kt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class Hu extends kt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class Uu extends kt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class Gu extends kt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class Wu extends kt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class qu extends kt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Xu extends kt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Yu extends kt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Ku extends kt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Ju extends kt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Qu extends kt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Zu extends kt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class eh extends kt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class th extends kt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class nh extends kt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class ih extends kt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class rh extends kt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class sh extends kt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class oh extends kt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class ah extends kt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class lh extends kt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class ch extends kt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class uh extends kt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class hh extends kt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function Fb({
    code: t,
    message: e
}) {
    const n = jb[t];
    return n ? new n({
        message: e
    }) : new Mo({
        message: e
    })
}
var oi = {
    createError: Fb,
    CallError: Mo,
    EcastServerError: ws,
    EcastCreateRoomFailed: Pu,
    EcastDialRoomFailed: Nu,
    EcastServerIsShuttingDown: Vu,
    EcastClientError: kt,
    EcastParseError: Bu,
    EcastRequestIsMissingOpcode: $u,
    EcastRequestHasInvalidOpcode: Fu,
    EcastRequestHasInvalidArguments: ju,
    EcastEntityNotFound: zu,
    EcastEntityAlreadyExists: Hu,
    EcastEntityTypeError: Uu,
    EcastNoSuchClient: Gu,
    EcastRoomIsLocked: Wu,
    EcastRoomIsFull: qu,
    EcastLicenseNotFound: Xu,
    EcastLicenseCheckFailed: Yu,
    EcastRoomNotFound: Ku,
    EcastInvalidRole: Ju,
    EcastTwitchLoginRequired: Qu,
    EcastInvalidOption: Zu,
    EcastPasswordRequired: eh,
    EcastInvalidPassword: th,
    EcastNameRequired: nh,
    EcastFilterError: ih,
    EcastNoSuchFilter: rh,
    EcastPermissionDenied: sh,
    EcastNotConnected: oh,
    EcastIllegalOperation: ah,
    EcastACLChangeDenied: lh,
    EcastRoomHasEnded: ch,
    EcastEntityLocked: uh,
    EcastRateLimitExceeded: hh,
    ObservedError: $b
};
const jb = {
    1e3: ws,
    1001: Pu,
    1002: Nu,
    1003: Vu,
    2e3: kt,
    2001: Bu,
    2002: $u,
    2003: Fu,
    2004: ju,
    2005: zu,
    2006: Hu,
    2007: Uu,
    2008: Gu,
    2009: Wu,
    2010: qu,
    2011: Xu,
    2012: Yu,
    2013: Ku,
    2014: Ju,
    2015: Qu,
    2016: Zu,
    2017: eh,
    2018: th,
    2019: nh,
    2021: ih,
    2022: rh,
    2023: sh,
    2024: oh,
    2025: ah,
    2026: lh,
    2027: ch,
    2028: uh,
    2420: hh
};
class zb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class Hb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class Ub {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class Gb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class Wb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var yl = {
    ClientConnected: Hb,
    ClientDisconnected: Ub,
    ClientKicked: Wb,
    ClientSend: Gb,
    ClientWelcome: zb
};
class qb {
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
var wl = {
    CountGroup: qb
};
class Xb {
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
var bl = {
    GCounter: Xb
};
class Yb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var dh = {
    Notification: Yb
};
class Kb {
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
class Jb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var Cl = {
    ObjectEntity: Kb,
    ObjectEcho: Jb
};
class Qb {
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
var xl = {
    PNCounter: Qb
};
class Zb {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var fh = {
    Reply: Zb
};
class e0 {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var t0 = {
    Request: e0
};
class n0 {
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
class i0 {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var El = {
    TextEntity: n0,
    TextEcho: i0
};
class r0 {
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
var _l = {
    TextRing: r0
};
class s0 {
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
var ph = {
    ArtifactEntity: s0
};
class o0 {
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
class a0 {
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
class l0 {
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
var Sl = {
    DoodleEntity: o0,
    DoodleLine: a0,
    DoodleLineRemoved: l0
};
class c0 {
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
class u0 {
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
class h0 {
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
var gh = {
    StackEntity: c0,
    StackElement: u0,
    StackElements: h0
};
class d0 {
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
var mh = {
    DropEntity: d0
};
class f0 {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var p0 = {
    Echo: f0
};
class g0 {
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
var m0 = {
    LockEntity: g0
};
class v0 {
    constructor() {}
    toString() {
        return "OK"
    }
}
var vh = {
    OK: v0
};
class y0 {
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
var yh = {
    NumberEntity: y0
};
const {
    ArtifactEntity: w0
} = ph, {
    ClientWelcome: b0,
    ClientConnected: C0,
    ClientDisconnected: x0,
    ClientKicked: E0,
    ClientSend: _0
} = yl, {
    CountGroup: S0
} = wl, {
    DoodleEntity: k0,
    DoodleLine: T0,
    DoodleLineRemoved: A0
} = Sl, {
    StackEntity: O0,
    StackElement: R0,
    StackElements: I0
} = gh, {
    DropEntity: M0
} = mh, {
    Echo: D0
} = p0, {
    LockEntity: L0
} = m0, {
    GCounter: P0
} = bl, {
    GetAudienceReply: N0,
    RoomExit: V0,
    RoomLock: B0
} = Ro, {
    Notification: $0
} = dh, {
    OK: F0
} = vh, {
    NumberEntity: j0
} = yh, {
    ObjectEcho: z0,
    ObjectEntity: H0
} = Cl, {
    PNCounter: Cc
} = xl, {
    Reply: U0
} = fh, {
    TextEcho: G0,
    TextEntity: W0
} = El, {
    TextRing: q0
} = _l, {
    createError: xc,
    ObservedError: X0
} = oi;

function Ja(t, e, n) {
    switch (t) {
        case "ok":
            return new F0;
        case "echo":
            return new D0({
                message: e.message
            });
        case "lock":
            return new L0({
                key: e.key,
                from: e.from
            });
        case "error":
            return xc({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new X0({
                to: e.to,
                error: xc({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new W0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new G0({
                message: e.message
            });
        case "object":
            return new H0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new z0({
                message: e.message
            });
        case "drop":
            return new M0({
                key: e.key
            });
        case "artifact":
            return new w0({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new C0({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new x0({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new E0({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new _0({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new b0({
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
                Object.entries(e.entities).forEach(([h, m]) => {
                    o[h] = Ja(m[0], m[1], m[2])
                }), i.entities = o
            }
            return i
        }
        case "doodle":
            return new k0({
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
            return new T0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new A0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new O0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new R0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new I0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new j0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new V0({
                cause: e.cause
            });
        case "room/lock":
            return new B0;
        case "room/get-audience":
            return new N0({
                connections: e.connections
            });
        case "audience":
            return new Cc({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new S0({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new q0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new P0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new Cc({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function Y0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new U0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Ja(n, e.result)
    }) : new $0({
        pc: e.pc,
        opcode: n,
        result: Ja(n, e.result)
    })
}
var K0 = {
    parseResponseMessage: Y0
};
const Ec = Mb,
    J0 = ku,
    Q0 = vl.exports,
    {
        CallError: Z0
    } = oi,
    {
        ClientWelcome: eC
    } = yl,
    {
        CountGroup: tC
    } = wl,
    {
        GCounter: nC
    } = bl,
    {
        Notification: _c
    } = dh,
    {
        ObjectEntity: Aa
    } = Cl,
    {
        PNCounter: iC
    } = xl,
    {
        Reply: rC
    } = fh,
    {
        Request: sC
    } = t0,
    {
        TextEntity: Oa
    } = El,
    {
        TextRing: oC
    } = _l,
    {
        parseResponseMessage: aC
    } = K0,
    {
        DoodleEntity: lC
    } = Sl,
    {
        StackEntity: cC
    } = gh,
    uC = 1e3 + Math.floor(Math.random() * 500),
    Sc = 13e3;
class hC extends Q0 {
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
        const n = J0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((o, h) => {
            let m = !1,
                E = !1,
                k = M => {
                    o(M), m = !0
                },
                A = M => {
                    h(M), m = !0
                };
            this.conn = new Ec(i, "ecast-v0"), this.conn.onmessage = M => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(M.data),null,2)}`);
                const $ = aC(M);
                if ($ instanceof rC) this.onReply($);
                else if ($ instanceof _c) {
                    if ($.result instanceof eC) E = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), k($.result);
                    else if (!m) {
                        A($.result);
                        return
                    }
                    this.onNotification($)
                } else console.error(`failed to parse response messsage: ${$}`)
            }, this.conn.onerror = M => {
                m ? this.emit("socketError", M) : A(M)
            }, this.conn.onclose = M => {
                this.debugLog("onclose", M.code), E && M.code === 1006 ? this.reconnect() : this.emit("socketClose", M)
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
            n = uC;
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
            if (n >= Sc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(Sc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const o = new _c(e);
            o.re = n, this.emit("notification", o);
            return
        }
        delete this.pending[n], e.result instanceof Z0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== Ec.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            o = new sC({
                seq: i,
                opcode: e,
                params: n
            }),
            h = new Promise((E, k) => {
                this.pending[i] = {
                    resolve: E,
                    reject: k,
                    request: o
                }
            }),
            m = JSON.stringify(o);
        return this.debugLog(`send -> ${m}`), this.conn.send(m), h
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
        const h = await this.send("object/create", o);
        return this.entities[e] = new Aa({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), h
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
        const h = await this.send("object/set", o);
        return this.entities[e] = new Aa({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), h
    }
    async updateObject(e, n) {
        const i = await this.send("object/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new Aa({
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
                acl: h,
                accept: m,
                reject: E
            } = i;
        h && (o.acl = h), m && (o.accept = m), E && (o.reject = E);
        const k = await this.send("text/create", o);
        return this.entities[e] = new Oa({
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
        const h = await this.send("text/set", o);
        return this.entities[e] = new Oa({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), h
    }
    async updateText(e, n) {
        const i = await this.send("text/update", {
            key: e,
            val: n
        });
        return this.entities[e] = new Oa({
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
            colors: h,
            live: m,
            maxPoints: E,
            size: k,
            weights: A
        } = n;
        o && (i.acl = o), h && (i.colors = h), i.live = m, E != null && (i.maxPoints = E), k && (i.size = k), A && (i.weights = A);
        const M = await this.send("doodle/create", i);
        return this.entities[e] = new lC({
            key: e,
            colors: h,
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
            color: o,
            weight: h,
            points: m
        } = n, E = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: o,
            weight: h,
            points: m
        }), k = {
            layer: i,
            color: o,
            weight: h,
            points: m
        };
        return this.entities[e].lines.push(k), E
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
        return this.entities[e] = new cC({
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
        return this.entities[e] = new tC({
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
        return this.entities[e] = new nC({
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
        return this.entities[e] = new iC({
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
                accept: h,
                reject: m
            } = n;
        o && (i.limit = o), h && (i.accept = h), m && (i.reject = m);
        const E = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new oC({
            key: e,
            elements: [],
            limit: o,
            meta: {
                locked: !1
            }
        }), E
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
var dC = {
    WSClient: hC
};
const {
    APIClient: fC
} = Ib, {
    WSClient: pC
} = dC, {
    CreateRoomReply: gC,
    GetRoomReply: mC
} = Ro, {
    ClientWelcome: vC,
    ClientDisconnected: yC
} = yl, {
    ArtifactEntity: wC
} = ph, {
    GCounter: bC
} = bl, {
    NumberEntity: CC
} = yh, {
    TextEntity: xC
} = El, {
    DoodleEntity: EC
} = Sl, {
    ObjectEntity: _C
} = Cl, {
    CountGroup: SC
} = wl, {
    DropEntity: kC
} = mh, {
    OK: TC
} = vh, {
    RoomExit: AC
} = Ro, {
    TextRing: OC
} = _l, {
    PNCounter: RC
} = xl;
var Pi = {
    APIClient: fC,
    WSClient: pC,
    ClientWelcome: vC,
    CreateRoomReply: gC,
    DropEntity: kC,
    GetRoomReply: mC,
    ClientDisconnected: yC,
    RoomExit: AC,
    OK: TC,
    ArtifactEntity: wC,
    DoodleEntity: EC,
    NumberEntity: CC,
    CountGroup: SC,
    GCounter: bC,
    ObjectEntity: _C,
    PNCounter: RC,
    TextEntity: xC,
    TextRing: OC
};

function kc(...t) {
    console.log(...t)
}

function IC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Tc = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(yt, function(n) {
        var i = typeof window < "u" ? window : typeof yt < "u" ? yt : typeof self < "u" ? self : {},
            o = function(N, q) {
                if (q = q.split(":")[0], N = +N, !N) return !1;
                switch (q) {
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
            h = Object.prototype.hasOwnProperty,
            m;

        function E(F) {
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
            for (var N = /([^=?#&]+)=?([^&]*)/g, q = {}, D; D = N.exec(F);) {
                var G = E(D[1]),
                    fe = E(D[2]);
                G === null || fe === null || G in q || (q[G] = fe)
            }
            return q
        }

        function M(F, N) {
            N = N || "";
            var q = [],
                D, G;
            typeof N != "string" && (N = "?");
            for (G in F)
                if (h.call(F, G)) {
                    if (D = F[G], !D && (D === null || D === m || isNaN(D)) && (D = ""), G = k(G), D = k(D), G === null || D === null) continue;
                    q.push(G + "=" + D)
                } return q.length ? N + q.join("&") : ""
        }
        var $ = M,
            J = A,
            ie = {
                stringify: $,
                parse: J
            },
            Y = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + v + "+");

        function W(F) {
            return (F || "").toString().replace(P, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(N, q) {
                    return f(q.protocol) ? N.replace(/\\/g, "/") : N
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
            var q = N.location || {};
            F = F || q;
            var D = {},
                G = typeof F,
                fe;
            if (F.protocol === "blob:") D = new Pe(unescape(F.pathname), {});
            else if (G === "string") {
                D = new Pe(F, {});
                for (fe in se) delete D[fe]
            } else if (G === "object") {
                for (fe in F) fe in se || (D[fe] = F[fe]);
                D.slashes === void 0 && (D.slashes = Y.test(F.href))
            }
            return D
        }

        function f(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function Ee(F, N) {
            F = W(F), N = N || {};
            var q = re.exec(F),
                D = q[1] ? q[1].toLowerCase() : "",
                G = !!q[2],
                fe = !!q[3],
                pe = 0,
                Ne;
            return G ? fe ? (Ne = q[2] + q[3] + q[4], pe = q[2].length + q[3].length) : (Ne = q[2] + q[4], pe = q[2].length) : fe ? (Ne = q[3] + q[4], pe = q[3].length) : Ne = q[4], D === "file:" ? pe >= 2 && (Ne = Ne.slice(2)) : f(D) ? Ne = q[4] : D ? G && (Ne = Ne.slice(2)) : pe >= 2 && f(N.protocol) && (Ne = q[4]), {
                protocol: D,
                slashes: G || f(D),
                slashesCount: pe,
                rest: Ne
            }
        }

        function Ae(F, N) {
            if (F === "") return N;
            for (var q = (N || "/").split("/").slice(0, -1).concat(F.split("/")), D = q.length, G = q[D - 1], fe = !1, pe = 0; D--;) q[D] === "." ? q.splice(D, 1) : q[D] === ".." ? (q.splice(D, 1), pe++) : pe && (D === 0 && (fe = !0), q.splice(D, 1), pe--);
            return fe && q.unshift(""), (G === "." || G === "..") && q.push(""), q.join("/")
        }

        function Pe(F, N, q) {
            if (F = W(F), !(this instanceof Pe)) return new Pe(F, N, q);
            var D, G, fe, pe, Ne, Ve, pt = ae.slice(),
                Ft = typeof N,
                Ye = this,
                Pn = 0;
            for (Ft !== "object" && Ft !== "string" && (q = N, N = null), q && typeof q != "function" && (q = ie.parse), N = ve(N), G = Ee(F || "", N), D = !G.protocol && !G.slashes, Ye.slashes = G.slashes || D && N.slashes, Ye.protocol = G.protocol || N.protocol || "", F = G.rest, (Ye.protocol === "file:" || !G.slashes && (G.protocol || G.slashesCount < 2 || !f(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); Pn < pt.length; Pn++) {
                if (pe = pt[Pn], typeof pe == "function") {
                    F = pe(F, Ye);
                    continue
                }
                fe = pe[0], Ve = pe[1], fe !== fe ? Ye[Ve] = F : typeof fe == "string" ? ~(Ne = F.indexOf(fe)) && (typeof pe[2] == "number" ? (Ye[Ve] = F.slice(0, Ne), F = F.slice(Ne + pe[2])) : (Ye[Ve] = F.slice(Ne), F = F.slice(0, Ne))) : (Ne = fe.exec(F)) && (Ye[Ve] = Ne[1], F = F.slice(0, Ne.index)), Ye[Ve] = Ye[Ve] || D && pe[3] && N[Ve] || "", pe[4] && (Ye[Ve] = Ye[Ve].toLowerCase())
            }
            q && (Ye.query = q(Ye.query)), D && N.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || N.pathname !== "") && (Ye.pathname = Ae(Ye.pathname, N.pathname)), Ye.pathname.charAt(0) !== "/" && f(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), o(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (pe = Ye.auth.split(":"), Ye.username = pe[0] || "", Ye.password = pe[1] || ""), Ye.origin = Ye.protocol !== "file:" && f(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function at(F, N, q) {
            var D = this;
            switch (F) {
                case "query":
                    typeof N == "string" && N.length && (N = (q || ie.parse)(N)), D[F] = N;
                    break;
                case "port":
                    D[F] = N, o(N, D.protocol) ? N && (D.host = D.hostname + ":" + N) : (D.host = D.hostname, D[F] = "");
                    break;
                case "hostname":
                    D[F] = N, D.port && (N += ":" + D.port), D.host = N;
                    break;
                case "host":
                    D[F] = N, /:\d+$/.test(N) ? (N = N.split(":"), D.port = N.pop(), D.hostname = N.join(":")) : (D.hostname = N, D.port = "");
                    break;
                case "protocol":
                    D.protocol = N.toLowerCase(), D.slashes = !q;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var G = F === "pathname" ? "/" : "#";
                        D[F] = N.charAt(0) !== G ? G + N : N
                    } else D[F] = N;
                    break;
                default:
                    D[F] = N
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (D[pe[1]] = D[pe[1]].toLowerCase())
            }
            return D.origin = D.protocol !== "file:" && f(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
        }

        function Be(F) {
            (!F || typeof F != "function") && (F = ie.stringify);
            var N, q = this,
                D = q.protocol;
            D && D.charAt(D.length - 1) !== ":" && (D += ":");
            var G = D + (q.slashes || f(q.protocol) ? "//" : "");
            return q.username && (G += q.username, q.password && (G += ":" + q.password), G += "@"), G += q.host + q.pathname, N = typeof q.query == "object" ? F(q.query) : q.query, N && (G += N.charAt(0) !== "?" ? "?" + N : N), q.hash && (G += q.hash), G
        }
        Pe.prototype = {
            set: at,
            toString: Be
        }, Pe.extractProtocol = Ee, Pe.location = ve, Pe.trimLeft = W, Pe.qs = ie;
        var K = Pe;

        function je(F, N) {
            setTimeout(function(q) {
                return F.call(q)
            }, 4, N)
        }

        function U(F, N) {
            typeof process < "u" && console[F].call(null, N)
        }

        function oe(F, N) {
            F === void 0 && (F = []);
            var q = [];
            return F.forEach(function(D) {
                N(D) || q.push(D)
            }), q
        }

        function Te(F, N) {
            F === void 0 && (F = []);
            var q = [];
            return F.forEach(function(D) {
                N(D) && q.push(D)
            }), q
        }
        var we = function() {
            this.listeners = {}
        };
        we.prototype.addEventListener = function(N, q) {
            typeof q == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Te(this.listeners[N], function(D) {
                return D === q
            }).length === 0 && this.listeners[N].push(q))
        }, we.prototype.removeEventListener = function(N, q) {
            var D = this.listeners[N];
            this.listeners[N] = oe(D, function(G) {
                return G === q
            })
        }, we.prototype.dispatchEvent = function(N) {
            for (var q = this, D = [], G = arguments.length - 1; G-- > 0;) D[G] = arguments[G + 1];
            var fe = N.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Ne) {
                D.length > 0 ? Ne.apply(q, D) : Ne.call(q, N)
            }), !0) : !1
        };

        function ye(F) {
            var N = F.indexOf("?");
            return N >= 0 ? F.slice(0, N) : F
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(N, q) {
            var D = ye(q),
                G = this.urlMap[D];
            if (G && G.server && G.websockets.indexOf(N) === -1) return G.websockets.push(N), G.server
        }, ue.prototype.addMembershipToRoom = function(N, q) {
            var D = this.urlMap[ye(N.url)];
            D && D.server && D.websockets.indexOf(N) !== -1 && (D.roomMemberships[q] || (D.roomMemberships[q] = []), D.roomMemberships[q].push(N))
        }, ue.prototype.attachServer = function(N, q) {
            var D = ye(q),
                G = this.urlMap[D];
            if (!G) return this.urlMap[D] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, ue.prototype.serverLookup = function(N) {
            var q = ye(N),
                D = this.urlMap[q];
            if (D) return D.server
        }, ue.prototype.websocketsLookup = function(N, q, D) {
            var G = ye(N),
                fe, pe = this.urlMap[G];
            if (fe = pe ? pe.websockets : [], q) {
                var Ne = pe.roomMemberships[q];
                fe = Ne || []
            }
            return D ? fe.filter(function(Ve) {
                return Ve !== D
            }) : fe
        }, ue.prototype.removeServer = function(N) {
            delete this.urlMap[ye(N)]
        }, ue.prototype.removeWebSocket = function(N, q) {
            var D = ye(q),
                G = this.urlMap[D];
            G && (G.websockets = oe(G.websockets, function(fe) {
                return fe === N
            }))
        }, ue.prototype.removeMembershipFromRoom = function(N, q) {
            var D = this.urlMap[ye(N.url)],
                G = D.roomMemberships[q];
            D && G !== null && (D.roomMemberships[q] = oe(G, function(fe) {
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, q, D) {
            N === void 0 && (N = "undefined"), q === void 0 && (q = !1), D === void 0 && (D = !1), this.type = "" + N, this.bubbles = Boolean(q), this.cancelable = Boolean(D)
        };
        var dt = function(F) {
                function N(q, D) {
                    if (D === void 0 && (D = {}), F.call(this), !q) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var G = D.bubbles,
                        fe = D.cancelable;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Bt = function(F) {
                function N(q, D) {
                    if (D === void 0 && (D = {}), F.call(this), !q) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var G = D.bubbles,
                        fe = D.cancelable,
                        pe = D.data,
                        Ne = D.origin,
                        Ve = D.lastEventId,
                        pt = D.ports;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Ve || "")
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Gt = function(F) {
                function N(q, D) {
                    if (D === void 0 && (D = {}), F.call(this), !q) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var G = D.bubbles,
                        fe = D.cancelable,
                        pe = D.code,
                        Ne = D.reason,
                        Ve = D.wasClean;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke);

        function _(F) {
            var N = F.type,
                q = F.target,
                D = new dt(N);
            return q && (D.target = q, D.srcElement = q, D.currentTarget = q), D
        }

        function l(F) {
            var N = F.type,
                q = F.origin,
                D = F.data,
                G = F.target,
                fe = new Bt(N, {
                    data: D,
                    origin: q
                });
            return G && (fe.target = G, fe.srcElement = G, fe.currentTarget = G), fe
        }

        function g(F) {
            var N = F.code,
                q = F.reason,
                D = F.type,
                G = F.target,
                fe = F.wasClean;
            fe || (fe = N === ke.CLOSE_NORMAL || N === ke.CLOSE_NO_STATUS);
            var pe = new Gt(D, {
                code: N,
                reason: q,
                wasClean: fe
            });
            return G && (pe.target = G, pe.srcElement = G, pe.currentTarget = G), pe
        }

        function S(F, N, q) {
            F.readyState = De.CLOSING;
            var D = _e.serverLookup(F.url),
                G = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: q
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: q
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(G), F.dispatchEvent(fe), D && D.dispatchEvent(G, D)
            }, F)
        }

        function R(F, N, q) {
            F.readyState = De.CLOSING;
            var D = _e.serverLookup(F.url),
                G = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: q,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: q,
                    wasClean: !1
                }),
                pe = _({
                    type: "error",
                    target: F.target
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(pe), F.dispatchEvent(G), F.dispatchEvent(fe), D && D.dispatchEvent(G, D)
            }, F)
        }

        function L(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var V = new WeakMap;

        function te(F) {
            if (V.has(F)) return V.get(F);
            var N = new Proxy(F, {
                get: function(D, G) {
                    return G === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Ne = pe.code || ke.CLOSE_NORMAL,
                            Ve = pe.reason || "";
                        S(N, Ne, Ve)
                    } : G === "send" ? function(pe) {
                        pe = L(pe), F.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: F
                        }))
                    } : G === "on" ? function(pe, Ne) {
                        F.addEventListener("server::" + pe, Ne)
                    } : G === "target" ? F : D[G]
                }
            });
            return V.set(F, N), N
        }

        function Se(F) {
            var N = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (N ? N.length : 0)
        }

        function he(F) {
            var N = new K(F),
                q = N.pathname,
                D = N.protocol,
                G = N.hash;
            if (!F) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (q || (N.pathname = "/"), D === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (D !== "ws:" && D !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + D + "' is not allowed.");
            if (G !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + G + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function Ie(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var N = F.map(function(D) {
                    return {
                        count: 1,
                        protocol: D
                    }
                }).reduce(function(D, G) {
                    return D[G.protocol] = (D[G.protocol] || 0) + G.count, D
                }, {}),
                q = Object.keys(N).filter(function(D) {
                    return N[D] > 1
                });
            if (q.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + q[0] + "' is duplicated.");
            return F
        }
        var De = function(F) {
            function N(D, G) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(D), G = Ie(G), this.protocol = G[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var fe = te(this),
                    pe = _e.attachWebSocket(fe, this.url);
                je(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(_({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: ke.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var Ve = pe.options.selectProtocol(G),
                                    pt = Ve !== "",
                                    Ft = G.indexOf(Ve) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(_({
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
                    })), U("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var q = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return q.onopen.get = function() {
                return this._onopen
            }, q.onmessage.get = function() {
                return this._onmessage
            }, q.onclose.get = function() {
                return this._onclose
            }, q.onerror.get = function() {
                return this._onerror
            }, q.onopen.set = function(D) {
                this.removeEventListener("open", this._onopen), this._onopen = D, this.addEventListener("open", D)
            }, q.onmessage.set = function(D) {
                this.removeEventListener("message", this._onmessage), this._onmessage = D, this.addEventListener("message", D)
            }, q.onclose.set = function(D) {
                this.removeEventListener("close", this._onclose), this._onclose = D, this.addEventListener("close", D)
            }, q.onerror.set = function(D) {
                this.removeEventListener("error", this._onerror), this._onerror = D, this.addEventListener("error", D)
            }, N.prototype.send = function(G) {
                var fe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: L(G)
                    }),
                    Ne = _e.serverLookup(this.url);
                Ne && je(function() {
                    fe.dispatchEvent(pe, G)
                }, Ne)
            }, N.prototype.close = function(G, fe) {
                if (G !== void 0 && (typeof G != "number" || G !== 1e3 && (G < 3e3 || G > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + G + " is neither.");
                if (fe !== void 0) {
                    var pe = Se(fe);
                    if (pe > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === N.CLOSING || this.readyState === N.CLOSED)) {
                    var Ne = te(this);
                    this.readyState === N.CONNECTING ? R(Ne, G || ke.CLOSE_ABNORMAL, fe) : S(Ne, G || ke.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(N.prototype, q), N
        }(we);
        De.CONNECTING = 0, De.prototype.CONNECTING = De.CONNECTING, De.OPEN = 1, De.prototype.OPEN = De.OPEN, De.CLOSING = 2, De.prototype.CLOSING = De.CLOSING, De.CLOSED = 3, De.prototype.CLOSED = De.CLOSED;
        var it = function(F) {
            return F.reduce(function(N, q) {
                return N.indexOf(q) > -1 ? N : N.concat(q)
            }, [])
        };

        function xt() {
            return typeof window < "u" ? window : typeof process == "object" && typeof IC == "function" && typeof yt == "object" ? yt : this
        }
        var on = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            lt = function(F) {
                function N(q, D) {
                    D === void 0 && (D = on), F.call(this);
                    var G = new K(q);
                    G.pathname || (G.pathname = "/"), this.url = G.toString(), this.originalWebSocket = null;
                    var fe = _e.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(_({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, on, D), this.options.mock && this.mockWebsocket()
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket = D.WebSocket, D.WebSocket = De
                }, N.prototype.restoreWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket !== null && (D.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(D) {
                    D === void 0 && (D = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof D == "function" && D()
                }, N.prototype.on = function(D, G) {
                    this.addEventListener(D, G)
                }, N.prototype.close = function(D) {
                    D === void 0 && (D = {});
                    var G = D.code,
                        fe = D.reason,
                        pe = D.wasClean,
                        Ne = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = De.CLOSED, Ve.dispatchEvent(g({
                            type: "close",
                            target: Ve.target,
                            code: G || ke.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(D, G, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Ne = fe.websockets;
                    Ne || (Ne = _e.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (G = Array.prototype.slice.call(arguments, 1, arguments.length), G = G.map(function(Ve) {
                        return L(Ve)
                    })) : G = L(G), Ne.forEach(function(Ve) {
                        Array.isArray(G) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: D,
                            data: G,
                            origin: pe.url,
                            target: Ve.target
                        })].concat(G)) : Ve.dispatchEvent(l({
                            type: D,
                            data: G,
                            origin: pe.url,
                            target: Ve.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, N.prototype.to = function(D, G, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Ne = this,
                        Ve = it(fe.concat(_e.websocketsLookup(this.url, D, G)));
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
                    for (var D = [], G = arguments.length; G--;) D[G] = arguments[G];
                    return this.to.apply(null, D)
                }, N.prototype.simulate = function(D) {
                    var G = _e.websocketsLookup(this.url);
                    D === "error" && G.forEach(function(fe) {
                        fe.readyState = De.CLOSED, fe.dispatchEvent(_({
                            type: "error"
                        }))
                    })
                }, N
            }(we);
        lt.of = function(N) {
            return new lt(N)
        };
        var wt = function(F) {
            function N(D, G) {
                var fe = this;
                D === void 0 && (D = "socket.io"), G === void 0 && (G = ""), F.call(this), this.binaryType = "blob";
                var pe = new K(D);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof G == "string" || typeof G == "object" && G !== null ? this.protocol = G : Array.isArray(G) && G.length > 0 && (this.protocol = G[0]);
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
                    })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ve) {
                    fe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ve.target,
                        code: Ve.code
                    }))
                })
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var q = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var G = _e.serverLookup(this.url);
                    return _e.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), G && G.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    }), G), this
                }
            }, N.prototype.disconnect = function() {
                return this.close()
            }, N.prototype.emit = function(G) {
                for (var fe = [], pe = arguments.length - 1; pe-- > 0;) fe[pe] = arguments[pe + 1];
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ne = l({
                        type: G,
                        origin: this.url,
                        data: fe
                    }),
                    Ve = _e.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(fe)), this
            }, N.prototype.send = function(G) {
                return this.emit("message", G), this
            }, q.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var D = this,
                    G = _e.serverLookup(this.url);
                if (!G) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Ne) {
                        return G.emit(pe, Ne, {
                            websockets: _e.websocketsLookup(D.url, null, D)
                        }), D
                    },
                    to: function(pe) {
                        return G.to(pe, D)
                    },
                    in: function(pe) {
                        return G.in(pe, D)
                    }
                }
            }, N.prototype.on = function(G, fe) {
                return this.addEventListener(G, fe), this
            }, N.prototype.off = function(G, fe) {
                this.removeEventListener(G, fe)
            }, N.prototype.hasListeners = function(G) {
                var fe = this.listeners[G];
                return Array.isArray(fe) ? !!fe.length : !1
            }, N.prototype.join = function(G) {
                _e.addMembershipToRoom(this, G)
            }, N.prototype.leave = function(G) {
                _e.removeMembershipFromRoom(this, G)
            }, N.prototype.to = function(G) {
                return this.broadcast.to(G)
            }, N.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, N.prototype.dispatchEvent = function(G) {
                for (var fe = this, pe = [], Ne = arguments.length - 1; Ne-- > 0;) pe[Ne] = arguments[Ne + 1];
                var Ve = G.type,
                    pt = this.listeners[Ve];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    pe.length > 0 ? Ft.apply(fe, pe) : Ft.call(fe, G.data ? G.data : G)
                })
            }, Object.defineProperties(N.prototype, q), N
        }(we);
        wt.CONNECTING = 0, wt.OPEN = 1, wt.CLOSING = 2, wt.CLOSED = 3;
        var Ct = function(N, q) {
            return new wt(N, q)
        };
        Ct.connect = function(N, q) {
            return Ct(N, q)
        };
        var Qt = lt,
            Je = De,
            Lt = Ct;
        n.Server = Qt, n.WebSocket = Je, n.SocketIO = Lt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(Tc, Tc.exports);
var MC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(E, k) {
            var A = E.x - k.x,
                M = E.y - k.y;
            return A * A + M * M
        }

        function n(E, k, A) {
            var M = k.x,
                $ = k.y,
                J = A.x - M,
                ie = A.y - $;
            if (J !== 0 || ie !== 0) {
                var Y = ((E.x - M) * J + (E.y - $) * ie) / (J * J + ie * ie);
                Y > 1 ? (M = A.x, $ = A.y) : Y > 0 && (M += J * Y, $ += ie * Y)
            }
            return J = E.x - M, ie = E.y - $, J * J + ie * ie
        }

        function i(E, k) {
            for (var A = E[0], M = [A], $, J = 1, ie = E.length; J < ie; J++) $ = E[J], e($, A) > k && (M.push($), A = $);
            return A !== $ && M.push($), M
        }

        function o(E, k, A, M, $) {
            for (var J = M, ie, Y = k + 1; Y < A; Y++) {
                var re = n(E[Y], E[k], E[A]);
                re > J && (ie = Y, J = re)
            }
            J > M && (ie - k > 1 && o(E, k, ie, M, $), $.push(E[ie]), A - ie > 1 && o(E, ie, A, M, $))
        }

        function h(E, k) {
            var A = E.length - 1,
                M = [E[0]];
            return o(E, 0, A, k, M), M.push(E[A]), M
        }

        function m(E, k, A) {
            if (E.length <= 2) return E;
            var M = k !== void 0 ? k * k : 1;
            return E = A ? E : i(E, M), E = h(E, M), E
        }
        t.exports = m, t.exports.default = m
    })()
})(MC);
const DC = mt.View.extend({
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
        Gh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            Me(window).trigger("resize")
        }, .5)
    },
    getCampaign() {
        const t = this.model.get("url");
        if (!t) return "";
        let e = "";
        return t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || ""), e
    }
});
class ai {
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new DC({
            model: new ut.Model(this.bannerData)
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp6-triviadeath2/",
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
ot(ai, "view", null), ot(ai, "isInitialized", !1), ot(ai, "bannerConfig", null);
var LC = {};
(function(t) {
    (function(e) {
        e($i.exports, Eo(), t)
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
                    e.each(ve, function(K, je) {
                        this.addBinding(ae, je, K)
                    }, this);
                    return
                }
                var f = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(ae, P), !!f.length) {
                    e.isString(W) && (W = {
                        observe: W
                    }), e.isFunction(W.observe) && (W.observe = W.observe.call(this));
                    var Ee = $(f, W),
                        Ae = Ee.observe;
                    Ee.selector = P, Ee.view = this;
                    var Pe = Ee.bindId = e.uniqueId(),
                        at = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            m.call(this, Ee.destroy, f, ae, Ee)
                        }, J(f, Ee, ae, Ae), Y(f, Ee, ae, Ae), ie(f, Ee, ae), Ae) {
                        e.each(Ee.events, function(K) {
                            var je = K + se,
                                U = function(Te) {
                                    var we = m.call(this, Ee.getVal, f, Te, Ee, o.call(arguments, 1)),
                                        ye = E(Ee.updateModel, we, Te, Ee);
                                    ye && A(ae, Ae, we, at, Ee)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(je, oe, e.bind(U, this))
                        }, this), e.each(e.flatten([Ae]), function(K) {
                            k(ae, "change:" + K, Ee, function(je, U, oe) {
                                var Te = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Te !== Pe) {
                                    var we = M(ae, Ae, Ee);
                                    re(f, Ee, we, ae)
                                }
                            })
                        });
                        var Be = M(ae, Ae, Ee);
                        re(f, Ee, Be, ae, !0)
                    }
                    m.call(this, Ee.initialize, f, ae, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var o = [].slice,
            h = function(v, P) {
                var W = (P || "").split("."),
                    ae = e.reduce(W, function(se, ve) {
                        return se[ve]
                    }, v);
                return ae == null ? v : ae
            },
            m = function(v) {
                if (v = e.isString(v) ? h(this, v) : v, v) return v.apply(this, o.call(arguments, 1))
            },
            E = function(v, P, W) {
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
                    f = se.view;
                se.onSet && (W = m.call(f, se.onSet, W, se)), se.set ? m.call(f, se.set, P, W, ae, se) : (ve[P] = W, e.isArray(P) && e.isArray(W) && (ve = e.reduce(P, function(Ee, Ae, Pe) {
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
                    f = e.isArray(P) ? e.map(P, se) : se(P);
                return W.onGet && (f = m.call(ae, W.onGet, f, W)), e.isArray(f) ? e.map(f, ve) : ve(f)
            },
            $ = i.getConfiguration = function(v, P) {
                var W = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(se, ve, f, Ee) {
                        se[Ee.updateMethod] && se[Ee.updateMethod](ve)
                    },
                    getVal: function(se, ve, f) {
                        return se[f.updateMethod]()
                    }
                }];
                W = W.concat(e.filter(i._handlers, function(se) {
                    return v.is(se.selector)
                })), W.push(P);
                var ae = e.extend.apply(e, W);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            J = function(v, P, W, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ve = P.view;
                e.each(P.attributes || [], function(f) {
                    f = e.clone(f), f.view = ve;
                    var Ee = "",
                        Ae = f.observe || (f.observe = ae),
                        Pe = function() {
                            var at = e.contains(se, f.name) ? "prop" : "attr",
                                Be = M(W, Ae, f);
                            f.name === "class" ? (v.removeClass(Ee).addClass(Be), Ee = Be) : v[at](f.name, Be)
                        };
                    e.each(e.flatten([Ae]), function(at) {
                        k(W, "change:" + at, P, Pe)
                    }), Pe()
                })
            },
            ie = function(v, P, W, ae) {
                e.each(P.classes || [], function(se, ve) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var f = se.observe,
                        Ee = function() {
                            var Ae = M(W, f, se);
                            v.toggleClass(ve, !!Ae)
                        };
                    e.each(e.flatten([f]), function(Ae) {
                        k(W, "change:" + Ae, P, Ee)
                    }), Ee()
                })
            },
            Y = function(v, P, W, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ve = function() {
                            var f = P.visible,
                                Ee = P.visibleFn,
                                Ae = M(W, ae, P),
                                Pe = !!Ae;
                            (e.isFunction(f) || e.isString(f)) && (Pe = !!m.call(se, f, Ae, P)), Ee ? m.call(se, Ee, v, Pe, P) : v.toggle(Pe)
                        };
                    e.each(e.flatten([ae]), function(f) {
                        k(W, "change:" + f, P, ve)
                    }), ve()
                }
            },
            re = function(v, P, W, ae, se) {
                var ve = P.view;
                !E(P.updateView, W, P) || (m.call(ve, P.update, v, W, ae, P), se || m.call(ve, P.afterUpdate, v, W, P))
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
                if (v.length > 1) P || (P = []), v.each(function(ve, f) {
                    var Ee = n.$(f),
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
                    f = ve && ve.collection || void 0,
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
                    v.find("optgroup").length ? (f = {
                        opt_labels: []
                    }, v.find("> option").length && (f.opt_labels.push(void 0), e.each(v.find("> option"), function(ue) {
                        f[void 0] = Ae(n.$(ue))
                    })), e.each(v.find("optgroup"), function(ue) {
                        var _e = n.$(ue).attr("label");
                        f.opt_labels.push(_e), f[_e] = Ae(n.$(ue).find("option"))
                    })) : f = Ae(v.find("option"))
                }
                ve.valuePath = ve.valuePath || "value", ve.labelPath = ve.labelPath || "label", ve.disabledPath = ve.disabledPath || "disabled";
                var Pe = function(ue, _e, ke) {
                    e.each(ue, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            Bt = function(S, R, L) {
                                Ke.text(S), dt = R, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), L === !0 && Ke.prop("disabled", "disabled")
                            },
                            Gt, _, l;
                        $e === "__default__" ? (Gt = ke.label, _ = ke.value, l = ke.disabled) : (Gt = h($e, ve.labelPath), _ = h($e, ve.valuePath), l = h($e, ve.disabledPath)), Bt(Gt, _, l);
                        var g = function() {
                            return !Ee && dt != null && ke != null && dt === ke ? !0 : !!(e.isObject(ke) && e.isEqual(dt, ke))
                        };
                        g() ? Ke.prop("selected", !0) : Ee && e.isArray(ke) && e.each(ke, function(S) {
                            e.isObject(S) && (S = h(S, ve.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Ke.prop("selected", !0)
                        }), _e.append(Ke)
                    })
                };
                if (v.find("*").remove(), e.isString(f)) {
                    var at = window;
                    f.indexOf("this.") === 0 && (at = this), f = f.replace(/^[a-z]*\.(.+)$/, "$1"), se = h(at, f)
                } else e.isFunction(f) ? se = m.call(this, f, v, ae) : se = f;
                if (se instanceof n.Collection) {
                    var Be = se,
                        K = function() {
                            var ue = M(W, ae.observe, ae);
                            m.call(this, ae.update, v, ue, W, ae)
                        },
                        je = function() {
                            Be.off("add remove reset sort", K)
                        },
                        U = function() {
                            je(), Be.off("stickit:selectRefresh"), W.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", je, this), Be.on("add remove reset sort", K, this), W.trigger("stickit:selectRefresh"), W.once("stickit:selectRefresh", function() {
                        W.off("stickit:unstuck", U)
                    }), W.once("stickit:unstuck", U, this), se = se.toJSON()
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
})(LC);
const PC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    ho = mt.View.extend({
        template: Ze.template(PC),
        model: new ut.Model({}),
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
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || Me("<div />").text(t).html()
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
            const e = Me(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Mi, Us, hs = typeof Map == "function" ? new Map : (Mi = [], Us = [], {
        has: function(t) {
            return Mi.indexOf(t) > -1
        },
        get: function(t) {
            return Us[Mi.indexOf(t)]
        },
        set: function(t, e) {
            Mi.indexOf(t) === -1 && (Mi.push(t), Us.push(e))
        },
        delete: function(t) {
            var e = Mi.indexOf(t);
            e > -1 && (Mi.splice(e, 1), Us.splice(e, 1))
        }
    }),
    wh = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    wh = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function NC(t) {
    var e = hs.get(t);
    e && e.destroy()
}

function VC(t) {
    var e = hs.get(t);
    e && e.update()
}
var is = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((is = function(t) {
    return t
}).destroy = function(t) {
    return t
}, is.update = function(t) {
    return t
}) : ((is = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !hs.has(i)) {
                var o, h = null,
                    m = null,
                    E = null,
                    k = function() {
                        i.clientWidth !== m && J()
                    },
                    A = function(ie) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", A, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(ie).forEach(function(Y) {
                            i.style[Y] = ie[Y]
                        }), hs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", A, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", J, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", J, !1), i.addEventListener("autosize:update", J, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", hs.set(i, {
                    destroy: A,
                    update: J
                }), (o = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : o.resize === "both" && (i.style.resize = "horizontal"), h = o.boxSizing === "content-box" ? -(parseFloat(o.paddingTop) + parseFloat(o.paddingBottom)) : parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), isNaN(h) && (h = 0), J()
            }

            function M(ie) {
                var Y = i.style.width;
                i.style.width = "0px", i.style.width = Y, i.style.overflowY = ie
            }

            function $() {
                if (i.scrollHeight !== 0) {
                    var ie = function(re) {
                            for (var v = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && v.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return v
                        }(i),
                        Y = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + h + "px", m = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), Y && (document.documentElement.scrollTop = Y)
                }
            }

            function J() {
                $();
                var ie = Math.round(parseFloat(i.style.height)),
                    Y = window.getComputedStyle(i, null),
                    re = Y.boxSizing === "content-box" ? Math.round(parseFloat(Y.height)) : i.offsetHeight;
                if (re < ie ? Y.overflowY === "hidden" && (M("scroll"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : Y.overflowY !== "hidden" && (M("hidden"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), E !== re) {
                    E = re;
                    var v = wh("autosize:resized");
                    try {
                        i.dispatchEvent(v)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], NC), t
}, is.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], VC), t
});
var Ac = is;
const BC = `<form>\r
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
    fo = mt.View.extend({
        tagName: "div",
        className: "input",
        model: new ut.Model({}),
        template: Ze.template(BC),
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
                    return t ? typeof t == "object" ? t.html ? t.html : Me("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || Ac(Me("textarea"))
        },
        onSubmitClick() {
            return Me("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (Me("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            Me(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = Me(this.$el).find("textarea");
            Me(t).val(""), this.getOption("preventAutosize") || Ac.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Me(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return sn.sanitize(this.getValue())
        },
        sanitize(t) {
            return sn.sanitize(t)
        },
        sanitizeInput(t) {
            return sn.sanitizeInput(t)
        }
    }),
    $C = '<div class="text"></div>',
    zi = mt.View.extend({
        tagName: "div",
        template: Ze.template($C),
        model: new ut.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : Me("<div />").text(t).html()
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
    li = mt.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? fo : t.get("type") === "text" ? zi : ho
        },
        collection: new ut.Collection([]),
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
let yi = {};

function FC(t, e) {
    yi[t] = yi[t] || [], yi[t].push(e)
}

function jC(t, e) {
    let n;
    !yi[t] || (n = yi[t].indexOf(e)) < 0 || yi[t].splice(n, 1)
}

function bh(t, ...e) {
    !yi[t] || yi[t].map(n => n(...e))
}
let rs, eo;

function Jt() {
    return rs
}

function Hi() {
    return eo
}

function Do(t) {
    if (rs = document.getElementById(t) || t || document.querySelector("canvas"), !rs) throw Error("You must provide a canvas element for the game");
    return eo = rs.getContext("2d"), eo.imageSmoothingEnabled = !1, bh("init"), {
        canvas: rs,
        context: eo
    }
}
class kl {
    constructor({
        spriteSheet: e,
        frames: n,
        frameRate: i,
        loop: o = !0
    } = {}) {
        this.spriteSheet = e, this.frames = n, this.frameRate = i, this.loop = o;
        let {
            width: h,
            height: m,
            margin: E = 0
        } = e.frame;
        this.width = h, this.height = m, this.margin = E, this._f = 0, this._a = 0
    }
    clone() {
        return Lo(this)
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
        context: h = Hi()
    } = {}) {
        let m = this.frames[this._f] / this.spriteSheet._f | 0,
            E = this.frames[this._f] % this.spriteSheet._f | 0;
        h.drawImage(this.spriteSheet.image, E * this.width + (E * 2 + 1) * this.margin, m * this.height + (m * 2 + 1) * this.margin, this.width, this.height, e, n, i, o)
    }
}

function Lo(t) {
    return new kl(t)
}
Lo.prototype = kl.prototype;
Lo.class = kl;
const zC = () => {};

function HC() {
    let t = Jt();
    Hi().clearRect(0, 0, t.width, t.height)
}

function Po({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let o = 0,
        h = 1e3 / t,
        m = 1 / t,
        E = e ? HC : zC,
        k, A, M, $, J;
    const ie = window.performance || Date;

    function Y() {
        if (A = requestAnimationFrame(Y), M = ie.now(), $ = M - k, k = M, !($ > 1e3)) {
            for (bh("tick"), o += $; o >= h;) J.update(m), o -= h;
            E(), J.render()
        }
    }
    return J = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = ie.now(), this.isStopped = !1, requestAnimationFrame(Y)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(A)
        },
        _frame: Y,
        set _last(re) {
            k = re
        }
    }, J
}
let po = [],
    go = [],
    Gs = {},
    mo = [],
    No = {},
    Ch = {
        0: "left",
        1: "middle",
        2: "right"
    },
    qt = {
        x: 0,
        y: 0,
        radius: 5
    };

function UC(t, e) {
    const n = e || qt;
    let i = t.x,
        o = t.y;
    t.anchor && (i -= t.width * t.anchor.x, o -= t.height * t.anchor.y);
    let h = n.x - Math.max(i, Math.min(n.x, i + t.width)),
        m = n.y - Math.max(o, Math.min(n.y, o + t.height));
    return h * h + m * m < n.radius * n.radius
}

function Qa(t) {
    const e = t || qt;
    let n = go.length ? go : po,
        i = n.length - 1,
        o, h;
    for (let m = i; m >= 0; m--)
        if (o = n[m], o.collidesWithPointer ? h = o.collidesWithPointer(e) : h = UC(o, e), h) return o
}

function Ws(t) {
    let e = t.button !== void 0 ? Ch[t.button] : "left";
    No[e] = !0, Tl(t, "onDown")
}

function cr(t) {
    let e = t.button !== void 0 ? Ch[t.button] : "left";
    No[e] = !1, Tl(t, "onUp")
}

function qs(t) {
    Tl(t, "onOver")
}

function Oc() {
    No = {}
}

function Tl(t, e) {
    let n = Jt();
    if (!n) return;
    let i, o, h = n.height / n.offsetHeight,
        m = n.getBoundingClientRect(),
        E = ["touchstart", "touchmove", "touchend"].indexOf(t.type) !== -1;
    if (E) {
        qt.touches = {};
        for (var k = 0; k < t.touches.length; k++) qt.touches[t.touches[k].identifier] = {
            id: t.touches[k].identifier,
            x: (t.touches[k].clientX - m.left) * h,
            y: (t.touches[k].clientY - m.top) * h,
            changed: !1
        };
        for (var k = t.changedTouches.length; k--;) {
            const M = t.changedTouches[k].identifier;
            typeof qt.touches[M] < "u" && (qt.touches[M].changed = !0), i = t.changedTouches[k].clientX, o = t.changedTouches[k].clientY, qt.x = (i - m.left) * h, qt.y = (o - m.top) * h;
            let $ = Qa({
                id: M,
                x: (i - m.left) * h,
                y: (o - m.top) * h,
                radius: qt.radius
            });
            $ && $[e] && $[e](t), Gs[e] && Gs[e](t, $)
        }
    } else i = t.clientX, o = t.clientY, qt.x = (i - m.left) * h, qt.y = (o - m.top) * h;
    if (t.preventDefault(), !E) {
        let A = Qa();
        A && A[e] && A[e](t), Gs[e] && Gs[e](t, A)
    }
}

function Rc() {
    go.length = 0, po.map(t => {
        go.push(t)
    }), po.length = 0
}

function Al() {
    let t = Jt();
    t.removeEventListener("mousedown", Ws), t.removeEventListener("touchstart", Ws), t.removeEventListener("mouseup", cr), t.removeEventListener("touchend", cr), t.removeEventListener("touchcancel", cr), t.removeEventListener("blur", Oc), t.removeEventListener("mousemove", qs), t.removeEventListener("touchmove", qs), t.addEventListener("mousedown", Ws), t.addEventListener("touchstart", Ws), t.addEventListener("mouseup", cr), t.addEventListener("touchend", cr), t.addEventListener("touchcancel", cr), t.addEventListener("blur", Oc), t.addEventListener("mousemove", qs), t.addEventListener("touchmove", qs), jC("tick", Rc), FC("tick", Rc)
}

function xh(t) {
    [].concat(t).map(e => {
        e._r || (e._r = e.render, e.render = function() {
            po.push(this), this._r()
        }, mo.push(e))
    })
}

function GC(t) {
    [].concat(t).map(e => {
        e.render = e._r, e._r = 0;
        let n = mo.indexOf(e);
        n !== -1 && mo.splice(n, 1)
    })
}

function Ic(t) {
    return mo.includes(t) ? Qa() === t : !1
}

function vo(t) {
    return !!No[t]
}
class WC {
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
        i && this.objects.sort((o, h) => h.isAlive() - o.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
WC.prototype;

function Mc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        o = e.y + e.height / 2,
        h = t.y < o && t.y + t.height >= e.y,
        m = t.y + t.height >= o && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (h && n.push(0), m && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (h && n.push(1), m && n.push(3)), n
}
class Ol {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let o = Jt();
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
            for (i = Mc(e, this.bounds), o = 0; o < i.length; o++) this._s[i[o]].get(e).forEach(h => n.add(h));
            return Array.from(n)
        }
        return this._o.filter(h => h !== e)
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
        for (n = Mc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = Rl({
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

function Rl(t) {
    return new Ol(t)
}
Rl.prototype = Ol.prototype;
Rl.class = Ol;
class Il {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return wr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
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

function wr(t, e, n = {}) {
    let i = new Il(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
wr.prototype = Il.prototype;
wr.class = Il;
class Ml {
    constructor(e) {
        this.init(e)
    }
    init(e = {}) {
        let {
            x: n,
            y: i,
            dx: o,
            dy: h,
            ddx: m,
            ddy: E,
            width: k,
            height: A,
            image: M
        } = e;
        this.position = wr(n, i), this.velocity = wr(o, h), this.acceleration = wr(m, E), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = Hi();
        for (let $ in e) this[$] = e[$];
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
            o = e.x,
            h = e.y;
        return e.anchor && (o -= e.width * e.anchor.x, h -= e.height * e.anchor.y), n < o + e.width && n + this.width > o && i < h + e.height && i + this.height > h
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

function Gn(t) {
    return new Ml(t)
}
Gn.prototype = Ml.prototype;
Gn.class = Ml;

function qC(t) {
    if (+t === t) return t;
    let e = [],
        n = t.split(".."),
        i = +n[0],
        o = +n[1],
        h = i;
    if (i < o)
        for (; h <= o; h++) e.push(h);
    else
        for (; h >= o; h--) e.push(h);
    return e
}
class XC {
    constructor({
        image: e,
        frameWidth: n,
        frameHeight: i,
        frameMargin: o,
        animations: h
    } = {}) {
        if (!e) throw Error("You must provide an Image for the SpriteSheet");
        this.animations = {}, this.image = e, this.frame = {
            width: n,
            height: i,
            margin: o
        }, this._f = e.width / n | 0, this.createAnimations(h)
    }
    createAnimations(e) {
        let n, i;
        for (i in e) {
            let {
                frames: o,
                frameRate: h,
                loop: m
            } = e[i];
            if (n = [], o === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(o).map(E => {
                n = n.concat(qC(E))
            }), this.animations[i] = Lo({
                spriteSheet: this,
                frames: n,
                frameRate: h,
                loop: m
            })
        }
    }
}
XC.prototype;
var Eh = {
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
                const d = [];
                for (let b = 0; b < c.length; b++) d.indexOf(c[b]) === -1 && d.push(c[b]);
                return d
            },
            o = c => c.charAt(0).toUpperCase() + c.slice(1),
            h = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            m = c => {
                console.error("".concat(n, " ").concat(c))
            },
            E = [],
            k = c => {
                E.includes(c) || (E.push(c), h(c))
            },
            A = (c, d) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(d, '" instead.'))
            },
            M = c => typeof c == "function" ? c() : c,
            $ = c => c && typeof c.toPromise == "function",
            J = c => $(c) ? c.toPromise() : Promise.resolve(c),
            ie = c => c && Promise.resolve(c) === c,
            Y = c => c[Math.floor(Math.random() * c.length)],
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
            f = c => {
                ae(c) || h('Unknown parameter "'.concat(c, '"'))
            },
            Ee = c => {
                W.includes(c) && h('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Ae = c => {
                ve(c) && A(c, ve(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && h('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const d in c) f(d), c.toast && Ee(d), Ae(d)
            },
            at = "swal2-",
            Be = c => {
                const d = {};
                for (const b in c) d[c[b]] = at + c[b];
                return d
            },
            K = Be(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            je = Be(["success", "warning", "info", "question", "error"]),
            U = () => document.body.querySelector(".".concat(K.container)),
            oe = c => {
                const d = U();
                return d ? d.querySelector(c) : null
            },
            Te = c => oe(".".concat(c)),
            we = () => Te(K.popup),
            ye = () => Te(K.icon),
            ue = () => Te(K.title),
            _e = () => Te(K["html-container"]),
            ke = () => Te(K.image),
            $e = () => Te(K["progress-steps"]),
            Ke = () => Te(K["validation-message"]),
            dt = () => oe(".".concat(K.actions, " .").concat(K.confirm)),
            Bt = () => oe(".".concat(K.actions, " .").concat(K.deny)),
            Gt = () => Te(K["input-label"]),
            _ = () => oe(".".concat(K.loader)),
            l = () => oe(".".concat(K.actions, " .").concat(K.cancel)),
            g = () => Te(K.actions),
            S = () => Te(K.footer),
            R = () => Te(K["timer-progress-bar"]),
            L = () => Te(K.close),
            V = `
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
                const c = Array.from(we().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, B) => {
                        const ge = parseInt(b.getAttribute("tabindex")),
                            He = parseInt(B.getAttribute("tabindex"));
                        return ge > He ? 1 : ge < He ? -1 : 0
                    }),
                    d = Array.from(we().querySelectorAll(V)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(d)).filter(b => pe(b))
            },
            Se = () => xt(document.body, K.shown) && !xt(document.body, K["toast-shown"]) && !xt(document.body, K["no-backdrop"]),
            he = () => we() && xt(we(), K.toast),
            Ie = () => we().hasAttribute("data-loading"),
            De = {
                previousBodyPadding: null
            },
            it = (c, d) => {
                if (c.textContent = "", d) {
                    const B = new DOMParser().parseFromString(d, "text/html");
                    Array.from(B.querySelector("head").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    }), Array.from(B.querySelector("body").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    })
                }
            },
            xt = (c, d) => {
                if (!d) return !1;
                const b = d.split(/\s+/);
                for (let B = 0; B < b.length; B++)
                    if (!c.classList.contains(b[B])) return !1;
                return !0
            },
            on = (c, d) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(K).includes(b) && !Object.values(je).includes(b) && !Object.values(d.showClass).includes(b) && c.classList.remove(b)
                })
            },
            lt = (c, d, b) => {
                if (on(c, d), d.customClass && d.customClass[b]) {
                    if (typeof d.customClass[b] != "string" && !d.customClass[b].forEach) return h("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof d.customClass[b], '"'));
                    Je(c, d.customClass[b])
                }
            },
            wt = (c, d) => {
                if (!d) return null;
                switch (d) {
                    case "select":
                    case "textarea":
                    case "file":
                        return c.querySelector(".".concat(K.popup, " > .").concat(K[d]));
                    case "checkbox":
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.checkbox, " input"));
                    case "radio":
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.radio, " input:checked")) || c.querySelector(".".concat(K.popup, " > .").concat(K.radio, " input:first-child"));
                    case "range":
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.range, " input"));
                    default:
                        return c.querySelector(".".concat(K.popup, " > .").concat(K.input))
                }
            },
            Ct = c => {
                if (c.focus(), c.type !== "file") {
                    const d = c.value;
                    c.value = "", c.value = d
                }
            },
            Qt = (c, d, b) => {
                !c || !d || (typeof d == "string" && (d = d.split(/\s+/).filter(Boolean)), d.forEach(B => {
                    Array.isArray(c) ? c.forEach(ge => {
                        b ? ge.classList.add(B) : ge.classList.remove(B)
                    }) : b ? c.classList.add(B) : c.classList.remove(B)
                }))
            },
            Je = (c, d) => {
                Qt(c, d, !0)
            },
            Lt = (c, d) => {
                Qt(c, d, !1)
            },
            F = (c, d) => {
                const b = Array.from(c.children);
                for (let B = 0; B < b.length; B++) {
                    const ge = b[B];
                    if (ge instanceof HTMLElement && xt(ge, d)) return ge
                }
            },
            N = (c, d, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? c.style[d] = typeof b == "number" ? "".concat(b, "px") : b : c.style.removeProperty(d)
            },
            q = function(c) {
                let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = d
            },
            D = c => {
                c.style.display = "none"
            },
            G = (c, d, b, B) => {
                const ge = c.querySelector(d);
                ge && (ge.style[b] = B)
            },
            fe = function(c, d) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                d ? q(c, b) : D(c)
            },
            pe = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !pe(dt()) && !pe(Bt()) && !pe(l()),
            Ve = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const d = window.getComputedStyle(c),
                    b = parseFloat(d.getPropertyValue("animation-duration") || "0"),
                    B = parseFloat(d.getPropertyValue("transition-duration") || "0");
                return b > 0 || B > 0
            },
            Ft = function(c) {
                let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const b = R();
                pe(b) && (d && (b.style.transition = "none", b.style.width = "100%"), setTimeout(() => {
                    b.style.transition = "width ".concat(c / 1e3, "s linear"), b.style.width = "0%"
                }, 10))
            },
            Ye = () => {
                const c = R(),
                    d = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const b = parseInt(window.getComputedStyle(c).width),
                    B = d / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(B, "%")
            },
            Pn = () => typeof window > "u" || typeof document > "u",
            $n = 100,
            rt = {},
            Nn = () => {
                rt.previousActiveElement instanceof HTMLElement ? (rt.previousActiveElement.focus(), rt.previousActiveElement = null) : document.body && document.body.focus()
            },
            bi = c => new Promise(d => {
                if (!c) return d();
                const b = window.scrollX,
                    B = window.scrollY;
                rt.restoreFocusTimeout = setTimeout(() => {
                    Nn(), d()
                }, $n), window.scrollTo(b, B)
            }),
            Ir = `
 <div aria-labelledby="`.concat(K.title, '" aria-describedby="').concat(K["html-container"], '" class="').concat(K.popup, `" tabindex="-1">
   <button type="button" class="`).concat(K.close, `"></button>
   <ul class="`).concat(K["progress-steps"], `"></ul>
   <div class="`).concat(K.icon, `"></div>
   <img class="`).concat(K.image, `" />
   <h2 class="`).concat(K.title, '" id="').concat(K.title, `"></h2>
   <div class="`).concat(K["html-container"], '" id="').concat(K["html-container"], `"></div>
   <input class="`).concat(K.input, `" />
   <input type="file" class="`).concat(K.file, `" />
   <div class="`).concat(K.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(K.select, `"></select>
   <div class="`).concat(K.radio, `"></div>
   <label for="`).concat(K.checkbox, '" class="').concat(K.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(K.label, `"></span>
   </label>
   <textarea class="`).concat(K.textarea, `"></textarea>
   <div class="`).concat(K["validation-message"], '" id="').concat(K["validation-message"], `"></div>
   <div class="`).concat(K.actions, `">
     <div class="`).concat(K.loader, `"></div>
     <button type="button" class="`).concat(K.confirm, `"></button>
     <button type="button" class="`).concat(K.deny, `"></button>
     <button type="button" class="`).concat(K.cancel, `"></button>
   </div>
   <div class="`).concat(K.footer, `"></div>
   <div class="`).concat(K["timer-progress-bar-container"], `">
     <div class="`).concat(K["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            On = () => {
                const c = U();
                return c ? (c.remove(), Lt([document.documentElement, document.body], [K["no-backdrop"], K["toast-shown"], K["has-column"]]), !0) : !1
            },
            an = () => {
                rt.currentInstance.resetValidationMessage()
            },
            Mr = () => {
                const c = we(),
                    d = F(c, K.input),
                    b = F(c, K.file),
                    B = c.querySelector(".".concat(K.range, " input")),
                    ge = c.querySelector(".".concat(K.range, " output")),
                    He = F(c, K.select),
                    Ut = c.querySelector(".".concat(K.checkbox, " input")),
                    jn = F(c, K.textarea);
                d.oninput = an, b.onchange = an, He.onchange = an, Ut.onchange = an, jn.oninput = an, B.oninput = () => {
                    an(), ge.value = B.value
                }, B.onchange = () => {
                    an(), ge.value = B.value
                }
            },
            Dr = c => typeof c == "string" ? document.querySelector(c) : c,
            Ci = c => {
                const d = we();
                d.setAttribute("role", c.toast ? "alert" : "dialog"), d.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || d.setAttribute("aria-modal", "true")
            },
            Ui = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(U(), K.rtl)
            },
            xi = c => {
                const d = On();
                if (Pn()) {
                    m("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = K.container, d && Je(b, K["no-transition"]), it(b, Ir);
                const B = Dr(c.target);
                B.appendChild(b), Ci(c), Ui(B), Mr()
            },
            Ei = (c, d) => {
                c instanceof HTMLElement ? d.appendChild(c) : typeof c == "object" ? Gi(c, d) : c && it(d, c)
            },
            Gi = (c, d) => {
                c.jquery ? Wi(d, c) : it(d, c.toString())
            },
            Wi = (c, d) => {
                if (c.textContent = "", 0 in d)
                    for (let b = 0; b in d; b++) c.appendChild(d[b].cloneNode(!0));
                else c.appendChild(d.cloneNode(!0))
            },
            yn = (() => {
                if (Pn()) return !1;
                const c = document.createElement("div"),
                    d = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const b in d)
                    if (Object.prototype.hasOwnProperty.call(d, b) && typeof c.style[b] < "u") return d[b];
                return !1
            })(),
            qi = () => {
                const c = document.createElement("div");
                c.className = K["scrollbar-measure"], document.body.appendChild(c);
                const d = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), d
            },
            _i = (c, d) => {
                const b = g(),
                    B = _();
                !d.showConfirmButton && !d.showDenyButton && !d.showCancelButton ? D(b) : q(b), lt(b, d, "actions"), Xn(b, B, d), it(B, d.loaderHtml), lt(B, d, "loader")
            };

        function Xn(c, d, b) {
            const B = dt(),
                ge = Bt(),
                He = l();
            Si(B, "confirm", b), Si(ge, "deny", b), Si(He, "cancel", b), Xi(B, ge, He, b), b.reverseButtons && (b.toast ? (c.insertBefore(He, B), c.insertBefore(ge, B)) : (c.insertBefore(He, d), c.insertBefore(ge, d), c.insertBefore(B, d)))
        }

        function Xi(c, d, b, B) {
            if (!B.buttonsStyling) return Lt([c, d, b], K.styled);
            Je([c, d, b], K.styled), B.confirmButtonColor && (c.style.backgroundColor = B.confirmButtonColor, Je(c, K["default-outline"])), B.denyButtonColor && (d.style.backgroundColor = B.denyButtonColor, Je(d, K["default-outline"])), B.cancelButtonColor && (b.style.backgroundColor = B.cancelButtonColor, Je(b, K["default-outline"]))
        }

        function Si(c, d, b) {
            fe(c, b["show".concat(o(d), "Button")], "inline-block"), it(c, b["".concat(d, "ButtonText")]), c.setAttribute("aria-label", b["".concat(d, "ButtonAriaLabel")]), c.className = K[d], lt(c, b, "".concat(d, "Button")), Je(c, b["".concat(d, "ButtonClass")])
        }
        const et = (c, d) => {
            const b = U();
            !b || (y(b, d.backdrop), a(b, d.position), C(b, d.grow), lt(b, d, "container"))
        };

        function y(c, d) {
            typeof d == "string" ? c.style.background = d : d || Je([document.documentElement, document.body], K["no-backdrop"])
        }

        function a(c, d) {
            d in K ? Je(c, K[d]) : (h('The "position" parameter is not valid, defaulting to "center"'), Je(c, K.center))
        }

        function C(c, d) {
            if (d && typeof d == "string") {
                const b = "grow-".concat(d);
                b in K && Je(c, K[b])
            }
        }
        var O = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Q = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            Ce = (c, d) => {
                const b = we(),
                    B = O.innerParams.get(c),
                    ge = !B || d.input !== B.input;
                Q.forEach(He => {
                    const Ut = F(b, K[He]);
                    Xt(He, d.inputAttributes), Ut.className = K[He], ge && D(Ut)
                }), d.input && (ge && We(d), Yn(d))
            },
            We = c => {
                if (!jt[c.input]) return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const d = Lr(c.input),
                    b = jt[c.input](d, c);
                q(d), setTimeout(() => {
                    Ct(b)
                })
            },
            It = c => {
                for (let d = 0; d < c.attributes.length; d++) {
                    const b = c.attributes[d].name;
                    ["type", "value", "style"].includes(b) || c.removeAttribute(b)
                }
            },
            Xt = (c, d) => {
                const b = wt(we(), c);
                if (!!b) {
                    It(b);
                    for (const B in d) b.setAttribute(B, d[B])
                }
            },
            Yn = c => {
                const d = Lr(c.input);
                typeof c.customClass == "object" && Je(d, c.customClass.input)
            },
            Fn = (c, d) => {
                (!c.placeholder || d.inputPlaceholder) && (c.placeholder = d.inputPlaceholder)
            },
            Kn = (c, d, b) => {
                if (b.inputLabel) {
                    c.id = K.input;
                    const B = document.createElement("label"),
                        ge = K["input-label"];
                    B.setAttribute("for", c.id), B.className = ge, typeof b.customClass == "object" && Je(B, b.customClass.inputLabel), B.innerText = b.inputLabel, d.insertAdjacentElement("beforebegin", B)
                }
            },
            Lr = c => F(we(), K[c] || K.input),
            Yt = (c, d) => {
                ["string", "number"].includes(typeof d) ? c.value = "".concat(d) : ie(d) || h('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof d, '"'))
            },
            jt = {};
        jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = (c, d) => (Yt(c, d.inputValue), Kn(c, c, d), Fn(c, d), c.type = d.input, c), jt.file = (c, d) => (Kn(c, c, d), Fn(c, d), c), jt.range = (c, d) => {
            const b = c.querySelector("input"),
                B = c.querySelector("output");
            return Yt(b, d.inputValue), b.type = d.input, Yt(B, d.inputValue), Kn(b, c, d), c
        }, jt.select = (c, d) => {
            if (c.textContent = "", d.inputPlaceholder) {
                const b = document.createElement("option");
                it(b, d.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Kn(c, c, d), c
        }, jt.radio = c => (c.textContent = "", c), jt.checkbox = (c, d) => {
            const b = wt(we(), "checkbox");
            b.value = "1", b.id = K.checkbox, b.checked = Boolean(d.inputValue);
            const B = c.querySelector("span");
            return it(B, d.inputPlaceholder), b
        }, jt.textarea = (c, d) => {
            Yt(c, d.inputValue), Fn(c, d), Kn(c, c, d);
            const b = B => parseInt(window.getComputedStyle(B).marginLeft) + parseInt(window.getComputedStyle(B).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const B = parseInt(window.getComputedStyle(we()).width),
                        ge = () => {
                            const He = c.offsetWidth + b(c);
                            He > B ? we().style.width = "".concat(He, "px") : we().style.width = null
                        };
                    new MutationObserver(ge).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Yi = (c, d) => {
                const b = _e();
                lt(b, d, "htmlContainer"), d.html ? (Ei(d.html, b), q(b, "block")) : d.text ? (b.textContent = d.text, q(b, "block")) : D(b), Ce(c, d)
            },
            Bo = (c, d) => {
                const b = S();
                fe(b, d.footer), d.footer && Ei(d.footer, b), lt(b, d, "footer")
            },
            $o = (c, d) => {
                const b = L();
                it(b, d.closeButtonHtml), lt(b, d, "closeButton"), fe(b, d.showCloseButton), b.setAttribute("aria-label", d.closeButtonAriaLabel)
            },
            Pr = (c, d) => {
                const b = O.innerParams.get(c),
                    B = ye();
                if (b && d.icon === b.icon) {
                    Es(B, d), Nr(B, d);
                    return
                }
                if (!d.icon && !d.iconHtml) {
                    D(B);
                    return
                }
                if (d.icon && Object.keys(je).indexOf(d.icon) === -1) {
                    m('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon, '"')), D(B);
                    return
                }
                q(B), Es(B, d), Nr(B, d), Je(B, d.showClass.icon)
            },
            Nr = (c, d) => {
                for (const b in je) d.icon !== b && Lt(c, je[b]);
                Je(c, je[d.icon]), xn(c, d), Ki(), lt(c, d, "icon")
            },
            Ki = () => {
                const c = we(),
                    d = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let B = 0; B < b.length; B++) b[B].style.backgroundColor = d
            },
            xs = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
            Fo = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            Es = (c, d) => {
                let b = c.innerHTML,
                    B;
                d.iconHtml ? B = Vr(d.iconHtml) : d.icon === "success" ? (B = xs, b = b.replace(/ style=".*?"/g, "")) : d.icon === "error" ? B = Fo : B = Vr({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [d.icon]), b.trim() !== B.trim() && it(c, B)
            },
            xn = (c, d) => {
                if (!!d.iconColor) {
                    c.style.color = d.iconColor, c.style.borderColor = d.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) G(c, b, "backgroundColor", d.iconColor);
                    G(c, ".swal2-success-ring", "borderColor", d.iconColor)
                }
            },
            Vr = c => '<div class="'.concat(K["icon-content"], '">').concat(c, "</div>"),
            ki = (c, d) => {
                const b = ke();
                if (!d.imageUrl) return D(b);
                q(b, ""), b.setAttribute("src", d.imageUrl), b.setAttribute("alt", d.imageAlt), N(b, "width", d.imageWidth), N(b, "height", d.imageHeight), b.className = K.image, lt(b, d, "image")
            },
            jo = (c, d) => {
                const b = $e();
                if (!d.progressSteps || d.progressSteps.length === 0) return D(b);
                q(b), b.textContent = "", d.currentProgressStep >= d.progressSteps.length && h("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), d.progressSteps.forEach((B, ge) => {
                    const He = zo(B);
                    if (b.appendChild(He), ge === d.currentProgressStep && Je(He, K["active-progress-step"]), ge !== d.progressSteps.length - 1) {
                        const Ut = Jn(d);
                        b.appendChild(Ut)
                    }
                })
            },
            zo = c => {
                const d = document.createElement("li");
                return Je(d, K["progress-step"]), it(d, c), d
            },
            Jn = c => {
                const d = document.createElement("li");
                return Je(d, K["progress-step-line"]), c.progressStepsDistance && N(d, "width", c.progressStepsDistance), d
            },
            Qn = (c, d) => {
                const b = ue();
                fe(b, d.title || d.titleText, "block"), d.title && Ei(d.title, b), d.titleText && (b.innerText = d.titleText), lt(b, d, "title")
            },
            Br = (c, d) => {
                const b = U(),
                    B = we();
                d.toast ? (N(b, "width", d.width), B.style.width = "100%", B.insertBefore(_(), ye())) : N(B, "width", d.width), N(B, "padding", d.padding), d.color && (B.style.color = d.color), d.background && (B.style.background = d.background), D(Ke()), Ho(B, d)
            },
            Ho = (c, d) => {
                c.className = "".concat(K.popup, " ").concat(pe(c) ? d.showClass.popup : ""), d.toast ? (Je([document.documentElement, document.body], K["toast-shown"]), Je(c, K.toast)) : Je(c, K.modal), lt(c, d, "popup"), typeof d.customClass == "string" && Je(c, d.customClass), d.icon && Je(c, K["icon-".concat(d.icon)])
            },
            $r = (c, d) => {
                Br(c, d), et(c, d), jo(c, d), Pr(c, d), ki(c, d), Qn(c, d), $o(c, d), Yi(c, d), _i(c, d), Bo(c, d), typeof d.didRender == "function" && d.didRender(we())
            },
            Zn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            Ti = () => {
                Array.from(document.body.children).forEach(d => {
                    d === U() || d.contains(U()) || (d.hasAttribute("aria-hidden") && d.setAttribute("data-previous-aria-hidden", d.getAttribute("aria-hidden")), d.setAttribute("aria-hidden", "true"))
                })
            },
            Fr = () => {
                Array.from(document.body.children).forEach(d => {
                    d.hasAttribute("data-previous-aria-hidden") ? (d.setAttribute("aria-hidden", d.getAttribute("data-previous-aria-hidden")), d.removeAttribute("data-previous-aria-hidden")) : d.removeAttribute("aria-hidden")
                })
            },
            Ji = ["swal-title", "swal-html", "swal-footer"],
            Uo = c => {
                const d = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!d) return {};
                const b = d.content;
                return Yo(b), Object.assign(_s(b), Go(b), Wo(b), jr(b), qo(b), Xo(b, Ji))
            },
            _s = c => {
                const d = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(B => {
                    ei(B, ["name", "value"]);
                    const ge = B.getAttribute("name"),
                        He = B.getAttribute("value");
                    typeof re[ge] == "boolean" && He === "false" && (d[ge] = !1), typeof re[ge] == "object" && (d[ge] = JSON.parse(He))
                }), d
            },
            Go = c => {
                const d = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(B => {
                    ei(B, ["type", "color", "aria-label"]);
                    const ge = B.getAttribute("type");
                    d["".concat(ge, "ButtonText")] = B.innerHTML, d["show".concat(o(ge), "Button")] = !0, B.hasAttribute("color") && (d["".concat(ge, "ButtonColor")] = B.getAttribute("color")), B.hasAttribute("aria-label") && (d["".concat(ge, "ButtonAriaLabel")] = B.getAttribute("aria-label"))
                }), d
            },
            Wo = c => {
                const d = {},
                    b = c.querySelector("swal-image");
                return b && (ei(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (d.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (d.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (d.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (d.imageAlt = b.getAttribute("alt"))), d
            },
            jr = c => {
                const d = {},
                    b = c.querySelector("swal-icon");
                return b && (ei(b, ["type", "color"]), b.hasAttribute("type") && (d.icon = b.getAttribute("type")), b.hasAttribute("color") && (d.iconColor = b.getAttribute("color")), d.iconHtml = b.innerHTML), d
            },
            qo = c => {
                const d = {},
                    b = c.querySelector("swal-input");
                b && (ei(b, ["type", "label", "placeholder", "value"]), d.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (d.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (d.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (d.inputValue = b.getAttribute("value")));
                const B = Array.from(c.querySelectorAll("swal-input-option"));
                return B.length && (d.inputOptions = {}, B.forEach(ge => {
                    ei(ge, ["value"]);
                    const He = ge.getAttribute("value"),
                        Ut = ge.innerHTML;
                    d.inputOptions[He] = Ut
                })), d
            },
            Xo = (c, d) => {
                const b = {};
                for (const B in d) {
                    const ge = d[B],
                        He = c.querySelector(ge);
                    He && (ei(He, []), b[ge.replace(/^swal-/, "")] = He.innerHTML.trim())
                }
                return b
            },
            Yo = c => {
                const d = Ji.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const B = b.tagName.toLowerCase();
                    d.indexOf(B) === -1 && h("Unrecognized element <".concat(B, ">"))
                })
            },
            ei = (c, d) => {
                Array.from(c.attributes).forEach(b => {
                    d.indexOf(b.name) === -1 && h(['Unrecognized attribute "'.concat(b.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(d.length ? "Allowed attributes are: ".concat(d.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var Ss = {
            email: (c, d) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(d || "Invalid email address"),
            url: (c, d) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(d || "Invalid URL")
        };

        function Ko(c) {
            c.inputValidator || Object.keys(Ss).forEach(d => {
                c.input === d && (c.inputValidator = Ss[d])
            })
        }

        function Jo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (h('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function ks(c) {
            Ko(c), c.showLoaderOnConfirm && !c.preConfirm && h(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Jo(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), xi(c)
        }
        class zr {
            constructor(d, b) {
                this.callback = d, this.remaining = b, this.running = !1, this.start()
            }
            start() {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
            stop() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
            }
            increase(d) {
                const b = this.running;
                return b && this.stop(), this.remaining += d, b && this.start(), this.remaining
            }
            getTimerLeft() {
                return this.running && (this.stop(), this.start()), this.remaining
            }
            isRunning() {
                return this.running
            }
        }
        const Ts = () => {
                De.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (De.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(De.previousBodyPadding + qi(), "px"))
            },
            Hr = () => {
                De.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(De.previousBodyPadding, "px"), De.previousBodyPadding = null)
            },
            As = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !xt(document.body, K.iosfix)) {
                    const d = document.body.scrollTop;
                    document.body.style.top = "".concat(d * -1, "px"), Je(document.body, K.iosfix), Ur(), Os()
                }
            },
            Os = () => {
                const c = navigator.userAgent,
                    d = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                d && b && !c.match(/CriOS/i) && we().scrollHeight > window.innerHeight - 44 && (U().style.paddingBottom = "".concat(44, "px"))
            },
            Ur = () => {
                const c = U();
                let d;
                c.ontouchstart = b => {
                    d = Qo(b)
                }, c.ontouchmove = b => {
                    d && (b.preventDefault(), b.stopPropagation())
                }
            },
            Qo = c => {
                const d = c.target,
                    b = U();
                return Zo(c) || ea(c) ? !1 : d === b || !Ve(b) && d.tagName !== "INPUT" && d.tagName !== "TEXTAREA" && !(Ve(_e()) && _e().contains(d))
            },
            Zo = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            ea = c => c.touches && c.touches.length > 1,
            Ai = () => {
                if (xt(document.body, K.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Lt(document.body, K.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            Gr = 10,
            Wr = c => {
                const d = U(),
                    b = we();
                typeof c.willOpen == "function" && c.willOpen(b);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(d, b, c), setTimeout(() => {
                    ta(d, b)
                }, Gr), Se() && (na(d, c.scrollbarPadding, ge), Ti()), !he() && !rt.previousActiveElement && (rt.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Lt(d, K["no-transition"])
            },
            Rs = c => {
                const d = we();
                if (c.target !== d) return;
                const b = U();
                d.removeEventListener(yn, Rs), b.style.overflowY = "auto"
            },
            ta = (c, d) => {
                yn && pt(d) ? (c.style.overflowY = "hidden", d.addEventListener(yn, Rs)) : c.style.overflowY = "auto"
            },
            na = (c, d, b) => {
                As(), d && b !== "hidden" && Ts(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, d, b) => {
                Je(c, b.showClass.backdrop), d.style.setProperty("opacity", "0", "important"), q(d, "grid"), setTimeout(() => {
                    Je(d, b.showClass.popup), d.style.removeProperty("opacity")
                }, Gr), Je([document.documentElement, document.body], K.shown), b.heightAuto && b.backdrop && !b.toast && Je([document.documentElement, document.body], K["height-auto"])
            },
            s = c => {
                let d = we();
                d || new At, d = we();
                const b = _();
                he() ? D(ye()) : u(d, c), q(b), d.setAttribute("data-loading", "true"), d.setAttribute("aria-busy", "true"), d.focus()
            },
            u = (c, d) => {
                const b = g(),
                    B = _();
                !d && pe(dt()) && (d = dt()), q(b), d && (D(d), B.setAttribute("data-button-to-replace", d.className)), B.parentNode.insertBefore(B, d), Je([c, b], K.loading)
            },
            p = (c, d) => {
                d.input === "select" || d.input === "radio" ? H(c, d) : ["text", "email", "number", "tel", "textarea"].includes(d.input) && ($(d.inputValue) || ie(d.inputValue)) && (s(dt()), Z(c, d))
            },
            w = (c, d) => {
                const b = c.getInput();
                if (!b) return null;
                switch (d.input) {
                    case "checkbox":
                        return x(b);
                    case "radio":
                        return T(b);
                    case "file":
                        return z(b);
                    default:
                        return d.inputAutoTrim ? b.value.trim() : b.value
                }
            },
            x = c => c.checked ? 1 : 0,
            T = c => c.checked ? c.value : null,
            z = c => c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null,
            H = (c, d) => {
                const b = we(),
                    B = ge => le[d.input](b, be(ge), d);
                $(d.inputOptions) || ie(d.inputOptions) ? (s(dt()), J(d.inputOptions).then(ge => {
                    c.hideLoading(), B(ge)
                })) : typeof d.inputOptions == "object" ? B(d.inputOptions) : m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof d.inputOptions))
            },
            Z = (c, d) => {
                const b = c.getInput();
                D(b), J(d.inputValue).then(B => {
                    b.value = d.input === "number" ? parseFloat(B) || 0 : "".concat(B), q(b), b.focus(), c.hideLoading()
                }).catch(B => {
                    m("Error in inputValue promise: ".concat(B)), b.value = "", q(b), b.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, d, b) => {
                    const B = F(c, K.select),
                        ge = (He, Ut, jn) => {
                            const mn = document.createElement("option");
                            mn.value = jn, it(mn, Ut), mn.selected = ne(jn, b.inputValue), He.appendChild(mn)
                        };
                    d.forEach(He => {
                        const Ut = He[0],
                            jn = He[1];
                        if (Array.isArray(jn)) {
                            const mn = document.createElement("optgroup");
                            mn.label = Ut, mn.disabled = !1, B.appendChild(mn), jn.forEach(ar => ge(mn, ar[1], ar[0]))
                        } else ge(B, jn, Ut)
                    }), B.focus()
                },
                radio: (c, d, b) => {
                    const B = F(c, K.radio);
                    d.forEach(He => {
                        const Ut = He[0],
                            jn = He[1],
                            mn = document.createElement("input"),
                            ar = document.createElement("label");
                        mn.type = "radio", mn.name = K.radio, mn.value = Ut, ne(Ut, b.inputValue) && (mn.checked = !0);
                        const pa = document.createElement("span");
                        it(pa, jn), pa.className = K.label, ar.appendChild(mn), ar.appendChild(pa), B.appendChild(ar)
                    });
                    const ge = B.querySelectorAll("input");
                    ge.length && ge[0].focus()
                }
            },
            be = c => {
                const d = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((b, B) => {
                    let ge = b;
                    typeof ge == "object" && (ge = be(ge)), d.push([B, ge])
                }) : Object.keys(c).forEach(b => {
                    let B = c[b];
                    typeof B == "object" && (B = be(B)), d.push([b, B])
                }), d
            },
            ne = (c, d) => d && d.toString() === c.toString();

        function ce() {
            const c = O.innerParams.get(this);
            if (!c) return;
            const d = O.domCache.get(this);
            D(d.loader), he() ? c.icon && q(ye()) : Ge(d), Lt([d.popup, d.actions], K.loading), d.popup.removeAttribute("aria-busy"), d.popup.removeAttribute("data-loading"), d.confirmButton.disabled = !1, d.denyButton.disabled = !1, d.cancelButton.disabled = !1
        }
        const Ge = c => {
            const d = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            d.length ? q(d[0], "inline-block") : Ne() && D(c.actions)
        };

        function st(c) {
            const d = O.innerParams.get(c || this),
                b = O.domCache.get(c || this);
            return b ? wt(b.popup, d.input) : null
        }
        var Fe = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => pe(we()),
            Nt = () => dt() && dt().click(),
            dn = () => Bt() && Bt().click(),
            _t = () => l() && l().click(),
            tt = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            ln = (c, d, b, B) => {
                tt(d), b.toast || (d.keydownHandler = ge => Qi(c, ge, B), d.keydownTarget = b.keydownListenerCapture ? window : we(), d.keydownListenerCapture = b.keydownListenerCapture, d.keydownTarget.addEventListener("keydown", d.keydownHandler, {
                    capture: d.keydownListenerCapture
                }), d.keydownHandlerAdded = !0)
            },
            ft = (c, d, b) => {
                const B = te();
                if (B.length) return d = d + b, d === B.length ? d = 0 : d === -1 && (d = B.length - 1), B[d].focus();
                we().focus()
            },
            Mt = ["ArrowRight", "ArrowDown"],
            Oi = ["ArrowLeft", "ArrowUp"],
            Qi = (c, d, b) => {
                const B = O.innerParams.get(c);
                !B || d.isComposing || d.keyCode === 229 || (B.stopKeydownPropagation && d.stopPropagation(), d.key === "Enter" ? fn(c, d, B) : d.key === "Tab" ? ti(d, B) : [...Mt, ...Oi].includes(d.key) ? ni(d.key) : d.key === "Escape" && cn(d, B, b))
            },
            fn = (c, d, b) => {
                if (!!M(b.allowEnterKey) && d.target && c.getInput() && d.target instanceof HTMLElement && d.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Nt(), d.preventDefault()
                }
            },
            ti = (c, d) => {
                const b = c.target,
                    B = te();
                let ge = -1;
                for (let He = 0; He < B.length; He++)
                    if (b === B[He]) {
                        ge = He;
                        break
                    } c.shiftKey ? ft(d, ge, -1) : ft(d, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            ni = c => {
                const d = dt(),
                    b = Bt(),
                    B = l();
                if (document.activeElement instanceof HTMLElement && ![d, b, B].includes(document.activeElement)) return;
                const ge = Mt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let He = document.activeElement;
                for (let Ut = 0; Ut < g().children.length; Ut++) {
                    if (He = He[ge], !He) return;
                    if (He instanceof HTMLButtonElement && pe(He)) break
                }
                He instanceof HTMLButtonElement && He.focus()
            },
            cn = (c, d, b) => {
                M(d.allowEscapeKey) && (c.preventDefault(), b(Zn.esc))
            };

        function Vn(c, d, b, B) {
            he() ? Ds(c, B) : (bi(b).then(() => Ds(c, B)), tt(rt)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (d.setAttribute("style", "display:none !important"), d.removeAttribute("class"), d.innerHTML = "") : d.remove(), Se() && (Hr(), Ai(), Fr()), wn()
        }

        function wn() {
            Lt([document.documentElement, document.body], [K.shown, K["height-auto"], K["no-backdrop"], K["toast-shown"]])
        }

        function En(c) {
            c = ri(c);
            const d = Fe.swalPromiseResolve.get(this),
                b = ii(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), d(c)) : b && d(c)
        }

        function Is() {
            return !!O.awaitingPromise.get(this)
        }
        const ii = c => {
            const d = we();
            if (!d) return !1;
            const b = O.innerParams.get(c);
            if (!b || xt(d, b.hideClass.popup)) return !1;
            Lt(d, b.showClass.popup), Je(d, b.hideClass.popup);
            const B = U();
            return Lt(B, b.showClass.backdrop), Je(B, b.hideClass.backdrop), Ms(c, d, b), !0
        };

        function qr(c) {
            const d = Fe.swalPromiseReject.get(this);
            gt(this), d && d(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (O.awaitingPromise.delete(c), O.innerParams.get(c) || c._destroy())
            },
            ri = c => typeof c > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c),
            Ms = (c, d, b) => {
                const B = U(),
                    ge = yn && pt(d);
                typeof b.willClose == "function" && b.willClose(d), ge ? Xr(c, d, B, b.returnFocus, b.didClose) : Vn(c, B, b.returnFocus, b.didClose)
            },
            Xr = (c, d, b, B, ge) => {
                rt.swalCloseEventFinishedCallback = Vn.bind(null, c, b, B, ge), d.addEventListener(yn, function(He) {
                    He.target === d && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback)
                })
            },
            Ds = (c, d) => {
                setTimeout(() => {
                    typeof d == "function" && d.bind(c.params)(), c._destroy()
                })
            };

        function Ri(c, d, b) {
            const B = O.domCache.get(c);
            d.forEach(ge => {
                B[ge].disabled = b
            })
        }

        function Ls(c, d) {
            if (!c) return !1;
            if (c.type === "radio") {
                const B = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < B.length; ge++) B[ge].disabled = d
            } else c.disabled = d
        }

        function Ps() {
            Ri(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function ia() {
            Ri(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function ra() {
            return Ls(this.getInput(), !1)
        }

        function sa() {
            return Ls(this.getInput(), !0)
        }

        function Zi(c) {
            const d = O.domCache.get(this),
                b = O.innerParams.get(this);
            it(d.validationMessage, c), d.validationMessage.className = K["validation-message"], b.customClass && b.customClass.validationMessage && Je(d.validationMessage, b.customClass.validationMessage), q(d.validationMessage);
            const B = this.getInput();
            B && (B.setAttribute("aria-invalid", !0), B.setAttribute("aria-describedby", K["validation-message"]), Ct(B), Je(B, K.inputerror))
        }

        function oa() {
            const c = O.domCache.get(this);
            c.validationMessage && D(c.validationMessage);
            const d = this.getInput();
            d && (d.removeAttribute("aria-invalid"), d.removeAttribute("aria-describedby"), Lt(d, K.inputerror))
        }

        function aa() {
            return O.domCache.get(this).progressSteps
        }

        function la(c) {
            const d = we(),
                b = O.innerParams.get(this);
            if (!d || xt(d, b.hideClass.popup)) return h("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const B = Ii(c),
                ge = Object.assign({}, b, B);
            $r(this, ge), O.innerParams.set(this, ge), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Ii = c => {
            const d = {};
            return Object.keys(c).forEach(b => {
                se(b) ? d[b] = c[b] : h("Invalid parameter to update: ".concat(b))
            }), d
        };

        function ca() {
            const c = O.domCache.get(this),
                d = O.innerParams.get(this);
            if (!d) {
                Rn(this);
                return
            }
            c.popup && rt.swalCloseEventFinishedCallback && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback), typeof d.didDestroy == "function" && d.didDestroy(), Yr(this)
        }
        const Yr = c => {
                Rn(c), delete c.params, delete rt.keydownHandler, delete rt.keydownTarget, delete rt.currentInstance
            },
            Rn = c => {
                c.isAwaitingPromise() ? (_n(O, c), O.awaitingPromise.set(c, !0)) : (_n(Fe, c), _n(O, c))
            },
            _n = (c, d) => {
                for (const b in c) c[b].delete(d)
            };
        var Kr = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: st,
            close: En,
            isAwaitingPromise: Is,
            rejectPromise: qr,
            handleAwaitingPromise: gt,
            closePopup: En,
            closeModal: En,
            closeToast: En,
            enableButtons: Ps,
            disableButtons: ia,
            enableInput: ra,
            disableInput: sa,
            showValidationMessage: Zi,
            resetValidationMessage: oa,
            getProgressSteps: aa,
            update: la,
            _destroy: ca
        });
        const Ns = c => {
                const d = O.innerParams.get(c);
                c.disableButtons(), d.input ? St(c, "confirm") : nr(c, !0)
            },
            Vs = c => {
                const d = O.innerParams.get(c);
                c.disableButtons(), d.returnInputValueOnDeny ? St(c, "deny") : pn(c, !1)
            },
            ua = (c, d) => {
                c.disableButtons(), d(Zn.cancel)
            },
            St = (c, d) => {
                const b = O.innerParams.get(c);
                if (!b.input) {
                    m('The "input" parameter is needed to be set when using returnInputValueOn'.concat(o(d)));
                    return
                }
                const B = w(c, b);
                b.inputValidator ? er(c, B, d) : c.getInput().checkValidity() ? d === "deny" ? pn(c, B) : nr(c, B) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            er = (c, d, b) => {
                const B = O.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(B.inputValidator(d, B.validationMessage))).then(He => {
                    c.enableButtons(), c.enableInput(), He ? c.showValidationMessage(He) : b === "deny" ? pn(c, d) : nr(c, d)
                })
            },
            pn = (c, d) => {
                const b = O.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s(Bt()), b.preDeny ? (O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preDeny(d, b.validationMessage))).then(ge => {
                    ge === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? d : ge
                    })
                }).catch(ge => tr(c || void 0, ge))) : c.close({
                    isDenied: !0,
                    value: d
                })
            },
            bn = (c, d) => {
                c.close({
                    isConfirmed: !0,
                    value: d
                })
            },
            tr = (c, d) => {
                c.rejectPromise(d)
            },
            nr = (c, d) => {
                const b = O.innerParams.get(c || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), O.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preConfirm(d, b.validationMessage))).then(ge => {
                    pe(Ke()) || ge === !1 ? (c.hideLoading(), gt(c)) : bn(c, typeof ge > "u" ? d : ge)
                }).catch(ge => tr(c || void 0, ge))) : bn(c, d)
            },
            ha = (c, d, b) => {
                O.innerParams.get(c).toast ? da(c, d, b) : (Jr(d), $s(d), ir(c, d, b))
            },
            da = (c, d, b) => {
                d.popup.onclick = () => {
                    const B = O.innerParams.get(c);
                    B && (Bs(B) || B.timer || B.input) || b(Zn.close)
                }
            },
            Bs = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let In = !1;
        const Jr = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(d) {
                        c.container.onmouseup = void 0, d.target === c.container && (In = !0)
                    }
                }
            },
            $s = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(d) {
                        c.popup.onmouseup = void 0, (d.target === c.popup || c.popup.contains(d.target)) && (In = !0)
                    }
                }
            },
            ir = (c, d, b) => {
                d.container.onclick = B => {
                    const ge = O.innerParams.get(c);
                    if (In) {
                        In = !1;
                        return
                    }
                    B.target === d.container && M(ge.allowOutsideClick) && b(Zn.backdrop)
                }
            },
            rr = c => typeof c == "object" && c.jquery,
            sr = c => c instanceof Element || rr(c),
            fa = c => {
                const d = {};
                return typeof c[0] == "object" && !sr(c[0]) ? Object.assign(d, c[0]) : ["title", "html", "icon"].forEach((b, B) => {
                    const ge = c[B];
                    typeof ge == "string" || sr(ge) ? d[b] = ge : ge !== void 0 && m("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), d
            };

        function or() {
            const c = this;
            for (var d = arguments.length, b = new Array(d), B = 0; B < d; B++) b[B] = arguments[B];
            return new c(...b)
        }

        function Qr(c) {
            class d extends this {
                _main(B, ge) {
                    return super._main(B, Object.assign({}, c, ge))
                }
            }
            return d
        }
        const Zr = () => rt.timeout && rt.timeout.getTimerLeft(),
            Fs = () => {
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
                return c && (c.running ? Fs() : I())
            },
            X = c => {
                if (rt.timeout) {
                    const d = rt.timeout.increase(c);
                    return Ft(d, !0), d
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
            for (let d = c.target; d && d !== document; d = d.parentNode)
                for (const b in me) {
                    const B = d.getAttribute(b);
                    if (B) {
                        me[b].fire({
                            template: B
                        });
                        return
                    }
                }
        };
        var Le = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: ve,
            argsToParams: fa,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: dn,
            clickCancel: _t,
            getContainer: U,
            getPopup: we,
            getTitle: ue,
            getHtmlContainer: _e,
            getImage: ke,
            getIcon: ye,
            getInputLabel: Gt,
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
            isLoading: Ie,
            fire: or,
            mixin: Qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Zr,
            stopTimer: Fs,
            resumeTimer: I,
            toggleTimer: j,
            increaseTimer: X,
            isTimerRunning: de,
            bindClickHandler: xe
        });
        let ze;
        class Ue {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var d = arguments.length, b = new Array(d), B = 0; B < d; B++) b[B] = arguments[B];
                const ge = Object.freeze(this.constructor.argsToParams(b));
                Object.defineProperties(this, {
                    params: {
                        value: ge,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const He = ze._main(ze.params);
                O.promise.set(this, He)
            }
            _main(d) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, b, d)), rt.currentInstance && (rt.currentInstance._destroy(), Se() && Fr()), rt.currentInstance = ze;
                const B = ht(d, b);
                ks(B), Object.freeze(B), rt.timeout && (rt.timeout.stop(), delete rt.timeout), clearTimeout(rt.restoreFocusTimeout);
                const ge = Tt(ze);
                return $r(ze, B), O.innerParams.set(ze, B), Xe(ze, ge, B)
            }
            then(d) {
                return O.promise.get(this).then(d)
            } finally(d) {
                return O.promise.get(this).finally(d)
            }
        }
        const Xe = (c, d, b) => new Promise((B, ge) => {
                const He = Ut => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ut
                    })
                };
                Fe.swalPromiseResolve.set(c, B), Fe.swalPromiseReject.set(c, ge), d.confirmButton.onclick = () => Ns(c), d.denyButton.onclick = () => Vs(c), d.cancelButton.onclick = () => ua(c, He), d.closeButton.onclick = () => He(Zn.close), ha(c, d, He), ln(c, rt, b, He), p(c, b), Wr(b), qe(rt, b, He), Ht(d, b), setTimeout(() => {
                    d.container.scrollTop = 0
                })
            }),
            ht = (c, d) => {
                const b = Uo(c),
                    B = Object.assign({}, re, d, b, c);
                return B.showClass = Object.assign({}, re.showClass, B.showClass), B.hideClass = Object.assign({}, re.hideClass, B.hideClass), B
            },
            Tt = c => {
                const d = {
                    popup: we(),
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
                return O.domCache.set(c, d), d
            },
            qe = (c, d, b) => {
                const B = R();
                D(B), d.timer && (c.timeout = new zr(() => {
                    b("timer"), delete c.timeout
                }, d.timer), d.timerProgressBar && (q(B), lt(B, d, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(d.timer)
                })))
            },
            Ht = (c, d) => {
                if (!d.toast) {
                    if (!M(d.allowEnterKey)) return gn();
                    Zt(c, d) || ft(d, -1, 1)
                }
            },
            Zt = (c, d) => d.focusDeny && pe(c.denyButton) ? (c.denyButton.focus(), !0) : d.focusCancel && pe(c.cancelButton) ? (c.cancelButton.focus(), !0) : d.focusConfirm && pe(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
            gn = () => {
                document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
            };
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
            const c = document.createElement("div");
            c.className = "leave-russia-now-and-apply-your-skills-to-the-world";
            const d = Y([{
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
        `.concat(d.text, `
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/`).concat(d.id, `" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
        \u041D\u0435\u0442 \u0432\u043E\u0439\u043D\u0435!
      </div>
      `));
            const b = document.createElement("button");
            b.innerHTML = "&times;", b.onclick = () => c.remove(), c.appendChild(b), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(c)
                }, 1e3)
            })
        }
        Object.assign(Ue.prototype, Kr), Object.assign(Ue, Le), Object.keys(Kr).forEach(c => {
            Ue[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ue.DismissReason = Zn, Ue.version = "11.4.26";
        const At = Ue;
        return At.default = At, At
    }), typeof yt < "u" && yt.Sweetalert2 && (yt.swal = yt.sweetAlert = yt.Swal = yt.SweetAlert = yt.Sweetalert2), typeof document < "u" && function(n, i) {
        var o = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = i);
        else try {
            o.innerHTML = i
        } catch {
            o.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(Eh);
const Dn = Eh.exports;
class Ot {
    static get DismissReason() {
        return Dn.DismissReason
    }
    static show(e, n = {}) {
        switch (Dn.isVisible() && Dn.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
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
        Dn.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", Dn.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp6/triviadeath2/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), Dn.fire(e)
    }
    static async showCustom(e) {
        return Dn.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", Dn.fire(e)
    }
}
const YC = `<div class="canvasContainer">\r
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
    KC = {
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
                i = Jt().width,
                o = Jt().height,
                h = Math.max(i / e, o / n);
            this.width = i, this.height = o, this.finalWidth = e * h, this.finalHeight = n * h, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (o - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = Hi();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Jt().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Jt().width, Jt().height))
        }
    },
    JC = mt.View.extend({
        template: Ze.template(YC),
        className: "CameraUser",
        model: new ut.Model({
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
            Do("cameraCanvas"), t.sprites = [], t.gameLoop = Po({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = Gn(KC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                const o = i.getContext("2d");
                this.previewImage && o.drawImage(this.previewImage, 0, 0, i.width, i.height), this.model.set("transmitting", !0);
                const h = i.toDataURL().split(",")[1];
                e.push({
                    size: n,
                    picture: h
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
                i = Me(".canvasContainer");
            if (!n || !i) return;
            const o = i.width(),
                h = Math.max(Me(window).innerHeight(), 250),
                m = Math.min(o / t, h / e),
                E = t * m,
                k = e * m;
            n.style.width = `${E}px`, n.style.height = `${k}px`, n.width = E, n.height = k
        }
    }),
    An = ut.Model.extend({
        defaults: {},
        set(t, e) {
            const n = Ze.extend({}, this.attributes, this.defaults, t);
            return ut.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = Ze.extend({}, this.defaults, this.attributes, t);
            return ut.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    QC = An.extend({
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
    ZC = mt.View.extend({
        template: Ze.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new QC,
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
            this.cameraView = this.cameraView || new JC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    ex = '<a class="change-color button-color btn"></a>',
    tx = mt.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: Ze.template(ex),
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
    nx = mt.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: tx,
        collection: new ut.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    ix = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp6/triviadeath2/assets/5f12600b.png"/></svg>\r
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
    rx = mt.View.extend({
        tagName: "div",
        className: "picker",
        template: Ze.template(ix),
        model: new ut.Model({}),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new nx({
                collection: new ut.Collection
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
class _h {
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
            return typeof o == "string" ? o = i.points.split("|").map(h => ({
                x: parseInt(h.split(",")[0], 10),
                y: parseInt(h.split(",")[1], 10)
            })) : o = o.map(h => ({
                x: parseInt(h.x, 10),
                y: parseInt(h.y, 10)
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
            h = i - this.lastMouse.y;
        o * this.lastMouseChangeVector.x + h * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (n - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
        const m = this.smoothedMouseX - this.lastSmoothedMouse.x,
            E = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(m * m + E * E);
        let A;
        k !== 0 ? A = Math.PI / 2 + Math.atan2(E, m) : A = 0;
        const M = this.options.minThickness * e + this.options.thicknessFactor * k,
            $ = this.lastThickness + this.options.thicknessSmoothingFactor * (M - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = A);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(A),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(A),
            Y = Math.sin(A),
            re = Math.cos(A),
            v = this.lastThickness * J,
            P = this.lastThickness * ie,
            W = $ * Y,
            ae = $ * re,
            se = .33 * k * J,
            ve = -.33 * k * ie,
            f = this.lastSmoothedMouse.x + P + se,
            Ee = this.lastSmoothedMouse.y + v + ve,
            Ae = this.lastSmoothedMouse.x - P + se,
            Pe = this.lastSmoothedMouse.y - v + ve;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(f, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + W), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.canvasCTX.quadraticCurveTo(Ae, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const at = this.options.tipTaperFactor * $;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, at, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + W), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = A, this.lastThickness = $, this.lastMouseChangeVector = {
            x: o,
            y: h
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
const Dc = {
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
class sx {
    constructor(e, n = {}) {
        ot(this, "canvasSelector");
        ot(this, "canvas");
        ot(this, "ctx");
        ot(this, "options");
        ot(this, "history");
        ot(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Me(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(Dc, n), this.history = [], this.layerNames.forEach(i => {
            const o = new _h(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
        const n = Object.assign(Dc.sketchOptions, e);
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
            h = this.canvas.height * e;
        i.width = o, i.height = h;
        const m = i.getContext("2d");
        return n && (m.fillStyle = n, m.fillRect(0, 0, o, h)), m.drawImage(this.highlighterSketch.canvas, 0, 0, o, h), m.drawImage(this.markerSketch.canvas, 0, 0, o, h), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const ox = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    ax = mt.View.extend({
        className: "Sketchpad canvasContainer",
        template: Ze.template(ox),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new sx(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = Me(n)[0].width / Me(n).width(),
                o = n.getBoundingClientRect(),
                h = this.model.get("size"),
                m = this.sketchpad.options.thickness;
            let E = (e.clientX - o.left) * i;
            E = Math.min(h.width - m, Math.max(m, E));
            let k = (e.clientY - o.top) * i;
            return k = Math.min(h.height - m, Math.max(m, k)), {
                x: E,
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
    lx = `<div class="controller-content">\r
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
    cx = An.extend({
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
    ux = mt.View.extend({
        className: "Draw",
        template: Ze.template(lx),
        model: new cx,
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
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new zi({}), this.toolbarComponent = this.toolbarComponent || new rx({
                model: new ut.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new ax({
                model: new ut.Model
            }), this.buttonsCollection = this.buttonsCollection || new ut.Collection([]), this.buttonsComponent = this.buttonsComponent || new li({
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
            const t = Me("#sketchpad"),
                e = Me("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(Me(".controller-content").css("border-top-width"), 10) * 2 + Me(".playerTopBar").innerHeight() + Me("#prompt").innerHeight() + Me("#toolbar").innerHeight() + parseInt(Me(".canvasContainer").css("border-top-width"), 10) * 2 + Me("#buttons").innerHeight() + Me("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(Me(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(Me(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(Me(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                o = e.width,
                h = e.height,
                m = 2,
                E = Math.min(t.width() - i, o * m),
                k = Math.max(Me("#controller-container").innerHeight() - n, 250),
                A = Math.min(E / o, k / h),
                M = o * A,
                $ = h * A;
            e.style.width = `${M}px`, e.style.height = `${$}px`, window.scrollTo(0, 0)
        }
    }),
    hx = `<div>
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
    dx = An.extend({
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
    fx = mt.View.extend({
        className: "EnterSingleText scrollable",
        template: Ze.template(hx),
        model: new dx,
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
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : ""
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new zi({
                model: new ut.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new fo({
                model: new ut.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new ut.Collection([{
                text: "submit"
            }]), this.buttonsComponent = this.buttonsComponent || new li({
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
    model: new ut.Model({}),
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
        const o = new _h(t, e, n);
        o.setLines(i), this.model.set("src", o.canvas.toDataURL("image/png"))
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
        this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new ut.Model({});
        const e = this.client.parseEntities();
        this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
            this.update().catch(this.caughtError)
        }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
    },
    render() {
        this.model.set("username", sn.safeText(this.client.name), {
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
        !n && e.indexOf("_") !== -1 && (n = t.state.split("_")[1]), n === "PostGame" || e === "Credits" || e === "GameOver" || e === "PostGame" || e === "DayEnd" || t.gameResults ? ai.isInitialized ? ai.show() : ai.init(this.getOption("appTag")).then(() => {
            ai.show()
        }) : ai.hide(), t.platformId && tn.setTag(`platform-${t.platformId}`)
    },
    async update() {
        return null
    },
    caughtError(t) {
        throw t
    },
    onAttach() {
        this.update().catch(this.caughtError), Me(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
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
        Fi.setAsViewed(0)
    },
    showScreen(t, e) {
        const n = Me(t);
        return this.activeScreen && t === this.activeScreen || (this.activeScreen && (Me(this.activeScreen).fadeOut("fast", () => {}), Me(this.activeScreen).show(), Me(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
            e && e()
        }), this.activeScreen = t, this.onResize()), !1
    },
    notify() {
        Ot.vibrate()
    },
    onRoomWasDestroyed() {
        tn.remove("roomCode"), tn.remove("reconnect"), Ot.show("error", {
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
        const t = Me("#player").outerHeight(!0) || 0,
            e = ai.isVisible ? Me("#slide-in-banner").outerHeight(!0) : 0,
            n = Me(window).width(),
            i = Me(window).height() - t;
        Me(`.${this.getOption("appTag")}-page`).css("height", i - e), Me(`.${this.getOption("appTag")}-page`).attr("height", i - e), Me(`.${this.getOption("appTag")}-page`).css("top", t), Me(`.${this.getOption("appTag")}-page`).css("width", n), Me(`.${this.getOption("appTag")}-page`).attr("width", n)
    }
});
const px = `<div id="controller" class="state-controller controller-content">
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
    gx = An.extend({
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
    mx = mt.View.extend({
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
    vx = mt.View.extend({
        className: "Lobby scrollable",
        template: Ze.template(px),
        model: new gx,
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
            this.titleComponent = new zi({
                model: new ut.Model({})
            }), this.choicesListView = this.choicesListView || new li, this.charactersListView = new mt.CollectionView({
                childView: mx,
                className: "charactersList",
                collection: new ut.Collection
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
                        i = this.model.get("history").find(h => n === (h.remoteContentId || h.localContentId)),
                        o = i && i.metadata ? sn.htmlUnescape(i.metadata.title) : null;
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
            }), Fi.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = Me(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const o = await Ot.show("custom", {
                            input: "text",
                            title: this.getOption("strings").prompt_entername,
                            customClass: {
                                input: "playerName"
                            },
                            inputAttributes: {
                                maxlength: 12
                            },
                            inputValidator: h => h ? h.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
                        });
                        if (o.dismiss) return;
                        this.triggerMethod("client:message", {
                            name: o.value
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
                            const o = new li({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new ut.Collection
                                }),
                                h = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(m => ({
                                    action: "censorConfirm",
                                    html: m.name,
                                    key: m.id
                                }))];
                            o.collection.set(h), o.render(), e.listenTo(o, "childview:button:censorConfirm", e.censorPlayer)
                        }
                    });
                    else if (i === "ugc-unload") this.triggerMethod("client:message", {
                clearContentId: !0
            });
            else if (i === "ugc-report") {
                const o = "http://support.jackboxgames.com/",
                    h = this.model.get("formattedActiveContentId");
                window.open(`${o}?episodeID=${h}`, "_blank")
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
                    const o = new li({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new ut.Collection([])
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
                    }), o.collection.add(e.model.get("history").map(h => ({
                        action: "activateContentId",
                        html: h.remoteContentId ? `${h.metadata.title}<br/>${h.formattedRemoteContentId}` : `${h.metadata.title}`,
                        key: h.remoteContentId || h.localContentId
                    })))), o.render(), Me(".lobbyUgcInput").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), e.listenTo(o, "childview:button:activateContentId", e.activateContentId), e.listenTo(o, "childview:button:back", () => {
                        Ot.close()
                    }), e.listenTo(o, "childview:input:submit", e.activateContentIdFromInput)
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
    yx = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    wx = An.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    bx = mt.View.extend({
        className: "Logo",
        template: Ze.template(yx),
        model: new wx,
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : Me("<div />").text(t.text).html()
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
            }), Fi.setAsViewed(0)
        }
    }),
    Xs = {
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
    Cx = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    xx = mt.View.extend({
        className: "playerTopBarView",
        template: Ze.template(Cx),
        model: new ut.Model,
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
    Ex = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    _x = An.extend({
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
    Za = mt.View.extend({
        className: "MakeSingleChoice scrollable",
        template: Ze.template(Ex),
        model: new _x,
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
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new zi({
                model: new ut.Model
            }), this.choicesList = this.choicesList || new li({
                action: "choose",
                collection: new ut.Collection
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
            switch (this.choicesList.children.forEach(o => {
                    o.model.set("disabled", i === "single"), o.model.set("active", !1)
                }), i) {
                case "multiple":
                    if (this.model.get("toggle") ? t.set("selected", !t.get("selected")) : t.set("selected", !0), this.model.get("isAudience")) {
                        const o = [];
                        this.choicesList.children.forEach(h => {
                            h.model.get("selected") && o.push(h.getOption("index"))
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
                const h = this.choicesList.children.find(m => m.model.get("index") === o);
                return h ? h.model.get("html") || h.model.get("text") : ""
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
                if (this.model.get("censorDialog") === "warning") return Dn.close(), Dn.fire({
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
function Lc(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(o) {
            return Object.getOwnPropertyDescriptor(t, o).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function qn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Lc(Object(n), !0).forEach(function(i) {
            Sx(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function to(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? to = function(e) {
        return typeof e
    } : to = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, to(t)
}

function Sx(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function ui() {
    return ui = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, ui.apply(this, arguments)
}

function kx(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        o, h;
    for (h = 0; h < i.length; h++) o = i[h], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n
}

function Tx(t, e) {
    if (t == null) return {};
    var n = kx(t, e),
        i, o;
    if (Object.getOwnPropertySymbols) {
        var h = Object.getOwnPropertySymbols(t);
        for (o = 0; o < h.length; o++) i = h[o], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var Ax = "1.15.0";

function ci(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var hi = ci(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    bs = ci(/Edge/i),
    Pc = ci(/firefox/i),
    ds = ci(/safari/i) && !ci(/chrome/i) && !ci(/android/i),
    Sh = ci(/iP(ad|od|hone)/i),
    kh = ci(/chrome/i) && ci(/android/i),
    Th = {
        capture: !1,
        passive: !1
    };

function Et(t, e, n) {
    t.addEventListener(e, n, !hi && Th)
}

function bt(t, e, n) {
    t.removeEventListener(e, n, !hi && Th)
}

function yo(t, e) {
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

function Ox(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function Hn(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && yo(t, e) : yo(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = Ox(t))
    }
    return null
}
var Nc = /\s+/g;

function Sn(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(Nc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(Nc, " ")
        }
}

function nt(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function br(t, e) {
    var n = "";
    if (typeof t == "string") n = t;
    else
        do {
            var i = nt(t, "transform");
            i && i !== "none" && (n = i + " " + n)
        } while (!e && (t = t.parentNode));
    var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return o && new o(n)
}

function Ah(t, e, n) {
    if (t) {
        var i = t.getElementsByTagName(e),
            o = 0,
            h = i.length;
        if (n)
            for (; o < h; o++) n(i[o], o);
        return i
    }
    return []
}

function Wn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Kt(t, e, n, i, o) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var h, m, E, k, A, M, $;
        if (t !== window && t.parentNode && t !== Wn() ? (h = t.getBoundingClientRect(), m = h.top, E = h.left, k = h.bottom, A = h.right, M = h.height, $ = h.width) : (m = 0, E = 0, k = window.innerHeight, A = window.innerWidth, M = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (o = o || t.parentNode, !hi))
            do
                if (o && o.getBoundingClientRect && (nt(o, "transform") !== "none" || n && nt(o, "position") !== "static")) {
                    var J = o.getBoundingClientRect();
                    m -= J.top + parseInt(nt(o, "border-top-width")), E -= J.left + parseInt(nt(o, "border-left-width")), k = m + h.height, A = E + h.width;
                    break
                } while (o = o.parentNode);
        if (i && t !== window) {
            var ie = br(o || t),
                Y = ie && ie.a,
                re = ie && ie.d;
            ie && (m /= re, E /= Y, $ /= Y, M /= re, k = m + M, A = E + $)
        }
        return {
            top: m,
            left: E,
            bottom: k,
            right: A,
            width: $,
            height: M
        }
    }
}

function Vc(t, e, n) {
    for (var i = vi(t, !0), o = Kt(t)[e]; i;) {
        var h = Kt(i)[n],
            m = void 0;
        if (n === "top" || n === "left" ? m = o >= h : m = o <= h, !m) return i;
        if (i === Wn()) break;
        i = vi(i, !1)
    }
    return !1
}

function _r(t, e, n, i) {
    for (var o = 0, h = 0, m = t.children; h < m.length;) {
        if (m[h].style.display !== "none" && m[h] !== Qe.ghost && (i || m[h] !== Qe.dragged) && Hn(m[h], n.draggable, t, !1)) {
            if (o === e) return m[h];
            o++
        }
        h++
    }
    return null
}

function Dl(t, e) {
    for (var n = t.lastElementChild; n && (n === Qe.ghost || nt(n, "display") === "none" || e && !yo(n, e));) n = n.previousElementSibling;
    return n || null
}

function Mn(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Qe.clone && (!e || yo(t, e)) && n++;
    return n
}

function Bc(t) {
    var e = 0,
        n = 0,
        i = Wn();
    if (t)
        do {
            var o = br(t),
                h = o.a,
                m = o.d;
            e += t.scrollLeft * h, n += t.scrollTop * m
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function Rx(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function vi(t, e) {
    if (!t || !t.getBoundingClientRect) return Wn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var o = nt(n);
            if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return Wn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return Wn()
}

function Ix(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function Ra(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var fs;

function Oh(t, e) {
    return function() {
        if (!fs) {
            var n = arguments,
                i = this;
            n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), fs = setTimeout(function() {
                fs = void 0
            }, e)
        }
    }
}

function Mx() {
    clearTimeout(fs), fs = void 0
}

function Rh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function Ih(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var Tn = "Sortable" + new Date().getTime();

function Dx() {
    var t = [],
        e;
    return {
        captureAnimationState: function() {
            if (t = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(o) {
                    if (!(nt(o, "display") === "none" || o === Qe.ghost)) {
                        t.push({
                            target: o,
                            rect: Kt(o)
                        });
                        var h = qn({}, t[t.length - 1].rect);
                        if (o.thisAnimationDuration) {
                            var m = br(o, !0);
                            m && (h.top -= m.f, h.left -= m.e)
                        }
                        o.fromRect = h
                    }
                })
            }
        },
        addAnimationState: function(i) {
            t.push(i)
        },
        removeAnimationState: function(i) {
            t.splice(Rx(t, {
                target: i
            }), 1)
        },
        animateAll: function(i) {
            var o = this;
            if (!this.options.animation) {
                clearTimeout(e), typeof i == "function" && i();
                return
            }
            var h = !1,
                m = 0;
            t.forEach(function(E) {
                var k = 0,
                    A = E.target,
                    M = A.fromRect,
                    $ = Kt(A),
                    J = A.prevFromRect,
                    ie = A.prevToRect,
                    Y = E.rect,
                    re = br(A, !0);
                re && ($.top -= re.f, $.left -= re.e), A.toRect = $, A.thisAnimationDuration && Ra(J, $) && !Ra(M, $) && (Y.top - $.top) / (Y.left - $.left) === (M.top - $.top) / (M.left - $.left) && (k = Px(Y, J, ie, o.options)), Ra($, M) || (A.prevFromRect = M, A.prevToRect = $, k || (k = o.options.animation), o.animate(A, Y, $, k)), k && (h = !0, m = Math.max(m, k), clearTimeout(A.animationResetTimer), A.animationResetTimer = setTimeout(function() {
                    A.animationTime = 0, A.prevFromRect = null, A.fromRect = null, A.prevToRect = null, A.thisAnimationDuration = null
                }, k), A.thisAnimationDuration = k)
            }), clearTimeout(e), h ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, m) : typeof i == "function" && i(), t = []
        },
        animate: function(i, o, h, m) {
            if (m) {
                nt(i, "transition", ""), nt(i, "transform", "");
                var E = br(this.el),
                    k = E && E.a,
                    A = E && E.d,
                    M = (o.left - h.left) / (k || 1),
                    $ = (o.top - h.top) / (A || 1);
                i.animatingX = !!M, i.animatingY = !!$, nt(i, "transform", "translate3d(" + M + "px," + $ + "px,0)"), this.forRepaintDummy = Lx(i), nt(i, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), nt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    nt(i, "transition", ""), nt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, m)
            }
        }
    }
}

function Lx(t) {
    return t.offsetWidth
}

function Px(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var ur = [],
    Ia = {
        initializeByDefault: !0
    },
    Cs = {
        mount: function(e) {
            for (var n in Ia) Ia.hasOwnProperty(n) && !(n in e) && (e[n] = Ia[n]);
            ur.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), ur.push(e)
        },
        pluginEvent: function(e, n, i) {
            var o = this;
            this.eventCanceled = !1, i.cancel = function() {
                o.eventCanceled = !0
            };
            var h = e + "Global";
            ur.forEach(function(m) {
                !n[m.pluginName] || (n[m.pluginName][h] && n[m.pluginName][h](qn({
                    sortable: n
                }, i)), n.options[m.pluginName] && n[m.pluginName][e] && n[m.pluginName][e](qn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, o) {
            ur.forEach(function(E) {
                var k = E.pluginName;
                if (!(!e.options[k] && !E.initializeByDefault)) {
                    var A = new E(e, n, e.options);
                    A.sortable = e, A.options = e.options, e[k] = A, ui(i, A.defaults)
                }
            });
            for (var h in e.options)
                if (!!e.options.hasOwnProperty(h)) {
                    var m = this.modifyOption(e, h, e.options[h]);
                    typeof m < "u" && (e.options[h] = m)
                }
        },
        getEventProperties: function(e, n) {
            var i = {};
            return ur.forEach(function(o) {
                typeof o.eventProperties == "function" && ui(i, o.eventProperties.call(n[o.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var o;
            return ur.forEach(function(h) {
                !e[h.pluginName] || h.optionListeners && typeof h.optionListeners[n] == "function" && (o = h.optionListeners[n].call(e[h.pluginName], i))
            }), o
        }
    };

function Nx(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        o = t.targetEl,
        h = t.cloneEl,
        m = t.toEl,
        E = t.fromEl,
        k = t.oldIndex,
        A = t.newIndex,
        M = t.oldDraggableIndex,
        $ = t.newDraggableIndex,
        J = t.originalEvent,
        ie = t.putSortable,
        Y = t.extraEventProperties;
    if (e = e || n && n[Tn], !!e) {
        var re, v = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !hi && !bs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = m || n, re.from = E || n, re.item = o || n, re.clone = h, re.oldIndex = k, re.newIndex = A, re.oldDraggableIndex = M, re.newDraggableIndex = $, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var W = qn(qn({}, Y), Cs.getEventProperties(i, e));
        for (var ae in W) re[ae] = W[ae];
        n && n.dispatchEvent(re), v[P] && v[P].call(e, re)
    }
}
var Vx = ["evt"],
    Cn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = i.evt,
            h = Tx(i, Vx);
        Cs.pluginEvent.bind(Qe)(e, n, qn({
            dragEl: Re,
            parentEl: $t,
            ghostEl: ct,
            rootEl: Pt,
            nextEl: Ni,
            lastDownEl: no,
            cloneEl: Vt,
            cloneHidden: gi,
            dragStarted: ss,
            putSortable: nn,
            activeSortable: Qe.active,
            originalEvent: o,
            oldIndex: gr,
            oldDraggableIndex: ps,
            newIndex: kn,
            newDraggableIndex: pi,
            hideGhostForTarget: Ph,
            unhideGhostForTarget: Nh,
            cloneNowHidden: function() {
                gi = !0
            },
            cloneNowShown: function() {
                gi = !1
            },
            dispatchSortableEvent: function(E) {
                vn({
                    sortable: n,
                    name: E,
                    originalEvent: o
                })
            }
        }, h))
    };

function vn(t) {
    Nx(qn({
        putSortable: nn,
        cloneEl: Vt,
        targetEl: Re,
        rootEl: Pt,
        oldIndex: gr,
        oldDraggableIndex: ps,
        newIndex: kn,
        newDraggableIndex: pi
    }, t))
}
var Re, $t, ct, Pt, Ni, no, Vt, gi, gr, kn, ps, pi, Ys, nn, pr = !1,
    wo = !1,
    bo = [],
    Di, Bn, Ma, Da, $c, Fc, ss, hr, gs, ms = !1,
    Ks = !1,
    io, un, La = [],
    el = !1,
    Co = [],
    Vo = typeof document < "u",
    Js = Sh,
    jc = bs || hi ? "cssFloat" : "float",
    Bx = Vo && !kh && !Sh && "draggable" in document.createElement("div"),
    Mh = function() {
        if (!!Vo) {
            if (hi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    Dh = function(e, n) {
        var i = nt(e),
            o = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            h = _r(e, 0, n),
            m = _r(e, 1, n),
            E = h && nt(h),
            k = m && nt(m),
            A = E && parseInt(E.marginLeft) + parseInt(E.marginRight) + Kt(h).width,
            M = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Kt(m).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (h && E.float && E.float !== "none") {
            var $ = E.float === "left" ? "left" : "right";
            return m && (k.clear === "both" || k.clear === $) ? "vertical" : "horizontal"
        }
        return h && (E.display === "block" || E.display === "flex" || E.display === "table" || E.display === "grid" || A >= o && i[jc] === "none" || m && i[jc] === "none" && A + M > o) ? "vertical" : "horizontal"
    },
    $x = function(e, n, i) {
        var o = i ? e.left : e.top,
            h = i ? e.right : e.bottom,
            m = i ? e.width : e.height,
            E = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            A = i ? n.width : n.height;
        return o === E || h === k || o + m / 2 === E + A / 2
    },
    Fx = function(e, n) {
        var i;
        return bo.some(function(o) {
            var h = o[Tn].options.emptyInsertThreshold;
            if (!(!h || Dl(o))) {
                var m = Kt(o),
                    E = e >= m.left - h && e <= m.right + h,
                    k = n >= m.top - h && n <= m.bottom + h;
                if (E && k) return i = o
            }
        }), i
    },
    Lh = function(e) {
        function n(h, m) {
            return function(E, k, A, M) {
                var $ = E.options.group.name && k.options.group.name && E.options.group.name === k.options.group.name;
                if (h == null && (m || $)) return !0;
                if (h == null || h === !1) return !1;
                if (m && h === "clone") return h;
                if (typeof h == "function") return n(h(E, k, A, M), m)(E, k, A, M);
                var J = (m ? E : k).options.group.name;
                return h === !0 || typeof h == "string" && h === J || h.join && h.indexOf(J) > -1
            }
        }
        var i = {},
            o = e.group;
        (!o || to(o) != "object") && (o = {
            name: o
        }), i.name = o.name, i.checkPull = n(o.pull, !0), i.checkPut = n(o.put), i.revertClone = o.revertClone, e.group = i
    },
    Ph = function() {
        !Mh && ct && nt(ct, "display", "none")
    },
    Nh = function() {
        !Mh && ct && nt(ct, "display", "")
    };
Vo && !kh && document.addEventListener("click", function(t) {
    if (wo) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), wo = !1, !1
}, !0);
var Li = function(e) {
        if (Re) {
            e = e.touches ? e.touches[0] : e;
            var n = Fx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Tn]._onDragOver(i)
            }
        }
    },
    jx = function(e) {
        Re && Re.parentNode[Tn]._isOutsideThisEl(e.target)
    };

function Qe(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = ui({}, e), t[Tn] = this;
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
            return Dh(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(m, E) {
            m.setData("Text", E.textContent)
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
        supportPointer: Qe.supportPointer !== !1 && "PointerEvent" in window && !ds,
        emptyInsertThreshold: 5
    };
    Cs.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    Lh(e);
    for (var o in this) o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : Bx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Et(t, "pointerdown", this._onTapStart) : (Et(t, "mousedown", this._onTapStart), Et(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Et(t, "dragover", this), Et(t, "dragenter", this)), bo.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ui(this, Dx())
}
Qe.prototype = {
    constructor: Qe,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (hr = null)
    },
    _getDirection: function(e, n) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Re) : this.options.direction
    },
    _onTapStart: function(e) {
        if (!!e.cancelable) {
            var n = this,
                i = this.el,
                o = this.options,
                h = o.preventOnFilter,
                m = e.type,
                E = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (E || e).target,
                A = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                M = o.filter;
            if (Yx(i), !Re && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || o.disabled) && !A.isContentEditable && !(!this.nativeDraggable && ds && k && k.tagName.toUpperCase() === "SELECT") && (k = Hn(k, o.draggable, i, !1), !(k && k.animated) && no !== k)) {
                if (gr = Mn(k), ps = Mn(k, o.draggable), typeof M == "function") {
                    if (M.call(this, e, k, this)) {
                        vn({
                            sortable: n,
                            rootEl: A,
                            name: "filter",
                            targetEl: k,
                            toEl: i,
                            fromEl: i
                        }), Cn("filter", n, {
                            evt: e
                        }), h && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (M && (M = M.split(",").some(function($) {
                        if ($ = Hn(A, $.trim(), i, !1), $) return vn({
                            sortable: n,
                            rootEl: $,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), Cn("filter", n, {
                            evt: e
                        }), !0
                    }), M)) {
                    h && e.cancelable && e.preventDefault();
                    return
                }
                o.handle && !Hn(A, o.handle, i, !1) || this._prepareDragStart(e, E, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var o = this,
            h = o.el,
            m = o.options,
            E = h.ownerDocument,
            k;
        if (i && !Re && i.parentNode === h) {
            var A = Kt(i);
            if (Pt = h, Re = i, $t = Re.parentNode, Ni = Re.nextSibling, no = i, Ys = m.group, Qe.dragged = Re, Di = {
                    target: Re,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, $c = Di.clientX - A.left, Fc = Di.clientY - A.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Re.style["will-change"] = "all", k = function() {
                    if (Cn("delayEnded", o, {
                            evt: e
                        }), Qe.eventCanceled) {
                        o._onDrop();
                        return
                    }
                    o._disableDelayedDragEvents(), !Pc && o.nativeDraggable && (Re.draggable = !0), o._triggerDragStart(e, n), vn({
                        sortable: o,
                        name: "choose",
                        originalEvent: e
                    }), Sn(Re, m.chosenClass, !0)
                }, m.ignore.split(",").forEach(function(M) {
                    Ah(Re, M.trim(), Pa)
                }), Et(E, "dragover", Li), Et(E, "mousemove", Li), Et(E, "touchmove", Li), Et(E, "mouseup", o._onDrop), Et(E, "touchend", o._onDrop), Et(E, "touchcancel", o._onDrop), Pc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Re.draggable = !0), Cn("delayStart", this, {
                    evt: e
                }), m.delay && (!m.delayOnTouchOnly || n) && (!this.nativeDraggable || !(bs || hi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                Et(E, "mouseup", o._disableDelayedDrag), Et(E, "touchend", o._disableDelayedDrag), Et(E, "touchcancel", o._disableDelayedDrag), Et(E, "mousemove", o._delayedDragTouchMoveHandler), Et(E, "touchmove", o._delayedDragTouchMoveHandler), m.supportPointer && Et(E, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(k, m.delay)
            } else k()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Re && Pa(Re), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._disableDelayedDrag), bt(e, "touchend", this._disableDelayedDrag), bt(e, "touchcancel", this._disableDelayedDrag), bt(e, "mousemove", this._delayedDragTouchMoveHandler), bt(e, "touchmove", this._delayedDragTouchMoveHandler), bt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Et(document, "pointermove", this._onTouchMove) : n ? Et(document, "touchmove", this._onTouchMove) : Et(document, "mousemove", this._onTouchMove) : (Et(Re, "dragend", this), Et(Pt, "dragstart", this._onDragStart));
        try {
            document.selection ? ro(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (pr = !1, Pt && Re) {
            Cn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && Et(document, "dragover", jx);
            var i = this.options;
            !e && Sn(Re, i.dragClass, !1), Sn(Re, i.ghostClass, !0), Qe.active = this, e && this._appendGhost(), vn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Bn) {
            this._lastX = Bn.clientX, this._lastY = Bn.clientY, Ph();
            for (var e = document.elementFromPoint(Bn.clientX, Bn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Bn.clientX, Bn.clientY), e !== n);) n = e;
            if (Re.parentNode[Tn]._isOutsideThisEl(e), n)
                do {
                    if (n[Tn]) {
                        var i = void 0;
                        if (i = n[Tn]._onDragOver({
                                clientX: Bn.clientX,
                                clientY: Bn.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            Nh()
        }
    },
    _onTouchMove: function(e) {
        if (Di) {
            var n = this.options,
                i = n.fallbackTolerance,
                o = n.fallbackOffset,
                h = e.touches ? e.touches[0] : e,
                m = ct && br(ct, !0),
                E = ct && m && m.a,
                k = ct && m && m.d,
                A = Js && un && Bc(un),
                M = (h.clientX - Di.clientX + o.x) / (E || 1) + (A ? A[0] - La[0] : 0) / (E || 1),
                $ = (h.clientY - Di.clientY + o.y) / (k || 1) + (A ? A[1] - La[1] : 0) / (k || 1);
            if (!Qe.active && !pr) {
                if (i && Math.max(Math.abs(h.clientX - this._lastX), Math.abs(h.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ct) {
                m ? (m.e += M - (Ma || 0), m.f += $ - (Da || 0)) : m = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: M,
                    f: $
                };
                var J = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
                nt(ct, "webkitTransform", J), nt(ct, "mozTransform", J), nt(ct, "msTransform", J), nt(ct, "transform", J), Ma = M, Da = $, Bn = h
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ct) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Kt(Re, !0, Js, !0, e),
                i = this.options;
            if (Js) {
                for (un = e; nt(un, "position") === "static" && nt(un, "transform") === "none" && un !== document;) un = un.parentNode;
                un !== document.body && un !== document.documentElement ? (un === document && (un = Wn()), n.top += un.scrollTop, n.left += un.scrollLeft) : un = Wn(), La = Bc(un)
            }
            ct = Re.cloneNode(!0), Sn(ct, i.ghostClass, !1), Sn(ct, i.fallbackClass, !0), Sn(ct, i.dragClass, !0), nt(ct, "transition", ""), nt(ct, "transform", ""), nt(ct, "box-sizing", "border-box"), nt(ct, "margin", 0), nt(ct, "top", n.top), nt(ct, "left", n.left), nt(ct, "width", n.width), nt(ct, "height", n.height), nt(ct, "opacity", "0.8"), nt(ct, "position", Js ? "absolute" : "fixed"), nt(ct, "zIndex", "100000"), nt(ct, "pointerEvents", "none"), Qe.ghost = ct, e.appendChild(ct), nt(ct, "transform-origin", $c / parseInt(ct.style.width) * 100 + "% " + Fc / parseInt(ct.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            o = e.dataTransfer,
            h = i.options;
        if (Cn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        Cn("setupClone", this), Qe.eventCanceled || (Vt = Ih(Re), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), Sn(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = ro(function() {
            Cn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Vt, Re), i._hideClone(), vn({
                sortable: i,
                name: "clone"
            }))
        }), !n && Sn(Re, h.dragClass, !0), n ? (wo = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (bt(document, "mouseup", i._onDrop), bt(document, "touchend", i._onDrop), bt(document, "touchcancel", i._onDrop), o && (o.effectAllowed = "move", h.setData && h.setData.call(i, o, Re)), Et(document, "drop", i), nt(Re, "transform", "translateZ(0)")), pr = !0, i._dragStartId = ro(i._dragStarted.bind(i, n, e)), Et(document, "selectstart", i), ss = !0, ds && nt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            o, h, m, E = this.options,
            k = E.group,
            A = Qe.active,
            M = Ys === k,
            $ = E.sort,
            J = nn || A,
            ie, Y = this,
            re = !1;
        if (el) return;

        function v(ye, ue) {
            Cn(ye, Y, qn({
                evt: e,
                isOwner: M,
                axis: ie ? "vertical" : "horizontal",
                revert: m,
                dragRect: o,
                targetRect: h,
                canSort: $,
                fromSortable: J,
                target: i,
                completed: W,
                onMove: function(ke, $e) {
                    return Qs(Pt, n, Re, o, ke, Kt(ke), e, $e)
                },
                changed: ae
            }, ue))
        }

        function P() {
            v("dragOverAnimationCapture"), Y.captureAnimationState(), Y !== J && J.captureAnimationState()
        }

        function W(ye) {
            return v("dragOverCompleted", {
                insertion: ye
            }), ye && (M ? A._hideClone() : A._showClone(Y), Y !== J && (Sn(Re, nn ? nn.options.ghostClass : A.options.ghostClass, !1), Sn(Re, E.ghostClass, !0)), nn !== Y && Y !== Qe.active ? nn = Y : Y === Qe.active && nn && (nn = null), J === Y && (Y._ignoreWhileAnimating = i), Y.animateAll(function() {
                v("dragOverAnimationComplete"), Y._ignoreWhileAnimating = null
            }), Y !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Re && !Re.animated || i === n && !i.animated) && (hr = null), !E.dragoverBubble && !e.rootEl && i !== document && (Re.parentNode[Tn]._isOutsideThisEl(e.target), !ye && Li(e)), !E.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            kn = Mn(Re), pi = Mn(Re, E.draggable), vn({
                sortable: Y,
                name: "change",
                toEl: n,
                newIndex: kn,
                newDraggableIndex: pi,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = Hn(i, E.draggable, n, !0), v("dragOver"), Qe.eventCanceled) return re;
        if (Re.contains(e.target) || i.animated && i.animatingX && i.animatingY || Y._ignoreWhileAnimating === i) return W(!1);
        if (wo = !1, A && !E.disabled && (M ? $ || (m = $t !== Pt) : nn === this || (this.lastPutMode = Ys.checkPull(this, A, Re, e)) && k.checkPut(this, A, Re, e))) {
            if (ie = this._getDirection(e, i) === "vertical", o = Kt(Re), v("dragOverValid"), Qe.eventCanceled) return re;
            if (m) return $t = Pt, P(), this._hideClone(), v("revert"), Qe.eventCanceled || (Ni ? Pt.insertBefore(Re, Ni) : Pt.appendChild(Re)), W(!0);
            var se = Dl(n, E.draggable);
            if (!se || Gx(e, ie, this) && !se.animated) {
                if (se === Re) return W(!1);
                if (se && n === e.target && (i = se), i && (h = Kt(i)), Qs(Pt, n, Re, o, i, h, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Re, se.nextSibling) : n.appendChild(Re), $t = n, ae(), W(!0)
            } else if (se && Ux(e, ie, this)) {
                var ve = _r(n, 0, E, !0);
                if (ve === Re) return W(!1);
                if (i = ve, h = Kt(i), Qs(Pt, n, Re, o, i, h, e, !1) !== !1) return P(), n.insertBefore(Re, ve), $t = n, ae(), W(!0)
            } else if (i.parentNode === n) {
                h = Kt(i);
                var f = 0,
                    Ee, Ae = Re.parentNode !== n,
                    Pe = !$x(Re.animated && Re.toRect || o, i.animated && i.toRect || h, ie),
                    at = ie ? "top" : "left",
                    Be = Vc(i, "top", "top") || Vc(Re, "top", "top"),
                    K = Be ? Be.scrollTop : void 0;
                hr !== i && (Ee = h[at], ms = !1, Ks = !Pe && E.invertSwap || Ae), f = Wx(e, i, h, ie, Pe ? 1 : E.swapThreshold, E.invertedSwapThreshold == null ? E.swapThreshold : E.invertedSwapThreshold, Ks, hr === i);
                var je;
                if (f !== 0) {
                    var U = Mn(Re);
                    do U -= f, je = $t.children[U]; while (je && (nt(je, "display") === "none" || je === ct))
                }
                if (f === 0 || je === i) return W(!1);
                hr = i, gs = f;
                var oe = i.nextElementSibling,
                    Te = !1;
                Te = f === 1;
                var we = Qs(Pt, n, Re, o, i, h, e, Te);
                if (we !== !1) return (we === 1 || we === -1) && (Te = we === 1), el = !0, setTimeout(Hx, 30), P(), Te && !oe ? n.appendChild(Re) : i.parentNode.insertBefore(Re, Te ? oe : i), Be && Rh(Be, 0, K - Be.scrollTop), $t = Re.parentNode, Ee !== void 0 && !Ks && (io = Math.abs(Ee - Kt(i)[at])), ae(), W(!0)
            }
            if (n.contains(Re)) return W(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        bt(document, "mousemove", this._onTouchMove), bt(document, "touchmove", this._onTouchMove), bt(document, "pointermove", this._onTouchMove), bt(document, "dragover", Li), bt(document, "mousemove", Li), bt(document, "touchmove", Li)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._onDrop), bt(e, "touchend", this._onDrop), bt(e, "pointerup", this._onDrop), bt(e, "touchcancel", this._onDrop), bt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (kn = Mn(Re), pi = Mn(Re, i.draggable), Cn("drop", this, {
                evt: e
            }), $t = Re && Re.parentNode, kn = Mn(Re), pi = Mn(Re, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        pr = !1, Ks = !1, ms = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), tl(this.cloneId), tl(this._dragStartId), this.nativeDraggable && (bt(document, "drop", this), bt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ds && nt(document.body, "user-select", ""), nt(Re, "transform", ""), e && (ss && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ct && ct.parentNode && ct.parentNode.removeChild(ct), (Pt === $t || nn && nn.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Re && (this.nativeDraggable && bt(Re, "dragend", this), Pa(Re), Re.style["will-change"] = "", ss && !pr && Sn(Re, nn ? nn.options.ghostClass : this.options.ghostClass, !1), Sn(Re, this.options.chosenClass, !1), vn({
            sortable: this,
            name: "unchoose",
            toEl: $t,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Pt !== $t ? (kn >= 0 && (vn({
            rootEl: $t,
            name: "add",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), vn({
            sortable: this,
            name: "remove",
            toEl: $t,
            originalEvent: e
        }), vn({
            rootEl: $t,
            name: "sort",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), vn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), nn && nn.save()) : kn !== gr && kn >= 0 && (vn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), vn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), Qe.active && ((kn == null || kn === -1) && (kn = gr, pi = ps), vn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        Cn("nulling", this), Pt = Re = $t = ct = Ni = Vt = no = gi = Di = Bn = ss = kn = pi = gr = ps = hr = gs = nn = Ys = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, Co.forEach(function(e) {
            e.checked = !0
        }), Co.length = Ma = Da = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Re && (this._onDragOver(e), zx(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, o = 0, h = i.length, m = this.options; o < h; o++) n = i[o], Hn(n, m.draggable, this.el, !1) && e.push(n.getAttribute(m.dataIdAttr) || Xx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            o = this.el;
        this.toArray().forEach(function(h, m) {
            var E = o.children[m];
            Hn(E, this.options.draggable, o, !1) && (i[h] = E)
        }, this), n && this.captureAnimationState(), e.forEach(function(h) {
            i[h] && (o.removeChild(i[h]), o.appendChild(i[h]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return Hn(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var o = Cs.modifyOption(this, e, n);
        typeof o < "u" ? i[e] = o : i[e] = n, e === "group" && Lh(i)
    },
    destroy: function() {
        Cn("destroy", this);
        var e = this.el;
        e[Tn] = null, bt(e, "mousedown", this._onTapStart), bt(e, "touchstart", this._onTapStart), bt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (bt(e, "dragover", this), bt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), bo.splice(bo.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!gi) {
            if (Cn("hideClone", this), Qe.eventCanceled) return;
            nt(Vt, "display", "none"), this.options.removeCloneOnHide && Vt.parentNode && Vt.parentNode.removeChild(Vt), gi = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (gi) {
            if (Cn("showClone", this), Qe.eventCanceled) return;
            Re.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Vt, Re) : Ni ? Pt.insertBefore(Vt, Ni) : Pt.appendChild(Vt), this.options.group.revertClone && this.animate(Re, Vt), nt(Vt, "display", ""), gi = !1
        }
    }
};

function zx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Qs(t, e, n, i, o, h, m, E) {
    var k, A = t[Tn],
        M = A.options.onMove,
        $;
    return window.CustomEvent && !hi && !bs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = o || e, k.relatedRect = h || Kt(e), k.willInsertAfter = E, k.originalEvent = m, t.dispatchEvent(k), M && ($ = M.call(A, k, m)), $
}

function Pa(t) {
    t.draggable = !1
}

function Hx() {
    el = !1
}

function Ux(t, e, n) {
    var i = Kt(_r(n.el, 0, n.options, !0)),
        o = 10;
    return e ? t.clientX < i.left - o || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - o || t.clientY < i.bottom && t.clientX < i.left
}

function Gx(t, e, n) {
    var i = Kt(Dl(n.el, n.options.draggable)),
        o = 10;
    return e ? t.clientX > i.right + o || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + o
}

function Wx(t, e, n, i, o, h, m, E) {
    var k = i ? t.clientY : t.clientX,
        A = i ? n.height : n.width,
        M = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        J = !1;
    if (!m) {
        if (E && io < A * o) {
            if (!ms && (gs === 1 ? k > M + A * h / 2 : k < $ - A * h / 2) && (ms = !0), ms) J = !0;
            else if (gs === 1 ? k < M + io : k > $ - io) return -gs
        } else if (k > M + A * (1 - o) / 2 && k < $ - A * (1 - o) / 2) return qx(e)
    }
    return J = J || m, J && (k < M + A * h / 2 || k > $ - A * h / 2) ? k > M + A / 2 ? 1 : -1 : 0
}

function qx(t) {
    return Mn(Re) < Mn(t) ? 1 : -1
}

function Xx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function Yx(t) {
    Co.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && Co.push(i)
    }
}

function ro(t) {
    return setTimeout(t, 0)
}

function tl(t) {
    return clearTimeout(t)
}
Vo && Et(document, "touchmove", function(t) {
    (Qe.active || pr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: Et,
    off: bt,
    css: nt,
    find: Ah,
    is: function(e, n) {
        return !!Hn(e, n, e, !1)
    },
    extend: Ix,
    throttle: Oh,
    closest: Hn,
    toggleClass: Sn,
    clone: Ih,
    index: Mn,
    nextTick: ro,
    cancelNextTick: tl,
    detectDirection: Dh,
    getChild: _r
};
Qe.get = function(t) {
    return t[Tn]
};
Qe.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (Qe.utils = qn(qn({}, Qe.utils), i.utils)), Cs.mount(i)
    })
};
Qe.create = function(t, e) {
    return new Qe(t, e)
};
Qe.version = Ax;
var Wt = [],
    os, nl, il = !1,
    Na, Va, xo, as;

function Kx() {
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
            this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : (bt(document, "pointermove", this._handleFallbackAutoScroll), bt(document, "touchmove", this._handleFallbackAutoScroll), bt(document, "mousemove", this._handleFallbackAutoScroll)), zc(), so(), Mx()
        },
        nulling: function() {
            xo = nl = os = il = as = Na = Va = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var o = this,
                h = (n.touches ? n.touches[0] : n).clientX,
                m = (n.touches ? n.touches[0] : n).clientY,
                E = document.elementFromPoint(h, m);
            if (xo = n, i || this.options.forceAutoScrollFallback || bs || hi || ds) {
                Ba(n, this.options, E, i);
                var k = vi(E, !0);
                il && (!as || h !== Na || m !== Va) && (as && zc(), as = setInterval(function() {
                    var A = vi(document.elementFromPoint(h, m), !0);
                    A !== k && (k = A, so()), Ba(n, o.options, A, i)
                }, 10), Na = h, Va = m)
            } else {
                if (!this.options.bubbleScroll || vi(E, !0) === Wn()) {
                    so();
                    return
                }
                Ba(n, this.options, vi(E, !1), !1)
            }
        }
    }, ui(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function so() {
    Wt.forEach(function(t) {
        clearInterval(t.pid)
    }), Wt = []
}

function zc() {
    clearInterval(as)
}
var Ba = Oh(function(t, e, n, i) {
        if (!!e.scroll) {
            var o = (t.touches ? t.touches[0] : t).clientX,
                h = (t.touches ? t.touches[0] : t).clientY,
                m = e.scrollSensitivity,
                E = e.scrollSpeed,
                k = Wn(),
                A = !1,
                M;
            nl !== n && (nl = n, so(), os = e.scroll, M = e.scrollFn, os === !0 && (os = vi(n, !0)));
            var $ = 0,
                J = os;
            do {
                var ie = J,
                    Y = Kt(ie),
                    re = Y.top,
                    v = Y.bottom,
                    P = Y.left,
                    W = Y.right,
                    ae = Y.width,
                    se = Y.height,
                    ve = void 0,
                    f = void 0,
                    Ee = ie.scrollWidth,
                    Ae = ie.scrollHeight,
                    Pe = nt(ie),
                    at = ie.scrollLeft,
                    Be = ie.scrollTop;
                ie === k ? (ve = ae < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), f = se < Ae && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ve = ae < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), f = se < Ae && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var K = ve && (Math.abs(W - o) <= m && at + ae < Ee) - (Math.abs(P - o) <= m && !!at),
                    je = f && (Math.abs(v - h) <= m && Be + se < Ae) - (Math.abs(re - h) <= m && !!Be);
                if (!Wt[$])
                    for (var U = 0; U <= $; U++) Wt[U] || (Wt[U] = {});
                (Wt[$].vx != K || Wt[$].vy != je || Wt[$].el !== ie) && (Wt[$].el = ie, Wt[$].vx = K, Wt[$].vy = je, clearInterval(Wt[$].pid), (K != 0 || je != 0) && (A = !0, Wt[$].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(xo);
                    var oe = Wt[this.layer].vy ? Wt[this.layer].vy * E : 0,
                        Te = Wt[this.layer].vx ? Wt[this.layer].vx * E : 0;
                    typeof M == "function" && M.call(Qe.dragged.parentNode[Tn], Te, oe, t, xo, Wt[this.layer].el) !== "continue" || Rh(Wt[this.layer].el, Te, oe)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && J !== k && (J = vi(J, !1)));
            il = A
        }
    }, 30),
    Vh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            o = e.dragEl,
            h = e.activeSortable,
            m = e.dispatchSortableEvent,
            E = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var A = i || h;
            E();
            var M = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                $ = document.elementFromPoint(M.clientX, M.clientY);
            k(), A && !A.el.contains($) && (m("spill"), this.onSpill({
                dragEl: o,
                putSortable: i
            }))
        }
    };

function Ll() {}
Ll.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var o = _r(this.sortable.el, this.startIndex, this.options);
        o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: Vh
};
ui(Ll, {
    pluginName: "revertOnSpill"
});

function Pl() {}
Pl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            o = i || this.sortable;
        o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll()
    },
    drop: Vh
};
ui(Pl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new Kx);
Qe.mount(Pl, Ll);
const Jx = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Qx = An.extend({
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
    Zx = mt.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: Ze.template("<div class='text'></div>"),
        model: new ut.Model({}),
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
    Hc = mt.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: Zx,
        collection: new ut.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    e1 = mt.View.extend({
        className: "SorterView",
        template: Ze.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new ut.Model({
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
            this.rankedCollectionView = this.rankedCollectionView || new Hc({
                collection: new ut.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new Hc({
                className: "sortable-collection unranked",
                collection: new ut.Collection([])
            }), this.lockInView = this.lockInView || new ho({
                block: !1,
                model: new ut.Model({
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
    t1 = mt.View.extend({
        className: "Sortable scrollable",
        template: Ze.template(Jx),
        model: new Qx,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new zi({
                model: new ut.Model
            }), this.sorterView = this.sorterView || new e1({}), this.listenTo(this.model, "change", this.update, this)
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
    n1 = `<div id="controller" class="state-controller controller-content">
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
    i1 = An.extend({
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
    r1 = mt.View.extend({
        className: "UGC scrollable",
        template: Ze.template(n1),
        model: new i1,
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
                    let h = `${t}/${e}`;
                    return o < t && (h += ` (${t-o} ${i})`), h
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.promptComponent = this.promptComponent || new zi({
                model: new ut.Model
            }), this.episodesList = this.episodesList || new li({
                action: "load",
                collection: new ut.Collection
            }), this.inputComponent = this.inputComponent || new fo({
                model: new ut.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new fo({
                model: new ut.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new li({
                action: "remove",
                collection: new ut.Collection
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
                const i = sn.htmlUnescape(n.metadata.title);
                let o = sn.safeText(i);
                return o += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: o
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = Ze.extend({}, n);
                i.text = sn.htmlUnescape(n.text);
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
            const e = Me(t.currentTarget).data("action");
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
            Dn.fire({
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
            Dn.fire({
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
    s1 = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    o1 = mt.View.extend({
        className: "RadialView",
        template: Ze.template(s1),
        model: new ut.Model({
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
                            h = 207 * (1 - n);
                        return e += `stroke-dasharray:${o} ${h};`, e += `transform:rotate(${-360*n-90}deg);`, e
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
            const o = this.getDistance(n);
            if (o > 32) {
                const h = 32 / o;
                n.x *= h, n.y *= h
            }
            return n
        }
    }),
    a1 = `<div id="status-bar" class="health text">\r
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
    l1 = An.extend({
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
    c1 = mt.View.extend({
        model: new l1,
        template: Ze.template(a1),
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
                h = Math.floor(o / 10);
            this.triggerMethod("client:message", {
                action: "fire",
                type: "fire",
                weapon: i,
                vector: t
            }), this.model.get("isAudience") && (this.audienceShot = h * 10, this.shotId = this.model.get("shotId") || 0, this.model.setUpdate({
                lockedIn: !0,
                shotId: this.shotId
            }))
        },
        initialize(t) {
            this.client = t.client, this.radialComponent = new o1({
                model: new ut.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = Ze.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Me(window).on("mousemove", this.move.bind(this)), Me(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), Me(window).off("mousemove"), Me(window).off("mouseup")
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
            const t = Me(".radial"),
                e = Me("#status-bar").outerHeight() + Me(".playerTopBar").outerHeight() + Me("#control-panel").outerHeight() + 10,
                n = Me(".controller-page").width(),
                i = window.innerHeight - e,
                o = Math.max(150, Math.min(n, i));
            t.css("width", `${o}px`), t.css("height", `${o}px`), window.scrollTo(0, 0)
        }
    }),
    u1 = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
const h1 = mt.View.extend({
    client: null,
    template: Ze.template(u1),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new xx, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new ut.Model({});
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
                return this.setLayout(ux);
            case "EnterSingleText":
                return this.setLayout(fx);
            case "Lobby":
                return this.setLayout(vx);
            case "Logo":
                return this.setLayout(bx);
            case "MakeSingleChoice":
                return this.setLayout(Za);
            case "Shoot":
                return this.setLayout(c1);
            case "Sortable":
                return this.setLayout(t1);
            case "Camera":
                return this.setLayout(ZC);
            case "UGC":
                return this.setLayout(r1);
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
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && tn.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: Ze.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Fi.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), Me("#textDescriptions").append(Me("<p />").text(e.text)))
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
        const t = Me(window).width(),
            e = Me(window).height();
        Me(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        tn.remove("roomCode"), tn.remove("reconnect"), Ot.show("error", {
            titleText: Xs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Xs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        Ot.show("error", {
            titleText: Xs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Xs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
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
                if (e instanceof oi.EcastEntityNotFound || e instanceof oi.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                else if (e instanceof oi.EcastFilterError) this.currentLayout.onTextFilterError && this.currentLayout.onTextFilterError(e);
                else throw console.error(`Unhandled error updating text entity ${t.textKey}`), e
            } else if (t.objectKey) try {
                await this.client.updateObject(t.objectKey, t.val)
            } catch (e) {
                if (e instanceof oi.EcastEntityNotFound || e instanceof oi.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                else if (e instanceof oi.EcastFilterError) this.currentLayout.onObjectFilterError && this.currentLayout.onObjectFilterError(e);
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
var Bh = {
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

        function h(k, A) {
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
                $, J;
            if (A instanceof RegExp) {
                $ = {};
                for (J in M) M.hasOwnProperty(J) && A.test(J) && ($[J] = M[J])
            } else $ = M[A] || (M[A] = []);
            return $
        }, i.flattenListeners = function(A) {
            var M = [],
                $;
            for ($ = 0; $ < A.length; $ += 1) M.push(A[$].listener);
            return M
        }, i.getListenersAsObject = function(A) {
            var M = this.getListeners(A),
                $;
            return M instanceof Array && ($ = {}, $[A] = M), $ || M
        };

        function E(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? E(k.listener) : !1
        }
        i.addListener = function(A, M) {
            if (!E(M)) throw new TypeError("listener must be a function");
            var $ = this.getListenersAsObject(A),
                J = typeof M == "object",
                ie;
            for (ie in $) $.hasOwnProperty(ie) && h($[ie], M) === -1 && $[ie].push(J ? M : {
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
            var $ = this.getListenersAsObject(A),
                J, ie;
            for (ie in $) $.hasOwnProperty(ie) && (J = h($[ie], M), J !== -1 && $[ie].splice(J, 1));
            return this
        }, i.off = m("removeListener"), i.addListeners = function(A, M) {
            return this.manipulateListeners(!1, A, M)
        }, i.removeListeners = function(A, M) {
            return this.manipulateListeners(!0, A, M)
        }, i.manipulateListeners = function(A, M, $) {
            var J, ie, Y = A ? this.removeListener : this.addListener,
                re = A ? this.removeListeners : this.addListeners;
            if (typeof M == "object" && !(M instanceof RegExp))
                for (J in M) M.hasOwnProperty(J) && (ie = M[J]) && (typeof ie == "function" ? Y.call(this, J, ie) : re.call(this, J, ie));
            else
                for (J = $.length; J--;) Y.call(this, M, $[J]);
            return this
        }, i.removeEvent = function(A) {
            var M = typeof A,
                $ = this._getEvents(),
                J;
            if (M === "string") delete $[A];
            else if (A instanceof RegExp)
                for (J in $) $.hasOwnProperty(J) && A.test(J) && delete $[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = m("removeEvent"), i.emitEvent = function(A, M) {
            var $ = this.getListenersAsObject(A),
                J, ie, Y, re, v;
            for (re in $)
                if ($.hasOwnProperty(re))
                    for (J = $[re].slice(0), Y = 0; Y < J.length; Y++) ie = J[Y], ie.once === !0 && this.removeListener(A, ie.listener), v = ie.listener.apply(this, M || []), v === this._getOnceReturnValue() && this.removeListener(A, ie.listener);
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
            return e.EventEmitter = o, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : yt || {})
})(Bh);
const d1 = Bh.exports;
class f1 extends d1 {
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
            return Object.keys(n).forEach(o => {
                const h = n[o];
                o === "room" || o === "bc:room" || o === "roomBlob" ? (h instanceof Pi.TextEntity && (i.room = h.toBlob()), h instanceof Pi.ObjectEntity && (i.room = h.val)) : o === "player" || o === `player:${this.id}` || o === `bc:customer:${this.userId}` ? (h instanceof Pi.TextEntity && (i.player = h.toBlob()), h instanceof Pi.ObjectEntity && (i.player = h.val)) : o === "audiencePlayer" && (h instanceof Pi.TextEntity && (i.audiencePlayer = h.toBlob()), h instanceof Pi.ObjectEntity && (i.audiencePlayer = h.val))
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
        let h = n.text;
        try {
            h = JSON.parse(h)
        } catch {
            kc(`[Ecast Client] Unhandled text notification: ${n.key} ${o}`);
            return
        }
        const m = h;
        i === "room" ? this.emit("client:entityDidChange", i, m) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", m) : i === "bc:room" ? this.emit("client:entityDidChange", "room", m) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", m) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", m) : kc(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            o = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, o) : i === "player" ? this.emit("client:entityDidChange", "player", o) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", o) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, o) : i === "bc:room" ? this.emit("client:entityDidChange", "room", o) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", o) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", o) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onSocketClose(n) {
        n instanceof oi.EcastServerError || n.code === 1005 || n.code === 1e3 ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
    }
    onRoomExit(n) {
        this.emit("client:disconnected", n), this.disconnect()
    }
    onConnection(n) {
        this.emit("client:connection", n)
    }
    async send(n, i) {
        var o, h;
        if (!!this.isReady) try {
            if (n === "SendMessageToRoomOwner") {
                const m = (h = (o = this.host) == null ? void 0 : o.id) != null ? h : "1";
                await this.wsClient.mail(m, i)
            } else await this.wsClient.send(n, i)
        } catch (m) {
            console.error(m)
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
const p1 = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(Me)
})(function(t) {
    var e, n = navigator.userAgent,
        i = /iphone/i.test(n),
        o = /chrome/i.test(n),
        h = /android/i.test(n);
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
        caret: function(m, E) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof m == "number" ? (E = typeof E == "number" ? E : m, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(m, E) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", E), k.moveStart("character", m), k.select())
            })) : (this[0].setSelectionRange ? (m = this[0].selectionStart, E = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), m = 0 - k.duplicate().moveStart("character", -1e5), E = m + k.text.length), {
                begin: m,
                end: E
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(m, E) {
            var k, A, M, $, J, ie, Y, re;
            if (!m && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return E = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, E), A = t.mask.definitions, M = [], $ = Y = m.length, J = null, t.each(m.split(""), function(P, W) {
                W == "?" ? (Y--, $ = P) : A[W] ? (M.push(new RegExp(A[W])), J === null && (J = M.length - 1), $ > P && (ie = M.length - 1)) : M.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (E.completed) {
                        for (var ye = J; ie >= ye; ye++)
                            if (M[ye] && oe[ye] === W(ye)) return;
                        E.completed.call(U)
                    }
                }

                function W(ye) {
                    return E.placeholder.charAt(ye < E.placeholder.length ? ye : 0)
                }

                function ae(ye) {
                    for (; ++ye < Y && !M[ye];);
                    return ye
                }

                function se(ye) {
                    for (; --ye >= 0 && !M[ye];);
                    return ye
                }

                function ve(ye, ue) {
                    var _e, ke;
                    if (!(0 > ye)) {
                        for (_e = ye, ke = ae(ue); Y > _e; _e++)
                            if (M[_e]) {
                                if (!(Y > ke && M[_e].test(oe[ke]))) break;
                                oe[_e] = oe[ke], oe[ke] = W(ke), ke = ae(ke)
                            } K(), U.caret(Math.max(J, ye))
                    }
                }

                function f(ye) {
                    var ue, _e, ke, $e;
                    for (ue = ye, _e = W(ye); Y > ue; ue++)
                        if (M[ue]) {
                            if (ke = ae(ue), $e = oe[ue], oe[ue] = _e, !(Y > ke && M[ke].test($e))) break;
                            _e = $e
                        }
                }

                function Ee() {
                    var ye = U.val(),
                        ue = U.caret();
                    if (re && re.length && re.length > ye.length) {
                        for (je(!0); ue.begin > 0 && !M[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < J && !M[ue.begin];) ue.begin++;
                        U.caret(ue.begin, ue.begin)
                    } else {
                        for (je(!0); ue.begin < Y && !M[ue.begin];) ue.begin++;
                        U.caret(ue.begin, ue.begin)
                    }
                    P()
                }

                function Ae() {
                    je(), U.val() != we && U.change()
                }

                function Pe(ye) {
                    if (!U.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode;
                        re = U.val(), $e === 8 || $e === 46 || i && $e === 127 ? (ue = U.caret(), _e = ue.begin, ke = ue.end, ke - _e === 0 && (_e = $e !== 46 ? se(_e) : ke = ae(_e - 1), ke = $e === 46 ? ae(ke) : ke), Be(_e, ke), ve(_e, ke - 1), ye.preventDefault()) : $e === 13 ? Ae.call(this, ye) : $e === 27 && (U.val(we), U.caret(0, je()), ye.preventDefault())
                    }
                }

                function at(ye) {
                    if (!U.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode,
                            Ke = U.caret();
                        if (!(ye.ctrlKey || ye.altKey || ye.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Be(Ke.begin, Ke.end), ve(Ke.begin, Ke.end - 1)), ue = ae(Ke.begin - 1), Y > ue && (_e = String.fromCharCode($e), M[ue].test(_e))) {
                                if (f(ue), oe[ue] = _e, K(), ke = ae(ue), h) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, U, ke)()
                                    };
                                    setTimeout(dt, 0)
                                } else U.caret(ke);
                                Ke.begin <= ie && P()
                            }
                            ye.preventDefault()
                        }
                    }
                }

                function Be(ye, ue) {
                    var _e;
                    for (_e = ye; ue > _e && Y > _e; _e++) M[_e] && (oe[_e] = W(_e))
                }

                function K() {
                    U.val(oe.join(""))
                }

                function je(ye) {
                    var ue, _e, ke, $e = U.val(),
                        Ke = -1;
                    for (ue = 0, ke = 0; Y > ue; ue++)
                        if (M[ue]) {
                            for (oe[ue] = W(ue); ke++ < $e.length;)
                                if (_e = $e.charAt(ke - 1), M[ue].test(_e)) {
                                    oe[ue] = _e, Ke = ue;
                                    break
                                } if (ke > $e.length) {
                                Be(ue + 1, Y);
                                break
                            }
                        } else oe[ue] === $e.charAt(ke) && ke++, $ > ue && (Ke = ue);
                    return ye ? K() : $ > Ke + 1 ? E.autoclear || oe.join("") === Te ? (U.val() && U.val(""), Be(0, Y)) : K() : (K(), U.val(U.val().substring(0, Ke + 1))), $ ? ue : J
                }
                var U = t(this),
                    oe = t.map(m.split(""), function(ye, ue) {
                        return ye != "?" ? A[ye] ? W(ue) : ye : void 0
                    }),
                    Te = oe.join(""),
                    we = U.val();
                U.data(t.mask.dataName, function() {
                    return t.map(oe, function(ye, ue) {
                        return M[ue] && ye != W(ue) ? ye : null
                    }).join("")
                }), U.one("unmask", function() {
                    U.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!U.prop("readonly")) {
                        clearTimeout(e);
                        var ye;
                        we = U.val(), ye = je(), e = setTimeout(function() {
                            U.get(0) === document.activeElement && (K(), ye == m.replace("?", "").length ? U.caret(0, ye) : U.caret(ye))
                        }, 10)
                    }
                }).on("blur.mask", Ae).on("keydown.mask", Pe).on("keypress.mask", at).on("input.mask paste.mask", function() {
                    U.prop("readonly") || setTimeout(function() {
                        var ye = je(!0);
                        U.caret(ye), P()
                    }, 0)
                }), o && h && U.off("input.mask").on("input.mask", Ee), je()
            })
        }
    })
});
window.$ = Me;
window.jQuery = Me;
const g1 = mt.View.extend({
        className: "app-root",
        template: Ze.template(p1),
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
    m1 = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Pi.WSClient(n), e.connect()),
            mount: n => {
                const i = new f1(e, n);
                let o = new mt.Application({
                    region: "#app",
                    onStart() {
                        const h = new g1;
                        this.showView(h), h.showView(t.MainView, {
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
    v1 = '<button type="button" class="button choice-button btn btn-lg"></button><button data-action="choose" class="button check-button btn btn-lg"></button>',
    y1 = ho.extend({
        template: Ze.template(v1),
        bindings: Ze.extend(ho.prototype.bindings, {
            ".check-button": {
                attributes: [{
                    name: "class",
                    observe: "className"
                }]
            }
        })
    }),
    w1 = Za.extend({
        initialize(t) {
            this.choicesList = this.choicesList || new li({
                childView: y1
            }), Za.prototype.initialize.apply(this, [t])
        },
        displayAudienceChoice(t) {
            let e = "";
            if (this.model.get("roundType") !== "FinalRound") {
                const n = this.model.get("choices");
                if (!n) return e;
                e = `<div class="chosenText">You have chosen<br>${n.find(o=>o.key===t[0]).html}</div>`
            }
            return {
                html: e
            }
        },
        onChildviewChildviewButtonArtifact() {
            const t = this.model.get("artifact");
            let e = "games.jackbox.tv";
            t.rootId.indexOf("test") !== -1 && (e = "games-test.jackbox.tv");
            const n = `https://${e}/artifact/${t.categoryId}/${t.artifactId}/`;
            this.triggerMethod("track:event", {
                category: "PostGame",
                action: "galleryClicked"
            }), window.open(n, "_blank")
        }
    }),
    b1 = `<div id="prompt" class="prompt">prompt</div>\r
<div id="grid" class="grid">grid</div>\r
<div id="error" class="error"></div>\r
<div id="instructions" class="instructions"></div>\r
`,
    C1 = An.extend({
        defaults: {
            mode: "normal",
            showProgress: !0,
            skin: "MemoryGrid",
            prompt: {
                text: ""
            },
            classes: ["MemoryGrid"],
            grid: [
                ["a", "b", "c"],
                ["1", "2", "3"]
            ],
            error: ""
        }
    }),
    x1 = mt.View.extend({
        template: Ze.template(b1),
        className: "Grid",
        bindings: {
            ":el": {
                attributes: [{
                    name: "class",
                    observe: "classes",
                    onGet(t) {
                        return t.join(" ")
                    }
                }]
            },
            ".prompt": {
                observe: "prompt",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : Me("<div />").text(t.text).html() : "b"
                }
            },
            ".error": {
                observe: "error",
                updateMethod: "html"
            },
            ".grid": {
                observe: "grid",
                updateMethod: "html",
                onGet(t) {
                    let e = "";
                    return t.forEach((n, i) => {
                        e += '<div class="grid-row">', n.forEach((o, h) => {
                            let m = "";
                            o.type === "Stab" || o.type === "Hide" ? m = `<button class='grid-contents' aria-label='${o.type}' data-y=${i} data-x=${h}>${o.text}</button>` : m = `<div class='grid-contents' aria-label='${o.type}' data-y=${i} data-x=${h}>${o.text}</div>`, e += `<div class='grid-cell grid-cell-${n.length} ${o.type}'>${m}</div>`
                        }), e += "</div>"
                    }), e
                }
            },
            ".instructions": {
                updateMethod: "html",
                observe: "instructions"
            }
        },
        model: new C1,
        events: {
            "click button.grid-contents": "cellClicked"
        },
        cellClicked(t) {
            const e = t.target.dataset.x,
                n = t.target.dataset.y;
            this.triggerMethod("client:message", {
                action: "click",
                position: `${n}-${e}`
            })
        },
        initialize() {},
        onRender() {
            this.stickit()
        }
    }),
    E1 = `<div>\r
    <canvas id="scratch" class="canvas scratch" width=640 height=880></canvas>\r
    <div class="visuallyhidden">\r
    	<img id="Skull" src="main/pp6/triviadeath2/triviadeath2/ScratchOffSkull.png"/>\r
    	<img id="Dollar" src="main/pp6/triviadeath2/triviadeath2/ScratchOffDollar.png"/>\r
    </div>\r
</div>`,
    _1 = An.extend({
        defaults: {
            choices: [],
            classes: [],
            isMarkedForDeath: !1
        }
    }),
    S1 = {
        width: 126,
        height: 126,
        color: "gray",
        thickness: 10,
        imageThickness: 0,
        totalDistance: 0,
        revealDistance: 400,
        revealed: !1,
        index: 0,
        isMarkedForDeath: !1,
        onDown() {
            this.focused = !1
        },
        onOver() {
            if (this.isMarkedForDeath || !this.drawing || !this.focused) return;
            const t = this.lines[this.lines.length - 1];
            if (!t) return;
            const e = t[t.length - 1],
                n = {
                    x: qt.x - this.x,
                    y: qt.y - this.y
                };
            t.push(n);
            const i = {
                x: n.x - e.x,
                y: n.y - e.y
            };
            this.totalDistance += Math.sqrt(i.x * i.x + i.y * i.y), !this.revealed && this.totalDistance > this.revealDistance && (this.onRevealed(this.index), this.revealed = !0)
        },
        onUp() {
            this.focused = !1
        },
        onRevealed() {},
        update() {
            this.lines || (this.lines = []), this.hiddenCanvas || (this.hiddenCanvas = document.createElement("canvas"), this.hiddenCanvas.width = this.width, this.hiddenCanvas.height = this.height), this.skullImage || (this.skullImage = document.getElementById("Skull")), this.dollarImage || (this.dollarImage = document.getElementById("Dollar")), this.revealed && (this.imageThickness = Math.min(this.imageThickness + 10 / 60, this.width * 2)), !this.isMarkedForDeath && (this.drawing = vo("left"), this.drawing && !this.focused && Ic(this) && this.lines.push([{
                x: qt.x - this.x,
                y: qt.y - this.y
            }]), this.focused = Ic(this))
        },
        render() {
            if (!this.hiddenCanvas) return;
            const t = this.hiddenCanvas.getContext("2d");
            t.clearRect(0, 0, this.hiddenCanvas.width, this.hiddenCanvas.height), t.save(), this.revealed && (t.globalCompositeOperation = "source-over", t.strokeStyle = "#BBBBBB", t.lineWidth = this.imageThickness, this.lines.forEach(e => {
                t.beginPath(), t.moveTo(e[0].x, e[0].y), e.forEach(n => {
                    t.lineTo(n.x, n.y)
                }), t.stroke()
            }), t.globalCompositeOperation = "source-in", this.color.toLowerCase() === "red" && this.skullImage ? t.drawImage(this.skullImage, 0, 0, this.width, this.height) : this.color.toLowerCase() === "green" && this.dollarImage && t.drawImage(this.dollarImage, 0, 0, this.width, this.height)), t.globalCompositeOperation = "destination-over", t.strokeStyle = "#BBBBBB", t.lineWidth = this.thickness, this.lines.forEach(e => {
                t.beginPath(), t.moveTo(e[0].x, e[0].y), e.forEach(n => {
                    t.lineTo(n.x, n.y)
                }), t.stroke()
            }), t.restore(), Hi().drawImage(this.hiddenCanvas, this.x, this.y)
        }
    },
    k1 = mt.View.extend({
        template: Ze.template(E1),
        className: "Scratch",
        model: new _1,
        events: {
            "click .grid-cell": "cellClicked"
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
            }
        },
        initialize() {
            this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        update() {
            const t = this.model.get("isMarkedForDeath");
            this.model.get("choices").forEach((e, n) => {
                const i = this.sprites.find(o => o.index === n);
                i && (i.color = e.color, i.isMarkedForDeath = t)
            })
        },
        onRender() {
            this.stickit()
        },
        sprites: [],
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext);
            const t = this;
            for (let e = 0; e < t.sprites.length; e++) GC(t.sprites[e]), t.sprites[e].ttl = 0;
            t.gameLoop.update(1 / 60), t.gameLoop.stop()
        },
        onAttach() {
            const t = this;
            Do("scratch"), Al(), this.gameLoop = Po({
                fps: 60,
                update(o) {
                    t.sprites.forEach(h => h.update(o)), t.sprites = t.sprites.filter(h => h.isAlive())
                },
                render(o) {
                    t.sprites.forEach(h => h.render(o))
                }
            });
            const e = 117,
                n = 372,
                i = 14;
            for (let o = 0; o < 3; o++)
                for (let h = 0; h < 3; h++) {
                    const m = Gn(S1);
                    m.x = e + h * (m.width + i), m.y = n + o * (m.height + i), m.index = 3 * o + h, m.onRevealed = E => {
                        t.triggerMethod("client:message", {
                            action: "scratch",
                            index: E
                        })
                    }, xh(m), t.sprites.push(m)
                }
            this.gameLoop.start(), this.update(), this.onResize()
        },
        onResize() {
            const t = Jt(),
                e = this.$el,
                n = parseInt(Me(".playerTopBar").innerHeight(), 10),
                i = t.width,
                o = t.height,
                h = Math.min(e.width(), i),
                m = Math.max(Me(window).innerHeight() - n, 250),
                E = Math.min(h / i, m / o),
                k = i * E,
                A = o * E;
            t.style.width = `${k}px`, t.style.height = `${A}px`
        }
    }),
    T1 = `<div>\r
    <canvas id="phone" class="canvas phone" width=825 height=972></canvas>\r
    <button id="reset" class="button reset">Reset</button>\r
    <div class="visuallyhidden">\r
    	<img id="fingerStop" src="main/pp6/triviadeath2/triviadeath2/telephone_0_fingerStop.png"/>\r
    	<img id="fingerWheel" src="main/pp6/triviadeath2/triviadeath2/telephone_1_fingerWheel.png"/>\r
    	<img id="numberPlate" src="main/pp6/triviadeath2/triviadeath2/telephone_2_numberPlate.png"/>\r
    </div>\r
</div>`,
    A1 = An.extend({
        defaults: {
            choices: [],
            classes: [],
            dialed: "",
            status: null
        }
    }),
    ns = function(e) {
        return e * (Math.PI / 180)
    },
    $h = 60,
    $a = [0, .178, .424, .608, .735, .824, .888, .934, .965, .986, .997, 1, .997, .988, .973, .951, .921, .883, .836, .779, .712, .632, .54, .436, .322, .201, .087, 0, .015, .032, .049, .066, .083, .098, .112, .125, .136, .145, .151, .154, .151, .144, .134, .121, .106, .09, .072, .054, .035, .017, 0],
    O1 = 13,
    R1 = {
        anchor: {
            x: .5,
            y: .5
        },
        x: 412,
        y: 486,
        width: 825,
        height: 972,
        color: "#333333",
        update(t) {
            this.image || (this.image = document.getElementById("numberPlate")), this.advance(t)
        }
    },
    I1 = {
        anchor: {
            x: .5,
            y: .5
        },
        x: 412,
        y: 485,
        width: 700,
        height: 700,
        color: "red",
        rotationSpeed: ns(300) / $h,
        bounceFrame: 0,
        onDown() {
            if (this.rotation > 0 || this.bounceFrame > 0) return;
            const t = {
                x: qt.x - this.x,
                y: qt.y - this.y
            };
            let e = Math.atan2(t.y, t.x);
            e < 0 ? e = Math.abs(e) : e = 2 * Math.PI - e;
            const n = Math.floor(e / ns(30));
            n === 0 || n === 11 || (this.startAngle = e, this.maxRotation = (n + 1) * ns(30), this.currentDigit = n, this.selected = !0)
        },
        onUp() {
            if (!this.selected) return;
            this.selected = !1;
            let t = Math.floor(this.rotation / ns(30));
            t === 0 && (this.bounceFrame = $a.length - 1), !(t === 0 || t === 11) && (t === 10 && (t = 0), this.dialNumber(t))
        },
        dialNumber() {},
        update(t) {
            if (this.image || (this.image = document.getElementById("fingerWheel")), this.selected) {
                const e = {
                    x: qt.x - this.x,
                    y: qt.y - this.y
                };
                let n = Math.atan2(e.y, e.x);
                n < 0 ? n = Math.abs(n) : n = 2 * Math.PI - n, this.pointAngle = n;
                let i = this.startAngle - n;
                i < 0 && (i += 2 * Math.PI), i > 0 && i < this.maxRotation && (this.rotation = i)
            }
            if (this.selected && !vo("left") && this.onUp(), this.selected || (this.rotation -= this.rotationSpeed, this.rotation = Math.max(0, this.rotation)), this.bounceFrame > 0) {
                const e = $a.length - 1 - this.bounceFrame;
                this.rotation = ns(O1 * $a[e]), this.bounceFrame += -1
            }
            this.advance(t)
        }
    },
    M1 = {
        anchor: {
            x: .5,
            y: .5
        },
        x: 412,
        y: 485,
        width: 700,
        height: 700,
        color: "gray",
        update(t) {
            this.image || (this.image = document.getElementById("fingerStop")), this.advance(t)
        }
    },
    D1 = {
        y: 75,
        type: "dialed",
        val: "",
        status: !1,
        flashFrames: 0,
        flash: !0,
        update(t) {
            this.status ? (this.flashFrames += -1, this.flashFrames < 0 && (this.flash = !this.flash, this.flashFrames = 20)) : this.flash = !1, this.advance(t)
        },
        render() {
            if (this.flash) return;
            const t = this.status || this.val,
                e = Hi();
            e.save(), e.font = "48px nokian11regular", e.fillStyle = "#6b8d45", e.textAlign = "center", e.fillText(t, Jt().width * .5 + 1, this.y + 2), e.fillStyle = "#1c3c29", e.textAlign = "center", e.fillText(t, Jt().width * .5, this.y), e.restore()
        }
    },
    L1 = mt.View.extend({
        template: Ze.template(T1),
        className: "Dial",
        model: new A1,
        events: {
            "click #reset": "sendHangup"
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
            }
        },
        initialize() {
            this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        update() {
            const t = this.sprites.find(i => i.type === "dialed"),
                e = this.model.get("dialed");
            let n = this.model.get("status") || "";
            n.toLowerCase() === "busy" && (n = "NUMBER BUSY"), n.toLowerCase() === "connected" && (n = "CONNECTED"), n.toLowerCase() === "wrongnumber" && (n = "WRONG NUMBER"), t && (t.val = e, t.status = n)
        },
        onRender() {
            this.stickit()
        },
        sprites: [],
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext);
            const t = this;
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            t.gameLoop.update(1 / 60), t.gameLoop.stop()
        },
        sendHangup() {
            const t = this;
            t.triggerMethod("client:message", {
                action: "hangup"
            }), t.sprites.find(e => e.type === "dialed").val = "", Me(".reset").blur()
        },
        onAttach() {
            const t = this;
            Do("phone"), Al(), this.gameLoop = Po({
                fps: $h,
                update(h) {
                    t.sprites.forEach(m => m.update(h)), t.sprites = t.sprites.filter(m => m.isAlive())
                },
                render(h) {
                    t.sprites.forEach(m => m.render(h))
                }
            });
            const e = Gn(R1);
            t.sprites.push(e);
            const n = Gn(I1);
            n.dialNumber = function(m) {
                const E = [],
                    k = m || 10;
                for (let A = 0; A < k && !(A > 10); A++) E.push(20), E.push(120);
                Ot.vibrate(E), t.triggerMethod("client:message", {
                    action: "dial",
                    num: m
                }), t.sprites.find(A => A.type === "dialed").val += m
            }, xh(n), t.sprites.push(n);
            const i = Gn(M1);
            t.sprites.push(i);
            const o = Gn(D1);
            t.sprites.push(o), this.gameLoop.start(), Jt().addEventListener("mouseleave", h => {
                n.onUp(h)
            }), this.update(), this.onResize()
        },
        onResize() {
            const t = Jt(),
                e = this.$el,
                n = parseInt(Me(".playerTopBar").innerHeight() + Me(".button.reset").innerHeight() + 10, 10),
                i = t.width,
                o = t.height,
                h = Math.min(e.width(), i),
                m = Math.max(Me(window).innerHeight() - n, 250),
                E = Math.min(h / i, m / o),
                k = i * E,
                A = o * E;
            t.style.width = `${k}px`, t.style.height = `${A}px`
        }
    }),
    P1 = `<div>\r
    <div class="prompt">Slide your chip to pick a spot to drop.</div>\r
    <canvas id="drop" class="canvas drop" width=640 height=640></canvas>\r
    <div class="visuallyhidden">\r
        <img id="ChipGreen" src='main/pp6/triviadeath2/triviadeath2/ChipGreen.png'/>\r
        <img id="ChipPurple" src='main/pp6/triviadeath2/triviadeath2/ChipPurple.png'/>\r
        <img id="ChipBlue" src='main/pp6/triviadeath2/triviadeath2/ChipBlue.png'/>\r
        <img id="ChipGray" src='main/pp6/triviadeath2/triviadeath2/ChipGray.png'/>\r
        <img id="ChipYellow" src='main/pp6/triviadeath2/triviadeath2/ChipYellow.png'/>\r
        <img id="ChipOrange" src='main/pp6/triviadeath2/triviadeath2/ChipOrange.png'/>\r
        <img id="ChipRed" src='main/pp6/triviadeath2/triviadeath2/ChipRed.png'/>\r
        <img id="ChipPink" src='main/pp6/triviadeath2/triviadeath2/ChipPink.png'/>\r
    </div>\r
</div>`,
    N1 = An.extend({
        defaults: {
            classes: []
        }
    }),
    Ln = 128,
    V1 = {
        anchor: {
            x: .5,
            y: .5
        },
        width: Ln,
        height: Ln,
        x: 320,
        y: .5 * Ln,
        color: "white",
        dropped() {},
        isDropped: !1,
        update(t) {
            this.selected && !vo("left") && this.onUp(), !this.isDropped && vo("left") && (this.x = Math.max(.5 * Ln, Math.min(Jt().width - .5 * Ln, qt.x)), this.selected = !0), this.dollColor && !this.image && (this.image = document.getElementById(`Chip${this.dollColor}`)), this.advance(t)
        },
        onUp() {
            !this.selected || (this.selected = !1, this.ddy = 9 * 60, this.isDropped = !0, this.dropped())
        },
        render() {
            if (this.draw(), !this.isDropped) {
                const t = Hi();
                t.save(), t.translate(this.x, this.y + .5 * Ln), t.fillStyle = this.color, t.beginPath(), t.moveTo(-1 / 6 * this.width, 0), t.lineTo(1 / 6 * this.width, 0), t.lineTo(0, 1 / 6 * Ln), t.fill(), t.restore()
            }
        }
    },
    B1 = {
        anchor: {
            x: .5,
            y: .5
        },
        width: Ln,
        height: 20,
        color: "black"
    },
    $1 = mt.View.extend({
        template: Ze.template(P1),
        className: "Drop",
        model: new N1,
        events: {
            "click .grid-cell": "cellClicked"
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
            }
        },
        initialize() {
            this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext)
        },
        update() {},
        onRender() {
            this.stickit()
        },
        sprites: [],
        played: [],
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext);
            const t = this;
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            t.gameLoop.update(1 / 60), t.gameLoop.stop()
        },
        onAttach() {
            const t = this;
            Do("drop"), Al(), t.played = [], this.gameLoop = Po({
                fps: 60,
                update(i) {
                    t.sprites.forEach(o => o.update(i)), t.sprites = t.sprites.filter(o => o.isAlive())
                },
                render(i) {
                    t.sprites.forEach(o => o.render(i))
                }
            });
            for (let i = 0; i < t.sprites.length; i++) t.sprites[i].ttl = 0;
            const e = Gn(B1);
            e.x = Jt().width * .5, e.y = .5 * Ln, e.width = Jt().width - Ln, t.sprites.push(e);
            const n = Gn(V1);
            this.model.get("dollInfo") && (n.dollColor = this.model.get("dollInfo").id), n.dropped = function() {
                const o = .5 * Ln,
                    m = Jt().width - .5 * Ln - o;
                let E = Math.floor((n.x - o) / m * 100);
                E = Math.max(0, Math.min(100, E)), t.triggerMethod("client:message", {
                    action: "drop",
                    value: E
                })
            }, t.sprites.push(n), t.gameLoop.start(), Jt().addEventListener("mouseleave", i => {
                n.onUp(i)
            }), this.onResize()
        },
        onResize() {
            const t = document.getElementById("drop"),
                e = this.$el,
                n = parseInt(Me(".playerTopBar").innerHeight(), 10),
                i = t.width,
                o = t.height,
                h = Math.min(e.width(), i),
                m = Math.max(Me(window).innerHeight() - n, 250),
                E = Math.min(h / i, m / o),
                k = i * E,
                A = o * E;
            t.style.width = `${k}px`, t.style.height = `${A}px`
        }
    });
const Uc = function(e) {
        const n = e || "",
            i = n.replace(/\s/gi, "").split("");
        for (let o = i.length; o > 0; o--) {
            const h = Math.floor(Math.random() * (o + 1)),
                m = i[o];
            i[o] = i[h], i[h] = m
        }
        for (let o = 0; o < n.length; o++) n.charAt(o) === " " && i.splice(o, 0, " ");
        return i.join("")
    },
    F1 = h1.extend({
        sessionModulePrefix: "TriviaDeath2",
        getGameLayout(t) {
            switch (t) {
                case "MakeSingleChoice":
                    return this.setLayout(w1);
                case "Grid":
                    return this.setLayout(x1);
                case "Scratch":
                    return this.setLayout(k1);
                case "Dial":
                    return this.setLayout(L1);
                case "Drop":
                    return this.setLayout($1);
                default:
                    return -1
            }
        },
        isPostGameLobby(t) {
            return t.prompt.html === "What do you want to do?"
        },
        parseBlob(t) {
            const e = t;
            if (e.classes = e.classes || [], e.playerInfo = e.playerInfo || {}, e.playerInfo.classes = e.playerInfo.classes || [], e.isAudience && (e.playerInfo.username = "AUDIENCE", e.dollInfo = {
                    id: "Audience"
                }), e.roundType && e.classes.push(e.roundType), e.dollInfo && e.dollInfo.id && (e.classes.indexOf(e.dollInfo.id) === -1 && e.classes.push(e.dollInfo.id), e.playerInfo.classes.indexOf(e.dollInfo.id) === -1 && e.playerInfo.classes.push(e.dollInfo.id)), e.state === "Gameplay" && (e.state = "Logo"), e.state === "MakeSingleChoice") {
                if (e.isAudience && (e.doneText = {
                        html: null
                    }, e.prompt && e.prompt.html === "Guess who will die and win money!" && (e.choiceId = "whowilldie")), e.isPlayer && e.chosen !== void 0 && e.doneText == null ? e.state = "Logo" : !Ze.isEmpty(e.doneText) && e.doneText.html !== null && (e.chosen = {
                        html: `<div class="chosenText">${e.doneText.html}</div>`
                    }, delete e.doneText), e.madness) {
                    if (e.madness === "Choices") {
                        e.choices = e.choices || [], e.choices = e.choices.map((n, i) => {
                            const o = n;
                            return o.key = o.key || i, o
                        });
                        for (let n = 1; n < 11; n++) e.choices.unshift({
                            text: "I'm not Crazy!",
                            index: -n,
                            key: -n,
                            action: "choose"
                        })
                    }
                    if (e.madness === "Scramble" || e.madness === "NowThatsWhatICallMadness") {
                        let n = e.prompt.text || e.prompt.html;
                        n = Me("<div />").html(n).text(), e.prompt.html = Uc(n), e.choices = e.choices.map(i => {
                            const o = i;
                            return o.text = Uc(i.text), o
                        })
                    }
                    if (e.madness === "BTTF" || e.madness === "NowThatsWhatICallMadness") {
                        let n = e.prompt.text || e.prompt.html;
                        n = Me("<div />").html(n).text();
                        let i = "";
                        for (let o = 0; o < n.length; o++) i += `<span class="disappear-${Math.floor(Math.random()*5)}">`, i += n[o], i += "</span>";
                        e.prompt = {
                            html: i
                        }, e.choices = e.choices.map(o => {
                            const h = o;
                            let m;
                            if (h.text) {
                                m = h.text;
                                let E = "";
                                for (let k = 0; k < m.length; k++) E += `<span class="disappear-${Math.floor(Math.random()*5)}">`, E += m[k], E += "</span>";
                                h.html = E, h.text = void 0
                            }
                            return h
                        })
                    }
                    e.classes.push(e.madness)
                }
                if (this.isPostGameLobby(e) && e.artifact && e.choices.push({
                        action: "artifact",
                        html: "",
                        className: "artifactButton"
                    }), e.choiceType === "Math") {
                    const n = e.prompt.html,
                        i = n.match(/[0-9]+/g);
                    if (i) {
                        const o = n.match(/[+-/*]/);
                        if (o) {
                            const h = o[0];
                            let m = "";
                            h === "+" ? m = " plus " : h === "-" ? m = " minus " : h === "*" ? m = " multiplied by " : h === "/" && (m = " divided by ");
                            const E = i[0] + m + i[1];
                            let k = "";
                            k += `<span aria-hidden="true">${n}</span>`, k += `<span class="textDescriptions">${E}</span>`, e.prompt.html = k, e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                                id: e.choiceId,
                                category: "Prompt",
                                text: E
                            })
                        }
                    }
                }
                e.choiceType === "Rules" && (e.textDescriptions = e.textDescriptions || [], e.textDescriptions.push({
                    id: e.choiceId,
                    category: "Prompt",
                    text: e.prompt.html
                }))
            }
            return e
        }
    });
m1({
    MainView: F1
});
//# sourceMappingURL=434dfef5.js.map