var yh = Object.defineProperty;
var wh = (t, e, n) => e in t ? yh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var at = (t, e, n) => (wh(t, typeof e != "symbol" ? e + "" : e, n), n);
const bh = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const f of a)
            if (f.type === "childList")
                for (const v of f.addedNodes) v.tagName === "LINK" && v.rel === "modulepreload" && i(v)
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
            v = Function.prototype,
            S = a.push,
            k = a.slice,
            I = f.toString,
            D = f.hasOwnProperty,
            $ = Array.isArray,
            J = Object.keys,
            ie = v.bind,
            Y = Object.create,
            re = function() {},
            m = function(l) {
                if (l instanceof m) return l;
                if (!(this instanceof m)) return new m(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = m), e._ = m, m.VERSION = "1.8.3";
        var P = function(l, g, _) {
                if (g === void 0) return l;
                switch (_ == null ? 3 : _) {
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
            q = function(l, g, _) {
                return l == null ? m.identity : m.isFunction(l) ? P(l, g, _) : m.isObject(l) ? m.matcher(l) : m.property(l)
            };
        m.iteratee = function(l, g) {
            return q(l, g, 1 / 0)
        };
        var ae = function(l, g) {
                return function(_) {
                    var O = arguments.length;
                    if (O < 2 || _ == null) return _;
                    for (var M = 1; M < O; M++)
                        for (var N = arguments[M], te = l(N), Se = te.length, he = 0; he < Se; he++) {
                            var Ie = te[he];
                            (!g || _[Ie] === void 0) && (_[Ie] = N[Ie])
                        }
                    return _
                }
            },
            se = function(l) {
                if (!m.isObject(l)) return {};
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
            d = Math.pow(2, 53) - 1,
            Ee = ve("length"),
            Ae = function(l) {
                var g = Ee(l);
                return typeof g == "number" && g >= 0 && g <= d
            };
        m.each = m.forEach = function(l, g, _) {
            g = P(g, _);
            var O, M;
            if (Ae(l))
                for (O = 0, M = l.length; O < M; O++) g(l[O], O, l);
            else {
                var N = m.keys(l);
                for (O = 0, M = N.length; O < M; O++) g(l[N[O]], N[O], l)
            }
            return l
        }, m.map = m.collect = function(l, g, _) {
            g = q(g, _);
            for (var O = !Ae(l) && m.keys(l), M = (O || l).length, N = Array(M), te = 0; te < M; te++) {
                var Se = O ? O[te] : te;
                N[te] = g(l[Se], Se, l)
            }
            return N
        };

        function Me(l) {
            function g(_, O, M, N, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var he = N ? N[te] : te;
                    M = O(M, _[he], he, _)
                }
                return M
            }
            return function(_, O, M, N) {
                O = P(O, N, 4);
                var te = !Ae(_) && m.keys(_),
                    Se = (te || _).length,
                    he = l > 0 ? 0 : Se - 1;
                return arguments.length < 3 && (M = _[te ? te[he] : he], he += l), g(_, O, M, te, he, Se)
            }
        }
        m.reduce = m.foldl = m.inject = Me(1), m.reduceRight = m.foldr = Me(-1), m.find = m.detect = function(l, g, _) {
            var O;
            if (Ae(l) ? O = m.findIndex(l, g, _) : O = m.findKey(l, g, _), O !== void 0 && O !== -1) return l[O]
        }, m.filter = m.select = function(l, g, _) {
            var O = [];
            return g = q(g, _), m.each(l, function(M, N, te) {
                g(M, N, te) && O.push(M)
            }), O
        }, m.reject = function(l, g, _) {
            return m.filter(l, m.negate(q(g)), _)
        }, m.every = m.all = function(l, g, _) {
            g = q(g, _);
            for (var O = !Ae(l) && m.keys(l), M = (O || l).length, N = 0; N < M; N++) {
                var te = O ? O[N] : N;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, m.some = m.any = function(l, g, _) {
            g = q(g, _);
            for (var O = !Ae(l) && m.keys(l), M = (O || l).length, N = 0; N < M; N++) {
                var te = O ? O[N] : N;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(l, g, _, O) {
            return Ae(l) || (l = m.values(l)), (typeof _ != "number" || O) && (_ = 0), m.indexOf(l, g, _) >= 0
        }, m.invoke = function(l, g) {
            var _ = k.call(arguments, 2),
                O = m.isFunction(g);
            return m.map(l, function(M) {
                var N = O ? g : M[g];
                return N == null ? N : N.apply(M, _)
            })
        }, m.pluck = function(l, g) {
            return m.map(l, m.property(g))
        }, m.where = function(l, g) {
            return m.filter(l, m.matcher(g))
        }, m.findWhere = function(l, g) {
            return m.find(l, m.matcher(g))
        }, m.max = function(l, g, _) {
            var O = -1 / 0,
                M = -1 / 0,
                N, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : m.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N > O && (O = N)
            } else g = q(g, _), m.each(l, function(Ie, De, rt) {
                te = g(Ie, De, rt), (te > M || te === -1 / 0 && O === -1 / 0) && (O = Ie, M = te)
            });
            return O
        }, m.min = function(l, g, _) {
            var O = 1 / 0,
                M = 1 / 0,
                N, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : m.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N < O && (O = N)
            } else g = q(g, _), m.each(l, function(Ie, De, rt) {
                te = g(Ie, De, rt), (te < M || te === 1 / 0 && O === 1 / 0) && (O = Ie, M = te)
            });
            return O
        }, m.shuffle = function(l) {
            for (var g = Ae(l) ? l : m.values(l), _ = g.length, O = Array(_), M = 0, N; M < _; M++) N = m.random(0, M), N !== M && (O[M] = O[N]), O[N] = g[M];
            return O
        }, m.sample = function(l, g, _) {
            return g == null || _ ? (Ae(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
        }, m.sortBy = function(l, g, _) {
            return g = q(g, _), m.pluck(m.map(l, function(O, M, N) {
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
            return function(g, _, O) {
                var M = {};
                return _ = q(_, O), m.each(g, function(N, te) {
                    var Se = _(N, te, g);
                    l(M, N, Se)
                }), M
            }
        };
        m.groupBy = lt(function(l, g, _) {
            m.has(l, _) ? l[_].push(g) : l[_] = [g]
        }), m.indexBy = lt(function(l, g, _) {
            l[_] = g
        }), m.countBy = lt(function(l, g, _) {
            m.has(l, _) ? l[_]++ : l[_] = 1
        }), m.toArray = function(l) {
            return l ? m.isArray(l) ? k.call(l) : Ae(l) ? m.map(l, m.identity) : m.values(l) : []
        }, m.size = function(l) {
            return l == null ? 0 : Ae(l) ? l.length : m.keys(l).length
        }, m.partition = function(l, g, _) {
            g = q(g, _);
            var O = [],
                M = [];
            return m.each(l, function(N, te, Se) {
                (g(N, te, Se) ? O : M).push(N)
            }), [O, M]
        }, m.first = m.head = m.take = function(l, g, _) {
            if (l != null) return g == null || _ ? l[0] : m.initial(l, l.length - g)
        }, m.initial = function(l, g, _) {
            return k.call(l, 0, Math.max(0, l.length - (g == null || _ ? 1 : g)))
        }, m.last = function(l, g, _) {
            if (l != null) return g == null || _ ? l[l.length - 1] : m.rest(l, Math.max(0, l.length - g))
        }, m.rest = m.tail = m.drop = function(l, g, _) {
            return k.call(l, g == null || _ ? 1 : g)
        }, m.compact = function(l) {
            return m.filter(l, m.identity)
        };
        var $e = function(l, g, _, O) {
            for (var M = [], N = 0, te = O || 0, Se = Ee(l); te < Se; te++) {
                var he = l[te];
                if (Ae(he) && (m.isArray(he) || m.isArguments(he))) {
                    g || (he = $e(he, g, _));
                    var Ie = 0,
                        De = he.length;
                    for (M.length += De; Ie < De;) M[N++] = he[Ie++]
                } else _ || (M[N++] = he)
            }
            return M
        };
        m.flatten = function(l, g) {
            return $e(l, g, !1)
        }, m.without = function(l) {
            return m.difference(l, k.call(arguments, 1))
        }, m.uniq = m.unique = function(l, g, _, O) {
            m.isBoolean(g) || (O = _, _ = g, g = !1), _ != null && (_ = q(_, O));
            for (var M = [], N = [], te = 0, Se = Ee(l); te < Se; te++) {
                var he = l[te],
                    Ie = _ ? _(he, te, l) : he;
                g ? ((!te || N !== Ie) && M.push(he), N = Ie) : _ ? m.contains(N, Ie) || (N.push(Ie), M.push(he)) : m.contains(M, he) || M.push(he)
            }
            return M
        }, m.union = function() {
            return m.uniq($e(arguments, !0, !0))
        }, m.intersection = function(l) {
            for (var g = [], _ = arguments.length, O = 0, M = Ee(l); O < M; O++) {
                var N = l[O];
                if (!m.contains(g, N)) {
                    for (var te = 1; te < _ && m.contains(arguments[te], N); te++);
                    te === _ && g.push(N)
                }
            }
            return g
        }, m.difference = function(l) {
            var g = $e(arguments, !0, !0, 1);
            return m.filter(l, function(_) {
                return !m.contains(g, _)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(l) {
            for (var g = l && m.max(l, Ee).length || 0, _ = Array(g), O = 0; O < g; O++) _[O] = m.pluck(l, O);
            return _
        }, m.object = function(l, g) {
            for (var _ = {}, O = 0, M = Ee(l); O < M; O++) g ? _[l[O]] = g[O] : _[l[O][0]] = l[O][1];
            return _
        };

        function K(l) {
            return function(g, _, O) {
                _ = q(_, O);
                for (var M = Ee(g), N = l > 0 ? 0 : M - 1; N >= 0 && N < M; N += l)
                    if (_(g[N], N, g)) return N;
                return -1
            }
        }
        m.findIndex = K(1), m.findLastIndex = K(-1), m.sortedIndex = function(l, g, _, O) {
            _ = q(_, O, 1);
            for (var M = _(g), N = 0, te = Ee(l); N < te;) {
                var Se = Math.floor((N + te) / 2);
                _(l[Se]) < M ? N = Se + 1 : te = Se
            }
            return N
        };

        function Ge(l, g, _) {
            return function(O, M, N) {
                var te = 0,
                    Se = Ee(O);
                if (typeof N == "number") l > 0 ? te = N >= 0 ? N : Math.max(N + Se, te) : Se = N >= 0 ? Math.min(N + 1, Se) : N + Se + 1;
                else if (_ && N && Se) return N = _(O, M), O[N] === M ? N : -1;
                if (M !== M) return N = g(k.call(O, te, Se), m.isNaN), N >= 0 ? N + te : -1;
                for (N = l > 0 ? te : Se - 1; N >= 0 && N < Se; N += l)
                    if (O[N] === M) return N;
                return -1
            }
        }
        m.indexOf = Ge(1, m.findIndex, m.sortedIndex), m.lastIndexOf = Ge(-1, m.findLastIndex), m.range = function(l, g, _) {
            g == null && (g = l || 0, l = 0), _ = _ || 1;
            for (var O = Math.max(Math.ceil((g - l) / _), 0), M = Array(O), N = 0; N < O; N++, l += _) M[N] = l;
            return M
        };
        var H = function(l, g, _, O, M) {
            if (!(O instanceof g)) return l.apply(_, M);
            var N = se(l.prototype),
                te = l.apply(N, M);
            return m.isObject(te) ? te : N
        };
        m.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, k.call(arguments, 1));
            if (!m.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var _ = k.call(arguments, 2),
                O = function() {
                    return H(l, O, g, this, _.concat(k.call(arguments)))
                };
            return O
        }, m.partial = function(l) {
            var g = k.call(arguments, 1),
                _ = function() {
                    for (var O = 0, M = g.length, N = Array(M), te = 0; te < M; te++) N[te] = g[te] === m ? arguments[O++] : g[te];
                    for (; O < arguments.length;) N.push(arguments[O++]);
                    return H(l, _, this, this, N)
                };
            return _
        }, m.bindAll = function(l) {
            var g, _ = arguments.length,
                O;
            if (_ <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < _; g++) O = arguments[g], l[O] = m.bind(l[O], l);
            return l
        }, m.memoize = function(l, g) {
            var _ = function(O) {
                var M = _.cache,
                    N = "" + (g ? g.apply(this, arguments) : O);
                return m.has(M, N) || (M[N] = l.apply(this, arguments)), M[N]
            };
            return _.cache = {}, _
        }, m.delay = function(l, g) {
            var _ = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, _)
            }, g)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(l, g, _) {
            var O, M, N, te = null,
                Se = 0;
            _ || (_ = {});
            var he = function() {
                Se = _.leading === !1 ? 0 : m.now(), te = null, N = l.apply(O, M), te || (O = M = null)
            };
            return function() {
                var Ie = m.now();
                !Se && _.leading === !1 && (Se = Ie);
                var De = g - (Ie - Se);
                return O = this, M = arguments, De <= 0 || De > g ? (te && (clearTimeout(te), te = null), Se = Ie, N = l.apply(O, M), te || (O = M = null)) : !te && _.trailing !== !1 && (te = setTimeout(he, De)), N
            }
        }, m.debounce = function(l, g, _) {
            var O, M, N, te, Se, he = function() {
                var Ie = m.now() - te;
                Ie < g && Ie >= 0 ? O = setTimeout(he, g - Ie) : (O = null, _ || (Se = l.apply(N, M), O || (N = M = null)))
            };
            return function() {
                N = this, M = arguments, te = m.now();
                var Ie = _ && !O;
                return O || (O = setTimeout(he, g)), Ie && (Se = l.apply(N, M), N = M = null), Se
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
                for (var _ = g, O = l[g].apply(this, arguments); _--;) O = l[_].call(this, O);
                return O
            }
        }, m.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, m.before = function(l, g) {
            var _;
            return function() {
                return --l > 0 && (_ = g.apply(this, arguments)), l <= 1 && (g = null), _
            }
        }, m.once = m.partial(m.before, 2);
        var oe = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Te = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function we(l, g) {
            var _ = Te.length,
                O = l.constructor,
                M = m.isFunction(O) && O.prototype || f,
                N = "constructor";
            for (m.has(l, N) && !m.contains(g, N) && g.push(N); _--;) N = Te[_], N in l && l[N] !== M[N] && !m.contains(g, N) && g.push(N)
        }
        m.keys = function(l) {
            if (!m.isObject(l)) return [];
            if (J) return J(l);
            var g = [];
            for (var _ in l) m.has(l, _) && g.push(_);
            return oe && we(l, g), g
        }, m.allKeys = function(l) {
            if (!m.isObject(l)) return [];
            var g = [];
            for (var _ in l) g.push(_);
            return oe && we(l, g), g
        }, m.values = function(l) {
            for (var g = m.keys(l), _ = g.length, O = Array(_), M = 0; M < _; M++) O[M] = l[g[M]];
            return O
        }, m.mapObject = function(l, g, _) {
            g = q(g, _);
            for (var O = m.keys(l), M = O.length, N = {}, te, Se = 0; Se < M; Se++) te = O[Se], N[te] = g(l[te], te, l);
            return N
        }, m.pairs = function(l) {
            for (var g = m.keys(l), _ = g.length, O = Array(_), M = 0; M < _; M++) O[M] = [g[M], l[g[M]]];
            return O
        }, m.invert = function(l) {
            for (var g = {}, _ = m.keys(l), O = 0, M = _.length; O < M; O++) g[l[_[O]]] = _[O];
            return g
        }, m.functions = m.methods = function(l) {
            var g = [];
            for (var _ in l) m.isFunction(l[_]) && g.push(_);
            return g.sort()
        }, m.extend = ae(m.allKeys), m.extendOwn = m.assign = ae(m.keys), m.findKey = function(l, g, _) {
            g = q(g, _);
            for (var O = m.keys(l), M, N = 0, te = O.length; N < te; N++)
                if (M = O[N], g(l[M], M, l)) return M
        }, m.pick = function(l, g, _) {
            var O = {},
                M = l,
                N, te;
            if (M == null) return O;
            m.isFunction(g) ? (te = m.allKeys(M), N = P(g, _)) : (te = $e(arguments, !1, !1, 1), N = function(rt, xt, sn) {
                return xt in sn
            }, M = Object(M));
            for (var Se = 0, he = te.length; Se < he; Se++) {
                var Ie = te[Se],
                    De = M[Ie];
                N(De, Ie, M) && (O[Ie] = De)
            }
            return O
        }, m.omit = function(l, g, _) {
            if (m.isFunction(g)) g = m.negate(g);
            else {
                var O = m.map($e(arguments, !1, !1, 1), String);
                g = function(M, N) {
                    return !m.contains(O, N)
                }
            }
            return m.pick(l, g, _)
        }, m.defaults = ae(m.allKeys, !0), m.create = function(l, g) {
            var _ = se(l);
            return g && m.extendOwn(_, g), _
        }, m.clone = function(l) {
            return m.isObject(l) ? m.isArray(l) ? l.slice() : m.extend({}, l) : l
        }, m.tap = function(l, g) {
            return g(l), l
        }, m.isMatch = function(l, g) {
            var _ = m.keys(g),
                O = _.length;
            if (l == null) return !O;
            for (var M = Object(l), N = 0; N < O; N++) {
                var te = _[N];
                if (g[te] !== M[te] || !(te in M)) return !1
            }
            return !0
        };
        var ye = function(l, g, _, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof m && (l = l._wrapped), g instanceof m && (g = g._wrapped);
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
                if (te !== Se && !(m.isFunction(te) && te instanceof te && m.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
            }
            _ = _ || [], O = O || [];
            for (var he = _.length; he--;)
                if (_[he] === l) return O[he] === g;
            if (_.push(l), O.push(g), N) {
                if (he = l.length, he !== g.length) return !1;
                for (; he--;)
                    if (!ye(l[he], g[he], _, O)) return !1
            } else {
                var Ie = m.keys(l),
                    De;
                if (he = Ie.length, m.keys(g).length !== he) return !1;
                for (; he--;)
                    if (De = Ie[he], !(m.has(g, De) && ye(l[De], g[De], _, O))) return !1
            }
            return _.pop(), O.pop(), !0
        };
        m.isEqual = function(l, g) {
            return ye(l, g)
        }, m.isEmpty = function(l) {
            return l == null ? !0 : Ae(l) && (m.isArray(l) || m.isString(l) || m.isArguments(l)) ? l.length === 0 : m.keys(l).length === 0
        }, m.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, m.isArray = $ || function(l) {
            return I.call(l) === "[object Array]"
        }, m.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            m["is" + l] = function(g) {
                return I.call(g) === "[object " + l + "]"
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
            return l === !0 || l === !1 || I.call(l) === "[object Boolean]"
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
        }, m.noop = function() {}, m.property = ve, m.propertyOf = function(l) {
            return l == null ? function() {} : function(g) {
                return l[g]
            }
        }, m.matcher = m.matches = function(l) {
            return l = m.extendOwn({}, l),
                function(g) {
                    return m.isMatch(g, l)
                }
        }, m.times = function(l, g, _) {
            var O = Array(Math.max(0, l));
            g = P(g, _, 1);
            for (var M = 0; M < l; M++) O[M] = g(M);
            return O
        }, m.random = function(l, g) {
            return g == null && (g = l, l = 0), l + Math.floor(Math.random() * (g - l + 1))
        }, m.now = Date.now || function() {
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
            _e = m.invert(ue),
            ke = function(l) {
                var g = function(N) {
                        return l[N]
                    },
                    _ = "(?:" + m.keys(l).join("|") + ")",
                    O = RegExp(_),
                    M = RegExp(_, "g");
                return function(N) {
                    return N = N == null ? "" : "" + N, O.test(N) ? N.replace(M, g) : N
                }
            };
        m.escape = ke(ue), m.unescape = ke(_e), m.result = function(l, g, _) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = _), m.isFunction(O) ? O.call(l) : O
        };
        var Fe = 0;
        m.uniqueId = function(l) {
            var g = ++Fe + "";
            return l ? l + g : g
        }, m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var Qe = /(.)^/,
            ft = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            $t = /\\|'|\r|\n|\u2028|\u2029/g,
            qt = function(l) {
                return "\\" + ft[l]
            };
        m.template = function(l, g, _) {
            !g && _ && (g = _), g = m.defaults({}, g, m.templateSettings);
            var O = RegExp([(g.escape || Qe).source, (g.interpolate || Qe).source, (g.evaluate || Qe).source].join("|") + "|$", "g"),
                M = 0,
                N = "__p+='";
            l.replace(O, function(Ie, De, rt, xt, sn) {
                return N += l.slice(M, sn).replace($t, qt), M = sn + Ie.length, De ? N += `'+
((__t=(` + De + `))==null?'':_.escape(__t))+
'` : rt ? N += `'+
((__t=(` + rt + `))==null?'':__t)+
'` : xt && (N += `';
` + xt + `
__p+='`), Ie
            }), N += `';
`, g.variable || (N = `with(obj||{}){
` + N + `}
`), N = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + N + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", N)
            } catch (Ie) {
                throw Ie.source = N, Ie
            }
            var Se = function(Ie) {
                    return te.call(this, Ie, m)
                },
                he = g.variable || "obj";
            return Se.source = "function(" + he + `){
` + N + "}", Se
        }, m.chain = function(l) {
            var g = m(l);
            return g._chain = !0, g
        };
        var E = function(l, g) {
            return l._chain ? m(g).chain() : g
        };
        m.mixin = function(l) {
            m.each(m.functions(l), function(g) {
                var _ = m[g] = l[g];
                m.prototype[g] = function() {
                    var O = [this._wrapped];
                    return S.apply(O, arguments), E(this, _.apply(m, O))
                }
            })
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = a[l];
            m.prototype[l] = function() {
                var _ = this._wrapped;
                return g.apply(_, arguments), (l === "shift" || l === "splice") && _.length === 0 && delete _[0], E(this, _)
            }
        }), m.each(["concat", "join", "slice"], function(l) {
            var g = a[l];
            m.prototype[l] = function() {
                return E(this, g.apply(this._wrapped, arguments))
            }
        }), m.prototype.value = function() {
            return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(yt)
})(Ni, Ni.exports);
const Be = Ni.exports;
var Fa = {
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
            a = Object.getPrototypeOf,
            f = i.slice,
            v = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            S = i.push,
            k = i.indexOf,
            I = {},
            D = I.toString,
            $ = I.hasOwnProperty,
            J = $.toString,
            ie = J.call(Object),
            Y = {},
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

        function ae(r, s, u) {
            u = u || P;
            var p, w, x = u.createElement("script");
            if (x.text = r, s)
                for (p in q) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
            u.head.appendChild(x).parentNode.removeChild(x)
        }

        function se(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? I[D.call(r)] || "object" : typeof r
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
            push: S,
            sort: i.sort,
            splice: i.splice
        }, d.extend = d.fn.extend = function() {
            var r, s, u, p, w, x, T = arguments[0] || {},
                G = 1,
                z = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[G] || {}, G++), typeof T != "object" && !re(T) && (T = {}), G === z && (T = this, G--); G < z; G++)
                if ((r = arguments[G]) != null)
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
                return !r || D.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = $.call(s, "constructor") && s.constructor, typeof u == "function" && J.call(u) === ie) : !0)
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
                return r != null && (Ee(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : S.call(u, r)), u
            },
            inArray: function(r, s, u) {
                return s == null ? -1 : k.call(s, r, u)
            },
            merge: function(r, s) {
                for (var u = +s.length, p = 0, w = r.length; p < u; p++) r[w++] = s[p];
                return r.length = w, r
            },
            grep: function(r, s, u) {
                for (var p, w = [], x = 0, T = r.length, G = !u; x < T; x++) p = !s(r[x], x), p !== G && w.push(r[x]);
                return w
            },
            map: function(r, s, u) {
                var p, w, x = 0,
                    T = [];
                if (Ee(r))
                    for (p = r.length; x < p; x++) w = s(r[x], x, u), w != null && T.push(w);
                else
                    for (x in r) w = s(r[x], x, u), w != null && T.push(w);
                return v(T)
            },
            guid: 1,
            support: Y
        }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            I["[object " + s + "]"] = s.toLowerCase()
        });

        function Ee(r) {
            var s = !!r && "length" in r && r.length,
                u = se(r);
            return re(r) || m(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Ae = function(r) {
            var s, u, p, w, x, T, G, z, Z, le, be, ne, ce, We, ot, je, zt, Nt, hn, _t = "sizzle" + 1 * new Date,
                nt = r.document,
                an = 0,
                pt = 0,
                Dt = Ki(),
                ki = Ki(),
                Xi = Ki(),
                dn = Ki(),
                Jn = function(R, j) {
                    return R === j && (be = !0), 0
                },
                Qn = {}.hasOwnProperty,
                ln = [],
                Ln = ln.pop,
                yn = ln.push,
                xn = ln.push,
                ks = ln.slice,
                Zn = function(R, j) {
                    for (var X = 0, de = R.length; X < de; X++)
                        if (R[X] === j) return X;
                    return -1
                },
                Gr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                mt = "[\\x20\\t\\r\\n\\f]",
                ei = "(?:\\\\[\\da-fA-F]{1,6}" + mt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ts = "\\[" + mt + "*(" + ei + ")(?:" + mt + "*([*^$|!~]?=)" + mt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ei + "))|)" + mt + "*\\]",
                zr = ":(" + ei + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ts + ")*)|.*)\\)|)",
                As = new RegExp(mt + "+", "g"),
                Ti = new RegExp("^" + mt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + mt + "+$", "g"),
                Os = new RegExp("^" + mt + "*," + mt + "*"),
                Rs = new RegExp("^" + mt + "*([>+~]|" + mt + ")" + mt + "*"),
                zo = new RegExp(mt + "|>"),
                Ho = new RegExp(zr),
                Uo = new RegExp("^" + ei + "$"),
                Yi = {
                    ID: new RegExp("^#(" + ei + ")"),
                    CLASS: new RegExp("^\\.(" + ei + ")"),
                    TAG: new RegExp("^(" + ei + "|[*])"),
                    ATTR: new RegExp("^" + Ts),
                    PSEUDO: new RegExp("^" + zr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + mt + "*(even|odd|(([+-]|)(\\d*)n|)" + mt + "*(?:([+-]|)" + mt + "*(\\d+)|))" + mt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Gr + ")$", "i"),
                    needsContext: new RegExp("^" + mt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + mt + "*((?:-\\d)?\\d*)" + mt + "*\\)|)(?=[^-]|$)", "i")
                },
                qo = /HTML$/i,
                Wo = /^(?:input|select|textarea|button)$/i,
                Xo = /^h\d$/i,
                Ai = /^[^{]+\{\s*\[native \w/,
                Yo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Hr = /[+~]/,
                An = new RegExp("\\\\[\\da-fA-F]{1,6}" + mt + "?|\\\\([^\\r\\n\\f])", "g"),
                En = function(R, j) {
                    var X = "0x" + R.slice(1) - 65536;
                    return j || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                },
                Ur = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Is = function(R, j) {
                    return j ? R === "\0" ? "\uFFFD" : R.slice(0, -1) + "\\" + R.charCodeAt(R.length - 1).toString(16) + " " : "\\" + R
                },
                Ds = function() {
                    ne()
                },
                Ko = er(function(R) {
                    return R.disabled === !0 && R.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                xn.apply(ln = ks.call(nt.childNodes), nt.childNodes), ln[nt.childNodes.length].nodeType
            } catch {
                xn = {
                    apply: ln.length ? function(j, X) {
                        yn.apply(j, ks.call(X))
                    } : function(j, X) {
                        for (var de = j.length, ee = 0; j[de++] = X[ee++];);
                        j.length = de - 1
                    }
                }
            }

            function St(R, j, X, de) {
                var ee, me, xe, Oe, Le, ze, qe, Ke = j && j.ownerDocument,
                    dt = j ? j.nodeType : 9;
                if (X = X || [], typeof R != "string" || !R || dt !== 1 && dt !== 9 && dt !== 11) return X;
                if (!de && (ne(j), j = j || ce, ot)) {
                    if (dt !== 11 && (Le = Yo.exec(R)))
                        if (ee = Le[1]) {
                            if (dt === 9)
                                if (xe = j.getElementById(ee)) {
                                    if (xe.id === ee) return X.push(xe), X
                                } else return X;
                            else if (Ke && (xe = Ke.getElementById(ee)) && hn(j, xe) && xe.id === ee) return X.push(xe), X
                        } else {
                            if (Le[2]) return xn.apply(X, j.getElementsByTagName(R)), X;
                            if ((ee = Le[3]) && u.getElementsByClassName && j.getElementsByClassName) return xn.apply(X, j.getElementsByClassName(ee)), X
                        } if (u.qsa && !dn[R + " "] && (!je || !je.test(R)) && (dt !== 1 || j.nodeName.toLowerCase() !== "object")) {
                        if (qe = R, Ke = j, dt === 1 && (zo.test(R) || Rs.test(R))) {
                            for (Ke = Hr.test(R) && qr(j.parentNode) || j, (Ke !== j || !u.scope) && ((Oe = j.getAttribute("id")) ? Oe = Oe.replace(Ur, Is) : j.setAttribute("id", Oe = _t)), ze = T(R), me = ze.length; me--;) ze[me] = (Oe ? "#" + Oe : ":scope") + " " + Zi(ze[me]);
                            qe = ze.join(",")
                        }
                        try {
                            return xn.apply(X, Ke.querySelectorAll(qe)), X
                        } catch {
                            dn(R, !0)
                        } finally {
                            Oe === _t && j.removeAttribute("id")
                        }
                    }
                }
                return z(R.replace(Ti, "$1"), j, X, de)
            }

            function Ki() {
                var R = [];

                function j(X, de) {
                    return R.push(X + " ") > p.cacheLength && delete j[R.shift()], j[X + " "] = de
                }
                return j
            }

            function fn(R) {
                return R[_t] = !0, R
            }

            function wn(R) {
                var j = ce.createElement("fieldset");
                try {
                    return !!R(j)
                } catch {
                    return !1
                } finally {
                    j.parentNode && j.parentNode.removeChild(j), j = null
                }
            }

            function Ji(R, j) {
                for (var X = R.split("|"), de = X.length; de--;) p.attrHandle[X[de]] = j
            }

            function Qi(R, j) {
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

            function Ls(R) {
                return function(j) {
                    return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === R : j.disabled === R : j.isDisabled === R || j.isDisabled !== !R && Ko(j) === R : j.disabled === R : "label" in j ? j.disabled === R : !1
                }
            }

            function On(R) {
                return fn(function(j) {
                    return j = +j, fn(function(X, de) {
                        for (var ee, me = R([], X.length, j), xe = me.length; xe--;) X[ee = me[xe]] && (X[ee] = !(de[ee] = X[ee]))
                    })
                })
            }

            function qr(R) {
                return R && typeof R.getElementsByTagName < "u" && R
            }
            u = St.support = {}, x = St.isXML = function(R) {
                var j = R && R.namespaceURI,
                    X = R && (R.ownerDocument || R).documentElement;
                return !qo.test(j || X && X.nodeName || "HTML")
            }, ne = St.setDocument = function(R) {
                var j, X, de = R ? R.ownerDocument || R : nt;
                return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, We = ce.documentElement, ot = !x(ce), nt != ce && (X = ce.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Ds, !1) : X.attachEvent && X.attachEvent("onunload", Ds)), u.scope = wn(function(ee) {
                    return We.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = wn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = wn(function(ee) {
                    return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = Ai.test(ce.getElementsByClassName), u.getById = wn(function(ee) {
                    return We.appendChild(ee).id = _t, !ce.getElementsByName || !ce.getElementsByName(_t).length
                }), u.getById ? (p.filter.ID = function(ee) {
                    var me = ee.replace(An, En);
                    return function(xe) {
                        return xe.getAttribute("id") === me
                    }
                }, p.find.ID = function(ee, me) {
                    if (typeof me.getElementById < "u" && ot) {
                        var xe = me.getElementById(ee);
                        return xe ? [xe] : []
                    }
                }) : (p.filter.ID = function(ee) {
                    var me = ee.replace(An, En);
                    return function(xe) {
                        var Oe = typeof xe.getAttributeNode < "u" && xe.getAttributeNode("id");
                        return Oe && Oe.value === me
                    }
                }, p.find.ID = function(ee, me) {
                    if (typeof me.getElementById < "u" && ot) {
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
                    if (typeof me.getElementsByClassName < "u" && ot) return me.getElementsByClassName(ee)
                }, zt = [], je = [], (u.qsa = Ai.test(ce.querySelectorAll)) && (wn(function(ee) {
                    var me;
                    We.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + mt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || je.push("\\[" + mt + "*(?:value|" + Gr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || je.push("~="), me = ce.createElement("input"), me.setAttribute("name", ""), ee.appendChild(me), ee.querySelectorAll("[name='']").length || je.push("\\[" + mt + "*name" + mt + "*=" + mt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || je.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || je.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                }), wn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var me = ce.createElement("input");
                    me.setAttribute("type", "hidden"), ee.appendChild(me).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && je.push("name" + mt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), We.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), je.push(",.*:")
                })), (u.matchesSelector = Ai.test(Nt = We.matches || We.webkitMatchesSelector || We.mozMatchesSelector || We.oMatchesSelector || We.msMatchesSelector)) && wn(function(ee) {
                    u.disconnectedMatch = Nt.call(ee, "*"), Nt.call(ee, "[s!='']:x"), zt.push("!=", zr)
                }), je = je.length && new RegExp(je.join("|")), zt = zt.length && new RegExp(zt.join("|")), j = Ai.test(We.compareDocumentPosition), hn = j || Ai.test(We.contains) ? function(ee, me) {
                    var xe = ee.nodeType === 9 ? ee.documentElement : ee,
                        Oe = me && me.parentNode;
                    return ee === Oe || !!(Oe && Oe.nodeType === 1 && (xe.contains ? xe.contains(Oe) : ee.compareDocumentPosition && ee.compareDocumentPosition(Oe) & 16))
                } : function(ee, me) {
                    if (me) {
                        for (; me = me.parentNode;)
                            if (me === ee) return !0
                    }
                    return !1
                }, Jn = j ? function(ee, me) {
                    if (ee === me) return be = !0, 0;
                    var xe = !ee.compareDocumentPosition - !me.compareDocumentPosition;
                    return xe || (xe = (ee.ownerDocument || ee) == (me.ownerDocument || me) ? ee.compareDocumentPosition(me) : 1, xe & 1 || !u.sortDetached && me.compareDocumentPosition(ee) === xe ? ee == ce || ee.ownerDocument == nt && hn(nt, ee) ? -1 : me == ce || me.ownerDocument == nt && hn(nt, me) ? 1 : le ? Zn(le, ee) - Zn(le, me) : 0 : xe & 4 ? -1 : 1)
                } : function(ee, me) {
                    if (ee === me) return be = !0, 0;
                    var xe, Oe = 0,
                        Le = ee.parentNode,
                        ze = me.parentNode,
                        qe = [ee],
                        Ke = [me];
                    if (!Le || !ze) return ee == ce ? -1 : me == ce ? 1 : Le ? -1 : ze ? 1 : le ? Zn(le, ee) - Zn(le, me) : 0;
                    if (Le === ze) return Qi(ee, me);
                    for (xe = ee; xe = xe.parentNode;) qe.unshift(xe);
                    for (xe = me; xe = xe.parentNode;) Ke.unshift(xe);
                    for (; qe[Oe] === Ke[Oe];) Oe++;
                    return Oe ? Qi(qe[Oe], Ke[Oe]) : qe[Oe] == nt ? -1 : Ke[Oe] == nt ? 1 : 0
                }), ce
            }, St.matches = function(R, j) {
                return St(R, null, null, j)
            }, St.matchesSelector = function(R, j) {
                if (ne(R), u.matchesSelector && ot && !dn[j + " "] && (!zt || !zt.test(j)) && (!je || !je.test(j))) try {
                    var X = Nt.call(R, j);
                    if (X || u.disconnectedMatch || R.document && R.document.nodeType !== 11) return X
                } catch {
                    dn(j, !0)
                }
                return St(j, ce, null, [R]).length > 0
            }, St.contains = function(R, j) {
                return (R.ownerDocument || R) != ce && ne(R), hn(R, j)
            }, St.attr = function(R, j) {
                (R.ownerDocument || R) != ce && ne(R);
                var X = p.attrHandle[j.toLowerCase()],
                    de = X && Qn.call(p.attrHandle, j.toLowerCase()) ? X(R, j, !ot) : void 0;
                return de !== void 0 ? de : u.attributes || !ot ? R.getAttribute(j) : (de = R.getAttributeNode(j)) && de.specified ? de.value : null
            }, St.escape = function(R) {
                return (R + "").replace(Ur, Is)
            }, St.error = function(R) {
                throw new Error("Syntax error, unrecognized expression: " + R)
            }, St.uniqueSort = function(R) {
                var j, X = [],
                    de = 0,
                    ee = 0;
                if (be = !u.detectDuplicates, le = !u.sortStable && R.slice(0), R.sort(Jn), be) {
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
                createPseudo: fn,
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
                        return R[1] = R[1].replace(An, En), R[3] = (R[3] || R[4] || R[5] || "").replace(An, En), R[2] === "~=" && (R[3] = " " + R[3] + " "), R.slice(0, 4)
                    },
                    CHILD: function(R) {
                        return R[1] = R[1].toLowerCase(), R[1].slice(0, 3) === "nth" ? (R[3] || St.error(R[0]), R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === "even" || R[3] === "odd")), R[5] = +(R[7] + R[8] || R[3] === "odd")) : R[3] && St.error(R[0]), R
                    },
                    PSEUDO: function(R) {
                        var j, X = !R[6] && R[2];
                        return Yi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : X && Ho.test(X) && (j = T(X, !0)) && (j = X.indexOf(")", X.length - j) - X.length) && (R[0] = R[0].slice(0, j), R[2] = X.slice(0, j)), R.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(R) {
                        var j = R.replace(An, En).toLowerCase();
                        return R === "*" ? function() {
                            return !0
                        } : function(X) {
                            return X.nodeName && X.nodeName.toLowerCase() === j
                        }
                    },
                    CLASS: function(R) {
                        var j = Dt[R + " "];
                        return j || (j = new RegExp("(^|" + mt + ")" + R + "(" + mt + "|$)")) && Dt(R, function(X) {
                            return j.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(R, j, X) {
                        return function(de) {
                            var ee = St.attr(de, R);
                            return ee == null ? j === "!=" : j ? (ee += "", j === "=" ? ee === X : j === "!=" ? ee !== X : j === "^=" ? X && ee.indexOf(X) === 0 : j === "*=" ? X && ee.indexOf(X) > -1 : j === "$=" ? X && ee.slice(-X.length) === X : j === "~=" ? (" " + ee.replace(As, " ") + " ").indexOf(X) > -1 : j === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                        }
                    },
                    CHILD: function(R, j, X, de, ee) {
                        var me = R.slice(0, 3) !== "nth",
                            xe = R.slice(-4) !== "last",
                            Oe = j === "of-type";
                        return de === 1 && ee === 0 ? function(Le) {
                            return !!Le.parentNode
                        } : function(Le, ze, qe) {
                            var Ke, dt, At, Ye, Ht, Zt, pn = me !== xe ? "nextSibling" : "previousSibling",
                                Ot = Le.parentNode,
                                c = Oe && Le.nodeName.toLowerCase(),
                                h = !qe && !Oe,
                                b = !1;
                            if (Ot) {
                                if (me) {
                                    for (; pn;) {
                                        for (Ye = Le; Ye = Ye[pn];)
                                            if (Oe ? Ye.nodeName.toLowerCase() === c : Ye.nodeType === 1) return !1;
                                        Zt = pn = R === "only" && !Zt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Zt = [xe ? Ot.firstChild : Ot.lastChild], xe && h) {
                                    for (Ye = Ot, At = Ye[_t] || (Ye[_t] = {}), dt = At[Ye.uniqueID] || (At[Ye.uniqueID] = {}), Ke = dt[R] || [], Ht = Ke[0] === an && Ke[1], b = Ht && Ke[2], Ye = Ht && Ot.childNodes[Ht]; Ye = ++Ht && Ye && Ye[pn] || (b = Ht = 0) || Zt.pop();)
                                        if (Ye.nodeType === 1 && ++b && Ye === Le) {
                                            dt[R] = [an, Ht, b];
                                            break
                                        }
                                } else if (h && (Ye = Le, At = Ye[_t] || (Ye[_t] = {}), dt = At[Ye.uniqueID] || (At[Ye.uniqueID] = {}), Ke = dt[R] || [], Ht = Ke[0] === an && Ke[1], b = Ht), b === !1)
                                    for (;
                                        (Ye = ++Ht && Ye && Ye[pn] || (b = Ht = 0) || Zt.pop()) && !((Oe ? Ye.nodeName.toLowerCase() === c : Ye.nodeType === 1) && ++b && (h && (At = Ye[_t] || (Ye[_t] = {}), dt = At[Ye.uniqueID] || (At[Ye.uniqueID] = {}), dt[R] = [an, b]), Ye === Le)););
                                return b -= ee, b === de || b % de === 0 && b / de >= 0
                            }
                        }
                    },
                    PSEUDO: function(R, j) {
                        var X, de = p.pseudos[R] || p.setFilters[R.toLowerCase()] || St.error("unsupported pseudo: " + R);
                        return de[_t] ? de(j) : de.length > 1 ? (X = [R, R, "", j], p.setFilters.hasOwnProperty(R.toLowerCase()) ? fn(function(ee, me) {
                            for (var xe, Oe = de(ee, j), Le = Oe.length; Le--;) xe = Zn(ee, Oe[Le]), ee[xe] = !(me[xe] = Oe[Le])
                        }) : function(ee) {
                            return de(ee, 0, X)
                        }) : de
                    }
                },
                pseudos: {
                    not: fn(function(R) {
                        var j = [],
                            X = [],
                            de = G(R.replace(Ti, "$1"));
                        return de[_t] ? fn(function(ee, me, xe, Oe) {
                            for (var Le, ze = de(ee, null, Oe, []), qe = ee.length; qe--;)(Le = ze[qe]) && (ee[qe] = !(me[qe] = Le))
                        }) : function(ee, me, xe) {
                            return j[0] = ee, de(j, null, xe, X), j[0] = null, !X.pop()
                        }
                    }),
                    has: fn(function(R) {
                        return function(j) {
                            return St(R, j).length > 0
                        }
                    }),
                    contains: fn(function(R) {
                        return R = R.replace(An, En),
                            function(j) {
                                return (j.textContent || w(j)).indexOf(R) > -1
                            }
                    }),
                    lang: fn(function(R) {
                        return Uo.test(R || "") || St.error("unsupported lang: " + R), R = R.replace(An, En).toLowerCase(),
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
                        return R === We
                    },
                    focus: function(R) {
                        return R === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(R.type || R.href || ~R.tabIndex)
                    },
                    enabled: Ls(!1),
                    disabled: Ls(!0),
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
                    first: On(function() {
                        return [0]
                    }),
                    last: On(function(R, j) {
                        return [j - 1]
                    }),
                    eq: On(function(R, j, X) {
                        return [X < 0 ? X + j : X]
                    }),
                    even: On(function(R, j) {
                        for (var X = 0; X < j; X += 2) R.push(X);
                        return R
                    }),
                    odd: On(function(R, j) {
                        for (var X = 1; X < j; X += 2) R.push(X);
                        return R
                    }),
                    lt: On(function(R, j, X) {
                        for (var de = X < 0 ? X + j : X > j ? j : X; --de >= 0;) R.push(de);
                        return R
                    }),
                    gt: On(function(R, j, X) {
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

            function Ms() {}
            Ms.prototype = p.filters = p.pseudos, p.setFilters = new Ms, T = St.tokenize = function(R, j) {
                var X, de, ee, me, xe, Oe, Le, ze = ki[R + " "];
                if (ze) return j ? 0 : ze.slice(0);
                for (xe = R, Oe = [], Le = p.preFilter; xe;) {
                    (!X || (de = Os.exec(xe))) && (de && (xe = xe.slice(de[0].length) || xe), Oe.push(ee = [])), X = !1, (de = Rs.exec(xe)) && (X = de.shift(), ee.push({
                        value: X,
                        type: de[0].replace(Ti, " ")
                    }), xe = xe.slice(X.length));
                    for (me in p.filter)(de = Yi[me].exec(xe)) && (!Le[me] || (de = Le[me](de))) && (X = de.shift(), ee.push({
                        value: X,
                        type: me,
                        matches: de
                    }), xe = xe.slice(X.length));
                    if (!X) break
                }
                return j ? xe.length : xe ? St.error(R) : ki(R, Oe).slice(0)
            };

            function Zi(R) {
                for (var j = 0, X = R.length, de = ""; j < X; j++) de += R[j].value;
                return de
            }

            function er(R, j, X) {
                var de = j.dir,
                    ee = j.next,
                    me = ee || de,
                    xe = X && me === "parentNode",
                    Oe = pt++;
                return j.first ? function(Le, ze, qe) {
                    for (; Le = Le[de];)
                        if (Le.nodeType === 1 || xe) return R(Le, ze, qe);
                    return !1
                } : function(Le, ze, qe) {
                    var Ke, dt, At, Ye = [an, Oe];
                    if (qe) {
                        for (; Le = Le[de];)
                            if ((Le.nodeType === 1 || xe) && R(Le, ze, qe)) return !0
                    } else
                        for (; Le = Le[de];)
                            if (Le.nodeType === 1 || xe)
                                if (At = Le[_t] || (Le[_t] = {}), dt = At[Le.uniqueID] || (At[Le.uniqueID] = {}), ee && ee === Le.nodeName.toLowerCase()) Le = Le[de] || Le;
                                else {
                                    if ((Ke = dt[me]) && Ke[0] === an && Ke[1] === Oe) return Ye[2] = Ke[2];
                                    if (dt[me] = Ye, Ye[2] = R(Le, ze, qe)) return !0
                                } return !1
                }
            }

            function tr(R) {
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

            function nr(R, j, X, de, ee) {
                for (var me, xe = [], Oe = 0, Le = R.length, ze = j != null; Oe < Le; Oe++)(me = R[Oe]) && (!X || X(me, de, ee)) && (xe.push(me), ze && j.push(Oe));
                return xe
            }

            function Wr(R, j, X, de, ee, me) {
                return de && !de[_t] && (de = Wr(de)), ee && !ee[_t] && (ee = Wr(ee, me)), fn(function(xe, Oe, Le, ze) {
                    var qe, Ke, dt, At = [],
                        Ye = [],
                        Ht = Oe.length,
                        Zt = xe || Zo(j || "*", Le.nodeType ? [Le] : Le, []),
                        pn = R && (xe || !j) ? nr(Zt, At, R, Le, ze) : Zt,
                        Ot = X ? ee || (xe ? R : Ht || de) ? [] : Oe : pn;
                    if (X && X(pn, Ot, Le, ze), de)
                        for (qe = nr(Ot, Ye), de(qe, [], Le, ze), Ke = qe.length; Ke--;)(dt = qe[Ke]) && (Ot[Ye[Ke]] = !(pn[Ye[Ke]] = dt));
                    if (xe) {
                        if (ee || R) {
                            if (ee) {
                                for (qe = [], Ke = Ot.length; Ke--;)(dt = Ot[Ke]) && qe.push(pn[Ke] = dt);
                                ee(null, Ot = [], qe, ze)
                            }
                            for (Ke = Ot.length; Ke--;)(dt = Ot[Ke]) && (qe = ee ? Zn(xe, dt) : At[Ke]) > -1 && (xe[qe] = !(Oe[qe] = dt))
                        }
                    } else Ot = nr(Ot === Oe ? Ot.splice(Ht, Ot.length) : Ot), ee ? ee(null, Oe, Ot, ze) : xn.apply(Oe, Ot)
                })
            }

            function Xr(R) {
                for (var j, X, de, ee = R.length, me = p.relative[R[0].type], xe = me || p.relative[" "], Oe = me ? 1 : 0, Le = er(function(Ke) {
                        return Ke === j
                    }, xe, !0), ze = er(function(Ke) {
                        return Zn(j, Ke) > -1
                    }, xe, !0), qe = [function(Ke, dt, At) {
                        var Ye = !me && (At || dt !== Z) || ((j = dt).nodeType ? Le(Ke, dt, At) : ze(Ke, dt, At));
                        return j = null, Ye
                    }]; Oe < ee; Oe++)
                    if (X = p.relative[R[Oe].type]) qe = [er(tr(qe), X)];
                    else {
                        if (X = p.filter[R[Oe].type].apply(null, R[Oe].matches), X[_t]) {
                            for (de = ++Oe; de < ee && !p.relative[R[de].type]; de++);
                            return Wr(Oe > 1 && tr(qe), Oe > 1 && Zi(R.slice(0, Oe - 1).concat({
                                value: R[Oe - 2].type === " " ? "*" : ""
                            })).replace(Ti, "$1"), X, Oe < de && Xr(R.slice(Oe, de)), de < ee && Xr(R = R.slice(de)), de < ee && Zi(R))
                        }
                        qe.push(X)
                    } return tr(qe)
            }

            function Ps(R, j) {
                var X = j.length > 0,
                    de = R.length > 0,
                    ee = function(me, xe, Oe, Le, ze) {
                        var qe, Ke, dt, At = 0,
                            Ye = "0",
                            Ht = me && [],
                            Zt = [],
                            pn = Z,
                            Ot = me || de && p.find.TAG("*", ze),
                            c = an += pn == null ? 1 : Math.random() || .1,
                            h = Ot.length;
                        for (ze && (Z = xe == ce || xe || ze); Ye !== h && (qe = Ot[Ye]) != null; Ye++) {
                            if (de && qe) {
                                for (Ke = 0, !xe && qe.ownerDocument != ce && (ne(qe), Oe = !ot); dt = R[Ke++];)
                                    if (dt(qe, xe || ce, Oe)) {
                                        Le.push(qe);
                                        break
                                    } ze && (an = c)
                            }
                            X && ((qe = !dt && qe) && At--, me && Ht.push(qe))
                        }
                        if (At += Ye, X && Ye !== At) {
                            for (Ke = 0; dt = j[Ke++];) dt(Ht, Zt, xe, Oe);
                            if (me) {
                                if (At > 0)
                                    for (; Ye--;) Ht[Ye] || Zt[Ye] || (Zt[Ye] = Ln.call(Le));
                                Zt = nr(Zt)
                            }
                            xn.apply(Le, Zt), ze && !me && Zt.length > 0 && At + j.length > 1 && St.uniqueSort(Le)
                        }
                        return ze && (an = c, Z = pn), Ht
                    };
                return X ? fn(ee) : ee
            }
            return G = St.compile = function(R, j) {
                var X, de = [],
                    ee = [],
                    me = Xi[R + " "];
                if (!me) {
                    for (j || (j = T(R)), X = j.length; X--;) me = Xr(j[X]), me[_t] ? de.push(me) : ee.push(me);
                    me = Xi(R, Ps(ee, de)), me.selector = R
                }
                return me
            }, z = St.select = function(R, j, X, de) {
                var ee, me, xe, Oe, Le, ze = typeof R == "function" && R,
                    qe = !de && T(R = ze.selector || R);
                if (X = X || [], qe.length === 1) {
                    if (me = qe[0] = qe[0].slice(0), me.length > 2 && (xe = me[0]).type === "ID" && j.nodeType === 9 && ot && p.relative[me[1].type]) {
                        if (j = (p.find.ID(xe.matches[0].replace(An, En), j) || [])[0], j) ze && (j = j.parentNode);
                        else return X;
                        R = R.slice(me.shift().value.length)
                    }
                    for (ee = Yi.needsContext.test(R) ? 0 : me.length; ee-- && (xe = me[ee], !p.relative[Oe = xe.type]);)
                        if ((Le = p.find[Oe]) && (de = Le(xe.matches[0].replace(An, En), Hr.test(me[0].type) && qr(j.parentNode) || j))) {
                            if (me.splice(ee, 1), R = de.length && Zi(me), !R) return xn.apply(X, de), X;
                            break
                        }
                }
                return (ze || G(R, qe))(de, j, !ot, X, !j || Hr.test(R) && qr(j.parentNode) || j), X
            }, u.sortStable = _t.split("").sort(Jn).join("") === _t, u.detectDuplicates = !!be, ne(), u.sortDetached = wn(function(R) {
                return R.compareDocumentPosition(ce.createElement("fieldset")) & 1
            }), wn(function(R) {
                return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
            }) || Ji("type|href|height|width", function(R, j, X) {
                if (!X) return R.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !wn(function(R) {
                return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
            })) && Ji("value", function(R, j, X) {
                if (!X && R.nodeName.toLowerCase() === "input") return R.defaultValue
            }), wn(function(R) {
                return R.getAttribute("disabled") == null
            }) || Ji(Gr, function(R, j, X) {
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
            $e = d.expr.match.needsContext;

        function K(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var Ge = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

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
                return !!H(this, typeof r == "string" && $e.test(r) ? d(r) : r || [], !1).length
            }
        });
        var oe, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            we = d.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || oe, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Te.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), Ge.test(p[1]) && d.isPlainObject(s))
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
                if (!$e.test(r)) {
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
                return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (K(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
            }
        }, function(r, s) {
            d.fn[r] = function(u, p) {
                var w = d.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = d.filter(p, w)), this.length > 1 && (ue[r] || d.uniqueSort(w), ye.test(r) && w.reverse()), this.pushStack(w)
            }
        });
        var ke = /[^\x20\t\r\n\f]+/g;

        function Fe(r) {
            var s = {};
            return d.each(r.match(ke) || [], function(u, p) {
                s[p] = !0
            }), s
        }
        d.Callbacks = function(r) {
            r = typeof r == "string" ? Fe(r) : d.extend({}, r);
            var s, u, p, w, x = [],
                T = [],
                G = -1,
                z = function() {
                    for (w = w || r.once, p = s = !0; T.length; G = -1)
                        for (u = T.shift(); ++G < x.length;) x[G].apply(u[0], u[1]) === !1 && r.stopOnFalse && (G = x.length, u = !1);
                    r.memory || (u = !1), s = !1, w && (u ? x = [] : x = "")
                },
                Z = {
                    add: function() {
                        return x && (u && !s && (G = x.length - 1, T.push(u)), function le(be) {
                            d.each(be, function(ne, ce) {
                                re(ce) ? (!r.unique || !Z.has(ce)) && x.push(ce) : ce && ce.length && se(ce) !== "string" && le(ce)
                            })
                        }(arguments), u && !s && z()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(le, be) {
                            for (var ne;
                                (ne = d.inArray(be, x, ne)) > -1;) x.splice(ne, 1), ne <= G && G--
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
                        return w || (be = be || [], be = [le, be.slice ? be.slice() : be], T.push(be), s || z()), this
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

        function ft(r) {
            throw r
        }

        function $t(r, s, u, p) {
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
                                d.each(s, function(G, z) {
                                    var Z = re(x[z[4]]) && x[z[4]];
                                    w[z[1]](function() {
                                        var le = Z && Z.apply(this, arguments);
                                        le && re(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[z[0] + "With"](this, Z ? [le] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, G) {
                            var z = 0;

                            function Z(le, be, ne, ce) {
                                return function() {
                                    var We = this,
                                        ot = arguments,
                                        je = function() {
                                            var Nt, hn;
                                            if (!(le < z)) {
                                                if (Nt = ne.apply(We, ot), Nt === be.promise()) throw new TypeError("Thenable self-resolution");
                                                hn = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, re(hn) ? ce ? hn.call(Nt, Z(z, be, Qe, ce), Z(z, be, ft, ce)) : (z++, hn.call(Nt, Z(z, be, Qe, ce), Z(z, be, ft, ce), Z(z, be, Qe, be.notifyWith))) : (ne !== Qe && (We = void 0, ot = [Nt]), (ce || be.resolveWith)(We, ot))
                                            }
                                        },
                                        zt = ce ? je : function() {
                                            try {
                                                je()
                                            } catch (Nt) {
                                                d.Deferred.exceptionHook && d.Deferred.exceptionHook(Nt, zt.stackTrace), le + 1 >= z && (ne !== ft && (We = void 0, ot = [Nt]), be.rejectWith(We, ot))
                                            }
                                        };
                                    le ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return d.Deferred(function(le) {
                                s[0][3].add(Z(0, le, re(G) ? G : Qe, le.notifyWith)), s[1][3].add(Z(0, le, re(x) ? x : Qe)), s[2][3].add(Z(0, le, re(T) ? T : ft))
                            }).promise()
                        },
                        promise: function(x) {
                            return x != null ? d.extend(x, p) : p
                        }
                    },
                    w = {};
                return d.each(s, function(x, T) {
                    var G = T[2],
                        z = T[5];
                    p[T[1]] = G.add, z && G.add(function() {
                        u = z
                    }, s[3 - x][2].disable, s[3 - x][3].disable, s[0][2].lock, s[0][3].lock), G.add(T[3].fire), w[T[0]] = function() {
                        return w[T[0] + "With"](this === w ? void 0 : this, arguments), this
                    }, w[T[0] + "With"] = G.fireWith
                }), p.promise(w), r && r.call(w, w), w
            },
            when: function(r) {
                var s = arguments.length,
                    u = s,
                    p = Array(u),
                    w = f.call(arguments),
                    x = d.Deferred(),
                    T = function(G) {
                        return function(z) {
                            p[G] = this, w[G] = arguments.length > 1 ? f.call(arguments) : z, --s || x.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && ($t(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(w[u] && w[u].then))) return x.then();
                for (; u--;) $t(w[u], T(u), x.reject);
                return x.promise()
            }
        });
        var qt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        d.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && qt.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
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
                var G = 0,
                    z = r.length,
                    Z = u == null;
                if (se(u) === "object") {
                    w = !0;
                    for (G in u) g(r, s, G, u[G], !0, x, T)
                } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(le, be, ne) {
                        return Z.call(d(le), ne)
                    })), s))
                    for (; G < z; G++) s(r[G], u, T ? p : p.call(r[G], G, s(r[G], u)));
                return w ? r : Z ? s.call(r) : z ? s(r[0], u) : x
            },
            _ = /^-ms-/,
            O = /-([a-z])/g;

        function M(r, s) {
            return s.toUpperCase()
        }

        function N(r) {
            return r.replace(_, "ms-").replace(O, M)
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
            Ie = new Se,
            De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rt = /[A-Z]/g;

        function xt(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : De.test(r) ? JSON.parse(r) : r
        }

        function sn(r, s, u) {
            var p;
            if (u === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(rt, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                    try {
                        u = xt(u)
                    } catch {}
                    Ie.set(r, s, u)
                } else u = void 0;
            return u
        }
        d.extend({
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
        }), d.fn.extend({
            data: function(r, s) {
                var u, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = Ie.get(x), x.nodeType === 1 && !he.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = N(p.slice(5)), sn(x, p, w[p])));
                        he.set(x, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    Ie.set(this, r)
                }) : g(this, function(G) {
                    var z;
                    if (x && G === void 0) return z = Ie.get(x, r), z !== void 0 || (z = sn(x, r), z !== void 0) ? z : void 0;
                    this.each(function() {
                        Ie.set(this, r, G)
                    })
                }, null, s, arguments.length > 1, null, !0)
            },
            removeData: function(r) {
                return this.each(function() {
                    Ie.remove(this, r)
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
                    G = function() {
                        --p || w.resolveWith(x, [x])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = he.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(G));
                return G(), w.promise(s)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            wt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            Ct = ["Top", "Right", "Bottom", "Left"],
            Qt = P.documentElement,
            Ze = function(r) {
                return d.contains(r.ownerDocument, r)
            },
            Pt = {
                composed: !0
            };
        Qt.getRootNode && (Ze = function(r) {
            return d.contains(r.ownerDocument, r) || r.getRootNode(Pt) === r.ownerDocument
        });
        var F = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Ze(r) && d.css(r, "display") === "none"
        };

        function V(r, s, u, p) {
            var w, x, T = 20,
                G = p ? function() {
                    return p.cur()
                } : function() {
                    return d.css(r, s, "")
                },
                z = G(),
                Z = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                le = r.nodeType && (d.cssNumber[s] || Z !== "px" && +z) && wt.exec(d.css(r, s));
            if (le && le[3] !== Z) {
                for (z = z / 2, Z = Z || le[3], le = +z || 1; T--;) d.style(r, s, le + Z), (1 - x) * (1 - (x = G() / z || .5)) <= 0 && (T = 0), le = le / x;
                le = le * 2, d.style(r, s, le + Z), u = u || []
            }
            return u && (le = +le || +z || 0, w = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = w)), w
        }
        var W = {};

        function L(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = W[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), W[p] = w, w)
        }

        function U(r, s) {
            for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = he.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && F(p) && (w[x] = L(p))) : u !== "none" && (w[x] = "none", he.set(p, "display", u)));
            for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
            return r
        }
        d.fn.extend({
            show: function() {
                return U(this, !0)
            },
            hide: function() {
                return U(this)
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
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), Y.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", Y.option = !!s.lastChild
        })();
        var Ne = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ne.tbody = Ne.tfoot = Ne.colgroup = Ne.caption = Ne.thead, Ne.th = Ne.td, Y.option || (Ne.optgroup = Ne.option = [1, "<select multiple='multiple'>", "</select>"]);

        function gt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && K(r, s) ? d.merge([r], u) : u
        }

        function jt(r, s) {
            for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
        }
        var Je = /<|&#?\w+;/;

        function In(r, s, u, p, w) {
            for (var x, T, G, z, Z, le, be = s.createDocumentFragment(), ne = [], ce = 0, We = r.length; ce < We; ce++)
                if (x = r[ce], x || x === 0)
                    if (se(x) === "object") d.merge(ne, x.nodeType ? [x] : x);
                    else if (!Je.test(x)) ne.push(s.createTextNode(x));
            else {
                for (T = T || be.appendChild(s.createElement("div")), G = (pe.exec(x) || ["", ""])[1].toLowerCase(), z = Ne[G] || Ne._default, T.innerHTML = z[1] + d.htmlPrefilter(x) + z[2], le = z[0]; le--;) T = T.lastChild;
                d.merge(ne, T.childNodes), T = be.firstChild, T.textContent = ""
            }
            for (be.textContent = "", ce = 0; x = ne[ce++];) {
                if (p && d.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (Z = Ze(x), T = gt(be.appendChild(x), "script"), Z && jt(T), u)
                    for (le = 0; x = T[le++];) Ve.test(x.type || "") && u.push(x)
            }
            return be
        }
        var Pn = /^([^.]*)(?:\.(.+)|)/;

        function st() {
            return !0
        }

        function Dn() {
            return !1
        }

        function vi(r, s) {
            return r === kr() == (s === "focus")
        }

        function kr() {
            try {
                return P.activeElement
            } catch {}
        }

        function Tn(r, s, u, p, w, x) {
            var T, G;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (G in s) Tn(r, G, u, p, s[G], x);
                return r
            }
            if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Dn;
            else if (!w) return r;
            return x === 1 && (T = w, w = function(z) {
                return d().off(z), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = d.guid++)), r.each(function() {
                d.event.add(this, s, w, p, u)
            })
        }
        d.event = {
            global: {},
            add: function(r, s, u, p, w) {
                var x, T, G, z, Z, le, be, ne, ce, We, ot, je = he.get(r);
                if (!!te(r))
                    for (u.handler && (x = u, u = x.handler, w = x.selector), w && d.find.matchesSelector(Qt, w), u.guid || (u.guid = d.guid++), (z = je.events) || (z = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(zt) {
                            return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(ke) || [""], Z = s.length; Z--;) G = Pn.exec(s[Z]) || [], ce = ot = G[1], We = (G[2] || "").split(".").sort(), ce && (be = d.event.special[ce] || {}, ce = (w ? be.delegateType : be.bindType) || ce, be = d.event.special[ce] || {}, le = d.extend({
                        type: ce,
                        origType: ot,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && d.expr.match.needsContext.test(w),
                        namespace: We.join(".")
                    }, x), (ne = z[ce]) || (ne = z[ce] = [], ne.delegateCount = 0, (!be.setup || be.setup.call(r, p, We, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), be.add && (be.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), d.event.global[ce] = !0)
            },
            remove: function(r, s, u, p, w) {
                var x, T, G, z, Z, le, be, ne, ce, We, ot, je = he.hasData(r) && he.get(r);
                if (!(!je || !(z = je.events))) {
                    for (s = (s || "").match(ke) || [""], Z = s.length; Z--;) {
                        if (G = Pn.exec(s[Z]) || [], ce = ot = G[1], We = (G[2] || "").split(".").sort(), !ce) {
                            for (ce in z) d.event.remove(r, ce + s[Z], u, p, !0);
                            continue
                        }
                        for (be = d.event.special[ce] || {}, ce = (p ? be.delegateType : be.bindType) || ce, ne = z[ce] || [], G = G[2] && new RegExp("(^|\\.)" + We.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) le = ne[x], (w || ot === le.origType) && (!u || u.guid === le.guid) && (!G || G.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(x, 1), le.selector && ne.delegateCount--, be.remove && be.remove.call(r, le));
                        T && !ne.length && ((!be.teardown || be.teardown.call(r, We, je.handle) === !1) && d.removeEvent(r, ce, je.handle), delete z[ce])
                    }
                    d.isEmptyObject(z) && he.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, x, T, G = new Array(arguments.length),
                    z = d.event.fix(r),
                    Z = (he.get(this, "events") || Object.create(null))[z.type] || [],
                    le = d.event.special[z.type] || {};
                for (G[0] = z, s = 1; s < arguments.length; s++) G[s] = arguments[s];
                if (z.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, z) === !1)) {
                    for (T = d.event.handlers.call(this, z, Z), s = 0;
                        (w = T[s++]) && !z.isPropagationStopped();)
                        for (z.currentTarget = w.elem, u = 0;
                            (x = w.handlers[u++]) && !z.isImmediatePropagationStopped();)(!z.rnamespace || x.namespace === !1 || z.rnamespace.test(x.namespace)) && (z.handleObj = x, z.data = x.data, p = ((d.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, G), p !== void 0 && (z.result = p) === !1 && (z.preventDefault(), z.stopPropagation()));
                    return le.postDispatch && le.postDispatch.call(this, z), z.result
                }
            },
            handlers: function(r, s) {
                var u, p, w, x, T, G = [],
                    z = s.delegateCount,
                    Z = r.target;
                if (z && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; Z !== this; Z = Z.parentNode || this)
                        if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                            for (x = [], T = {}, u = 0; u < z; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? d(w, this).index(Z) > -1 : d.find(w, this, null, [Z]).length), T[w] && x.push(p);
                            x.length && G.push({
                                elem: Z,
                                handlers: x
                            })
                        }
                }
                return Z = this, z < s.length && G.push({
                    elem: Z,
                    handlers: s.slice(z)
                }), G
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
                        return fe.test(s.type) && s.click && K(s, "input") && on(s, "click", st), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return fe.test(s.type) && s.click && K(s, "input") && on(s, "click"), !0
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

        function on(r, s, u) {
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
                    return on(this, r, vi), !1
                },
                trigger: function() {
                    return on(this, r), !0
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
                return Tn(this, r, s, u, p)
            },
            one: function(r, s, u, p) {
                return Tn(this, r, s, u, p, 1)
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
        var Tr = /<script|<style|<link/i,
            Ar = /checked\s*(?:[^=]|=\s*.checked.)/i,
            yi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Fi(r, s) {
            return K(r, "table") && K(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
        }

        function wi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function bi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function ji(r, s) {
            var u, p, w, x, T, G, z;
            if (s.nodeType === 1) {
                if (he.hasData(r) && (x = he.get(r), z = x.events, z)) {
                    he.remove(s, "handle events");
                    for (w in z)
                        for (u = 0, p = z[w].length; u < p; u++) d.event.add(s, w, z[w][u])
                }
                Ie.hasData(r) && (T = Ie.access(r), G = d.extend({}, T), Ie.set(s, G))
            }
        }

        function Gi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function vn(r, s, u, p) {
            s = v(s);
            var w, x, T, G, z, Z, le = 0,
                be = r.length,
                ne = be - 1,
                ce = s[0],
                We = re(ce);
            if (We || be > 1 && typeof ce == "string" && !Y.checkClone && Ar.test(ce)) return r.each(function(ot) {
                var je = r.eq(ot);
                We && (s[0] = ce.call(this, ot, je.html())), vn(je, s, u, p)
            });
            if (be && (w = In(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = d.map(gt(w, "script"), wi), G = T.length; le < be; le++) z = w, le !== ne && (z = d.clone(z, !0, !0), G && d.merge(T, gt(z, "script"))), u.call(r[le], z, le);
                if (G)
                    for (Z = T[T.length - 1].ownerDocument, d.map(T, bi), le = 0; le < G; le++) z = T[le], Ve.test(z.type || "") && !he.access(z, "globalEval") && d.contains(Z, z) && (z.src && (z.type || "").toLowerCase() !== "module" ? d._evalUrl && !z.noModule && d._evalUrl(z.src, {
                        nonce: z.nonce || z.getAttribute("nonce")
                    }, Z) : ae(z.textContent.replace(yi, ""), z, Z))
            }
            return r
        }

        function zi(r, s, u) {
            for (var p, w = s ? d.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !u && p.nodeType === 1 && d.cleanData(gt(p)), p.parentNode && (u && Ze(p) && jt(gt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        d.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, x, T, G = r.cloneNode(!0),
                    z = Ze(r);
                if (!Y.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                    for (T = gt(G), x = gt(r), p = 0, w = x.length; p < w; p++) Gi(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || gt(r), T = T || gt(G), p = 0, w = x.length; p < w; p++) ji(x[p], T[p]);
                    else ji(r, G);
                return T = gt(G, "script"), T.length > 0 && jt(T, !z && gt(r, "script")), G
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
                        u[Ie.expando] && (u[Ie.expando] = void 0)
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
                return vn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Fi(this, r);
                        s.appendChild(r)
                    }
                })
            },
            prepend: function() {
                return vn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Fi(this, r);
                        s.insertBefore(r, s.firstChild)
                    }
                })
            },
            before: function() {
                return vn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this)
                })
            },
            after: function() {
                return vn(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this.nextSibling)
                })
            },
            empty: function() {
                for (var r, s = 0;
                    (r = this[s]) != null; s++) r.nodeType === 1 && (d.cleanData(gt(r, !1)), r.textContent = "");
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
                    if (typeof s == "string" && !Tr.test(s) && !Ne[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = d.htmlPrefilter(s);
                        try {
                            for (; p < w; p++) u = this[p] || {}, u.nodeType === 1 && (d.cleanData(gt(u, !1)), u.innerHTML = s);
                            u = 0
                        } catch {}
                    }
                    u && this.empty().append(s)
                }, null, r, arguments.length)
            },
            replaceWith: function() {
                var r = [];
                return vn(this, arguments, function(s) {
                    var u = this.parentNode;
                    d.inArray(this, r) < 0 && (d.cleanData(gt(this)), u && u.replaceChild(s, this))
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
                for (var p, w = [], x = d(u), T = x.length - 1, G = 0; G <= T; G++) p = G === T ? this : this.clone(!0), d(x[G])[s](p), S.apply(w, p.get());
                return this.pushStack(w)
            }
        });
        var Ci = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            Hn = function(r) {
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
            xi = new RegExp(Ct.join("|"), "i");
        (function() {
            function r() {
                if (!!Z) {
                    z.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Qt.appendChild(z).appendChild(Z);
                    var le = e.getComputedStyle(Z);
                    u = le.top !== "1%", G = s(le.marginLeft) === 12, Z.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Qt.removeChild(z), Z = null
                }
            }

            function s(le) {
                return Math.round(parseFloat(le))
            }
            var u, p, w, x, T, G, z = P.createElement("div"),
                Z = P.createElement("div");
            !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = Z.style.backgroundClip === "content-box", d.extend(Y, {
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
                    return r(), G
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

        function tt(r, s, u) {
            var p, w, x, T, G = r.style;
            return u = u || Hn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Ze(r) && (T = d.style(r, s)), !Y.pixelBoxStyles() && Ci.test(T) && xi.test(s) && (p = G.width, w = G.minWidth, x = G.maxWidth, G.minWidth = G.maxWidth = G.width = T, T = u.width, G.width = p, G.minWidth = w, G.maxWidth = x)), T !== void 0 ? T + "" : T
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
        var Xe = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            Yt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Un = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Vn(r, s, u) {
            var p = wt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function qn(r, s, u, p, w, x) {
            var T = s === "width" ? 1 : 0,
                G = 0,
                z = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (z += d.css(r, u + Ct[T], !0, w)), p ? (u === "content" && (z -= d.css(r, "padding" + Ct[T], !0, w)), u !== "margin" && (z -= d.css(r, "border" + Ct[T] + "Width", !0, w))) : (z += d.css(r, "padding" + Ct[T], !0, w), u !== "padding" ? z += d.css(r, "border" + Ct[T] + "Width", !0, w) : G += d.css(r, "border" + Ct[T] + "Width", !0, w));
            return !p && x >= 0 && (z += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - z - G - .5)) || 0), z
        }

        function Or(r, s, u) {
            var p = Hn(r),
                w = !Y.boxSizingReliable() || u,
                x = w && d.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                G = tt(r, s, p),
                z = "offset" + s[0].toUpperCase() + s.slice(1);
            if (Ci.test(G)) {
                if (!u) return G;
                G = "auto"
            }
            return (!Y.boxSizingReliable() && x || !Y.reliableTrDimensions() && K(r, "tr") || G === "auto" || !parseFloat(G) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = d.css(r, "boxSizing", !1, p) === "border-box", T = z in r, T && (G = r[z])), G = parseFloat(G) || 0, G + qn(r, s, u || (x ? "border" : "content"), T, p, G) + "px"
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
                    var w, x, T, G = N(s),
                        z = It.test(s),
                        Z = r.style;
                    if (z || (s = Ce(G)), T = d.cssHooks[s] || d.cssHooks[G], u !== void 0) {
                        if (x = typeof u, x === "string" && (w = wt.exec(u)) && w[1] && (u = V(r, s, w), x = "number"), u == null || u !== u) return;
                        x === "number" && !z && (u += w && w[3] || (d.cssNumber[G] ? "" : "px")), !Y.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (z ? Z.setProperty(s, u) : Z[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                }
            },
            css: function(r, s, u, p) {
                var w, x, T, G = N(s),
                    z = It.test(s);
                return z || (s = Ce(G)), T = d.cssHooks[s] || d.cssHooks[G], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = tt(r, s, p)), w === "normal" && s in Un && (w = Un[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), d.each(["height", "width"], function(r, s) {
            d.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return Xe.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Hi(u, Yt, function() {
                        return Or(u, s, w)
                    }) : Or(u, s, w)
                },
                set: function(u, p, w) {
                    var x, T = Hn(u),
                        G = !Y.scrollboxSize() && T.position === "absolute",
                        z = G || w,
                        Z = z && d.css(u, "boxSizing", !1, T) === "border-box",
                        le = w ? qn(u, s, w, Z, T) : 0;
                    return Z && G && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - qn(u, s, "border", !1, T) - .5)), le && (x = wt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Vn(u, p, le)
                }
            }
        }), d.cssHooks.marginLeft = y(Y.reliableMarginLeft, function(r, s) {
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
            }, r !== "margin" && (d.cssHooks[r + s].set = Vn)
        }), d.fn.extend({
            css: function(r, s) {
                return g(this, function(u, p, w) {
                    var x, T, G = {},
                        z = 0;
                    if (Array.isArray(p)) {
                        for (x = Hn(u), T = p.length; z < T; z++) G[p[z]] = d.css(u, p[z], !1, x);
                        return G
                    }
                    return w !== void 0 ? d.style(u, p, w) : d.css(u, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Kt(r, s, u, p, w) {
            return new Kt.prototype.init(r, s, u, p, w)
        }
        d.Tween = Kt, Kt.prototype = {
            constructor: Kt,
            init: function(r, s, u, p, w, x) {
                this.elem = r, this.prop = u, this.easing = w || d.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (d.cssNumber[u] ? "" : "px")
            },
            cur: function() {
                var r = Kt.propHooks[this.prop];
                return r && r.get ? r.get(this) : Kt.propHooks._default.get(this)
            },
            run: function(r) {
                var s, u = Kt.propHooks[this.prop];
                return this.options.duration ? this.pos = s = d.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : Kt.propHooks._default.set(this), this
            }
        }, Kt.prototype.init.prototype = Kt.prototype, Kt.propHooks = {
            _default: {
                get: function(r) {
                    var s;
                    return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = d.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s)
                },
                set: function(r) {
                    d.fx.step[r.prop] ? d.fx.step[r.prop](r) : r.elem.nodeType === 1 && (d.cssHooks[r.prop] || r.elem.style[Ce(r.prop)] != null) ? d.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
                }
            }
        }, Kt.propHooks.scrollTop = Kt.propHooks.scrollLeft = {
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
        }, d.fx = Kt.prototype.init, d.fx.step = {};
        var Gt, Ui, _o = /^(?:toggle|show|hide)$/,
            So = /queueHooks$/;

        function Rr() {
            Ui && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Rr) : e.setTimeout(Rr, d.fx.interval), d.fx.tick())
        }

        function Ir() {
            return e.setTimeout(function() {
                Gt = void 0
            }), Gt = Date.now()
        }

        function qi(r, s) {
            var u, p = 0,
                w = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) u = Ct[p], w["margin" + u] = w["padding" + u] = r;
            return s && (w.opacity = w.width = r), w
        }

        function vs(r, s, u) {
            for (var p, w = (Cn.tweeners[s] || []).concat(Cn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                if (p = w[x].call(u, s, r)) return p
        }

        function ko(r, s, u) {
            var p, w, x, T, G, z, Z, le, be = "width" in s || "height" in s,
                ne = this,
                ce = {},
                We = r.style,
                ot = r.nodeType && F(r),
                je = he.get(r, "fxshow");
            u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, G = T.empty.fire, T.empty.fire = function() {
                T.unqueued || G()
            }), T.unqueued++, ne.always(function() {
                ne.always(function() {
                    T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], _o.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (ot ? "hide" : "show"))
                        if (w === "show" && je && je[p] !== void 0) ot = !0;
                        else continue;
                    ce[p] = je && je[p] || d.style(r, p)
                } if (z = !d.isEmptyObject(s), !(!z && d.isEmptyObject(ce))) {
                be && r.nodeType === 1 && (u.overflow = [We.overflow, We.overflowX, We.overflowY], Z = je && je.display, Z == null && (Z = he.get(r, "display")), le = d.css(r, "display"), le === "none" && (Z ? le = Z : (U([r], !0), Z = r.style.display || Z, le = d.css(r, "display"), U([r]))), (le === "inline" || le === "inline-block" && Z != null) && d.css(r, "float") === "none" && (z || (ne.done(function() {
                    We.display = Z
                }), Z == null && (le = We.display, Z = le === "none" ? "" : le)), We.display = "inline-block")), u.overflow && (We.overflow = "hidden", ne.always(function() {
                    We.overflow = u.overflow[0], We.overflowX = u.overflow[1], We.overflowY = u.overflow[2]
                })), z = !1;
                for (p in ce) z || (je ? "hidden" in je && (ot = je.hidden) : je = he.access(r, "fxshow", {
                    display: Z
                }), x && (je.hidden = !ot), ot && U([r], !0), ne.done(function() {
                    ot || U([r]), he.remove(r, "fxshow");
                    for (p in ce) d.style(r, p, ce[p])
                })), z = vs(ot ? je[p] : 0, p, ne), p in je || (je[p] = z.start, ot && (z.end = z.start, z.start = 0))
            }
        }

        function ys(r, s) {
            var u, p, w, x, T;
            for (u in r)
                if (p = N(u), w = s[p], x = r[u], Array.isArray(x) && (w = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = d.cssHooks[p], T && "expand" in T) {
                    x = T.expand(x), delete r[p];
                    for (u in x) u in r || (r[u] = x[u], s[u] = w)
                } else s[p] = w
        }

        function Cn(r, s, u) {
            var p, w, x = 0,
                T = Cn.prefilters.length,
                G = d.Deferred().always(function() {
                    delete z.elem
                }),
                z = function() {
                    if (w) return !1;
                    for (var be = Gt || Ir(), ne = Math.max(0, Z.startTime + Z.duration - be), ce = ne / Z.duration || 0, We = 1 - ce, ot = 0, je = Z.tweens.length; ot < je; ot++) Z.tweens[ot].run(We);
                    return G.notifyWith(r, [Z, We, ne]), We < 1 && je ? ne : (je || G.notifyWith(r, [Z, 1, 0]), G.resolveWith(r, [Z]), !1)
                },
                Z = G.promise({
                    elem: r,
                    props: d.extend({}, s),
                    opts: d.extend(!0, {
                        specialEasing: {},
                        easing: d.easing._default
                    }, u),
                    originalProperties: s,
                    originalOptions: u,
                    startTime: Gt || Ir(),
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
                        return be ? (G.notifyWith(r, [Z, 1, 0]), G.resolveWith(r, [Z, be])) : G.rejectWith(r, [Z, be]), this
                    }
                }),
                le = Z.props;
            for (ys(le, Z.opts.specialEasing); x < T; x++)
                if (p = Cn.prefilters[x].call(Z, r, le, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return d.map(le, vs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(z, {
                elem: r,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        d.Animation = d.extend(Cn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return V(u.elem, r, wt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    re(r) ? (s = r, r = ["*"]) : r = r.match(ke);
                    for (var u, p = 0, w = r.length; p < w; p++) u = r[p], Cn.tweeners[u] = Cn.tweeners[u] || [], Cn.tweeners[u].unshift(s)
                },
                prefilters: [ko],
                prefilter: function(r, s) {
                    s ? Cn.prefilters.unshift(r) : Cn.prefilters.push(r)
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
                            var G = Cn(this, d.extend({}, r), x);
                            (w || he.get(this, "finish")) && G.stop(!0)
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
                            G = he.get(this);
                        if (x) G[x] && G[x].stop && p(G[x]);
                        else
                            for (x in G) G[x] && G[x].stop && So.test(x) && p(G[x]);
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
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(qi(s, !0), p, w, x)
                }
            }), d.each({
                slideDown: qi("show"),
                slideUp: qi("hide"),
                slideToggle: qi("toggle"),
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
                for (Gt = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || d.fx.stop(), Gt = void 0
            }, d.fx.timer = function(r) {
                d.timers.push(r), d.fx.start()
            }, d.fx.interval = 13, d.fx.start = function() {
                Ui || (Ui = !0, Rr())
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
                r.type = "checkbox", Y.checkOn = r.value !== "", Y.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", Y.radioValue = r.value === "t"
            }();
        var Dr, Ei = d.expr.attrHandle;
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
                    if ((x !== 1 || !d.isXMLDoc(r)) && (w = d.attrHooks[s.toLowerCase()] || (d.expr.match.bool.test(s) ? Dr : void 0)), u !== void 0) {
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
        }), Dr = {
            set: function(r, s, u) {
                return s === !1 ? d.removeAttr(r, u) : r.setAttribute(u, u), u
            }
        }, d.each(d.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var u = Ei[s] || d.find.attr;
            Ei[s] = function(p, w, x) {
                var T, G, z = w.toLowerCase();
                return x || (G = Ei[z], Ei[z] = T, T = u(p, w, x) != null ? z : null, Ei[z] = G), T
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
        }), Y.optSelected || (d.propHooks.selected = {
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

        function Wn(r) {
            var s = r.match(ke) || [];
            return s.join(" ")
        }

        function Xn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Lr(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(ke) || [] : []
        }
        d.fn.extend({
            addClass: function(r) {
                var s, u, p, w, x, T, G, z = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).addClass(r.call(this, Z, Xn(this)))
                });
                if (s = Lr(r), s.length) {
                    for (; u = this[z++];)
                        if (w = Xn(u), p = u.nodeType === 1 && " " + Wn(w) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            G = Wn(p), w !== G && u.setAttribute("class", G)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, w, x, T, G, z = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).removeClass(r.call(this, Z, Xn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Lr(r), s.length) {
                    for (; u = this[z++];)
                        if (w = Xn(u), p = u.nodeType === 1 && " " + Wn(w) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                            G = Wn(p), w !== G && u.setAttribute("class", G)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(w) {
                    d(this).toggleClass(r.call(this, w, Xn(this), s), s)
                }) : this.each(function() {
                    var w, x, T, G;
                    if (p)
                        for (x = 0, T = d(this), G = Lr(r); w = G[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || u === "boolean") && (w = Xn(this), w && he.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : he.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, u, p = 0;
                for (s = " " + r + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + Wn(Xn(u)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var Oo = /\r/g;
        d.fn.extend({
            val: function(r) {
                var s, u, p, w = this[0];
                return arguments.length ? (p = re(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(G) {
                        return G == null ? "" : G + ""
                    })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(Oo, "") : u == null ? "" : u)) : void 0
            }
        }), d.extend({
            valHooks: {
                option: {
                    get: function(r) {
                        var s = d.find.attr(r, "value");
                        return s != null ? s : Wn(d.text(r))
                    }
                },
                select: {
                    get: function(r) {
                        var s, u, p, w = r.options,
                            x = r.selectedIndex,
                            T = r.type === "select-one",
                            G = T ? null : [],
                            z = T ? x + 1 : w.length;
                        for (x < 0 ? p = z : p = T ? x : 0; p < z; p++)
                            if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !K(u.parentNode, "optgroup"))) {
                                if (s = d(u).val(), T) return s;
                                G.push(s)
                            } return G
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
            }, Y.checkOn || (d.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), Y.focusin = "onfocusin" in e;
        var Mr = /^(?:focusinfocus|focusoutblur)$/,
            Yn = function(r) {
                r.stopPropagation()
            };
        d.extend(d.event, {
            trigger: function(r, s, u, p) {
                var w, x, T, G, z, Z, le, be, ne = [u || P],
                    ce = $.call(r, "type") ? r.type : r,
                    We = $.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = be = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Mr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (We = ce.split("."), ce = We.shift(), We.sort()), z = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = We.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + We.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                    if (!p && !le.noBubble && !m(u)) {
                        for (G = le.delegateType || ce, Mr.test(G + ce) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                        T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = ne[w++]) && !r.isPropagationStopped();) be = x, r.type = w > 1 ? G : le.bindType || ce, Z = (he.get(x, "events") || Object.create(null))[r.type] && he.get(x, "handle"), Z && Z.apply(x, s), Z = z && x[z], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), s) === !1) && te(u) && z && re(u[ce]) && !m(u) && (T = u[z], T && (u[z] = null), d.event.triggered = ce, r.isPropagationStopped() && be.addEventListener(ce, Yn), u[ce](), r.isPropagationStopped() && be.removeEventListener(ce, Yn), d.event.triggered = void 0, T && (u[z] = T)), r.result
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
        }), Y.focusin || d.each({
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
        var _i = e.location,
            Pr = {
                guid: Date.now()
            },
            Wi = /\?/;
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
        var Ro = /\[\]$/,
            ws = /\r?\n/g,
            Io = /^(?:submit|button|image|reset|file)$/i,
            Do = /^(?:input|select|textarea|keygen)/i;

        function Vr(r, s, u, p) {
            var w;
            if (Array.isArray(s)) d.each(s, function(x, T) {
                u || Ro.test(r) ? p(r, T) : Vr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
            });
            else if (!u && se(s) === "object")
                for (w in s) Vr(r + "[" + w + "]", s[w], u, p);
            else p(r, s)
        }
        d.param = function(r, s) {
            var u, p = [],
                w = function(x, T) {
                    var G = re(T) ? T() : T;
                    p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(G == null ? "" : G)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !d.isPlainObject(r)) d.each(r, function() {
                w(this.name, this.value)
            });
            else
                for (u in r) Vr(u, r[u], s, w);
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
                    return this.name && !d(this).is(":disabled") && Do.test(this.nodeName) && !Io.test(r) && (this.checked || !fe.test(r))
                }).map(function(r, s) {
                    var u = d(this).val();
                    return u == null ? null : Array.isArray(u) ? d.map(u, function(p) {
                        return {
                            name: s.name,
                            value: p.replace(ws, `\r
`)
                        }
                    }) : {
                        name: s.name,
                        value: u.replace(ws, `\r
`)
                    }
                }).get()
            }
        });
        var Lo = /%20/g,
            Mo = /#.*$/,
            Po = /([?&])_=[^&]*/,
            Kn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            bs = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Vo = /^(?:GET|HEAD)$/,
            No = /^\/\//,
            Cs = {},
            Nr = {},
            xs = "*/".concat("*"),
            Br = P.createElement("a");
        Br.href = _i.href;

        function Es(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, w = 0,
                    x = s.toLowerCase().match(ke) || [];
                if (re(u))
                    for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function _s(r, s, u, p) {
            var w = {},
                x = r === Nr;

            function T(G) {
                var z;
                return w[G] = !0, d.each(r[G] || [], function(Z, le) {
                    var be = le(s, u, p);
                    if (typeof be == "string" && !x && !w[be]) return s.dataTypes.unshift(be), T(be), !1;
                    if (x) return !(z = be)
                }), z
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function $r(r, s) {
            var u, p, w = d.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && d.extend(!0, r, p), r
        }

        function Bo(r, s, u) {
            for (var p, w, x, T, G = r.contents, z = r.dataTypes; z[0] === "*";) z.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (w in G)
                    if (G[w] && G[w].test(p)) {
                        z.unshift(w);
                        break
                    }
            }
            if (z[0] in u) x = z[0];
            else {
                for (w in u) {
                    if (!z[0] || r.converters[w + " " + z[0]]) {
                        x = w;
                        break
                    }
                    T || (T = w)
                }
                x = x || T
            }
            if (x) return x !== z[0] && z.unshift(x), u[x]
        }

        function $o(r, s, u, p) {
            var w, x, T, G, z, Z = {},
                le = r.dataTypes.slice();
            if (le[1])
                for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
            for (x = le.shift(); x;)
                if (r.responseFields[x] && (u[r.responseFields[x]] = s), !z && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), z = x, x = le.shift(), x) {
                    if (x === "*") x = z;
                    else if (z !== "*" && z !== x) {
                        if (T = Z[z + " " + x] || Z["* " + x], !T) {
                            for (w in Z)
                                if (G = w.split(" "), G[1] === x && (T = Z[z + " " + G[0]] || Z["* " + G[0]], T)) {
                                    T === !0 ? T = Z[w] : Z[w] !== !0 && (x = G[0], le.unshift(G[1]));
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
                                    error: T ? be : "No conversion from " + z + " to " + x
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
                url: _i.href,
                type: "GET",
                isLocal: bs.test(_i.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": xs,
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
                return s ? $r($r(r, d.ajaxSettings), s) : $r(d.ajaxSettings, r)
            },
            ajaxPrefilter: Es(Cs),
            ajaxTransport: Es(Nr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, w, x, T, G, z, Z, le, be, ne = d.ajaxSetup({}, s),
                    ce = ne.context || ne,
                    We = ne.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                    ot = d.Deferred(),
                    je = d.Callbacks("once memory"),
                    zt = ne.statusCode || {},
                    Nt = {},
                    hn = {},
                    _t = "canceled",
                    nt = {
                        readyState: 0,
                        getResponseHeader: function(pt) {
                            var Dt;
                            if (z) {
                                if (!x)
                                    for (x = {}; Dt = Kn.exec(w);) x[Dt[1].toLowerCase() + " "] = (x[Dt[1].toLowerCase() + " "] || []).concat(Dt[2]);
                                Dt = x[pt.toLowerCase() + " "]
                            }
                            return Dt == null ? null : Dt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return z ? w : null
                        },
                        setRequestHeader: function(pt, Dt) {
                            return z == null && (pt = hn[pt.toLowerCase()] = hn[pt.toLowerCase()] || pt, Nt[pt] = Dt), this
                        },
                        overrideMimeType: function(pt) {
                            return z == null && (ne.mimeType = pt), this
                        },
                        statusCode: function(pt) {
                            var Dt;
                            if (pt)
                                if (z) nt.always(pt[nt.status]);
                                else
                                    for (Dt in pt) zt[Dt] = [zt[Dt], pt[Dt]];
                            return this
                        },
                        abort: function(pt) {
                            var Dt = pt || _t;
                            return u && u.abort(Dt), an(0, Dt), this
                        }
                    };
                if (ot.promise(nt), ne.url = ((r || ne.url || _i.href) + "").replace(No, _i.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(ke) || [""], ne.crossDomain == null) {
                    G = P.createElement("a");
                    try {
                        G.href = ne.url, G.href = G.href, ne.crossDomain = Br.protocol + "//" + Br.host != G.protocol + "//" + G.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), _s(Cs, ne, s, nt), z) return nt;
                Z = d.event && ne.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Vo.test(ne.type), p = ne.url.replace(Mo, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Lo, "+")) : (be = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Wi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Po, "$1"), be = (Wi.test(p) ? "&" : "?") + "_=" + Pr.guid++ + be), ne.url = p + be), ne.ifModified && (d.lastModified[p] && nt.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && nt.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && nt.setRequestHeader("Content-Type", ne.contentType), nt.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + xs + "; q=0.01" : "") : ne.accepts["*"]);
                for (le in ne.headers) nt.setRequestHeader(le, ne.headers[le]);
                if (ne.beforeSend && (ne.beforeSend.call(ce, nt, ne) === !1 || z)) return nt.abort();
                if (_t = "abort", je.add(ne.complete), nt.done(ne.success), nt.fail(ne.error), u = _s(Nr, ne, s, nt), !u) an(-1, "No Transport");
                else {
                    if (nt.readyState = 1, Z && We.trigger("ajaxSend", [nt, ne]), z) return nt;
                    ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                        nt.abort("timeout")
                    }, ne.timeout));
                    try {
                        z = !1, u.send(Nt, an)
                    } catch (pt) {
                        if (z) throw pt;
                        an(-1, pt)
                    }
                }

                function an(pt, Dt, ki, Xi) {
                    var dn, Jn, Qn, ln, Ln, yn = Dt;
                    z || (z = !0, T && e.clearTimeout(T), u = void 0, w = Xi || "", nt.readyState = pt > 0 ? 4 : 0, dn = pt >= 200 && pt < 300 || pt === 304, ki && (ln = Bo(ne, nt, ki)), !dn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), ln = $o(ne, ln, nt, dn), dn ? (ne.ifModified && (Ln = nt.getResponseHeader("Last-Modified"), Ln && (d.lastModified[p] = Ln), Ln = nt.getResponseHeader("etag"), Ln && (d.etag[p] = Ln)), pt === 204 || ne.type === "HEAD" ? yn = "nocontent" : pt === 304 ? yn = "notmodified" : (yn = ln.state, Jn = ln.data, Qn = ln.error, dn = !Qn)) : (Qn = yn, (pt || !yn) && (yn = "error", pt < 0 && (pt = 0))), nt.status = pt, nt.statusText = (Dt || yn) + "", dn ? ot.resolveWith(ce, [Jn, yn, nt]) : ot.rejectWith(ce, [nt, yn, Qn]), nt.statusCode(zt), zt = void 0, Z && We.trigger(dn ? "ajaxSuccess" : "ajaxError", [nt, ne, dn ? Jn : Qn]), je.fireWith(ce, [nt, yn]), Z && (We.trigger("ajaxComplete", [nt, ne]), --d.active || d.event.trigger("ajaxStop")))
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
            Si = d.ajaxSettings.xhr();
        Y.cors = !!Si && "withCredentials" in Si, Y.ajax = Si = !!Si, d.ajaxTransport(function(r) {
            var s, u;
            if (Y.cors || Si && !r.crossDomain) return {
                send: function(p, w) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
                    s = function(G) {
                        return function() {
                            s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, G === "abort" ? T.abort() : G === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(Fo[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
                    } catch (G) {
                        if (s) throw G
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
        var Fr = [],
            jr = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = Fr.pop() || d.expando + "_" + Pr.guid++;
                return this[r] = !0, r
            }
        }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, w, x, T = r.jsonp !== !1 && (jr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && jr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (Wi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || d.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, Fr.push(p)), x && re(w) && w(x[0]), x = w = void 0
            }), "script"
        }), Y.createHTMLDocument = function() {
            var r = P.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), d.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, x;
            return s || (Y.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = Ge.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = In([r], s, x), x && x.length && d(x).remove(), d.merge([], w.childNodes))
        }, d.fn.load = function(r, s, u) {
            var p, w, x, T = this,
                G = r.indexOf(" ");
            return G > -1 && (p = Wn(r.slice(G)), r = r.slice(0, G)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(z) {
                x = arguments, T.html(p ? d("<div>").append(d.parseHTML(z)).find(p) : z)
            }).always(u && function(z, Z) {
                T.each(function() {
                    u.apply(this, x || [z.responseText, Z, z])
                })
            }), this
        }, d.expr.pseudos.animated = function(r) {
            return d.grep(d.timers, function(s) {
                return r === s.elem
            }).length
        }, d.offset = {
            setOffset: function(r, s, u) {
                var p, w, x, T, G, z, Z, le = d.css(r, "position"),
                    be = d(r),
                    ne = {};
                le === "static" && (r.style.position = "relative"), G = be.offset(), x = d.css(r, "top"), z = d.css(r, "left"), Z = (le === "absolute" || le === "fixed") && (x + z).indexOf("auto") > -1, Z ? (p = be.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(z) || 0), re(s) && (s = s.call(r, u, d.extend({}, G))), s.top != null && (ne.top = s.top - G.top + T), s.left != null && (ne.left = s.left - G.left + w), "using" in s ? s.using.call(r, ne) : be.css(ne)
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
                    return r || Qt
                })
            }
        }), d.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(r, s) {
            var u = s === "pageYOffset";
            d.fn[r] = function(p) {
                return g(this, function(w, x, T) {
                    var G;
                    if (m(w) ? G = w : w.nodeType === 9 && (G = w.defaultView), T === void 0) return G ? G[s] : w[x];
                    G ? G.scrollTo(u ? G.pageXOffset : T, u ? T : G.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), d.each(["top", "left"], function(r, s) {
            d.cssHooks[s] = y(Y.pixelPosition, function(u, p) {
                if (p) return p = tt(u, s), Ci.test(p) ? d(u).position()[s] + "px" : p
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
                        G = u || (w === !0 || x === !0 ? "margin" : "border");
                    return g(this, function(z, Z, le) {
                        var be;
                        return m(z) ? p.indexOf("outer") === 0 ? z["inner" + r] : z.document.documentElement["client" + r] : z.nodeType === 9 ? (be = z.documentElement, Math.max(z.body["scroll" + r], be["scroll" + r], z.body["offset" + r], be["offset" + r], be["client" + r])) : le === void 0 ? d.css(z, Z, G) : d.style(z, Z, le, G)
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
        var Ss = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        d.proxy = function(r, s) {
            var u, p, w;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = f.call(arguments, 2), w = function() {
                return r.apply(s || this, p.concat(f.call(arguments)))
            }, w.guid = r.guid = r.guid || d.guid++, w
        }, d.holdReady = function(r) {
            r ? d.readyWait++ : d.ready(!0)
        }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = K, d.isFunction = re, d.isWindow = m, d.camelCase = N, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
            var s = d.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, d.trim = function(r) {
            return r == null ? "" : (r + "").replace(Ss, "")
        };
        var jo = e.jQuery,
            Go = e.$;
        return d.noConflict = function(r) {
            return e.$ === d && (e.$ = Go), r && e.jQuery === d && (e.jQuery = jo), d
        }, typeof n > "u" && (e.jQuery = e.$ = d), d
    })
})(Fa);
const Pe = Fa.exports;
var Ue = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof yt == "object" && yt.global === yt && yt; {
            var i = Ni.exports,
                a;
            try {
                a = Fa.exports
            } catch {}
            e(n, t, i, a)
        }
    })(function(e, n, i, a) {
        var f = e.Backbone,
            v = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = a, n.noConflict = function() {
            return e.Backbone = f, this
        }, n.emulateHTTP = !1, n.emulateJSON = !1;
        var S = function(E, l, g) {
                switch (E) {
                    case 1:
                        return function() {
                            return i[l](this[g])
                        };
                    case 2:
                        return function(_) {
                            return i[l](this[g], _)
                        };
                    case 3:
                        return function(_, O) {
                            return i[l](this[g], I(_, this), O)
                        };
                    case 4:
                        return function(_, O, M) {
                            return i[l](this[g], I(_, this), O, M)
                        };
                    default:
                        return function() {
                            var _ = v.call(arguments);
                            return _.unshift(this[g]), i[l].apply(i, _)
                        }
                }
            },
            k = function(E, l, g) {
                i.each(l, function(_, O) {
                    i[O] && (E.prototype[O] = S(_, O, g))
                })
            },
            I = function(E, l) {
                return i.isFunction(E) ? E : i.isObject(E) && !l._isModel(E) ? D(E) : i.isString(E) ? function(g) {
                    return g.get(E)
                } : E
            },
            D = function(E) {
                var l = i.matches(E);
                return function(g) {
                    return l(g.attributes)
                }
            },
            $ = n.Events = {},
            J = /\s+/,
            ie = function(E, l, g, _, O) {
                var M = 0,
                    N;
                if (g && typeof g == "object")
                    for (_ !== void 0 && ("context" in O) && O.context === void 0 && (O.context = _), N = i.keys(g); M < N.length; M++) l = ie(E, l, N[M], g[N[M]], O);
                else if (g && J.test(g))
                    for (N = g.split(J); M < N.length; M++) l = E(l, N[M], _, O);
                else l = E(l, g, _, O);
                return l
            };
        $.on = function(E, l, g) {
            return Y(this, E, l, g)
        };
        var Y = function(E, l, g, _, O) {
            if (E._events = ie(re, E._events || {}, l, g, {
                    context: _,
                    ctx: E,
                    listening: O
                }), O) {
                var M = E._listeners || (E._listeners = {});
                M[O.id] = O
            }
            return E
        };
        $.listenTo = function(E, l, g) {
            if (!E) return this;
            var _ = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                M = O[_];
            if (!M) {
                var N = this._listenId || (this._listenId = i.uniqueId("l"));
                M = O[_] = {
                    obj: E,
                    objId: _,
                    id: N,
                    listeningTo: O,
                    count: 0
                }
            }
            return Y(E, l, g, this, M), this
        };
        var re = function(E, l, g, _) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    M = _.context,
                    N = _.ctx,
                    te = _.listening;
                te && te.count++, O.push({
                    callback: g,
                    context: M,
                    ctx: M || N,
                    listening: te
                })
            }
            return E
        };
        $.off = function(E, l, g) {
            return this._events ? (this._events = ie(m, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, $.stopListening = function(E, l, g) {
            var _ = this._listeningTo;
            if (!_) return this;
            for (var O = E ? [E._listenId] : i.keys(_), M = 0; M < O.length; M++) {
                var N = _[O[M]];
                if (!N) break;
                N.obj.off(l, g, this)
            }
            return this
        };
        var m = function(E, l, g, _) {
            if (!!E) {
                var O = 0,
                    M, N = _.context,
                    te = _.listeners;
                if (!l && !g && !N) {
                    for (var Se = i.keys(te); O < Se.length; O++) M = te[Se[O]], delete te[M.id], delete M.listeningTo[M.objId];
                    return
                }
                for (var he = l ? [l] : i.keys(E); O < he.length; O++) {
                    l = he[O];
                    var Ie = E[l];
                    if (!Ie) break;
                    for (var De = [], rt = 0; rt < Ie.length; rt++) {
                        var xt = Ie[rt];
                        g && g !== xt.callback && g !== xt.callback._callback || N && N !== xt.context ? De.push(xt) : (M = xt.listening, M && --M.count === 0 && (delete te[M.id], delete M.listeningTo[M.objId]))
                    }
                    De.length ? E[l] = De : delete E[l]
                }
                return E
            }
        };
        $.once = function(E, l, g) {
            var _ = ie(P, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(_, l, g)
        }, $.listenToOnce = function(E, l, g) {
            var _ = ie(P, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, _)
        };
        var P = function(E, l, g, _) {
            if (g) {
                var O = E[l] = i.once(function() {
                    _(l, O), g.apply(this, arguments)
                });
                O._callback = g
            }
            return E
        };
        $.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), _ = 0; _ < l; _++) g[_] = arguments[_ + 1];
            return ie(q, this._events, E, void 0, g), this
        };
        var q = function(E, l, g, _) {
                if (E) {
                    var O = E[l],
                        M = E.all;
                    O && M && (M = M.slice()), O && ae(O, _), M && ae(M, [l].concat(_))
                }
                return E
            },
            ae = function(E, l) {
                var g, _ = -1,
                    O = E.length,
                    M = l[0],
                    N = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, M);
                        return;
                    case 2:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, M, N);
                        return;
                    case 3:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, M, N, te);
                        return;
                    default:
                        for (; ++_ < O;)(g = E[_]).callback.apply(g.ctx, l);
                        return
                }
            };
        $.bind = $.on, $.unbind = $.off, i.extend(n, $);
        var se = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var _ = i.result(this, "defaults");
            g = i.defaults(i.extend({}, _, g), _), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(se.prototype, $, {
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
                var _;
                if (typeof E == "object" ? (_ = E, g = l) : (_ = {})[E] = l, g || (g = {}), !this._validate(_, g)) return !1;
                var O = g.unset,
                    M = g.silent,
                    N = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var Se = this.attributes,
                    he = this.changed,
                    Ie = this._previousAttributes;
                for (var De in _) l = _[De], i.isEqual(Se[De], l) || N.push(De), i.isEqual(Ie[De], l) ? delete he[De] : he[De] = l, O ? delete Se[De] : Se[De] = l;
                if (this.idAttribute in _ && (this.id = this.get(this.idAttribute)), !M) {
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
                for (var _ in E) {
                    var O = E[_];
                    i.isEqual(l[_], O) || (g[_] = O)
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
                return E.success = function(_) {
                    var O = E.parse ? l.parse(_, E) : _;
                    if (!l.set(O, E)) return !1;
                    g && g.call(E.context, l, _, E), l.trigger("sync", l, _, E)
                }, qt(this, E), this.sync("read", this, E)
            },
            save: function(E, l, g) {
                var _;
                E == null || typeof E == "object" ? (_ = E, g = l) : (_ = {})[E] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var O = g.wait;
                if (_ && !O) {
                    if (!this.set(_, g)) return !1
                } else if (!this._validate(_, g)) return !1;
                var M = this,
                    N = g.success,
                    te = this.attributes;
                g.success = function(Ie) {
                    M.attributes = te;
                    var De = g.parse ? M.parse(Ie, g) : Ie;
                    if (O && (De = i.extend({}, _, De)), De && !M.set(De, g)) return !1;
                    N && N.call(g.context, M, Ie, g), M.trigger("sync", M, Ie, g)
                }, qt(this, g), _ && O && (this.attributes = i.extend({}, te, _));
                var Se = this.isNew() ? "create" : g.patch ? "patch" : "update";
                Se === "patch" && !g.attrs && (g.attrs = _);
                var he = this.sync(Se, this, g);
                return this.attributes = te, he
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    _ = E.wait,
                    O = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(N) {
                    _ && O(), g && g.call(E.context, l, N, E), l.isNew() || l.trigger("sync", l, N, E)
                };
                var M = !1;
                return this.isNew() ? i.defer(E.success) : (qt(this, E), M = this.sync("delete", this, E)), _ || O(), M
            },
            url: function() {
                var E = i.result(this, "urlRoot") || i.result(this.collection, "url") || $t();
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
                var _ = Array(E.length - g),
                    O = l.length,
                    M;
                for (M = 0; M < _.length; M++) _[M] = E[M + g];
                for (M = 0; M < O; M++) E[M + g] = l[M];
                for (M = 0; M < _.length; M++) E[M + O + g] = _[M]
            };
        i.extend(d.prototype, $, {
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
                var _ = this._removeModels(E, l);
                return !l.silent && _.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: _
                }, this.trigger("update", this, l)), g ? _[0] : _
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, Ee, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var _ = l.at;
                    _ != null && (_ = +_), _ > this.length && (_ = this.length), _ < 0 && (_ += this.length + 1);
                    var O = [],
                        M = [],
                        N = [],
                        te = [],
                        Se = {},
                        he = l.add,
                        Ie = l.merge,
                        De = l.remove,
                        rt = !1,
                        xt = this.comparator && _ == null && l.sort !== !1,
                        sn = i.isString(this.comparator) ? this.comparator : null,
                        ct, wt;
                    for (wt = 0; wt < E.length; wt++) {
                        ct = E[wt];
                        var Ct = this.get(ct);
                        if (Ct) {
                            if (Ie && ct !== Ct) {
                                var Qt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Qt = Ct.parse(Qt, l)), Ct.set(Qt, l), N.push(Ct), xt && !rt && (rt = Ct.hasChanged(sn))
                            }
                            Se[Ct.cid] || (Se[Ct.cid] = !0, O.push(Ct)), E[wt] = Ct
                        } else he && (ct = E[wt] = this._prepareModel(ct, l), ct && (M.push(ct), this._addReference(ct, l), Se[ct.cid] = !0, O.push(ct)))
                    }
                    if (De) {
                        for (wt = 0; wt < this.length; wt++) ct = this.models[wt], Se[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Ze = !1,
                        Pt = !xt && he && De;
                    if (O.length && Pt ? (Ze = this.length !== O.length || i.some(this.models, function(F, V) {
                            return F !== O[V]
                        }), this.models.length = 0, Me(this.models, O, 0), this.length = this.models.length) : M.length && (xt && (rt = !0), Me(this.models, M, _ == null ? this.length : _), this.length = this.models.length), rt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (wt = 0; wt < M.length; wt++) _ != null && (l.index = _ + wt), ct = M[wt], ct.trigger("add", ct, this, l);
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
                return v.apply(this.models, arguments)
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
                return E.success = function(_) {
                    var O = E.reset ? "reset" : "set";
                    g[O](_, E), l && l.call(E.context, g, _, E), g.trigger("sync", g, _, E)
                }, qt(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var _ = this,
                    O = l.success;
                return l.success = function(M, N, te) {
                    g && _.add(M, te), O && O.call(te.context, M, N, te)
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
                for (var g = [], _ = 0; _ < E.length; _++) {
                    var O = this.get(E[_]);
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
            _onModelEvent: function(E, l, g, _) {
                if (l) {
                    if ((E === "add" || E === "remove") && g !== this) return;
                    if (E === "destroy" && this.remove(l, _), E === "change") {
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
        var $e = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, Ge)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            K = /^(\S+)\s*(.*)$/,
            Ge = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend($e.prototype, $, {
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
                        var _ = l.match(K);
                        this.delegate(_[1], _[2], i.bind(g, this))
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
            var _ = H[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var O = {
                type: _,
                dataType: "json"
            };
            if (g.url || (O.url = i.result(l, "url") || $t()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (O.contentType = "application/json", O.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (O.contentType = "application/x-www-form-urlencoded", O.data = O.data ? {
                    model: O.data
                } : {}), g.emulateHTTP && (_ === "PUT" || _ === "DELETE" || _ === "PATCH")) {
                O.type = "POST", g.emulateJSON && (O.data._method = _);
                var M = g.beforeSend;
                g.beforeSend = function(Se) {
                    if (Se.setRequestHeader("X-HTTP-Method-Override", _), M) return M.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var N = g.error;
            g.error = function(Se, he, Ie) {
                g.textStatus = he, g.errorThrown = Ie, N && N.call(g.context, Se, he, Ie)
            };
            var te = g.xhr = n.ajax(i.extend(O, g));
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
        var oe = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Te = /\((.*?)\)/g,
            we = /(\(\?)?:\w+/g,
            ye = /\*\w+/g,
            ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(oe.prototype, $, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var _ = this;
                return n.history.route(E, function(O) {
                    var M = _._extractParameters(E, O);
                    _.execute(g, M, l) !== !1 && (_.trigger.apply(_, ["route:" + l].concat(M)), _.trigger("route", l, M), n.history.trigger("route", _, l, M))
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
                return i.map(g, function(_, O) {
                    return O === g.length - 1 ? _ || null : _ ? decodeURIComponent(_) : null
                })
            }
        });
        var _e = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            ke = /^[#\/]|\s+$/g,
            Fe = /^\/+|\/+$/g,
            Qe = /#.*$/;
        _e.started = !1, i.extend(_e.prototype, $, {
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
                    }, this.options, E), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(Fe, "/"), this._wantsHashChange && this._wantsPushState)
                    if (!this._hasPushState && !this.atRoot()) {
                        var l = this.root.slice(0, -1) || "/";
                        return this.location.replace(l + "#" + this.getPath()), !0
                    } else this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    });
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var g = document.body,
                        _ = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    _.document.open(), _.document.close(), _.location.hash = "#" + this.fragment
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
                var _ = g + E;
                if (E = this.decodeFragment(E.replace(Qe, "")), this.fragment !== E) {
                    if (this.fragment = E, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, _);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, E, l.replace), this.iframe && E !== this.getHash(this.iframe.contentWindow)) {
                            var O = this.iframe.contentWindow;
                            l.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, E, l.replace)
                        }
                    } else return this.location.assign(_);
                    if (l.trigger) return this.loadUrl(E)
                }
            },
            _updateHash: function(E, l, g) {
                if (g) {
                    var _ = E.href.replace(/(javascript:|#).*$/, "");
                    E.replace(_ + "#" + l)
                } else E.hash = "#" + l
            }
        }), n.history = new _e;
        var ft = function(E, l) {
            var g = this,
                _;
            return E && i.has(E, "constructor") ? _ = E.constructor : _ = function() {
                return g.apply(this, arguments)
            }, i.extend(_, g, l), _.prototype = i.create(g.prototype, E), _.prototype.constructor = _, _.__super__ = g.prototype, _
        };
        se.extend = d.extend = oe.extend = $e.extend = _e.extend = ft;
        var $t = function() {
                throw new Error('A "url" property or function must be specified')
            },
            qt = function(E, l) {
                var g = l.error;
                l.error = function(_) {
                    g && g.call(l.context, E, _, l), E.trigger("error", E, _, l)
                }
            };
        return n
    })
})(Ue);
var Sc = {
        exports: {}
    },
    ta = {
        exports: {}
    },
    bl;

function xh() {
    return bl || (bl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Ni.exports, Ue)
        })(yt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
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
            var S = /\s+/;
            v._eventsApi = function(m, P, q, ae) {
                if (!q) return !1;
                var se = {};
                if ((typeof q > "u" ? "undefined" : a(q)) === "object") {
                    for (var ve in q) {
                        var d = m[P].apply(m, [ve, q[ve]].concat(ae));
                        S.test(ve) ? n.extend(se, d) : se[ve] = d
                    }
                    return se
                }
                if (S.test(q)) {
                    for (var Ee = q.split(S), Ae = 0, Me = Ee.length; Ae < Me; Ae++) se[Ee[Ae]] = m[P].apply(m, [Ee[Ae]].concat(ae));
                    return se
                }
                return !1
            }, v._callHandler = function(m, P, q) {
                var ae = q[0],
                    se = q[1],
                    ve = q[2];
                switch (q.length) {
                    case 0:
                        return m.call(P);
                    case 1:
                        return m.call(P, ae);
                    case 2:
                        return m.call(P, ae, se);
                    case 3:
                        return m.call(P, ae, se, ve);
                    default:
                        return m.apply(P, q)
                }
            };

            function k(m, P, q, ae) {
                var se = m[P];
                if ((!q || q === se.callback || q === se.callback._callback) && (!ae || ae === se.context)) return delete m[P], !0
            }

            function I(m, P, q, ae) {
                m || (m = {});
                for (var se = P ? [P] : n.keys(m), ve = !1, d = 0, Ee = se.length; d < Ee; d++) P = se[d], !!m[P] && k(m, P, q, ae) && (ve = !0);
                return ve
            }
            var D = {};

            function $(m) {
                return D[m] || (D[m] = n.bind(v.log, v, m))
            }
            n.extend(v, {
                log: function(P, q) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + q + '"', ae)
                    }
                },
                tuneIn: function(P) {
                    var q = v.channel(P);
                    return q._tunedIn = !0, q.on("all", $(P)), this
                },
                tuneOut: function(P) {
                    var q = v.channel(P);
                    return q._tunedIn = !1, q.off("all", $(P)), delete D[P], this
                }
            });

            function J(m) {
                return n.isFunction(m) ? m : function() {
                    return m
                }
            }
            v.Requests = {
                request: function(P) {
                    var q = n.toArray(arguments).slice(1),
                        ae = v._eventsApi(this, "request", P, q);
                    if (ae) return ae;
                    var se = this.channelName,
                        ve = this._requests;
                    if (se && this._tunedIn && v.log.apply(this, [se, P].concat(q)), ve && (ve[P] || ve.default)) {
                        var d = ve[P] || ve.default;
                        return q = ve[P] ? q : arguments, v._callHandler(d.callback, d.context, q)
                    } else v.debugLog("An unhandled request was fired", P, se)
                },
                reply: function(P, q, ae) {
                    return v._eventsApi(this, "reply", P, [q, ae]) ? this : (this._requests || (this._requests = {}), this._requests[P] && v.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: J(q),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(P, q, ae) {
                    if (v._eventsApi(this, "replyOnce", P, [q, ae])) return this;
                    var se = this,
                        ve = n.once(function() {
                            return se.stopReplying(P), J(q).apply(this, arguments)
                        });
                    return this.reply(P, ve, ae)
                },
                stopReplying: function(P, q, ae) {
                    return v._eventsApi(this, "stopReplying", P) ? this : (!P && !q && !ae ? delete this._requests : I(this._requests, P, q, ae) || v.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
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
            var ie, Y, re = [i.Events, v.Requests];
            return n.each(re, function(m) {
                n.each(m, function(P, q) {
                    v[q] = function(ae) {
                        return Y = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[q].apply(ie, Y)
                    }
                })
            }), v.reset = function(m) {
                var P = m ? [this._channels[m]] : this._channels;
                n.each(P, function(q) {
                    q.reset()
                })
            }, v
        })
    }(ta)), ta.exports
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
        t.exports = i(Ue, Ni.exports, xh())
    })(yt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            v = function(o) {
                return function(C) {
                    for (var A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Q[Ce - 1] = arguments[Ce];
                    return o.apply(C, Q)
                }
            },
            S = n.Model.extend,
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
            D = function(o, C) {
                var A = this;
                !o || i.each(C, function(Q) {
                    var Ce = o[Q];
                    Ce !== void 0 && (A[Q] = Ce)
                })
            },
            $ = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            J = function(o) {
                var C = this;
                return i.reduce(o, function(A, Q, Ce) {
                    return i.isFunction(Q) || (Q = C[Q]), Q && (A[Ce] = Q), A
                }, {})
            },
            ie = /(^|:)(\w)/gi;

        function Y(y, o, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ie, Y)
        });

        function m(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            var Q = re(y),
                Ce = $.call(this, Q),
                Xe = void 0;
            return i.isFunction(Ce) && (Xe = Ce.apply(this, C)), this.trigger.apply(this, arguments), Xe
        }

        function P(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : m.apply(y, C)
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

        function $e() {
            q(this, "before:detach", ve), Ae(this)
        }

        function K() {
            q(this, "detach", d)
        }

        function Ge() {
            Ae(this)
        }

        function H() {
            Ee(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Me,
                attach: lt,
                "before:detach": $e,
                detach: K,
                "before:render": Ge,
                render: H
            }))
        }
        var Te = ["description", "fileName", "lineNumber", "name", "message", "number"],
            we = S.call(Error, {
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
        we.extend = S;

        function ye(y, o, C, A, Q) {
            var Ce = A.split(/\s+/);
            Ce.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(Ce, function(Xe) {
                var It = y[Xe];
                if (!It) throw new we('Method "' + Xe + '" was configured as an event handler, but does not exist.');
                y[Q](o, C, It)
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

        function Fe(y, o, C, A) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = J.call(y, C);
            o[A](Q, y)
        }

        function Qe(y, o) {
            return !y || !o ? this : (Fe(this, y, o, "reply"), this)
        }

        function ft(y, o) {
            return y ? o ? (Fe(this, y, o, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var $t = function(o) {
                this.options = i.extend({}, i.result(this, "options"), o)
            },
            qt = {
                normalizeMethods: J,
                _setOptions: $t,
                mergeOptions: D,
                getOption: $,
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
                unbindRequests: ft
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = S, i.extend(g.prototype, n.Events, qt, E, {
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
            triggerMethod: m
        });
        var _ = function(o) {
            this.templateId = o
        };
        i.extend(_, {
            templateCaches: {},
            get: function(o, C) {
                var A = this.templateCaches[o];
                return A || (A = new _(o), this.templateCaches[o] = A), A.load(C)
            },
            clear: function() {
                for (var o = void 0, C = arguments.length, A = Array(C), Q = 0; Q < C; Q++) A[Q] = arguments[Q];
                var Ce = A.length;
                if (Ce > 0)
                    for (o = 0; o < Ce; o++) delete this.templateCaches[A[o]];
                else this.templateCaches = {}
            }
        }), i.extend(_.prototype, {
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
                    Xe = new Q(Ce, y),
                    It = N(y, i.result(Xe, "behaviors"));
                return [Xe].concat(It)
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
                    for (var o = this._behaviors, C = 0, A = o && o.length; C < A; C++) m.apply(o[C], arguments)
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
            Ie = function(o, C) {
                var A = o.match(he);
                return A[1] + "." + C + " " + A[2]
            },
            De = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function rt(y) {
            return !!De[y]
        }

        function xt(y, o) {
            return De[y] = o
        }

        function sn(y, o) {
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
                    return i.reduce(C, function(Q, Ce, Xe) {
                        return Xe = Ie(Xe, "trig" + A.cid), Q[Xe] = sn(o, Ce), Q
                    }, {})
                }
            },
            wt = function(o, C) {
                return i.reduce(o, function(A, Q, Ce) {
                    var Xe = Ct(Ce, C);
                    return A[Xe] = Q, A
                }, {})
            },
            Ct = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Qt = function y(o, C, A) {
                return i.each(o, function(Q, Ce) {
                    i.isString(Q) ? o[Ce] = Ct(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(Xe) {
                        var It = Q[Xe];
                        i.isString(It) && (Q[Xe] = Ct(It, C))
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
                    return Qt(o, A, C)
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

        function Pt(y) {
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
                    return Pt(o)
                },
                findEl: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pt(o);
                    return A.find(C)
                },
                hasEl: function(o, C) {
                    return o.contains(C && C.parentNode)
                },
                detachEl: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt(o);
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
                                Xe = C.nextSibling;
                            A.insertBefore(C, Ce), Q.insertBefore(o, Xe)
                        }
                    }
                },
                setContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pt(o);
                    A.html(C)
                },
                appendContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = A._$el,
                        Ce = Q === void 0 ? Pt(o) : Q,
                        Xe = A._$contents,
                        It = Xe === void 0 ? Pt(C) : Xe;
                    Ce.append(It)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt(o);
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
                    var o = m.apply(this, arguments);
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
                    var Xe = this._childViewTriggers;
                    Xe && i.isString(Xe[o]) && this.triggerMethod.apply(this, [Xe[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Yt = It + ":" + o;
                        this.triggerMethod.apply(this, [Yt].concat(Q))
                    }
                }
            };
        i.extend(W, te, qt, Se, ct, Ze);

        function L(y) {
            y._isRendered || (y.supportsRenderLifecycle || P(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, P(y, "render", y)))
        }

        function U(y) {
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
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, L(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
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
                    return new Pn(C)
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
                    return o._isDestroyed || (o._shouldDisableEvents = this._shouldDisableMonitoring(), U(o)), o
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
            }), gt(C);
            if (i.isFunction(y)) return i.extend(C, {
                regionClass: y
            }), gt(C);
            if (i.isObject(y)) return y.selector && k("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(C, {
                el: y.selector
            }, y), gt(C);
            throw new we({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function gt(y) {
            var o = y.regionClass,
                C = i.omit(y, "regionClass");
            return new o(C)
        }
        var jt = {
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
                    return i.reduce(o, function(Q, Ce, Xe) {
                        return Q[Xe] = Ve(Ce, A), C._addRegion(Q[Xe], Xe), Q
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
                    for (var A = this.getRegion(o), Q = arguments.length, Ce = Array(Q > 2 ? Q - 2 : 0), Xe = 2; Xe < Q; Xe++) Ce[Xe - 2] = arguments[Xe];
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
                    var A = i.isFunction(o) ? o : _.get(o);
                    return A(C)
                }
            },
            In = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Pn = n.View.extend({
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, In), oe(this), this._initBehaviors(), this._initRegions();
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
        i.extend(Pn.prototype, W, jt);
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
            vi = function(o) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(o, i.bind(this.add, this))
            };
        Dn(vi.prototype, "_getViews"), i.extend(vi.prototype, {
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
        var kr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            Tn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, kr), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
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
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, U(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
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
                        Xe = Q && Ce && !A;
                    if (Xe) {
                        var It = this._filteredSortedModels();
                        this.filter = o;
                        var Yt = this._filteredSortedModels();
                        this._applyModelDeltas(Yt, It)
                    } else this.filter = o;
                    return this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _applyModelDeltas: function(o, C) {
                    var A = this,
                        Q = {};
                    i.each(o, function(Xe, It) {
                        var Yt = !A.children.findByModel(Xe);
                        Yt && A._onCollectionAdd(Xe, A.collection, {
                            at: It
                        }), Q[Xe.cid] = !0
                    });
                    var Ce = i.filter(C, function(Xe) {
                        return !Q[Xe.cid] && A.children.findByModel(Xe)
                    });
                    this._removeChildModels(Ce)
                },
                reorder: function() {
                    var o = this,
                        C = this.children,
                        A = this._filteredSortedModels();
                    if (!A.length && this._showingEmptyView) return this;
                    var Q = i.some(A, function(Yt) {
                        return !C.findByModel(Yt)
                    });
                    if (Q) this.render();
                    else {
                        var Ce = [],
                            Xe = i.reduce(this.children._views, function(Yt, Un) {
                                var Vn = i.indexOf(A, Un.model);
                                return Vn === -1 ? (Ce.push(Un.model), Yt) : (Un._index = Vn, Yt[Vn] = Un.el, Yt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(Xe, function(Yt) {
                            o.Dom.appendContents(It, Yt)
                        }), this._appendReorderedChildren(It), this._removeChildModels(Ce), this.triggerMethod("reorder", this)
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
                            var Xe = o.children.findByModel(Q);
                            return !Xe || Xe._index !== Ce
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
                    return this.triggerMethod("before:add:child", this, o), this._setupChildView(o, C), this._isBuffering ? this.children._add(o) : (this._updateIndices(o, !0), this.children.add(o)), L(o), this._attachView(o, C), this.triggerMethod("add:child", this, o), o
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
                    this.children = new vi
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
        i.extend(Tn.prototype, W);
        var on = function() {
            this._init()
        };
        Dn(on.prototype, "_views");

        function Tr(y, o) {
            return o.model && o.model.get(y)
        }
        i.extend(on.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(o) {
                var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    A = o.cid;
                this._viewsByCid[A] = o, o.model && (this._indexByModel[o.model.cid] = A), this._views.splice(C, 0, o), this._updateLength()
            },
            _sort: function(o, C) {
                return typeof o == "string" ? (o = i.partial(Tr, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, C)) : this._views.sort(i.bind(o, C))
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
        var Ar = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            yi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Ar), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _initChildViewStorage: function() {
                    this.children = new on
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
                    return i.each(this.children._views, function(Xe, It, Yt) {
                        (C.call(o, Xe, It, Yt) ? Q : Ce).push(Xe)
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
                        L(Q), C.Dom.appendContents(A, Q.el, {
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
                    o._isDestroyed || (o._shouldDisableEvents = this.monitorViewEvents === !1, U(o))
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
        i.extend(yi.prototype, W);
        var Fi = ["childViewContainer", "template", "templateContext"],
            wi = Tn.extend({
                constructor: function(o) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, Fi), Tn.prototype.constructor.apply(this, arguments)
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
                    (this._isRendered || this._isRendering) && Tn.prototype._renderChildren.call(this)
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
            bi = i.pick(Pn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(wi.prototype, bi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Gi = g.extend({
                cidPrefix: "mnb",
                constructor: function(o, C) {
                    this.view = C, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, o)), this.mergeOptions(this.options, ji), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), g.apply(this, arguments)
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
                        return i.isFunction(Q) || (Q = o[Q]), Q && (Ce = Ie(Ce, o.cid), A[Ce] = i.bind(Q, o)), A
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, o)
                    }
                }
            });
        i.extend(Gi.prototype, Se, ct, Ze);
        var vn = ["region", "regionClass"],
            zi = g.extend({
                cidPrefix: "mna",
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, vn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
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
            Ci = ["appRoutes", "controller"],
            Hn = n.Router.extend({
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Ci), n.Router.apply(this, arguments);
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
                triggerMethod: m
            });
        i.extend(Hn.prototype, qt);

        function Hi() {
            throw new we({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var xi = n.Marionette,
            tt = n.Marionette = {};
        return tt.noConflict = function() {
            return n.Marionette = xi, this
        }, tt.bindEvents = v(_e), tt.unbindEvents = v(ke), tt.bindRequests = v(Qe), tt.unbindRequests = v(ft), tt.mergeOptions = v(D), tt.getOption = v($), tt.normalizeMethods = v(J), tt.extend = S, tt.isNodeAttached = I, tt.deprecate = k, tt.triggerMethod = v(m), tt.triggerMethodOn = P, tt.isEnabled = rt, tt.setEnabled = xt, tt.monitorViewEvents = oe, tt.Behaviors = {}, tt.Behaviors.behaviorsLookup = Hi, tt.Application = zi, tt.AppRouter = Hn, tt.Renderer = Je, tt.TemplateCache = _, tt.View = Pn, tt.CollectionView = Tn, tt.NextCollectionView = yi, tt.CompositeView = wi, tt.Behavior = Gi, tt.Region = pe, tt.Error = we, tt.Object = g, tt.DEV_MODE = !1, tt.FEATURES = De, tt.VERSION = f, tt.DomApi = V, tt.setDomApi = function(y) {
            Tn.setDomApi(y), wi.setDomApi(y), yi.setDomApi(y), pe.setDomApi(y), Pn.setDomApi(y)
        }, tt
    }), yt && yt.Marionette && (yt.Mn = yt.Marionette)
})(Sc);
const ht = Sc.exports;
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
var ho = kh,
    Th = ho;

function Ah(t, e) {
    for (var n = t.length; n--;)
        if (Th(t[n][0], e)) return n;
    return -1
}
var fo = Ah,
    Oh = fo,
    Rh = Array.prototype,
    Ih = Rh.splice;

function Dh(t) {
    var e = this.__data__,
        n = Oh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Ih.call(e, n, 1), --this.size, !0
}
var Lh = Dh,
    Mh = fo;

function Ph(t) {
    var e = this.__data__,
        n = Mh(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Vh = Ph,
    Nh = fo;

function Bh(t) {
    return Nh(this.__data__, t) > -1
}
var $h = Bh,
    Fh = fo;

function jh(t, e) {
    var n = this.__data__,
        i = Fh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Gh = jh,
    zh = Sh,
    Hh = Lh,
    Uh = Vh,
    qh = $h,
    Wh = Gh;

function br(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
br.prototype.clear = zh;
br.prototype.delete = Hh;
br.prototype.get = Uh;
br.prototype.has = qh;
br.prototype.set = Wh;
var po = br,
    Xh = po;

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
    kc = id,
    rd = kc,
    sd = typeof self == "object" && self && self.Object === Object && self,
    od = rd || sd || Function("return this")(),
    Cr = od,
    ad = Cr,
    ld = ad.Symbol,
    Tc = ld,
    Cl = Tc,
    Ac = Object.prototype,
    cd = Ac.hasOwnProperty,
    ud = Ac.toString,
    Yr = Cl ? Cl.toStringTag : void 0;

function hd(t) {
    var e = cd.call(t, Yr),
        n = t[Yr];
    try {
        t[Yr] = void 0;
        var i = !0
    } catch {}
    var a = ud.call(t);
    return i && (e ? t[Yr] = n : delete t[Yr]), a
}
var dd = hd,
    fd = Object.prototype,
    pd = fd.toString;

function gd(t) {
    return pd.call(t)
}
var md = gd,
    xl = Tc,
    vd = dd,
    yd = md,
    wd = "[object Null]",
    bd = "[object Undefined]",
    El = xl ? xl.toStringTag : void 0;

function Cd(t) {
    return t == null ? t === void 0 ? bd : wd : El && El in Object(t) ? vd(t) : yd(t)
}
var go = Cd;

function xd(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var $i = xd,
    Ed = go,
    _d = $i,
    Sd = "[object AsyncFunction]",
    kd = "[object Function]",
    Td = "[object GeneratorFunction]",
    Ad = "[object Proxy]";

function Od(t) {
    if (!_d(t)) return !1;
    var e = Ed(t);
    return e == kd || e == Td || e == Sd || e == Ad
}
var ja = Od,
    Rd = Cr,
    Id = Rd["__core-js_shared__"],
    Dd = Id,
    na = Dd,
    _l = function() {
        var t = /[^.]+$/.exec(na && na.keys && na.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Ld(t) {
    return !!_l && _l in t
}
var Md = Ld,
    Pd = Function.prototype,
    Vd = Pd.toString;

function Nd(t) {
    if (t != null) {
        try {
            return Vd.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Bd = Nd,
    $d = ja,
    Fd = Md,
    jd = $i,
    Gd = Bd,
    zd = /[\\^$.*+?()[\]{}|]/g,
    Hd = /^\[object .+?Constructor\]$/,
    Ud = Function.prototype,
    qd = Object.prototype,
    Wd = Ud.toString,
    Xd = qd.hasOwnProperty,
    Yd = RegExp("^" + Wd.call(Xd).replace(zd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Kd(t) {
    if (!jd(t) || Fd(t)) return !1;
    var e = $d(t) ? Yd : Hd;
    return e.test(Gd(t))
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
var Ga = nf,
    rf = Ga,
    sf = Cr,
    of = rf(sf, "Map"),
    Oc = of,
    af = Ga,
    lf = af(Object, "create"),
    mo = lf,
    Sl = mo;

function cf() {
    this.__data__ = Sl ? Sl(null) : {}, this.size = 0
}
var uf = cf;

function hf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var df = hf,
    ff = mo,
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
    wf = mo,
    bf = Object.prototype,
    Cf = bf.hasOwnProperty;

function xf(t) {
    var e = this.__data__;
    return wf ? e[t] !== void 0 : Cf.call(e, t)
}
var Ef = xf,
    _f = mo,
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
    Df = Tf;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = Af;
xr.prototype.delete = Of;
xr.prototype.get = Rf;
xr.prototype.has = If;
xr.prototype.set = Df;
var Lf = xr,
    kl = Lf,
    Mf = po,
    Pf = Oc;

function Vf() {
    this.size = 0, this.__data__ = {
        hash: new kl,
        map: new(Pf || Mf),
        string: new kl
    }
}
var Nf = Vf;

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
var vo = jf,
    Gf = vo;

function zf(t) {
    var e = Gf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Hf = zf,
    Uf = vo;

function qf(t) {
    return Uf(this, t).get(t)
}
var Wf = qf,
    Xf = vo;

function Yf(t) {
    return Xf(this, t).has(t)
}
var Kf = Yf,
    Jf = vo;

function Qf(t, e) {
    var n = Jf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Zf = Qf,
    ep = Nf,
    tp = Hf,
    np = Wf,
    ip = Kf,
    rp = Zf;

function Er(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Er.prototype.clear = ep;
Er.prototype.delete = tp;
Er.prototype.get = np;
Er.prototype.has = ip;
Er.prototype.set = rp;
var sp = Er,
    op = po,
    ap = Oc,
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
    dp = po,
    fp = Kh,
    pp = Qh,
    gp = ed,
    mp = nd,
    vp = hp;

function _r(t) {
    var e = this.__data__ = new dp(t);
    this.size = e.size
}
_r.prototype.clear = fp;
_r.prototype.delete = pp;
_r.prototype.get = gp;
_r.prototype.has = mp;
_r.prototype.set = vp;
var yp = _r,
    wp = Ga,
    bp = function() {
        try {
            var t = wp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Rc = bp,
    Tl = Rc;

function Cp(t, e, n) {
    e == "__proto__" && Tl ? Tl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var za = Cp,
    xp = za,
    Ep = ho;

function _p(t, e, n) {
    (n !== void 0 && !Ep(t[e], n) || n === void 0 && !(e in t)) && xp(t, e, n)
}
var Ic = _p;

function Sp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), v = i(e), S = v.length; S--;) {
            var k = v[t ? S : ++a];
            if (n(f[k], k, f) === !1) break
        }
        return e
    }
}
var kp = Sp,
    Tp = kp,
    Ap = Tp(),
    Op = Ap,
    _a = {
        exports: {}
    };
(function(t, e) {
    var n = Cr,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        v = f ? n.Buffer : void 0,
        S = v ? v.allocUnsafe : void 0;

    function k(I, D) {
        if (D) return I.slice();
        var $ = I.length,
            J = S ? S($) : new I.constructor($);
        return I.copy(J), J
    }
    t.exports = k
})(_a, _a.exports);
var Rp = Cr,
    Ip = Rp.Uint8Array,
    Dp = Ip,
    Al = Dp;

function Lp(t) {
    var e = new t.constructor(t.byteLength);
    return new Al(e).set(new Al(t)), e
}
var Mp = Lp,
    Pp = Mp;

function Vp(t, e) {
    var n = e ? Pp(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Np = Vp;

function Bp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var $p = Bp,
    Fp = $i,
    Ol = Object.create,
    jp = function() {
        function t() {}
        return function(e) {
            if (!Fp(e)) return {};
            if (Ol) return Ol(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Gp = jp;

function zp(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Hp = zp,
    Up = Hp,
    qp = Up(Object.getPrototypeOf, Object),
    Dc = qp,
    Wp = Object.prototype;

function Xp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || Wp;
    return t === n
}
var Lc = Xp,
    Yp = Gp,
    Kp = Dc,
    Jp = Lc;

function Qp(t) {
    return typeof t.constructor == "function" && !Jp(t) ? Yp(Kp(t)) : {}
}
var Zp = Qp;

function eg(t) {
    return t != null && typeof t == "object"
}
var ds = eg,
    tg = go,
    ng = ds,
    ig = "[object Arguments]";

function rg(t) {
    return ng(t) && tg(t) == ig
}
var sg = rg,
    Rl = sg,
    og = ds,
    Mc = Object.prototype,
    ag = Mc.hasOwnProperty,
    lg = Mc.propertyIsEnumerable,
    cg = Rl(function() {
        return arguments
    }()) ? Rl : function(t) {
        return og(t) && ag.call(t, "callee") && !lg.call(t, "callee")
    },
    Pc = cg,
    ug = Array.isArray,
    Vc = ug,
    hg = 9007199254740991;

function dg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= hg
}
var Nc = dg,
    fg = ja,
    pg = Nc;

function gg(t) {
    return t != null && pg(t.length) && !fg(t)
}
var Ha = gg,
    mg = Ha,
    vg = ds;

function yg(t) {
    return vg(t) && mg(t)
}
var wg = yg,
    eo = {
        exports: {}
    };

function bg() {
    return !1
}
var Cg = bg;
(function(t, e) {
    var n = Cr,
        i = Cg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        v = f && f.exports === a,
        S = v ? n.Buffer : void 0,
        k = S ? S.isBuffer : void 0,
        I = k || i;
    t.exports = I
})(eo, eo.exports);
var xg = go,
    Eg = Dc,
    _g = ds,
    Sg = "[object Object]",
    kg = Function.prototype,
    Tg = Object.prototype,
    Bc = kg.toString,
    Ag = Tg.hasOwnProperty,
    Og = Bc.call(Object);

function Rg(t) {
    if (!_g(t) || xg(t) != Sg) return !1;
    var e = Eg(t);
    if (e === null) return !0;
    var n = Ag.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Bc.call(n) == Og
}
var Ig = Rg,
    Dg = go,
    Lg = Nc,
    Mg = ds,
    Pg = "[object Arguments]",
    Vg = "[object Array]",
    Ng = "[object Boolean]",
    Bg = "[object Date]",
    $g = "[object Error]",
    Fg = "[object Function]",
    jg = "[object Map]",
    Gg = "[object Number]",
    zg = "[object Object]",
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
    Lt = {};
Lt[Kg] = Lt[Jg] = Lt[Qg] = Lt[Zg] = Lt[em] = Lt[tm] = Lt[nm] = Lt[im] = Lt[rm] = !0;
Lt[Pg] = Lt[Vg] = Lt[Xg] = Lt[Ng] = Lt[Yg] = Lt[Bg] = Lt[$g] = Lt[Fg] = Lt[jg] = Lt[Gg] = Lt[zg] = Lt[Hg] = Lt[Ug] = Lt[qg] = Lt[Wg] = !1;

function sm(t) {
    return Mg(t) && Lg(t.length) && !!Lt[Dg(t)]
}
var om = sm;

function am(t) {
    return function(e) {
        return t(e)
    }
}
var lm = am,
    Sa = {
        exports: {}
    };
(function(t, e) {
    var n = kc,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        v = f && n.process,
        S = function() {
            try {
                var k = a && a.require && a.require("util").types;
                return k || v && v.binding && v.binding("util")
            } catch {}
        }();
    t.exports = S
})(Sa, Sa.exports);
var cm = om,
    um = lm,
    Il = Sa.exports,
    Dl = Il && Il.isTypedArray,
    hm = Dl ? um(Dl) : cm,
    $c = hm;

function dm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Fc = dm,
    fm = za,
    pm = ho,
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
    for (var f = -1, v = e.length; ++f < v;) {
        var S = e[f],
            k = i ? i(n[S], t[S], S, n, t) : void 0;
        k === void 0 && (k = t[S]), a ? bm(n, S, k) : wm(n, S, k)
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
var jc = Tm,
    Am = _m,
    Om = Pc,
    Rm = Vc,
    Im = eo.exports,
    Dm = jc,
    Lm = $c,
    Mm = Object.prototype,
    Pm = Mm.hasOwnProperty;

function Vm(t, e) {
    var n = Rm(t),
        i = !n && Om(t),
        a = !n && !i && Im(t),
        f = !n && !i && !a && Lm(t),
        v = n || i || a || f,
        S = v ? Am(t.length, String) : [],
        k = S.length;
    for (var I in t)(e || Pm.call(t, I)) && !(v && (I == "length" || a && (I == "offset" || I == "parent") || f && (I == "buffer" || I == "byteLength" || I == "byteOffset") || Dm(I, k))) && S.push(I);
    return S
}
var Nm = Vm;

function Bm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var $m = Bm,
    Fm = $i,
    jm = Lc,
    Gm = $m,
    zm = Object.prototype,
    Hm = zm.hasOwnProperty;

function Um(t) {
    if (!Fm(t)) return Gm(t);
    var e = jm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Hm.call(t, i)) || n.push(i);
    return n
}
var qm = Um,
    Wm = Nm,
    Xm = qm,
    Ym = Ha;

function Km(t) {
    return Ym(t) ? Wm(t, !0) : Xm(t)
}
var Gc = Km,
    Jm = xm,
    Qm = Gc;

function Zm(t) {
    return Jm(t, Qm(t))
}
var ev = Zm,
    Ll = Ic,
    tv = _a.exports,
    nv = Np,
    iv = $p,
    rv = Zp,
    Ml = Pc,
    Pl = Vc,
    sv = wg,
    ov = eo.exports,
    av = ja,
    lv = $i,
    cv = Ig,
    uv = $c,
    Vl = Fc,
    hv = ev;

function dv(t, e, n, i, a, f, v) {
    var S = Vl(t, n),
        k = Vl(e, n),
        I = v.get(k);
    if (I) {
        Ll(t, n, I);
        return
    }
    var D = f ? f(S, k, n + "", t, e, v) : void 0,
        $ = D === void 0;
    if ($) {
        var J = Pl(k),
            ie = !J && ov(k),
            Y = !J && !ie && uv(k);
        D = k, J || ie || Y ? Pl(S) ? D = S : sv(S) ? D = iv(S) : ie ? ($ = !1, D = tv(k, !0)) : Y ? ($ = !1, D = nv(k, !0)) : D = [] : cv(k) || Ml(k) ? (D = S, Ml(S) ? D = hv(S) : (!lv(S) || av(S)) && (D = rv(k))) : $ = !1
    }
    $ && (v.set(k, D), a(D, k, i, f, v), v.delete(k)), Ll(t, n, D)
}
var fv = dv,
    pv = yp,
    gv = Ic,
    mv = Op,
    vv = fv,
    yv = $i,
    wv = Gc,
    bv = Fc;

function zc(t, e, n, i, a) {
    t !== e && mv(e, function(f, v) {
        if (a || (a = new pv), yv(f)) vv(t, e, v, n, zc, i, a);
        else {
            var S = i ? i(bv(t, v), f, v + "", t, e, a) : void 0;
            S === void 0 && (S = f), gv(t, v, S)
        }
    }, wv)
}
var Cv = zc;

function xv(t) {
    return t
}
var Hc = xv;

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
            for (var i = arguments, a = -1, f = Nl(i.length - e, 0), v = Array(f); ++a < f;) v[a] = i[e + a];
            a = -1;
            for (var S = Array(e + 1); ++a < e;) S[a] = i[a];
            return S[e] = n(v), Sv(t, this, S)
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
    Bl = Rc,
    Iv = Hc,
    Dv = Bl ? function(t, e) {
        return Bl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Rv(e),
            writable: !0
        })
    } : Iv,
    Lv = Dv,
    Mv = 800,
    Pv = 16,
    Vv = Date.now;

function Nv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Vv(),
            a = Pv - (i - n);
        if (n = i, a > 0) {
            if (++e >= Mv) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Bv = Nv,
    $v = Lv,
    Fv = Bv,
    jv = Fv($v),
    Gv = jv,
    zv = Hc,
    Hv = Tv,
    Uv = Gv;

function qv(t, e) {
    return Uv(Hv(t, e, zv), t + "")
}
var Wv = qv,
    Xv = ho,
    Yv = Ha,
    Kv = jc,
    Jv = $i;

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
            v = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, v && ty(n[0], n[1], v) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var S = n[i];
            S && t(e, S, i, f)
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
class ka {
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
at(ka, "locale"), at(ka, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const wl = class {
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
            v = Math.min(Math.max(0, (f >> 16) * n), 255),
            S = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let I = (Math.min(Math.max(0, (f & 255) * n), 255) | S << 8 | v << 16).toString(16);
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
let Xt = wl;
at(Xt, "queryParams", new URLSearchParams(window.location.search)), at(Xt, "getQueryParam", e => wl.queryParams.get(e)), at(Xt, "sleep", e => new Promise(n => {
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
        var i, a;
        delete window.tv.storage, window.tv.storage = {
            namespace: (a = (i = Xt.getQueryParam("namespace")) != null ? i : Xt.getQueryParam("ns")) != null ? a : this.defaultNamespace,
            isDisabled: Xt.queryParams.has("incognito") || Xt.queryParams.has("nc")
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
            a = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(S => {
            const k = S.split("-")[0];
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
at(tn, "defaultNamespace", "tv");
class Bi {
    constructor() {
        at(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Bi.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!tn.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            v = tn.get("galleries") || "[]";
        try {
            const S = JSON.parse(v) || [];
            if (S.some(k => k.url === f)) return;
            S.unshift({
                url: f,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), tn.set("galleries", JSON.stringify(S.slice(0, 40)))
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
        Bi.setAsViewed(e), this.artifacts = this.list()
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
        const e = new Intl.DateTimeFormat(ka.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = tn.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const v = new Date(f.time),
                    S = e.format(v),
                    k = f.url.split("/"),
                    I = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let D = f.categoryId;
                return D || (f.url.indexOf("Quiplash2") !== -1 ? D = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? D = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? D = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (D = "TriviaDeathResults")), {
                    id: I,
                    gameName: D,
                    date: S,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Ta = {
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
        (function(v) {
            var S = {
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
            if (S.arrayBuffer) var I = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(H) {
                    return H && I.indexOf(Object.prototype.toString.call(H)) > -1
                };

            function $(H) {
                if (typeof H != "string" && (H = String(H)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(H)) throw new TypeError("Invalid character in header field name");
                return H.toLowerCase()
            }

            function J(H) {
                return typeof H != "string" && (H = String(H)), H
            }

            function ie(H) {
                var oe = {
                    next: function() {
                        var Te = H.shift();
                        return {
                            done: Te === void 0,
                            value: Te
                        }
                    }
                };
                return S.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function Y(H) {
                this.map = {}, H instanceof Y ? H.forEach(function(oe, Te) {
                    this.append(Te, oe)
                }, this) : Array.isArray(H) ? H.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : H && Object.getOwnPropertyNames(H).forEach(function(oe) {
                    this.append(oe, H[oe])
                }, this)
            }
            Y.prototype.append = function(H, oe) {
                H = $(H), oe = J(oe);
                var Te = this.map[H];
                this.map[H] = Te ? Te + ", " + oe : oe
            }, Y.prototype.delete = function(H) {
                delete this.map[$(H)]
            }, Y.prototype.get = function(H) {
                return H = $(H), this.has(H) ? this.map[H] : null
            }, Y.prototype.has = function(H) {
                return this.map.hasOwnProperty($(H))
            }, Y.prototype.set = function(H, oe) {
                this.map[$(H)] = J(oe)
            }, Y.prototype.forEach = function(H, oe) {
                for (var Te in this.map) this.map.hasOwnProperty(Te) && H.call(oe, this.map[Te], Te, this)
            }, Y.prototype.keys = function() {
                var H = [];
                return this.forEach(function(oe, Te) {
                    H.push(Te)
                }), ie(H)
            }, Y.prototype.values = function() {
                var H = [];
                return this.forEach(function(oe) {
                    H.push(oe)
                }), ie(H)
            }, Y.prototype.entries = function() {
                var H = [];
                return this.forEach(function(oe, Te) {
                    H.push([Te, oe])
                }), ie(H)
            }, S.iterable && (Y.prototype[Symbol.iterator] = Y.prototype.entries);

            function re(H) {
                if (H.bodyUsed) return Promise.reject(new TypeError("Already read"));
                H.bodyUsed = !0
            }

            function m(H) {
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
                    Te = m(oe);
                return oe.readAsArrayBuffer(H), Te
            }

            function q(H) {
                var oe = new FileReader,
                    Te = m(oe);
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
                    this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : S.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : S.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : S.arrayBuffer && S.blob && k(H) ? (this._bodyArrayBuffer = se(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : S.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || D(H)) ? this._bodyArrayBuffer = se(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, S.blob && (this.blob = function() {
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
                    if (this._bodyBlob) return q(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, S.formData && (this.formData = function() {
                    return this.text().then(Me)
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
                    this.url = H.url, this.credentials = H.credentials, oe.headers || (this.headers = new Y(H.headers)), this.method = H.method, this.mode = H.mode, this.signal = H.signal, !Te && H._bodyInit != null && (Te = H._bodyInit, H.bodyUsed = !0)
                } else this.url = String(H);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new Y(oe.headers)), this.method = Ee(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Te) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Te)
            }
            Ae.prototype.clone = function() {
                return new Ae(this, {
                    body: this._bodyInit
                })
            };

            function Me(H) {
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
                var oe = new Y,
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

            function $e(H, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new Y(oe.headers), this.url = oe.url || "", this._initBody(H)
            }
            ve.call($e.prototype), $e.prototype.clone = function() {
                return new $e(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Y(this.headers),
                    url: this.url
                })
            }, $e.error = function() {
                var H = new $e(null, {
                    status: 0,
                    statusText: ""
                });
                return H.type = "error", H
            };
            var K = [301, 302, 303, 307, 308];
            $e.redirect = function(H, oe) {
                if (K.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new $e(null, {
                    status: oe,
                    headers: {
                        location: H
                    }
                })
            }, v.DOMException = f.DOMException;
            try {
                new v.DOMException
            } catch {
                v.DOMException = function(oe, Te) {
                    this.message = oe, this.name = Te;
                    var we = Error(oe);
                    this.stack = we.stack
                }, v.DOMException.prototype = Object.create(Error.prototype), v.DOMException.prototype.constructor = v.DOMException
            }

            function Ge(H, oe) {
                return new Promise(function(Te, we) {
                    var ye = new Ae(H, oe);
                    if (ye.signal && ye.signal.aborted) return we(new v.DOMException("Aborted", "AbortError"));
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
                        var Fe = "response" in ue ? ue.response : ue.responseText;
                        Te(new $e(Fe, ke))
                    }, ue.onerror = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        we(new v.DOMException("Aborted", "AbortError"))
                    }, ue.open(ye.method, ye.url, !0), ye.credentials === "include" ? ue.withCredentials = !0 : ye.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && S.blob && (ue.responseType = "blob"), ye.headers.forEach(function(ke, Fe) {
                        ue.setRequestHeader(Fe, ke)
                    }), ye.signal && (ye.signal.addEventListener("abort", _e), ue.onreadystatechange = function() {
                        ue.readyState === 4 && ye.signal.removeEventListener("abort", _e)
                    }), ue.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                })
            }
            return Ge.polyfill = !0, f.fetch || (f.fetch = Ge, f.Headers = Y, f.Request = Ae, f.Response = $e), v.Headers = Y, v.Request = Ae, v.Response = $e, v.fetch = Ge, Object.defineProperty(v, "__esModule", {
                value: !0
            }), v
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Ta, Ta.exports);
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
            var v = Object.getOwnPropertyDescriptor(e, n);
            if (v.value !== a || v.enumerable !== !0) return !1
        }
        return !0
    },
    $l = typeof Symbol < "u" && Symbol,
    cy = ly,
    uy = function() {
        return typeof $l != "function" || typeof Symbol != "function" || typeof $l("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : cy()
    },
    hy = "Function.prototype.bind called on incompatible ",
    ia = Array.prototype.slice,
    dy = Object.prototype.toString,
    fy = "[object Function]",
    py = function(e) {
        var n = this;
        if (typeof n != "function" || dy.call(n) !== fy) throw new TypeError(hy + n);
        for (var i = ia.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var D = n.apply(this, i.concat(ia.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(ia.call(arguments)))
            }, v = Math.max(0, n.length - i.length), S = [], k = 0; k < v; k++) S.push("$" + k);
        if (a = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, a.prototype = new I, I.prototype = null
        }
        return a
    },
    gy = py,
    Ua = Function.prototype.bind || gy,
    my = Ua,
    vy = my.call(Function.call, Object.prototype.hasOwnProperty),
    vt, mr = SyntaxError,
    Uc = Function,
    hr = TypeError,
    ra = function(t) {
        try {
            return Uc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Vi = Object.getOwnPropertyDescriptor;
if (Vi) try {
    Vi({}, "")
} catch {
    Vi = null
}
var sa = function() {
        throw new hr
    },
    yy = Vi ? function() {
        try {
            return arguments.callee, sa
        } catch {
            try {
                return Vi(arguments, "callee").get
            } catch {
                return sa
            }
        }
    }() : sa,
    rr = uy(),
    li = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    ar = {},
    wy = typeof Uint8Array > "u" ? vt : li(Uint8Array),
    dr = {
        "%AggregateError%": typeof AggregateError > "u" ? vt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? vt : ArrayBuffer,
        "%ArrayIteratorPrototype%": rr ? li([][Symbol.iterator]()) : vt,
        "%AsyncFromSyncIteratorPrototype%": vt,
        "%AsyncFunction%": ar,
        "%AsyncGenerator%": ar,
        "%AsyncGeneratorFunction%": ar,
        "%AsyncIteratorPrototype%": ar,
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
        "%Function%": Uc,
        "%GeneratorFunction%": ar,
        "%Int8Array%": typeof Int8Array > "u" ? vt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? vt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? vt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": rr ? li(li([][Symbol.iterator]())) : vt,
        "%JSON%": typeof JSON == "object" ? JSON : vt,
        "%Map%": typeof Map > "u" ? vt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !rr ? vt : li(new Map()[Symbol.iterator]()),
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
        "%SetIteratorPrototype%": typeof Set > "u" || !rr ? vt : li(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? vt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": rr ? li("" [Symbol.iterator]()) : vt,
        "%Symbol%": rr ? Symbol : vt,
        "%SyntaxError%": mr,
        "%ThrowTypeError%": yy,
        "%TypedArray%": wy,
        "%TypeError%": hr,
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
        if (e === "%AsyncFunction%") n = ra("async function () {}");
        else if (e === "%GeneratorFunction%") n = ra("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = ra("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = li(a.prototype))
        }
        return dr[e] = n, n
    },
    Fl = {
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
    fs = Ua,
    to = vy,
    Cy = fs.call(Function.call, Array.prototype.concat),
    xy = fs.call(Function.apply, Array.prototype.splice),
    jl = fs.call(Function.call, String.prototype.replace),
    no = fs.call(Function.call, String.prototype.slice),
    Ey = fs.call(Function.call, RegExp.prototype.exec),
    _y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Sy = /\\(\\)?/g,
    ky = function(e) {
        var n = no(e, 0, 1),
            i = no(e, -1);
        if (n === "%" && i !== "%") throw new mr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new mr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return jl(e, _y, function(f, v, S, k) {
            a[a.length] = S ? jl(k, Sy, "$1") : v || f
        }), a
    },
    Ty = function(e, n) {
        var i = e,
            a;
        if (to(Fl, i) && (a = Fl[i], i = "%" + a[0] + "%"), to(dr, i)) {
            var f = dr[i];
            if (f === ar && (f = by(i)), typeof f > "u" && !n) throw new hr("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new mr("intrinsic " + e + " does not exist!")
    },
    qa = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new hr("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new hr('"allowMissing" argument must be a boolean');
        if (Ey(/^%?[^%]*%?$/g, e) === null) throw new mr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = ky(e),
            a = i.length > 0 ? i[0] : "",
            f = Ty("%" + a + "%", n),
            v = f.name,
            S = f.value,
            k = !1,
            I = f.alias;
        I && (a = I[0], xy(i, Cy([0, 1], I)));
        for (var D = 1, $ = !0; D < i.length; D += 1) {
            var J = i[D],
                ie = no(J, 0, 1),
                Y = no(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || Y === '"' || Y === "'" || Y === "`") && ie !== Y) throw new mr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !$) && (k = !0), a += "." + J, v = "%" + a + "%", to(dr, v)) S = dr[v];
            else if (S != null) {
                if (!(J in S)) {
                    if (!n) throw new hr("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Vi && D + 1 >= i.length) {
                    var re = Vi(S, J);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? S = re.get : S = S[J]
                } else $ = to(S, J), S = S[J];
                $ && !k && (dr[v] = S)
            }
        }
        return S
    },
    qc = {
        exports: {}
    };
(function(t) {
    var e = Ua,
        n = qa,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(a, i),
        v = n("%Object.getOwnPropertyDescriptor%", !0),
        S = n("%Object.defineProperty%", !0),
        k = n("%Math.max%");
    if (S) try {
        S({}, "a", {
            value: 1
        })
    } catch {
        S = null
    }
    t.exports = function($) {
        var J = f(e, a, arguments);
        if (v && S) {
            var ie = v(J, "length");
            ie.configurable && S(J, "length", {
                value: 1 + k(0, $.length - (arguments.length - 1))
            })
        }
        return J
    };
    var I = function() {
        return f(e, i, arguments)
    };
    S ? S(t.exports, "apply", {
        value: I
    }) : t.exports.apply = I
})(qc);
var Wc = qa,
    Xc = qc.exports,
    Ay = Xc(Wc("String.prototype.indexOf")),
    Oy = function(e, n) {
        var i = Wc(e, !!n);
        return typeof i == "function" && Ay(e, ".prototype.") > -1 ? Xc(i) : i
    };
const Ry = {},
    Iy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ry
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Dy = Ch(Iy);
var Wa = typeof Map == "function" && Map.prototype,
    oa = Object.getOwnPropertyDescriptor && Wa ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    io = Wa && oa && typeof oa.get == "function" ? oa.get : null,
    Ly = Wa && Map.prototype.forEach,
    Xa = typeof Set == "function" && Set.prototype,
    aa = Object.getOwnPropertyDescriptor && Xa ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    ro = Xa && aa && typeof aa.get == "function" ? aa.get : null,
    My = Xa && Set.prototype.forEach,
    Py = typeof WeakMap == "function" && WeakMap.prototype,
    ns = Py ? WeakMap.prototype.has : null,
    Vy = typeof WeakSet == "function" && WeakSet.prototype,
    is = Vy ? WeakSet.prototype.has : null,
    Ny = typeof WeakRef == "function" && WeakRef.prototype,
    Gl = Ny ? WeakRef.prototype.deref : null,
    By = Boolean.prototype.valueOf,
    $y = Object.prototype.toString,
    Fy = Function.prototype.toString,
    jy = String.prototype.match,
    Ya = String.prototype.slice,
    di = String.prototype.replace,
    Gy = String.prototype.toUpperCase,
    zl = String.prototype.toLowerCase,
    Yc = RegExp.prototype.test,
    Hl = Array.prototype.concat,
    Fn = Array.prototype.join,
    zy = Array.prototype.slice,
    Ul = Math.floor,
    Aa = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    la = Object.getOwnPropertySymbols,
    Oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    vr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    un = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === vr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Kc = Object.prototype.propertyIsEnumerable,
    ql = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Wl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Yc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Ul(-t) : Ul(t);
        if (i !== t) {
            var a = String(i),
                f = Ya.call(e, a.length + 1);
            return di.call(a, n, "$&_") + "." + di.call(di.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return di.call(e, n, "$&_")
}
var Ra = Dy,
    Xl = Ra.custom,
    Yl = Qc(Xl) ? Xl : null,
    Hy = function t(e, n, i, a) {
        var f = n || {};
        if (ci(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (ci(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var v = ci(f, "customInspect") ? f.customInspect : !0;
        if (typeof v != "boolean" && v !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (ci(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (ci(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var S = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return eu(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return S ? Wl(e, k) : k
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return S ? Wl(e, I) : I
        }
        var D = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Ia(e) ? "[Array]" : "[Object]";
        var $ = lw(f, i);
        if (typeof a > "u") a = [];
        else if (Zc(a, e) >= 0) return "[Circular]";

        function J(Ge, H, oe) {
            if (H && (a = zy.call(a), a.push(H)), oe) {
                var Te = {
                    depth: f.depth
                };
                return ci(f, "quoteStyle") && (Te.quoteStyle = f.quoteStyle), t(Ge, Te, i + 1, a)
            }
            return t(Ge, f, i + 1, a)
        }
        if (typeof e == "function" && !Kl(e)) {
            var ie = Zy(e),
                Y = Vs(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (Y.length > 0 ? " { " + Fn.call(Y, ", ") + " }" : "")
        }
        if (Qc(e)) {
            var re = vr ? di.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Oa.call(e);
            return typeof e == "object" && !vr ? Kr(re) : re
        }
        if (sw(e)) {
            for (var m = "<" + zl.call(String(e.nodeName)), P = e.attributes || [], q = 0; q < P.length; q++) m += " " + P[q].name + "=" + Jc(Uy(P[q].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + zl.call(String(e.nodeName)) + ">", m
        }
        if (Ia(e)) {
            if (e.length === 0) return "[]";
            var ae = Vs(e, J);
            return $ && !aw(ae) ? "[" + Da(ae, $) + "]" : "[ " + Fn.call(ae, ", ") + " ]"
        }
        if (Wy(e)) {
            var se = Vs(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !Kc.call(e, "cause") ? "{ [" + String(e) + "] " + Fn.call(Hl.call("[cause]: " + J(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Fn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && v) {
            if (Yl && typeof e[Yl] == "function" && Ra) return Ra(e, {
                depth: D - i
            });
            if (v !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (ew(e)) {
            var ve = [];
            return Ly.call(e, function(Ge, H) {
                ve.push(J(H, e, !0) + " => " + J(Ge, e))
            }), Jl("Map", io.call(e), ve, $)
        }
        if (iw(e)) {
            var d = [];
            return My.call(e, function(Ge) {
                d.push(J(Ge, e))
            }), Jl("Set", ro.call(e), d, $)
        }
        if (tw(e)) return ca("WeakMap");
        if (rw(e)) return ca("WeakSet");
        if (nw(e)) return ca("WeakRef");
        if (Yy(e)) return Kr(J(Number(e)));
        if (Jy(e)) return Kr(J(Aa.call(e)));
        if (Ky(e)) return Kr(By.call(e));
        if (Xy(e)) return Kr(J(String(e)));
        if (!qy(e) && !Kl(e)) {
            var Ee = Vs(e, J),
                Ae = ql ? ql(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Me = e instanceof Object ? "" : "null prototype",
                lt = !Ae && un && Object(e) === e && un in e ? Ya.call(gi(e), 8, -1) : Me ? "Object" : "",
                $e = Ae || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                K = $e + (lt || Me ? "[" + Fn.call(Hl.call([], lt || [], Me || []), ": ") + "] " : "");
            return Ee.length === 0 ? K + "{}" : $ ? K + "{" + Da(Ee, $) + "}" : K + "{ " + Fn.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function Jc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function Uy(t) {
    return di.call(String(t), /"/g, "&quot;")
}

function Ia(t) {
    return gi(t) === "[object Array]" && (!un || !(typeof t == "object" && un in t))
}

function qy(t) {
    return gi(t) === "[object Date]" && (!un || !(typeof t == "object" && un in t))
}

function Kl(t) {
    return gi(t) === "[object RegExp]" && (!un || !(typeof t == "object" && un in t))
}

function Wy(t) {
    return gi(t) === "[object Error]" && (!un || !(typeof t == "object" && un in t))
}

function Xy(t) {
    return gi(t) === "[object String]" && (!un || !(typeof t == "object" && un in t))
}

function Yy(t) {
    return gi(t) === "[object Number]" && (!un || !(typeof t == "object" && un in t))
}

function Ky(t) {
    return gi(t) === "[object Boolean]" && (!un || !(typeof t == "object" && un in t))
}

function Qc(t) {
    if (vr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Oa) return !1;
    try {
        return Oa.call(t), !0
    } catch {}
    return !1
}

function Jy(t) {
    if (!t || typeof t != "object" || !Aa) return !1;
    try {
        return Aa.call(t), !0
    } catch {}
    return !1
}
var Qy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function ci(t, e) {
    return Qy.call(t, e)
}

function gi(t) {
    return $y.call(t)
}

function Zy(t) {
    if (t.name) return t.name;
    var e = jy.call(Fy.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Zc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function ew(t) {
    if (!io || !t || typeof t != "object") return !1;
    try {
        io.call(t);
        try {
            ro.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function tw(t) {
    if (!ns || !t || typeof t != "object") return !1;
    try {
        ns.call(t, ns);
        try {
            is.call(t, is)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function nw(t) {
    if (!Gl || !t || typeof t != "object") return !1;
    try {
        return Gl.call(t), !0
    } catch {}
    return !1
}

function iw(t) {
    if (!ro || !t || typeof t != "object") return !1;
    try {
        ro.call(t);
        try {
            io.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function rw(t) {
    if (!is || !t || typeof t != "object") return !1;
    try {
        is.call(t, is);
        try {
            ns.call(t, ns)
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

function eu(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return eu(Ya.call(t, 0, e.maxStringLength), e) + i
    }
    var a = di.call(di.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ow);
    return Jc(a, "single", e)
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
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Gy.call(e.toString(16))
}

function Kr(t) {
    return "Object(" + t + ")"
}

function ca(t) {
    return t + " { ? }"
}

function Jl(t, e, n, i) {
    var a = i ? Da(n, i) : Fn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function aw(t) {
    for (var e = 0; e < t.length; e++)
        if (Zc(t[e], `
`) >= 0) return !1;
    return !0
}

function lw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = Fn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: Fn.call(Array(e + 1), n)
    }
}

function Da(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + Fn.call(t, "," + n) + `
` + e.prev
}

function Vs(t, e) {
    var n = Ia(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = ci(t, a) ? e(t[a], t) : ""
    }
    var f = typeof la == "function" ? la(t) : [],
        v;
    if (vr) {
        v = {};
        for (var S = 0; S < f.length; S++) v["$" + f[S]] = f[S]
    }
    for (var k in t) !ci(t, k) || n && String(Number(k)) === k && k < t.length || vr && v["$" + k] instanceof Symbol || (Yc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof la == "function")
        for (var I = 0; I < f.length; I++) Kc.call(t, f[I]) && i.push("[" + e(f[I]) + "]: " + e(t[f[I]], t));
    return i
}
var Ka = qa,
    Sr = Oy,
    cw = Hy,
    uw = Ka("%TypeError%"),
    Ns = Ka("%WeakMap%", !0),
    Bs = Ka("%Map%", !0),
    hw = Sr("WeakMap.prototype.get", !0),
    dw = Sr("WeakMap.prototype.set", !0),
    fw = Sr("WeakMap.prototype.has", !0),
    pw = Sr("Map.prototype.get", !0),
    gw = Sr("Map.prototype.set", !0),
    mw = Sr("Map.prototype.has", !0),
    Ja = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    vw = function(t, e) {
        var n = Ja(t, e);
        return n && n.value
    },
    yw = function(t, e, n) {
        var i = Ja(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    ww = function(t, e) {
        return !!Ja(t, e)
    },
    bw = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new uw("Side channel does not contain " + cw(f))
            },
            get: function(f) {
                if (Ns && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return hw(e, f)
                } else if (Bs) {
                    if (n) return pw(n, f)
                } else if (i) return vw(i, f)
            },
            has: function(f) {
                if (Ns && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return fw(e, f)
                } else if (Bs) {
                    if (n) return mw(n, f)
                } else if (i) return ww(i, f);
                return !1
            },
            set: function(f, v) {
                Ns && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ns), dw(e, f, v)) : Bs ? (n || (n = new Bs), gw(n, f, v)) : (i || (i = {
                    key: {},
                    next: null
                }), yw(i, f, v))
            }
        };
        return a
    },
    Cw = String.prototype.replace,
    xw = /%20/g,
    ua = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Qa = {
        default: ua.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return Cw.call(t, xw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: ua.RFC1738,
        RFC3986: ua.RFC3986
    },
    Ew = Qa,
    ha = Object.prototype.hasOwnProperty,
    Mi = Array.isArray,
    Bn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    _w = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Mi(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    tu = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    Sw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Mi(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !ha.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Mi(e) && !Mi(n) && (a = tu(e, i)), Mi(e) && Mi(n) ? (n.forEach(function(f, v) {
            if (ha.call(e, v)) {
                var S = e[v];
                S && typeof S == "object" && f && typeof f == "object" ? e[v] = t(S, f, i) : e.push(f)
            } else e[v] = f
        }), e) : Object.keys(n).reduce(function(f, v) {
            var S = n[v];
            return ha.call(f, v) ? f[v] = t(f[v], S, i) : f[v] = S, f
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
        var v = e;
        if (typeof e == "symbol" ? v = Symbol.prototype.toString.call(e) : typeof e != "string" && (v = String(e)), i === "iso-8859-1") return escape(v).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var S = "", k = 0; k < v.length; ++k) {
            var I = v.charCodeAt(k);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || f === Ew.RFC1738 && (I === 40 || I === 41)) {
                S += v.charAt(k);
                continue
            }
            if (I < 128) {
                S = S + Bn[I];
                continue
            }
            if (I < 2048) {
                S = S + (Bn[192 | I >> 6] + Bn[128 | I & 63]);
                continue
            }
            if (I < 55296 || I >= 57344) {
                S = S + (Bn[224 | I >> 12] + Bn[128 | I >> 6 & 63] + Bn[128 | I & 63]);
                continue
            }
            k += 1, I = 65536 + ((I & 1023) << 10 | v.charCodeAt(k) & 1023), S += Bn[240 | I >> 18] + Bn[128 | I >> 12 & 63] + Bn[128 | I >> 6 & 63] + Bn[128 | I & 63]
        }
        return S
    },
    Ow = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], v = f.obj[f.prop], S = Object.keys(v), k = 0; k < S.length; ++k) {
                var I = S[k],
                    D = v[I];
                typeof D == "object" && D !== null && i.indexOf(D) === -1 && (n.push({
                    obj: v,
                    prop: I
                }), i.push(D))
            }
        return _w(n), e
    },
    Rw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Iw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Dw = function(e, n) {
        return [].concat(e, n)
    },
    Lw = function(e, n) {
        if (Mi(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    nu = {
        arrayToObject: tu,
        assign: kw,
        combine: Dw,
        compact: Ow,
        decode: Tw,
        encode: Aw,
        isBuffer: Iw,
        isRegExp: Rw,
        maybeMap: Lw,
        merge: Sw
    },
    iu = bw,
    La = nu,
    rs = Qa,
    Mw = Object.prototype.hasOwnProperty,
    Ql = {
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
    ti = Array.isArray,
    Pw = String.prototype.split,
    Vw = Array.prototype.push,
    ru = function(t, e) {
        Vw.apply(t, ti(e) ? e : [e])
    },
    Nw = Date.prototype.toISOString,
    Zl = rs.default,
    rn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: La.encode,
        encodeValuesOnly: !1,
        format: Zl,
        formatter: rs.formatters[Zl],
        indices: !1,
        serializeDate: function(e) {
            return Nw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Bw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    da = {},
    $w = function t(e, n, i, a, f, v, S, k, I, D, $, J, ie, Y, re, m) {
        for (var P = e, q = m, ae = 0, se = !1;
            (q = q.get(da)) !== void 0 && !se;) {
            var ve = q.get(e);
            if (ae += 1, typeof ve < "u") {
                if (ve === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof q.get(da) > "u" && (ae = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = $(P) : i === "comma" && ti(P) && (P = La.maybeMap(P, function(ue) {
                return ue instanceof Date ? $(ue) : ue
            })), P === null) {
            if (f) return S && !Y ? S(n, rn.encoder, re, "key", J) : n;
            P = ""
        }
        if (Bw(P) || La.isBuffer(P)) {
            if (S) {
                var d = Y ? n : S(n, rn.encoder, re, "key", J);
                if (i === "comma" && Y) {
                    for (var Ee = Pw.call(String(P), ","), Ae = "", Me = 0; Me < Ee.length; ++Me) Ae += (Me === 0 ? "" : ",") + ie(S(Ee[Me], rn.encoder, re, "value", J));
                    return [ie(d) + (a && ti(P) && Ee.length === 1 ? "[]" : "") + "=" + Ae]
                }
                return [ie(d) + "=" + ie(S(P, rn.encoder, re, "value", J))]
            }
            return [ie(n) + "=" + ie(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var $e;
        if (i === "comma" && ti(P)) $e = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ti(k)) $e = k;
        else {
            var K = Object.keys(P);
            $e = I ? K.sort(I) : K
        }
        for (var Ge = a && ti(P) && P.length === 1 ? n + "[]" : n, H = 0; H < $e.length; ++H) {
            var oe = $e[H],
                Te = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(v && Te === null)) {
                var we = ti(P) ? typeof i == "function" ? i(Ge, oe) : Ge : Ge + (D ? "." + oe : "[" + oe + "]");
                m.set(e, ae);
                var ye = iu();
                ye.set(da, m), ru(lt, t(Te, we, i, a, f, v, S, k, I, D, $, J, ie, Y, re, ye))
            }
        }
        return lt
    },
    Fw = function(e) {
        if (!e) return rn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || rn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = rs.default;
        if (typeof e.format < "u") {
            if (!Mw.call(rs.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = rs.formatters[i],
            f = rn.filter;
        return (typeof e.filter == "function" || ti(e.filter)) && (f = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : rn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? rn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : rn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? rn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : rn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : rn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : rn.encodeValuesOnly,
            filter: f,
            format: i,
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : rn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : rn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : rn.strictNullHandling
        }
    },
    jw = function(t, e) {
        var n = t,
            i = Fw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ti(i.filter) && (f = i.filter, a = f);
        var v = [];
        if (typeof n != "object" || n === null) return "";
        var S;
        e && e.arrayFormat in Ql ? S = e.arrayFormat : e && "indices" in e ? S = e.indices ? "indices" : "repeat" : S = "indices";
        var k = Ql[S];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var D = iu(), $ = 0; $ < a.length; ++$) {
            var J = a[$];
            i.skipNulls && n[J] === null || ru(v, $w(n[J], J, k, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var ie = v.join(i.delimiter),
            Y = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? Y += "utf8=%26%2310003%3B&" : Y += "utf8=%E2%9C%93&"), ie.length > 0 ? Y + ie : ""
    },
    yr = nu,
    Ma = Object.prototype.hasOwnProperty,
    Gw = Array.isArray,
    en = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: yr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    zw = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    su = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Hw = "utf8=%26%2310003%3B",
    Uw = "utf8=%E2%9C%93",
    qw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            v = a.split(n.delimiter, f),
            S = -1,
            k, I = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < v.length; ++k) v[k].indexOf("utf8=") === 0 && (v[k] === Uw ? I = "utf-8" : v[k] === Hw && (I = "iso-8859-1"), S = k, k = v.length);
        for (k = 0; k < v.length; ++k)
            if (k !== S) {
                var D = v[k],
                    $ = D.indexOf("]="),
                    J = $ === -1 ? D.indexOf("=") : $ + 1,
                    ie, Y;
                J === -1 ? (ie = n.decoder(D, en.decoder, I, "key"), Y = n.strictNullHandling ? null : "") : (ie = n.decoder(D.slice(0, J), en.decoder, I, "key"), Y = yr.maybeMap(su(D.slice(J + 1), n), function(re) {
                    return n.decoder(re, en.decoder, I, "value")
                })), Y && n.interpretNumericEntities && I === "iso-8859-1" && (Y = zw(Y)), D.indexOf("[]=") > -1 && (Y = Gw(Y) ? [Y] : Y), Ma.call(i, ie) ? i[ie] = yr.combine(i[ie], Y) : i[ie] = Y
            } return i
    },
    Ww = function(t, e, n, i) {
        for (var a = i ? e : su(e, n), f = t.length - 1; f >= 0; --f) {
            var v, S = t[f];
            if (S === "[]" && n.parseArrays) v = [].concat(a);
            else {
                v = n.plainObjects ? Object.create(null) : {};
                var k = S.charAt(0) === "[" && S.charAt(S.length - 1) === "]" ? S.slice(1, -1) : S,
                    I = parseInt(k, 10);
                !n.parseArrays && k === "" ? v = {
                    0: a
                } : !isNaN(I) && S !== k && String(I) === k && I >= 0 && n.parseArrays && I <= n.arrayLimit ? (v = [], v[I] = a) : k !== "__proto__" && (v[k] = a)
            }
            a = v
        }
        return a
    },
    Xw = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                v = /(\[[^[\]]*])/,
                S = /(\[[^[\]]*])/g,
                k = i.depth > 0 && v.exec(f),
                I = k ? f.slice(0, k.index) : f,
                D = [];
            if (I) {
                if (!i.plainObjects && Ma.call(Object.prototype, I) && !i.allowPrototypes) return;
                D.push(I)
            }
            for (var $ = 0; i.depth > 0 && (k = S.exec(f)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Ma.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(k[1])
            }
            return k && D.push("[" + f.slice(k.index) + "]"), Ww(D, n, i, a)
        }
    },
    Yw = function(e) {
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
            delimiter: typeof e.delimiter == "string" || yr.isRegExp(e.delimiter) ? e.delimiter : en.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : en.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : en.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : en.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : en.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : en.strictNullHandling
        }
    },
    Kw = function(t, e) {
        var n = Yw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? qw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), v = 0; v < f.length; ++v) {
            var S = f[v],
                k = Xw(S, i[S], n, typeof t == "string");
            a = yr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : yr.compact(a)
    },
    Jw = jw,
    Qw = Kw,
    Zw = Qa,
    ou = {
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
var yo = {
    CreateRoomReply: eb,
    GetRoomReply: tb,
    GetAudienceReply: nb,
    RoomExit: ib,
    RoomLock: rb
};
const ec = Ta.exports,
    sb = ou,
    {
        CreateRoomReply: ob,
        GetRoomReply: ab
    } = yo;
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
            v = await (await ec(i, {
                method: "POST"
            })).json();
        if (!v.ok) throw new Error(`failed to create room: ${v.error}`);
        let S = v.body;
        return new ob({
            code: S.code,
            token: S.token,
            host: S.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await ec(n)).json();
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
    lr = null;
typeof WebSocket < "u" ? lr = WebSocket : typeof MozWebSocket < "u" ? lr = MozWebSocket : typeof yt < "u" ? lr = yt.WebSocket || yt.MozWebSocket : typeof window < "u" ? lr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (lr = self.WebSocket || self.MozWebSocket);
var ub = lr,
    Za = {
        exports: {}
    },
    fr = typeof Reflect == "object" ? Reflect : null,
    tc = fr && typeof fr.apply == "function" ? fr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    qs;
fr && typeof fr.ownKeys == "function" ? qs = fr.ownKeys : Object.getOwnPropertySymbols ? qs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : qs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function hb(t) {
    console && console.warn && console.warn(t)
}
var au = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Za.exports = Rt;
Za.exports.once = gb;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var nc = 10;

function wo(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return nc
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || au(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        nc = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || au(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function lu(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return lu(this)
};
Rt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var a = e === "error",
        f = this._events;
    if (f !== void 0) a = a && f.error === void 0;
    else if (!a) return !1;
    if (a) {
        var v;
        if (n.length > 0 && (v = n[0]), v instanceof Error) throw v;
        var S = new Error("Unhandled error." + (v ? " (" + v.message + ")" : ""));
        throw S.context = v, S
    }
    var k = f[e];
    if (k === void 0) return !1;
    if (typeof k == "function") tc(k, this, n);
    else
        for (var I = k.length, D = fu(k, I), i = 0; i < I; ++i) tc(D[i], this, n);
    return !0
};

function cu(t, e, n, i) {
    var a, f, v;
    if (wo(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), v = f[e]), v === void 0) v = f[e] = n, ++t._eventsCount;
    else if (typeof v == "function" ? v = f[e] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), a = lu(t), a > 0 && v.length > a && !v.warned) {
        v.warned = !0;
        var S = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        S.name = "MaxListenersExceededWarning", S.emitter = t, S.type = e, S.count = v.length, hb(S)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return cu(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return cu(this, e, n, !0)
};

function db() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function uu(t, e, n) {
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
    return wo(n), this.on(e, uu(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return wo(n), this.prependListener(e, uu(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, v, S;
    if (wo(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, v = i.length - 1; v >= 0; v--)
            if (i[v] === n || i[v].listener === n) {
                S = i[v].listener, f = v;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : fb(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, S || n)
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
            v;
        for (a = 0; a < f.length; ++a) v = f[a], v !== "removeListener" && this.removeAllListeners(v);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (a = n.length - 1; a >= 0; a--) this.removeListener(e, n[a]);
    return this
};

function hu(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? pb(a) : fu(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return hu(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return hu(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : du.call(t, e)
};
Rt.prototype.listenerCount = du;

function du(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
Rt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? qs(this._events) : []
};

function fu(t, e) {
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
        function a(v) {
            t.removeListener(e, f), i(v)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        pu(t, e, f, {
            once: !0
        }), e !== "error" && mb(t, a, {
            once: !0
        })
    })
}

function mb(t, e, n) {
    typeof t.on == "function" && pu(t, "error", e, n)
}

function pu(t, e, n, i) {
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
class bo extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class ps extends bo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class gu extends ps {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class mu extends ps {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class vu extends ps {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class Tt extends bo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class yu extends Tt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class wu extends Tt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class bu extends Tt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class Cu extends Tt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class xu extends Tt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class Eu extends Tt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class _u extends Tt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class Su extends Tt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class ku extends Tt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Tu extends Tt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Au extends Tt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Ou extends Tt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Ru extends Tt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Iu extends Tt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Du extends Tt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Lu extends Tt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Mu extends Tt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Pu extends Tt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Vu extends Tt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Nu extends Tt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Bu extends Tt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class $u extends Tt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Fu extends Tt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class ju extends Tt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Gu extends Tt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class zu extends Tt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Hu extends Tt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class Uu extends Tt {
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
    }) : new bo({
        message: e
    })
}
var ni = {
    createError: yb,
    CallError: bo,
    EcastServerError: ps,
    EcastCreateRoomFailed: gu,
    EcastDialRoomFailed: mu,
    EcastServerIsShuttingDown: vu,
    EcastClientError: Tt,
    EcastParseError: yu,
    EcastRequestIsMissingOpcode: wu,
    EcastRequestHasInvalidOpcode: bu,
    EcastRequestHasInvalidArguments: Cu,
    EcastEntityNotFound: xu,
    EcastEntityAlreadyExists: Eu,
    EcastEntityTypeError: _u,
    EcastNoSuchClient: Su,
    EcastRoomIsLocked: ku,
    EcastRoomIsFull: Tu,
    EcastLicenseNotFound: Au,
    EcastLicenseCheckFailed: Ou,
    EcastRoomNotFound: Ru,
    EcastInvalidRole: Iu,
    EcastTwitchLoginRequired: Du,
    EcastInvalidOption: Lu,
    EcastPasswordRequired: Mu,
    EcastInvalidPassword: Pu,
    EcastNameRequired: Vu,
    EcastFilterError: Nu,
    EcastNoSuchFilter: Bu,
    EcastPermissionDenied: $u,
    EcastNotConnected: Fu,
    EcastIllegalOperation: ju,
    EcastACLChangeDenied: Gu,
    EcastRoomHasEnded: zu,
    EcastEntityLocked: Hu,
    EcastRateLimitExceeded: Uu,
    ObservedError: vb
};
const wb = {
    1e3: ps,
    1001: gu,
    1002: mu,
    1003: vu,
    2e3: Tt,
    2001: yu,
    2002: wu,
    2003: bu,
    2004: Cu,
    2005: xu,
    2006: Eu,
    2007: _u,
    2008: Su,
    2009: ku,
    2010: Tu,
    2011: Au,
    2012: Ou,
    2013: Ru,
    2014: Iu,
    2015: Du,
    2016: Lu,
    2017: Mu,
    2018: Pu,
    2019: Vu,
    2021: Nu,
    2022: Bu,
    2023: $u,
    2024: Fu,
    2025: ju,
    2026: Gu,
    2027: zu,
    2028: Hu,
    2420: Uu
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
var el = {
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
var tl = {
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
var nl = {
    GCounter: kb
};
class Tb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var qu = {
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
var il = {
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
var rl = {
    PNCounter: Rb
};
class Ib {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var Wu = {
    Reply: Ib
};
class Db {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Lb = {
    Request: Db
};
class Mb {
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
var sl = {
    TextEntity: Mb,
    TextEcho: Pb
};
class Vb {
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
var ol = {
    TextRing: Vb
};
class Nb {
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
var Xu = {
    ArtifactEntity: Nb
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
var al = {
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
class Gb {
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
class zb {
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
var Yu = {
    StackEntity: jb,
    StackElement: Gb,
    StackElements: zb
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
var Ku = {
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
var Ju = {
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
var Qu = {
    NumberEntity: Kb
};
const {
    ArtifactEntity: Jb
} = Xu, {
    ClientWelcome: Qb,
    ClientConnected: Zb,
    ClientDisconnected: e0,
    ClientKicked: t0,
    ClientSend: n0
} = el, {
    CountGroup: i0
} = tl, {
    DoodleEntity: r0,
    DoodleLine: s0,
    DoodleLineRemoved: o0
} = al, {
    StackEntity: a0,
    StackElement: l0,
    StackElements: c0
} = Yu, {
    DropEntity: u0
} = Ku, {
    Echo: h0
} = qb, {
    LockEntity: d0
} = Xb, {
    GCounter: f0
} = nl, {
    GetAudienceReply: p0,
    RoomExit: g0,
    RoomLock: m0
} = yo, {
    Notification: v0
} = qu, {
    OK: y0
} = Ju, {
    NumberEntity: w0
} = Qu, {
    ObjectEcho: b0,
    ObjectEntity: C0
} = il, {
    PNCounter: ic
} = rl, {
    Reply: x0
} = Wu, {
    TextEcho: E0,
    TextEntity: _0
} = sl, {
    TextRing: S0
} = ol, {
    createError: rc,
    ObservedError: k0
} = ni;

function Pa(t, e, n) {
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
            return rc({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new k0({
                to: e.to,
                error: rc({
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
                Object.entries(e.entities).forEach(([f, v]) => {
                    a[f] = Pa(v[0], v[1], v[2])
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
            return new ic({
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
            return new ic({
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
        result: Pa(n, e.result)
    }) : new v0({
        pc: e.pc,
        opcode: n,
        result: Pa(n, e.result)
    })
}
var A0 = {
    parseResponseMessage: T0
};
const sc = ub,
    O0 = ou,
    R0 = Za.exports,
    {
        CallError: I0
    } = ni,
    {
        ClientWelcome: D0
    } = el,
    {
        CountGroup: L0
    } = tl,
    {
        GCounter: M0
    } = nl,
    {
        Notification: oc
    } = qu,
    {
        ObjectEntity: fa
    } = il,
    {
        PNCounter: P0
    } = rl,
    {
        Reply: V0
    } = Wu,
    {
        Request: N0
    } = Lb,
    {
        TextEntity: pa
    } = sl,
    {
        TextRing: B0
    } = ol,
    {
        parseResponseMessage: $0
    } = A0,
    {
        DoodleEntity: F0
    } = al,
    {
        StackEntity: j0
    } = Yu,
    G0 = 1e3 + Math.floor(Math.random() * 500),
    ac = 13e3;
class z0 extends R0 {
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
            let v = !1,
                S = !1,
                k = D => {
                    a(D), v = !0
                },
                I = D => {
                    f(D), v = !0
                };
            this.conn = new sc(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const $ = $0(D);
                if ($ instanceof V0) this.onReply($);
                else if ($ instanceof oc) {
                    if ($.result instanceof D0) S = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), k($.result);
                    else if (!v) {
                        I($.result);
                        return
                    }
                    this.onNotification($)
                } else console.error(`failed to parse response messsage: ${$}`)
            }, this.conn.onerror = D => {
                v ? this.emit("socketError", D) : I(D)
            }, this.conn.onclose = D => {
                this.debugLog("onclose", D.code), S && D.code === 1006 ? this.reconnect() : this.emit("socketClose", D)
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
            n = G0;
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
            if (n >= ac) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(ac, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new oc(e);
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
        if (this.conn.readyState !== sc.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new N0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((S, k) => {
                this.pending[i] = {
                    resolve: S,
                    reject: k,
                    request: a
                }
            }),
            v = JSON.stringify(a);
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
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/create", a);
        return this.entities[e] = new fa({
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
        return this.entities[e] = new fa({
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
        return this.entities[e] = new fa({
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
                accept: v,
                reject: S
            } = i;
        f && (a.acl = f), v && (a.accept = v), S && (a.reject = S);
        const k = await this.send("text/create", a);
        return this.entities[e] = new pa({
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
        return this.entities[e] = new pa({
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
        return this.entities[e] = new pa({
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
            live: v,
            maxPoints: S,
            size: k,
            weights: I
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = v, S != null && (i.maxPoints = S), k && (i.size = k), I && (i.weights = I);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new F0({
            key: e,
            colors: f,
            lines: [],
            live: v,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: k,
            weights: I,
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
            color: a,
            weight: f,
            points: v
        } = n, S = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: f,
            points: v
        }), k = {
            layer: i,
            color: a,
            weight: f,
            points: v
        };
        return this.entities[e].lines.push(k), S
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
        return this.entities[e] = new L0({
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
        return this.entities[e] = new M0({
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
                reject: v
            } = n;
        a && (i.limit = a), f && (i.accept = f), v && (i.reject = v);
        const S = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new B0({
            key: e,
            elements: [],
            limit: a,
            meta: {
                locked: !1
            }
        }), S
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
    WSClient: z0
};
const {
    APIClient: U0
} = cb, {
    WSClient: q0
} = H0, {
    CreateRoomReply: W0,
    GetRoomReply: X0
} = yo, {
    ClientWelcome: Y0,
    ClientDisconnected: K0
} = el, {
    ArtifactEntity: J0
} = Xu, {
    GCounter: Q0
} = nl, {
    NumberEntity: Z0
} = Qu, {
    TextEntity: eC
} = sl, {
    DoodleEntity: tC
} = al, {
    ObjectEntity: nC
} = il, {
    CountGroup: iC
} = tl, {
    DropEntity: rC
} = Ku, {
    OK: sC
} = Ju, {
    RoomExit: oC
} = yo, {
    TextRing: aC
} = ol, {
    PNCounter: lC
} = rl;
var Di = {
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

function lc(...t) {
    console.log(...t)
}

function cC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var cc = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(yt, function(n) {
        var i = typeof window < "u" ? window : typeof yt < "u" ? yt : typeof self < "u" ? self : {},
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
            v;

        function S(F) {
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
            for (var V = /([^=?#&]+)=?([^&]*)/g, W = {}, L; L = V.exec(F);) {
                var U = S(L[1]),
                    fe = S(L[2]);
                U === null || fe === null || U in W || (W[U] = fe)
            }
            return W
        }

        function D(F, V) {
            V = V || "";
            var W = [],
                L, U;
            typeof V != "string" && (V = "?");
            for (U in F)
                if (f.call(F, U)) {
                    if (L = F[U], !L && (L === null || L === v || isNaN(L)) && (L = ""), U = k(U), L = k(L), U === null || L === null) continue;
                    W.push(U + "=" + L)
                } return W.length ? V + W.join("&") : ""
        }
        var $ = D,
            J = I,
            ie = {
                stringify: $,
                parse: J
            },
            Y = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            m = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + m + "+");

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
            var L = {},
                U = typeof F,
                fe;
            if (F.protocol === "blob:") L = new Me(unescape(F.pathname), {});
            else if (U === "string") {
                L = new Me(F, {});
                for (fe in se) delete L[fe]
            } else if (U === "object") {
                for (fe in F) fe in se || (L[fe] = F[fe]);
                L.slashes === void 0 && (L.slashes = Y.test(F.href))
            }
            return L
        }

        function d(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function Ee(F, V) {
            F = q(F), V = V || {};
            var W = re.exec(F),
                L = W[1] ? W[1].toLowerCase() : "",
                U = !!W[2],
                fe = !!W[3],
                pe = 0,
                Ve;
            return U ? fe ? (Ve = W[2] + W[3] + W[4], pe = W[2].length + W[3].length) : (Ve = W[2] + W[4], pe = W[2].length) : fe ? (Ve = W[3] + W[4], pe = W[3].length) : Ve = W[4], L === "file:" ? pe >= 2 && (Ve = Ve.slice(2)) : d(L) ? Ve = W[4] : L ? U && (Ve = Ve.slice(2)) : pe >= 2 && d(V.protocol) && (Ve = W[4]), {
                protocol: L,
                slashes: U || d(L),
                slashesCount: pe,
                rest: Ve
            }
        }

        function Ae(F, V) {
            if (F === "") return V;
            for (var W = (V || "/").split("/").slice(0, -1).concat(F.split("/")), L = W.length, U = W[L - 1], fe = !1, pe = 0; L--;) W[L] === "." ? W.splice(L, 1) : W[L] === ".." ? (W.splice(L, 1), pe++) : pe && (L === 0 && (fe = !0), W.splice(L, 1), pe--);
            return fe && W.unshift(""), (U === "." || U === "..") && W.push(""), W.join("/")
        }

        function Me(F, V, W) {
            if (F = q(F), !(this instanceof Me)) return new Me(F, V, W);
            var L, U, fe, pe, Ve, Ne, gt = ae.slice(),
                jt = typeof V,
                Je = this,
                In = 0;
            for (jt !== "object" && jt !== "string" && (W = V, V = null), W && typeof W != "function" && (W = ie.parse), V = ve(V), U = Ee(F || "", V), L = !U.protocol && !U.slashes, Je.slashes = U.slashes || L && V.slashes, Je.protocol = U.protocol || V.protocol || "", F = U.rest, (Je.protocol === "file:" || !U.slashes && (U.protocol || U.slashesCount < 2 || !d(Je.protocol))) && (gt[3] = [/(.*)/, "pathname"]); In < gt.length; In++) {
                if (pe = gt[In], typeof pe == "function") {
                    F = pe(F, Je);
                    continue
                }
                fe = pe[0], Ne = pe[1], fe !== fe ? Je[Ne] = F : typeof fe == "string" ? ~(Ve = F.indexOf(fe)) && (typeof pe[2] == "number" ? (Je[Ne] = F.slice(0, Ve), F = F.slice(Ve + pe[2])) : (Je[Ne] = F.slice(Ve), F = F.slice(0, Ve))) : (Ve = fe.exec(F)) && (Je[Ne] = Ve[1], F = F.slice(0, Ve.index)), Je[Ne] = Je[Ne] || L && pe[3] && V[Ne] || "", pe[4] && (Je[Ne] = Je[Ne].toLowerCase())
            }
            W && (Je.query = W(Je.query)), L && V.slashes && Je.pathname.charAt(0) !== "/" && (Je.pathname !== "" || V.pathname !== "") && (Je.pathname = Ae(Je.pathname, V.pathname)), Je.pathname.charAt(0) !== "/" && d(Je.protocol) && (Je.pathname = "/" + Je.pathname), a(Je.port, Je.protocol) || (Je.host = Je.hostname, Je.port = ""), Je.username = Je.password = "", Je.auth && (pe = Je.auth.split(":"), Je.username = pe[0] || "", Je.password = pe[1] || ""), Je.origin = Je.protocol !== "file:" && d(Je.protocol) && Je.host ? Je.protocol + "//" + Je.host : "null", Je.href = Je.toString()
        }

        function lt(F, V, W) {
            var L = this;
            switch (F) {
                case "query":
                    typeof V == "string" && V.length && (V = (W || ie.parse)(V)), L[F] = V;
                    break;
                case "port":
                    L[F] = V, a(V, L.protocol) ? V && (L.host = L.hostname + ":" + V) : (L.host = L.hostname, L[F] = "");
                    break;
                case "hostname":
                    L[F] = V, L.port && (V += ":" + L.port), L.host = V;
                    break;
                case "host":
                    L[F] = V, /:\d+$/.test(V) ? (V = V.split(":"), L.port = V.pop(), L.hostname = V.join(":")) : (L.hostname = V, L.port = "");
                    break;
                case "protocol":
                    L.protocol = V.toLowerCase(), L.slashes = !W;
                    break;
                case "pathname":
                case "hash":
                    if (V) {
                        var U = F === "pathname" ? "/" : "#";
                        L[F] = V.charAt(0) !== U ? U + V : V
                    } else L[F] = V;
                    break;
                default:
                    L[F] = V
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (L[pe[1]] = L[pe[1]].toLowerCase())
            }
            return L.origin = L.protocol !== "file:" && d(L.protocol) && L.host ? L.protocol + "//" + L.host : "null", L.href = L.toString(), L
        }

        function $e(F) {
            (!F || typeof F != "function") && (F = ie.stringify);
            var V, W = this,
                L = W.protocol;
            L && L.charAt(L.length - 1) !== ":" && (L += ":");
            var U = L + (W.slashes || d(W.protocol) ? "//" : "");
            return W.username && (U += W.username, W.password && (U += ":" + W.password), U += "@"), U += W.host + W.pathname, V = typeof W.query == "object" ? F(W.query) : W.query, V && (U += V.charAt(0) !== "?" ? "?" + V : V), W.hash && (U += W.hash), U
        }
        Me.prototype = {
            set: lt,
            toString: $e
        }, Me.extractProtocol = Ee, Me.location = ve, Me.trimLeft = q, Me.qs = ie;
        var K = Me;

        function Ge(F, V) {
            setTimeout(function(W) {
                return F.call(W)
            }, 4, V)
        }

        function H(F, V) {
            typeof process < "u" && console[F].call(null, V)
        }

        function oe(F, V) {
            F === void 0 && (F = []);
            var W = [];
            return F.forEach(function(L) {
                V(L) || W.push(L)
            }), W
        }

        function Te(F, V) {
            F === void 0 && (F = []);
            var W = [];
            return F.forEach(function(L) {
                V(L) && W.push(L)
            }), W
        }
        var we = function() {
            this.listeners = {}
        };
        we.prototype.addEventListener = function(V, W) {
            typeof W == "function" && (Array.isArray(this.listeners[V]) || (this.listeners[V] = []), Te(this.listeners[V], function(L) {
                return L === W
            }).length === 0 && this.listeners[V].push(W))
        }, we.prototype.removeEventListener = function(V, W) {
            var L = this.listeners[V];
            this.listeners[V] = oe(L, function(U) {
                return U === W
            })
        }, we.prototype.dispatchEvent = function(V) {
            for (var W = this, L = [], U = arguments.length - 1; U-- > 0;) L[U] = arguments[U + 1];
            var fe = V.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Ve) {
                L.length > 0 ? Ve.apply(W, L) : Ve.call(W, V)
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
            var L = ye(W),
                U = this.urlMap[L];
            if (U && U.server && U.websockets.indexOf(V) === -1) return U.websockets.push(V), U.server
        }, ue.prototype.addMembershipToRoom = function(V, W) {
            var L = this.urlMap[ye(V.url)];
            L && L.server && L.websockets.indexOf(V) !== -1 && (L.roomMemberships[W] || (L.roomMemberships[W] = []), L.roomMemberships[W].push(V))
        }, ue.prototype.attachServer = function(V, W) {
            var L = ye(W),
                U = this.urlMap[L];
            if (!U) return this.urlMap[L] = {
                server: V,
                websockets: [],
                roomMemberships: {}
            }, V
        }, ue.prototype.serverLookup = function(V) {
            var W = ye(V),
                L = this.urlMap[W];
            if (L) return L.server
        }, ue.prototype.websocketsLookup = function(V, W, L) {
            var U = ye(V),
                fe, pe = this.urlMap[U];
            if (fe = pe ? pe.websockets : [], W) {
                var Ve = pe.roomMemberships[W];
                fe = Ve || []
            }
            return L ? fe.filter(function(Ne) {
                return Ne !== L
            }) : fe
        }, ue.prototype.removeServer = function(V) {
            delete this.urlMap[ye(V)]
        }, ue.prototype.removeWebSocket = function(V, W) {
            var L = ye(W),
                U = this.urlMap[L];
            U && (U.websockets = oe(U.websockets, function(fe) {
                return fe === V
            }))
        }, ue.prototype.removeMembershipFromRoom = function(V, W) {
            var L = this.urlMap[ye(V.url)],
                U = L.roomMemberships[W];
            L && U !== null && (L.roomMemberships[W] = oe(U, function(fe) {
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
            Fe = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Qe = function() {};
        Qe.prototype.stopPropagation = function() {}, Qe.prototype.stopImmediatePropagation = function() {}, Qe.prototype.initEvent = function(V, W, L) {
            V === void 0 && (V = "undefined"), W === void 0 && (W = !1), L === void 0 && (L = !1), this.type = "" + V, this.bubbles = Boolean(W), this.cancelable = Boolean(L)
        };
        var ft = function(F) {
                function V(W, L) {
                    if (L === void 0 && (L = {}), F.call(this), !W) throw new TypeError(Fe.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError(Fe.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var U = L.bubbles,
                        fe = L.cancelable;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = U ? Boolean(U) : !1
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V
            }(Qe),
            $t = function(F) {
                function V(W, L) {
                    if (L === void 0 && (L = {}), F.call(this), !W) throw new TypeError(Fe.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError(Fe.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var U = L.bubbles,
                        fe = L.cancelable,
                        pe = L.data,
                        Ve = L.origin,
                        Ne = L.lastEventId,
                        gt = L.ports;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = U ? Boolean(U) : !1, this.origin = "" + Ve, this.ports = typeof gt > "u" ? null : gt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Ne || "")
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V
            }(Qe),
            qt = function(F) {
                function V(W, L) {
                    if (L === void 0 && (L = {}), F.call(this), !W) throw new TypeError(Fe.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError(Fe.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var U = L.bubbles,
                        fe = L.cancelable,
                        pe = L.code,
                        Ve = L.reason,
                        Ne = L.wasClean;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = U ? Boolean(U) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Ve || ""), this.wasClean = Ne ? Boolean(Ne) : !1
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V
            }(Qe);

        function E(F) {
            var V = F.type,
                W = F.target,
                L = new ft(V);
            return W && (L.target = W, L.srcElement = W, L.currentTarget = W), L
        }

        function l(F) {
            var V = F.type,
                W = F.origin,
                L = F.data,
                U = F.target,
                fe = new $t(V, {
                    data: L,
                    origin: W
                });
            return U && (fe.target = U, fe.srcElement = U, fe.currentTarget = U), fe
        }

        function g(F) {
            var V = F.code,
                W = F.reason,
                L = F.type,
                U = F.target,
                fe = F.wasClean;
            fe || (fe = V === ke.CLOSE_NORMAL || V === ke.CLOSE_NO_STATUS);
            var pe = new qt(L, {
                code: V,
                reason: W,
                wasClean: fe
            });
            return U && (pe.target = U, pe.srcElement = U, pe.currentTarget = U), pe
        }

        function _(F, V, W) {
            F.readyState = De.CLOSING;
            var L = _e.serverLookup(F.url),
                U = g({
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
            Ge(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(U), F.dispatchEvent(fe), L && L.dispatchEvent(U, L)
            }, F)
        }

        function O(F, V, W) {
            F.readyState = De.CLOSING;
            var L = _e.serverLookup(F.url),
                U = g({
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
            Ge(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(pe), F.dispatchEvent(U), F.dispatchEvent(fe), L && L.dispatchEvent(U, L)
            }, F)
        }

        function M(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var N = new WeakMap;

        function te(F) {
            if (N.has(F)) return N.get(F);
            var V = new Proxy(F, {
                get: function(L, U) {
                    return U === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Ve = pe.code || ke.CLOSE_NORMAL,
                            Ne = pe.reason || "";
                        _(V, Ve, Ne)
                    } : U === "send" ? function(pe) {
                        pe = M(pe), F.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: F
                        }))
                    } : U === "on" ? function(pe, Ve) {
                        F.addEventListener("server::" + pe, Ve)
                    } : U === "target" ? F : L[U]
                }
            });
            return N.set(F, V), V
        }

        function Se(F) {
            var V = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (V ? V.length : 0)
        }

        function he(F) {
            var V = new K(F),
                W = V.pathname,
                L = V.protocol,
                U = V.hash;
            if (!F) throw new TypeError(Fe.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (W || (V.pathname = "/"), L === "") throw new SyntaxError(Fe.CONSTRUCTOR_ERROR + " The URL '" + V.toString() + "' is invalid.");
            if (L !== "ws:" && L !== "wss:") throw new SyntaxError(Fe.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + L + "' is not allowed.");
            if (U !== "") throw new SyntaxError(Fe.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + U + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return V.toString()
        }

        function Ie(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError(Fe.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var V = F.map(function(L) {
                    return {
                        count: 1,
                        protocol: L
                    }
                }).reduce(function(L, U) {
                    return L[U.protocol] = (L[U.protocol] || 0) + U.count, L
                }, {}),
                W = Object.keys(V).filter(function(L) {
                    return V[L] > 1
                });
            if (W.length > 0) throw new SyntaxError(Fe.CONSTRUCTOR_ERROR + " The subprotocol '" + W[0] + "' is duplicated.");
            return F
        }
        var De = function(F) {
            function V(L, U) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(L), U = Ie(U), this.protocol = U[0] || "", this.binaryType = "blob", this.readyState = V.CONNECTING;
                var fe = te(this),
                    pe = _e.attachWebSocket(fe, this.url);
                Ge(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = V.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: ke.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var Ne = pe.options.selectProtocol(U),
                                    gt = Ne !== "",
                                    jt = U.indexOf(Ne) !== -1;
                                if (gt && !jt) {
                                    this.readyState = V.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(E({
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
                    })), H("error", "WebSocket connection to '" + this.url + "' failed")
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
            }, W.onopen.set = function(L) {
                this.removeEventListener("open", this._onopen), this._onopen = L, this.addEventListener("open", L)
            }, W.onmessage.set = function(L) {
                this.removeEventListener("message", this._onmessage), this._onmessage = L, this.addEventListener("message", L)
            }, W.onclose.set = function(L) {
                this.removeEventListener("close", this._onclose), this._onclose = L, this.addEventListener("close", L)
            }, W.onerror.set = function(L) {
                this.removeEventListener("error", this._onerror), this._onerror = L, this.addEventListener("error", L)
            }, V.prototype.send = function(U) {
                var fe = this;
                if (this.readyState === V.CLOSING || this.readyState === V.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: M(U)
                    }),
                    Ve = _e.serverLookup(this.url);
                Ve && Ge(function() {
                    fe.dispatchEvent(pe, U)
                }, Ve)
            }, V.prototype.close = function(U, fe) {
                if (U !== void 0 && (typeof U != "number" || U !== 1e3 && (U < 3e3 || U > 4999))) throw new TypeError(Fe.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + U + " is neither.");
                if (fe !== void 0) {
                    var pe = Se(fe);
                    if (pe > 123) throw new SyntaxError(Fe.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === V.CLOSING || this.readyState === V.CLOSED)) {
                    var Ve = te(this);
                    this.readyState === V.CONNECTING ? O(Ve, U || ke.CLOSE_ABNORMAL, fe) : _(Ve, U || ke.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(V.prototype, W), V
        }(we);
        De.CONNECTING = 0, De.prototype.CONNECTING = De.CONNECTING, De.OPEN = 1, De.prototype.OPEN = De.OPEN, De.CLOSING = 2, De.prototype.CLOSING = De.CLOSING, De.CLOSED = 3, De.prototype.CLOSED = De.CLOSED;
        var rt = function(F) {
            return F.reduce(function(V, W) {
                return V.indexOf(W) > -1 ? V : V.concat(W)
            }, [])
        };

        function xt() {
            return typeof window < "u" ? window : typeof process == "object" && typeof cC == "function" && typeof yt == "object" ? yt : this
        }
        var sn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(F) {
                function V(W, L) {
                    L === void 0 && (L = sn), F.call(this);
                    var U = new K(W);
                    U.pathname || (U.pathname = "/"), this.url = U.toString(), this.originalWebSocket = null;
                    var fe = _e.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, sn, L), this.options.mock && this.mockWebsocket()
                }
                return F && (V.__proto__ = F), V.prototype = Object.create(F && F.prototype), V.prototype.constructor = V, V.prototype.mockWebsocket = function() {
                    var L = xt();
                    this.originalWebSocket = L.WebSocket, L.WebSocket = De
                }, V.prototype.restoreWebsocket = function() {
                    var L = xt();
                    this.originalWebSocket !== null && (L.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, V.prototype.stop = function(L) {
                    L === void 0 && (L = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof L == "function" && L()
                }, V.prototype.on = function(L, U) {
                    this.addEventListener(L, U)
                }, V.prototype.close = function(L) {
                    L === void 0 && (L = {});
                    var U = L.code,
                        fe = L.reason,
                        pe = L.wasClean,
                        Ve = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ve.forEach(function(Ne) {
                        Ne.readyState = De.CLOSED, Ne.dispatchEvent(g({
                            type: "close",
                            target: Ne.target,
                            code: U || ke.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, V.prototype.emit = function(L, U, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Ve = fe.websockets;
                    Ve || (Ve = _e.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (U = Array.prototype.slice.call(arguments, 1, arguments.length), U = U.map(function(Ne) {
                        return M(Ne)
                    })) : U = M(U), Ve.forEach(function(Ne) {
                        Array.isArray(U) ? Ne.dispatchEvent.apply(Ne, [l({
                            type: L,
                            data: U,
                            origin: pe.url,
                            target: Ne.target
                        })].concat(U)) : Ne.dispatchEvent(l({
                            type: L,
                            data: U,
                            origin: pe.url,
                            target: Ne.target
                        }))
                    })
                }, V.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, V.prototype.to = function(L, U, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Ve = this,
                        Ne = rt(fe.concat(_e.websocketsLookup(this.url, L, U)));
                    return {
                        to: function(gt, jt) {
                            return pe.to.call(pe, gt, jt, Ne)
                        },
                        emit: function(jt, Je) {
                            Ve.emit(jt, Je, {
                                websockets: Ne
                            })
                        }
                    }
                }, V.prototype.in = function() {
                    for (var L = [], U = arguments.length; U--;) L[U] = arguments[U];
                    return this.to.apply(null, L)
                }, V.prototype.simulate = function(L) {
                    var U = _e.websocketsLookup(this.url);
                    L === "error" && U.forEach(function(fe) {
                        fe.readyState = De.CLOSED, fe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, V
            }(we);
        ct.of = function(V) {
            return new ct(V)
        };
        var wt = function(F) {
            function V(L, U) {
                var fe = this;
                L === void 0 && (L = "socket.io"), U === void 0 && (U = ""), F.call(this), this.binaryType = "blob";
                var pe = new K(L);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = V.CONNECTING, this.protocol = "", this.target = this, typeof U == "string" || typeof U == "object" && U !== null ? this.protocol = U : Array.isArray(U) && U.length > 0 && (this.protocol = U[0]);
                var Ve = _e.attachWebSocket(this, this.url);
                Ge(function() {
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
                    })), H("error", "Socket.io connection to '" + this.url + "' failed"))
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
                    var U = _e.serverLookup(this.url);
                    return _e.removeWebSocket(this, this.url), this.readyState = V.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), U && U.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    }), U), this
                }
            }, V.prototype.disconnect = function() {
                return this.close()
            }, V.prototype.emit = function(U) {
                for (var fe = [], pe = arguments.length - 1; pe-- > 0;) fe[pe] = arguments[pe + 1];
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ve = l({
                        type: U,
                        origin: this.url,
                        data: fe
                    }),
                    Ne = _e.serverLookup(this.url);
                return Ne && Ne.dispatchEvent.apply(Ne, [Ve].concat(fe)), this
            }, V.prototype.send = function(U) {
                return this.emit("message", U), this
            }, W.broadcast.get = function() {
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var L = this,
                    U = _e.serverLookup(this.url);
                if (!U) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Ve) {
                        return U.emit(pe, Ve, {
                            websockets: _e.websocketsLookup(L.url, null, L)
                        }), L
                    },
                    to: function(pe) {
                        return U.to(pe, L)
                    },
                    in: function(pe) {
                        return U.in(pe, L)
                    }
                }
            }, V.prototype.on = function(U, fe) {
                return this.addEventListener(U, fe), this
            }, V.prototype.off = function(U, fe) {
                this.removeEventListener(U, fe)
            }, V.prototype.hasListeners = function(U) {
                var fe = this.listeners[U];
                return Array.isArray(fe) ? !!fe.length : !1
            }, V.prototype.join = function(U) {
                _e.addMembershipToRoom(this, U)
            }, V.prototype.leave = function(U) {
                _e.removeMembershipFromRoom(this, U)
            }, V.prototype.to = function(U) {
                return this.broadcast.to(U)
            }, V.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, V.prototype.dispatchEvent = function(U) {
                for (var fe = this, pe = [], Ve = arguments.length - 1; Ve-- > 0;) pe[Ve] = arguments[Ve + 1];
                var Ne = U.type,
                    gt = this.listeners[Ne];
                if (!Array.isArray(gt)) return !1;
                gt.forEach(function(jt) {
                    pe.length > 0 ? jt.apply(fe, pe) : jt.call(fe, U.data ? U.data : U)
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
        var Qt = ct,
            Ze = De,
            Pt = Ct;
        n.Server = Qt, n.WebSocket = Ze, n.SocketIO = Pt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(cc, cc.exports);
var uC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(S, k) {
            var I = S.x - k.x,
                D = S.y - k.y;
            return I * I + D * D
        }

        function n(S, k, I) {
            var D = k.x,
                $ = k.y,
                J = I.x - D,
                ie = I.y - $;
            if (J !== 0 || ie !== 0) {
                var Y = ((S.x - D) * J + (S.y - $) * ie) / (J * J + ie * ie);
                Y > 1 ? (D = I.x, $ = I.y) : Y > 0 && (D += J * Y, $ += ie * Y)
            }
            return J = S.x - D, ie = S.y - $, J * J + ie * ie
        }

        function i(S, k) {
            for (var I = S[0], D = [I], $, J = 1, ie = S.length; J < ie; J++) $ = S[J], e($, I) > k && (D.push($), I = $);
            return I !== $ && D.push($), D
        }

        function a(S, k, I, D, $) {
            for (var J = D, ie, Y = k + 1; Y < I; Y++) {
                var re = n(S[Y], S[k], S[I]);
                re > J && (ie = Y, J = re)
            }
            J > D && (ie - k > 1 && a(S, k, ie, D, $), $.push(S[ie]), I - ie > 1 && a(S, ie, I, D, $))
        }

        function f(S, k) {
            var I = S.length - 1,
                D = [S[0]];
            return a(S, 0, I, k, D), D.push(S[I]), D
        }

        function v(S, k, I) {
            if (S.length <= 2) return S;
            var D = k !== void 0 ? k * k : 1;
            return S = I ? S : i(S, D), S = f(S, D), S
        }
        t.exports = v, t.exports.default = v
    })()
})(uC);
const hC = ht.View.extend({
    el: "#banner",
    template: Be.template(`
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
class ii {
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
            model: new Ue.Model(this.bannerData)
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp4-monstermingle/",
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
at(ii, "view", null), at(ii, "isInitialized", !1), at(ii, "bannerConfig", null);
var dC = {};
(function(t) {
    (function(e) {
        e(Ni.exports, Ue, t)
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
                    e.each(P, function(se, ve) {
                        this.unstickit(m, ve)
                    }, this);
                    return
                }
                var q = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(m && se.model !== m) && !(P && se.config.selector != P)) return se.model.off(se.event, se.fn), ae.push(se.config._destroy), q.push(se.model), !0
                }), e.invoke(e.uniq(q), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (m ? "." + m.cid : ""), P)
            },
            stickit: function(m, P) {
                var q = m || this.model,
                    ae = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(q, ae);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var ve = this;
                    return this.unstickit(), se && (ve = se.apply(this, arguments)), ve
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(m, P, q) {
                var ae = m || this.model,
                    se = ".stickit." + ae.cid;
                if (q = q || {}, e.isObject(P)) {
                    var ve = P;
                    e.each(ve, function(K, Ge) {
                        this.addBinding(ae, Ge, K)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(ae, P), !!d.length) {
                    e.isString(q) && (q = {
                        observe: q
                    }), e.isFunction(q.observe) && (q.observe = q.observe.call(this));
                    var Ee = $(d, q),
                        Ae = Ee.observe;
                    Ee.selector = P, Ee.view = this;
                    var Me = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            v.call(this, Ee.destroy, d, ae, Ee)
                        }, J(d, Ee, ae, Ae), Y(d, Ee, ae, Ae), ie(d, Ee, ae), Ae) {
                        e.each(Ee.events, function(K) {
                            var Ge = K + se,
                                H = function(Te) {
                                    var we = v.call(this, Ee.getVal, d, Te, Ee, a.call(arguments, 1)),
                                        ye = S(Ee.updateModel, we, Te, Ee);
                                    ye && I(ae, Ae, we, lt, Ee)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(Ge, oe, e.bind(H, this))
                        }, this), e.each(e.flatten([Ae]), function(K) {
                            k(ae, "change:" + K, Ee, function(Ge, H, oe) {
                                var Te = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Te !== Me) {
                                    var we = D(ae, Ae, Ee);
                                    re(d, Ee, we, ae)
                                }
                            })
                        });
                        var $e = D(ae, Ae, Ee);
                        re(d, Ee, $e, ae, !0)
                    }
                    v.call(this, Ee.initialize, d, ae, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(m, P) {
                var q = (P || "").split("."),
                    ae = e.reduce(q, function(se, ve) {
                        return se[ve]
                    }, m);
                return ae == null ? m : ae
            },
            v = function(m) {
                if (m = e.isString(m) ? f(this, m) : m, m) return m.apply(this, a.call(arguments, 1))
            },
            S = function(m, P, q) {
                if (e.isBoolean(m)) return m;
                if (e.isFunction(m) || e.isString(m)) {
                    var ae = e.last(arguments).view;
                    return v.apply(ae, arguments)
                }
                return !1
            },
            k = function(m, P, q, ae) {
                var se = q.view;
                m.on(P, ae, se), se._modelBindings.push({
                    model: m,
                    event: P,
                    fn: ae,
                    config: q
                })
            },
            I = function(m, P, q, ae, se) {
                var ve = {},
                    d = se.view;
                se.onSet && (q = v.call(d, se.onSet, q, se)), se.set ? v.call(d, se.set, P, q, ae, se) : (ve[P] = q, e.isArray(P) && e.isArray(q) && (ve = e.reduce(P, function(Ee, Ae, Me) {
                    return Ee[Ae] = e.has(q, Me) ? q[Me] : null, Ee
                }, {})), m.set(ve, ae))
            },
            D = function(m, P, q) {
                var ae = q.view,
                    se = function(Ee) {
                        return m[q.escape ? "escape" : "get"](Ee)
                    },
                    ve = function(Ee) {
                        return Ee == null ? "" : Ee
                    },
                    d = e.isArray(P) ? e.map(P, se) : se(P);
                return q.onGet && (d = v.call(ae, q.onGet, d, q)), e.isArray(d) ? e.map(d, ve) : ve(d)
            },
            $ = i.getConfiguration = function(m, P) {
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
                    return m.is(se.selector)
                })), q.push(P);
                var ae = e.extend.apply(e, q);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            J = function(m, P, q, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ve = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ve;
                    var Ee = "",
                        Ae = d.observe || (d.observe = ae),
                        Me = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                $e = D(q, Ae, d);
                            d.name === "class" ? (m.removeClass(Ee).addClass($e), Ee = $e) : m[lt](d.name, $e)
                        };
                    e.each(e.flatten([Ae]), function(lt) {
                        k(q, "change:" + lt, P, Me)
                    }), Me()
                })
            },
            ie = function(m, P, q, ae) {
                e.each(P.classes || [], function(se, ve) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var d = se.observe,
                        Ee = function() {
                            var Ae = D(q, d, se);
                            m.toggleClass(ve, !!Ae)
                        };
                    e.each(e.flatten([d]), function(Ae) {
                        k(q, "change:" + Ae, P, Ee)
                    }), Ee()
                })
            },
            Y = function(m, P, q, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ve = function() {
                            var d = P.visible,
                                Ee = P.visibleFn,
                                Ae = D(q, ae, P),
                                Me = !!Ae;
                            (e.isFunction(d) || e.isString(d)) && (Me = !!v.call(se, d, Ae, P)), Ee ? v.call(se, Ee, m, Me, P) : m.toggle(Me)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        k(q, "change:" + d, P, ve)
                    }), ve()
                }
            },
            re = function(m, P, q, ae, se) {
                var ve = P.view;
                !S(P.updateView, q, P) || (v.call(ve, P.update, m, q, ae, P), se || v.call(ve, P.afterUpdate, m, q, P))
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
            update: function(m, P, q, ae) {
                if (m.length > 1) P || (P = []), m.each(function(ve, d) {
                    var Ee = n.$(d),
                        Ae = e.contains(P, Ee.val());
                    Ee.prop("checked", Ae)
                });
                else {
                    var se = e.isBoolean(P) ? P : P === m.val();
                    m.prop("checked", se)
                }
            },
            getVal: function(m) {
                var P;
                if (m.length > 1) P = e.reduce(m, function(ae, se) {
                    var ve = n.$(se);
                    return ve.prop("checked") && ae.push(ve.val()), ae
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
            update: function(m, P, q, ae) {
                var se, ve = ae.selectOptions,
                    d = ve && ve.collection || void 0,
                    Ee = m.prop("multiple");
                if (!ve) {
                    ve = {};
                    var Ae = function(ue) {
                        return ue.map(function(_e, ke) {
                            var Fe = n.$(ke).data("stickit-bind-val");
                            return {
                                value: Fe !== void 0 ? Fe : ke.value,
                                label: ke.text
                            }
                        }).get()
                    };
                    m.find("optgroup").length ? (d = {
                        opt_labels: []
                    }, m.find("> option").length && (d.opt_labels.push(void 0), e.each(m.find("> option"), function(ue) {
                        d[void 0] = Ae(n.$(ue))
                    })), e.each(m.find("optgroup"), function(ue) {
                        var _e = n.$(ue).attr("label");
                        d.opt_labels.push(_e), d[_e] = Ae(n.$(ue).find("option"))
                    })) : d = Ae(m.find("option"))
                }
                ve.valuePath = ve.valuePath || "value", ve.labelPath = ve.labelPath || "label", ve.disabledPath = ve.disabledPath || "disabled";
                var Me = function(ue, _e, ke) {
                    e.each(ue, function(Fe) {
                        var Qe = n.$("<option/>"),
                            ft = Fe,
                            $t = function(_, O, M) {
                                Qe.text(_), ft = O, Qe.data("stickit-bind-val", ft), !e.isArray(ft) && !e.isObject(ft) && Qe.val(ft), M === !0 && Qe.prop("disabled", "disabled")
                            },
                            qt, E, l;
                        Fe === "__default__" ? (qt = ke.label, E = ke.value, l = ke.disabled) : (qt = f(Fe, ve.labelPath), E = f(Fe, ve.valuePath), l = f(Fe, ve.disabledPath)), $t(qt, E, l);
                        var g = function() {
                            return !Ee && ft != null && ke != null && ft === ke ? !0 : !!(e.isObject(ke) && e.isEqual(ft, ke))
                        };
                        g() ? Qe.prop("selected", !0) : Ee && e.isArray(ke) && e.each(ke, function(_) {
                            e.isObject(_) && (_ = f(_, ve.valuePath)), (_ === ft || e.isObject(_) && e.isEqual(ft, _)) && Qe.prop("selected", !0)
                        }), _e.append(Qe)
                    })
                };
                if (m.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = v.call(this, d, m, ae) : se = d;
                if (se instanceof n.Collection) {
                    var $e = se,
                        K = function() {
                            var ue = D(q, ae.observe, ae);
                            v.call(this, ae.update, m, ue, q, ae)
                        },
                        Ge = function() {
                            $e.off("add remove reset sort", K)
                        },
                        H = function() {
                            Ge(), $e.off("stickit:selectRefresh"), q.off("stickit:selectRefresh")
                        };
                    $e.trigger("stickit:selectRefresh"), $e.once("stickit:selectRefresh", Ge, this), $e.on("add remove reset sort", K, this), q.trigger("stickit:selectRefresh"), q.once("stickit:selectRefresh", function() {
                        q.off("stickit:unstuck", H)
                    }), q.once("stickit:unstuck", H, this), se = se.toJSON()
                }
                if (ve.defaultOption) {
                    var oe = e.isFunction(ve.defaultOption) ? ve.defaultOption.call(this, m, ae) : ve.defaultOption;
                    Me(["__default__"], m, oe)
                }
                if (e.isArray(se)) Me(se, m, P);
                else if (se.opt_labels) e.each(se.opt_labels, function(ue) {
                    var _e = n.$("<optgroup/>").attr("label", ue);
                    Me(se[ue], _e, P), m.append(_e)
                });
                else {
                    var Te = [],
                        we;
                    for (var ye in se) we = {}, we[ve.valuePath] = ye, we[ve.labelPath] = se[ye], Te.push(we);
                    Te = e.sortBy(Te, ve.comparator || ve.labelPath), Me(Te, m, P)
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
})(dC);
const fC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    ll = ht.View.extend({
        template: Be.template(fC),
        model: new Ue.Model({}),
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
var Oi, $s, ss = typeof Map == "function" ? new Map : (Oi = [], $s = [], {
        has: function(t) {
            return Oi.indexOf(t) > -1
        },
        get: function(t) {
            return $s[Oi.indexOf(t)]
        },
        set: function(t, e) {
            Oi.indexOf(t) === -1 && (Oi.push(t), $s.push(e))
        },
        delete: function(t) {
            var e = Oi.indexOf(t);
            e > -1 && (Oi.splice(e, 1), $s.splice(e, 1))
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
    var e = ss.get(t);
    e && e.destroy()
}

function gC(t) {
    var e = ss.get(t);
    e && e.update()
}
var Jr = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Jr = function(t) {
    return t
}).destroy = function(t) {
    return t
}, Jr.update = function(t) {
    return t
}) : ((Jr = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !ss.has(i)) {
                var a, f = null,
                    v = null,
                    S = null,
                    k = function() {
                        i.clientWidth !== v && J()
                    },
                    I = function(ie) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", I, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(ie).forEach(function(Y) {
                            i.style[Y] = ie[Y]
                        }), ss.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", I, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", J, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", J, !1), i.addEventListener("autosize:update", J, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", ss.set(i, {
                    destroy: I,
                    update: J
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), f = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(f) && (f = 0), J()
            }

            function D(ie) {
                var Y = i.style.width;
                i.style.width = "0px", i.style.width = Y, i.style.overflowY = ie
            }

            function $() {
                if (i.scrollHeight !== 0) {
                    var ie = function(re) {
                            for (var m = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && m.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return m
                        }(i),
                        Y = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", v = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), Y && (document.documentElement.scrollTop = Y)
                }
            }

            function J() {
                $();
                var ie = Math.round(parseFloat(i.style.height)),
                    Y = window.getComputedStyle(i, null),
                    re = Y.boxSizing === "content-box" ? Math.round(parseFloat(Y.height)) : i.offsetHeight;
                if (re < ie ? Y.overflowY === "hidden" && (D("scroll"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : Y.overflowY !== "hidden" && (D("hidden"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), S !== re) {
                    S = re;
                    var m = Zu("autosize:resized");
                    try {
                        i.dispatchEvent(m)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], pC), t
}, Jr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], gC), t
});
var uc = Jr;
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
    hs = ht.View.extend({
        tagName: "div",
        className: "input",
        model: new Ue.Model({}),
        template: Be.template(mC),
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
            this.getOption("preventAutosize") || uc(Pe("textarea"))
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
            Pe(t).val(""), this.getOption("preventAutosize") || uc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Pe(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return Xt.sanitize(this.getValue())
        },
        sanitize(t) {
            return Xt.sanitize(t)
        },
        sanitizeInput(t) {
            return Xt.sanitizeInput(t)
        }
    }),
    vC = '<div class="text"></div>',
    mi = ht.View.extend({
        tagName: "div",
        template: Be.template(vC),
        model: new Ue.Model({
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
    pi = ht.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? hs : t.get("type") === "text" ? mi : ll
        },
        collection: new Ue.Collection([]),
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
let hc = {};

function eh(t, ...e) {
    !hc[t] || hc[t].map(n => n(...e))
}
let Qr, Ws;

function Pi() {
    return Qr
}

function Co() {
    return Ws
}

function yC(t) {
    if (Qr = document.getElementById(t) || t || document.querySelector("canvas"), !Qr) throw Error("You must provide a canvas element for the game");
    return Ws = Qr.getContext("2d"), Ws.imageSmoothingEnabled = !1, eh("init"), {
        canvas: Qr,
        context: Ws
    }
}
class cl {
    constructor({
        spriteSheet: e,
        frames: n,
        frameRate: i,
        loop: a = !0
    } = {}) {
        this.spriteSheet = e, this.frames = n, this.frameRate = i, this.loop = a;
        let {
            width: f,
            height: v,
            margin: S = 0
        } = e.frame;
        this.width = f, this.height = v, this.margin = S, this._f = 0, this._a = 0
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
        let v = this.frames[this._f] / this.spriteSheet._f | 0,
            S = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, S * this.width + (S * 2 + 1) * this.margin, v * this.height + (v * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function xo(t) {
    return new cl(t)
}
xo.prototype = cl.prototype;
xo.class = cl;
const wC = () => {};

function bC() {
    let t = Pi();
    Co().clearRect(0, 0, t.width, t.height)
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
        v = 1 / t,
        S = e ? bC : wC,
        k, I, D, $, J;
    const ie = window.performance || Date;

    function Y() {
        if (I = requestAnimationFrame(Y), D = ie.now(), $ = D - k, k = D, !($ > 1e3)) {
            for (eh("tick"), a += $; a >= f;) J.update(v), a -= f;
            S(), J.render()
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
            this.isStopped = !0, cancelAnimationFrame(I)
        },
        _frame: Y,
        set _last(re) {
            k = re
        }
    }, J
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

function dc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        v = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), v && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), v && n.push(3)), n
}
class ul {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Pi();
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
            for (i = dc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
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
        for (n = dc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = hl({
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

function hl(t) {
    return new ul(t)
}
hl.prototype = ul.prototype;
hl.class = ul;
class dl {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return pr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
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

function pr(t, e, n = {}) {
    let i = new dl(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
pr.prototype = dl.prototype;
pr.class = dl;
class fl {
    constructor(e) {
        this.init(e)
    }
    init(e = {}) {
        let {
            x: n,
            y: i,
            dx: a,
            dy: f,
            ddx: v,
            ddy: S,
            width: k,
            height: I,
            image: D
        } = e;
        this.position = pr(n, i), this.velocity = pr(a, f), this.acceleration = pr(v, S), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = Co();
        for (let $ in e) this[$] = e[$];
        D && (this.width = k !== void 0 ? k : D.width, this.height = I !== void 0 ? I : D.height), this.sx = 0, this.sy = 0
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

function pl(t) {
    return new fl(t)
}
pl.prototype = fl.prototype;
pl.class = fl;

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
                loop: v
            } = e[i];
            if (n = [], a === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(a).map(S => {
                n = n.concat(EC(S))
            }), this.animations[i] = xo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: v
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
                for (let b = 0; b < c.length; b++) h.indexOf(c[b]) === -1 && h.push(c[b]);
                return h
            },
            a = c => c.charAt(0).toUpperCase() + c.slice(1),
            f = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            v = c => {
                console.error("".concat(n, " ").concat(c))
            },
            S = [],
            k = c => {
                S.includes(c) || (S.push(c), f(c))
            },
            I = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            D = c => typeof c == "function" ? c() : c,
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
            m = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"],
            P = {},
            q = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => m.indexOf(c) !== -1,
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
            $e = c => {
                const h = {};
                for (const b in c) h[c[b]] = lt + c[b];
                return h
            },
            K = $e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            Ge = $e(["success", "warning", "info", "question", "error"]),
            H = () => document.body.querySelector(".".concat(K.container)),
            oe = c => {
                const h = H();
                return h ? h.querySelector(c) : null
            },
            Te = c => oe(".".concat(c)),
            we = () => Te(K.popup),
            ye = () => Te(K.icon),
            ue = () => Te(K.title),
            _e = () => Te(K["html-container"]),
            ke = () => Te(K.image),
            Fe = () => Te(K["progress-steps"]),
            Qe = () => Te(K["validation-message"]),
            ft = () => oe(".".concat(K.actions, " .").concat(K.confirm)),
            $t = () => oe(".".concat(K.actions, " .").concat(K.deny)),
            qt = () => Te(K["input-label"]),
            E = () => oe(".".concat(K.loader)),
            l = () => oe(".".concat(K.actions, " .").concat(K.cancel)),
            g = () => Te(K.actions),
            _ = () => Te(K.footer),
            O = () => Te(K["timer-progress-bar"]),
            M = () => Te(K.close),
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
                const c = Array.from(we().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, B) => {
                        const ge = parseInt(b.getAttribute("tabindex")),
                            He = parseInt(B.getAttribute("tabindex"));
                        return ge > He ? 1 : ge < He ? -1 : 0
                    }),
                    h = Array.from(we().querySelectorAll(N)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => pe(b))
            },
            Se = () => xt(document.body, K.shown) && !xt(document.body, K["toast-shown"]) && !xt(document.body, K["no-backdrop"]),
            he = () => we() && xt(we(), K.toast),
            Ie = () => we().hasAttribute("data-loading"),
            De = {
                previousBodyPadding: null
            },
            rt = (c, h) => {
                if (c.textContent = "", h) {
                    const B = new DOMParser().parseFromString(h, "text/html");
                    Array.from(B.querySelector("head").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    }), Array.from(B.querySelector("body").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    })
                }
            },
            xt = (c, h) => {
                if (!h) return !1;
                const b = h.split(/\s+/);
                for (let B = 0; B < b.length; B++)
                    if (!c.classList.contains(b[B])) return !1;
                return !0
            },
            sn = (c, h) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(K).includes(b) && !Object.values(Ge).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
                })
            },
            ct = (c, h, b) => {
                if (sn(c, h), h.customClass && h.customClass[b]) {
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
                        return c.querySelector(".".concat(K.popup, " > .").concat(K[h]));
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
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Qt = (c, h, b) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach(B => {
                    Array.isArray(c) ? c.forEach(ge => {
                        b ? ge.classList.add(B) : ge.classList.remove(B)
                    }) : b ? c.classList.add(B) : c.classList.remove(B)
                }))
            },
            Ze = (c, h) => {
                Qt(c, h, !0)
            },
            Pt = (c, h) => {
                Qt(c, h, !1)
            },
            F = (c, h) => {
                const b = Array.from(c.children);
                for (let B = 0; B < b.length; B++) {
                    const ge = b[B];
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
            L = c => {
                c.style.display = "none"
            },
            U = (c, h, b, B) => {
                const ge = c.querySelector(h);
                ge && (ge.style[b] = B)
            },
            fe = function(c, h) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? W(c, b) : L(c)
            },
            pe = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ve = () => !pe(ft()) && !pe($t()) && !pe(l()),
            Ne = c => c.scrollHeight > c.clientHeight,
            gt = c => {
                const h = window.getComputedStyle(c),
                    b = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    B = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return b > 0 || B > 0
            },
            jt = function(c) {
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
                    B = h / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(B, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            st = {},
            Dn = () => {
                st.previousActiveElement instanceof HTMLElement ? (st.previousActiveElement.focus(), st.previousActiveElement = null) : document.body && document.body.focus()
            },
            vi = c => new Promise(h => {
                if (!c) return h();
                const b = window.scrollX,
                    B = window.scrollY;
                st.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(b, B)
            }),
            kr = `
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
            Tn = () => {
                const c = H();
                return c ? (c.remove(), Pt([document.documentElement, document.body], [K["no-backdrop"], K["toast-shown"], K["has-column"]]), !0) : !1
            },
            on = () => {
                st.currentInstance.resetValidationMessage()
            },
            Tr = () => {
                const c = we(),
                    h = F(c, K.input),
                    b = F(c, K.file),
                    B = c.querySelector(".".concat(K.range, " input")),
                    ge = c.querySelector(".".concat(K.range, " output")),
                    He = F(c, K.select),
                    Ut = c.querySelector(".".concat(K.checkbox, " input")),
                    Nn = F(c, K.textarea);
                h.oninput = on, b.onchange = on, He.onchange = on, Ut.onchange = on, Nn.oninput = on, B.oninput = () => {
                    on(), ge.value = B.value
                }, B.onchange = () => {
                    on(), ge.value = B.value
                }
            },
            Ar = c => typeof c == "string" ? document.querySelector(c) : c,
            yi = c => {
                const h = we();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            Fi = c => {
                window.getComputedStyle(c).direction === "rtl" && Ze(H(), K.rtl)
            },
            wi = c => {
                const h = Tn();
                if (In()) {
                    v("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = K.container, h && Ze(b, K["no-transition"]), rt(b, kr);
                const B = Ar(c.target);
                B.appendChild(b), yi(c), Fi(B), Tr()
            },
            bi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? ji(c, h) : c && rt(h, c)
            },
            ji = (c, h) => {
                c.jquery ? Gi(h, c) : rt(h, c.toString())
            },
            Gi = (c, h) => {
                if (c.textContent = "", 0 in h)
                    for (let b = 0; b in h; b++) c.appendChild(h[b].cloneNode(!0));
                else c.appendChild(h.cloneNode(!0))
            },
            vn = (() => {
                if (In()) return !1;
                const c = document.createElement("div"),
                    h = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const b in h)
                    if (Object.prototype.hasOwnProperty.call(h, b) && typeof c.style[b] < "u") return h[b];
                return !1
            })(),
            zi = () => {
                const c = document.createElement("div");
                c.className = K["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            Ci = (c, h) => {
                const b = g(),
                    B = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? L(b) : W(b), ct(b, h, "actions"), Hn(b, B, h), rt(B, h.loaderHtml), ct(B, h, "loader")
            };

        function Hn(c, h, b) {
            const B = ft(),
                ge = $t(),
                He = l();
            xi(B, "confirm", b), xi(ge, "deny", b), xi(He, "cancel", b), Hi(B, ge, He, b), b.reverseButtons && (b.toast ? (c.insertBefore(He, B), c.insertBefore(ge, B)) : (c.insertBefore(He, h), c.insertBefore(ge, h), c.insertBefore(B, h)))
        }

        function Hi(c, h, b, B) {
            if (!B.buttonsStyling) return Pt([c, h, b], K.styled);
            Ze([c, h, b], K.styled), B.confirmButtonColor && (c.style.backgroundColor = B.confirmButtonColor, Ze(c, K["default-outline"])), B.denyButtonColor && (h.style.backgroundColor = B.denyButtonColor, Ze(h, K["default-outline"])), B.cancelButtonColor && (b.style.backgroundColor = B.cancelButtonColor, Ze(b, K["default-outline"]))
        }

        function xi(c, h, b) {
            fe(c, b["show".concat(a(h), "Button")], "inline-block"), rt(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = K[h], ct(c, b, "".concat(h, "Button")), Ze(c, b["".concat(h, "ButtonClass")])
        }
        const tt = (c, h) => {
            const b = H();
            !b || (y(b, h.backdrop), o(b, h.position), C(b, h.grow), ct(b, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Ze([document.documentElement, document.body], K["no-backdrop"])
        }

        function o(c, h) {
            h in K ? Ze(c, K[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Ze(c, K.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const b = "grow-".concat(h);
                b in K && Ze(c, K[b])
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
                    B = A.innerParams.get(c),
                    ge = !B || h.input !== B.input;
                Q.forEach(He => {
                    const Ut = F(b, K[He]);
                    Yt(He, h.inputAttributes), Ut.className = K[He], ge && L(Ut)
                }), h.input && (ge && Xe(h), Un(h))
            },
            Xe = c => {
                if (!Gt[c.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Or(c.input),
                    b = Gt[c.input](h, c);
                W(h), setTimeout(() => {
                    Ct(b)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const b = c.attributes[h].name;
                    ["type", "value", "style"].includes(b) || c.removeAttribute(b)
                }
            },
            Yt = (c, h) => {
                const b = wt(we(), c);
                if (!!b) {
                    It(b);
                    for (const B in h) b.setAttribute(B, h[B])
                }
            },
            Un = c => {
                const h = Or(c.input);
                typeof c.customClass == "object" && Ze(h, c.customClass.input)
            },
            Vn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            qn = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = K.input;
                    const B = document.createElement("label"),
                        ge = K["input-label"];
                    B.setAttribute("for", c.id), B.className = ge, typeof b.customClass == "object" && Ze(B, b.customClass.inputLabel), B.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", B)
                }
            },
            Or = c => F(we(), K[c] || K.input),
            Kt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            Gt = {};
        Gt.text = Gt.email = Gt.password = Gt.number = Gt.tel = Gt.url = (c, h) => (Kt(c, h.inputValue), qn(c, c, h), Vn(c, h), c.type = h.input, c), Gt.file = (c, h) => (qn(c, c, h), Vn(c, h), c), Gt.range = (c, h) => {
            const b = c.querySelector("input"),
                B = c.querySelector("output");
            return Kt(b, h.inputValue), b.type = h.input, Kt(B, h.inputValue), qn(b, c, h), c
        }, Gt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                rt(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return qn(c, c, h), c
        }, Gt.radio = c => (c.textContent = "", c), Gt.checkbox = (c, h) => {
            const b = wt(we(), "checkbox");
            b.value = "1", b.id = K.checkbox, b.checked = Boolean(h.inputValue);
            const B = c.querySelector("span");
            return rt(B, h.inputPlaceholder), b
        }, Gt.textarea = (c, h) => {
            Kt(c, h.inputValue), Vn(c, h), qn(c, c, h);
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
        const Ui = (c, h) => {
                const b = _e();
                ct(b, h, "htmlContainer"), h.html ? (bi(h.html, b), W(b, "block")) : h.text ? (b.textContent = h.text, W(b, "block")) : L(b), Ce(c, h)
            },
            _o = (c, h) => {
                const b = _();
                fe(b, h.footer), h.footer && bi(h.footer, b), ct(b, h, "footer")
            },
            So = (c, h) => {
                const b = M();
                rt(b, h.closeButtonHtml), ct(b, h, "closeButton"), fe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Rr = (c, h) => {
                const b = A.innerParams.get(c),
                    B = ye();
                if (b && h.icon === b.icon) {
                    ys(B, h), Ir(B, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    L(B);
                    return
                }
                if (h.icon && Object.keys(Ge).indexOf(h.icon) === -1) {
                    v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), L(B);
                    return
                }
                W(B), ys(B, h), Ir(B, h), Ze(B, h.showClass.icon)
            },
            Ir = (c, h) => {
                for (const b in Ge) h.icon !== b && Pt(c, Ge[b]);
                Ze(c, Ge[h.icon]), Cn(c, h), qi(), ct(c, h, "icon")
            },
            qi = () => {
                const c = we(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let B = 0; B < b.length; B++) b[B].style.backgroundColor = h
            },
            vs = `
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
            ys = (c, h) => {
                let b = c.innerHTML,
                    B;
                h.iconHtml ? B = Dr(h.iconHtml) : h.icon === "success" ? (B = vs, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? B = ko : B = Dr({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== B.trim() && rt(c, B)
            },
            Cn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) U(c, b, "backgroundColor", h.iconColor);
                    U(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Dr = c => '<div class="'.concat(K["icon-content"], '">').concat(c, "</div>"),
            Ei = (c, h) => {
                const b = ke();
                if (!h.imageUrl) return L(b);
                W(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), V(b, "width", h.imageWidth), V(b, "height", h.imageHeight), b.className = K.image, ct(b, h, "image")
            },
            To = (c, h) => {
                const b = Fe();
                if (!h.progressSteps || h.progressSteps.length === 0) return L(b);
                W(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((B, ge) => {
                    const He = Ao(B);
                    if (b.appendChild(He), ge === h.currentProgressStep && Ze(He, K["active-progress-step"]), ge !== h.progressSteps.length - 1) {
                        const Ut = Wn(h);
                        b.appendChild(Ut)
                    }
                })
            },
            Ao = c => {
                const h = document.createElement("li");
                return Ze(h, K["progress-step"]), rt(h, c), h
            },
            Wn = c => {
                const h = document.createElement("li");
                return Ze(h, K["progress-step-line"]), c.progressStepsDistance && V(h, "width", c.progressStepsDistance), h
            },
            Xn = (c, h) => {
                const b = ue();
                fe(b, h.title || h.titleText, "block"), h.title && bi(h.title, b), h.titleText && (b.innerText = h.titleText), ct(b, h, "title")
            },
            Lr = (c, h) => {
                const b = H(),
                    B = we();
                h.toast ? (V(b, "width", h.width), B.style.width = "100%", B.insertBefore(E(), ye())) : V(B, "width", h.width), V(B, "padding", h.padding), h.color && (B.style.color = h.color), h.background && (B.style.background = h.background), L(Qe()), Oo(B, h)
            },
            Oo = (c, h) => {
                c.className = "".concat(K.popup, " ").concat(pe(c) ? h.showClass.popup : ""), h.toast ? (Ze([document.documentElement, document.body], K["toast-shown"]), Ze(c, K.toast)) : Ze(c, K.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Ze(c, h.customClass), h.icon && Ze(c, K["icon-".concat(h.icon)])
            },
            Mr = (c, h) => {
                Lr(c, h), tt(c, h), To(c, h), Rr(c, h), Ei(c, h), Xn(c, h), So(c, h), Ui(c, h), Ci(c, h), _o(c, h), typeof h.didRender == "function" && h.didRender(we())
            },
            Yn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            _i = () => {
                Array.from(document.body.children).forEach(h => {
                    h === H() || h.contains(H()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Pr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            Wi = ["swal-title", "swal-html", "swal-footer"],
            Ro = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return Po(b), Object.assign(ws(b), Io(b), Do(b), Vr(b), Lo(b), Mo(b, Wi))
            },
            ws = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(B => {
                    Kn(B, ["name", "value"]);
                    const ge = B.getAttribute("name"),
                        He = B.getAttribute("value");
                    typeof re[ge] == "boolean" && He === "false" && (h[ge] = !1), typeof re[ge] == "object" && (h[ge] = JSON.parse(He))
                }), h
            },
            Io = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(B => {
                    Kn(B, ["type", "color", "aria-label"]);
                    const ge = B.getAttribute("type");
                    h["".concat(ge, "ButtonText")] = B.innerHTML, h["show".concat(a(ge), "Button")] = !0, B.hasAttribute("color") && (h["".concat(ge, "ButtonColor")] = B.getAttribute("color")), B.hasAttribute("aria-label") && (h["".concat(ge, "ButtonAriaLabel")] = B.getAttribute("aria-label"))
                }), h
            },
            Do = c => {
                const h = {},
                    b = c.querySelector("swal-image");
                return b && (Kn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (h.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (h.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (h.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (h.imageAlt = b.getAttribute("alt"))), h
            },
            Vr = c => {
                const h = {},
                    b = c.querySelector("swal-icon");
                return b && (Kn(b, ["type", "color"]), b.hasAttribute("type") && (h.icon = b.getAttribute("type")), b.hasAttribute("color") && (h.iconColor = b.getAttribute("color")), h.iconHtml = b.innerHTML), h
            },
            Lo = c => {
                const h = {},
                    b = c.querySelector("swal-input");
                b && (Kn(b, ["type", "label", "placeholder", "value"]), h.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (h.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (h.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (h.inputValue = b.getAttribute("value")));
                const B = Array.from(c.querySelectorAll("swal-input-option"));
                return B.length && (h.inputOptions = {}, B.forEach(ge => {
                    Kn(ge, ["value"]);
                    const He = ge.getAttribute("value"),
                        Ut = ge.innerHTML;
                    h.inputOptions[He] = Ut
                })), h
            },
            Mo = (c, h) => {
                const b = {};
                for (const B in h) {
                    const ge = h[B],
                        He = c.querySelector(ge);
                    He && (Kn(He, []), b[ge.replace(/^swal-/, "")] = He.innerHTML.trim())
                }
                return b
            },
            Po = c => {
                const h = Wi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const B = b.tagName.toLowerCase();
                    h.indexOf(B) === -1 && f("Unrecognized element <".concat(B, ">"))
                })
            },
            Kn = (c, h) => {
                Array.from(c.attributes).forEach(b => {
                    h.indexOf(b.name) === -1 && f(['Unrecognized attribute "'.concat(b.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var bs = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Vo(c) {
            c.inputValidator || Object.keys(bs).forEach(h => {
                c.input === h && (c.inputValidator = bs[h])
            })
        }

        function No(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function Cs(c) {
            Vo(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), No(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), wi(c)
        }
        class Nr {
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
        const xs = () => {
                De.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (De.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(De.previousBodyPadding + zi(), "px"))
            },
            Br = () => {
                De.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(De.previousBodyPadding, "px"), De.previousBodyPadding = null)
            },
            Es = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !xt(document.body, K.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Ze(document.body, K.iosfix), $r(), _s()
                }
            },
            _s = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                h && b && !c.match(/CriOS/i) && we().scrollHeight > window.innerHeight - 44 && (H().style.paddingBottom = "".concat(44, "px"))
            },
            $r = () => {
                const c = H();
                let h;
                c.ontouchstart = b => {
                    h = Bo(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            Bo = c => {
                const h = c.target,
                    b = H();
                return $o(c) || Fo(c) ? !1 : h === b || !Ne(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ne(_e()) && _e().contains(h))
            },
            $o = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            Fo = c => c.touches && c.touches.length > 1,
            Si = () => {
                if (xt(document.body, K.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Pt(document.body, K.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            Fr = 10,
            jr = c => {
                const h = H(),
                    b = we();
                typeof c.willOpen == "function" && c.willOpen(b);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    jo(h, b)
                }, Fr), Se() && (Go(h, c.scrollbarPadding, ge), _i()), !he() && !st.previousActiveElement && (st.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Pt(h, K["no-transition"])
            },
            Ss = c => {
                const h = we();
                if (c.target !== h) return;
                const b = H();
                h.removeEventListener(vn, Ss), b.style.overflowY = "auto"
            },
            jo = (c, h) => {
                vn && gt(h) ? (c.style.overflowY = "hidden", h.addEventListener(vn, Ss)) : c.style.overflowY = "auto"
            },
            Go = (c, h, b) => {
                Es(), h && b !== "hidden" && xs(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, b) => {
                Ze(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), W(h, "grid"), setTimeout(() => {
                    Ze(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, Fr), Ze([document.documentElement, document.body], K.shown), b.heightAuto && b.backdrop && !b.toast && Ze([document.documentElement, document.body], K["height-auto"])
            },
            s = c => {
                let h = we();
                h || new Ot, h = we();
                const b = E();
                he() ? L(ye()) : u(h, c), W(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = g(),
                    B = E();
                !h && pe(ft()) && (h = ft()), W(b), h && (L(h), B.setAttribute("data-button-to-replace", h.className)), B.parentNode.insertBefore(B, h), Ze([c, b], K.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? z(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && ($(h.inputValue) || ie(h.inputValue)) && (s(ft()), Z(c, h))
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
                        return G(b);
                    default:
                        return h.inputAutoTrim ? b.value.trim() : b.value
                }
            },
            x = c => c.checked ? 1 : 0,
            T = c => c.checked ? c.value : null,
            G = c => c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null,
            z = (c, h) => {
                const b = we(),
                    B = ge => le[h.input](b, be(ge), h);
                $(h.inputOptions) || ie(h.inputOptions) ? (s(ft()), J(h.inputOptions).then(ge => {
                    c.hideLoading(), B(ge)
                })) : typeof h.inputOptions == "object" ? B(h.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const b = c.getInput();
                L(b), J(h.inputValue).then(B => {
                    b.value = h.input === "number" ? parseFloat(B) || 0 : "".concat(B), W(b), b.focus(), c.hideLoading()
                }).catch(B => {
                    v("Error in inputValue promise: ".concat(B)), b.value = "", W(b), b.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, b) => {
                    const B = F(c, K.select),
                        ge = (He, Ut, Nn) => {
                            const gn = document.createElement("option");
                            gn.value = Nn, rt(gn, Ut), gn.selected = ne(Nn, b.inputValue), He.appendChild(gn)
                        };
                    h.forEach(He => {
                        const Ut = He[0],
                            Nn = He[1];
                        if (Array.isArray(Nn)) {
                            const gn = document.createElement("optgroup");
                            gn.label = Ut, gn.disabled = !1, B.appendChild(gn), Nn.forEach(ir => ge(gn, ir[1], ir[0]))
                        } else ge(B, Nn, Ut)
                    }), B.focus()
                },
                radio: (c, h, b) => {
                    const B = F(c, K.radio);
                    h.forEach(He => {
                        const Ut = He[0],
                            Nn = He[1],
                            gn = document.createElement("input"),
                            ir = document.createElement("label");
                        gn.type = "radio", gn.name = K.radio, gn.value = Ut, ne(Ut, b.inputValue) && (gn.checked = !0);
                        const ea = document.createElement("span");
                        rt(ea, Nn), ea.className = K.label, ir.appendChild(gn), ir.appendChild(ea), B.appendChild(ir)
                    });
                    const ge = B.querySelectorAll("input");
                    ge.length && ge[0].focus()
                }
            },
            be = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((b, B) => {
                    let ge = b;
                    typeof ge == "object" && (ge = be(ge)), h.push([B, ge])
                }) : Object.keys(c).forEach(b => {
                    let B = c[b];
                    typeof B == "object" && (B = be(B)), h.push([b, B])
                }), h
            },
            ne = (c, h) => h && h.toString() === c.toString();

        function ce() {
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            L(h.loader), he() ? c.icon && W(ye()) : We(h), Pt([h.popup, h.actions], K.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const We = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? W(h[0], "inline-block") : Ve() && L(c.actions)
        };

        function ot(c) {
            const h = A.innerParams.get(c || this),
                b = A.domCache.get(c || this);
            return b ? wt(b.popup, h.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => pe(we()),
            Nt = () => ft() && ft().click(),
            hn = () => $t() && $t().click(),
            _t = () => l() && l().click(),
            nt = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            an = (c, h, b, B) => {
                nt(h), b.toast || (h.keydownHandler = ge => Xi(c, ge, B), h.keydownTarget = b.keydownListenerCapture ? window : we(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            pt = (c, h, b) => {
                const B = te();
                if (B.length) return h = h + b, h === B.length ? h = 0 : h === -1 && (h = B.length - 1), B[h].focus();
                we().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            ki = ["ArrowLeft", "ArrowUp"],
            Xi = (c, h, b) => {
                const B = A.innerParams.get(c);
                !B || h.isComposing || h.keyCode === 229 || (B.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? dn(c, h, B) : h.key === "Tab" ? Jn(h, B) : [...Dt, ...ki].includes(h.key) ? Qn(h.key) : h.key === "Escape" && ln(h, B, b))
            },
            dn = (c, h, b) => {
                if (!!D(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Jn = (c, h) => {
                const b = c.target,
                    B = te();
                let ge = -1;
                for (let He = 0; He < B.length; He++)
                    if (b === B[He]) {
                        ge = He;
                        break
                    } c.shiftKey ? pt(h, ge, -1) : pt(h, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            Qn = c => {
                const h = ft(),
                    b = $t(),
                    B = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, B].includes(document.activeElement)) return;
                const ge = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let He = document.activeElement;
                for (let Ut = 0; Ut < g().children.length; Ut++) {
                    if (He = He[ge], !He) return;
                    if (He instanceof HTMLButtonElement && pe(He)) break
                }
                He instanceof HTMLButtonElement && He.focus()
            },
            ln = (c, h, b) => {
                D(h.allowEscapeKey) && (c.preventDefault(), b(Yn.esc))
            };

        function Ln(c, h, b, B) {
            he() ? As(c, B) : (vi(b).then(() => As(c, B)), nt(st)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), Se() && (Br(), Si(), Pr()), yn()
        }

        function yn() {
            Pt([document.documentElement, document.body], [K.shown, K["height-auto"], K["no-backdrop"], K["toast-shown"]])
        }

        function xn(c) {
            c = ei(c);
            const h = je.swalPromiseResolve.get(this),
                b = Zn(this);
            this.isAwaitingPromise() ? c.isDismissed || (mt(this), h(c)) : b && h(c)
        }

        function ks() {
            return !!A.awaitingPromise.get(this)
        }
        const Zn = c => {
            const h = we();
            if (!h) return !1;
            const b = A.innerParams.get(c);
            if (!b || xt(h, b.hideClass.popup)) return !1;
            Pt(h, b.showClass.popup), Ze(h, b.hideClass.popup);
            const B = H();
            return Pt(B, b.showClass.backdrop), Ze(B, b.hideClass.backdrop), Ts(c, h, b), !0
        };

        function Gr(c) {
            const h = je.swalPromiseReject.get(this);
            mt(this), h && h(c)
        }
        const mt = c => {
                c.isAwaitingPromise() && (A.awaitingPromise.delete(c), A.innerParams.get(c) || c._destroy())
            },
            ei = c => typeof c > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c),
            Ts = (c, h, b) => {
                const B = H(),
                    ge = vn && gt(h);
                typeof b.willClose == "function" && b.willClose(h), ge ? zr(c, h, B, b.returnFocus, b.didClose) : Ln(c, B, b.returnFocus, b.didClose)
            },
            zr = (c, h, b, B, ge) => {
                st.swalCloseEventFinishedCallback = Ln.bind(null, c, b, B, ge), h.addEventListener(vn, function(He) {
                    He.target === h && (st.swalCloseEventFinishedCallback(), delete st.swalCloseEventFinishedCallback)
                })
            },
            As = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Ti(c, h, b) {
            const B = A.domCache.get(c);
            h.forEach(ge => {
                B[ge].disabled = b
            })
        }

        function Os(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const B = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < B.length; ge++) B[ge].disabled = h
            } else c.disabled = h
        }

        function Rs() {
            Ti(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function zo() {
            Ti(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function Ho() {
            return Os(this.getInput(), !1)
        }

        function Uo() {
            return Os(this.getInput(), !0)
        }

        function Yi(c) {
            const h = A.domCache.get(this),
                b = A.innerParams.get(this);
            rt(h.validationMessage, c), h.validationMessage.className = K["validation-message"], b.customClass && b.customClass.validationMessage && Ze(h.validationMessage, b.customClass.validationMessage), W(h.validationMessage);
            const B = this.getInput();
            B && (B.setAttribute("aria-invalid", !0), B.setAttribute("aria-describedby", K["validation-message"]), Ct(B), Ze(B, K.inputerror))
        }

        function qo() {
            const c = A.domCache.get(this);
            c.validationMessage && L(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Pt(h, K.inputerror))
        }

        function Wo() {
            return A.domCache.get(this).progressSteps
        }

        function Xo(c) {
            const h = we(),
                b = A.innerParams.get(this);
            if (!h || xt(h, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const B = Ai(c),
                ge = Object.assign({}, b, B);
            Mr(this, ge), A.innerParams.set(this, ge), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Ai = c => {
            const h = {};
            return Object.keys(c).forEach(b => {
                se(b) ? h[b] = c[b] : f("Invalid parameter to update: ".concat(b))
            }), h
        };

        function Yo() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                An(this);
                return
            }
            c.popup && st.swalCloseEventFinishedCallback && (st.swalCloseEventFinishedCallback(), delete st.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Hr(this)
        }
        const Hr = c => {
                An(c), delete c.params, delete st.keydownHandler, delete st.keydownTarget, delete st.currentInstance
            },
            An = c => {
                c.isAwaitingPromise() ? (En(A, c), A.awaitingPromise.set(c, !0)) : (En(je, c), En(A, c))
            },
            En = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var Ur = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: ot,
            close: xn,
            isAwaitingPromise: ks,
            rejectPromise: Gr,
            handleAwaitingPromise: mt,
            closePopup: xn,
            closeModal: xn,
            closeToast: xn,
            enableButtons: Rs,
            disableButtons: zo,
            enableInput: Ho,
            disableInput: Uo,
            showValidationMessage: Yi,
            resetValidationMessage: qo,
            getProgressSteps: Wo,
            update: Xo,
            _destroy: Yo
        });
        const Is = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Qi(c, !0)
            },
            Ds = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : fn(c, !1)
            },
            Ko = (c, h) => {
                c.disableButtons(), h(Yn.cancel)
            },
            St = (c, h) => {
                const b = A.innerParams.get(c);
                if (!b.input) {
                    v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const B = w(c, b);
                b.inputValidator ? Ki(c, B, h) : c.getInput().checkValidity() ? h === "deny" ? fn(c, B) : Qi(c, B) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Ki = (c, h, b) => {
                const B = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(B.inputValidator(h, B.validationMessage))).then(He => {
                    c.enableButtons(), c.enableInput(), He ? c.showValidationMessage(He) : b === "deny" ? fn(c, h) : Qi(c, h)
                })
            },
            fn = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s($t()), b.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preDeny(h, b.validationMessage))).then(ge => {
                    ge === !1 ? (c.hideLoading(), mt(c)) : c.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? h : ge
                    })
                }).catch(ge => Ji(c || void 0, ge))) : c.close({
                    isDenied: !0,
                    value: h
                })
            },
            wn = (c, h) => {
                c.close({
                    isConfirmed: !0,
                    value: h
                })
            },
            Ji = (c, h) => {
                c.rejectPromise(h)
            },
            Qi = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preConfirm(h, b.validationMessage))).then(ge => {
                    pe(Qe()) || ge === !1 ? (c.hideLoading(), mt(c)) : wn(c, typeof ge > "u" ? h : ge)
                }).catch(ge => Ji(c || void 0, ge))) : wn(c, h)
            },
            Jo = (c, h, b) => {
                A.innerParams.get(c).toast ? Qo(c, h, b) : (qr(h), Ms(h), Zi(c, h, b))
            },
            Qo = (c, h, b) => {
                h.popup.onclick = () => {
                    const B = A.innerParams.get(c);
                    B && (Ls(B) || B.timer || B.input) || b(Yn.close)
                }
            },
            Ls = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let On = !1;
        const qr = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (On = !0)
                    }
                }
            },
            Ms = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (On = !0)
                    }
                }
            },
            Zi = (c, h, b) => {
                h.container.onclick = B => {
                    const ge = A.innerParams.get(c);
                    if (On) {
                        On = !1;
                        return
                    }
                    B.target === h.container && D(ge.allowOutsideClick) && b(Yn.backdrop)
                }
            },
            er = c => typeof c == "object" && c.jquery,
            tr = c => c instanceof Element || er(c),
            Zo = c => {
                const h = {};
                return typeof c[0] == "object" && !tr(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, B) => {
                    const ge = c[B];
                    typeof ge == "string" || tr(ge) ? h[b] = ge : ge !== void 0 && v("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), h
            };

        function nr() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), B = 0; B < h; B++) b[B] = arguments[B];
            return new c(...b)
        }

        function Wr(c) {
            class h extends this {
                _main(B, ge) {
                    return super._main(B, Object.assign({}, c, ge))
                }
            }
            return h
        }
        const Xr = () => st.timeout && st.timeout.getTimerLeft(),
            Ps = () => {
                if (st.timeout) return Je(), st.timeout.stop()
            },
            R = () => {
                if (st.timeout) {
                    const c = st.timeout.start();
                    return jt(c), c
                }
            },
            j = () => {
                const c = st.timeout;
                return c && (c.running ? Ps() : R())
            },
            X = c => {
                if (st.timeout) {
                    const h = st.timeout.increase(c);
                    return jt(h, !0), h
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
                    const B = h.getAttribute(b);
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
            argsToParams: Zo,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: hn,
            clickCancel: _t,
            getContainer: H,
            getPopup: we,
            getTitle: ue,
            getHtmlContainer: _e,
            getImage: ke,
            getIcon: ye,
            getInputLabel: qt,
            getCloseButton: M,
            getActions: g,
            getConfirmButton: ft,
            getDenyButton: $t,
            getCancelButton: l,
            getLoader: E,
            getFooter: _,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Qe,
            isLoading: Ie,
            fire: nr,
            mixin: Wr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Xr,
            stopTimer: Ps,
            resumeTimer: R,
            toggleTimer: j,
            increaseTimer: X,
            isTimerRunning: de,
            bindClickHandler: xe
        });
        let ze;
        class qe {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, b = new Array(h), B = 0; B < h; B++) b[B] = arguments[B];
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
                A.promise.set(this, He)
            }
            _main(h) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Me(Object.assign({}, b, h)), st.currentInstance && (st.currentInstance._destroy(), Se() && Pr()), st.currentInstance = ze;
                const B = dt(h, b);
                Cs(B), Object.freeze(B), st.timeout && (st.timeout.stop(), delete st.timeout), clearTimeout(st.restoreFocusTimeout);
                const ge = At(ze);
                return Mr(ze, B), A.innerParams.set(ze, B), Ke(ze, ge, B)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Ke = (c, h, b) => new Promise((B, ge) => {
                const He = Ut => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ut
                    })
                };
                je.swalPromiseResolve.set(c, B), je.swalPromiseReject.set(c, ge), h.confirmButton.onclick = () => Is(c), h.denyButton.onclick = () => Ds(c), h.cancelButton.onclick = () => Ko(c, He), h.closeButton.onclick = () => He(Yn.close), Jo(c, h, He), an(c, st, b, He), p(c, b), jr(b), Ye(st, b, He), Ht(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            dt = (c, h) => {
                const b = Ro(c),
                    B = Object.assign({}, re, h, b, c);
                return B.showClass = Object.assign({}, re.showClass, B.showClass), B.hideClass = Object.assign({}, re.hideClass, B.hideClass), B
            },
            At = c => {
                const h = {
                    popup: we(),
                    container: H(),
                    actions: g(),
                    confirmButton: ft(),
                    denyButton: $t(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: M(),
                    validationMessage: Qe(),
                    progressSteps: Fe()
                };
                return A.domCache.set(c, h), h
            },
            Ye = (c, h, b) => {
                const B = O();
                L(B), h.timer && (c.timeout = new Nr(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (W(B), ct(B, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && jt(h.timer)
                })))
            },
            Ht = (c, h) => {
                if (!h.toast) {
                    if (!D(h.allowEnterKey)) return pn();
                    Zt(c, h) || pt(h, -1, 1)
                }
            },
            Zt = (c, h) => h.focusDeny && pe(c.denyButton) ? (c.denyButton.focus(), !0) : h.focusCancel && pe(c.cancelButton) ? (c.cancelButton.focus(), !0) : h.focusConfirm && pe(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
            pn = () => {
                document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
            };
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
            const c = document.createElement("div");
            c.className = "leave-russia-now-and-apply-your-skills-to-the-world";
            const h = Y([{
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
        Object.assign(qe.prototype, Ur), Object.assign(qe, Le), Object.keys(Ur).forEach(c => {
            qe[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), qe.DismissReason = Yn, qe.version = "11.4.26";
        const Ot = qe;
        return Ot.default = Ot, Ot
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
const Mt = th.exports;
class kt {
    static get DismissReason() {
        return Mt.DismissReason
    }
    static show(e, n = {}) {
        switch (Mt.isVisible() && Mt.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
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
        Mt.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", Mt.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp4/monstermingle/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), Mt.fire(e)
    }
    static async showCustom(e) {
        return Mt.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", Mt.fire(e)
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
                i = Pi().width,
                a = Pi().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = Co();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Pi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Pi().width, Pi().height))
        }
    },
    TC = ht.View.extend({
        template: Be.template(SC),
        className: "CameraUser",
        model: new Ue.Model({
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
            this.cameraSprite = pl(kC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                v = Math.min(a / t, f / e),
                S = t * v,
                k = e * v;
            n.style.width = `${S}px`, n.style.height = `${k}px`, n.width = S, n.height = k
        }
    }),
    zn = Ue.Model.extend({
        defaults: {},
        set(t, e) {
            const n = Be.extend({}, this.attributes, this.defaults, t);
            return Ue.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = Be.extend({}, this.defaults, this.attributes, t);
            return Ue.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    AC = zn.extend({
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
    OC = ht.View.extend({
        template: Be.template('<div id="cameraRegion" class="cameraRegion"></div>'),
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
    IC = ht.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: Be.template(RC),
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
    DC = ht.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: IC,
        collection: new Ue.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    LC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp4/monstermingle/assets/5f12600b.png"/></svg>\r
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
    MC = ht.View.extend({
        tagName: "div",
        className: "picker",
        template: Be.template(LC),
        model: new Ue.Model({}),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new DC({
                collection: new Ue.Collection
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
        const v = this.smoothedMouseX - this.lastSmoothedMouse.x,
            S = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(v * v + S * S);
        let I;
        k !== 0 ? I = Math.PI / 2 + Math.atan2(S, v) : I = 0;
        const D = this.options.minThickness * e + this.options.thicknessFactor * k,
            $ = this.lastThickness + this.options.thicknessSmoothingFactor * (D - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = I);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(I),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(I),
            Y = Math.sin(I),
            re = Math.cos(I),
            m = this.lastThickness * J,
            P = this.lastThickness * ie,
            q = $ * Y,
            ae = $ * re,
            se = .33 * k * J,
            ve = -.33 * k * ie,
            d = this.lastSmoothedMouse.x + P + se,
            Ee = this.lastSmoothedMouse.y + m + ve,
            Ae = this.lastSmoothedMouse.x - P + se,
            Me = this.lastSmoothedMouse.y - m + ve;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(d, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + q), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.canvasCTX.quadraticCurveTo(Ae, Me, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * $;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + q), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = I, this.lastThickness = $, this.lastMouseChangeVector = {
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
const fc = {
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
        at(this, "canvasSelector");
        at(this, "canvas");
        at(this, "ctx");
        at(this, "options");
        at(this, "history");
        at(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Pe(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(fc, n), this.history = [], this.layerNames.forEach(i => {
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
        const n = Object.assign(fc.sketchOptions, e);
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
        const v = i.getContext("2d");
        return n && (v.fillStyle = n, v.fillRect(0, 0, a, f)), v.drawImage(this.highlighterSketch.canvas, 0, 0, a, f), v.drawImage(this.markerSketch.canvas, 0, 0, a, f), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const VC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    NC = ht.View.extend({
        className: "Sketchpad canvasContainer",
        template: Be.template(VC),
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
                i = Pe(n)[0].width / Pe(n).width(),
                a = n.getBoundingClientRect(),
                f = this.model.get("size"),
                v = this.sketchpad.options.thickness;
            let S = (e.clientX - a.left) * i;
            S = Math.min(f.width - v, Math.max(v, S));
            let k = (e.clientY - a.top) * i;
            return k = Math.min(f.height - v, Math.max(v, k)), {
                x: S,
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
    $C = zn.extend({
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
    FC = ht.View.extend({
        className: "Draw",
        template: Be.template(BC),
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
            this.promptComponent = this.promptComponent || new mi({}), this.toolbarComponent = this.toolbarComponent || new MC({
                model: new Ue.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new NC({
                model: new Ue.Model
            }), this.buttonsCollection = this.buttonsCollection || new Ue.Collection([]), this.buttonsComponent = this.buttonsComponent || new pi({
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
            const t = Pe("#sketchpad"),
                e = Pe("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(Pe(".controller-content").css("border-top-width"), 10) * 2 + Pe(".playerTopBar").innerHeight() + Pe("#prompt").innerHeight() + Pe("#toolbar").innerHeight() + parseInt(Pe(".canvasContainer").css("border-top-width"), 10) * 2 + Pe("#buttons").innerHeight() + Pe("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(Pe(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(Pe(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(Pe(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                v = 2,
                S = Math.min(t.width() - i, a * v),
                k = Math.max(Pe("#controller-container").innerHeight() - n, 250),
                I = Math.min(S / a, k / f),
                D = a * I,
                $ = f * I;
            e.style.width = `${D}px`, e.style.height = `${$}px`, window.scrollTo(0, 0)
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
    GC = zn.extend({
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
    zC = ht.View.extend({
        className: "EnterSingleText scrollable",
        template: Be.template(jC),
        model: new GC,
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new mi({
                model: new Ue.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new hs({
                model: new Ue.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new Ue.Collection([{
                text: "submit"
            }]), this.buttonsComponent = this.buttonsComponent || new pi({
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
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = Be.throttle(() => {
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
                n = Be.without(t, e);
            return this.inputComponent.setValue(Be.shuffle(n)[0]), !1
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
ht.View.extend({
    model: new Ue.Model({}),
    myViewOptions: ["width", "height", "sketchOptions"],
    template: Be.template(`
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
ht.View.extend({
    appId: "legacymain",
    appTag: "legacymain",
    template: null,
    client: null,
    initialize(t) {
        this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new Ue.Model({});
        const e = this.client.parseEntities();
        this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
            this.update().catch(this.caughtError)
        }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
    },
    render() {
        this.model.set("username", Xt.safeText(this.client.name), {
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
        !n && e.indexOf("_") !== -1 && (n = t.state.split("_")[1]), n === "PostGame" || e === "Credits" || e === "GameOver" || e === "PostGame" || e === "DayEnd" || t.gameResults ? ii.isInitialized ? ii.show() : ii.init(this.getOption("appTag")).then(() => {
            ii.show()
        }) : ii.hide(), t.platformId && tn.setTag(`platform-${t.platformId}`)
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
        Bi.setAsViewed(0)
    },
    showScreen(t, e) {
        const n = Pe(t);
        return this.activeScreen && t === this.activeScreen || (this.activeScreen && (Pe(this.activeScreen).fadeOut("fast", () => {}), Pe(this.activeScreen).show(), Pe(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
            e && e()
        }), this.activeScreen = t, this.onResize()), !1
    },
    notify() {
        kt.vibrate()
    },
    onRoomWasDestroyed() {
        tn.remove("roomCode"), tn.remove("reconnect"), kt.show("error", {
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
        const t = Pe("#player").outerHeight(!0) || 0,
            e = ii.isVisible ? Pe("#slide-in-banner").outerHeight(!0) : 0,
            n = Pe(window).width(),
            i = Pe(window).height() - t;
        Pe(`.${this.getOption("appTag")}-page`).css("height", i - e), Pe(`.${this.getOption("appTag")}-page`).attr("height", i - e), Pe(`.${this.getOption("appTag")}-page`).css("top", t), Pe(`.${this.getOption("appTag")}-page`).css("width", n), Pe(`.${this.getOption("appTag")}-page`).attr("width", n)
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
    UC = zn.extend({
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
    qC = ht.View.extend({
        tagName: "button",
        template: Be.template('<span class="flex-item"></span>'),
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
    WC = ht.View.extend({
        className: "Lobby scrollable",
        template: Be.template(HC),
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
                    return t && !Be.isEmpty(t)
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
            this.titleComponent = new mi({
                model: new Ue.Model({})
            }), this.choicesListView = this.choicesListView || new pi, this.charactersListView = new ht.CollectionView({
                childView: qC,
                className: "charactersList",
                collection: new Ue.Collection
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
                        a = i && i.metadata ? Xt.htmlUnescape(i.metadata.title) : null;
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
                e && e.error && this.lastUGCResultId !== e.id && (kt.show("alert", {
                    text: e.error
                }), this.lastUGCResultId = e.id)
            }
            this.model.get("canChangeName") && this.choicesListView.collection.add({
                html: this.getOption("strings").button_changename,
                action: "changeName"
            }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
            const t = this.model.get("characters") || [];
            this.charactersListView.collection.set(Be.map(t, e => {
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
            }), Bi.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = Pe(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const a = await kt.show("custom", {
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
                    } catch {} else if (i === "censorOptions") kt.show("custom", {
                        target: this.el,
                        html: "",
                        confirmButtonText: this.model.get("strings").button_cancel,
                        customClass: {
                            popup: "censorOptionsModal",
                            confirmButton: "cancelButton"
                        },
                        didOpen() {
                            const a = new pi({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new Ue.Collection
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
                    const a = new pi({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new Ue.Collection([])
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
                        kt.close()
                    }), e.listenTo(a, "childview:input:submit", e.activateContentIdFromInput)
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
    XC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    YC = zn.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    so = ht.View.extend({
        className: "Logo",
        template: Be.template(XC),
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
            }), Bi.setAsViewed(0)
        }
    }),
    Fs = {
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
    JC = ht.View.extend({
        className: "playerTopBarView",
        template: Be.template(KC),
        model: new Ue.Model,
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
    ZC = zn.extend({
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
    Xs = ht.View.extend({
        className: "MakeSingleChoice scrollable",
        template: Be.template(QC),
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
            this.promptComponent = this.promptComponent || new mi({
                model: new Ue.Model
            }), this.choicesList = this.choicesList || new pi({
                action: "choose",
                collection: new Ue.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && Be.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
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
                const f = this.choicesList.children.find(v => v.model.get("index") === a);
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
                if (this.model.get("censorDialog") === "warning") return Mt.close(), Mt.fire({
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
function pc(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function Gn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? pc(Object(n), !0).forEach(function(i) {
            ex(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pc(Object(n)).forEach(function(i) {
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

function ex(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

function oi() {
    return oi = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }, oi.apply(this, arguments)
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

function si(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var ai = si(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    gs = si(/Edge/i),
    gc = si(/firefox/i),
    os = si(/safari/i) && !si(/chrome/i) && !si(/android/i),
    ih = si(/iP(ad|od|hone)/i),
    rh = si(/chrome/i) && si(/android/i),
    sh = {
        capture: !1,
        passive: !1
    };

function Et(t, e, n) {
    t.addEventListener(e, n, !ai && sh)
}

function bt(t, e, n) {
    t.removeEventListener(e, n, !ai && sh)
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

function rx(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function $n(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && oo(t, e) : oo(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = rx(t))
    }
    return null
}
var mc = /\s+/g;

function _n(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(mc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(mc, " ")
        }
}

function it(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function gr(t, e) {
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

function oh(t, e, n) {
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

function jn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Jt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, v, S, k, I, D, $;
        if (t !== window && t.parentNode && t !== jn() ? (f = t.getBoundingClientRect(), v = f.top, S = f.left, k = f.bottom, I = f.right, D = f.height, $ = f.width) : (v = 0, S = 0, k = window.innerHeight, I = window.innerWidth, D = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !ai))
            do
                if (a && a.getBoundingClientRect && (it(a, "transform") !== "none" || n && it(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    v -= J.top + parseInt(it(a, "border-top-width")), S -= J.left + parseInt(it(a, "border-left-width")), k = v + f.height, I = S + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = gr(a || t),
                Y = ie && ie.a,
                re = ie && ie.d;
            ie && (v /= re, S /= Y, $ /= Y, D /= re, k = v + D, I = S + $)
        }
        return {
            top: v,
            left: S,
            bottom: k,
            right: I,
            width: $,
            height: D
        }
    }
}

function vc(t, e, n) {
    for (var i = fi(t, !0), a = Jt(t)[e]; i;) {
        var f = Jt(i)[n],
            v = void 0;
        if (n === "top" || n === "left" ? v = a >= f : v = a <= f, !v) return i;
        if (i === jn()) break;
        i = fi(i, !1)
    }
    return !1
}

function wr(t, e, n, i) {
    for (var a = 0, f = 0, v = t.children; f < v.length;) {
        if (v[f].style.display !== "none" && v[f] !== et.ghost && (i || v[f] !== et.dragged) && $n(v[f], n.draggable, t, !1)) {
            if (a === e) return v[f];
            a++
        }
        f++
    }
    return null
}

function gl(t, e) {
    for (var n = t.lastElementChild; n && (n === et.ghost || it(n, "display") === "none" || e && !oo(n, e));) n = n.previousElementSibling;
    return n || null
}

function Rn(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== et.clone && (!e || oo(t, e)) && n++;
    return n
}

function yc(t) {
    var e = 0,
        n = 0,
        i = jn();
    if (t)
        do {
            var a = gr(t),
                f = a.a,
                v = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * v
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

function fi(t, e) {
    if (!t || !t.getBoundingClientRect) return jn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = it(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return jn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return jn()
}

function ox(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function ga(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var as;

function ah(t, e) {
    return function() {
        if (!as) {
            var n = arguments,
                i = this;
            n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), as = setTimeout(function() {
                as = void 0
            }, e)
        }
    }
}

function ax() {
    clearTimeout(as), as = void 0
}

function lh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function ch(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var kn = "Sortable" + new Date().getTime();

function lx() {
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
                            rect: Jt(a)
                        });
                        var f = Gn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var v = gr(a, !0);
                            v && (f.top -= v.f, f.left -= v.e)
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
                v = 0;
            t.forEach(function(S) {
                var k = 0,
                    I = S.target,
                    D = I.fromRect,
                    $ = Jt(I),
                    J = I.prevFromRect,
                    ie = I.prevToRect,
                    Y = S.rect,
                    re = gr(I, !0);
                re && ($.top -= re.f, $.left -= re.e), I.toRect = $, I.thisAnimationDuration && ga(J, $) && !ga(D, $) && (Y.top - $.top) / (Y.left - $.left) === (D.top - $.top) / (D.left - $.left) && (k = ux(Y, J, ie, a.options)), ga($, D) || (I.prevFromRect = D, I.prevToRect = $, k || (k = a.options.animation), a.animate(I, Y, $, k)), k && (f = !0, v = Math.max(v, k), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, k), I.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, v) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, v) {
            if (v) {
                it(i, "transition", ""), it(i, "transform", "");
                var S = gr(this.el),
                    k = S && S.a,
                    I = S && S.d,
                    D = (a.left - f.left) / (k || 1),
                    $ = (a.top - f.top) / (I || 1);
                i.animatingX = !!D, i.animatingY = !!$, it(i, "transform", "translate3d(" + D + "px," + $ + "px,0)"), this.forRepaintDummy = cx(i), it(i, "transition", "transform " + v + "ms" + (this.options.easing ? " " + this.options.easing : "")), it(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    it(i, "transition", ""), it(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, v)
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
var sr = [],
    ma = {
        initializeByDefault: !0
    },
    ms = {
        mount: function(e) {
            for (var n in ma) ma.hasOwnProperty(n) && !(n in e) && (e[n] = ma[n]);
            sr.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), sr.push(e)
        },
        pluginEvent: function(e, n, i) {
            var a = this;
            this.eventCanceled = !1, i.cancel = function() {
                a.eventCanceled = !0
            };
            var f = e + "Global";
            sr.forEach(function(v) {
                !n[v.pluginName] || (n[v.pluginName][f] && n[v.pluginName][f](Gn({
                    sortable: n
                }, i)), n.options[v.pluginName] && n[v.pluginName][e] && n[v.pluginName][e](Gn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            sr.forEach(function(S) {
                var k = S.pluginName;
                if (!(!e.options[k] && !S.initializeByDefault)) {
                    var I = new S(e, n, e.options);
                    I.sortable = e, I.options = e.options, e[k] = I, oi(i, I.defaults)
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
            return sr.forEach(function(a) {
                typeof a.eventProperties == "function" && oi(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return sr.forEach(function(f) {
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
        v = t.toEl,
        S = t.fromEl,
        k = t.oldIndex,
        I = t.newIndex,
        D = t.oldDraggableIndex,
        $ = t.newDraggableIndex,
        J = t.originalEvent,
        ie = t.putSortable,
        Y = t.extraEventProperties;
    if (e = e || n && n[kn], !!e) {
        var re, m = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !ai && !gs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = v || n, re.from = S || n, re.item = a || n, re.clone = f, re.oldIndex = k, re.newIndex = I, re.oldDraggableIndex = D, re.newDraggableIndex = $, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var q = Gn(Gn({}, Y), ms.getEventProperties(i, e));
        for (var ae in q) re[ae] = q[ae];
        n && n.dispatchEvent(re), m[P] && m[P].call(e, re)
    }
}
var dx = ["evt"],
    bn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = nx(i, dx);
        ms.pluginEvent.bind(et)(e, n, Gn({
            dragEl: Re,
            parentEl: Ft,
            ghostEl: ut,
            rootEl: Vt,
            nextEl: Li,
            lastDownEl: Ks,
            cloneEl: Bt,
            cloneHidden: hi,
            dragStarted: Zr,
            putSortable: nn,
            activeSortable: et.active,
            originalEvent: a,
            oldIndex: ur,
            oldDraggableIndex: ls,
            newIndex: Sn,
            newDraggableIndex: ui,
            hideGhostForTarget: fh,
            unhideGhostForTarget: ph,
            cloneNowHidden: function() {
                hi = !0
            },
            cloneNowShown: function() {
                hi = !1
            },
            dispatchSortableEvent: function(S) {
                mn({
                    sortable: n,
                    name: S,
                    originalEvent: a
                })
            }
        }, f))
    };

function mn(t) {
    hx(Gn({
        putSortable: nn,
        cloneEl: Bt,
        targetEl: Re,
        rootEl: Vt,
        oldIndex: ur,
        oldDraggableIndex: ls,
        newIndex: Sn,
        newDraggableIndex: ui
    }, t))
}
var Re, Ft, ut, Vt, Li, Ks, Bt, hi, ur, Sn, ls, ui, js, nn, cr = !1,
    ao = !1,
    lo = [],
    Ri, Mn, va, ya, wc, bc, Zr, or, cs, us = !1,
    Gs = !1,
    Js, cn, wa = [],
    Va = !1,
    co = [],
    Eo = typeof document < "u",
    zs = ih,
    Cc = gs || ai ? "cssFloat" : "float",
    fx = Eo && !rh && !ih && "draggable" in document.createElement("div"),
    uh = function() {
        if (!!Eo) {
            if (ai) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    hh = function(e, n) {
        var i = it(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = wr(e, 0, n),
            v = wr(e, 1, n),
            S = f && it(f),
            k = v && it(v),
            I = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Jt(f).width,
            D = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Jt(v).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && S.float && S.float !== "none") {
            var $ = S.float === "left" ? "left" : "right";
            return v && (k.clear === "both" || k.clear === $) ? "vertical" : "horizontal"
        }
        return f && (S.display === "block" || S.display === "flex" || S.display === "table" || S.display === "grid" || I >= a && i[Cc] === "none" || v && i[Cc] === "none" && I + D > a) ? "vertical" : "horizontal"
    },
    px = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            v = i ? e.width : e.height,
            S = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return a === S || f === k || a + v / 2 === S + I / 2
    },
    gx = function(e, n) {
        var i;
        return lo.some(function(a) {
            var f = a[kn].options.emptyInsertThreshold;
            if (!(!f || gl(a))) {
                var v = Jt(a),
                    S = e >= v.left - f && e <= v.right + f,
                    k = n >= v.top - f && n <= v.bottom + f;
                if (S && k) return i = a
            }
        }), i
    },
    dh = function(e) {
        function n(f, v) {
            return function(S, k, I, D) {
                var $ = S.options.group.name && k.options.group.name && S.options.group.name === k.options.group.name;
                if (f == null && (v || $)) return !0;
                if (f == null || f === !1) return !1;
                if (v && f === "clone") return f;
                if (typeof f == "function") return n(f(S, k, I, D), v)(S, k, I, D);
                var J = (v ? S : k).options.group.name;
                return f === !0 || typeof f == "string" && f === J || f.join && f.indexOf(J) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Ys(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    fh = function() {
        !uh && ut && it(ut, "display", "none")
    },
    ph = function() {
        !uh && ut && it(ut, "display", "")
    };
Eo && !rh && document.addEventListener("click", function(t) {
    if (ao) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ao = !1, !1
}, !0);
var Ii = function(e) {
        if (Re) {
            e = e.touches ? e.touches[0] : e;
            var n = gx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[kn]._onDragOver(i)
            }
        }
    },
    mx = function(e) {
        Re && Re.parentNode[kn]._isOutsideThisEl(e.target)
    };

function et(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = oi({}, e), t[kn] = this;
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
            return hh(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(v, S) {
            v.setData("Text", S.textContent)
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
        supportPointer: et.supportPointer !== !1 && "PointerEvent" in window && !os,
        emptyInsertThreshold: 5
    };
    ms.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    dh(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : fx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Et(t, "pointerdown", this._onTapStart) : (Et(t, "mousedown", this._onTapStart), Et(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Et(t, "dragover", this), Et(t, "dragenter", this)), lo.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), oi(this, lx())
}
et.prototype = {
    constructor: et,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (or = null)
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
                v = e.type,
                S = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (S || e).target,
                I = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                D = a.filter;
            if (_x(i), !Re && !(/mousedown|pointerdown/.test(v) && e.button !== 0 || a.disabled) && !I.isContentEditable && !(!this.nativeDraggable && os && k && k.tagName.toUpperCase() === "SELECT") && (k = $n(k, a.draggable, i, !1), !(k && k.animated) && Ks !== k)) {
                if (ur = Rn(k), ls = Rn(k, a.draggable), typeof D == "function") {
                    if (D.call(this, e, k, this)) {
                        mn({
                            sortable: n,
                            rootEl: I,
                            name: "filter",
                            targetEl: k,
                            toEl: i,
                            fromEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (D && (D = D.split(",").some(function($) {
                        if ($ = $n(I, $.trim(), i, !1), $) return mn({
                            sortable: n,
                            rootEl: $,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), !0
                    }), D)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !$n(I, a.handle, i, !1) || this._prepareDragStart(e, S, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            f = a.el,
            v = a.options,
            S = f.ownerDocument,
            k;
        if (i && !Re && i.parentNode === f) {
            var I = Jt(i);
            if (Vt = f, Re = i, Ft = Re.parentNode, Li = Re.nextSibling, Ks = i, js = v.group, et.dragged = Re, Ri = {
                    target: Re,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, wc = Ri.clientX - I.left, bc = Ri.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Re.style["will-change"] = "all", k = function() {
                    if (bn("delayEnded", a, {
                            evt: e
                        }), et.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !gc && a.nativeDraggable && (Re.draggable = !0), a._triggerDragStart(e, n), mn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), _n(Re, v.chosenClass, !0)
                }, v.ignore.split(",").forEach(function(D) {
                    oh(Re, D.trim(), ba)
                }), Et(S, "dragover", Ii), Et(S, "mousemove", Ii), Et(S, "touchmove", Ii), Et(S, "mouseup", a._onDrop), Et(S, "touchend", a._onDrop), Et(S, "touchcancel", a._onDrop), gc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Re.draggable = !0), bn("delayStart", this, {
                    evt: e
                }), v.delay && (!v.delayOnTouchOnly || n) && (!this.nativeDraggable || !(gs || ai))) {
                if (et.eventCanceled) {
                    this._onDrop();
                    return
                }
                Et(S, "mouseup", a._disableDelayedDrag), Et(S, "touchend", a._disableDelayedDrag), Et(S, "touchcancel", a._disableDelayedDrag), Et(S, "mousemove", a._delayedDragTouchMoveHandler), Et(S, "touchmove", a._delayedDragTouchMoveHandler), v.supportPointer && Et(S, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, v.delay)
            } else k()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Re && ba(Re), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._disableDelayedDrag), bt(e, "touchend", this._disableDelayedDrag), bt(e, "touchcancel", this._disableDelayedDrag), bt(e, "mousemove", this._delayedDragTouchMoveHandler), bt(e, "touchmove", this._delayedDragTouchMoveHandler), bt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Et(document, "pointermove", this._onTouchMove) : n ? Et(document, "touchmove", this._onTouchMove) : Et(document, "mousemove", this._onTouchMove) : (Et(Re, "dragend", this), Et(Vt, "dragstart", this._onDragStart));
        try {
            document.selection ? Qs(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (cr = !1, Vt && Re) {
            bn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && Et(document, "dragover", mx);
            var i = this.options;
            !e && _n(Re, i.dragClass, !1), _n(Re, i.ghostClass, !0), et.active = this, e && this._appendGhost(), mn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Mn) {
            this._lastX = Mn.clientX, this._lastY = Mn.clientY, fh();
            for (var e = document.elementFromPoint(Mn.clientX, Mn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Mn.clientX, Mn.clientY), e !== n);) n = e;
            if (Re.parentNode[kn]._isOutsideThisEl(e), n)
                do {
                    if (n[kn]) {
                        var i = void 0;
                        if (i = n[kn]._onDragOver({
                                clientX: Mn.clientX,
                                clientY: Mn.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            ph()
        }
    },
    _onTouchMove: function(e) {
        if (Ri) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                v = ut && gr(ut, !0),
                S = ut && v && v.a,
                k = ut && v && v.d,
                I = zs && cn && yc(cn),
                D = (f.clientX - Ri.clientX + a.x) / (S || 1) + (I ? I[0] - wa[0] : 0) / (S || 1),
                $ = (f.clientY - Ri.clientY + a.y) / (k || 1) + (I ? I[1] - wa[1] : 0) / (k || 1);
            if (!et.active && !cr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                v ? (v.e += D - (va || 0), v.f += $ - (ya || 0)) : v = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: $
                };
                var J = "matrix(".concat(v.a, ",").concat(v.b, ",").concat(v.c, ",").concat(v.d, ",").concat(v.e, ",").concat(v.f, ")");
                it(ut, "webkitTransform", J), it(ut, "mozTransform", J), it(ut, "msTransform", J), it(ut, "transform", J), va = D, ya = $, Mn = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Vt,
                n = Jt(Re, !0, zs, !0, e),
                i = this.options;
            if (zs) {
                for (cn = e; it(cn, "position") === "static" && it(cn, "transform") === "none" && cn !== document;) cn = cn.parentNode;
                cn !== document.body && cn !== document.documentElement ? (cn === document && (cn = jn()), n.top += cn.scrollTop, n.left += cn.scrollLeft) : cn = jn(), wa = yc(cn)
            }
            ut = Re.cloneNode(!0), _n(ut, i.ghostClass, !1), _n(ut, i.fallbackClass, !0), _n(ut, i.dragClass, !0), it(ut, "transition", ""), it(ut, "transform", ""), it(ut, "box-sizing", "border-box"), it(ut, "margin", 0), it(ut, "top", n.top), it(ut, "left", n.left), it(ut, "width", n.width), it(ut, "height", n.height), it(ut, "opacity", "0.8"), it(ut, "position", zs ? "absolute" : "fixed"), it(ut, "zIndex", "100000"), it(ut, "pointerEvents", "none"), et.ghost = ut, e.appendChild(ut), it(ut, "transform-origin", wc / parseInt(ut.style.width) * 100 + "% " + bc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            a = e.dataTransfer,
            f = i.options;
        if (bn("dragStart", this, {
                evt: e
            }), et.eventCanceled) {
            this._onDrop();
            return
        }
        bn("setupClone", this), et.eventCanceled || (Bt = ch(Re), Bt.removeAttribute("id"), Bt.draggable = !1, Bt.style["will-change"] = "", this._hideClone(), _n(Bt, this.options.chosenClass, !1), et.clone = Bt), i.cloneId = Qs(function() {
            bn("clone", i), !et.eventCanceled && (i.options.removeCloneOnHide || Vt.insertBefore(Bt, Re), i._hideClone(), mn({
                sortable: i,
                name: "clone"
            }))
        }), !n && _n(Re, f.dragClass, !0), n ? (ao = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (bt(document, "mouseup", i._onDrop), bt(document, "touchend", i._onDrop), bt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Re)), Et(document, "drop", i), it(Re, "transform", "translateZ(0)")), cr = !0, i._dragStartId = Qs(i._dragStarted.bind(i, n, e)), Et(document, "selectstart", i), Zr = !0, os && it(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, v, S = this.options,
            k = S.group,
            I = et.active,
            D = js === k,
            $ = S.sort,
            J = nn || I,
            ie, Y = this,
            re = !1;
        if (Va) return;

        function m(ye, ue) {
            bn(ye, Y, Gn({
                evt: e,
                isOwner: D,
                axis: ie ? "vertical" : "horizontal",
                revert: v,
                dragRect: a,
                targetRect: f,
                canSort: $,
                fromSortable: J,
                target: i,
                completed: q,
                onMove: function(ke, Fe) {
                    return Hs(Vt, n, Re, a, ke, Jt(ke), e, Fe)
                },
                changed: ae
            }, ue))
        }

        function P() {
            m("dragOverAnimationCapture"), Y.captureAnimationState(), Y !== J && J.captureAnimationState()
        }

        function q(ye) {
            return m("dragOverCompleted", {
                insertion: ye
            }), ye && (D ? I._hideClone() : I._showClone(Y), Y !== J && (_n(Re, nn ? nn.options.ghostClass : I.options.ghostClass, !1), _n(Re, S.ghostClass, !0)), nn !== Y && Y !== et.active ? nn = Y : Y === et.active && nn && (nn = null), J === Y && (Y._ignoreWhileAnimating = i), Y.animateAll(function() {
                m("dragOverAnimationComplete"), Y._ignoreWhileAnimating = null
            }), Y !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Re && !Re.animated || i === n && !i.animated) && (or = null), !S.dragoverBubble && !e.rootEl && i !== document && (Re.parentNode[kn]._isOutsideThisEl(e.target), !ye && Ii(e)), !S.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            Sn = Rn(Re), ui = Rn(Re, S.draggable), mn({
                sortable: Y,
                name: "change",
                toEl: n,
                newIndex: Sn,
                newDraggableIndex: ui,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, S.draggable, n, !0), m("dragOver"), et.eventCanceled) return re;
        if (Re.contains(e.target) || i.animated && i.animatingX && i.animatingY || Y._ignoreWhileAnimating === i) return q(!1);
        if (ao = !1, I && !S.disabled && (D ? $ || (v = Ft !== Vt) : nn === this || (this.lastPutMode = js.checkPull(this, I, Re, e)) && k.checkPut(this, I, Re, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Jt(Re), m("dragOverValid"), et.eventCanceled) return re;
            if (v) return Ft = Vt, P(), this._hideClone(), m("revert"), et.eventCanceled || (Li ? Vt.insertBefore(Re, Li) : Vt.appendChild(Re)), q(!0);
            var se = gl(n, S.draggable);
            if (!se || bx(e, ie, this) && !se.animated) {
                if (se === Re) return q(!1);
                if (se && n === e.target && (i = se), i && (f = Jt(i)), Hs(Vt, n, Re, a, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Re, se.nextSibling) : n.appendChild(Re), Ft = n, ae(), q(!0)
            } else if (se && wx(e, ie, this)) {
                var ve = wr(n, 0, S, !0);
                if (ve === Re) return q(!1);
                if (i = ve, f = Jt(i), Hs(Vt, n, Re, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Re, ve), Ft = n, ae(), q(!0)
            } else if (i.parentNode === n) {
                f = Jt(i);
                var d = 0,
                    Ee, Ae = Re.parentNode !== n,
                    Me = !px(Re.animated && Re.toRect || a, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    $e = vc(i, "top", "top") || vc(Re, "top", "top"),
                    K = $e ? $e.scrollTop : void 0;
                or !== i && (Ee = f[lt], us = !1, Gs = !Me && S.invertSwap || Ae), d = Cx(e, i, f, ie, Me ? 1 : S.swapThreshold, S.invertedSwapThreshold == null ? S.swapThreshold : S.invertedSwapThreshold, Gs, or === i);
                var Ge;
                if (d !== 0) {
                    var H = Rn(Re);
                    do H -= d, Ge = Ft.children[H]; while (Ge && (it(Ge, "display") === "none" || Ge === ut))
                }
                if (d === 0 || Ge === i) return q(!1);
                or = i, cs = d;
                var oe = i.nextElementSibling,
                    Te = !1;
                Te = d === 1;
                var we = Hs(Vt, n, Re, a, i, f, e, Te);
                if (we !== !1) return (we === 1 || we === -1) && (Te = we === 1), Va = !0, setTimeout(yx, 30), P(), Te && !oe ? n.appendChild(Re) : i.parentNode.insertBefore(Re, Te ? oe : i), $e && lh($e, 0, K - $e.scrollTop), Ft = Re.parentNode, Ee !== void 0 && !Gs && (Js = Math.abs(Ee - Jt(i)[lt])), ae(), q(!0)
            }
            if (n.contains(Re)) return q(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        bt(document, "mousemove", this._onTouchMove), bt(document, "touchmove", this._onTouchMove), bt(document, "pointermove", this._onTouchMove), bt(document, "dragover", Ii), bt(document, "mousemove", Ii), bt(document, "touchmove", Ii)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._onDrop), bt(e, "touchend", this._onDrop), bt(e, "pointerup", this._onDrop), bt(e, "touchcancel", this._onDrop), bt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (Sn = Rn(Re), ui = Rn(Re, i.draggable), bn("drop", this, {
                evt: e
            }), Ft = Re && Re.parentNode, Sn = Rn(Re), ui = Rn(Re, i.draggable), et.eventCanceled) {
            this._nulling();
            return
        }
        cr = !1, Gs = !1, us = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Na(this.cloneId), Na(this._dragStartId), this.nativeDraggable && (bt(document, "drop", this), bt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), os && it(document.body, "user-select", ""), it(Re, "transform", ""), e && (Zr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Vt === Ft || nn && nn.lastPutMode !== "clone") && Bt && Bt.parentNode && Bt.parentNode.removeChild(Bt), Re && (this.nativeDraggable && bt(Re, "dragend", this), ba(Re), Re.style["will-change"] = "", Zr && !cr && _n(Re, nn ? nn.options.ghostClass : this.options.ghostClass, !1), _n(Re, this.options.chosenClass, !1), mn({
            sortable: this,
            name: "unchoose",
            toEl: Ft,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Vt !== Ft ? (Sn >= 0 && (mn({
            rootEl: Ft,
            name: "add",
            toEl: Ft,
            fromEl: Vt,
            originalEvent: e
        }), mn({
            sortable: this,
            name: "remove",
            toEl: Ft,
            originalEvent: e
        }), mn({
            rootEl: Ft,
            name: "sort",
            toEl: Ft,
            fromEl: Vt,
            originalEvent: e
        }), mn({
            sortable: this,
            name: "sort",
            toEl: Ft,
            originalEvent: e
        })), nn && nn.save()) : Sn !== ur && Sn >= 0 && (mn({
            sortable: this,
            name: "update",
            toEl: Ft,
            originalEvent: e
        }), mn({
            sortable: this,
            name: "sort",
            toEl: Ft,
            originalEvent: e
        })), et.active && ((Sn == null || Sn === -1) && (Sn = ur, ui = ls), mn({
            sortable: this,
            name: "end",
            toEl: Ft,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        bn("nulling", this), Vt = Re = Ft = ut = Li = Bt = Ks = hi = Ri = Mn = Zr = Sn = ui = ur = ls = or = cs = nn = js = et.dragged = et.ghost = et.clone = et.active = null, co.forEach(function(e) {
            e.checked = !0
        }), co.length = va = ya = 0
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
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, v = this.options; a < f; a++) n = i[a], $n(n, v.draggable, this.el, !1) && e.push(n.getAttribute(v.dataIdAttr) || Ex(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, v) {
            var S = a.children[v];
            $n(S, this.options.draggable, a, !1) && (i[f] = S)
        }, this), n && this.captureAnimationState(), e.forEach(function(f) {
            i[f] && (a.removeChild(i[f]), a.appendChild(i[f]))
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
        var a = ms.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && dh(i)
    },
    destroy: function() {
        bn("destroy", this);
        var e = this.el;
        e[kn] = null, bt(e, "mousedown", this._onTapStart), bt(e, "touchstart", this._onTapStart), bt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (bt(e, "dragover", this), bt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), lo.splice(lo.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!hi) {
            if (bn("hideClone", this), et.eventCanceled) return;
            it(Bt, "display", "none"), this.options.removeCloneOnHide && Bt.parentNode && Bt.parentNode.removeChild(Bt), hi = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (hi) {
            if (bn("showClone", this), et.eventCanceled) return;
            Re.parentNode == Vt && !this.options.group.revertClone ? Vt.insertBefore(Bt, Re) : Li ? Vt.insertBefore(Bt, Li) : Vt.appendChild(Bt), this.options.group.revertClone && this.animate(Re, Bt), it(Bt, "display", ""), hi = !1
        }
    }
};

function vx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Hs(t, e, n, i, a, f, v, S) {
    var k, I = t[kn],
        D = I.options.onMove,
        $;
    return window.CustomEvent && !ai && !gs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = f || Jt(e), k.willInsertAfter = S, k.originalEvent = v, t.dispatchEvent(k), D && ($ = D.call(I, k, v)), $
}

function ba(t) {
    t.draggable = !1
}

function yx() {
    Va = !1
}

function wx(t, e, n) {
    var i = Jt(wr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function bx(t, e, n) {
    var i = Jt(gl(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function Cx(t, e, n, i, a, f, v, S) {
    var k = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        D = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        J = !1;
    if (!v) {
        if (S && Js < I * a) {
            if (!us && (cs === 1 ? k > D + I * f / 2 : k < $ - I * f / 2) && (us = !0), us) J = !0;
            else if (cs === 1 ? k < D + Js : k > $ - Js) return -cs
        } else if (k > D + I * (1 - a) / 2 && k < $ - I * (1 - a) / 2) return xx(e)
    }
    return J = J || v, J && (k < D + I * f / 2 || k > $ - I * f / 2) ? k > D + I / 2 ? 1 : -1 : 0
}

function xx(t) {
    return Rn(Re) < Rn(t) ? 1 : -1
}

function Ex(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function _x(t) {
    co.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && co.push(i)
    }
}

function Qs(t) {
    return setTimeout(t, 0)
}

function Na(t) {
    return clearTimeout(t)
}
Eo && Et(document, "touchmove", function(t) {
    (et.active || cr) && t.cancelable && t.preventDefault()
});
et.utils = {
    on: Et,
    off: bt,
    css: it,
    find: oh,
    is: function(e, n) {
        return !!$n(e, n, e, !1)
    },
    extend: ox,
    throttle: ah,
    closest: $n,
    toggleClass: _n,
    clone: ch,
    index: Rn,
    nextTick: Qs,
    cancelNextTick: Na,
    detectDirection: hh,
    getChild: wr
};
et.get = function(t) {
    return t[kn]
};
et.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (et.utils = Gn(Gn({}, et.utils), i.utils)), ms.mount(i)
    })
};
et.create = function(t, e) {
    return new et(t, e)
};
et.version = ix;
var Wt = [],
    es, Ba, $a = !1,
    Ca, xa, uo, ts;

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
            this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : (bt(document, "pointermove", this._handleFallbackAutoScroll), bt(document, "touchmove", this._handleFallbackAutoScroll), bt(document, "mousemove", this._handleFallbackAutoScroll)), xc(), Zs(), ax()
        },
        nulling: function() {
            uo = Ba = es = $a = ts = Ca = xa = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                v = (n.touches ? n.touches[0] : n).clientY,
                S = document.elementFromPoint(f, v);
            if (uo = n, i || this.options.forceAutoScrollFallback || gs || ai || os) {
                Ea(n, this.options, S, i);
                var k = fi(S, !0);
                $a && (!ts || f !== Ca || v !== xa) && (ts && xc(), ts = setInterval(function() {
                    var I = fi(document.elementFromPoint(f, v), !0);
                    I !== k && (k = I, Zs()), Ea(n, a.options, I, i)
                }, 10), Ca = f, xa = v)
            } else {
                if (!this.options.bubbleScroll || fi(S, !0) === jn()) {
                    Zs();
                    return
                }
                Ea(n, this.options, fi(S, !1), !1)
            }
        }
    }, oi(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Zs() {
    Wt.forEach(function(t) {
        clearInterval(t.pid)
    }), Wt = []
}

function xc() {
    clearInterval(ts)
}
var Ea = ah(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                v = e.scrollSensitivity,
                S = e.scrollSpeed,
                k = jn(),
                I = !1,
                D;
            Ba !== n && (Ba = n, Zs(), es = e.scroll, D = e.scrollFn, es === !0 && (es = fi(n, !0)));
            var $ = 0,
                J = es;
            do {
                var ie = J,
                    Y = Jt(ie),
                    re = Y.top,
                    m = Y.bottom,
                    P = Y.left,
                    q = Y.right,
                    ae = Y.width,
                    se = Y.height,
                    ve = void 0,
                    d = void 0,
                    Ee = ie.scrollWidth,
                    Ae = ie.scrollHeight,
                    Me = it(ie),
                    lt = ie.scrollLeft,
                    $e = ie.scrollTop;
                ie === k ? (ve = ae < Ee && (Me.overflowX === "auto" || Me.overflowX === "scroll" || Me.overflowX === "visible"), d = se < Ae && (Me.overflowY === "auto" || Me.overflowY === "scroll" || Me.overflowY === "visible")) : (ve = ae < Ee && (Me.overflowX === "auto" || Me.overflowX === "scroll"), d = se < Ae && (Me.overflowY === "auto" || Me.overflowY === "scroll"));
                var K = ve && (Math.abs(q - a) <= v && lt + ae < Ee) - (Math.abs(P - a) <= v && !!lt),
                    Ge = d && (Math.abs(m - f) <= v && $e + se < Ae) - (Math.abs(re - f) <= v && !!$e);
                if (!Wt[$])
                    for (var H = 0; H <= $; H++) Wt[H] || (Wt[H] = {});
                (Wt[$].vx != K || Wt[$].vy != Ge || Wt[$].el !== ie) && (Wt[$].el = ie, Wt[$].vx = K, Wt[$].vy = Ge, clearInterval(Wt[$].pid), (K != 0 || Ge != 0) && (I = !0, Wt[$].pid = setInterval(function() {
                    i && this.layer === 0 && et.active._onTouchMove(uo);
                    var oe = Wt[this.layer].vy ? Wt[this.layer].vy * S : 0,
                        Te = Wt[this.layer].vx ? Wt[this.layer].vx * S : 0;
                    typeof D == "function" && D.call(et.dragged.parentNode[kn], Te, oe, t, uo, Wt[this.layer].el) !== "continue" || lh(Wt[this.layer].el, Te, oe)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && J !== k && (J = fi(J, !1)));
            $a = I
        }
    }, 30),
    gh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            v = e.dispatchSortableEvent,
            S = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var I = i || f;
            S();
            var D = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                $ = document.elementFromPoint(D.clientX, D.clientY);
            k(), I && !I.el.contains($) && (v("spill"), this.onSpill({
                dragEl: a,
                putSortable: i
            }))
        }
    };

function ml() {}
ml.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var a = wr(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: gh
};
oi(ml, {
    pluginName: "revertOnSpill"
});

function vl() {}
vl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
    },
    drop: gh
};
oi(vl, {
    pluginName: "removeOnSpill"
});
et.mount(new Sx);
et.mount(vl, ml);
const kx = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Tx = zn.extend({
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
    Ax = ht.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: Be.template("<div class='text'></div>"),
        model: new Ue.Model({}),
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
    Ec = ht.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: Ax,
        collection: new Ue.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    Ox = ht.View.extend({
        className: "SorterView",
        template: Be.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new Ue.Model({
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
            this.rankedCollectionView = this.rankedCollectionView || new Ec({
                collection: new Ue.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new Ec({
                className: "sortable-collection unranked",
                collection: new Ue.Collection([])
            }), this.lockInView = this.lockInView || new ll({
                block: !1,
                model: new Ue.Model({
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
    Rx = ht.View.extend({
        className: "Sortable scrollable",
        template: Be.template(kx),
        model: new Tx,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new mi({
                model: new Ue.Model
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
    Dx = zn.extend({
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
    Lx = ht.View.extend({
        className: "UGC scrollable",
        template: Be.template(Ix),
        model: new Dx,
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
            this.client = t.client, this.promptComponent = this.promptComponent || new mi({
                model: new Ue.Model
            }), this.episodesList = this.episodesList || new pi({
                action: "load",
                collection: new Ue.Collection
            }), this.inputComponent = this.inputComponent || new hs({
                model: new Ue.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new hs({
                model: new Ue.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new pi({
                action: "remove",
                collection: new Ue.Collection
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
                const i = Xt.htmlUnescape(n.metadata.title);
                let a = Xt.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = Be.extend({}, n);
                i.text = Xt.htmlUnescape(n.text);
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
            Mt.fire({
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
            Mt.fire({
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
    Mx = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    Px = ht.View.extend({
        className: "RadialView",
        template: Be.template(Mx),
        model: new Ue.Model({
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
            const t = Be.extend({}, this.model.get("vector"));
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
    Vx = `<div id="status-bar" class="health text">\r
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
    Nx = zn.extend({
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
    Bx = ht.View.extend({
        model: new Nx,
        template: Be.template(Vx),
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
                model: new Ue.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = Be.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Pe(window).on("mousemove", this.move.bind(this)), Pe(window).on("mouseup", this.end.bind(this))
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
                }), this.throttledUpdate = Be.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
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
            const t = Pe(".radial"),
                e = Pe("#status-bar").outerHeight() + Pe(".playerTopBar").outerHeight() + Pe("#control-panel").outerHeight() + 10,
                n = Pe(".controller-page").width(),
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
const Us = ht.View.extend({
    client: null,
    template: Be.template($x),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new JC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new Ue.Model({});
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
                return this.setLayout(zC);
            case "Lobby":
                return this.setLayout(WC);
            case "Logo":
                return this.setLayout(so);
            case "MakeSingleChoice":
                return this.setLayout(Xs);
            case "Shoot":
                return this.setLayout(Bx);
            case "Sortable":
                return this.setLayout(Rx);
            case "Camera":
                return this.setLayout(OC);
            case "UGC":
                return this.setLayout(Lx);
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
        t && !Be.isEmpty(t) ? i = {
            ...Be.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...Be.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...Be.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && tn.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: Be.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Bi.add(e.artifact, this.client.appTag), this.didUpdate())
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
        const t = Pe(window).width(),
            e = Pe(window).height();
        Pe(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        tn.remove("roomCode"), tn.remove("reconnect"), kt.show("error", {
            titleText: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        kt.show("error", {
            titleText: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
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
                if (e instanceof ni.EcastEntityNotFound || e instanceof ni.EcastPermissionDenied) console.error(`Couldn't update text entity ${t.textKey}: ${e.message}`);
                else if (e instanceof ni.EcastFilterError) this.currentLayout.onTextFilterError && this.currentLayout.onTextFilterError(e);
                else throw console.error(`Unhandled error updating text entity ${t.textKey}`), e
            } else if (t.objectKey) try {
                await this.client.updateObject(t.objectKey, t.val)
            } catch (e) {
                if (e instanceof ni.EcastEntityNotFound || e instanceof ni.EcastPermissionDenied) console.error(`Couldn't update object entity ${t.objectKey}: ${e.message}`);
                else if (e instanceof ni.EcastFilterError) this.currentLayout.onObjectFilterError && this.currentLayout.onObjectFilterError(e);
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
var mh = {
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
            for (var D = k.length; D--;)
                if (k[D].listener === I) return D;
            return -1
        }

        function v(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(I) {
            var D = this._getEvents(),
                $, J;
            if (I instanceof RegExp) {
                $ = {};
                for (J in D) D.hasOwnProperty(J) && I.test(J) && ($[J] = D[J])
            } else $ = D[I] || (D[I] = []);
            return $
        }, i.flattenListeners = function(I) {
            var D = [],
                $;
            for ($ = 0; $ < I.length; $ += 1) D.push(I[$].listener);
            return D
        }, i.getListenersAsObject = function(I) {
            var D = this.getListeners(I),
                $;
            return D instanceof Array && ($ = {}, $[I] = D), $ || D
        };

        function S(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? S(k.listener) : !1
        }
        i.addListener = function(I, D) {
            if (!S(D)) throw new TypeError("listener must be a function");
            var $ = this.getListenersAsObject(I),
                J = typeof D == "object",
                ie;
            for (ie in $) $.hasOwnProperty(ie) && f($[ie], D) === -1 && $[ie].push(J ? D : {
                listener: D,
                once: !1
            });
            return this
        }, i.on = v("addListener"), i.addOnceListener = function(I, D) {
            return this.addListener(I, {
                listener: D,
                once: !0
            })
        }, i.once = v("addOnceListener"), i.defineEvent = function(I) {
            return this.getListeners(I), this
        }, i.defineEvents = function(I) {
            for (var D = 0; D < I.length; D += 1) this.defineEvent(I[D]);
            return this
        }, i.removeListener = function(I, D) {
            var $ = this.getListenersAsObject(I),
                J, ie;
            for (ie in $) $.hasOwnProperty(ie) && (J = f($[ie], D), J !== -1 && $[ie].splice(J, 1));
            return this
        }, i.off = v("removeListener"), i.addListeners = function(I, D) {
            return this.manipulateListeners(!1, I, D)
        }, i.removeListeners = function(I, D) {
            return this.manipulateListeners(!0, I, D)
        }, i.manipulateListeners = function(I, D, $) {
            var J, ie, Y = I ? this.removeListener : this.addListener,
                re = I ? this.removeListeners : this.addListeners;
            if (typeof D == "object" && !(D instanceof RegExp))
                for (J in D) D.hasOwnProperty(J) && (ie = D[J]) && (typeof ie == "function" ? Y.call(this, J, ie) : re.call(this, J, ie));
            else
                for (J = $.length; J--;) Y.call(this, D, $[J]);
            return this
        }, i.removeEvent = function(I) {
            var D = typeof I,
                $ = this._getEvents(),
                J;
            if (D === "string") delete $[I];
            else if (I instanceof RegExp)
                for (J in $) $.hasOwnProperty(J) && I.test(J) && delete $[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = v("removeEvent"), i.emitEvent = function(I, D) {
            var $ = this.getListenersAsObject(I),
                J, ie, Y, re, m;
            for (re in $)
                if ($.hasOwnProperty(re))
                    for (J = $[re].slice(0), Y = 0; Y < J.length; Y++) ie = J[Y], ie.once === !0 && this.removeListener(I, ie.listener), m = ie.listener.apply(this, D || []), m === this._getOnceReturnValue() && this.removeListener(I, ie.listener);
            return this
        }, i.trigger = v("emitEvent"), i.emit = function(I) {
            var D = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(I, D)
        }, i.setOnceReturnValue = function(I) {
            return this._onceReturnValue = I, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = a, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : yt || {})
})(mh);
const Fx = mh.exports;
class jx extends Fx {
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
            lc(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const v = f;
        i === "room" ? this.emit("client:entityDidChange", i, v) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", v) : i === "bc:room" ? this.emit("client:entityDidChange", "room", v) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", v) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", v) : lc(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            a = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, a) : i === "player" ? this.emit("client:entityDidChange", "player", a) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", a) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, a) : i === "bc:room" ? this.emit("client:entityDidChange", "room", a) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", a) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", a) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onSocketClose(n) {
        n instanceof ni.EcastServerError || n.code === 1005 || n.code === 1e3 ? this.emit("client:roomWasDestroyed") : this.emit("client:disconnected"), this.disconnect(), this.code = null
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
                const v = (f = (a = this.host) == null ? void 0 : a.id) != null ? f : "1";
                await this.wsClient.mail(v, i)
            } else await this.wsClient.send(n, i)
        } catch (v) {
            console.error(v)
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
        caret: function(v, S) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof v == "number" ? (S = typeof S == "number" ? S : v, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(v, S) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", S), k.moveStart("character", v), k.select())
            })) : (this[0].setSelectionRange ? (v = this[0].selectionStart, S = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), v = 0 - k.duplicate().moveStart("character", -1e5), S = v + k.text.length), {
                begin: v,
                end: S
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(v, S) {
            var k, I, D, $, J, ie, Y, re;
            if (!v && this.length > 0) {
                k = t(this[0]);
                var m = k.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return S = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, S), I = t.mask.definitions, D = [], $ = Y = v.length, J = null, t.each(v.split(""), function(P, q) {
                q == "?" ? (Y--, $ = P) : I[q] ? (D.push(new RegExp(I[q])), J === null && (J = D.length - 1), $ > P && (ie = D.length - 1)) : D.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (S.completed) {
                        for (var ye = J; ie >= ye; ye++)
                            if (D[ye] && oe[ye] === q(ye)) return;
                        S.completed.call(H)
                    }
                }

                function q(ye) {
                    return S.placeholder.charAt(ye < S.placeholder.length ? ye : 0)
                }

                function ae(ye) {
                    for (; ++ye < Y && !D[ye];);
                    return ye
                }

                function se(ye) {
                    for (; --ye >= 0 && !D[ye];);
                    return ye
                }

                function ve(ye, ue) {
                    var _e, ke;
                    if (!(0 > ye)) {
                        for (_e = ye, ke = ae(ue); Y > _e; _e++)
                            if (D[_e]) {
                                if (!(Y > ke && D[_e].test(oe[ke]))) break;
                                oe[_e] = oe[ke], oe[ke] = q(ke), ke = ae(ke)
                            } K(), H.caret(Math.max(J, ye))
                    }
                }

                function d(ye) {
                    var ue, _e, ke, Fe;
                    for (ue = ye, _e = q(ye); Y > ue; ue++)
                        if (D[ue]) {
                            if (ke = ae(ue), Fe = oe[ue], oe[ue] = _e, !(Y > ke && D[ke].test(Fe))) break;
                            _e = Fe
                        }
                }

                function Ee() {
                    var ye = H.val(),
                        ue = H.caret();
                    if (re && re.length && re.length > ye.length) {
                        for (Ge(!0); ue.begin > 0 && !D[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < J && !D[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    } else {
                        for (Ge(!0); ue.begin < Y && !D[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    }
                    P()
                }

                function Ae() {
                    Ge(), H.val() != we && H.change()
                }

                function Me(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, Fe = ye.which || ye.keyCode;
                        re = H.val(), Fe === 8 || Fe === 46 || i && Fe === 127 ? (ue = H.caret(), _e = ue.begin, ke = ue.end, ke - _e === 0 && (_e = Fe !== 46 ? se(_e) : ke = ae(_e - 1), ke = Fe === 46 ? ae(ke) : ke), $e(_e, ke), ve(_e, ke - 1), ye.preventDefault()) : Fe === 13 ? Ae.call(this, ye) : Fe === 27 && (H.val(we), H.caret(0, Ge()), ye.preventDefault())
                    }
                }

                function lt(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, Fe = ye.which || ye.keyCode,
                            Qe = H.caret();
                        if (!(ye.ctrlKey || ye.altKey || ye.metaKey || 32 > Fe) && Fe && Fe !== 13) {
                            if (Qe.end - Qe.begin !== 0 && ($e(Qe.begin, Qe.end), ve(Qe.begin, Qe.end - 1)), ue = ae(Qe.begin - 1), Y > ue && (_e = String.fromCharCode(Fe), D[ue].test(_e))) {
                                if (d(ue), oe[ue] = _e, K(), ke = ae(ue), f) {
                                    var ft = function() {
                                        t.proxy(t.fn.caret, H, ke)()
                                    };
                                    setTimeout(ft, 0)
                                } else H.caret(ke);
                                Qe.begin <= ie && P()
                            }
                            ye.preventDefault()
                        }
                    }
                }

                function $e(ye, ue) {
                    var _e;
                    for (_e = ye; ue > _e && Y > _e; _e++) D[_e] && (oe[_e] = q(_e))
                }

                function K() {
                    H.val(oe.join(""))
                }

                function Ge(ye) {
                    var ue, _e, ke, Fe = H.val(),
                        Qe = -1;
                    for (ue = 0, ke = 0; Y > ue; ue++)
                        if (D[ue]) {
                            for (oe[ue] = q(ue); ke++ < Fe.length;)
                                if (_e = Fe.charAt(ke - 1), D[ue].test(_e)) {
                                    oe[ue] = _e, Qe = ue;
                                    break
                                } if (ke > Fe.length) {
                                $e(ue + 1, Y);
                                break
                            }
                        } else oe[ue] === Fe.charAt(ke) && ke++, $ > ue && (Qe = ue);
                    return ye ? K() : $ > Qe + 1 ? S.autoclear || oe.join("") === Te ? (H.val() && H.val(""), $e(0, Y)) : K() : (K(), H.val(H.val().substring(0, Qe + 1))), $ ? ue : J
                }
                var H = t(this),
                    oe = t.map(v.split(""), function(ye, ue) {
                        return ye != "?" ? I[ye] ? q(ue) : ye : void 0
                    }),
                    Te = oe.join(""),
                    we = H.val();
                H.data(t.mask.dataName, function() {
                    return t.map(oe, function(ye, ue) {
                        return D[ue] && ye != q(ue) ? ye : null
                    }).join("")
                }), H.one("unmask", function() {
                    H.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!H.prop("readonly")) {
                        clearTimeout(e);
                        var ye;
                        we = H.val(), ye = Ge(), e = setTimeout(function() {
                            H.get(0) === document.activeElement && (K(), ye == v.replace("?", "").length ? H.caret(0, ye) : H.caret(ye))
                        }, 10)
                    }
                }).on("blur.mask", Ae).on("keydown.mask", Me).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    H.prop("readonly") || setTimeout(function() {
                        var ye = Ge(!0);
                        H.caret(ye), P()
                    }, 0)
                }), a && f && H.off("input.mask").on("input.mask", Ee), Ge()
            })
        }
    })
});
window.$ = Pe;
window.jQuery = Pe;
const zx = ht.View.extend({
        className: "app-root",
        template: Be.template(Gx),
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
    Hx = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Di.WSClient(n), e.connect()),
            mount: n => {
                const i = new jx(e, n);
                let a = new ht.Application({
                    region: "#app",
                    onStart() {
                        const f = new zx;
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
    Ux = `<div class="playerIcon chatAvatars unread pull-left"><div class="blockedIcon"></div></div>
<button class="dateButton btn pull-right playerColor">DATE</button>
<div class="pull-right playerColor rightArrow">></div>
<div class="playerName playerColor">name</div>
<div class="lastMessage">lastMessage</div>
`,
    ri = "main/pp4/monstermingle/assets/edb79482.svg",
    qx = ht.View.extend({
        template: Be.template(Ux),
        className: "chatSummaryDetail jbg-multiplier-clickable",
        events: {
            "click .dateButton": "clickDate",
            click: "clickSummary"
        },
        attributes: {
            role: "button",
            tabindex: 0
        },
        bindings: {
            ":el": {
                attributes: [{
                    name: "aria-label",
                    observe: ["unread", "contact"],
                    onGet(t) {
                        const e = t[0],
                            n = t[1];
                        let i = "";
                        return i += `${n.name}`, n.monster.name !== "Human" && (i += ` the ${n.monster.name} `), e && (i += ` has ${e} unread`), i
                    }
                }]
            },
            ".playerName": {
                observe: "contact",
                onGet(t) {
                    return t.name
                }
            },
            ".playerColor": {
                attributes: [{
                    name: "style",
                    observe: "contact",
                    onGet(t) {
                        return `color: ${t.color.medium};`
                    }
                }]
            },
            ".playerIcon": {
                attributes: [{
                    name: "class",
                    observe: "contact",
                    onGet(t) {
                        return t.monster.icon
                    }
                }, {
                    name: "class",
                    observe: "unread",
                    onGet(t) {
                        return parseInt(t, 10) > 9 && (t = 9), `unread-${t}`
                    }
                }, {
                    name: "style",
                    observe: "history",
                    onGet(t) {
                        let e = "";
                        const n = this.model.attributes.contact.color;
                        return e += `background-color:${n.dark};`, t.length > 0 ? (e += `-webkit-border-image:${ri.replace("FILL_COLOR","%23000000")} 3 3;`, e += `border-image:${ri.replace("FILL_COLOR",n.light.replace("#","%23"))} 3 3;`) : (e += `-webkit-border-image:${ri.replace("FILL_COLOR","%23000000")} 3 3;`, e += `border-image:${ri.replace("FILL_COLOR","%23000000")} 3 3;`), e
                    }
                }]
            },
            ".blockedIcon": {
                attributes: [{
                    name: "class",
                    observe: "contact",
                    onGet(t) {
                        return t.blocked ? "blocked" : ""
                    }
                }]
            },
            ".lastMessage": {
                observe: "history",
                onGet(t) {
                    return t.length > 0 ? Xt.htmlUnescape(t[t.length - 1].text) : ""
                }
            },
            ".dateButton": {
                attributes: [{
                    name: "class",
                    observe: "mode",
                    onGet(t) {
                        return t !== "date" ? "hidden" : ""
                    }
                }, {
                    name: "disabled",
                    observe: "disabled"
                }]
            }
        },
        initialize() {
            this.listenTo(this.model, "change", this.onChange)
        },
        render() {
            this.model.set("mode", this.getOption("mode"));
            const t = {
                contact: this.model.attributes.contact || {},
                history: this.model.attributes.history || []
            };
            this.$el.html(this.template(t)), this.stickit()
        },
        clickAvatar() {
            return this.trigger("chat:avatar", this.model), !1
        },
        clickSummary() {
            return this.trigger("chat:detail", this.model), !1
        },
        clickDate() {
            return this.trigger("chat:date", this.model), !1
        },
        onChange() {}
    }),
    Wx = ht.CollectionView.extend({
        tagName: "div",
        className: "summaryCollection container",
        childView: qx,
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions(t, e) {
            return {
                mode: this.getOption("mode"),
                choice: e
            }
        }
    }),
    Xx = `<div class="row">
    <div class="col-xs-2">
        <div class="playerIcon playerColorBackground chatAvatars"></div>
    </div>
    <div class="col-xs-8 text-center">
        <h4 class="chatMode">chatMode</h4>
        <h4><small class="chatDescription">chatDescription</small></h4>
    </div>
    <div class="col-xs-2">
        <button class="playerInfo playerColorBackground btn pull-right">i</button>
    </div>
</div>
`,
    Yx = ht.View.extend({
        className: "container chatSummaryTop",
        template: Be.template(Xx),
        events: {
            "click .chatBack": "back",
            "click .playerInfo": "info",
            "click .playerIcon": "info"
        },
        bindings: {
            ".playerColorBackground": {
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet(t) {
                        return t && t.color ? `background-color: ${t.color.dark};` : ""
                    }
                }]
            },
            ".chatMode": "mode",
            ".chatDescription": "description",
            ".playerIcon": {
                attributes: [{
                    name: "class",
                    observe: "player",
                    onGet(t) {
                        return t ? t.monster.icon : ""
                    }
                }]
            },
            ".playerClass": {
                observe: "player",
                onGet(t) {
                    return t.monster.name
                },
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet(t) {
                        return `color: ${t.color.medium};`
                    }
                }]
            }
        },
        initialize() {
            this.listenTo(this.model, "change", this.update)
        },
        update() {},
        onRender() {
            this.$el.html(this.template), this.stickit()
        },
        back() {
            this.trigger("chat:back", this.model)
        },
        info() {
            this.trigger("chat:info", this.model)
        }
    }),
    Kx = `<div class="senderIcon chatAvatars"></div>
<div class="chatMessageText">
    <div class="senderNameSpace"><span class="senderName">name</span></div>
    <div class="chatBubble">
        <span class="text">text</span>
    </div>
    <div class="chatMessageDetail"></div>
</div>`,
    Jx = ht.View.extend({
        template: Be.template(Kx),
        className: "chatMessage",
        events: {
            "click .senderIcon": "clickAvatar",
            click: "clickSummary"
        },
        bindings: {
            ":el": {
                classes: {
                    oddGroup: "oddGroup",
                    chatPlayer: "isPlayer"
                },
                attributes: [{
                    name: "style",
                    observe: "backgroundColor",
                    onGet(t) {
                        return t ? `background-color:${t}` : ""
                    }
                }]
            },
            ".text": {
                observe: "text",
                onGet(t) {
                    return Xt.htmlUnescape(t)
                }
            },
            ".chatMessageDetail": "detail",
            ".senderNameSpace": {
                observe: "showName",
                visible(t) {
                    return t === !0
                }
            },
            ".senderName": {
                observe: "sender",
                updateView: !0,
                onGet(t) {
                    return t ? t.name : null
                }
            },
            ".chatBubble": {
                attributes: [{
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        return t ? `background-color: ${t};border-right-color:${t};` : null
                    }
                }]
            },
            ".playerName": {
                observe: "sender",
                onGet(t) {
                    return t.name
                }
            },
            ".senderIcon": {
                attributes: [{
                    name: "class",
                    observe: "sender",
                    onGet(t) {
                        return t && t.monster ? t.monster.icon : ""
                    }
                }, {
                    name: "style",
                    observe: "sender",
                    onGet(t) {
                        if (!t) return null;
                        let e = "";
                        return e += `background-color:${t.color.dark};`, e
                    }
                }]
            },
            ".oddGroup": {}
        },
        render() {
            this.$el.html(this.template()), this.stickit()
        },
        clickAvatar() {
            return this.trigger("chat:avatar", this.model), !1
        },
        clickSummary() {
            return this.trigger("chat:detail", this.model), !1
        }
    }),
    Qx = ht.View.extend({
        className: "hrMessage",
        template: Be.template("<div class='chatHR'><div class='text'></div></div>"),
        bindings: {
            ".text": "text",
            ":el": {
                attributes: [{
                    observe: "backgroundColor",
                    name: "style",
                    onGet(t) {
                        return t ? `background-color:${t}` : ""
                    }
                }]
            },
            ".chatHR": {
                attributes: [{
                    observe: "foregroundColor",
                    name: "style",
                    onGet(t) {
                        return t ? `color:${t};background-color:black;` : ""
                    }
                }]
            }
        },
        onRender() {
            this.$el.html(this.template()), this.stickit()
        }
    }),
    Zx = ht.CollectionView.extend({
        tagName: "div",
        className: "messageCollection",
        childView(t) {
            return t.attributes.type && t.attributes.type === "hr" ? Qx : Jx
        },
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                showPlayerName: this.getOption("showPlayerName"),
                contacts: this.getOption("contacts"),
                player: this.getOption("player")
            }
        }
    }),
    eE = `<div class="row">
    <div class="col-xs-2">
        <button class="chatBack playerColorBackground btn pull-left unread">Chat</button>
    </div>
    <div class="col-xs-8 text-center">
        <div class="playerName">name</div>
        <div><small class="playerClass">class</small></div>
    </div>
    <div class="col-xs-2">
        <button class="playerInfo playerColorBackground btn pull-right">i</button>
    </div>
</div>
`,
    tE = ht.View.extend({
        className: "container chatDetailTop",
        template: Be.template(eE),
        events: {
            "click .chatBack": "back",
            "click .playerInfo": "info"
        },
        bindings: {
            ".playerColorBackground": {
                attributes: [{
                    name: "style",
                    observe: "contact",
                    onGet(t) {
                        return t && t.color ? `background-color: ${t.color.medium};` : ""
                    }
                }]
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "contact",
                    onGet(t) {
                        return `background-color: ${t.color.dark};
                            border-image: ${ri.replace("FILL_COLOR",t.color.dark.replace("#","%23"))} 3 3;`
                    }
                }]
            },
            ".playerName": {
                observe: "contact",
                onGet(t) {
                    return t.name
                },
                attributes: [{
                    name: "class",
                    observe: "className"
                }]
            },
            ".playerIcon": {
                attributes: [{
                    name: "class",
                    observe: "contact",
                    onGet(t) {
                        return t.monster.icon
                    }
                }, {
                    name: "class",
                    observe: "unread",
                    onGet(t) {
                        return parseInt(t, 10) > 9 && (t = 9), `unread-${t}`
                    }
                }, {
                    name: "style",
                    observe: "contact",
                    onGet(t) {
                        return `background-color:${t.color.dark};`
                    }
                }]
            },
            ".playerClass": {
                observe: "contact",
                onGet(t) {
                    return t.monster.name
                },
                attributes: [{
                    name: "style",
                    observe: "contact",
                    onGet(t) {
                        return `color: ${t.color.medium};`
                    }
                }]
            },
            ".chatBack": {
                attributes: [{
                    name: "class",
                    observe: "unread",
                    onGet(t) {
                        return parseInt(t, 10) > 9 && (t = 9), `unread-${t}`
                    }
                }]
            }
        },
        initialize() {
            this.listenTo(this.model, "change", this.update)
        },
        update() {},
        onRender() {
            this.$el.html(this.template), this.stickit()
        },
        back() {
            this.trigger("chat:back", this.model)
        },
        info() {
            this.trigger("chat:info", this.model)
        }
    }),
    nE = `<div class="titleBar">
    <div class="playerName">playername</div>
    <div class="playerInDisguise">(in disguise)</div>
</div>
<div class="profileContent">
    <div class="closeButton"></div>
    <div class="blockedMessage">You are not receiving messages from Kimberly</div>
    <div class="monsterIcon chatAvatars"><div class="blockedIcon"></div></div>
    <div class="monsterClass"><span class="monsterClassIntro">monsterClassIntro</span><br><span class="monsterClassName">monsterClassName</span></div>
    <div class="monsterPower">
        <span class="monsterPowerIntro">Powers:</span>
        <p class="monsterPowerDescription">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laureet dolore magna aliquam</p>
    </div>
    <button class='startChattingButton btn'>Start Chatting!</button>
    <button class="blockButton btn">Block</button>
</div>`,
    yl = ht.View.extend({
        className: "monsterProfile",
        events: {
            "click .blockButton": "blockPlayer",
            "click .closeButton": "closeProfile",
            "click .startChattingButton": "closeProfile"
        },
        bindings: {
            ".titleBar": {
                attributes: [{
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        return `background-color: ${t.dark};border-image:${ri.replace("FILL_COLOR",t.dark.replace("#","%23"))} 3 3;`
                    }
                }]
            },
            ".playerName": "name",
            ".playerInDisguise": "inDisguise",
            ".blockedMessage": {
                observe: "blocked",
                onGet(t) {
                    return t === !0 ? `You are not receiving messages from ${this.model.attributes.name}` : ""
                }
            },
            ".monsterClassIntro": {
                observe: ["self", "monster"],
                onGet(t) {
                    const e = "aeiouAEIOU";
                    let n = "a";
                    return e.indexOf(t[1].name[0]) !== -1 && (n = "an"), t[0] === !0 ? `You are ${n}` : `This player is ${n}`
                }
            },
            ".monsterClassName": {
                observe: "monster",
                onGet(t) {
                    return t ? t.name : "(????)"
                }
            },
            ".monsterPower": {
                attributes: [{
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        return `background-color: ${t.dark};border-image:${ri.replace("FILL_COLOR",t.dark.replace("#","%23"))} 3 3;`
                    }
                }]
            },
            ".monsterPowerIntro": {
                attributes: [{
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        return `color: ${t.medium};`
                    }
                }]
            },
            ".monsterPowerDescription": {
                updateMethod: "html",
                observe: "monster",
                onGet(t) {
                    return t.description
                }
            },
            ".monsterIcon": {
                attributes: [{
                    name: "class",
                    observe: "monster",
                    onGet(t) {
                        return t.icon
                    }
                }, {
                    name: "style",
                    observe: "color",
                    onGet(t) {
                        return `background-color:${t.dark};`
                    }
                }]
            },
            ".blockedIcon": {
                attributes: [{
                    name: "class",
                    observe: "blocked",
                    onGet(t) {
                        return t === !0 ? "blocked" : ""
                    }
                }]
            },
            ".blockButton": {
                observe: "blocked",
                onGet(t) {
                    return t === !0 ? "Unblock" : "Block"
                },
                attributes: [{
                    name: "style",
                    observe: "self",
                    onGet(t) {
                        return t === !0 ? "display:none;" : ""
                    }
                }, {
                    name: "class",
                    observe: "playerName",
                    onGet(t) {
                        return t === "AUDIENCE" ? "hidden" : ""
                    }
                }]
            },
            ".startChattingButton": {
                attributes: [{
                    name: "class",
                    observe: "startChatting",
                    onGet(t) {
                        return t ? "visible" : ""
                    }
                }]
            }
        },
        initialize() {
            this.template = Be.template(nE), this.render()
        },
        render() {
            return this.$el.html(this.template(this.model.attributes)), this.stickit(), this
        },
        closeProfile() {
            Mt.close()
        },
        blockPlayer() {
            this.trigger("profile:block", this.model)
        }
    }),
    vh = yl.extend({
        className: "monsterProfile",
        events: {
            "click .closeButton": "closeProfile",
            "click .startChattingButton": "closeProfile"
        },
        bindings: {
            ".titleBar": {
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet(t) {
                        return t = t.color, `background-color: ${t.dark};border-image:${ri.replace("FILL_COLOR",t.dark.replace("#","%23"))} 3 3;`
                    }
                }]
            },
            ".playerName": "title",
            ".monsterPowerDescription": {
                observe: "html",
                updateMethod: "html",
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet() {
                        return "font-size:26px"
                    }
                }]
            },
            ".monsterPower": {
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet(t) {
                        return t ? (t = t.color, `background-color: ${t.dark};border-image:${ri.replace("FILL_COLOR",t.dark.replace("#","%23"))} 3 3;`) : ""
                    }
                }]
            },
            ".profileContent": {
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet(t) {
                        return !t || !t.color ? "" : `background-color:${t.color.medium};`
                    }
                }]
            },
            ".startChattingButton": {
                observe: "title",
                onGet() {
                    return "OK"
                },
                attributes: [{
                    name: "style",
                    observe: "title",
                    onGet() {
                        return "visibility:visible;"
                    }
                }]
            },
            ".playerInDisguise": {
                visible() {
                    return !1
                }
            },
            ".monsterIcon": {
                visible() {
                    return !1
                }
            },
            ".blockedMessage": {
                visible() {
                    return !1
                }
            },
            ".monsterPowerIntro": {
                visible() {
                    return !1
                }
            },
            ".monsterClassIntro": {
                visible() {
                    return !1
                }
            },
            ".monsterClassName": {
                visible() {
                    return !1
                }
            },
            ".blockButton": {
                visible() {
                    return !1
                }
            }
        },
        render() {
            return this.$el.html(this.template(this.model.attributes)), this.stickit(), this
        }
    }),
    iE = Xs.extend({
        className: "AudienceChoice",
        bindings: Be.extend(Xs.prototype.bindings, {
            ".playerTopBar": {
                observe: "username",
                visible: !0
            },
            ".chosen": {
                observe: "chosen",
                updateMethod: "html",
                onGet(t) {
                    return t || null
                }
            },
            ".choices": {
                observe: "chosen",
                visible(t) {
                    return !t
                }
            },
            ":el": {
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet(t) {
                        return !t || !t.color ? null : `background-color:${t.color.dark}`
                    }
                }]
            }
        }),
        initialize(t) {
            Xs.prototype.initialize.apply(this, [t]), this.stopListening(this.model)
        },
        update() {
            this.promptComponent.model.set("html", this.model.attributes.prompt), this.promptComponent.model.set("className", ""), this.choices = this.model.attributes.choices, this.choices && this.choices.length > 0 && typeof this.choices[0] == "string" && (this.choices = Be.map(this.model.attributes.choices, function(e) {
                return typeof e == "string" && (e = {
                    html: e
                }), e.censorable = this.blob.canCensor, e.action = e.action || "choose", e
            })), this.choicesList.collection.set(this.choices)
        },
        events: {
            "click .choices button": "buttonClick"
        },
        onChildviewChildviewButtonChoose() {},
        onChildviewChildviewButtonCensor() {},
        onChildviewChildviewButtonSubmit() {},
        buttonClick(t) {
            const e = Pe(t.currentTarget),
                n = e.data("index");
            e.data("action"), this.trigger("audience:choice", n), this.model.set("chosen", this.model.attributes.choices[n].text)
        }
    }),
    rE = `<div id="top" class="double-nav-top"></div>
<div id="middle" class="double-nav-middle">
    <div id="summary" class="double-nav-detail summary"></div>
    <div id="detail" class="double-nav-detail detail"></div>
</div>
<div id="bottom" class="double-nav-bottom"></div>`,
    sE = "main/pp4/monstermingle/assets/a16e5118.wav",
    oE = t => t.replace(/[\n]/gi, ""),
    aE = ht.View.extend({
        model: new Ue.Model({}),
        template: Be.template(rE),
        sessionModule: "vote",
        sessionName: " Vote",
        sessionMessage: {
            type: "vote"
        },
        client: null,
        router: new ht.AppRouter,
        className() {
            return this.options.client.isRole("audience") ? "double-nav monstermingle chat audience" : "double-nav monstermingle chat"
        },
        regions: {
            top: "#top",
            detail: "#detail",
            summary: "#summary",
            bottom: "#bottom"
        },
        initialize(t) {
            this.client = t.client, this.pingSound = !1;
            try {
                this.pingSound = new Audio(sE)
            } catch (e) {
                console.error("Error loading sound", e)
            }
            this.mode = null, this.summaryTopComponent = new Yx({
                model: new Ue.Model
            }), this.summaryCollection = new Ue.Collection, this.summaryList = new Wx({
                collection: this.summaryCollection,
                mode: "default"
            }), this.bottomComponent = new mi({
                model: new Ue.Model
            }), this.detailIndex = null, this.detailContactId = null, this.chatDetailComponent = new tE({
                model: new Ue.Model
            }), this.chatDetailCollection = new Ue.Collection, this.chatDetailList = new Zx({
                collection: this.chatDetailCollection,
                showPlayerName: this.client.isRole("audience")
            }), this.chatDetailInput = new hs({
                preventAutosize: !0,
                model: new Ue.Model({
                    placeholder: "send a message",
                    inlineSubmit: !0,
                    maxLength: 50
                })
            }), this.chatDateButton = new ll({
                model: new Ue.Model({
                    text: "date",
                    action: "date"
                })
            }), this.chatAudienceChoice = new iE({
                model: new Ue.Model
            }), this.listenTo(this.model, "change", this.update, this), this.listenTo(this.router, "gameRoute", this.route)
        },
        route(t) {
            t.length === 0 || t[0] === "summary" ? this.showChatSummary() : this.showChatDetail(t[0])
        },
        async update() {
            const t = this;
            if (this.player = this.model.get("player"), this.chat = this.model.get("chat") || {}, this.model.get("chosenDateUserId") && (this.chat.mode = "browse"), this.player && (this.summaryTopComponent.model.set("player", this.player), this.chat.mode === "chat" ? (this.summaryTopComponent.model.set("mode", "TIME TO CHAT"), this.summaryTopComponent.model.set("description", "Click on a player to message them")) : this.chat.mode === "date" ? (this.summaryTopComponent.model.set("mode", "TIME TO CHOOSE"), this.summaryTopComponent.model.set("description", "Who do you want to date?")) : this.chat.mode === "browse" && this.model.get("chosenDateUserId") !== null && (this.summaryTopComponent.model.set("mode", "DATE CHOSEN"), this.summaryTopComponent.model.set("description", "Wait for others to choose"))), this.chat) {
                let e;
                if (this.client.isRole("player")) {
                    if (e = !1, this.model.changed.alerts && (this.showAlerts(this.model.get("alerts")), kt.vibrate()), this.oldUnread < this.chat.unread && (kt.vibrate(), this.playSound()), this.chatDetailComponent.model.set("unread", this.chat.unread), this.oldUnread = this.chat.unread, this.detailContactId !== null) {
                        const n = Be.find(this.chat.conversations, i => i.contact.id === t.detailContactId);
                        if (e = !1, n && (this.chatDetailComponent.model.set("contact", n.contact), this.chatDetailInput.model.set("hidden", this.chat.messagesAvailableToSend === 0), this.fullHistory = Be.map(n.history, i => (i.sender = Be.findWhere(this.allContacts, {
                                id: i.senderId
                            }), i.isPlayer = this.player && this.player.id === i.senderId, i.color = i.isPlayer ? "white" : i.sender.color.light, i)), this.fullHistory.length > this.chatDetailCollection.length && (e = !0), this.chatDetailCollection.set(this.fullHistory)), e) {
                            const i = this.getRegion("detail");
                            i && i.$el.scrollTop(i.$el[0].scrollHeight)
                        }
                    }
                    this.summaryCollection.set(this.chat.conversations), this.chat.mode === "chat" ? (this.bottomComponent.model.set("text", `You have ${this.chat.messagesAvailableToSend}${this.chat.messagesAvailableToSend===1?" message ":" messages "} left to send`), this.bottomComponent.model.set("background", this.player.color.medium)) : this.chat.mode === "date" ? this.bottomComponent.model.set("text", "Click DATE button on this screen, or within a conversation if still reading.") : this.bottomComponent.model.set("text", ""), this.chat.mode && this.mode !== this.chat.mode && (!this.detailContactId && this.getRegion("summary") && this.getRegion("summary").currentView === this.summaryList ? this.showChatSummary() : this.detailContactId && this.showChatDetail(this.detailContactId)), this.mode = this.chat.mode, this.chat.showProfile && this.showPlayerProfile(this.player, !0)
                } else if (this.client.isRole("audience")) {
                    if (this.model.changed.alerts && this.showAlerts(this.model.get("alerts")), this.summaryTopComponent.model.set("player", this.player), this.summaryTopComponent.model.set("mode", "AUDIENCE"), this.summaryTopComponent.model.set("description", "Vote what to say next"), e = this.chat && this.chat.history.length > this.chatDetailCollection.length, this.chat && this.chat.history) {
                        this.allContacts = Be.union([this.player], this.chat.contacts);
                        let n = 0;
                        this.fullHistory = Be.map(this.chat.history, i => (i.sender = Be.findWhere(this.allContacts, {
                            id: i.senderId
                        }), i.isPlayer = this.player && this.player.id === i.senderId, i.showName = !i.isPlayer, i.color = i.isPlayer ? this.player.color.light : "white", n % 2 === 0 && (i.backgroundColor = `rgba(${Xt.hexToRgb(this.player.color.dark)},0.4)`), i.type === "hr" && (i.foregroundColor = this.player.color.light), i.isPlayer && (n += 1), i)), this.chatDetailCollection.set(this.fullHistory)
                    }
                    if (this.chat && this.chat.contacts && (this.chatDetailList.options.contacts = this.chat.contacts), this.chat && this.player && (this.chatDetailList.options.player = this.player), this.chat && this.chat.choice) {
                        const n = this.getRegion("bottom");
                        if (n && n.$el.show(), this.chat.mode === "date") {
                            const i = Pe.extend(!0, {}, this.chat.choice.choices);
                            this.chatAudienceChoice.model.set("choices", Be.map(i, a => {
                                const f = Be.findWhere(this.chat.contacts, {
                                    id: a.id
                                });
                                return f && (a.html = `<div class='senderIcon chatAvatars ${f.monster.icon}' style='background-color:${f.color.dark}'></div><span>${a.text}</span>`), a
                            }))
                        } else this.chatAudienceChoice.model.set("choices", this.chat.choice.choices);
                        this.chatAudienceChoice.model.set("prompt", this.chat.choice.prompt), this.chatAudienceChoice.model.set("player", this.player), this.chatAudienceChoice.update()
                    } else {
                        const n = this.getRegion("bottom");
                        n && n.$el.hide()
                    }
                    if (this.player && this.$el.find(".detail").css("background", this.player.color.medium), this.chat && this.chat.mode && this.mode !== this.chat.mode && (this.stopListening(this.chatAudienceChoice), this.stopListening(this.chatDetailList), this.stopListening(this.summaryTopComponent), this.listenTo(this.chatAudienceChoice, "audience:choice", this.submitAudienceVote), this.listenTo(this.chatDetailList, "childview:chat:avatar", this.messageSender), this.listenTo(this.summaryTopComponent, "chat:info", this.infoButton), this.mode = this.chat.mode), this.chat && this.chat.choice && this.chat.choice.id && (this.choiceId !== this.chat.choice.id && this.chatAudienceChoice.model.set("chosen", void 0), this.choiceId = this.chat.choice.id), e) {
                        const n = this.getRegion("detail").$el;
                        n[0] && n.scrollTop(n[0].scrollHeight)
                    }
                    this.chat.showProfile && this.showPlayerProfile(this.player, !0)
                }
            }
        },
        onRender() {
            this.client.isRole("player") ? this.showChatSummary() : (this.showChildView("top", this.summaryTopComponent), this.showChildView("detail", this.chatDetailList), this.showChildView("bottom", this.chatAudienceChoice))
        },
        onAttach() {
            this.update()
        },
        async playSound() {
            if (!!this.pingSound) try {
                this.pingSound.volume = .5, await this.pingSound.play()
            } catch {
                console.warn("Unable to play sound")
            }
        },
        summaryClicked(t) {
            this.showChatDetail(t.get("contact").id)
        },
        showChatDetail(t) {
            const e = this.summaryCollection.find(a => a.attributes.contact.id === t),
                n = this.model.get("player");
            if (!e) return;
            this.detailContactId !== t && (this.chatDetailList.contacts = [e.get("contact")], this.chatDetailList.player = n), this.detailContactId = t, this.chatDetailComponent.model.set("contact", e.get("contact")), this.allContacts = Be.union([n], [e.get("contact")]), this.fullHistory = Be.map(e.get("history"), a => (a.sender = Be.findWhere(this.allContacts, {
                id: a.senderId
            }), a.isPlayer = n && n.id === a.senderId, a.color = a.isPlayer ? "white" : a.sender.color.light, a)), this.chatDetailCollection.set(this.fullHistory), this.chatDateButton.model.set("text", `DATE ${e.get("contact").name}`), this.chatDateButton.model.set("className", "dateButton"), this.chatDateButton.model.set("disabled", e.get("disabled")), this.getRegion("top").detachView(), this.getRegion("detail").detachView(), this.getRegion("bottom").detachView(), this.showChildView("top", this.chatDetailComponent), this.showChildView("detail", this.chatDetailList), this.chat.mode === "date" ? this.showChildView("bottom", this.chatDateButton) : this.chat.mode === "chat" && this.showChildView("bottom", this.chatDetailInput), this.getRegion("detail").$el.css("background-color", e.get("contact").color.medium), this.getRegion("bottom").$el.css("background-color", e.get("contact").color.dark), this.stopListening(this.chatDetailComponent), this.stopListening(this.chatDetailInput), this.stopListening(this.chatDetailList), this.stopListening(this.chatDateButton), this.listenTo(this.chatDetailComponent, "chat:back", this.showChatSummary), this.listenTo(this.chatDetailComponent, "chat:info", this.infoButton), this.listenTo(this.chatDetailInput, "input:submit", this.sendText), this.listenTo(this.chatDetailInput, "input:enter", this.sendText), this.listenTo(this.chatDetailList, "childview:chat:avatar", this.messageSender), this.listenTo(this.chatDateButton, "button:date", this.chooseDateDetail);
            const i = this.getRegion("detail").$el;
            i[0] && i.scrollTop(i[0].scrollHeight), this.getRegion("detail").$el.removeClass("off-right"), this.getRegion("summary").$el.addClass("off-left"), this.client.isRole("player") && (this.triggerMethod("client:message", {
                action: "MarkAsRead",
                contactUserId: e.get("contact").id
            }), this.router.navigate(`g/${t}`, {
                trigger: !1
            }))
        },
        showChatSummary() {
            this.detailContactId = null, this.summaryList.options.mode = this.chat ? this.chat.mode : "browse", this.summaryList.render(), this.getRegion("top").detachView(), this.getRegion("bottom").detachView(), this.showChildView("top", this.summaryTopComponent), this.showChildView("summary", this.summaryList), this.showChildView("detail", this.chatDetailList), this.getRegion("detail").$el.addClass("off-right"), this.getRegion("summary").$el.removeClass("off-left"), this.player && this.$el.find(".double-nav-bottom").css("background-color", this.player.color.medium), this.showChildView("bottom", this.bottomComponent), this.stopListening(this.summaryTopComponent), this.stopListening(this.summaryList), this.listenTo(this.summaryTopComponent, "chat:info", this.infoButton), this.listenTo(this.summaryList, "childview:chat:detail", this.summaryClicked), this.listenTo(this.summaryList, "childview:chat:date", this.chooseDate), this.client.isRole("player") && (this.triggerMethod("client:message", {
                action: "LeftChatDetail"
            }), this.router.navigate("g/summary", {
                trigger: !1
            }))
        },
        chooseDateDetail() {
            const t = this,
                e = this.summaryCollection.find(n => n.attributes.contact.id === t.detailContactId);
            this.chooseDate(e)
        },
        chooseDate(t) {
            this.triggerMethod("client:message", {
                action: "ChooseDate",
                contactUserId: t.get("contact").id
            })
        },
        sendText() {
            const t = this,
                e = oE(this.chatDetailInput.getValue()),
                n = this.summaryCollection.find(i => i.attributes.contact.id === t.detailContactId);
            e.trim().length > 0 && (this.triggerMethod("client:message", {
                action: "SendMessage",
                text: e,
                recipientUserId: n.attributes.contact.id
            }), this.chatDetailInput.clearInput())
        },
        showAlerts(t) {
            const e = this.model.get("player");
            t.map(n => {
                const i = this;
                return n.allowOutsideClick = n.customClass && n.customClass.indexOf("cover") === -1, n.customClass += " monstermingle playerProfile alertDialog", n.showConfirmButton = !1, n.background = e.color.medium, n.padding = 0, n.didOpen = function() {
                    n.player = e, i.profileView = new vh({
                        el: ".monstermingle.playerProfile",
                        model: new Ue.Model(n)
                    })
                }, n
            }), Mt.close(), t.forEach(async n => {
                await Mt.fire(n)
            })
        },
        infoButton(t) {
            const e = t.attributes.player || t.attributes.contact;
            this.showPlayerProfile(e, e === t.attributes.player)
        },
        showPlayerProfile(t, e) {
            const n = this;
            t.self = e, Mt.close(), Mt.fire({
                html: "player",
                customClass: {
                    popup: "monstermingle playerProfile"
                },
                padding: 0,
                background: t.color.medium,
                showConfirmButton: !1,
                didOpen() {
                    n.profileView = new yl({
                        el: ".monstermingle.playerProfile .swal2-html-container",
                        model: new Ue.Model(t)
                    }), n.profileView.model.set("startChatting", n.model.get("chat").showProfile), n.profileView.model.set("playerName", n.model.get("player").name), n.listenTo(n.profileView, "profile:block", n.blockPlayer), n.listenTo(n.profileView, "profile:close", n.closeProfile)
                }
            })
        },
        blockPlayer(t) {
            const e = t.get("blocked") ? "Unblock" : "Block";
            this.triggerMethod("client:message", {
                action: e,
                playerId: t.get("id")
            }), Mt.close(), this.showChatSummary()
        },
        closeProfile() {
            Mt.close()
        },
        messageSender(t) {
            this.showPlayerProfile(t.get("sender"), t.get("isPlayer"))
        },
        submitAudienceVote(t) {
            this.sessionMessage.vote = t, this.triggerMethod("client:message", {
                type: "vote",
                vote: t
            }), this.chatAudienceChoice.model.set("chosen", t), Mt.close()
        }
    }),
    lE = zn.extend({
        defaults: Be.extend({}, so.prototype.model.defaults, {
            alerts: [],
            showProfile: null
        })
    }),
    _c = so.extend({
        model: new lE,
        bindings: Be.extend({}, so.prototype.bindings, {
            ".playerTopBar": {
                attributes: [{
                    name: "style",
                    observe: "player",
                    onGet(t) {
                        return !t || !t.color ? null : `background-color:${t.color.dark};`
                    }
                }]
            }
        }),
        update() {
            this.model.get("showProfile") && this.playerProfile(this.model.get("player"), !0), this.model.changed.alerts && (this.showAlerts(this.model.get("alerts")), Ue.notify())
        },
        playerProfile(t, e) {
            const n = this;
            t.self = e, Mt.close(), Mt.fire({
                html: "player",
                customClass: {
                    popup: "monstermingle playerProfile"
                },
                padding: 0,
                background: t.color.medium,
                showConfirmButton: !1,
                allowOutsideClick: !1,
                didOpen: () => {
                    n.profileView = new yl({
                        el: ".monstermingle.playerProfile .swal2-html-container",
                        model: new Ue.Model(t)
                    }), n.listenTo(n.profileView, "profile:close", n.closeProfile)
                }
            })
        },
        closeProfile() {
            Mt.close()
        },
        showAlerts(t) {
            const e = this,
                n = this.model.get("player");
            Be.map(t, i => (i.customClass = "monstermingle playerProfile alertDialog", i.showConfirmButton = !1, i.background = n.color, i.padding = 0, i.didOpen = () => {
                i.player = n, e.profileView = new vh({
                    el: ".monstermingle.playerProfile",
                    model: new Ue.Model(i)
                })
            }, i)), Mt.close(), t.forEach(async i => {
                await Mt.fire(i)
            })
        }
    });
const cE = Us.extend({
    sessionModulePrefix: "MonsterMingle",
    bindings: {
        ...Us.prototype.bindings,
        ":el": Be.extend({}, Us.prototype.bindings[":el"], {
            attributes: [{
                name: "class",
                observe: "customerBlob",
                onGet(t) {
                    let e = "";
                    return t && t.player && t.player.color && t.player.color.medium && (e += `color-${t.player.color.medium.replace("#","")}`), t && t.player && t.player.icon && (e += ` ${t.player.icon}`), e += " monstermingle", e
                }
            }]
        })
    },
    initialize(t) {
        Ue.history.start(), Us.prototype.initialize.apply(this, [t])
    },
    getGameLayout(t) {
        switch (t) {
            case "chat":
                return this.setLayout(aE);
            case "Gameplay":
                return this.setLayout(_c);
            case "Logo":
                return this.setLayout(_c);
            default:
                return -1
        }
    },
    parseBlob(t) {
        return t.playerInfo = t.player || {}, t.playerInfo.username = t.playerName || "Audience", t.player && t.player.color && (t.playerInfo.topBarColor = t.player.color.dark, t.playerInfo.buttonColor = t.player.color.dark, t.playerInfo.avatar = t.player.character ? t.player.character.frame : null), t.color && (t.playerInfo.topBarColor = t.color.dark, t.playerInfo.buttonColor = t.color.dark), t.state === "Logo" && (t.message = {
            html: t.message
        }), t.state === "Lobby" && (t.isPlayer || (t.state = "Logo"), t.playerIsVIP = t.isAllowedToStartGame, t.playerCanStartGame = t.isAllowedToStartGame, t.playerCanCensor = t.canCensor, t.gameCanStart = ["CanStart", "Countdown", "PostGame"].indexOf(t.lobbyState) !== -1, t.gameIsStarting = t.lobbyState === "Countdown", t.gameFinished = t.lobbyState === "PostGame"), t.state === "chat" && (t.playerInfo.hidden = !0), t.artifact && (t.characters = void 0), t.censorablePlayers && delete t.censorablePlayers, t
    },
    doPostUpdate() {
        const t = this.model.get("player");
        t !== void 0 && t.playerColor !== void 0 && (Pe("#player").css("background-color", t.playerColor), Pe("#game").css("background-color", t.playerColor), Pe("#fibbage-lie-input").css("background-color", t.playerColor)), document.querySelector("#container").className.indexOf("monstermingle") === -1 && (document.querySelector("#container").className += " monstermingle")
    },
    formatSessionMessage(t) {
        return t.action === "start" && (t.start = !0), t.action === "cancel" && (t.cancel = !0), t.action === "PostGame_Continue" && (t.start = !0, t.decision = "PostGame_Continue"), t.action === "PostGame_NewGame" && (t.start = !0, t.decision = "PostGame_NewGame"), t.action === "avatar" && (t.avatar = t.name), t
    }
});
Hx({
    MainView: cE
});
//# sourceMappingURL=4925b508.js.map