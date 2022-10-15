var Oh = Object.defineProperty;
var Ih = (t, e, n) => e in t ? Oh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var at = (t, e, n) => (Ih(t, typeof e != "symbol" ? e + "" : e, n), n);
const Rh = function() {
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
Rh();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Lh(t) {
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
var Bi = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            a = Array.prototype,
            f = Object.prototype,
            m = Function.prototype,
            _ = a.push,
            k = a.slice,
            I = f.toString,
            L = f.hasOwnProperty,
            B = Array.isArray,
            J = Object.keys,
            ie = m.bind,
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
                        return function(O) {
                            return l.call(g, O)
                        };
                    case 2:
                        return function(O, M) {
                            return l.call(g, O, M)
                        };
                    case 3:
                        return function(O, M, N) {
                            return l.call(g, O, M, N)
                        };
                    case 4:
                        return function(O, M, N, te) {
                            return l.call(g, O, M, N, te)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            q = function(l, g, S) {
                return l == null ? v.identity : v.isFunction(l) ? P(l, g, S) : v.isObject(l) ? v.matcher(l) : v.property(l)
            };
        v.iteratee = function(l, g) {
            return q(l, g, 1 / 0)
        };
        var ae = function(l, g) {
                return function(S) {
                    var O = arguments.length;
                    if (O < 2 || S == null) return S;
                    for (var M = 1; M < O; M++)
                        for (var N = arguments[M], te = l(N), Se = te.length, he = 0; he < Se; he++) {
                            var Re = te[he];
                            (!g || S[Re] === void 0) && (S[Re] = N[Re])
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
            var O, M;
            if (Ae(l))
                for (O = 0, M = l.length; O < M; O++) g(l[O], O, l);
            else {
                var N = v.keys(l);
                for (O = 0, M = N.length; O < M; O++) g(l[N[O]], N[O], l)
            }
            return l
        }, v.map = v.collect = function(l, g, S) {
            g = q(g, S);
            for (var O = !Ae(l) && v.keys(l), M = (O || l).length, N = Array(M), te = 0; te < M; te++) {
                var Se = O ? O[te] : te;
                N[te] = g(l[Se], Se, l)
            }
            return N
        };

        function Me(l) {
            function g(S, O, M, N, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var he = N ? N[te] : te;
                    M = O(M, S[he], he, S)
                }
                return M
            }
            return function(S, O, M, N) {
                O = P(O, N, 4);
                var te = !Ae(S) && v.keys(S),
                    Se = (te || S).length,
                    he = l > 0 ? 0 : Se - 1;
                return arguments.length < 3 && (M = S[te ? te[he] : he], he += l), g(S, O, M, te, he, Se)
            }
        }
        v.reduce = v.foldl = v.inject = Me(1), v.reduceRight = v.foldr = Me(-1), v.find = v.detect = function(l, g, S) {
            var O;
            if (Ae(l) ? O = v.findIndex(l, g, S) : O = v.findKey(l, g, S), O !== void 0 && O !== -1) return l[O]
        }, v.filter = v.select = function(l, g, S) {
            var O = [];
            return g = q(g, S), v.each(l, function(M, N, te) {
                g(M, N, te) && O.push(M)
            }), O
        }, v.reject = function(l, g, S) {
            return v.filter(l, v.negate(q(g)), S)
        }, v.every = v.all = function(l, g, S) {
            g = q(g, S);
            for (var O = !Ae(l) && v.keys(l), M = (O || l).length, N = 0; N < M; N++) {
                var te = O ? O[N] : N;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, g, S) {
            g = q(g, S);
            for (var O = !Ae(l) && v.keys(l), M = (O || l).length, N = 0; N < M; N++) {
                var te = O ? O[N] : N;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, g, S, O) {
            return Ae(l) || (l = v.values(l)), (typeof S != "number" || O) && (S = 0), v.indexOf(l, g, S) >= 0
        }, v.invoke = function(l, g) {
            var S = k.call(arguments, 2),
                O = v.isFunction(g);
            return v.map(l, function(M) {
                var N = O ? g : M[g];
                return N == null ? N : N.apply(M, S)
            })
        }, v.pluck = function(l, g) {
            return v.map(l, v.property(g))
        }, v.where = function(l, g) {
            return v.filter(l, v.matcher(g))
        }, v.findWhere = function(l, g) {
            return v.find(l, v.matcher(g))
        }, v.max = function(l, g, S) {
            var O = -1 / 0,
                M = -1 / 0,
                N, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : v.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N > O && (O = N)
            } else g = q(g, S), v.each(l, function(Re, Le, rt) {
                te = g(Re, Le, rt), (te > M || te === -1 / 0 && O === -1 / 0) && (O = Re, M = te)
            });
            return O
        }, v.min = function(l, g, S) {
            var O = 1 / 0,
                M = 1 / 0,
                N, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : v.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N < O && (O = N)
            } else g = q(g, S), v.each(l, function(Re, Le, rt) {
                te = g(Re, Le, rt), (te < M || te === 1 / 0 && O === 1 / 0) && (O = Re, M = te)
            });
            return O
        }, v.shuffle = function(l) {
            for (var g = Ae(l) ? l : v.values(l), S = g.length, O = Array(S), M = 0, N; M < S; M++) N = v.random(0, M), N !== M && (O[M] = O[N]), O[N] = g[M];
            return O
        }, v.sample = function(l, g, S) {
            return g == null || S ? (Ae(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, g))
        }, v.sortBy = function(l, g, S) {
            return g = q(g, S), v.pluck(v.map(l, function(O, M, N) {
                return {
                    value: O,
                    index: M,
                    criteria: g(O, M, N)
                }
            }).sort(function(O, M) {
                var N = O.criteria,
                    te = M.criteria;
                if (N !== te) {
                    if (N > te || N === void 0) return 1;
                    if (N < te || te === void 0) return -1
                }
                return O.index - M.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, S, O) {
                var M = {};
                return S = q(S, O), v.each(g, function(N, te) {
                    var Se = S(N, te, g);
                    l(M, N, Se)
                }), M
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
            g = q(g, S);
            var O = [],
                M = [];
            return v.each(l, function(N, te, Se) {
                (g(N, te, Se) ? O : M).push(N)
            }), [O, M]
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
        var Be = function(l, g, S, O) {
            for (var M = [], N = 0, te = O || 0, Se = Ee(l); te < Se; te++) {
                var he = l[te];
                if (Ae(he) && (v.isArray(he) || v.isArguments(he))) {
                    g || (he = Be(he, g, S));
                    var Re = 0,
                        Le = he.length;
                    for (M.length += Le; Re < Le;) M[N++] = he[Re++]
                } else S || (M[N++] = he)
            }
            return M
        };
        v.flatten = function(l, g) {
            return Be(l, g, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, g, S, O) {
            v.isBoolean(g) || (O = S, S = g, g = !1), S != null && (S = q(S, O));
            for (var M = [], N = [], te = 0, Se = Ee(l); te < Se; te++) {
                var he = l[te],
                    Re = S ? S(he, te, l) : he;
                g ? ((!te || N !== Re) && M.push(he), N = Re) : S ? v.contains(N, Re) || (N.push(Re), M.push(he)) : v.contains(M, he) || M.push(he)
            }
            return M
        }, v.union = function() {
            return v.uniq(Be(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var g = [], S = arguments.length, O = 0, M = Ee(l); O < M; O++) {
                var N = l[O];
                if (!v.contains(g, N)) {
                    for (var te = 1; te < S && v.contains(arguments[te], N); te++);
                    te === S && g.push(N)
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
            for (var g = l && v.max(l, Ee).length || 0, S = Array(g), O = 0; O < g; O++) S[O] = v.pluck(l, O);
            return S
        }, v.object = function(l, g) {
            for (var S = {}, O = 0, M = Ee(l); O < M; O++) g ? S[l[O]] = g[O] : S[l[O][0]] = l[O][1];
            return S
        };

        function Y(l) {
            return function(g, S, O) {
                S = q(S, O);
                for (var M = Ee(g), N = l > 0 ? 0 : M - 1; N >= 0 && N < M; N += l)
                    if (S(g[N], N, g)) return N;
                return -1
            }
        }
        v.findIndex = Y(1), v.findLastIndex = Y(-1), v.sortedIndex = function(l, g, S, O) {
            S = q(S, O, 1);
            for (var M = S(g), N = 0, te = Ee(l); N < te;) {
                var Se = Math.floor((N + te) / 2);
                S(l[Se]) < M ? N = Se + 1 : te = Se
            }
            return N
        };

        function je(l, g, S) {
            return function(O, M, N) {
                var te = 0,
                    Se = Ee(O);
                if (typeof N == "number") l > 0 ? te = N >= 0 ? N : Math.max(N + Se, te) : Se = N >= 0 ? Math.min(N + 1, Se) : N + Se + 1;
                else if (S && N && Se) return N = S(O, M), O[N] === M ? N : -1;
                if (M !== M) return N = g(k.call(O, te, Se), v.isNaN), N >= 0 ? N + te : -1;
                for (N = l > 0 ? te : Se - 1; N >= 0 && N < Se; N += l)
                    if (O[N] === M) return N;
                return -1
            }
        }
        v.indexOf = je(1, v.findIndex, v.sortedIndex), v.lastIndexOf = je(-1, v.findLastIndex), v.range = function(l, g, S) {
            g == null && (g = l || 0, l = 0), S = S || 1;
            for (var O = Math.max(Math.ceil((g - l) / S), 0), M = Array(O), N = 0; N < O; N++, l += S) M[N] = l;
            return M
        };
        var G = function(l, g, S, O, M) {
            if (!(O instanceof g)) return l.apply(S, M);
            var N = se(l.prototype),
                te = l.apply(N, M);
            return v.isObject(te) ? te : N
        };
        v.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                O = function() {
                    return G(l, O, g, this, S.concat(k.call(arguments)))
                };
            return O
        }, v.partial = function(l) {
            var g = k.call(arguments, 1),
                S = function() {
                    for (var O = 0, M = g.length, N = Array(M), te = 0; te < M; te++) N[te] = g[te] === v ? arguments[O++] : g[te];
                    for (; O < arguments.length;) N.push(arguments[O++]);
                    return G(l, S, this, this, N)
                };
            return S
        }, v.bindAll = function(l) {
            var g, S = arguments.length,
                O;
            if (S <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < S; g++) O = arguments[g], l[O] = v.bind(l[O], l);
            return l
        }, v.memoize = function(l, g) {
            var S = function(O) {
                var M = S.cache,
                    N = "" + (g ? g.apply(this, arguments) : O);
                return v.has(M, N) || (M[N] = l.apply(this, arguments)), M[N]
            };
            return S.cache = {}, S
        }, v.delay = function(l, g) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, g)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, g, S) {
            var O, M, N, te = null,
                Se = 0;
            S || (S = {});
            var he = function() {
                Se = S.leading === !1 ? 0 : v.now(), te = null, N = l.apply(O, M), te || (O = M = null)
            };
            return function() {
                var Re = v.now();
                !Se && S.leading === !1 && (Se = Re);
                var Le = g - (Re - Se);
                return O = this, M = arguments, Le <= 0 || Le > g ? (te && (clearTimeout(te), te = null), Se = Re, N = l.apply(O, M), te || (O = M = null)) : !te && S.trailing !== !1 && (te = setTimeout(he, Le)), N
            }
        }, v.debounce = function(l, g, S) {
            var O, M, N, te, Se, he = function() {
                var Re = v.now() - te;
                Re < g && Re >= 0 ? O = setTimeout(he, g - Re) : (O = null, S || (Se = l.apply(N, M), O || (N = M = null)))
            };
            return function() {
                N = this, M = arguments, te = v.now();
                var Re = S && !O;
                return O || (O = setTimeout(he, g)), Re && (Se = l.apply(N, M), N = M = null), Se
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
                for (var S = g, O = l[g].apply(this, arguments); S--;) O = l[S].call(this, O);
                return O
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
                O = l.constructor,
                M = v.isFunction(O) && O.prototype || f,
                N = "constructor";
            for (v.has(l, N) && !v.contains(g, N) && g.push(N); S--;) N = Te[S], N in l && l[N] !== M[N] && !v.contains(g, N) && g.push(N)
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
            for (var g = v.keys(l), S = g.length, O = Array(S), M = 0; M < S; M++) O[M] = l[g[M]];
            return O
        }, v.mapObject = function(l, g, S) {
            g = q(g, S);
            for (var O = v.keys(l), M = O.length, N = {}, te, Se = 0; Se < M; Se++) te = O[Se], N[te] = g(l[te], te, l);
            return N
        }, v.pairs = function(l) {
            for (var g = v.keys(l), S = g.length, O = Array(S), M = 0; M < S; M++) O[M] = [g[M], l[g[M]]];
            return O
        }, v.invert = function(l) {
            for (var g = {}, S = v.keys(l), O = 0, M = S.length; O < M; O++) g[l[S[O]]] = S[O];
            return g
        }, v.functions = v.methods = function(l) {
            var g = [];
            for (var S in l) v.isFunction(l[S]) && g.push(S);
            return g.sort()
        }, v.extend = ae(v.allKeys), v.extendOwn = v.assign = ae(v.keys), v.findKey = function(l, g, S) {
            g = q(g, S);
            for (var O = v.keys(l), M, N = 0, te = O.length; N < te; N++)
                if (M = O[N], g(l[M], M, l)) return M
        }, v.pick = function(l, g, S) {
            var O = {},
                M = l,
                N, te;
            if (M == null) return O;
            v.isFunction(g) ? (te = v.allKeys(M), N = P(g, S)) : (te = Be(arguments, !1, !1, 1), N = function(rt, xt, rn) {
                return xt in rn
            }, M = Object(M));
            for (var Se = 0, he = te.length; Se < he; Se++) {
                var Re = te[Se],
                    Le = M[Re];
                N(Le, Re, M) && (O[Re] = Le)
            }
            return O
        }, v.omit = function(l, g, S) {
            if (v.isFunction(g)) g = v.negate(g);
            else {
                var O = v.map(Be(arguments, !1, !1, 1), String);
                g = function(M, N) {
                    return !v.contains(O, N)
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
                O = S.length;
            if (l == null) return !O;
            for (var M = Object(l), N = 0; N < O; N++) {
                var te = S[N];
                if (g[te] !== M[te] || !(te in M)) return !1
            }
            return !0
        };
        var ye = function(l, g, S, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof v && (l = l._wrapped), g instanceof v && (g = g._wrapped);
            var M = I.call(l);
            if (M !== I.call(g)) return !1;
            switch (M) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + g;
                case "[object Number]":
                    return +l != +l ? +g != +g : +l == 0 ? 1 / +l === 1 / g : +l == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +g
            }
            var N = M === "[object Array]";
            if (!N) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    Se = g.constructor;
                if (te !== Se && !(v.isFunction(te) && te instanceof te && v.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
            }
            S = S || [], O = O || [];
            for (var he = S.length; he--;)
                if (S[he] === l) return O[he] === g;
            if (S.push(l), O.push(g), N) {
                if (he = l.length, he !== g.length) return !1;
                for (; he--;)
                    if (!ye(l[he], g[he], S, O)) return !1
            } else {
                var Re = v.keys(l),
                    Le;
                if (he = Re.length, v.keys(g).length !== he) return !1;
                for (; he--;)
                    if (Le = Re[he], !(v.has(g, Le) && ye(l[Le], g[Le], S, O))) return !1
            }
            return S.pop(), O.pop(), !0
        };
        v.isEqual = function(l, g) {
            return ye(l, g)
        }, v.isEmpty = function(l) {
            return l == null ? !0 : Ae(l) && (v.isArray(l) || v.isString(l) || v.isArguments(l)) ? l.length === 0 : v.keys(l).length === 0
        }, v.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, v.isArray = B || function(l) {
            return I.call(l) === "[object Array]"
        }, v.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            v["is" + l] = function(g) {
                return I.call(g) === "[object " + l + "]"
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
            return l === !0 || l === !1 || I.call(l) === "[object Boolean]"
        }, v.isNull = function(l) {
            return l === null
        }, v.isUndefined = function(l) {
            return l === void 0
        }, v.has = function(l, g) {
            return l != null && L.call(l, g)
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
            var O = Array(Math.max(0, l));
            g = P(g, S, 1);
            for (var M = 0; M < l; M++) O[M] = g(M);
            return O
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
                var g = function(N) {
                        return l[N]
                    },
                    S = "(?:" + v.keys(l).join("|") + ")",
                    O = RegExp(S),
                    M = RegExp(S, "g");
                return function(N) {
                    return N = N == null ? "" : "" + N, O.test(N) ? N.replace(M, g) : N
                }
            };
        v.escape = ke(ue), v.unescape = ke(_e), v.result = function(l, g, S) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = S), v.isFunction(O) ? O.call(l) : O
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
        var Qe = /(.)^/,
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
        v.template = function(l, g, S) {
            !g && S && (g = S), g = v.defaults({}, g, v.templateSettings);
            var O = RegExp([(g.escape || Qe).source, (g.interpolate || Qe).source, (g.evaluate || Qe).source].join("|") + "|$", "g"),
                M = 0,
                N = "__p+='";
            l.replace(O, function(Re, Le, rt, xt, rn) {
                return N += l.slice(M, rn).replace(Bt, Ht), M = rn + Re.length, Le ? N += `'+
((__t=(` + Le + `))==null?'':_.escape(__t))+
'` : rt ? N += `'+
((__t=(` + rt + `))==null?'':__t)+
'` : xt && (N += `';
` + xt + `
__p+='`), Re
            }), N += `';
`, g.variable || (N = `with(obj||{}){
` + N + `}
`), N = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + N + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", N)
            } catch (Re) {
                throw Re.source = N, Re
            }
            var Se = function(Re) {
                    return te.call(this, Re, v)
                },
                he = g.variable || "obj";
            return Se.source = "function(" + he + `){
` + N + "}", Se
        }, v.chain = function(l) {
            var g = v(l);
            return g._chain = !0, g
        };
        var E = function(l, g) {
            return l._chain ? v(g).chain() : g
        };
        v.mixin = function(l) {
            v.each(v.functions(l), function(g) {
                var S = v[g] = l[g];
                v.prototype[g] = function() {
                    var O = [this._wrapped];
                    return _.apply(O, arguments), E(this, S.apply(v, O))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = a[l];
            v.prototype[l] = function() {
                var S = this._wrapped;
                return g.apply(S, arguments), (l === "shift" || l === "splice") && S.length === 0 && delete S[0], E(this, S)
            }
        }), v.each(["concat", "join", "slice"], function(l) {
            var g = a[l];
            v.prototype[l] = function() {
                return E(this, g.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(vt)
})(Bi, Bi.exports);
const We = Bi.exports;
var ta = {
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
var xl;

function Lc() {
    return xl || (xl = 1, function(t) {
        (function(e, n) {
            t.exports = e.document ? n(e, !0) : function(i) {
                if (!i.document) throw new Error("jQuery requires a window with a document");
                return n(i)
            }
        })(typeof window < "u" ? window : vt, function(e, n) {
            var i = [],
                a = Object.getPrototypeOf,
                f = i.slice,
                m = i.flat ? function(r) {
                    return i.flat.call(r)
                } : function(r) {
                    return i.concat.apply([], r)
                },
                _ = i.push,
                k = i.indexOf,
                I = {},
                L = I.toString,
                B = I.hasOwnProperty,
                J = B.toString,
                ie = J.call(Object),
                K = {},
                re = function(s) {
                    return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
                },
                v = function(s) {
                    return s != null && s === s.window
                },
                P = e.document,
                q = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function ae(r, s, u) {
                u = u || P;
                var p, w, x = u.createElement("script");
                if (x.text = r, s)
                    for (p in q) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
                u.head.appendChild(x).parentNode.removeChild(x)
            }

            function se(r) {
                return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? I[L.call(r)] || "object" : typeof r
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
                push: _,
                sort: i.sort,
                splice: i.splice
            }, d.extend = d.fn.extend = function() {
                var r, s, u, p, w, x, T = arguments[0] || {},
                    z = 1,
                    U = arguments.length,
                    Z = !1;
                for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === U && (T = this, z--); z < U; z++)
                    if ((r = arguments[z]) != null)
                        for (s in r) p = r[s], !(s === "__proto__" || T === p) && (Z && p && (d.isPlainObject(p) || (w = Array.isArray(p))) ? (u = T[s], w && !Array.isArray(u) ? x = [] : !w && !d.isPlainObject(u) ? x = {} : x = u, w = !1, T[s] = d.extend(Z, x, p)) : p !== void 0 && (T[s] = p));
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
                    return !r || L.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = B.call(s, "constructor") && s.constructor, typeof u == "function" && J.call(u) === ie) : !0)
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
                    return r != null && (Ee(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : _.call(u, r)), u
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
                support: K
            }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
                I["[object " + s + "]"] = s.toLowerCase()
            });

            function Ee(r) {
                var s = !!r && "length" in r && r.length,
                    u = se(r);
                return re(r) || v(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
            }
            var Ae = function(r) {
                var s, u, p, w, x, T, z, U, Z, le, be, ne, ce, He, ot, Fe, zt, Vt, un, _t = "sizzle" + 1 * new Date,
                    nt = r.document,
                    on = 0,
                    ft = 0,
                    Lt = Ji(),
                    Ti = Ji(),
                    Ki = Ji(),
                    hn = Ji(),
                    Zn = function(R, j) {
                        return R === j && (be = !0), 0
                    },
                    ei = {}.hasOwnProperty,
                    an = [],
                    Mn = an.pop,
                    vn = an.push,
                    Cn = an.push,
                    Ts = an.slice,
                    ti = function(R, j) {
                        for (var X = 0, de = R.length; X < de; X++)
                            if (R[X] === j) return X;
                        return -1
                    },
                    Gr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    gt = "[\\x20\\t\\r\\n\\f]",
                    ni = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    As = "\\[" + gt + "*(" + ni + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ni + "))|)" + gt + "*\\]",
                    Hr = ":(" + ni + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + As + ")*)|.*)\\)|)",
                    Os = new RegExp(gt + "+", "g"),
                    Ai = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                    Is = new RegExp("^" + gt + "*," + gt + "*"),
                    Rs = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                    Uo = new RegExp(gt + "|>"),
                    Go = new RegExp(Hr),
                    Ho = new RegExp("^" + ni + "$"),
                    Yi = {
                        ID: new RegExp("^#(" + ni + ")"),
                        CLASS: new RegExp("^\\.(" + ni + ")"),
                        TAG: new RegExp("^(" + ni + "|[*])"),
                        ATTR: new RegExp("^" + As),
                        PSEUDO: new RegExp("^" + Hr),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Gr + ")$", "i"),
                        needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    qo = /HTML$/i,
                    Wo = /^(?:input|select|textarea|button)$/i,
                    Xo = /^h\d$/i,
                    Oi = /^[^{]+\{\s*\[native \w/,
                    Ko = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    qr = /[+~]/,
                    Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                    xn = function(R, j) {
                        var X = "0x" + R.slice(1) - 65536;
                        return j || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                    },
                    Wr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Ls = function(R, j) {
                        return j ? R === "\0" ? "\uFFFD" : R.slice(0, -1) + "\\" + R.charCodeAt(R.length - 1).toString(16) + " " : "\\" + R
                    },
                    Ds = function() {
                        ne()
                    },
                    Yo = tr(function(R) {
                        return R.disabled === !0 && R.nodeName.toLowerCase() === "fieldset"
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    Cn.apply(an = Ts.call(nt.childNodes), nt.childNodes), an[nt.childNodes.length].nodeType
                } catch {
                    Cn = {
                        apply: an.length ? function(j, X) {
                            vn.apply(j, Ts.call(X))
                        } : function(j, X) {
                            for (var de = j.length, ee = 0; j[de++] = X[ee++];);
                            j.length = de - 1
                        }
                    }
                }

                function St(R, j, X, de) {
                    var ee, me, xe, Oe, De, ze, Ge, Ye = j && j.ownerDocument,
                        ht = j ? j.nodeType : 9;
                    if (X = X || [], typeof R != "string" || !R || ht !== 1 && ht !== 9 && ht !== 11) return X;
                    if (!de && (ne(j), j = j || ce, ot)) {
                        if (ht !== 11 && (De = Ko.exec(R)))
                            if (ee = De[1]) {
                                if (ht === 9)
                                    if (xe = j.getElementById(ee)) {
                                        if (xe.id === ee) return X.push(xe), X
                                    } else return X;
                                else if (Ye && (xe = Ye.getElementById(ee)) && un(j, xe) && xe.id === ee) return X.push(xe), X
                            } else {
                                if (De[2]) return Cn.apply(X, j.getElementsByTagName(R)), X;
                                if ((ee = De[3]) && u.getElementsByClassName && j.getElementsByClassName) return Cn.apply(X, j.getElementsByClassName(ee)), X
                            } if (u.qsa && !hn[R + " "] && (!Fe || !Fe.test(R)) && (ht !== 1 || j.nodeName.toLowerCase() !== "object")) {
                            if (Ge = R, Ye = j, ht === 1 && (Uo.test(R) || Rs.test(R))) {
                                for (Ye = qr.test(R) && Xr(j.parentNode) || j, (Ye !== j || !u.scope) && ((Oe = j.getAttribute("id")) ? Oe = Oe.replace(Wr, Ls) : j.setAttribute("id", Oe = _t)), ze = T(R), me = ze.length; me--;) ze[me] = (Oe ? "#" + Oe : ":scope") + " " + er(ze[me]);
                                Ge = ze.join(",")
                            }
                            try {
                                return Cn.apply(X, Ye.querySelectorAll(Ge)), X
                            } catch {
                                hn(R, !0)
                            } finally {
                                Oe === _t && j.removeAttribute("id")
                            }
                        }
                    }
                    return U(R.replace(Ai, "$1"), j, X, de)
                }

                function Ji() {
                    var R = [];

                    function j(X, de) {
                        return R.push(X + " ") > p.cacheLength && delete j[R.shift()], j[X + " "] = de
                    }
                    return j
                }

                function dn(R) {
                    return R[_t] = !0, R
                }

                function yn(R) {
                    var j = ce.createElement("fieldset");
                    try {
                        return !!R(j)
                    } catch {
                        return !1
                    } finally {
                        j.parentNode && j.parentNode.removeChild(j), j = null
                    }
                }

                function Qi(R, j) {
                    for (var X = R.split("|"), de = X.length; de--;) p.attrHandle[X[de]] = j
                }

                function Zi(R, j) {
                    var X = j && R,
                        de = X && R.nodeType === 1 && j.nodeType === 1 && R.sourceIndex - j.sourceIndex;
                    if (de) return de;
                    if (X) {
                        for (; X = X.nextSibling;)
                            if (X === j) return -1
                    }
                    return R ? 1 : -1
                }

                function Jo(R) {
                    return function(j) {
                        var X = j.nodeName.toLowerCase();
                        return X === "input" && j.type === R
                    }
                }

                function Qo(R) {
                    return function(j) {
                        var X = j.nodeName.toLowerCase();
                        return (X === "input" || X === "button") && j.type === R
                    }
                }

                function Ms(R) {
                    return function(j) {
                        return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === R : j.disabled === R : j.isDisabled === R || j.isDisabled !== !R && Yo(j) === R : j.disabled === R : "label" in j ? j.disabled === R : !1
                    }
                }

                function An(R) {
                    return dn(function(j) {
                        return j = +j, dn(function(X, de) {
                            for (var ee, me = R([], X.length, j), xe = me.length; xe--;) X[ee = me[xe]] && (X[ee] = !(de[ee] = X[ee]))
                        })
                    })
                }

                function Xr(R) {
                    return R && typeof R.getElementsByTagName < "u" && R
                }
                u = St.support = {}, x = St.isXML = function(R) {
                    var j = R && R.namespaceURI,
                        X = R && (R.ownerDocument || R).documentElement;
                    return !qo.test(j || X && X.nodeName || "HTML")
                }, ne = St.setDocument = function(R) {
                    var j, X, de = R ? R.ownerDocument || R : nt;
                    return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, He = ce.documentElement, ot = !x(ce), nt != ce && (X = ce.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Ds, !1) : X.attachEvent && X.attachEvent("onunload", Ds)), u.scope = yn(function(ee) {
                        return He.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                    }), u.attributes = yn(function(ee) {
                        return ee.className = "i", !ee.getAttribute("className")
                    }), u.getElementsByTagName = yn(function(ee) {
                        return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                    }), u.getElementsByClassName = Oi.test(ce.getElementsByClassName), u.getById = yn(function(ee) {
                        return He.appendChild(ee).id = _t, !ce.getElementsByName || !ce.getElementsByName(_t).length
                    }), u.getById ? (p.filter.ID = function(ee) {
                        var me = ee.replace(Tn, xn);
                        return function(xe) {
                            return xe.getAttribute("id") === me
                        }
                    }, p.find.ID = function(ee, me) {
                        if (typeof me.getElementById < "u" && ot) {
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
                        if (typeof me.getElementById < "u" && ot) {
                            var xe, Oe, De, ze = me.getElementById(ee);
                            if (ze) {
                                if (xe = ze.getAttributeNode("id"), xe && xe.value === ee) return [ze];
                                for (De = me.getElementsByName(ee), Oe = 0; ze = De[Oe++];)
                                    if (xe = ze.getAttributeNode("id"), xe && xe.value === ee) return [ze]
                            }
                            return []
                        }
                    }), p.find.TAG = u.getElementsByTagName ? function(ee, me) {
                        if (typeof me.getElementsByTagName < "u") return me.getElementsByTagName(ee);
                        if (u.qsa) return me.querySelectorAll(ee)
                    } : function(ee, me) {
                        var xe, Oe = [],
                            De = 0,
                            ze = me.getElementsByTagName(ee);
                        if (ee === "*") {
                            for (; xe = ze[De++];) xe.nodeType === 1 && Oe.push(xe);
                            return Oe
                        }
                        return ze
                    }, p.find.CLASS = u.getElementsByClassName && function(ee, me) {
                        if (typeof me.getElementsByClassName < "u" && ot) return me.getElementsByClassName(ee)
                    }, zt = [], Fe = [], (u.qsa = Oi.test(ce.querySelectorAll)) && (yn(function(ee) {
                        var me;
                        He.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && Fe.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || Fe.push("\\[" + gt + "*(?:value|" + Gr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || Fe.push("~="), me = ce.createElement("input"), me.setAttribute("name", ""), ee.appendChild(me), ee.querySelectorAll("[name='']").length || Fe.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || Fe.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || Fe.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), Fe.push("[\\r\\n\\f]")
                    }), yn(function(ee) {
                        ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var me = ce.createElement("input");
                        me.setAttribute("type", "hidden"), ee.appendChild(me).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && Fe.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && Fe.push(":enabled", ":disabled"), He.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && Fe.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), Fe.push(",.*:")
                    })), (u.matchesSelector = Oi.test(Vt = He.matches || He.webkitMatchesSelector || He.mozMatchesSelector || He.oMatchesSelector || He.msMatchesSelector)) && yn(function(ee) {
                        u.disconnectedMatch = Vt.call(ee, "*"), Vt.call(ee, "[s!='']:x"), zt.push("!=", Hr)
                    }), Fe = Fe.length && new RegExp(Fe.join("|")), zt = zt.length && new RegExp(zt.join("|")), j = Oi.test(He.compareDocumentPosition), un = j || Oi.test(He.contains) ? function(ee, me) {
                        var xe = ee.nodeType === 9 ? ee.documentElement : ee,
                            Oe = me && me.parentNode;
                        return ee === Oe || !!(Oe && Oe.nodeType === 1 && (xe.contains ? xe.contains(Oe) : ee.compareDocumentPosition && ee.compareDocumentPosition(Oe) & 16))
                    } : function(ee, me) {
                        if (me) {
                            for (; me = me.parentNode;)
                                if (me === ee) return !0
                        }
                        return !1
                    }, Zn = j ? function(ee, me) {
                        if (ee === me) return be = !0, 0;
                        var xe = !ee.compareDocumentPosition - !me.compareDocumentPosition;
                        return xe || (xe = (ee.ownerDocument || ee) == (me.ownerDocument || me) ? ee.compareDocumentPosition(me) : 1, xe & 1 || !u.sortDetached && me.compareDocumentPosition(ee) === xe ? ee == ce || ee.ownerDocument == nt && un(nt, ee) ? -1 : me == ce || me.ownerDocument == nt && un(nt, me) ? 1 : le ? ti(le, ee) - ti(le, me) : 0 : xe & 4 ? -1 : 1)
                    } : function(ee, me) {
                        if (ee === me) return be = !0, 0;
                        var xe, Oe = 0,
                            De = ee.parentNode,
                            ze = me.parentNode,
                            Ge = [ee],
                            Ye = [me];
                        if (!De || !ze) return ee == ce ? -1 : me == ce ? 1 : De ? -1 : ze ? 1 : le ? ti(le, ee) - ti(le, me) : 0;
                        if (De === ze) return Zi(ee, me);
                        for (xe = ee; xe = xe.parentNode;) Ge.unshift(xe);
                        for (xe = me; xe = xe.parentNode;) Ye.unshift(xe);
                        for (; Ge[Oe] === Ye[Oe];) Oe++;
                        return Oe ? Zi(Ge[Oe], Ye[Oe]) : Ge[Oe] == nt ? -1 : Ye[Oe] == nt ? 1 : 0
                    }), ce
                }, St.matches = function(R, j) {
                    return St(R, null, null, j)
                }, St.matchesSelector = function(R, j) {
                    if (ne(R), u.matchesSelector && ot && !hn[j + " "] && (!zt || !zt.test(j)) && (!Fe || !Fe.test(j))) try {
                        var X = Vt.call(R, j);
                        if (X || u.disconnectedMatch || R.document && R.document.nodeType !== 11) return X
                    } catch {
                        hn(j, !0)
                    }
                    return St(j, ce, null, [R]).length > 0
                }, St.contains = function(R, j) {
                    return (R.ownerDocument || R) != ce && ne(R), un(R, j)
                }, St.attr = function(R, j) {
                    (R.ownerDocument || R) != ce && ne(R);
                    var X = p.attrHandle[j.toLowerCase()],
                        de = X && ei.call(p.attrHandle, j.toLowerCase()) ? X(R, j, !ot) : void 0;
                    return de !== void 0 ? de : u.attributes || !ot ? R.getAttribute(j) : (de = R.getAttributeNode(j)) && de.specified ? de.value : null
                }, St.escape = function(R) {
                    return (R + "").replace(Wr, Ls)
                }, St.error = function(R) {
                    throw new Error("Syntax error, unrecognized expression: " + R)
                }, St.uniqueSort = function(R) {
                    var j, X = [],
                        de = 0,
                        ee = 0;
                    if (be = !u.detectDuplicates, le = !u.sortStable && R.slice(0), R.sort(Zn), be) {
                        for (; j = R[ee++];) j === R[ee] && (de = X.push(ee));
                        for (; de--;) R.splice(X[de], 1)
                    }
                    return le = null, R
                }, w = St.getText = function(R) {
                    var j, X = "",
                        de = 0,
                        ee = R.nodeType;
                    if (ee) {
                        if (ee === 1 || ee === 9 || ee === 11) {
                            if (typeof R.textContent == "string") return R.textContent;
                            for (R = R.firstChild; R; R = R.nextSibling) X += w(R)
                        } else if (ee === 3 || ee === 4) return R.nodeValue
                    } else
                        for (; j = R[de++];) X += w(j);
                    return X
                }, p = St.selectors = {
                    cacheLength: 50,
                    createPseudo: dn,
                    match: Yi,
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
                        ATTR: function(R) {
                            return R[1] = R[1].replace(Tn, xn), R[3] = (R[3] || R[4] || R[5] || "").replace(Tn, xn), R[2] === "~=" && (R[3] = " " + R[3] + " "), R.slice(0, 4)
                        },
                        CHILD: function(R) {
                            return R[1] = R[1].toLowerCase(), R[1].slice(0, 3) === "nth" ? (R[3] || St.error(R[0]), R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === "even" || R[3] === "odd")), R[5] = +(R[7] + R[8] || R[3] === "odd")) : R[3] && St.error(R[0]), R
                        },
                        PSEUDO: function(R) {
                            var j, X = !R[6] && R[2];
                            return Yi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : X && Go.test(X) && (j = T(X, !0)) && (j = X.indexOf(")", X.length - j) - X.length) && (R[0] = R[0].slice(0, j), R[2] = X.slice(0, j)), R.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(R) {
                            var j = R.replace(Tn, xn).toLowerCase();
                            return R === "*" ? function() {
                                return !0
                            } : function(X) {
                                return X.nodeName && X.nodeName.toLowerCase() === j
                            }
                        },
                        CLASS: function(R) {
                            var j = Lt[R + " "];
                            return j || (j = new RegExp("(^|" + gt + ")" + R + "(" + gt + "|$)")) && Lt(R, function(X) {
                                return j.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(R, j, X) {
                            return function(de) {
                                var ee = St.attr(de, R);
                                return ee == null ? j === "!=" : j ? (ee += "", j === "=" ? ee === X : j === "!=" ? ee !== X : j === "^=" ? X && ee.indexOf(X) === 0 : j === "*=" ? X && ee.indexOf(X) > -1 : j === "$=" ? X && ee.slice(-X.length) === X : j === "~=" ? (" " + ee.replace(Os, " ") + " ").indexOf(X) > -1 : j === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                            }
                        },
                        CHILD: function(R, j, X, de, ee) {
                            var me = R.slice(0, 3) !== "nth",
                                xe = R.slice(-4) !== "last",
                                Oe = j === "of-type";
                            return de === 1 && ee === 0 ? function(De) {
                                return !!De.parentNode
                            } : function(De, ze, Ge) {
                                var Ye, ht, Tt, Ke, Ut, Jt, fn = me !== xe ? "nextSibling" : "previousSibling",
                                    At = De.parentNode,
                                    c = Oe && De.nodeName.toLowerCase(),
                                    h = !Ge && !Oe,
                                    b = !1;
                                if (At) {
                                    if (me) {
                                        for (; fn;) {
                                            for (Ke = De; Ke = Ke[fn];)
                                                if (Oe ? Ke.nodeName.toLowerCase() === c : Ke.nodeType === 1) return !1;
                                            Jt = fn = R === "only" && !Jt && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (Jt = [xe ? At.firstChild : At.lastChild], xe && h) {
                                        for (Ke = At, Tt = Ke[_t] || (Ke[_t] = {}), ht = Tt[Ke.uniqueID] || (Tt[Ke.uniqueID] = {}), Ye = ht[R] || [], Ut = Ye[0] === on && Ye[1], b = Ut && Ye[2], Ke = Ut && At.childNodes[Ut]; Ke = ++Ut && Ke && Ke[fn] || (b = Ut = 0) || Jt.pop();)
                                            if (Ke.nodeType === 1 && ++b && Ke === De) {
                                                ht[R] = [on, Ut, b];
                                                break
                                            }
                                    } else if (h && (Ke = De, Tt = Ke[_t] || (Ke[_t] = {}), ht = Tt[Ke.uniqueID] || (Tt[Ke.uniqueID] = {}), Ye = ht[R] || [], Ut = Ye[0] === on && Ye[1], b = Ut), b === !1)
                                        for (;
                                            (Ke = ++Ut && Ke && Ke[fn] || (b = Ut = 0) || Jt.pop()) && !((Oe ? Ke.nodeName.toLowerCase() === c : Ke.nodeType === 1) && ++b && (h && (Tt = Ke[_t] || (Ke[_t] = {}), ht = Tt[Ke.uniqueID] || (Tt[Ke.uniqueID] = {}), ht[R] = [on, b]), Ke === De)););
                                    return b -= ee, b === de || b % de === 0 && b / de >= 0
                                }
                            }
                        },
                        PSEUDO: function(R, j) {
                            var X, de = p.pseudos[R] || p.setFilters[R.toLowerCase()] || St.error("unsupported pseudo: " + R);
                            return de[_t] ? de(j) : de.length > 1 ? (X = [R, R, "", j], p.setFilters.hasOwnProperty(R.toLowerCase()) ? dn(function(ee, me) {
                                for (var xe, Oe = de(ee, j), De = Oe.length; De--;) xe = ti(ee, Oe[De]), ee[xe] = !(me[xe] = Oe[De])
                            }) : function(ee) {
                                return de(ee, 0, X)
                            }) : de
                        }
                    },
                    pseudos: {
                        not: dn(function(R) {
                            var j = [],
                                X = [],
                                de = z(R.replace(Ai, "$1"));
                            return de[_t] ? dn(function(ee, me, xe, Oe) {
                                for (var De, ze = de(ee, null, Oe, []), Ge = ee.length; Ge--;)(De = ze[Ge]) && (ee[Ge] = !(me[Ge] = De))
                            }) : function(ee, me, xe) {
                                return j[0] = ee, de(j, null, xe, X), j[0] = null, !X.pop()
                            }
                        }),
                        has: dn(function(R) {
                            return function(j) {
                                return St(R, j).length > 0
                            }
                        }),
                        contains: dn(function(R) {
                            return R = R.replace(Tn, xn),
                                function(j) {
                                    return (j.textContent || w(j)).indexOf(R) > -1
                                }
                        }),
                        lang: dn(function(R) {
                            return Ho.test(R || "") || St.error("unsupported lang: " + R), R = R.replace(Tn, xn).toLowerCase(),
                                function(j) {
                                    var X;
                                    do
                                        if (X = ot ? j.lang : j.getAttribute("xml:lang") || j.getAttribute("lang")) return X = X.toLowerCase(), X === R || X.indexOf(R + "-") === 0; while ((j = j.parentNode) && j.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(R) {
                            var j = r.location && r.location.hash;
                            return j && j.slice(1) === R.id
                        },
                        root: function(R) {
                            return R === He
                        },
                        focus: function(R) {
                            return R === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(R.type || R.href || ~R.tabIndex)
                        },
                        enabled: Ms(!1),
                        disabled: Ms(!0),
                        checked: function(R) {
                            var j = R.nodeName.toLowerCase();
                            return j === "input" && !!R.checked || j === "option" && !!R.selected
                        },
                        selected: function(R) {
                            return R.parentNode && R.parentNode.selectedIndex, R.selected === !0
                        },
                        empty: function(R) {
                            for (R = R.firstChild; R; R = R.nextSibling)
                                if (R.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(R) {
                            return !p.pseudos.empty(R)
                        },
                        header: function(R) {
                            return Xo.test(R.nodeName)
                        },
                        input: function(R) {
                            return Wo.test(R.nodeName)
                        },
                        button: function(R) {
                            var j = R.nodeName.toLowerCase();
                            return j === "input" && R.type === "button" || j === "button"
                        },
                        text: function(R) {
                            var j;
                            return R.nodeName.toLowerCase() === "input" && R.type === "text" && ((j = R.getAttribute("type")) == null || j.toLowerCase() === "text")
                        },
                        first: An(function() {
                            return [0]
                        }),
                        last: An(function(R, j) {
                            return [j - 1]
                        }),
                        eq: An(function(R, j, X) {
                            return [X < 0 ? X + j : X]
                        }),
                        even: An(function(R, j) {
                            for (var X = 0; X < j; X += 2) R.push(X);
                            return R
                        }),
                        odd: An(function(R, j) {
                            for (var X = 1; X < j; X += 2) R.push(X);
                            return R
                        }),
                        lt: An(function(R, j, X) {
                            for (var de = X < 0 ? X + j : X > j ? j : X; --de >= 0;) R.push(de);
                            return R
                        }),
                        gt: An(function(R, j, X) {
                            for (var de = X < 0 ? X + j : X; ++de < j;) R.push(de);
                            return R
                        })
                    }
                }, p.pseudos.nth = p.pseudos.eq;
                for (s in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) p.pseudos[s] = Jo(s);
                for (s in {
                        submit: !0,
                        reset: !0
                    }) p.pseudos[s] = Qo(s);

                function Ps() {}
                Ps.prototype = p.filters = p.pseudos, p.setFilters = new Ps, T = St.tokenize = function(R, j) {
                    var X, de, ee, me, xe, Oe, De, ze = Ti[R + " "];
                    if (ze) return j ? 0 : ze.slice(0);
                    for (xe = R, Oe = [], De = p.preFilter; xe;) {
                        (!X || (de = Is.exec(xe))) && (de && (xe = xe.slice(de[0].length) || xe), Oe.push(ee = [])), X = !1, (de = Rs.exec(xe)) && (X = de.shift(), ee.push({
                            value: X,
                            type: de[0].replace(Ai, " ")
                        }), xe = xe.slice(X.length));
                        for (me in p.filter)(de = Yi[me].exec(xe)) && (!De[me] || (de = De[me](de))) && (X = de.shift(), ee.push({
                            value: X,
                            type: me,
                            matches: de
                        }), xe = xe.slice(X.length));
                        if (!X) break
                    }
                    return j ? xe.length : xe ? St.error(R) : Ti(R, Oe).slice(0)
                };

                function er(R) {
                    for (var j = 0, X = R.length, de = ""; j < X; j++) de += R[j].value;
                    return de
                }

                function tr(R, j, X) {
                    var de = j.dir,
                        ee = j.next,
                        me = ee || de,
                        xe = X && me === "parentNode",
                        Oe = ft++;
                    return j.first ? function(De, ze, Ge) {
                        for (; De = De[de];)
                            if (De.nodeType === 1 || xe) return R(De, ze, Ge);
                        return !1
                    } : function(De, ze, Ge) {
                        var Ye, ht, Tt, Ke = [on, Oe];
                        if (Ge) {
                            for (; De = De[de];)
                                if ((De.nodeType === 1 || xe) && R(De, ze, Ge)) return !0
                        } else
                            for (; De = De[de];)
                                if (De.nodeType === 1 || xe)
                                    if (Tt = De[_t] || (De[_t] = {}), ht = Tt[De.uniqueID] || (Tt[De.uniqueID] = {}), ee && ee === De.nodeName.toLowerCase()) De = De[de] || De;
                                    else {
                                        if ((Ye = ht[me]) && Ye[0] === on && Ye[1] === Oe) return Ke[2] = Ye[2];
                                        if (ht[me] = Ke, Ke[2] = R(De, ze, Ge)) return !0
                                    } return !1
                    }
                }

                function nr(R) {
                    return R.length > 1 ? function(j, X, de) {
                        for (var ee = R.length; ee--;)
                            if (!R[ee](j, X, de)) return !1;
                        return !0
                    } : R[0]
                }

                function Zo(R, j, X) {
                    for (var de = 0, ee = j.length; de < ee; de++) St(R, j[de], X);
                    return X
                }

                function ir(R, j, X, de, ee) {
                    for (var me, xe = [], Oe = 0, De = R.length, ze = j != null; Oe < De; Oe++)(me = R[Oe]) && (!X || X(me, de, ee)) && (xe.push(me), ze && j.push(Oe));
                    return xe
                }

                function Kr(R, j, X, de, ee, me) {
                    return de && !de[_t] && (de = Kr(de)), ee && !ee[_t] && (ee = Kr(ee, me)), dn(function(xe, Oe, De, ze) {
                        var Ge, Ye, ht, Tt = [],
                            Ke = [],
                            Ut = Oe.length,
                            Jt = xe || Zo(j || "*", De.nodeType ? [De] : De, []),
                            fn = R && (xe || !j) ? ir(Jt, Tt, R, De, ze) : Jt,
                            At = X ? ee || (xe ? R : Ut || de) ? [] : Oe : fn;
                        if (X && X(fn, At, De, ze), de)
                            for (Ge = ir(At, Ke), de(Ge, [], De, ze), Ye = Ge.length; Ye--;)(ht = Ge[Ye]) && (At[Ke[Ye]] = !(fn[Ke[Ye]] = ht));
                        if (xe) {
                            if (ee || R) {
                                if (ee) {
                                    for (Ge = [], Ye = At.length; Ye--;)(ht = At[Ye]) && Ge.push(fn[Ye] = ht);
                                    ee(null, At = [], Ge, ze)
                                }
                                for (Ye = At.length; Ye--;)(ht = At[Ye]) && (Ge = ee ? ti(xe, ht) : Tt[Ye]) > -1 && (xe[Ge] = !(Oe[Ge] = ht))
                            }
                        } else At = ir(At === Oe ? At.splice(Ut, At.length) : At), ee ? ee(null, Oe, At, ze) : Cn.apply(Oe, At)
                    })
                }

                function Yr(R) {
                    for (var j, X, de, ee = R.length, me = p.relative[R[0].type], xe = me || p.relative[" "], Oe = me ? 1 : 0, De = tr(function(Ye) {
                            return Ye === j
                        }, xe, !0), ze = tr(function(Ye) {
                            return ti(j, Ye) > -1
                        }, xe, !0), Ge = [function(Ye, ht, Tt) {
                            var Ke = !me && (Tt || ht !== Z) || ((j = ht).nodeType ? De(Ye, ht, Tt) : ze(Ye, ht, Tt));
                            return j = null, Ke
                        }]; Oe < ee; Oe++)
                        if (X = p.relative[R[Oe].type]) Ge = [tr(nr(Ge), X)];
                        else {
                            if (X = p.filter[R[Oe].type].apply(null, R[Oe].matches), X[_t]) {
                                for (de = ++Oe; de < ee && !p.relative[R[de].type]; de++);
                                return Kr(Oe > 1 && nr(Ge), Oe > 1 && er(R.slice(0, Oe - 1).concat({
                                    value: R[Oe - 2].type === " " ? "*" : ""
                                })).replace(Ai, "$1"), X, Oe < de && Yr(R.slice(Oe, de)), de < ee && Yr(R = R.slice(de)), de < ee && er(R))
                            }
                            Ge.push(X)
                        } return nr(Ge)
                }

                function Vs(R, j) {
                    var X = j.length > 0,
                        de = R.length > 0,
                        ee = function(me, xe, Oe, De, ze) {
                            var Ge, Ye, ht, Tt = 0,
                                Ke = "0",
                                Ut = me && [],
                                Jt = [],
                                fn = Z,
                                At = me || de && p.find.TAG("*", ze),
                                c = on += fn == null ? 1 : Math.random() || .1,
                                h = At.length;
                            for (ze && (Z = xe == ce || xe || ze); Ke !== h && (Ge = At[Ke]) != null; Ke++) {
                                if (de && Ge) {
                                    for (Ye = 0, !xe && Ge.ownerDocument != ce && (ne(Ge), Oe = !ot); ht = R[Ye++];)
                                        if (ht(Ge, xe || ce, Oe)) {
                                            De.push(Ge);
                                            break
                                        } ze && (on = c)
                                }
                                X && ((Ge = !ht && Ge) && Tt--, me && Ut.push(Ge))
                            }
                            if (Tt += Ke, X && Ke !== Tt) {
                                for (Ye = 0; ht = j[Ye++];) ht(Ut, Jt, xe, Oe);
                                if (me) {
                                    if (Tt > 0)
                                        for (; Ke--;) Ut[Ke] || Jt[Ke] || (Jt[Ke] = Mn.call(De));
                                    Jt = ir(Jt)
                                }
                                Cn.apply(De, Jt), ze && !me && Jt.length > 0 && Tt + j.length > 1 && St.uniqueSort(De)
                            }
                            return ze && (on = c, Z = fn), Ut
                        };
                    return X ? dn(ee) : ee
                }
                return z = St.compile = function(R, j) {
                    var X, de = [],
                        ee = [],
                        me = Ki[R + " "];
                    if (!me) {
                        for (j || (j = T(R)), X = j.length; X--;) me = Yr(j[X]), me[_t] ? de.push(me) : ee.push(me);
                        me = Ki(R, Vs(ee, de)), me.selector = R
                    }
                    return me
                }, U = St.select = function(R, j, X, de) {
                    var ee, me, xe, Oe, De, ze = typeof R == "function" && R,
                        Ge = !de && T(R = ze.selector || R);
                    if (X = X || [], Ge.length === 1) {
                        if (me = Ge[0] = Ge[0].slice(0), me.length > 2 && (xe = me[0]).type === "ID" && j.nodeType === 9 && ot && p.relative[me[1].type]) {
                            if (j = (p.find.ID(xe.matches[0].replace(Tn, xn), j) || [])[0], j) ze && (j = j.parentNode);
                            else return X;
                            R = R.slice(me.shift().value.length)
                        }
                        for (ee = Yi.needsContext.test(R) ? 0 : me.length; ee-- && (xe = me[ee], !p.relative[Oe = xe.type]);)
                            if ((De = p.find[Oe]) && (de = De(xe.matches[0].replace(Tn, xn), qr.test(me[0].type) && Xr(j.parentNode) || j))) {
                                if (me.splice(ee, 1), R = de.length && er(me), !R) return Cn.apply(X, de), X;
                                break
                            }
                    }
                    return (ze || z(R, Ge))(de, j, !ot, X, !j || qr.test(R) && Xr(j.parentNode) || j), X
                }, u.sortStable = _t.split("").sort(Zn).join("") === _t, u.detectDuplicates = !!be, ne(), u.sortDetached = yn(function(R) {
                    return R.compareDocumentPosition(ce.createElement("fieldset")) & 1
                }), yn(function(R) {
                    return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
                }) || Qi("type|href|height|width", function(R, j, X) {
                    if (!X) return R.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
                }), (!u.attributes || !yn(function(R) {
                    return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
                })) && Qi("value", function(R, j, X) {
                    if (!X && R.nodeName.toLowerCase() === "input") return R.defaultValue
                }), yn(function(R) {
                    return R.getAttribute("disabled") == null
                }) || Qi(Gr, function(R, j, X) {
                    var de;
                    if (!X) return R[j] === !0 ? j.toLowerCase() : (de = R.getAttributeNode(j)) && de.specified ? de.value : null
                }), St
            }(e);
            d.find = Ae, d.expr = Ae.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = Ae.uniqueSort, d.text = Ae.getText, d.isXMLDoc = Ae.isXML, d.contains = Ae.contains, d.escapeSelector = Ae.escape;
            var Me = function(r, s, u) {
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

            function Y(r, s) {
                return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
            }
            var je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function G(r, s, u) {
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
                    return this.pushStack(G(this, r || [], !1))
                },
                not: function(r) {
                    return this.pushStack(G(this, r || [], !0))
                },
                is: function(r) {
                    return !!G(this, typeof r == "string" && Be.test(r) ? d(r) : r || [], !1).length
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
                        x = [],
                        T = typeof r != "string" && d(r);
                    if (!Be.test(r)) {
                        for (; p < w; p++)
                            for (u = this[p]; u && u !== s; u = u.parentNode)
                                if (u.nodeType < 11 && (T ? T.index(u) > -1 : u.nodeType === 1 && d.find.matchesSelector(u, r))) {
                                    x.push(u);
                                    break
                                }
                    }
                    return this.pushStack(x.length > 1 ? d.uniqueSort(x) : x)
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
                    return Me(r, "parentNode")
                },
                parentsUntil: function(r, s, u) {
                    return Me(r, "parentNode", u)
                },
                next: function(r) {
                    return _e(r, "nextSibling")
                },
                prev: function(r) {
                    return _e(r, "previousSibling")
                },
                nextAll: function(r) {
                    return Me(r, "nextSibling")
                },
                prevAll: function(r) {
                    return Me(r, "previousSibling")
                },
                nextUntil: function(r, s, u) {
                    return Me(r, "nextSibling", u)
                },
                prevUntil: function(r, s, u) {
                    return Me(r, "previousSibling", u)
                },
                siblings: function(r) {
                    return lt((r.parentNode || {}).firstChild, r)
                },
                children: function(r) {
                    return lt(r.firstChild)
                },
                contents: function(r) {
                    return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (Y(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
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
                var s, u, p, w, x = [],
                    T = [],
                    z = -1,
                    U = function() {
                        for (w = w || r.once, p = s = !0; T.length; z = -1)
                            for (u = T.shift(); ++z < x.length;) x[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = x.length, u = !1);
                        r.memory || (u = !1), s = !1, w && (u ? x = [] : x = "")
                    },
                    Z = {
                        add: function() {
                            return x && (u && !s && (z = x.length - 1, T.push(u)), function le(be) {
                                d.each(be, function(ne, ce) {
                                    re(ce) ? (!r.unique || !Z.has(ce)) && x.push(ce) : ce && ce.length && se(ce) !== "string" && le(ce)
                                })
                            }(arguments), u && !s && U()), this
                        },
                        remove: function() {
                            return d.each(arguments, function(le, be) {
                                for (var ne;
                                    (ne = d.inArray(be, x, ne)) > -1;) x.splice(ne, 1), ne <= z && z--
                            }), this
                        },
                        has: function(le) {
                            return le ? d.inArray(le, x) > -1 : x.length > 0
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
                            return w || (be = be || [], be = [le, be.slice ? be.slice() : be], T.push(be), s || U()), this
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

            function Qe(r) {
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
                            catch: function(x) {
                                return p.then(null, x)
                            },
                            pipe: function() {
                                var x = arguments;
                                return d.Deferred(function(T) {
                                    d.each(s, function(z, U) {
                                        var Z = re(x[U[4]]) && x[U[4]];
                                        w[U[1]](function() {
                                            var le = Z && Z.apply(this, arguments);
                                            le && re(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[U[0] + "With"](this, Z ? [le] : arguments)
                                        })
                                    }), x = null
                                }).promise()
                            },
                            then: function(x, T, z) {
                                var U = 0;

                                function Z(le, be, ne, ce) {
                                    return function() {
                                        var He = this,
                                            ot = arguments,
                                            Fe = function() {
                                                var Vt, un;
                                                if (!(le < U)) {
                                                    if (Vt = ne.apply(He, ot), Vt === be.promise()) throw new TypeError("Thenable self-resolution");
                                                    un = Vt && (typeof Vt == "object" || typeof Vt == "function") && Vt.then, re(un) ? ce ? un.call(Vt, Z(U, be, Qe, ce), Z(U, be, dt, ce)) : (U++, un.call(Vt, Z(U, be, Qe, ce), Z(U, be, dt, ce), Z(U, be, Qe, be.notifyWith))) : (ne !== Qe && (He = void 0, ot = [Vt]), (ce || be.resolveWith)(He, ot))
                                                }
                                            },
                                            zt = ce ? Fe : function() {
                                                try {
                                                    Fe()
                                                } catch (Vt) {
                                                    d.Deferred.exceptionHook && d.Deferred.exceptionHook(Vt, zt.stackTrace), le + 1 >= U && (ne !== dt && (He = void 0, ot = [Vt]), be.rejectWith(He, ot))
                                                }
                                            };
                                        le ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                    }
                                }
                                return d.Deferred(function(le) {
                                    s[0][3].add(Z(0, le, re(z) ? z : Qe, le.notifyWith)), s[1][3].add(Z(0, le, re(x) ? x : Qe)), s[2][3].add(Z(0, le, re(T) ? T : dt))
                                }).promise()
                            },
                            promise: function(x) {
                                return x != null ? d.extend(x, p) : p
                            }
                        },
                        w = {};
                    return d.each(s, function(x, T) {
                        var z = T[2],
                            U = T[5];
                        p[T[1]] = z.add, U && z.add(function() {
                            u = U
                        }, s[3 - x][2].disable, s[3 - x][3].disable, s[0][2].lock, s[0][3].lock), z.add(T[3].fire), w[T[0]] = function() {
                            return w[T[0] + "With"](this === w ? void 0 : this, arguments), this
                        }, w[T[0] + "With"] = z.fireWith
                    }), p.promise(w), r && r.call(w, w), w
                },
                when: function(r) {
                    var s = arguments.length,
                        u = s,
                        p = Array(u),
                        w = f.call(arguments),
                        x = d.Deferred(),
                        T = function(z) {
                            return function(U) {
                                p[z] = this, w[z] = arguments.length > 1 ? f.call(arguments) : U, --s || x.resolveWith(p, w)
                            }
                        };
                    if (s <= 1 && (Bt(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(w[u] && w[u].then))) return x.then();
                    for (; u--;) Bt(w[u], T(u), x.reject);
                    return x.promise()
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
            var E = d.Deferred();
            d.fn.ready = function(r) {
                return E.then(r).catch(function(s) {
                    d.readyException(s)
                }), this
            }, d.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(r) {
                    (r === !0 ? --d.readyWait : d.isReady) || (d.isReady = !0, !(r !== !0 && --d.readyWait > 0) && E.resolveWith(P, [d]))
                }
            }), d.ready.then = E.then;

            function l() {
                P.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), d.ready()
            }
            P.readyState === "complete" || P.readyState !== "loading" && !P.documentElement.doScroll ? e.setTimeout(d.ready) : (P.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
            var g = function(r, s, u, p, w, x, T) {
                    var z = 0,
                        U = r.length,
                        Z = u == null;
                    if (se(u) === "object") {
                        w = !0;
                        for (z in u) g(r, s, z, u[z], !0, x, T)
                    } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(le, be, ne) {
                            return Z.call(d(le), ne)
                        })), s))
                        for (; z < U; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                    return w ? r : Z ? s.call(r) : U ? s(r[0], u) : x
                },
                S = /^-ms-/,
                O = /-([a-z])/g;

            function M(r, s) {
                return s.toUpperCase()
            }

            function N(r) {
                return r.replace(S, "ms-").replace(O, M)
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
                    if (typeof s == "string") w[N(s)] = u;
                    else
                        for (p in s) w[N(p)] = s[p];
                    return w
                },
                get: function(r, s) {
                    return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][N(s)]
                },
                access: function(r, s, u) {
                    return s === void 0 || s && typeof s == "string" && u === void 0 ? this.get(r, s) : (this.set(r, s, u), u !== void 0 ? u : s)
                },
                remove: function(r, s) {
                    var u, p = r[this.expando];
                    if (p !== void 0) {
                        if (s !== void 0)
                            for (Array.isArray(s) ? s = s.map(N) : (s = N(s), s = s in p ? [s] : s.match(ke) || []), u = s.length; u--;) delete p[s[u]];
                        (s === void 0 || d.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                    }
                },
                hasData: function(r) {
                    var s = r[this.expando];
                    return s !== void 0 && !d.isEmptyObject(s)
                }
            };
            var he = new Se,
                Re = new Se,
                Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                rt = /[A-Z]/g;

            function xt(r) {
                return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Le.test(r) ? JSON.parse(r) : r
            }

            function rn(r, s, u) {
                var p;
                if (u === void 0 && r.nodeType === 1)
                    if (p = "data-" + s.replace(rt, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                        try {
                            u = xt(u)
                        } catch {}
                        Re.set(r, s, u)
                    } else u = void 0;
                return u
            }
            d.extend({
                hasData: function(r) {
                    return Re.hasData(r) || he.hasData(r)
                },
                data: function(r, s, u) {
                    return Re.access(r, s, u)
                },
                removeData: function(r, s) {
                    Re.remove(r, s)
                },
                _data: function(r, s, u) {
                    return he.access(r, s, u)
                },
                _removeData: function(r, s) {
                    he.remove(r, s)
                }
            }), d.fn.extend({
                data: function(r, s) {
                    var u, p, w, x = this[0],
                        T = x && x.attributes;
                    if (r === void 0) {
                        if (this.length && (w = Re.get(x), x.nodeType === 1 && !he.get(x, "hasDataAttrs"))) {
                            for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = N(p.slice(5)), rn(x, p, w[p])));
                            he.set(x, "hasDataAttrs", !0)
                        }
                        return w
                    }
                    return typeof r == "object" ? this.each(function() {
                        Re.set(this, r)
                    }) : g(this, function(z) {
                        var U;
                        if (x && z === void 0) return U = Re.get(x, r), U !== void 0 || (U = rn(x, r), U !== void 0) ? U : void 0;
                        this.each(function() {
                            Re.set(this, r, z)
                        })
                    }, null, s, arguments.length > 1, null, !0)
                },
                removeData: function(r) {
                    return this.each(function() {
                        Re.remove(this, r)
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
                        x = d._queueHooks(r, s),
                        T = function() {
                            d.dequeue(r, s)
                        };
                    w === "inprogress" && (w = u.shift(), p--), w && (s === "fx" && u.unshift("inprogress"), delete x.stop, w.call(r, T, x)), !p && x && x.empty.fire()
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
                        x = this,
                        T = this.length,
                        z = function() {
                            --p || w.resolveWith(x, [x])
                        };
                    for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = he.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                    return z(), w.promise(s)
                }
            });
            var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                wt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
                Ct = ["Top", "Right", "Bottom", "Left"],
                Yt = P.documentElement,
                Ze = function(r) {
                    return d.contains(r.ownerDocument, r)
                },
                Mt = {
                    composed: !0
                };
            Yt.getRootNode && (Ze = function(r) {
                return d.contains(r.ownerDocument, r) || r.getRootNode(Mt) === r.ownerDocument
            });
            var F = function(r, s) {
                return r = s || r, r.style.display === "none" || r.style.display === "" && Ze(r) && d.css(r, "display") === "none"
            };

            function V(r, s, u, p) {
                var w, x, T = 20,
                    z = p ? function() {
                        return p.cur()
                    } : function() {
                        return d.css(r, s, "")
                    },
                    U = z(),
                    Z = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                    le = r.nodeType && (d.cssNumber[s] || Z !== "px" && +U) && wt.exec(d.css(r, s));
                if (le && le[3] !== Z) {
                    for (U = U / 2, Z = Z || le[3], le = +U || 1; T--;) d.style(r, s, le + Z), (1 - x) * (1 - (x = z() / U || .5)) <= 0 && (T = 0), le = le / x;
                    le = le * 2, d.style(r, s, le + Z), u = u || []
                }
                return u && (le = +le || +U || 0, w = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = w)), w
            }
            var W = {};

            function D(r) {
                var s, u = r.ownerDocument,
                    p = r.nodeName,
                    w = W[p];
                return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), W[p] = w, w)
            }

            function H(r, s) {
                for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = he.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && F(p) && (w[x] = D(p))) : u !== "none" && (w[x] = "none", he.set(p, "display", u)));
                for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
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
            var fe = /^(?:checkbox|radio)$/i,
                pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                Ve = /^$|^module$|\/(?:java|ecma)script/i;
            (function() {
                var r = P.createDocumentFragment(),
                    s = r.appendChild(P.createElement("div")),
                    u = P.createElement("input");
                u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), K.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", K.option = !!s.lastChild
            })();
            var Ne = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead, Ne.th = Ne.td, K.option || (Ne.optgroup = Ne.option = [1, "<select multiple='multiple'>", "</select>"]);

            function pt(r, s) {
                var u;
                return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && Y(r, s) ? d.merge([r], u) : u
            }

            function Ft(r, s) {
                for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
            }
            var Je = /<|&#?\w+;/;

            function Ln(r, s, u, p, w) {
                for (var x, T, z, U, Z, le, be = s.createDocumentFragment(), ne = [], ce = 0, He = r.length; ce < He; ce++)
                    if (x = r[ce], x || x === 0)
                        if (se(x) === "object") d.merge(ne, x.nodeType ? [x] : x);
                        else if (!Je.test(x)) ne.push(s.createTextNode(x));
                else {
                    for (T = T || be.appendChild(s.createElement("div")), z = (pe.exec(x) || ["", ""])[1].toLowerCase(), U = Ne[z] || Ne._default, T.innerHTML = U[1] + d.htmlPrefilter(x) + U[2], le = U[0]; le--;) T = T.lastChild;
                    d.merge(ne, T.childNodes), T = be.firstChild, T.textContent = ""
                }
                for (be.textContent = "", ce = 0; x = ne[ce++];) {
                    if (p && d.inArray(x, p) > -1) {
                        w && w.push(x);
                        continue
                    }
                    if (Z = Ze(x), T = pt(be.appendChild(x), "script"), Z && Ft(T), u)
                        for (le = 0; x = T[le++];) Ve.test(x.type || "") && u.push(x)
                }
                return be
            }
            var Nn = /^([^.]*)(?:\.(.+)|)/;

            function st() {
                return !0
            }

            function Dn() {
                return !1
            }

            function yi(r, s) {
                return r === Ar() == (s === "focus")
            }

            function Ar() {
                try {
                    return P.activeElement
                } catch {}
            }

            function kn(r, s, u, p, w, x) {
                var T, z;
                if (typeof s == "object") {
                    typeof u != "string" && (p = p || u, u = void 0);
                    for (z in s) kn(r, z, u, p, s[z], x);
                    return r
                }
                if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Dn;
                else if (!w) return r;
                return x === 1 && (T = w, w = function(U) {
                    return d().off(U), T.apply(this, arguments)
                }, w.guid = T.guid || (T.guid = d.guid++)), r.each(function() {
                    d.event.add(this, s, w, p, u)
                })
            }
            d.event = {
                global: {},
                add: function(r, s, u, p, w) {
                    var x, T, z, U, Z, le, be, ne, ce, He, ot, Fe = he.get(r);
                    if (!!te(r))
                        for (u.handler && (x = u, u = x.handler, w = x.selector), w && d.find.matchesSelector(Yt, w), u.guid || (u.guid = d.guid++), (U = Fe.events) || (U = Fe.events = Object.create(null)), (T = Fe.handle) || (T = Fe.handle = function(zt) {
                                return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                            }), s = (s || "").match(ke) || [""], Z = s.length; Z--;) z = Nn.exec(s[Z]) || [], ce = ot = z[1], He = (z[2] || "").split(".").sort(), ce && (be = d.event.special[ce] || {}, ce = (w ? be.delegateType : be.bindType) || ce, be = d.event.special[ce] || {}, le = d.extend({
                            type: ce,
                            origType: ot,
                            data: p,
                            handler: u,
                            guid: u.guid,
                            selector: w,
                            needsContext: w && d.expr.match.needsContext.test(w),
                            namespace: He.join(".")
                        }, x), (ne = U[ce]) || (ne = U[ce] = [], ne.delegateCount = 0, (!be.setup || be.setup.call(r, p, He, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), be.add && (be.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), d.event.global[ce] = !0)
                },
                remove: function(r, s, u, p, w) {
                    var x, T, z, U, Z, le, be, ne, ce, He, ot, Fe = he.hasData(r) && he.get(r);
                    if (!(!Fe || !(U = Fe.events))) {
                        for (s = (s || "").match(ke) || [""], Z = s.length; Z--;) {
                            if (z = Nn.exec(s[Z]) || [], ce = ot = z[1], He = (z[2] || "").split(".").sort(), !ce) {
                                for (ce in U) d.event.remove(r, ce + s[Z], u, p, !0);
                                continue
                            }
                            for (be = d.event.special[ce] || {}, ce = (p ? be.delegateType : be.bindType) || ce, ne = U[ce] || [], z = z[2] && new RegExp("(^|\\.)" + He.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) le = ne[x], (w || ot === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(x, 1), le.selector && ne.delegateCount--, be.remove && be.remove.call(r, le));
                            T && !ne.length && ((!be.teardown || be.teardown.call(r, He, Fe.handle) === !1) && d.removeEvent(r, ce, Fe.handle), delete U[ce])
                        }
                        d.isEmptyObject(U) && he.remove(r, "handle events")
                    }
                },
                dispatch: function(r) {
                    var s, u, p, w, x, T, z = new Array(arguments.length),
                        U = d.event.fix(r),
                        Z = (he.get(this, "events") || Object.create(null))[U.type] || [],
                        le = d.event.special[U.type] || {};
                    for (z[0] = U, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                    if (U.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, U) === !1)) {
                        for (T = d.event.handlers.call(this, U, Z), s = 0;
                            (w = T[s++]) && !U.isPropagationStopped();)
                            for (U.currentTarget = w.elem, u = 0;
                                (x = w.handlers[u++]) && !U.isImmediatePropagationStopped();)(!U.rnamespace || x.namespace === !1 || U.rnamespace.test(x.namespace)) && (U.handleObj = x, U.data = x.data, p = ((d.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, z), p !== void 0 && (U.result = p) === !1 && (U.preventDefault(), U.stopPropagation()));
                        return le.postDispatch && le.postDispatch.call(this, U), U.result
                    }
                },
                handlers: function(r, s) {
                    var u, p, w, x, T, z = [],
                        U = s.delegateCount,
                        Z = r.target;
                    if (U && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                        for (; Z !== this; Z = Z.parentNode || this)
                            if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                                for (x = [], T = {}, u = 0; u < U; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? d(w, this).index(Z) > -1 : d.find(w, this, null, [Z]).length), T[w] && x.push(p);
                                x.length && z.push({
                                    elem: Z,
                                    handlers: x
                                })
                            }
                    }
                    return Z = this, U < s.length && z.push({
                        elem: Z,
                        handlers: s.slice(U)
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
                            return fe.test(s.type) && s.click && Y(s, "input") && sn(s, "click", st), !1
                        },
                        trigger: function(r) {
                            var s = this || r;
                            return fe.test(s.type) && s.click && Y(s, "input") && sn(s, "click"), !0
                        },
                        _default: function(r) {
                            var s = r.target;
                            return fe.test(s.type) && s.click && Y(s, "input") && he.get(s, "click") || Y(s, "a")
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
                    he.get(r, s) === void 0 && d.event.add(r, s, st);
                    return
                }
                he.set(r, s, !1), d.event.add(r, s, {
                    namespace: !1,
                    handler: function(p) {
                        var w, x, T = he.get(this, s);
                        if (p.isTrigger & 1 && this[s]) {
                            if (T.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                            else if (T = f.call(arguments), he.set(this, s, T), w = u(this, s), this[s](), x = he.get(this, s), T !== x || w ? he.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
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
                r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? st : Dn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && d.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[d.expando] = !0
            }, d.Event.prototype = {
                constructor: d.Event,
                isDefaultPrevented: Dn,
                isPropagationStopped: Dn,
                isImmediatePropagationStopped: Dn,
                isSimulated: !1,
                preventDefault: function() {
                    var r = this.originalEvent;
                    this.isDefaultPrevented = st, r && !this.isSimulated && r.preventDefault()
                },
                stopPropagation: function() {
                    var r = this.originalEvent;
                    this.isPropagationStopped = st, r && !this.isSimulated && r.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var r = this.originalEvent;
                    this.isImmediatePropagationStopped = st, r && !this.isSimulated && r.stopImmediatePropagation(), this.stopPropagation()
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
                        return sn(this, r, yi), !1
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
                            x = u.relatedTarget,
                            T = u.handleObj;
                        return (!x || x !== w && !d.contains(w, x)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = s), p
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
            var Or = /<script|<style|<link/i,
                Ir = /checked\s*(?:[^=]|=\s*.checked.)/i,
                wi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function ji(r, s) {
                return Y(r, "table") && Y(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
            }

            function bi(r) {
                return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
            }

            function Ci(r) {
                return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
            }

            function zi(r, s) {
                var u, p, w, x, T, z, U;
                if (s.nodeType === 1) {
                    if (he.hasData(r) && (x = he.get(r), U = x.events, U)) {
                        he.remove(s, "handle events");
                        for (w in U)
                            for (u = 0, p = U[w].length; u < p; u++) d.event.add(s, w, U[w][u])
                    }
                    Re.hasData(r) && (T = Re.access(r), z = d.extend({}, T), Re.set(s, z))
                }
            }

            function Ui(r, s) {
                var u = s.nodeName.toLowerCase();
                u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
            }

            function mn(r, s, u, p) {
                s = m(s);
                var w, x, T, z, U, Z, le = 0,
                    be = r.length,
                    ne = be - 1,
                    ce = s[0],
                    He = re(ce);
                if (He || be > 1 && typeof ce == "string" && !K.checkClone && Ir.test(ce)) return r.each(function(ot) {
                    var Fe = r.eq(ot);
                    He && (s[0] = ce.call(this, ot, Fe.html())), mn(Fe, s, u, p)
                });
                if (be && (w = Ln(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                    for (T = d.map(pt(w, "script"), bi), z = T.length; le < be; le++) U = w, le !== ne && (U = d.clone(U, !0, !0), z && d.merge(T, pt(U, "script"))), u.call(r[le], U, le);
                    if (z)
                        for (Z = T[T.length - 1].ownerDocument, d.map(T, Ci), le = 0; le < z; le++) U = T[le], Ve.test(U.type || "") && !he.access(U, "globalEval") && d.contains(Z, U) && (U.src && (U.type || "").toLowerCase() !== "module" ? d._evalUrl && !U.noModule && d._evalUrl(U.src, {
                            nonce: U.nonce || U.getAttribute("nonce")
                        }, Z) : ae(U.textContent.replace(wi, ""), U, Z))
                }
                return r
            }

            function Gi(r, s, u) {
                for (var p, w = s ? d.filter(s, r) : r, x = 0;
                    (p = w[x]) != null; x++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Ze(p) && Ft(pt(p, "script")), p.parentNode.removeChild(p));
                return r
            }
            d.extend({
                htmlPrefilter: function(r) {
                    return r
                },
                clone: function(r, s, u) {
                    var p, w, x, T, z = r.cloneNode(!0),
                        U = Ze(r);
                    if (!K.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                        for (T = pt(z), x = pt(r), p = 0, w = x.length; p < w; p++) Ui(x[p], T[p]);
                    if (s)
                        if (u)
                            for (x = x || pt(r), T = T || pt(z), p = 0, w = x.length; p < w; p++) zi(x[p], T[p]);
                        else zi(r, z);
                    return T = pt(z, "script"), T.length > 0 && Ft(T, !U && pt(r, "script")), z
                },
                cleanData: function(r) {
                    for (var s, u, p, w = d.event.special, x = 0;
                        (u = r[x]) !== void 0; x++)
                        if (te(u)) {
                            if (s = u[he.expando]) {
                                if (s.events)
                                    for (p in s.events) w[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                                u[he.expando] = void 0
                            }
                            u[Re.expando] && (u[Re.expando] = void 0)
                        }
                }
            }), d.fn.extend({
                detach: function(r) {
                    return Gi(this, r, !0)
                },
                remove: function(r) {
                    return Gi(this, r)
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
                            var s = ji(this, r);
                            s.appendChild(r)
                        }
                    })
                },
                prepend: function() {
                    return mn(this, arguments, function(r) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var s = ji(this, r);
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
                        if (typeof s == "string" && !Or.test(s) && !Ne[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
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
                    for (var p, w = [], x = d(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), d(x[z])[s](p), _.apply(w, p.get());
                    return this.pushStack(w)
                }
            });
            var xi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
                qn = function(r) {
                    var s = r.ownerDocument.defaultView;
                    return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
                },
                Hi = function(r, s, u) {
                    var p, w, x = {};
                    for (w in s) x[w] = r.style[w], r.style[w] = s[w];
                    p = u.call(r);
                    for (w in s) r.style[w] = x[w];
                    return p
                },
                Ei = new RegExp(Ct.join("|"), "i");
            (function() {
                function r() {
                    if (!!Z) {
                        U.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Yt.appendChild(U).appendChild(Z);
                        var le = e.getComputedStyle(Z);
                        u = le.top !== "1%", z = s(le.marginLeft) === 12, Z.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Yt.removeChild(U), Z = null
                    }
                }

                function s(le) {
                    return Math.round(parseFloat(le))
                }
                var u, p, w, x, T, z, U = P.createElement("div"),
                    Z = P.createElement("div");
                !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = Z.style.backgroundClip === "content-box", d.extend(K, {
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
                        return T == null && (le = P.createElement("table"), be = P.createElement("tr"), ne = P.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", be.style.cssText = "border:1px solid", be.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Yt.appendChild(le).appendChild(be).appendChild(ne), ce = e.getComputedStyle(be), T = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === be.offsetHeight, Yt.removeChild(le)), T
                    }
                }))
            })();

            function tt(r, s, u) {
                var p, w, x, T, z = r.style;
                return u = u || qn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Ze(r) && (T = d.style(r, s)), !K.pixelBoxStyles() && xi.test(T) && Ei.test(s) && (p = z.width, w = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = x)), T !== void 0 ? T + "" : T
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
                C = P.createElement("div").style,
                A = {};

            function Q(r) {
                for (var s = r[0].toUpperCase() + r.slice(1), u = o.length; u--;)
                    if (r = o[u] + s, r in C) return r
            }

            function Ce(r) {
                var s = d.cssProps[r] || A[r];
                return s || (r in C ? r : A[r] = Q(r) || r)
            }
            var qe = /^(none|table(?!-c[ea]).+)/,
                Rt = /^--/,
                Wt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Wn = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Bn(r, s, u) {
                var p = wt.exec(s);
                return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
            }

            function Xn(r, s, u, p, w, x) {
                var T = s === "width" ? 1 : 0,
                    z = 0,
                    U = 0;
                if (u === (p ? "border" : "content")) return 0;
                for (; T < 4; T += 2) u === "margin" && (U += d.css(r, u + Ct[T], !0, w)), p ? (u === "content" && (U -= d.css(r, "padding" + Ct[T], !0, w)), u !== "margin" && (U -= d.css(r, "border" + Ct[T] + "Width", !0, w))) : (U += d.css(r, "padding" + Ct[T], !0, w), u !== "padding" ? U += d.css(r, "border" + Ct[T] + "Width", !0, w) : z += d.css(r, "border" + Ct[T] + "Width", !0, w));
                return !p && x >= 0 && (U += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - U - z - .5)) || 0), U
            }

            function Rr(r, s, u) {
                var p = qn(r),
                    w = !K.boxSizingReliable() || u,
                    x = w && d.css(r, "boxSizing", !1, p) === "border-box",
                    T = x,
                    z = tt(r, s, p),
                    U = "offset" + s[0].toUpperCase() + s.slice(1);
                if (xi.test(z)) {
                    if (!u) return z;
                    z = "auto"
                }
                return (!K.boxSizingReliable() && x || !K.reliableTrDimensions() && Y(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = d.css(r, "boxSizing", !1, p) === "border-box", T = U in r, T && (z = r[U])), z = parseFloat(z) || 0, z + Xn(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
            }
            d.extend({
                cssHooks: {
                    opacity: {
                        get: function(r, s) {
                            if (s) {
                                var u = tt(r, "opacity");
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
                        var w, x, T, z = N(s),
                            U = Rt.test(s),
                            Z = r.style;
                        if (U || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                            if (x = typeof u, x === "string" && (w = wt.exec(u)) && w[1] && (u = V(r, s, w), x = "number"), u == null || u !== u) return;
                            x === "number" && !U && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !K.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (U ? Z.setProperty(s, u) : Z[s] = u)
                        } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                    }
                },
                css: function(r, s, u, p) {
                    var w, x, T, z = N(s),
                        U = Rt.test(s);
                    return U || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = tt(r, s, p)), w === "normal" && s in Wn && (w = Wn[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
                }
            }), d.each(["height", "width"], function(r, s) {
                d.cssHooks[s] = {
                    get: function(u, p, w) {
                        if (p) return qe.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Hi(u, Wt, function() {
                            return Rr(u, s, w)
                        }) : Rr(u, s, w)
                    },
                    set: function(u, p, w) {
                        var x, T = qn(u),
                            z = !K.scrollboxSize() && T.position === "absolute",
                            U = z || w,
                            Z = U && d.css(u, "boxSizing", !1, T) === "border-box",
                            le = w ? Xn(u, s, w, Z, T) : 0;
                        return Z && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Xn(u, s, "border", !1, T) - .5)), le && (x = wt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Bn(u, p, le)
                    }
                }
            }), d.cssHooks.marginLeft = y(K.reliableMarginLeft, function(r, s) {
                if (s) return (parseFloat(tt(r, "marginLeft")) || r.getBoundingClientRect().left - Hi(r, {
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
                        for (var p = 0, w = {}, x = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) w[r + Ct[p] + s] = x[p] || x[p - 2] || x[0];
                        return w
                    }
                }, r !== "margin" && (d.cssHooks[r + s].set = Bn)
            }), d.fn.extend({
                css: function(r, s) {
                    return g(this, function(u, p, w) {
                        var x, T, z = {},
                            U = 0;
                        if (Array.isArray(p)) {
                            for (x = qn(u), T = p.length; U < T; U++) z[p[U]] = d.css(u, p[U], !1, x);
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
                init: function(r, s, u, p, w, x) {
                    this.elem = r, this.prop = u, this.easing = w || d.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (d.cssNumber[u] ? "" : "px")
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
            var jt, qi, _o = /^(?:toggle|show|hide)$/,
                So = /queueHooks$/;

            function Lr() {
                qi && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Lr) : e.setTimeout(Lr, d.fx.interval), d.fx.tick())
            }

            function Dr() {
                return e.setTimeout(function() {
                    jt = void 0
                }), jt = Date.now()
            }

            function Wi(r, s) {
                var u, p = 0,
                    w = {
                        height: r
                    };
                for (s = s ? 1 : 0; p < 4; p += 2 - s) u = Ct[p], w["margin" + u] = w["padding" + u] = r;
                return s && (w.opacity = w.width = r), w
            }

            function ys(r, s, u) {
                for (var p, w = (bn.tweeners[s] || []).concat(bn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                    if (p = w[x].call(u, s, r)) return p
            }

            function ko(r, s, u) {
                var p, w, x, T, z, U, Z, le, be = "width" in s || "height" in s,
                    ne = this,
                    ce = {},
                    He = r.style,
                    ot = r.nodeType && F(r),
                    Fe = he.get(r, "fxshow");
                u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                    T.unqueued || z()
                }), T.unqueued++, ne.always(function() {
                    ne.always(function() {
                        T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                    })
                }));
                for (p in s)
                    if (w = s[p], _o.test(w)) {
                        if (delete s[p], x = x || w === "toggle", w === (ot ? "hide" : "show"))
                            if (w === "show" && Fe && Fe[p] !== void 0) ot = !0;
                            else continue;
                        ce[p] = Fe && Fe[p] || d.style(r, p)
                    } if (U = !d.isEmptyObject(s), !(!U && d.isEmptyObject(ce))) {
                    be && r.nodeType === 1 && (u.overflow = [He.overflow, He.overflowX, He.overflowY], Z = Fe && Fe.display, Z == null && (Z = he.get(r, "display")), le = d.css(r, "display"), le === "none" && (Z ? le = Z : (H([r], !0), Z = r.style.display || Z, le = d.css(r, "display"), H([r]))), (le === "inline" || le === "inline-block" && Z != null) && d.css(r, "float") === "none" && (U || (ne.done(function() {
                        He.display = Z
                    }), Z == null && (le = He.display, Z = le === "none" ? "" : le)), He.display = "inline-block")), u.overflow && (He.overflow = "hidden", ne.always(function() {
                        He.overflow = u.overflow[0], He.overflowX = u.overflow[1], He.overflowY = u.overflow[2]
                    })), U = !1;
                    for (p in ce) U || (Fe ? "hidden" in Fe && (ot = Fe.hidden) : Fe = he.access(r, "fxshow", {
                        display: Z
                    }), x && (Fe.hidden = !ot), ot && H([r], !0), ne.done(function() {
                        ot || H([r]), he.remove(r, "fxshow");
                        for (p in ce) d.style(r, p, ce[p])
                    })), U = ys(ot ? Fe[p] : 0, p, ne), p in Fe || (Fe[p] = U.start, ot && (U.end = U.start, U.start = 0))
                }
            }

            function ws(r, s) {
                var u, p, w, x, T;
                for (u in r)
                    if (p = N(u), w = s[p], x = r[u], Array.isArray(x) && (w = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = d.cssHooks[p], T && "expand" in T) {
                        x = T.expand(x), delete r[p];
                        for (u in x) u in r || (r[u] = x[u], s[u] = w)
                    } else s[p] = w
            }

            function bn(r, s, u) {
                var p, w, x = 0,
                    T = bn.prefilters.length,
                    z = d.Deferred().always(function() {
                        delete U.elem
                    }),
                    U = function() {
                        if (w) return !1;
                        for (var be = jt || Dr(), ne = Math.max(0, Z.startTime + Z.duration - be), ce = ne / Z.duration || 0, He = 1 - ce, ot = 0, Fe = Z.tweens.length; ot < Fe; ot++) Z.tweens[ot].run(He);
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
                        startTime: jt || Dr(),
                        duration: u.duration,
                        tweens: [],
                        createTween: function(be, ne) {
                            var ce = d.Tween(r, Z.opts, be, ne, Z.opts.specialEasing[be] || Z.opts.easing);
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
                for (ws(le, Z.opts.specialEasing); x < T; x++)
                    if (p = bn.prefilters[x].call(Z, r, le, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
                return d.map(le, ys, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(U, {
                    elem: r,
                    anim: Z,
                    queue: Z.opts.queue
                })), Z
            }
            d.Animation = d.extend(bn, {
                    tweeners: {
                        "*": [function(r, s) {
                            var u = this.createTween(r, s);
                            return V(u.elem, r, wt.exec(s), u), u
                        }]
                    },
                    tweener: function(r, s) {
                        re(r) ? (s = r, r = ["*"]) : r = r.match(ke);
                        for (var u, p = 0, w = r.length; p < w; p++) u = r[p], bn.tweeners[u] = bn.tweeners[u] || [], bn.tweeners[u].unshift(s)
                    },
                    prefilters: [ko],
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
                            x = d.speed(s, u, p),
                            T = function() {
                                var z = bn(this, d.extend({}, r), x);
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
                                T = d.timers,
                                z = he.get(this);
                            if (x) z[x] && z[x].stop && p(z[x]);
                            else
                                for (x in z) z[x] && z[x].stop && So.test(x) && p(z[x]);
                            for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), w = !1, T.splice(x, 1));
                            (w || !u) && d.dequeue(this, r)
                        })
                    },
                    finish: function(r) {
                        return r !== !1 && (r = r || "fx"), this.each(function() {
                            var s, u = he.get(this),
                                p = u[r + "queue"],
                                w = u[r + "queueHooks"],
                                x = d.timers,
                                T = p ? p.length : 0;
                            for (u.finish = !0, d.queue(this, r, []), w && w.stop && w.stop.call(this, !0), s = x.length; s--;) x[s].elem === this && x[s].queue === r && (x[s].anim.stop(!0), x.splice(s, 1));
                            for (s = 0; s < T; s++) p[s] && p[s].finish && p[s].finish.call(this);
                            delete u.finish
                        })
                    }
                }), d.each(["toggle", "show", "hide"], function(r, s) {
                    var u = d.fn[s];
                    d.fn[s] = function(p, w, x) {
                        return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Wi(s, !0), p, w, x)
                    }
                }), d.each({
                    slideDown: Wi("show"),
                    slideUp: Wi("hide"),
                    slideToggle: Wi("toggle"),
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
                    qi || (qi = !0, Lr())
                }, d.fx.stop = function() {
                    qi = null
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
            var Mr, _i = d.expr.attrHandle;
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
                    var p, w, x = r.nodeType;
                    if (!(x === 3 || x === 8 || x === 2)) {
                        if (typeof r.getAttribute > "u") return d.prop(r, s, u);
                        if ((x !== 1 || !d.isXMLDoc(r)) && (w = d.attrHooks[s.toLowerCase()] || (d.expr.match.bool.test(s) ? Mr : void 0)), u !== void 0) {
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
                            if (!K.radioValue && s === "radio" && Y(r, "input")) {
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
            }), Mr = {
                set: function(r, s, u) {
                    return s === !1 ? d.removeAttr(r, u) : r.setAttribute(u, u), u
                }
            }, d.each(d.expr.match.bool.source.match(/\w+/g), function(r, s) {
                var u = _i[s] || d.find.attr;
                _i[s] = function(p, w, x) {
                    var T, z, U = w.toLowerCase();
                    return x || (z = _i[U], _i[U] = T, T = u(p, w, x) != null ? U : null, _i[U] = z), T
                }
            });
            var To = /^(?:input|select|textarea|button)$/i,
                Ao = /^(?:a|area)$/i;
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
                    var p, w, x = r.nodeType;
                    if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !d.isXMLDoc(r)) && (s = d.propFix[s] || s, w = d.propHooks[s]), u !== void 0 ? w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : r[s] = u : w && "get" in w && (p = w.get(r, s)) !== null ? p : r[s]
                },
                propHooks: {
                    tabIndex: {
                        get: function(r) {
                            var s = d.find.attr(r, "tabindex");
                            return s ? parseInt(s, 10) : To.test(r.nodeName) || Ao.test(r.nodeName) && r.href ? 0 : -1
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

            function Kn(r) {
                var s = r.match(ke) || [];
                return s.join(" ")
            }

            function Yn(r) {
                return r.getAttribute && r.getAttribute("class") || ""
            }

            function Pr(r) {
                return Array.isArray(r) ? r : typeof r == "string" ? r.match(ke) || [] : []
            }
            d.fn.extend({
                addClass: function(r) {
                    var s, u, p, w, x, T, z, U = 0;
                    if (re(r)) return this.each(function(Z) {
                        d(this).addClass(r.call(this, Z, Yn(this)))
                    });
                    if (s = Pr(r), s.length) {
                        for (; u = this[U++];)
                            if (w = Yn(u), p = u.nodeType === 1 && " " + Kn(w) + " ", p) {
                                for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                                z = Kn(p), w !== z && u.setAttribute("class", z)
                            }
                    }
                    return this
                },
                removeClass: function(r) {
                    var s, u, p, w, x, T, z, U = 0;
                    if (re(r)) return this.each(function(Z) {
                        d(this).removeClass(r.call(this, Z, Yn(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if (s = Pr(r), s.length) {
                        for (; u = this[U++];)
                            if (w = Yn(u), p = u.nodeType === 1 && " " + Kn(w) + " ", p) {
                                for (T = 0; x = s[T++];)
                                    for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                                z = Kn(p), w !== z && u.setAttribute("class", z)
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
                        var w, x, T, z;
                        if (p)
                            for (x = 0, T = d(this), z = Pr(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                        else(r === void 0 || u === "boolean") && (w = Yn(this), w && he.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : he.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(r) {
                    var s, u, p = 0;
                    for (s = " " + r + " "; u = this[p++];)
                        if (u.nodeType === 1 && (" " + Kn(Yn(u)) + " ").indexOf(s) > -1) return !0;
                    return !1
                }
            });
            var Oo = /\r/g;
            d.fn.extend({
                val: function(r) {
                    var s, u, p, w = this[0];
                    return arguments.length ? (p = re(r), this.each(function(x) {
                        var T;
                        this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                            return z == null ? "" : z + ""
                        })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                    })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(Oo, "") : u == null ? "" : u)) : void 0
                }
            }), d.extend({
                valHooks: {
                    option: {
                        get: function(r) {
                            var s = d.find.attr(r, "value");
                            return s != null ? s : Kn(d.text(r))
                        }
                    },
                    select: {
                        get: function(r) {
                            var s, u, p, w = r.options,
                                x = r.selectedIndex,
                                T = r.type === "select-one",
                                z = T ? null : [],
                                U = T ? x + 1 : w.length;
                            for (x < 0 ? p = U : p = T ? x : 0; p < U; p++)
                                if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !Y(u.parentNode, "optgroup"))) {
                                    if (s = d(u).val(), T) return s;
                                    z.push(s)
                                } return z
                        },
                        set: function(r, s) {
                            for (var u, p, w = r.options, x = d.makeArray(s), T = w.length; T--;) p = w[T], (p.selected = d.inArray(d.valHooks.option.get(p), x) > -1) && (u = !0);
                            return u || (r.selectedIndex = -1), x
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
            var Vr = /^(?:focusinfocus|focusoutblur)$/,
                Jn = function(r) {
                    r.stopPropagation()
                };
            d.extend(d.event, {
                trigger: function(r, s, u, p) {
                    var w, x, T, z, U, Z, le, be, ne = [u || P],
                        ce = B.call(r, "type") ? r.type : r,
                        He = B.call(r, "namespace") ? r.namespace.split(".") : [];
                    if (x = be = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Vr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (He = ce.split("."), ce = He.shift(), He.sort()), U = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = He.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + He.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                        if (!p && !le.noBubble && !v(u)) {
                            for (z = le.delegateType || ce, Vr.test(z + ce) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                            T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                        }
                        for (w = 0;
                            (x = ne[w++]) && !r.isPropagationStopped();) be = x, r.type = w > 1 ? z : le.bindType || ce, Z = (he.get(x, "events") || Object.create(null))[r.type] && he.get(x, "handle"), Z && Z.apply(x, s), Z = U && x[U], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                        return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), s) === !1) && te(u) && U && re(u[ce]) && !v(u) && (T = u[U], T && (u[U] = null), d.event.triggered = ce, r.isPropagationStopped() && be.addEventListener(ce, Jn), u[ce](), r.isPropagationStopped() && be.removeEventListener(ce, Jn), d.event.triggered = void 0, T && (u[U] = T)), r.result
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
            var Si = e.location,
                Nr = {
                    guid: Date.now()
                },
                Xi = /\?/;
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
            var Io = /\[\]$/,
                bs = /\r?\n/g,
                Ro = /^(?:submit|button|image|reset|file)$/i,
                Lo = /^(?:input|select|textarea|keygen)/i;

            function Br(r, s, u, p) {
                var w;
                if (Array.isArray(s)) d.each(s, function(x, T) {
                    u || Io.test(r) ? p(r, T) : Br(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
                });
                else if (!u && se(s) === "object")
                    for (w in s) Br(r + "[" + w + "]", s[w], u, p);
                else p(r, s)
            }
            d.param = function(r, s) {
                var u, p = [],
                    w = function(x, T) {
                        var z = re(T) ? T() : T;
                        p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(z == null ? "" : z)
                    };
                if (r == null) return "";
                if (Array.isArray(r) || r.jquery && !d.isPlainObject(r)) d.each(r, function() {
                    w(this.name, this.value)
                });
                else
                    for (u in r) Br(u, r[u], s, w);
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
                        return this.name && !d(this).is(":disabled") && Lo.test(this.nodeName) && !Ro.test(r) && (this.checked || !fe.test(r))
                    }).map(function(r, s) {
                        var u = d(this).val();
                        return u == null ? null : Array.isArray(u) ? d.map(u, function(p) {
                            return {
                                name: s.name,
                                value: p.replace(bs, `\r
`)
                            }
                        }) : {
                            name: s.name,
                            value: u.replace(bs, `\r
`)
                        }
                    }).get()
                }
            });
            var Do = /%20/g,
                Mo = /#.*$/,
                Po = /([?&])_=[^&]*/,
                Qn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                Cs = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Vo = /^(?:GET|HEAD)$/,
                No = /^\/\//,
                xs = {},
                $r = {},
                Es = "*/".concat("*"),
                Fr = P.createElement("a");
            Fr.href = Si.href;

            function _s(r) {
                return function(s, u) {
                    typeof s != "string" && (u = s, s = "*");
                    var p, w = 0,
                        x = s.toLowerCase().match(ke) || [];
                    if (re(u))
                        for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
                }
            }

            function Ss(r, s, u, p) {
                var w = {},
                    x = r === $r;

                function T(z) {
                    var U;
                    return w[z] = !0, d.each(r[z] || [], function(Z, le) {
                        var be = le(s, u, p);
                        if (typeof be == "string" && !x && !w[be]) return s.dataTypes.unshift(be), T(be), !1;
                        if (x) return !(U = be)
                    }), U
                }
                return T(s.dataTypes[0]) || !w["*"] && T("*")
            }

            function jr(r, s) {
                var u, p, w = d.ajaxSettings.flatOptions || {};
                for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
                return p && d.extend(!0, r, p), r
            }

            function Bo(r, s, u) {
                for (var p, w, x, T, z = r.contents, U = r.dataTypes; U[0] === "*";) U.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
                if (p) {
                    for (w in z)
                        if (z[w] && z[w].test(p)) {
                            U.unshift(w);
                            break
                        }
                }
                if (U[0] in u) x = U[0];
                else {
                    for (w in u) {
                        if (!U[0] || r.converters[w + " " + U[0]]) {
                            x = w;
                            break
                        }
                        T || (T = w)
                    }
                    x = x || T
                }
                if (x) return x !== U[0] && U.unshift(x), u[x]
            }

            function $o(r, s, u, p) {
                var w, x, T, z, U, Z = {},
                    le = r.dataTypes.slice();
                if (le[1])
                    for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
                for (x = le.shift(); x;)
                    if (r.responseFields[x] && (u[r.responseFields[x]] = s), !U && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), U = x, x = le.shift(), x) {
                        if (x === "*") x = U;
                        else if (U !== "*" && U !== x) {
                            if (T = Z[U + " " + x] || Z["* " + x], !T) {
                                for (w in Z)
                                    if (z = w.split(" "), z[1] === x && (T = Z[U + " " + z[0]] || Z["* " + z[0]], T)) {
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
                                        error: T ? be : "No conversion from " + U + " to " + x
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
                    url: Si.href,
                    type: "GET",
                    isLocal: Cs.test(Si.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Es,
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
                    return s ? jr(jr(r, d.ajaxSettings), s) : jr(d.ajaxSettings, r)
                },
                ajaxPrefilter: _s(xs),
                ajaxTransport: _s($r),
                ajax: function(r, s) {
                    typeof r == "object" && (s = r, r = void 0), s = s || {};
                    var u, p, w, x, T, z, U, Z, le, be, ne = d.ajaxSetup({}, s),
                        ce = ne.context || ne,
                        He = ne.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                        ot = d.Deferred(),
                        Fe = d.Callbacks("once memory"),
                        zt = ne.statusCode || {},
                        Vt = {},
                        un = {},
                        _t = "canceled",
                        nt = {
                            readyState: 0,
                            getResponseHeader: function(ft) {
                                var Lt;
                                if (U) {
                                    if (!x)
                                        for (x = {}; Lt = Qn.exec(w);) x[Lt[1].toLowerCase() + " "] = (x[Lt[1].toLowerCase() + " "] || []).concat(Lt[2]);
                                    Lt = x[ft.toLowerCase() + " "]
                                }
                                return Lt == null ? null : Lt.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return U ? w : null
                            },
                            setRequestHeader: function(ft, Lt) {
                                return U == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Vt[ft] = Lt), this
                            },
                            overrideMimeType: function(ft) {
                                return U == null && (ne.mimeType = ft), this
                            },
                            statusCode: function(ft) {
                                var Lt;
                                if (ft)
                                    if (U) nt.always(ft[nt.status]);
                                    else
                                        for (Lt in ft) zt[Lt] = [zt[Lt], ft[Lt]];
                                return this
                            },
                            abort: function(ft) {
                                var Lt = ft || _t;
                                return u && u.abort(Lt), on(0, Lt), this
                            }
                        };
                    if (ot.promise(nt), ne.url = ((r || ne.url || Si.href) + "").replace(No, Si.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(ke) || [""], ne.crossDomain == null) {
                        z = P.createElement("a");
                        try {
                            z.href = ne.url, z.href = z.href, ne.crossDomain = Fr.protocol + "//" + Fr.host != z.protocol + "//" + z.host
                        } catch {
                            ne.crossDomain = !0
                        }
                    }
                    if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), Ss(xs, ne, s, nt), U) return nt;
                    Z = d.event && ne.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Vo.test(ne.type), p = ne.url.replace(Mo, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Do, "+")) : (be = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Xi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Po, "$1"), be = (Xi.test(p) ? "&" : "?") + "_=" + Nr.guid++ + be), ne.url = p + be), ne.ifModified && (d.lastModified[p] && nt.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && nt.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && nt.setRequestHeader("Content-Type", ne.contentType), nt.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + Es + "; q=0.01" : "") : ne.accepts["*"]);
                    for (le in ne.headers) nt.setRequestHeader(le, ne.headers[le]);
                    if (ne.beforeSend && (ne.beforeSend.call(ce, nt, ne) === !1 || U)) return nt.abort();
                    if (_t = "abort", Fe.add(ne.complete), nt.done(ne.success), nt.fail(ne.error), u = Ss($r, ne, s, nt), !u) on(-1, "No Transport");
                    else {
                        if (nt.readyState = 1, Z && He.trigger("ajaxSend", [nt, ne]), U) return nt;
                        ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                            nt.abort("timeout")
                        }, ne.timeout));
                        try {
                            U = !1, u.send(Vt, on)
                        } catch (ft) {
                            if (U) throw ft;
                            on(-1, ft)
                        }
                    }

                    function on(ft, Lt, Ti, Ki) {
                        var hn, Zn, ei, an, Mn, vn = Lt;
                        U || (U = !0, T && e.clearTimeout(T), u = void 0, w = Ki || "", nt.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, Ti && (an = Bo(ne, nt, Ti)), !hn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = $o(ne, an, nt, hn), hn ? (ne.ifModified && (Mn = nt.getResponseHeader("Last-Modified"), Mn && (d.lastModified[p] = Mn), Mn = nt.getResponseHeader("etag"), Mn && (d.etag[p] = Mn)), ft === 204 || ne.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Zn = an.data, ei = an.error, hn = !ei)) : (ei = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), nt.status = ft, nt.statusText = (Lt || vn) + "", hn ? ot.resolveWith(ce, [Zn, vn, nt]) : ot.rejectWith(ce, [nt, vn, ei]), nt.statusCode(zt), zt = void 0, Z && He.trigger(hn ? "ajaxSuccess" : "ajaxError", [nt, ne, hn ? Zn : ei]), Fe.fireWith(ce, [nt, vn]), Z && (He.trigger("ajaxComplete", [nt, ne]), --d.active || d.event.trigger("ajaxStop")))
                    }
                    return nt
                },
                getJSON: function(r, s, u) {
                    return d.get(r, s, u, "json")
                },
                getScript: function(r, s) {
                    return d.get(r, void 0, s, "script")
                }
            }), d.each(["get", "post"], function(r, s) {
                d[s] = function(u, p, w, x) {
                    return re(p) && (x = x || w, w = p, p = void 0), d.ajax(d.extend({
                        url: u,
                        type: s,
                        dataType: x,
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
            var Fo = {
                    0: 200,
                    1223: 204
                },
                ki = d.ajaxSettings.xhr();
            K.cors = !!ki && "withCredentials" in ki, K.ajax = ki = !!ki, d.ajaxTransport(function(r) {
                var s, u;
                if (K.cors || ki && !r.crossDomain) return {
                    send: function(p, w) {
                        var x, T = r.xhr();
                        if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                            for (x in r.xhrFields) T[x] = r.xhrFields[x];
                        r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                        for (x in p) T.setRequestHeader(x, p[x]);
                        s = function(z) {
                            return function() {
                                s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(Fo[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
            var zr = [],
                Ur = /(=)\?(?=&|$)|\?\?/;
            d.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var r = zr.pop() || d.expando + "_" + Nr.guid++;
                    return this[r] = !0, r
                }
            }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
                var p, w, x, T = r.jsonp !== !1 && (Ur.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ur.test(r.data) && "data");
                if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(Ur, "$1" + p) : r.jsonp !== !1 && (r.url += (Xi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                    return x || d.error(p + " was not called"), x[0]
                }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                    x = arguments
                }, u.always(function() {
                    w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, zr.push(p)), x && re(w) && w(x[0]), x = w = void 0
                }), "script"
            }), K.createHTMLDocument = function() {
                var r = P.implementation.createHTMLDocument("").body;
                return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
            }(), d.parseHTML = function(r, s, u) {
                if (typeof r != "string") return [];
                typeof s == "boolean" && (u = s, s = !1);
                var p, w, x;
                return s || (K.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = je.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = Ln([r], s, x), x && x.length && d(x).remove(), d.merge([], w.childNodes))
            }, d.fn.load = function(r, s, u) {
                var p, w, x, T = this,
                    z = r.indexOf(" ");
                return z > -1 && (p = Kn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
                    url: r,
                    type: w || "GET",
                    dataType: "html",
                    data: s
                }).done(function(U) {
                    x = arguments, T.html(p ? d("<div>").append(d.parseHTML(U)).find(p) : U)
                }).always(u && function(U, Z) {
                    T.each(function() {
                        u.apply(this, x || [U.responseText, Z, U])
                    })
                }), this
            }, d.expr.pseudos.animated = function(r) {
                return d.grep(d.timers, function(s) {
                    return r === s.elem
                }).length
            }, d.offset = {
                setOffset: function(r, s, u) {
                    var p, w, x, T, z, U, Z, le = d.css(r, "position"),
                        be = d(r),
                        ne = {};
                    le === "static" && (r.style.position = "relative"), z = be.offset(), x = d.css(r, "top"), U = d.css(r, "left"), Z = (le === "absolute" || le === "fixed") && (x + U).indexOf("auto") > -1, Z ? (p = be.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(U) || 0), re(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (ne.top = s.top - z.top + T), s.left != null && (ne.left = s.left - z.left + w), "using" in s ? s.using.call(r, ne) : be.css(ne)
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
                        return r || Yt
                    })
                }
            }), d.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(r, s) {
                var u = s === "pageYOffset";
                d.fn[r] = function(p) {
                    return g(this, function(w, x, T) {
                        var z;
                        if (v(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
                        z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[x] = T
                    }, r, p, arguments.length)
                }
            }), d.each(["top", "left"], function(r, s) {
                d.cssHooks[s] = y(K.pixelPosition, function(u, p) {
                    if (p) return p = tt(u, s), xi.test(p) ? d(u).position()[s] + "px" : p
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
                    d.fn[p] = function(w, x) {
                        var T = arguments.length && (u || typeof w != "boolean"),
                            z = u || (w === !0 || x === !0 ? "margin" : "border");
                        return g(this, function(U, Z, le) {
                            var be;
                            return v(U) ? p.indexOf("outer") === 0 ? U["inner" + r] : U.document.documentElement["client" + r] : U.nodeType === 9 ? (be = U.documentElement, Math.max(U.body["scroll" + r], be["scroll" + r], U.body["offset" + r], be["offset" + r], be["client" + r])) : le === void 0 ? d.css(U, Z, z) : d.style(U, Z, le, z)
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
            var ks = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            d.proxy = function(r, s) {
                var u, p, w;
                if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = f.call(arguments, 2), w = function() {
                    return r.apply(s || this, p.concat(f.call(arguments)))
                }, w.guid = r.guid = r.guid || d.guid++, w
            }, d.holdReady = function(r) {
                r ? d.readyWait++ : d.ready(!0)
            }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = Y, d.isFunction = re, d.isWindow = v, d.camelCase = N, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
                var s = d.type(r);
                return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
            }, d.trim = function(r) {
                return r == null ? "" : (r + "").replace(ks, "")
            };
            var jo = e.jQuery,
                zo = e.$;
            return d.noConflict = function(r) {
                return e.$ === d && (e.$ = zo), r && e.jQuery === d && (e.jQuery = jo), d
            }, typeof n > "u" && (e.jQuery = e.$ = d), d
        })
    }(ta)), ta.exports
}
var Pe = Lc(),
    Xe = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Bi.exports,
                a;
            try {
                a = Lc()
            } catch {}
            e(n, t, i, a)
        }
    })(function(e, n, i, a) {
        var f = e.Backbone,
            m = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = a, n.noConflict = function() {
            return e.Backbone = f, this
        }, n.emulateHTTP = !1, n.emulateJSON = !1;
        var _ = function(E, l, g) {
                switch (E) {
                    case 1:
                        return function() {
                            return i[l](this[g])
                        };
                    case 2:
                        return function(S) {
                            return i[l](this[g], S)
                        };
                    case 3:
                        return function(S, O) {
                            return i[l](this[g], I(S, this), O)
                        };
                    case 4:
                        return function(S, O, M) {
                            return i[l](this[g], I(S, this), O, M)
                        };
                    default:
                        return function() {
                            var S = m.call(arguments);
                            return S.unshift(this[g]), i[l].apply(i, S)
                        }
                }
            },
            k = function(E, l, g) {
                i.each(l, function(S, O) {
                    i[O] && (E.prototype[O] = _(S, O, g))
                })
            },
            I = function(E, l) {
                return i.isFunction(E) ? E : i.isObject(E) && !l._isModel(E) ? L(E) : i.isString(E) ? function(g) {
                    return g.get(E)
                } : E
            },
            L = function(E) {
                var l = i.matches(E);
                return function(g) {
                    return l(g.attributes)
                }
            },
            B = n.Events = {},
            J = /\s+/,
            ie = function(E, l, g, S, O) {
                var M = 0,
                    N;
                if (g && typeof g == "object")
                    for (S !== void 0 && ("context" in O) && O.context === void 0 && (O.context = S), N = i.keys(g); M < N.length; M++) l = ie(E, l, N[M], g[N[M]], O);
                else if (g && J.test(g))
                    for (N = g.split(J); M < N.length; M++) l = E(l, N[M], S, O);
                else l = E(l, g, S, O);
                return l
            };
        B.on = function(E, l, g) {
            return K(this, E, l, g)
        };
        var K = function(E, l, g, S, O) {
            if (E._events = ie(re, E._events || {}, l, g, {
                    context: S,
                    ctx: E,
                    listening: O
                }), O) {
                var M = E._listeners || (E._listeners = {});
                M[O.id] = O
            }
            return E
        };
        B.listenTo = function(E, l, g) {
            if (!E) return this;
            var S = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                M = O[S];
            if (!M) {
                var N = this._listenId || (this._listenId = i.uniqueId("l"));
                M = O[S] = {
                    obj: E,
                    objId: S,
                    id: N,
                    listeningTo: O,
                    count: 0
                }
            }
            return K(E, l, g, this, M), this
        };
        var re = function(E, l, g, S) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    M = S.context,
                    N = S.ctx,
                    te = S.listening;
                te && te.count++, O.push({
                    callback: g,
                    context: M,
                    ctx: M || N,
                    listening: te
                })
            }
            return E
        };
        B.off = function(E, l, g) {
            return this._events ? (this._events = ie(v, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, B.stopListening = function(E, l, g) {
            var S = this._listeningTo;
            if (!S) return this;
            for (var O = E ? [E._listenId] : i.keys(S), M = 0; M < O.length; M++) {
                var N = S[O[M]];
                if (!N) break;
                N.obj.off(l, g, this)
            }
            return this
        };
        var v = function(E, l, g, S) {
            if (!!E) {
                var O = 0,
                    M, N = S.context,
                    te = S.listeners;
                if (!l && !g && !N) {
                    for (var Se = i.keys(te); O < Se.length; O++) M = te[Se[O]], delete te[M.id], delete M.listeningTo[M.objId];
                    return
                }
                for (var he = l ? [l] : i.keys(E); O < he.length; O++) {
                    l = he[O];
                    var Re = E[l];
                    if (!Re) break;
                    for (var Le = [], rt = 0; rt < Re.length; rt++) {
                        var xt = Re[rt];
                        g && g !== xt.callback && g !== xt.callback._callback || N && N !== xt.context ? Le.push(xt) : (M = xt.listening, M && --M.count === 0 && (delete te[M.id], delete M.listeningTo[M.objId]))
                    }
                    Le.length ? E[l] = Le : delete E[l]
                }
                return E
            }
        };
        B.once = function(E, l, g) {
            var S = ie(P, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(S, l, g)
        }, B.listenToOnce = function(E, l, g) {
            var S = ie(P, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, S)
        };
        var P = function(E, l, g, S) {
            if (g) {
                var O = E[l] = i.once(function() {
                    S(l, O), g.apply(this, arguments)
                });
                O._callback = g
            }
            return E
        };
        B.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), S = 0; S < l; S++) g[S] = arguments[S + 1];
            return ie(q, this._events, E, void 0, g), this
        };
        var q = function(E, l, g, S) {
                if (E) {
                    var O = E[l],
                        M = E.all;
                    O && M && (M = M.slice()), O && ae(O, S), M && ae(M, [l].concat(S))
                }
                return E
            },
            ae = function(E, l) {
                var g, S = -1,
                    O = E.length,
                    M = l[0],
                    N = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, M);
                        return;
                    case 2:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, M, N);
                        return;
                    case 3:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, M, N, te);
                        return;
                    default:
                        for (; ++S < O;)(g = E[S]).callback.apply(g.ctx, l);
                        return
                }
            };
        B.bind = B.on, B.unbind = B.off, i.extend(n, B);
        var se = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var S = i.result(this, "defaults");
            g = i.defaults(i.extend({}, S, g), S), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(se.prototype, B, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            cidPrefix: "c",
            initialize: function() {},
            toJSON: function(E) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            get: function(E) {
                return this.attributes[E]
            },
            escape: function(E) {
                return i.escape(this.get(E))
            },
            has: function(E) {
                return this.get(E) != null
            },
            matches: function(E) {
                return !!i.iteratee(E, this)(this.attributes)
            },
            set: function(E, l, g) {
                if (E == null) return this;
                var S;
                if (typeof E == "object" ? (S = E, g = l) : (S = {})[E] = l, g || (g = {}), !this._validate(S, g)) return !1;
                var O = g.unset,
                    M = g.silent,
                    N = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var Se = this.attributes,
                    he = this.changed,
                    Re = this._previousAttributes;
                for (var Le in S) l = S[Le], i.isEqual(Se[Le], l) || N.push(Le), i.isEqual(Re[Le], l) ? delete he[Le] : he[Le] = l, O ? delete Se[Le] : Se[Le] = l;
                if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !M) {
                    N.length && (this._pending = g);
                    for (var rt = 0; rt < N.length; rt++) this.trigger("change:" + N[rt], this, Se[N[rt]], g)
                }
                if (te) return this;
                if (!M)
                    for (; this._pending;) g = this._pending, this._pending = !1, this.trigger("change", this, g);
                return this._pending = !1, this._changing = !1, this
            },
            unset: function(E, l) {
                return this.set(E, void 0, i.extend({}, l, {
                    unset: !0
                }))
            },
            clear: function(E) {
                var l = {};
                for (var g in this.attributes) l[g] = void 0;
                return this.set(l, i.extend({}, E, {
                    unset: !0
                }))
            },
            hasChanged: function(E) {
                return E == null ? !i.isEmpty(this.changed) : i.has(this.changed, E)
            },
            changedAttributes: function(E) {
                if (!E) return this.hasChanged() ? i.clone(this.changed) : !1;
                var l = this._changing ? this._previousAttributes : this.attributes,
                    g = {};
                for (var S in E) {
                    var O = E[S];
                    i.isEqual(l[S], O) || (g[S] = O)
                }
                return i.size(g) ? g : !1
            },
            previous: function(E) {
                return E == null || !this._previousAttributes ? null : this._previousAttributes[E]
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            fetch: function(E) {
                E = i.extend({
                    parse: !0
                }, E);
                var l = this,
                    g = E.success;
                return E.success = function(S) {
                    var O = E.parse ? l.parse(S, E) : S;
                    if (!l.set(O, E)) return !1;
                    g && g.call(E.context, l, S, E), l.trigger("sync", l, S, E)
                }, Ht(this, E), this.sync("read", this, E)
            },
            save: function(E, l, g) {
                var S;
                E == null || typeof E == "object" ? (S = E, g = l) : (S = {})[E] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var O = g.wait;
                if (S && !O) {
                    if (!this.set(S, g)) return !1
                } else if (!this._validate(S, g)) return !1;
                var M = this,
                    N = g.success,
                    te = this.attributes;
                g.success = function(Re) {
                    M.attributes = te;
                    var Le = g.parse ? M.parse(Re, g) : Re;
                    if (O && (Le = i.extend({}, S, Le)), Le && !M.set(Le, g)) return !1;
                    N && N.call(g.context, M, Re, g), M.trigger("sync", M, Re, g)
                }, Ht(this, g), S && O && (this.attributes = i.extend({}, te, S));
                var Se = this.isNew() ? "create" : g.patch ? "patch" : "update";
                Se === "patch" && !g.attrs && (g.attrs = S);
                var he = this.sync(Se, this, g);
                return this.attributes = te, he
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    S = E.wait,
                    O = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(N) {
                    S && O(), g && g.call(E.context, l, N, E), l.isNew() || l.trigger("sync", l, N, E)
                };
                var M = !1;
                return this.isNew() ? i.defer(E.success) : (Ht(this, E), M = this.sync("delete", this, E)), S || O(), M
            },
            url: function() {
                var E = i.result(this, "urlRoot") || i.result(this.collection, "url") || Bt();
                if (this.isNew()) return E;
                var l = this.get(this.idAttribute);
                return E.replace(/[^\/]$/, "$&/") + encodeURIComponent(l)
            },
            parse: function(E, l) {
                return E
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return !this.has(this.idAttribute)
            },
            isValid: function(E) {
                return this._validate({}, i.extend({}, E, {
                    validate: !0
                }))
            },
            _validate: function(E, l) {
                if (!l.validate || !this.validate) return !0;
                E = i.extend({}, this.attributes, E);
                var g = this.validationError = this.validate(E, l) || null;
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
        var d = n.Collection = function(E, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), E && this.reset(E, i.extend({
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
            Me = function(E, l, g) {
                g = Math.min(Math.max(g, 0), E.length);
                var S = Array(E.length - g),
                    O = l.length,
                    M;
                for (M = 0; M < S.length; M++) S[M] = E[M + g];
                for (M = 0; M < O; M++) E[M + g] = l[M];
                for (M = 0; M < S.length; M++) E[M + O + g] = S[M]
            };
        i.extend(d.prototype, B, {
            model: se,
            initialize: function() {},
            toJSON: function(E) {
                return this.map(function(l) {
                    return l.toJSON(E)
                })
            },
            sync: function() {
                return n.sync.apply(this, arguments)
            },
            add: function(E, l) {
                return this.set(E, i.extend({
                    merge: !1
                }, l, Ae))
            },
            remove: function(E, l) {
                l = i.extend({}, l);
                var g = !i.isArray(E);
                E = g ? [E] : E.slice();
                var S = this._removeModels(E, l);
                return !l.silent && S.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: S
                }, this.trigger("update", this, l)), g ? S[0] : S
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, Ee, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var S = l.at;
                    S != null && (S = +S), S > this.length && (S = this.length), S < 0 && (S += this.length + 1);
                    var O = [],
                        M = [],
                        N = [],
                        te = [],
                        Se = {},
                        he = l.add,
                        Re = l.merge,
                        Le = l.remove,
                        rt = !1,
                        xt = this.comparator && S == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, wt;
                    for (wt = 0; wt < E.length; wt++) {
                        ct = E[wt];
                        var Ct = this.get(ct);
                        if (Ct) {
                            if (Re && ct !== Ct) {
                                var Yt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Yt = Ct.parse(Yt, l)), Ct.set(Yt, l), N.push(Ct), xt && !rt && (rt = Ct.hasChanged(rn))
                            }
                            Se[Ct.cid] || (Se[Ct.cid] = !0, O.push(Ct)), E[wt] = Ct
                        } else he && (ct = E[wt] = this._prepareModel(ct, l), ct && (M.push(ct), this._addReference(ct, l), Se[ct.cid] = !0, O.push(ct)))
                    }
                    if (Le) {
                        for (wt = 0; wt < this.length; wt++) ct = this.models[wt], Se[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Ze = !1,
                        Mt = !xt && he && Le;
                    if (O.length && Mt ? (Ze = this.length !== O.length || i.some(this.models, function(F, V) {
                            return F !== O[V]
                        }), this.models.length = 0, Me(this.models, O, 0), this.length = this.models.length) : M.length && (xt && (rt = !0), Me(this.models, M, S == null ? this.length : S), this.length = this.models.length), rt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (wt = 0; wt < M.length; wt++) S != null && (l.index = S + wt), ct = M[wt], ct.trigger("add", ct, this, l);
                        (rt || Ze) && this.trigger("sort", this, l), (M.length || te.length || N.length) && (l.changes = {
                            added: M,
                            removed: te,
                            merged: N
                        }, this.trigger("update", this, l))
                    }
                    return g ? E[0] : E
                }
            },
            reset: function(E, l) {
                l = l ? i.clone(l) : {};
                for (var g = 0; g < this.models.length; g++) this._removeReference(this.models[g], l);
                return l.previousModels = this.models, this._reset(), E = this.add(E, i.extend({
                    silent: !0
                }, l)), l.silent || this.trigger("reset", this, l), E
            },
            push: function(E, l) {
                return this.add(E, i.extend({
                    at: this.length
                }, l))
            },
            pop: function(E) {
                var l = this.at(this.length - 1);
                return this.remove(l, E)
            },
            unshift: function(E, l) {
                return this.add(E, i.extend({
                    at: 0
                }, l))
            },
            shift: function(E) {
                var l = this.at(0);
                return this.remove(l, E)
            },
            slice: function() {
                return m.apply(this.models, arguments)
            },
            get: function(E) {
                if (E != null) return this._byId[E] || this._byId[this.modelId(E.attributes || E)] || E.cid && this._byId[E.cid]
            },
            has: function(E) {
                return this.get(E) != null
            },
            at: function(E) {
                return E < 0 && (E += this.length), this.models[E]
            },
            where: function(E, l) {
                return this[l ? "find" : "filter"](E)
            },
            findWhere: function(E) {
                return this.where(E, !0)
            },
            sort: function(E) {
                var l = this.comparator;
                if (!l) throw new Error("Cannot sort a set without a comparator");
                E || (E = {});
                var g = l.length;
                return i.isFunction(l) && (l = i.bind(l, this)), g === 1 || i.isString(l) ? this.models = this.sortBy(l) : this.models.sort(l), E.silent || this.trigger("sort", this, E), this
            },
            pluck: function(E) {
                return this.map(E + "")
            },
            fetch: function(E) {
                E = i.extend({
                    parse: !0
                }, E);
                var l = E.success,
                    g = this;
                return E.success = function(S) {
                    var O = E.reset ? "reset" : "set";
                    g[O](S, E), l && l.call(E.context, g, S, E), g.trigger("sync", g, S, E)
                }, Ht(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var S = this,
                    O = l.success;
                return l.success = function(M, N, te) {
                    g && S.add(M, te), O && O.call(te.context, M, N, te)
                }, E.save(null, l), E
            },
            parse: function(E, l) {
                return E
            },
            clone: function() {
                return new this.constructor(this.models, {
                    model: this.model,
                    comparator: this.comparator
                })
            },
            modelId: function(E) {
                return E[this.model.prototype.idAttribute || "id"]
            },
            _reset: function() {
                this.length = 0, this.models = [], this._byId = {}
            },
            _prepareModel: function(E, l) {
                if (this._isModel(E)) return E.collection || (E.collection = this), E;
                l = l ? i.clone(l) : {}, l.collection = this;
                var g = new this.model(E, l);
                return g.validationError ? (this.trigger("invalid", this, g.validationError, l), !1) : g
            },
            _removeModels: function(E, l) {
                for (var g = [], S = 0; S < E.length; S++) {
                    var O = this.get(E[S]);
                    if (!!O) {
                        var M = this.indexOf(O);
                        this.models.splice(M, 1), this.length--, delete this._byId[O.cid];
                        var N = this.modelId(O.attributes);
                        N != null && delete this._byId[N], l.silent || (l.index = M, O.trigger("remove", O, this, l)), g.push(O), this._removeReference(O, l)
                    }
                }
                return g
            },
            _isModel: function(E) {
                return E instanceof se
            },
            _addReference: function(E, l) {
                this._byId[E.cid] = E;
                var g = this.modelId(E.attributes);
                g != null && (this._byId[g] = E), E.on("all", this._onModelEvent, this)
            },
            _removeReference: function(E, l) {
                delete this._byId[E.cid];
                var g = this.modelId(E.attributes);
                g != null && delete this._byId[g], this === E.collection && delete E.collection, E.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(E, l, g, S) {
                if (l) {
                    if ((E === "add" || E === "remove") && g !== this) return;
                    if (E === "destroy" && this.remove(l, S), E === "change") {
                        var O = this.modelId(l.previousAttributes()),
                            M = this.modelId(l.attributes);
                        O !== M && (O != null && delete this._byId[O], M != null && (this._byId[M] = l))
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
        var Be = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, je)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            Y = /^(\S+)\s*(.*)$/,
            je = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Be.prototype, B, {
            tagName: "div",
            $: function(E) {
                return this.$el.find(E)
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
            setElement: function(E) {
                return this.undelegateEvents(), this._setElement(E), this.delegateEvents(), this
            },
            _setElement: function(E) {
                this.$el = E instanceof n.$ ? E : n.$(E), this.el = this.$el[0]
            },
            delegateEvents: function(E) {
                if (E || (E = i.result(this, "events")), !E) return this;
                this.undelegateEvents();
                for (var l in E) {
                    var g = E[l];
                    if (i.isFunction(g) || (g = this[g]), !!g) {
                        var S = l.match(Y);
                        this.delegate(S[1], S[2], i.bind(g, this))
                    }
                }
                return this
            },
            delegate: function(E, l, g) {
                return this.$el.on(E + ".delegateEvents" + this.cid, l, g), this
            },
            undelegateEvents: function() {
                return this.$el && this.$el.off(".delegateEvents" + this.cid), this
            },
            undelegate: function(E, l, g) {
                return this.$el.off(E + ".delegateEvents" + this.cid, l, g), this
            },
            _createElement: function(E) {
                return document.createElement(E)
            },
            _ensureElement: function() {
                if (this.el) this.setElement(i.result(this, "el"));
                else {
                    var E = i.extend({}, i.result(this, "attributes"));
                    this.id && (E.id = i.result(this, "id")), this.className && (E.class = i.result(this, "className")), this.setElement(this._createElement(i.result(this, "tagName"))), this._setAttributes(E)
                }
            },
            _setAttributes: function(E) {
                this.$el.attr(E)
            }
        }), n.sync = function(E, l, g) {
            var S = G[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var O = {
                type: S,
                dataType: "json"
            };
            if (g.url || (O.url = i.result(l, "url") || Bt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (O.contentType = "application/json", O.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (O.contentType = "application/x-www-form-urlencoded", O.data = O.data ? {
                    model: O.data
                } : {}), g.emulateHTTP && (S === "PUT" || S === "DELETE" || S === "PATCH")) {
                O.type = "POST", g.emulateJSON && (O.data._method = S);
                var M = g.beforeSend;
                g.beforeSend = function(Se) {
                    if (Se.setRequestHeader("X-HTTP-Method-Override", S), M) return M.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var N = g.error;
            g.error = function(Se, he, Re) {
                g.textStatus = he, g.errorThrown = Re, N && N.call(g.context, Se, he, Re)
            };
            var te = g.xhr = n.ajax(i.extend(O, g));
            return l.trigger("request", l, te, g), te
        };
        var G = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        n.ajax = function() {
            return n.$.ajax.apply(n.$, arguments)
        };
        var oe = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Te = /\((.*?)\)/g,
            we = /(\(\?)?:\w+/g,
            ye = /\*\w+/g,
            ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(oe.prototype, B, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var S = this;
                return n.history.route(E, function(O) {
                    var M = S._extractParameters(E, O);
                    S.execute(g, M, l) !== !1 && (S.trigger.apply(S, ["route:" + l].concat(M)), S.trigger("route", l, M), n.history.trigger("route", S, l, M))
                }), this
            },
            execute: function(E, l, g) {
                E && E.apply(this, l)
            },
            navigate: function(E, l) {
                return n.history.navigate(E, l), this
            },
            _bindRoutes: function() {
                if (!!this.routes) {
                    this.routes = i.result(this, "routes");
                    for (var E, l = i.keys(this.routes);
                        (E = l.pop()) != null;) this.route(E, this.routes[E])
                }
            },
            _routeToRegExp: function(E) {
                return E = E.replace(ue, "\\$&").replace(Te, "(?:$1)?").replace(we, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(ye, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(E, l) {
                var g = E.exec(l).slice(1);
                return i.map(g, function(S, O) {
                    return O === g.length - 1 ? S || null : S ? decodeURIComponent(S) : null
                })
            }
        });
        var _e = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            ke = /^[#\/]|\s+$/g,
            $e = /^\/+|\/+$/g,
            Qe = /#.*$/;
        _e.started = !1, i.extend(_e.prototype, B, {
            interval: 50,
            atRoot: function() {
                var E = this.location.pathname.replace(/[^\/]$/, "$&/");
                return E === this.root && !this.getSearch()
            },
            matchRoot: function() {
                var E = this.decodeFragment(this.location.pathname),
                    l = E.slice(0, this.root.length - 1) + "/";
                return l === this.root
            },
            decodeFragment: function(E) {
                return decodeURI(E.replace(/%25/g, "%2525"))
            },
            getSearch: function() {
                var E = this.location.href.replace(/#.*/, "").match(/\?.+/);
                return E ? E[0] : ""
            },
            getHash: function(E) {
                var l = (E || this).location.href.match(/#(.*)$/);
                return l ? l[1] : ""
            },
            getPath: function() {
                var E = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                return E.charAt(0) === "/" ? E.slice(1) : E
            },
            getFragment: function(E) {
                return E == null && (this._usePushState || !this._wantsHashChange ? E = this.getPath() : E = this.getHash()), E.replace(ke, "")
            },
            start: function(E) {
                if (_e.started) throw new Error("Backbone.history has already been started");
                if (_e.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, E), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace($e, "/"), this._wantsHashChange && this._wantsPushState)
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
                var O = window.addEventListener || function(M, N) {
                    return attachEvent("on" + M, N)
                };
                if (this._usePushState ? O("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? O("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var E = window.removeEventListener || function(l, g) {
                    return detachEvent("on" + l, g)
                };
                this._usePushState ? E("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && E("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), _e.started = !1
            },
            route: function(E, l) {
                this.handlers.unshift({
                    route: E,
                    callback: l
                })
            },
            checkUrl: function(E) {
                var l = this.getFragment();
                if (l === this.fragment && this.iframe && (l = this.getHash(this.iframe.contentWindow)), l === this.fragment) return !1;
                this.iframe && this.navigate(l), this.loadUrl()
            },
            loadUrl: function(E) {
                return this.matchRoot() ? (E = this.fragment = this.getFragment(E), i.some(this.handlers, function(l) {
                    if (l.route.test(E)) return l.callback(E), !0
                })) : !1
            },
            navigate: function(E, l) {
                if (!_e.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), E = this.getFragment(E || "");
                var g = this.root;
                (E === "" || E.charAt(0) === "?") && (g = g.slice(0, -1) || "/");
                var S = g + E;
                if (E = this.decodeFragment(E.replace(Qe, "")), this.fragment !== E) {
                    if (this.fragment = E, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, S);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, E, l.replace), this.iframe && E !== this.getHash(this.iframe.contentWindow)) {
                            var O = this.iframe.contentWindow;
                            l.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, E, l.replace)
                        }
                    } else return this.location.assign(S);
                    if (l.trigger) return this.loadUrl(E)
                }
            },
            _updateHash: function(E, l, g) {
                if (g) {
                    var S = E.href.replace(/(javascript:|#).*$/, "");
                    E.replace(S + "#" + l)
                } else E.hash = "#" + l
            }
        }), n.history = new _e;
        var dt = function(E, l) {
            var g = this,
                S;
            return E && i.has(E, "constructor") ? S = E.constructor : S = function() {
                return g.apply(this, arguments)
            }, i.extend(S, g, l), S.prototype = i.create(g.prototype, E), S.prototype.constructor = S, S.__super__ = g.prototype, S
        };
        se.extend = d.extend = oe.extend = Be.extend = _e.extend = dt;
        var Bt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Ht = function(E, l) {
                var g = l.error;
                l.error = function(S) {
                    g && g.call(l.context, E, S, l), E.trigger("error", E, S, l)
                }
            };
        return n
    })
})(Xe);
var Dc = {
        exports: {}
    },
    na = {
        exports: {}
    },
    El;

function Dh() {
    return El || (El = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Bi.exports, Xe)
        })(vt, function(n, i) {
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
            }, m.DEBUG = !1, m._debugText = function(v, P, q) {
                return v + (q ? " on the " + q + " channel" : "") + ': "' + P + '"'
            }, m.debugLog = function(v, P, q) {
                m.DEBUG && console && console.warn && console.warn(m._debugText(v, P, q))
            };
            var _ = /\s+/;
            m._eventsApi = function(v, P, q, ae) {
                if (!q) return !1;
                var se = {};
                if ((typeof q > "u" ? "undefined" : a(q)) === "object") {
                    for (var ve in q) {
                        var d = v[P].apply(v, [ve, q[ve]].concat(ae));
                        _.test(ve) ? n.extend(se, d) : se[ve] = d
                    }
                    return se
                }
                if (_.test(q)) {
                    for (var Ee = q.split(_), Ae = 0, Me = Ee.length; Ae < Me; Ae++) se[Ee[Ae]] = v[P].apply(v, [Ee[Ae]].concat(ae));
                    return se
                }
                return !1
            }, m._callHandler = function(v, P, q) {
                var ae = q[0],
                    se = q[1],
                    ve = q[2];
                switch (q.length) {
                    case 0:
                        return v.call(P);
                    case 1:
                        return v.call(P, ae);
                    case 2:
                        return v.call(P, ae, se);
                    case 3:
                        return v.call(P, ae, se, ve);
                    default:
                        return v.apply(P, q)
                }
            };

            function k(v, P, q, ae) {
                var se = v[P];
                if ((!q || q === se.callback || q === se.callback._callback) && (!ae || ae === se.context)) return delete v[P], !0
            }

            function I(v, P, q, ae) {
                v || (v = {});
                for (var se = P ? [P] : n.keys(v), ve = !1, d = 0, Ee = se.length; d < Ee; d++) P = se[d], !!v[P] && k(v, P, q, ae) && (ve = !0);
                return ve
            }
            var L = {};

            function B(v) {
                return L[v] || (L[v] = n.bind(m.log, m, v))
            }
            n.extend(m, {
                log: function(P, q) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + q + '"', ae)
                    }
                },
                tuneIn: function(P) {
                    var q = m.channel(P);
                    return q._tunedIn = !0, q.on("all", B(P)), this
                },
                tuneOut: function(P) {
                    var q = m.channel(P);
                    return q._tunedIn = !1, q.off("all", B(P)), delete L[P], this
                }
            });

            function J(v) {
                return n.isFunction(v) ? v : function() {
                    return v
                }
            }
            m.Requests = {
                request: function(P) {
                    var q = n.toArray(arguments).slice(1),
                        ae = m._eventsApi(this, "request", P, q);
                    if (ae) return ae;
                    var se = this.channelName,
                        ve = this._requests;
                    if (se && this._tunedIn && m.log.apply(this, [se, P].concat(q)), ve && (ve[P] || ve.default)) {
                        var d = ve[P] || ve.default;
                        return q = ve[P] ? q : arguments, m._callHandler(d.callback, d.context, q)
                    } else m.debugLog("An unhandled request was fired", P, se)
                },
                reply: function(P, q, ae) {
                    return m._eventsApi(this, "reply", P, [q, ae]) ? this : (this._requests || (this._requests = {}), this._requests[P] && m.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: J(q),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(P, q, ae) {
                    if (m._eventsApi(this, "replyOnce", P, [q, ae])) return this;
                    var se = this,
                        ve = n.once(function() {
                            return se.stopReplying(P), J(q).apply(this, arguments)
                        });
                    return this.reply(P, ve, ae)
                },
                stopReplying: function(P, q, ae) {
                    return m._eventsApi(this, "stopReplying", P) ? this : (!P && !q && !ae ? delete this._requests : I(this._requests, P, q, ae) || m.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
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
            var ie, K, re = [i.Events, m.Requests];
            return n.each(re, function(v) {
                n.each(v, function(P, q) {
                    m[q] = function(ae) {
                        return K = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[q].apply(ie, K)
                    }
                })
            }), m.reset = function(v) {
                var P = v ? [this._channels[v]] : this._channels;
                n.each(P, function(q) {
                    q.reset()
                })
            }, m
        })
    }(na)), na.exports
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
        t.exports = i(Xe, Bi.exports, Dh())
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            m = function(o) {
                return function(C) {
                    for (var A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Q[Ce - 1] = arguments[Ce];
                    return o.apply(C, Q)
                }
            },
            _ = n.Model.extend,
            k = function y(o, C) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!tt.DEV_MODE && (C === void 0 || !C) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var I = function(o) {
                return document.documentElement.contains(o && o.parentNode)
            },
            L = function(o, C) {
                var A = this;
                !o || i.each(C, function(Q) {
                    var Ce = o[Q];
                    Ce !== void 0 && (A[Q] = Ce)
                })
            },
            B = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            J = function(o) {
                var C = this;
                return i.reduce(o, function(A, Q, Ce) {
                    return i.isFunction(Q) || (Q = C[Q]), Q && (A[Ce] = Q), A
                }, {})
            },
            ie = /(^|:)(\w)/gi;

        function K(y, o, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ie, K)
        });

        function v(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            var Q = re(y),
                Ce = B.call(this, Q),
                qe = void 0;
            return i.isFunction(Ce) && (qe = Ce.apply(this, C)), this.trigger.apply(this, arguments), qe
        }

        function P(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : v.apply(y, C)
        }

        function q(y, o, C) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(A) {
                !C(A) || P(A, o, A)
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

        function Me() {
            q(this, "before:attach", ae)
        }

        function lt() {
            q(this, "attach", se), Ee(this)
        }

        function Be() {
            q(this, "before:detach", ve), Ae(this)
        }

        function Y() {
            q(this, "detach", d)
        }

        function je() {
            Ae(this)
        }

        function G() {
            Ee(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Me,
                attach: lt,
                "before:detach": Be,
                detach: Y,
                "before:render": je,
                render: G
            }))
        }
        var Te = ["description", "fileName", "lineNumber", "name", "message", "number"],
            we = _.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(o, C) {
                    i.isObject(o) ? (C = o, o = C.message) : C || (C = {});
                    var A = Error.call(this, o);
                    i.extend(this, i.pick(A, Te), i.pick(C, Te)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, we)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        we.extend = _;

        function ye(y, o, C, A, Q) {
            var Ce = A.split(/\s+/);
            Ce.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(Ce, function(qe) {
                var Rt = y[qe];
                if (!Rt) throw new we('Method "' + qe + '" was configured as an event handler, but does not exist.');
                y[Q](o, C, Rt)
            })
        }

        function ue(y, o, C, A) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(Q, Ce) {
                if (i.isString(Q)) {
                    ye(y, o, Ce, Q, A);
                    return
                }
                y[A](o, Ce, Q)
            })
        }

        function _e(y, o) {
            return !y || !o ? this : (ue(this, y, o, "listenTo"), this)
        }

        function ke(y, o) {
            return y ? o ? (ue(this, y, o, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, o, C, A) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = J.call(y, C);
            o[A](Q, y)
        }

        function Qe(y, o) {
            return !y || !o ? this : ($e(this, y, o, "reply"), this)
        }

        function dt(y, o) {
            return y ? o ? ($e(this, y, o, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var Bt = function(o) {
                this.options = i.extend({}, i.result(this, "options"), o)
            },
            Ht = {
                normalizeMethods: J,
                _setOptions: Bt,
                mergeOptions: L,
                getOption: B,
                bindEvents: _e,
                unbindEvents: ke
            },
            E = {
                _initRadio: function() {
                    var o = i.result(this, "channelName");
                    if (!!o) {
                        if (!a) throw new we({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var C = this._channel = a.channel(o),
                            A = i.result(this, "radioEvents");
                        this.bindEvents(C, A);
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
                bindRequests: Qe,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = _, i.extend(g.prototype, n.Events, Ht, E, {
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
                for (var o = arguments.length, C = Array(o), A = 0; A < o; A++) C[A] = arguments[A];
                return this.triggerMethod.apply(this, ["before:destroy", this].concat(C)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(C)), this.stopListening(), this
            },
            triggerMethod: v
        });
        var S = function(o) {
            this.templateId = o
        };
        i.extend(S, {
            templateCaches: {},
            get: function(o, C) {
                var A = this.templateCaches[o];
                return A || (A = new S(o), this.templateCaches[o] = A), A.load(C)
            },
            clear: function() {
                for (var o = void 0, C = arguments.length, A = Array(C), Q = 0; Q < C; Q++) A[Q] = arguments[Q];
                var Ce = A.length;
                if (Ce > 0)
                    for (o = 0; o < Ce; o++) delete this.templateCaches[A[o]];
                else this.templateCaches = {}
            }
        }), i.extend(S.prototype, {
            load: function(o) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var C = this.loadTemplate(this.templateId, o);
                return this.compiledTemplate = this.compileTemplate(C, o), this.compiledTemplate
            },
            loadTemplate: function(o, C) {
                var A = n.$(o);
                if (!A.length) throw new we({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + o + '"'
                });
                return A.html()
            },
            compileTemplate: function(o, C) {
                return i.template(o, C)
            }
        });
        var O = i.invokeMap || i.invoke;

        function M(y, o) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(tt.Behaviors.behaviorsLookup) ? tt.Behaviors.behaviorsLookup(y, o)[o] : tt.Behaviors.behaviorsLookup[o]
        }

        function N(y, o) {
            return i.chain(o).map(function(C, A) {
                var Q = M(C, A),
                    Ce = C === Q ? {} : C,
                    qe = new Q(Ce, y),
                    Rt = N(y, i.result(qe, "behaviors"));
                return [qe].concat(Rt)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var o = i.result(this, "behaviors");
                    return i.isObject(o) ? N(this, o) : {}
                },
                _getBehaviorTriggers: function() {
                    var o = O(this._behaviors, "getTriggers");
                    return i.reduce(o, function(C, A) {
                        return i.extend(C, A)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var o = O(this._behaviors, "getEvents");
                    return i.reduce(o, function(C, A) {
                        return i.extend(C, A)
                    }, {})
                },
                _proxyBehaviorViewProperties: function() {
                    O(this._behaviors, "proxyViewProperties")
                },
                _delegateBehaviorEntityEvents: function() {
                    O(this._behaviors, "delegateEntityEvents")
                },
                _undelegateBehaviorEntityEvents: function() {
                    O(this._behaviors, "undelegateEntityEvents")
                },
                _destroyBehaviors: function() {
                    for (var o = arguments.length, C = Array(o), A = 0; A < o; A++) C[A] = arguments[A];
                    O.apply(void 0, [this._behaviors, "destroy"].concat(C))
                },
                _removeBehavior: function(o) {
                    this._isDestroyed || (this.undelegate(".trig" + o.cid + " ." + o.cid), this._behaviors = i.without(this._behaviors, o))
                },
                _bindBehaviorUIElements: function() {
                    O(this._behaviors, "bindUIElements")
                },
                _unbindBehaviorUIElements: function() {
                    O(this._behaviors, "unbindUIElements")
                },
                _triggerEventOnBehaviors: function() {
                    for (var o = this._behaviors, C = 0, A = o && o.length; C < A; C++) v.apply(o[C], arguments)
                }
            },
            Se = {
                _delegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    A && (ke.call(this, o, A), _e.call(this, o, A));
                    var Q = i.result(this, "collectionEvents");
                    Q && (ke.call(this, C, Q), _e.call(this, C, Q))
                },
                _undelegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    ke.call(this, o, A);
                    var Q = i.result(this, "collectionEvents");
                    ke.call(this, C, Q)
                }
            },
            he = /^(\S+)\s*(.*)$/,
            Re = function(o, C) {
                var A = o.match(he);
                return A[1] + "." + C + " " + A[2]
            },
            Le = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function rt(y) {
            return !!Le[y]
        }

        function xt(y, o) {
            return Le[y] = o
        }

        function rn(y, o) {
            i.isString(o) && (o = {
                event: o
            });
            var C = o.event,
                A = !!o.preventDefault;
            rt("triggersPreventDefault") && (A = o.preventDefault !== !1);
            var Q = !!o.stopPropagation;
            return rt("triggersStopPropagation") && (Q = o.stopPropagation !== !1),
                function(Ce) {
                    A && Ce.preventDefault(), Q && Ce.stopPropagation(), y.triggerMethod(C, y, Ce)
                }
        }
        var ct = {
                _getViewTriggers: function(o, C) {
                    var A = this;
                    return i.reduce(C, function(Q, Ce, qe) {
                        return qe = Re(qe, "trig" + A.cid), Q[qe] = rn(o, Ce), Q
                    }, {})
                }
            },
            wt = function(o, C) {
                return i.reduce(o, function(A, Q, Ce) {
                    var qe = Ct(Ce, C);
                    return A[qe] = Q, A
                }, {})
            },
            Ct = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Yt = function y(o, C, A) {
                return i.each(o, function(Q, Ce) {
                    i.isString(Q) ? o[Ce] = Ct(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(qe) {
                        var Rt = Q[qe];
                        i.isString(Rt) && (Q[qe] = Ct(Rt, C))
                    }))
                }), o
            },
            Ze = {
                normalizeUIKeys: function(o) {
                    var C = this._getUIBindings();
                    return wt(o, C)
                },
                normalizeUIString: function(o) {
                    var C = this._getUIBindings();
                    return Ct(o, C)
                },
                normalizeUIValues: function(o, C) {
                    var A = this._getUIBindings();
                    return Yt(o, A, C)
                },
                _getUIBindings: function() {
                    var o = i.result(this, "_uiBindings"),
                        C = i.result(this, "ui");
                    return o || C
                },
                _bindUIElements: function() {
                    var o = this;
                    if (!!this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var C = i.result(this, "_uiBindings");
                        this._ui = {}, i.each(C, function(A, Q) {
                            o._ui[Q] = o.$(A)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var o = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(C, A) {
                        delete o.ui[A]
                    }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui)
                },
                _getUI: function(o) {
                    return this._ui[o]
                }
            };

        function Mt(y) {
            return y instanceof n.$ ? y : n.$(y)
        }

        function F(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var V = {
                createBuffer: function() {
                    return document.createDocumentFragment()
                },
                getEl: function(o) {
                    return Mt(o)
                },
                findEl: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt(o);
                    return A.find(C)
                },
                hasEl: function(o, C) {
                    return o.contains(C && C.parentNode)
                },
                detachEl: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mt(o);
                    C.detach()
                },
                replaceEl: function(o, C) {
                    if (o !== C) {
                        var A = C.parentNode;
                        !A || A.replaceChild(o, C)
                    }
                },
                swapEl: function(o, C) {
                    if (o !== C) {
                        var A = o.parentNode,
                            Q = C.parentNode;
                        if (!(!A || !Q)) {
                            var Ce = o.nextSibling,
                                qe = C.nextSibling;
                            A.insertBefore(C, Ce), Q.insertBefore(o, qe)
                        }
                    }
                },
                setContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt(o);
                    A.html(C)
                },
                appendContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = A._$el,
                        Ce = Q === void 0 ? Mt(o) : Q,
                        qe = A._$contents,
                        Rt = qe === void 0 ? Mt(C) : qe;
                    Ce.append(Rt)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mt(o);
                    C.contents().detach()
                }
            },
            W = {
                Dom: V,
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
                    var C = this._getEvents(o);
                    typeof o > "u" && (this.events = C);
                    var A = i.extend({}, this._getBehaviorEvents(), C, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, A), this
                },
                _getEvents: function(o) {
                    var C = o || this.events;
                    return i.isFunction(C) ? this.normalizeUIKeys(C.call(this)) : this.normalizeUIKeys(C)
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
                    for (var o = this._isAttached && !this._shouldDisableEvents, C = arguments.length, A = Array(C), Q = 0; Q < C; Q++) A[Q] = arguments[Q];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(A)), o && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), o && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, A), this.triggerMethod.apply(this, ["destroy", this].concat(A)), this.stopListening(), this
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
                    return rt("childViewEventPrefix") ? "childview" : !1
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
                    for (var C = this.normalizeMethods(this._childViewEvents), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Q[Ce - 1] = arguments[Ce];
                    typeof C < "u" && i.isFunction(C[o]) && C[o].apply(this, Q);
                    var qe = this._childViewTriggers;
                    qe && i.isString(qe[o]) && this.triggerMethod.apply(this, [qe[o]].concat(Q));
                    var Rt = i.result(this, "childViewEventPrefix");
                    if (Rt !== !1) {
                        var Wt = Rt + ":" + o;
                        this.triggerMethod.apply(this, [Wt].concat(Q))
                    }
                }
            };
        i.extend(W, te, Ht, Se, ct, Ze);

        function D(y) {
            y._isRendered || (y.supportsRenderLifecycle || P(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, P(y, "render", y)))
        }

        function H(y) {
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
                Dom: V,
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
                show: function(o, C) {
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, D(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
                },
                _setupChildView: function(o) {
                    oe(o), this._proxyChildViewEvents(o), o.on("destroy", this._empty, this)
                },
                _proxyChildViewEvents: function(o) {
                    var C = this._parentView;
                    !C || C._proxyChildViewEvents(o)
                },
                _shouldDisableMonitoring: function() {
                    return this._parentView && this._parentView.monitorViewEvents === !1
                },
                _attachView: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = !o._isAttached && I(this.el) && !this._shouldDisableMonitoring(),
                        Q = typeof C.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!C.replaceElement;
                    A && P(o, "before:attach", o), Q ? this._replaceEl(o) : this.attachHtml(o), A && (o._isAttached = !0, P(o, "attach", o))
                },
                _ensureElement: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var C = typeof o.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!o.allowMissingEl;
                        if (C) return !1;
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
                    var C = this._getViewOptions(o);
                    return new Nn(C)
                },
                _getViewOptions: function(o) {
                    if (i.isFunction(o)) return {
                        template: o
                    };
                    if (i.isObject(o)) return o;
                    var C = function() {
                        return o
                    };
                    return {
                        template: C
                    }
                },
                getEl: function(o) {
                    var C = i.result(this, "parentEl");
                    return C && i.isString(o) ? this.Dom.findEl(C, o) : this.Dom.getEl(o)
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
                        C = this.currentView;
                    if (!C) return this._ensureElement(o) && this.detachHtml(), this;
                    var A = !o.preventDestroy;
                    return A || k("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(C, A), this
                },
                _empty: function(o, C) {
                    o.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, o), this._restoreEl(), delete this.currentView, o._isDestroyed || (C ? this.removeView(o) : this._detachView(o), this._stopChildViewEvents(o)), this.triggerMethod("empty", this, o)
                },
                _stopChildViewEvents: function(o) {
                    var C = this._parentView;
                    !C || this._parentView.stopListening(o)
                },
                destroyView: function(o) {
                    return o._isDestroyed || (o._shouldDisableEvents = this._shouldDisableMonitoring(), H(o)), o
                },
                removeView: function(o) {
                    this.destroyView(o)
                },
                detachView: function() {
                    var o = this.currentView;
                    if (!!o) return this._empty(o), o
                },
                _detachView: function(o) {
                    var C = o._isAttached && !this._shouldDisableMonitoring(),
                        A = this._isReplaced;
                    C && P(o, "before:detach", o), A ? this.Dom.replaceEl(this.el, o.el) : this.detachHtml(), C && (o._isAttached = !1, P(o, "detach", o))
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
            Ve = function(y, o) {
                return y instanceof pe ? y : Ne(y, o)
            };

        function Ne(y, o) {
            var C = i.extend({}, o);
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
            var o = y.regionClass,
                C = i.omit(y, "regionClass");
            return new o(C)
        }
        var Ft = {
                regionClass: pe,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    O(this._regions, "reset")
                },
                addRegion: function(o, C) {
                    var A = {};
                    return A[o] = C, this.addRegions(A)[o]
                },
                addRegions: function(o) {
                    if (!i.isEmpty(o)) return o = this.normalizeUIValues(o, ["selector", "el"]), this.regions = i.extend({}, this.regions, o), this._addRegions(o)
                },
                _addRegions: function(o) {
                    var C = this,
                        A = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(o, function(Q, Ce, qe) {
                        return Q[qe] = Ve(Ce, A), C._addRegion(Q[qe], qe), Q
                    }, {})
                },
                _addRegion: function(o, C) {
                    this.triggerMethod("before:add:region", this, C, o), o._parentView = this, o._name = C, this._regions[C] = o, this.triggerMethod("add:region", this, C, o)
                },
                removeRegion: function(o) {
                    var C = this._regions[o];
                    return this._removeRegion(C, o), C
                },
                removeRegions: function() {
                    var o = this._getRegions();
                    return i.each(this._regions, i.bind(this._removeRegion, this)), o
                },
                _removeRegion: function(o, C) {
                    this.triggerMethod("before:remove:region", this, C, o), o.destroy(), this.triggerMethod("remove:region", this, C, o)
                },
                _removeReferences: function(o) {
                    delete this.regions[o], delete this._regions[o]
                },
                emptyRegions: function() {
                    var o = this.getRegions();
                    return O(o, "empty"), o
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
                showChildView: function(o, C) {
                    for (var A = this.getRegion(o), Q = arguments.length, Ce = Array(Q > 2 ? Q - 2 : 0), qe = 2; qe < Q; qe++) Ce[qe - 2] = arguments[qe];
                    return A.show.apply(A, [C].concat(Ce))
                },
                detachChildView: function(o) {
                    return this.getRegion(o).detachView()
                },
                getChildView: function(o) {
                    return this.getRegion(o).currentView
                }
            },
            Je = {
                render: function(o, C) {
                    if (!o) throw new we({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var A = i.isFunction(o) ? o : S.get(o);
                    return A(C)
                }
            },
            Ln = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Nn = n.View.extend({
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Ln), oe(this), this._initBehaviors(), this._initRegions();
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
                    return this.collection ? this.collection.map(function(o) {
                        return i.clone(o.attributes)
                    }) : {}
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = I(this.el), this._isRendered && this.bindUIElements(), this
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
                    var C = this.mixinTemplateContext(this.serializeData()),
                        A = this._renderHtml(o, C);
                    this.attachElContent(A)
                },
                _renderHtml: function(o, C) {
                    return Je.render(o, C, this)
                },
                getTemplate: function() {
                    return this.template
                },
                mixinTemplateContext: function() {
                    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        C = i.result(this, "templateContext");
                    return i.extend(o, C)
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
        i.extend(Nn.prototype, W, Ft);
        var st = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(o, C) {
                i.each(st, function(A) {
                    o[A] = function() {
                        var Q = i.result(this, C),
                            Ce = Array.prototype.slice.call(arguments);
                        return i[A].apply(i, [Q].concat(Ce))
                    }
                })
            },
            yi = function(o) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(o, i.bind(this.add, this))
            };
        Dn(yi.prototype, "_getViews"), i.extend(yi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(o, C) {
                return this._add(o, C)._updateLength()
            },
            _add: function(o, C) {
                var A = o.cid;
                return this._views[A] = o, o.model && (this._indexByModel[o.model.cid] = A), C && (this._indexByCustom[C] = A), this
            },
            findByModel: function(o) {
                return this.findByModelCid(o.cid)
            },
            findByModelCid: function(o) {
                var C = this._indexByModel[o];
                return this.findByCid(C)
            },
            findByCustom: function(o) {
                var C = this._indexByCustom[o];
                return this.findByCid(C)
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
                var C = o.cid;
                return o.model && delete this._indexByModel[o.model.cid], i.some(this._indexByCustom, i.bind(function(A, Q) {
                    if (A === C) return delete this._indexByCustom[Q], !0
                }, this)), delete this._views[C], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var Ar = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            kn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Ar), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var o = this._isAttached && this.monitorViewEvents !== !1,
                        C = o ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(C, function(A) {
                        P(A, "before:attach", A)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(C, function(A) {
                        A._isAttached = !0, P(A, "attach", A)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(o, C, A) {
                    var Q = A.at !== void 0 && (A.index || C.indexOf(o));
                    (this.filter || Q === !1) && (Q = i.indexOf(this._filteredSortedModels(Q), o)), this._shouldAddChild(o, Q) && (this._destroyEmptyView(), this._addChild(o, Q))
                },
                _onCollectionUpdate: function(o, C) {
                    var A = C.changes;
                    this._removeChildModels(A.removed)
                },
                _removeChildModels: function(o) {
                    var C = this._getRemovedViews(o);
                    !C.length || (this.children._updateLength(), this._updateIndices(C, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(o) {
                    var C = this;
                    return i.reduce(o, function(A, Q) {
                        var Ce = Q && C.children.findByModel(Q);
                        return !Ce || Ce._isDestroyed || (C._removeChildView(Ce), A.push(Ce)), A
                    }, [])
                },
                _removeChildView: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, H(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = I(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Q = this._isRendered && !this._isDestroyed,
                        Ce = this.filter !== o,
                        qe = Q && Ce && !A;
                    if (qe) {
                        var Rt = this._filteredSortedModels();
                        this.filter = o;
                        var Wt = this._filteredSortedModels();
                        this._applyModelDeltas(Wt, Rt)
                    } else this.filter = o;
                    return this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _applyModelDeltas: function(o, C) {
                    var A = this,
                        Q = {};
                    i.each(o, function(qe, Rt) {
                        var Wt = !A.children.findByModel(qe);
                        Wt && A._onCollectionAdd(qe, A.collection, {
                            at: Rt
                        }), Q[qe.cid] = !0
                    });
                    var Ce = i.filter(C, function(qe) {
                        return !Q[qe.cid] && A.children.findByModel(qe)
                    });
                    this._removeChildModels(Ce)
                },
                reorder: function() {
                    var o = this,
                        C = this.children,
                        A = this._filteredSortedModels();
                    if (!A.length && this._showingEmptyView) return this;
                    var Q = i.some(A, function(Wt) {
                        return !C.findByModel(Wt)
                    });
                    if (Q) this.render();
                    else {
                        var Ce = [],
                            qe = i.reduce(this.children._views, function(Wt, Wn) {
                                var Bn = i.indexOf(A, Wn.model);
                                return Bn === -1 ? (Ce.push(Wn.model), Wt) : (Wn._index = Bn, Wt[Bn] = Wn.el, Wt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var Rt = this.Dom.createBuffer();
                        i.each(qe, function(Wt) {
                            o.Dom.appendContents(Rt, Wt)
                        }), this._appendReorderedChildren(Rt), this._removeChildModels(Ce), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var o = this,
                        C = this._filteredSortedModels(),
                        A = i.find(C, function(Q, Ce) {
                            var qe = o.children.findByModel(Q);
                            return !qe || qe._index !== Ce
                        });
                    A && this.resortView()
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
                _createView: function(o, C) {
                    var A = this._getChildView(o),
                        Q = this._getChildViewOptions(o, C),
                        Ce = this.buildChildView(o, A, Q);
                    return Ce
                },
                _setupChildView: function(o, C) {
                    oe(o), this._proxyChildViewEvents(o), this.sort && (o._index = C)
                },
                _showCollection: function(o) {
                    i.each(o, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(o) {
                    if (!this.collection || !this.collection.length) return [];
                    var C = this.getViewComparator(),
                        A = this.collection.models;
                    if (o = Math.min(Math.max(o, 0), A.length - 1), C) {
                        var Q = void 0;
                        o && (Q = A[o], A = A.slice(0, o).concat(A.slice(o + 1))), A = this._sortModelsBy(A, C), Q && A.splice(o, 0, Q)
                    }
                    return A = this._filterModels(A), A
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(o) {
                    var C = this;
                    return this.filter && (o = i.filter(o, function(A, Q) {
                        return C._shouldAddChild(A, Q)
                    })), o
                },
                _sortModelsBy: function(o, C) {
                    return typeof C == "string" ? i.sortBy(o, function(A) {
                        return A.get(C)
                    }) : C.length === 1 ? i.sortBy(o, i.bind(C, this)) : i.clone(o).sort(i.bind(C, this))
                },
                _showEmptyView: function() {
                    var o = this._getEmptyView();
                    if (o && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var C = new n.Model,
                            A = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(A) && (A = A.call(this, C, this._emptyViewIndex));
                        var Q = this.buildChildView(C, o, A);
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
                    var C = this.childView;
                    if (!C) throw new we({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, o), !C) throw new we({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                _getView: function(o, C) {
                    if (o.prototype instanceof n.View || o === n.View) return o;
                    if (i.isFunction(o)) return o.call(this, C)
                },
                _addChild: function(o, C) {
                    var A = this._createView(o, C);
                    return this.addChildView(A, C), A
                },
                _getChildViewOptions: function(o, C) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(o, C) : this.childViewOptions
                },
                addChildView: function(o, C) {
                    return this.triggerMethod("before:add:child", this, o), this._setupChildView(o, C), this._isBuffering ? this.children._add(o) : (this._updateIndices(o, !0), this.children.add(o)), D(o), this._attachView(o, C), this.triggerMethod("add:child", this, o), o
                },
                _updateIndices: function(o, C) {
                    if (!!this.sort) {
                        if (!C) {
                            i.each(i.sortBy(this.children._views, "_index"), function(Q, Ce) {
                                Q._index = Ce
                            });
                            return
                        }
                        var A = i.isArray(o) ? i.max(o, "_index") : o;
                        i.isObject(A) && i.each(this.children._views, function(Q) {
                            Q._index >= A._index && (Q._index += 1)
                        })
                    }
                },
                _attachView: function(o, C) {
                    var A = !o._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    A && P(o, "before:attach", o), this.attachHtml(this, o, C), A && (o._isAttached = !0, P(o, "attach", o))
                },
                buildChildView: function(o, C, A) {
                    var Q = i.extend({
                        model: o
                    }, A);
                    return new C(Q)
                },
                removeChildView: function(o) {
                    return !o || o._isDestroyed || (this._removeChildView(o), this.children._updateLength(), this._updateIndices(o, !1)), o
                },
                isEmpty: function(o) {
                    var C = void 0;
                    return i.result(o, "processedModels") ? C = o.processedModels : (C = this.collection ? this.collection.models : [], C = this._filterModels(C)), C.length === 0
                },
                attachBuffer: function(o, C) {
                    this.Dom.appendContents(o.el, C, {
                        _$el: o.$el
                    })
                },
                _createBuffer: function() {
                    var o = this,
                        C = this.Dom.createBuffer();
                    return i.each(this._bufferedChildren, function(A) {
                        o.Dom.appendContents(C, A.el, {
                            _$contents: A.$el
                        })
                    }), C
                },
                attachHtml: function(o, C, A) {
                    o._isBuffering ? o._bufferedChildren.splice(A, 0, C) : o._insertBefore(C, A) || o._insertAfter(C)
                },
                _insertBefore: function(o, C) {
                    var A = void 0,
                        Q = this.sort && C < this.children.length - 1;
                    return Q && (A = i.find(this.children._views, function(Ce) {
                        return Ce._index === C + 1
                    })), A ? (this.beforeEl(A.el, o.el), !0) : !1
                },
                beforeEl: function(o, C) {
                    this.$(o).before(C)
                },
                _insertAfter: function(o) {
                    this.Dom.appendContents(this.el, o.el, {
                        _$el: this.$el,
                        _$contents: o.$el
                    })
                },
                _initChildViewStorage: function() {
                    this.children = new yi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(o) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(o, C) {
                    var A = this.filter;
                    return !i.isFunction(A) || A.call(this, o, C, this.collection)
                }
            }, {
                setDomApi: F
            });
        i.extend(kn.prototype, W);
        var sn = function() {
            this._init()
        };
        Dn(sn.prototype, "_views");

        function Or(y, o) {
            return o.model && o.model.get(y)
        }
        i.extend(sn.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(o) {
                var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    A = o.cid;
                this._viewsByCid[A] = o, o.model && (this._indexByModel[o.model.cid] = A), this._views.splice(C, 0, o), this._updateLength()
            },
            _sort: function(o, C) {
                return typeof o == "string" ? (o = i.partial(Or, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, C)) : this._views.sort(i.bind(o, C))
            },
            _sortBy: function(o) {
                var C = i.sortBy(this._views, o);
                return this._set(C), C
            },
            _set: function(o) {
                this._views.length = 0, this._views.push.apply(this._views, o.slice(0)), this._updateLength()
            },
            _swap: function(o, C) {
                var A = this.findIndexByView(o),
                    Q = this.findIndexByView(C);
                if (!(A === -1 || Q === -1)) {
                    var Ce = this._views[A];
                    this._views[A] = this._views[Q], this._views[Q] = Ce
                }
            },
            findByModel: function(o) {
                return this.findByModelCid(o.cid)
            },
            findByModelCid: function(o) {
                var C = this._indexByModel[o];
                return this.findByCid(C)
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
                    var C = this.findIndexByView(o);
                    this._views.splice(C, 1), this._updateLength()
                }
            },
            _updateLength: function() {
                this.length = this._views.length
            }
        });
        var Ir = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            wi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Ir), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
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
                _onCollectionSort: function(o, C) {
                    var A = C.add,
                        Q = C.merge,
                        Ce = C.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || A || Ce || Q || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(o, C) {
                    var A = C.changes,
                        Q = A.removed.length && this._removeChildModels(A.removed);
                    this._addedViews = A.added.length && this._addChildModels(A.added), this._detachChildren(Q), this._showChildren(), this._removeChildViews(Q)
                },
                _removeChildModels: function(o) {
                    var C = this;
                    return i.reduce(o, function(A, Q) {
                        var Ce = C._removeChildModel(Q);
                        return Ce && A.push(Ce), A
                    }, [])
                },
                _removeChildModel: function(o) {
                    var C = this.children.findByModel(o);
                    return C && this._removeChild(C), C
                },
                _removeChild: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), this.triggerMethod("remove:child", this, o)
                },
                _addChildModels: function(o) {
                    return i.map(o, i.bind(this._addChildModel, this))
                },
                _addChildModel: function(o) {
                    var C = this._createChildView(o);
                    return this._addChild(C), C
                },
                _createChildView: function(o) {
                    var C = this._getChildView(o),
                        A = this._getChildViewOptions(o),
                        Q = this.buildChildView(o, C, A);
                    return Q
                },
                _addChild: function(o, C) {
                    this.triggerMethod("before:add:child", this, o), this._setupChildView(o), this.children._add(o, C), this.triggerMethod("add:child", this, o)
                },
                _getChildView: function(o) {
                    var C = this.childView;
                    if (!C) throw new we({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, o), !C) throw new we({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return C
                },
                _getView: function(o, C) {
                    if (o.prototype instanceof n.View || o === n.View) return o;
                    if (i.isFunction(o)) return o.call(this, C)
                },
                _getChildViewOptions: function(o) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(o) : this.childViewOptions
                },
                buildChildView: function(o, C, A) {
                    var Q = i.extend({
                        model: o
                    }, A);
                    return new C(Q)
                },
                _setupChildView: function(o) {
                    oe(o), o.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(o)
                },
                _getImmediateChildren: function() {
                    return this.children._views
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = I(this.el), this
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
                        var C = this._getEmptyViewOptions(),
                            A = this.getEmptyRegion();
                        A.show(new o(C))
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
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Q = this.viewComparator !== o,
                        Ce = Q && !A;
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
                        C = this._getFilter(),
                        A = this._addedViews;
                    if (delete this._addedViews, !C) return A || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var Q = [],
                        Ce = [];
                    return i.each(this.children._views, function(qe, Rt, Wt) {
                        (C.call(o, qe, Rt, Wt) ? Q : Ce).push(qe)
                    }), this._detachChildren(Ce), this.triggerMethod("filter", this, Q, Ce), Q
                },
                _getFilter: function() {
                    var o = this.getFilter();
                    if (!o) return !1;
                    if (i.isFunction(o)) return o;
                    if (i.isObject(o)) {
                        var C = i.matches(o);
                        return function(A) {
                            return C(A.model && A.model.attributes)
                        }
                    }
                    if (i.isString(o)) return function(A) {
                        return A.model && A.model.get(o)
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
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Q = this.viewFilter !== o,
                        Ce = Q && !A;
                    return this.viewFilter = o, Ce && this.filter(), this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _detachChildren: function(o) {
                    i.each(o, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(o) {
                    var C = o._isAttached && this.monitorViewEvents !== !1;
                    C && P(o, "before:detach", o), this.detachHtml(o), C && (o._isAttached = !1, P(o, "detach", o))
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
                    var C = this._getBuffer(o);
                    this._attachChildren(C, o), this.triggerMethod("render:children", this, o)
                },
                _attachChildren: function(o, C) {
                    var A = this._isAttached && this.monitorViewEvents !== !1;
                    C = A ? C : [], i.each(C, function(Q) {
                        Q._isAttached || P(Q, "before:attach", Q)
                    }), this.attachHtml(o), i.each(C, function(Q) {
                        Q._isAttached || (Q._isAttached = !0, P(Q, "attach", Q))
                    })
                },
                _getBuffer: function(o) {
                    var C = this,
                        A = this.Dom.createBuffer();
                    return i.each(o, function(Q) {
                        D(Q), C.Dom.appendContents(A, Q.el, {
                            _$contents: Q.$el
                        })
                    }), A
                },
                attachHtml: function(o) {
                    this.Dom.appendContents(this.el, o, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(o, C) {
                    if (!this.children.hasView(o) || !this.children.hasView(C)) throw new we({
                        name: "ChildSwapError",
                        message: "Both views must be children of the collection view"
                    });
                    return this.children._swap(o, C), this.Dom.swapEl(o.el, C.el), this.Dom.hasEl(this.el, o.el) !== this.Dom.hasEl(this.el, C.el) && this.filter(), this
                },
                addChildView: function(o, C) {
                    return !o || o._isDestroyed || ((!C || C >= this.children.length) && (this._addedViews = [o]), this._addChild(o, C), this._showChildren()), o
                },
                detachChildView: function(o) {
                    return this.removeChildView(o, {
                        shouldDetach: !0
                    }), o
                },
                removeChildView: function(o, C) {
                    return o && (this._removeChildView(o, C), this._removeChild(o), this.isEmpty() && this._showEmptyView(), o)
                },
                _removeChildViews: function(o) {
                    i.each(o, i.bind(this._removeChildView, this))
                },
                _removeChildView: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.shouldDetach;
                    o.off("destroy", this.removeChildView, this), A ? this._detachChildView(o) : this._destroyChildView(o), this.stopListening(o)
                },
                _destroyChildView: function(o) {
                    o._isDestroyed || (o._shouldDisableEvents = this.monitorViewEvents === !1, H(o))
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
        i.extend(wi.prototype, W);
        var ji = ["childViewContainer", "template", "templateContext"],
            bi = kn.extend({
                constructor: function(o) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, ji), kn.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(o) {
                    var C = this.childView;
                    if (!C) return this.constructor;
                    if (C = this._getView(C, o), !C) throw new we({
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
                    (this._isRendered || this._isRendering) && kn.prototype._renderChildren.call(this)
                },
                attachBuffer: function(o, C) {
                    var A = this.getChildViewContainer(o);
                    this.Dom.appendContents(A[0], C, {
                        _$el: A
                    })
                },
                _insertAfter: function(o) {
                    var C = this.getChildViewContainer(this, o);
                    this.Dom.appendContents(C[0], o.el, {
                        _$el: C,
                        _$contents: o.$el
                    })
                },
                _appendReorderedChildren: function(o) {
                    var C = this.getChildViewContainer(this);
                    this.Dom.appendContents(C[0], o, {
                        _$el: C
                    })
                },
                getChildViewContainer: function(o, C) {
                    if (o.$childViewContainer) return o.$childViewContainer;
                    var A = void 0,
                        Q = o.childViewContainer;
                    if (Q) {
                        var Ce = i.result(o, "childViewContainer");
                        if (Ce.charAt(0) === "@" && o.ui ? A = o.ui[Ce.substr(4)] : A = this.$(Ce), A.length <= 0) throw new we({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + o.childViewContainer
                        })
                    } else A = o.$el;
                    return o.$childViewContainer = A, A
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            Ci = i.pick(Nn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(bi.prototype, Ci);
        var zi = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Ui = g.extend({
                cidPrefix: "mnb",
                constructor: function(o, C) {
                    this.view = C, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, o)), this.mergeOptions(this.options, zi), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), g.apply(this, arguments)
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
                        C = this.normalizeUIKeys(i.result(this, "events"));
                    return i.reduce(C, function(A, Q, Ce) {
                        return i.isFunction(Q) || (Q = o[Q]), Q && (Ce = Re(Ce, o.cid), A[Ce] = i.bind(Q, o)), A
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, o)
                    }
                }
            });
        i.extend(Ui.prototype, Se, ct, Ze);
        var mn = ["region", "regionClass"],
            Gi = g.extend({
                cidPrefix: "mna",
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, mn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: pe,
                _initRegion: function() {
                    var o = this.region;
                    if (!!o) {
                        var C = {
                            regionClass: this.regionClass
                        };
                        this._region = Ve(o, C)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(o) {
                    for (var C = this.getRegion(), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Q[Ce - 1] = arguments[Ce];
                    return C.show.apply(C, [o].concat(Q))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(o) {
                    return this.triggerMethod("before:start", this, o), this.triggerMethod("start", this, o), this
                }
            }),
            xi = ["appRoutes", "controller"],
            qn = n.Router.extend({
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, xi), n.Router.apply(this, arguments);
                    var C = this.appRoutes,
                        A = this._getController();
                    this.processAppRoutes(A, C), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(o, C) {
                    var A = this._getController();
                    return this._addAppRoute(A, o, C), this
                },
                _processOnRoute: function(o, C) {
                    if (i.isFunction(this.onRoute)) {
                        var A = i.invert(this.appRoutes)[o];
                        this.onRoute(o, A, C)
                    }
                },
                processAppRoutes: function(o, C) {
                    var A = this;
                    if (!C) return this;
                    var Q = i.keys(C).reverse();
                    return i.each(Q, function(Ce) {
                        A._addAppRoute(o, Ce, C[Ce])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(o, C, A) {
                    var Q = o[A];
                    if (!Q) throw new we('Method "' + A + '" was not found on the controller');
                    this.route(C, A, i.bind(Q, o))
                },
                triggerMethod: v
            });
        i.extend(qn.prototype, Ht);

        function Hi() {
            throw new we({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var Ei = n.Marionette,
            tt = n.Marionette = {};
        return tt.noConflict = function() {
            return n.Marionette = Ei, this
        }, tt.bindEvents = m(_e), tt.unbindEvents = m(ke), tt.bindRequests = m(Qe), tt.unbindRequests = m(dt), tt.mergeOptions = m(L), tt.getOption = m(B), tt.normalizeMethods = m(J), tt.extend = _, tt.isNodeAttached = I, tt.deprecate = k, tt.triggerMethod = m(v), tt.triggerMethodOn = P, tt.isEnabled = rt, tt.setEnabled = xt, tt.monitorViewEvents = oe, tt.Behaviors = {}, tt.Behaviors.behaviorsLookup = Hi, tt.Application = Gi, tt.AppRouter = qn, tt.Renderer = Je, tt.TemplateCache = S, tt.View = Nn, tt.CollectionView = kn, tt.NextCollectionView = wi, tt.CompositeView = bi, tt.Behavior = Ui, tt.Region = pe, tt.Error = we, tt.Object = g, tt.DEV_MODE = !1, tt.FEATURES = Le, tt.VERSION = f, tt.DomApi = V, tt.setDomApi = function(y) {
            kn.setDomApi(y), bi.setDomApi(y), wi.setDomApi(y), pe.setDomApi(y), Nn.setDomApi(y)
        }, tt
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
})(Dc);
const yt = Dc.exports;
class Mh {
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

function Ph() {
    this.__data__ = [], this.size = 0
}
var Vh = Ph;

function Nh(t, e) {
    return t === e || t !== t && e !== e
}
var ho = Nh,
    Bh = ho;

function $h(t, e) {
    for (var n = t.length; n--;)
        if (Bh(t[n][0], e)) return n;
    return -1
}
var fo = $h,
    Fh = fo,
    jh = Array.prototype,
    zh = jh.splice;

function Uh(t) {
    var e = this.__data__,
        n = Fh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : zh.call(e, n, 1), --this.size, !0
}
var Gh = Uh,
    Hh = fo;

function qh(t) {
    var e = this.__data__,
        n = Hh(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Wh = qh,
    Xh = fo;

function Kh(t) {
    return Xh(this.__data__, t) > -1
}
var Yh = Kh,
    Jh = fo;

function Qh(t, e) {
    var n = this.__data__,
        i = Jh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Zh = Qh,
    ed = Vh,
    td = Gh,
    nd = Wh,
    id = Yh,
    rd = Zh;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = ed;
xr.prototype.delete = td;
xr.prototype.get = nd;
xr.prototype.has = id;
xr.prototype.set = rd;
var po = xr,
    sd = po;

function od() {
    this.__data__ = new sd, this.size = 0
}
var ad = od;

function ld(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var cd = ld;

function ud(t) {
    return this.__data__.get(t)
}
var hd = ud;

function dd(t) {
    return this.__data__.has(t)
}
var fd = dd,
    pd = typeof vt == "object" && vt && vt.Object === Object && vt,
    Mc = pd,
    gd = Mc,
    md = typeof self == "object" && self && self.Object === Object && self,
    vd = gd || md || Function("return this")(),
    Er = vd,
    yd = Er,
    wd = yd.Symbol,
    Pc = wd,
    _l = Pc,
    Vc = Object.prototype,
    bd = Vc.hasOwnProperty,
    Cd = Vc.toString,
    Jr = _l ? _l.toStringTag : void 0;

function xd(t) {
    var e = bd.call(t, Jr),
        n = t[Jr];
    try {
        t[Jr] = void 0;
        var i = !0
    } catch {}
    var a = Cd.call(t);
    return i && (e ? t[Jr] = n : delete t[Jr]), a
}
var Ed = xd,
    _d = Object.prototype,
    Sd = _d.toString;

function kd(t) {
    return Sd.call(t)
}
var Td = kd,
    Sl = Pc,
    Ad = Ed,
    Od = Td,
    Id = "[object Null]",
    Rd = "[object Undefined]",
    kl = Sl ? Sl.toStringTag : void 0;

function Ld(t) {
    return t == null ? t === void 0 ? Rd : Id : kl && kl in Object(t) ? Ad(t) : Od(t)
}
var go = Ld;

function Dd(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Fi = Dd,
    Md = go,
    Pd = Fi,
    Vd = "[object AsyncFunction]",
    Nd = "[object Function]",
    Bd = "[object GeneratorFunction]",
    $d = "[object Proxy]";

function Fd(t) {
    if (!Pd(t)) return !1;
    var e = Md(t);
    return e == Nd || e == Bd || e == Vd || e == $d
}
var Ua = Fd,
    jd = Er,
    zd = jd["__core-js_shared__"],
    Ud = zd,
    ia = Ud,
    Tl = function() {
        var t = /[^.]+$/.exec(ia && ia.keys && ia.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Gd(t) {
    return !!Tl && Tl in t
}
var Hd = Gd,
    qd = Function.prototype,
    Wd = qd.toString;

function Xd(t) {
    if (t != null) {
        try {
            return Wd.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Kd = Xd,
    Yd = Ua,
    Jd = Hd,
    Qd = Fi,
    Zd = Kd,
    ef = /[\\^$.*+?()[\]{}|]/g,
    tf = /^\[object .+?Constructor\]$/,
    nf = Function.prototype,
    rf = Object.prototype,
    sf = nf.toString,
    of = rf.hasOwnProperty,
    af = RegExp("^" + sf.call(of).replace(ef, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function lf(t) {
    if (!Qd(t) || Jd(t)) return !1;
    var e = Yd(t) ? af : tf;
    return e.test(Zd(t))
}
var cf = lf;

function uf(t, e) {
    return t == null ? void 0 : t[e]
}
var hf = uf,
    df = cf,
    ff = hf;

function pf(t, e) {
    var n = ff(t, e);
    return df(n) ? n : void 0
}
var Ga = pf,
    gf = Ga,
    mf = Er,
    vf = gf(mf, "Map"),
    Nc = vf,
    yf = Ga,
    wf = yf(Object, "create"),
    mo = wf,
    Al = mo;

function bf() {
    this.__data__ = Al ? Al(null) : {}, this.size = 0
}
var Cf = bf;

function xf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var Ef = xf,
    _f = mo,
    Sf = "__lodash_hash_undefined__",
    kf = Object.prototype,
    Tf = kf.hasOwnProperty;

function Af(t) {
    var e = this.__data__;
    if (_f) {
        var n = e[t];
        return n === Sf ? void 0 : n
    }
    return Tf.call(e, t) ? e[t] : void 0
}
var Of = Af,
    If = mo,
    Rf = Object.prototype,
    Lf = Rf.hasOwnProperty;

function Df(t) {
    var e = this.__data__;
    return If ? e[t] !== void 0 : Lf.call(e, t)
}
var Mf = Df,
    Pf = mo,
    Vf = "__lodash_hash_undefined__";

function Nf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = Pf && e === void 0 ? Vf : e, this
}
var Bf = Nf,
    $f = Cf,
    Ff = Ef,
    jf = Of,
    zf = Mf,
    Uf = Bf;

function _r(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
_r.prototype.clear = $f;
_r.prototype.delete = Ff;
_r.prototype.get = jf;
_r.prototype.has = zf;
_r.prototype.set = Uf;
var Gf = _r,
    Ol = Gf,
    Hf = po,
    qf = Nc;

function Wf() {
    this.size = 0, this.__data__ = {
        hash: new Ol,
        map: new(qf || Hf),
        string: new Ol
    }
}
var Xf = Wf;

function Kf(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Yf = Kf,
    Jf = Yf;

function Qf(t, e) {
    var n = t.__data__;
    return Jf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var vo = Qf,
    Zf = vo;

function ep(t) {
    var e = Zf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var tp = ep,
    np = vo;

function ip(t) {
    return np(this, t).get(t)
}
var rp = ip,
    sp = vo;

function op(t) {
    return sp(this, t).has(t)
}
var ap = op,
    lp = vo;

function cp(t, e) {
    var n = lp(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var up = cp,
    hp = Xf,
    dp = tp,
    fp = rp,
    pp = ap,
    gp = up;

function Sr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Sr.prototype.clear = hp;
Sr.prototype.delete = dp;
Sr.prototype.get = fp;
Sr.prototype.has = pp;
Sr.prototype.set = gp;
var mp = Sr,
    vp = po,
    yp = Nc,
    wp = mp,
    bp = 200;

function Cp(t, e) {
    var n = this.__data__;
    if (n instanceof vp) {
        var i = n.__data__;
        if (!yp || i.length < bp - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new wp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var xp = Cp,
    Ep = po,
    _p = ad,
    Sp = cd,
    kp = hd,
    Tp = fd,
    Ap = xp;

function kr(t) {
    var e = this.__data__ = new Ep(t);
    this.size = e.size
}
kr.prototype.clear = _p;
kr.prototype.delete = Sp;
kr.prototype.get = kp;
kr.prototype.has = Tp;
kr.prototype.set = Ap;
var Op = kr,
    Ip = Ga,
    Rp = function() {
        try {
            var t = Ip(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Bc = Rp,
    Il = Bc;

function Lp(t, e, n) {
    e == "__proto__" && Il ? Il(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var Ha = Lp,
    Dp = Ha,
    Mp = ho;

function Pp(t, e, n) {
    (n !== void 0 && !Mp(t[e], n) || n === void 0 && !(e in t)) && Dp(t, e, n)
}
var $c = Pp;

function Vp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), m = i(e), _ = m.length; _--;) {
            var k = m[t ? _ : ++a];
            if (n(f[k], k, f) === !1) break
        }
        return e
    }
}
var Np = Vp,
    Bp = Np,
    $p = Bp(),
    Fp = $p,
    ka = {
        exports: {}
    };
(function(t, e) {
    var n = Er,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        m = f ? n.Buffer : void 0,
        _ = m ? m.allocUnsafe : void 0;

    function k(I, L) {
        if (L) return I.slice();
        var B = I.length,
            J = _ ? _(B) : new I.constructor(B);
        return I.copy(J), J
    }
    t.exports = k
})(ka, ka.exports);
var jp = Er,
    zp = jp.Uint8Array,
    Up = zp,
    Rl = Up;

function Gp(t) {
    var e = new t.constructor(t.byteLength);
    return new Rl(e).set(new Rl(t)), e
}
var Hp = Gp,
    qp = Hp;

function Wp(t, e) {
    var n = e ? qp(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Xp = Wp;

function Kp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Yp = Kp,
    Jp = Fi,
    Ll = Object.create,
    Qp = function() {
        function t() {}
        return function(e) {
            if (!Jp(e)) return {};
            if (Ll) return Ll(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Zp = Qp;

function eg(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var tg = eg,
    ng = tg,
    ig = ng(Object.getPrototypeOf, Object),
    Fc = ig,
    rg = Object.prototype;

function sg(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || rg;
    return t === n
}
var jc = sg,
    og = Zp,
    ag = Fc,
    lg = jc;

function cg(t) {
    return typeof t.constructor == "function" && !lg(t) ? og(ag(t)) : {}
}
var ug = cg;

function hg(t) {
    return t != null && typeof t == "object"
}
var fs = hg,
    dg = go,
    fg = fs,
    pg = "[object Arguments]";

function gg(t) {
    return fg(t) && dg(t) == pg
}
var mg = gg,
    Dl = mg,
    vg = fs,
    zc = Object.prototype,
    yg = zc.hasOwnProperty,
    wg = zc.propertyIsEnumerable,
    bg = Dl(function() {
        return arguments
    }()) ? Dl : function(t) {
        return vg(t) && yg.call(t, "callee") && !wg.call(t, "callee")
    },
    Uc = bg,
    Cg = Array.isArray,
    Gc = Cg,
    xg = 9007199254740991;

function Eg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= xg
}
var Hc = Eg,
    _g = Ua,
    Sg = Hc;

function kg(t) {
    return t != null && Sg(t.length) && !_g(t)
}
var qa = kg,
    Tg = qa,
    Ag = fs;

function Og(t) {
    return Ag(t) && Tg(t)
}
var Ig = Og,
    to = {
        exports: {}
    };

function Rg() {
    return !1
}
var Lg = Rg;
(function(t, e) {
    var n = Er,
        i = Lg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        m = f && f.exports === a,
        _ = m ? n.Buffer : void 0,
        k = _ ? _.isBuffer : void 0,
        I = k || i;
    t.exports = I
})(to, to.exports);
var Dg = go,
    Mg = Fc,
    Pg = fs,
    Vg = "[object Object]",
    Ng = Function.prototype,
    Bg = Object.prototype,
    qc = Ng.toString,
    $g = Bg.hasOwnProperty,
    Fg = qc.call(Object);

function jg(t) {
    if (!Pg(t) || Dg(t) != Vg) return !1;
    var e = Mg(t);
    if (e === null) return !0;
    var n = $g.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && qc.call(n) == Fg
}
var zg = jg,
    Ug = go,
    Gg = Hc,
    Hg = fs,
    qg = "[object Arguments]",
    Wg = "[object Array]",
    Xg = "[object Boolean]",
    Kg = "[object Date]",
    Yg = "[object Error]",
    Jg = "[object Function]",
    Qg = "[object Map]",
    Zg = "[object Number]",
    em = "[object Object]",
    tm = "[object RegExp]",
    nm = "[object Set]",
    im = "[object String]",
    rm = "[object WeakMap]",
    sm = "[object ArrayBuffer]",
    om = "[object DataView]",
    am = "[object Float32Array]",
    lm = "[object Float64Array]",
    cm = "[object Int8Array]",
    um = "[object Int16Array]",
    hm = "[object Int32Array]",
    dm = "[object Uint8Array]",
    fm = "[object Uint8ClampedArray]",
    pm = "[object Uint16Array]",
    gm = "[object Uint32Array]",
    Dt = {};
Dt[am] = Dt[lm] = Dt[cm] = Dt[um] = Dt[hm] = Dt[dm] = Dt[fm] = Dt[pm] = Dt[gm] = !0;
Dt[qg] = Dt[Wg] = Dt[sm] = Dt[Xg] = Dt[om] = Dt[Kg] = Dt[Yg] = Dt[Jg] = Dt[Qg] = Dt[Zg] = Dt[em] = Dt[tm] = Dt[nm] = Dt[im] = Dt[rm] = !1;

function mm(t) {
    return Hg(t) && Gg(t.length) && !!Dt[Ug(t)]
}
var vm = mm;

function ym(t) {
    return function(e) {
        return t(e)
    }
}
var wm = ym,
    Ta = {
        exports: {}
    };
(function(t, e) {
    var n = Mc,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        m = f && n.process,
        _ = function() {
            try {
                var k = a && a.require && a.require("util").types;
                return k || m && m.binding && m.binding("util")
            } catch {}
        }();
    t.exports = _
})(Ta, Ta.exports);
var bm = vm,
    Cm = wm,
    Ml = Ta.exports,
    Pl = Ml && Ml.isTypedArray,
    xm = Pl ? Cm(Pl) : bm,
    Wc = xm;

function Em(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Xc = Em,
    _m = Ha,
    Sm = ho,
    km = Object.prototype,
    Tm = km.hasOwnProperty;

function Am(t, e, n) {
    var i = t[e];
    (!(Tm.call(t, e) && Sm(i, n)) || n === void 0 && !(e in t)) && _m(t, e, n)
}
var Om = Am,
    Im = Om,
    Rm = Ha;

function Lm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, m = e.length; ++f < m;) {
        var _ = e[f],
            k = i ? i(n[_], t[_], _, n, t) : void 0;
        k === void 0 && (k = t[_]), a ? Rm(n, _, k) : Im(n, _, k)
    }
    return n
}
var Dm = Lm;

function Mm(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var Pm = Mm,
    Vm = 9007199254740991,
    Nm = /^(?:0|[1-9]\d*)$/;

function Bm(t, e) {
    var n = typeof t;
    return e = e == null ? Vm : e, !!e && (n == "number" || n != "symbol" && Nm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Kc = Bm,
    $m = Pm,
    Fm = Uc,
    jm = Gc,
    zm = to.exports,
    Um = Kc,
    Gm = Wc,
    Hm = Object.prototype,
    qm = Hm.hasOwnProperty;

function Wm(t, e) {
    var n = jm(t),
        i = !n && Fm(t),
        a = !n && !i && zm(t),
        f = !n && !i && !a && Gm(t),
        m = n || i || a || f,
        _ = m ? $m(t.length, String) : [],
        k = _.length;
    for (var I in t)(e || qm.call(t, I)) && !(m && (I == "length" || a && (I == "offset" || I == "parent") || f && (I == "buffer" || I == "byteLength" || I == "byteOffset") || Um(I, k))) && _.push(I);
    return _
}
var Xm = Wm;

function Km(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Ym = Km,
    Jm = Fi,
    Qm = jc,
    Zm = Ym,
    ev = Object.prototype,
    tv = ev.hasOwnProperty;

function nv(t) {
    if (!Jm(t)) return Zm(t);
    var e = Qm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !tv.call(t, i)) || n.push(i);
    return n
}
var iv = nv,
    rv = Xm,
    sv = iv,
    ov = qa;

function av(t) {
    return ov(t) ? rv(t, !0) : sv(t)
}
var Yc = av,
    lv = Dm,
    cv = Yc;

function uv(t) {
    return lv(t, cv(t))
}
var hv = uv,
    Vl = $c,
    dv = ka.exports,
    fv = Xp,
    pv = Yp,
    gv = ug,
    Nl = Uc,
    Bl = Gc,
    mv = Ig,
    vv = to.exports,
    yv = Ua,
    wv = Fi,
    bv = zg,
    Cv = Wc,
    $l = Xc,
    xv = hv;

function Ev(t, e, n, i, a, f, m) {
    var _ = $l(t, n),
        k = $l(e, n),
        I = m.get(k);
    if (I) {
        Vl(t, n, I);
        return
    }
    var L = f ? f(_, k, n + "", t, e, m) : void 0,
        B = L === void 0;
    if (B) {
        var J = Bl(k),
            ie = !J && vv(k),
            K = !J && !ie && Cv(k);
        L = k, J || ie || K ? Bl(_) ? L = _ : mv(_) ? L = pv(_) : ie ? (B = !1, L = dv(k, !0)) : K ? (B = !1, L = fv(k, !0)) : L = [] : bv(k) || Nl(k) ? (L = _, Nl(_) ? L = xv(_) : (!wv(_) || yv(_)) && (L = gv(k))) : B = !1
    }
    B && (m.set(k, L), a(L, k, i, f, m), m.delete(k)), Vl(t, n, L)
}
var _v = Ev,
    Sv = Op,
    kv = $c,
    Tv = Fp,
    Av = _v,
    Ov = Fi,
    Iv = Yc,
    Rv = Xc;

function Jc(t, e, n, i, a) {
    t !== e && Tv(e, function(f, m) {
        if (a || (a = new Sv), Ov(f)) Av(t, e, m, n, Jc, i, a);
        else {
            var _ = i ? i(Rv(t, m), f, m + "", t, e, a) : void 0;
            _ === void 0 && (_ = f), kv(t, m, _)
        }
    }, Iv)
}
var Lv = Jc;

function Dv(t) {
    return t
}
var Qc = Dv;

function Mv(t, e, n) {
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
var Pv = Mv,
    Vv = Pv,
    Fl = Math.max;

function Nv(t, e, n) {
    return e = Fl(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = Fl(i.length - e, 0), m = Array(f); ++a < f;) m[a] = i[e + a];
            a = -1;
            for (var _ = Array(e + 1); ++a < e;) _[a] = i[a];
            return _[e] = n(m), Vv(t, this, _)
        }
}
var Bv = Nv;

function $v(t) {
    return function() {
        return t
    }
}
var Fv = $v,
    jv = Fv,
    jl = Bc,
    zv = Qc,
    Uv = jl ? function(t, e) {
        return jl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: jv(e),
            writable: !0
        })
    } : zv,
    Gv = Uv,
    Hv = 800,
    qv = 16,
    Wv = Date.now;

function Xv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Wv(),
            a = qv - (i - n);
        if (n = i, a > 0) {
            if (++e >= Hv) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Kv = Xv,
    Yv = Gv,
    Jv = Kv,
    Qv = Jv(Yv),
    Zv = Qv,
    ey = Qc,
    ty = Bv,
    ny = Zv;

function iy(t, e) {
    return ny(ty(t, e, ey), t + "")
}
var ry = iy,
    sy = ho,
    oy = qa,
    ay = Kc,
    ly = Fi;

function cy(t, e, n) {
    if (!ly(n)) return !1;
    var i = typeof e;
    return (i == "number" ? oy(n) && ay(e, n.length) : i == "string" && e in n) ? sy(n[e], t) : !1
}
var uy = cy,
    hy = ry,
    dy = uy;

function fy(t) {
    return hy(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            m = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, m && dy(n[0], n[1], m) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var _ = n[i];
            _ && t(e, _, i, f)
        }
        return e
    })
}
var py = fy,
    gy = Lv,
    my = py,
    vy = my(function(t, e, n) {
        gy(t, e, n)
    }),
    yy = vy;
class Aa {
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
        return yy(e[0], ...e)
    }
}
at(Aa, "locale"), at(Aa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const Cl = class {
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
            _ = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let I = (Math.min(Math.max(0, (f & 255) * n), 255) | _ << 8 | m << 16).toString(16);
        for (; I.length < a.length;) I = `0${I}`;
        return (i ? "#" : "") + I
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
let en = Cl;
at(en, "queryParams", new URLSearchParams(window.location.search)), at(en, "getQueryParam", e => Cl.queryParams.get(e)), at(en, "sleep", e => new Promise(n => {
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
            namespace: (a = (i = en.getQueryParam("namespace")) != null ? i : en.getQueryParam("ns")) != null ? a : this.defaultNamespace,
            isDisabled: en.queryParams.has("incognito") || en.queryParams.has("nc")
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
        f = f.filter(_ => {
            const k = _.split("-")[0];
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
at(Zt, "defaultNamespace", "tv");
class $i {
    constructor() {
        at(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        $i.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!Zt.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            m = Zt.get("galleries") || "[]";
        try {
            const _ = JSON.parse(m) || [];
            if (_.some(k => k.url === f)) return;
            _.unshift({
                url: f,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), Zt.set("galleries", JSON.stringify(_.slice(0, 40)))
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
        $i.setAsViewed(e), this.artifacts = this.list()
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
        const e = new Intl.DateTimeFormat(Aa.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = Zt.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const m = new Date(f.time),
                    _ = e.format(m),
                    k = f.url.split("/"),
                    I = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let L = f.categoryId;
                return L || (f.url.indexOf("Quiplash2") !== -1 ? L = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? L = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? L = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (L = "TriviaDeathResults")), {
                    id: I,
                    gameName: L,
                    date: _,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Oa = {
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
        (function(m) {
            var _ = {
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

            function k(G) {
                return G && DataView.prototype.isPrototypeOf(G)
            }
            if (_.arrayBuffer) var I = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                L = ArrayBuffer.isView || function(G) {
                    return G && I.indexOf(Object.prototype.toString.call(G)) > -1
                };

            function B(G) {
                if (typeof G != "string" && (G = String(G)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(G)) throw new TypeError("Invalid character in header field name");
                return G.toLowerCase()
            }

            function J(G) {
                return typeof G != "string" && (G = String(G)), G
            }

            function ie(G) {
                var oe = {
                    next: function() {
                        var Te = G.shift();
                        return {
                            done: Te === void 0,
                            value: Te
                        }
                    }
                };
                return _.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function K(G) {
                this.map = {}, G instanceof K ? G.forEach(function(oe, Te) {
                    this.append(Te, oe)
                }, this) : Array.isArray(G) ? G.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : G && Object.getOwnPropertyNames(G).forEach(function(oe) {
                    this.append(oe, G[oe])
                }, this)
            }
            K.prototype.append = function(G, oe) {
                G = B(G), oe = J(oe);
                var Te = this.map[G];
                this.map[G] = Te ? Te + ", " + oe : oe
            }, K.prototype.delete = function(G) {
                delete this.map[B(G)]
            }, K.prototype.get = function(G) {
                return G = B(G), this.has(G) ? this.map[G] : null
            }, K.prototype.has = function(G) {
                return this.map.hasOwnProperty(B(G))
            }, K.prototype.set = function(G, oe) {
                this.map[B(G)] = J(oe)
            }, K.prototype.forEach = function(G, oe) {
                for (var Te in this.map) this.map.hasOwnProperty(Te) && G.call(oe, this.map[Te], Te, this)
            }, K.prototype.keys = function() {
                var G = [];
                return this.forEach(function(oe, Te) {
                    G.push(Te)
                }), ie(G)
            }, K.prototype.values = function() {
                var G = [];
                return this.forEach(function(oe) {
                    G.push(oe)
                }), ie(G)
            }, K.prototype.entries = function() {
                var G = [];
                return this.forEach(function(oe, Te) {
                    G.push([Te, oe])
                }), ie(G)
            }, _.iterable && (K.prototype[Symbol.iterator] = K.prototype.entries);

            function re(G) {
                if (G.bodyUsed) return Promise.reject(new TypeError("Already read"));
                G.bodyUsed = !0
            }

            function v(G) {
                return new Promise(function(oe, Te) {
                    G.onload = function() {
                        oe(G.result)
                    }, G.onerror = function() {
                        Te(G.error)
                    }
                })
            }

            function P(G) {
                var oe = new FileReader,
                    Te = v(oe);
                return oe.readAsArrayBuffer(G), Te
            }

            function q(G) {
                var oe = new FileReader,
                    Te = v(oe);
                return oe.readAsText(G), Te
            }

            function ae(G) {
                for (var oe = new Uint8Array(G), Te = new Array(oe.length), we = 0; we < oe.length; we++) Te[we] = String.fromCharCode(oe[we]);
                return Te.join("")
            }

            function se(G) {
                if (G.slice) return G.slice(0);
                var oe = new Uint8Array(G.byteLength);
                return oe.set(new Uint8Array(G)), oe.buffer
            }

            function ve() {
                return this.bodyUsed = !1, this._initBody = function(G) {
                    this._bodyInit = G, G ? typeof G == "string" ? this._bodyText = G : _.blob && Blob.prototype.isPrototypeOf(G) ? this._bodyBlob = G : _.formData && FormData.prototype.isPrototypeOf(G) ? this._bodyFormData = G : _.searchParams && URLSearchParams.prototype.isPrototypeOf(G) ? this._bodyText = G.toString() : _.arrayBuffer && _.blob && k(G) ? (this._bodyArrayBuffer = se(G.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(G) || L(G)) ? this._bodyArrayBuffer = se(G) : this._bodyText = G = Object.prototype.toString.call(G) : this._bodyText = "", this.headers.get("content-type") || (typeof G == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(G) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, _.blob && (this.blob = function() {
                    var G = re(this);
                    if (G) return G;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? re(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(P)
                }), this.text = function() {
                    var G = re(this);
                    if (G) return G;
                    if (this._bodyBlob) return q(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, _.formData && (this.formData = function() {
                    return this.text().then(Me)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Ee(G) {
                var oe = G.toUpperCase();
                return d.indexOf(oe) > -1 ? oe : G
            }

            function Ae(G, oe) {
                oe = oe || {};
                var Te = oe.body;
                if (G instanceof Ae) {
                    if (G.bodyUsed) throw new TypeError("Already read");
                    this.url = G.url, this.credentials = G.credentials, oe.headers || (this.headers = new K(G.headers)), this.method = G.method, this.mode = G.mode, this.signal = G.signal, !Te && G._bodyInit != null && (Te = G._bodyInit, G.bodyUsed = !0)
                } else this.url = String(G);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new K(oe.headers)), this.method = Ee(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Te) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Te)
            }
            Ae.prototype.clone = function() {
                return new Ae(this, {
                    body: this._bodyInit
                })
            };

            function Me(G) {
                var oe = new FormData;
                return G.trim().split("&").forEach(function(Te) {
                    if (Te) {
                        var we = Te.split("="),
                            ye = we.shift().replace(/\+/g, " "),
                            ue = we.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(ye), decodeURIComponent(ue))
                    }
                }), oe
            }

            function lt(G) {
                var oe = new K,
                    Te = G.replace(/\r?\n[\t ]+/g, " ");
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

            function Be(G, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new K(oe.headers), this.url = oe.url || "", this._initBody(G)
            }
            ve.call(Be.prototype), Be.prototype.clone = function() {
                return new Be(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new K(this.headers),
                    url: this.url
                })
            }, Be.error = function() {
                var G = new Be(null, {
                    status: 0,
                    statusText: ""
                });
                return G.type = "error", G
            };
            var Y = [301, 302, 303, 307, 308];
            Be.redirect = function(G, oe) {
                if (Y.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
                    status: oe,
                    headers: {
                        location: G
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

            function je(G, oe) {
                return new Promise(function(Te, we) {
                    var ye = new Ae(G, oe);
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
                    }, ue.open(ye.method, ye.url, !0), ye.credentials === "include" ? ue.withCredentials = !0 : ye.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && _.blob && (ue.responseType = "blob"), ye.headers.forEach(function(ke, $e) {
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
})(Oa, Oa.exports);
var wy = function() {
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
    zl = typeof Symbol < "u" && Symbol,
    by = wy,
    Cy = function() {
        return typeof zl != "function" || typeof Symbol != "function" || typeof zl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : by()
    },
    xy = "Function.prototype.bind called on incompatible ",
    ra = Array.prototype.slice,
    Ey = Object.prototype.toString,
    _y = "[object Function]",
    Sy = function(e) {
        var n = this;
        if (typeof n != "function" || Ey.call(n) !== _y) throw new TypeError(xy + n);
        for (var i = ra.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var L = n.apply(this, i.concat(ra.call(arguments)));
                    return Object(L) === L ? L : this
                } else return n.apply(e, i.concat(ra.call(arguments)))
            }, m = Math.max(0, n.length - i.length), _ = [], k = 0; k < m; k++) _.push("$" + k);
        if (a = Function("binder", "return function (" + _.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, a.prototype = new I, I.prototype = null
        }
        return a
    },
    ky = Sy,
    Wa = Function.prototype.bind || ky,
    Ty = Wa,
    Ay = Ty.call(Function.call, Object.prototype.hasOwnProperty),
    mt, yr = SyntaxError,
    Zc = Function,
    fr = TypeError,
    sa = function(t) {
        try {
            return Zc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Ni = Object.getOwnPropertyDescriptor;
if (Ni) try {
    Ni({}, "")
} catch {
    Ni = null
}
var oa = function() {
        throw new fr
    },
    Oy = Ni ? function() {
        try {
            return arguments.callee, oa
        } catch {
            try {
                return Ni(arguments, "callee").get
            } catch {
                return oa
            }
        }
    }() : oa,
    sr = Cy(),
    ui = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    lr = {},
    Iy = typeof Uint8Array > "u" ? mt : ui(Uint8Array),
    pr = {
        "%AggregateError%": typeof AggregateError > "u" ? mt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? mt : ArrayBuffer,
        "%ArrayIteratorPrototype%": sr ? ui([][Symbol.iterator]()) : mt,
        "%AsyncFromSyncIteratorPrototype%": mt,
        "%AsyncFunction%": lr,
        "%AsyncGenerator%": lr,
        "%AsyncGeneratorFunction%": lr,
        "%AsyncIteratorPrototype%": lr,
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
        "%Function%": Zc,
        "%GeneratorFunction%": lr,
        "%Int8Array%": typeof Int8Array > "u" ? mt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? mt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? mt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": sr ? ui(ui([][Symbol.iterator]())) : mt,
        "%JSON%": typeof JSON == "object" ? JSON : mt,
        "%Map%": typeof Map > "u" ? mt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !sr ? mt : ui(new Map()[Symbol.iterator]()),
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
        "%SetIteratorPrototype%": typeof Set > "u" || !sr ? mt : ui(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? mt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": sr ? ui("" [Symbol.iterator]()) : mt,
        "%Symbol%": sr ? Symbol : mt,
        "%SyntaxError%": yr,
        "%ThrowTypeError%": Oy,
        "%TypedArray%": Iy,
        "%TypeError%": fr,
        "%Uint8Array%": typeof Uint8Array > "u" ? mt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? mt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? mt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? mt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? mt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? mt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? mt : WeakSet
    },
    Ry = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = sa("async function () {}");
        else if (e === "%GeneratorFunction%") n = sa("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = sa("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = ui(a.prototype))
        }
        return pr[e] = n, n
    },
    Ul = {
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
    ps = Wa,
    no = Ay,
    Ly = ps.call(Function.call, Array.prototype.concat),
    Dy = ps.call(Function.apply, Array.prototype.splice),
    Gl = ps.call(Function.call, String.prototype.replace),
    io = ps.call(Function.call, String.prototype.slice),
    My = ps.call(Function.call, RegExp.prototype.exec),
    Py = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Vy = /\\(\\)?/g,
    Ny = function(e) {
        var n = io(e, 0, 1),
            i = io(e, -1);
        if (n === "%" && i !== "%") throw new yr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new yr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Gl(e, Py, function(f, m, _, k) {
            a[a.length] = _ ? Gl(k, Vy, "$1") : m || f
        }), a
    },
    By = function(e, n) {
        var i = e,
            a;
        if (no(Ul, i) && (a = Ul[i], i = "%" + a[0] + "%"), no(pr, i)) {
            var f = pr[i];
            if (f === lr && (f = Ry(i)), typeof f > "u" && !n) throw new fr("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new yr("intrinsic " + e + " does not exist!")
    },
    Xa = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new fr("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new fr('"allowMissing" argument must be a boolean');
        if (My(/^%?[^%]*%?$/g, e) === null) throw new yr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = Ny(e),
            a = i.length > 0 ? i[0] : "",
            f = By("%" + a + "%", n),
            m = f.name,
            _ = f.value,
            k = !1,
            I = f.alias;
        I && (a = I[0], Dy(i, Ly([0, 1], I)));
        for (var L = 1, B = !0; L < i.length; L += 1) {
            var J = i[L],
                ie = io(J, 0, 1),
                K = io(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || K === '"' || K === "'" || K === "`") && ie !== K) throw new yr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !B) && (k = !0), a += "." + J, m = "%" + a + "%", no(pr, m)) _ = pr[m];
            else if (_ != null) {
                if (!(J in _)) {
                    if (!n) throw new fr("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Ni && L + 1 >= i.length) {
                    var re = Ni(_, J);
                    B = !!re, B && "get" in re && !("originalValue" in re.get) ? _ = re.get : _ = _[J]
                } else B = no(_, J), _ = _[J];
                B && !k && (pr[m] = _)
            }
        }
        return _
    },
    eu = {
        exports: {}
    };
(function(t) {
    var e = Wa,
        n = Xa,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(a, i),
        m = n("%Object.getOwnPropertyDescriptor%", !0),
        _ = n("%Object.defineProperty%", !0),
        k = n("%Math.max%");
    if (_) try {
        _({}, "a", {
            value: 1
        })
    } catch {
        _ = null
    }
    t.exports = function(B) {
        var J = f(e, a, arguments);
        if (m && _) {
            var ie = m(J, "length");
            ie.configurable && _(J, "length", {
                value: 1 + k(0, B.length - (arguments.length - 1))
            })
        }
        return J
    };
    var I = function() {
        return f(e, i, arguments)
    };
    _ ? _(t.exports, "apply", {
        value: I
    }) : t.exports.apply = I
})(eu);
var tu = Xa,
    nu = eu.exports,
    $y = nu(tu("String.prototype.indexOf")),
    Fy = function(e, n) {
        var i = tu(e, !!n);
        return typeof i == "function" && $y(e, ".prototype.") > -1 ? nu(i) : i
    };
const jy = {},
    zy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: jy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Uy = Lh(zy);
var Ka = typeof Map == "function" && Map.prototype,
    aa = Object.getOwnPropertyDescriptor && Ka ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    ro = Ka && aa && typeof aa.get == "function" ? aa.get : null,
    Gy = Ka && Map.prototype.forEach,
    Ya = typeof Set == "function" && Set.prototype,
    la = Object.getOwnPropertyDescriptor && Ya ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    so = Ya && la && typeof la.get == "function" ? la.get : null,
    Hy = Ya && Set.prototype.forEach,
    qy = typeof WeakMap == "function" && WeakMap.prototype,
    rs = qy ? WeakMap.prototype.has : null,
    Wy = typeof WeakSet == "function" && WeakSet.prototype,
    ss = Wy ? WeakSet.prototype.has : null,
    Xy = typeof WeakRef == "function" && WeakRef.prototype,
    Hl = Xy ? WeakRef.prototype.deref : null,
    Ky = Boolean.prototype.valueOf,
    Yy = Object.prototype.toString,
    Jy = Function.prototype.toString,
    Qy = String.prototype.match,
    Ja = String.prototype.slice,
    pi = String.prototype.replace,
    Zy = String.prototype.toUpperCase,
    ql = String.prototype.toLowerCase,
    iu = RegExp.prototype.test,
    Wl = Array.prototype.concat,
    zn = Array.prototype.join,
    ew = Array.prototype.slice,
    Xl = Math.floor,
    Ia = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ca = Object.getOwnPropertySymbols,
    Ra = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    wr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === wr ? "object" : "symbol") ? Symbol.toStringTag : null,
    ru = Object.prototype.propertyIsEnumerable,
    Kl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Yl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || iu.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Xl(-t) : Xl(t);
        if (i !== t) {
            var a = String(i),
                f = Ja.call(e, a.length + 1);
            return pi.call(a, n, "$&_") + "." + pi.call(pi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return pi.call(e, n, "$&_")
}
var La = Uy,
    Jl = La.custom,
    Ql = ou(Jl) ? Jl : null,
    tw = function t(e, n, i, a) {
        var f = n || {};
        if (hi(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (hi(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = hi(f, "customInspect") ? f.customInspect : !0;
        if (typeof m != "boolean" && m !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (hi(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (hi(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var _ = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return lu(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return _ ? Yl(e, k) : k
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return _ ? Yl(e, I) : I
        }
        var L = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= L && L > 0 && typeof e == "object") return Da(e) ? "[Array]" : "[Object]";
        var B = ww(f, i);
        if (typeof a > "u") a = [];
        else if (au(a, e) >= 0) return "[Circular]";

        function J(je, G, oe) {
            if (G && (a = ew.call(a), a.push(G)), oe) {
                var Te = {
                    depth: f.depth
                };
                return hi(f, "quoteStyle") && (Te.quoteStyle = f.quoteStyle), t(je, Te, i + 1, a)
            }
            return t(je, f, i + 1, a)
        }
        if (typeof e == "function" && !Zl(e)) {
            var ie = uw(e),
                K = Ns(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (K.length > 0 ? " { " + zn.call(K, ", ") + " }" : "")
        }
        if (ou(e)) {
            var re = wr ? pi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ra.call(e);
            return typeof e == "object" && !wr ? Qr(re) : re
        }
        if (mw(e)) {
            for (var v = "<" + ql.call(String(e.nodeName)), P = e.attributes || [], q = 0; q < P.length; q++) v += " " + P[q].name + "=" + su(nw(P[q].value), "double", f);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + ql.call(String(e.nodeName)) + ">", v
        }
        if (Da(e)) {
            if (e.length === 0) return "[]";
            var ae = Ns(e, J);
            return B && !yw(ae) ? "[" + Ma(ae, B) + "]" : "[ " + zn.call(ae, ", ") + " ]"
        }
        if (rw(e)) {
            var se = Ns(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !ru.call(e, "cause") ? "{ [" + String(e) + "] " + zn.call(Wl.call("[cause]: " + J(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + zn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && m) {
            if (Ql && typeof e[Ql] == "function" && La) return La(e, {
                depth: L - i
            });
            if (m !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (hw(e)) {
            var ve = [];
            return Gy.call(e, function(je, G) {
                ve.push(J(G, e, !0) + " => " + J(je, e))
            }), ec("Map", ro.call(e), ve, B)
        }
        if (pw(e)) {
            var d = [];
            return Hy.call(e, function(je) {
                d.push(J(je, e))
            }), ec("Set", so.call(e), d, B)
        }
        if (dw(e)) return ua("WeakMap");
        if (gw(e)) return ua("WeakSet");
        if (fw(e)) return ua("WeakRef");
        if (ow(e)) return Qr(J(Number(e)));
        if (lw(e)) return Qr(J(Ia.call(e)));
        if (aw(e)) return Qr(Ky.call(e));
        if (sw(e)) return Qr(J(String(e)));
        if (!iw(e) && !Zl(e)) {
            var Ee = Ns(e, J),
                Ae = Kl ? Kl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Me = e instanceof Object ? "" : "null prototype",
                lt = !Ae && cn && Object(e) === e && cn in e ? Ja.call(mi(e), 8, -1) : Me ? "Object" : "",
                Be = Ae || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Y = Be + (lt || Me ? "[" + zn.call(Wl.call([], lt || [], Me || []), ": ") + "] " : "");
            return Ee.length === 0 ? Y + "{}" : B ? Y + "{" + Ma(Ee, B) + "}" : Y + "{ " + zn.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function su(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function nw(t) {
    return pi.call(String(t), /"/g, "&quot;")
}

function Da(t) {
    return mi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function iw(t) {
    return mi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Zl(t) {
    return mi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function rw(t) {
    return mi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function sw(t) {
    return mi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function ow(t) {
    return mi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function aw(t) {
    return mi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function ou(t) {
    if (wr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Ra) return !1;
    try {
        return Ra.call(t), !0
    } catch {}
    return !1
}

function lw(t) {
    if (!t || typeof t != "object" || !Ia) return !1;
    try {
        return Ia.call(t), !0
    } catch {}
    return !1
}
var cw = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function hi(t, e) {
    return cw.call(t, e)
}

function mi(t) {
    return Yy.call(t)
}

function uw(t) {
    if (t.name) return t.name;
    var e = Qy.call(Jy.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function au(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function hw(t) {
    if (!ro || !t || typeof t != "object") return !1;
    try {
        ro.call(t);
        try {
            so.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function dw(t) {
    if (!rs || !t || typeof t != "object") return !1;
    try {
        rs.call(t, rs);
        try {
            ss.call(t, ss)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function fw(t) {
    if (!Hl || !t || typeof t != "object") return !1;
    try {
        return Hl.call(t), !0
    } catch {}
    return !1
}

function pw(t) {
    if (!so || !t || typeof t != "object") return !1;
    try {
        so.call(t);
        try {
            ro.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function gw(t) {
    if (!ss || !t || typeof t != "object") return !1;
    try {
        ss.call(t, ss);
        try {
            rs.call(t, rs)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function mw(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function lu(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return lu(Ja.call(t, 0, e.maxStringLength), e) + i
    }
    var a = pi.call(pi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, vw);
    return su(a, "single", e)
}

function vw(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Zy.call(e.toString(16))
}

function Qr(t) {
    return "Object(" + t + ")"
}

function ua(t) {
    return t + " { ? }"
}

function ec(t, e, n, i) {
    var a = i ? Ma(n, i) : zn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function yw(t) {
    for (var e = 0; e < t.length; e++)
        if (au(t[e], `
`) >= 0) return !1;
    return !0
}

function ww(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = zn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: zn.call(Array(e + 1), n)
    }
}

function Ma(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + zn.call(t, "," + n) + `
` + e.prev
}

function Ns(t, e) {
    var n = Da(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = hi(t, a) ? e(t[a], t) : ""
    }
    var f = typeof ca == "function" ? ca(t) : [],
        m;
    if (wr) {
        m = {};
        for (var _ = 0; _ < f.length; _++) m["$" + f[_]] = f[_]
    }
    for (var k in t) !hi(t, k) || n && String(Number(k)) === k && k < t.length || wr && m["$" + k] instanceof Symbol || (iu.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ca == "function")
        for (var I = 0; I < f.length; I++) ru.call(t, f[I]) && i.push("[" + e(f[I]) + "]: " + e(t[f[I]], t));
    return i
}
var Qa = Xa,
    Tr = Fy,
    bw = tw,
    Cw = Qa("%TypeError%"),
    Bs = Qa("%WeakMap%", !0),
    $s = Qa("%Map%", !0),
    xw = Tr("WeakMap.prototype.get", !0),
    Ew = Tr("WeakMap.prototype.set", !0),
    _w = Tr("WeakMap.prototype.has", !0),
    Sw = Tr("Map.prototype.get", !0),
    kw = Tr("Map.prototype.set", !0),
    Tw = Tr("Map.prototype.has", !0),
    Za = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    Aw = function(t, e) {
        var n = Za(t, e);
        return n && n.value
    },
    Ow = function(t, e, n) {
        var i = Za(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    Iw = function(t, e) {
        return !!Za(t, e)
    },
    Rw = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new Cw("Side channel does not contain " + bw(f))
            },
            get: function(f) {
                if (Bs && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return xw(e, f)
                } else if ($s) {
                    if (n) return Sw(n, f)
                } else if (i) return Aw(i, f)
            },
            has: function(f) {
                if (Bs && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return _w(e, f)
                } else if ($s) {
                    if (n) return Tw(n, f)
                } else if (i) return Iw(i, f);
                return !1
            },
            set: function(f, m) {
                Bs && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Bs), Ew(e, f, m)) : $s ? (n || (n = new $s), kw(n, f, m)) : (i || (i = {
                    key: {},
                    next: null
                }), Ow(i, f, m))
            }
        };
        return a
    },
    Lw = String.prototype.replace,
    Dw = /%20/g,
    ha = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    el = {
        default: ha.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return Lw.call(t, Dw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: ha.RFC1738,
        RFC3986: ha.RFC3986
    },
    Mw = el,
    da = Object.prototype.hasOwnProperty,
    Pi = Array.isArray,
    Fn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    Pw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Pi(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    cu = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    Vw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Pi(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !da.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Pi(e) && !Pi(n) && (a = cu(e, i)), Pi(e) && Pi(n) ? (n.forEach(function(f, m) {
            if (da.call(e, m)) {
                var _ = e[m];
                _ && typeof _ == "object" && f && typeof f == "object" ? e[m] = t(_, f, i) : e.push(f)
            } else e[m] = f
        }), e) : Object.keys(n).reduce(function(f, m) {
            var _ = n[m];
            return da.call(f, m) ? f[m] = t(f[m], _, i) : f[m] = _, f
        }, a)
    },
    Nw = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    Bw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    $w = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var m = e;
        if (typeof e == "symbol" ? m = Symbol.prototype.toString.call(e) : typeof e != "string" && (m = String(e)), i === "iso-8859-1") return escape(m).replace(/%u[0-9a-f]{4}/gi, function(L) {
            return "%26%23" + parseInt(L.slice(2), 16) + "%3B"
        });
        for (var _ = "", k = 0; k < m.length; ++k) {
            var I = m.charCodeAt(k);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || f === Mw.RFC1738 && (I === 40 || I === 41)) {
                _ += m.charAt(k);
                continue
            }
            if (I < 128) {
                _ = _ + Fn[I];
                continue
            }
            if (I < 2048) {
                _ = _ + (Fn[192 | I >> 6] + Fn[128 | I & 63]);
                continue
            }
            if (I < 55296 || I >= 57344) {
                _ = _ + (Fn[224 | I >> 12] + Fn[128 | I >> 6 & 63] + Fn[128 | I & 63]);
                continue
            }
            k += 1, I = 65536 + ((I & 1023) << 10 | m.charCodeAt(k) & 1023), _ += Fn[240 | I >> 18] + Fn[128 | I >> 12 & 63] + Fn[128 | I >> 6 & 63] + Fn[128 | I & 63]
        }
        return _
    },
    Fw = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], m = f.obj[f.prop], _ = Object.keys(m), k = 0; k < _.length; ++k) {
                var I = _[k],
                    L = m[I];
                typeof L == "object" && L !== null && i.indexOf(L) === -1 && (n.push({
                    obj: m,
                    prop: I
                }), i.push(L))
            }
        return Pw(n), e
    },
    jw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    zw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Uw = function(e, n) {
        return [].concat(e, n)
    },
    Gw = function(e, n) {
        if (Pi(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    uu = {
        arrayToObject: cu,
        assign: Nw,
        combine: Uw,
        compact: Fw,
        decode: Bw,
        encode: $w,
        isBuffer: zw,
        isRegExp: jw,
        maybeMap: Gw,
        merge: Vw
    },
    hu = Rw,
    Pa = uu,
    os = el,
    Hw = Object.prototype.hasOwnProperty,
    tc = {
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
    ii = Array.isArray,
    qw = String.prototype.split,
    Ww = Array.prototype.push,
    du = function(t, e) {
        Ww.apply(t, ii(e) ? e : [e])
    },
    Xw = Date.prototype.toISOString,
    nc = os.default,
    nn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Pa.encode,
        encodeValuesOnly: !1,
        format: nc,
        formatter: os.formatters[nc],
        indices: !1,
        serializeDate: function(e) {
            return Xw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Kw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    fa = {},
    Yw = function t(e, n, i, a, f, m, _, k, I, L, B, J, ie, K, re, v) {
        for (var P = e, q = v, ae = 0, se = !1;
            (q = q.get(fa)) !== void 0 && !se;) {
            var ve = q.get(e);
            if (ae += 1, typeof ve < "u") {
                if (ve === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof q.get(fa) > "u" && (ae = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = B(P) : i === "comma" && ii(P) && (P = Pa.maybeMap(P, function(ue) {
                return ue instanceof Date ? B(ue) : ue
            })), P === null) {
            if (f) return _ && !K ? _(n, nn.encoder, re, "key", J) : n;
            P = ""
        }
        if (Kw(P) || Pa.isBuffer(P)) {
            if (_) {
                var d = K ? n : _(n, nn.encoder, re, "key", J);
                if (i === "comma" && K) {
                    for (var Ee = qw.call(String(P), ","), Ae = "", Me = 0; Me < Ee.length; ++Me) Ae += (Me === 0 ? "" : ",") + ie(_(Ee[Me], nn.encoder, re, "value", J));
                    return [ie(d) + (a && ii(P) && Ee.length === 1 ? "[]" : "") + "=" + Ae]
                }
                return [ie(d) + "=" + ie(_(P, nn.encoder, re, "value", J))]
            }
            return [ie(n) + "=" + ie(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var Be;
        if (i === "comma" && ii(P)) Be = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ii(k)) Be = k;
        else {
            var Y = Object.keys(P);
            Be = I ? Y.sort(I) : Y
        }
        for (var je = a && ii(P) && P.length === 1 ? n + "[]" : n, G = 0; G < Be.length; ++G) {
            var oe = Be[G],
                Te = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(m && Te === null)) {
                var we = ii(P) ? typeof i == "function" ? i(je, oe) : je : je + (L ? "." + oe : "[" + oe + "]");
                v.set(e, ae);
                var ye = hu();
                ye.set(fa, v), du(lt, t(Te, we, i, a, f, m, _, k, I, L, B, J, ie, K, re, ye))
            }
        }
        return lt
    },
    Jw = function(e) {
        if (!e) return nn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || nn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = os.default;
        if (typeof e.format < "u") {
            if (!Hw.call(os.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = os.formatters[i],
            f = nn.filter;
        return (typeof e.filter == "function" || ii(e.filter)) && (f = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : nn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? nn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : nn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? nn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : nn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : nn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : nn.encodeValuesOnly,
            filter: f,
            format: i,
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : nn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : nn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : nn.strictNullHandling
        }
    },
    Qw = function(t, e) {
        var n = t,
            i = Jw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ii(i.filter) && (f = i.filter, a = f);
        var m = [];
        if (typeof n != "object" || n === null) return "";
        var _;
        e && e.arrayFormat in tc ? _ = e.arrayFormat : e && "indices" in e ? _ = e.indices ? "indices" : "repeat" : _ = "indices";
        var k = tc[_];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var L = hu(), B = 0; B < a.length; ++B) {
            var J = a[B];
            i.skipNulls && n[J] === null || du(m, Yw(n[J], J, k, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, L))
        }
        var ie = m.join(i.delimiter),
            K = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? K += "utf8=%26%2310003%3B&" : K += "utf8=%E2%9C%93&"), ie.length > 0 ? K + ie : ""
    },
    br = uu,
    Va = Object.prototype.hasOwnProperty,
    Zw = Array.isArray,
    Qt = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: br.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    eb = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    fu = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    tb = "utf8=%26%2310003%3B",
    nb = "utf8=%E2%9C%93",
    ib = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            m = a.split(n.delimiter, f),
            _ = -1,
            k, I = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < m.length; ++k) m[k].indexOf("utf8=") === 0 && (m[k] === nb ? I = "utf-8" : m[k] === tb && (I = "iso-8859-1"), _ = k, k = m.length);
        for (k = 0; k < m.length; ++k)
            if (k !== _) {
                var L = m[k],
                    B = L.indexOf("]="),
                    J = B === -1 ? L.indexOf("=") : B + 1,
                    ie, K;
                J === -1 ? (ie = n.decoder(L, Qt.decoder, I, "key"), K = n.strictNullHandling ? null : "") : (ie = n.decoder(L.slice(0, J), Qt.decoder, I, "key"), K = br.maybeMap(fu(L.slice(J + 1), n), function(re) {
                    return n.decoder(re, Qt.decoder, I, "value")
                })), K && n.interpretNumericEntities && I === "iso-8859-1" && (K = eb(K)), L.indexOf("[]=") > -1 && (K = Zw(K) ? [K] : K), Va.call(i, ie) ? i[ie] = br.combine(i[ie], K) : i[ie] = K
            } return i
    },
    rb = function(t, e, n, i) {
        for (var a = i ? e : fu(e, n), f = t.length - 1; f >= 0; --f) {
            var m, _ = t[f];
            if (_ === "[]" && n.parseArrays) m = [].concat(a);
            else {
                m = n.plainObjects ? Object.create(null) : {};
                var k = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _,
                    I = parseInt(k, 10);
                !n.parseArrays && k === "" ? m = {
                    0: a
                } : !isNaN(I) && _ !== k && String(I) === k && I >= 0 && n.parseArrays && I <= n.arrayLimit ? (m = [], m[I] = a) : k !== "__proto__" && (m[k] = a)
            }
            a = m
        }
        return a
    },
    sb = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                m = /(\[[^[\]]*])/,
                _ = /(\[[^[\]]*])/g,
                k = i.depth > 0 && m.exec(f),
                I = k ? f.slice(0, k.index) : f,
                L = [];
            if (I) {
                if (!i.plainObjects && Va.call(Object.prototype, I) && !i.allowPrototypes) return;
                L.push(I)
            }
            for (var B = 0; i.depth > 0 && (k = _.exec(f)) !== null && B < i.depth;) {
                if (B += 1, !i.plainObjects && Va.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                L.push(k[1])
            }
            return k && L.push("[" + f.slice(k.index) + "]"), rb(L, n, i, a)
        }
    },
    ob = function(e) {
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
            delimiter: typeof e.delimiter == "string" || br.isRegExp(e.delimiter) ? e.delimiter : Qt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Qt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Qt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Qt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Qt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Qt.strictNullHandling
        }
    },
    ab = function(t, e) {
        var n = ob(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? ib(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), m = 0; m < f.length; ++m) {
            var _ = f[m],
                k = sb(_, i[_], n, typeof t == "string");
            a = br.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : br.compact(a)
    },
    lb = Qw,
    cb = ab,
    ub = el,
    pu = {
        formats: ub,
        parse: cb,
        stringify: lb
    };
class hb {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class db {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class fb {
    constructor(e) {
        this.connections = e.connections
    }
}
class pb {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class gb {}
var yo = {
    CreateRoomReply: hb,
    GetRoomReply: db,
    GetAudienceReply: fb,
    RoomExit: pb,
    RoomLock: gb
};
const ic = Oa.exports,
    mb = pu,
    {
        CreateRoomReply: vb,
        GetRoomReply: yb
    } = yo;
class wb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = mb.stringify(n);
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
            m = await (await ic(i, {
                method: "POST"
            })).json();
        if (!m.ok) throw new Error(`failed to create room: ${m.error}`);
        let _ = m.body;
        return new vb({
            code: _.code,
            token: _.token,
            host: _.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await ic(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
        return new yb({
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
var bb = {
        APIClient: wb
    },
    cr = null;
typeof WebSocket < "u" ? cr = WebSocket : typeof MozWebSocket < "u" ? cr = MozWebSocket : typeof vt < "u" ? cr = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? cr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (cr = self.WebSocket || self.MozWebSocket);
var Cb = cr,
    tl = {
        exports: {}
    },
    gr = typeof Reflect == "object" ? Reflect : null,
    rc = gr && typeof gr.apply == "function" ? gr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    qs;
gr && typeof gr.ownKeys == "function" ? qs = gr.ownKeys : Object.getOwnPropertySymbols ? qs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : qs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function xb(t) {
    console && console.warn && console.warn(t)
}
var gu = Number.isNaN || function(e) {
    return e !== e
};

function It() {
    It.init.call(this)
}
tl.exports = It;
tl.exports.once = kb;
It.EventEmitter = It;
It.prototype._events = void 0;
It.prototype._eventsCount = 0;
It.prototype._maxListeners = void 0;
var sc = 10;

function wo(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(It, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return sc
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || gu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        sc = t
    }
});
It.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
It.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || gu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function mu(t) {
    return t._maxListeners === void 0 ? It.defaultMaxListeners : t._maxListeners
}
It.prototype.getMaxListeners = function() {
    return mu(this)
};
It.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var a = e === "error",
        f = this._events;
    if (f !== void 0) a = a && f.error === void 0;
    else if (!a) return !1;
    if (a) {
        var m;
        if (n.length > 0 && (m = n[0]), m instanceof Error) throw m;
        var _ = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw _.context = m, _
    }
    var k = f[e];
    if (k === void 0) return !1;
    if (typeof k == "function") rc(k, this, n);
    else
        for (var I = k.length, L = Cu(k, I), i = 0; i < I; ++i) rc(L[i], this, n);
    return !0
};

function vu(t, e, n, i) {
    var a, f, m;
    if (wo(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), m = f[e]), m === void 0) m = f[e] = n, ++t._eventsCount;
    else if (typeof m == "function" ? m = f[e] = i ? [n, m] : [m, n] : i ? m.unshift(n) : m.push(n), a = mu(t), a > 0 && m.length > a && !m.warned) {
        m.warned = !0;
        var _ = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _.name = "MaxListenersExceededWarning", _.emitter = t, _.type = e, _.count = m.length, xb(_)
    }
    return t
}
It.prototype.addListener = function(e, n) {
    return vu(this, e, n, !1)
};
It.prototype.on = It.prototype.addListener;
It.prototype.prependListener = function(e, n) {
    return vu(this, e, n, !0)
};

function Eb() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function yu(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = Eb.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
It.prototype.once = function(e, n) {
    return wo(n), this.on(e, yu(this, e, n)), this
};
It.prototype.prependOnceListener = function(e, n) {
    return wo(n), this.prependListener(e, yu(this, e, n)), this
};
It.prototype.removeListener = function(e, n) {
    var i, a, f, m, _;
    if (wo(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, m = i.length - 1; m >= 0; m--)
            if (i[m] === n || i[m].listener === n) {
                _ = i[m].listener, f = m;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : _b(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, _ || n)
    }
    return this
};
It.prototype.off = It.prototype.removeListener;
It.prototype.removeAllListeners = function(e) {
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

function wu(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? Sb(a) : Cu(a, a.length)
}
It.prototype.listeners = function(e) {
    return wu(this, e, !0)
};
It.prototype.rawListeners = function(e) {
    return wu(this, e, !1)
};
It.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : bu.call(t, e)
};
It.prototype.listenerCount = bu;

function bu(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
It.prototype.eventNames = function() {
    return this._eventsCount > 0 ? qs(this._events) : []
};

function Cu(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function _b(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function Sb(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function kb(t, e) {
    return new Promise(function(n, i) {
        function a(m) {
            t.removeListener(e, f), i(m)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        xu(t, e, f, {
            once: !0
        }), e !== "error" && Tb(t, a, {
            once: !0
        })
    })
}

function Tb(t, e, n) {
    typeof t.on == "function" && xu(t, "error", e, n)
}

function xu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class Ab {
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
class bo extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class gs extends bo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class Eu extends gs {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class _u extends gs {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class Su extends gs {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class kt extends bo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class ku extends kt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class Tu extends kt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class Au extends kt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class Ou extends kt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class Iu extends kt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class Ru extends kt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class Lu extends kt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class Du extends kt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class Mu extends kt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Pu extends kt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Vu extends kt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Nu extends kt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Bu extends kt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class $u extends kt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Fu extends kt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class ju extends kt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class zu extends kt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Uu extends kt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Gu extends kt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Hu extends kt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class qu extends kt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Wu extends kt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Xu extends kt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Ku extends kt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Yu extends kt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Ju extends kt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Qu extends kt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class Zu extends kt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function Ob({
    code: t,
    message: e
}) {
    const n = Ib[t];
    return n ? new n({
        message: e
    }) : new bo({
        message: e
    })
}
var ri = {
    createError: Ob,
    CallError: bo,
    EcastServerError: gs,
    EcastCreateRoomFailed: Eu,
    EcastDialRoomFailed: _u,
    EcastServerIsShuttingDown: Su,
    EcastClientError: kt,
    EcastParseError: ku,
    EcastRequestIsMissingOpcode: Tu,
    EcastRequestHasInvalidOpcode: Au,
    EcastRequestHasInvalidArguments: Ou,
    EcastEntityNotFound: Iu,
    EcastEntityAlreadyExists: Ru,
    EcastEntityTypeError: Lu,
    EcastNoSuchClient: Du,
    EcastRoomIsLocked: Mu,
    EcastRoomIsFull: Pu,
    EcastLicenseNotFound: Vu,
    EcastLicenseCheckFailed: Nu,
    EcastRoomNotFound: Bu,
    EcastInvalidRole: $u,
    EcastTwitchLoginRequired: Fu,
    EcastInvalidOption: ju,
    EcastPasswordRequired: zu,
    EcastInvalidPassword: Uu,
    EcastNameRequired: Gu,
    EcastFilterError: Hu,
    EcastNoSuchFilter: qu,
    EcastPermissionDenied: Wu,
    EcastNotConnected: Xu,
    EcastIllegalOperation: Ku,
    EcastACLChangeDenied: Yu,
    EcastRoomHasEnded: Ju,
    EcastEntityLocked: Qu,
    EcastRateLimitExceeded: Zu,
    ObservedError: Ab
};
const Ib = {
    1e3: gs,
    1001: Eu,
    1002: _u,
    1003: Su,
    2e3: kt,
    2001: ku,
    2002: Tu,
    2003: Au,
    2004: Ou,
    2005: Iu,
    2006: Ru,
    2007: Lu,
    2008: Du,
    2009: Mu,
    2010: Pu,
    2011: Vu,
    2012: Nu,
    2013: Bu,
    2014: $u,
    2015: Fu,
    2016: ju,
    2017: zu,
    2018: Uu,
    2019: Gu,
    2021: Hu,
    2022: qu,
    2023: Wu,
    2024: Xu,
    2025: Ku,
    2026: Yu,
    2027: Ju,
    2028: Qu,
    2420: Zu
};
class Rb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class Lb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class Db {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class Mb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class Pb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var nl = {
    ClientConnected: Lb,
    ClientDisconnected: Db,
    ClientKicked: Pb,
    ClientSend: Mb,
    ClientWelcome: Rb
};
class Vb {
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
var il = {
    CountGroup: Vb
};
class Nb {
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
var rl = {
    GCounter: Nb
};
class Bb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var eh = {
    Notification: Bb
};
class $b {
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
class Fb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var sl = {
    ObjectEntity: $b,
    ObjectEcho: Fb
};
class jb {
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
var ol = {
    PNCounter: jb
};
class zb {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var th = {
    Reply: zb
};
class Ub {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Gb = {
    Request: Ub
};
class Hb {
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
class qb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var al = {
    TextEntity: Hb,
    TextEcho: qb
};
class Wb {
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
var ll = {
    TextRing: Wb
};
class Xb {
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
var nh = {
    ArtifactEntity: Xb
};
class Kb {
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
class Yb {
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
class Jb {
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
var cl = {
    DoodleEntity: Kb,
    DoodleLine: Yb,
    DoodleLineRemoved: Jb
};
class Qb {
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
class Zb {
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
class e0 {
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
var ih = {
    StackEntity: Qb,
    StackElement: Zb,
    StackElements: e0
};
class t0 {
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
var rh = {
    DropEntity: t0
};
class n0 {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var i0 = {
    Echo: n0
};
class r0 {
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
var s0 = {
    LockEntity: r0
};
class o0 {
    constructor() {}
    toString() {
        return "OK"
    }
}
var sh = {
    OK: o0
};
class a0 {
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
var oh = {
    NumberEntity: a0
};
const {
    ArtifactEntity: l0
} = nh, {
    ClientWelcome: c0,
    ClientConnected: u0,
    ClientDisconnected: h0,
    ClientKicked: d0,
    ClientSend: f0
} = nl, {
    CountGroup: p0
} = il, {
    DoodleEntity: g0,
    DoodleLine: m0,
    DoodleLineRemoved: v0
} = cl, {
    StackEntity: y0,
    StackElement: w0,
    StackElements: b0
} = ih, {
    DropEntity: C0
} = rh, {
    Echo: x0
} = i0, {
    LockEntity: E0
} = s0, {
    GCounter: _0
} = rl, {
    GetAudienceReply: S0,
    RoomExit: k0,
    RoomLock: T0
} = yo, {
    Notification: A0
} = eh, {
    OK: O0
} = sh, {
    NumberEntity: I0
} = oh, {
    ObjectEcho: R0,
    ObjectEntity: L0
} = sl, {
    PNCounter: oc
} = ol, {
    Reply: D0
} = th, {
    TextEcho: M0,
    TextEntity: P0
} = al, {
    TextRing: V0
} = ll, {
    createError: ac,
    ObservedError: N0
} = ri;

function Na(t, e, n) {
    switch (t) {
        case "ok":
            return new O0;
        case "echo":
            return new x0({
                message: e.message
            });
        case "lock":
            return new E0({
                key: e.key,
                from: e.from
            });
        case "error":
            return ac({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new N0({
                to: e.to,
                error: ac({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new P0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new M0({
                message: e.message
            });
        case "object":
            return new L0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new R0({
                message: e.message
            });
        case "drop":
            return new C0({
                key: e.key
            });
        case "artifact":
            return new l0({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new u0({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new h0({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new d0({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new f0({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new c0({
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
                    a[f] = Na(m[0], m[1], m[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new g0({
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
            return new m0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new v0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new y0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new w0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new b0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new I0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new k0({
                cause: e.cause
            });
        case "room/lock":
            return new T0;
        case "room/get-audience":
            return new S0({
                connections: e.connections
            });
        case "audience":
            return new oc({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new p0({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new V0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new _0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new oc({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function B0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new D0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Na(n, e.result)
    }) : new A0({
        pc: e.pc,
        opcode: n,
        result: Na(n, e.result)
    })
}
var $0 = {
    parseResponseMessage: B0
};
const lc = Cb,
    F0 = pu,
    j0 = tl.exports,
    {
        CallError: z0
    } = ri,
    {
        ClientWelcome: U0
    } = nl,
    {
        CountGroup: G0
    } = il,
    {
        GCounter: H0
    } = rl,
    {
        Notification: cc
    } = eh,
    {
        ObjectEntity: pa
    } = sl,
    {
        PNCounter: q0
    } = ol,
    {
        Reply: W0
    } = th,
    {
        Request: X0
    } = Gb,
    {
        TextEntity: ga
    } = al,
    {
        TextRing: K0
    } = ll,
    {
        parseResponseMessage: Y0
    } = $0,
    {
        DoodleEntity: J0
    } = cl,
    {
        StackEntity: Q0
    } = ih,
    Z0 = 1e3 + Math.floor(Math.random() * 500),
    uc = 13e3;
class eC extends j0 {
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
        const n = F0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let m = !1,
                _ = !1,
                k = L => {
                    a(L), m = !0
                },
                I = L => {
                    f(L), m = !0
                };
            this.conn = new lc(i, "ecast-v0"), this.conn.onmessage = L => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(L.data),null,2)}`);
                const B = Y0(L);
                if (B instanceof W0) this.onReply(B);
                else if (B instanceof cc) {
                    if (B.result instanceof U0) _ = !0, this.id = B.result.id, this.deviceId = B.result.deviceId, this.entities = B.result.entities, this.secret = B.result.secret, B.result.name && (this.name = B.result.name), k(B.result);
                    else if (!m) {
                        I(B.result);
                        return
                    }
                    this.onNotification(B)
                } else console.error(`failed to parse response messsage: ${B}`)
            }, this.conn.onerror = L => {
                m ? this.emit("socketError", L) : I(L)
            }, this.conn.onclose = L => {
                this.debugLog("onclose", L.code), _ && L.code === 1006 ? this.reconnect() : this.emit("socketClose", L)
            }, this.conn.onopen = L => {
                this.emit("socketOpen", L)
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
            n = Z0;
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
            if (n >= uc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(uc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new cc(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof z0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== lc.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new X0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((_, k) => {
                this.pending[i] = {
                    resolve: _,
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
        return this.entities[e] = new pa({
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
        return this.entities[e] = new pa({
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
        return this.entities[e] = new pa({
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
                reject: _
            } = i;
        f && (a.acl = f), m && (a.accept = m), _ && (a.reject = _);
        const k = await this.send("text/create", a);
        return this.entities[e] = new ga({
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
        return this.entities[e] = new ga({
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
        return this.entities[e] = new ga({
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
            maxPoints: _,
            size: k,
            weights: I
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = m, _ != null && (i.maxPoints = _), k && (i.size = k), I && (i.weights = I);
        const L = await this.send("doodle/create", i);
        return this.entities[e] = new J0({
            key: e,
            colors: f,
            lines: [],
            live: m,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: k,
            weights: I,
            meta: {
                locked: !1
            }
        }), L
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
        } = n, _ = await this.send("doodle/stroke", {
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
        return this.entities[e].lines.push(k), _
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
        return this.entities[e] = new Q0({
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
        return this.entities[e] = new G0({
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
        return this.entities[e] = new H0({
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
        return this.entities[e] = new q0({
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
        const _ = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new K0({
            key: e,
            elements: [],
            limit: a,
            meta: {
                locked: !1
            }
        }), _
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
var tC = {
    WSClient: eC
};
const {
    APIClient: nC
} = bb, {
    WSClient: iC
} = tC, {
    CreateRoomReply: rC,
    GetRoomReply: sC
} = yo, {
    ClientWelcome: oC,
    ClientDisconnected: aC
} = nl, {
    ArtifactEntity: lC
} = nh, {
    GCounter: cC
} = rl, {
    NumberEntity: uC
} = oh, {
    TextEntity: hC
} = al, {
    DoodleEntity: dC
} = cl, {
    ObjectEntity: fC
} = sl, {
    CountGroup: pC
} = il, {
    DropEntity: gC
} = rh, {
    OK: mC
} = sh, {
    RoomExit: vC
} = yo, {
    TextRing: yC
} = ll, {
    PNCounter: wC
} = ol;
var Di = {
    APIClient: nC,
    WSClient: iC,
    ClientWelcome: oC,
    CreateRoomReply: rC,
    DropEntity: gC,
    GetRoomReply: sC,
    ClientDisconnected: aC,
    RoomExit: vC,
    OK: mC,
    ArtifactEntity: lC,
    DoodleEntity: dC,
    NumberEntity: uC,
    CountGroup: pC,
    GCounter: cC,
    ObjectEntity: fC,
    PNCounter: wC,
    TextEntity: hC,
    TextRing: yC
};

function hc(...t) {
    console.log(...t)
}

function bC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var dc = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(vt, function(n) {
        var i = typeof window < "u" ? window : typeof vt < "u" ? vt : typeof self < "u" ? self : {},
            a = function(V, W) {
                if (W = W.split(":")[0], V = +V, !V) return !1;
                switch (W) {
                    case "http":
                    case "ws":
                        return V !== 80;
                    case "https":
                    case "wss":
                        return V !== 443;
                    case "ftp":
                        return V !== 21;
                    case "gopher":
                        return V !== 70;
                    case "file":
                        return !1
                }
                return V !== 0
            },
            f = Object.prototype.hasOwnProperty,
            m;

        function _(F) {
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

        function I(F) {
            for (var V = /([^=?#&]+)=?([^&]*)/g, W = {}, D; D = V.exec(F);) {
                var H = _(D[1]),
                    fe = _(D[2]);
                H === null || fe === null || H in W || (W[H] = fe)
            }
            return W
        }

        function L(F, V) {
            V = V || "";
            var W = [],
                D, H;
            typeof V != "string" && (V = "?");
            for (H in F)
                if (f.call(F, H)) {
                    if (D = F[H], !D && (D === null || D === m || isNaN(D)) && (D = ""), H = k(H), D = k(D), H === null || D === null) continue;
                    W.push(H + "=" + D)
                } return W.length ? V + W.join("&") : ""
        }
        var B = L,
            J = I,
            ie = {
                stringify: B,
                parse: J
            },
            K = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + v + "+");

        function q(F) {
            return (F || "").toString().replace(P, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(V, W) {
                    return d(W.protocol) ? V.replace(/\\/g, "/") : V
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
            var V;
            typeof window < "u" ? V = window : typeof i < "u" ? V = i : typeof self < "u" ? V = self : V = {};
            var W = V.location || {};
            F = F || W;
            var D = {},
                H = typeof F,
                fe;
            if (F.protocol === "blob:") D = new Me(unescape(F.pathname), {});
            else if (H === "string") {
                D = new Me(F, {});
                for (fe in se) delete D[fe]
            } else if (H === "object") {
                for (fe in F) fe in se || (D[fe] = F[fe]);
                D.slashes === void 0 && (D.slashes = K.test(F.href))
            }
            return D
        }

        function d(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function Ee(F, V) {
            F = q(F), V = V || {};
            var W = re.exec(F),
                D = W[1] ? W[1].toLowerCase() : "",
                H = !!W[2],
                fe = !!W[3],
                pe = 0,
                Ve;
            return H ? fe ? (Ve = W[2] + W[3] + W[4], pe = W[2].length + W[3].length) : (Ve = W[2] + W[4], pe = W[2].length) : fe ? (Ve = W[3] + W[4], pe = W[3].length) : Ve = W[4], D === "file:" ? pe >= 2 && (Ve = Ve.slice(2)) : d(D) ? Ve = W[4] : D ? H && (Ve = Ve.slice(2)) : pe >= 2 && d(V.protocol) && (Ve = W[4]), {
                protocol: D,
                slashes: H || d(D),
                slashesCount: pe,
                rest: Ve
            }
        }

        function Ae(F, V) {
            if (F === "") return V;
            for (var W = (V || "/").split("/").slice(0, -1).concat(F.split("/")), D = W.length, H = W[D - 1], fe = !1, pe = 0; D--;) W[D] === "." ? W.splice(D, 1) : W[D] === ".." ? (W.splice(D, 1), pe++) : pe && (D === 0 && (fe = !0), W.splice(D, 1), pe--);
            return fe && W.unshift(""), (H === "." || H === "..") && W.push(""), W.join("/")
        }

        function Me(F, V, W) {
            if (F = q(F), !(this instanceof Me)) return new Me(F, V, W);
            var D, H, fe, pe, Ve, Ne, pt = ae.slice(),
                Ft = typeof V,
                Je = this,
                Ln = 0;
            for (Ft !== "object" && Ft !== "string" && (W = V, V = null), W && typeof W != "function" && (W = ie.parse), V = ve(V), H = Ee(F || "", V), D = !H.protocol && !H.slashes, Je.slashes = H.slashes || D && V.slashes, Je.protocol = H.protocol || V.protocol || "", F = H.rest, (Je.protocol === "file:" || !H.slashes && (H.protocol || H.slashesCount < 2 || !d(Je.protocol))) && (pt[3] = [/(.*)/, "pathname"]); Ln < pt.length; Ln++) {
                if (pe = pt[Ln], typeof pe == "function") {
                    F = pe(F, Je);
                    continue
                }
                fe = pe[0], Ne = pe[1], fe !== fe ? Je[Ne] = F : typeof fe == "string" ? ~(Ve = F.indexOf(fe)) && (typeof pe[2] == "number" ? (Je[Ne] = F.slice(0, Ve), F = F.slice(Ve + pe[2])) : (Je[Ne] = F.slice(Ve), F = F.slice(0, Ve))) : (Ve = fe.exec(F)) && (Je[Ne] = Ve[1], F = F.slice(0, Ve.index)), Je[Ne] = Je[Ne] || D && pe[3] && V[Ne] || "", pe[4] && (Je[Ne] = Je[Ne].toLowerCase())
            }
            W && (Je.query = W(Je.query)), D && V.slashes && Je.pathname.charAt(0) !== "/" && (Je.pathname !== "" || V.pathname !== "") && (Je.pathname = Ae(Je.pathname, V.pathname)), Je.pathname.charAt(0) !== "/" && d(Je.protocol) && (Je.pathname = "/" + Je.pathname), a(Je.port, Je.protocol) || (Je.host = Je.hostname, Je.port = ""), Je.username = Je.password = "", Je.auth && (pe = Je.auth.split(":"), Je.username = pe[0] || "", Je.password = pe[1] || ""), Je.origin = Je.protocol !== "file:" && d(Je.protocol) && Je.host ? Je.protocol + "//" + Je.host : "null", Je.href = Je.toString()
        }

        function lt(F, V, W) {
            var D = this;
            switch (F) {
                case "query":
                    typeof V == "string" && V.length && (V = (W || ie.parse)(V)), D[F] = V;
                    break;
                case "port":
                    D[F] = V, a(V, D.protocol) ? V && (D.host = D.hostname + ":" + V) : (D.host = D.hostname, D[F] = "");
                    break;
                case "hostname":
                    D[F] = V, D.port && (V += ":" + D.port), D.host = V;
                    break;
                case "host":
                    D[F] = V, /:\d+$/.test(V) ? (V = V.split(":"), D.port = V.pop(), D.hostname = V.join(":")) : (D.hostname = V, D.port = "");
                    break;
                case "protocol":
                    D.protocol = V.toLowerCase(), D.slashes = !W;
                    break;
                case "pathname":
                case "hash":
                    if (V) {
                        var H = F === "pathname" ? "/" : "#";
                        D[F] = V.charAt(0) !== H ? H + V : V
                    } else D[F] = V;
                    break;
                default:
                    D[F] = V
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (D[pe[1]] = D[pe[1]].toLowerCase())
            }
            return D.origin = D.protocol !== "file:" && d(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
        }

        function Be(F) {
            (!F || typeof F != "function") && (F = ie.stringify);
            var V, W = this,
                D = W.protocol;
            D && D.charAt(D.length - 1) !== ":" && (D += ":");
            var H = D + (W.slashes || d(W.protocol) ? "//" : "");
            return W.username && (H += W.username, W.password && (H += ":" + W.password), H += "@"), H += W.host + W.pathname, V = typeof W.query == "object" ? F(W.query) : W.query, V && (H += V.charAt(0) !== "?" ? "?" + V : V), W.hash && (H += W.hash), H
        }
        Me.prototype = {
            set: lt,
            toString: Be
        }, Me.extractProtocol = Ee, Me.location = ve, Me.trimLeft = q, Me.qs = ie;
        var Y = Me;

        function je(F, V) {
            setTimeout(function(W) {
                return F.call(W)
            }, 4, V)
        }

        function G(F, V) {
            typeof process < "u" && console[F].call(null, V)
        }

        function oe(F, V) {
            F === void 0 && (F = []);
            var W = [];
            return F.forEach(function(D) {
                V(D) || W.push(D)
            }), W
        }

        function Te(F, V) {
            F === void 0 && (F = []);
            var W = [];
            return F.forEach(function(D) {
                V(D) && W.push(D)
            }), W
        }
        var we = function() {
            this.listeners = {}
        };
        we.prototype.addEventListener = function(V, W) {
            typeof W == "function" && (Array.isArray(this.listeners[V]) || (this.listeners[V] = []), Te(this.listeners[V], function(D) {
                return D === W
            }).length === 0 && this.listeners[V].push(W))
        }, we.prototype.removeEventListener = function(V, W) {
            var D = this.listeners[V];
            this.listeners[V] = oe(D, function(H) {
                return H === W
            })
        }, we.prototype.dispatchEvent = function(V) {
            for (var W = this, D = [], H = arguments.length - 1; H-- > 0;) D[H] = arguments[H + 1];
            var fe = V.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Ve) {
                D.length > 0 ? Ve.apply(W, D) : Ve.call(W, V)
            }), !0) : !1
        };

        function ye(F) {
            var V = F.indexOf("?");
            return V >= 0 ? F.slice(0, V) : F
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(V, W) {
            var D = ye(W),
                H = this.urlMap[D];
            if (H && H.server && H.websockets.indexOf(V) === -1) return H.websockets.push(V), H.server
        }, ue.prototype.addMembershipToRoom = function(V, W) {
            var D = this.urlMap[ye(V.url)];
            D && D.server && D.websockets.indexOf(V) !== -1 && (D.roomMemberships[W] || (D.roomMemberships[W] = []), D.roomMemberships[W].push(V))
        }, ue.prototype.attachServer = function(V, W) {
            var D = ye(W),
                H = this.urlMap[D];
            if (!H) return this.urlMap[D] = {
                server: V,
                websockets: [],
                roomMemberships: {}
            }, V
        }, ue.prototype.serverLookup = function(V) {
            var W = ye(V),
                D = this.urlMap[W];
            if (D) return D.server
        }, ue.prototype.websocketsLookup = function(V, W, D) {
            var H = ye(V),
                fe, pe = this.urlMap[H];
            if (fe = pe ? pe.websockets : [], W) {
                var Ve = pe.roomMemberships[W];
                fe = Ve || []
            }
            return D ? fe.filter(function(Ne) {
                return Ne !== D
            }) : fe
        }, ue.prototype.removeServer = function(V) {
            delete this.urlMap[ye(V)]
        }, ue.prototype.removeWebSocket = function(V, W) {
            var D = ye(W),
                H = this.urlMap[D];
            H && (H.websockets = oe(H.websockets, function(fe) {
                return fe === V
            }))
        }, ue.prototype.removeMembershipFromRoom = function(V, W) {
            var D = this.urlMap[ye(V.url)],
                H = D.roomMemberships[W];
            D && H !== null && (D.roomMemberships[W] = oe(H, function(fe) {
                return fe === V
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
            Qe = function() {};
        Qe.prototype.stopPropagation = function() {}, Qe.prototype.stopImmediatePropagation = function() {}, Qe.prototype.initEvent = function(V, W, D) {
            V === void 0 && (V = "undefined"), W === void 0 && (W = !1), D === void 0 && (D = !1), this.type = "" + V, this.bubbles = Boolean(W), this.cancelable = Boolean(D)
        };
        var dt = function(F) {
                function V(W, D) {
                    if (D === void 0 && (D = {}), F.call(this), !W) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var H = D.bubbles,
                        fe = D.cancelable;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = H ? Boolean(H) : !1
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V
            }(Qe),
            Bt = function(F) {
                function V(W, D) {
                    if (D === void 0 && (D = {}), F.call(this), !W) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var H = D.bubbles,
                        fe = D.cancelable,
                        pe = D.data,
                        Ve = D.origin,
                        Ne = D.lastEventId,
                        pt = D.ports;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = H ? Boolean(H) : !1, this.origin = "" + Ve, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Ne || "")
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V
            }(Qe),
            Ht = function(F) {
                function V(W, D) {
                    if (D === void 0 && (D = {}), F.call(this), !W) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var H = D.bubbles,
                        fe = D.cancelable,
                        pe = D.code,
                        Ve = D.reason,
                        Ne = D.wasClean;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = H ? Boolean(H) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Ve || ""), this.wasClean = Ne ? Boolean(Ne) : !1
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V
            }(Qe);

        function E(F) {
            var V = F.type,
                W = F.target,
                D = new dt(V);
            return W && (D.target = W, D.srcElement = W, D.currentTarget = W), D
        }

        function l(F) {
            var V = F.type,
                W = F.origin,
                D = F.data,
                H = F.target,
                fe = new Bt(V, {
                    data: D,
                    origin: W
                });
            return H && (fe.target = H, fe.srcElement = H, fe.currentTarget = H), fe
        }

        function g(F) {
            var V = F.code,
                W = F.reason,
                D = F.type,
                H = F.target,
                fe = F.wasClean;
            fe || (fe = V === ke.CLOSE_NORMAL || V === ke.CLOSE_NO_STATUS);
            var pe = new Ht(D, {
                code: V,
                reason: W,
                wasClean: fe
            });
            return H && (pe.target = H, pe.srcElement = H, pe.currentTarget = H), pe
        }

        function S(F, V, W) {
            F.readyState = Le.CLOSING;
            var D = _e.serverLookup(F.url),
                H = g({
                    type: "close",
                    target: F.target,
                    code: V,
                    reason: W
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: V,
                    reason: W
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = Le.CLOSED, F.dispatchEvent(H), F.dispatchEvent(fe), D && D.dispatchEvent(H, D)
            }, F)
        }

        function O(F, V, W) {
            F.readyState = Le.CLOSING;
            var D = _e.serverLookup(F.url),
                H = g({
                    type: "close",
                    target: F.target,
                    code: V,
                    reason: W,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: V,
                    reason: W,
                    wasClean: !1
                }),
                pe = E({
                    type: "error",
                    target: F.target
                });
            je(function() {
                _e.removeWebSocket(F, F.url), F.readyState = Le.CLOSED, F.dispatchEvent(pe), F.dispatchEvent(H), F.dispatchEvent(fe), D && D.dispatchEvent(H, D)
            }, F)
        }

        function M(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var N = new WeakMap;

        function te(F) {
            if (N.has(F)) return N.get(F);
            var V = new Proxy(F, {
                get: function(D, H) {
                    return H === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Ve = pe.code || ke.CLOSE_NORMAL,
                            Ne = pe.reason || "";
                        S(V, Ve, Ne)
                    } : H === "send" ? function(pe) {
                        pe = M(pe), F.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: F
                        }))
                    } : H === "on" ? function(pe, Ve) {
                        F.addEventListener("server::" + pe, Ve)
                    } : H === "target" ? F : D[H]
                }
            });
            return N.set(F, V), V
        }

        function Se(F) {
            var V = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (V ? V.length : 0)
        }

        function he(F) {
            var V = new Y(F),
                W = V.pathname,
                D = V.protocol,
                H = V.hash;
            if (!F) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (W || (V.pathname = "/"), D === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + V.toString() + "' is invalid.");
            if (D !== "ws:" && D !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + D + "' is not allowed.");
            if (H !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + H + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return V.toString()
        }

        function Re(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var V = F.map(function(D) {
                    return {
                        count: 1,
                        protocol: D
                    }
                }).reduce(function(D, H) {
                    return D[H.protocol] = (D[H.protocol] || 0) + H.count, D
                }, {}),
                W = Object.keys(V).filter(function(D) {
                    return V[D] > 1
                });
            if (W.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + W[0] + "' is duplicated.");
            return F
        }
        var Le = function(F) {
            function V(D, H) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(D), H = Re(H), this.protocol = H[0] || "", this.binaryType = "blob", this.readyState = V.CONNECTING;
                var fe = te(this),
                    pe = _e.attachWebSocket(fe, this.url);
                je(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = V.CLOSED, G("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: ke.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var Ne = pe.options.selectProtocol(H),
                                    pt = Ne !== "",
                                    Ft = H.indexOf(Ne) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = V.CLOSED, G("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: ke.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Ne
                            }
                            this.readyState = V.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), pe.dispatchEvent(E({
                                type: "connection"
                            }), fe)
                        }
                    else this.readyState = V.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), G("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V;
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
            }, W.onopen.set = function(D) {
                this.removeEventListener("open", this._onopen), this._onopen = D, this.addEventListener("open", D)
            }, W.onmessage.set = function(D) {
                this.removeEventListener("message", this._onmessage), this._onmessage = D, this.addEventListener("message", D)
            }, W.onclose.set = function(D) {
                this.removeEventListener("close", this._onclose), this._onclose = D, this.addEventListener("close", D)
            }, W.onerror.set = function(D) {
                this.removeEventListener("error", this._onerror), this._onerror = D, this.addEventListener("error", D)
            }, V.prototype.send = function(H) {
                var fe = this;
                if (this.readyState === V.CLOSING || this.readyState === V.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: M(H)
                    }),
                    Ve = _e.serverLookup(this.url);
                Ve && je(function() {
                    fe.dispatchEvent(pe, H)
                }, Ve)
            }, V.prototype.close = function(H, fe) {
                if (H !== void 0 && (typeof H != "number" || H !== 1e3 && (H < 3e3 || H > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + H + " is neither.");
                if (fe !== void 0) {
                    var pe = Se(fe);
                    if (pe > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === V.CLOSING || this.readyState === V.CLOSED)) {
                    var Ve = te(this);
                    this.readyState === V.CONNECTING ? O(Ve, H || ke.CLOSE_ABNORMAL, fe) : S(Ve, H || ke.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(V.prototype, W), V
        }(we);
        Le.CONNECTING = 0, Le.prototype.CONNECTING = Le.CONNECTING, Le.OPEN = 1, Le.prototype.OPEN = Le.OPEN, Le.CLOSING = 2, Le.prototype.CLOSING = Le.CLOSING, Le.CLOSED = 3, Le.prototype.CLOSED = Le.CLOSED;
        var rt = function(F) {
            return F.reduce(function(V, W) {
                return V.indexOf(W) > -1 ? V : V.concat(W)
            }, [])
        };

        function xt() {
            return typeof window < "u" ? window : typeof process == "object" && typeof bC == "function" && typeof vt == "object" ? vt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(F) {
                function V(W, D) {
                    D === void 0 && (D = rn), F.call(this);
                    var H = new Y(W);
                    H.pathname || (H.pathname = "/"), this.url = H.toString(), this.originalWebSocket = null;
                    var fe = _e.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, D), this.options.mock && this.mockWebsocket()
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V.prototype.mockWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket = D.WebSocket, D.WebSocket = Le
                }, V.prototype.restoreWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket !== null && (D.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, V.prototype.stop = function(D) {
                    D === void 0 && (D = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof D == "function" && D()
                }, V.prototype.on = function(D, H) {
                    this.addEventListener(D, H)
                }, V.prototype.close = function(D) {
                    D === void 0 && (D = {});
                    var H = D.code,
                        fe = D.reason,
                        pe = D.wasClean,
                        Ve = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ve.forEach(function(Ne) {
                        Ne.readyState = Le.CLOSED, Ne.dispatchEvent(g({
                            type: "close",
                            target: Ne.target,
                            code: H || ke.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, V.prototype.emit = function(D, H, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Ve = fe.websockets;
                    Ve || (Ve = _e.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (H = Array.prototype.slice.call(arguments, 1, arguments.length), H = H.map(function(Ne) {
                        return M(Ne)
                    })) : H = M(H), Ve.forEach(function(Ne) {
                        Array.isArray(H) ? Ne.dispatchEvent.apply(Ne, [l({
                            type: D,
                            data: H,
                            origin: pe.url,
                            target: Ne.target
                        })].concat(H)) : Ne.dispatchEvent(l({
                            type: D,
                            data: H,
                            origin: pe.url,
                            target: Ne.target
                        }))
                    })
                }, V.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, V.prototype.to = function(D, H, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Ve = this,
                        Ne = rt(fe.concat(_e.websocketsLookup(this.url, D, H)));
                    return {
                        to: function(pt, Ft) {
                            return pe.to.call(pe, pt, Ft, Ne)
                        },
                        emit: function(Ft, Je) {
                            Ve.emit(Ft, Je, {
                                websockets: Ne
                            })
                        }
                    }
                }, V.prototype.in = function() {
                    for (var D = [], H = arguments.length; H--;) D[H] = arguments[H];
                    return this.to.apply(null, D)
                }, V.prototype.simulate = function(D) {
                    var H = _e.websocketsLookup(this.url);
                    D === "error" && H.forEach(function(fe) {
                        fe.readyState = Le.CLOSED, fe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, V
            }(we);
        ct.of = function(V) {
            return new ct(V)
        };
        var wt = function(F) {
            function V(D, H) {
                var fe = this;
                D === void 0 && (D = "socket.io"), H === void 0 && (H = ""), F.call(this), this.binaryType = "blob";
                var pe = new Y(D);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = V.CONNECTING, this.protocol = "", this.target = this, typeof H == "string" || typeof H == "object" && H !== null ? this.protocol = H : Array.isArray(H) && H.length > 0 && (this.protocol = H[0]);
                var Ve = _e.attachWebSocket(this, this.url);
                je(function() {
                    Ve ? (this.readyState = V.OPEN, Ve.dispatchEvent(E({
                        type: "connection"
                    }), Ve, this), Ve.dispatchEvent(E({
                        type: "connect"
                    }), Ve, this), this.dispatchEvent(E({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = V.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), G("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ne) {
                    fe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ne.target,
                        code: Ne.code
                    }))
                })
            }
            F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V;
            var W = {
                broadcast: {}
            };
            return V.prototype.close = function() {
                if (this.readyState === V.OPEN) {
                    var H = _e.serverLookup(this.url);
                    return _e.removeWebSocket(this, this.url), this.readyState = V.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), H && H.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    }), H), this
                }
            }, V.prototype.disconnect = function() {
                return this.close()
            }, V.prototype.emit = function(H) {
                for (var fe = [], pe = arguments.length - 1; pe-- > 0;) fe[pe] = arguments[pe + 1];
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ve = l({
                        type: H,
                        origin: this.url,
                        data: fe
                    }),
                    Ne = _e.serverLookup(this.url);
                return Ne && Ne.dispatchEvent.apply(Ne, [Ve].concat(fe)), this
            }, V.prototype.send = function(H) {
                return this.emit("message", H), this
            }, W.broadcast.get = function() {
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var D = this,
                    H = _e.serverLookup(this.url);
                if (!H) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Ve) {
                        return H.emit(pe, Ve, {
                            websockets: _e.websocketsLookup(D.url, null, D)
                        }), D
                    },
                    to: function(pe) {
                        return H.to(pe, D)
                    },
                    in: function(pe) {
                        return H.in(pe, D)
                    }
                }
            }, V.prototype.on = function(H, fe) {
                return this.addEventListener(H, fe), this
            }, V.prototype.off = function(H, fe) {
                this.removeEventListener(H, fe)
            }, V.prototype.hasListeners = function(H) {
                var fe = this.listeners[H];
                return Array.isArray(fe) ? !!fe.length : !1
            }, V.prototype.join = function(H) {
                _e.addMembershipToRoom(this, H)
            }, V.prototype.leave = function(H) {
                _e.removeMembershipFromRoom(this, H)
            }, V.prototype.to = function(H) {
                return this.broadcast.to(H)
            }, V.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, V.prototype.dispatchEvent = function(H) {
                for (var fe = this, pe = [], Ve = arguments.length - 1; Ve-- > 0;) pe[Ve] = arguments[Ve + 1];
                var Ne = H.type,
                    pt = this.listeners[Ne];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    pe.length > 0 ? Ft.apply(fe, pe) : Ft.call(fe, H.data ? H.data : H)
                })
            }, Object.defineProperties(V.prototype, W), V
        }(we);
        wt.CONNECTING = 0, wt.OPEN = 1, wt.CLOSING = 2, wt.CLOSED = 3;
        var Ct = function(V, W) {
            return new wt(V, W)
        };
        Ct.connect = function(V, W) {
            return Ct(V, W)
        };
        var Yt = ct,
            Ze = Le,
            Mt = Ct;
        n.Server = Yt, n.WebSocket = Ze, n.SocketIO = Mt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(dc, dc.exports);
var CC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(_, k) {
            var I = _.x - k.x,
                L = _.y - k.y;
            return I * I + L * L
        }

        function n(_, k, I) {
            var L = k.x,
                B = k.y,
                J = I.x - L,
                ie = I.y - B;
            if (J !== 0 || ie !== 0) {
                var K = ((_.x - L) * J + (_.y - B) * ie) / (J * J + ie * ie);
                K > 1 ? (L = I.x, B = I.y) : K > 0 && (L += J * K, B += ie * K)
            }
            return J = _.x - L, ie = _.y - B, J * J + ie * ie
        }

        function i(_, k) {
            for (var I = _[0], L = [I], B, J = 1, ie = _.length; J < ie; J++) B = _[J], e(B, I) > k && (L.push(B), I = B);
            return I !== B && L.push(B), L
        }

        function a(_, k, I, L, B) {
            for (var J = L, ie, K = k + 1; K < I; K++) {
                var re = n(_[K], _[k], _[I]);
                re > J && (ie = K, J = re)
            }
            J > L && (ie - k > 1 && a(_, k, ie, L, B), B.push(_[ie]), I - ie > 1 && a(_, ie, I, L, B))
        }

        function f(_, k) {
            var I = _.length - 1,
                L = [_[0]];
            return a(_, 0, I, k, L), L.push(_[I]), L
        }

        function m(_, k, I) {
            if (_.length <= 2) return _;
            var L = k !== void 0 ? k * k : 1;
            return _ = I ? _ : i(_, L), _ = f(_, L), _
        }
        t.exports = m, t.exports.default = m
    })()
})(CC);
const xC = [169, 174, 8252, 8265, 8482, 8505, 8596, 8597, 8598, 8599, 8600, 8601, 8617, 8618, 9e3, 8986, 8987, 9167, 9193, 9194, 9195, 9196, 9197, 9198, 9199, 9200, 9201, 9202, 9203, 9209, 9210, 9410, 9642, 9643, 9654, 9664, 9723, 9724, 9725, 9726, 9728, 9729, 9730, 9731, 9732, 9742, 9745, 9748, 9749, 9752, 9757, 9760, 9762, 9763, 9766, 9770, 9774, 9775, 9784, 9785, 9786, 9792, 9794, 9800, 9801, 9802, 9803, 9804, 9805, 9806, 9807, 9808, 9809, 9810, 9811, 9824, 9827, 9829, 9830, 9832, 9851, 9854, 9855, 9874, 9875, 9876, 9877, 9878, 9879, 9881, 9883, 9884, 9888, 9823, 9889, 9895, 9898, 9899, 9904, 9905, 9917, 9918, 9924, 9925, 9928, 9934, 9935, 9937, 9939, 9940, 9961, 9962, 9968, 9969, 9970, 9971, 9972, 9973, 9974, 9975, 9976, 9977, 9978, 9981, 9986, 9989, 9992, 9993, 9994, 9995, 9996, 9997, 9999, 10002, 10004, 10006, 10013, 10017, 10024, 10035, 10036, 10052, 10055, 10060, 10062, 10067, 10068, 10069, 10071, 10083, 10084, 10085, 10133, 10134, 10135, 10145, 10160, 10175, 10548, 10549, 11013, 11014, 11015, 11035, 11036, 11088, 11093, 12336, 12349, 12951, 12953, 58634],
    EC = [128104, 128105, 129489],
    ah = [127995, 127996, 127997, 127998, 127999, 129456, 129457, 129458, 129459],
    _C = 9977,
    SC = 8419,
    kC = 8220,
    TC = 8221,
    ma = 65039,
    AC = 127987,
    OC = 127988,
    Ws = 8205,
    Ba = (t, e) => {
        const n = parseInt(t.charCodeAt(0).toString(16), 16),
            i = parseInt(e.charCodeAt(0).toString(16), 16),
            a = (n - 55296) * 1024 + i - 56320 + 65536;
        return parseInt(a.toString(16), 16)
    },
    IC = t => {
        const e = parseInt(t.charCodeAt(0).toString(16), 16);
        return xC.includes(e)
    },
    Vn = (t, e) => t ? parseInt(t.charCodeAt(0).toString(16), 16) === e : !1,
    lh = t => /[\uD800-\uDB7F]/.test(t),
    RC = t => /[\u0023\u002A\u0030-\u0039]/.test(t),
    fc = t => {
        const e = parseInt(t.toString(16), 16);
        return e >= 127462 && e <= 127487
    },
    pc = (t, e) => {
        let n = "",
            i = !0;
        for (; i && e < t.length;) {
            const a = t[e];
            if (lh(a)) {
                const f = Ba(a, t[e + 1]);
                ah.includes(f) ? (n = n + a + t[e + 1], e += 2) : i = !1
            } else Vn(a, Ws) ? (n = n + a + t[e + 1] + t[e + 2], e += 3) : i = !1
        }
        return {
            modifyingChars: n,
            newPosition: e
        }
    },
    gc = (t, e) => {
        if (!/[^\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(t)) return e && t && t.length > e && (t = t.substring(0, e)), {
            result: t,
            charCount: t.length
        };
        const i = t.split("");
        let a = 0,
            f = "";
        for (let m = 0; m < i.length && (e ? a < e : !0); m += 1) {
            const _ = i[m];
            if (/[\u00A1\u0020-\u0022\u0024-\u0029\u002B-\u002F\u003A-\u007E\u00BF-\u00FF’]/gi.test(_)) f += _, a += 1;
            else if (IC(_)) {
                if (f += _, Vn(_, _C)) {
                    m += 1;
                    const {
                        modifyingChars: I,
                        newPosition: L
                    } = pc(i, m);
                    f += I, m = L - 1
                }
                a += 1;
                continue
            } else if (Vn(_, kC) || Vn(_, TC)) {
                m += 1, f = `${f}"`, a += 1;
                continue
            } else if (lh(_)) {
                const I = i[m + 1];
                f = f + _ + I, m += 1;
                const L = Ba(_, I);
                if (EC.includes(L)) {
                    const {
                        modifyingChars: B,
                        newPosition: J
                    } = pc(i, m + 1);
                    f += B, a += 1, m = J - 1;
                    continue
                }
                if (fc(L)) {
                    const B = Ba(i[m + 1], i[m + 2]);
                    fc(B) && (f = f + i[m + 1] + i[m + 2], m += 1), a += 1;
                    continue
                }
                if (L === OC) {
                    const B = i[m + 1];
                    Vn(B, Ws) && (f = f + B + i[m + 2] + i[m + 3], m += 3), a += 1;
                    continue
                }
                if (L === AC) {
                    const B = i[m + 1];
                    Vn(B, ma) && (m += 1, Vn(i[m + 1], Ws) && (f = f + B + i[m + 1] + i[m + 2] + i[m + 3], m += 3)), a += 1;
                    continue
                }
                ah.includes(L) || (a += 1);
                continue
            } else if (RC(_)) {
                const I = i[m + 1];
                I && Vn(I, ma) ? (f = f + _ + i[m + 1] + i[m + 2], m += 2) : f += _, a += 1;
                continue
            } else(Vn(_, ma) || Vn(_, Ws) || Vn(_, SC)) && (f += _)
        }
        return {
            result: f,
            charCount: a
        }
    };
const LC = yt.View.extend({
    el: "#banner",
    template: We.template(`
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
        Mh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            Pe(window).trigger("resize")
        }, .5)
    },
    getCampaign() {
        const t = this.model.get("url");
        if (!t) return "";
        let e = "";
        return t.split("?")[1] && (e = new URLSearchParams(window.location.search).get("utm_campaign") || ""), e
    }
});
class si {
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new LC({
            model: new Xe.Model(this.bannerData)
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp7-quiplash3/",
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
at(si, "view", null), at(si, "isInitialized", !1), at(si, "bannerConfig", null);
var DC = {};
(function(t) {
    (function(e) {
        e(Bi.exports, Xe, t)
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
                var q = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(v && se.model !== v) && !(P && se.config.selector != P)) return se.model.off(se.event, se.fn), ae.push(se.config._destroy), q.push(se.model), !0
                }), e.invoke(e.uniq(q), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (v ? "." + v.cid : ""), P)
            },
            stickit: function(v, P) {
                var q = v || this.model,
                    ae = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(q, ae);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var ve = this;
                    return this.unstickit(), se && (ve = se.apply(this, arguments)), ve
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(v, P, q) {
                var ae = v || this.model,
                    se = ".stickit." + ae.cid;
                if (q = q || {}, e.isObject(P)) {
                    var ve = P;
                    e.each(ve, function(Y, je) {
                        this.addBinding(ae, je, Y)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(ae, P), !!d.length) {
                    e.isString(q) && (q = {
                        observe: q
                    }), e.isFunction(q.observe) && (q.observe = q.observe.call(this));
                    var Ee = B(d, q),
                        Ae = Ee.observe;
                    Ee.selector = P, Ee.view = this;
                    var Me = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            m.call(this, Ee.destroy, d, ae, Ee)
                        }, J(d, Ee, ae, Ae), K(d, Ee, ae, Ae), ie(d, Ee, ae), Ae) {
                        e.each(Ee.events, function(Y) {
                            var je = Y + se,
                                G = function(Te) {
                                    var we = m.call(this, Ee.getVal, d, Te, Ee, a.call(arguments, 1)),
                                        ye = _(Ee.updateModel, we, Te, Ee);
                                    ye && I(ae, Ae, we, lt, Ee)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(je, oe, e.bind(G, this))
                        }, this), e.each(e.flatten([Ae]), function(Y) {
                            k(ae, "change:" + Y, Ee, function(je, G, oe) {
                                var Te = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Te !== Me) {
                                    var we = L(ae, Ae, Ee);
                                    re(d, Ee, we, ae)
                                }
                            })
                        });
                        var Be = L(ae, Ae, Ee);
                        re(d, Ee, Be, ae, !0)
                    }
                    m.call(this, Ee.initialize, d, ae, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(v, P) {
                var q = (P || "").split("."),
                    ae = e.reduce(q, function(se, ve) {
                        return se[ve]
                    }, v);
                return ae == null ? v : ae
            },
            m = function(v) {
                if (v = e.isString(v) ? f(this, v) : v, v) return v.apply(this, a.call(arguments, 1))
            },
            _ = function(v, P, q) {
                if (e.isBoolean(v)) return v;
                if (e.isFunction(v) || e.isString(v)) {
                    var ae = e.last(arguments).view;
                    return m.apply(ae, arguments)
                }
                return !1
            },
            k = function(v, P, q, ae) {
                var se = q.view;
                v.on(P, ae, se), se._modelBindings.push({
                    model: v,
                    event: P,
                    fn: ae,
                    config: q
                })
            },
            I = function(v, P, q, ae, se) {
                var ve = {},
                    d = se.view;
                se.onSet && (q = m.call(d, se.onSet, q, se)), se.set ? m.call(d, se.set, P, q, ae, se) : (ve[P] = q, e.isArray(P) && e.isArray(q) && (ve = e.reduce(P, function(Ee, Ae, Me) {
                    return Ee[Ae] = e.has(q, Me) ? q[Me] : null, Ee
                }, {})), v.set(ve, ae))
            },
            L = function(v, P, q) {
                var ae = q.view,
                    se = function(Ee) {
                        return v[q.escape ? "escape" : "get"](Ee)
                    },
                    ve = function(Ee) {
                        return Ee == null ? "" : Ee
                    },
                    d = e.isArray(P) ? e.map(P, se) : se(P);
                return q.onGet && (d = m.call(ae, q.onGet, d, q)), e.isArray(d) ? e.map(d, ve) : ve(d)
            },
            B = i.getConfiguration = function(v, P) {
                var q = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(se, ve, d, Ee) {
                        se[Ee.updateMethod] && se[Ee.updateMethod](ve)
                    },
                    getVal: function(se, ve, d) {
                        return se[d.updateMethod]()
                    }
                }];
                q = q.concat(e.filter(i._handlers, function(se) {
                    return v.is(se.selector)
                })), q.push(P);
                var ae = e.extend.apply(e, q);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            J = function(v, P, q, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ve = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ve;
                    var Ee = "",
                        Ae = d.observe || (d.observe = ae),
                        Me = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Be = L(q, Ae, d);
                            d.name === "class" ? (v.removeClass(Ee).addClass(Be), Ee = Be) : v[lt](d.name, Be)
                        };
                    e.each(e.flatten([Ae]), function(lt) {
                        k(q, "change:" + lt, P, Me)
                    }), Me()
                })
            },
            ie = function(v, P, q, ae) {
                e.each(P.classes || [], function(se, ve) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var d = se.observe,
                        Ee = function() {
                            var Ae = L(q, d, se);
                            v.toggleClass(ve, !!Ae)
                        };
                    e.each(e.flatten([d]), function(Ae) {
                        k(q, "change:" + Ae, P, Ee)
                    }), Ee()
                })
            },
            K = function(v, P, q, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ve = function() {
                            var d = P.visible,
                                Ee = P.visibleFn,
                                Ae = L(q, ae, P),
                                Me = !!Ae;
                            (e.isFunction(d) || e.isString(d)) && (Me = !!m.call(se, d, Ae, P)), Ee ? m.call(se, Ee, v, Me, P) : v.toggle(Me)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        k(q, "change:" + d, P, ve)
                    }), ve()
                }
            },
            re = function(v, P, q, ae, se) {
                var ve = P.view;
                !_(P.updateView, q, P) || (m.call(ve, P.update, v, q, ae, P), se || m.call(ve, P.afterUpdate, v, q, P))
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
            update: function(v, P, q, ae) {
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
                    var q = v.val();
                    q !== "on" && q != null && (P = P ? v.val() : null)
                }
                return P
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(v, P, q, ae) {
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
                var Me = function(ue, _e, ke) {
                    e.each(ue, function($e) {
                        var Qe = n.$("<option/>"),
                            dt = $e,
                            Bt = function(S, O, M) {
                                Qe.text(S), dt = O, Qe.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Qe.val(dt), M === !0 && Qe.prop("disabled", "disabled")
                            },
                            Ht, E, l;
                        $e === "__default__" ? (Ht = ke.label, E = ke.value, l = ke.disabled) : (Ht = f($e, ve.labelPath), E = f($e, ve.valuePath), l = f($e, ve.disabledPath)), Bt(Ht, E, l);
                        var g = function() {
                            return !Ee && dt != null && ke != null && dt === ke ? !0 : !!(e.isObject(ke) && e.isEqual(dt, ke))
                        };
                        g() ? Qe.prop("selected", !0) : Ee && e.isArray(ke) && e.each(ke, function(S) {
                            e.isObject(S) && (S = f(S, ve.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Qe.prop("selected", !0)
                        }), _e.append(Qe)
                    })
                };
                if (v.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = m.call(this, d, v, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Be = se,
                        Y = function() {
                            var ue = L(q, ae.observe, ae);
                            m.call(this, ae.update, v, ue, q, ae)
                        },
                        je = function() {
                            Be.off("add remove reset sort", Y)
                        },
                        G = function() {
                            je(), Be.off("stickit:selectRefresh"), q.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", je, this), Be.on("add remove reset sort", Y, this), q.trigger("stickit:selectRefresh"), q.once("stickit:selectRefresh", function() {
                        q.off("stickit:unstuck", G)
                    }), q.once("stickit:unstuck", G, this), se = se.toJSON()
                }
                if (ve.defaultOption) {
                    var oe = e.isFunction(ve.defaultOption) ? ve.defaultOption.call(this, v, ae) : ve.defaultOption;
                    Me(["__default__"], v, oe)
                }
                if (e.isArray(se)) Me(se, v, P);
                else if (se.opt_labels) e.each(se.opt_labels, function(ue) {
                    var _e = n.$("<optgroup/>").attr("label", ue);
                    Me(se[ue], _e, P), v.append(_e)
                });
                else {
                    var Te = [],
                        we;
                    for (var ye in se) we = {}, we[ve.valuePath] = ye, we[ve.labelPath] = se[ye], Te.push(we);
                    Te = e.sortBy(Te, ve.comparator || ve.labelPath), Me(Te, v, P)
                }
            },
            getVal: function(v) {
                var P = v.find("option:selected");
                return v.prop("multiple") ? e.map(P, function(q) {
                    return n.$(q).data("stickit-bind-val")
                }) : P.data("stickit-bind-val")
            }
        }]), i
    })
})(DC);
const MC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    ul = yt.View.extend({
        template: We.template(MC),
        model: new Xe.Model({}),
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
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || Pe("<div />").text(t).html()
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
            const e = Pe(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ii, Fs, as = typeof Map == "function" ? new Map : (Ii = [], Fs = [], {
        has: function(t) {
            return Ii.indexOf(t) > -1
        },
        get: function(t) {
            return Fs[Ii.indexOf(t)]
        },
        set: function(t, e) {
            Ii.indexOf(t) === -1 && (Ii.push(t), Fs.push(e))
        },
        delete: function(t) {
            var e = Ii.indexOf(t);
            e > -1 && (Ii.splice(e, 1), Fs.splice(e, 1))
        }
    }),
    ch = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    ch = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function PC(t) {
    var e = as.get(t);
    e && e.destroy()
}

function VC(t) {
    var e = as.get(t);
    e && e.update()
}
var Zr = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Zr = function(t) {
    return t
}).destroy = function(t) {
    return t
}, Zr.update = function(t) {
    return t
}) : ((Zr = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !as.has(i)) {
                var a, f = null,
                    m = null,
                    _ = null,
                    k = function() {
                        i.clientWidth !== m && J()
                    },
                    I = function(ie) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", I, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(ie).forEach(function(K) {
                            i.style[K] = ie[K]
                        }), as.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", I, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", J, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", J, !1), i.addEventListener("autosize:update", J, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", as.set(i, {
                    destroy: I,
                    update: J
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), f = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(f) && (f = 0), J()
            }

            function L(ie) {
                var K = i.style.width;
                i.style.width = "0px", i.style.width = K, i.style.overflowY = ie
            }

            function B() {
                if (i.scrollHeight !== 0) {
                    var ie = function(re) {
                            for (var v = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && v.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return v
                        }(i),
                        K = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", m = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), K && (document.documentElement.scrollTop = K)
                }
            }

            function J() {
                B();
                var ie = Math.round(parseFloat(i.style.height)),
                    K = window.getComputedStyle(i, null),
                    re = K.boxSizing === "content-box" ? Math.round(parseFloat(K.height)) : i.offsetHeight;
                if (re < ie ? K.overflowY === "hidden" && (L("scroll"), B(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : K.overflowY !== "hidden" && (L("hidden"), B(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), _ !== re) {
                    _ = re;
                    var v = ch("autosize:resized");
                    try {
                        i.dispatchEvent(v)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], PC), t
}, Zr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], VC), t
});
var mc = Zr;
const NC = `<form>\r
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
    Un = yt.View.extend({
        tagName: "div",
        className: "input",
        model: new Xe.Model({}),
        template: We.template(NC),
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
                    return t ? typeof t == "object" ? t.html ? t.html : Pe("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || mc(Pe("textarea"))
        },
        onSubmitClick() {
            return Pe("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (Pe("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            Pe(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = Pe(this.$el).find("textarea");
            Pe(t).val(""), this.getOption("preventAutosize") || mc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Pe(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return en.sanitize(this.getValue())
        },
        sanitize(t) {
            return en.sanitize(t)
        },
        sanitizeInput(t) {
            return en.sanitizeInput(t)
        }
    }),
    BC = '<div class="text"></div>',
    vi = yt.View.extend({
        tagName: "div",
        template: We.template(BC),
        model: new Xe.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : Pe("<div />").text(t).html()
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
    oi = yt.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? Un : t.get("type") === "text" ? vi : ul
        },
        collection: new Xe.Collection([]),
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
let vc = {};

function uh(t, ...e) {
    !vc[t] || vc[t].map(n => n(...e))
}
let es, Xs;

function Vi() {
    return es
}

function Co() {
    return Xs
}

function $C(t) {
    if (es = document.getElementById(t) || t || document.querySelector("canvas"), !es) throw Error("You must provide a canvas element for the game");
    return Xs = es.getContext("2d"), Xs.imageSmoothingEnabled = !1, uh("init"), {
        canvas: es,
        context: Xs
    }
}
class hl {
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
            margin: _ = 0
        } = e.frame;
        this.width = f, this.height = m, this.margin = _, this._f = 0, this._a = 0
    }
    clone() {
        return xo(this)
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
        context: f = Co()
    } = {}) {
        let m = this.frames[this._f] / this.spriteSheet._f | 0,
            _ = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, _ * this.width + (_ * 2 + 1) * this.margin, m * this.height + (m * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function xo(t) {
    return new hl(t)
}
xo.prototype = hl.prototype;
xo.class = hl;
const FC = () => {};

function jC() {
    let t = Vi();
    Co().clearRect(0, 0, t.width, t.height)
}

function zC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        m = 1 / t,
        _ = e ? jC : FC,
        k, I, L, B, J;
    const ie = window.performance || Date;

    function K() {
        if (I = requestAnimationFrame(K), L = ie.now(), B = L - k, k = L, !(B > 1e3)) {
            for (uh("tick"), a += B; a >= f;) J.update(m), a -= f;
            _(), J.render()
        }
    }
    return J = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = ie.now(), this.isStopped = !1, requestAnimationFrame(K)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(I)
        },
        _frame: K,
        set _last(re) {
            k = re
        }
    }, J
}
class UC {
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
UC.prototype;

function yc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        m = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), m && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), m && n.push(3)), n
}
class dl {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Vi();
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
            for (i = yc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
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
        for (n = yc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = fl({
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

function fl(t) {
    return new dl(t)
}
fl.prototype = dl.prototype;
fl.class = dl;
class pl {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return mr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
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

function mr(t, e, n = {}) {
    let i = new pl(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
mr.prototype = pl.prototype;
mr.class = pl;
class gl {
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
            ddy: _,
            width: k,
            height: I,
            image: L
        } = e;
        this.position = mr(n, i), this.velocity = mr(a, f), this.acceleration = mr(m, _), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = Co();
        for (let B in e) this[B] = e[B];
        L && (this.width = k !== void 0 ? k : L.width, this.height = I !== void 0 ? I : L.height), this.sx = 0, this.sy = 0
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

function ml(t) {
    return new gl(t)
}
ml.prototype = gl.prototype;
ml.class = gl;

function GC(t) {
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
class HC {
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
            [].concat(a).map(_ => {
                n = n.concat(GC(_))
            }), this.animations[i] = xo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: m
            })
        }
    }
}
HC.prototype;
var hh = {
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
                for (let b = 0; b < c.length; b++) h.indexOf(c[b]) === -1 && h.push(c[b]);
                return h
            },
            a = c => c.charAt(0).toUpperCase() + c.slice(1),
            f = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            m = c => {
                console.error("".concat(n, " ").concat(c))
            },
            _ = [],
            k = c => {
                _.includes(c) || (_.push(c), f(c))
            },
            I = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            L = c => typeof c == "function" ? c() : c,
            B = c => c && typeof c.toPromise == "function",
            J = c => B(c) ? c.toPromise() : Promise.resolve(c),
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
            v = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            P = {},
            q = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => v.indexOf(c) !== -1,
            ve = c => P[c],
            d = c => {
                ae(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            Ee = c => {
                q.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Ae = c => {
                ve(c) && I(c, ve(c))
            },
            Me = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && Ee(h), Ae(h)
            },
            lt = "swal2-",
            Be = c => {
                const h = {};
                for (const b in c) h[c[b]] = lt + c[b];
                return h
            },
            Y = Be(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            je = Be(["success", "warning", "info", "question", "error"]),
            G = () => document.body.querySelector(".".concat(Y.container)),
            oe = c => {
                const h = G();
                return h ? h.querySelector(c) : null
            },
            Te = c => oe(".".concat(c)),
            we = () => Te(Y.popup),
            ye = () => Te(Y.icon),
            ue = () => Te(Y.title),
            _e = () => Te(Y["html-container"]),
            ke = () => Te(Y.image),
            $e = () => Te(Y["progress-steps"]),
            Qe = () => Te(Y["validation-message"]),
            dt = () => oe(".".concat(Y.actions, " .").concat(Y.confirm)),
            Bt = () => oe(".".concat(Y.actions, " .").concat(Y.deny)),
            Ht = () => Te(Y["input-label"]),
            E = () => oe(".".concat(Y.loader)),
            l = () => oe(".".concat(Y.actions, " .").concat(Y.cancel)),
            g = () => Te(Y.actions),
            S = () => Te(Y.footer),
            O = () => Te(Y["timer-progress-bar"]),
            M = () => Te(Y.close),
            N = `
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
                const c = Array.from(we().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, $) => {
                        const ge = parseInt(b.getAttribute("tabindex")),
                            Ue = parseInt($.getAttribute("tabindex"));
                        return ge > Ue ? 1 : ge < Ue ? -1 : 0
                    }),
                    h = Array.from(we().querySelectorAll(N)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => pe(b))
            },
            Se = () => xt(document.body, Y.shown) && !xt(document.body, Y["toast-shown"]) && !xt(document.body, Y["no-backdrop"]),
            he = () => we() && xt(we(), Y.toast),
            Re = () => we().hasAttribute("data-loading"),
            Le = {
                previousBodyPadding: null
            },
            rt = (c, h) => {
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
                const b = h.split(/\s+/);
                for (let $ = 0; $ < b.length; $++)
                    if (!c.classList.contains(b[$])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(Y).includes(b) && !Object.values(je).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
                })
            },
            ct = (c, h, b) => {
                if (rn(c, h), h.customClass && h.customClass[b]) {
                    if (typeof h.customClass[b] != "string" && !h.customClass[b].forEach) return f("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof h.customClass[b], '"'));
                    Ze(c, h.customClass[b])
                }
            },
            wt = (c, h) => {
                if (!h) return null;
                switch (h) {
                    case "select":
                    case "textarea":
                    case "file":
                        return c.querySelector(".".concat(Y.popup, " > .").concat(Y[h]));
                    case "checkbox":
                        return c.querySelector(".".concat(Y.popup, " > .").concat(Y.checkbox, " input"));
                    case "radio":
                        return c.querySelector(".".concat(Y.popup, " > .").concat(Y.radio, " input:checked")) || c.querySelector(".".concat(Y.popup, " > .").concat(Y.radio, " input:first-child"));
                    case "range":
                        return c.querySelector(".".concat(Y.popup, " > .").concat(Y.range, " input"));
                    default:
                        return c.querySelector(".".concat(Y.popup, " > .").concat(Y.input))
                }
            },
            Ct = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Yt = (c, h, b) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach($ => {
                    Array.isArray(c) ? c.forEach(ge => {
                        b ? ge.classList.add($) : ge.classList.remove($)
                    }) : b ? c.classList.add($) : c.classList.remove($)
                }))
            },
            Ze = (c, h) => {
                Yt(c, h, !0)
            },
            Mt = (c, h) => {
                Yt(c, h, !1)
            },
            F = (c, h) => {
                const b = Array.from(c.children);
                for (let $ = 0; $ < b.length; $++) {
                    const ge = b[$];
                    if (ge instanceof HTMLElement && xt(ge, h)) return ge
                }
            },
            V = (c, h, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? c.style[h] = typeof b == "number" ? "".concat(b, "px") : b : c.style.removeProperty(h)
            },
            W = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            D = c => {
                c.style.display = "none"
            },
            H = (c, h, b, $) => {
                const ge = c.querySelector(h);
                ge && (ge.style[b] = $)
            },
            fe = function(c, h) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? W(c, b) : D(c)
            },
            pe = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ve = () => !pe(dt()) && !pe(Bt()) && !pe(l()),
            Ne = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    b = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    $ = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return b > 0 || $ > 0
            },
            Ft = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const b = O();
                pe(b) && (h && (b.style.transition = "none", b.style.width = "100%"), setTimeout(() => {
                    b.style.transition = "width ".concat(c / 1e3, "s linear"), b.style.width = "0%"
                }, 10))
            },
            Je = () => {
                const c = O(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const b = parseInt(window.getComputedStyle(c).width),
                    $ = h / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat($, "%")
            },
            Ln = () => typeof window > "u" || typeof document > "u",
            Nn = 100,
            st = {},
            Dn = () => {
                st.previousActiveElement instanceof HTMLElement ? (st.previousActiveElement.focus(), st.previousActiveElement = null) : document.body && document.body.focus()
            },
            yi = c => new Promise(h => {
                if (!c) return h();
                const b = window.scrollX,
                    $ = window.scrollY;
                st.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Nn), window.scrollTo(b, $)
            }),
            Ar = `
 <div aria-labelledby="`.concat(Y.title, '" aria-describedby="').concat(Y["html-container"], '" class="').concat(Y.popup, `" tabindex="-1">
   <button type="button" class="`).concat(Y.close, `"></button>
   <ul class="`).concat(Y["progress-steps"], `"></ul>
   <div class="`).concat(Y.icon, `"></div>
   <img class="`).concat(Y.image, `" />
   <h2 class="`).concat(Y.title, '" id="').concat(Y.title, `"></h2>
   <div class="`).concat(Y["html-container"], '" id="').concat(Y["html-container"], `"></div>
   <input class="`).concat(Y.input, `" />
   <input type="file" class="`).concat(Y.file, `" />
   <div class="`).concat(Y.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(Y.select, `"></select>
   <div class="`).concat(Y.radio, `"></div>
   <label for="`).concat(Y.checkbox, '" class="').concat(Y.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(Y.label, `"></span>
   </label>
   <textarea class="`).concat(Y.textarea, `"></textarea>
   <div class="`).concat(Y["validation-message"], '" id="').concat(Y["validation-message"], `"></div>
   <div class="`).concat(Y.actions, `">
     <div class="`).concat(Y.loader, `"></div>
     <button type="button" class="`).concat(Y.confirm, `"></button>
     <button type="button" class="`).concat(Y.deny, `"></button>
     <button type="button" class="`).concat(Y.cancel, `"></button>
   </div>
   <div class="`).concat(Y.footer, `"></div>
   <div class="`).concat(Y["timer-progress-bar-container"], `">
     <div class="`).concat(Y["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            kn = () => {
                const c = G();
                return c ? (c.remove(), Mt([document.documentElement, document.body], [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]), !0) : !1
            },
            sn = () => {
                st.currentInstance.resetValidationMessage()
            },
            Or = () => {
                const c = we(),
                    h = F(c, Y.input),
                    b = F(c, Y.file),
                    $ = c.querySelector(".".concat(Y.range, " input")),
                    ge = c.querySelector(".".concat(Y.range, " output")),
                    Ue = F(c, Y.select),
                    Gt = c.querySelector(".".concat(Y.checkbox, " input")),
                    $n = F(c, Y.textarea);
                h.oninput = sn, b.onchange = sn, Ue.onchange = sn, Gt.onchange = sn, $n.oninput = sn, $.oninput = () => {
                    sn(), ge.value = $.value
                }, $.onchange = () => {
                    sn(), ge.value = $.value
                }
            },
            Ir = c => typeof c == "string" ? document.querySelector(c) : c,
            wi = c => {
                const h = we();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            ji = c => {
                window.getComputedStyle(c).direction === "rtl" && Ze(G(), Y.rtl)
            },
            bi = c => {
                const h = kn();
                if (Ln()) {
                    m("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = Y.container, h && Ze(b, Y["no-transition"]), rt(b, Ar);
                const $ = Ir(c.target);
                $.appendChild(b), wi(c), ji($), Or()
            },
            Ci = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? zi(c, h) : c && rt(h, c)
            },
            zi = (c, h) => {
                c.jquery ? Ui(h, c) : rt(h, c.toString())
            },
            Ui = (c, h) => {
                if (c.textContent = "", 0 in h)
                    for (let b = 0; b in h; b++) c.appendChild(h[b].cloneNode(!0));
                else c.appendChild(h.cloneNode(!0))
            },
            mn = (() => {
                if (Ln()) return !1;
                const c = document.createElement("div"),
                    h = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const b in h)
                    if (Object.prototype.hasOwnProperty.call(h, b) && typeof c.style[b] < "u") return h[b];
                return !1
            })(),
            Gi = () => {
                const c = document.createElement("div");
                c.className = Y["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            xi = (c, h) => {
                const b = g(),
                    $ = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? D(b) : W(b), ct(b, h, "actions"), qn(b, $, h), rt($, h.loaderHtml), ct($, h, "loader")
            };

        function qn(c, h, b) {
            const $ = dt(),
                ge = Bt(),
                Ue = l();
            Ei($, "confirm", b), Ei(ge, "deny", b), Ei(Ue, "cancel", b), Hi($, ge, Ue, b), b.reverseButtons && (b.toast ? (c.insertBefore(Ue, $), c.insertBefore(ge, $)) : (c.insertBefore(Ue, h), c.insertBefore(ge, h), c.insertBefore($, h)))
        }

        function Hi(c, h, b, $) {
            if (!$.buttonsStyling) return Mt([c, h, b], Y.styled);
            Ze([c, h, b], Y.styled), $.confirmButtonColor && (c.style.backgroundColor = $.confirmButtonColor, Ze(c, Y["default-outline"])), $.denyButtonColor && (h.style.backgroundColor = $.denyButtonColor, Ze(h, Y["default-outline"])), $.cancelButtonColor && (b.style.backgroundColor = $.cancelButtonColor, Ze(b, Y["default-outline"]))
        }

        function Ei(c, h, b) {
            fe(c, b["show".concat(a(h), "Button")], "inline-block"), rt(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = Y[h], ct(c, b, "".concat(h, "Button")), Ze(c, b["".concat(h, "ButtonClass")])
        }
        const tt = (c, h) => {
            const b = G();
            !b || (y(b, h.backdrop), o(b, h.position), C(b, h.grow), ct(b, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Ze([document.documentElement, document.body], Y["no-backdrop"])
        }

        function o(c, h) {
            h in Y ? Ze(c, Y[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Ze(c, Y.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const b = "grow-".concat(h);
                b in Y && Ze(c, Y[b])
            }
        }
        var A = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Q = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            Ce = (c, h) => {
                const b = we(),
                    $ = A.innerParams.get(c),
                    ge = !$ || h.input !== $.input;
                Q.forEach(Ue => {
                    const Gt = F(b, Y[Ue]);
                    Wt(Ue, h.inputAttributes), Gt.className = Y[Ue], ge && D(Gt)
                }), h.input && (ge && qe(h), Wn(h))
            },
            qe = c => {
                if (!jt[c.input]) return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Rr(c.input),
                    b = jt[c.input](h, c);
                W(h), setTimeout(() => {
                    Ct(b)
                })
            },
            Rt = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const b = c.attributes[h].name;
                    ["type", "value", "style"].includes(b) || c.removeAttribute(b)
                }
            },
            Wt = (c, h) => {
                const b = wt(we(), c);
                if (!!b) {
                    Rt(b);
                    for (const $ in h) b.setAttribute($, h[$])
                }
            },
            Wn = c => {
                const h = Rr(c.input);
                typeof c.customClass == "object" && Ze(h, c.customClass.input)
            },
            Bn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Xn = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = Y.input;
                    const $ = document.createElement("label"),
                        ge = Y["input-label"];
                    $.setAttribute("for", c.id), $.className = ge, typeof b.customClass == "object" && Ze($, b.customClass.inputLabel), $.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", $)
                }
            },
            Rr = c => F(we(), Y[c] || Y.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            jt = {};
        jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = (c, h) => (Xt(c, h.inputValue), Xn(c, c, h), Bn(c, h), c.type = h.input, c), jt.file = (c, h) => (Xn(c, c, h), Bn(c, h), c), jt.range = (c, h) => {
            const b = c.querySelector("input"),
                $ = c.querySelector("output");
            return Xt(b, h.inputValue), b.type = h.input, Xt($, h.inputValue), Xn(b, c, h), c
        }, jt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                rt(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Xn(c, c, h), c
        }, jt.radio = c => (c.textContent = "", c), jt.checkbox = (c, h) => {
            const b = wt(we(), "checkbox");
            b.value = "1", b.id = Y.checkbox, b.checked = Boolean(h.inputValue);
            const $ = c.querySelector("span");
            return rt($, h.inputPlaceholder), b
        }, jt.textarea = (c, h) => {
            Xt(c, h.inputValue), Bn(c, h), Xn(c, c, h);
            const b = $ => parseInt(window.getComputedStyle($).marginLeft) + parseInt(window.getComputedStyle($).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const $ = parseInt(window.getComputedStyle(we()).width),
                        ge = () => {
                            const Ue = c.offsetWidth + b(c);
                            Ue > $ ? we().style.width = "".concat(Ue, "px") : we().style.width = null
                        };
                    new MutationObserver(ge).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const qi = (c, h) => {
                const b = _e();
                ct(b, h, "htmlContainer"), h.html ? (Ci(h.html, b), W(b, "block")) : h.text ? (b.textContent = h.text, W(b, "block")) : D(b), Ce(c, h)
            },
            _o = (c, h) => {
                const b = S();
                fe(b, h.footer), h.footer && Ci(h.footer, b), ct(b, h, "footer")
            },
            So = (c, h) => {
                const b = M();
                rt(b, h.closeButtonHtml), ct(b, h, "closeButton"), fe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Lr = (c, h) => {
                const b = A.innerParams.get(c),
                    $ = ye();
                if (b && h.icon === b.icon) {
                    ws($, h), Dr($, h);
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
                W($), ws($, h), Dr($, h), Ze($, h.showClass.icon)
            },
            Dr = (c, h) => {
                for (const b in je) h.icon !== b && Mt(c, je[b]);
                Ze(c, je[h.icon]), bn(c, h), Wi(), ct(c, h, "icon")
            },
            Wi = () => {
                const c = we(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let $ = 0; $ < b.length; $++) b[$].style.backgroundColor = h
            },
            ys = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
            ko = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            ws = (c, h) => {
                let b = c.innerHTML,
                    $;
                h.iconHtml ? $ = Mr(h.iconHtml) : h.icon === "success" ? ($ = ys, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? $ = ko : $ = Mr({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== $.trim() && rt(c, $)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) H(c, b, "backgroundColor", h.iconColor);
                    H(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Mr = c => '<div class="'.concat(Y["icon-content"], '">').concat(c, "</div>"),
            _i = (c, h) => {
                const b = ke();
                if (!h.imageUrl) return D(b);
                W(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), V(b, "width", h.imageWidth), V(b, "height", h.imageHeight), b.className = Y.image, ct(b, h, "image")
            },
            To = (c, h) => {
                const b = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return D(b);
                W(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach(($, ge) => {
                    const Ue = Ao($);
                    if (b.appendChild(Ue), ge === h.currentProgressStep && Ze(Ue, Y["active-progress-step"]), ge !== h.progressSteps.length - 1) {
                        const Gt = Kn(h);
                        b.appendChild(Gt)
                    }
                })
            },
            Ao = c => {
                const h = document.createElement("li");
                return Ze(h, Y["progress-step"]), rt(h, c), h
            },
            Kn = c => {
                const h = document.createElement("li");
                return Ze(h, Y["progress-step-line"]), c.progressStepsDistance && V(h, "width", c.progressStepsDistance), h
            },
            Yn = (c, h) => {
                const b = ue();
                fe(b, h.title || h.titleText, "block"), h.title && Ci(h.title, b), h.titleText && (b.innerText = h.titleText), ct(b, h, "title")
            },
            Pr = (c, h) => {
                const b = G(),
                    $ = we();
                h.toast ? (V(b, "width", h.width), $.style.width = "100%", $.insertBefore(E(), ye())) : V($, "width", h.width), V($, "padding", h.padding), h.color && ($.style.color = h.color), h.background && ($.style.background = h.background), D(Qe()), Oo($, h)
            },
            Oo = (c, h) => {
                c.className = "".concat(Y.popup, " ").concat(pe(c) ? h.showClass.popup : ""), h.toast ? (Ze([document.documentElement, document.body], Y["toast-shown"]), Ze(c, Y.toast)) : Ze(c, Y.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Ze(c, h.customClass), h.icon && Ze(c, Y["icon-".concat(h.icon)])
            },
            Vr = (c, h) => {
                Pr(c, h), tt(c, h), To(c, h), Lr(c, h), _i(c, h), Yn(c, h), So(c, h), qi(c, h), xi(c, h), _o(c, h), typeof h.didRender == "function" && h.didRender(we())
            },
            Jn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            Si = () => {
                Array.from(document.body.children).forEach(h => {
                    h === G() || h.contains(G()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Nr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            Xi = ["swal-title", "swal-html", "swal-footer"],
            Io = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return Po(b), Object.assign(bs(b), Ro(b), Lo(b), Br(b), Do(b), Mo(b, Xi))
            },
            bs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach($ => {
                    Qn($, ["name", "value"]);
                    const ge = $.getAttribute("name"),
                        Ue = $.getAttribute("value");
                    typeof re[ge] == "boolean" && Ue === "false" && (h[ge] = !1), typeof re[ge] == "object" && (h[ge] = JSON.parse(Ue))
                }), h
            },
            Ro = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach($ => {
                    Qn($, ["type", "color", "aria-label"]);
                    const ge = $.getAttribute("type");
                    h["".concat(ge, "ButtonText")] = $.innerHTML, h["show".concat(a(ge), "Button")] = !0, $.hasAttribute("color") && (h["".concat(ge, "ButtonColor")] = $.getAttribute("color")), $.hasAttribute("aria-label") && (h["".concat(ge, "ButtonAriaLabel")] = $.getAttribute("aria-label"))
                }), h
            },
            Lo = c => {
                const h = {},
                    b = c.querySelector("swal-image");
                return b && (Qn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (h.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (h.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (h.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (h.imageAlt = b.getAttribute("alt"))), h
            },
            Br = c => {
                const h = {},
                    b = c.querySelector("swal-icon");
                return b && (Qn(b, ["type", "color"]), b.hasAttribute("type") && (h.icon = b.getAttribute("type")), b.hasAttribute("color") && (h.iconColor = b.getAttribute("color")), h.iconHtml = b.innerHTML), h
            },
            Do = c => {
                const h = {},
                    b = c.querySelector("swal-input");
                b && (Qn(b, ["type", "label", "placeholder", "value"]), h.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (h.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (h.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (h.inputValue = b.getAttribute("value")));
                const $ = Array.from(c.querySelectorAll("swal-input-option"));
                return $.length && (h.inputOptions = {}, $.forEach(ge => {
                    Qn(ge, ["value"]);
                    const Ue = ge.getAttribute("value"),
                        Gt = ge.innerHTML;
                    h.inputOptions[Ue] = Gt
                })), h
            },
            Mo = (c, h) => {
                const b = {};
                for (const $ in h) {
                    const ge = h[$],
                        Ue = c.querySelector(ge);
                    Ue && (Qn(Ue, []), b[ge.replace(/^swal-/, "")] = Ue.innerHTML.trim())
                }
                return b
            },
            Po = c => {
                const h = Xi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const $ = b.tagName.toLowerCase();
                    h.indexOf($) === -1 && f("Unrecognized element <".concat($, ">"))
                })
            },
            Qn = (c, h) => {
                Array.from(c.attributes).forEach(b => {
                    h.indexOf(b.name) === -1 && f(['Unrecognized attribute "'.concat(b.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var Cs = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Vo(c) {
            c.inputValidator || Object.keys(Cs).forEach(h => {
                c.input === h && (c.inputValidator = Cs[h])
            })
        }

        function No(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function xs(c) {
            Vo(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), No(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), bi(c)
        }
        class $r {
            constructor(h, b) {
                this.callback = h, this.remaining = b, this.running = !1, this.start()
            }
            start() {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
            stop() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
            }
            increase(h) {
                const b = this.running;
                return b && this.stop(), this.remaining += h, b && this.start(), this.remaining
            }
            getTimerLeft() {
                return this.running && (this.stop(), this.start()), this.remaining
            }
            isRunning() {
                return this.running
            }
        }
        const Es = () => {
                Le.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Le.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Le.previousBodyPadding + Gi(), "px"))
            },
            Fr = () => {
                Le.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Le.previousBodyPadding, "px"), Le.previousBodyPadding = null)
            },
            _s = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !xt(document.body, Y.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Ze(document.body, Y.iosfix), jr(), Ss()
                }
            },
            Ss = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                h && b && !c.match(/CriOS/i) && we().scrollHeight > window.innerHeight - 44 && (G().style.paddingBottom = "".concat(44, "px"))
            },
            jr = () => {
                const c = G();
                let h;
                c.ontouchstart = b => {
                    h = Bo(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            Bo = c => {
                const h = c.target,
                    b = G();
                return $o(c) || Fo(c) ? !1 : h === b || !Ne(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ne(_e()) && _e().contains(h))
            },
            $o = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            Fo = c => c.touches && c.touches.length > 1,
            ki = () => {
                if (xt(document.body, Y.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Mt(document.body, Y.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            zr = 10,
            Ur = c => {
                const h = G(),
                    b = we();
                typeof c.willOpen == "function" && c.willOpen(b);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    jo(h, b)
                }, zr), Se() && (zo(h, c.scrollbarPadding, ge), Si()), !he() && !st.previousActiveElement && (st.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Mt(h, Y["no-transition"])
            },
            ks = c => {
                const h = we();
                if (c.target !== h) return;
                const b = G();
                h.removeEventListener(mn, ks), b.style.overflowY = "auto"
            },
            jo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, ks)) : c.style.overflowY = "auto"
            },
            zo = (c, h, b) => {
                _s(), h && b !== "hidden" && Es(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, b) => {
                Ze(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), W(h, "grid"), setTimeout(() => {
                    Ze(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, zr), Ze([document.documentElement, document.body], Y.shown), b.heightAuto && b.backdrop && !b.toast && Ze([document.documentElement, document.body], Y["height-auto"])
            },
            s = c => {
                let h = we();
                h || new At, h = we();
                const b = E();
                he() ? D(ye()) : u(h, c), W(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = g(),
                    $ = E();
                !h && pe(dt()) && (h = dt()), W(b), h && (D(h), $.setAttribute("data-button-to-replace", h.className)), $.parentNode.insertBefore($, h), Ze([c, b], Y.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? U(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && (B(h.inputValue) || ie(h.inputValue)) && (s(dt()), Z(c, h))
            },
            w = (c, h) => {
                const b = c.getInput();
                if (!b) return null;
                switch (h.input) {
                    case "checkbox":
                        return x(b);
                    case "radio":
                        return T(b);
                    case "file":
                        return z(b);
                    default:
                        return h.inputAutoTrim ? b.value.trim() : b.value
                }
            },
            x = c => c.checked ? 1 : 0,
            T = c => c.checked ? c.value : null,
            z = c => c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null,
            U = (c, h) => {
                const b = we(),
                    $ = ge => le[h.input](b, be(ge), h);
                B(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), J(h.inputOptions).then(ge => {
                    c.hideLoading(), $(ge)
                })) : typeof h.inputOptions == "object" ? $(h.inputOptions) : m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const b = c.getInput();
                D(b), J(h.inputValue).then($ => {
                    b.value = h.input === "number" ? parseFloat($) || 0 : "".concat($), W(b), b.focus(), c.hideLoading()
                }).catch($ => {
                    m("Error in inputValue promise: ".concat($)), b.value = "", W(b), b.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, b) => {
                    const $ = F(c, Y.select),
                        ge = (Ue, Gt, $n) => {
                            const pn = document.createElement("option");
                            pn.value = $n, rt(pn, Gt), pn.selected = ne($n, b.inputValue), Ue.appendChild(pn)
                        };
                    h.forEach(Ue => {
                        const Gt = Ue[0],
                            $n = Ue[1];
                        if (Array.isArray($n)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Gt, pn.disabled = !1, $.appendChild(pn), $n.forEach(rr => ge(pn, rr[1], rr[0]))
                        } else ge($, $n, Gt)
                    }), $.focus()
                },
                radio: (c, h, b) => {
                    const $ = F(c, Y.radio);
                    h.forEach(Ue => {
                        const Gt = Ue[0],
                            $n = Ue[1],
                            pn = document.createElement("input"),
                            rr = document.createElement("label");
                        pn.type = "radio", pn.name = Y.radio, pn.value = Gt, ne(Gt, b.inputValue) && (pn.checked = !0);
                        const ea = document.createElement("span");
                        rt(ea, $n), ea.className = Y.label, rr.appendChild(pn), rr.appendChild(ea), $.appendChild(rr)
                    });
                    const ge = $.querySelectorAll("input");
                    ge.length && ge[0].focus()
                }
            },
            be = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((b, $) => {
                    let ge = b;
                    typeof ge == "object" && (ge = be(ge)), h.push([$, ge])
                }) : Object.keys(c).forEach(b => {
                    let $ = c[b];
                    typeof $ == "object" && ($ = be($)), h.push([b, $])
                }), h
            },
            ne = (c, h) => h && h.toString() === c.toString();

        function ce() {
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            D(h.loader), he() ? c.icon && W(ye()) : He(h), Mt([h.popup, h.actions], Y.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const He = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? W(h[0], "inline-block") : Ve() && D(c.actions)
        };

        function ot(c) {
            const h = A.innerParams.get(c || this),
                b = A.domCache.get(c || this);
            return b ? wt(b.popup, h.input) : null
        }
        var Fe = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => pe(we()),
            Vt = () => dt() && dt().click(),
            un = () => Bt() && Bt().click(),
            _t = () => l() && l().click(),
            nt = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, b, $) => {
                nt(h), b.toast || (h.keydownHandler = ge => Ki(c, ge, $), h.keydownTarget = b.keydownListenerCapture ? window : we(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, b) => {
                const $ = te();
                if ($.length) return h = h + b, h === $.length ? h = 0 : h === -1 && (h = $.length - 1), $[h].focus();
                we().focus()
            },
            Lt = ["ArrowRight", "ArrowDown"],
            Ti = ["ArrowLeft", "ArrowUp"],
            Ki = (c, h, b) => {
                const $ = A.innerParams.get(c);
                !$ || h.isComposing || h.keyCode === 229 || ($.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, $) : h.key === "Tab" ? Zn(h, $) : [...Lt, ...Ti].includes(h.key) ? ei(h.key) : h.key === "Escape" && an(h, $, b))
            },
            hn = (c, h, b) => {
                if (!!L(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Vt(), h.preventDefault()
                }
            },
            Zn = (c, h) => {
                const b = c.target,
                    $ = te();
                let ge = -1;
                for (let Ue = 0; Ue < $.length; Ue++)
                    if (b === $[Ue]) {
                        ge = Ue;
                        break
                    } c.shiftKey ? ft(h, ge, -1) : ft(h, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            ei = c => {
                const h = dt(),
                    b = Bt(),
                    $ = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, $].includes(document.activeElement)) return;
                const ge = Lt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Ue = document.activeElement;
                for (let Gt = 0; Gt < g().children.length; Gt++) {
                    if (Ue = Ue[ge], !Ue) return;
                    if (Ue instanceof HTMLButtonElement && pe(Ue)) break
                }
                Ue instanceof HTMLButtonElement && Ue.focus()
            },
            an = (c, h, b) => {
                L(h.allowEscapeKey) && (c.preventDefault(), b(Jn.esc))
            };

        function Mn(c, h, b, $) {
            he() ? Os(c, $) : (yi(b).then(() => Os(c, $)), nt(st)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), Se() && (Fr(), ki(), Nr()), vn()
        }

        function vn() {
            Mt([document.documentElement, document.body], [Y.shown, Y["height-auto"], Y["no-backdrop"], Y["toast-shown"]])
        }

        function Cn(c) {
            c = ni(c);
            const h = Fe.swalPromiseResolve.get(this),
                b = ti(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : b && h(c)
        }

        function Ts() {
            return !!A.awaitingPromise.get(this)
        }
        const ti = c => {
            const h = we();
            if (!h) return !1;
            const b = A.innerParams.get(c);
            if (!b || xt(h, b.hideClass.popup)) return !1;
            Mt(h, b.showClass.popup), Ze(h, b.hideClass.popup);
            const $ = G();
            return Mt($, b.showClass.backdrop), Ze($, b.hideClass.backdrop), As(c, h, b), !0
        };

        function Gr(c) {
            const h = Fe.swalPromiseReject.get(this);
            gt(this), h && h(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (A.awaitingPromise.delete(c), A.innerParams.get(c) || c._destroy())
            },
            ni = c => typeof c > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c),
            As = (c, h, b) => {
                const $ = G(),
                    ge = mn && pt(h);
                typeof b.willClose == "function" && b.willClose(h), ge ? Hr(c, h, $, b.returnFocus, b.didClose) : Mn(c, $, b.returnFocus, b.didClose)
            },
            Hr = (c, h, b, $, ge) => {
                st.swalCloseEventFinishedCallback = Mn.bind(null, c, b, $, ge), h.addEventListener(mn, function(Ue) {
                    Ue.target === h && (st.swalCloseEventFinishedCallback(), delete st.swalCloseEventFinishedCallback)
                })
            },
            Os = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Ai(c, h, b) {
            const $ = A.domCache.get(c);
            h.forEach(ge => {
                $[ge].disabled = b
            })
        }

        function Is(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const $ = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < $.length; ge++) $[ge].disabled = h
            } else c.disabled = h
        }

        function Rs() {
            Ai(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function Uo() {
            Ai(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function Go() {
            return Is(this.getInput(), !1)
        }

        function Ho() {
            return Is(this.getInput(), !0)
        }

        function Yi(c) {
            const h = A.domCache.get(this),
                b = A.innerParams.get(this);
            rt(h.validationMessage, c), h.validationMessage.className = Y["validation-message"], b.customClass && b.customClass.validationMessage && Ze(h.validationMessage, b.customClass.validationMessage), W(h.validationMessage);
            const $ = this.getInput();
            $ && ($.setAttribute("aria-invalid", !0), $.setAttribute("aria-describedby", Y["validation-message"]), Ct($), Ze($, Y.inputerror))
        }

        function qo() {
            const c = A.domCache.get(this);
            c.validationMessage && D(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Mt(h, Y.inputerror))
        }

        function Wo() {
            return A.domCache.get(this).progressSteps
        }

        function Xo(c) {
            const h = we(),
                b = A.innerParams.get(this);
            if (!h || xt(h, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const $ = Oi(c),
                ge = Object.assign({}, b, $);
            Vr(this, ge), A.innerParams.set(this, ge), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Oi = c => {
            const h = {};
            return Object.keys(c).forEach(b => {
                se(b) ? h[b] = c[b] : f("Invalid parameter to update: ".concat(b))
            }), h
        };

        function Ko() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && st.swalCloseEventFinishedCallback && (st.swalCloseEventFinishedCallback(), delete st.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), qr(this)
        }
        const qr = c => {
                Tn(c), delete c.params, delete st.keydownHandler, delete st.keydownTarget, delete st.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(A, c), A.awaitingPromise.set(c, !0)) : (xn(Fe, c), xn(A, c))
            },
            xn = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var Wr = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: ot,
            close: Cn,
            isAwaitingPromise: Ts,
            rejectPromise: Gr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: Rs,
            disableButtons: Uo,
            enableInput: Go,
            disableInput: Ho,
            showValidationMessage: Yi,
            resetValidationMessage: qo,
            getProgressSteps: Wo,
            update: Xo,
            _destroy: Ko
        });
        const Ls = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Zi(c, !0)
            },
            Ds = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            Yo = (c, h) => {
                c.disableButtons(), h(Jn.cancel)
            },
            St = (c, h) => {
                const b = A.innerParams.get(c);
                if (!b.input) {
                    m('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const $ = w(c, b);
                b.inputValidator ? Ji(c, $, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, $) : Zi(c, $) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Ji = (c, h, b) => {
                const $ = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J($.inputValidator(h, $.validationMessage))).then(Ue => {
                    c.enableButtons(), c.enableInput(), Ue ? c.showValidationMessage(Ue) : b === "deny" ? dn(c, h) : Zi(c, h)
                })
            },
            dn = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s(Bt()), b.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preDeny(h, b.validationMessage))).then(ge => {
                    ge === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? h : ge
                    })
                }).catch(ge => Qi(c || void 0, ge))) : c.close({
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
            Qi = (c, h) => {
                c.rejectPromise(h)
            },
            Zi = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preConfirm(h, b.validationMessage))).then(ge => {
                    pe(Qe()) || ge === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof ge > "u" ? h : ge)
                }).catch(ge => Qi(c || void 0, ge))) : yn(c, h)
            },
            Jo = (c, h, b) => {
                A.innerParams.get(c).toast ? Qo(c, h, b) : (Xr(h), Ps(h), er(c, h, b))
            },
            Qo = (c, h, b) => {
                h.popup.onclick = () => {
                    const $ = A.innerParams.get(c);
                    $ && (Ms($) || $.timer || $.input) || b(Jn.close)
                }
            },
            Ms = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let An = !1;
        const Xr = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (An = !0)
                    }
                }
            },
            Ps = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (An = !0)
                    }
                }
            },
            er = (c, h, b) => {
                h.container.onclick = $ => {
                    const ge = A.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    $.target === h.container && L(ge.allowOutsideClick) && b(Jn.backdrop)
                }
            },
            tr = c => typeof c == "object" && c.jquery,
            nr = c => c instanceof Element || tr(c),
            Zo = c => {
                const h = {};
                return typeof c[0] == "object" && !nr(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, $) => {
                    const ge = c[$];
                    typeof ge == "string" || nr(ge) ? h[b] = ge : ge !== void 0 && m("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), h
            };

        function ir() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), $ = 0; $ < h; $++) b[$] = arguments[$];
            return new c(...b)
        }

        function Kr(c) {
            class h extends this {
                _main($, ge) {
                    return super._main($, Object.assign({}, c, ge))
                }
            }
            return h
        }
        const Yr = () => st.timeout && st.timeout.getTimerLeft(),
            Vs = () => {
                if (st.timeout) return Je(), st.timeout.stop()
            },
            R = () => {
                if (st.timeout) {
                    const c = st.timeout.start();
                    return Ft(c), c
                }
            },
            j = () => {
                const c = st.timeout;
                return c && (c.running ? Vs() : R())
            },
            X = c => {
                if (st.timeout) {
                    const h = st.timeout.increase(c);
                    return Ft(h, !0), h
                }
            },
            de = () => st.timeout && st.timeout.isRunning();
        let ee = !1;
        const me = {};

        function xe() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            me[c] = this, ee || (document.body.addEventListener("click", Oe), ee = !0)
        }
        const Oe = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const b in me) {
                    const $ = h.getAttribute(b);
                    if ($) {
                        me[b].fire({
                            template: $
                        });
                        return
                    }
                }
        };
        var De = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: ve,
            argsToParams: Zo,
            isVisible: zt,
            clickConfirm: Vt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: G,
            getPopup: we,
            getTitle: ue,
            getHtmlContainer: _e,
            getImage: ke,
            getIcon: ye,
            getInputLabel: Ht,
            getCloseButton: M,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Bt,
            getCancelButton: l,
            getLoader: E,
            getFooter: S,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Qe,
            isLoading: Re,
            fire: ir,
            mixin: Kr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Yr,
            stopTimer: Vs,
            resumeTimer: R,
            toggleTimer: j,
            increaseTimer: X,
            isTimerRunning: de,
            bindClickHandler: xe
        });
        let ze;
        class Ge {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, b = new Array(h), $ = 0; $ < h; $++) b[$] = arguments[$];
                const ge = Object.freeze(this.constructor.argsToParams(b));
                Object.defineProperties(this, {
                    params: {
                        value: ge,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const Ue = ze._main(ze.params);
                A.promise.set(this, Ue)
            }
            _main(h) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Me(Object.assign({}, b, h)), st.currentInstance && (st.currentInstance._destroy(), Se() && Nr()), st.currentInstance = ze;
                const $ = ht(h, b);
                xs($), Object.freeze($), st.timeout && (st.timeout.stop(), delete st.timeout), clearTimeout(st.restoreFocusTimeout);
                const ge = Tt(ze);
                return Vr(ze, $), A.innerParams.set(ze, $), Ye(ze, ge, $)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Ye = (c, h, b) => new Promise(($, ge) => {
                const Ue = Gt => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Gt
                    })
                };
                Fe.swalPromiseResolve.set(c, $), Fe.swalPromiseReject.set(c, ge), h.confirmButton.onclick = () => Ls(c), h.denyButton.onclick = () => Ds(c), h.cancelButton.onclick = () => Yo(c, Ue), h.closeButton.onclick = () => Ue(Jn.close), Jo(c, h, Ue), on(c, st, b, Ue), p(c, b), Ur(b), Ke(st, b, Ue), Ut(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const b = Io(c),
                    $ = Object.assign({}, re, h, b, c);
                return $.showClass = Object.assign({}, re.showClass, $.showClass), $.hideClass = Object.assign({}, re.hideClass, $.hideClass), $
            },
            Tt = c => {
                const h = {
                    popup: we(),
                    container: G(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Bt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: M(),
                    validationMessage: Qe(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            Ke = (c, h, b) => {
                const $ = O();
                D($), h.timer && (c.timeout = new $r(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (W($), ct($, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(h.timer)
                })))
            },
            Ut = (c, h) => {
                if (!h.toast) {
                    if (!L(h.allowEnterKey)) return fn();
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
            rt(c, `
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
            const b = document.createElement("button");
            b.innerHTML = "&times;", b.onclick = () => c.remove(), c.appendChild(b), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(c)
                }, 1e3)
            })
        }
        Object.assign(Ge.prototype, Wr), Object.assign(Ge, De), Object.keys(Wr).forEach(c => {
            Ge[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ge.DismissReason = Jn, Ge.version = "11.4.26";
        const At = Ge;
        return At.default = At, At
    }), typeof vt < "u" && vt.Sweetalert2 && (vt.swal = vt.sweetAlert = vt.Swal = vt.SweetAlert = vt.Sweetalert2), typeof document < "u" && function(n, i) {
        var a = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.disabled || (a.styleSheet.cssText = i);
        else try {
            a.innerHTML = i
        } catch {
            a.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(hh);
const In = hh.exports;
class Ot {
    static get DismissReason() {
        return In.DismissReason
    }
    static show(e, n = {}) {
        switch (In.isVisible() && In.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
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
        In.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", In.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp7/quiplash3/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), In.fire(e)
    }
    static async showCustom(e) {
        return In.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", In.fire(e)
    }
}
const qC = `<div class="canvasContainer">\r
    <video id="cameraVideo" class="cameraVideo" autoplay playsinline crossorigin="anonymous" class=""></video>\r
    <canvas id='cameraCanvas' class="cameraCanvas resizableCanvas" width="300px" height="408px" class=""></canvas>\r
    <img id="cameraImage" crossorigin="anonymous" class="cameraImage visuallyhidden" />\r
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
    WC = {
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
                i = Vi().width,
                a = Vi().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = Co();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Vi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Vi().width, Vi().height))
        }
    },
    XC = yt.View.extend({
        template: We.template(qC),
        className: "CameraUser",
        model: new Xe.Model({
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
            $C("cameraCanvas"), t.sprites = [], t.gameLoop = zC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = ml(WC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
            const t = new Image;
            t.crossOrigin = "anonymous", t.src = this.canvas.toDataURL(), this.model.set("image", t), this.model.set("transmitting", !1)
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
                i = Pe(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(Pe(window).innerHeight(), 250),
                m = Math.min(a / t, f / e),
                _ = t * m,
                k = e * m;
            n.style.width = `${_}px`, n.style.height = `${k}px`, n.width = _, n.height = k
        }
    }),
    Rn = Xe.Model.extend({
        defaults: {},
        set(t, e) {
            const n = We.extend({}, this.attributes, this.defaults, t);
            return Xe.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = We.extend({}, this.defaults, this.attributes, t);
            return Xe.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    KC = Rn.extend({
        defaults: {
            sizesToSend: null,
            mask: !0,
            size: {
                width: 300,
                height: 408
            },
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
    YC = yt.View.extend({
        template: We.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new KC,
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
            this.cameraView = this.cameraView || new XC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    JC = '<a class="change-color button-color btn"></a>',
    QC = yt.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: We.template(JC),
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
    ZC = yt.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: QC,
        collection: new Xe.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    e1 = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp7/quiplash3/assets/5f12600b.png"/></svg>\r
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
    t1 = yt.View.extend({
        tagName: "div",
        className: "picker",
        template: We.template(e1),
        model: new Xe.Model({}),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new ZC({
                collection: new Xe.Collection
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
class dh {
    constructor(e, n, i) {
        at(this, "options");
        at(this, "canvas");
        at(this, "canvasCTX");
        at(this, "tipCanvas");
        at(this, "tipCanvasCTX");
        at(this, "lines", []);
        at(this, "image");
        at(this, "startX", null);
        at(this, "startY", null);
        at(this, "smoothedMouseX", null);
        at(this, "smoothedMouseY", null);
        at(this, "lastMouse", {});
        at(this, "lastMouseChangeVector", {});
        at(this, "lastSmoothedMouse", {});
        at(this, "lastThickness");
        at(this, "lastRotation");
        at(this, "colorLevel");
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
            _ = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(m * m + _ * _);
        let I;
        k !== 0 ? I = Math.PI / 2 + Math.atan2(_, m) : I = 0;
        const L = this.options.minThickness * e + this.options.thicknessFactor * k,
            B = this.lastThickness + this.options.thicknessSmoothingFactor * (L - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = I);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(I),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(I),
            K = Math.sin(I),
            re = Math.cos(I),
            v = this.lastThickness * J,
            P = this.lastThickness * ie,
            q = B * K,
            ae = B * re,
            se = .33 * k * J,
            ve = -.33 * k * ie,
            d = this.lastSmoothedMouse.x + P + se,
            Ee = this.lastSmoothedMouse.y + v + ve,
            Ae = this.lastSmoothedMouse.x - P + se,
            Me = this.lastSmoothedMouse.y - v + ve;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(d, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + q), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.canvasCTX.quadraticCurveTo(Ae, Me, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * B;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + q), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = I, this.lastThickness = B, this.lastMouseChangeVector = {
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
const wc = {
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
class n1 {
    constructor(e, n = {}) {
        at(this, "canvasSelector");
        at(this, "canvas");
        at(this, "ctx");
        at(this, "options");
        at(this, "history");
        at(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Pe(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(wc, n), this.history = [], this.layerNames.forEach(i => {
            const a = new dh(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
        const n = Object.assign(wc.sketchOptions, e);
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
const i1 = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    r1 = yt.View.extend({
        className: "Sketchpad canvasContainer",
        template: We.template(i1),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new n1(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = Pe(n)[0].width / Pe(n).width(),
                a = n.getBoundingClientRect(),
                f = this.model.get("size"),
                m = this.sketchpad.options.thickness;
            let _ = (e.clientX - a.left) * i;
            _ = Math.min(f.width - m, Math.max(m, _));
            let k = (e.clientY - a.top) * i;
            return k = Math.min(f.height - m, Math.max(m, k)), {
                x: _,
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
    s1 = `<div class="controller-content">\r
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
    o1 = Rn.extend({
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
    a1 = yt.View.extend({
        className: "Draw",
        template: We.template(s1),
        model: new o1,
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
                    return t ? t.html ? t.html : Pe("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new vi({}), this.toolbarComponent = this.toolbarComponent || new t1({
                model: new Xe.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new r1({
                model: new Xe.Model
            }), this.buttonsCollection = this.buttonsCollection || new Xe.Collection([]), this.buttonsComponent = this.buttonsComponent || new oi({
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
            const t = Pe("#sketchpad"),
                e = Pe("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(Pe(".controller-content").css("border-top-width"), 10) * 2 + Pe(".playerTopBar").innerHeight() + Pe("#prompt").innerHeight() + Pe("#toolbar").innerHeight() + parseInt(Pe(".canvasContainer").css("border-top-width"), 10) * 2 + Pe("#buttons").innerHeight() + Pe("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(Pe(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(Pe(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(Pe(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                m = 2,
                _ = Math.min(t.width() - i, a * m),
                k = Math.max(Pe("#controller-container").innerHeight() - n, 250),
                I = Math.min(_ / a, k / f),
                L = a * I,
                B = f * I;
            e.style.width = `${L}px`, e.style.height = `${B}px`, window.scrollTo(0, 0)
        }
    }),
    l1 = `<div>
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
    c1 = Rn.extend({
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
    Ks = yt.View.extend({
        className: "EnterSingleText scrollable",
        template: We.template(l1),
        model: new c1,
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
                    return t ? t.html ? t.html : Pe("<div />").text(t.text).html() : ""
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new vi({
                model: new Xe.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new Un({
                model: new Xe.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new Xe.Collection([{
                text: "submit"
            }]), this.buttonsComponent = this.buttonsComponent || new oi({
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
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = We.throttle(() => {
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
                n = We.without(t, e);
            return this.inputComponent.setValue(We.shuffle(n)[0]), !1
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
yt.View.extend({
    model: new Xe.Model({}),
    myViewOptions: ["width", "height", "sketchOptions"],
    template: We.template(`
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
        const a = new dh(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
yt.View.extend({
    appId: "legacymain",
    appTag: "legacymain",
    template: null,
    client: null,
    initialize(t) {
        this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new Xe.Model({});
        const e = this.client.parseEntities();
        this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
            this.update().catch(this.caughtError)
        }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
    },
    render() {
        this.model.set("username", en.safeText(this.client.name), {
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
        !n && e.indexOf("_") !== -1 && (n = t.state.split("_")[1]), n === "PostGame" || e === "Credits" || e === "GameOver" || e === "PostGame" || e === "DayEnd" || t.gameResults ? si.isInitialized ? si.show() : si.init(this.getOption("appTag")).then(() => {
            si.show()
        }) : si.hide(), t.platformId && Zt.setTag(`platform-${t.platformId}`)
    },
    async update() {
        return null
    },
    caughtError(t) {
        throw t
    },
    onAttach() {
        this.update().catch(this.caughtError), Pe(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
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
        $i.setAsViewed(0)
    },
    showScreen(t, e) {
        const n = Pe(t);
        return this.activeScreen && t === this.activeScreen || (this.activeScreen && (Pe(this.activeScreen).fadeOut("fast", () => {}), Pe(this.activeScreen).show(), Pe(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
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
        const t = Pe("#player").outerHeight(!0) || 0,
            e = si.isVisible ? Pe("#slide-in-banner").outerHeight(!0) : 0,
            n = Pe(window).width(),
            i = Pe(window).height() - t;
        Pe(`.${this.getOption("appTag")}-page`).css("height", i - e), Pe(`.${this.getOption("appTag")}-page`).attr("height", i - e), Pe(`.${this.getOption("appTag")}-page`).css("top", t), Pe(`.${this.getOption("appTag")}-page`).css("width", n), Pe(`.${this.getOption("appTag")}-page`).attr("width", n)
    }
});
const u1 = `<div id="controller" class="state-controller controller-content">
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
    h1 = Rn.extend({
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
    d1 = yt.View.extend({
        tagName: "button",
        template: We.template('<span class="flex-item"></span>'),
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
    fh = yt.View.extend({
        className: "Lobby scrollable",
        template: We.template(u1),
        model: new h1,
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
                    return t && !We.isEmpty(t)
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
            this.titleComponent = new vi({
                model: new Xe.Model({})
            }), this.choicesListView = this.choicesListView || new oi, this.charactersListView = new yt.CollectionView({
                childView: d1,
                className: "charactersList",
                collection: new Xe.Collection
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
                        a = i && i.metadata ? en.htmlUnescape(i.metadata.title) : null;
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
            this.charactersListView.collection.set(We.map(t, e => {
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
            }), $i.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = Pe(t.currentTarget).data("action");
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
                            const a = new oi({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new Xe.Collection
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
                    const a = new oi({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new Xe.Collection([])
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
                    })))), a.render(), Pe(".lobbyUgcInput").mask("aaa-aaaa", {
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
    f1 = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    p1 = Rn.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    g1 = yt.View.extend({
        className: "Logo",
        template: We.template(f1),
        model: new p1,
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : Pe("<div />").text(t.text).html()
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
            }), $i.setAsViewed(0)
        }
    }),
    js = {
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
    m1 = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    v1 = yt.View.extend({
        className: "playerTopBarView",
        template: We.template(m1),
        model: new Xe.Model,
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
    y1 = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    w1 = Rn.extend({
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
    b1 = yt.View.extend({
        className: "MakeSingleChoice scrollable",
        template: We.template(y1),
        model: new w1,
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
                    return t ? t.html ? t.html : Pe("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : Pe("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new vi({
                model: new Xe.Model
            }), this.choicesList = this.choicesList || new oi({
                action: "choose",
                collection: new Xe.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && We.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
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
                if (this.model.get("censorDialog") === "warning") return In.close(), In.fire({
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
function bc(t, e) {
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
        e % 2 ? bc(Object(n), !0).forEach(function(i) {
            C1(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : bc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Ys(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ys = function(e) {
        return typeof e
    } : Ys = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Ys(t)
}

function C1(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function li() {
    return li = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, li.apply(this, arguments)
}

function x1(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function E1(t, e) {
    if (t == null) return {};
    var n = x1(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var _1 = "1.15.0";

function ai(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var ci = ai(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    ms = ai(/Edge/i),
    Cc = ai(/firefox/i),
    ls = ai(/safari/i) && !ai(/chrome/i) && !ai(/android/i),
    ph = ai(/iP(ad|od|hone)/i),
    gh = ai(/chrome/i) && ai(/android/i),
    mh = {
        capture: !1,
        passive: !1
    };

function Et(t, e, n) {
    t.addEventListener(e, n, !ci && mh)
}

function bt(t, e, n) {
    t.removeEventListener(e, n, !ci && mh)
}

function oo(t, e) {
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

function S1(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function jn(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && oo(t, e) : oo(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = S1(t))
    }
    return null
}
var xc = /\s+/g;

function En(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(xc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(xc, " ")
        }
}

function it(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function vr(t, e) {
    var n = "";
    if (typeof t == "string") n = t;
    else
        do {
            var i = it(t, "transform");
            i && i !== "none" && (n = i + " " + n)
        } while (!e && (t = t.parentNode));
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function vh(t, e, n) {
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

function Kt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, m, _, k, I, L, B;
        if (t !== window && t.parentNode && t !== Gn() ? (f = t.getBoundingClientRect(), m = f.top, _ = f.left, k = f.bottom, I = f.right, L = f.height, B = f.width) : (m = 0, _ = 0, k = window.innerHeight, I = window.innerWidth, L = window.innerHeight, B = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !ci))
            do
                if (a && a.getBoundingClientRect && (it(a, "transform") !== "none" || n && it(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    m -= J.top + parseInt(it(a, "border-top-width")), _ -= J.left + parseInt(it(a, "border-left-width")), k = m + f.height, I = _ + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = vr(a || t),
                K = ie && ie.a,
                re = ie && ie.d;
            ie && (m /= re, _ /= K, B /= K, L /= re, k = m + L, I = _ + B)
        }
        return {
            top: m,
            left: _,
            bottom: k,
            right: I,
            width: B,
            height: L
        }
    }
}

function Ec(t, e, n) {
    for (var i = gi(t, !0), a = Kt(t)[e]; i;) {
        var f = Kt(i)[n],
            m = void 0;
        if (n === "top" || n === "left" ? m = a >= f : m = a <= f, !m) return i;
        if (i === Gn()) break;
        i = gi(i, !1)
    }
    return !1
}

function Cr(t, e, n, i) {
    for (var a = 0, f = 0, m = t.children; f < m.length;) {
        if (m[f].style.display !== "none" && m[f] !== et.ghost && (i || m[f] !== et.dragged) && jn(m[f], n.draggable, t, !1)) {
            if (a === e) return m[f];
            a++
        }
        f++
    }
    return null
}

function vl(t, e) {
    for (var n = t.lastElementChild; n && (n === et.ghost || it(n, "display") === "none" || e && !oo(n, e));) n = n.previousElementSibling;
    return n || null
}

function On(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== et.clone && (!e || oo(t, e)) && n++;
    return n
}

function _c(t) {
    var e = 0,
        n = 0,
        i = Gn();
    if (t)
        do {
            var a = vr(t),
                f = a.a,
                m = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * m
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function k1(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function gi(t, e) {
    if (!t || !t.getBoundingClientRect) return Gn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = it(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return Gn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return Gn()
}

function T1(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function va(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var cs;

function yh(t, e) {
    return function() {
        if (!cs) {
            var n = arguments,
                i = this;
            n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), cs = setTimeout(function() {
                cs = void 0
            }, e)
        }
    }
}

function A1() {
    clearTimeout(cs), cs = void 0
}

function wh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function bh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var Sn = "Sortable" + new Date().getTime();

function O1() {
    var t = [],
        e;
    return {
        captureAnimationState: function() {
            if (t = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(a) {
                    if (!(it(a, "display") === "none" || a === et.ghost)) {
                        t.push({
                            target: a,
                            rect: Kt(a)
                        });
                        var f = Hn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var m = vr(a, !0);
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
            t.splice(k1(t, {
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
            t.forEach(function(_) {
                var k = 0,
                    I = _.target,
                    L = I.fromRect,
                    B = Kt(I),
                    J = I.prevFromRect,
                    ie = I.prevToRect,
                    K = _.rect,
                    re = vr(I, !0);
                re && (B.top -= re.f, B.left -= re.e), I.toRect = B, I.thisAnimationDuration && va(J, B) && !va(L, B) && (K.top - B.top) / (K.left - B.left) === (L.top - B.top) / (L.left - B.left) && (k = R1(K, J, ie, a.options)), va(B, L) || (I.prevFromRect = L, I.prevToRect = B, k || (k = a.options.animation), a.animate(I, K, B, k)), k && (f = !0, m = Math.max(m, k), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, k), I.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, m) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, m) {
            if (m) {
                it(i, "transition", ""), it(i, "transform", "");
                var _ = vr(this.el),
                    k = _ && _.a,
                    I = _ && _.d,
                    L = (a.left - f.left) / (k || 1),
                    B = (a.top - f.top) / (I || 1);
                i.animatingX = !!L, i.animatingY = !!B, it(i, "transform", "translate3d(" + L + "px," + B + "px,0)"), this.forRepaintDummy = I1(i), it(i, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), it(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    it(i, "transition", ""), it(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, m)
            }
        }
    }
}

function I1(t) {
    return t.offsetWidth
}

function R1(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var or = [],
    ya = {
        initializeByDefault: !0
    },
    vs = {
        mount: function(e) {
            for (var n in ya) ya.hasOwnProperty(n) && !(n in e) && (e[n] = ya[n]);
            or.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), or.push(e)
        },
        pluginEvent: function(e, n, i) {
            var a = this;
            this.eventCanceled = !1, i.cancel = function() {
                a.eventCanceled = !0
            };
            var f = e + "Global";
            or.forEach(function(m) {
                !n[m.pluginName] || (n[m.pluginName][f] && n[m.pluginName][f](Hn({
                    sortable: n
                }, i)), n.options[m.pluginName] && n[m.pluginName][e] && n[m.pluginName][e](Hn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            or.forEach(function(_) {
                var k = _.pluginName;
                if (!(!e.options[k] && !_.initializeByDefault)) {
                    var I = new _(e, n, e.options);
                    I.sortable = e, I.options = e.options, e[k] = I, li(i, I.defaults)
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
            return or.forEach(function(a) {
                typeof a.eventProperties == "function" && li(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return or.forEach(function(f) {
                !e[f.pluginName] || f.optionListeners && typeof f.optionListeners[n] == "function" && (a = f.optionListeners[n].call(e[f.pluginName], i))
            }), a
        }
    };

function L1(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        f = t.cloneEl,
        m = t.toEl,
        _ = t.fromEl,
        k = t.oldIndex,
        I = t.newIndex,
        L = t.oldDraggableIndex,
        B = t.newDraggableIndex,
        J = t.originalEvent,
        ie = t.putSortable,
        K = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var re, v = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !ci && !ms ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = m || n, re.from = _ || n, re.item = a || n, re.clone = f, re.oldIndex = k, re.newIndex = I, re.oldDraggableIndex = L, re.newDraggableIndex = B, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var q = Hn(Hn({}, K), vs.getEventProperties(i, e));
        for (var ae in q) re[ae] = q[ae];
        n && n.dispatchEvent(re), v[P] && v[P].call(e, re)
    }
}
var D1 = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = E1(i, D1);
        vs.pluginEvent.bind(et)(e, n, Hn({
            dragEl: Ie,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Mi,
            lastDownEl: Js,
            cloneEl: Nt,
            cloneHidden: fi,
            dragStarted: ts,
            putSortable: tn,
            activeSortable: et.active,
            originalEvent: a,
            oldIndex: dr,
            oldDraggableIndex: us,
            newIndex: _n,
            newDraggableIndex: di,
            hideGhostForTarget: _h,
            unhideGhostForTarget: Sh,
            cloneNowHidden: function() {
                fi = !0
            },
            cloneNowShown: function() {
                fi = !1
            },
            dispatchSortableEvent: function(_) {
                gn({
                    sortable: n,
                    name: _,
                    originalEvent: a
                })
            }
        }, f))
    };

function gn(t) {
    L1(Hn({
        putSortable: tn,
        cloneEl: Nt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: dr,
        oldDraggableIndex: us,
        newIndex: _n,
        newDraggableIndex: di
    }, t))
}
var Ie, $t, ut, Pt, Mi, Js, Nt, fi, dr, _n, us, di, zs, tn, ur = !1,
    ao = !1,
    lo = [],
    Ri, Pn, wa, ba, Sc, kc, ts, ar, hs, ds = !1,
    Us = !1,
    Qs, ln, Ca = [],
    $a = !1,
    co = [],
    Eo = typeof document < "u",
    Gs = ph,
    Tc = ms || ci ? "cssFloat" : "float",
    M1 = Eo && !gh && !ph && "draggable" in document.createElement("div"),
    Ch = function() {
        if (!!Eo) {
            if (ci) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    xh = function(e, n) {
        var i = it(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = Cr(e, 0, n),
            m = Cr(e, 1, n),
            _ = f && it(f),
            k = m && it(m),
            I = _ && parseInt(_.marginLeft) + parseInt(_.marginRight) + Kt(f).width,
            L = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Kt(m).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && _.float && _.float !== "none") {
            var B = _.float === "left" ? "left" : "right";
            return m && (k.clear === "both" || k.clear === B) ? "vertical" : "horizontal"
        }
        return f && (_.display === "block" || _.display === "flex" || _.display === "table" || _.display === "grid" || I >= a && i[Tc] === "none" || m && i[Tc] === "none" && I + L > a) ? "vertical" : "horizontal"
    },
    P1 = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            m = i ? e.width : e.height,
            _ = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return a === _ || f === k || a + m / 2 === _ + I / 2
    },
    V1 = function(e, n) {
        var i;
        return lo.some(function(a) {
            var f = a[Sn].options.emptyInsertThreshold;
            if (!(!f || vl(a))) {
                var m = Kt(a),
                    _ = e >= m.left - f && e <= m.right + f,
                    k = n >= m.top - f && n <= m.bottom + f;
                if (_ && k) return i = a
            }
        }), i
    },
    Eh = function(e) {
        function n(f, m) {
            return function(_, k, I, L) {
                var B = _.options.group.name && k.options.group.name && _.options.group.name === k.options.group.name;
                if (f == null && (m || B)) return !0;
                if (f == null || f === !1) return !1;
                if (m && f === "clone") return f;
                if (typeof f == "function") return n(f(_, k, I, L), m)(_, k, I, L);
                var J = (m ? _ : k).options.group.name;
                return f === !0 || typeof f == "string" && f === J || f.join && f.indexOf(J) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Ys(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    _h = function() {
        !Ch && ut && it(ut, "display", "none")
    },
    Sh = function() {
        !Ch && ut && it(ut, "display", "")
    };
Eo && !gh && document.addEventListener("click", function(t) {
    if (ao) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ao = !1, !1
}, !0);
var Li = function(e) {
        if (Ie) {
            e = e.touches ? e.touches[0] : e;
            var n = V1(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Sn]._onDragOver(i)
            }
        }
    },
    N1 = function(e) {
        Ie && Ie.parentNode[Sn]._isOutsideThisEl(e.target)
    };

function et(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = li({}, e), t[Sn] = this;
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
            return xh(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(m, _) {
            m.setData("Text", _.textContent)
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
        supportPointer: et.supportPointer !== !1 && "PointerEvent" in window && !ls,
        emptyInsertThreshold: 5
    };
    vs.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    Eh(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : M1, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Et(t, "pointerdown", this._onTapStart) : (Et(t, "mousedown", this._onTapStart), Et(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Et(t, "dragover", this), Et(t, "dragenter", this)), lo.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), li(this, O1())
}
et.prototype = {
    constructor: et,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (ar = null)
    },
    _getDirection: function(e, n) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Ie) : this.options.direction
    },
    _onTapStart: function(e) {
        if (!!e.cancelable) {
            var n = this,
                i = this.el,
                a = this.options,
                f = a.preventOnFilter,
                m = e.type,
                _ = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (_ || e).target,
                I = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                L = a.filter;
            if (H1(i), !Ie && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || a.disabled) && !I.isContentEditable && !(!this.nativeDraggable && ls && k && k.tagName.toUpperCase() === "SELECT") && (k = jn(k, a.draggable, i, !1), !(k && k.animated) && Js !== k)) {
                if (dr = On(k), us = On(k, a.draggable), typeof L == "function") {
                    if (L.call(this, e, k, this)) {
                        gn({
                            sortable: n,
                            rootEl: I,
                            name: "filter",
                            targetEl: k,
                            toEl: i,
                            fromEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (L && (L = L.split(",").some(function(B) {
                        if (B = jn(I, B.trim(), i, !1), B) return gn({
                            sortable: n,
                            rootEl: B,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), !0
                    }), L)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !jn(I, a.handle, i, !1) || this._prepareDragStart(e, _, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            f = a.el,
            m = a.options,
            _ = f.ownerDocument,
            k;
        if (i && !Ie && i.parentNode === f) {
            var I = Kt(i);
            if (Pt = f, Ie = i, $t = Ie.parentNode, Mi = Ie.nextSibling, Js = i, zs = m.group, et.dragged = Ie, Ri = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, Sc = Ri.clientX - I.left, kc = Ri.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", a, {
                            evt: e
                        }), et.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !Cc && a.nativeDraggable && (Ie.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, m.chosenClass, !0)
                }, m.ignore.split(",").forEach(function(L) {
                    vh(Ie, L.trim(), xa)
                }), Et(_, "dragover", Li), Et(_, "mousemove", Li), Et(_, "touchmove", Li), Et(_, "mouseup", a._onDrop), Et(_, "touchend", a._onDrop), Et(_, "touchcancel", a._onDrop), Cc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), m.delay && (!m.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ms || ci))) {
                if (et.eventCanceled) {
                    this._onDrop();
                    return
                }
                Et(_, "mouseup", a._disableDelayedDrag), Et(_, "touchend", a._disableDelayedDrag), Et(_, "touchcancel", a._disableDelayedDrag), Et(_, "mousemove", a._delayedDragTouchMoveHandler), Et(_, "touchmove", a._delayedDragTouchMoveHandler), m.supportPointer && Et(_, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, m.delay)
            } else k()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Ie && xa(Ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._disableDelayedDrag), bt(e, "touchend", this._disableDelayedDrag), bt(e, "touchcancel", this._disableDelayedDrag), bt(e, "mousemove", this._delayedDragTouchMoveHandler), bt(e, "touchmove", this._delayedDragTouchMoveHandler), bt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Et(document, "pointermove", this._onTouchMove) : n ? Et(document, "touchmove", this._onTouchMove) : Et(document, "mousemove", this._onTouchMove) : (Et(Ie, "dragend", this), Et(Pt, "dragstart", this._onDragStart));
        try {
            document.selection ? Zs(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (ur = !1, Pt && Ie) {
            wn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && Et(document, "dragover", N1);
            var i = this.options;
            !e && En(Ie, i.dragClass, !1), En(Ie, i.ghostClass, !0), et.active = this, e && this._appendGhost(), gn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Pn) {
            this._lastX = Pn.clientX, this._lastY = Pn.clientY, _h();
            for (var e = document.elementFromPoint(Pn.clientX, Pn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), e !== n);) n = e;
            if (Ie.parentNode[Sn]._isOutsideThisEl(e), n)
                do {
                    if (n[Sn]) {
                        var i = void 0;
                        if (i = n[Sn]._onDragOver({
                                clientX: Pn.clientX,
                                clientY: Pn.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            Sh()
        }
    },
    _onTouchMove: function(e) {
        if (Ri) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                m = ut && vr(ut, !0),
                _ = ut && m && m.a,
                k = ut && m && m.d,
                I = Gs && ln && _c(ln),
                L = (f.clientX - Ri.clientX + a.x) / (_ || 1) + (I ? I[0] - Ca[0] : 0) / (_ || 1),
                B = (f.clientY - Ri.clientY + a.y) / (k || 1) + (I ? I[1] - Ca[1] : 0) / (k || 1);
            if (!et.active && !ur) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                m ? (m.e += L - (wa || 0), m.f += B - (ba || 0)) : m = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: L,
                    f: B
                };
                var J = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
                it(ut, "webkitTransform", J), it(ut, "mozTransform", J), it(ut, "msTransform", J), it(ut, "transform", J), wa = L, ba = B, Pn = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Kt(Ie, !0, Gs, !0, e),
                i = this.options;
            if (Gs) {
                for (ln = e; it(ln, "position") === "static" && it(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = Gn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = Gn(), Ca = _c(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), it(ut, "transition", ""), it(ut, "transform", ""), it(ut, "box-sizing", "border-box"), it(ut, "margin", 0), it(ut, "top", n.top), it(ut, "left", n.left), it(ut, "width", n.width), it(ut, "height", n.height), it(ut, "opacity", "0.8"), it(ut, "position", Gs ? "absolute" : "fixed"), it(ut, "zIndex", "100000"), it(ut, "pointerEvents", "none"), et.ghost = ut, e.appendChild(ut), it(ut, "transform-origin", Sc / parseInt(ut.style.width) * 100 + "% " + kc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            a = e.dataTransfer,
            f = i.options;
        if (wn("dragStart", this, {
                evt: e
            }), et.eventCanceled) {
            this._onDrop();
            return
        }
        wn("setupClone", this), et.eventCanceled || (Nt = bh(Ie), Nt.removeAttribute("id"), Nt.draggable = !1, Nt.style["will-change"] = "", this._hideClone(), En(Nt, this.options.chosenClass, !1), et.clone = Nt), i.cloneId = Zs(function() {
            wn("clone", i), !et.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Nt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, f.dragClass, !0), n ? (ao = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (bt(document, "mouseup", i._onDrop), bt(document, "touchend", i._onDrop), bt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Ie)), Et(document, "drop", i), it(Ie, "transform", "translateZ(0)")), ur = !0, i._dragStartId = Zs(i._dragStarted.bind(i, n, e)), Et(document, "selectstart", i), ts = !0, ls && it(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, m, _ = this.options,
            k = _.group,
            I = et.active,
            L = zs === k,
            B = _.sort,
            J = tn || I,
            ie, K = this,
            re = !1;
        if ($a) return;

        function v(ye, ue) {
            wn(ye, K, Hn({
                evt: e,
                isOwner: L,
                axis: ie ? "vertical" : "horizontal",
                revert: m,
                dragRect: a,
                targetRect: f,
                canSort: B,
                fromSortable: J,
                target: i,
                completed: q,
                onMove: function(ke, $e) {
                    return Hs(Pt, n, Ie, a, ke, Kt(ke), e, $e)
                },
                changed: ae
            }, ue))
        }

        function P() {
            v("dragOverAnimationCapture"), K.captureAnimationState(), K !== J && J.captureAnimationState()
        }

        function q(ye) {
            return v("dragOverCompleted", {
                insertion: ye
            }), ye && (L ? I._hideClone() : I._showClone(K), K !== J && (En(Ie, tn ? tn.options.ghostClass : I.options.ghostClass, !1), En(Ie, _.ghostClass, !0)), tn !== K && K !== et.active ? tn = K : K === et.active && tn && (tn = null), J === K && (K._ignoreWhileAnimating = i), K.animateAll(function() {
                v("dragOverAnimationComplete"), K._ignoreWhileAnimating = null
            }), K !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (ar = null), !_.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !ye && Li(e)), !_.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            _n = On(Ie), di = On(Ie, _.draggable), gn({
                sortable: K,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: di,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = jn(i, _.draggable, n, !0), v("dragOver"), et.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || K._ignoreWhileAnimating === i) return q(!1);
        if (ao = !1, I && !_.disabled && (L ? B || (m = $t !== Pt) : tn === this || (this.lastPutMode = zs.checkPull(this, I, Ie, e)) && k.checkPut(this, I, Ie, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Kt(Ie), v("dragOverValid"), et.eventCanceled) return re;
            if (m) return $t = Pt, P(), this._hideClone(), v("revert"), et.eventCanceled || (Mi ? Pt.insertBefore(Ie, Mi) : Pt.appendChild(Ie)), q(!0);
            var se = vl(n, _.draggable);
            if (!se || j1(e, ie, this) && !se.animated) {
                if (se === Ie) return q(!1);
                if (se && n === e.target && (i = se), i && (f = Kt(i)), Hs(Pt, n, Ie, a, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Ie, se.nextSibling) : n.appendChild(Ie), $t = n, ae(), q(!0)
            } else if (se && F1(e, ie, this)) {
                var ve = Cr(n, 0, _, !0);
                if (ve === Ie) return q(!1);
                if (i = ve, f = Kt(i), Hs(Pt, n, Ie, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Ie, ve), $t = n, ae(), q(!0)
            } else if (i.parentNode === n) {
                f = Kt(i);
                var d = 0,
                    Ee, Ae = Ie.parentNode !== n,
                    Me = !P1(Ie.animated && Ie.toRect || a, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Be = Ec(i, "top", "top") || Ec(Ie, "top", "top"),
                    Y = Be ? Be.scrollTop : void 0;
                ar !== i && (Ee = f[lt], ds = !1, Us = !Me && _.invertSwap || Ae), d = z1(e, i, f, ie, Me ? 1 : _.swapThreshold, _.invertedSwapThreshold == null ? _.swapThreshold : _.invertedSwapThreshold, Us, ar === i);
                var je;
                if (d !== 0) {
                    var G = On(Ie);
                    do G -= d, je = $t.children[G]; while (je && (it(je, "display") === "none" || je === ut))
                }
                if (d === 0 || je === i) return q(!1);
                ar = i, hs = d;
                var oe = i.nextElementSibling,
                    Te = !1;
                Te = d === 1;
                var we = Hs(Pt, n, Ie, a, i, f, e, Te);
                if (we !== !1) return (we === 1 || we === -1) && (Te = we === 1), $a = !0, setTimeout($1, 30), P(), Te && !oe ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Te ? oe : i), Be && wh(Be, 0, Y - Be.scrollTop), $t = Ie.parentNode, Ee !== void 0 && !Us && (Qs = Math.abs(Ee - Kt(i)[lt])), ae(), q(!0)
            }
            if (n.contains(Ie)) return q(!1)
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
        if (_n = On(Ie), di = On(Ie, i.draggable), wn("drop", this, {
                evt: e
            }), $t = Ie && Ie.parentNode, _n = On(Ie), di = On(Ie, i.draggable), et.eventCanceled) {
            this._nulling();
            return
        }
        ur = !1, Us = !1, ds = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Fa(this.cloneId), Fa(this._dragStartId), this.nativeDraggable && (bt(document, "drop", this), bt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ls && it(document.body, "user-select", ""), it(Ie, "transform", ""), e && (ts && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || tn && tn.lastPutMode !== "clone") && Nt && Nt.parentNode && Nt.parentNode.removeChild(Nt), Ie && (this.nativeDraggable && bt(Ie, "dragend", this), xa(Ie), Ie.style["will-change"] = "", ts && !ur && En(Ie, tn ? tn.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
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
        })), tn && tn.save()) : _n !== dr && _n >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), et.active && ((_n == null || _n === -1) && (_n = dr, di = us), gn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        wn("nulling", this), Pt = Ie = $t = ut = Mi = Nt = Js = fi = Ri = Pn = ts = _n = di = dr = us = ar = hs = tn = zs = et.dragged = et.ghost = et.clone = et.active = null, co.forEach(function(e) {
            e.checked = !0
        }), co.length = wa = ba = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Ie && (this._onDragOver(e), B1(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, m = this.options; a < f; a++) n = i[a], jn(n, m.draggable, this.el, !1) && e.push(n.getAttribute(m.dataIdAttr) || G1(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, m) {
            var _ = a.children[m];
            jn(_, this.options.draggable, a, !1) && (i[f] = _)
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
        var a = vs.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && Eh(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[Sn] = null, bt(e, "mousedown", this._onTapStart), bt(e, "touchstart", this._onTapStart), bt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (bt(e, "dragover", this), bt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), lo.splice(lo.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!fi) {
            if (wn("hideClone", this), et.eventCanceled) return;
            it(Nt, "display", "none"), this.options.removeCloneOnHide && Nt.parentNode && Nt.parentNode.removeChild(Nt), fi = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (fi) {
            if (wn("showClone", this), et.eventCanceled) return;
            Ie.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Nt, Ie) : Mi ? Pt.insertBefore(Nt, Mi) : Pt.appendChild(Nt), this.options.group.revertClone && this.animate(Ie, Nt), it(Nt, "display", ""), fi = !1
        }
    }
};

function B1(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Hs(t, e, n, i, a, f, m, _) {
    var k, I = t[Sn],
        L = I.options.onMove,
        B;
    return window.CustomEvent && !ci && !ms ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = f || Kt(e), k.willInsertAfter = _, k.originalEvent = m, t.dispatchEvent(k), L && (B = L.call(I, k, m)), B
}

function xa(t) {
    t.draggable = !1
}

function $1() {
    $a = !1
}

function F1(t, e, n) {
    var i = Kt(Cr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function j1(t, e, n) {
    var i = Kt(vl(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function z1(t, e, n, i, a, f, m, _) {
    var k = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        L = i ? n.top : n.left,
        B = i ? n.bottom : n.right,
        J = !1;
    if (!m) {
        if (_ && Qs < I * a) {
            if (!ds && (hs === 1 ? k > L + I * f / 2 : k < B - I * f / 2) && (ds = !0), ds) J = !0;
            else if (hs === 1 ? k < L + Qs : k > B - Qs) return -hs
        } else if (k > L + I * (1 - a) / 2 && k < B - I * (1 - a) / 2) return U1(e)
    }
    return J = J || m, J && (k < L + I * f / 2 || k > B - I * f / 2) ? k > L + I / 2 ? 1 : -1 : 0
}

function U1(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function G1(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function H1(t) {
    co.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && co.push(i)
    }
}

function Zs(t) {
    return setTimeout(t, 0)
}

function Fa(t) {
    return clearTimeout(t)
}
Eo && Et(document, "touchmove", function(t) {
    (et.active || ur) && t.cancelable && t.preventDefault()
});
et.utils = {
    on: Et,
    off: bt,
    css: it,
    find: vh,
    is: function(e, n) {
        return !!jn(e, n, e, !1)
    },
    extend: T1,
    throttle: yh,
    closest: jn,
    toggleClass: En,
    clone: bh,
    index: On,
    nextTick: Zs,
    cancelNextTick: Fa,
    detectDirection: xh,
    getChild: Cr
};
et.get = function(t) {
    return t[Sn]
};
et.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (et.utils = Hn(Hn({}, et.utils), i.utils)), vs.mount(i)
    })
};
et.create = function(t, e) {
    return new et(t, e)
};
et.version = _1;
var qt = [],
    ns, ja, za = !1,
    Ea, _a, uo, is;

function q1() {
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
            this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : (bt(document, "pointermove", this._handleFallbackAutoScroll), bt(document, "touchmove", this._handleFallbackAutoScroll), bt(document, "mousemove", this._handleFallbackAutoScroll)), Ac(), eo(), A1()
        },
        nulling: function() {
            uo = ja = ns = za = is = Ea = _a = null, qt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                m = (n.touches ? n.touches[0] : n).clientY,
                _ = document.elementFromPoint(f, m);
            if (uo = n, i || this.options.forceAutoScrollFallback || ms || ci || ls) {
                Sa(n, this.options, _, i);
                var k = gi(_, !0);
                za && (!is || f !== Ea || m !== _a) && (is && Ac(), is = setInterval(function() {
                    var I = gi(document.elementFromPoint(f, m), !0);
                    I !== k && (k = I, eo()), Sa(n, a.options, I, i)
                }, 10), Ea = f, _a = m)
            } else {
                if (!this.options.bubbleScroll || gi(_, !0) === Gn()) {
                    eo();
                    return
                }
                Sa(n, this.options, gi(_, !1), !1)
            }
        }
    }, li(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function eo() {
    qt.forEach(function(t) {
        clearInterval(t.pid)
    }), qt = []
}

function Ac() {
    clearInterval(is)
}
var Sa = yh(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                m = e.scrollSensitivity,
                _ = e.scrollSpeed,
                k = Gn(),
                I = !1,
                L;
            ja !== n && (ja = n, eo(), ns = e.scroll, L = e.scrollFn, ns === !0 && (ns = gi(n, !0)));
            var B = 0,
                J = ns;
            do {
                var ie = J,
                    K = Kt(ie),
                    re = K.top,
                    v = K.bottom,
                    P = K.left,
                    q = K.right,
                    ae = K.width,
                    se = K.height,
                    ve = void 0,
                    d = void 0,
                    Ee = ie.scrollWidth,
                    Ae = ie.scrollHeight,
                    Me = it(ie),
                    lt = ie.scrollLeft,
                    Be = ie.scrollTop;
                ie === k ? (ve = ae < Ee && (Me.overflowX === "auto" || Me.overflowX === "scroll" || Me.overflowX === "visible"), d = se < Ae && (Me.overflowY === "auto" || Me.overflowY === "scroll" || Me.overflowY === "visible")) : (ve = ae < Ee && (Me.overflowX === "auto" || Me.overflowX === "scroll"), d = se < Ae && (Me.overflowY === "auto" || Me.overflowY === "scroll"));
                var Y = ve && (Math.abs(q - a) <= m && lt + ae < Ee) - (Math.abs(P - a) <= m && !!lt),
                    je = d && (Math.abs(v - f) <= m && Be + se < Ae) - (Math.abs(re - f) <= m && !!Be);
                if (!qt[B])
                    for (var G = 0; G <= B; G++) qt[G] || (qt[G] = {});
                (qt[B].vx != Y || qt[B].vy != je || qt[B].el !== ie) && (qt[B].el = ie, qt[B].vx = Y, qt[B].vy = je, clearInterval(qt[B].pid), (Y != 0 || je != 0) && (I = !0, qt[B].pid = setInterval(function() {
                    i && this.layer === 0 && et.active._onTouchMove(uo);
                    var oe = qt[this.layer].vy ? qt[this.layer].vy * _ : 0,
                        Te = qt[this.layer].vx ? qt[this.layer].vx * _ : 0;
                    typeof L == "function" && L.call(et.dragged.parentNode[Sn], Te, oe, t, uo, qt[this.layer].el) !== "continue" || wh(qt[this.layer].el, Te, oe)
                }.bind({
                    layer: B
                }), 24))), B++
            } while (e.bubbleScroll && J !== k && (J = gi(J, !1)));
            za = I
        }
    }, 30),
    kh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            m = e.dispatchSortableEvent,
            _ = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var I = i || f;
            _();
            var L = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                B = document.elementFromPoint(L.clientX, L.clientY);
            k(), I && !I.el.contains(B) && (m("spill"), this.onSpill({
                dragEl: a,
                putSortable: i
            }))
        }
    };

function yl() {}
yl.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var a = Cr(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: kh
};
li(yl, {
    pluginName: "revertOnSpill"
});

function wl() {}
wl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
    },
    drop: kh
};
li(wl, {
    pluginName: "removeOnSpill"
});
et.mount(new q1);
et.mount(wl, yl);
const W1 = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    X1 = Rn.extend({
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
    K1 = yt.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: We.template("<div class='text'></div>"),
        model: new Xe.Model({}),
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
    Oc = yt.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: K1,
        collection: new Xe.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    Y1 = yt.View.extend({
        className: "SorterView",
        template: We.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new Xe.Model({
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
            this.rankedCollectionView = this.rankedCollectionView || new Oc({
                collection: new Xe.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new Oc({
                className: "sortable-collection unranked",
                collection: new Xe.Collection([])
            }), this.lockInView = this.lockInView || new ul({
                block: !1,
                model: new Xe.Model({
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
            this.rankedSortable && this.rankedSortable.destroy(), this.rankedCollectionView.collection.set(e), this.rankedSortable = et.create(this.rankedCollectionView.el, {
                group: "shared",
                onSort: this.handleOnSort.bind(this),
                animation: 100,
                delay: 100
            }), this.unrankedSortable && this.unrankedSortable.destroy(), this.unrankedCollectionView.collection.set(n), this.unrankedSortable = et.create(this.unrankedCollectionView.el, {
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
    J1 = yt.View.extend({
        className: "Sortable scrollable",
        template: We.template(W1),
        model: new X1,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new vi({
                model: new Xe.Model
            }), this.sorterView = this.sorterView || new Y1({}), this.listenTo(this.model, "change", this.update, this)
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
    Q1 = `<div id="controller" class="state-controller controller-content">
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
    Z1 = Rn.extend({
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
    hr = yt.View.extend({
        className: "UGC scrollable",
        template: We.template(Q1),
        model: new Z1,
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
            this.client = t.client, this.promptComponent = this.promptComponent || new vi({
                model: new Xe.Model
            }), this.episodesList = this.episodesList || new oi({
                action: "load",
                collection: new Xe.Collection
            }), this.inputComponent = this.inputComponent || new Un({
                model: new Xe.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new Un({
                model: new Xe.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new oi({
                action: "remove",
                collection: new Xe.Collection
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
                const i = en.htmlUnescape(n.metadata.title);
                let a = en.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = We.extend({}, n);
                i.text = en.htmlUnescape(n.text);
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
            const e = Pe(t.currentTarget).data("action");
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
            In.fire({
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
            In.fire({
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
    ex = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    tx = yt.View.extend({
        className: "RadialView",
        template: We.template(ex),
        model: new Xe.Model({
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
            const t = We.extend({}, this.model.get("vector"));
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
    nx = `<div id="status-bar" class="health text">\r
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
    ix = Rn.extend({
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
    rx = yt.View.extend({
        model: new ix,
        template: We.template(nx),
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
            this.client = t.client, this.radialComponent = new tx({
                model: new Xe.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = We.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Pe(window).on("mousemove", this.move.bind(this)), Pe(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), Pe(window).off("mousemove"), Pe(window).off("mouseup")
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
                }), this.throttledUpdate = We.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
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
            const t = Pe(".radial"),
                e = Pe("#status-bar").outerHeight() + Pe(".playerTopBar").outerHeight() + Pe("#control-panel").outerHeight() + 10,
                n = Pe(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
        }
    }),
    sx = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
const Ic = yt.View.extend({
    client: null,
    template: We.template(sx),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new v1, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new Xe.Model({});
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
                return this.setLayout(a1);
            case "EnterSingleText":
                return this.setLayout(Ks);
            case "Lobby":
                return this.setLayout(fh);
            case "Logo":
                return this.setLayout(g1);
            case "MakeSingleChoice":
                return this.setLayout(b1);
            case "Shoot":
                return this.setLayout(rx);
            case "Sortable":
                return this.setLayout(J1);
            case "Camera":
                return this.setLayout(YC);
            case "UGC":
                return this.setLayout(hr);
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
        t && !We.isEmpty(t) ? i = {
            ...We.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...We.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...We.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && Zt.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: We.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && $i.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), Pe("#textDescriptions").append(Pe("<p />").text(e.text)))
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
        const t = Pe(window).width(),
            e = Pe(window).height();
        Pe(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), Ot.show("error", {
            titleText: js[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: js[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        Ot.show("error", {
            titleText: js[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: js[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
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
                if (e instanceof ri.EcastEntityNotFound || e instanceof ri.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                else if (e instanceof ri.EcastFilterError) this.currentLayout.onTextFilterError && this.currentLayout.onTextFilterError(e);
                else throw console.error(`Unhandled error updating text entity ${t.textKey}`), e
            } else if (t.objectKey) try {
                await this.client.updateObject(t.objectKey, t.val)
            } catch (e) {
                if (e instanceof ri.EcastEntityNotFound || e instanceof ri.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                else if (e instanceof ri.EcastFilterError) this.currentLayout.onObjectFilterError && this.currentLayout.onObjectFilterError(e);
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
var Th = {
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

        function f(k, I) {
            for (var L = k.length; L--;)
                if (k[L].listener === I) return L;
            return -1
        }

        function m(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(I) {
            var L = this._getEvents(),
                B, J;
            if (I instanceof RegExp) {
                B = {};
                for (J in L) L.hasOwnProperty(J) && I.test(J) && (B[J] = L[J])
            } else B = L[I] || (L[I] = []);
            return B
        }, i.flattenListeners = function(I) {
            var L = [],
                B;
            for (B = 0; B < I.length; B += 1) L.push(I[B].listener);
            return L
        }, i.getListenersAsObject = function(I) {
            var L = this.getListeners(I),
                B;
            return L instanceof Array && (B = {}, B[I] = L), B || L
        };

        function _(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? _(k.listener) : !1
        }
        i.addListener = function(I, L) {
            if (!_(L)) throw new TypeError("listener must be a function");
            var B = this.getListenersAsObject(I),
                J = typeof L == "object",
                ie;
            for (ie in B) B.hasOwnProperty(ie) && f(B[ie], L) === -1 && B[ie].push(J ? L : {
                listener: L,
                once: !1
            });
            return this
        }, i.on = m("addListener"), i.addOnceListener = function(I, L) {
            return this.addListener(I, {
                listener: L,
                once: !0
            })
        }, i.once = m("addOnceListener"), i.defineEvent = function(I) {
            return this.getListeners(I), this
        }, i.defineEvents = function(I) {
            for (var L = 0; L < I.length; L += 1) this.defineEvent(I[L]);
            return this
        }, i.removeListener = function(I, L) {
            var B = this.getListenersAsObject(I),
                J, ie;
            for (ie in B) B.hasOwnProperty(ie) && (J = f(B[ie], L), J !== -1 && B[ie].splice(J, 1));
            return this
        }, i.off = m("removeListener"), i.addListeners = function(I, L) {
            return this.manipulateListeners(!1, I, L)
        }, i.removeListeners = function(I, L) {
            return this.manipulateListeners(!0, I, L)
        }, i.manipulateListeners = function(I, L, B) {
            var J, ie, K = I ? this.removeListener : this.addListener,
                re = I ? this.removeListeners : this.addListeners;
            if (typeof L == "object" && !(L instanceof RegExp))
                for (J in L) L.hasOwnProperty(J) && (ie = L[J]) && (typeof ie == "function" ? K.call(this, J, ie) : re.call(this, J, ie));
            else
                for (J = B.length; J--;) K.call(this, L, B[J]);
            return this
        }, i.removeEvent = function(I) {
            var L = typeof I,
                B = this._getEvents(),
                J;
            if (L === "string") delete B[I];
            else if (I instanceof RegExp)
                for (J in B) B.hasOwnProperty(J) && I.test(J) && delete B[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = m("removeEvent"), i.emitEvent = function(I, L) {
            var B = this.getListenersAsObject(I),
                J, ie, K, re, v;
            for (re in B)
                if (B.hasOwnProperty(re))
                    for (J = B[re].slice(0), K = 0; K < J.length; K++) ie = J[K], ie.once === !0 && this.removeListener(I, ie.listener), v = ie.listener.apply(this, L || []), v === this._getOnceReturnValue() && this.removeListener(I, ie.listener);
            return this
        }, i.trigger = m("emitEvent"), i.emit = function(I) {
            var L = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(I, L)
        }, i.setOnceReturnValue = function(I) {
            return this._onceReturnValue = I, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = a, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : vt || {})
})(Th);
const ox = Th.exports;
class ax extends ox {
    constructor(n, i) {
        super();
        at(this, "wsClient");
        at(this, "name");
        at(this, "id");
        at(this, "userId");
        at(this, "uuid");
        at(this, "joinAs", "player");
        at(this, "room");
        at(this, "roles", {});
        at(this, "code", null);
        at(this, "host");
        at(this, "onPlayerWelcome", n => {
            this.id = n.id, this.roles = n.profile ? n.profile.roles : {}, n.here && (this.host = Object.values(n.here).find(({
                roles: i
            }) => i.host)), this.emit("client:didJoinRoom", {
                appId: this.room.appId,
                appTag: this.room.appTag,
                id: n.id,
                reconnect: `${n.id}:${this.joinAs}:${n.secret}`
            })
        });
        at(this, "parseEntities", () => {
            if (!this.wsClient) return {};
            const n = this.wsClient.entities,
                i = {};
            return Object.keys(n).forEach(a => {
                const f = n[a];
                a === "room" || a === "bc:room" || a === "roomBlob" ? (f instanceof Di.TextEntity && (i.room = f.toBlob()), f instanceof Di.ObjectEntity && (i.room = f.val)) : a === "player" || a === `player:${this.id}` || a === `bc:customer:${this.userId}` ? (f instanceof Di.TextEntity && (i.player = f.toBlob()), f instanceof Di.ObjectEntity && (i.player = f.val)) : a === "audiencePlayer" && (f instanceof Di.TextEntity && (i.audiencePlayer = f.toBlob()), f instanceof Di.ObjectEntity && (i.audiencePlayer = f.val))
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
            a = n.text;
        let f = n.text;
        try {
            f = JSON.parse(f)
        } catch {
            hc(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const m = f;
        i === "room" ? this.emit("client:entityDidChange", i, m) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", m) : i === "bc:room" ? this.emit("client:entityDidChange", "room", m) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", m) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", m) : hc(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            a = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, a) : i === "player" ? this.emit("client:entityDidChange", "player", a) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", a) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, a) : i === "bc:room" ? this.emit("client:entityDidChange", "room", a) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", a) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", a) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onSocketClose(n) {
        n instanceof ri.EcastServerError || n.code === 1005 || n.code === 1e3 ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
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
const lx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(Pe)
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
        caret: function(m, _) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof m == "number" ? (_ = typeof _ == "number" ? _ : m, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(m, _) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", _), k.moveStart("character", m), k.select())
            })) : (this[0].setSelectionRange ? (m = this[0].selectionStart, _ = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), m = 0 - k.duplicate().moveStart("character", -1e5), _ = m + k.text.length), {
                begin: m,
                end: _
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(m, _) {
            var k, I, L, B, J, ie, K, re;
            if (!m && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return _ = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, _), I = t.mask.definitions, L = [], B = K = m.length, J = null, t.each(m.split(""), function(P, q) {
                q == "?" ? (K--, B = P) : I[q] ? (L.push(new RegExp(I[q])), J === null && (J = L.length - 1), B > P && (ie = L.length - 1)) : L.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (_.completed) {
                        for (var ye = J; ie >= ye; ye++)
                            if (L[ye] && oe[ye] === q(ye)) return;
                        _.completed.call(G)
                    }
                }

                function q(ye) {
                    return _.placeholder.charAt(ye < _.placeholder.length ? ye : 0)
                }

                function ae(ye) {
                    for (; ++ye < K && !L[ye];);
                    return ye
                }

                function se(ye) {
                    for (; --ye >= 0 && !L[ye];);
                    return ye
                }

                function ve(ye, ue) {
                    var _e, ke;
                    if (!(0 > ye)) {
                        for (_e = ye, ke = ae(ue); K > _e; _e++)
                            if (L[_e]) {
                                if (!(K > ke && L[_e].test(oe[ke]))) break;
                                oe[_e] = oe[ke], oe[ke] = q(ke), ke = ae(ke)
                            } Y(), G.caret(Math.max(J, ye))
                    }
                }

                function d(ye) {
                    var ue, _e, ke, $e;
                    for (ue = ye, _e = q(ye); K > ue; ue++)
                        if (L[ue]) {
                            if (ke = ae(ue), $e = oe[ue], oe[ue] = _e, !(K > ke && L[ke].test($e))) break;
                            _e = $e
                        }
                }

                function Ee() {
                    var ye = G.val(),
                        ue = G.caret();
                    if (re && re.length && re.length > ye.length) {
                        for (je(!0); ue.begin > 0 && !L[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < J && !L[ue.begin];) ue.begin++;
                        G.caret(ue.begin, ue.begin)
                    } else {
                        for (je(!0); ue.begin < K && !L[ue.begin];) ue.begin++;
                        G.caret(ue.begin, ue.begin)
                    }
                    P()
                }

                function Ae() {
                    je(), G.val() != we && G.change()
                }

                function Me(ye) {
                    if (!G.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode;
                        re = G.val(), $e === 8 || $e === 46 || i && $e === 127 ? (ue = G.caret(), _e = ue.begin, ke = ue.end, ke - _e === 0 && (_e = $e !== 46 ? se(_e) : ke = ae(_e - 1), ke = $e === 46 ? ae(ke) : ke), Be(_e, ke), ve(_e, ke - 1), ye.preventDefault()) : $e === 13 ? Ae.call(this, ye) : $e === 27 && (G.val(we), G.caret(0, je()), ye.preventDefault())
                    }
                }

                function lt(ye) {
                    if (!G.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode,
                            Qe = G.caret();
                        if (!(ye.ctrlKey || ye.altKey || ye.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Qe.end - Qe.begin !== 0 && (Be(Qe.begin, Qe.end), ve(Qe.begin, Qe.end - 1)), ue = ae(Qe.begin - 1), K > ue && (_e = String.fromCharCode($e), L[ue].test(_e))) {
                                if (d(ue), oe[ue] = _e, Y(), ke = ae(ue), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, G, ke)()
                                    };
                                    setTimeout(dt, 0)
                                } else G.caret(ke);
                                Qe.begin <= ie && P()
                            }
                            ye.preventDefault()
                        }
                    }
                }

                function Be(ye, ue) {
                    var _e;
                    for (_e = ye; ue > _e && K > _e; _e++) L[_e] && (oe[_e] = q(_e))
                }

                function Y() {
                    G.val(oe.join(""))
                }

                function je(ye) {
                    var ue, _e, ke, $e = G.val(),
                        Qe = -1;
                    for (ue = 0, ke = 0; K > ue; ue++)
                        if (L[ue]) {
                            for (oe[ue] = q(ue); ke++ < $e.length;)
                                if (_e = $e.charAt(ke - 1), L[ue].test(_e)) {
                                    oe[ue] = _e, Qe = ue;
                                    break
                                } if (ke > $e.length) {
                                Be(ue + 1, K);
                                break
                            }
                        } else oe[ue] === $e.charAt(ke) && ke++, B > ue && (Qe = ue);
                    return ye ? Y() : B > Qe + 1 ? _.autoclear || oe.join("") === Te ? (G.val() && G.val(""), Be(0, K)) : Y() : (Y(), G.val(G.val().substring(0, Qe + 1))), B ? ue : J
                }
                var G = t(this),
                    oe = t.map(m.split(""), function(ye, ue) {
                        return ye != "?" ? I[ye] ? q(ue) : ye : void 0
                    }),
                    Te = oe.join(""),
                    we = G.val();
                G.data(t.mask.dataName, function() {
                    return t.map(oe, function(ye, ue) {
                        return L[ue] && ye != q(ue) ? ye : null
                    }).join("")
                }), G.one("unmask", function() {
                    G.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!G.prop("readonly")) {
                        clearTimeout(e);
                        var ye;
                        we = G.val(), ye = je(), e = setTimeout(function() {
                            G.get(0) === document.activeElement && (Y(), ye == m.replace("?", "").length ? G.caret(0, ye) : G.caret(ye))
                        }, 10)
                    }
                }).on("blur.mask", Ae).on("keydown.mask", Me).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    G.prop("readonly") || setTimeout(function() {
                        var ye = je(!0);
                        G.caret(ye), P()
                    }, 0)
                }), a && f && G.off("input.mask").on("input.mask", Ee), je()
            })
        }
    })
});
window.$ = Pe;
window.jQuery = Pe;
const cx = yt.View.extend({
        className: "app-root",
        template: We.template(lx),
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
    ux = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Di.WSClient(n), e.connect()),
            mount: n => {
                const i = new ax(e, n);
                let a = new yt.Application({
                    region: "#app",
                    onStart() {
                        const f = new cx;
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
    bl = `<form>
    <div class="form-group">
        <div class="charCountDisplay"><span class="charCount">0/45</span></div>
        <div class="inputGroup">
            <textarea id="input-text-textarea" rows="1" class="form-control jbg-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>
            <span class="inlineSubmit">
                <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Send</span></button>
            </span>
            <span id="helpBlock2" class="help-block errorText"></span>
        </div>
    </div>
</form>`,
    Ah = Un.extend({
        template: We.template(bl),
        bindings: We.extend({}, Un.prototype.bindings, {
            textarea: {
                attributes: [{
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
            ".charCount": {
                observe: "length",
                onGet(t) {
                    const e = this.model.get("maxLength");
                    return `${t}/${e}`
                }
            }
        }),
        initialize(t) {
            this.model.set("length", 0), Un.prototype.initialize.apply(this, t)
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (!t.length) return;
            const e = gc(t.val(), this.model.get("maxLength"));
            this.model.set("length", e.charCount), t.val(e.result)
        },
        getSanitizedValue() {
            return this.sanitize(this.getValue())
        },
        sanitize(t) {
            return this.sanitizeInput(t)
        },
        sanitizeInput(t) {
            return gc(t, this.model.get("maxLength")).result
        }
    }),
    hx = Rn.extend({
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
            placeholder: "",
            autocapitalize: "characters",
            className: "",
            inlineSubmit: !1,
            inlineSubmitText: "Submit",
            error: "",
            strings: {
                ERROR_NOTHING_ENTERED: "You need to enter something!"
            }
        }
    }),
    dx = Ks.extend({
        model: new hx,
        initialize(t) {
            this.inputComponent = this.inputComponent || new Ah({
                model: new Xe.Model({})
            }), Ks.prototype.initialize.apply(this, [t])
        },
        onChildviewInputSubmit() {
            const t = this.inputComponent.getSanitizedValue();
            if (this.model.setUpdate({
                    error: null
                }), !this.model.get("autoSubmit") && t.length === 0 && !this.model.get("allowEmpty")) return this.model.setUpdate({
                error: this.model.get("strings").ERROR_NOTHING_ENTERED
            }), !1;
            const e = {
                    action: "write",
                    entry: t || " "
                },
                n = this.model.get("textKey");
            return n && (e.textKey = n, e.val = t || ""), this.triggerMethod("client:message", e), this.model.setUpdate({
                autoSubmit: !1
            }), this.model.get("isAudience") ? this.model.get("repeating") ? this.inputComponent.clearInput() : (this.audienceEntry = t, this.entryId = this.model.get("entryId") || 0, this.model.setUpdate({
                entry: this.audienceEntry,
                shotId: this.entryId
            })) : this.model.get("repeating") || this.$el.find(".enterSingleTextFieldset").prop("disabled", !0), !1
        },
        update() {
            this.$el.ready(() => this.$el.find("textarea").focus()), Ks.prototype.update.apply(this, []);
            const t = [];
            this.model.get("entry") || this.model.get("actions").forEach(n => {
                n.label ? t.push({
                    type: "text",
                    text: n.label,
                    className: "choice-prompt"
                }, n) : (n.action || (n.action = n.key), t.push(n))
            }), this.buttonsCollection.set(t), this.model.get("autoSubmit") && this.onChildviewInputSubmit()
        },
        onChildviewChildviewButtonChoose(t) {
            const e = this.model.get("textKey"),
                n = t.get("key");
            if (n === "submit") return this.onChildviewInputSubmit(), !1;
            const i = e !== void 0 && n === "safetyQuip" ? {
                action: "write",
                textKey: e,
                val: "\u2047"
            } : {
                action: n
            };
            return this.triggerMethod("client:message", i), !1
        }
    }),
    fx = Ah.extend({
        tagName: "div",
        className: "input",
        model: new Xe.Model({}),
        template: We.template(bl),
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (this.model.get("isLastChild") ? this.triggerMethod("input:submit", this.model) : this.triggerMethod("input:focusNext", this.model), !1) : !0
        }
    }),
    px = Xe.Model.extend({
        idAttribute: "key"
    }),
    gx = Xe.Collection.extend({
        model: px,
        childViewOptions(t, e) {
            return {
                childIndex: e
            }
        }
    }),
    mx = yt.CollectionView.extend({
        className: "fields",
        childView: fx,
        collection: new gx,
        onChildviewInputFocusNext(t) {
            const e = this.collection.indexOf(t),
                n = this.children.findByIndex(e + 1);
            Pe(n.el).find("textarea").focus()
        },
        onChildviewInputSubmit() {
            this.triggerMethod("input:submit")
        },
        clearInputs() {
            return this.children.forEach(t => t.clearInput())
        },
        getSanitizedValue(t) {
            return this.children.findByIndex(t).getSanitizedValue()
        },
        getSanitizedValues() {
            return this.children.map(t => t.getSanitizedValue())
        },
        getValue(t) {
            this.children.findByIndex(t).getValue()
        },
        getValues() {
            return this.children.map(t => t.getValue())
        },
        setValue(t, e) {
            this.children.findByIndex(t).setValue(e)
        }
    }),
    vx = `<div id="controller" class="state-controller controller-content">
    <form class="enterTextListForm">
        <fieldset class="enterTextListFieldset">
            <div id="prompt" class="prompt">prompt</div>
            <div id="inputs-region"></div>
            <span id="helpBlock2" class="help-block parentErrorText"></span>
            <div id="buttons">buttons</div>
        </fieldset>
    </form>

    <div class="enterTextListDone">
        <span class="doneText"></span>
    </div>
</div>`,
    yx = Rn.extend({
        defaults: {
            error: null,
            entries: null,
            classes: [],
            autoSubmit: !1,
            maxLength: 500,
            actions: [{
                text: "submit",
                action: "submit"
            }],
            strings: {
                ERROR_NOTHING_ENTERED: "You need to enter something!"
            },
            autocapitalize: "characters"
        }
    }),
    wx = yt.View.extend({
        className: "EnterTextList scrollable",
        model: new yx,
        template: We.template(vx),
        hasOpened: !1,
        client: null,
        regions: {
            prompt: "#prompt",
            inputs: "#inputs-region",
            buttons: "#buttons"
        },
        events: {
            "submit form": "onChildviewInputSubmit",
            "input textarea": "onInputChange"
        },
        bindings: {
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
            ".enterTextListForm": {
                observe: "entries",
                visible(t) {
                    return !t
                }
            },
            ".enterTextListDone": {
                observe: "entries",
                visible: !0
            },
            ".doneText": {
                observe: "doneText",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.html ? t.html : Pe("<div />").text(t.text).html() : ""
                }
            },
            ".parentErrorText": {
                observe: "error",
                updateMethod: "html",
                onGet(t) {
                    return t ? typeof t == "object" ? t.html ? t.html : Pe("<div />").text(t.text).html() : t : null
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.shouldSubmit = !1, this.promptComponent = new vi({
                model: new Xe.Model({
                    text: "",
                    className: ""
                })
            }), this.inputsComponent = new mx, this.buttonsCollection = new Xe.Collection([{
                text: "submit"
            }]), this.buttonsComponent = new oi({
                childView: ul,
                block: !0,
                collection: this.buttonsCollection
            }), this.listenTo(this.model, "change", this.update, this)
        },
        update() {
            this.promptComponent.model.set(this.model.get("prompt")), this.buttonsComponent.options.block = this.model.get("block");
            const t = [];
            if (this.model.get("actions").forEach(e => {
                    e.action || (e.action = e.key), t.push(e)
                }), this.buttonsCollection.set(t), this.inputsComponent.collection.length !== this.model.get("fieldCount")) {
                const e = [];
                for (let n = this.model.get("fieldCount"); n > 0; n--) e.push({
                    ...this.model.attributes,
                    counter: !0,
                    hideError: !0,
                    isLastChild: n === 1
                });
                this.inputsComponent.collection.set(e)
            }
            this.model.get("autoSubmit") && this.onChildviewInputSubmit()
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("inputs", this.inputsComponent), this.showChildView("buttons", this.buttonsComponent), this.stickit()
        },
        onAttach() {
            this.update(), Ot.vibrate()
        },
        onBeforeDestroy() {
            this.model.get("autoSubmit") && this.onChildviewInputSubmit()
        },
        onInputChange() {
            this.model.setUpdate({
                error: null
            })
        },
        onChildviewInputSubmit() {
            const t = this.inputsComponent.getSanitizedValues();
            if (!this.model.get("autoSubmit") && t.every(i => i === "")) return this.model.setUpdate({
                error: this.model.get("strings").ERROR_NOTHING_ENTERED
            }), !1;
            this.model.setUpdate({
                autoSubmit: !1,
                error: null
            }), this.$el.find(".enterTextListFieldset").prop("disabled", !0);
            const e = {
                    action: "write",
                    entries: t
                },
                n = this.model.get("textKey");
            return n ? (e.textKey = n, e.val = t.join(`
`), this.triggerMethod("client:message", e)) : this.client.send("SendMessageToRoomOwner", e), this.$el.find(".enterTextListFieldset").prop("disabled", !1), !1
        },
        onChildviewChildviewButtonChoose() {
            return this.onChildviewInputSubmit(), !1
        }
    }),
    bx = `<div id="controller" class="state-controller controller-content">
    <div class="characterSelect">
        <div id="charactersPrompt" class="charactersPrompt">
            <span id="charactersPromptText" class="charactersPromptText"></span>
        </div>
        <div id="characters" class="charactersContainer"></div>
    </div>
    <div id="vipMenu" class="vipMenu">
        <div id="title" class="lobbyTitle">title</div>
        <div id="choices" class="choicesContainer">choices</div>
    </div>
    <div id="artifactId" class="artifactContainer text">
        <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
            <button id="artifactButton" class="artifactButton"></button>
        </a>
    </div>
</div>`,
    Cx = fh.extend({
        template: We.template(bx)
    }),
    Rc = Un.extend({
        template: We.template(bl),
        bindings: We.extend({}, Un.prototype.bindings, {
            ".charCount": {
                observe: "remaining",
                onGet(t) {
                    const e = this.model.get("maxLength");
                    return `${e-t}/${e}`
                }
            }
        }),
        initialize(t) {
            this.model.set("length", 0), Un.prototype.initialize.apply(this, t)
        },
        getSanitizedValue() {
            return this.sanitize(this.getValue())
        },
        sanitize(t) {
            const e = this.sanitizeInput(t);
            return en.htmlEscape(e).trim()
        },
        sanitizeInput(t) {
            return t.replace(/[^\u00A1\u0020-\u007E\u00BF-\u00FF\u2019\u201A\u201C\u201D]/gi, "")
        }
    }),
    xx = `<div id="toggleGroup">
    <div id="left-label" class="label">Left label</div>
    <label class="toggle">
        <input class="toggleInput" type="checkbox"></input>
        <span class="slider"></span>
    </label>
    <div id="right-label" class="label">Right label</div>
</div>`,
    Ex = Rn.extend({
        defaults: {
            toggled: !1,
            leftLabel: "Regular Prompt",
            rightLabel: "Thriplash Prompt"
        }
    }),
    _x = yt.View.extend({
        tagName: "div",
        className: "ToggleView",
        model: new Ex,
        template: We.template(xx),
        events: {
            "click .toggleInput": "onToggle"
        },
        bindings: {
            "#left-label": {
                observe: "leftLabel",
                onGet(t) {
                    return t
                }
            },
            "#right-label": {
                observe: "rightLabel",
                onGet(t) {
                    return t
                }
            }
        },
        onRender() {
            this.stickit()
        },
        onToggle() {
            const t = this.model.get("toggled");
            this.model.setUpdate({
                toggled: !t
            })
        },
        getValue() {
            return this.model.get("toggled")
        }
    }),
    Sx = `<div id="controller" class="state-controller controller-content">
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
        <div id="toggleRegion"></div>
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
    kx = hr.extend({
        template: We.template(Sx),
        regions: We.extend({}, hr.prototype.regions, {
            toggle: "#toggleRegion"
        }),
        initialize(t) {
            this.inputComponent = this.inputComponent || new Rc({
                model: new Xe.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new Rc({
                model: new Xe.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.toggleComponent = this.toggleComponent || new _x, hr.prototype.initialize.apply(this, [t])
        },
        onRender() {
            hr.prototype.onRender.apply(this), this.showChildView("toggle", this.toggleComponent)
        },
        update() {
            hr.prototype.update.apply(this), this.toggleComponent.model.setUpdate(this.model.get("toggle"))
        },
        onChildviewInputSubmit() {
            let t, e;
            if (this.model.get("validActions").indexOf("add") !== -1 ? (t = "add", e = this.inputComponent.getSanitizedValue(), this.inputComponent.clearInput()) : this.model.get("validActions").indexOf("title") !== -1 && (t = "title", e = this.titleInputComponent.getSanitizedValue(), this.titleInputComponent.clearInput()), !t || !e) return;
            const n = {
                action: t,
                text: e
            };
            t === "add" && this.toggleComponent.getValue() && (n.type = "thriplash"), this.triggerMethod("client:message", n)
        }
    });
const Tx = Ic.extend({
    sessionModulePrefix: "quiplash3",
    getGameLayout(t) {
        switch (t) {
            case "EnterSingleText":
                return this.setLayout(dx, {
                    client: this.client
                });
            case "EnterTextList":
                return this.setLayout(wx);
            case "Lobby":
                return this.setLayout(Cx);
            case "UGC":
                return this.setLayout(kx, {
                    client: this.client
                });
            default:
                return -1
        }
    },
    bindings: {
        ...Ic.prototype.bindings,
        "#controller-container": {
            attributes: [{
                name: "class",
                observe: "player",
                onGet(t) {
                    return !t || !t.playerInfo || !t.playerInfo.avatar ? "" : t.state === "Logo" ? t.classes ? `Logo ${t.classes.join(" ")}` : "Logo" : t.playerInfo.avatar
                }
            }, {
                name: "class",
                observe: ["room", "blob", "audiencePlayer"],
                onGet([t, e, n]) {
                    if (!t || !e) return "";
                    if (this.client.isRole("audience")) {
                        if (!t.audience || !t.audience.state || !n) return "";
                        const i = n.audience.classes;
                        return t.audience.state === "Logo" && n.audience.state !== "MakeSingleChoice" ? `${i} Audience Logo` : `Audience ${i}`
                    }
                    return e.state === "UGC" ? "UGCView" : ""
                }
            }]
        }
    },
    parseBlob(t) {
        return t.classes = t.classes || [], t.playerInfo = t.playerInfo || {}, t.playerInfo.classes = t.playerInfo.classes || [], t.state === "MakeSingleChoice" && t.choices.forEach(e => {
            e.html && (e.html = e.html.replace(/<div>/gi, '<span class="thriplash-part">'), e.html = e.html.replace(/<\/div>/gi, '</span><span class="visuallyhidden">,</span>'))
        }), t.playerInfo.avatar && (t.classes = We.union(t.classes, [t.playerInfo.avatar]), t.playerInfo.classes = We.union(t.playerInfo.classes, [t.playerInfo.avatar])), t.isAudience && (t.playerInfo = {
            username: "AUDIENCE",
            classes: ["Audience"]
        }), t.state === "UGC" && (t.playerInfo.classes = We.union(t.playerInfo.classes, ["UGCView"])), t.textDescriptions && t.textDescriptions.length && (t.textDescriptions = t.textDescriptions.map(e => ({
            ...e,
            text: e.text ? e.text.replace(/\\n/, ", ") : null
        }))), t.state === "Lobby" && t.lobbyState && (this.hasUGC = !!t.activeContentId), this.prevState = t.state, t
    }
});
ux({
    MainView: Tx
});
//# sourceMappingURL=3778fb2c.js.map