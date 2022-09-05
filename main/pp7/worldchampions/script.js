var Ch = Object.defineProperty;
var xh = (t, e, n) => e in t ? Ch(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var at = (t, e, n) => (xh(t, typeof e != "symbol" ? e + "" : e, n), n);
const Eh = function() {
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
Eh();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function _h(t) {
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
            v = Function.prototype,
            S = a.push,
            k = a.slice,
            I = f.toString,
            M = f.hasOwnProperty,
            $ = Array.isArray,
            J = Object.keys,
            ie = v.bind,
            K = Object.create,
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
                        return function(O, L) {
                            return l.call(g, O, L)
                        };
                    case 3:
                        return function(O, L, N) {
                            return l.call(g, O, L, N)
                        };
                    case 4:
                        return function(O, L, N, te) {
                            return l.call(g, O, L, N, te)
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
                    for (var L = 1; L < O; L++)
                        for (var N = arguments[L], te = l(N), Se = te.length, he = 0; he < Se; he++) {
                            var Ie = te[he];
                            (!g || _[Ie] === void 0) && (_[Ie] = N[Ie])
                        }
                    return _
                }
            },
            se = function(l) {
                if (!m.isObject(l)) return {};
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
        m.each = m.forEach = function(l, g, _) {
            g = P(g, _);
            var O, L;
            if (Ae(l))
                for (O = 0, L = l.length; O < L; O++) g(l[O], O, l);
            else {
                var N = m.keys(l);
                for (O = 0, L = N.length; O < L; O++) g(l[N[O]], N[O], l)
            }
            return l
        }, m.map = m.collect = function(l, g, _) {
            g = q(g, _);
            for (var O = !Ae(l) && m.keys(l), L = (O || l).length, N = Array(L), te = 0; te < L; te++) {
                var Se = O ? O[te] : te;
                N[te] = g(l[Se], Se, l)
            }
            return N
        };

        function Le(l) {
            function g(_, O, L, N, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var he = N ? N[te] : te;
                    L = O(L, _[he], he, _)
                }
                return L
            }
            return function(_, O, L, N) {
                O = P(O, N, 4);
                var te = !Ae(_) && m.keys(_),
                    Se = (te || _).length,
                    he = l > 0 ? 0 : Se - 1;
                return arguments.length < 3 && (L = _[te ? te[he] : he], he += l), g(_, O, L, te, he, Se)
            }
        }
        m.reduce = m.foldl = m.inject = Le(1), m.reduceRight = m.foldr = Le(-1), m.find = m.detect = function(l, g, _) {
            var O;
            if (Ae(l) ? O = m.findIndex(l, g, _) : O = m.findKey(l, g, _), O !== void 0 && O !== -1) return l[O]
        }, m.filter = m.select = function(l, g, _) {
            var O = [];
            return g = q(g, _), m.each(l, function(L, N, te) {
                g(L, N, te) && O.push(L)
            }), O
        }, m.reject = function(l, g, _) {
            return m.filter(l, m.negate(q(g)), _)
        }, m.every = m.all = function(l, g, _) {
            g = q(g, _);
            for (var O = !Ae(l) && m.keys(l), L = (O || l).length, N = 0; N < L; N++) {
                var te = O ? O[N] : N;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, m.some = m.any = function(l, g, _) {
            g = q(g, _);
            for (var O = !Ae(l) && m.keys(l), L = (O || l).length, N = 0; N < L; N++) {
                var te = O ? O[N] : N;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(l, g, _, O) {
            return Ae(l) || (l = m.values(l)), (typeof _ != "number" || O) && (_ = 0), m.indexOf(l, g, _) >= 0
        }, m.invoke = function(l, g) {
            var _ = k.call(arguments, 2),
                O = m.isFunction(g);
            return m.map(l, function(L) {
                var N = O ? g : L[g];
                return N == null ? N : N.apply(L, _)
            })
        }, m.pluck = function(l, g) {
            return m.map(l, m.property(g))
        }, m.where = function(l, g) {
            return m.filter(l, m.matcher(g))
        }, m.findWhere = function(l, g) {
            return m.find(l, m.matcher(g))
        }, m.max = function(l, g, _) {
            var O = -1 / 0,
                L = -1 / 0,
                N, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : m.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N > O && (O = N)
            } else g = q(g, _), m.each(l, function(Ie, Me, rt) {
                te = g(Ie, Me, rt), (te > L || te === -1 / 0 && O === -1 / 0) && (O = Ie, L = te)
            });
            return O
        }, m.min = function(l, g, _) {
            var O = 1 / 0,
                L = 1 / 0,
                N, te;
            if (g == null && l != null) {
                l = Ae(l) ? l : m.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N < O && (O = N)
            } else g = q(g, _), m.each(l, function(Ie, Me, rt) {
                te = g(Ie, Me, rt), (te < L || te === 1 / 0 && O === 1 / 0) && (O = Ie, L = te)
            });
            return O
        }, m.shuffle = function(l) {
            for (var g = Ae(l) ? l : m.values(l), _ = g.length, O = Array(_), L = 0, N; L < _; L++) N = m.random(0, L), N !== L && (O[L] = O[N]), O[N] = g[L];
            return O
        }, m.sample = function(l, g, _) {
            return g == null || _ ? (Ae(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
        }, m.sortBy = function(l, g, _) {
            return g = q(g, _), m.pluck(m.map(l, function(O, L, N) {
                return {
                    value: O,
                    index: L,
                    criteria: g(O, L, N)
                }
            }).sort(function(O, L) {
                var N = O.criteria,
                    te = L.criteria;
                if (N !== te) {
                    if (N > te || N === void 0) return 1;
                    if (N < te || te === void 0) return -1
                }
                return O.index - L.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, _, O) {
                var L = {};
                return _ = q(_, O), m.each(g, function(N, te) {
                    var Se = _(N, te, g);
                    l(L, N, Se)
                }), L
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
                L = [];
            return m.each(l, function(N, te, Se) {
                (g(N, te, Se) ? O : L).push(N)
            }), [O, L]
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
        var Be = function(l, g, _, O) {
            for (var L = [], N = 0, te = O || 0, Se = Ee(l); te < Se; te++) {
                var he = l[te];
                if (Ae(he) && (m.isArray(he) || m.isArguments(he))) {
                    g || (he = Be(he, g, _));
                    var Ie = 0,
                        Me = he.length;
                    for (L.length += Me; Ie < Me;) L[N++] = he[Ie++]
                } else _ || (L[N++] = he)
            }
            return L
        };
        m.flatten = function(l, g) {
            return Be(l, g, !1)
        }, m.without = function(l) {
            return m.difference(l, k.call(arguments, 1))
        }, m.uniq = m.unique = function(l, g, _, O) {
            m.isBoolean(g) || (O = _, _ = g, g = !1), _ != null && (_ = q(_, O));
            for (var L = [], N = [], te = 0, Se = Ee(l); te < Se; te++) {
                var he = l[te],
                    Ie = _ ? _(he, te, l) : he;
                g ? ((!te || N !== Ie) && L.push(he), N = Ie) : _ ? m.contains(N, Ie) || (N.push(Ie), L.push(he)) : m.contains(L, he) || L.push(he)
            }
            return L
        }, m.union = function() {
            return m.uniq(Be(arguments, !0, !0))
        }, m.intersection = function(l) {
            for (var g = [], _ = arguments.length, O = 0, L = Ee(l); O < L; O++) {
                var N = l[O];
                if (!m.contains(g, N)) {
                    for (var te = 1; te < _ && m.contains(arguments[te], N); te++);
                    te === _ && g.push(N)
                }
            }
            return g
        }, m.difference = function(l) {
            var g = Be(arguments, !0, !0, 1);
            return m.filter(l, function(_) {
                return !m.contains(g, _)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(l) {
            for (var g = l && m.max(l, Ee).length || 0, _ = Array(g), O = 0; O < g; O++) _[O] = m.pluck(l, O);
            return _
        }, m.object = function(l, g) {
            for (var _ = {}, O = 0, L = Ee(l); O < L; O++) g ? _[l[O]] = g[O] : _[l[O][0]] = l[O][1];
            return _
        };

        function Y(l) {
            return function(g, _, O) {
                _ = q(_, O);
                for (var L = Ee(g), N = l > 0 ? 0 : L - 1; N >= 0 && N < L; N += l)
                    if (_(g[N], N, g)) return N;
                return -1
            }
        }
        m.findIndex = Y(1), m.findLastIndex = Y(-1), m.sortedIndex = function(l, g, _, O) {
            _ = q(_, O, 1);
            for (var L = _(g), N = 0, te = Ee(l); N < te;) {
                var Se = Math.floor((N + te) / 2);
                _(l[Se]) < L ? N = Se + 1 : te = Se
            }
            return N
        };

        function Fe(l, g, _) {
            return function(O, L, N) {
                var te = 0,
                    Se = Ee(O);
                if (typeof N == "number") l > 0 ? te = N >= 0 ? N : Math.max(N + Se, te) : Se = N >= 0 ? Math.min(N + 1, Se) : N + Se + 1;
                else if (_ && N && Se) return N = _(O, L), O[N] === L ? N : -1;
                if (L !== L) return N = g(k.call(O, te, Se), m.isNaN), N >= 0 ? N + te : -1;
                for (N = l > 0 ? te : Se - 1; N >= 0 && N < Se; N += l)
                    if (O[N] === L) return N;
                return -1
            }
        }
        m.indexOf = Fe(1, m.findIndex, m.sortedIndex), m.lastIndexOf = Fe(-1, m.findLastIndex), m.range = function(l, g, _) {
            g == null && (g = l || 0, l = 0), _ = _ || 1;
            for (var O = Math.max(Math.ceil((g - l) / _), 0), L = Array(O), N = 0; N < O; N++, l += _) L[N] = l;
            return L
        };
        var H = function(l, g, _, O, L) {
            if (!(O instanceof g)) return l.apply(_, L);
            var N = se(l.prototype),
                te = l.apply(N, L);
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
                    for (var O = 0, L = g.length, N = Array(L), te = 0; te < L; te++) N[te] = g[te] === m ? arguments[O++] : g[te];
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
                var L = _.cache,
                    N = "" + (g ? g.apply(this, arguments) : O);
                return m.has(L, N) || (L[N] = l.apply(this, arguments)), L[N]
            };
            return _.cache = {}, _
        }, m.delay = function(l, g) {
            var _ = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, _)
            }, g)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(l, g, _) {
            var O, L, N, te = null,
                Se = 0;
            _ || (_ = {});
            var he = function() {
                Se = _.leading === !1 ? 0 : m.now(), te = null, N = l.apply(O, L), te || (O = L = null)
            };
            return function() {
                var Ie = m.now();
                !Se && _.leading === !1 && (Se = Ie);
                var Me = g - (Ie - Se);
                return O = this, L = arguments, Me <= 0 || Me > g ? (te && (clearTimeout(te), te = null), Se = Ie, N = l.apply(O, L), te || (O = L = null)) : !te && _.trailing !== !1 && (te = setTimeout(he, Me)), N
            }
        }, m.debounce = function(l, g, _) {
            var O, L, N, te, Se, he = function() {
                var Ie = m.now() - te;
                Ie < g && Ie >= 0 ? O = setTimeout(he, g - Ie) : (O = null, _ || (Se = l.apply(N, L), O || (N = L = null)))
            };
            return function() {
                N = this, L = arguments, te = m.now();
                var Ie = _ && !O;
                return O || (O = setTimeout(he, g)), Ie && (Se = l.apply(N, L), N = L = null), Se
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
                L = m.isFunction(O) && O.prototype || f,
                N = "constructor";
            for (m.has(l, N) && !m.contains(g, N) && g.push(N); _--;) N = Te[_], N in l && l[N] !== L[N] && !m.contains(g, N) && g.push(N)
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
            for (var g = m.keys(l), _ = g.length, O = Array(_), L = 0; L < _; L++) O[L] = l[g[L]];
            return O
        }, m.mapObject = function(l, g, _) {
            g = q(g, _);
            for (var O = m.keys(l), L = O.length, N = {}, te, Se = 0; Se < L; Se++) te = O[Se], N[te] = g(l[te], te, l);
            return N
        }, m.pairs = function(l) {
            for (var g = m.keys(l), _ = g.length, O = Array(_), L = 0; L < _; L++) O[L] = [g[L], l[g[L]]];
            return O
        }, m.invert = function(l) {
            for (var g = {}, _ = m.keys(l), O = 0, L = _.length; O < L; O++) g[l[_[O]]] = _[O];
            return g
        }, m.functions = m.methods = function(l) {
            var g = [];
            for (var _ in l) m.isFunction(l[_]) && g.push(_);
            return g.sort()
        }, m.extend = ae(m.allKeys), m.extendOwn = m.assign = ae(m.keys), m.findKey = function(l, g, _) {
            g = q(g, _);
            for (var O = m.keys(l), L, N = 0, te = O.length; N < te; N++)
                if (L = O[N], g(l[L], L, l)) return L
        }, m.pick = function(l, g, _) {
            var O = {},
                L = l,
                N, te;
            if (L == null) return O;
            m.isFunction(g) ? (te = m.allKeys(L), N = P(g, _)) : (te = Be(arguments, !1, !1, 1), N = function(rt, xt, sn) {
                return xt in sn
            }, L = Object(L));
            for (var Se = 0, he = te.length; Se < he; Se++) {
                var Ie = te[Se],
                    Me = L[Ie];
                N(Me, Ie, L) && (O[Ie] = Me)
            }
            return O
        }, m.omit = function(l, g, _) {
            if (m.isFunction(g)) g = m.negate(g);
            else {
                var O = m.map(Be(arguments, !1, !1, 1), String);
                g = function(L, N) {
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
            for (var L = Object(l), N = 0; N < O; N++) {
                var te = _[N];
                if (g[te] !== L[te] || !(te in L)) return !1
            }
            return !0
        };
        var ye = function(l, g, _, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof m && (l = l._wrapped), g instanceof m && (g = g._wrapped);
            var L = I.call(l);
            if (L !== I.call(g)) return !1;
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
            var N = L === "[object Array]";
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
                    Me;
                if (he = Ie.length, m.keys(g).length !== he) return !1;
                for (; he--;)
                    if (Me = Ie[he], !(m.has(g, Me) && ye(l[Me], g[Me], _, O))) return !1
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
            return l != null && M.call(l, g)
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
            for (var L = 0; L < l; L++) O[L] = g(L);
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
                    L = RegExp(_, "g");
                return function(N) {
                    return N = N == null ? "" : "" + N, O.test(N) ? N.replace(L, g) : N
                }
            };
        m.escape = ke(ue), m.unescape = ke(_e), m.result = function(l, g, _) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = _), m.isFunction(O) ? O.call(l) : O
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
            qt = function(l) {
                return "\\" + dt[l]
            };
        m.template = function(l, g, _) {
            !g && _ && (g = _), g = m.defaults({}, g, m.templateSettings);
            var O = RegExp([(g.escape || Qe).source, (g.interpolate || Qe).source, (g.evaluate || Qe).source].join("|") + "|$", "g"),
                L = 0,
                N = "__p+='";
            l.replace(O, function(Ie, Me, rt, xt, sn) {
                return N += l.slice(L, sn).replace(Bt, qt), L = sn + Ie.length, Me ? N += `'+
((__t=(` + Me + `))==null?'':_.escape(__t))+
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
    }).call(vt)
})(Bi, Bi.exports);
const He = Bi.exports;
var ia = {
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
var Cl;

function kc() {
    return Cl || (Cl = 1, function(t) {
        (function(e, n) {
            t.exports = e.document ? n(e, !0) : function(i) {
                if (!i.document) throw new Error("jQuery requires a window with a document");
                return n(i)
            }
        })(typeof window < "u" ? window : vt, function(e, n) {
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
                M = I.toString,
                $ = I.hasOwnProperty,
                J = $.toString,
                ie = J.call(Object),
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

            function ae(r, s, u) {
                u = u || P;
                var p, w, x = u.createElement("script");
                if (x.text = r, s)
                    for (p in q) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
                u.head.appendChild(x).parentNode.removeChild(x)
            }

            function se(r) {
                return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? I[M.call(r)] || "object" : typeof r
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
                    return !r || M.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = $.call(s, "constructor") && s.constructor, typeof u == "function" && J.call(u) === ie) : !0)
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
                    return v(T)
                },
                guid: 1,
                support: K
            }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
                I["[object " + s + "]"] = s.toLowerCase()
            });

            function Ee(r) {
                var s = !!r && "length" in r && r.length,
                    u = se(r);
                return re(r) || m(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
            }
            var Ae = function(r) {
                var s, u, p, w, x, T, z, U, Z, le, be, ne, ce, qe, ot, je, Ut, Vt, hn, St = "sizzle" + 1 * new Date,
                    nt = r.document,
                    an = 0,
                    ft = 0,
                    Mt = Ji(),
                    Ti = Ji(),
                    Ki = Ji(),
                    dn = Ji(),
                    Zn = function(R, F) {
                        return R === F && (be = !0), 0
                    },
                    ei = {}.hasOwnProperty,
                    ln = [],
                    Ln = ln.pop,
                    yn = ln.push,
                    xn = ln.push,
                    Ts = ln.slice,
                    ti = function(R, F) {
                        for (var X = 0, de = R.length; X < de; X++)
                            if (R[X] === F) return X;
                        return -1
                    },
                    Ur = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    gt = "[\\x20\\t\\r\\n\\f]",
                    ni = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    As = "\\[" + gt + "*(" + ni + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ni + "))|)" + gt + "*\\]",
                    Hr = ":(" + ni + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + As + ")*)|.*)\\)|)",
                    Os = new RegExp(gt + "+", "g"),
                    Ai = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                    Rs = new RegExp("^" + gt + "*," + gt + "*"),
                    Is = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                    Go = new RegExp(gt + "|>"),
                    qo = new RegExp(Hr),
                    Wo = new RegExp("^" + ni + "$"),
                    Yi = {
                        ID: new RegExp("^#(" + ni + ")"),
                        CLASS: new RegExp("^\\.(" + ni + ")"),
                        TAG: new RegExp("^(" + ni + "|[*])"),
                        ATTR: new RegExp("^" + As),
                        PSEUDO: new RegExp("^" + Hr),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + Ur + ")$", "i"),
                        needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Xo = /HTML$/i,
                    Ko = /^(?:input|select|textarea|button)$/i,
                    Yo = /^h\d$/i,
                    Oi = /^[^{]+\{\s*\[native \w/,
                    Jo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    Gr = /[+~]/,
                    An = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                    En = function(R, F) {
                        var X = "0x" + R.slice(1) - 65536;
                        return F || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                    },
                    qr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Ms = function(R, F) {
                        return F ? R === "\0" ? "\uFFFD" : R.slice(0, -1) + "\\" + R.charCodeAt(R.length - 1).toString(16) + " " : "\\" + R
                    },
                    Ds = function() {
                        ne()
                    },
                    Qo = tr(function(R) {
                        return R.disabled === !0 && R.nodeName.toLowerCase() === "fieldset"
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    xn.apply(ln = Ts.call(nt.childNodes), nt.childNodes), ln[nt.childNodes.length].nodeType
                } catch {
                    xn = {
                        apply: ln.length ? function(F, X) {
                            yn.apply(F, Ts.call(X))
                        } : function(F, X) {
                            for (var de = F.length, ee = 0; F[de++] = X[ee++];);
                            F.length = de - 1
                        }
                    }
                }

                function kt(R, F, X, de) {
                    var ee, me, xe, Oe, De, ze, Ge, Ye = F && F.ownerDocument,
                        ht = F ? F.nodeType : 9;
                    if (X = X || [], typeof R != "string" || !R || ht !== 1 && ht !== 9 && ht !== 11) return X;
                    if (!de && (ne(F), F = F || ce, ot)) {
                        if (ht !== 11 && (De = Jo.exec(R)))
                            if (ee = De[1]) {
                                if (ht === 9)
                                    if (xe = F.getElementById(ee)) {
                                        if (xe.id === ee) return X.push(xe), X
                                    } else return X;
                                else if (Ye && (xe = Ye.getElementById(ee)) && hn(F, xe) && xe.id === ee) return X.push(xe), X
                            } else {
                                if (De[2]) return xn.apply(X, F.getElementsByTagName(R)), X;
                                if ((ee = De[3]) && u.getElementsByClassName && F.getElementsByClassName) return xn.apply(X, F.getElementsByClassName(ee)), X
                            } if (u.qsa && !dn[R + " "] && (!je || !je.test(R)) && (ht !== 1 || F.nodeName.toLowerCase() !== "object")) {
                            if (Ge = R, Ye = F, ht === 1 && (Go.test(R) || Is.test(R))) {
                                for (Ye = Gr.test(R) && Wr(F.parentNode) || F, (Ye !== F || !u.scope) && ((Oe = F.getAttribute("id")) ? Oe = Oe.replace(qr, Ms) : F.setAttribute("id", Oe = St)), ze = T(R), me = ze.length; me--;) ze[me] = (Oe ? "#" + Oe : ":scope") + " " + er(ze[me]);
                                Ge = ze.join(",")
                            }
                            try {
                                return xn.apply(X, Ye.querySelectorAll(Ge)), X
                            } catch {
                                dn(R, !0)
                            } finally {
                                Oe === St && F.removeAttribute("id")
                            }
                        }
                    }
                    return U(R.replace(Ai, "$1"), F, X, de)
                }

                function Ji() {
                    var R = [];

                    function F(X, de) {
                        return R.push(X + " ") > p.cacheLength && delete F[R.shift()], F[X + " "] = de
                    }
                    return F
                }

                function fn(R) {
                    return R[St] = !0, R
                }

                function wn(R) {
                    var F = ce.createElement("fieldset");
                    try {
                        return !!R(F)
                    } catch {
                        return !1
                    } finally {
                        F.parentNode && F.parentNode.removeChild(F), F = null
                    }
                }

                function Qi(R, F) {
                    for (var X = R.split("|"), de = X.length; de--;) p.attrHandle[X[de]] = F
                }

                function Zi(R, F) {
                    var X = F && R,
                        de = X && R.nodeType === 1 && F.nodeType === 1 && R.sourceIndex - F.sourceIndex;
                    if (de) return de;
                    if (X) {
                        for (; X = X.nextSibling;)
                            if (X === F) return -1
                    }
                    return R ? 1 : -1
                }

                function Zo(R) {
                    return function(F) {
                        var X = F.nodeName.toLowerCase();
                        return X === "input" && F.type === R
                    }
                }

                function ea(R) {
                    return function(F) {
                        var X = F.nodeName.toLowerCase();
                        return (X === "input" || X === "button") && F.type === R
                    }
                }

                function Ls(R) {
                    return function(F) {
                        return "form" in F ? F.parentNode && F.disabled === !1 ? "label" in F ? "label" in F.parentNode ? F.parentNode.disabled === R : F.disabled === R : F.isDisabled === R || F.isDisabled !== !R && Qo(F) === R : F.disabled === R : "label" in F ? F.disabled === R : !1
                    }
                }

                function On(R) {
                    return fn(function(F) {
                        return F = +F, fn(function(X, de) {
                            for (var ee, me = R([], X.length, F), xe = me.length; xe--;) X[ee = me[xe]] && (X[ee] = !(de[ee] = X[ee]))
                        })
                    })
                }

                function Wr(R) {
                    return R && typeof R.getElementsByTagName < "u" && R
                }
                u = kt.support = {}, x = kt.isXML = function(R) {
                    var F = R && R.namespaceURI,
                        X = R && (R.ownerDocument || R).documentElement;
                    return !Xo.test(F || X && X.nodeName || "HTML")
                }, ne = kt.setDocument = function(R) {
                    var F, X, de = R ? R.ownerDocument || R : nt;
                    return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, qe = ce.documentElement, ot = !x(ce), nt != ce && (X = ce.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Ds, !1) : X.attachEvent && X.attachEvent("onunload", Ds)), u.scope = wn(function(ee) {
                        return qe.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                    }), u.attributes = wn(function(ee) {
                        return ee.className = "i", !ee.getAttribute("className")
                    }), u.getElementsByTagName = wn(function(ee) {
                        return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                    }), u.getElementsByClassName = Oi.test(ce.getElementsByClassName), u.getById = wn(function(ee) {
                        return qe.appendChild(ee).id = St, !ce.getElementsByName || !ce.getElementsByName(St).length
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
                    }, Ut = [], je = [], (u.qsa = Oi.test(ce.querySelectorAll)) && (wn(function(ee) {
                        var me;
                        qe.appendChild(ee).innerHTML = "<a id='" + St + "'></a><select id='" + St + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + Ur + ")"), ee.querySelectorAll("[id~=" + St + "-]").length || je.push("~="), me = ce.createElement("input"), me.setAttribute("name", ""), ee.appendChild(me), ee.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || je.push(":checked"), ee.querySelectorAll("a#" + St + "+*").length || je.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                    }), wn(function(ee) {
                        ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var me = ce.createElement("input");
                        me.setAttribute("type", "hidden"), ee.appendChild(me).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), qe.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), je.push(",.*:")
                    })), (u.matchesSelector = Oi.test(Vt = qe.matches || qe.webkitMatchesSelector || qe.mozMatchesSelector || qe.oMatchesSelector || qe.msMatchesSelector)) && wn(function(ee) {
                        u.disconnectedMatch = Vt.call(ee, "*"), Vt.call(ee, "[s!='']:x"), Ut.push("!=", Hr)
                    }), je = je.length && new RegExp(je.join("|")), Ut = Ut.length && new RegExp(Ut.join("|")), F = Oi.test(qe.compareDocumentPosition), hn = F || Oi.test(qe.contains) ? function(ee, me) {
                        var xe = ee.nodeType === 9 ? ee.documentElement : ee,
                            Oe = me && me.parentNode;
                        return ee === Oe || !!(Oe && Oe.nodeType === 1 && (xe.contains ? xe.contains(Oe) : ee.compareDocumentPosition && ee.compareDocumentPosition(Oe) & 16))
                    } : function(ee, me) {
                        if (me) {
                            for (; me = me.parentNode;)
                                if (me === ee) return !0
                        }
                        return !1
                    }, Zn = F ? function(ee, me) {
                        if (ee === me) return be = !0, 0;
                        var xe = !ee.compareDocumentPosition - !me.compareDocumentPosition;
                        return xe || (xe = (ee.ownerDocument || ee) == (me.ownerDocument || me) ? ee.compareDocumentPosition(me) : 1, xe & 1 || !u.sortDetached && me.compareDocumentPosition(ee) === xe ? ee == ce || ee.ownerDocument == nt && hn(nt, ee) ? -1 : me == ce || me.ownerDocument == nt && hn(nt, me) ? 1 : le ? ti(le, ee) - ti(le, me) : 0 : xe & 4 ? -1 : 1)
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
                }, kt.matches = function(R, F) {
                    return kt(R, null, null, F)
                }, kt.matchesSelector = function(R, F) {
                    if (ne(R), u.matchesSelector && ot && !dn[F + " "] && (!Ut || !Ut.test(F)) && (!je || !je.test(F))) try {
                        var X = Vt.call(R, F);
                        if (X || u.disconnectedMatch || R.document && R.document.nodeType !== 11) return X
                    } catch {
                        dn(F, !0)
                    }
                    return kt(F, ce, null, [R]).length > 0
                }, kt.contains = function(R, F) {
                    return (R.ownerDocument || R) != ce && ne(R), hn(R, F)
                }, kt.attr = function(R, F) {
                    (R.ownerDocument || R) != ce && ne(R);
                    var X = p.attrHandle[F.toLowerCase()],
                        de = X && ei.call(p.attrHandle, F.toLowerCase()) ? X(R, F, !ot) : void 0;
                    return de !== void 0 ? de : u.attributes || !ot ? R.getAttribute(F) : (de = R.getAttributeNode(F)) && de.specified ? de.value : null
                }, kt.escape = function(R) {
                    return (R + "").replace(qr, Ms)
                }, kt.error = function(R) {
                    throw new Error("Syntax error, unrecognized expression: " + R)
                }, kt.uniqueSort = function(R) {
                    var F, X = [],
                        de = 0,
                        ee = 0;
                    if (be = !u.detectDuplicates, le = !u.sortStable && R.slice(0), R.sort(Zn), be) {
                        for (; F = R[ee++];) F === R[ee] && (de = X.push(ee));
                        for (; de--;) R.splice(X[de], 1)
                    }
                    return le = null, R
                }, w = kt.getText = function(R) {
                    var F, X = "",
                        de = 0,
                        ee = R.nodeType;
                    if (ee) {
                        if (ee === 1 || ee === 9 || ee === 11) {
                            if (typeof R.textContent == "string") return R.textContent;
                            for (R = R.firstChild; R; R = R.nextSibling) X += w(R)
                        } else if (ee === 3 || ee === 4) return R.nodeValue
                    } else
                        for (; F = R[de++];) X += w(F);
                    return X
                }, p = kt.selectors = {
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
                            return R[1] = R[1].toLowerCase(), R[1].slice(0, 3) === "nth" ? (R[3] || kt.error(R[0]), R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === "even" || R[3] === "odd")), R[5] = +(R[7] + R[8] || R[3] === "odd")) : R[3] && kt.error(R[0]), R
                        },
                        PSEUDO: function(R) {
                            var F, X = !R[6] && R[2];
                            return Yi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : X && qo.test(X) && (F = T(X, !0)) && (F = X.indexOf(")", X.length - F) - X.length) && (R[0] = R[0].slice(0, F), R[2] = X.slice(0, F)), R.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(R) {
                            var F = R.replace(An, En).toLowerCase();
                            return R === "*" ? function() {
                                return !0
                            } : function(X) {
                                return X.nodeName && X.nodeName.toLowerCase() === F
                            }
                        },
                        CLASS: function(R) {
                            var F = Mt[R + " "];
                            return F || (F = new RegExp("(^|" + gt + ")" + R + "(" + gt + "|$)")) && Mt(R, function(X) {
                                return F.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(R, F, X) {
                            return function(de) {
                                var ee = kt.attr(de, R);
                                return ee == null ? F === "!=" : F ? (ee += "", F === "=" ? ee === X : F === "!=" ? ee !== X : F === "^=" ? X && ee.indexOf(X) === 0 : F === "*=" ? X && ee.indexOf(X) > -1 : F === "$=" ? X && ee.slice(-X.length) === X : F === "~=" ? (" " + ee.replace(Os, " ") + " ").indexOf(X) > -1 : F === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                            }
                        },
                        CHILD: function(R, F, X, de, ee) {
                            var me = R.slice(0, 3) !== "nth",
                                xe = R.slice(-4) !== "last",
                                Oe = F === "of-type";
                            return de === 1 && ee === 0 ? function(De) {
                                return !!De.parentNode
                            } : function(De, ze, Ge) {
                                var Ye, ht, At, Xe, Ht, Zt, pn = me !== xe ? "nextSibling" : "previousSibling",
                                    Ot = De.parentNode,
                                    c = Oe && De.nodeName.toLowerCase(),
                                    h = !Ge && !Oe,
                                    b = !1;
                                if (Ot) {
                                    if (me) {
                                        for (; pn;) {
                                            for (Xe = De; Xe = Xe[pn];)
                                                if (Oe ? Xe.nodeName.toLowerCase() === c : Xe.nodeType === 1) return !1;
                                            Zt = pn = R === "only" && !Zt && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (Zt = [xe ? Ot.firstChild : Ot.lastChild], xe && h) {
                                        for (Xe = Ot, At = Xe[St] || (Xe[St] = {}), ht = At[Xe.uniqueID] || (At[Xe.uniqueID] = {}), Ye = ht[R] || [], Ht = Ye[0] === an && Ye[1], b = Ht && Ye[2], Xe = Ht && Ot.childNodes[Ht]; Xe = ++Ht && Xe && Xe[pn] || (b = Ht = 0) || Zt.pop();)
                                            if (Xe.nodeType === 1 && ++b && Xe === De) {
                                                ht[R] = [an, Ht, b];
                                                break
                                            }
                                    } else if (h && (Xe = De, At = Xe[St] || (Xe[St] = {}), ht = At[Xe.uniqueID] || (At[Xe.uniqueID] = {}), Ye = ht[R] || [], Ht = Ye[0] === an && Ye[1], b = Ht), b === !1)
                                        for (;
                                            (Xe = ++Ht && Xe && Xe[pn] || (b = Ht = 0) || Zt.pop()) && !((Oe ? Xe.nodeName.toLowerCase() === c : Xe.nodeType === 1) && ++b && (h && (At = Xe[St] || (Xe[St] = {}), ht = At[Xe.uniqueID] || (At[Xe.uniqueID] = {}), ht[R] = [an, b]), Xe === De)););
                                    return b -= ee, b === de || b % de === 0 && b / de >= 0
                                }
                            }
                        },
                        PSEUDO: function(R, F) {
                            var X, de = p.pseudos[R] || p.setFilters[R.toLowerCase()] || kt.error("unsupported pseudo: " + R);
                            return de[St] ? de(F) : de.length > 1 ? (X = [R, R, "", F], p.setFilters.hasOwnProperty(R.toLowerCase()) ? fn(function(ee, me) {
                                for (var xe, Oe = de(ee, F), De = Oe.length; De--;) xe = ti(ee, Oe[De]), ee[xe] = !(me[xe] = Oe[De])
                            }) : function(ee) {
                                return de(ee, 0, X)
                            }) : de
                        }
                    },
                    pseudos: {
                        not: fn(function(R) {
                            var F = [],
                                X = [],
                                de = z(R.replace(Ai, "$1"));
                            return de[St] ? fn(function(ee, me, xe, Oe) {
                                for (var De, ze = de(ee, null, Oe, []), Ge = ee.length; Ge--;)(De = ze[Ge]) && (ee[Ge] = !(me[Ge] = De))
                            }) : function(ee, me, xe) {
                                return F[0] = ee, de(F, null, xe, X), F[0] = null, !X.pop()
                            }
                        }),
                        has: fn(function(R) {
                            return function(F) {
                                return kt(R, F).length > 0
                            }
                        }),
                        contains: fn(function(R) {
                            return R = R.replace(An, En),
                                function(F) {
                                    return (F.textContent || w(F)).indexOf(R) > -1
                                }
                        }),
                        lang: fn(function(R) {
                            return Wo.test(R || "") || kt.error("unsupported lang: " + R), R = R.replace(An, En).toLowerCase(),
                                function(F) {
                                    var X;
                                    do
                                        if (X = ot ? F.lang : F.getAttribute("xml:lang") || F.getAttribute("lang")) return X = X.toLowerCase(), X === R || X.indexOf(R + "-") === 0; while ((F = F.parentNode) && F.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(R) {
                            var F = r.location && r.location.hash;
                            return F && F.slice(1) === R.id
                        },
                        root: function(R) {
                            return R === qe
                        },
                        focus: function(R) {
                            return R === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(R.type || R.href || ~R.tabIndex)
                        },
                        enabled: Ls(!1),
                        disabled: Ls(!0),
                        checked: function(R) {
                            var F = R.nodeName.toLowerCase();
                            return F === "input" && !!R.checked || F === "option" && !!R.selected
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
                            return Yo.test(R.nodeName)
                        },
                        input: function(R) {
                            return Ko.test(R.nodeName)
                        },
                        button: function(R) {
                            var F = R.nodeName.toLowerCase();
                            return F === "input" && R.type === "button" || F === "button"
                        },
                        text: function(R) {
                            var F;
                            return R.nodeName.toLowerCase() === "input" && R.type === "text" && ((F = R.getAttribute("type")) == null || F.toLowerCase() === "text")
                        },
                        first: On(function() {
                            return [0]
                        }),
                        last: On(function(R, F) {
                            return [F - 1]
                        }),
                        eq: On(function(R, F, X) {
                            return [X < 0 ? X + F : X]
                        }),
                        even: On(function(R, F) {
                            for (var X = 0; X < F; X += 2) R.push(X);
                            return R
                        }),
                        odd: On(function(R, F) {
                            for (var X = 1; X < F; X += 2) R.push(X);
                            return R
                        }),
                        lt: On(function(R, F, X) {
                            for (var de = X < 0 ? X + F : X > F ? F : X; --de >= 0;) R.push(de);
                            return R
                        }),
                        gt: On(function(R, F, X) {
                            for (var de = X < 0 ? X + F : X; ++de < F;) R.push(de);
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
                    }) p.pseudos[s] = Zo(s);
                for (s in {
                        submit: !0,
                        reset: !0
                    }) p.pseudos[s] = ea(s);

                function Ps() {}
                Ps.prototype = p.filters = p.pseudos, p.setFilters = new Ps, T = kt.tokenize = function(R, F) {
                    var X, de, ee, me, xe, Oe, De, ze = Ti[R + " "];
                    if (ze) return F ? 0 : ze.slice(0);
                    for (xe = R, Oe = [], De = p.preFilter; xe;) {
                        (!X || (de = Rs.exec(xe))) && (de && (xe = xe.slice(de[0].length) || xe), Oe.push(ee = [])), X = !1, (de = Is.exec(xe)) && (X = de.shift(), ee.push({
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
                    return F ? xe.length : xe ? kt.error(R) : Ti(R, Oe).slice(0)
                };

                function er(R) {
                    for (var F = 0, X = R.length, de = ""; F < X; F++) de += R[F].value;
                    return de
                }

                function tr(R, F, X) {
                    var de = F.dir,
                        ee = F.next,
                        me = ee || de,
                        xe = X && me === "parentNode",
                        Oe = ft++;
                    return F.first ? function(De, ze, Ge) {
                        for (; De = De[de];)
                            if (De.nodeType === 1 || xe) return R(De, ze, Ge);
                        return !1
                    } : function(De, ze, Ge) {
                        var Ye, ht, At, Xe = [an, Oe];
                        if (Ge) {
                            for (; De = De[de];)
                                if ((De.nodeType === 1 || xe) && R(De, ze, Ge)) return !0
                        } else
                            for (; De = De[de];)
                                if (De.nodeType === 1 || xe)
                                    if (At = De[St] || (De[St] = {}), ht = At[De.uniqueID] || (At[De.uniqueID] = {}), ee && ee === De.nodeName.toLowerCase()) De = De[de] || De;
                                    else {
                                        if ((Ye = ht[me]) && Ye[0] === an && Ye[1] === Oe) return Xe[2] = Ye[2];
                                        if (ht[me] = Xe, Xe[2] = R(De, ze, Ge)) return !0
                                    } return !1
                    }
                }

                function nr(R) {
                    return R.length > 1 ? function(F, X, de) {
                        for (var ee = R.length; ee--;)
                            if (!R[ee](F, X, de)) return !1;
                        return !0
                    } : R[0]
                }

                function ta(R, F, X) {
                    for (var de = 0, ee = F.length; de < ee; de++) kt(R, F[de], X);
                    return X
                }

                function ir(R, F, X, de, ee) {
                    for (var me, xe = [], Oe = 0, De = R.length, ze = F != null; Oe < De; Oe++)(me = R[Oe]) && (!X || X(me, de, ee)) && (xe.push(me), ze && F.push(Oe));
                    return xe
                }

                function Xr(R, F, X, de, ee, me) {
                    return de && !de[St] && (de = Xr(de)), ee && !ee[St] && (ee = Xr(ee, me)), fn(function(xe, Oe, De, ze) {
                        var Ge, Ye, ht, At = [],
                            Xe = [],
                            Ht = Oe.length,
                            Zt = xe || ta(F || "*", De.nodeType ? [De] : De, []),
                            pn = R && (xe || !F) ? ir(Zt, At, R, De, ze) : Zt,
                            Ot = X ? ee || (xe ? R : Ht || de) ? [] : Oe : pn;
                        if (X && X(pn, Ot, De, ze), de)
                            for (Ge = ir(Ot, Xe), de(Ge, [], De, ze), Ye = Ge.length; Ye--;)(ht = Ge[Ye]) && (Ot[Xe[Ye]] = !(pn[Xe[Ye]] = ht));
                        if (xe) {
                            if (ee || R) {
                                if (ee) {
                                    for (Ge = [], Ye = Ot.length; Ye--;)(ht = Ot[Ye]) && Ge.push(pn[Ye] = ht);
                                    ee(null, Ot = [], Ge, ze)
                                }
                                for (Ye = Ot.length; Ye--;)(ht = Ot[Ye]) && (Ge = ee ? ti(xe, ht) : At[Ye]) > -1 && (xe[Ge] = !(Oe[Ge] = ht))
                            }
                        } else Ot = ir(Ot === Oe ? Ot.splice(Ht, Ot.length) : Ot), ee ? ee(null, Oe, Ot, ze) : xn.apply(Oe, Ot)
                    })
                }

                function Kr(R) {
                    for (var F, X, de, ee = R.length, me = p.relative[R[0].type], xe = me || p.relative[" "], Oe = me ? 1 : 0, De = tr(function(Ye) {
                            return Ye === F
                        }, xe, !0), ze = tr(function(Ye) {
                            return ti(F, Ye) > -1
                        }, xe, !0), Ge = [function(Ye, ht, At) {
                            var Xe = !me && (At || ht !== Z) || ((F = ht).nodeType ? De(Ye, ht, At) : ze(Ye, ht, At));
                            return F = null, Xe
                        }]; Oe < ee; Oe++)
                        if (X = p.relative[R[Oe].type]) Ge = [tr(nr(Ge), X)];
                        else {
                            if (X = p.filter[R[Oe].type].apply(null, R[Oe].matches), X[St]) {
                                for (de = ++Oe; de < ee && !p.relative[R[de].type]; de++);
                                return Xr(Oe > 1 && nr(Ge), Oe > 1 && er(R.slice(0, Oe - 1).concat({
                                    value: R[Oe - 2].type === " " ? "*" : ""
                                })).replace(Ai, "$1"), X, Oe < de && Kr(R.slice(Oe, de)), de < ee && Kr(R = R.slice(de)), de < ee && er(R))
                            }
                            Ge.push(X)
                        } return nr(Ge)
                }

                function Vs(R, F) {
                    var X = F.length > 0,
                        de = R.length > 0,
                        ee = function(me, xe, Oe, De, ze) {
                            var Ge, Ye, ht, At = 0,
                                Xe = "0",
                                Ht = me && [],
                                Zt = [],
                                pn = Z,
                                Ot = me || de && p.find.TAG("*", ze),
                                c = an += pn == null ? 1 : Math.random() || .1,
                                h = Ot.length;
                            for (ze && (Z = xe == ce || xe || ze); Xe !== h && (Ge = Ot[Xe]) != null; Xe++) {
                                if (de && Ge) {
                                    for (Ye = 0, !xe && Ge.ownerDocument != ce && (ne(Ge), Oe = !ot); ht = R[Ye++];)
                                        if (ht(Ge, xe || ce, Oe)) {
                                            De.push(Ge);
                                            break
                                        } ze && (an = c)
                                }
                                X && ((Ge = !ht && Ge) && At--, me && Ht.push(Ge))
                            }
                            if (At += Xe, X && Xe !== At) {
                                for (Ye = 0; ht = F[Ye++];) ht(Ht, Zt, xe, Oe);
                                if (me) {
                                    if (At > 0)
                                        for (; Xe--;) Ht[Xe] || Zt[Xe] || (Zt[Xe] = Ln.call(De));
                                    Zt = ir(Zt)
                                }
                                xn.apply(De, Zt), ze && !me && Zt.length > 0 && At + F.length > 1 && kt.uniqueSort(De)
                            }
                            return ze && (an = c, Z = pn), Ht
                        };
                    return X ? fn(ee) : ee
                }
                return z = kt.compile = function(R, F) {
                    var X, de = [],
                        ee = [],
                        me = Ki[R + " "];
                    if (!me) {
                        for (F || (F = T(R)), X = F.length; X--;) me = Kr(F[X]), me[St] ? de.push(me) : ee.push(me);
                        me = Ki(R, Vs(ee, de)), me.selector = R
                    }
                    return me
                }, U = kt.select = function(R, F, X, de) {
                    var ee, me, xe, Oe, De, ze = typeof R == "function" && R,
                        Ge = !de && T(R = ze.selector || R);
                    if (X = X || [], Ge.length === 1) {
                        if (me = Ge[0] = Ge[0].slice(0), me.length > 2 && (xe = me[0]).type === "ID" && F.nodeType === 9 && ot && p.relative[me[1].type]) {
                            if (F = (p.find.ID(xe.matches[0].replace(An, En), F) || [])[0], F) ze && (F = F.parentNode);
                            else return X;
                            R = R.slice(me.shift().value.length)
                        }
                        for (ee = Yi.needsContext.test(R) ? 0 : me.length; ee-- && (xe = me[ee], !p.relative[Oe = xe.type]);)
                            if ((De = p.find[Oe]) && (de = De(xe.matches[0].replace(An, En), Gr.test(me[0].type) && Wr(F.parentNode) || F))) {
                                if (me.splice(ee, 1), R = de.length && er(me), !R) return xn.apply(X, de), X;
                                break
                            }
                    }
                    return (ze || z(R, Ge))(de, F, !ot, X, !F || Gr.test(R) && Wr(F.parentNode) || F), X
                }, u.sortStable = St.split("").sort(Zn).join("") === St, u.detectDuplicates = !!be, ne(), u.sortDetached = wn(function(R) {
                    return R.compareDocumentPosition(ce.createElement("fieldset")) & 1
                }), wn(function(R) {
                    return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
                }) || Qi("type|href|height|width", function(R, F, X) {
                    if (!X) return R.getAttribute(F, F.toLowerCase() === "type" ? 1 : 2)
                }), (!u.attributes || !wn(function(R) {
                    return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
                })) && Qi("value", function(R, F, X) {
                    if (!X && R.nodeName.toLowerCase() === "input") return R.defaultValue
                }), wn(function(R) {
                    return R.getAttribute("disabled") == null
                }) || Qi(Ur, function(R, F, X) {
                    var de;
                    if (!X) return R[F] === !0 ? F.toLowerCase() : (de = R.getAttributeNode(F)) && de.specified ? de.value : null
                }), kt
            }(e);
            d.find = Ae, d.expr = Ae.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = Ae.uniqueSort, d.text = Ae.getText, d.isXMLDoc = Ae.isXML, d.contains = Ae.contains, d.escapeSelector = Ae.escape;
            var Le = function(r, s, u) {
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
            var Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

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
                                if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), Fe.test(p[1]) && d.isPlainObject(s))
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
                    return Le(r, "parentNode")
                },
                parentsUntil: function(r, s, u) {
                    return Le(r, "parentNode", u)
                },
                next: function(r) {
                    return _e(r, "nextSibling")
                },
                prev: function(r) {
                    return _e(r, "previousSibling")
                },
                nextAll: function(r) {
                    return Le(r, "nextSibling")
                },
                prevAll: function(r) {
                    return Le(r, "previousSibling")
                },
                nextUntil: function(r, s, u) {
                    return Le(r, "nextSibling", u)
                },
                prevUntil: function(r, s, u) {
                    return Le(r, "previousSibling", u)
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
                                        var qe = this,
                                            ot = arguments,
                                            je = function() {
                                                var Vt, hn;
                                                if (!(le < U)) {
                                                    if (Vt = ne.apply(qe, ot), Vt === be.promise()) throw new TypeError("Thenable self-resolution");
                                                    hn = Vt && (typeof Vt == "object" || typeof Vt == "function") && Vt.then, re(hn) ? ce ? hn.call(Vt, Z(U, be, Qe, ce), Z(U, be, dt, ce)) : (U++, hn.call(Vt, Z(U, be, Qe, ce), Z(U, be, dt, ce), Z(U, be, Qe, be.notifyWith))) : (ne !== Qe && (qe = void 0, ot = [Vt]), (ce || be.resolveWith)(qe, ot))
                                                }
                                            },
                                            Ut = ce ? je : function() {
                                                try {
                                                    je()
                                                } catch (Vt) {
                                                    d.Deferred.exceptionHook && d.Deferred.exceptionHook(Vt, Ut.stackTrace), le + 1 >= U && (ne !== dt && (qe = void 0, ot = [Vt]), be.rejectWith(qe, ot))
                                                }
                                            };
                                        le ? Ut() : (d.Deferred.getStackHook && (Ut.stackTrace = d.Deferred.getStackHook()), e.setTimeout(Ut))
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
                _ = /^-ms-/,
                O = /-([a-z])/g;

            function L(r, s) {
                return s.toUpperCase()
            }

            function N(r) {
                return r.replace(_, "ms-").replace(O, L)
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
                Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                rt = /[A-Z]/g;

            function xt(r) {
                return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Me.test(r) ? JSON.parse(r) : r
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
                    }) : g(this, function(z) {
                        var U;
                        if (x && z === void 0) return U = Ie.get(x, r), U !== void 0 || (U = sn(x, r), U !== void 0) ? U : void 0;
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
                yt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
                bt = ["Top", "Right", "Bottom", "Left"],
                Qt = P.documentElement,
                Ze = function(r) {
                    return d.contains(r.ownerDocument, r)
                },
                Lt = {
                    composed: !0
                };
            Qt.getRootNode && (Ze = function(r) {
                return d.contains(r.ownerDocument, r) || r.getRootNode(Lt) === r.ownerDocument
            });
            var j = function(r, s) {
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
                    le = r.nodeType && (d.cssNumber[s] || Z !== "px" && +U) && yt.exec(d.css(r, s));
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

            function G(r, s) {
                for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = he.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && j(p) && (w[x] = D(p))) : u !== "none" && (w[x] = "none", he.set(p, "display", u)));
                for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
                return r
            }
            d.fn.extend({
                show: function() {
                    return G(this, !0)
                },
                hide: function() {
                    return G(this)
                },
                toggle: function(r) {
                    return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                        j(this) ? d(this).show() : d(this).hide()
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

            function Mn(r, s, u, p, w) {
                for (var x, T, z, U, Z, le, be = s.createDocumentFragment(), ne = [], ce = 0, qe = r.length; ce < qe; ce++)
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
            var Vn = /^([^.]*)(?:\.(.+)|)/;

            function st() {
                return !0
            }

            function Dn() {
                return !1
            }

            function yi(r, s) {
                return r === Tr() == (s === "focus")
            }

            function Tr() {
                try {
                    return P.activeElement
                } catch {}
            }

            function Tn(r, s, u, p, w, x) {
                var T, z;
                if (typeof s == "object") {
                    typeof u != "string" && (p = p || u, u = void 0);
                    for (z in s) Tn(r, z, u, p, s[z], x);
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
                    var x, T, z, U, Z, le, be, ne, ce, qe, ot, je = he.get(r);
                    if (!!te(r))
                        for (u.handler && (x = u, u = x.handler, w = x.selector), w && d.find.matchesSelector(Qt, w), u.guid || (u.guid = d.guid++), (U = je.events) || (U = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(Ut) {
                                return typeof d < "u" && d.event.triggered !== Ut.type ? d.event.dispatch.apply(r, arguments) : void 0
                            }), s = (s || "").match(ke) || [""], Z = s.length; Z--;) z = Vn.exec(s[Z]) || [], ce = ot = z[1], qe = (z[2] || "").split(".").sort(), ce && (be = d.event.special[ce] || {}, ce = (w ? be.delegateType : be.bindType) || ce, be = d.event.special[ce] || {}, le = d.extend({
                            type: ce,
                            origType: ot,
                            data: p,
                            handler: u,
                            guid: u.guid,
                            selector: w,
                            needsContext: w && d.expr.match.needsContext.test(w),
                            namespace: qe.join(".")
                        }, x), (ne = U[ce]) || (ne = U[ce] = [], ne.delegateCount = 0, (!be.setup || be.setup.call(r, p, qe, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), be.add && (be.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), d.event.global[ce] = !0)
                },
                remove: function(r, s, u, p, w) {
                    var x, T, z, U, Z, le, be, ne, ce, qe, ot, je = he.hasData(r) && he.get(r);
                    if (!(!je || !(U = je.events))) {
                        for (s = (s || "").match(ke) || [""], Z = s.length; Z--;) {
                            if (z = Vn.exec(s[Z]) || [], ce = ot = z[1], qe = (z[2] || "").split(".").sort(), !ce) {
                                for (ce in U) d.event.remove(r, ce + s[Z], u, p, !0);
                                continue
                            }
                            for (be = d.event.special[ce] || {}, ce = (p ? be.delegateType : be.bindType) || ce, ne = U[ce] || [], z = z[2] && new RegExp("(^|\\.)" + qe.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) le = ne[x], (w || ot === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(x, 1), le.selector && ne.delegateCount--, be.remove && be.remove.call(r, le));
                            T && !ne.length && ((!be.teardown || be.teardown.call(r, qe, je.handle) === !1) && d.removeEvent(r, ce, je.handle), delete U[ce])
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
                            return fe.test(s.type) && s.click && Y(s, "input") && on(s, "click", st), !1
                        },
                        trigger: function(r) {
                            var s = this || r;
                            return fe.test(s.type) && s.click && Y(s, "input") && on(s, "click"), !0
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
                        return on(this, r, yi), !1
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
            var Ar = /<script|<style|<link/i,
                Or = /checked\s*(?:[^=]|=\s*.checked.)/i,
                wi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Fi(r, s) {
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
                    Ie.hasData(r) && (T = Ie.access(r), z = d.extend({}, T), Ie.set(s, z))
                }
            }

            function Ui(r, s) {
                var u = s.nodeName.toLowerCase();
                u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
            }

            function vn(r, s, u, p) {
                s = v(s);
                var w, x, T, z, U, Z, le = 0,
                    be = r.length,
                    ne = be - 1,
                    ce = s[0],
                    qe = re(ce);
                if (qe || be > 1 && typeof ce == "string" && !K.checkClone && Or.test(ce)) return r.each(function(ot) {
                    var je = r.eq(ot);
                    qe && (s[0] = ce.call(this, ot, je.html())), vn(je, s, u, p)
                });
                if (be && (w = Mn(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                    for (T = d.map(pt(w, "script"), bi), z = T.length; le < be; le++) U = w, le !== ne && (U = d.clone(U, !0, !0), z && d.merge(T, pt(U, "script"))), u.call(r[le], U, le);
                    if (z)
                        for (Z = T[T.length - 1].ownerDocument, d.map(T, Ci), le = 0; le < z; le++) U = T[le], Ve.test(U.type || "") && !he.access(U, "globalEval") && d.contains(Z, U) && (U.src && (U.type || "").toLowerCase() !== "module" ? d._evalUrl && !U.noModule && d._evalUrl(U.src, {
                            nonce: U.nonce || U.getAttribute("nonce")
                        }, Z) : ae(U.textContent.replace(wi, ""), U, Z))
                }
                return r
            }

            function Hi(r, s, u) {
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
                            u[Ie.expando] && (u[Ie.expando] = void 0)
                        }
                }
            }), d.fn.extend({
                detach: function(r) {
                    return Hi(this, r, !0)
                },
                remove: function(r) {
                    return Hi(this, r)
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
                        if (typeof s == "string" && !Ar.test(s) && !Ne[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
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
                    return vn(this, arguments, function(s) {
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
                    for (var p, w = [], x = d(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), d(x[z])[s](p), S.apply(w, p.get());
                    return this.pushStack(w)
                }
            });
            var xi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
                qn = function(r) {
                    var s = r.ownerDocument.defaultView;
                    return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
                },
                Gi = function(r, s, u) {
                    var p, w, x = {};
                    for (w in s) x[w] = r.style[w], r.style[w] = s[w];
                    p = u.call(r);
                    for (w in s) r.style[w] = x[w];
                    return p
                },
                Ei = new RegExp(bt.join("|"), "i");
            (function() {
                function r() {
                    if (!!Z) {
                        U.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Qt.appendChild(U).appendChild(Z);
                        var le = e.getComputedStyle(Z);
                        u = le.top !== "1%", z = s(le.marginLeft) === 12, Z.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Qt.removeChild(U), Z = null
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
                        return T == null && (le = P.createElement("table"), be = P.createElement("tr"), ne = P.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", be.style.cssText = "border:1px solid", be.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Qt.appendChild(le).appendChild(be).appendChild(ne), ce = e.getComputedStyle(be), T = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === be.offsetHeight, Qt.removeChild(le)), T
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
            var We = /^(none|table(?!-c[ea]).+)/,
                It = /^--/,
                Xt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Wn = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Nn(r, s, u) {
                var p = yt.exec(s);
                return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
            }

            function Xn(r, s, u, p, w, x) {
                var T = s === "width" ? 1 : 0,
                    z = 0,
                    U = 0;
                if (u === (p ? "border" : "content")) return 0;
                for (; T < 4; T += 2) u === "margin" && (U += d.css(r, u + bt[T], !0, w)), p ? (u === "content" && (U -= d.css(r, "padding" + bt[T], !0, w)), u !== "margin" && (U -= d.css(r, "border" + bt[T] + "Width", !0, w))) : (U += d.css(r, "padding" + bt[T], !0, w), u !== "padding" ? U += d.css(r, "border" + bt[T] + "Width", !0, w) : z += d.css(r, "border" + bt[T] + "Width", !0, w));
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
                            U = It.test(s),
                            Z = r.style;
                        if (U || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                            if (x = typeof u, x === "string" && (w = yt.exec(u)) && w[1] && (u = V(r, s, w), x = "number"), u == null || u !== u) return;
                            x === "number" && !U && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !K.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (U ? Z.setProperty(s, u) : Z[s] = u)
                        } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                    }
                },
                css: function(r, s, u, p) {
                    var w, x, T, z = N(s),
                        U = It.test(s);
                    return U || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = tt(r, s, p)), w === "normal" && s in Wn && (w = Wn[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
                }
            }), d.each(["height", "width"], function(r, s) {
                d.cssHooks[s] = {
                    get: function(u, p, w) {
                        if (p) return We.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Gi(u, Xt, function() {
                            return Rr(u, s, w)
                        }) : Rr(u, s, w)
                    },
                    set: function(u, p, w) {
                        var x, T = qn(u),
                            z = !K.scrollboxSize() && T.position === "absolute",
                            U = z || w,
                            Z = U && d.css(u, "boxSizing", !1, T) === "border-box",
                            le = w ? Xn(u, s, w, Z, T) : 0;
                        return Z && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Xn(u, s, "border", !1, T) - .5)), le && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Nn(u, p, le)
                    }
                }
            }), d.cssHooks.marginLeft = y(K.reliableMarginLeft, function(r, s) {
                if (s) return (parseFloat(tt(r, "marginLeft")) || r.getBoundingClientRect().left - Gi(r, {
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
                        for (var p = 0, w = {}, x = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) w[r + bt[p] + s] = x[p] || x[p - 2] || x[0];
                        return w
                    }
                }, r !== "margin" && (d.cssHooks[r + s].set = Nn)
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
            var zt, qi, ko = /^(?:toggle|show|hide)$/,
                To = /queueHooks$/;

            function Ir() {
                qi && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Ir) : e.setTimeout(Ir, d.fx.interval), d.fx.tick())
            }

            function Mr() {
                return e.setTimeout(function() {
                    zt = void 0
                }), zt = Date.now()
            }

            function Wi(r, s) {
                var u, p = 0,
                    w = {
                        height: r
                    };
                for (s = s ? 1 : 0; p < 4; p += 2 - s) u = bt[p], w["margin" + u] = w["padding" + u] = r;
                return s && (w.opacity = w.width = r), w
            }

            function ys(r, s, u) {
                for (var p, w = (Cn.tweeners[s] || []).concat(Cn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                    if (p = w[x].call(u, s, r)) return p
            }

            function Ao(r, s, u) {
                var p, w, x, T, z, U, Z, le, be = "width" in s || "height" in s,
                    ne = this,
                    ce = {},
                    qe = r.style,
                    ot = r.nodeType && j(r),
                    je = he.get(r, "fxshow");
                u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                    T.unqueued || z()
                }), T.unqueued++, ne.always(function() {
                    ne.always(function() {
                        T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                    })
                }));
                for (p in s)
                    if (w = s[p], ko.test(w)) {
                        if (delete s[p], x = x || w === "toggle", w === (ot ? "hide" : "show"))
                            if (w === "show" && je && je[p] !== void 0) ot = !0;
                            else continue;
                        ce[p] = je && je[p] || d.style(r, p)
                    } if (U = !d.isEmptyObject(s), !(!U && d.isEmptyObject(ce))) {
                    be && r.nodeType === 1 && (u.overflow = [qe.overflow, qe.overflowX, qe.overflowY], Z = je && je.display, Z == null && (Z = he.get(r, "display")), le = d.css(r, "display"), le === "none" && (Z ? le = Z : (G([r], !0), Z = r.style.display || Z, le = d.css(r, "display"), G([r]))), (le === "inline" || le === "inline-block" && Z != null) && d.css(r, "float") === "none" && (U || (ne.done(function() {
                        qe.display = Z
                    }), Z == null && (le = qe.display, Z = le === "none" ? "" : le)), qe.display = "inline-block")), u.overflow && (qe.overflow = "hidden", ne.always(function() {
                        qe.overflow = u.overflow[0], qe.overflowX = u.overflow[1], qe.overflowY = u.overflow[2]
                    })), U = !1;
                    for (p in ce) U || (je ? "hidden" in je && (ot = je.hidden) : je = he.access(r, "fxshow", {
                        display: Z
                    }), x && (je.hidden = !ot), ot && G([r], !0), ne.done(function() {
                        ot || G([r]), he.remove(r, "fxshow");
                        for (p in ce) d.style(r, p, ce[p])
                    })), U = ys(ot ? je[p] : 0, p, ne), p in je || (je[p] = U.start, ot && (U.end = U.start, U.start = 0))
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

            function Cn(r, s, u) {
                var p, w, x = 0,
                    T = Cn.prefilters.length,
                    z = d.Deferred().always(function() {
                        delete U.elem
                    }),
                    U = function() {
                        if (w) return !1;
                        for (var be = zt || Mr(), ne = Math.max(0, Z.startTime + Z.duration - be), ce = ne / Z.duration || 0, qe = 1 - ce, ot = 0, je = Z.tweens.length; ot < je; ot++) Z.tweens[ot].run(qe);
                        return z.notifyWith(r, [Z, qe, ne]), qe < 1 && je ? ne : (je || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
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
                        startTime: zt || Mr(),
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
                    if (p = Cn.prefilters[x].call(Z, r, le, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
                return d.map(le, ys, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(U, {
                    elem: r,
                    anim: Z,
                    queue: Z.opts.queue
                })), Z
            }
            d.Animation = d.extend(Cn, {
                    tweeners: {
                        "*": [function(r, s) {
                            var u = this.createTween(r, s);
                            return V(u.elem, r, yt.exec(s), u), u
                        }]
                    },
                    tweener: function(r, s) {
                        re(r) ? (s = r, r = ["*"]) : r = r.match(ke);
                        for (var u, p = 0, w = r.length; p < w; p++) u = r[p], Cn.tweeners[u] = Cn.tweeners[u] || [], Cn.tweeners[u].unshift(s)
                    },
                    prefilters: [Ao],
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
                        return this.filter(j).css("opacity", 0).show().end().animate({
                            opacity: s
                        }, r, u, p)
                    },
                    animate: function(r, s, u, p) {
                        var w = d.isEmptyObject(r),
                            x = d.speed(s, u, p),
                            T = function() {
                                var z = Cn(this, d.extend({}, r), x);
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
                                for (x in z) z[x] && z[x].stop && To.test(x) && p(z[x]);
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
                    for (zt = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                    u.length || d.fx.stop(), zt = void 0
                }, d.fx.timer = function(r) {
                    d.timers.push(r), d.fx.start()
                }, d.fx.interval = 13, d.fx.start = function() {
                    qi || (qi = !0, Ir())
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
            var Dr, _i = d.expr.attrHandle;
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
            }), Dr = {
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
            var Oo = /^(?:input|select|textarea|button)$/i,
                Ro = /^(?:a|area)$/i;
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
                            return s ? parseInt(s, 10) : Oo.test(r.nodeName) || Ro.test(r.nodeName) && r.href ? 0 : -1
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

            function Lr(r) {
                return Array.isArray(r) ? r : typeof r == "string" ? r.match(ke) || [] : []
            }
            d.fn.extend({
                addClass: function(r) {
                    var s, u, p, w, x, T, z, U = 0;
                    if (re(r)) return this.each(function(Z) {
                        d(this).addClass(r.call(this, Z, Yn(this)))
                    });
                    if (s = Lr(r), s.length) {
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
                    if (s = Lr(r), s.length) {
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
                            for (x = 0, T = d(this), z = Lr(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
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
            var Io = /\r/g;
            d.fn.extend({
                val: function(r) {
                    var s, u, p, w = this[0];
                    return arguments.length ? (p = re(r), this.each(function(x) {
                        var T;
                        this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                            return z == null ? "" : z + ""
                        })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                    })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(Io, "") : u == null ? "" : u)) : void 0
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
            var Pr = /^(?:focusinfocus|focusoutblur)$/,
                Jn = function(r) {
                    r.stopPropagation()
                };
            d.extend(d.event, {
                trigger: function(r, s, u, p) {
                    var w, x, T, z, U, Z, le, be, ne = [u || P],
                        ce = $.call(r, "type") ? r.type : r,
                        qe = $.call(r, "namespace") ? r.namespace.split(".") : [];
                    if (x = be = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Pr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (qe = ce.split("."), ce = qe.shift(), qe.sort()), U = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = qe.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + qe.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                        if (!p && !le.noBubble && !m(u)) {
                            for (z = le.delegateType || ce, Pr.test(z + ce) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                            T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                        }
                        for (w = 0;
                            (x = ne[w++]) && !r.isPropagationStopped();) be = x, r.type = w > 1 ? z : le.bindType || ce, Z = (he.get(x, "events") || Object.create(null))[r.type] && he.get(x, "handle"), Z && Z.apply(x, s), Z = U && x[U], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                        return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), s) === !1) && te(u) && U && re(u[ce]) && !m(u) && (T = u[U], T && (u[U] = null), d.event.triggered = ce, r.isPropagationStopped() && be.addEventListener(ce, Jn), u[ce](), r.isPropagationStopped() && be.removeEventListener(ce, Jn), d.event.triggered = void 0, T && (u[U] = T)), r.result
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
                Vr = {
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
            var Mo = /\[\]$/,
                bs = /\r?\n/g,
                Do = /^(?:submit|button|image|reset|file)$/i,
                Lo = /^(?:input|select|textarea|keygen)/i;

            function Nr(r, s, u, p) {
                var w;
                if (Array.isArray(s)) d.each(s, function(x, T) {
                    u || Mo.test(r) ? p(r, T) : Nr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
                });
                else if (!u && se(s) === "object")
                    for (w in s) Nr(r + "[" + w + "]", s[w], u, p);
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
                    for (u in r) Nr(u, r[u], s, w);
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
                        return this.name && !d(this).is(":disabled") && Lo.test(this.nodeName) && !Do.test(r) && (this.checked || !fe.test(r))
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
            var Po = /%20/g,
                Vo = /#.*$/,
                No = /([?&])_=[^&]*/,
                Qn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                Cs = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Bo = /^(?:GET|HEAD)$/,
                $o = /^\/\//,
                xs = {},
                Br = {},
                Es = "*/".concat("*"),
                $r = P.createElement("a");
            $r.href = Si.href;

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
                    x = r === Br;

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

            function jo(r, s, u) {
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

            function Fo(r, s, u, p) {
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
                ajaxTransport: _s(Br),
                ajax: function(r, s) {
                    typeof r == "object" && (s = r, r = void 0), s = s || {};
                    var u, p, w, x, T, z, U, Z, le, be, ne = d.ajaxSetup({}, s),
                        ce = ne.context || ne,
                        qe = ne.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                        ot = d.Deferred(),
                        je = d.Callbacks("once memory"),
                        Ut = ne.statusCode || {},
                        Vt = {},
                        hn = {},
                        St = "canceled",
                        nt = {
                            readyState: 0,
                            getResponseHeader: function(ft) {
                                var Mt;
                                if (U) {
                                    if (!x)
                                        for (x = {}; Mt = Qn.exec(w);) x[Mt[1].toLowerCase() + " "] = (x[Mt[1].toLowerCase() + " "] || []).concat(Mt[2]);
                                    Mt = x[ft.toLowerCase() + " "]
                                }
                                return Mt == null ? null : Mt.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return U ? w : null
                            },
                            setRequestHeader: function(ft, Mt) {
                                return U == null && (ft = hn[ft.toLowerCase()] = hn[ft.toLowerCase()] || ft, Vt[ft] = Mt), this
                            },
                            overrideMimeType: function(ft) {
                                return U == null && (ne.mimeType = ft), this
                            },
                            statusCode: function(ft) {
                                var Mt;
                                if (ft)
                                    if (U) nt.always(ft[nt.status]);
                                    else
                                        for (Mt in ft) Ut[Mt] = [Ut[Mt], ft[Mt]];
                                return this
                            },
                            abort: function(ft) {
                                var Mt = ft || St;
                                return u && u.abort(Mt), an(0, Mt), this
                            }
                        };
                    if (ot.promise(nt), ne.url = ((r || ne.url || Si.href) + "").replace($o, Si.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(ke) || [""], ne.crossDomain == null) {
                        z = P.createElement("a");
                        try {
                            z.href = ne.url, z.href = z.href, ne.crossDomain = $r.protocol + "//" + $r.host != z.protocol + "//" + z.host
                        } catch {
                            ne.crossDomain = !0
                        }
                    }
                    if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), Ss(xs, ne, s, nt), U) return nt;
                    Z = d.event && ne.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Bo.test(ne.type), p = ne.url.replace(Vo, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Po, "+")) : (be = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Xi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(No, "$1"), be = (Xi.test(p) ? "&" : "?") + "_=" + Vr.guid++ + be), ne.url = p + be), ne.ifModified && (d.lastModified[p] && nt.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && nt.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && nt.setRequestHeader("Content-Type", ne.contentType), nt.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + Es + "; q=0.01" : "") : ne.accepts["*"]);
                    for (le in ne.headers) nt.setRequestHeader(le, ne.headers[le]);
                    if (ne.beforeSend && (ne.beforeSend.call(ce, nt, ne) === !1 || U)) return nt.abort();
                    if (St = "abort", je.add(ne.complete), nt.done(ne.success), nt.fail(ne.error), u = Ss(Br, ne, s, nt), !u) an(-1, "No Transport");
                    else {
                        if (nt.readyState = 1, Z && qe.trigger("ajaxSend", [nt, ne]), U) return nt;
                        ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                            nt.abort("timeout")
                        }, ne.timeout));
                        try {
                            U = !1, u.send(Vt, an)
                        } catch (ft) {
                            if (U) throw ft;
                            an(-1, ft)
                        }
                    }

                    function an(ft, Mt, Ti, Ki) {
                        var dn, Zn, ei, ln, Ln, yn = Mt;
                        U || (U = !0, T && e.clearTimeout(T), u = void 0, w = Ki || "", nt.readyState = ft > 0 ? 4 : 0, dn = ft >= 200 && ft < 300 || ft === 304, Ti && (ln = jo(ne, nt, Ti)), !dn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), ln = Fo(ne, ln, nt, dn), dn ? (ne.ifModified && (Ln = nt.getResponseHeader("Last-Modified"), Ln && (d.lastModified[p] = Ln), Ln = nt.getResponseHeader("etag"), Ln && (d.etag[p] = Ln)), ft === 204 || ne.type === "HEAD" ? yn = "nocontent" : ft === 304 ? yn = "notmodified" : (yn = ln.state, Zn = ln.data, ei = ln.error, dn = !ei)) : (ei = yn, (ft || !yn) && (yn = "error", ft < 0 && (ft = 0))), nt.status = ft, nt.statusText = (Mt || yn) + "", dn ? ot.resolveWith(ce, [Zn, yn, nt]) : ot.rejectWith(ce, [nt, yn, ei]), nt.statusCode(Ut), Ut = void 0, Z && qe.trigger(dn ? "ajaxSuccess" : "ajaxError", [nt, ne, dn ? Zn : ei]), je.fireWith(ce, [nt, yn]), Z && (qe.trigger("ajaxComplete", [nt, ne]), --d.active || d.event.trigger("ajaxStop")))
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
            var zo = {
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
                                s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(zo[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
            var Fr = [],
                zr = /(=)\?(?=&|$)|\?\?/;
            d.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var r = Fr.pop() || d.expando + "_" + Vr.guid++;
                    return this[r] = !0, r
                }
            }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
                var p, w, x, T = r.jsonp !== !1 && (zr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && zr.test(r.data) && "data");
                if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(zr, "$1" + p) : r.jsonp !== !1 && (r.url += (Xi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                    return x || d.error(p + " was not called"), x[0]
                }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                    x = arguments
                }, u.always(function() {
                    w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, Fr.push(p)), x && re(w) && w(x[0]), x = w = void 0
                }), "script"
            }), K.createHTMLDocument = function() {
                var r = P.implementation.createHTMLDocument("").body;
                return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
            }(), d.parseHTML = function(r, s, u) {
                if (typeof r != "string") return [];
                typeof s == "boolean" && (u = s, s = !1);
                var p, w, x;
                return s || (K.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = Fe.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = Mn([r], s, x), x && x.length && d(x).remove(), d.merge([], w.childNodes))
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
                        var z;
                        if (m(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
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
                            return m(U) ? p.indexOf("outer") === 0 ? U["inner" + r] : U.document.documentElement["client" + r] : U.nodeType === 9 ? (be = U.documentElement, Math.max(U.body["scroll" + r], be["scroll" + r], U.body["offset" + r], be["offset" + r], be["client" + r])) : le === void 0 ? d.css(U, Z, z) : d.style(U, Z, le, z)
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
            }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = Y, d.isFunction = re, d.isWindow = m, d.camelCase = N, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
                var s = d.type(r);
                return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
            }, d.trim = function(r) {
                return r == null ? "" : (r + "").replace(ks, "")
            };
            var Uo = e.jQuery,
                Ho = e.$;
            return d.noConflict = function(r) {
                return e.$ === d && (e.$ = Ho), r && e.jQuery === d && (e.jQuery = Uo), d
            }, typeof n > "u" && (e.jQuery = e.$ = d), d
        })
    }(ia)), ia.exports
}
var Pe = kc(),
    Ke = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Bi.exports,
                a;
            try {
                a = kc()
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
                        return function(_, O, L) {
                            return i[l](this[g], I(_, this), O, L)
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
                return i.isFunction(E) ? E : i.isObject(E) && !l._isModel(E) ? M(E) : i.isString(E) ? function(g) {
                    return g.get(E)
                } : E
            },
            M = function(E) {
                var l = i.matches(E);
                return function(g) {
                    return l(g.attributes)
                }
            },
            $ = n.Events = {},
            J = /\s+/,
            ie = function(E, l, g, _, O) {
                var L = 0,
                    N;
                if (g && typeof g == "object")
                    for (_ !== void 0 && ("context" in O) && O.context === void 0 && (O.context = _), N = i.keys(g); L < N.length; L++) l = ie(E, l, N[L], g[N[L]], O);
                else if (g && J.test(g))
                    for (N = g.split(J); L < N.length; L++) l = E(l, N[L], _, O);
                else l = E(l, g, _, O);
                return l
            };
        $.on = function(E, l, g) {
            return K(this, E, l, g)
        };
        var K = function(E, l, g, _, O) {
            if (E._events = ie(re, E._events || {}, l, g, {
                    context: _,
                    ctx: E,
                    listening: O
                }), O) {
                var L = E._listeners || (E._listeners = {});
                L[O.id] = O
            }
            return E
        };
        $.listenTo = function(E, l, g) {
            if (!E) return this;
            var _ = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                L = O[_];
            if (!L) {
                var N = this._listenId || (this._listenId = i.uniqueId("l"));
                L = O[_] = {
                    obj: E,
                    objId: _,
                    id: N,
                    listeningTo: O,
                    count: 0
                }
            }
            return K(E, l, g, this, L), this
        };
        var re = function(E, l, g, _) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    L = _.context,
                    N = _.ctx,
                    te = _.listening;
                te && te.count++, O.push({
                    callback: g,
                    context: L,
                    ctx: L || N,
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
            for (var O = E ? [E._listenId] : i.keys(_), L = 0; L < O.length; L++) {
                var N = _[O[L]];
                if (!N) break;
                N.obj.off(l, g, this)
            }
            return this
        };
        var m = function(E, l, g, _) {
            if (!!E) {
                var O = 0,
                    L, N = _.context,
                    te = _.listeners;
                if (!l && !g && !N) {
                    for (var Se = i.keys(te); O < Se.length; O++) L = te[Se[O]], delete te[L.id], delete L.listeningTo[L.objId];
                    return
                }
                for (var he = l ? [l] : i.keys(E); O < he.length; O++) {
                    l = he[O];
                    var Ie = E[l];
                    if (!Ie) break;
                    for (var Me = [], rt = 0; rt < Ie.length; rt++) {
                        var xt = Ie[rt];
                        g && g !== xt.callback && g !== xt.callback._callback || N && N !== xt.context ? Me.push(xt) : (L = xt.listening, L && --L.count === 0 && (delete te[L.id], delete L.listeningTo[L.objId]))
                    }
                    Me.length ? E[l] = Me : delete E[l]
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
                        L = E.all;
                    O && L && (L = L.slice()), O && ae(O, _), L && ae(L, [l].concat(_))
                }
                return E
            },
            ae = function(E, l) {
                var g, _ = -1,
                    O = E.length,
                    L = l[0],
                    N = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, L);
                        return;
                    case 2:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, L, N);
                        return;
                    case 3:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, L, N, te);
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
                    L = g.silent,
                    N = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var Se = this.attributes,
                    he = this.changed,
                    Ie = this._previousAttributes;
                for (var Me in _) l = _[Me], i.isEqual(Se[Me], l) || N.push(Me), i.isEqual(Ie[Me], l) ? delete he[Me] : he[Me] = l, O ? delete Se[Me] : Se[Me] = l;
                if (this.idAttribute in _ && (this.id = this.get(this.idAttribute)), !L) {
                    N.length && (this._pending = g);
                    for (var rt = 0; rt < N.length; rt++) this.trigger("change:" + N[rt], this, Se[N[rt]], g)
                }
                if (te) return this;
                if (!L)
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
                var L = this,
                    N = g.success,
                    te = this.attributes;
                g.success = function(Ie) {
                    L.attributes = te;
                    var Me = g.parse ? L.parse(Ie, g) : Ie;
                    if (O && (Me = i.extend({}, _, Me)), Me && !L.set(Me, g)) return !1;
                    N && N.call(g.context, L, Ie, g), L.trigger("sync", L, Ie, g)
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
                var L = !1;
                return this.isNew() ? i.defer(E.success) : (qt(this, E), L = this.sync("delete", this, E)), _ || O(), L
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
            Le = function(E, l, g) {
                g = Math.min(Math.max(g, 0), E.length);
                var _ = Array(E.length - g),
                    O = l.length,
                    L;
                for (L = 0; L < _.length; L++) _[L] = E[L + g];
                for (L = 0; L < O; L++) E[L + g] = l[L];
                for (L = 0; L < _.length; L++) E[L + O + g] = _[L]
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
                        L = [],
                        N = [],
                        te = [],
                        Se = {},
                        he = l.add,
                        Ie = l.merge,
                        Me = l.remove,
                        rt = !1,
                        xt = this.comparator && _ == null && l.sort !== !1,
                        sn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (Ie && ct !== bt) {
                                var Qt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Qt = bt.parse(Qt, l)), bt.set(Qt, l), N.push(bt), xt && !rt && (rt = bt.hasChanged(sn))
                            }
                            Se[bt.cid] || (Se[bt.cid] = !0, O.push(bt)), E[yt] = bt
                        } else he && (ct = E[yt] = this._prepareModel(ct, l), ct && (L.push(ct), this._addReference(ct, l), Se[ct.cid] = !0, O.push(ct)))
                    }
                    if (Me) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], Se[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Ze = !1,
                        Lt = !xt && he && Me;
                    if (O.length && Lt ? (Ze = this.length !== O.length || i.some(this.models, function(j, V) {
                            return j !== O[V]
                        }), this.models.length = 0, Le(this.models, O, 0), this.length = this.models.length) : L.length && (xt && (rt = !0), Le(this.models, L, _ == null ? this.length : _), this.length = this.models.length), rt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < L.length; yt++) _ != null && (l.index = _ + yt), ct = L[yt], ct.trigger("add", ct, this, l);
                        (rt || Ze) && this.trigger("sort", this, l), (L.length || te.length || N.length) && (l.changes = {
                            added: L,
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
                return l.success = function(L, N, te) {
                    g && _.add(L, te), O && O.call(te.context, L, N, te)
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
                        var L = this.indexOf(O);
                        this.models.splice(L, 1), this.length--, delete this._byId[O.cid];
                        var N = this.modelId(O.attributes);
                        N != null && delete this._byId[N], l.silent || (l.index = L, O.trigger("remove", O, this, l)), g.push(O), this._removeReference(O, l)
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
                            L = this.modelId(l.attributes);
                        O !== L && (O != null && delete this._byId[O], L != null && (this._byId[L] = l))
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
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, Fe)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            Y = /^(\S+)\s*(.*)$/,
            Fe = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Be.prototype, $, {
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
                        var _ = l.match(Y);
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
            if (g.url || (O.url = i.result(l, "url") || Bt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (O.contentType = "application/json", O.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (O.contentType = "application/x-www-form-urlencoded", O.data = O.data ? {
                    model: O.data
                } : {}), g.emulateHTTP && (_ === "PUT" || _ === "DELETE" || _ === "PATCH")) {
                O.type = "POST", g.emulateJSON && (O.data._method = _);
                var L = g.beforeSend;
                g.beforeSend = function(Se) {
                    if (Se.setRequestHeader("X-HTTP-Method-Override", _), L) return L.apply(this, arguments)
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
                    var L = _._extractParameters(E, O);
                    _.execute(g, L, l) !== !1 && (_.trigger.apply(_, ["route:" + l].concat(L)), _.trigger("route", l, L), n.history.trigger("route", _, l, L))
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
            $e = /^\/+|\/+$/g,
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
                        _ = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    _.document.open(), _.document.close(), _.location.hash = "#" + this.fragment
                }
                var O = window.addEventListener || function(L, N) {
                    return attachEvent("on" + L, N)
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
        var dt = function(E, l) {
            var g = this,
                _;
            return E && i.has(E, "constructor") ? _ = E.constructor : _ = function() {
                return g.apply(this, arguments)
            }, i.extend(_, g, l), _.prototype = i.create(g.prototype, E), _.prototype.constructor = _, _.__super__ = g.prototype, _
        };
        se.extend = d.extend = oe.extend = Be.extend = _e.extend = dt;
        var Bt = function() {
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
})(Ke);
var Tc = {
        exports: {}
    },
    ra = {
        exports: {}
    },
    xl;

function Sh() {
    return xl || (xl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Bi.exports, Ke)
        })(vt, function(n, i) {
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
                    for (var Ee = q.split(S), Ae = 0, Le = Ee.length; Ae < Le; Ae++) se[Ee[Ae]] = m[P].apply(m, [Ee[Ae]].concat(ae));
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
            var M = {};

            function $(m) {
                return M[m] || (M[m] = n.bind(v.log, v, m))
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
                    return q._tunedIn = !1, q.off("all", $(P)), delete M[P], this
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
            var ie, K, re = [i.Events, v.Requests];
            return n.each(re, function(m) {
                n.each(m, function(P, q) {
                    v[q] = function(ae) {
                        return K = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[q].apply(ie, K)
                    }
                })
            }), v.reset = function(m) {
                var P = m ? [this._channels[m]] : this._channels;
                n.each(P, function(q) {
                    q.reset()
                })
            }, v
        })
    }(ra)), ra.exports
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
        t.exports = i(Ke, Bi.exports, Sh())
    })(vt, function(n, i, a) {
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
            M = function(o, C) {
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

        function K(y, o, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ie, K)
        });

        function m(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            var Q = re(y),
                Ce = $.call(this, Q),
                We = void 0;
            return i.isFunction(Ce) && (We = Ce.apply(this, C)), this.trigger.apply(this, arguments), We
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

        function Le() {
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

        function Fe() {
            Ae(this)
        }

        function H() {
            Ee(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Le,
                attach: lt,
                "before:detach": Be,
                detach: Y,
                "before:render": Fe,
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
            Ce.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(Ce, function(We) {
                var It = y[We];
                if (!It) throw new we('Method "' + We + '" was configured as an event handler, but does not exist.');
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
            qt = {
                normalizeMethods: J,
                _setOptions: Bt,
                mergeOptions: M,
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
                unbindRequests: dt
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

        function L(y, o) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(tt.Behaviors.behaviorsLookup) ? tt.Behaviors.behaviorsLookup(y, o)[o] : tt.Behaviors.behaviorsLookup[o]
        }

        function N(y, o) {
            return i.chain(o).map(function(C, A) {
                var Q = L(C, A),
                    Ce = C === Q ? {} : C,
                    We = new Q(Ce, y),
                    It = N(y, i.result(We, "behaviors"));
                return [We].concat(It)
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
            Me = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function rt(y) {
            return !!Me[y]
        }

        function xt(y, o) {
            return Me[y] = o
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
                    return i.reduce(C, function(Q, Ce, We) {
                        return We = Ie(We, "trig" + A.cid), Q[We] = sn(o, Ce), Q
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(A, Q, Ce) {
                    var We = bt(Ce, C);
                    return A[We] = Q, A
                }, {})
            },
            bt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Qt = function y(o, C, A) {
                return i.each(o, function(Q, Ce) {
                    i.isString(Q) ? o[Ce] = bt(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(We) {
                        var It = Q[We];
                        i.isString(It) && (Q[We] = bt(It, C))
                    }))
                }), o
            },
            Ze = {
                normalizeUIKeys: function(o) {
                    var C = this._getUIBindings();
                    return yt(o, C)
                },
                normalizeUIString: function(o) {
                    var C = this._getUIBindings();
                    return bt(o, C)
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

        function Lt(y) {
            return y instanceof n.$ ? y : n.$(y)
        }

        function j(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var V = {
                createBuffer: function() {
                    return document.createDocumentFragment()
                },
                getEl: function(o) {
                    return Lt(o)
                },
                findEl: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    return A.find(C)
                },
                hasEl: function(o, C) {
                    return o.contains(C && C.parentNode)
                },
                detachEl: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(o);
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
                                We = C.nextSibling;
                            A.insertBefore(C, Ce), Q.insertBefore(o, We)
                        }
                    }
                },
                setContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Lt(o);
                    A.html(C)
                },
                appendContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Q = A._$el,
                        Ce = Q === void 0 ? Lt(o) : Q,
                        We = A._$contents,
                        It = We === void 0 ? Lt(C) : We;
                    Ce.append(It)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Lt(o);
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
                    var We = this._childViewTriggers;
                    We && i.isString(We[o]) && this.triggerMethod.apply(this, [We[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Xt = It + ":" + o;
                        this.triggerMethod.apply(this, [Xt].concat(Q))
                    }
                }
            };
        i.extend(W, te, qt, Se, ct, Ze);

        function D(y) {
            y._isRendered || (y.supportsRenderLifecycle || P(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, P(y, "render", y)))
        }

        function G(y) {
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
                    return new Vn(C)
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
                    return o._isDestroyed || (o._shouldDisableEvents = this._shouldDisableMonitoring(), G(o)), o
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
                setDomApi: j
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
                    return i.reduce(o, function(Q, Ce, We) {
                        return Q[We] = Ve(Ce, A), C._addRegion(Q[We], We), Q
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
                    for (var A = this.getRegion(o), Q = arguments.length, Ce = Array(Q > 2 ? Q - 2 : 0), We = 2; We < Q; We++) Ce[We - 2] = arguments[We];
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
            Mn = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Vn = n.View.extend({
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Mn), oe(this), this._initBehaviors(), this._initRegions();
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
                setDomApi: j
            });
        i.extend(Vn.prototype, W, Ft);
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
        var Tr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            Tn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Tr), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
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
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, G(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
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
                        We = Q && Ce && !A;
                    if (We) {
                        var It = this._filteredSortedModels();
                        this.filter = o;
                        var Xt = this._filteredSortedModels();
                        this._applyModelDeltas(Xt, It)
                    } else this.filter = o;
                    return this
                },
                removeFilter: function(o) {
                    return this.setFilter(null, o)
                },
                _applyModelDeltas: function(o, C) {
                    var A = this,
                        Q = {};
                    i.each(o, function(We, It) {
                        var Xt = !A.children.findByModel(We);
                        Xt && A._onCollectionAdd(We, A.collection, {
                            at: It
                        }), Q[We.cid] = !0
                    });
                    var Ce = i.filter(C, function(We) {
                        return !Q[We.cid] && A.children.findByModel(We)
                    });
                    this._removeChildModels(Ce)
                },
                reorder: function() {
                    var o = this,
                        C = this.children,
                        A = this._filteredSortedModels();
                    if (!A.length && this._showingEmptyView) return this;
                    var Q = i.some(A, function(Xt) {
                        return !C.findByModel(Xt)
                    });
                    if (Q) this.render();
                    else {
                        var Ce = [],
                            We = i.reduce(this.children._views, function(Xt, Wn) {
                                var Nn = i.indexOf(A, Wn.model);
                                return Nn === -1 ? (Ce.push(Wn.model), Xt) : (Wn._index = Nn, Xt[Nn] = Wn.el, Xt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(We, function(Xt) {
                            o.Dom.appendContents(It, Xt)
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
                            var We = o.children.findByModel(Q);
                            return !We || We._index !== Ce
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
                setDomApi: j
            });
        i.extend(Tn.prototype, W);
        var on = function() {
            this._init()
        };
        Dn(on.prototype, "_views");

        function Ar(y, o) {
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
                return typeof o == "string" ? (o = i.partial(Ar, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, C)) : this._views.sort(i.bind(o, C))
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
        var Or = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            wi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Or), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
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
                    return i.each(this.children._views, function(We, It, Xt) {
                        (C.call(o, We, It, Xt) ? Q : Ce).push(We)
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
                    o._isDestroyed || (o._shouldDisableEvents = this.monitorViewEvents === !1, G(o))
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
                setDomApi: j
            });
        i.extend(wi.prototype, W);
        var Fi = ["childViewContainer", "template", "templateContext"],
            bi = Tn.extend({
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
            Ci = i.pick(Vn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
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
        i.extend(Ui.prototype, Se, ct, Ze);
        var vn = ["region", "regionClass"],
            Hi = g.extend({
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
                triggerMethod: m
            });
        i.extend(qn.prototype, qt);

        function Gi() {
            throw new we({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var Ei = n.Marionette,
            tt = n.Marionette = {};
        return tt.noConflict = function() {
            return n.Marionette = Ei, this
        }, tt.bindEvents = v(_e), tt.unbindEvents = v(ke), tt.bindRequests = v(Qe), tt.unbindRequests = v(dt), tt.mergeOptions = v(M), tt.getOption = v($), tt.normalizeMethods = v(J), tt.extend = S, tt.isNodeAttached = I, tt.deprecate = k, tt.triggerMethod = v(m), tt.triggerMethodOn = P, tt.isEnabled = rt, tt.setEnabled = xt, tt.monitorViewEvents = oe, tt.Behaviors = {}, tt.Behaviors.behaviorsLookup = Gi, tt.Application = Hi, tt.AppRouter = qn, tt.Renderer = Je, tt.TemplateCache = _, tt.View = Vn, tt.CollectionView = Tn, tt.NextCollectionView = wi, tt.CompositeView = bi, tt.Behavior = Ui, tt.Region = pe, tt.Error = we, tt.Object = g, tt.DEV_MODE = !1, tt.FEATURES = Me, tt.VERSION = f, tt.DomApi = V, tt.setDomApi = function(y) {
            Tn.setDomApi(y), bi.setDomApi(y), wi.setDomApi(y), pe.setDomApi(y), Vn.setDomApi(y)
        }, tt
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
})(Tc);
const Ct = Tc.exports;
class kh {
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

function Th() {
    this.__data__ = [], this.size = 0
}
var Ah = Th;

function Oh(t, e) {
    return t === e || t !== t && e !== e
}
var po = Oh,
    Rh = po;

function Ih(t, e) {
    for (var n = t.length; n--;)
        if (Rh(t[n][0], e)) return n;
    return -1
}
var go = Ih,
    Mh = go,
    Dh = Array.prototype,
    Lh = Dh.splice;

function Ph(t) {
    var e = this.__data__,
        n = Mh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Lh.call(e, n, 1), --this.size, !0
}
var Vh = Ph,
    Nh = go;

function Bh(t) {
    var e = this.__data__,
        n = Nh(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var $h = Bh,
    jh = go;

function Fh(t) {
    return jh(this.__data__, t) > -1
}
var zh = Fh,
    Uh = go;

function Hh(t, e) {
    var n = this.__data__,
        i = Uh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Gh = Hh,
    qh = Ah,
    Wh = Vh,
    Xh = $h,
    Kh = zh,
    Yh = Gh;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = qh;
Cr.prototype.delete = Wh;
Cr.prototype.get = Xh;
Cr.prototype.has = Kh;
Cr.prototype.set = Yh;
var mo = Cr,
    Jh = mo;

function Qh() {
    this.__data__ = new Jh, this.size = 0
}
var Zh = Qh;

function ed(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var td = ed;

function nd(t) {
    return this.__data__.get(t)
}
var id = nd;

function rd(t) {
    return this.__data__.has(t)
}
var sd = rd,
    od = typeof vt == "object" && vt && vt.Object === Object && vt,
    Ac = od,
    ad = Ac,
    ld = typeof self == "object" && self && self.Object === Object && self,
    cd = ad || ld || Function("return this")(),
    xr = cd,
    ud = xr,
    hd = ud.Symbol,
    Oc = hd,
    El = Oc,
    Rc = Object.prototype,
    dd = Rc.hasOwnProperty,
    fd = Rc.toString,
    Yr = El ? El.toStringTag : void 0;

function pd(t) {
    var e = dd.call(t, Yr),
        n = t[Yr];
    try {
        t[Yr] = void 0;
        var i = !0
    } catch {}
    var a = fd.call(t);
    return i && (e ? t[Yr] = n : delete t[Yr]), a
}
var gd = pd,
    md = Object.prototype,
    vd = md.toString;

function yd(t) {
    return vd.call(t)
}
var wd = yd,
    _l = Oc,
    bd = gd,
    Cd = wd,
    xd = "[object Null]",
    Ed = "[object Undefined]",
    Sl = _l ? _l.toStringTag : void 0;

function _d(t) {
    return t == null ? t === void 0 ? Ed : xd : Sl && Sl in Object(t) ? bd(t) : Cd(t)
}
var vo = _d;

function Sd(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var ji = Sd,
    kd = vo,
    Td = ji,
    Ad = "[object AsyncFunction]",
    Od = "[object Function]",
    Rd = "[object GeneratorFunction]",
    Id = "[object Proxy]";

function Md(t) {
    if (!Td(t)) return !1;
    var e = kd(t);
    return e == Od || e == Rd || e == Ad || e == Id
}
var Ha = Md,
    Dd = xr,
    Ld = Dd["__core-js_shared__"],
    Pd = Ld,
    sa = Pd,
    kl = function() {
        var t = /[^.]+$/.exec(sa && sa.keys && sa.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Vd(t) {
    return !!kl && kl in t
}
var Nd = Vd,
    Bd = Function.prototype,
    $d = Bd.toString;

function jd(t) {
    if (t != null) {
        try {
            return $d.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Fd = jd,
    zd = Ha,
    Ud = Nd,
    Hd = ji,
    Gd = Fd,
    qd = /[\\^$.*+?()[\]{}|]/g,
    Wd = /^\[object .+?Constructor\]$/,
    Xd = Function.prototype,
    Kd = Object.prototype,
    Yd = Xd.toString,
    Jd = Kd.hasOwnProperty,
    Qd = RegExp("^" + Yd.call(Jd).replace(qd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Zd(t) {
    if (!Hd(t) || Ud(t)) return !1;
    var e = zd(t) ? Qd : Wd;
    return e.test(Gd(t))
}
var ef = Zd;

function tf(t, e) {
    return t == null ? void 0 : t[e]
}
var nf = tf,
    rf = ef,
    sf = nf;

function of(t, e) {
    var n = sf(t, e);
    return rf(n) ? n : void 0
}
var Ga = of,
    af = Ga,
    lf = xr,
    cf = af(lf, "Map"),
    Ic = cf,
    uf = Ga,
    hf = uf(Object, "create"),
    yo = hf,
    Tl = yo;

function df() {
    this.__data__ = Tl ? Tl(null) : {}, this.size = 0
}
var ff = df;

function pf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var gf = pf,
    mf = yo,
    vf = "__lodash_hash_undefined__",
    yf = Object.prototype,
    wf = yf.hasOwnProperty;

function bf(t) {
    var e = this.__data__;
    if (mf) {
        var n = e[t];
        return n === vf ? void 0 : n
    }
    return wf.call(e, t) ? e[t] : void 0
}
var Cf = bf,
    xf = yo,
    Ef = Object.prototype,
    _f = Ef.hasOwnProperty;

function Sf(t) {
    var e = this.__data__;
    return xf ? e[t] !== void 0 : _f.call(e, t)
}
var kf = Sf,
    Tf = yo,
    Af = "__lodash_hash_undefined__";

function Of(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = Tf && e === void 0 ? Af : e, this
}
var Rf = Of,
    If = ff,
    Mf = gf,
    Df = Cf,
    Lf = kf,
    Pf = Rf;

function Er(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Er.prototype.clear = If;
Er.prototype.delete = Mf;
Er.prototype.get = Df;
Er.prototype.has = Lf;
Er.prototype.set = Pf;
var Vf = Er,
    Al = Vf,
    Nf = mo,
    Bf = Ic;

function $f() {
    this.size = 0, this.__data__ = {
        hash: new Al,
        map: new(Bf || Nf),
        string: new Al
    }
}
var jf = $f;

function Ff(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var zf = Ff,
    Uf = zf;

function Hf(t, e) {
    var n = t.__data__;
    return Uf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var wo = Hf,
    Gf = wo;

function qf(t) {
    var e = Gf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Wf = qf,
    Xf = wo;

function Kf(t) {
    return Xf(this, t).get(t)
}
var Yf = Kf,
    Jf = wo;

function Qf(t) {
    return Jf(this, t).has(t)
}
var Zf = Qf,
    ep = wo;

function tp(t, e) {
    var n = ep(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var np = tp,
    ip = jf,
    rp = Wf,
    sp = Yf,
    op = Zf,
    ap = np;

function _r(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
_r.prototype.clear = ip;
_r.prototype.delete = rp;
_r.prototype.get = sp;
_r.prototype.has = op;
_r.prototype.set = ap;
var lp = _r,
    cp = mo,
    up = Ic,
    hp = lp,
    dp = 200;

function fp(t, e) {
    var n = this.__data__;
    if (n instanceof cp) {
        var i = n.__data__;
        if (!up || i.length < dp - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new hp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var pp = fp,
    gp = mo,
    mp = Zh,
    vp = td,
    yp = id,
    wp = sd,
    bp = pp;

function Sr(t) {
    var e = this.__data__ = new gp(t);
    this.size = e.size
}
Sr.prototype.clear = mp;
Sr.prototype.delete = vp;
Sr.prototype.get = yp;
Sr.prototype.has = wp;
Sr.prototype.set = bp;
var Cp = Sr,
    xp = Ga,
    Ep = function() {
        try {
            var t = xp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Mc = Ep,
    Ol = Mc;

function _p(t, e, n) {
    e == "__proto__" && Ol ? Ol(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var qa = _p,
    Sp = qa,
    kp = po;

function Tp(t, e, n) {
    (n !== void 0 && !kp(t[e], n) || n === void 0 && !(e in t)) && Sp(t, e, n)
}
var Dc = Tp;

function Ap(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), v = i(e), S = v.length; S--;) {
            var k = v[t ? S : ++a];
            if (n(f[k], k, f) === !1) break
        }
        return e
    }
}
var Op = Ap,
    Rp = Op,
    Ip = Rp(),
    Mp = Ip,
    Ta = {
        exports: {}
    };
(function(t, e) {
    var n = xr,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        v = f ? n.Buffer : void 0,
        S = v ? v.allocUnsafe : void 0;

    function k(I, M) {
        if (M) return I.slice();
        var $ = I.length,
            J = S ? S($) : new I.constructor($);
        return I.copy(J), J
    }
    t.exports = k
})(Ta, Ta.exports);
var Dp = xr,
    Lp = Dp.Uint8Array,
    Pp = Lp,
    Rl = Pp;

function Vp(t) {
    var e = new t.constructor(t.byteLength);
    return new Rl(e).set(new Rl(t)), e
}
var Np = Vp,
    Bp = Np;

function $p(t, e) {
    var n = e ? Bp(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var jp = $p;

function Fp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var zp = Fp,
    Up = ji,
    Il = Object.create,
    Hp = function() {
        function t() {}
        return function(e) {
            if (!Up(e)) return {};
            if (Il) return Il(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Gp = Hp;

function qp(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Wp = qp,
    Xp = Wp,
    Kp = Xp(Object.getPrototypeOf, Object),
    Lc = Kp,
    Yp = Object.prototype;

function Jp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || Yp;
    return t === n
}
var Pc = Jp,
    Qp = Gp,
    Zp = Lc,
    eg = Pc;

function tg(t) {
    return typeof t.constructor == "function" && !eg(t) ? Qp(Zp(t)) : {}
}
var ng = tg;

function ig(t) {
    return t != null && typeof t == "object"
}
var fs = ig,
    rg = vo,
    sg = fs,
    og = "[object Arguments]";

function ag(t) {
    return sg(t) && rg(t) == og
}
var lg = ag,
    Ml = lg,
    cg = fs,
    Vc = Object.prototype,
    ug = Vc.hasOwnProperty,
    hg = Vc.propertyIsEnumerable,
    dg = Ml(function() {
        return arguments
    }()) ? Ml : function(t) {
        return cg(t) && ug.call(t, "callee") && !hg.call(t, "callee")
    },
    Nc = dg,
    fg = Array.isArray,
    Bc = fg,
    pg = 9007199254740991;

function gg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= pg
}
var $c = gg,
    mg = Ha,
    vg = $c;

function yg(t) {
    return t != null && vg(t.length) && !mg(t)
}
var Wa = yg,
    wg = Wa,
    bg = fs;

function Cg(t) {
    return bg(t) && wg(t)
}
var xg = Cg,
    eo = {
        exports: {}
    };

function Eg() {
    return !1
}
var _g = Eg;
(function(t, e) {
    var n = xr,
        i = _g,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        v = f && f.exports === a,
        S = v ? n.Buffer : void 0,
        k = S ? S.isBuffer : void 0,
        I = k || i;
    t.exports = I
})(eo, eo.exports);
var Sg = vo,
    kg = Lc,
    Tg = fs,
    Ag = "[object Object]",
    Og = Function.prototype,
    Rg = Object.prototype,
    jc = Og.toString,
    Ig = Rg.hasOwnProperty,
    Mg = jc.call(Object);

function Dg(t) {
    if (!Tg(t) || Sg(t) != Ag) return !1;
    var e = kg(t);
    if (e === null) return !0;
    var n = Ig.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && jc.call(n) == Mg
}
var Lg = Dg,
    Pg = vo,
    Vg = $c,
    Ng = fs,
    Bg = "[object Arguments]",
    $g = "[object Array]",
    jg = "[object Boolean]",
    Fg = "[object Date]",
    zg = "[object Error]",
    Ug = "[object Function]",
    Hg = "[object Map]",
    Gg = "[object Number]",
    qg = "[object Object]",
    Wg = "[object RegExp]",
    Xg = "[object Set]",
    Kg = "[object String]",
    Yg = "[object WeakMap]",
    Jg = "[object ArrayBuffer]",
    Qg = "[object DataView]",
    Zg = "[object Float32Array]",
    em = "[object Float64Array]",
    tm = "[object Int8Array]",
    nm = "[object Int16Array]",
    im = "[object Int32Array]",
    rm = "[object Uint8Array]",
    sm = "[object Uint8ClampedArray]",
    om = "[object Uint16Array]",
    am = "[object Uint32Array]",
    Dt = {};
Dt[Zg] = Dt[em] = Dt[tm] = Dt[nm] = Dt[im] = Dt[rm] = Dt[sm] = Dt[om] = Dt[am] = !0;
Dt[Bg] = Dt[$g] = Dt[Jg] = Dt[jg] = Dt[Qg] = Dt[Fg] = Dt[zg] = Dt[Ug] = Dt[Hg] = Dt[Gg] = Dt[qg] = Dt[Wg] = Dt[Xg] = Dt[Kg] = Dt[Yg] = !1;

function lm(t) {
    return Ng(t) && Vg(t.length) && !!Dt[Pg(t)]
}
var cm = lm;

function um(t) {
    return function(e) {
        return t(e)
    }
}
var hm = um,
    Aa = {
        exports: {}
    };
(function(t, e) {
    var n = Ac,
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
})(Aa, Aa.exports);
var dm = cm,
    fm = hm,
    Dl = Aa.exports,
    Ll = Dl && Dl.isTypedArray,
    pm = Ll ? fm(Ll) : dm,
    Fc = pm;

function gm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var zc = gm,
    mm = qa,
    vm = po,
    ym = Object.prototype,
    wm = ym.hasOwnProperty;

function bm(t, e, n) {
    var i = t[e];
    (!(wm.call(t, e) && vm(i, n)) || n === void 0 && !(e in t)) && mm(t, e, n)
}
var Cm = bm,
    xm = Cm,
    Em = qa;

function _m(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, v = e.length; ++f < v;) {
        var S = e[f],
            k = i ? i(n[S], t[S], S, n, t) : void 0;
        k === void 0 && (k = t[S]), a ? Em(n, S, k) : xm(n, S, k)
    }
    return n
}
var Sm = _m;

function km(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var Tm = km,
    Am = 9007199254740991,
    Om = /^(?:0|[1-9]\d*)$/;

function Rm(t, e) {
    var n = typeof t;
    return e = e == null ? Am : e, !!e && (n == "number" || n != "symbol" && Om.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Uc = Rm,
    Im = Tm,
    Mm = Nc,
    Dm = Bc,
    Lm = eo.exports,
    Pm = Uc,
    Vm = Fc,
    Nm = Object.prototype,
    Bm = Nm.hasOwnProperty;

function $m(t, e) {
    var n = Dm(t),
        i = !n && Mm(t),
        a = !n && !i && Lm(t),
        f = !n && !i && !a && Vm(t),
        v = n || i || a || f,
        S = v ? Im(t.length, String) : [],
        k = S.length;
    for (var I in t)(e || Bm.call(t, I)) && !(v && (I == "length" || a && (I == "offset" || I == "parent") || f && (I == "buffer" || I == "byteLength" || I == "byteOffset") || Pm(I, k))) && S.push(I);
    return S
}
var jm = $m;

function Fm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var zm = Fm,
    Um = ji,
    Hm = Pc,
    Gm = zm,
    qm = Object.prototype,
    Wm = qm.hasOwnProperty;

function Xm(t) {
    if (!Um(t)) return Gm(t);
    var e = Hm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Wm.call(t, i)) || n.push(i);
    return n
}
var Km = Xm,
    Ym = jm,
    Jm = Km,
    Qm = Wa;

function Zm(t) {
    return Qm(t) ? Ym(t, !0) : Jm(t)
}
var Hc = Zm,
    ev = Sm,
    tv = Hc;

function nv(t) {
    return ev(t, tv(t))
}
var iv = nv,
    Pl = Dc,
    rv = Ta.exports,
    sv = jp,
    ov = zp,
    av = ng,
    Vl = Nc,
    Nl = Bc,
    lv = xg,
    cv = eo.exports,
    uv = Ha,
    hv = ji,
    dv = Lg,
    fv = Fc,
    Bl = zc,
    pv = iv;

function gv(t, e, n, i, a, f, v) {
    var S = Bl(t, n),
        k = Bl(e, n),
        I = v.get(k);
    if (I) {
        Pl(t, n, I);
        return
    }
    var M = f ? f(S, k, n + "", t, e, v) : void 0,
        $ = M === void 0;
    if ($) {
        var J = Nl(k),
            ie = !J && cv(k),
            K = !J && !ie && fv(k);
        M = k, J || ie || K ? Nl(S) ? M = S : lv(S) ? M = ov(S) : ie ? ($ = !1, M = rv(k, !0)) : K ? ($ = !1, M = sv(k, !0)) : M = [] : dv(k) || Vl(k) ? (M = S, Vl(S) ? M = pv(S) : (!hv(S) || uv(S)) && (M = av(k))) : $ = !1
    }
    $ && (v.set(k, M), a(M, k, i, f, v), v.delete(k)), Pl(t, n, M)
}
var mv = gv,
    vv = Cp,
    yv = Dc,
    wv = Mp,
    bv = mv,
    Cv = ji,
    xv = Hc,
    Ev = zc;

function Gc(t, e, n, i, a) {
    t !== e && wv(e, function(f, v) {
        if (a || (a = new vv), Cv(f)) bv(t, e, v, n, Gc, i, a);
        else {
            var S = i ? i(Ev(t, v), f, v + "", t, e, a) : void 0;
            S === void 0 && (S = f), yv(t, v, S)
        }
    }, xv)
}
var _v = Gc;

function Sv(t) {
    return t
}
var qc = Sv;

function kv(t, e, n) {
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
var Tv = kv,
    Av = Tv,
    $l = Math.max;

function Ov(t, e, n) {
    return e = $l(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = $l(i.length - e, 0), v = Array(f); ++a < f;) v[a] = i[e + a];
            a = -1;
            for (var S = Array(e + 1); ++a < e;) S[a] = i[a];
            return S[e] = n(v), Av(t, this, S)
        }
}
var Rv = Ov;

function Iv(t) {
    return function() {
        return t
    }
}
var Mv = Iv,
    Dv = Mv,
    jl = Mc,
    Lv = qc,
    Pv = jl ? function(t, e) {
        return jl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Dv(e),
            writable: !0
        })
    } : Lv,
    Vv = Pv,
    Nv = 800,
    Bv = 16,
    $v = Date.now;

function jv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = $v(),
            a = Bv - (i - n);
        if (n = i, a > 0) {
            if (++e >= Nv) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Fv = jv,
    zv = Vv,
    Uv = Fv,
    Hv = Uv(zv),
    Gv = Hv,
    qv = qc,
    Wv = Rv,
    Xv = Gv;

function Kv(t, e) {
    return Xv(Wv(t, e, qv), t + "")
}
var Yv = Kv,
    Jv = po,
    Qv = Wa,
    Zv = Uc,
    ey = ji;

function ty(t, e, n) {
    if (!ey(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Qv(n) && Zv(e, n.length) : i == "string" && e in n) ? Jv(n[e], t) : !1
}
var ny = ty,
    iy = Yv,
    ry = ny;

function sy(t) {
    return iy(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            v = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, v && ry(n[0], n[1], v) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var S = n[i];
            S && t(e, S, i, f)
        }
        return e
    })
}
var oy = sy,
    ay = _v,
    ly = oy,
    cy = ly(function(t, e, n) {
        ay(t, e, n)
    }),
    uy = cy;
class Oa {
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
        return uy(e[0], ...e)
    }
}
at(Oa, "locale"), at(Oa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const bl = class {
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
let jt = bl;
at(jt, "queryParams", new URLSearchParams(window.location.search)), at(jt, "getQueryParam", e => bl.queryParams.get(e)), at(jt, "sleep", e => new Promise(n => {
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
            namespace: (a = (i = jt.getQueryParam("namespace")) != null ? i : jt.getQueryParam("ns")) != null ? a : this.defaultNamespace,
            isDisabled: jt.queryParams.has("incognito") || jt.queryParams.has("nc")
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
        $i.setAsViewed(e), this.artifacts = this.list()
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
        const e = new Intl.DateTimeFormat(Oa.locale, {
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
                let M = f.categoryId;
                return M || (f.url.indexOf("Quiplash2") !== -1 ? M = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? M = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? M = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (M = "TriviaDeathResults")), {
                    id: I,
                    gameName: M,
                    date: S,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Ra = {
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
                M = ArrayBuffer.isView || function(H) {
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
                H = $(H), oe = J(oe);
                var Te = this.map[H];
                this.map[H] = Te ? Te + ", " + oe : oe
            }, K.prototype.delete = function(H) {
                delete this.map[$(H)]
            }, K.prototype.get = function(H) {
                return H = $(H), this.has(H) ? this.map[H] : null
            }, K.prototype.has = function(H) {
                return this.map.hasOwnProperty($(H))
            }, K.prototype.set = function(H, oe) {
                this.map[$(H)] = J(oe)
            }, K.prototype.forEach = function(H, oe) {
                for (var Te in this.map) this.map.hasOwnProperty(Te) && H.call(oe, this.map[Te], Te, this)
            }, K.prototype.keys = function() {
                var H = [];
                return this.forEach(function(oe, Te) {
                    H.push(Te)
                }), ie(H)
            }, K.prototype.values = function() {
                var H = [];
                return this.forEach(function(oe) {
                    H.push(oe)
                }), ie(H)
            }, K.prototype.entries = function() {
                var H = [];
                return this.forEach(function(oe, Te) {
                    H.push([Te, oe])
                }), ie(H)
            }, S.iterable && (K.prototype[Symbol.iterator] = K.prototype.entries);

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
                    this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : S.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : S.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : S.arrayBuffer && S.blob && k(H) ? (this._bodyArrayBuffer = se(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : S.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || M(H)) ? this._bodyArrayBuffer = se(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
                    return this.text().then(Le)
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

            function Le(H) {
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
            var Y = [301, 302, 303, 307, 308];
            Be.redirect = function(H, oe) {
                if (Y.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
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

            function Fe(H, oe) {
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
                        var $e = "response" in ue ? ue.response : ue.responseText;
                        Te(new Be($e, ke))
                    }, ue.onerror = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        we(new v.DOMException("Aborted", "AbortError"))
                    }, ue.open(ye.method, ye.url, !0), ye.credentials === "include" ? ue.withCredentials = !0 : ye.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && S.blob && (ue.responseType = "blob"), ye.headers.forEach(function(ke, $e) {
                        ue.setRequestHeader($e, ke)
                    }), ye.signal && (ye.signal.addEventListener("abort", _e), ue.onreadystatechange = function() {
                        ue.readyState === 4 && ye.signal.removeEventListener("abort", _e)
                    }), ue.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                })
            }
            return Fe.polyfill = !0, f.fetch || (f.fetch = Fe, f.Headers = K, f.Request = Ae, f.Response = Be), v.Headers = K, v.Request = Ae, v.Response = Be, v.fetch = Fe, Object.defineProperty(v, "__esModule", {
                value: !0
            }), v
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Ra, Ra.exports);
var hy = function() {
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
    Fl = typeof Symbol < "u" && Symbol,
    dy = hy,
    fy = function() {
        return typeof Fl != "function" || typeof Symbol != "function" || typeof Fl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : dy()
    },
    py = "Function.prototype.bind called on incompatible ",
    oa = Array.prototype.slice,
    gy = Object.prototype.toString,
    my = "[object Function]",
    vy = function(e) {
        var n = this;
        if (typeof n != "function" || gy.call(n) !== my) throw new TypeError(py + n);
        for (var i = oa.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var M = n.apply(this, i.concat(oa.call(arguments)));
                    return Object(M) === M ? M : this
                } else return n.apply(e, i.concat(oa.call(arguments)))
            }, v = Math.max(0, n.length - i.length), S = [], k = 0; k < v; k++) S.push("$" + k);
        if (a = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, a.prototype = new I, I.prototype = null
        }
        return a
    },
    yy = vy,
    Xa = Function.prototype.bind || yy,
    wy = Xa,
    by = wy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, vr = SyntaxError,
    Wc = Function,
    dr = TypeError,
    aa = function(t) {
        try {
            return Wc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Ni = Object.getOwnPropertyDescriptor;
if (Ni) try {
    Ni({}, "")
} catch {
    Ni = null
}
var la = function() {
        throw new dr
    },
    Cy = Ni ? function() {
        try {
            return arguments.callee, la
        } catch {
            try {
                return Ni(arguments, "callee").get
            } catch {
                return la
            }
        }
    }() : la,
    sr = fy(),
    ui = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    lr = {},
    xy = typeof Uint8Array > "u" ? mt : ui(Uint8Array),
    fr = {
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
        "%Function%": Wc,
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
        "%SyntaxError%": vr,
        "%ThrowTypeError%": Cy,
        "%TypedArray%": xy,
        "%TypeError%": dr,
        "%Uint8Array%": typeof Uint8Array > "u" ? mt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? mt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? mt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? mt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? mt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? mt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? mt : WeakSet
    },
    Ey = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = aa("async function () {}");
        else if (e === "%GeneratorFunction%") n = aa("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = aa("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = ui(a.prototype))
        }
        return fr[e] = n, n
    },
    zl = {
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
    ps = Xa,
    to = by,
    _y = ps.call(Function.call, Array.prototype.concat),
    Sy = ps.call(Function.apply, Array.prototype.splice),
    Ul = ps.call(Function.call, String.prototype.replace),
    no = ps.call(Function.call, String.prototype.slice),
    ky = ps.call(Function.call, RegExp.prototype.exec),
    Ty = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Ay = /\\(\\)?/g,
    Oy = function(e) {
        var n = no(e, 0, 1),
            i = no(e, -1);
        if (n === "%" && i !== "%") throw new vr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new vr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Ul(e, Ty, function(f, v, S, k) {
            a[a.length] = S ? Ul(k, Ay, "$1") : v || f
        }), a
    },
    Ry = function(e, n) {
        var i = e,
            a;
        if (to(zl, i) && (a = zl[i], i = "%" + a[0] + "%"), to(fr, i)) {
            var f = fr[i];
            if (f === lr && (f = Ey(i)), typeof f > "u" && !n) throw new dr("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new vr("intrinsic " + e + " does not exist!")
    },
    Ka = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new dr("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new dr('"allowMissing" argument must be a boolean');
        if (ky(/^%?[^%]*%?$/g, e) === null) throw new vr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = Oy(e),
            a = i.length > 0 ? i[0] : "",
            f = Ry("%" + a + "%", n),
            v = f.name,
            S = f.value,
            k = !1,
            I = f.alias;
        I && (a = I[0], Sy(i, _y([0, 1], I)));
        for (var M = 1, $ = !0; M < i.length; M += 1) {
            var J = i[M],
                ie = no(J, 0, 1),
                K = no(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || K === '"' || K === "'" || K === "`") && ie !== K) throw new vr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !$) && (k = !0), a += "." + J, v = "%" + a + "%", to(fr, v)) S = fr[v];
            else if (S != null) {
                if (!(J in S)) {
                    if (!n) throw new dr("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Ni && M + 1 >= i.length) {
                    var re = Ni(S, J);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? S = re.get : S = S[J]
                } else $ = to(S, J), S = S[J];
                $ && !k && (fr[v] = S)
            }
        }
        return S
    },
    Xc = {
        exports: {}
    };
(function(t) {
    var e = Xa,
        n = Ka,
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
})(Xc);
var Kc = Ka,
    Yc = Xc.exports,
    Iy = Yc(Kc("String.prototype.indexOf")),
    My = function(e, n) {
        var i = Kc(e, !!n);
        return typeof i == "function" && Iy(e, ".prototype.") > -1 ? Yc(i) : i
    };
const Dy = {},
    Ly = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Dy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Py = _h(Ly);
var Ya = typeof Map == "function" && Map.prototype,
    ca = Object.getOwnPropertyDescriptor && Ya ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    io = Ya && ca && typeof ca.get == "function" ? ca.get : null,
    Vy = Ya && Map.prototype.forEach,
    Ja = typeof Set == "function" && Set.prototype,
    ua = Object.getOwnPropertyDescriptor && Ja ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    ro = Ja && ua && typeof ua.get == "function" ? ua.get : null,
    Ny = Ja && Set.prototype.forEach,
    By = typeof WeakMap == "function" && WeakMap.prototype,
    is = By ? WeakMap.prototype.has : null,
    $y = typeof WeakSet == "function" && WeakSet.prototype,
    rs = $y ? WeakSet.prototype.has : null,
    jy = typeof WeakRef == "function" && WeakRef.prototype,
    Hl = jy ? WeakRef.prototype.deref : null,
    Fy = Boolean.prototype.valueOf,
    zy = Object.prototype.toString,
    Uy = Function.prototype.toString,
    Hy = String.prototype.match,
    Qa = String.prototype.slice,
    gi = String.prototype.replace,
    Gy = String.prototype.toUpperCase,
    Gl = String.prototype.toLowerCase,
    Jc = RegExp.prototype.test,
    ql = Array.prototype.concat,
    zn = Array.prototype.join,
    qy = Array.prototype.slice,
    Wl = Math.floor,
    Ia = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ha = Object.getOwnPropertySymbols,
    Ma = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    yr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    un = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === yr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Qc = Object.prototype.propertyIsEnumerable,
    Xl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Kl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Jc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Wl(-t) : Wl(t);
        if (i !== t) {
            var a = String(i),
                f = Qa.call(e, a.length + 1);
            return gi.call(a, n, "$&_") + "." + gi.call(gi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return gi.call(e, n, "$&_")
}
var Da = Py,
    Yl = Da.custom,
    Jl = eu(Yl) ? Yl : null,
    Wy = function t(e, n, i, a) {
        var f = n || {};
        if (hi(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (hi(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var v = hi(f, "customInspect") ? f.customInspect : !0;
        if (typeof v != "boolean" && v !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (hi(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (hi(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var S = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return nu(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return S ? Kl(e, k) : k
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return S ? Kl(e, I) : I
        }
        var M = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= M && M > 0 && typeof e == "object") return La(e) ? "[Array]" : "[Object]";
        var $ = hw(f, i);
        if (typeof a > "u") a = [];
        else if (tu(a, e) >= 0) return "[Circular]";

        function J(Fe, H, oe) {
            if (H && (a = qy.call(a), a.push(H)), oe) {
                var Te = {
                    depth: f.depth
                };
                return hi(f, "quoteStyle") && (Te.quoteStyle = f.quoteStyle), t(Fe, Te, i + 1, a)
            }
            return t(Fe, f, i + 1, a)
        }
        if (typeof e == "function" && !Ql(e)) {
            var ie = nw(e),
                K = Ns(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (K.length > 0 ? " { " + zn.call(K, ", ") + " }" : "")
        }
        if (eu(e)) {
            var re = yr ? gi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ma.call(e);
            return typeof e == "object" && !yr ? Jr(re) : re
        }
        if (lw(e)) {
            for (var m = "<" + Gl.call(String(e.nodeName)), P = e.attributes || [], q = 0; q < P.length; q++) m += " " + P[q].name + "=" + Zc(Xy(P[q].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Gl.call(String(e.nodeName)) + ">", m
        }
        if (La(e)) {
            if (e.length === 0) return "[]";
            var ae = Ns(e, J);
            return $ && !uw(ae) ? "[" + Pa(ae, $) + "]" : "[ " + zn.call(ae, ", ") + " ]"
        }
        if (Yy(e)) {
            var se = Ns(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !Qc.call(e, "cause") ? "{ [" + String(e) + "] " + zn.call(ql.call("[cause]: " + J(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + zn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && v) {
            if (Jl && typeof e[Jl] == "function" && Da) return Da(e, {
                depth: M - i
            });
            if (v !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (iw(e)) {
            var ve = [];
            return Vy.call(e, function(Fe, H) {
                ve.push(J(H, e, !0) + " => " + J(Fe, e))
            }), Zl("Map", io.call(e), ve, $)
        }
        if (ow(e)) {
            var d = [];
            return Ny.call(e, function(Fe) {
                d.push(J(Fe, e))
            }), Zl("Set", ro.call(e), d, $)
        }
        if (rw(e)) return da("WeakMap");
        if (aw(e)) return da("WeakSet");
        if (sw(e)) return da("WeakRef");
        if (Qy(e)) return Jr(J(Number(e)));
        if (ew(e)) return Jr(J(Ia.call(e)));
        if (Zy(e)) return Jr(Fy.call(e));
        if (Jy(e)) return Jr(J(String(e)));
        if (!Ky(e) && !Ql(e)) {
            var Ee = Ns(e, J),
                Ae = Xl ? Xl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Le = e instanceof Object ? "" : "null prototype",
                lt = !Ae && un && Object(e) === e && un in e ? Qa.call(vi(e), 8, -1) : Le ? "Object" : "",
                Be = Ae || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Y = Be + (lt || Le ? "[" + zn.call(ql.call([], lt || [], Le || []), ": ") + "] " : "");
            return Ee.length === 0 ? Y + "{}" : $ ? Y + "{" + Pa(Ee, $) + "}" : Y + "{ " + zn.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function Zc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function Xy(t) {
    return gi.call(String(t), /"/g, "&quot;")
}

function La(t) {
    return vi(t) === "[object Array]" && (!un || !(typeof t == "object" && un in t))
}

function Ky(t) {
    return vi(t) === "[object Date]" && (!un || !(typeof t == "object" && un in t))
}

function Ql(t) {
    return vi(t) === "[object RegExp]" && (!un || !(typeof t == "object" && un in t))
}

function Yy(t) {
    return vi(t) === "[object Error]" && (!un || !(typeof t == "object" && un in t))
}

function Jy(t) {
    return vi(t) === "[object String]" && (!un || !(typeof t == "object" && un in t))
}

function Qy(t) {
    return vi(t) === "[object Number]" && (!un || !(typeof t == "object" && un in t))
}

function Zy(t) {
    return vi(t) === "[object Boolean]" && (!un || !(typeof t == "object" && un in t))
}

function eu(t) {
    if (yr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Ma) return !1;
    try {
        return Ma.call(t), !0
    } catch {}
    return !1
}

function ew(t) {
    if (!t || typeof t != "object" || !Ia) return !1;
    try {
        return Ia.call(t), !0
    } catch {}
    return !1
}
var tw = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function hi(t, e) {
    return tw.call(t, e)
}

function vi(t) {
    return zy.call(t)
}

function nw(t) {
    if (t.name) return t.name;
    var e = Hy.call(Uy.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function tu(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function iw(t) {
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

function rw(t) {
    if (!is || !t || typeof t != "object") return !1;
    try {
        is.call(t, is);
        try {
            rs.call(t, rs)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function sw(t) {
    if (!Hl || !t || typeof t != "object") return !1;
    try {
        return Hl.call(t), !0
    } catch {}
    return !1
}

function ow(t) {
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

function aw(t) {
    if (!rs || !t || typeof t != "object") return !1;
    try {
        rs.call(t, rs);
        try {
            is.call(t, is)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function lw(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function nu(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return nu(Qa.call(t, 0, e.maxStringLength), e) + i
    }
    var a = gi.call(gi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, cw);
    return Zc(a, "single", e)
}

function cw(t) {
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

function Jr(t) {
    return "Object(" + t + ")"
}

function da(t) {
    return t + " { ? }"
}

function Zl(t, e, n, i) {
    var a = i ? Pa(n, i) : zn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function uw(t) {
    for (var e = 0; e < t.length; e++)
        if (tu(t[e], `
`) >= 0) return !1;
    return !0
}

function hw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = zn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: zn.call(Array(e + 1), n)
    }
}

function Pa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + zn.call(t, "," + n) + `
` + e.prev
}

function Ns(t, e) {
    var n = La(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = hi(t, a) ? e(t[a], t) : ""
    }
    var f = typeof ha == "function" ? ha(t) : [],
        v;
    if (yr) {
        v = {};
        for (var S = 0; S < f.length; S++) v["$" + f[S]] = f[S]
    }
    for (var k in t) !hi(t, k) || n && String(Number(k)) === k && k < t.length || yr && v["$" + k] instanceof Symbol || (Jc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ha == "function")
        for (var I = 0; I < f.length; I++) Qc.call(t, f[I]) && i.push("[" + e(f[I]) + "]: " + e(t[f[I]], t));
    return i
}
var Za = Ka,
    kr = My,
    dw = Wy,
    fw = Za("%TypeError%"),
    Bs = Za("%WeakMap%", !0),
    $s = Za("%Map%", !0),
    pw = kr("WeakMap.prototype.get", !0),
    gw = kr("WeakMap.prototype.set", !0),
    mw = kr("WeakMap.prototype.has", !0),
    vw = kr("Map.prototype.get", !0),
    yw = kr("Map.prototype.set", !0),
    ww = kr("Map.prototype.has", !0),
    el = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    bw = function(t, e) {
        var n = el(t, e);
        return n && n.value
    },
    Cw = function(t, e, n) {
        var i = el(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    xw = function(t, e) {
        return !!el(t, e)
    },
    Ew = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new fw("Side channel does not contain " + dw(f))
            },
            get: function(f) {
                if (Bs && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return pw(e, f)
                } else if ($s) {
                    if (n) return vw(n, f)
                } else if (i) return bw(i, f)
            },
            has: function(f) {
                if (Bs && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return mw(e, f)
                } else if ($s) {
                    if (n) return ww(n, f)
                } else if (i) return xw(i, f);
                return !1
            },
            set: function(f, v) {
                Bs && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Bs), gw(e, f, v)) : $s ? (n || (n = new $s), yw(n, f, v)) : (i || (i = {
                    key: {},
                    next: null
                }), Cw(i, f, v))
            }
        };
        return a
    },
    _w = String.prototype.replace,
    Sw = /%20/g,
    fa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    tl = {
        default: fa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return _w.call(t, Sw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: fa.RFC1738,
        RFC3986: fa.RFC3986
    },
    kw = tl,
    pa = Object.prototype.hasOwnProperty,
    Pi = Array.isArray,
    $n = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    Tw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Pi(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    iu = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    Aw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Pi(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !pa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Pi(e) && !Pi(n) && (a = iu(e, i)), Pi(e) && Pi(n) ? (n.forEach(function(f, v) {
            if (pa.call(e, v)) {
                var S = e[v];
                S && typeof S == "object" && f && typeof f == "object" ? e[v] = t(S, f, i) : e.push(f)
            } else e[v] = f
        }), e) : Object.keys(n).reduce(function(f, v) {
            var S = n[v];
            return pa.call(f, v) ? f[v] = t(f[v], S, i) : f[v] = S, f
        }, a)
    },
    Ow = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    Rw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Iw = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var v = e;
        if (typeof e == "symbol" ? v = Symbol.prototype.toString.call(e) : typeof e != "string" && (v = String(e)), i === "iso-8859-1") return escape(v).replace(/%u[0-9a-f]{4}/gi, function(M) {
            return "%26%23" + parseInt(M.slice(2), 16) + "%3B"
        });
        for (var S = "", k = 0; k < v.length; ++k) {
            var I = v.charCodeAt(k);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || f === kw.RFC1738 && (I === 40 || I === 41)) {
                S += v.charAt(k);
                continue
            }
            if (I < 128) {
                S = S + $n[I];
                continue
            }
            if (I < 2048) {
                S = S + ($n[192 | I >> 6] + $n[128 | I & 63]);
                continue
            }
            if (I < 55296 || I >= 57344) {
                S = S + ($n[224 | I >> 12] + $n[128 | I >> 6 & 63] + $n[128 | I & 63]);
                continue
            }
            k += 1, I = 65536 + ((I & 1023) << 10 | v.charCodeAt(k) & 1023), S += $n[240 | I >> 18] + $n[128 | I >> 12 & 63] + $n[128 | I >> 6 & 63] + $n[128 | I & 63]
        }
        return S
    },
    Mw = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], v = f.obj[f.prop], S = Object.keys(v), k = 0; k < S.length; ++k) {
                var I = S[k],
                    M = v[I];
                typeof M == "object" && M !== null && i.indexOf(M) === -1 && (n.push({
                    obj: v,
                    prop: I
                }), i.push(M))
            }
        return Tw(n), e
    },
    Dw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Lw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Pw = function(e, n) {
        return [].concat(e, n)
    },
    Vw = function(e, n) {
        if (Pi(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    ru = {
        arrayToObject: iu,
        assign: Ow,
        combine: Pw,
        compact: Mw,
        decode: Rw,
        encode: Iw,
        isBuffer: Lw,
        isRegExp: Dw,
        maybeMap: Vw,
        merge: Aw
    },
    su = Ew,
    Va = ru,
    ss = tl,
    Nw = Object.prototype.hasOwnProperty,
    ec = {
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
    Bw = String.prototype.split,
    $w = Array.prototype.push,
    ou = function(t, e) {
        $w.apply(t, ii(e) ? e : [e])
    },
    jw = Date.prototype.toISOString,
    tc = ss.default,
    rn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Va.encode,
        encodeValuesOnly: !1,
        format: tc,
        formatter: ss.formatters[tc],
        indices: !1,
        serializeDate: function(e) {
            return jw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Fw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    ga = {},
    zw = function t(e, n, i, a, f, v, S, k, I, M, $, J, ie, K, re, m) {
        for (var P = e, q = m, ae = 0, se = !1;
            (q = q.get(ga)) !== void 0 && !se;) {
            var ve = q.get(e);
            if (ae += 1, typeof ve < "u") {
                if (ve === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof q.get(ga) > "u" && (ae = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = $(P) : i === "comma" && ii(P) && (P = Va.maybeMap(P, function(ue) {
                return ue instanceof Date ? $(ue) : ue
            })), P === null) {
            if (f) return S && !K ? S(n, rn.encoder, re, "key", J) : n;
            P = ""
        }
        if (Fw(P) || Va.isBuffer(P)) {
            if (S) {
                var d = K ? n : S(n, rn.encoder, re, "key", J);
                if (i === "comma" && K) {
                    for (var Ee = Bw.call(String(P), ","), Ae = "", Le = 0; Le < Ee.length; ++Le) Ae += (Le === 0 ? "" : ",") + ie(S(Ee[Le], rn.encoder, re, "value", J));
                    return [ie(d) + (a && ii(P) && Ee.length === 1 ? "[]" : "") + "=" + Ae]
                }
                return [ie(d) + "=" + ie(S(P, rn.encoder, re, "value", J))]
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
        for (var Fe = a && ii(P) && P.length === 1 ? n + "[]" : n, H = 0; H < Be.length; ++H) {
            var oe = Be[H],
                Te = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(v && Te === null)) {
                var we = ii(P) ? typeof i == "function" ? i(Fe, oe) : Fe : Fe + (M ? "." + oe : "[" + oe + "]");
                m.set(e, ae);
                var ye = su();
                ye.set(ga, m), ou(lt, t(Te, we, i, a, f, v, S, k, I, M, $, J, ie, K, re, ye))
            }
        }
        return lt
    },
    Uw = function(e) {
        if (!e) return rn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || rn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = ss.default;
        if (typeof e.format < "u") {
            if (!Nw.call(ss.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = ss.formatters[i],
            f = rn.filter;
        return (typeof e.filter == "function" || ii(e.filter)) && (f = e.filter), {
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
    Hw = function(t, e) {
        var n = t,
            i = Uw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ii(i.filter) && (f = i.filter, a = f);
        var v = [];
        if (typeof n != "object" || n === null) return "";
        var S;
        e && e.arrayFormat in ec ? S = e.arrayFormat : e && "indices" in e ? S = e.indices ? "indices" : "repeat" : S = "indices";
        var k = ec[S];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var M = su(), $ = 0; $ < a.length; ++$) {
            var J = a[$];
            i.skipNulls && n[J] === null || ou(v, zw(n[J], J, k, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, M))
        }
        var ie = v.join(i.delimiter),
            K = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? K += "utf8=%26%2310003%3B&" : K += "utf8=%E2%9C%93&"), ie.length > 0 ? K + ie : ""
    },
    wr = ru,
    Na = Object.prototype.hasOwnProperty,
    Gw = Array.isArray,
    en = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: wr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    qw = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    au = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Ww = "utf8=%26%2310003%3B",
    Xw = "utf8=%E2%9C%93",
    Kw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            v = a.split(n.delimiter, f),
            S = -1,
            k, I = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < v.length; ++k) v[k].indexOf("utf8=") === 0 && (v[k] === Xw ? I = "utf-8" : v[k] === Ww && (I = "iso-8859-1"), S = k, k = v.length);
        for (k = 0; k < v.length; ++k)
            if (k !== S) {
                var M = v[k],
                    $ = M.indexOf("]="),
                    J = $ === -1 ? M.indexOf("=") : $ + 1,
                    ie, K;
                J === -1 ? (ie = n.decoder(M, en.decoder, I, "key"), K = n.strictNullHandling ? null : "") : (ie = n.decoder(M.slice(0, J), en.decoder, I, "key"), K = wr.maybeMap(au(M.slice(J + 1), n), function(re) {
                    return n.decoder(re, en.decoder, I, "value")
                })), K && n.interpretNumericEntities && I === "iso-8859-1" && (K = qw(K)), M.indexOf("[]=") > -1 && (K = Gw(K) ? [K] : K), Na.call(i, ie) ? i[ie] = wr.combine(i[ie], K) : i[ie] = K
            } return i
    },
    Yw = function(t, e, n, i) {
        for (var a = i ? e : au(e, n), f = t.length - 1; f >= 0; --f) {
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
    Jw = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                v = /(\[[^[\]]*])/,
                S = /(\[[^[\]]*])/g,
                k = i.depth > 0 && v.exec(f),
                I = k ? f.slice(0, k.index) : f,
                M = [];
            if (I) {
                if (!i.plainObjects && Na.call(Object.prototype, I) && !i.allowPrototypes) return;
                M.push(I)
            }
            for (var $ = 0; i.depth > 0 && (k = S.exec(f)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Na.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                M.push(k[1])
            }
            return k && M.push("[" + f.slice(k.index) + "]"), Yw(M, n, i, a)
        }
    },
    Qw = function(e) {
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
            delimiter: typeof e.delimiter == "string" || wr.isRegExp(e.delimiter) ? e.delimiter : en.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : en.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : en.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : en.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : en.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : en.strictNullHandling
        }
    },
    Zw = function(t, e) {
        var n = Qw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? Kw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), v = 0; v < f.length; ++v) {
            var S = f[v],
                k = Jw(S, i[S], n, typeof t == "string");
            a = wr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : wr.compact(a)
    },
    eb = Hw,
    tb = Zw,
    nb = tl,
    lu = {
        formats: nb,
        parse: tb,
        stringify: eb
    };
class ib {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class rb {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class sb {
    constructor(e) {
        this.connections = e.connections
    }
}
class ob {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class ab {}
var bo = {
    CreateRoomReply: ib,
    GetRoomReply: rb,
    GetAudienceReply: sb,
    RoomExit: ob,
    RoomLock: ab
};
const nc = Ra.exports,
    lb = lu,
    {
        CreateRoomReply: cb,
        GetRoomReply: ub
    } = bo;
class hb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = lb.stringify(n);
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
            v = await (await nc(i, {
                method: "POST"
            })).json();
        if (!v.ok) throw new Error(`failed to create room: ${v.error}`);
        let S = v.body;
        return new cb({
            code: S.code,
            token: S.token,
            host: S.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await nc(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
        return new ub({
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
var db = {
        APIClient: hb
    },
    cr = null;
typeof WebSocket < "u" ? cr = WebSocket : typeof MozWebSocket < "u" ? cr = MozWebSocket : typeof vt < "u" ? cr = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? cr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (cr = self.WebSocket || self.MozWebSocket);
var fb = cr,
    nl = {
        exports: {}
    },
    pr = typeof Reflect == "object" ? Reflect : null,
    ic = pr && typeof pr.apply == "function" ? pr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    qs;
pr && typeof pr.ownKeys == "function" ? qs = pr.ownKeys : Object.getOwnPropertySymbols ? qs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : qs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function pb(t) {
    console && console.warn && console.warn(t)
}
var cu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
nl.exports = Rt;
nl.exports.once = yb;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var rc = 10;

function Co(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return rc
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || cu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        rc = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || cu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function uu(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return uu(this)
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
    if (typeof k == "function") ic(k, this, n);
    else
        for (var I = k.length, M = gu(k, I), i = 0; i < I; ++i) ic(M[i], this, n);
    return !0
};

function hu(t, e, n, i) {
    var a, f, v;
    if (Co(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), v = f[e]), v === void 0) v = f[e] = n, ++t._eventsCount;
    else if (typeof v == "function" ? v = f[e] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), a = uu(t), a > 0 && v.length > a && !v.warned) {
        v.warned = !0;
        var S = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        S.name = "MaxListenersExceededWarning", S.emitter = t, S.type = e, S.count = v.length, pb(S)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return hu(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return hu(this, e, n, !0)
};

function gb() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function du(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = gb.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return Co(n), this.on(e, du(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return Co(n), this.prependListener(e, du(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, v, S;
    if (Co(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, v = i.length - 1; v >= 0; v--)
            if (i[v] === n || i[v].listener === n) {
                S = i[v].listener, f = v;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : mb(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, S || n)
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

function fu(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? vb(a) : gu(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return fu(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return fu(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : pu.call(t, e)
};
Rt.prototype.listenerCount = pu;

function pu(t) {
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

function gu(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function mb(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function vb(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function yb(t, e) {
    return new Promise(function(n, i) {
        function a(v) {
            t.removeListener(e, f), i(v)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        mu(t, e, f, {
            once: !0
        }), e !== "error" && wb(t, a, {
            once: !0
        })
    })
}

function wb(t, e, n) {
    typeof t.on == "function" && mu(t, "error", e, n)
}

function mu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class bb {
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
class xo extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class gs extends xo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class vu extends gs {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class yu extends gs {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class wu extends gs {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class Tt extends xo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class bu extends Tt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class Cu extends Tt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class xu extends Tt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class Eu extends Tt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class _u extends Tt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class Su extends Tt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class ku extends Tt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class Tu extends Tt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class Au extends Tt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Ou extends Tt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Ru extends Tt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Iu extends Tt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Mu extends Tt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Du extends Tt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Lu extends Tt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Pu extends Tt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Vu extends Tt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Nu extends Tt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Bu extends Tt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class $u extends Tt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class ju extends Tt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Fu extends Tt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class zu extends Tt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Uu extends Tt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Hu extends Tt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Gu extends Tt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class qu extends Tt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class Wu extends Tt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function Cb({
    code: t,
    message: e
}) {
    const n = xb[t];
    return n ? new n({
        message: e
    }) : new xo({
        message: e
    })
}
var ri = {
    createError: Cb,
    CallError: xo,
    EcastServerError: gs,
    EcastCreateRoomFailed: vu,
    EcastDialRoomFailed: yu,
    EcastServerIsShuttingDown: wu,
    EcastClientError: Tt,
    EcastParseError: bu,
    EcastRequestIsMissingOpcode: Cu,
    EcastRequestHasInvalidOpcode: xu,
    EcastRequestHasInvalidArguments: Eu,
    EcastEntityNotFound: _u,
    EcastEntityAlreadyExists: Su,
    EcastEntityTypeError: ku,
    EcastNoSuchClient: Tu,
    EcastRoomIsLocked: Au,
    EcastRoomIsFull: Ou,
    EcastLicenseNotFound: Ru,
    EcastLicenseCheckFailed: Iu,
    EcastRoomNotFound: Mu,
    EcastInvalidRole: Du,
    EcastTwitchLoginRequired: Lu,
    EcastInvalidOption: Pu,
    EcastPasswordRequired: Vu,
    EcastInvalidPassword: Nu,
    EcastNameRequired: Bu,
    EcastFilterError: $u,
    EcastNoSuchFilter: ju,
    EcastPermissionDenied: Fu,
    EcastNotConnected: zu,
    EcastIllegalOperation: Uu,
    EcastACLChangeDenied: Hu,
    EcastRoomHasEnded: Gu,
    EcastEntityLocked: qu,
    EcastRateLimitExceeded: Wu,
    ObservedError: bb
};
const xb = {
    1e3: gs,
    1001: vu,
    1002: yu,
    1003: wu,
    2e3: Tt,
    2001: bu,
    2002: Cu,
    2003: xu,
    2004: Eu,
    2005: _u,
    2006: Su,
    2007: ku,
    2008: Tu,
    2009: Au,
    2010: Ou,
    2011: Ru,
    2012: Iu,
    2013: Mu,
    2014: Du,
    2015: Lu,
    2016: Pu,
    2017: Vu,
    2018: Nu,
    2019: Bu,
    2021: $u,
    2022: ju,
    2023: Fu,
    2024: zu,
    2025: Uu,
    2026: Hu,
    2027: Gu,
    2028: qu,
    2420: Wu
};
class Eb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class _b {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class Sb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class kb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class Tb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var il = {
    ClientConnected: _b,
    ClientDisconnected: Sb,
    ClientKicked: Tb,
    ClientSend: kb,
    ClientWelcome: Eb
};
class Ab {
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
var rl = {
    CountGroup: Ab
};
class Ob {
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
var sl = {
    GCounter: Ob
};
class Rb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var Xu = {
    Notification: Rb
};
class Ib {
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
class Mb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var ol = {
    ObjectEntity: Ib,
    ObjectEcho: Mb
};
class Db {
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
var al = {
    PNCounter: Db
};
class Lb {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var Ku = {
    Reply: Lb
};
class Pb {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Vb = {
    Request: Pb
};
class Nb {
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
class Bb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var ll = {
    TextEntity: Nb,
    TextEcho: Bb
};
class $b {
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
var cl = {
    TextRing: $b
};
class jb {
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
var Yu = {
    ArtifactEntity: jb
};
class Fb {
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
class zb {
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
class Ub {
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
var ul = {
    DoodleEntity: Fb,
    DoodleLine: zb,
    DoodleLineRemoved: Ub
};
class Hb {
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
class qb {
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
var Ju = {
    StackEntity: Hb,
    StackElement: Gb,
    StackElements: qb
};
class Wb {
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
var Qu = {
    DropEntity: Wb
};
class Xb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var Kb = {
    Echo: Xb
};
class Yb {
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
var Jb = {
    LockEntity: Yb
};
class Qb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Zu = {
    OK: Qb
};
class Zb {
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
var eh = {
    NumberEntity: Zb
};
const {
    ArtifactEntity: e0
} = Yu, {
    ClientWelcome: t0,
    ClientConnected: n0,
    ClientDisconnected: i0,
    ClientKicked: r0,
    ClientSend: s0
} = il, {
    CountGroup: o0
} = rl, {
    DoodleEntity: a0,
    DoodleLine: l0,
    DoodleLineRemoved: c0
} = ul, {
    StackEntity: u0,
    StackElement: h0,
    StackElements: d0
} = Ju, {
    DropEntity: f0
} = Qu, {
    Echo: p0
} = Kb, {
    LockEntity: g0
} = Jb, {
    GCounter: m0
} = sl, {
    GetAudienceReply: v0,
    RoomExit: y0,
    RoomLock: w0
} = bo, {
    Notification: b0
} = Xu, {
    OK: C0
} = Zu, {
    NumberEntity: x0
} = eh, {
    ObjectEcho: E0,
    ObjectEntity: _0
} = ol, {
    PNCounter: sc
} = al, {
    Reply: S0
} = Ku, {
    TextEcho: k0,
    TextEntity: T0
} = ll, {
    TextRing: A0
} = cl, {
    createError: oc,
    ObservedError: O0
} = ri;

function Ba(t, e, n) {
    switch (t) {
        case "ok":
            return new C0;
        case "echo":
            return new p0({
                message: e.message
            });
        case "lock":
            return new g0({
                key: e.key,
                from: e.from
            });
        case "error":
            return oc({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new O0({
                to: e.to,
                error: oc({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new T0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new k0({
                message: e.message
            });
        case "object":
            return new _0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new E0({
                message: e.message
            });
        case "drop":
            return new f0({
                key: e.key
            });
        case "artifact":
            return new e0({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new n0({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new i0({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new r0({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new s0({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new t0({
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
                    a[f] = Ba(v[0], v[1], v[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new a0({
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
            return new l0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new c0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new u0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new h0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new d0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new x0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new y0({
                cause: e.cause
            });
        case "room/lock":
            return new w0;
        case "room/get-audience":
            return new v0({
                connections: e.connections
            });
        case "audience":
            return new sc({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new o0({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new A0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new m0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new sc({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function R0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new S0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Ba(n, e.result)
    }) : new b0({
        pc: e.pc,
        opcode: n,
        result: Ba(n, e.result)
    })
}
var I0 = {
    parseResponseMessage: R0
};
const ac = fb,
    M0 = lu,
    D0 = nl.exports,
    {
        CallError: L0
    } = ri,
    {
        ClientWelcome: P0
    } = il,
    {
        CountGroup: V0
    } = rl,
    {
        GCounter: N0
    } = sl,
    {
        Notification: lc
    } = Xu,
    {
        ObjectEntity: ma
    } = ol,
    {
        PNCounter: B0
    } = al,
    {
        Reply: $0
    } = Ku,
    {
        Request: j0
    } = Vb,
    {
        TextEntity: va
    } = ll,
    {
        TextRing: F0
    } = cl,
    {
        parseResponseMessage: z0
    } = I0,
    {
        DoodleEntity: U0
    } = ul,
    {
        StackEntity: H0
    } = Ju,
    G0 = 1e3 + Math.floor(Math.random() * 500),
    cc = 13e3;
class q0 extends D0 {
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
        const n = M0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let v = !1,
                S = !1,
                k = M => {
                    a(M), v = !0
                },
                I = M => {
                    f(M), v = !0
                };
            this.conn = new ac(i, "ecast-v0"), this.conn.onmessage = M => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(M.data),null,2)}`);
                const $ = z0(M);
                if ($ instanceof $0) this.onReply($);
                else if ($ instanceof lc) {
                    if ($.result instanceof P0) S = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), k($.result);
                    else if (!v) {
                        I($.result);
                        return
                    }
                    this.onNotification($)
                } else console.error(`failed to parse response messsage: ${$}`)
            }, this.conn.onerror = M => {
                v ? this.emit("socketError", M) : I(M)
            }, this.conn.onclose = M => {
                this.debugLog("onclose", M.code), S && M.code === 1006 ? this.reconnect() : this.emit("socketClose", M)
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
            if (n >= cc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(cc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new lc(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof L0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== ac.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new j0({
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
        return this.entities[e] = new ma({
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
        return this.entities[e] = new ma({
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
        return this.entities[e] = new ma({
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
        return this.entities[e] = new va({
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
        return this.entities[e] = new va({
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
        return this.entities[e] = new va({
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
        const M = await this.send("doodle/create", i);
        return this.entities[e] = new U0({
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
        return this.entities[e] = new H0({
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
        return this.entities[e] = new V0({
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
        return this.entities[e] = new N0({
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
        return this.entities[e] = new B0({
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
        return this.entities[e] = new F0({
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
var W0 = {
    WSClient: q0
};
const {
    APIClient: X0
} = db, {
    WSClient: K0
} = W0, {
    CreateRoomReply: Y0,
    GetRoomReply: J0
} = bo, {
    ClientWelcome: Q0,
    ClientDisconnected: Z0
} = il, {
    ArtifactEntity: eC
} = Yu, {
    GCounter: tC
} = sl, {
    NumberEntity: nC
} = eh, {
    TextEntity: iC
} = ll, {
    DoodleEntity: rC
} = ul, {
    ObjectEntity: sC
} = ol, {
    CountGroup: oC
} = rl, {
    DropEntity: aC
} = Qu, {
    OK: lC
} = Zu, {
    RoomExit: cC
} = bo, {
    TextRing: uC
} = cl, {
    PNCounter: hC
} = al;
var Di = {
    APIClient: X0,
    WSClient: K0,
    ClientWelcome: Q0,
    CreateRoomReply: Y0,
    DropEntity: aC,
    GetRoomReply: J0,
    ClientDisconnected: Z0,
    RoomExit: cC,
    OK: lC,
    ArtifactEntity: eC,
    DoodleEntity: rC,
    NumberEntity: nC,
    CountGroup: oC,
    GCounter: tC,
    ObjectEntity: sC,
    PNCounter: hC,
    TextEntity: iC,
    TextRing: uC
};

function uc(...t) {
    console.log(...t)
}

function dC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var hc = {
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
            v;

        function S(j) {
            try {
                return decodeURIComponent(j.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function k(j) {
            try {
                return encodeURIComponent(j)
            } catch {
                return null
            }
        }

        function I(j) {
            for (var V = /([^=?#&]+)=?([^&]*)/g, W = {}, D; D = V.exec(j);) {
                var G = S(D[1]),
                    fe = S(D[2]);
                G === null || fe === null || G in W || (W[G] = fe)
            }
            return W
        }

        function M(j, V) {
            V = V || "";
            var W = [],
                D, G;
            typeof V != "string" && (V = "?");
            for (G in j)
                if (f.call(j, G)) {
                    if (D = j[G], !D && (D === null || D === v || isNaN(D)) && (D = ""), G = k(G), D = k(D), G === null || D === null) continue;
                    W.push(G + "=" + D)
                } return W.length ? V + W.join("&") : ""
        }
        var $ = M,
            J = I,
            ie = {
                stringify: $,
                parse: J
            },
            K = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            m = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + m + "+");

        function q(j) {
            return (j || "").toString().replace(P, "")
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

        function ve(j) {
            var V;
            typeof window < "u" ? V = window : typeof i < "u" ? V = i : typeof self < "u" ? V = self : V = {};
            var W = V.location || {};
            j = j || W;
            var D = {},
                G = typeof j,
                fe;
            if (j.protocol === "blob:") D = new Le(unescape(j.pathname), {});
            else if (G === "string") {
                D = new Le(j, {});
                for (fe in se) delete D[fe]
            } else if (G === "object") {
                for (fe in j) fe in se || (D[fe] = j[fe]);
                D.slashes === void 0 && (D.slashes = K.test(j.href))
            }
            return D
        }

        function d(j) {
            return j === "file:" || j === "ftp:" || j === "http:" || j === "https:" || j === "ws:" || j === "wss:"
        }

        function Ee(j, V) {
            j = q(j), V = V || {};
            var W = re.exec(j),
                D = W[1] ? W[1].toLowerCase() : "",
                G = !!W[2],
                fe = !!W[3],
                pe = 0,
                Ve;
            return G ? fe ? (Ve = W[2] + W[3] + W[4], pe = W[2].length + W[3].length) : (Ve = W[2] + W[4], pe = W[2].length) : fe ? (Ve = W[3] + W[4], pe = W[3].length) : Ve = W[4], D === "file:" ? pe >= 2 && (Ve = Ve.slice(2)) : d(D) ? Ve = W[4] : D ? G && (Ve = Ve.slice(2)) : pe >= 2 && d(V.protocol) && (Ve = W[4]), {
                protocol: D,
                slashes: G || d(D),
                slashesCount: pe,
                rest: Ve
            }
        }

        function Ae(j, V) {
            if (j === "") return V;
            for (var W = (V || "/").split("/").slice(0, -1).concat(j.split("/")), D = W.length, G = W[D - 1], fe = !1, pe = 0; D--;) W[D] === "." ? W.splice(D, 1) : W[D] === ".." ? (W.splice(D, 1), pe++) : pe && (D === 0 && (fe = !0), W.splice(D, 1), pe--);
            return fe && W.unshift(""), (G === "." || G === "..") && W.push(""), W.join("/")
        }

        function Le(j, V, W) {
            if (j = q(j), !(this instanceof Le)) return new Le(j, V, W);
            var D, G, fe, pe, Ve, Ne, pt = ae.slice(),
                Ft = typeof V,
                Je = this,
                Mn = 0;
            for (Ft !== "object" && Ft !== "string" && (W = V, V = null), W && typeof W != "function" && (W = ie.parse), V = ve(V), G = Ee(j || "", V), D = !G.protocol && !G.slashes, Je.slashes = G.slashes || D && V.slashes, Je.protocol = G.protocol || V.protocol || "", j = G.rest, (Je.protocol === "file:" || !G.slashes && (G.protocol || G.slashesCount < 2 || !d(Je.protocol))) && (pt[3] = [/(.*)/, "pathname"]); Mn < pt.length; Mn++) {
                if (pe = pt[Mn], typeof pe == "function") {
                    j = pe(j, Je);
                    continue
                }
                fe = pe[0], Ne = pe[1], fe !== fe ? Je[Ne] = j : typeof fe == "string" ? ~(Ve = j.indexOf(fe)) && (typeof pe[2] == "number" ? (Je[Ne] = j.slice(0, Ve), j = j.slice(Ve + pe[2])) : (Je[Ne] = j.slice(Ve), j = j.slice(0, Ve))) : (Ve = fe.exec(j)) && (Je[Ne] = Ve[1], j = j.slice(0, Ve.index)), Je[Ne] = Je[Ne] || D && pe[3] && V[Ne] || "", pe[4] && (Je[Ne] = Je[Ne].toLowerCase())
            }
            W && (Je.query = W(Je.query)), D && V.slashes && Je.pathname.charAt(0) !== "/" && (Je.pathname !== "" || V.pathname !== "") && (Je.pathname = Ae(Je.pathname, V.pathname)), Je.pathname.charAt(0) !== "/" && d(Je.protocol) && (Je.pathname = "/" + Je.pathname), a(Je.port, Je.protocol) || (Je.host = Je.hostname, Je.port = ""), Je.username = Je.password = "", Je.auth && (pe = Je.auth.split(":"), Je.username = pe[0] || "", Je.password = pe[1] || ""), Je.origin = Je.protocol !== "file:" && d(Je.protocol) && Je.host ? Je.protocol + "//" + Je.host : "null", Je.href = Je.toString()
        }

        function lt(j, V, W) {
            var D = this;
            switch (j) {
                case "query":
                    typeof V == "string" && V.length && (V = (W || ie.parse)(V)), D[j] = V;
                    break;
                case "port":
                    D[j] = V, a(V, D.protocol) ? V && (D.host = D.hostname + ":" + V) : (D.host = D.hostname, D[j] = "");
                    break;
                case "hostname":
                    D[j] = V, D.port && (V += ":" + D.port), D.host = V;
                    break;
                case "host":
                    D[j] = V, /:\d+$/.test(V) ? (V = V.split(":"), D.port = V.pop(), D.hostname = V.join(":")) : (D.hostname = V, D.port = "");
                    break;
                case "protocol":
                    D.protocol = V.toLowerCase(), D.slashes = !W;
                    break;
                case "pathname":
                case "hash":
                    if (V) {
                        var G = j === "pathname" ? "/" : "#";
                        D[j] = V.charAt(0) !== G ? G + V : V
                    } else D[j] = V;
                    break;
                default:
                    D[j] = V
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (D[pe[1]] = D[pe[1]].toLowerCase())
            }
            return D.origin = D.protocol !== "file:" && d(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
        }

        function Be(j) {
            (!j || typeof j != "function") && (j = ie.stringify);
            var V, W = this,
                D = W.protocol;
            D && D.charAt(D.length - 1) !== ":" && (D += ":");
            var G = D + (W.slashes || d(W.protocol) ? "//" : "");
            return W.username && (G += W.username, W.password && (G += ":" + W.password), G += "@"), G += W.host + W.pathname, V = typeof W.query == "object" ? j(W.query) : W.query, V && (G += V.charAt(0) !== "?" ? "?" + V : V), W.hash && (G += W.hash), G
        }
        Le.prototype = {
            set: lt,
            toString: Be
        }, Le.extractProtocol = Ee, Le.location = ve, Le.trimLeft = q, Le.qs = ie;
        var Y = Le;

        function Fe(j, V) {
            setTimeout(function(W) {
                return j.call(W)
            }, 4, V)
        }

        function H(j, V) {
            typeof process < "u" && console[j].call(null, V)
        }

        function oe(j, V) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(D) {
                V(D) || W.push(D)
            }), W
        }

        function Te(j, V) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(D) {
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
            this.listeners[V] = oe(D, function(G) {
                return G === W
            })
        }, we.prototype.dispatchEvent = function(V) {
            for (var W = this, D = [], G = arguments.length - 1; G-- > 0;) D[G] = arguments[G + 1];
            var fe = V.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Ve) {
                D.length > 0 ? Ve.apply(W, D) : Ve.call(W, V)
            }), !0) : !1
        };

        function ye(j) {
            var V = j.indexOf("?");
            return V >= 0 ? j.slice(0, V) : j
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(V, W) {
            var D = ye(W),
                G = this.urlMap[D];
            if (G && G.server && G.websockets.indexOf(V) === -1) return G.websockets.push(V), G.server
        }, ue.prototype.addMembershipToRoom = function(V, W) {
            var D = this.urlMap[ye(V.url)];
            D && D.server && D.websockets.indexOf(V) !== -1 && (D.roomMemberships[W] || (D.roomMemberships[W] = []), D.roomMemberships[W].push(V))
        }, ue.prototype.attachServer = function(V, W) {
            var D = ye(W),
                G = this.urlMap[D];
            if (!G) return this.urlMap[D] = {
                server: V,
                websockets: [],
                roomMemberships: {}
            }, V
        }, ue.prototype.serverLookup = function(V) {
            var W = ye(V),
                D = this.urlMap[W];
            if (D) return D.server
        }, ue.prototype.websocketsLookup = function(V, W, D) {
            var G = ye(V),
                fe, pe = this.urlMap[G];
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
                G = this.urlMap[D];
            G && (G.websockets = oe(G.websockets, function(fe) {
                return fe === V
            }))
        }, ue.prototype.removeMembershipFromRoom = function(V, W) {
            var D = this.urlMap[ye(V.url)],
                G = D.roomMemberships[W];
            D && G !== null && (D.roomMemberships[W] = oe(G, function(fe) {
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
        var dt = function(j) {
                function V(W, D) {
                    if (D === void 0 && (D = {}), j.call(this), !W) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var G = D.bubbles,
                        fe = D.cancelable;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V
            }(Qe),
            Bt = function(j) {
                function V(W, D) {
                    if (D === void 0 && (D = {}), j.call(this), !W) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var G = D.bubbles,
                        fe = D.cancelable,
                        pe = D.data,
                        Ve = D.origin,
                        Ne = D.lastEventId,
                        pt = D.ports;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.origin = "" + Ve, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Ne || "")
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V
            }(Qe),
            qt = function(j) {
                function V(W, D) {
                    if (D === void 0 && (D = {}), j.call(this), !W) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var G = D.bubbles,
                        fe = D.cancelable,
                        pe = D.code,
                        Ve = D.reason,
                        Ne = D.wasClean;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Ve || ""), this.wasClean = Ne ? Boolean(Ne) : !1
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V
            }(Qe);

        function E(j) {
            var V = j.type,
                W = j.target,
                D = new dt(V);
            return W && (D.target = W, D.srcElement = W, D.currentTarget = W), D
        }

        function l(j) {
            var V = j.type,
                W = j.origin,
                D = j.data,
                G = j.target,
                fe = new Bt(V, {
                    data: D,
                    origin: W
                });
            return G && (fe.target = G, fe.srcElement = G, fe.currentTarget = G), fe
        }

        function g(j) {
            var V = j.code,
                W = j.reason,
                D = j.type,
                G = j.target,
                fe = j.wasClean;
            fe || (fe = V === ke.CLOSE_NORMAL || V === ke.CLOSE_NO_STATUS);
            var pe = new qt(D, {
                code: V,
                reason: W,
                wasClean: fe
            });
            return G && (pe.target = G, pe.srcElement = G, pe.currentTarget = G), pe
        }

        function _(j, V, W) {
            j.readyState = Me.CLOSING;
            var D = _e.serverLookup(j.url),
                G = g({
                    type: "close",
                    target: j.target,
                    code: V,
                    reason: W
                }),
                fe = g({
                    type: "server::close",
                    target: j,
                    code: V,
                    reason: W
                });
            Fe(function() {
                _e.removeWebSocket(j, j.url), j.readyState = Me.CLOSED, j.dispatchEvent(G), j.dispatchEvent(fe), D && D.dispatchEvent(G, D)
            }, j)
        }

        function O(j, V, W) {
            j.readyState = Me.CLOSING;
            var D = _e.serverLookup(j.url),
                G = g({
                    type: "close",
                    target: j.target,
                    code: V,
                    reason: W,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: j,
                    code: V,
                    reason: W,
                    wasClean: !1
                }),
                pe = E({
                    type: "error",
                    target: j.target
                });
            Fe(function() {
                _e.removeWebSocket(j, j.url), j.readyState = Me.CLOSED, j.dispatchEvent(pe), j.dispatchEvent(G), j.dispatchEvent(fe), D && D.dispatchEvent(G, D)
            }, j)
        }

        function L(j) {
            return Object.prototype.toString.call(j) !== "[object Blob]" && !(j instanceof ArrayBuffer) && (j = String(j)), j
        }
        var N = new WeakMap;

        function te(j) {
            if (N.has(j)) return N.get(j);
            var V = new Proxy(j, {
                get: function(D, G) {
                    return G === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Ve = pe.code || ke.CLOSE_NORMAL,
                            Ne = pe.reason || "";
                        _(V, Ve, Ne)
                    } : G === "send" ? function(pe) {
                        pe = L(pe), j.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: j
                        }))
                    } : G === "on" ? function(pe, Ve) {
                        j.addEventListener("server::" + pe, Ve)
                    } : G === "target" ? j : D[G]
                }
            });
            return N.set(j, V), V
        }

        function Se(j) {
            var V = encodeURIComponent(j).match(/%[89ABab]/g);
            return j.length + (V ? V.length : 0)
        }

        function he(j) {
            var V = new Y(j),
                W = V.pathname,
                D = V.protocol,
                G = V.hash;
            if (!j) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (W || (V.pathname = "/"), D === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + V.toString() + "' is invalid.");
            if (D !== "ws:" && D !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + D + "' is not allowed.");
            if (G !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + G + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return V.toString()
        }

        function Ie(j) {
            if (j === void 0 && (j = []), !Array.isArray(j) && typeof j != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + j.toString() + "' is invalid.");
            typeof j == "string" && (j = [j]);
            var V = j.map(function(D) {
                    return {
                        count: 1,
                        protocol: D
                    }
                }).reduce(function(D, G) {
                    return D[G.protocol] = (D[G.protocol] || 0) + G.count, D
                }, {}),
                W = Object.keys(V).filter(function(D) {
                    return V[D] > 1
                });
            if (W.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + W[0] + "' is duplicated.");
            return j
        }
        var Me = function(j) {
            function V(D, G) {
                j.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(D), G = Ie(G), this.protocol = G[0] || "", this.binaryType = "blob", this.readyState = V.CONNECTING;
                var fe = te(this),
                    pe = _e.attachWebSocket(fe, this.url);
                Fe(function() {
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
                                var Ne = pe.options.selectProtocol(G),
                                    pt = Ne !== "",
                                    Ft = G.indexOf(Ne) !== -1;
                                if (pt && !Ft) {
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
            j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V;
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
            }, V.prototype.send = function(G) {
                var fe = this;
                if (this.readyState === V.CLOSING || this.readyState === V.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: L(G)
                    }),
                    Ve = _e.serverLookup(this.url);
                Ve && Fe(function() {
                    fe.dispatchEvent(pe, G)
                }, Ve)
            }, V.prototype.close = function(G, fe) {
                if (G !== void 0 && (typeof G != "number" || G !== 1e3 && (G < 3e3 || G > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + G + " is neither.");
                if (fe !== void 0) {
                    var pe = Se(fe);
                    if (pe > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === V.CLOSING || this.readyState === V.CLOSED)) {
                    var Ve = te(this);
                    this.readyState === V.CONNECTING ? O(Ve, G || ke.CLOSE_ABNORMAL, fe) : _(Ve, G || ke.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(V.prototype, W), V
        }(we);
        Me.CONNECTING = 0, Me.prototype.CONNECTING = Me.CONNECTING, Me.OPEN = 1, Me.prototype.OPEN = Me.OPEN, Me.CLOSING = 2, Me.prototype.CLOSING = Me.CLOSING, Me.CLOSED = 3, Me.prototype.CLOSED = Me.CLOSED;
        var rt = function(j) {
            return j.reduce(function(V, W) {
                return V.indexOf(W) > -1 ? V : V.concat(W)
            }, [])
        };

        function xt() {
            return typeof window < "u" ? window : typeof process == "object" && typeof dC == "function" && typeof vt == "object" ? vt : this
        }
        var sn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(j) {
                function V(W, D) {
                    D === void 0 && (D = sn), j.call(this);
                    var G = new Y(W);
                    G.pathname || (G.pathname = "/"), this.url = G.toString(), this.originalWebSocket = null;
                    var fe = _e.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, sn, D), this.options.mock && this.mockWebsocket()
                }
                return j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V, V.prototype.mockWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket = D.WebSocket, D.WebSocket = Me
                }, V.prototype.restoreWebsocket = function() {
                    var D = xt();
                    this.originalWebSocket !== null && (D.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, V.prototype.stop = function(D) {
                    D === void 0 && (D = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof D == "function" && D()
                }, V.prototype.on = function(D, G) {
                    this.addEventListener(D, G)
                }, V.prototype.close = function(D) {
                    D === void 0 && (D = {});
                    var G = D.code,
                        fe = D.reason,
                        pe = D.wasClean,
                        Ve = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ve.forEach(function(Ne) {
                        Ne.readyState = Me.CLOSED, Ne.dispatchEvent(g({
                            type: "close",
                            target: Ne.target,
                            code: G || ke.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, V.prototype.emit = function(D, G, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Ve = fe.websockets;
                    Ve || (Ve = _e.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (G = Array.prototype.slice.call(arguments, 1, arguments.length), G = G.map(function(Ne) {
                        return L(Ne)
                    })) : G = L(G), Ve.forEach(function(Ne) {
                        Array.isArray(G) ? Ne.dispatchEvent.apply(Ne, [l({
                            type: D,
                            data: G,
                            origin: pe.url,
                            target: Ne.target
                        })].concat(G)) : Ne.dispatchEvent(l({
                            type: D,
                            data: G,
                            origin: pe.url,
                            target: Ne.target
                        }))
                    })
                }, V.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, V.prototype.to = function(D, G, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Ve = this,
                        Ne = rt(fe.concat(_e.websocketsLookup(this.url, D, G)));
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
                    for (var D = [], G = arguments.length; G--;) D[G] = arguments[G];
                    return this.to.apply(null, D)
                }, V.prototype.simulate = function(D) {
                    var G = _e.websocketsLookup(this.url);
                    D === "error" && G.forEach(function(fe) {
                        fe.readyState = Me.CLOSED, fe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, V
            }(we);
        ct.of = function(V) {
            return new ct(V)
        };
        var yt = function(j) {
            function V(D, G) {
                var fe = this;
                D === void 0 && (D = "socket.io"), G === void 0 && (G = ""), j.call(this), this.binaryType = "blob";
                var pe = new Y(D);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = V.CONNECTING, this.protocol = "", this.target = this, typeof G == "string" || typeof G == "object" && G !== null ? this.protocol = G : Array.isArray(G) && G.length > 0 && (this.protocol = G[0]);
                var Ve = _e.attachWebSocket(this, this.url);
                Fe(function() {
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
            j && (V.__proto__ = j), V.prototype = Object.create(j && j.prototype), V.prototype.constructor = V;
            var W = {
                broadcast: {}
            };
            return V.prototype.close = function() {
                if (this.readyState === V.OPEN) {
                    var G = _e.serverLookup(this.url);
                    return _e.removeWebSocket(this, this.url), this.readyState = V.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), G && G.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    }), G), this
                }
            }, V.prototype.disconnect = function() {
                return this.close()
            }, V.prototype.emit = function(G) {
                for (var fe = [], pe = arguments.length - 1; pe-- > 0;) fe[pe] = arguments[pe + 1];
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ve = l({
                        type: G,
                        origin: this.url,
                        data: fe
                    }),
                    Ne = _e.serverLookup(this.url);
                return Ne && Ne.dispatchEvent.apply(Ne, [Ve].concat(fe)), this
            }, V.prototype.send = function(G) {
                return this.emit("message", G), this
            }, W.broadcast.get = function() {
                if (this.readyState !== V.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var D = this,
                    G = _e.serverLookup(this.url);
                if (!G) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Ve) {
                        return G.emit(pe, Ve, {
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
            }, V.prototype.on = function(G, fe) {
                return this.addEventListener(G, fe), this
            }, V.prototype.off = function(G, fe) {
                this.removeEventListener(G, fe)
            }, V.prototype.hasListeners = function(G) {
                var fe = this.listeners[G];
                return Array.isArray(fe) ? !!fe.length : !1
            }, V.prototype.join = function(G) {
                _e.addMembershipToRoom(this, G)
            }, V.prototype.leave = function(G) {
                _e.removeMembershipFromRoom(this, G)
            }, V.prototype.to = function(G) {
                return this.broadcast.to(G)
            }, V.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, V.prototype.dispatchEvent = function(G) {
                for (var fe = this, pe = [], Ve = arguments.length - 1; Ve-- > 0;) pe[Ve] = arguments[Ve + 1];
                var Ne = G.type,
                    pt = this.listeners[Ne];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    pe.length > 0 ? Ft.apply(fe, pe) : Ft.call(fe, G.data ? G.data : G)
                })
            }, Object.defineProperties(V.prototype, W), V
        }(we);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(V, W) {
            return new yt(V, W)
        };
        bt.connect = function(V, W) {
            return bt(V, W)
        };
        var Qt = ct,
            Ze = Me,
            Lt = bt;
        n.Server = Qt, n.WebSocket = Ze, n.SocketIO = Lt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(hc, hc.exports);
var fC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(S, k) {
            var I = S.x - k.x,
                M = S.y - k.y;
            return I * I + M * M
        }

        function n(S, k, I) {
            var M = k.x,
                $ = k.y,
                J = I.x - M,
                ie = I.y - $;
            if (J !== 0 || ie !== 0) {
                var K = ((S.x - M) * J + (S.y - $) * ie) / (J * J + ie * ie);
                K > 1 ? (M = I.x, $ = I.y) : K > 0 && (M += J * K, $ += ie * K)
            }
            return J = S.x - M, ie = S.y - $, J * J + ie * ie
        }

        function i(S, k) {
            for (var I = S[0], M = [I], $, J = 1, ie = S.length; J < ie; J++) $ = S[J], e($, I) > k && (M.push($), I = $);
            return I !== $ && M.push($), M
        }

        function a(S, k, I, M, $) {
            for (var J = M, ie, K = k + 1; K < I; K++) {
                var re = n(S[K], S[k], S[I]);
                re > J && (ie = K, J = re)
            }
            J > M && (ie - k > 1 && a(S, k, ie, M, $), $.push(S[ie]), I - ie > 1 && a(S, ie, I, M, $))
        }

        function f(S, k) {
            var I = S.length - 1,
                M = [S[0]];
            return a(S, 0, I, k, M), M.push(S[I]), M
        }

        function v(S, k, I) {
            if (S.length <= 2) return S;
            var M = k !== void 0 ? k * k : 1;
            return S = I ? S : i(S, M), S = f(S, M), S
        }
        t.exports = v, t.exports.default = v
    })()
})(fC);
const pC = Ct.View.extend({
    el: "#banner",
    template: He.template(`
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
        kh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new pC({
            model: new Ke.Model(this.bannerData)
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp7-worldchampions/",
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
var gC = {};
(function(t) {
    (function(e) {
        e(Bi.exports, Ke, t)
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
                    e.each(ve, function(Y, Fe) {
                        this.addBinding(ae, Fe, Y)
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
                    var Le = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            v.call(this, Ee.destroy, d, ae, Ee)
                        }, J(d, Ee, ae, Ae), K(d, Ee, ae, Ae), ie(d, Ee, ae), Ae) {
                        e.each(Ee.events, function(Y) {
                            var Fe = Y + se,
                                H = function(Te) {
                                    var we = v.call(this, Ee.getVal, d, Te, Ee, a.call(arguments, 1)),
                                        ye = S(Ee.updateModel, we, Te, Ee);
                                    ye && I(ae, Ae, we, lt, Ee)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(Fe, oe, e.bind(H, this))
                        }, this), e.each(e.flatten([Ae]), function(Y) {
                            k(ae, "change:" + Y, Ee, function(Fe, H, oe) {
                                var Te = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Te !== Le) {
                                    var we = M(ae, Ae, Ee);
                                    re(d, Ee, we, ae)
                                }
                            })
                        });
                        var Be = M(ae, Ae, Ee);
                        re(d, Ee, Be, ae, !0)
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
                se.onSet && (q = v.call(d, se.onSet, q, se)), se.set ? v.call(d, se.set, P, q, ae, se) : (ve[P] = q, e.isArray(P) && e.isArray(q) && (ve = e.reduce(P, function(Ee, Ae, Le) {
                    return Ee[Ae] = e.has(q, Le) ? q[Le] : null, Ee
                }, {})), m.set(ve, ae))
            },
            M = function(m, P, q) {
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
                        Le = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Be = M(q, Ae, d);
                            d.name === "class" ? (m.removeClass(Ee).addClass(Be), Ee = Be) : m[lt](d.name, Be)
                        };
                    e.each(e.flatten([Ae]), function(lt) {
                        k(q, "change:" + lt, P, Le)
                    }), Le()
                })
            },
            ie = function(m, P, q, ae) {
                e.each(P.classes || [], function(se, ve) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var d = se.observe,
                        Ee = function() {
                            var Ae = M(q, d, se);
                            m.toggleClass(ve, !!Ae)
                        };
                    e.each(e.flatten([d]), function(Ae) {
                        k(q, "change:" + Ae, P, Ee)
                    }), Ee()
                })
            },
            K = function(m, P, q, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ve = function() {
                            var d = P.visible,
                                Ee = P.visibleFn,
                                Ae = M(q, ae, P),
                                Le = !!Ae;
                            (e.isFunction(d) || e.isString(d)) && (Le = !!v.call(se, d, Ae, P)), Ee ? v.call(se, Ee, m, Le, P) : m.toggle(Le)
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
                            var $e = n.$(ke).data("stickit-bind-val");
                            return {
                                value: $e !== void 0 ? $e : ke.value,
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
                var Le = function(ue, _e, ke) {
                    e.each(ue, function($e) {
                        var Qe = n.$("<option/>"),
                            dt = $e,
                            Bt = function(_, O, L) {
                                Qe.text(_), dt = O, Qe.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Qe.val(dt), L === !0 && Qe.prop("disabled", "disabled")
                            },
                            qt, E, l;
                        $e === "__default__" ? (qt = ke.label, E = ke.value, l = ke.disabled) : (qt = f($e, ve.labelPath), E = f($e, ve.valuePath), l = f($e, ve.disabledPath)), Bt(qt, E, l);
                        var g = function() {
                            return !Ee && dt != null && ke != null && dt === ke ? !0 : !!(e.isObject(ke) && e.isEqual(dt, ke))
                        };
                        g() ? Qe.prop("selected", !0) : Ee && e.isArray(ke) && e.each(ke, function(_) {
                            e.isObject(_) && (_ = f(_, ve.valuePath)), (_ === dt || e.isObject(_) && e.isEqual(dt, _)) && Qe.prop("selected", !0)
                        }), _e.append(Qe)
                    })
                };
                if (m.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = v.call(this, d, m, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Be = se,
                        Y = function() {
                            var ue = M(q, ae.observe, ae);
                            v.call(this, ae.update, m, ue, q, ae)
                        },
                        Fe = function() {
                            Be.off("add remove reset sort", Y)
                        },
                        H = function() {
                            Fe(), Be.off("stickit:selectRefresh"), q.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", Fe, this), Be.on("add remove reset sort", Y, this), q.trigger("stickit:selectRefresh"), q.once("stickit:selectRefresh", function() {
                        q.off("stickit:unstuck", H)
                    }), q.once("stickit:unstuck", H, this), se = se.toJSON()
                }
                if (ve.defaultOption) {
                    var oe = e.isFunction(ve.defaultOption) ? ve.defaultOption.call(this, m, ae) : ve.defaultOption;
                    Le(["__default__"], m, oe)
                }
                if (e.isArray(se)) Le(se, m, P);
                else if (se.opt_labels) e.each(se.opt_labels, function(ue) {
                    var _e = n.$("<optgroup/>").attr("label", ue);
                    Le(se[ue], _e, P), m.append(_e)
                });
                else {
                    var Te = [],
                        we;
                    for (var ye in se) we = {}, we[ve.valuePath] = ye, we[ve.labelPath] = se[ye], Te.push(we);
                    Te = e.sortBy(Te, ve.comparator || ve.labelPath), Le(Te, m, P)
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
})(gC);
const mC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    os = Ct.View.extend({
        template: He.template(mC),
        model: new Ke.Model({}),
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
var Ri, js, as = typeof Map == "function" ? new Map : (Ri = [], js = [], {
        has: function(t) {
            return Ri.indexOf(t) > -1
        },
        get: function(t) {
            return js[Ri.indexOf(t)]
        },
        set: function(t, e) {
            Ri.indexOf(t) === -1 && (Ri.push(t), js.push(e))
        },
        delete: function(t) {
            var e = Ri.indexOf(t);
            e > -1 && (Ri.splice(e, 1), js.splice(e, 1))
        }
    }),
    th = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    th = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function vC(t) {
    var e = as.get(t);
    e && e.destroy()
}

function yC(t) {
    var e = as.get(t);
    e && e.update()
}
var Qr = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Qr = function(t) {
    return t
}).destroy = function(t) {
    return t
}, Qr.update = function(t) {
    return t
}) : ((Qr = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !as.has(i)) {
                var a, f = null,
                    v = null,
                    S = null,
                    k = function() {
                        i.clientWidth !== v && J()
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

            function M(ie) {
                var K = i.style.width;
                i.style.width = "0px", i.style.width = K, i.style.overflowY = ie
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
                        K = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", v = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), K && (document.documentElement.scrollTop = K)
                }
            }

            function J() {
                $();
                var ie = Math.round(parseFloat(i.style.height)),
                    K = window.getComputedStyle(i, null),
                    re = K.boxSizing === "content-box" ? Math.round(parseFloat(K.height)) : i.offsetHeight;
                if (re < ie ? K.overflowY === "hidden" && (M("scroll"), $(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : K.overflowY !== "hidden" && (M("hidden"), $(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), S !== re) {
                    S = re;
                    var m = th("autosize:resized");
                    try {
                        i.dispatchEvent(m)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], vC), t
}, Qr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], yC), t
});
var dc = Qr;
const wC = `<form>\r
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
    so = Ct.View.extend({
        tagName: "div",
        className: "input",
        model: new Ke.Model({}),
        template: He.template(wC),
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
            this.getOption("preventAutosize") || dc(Pe("textarea"))
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
            Pe(t).val(""), this.getOption("preventAutosize") || dc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Pe(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return jt.sanitize(this.getValue())
        },
        sanitize(t) {
            return jt.sanitize(t)
        },
        sanitizeInput(t) {
            return jt.sanitizeInput(t)
        }
    }),
    bC = '<div class="text"></div>',
    ai = Ct.View.extend({
        tagName: "div",
        template: He.template(bC),
        model: new Ke.Model({
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
    Un = Ct.CollectionView.extend({
        tagName: "div",
        className: "choices",
        childView(t) {
            return t.get("type") === "input" ? so : t.get("type") === "text" ? ai : os
        },
        collection: new Ke.Collection([]),
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
let fc = {};

function nh(t, ...e) {
    !fc[t] || fc[t].map(n => n(...e))
}
let Zr, Ws;

function Vi() {
    return Zr
}

function Eo() {
    return Ws
}

function CC(t) {
    if (Zr = document.getElementById(t) || t || document.querySelector("canvas"), !Zr) throw Error("You must provide a canvas element for the game");
    return Ws = Zr.getContext("2d"), Ws.imageSmoothingEnabled = !1, nh("init"), {
        canvas: Zr,
        context: Ws
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
            height: v,
            margin: S = 0
        } = e.frame;
        this.width = f, this.height = v, this.margin = S, this._f = 0, this._a = 0
    }
    clone() {
        return _o(this)
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
        context: f = Eo()
    } = {}) {
        let v = this.frames[this._f] / this.spriteSheet._f | 0,
            S = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, S * this.width + (S * 2 + 1) * this.margin, v * this.height + (v * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function _o(t) {
    return new hl(t)
}
_o.prototype = hl.prototype;
_o.class = hl;
const xC = () => {};

function EC() {
    let t = Vi();
    Eo().clearRect(0, 0, t.width, t.height)
}

function _C({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        v = 1 / t,
        S = e ? EC : xC,
        k, I, M, $, J;
    const ie = window.performance || Date;

    function K() {
        if (I = requestAnimationFrame(K), M = ie.now(), $ = M - k, k = M, !($ > 1e3)) {
            for (nh("tick"), a += $; a >= f;) J.update(v), a -= f;
            S(), J.render()
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
class SC {
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
SC.prototype;

function pc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        v = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), v && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), v && n.push(3)), n
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
            for (i = pc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
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
        for (n = pc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
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
        return gr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
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

function gr(t, e, n = {}) {
    let i = new pl(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
gr.prototype = pl.prototype;
gr.class = pl;
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
            ddx: v,
            ddy: S,
            width: k,
            height: I,
            image: M
        } = e;
        this.position = gr(n, i), this.velocity = gr(a, f), this.acceleration = gr(v, S), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = Eo();
        for (let $ in e) this[$] = e[$];
        M && (this.width = k !== void 0 ? k : M.width, this.height = I !== void 0 ? I : M.height), this.sx = 0, this.sy = 0
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

function kC(t) {
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
class TC {
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
                n = n.concat(kC(S))
            }), this.animations[i] = _o({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: v
            })
        }
    }
}
TC.prototype;
var ih = {
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
            M = c => typeof c == "function" ? c() : c,
            $ = c => c && typeof c.toPromise == "function",
            J = c => $(c) ? c.toPromise() : Promise.resolve(c),
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
            Le = c => {
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
            Fe = Be(["success", "warning", "info", "question", "error"]),
            H = () => document.body.querySelector(".".concat(Y.container)),
            oe = c => {
                const h = H();
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
            qt = () => Te(Y["input-label"]),
            E = () => oe(".".concat(Y.loader)),
            l = () => oe(".".concat(Y.actions, " .").concat(Y.cancel)),
            g = () => Te(Y.actions),
            _ = () => Te(Y.footer),
            O = () => Te(Y["timer-progress-bar"]),
            L = () => Te(Y.close),
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
                            Ue = parseInt(B.getAttribute("tabindex"));
                        return ge > Ue ? 1 : ge < Ue ? -1 : 0
                    }),
                    h = Array.from(we().querySelectorAll(N)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => pe(b))
            },
            Se = () => xt(document.body, Y.shown) && !xt(document.body, Y["toast-shown"]) && !xt(document.body, Y["no-backdrop"]),
            he = () => we() && xt(we(), Y.toast),
            Ie = () => we().hasAttribute("data-loading"),
            Me = {
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
                    !Object.values(Y).includes(b) && !Object.values(Fe).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
                })
            },
            ct = (c, h, b) => {
                if (sn(c, h), h.customClass && h.customClass[b]) {
                    if (typeof h.customClass[b] != "string" && !h.customClass[b].forEach) return f("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof h.customClass[b], '"'));
                    Ze(c, h.customClass[b])
                }
            },
            yt = (c, h) => {
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
            bt = c => {
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
            Lt = (c, h) => {
                Qt(c, h, !1)
            },
            j = (c, h) => {
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
            D = c => {
                c.style.display = "none"
            },
            G = (c, h, b, B) => {
                const ge = c.querySelector(h);
                ge && (ge.style[b] = B)
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
                    B = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return b > 0 || B > 0
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
                    B = h / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(B, "%")
            },
            Mn = () => typeof window > "u" || typeof document > "u",
            Vn = 100,
            st = {},
            Dn = () => {
                st.previousActiveElement instanceof HTMLElement ? (st.previousActiveElement.focus(), st.previousActiveElement = null) : document.body && document.body.focus()
            },
            yi = c => new Promise(h => {
                if (!c) return h();
                const b = window.scrollX,
                    B = window.scrollY;
                st.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Vn), window.scrollTo(b, B)
            }),
            Tr = `
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
            Tn = () => {
                const c = H();
                return c ? (c.remove(), Lt([document.documentElement, document.body], [Y["no-backdrop"], Y["toast-shown"], Y["has-column"]]), !0) : !1
            },
            on = () => {
                st.currentInstance.resetValidationMessage()
            },
            Ar = () => {
                const c = we(),
                    h = j(c, Y.input),
                    b = j(c, Y.file),
                    B = c.querySelector(".".concat(Y.range, " input")),
                    ge = c.querySelector(".".concat(Y.range, " output")),
                    Ue = j(c, Y.select),
                    Gt = c.querySelector(".".concat(Y.checkbox, " input")),
                    Bn = j(c, Y.textarea);
                h.oninput = on, b.onchange = on, Ue.onchange = on, Gt.onchange = on, Bn.oninput = on, B.oninput = () => {
                    on(), ge.value = B.value
                }, B.onchange = () => {
                    on(), ge.value = B.value
                }
            },
            Or = c => typeof c == "string" ? document.querySelector(c) : c,
            wi = c => {
                const h = we();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            Fi = c => {
                window.getComputedStyle(c).direction === "rtl" && Ze(H(), Y.rtl)
            },
            bi = c => {
                const h = Tn();
                if (Mn()) {
                    v("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = Y.container, h && Ze(b, Y["no-transition"]), rt(b, Tr);
                const B = Or(c.target);
                B.appendChild(b), wi(c), Fi(B), Ar()
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
            vn = (() => {
                if (Mn()) return !1;
                const c = document.createElement("div"),
                    h = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const b in h)
                    if (Object.prototype.hasOwnProperty.call(h, b) && typeof c.style[b] < "u") return h[b];
                return !1
            })(),
            Hi = () => {
                const c = document.createElement("div");
                c.className = Y["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            xi = (c, h) => {
                const b = g(),
                    B = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? D(b) : W(b), ct(b, h, "actions"), qn(b, B, h), rt(B, h.loaderHtml), ct(B, h, "loader")
            };

        function qn(c, h, b) {
            const B = dt(),
                ge = Bt(),
                Ue = l();
            Ei(B, "confirm", b), Ei(ge, "deny", b), Ei(Ue, "cancel", b), Gi(B, ge, Ue, b), b.reverseButtons && (b.toast ? (c.insertBefore(Ue, B), c.insertBefore(ge, B)) : (c.insertBefore(Ue, h), c.insertBefore(ge, h), c.insertBefore(B, h)))
        }

        function Gi(c, h, b, B) {
            if (!B.buttonsStyling) return Lt([c, h, b], Y.styled);
            Ze([c, h, b], Y.styled), B.confirmButtonColor && (c.style.backgroundColor = B.confirmButtonColor, Ze(c, Y["default-outline"])), B.denyButtonColor && (h.style.backgroundColor = B.denyButtonColor, Ze(h, Y["default-outline"])), B.cancelButtonColor && (b.style.backgroundColor = B.cancelButtonColor, Ze(b, Y["default-outline"]))
        }

        function Ei(c, h, b) {
            fe(c, b["show".concat(a(h), "Button")], "inline-block"), rt(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = Y[h], ct(c, b, "".concat(h, "Button")), Ze(c, b["".concat(h, "ButtonClass")])
        }
        const tt = (c, h) => {
            const b = H();
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
                    B = A.innerParams.get(c),
                    ge = !B || h.input !== B.input;
                Q.forEach(Ue => {
                    const Gt = j(b, Y[Ue]);
                    Xt(Ue, h.inputAttributes), Gt.className = Y[Ue], ge && D(Gt)
                }), h.input && (ge && We(h), Wn(h))
            },
            We = c => {
                if (!zt[c.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Rr(c.input),
                    b = zt[c.input](h, c);
                W(h), setTimeout(() => {
                    bt(b)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const b = c.attributes[h].name;
                    ["type", "value", "style"].includes(b) || c.removeAttribute(b)
                }
            },
            Xt = (c, h) => {
                const b = yt(we(), c);
                if (!!b) {
                    It(b);
                    for (const B in h) b.setAttribute(B, h[B])
                }
            },
            Wn = c => {
                const h = Rr(c.input);
                typeof c.customClass == "object" && Ze(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Xn = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = Y.input;
                    const B = document.createElement("label"),
                        ge = Y["input-label"];
                    B.setAttribute("for", c.id), B.className = ge, typeof b.customClass == "object" && Ze(B, b.customClass.inputLabel), B.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", B)
                }
            },
            Rr = c => j(we(), Y[c] || Y.input),
            Kt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            zt = {};
        zt.text = zt.email = zt.password = zt.number = zt.tel = zt.url = (c, h) => (Kt(c, h.inputValue), Xn(c, c, h), Nn(c, h), c.type = h.input, c), zt.file = (c, h) => (Xn(c, c, h), Nn(c, h), c), zt.range = (c, h) => {
            const b = c.querySelector("input"),
                B = c.querySelector("output");
            return Kt(b, h.inputValue), b.type = h.input, Kt(B, h.inputValue), Xn(b, c, h), c
        }, zt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                rt(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Xn(c, c, h), c
        }, zt.radio = c => (c.textContent = "", c), zt.checkbox = (c, h) => {
            const b = yt(we(), "checkbox");
            b.value = "1", b.id = Y.checkbox, b.checked = Boolean(h.inputValue);
            const B = c.querySelector("span");
            return rt(B, h.inputPlaceholder), b
        }, zt.textarea = (c, h) => {
            Kt(c, h.inputValue), Nn(c, h), Xn(c, c, h);
            const b = B => parseInt(window.getComputedStyle(B).marginLeft) + parseInt(window.getComputedStyle(B).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const B = parseInt(window.getComputedStyle(we()).width),
                        ge = () => {
                            const Ue = c.offsetWidth + b(c);
                            Ue > B ? we().style.width = "".concat(Ue, "px") : we().style.width = null
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
            ko = (c, h) => {
                const b = _();
                fe(b, h.footer), h.footer && Ci(h.footer, b), ct(b, h, "footer")
            },
            To = (c, h) => {
                const b = L();
                rt(b, h.closeButtonHtml), ct(b, h, "closeButton"), fe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Ir = (c, h) => {
                const b = A.innerParams.get(c),
                    B = ye();
                if (b && h.icon === b.icon) {
                    ws(B, h), Mr(B, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    D(B);
                    return
                }
                if (h.icon && Object.keys(Fe).indexOf(h.icon) === -1) {
                    v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), D(B);
                    return
                }
                W(B), ws(B, h), Mr(B, h), Ze(B, h.showClass.icon)
            },
            Mr = (c, h) => {
                for (const b in Fe) h.icon !== b && Lt(c, Fe[b]);
                Ze(c, Fe[h.icon]), Cn(c, h), Wi(), ct(c, h, "icon")
            },
            Wi = () => {
                const c = we(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let B = 0; B < b.length; B++) b[B].style.backgroundColor = h
            },
            ys = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
            Ao = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            ws = (c, h) => {
                let b = c.innerHTML,
                    B;
                h.iconHtml ? B = Dr(h.iconHtml) : h.icon === "success" ? (B = ys, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? B = Ao : B = Dr({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== B.trim() && rt(c, B)
            },
            Cn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) G(c, b, "backgroundColor", h.iconColor);
                    G(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Dr = c => '<div class="'.concat(Y["icon-content"], '">').concat(c, "</div>"),
            _i = (c, h) => {
                const b = ke();
                if (!h.imageUrl) return D(b);
                W(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), V(b, "width", h.imageWidth), V(b, "height", h.imageHeight), b.className = Y.image, ct(b, h, "image")
            },
            Oo = (c, h) => {
                const b = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return D(b);
                W(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((B, ge) => {
                    const Ue = Ro(B);
                    if (b.appendChild(Ue), ge === h.currentProgressStep && Ze(Ue, Y["active-progress-step"]), ge !== h.progressSteps.length - 1) {
                        const Gt = Kn(h);
                        b.appendChild(Gt)
                    }
                })
            },
            Ro = c => {
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
            Lr = (c, h) => {
                const b = H(),
                    B = we();
                h.toast ? (V(b, "width", h.width), B.style.width = "100%", B.insertBefore(E(), ye())) : V(B, "width", h.width), V(B, "padding", h.padding), h.color && (B.style.color = h.color), h.background && (B.style.background = h.background), D(Qe()), Io(B, h)
            },
            Io = (c, h) => {
                c.className = "".concat(Y.popup, " ").concat(pe(c) ? h.showClass.popup : ""), h.toast ? (Ze([document.documentElement, document.body], Y["toast-shown"]), Ze(c, Y.toast)) : Ze(c, Y.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Ze(c, h.customClass), h.icon && Ze(c, Y["icon-".concat(h.icon)])
            },
            Pr = (c, h) => {
                Lr(c, h), tt(c, h), Oo(c, h), Ir(c, h), _i(c, h), Yn(c, h), To(c, h), qi(c, h), xi(c, h), ko(c, h), typeof h.didRender == "function" && h.didRender(we())
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
                    h === H() || h.contains(H()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Vr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            Xi = ["swal-title", "swal-html", "swal-footer"],
            Mo = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return No(b), Object.assign(bs(b), Do(b), Lo(b), Nr(b), Po(b), Vo(b, Xi))
            },
            bs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(B => {
                    Qn(B, ["name", "value"]);
                    const ge = B.getAttribute("name"),
                        Ue = B.getAttribute("value");
                    typeof re[ge] == "boolean" && Ue === "false" && (h[ge] = !1), typeof re[ge] == "object" && (h[ge] = JSON.parse(Ue))
                }), h
            },
            Do = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(B => {
                    Qn(B, ["type", "color", "aria-label"]);
                    const ge = B.getAttribute("type");
                    h["".concat(ge, "ButtonText")] = B.innerHTML, h["show".concat(a(ge), "Button")] = !0, B.hasAttribute("color") && (h["".concat(ge, "ButtonColor")] = B.getAttribute("color")), B.hasAttribute("aria-label") && (h["".concat(ge, "ButtonAriaLabel")] = B.getAttribute("aria-label"))
                }), h
            },
            Lo = c => {
                const h = {},
                    b = c.querySelector("swal-image");
                return b && (Qn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (h.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (h.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (h.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (h.imageAlt = b.getAttribute("alt"))), h
            },
            Nr = c => {
                const h = {},
                    b = c.querySelector("swal-icon");
                return b && (Qn(b, ["type", "color"]), b.hasAttribute("type") && (h.icon = b.getAttribute("type")), b.hasAttribute("color") && (h.iconColor = b.getAttribute("color")), h.iconHtml = b.innerHTML), h
            },
            Po = c => {
                const h = {},
                    b = c.querySelector("swal-input");
                b && (Qn(b, ["type", "label", "placeholder", "value"]), h.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (h.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (h.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (h.inputValue = b.getAttribute("value")));
                const B = Array.from(c.querySelectorAll("swal-input-option"));
                return B.length && (h.inputOptions = {}, B.forEach(ge => {
                    Qn(ge, ["value"]);
                    const Ue = ge.getAttribute("value"),
                        Gt = ge.innerHTML;
                    h.inputOptions[Ue] = Gt
                })), h
            },
            Vo = (c, h) => {
                const b = {};
                for (const B in h) {
                    const ge = h[B],
                        Ue = c.querySelector(ge);
                    Ue && (Qn(Ue, []), b[ge.replace(/^swal-/, "")] = Ue.innerHTML.trim())
                }
                return b
            },
            No = c => {
                const h = Xi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const B = b.tagName.toLowerCase();
                    h.indexOf(B) === -1 && f("Unrecognized element <".concat(B, ">"))
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

        function Bo(c) {
            c.inputValidator || Object.keys(Cs).forEach(h => {
                c.input === h && (c.inputValidator = Cs[h])
            })
        }

        function $o(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function xs(c) {
            Bo(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), $o(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), bi(c)
        }
        class Br {
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
                Me.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Me.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Me.previousBodyPadding + Hi(), "px"))
            },
            $r = () => {
                Me.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Me.previousBodyPadding, "px"), Me.previousBodyPadding = null)
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
                h && b && !c.match(/CriOS/i) && we().scrollHeight > window.innerHeight - 44 && (H().style.paddingBottom = "".concat(44, "px"))
            },
            jr = () => {
                const c = H();
                let h;
                c.ontouchstart = b => {
                    h = jo(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            jo = c => {
                const h = c.target,
                    b = H();
                return Fo(c) || zo(c) ? !1 : h === b || !Ne(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ne(_e()) && _e().contains(h))
            },
            Fo = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            zo = c => c.touches && c.touches.length > 1,
            ki = () => {
                if (xt(document.body, Y.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Lt(document.body, Y.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            Fr = 10,
            zr = c => {
                const h = H(),
                    b = we();
                typeof c.willOpen == "function" && c.willOpen(b);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    Uo(h, b)
                }, Fr), Se() && (Ho(h, c.scrollbarPadding, ge), Si()), !he() && !st.previousActiveElement && (st.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Lt(h, Y["no-transition"])
            },
            ks = c => {
                const h = we();
                if (c.target !== h) return;
                const b = H();
                h.removeEventListener(vn, ks), b.style.overflowY = "auto"
            },
            Uo = (c, h) => {
                vn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(vn, ks)) : c.style.overflowY = "auto"
            },
            Ho = (c, h, b) => {
                _s(), h && b !== "hidden" && Es(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, b) => {
                Ze(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), W(h, "grid"), setTimeout(() => {
                    Ze(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, Fr), Ze([document.documentElement, document.body], Y.shown), b.heightAuto && b.backdrop && !b.toast && Ze([document.documentElement, document.body], Y["height-auto"])
            },
            s = c => {
                let h = we();
                h || new Ot, h = we();
                const b = E();
                he() ? D(ye()) : u(h, c), W(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = g(),
                    B = E();
                !h && pe(dt()) && (h = dt()), W(b), h && (D(h), B.setAttribute("data-button-to-replace", h.className)), B.parentNode.insertBefore(B, h), Ze([c, b], Y.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? U(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && ($(h.inputValue) || ie(h.inputValue)) && (s(dt()), Z(c, h))
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
                    B = ge => le[h.input](b, be(ge), h);
                $(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), J(h.inputOptions).then(ge => {
                    c.hideLoading(), B(ge)
                })) : typeof h.inputOptions == "object" ? B(h.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const b = c.getInput();
                D(b), J(h.inputValue).then(B => {
                    b.value = h.input === "number" ? parseFloat(B) || 0 : "".concat(B), W(b), b.focus(), c.hideLoading()
                }).catch(B => {
                    v("Error in inputValue promise: ".concat(B)), b.value = "", W(b), b.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, b) => {
                    const B = j(c, Y.select),
                        ge = (Ue, Gt, Bn) => {
                            const gn = document.createElement("option");
                            gn.value = Bn, rt(gn, Gt), gn.selected = ne(Bn, b.inputValue), Ue.appendChild(gn)
                        };
                    h.forEach(Ue => {
                        const Gt = Ue[0],
                            Bn = Ue[1];
                        if (Array.isArray(Bn)) {
                            const gn = document.createElement("optgroup");
                            gn.label = Gt, gn.disabled = !1, B.appendChild(gn), Bn.forEach(rr => ge(gn, rr[1], rr[0]))
                        } else ge(B, Bn, Gt)
                    }), B.focus()
                },
                radio: (c, h, b) => {
                    const B = j(c, Y.radio);
                    h.forEach(Ue => {
                        const Gt = Ue[0],
                            Bn = Ue[1],
                            gn = document.createElement("input"),
                            rr = document.createElement("label");
                        gn.type = "radio", gn.name = Y.radio, gn.value = Gt, ne(Gt, b.inputValue) && (gn.checked = !0);
                        const na = document.createElement("span");
                        rt(na, Bn), na.className = Y.label, rr.appendChild(gn), rr.appendChild(na), B.appendChild(rr)
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
            D(h.loader), he() ? c.icon && W(ye()) : qe(h), Lt([h.popup, h.actions], Y.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const qe = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? W(h[0], "inline-block") : Ve() && D(c.actions)
        };

        function ot(c) {
            const h = A.innerParams.get(c || this),
                b = A.domCache.get(c || this);
            return b ? yt(b.popup, h.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const Ut = () => pe(we()),
            Vt = () => dt() && dt().click(),
            hn = () => Bt() && Bt().click(),
            St = () => l() && l().click(),
            nt = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            an = (c, h, b, B) => {
                nt(h), b.toast || (h.keydownHandler = ge => Ki(c, ge, B), h.keydownTarget = b.keydownListenerCapture ? window : we(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, b) => {
                const B = te();
                if (B.length) return h = h + b, h === B.length ? h = 0 : h === -1 && (h = B.length - 1), B[h].focus();
                we().focus()
            },
            Mt = ["ArrowRight", "ArrowDown"],
            Ti = ["ArrowLeft", "ArrowUp"],
            Ki = (c, h, b) => {
                const B = A.innerParams.get(c);
                !B || h.isComposing || h.keyCode === 229 || (B.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? dn(c, h, B) : h.key === "Tab" ? Zn(h, B) : [...Mt, ...Ti].includes(h.key) ? ei(h.key) : h.key === "Escape" && ln(h, B, b))
            },
            dn = (c, h, b) => {
                if (!!M(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Vt(), h.preventDefault()
                }
            },
            Zn = (c, h) => {
                const b = c.target,
                    B = te();
                let ge = -1;
                for (let Ue = 0; Ue < B.length; Ue++)
                    if (b === B[Ue]) {
                        ge = Ue;
                        break
                    } c.shiftKey ? ft(h, ge, -1) : ft(h, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            ei = c => {
                const h = dt(),
                    b = Bt(),
                    B = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, B].includes(document.activeElement)) return;
                const ge = Mt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Ue = document.activeElement;
                for (let Gt = 0; Gt < g().children.length; Gt++) {
                    if (Ue = Ue[ge], !Ue) return;
                    if (Ue instanceof HTMLButtonElement && pe(Ue)) break
                }
                Ue instanceof HTMLButtonElement && Ue.focus()
            },
            ln = (c, h, b) => {
                M(h.allowEscapeKey) && (c.preventDefault(), b(Jn.esc))
            };

        function Ln(c, h, b, B) {
            he() ? Os(c, B) : (yi(b).then(() => Os(c, B)), nt(st)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), Se() && ($r(), ki(), Vr()), yn()
        }

        function yn() {
            Lt([document.documentElement, document.body], [Y.shown, Y["height-auto"], Y["no-backdrop"], Y["toast-shown"]])
        }

        function xn(c) {
            c = ni(c);
            const h = je.swalPromiseResolve.get(this),
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
            Lt(h, b.showClass.popup), Ze(h, b.hideClass.popup);
            const B = H();
            return Lt(B, b.showClass.backdrop), Ze(B, b.hideClass.backdrop), As(c, h, b), !0
        };

        function Ur(c) {
            const h = je.swalPromiseReject.get(this);
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
                const B = H(),
                    ge = vn && pt(h);
                typeof b.willClose == "function" && b.willClose(h), ge ? Hr(c, h, B, b.returnFocus, b.didClose) : Ln(c, B, b.returnFocus, b.didClose)
            },
            Hr = (c, h, b, B, ge) => {
                st.swalCloseEventFinishedCallback = Ln.bind(null, c, b, B, ge), h.addEventListener(vn, function(Ue) {
                    Ue.target === h && (st.swalCloseEventFinishedCallback(), delete st.swalCloseEventFinishedCallback)
                })
            },
            Os = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Ai(c, h, b) {
            const B = A.domCache.get(c);
            h.forEach(ge => {
                B[ge].disabled = b
            })
        }

        function Rs(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const B = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < B.length; ge++) B[ge].disabled = h
            } else c.disabled = h
        }

        function Is() {
            Ai(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function Go() {
            Ai(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function qo() {
            return Rs(this.getInput(), !1)
        }

        function Wo() {
            return Rs(this.getInput(), !0)
        }

        function Yi(c) {
            const h = A.domCache.get(this),
                b = A.innerParams.get(this);
            rt(h.validationMessage, c), h.validationMessage.className = Y["validation-message"], b.customClass && b.customClass.validationMessage && Ze(h.validationMessage, b.customClass.validationMessage), W(h.validationMessage);
            const B = this.getInput();
            B && (B.setAttribute("aria-invalid", !0), B.setAttribute("aria-describedby", Y["validation-message"]), bt(B), Ze(B, Y.inputerror))
        }

        function Xo() {
            const c = A.domCache.get(this);
            c.validationMessage && D(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Lt(h, Y.inputerror))
        }

        function Ko() {
            return A.domCache.get(this).progressSteps
        }

        function Yo(c) {
            const h = we(),
                b = A.innerParams.get(this);
            if (!h || xt(h, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const B = Oi(c),
                ge = Object.assign({}, b, B);
            Pr(this, ge), A.innerParams.set(this, ge), Object.defineProperties(this, {
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

        function Jo() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                An(this);
                return
            }
            c.popup && st.swalCloseEventFinishedCallback && (st.swalCloseEventFinishedCallback(), delete st.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Gr(this)
        }
        const Gr = c => {
                An(c), delete c.params, delete st.keydownHandler, delete st.keydownTarget, delete st.currentInstance
            },
            An = c => {
                c.isAwaitingPromise() ? (En(A, c), A.awaitingPromise.set(c, !0)) : (En(je, c), En(A, c))
            },
            En = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var qr = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: ot,
            close: xn,
            isAwaitingPromise: Ts,
            rejectPromise: Ur,
            handleAwaitingPromise: gt,
            closePopup: xn,
            closeModal: xn,
            closeToast: xn,
            enableButtons: Is,
            disableButtons: Go,
            enableInput: qo,
            disableInput: Wo,
            showValidationMessage: Yi,
            resetValidationMessage: Xo,
            getProgressSteps: Ko,
            update: Yo,
            _destroy: Jo
        });
        const Ms = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? kt(c, "confirm") : Zi(c, !0)
            },
            Ds = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? kt(c, "deny") : fn(c, !1)
            },
            Qo = (c, h) => {
                c.disableButtons(), h(Jn.cancel)
            },
            kt = (c, h) => {
                const b = A.innerParams.get(c);
                if (!b.input) {
                    v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const B = w(c, b);
                b.inputValidator ? Ji(c, B, h) : c.getInput().checkValidity() ? h === "deny" ? fn(c, B) : Zi(c, B) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Ji = (c, h, b) => {
                const B = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(B.inputValidator(h, B.validationMessage))).then(Ue => {
                    c.enableButtons(), c.enableInput(), Ue ? c.showValidationMessage(Ue) : b === "deny" ? fn(c, h) : Zi(c, h)
                })
            },
            fn = (c, h) => {
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
            wn = (c, h) => {
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
                    pe(Qe()) || ge === !1 ? (c.hideLoading(), gt(c)) : wn(c, typeof ge > "u" ? h : ge)
                }).catch(ge => Qi(c || void 0, ge))) : wn(c, h)
            },
            Zo = (c, h, b) => {
                A.innerParams.get(c).toast ? ea(c, h, b) : (Wr(h), Ps(h), er(c, h, b))
            },
            ea = (c, h, b) => {
                h.popup.onclick = () => {
                    const B = A.innerParams.get(c);
                    B && (Ls(B) || B.timer || B.input) || b(Jn.close)
                }
            },
            Ls = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let On = !1;
        const Wr = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (On = !0)
                    }
                }
            },
            Ps = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (On = !0)
                    }
                }
            },
            er = (c, h, b) => {
                h.container.onclick = B => {
                    const ge = A.innerParams.get(c);
                    if (On) {
                        On = !1;
                        return
                    }
                    B.target === h.container && M(ge.allowOutsideClick) && b(Jn.backdrop)
                }
            },
            tr = c => typeof c == "object" && c.jquery,
            nr = c => c instanceof Element || tr(c),
            ta = c => {
                const h = {};
                return typeof c[0] == "object" && !nr(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, B) => {
                    const ge = c[B];
                    typeof ge == "string" || nr(ge) ? h[b] = ge : ge !== void 0 && v("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), h
            };

        function ir() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), B = 0; B < h; B++) b[B] = arguments[B];
            return new c(...b)
        }

        function Xr(c) {
            class h extends this {
                _main(B, ge) {
                    return super._main(B, Object.assign({}, c, ge))
                }
            }
            return h
        }
        const Kr = () => st.timeout && st.timeout.getTimerLeft(),
            Vs = () => {
                if (st.timeout) return Je(), st.timeout.stop()
            },
            R = () => {
                if (st.timeout) {
                    const c = st.timeout.start();
                    return Ft(c), c
                }
            },
            F = () => {
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
                    const B = h.getAttribute(b);
                    if (B) {
                        me[b].fire({
                            template: B
                        });
                        return
                    }
                }
        };
        var De = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: ve,
            argsToParams: ta,
            isVisible: Ut,
            clickConfirm: Vt,
            clickDeny: hn,
            clickCancel: St,
            getContainer: H,
            getPopup: we,
            getTitle: ue,
            getHtmlContainer: _e,
            getImage: ke,
            getIcon: ye,
            getInputLabel: qt,
            getCloseButton: L,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Bt,
            getCancelButton: l,
            getLoader: E,
            getFooter: _,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Qe,
            isLoading: Ie,
            fire: ir,
            mixin: Xr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Kr,
            stopTimer: Vs,
            resumeTimer: R,
            toggleTimer: F,
            increaseTimer: X,
            isTimerRunning: de,
            bindClickHandler: xe
        });
        let ze;
        class Ge {
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
                const Ue = ze._main(ze.params);
                A.promise.set(this, Ue)
            }
            _main(h) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Le(Object.assign({}, b, h)), st.currentInstance && (st.currentInstance._destroy(), Se() && Vr()), st.currentInstance = ze;
                const B = ht(h, b);
                xs(B), Object.freeze(B), st.timeout && (st.timeout.stop(), delete st.timeout), clearTimeout(st.restoreFocusTimeout);
                const ge = At(ze);
                return Pr(ze, B), A.innerParams.set(ze, B), Ye(ze, ge, B)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Ye = (c, h, b) => new Promise((B, ge) => {
                const Ue = Gt => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Gt
                    })
                };
                je.swalPromiseResolve.set(c, B), je.swalPromiseReject.set(c, ge), h.confirmButton.onclick = () => Ms(c), h.denyButton.onclick = () => Ds(c), h.cancelButton.onclick = () => Qo(c, Ue), h.closeButton.onclick = () => Ue(Jn.close), Zo(c, h, Ue), an(c, st, b, Ue), p(c, b), zr(b), Xe(st, b, Ue), Ht(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const b = Mo(c),
                    B = Object.assign({}, re, h, b, c);
                return B.showClass = Object.assign({}, re.showClass, B.showClass), B.hideClass = Object.assign({}, re.hideClass, B.hideClass), B
            },
            At = c => {
                const h = {
                    popup: we(),
                    container: H(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Bt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: L(),
                    validationMessage: Qe(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            Xe = (c, h, b) => {
                const B = O();
                D(B), h.timer && (c.timeout = new Br(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (W(B), ct(B, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(h.timer)
                })))
            },
            Ht = (c, h) => {
                if (!h.toast) {
                    if (!M(h.allowEnterKey)) return pn();
                    Zt(c, h) || ft(h, -1, 1)
                }
            },
            Zt = (c, h) => h.focusDeny && pe(c.denyButton) ? (c.denyButton.focus(), !0) : h.focusCancel && pe(c.cancelButton) ? (c.cancelButton.focus(), !0) : h.focusConfirm && pe(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
            pn = () => {
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
        Object.assign(Ge.prototype, qr), Object.assign(Ge, De), Object.keys(qr).forEach(c => {
            Ge[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ge.DismissReason = Jn, Ge.version = "11.4.26";
        const Ot = Ge;
        return Ot.default = Ot, Ot
    }), typeof vt < "u" && vt.Sweetalert2 && (vt.swal = vt.sweetAlert = vt.Swal = vt.SweetAlert = vt.Sweetalert2), typeof document < "u" && function(n, i) {
        var a = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(a), a.styleSheet) a.styleSheet.disabled || (a.styleSheet.cssText = i);
        else try {
            a.innerHTML = i
        } catch {
            a.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(ih);
const Yt = ih.exports;
class _t {
    static get DismissReason() {
        return Yt.DismissReason
    }
    static show(e, n = {}) {
        switch (Yt.isVisible() && Yt.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
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
        Yt.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", Yt.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp7/worldchampions/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), Yt.fire(e)
    }
    static async showCustom(e) {
        return Yt.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", Yt.fire(e)
    }
}
const AC = `<div class="canvasContainer">\r
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
    OC = {
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
            const t = Eo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Vi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Vi().width, Vi().height))
        }
    },
    RC = Ct.View.extend({
        template: He.template(AC),
        className: "CameraUser",
        model: new Ke.Model({
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
            CC("cameraCanvas"), t.sprites = [], t.gameLoop = _C({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = ml(OC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                    console.error(i), _t.show("alert", {
                        titleText: "Unable to Access Camera",
                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else _t.show("alert", {
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
    In = Ke.Model.extend({
        defaults: {},
        set(t, e) {
            const n = He.extend({}, this.attributes, this.defaults, t);
            return Ke.Model.prototype.set.apply(this, [n, e]), this
        },
        setUpdate(t, e) {
            const n = He.extend({}, this.defaults, this.attributes, t);
            return Ke.Model.prototype.set.apply(this, [n, e]), this
        }
    }),
    IC = In.extend({
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
    MC = Ct.View.extend({
        template: He.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new IC,
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
            this.cameraView = this.cameraView || new RC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    DC = '<a class="change-color button-color btn"></a>',
    LC = Ct.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: He.template(DC),
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
    PC = Ct.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: LC,
        collection: new Ke.Collection([]),
        initialize() {
            this.listenTo(this.collection, "sync", this.render)
        },
        childViewOptions() {
            return {
                transparent: this.getOption("transparent")
            }
        }
    }),
    VC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp7/worldchampions/assets/5f12600b.png"/></svg>\r
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
    Xs = Ct.View.extend({
        tagName: "div",
        className: "picker",
        template: He.template(VC),
        model: new Ke.Model({}),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new PC({
                collection: new Ke.Collection
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
class oo {
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
        const M = this.options.minThickness * e + this.options.thicknessFactor * k,
            $ = this.lastThickness + this.options.thicknessSmoothingFactor * (M - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = I);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(I),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(I),
            K = Math.sin(I),
            re = Math.cos(I),
            m = this.lastThickness * J,
            P = this.lastThickness * ie,
            q = $ * K,
            ae = $ * re,
            se = .33 * k * J,
            ve = -.33 * k * ie,
            d = this.lastSmoothedMouse.x + P + se,
            Ee = this.lastSmoothedMouse.y + m + ve,
            Ae = this.lastSmoothedMouse.x - P + se,
            Le = this.lastSmoothedMouse.y - m + ve;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(d, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + q), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.canvasCTX.quadraticCurveTo(Ae, Le, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
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
const gc = {
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
class NC {
    constructor(e, n = {}) {
        at(this, "canvasSelector");
        at(this, "canvas");
        at(this, "ctx");
        at(this, "options");
        at(this, "history");
        at(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Pe(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(gc, n), this.history = [], this.layerNames.forEach(i => {
            const a = new oo(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
        const n = Object.assign(gc.sketchOptions, e);
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
const BC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    $C = Ct.View.extend({
        className: "Sketchpad canvasContainer",
        template: He.template(BC),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new NC(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
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
    jC = `<div class="controller-content">\r
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
    FC = In.extend({
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
    jn = Ct.View.extend({
        className: "Draw",
        template: He.template(jC),
        model: new FC,
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
            this.promptComponent = this.promptComponent || new ai({}), this.toolbarComponent = this.toolbarComponent || new Xs({
                model: new Ke.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new $C({
                model: new Ke.Model
            }), this.buttonsCollection = this.buttonsCollection || new Ke.Collection([]), this.buttonsComponent = this.buttonsComponent || new Un({
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
            this.stickit(), this.update(), this.onResize(), _t.vibrate()
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
            if (t.length === 0 && !this.model.get("allowEmpty")) return _t.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                    lines: t,
                    action: "submit"
                },
                n = this.model.get("objectKey");
            return n && (e.objectKey = n, e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), this.model.get("debug") && _t.show("custom", {
                html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
            }), !1
        },
        onObjectFilterError() {
            _t.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
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
                M = a * I,
                $ = f * I;
            e.style.width = `${M}px`, e.style.height = `${$}px`, window.scrollTo(0, 0)
        }
    }),
    rh = `<div>
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
    zC = In.extend({
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
    di = Ct.View.extend({
        className: "EnterSingleText scrollable",
        template: He.template(rh),
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new ai({
                model: new Ke.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new so({
                model: new Ke.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new Ke.Collection([{
                text: "submit"
            }]), this.buttonsComponent = this.buttonsComponent || new Un({
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
            this.update(), _t.vibrate()
        },
        onChildviewInputText(t) {
            let e = t.getValue();
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = He.throttle(() => {
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
                n = He.without(t, e);
            return this.inputComponent.setValue(He.shuffle(n)[0]), !1
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
    }),
    ao = Ct.View.extend({
        model: new Ke.Model({}),
        myViewOptions: ["width", "height", "sketchOptions"],
        template: He.template(`
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
            const a = new oo(t, e, n);
            a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
        },
        onRender() {
            this.stickit()
        }
    });
Ct.View.extend({
    appId: "legacymain",
    appTag: "legacymain",
    template: null,
    client: null,
    initialize(t) {
        this.client = t.client, this.mergeOptions(t, ["appId", "appTag"]), this.model = new Ke.Model({});
        const e = this.client.parseEntities();
        this.model.set(e), this.model.on("change", this.controllerUpdate, this), this.model.on("change", () => {
            this.update().catch(this.caughtError)
        }), this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), this.client.on("client:connection", this.onConnectionMessageWithContext), this.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), this.client.on("client:disconnected", this.onDisconnectedWithContext)
    },
    render() {
        this.model.set("username", jt.safeText(this.client.name), {
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
        }) : si.hide(), t.platformId && tn.setTag(`platform-${t.platformId}`)
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
        e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), _t.show("custom", {
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
        _t.vibrate()
    },
    onRoomWasDestroyed() {
        tn.remove("roomCode"), tn.remove("reconnect"), _t.show("error", {
            titleText: "Disconnected",
            text: "Thanks for playing!",
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        _t.show("error", {
            titleText: "Disconnected",
            text: "You have been disconnected.",
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
        if (_t.show("toast", {
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
const sh = `<div id="controller" class="state-controller controller-content">
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
    UC = In.extend({
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
    HC = Ct.View.extend({
        tagName: "button",
        template: He.template('<span class="flex-item"></span>'),
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
    oh = Ct.View.extend({
        className: "Lobby scrollable",
        template: He.template(sh),
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
                    return t && !He.isEmpty(t)
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
            this.titleComponent = new ai({
                model: new Ke.Model({})
            }), this.choicesListView = this.choicesListView || new Un, this.charactersListView = new Ct.CollectionView({
                childView: HC,
                className: "charactersList",
                collection: new Ke.Collection
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
                        a = i && i.metadata ? jt.htmlUnescape(i.metadata.title) : null;
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
                e && e.error && this.lastUGCResultId !== e.id && (_t.show("alert", {
                    text: e.error
                }), this.lastUGCResultId = e.id)
            }
            this.model.get("canChangeName") && this.choicesListView.collection.add({
                html: this.getOption("strings").button_changename,
                action: "changeName"
            }), this.model.get("choices") && this.choicesListView.collection.add(this.model.get("choices"));
            const t = this.model.get("characters") || [];
            this.charactersListView.collection.set(He.map(t, e => {
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
                        const a = await _t.show("custom", {
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
                    } catch {} else if (i === "censorOptions") _t.show("custom", {
                        target: this.el,
                        html: "",
                        confirmButtonText: this.model.get("strings").button_cancel,
                        customClass: {
                            popup: "censorOptionsModal",
                            confirmButton: "cancelButton"
                        },
                        didOpen() {
                            const a = new Un({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new Ke.Collection
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
            }) : i === "ugc" ? _t.show("custom", {
                target: this.el,
                html: "",
                showConfirmButton: !1,
                customClass: {
                    popup: "episodesModal"
                },
                background: e.model.get("playerInfo") && e.model.get("playerInfo").bgColor ? e.model.get("playerInfo").bgColor : null,
                padding: "10px 5px",
                didOpen: () => {
                    const a = new Un({
                        el: ".episodesModal",
                        action: "episode",
                        collection: new Ke.Collection([])
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
                        _t.close()
                    }), e.listenTo(a, "childview:input:submit", e.activateContentIdFromInput)
                }
            }) : this.triggerMethod("client:message", {
                action: i
            })
        },
        censorPlayer(t) {
            _t.close(), this.triggerMethod("client:message", {
                action: "censor",
                id: t.get("key")
            })
        },
        activateContentId(t) {
            _t.close(), this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.get("key")
            })
        },
        activateContentIdFromInput(t) {
            (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
            }), _t.close())
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
    GC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    qC = In.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    WC = Ct.View.extend({
        className: "Logo",
        template: He.template(GC),
        model: new qC,
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
    XC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    KC = Ct.View.extend({
        className: "playerTopBarView",
        template: He.template(XC),
        model: new Ke.Model,
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
    YC = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    JC = In.extend({
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
    $a = Ct.View.extend({
        className: "MakeSingleChoice scrollable",
        template: He.template(YC),
        model: new JC,
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
            this.promptComponent = this.promptComponent || new ai({
                model: new Ke.Model
            }), this.choicesList = this.choicesList || new Un({
                action: "choose",
                collection: new Ke.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            this.promptComponent.model.clear({
                silent: !0
            }).set(this.model.get("prompt")), this.choicesList.options.block = this.model.get("block"), this.choicesList.collection.set(this.model.get("choices")), this.model.get("type") === "multiple" && He.all(this.model.get("choices"), t => !t.disabled) && this.choicesList.collection.push({
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
            this.update(), _t.vibrate()
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
                if (this.model.get("censorDialog") === "warning") return Yt.close(), Yt.fire({
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
function mc(t, e) {
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
        e % 2 ? mc(Object(n), !0).forEach(function(i) {
            QC(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Ks(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ks = function(e) {
        return typeof e
    } : Ks = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Ks(t)
}

function QC(t, e, n) {
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

function ZC(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function ex(t, e) {
    if (t == null) return {};
    var n = ZC(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var tx = "1.15.0";

function oi(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var ci = oi(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    ms = oi(/Edge/i),
    vc = oi(/firefox/i),
    ls = oi(/safari/i) && !oi(/chrome/i) && !oi(/android/i),
    ah = oi(/iP(ad|od|hone)/i),
    lh = oi(/chrome/i) && oi(/android/i),
    ch = {
        capture: !1,
        passive: !1
    };

function Et(t, e, n) {
    t.addEventListener(e, n, !ci && ch)
}

function wt(t, e, n) {
    t.removeEventListener(e, n, !ci && ch)
}

function lo(t, e) {
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

function nx(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function Fn(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && lo(t, e) : lo(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = nx(t))
    }
    return null
}
var yc = /\s+/g;

function _n(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(yc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(yc, " ")
        }
}

function it(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function mr(t, e) {
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

function uh(t, e, n) {
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

function Hn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Jt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, v, S, k, I, M, $;
        if (t !== window && t.parentNode && t !== Hn() ? (f = t.getBoundingClientRect(), v = f.top, S = f.left, k = f.bottom, I = f.right, M = f.height, $ = f.width) : (v = 0, S = 0, k = window.innerHeight, I = window.innerWidth, M = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !ci))
            do
                if (a && a.getBoundingClientRect && (it(a, "transform") !== "none" || n && it(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    v -= J.top + parseInt(it(a, "border-top-width")), S -= J.left + parseInt(it(a, "border-left-width")), k = v + f.height, I = S + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = mr(a || t),
                K = ie && ie.a,
                re = ie && ie.d;
            ie && (v /= re, S /= K, $ /= K, M /= re, k = v + M, I = S + $)
        }
        return {
            top: v,
            left: S,
            bottom: k,
            right: I,
            width: $,
            height: M
        }
    }
}

function wc(t, e, n) {
    for (var i = mi(t, !0), a = Jt(t)[e]; i;) {
        var f = Jt(i)[n],
            v = void 0;
        if (n === "top" || n === "left" ? v = a >= f : v = a <= f, !v) return i;
        if (i === Hn()) break;
        i = mi(i, !1)
    }
    return !1
}

function br(t, e, n, i) {
    for (var a = 0, f = 0, v = t.children; f < v.length;) {
        if (v[f].style.display !== "none" && v[f] !== et.ghost && (i || v[f] !== et.dragged) && Fn(v[f], n.draggable, t, !1)) {
            if (a === e) return v[f];
            a++
        }
        f++
    }
    return null
}

function vl(t, e) {
    for (var n = t.lastElementChild; n && (n === et.ghost || it(n, "display") === "none" || e && !lo(n, e));) n = n.previousElementSibling;
    return n || null
}

function Rn(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== et.clone && (!e || lo(t, e)) && n++;
    return n
}

function bc(t) {
    var e = 0,
        n = 0,
        i = Hn();
    if (t)
        do {
            var a = mr(t),
                f = a.a,
                v = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * v
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function ix(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function mi(t, e) {
    if (!t || !t.getBoundingClientRect) return Hn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = it(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return Hn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return Hn()
}

function rx(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function ya(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var cs;

function hh(t, e) {
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

function sx() {
    clearTimeout(cs), cs = void 0
}

function dh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function fh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var kn = "Sortable" + new Date().getTime();

function ox() {
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
                            var v = mr(a, !0);
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
            t.splice(ix(t, {
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
                    M = I.fromRect,
                    $ = Jt(I),
                    J = I.prevFromRect,
                    ie = I.prevToRect,
                    K = S.rect,
                    re = mr(I, !0);
                re && ($.top -= re.f, $.left -= re.e), I.toRect = $, I.thisAnimationDuration && ya(J, $) && !ya(M, $) && (K.top - $.top) / (K.left - $.left) === (M.top - $.top) / (M.left - $.left) && (k = lx(K, J, ie, a.options)), ya($, M) || (I.prevFromRect = M, I.prevToRect = $, k || (k = a.options.animation), a.animate(I, K, $, k)), k && (f = !0, v = Math.max(v, k), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, k), I.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, v) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, v) {
            if (v) {
                it(i, "transition", ""), it(i, "transform", "");
                var S = mr(this.el),
                    k = S && S.a,
                    I = S && S.d,
                    M = (a.left - f.left) / (k || 1),
                    $ = (a.top - f.top) / (I || 1);
                i.animatingX = !!M, i.animatingY = !!$, it(i, "transform", "translate3d(" + M + "px," + $ + "px,0)"), this.forRepaintDummy = ax(i), it(i, "transition", "transform " + v + "ms" + (this.options.easing ? " " + this.options.easing : "")), it(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    it(i, "transition", ""), it(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, v)
            }
        }
    }
}

function ax(t) {
    return t.offsetWidth
}

function lx(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var or = [],
    wa = {
        initializeByDefault: !0
    },
    vs = {
        mount: function(e) {
            for (var n in wa) wa.hasOwnProperty(n) && !(n in e) && (e[n] = wa[n]);
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
            or.forEach(function(v) {
                !n[v.pluginName] || (n[v.pluginName][f] && n[v.pluginName][f](Gn({
                    sortable: n
                }, i)), n.options[v.pluginName] && n[v.pluginName][e] && n[v.pluginName][e](Gn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            or.forEach(function(S) {
                var k = S.pluginName;
                if (!(!e.options[k] && !S.initializeByDefault)) {
                    var I = new S(e, n, e.options);
                    I.sortable = e, I.options = e.options, e[k] = I, li(i, I.defaults)
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

function cx(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        f = t.cloneEl,
        v = t.toEl,
        S = t.fromEl,
        k = t.oldIndex,
        I = t.newIndex,
        M = t.oldDraggableIndex,
        $ = t.newDraggableIndex,
        J = t.originalEvent,
        ie = t.putSortable,
        K = t.extraEventProperties;
    if (e = e || n && n[kn], !!e) {
        var re, m = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !ci && !ms ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = v || n, re.from = S || n, re.item = a || n, re.clone = f, re.oldIndex = k, re.newIndex = I, re.oldDraggableIndex = M, re.newDraggableIndex = $, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var q = Gn(Gn({}, K), vs.getEventProperties(i, e));
        for (var ae in q) re[ae] = q[ae];
        n && n.dispatchEvent(re), m[P] && m[P].call(e, re)
    }
}
var ux = ["evt"],
    bn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = ex(i, ux);
        vs.pluginEvent.bind(et)(e, n, Gn({
            dragEl: Re,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Li,
            lastDownEl: Ys,
            cloneEl: Nt,
            cloneHidden: pi,
            dragStarted: es,
            putSortable: nn,
            activeSortable: et.active,
            originalEvent: a,
            oldIndex: hr,
            oldDraggableIndex: us,
            newIndex: Sn,
            newDraggableIndex: fi,
            hideGhostForTarget: vh,
            unhideGhostForTarget: yh,
            cloneNowHidden: function() {
                pi = !0
            },
            cloneNowShown: function() {
                pi = !1
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
    cx(Gn({
        putSortable: nn,
        cloneEl: Nt,
        targetEl: Re,
        rootEl: Pt,
        oldIndex: hr,
        oldDraggableIndex: us,
        newIndex: Sn,
        newDraggableIndex: fi
    }, t))
}
var Re, $t, ut, Pt, Li, Ys, Nt, pi, hr, Sn, us, fi, zs, nn, ur = !1,
    co = !1,
    uo = [],
    Ii, Pn, ba, Ca, Cc, xc, es, ar, hs, ds = !1,
    Us = !1,
    Js, cn, xa = [],
    ja = !1,
    ho = [],
    So = typeof document < "u",
    Hs = ah,
    Ec = ms || ci ? "cssFloat" : "float",
    hx = So && !lh && !ah && "draggable" in document.createElement("div"),
    ph = function() {
        if (!!So) {
            if (ci) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    gh = function(e, n) {
        var i = it(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = br(e, 0, n),
            v = br(e, 1, n),
            S = f && it(f),
            k = v && it(v),
            I = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Jt(f).width,
            M = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Jt(v).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && S.float && S.float !== "none") {
            var $ = S.float === "left" ? "left" : "right";
            return v && (k.clear === "both" || k.clear === $) ? "vertical" : "horizontal"
        }
        return f && (S.display === "block" || S.display === "flex" || S.display === "table" || S.display === "grid" || I >= a && i[Ec] === "none" || v && i[Ec] === "none" && I + M > a) ? "vertical" : "horizontal"
    },
    dx = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            v = i ? e.width : e.height,
            S = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return a === S || f === k || a + v / 2 === S + I / 2
    },
    fx = function(e, n) {
        var i;
        return uo.some(function(a) {
            var f = a[kn].options.emptyInsertThreshold;
            if (!(!f || vl(a))) {
                var v = Jt(a),
                    S = e >= v.left - f && e <= v.right + f,
                    k = n >= v.top - f && n <= v.bottom + f;
                if (S && k) return i = a
            }
        }), i
    },
    mh = function(e) {
        function n(f, v) {
            return function(S, k, I, M) {
                var $ = S.options.group.name && k.options.group.name && S.options.group.name === k.options.group.name;
                if (f == null && (v || $)) return !0;
                if (f == null || f === !1) return !1;
                if (v && f === "clone") return f;
                if (typeof f == "function") return n(f(S, k, I, M), v)(S, k, I, M);
                var J = (v ? S : k).options.group.name;
                return f === !0 || typeof f == "string" && f === J || f.join && f.indexOf(J) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Ks(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    vh = function() {
        !ph && ut && it(ut, "display", "none")
    },
    yh = function() {
        !ph && ut && it(ut, "display", "")
    };
So && !lh && document.addEventListener("click", function(t) {
    if (co) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), co = !1, !1
}, !0);
var Mi = function(e) {
        if (Re) {
            e = e.touches ? e.touches[0] : e;
            var n = fx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[kn]._onDragOver(i)
            }
        }
    },
    px = function(e) {
        Re && Re.parentNode[kn]._isOutsideThisEl(e.target)
    };

function et(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = li({}, e), t[kn] = this;
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
            return gh(t, this.options)
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
        supportPointer: et.supportPointer !== !1 && "PointerEvent" in window && !ls,
        emptyInsertThreshold: 5
    };
    vs.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    mh(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : hx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Et(t, "pointerdown", this._onTapStart) : (Et(t, "mousedown", this._onTapStart), Et(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Et(t, "dragover", this), Et(t, "dragenter", this)), uo.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), li(this, ox())
}
et.prototype = {
    constructor: et,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (ar = null)
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
                M = a.filter;
            if (xx(i), !Re && !(/mousedown|pointerdown/.test(v) && e.button !== 0 || a.disabled) && !I.isContentEditable && !(!this.nativeDraggable && ls && k && k.tagName.toUpperCase() === "SELECT") && (k = Fn(k, a.draggable, i, !1), !(k && k.animated) && Ys !== k)) {
                if (hr = Rn(k), us = Rn(k, a.draggable), typeof M == "function") {
                    if (M.call(this, e, k, this)) {
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
                } else if (M && (M = M.split(",").some(function($) {
                        if ($ = Fn(I, $.trim(), i, !1), $) return mn({
                            sortable: n,
                            rootEl: $,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), !0
                    }), M)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !Fn(I, a.handle, i, !1) || this._prepareDragStart(e, S, k)
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
            if (Pt = f, Re = i, $t = Re.parentNode, Li = Re.nextSibling, Ys = i, zs = v.group, et.dragged = Re, Ii = {
                    target: Re,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, Cc = Ii.clientX - I.left, xc = Ii.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Re.style["will-change"] = "all", k = function() {
                    if (bn("delayEnded", a, {
                            evt: e
                        }), et.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !vc && a.nativeDraggable && (Re.draggable = !0), a._triggerDragStart(e, n), mn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), _n(Re, v.chosenClass, !0)
                }, v.ignore.split(",").forEach(function(M) {
                    uh(Re, M.trim(), Ea)
                }), Et(S, "dragover", Mi), Et(S, "mousemove", Mi), Et(S, "touchmove", Mi), Et(S, "mouseup", a._onDrop), Et(S, "touchend", a._onDrop), Et(S, "touchcancel", a._onDrop), vc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Re.draggable = !0), bn("delayStart", this, {
                    evt: e
                }), v.delay && (!v.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ms || ci))) {
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
        Re && Ea(Re), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._disableDelayedDrag), wt(e, "touchend", this._disableDelayedDrag), wt(e, "touchcancel", this._disableDelayedDrag), wt(e, "mousemove", this._delayedDragTouchMoveHandler), wt(e, "touchmove", this._delayedDragTouchMoveHandler), wt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Et(document, "pointermove", this._onTouchMove) : n ? Et(document, "touchmove", this._onTouchMove) : Et(document, "mousemove", this._onTouchMove) : (Et(Re, "dragend", this), Et(Pt, "dragstart", this._onDragStart));
        try {
            document.selection ? Qs(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (ur = !1, Pt && Re) {
            bn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && Et(document, "dragover", px);
            var i = this.options;
            !e && _n(Re, i.dragClass, !1), _n(Re, i.ghostClass, !0), et.active = this, e && this._appendGhost(), mn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Pn) {
            this._lastX = Pn.clientX, this._lastY = Pn.clientY, vh();
            for (var e = document.elementFromPoint(Pn.clientX, Pn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Pn.clientX, Pn.clientY), e !== n);) n = e;
            if (Re.parentNode[kn]._isOutsideThisEl(e), n)
                do {
                    if (n[kn]) {
                        var i = void 0;
                        if (i = n[kn]._onDragOver({
                                clientX: Pn.clientX,
                                clientY: Pn.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            yh()
        }
    },
    _onTouchMove: function(e) {
        if (Ii) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                v = ut && mr(ut, !0),
                S = ut && v && v.a,
                k = ut && v && v.d,
                I = Hs && cn && bc(cn),
                M = (f.clientX - Ii.clientX + a.x) / (S || 1) + (I ? I[0] - xa[0] : 0) / (S || 1),
                $ = (f.clientY - Ii.clientY + a.y) / (k || 1) + (I ? I[1] - xa[1] : 0) / (k || 1);
            if (!et.active && !ur) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                v ? (v.e += M - (ba || 0), v.f += $ - (Ca || 0)) : v = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: M,
                    f: $
                };
                var J = "matrix(".concat(v.a, ",").concat(v.b, ",").concat(v.c, ",").concat(v.d, ",").concat(v.e, ",").concat(v.f, ")");
                it(ut, "webkitTransform", J), it(ut, "mozTransform", J), it(ut, "msTransform", J), it(ut, "transform", J), ba = M, Ca = $, Pn = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Jt(Re, !0, Hs, !0, e),
                i = this.options;
            if (Hs) {
                for (cn = e; it(cn, "position") === "static" && it(cn, "transform") === "none" && cn !== document;) cn = cn.parentNode;
                cn !== document.body && cn !== document.documentElement ? (cn === document && (cn = Hn()), n.top += cn.scrollTop, n.left += cn.scrollLeft) : cn = Hn(), xa = bc(cn)
            }
            ut = Re.cloneNode(!0), _n(ut, i.ghostClass, !1), _n(ut, i.fallbackClass, !0), _n(ut, i.dragClass, !0), it(ut, "transition", ""), it(ut, "transform", ""), it(ut, "box-sizing", "border-box"), it(ut, "margin", 0), it(ut, "top", n.top), it(ut, "left", n.left), it(ut, "width", n.width), it(ut, "height", n.height), it(ut, "opacity", "0.8"), it(ut, "position", Hs ? "absolute" : "fixed"), it(ut, "zIndex", "100000"), it(ut, "pointerEvents", "none"), et.ghost = ut, e.appendChild(ut), it(ut, "transform-origin", Cc / parseInt(ut.style.width) * 100 + "% " + xc / parseInt(ut.style.height) * 100 + "%")
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
        bn("setupClone", this), et.eventCanceled || (Nt = fh(Re), Nt.removeAttribute("id"), Nt.draggable = !1, Nt.style["will-change"] = "", this._hideClone(), _n(Nt, this.options.chosenClass, !1), et.clone = Nt), i.cloneId = Qs(function() {
            bn("clone", i), !et.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Nt, Re), i._hideClone(), mn({
                sortable: i,
                name: "clone"
            }))
        }), !n && _n(Re, f.dragClass, !0), n ? (co = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Re)), Et(document, "drop", i), it(Re, "transform", "translateZ(0)")), ur = !0, i._dragStartId = Qs(i._dragStarted.bind(i, n, e)), Et(document, "selectstart", i), es = !0, ls && it(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, v, S = this.options,
            k = S.group,
            I = et.active,
            M = zs === k,
            $ = S.sort,
            J = nn || I,
            ie, K = this,
            re = !1;
        if (ja) return;

        function m(ye, ue) {
            bn(ye, K, Gn({
                evt: e,
                isOwner: M,
                axis: ie ? "vertical" : "horizontal",
                revert: v,
                dragRect: a,
                targetRect: f,
                canSort: $,
                fromSortable: J,
                target: i,
                completed: q,
                onMove: function(ke, $e) {
                    return Gs(Pt, n, Re, a, ke, Jt(ke), e, $e)
                },
                changed: ae
            }, ue))
        }

        function P() {
            m("dragOverAnimationCapture"), K.captureAnimationState(), K !== J && J.captureAnimationState()
        }

        function q(ye) {
            return m("dragOverCompleted", {
                insertion: ye
            }), ye && (M ? I._hideClone() : I._showClone(K), K !== J && (_n(Re, nn ? nn.options.ghostClass : I.options.ghostClass, !1), _n(Re, S.ghostClass, !0)), nn !== K && K !== et.active ? nn = K : K === et.active && nn && (nn = null), J === K && (K._ignoreWhileAnimating = i), K.animateAll(function() {
                m("dragOverAnimationComplete"), K._ignoreWhileAnimating = null
            }), K !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Re && !Re.animated || i === n && !i.animated) && (ar = null), !S.dragoverBubble && !e.rootEl && i !== document && (Re.parentNode[kn]._isOutsideThisEl(e.target), !ye && Mi(e)), !S.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            Sn = Rn(Re), fi = Rn(Re, S.draggable), mn({
                sortable: K,
                name: "change",
                toEl: n,
                newIndex: Sn,
                newDraggableIndex: fi,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = Fn(i, S.draggable, n, !0), m("dragOver"), et.eventCanceled) return re;
        if (Re.contains(e.target) || i.animated && i.animatingX && i.animatingY || K._ignoreWhileAnimating === i) return q(!1);
        if (co = !1, I && !S.disabled && (M ? $ || (v = $t !== Pt) : nn === this || (this.lastPutMode = zs.checkPull(this, I, Re, e)) && k.checkPut(this, I, Re, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Jt(Re), m("dragOverValid"), et.eventCanceled) return re;
            if (v) return $t = Pt, P(), this._hideClone(), m("revert"), et.eventCanceled || (Li ? Pt.insertBefore(Re, Li) : Pt.appendChild(Re)), q(!0);
            var se = vl(n, S.draggable);
            if (!se || yx(e, ie, this) && !se.animated) {
                if (se === Re) return q(!1);
                if (se && n === e.target && (i = se), i && (f = Jt(i)), Gs(Pt, n, Re, a, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Re, se.nextSibling) : n.appendChild(Re), $t = n, ae(), q(!0)
            } else if (se && vx(e, ie, this)) {
                var ve = br(n, 0, S, !0);
                if (ve === Re) return q(!1);
                if (i = ve, f = Jt(i), Gs(Pt, n, Re, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Re, ve), $t = n, ae(), q(!0)
            } else if (i.parentNode === n) {
                f = Jt(i);
                var d = 0,
                    Ee, Ae = Re.parentNode !== n,
                    Le = !dx(Re.animated && Re.toRect || a, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Be = wc(i, "top", "top") || wc(Re, "top", "top"),
                    Y = Be ? Be.scrollTop : void 0;
                ar !== i && (Ee = f[lt], ds = !1, Us = !Le && S.invertSwap || Ae), d = wx(e, i, f, ie, Le ? 1 : S.swapThreshold, S.invertedSwapThreshold == null ? S.swapThreshold : S.invertedSwapThreshold, Us, ar === i);
                var Fe;
                if (d !== 0) {
                    var H = Rn(Re);
                    do H -= d, Fe = $t.children[H]; while (Fe && (it(Fe, "display") === "none" || Fe === ut))
                }
                if (d === 0 || Fe === i) return q(!1);
                ar = i, hs = d;
                var oe = i.nextElementSibling,
                    Te = !1;
                Te = d === 1;
                var we = Gs(Pt, n, Re, a, i, f, e, Te);
                if (we !== !1) return (we === 1 || we === -1) && (Te = we === 1), ja = !0, setTimeout(mx, 30), P(), Te && !oe ? n.appendChild(Re) : i.parentNode.insertBefore(Re, Te ? oe : i), Be && dh(Be, 0, Y - Be.scrollTop), $t = Re.parentNode, Ee !== void 0 && !Us && (Js = Math.abs(Ee - Jt(i)[lt])), ae(), q(!0)
            }
            if (n.contains(Re)) return q(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        wt(document, "mousemove", this._onTouchMove), wt(document, "touchmove", this._onTouchMove), wt(document, "pointermove", this._onTouchMove), wt(document, "dragover", Mi), wt(document, "mousemove", Mi), wt(document, "touchmove", Mi)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._onDrop), wt(e, "touchend", this._onDrop), wt(e, "pointerup", this._onDrop), wt(e, "touchcancel", this._onDrop), wt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (Sn = Rn(Re), fi = Rn(Re, i.draggable), bn("drop", this, {
                evt: e
            }), $t = Re && Re.parentNode, Sn = Rn(Re), fi = Rn(Re, i.draggable), et.eventCanceled) {
            this._nulling();
            return
        }
        ur = !1, Us = !1, ds = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Fa(this.cloneId), Fa(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ls && it(document.body, "user-select", ""), it(Re, "transform", ""), e && (es && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || nn && nn.lastPutMode !== "clone") && Nt && Nt.parentNode && Nt.parentNode.removeChild(Nt), Re && (this.nativeDraggable && wt(Re, "dragend", this), Ea(Re), Re.style["will-change"] = "", es && !ur && _n(Re, nn ? nn.options.ghostClass : this.options.ghostClass, !1), _n(Re, this.options.chosenClass, !1), mn({
            sortable: this,
            name: "unchoose",
            toEl: $t,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Pt !== $t ? (Sn >= 0 && (mn({
            rootEl: $t,
            name: "add",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), mn({
            sortable: this,
            name: "remove",
            toEl: $t,
            originalEvent: e
        }), mn({
            rootEl: $t,
            name: "sort",
            toEl: $t,
            fromEl: Pt,
            originalEvent: e
        }), mn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), nn && nn.save()) : Sn !== hr && Sn >= 0 && (mn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), mn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), et.active && ((Sn == null || Sn === -1) && (Sn = hr, fi = us), mn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        bn("nulling", this), Pt = Re = $t = ut = Li = Nt = Ys = pi = Ii = Pn = es = Sn = fi = hr = us = ar = hs = nn = zs = et.dragged = et.ghost = et.clone = et.active = null, ho.forEach(function(e) {
            e.checked = !0
        }), ho.length = ba = Ca = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Re && (this._onDragOver(e), gx(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, v = this.options; a < f; a++) n = i[a], Fn(n, v.draggable, this.el, !1) && e.push(n.getAttribute(v.dataIdAttr) || Cx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, v) {
            var S = a.children[v];
            Fn(S, this.options.draggable, a, !1) && (i[f] = S)
        }, this), n && this.captureAnimationState(), e.forEach(function(f) {
            i[f] && (a.removeChild(i[f]), a.appendChild(i[f]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return Fn(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var a = vs.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && mh(i)
    },
    destroy: function() {
        bn("destroy", this);
        var e = this.el;
        e[kn] = null, wt(e, "mousedown", this._onTapStart), wt(e, "touchstart", this._onTapStart), wt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (wt(e, "dragover", this), wt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), uo.splice(uo.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!pi) {
            if (bn("hideClone", this), et.eventCanceled) return;
            it(Nt, "display", "none"), this.options.removeCloneOnHide && Nt.parentNode && Nt.parentNode.removeChild(Nt), pi = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (pi) {
            if (bn("showClone", this), et.eventCanceled) return;
            Re.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Nt, Re) : Li ? Pt.insertBefore(Nt, Li) : Pt.appendChild(Nt), this.options.group.revertClone && this.animate(Re, Nt), it(Nt, "display", ""), pi = !1
        }
    }
};

function gx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Gs(t, e, n, i, a, f, v, S) {
    var k, I = t[kn],
        M = I.options.onMove,
        $;
    return window.CustomEvent && !ci && !ms ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = f || Jt(e), k.willInsertAfter = S, k.originalEvent = v, t.dispatchEvent(k), M && ($ = M.call(I, k, v)), $
}

function Ea(t) {
    t.draggable = !1
}

function mx() {
    ja = !1
}

function vx(t, e, n) {
    var i = Jt(br(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function yx(t, e, n) {
    var i = Jt(vl(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function wx(t, e, n, i, a, f, v, S) {
    var k = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        M = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        J = !1;
    if (!v) {
        if (S && Js < I * a) {
            if (!ds && (hs === 1 ? k > M + I * f / 2 : k < $ - I * f / 2) && (ds = !0), ds) J = !0;
            else if (hs === 1 ? k < M + Js : k > $ - Js) return -hs
        } else if (k > M + I * (1 - a) / 2 && k < $ - I * (1 - a) / 2) return bx(e)
    }
    return J = J || v, J && (k < M + I * f / 2 || k > $ - I * f / 2) ? k > M + I / 2 ? 1 : -1 : 0
}

function bx(t) {
    return Rn(Re) < Rn(t) ? 1 : -1
}

function Cx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function xx(t) {
    ho.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && ho.push(i)
    }
}

function Qs(t) {
    return setTimeout(t, 0)
}

function Fa(t) {
    return clearTimeout(t)
}
So && Et(document, "touchmove", function(t) {
    (et.active || ur) && t.cancelable && t.preventDefault()
});
et.utils = {
    on: Et,
    off: wt,
    css: it,
    find: uh,
    is: function(e, n) {
        return !!Fn(e, n, e, !1)
    },
    extend: rx,
    throttle: hh,
    closest: Fn,
    toggleClass: _n,
    clone: fh,
    index: Rn,
    nextTick: Qs,
    cancelNextTick: Fa,
    detectDirection: gh,
    getChild: br
};
et.get = function(t) {
    return t[kn]
};
et.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (et.utils = Gn(Gn({}, et.utils), i.utils)), vs.mount(i)
    })
};
et.create = function(t, e) {
    return new et(t, e)
};
et.version = tx;
var Wt = [],
    ts, za, Ua = !1,
    _a, Sa, fo, ns;

function Ex() {
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
            this.sortable.nativeDraggable ? wt(document, "dragover", this._handleAutoScroll) : (wt(document, "pointermove", this._handleFallbackAutoScroll), wt(document, "touchmove", this._handleFallbackAutoScroll), wt(document, "mousemove", this._handleFallbackAutoScroll)), _c(), Zs(), sx()
        },
        nulling: function() {
            fo = za = ts = Ua = ns = _a = Sa = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                v = (n.touches ? n.touches[0] : n).clientY,
                S = document.elementFromPoint(f, v);
            if (fo = n, i || this.options.forceAutoScrollFallback || ms || ci || ls) {
                ka(n, this.options, S, i);
                var k = mi(S, !0);
                Ua && (!ns || f !== _a || v !== Sa) && (ns && _c(), ns = setInterval(function() {
                    var I = mi(document.elementFromPoint(f, v), !0);
                    I !== k && (k = I, Zs()), ka(n, a.options, I, i)
                }, 10), _a = f, Sa = v)
            } else {
                if (!this.options.bubbleScroll || mi(S, !0) === Hn()) {
                    Zs();
                    return
                }
                ka(n, this.options, mi(S, !1), !1)
            }
        }
    }, li(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Zs() {
    Wt.forEach(function(t) {
        clearInterval(t.pid)
    }), Wt = []
}

function _c() {
    clearInterval(ns)
}
var ka = hh(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                v = e.scrollSensitivity,
                S = e.scrollSpeed,
                k = Hn(),
                I = !1,
                M;
            za !== n && (za = n, Zs(), ts = e.scroll, M = e.scrollFn, ts === !0 && (ts = mi(n, !0)));
            var $ = 0,
                J = ts;
            do {
                var ie = J,
                    K = Jt(ie),
                    re = K.top,
                    m = K.bottom,
                    P = K.left,
                    q = K.right,
                    ae = K.width,
                    se = K.height,
                    ve = void 0,
                    d = void 0,
                    Ee = ie.scrollWidth,
                    Ae = ie.scrollHeight,
                    Le = it(ie),
                    lt = ie.scrollLeft,
                    Be = ie.scrollTop;
                ie === k ? (ve = ae < Ee && (Le.overflowX === "auto" || Le.overflowX === "scroll" || Le.overflowX === "visible"), d = se < Ae && (Le.overflowY === "auto" || Le.overflowY === "scroll" || Le.overflowY === "visible")) : (ve = ae < Ee && (Le.overflowX === "auto" || Le.overflowX === "scroll"), d = se < Ae && (Le.overflowY === "auto" || Le.overflowY === "scroll"));
                var Y = ve && (Math.abs(q - a) <= v && lt + ae < Ee) - (Math.abs(P - a) <= v && !!lt),
                    Fe = d && (Math.abs(m - f) <= v && Be + se < Ae) - (Math.abs(re - f) <= v && !!Be);
                if (!Wt[$])
                    for (var H = 0; H <= $; H++) Wt[H] || (Wt[H] = {});
                (Wt[$].vx != Y || Wt[$].vy != Fe || Wt[$].el !== ie) && (Wt[$].el = ie, Wt[$].vx = Y, Wt[$].vy = Fe, clearInterval(Wt[$].pid), (Y != 0 || Fe != 0) && (I = !0, Wt[$].pid = setInterval(function() {
                    i && this.layer === 0 && et.active._onTouchMove(fo);
                    var oe = Wt[this.layer].vy ? Wt[this.layer].vy * S : 0,
                        Te = Wt[this.layer].vx ? Wt[this.layer].vx * S : 0;
                    typeof M == "function" && M.call(et.dragged.parentNode[kn], Te, oe, t, fo, Wt[this.layer].el) !== "continue" || dh(Wt[this.layer].el, Te, oe)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && J !== k && (J = mi(J, !1)));
            Ua = I
        }
    }, 30),
    wh = function(e) {
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
            var M = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                $ = document.elementFromPoint(M.clientX, M.clientY);
            k(), I && !I.el.contains($) && (v("spill"), this.onSpill({
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
        var a = br(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: wh
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
    drop: wh
};
li(wl, {
    pluginName: "removeOnSpill"
});
et.mount(new Ex);
et.mount(wl, yl);
const _x = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Sx = In.extend({
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
    kx = Ct.View.extend({
        tagName: "div",
        className: "sortable-item",
        template: He.template("<div class='text'></div>"),
        model: new Ke.Model({}),
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
    Sc = Ct.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: kx,
        collection: new Ke.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    Tx = Ct.View.extend({
        className: "SorterView",
        template: He.template(`
        <div id="rankedChoicesRegion"></div>
        <div class="instructions">Choose where this item ranks:</div>
        <div id="unrankedChoicesRegion"></div>
        <div id="lockInRegion"></div>
    `),
        model: new Ke.Model({
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
            this.rankedCollectionView = this.rankedCollectionView || new Sc({
                collection: new Ke.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new Sc({
                className: "sortable-collection unranked",
                collection: new Ke.Collection([])
            }), this.lockInView = this.lockInView || new os({
                block: !1,
                model: new Ke.Model({
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
    Ax = Ct.View.extend({
        className: "Sortable scrollable",
        template: He.template(_x),
        model: new Sx,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new ai({
                model: new Ke.Model
            }), this.sorterView = this.sorterView || new Tx({}), this.listenTo(this.model, "change", this.update, this)
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
    Ox = `<div id="controller" class="state-controller controller-content">
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
    Rx = In.extend({
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
    Ix = Ct.View.extend({
        className: "UGC scrollable",
        template: He.template(Ox),
        model: new Rx,
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
            this.client = t.client, this.promptComponent = this.promptComponent || new ai({
                model: new Ke.Model
            }), this.episodesList = this.episodesList || new Un({
                action: "load",
                collection: new Ke.Collection
            }), this.inputComponent = this.inputComponent || new so({
                model: new Ke.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new so({
                model: new Ke.Model({
                    inlineSubmit: !0,
                    counter: !0
                })
            }), this.promptsList = this.promptsList || new Un({
                action: "remove",
                collection: new Ke.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onRender() {
            this.showChildView("prompt", this.promptComponent), this.showChildView("episodes", this.episodesList), this.showChildView("input", this.inputComponent), this.showChildView("titleInput", this.titleInputComponent), this.showChildView("prompts", this.promptsList)
        },
        onAttach() {
            this.stickit(), this.update(), _t.vibrate()
        },
        update() {
            const t = this.model.get("validActions").length === 0 ? this.model.get("noActionsText") : this.model.get("text");
            this.promptComponent.model.set("text", t);
            const e = this.model.get("episodes").map(n => {
                const i = jt.htmlUnescape(n.metadata.title);
                let a = jt.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = He.extend({}, n);
                i.text = jt.htmlUnescape(n.text);
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
            Yt.fire({
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
            Yt.fire({
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
    Dx = Ct.View.extend({
        className: "RadialView",
        template: He.template(Mx),
        model: new Ke.Model({
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
            const t = He.extend({}, this.model.get("vector"));
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
    Lx = `<div id="status-bar" class="health text">\r
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
    Px = In.extend({
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
    Vx = Ct.View.extend({
        model: new Px,
        template: He.template(Lx),
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
            this.client = t.client, this.radialComponent = new Dx({
                model: new Ke.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = He.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Pe(window).on("mousemove", this.move.bind(this)), Pe(window).on("mouseup", this.end.bind(this))
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
                }), this.throttledUpdate = He.throttle(this.updateVector, this.model.get("throttle")), this.model.get("lockedIn")) this.notified = !1;
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
                    _t.vibrate(n)
                }
                this.notified = !0
            }
        },
        onRender() {
            this.showChildView("radial", this.radialComponent), this.stickit()
        },
        onAttach() {
            this.update(), this.onResize(), _t.vibrate()
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
    Nx = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
const Bx = Ct.View.extend({
    client: null,
    template: He.template(Nx),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new KC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new Ke.Model({});
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
                return this.setLayout(jn);
            case "EnterSingleText":
                return this.setLayout(di);
            case "Lobby":
                return this.setLayout(oh);
            case "Logo":
                return this.setLayout(WC);
            case "MakeSingleChoice":
                return this.setLayout($a);
            case "Shoot":
                return this.setLayout(Vx);
            case "Sortable":
                return this.setLayout(Ax);
            case "Camera":
                return this.setLayout(MC);
            case "UGC":
                return this.setLayout(Ix);
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
        t && !He.isEmpty(t) ? i = {
            ...He.omit(e, "audience"),
            ...t
        } : this.client.isRole("audience") && n ? i = {
            ...He.omit(e, "audience"),
            ...n.audience
        } : this.client.isRole("audience") && e && e.audience ? i = {
            ...He.omit(e, "audience"),
            ...e.audience
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && tn.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: He.debounce(function() {
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
            </div>`, this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), _t.show("custom", {
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
        tn.remove("roomCode"), tn.remove("reconnect"), _t.show("error", {
            titleText: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        _t.show("error", {
            titleText: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Fs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
        if (_t.show("toast", {
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
var bh = {
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
            for (var M = k.length; M--;)
                if (k[M].listener === I) return M;
            return -1
        }

        function v(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(I) {
            var M = this._getEvents(),
                $, J;
            if (I instanceof RegExp) {
                $ = {};
                for (J in M) M.hasOwnProperty(J) && I.test(J) && ($[J] = M[J])
            } else $ = M[I] || (M[I] = []);
            return $
        }, i.flattenListeners = function(I) {
            var M = [],
                $;
            for ($ = 0; $ < I.length; $ += 1) M.push(I[$].listener);
            return M
        }, i.getListenersAsObject = function(I) {
            var M = this.getListeners(I),
                $;
            return M instanceof Array && ($ = {}, $[I] = M), $ || M
        };

        function S(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? S(k.listener) : !1
        }
        i.addListener = function(I, M) {
            if (!S(M)) throw new TypeError("listener must be a function");
            var $ = this.getListenersAsObject(I),
                J = typeof M == "object",
                ie;
            for (ie in $) $.hasOwnProperty(ie) && f($[ie], M) === -1 && $[ie].push(J ? M : {
                listener: M,
                once: !1
            });
            return this
        }, i.on = v("addListener"), i.addOnceListener = function(I, M) {
            return this.addListener(I, {
                listener: M,
                once: !0
            })
        }, i.once = v("addOnceListener"), i.defineEvent = function(I) {
            return this.getListeners(I), this
        }, i.defineEvents = function(I) {
            for (var M = 0; M < I.length; M += 1) this.defineEvent(I[M]);
            return this
        }, i.removeListener = function(I, M) {
            var $ = this.getListenersAsObject(I),
                J, ie;
            for (ie in $) $.hasOwnProperty(ie) && (J = f($[ie], M), J !== -1 && $[ie].splice(J, 1));
            return this
        }, i.off = v("removeListener"), i.addListeners = function(I, M) {
            return this.manipulateListeners(!1, I, M)
        }, i.removeListeners = function(I, M) {
            return this.manipulateListeners(!0, I, M)
        }, i.manipulateListeners = function(I, M, $) {
            var J, ie, K = I ? this.removeListener : this.addListener,
                re = I ? this.removeListeners : this.addListeners;
            if (typeof M == "object" && !(M instanceof RegExp))
                for (J in M) M.hasOwnProperty(J) && (ie = M[J]) && (typeof ie == "function" ? K.call(this, J, ie) : re.call(this, J, ie));
            else
                for (J = $.length; J--;) K.call(this, M, $[J]);
            return this
        }, i.removeEvent = function(I) {
            var M = typeof I,
                $ = this._getEvents(),
                J;
            if (M === "string") delete $[I];
            else if (I instanceof RegExp)
                for (J in $) $.hasOwnProperty(J) && I.test(J) && delete $[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = v("removeEvent"), i.emitEvent = function(I, M) {
            var $ = this.getListenersAsObject(I),
                J, ie, K, re, m;
            for (re in $)
                if ($.hasOwnProperty(re))
                    for (J = $[re].slice(0), K = 0; K < J.length; K++) ie = J[K], ie.once === !0 && this.removeListener(I, ie.listener), m = ie.listener.apply(this, M || []), m === this._getOnceReturnValue() && this.removeListener(I, ie.listener);
            return this
        }, i.trigger = v("emitEvent"), i.emit = function(I) {
            var M = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(I, M)
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
})(bh);
const $x = bh.exports;
class jx extends $x {
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
            uc(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const v = f;
        i === "room" ? this.emit("client:entityDidChange", i, v) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", v) : i === "bc:room" ? this.emit("client:entityDidChange", "room", v) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", v) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", v) : uc(`[Ecast Client] Unhandled json notification: ${i}`)
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
const Fx = `<div id="content-region" class="content"></div>
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
            var k, I, M, $, J, ie, K, re;
            if (!v && this.length > 0) {
                k = t(this[0]);
                var m = k.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return S = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, S), I = t.mask.definitions, M = [], $ = K = v.length, J = null, t.each(v.split(""), function(P, q) {
                q == "?" ? (K--, $ = P) : I[q] ? (M.push(new RegExp(I[q])), J === null && (J = M.length - 1), $ > P && (ie = M.length - 1)) : M.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (S.completed) {
                        for (var ye = J; ie >= ye; ye++)
                            if (M[ye] && oe[ye] === q(ye)) return;
                        S.completed.call(H)
                    }
                }

                function q(ye) {
                    return S.placeholder.charAt(ye < S.placeholder.length ? ye : 0)
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
                                oe[_e] = oe[ke], oe[ke] = q(ke), ke = ae(ke)
                            } Y(), H.caret(Math.max(J, ye))
                    }
                }

                function d(ye) {
                    var ue, _e, ke, $e;
                    for (ue = ye, _e = q(ye); K > ue; ue++)
                        if (M[ue]) {
                            if (ke = ae(ue), $e = oe[ue], oe[ue] = _e, !(K > ke && M[ke].test($e))) break;
                            _e = $e
                        }
                }

                function Ee() {
                    var ye = H.val(),
                        ue = H.caret();
                    if (re && re.length && re.length > ye.length) {
                        for (Fe(!0); ue.begin > 0 && !M[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < J && !M[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    } else {
                        for (Fe(!0); ue.begin < K && !M[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    }
                    P()
                }

                function Ae() {
                    Fe(), H.val() != we && H.change()
                }

                function Le(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode;
                        re = H.val(), $e === 8 || $e === 46 || i && $e === 127 ? (ue = H.caret(), _e = ue.begin, ke = ue.end, ke - _e === 0 && (_e = $e !== 46 ? se(_e) : ke = ae(_e - 1), ke = $e === 46 ? ae(ke) : ke), Be(_e, ke), ve(_e, ke - 1), ye.preventDefault()) : $e === 13 ? Ae.call(this, ye) : $e === 27 && (H.val(we), H.caret(0, Fe()), ye.preventDefault())
                    }
                }

                function lt(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode,
                            Qe = H.caret();
                        if (!(ye.ctrlKey || ye.altKey || ye.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Qe.end - Qe.begin !== 0 && (Be(Qe.begin, Qe.end), ve(Qe.begin, Qe.end - 1)), ue = ae(Qe.begin - 1), K > ue && (_e = String.fromCharCode($e), M[ue].test(_e))) {
                                if (d(ue), oe[ue] = _e, Y(), ke = ae(ue), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, H, ke)()
                                    };
                                    setTimeout(dt, 0)
                                } else H.caret(ke);
                                Qe.begin <= ie && P()
                            }
                            ye.preventDefault()
                        }
                    }
                }

                function Be(ye, ue) {
                    var _e;
                    for (_e = ye; ue > _e && K > _e; _e++) M[_e] && (oe[_e] = q(_e))
                }

                function Y() {
                    H.val(oe.join(""))
                }

                function Fe(ye) {
                    var ue, _e, ke, $e = H.val(),
                        Qe = -1;
                    for (ue = 0, ke = 0; K > ue; ue++)
                        if (M[ue]) {
                            for (oe[ue] = q(ue); ke++ < $e.length;)
                                if (_e = $e.charAt(ke - 1), M[ue].test(_e)) {
                                    oe[ue] = _e, Qe = ue;
                                    break
                                } if (ke > $e.length) {
                                Be(ue + 1, K);
                                break
                            }
                        } else oe[ue] === $e.charAt(ke) && ke++, $ > ue && (Qe = ue);
                    return ye ? Y() : $ > Qe + 1 ? S.autoclear || oe.join("") === Te ? (H.val() && H.val(""), Be(0, K)) : Y() : (Y(), H.val(H.val().substring(0, Qe + 1))), $ ? ue : J
                }
                var H = t(this),
                    oe = t.map(v.split(""), function(ye, ue) {
                        return ye != "?" ? I[ye] ? q(ue) : ye : void 0
                    }),
                    Te = oe.join(""),
                    we = H.val();
                H.data(t.mask.dataName, function() {
                    return t.map(oe, function(ye, ue) {
                        return M[ue] && ye != q(ue) ? ye : null
                    }).join("")
                }), H.one("unmask", function() {
                    H.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!H.prop("readonly")) {
                        clearTimeout(e);
                        var ye;
                        we = H.val(), ye = Fe(), e = setTimeout(function() {
                            H.get(0) === document.activeElement && (Y(), ye == v.replace("?", "").length ? H.caret(0, ye) : H.caret(ye))
                        }, 10)
                    }
                }).on("blur.mask", Ae).on("keydown.mask", Le).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    H.prop("readonly") || setTimeout(function() {
                        var ye = Fe(!0);
                        H.caret(ye), P()
                    }, 0)
                }), a && f && H.off("input.mask").on("input.mask", Ee), Fe()
            })
        }
    })
});
window.$ = Pe;
window.jQuery = Pe;
const zx = Ct.View.extend({
        className: "app-root",
        template: He.template(Fx),
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
            connect: n => (e = new Di.WSClient(n), e.connect()),
            mount: n => {
                const i = new jx(e, n);
                let a = new Ct.Application({
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
    Hx = In.extend({
        defaults: He.extend({}, jn.prototype.model.defaults, {
            textKey: void 0,
            size: {
                width: 640,
                height: 640
            },
            colors: [{
                hex: "#8014fe"
            }, {
                hex: "#fe34aa"
            }, {
                hex: "#ff5114"
            }, {
                hex: "#1c54ff"
            }, {
                hex: "#000000"
            }, {
                hex: "#ffc212"
            }, {
                hex: "#13ffdb"
            }, {
                hex: "#00ff97"
            }, {
                hex: "#d7ff13"
            }],
            thicknesses: [2, 4],
            defaultIndex: 4,
            forceName: !1,
            champion: {},
            showChampion: !1,
            nameCharacter: !1,
            nameMaxLength: 45,
            sketchOptions: {
                minThickness: 2,
                thicknessFactor: 0,
                smoothingFactor: .9,
                thicknessSmoothingFactor: 0,
                dotMultiplier: 1,
                tipTaperFactor: 1
            },
            strings: He.extend({}, jn.prototype.model.defaults.strings, {
                name_modal_text: "Name your champion:",
                name_modal_confirm: "OK",
                name_modal_cancel: "Cancel",
                name_error_empty: "You need to write something!",
                ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!",
                ERROR_REJECTED_TEXT: "That's not allowed, enter something else!"
            })
        })
    }),
    Gx = Xs.extend({
        template: He.template(`
        <ul class="nav nav-colors">
            <li class="pull-left button-pad">
                <button id="undoButton" class="undo button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp7/worldchampions/assets/5f12600b.png"/></svg>
                </button>
            </li>
            <li class="pull-right button-pad">
                <button id="chooseMarkerButton" class="chooseMarker button">
                </button>
            </li>
            <li class="pull-right button-pad">
                <button id="chooseHighlighterButton" class="chooseHighlighter button">
                </button>
            </li>
            <li class="pull-right button-pad">
                <button aria-label="choose color" id="currentColorButton" class="button currentColorButton">
                    <div id="currentColor" class="currentColor"></div>
                </button>
            </li>
            <li class="pull-right button-pad">
                <button aria-label="show champion" id="showChampionButton" class="showChampion button">
                </button>
            </li>
            <li id="color-palette" class="hide">
            </li>
        </ul>
        <div id="colorPaletteRegion" class="colorPaletteRegion">
    `),
        events: {
            "click #currentColorButton": "onPaletteClick",
            "click #showPaletteButton": "onPaletteClick"
        },
        triggers: He.extend({}, Xs.prototype.triggers, {
            "click #chooseMarkerButton": "choose:marker",
            "click #chooseHighlighterButton": "choose:highlighter"
        }),
        bindings: He.extend({}, Xs.prototype.bindings, {
            ".chooseMarker": {
                attributes: [{
                    name: "style",
                    observe: "currentColor",
                    onGet(t) {
                        return `background-color: ${t}`
                    }
                }],
                classes: {
                    selected: {
                        observe: "highlighter",
                        onGet(t) {
                            return !t
                        }
                    },
                    white: {
                        observe: "currentColor",
                        onGet(t) {
                            return t === "#000000"
                        }
                    }
                }
            },
            ".chooseHighlighter": {
                attributes: [{
                    name: "style",
                    observe: "currentColor",
                    onGet(t) {
                        return `background-color: ${t}`
                    }
                }],
                classes: {
                    selected: "highlighter",
                    white: {
                        observe: "currentColor",
                        onGet(t) {
                            return t === "#000000"
                        }
                    }
                }
            }
        })
    }),
    qx = jn.extend({
        model: new Hx,
        events: He.extend({}, jn.prototype.events, {
            "click #showChampionButton": "onShowChampion"
        }),
        bindings: He.extend({}, jn.prototype.bindings, {
            "#showChampionButton": {
                observe: "champion",
                visible: !0,
                onGet(t) {
                    return t && !He.isEmpty(t)
                }
            }
        }),
        initialize(t) {
            this.toolbarComponent = this.toolbarComponent || new Gx({
                model: new Ke.Model({})
            }), jn.prototype.initialize.apply(this, [t])
        },
        update() {
            this.model.get("showChampion") && this.onShowChampion();
            const t = this.model.get("size").width,
                e = this.model.get("size").height,
                n = this.model.get("sketchOptions");
            if (!He.isEmpty(this.model.get("champion"))) {
                const i = this.model.get("champion").lines;
                new oo(t, e, n).setLines(i);
                const f = new ao({
                    model: new Ke.Model({}),
                    el: "#showChampionButton",
                    width: t,
                    height: e,
                    sketchOptions: n
                });
                f.render(), f.model.set({
                    title: "",
                    lines: i
                })
            }
            this.model.get("forceName") && this.nameCharacter(), jn.prototype.update.apply(this)
        },
        onRender() {
            this.showChildView("toolbar", this.toolbarComponent), jn.prototype.onRender.apply(this)
        },
        onChildviewSketchpadReady() {
            jn.prototype.onChildviewSketchpadReady.apply(this), this.onChildviewChooseMarker()
        },
        onChildviewChooseMarker() {
            this.sketchpadComponent.setHighlighter(!1), this.toolbarComponent.model.set("highlighter", !1);
            const t = this.model.get("thicknesses")[0] || 2;
            this.sketchpadComponent.setThickness(t)
        },
        onChildviewChooseHighlighter() {
            this.sketchpadComponent.setHighlighter(!0), this.toolbarComponent.model.set("highlighter", !0);
            const t = this.model.get("thicknesses")[1] || 8;
            this.sketchpadComponent.setThickness(t)
        },
        onShowChampion() {
            this.naming || (Yt.close(), Yt.fire({
                html: "image",
                customClass: {
                    popup: "worldchamps imageView"
                },
                didOpen: () => {
                    const t = this.model.get("size").width,
                        e = this.model.get("size").height,
                        n = this.model.get("sketchOptions"),
                        i = this.model.get("champion").lines,
                        a = jt.htmlUnescape(this.model.get("champion").name);
                    new oo(t, e, n).setLines(i);
                    const v = new ao({
                        el: ".worldchamps.imageView .swal2-html-container",
                        width: t,
                        height: e,
                        sketchOptions: n
                    });
                    v.render(), v.model.set({
                        title: a,
                        lines: i
                    })
                }
            }))
        },
        autoSubmit() {
            let t = "";
            if (this.model.get("nameCharacter") && Yt.isVisible()) {
                const e = Yt.getInput();
                if (t = e ? e.value : "", t = jt.sanitizeInput(t), t && t.length > 0) {
                    Yt.close();
                    const n = {
                        name: t,
                        action: "name"
                    };
                    this.model.get("textKey") && (n.textKey = this.model.get("textKey"), n.val = t), this.triggerMethod("client:message", n)
                }
            }
        },
        nameCharacter() {
            if (this.naming) return;
            this.naming = !0;
            const t = this.model.get("nameMaxLength");
            Yt.close(), Yt.fire({
                animation: !1,
                customClass: {
                    popup: "worldchamps nameView"
                },
                text: this.model.get("strings").name_modal_text,
                cancelButtonText: this.model.get("strings").name_modal_cancel || "Cancel",
                confirmButtonText: this.model.get("strings").name_modal_confirm || "OK",
                input: "text",
                allowOutsideClick: !1,
                reverseButtons: !0,
                inputAttributes: {
                    maxlength: t,
                    autocapitalize: "on",
                    autocorrect: "off",
                    autocomplete: "off"
                },
                showCancelButton: !0,
                inputValidator: e => e ? null : this.model.get("strings").name_error_empty
            }).then(e => {
                if (this.naming = !1, !e.value) return;
                const n = jt.sanitizeInput(e.value);
                if (!n) return;
                const i = {
                    name: n,
                    action: "name"
                };
                this.model.get("textKey") && (i.textKey = this.model.get("textKey"), i.val = n), this.triggerMethod("client:message", i)
            })
        },
        chooseColor(t) {
            this.sketchpadComponent.setColor(t), this.toolbarComponent.model.set("currentColor", t)
        },
        onChildviewChildviewButtonName() {
            this.nameCharacter()
        },
        onChildviewButtonSubmit() {
            const t = this.sketchpadComponent.getLines();
            if (t.length === 0 && !this.model.get("allowEmpty")) return _t.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                lines: t,
                action: "submit"
            };
            return this.model.get("objectKey") && (e.objectKey = this.model.get("objectKey"), e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), !1
        },
        onTextFilterError(t) {
            const e = this.model.get("strings").ERROR_REJECTED_TEXT || t.message;
            _t.show("error", {
                customClass: {
                    popup: "worldchamps"
                },
                text: e
            })
        }
    }),
    Wx = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="question" class="question">
    	<div id="questionPrompt"></div>
    	<div id="choices"></div>
    </div>
    <div class="surveyDone">
        <span class="doneText"></span>
    </div>
</div>`,
    Xx = In.extend({
        defaults: {
            choiceId: void 0,
            prompt: {},
            questions: [],
            error: null,
            classes: [],
            doneText: {},
            announcePrompt: !1,
            strings: {
                survey_finished: "Thank you for your input. You did your civic duty!"
            }
        }
    }),
    Kx = Ct.View.extend({
        className: "Survey scrollable",
        template: He.template(Wx),
        model: new Xx,
        questionIndex: 0,
        regions: {
            prompt: "#prompt",
            questionPrompt: "#questionPrompt",
            choices: "#choices"
        },
        bindings: {
            ".error": "error",
            ".question": {
                observe: "chosen",
                visible(t) {
                    return !t
                }
            },
            ".surveyDone": {
                observe: "chosen",
                visible(t) {
                    return t !== null && t !== "" && t !== !1
                }
            },
            ".doneText": {
                observe: "strings",
                updateMethod: "html",
                onGet(t) {
                    return t ? t.survey_finished : null
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
            this.promptView = this.promptView || new ai({
                model: new Ke.Model
            }), this.questionPromptView = this.questionPromptView || new ai({
                model: new Ke.Model
            }), this.choicesList = this.choicesList || new Un({
                action: "choose",
                collection: new Ke.Collection
            }), this.selected = [], this.listenTo(this.model, "change", this.update, this)
        },
        onBeforeDestroy() {
            this.model.get("type") === "multiple" && this.onChildviewChildviewButtonSubmit()
        },
        update() {
            if ((this.model.get("choiceId") === void 0 || this.model.get("choiceId") !== this.choiceId) && (this.questionIndex = 0, this.model.setUpdate({
                    chosen: !1
                }), this.choiceId = this.model.get("choiceId")), this.promptView.model.set(this.model.get("prompt")), this.questionIndex >= this.model.get("questions").length) this.model.get("chosen") || this.model.setUpdate({
                chosen: !0
            });
            else {
                const t = this.model.get("questions")[this.questionIndex];
                this.questionPromptView.model.set(t.prompt), this.choicesList.collection.set(t.choices)
            }
        },
        onRender() {
            this.showChildView("prompt", this.promptView), this.showChildView("questionPrompt", this.questionPromptView), this.showChildView("choices", this.choicesList), this.stickit()
        },
        onAttach() {
            this.update(), _t.vibrate()
        },
        onChildviewChildviewButtonChoose(t) {
            const e = this.choicesList.children.findByModel(t),
                n = t.get("index"),
                a = this.model.get("questions")[this.questionIndex].countGroupName;
            return Pe("button").removeClass("active"), e.$el.addClass("active"), this.model.get("type") === "single" && t.set("selected", !0), this.selected = [t.get("index")], this.triggerMethod("client:countGroup", {
                name: a,
                vote: n
            }), this.questionIndex += 1, this.update(), !1
        }
    }),
    Yx = In.extend({
        defaults: He.extend({}, di.prototype.model.defaults, {
            champion: {},
            sketchOptions: {
                minThickness: 2,
                thicknessFactor: 0,
                smoothingFactor: .9,
                thicknessSmoothingFactor: 0,
                dotMultiplier: 1,
                tipTaperFactor: 1
            },
            size: {
                width: 640,
                height: 640
            }
        })
    }),
    Jx = di.extend({
        model: new Yx,
        template: He.template(`
        <div id="championRegion"></div>
        ${rh}`),
        bindings: He.extend({}, di.prototype.bindings, {
            "#championRegion": {
                observe: "champion",
                visible: !0
            }
        }),
        regions: He.extend({}, di.prototype.regions, {
            champion: "#championRegion"
        }),
        initialize(t) {
            this.championComponent = this.championComponent || new ao({
                model: new Ke.Model({})
            }), di.prototype.initialize.apply(this, [t])
        },
        onRender() {
            this.showChildView("champion", this.championComponent), di.prototype.onRender.apply(this)
        },
        update() {
            if (this.model.get("champion")) {
                const t = this.model.get("champion") || {},
                    e = t.size || {
                        width: 640,
                        height: 640
                    },
                    n = t.sketchOptions || this.model.get("sketchOptions");
                this.championComponent.width = e.width, this.championComponent.height = e.height, this.championComponent.sketchOptions = n, this.championComponent.model.set({
                    title: t.name,
                    lines: t.lines
                })
            }
            di.prototype.update.apply(this)
        }
    }),
    Qx = os.extend({
        bindings: He.extend({}, os.prototype.bindings, {
            "button:first": He.extend({}, os.prototype.bindings["button:first"], {
                observe: ["text", "html", "image", "champion"],
                updateMethod: "html",
                onGet([t, e, n, i]) {
                    let a = "";
                    if (e ? a += e : t && (a += Pe("<div />").text(t).html()), n || i) {
                        const f = new ao({
                            el: this.$el.find("button:first"),
                            model: new Ke.Model({})
                        });
                        if (f.render(), n && f.model.set({
                                src: n,
                                title: jt.htmlUnescape(a)
                            }), i) {
                            const {
                                size: v,
                                lines: S,
                                sketchOptions: k
                            } = i;
                            f.width = v.width, f.height = v.height, f.sketchOptions = k, f.model.set({
                                title: jt.htmlUnescape(a),
                                lines: S
                            })
                        }
                        a = f.$el.html()
                    }
                    return a
                }
            })
        })
    }),
    Zx = $a.extend({
        initialize(t) {
            this.choicesList = new Un({
                childView: Qx
            }), $a.prototype.initialize.apply(this, [t])
        }
    }),
    eE = oh.extend({
        template: He.template(`${sh}<div class="mech"></div>`)
    });
const tE = Bx.extend({
    sessionModulePrefix: "WorldChampions",
    getGameLayout(t) {
        switch (t) {
            case "Draw":
                return this.setLayout(qx);
            case "Survey":
                return this.setLayout(Kx);
            case "EnterSingleText":
                return this.setLayout(Jx);
            case "MakeSingleChoice":
                return this.setLayout(Zx);
            case "Lobby":
                return this.setLayout(eE);
            default:
                return -1
        }
    },
    parseBlob(t) {
        return t.classes = t.classes || [], t.playerInfo = t.playerInfo || {}, t.playerInfo.classes = t.playerInfo.classes || [], t.playerInfo.avatar && (t.classes = He.union(t.classes, [t.playerInfo.avatar]), t.playerInfo.classes = He.union(t.playerInfo.classes, [t.playerInfo.avatar])), t
    }
});
Ux({
    MainView: tE
});
//# sourceMappingURL=24c34926.js.map