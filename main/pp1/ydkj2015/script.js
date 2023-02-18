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
        var a = Object.getOwnPropertyDescriptor(t, i);
        Object.defineProperty(n, i, a.get ? a : {
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
                        for (var N = arguments[M], te = l(N), ke = te.length, de = 0; de < ke; de++) {
                            var De = te[de];
                            (!g || _[De] === void 0) && (_[De] = N[De])
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
        m.each = m.forEach = function(l, g, _) {
            g = P(g, _);
            var O, M;
            if (Oe(l))
                for (O = 0, M = l.length; O < M; O++) g(l[O], O, l);
            else {
                var N = m.keys(l);
                for (O = 0, M = N.length; O < M; O++) g(l[N[O]], N[O], l)
            }
            return l
        }, m.map = m.collect = function(l, g, _) {
            g = q(g, _);
            for (var O = !Oe(l) && m.keys(l), M = (O || l).length, N = Array(M), te = 0; te < M; te++) {
                var ke = O ? O[te] : te;
                N[te] = g(l[ke], ke, l)
            }
            return N
        };

        function Pe(l) {
            function g(_, O, M, N, te, ke) {
                for (; te >= 0 && te < ke; te += l) {
                    var de = N ? N[te] : te;
                    M = O(M, _[de], de, _)
                }
                return M
            }
            return function(_, O, M, N) {
                O = P(O, N, 4);
                var te = !Oe(_) && m.keys(_),
                    ke = (te || _).length,
                    de = l > 0 ? 0 : ke - 1;
                return arguments.length < 3 && (M = _[te ? te[de] : de], de += l), g(_, O, M, te, de, ke)
            }
        }
        m.reduce = m.foldl = m.inject = Pe(1), m.reduceRight = m.foldr = Pe(-1), m.find = m.detect = function(l, g, _) {
            var O;
            if (Oe(l) ? O = m.findIndex(l, g, _) : O = m.findKey(l, g, _), O !== void 0 && O !== -1) return l[O]
        }, m.filter = m.select = function(l, g, _) {
            var O = [];
            return g = q(g, _), m.each(l, function(M, N, te) {
                g(M, N, te) && O.push(M)
            }), O
        }, m.reject = function(l, g, _) {
            return m.filter(l, m.negate(q(g)), _)
        }, m.every = m.all = function(l, g, _) {
            g = q(g, _);
            for (var O = !Oe(l) && m.keys(l), M = (O || l).length, N = 0; N < M; N++) {
                var te = O ? O[N] : N;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, m.some = m.any = function(l, g, _) {
            g = q(g, _);
            for (var O = !Oe(l) && m.keys(l), M = (O || l).length, N = 0; N < M; N++) {
                var te = O ? O[N] : N;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(l, g, _, O) {
            return Oe(l) || (l = m.values(l)), (typeof _ != "number" || O) && (_ = 0), m.indexOf(l, g, _) >= 0
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
                l = Oe(l) ? l : m.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) N = l[ke], N > O && (O = N)
            } else g = q(g, _), m.each(l, function(De, Le, nt) {
                te = g(De, Le, nt), (te > M || te === -1 / 0 && O === -1 / 0) && (O = De, M = te)
            });
            return O
        }, m.min = function(l, g, _) {
            var O = 1 / 0,
                M = 1 / 0,
                N, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : m.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) N = l[ke], N < O && (O = N)
            } else g = q(g, _), m.each(l, function(De, Le, nt) {
                te = g(De, Le, nt), (te < M || te === 1 / 0 && O === 1 / 0) && (O = De, M = te)
            });
            return O
        }, m.shuffle = function(l) {
            for (var g = Oe(l) ? l : m.values(l), _ = g.length, O = Array(_), M = 0, N; M < _; M++) N = m.random(0, M), N !== M && (O[M] = O[N]), O[N] = g[M];
            return O
        }, m.sample = function(l, g, _) {
            return g == null || _ ? (Oe(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
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
                    var ke = _(N, te, g);
                    l(M, N, ke)
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
            return l ? m.isArray(l) ? k.call(l) : Oe(l) ? m.map(l, m.identity) : m.values(l) : []
        }, m.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : m.keys(l).length
        }, m.partition = function(l, g, _) {
            g = q(g, _);
            var O = [],
                M = [];
            return m.each(l, function(N, te, ke) {
                (g(N, te, ke) ? O : M).push(N)
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
        var Ve = function(l, g, _, O) {
            for (var M = [], N = 0, te = O || 0, ke = _e(l); te < ke; te++) {
                var de = l[te];
                if (Oe(de) && (m.isArray(de) || m.isArguments(de))) {
                    g || (de = Ve(de, g, _));
                    var De = 0,
                        Le = de.length;
                    for (M.length += Le; De < Le;) M[N++] = de[De++]
                } else _ || (M[N++] = de)
            }
            return M
        };
        m.flatten = function(l, g) {
            return Ve(l, g, !1)
        }, m.without = function(l) {
            return m.difference(l, k.call(arguments, 1))
        }, m.uniq = m.unique = function(l, g, _, O) {
            m.isBoolean(g) || (O = _, _ = g, g = !1), _ != null && (_ = q(_, O));
            for (var M = [], N = [], te = 0, ke = _e(l); te < ke; te++) {
                var de = l[te],
                    De = _ ? _(de, te, l) : de;
                g ? ((!te || N !== De) && M.push(de), N = De) : _ ? m.contains(N, De) || (N.push(De), M.push(de)) : m.contains(M, de) || M.push(de)
            }
            return M
        }, m.union = function() {
            return m.uniq(Ve(arguments, !0, !0))
        }, m.intersection = function(l) {
            for (var g = [], _ = arguments.length, O = 0, M = _e(l); O < M; O++) {
                var N = l[O];
                if (!m.contains(g, N)) {
                    for (var te = 1; te < _ && m.contains(arguments[te], N); te++);
                    te === _ && g.push(N)
                }
            }
            return g
        }, m.difference = function(l) {
            var g = Ve(arguments, !0, !0, 1);
            return m.filter(l, function(_) {
                return !m.contains(g, _)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(l) {
            for (var g = l && m.max(l, _e).length || 0, _ = Array(g), O = 0; O < g; O++) _[O] = m.pluck(l, O);
            return _
        }, m.object = function(l, g) {
            for (var _ = {}, O = 0, M = _e(l); O < M; O++) g ? _[l[O]] = g[O] : _[l[O][0]] = l[O][1];
            return _
        };

        function K(l) {
            return function(g, _, O) {
                _ = q(_, O);
                for (var M = _e(g), N = l > 0 ? 0 : M - 1; N >= 0 && N < M; N += l)
                    if (_(g[N], N, g)) return N;
                return -1
            }
        }
        m.findIndex = K(1), m.findLastIndex = K(-1), m.sortedIndex = function(l, g, _, O) {
            _ = q(_, O, 1);
            for (var M = _(g), N = 0, te = _e(l); N < te;) {
                var ke = Math.floor((N + te) / 2);
                _(l[ke]) < M ? N = ke + 1 : te = ke
            }
            return N
        };

        function Fe(l, g, _) {
            return function(O, M, N) {
                var te = 0,
                    ke = _e(O);
                if (typeof N == "number") l > 0 ? te = N >= 0 ? N : Math.max(N + ke, te) : ke = N >= 0 ? Math.min(N + 1, ke) : N + ke + 1;
                else if (_ && N && ke) return N = _(O, M), O[N] === M ? N : -1;
                if (M !== M) return N = g(k.call(O, te, ke), m.isNaN), N >= 0 ? N + te : -1;
                for (N = l > 0 ? te : ke - 1; N >= 0 && N < ke; N += l)
                    if (O[N] === M) return N;
                return -1
            }
        }
        m.indexOf = Fe(1, m.findIndex, m.sortedIndex), m.lastIndexOf = Fe(-1, m.findLastIndex), m.range = function(l, g, _) {
            g == null && (g = l || 0, l = 0), _ = _ || 1;
            for (var O = Math.max(Math.ceil((g - l) / _), 0), M = Array(O), N = 0; N < O; N++, l += _) M[N] = l;
            return M
        };
        var U = function(l, g, _, O, M) {
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
                    return U(l, O, g, this, _.concat(k.call(arguments)))
                };
            return O
        }, m.partial = function(l) {
            var g = k.call(arguments, 1),
                _ = function() {
                    for (var O = 0, M = g.length, N = Array(M), te = 0; te < M; te++) N[te] = g[te] === m ? arguments[O++] : g[te];
                    for (; O < arguments.length;) N.push(arguments[O++]);
                    return U(l, _, this, this, N)
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
                ke = 0;
            _ || (_ = {});
            var de = function() {
                ke = _.leading === !1 ? 0 : m.now(), te = null, N = l.apply(O, M), te || (O = M = null)
            };
            return function() {
                var De = m.now();
                !ke && _.leading === !1 && (ke = De);
                var Le = g - (De - ke);
                return O = this, M = arguments, Le <= 0 || Le > g ? (te && (clearTimeout(te), te = null), ke = De, N = l.apply(O, M), te || (O = M = null)) : !te && _.trailing !== !1 && (te = setTimeout(de, Le)), N
            }
        }, m.debounce = function(l, g, _) {
            var O, M, N, te, ke, de = function() {
                var De = m.now() - te;
                De < g && De >= 0 ? O = setTimeout(de, g - De) : (O = null, _ || (ke = l.apply(N, M), O || (N = M = null)))
            };
            return function() {
                N = this, M = arguments, te = m.now();
                var De = _ && !O;
                return O || (O = setTimeout(de, g)), De && (ke = l.apply(N, M), N = M = null), ke
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
            Ae = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function be(l, g) {
            var _ = Ae.length,
                O = l.constructor,
                M = m.isFunction(O) && O.prototype || f,
                N = "constructor";
            for (m.has(l, N) && !m.contains(g, N) && g.push(N); _--;) N = Ae[_], N in l && l[N] !== M[N] && !m.contains(g, N) && g.push(N)
        }
        m.keys = function(l) {
            if (!m.isObject(l)) return [];
            if (J) return J(l);
            var g = [];
            for (var _ in l) m.has(l, _) && g.push(_);
            return oe && be(l, g), g
        }, m.allKeys = function(l) {
            if (!m.isObject(l)) return [];
            var g = [];
            for (var _ in l) g.push(_);
            return oe && be(l, g), g
        }, m.values = function(l) {
            for (var g = m.keys(l), _ = g.length, O = Array(_), M = 0; M < _; M++) O[M] = l[g[M]];
            return O
        }, m.mapObject = function(l, g, _) {
            g = q(g, _);
            for (var O = m.keys(l), M = O.length, N = {}, te, ke = 0; ke < M; ke++) te = O[ke], N[te] = g(l[te], te, l);
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
            m.isFunction(g) ? (te = m.allKeys(M), N = P(g, _)) : (te = Ve(arguments, !1, !1, 1), N = function(nt, Ct, rn) {
                return Ct in rn
            }, M = Object(M));
            for (var ke = 0, de = te.length; ke < de; ke++) {
                var De = te[ke],
                    Le = M[De];
                N(Le, De, M) && (O[De] = Le)
            }
            return O
        }, m.omit = function(l, g, _) {
            if (m.isFunction(g)) g = m.negate(g);
            else {
                var O = m.map(Ve(arguments, !1, !1, 1), String);
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
        var we = function(l, g, _, O) {
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
                    ke = g.constructor;
                if (te !== ke && !(m.isFunction(te) && te instanceof te && m.isFunction(ke) && ke instanceof ke) && "constructor" in l && "constructor" in g) return !1
            }
            _ = _ || [], O = O || [];
            for (var de = _.length; de--;)
                if (_[de] === l) return O[de] === g;
            if (_.push(l), O.push(g), N) {
                if (de = l.length, de !== g.length) return !1;
                for (; de--;)
                    if (!we(l[de], g[de], _, O)) return !1
            } else {
                var De = m.keys(l),
                    Le;
                if (de = De.length, m.keys(g).length !== de) return !1;
                for (; de--;)
                    if (Le = De[de], !(m.has(g, Le) && we(l[Le], g[Le], _, O))) return !1
            }
            return _.pop(), O.pop(), !0
        };
        m.isEqual = function(l, g) {
            return we(l, g)
        }, m.isEmpty = function(l) {
            return l == null ? !0 : Oe(l) && (m.isArray(l) || m.isString(l) || m.isArguments(l)) ? l.length === 0 : m.keys(l).length === 0
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
        }, m.noop = function() {}, m.property = ye, m.propertyOf = function(l) {
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
        m.escape = Te(he), m.unescape = Te(Se), m.result = function(l, g, _) {
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
        var Ke = /(.)^/,
            dt = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Vt = /\\|'|\r|\n|\u2028|\u2029/g,
            Gt = function(l) {
                return "\\" + dt[l]
            };
        m.template = function(l, g, _) {
            !g && _ && (g = _), g = m.defaults({}, g, m.templateSettings);
            var O = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                M = 0,
                N = "__p+='";
            l.replace(O, function(De, Le, nt, Ct, rn) {
                return N += l.slice(M, rn).replace(Vt, Gt), M = rn + De.length, Le ? N += `'+
((__t=(` + Le + `))==null?'':_.escape(__t))+
'` : nt ? N += `'+
((__t=(` + nt + `))==null?'':__t)+
'` : Ct && (N += `';
` + Ct + `
__p+='`), De
            }), N += `';
`, g.variable || (N = `with(obj||{}){
` + N + `}
`), N = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + N + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", N)
            } catch (De) {
                throw De.source = N, De
            }
            var ke = function(De) {
                    return te.call(this, De, m)
                },
                de = g.variable || "obj";
            return ke.source = "function(" + de + `){
` + N + "}", ke
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
})(Pi, Pi.exports);
const at = Pi.exports;
var Ba = {
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
            push: S,
            sort: i.sort,
            splice: i.splice
        }, d.extend = d.fn.extend = function() {
            var r, s, u, p, w, x, T = arguments[0] || {},
                z = 1,
                H = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === H && (T = this, z--); z < H; z++)
                if ((r = arguments[z]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (Z && p && (d.isPlainObject(p) || (w = Array.isArray(p))) ? (u = T[s], w && !Array.isArray(u) ? x = [] : !w && !d.isPlainObject(u) ? x = {} : x = u, w = !1, T[s] = d.extend(Z, x, p)) : p !== void 0 && (T[s] = p));
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
                if (_e(r))
                    for (u = r.length; p < u && s.call(r[p], p, r[p]) !== !1; p++);
                else
                    for (p in r)
                        if (s.call(r[p], p, r[p]) === !1) break;
                return r
            },
            makeArray: function(r, s) {
                var u = s || [];
                return r != null && (_e(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : S.call(u, r)), u
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
                if (_e(r))
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

        function _e(r) {
            var s = !!r && "length" in r && r.length,
                u = se(r);
            return re(r) || m(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, u, p, w, x, T, z, H, Z, le, Ce, ne, ue, Ge, rt, je, zt, Bt, un, _t = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Dt = Yi(),
                _i = Yi(),
                Wi = Yi(),
                hn = Yi(),
                Kn = function(R, F) {
                    return R === F && (Ce = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Ln = an.pop,
                vn = an.push,
                Cn = an.push,
                _s = an.slice,
                Qn = function(R, F) {
                    for (var X = 0, fe = R.length; X < fe; X++)
                        if (R[X] === F) return X;
                    return -1
                },
                Fr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ss = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                zr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ss + ")*)|.*)\\)|)",
                ks = new RegExp(gt + "+", "g"),
                Si = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ts = new RegExp("^" + gt + "*," + gt + "*"),
                As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                $o = new RegExp(gt + "|>"),
                jo = new RegExp(zr),
                Fo = new RegExp("^" + Zn + "$"),
                Xi = {
                    ID: new RegExp("^#(" + Zn + ")"),
                    CLASS: new RegExp("^\\.(" + Zn + ")"),
                    TAG: new RegExp("^(" + Zn + "|[*])"),
                    ATTR: new RegExp("^" + Ss),
                    PSEUDO: new RegExp("^" + zr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Fr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                zo = /HTML$/i,
                Ho = /^(?:input|select|textarea|button)$/i,
                Uo = /^h\d$/i,
                ki = /^[^{]+\{\s*\[native \w/,
                Go = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Hr = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(R, F) {
                    var X = "0x" + R.slice(1) - 65536;
                    return F || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                },
                Ur = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Os = function(R, F) {
                    return F ? R === "\0" ? "\uFFFD" : R.slice(0, -1) + "\\" + R.charCodeAt(R.length - 1).toString(16) + " " : "\\" + R
                },
                Rs = function() {
                    ne()
                },
                qo = Zi(function(R) {
                    return R.disabled === !0 && R.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = _s.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(F, X) {
                        vn.apply(F, _s.call(X))
                    } : function(F, X) {
                        for (var fe = F.length, ee = 0; F[fe++] = X[ee++];);
                        F.length = fe - 1
                    }
                }
            }

            function St(R, F, X, fe) {
                var ee, ve, Ee, Re, Me, ze, Ue, Xe = F && F.ownerDocument,
                    ht = F ? F.nodeType : 9;
                if (X = X || [], typeof R != "string" || !R || ht !== 1 && ht !== 9 && ht !== 11) return X;
                if (!fe && (ne(F), F = F || ue, rt)) {
                    if (ht !== 11 && (Me = Go.exec(R)))
                        if (ee = Me[1]) {
                            if (ht === 9)
                                if (Ee = F.getElementById(ee)) {
                                    if (Ee.id === ee) return X.push(Ee), X
                                } else return X;
                            else if (Xe && (Ee = Xe.getElementById(ee)) && un(F, Ee) && Ee.id === ee) return X.push(Ee), X
                        } else {
                            if (Me[2]) return Cn.apply(X, F.getElementsByTagName(R)), X;
                            if ((ee = Me[3]) && u.getElementsByClassName && F.getElementsByClassName) return Cn.apply(X, F.getElementsByClassName(ee)), X
                        } if (u.qsa && !hn[R + " "] && (!je || !je.test(R)) && (ht !== 1 || F.nodeName.toLowerCase() !== "object")) {
                        if (Ue = R, Xe = F, ht === 1 && ($o.test(R) || As.test(R))) {
                            for (Xe = Hr.test(R) && Gr(F.parentNode) || F, (Xe !== F || !u.scope) && ((Re = F.getAttribute("id")) ? Re = Re.replace(Ur, Os) : F.setAttribute("id", Re = _t)), ze = T(R), ve = ze.length; ve--;) ze[ve] = (Re ? "#" + Re : ":scope") + " " + Qi(ze[ve]);
                            Ue = ze.join(",")
                        }
                        try {
                            return Cn.apply(X, Xe.querySelectorAll(Ue)), X
                        } catch {
                            hn(R, !0)
                        } finally {
                            Re === _t && F.removeAttribute("id")
                        }
                    }
                }
                return H(R.replace(Si, "$1"), F, X, fe)
            }

            function Yi() {
                var R = [];

                function F(X, fe) {
                    return R.push(X + " ") > p.cacheLength && delete F[R.shift()], F[X + " "] = fe
                }
                return F
            }

            function dn(R) {
                return R[_t] = !0, R
            }

            function yn(R) {
                var F = ue.createElement("fieldset");
                try {
                    return !!R(F)
                } catch {
                    return !1
                } finally {
                    F.parentNode && F.parentNode.removeChild(F), F = null
                }
            }

            function Ki(R, F) {
                for (var X = R.split("|"), fe = X.length; fe--;) p.attrHandle[X[fe]] = F
            }

            function Ji(R, F) {
                var X = F && R,
                    fe = X && R.nodeType === 1 && F.nodeType === 1 && R.sourceIndex - F.sourceIndex;
                if (fe) return fe;
                if (X) {
                    for (; X = X.nextSibling;)
                        if (X === F) return -1
                }
                return R ? 1 : -1
            }

            function Wo(R) {
                return function(F) {
                    var X = F.nodeName.toLowerCase();
                    return X === "input" && F.type === R
                }
            }

            function Xo(R) {
                return function(F) {
                    var X = F.nodeName.toLowerCase();
                    return (X === "input" || X === "button") && F.type === R
                }
            }

            function Is(R) {
                return function(F) {
                    return "form" in F ? F.parentNode && F.disabled === !1 ? "label" in F ? "label" in F.parentNode ? F.parentNode.disabled === R : F.disabled === R : F.isDisabled === R || F.isDisabled !== !R && qo(F) === R : F.disabled === R : "label" in F ? F.disabled === R : !1
                }
            }

            function An(R) {
                return dn(function(F) {
                    return F = +F, dn(function(X, fe) {
                        for (var ee, ve = R([], X.length, F), Ee = ve.length; Ee--;) X[ee = ve[Ee]] && (X[ee] = !(fe[ee] = X[ee]))
                    })
                })
            }

            function Gr(R) {
                return R && typeof R.getElementsByTagName < "u" && R
            }
            u = St.support = {}, x = St.isXML = function(R) {
                var F = R && R.namespaceURI,
                    X = R && (R.ownerDocument || R).documentElement;
                return !zo.test(F || X && X.nodeName || "HTML")
            }, ne = St.setDocument = function(R) {
                var F, X, fe = R ? R.ownerDocument || R : et;
                return fe == ue || fe.nodeType !== 9 || !fe.documentElement || (ue = fe, Ge = ue.documentElement, rt = !x(ue), et != ue && (X = ue.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Rs, !1) : X.attachEvent && X.attachEvent("onunload", Rs)), u.scope = yn(function(ee) {
                    return Ge.appendChild(ee).appendChild(ue.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = yn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = yn(function(ee) {
                    return ee.appendChild(ue.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = ki.test(ue.getElementsByClassName), u.getById = yn(function(ee) {
                    return Ge.appendChild(ee).id = _t, !ue.getElementsByName || !ue.getElementsByName(_t).length
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
                        var Ee, Re, Me, ze = ve.getElementById(ee);
                        if (ze) {
                            if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze];
                            for (Me = ve.getElementsByName(ee), Re = 0; ze = Me[Re++];)
                                if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ee) return [ze]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(ee, ve) {
                    if (typeof ve.getElementsByTagName < "u") return ve.getElementsByTagName(ee);
                    if (u.qsa) return ve.querySelectorAll(ee)
                } : function(ee, ve) {
                    var Ee, Re = [],
                        Me = 0,
                        ze = ve.getElementsByTagName(ee);
                    if (ee === "*") {
                        for (; Ee = ze[Me++];) Ee.nodeType === 1 && Re.push(Ee);
                        return Re
                    }
                    return ze
                }, p.find.CLASS = u.getElementsByClassName && function(ee, ve) {
                    if (typeof ve.getElementsByClassName < "u" && rt) return ve.getElementsByClassName(ee)
                }, zt = [], je = [], (u.qsa = ki.test(ue.querySelectorAll)) && (yn(function(ee) {
                    var ve;
                    Ge.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + Fr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || je.push("~="), ve = ue.createElement("input"), ve.setAttribute("name", ""), ee.appendChild(ve), ee.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || je.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || je.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                }), yn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var ve = ue.createElement("input");
                    ve.setAttribute("type", "hidden"), ee.appendChild(ve).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), Ge.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), je.push(",.*:")
                })), (u.matchesSelector = ki.test(Bt = Ge.matches || Ge.webkitMatchesSelector || Ge.mozMatchesSelector || Ge.oMatchesSelector || Ge.msMatchesSelector)) && yn(function(ee) {
                    u.disconnectedMatch = Bt.call(ee, "*"), Bt.call(ee, "[s!='']:x"), zt.push("!=", zr)
                }), je = je.length && new RegExp(je.join("|")), zt = zt.length && new RegExp(zt.join("|")), F = ki.test(Ge.compareDocumentPosition), un = F || ki.test(Ge.contains) ? function(ee, ve) {
                    var Ee = ee.nodeType === 9 ? ee.documentElement : ee,
                        Re = ve && ve.parentNode;
                    return ee === Re || !!(Re && Re.nodeType === 1 && (Ee.contains ? Ee.contains(Re) : ee.compareDocumentPosition && ee.compareDocumentPosition(Re) & 16))
                } : function(ee, ve) {
                    if (ve) {
                        for (; ve = ve.parentNode;)
                            if (ve === ee) return !0
                    }
                    return !1
                }, Kn = F ? function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee = !ee.compareDocumentPosition - !ve.compareDocumentPosition;
                    return Ee || (Ee = (ee.ownerDocument || ee) == (ve.ownerDocument || ve) ? ee.compareDocumentPosition(ve) : 1, Ee & 1 || !u.sortDetached && ve.compareDocumentPosition(ee) === Ee ? ee == ue || ee.ownerDocument == et && un(et, ee) ? -1 : ve == ue || ve.ownerDocument == et && un(et, ve) ? 1 : le ? Qn(le, ee) - Qn(le, ve) : 0 : Ee & 4 ? -1 : 1)
                } : function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee, Re = 0,
                        Me = ee.parentNode,
                        ze = ve.parentNode,
                        Ue = [ee],
                        Xe = [ve];
                    if (!Me || !ze) return ee == ue ? -1 : ve == ue ? 1 : Me ? -1 : ze ? 1 : le ? Qn(le, ee) - Qn(le, ve) : 0;
                    if (Me === ze) return Ji(ee, ve);
                    for (Ee = ee; Ee = Ee.parentNode;) Ue.unshift(Ee);
                    for (Ee = ve; Ee = Ee.parentNode;) Xe.unshift(Ee);
                    for (; Ue[Re] === Xe[Re];) Re++;
                    return Re ? Ji(Ue[Re], Xe[Re]) : Ue[Re] == et ? -1 : Xe[Re] == et ? 1 : 0
                }), ue
            }, St.matches = function(R, F) {
                return St(R, null, null, F)
            }, St.matchesSelector = function(R, F) {
                if (ne(R), u.matchesSelector && rt && !hn[F + " "] && (!zt || !zt.test(F)) && (!je || !je.test(F))) try {
                    var X = Bt.call(R, F);
                    if (X || u.disconnectedMatch || R.document && R.document.nodeType !== 11) return X
                } catch {
                    hn(F, !0)
                }
                return St(F, ue, null, [R]).length > 0
            }, St.contains = function(R, F) {
                return (R.ownerDocument || R) != ue && ne(R), un(R, F)
            }, St.attr = function(R, F) {
                (R.ownerDocument || R) != ue && ne(R);
                var X = p.attrHandle[F.toLowerCase()],
                    fe = X && Jn.call(p.attrHandle, F.toLowerCase()) ? X(R, F, !rt) : void 0;
                return fe !== void 0 ? fe : u.attributes || !rt ? R.getAttribute(F) : (fe = R.getAttributeNode(F)) && fe.specified ? fe.value : null
            }, St.escape = function(R) {
                return (R + "").replace(Ur, Os)
            }, St.error = function(R) {
                throw new Error("Syntax error, unrecognized expression: " + R)
            }, St.uniqueSort = function(R) {
                var F, X = [],
                    fe = 0,
                    ee = 0;
                if (Ce = !u.detectDuplicates, le = !u.sortStable && R.slice(0), R.sort(Kn), Ce) {
                    for (; F = R[ee++];) F === R[ee] && (fe = X.push(ee));
                    for (; fe--;) R.splice(X[fe], 1)
                }
                return le = null, R
            }, w = St.getText = function(R) {
                var F, X = "",
                    fe = 0,
                    ee = R.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof R.textContent == "string") return R.textContent;
                        for (R = R.firstChild; R; R = R.nextSibling) X += w(R)
                    } else if (ee === 3 || ee === 4) return R.nodeValue
                } else
                    for (; F = R[fe++];) X += w(F);
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
                    ATTR: function(R) {
                        return R[1] = R[1].replace(Tn, xn), R[3] = (R[3] || R[4] || R[5] || "").replace(Tn, xn), R[2] === "~=" && (R[3] = " " + R[3] + " "), R.slice(0, 4)
                    },
                    CHILD: function(R) {
                        return R[1] = R[1].toLowerCase(), R[1].slice(0, 3) === "nth" ? (R[3] || St.error(R[0]), R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === "even" || R[3] === "odd")), R[5] = +(R[7] + R[8] || R[3] === "odd")) : R[3] && St.error(R[0]), R
                    },
                    PSEUDO: function(R) {
                        var F, X = !R[6] && R[2];
                        return Xi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : X && jo.test(X) && (F = T(X, !0)) && (F = X.indexOf(")", X.length - F) - X.length) && (R[0] = R[0].slice(0, F), R[2] = X.slice(0, F)), R.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(R) {
                        var F = R.replace(Tn, xn).toLowerCase();
                        return R === "*" ? function() {
                            return !0
                        } : function(X) {
                            return X.nodeName && X.nodeName.toLowerCase() === F
                        }
                    },
                    CLASS: function(R) {
                        var F = Dt[R + " "];
                        return F || (F = new RegExp("(^|" + gt + ")" + R + "(" + gt + "|$)")) && Dt(R, function(X) {
                            return F.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(R, F, X) {
                        return function(fe) {
                            var ee = St.attr(fe, R);
                            return ee == null ? F === "!=" : F ? (ee += "", F === "=" ? ee === X : F === "!=" ? ee !== X : F === "^=" ? X && ee.indexOf(X) === 0 : F === "*=" ? X && ee.indexOf(X) > -1 : F === "$=" ? X && ee.slice(-X.length) === X : F === "~=" ? (" " + ee.replace(ks, " ") + " ").indexOf(X) > -1 : F === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                        }
                    },
                    CHILD: function(R, F, X, fe, ee) {
                        var ve = R.slice(0, 3) !== "nth",
                            Ee = R.slice(-4) !== "last",
                            Re = F === "of-type";
                        return fe === 1 && ee === 0 ? function(Me) {
                            return !!Me.parentNode
                        } : function(Me, ze, Ue) {
                            var Xe, ht, Tt, We, Ht, Jt, fn = ve !== Ee ? "nextSibling" : "previousSibling",
                                At = Me.parentNode,
                                c = Re && Me.nodeName.toLowerCase(),
                                h = !Ue && !Re,
                                b = !1;
                            if (At) {
                                if (ve) {
                                    for (; fn;) {
                                        for (We = Me; We = We[fn];)
                                            if (Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) return !1;
                                        Jt = fn = R === "only" && !Jt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Jt = [Ee ? At.firstChild : At.lastChild], Ee && h) {
                                    for (We = At, Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), Xe = ht[R] || [], Ht = Xe[0] === on && Xe[1], b = Ht && Xe[2], We = Ht && At.childNodes[Ht]; We = ++Ht && We && We[fn] || (b = Ht = 0) || Jt.pop();)
                                        if (We.nodeType === 1 && ++b && We === Me) {
                                            ht[R] = [on, Ht, b];
                                            break
                                        }
                                } else if (h && (We = Me, Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), Xe = ht[R] || [], Ht = Xe[0] === on && Xe[1], b = Ht), b === !1)
                                    for (;
                                        (We = ++Ht && We && We[fn] || (b = Ht = 0) || Jt.pop()) && !((Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) && ++b && (h && (Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), ht[R] = [on, b]), We === Me)););
                                return b -= ee, b === fe || b % fe === 0 && b / fe >= 0
                            }
                        }
                    },
                    PSEUDO: function(R, F) {
                        var X, fe = p.pseudos[R] || p.setFilters[R.toLowerCase()] || St.error("unsupported pseudo: " + R);
                        return fe[_t] ? fe(F) : fe.length > 1 ? (X = [R, R, "", F], p.setFilters.hasOwnProperty(R.toLowerCase()) ? dn(function(ee, ve) {
                            for (var Ee, Re = fe(ee, F), Me = Re.length; Me--;) Ee = Qn(ee, Re[Me]), ee[Ee] = !(ve[Ee] = Re[Me])
                        }) : function(ee) {
                            return fe(ee, 0, X)
                        }) : fe
                    }
                },
                pseudos: {
                    not: dn(function(R) {
                        var F = [],
                            X = [],
                            fe = z(R.replace(Si, "$1"));
                        return fe[_t] ? dn(function(ee, ve, Ee, Re) {
                            for (var Me, ze = fe(ee, null, Re, []), Ue = ee.length; Ue--;)(Me = ze[Ue]) && (ee[Ue] = !(ve[Ue] = Me))
                        }) : function(ee, ve, Ee) {
                            return F[0] = ee, fe(F, null, Ee, X), F[0] = null, !X.pop()
                        }
                    }),
                    has: dn(function(R) {
                        return function(F) {
                            return St(R, F).length > 0
                        }
                    }),
                    contains: dn(function(R) {
                        return R = R.replace(Tn, xn),
                            function(F) {
                                return (F.textContent || w(F)).indexOf(R) > -1
                            }
                    }),
                    lang: dn(function(R) {
                        return Fo.test(R || "") || St.error("unsupported lang: " + R), R = R.replace(Tn, xn).toLowerCase(),
                            function(F) {
                                var X;
                                do
                                    if (X = rt ? F.lang : F.getAttribute("xml:lang") || F.getAttribute("lang")) return X = X.toLowerCase(), X === R || X.indexOf(R + "-") === 0; while ((F = F.parentNode) && F.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(R) {
                        var F = r.location && r.location.hash;
                        return F && F.slice(1) === R.id
                    },
                    root: function(R) {
                        return R === Ge
                    },
                    focus: function(R) {
                        return R === ue.activeElement && (!ue.hasFocus || ue.hasFocus()) && !!(R.type || R.href || ~R.tabIndex)
                    },
                    enabled: Is(!1),
                    disabled: Is(!0),
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
                        return Uo.test(R.nodeName)
                    },
                    input: function(R) {
                        return Ho.test(R.nodeName)
                    },
                    button: function(R) {
                        var F = R.nodeName.toLowerCase();
                        return F === "input" && R.type === "button" || F === "button"
                    },
                    text: function(R) {
                        var F;
                        return R.nodeName.toLowerCase() === "input" && R.type === "text" && ((F = R.getAttribute("type")) == null || F.toLowerCase() === "text")
                    },
                    first: An(function() {
                        return [0]
                    }),
                    last: An(function(R, F) {
                        return [F - 1]
                    }),
                    eq: An(function(R, F, X) {
                        return [X < 0 ? X + F : X]
                    }),
                    even: An(function(R, F) {
                        for (var X = 0; X < F; X += 2) R.push(X);
                        return R
                    }),
                    odd: An(function(R, F) {
                        for (var X = 1; X < F; X += 2) R.push(X);
                        return R
                    }),
                    lt: An(function(R, F, X) {
                        for (var fe = X < 0 ? X + F : X > F ? F : X; --fe >= 0;) R.push(fe);
                        return R
                    }),
                    gt: An(function(R, F, X) {
                        for (var fe = X < 0 ? X + F : X; ++fe < F;) R.push(fe);
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
                }) p.pseudos[s] = Wo(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[s] = Xo(s);

            function Ds() {}
            Ds.prototype = p.filters = p.pseudos, p.setFilters = new Ds, T = St.tokenize = function(R, F) {
                var X, fe, ee, ve, Ee, Re, Me, ze = _i[R + " "];
                if (ze) return F ? 0 : ze.slice(0);
                for (Ee = R, Re = [], Me = p.preFilter; Ee;) {
                    (!X || (fe = Ts.exec(Ee))) && (fe && (Ee = Ee.slice(fe[0].length) || Ee), Re.push(ee = [])), X = !1, (fe = As.exec(Ee)) && (X = fe.shift(), ee.push({
                        value: X,
                        type: fe[0].replace(Si, " ")
                    }), Ee = Ee.slice(X.length));
                    for (ve in p.filter)(fe = Xi[ve].exec(Ee)) && (!Me[ve] || (fe = Me[ve](fe))) && (X = fe.shift(), ee.push({
                        value: X,
                        type: ve,
                        matches: fe
                    }), Ee = Ee.slice(X.length));
                    if (!X) break
                }
                return F ? Ee.length : Ee ? St.error(R) : _i(R, Re).slice(0)
            };

            function Qi(R) {
                for (var F = 0, X = R.length, fe = ""; F < X; F++) fe += R[F].value;
                return fe
            }

            function Zi(R, F, X) {
                var fe = F.dir,
                    ee = F.next,
                    ve = ee || fe,
                    Ee = X && ve === "parentNode",
                    Re = ft++;
                return F.first ? function(Me, ze, Ue) {
                    for (; Me = Me[fe];)
                        if (Me.nodeType === 1 || Ee) return R(Me, ze, Ue);
                    return !1
                } : function(Me, ze, Ue) {
                    var Xe, ht, Tt, We = [on, Re];
                    if (Ue) {
                        for (; Me = Me[fe];)
                            if ((Me.nodeType === 1 || Ee) && R(Me, ze, Ue)) return !0
                    } else
                        for (; Me = Me[fe];)
                            if (Me.nodeType === 1 || Ee)
                                if (Tt = Me[_t] || (Me[_t] = {}), ht = Tt[Me.uniqueID] || (Tt[Me.uniqueID] = {}), ee && ee === Me.nodeName.toLowerCase()) Me = Me[fe] || Me;
                                else {
                                    if ((Xe = ht[ve]) && Xe[0] === on && Xe[1] === Re) return We[2] = Xe[2];
                                    if (ht[ve] = We, We[2] = R(Me, ze, Ue)) return !0
                                } return !1
                }
            }

            function er(R) {
                return R.length > 1 ? function(F, X, fe) {
                    for (var ee = R.length; ee--;)
                        if (!R[ee](F, X, fe)) return !1;
                    return !0
                } : R[0]
            }

            function Yo(R, F, X) {
                for (var fe = 0, ee = F.length; fe < ee; fe++) St(R, F[fe], X);
                return X
            }

            function tr(R, F, X, fe, ee) {
                for (var ve, Ee = [], Re = 0, Me = R.length, ze = F != null; Re < Me; Re++)(ve = R[Re]) && (!X || X(ve, fe, ee)) && (Ee.push(ve), ze && F.push(Re));
                return Ee
            }

            function qr(R, F, X, fe, ee, ve) {
                return fe && !fe[_t] && (fe = qr(fe)), ee && !ee[_t] && (ee = qr(ee, ve)), dn(function(Ee, Re, Me, ze) {
                    var Ue, Xe, ht, Tt = [],
                        We = [],
                        Ht = Re.length,
                        Jt = Ee || Yo(F || "*", Me.nodeType ? [Me] : Me, []),
                        fn = R && (Ee || !F) ? tr(Jt, Tt, R, Me, ze) : Jt,
                        At = X ? ee || (Ee ? R : Ht || fe) ? [] : Re : fn;
                    if (X && X(fn, At, Me, ze), fe)
                        for (Ue = tr(At, We), fe(Ue, [], Me, ze), Xe = Ue.length; Xe--;)(ht = Ue[Xe]) && (At[We[Xe]] = !(fn[We[Xe]] = ht));
                    if (Ee) {
                        if (ee || R) {
                            if (ee) {
                                for (Ue = [], Xe = At.length; Xe--;)(ht = At[Xe]) && Ue.push(fn[Xe] = ht);
                                ee(null, At = [], Ue, ze)
                            }
                            for (Xe = At.length; Xe--;)(ht = At[Xe]) && (Ue = ee ? Qn(Ee, ht) : Tt[Xe]) > -1 && (Ee[Ue] = !(Re[Ue] = ht))
                        }
                    } else At = tr(At === Re ? At.splice(Ht, At.length) : At), ee ? ee(null, Re, At, ze) : Cn.apply(Re, At)
                })
            }

            function Wr(R) {
                for (var F, X, fe, ee = R.length, ve = p.relative[R[0].type], Ee = ve || p.relative[" "], Re = ve ? 1 : 0, Me = Zi(function(Xe) {
                        return Xe === F
                    }, Ee, !0), ze = Zi(function(Xe) {
                        return Qn(F, Xe) > -1
                    }, Ee, !0), Ue = [function(Xe, ht, Tt) {
                        var We = !ve && (Tt || ht !== Z) || ((F = ht).nodeType ? Me(Xe, ht, Tt) : ze(Xe, ht, Tt));
                        return F = null, We
                    }]; Re < ee; Re++)
                    if (X = p.relative[R[Re].type]) Ue = [Zi(er(Ue), X)];
                    else {
                        if (X = p.filter[R[Re].type].apply(null, R[Re].matches), X[_t]) {
                            for (fe = ++Re; fe < ee && !p.relative[R[fe].type]; fe++);
                            return qr(Re > 1 && er(Ue), Re > 1 && Qi(R.slice(0, Re - 1).concat({
                                value: R[Re - 2].type === " " ? "*" : ""
                            })).replace(Si, "$1"), X, Re < fe && Wr(R.slice(Re, fe)), fe < ee && Wr(R = R.slice(fe)), fe < ee && Qi(R))
                        }
                        Ue.push(X)
                    } return er(Ue)
            }

            function Ls(R, F) {
                var X = F.length > 0,
                    fe = R.length > 0,
                    ee = function(ve, Ee, Re, Me, ze) {
                        var Ue, Xe, ht, Tt = 0,
                            We = "0",
                            Ht = ve && [],
                            Jt = [],
                            fn = Z,
                            At = ve || fe && p.find.TAG("*", ze),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = At.length;
                        for (ze && (Z = Ee == ue || Ee || ze); We !== h && (Ue = At[We]) != null; We++) {
                            if (fe && Ue) {
                                for (Xe = 0, !Ee && Ue.ownerDocument != ue && (ne(Ue), Re = !rt); ht = R[Xe++];)
                                    if (ht(Ue, Ee || ue, Re)) {
                                        Me.push(Ue);
                                        break
                                    } ze && (on = c)
                            }
                            X && ((Ue = !ht && Ue) && Tt--, ve && Ht.push(Ue))
                        }
                        if (Tt += We, X && We !== Tt) {
                            for (Xe = 0; ht = F[Xe++];) ht(Ht, Jt, Ee, Re);
                            if (ve) {
                                if (Tt > 0)
                                    for (; We--;) Ht[We] || Jt[We] || (Jt[We] = Ln.call(Me));
                                Jt = tr(Jt)
                            }
                            Cn.apply(Me, Jt), ze && !ve && Jt.length > 0 && Tt + F.length > 1 && St.uniqueSort(Me)
                        }
                        return ze && (on = c, Z = fn), Ht
                    };
                return X ? dn(ee) : ee
            }
            return z = St.compile = function(R, F) {
                var X, fe = [],
                    ee = [],
                    ve = Wi[R + " "];
                if (!ve) {
                    for (F || (F = T(R)), X = F.length; X--;) ve = Wr(F[X]), ve[_t] ? fe.push(ve) : ee.push(ve);
                    ve = Wi(R, Ls(ee, fe)), ve.selector = R
                }
                return ve
            }, H = St.select = function(R, F, X, fe) {
                var ee, ve, Ee, Re, Me, ze = typeof R == "function" && R,
                    Ue = !fe && T(R = ze.selector || R);
                if (X = X || [], Ue.length === 1) {
                    if (ve = Ue[0] = Ue[0].slice(0), ve.length > 2 && (Ee = ve[0]).type === "ID" && F.nodeType === 9 && rt && p.relative[ve[1].type]) {
                        if (F = (p.find.ID(Ee.matches[0].replace(Tn, xn), F) || [])[0], F) ze && (F = F.parentNode);
                        else return X;
                        R = R.slice(ve.shift().value.length)
                    }
                    for (ee = Xi.needsContext.test(R) ? 0 : ve.length; ee-- && (Ee = ve[ee], !p.relative[Re = Ee.type]);)
                        if ((Me = p.find[Re]) && (fe = Me(Ee.matches[0].replace(Tn, xn), Hr.test(ve[0].type) && Gr(F.parentNode) || F))) {
                            if (ve.splice(ee, 1), R = fe.length && Qi(ve), !R) return Cn.apply(X, fe), X;
                            break
                        }
                }
                return (ze || z(R, Ue))(fe, F, !rt, X, !F || Hr.test(R) && Gr(F.parentNode) || F), X
            }, u.sortStable = _t.split("").sort(Kn).join("") === _t, u.detectDuplicates = !!Ce, ne(), u.sortDetached = yn(function(R) {
                return R.compareDocumentPosition(ue.createElement("fieldset")) & 1
            }), yn(function(R) {
                return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
            }) || Ki("type|href|height|width", function(R, F, X) {
                if (!X) return R.getAttribute(F, F.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !yn(function(R) {
                return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
            })) && Ki("value", function(R, F, X) {
                if (!X && R.nodeName.toLowerCase() === "input") return R.defaultValue
            }), yn(function(R) {
                return R.getAttribute("disabled") == null
            }) || Ki(Fr, function(R, F, X) {
                var fe;
                if (!X) return R[F] === !0 ? F.toLowerCase() : (fe = R.getAttributeNode(F)) && fe.specified ? fe.value : null
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
            Ve = d.expr.match.needsContext;

        function K(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

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
                return !!U(this, typeof r == "string" && Ve.test(r) ? d(r) : r || [], !1).length
            }
        });
        var oe, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            be = d.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || oe, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
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
                    x = [],
                    T = typeof r != "string" && d(r);
                if (!Ve.test(r)) {
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
                return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (K(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
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
                        return x && (u && !s && (z = x.length - 1, T.push(u)), function le(Ce) {
                            d.each(Ce, function(ne, ue) {
                                re(ue) ? (!r.unique || !Z.has(ue)) && x.push(ue) : ue && ue.length && se(ue) !== "string" && le(ue)
                            })
                        }(arguments), u && !s && H()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(le, Ce) {
                            for (var ne;
                                (ne = d.inArray(Ce, x, ne)) > -1;) x.splice(ne, 1), ne <= z && z--
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
                    fireWith: function(le, Ce) {
                        return w || (Ce = Ce || [], Ce = [le, Ce.slice ? Ce.slice() : Ce], T.push(Ce), s || H()), this
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

        function Vt(r, s, u, p) {
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
                                d.each(s, function(z, H) {
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

                            function Z(le, Ce, ne, ue) {
                                return function() {
                                    var Ge = this,
                                        rt = arguments,
                                        je = function() {
                                            var Bt, un;
                                            if (!(le < H)) {
                                                if (Bt = ne.apply(Ge, rt), Bt === Ce.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Bt && (typeof Bt == "object" || typeof Bt == "function") && Bt.then, re(un) ? ue ? un.call(Bt, Z(H, Ce, Ke, ue), Z(H, Ce, dt, ue)) : (H++, un.call(Bt, Z(H, Ce, Ke, ue), Z(H, Ce, dt, ue), Z(H, Ce, Ke, Ce.notifyWith))) : (ne !== Ke && (Ge = void 0, rt = [Bt]), (ue || Ce.resolveWith)(Ge, rt))
                                            }
                                        },
                                        zt = ue ? je : function() {
                                            try {
                                                je()
                                            } catch (Bt) {
                                                d.Deferred.exceptionHook && d.Deferred.exceptionHook(Bt, zt.stackTrace), le + 1 >= H && (ne !== dt && (Ge = void 0, rt = [Bt]), Ce.rejectWith(Ge, rt))
                                            }
                                        };
                                    le ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return d.Deferred(function(le) {
                                s[0][3].add(Z(0, le, re(z) ? z : Ke, le.notifyWith)), s[1][3].add(Z(0, le, re(x) ? x : Ke)), s[2][3].add(Z(0, le, re(T) ? T : dt))
                            }).promise()
                        },
                        promise: function(x) {
                            return x != null ? d.extend(x, p) : p
                        }
                    },
                    w = {};
                return d.each(s, function(x, T) {
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
                    w = f.call(arguments),
                    x = d.Deferred(),
                    T = function(z) {
                        return function(H) {
                            p[z] = this, w[z] = arguments.length > 1 ? f.call(arguments) : H, --s || x.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && (Vt(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(w[u] && w[u].then))) return x.then();
                for (; u--;) Vt(w[u], T(u), x.reject);
                return x.promise()
            }
        });
        var Gt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        d.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && Gt.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
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
                    H = r.length,
                    Z = u == null;
                if (se(u) === "object") {
                    w = !0;
                    for (z in u) g(r, s, z, u[z], !0, x, T)
                } else if (p !== void 0 && (w = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(le, Ce, ne) {
                        return Z.call(d(le), ne)
                    })), s))
                    for (; z < H; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return w ? r : Z ? s.call(r) : H ? s(r[0], u) : x
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
                        for (Array.isArray(s) ? s = s.map(N) : (s = N(s), s = s in p ? [s] : s.match(Te) || []), u = s.length; u--;) delete p[s[u]];
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
            Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            nt = /[A-Z]/g;

        function Ct(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : Le.test(r) ? JSON.parse(r) : r
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
                var u, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = De.get(x), x.nodeType === 1 && !de.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = N(p.slice(5)), rn(x, p, w[p])));
                        de.set(x, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    De.set(this, r)
                }) : g(this, function(z) {
                    var H;
                    if (x && z === void 0) return H = De.get(x, r), H !== void 0 || (H = rn(x, r), H !== void 0) ? H : void 0;
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
                    x = d._queueHooks(r, s),
                    T = function() {
                        d.dequeue(r, s)
                    };
                w === "inprogress" && (w = u.shift(), p--), w && (s === "fx" && u.unshift("inprogress"), delete x.stop, w.call(r, T, x)), !p && x && x.empty.fire()
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
                    x = this,
                    T = this.length,
                    z = function() {
                        --p || w.resolveWith(x, [x])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = de.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
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
            Mt = {
                composed: !0
            };
        Kt.getRootNode && (Je = function(r) {
            return d.contains(r.ownerDocument, r) || r.getRootNode(Mt) === r.ownerDocument
        });
        var j = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && d.css(r, "display") === "none"
        };

        function B(r, s, u, p) {
            var w, x, T = 20,
                z = p ? function() {
                    return p.cur()
                } : function() {
                    return d.css(r, s, "")
                },
                H = z(),
                Z = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                le = r.nodeType && (d.cssNumber[s] || Z !== "px" && +H) && yt.exec(d.css(r, s));
            if (le && le[3] !== Z) {
                for (H = H / 2, Z = Z || le[3], le = +H || 1; T--;) d.style(r, s, le + Z), (1 - x) * (1 - (x = z() / H || .5)) <= 0 && (T = 0), le = le / x;
                le = le * 2, d.style(r, s, le + Z), u = u || []
            }
            return u && (le = +le || +H || 0, w = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = w)), w
        }
        var W = {};

        function L(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = W[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), W[p] = w, w)
        }

        function G(r, s) {
            for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = de.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && j(p) && (w[x] = L(p))) : u !== "none" && (w[x] = "none", de.set(p, "display", u)));
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
        var pe = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Be = /^$|^module$|\/(?:java|ecma)script/i;
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

        function pt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && K(r, s) ? d.merge([r], u) : u
        }

        function jt(r, s) {
            for (var u = 0, p = r.length; u < p; u++) de.set(r[u], "globalEval", !s || de.get(s[u], "globalEval"))
        }
        var Ye = /<|&#?\w+;/;

        function In(r, s, u, p, w) {
            for (var x, T, z, H, Z, le, Ce = s.createDocumentFragment(), ne = [], ue = 0, Ge = r.length; ue < Ge; ue++)
                if (x = r[ue], x || x === 0)
                    if (se(x) === "object") d.merge(ne, x.nodeType ? [x] : x);
                    else if (!Ye.test(x)) ne.push(s.createTextNode(x));
            else {
                for (T = T || Ce.appendChild(s.createElement("div")), z = (ge.exec(x) || ["", ""])[1].toLowerCase(), H = Ne[z] || Ne._default, T.innerHTML = H[1] + d.htmlPrefilter(x) + H[2], le = H[0]; le--;) T = T.lastChild;
                d.merge(ne, T.childNodes), T = Ce.firstChild, T.textContent = ""
            }
            for (Ce.textContent = "", ue = 0; x = ne[ue++];) {
                if (p && d.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (Z = Je(x), T = pt(Ce.appendChild(x), "script"), Z && jt(T), u)
                    for (le = 0; x = T[le++];) Be.test(x.type || "") && u.push(x)
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

        function kn(r, s, u, p, w, x) {
            var T, z;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (z in s) kn(r, z, u, p, s[z], x);
                return r
            }
            if (p == null && w == null ? (w = u, p = u = void 0) : w == null && (typeof u == "string" ? (w = p, p = void 0) : (w = p, p = u, u = void 0)), w === !1) w = Dn;
            else if (!w) return r;
            return x === 1 && (T = w, w = function(H) {
                return d().off(H), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = d.guid++)), r.each(function() {
                d.event.add(this, s, w, p, u)
            })
        }
        d.event = {
            global: {},
            add: function(r, s, u, p, w) {
                var x, T, z, H, Z, le, Ce, ne, ue, Ge, rt, je = de.get(r);
                if (!!te(r))
                    for (u.handler && (x = u, u = x.handler, w = x.selector), w && d.find.matchesSelector(Kt, w), u.guid || (u.guid = d.guid++), (H = je.events) || (H = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(zt) {
                            return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], Z = s.length; Z--;) z = Pn.exec(s[Z]) || [], ue = rt = z[1], Ge = (z[2] || "").split(".").sort(), ue && (Ce = d.event.special[ue] || {}, ue = (w ? Ce.delegateType : Ce.bindType) || ue, Ce = d.event.special[ue] || {}, le = d.extend({
                        type: ue,
                        origType: rt,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && d.expr.match.needsContext.test(w),
                        namespace: Ge.join(".")
                    }, x), (ne = H[ue]) || (ne = H[ue] = [], ne.delegateCount = 0, (!Ce.setup || Ce.setup.call(r, p, Ge, T) === !1) && r.addEventListener && r.addEventListener(ue, T)), Ce.add && (Ce.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), d.event.global[ue] = !0)
            },
            remove: function(r, s, u, p, w) {
                var x, T, z, H, Z, le, Ce, ne, ue, Ge, rt, je = de.hasData(r) && de.get(r);
                if (!(!je || !(H = je.events))) {
                    for (s = (s || "").match(Te) || [""], Z = s.length; Z--;) {
                        if (z = Pn.exec(s[Z]) || [], ue = rt = z[1], Ge = (z[2] || "").split(".").sort(), !ue) {
                            for (ue in H) d.event.remove(r, ue + s[Z], u, p, !0);
                            continue
                        }
                        for (Ce = d.event.special[ue] || {}, ue = (p ? Ce.delegateType : Ce.bindType) || ue, ne = H[ue] || [], z = z[2] && new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) le = ne[x], (w || rt === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(x, 1), le.selector && ne.delegateCount--, Ce.remove && Ce.remove.call(r, le));
                        T && !ne.length && ((!Ce.teardown || Ce.teardown.call(r, Ge, je.handle) === !1) && d.removeEvent(r, ue, je.handle), delete H[ue])
                    }
                    d.isEmptyObject(H) && de.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, x, T, z = new Array(arguments.length),
                    H = d.event.fix(r),
                    Z = (de.get(this, "events") || Object.create(null))[H.type] || [],
                    le = d.event.special[H.type] || {};
                for (z[0] = H, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (H.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, H) === !1)) {
                    for (T = d.event.handlers.call(this, H, Z), s = 0;
                        (w = T[s++]) && !H.isPropagationStopped();)
                        for (H.currentTarget = w.elem, u = 0;
                            (x = w.handlers[u++]) && !H.isImmediatePropagationStopped();)(!H.rnamespace || x.namespace === !1 || H.rnamespace.test(x.namespace)) && (H.handleObj = x, H.data = x.data, p = ((d.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, z), p !== void 0 && (H.result = p) === !1 && (H.preventDefault(), H.stopPropagation()));
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
                            for (x = [], T = {}, u = 0; u < H; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? d(w, this).index(Z) > -1 : d.find(w, this, null, [Z]).length), T[w] && x.push(p);
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
                        return pe.test(s.type) && s.click && K(s, "input") && sn(s, "click", it), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && K(s, "input") && sn(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return pe.test(s.type) && s.click && K(s, "input") && de.get(s, "click") || K(s, "a")
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
                    var w, x, T = de.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = f.call(arguments), de.set(this, s, T), w = u(this, s), this[s](), x = de.get(this, s), T !== x || w ? de.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
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
        var kr = /<script|<style|<link/i,
            Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            mi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $i(r, s) {
            return K(r, "table") && K(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
        }

        function vi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function yi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function ji(r, s) {
            var u, p, w, x, T, z, H;
            if (s.nodeType === 1) {
                if (de.hasData(r) && (x = de.get(r), H = x.events, H)) {
                    de.remove(s, "handle events");
                    for (w in H)
                        for (u = 0, p = H[w].length; u < p; u++) d.event.add(s, w, H[w][u])
                }
                De.hasData(r) && (T = De.access(r), z = d.extend({}, T), De.set(s, z))
            }
        }

        function Fi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && pe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, u, p) {
            s = v(s);
            var w, x, T, z, H, Z, le = 0,
                Ce = r.length,
                ne = Ce - 1,
                ue = s[0],
                Ge = re(ue);
            if (Ge || Ce > 1 && typeof ue == "string" && !Y.checkClone && Tr.test(ue)) return r.each(function(rt) {
                var je = r.eq(rt);
                Ge && (s[0] = ue.call(this, rt, je.html())), mn(je, s, u, p)
            });
            if (Ce && (w = In(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = d.map(pt(w, "script"), vi), z = T.length; le < Ce; le++) H = w, le !== ne && (H = d.clone(H, !0, !0), z && d.merge(T, pt(H, "script"))), u.call(r[le], H, le);
                if (z)
                    for (Z = T[T.length - 1].ownerDocument, d.map(T, yi), le = 0; le < z; le++) H = T[le], Be.test(H.type || "") && !de.access(H, "globalEval") && d.contains(Z, H) && (H.src && (H.type || "").toLowerCase() !== "module" ? d._evalUrl && !H.noModule && d._evalUrl(H.src, {
                        nonce: H.nonce || H.getAttribute("nonce")
                    }, Z) : ae(H.textContent.replace(mi, ""), H, Z))
            }
            return r
        }

        function zi(r, s, u) {
            for (var p, w = s ? d.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Je(p) && jt(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        d.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, x, T, z = r.cloneNode(!0),
                    H = Je(r);
                if (!Y.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                    for (T = pt(z), x = pt(r), p = 0, w = x.length; p < w; p++) Fi(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || pt(r), T = T || pt(z), p = 0, w = x.length; p < w; p++) ji(x[p], T[p]);
                    else ji(r, z);
                return T = pt(z, "script"), T.length > 0 && jt(T, !H && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, w = d.event.special, x = 0;
                    (u = r[x]) !== void 0; x++)
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
                    if (typeof s == "string" && !kr.test(s) && !Ne[(ge.exec(s) || ["", ""])[1].toLowerCase()]) {
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
                for (var p, w = [], x = d(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), d(x[z])[s](p), S.apply(w, p.get());
                return this.pushStack(w)
            }
        });
        var wi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
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
            bi = new RegExp(bt.join("|"), "i");
        (function() {
            function r() {
                if (!!Z) {
                    H.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Kt.appendChild(H).appendChild(Z);
                    var le = e.getComputedStyle(Z);
                    u = le.top !== "1%", z = s(le.marginLeft) === 12, Z.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", w = s(Z.offsetWidth / 3) === 12, Kt.removeChild(H), Z = null
                }
            }

            function s(le) {
                return Math.round(parseFloat(le))
            }
            var u, p, w, x, T, z, H = P.createElement("div"),
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
                    return r(), z
                },
                scrollboxSize: function() {
                    return r(), w
                },
                reliableTrDimensions: function() {
                    var le, Ce, ne, ue;
                    return T == null && (le = P.createElement("table"), Ce = P.createElement("tr"), ne = P.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Ce.style.cssText = "border:1px solid", Ce.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Kt.appendChild(le).appendChild(Ce).appendChild(ne), ue = e.getComputedStyle(Ce), T = parseInt(ue.height, 10) + parseInt(ue.borderTopWidth, 10) + parseInt(ue.borderBottomWidth, 10) === Ce.offsetHeight, Kt.removeChild(le)), T
                }
            }))
        })();

        function Ze(r, s, u) {
            var p, w, x, T, z = r.style;
            return u = u || Hn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = d.style(r, s)), !Y.pixelBoxStyles() && wi.test(T) && bi.test(s) && (p = z.width, w = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = x)), T !== void 0 ? T + "" : T
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

        function xe(r) {
            var s = d.cssProps[r] || A[r];
            return s || (r in C ? r : A[r] = Q(r) || r)
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

        function Bn(r, s, u) {
            var p = yt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function Gn(r, s, u, p, w, x) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                H = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (H += d.css(r, u + bt[T], !0, w)), p ? (u === "content" && (H -= d.css(r, "padding" + bt[T], !0, w)), u !== "margin" && (H -= d.css(r, "border" + bt[T] + "Width", !0, w))) : (H += d.css(r, "padding" + bt[T], !0, w), u !== "padding" ? H += d.css(r, "border" + bt[T] + "Width", !0, w) : z += d.css(r, "border" + bt[T] + "Width", !0, w));
            return !p && x >= 0 && (H += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - H - z - .5)) || 0), H
        }

        function Ar(r, s, u) {
            var p = Hn(r),
                w = !Y.boxSizingReliable() || u,
                x = w && d.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                z = Ze(r, s, p),
                H = "offset" + s[0].toUpperCase() + s.slice(1);
            if (wi.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!Y.boxSizingReliable() && x || !Y.reliableTrDimensions() && K(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = d.css(r, "boxSizing", !1, p) === "border-box", T = H in r, T && (z = r[H])), z = parseFloat(z) || 0, z + Gn(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
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
                    var w, x, T, z = N(s),
                        H = It.test(s),
                        Z = r.style;
                    if (H || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                        if (x = typeof u, x === "string" && (w = yt.exec(u)) && w[1] && (u = B(r, s, w), x = "number"), u == null || u !== u) return;
                        x === "number" && !H && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !Y.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (H ? Z.setProperty(s, u) : Z[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : Z[s]
                }
            },
            css: function(r, s, u, p) {
                var w, x, T, z = N(s),
                    H = It.test(s);
                return H || (s = xe(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = Ze(r, s, p)), w === "normal" && s in Un && (w = Un[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), d.each(["height", "width"], function(r, s) {
            d.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return qe.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Hi(u, Wt, function() {
                        return Ar(u, s, w)
                    }) : Ar(u, s, w)
                },
                set: function(u, p, w) {
                    var x, T = Hn(u),
                        z = !Y.scrollboxSize() && T.position === "absolute",
                        H = z || w,
                        Z = H && d.css(u, "boxSizing", !1, T) === "border-box",
                        le = w ? Gn(u, s, w, Z, T) : 0;
                    return Z && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Gn(u, s, "border", !1, T) - .5)), le && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Bn(u, p, le)
                }
            }
        }), d.cssHooks.marginLeft = y(Y.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Hi(r, {
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
            }, r !== "margin" && (d.cssHooks[r + s].set = Bn)
        }), d.fn.extend({
            css: function(r, s) {
                return g(this, function(u, p, w) {
                    var x, T, z = {},
                        H = 0;
                    if (Array.isArray(p)) {
                        for (x = Hn(u), T = p.length; H < T; H++) z[p[H]] = d.css(u, p[H], !1, x);
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
        var Ft, Ui, bo = /^(?:toggle|show|hide)$/,
            Co = /queueHooks$/;

        function Or() {
            Ui && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, d.fx.interval), d.fx.tick())
        }

        function Rr() {
            return e.setTimeout(function() {
                Ft = void 0
            }), Ft = Date.now()
        }

        function Gi(r, s) {
            var u, p = 0,
                w = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) u = bt[p], w["margin" + u] = w["padding" + u] = r;
            return s && (w.opacity = w.width = r), w
        }

        function gs(r, s, u) {
            for (var p, w = (bn.tweeners[s] || []).concat(bn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                if (p = w[x].call(u, s, r)) return p
        }

        function xo(r, s, u) {
            var p, w, x, T, z, H, Z, le, Ce = "width" in s || "height" in s,
                ne = this,
                ue = {},
                Ge = r.style,
                rt = r.nodeType && j(r),
                je = de.get(r, "fxshow");
            u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, ne.always(function() {
                ne.always(function() {
                    T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], bo.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (rt ? "hide" : "show"))
                        if (w === "show" && je && je[p] !== void 0) rt = !0;
                        else continue;
                    ue[p] = je && je[p] || d.style(r, p)
                } if (H = !d.isEmptyObject(s), !(!H && d.isEmptyObject(ue))) {
                Ce && r.nodeType === 1 && (u.overflow = [Ge.overflow, Ge.overflowX, Ge.overflowY], Z = je && je.display, Z == null && (Z = de.get(r, "display")), le = d.css(r, "display"), le === "none" && (Z ? le = Z : (G([r], !0), Z = r.style.display || Z, le = d.css(r, "display"), G([r]))), (le === "inline" || le === "inline-block" && Z != null) && d.css(r, "float") === "none" && (H || (ne.done(function() {
                    Ge.display = Z
                }), Z == null && (le = Ge.display, Z = le === "none" ? "" : le)), Ge.display = "inline-block")), u.overflow && (Ge.overflow = "hidden", ne.always(function() {
                    Ge.overflow = u.overflow[0], Ge.overflowX = u.overflow[1], Ge.overflowY = u.overflow[2]
                })), H = !1;
                for (p in ue) H || (je ? "hidden" in je && (rt = je.hidden) : je = de.access(r, "fxshow", {
                    display: Z
                }), x && (je.hidden = !rt), rt && G([r], !0), ne.done(function() {
                    rt || G([r]), de.remove(r, "fxshow");
                    for (p in ue) d.style(r, p, ue[p])
                })), H = gs(rt ? je[p] : 0, p, ne), p in je || (je[p] = H.start, rt && (H.end = H.start, H.start = 0))
            }
        }

        function ms(r, s) {
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
                    delete H.elem
                }),
                H = function() {
                    if (w) return !1;
                    for (var Ce = Ft || Rr(), ne = Math.max(0, Z.startTime + Z.duration - Ce), ue = ne / Z.duration || 0, Ge = 1 - ue, rt = 0, je = Z.tweens.length; rt < je; rt++) Z.tweens[rt].run(Ge);
                    return z.notifyWith(r, [Z, Ge, ne]), Ge < 1 && je ? ne : (je || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
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
                    startTime: Ft || Rr(),
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
                le = Z.props;
            for (ms(le, Z.opts.specialEasing); x < T; x++)
                if (p = bn.prefilters[x].call(Z, r, le, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return d.map(le, gs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(H, {
                elem: r,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        d.Animation = d.extend(bn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return B(u.elem, r, yt.exec(s), u), u
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
                    return this.filter(j).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, u, p)
                },
                animate: function(r, s, u, p) {
                    var w = d.isEmptyObject(r),
                        x = d.speed(s, u, p),
                        T = function() {
                            var z = bn(this, d.extend({}, r), x);
                            (w || de.get(this, "finish")) && z.stop(!0)
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
                            z = de.get(this);
                        if (x) z[x] && z[x].stop && p(z[x]);
                        else
                            for (x in z) z[x] && z[x].stop && Co.test(x) && p(z[x]);
                        for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), w = !1, T.splice(x, 1));
                        (w || !u) && d.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = de.get(this),
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
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Gi(s, !0), p, w, x)
                }
            }), d.each({
                slideDown: Gi("show"),
                slideUp: Gi("hide"),
                slideToggle: Gi("toggle"),
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
                for (Ft = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || d.fx.stop(), Ft = void 0
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
                r.type = "checkbox", Y.checkOn = r.value !== "", Y.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", Y.radioValue = r.value === "t"
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
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) {
                    if (typeof r.getAttribute > "u") return d.prop(r, s, u);
                    if ((x !== 1 || !d.isXMLDoc(r)) && (w = d.attrHooks[s.toLowerCase()] || (d.expr.match.bool.test(s) ? Ir : void 0)), u !== void 0) {
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
            Ci[s] = function(p, w, x) {
                var T, z, H = w.toLowerCase();
                return x || (z = Ci[H], Ci[H] = T, T = u(p, w, x) != null ? H : null, Ci[H] = z), T
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
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !d.isXMLDoc(r)) && (s = d.propFix[s] || s, w = d.propHooks[s]), u !== void 0 ? w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : r[s] = u : w && "get" in w && (p = w.get(r, s)) !== null ? p : r[s]
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
                var s, u, p, w, x, T, z, H = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).addClass(r.call(this, Z, Wn(this)))
                });
                if (s = Dr(r), s.length) {
                    for (; u = this[H++];)
                        if (w = Wn(u), p = u.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            z = qn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (re(r)) return this.each(function(Z) {
                    d(this).removeClass(r.call(this, Z, Wn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Dr(r), s.length) {
                    for (; u = this[H++];)
                        if (w = Wn(u), p = u.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
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
                    var w, x, T, z;
                    if (p)
                        for (x = 0, T = d(this), z = Dr(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
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
                return arguments.length ? (p = re(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
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
                            x = r.selectedIndex,
                            T = r.type === "select-one",
                            z = T ? null : [],
                            H = T ? x + 1 : w.length;
                        for (x < 0 ? p = H : p = T ? x : 0; p < H; p++)
                            if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !K(u.parentNode, "optgroup"))) {
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
            }, Y.checkOn || (d.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), Y.focusin = "onfocusin" in e;
        var Lr = /^(?:focusinfocus|focusoutblur)$/,
            Xn = function(r) {
                r.stopPropagation()
            };
        d.extend(d.event, {
            trigger: function(r, s, u, p) {
                var w, x, T, z, H, Z, le, Ce, ne = [u || P],
                    ue = $.call(r, "type") ? r.type : r,
                    Ge = $.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = Ce = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Lr.test(ue + d.event.triggered) && (ue.indexOf(".") > -1 && (Ge = ue.split("."), ue = Ge.shift(), Ge.sort()), H = ue.indexOf(":") < 0 && "on" + ue, r = r[d.expando] ? r : new d.Event(ue, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ge.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ue] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                    if (!p && !le.noBubble && !m(u)) {
                        for (z = le.delegateType || ue, Lr.test(z + ue) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                        T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = ne[w++]) && !r.isPropagationStopped();) Ce = x, r.type = w > 1 ? z : le.bindType || ue, Z = (de.get(x, "events") || Object.create(null))[r.type] && de.get(x, "handle"), Z && Z.apply(x, s), Z = H && x[H], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ue, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), s) === !1) && te(u) && H && re(u[ue]) && !m(u) && (T = u[H], T && (u[H] = null), d.event.triggered = ue, r.isPropagationStopped() && Ce.addEventListener(ue, Xn), u[ue](), r.isPropagationStopped() && Ce.removeEventListener(ue, Xn), d.event.triggered = void 0, T && (u[H] = T)), r.result
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
            Mr = {
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
            if (Array.isArray(s)) d.each(s, function(x, T) {
                u || ko.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
            });
            else if (!u && se(s) === "object")
                for (w in s) Pr(r + "[" + w + "]", s[w], u, p);
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
            Lo = /^\/\//,
            ws = {},
            Br = {},
            bs = "*/".concat("*"),
            Nr = P.createElement("a");
        Nr.href = xi.href;

        function Cs(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, w = 0,
                    x = s.toLowerCase().match(Te) || [];
                if (re(u))
                    for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function xs(r, s, u, p) {
            var w = {},
                x = r === Br;

            function T(z) {
                var H;
                return w[z] = !0, d.each(r[z] || [], function(Z, le) {
                    var Ce = le(s, u, p);
                    if (typeof Ce == "string" && !x && !w[Ce]) return s.dataTypes.unshift(Ce), T(Ce), !1;
                    if (x) return !(H = Ce)
                }), H
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function Vr(r, s) {
            var u, p, w = d.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && d.extend(!0, r, p), r
        }

        function Mo(r, s, u) {
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

        function Po(r, s, u, p) {
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
                            } catch (Ce) {
                                return {
                                    state: "parsererror",
                                    error: T ? Ce : "No conversion from " + H + " to " + x
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
                return s ? Vr(Vr(r, d.ajaxSettings), s) : Vr(d.ajaxSettings, r)
            },
            ajaxPrefilter: Cs(ws),
            ajaxTransport: Cs(Br),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, w, x, T, z, H, Z, le, Ce, ne = d.ajaxSetup({}, s),
                    ue = ne.context || ne,
                    Ge = ne.context && (ue.nodeType || ue.jquery) ? d(ue) : d.event,
                    rt = d.Deferred(),
                    je = d.Callbacks("once memory"),
                    zt = ne.statusCode || {},
                    Bt = {},
                    un = {},
                    _t = "canceled",
                    et = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Dt;
                            if (H) {
                                if (!x)
                                    for (x = {}; Dt = Yn.exec(w);) x[Dt[1].toLowerCase() + " "] = (x[Dt[1].toLowerCase() + " "] || []).concat(Dt[2]);
                                Dt = x[ft.toLowerCase() + " "]
                            }
                            return Dt == null ? null : Dt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return H ? w : null
                        },
                        setRequestHeader: function(ft, Dt) {
                            return H == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Bt[ft] = Dt), this
                        },
                        overrideMimeType: function(ft) {
                            return H == null && (ne.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Dt;
                            if (ft)
                                if (H) et.always(ft[et.status]);
                                else
                                    for (Dt in ft) zt[Dt] = [zt[Dt], ft[Dt]];
                            return this
                        },
                        abort: function(ft) {
                            var Dt = ft || _t;
                            return u && u.abort(Dt), on(0, Dt), this
                        }
                    };
                if (rt.promise(et), ne.url = ((r || ne.url || xi.href) + "").replace(Lo, xi.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(Te) || [""], ne.crossDomain == null) {
                    z = P.createElement("a");
                    try {
                        z.href = ne.url, z.href = z.href, ne.crossDomain = Nr.protocol + "//" + Nr.host != z.protocol + "//" + z.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), xs(ws, ne, s, et), H) return et;
                Z = d.event && ne.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Do.test(ne.type), p = ne.url.replace(Ro, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Oo, "+")) : (Ce = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (qi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Io, "$1"), Ce = (qi.test(p) ? "&" : "?") + "_=" + Mr.guid++ + Ce), ne.url = p + Ce), ne.ifModified && (d.lastModified[p] && et.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && et.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", ne.contentType), et.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + bs + "; q=0.01" : "") : ne.accepts["*"]);
                for (le in ne.headers) et.setRequestHeader(le, ne.headers[le]);
                if (ne.beforeSend && (ne.beforeSend.call(ue, et, ne) === !1 || H)) return et.abort();
                if (_t = "abort", je.add(ne.complete), et.done(ne.success), et.fail(ne.error), u = xs(Br, ne, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, Z && Ge.trigger("ajaxSend", [et, ne]), H) return et;
                    ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                        et.abort("timeout")
                    }, ne.timeout));
                    try {
                        H = !1, u.send(Bt, on)
                    } catch (ft) {
                        if (H) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Dt, _i, Wi) {
                    var hn, Kn, Jn, an, Ln, vn = Dt;
                    H || (H = !0, T && e.clearTimeout(T), u = void 0, w = Wi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, _i && (an = Mo(ne, et, _i)), !hn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = Po(ne, an, et, hn), hn ? (ne.ifModified && (Ln = et.getResponseHeader("Last-Modified"), Ln && (d.lastModified[p] = Ln), Ln = et.getResponseHeader("etag"), Ln && (d.etag[p] = Ln)), ft === 204 || ne.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? rt.resolveWith(ue, [Kn, vn, et]) : rt.rejectWith(ue, [et, vn, Jn]), et.statusCode(zt), zt = void 0, Z && Ge.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, ne, hn ? Kn : Jn]), je.fireWith(ue, [et, vn]), Z && (Ge.trigger("ajaxComplete", [et, ne]), --d.active || d.event.trigger("ajaxStop")))
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
        var Bo = {
                0: 200,
                1223: 204
            },
            Ei = d.ajaxSettings.xhr();
        Y.cors = !!Ei && "withCredentials" in Ei, Y.ajax = Ei = !!Ei, d.ajaxTransport(function(r) {
            var s, u;
            if (Y.cors || Ei && !r.crossDomain) return {
                send: function(p, w) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
                    s = function(z) {
                        return function() {
                            s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(Bo[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
        var $r = [],
            jr = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = $r.pop() || d.expando + "_" + Mr.guid++;
                return this[r] = !0, r
            }
        }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, w, x, T = r.jsonp !== !1 && (jr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && jr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (qi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || d.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, $r.push(p)), x && re(w) && w(x[0]), x = w = void 0
            }), "script"
        }), Y.createHTMLDocument = function() {
            var r = P.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), d.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, x;
            return s || (Y.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = Fe.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = In([r], s, x), x && x.length && d(x).remove(), d.merge([], w.childNodes))
        }, d.fn.load = function(r, s, u) {
            var p, w, x, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = qn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(H) {
                x = arguments, T.html(p ? d("<div>").append(d.parseHTML(H)).find(p) : H)
            }).always(u && function(H, Z) {
                T.each(function() {
                    u.apply(this, x || [H.responseText, Z, H])
                })
            }), this
        }, d.expr.pseudos.animated = function(r) {
            return d.grep(d.timers, function(s) {
                return r === s.elem
            }).length
        }, d.offset = {
            setOffset: function(r, s, u) {
                var p, w, x, T, z, H, Z, le = d.css(r, "position"),
                    Ce = d(r),
                    ne = {};
                le === "static" && (r.style.position = "relative"), z = Ce.offset(), x = d.css(r, "top"), H = d.css(r, "left"), Z = (le === "absolute" || le === "fixed") && (x + H).indexOf("auto") > -1, Z ? (p = Ce.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(H) || 0), re(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (ne.top = s.top - z.top + T), s.left != null && (ne.left = s.left - z.left + w), "using" in s ? s.using.call(r, ne) : Ce.css(ne)
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
                return g(this, function(w, x, T) {
                    var z;
                    if (m(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), d.each(["top", "left"], function(r, s) {
            d.cssHooks[s] = y(Y.pixelPosition, function(u, p) {
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
                d.fn[p] = function(w, x) {
                    var T = arguments.length && (u || typeof w != "boolean"),
                        z = u || (w === !0 || x === !0 ? "margin" : "border");
                    return g(this, function(H, Z, le) {
                        var Ce;
                        return m(H) ? p.indexOf("outer") === 0 ? H["inner" + r] : H.document.documentElement["client" + r] : H.nodeType === 9 ? (Ce = H.documentElement, Math.max(H.body["scroll" + r], Ce["scroll" + r], H.body["offset" + r], Ce["offset" + r], Ce["client" + r])) : le === void 0 ? d.css(H, Z, z) : d.style(H, Z, le, z)
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
        }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = K, d.isFunction = re, d.isWindow = m, d.camelCase = N, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
            var s = d.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, d.trim = function(r) {
            return r == null ? "" : (r + "").replace(Es, "")
        };
        var No = e.jQuery,
            Vo = e.$;
        return d.noConflict = function(r) {
            return e.$ === d && (e.$ = Vo), r && e.jQuery === d && (e.jQuery = No), d
        }, typeof n > "u" && (e.jQuery = e.$ = d), d
    })
})(Ba);
const ce = Ba.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Pi.exports,
                a;
            try {
                a = Ba.exports
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
                    for (var ke = i.keys(te); O < ke.length; O++) M = te[ke[O]], delete te[M.id], delete M.listeningTo[M.objId];
                    return
                }
                for (var de = l ? [l] : i.keys(E); O < de.length; O++) {
                    l = de[O];
                    var De = E[l];
                    if (!De) break;
                    for (var Le = [], nt = 0; nt < De.length; nt++) {
                        var Ct = De[nt];
                        g && g !== Ct.callback && g !== Ct.callback._callback || N && N !== Ct.context ? Le.push(Ct) : (M = Ct.listening, M && --M.count === 0 && (delete te[M.id], delete M.listeningTo[M.objId]))
                    }
                    Le.length ? E[l] = Le : delete E[l]
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
                var ke = this.attributes,
                    de = this.changed,
                    De = this._previousAttributes;
                for (var Le in _) l = _[Le], i.isEqual(ke[Le], l) || N.push(Le), i.isEqual(De[Le], l) ? delete de[Le] : de[Le] = l, O ? delete ke[Le] : ke[Le] = l;
                if (this.idAttribute in _ && (this.id = this.get(this.idAttribute)), !M) {
                    N.length && (this._pending = g);
                    for (var nt = 0; nt < N.length; nt++) this.trigger("change:" + N[nt], this, ke[N[nt]], g)
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
                }, Gt(this, E), this.sync("read", this, E)
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
                g.success = function(De) {
                    M.attributes = te;
                    var Le = g.parse ? M.parse(De, g) : De;
                    if (O && (Le = i.extend({}, _, Le)), Le && !M.set(Le, g)) return !1;
                    N && N.call(g.context, M, De, g), M.trigger("sync", M, De, g)
                }, Gt(this, g), _ && O && (this.attributes = i.extend({}, te, _));
                var ke = this.isNew() ? "create" : g.patch ? "patch" : "update";
                ke === "patch" && !g.attrs && (g.attrs = _);
                var de = this.sync(ke, this, g);
                return this.attributes = te, de
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
                return this.isNew() ? i.defer(E.success) : (Gt(this, E), M = this.sync("delete", this, E)), _ || O(), M
            },
            url: function() {
                var E = i.result(this, "urlRoot") || i.result(this.collection, "url") || Vt();
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
        var d = n.Collection = function(E, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), E && this.reset(E, i.extend({
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
            Pe = function(E, l, g) {
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
                }, l, Oe))
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
                    l = i.extend({}, _e, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var _ = l.at;
                    _ != null && (_ = +_), _ > this.length && (_ = this.length), _ < 0 && (_ += this.length + 1);
                    var O = [],
                        M = [],
                        N = [],
                        te = [],
                        ke = {},
                        de = l.add,
                        De = l.merge,
                        Le = l.remove,
                        nt = !1,
                        Ct = this.comparator && _ == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (De && ct !== bt) {
                                var Kt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Kt = bt.parse(Kt, l)), bt.set(Kt, l), N.push(bt), Ct && !nt && (nt = bt.hasChanged(rn))
                            }
                            ke[bt.cid] || (ke[bt.cid] = !0, O.push(bt)), E[yt] = bt
                        } else de && (ct = E[yt] = this._prepareModel(ct, l), ct && (M.push(ct), this._addReference(ct, l), ke[ct.cid] = !0, O.push(ct)))
                    }
                    if (Le) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], ke[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Je = !1,
                        Mt = !Ct && de && Le;
                    if (O.length && Mt ? (Je = this.length !== O.length || i.some(this.models, function(j, B) {
                            return j !== O[B]
                        }), this.models.length = 0, Pe(this.models, O, 0), this.length = this.models.length) : M.length && (Ct && (nt = !0), Pe(this.models, M, _ == null ? this.length : _), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < M.length; yt++) _ != null && (l.index = _ + yt), ct = M[yt], ct.trigger("add", ct, this, l);
                        (nt || Je) && this.trigger("sort", this, l), (M.length || te.length || N.length) && (l.changes = {
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
                }, Gt(this, E), this.sync("read", this, E)
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
        var Ve = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, Fe)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            K = /^(\S+)\s*(.*)$/,
            Fe = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Ve.prototype, $, {
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
            var _ = U[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var O = {
                type: _,
                dataType: "json"
            };
            if (g.url || (O.url = i.result(l, "url") || Vt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (O.contentType = "application/json", O.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (O.contentType = "application/x-www-form-urlencoded", O.data = O.data ? {
                    model: O.data
                } : {}), g.emulateHTTP && (_ === "PUT" || _ === "DELETE" || _ === "PATCH")) {
                O.type = "POST", g.emulateJSON && (O.data._method = _);
                var M = g.beforeSend;
                g.beforeSend = function(ke) {
                    if (ke.setRequestHeader("X-HTTP-Method-Override", _), M) return M.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var N = g.error;
            g.error = function(ke, de, De) {
                g.textStatus = de, g.errorThrown = De, N && N.call(g.context, ke, de, De)
            };
            var te = g.xhr = n.ajax(i.extend(O, g));
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
        var oe = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Ae = /\((.*?)\)/g,
            be = /(\(\?)?:\w+/g,
            we = /\*\w+/g,
            he = /[\-{}\[\]+?.,\\\^$|#\s]/g;
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
                return E = E.replace(he, "\\$&").replace(Ae, "(?:$1)?").replace(be, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(we, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(E, l) {
                var g = E.exec(l).slice(1);
                return i.map(g, function(_, O) {
                    return O === g.length - 1 ? _ || null : _ ? decodeURIComponent(_) : null
                })
            }
        });
        var Se = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Te = /^[#\/]|\s+$/g,
            $e = /^\/+|\/+$/g,
            Ke = /#.*$/;
        Se.started = !1, i.extend(Se.prototype, $, {
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
                return E == null && (this._usePushState || !this._wantsHashChange ? E = this.getPath() : E = this.getHash()), E.replace(Te, "")
            },
            start: function(E) {
                if (Se.started) throw new Error("Backbone.history has already been started");
                if (Se.started = !0, this.options = i.extend({
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
                var O = window.addEventListener || function(M, N) {
                    return attachEvent("on" + M, N)
                };
                if (this._usePushState ? O("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? O("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var E = window.removeEventListener || function(l, g) {
                    return detachEvent("on" + l, g)
                };
                this._usePushState ? E("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && E("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), Se.started = !1
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
                if (!Se.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), E = this.getFragment(E || "");
                var g = this.root;
                (E === "" || E.charAt(0) === "?") && (g = g.slice(0, -1) || "/");
                var _ = g + E;
                if (E = this.decodeFragment(E.replace(Ke, "")), this.fragment !== E) {
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
        }), n.history = new Se;
        var dt = function(E, l) {
            var g = this,
                _;
            return E && i.has(E, "constructor") ? _ = E.constructor : _ = function() {
                return g.apply(this, arguments)
            }, i.extend(_, g, l), _.prototype = i.create(g.prototype, E), _.prototype.constructor = _, _.__super__ = g.prototype, _
        };
        se.extend = d.extend = oe.extend = Ve.extend = Se.extend = dt;
        var Vt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Gt = function(E, l) {
                var g = l.error;
                l.error = function(_) {
                    g && g.call(l.context, E, _, l), E.trigger("error", E, _, l)
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
                    for (var ye in q) {
                        var d = m[P].apply(m, [ye, q[ye]].concat(ae));
                        S.test(ye) ? n.extend(se, d) : se[ye] = d
                    }
                    return se
                }
                if (S.test(q)) {
                    for (var _e = q.split(S), Oe = 0, Pe = _e.length; Oe < Pe; Oe++) se[_e[Oe]] = m[P].apply(m, [_e[Oe]].concat(ae));
                    return se
                }
                return !1
            }, v._callHandler = function(m, P, q) {
                var ae = q[0],
                    se = q[1],
                    ye = q[2];
                switch (q.length) {
                    case 0:
                        return m.call(P);
                    case 1:
                        return m.call(P, ae);
                    case 2:
                        return m.call(P, ae, se);
                    case 3:
                        return m.call(P, ae, se, ye);
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
                for (var se = P ? [P] : n.keys(m), ye = !1, d = 0, _e = se.length; d < _e; d++) P = se[d], !!m[P] && k(m, P, q, ae) && (ye = !0);
                return ye
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
                        ye = this._requests;
                    if (se && this._tunedIn && v.log.apply(this, [se, P].concat(q)), ye && (ye[P] || ye.default)) {
                        var d = ye[P] || ye.default;
                        return q = ye[P] ? q : arguments, v._callHandler(d.callback, d.context, q)
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
                        ye = n.once(function() {
                            return se.stopReplying(P), J(q).apply(this, arguments)
                        });
                    return this.reply(P, ye, ae)
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
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            v = function(o) {
                return function(C) {
                    for (var A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    return o.apply(C, Q)
                }
            },
            S = n.Model.extend,
            k = function y(o, C) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!Ze.DEV_MODE && (C === void 0 || !C) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
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
                    var xe = o[Q];
                    xe !== void 0 && (A[Q] = xe)
                })
            },
            $ = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            J = function(o) {
                var C = this;
                return i.reduce(o, function(A, Q, xe) {
                    return i.isFunction(Q) || (Q = C[Q]), Q && (A[xe] = Q), A
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
                xe = $.call(this, Q),
                qe = void 0;
            return i.isFunction(xe) && (qe = xe.apply(this, C)), this.trigger.apply(this, arguments), qe
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
            q(this, "before:attach", ae)
        }

        function lt() {
            q(this, "attach", se), _e(this)
        }

        function Ve() {
            q(this, "before:detach", ye), Oe(this)
        }

        function K() {
            q(this, "detach", d)
        }

        function Fe() {
            Oe(this)
        }

        function U() {
            _e(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Ve,
                detach: K,
                "before:render": Fe,
                render: U
            }))
        }
        var Ae = ["description", "fileName", "lineNumber", "name", "message", "number"],
            be = S.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(o, C) {
                    i.isObject(o) ? (C = o, o = C.message) : C || (C = {});
                    var A = Error.call(this, o);
                    i.extend(this, i.pick(A, Ae), i.pick(C, Ae)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, be)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        be.extend = S;

        function we(y, o, C, A, Q) {
            var xe = A.split(/\s+/);
            xe.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(xe, function(qe) {
                var It = y[qe];
                if (!It) throw new be('Method "' + qe + '" was configured as an event handler, but does not exist.');
                y[Q](o, C, It)
            })
        }

        function he(y, o, C, A) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(Q, xe) {
                if (i.isString(Q)) {
                    we(y, o, xe, Q, A);
                    return
                }
                y[A](o, xe, Q)
            })
        }

        function Se(y, o) {
            return !y || !o ? this : (he(this, y, o, "listenTo"), this)
        }

        function Te(y, o) {
            return y ? o ? (he(this, y, o, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, o, C, A) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Q = J.call(y, C);
            o[A](Q, y)
        }

        function Ke(y, o) {
            return !y || !o ? this : ($e(this, y, o, "reply"), this)
        }

        function dt(y, o) {
            return y ? o ? ($e(this, y, o, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var Vt = function(o) {
                this.options = i.extend({}, i.result(this, "options"), o)
            },
            Gt = {
                normalizeMethods: J,
                _setOptions: Vt,
                mergeOptions: D,
                getOption: $,
                bindEvents: Se,
                unbindEvents: Te
            },
            E = {
                _initRadio: function() {
                    var o = i.result(this, "channelName");
                    if (!!o) {
                        if (!a) throw new be({
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
                bindEvents: Se,
                unbindEvents: Te,
                bindRequests: Ke,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = S, i.extend(g.prototype, n.Events, Gt, E, {
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
                var xe = A.length;
                if (xe > 0)
                    for (o = 0; o < xe; o++) delete this.templateCaches[A[o]];
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
                if (!A.length) throw new be({
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
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, o)[o] : Ze.Behaviors.behaviorsLookup[o]
        }

        function N(y, o) {
            return i.chain(o).map(function(C, A) {
                var Q = M(C, A),
                    xe = C === Q ? {} : C,
                    qe = new Q(xe, y),
                    It = N(y, i.result(qe, "behaviors"));
                return [qe].concat(It)
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
            ke = {
                _delegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    A && (Te.call(this, o, A), Se.call(this, o, A));
                    var Q = i.result(this, "collectionEvents");
                    Q && (Te.call(this, C, Q), Se.call(this, C, Q))
                },
                _undelegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    Te.call(this, o, A);
                    var Q = i.result(this, "collectionEvents");
                    Te.call(this, C, Q)
                }
            },
            de = /^(\S+)\s*(.*)$/,
            De = function(o, C) {
                var A = o.match(de);
                return A[1] + "." + C + " " + A[2]
            },
            Le = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function nt(y) {
            return !!Le[y]
        }

        function Ct(y, o) {
            return Le[y] = o
        }

        function rn(y, o) {
            i.isString(o) && (o = {
                event: o
            });
            var C = o.event,
                A = !!o.preventDefault;
            nt("triggersPreventDefault") && (A = o.preventDefault !== !1);
            var Q = !!o.stopPropagation;
            return nt("triggersStopPropagation") && (Q = o.stopPropagation !== !1),
                function(xe) {
                    A && xe.preventDefault(), Q && xe.stopPropagation(), y.triggerMethod(C, y, xe)
                }
        }
        var ct = {
                _getViewTriggers: function(o, C) {
                    var A = this;
                    return i.reduce(C, function(Q, xe, qe) {
                        return qe = De(qe, "trig" + A.cid), Q[qe] = rn(o, xe), Q
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(A, Q, xe) {
                    var qe = bt(xe, C);
                    return A[qe] = Q, A
                }, {})
            },
            bt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Kt = function y(o, C, A) {
                return i.each(o, function(Q, xe) {
                    i.isString(Q) ? o[xe] = bt(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(qe) {
                        var It = Q[qe];
                        i.isString(It) && (Q[qe] = bt(It, C))
                    }))
                }), o
            },
            Je = {
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
                    return Kt(o, A, C)
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

        function j(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var B = {
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
                            var xe = o.nextSibling,
                                qe = C.nextSibling;
                            A.insertBefore(C, xe), Q.insertBefore(o, qe)
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
                        xe = Q === void 0 ? Mt(o) : Q,
                        qe = A._$contents,
                        It = qe === void 0 ? Mt(C) : qe;
                    xe.append(It)
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
                Dom: B,
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
                    return nt("childViewEventPrefix") ? "childview" : !1
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
                    for (var C = this.normalizeMethods(this._childViewEvents), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    typeof C < "u" && i.isFunction(C[o]) && C[o].apply(this, Q);
                    var qe = this._childViewTriggers;
                    qe && i.isString(qe[o]) && this.triggerMethod.apply(this, [qe[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Wt = It + ":" + o;
                        this.triggerMethod.apply(this, [Wt].concat(Q))
                    }
                }
            };
        i.extend(W, te, Gt, ke, ct, Je);

        function L(y) {
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
        var pe = ["allowMissingEl", "parentEl", "replaceElement"],
            ge = g.extend({
                Dom: B,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(o) {
                    if (this._setOptions(o), this.mergeOptions(o, pe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new be({
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
                        throw new be('An "el" must exist in DOM for this region ' + this.cid)
                    }
                    return !0
                },
                _getView: function(o) {
                    if (!o) throw new be({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                    });
                    if (o._isDestroyed) throw new be({
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
            Be = function(y, o) {
                return y instanceof ge ? y : Ne(y, o)
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
            throw new be({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function pt(y) {
            var o = y.regionClass,
                C = i.omit(y, "regionClass");
            return new o(C)
        }
        var jt = {
                regionClass: ge,
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
                    return i.reduce(o, function(Q, xe, qe) {
                        return Q[qe] = Be(xe, A), C._addRegion(Q[qe], qe), Q
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
                    for (var A = this.getRegion(o), Q = arguments.length, xe = Array(Q > 2 ? Q - 2 : 0), qe = 2; qe < Q; qe++) xe[qe - 2] = arguments[qe];
                    return A.show.apply(A, [C].concat(xe))
                },
                detachChildView: function(o) {
                    return this.getRegion(o).detachView()
                },
                getChildView: function(o) {
                    return this.getRegion(o).currentView
                }
            },
            Ye = {
                render: function(o, C) {
                    if (!o) throw new be({
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
                    return Ye.render(o, C, this)
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
        i.extend(Pn.prototype, W, jt);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(o, C) {
                i.each(it, function(A) {
                    o[A] = function() {
                        var Q = i.result(this, C),
                            xe = Array.prototype.slice.call(arguments);
                        return i[A].apply(i, [Q].concat(xe))
                    }
                })
            },
            gi = function(o) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(o, i.bind(this.add, this))
            };
        Dn(gi.prototype, "_getViews"), i.extend(gi.prototype, {
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
        var Sr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            kn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Sr), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
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
                        var xe = Q && C.children.findByModel(Q);
                        return !xe || xe._isDestroyed || (C._removeChildView(xe), A.push(xe)), A
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
                        xe = this.filter !== o,
                        qe = Q && xe && !A;
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
                _applyModelDeltas: function(o, C) {
                    var A = this,
                        Q = {};
                    i.each(o, function(qe, It) {
                        var Wt = !A.children.findByModel(qe);
                        Wt && A._onCollectionAdd(qe, A.collection, {
                            at: It
                        }), Q[qe.cid] = !0
                    });
                    var xe = i.filter(C, function(qe) {
                        return !Q[qe.cid] && A.children.findByModel(qe)
                    });
                    this._removeChildModels(xe)
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
                        var xe = [],
                            qe = i.reduce(this.children._views, function(Wt, Un) {
                                var Bn = i.indexOf(A, Un.model);
                                return Bn === -1 ? (xe.push(Un.model), Wt) : (Un._index = Bn, Wt[Bn] = Un.el, Wt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(qe, function(Wt) {
                            o.Dom.appendContents(It, Wt)
                        }), this._appendReorderedChildren(It), this._removeChildModels(xe), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var o = this,
                        C = this._filteredSortedModels(),
                        A = i.find(C, function(Q, xe) {
                            var qe = o.children.findByModel(Q);
                            return !qe || qe._index !== xe
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
                        xe = this.buildChildView(o, A, Q);
                    return xe
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
                    if (!C) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, o), !C) throw new be({
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
                            i.each(i.sortBy(this.children._views, "_index"), function(Q, xe) {
                                Q._index = xe
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
                    return Q && (A = i.find(this.children._views, function(xe) {
                        return xe._index === C + 1
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
                    this.children = new gi
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
        i.extend(kn.prototype, W);
        var sn = function() {
            this._init()
        };
        Dn(sn.prototype, "_views");

        function kr(y, o) {
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
                return typeof o == "string" ? (o = i.partial(kr, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, C)) : this._views.sort(i.bind(o, C))
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
                    var xe = this._views[A];
                    this._views[A] = this._views[Q], this._views[Q] = xe
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
        var Tr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            mi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Tr), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
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
                _onCollectionSort: function(o, C) {
                    var A = C.add,
                        Q = C.merge,
                        xe = C.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || A || xe || Q || this.sort()
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
                        var xe = C._removeChildModel(Q);
                        return xe && A.push(xe), A
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
                    if (!C) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, o), !C) throw new be({
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
                        xe = Q && !A;
                    return this.viewComparator = o, xe && this.sort(), this
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
                        xe = [];
                    return i.each(this.children._views, function(qe, It, Wt) {
                        (C.call(o, qe, It, Wt) ? Q : xe).push(qe)
                    }), this._detachChildren(xe), this.triggerMethod("filter", this, Q, xe), Q
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
                    throw new be({
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
                        xe = Q && !A;
                    return this.viewFilter = o, xe && this.filter(), this
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
                    if (!this.children.hasView(o) || !this.children.hasView(C)) throw new be({
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
        i.extend(mi.prototype, W);
        var $i = ["childViewContainer", "template", "templateContext"],
            vi = kn.extend({
                constructor: function(o) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, $i), kn.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(o) {
                    var C = this.childView;
                    if (!C) return this.constructor;
                    if (C = this._getView(C, o), !C) throw new be({
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
                        var xe = i.result(o, "childViewContainer");
                        if (xe.charAt(0) === "@" && o.ui ? A = o.ui[xe.substr(4)] : A = this.$(xe), A.length <= 0) throw new be({
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
            yi = i.pick(Pn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(vi.prototype, yi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Fi = g.extend({
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
                    return i.reduce(C, function(A, Q, xe) {
                        return i.isFunction(Q) || (Q = o[Q]), Q && (xe = De(xe, o.cid), A[xe] = i.bind(Q, o)), A
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, o)
                    }
                }
            });
        i.extend(Fi.prototype, ke, ct, Je);
        var mn = ["region", "regionClass"],
            zi = g.extend({
                cidPrefix: "mna",
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, mn), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: ge,
                _initRegion: function() {
                    var o = this.region;
                    if (!!o) {
                        var C = {
                            regionClass: this.regionClass
                        };
                        this._region = Be(o, C)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(o) {
                    for (var C = this.getRegion(), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    return C.show.apply(C, [o].concat(Q))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(o) {
                    return this.triggerMethod("before:start", this, o), this.triggerMethod("start", this, o), this
                }
            }),
            wi = ["appRoutes", "controller"],
            Hn = n.Router.extend({
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, wi), n.Router.apply(this, arguments);
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
                    return i.each(Q, function(xe) {
                        A._addAppRoute(o, xe, C[xe])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(o, C, A) {
                    var Q = o[A];
                    if (!Q) throw new be('Method "' + A + '" was not found on the controller');
                    this.route(C, A, i.bind(Q, o))
                },
                triggerMethod: m
            });
        i.extend(Hn.prototype, Gt);

        function Hi() {
            throw new be({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var bi = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = bi, this
        }, Ze.bindEvents = v(Se), Ze.unbindEvents = v(Te), Ze.bindRequests = v(Ke), Ze.unbindRequests = v(dt), Ze.mergeOptions = v(D), Ze.getOption = v($), Ze.normalizeMethods = v(J), Ze.extend = S, Ze.isNodeAttached = I, Ze.deprecate = k, Ze.triggerMethod = v(m), Ze.triggerMethodOn = P, Ze.isEnabled = nt, Ze.setEnabled = Ct, Ze.monitorViewEvents = oe, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Hi, Ze.Application = zi, Ze.AppRouter = Hn, Ze.Renderer = Ye, Ze.TemplateCache = _, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = mi, Ze.CompositeView = vi, Ze.Behavior = Fi, Ze.Region = ge, Ze.Error = be, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = Le, Ze.VERSION = f, Ze.DomApi = B, Ze.setDomApi = function(y) {
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
var Lh = Dh,
    Mh = lo;

function Ph(t, e) {
    var n = this.__data__,
        i = Mh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Bh = Ph,
    Nh = wh,
    Vh = Th,
    $h = Rh,
    jh = Lh,
    Fh = Bh;

function wr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
wr.prototype.clear = Nh;
wr.prototype.delete = Vh;
wr.prototype.get = $h;
wr.prototype.has = jh;
wr.prototype.set = Fh;
var co = wr,
    zh = co;

function Hh() {
    this.__data__ = new zh, this.size = 0
}
var Uh = Hh;

function Gh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var qh = Gh;

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
    var a = rd.call(t);
    return i && (e ? t[Xr] = n : delete t[Xr]), a
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
var Ni = md,
    vd = uo,
    yd = Ni,
    wd = "[object AsyncFunction]",
    bd = "[object Function]",
    Cd = "[object GeneratorFunction]",
    xd = "[object Proxy]";

function Ed(t) {
    if (!yd(t)) return !1;
    var e = vd(t);
    return e == bd || e == Cd || e == wd || e == xd
}
var Na = Ed,
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
    Ld = Na,
    Md = Ad,
    Pd = Ni,
    Bd = Dd,
    Nd = /[\\^$.*+?()[\]{}|]/g,
    Vd = /^\[object .+?Constructor\]$/,
    $d = Function.prototype,
    jd = Object.prototype,
    Fd = $d.toString,
    zd = jd.hasOwnProperty,
    Hd = RegExp("^" + Fd.call(zd).replace(Nd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Ud(t) {
    if (!Pd(t) || Md(t)) return !1;
    var e = Ld(t) ? Hd : Vd;
    return e.test(Bd(t))
}
var Gd = Ud;

function qd(t, e) {
    return t == null ? void 0 : t[e]
}
var Wd = qd,
    Xd = Gd,
    Yd = Wd;

function Kd(t, e) {
    var n = Yd(t, e);
    return Xd(n) ? n : void 0
}
var Va = Kd,
    Jd = Va,
    Qd = br,
    Zd = Jd(Qd, "Map"),
    Ec = Zd,
    ef = Va,
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
var Lf = Df,
    Mf = Lf;

function Pf(t, e) {
    var n = t.__data__;
    return Mf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var fo = Pf,
    Bf = fo;

function Nf(t) {
    var e = Bf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Vf = Nf,
    $f = fo;

function jf(t) {
    return $f(this, t).get(t)
}
var Ff = jf,
    zf = fo;

function Hf(t) {
    return zf(this, t).has(t)
}
var Uf = Hf,
    Gf = fo;

function qf(t, e) {
    var n = Gf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Wf = qf,
    Xf = If,
    Yf = Vf,
    Kf = Ff,
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
    fp = Va,
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
        for (var a = -1, f = Object(e), v = i(e), S = v.length; S--;) {
            var k = v[t ? S : ++a];
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
var Lp = Dp,
    Mp = Ni,
    El = Object.create,
    Pp = function() {
        function t() {}
        return function(e) {
            if (!Mp(e)) return {};
            if (El) return El(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Bp = Pp;

function Np(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Vp = Np,
    $p = Vp,
    jp = $p(Object.getPrototypeOf, Object),
    kc = jp,
    Fp = Object.prototype;

function zp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || Fp;
    return t === n
}
var Tc = zp,
    Hp = Bp,
    Up = kc,
    Gp = Tc;

function qp(t) {
    return typeof t.constructor == "function" && !Gp(t) ? Hp(Up(t)) : {}
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
    ag = Na,
    lg = Ic;

function cg(t) {
    return t != null && lg(t.length) && !ag(t)
}
var ja = cg,
    ug = ja,
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
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        v = f && f.exports === a,
        S = v ? n.Buffer : void 0,
        k = S ? S.isBuffer : void 0,
        I = k || i;
    t.exports = I
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
    Lg = "[object Error]",
    Mg = "[object Function]",
    Pg = "[object Map]",
    Bg = "[object Number]",
    Ng = "[object Object]",
    Vg = "[object RegExp]",
    $g = "[object Set]",
    jg = "[object String]",
    Fg = "[object WeakMap]",
    zg = "[object ArrayBuffer]",
    Hg = "[object DataView]",
    Ug = "[object Float32Array]",
    Gg = "[object Float64Array]",
    qg = "[object Int8Array]",
    Wg = "[object Int16Array]",
    Xg = "[object Int32Array]",
    Yg = "[object Uint8Array]",
    Kg = "[object Uint8ClampedArray]",
    Jg = "[object Uint16Array]",
    Qg = "[object Uint32Array]",
    Lt = {};
Lt[Ug] = Lt[Gg] = Lt[qg] = Lt[Wg] = Lt[Xg] = Lt[Yg] = Lt[Kg] = Lt[Jg] = Lt[Qg] = !0;
Lt[Og] = Lt[Rg] = Lt[zg] = Lt[Ig] = Lt[Hg] = Lt[Dg] = Lt[Lg] = Lt[Mg] = Lt[Pg] = Lt[Bg] = Lt[Ng] = Lt[Vg] = Lt[$g] = Lt[jg] = Lt[Fg] = !1;

function Zg(t) {
    return Ag(t) && Tg(t.length) && !!Lt[kg(t)]
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
})(Ca, Ca.exports);
var im = em,
    rm = nm,
    Sl = Ca.exports,
    kl = Sl && Sl.isTypedArray,
    sm = kl ? rm(kl) : im,
    Lc = sm;

function om(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Mc = om,
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
    var a = !n;
    n || (n = {});
    for (var f = -1, v = e.length; ++f < v;) {
        var S = e[f],
            k = i ? i(n[S], t[S], S, n, t) : void 0;
        k === void 0 && (k = t[S]), a ? pm(n, S, k) : fm(n, S, k)
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
    Tm = Lc,
    Am = Object.prototype,
    Om = Am.hasOwnProperty;

function Rm(t, e) {
    var n = _m(t),
        i = !n && Em(t),
        a = !n && !i && Sm(t),
        f = !n && !i && !a && Tm(t),
        v = n || i || a || f,
        S = v ? xm(t.length, String) : [],
        k = S.length;
    for (var I in t)(e || Om.call(t, I)) && !(v && (I == "length" || a && (I == "offset" || I == "parent") || f && (I == "buffer" || I == "byteLength" || I == "byteOffset") || km(I, k))) && S.push(I);
    return S
}
var Im = Rm;

function Dm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Lm = Dm,
    Mm = Ni,
    Pm = Tc,
    Bm = Lm,
    Nm = Object.prototype,
    Vm = Nm.hasOwnProperty;

function $m(t) {
    if (!Mm(t)) return Bm(t);
    var e = Pm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Vm.call(t, i)) || n.push(i);
    return n
}
var jm = $m,
    Fm = Im,
    zm = jm,
    Hm = ja;

function Um(t) {
    return Hm(t) ? Fm(t, !0) : zm(t)
}
var Bc = Um,
    Gm = mm,
    qm = Bc;

function Wm(t) {
    return Gm(t, qm(t))
}
var Xm = Wm,
    Tl = Sc,
    Ym = ba.exports,
    Km = Ip,
    Jm = Lp,
    Qm = Wp,
    Al = Oc,
    Ol = Rc,
    Zm = fg,
    ev = Ks.exports,
    tv = Na,
    nv = Ni,
    iv = Sg,
    rv = Lc,
    Rl = Mc,
    sv = Xm;

function ov(t, e, n, i, a, f, v) {
    var S = Rl(t, n),
        k = Rl(e, n),
        I = v.get(k);
    if (I) {
        Tl(t, n, I);
        return
    }
    var D = f ? f(S, k, n + "", t, e, v) : void 0,
        $ = D === void 0;
    if ($) {
        var J = Ol(k),
            ie = !J && ev(k),
            Y = !J && !ie && rv(k);
        D = k, J || ie || Y ? Ol(S) ? D = S : Zm(S) ? D = Jm(S) : ie ? ($ = !1, D = Ym(k, !0)) : Y ? ($ = !1, D = Km(k, !0)) : D = [] : iv(k) || Al(k) ? (D = S, Al(S) ? D = sv(S) : (!nv(S) || tv(S)) && (D = Qm(k))) : $ = !1
    }
    $ && (v.set(k, D), a(D, k, i, f, v), v.delete(k)), Tl(t, n, D)
}
var av = ov,
    lv = dp,
    cv = Sc,
    uv = Ep,
    hv = av,
    dv = Ni,
    fv = Bc,
    pv = Mc;

function Nc(t, e, n, i, a) {
    t !== e && uv(e, function(f, v) {
        if (a || (a = new lv), dv(f)) hv(t, e, v, n, Nc, i, a);
        else {
            var S = i ? i(pv(t, v), f, v + "", t, e, a) : void 0;
            S === void 0 && (S = f), cv(t, v, S)
        }
    }, fv)
}
var gv = Nc;

function mv(t) {
    return t
}
var Vc = mv;

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
            for (var i = arguments, a = -1, f = Il(i.length - e, 0), v = Array(f); ++a < f;) v[a] = i[e + a];
            a = -1;
            for (var S = Array(e + 1); ++a < e;) S[a] = i[a];
            return S[e] = n(v), wv(t, this, S)
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
    Sv = Vc,
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
            a = Ov - (i - n);
        if (n = i, a > 0) {
            if (++e >= Av) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Dv = Iv,
    Lv = Tv,
    Mv = Dv,
    Pv = Mv(Lv),
    Bv = Pv,
    Nv = Vc,
    Vv = Cv,
    $v = Bv;

function jv(t, e) {
    return $v(Vv(t, e, Nv), t + "")
}
var Fv = jv,
    zv = ao,
    Hv = ja,
    Uv = Pc,
    Gv = Ni;

function qv(t, e, n) {
    if (!Gv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Hv(n) && Uv(e, n.length) : i == "string" && e in n) ? zv(n[e], t) : !1
}
var Wv = qv,
    Xv = Fv,
    Yv = Wv;

function Kv(t) {
    return Xv(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            v = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, v && Yv(n[0], n[1], v) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var S = n[i];
            S && t(e, S, i, f)
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
st(Zt, "defaultNamespace", "tv");
class Bi {
    constructor() {
        st(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Bi.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!Zt.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            v = Zt.get("galleries") || "[]";
        try {
            const S = JSON.parse(v) || [];
            if (S.some(k => k.url === f)) return;
            S.unshift({
                url: f,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), Zt.set("galleries", JSON.stringify(S.slice(0, 40)))
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
        Bi.setAsViewed(e), this.artifacts = this.list()
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

            function k(U) {
                return U && DataView.prototype.isPrototypeOf(U)
            }
            if (S.arrayBuffer) var I = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(U) {
                    return U && I.indexOf(Object.prototype.toString.call(U)) > -1
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
                        var Ae = U.shift();
                        return {
                            done: Ae === void 0,
                            value: Ae
                        }
                    }
                };
                return S.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function Y(U) {
                this.map = {}, U instanceof Y ? U.forEach(function(oe, Ae) {
                    this.append(Ae, oe)
                }, this) : Array.isArray(U) ? U.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : U && Object.getOwnPropertyNames(U).forEach(function(oe) {
                    this.append(oe, U[oe])
                }, this)
            }
            Y.prototype.append = function(U, oe) {
                U = $(U), oe = J(oe);
                var Ae = this.map[U];
                this.map[U] = Ae ? Ae + ", " + oe : oe
            }, Y.prototype.delete = function(U) {
                delete this.map[$(U)]
            }, Y.prototype.get = function(U) {
                return U = $(U), this.has(U) ? this.map[U] : null
            }, Y.prototype.has = function(U) {
                return this.map.hasOwnProperty($(U))
            }, Y.prototype.set = function(U, oe) {
                this.map[$(U)] = J(oe)
            }, Y.prototype.forEach = function(U, oe) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && U.call(oe, this.map[Ae], Ae, this)
            }, Y.prototype.keys = function() {
                var U = [];
                return this.forEach(function(oe, Ae) {
                    U.push(Ae)
                }), ie(U)
            }, Y.prototype.values = function() {
                var U = [];
                return this.forEach(function(oe) {
                    U.push(oe)
                }), ie(U)
            }, Y.prototype.entries = function() {
                var U = [];
                return this.forEach(function(oe, Ae) {
                    U.push([Ae, oe])
                }), ie(U)
            }, S.iterable && (Y.prototype[Symbol.iterator] = Y.prototype.entries);

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

            function ae(U) {
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
                    this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : S.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : S.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : S.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : S.arrayBuffer && S.blob && k(U) ? (this._bodyArrayBuffer = se(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : S.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || D(U)) ? this._bodyArrayBuffer = se(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : S.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, S.blob && (this.blob = function() {
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
                    if (this._bodyArrayBuffer) return Promise.resolve(ae(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, S.formData && (this.formData = function() {
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
                    this.url = U.url, this.credentials = U.credentials, oe.headers || (this.headers = new Y(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !Ae && U._bodyInit != null && (Ae = U._bodyInit, U.bodyUsed = !0)
                } else this.url = String(U);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new Y(oe.headers)), this.method = _e(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
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
                var oe = new Y,
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

            function Ve(U, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new Y(oe.headers), this.url = oe.url || "", this._initBody(U)
            }
            ye.call(Ve.prototype), Ve.prototype.clone = function() {
                return new Ve(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Y(this.headers),
                    url: this.url
                })
            }, Ve.error = function() {
                var U = new Ve(null, {
                    status: 0,
                    statusText: ""
                });
                return U.type = "error", U
            };
            var K = [301, 302, 303, 307, 308];
            Ve.redirect = function(U, oe) {
                if (K.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Ve(null, {
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

            function Fe(U, oe) {
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
                        Ae(new Ve($e, Te))
                    }, he.onerror = function() {
                        be(new TypeError("Network request failed"))
                    }, he.ontimeout = function() {
                        be(new TypeError("Network request failed"))
                    }, he.onabort = function() {
                        be(new v.DOMException("Aborted", "AbortError"))
                    }, he.open(we.method, we.url, !0), we.credentials === "include" ? he.withCredentials = !0 : we.credentials === "omit" && (he.withCredentials = !1), "responseType" in he && S.blob && (he.responseType = "blob"), we.headers.forEach(function(Te, $e) {
                        he.setRequestHeader($e, Te)
                    }), we.signal && (we.signal.addEventListener("abort", Se), he.onreadystatechange = function() {
                        he.readyState === 4 && we.signal.removeEventListener("abort", Se)
                    }), he.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                })
            }
            return Fe.polyfill = !0, f.fetch || (f.fetch = Fe, f.Headers = Y, f.Request = Oe, f.Response = Ve), v.Headers = Y, v.Request = Oe, v.Response = Ve, v.fetch = Fe, Object.defineProperty(v, "__esModule", {
                value: !0
            }), v
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Ea, Ea.exports);
var ny = function() {
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
    Ll = typeof Symbol < "u" && Symbol,
    iy = ny,
    ry = function() {
        return typeof Ll != "function" || typeof Symbol != "function" || typeof Ll("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : iy()
    },
    sy = "Function.prototype.bind called on incompatible ",
    Zo = Array.prototype.slice,
    oy = Object.prototype.toString,
    ay = "[object Function]",
    ly = function(e) {
        var n = this;
        if (typeof n != "function" || oy.call(n) !== ay) throw new TypeError(sy + n);
        for (var i = Zo.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var D = n.apply(this, i.concat(Zo.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(Zo.call(arguments)))
            }, v = Math.max(0, n.length - i.length), S = [], k = 0; k < v; k++) S.push("$" + k);
        if (a = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, a.prototype = new I, I.prototype = null
        }
        return a
    },
    cy = ly,
    Fa = Function.prototype.bind || cy,
    uy = Fa,
    hy = uy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, gr = SyntaxError,
    $c = Function,
    ur = TypeError,
    ea = function(t) {
        try {
            return $c('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Mi = Object.getOwnPropertyDescriptor;
if (Mi) try {
    Mi({}, "")
} catch {
    Mi = null
}
var ta = function() {
        throw new ur
    },
    dy = Mi ? function() {
        try {
            return arguments.callee, ta
        } catch {
            try {
                return Mi(arguments, "callee").get
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
            var a = t("%AsyncGenerator%");
            a && (n = ai(a.prototype))
        }
        return hr[e] = n, n
    },
    Ml = {
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
    hs = Fa,
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
        var a = [];
        return Pl(e, yy, function(f, v, S, k) {
            a[a.length] = S ? Pl(k, wy, "$1") : v || f
        }), a
    },
    Cy = function(e, n) {
        var i = e,
            a;
        if (Js(Ml, i) && (a = Ml[i], i = "%" + a[0] + "%"), Js(hr, i)) {
            var f = hr[i];
            if (f === or && (f = py(i)), typeof f > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
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
            a = i.length > 0 ? i[0] : "",
            f = Cy("%" + a + "%", n),
            v = f.name,
            S = f.value,
            k = !1,
            I = f.alias;
        I && (a = I[0], my(i, gy([0, 1], I)));
        for (var D = 1, $ = !0; D < i.length; D += 1) {
            var J = i[D],
                ie = Qs(J, 0, 1),
                Y = Qs(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || Y === '"' || Y === "'" || Y === "`") && ie !== Y) throw new gr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !$) && (k = !0), a += "." + J, v = "%" + a + "%", Js(hr, v)) S = hr[v];
            else if (S != null) {
                if (!(J in S)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Mi && D + 1 >= i.length) {
                    var re = Mi(S, J);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? S = re.get : S = S[J]
                } else $ = Js(S, J), S = S[J];
                $ && !k && (hr[v] = S)
            }
        }
        return S
    },
    jc = {
        exports: {}
    };
(function(t) {
    var e = Fa,
        n = za,
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
})(jc);
var Fc = za,
    zc = jc.exports,
    xy = zc(Fc("String.prototype.indexOf")),
    Ey = function(e, n) {
        var i = Fc(e, !!n);
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
var Ha = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Ha ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = Ha && na && typeof na.get == "function" ? na.get : null,
    Ty = Ha && Map.prototype.forEach,
    Ua = typeof Set == "function" && Set.prototype,
    ia = Object.getOwnPropertyDescriptor && Ua ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Ua && ia && typeof ia.get == "function" ? ia.get : null,
    Ay = Ua && Set.prototype.forEach,
    Oy = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Oy ? WeakMap.prototype.has : null,
    Ry = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Ry ? WeakSet.prototype.has : null,
    Iy = typeof WeakRef == "function" && WeakRef.prototype,
    Bl = Iy ? WeakRef.prototype.deref : null,
    Dy = Boolean.prototype.valueOf,
    Ly = Object.prototype.toString,
    My = Function.prototype.toString,
    Py = String.prototype.match,
    Ga = String.prototype.slice,
    hi = String.prototype.replace,
    By = String.prototype.toUpperCase,
    Nl = String.prototype.toLowerCase,
    Hc = RegExp.prototype.test,
    Vl = Array.prototype.concat,
    jn = Array.prototype.join,
    Ny = Array.prototype.slice,
    $l = Math.floor,
    _a = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Uc = Object.prototype.propertyIsEnumerable,
    jl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Fl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Hc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -$l(-t) : $l(t);
        if (i !== t) {
            var a = String(i),
                f = Ga.call(e, a.length + 1);
            return hi.call(a, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var ka = ky,
    zl = ka.custom,
    Hl = qc(zl) ? zl : null,
    Vy = function t(e, n, i, a) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var v = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof v != "boolean" && v !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var S = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Xc(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return S ? Fl(e, k) : k
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return S ? Fl(e, I) : I
        }
        var D = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Ta(e) ? "[Array]" : "[Object]";
        var $ = nw(f, i);
        if (typeof a > "u") a = [];
        else if (Wc(a, e) >= 0) return "[Circular]";

        function J(Fe, U, oe) {
            if (U && (a = Ny.call(a), a.push(U)), oe) {
                var Ae = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (Ae.quoteStyle = f.quoteStyle), t(Fe, Ae, i + 1, a)
            }
            return t(Fe, f, i + 1, a)
        }
        if (typeof e == "function" && !Ul(e)) {
            var ie = Wy(e),
                Y = Ms(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (Y.length > 0 ? " { " + jn.call(Y, ", ") + " }" : "")
        }
        if (qc(e)) {
            var re = mr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Sa.call(e);
            return typeof e == "object" && !mr ? Yr(re) : re
        }
        if (Zy(e)) {
            for (var m = "<" + Nl.call(String(e.nodeName)), P = e.attributes || [], q = 0; q < P.length; q++) m += " " + P[q].name + "=" + Gc($y(P[q].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Nl.call(String(e.nodeName)) + ">", m
        }
        if (Ta(e)) {
            if (e.length === 0) return "[]";
            var ae = Ms(e, J);
            return $ && !tw(ae) ? "[" + Aa(ae, $) + "]" : "[ " + jn.call(ae, ", ") + " ]"
        }
        if (Fy(e)) {
            var se = Ms(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !Uc.call(e, "cause") ? "{ [" + String(e) + "] " + jn.call(Vl.call("[cause]: " + J(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + jn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && v) {
            if (Hl && typeof e[Hl] == "function" && ka) return ka(e, {
                depth: D - i
            });
            if (v !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Xy(e)) {
            var ye = [];
            return Ty.call(e, function(Fe, U) {
                ye.push(J(U, e, !0) + " => " + J(Fe, e))
            }), Gl("Map", Zs.call(e), ye, $)
        }
        if (Jy(e)) {
            var d = [];
            return Ay.call(e, function(Fe) {
                d.push(J(Fe, e))
            }), Gl("Set", eo.call(e), d, $)
        }
        if (Yy(e)) return sa("WeakMap");
        if (Qy(e)) return sa("WeakSet");
        if (Ky(e)) return sa("WeakRef");
        if (Hy(e)) return Yr(J(Number(e)));
        if (Gy(e)) return Yr(J(_a.call(e)));
        if (Uy(e)) return Yr(Dy.call(e));
        if (zy(e)) return Yr(J(String(e)));
        if (!jy(e) && !Ul(e)) {
            var _e = Ms(e, J),
                Oe = jl ? jl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Ga.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Ve = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                K = Ve + (lt || Pe ? "[" + jn.call(Vl.call([], lt || [], Pe || []), ": ") + "] " : "");
            return _e.length === 0 ? K + "{}" : $ ? K + "{" + Aa(_e, $) + "}" : K + "{ " + jn.call(_e, ", ") + " }"
        }
        return String(e)
    };

function Gc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function $y(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Ta(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function jy(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Ul(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function Fy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function zy(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function Hy(t) {
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

function Gy(t) {
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
    return Ly.call(t)
}

function Wy(t) {
    if (t.name) return t.name;
    var e = Py.call(My.call(t), /^function\s*([\w$]+)/);
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
    if (!Bl || !t || typeof t != "object") return !1;
    try {
        return Bl.call(t), !0
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
        return Xc(Ga.call(t, 0, e.maxStringLength), e) + i
    }
    var a = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ew);
    return Gc(a, "single", e)
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
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + By.call(e.toString(16))
}

function Yr(t) {
    return "Object(" + t + ")"
}

function sa(t) {
    return t + " { ? }"
}

function Gl(t, e, n, i) {
    var a = i ? Aa(n, i) : jn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
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
    else if (typeof t.indent == "number" && t.indent > 0) n = jn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: jn.call(Array(e + 1), n)
    }
}

function Aa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + jn.call(t, "," + n) + `
` + e.prev
}

function Ms(t, e) {
    var n = Ta(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = li(t, a) ? e(t[a], t) : ""
    }
    var f = typeof ra == "function" ? ra(t) : [],
        v;
    if (mr) {
        v = {};
        for (var S = 0; S < f.length; S++) v["$" + f[S]] = f[S]
    }
    for (var k in t) !li(t, k) || n && String(Number(k)) === k && k < t.length || mr && v["$" + k] instanceof Symbol || (Hc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ra == "function")
        for (var I = 0; I < f.length; I++) Uc.call(t, f[I]) && i.push("[" + e(f[I]) + "]: " + e(t[f[I]], t));
    return i
}
var qa = za,
    _r = Ey,
    iw = Vy,
    rw = qa("%TypeError%"),
    Ps = qa("%WeakMap%", !0),
    Bs = qa("%Map%", !0),
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
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new rw("Side channel does not contain " + iw(f))
            },
            get: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return sw(e, f)
                } else if (Bs) {
                    if (n) return lw(n, f)
                } else if (i) return hw(i, f)
            },
            has: function(f) {
                if (Ps && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return aw(e, f)
                } else if (Bs) {
                    if (n) return uw(n, f)
                } else if (i) return fw(i, f);
                return !1
            },
            set: function(f, v) {
                Ps && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ps), ow(e, f, v)) : Bs ? (n || (n = new Bs), cw(n, f, v)) : (i || (i = {
                    key: {},
                    next: null
                }), dw(i, f, v))
            }
        };
        return a
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
    Vn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    yw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Di(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    Yc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
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
        var a = e;
        return Di(e) && !Di(n) && (a = Yc(e, i)), Di(e) && Di(n) ? (n.forEach(function(f, v) {
            if (aa.call(e, v)) {
                var S = e[v];
                S && typeof S == "object" && f && typeof f == "object" ? e[v] = t(S, f, i) : e.push(f)
            } else e[v] = f
        }), e) : Object.keys(n).reduce(function(f, v) {
            var S = n[v];
            return aa.call(f, v) ? f[v] = t(f[v], S, i) : f[v] = S, f
        }, a)
    },
    bw = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
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
    xw = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var v = e;
        if (typeof e == "symbol" ? v = Symbol.prototype.toString.call(e) : typeof e != "string" && (v = String(e)), i === "iso-8859-1") return escape(v).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var S = "", k = 0; k < v.length; ++k) {
            var I = v.charCodeAt(k);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || f === vw.RFC1738 && (I === 40 || I === 41)) {
                S += v.charAt(k);
                continue
            }
            if (I < 128) {
                S = S + Vn[I];
                continue
            }
            if (I < 2048) {
                S = S + (Vn[192 | I >> 6] + Vn[128 | I & 63]);
                continue
            }
            if (I < 55296 || I >= 57344) {
                S = S + (Vn[224 | I >> 12] + Vn[128 | I >> 6 & 63] + Vn[128 | I & 63]);
                continue
            }
            k += 1, I = 65536 + ((I & 1023) << 10 | v.charCodeAt(k) & 1023), S += Vn[240 | I >> 18] + Vn[128 | I >> 12 & 63] + Vn[128 | I >> 6 & 63] + Vn[128 | I & 63]
        }
        return S
    },
    Ew = function(e) {
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
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
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
    Lw = function t(e, n, i, a, f, v, S, k, I, D, $, J, ie, Y, re, m) {
        for (var P = e, q = m, ae = 0, se = !1;
            (q = q.get(la)) !== void 0 && !se;) {
            var ye = q.get(e);
            if (ae += 1, typeof ye < "u") {
                if (ye === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof q.get(la) > "u" && (ae = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = $(P) : i === "comma" && ei(P) && (P = Oa.maybeMap(P, function(he) {
                return he instanceof Date ? $(he) : he
            })), P === null) {
            if (f) return S && !Y ? S(n, tn.encoder, re, "key", J) : n;
            P = ""
        }
        if (Dw(P) || Oa.isBuffer(P)) {
            if (S) {
                var d = Y ? n : S(n, tn.encoder, re, "key", J);
                if (i === "comma" && Y) {
                    for (var _e = Ow.call(String(P), ","), Oe = "", Pe = 0; Pe < _e.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + ie(S(_e[Pe], tn.encoder, re, "value", J));
                    return [ie(d) + (a && ei(P) && _e.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [ie(d) + "=" + ie(S(P, tn.encoder, re, "value", J))]
            }
            return [ie(n) + "=" + ie(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var Ve;
        if (i === "comma" && ei(P)) Ve = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ei(k)) Ve = k;
        else {
            var K = Object.keys(P);
            Ve = I ? K.sort(I) : K
        }
        for (var Fe = a && ei(P) && P.length === 1 ? n + "[]" : n, U = 0; U < Ve.length; ++U) {
            var oe = Ve[U],
                Ae = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(v && Ae === null)) {
                var be = ei(P) ? typeof i == "function" ? i(Fe, oe) : Fe : Fe + (D ? "." + oe : "[" + oe + "]");
                m.set(e, ae);
                var we = Jc();
                we.set(la, m), Qc(lt, t(Ae, be, i, a, f, v, S, k, I, D, $, J, ie, Y, re, we))
            }
        }
        return lt
    },
    Mw = function(e) {
        if (!e) return tn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || tn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!Aw.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = is.formatters[i],
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
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : tn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : tn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : tn.strictNullHandling
        }
    },
    Pw = function(t, e) {
        var n = t,
            i = Mw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, a = f);
        var v = [];
        if (typeof n != "object" || n === null) return "";
        var S;
        e && e.arrayFormat in ql ? S = e.arrayFormat : e && "indices" in e ? S = e.indices ? "indices" : "repeat" : S = "indices";
        var k = ql[S];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var D = Jc(), $ = 0; $ < a.length; ++$) {
            var J = a[$];
            i.skipNulls && n[J] === null || Qc(v, Lw(n[J], J, k, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var ie = v.join(i.delimiter),
            Y = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? Y += "utf8=%26%2310003%3B&" : Y += "utf8=%E2%9C%93&"), ie.length > 0 ? Y + ie : ""
    },
    vr = Kc,
    Ra = Object.prototype.hasOwnProperty,
    Bw = Array.isArray,
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
    Nw = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    Zc = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Vw = "utf8=%26%2310003%3B",
    $w = "utf8=%E2%9C%93",
    jw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            v = a.split(n.delimiter, f),
            S = -1,
            k, I = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < v.length; ++k) v[k].indexOf("utf8=") === 0 && (v[k] === $w ? I = "utf-8" : v[k] === Vw && (I = "iso-8859-1"), S = k, k = v.length);
        for (k = 0; k < v.length; ++k)
            if (k !== S) {
                var D = v[k],
                    $ = D.indexOf("]="),
                    J = $ === -1 ? D.indexOf("=") : $ + 1,
                    ie, Y;
                J === -1 ? (ie = n.decoder(D, Qt.decoder, I, "key"), Y = n.strictNullHandling ? null : "") : (ie = n.decoder(D.slice(0, J), Qt.decoder, I, "key"), Y = vr.maybeMap(Zc(D.slice(J + 1), n), function(re) {
                    return n.decoder(re, Qt.decoder, I, "value")
                })), Y && n.interpretNumericEntities && I === "iso-8859-1" && (Y = Nw(Y)), D.indexOf("[]=") > -1 && (Y = Bw(Y) ? [Y] : Y), Ra.call(i, ie) ? i[ie] = vr.combine(i[ie], Y) : i[ie] = Y
            } return i
    },
    Fw = function(t, e, n, i) {
        for (var a = i ? e : Zc(e, n), f = t.length - 1; f >= 0; --f) {
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
    zw = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                v = /(\[[^[\]]*])/,
                S = /(\[[^[\]]*])/g,
                k = i.depth > 0 && v.exec(f),
                I = k ? f.slice(0, k.index) : f,
                D = [];
            if (I) {
                if (!i.plainObjects && Ra.call(Object.prototype, I) && !i.allowPrototypes) return;
                D.push(I)
            }
            for (var $ = 0; i.depth > 0 && (k = S.exec(f)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Ra.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(k[1])
            }
            return k && D.push("[" + f.slice(k.index) + "]"), Fw(D, n, i, a)
        }
    },
    Hw = function(e) {
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
        var n = Hw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? jw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), v = 0; v < f.length; ++v) {
            var S = f[v],
                k = zw(S, i[S], n, typeof t == "string");
            a = vr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : vr.compact(a)
    },
    Gw = Pw,
    qw = Uw,
    Ww = Xa,
    eu = {
        formats: Ww,
        parse: qw,
        stringify: Gw
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
        let S = v.body;
        return new eb({
            code: S.code,
            token: S.token,
            host: S.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Xl(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
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
    Hs;
dr && typeof dr.ownKeys == "function" ? Hs = dr.ownKeys : Object.getOwnPropertySymbols ? Hs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Hs = function(e) {
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
    if (typeof k == "function") Yl(k, this, n);
    else
        for (var I = k.length, D = au(k, I), i = 0; i < I; ++i) Yl(D[i], this, n);
    return !0
};

function iu(t, e, n, i) {
    var a, f, v;
    if (go(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), v = f[e]), v === void 0) v = f[e] = n, ++t._eventsCount;
    else if (typeof v == "function" ? v = f[e] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), a = nu(t), a > 0 && v.length > a && !v.warned) {
        v.warned = !0;
        var S = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        S.name = "MaxListenersExceededWarning", S.emitter = t, S.type = e, S.count = v.length, sb(S)
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
        a = ob.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return go(n), this.on(e, ru(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, ru(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, v, S;
    if (go(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, v = i.length - 1; v >= 0; v--)
            if (i[v] === n || i[v].listener === n) {
                S = i[v].listener, f = v;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : ab(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, S || n)
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

function su(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? lb(a) : au(a, a.length)
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
    return this._eventsCount > 0 ? Hs(this._events) : []
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
        function a(v) {
            t.removeListener(e, f), i(v)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        lu(t, e, f, {
            once: !0
        }), e !== "error" && ub(t, a, {
            once: !0
        })
    })
}

function ub(t, e, n) {
    typeof t.on == "function" && lu(t, "error", e, n)
}

function lu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
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
class kt extends mo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class du extends kt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class fu extends kt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class pu extends kt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class gu extends kt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class mu extends kt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class vu extends kt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class yu extends kt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class wu extends kt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class bu extends kt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Cu extends kt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class xu extends kt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Eu extends kt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class _u extends kt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Su extends kt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class ku extends kt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Tu extends kt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Au extends kt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Ou extends kt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Ru extends kt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Iu extends kt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Du extends kt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Lu extends kt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Mu extends kt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Pu extends kt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Bu extends kt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Nu extends kt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Vu extends kt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class $u extends kt {
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
    EcastClientError: kt,
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
    EcastPermissionDenied: Lu,
    EcastNotConnected: Mu,
    EcastIllegalOperation: Pu,
    EcastACLChangeDenied: Bu,
    EcastRoomHasEnded: Nu,
    EcastEntityLocked: Vu,
    EcastRateLimitExceeded: $u,
    ObservedError: hb
};
const fb = {
    1e3: ds,
    1001: cu,
    1002: uu,
    1003: hu,
    2e3: kt,
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
    2023: Lu,
    2024: Mu,
    2025: Pu,
    2026: Bu,
    2027: Nu,
    2028: Vu,
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
var ju = {
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
var Fu = {
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
class Lb {
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
class Mb {
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
    DoodleLine: Lb,
    DoodleLineRemoved: Mb
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
class Bb {
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
class Nb {
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
var Hu = {
    StackEntity: Pb,
    StackElement: Bb,
    StackElements: Nb
};
class Vb {
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
    DropEntity: Vb
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
var jb = {
    Echo: $b
};
class Fb {
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
    LockEntity: Fb
};
class Hb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Gu = {
    OK: Hb
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
    ArtifactEntity: Gb
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
} = Hu, {
    DropEntity: r0
} = Uu, {
    Echo: s0
} = jb, {
    LockEntity: o0
} = zb, {
    GCounter: a0
} = Qa, {
    GetAudienceReply: l0,
    RoomExit: c0,
    RoomLock: u0
} = po, {
    Notification: h0
} = ju, {
    OK: d0
} = Gu, {
    NumberEntity: f0
} = qu, {
    ObjectEcho: p0,
    ObjectEntity: g0
} = Za, {
    PNCounter: Jl
} = el, {
    Reply: m0
} = Fu, {
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
            return new Gb({
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
                let a = {};
                Object.entries(e.entities).forEach(([f, v]) => {
                    a[f] = Ia(v[0], v[1], v[2])
                }), i.entities = a
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
    } = ju,
    {
        ObjectEntity: ca
    } = Za,
    {
        PNCounter: O0
    } = el,
    {
        Reply: R0
    } = Fu,
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
        parseResponseMessage: L0
    } = x0,
    {
        DoodleEntity: M0
    } = il,
    {
        StackEntity: P0
    } = Hu,
    B0 = 1e3 + Math.floor(Math.random() * 500),
    tc = 13e3;
class N0 extends _0 {
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
        return new Promise((a, f) => {
            let v = !1,
                S = !1,
                k = D => {
                    a(D), v = !0
                },
                I = D => {
                    f(D), v = !0
                };
            this.conn = new Zl(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const $ = L0(D);
                if ($ instanceof R0) this.onReply($);
                else if ($ instanceof ec) {
                    if ($.result instanceof k0) S = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), k($.result);
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
            n = B0;
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
            const a = new ec(e);
            a.re = n, this.emit("notification", a);
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
            a = new I0({
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
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("object/set", a);
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
        return this.entities[e] = new ua({
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
            acl: a,
            colors: f,
            live: v,
            maxPoints: S,
            size: k,
            weights: I
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = v, S != null && (i.maxPoints = S), k && (i.size = k), I && (i.weights = I);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new M0({
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
        return this.entities[e] = new P0({
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
                limit: a,
                accept: f,
                reject: v
            } = n;
        a && (i.limit = a), f && (i.accept = f), v && (i.reject = v);
        const S = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new D0({
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
var V0 = {
    WSClient: N0
};
const {
    APIClient: $0
} = ib, {
    WSClient: j0
} = V0, {
    CreateRoomReply: F0,
    GetRoomReply: z0
} = po, {
    ClientWelcome: H0,
    ClientDisconnected: U0
} = Ka, {
    ArtifactEntity: G0
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
} = Gu, {
    RoomExit: eC
} = po, {
    TextRing: tC
} = nl, {
    PNCounter: nC
} = el;
var Ri = {
    APIClient: $0,
    WSClient: j0,
    ClientWelcome: H0,
    CreateRoomReply: F0,
    DropEntity: Q0,
    GetRoomReply: z0,
    ClientDisconnected: U0,
    RoomExit: eC,
    OK: Z0,
    ArtifactEntity: G0,
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
            a = function(B, W) {
                if (W = W.split(":")[0], B = +B, !B) return !1;
                switch (W) {
                    case "http":
                    case "ws":
                        return B !== 80;
                    case "https":
                    case "wss":
                        return B !== 443;
                    case "ftp":
                        return B !== 21;
                    case "gopher":
                        return B !== 70;
                    case "file":
                        return !1
                }
                return B !== 0
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
            for (var B = /([^=?#&]+)=?([^&]*)/g, W = {}, L; L = B.exec(j);) {
                var G = S(L[1]),
                    pe = S(L[2]);
                G === null || pe === null || G in W || (W[G] = pe)
            }
            return W
        }

        function D(j, B) {
            B = B || "";
            var W = [],
                L, G;
            typeof B != "string" && (B = "?");
            for (G in j)
                if (f.call(j, G)) {
                    if (L = j[G], !L && (L === null || L === v || isNaN(L)) && (L = ""), G = k(G), L = k(L), G === null || L === null) continue;
                    W.push(G + "=" + L)
                } return W.length ? B + W.join("&") : ""
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

        function q(j) {
            return (j || "").toString().replace(P, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(B, W) {
                    return d(W.protocol) ? B.replace(/\\/g, "/") : B
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

        function ye(j) {
            var B;
            typeof window < "u" ? B = window : typeof i < "u" ? B = i : typeof self < "u" ? B = self : B = {};
            var W = B.location || {};
            j = j || W;
            var L = {},
                G = typeof j,
                pe;
            if (j.protocol === "blob:") L = new Pe(unescape(j.pathname), {});
            else if (G === "string") {
                L = new Pe(j, {});
                for (pe in se) delete L[pe]
            } else if (G === "object") {
                for (pe in j) pe in se || (L[pe] = j[pe]);
                L.slashes === void 0 && (L.slashes = Y.test(j.href))
            }
            return L
        }

        function d(j) {
            return j === "file:" || j === "ftp:" || j === "http:" || j === "https:" || j === "ws:" || j === "wss:"
        }

        function _e(j, B) {
            j = q(j), B = B || {};
            var W = re.exec(j),
                L = W[1] ? W[1].toLowerCase() : "",
                G = !!W[2],
                pe = !!W[3],
                ge = 0,
                Be;
            return G ? pe ? (Be = W[2] + W[3] + W[4], ge = W[2].length + W[3].length) : (Be = W[2] + W[4], ge = W[2].length) : pe ? (Be = W[3] + W[4], ge = W[3].length) : Be = W[4], L === "file:" ? ge >= 2 && (Be = Be.slice(2)) : d(L) ? Be = W[4] : L ? G && (Be = Be.slice(2)) : ge >= 2 && d(B.protocol) && (Be = W[4]), {
                protocol: L,
                slashes: G || d(L),
                slashesCount: ge,
                rest: Be
            }
        }

        function Oe(j, B) {
            if (j === "") return B;
            for (var W = (B || "/").split("/").slice(0, -1).concat(j.split("/")), L = W.length, G = W[L - 1], pe = !1, ge = 0; L--;) W[L] === "." ? W.splice(L, 1) : W[L] === ".." ? (W.splice(L, 1), ge++) : ge && (L === 0 && (pe = !0), W.splice(L, 1), ge--);
            return pe && W.unshift(""), (G === "." || G === "..") && W.push(""), W.join("/")
        }

        function Pe(j, B, W) {
            if (j = q(j), !(this instanceof Pe)) return new Pe(j, B, W);
            var L, G, pe, ge, Be, Ne, pt = ae.slice(),
                jt = typeof B,
                Ye = this,
                In = 0;
            for (jt !== "object" && jt !== "string" && (W = B, B = null), W && typeof W != "function" && (W = ie.parse), B = ye(B), G = _e(j || "", B), L = !G.protocol && !G.slashes, Ye.slashes = G.slashes || L && B.slashes, Ye.protocol = G.protocol || B.protocol || "", j = G.rest, (Ye.protocol === "file:" || !G.slashes && (G.protocol || G.slashesCount < 2 || !d(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (ge = pt[In], typeof ge == "function") {
                    j = ge(j, Ye);
                    continue
                }
                pe = ge[0], Ne = ge[1], pe !== pe ? Ye[Ne] = j : typeof pe == "string" ? ~(Be = j.indexOf(pe)) && (typeof ge[2] == "number" ? (Ye[Ne] = j.slice(0, Be), j = j.slice(Be + ge[2])) : (Ye[Ne] = j.slice(Be), j = j.slice(0, Be))) : (Be = pe.exec(j)) && (Ye[Ne] = Be[1], j = j.slice(0, Be.index)), Ye[Ne] = Ye[Ne] || L && ge[3] && B[Ne] || "", ge[4] && (Ye[Ne] = Ye[Ne].toLowerCase())
            }
            W && (Ye.query = W(Ye.query)), L && B.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || B.pathname !== "") && (Ye.pathname = Oe(Ye.pathname, B.pathname)), Ye.pathname.charAt(0) !== "/" && d(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), a(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (ge = Ye.auth.split(":"), Ye.username = ge[0] || "", Ye.password = ge[1] || ""), Ye.origin = Ye.protocol !== "file:" && d(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(j, B, W) {
            var L = this;
            switch (j) {
                case "query":
                    typeof B == "string" && B.length && (B = (W || ie.parse)(B)), L[j] = B;
                    break;
                case "port":
                    L[j] = B, a(B, L.protocol) ? B && (L.host = L.hostname + ":" + B) : (L.host = L.hostname, L[j] = "");
                    break;
                case "hostname":
                    L[j] = B, L.port && (B += ":" + L.port), L.host = B;
                    break;
                case "host":
                    L[j] = B, /:\d+$/.test(B) ? (B = B.split(":"), L.port = B.pop(), L.hostname = B.join(":")) : (L.hostname = B, L.port = "");
                    break;
                case "protocol":
                    L.protocol = B.toLowerCase(), L.slashes = !W;
                    break;
                case "pathname":
                case "hash":
                    if (B) {
                        var G = j === "pathname" ? "/" : "#";
                        L[j] = B.charAt(0) !== G ? G + B : B
                    } else L[j] = B;
                    break;
                default:
                    L[j] = B
            }
            for (var pe = 0; pe < ae.length; pe++) {
                var ge = ae[pe];
                ge[4] && (L[ge[1]] = L[ge[1]].toLowerCase())
            }
            return L.origin = L.protocol !== "file:" && d(L.protocol) && L.host ? L.protocol + "//" + L.host : "null", L.href = L.toString(), L
        }

        function Ve(j) {
            (!j || typeof j != "function") && (j = ie.stringify);
            var B, W = this,
                L = W.protocol;
            L && L.charAt(L.length - 1) !== ":" && (L += ":");
            var G = L + (W.slashes || d(W.protocol) ? "//" : "");
            return W.username && (G += W.username, W.password && (G += ":" + W.password), G += "@"), G += W.host + W.pathname, B = typeof W.query == "object" ? j(W.query) : W.query, B && (G += B.charAt(0) !== "?" ? "?" + B : B), W.hash && (G += W.hash), G
        }
        Pe.prototype = {
            set: lt,
            toString: Ve
        }, Pe.extractProtocol = _e, Pe.location = ye, Pe.trimLeft = q, Pe.qs = ie;
        var K = Pe;

        function Fe(j, B) {
            setTimeout(function(W) {
                return j.call(W)
            }, 4, B)
        }

        function U(j, B) {
            typeof process < "u" && console[j].call(null, B)
        }

        function oe(j, B) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(L) {
                B(L) || W.push(L)
            }), W
        }

        function Ae(j, B) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(L) {
                B(L) && W.push(L)
            }), W
        }
        var be = function() {
            this.listeners = {}
        };
        be.prototype.addEventListener = function(B, W) {
            typeof W == "function" && (Array.isArray(this.listeners[B]) || (this.listeners[B] = []), Ae(this.listeners[B], function(L) {
                return L === W
            }).length === 0 && this.listeners[B].push(W))
        }, be.prototype.removeEventListener = function(B, W) {
            var L = this.listeners[B];
            this.listeners[B] = oe(L, function(G) {
                return G === W
            })
        }, be.prototype.dispatchEvent = function(B) {
            for (var W = this, L = [], G = arguments.length - 1; G-- > 0;) L[G] = arguments[G + 1];
            var pe = B.type,
                ge = this.listeners[pe];
            return Array.isArray(ge) ? (ge.forEach(function(Be) {
                L.length > 0 ? Be.apply(W, L) : Be.call(W, B)
            }), !0) : !1
        };

        function we(j) {
            var B = j.indexOf("?");
            return B >= 0 ? j.slice(0, B) : j
        }
        var he = function() {
            this.urlMap = {}
        };
        he.prototype.attachWebSocket = function(B, W) {
            var L = we(W),
                G = this.urlMap[L];
            if (G && G.server && G.websockets.indexOf(B) === -1) return G.websockets.push(B), G.server
        }, he.prototype.addMembershipToRoom = function(B, W) {
            var L = this.urlMap[we(B.url)];
            L && L.server && L.websockets.indexOf(B) !== -1 && (L.roomMemberships[W] || (L.roomMemberships[W] = []), L.roomMemberships[W].push(B))
        }, he.prototype.attachServer = function(B, W) {
            var L = we(W),
                G = this.urlMap[L];
            if (!G) return this.urlMap[L] = {
                server: B,
                websockets: [],
                roomMemberships: {}
            }, B
        }, he.prototype.serverLookup = function(B) {
            var W = we(B),
                L = this.urlMap[W];
            if (L) return L.server
        }, he.prototype.websocketsLookup = function(B, W, L) {
            var G = we(B),
                pe, ge = this.urlMap[G];
            if (pe = ge ? ge.websockets : [], W) {
                var Be = ge.roomMemberships[W];
                pe = Be || []
            }
            return L ? pe.filter(function(Ne) {
                return Ne !== L
            }) : pe
        }, he.prototype.removeServer = function(B) {
            delete this.urlMap[we(B)]
        }, he.prototype.removeWebSocket = function(B, W) {
            var L = we(W),
                G = this.urlMap[L];
            G && (G.websockets = oe(G.websockets, function(pe) {
                return pe === B
            }))
        }, he.prototype.removeMembershipFromRoom = function(B, W) {
            var L = this.urlMap[we(B.url)],
                G = L.roomMemberships[W];
            L && G !== null && (L.roomMemberships[W] = oe(G, function(pe) {
                return pe === B
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(B, W, L) {
            B === void 0 && (B = "undefined"), W === void 0 && (W = !1), L === void 0 && (L = !1), this.type = "" + B, this.bubbles = Boolean(W), this.cancelable = Boolean(L)
        };
        var dt = function(j) {
                function B(W, L) {
                    if (L === void 0 && (L = {}), j.call(this), !W) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var G = L.bubbles,
                        pe = L.cancelable;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1
                }
                return j && (B.__proto__ = j), B.prototype = Object.create(j && j.prototype), B.prototype.constructor = B, B
            }(Ke),
            Vt = function(j) {
                function B(W, L) {
                    if (L === void 0 && (L = {}), j.call(this), !W) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var G = L.bubbles,
                        pe = L.cancelable,
                        ge = L.data,
                        Be = L.origin,
                        Ne = L.lastEventId,
                        pt = L.ports;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.canncelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.origin = "" + Be, this.ports = typeof pt > "u" ? null : pt, this.data = typeof ge > "u" ? null : ge, this.lastEventId = "" + (Ne || "")
                }
                return j && (B.__proto__ = j), B.prototype = Object.create(j && j.prototype), B.prototype.constructor = B, B
            }(Ke),
            Gt = function(j) {
                function B(W, L) {
                    if (L === void 0 && (L = {}), j.call(this), !W) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var G = L.bubbles,
                        pe = L.cancelable,
                        ge = L.code,
                        Be = L.reason,
                        Ne = L.wasClean;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.code = typeof ge == "number" ? parseInt(ge, 10) : 0, this.reason = "" + (Be || ""), this.wasClean = Ne ? Boolean(Ne) : !1
                }
                return j && (B.__proto__ = j), B.prototype = Object.create(j && j.prototype), B.prototype.constructor = B, B
            }(Ke);

        function E(j) {
            var B = j.type,
                W = j.target,
                L = new dt(B);
            return W && (L.target = W, L.srcElement = W, L.currentTarget = W), L
        }

        function l(j) {
            var B = j.type,
                W = j.origin,
                L = j.data,
                G = j.target,
                pe = new Vt(B, {
                    data: L,
                    origin: W
                });
            return G && (pe.target = G, pe.srcElement = G, pe.currentTarget = G), pe
        }

        function g(j) {
            var B = j.code,
                W = j.reason,
                L = j.type,
                G = j.target,
                pe = j.wasClean;
            pe || (pe = B === Te.CLOSE_NORMAL || B === Te.CLOSE_NO_STATUS);
            var ge = new Gt(L, {
                code: B,
                reason: W,
                wasClean: pe
            });
            return G && (ge.target = G, ge.srcElement = G, ge.currentTarget = G), ge
        }

        function _(j, B, W) {
            j.readyState = Le.CLOSING;
            var L = Se.serverLookup(j.url),
                G = g({
                    type: "close",
                    target: j.target,
                    code: B,
                    reason: W
                }),
                pe = g({
                    type: "server::close",
                    target: j,
                    code: B,
                    reason: W
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = Le.CLOSED, j.dispatchEvent(G), j.dispatchEvent(pe), L && L.dispatchEvent(G, L)
            }, j)
        }

        function O(j, B, W) {
            j.readyState = Le.CLOSING;
            var L = Se.serverLookup(j.url),
                G = g({
                    type: "close",
                    target: j.target,
                    code: B,
                    reason: W,
                    wasClean: !1
                }),
                pe = g({
                    type: "server::close",
                    target: j,
                    code: B,
                    reason: W,
                    wasClean: !1
                }),
                ge = E({
                    type: "error",
                    target: j.target
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = Le.CLOSED, j.dispatchEvent(ge), j.dispatchEvent(G), j.dispatchEvent(pe), L && L.dispatchEvent(G, L)
            }, j)
        }

        function M(j) {
            return Object.prototype.toString.call(j) !== "[object Blob]" && !(j instanceof ArrayBuffer) && (j = String(j)), j
        }
        var N = new WeakMap;

        function te(j) {
            if (N.has(j)) return N.get(j);
            var B = new Proxy(j, {
                get: function(L, G) {
                    return G === "close" ? function(ge) {
                        ge === void 0 && (ge = {});
                        var Be = ge.code || Te.CLOSE_NORMAL,
                            Ne = ge.reason || "";
                        _(B, Be, Ne)
                    } : G === "send" ? function(ge) {
                        ge = M(ge), j.dispatchEvent(l({
                            type: "message",
                            data: ge,
                            origin: this.url,
                            target: j
                        }))
                    } : G === "on" ? function(ge, Be) {
                        j.addEventListener("server::" + ge, Be)
                    } : G === "target" ? j : L[G]
                }
            });
            return N.set(j, B), B
        }

        function ke(j) {
            var B = encodeURIComponent(j).match(/%[89ABab]/g);
            return j.length + (B ? B.length : 0)
        }

        function de(j) {
            var B = new K(j),
                W = B.pathname,
                L = B.protocol,
                G = B.hash;
            if (!j) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (W || (B.pathname = "/"), L === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + B.toString() + "' is invalid.");
            if (L !== "ws:" && L !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + L + "' is not allowed.");
            if (G !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + G + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return B.toString()
        }

        function De(j) {
            if (j === void 0 && (j = []), !Array.isArray(j) && typeof j != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + j.toString() + "' is invalid.");
            typeof j == "string" && (j = [j]);
            var B = j.map(function(L) {
                    return {
                        count: 1,
                        protocol: L
                    }
                }).reduce(function(L, G) {
                    return L[G.protocol] = (L[G.protocol] || 0) + G.count, L
                }, {}),
                W = Object.keys(B).filter(function(L) {
                    return B[L] > 1
                });
            if (W.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + W[0] + "' is duplicated.");
            return j
        }
        var Le = function(j) {
            function B(L, G) {
                j.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = de(L), G = De(G), this.protocol = G[0] || "", this.binaryType = "blob", this.readyState = B.CONNECTING;
                var pe = te(this),
                    ge = Se.attachWebSocket(pe, this.url);
                Fe(function() {
                    if (ge)
                        if (ge.options.verifyClient && typeof ge.options.verifyClient == "function" && !ge.options.verifyClient()) this.readyState = B.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (ge.options.selectProtocol && typeof ge.options.selectProtocol == "function") {
                                var Ne = ge.options.selectProtocol(G),
                                    pt = Ne !== "",
                                    jt = G.indexOf(Ne) !== -1;
                                if (pt && !jt) {
                                    this.readyState = B.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: Te.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Ne
                            }
                            this.readyState = B.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), ge.dispatchEvent(E({
                                type: "connection"
                            }), pe)
                        }
                    else this.readyState = B.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            j && (B.__proto__ = j), B.prototype = Object.create(j && j.prototype), B.prototype.constructor = B;
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
            }, B.prototype.send = function(G) {
                var pe = this;
                if (this.readyState === B.CLOSING || this.readyState === B.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var ge = l({
                        type: "server::message",
                        origin: this.url,
                        data: M(G)
                    }),
                    Be = Se.serverLookup(this.url);
                Be && Fe(function() {
                    pe.dispatchEvent(ge, G)
                }, Be)
            }, B.prototype.close = function(G, pe) {
                if (G !== void 0 && (typeof G != "number" || G !== 1e3 && (G < 3e3 || G > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + G + " is neither.");
                if (pe !== void 0) {
                    var ge = ke(pe);
                    if (ge > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === B.CLOSING || this.readyState === B.CLOSED)) {
                    var Be = te(this);
                    this.readyState === B.CONNECTING ? O(Be, G || Te.CLOSE_ABNORMAL, pe) : _(Be, G || Te.CLOSE_NO_STATUS, pe)
                }
            }, Object.defineProperties(B.prototype, W), B
        }(be);
        Le.CONNECTING = 0, Le.prototype.CONNECTING = Le.CONNECTING, Le.OPEN = 1, Le.prototype.OPEN = Le.OPEN, Le.CLOSING = 2, Le.prototype.CLOSING = Le.CLOSING, Le.CLOSED = 3, Le.prototype.CLOSED = Le.CLOSED;
        var nt = function(j) {
            return j.reduce(function(B, W) {
                return B.indexOf(W) > -1 ? B : B.concat(W)
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
            ct = function(j) {
                function B(W, L) {
                    L === void 0 && (L = rn), j.call(this);
                    var G = new K(W);
                    G.pathname || (G.pathname = "/"), this.url = G.toString(), this.originalWebSocket = null;
                    var pe = Se.attachServer(this, this.url);
                    if (!pe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, L), this.options.mock && this.mockWebsocket()
                }
                return j && (B.__proto__ = j), B.prototype = Object.create(j && j.prototype), B.prototype.constructor = B, B.prototype.mockWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket = L.WebSocket, L.WebSocket = Le
                }, B.prototype.restoreWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket !== null && (L.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, B.prototype.stop = function(L) {
                    L === void 0 && (L = function() {}), this.options.mock && this.restoreWebsocket(), Se.removeServer(this.url), typeof L == "function" && L()
                }, B.prototype.on = function(L, G) {
                    this.addEventListener(L, G)
                }, B.prototype.close = function(L) {
                    L === void 0 && (L = {});
                    var G = L.code,
                        pe = L.reason,
                        ge = L.wasClean,
                        Be = Se.websocketsLookup(this.url);
                    Se.removeServer(this.url), Be.forEach(function(Ne) {
                        Ne.readyState = Le.CLOSED, Ne.dispatchEvent(g({
                            type: "close",
                            target: Ne.target,
                            code: G || Te.CLOSE_NORMAL,
                            reason: pe || "",
                            wasClean: ge
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, B.prototype.emit = function(L, G, pe) {
                    var ge = this;
                    pe === void 0 && (pe = {});
                    var Be = pe.websockets;
                    Be || (Be = Se.websocketsLookup(this.url)), typeof pe != "object" || arguments.length > 3 ? (G = Array.prototype.slice.call(arguments, 1, arguments.length), G = G.map(function(Ne) {
                        return M(Ne)
                    })) : G = M(G), Be.forEach(function(Ne) {
                        Array.isArray(G) ? Ne.dispatchEvent.apply(Ne, [l({
                            type: L,
                            data: G,
                            origin: ge.url,
                            target: Ne.target
                        })].concat(G)) : Ne.dispatchEvent(l({
                            type: L,
                            data: G,
                            origin: ge.url,
                            target: Ne.target
                        }))
                    })
                }, B.prototype.clients = function() {
                    return Se.websocketsLookup(this.url)
                }, B.prototype.to = function(L, G, pe) {
                    var ge = this;
                    pe === void 0 && (pe = []);
                    var Be = this,
                        Ne = nt(pe.concat(Se.websocketsLookup(this.url, L, G)));
                    return {
                        to: function(pt, jt) {
                            return ge.to.call(ge, pt, jt, Ne)
                        },
                        emit: function(jt, Ye) {
                            Be.emit(jt, Ye, {
                                websockets: Ne
                            })
                        }
                    }
                }, B.prototype.in = function() {
                    for (var L = [], G = arguments.length; G--;) L[G] = arguments[G];
                    return this.to.apply(null, L)
                }, B.prototype.simulate = function(L) {
                    var G = Se.websocketsLookup(this.url);
                    L === "error" && G.forEach(function(pe) {
                        pe.readyState = Le.CLOSED, pe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, B
            }(be);
        ct.of = function(B) {
            return new ct(B)
        };
        var yt = function(j) {
            function B(L, G) {
                var pe = this;
                L === void 0 && (L = "socket.io"), G === void 0 && (G = ""), j.call(this), this.binaryType = "blob";
                var ge = new K(L);
                ge.pathname || (ge.pathname = "/"), this.url = ge.toString(), this.readyState = B.CONNECTING, this.protocol = "", this.target = this, typeof G == "string" || typeof G == "object" && G !== null ? this.protocol = G : Array.isArray(G) && G.length > 0 && (this.protocol = G[0]);
                var Be = Se.attachWebSocket(this, this.url);
                Fe(function() {
                    Be ? (this.readyState = B.OPEN, Be.dispatchEvent(E({
                        type: "connection"
                    }), Be, this), Be.dispatchEvent(E({
                        type: "connect"
                    }), Be, this), this.dispatchEvent(E({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = B.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ne) {
                    pe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ne.target,
                        code: Ne.code
                    }))
                })
            }
            j && (B.__proto__ = j), B.prototype = Object.create(j && j.prototype), B.prototype.constructor = B;
            var W = {
                broadcast: {}
            };
            return B.prototype.close = function() {
                if (this.readyState === B.OPEN) {
                    var G = Se.serverLookup(this.url);
                    return Se.removeWebSocket(this, this.url), this.readyState = B.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), G && G.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    }), G), this
                }
            }, B.prototype.disconnect = function() {
                return this.close()
            }, B.prototype.emit = function(G) {
                for (var pe = [], ge = arguments.length - 1; ge-- > 0;) pe[ge] = arguments[ge + 1];
                if (this.readyState !== B.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Be = l({
                        type: G,
                        origin: this.url,
                        data: pe
                    }),
                    Ne = Se.serverLookup(this.url);
                return Ne && Ne.dispatchEvent.apply(Ne, [Be].concat(pe)), this
            }, B.prototype.send = function(G) {
                return this.emit("message", G), this
            }, W.broadcast.get = function() {
                if (this.readyState !== B.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var L = this,
                    G = Se.serverLookup(this.url);
                if (!G) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(ge, Be) {
                        return G.emit(ge, Be, {
                            websockets: Se.websocketsLookup(L.url, null, L)
                        }), L
                    },
                    to: function(ge) {
                        return G.to(ge, L)
                    },
                    in: function(ge) {
                        return G.in(ge, L)
                    }
                }
            }, B.prototype.on = function(G, pe) {
                return this.addEventListener(G, pe), this
            }, B.prototype.off = function(G, pe) {
                this.removeEventListener(G, pe)
            }, B.prototype.hasListeners = function(G) {
                var pe = this.listeners[G];
                return Array.isArray(pe) ? !!pe.length : !1
            }, B.prototype.join = function(G) {
                Se.addMembershipToRoom(this, G)
            }, B.prototype.leave = function(G) {
                Se.removeMembershipFromRoom(this, G)
            }, B.prototype.to = function(G) {
                return this.broadcast.to(G)
            }, B.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, B.prototype.dispatchEvent = function(G) {
                for (var pe = this, ge = [], Be = arguments.length - 1; Be-- > 0;) ge[Be] = arguments[Be + 1];
                var Ne = G.type,
                    pt = this.listeners[Ne];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(jt) {
                    ge.length > 0 ? jt.apply(pe, ge) : jt.call(pe, G.data ? G.data : G)
                })
            }, Object.defineProperties(B.prototype, W), B
        }(be);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(B, W) {
            return new yt(B, W)
        };
        bt.connect = function(B, W) {
            return bt(B, W)
        };
        var Kt = ct,
            Je = Le,
            Mt = bt;
        n.Server = Kt, n.WebSocket = Je, n.SocketIO = Mt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(ic, ic.exports);
var rC = {
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
            ce(window).trigger("resize")
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp1-ydkj2015/",
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
                    var ye = this;
                    return this.unstickit(), se && (ye = se.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(m, P, q) {
                var ae = m || this.model,
                    se = ".stickit." + ae.cid;
                if (q = q || {}, e.isObject(P)) {
                    var ye = P;
                    e.each(ye, function(K, Fe) {
                        this.addBinding(ae, Fe, K)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(ae, P), !!d.length) {
                    e.isString(q) && (q = {
                        observe: q
                    }), e.isFunction(q.observe) && (q.observe = q.observe.call(this));
                    var _e = $(d, q),
                        Oe = _e.observe;
                    _e.selector = P, _e.view = this;
                    var Pe = _e.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: _e
                        }, _e.setOptions);
                    if (_e._destroy = function() {
                            v.call(this, _e.destroy, d, ae, _e)
                        }, J(d, _e, ae, Oe), Y(d, _e, ae, Oe), ie(d, _e, ae), Oe) {
                        e.each(_e.events, function(K) {
                            var Fe = K + se,
                                U = function(Ae) {
                                    var be = v.call(this, _e.getVal, d, Ae, _e, a.call(arguments, 1)),
                                        we = S(_e.updateModel, be, Ae, _e);
                                    we && I(ae, Oe, be, lt, _e)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(Fe, oe, e.bind(U, this))
                        }, this), e.each(e.flatten([Oe]), function(K) {
                            k(ae, "change:" + K, _e, function(Fe, U, oe) {
                                var Ae = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var be = D(ae, Oe, _e);
                                    re(d, _e, be, ae)
                                }
                            })
                        });
                        var Ve = D(ae, Oe, _e);
                        re(d, _e, Ve, ae, !0)
                    }
                    v.call(this, _e.initialize, d, ae, _e)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(m, P) {
                var q = (P || "").split("."),
                    ae = e.reduce(q, function(se, ye) {
                        return se[ye]
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
                var ye = {},
                    d = se.view;
                se.onSet && (q = v.call(d, se.onSet, q, se)), se.set ? v.call(d, se.set, P, q, ae, se) : (ye[P] = q, e.isArray(P) && e.isArray(q) && (ye = e.reduce(P, function(_e, Oe, Pe) {
                    return _e[Oe] = e.has(q, Pe) ? q[Pe] : null, _e
                }, {})), m.set(ye, ae))
            },
            D = function(m, P, q) {
                var ae = q.view,
                    se = function(_e) {
                        return m[q.escape ? "escape" : "get"](_e)
                    },
                    ye = function(_e) {
                        return _e == null ? "" : _e
                    },
                    d = e.isArray(P) ? e.map(P, se) : se(P);
                return q.onGet && (d = v.call(ae, q.onGet, d, q)), e.isArray(d) ? e.map(d, ye) : ye(d)
            },
            $ = i.getConfiguration = function(m, P) {
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
                var ae = e.extend.apply(e, q);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            J = function(m, P, q, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ye;
                    var _e = "",
                        Oe = d.observe || (d.observe = ae),
                        Pe = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Ve = D(q, Oe, d);
                            d.name === "class" ? (m.removeClass(_e).addClass(Ve), _e = Ve) : m[lt](d.name, Ve)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        k(q, "change:" + lt, P, Pe)
                    }), Pe()
                })
            },
            ie = function(m, P, q, ae) {
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
            Y = function(m, P, q, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ye = function() {
                            var d = P.visible,
                                _e = P.visibleFn,
                                Oe = D(q, ae, P),
                                Pe = !!Oe;
                            (e.isFunction(d) || e.isString(d)) && (Pe = !!v.call(se, d, Oe, P)), _e ? v.call(se, _e, m, Pe, P) : m.toggle(Pe)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        k(q, "change:" + d, P, ye)
                    }), ye()
                }
            },
            re = function(m, P, q, ae, se) {
                var ye = P.view;
                !S(P.updateView, q, P) || (v.call(ye, P.update, m, q, ae, P), se || v.call(ye, P.afterUpdate, m, q, P))
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
                if (m.length > 1) P = e.reduce(m, function(ae, se) {
                    var ye = n.$(se);
                    return ye.prop("checked") && ae.push(ye.val()), ae
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
                var se, ye = ae.selectOptions,
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
                            Vt = function(_, O, M) {
                                Ke.text(_), dt = O, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), M === !0 && Ke.prop("disabled", "disabled")
                            },
                            Gt, E, l;
                        $e === "__default__" ? (Gt = Te.label, E = Te.value, l = Te.disabled) : (Gt = f($e, ye.labelPath), E = f($e, ye.valuePath), l = f($e, ye.disabledPath)), Vt(Gt, E, l);
                        var g = function() {
                            return !_e && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        g() ? Ke.prop("selected", !0) : _e && e.isArray(Te) && e.each(Te, function(_) {
                            e.isObject(_) && (_ = f(_, ye.valuePath)), (_ === dt || e.isObject(_) && e.isEqual(dt, _)) && Ke.prop("selected", !0)
                        }), Se.append(Ke)
                    })
                };
                if (m.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = v.call(this, d, m, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Ve = se,
                        K = function() {
                            var he = D(q, ae.observe, ae);
                            v.call(this, ae.update, m, he, q, ae)
                        },
                        Fe = function() {
                            Ve.off("add remove reset sort", K)
                        },
                        U = function() {
                            Fe(), Ve.off("stickit:selectRefresh"), q.off("stickit:selectRefresh")
                        };
                    Ve.trigger("stickit:selectRefresh"), Ve.once("stickit:selectRefresh", Fe, this), Ve.on("add remove reset sort", K, this), q.trigger("stickit:selectRefresh"), q.once("stickit:selectRefresh", function() {
                        q.off("stickit:unstuck", U)
                    }), q.once("stickit:unstuck", U, this), se = se.toJSON()
                }
                if (ye.defaultOption) {
                    var oe = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, m, ae) : ye.defaultOption;
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
                        let a = "";
                        return t && (a += t), e && (a += " selected"), n && (a += " disabled"), i && (a += " active"), a
                    }
                }]
            },
            "button:first": {
                observe: ["text", "html", "label"],
                updateMethod: "html",
                onGet([t, e, n]) {
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || ce("<div />").text(t).html()
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
            const e = ce(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ti, Ns, rs = typeof Map == "function" ? new Map : (Ti = [], Ns = [], {
        has: function(t) {
            return Ti.indexOf(t) > -1
        },
        get: function(t) {
            return Ns[Ti.indexOf(t)]
        },
        set: function(t, e) {
            Ti.indexOf(t) === -1 && (Ti.push(t), Ns.push(e))
        },
        delete: function(t) {
            var e = Ti.indexOf(t);
            e > -1 && (Ti.splice(e, 1), Ns.splice(e, 1))
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
                var a, f = null,
                    v = null,
                    S = null,
                    k = function() {
                        i.clientWidth !== v && J()
                    },
                    I = function(ie) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", I, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(ie).forEach(function(Y) {
                            i.style[Y] = ie[Y]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", I, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", J, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", J, !1), i.addEventListener("autosize:update", J, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
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
                <button type="submit" class="btn btn-default inlineSubmitButton" type="button"><span class="inlineSubmitText">Enviar</span></button>\r
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
                    return t !== void 0 ? t : "Enviar"
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
                    return t ? typeof t == "object" ? t.html ? t.html : ce("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || rc(ce("textarea"))
        },
        onSubmitClick() {
            return ce("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (ce("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            ce(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = ce(this.$el).find("textarea");
            ce(t).val(""), this.getOption("preventAutosize") || rc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = ce(this.$el).find("textarea");
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
    Vi = Et.View.extend({
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
                    return e !== void 0 ? e : ce("<div />").text(t).html()
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
            return t.get("type") === "input" ? to : t.get("type") === "text" ? Vi : Wu
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

function Li() {
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
        height: a = this.height,
        context: f = vo()
    } = {}) {
        let v = this.frames[this._f] / this.spriteSheet._f | 0,
            S = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, S * this.width + (S * 2 + 1) * this.margin, v * this.height + (v * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function yo(t) {
    return new rl(t)
}
yo.prototype = rl.prototype;
yo.class = rl;
const fC = () => {};

function pC() {
    let t = Li();
    vo().clearRect(0, 0, t.width, t.height)
}

function gC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        v = 1 / t,
        S = e ? pC : fC,
        k, I, D, $, J;
    const ie = window.performance || Date;

    function Y() {
        if (I = requestAnimationFrame(Y), D = ie.now(), $ = D - k, k = D, !($ > 1e3)) {
            for (Yu("tick"), a += $; a >= f;) J.update(v), a -= f;
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
        for (let a = this.size; a--;) n = this.objects[a], n.update(e), n.isAlive() || (i = !0, this.size--);
        i && this.objects.sort((a, f) => f.isAlive() - a.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
mC.prototype;

function oc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        v = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), v && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), v && n.push(3)), n
}
class sl {
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
            for (i = oc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
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
            dx: a,
            dy: f,
            ddx: v,
            ddy: S,
            width: k,
            height: I,
            image: D
        } = e;
        this.position = fr(n, i), this.velocity = fr(a, f), this.acceleration = fr(v, S), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = vo();
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
        a = +n[1],
        f = i;
    if (i < a)
        for (; f <= a; f++) e.push(f);
    else
        for (; f >= a; f--) e.push(f);
    return e
}
class yC {
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
                n = n.concat(vC(S))
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
                cancelButtonText: "Cancelar",
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
            ye = c => P[c],
            d = c => {
                ae(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            _e = c => {
                q.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ye(c) && I(c, ye(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && _e(h), Oe(h)
            },
            lt = "swal2-",
            Ve = c => {
                const h = {};
                for (const b in c) h[c[b]] = lt + c[b];
                return h
            },
            K = Ve(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            Fe = Ve(["success", "warning", "info", "question", "error"]),
            U = () => document.body.querySelector(".".concat(K.container)),
            oe = c => {
                const h = U();
                return h ? h.querySelector(c) : null
            },
            Ae = c => oe(".".concat(c)),
            be = () => Ae(K.popup),
            we = () => Ae(K.icon),
            he = () => Ae(K.title),
            Se = () => Ae(K["html-container"]),
            Te = () => Ae(K.image),
            $e = () => Ae(K["progress-steps"]),
            Ke = () => Ae(K["validation-message"]),
            dt = () => oe(".".concat(K.actions, " .").concat(K.confirm)),
            Vt = () => oe(".".concat(K.actions, " .").concat(K.deny)),
            Gt = () => Ae(K["input-label"]),
            E = () => oe(".".concat(K.loader)),
            l = () => oe(".".concat(K.actions, " .").concat(K.cancel)),
            g = () => Ae(K.actions),
            _ = () => Ae(K.footer),
            O = () => Ae(K["timer-progress-bar"]),
            M = () => Ae(K.close),
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
                const c = Array.from(be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, V) => {
                        const me = parseInt(b.getAttribute("tabindex")),
                            He = parseInt(V.getAttribute("tabindex"));
                        return me > He ? 1 : me < He ? -1 : 0
                    }),
                    h = Array.from(be().querySelectorAll(N)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => ge(b))
            },
            ke = () => Ct(document.body, K.shown) && !Ct(document.body, K["toast-shown"]) && !Ct(document.body, K["no-backdrop"]),
            de = () => be() && Ct(be(), K.toast),
            De = () => be().hasAttribute("data-loading"),
            Le = {
                previousBodyPadding: null
            },
            nt = (c, h) => {
                if (c.textContent = "", h) {
                    const V = new DOMParser().parseFromString(h, "text/html");
                    Array.from(V.querySelector("head").childNodes).forEach(me => {
                        c.appendChild(me)
                    }), Array.from(V.querySelector("body").childNodes).forEach(me => {
                        c.appendChild(me)
                    })
                }
            },
            Ct = (c, h) => {
                if (!h) return !1;
                const b = h.split(/\s+/);
                for (let V = 0; V < b.length; V++)
                    if (!c.classList.contains(b[V])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(K).includes(b) && !Object.values(Fe).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
                })
            },
            ct = (c, h, b) => {
                if (rn(c, h), h.customClass && h.customClass[b]) {
                    if (typeof h.customClass[b] != "string" && !h.customClass[b].forEach) return f("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof h.customClass[b], '"'));
                    Je(c, h.customClass[b])
                }
            },
            yt = (c, h) => {
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
            bt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Kt = (c, h, b) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach(V => {
                    Array.isArray(c) ? c.forEach(me => {
                        b ? me.classList.add(V) : me.classList.remove(V)
                    }) : b ? c.classList.add(V) : c.classList.remove(V)
                }))
            },
            Je = (c, h) => {
                Kt(c, h, !0)
            },
            Mt = (c, h) => {
                Kt(c, h, !1)
            },
            j = (c, h) => {
                const b = Array.from(c.children);
                for (let V = 0; V < b.length; V++) {
                    const me = b[V];
                    if (me instanceof HTMLElement && Ct(me, h)) return me
                }
            },
            B = (c, h, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? c.style[h] = typeof b == "number" ? "".concat(b, "px") : b : c.style.removeProperty(h)
            },
            W = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            L = c => {
                c.style.display = "none"
            },
            G = (c, h, b, V) => {
                const me = c.querySelector(h);
                me && (me.style[b] = V)
            },
            pe = function(c, h) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? W(c, b) : L(c)
            },
            ge = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Be = () => !ge(dt()) && !ge(Vt()) && !ge(l()),
            Ne = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    b = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    V = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return b > 0 || V > 0
            },
            jt = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const b = O();
                ge(b) && (h && (b.style.transition = "none", b.style.width = "100%"), setTimeout(() => {
                    b.style.transition = "width ".concat(c / 1e3, "s linear"), b.style.width = "0%"
                }, 10))
            },
            Ye = () => {
                const c = O(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const b = parseInt(window.getComputedStyle(c).width),
                    V = h / b * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(V, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            it = {},
            Dn = () => {
                it.previousActiveElement instanceof HTMLElement ? (it.previousActiveElement.focus(), it.previousActiveElement = null) : document.body && document.body.focus()
            },
            gi = c => new Promise(h => {
                if (!c) return h();
                const b = window.scrollX,
                    V = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(b, V)
            }),
            Sr = `
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
            kn = () => {
                const c = U();
                return c ? (c.remove(), Mt([document.documentElement, document.body], [K["no-backdrop"], K["toast-shown"], K["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            kr = () => {
                const c = be(),
                    h = j(c, K.input),
                    b = j(c, K.file),
                    V = c.querySelector(".".concat(K.range, " input")),
                    me = c.querySelector(".".concat(K.range, " output")),
                    He = j(c, K.select),
                    Ut = c.querySelector(".".concat(K.checkbox, " input")),
                    Nn = j(c, K.textarea);
                h.oninput = sn, b.onchange = sn, He.onchange = sn, Ut.onchange = sn, Nn.oninput = sn, V.oninput = () => {
                    sn(), me.value = V.value
                }, V.onchange = () => {
                    sn(), me.value = V.value
                }
            },
            Tr = c => typeof c == "string" ? document.querySelector(c) : c,
            mi = c => {
                const h = be();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            $i = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(U(), K.rtl)
            },
            vi = c => {
                const h = kn();
                if (In()) {
                    v("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = K.container, h && Je(b, K["no-transition"]), nt(b, Sr);
                const V = Tr(c.target);
                V.appendChild(b), mi(c), $i(V), kr()
            },
            yi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? ji(c, h) : c && nt(h, c)
            },
            ji = (c, h) => {
                c.jquery ? Fi(h, c) : nt(h, c.toString())
            },
            Fi = (c, h) => {
                if (c.textContent = "", 0 in h)
                    for (let b = 0; b in h; b++) c.appendChild(h[b].cloneNode(!0));
                else c.appendChild(h.cloneNode(!0))
            },
            mn = (() => {
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
            wi = (c, h) => {
                const b = g(),
                    V = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? L(b) : W(b), ct(b, h, "actions"), Hn(b, V, h), nt(V, h.loaderHtml), ct(V, h, "loader")
            };

        function Hn(c, h, b) {
            const V = dt(),
                me = Vt(),
                He = l();
            bi(V, "confirm", b), bi(me, "deny", b), bi(He, "cancel", b), Hi(V, me, He, b), b.reverseButtons && (b.toast ? (c.insertBefore(He, V), c.insertBefore(me, V)) : (c.insertBefore(He, h), c.insertBefore(me, h), c.insertBefore(V, h)))
        }

        function Hi(c, h, b, V) {
            if (!V.buttonsStyling) return Mt([c, h, b], K.styled);
            Je([c, h, b], K.styled), V.confirmButtonColor && (c.style.backgroundColor = V.confirmButtonColor, Je(c, K["default-outline"])), V.denyButtonColor && (h.style.backgroundColor = V.denyButtonColor, Je(h, K["default-outline"])), V.cancelButtonColor && (b.style.backgroundColor = V.cancelButtonColor, Je(b, K["default-outline"]))
        }

        function bi(c, h, b) {
            pe(c, b["show".concat(a(h), "Button")], "inline-block"), nt(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = K[h], ct(c, b, "".concat(h, "Button")), Je(c, b["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const b = U();
            !b || (y(b, h.backdrop), o(b, h.position), C(b, h.grow), ct(b, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], K["no-backdrop"])
        }

        function o(c, h) {
            h in K ? Je(c, K[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Je(c, K.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const b = "grow-".concat(h);
                b in K && Je(c, K[b])
            }
        }
        var A = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Q = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            xe = (c, h) => {
                const b = be(),
                    V = A.innerParams.get(c),
                    me = !V || h.input !== V.input;
                Q.forEach(He => {
                    const Ut = j(b, K[He]);
                    Wt(He, h.inputAttributes), Ut.className = K[He], me && L(Ut)
                }), h.input && (me && qe(h), Un(h))
            },
            qe = c => {
                if (!Ft[c.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Ar(c.input),
                    b = Ft[c.input](h, c);
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
            Wt = (c, h) => {
                const b = yt(be(), c);
                if (!!b) {
                    It(b);
                    for (const V in h) b.setAttribute(V, h[V])
                }
            },
            Un = c => {
                const h = Ar(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Bn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Gn = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = K.input;
                    const V = document.createElement("label"),
                        me = K["input-label"];
                    V.setAttribute("for", c.id), V.className = me, typeof b.customClass == "object" && Je(V, b.customClass.inputLabel), V.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", V)
                }
            },
            Ar = c => j(be(), K[c] || K.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            Ft = {};
        Ft.text = Ft.email = Ft.password = Ft.number = Ft.tel = Ft.url = (c, h) => (Xt(c, h.inputValue), Gn(c, c, h), Bn(c, h), c.type = h.input, c), Ft.file = (c, h) => (Gn(c, c, h), Bn(c, h), c), Ft.range = (c, h) => {
            const b = c.querySelector("input"),
                V = c.querySelector("output");
            return Xt(b, h.inputValue), b.type = h.input, Xt(V, h.inputValue), Gn(b, c, h), c
        }, Ft.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                nt(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Gn(c, c, h), c
        }, Ft.radio = c => (c.textContent = "", c), Ft.checkbox = (c, h) => {
            const b = yt(be(), "checkbox");
            b.value = "1", b.id = K.checkbox, b.checked = Boolean(h.inputValue);
            const V = c.querySelector("span");
            return nt(V, h.inputPlaceholder), b
        }, Ft.textarea = (c, h) => {
            Xt(c, h.inputValue), Bn(c, h), Gn(c, c, h);
            const b = V => parseInt(window.getComputedStyle(V).marginLeft) + parseInt(window.getComputedStyle(V).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const V = parseInt(window.getComputedStyle(be()).width),
                        me = () => {
                            const He = c.offsetWidth + b(c);
                            He > V ? be().style.width = "".concat(He, "px") : be().style.width = null
                        };
                    new MutationObserver(me).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Ui = (c, h) => {
                const b = Se();
                ct(b, h, "htmlContainer"), h.html ? (yi(h.html, b), W(b, "block")) : h.text ? (b.textContent = h.text, W(b, "block")) : L(b), xe(c, h)
            },
            bo = (c, h) => {
                const b = _();
                pe(b, h.footer), h.footer && yi(h.footer, b), ct(b, h, "footer")
            },
            Co = (c, h) => {
                const b = M();
                nt(b, h.closeButtonHtml), ct(b, h, "closeButton"), pe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const b = A.innerParams.get(c),
                    V = we();
                if (b && h.icon === b.icon) {
                    ms(V, h), Rr(V, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    L(V);
                    return
                }
                if (h.icon && Object.keys(Fe).indexOf(h.icon) === -1) {
                    v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), L(V);
                    return
                }
                W(V), ms(V, h), Rr(V, h), Je(V, h.showClass.icon)
            },
            Rr = (c, h) => {
                for (const b in Fe) h.icon !== b && Mt(c, Fe[b]);
                Je(c, Fe[h.icon]), bn(c, h), Gi(), ct(c, h, "icon")
            },
            Gi = () => {
                const c = be(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let V = 0; V < b.length; V++) b[V].style.backgroundColor = h
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
                let b = c.innerHTML,
                    V;
                h.iconHtml ? V = Ir(h.iconHtml) : h.icon === "success" ? (V = gs, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? V = xo : V = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== V.trim() && nt(c, V)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) G(c, b, "backgroundColor", h.iconColor);
                    G(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Ir = c => '<div class="'.concat(K["icon-content"], '">').concat(c, "</div>"),
            Ci = (c, h) => {
                const b = Te();
                if (!h.imageUrl) return L(b);
                W(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), B(b, "width", h.imageWidth), B(b, "height", h.imageHeight), b.className = K.image, ct(b, h, "image")
            },
            Eo = (c, h) => {
                const b = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return L(b);
                W(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((V, me) => {
                    const He = _o(V);
                    if (b.appendChild(He), me === h.currentProgressStep && Je(He, K["active-progress-step"]), me !== h.progressSteps.length - 1) {
                        const Ut = qn(h);
                        b.appendChild(Ut)
                    }
                })
            },
            _o = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step"]), nt(h, c), h
            },
            qn = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step-line"]), c.progressStepsDistance && B(h, "width", c.progressStepsDistance), h
            },
            Wn = (c, h) => {
                const b = he();
                pe(b, h.title || h.titleText, "block"), h.title && yi(h.title, b), h.titleText && (b.innerText = h.titleText), ct(b, h, "title")
            },
            Dr = (c, h) => {
                const b = U(),
                    V = be();
                h.toast ? (B(b, "width", h.width), V.style.width = "100%", V.insertBefore(E(), we())) : B(V, "width", h.width), B(V, "padding", h.padding), h.color && (V.style.color = h.color), h.background && (V.style.background = h.background), L(Ke()), So(V, h)
            },
            So = (c, h) => {
                c.className = "".concat(K.popup, " ").concat(ge(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], K["toast-shown"]), Je(c, K.toast)) : Je(c, K.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, K["icon-".concat(h.icon)])
            },
            Lr = (c, h) => {
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
            Mr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            qi = ["swal-title", "swal-html", "swal-footer"],
            ko = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return Io(b), Object.assign(vs(b), To(b), Ao(b), Pr(b), Oo(b), Ro(b, qi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(V => {
                    Yn(V, ["name", "value"]);
                    const me = V.getAttribute("name"),
                        He = V.getAttribute("value");
                    typeof re[me] == "boolean" && He === "false" && (h[me] = !1), typeof re[me] == "object" && (h[me] = JSON.parse(He))
                }), h
            },
            To = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(V => {
                    Yn(V, ["type", "color", "aria-label"]);
                    const me = V.getAttribute("type");
                    h["".concat(me, "ButtonText")] = V.innerHTML, h["show".concat(a(me), "Button")] = !0, V.hasAttribute("color") && (h["".concat(me, "ButtonColor")] = V.getAttribute("color")), V.hasAttribute("aria-label") && (h["".concat(me, "ButtonAriaLabel")] = V.getAttribute("aria-label"))
                }), h
            },
            Ao = c => {
                const h = {},
                    b = c.querySelector("swal-image");
                return b && (Yn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (h.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (h.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (h.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (h.imageAlt = b.getAttribute("alt"))), h
            },
            Pr = c => {
                const h = {},
                    b = c.querySelector("swal-icon");
                return b && (Yn(b, ["type", "color"]), b.hasAttribute("type") && (h.icon = b.getAttribute("type")), b.hasAttribute("color") && (h.iconColor = b.getAttribute("color")), h.iconHtml = b.innerHTML), h
            },
            Oo = c => {
                const h = {},
                    b = c.querySelector("swal-input");
                b && (Yn(b, ["type", "label", "placeholder", "value"]), h.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (h.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (h.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (h.inputValue = b.getAttribute("value")));
                const V = Array.from(c.querySelectorAll("swal-input-option"));
                return V.length && (h.inputOptions = {}, V.forEach(me => {
                    Yn(me, ["value"]);
                    const He = me.getAttribute("value"),
                        Ut = me.innerHTML;
                    h.inputOptions[He] = Ut
                })), h
            },
            Ro = (c, h) => {
                const b = {};
                for (const V in h) {
                    const me = h[V],
                        He = c.querySelector(me);
                    He && (Yn(He, []), b[me.replace(/^swal-/, "")] = He.innerHTML.trim())
                }
                return b
            },
            Io = c => {
                const h = qi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const V = b.tagName.toLowerCase();
                    h.indexOf(V) === -1 && f("Unrecognized element <".concat(V, ">"))
                })
            },
            Yn = (c, h) => {
                Array.from(c.attributes).forEach(b => {
                    h.indexOf(b.name) === -1 && f(['Unrecognized attribute "'.concat(b.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
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
`).join("<br />")), vi(c)
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
        const bs = () => {
                Le.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Le.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Le.previousBodyPadding + zi(), "px"))
            },
            Nr = () => {
                Le.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Le.previousBodyPadding, "px"), Le.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, K.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, K.iosfix), Vr(), xs()
                }
            },
            xs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                h && b && !c.match(/CriOS/i) && be().scrollHeight > window.innerHeight - 44 && (U().style.paddingBottom = "".concat(44, "px"))
            },
            Vr = () => {
                const c = U();
                let h;
                c.ontouchstart = b => {
                    h = Mo(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            Mo = c => {
                const h = c.target,
                    b = U();
                return Po(c) || Bo(c) ? !1 : h === b || !Ne(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ne(Se()) && Se().contains(h))
            },
            Po = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            Bo = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (Ct(document.body, K.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Mt(document.body, K.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            $r = 10,
            jr = c => {
                const h = U(),
                    b = be();
                typeof c.willOpen == "function" && c.willOpen(b);
                const me = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    No(h, b)
                }, $r), ke() && (Vo(h, c.scrollbarPadding, me), xi()), !de() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Mt(h, K["no-transition"])
            },
            Es = c => {
                const h = be();
                if (c.target !== h) return;
                const b = U();
                h.removeEventListener(mn, Es), b.style.overflowY = "auto"
            },
            No = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, Es)) : c.style.overflowY = "auto"
            },
            Vo = (c, h, b) => {
                Cs(), h && b !== "hidden" && bs(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, b) => {
                Je(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), W(h, "grid"), setTimeout(() => {
                    Je(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, $r), Je([document.documentElement, document.body], K.shown), b.heightAuto && b.backdrop && !b.toast && Je([document.documentElement, document.body], K["height-auto"])
            },
            s = c => {
                let h = be();
                h || new At, h = be();
                const b = E();
                de() ? L(we()) : u(h, c), W(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = g(),
                    V = E();
                !h && ge(dt()) && (h = dt()), W(b), h && (L(h), V.setAttribute("data-button-to-replace", h.className)), V.parentNode.insertBefore(V, h), Je([c, b], K.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? H(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && ($(h.inputValue) || ie(h.inputValue)) && (s(dt()), Z(c, h))
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
            H = (c, h) => {
                const b = be(),
                    V = me => le[h.input](b, Ce(me), h);
                $(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), J(h.inputOptions).then(me => {
                    c.hideLoading(), V(me)
                })) : typeof h.inputOptions == "object" ? V(h.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const b = c.getInput();
                L(b), J(h.inputValue).then(V => {
                    b.value = h.input === "number" ? parseFloat(V) || 0 : "".concat(V), W(b), b.focus(), c.hideLoading()
                }).catch(V => {
                    v("Error in inputValue promise: ".concat(V)), b.value = "", W(b), b.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, b) => {
                    const V = j(c, K.select),
                        me = (He, Ut, Nn) => {
                            const pn = document.createElement("option");
                            pn.value = Nn, nt(pn, Ut), pn.selected = ne(Nn, b.inputValue), He.appendChild(pn)
                        };
                    h.forEach(He => {
                        const Ut = He[0],
                            Nn = He[1];
                        if (Array.isArray(Nn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ut, pn.disabled = !1, V.appendChild(pn), Nn.forEach(nr => me(pn, nr[1], nr[0]))
                        } else me(V, Nn, Ut)
                    }), V.focus()
                },
                radio: (c, h, b) => {
                    const V = j(c, K.radio);
                    h.forEach(He => {
                        const Ut = He[0],
                            Nn = He[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = K.radio, pn.value = Ut, ne(Ut, b.inputValue) && (pn.checked = !0);
                        const Ko = document.createElement("span");
                        nt(Ko, Nn), Ko.className = K.label, nr.appendChild(pn), nr.appendChild(Ko), V.appendChild(nr)
                    });
                    const me = V.querySelectorAll("input");
                    me.length && me[0].focus()
                }
            },
            Ce = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((b, V) => {
                    let me = b;
                    typeof me == "object" && (me = Ce(me)), h.push([V, me])
                }) : Object.keys(c).forEach(b => {
                    let V = c[b];
                    typeof V == "object" && (V = Ce(V)), h.push([b, V])
                }), h
            },
            ne = (c, h) => h && h.toString() === c.toString();

        function ue() {
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            L(h.loader), de() ? c.icon && W(we()) : Ge(h), Mt([h.popup, h.actions], K.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ge = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? W(h[0], "inline-block") : Be() && L(c.actions)
        };

        function rt(c) {
            const h = A.innerParams.get(c || this),
                b = A.domCache.get(c || this);
            return b ? yt(b.popup, h.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => ge(be()),
            Bt = () => dt() && dt().click(),
            un = () => Vt() && Vt().click(),
            _t = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, b, V) => {
                et(h), b.toast || (h.keydownHandler = me => Wi(c, me, V), h.keydownTarget = b.keydownListenerCapture ? window : be(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, b) => {
                const V = te();
                if (V.length) return h = h + b, h === V.length ? h = 0 : h === -1 && (h = V.length - 1), V[h].focus();
                be().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            _i = ["ArrowLeft", "ArrowUp"],
            Wi = (c, h, b) => {
                const V = A.innerParams.get(c);
                !V || h.isComposing || h.keyCode === 229 || (V.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, V) : h.key === "Tab" ? Kn(h, V) : [...Dt, ..._i].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, V, b))
            },
            hn = (c, h, b) => {
                if (!!D(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Bt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const b = c.target,
                    V = te();
                let me = -1;
                for (let He = 0; He < V.length; He++)
                    if (b === V[He]) {
                        me = He;
                        break
                    } c.shiftKey ? ft(h, me, -1) : ft(h, me, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    b = Vt(),
                    V = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, V].includes(document.activeElement)) return;
                const me = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let He = document.activeElement;
                for (let Ut = 0; Ut < g().children.length; Ut++) {
                    if (He = He[me], !He) return;
                    if (He instanceof HTMLButtonElement && ge(He)) break
                }
                He instanceof HTMLButtonElement && He.focus()
            },
            an = (c, h, b) => {
                D(h.allowEscapeKey) && (c.preventDefault(), b(Xn.esc))
            };

        function Ln(c, h, b, V) {
            de() ? ks(c, V) : (gi(b).then(() => ks(c, V)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), ke() && (Nr(), Ei(), Mr()), vn()
        }

        function vn() {
            Mt([document.documentElement, document.body], [K.shown, K["height-auto"], K["no-backdrop"], K["toast-shown"]])
        }

        function Cn(c) {
            c = Zn(c);
            const h = je.swalPromiseResolve.get(this),
                b = Qn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : b && h(c)
        }

        function _s() {
            return !!A.awaitingPromise.get(this)
        }
        const Qn = c => {
            const h = be();
            if (!h) return !1;
            const b = A.innerParams.get(c);
            if (!b || Ct(h, b.hideClass.popup)) return !1;
            Mt(h, b.showClass.popup), Je(h, b.hideClass.popup);
            const V = U();
            return Mt(V, b.showClass.backdrop), Je(V, b.hideClass.backdrop), Ss(c, h, b), !0
        };

        function Fr(c) {
            const h = je.swalPromiseReject.get(this);
            gt(this), h && h(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (A.awaitingPromise.delete(c), A.innerParams.get(c) || c._destroy())
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
            Ss = (c, h, b) => {
                const V = U(),
                    me = mn && pt(h);
                typeof b.willClose == "function" && b.willClose(h), me ? zr(c, h, V, b.returnFocus, b.didClose) : Ln(c, V, b.returnFocus, b.didClose)
            },
            zr = (c, h, b, V, me) => {
                it.swalCloseEventFinishedCallback = Ln.bind(null, c, b, V, me), h.addEventListener(mn, function(He) {
                    He.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            ks = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Si(c, h, b) {
            const V = A.domCache.get(c);
            h.forEach(me => {
                V[me].disabled = b
            })
        }

        function Ts(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const V = c.parentNode.parentNode.querySelectorAll("input");
                for (let me = 0; me < V.length; me++) V[me].disabled = h
            } else c.disabled = h
        }

        function As() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function $o() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function jo() {
            return Ts(this.getInput(), !1)
        }

        function Fo() {
            return Ts(this.getInput(), !0)
        }

        function Xi(c) {
            const h = A.domCache.get(this),
                b = A.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = K["validation-message"], b.customClass && b.customClass.validationMessage && Je(h.validationMessage, b.customClass.validationMessage), W(h.validationMessage);
            const V = this.getInput();
            V && (V.setAttribute("aria-invalid", !0), V.setAttribute("aria-describedby", K["validation-message"]), bt(V), Je(V, K.inputerror))
        }

        function zo() {
            const c = A.domCache.get(this);
            c.validationMessage && L(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Mt(h, K.inputerror))
        }

        function Ho() {
            return A.domCache.get(this).progressSteps
        }

        function Uo(c) {
            const h = be(),
                b = A.innerParams.get(this);
            if (!h || Ct(h, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const V = ki(c),
                me = Object.assign({}, b, V);
            Lr(this, me), A.innerParams.set(this, me), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const ki = c => {
            const h = {};
            return Object.keys(c).forEach(b => {
                se(b) ? h[b] = c[b] : f("Invalid parameter to update: ".concat(b))
            }), h
        };

        function Go() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && it.swalCloseEventFinishedCallback && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Hr(this)
        }
        const Hr = c => {
                Tn(c), delete c.params, delete it.keydownHandler, delete it.keydownTarget, delete it.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(A, c), A.awaitingPromise.set(c, !0)) : (xn(je, c), xn(A, c))
            },
            xn = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var Ur = Object.freeze({
            hideLoading: ue,
            disableLoading: ue,
            getInput: rt,
            close: Cn,
            isAwaitingPromise: _s,
            rejectPromise: Fr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: As,
            disableButtons: $o,
            enableInput: jo,
            disableInput: Fo,
            showValidationMessage: Xi,
            resetValidationMessage: zo,
            getProgressSteps: Ho,
            update: Uo,
            _destroy: Go
        });
        const Os = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Ji(c, !0)
            },
            Rs = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            qo = (c, h) => {
                c.disableButtons(), h(Xn.cancel)
            },
            St = (c, h) => {
                const b = A.innerParams.get(c);
                if (!b.input) {
                    v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const V = w(c, b);
                b.inputValidator ? Yi(c, V, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, V) : Ji(c, V) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Yi = (c, h, b) => {
                const V = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(V.inputValidator(h, V.validationMessage))).then(He => {
                    c.enableButtons(), c.enableInput(), He ? c.showValidationMessage(He) : b === "deny" ? dn(c, h) : Ji(c, h)
                })
            },
            dn = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s(Vt()), b.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preDeny(h, b.validationMessage))).then(me => {
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
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(b.preConfirm(h, b.validationMessage))).then(me => {
                    ge(Ke()) || me === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof me > "u" ? h : me)
                }).catch(me => Ki(c || void 0, me))) : yn(c, h)
            },
            Wo = (c, h, b) => {
                A.innerParams.get(c).toast ? Xo(c, h, b) : (Gr(h), Ds(h), Qi(c, h, b))
            },
            Xo = (c, h, b) => {
                h.popup.onclick = () => {
                    const V = A.innerParams.get(c);
                    V && (Is(V) || V.timer || V.input) || b(Xn.close)
                }
            },
            Is = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let An = !1;
        const Gr = c => {
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
            Qi = (c, h, b) => {
                h.container.onclick = V => {
                    const me = A.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    V.target === h.container && D(me.allowOutsideClick) && b(Xn.backdrop)
                }
            },
            Zi = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || Zi(c),
            Yo = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, V) => {
                    const me = c[V];
                    typeof me == "string" || er(me) ? h[b] = me : me !== void 0 && v("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof me))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), V = 0; V < h; V++) b[V] = arguments[V];
            return new c(...b)
        }

        function qr(c) {
            class h extends this {
                _main(V, me) {
                    return super._main(V, Object.assign({}, c, me))
                }
            }
            return h
        }
        const Wr = () => it.timeout && it.timeout.getTimerLeft(),
            Ls = () => {
                if (it.timeout) return Ye(), it.timeout.stop()
            },
            R = () => {
                if (it.timeout) {
                    const c = it.timeout.start();
                    return jt(c), c
                }
            },
            F = () => {
                const c = it.timeout;
                return c && (c.running ? Ls() : R())
            },
            X = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return jt(h, !0), h
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
                for (const b in ve) {
                    const V = h.getAttribute(b);
                    if (V) {
                        ve[b].fire({
                            template: V
                        });
                        return
                    }
                }
        };
        var Me = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: ye,
            argsToParams: Yo,
            isVisible: zt,
            clickConfirm: Bt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: U,
            getPopup: be,
            getTitle: he,
            getHtmlContainer: Se,
            getImage: Te,
            getIcon: we,
            getInputLabel: Gt,
            getCloseButton: M,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Vt,
            getCancelButton: l,
            getLoader: E,
            getFooter: _,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Ke,
            isLoading: De,
            fire: tr,
            mixin: qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Wr,
            stopTimer: Ls,
            resumeTimer: R,
            toggleTimer: F,
            increaseTimer: X,
            isTimerRunning: fe,
            bindClickHandler: Ee
        });
        let ze;
        class Ue {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, b = new Array(h), V = 0; V < h; V++) b[V] = arguments[V];
                const me = Object.freeze(this.constructor.argsToParams(b));
                Object.defineProperties(this, {
                    params: {
                        value: me,
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
                Pe(Object.assign({}, b, h)), it.currentInstance && (it.currentInstance._destroy(), ke() && Mr()), it.currentInstance = ze;
                const V = ht(h, b);
                ws(V), Object.freeze(V), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const me = Tt(ze);
                return Lr(ze, V), A.innerParams.set(ze, V), Xe(ze, me, V)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, b) => new Promise((V, me) => {
                const He = Ut => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ut
                    })
                };
                je.swalPromiseResolve.set(c, V), je.swalPromiseReject.set(c, me), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => qo(c, He), h.closeButton.onclick = () => He(Xn.close), Wo(c, h, He), on(c, it, b, He), p(c, b), jr(b), We(it, b, He), Ht(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const b = ko(c),
                    V = Object.assign({}, re, h, b, c);
                return V.showClass = Object.assign({}, re.showClass, V.showClass), V.hideClass = Object.assign({}, re.hideClass, V.hideClass), V
            },
            Tt = c => {
                const h = {
                    popup: be(),
                    container: U(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Vt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: M(),
                    validationMessage: Ke(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            We = (c, h, b) => {
                const V = O();
                L(V), h.timer && (c.timeout = new Br(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (W(V), ct(V, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && jt(h.timer)
                })))
            },
            Ht = (c, h) => {
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
            const h = Y([{
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
            const b = document.createElement("button");
            b.innerHTML = "&times;", b.onclick = () => c.remove(), c.appendChild(b), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(c)
                }, 1e3)
            })
        }
        Object.assign(Ue.prototype, Ur), Object.assign(Ue, Me), Object.keys(Ur).forEach(c => {
            Ue[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ue.DismissReason = Xn, Ue.version = "11.4.26";
        const At = Ue;
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
})(Ku);
const Rn = Ku.exports;
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
        const n = new URL("main/pp1/ydkj2015/assets/8cdd50e7.png", self.location).href,
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
                i = Li().width,
                a = Li().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = vo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Li().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Li().width, Li().height))
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
                        a = await navigator.mediaDevices.enumerateDevices();
                    this.currentStream = i, this.video.srcObject = i, await this.video.play(), this.gotDevices(a)
                } catch (i) {
                    console.error(i), Ot.show("alert", {
                        titleText: "No se pudo acceder a la cámara",
                        text: `Parece que no tenemos acceso a la cámara de tu dispositivo. Puedes refrescar y volver a intentarlo, o elegir la opción de ${t} en su lugar.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else Ot.show("alert", {
                titleText: "No hay acceso a la cámara",
                text: `Parece que el acceso a la cámara no está disponible desde este navegador. Prueba la opción de ${t} en su lugar.`,
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
                i = ce(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(ce(window).innerHeight(), 250),
                v = Math.min(a / t, f / e),
                S = t * v,
                k = e * v;
            n.style.width = `${S}px`, n.style.height = `${k}px`, n.width = S, n.height = k
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
                cancelButton: "Cancelar",
                confirmButton: "Confirmar"
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp1/ydkj2015/assets/5f12600b.png"/></svg>\r
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
            ye = -.33 * k * ie,
            d = this.lastSmoothedMouse.x + P + se,
            _e = this.lastSmoothedMouse.y + m + ye,
            Oe = this.lastSmoothedMouse.x - P + se,
            Pe = this.lastSmoothedMouse.y - m + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(d, _e, this.smoothedMouseX + ae, this.smoothedMouseY + q), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - q), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
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
        this.canvasSelector = e, this.canvas = ce(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(ac, n), this.history = [], this.layerNames.forEach(i => {
            const a = new Ju(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
                i = ce(n)[0].width / ce(n).width(),
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
    DC = `<div class="controller-content">\r
    <div class="canvas-container">\r
        <div id="prompt" class="prompt"></div>\r
        <div id="toolbar" class="toolbar"></div>\r
        <div id="sketchpad"></div>\r
        <div id="buttons" class="buttons"></div>\r
        <div id="post-sketchpad" class="post-sketchpad">\r
            <div id="submit">\r
                <button id='submitdrawing' class="button submitDrawing">Enviar</button><br/>\r
            </div>\r
            <button id='censorOptions' class='button'>Opciones de censura</button>\r
            <div class="footer"></div>\r
        </div>\r
        </div>\r
    </div>\r
</div>\r
`,
    LC = si.extend({
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
                drawing_empty: "¡Tienes que dibujar algo!",
                submit: "enviar",
                ERROR_REJECTED_OBJECT: "Eso no está permitido, ¡ingresa otra cosa!"
            }
        }
    }),
    MC = Et.View.extend({
        className: "Draw",
        template: at.template(DC),
        model: new LC,
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
                    return t ? t.html ? t.html : ce("<div />").text(t.text).html() : null
                }
            },
            ".submitDrawing": {
                observe: ["hideSubmit", "actions", "strings"],
                visible: !0,
                updateView: !0,
                onGet(t) {
                    return t[0] || t[1] ? !1 : t[2] === void 0 ? "" : t[2].submit || "Enviar"
                }
            }
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Vi({}), this.toolbarComponent = this.toolbarComponent || new AC({
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
            const t = ce("#sketchpad"),
                e = ce("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(ce(".controller-content").css("border-top-width"), 10) * 2 + ce(".playerTopBar").innerHeight() + ce("#prompt").innerHeight() + ce("#toolbar").innerHeight() + parseInt(ce(".canvasContainer").css("border-top-width"), 10) * 2 + ce("#buttons").innerHeight() + ce("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(ce(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(ce(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(ce(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                v = 2,
                S = Math.min(t.width() - i, a * v),
                k = Math.max(ce("#controller-container").innerHeight() - n, 250),
                I = Math.min(S / a, k / f),
                D = a * I,
                $ = f * I;
            e.style.width = `${D}px`, e.style.height = `${$}px`, window.scrollTo(0, 0)
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
    BC = si.extend({
        defaults: {
            state: "EnterSingleText",
            actions: [{
                text: "enviar",
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
            inlineSubmitText: "Enviar",
            error: "",
            strings: {
                ERROR_NOTHING_ENTERED: "¡Tienes que ingresar algo!",
                ERROR_REJECTED_TEXT: "¡Eso no está permitido, ingresa otra cosa! (Puedes cambiar el nivel del filtro en el menú de ajustes del juego)"
            }
        }
    }),
    NC = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: at.template(PC),
        model: new BC,
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
                    return t ? t.html ? t.html : ce("<div />").text(t.text).html() : ""
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new Vi({
                model: new ot.Model({
                    text: "",
                    className: ""
                })
            }), this.inputComponent = this.inputComponent || new to({
                model: new ot.Model({})
            }), this.buttonsCollection = this.buttonsCollection || new ot.Collection([{
                text: "enviar"
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
                text: "enviar",
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
            e.length > this.model.get("maxLength") && (e = e.substr(0, this.model.get("maxLength")), t.setValue(e)), this.shouldSubmit = e.length > 0, this.model.get("live") && (this.throttledSend || (this.throttledSend = at.throttle(() => {
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
        const a = new Ju(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
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
            this.update().catch(this.caughtError), ce(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
        },
        showTwitchBroadcasterDialog(t) {
            let e = `<div class='icon-${this.client.roles.broadcaster.platform}'>${this.client.roles.broadcaster.name}</div>`;
            e += "<div class='success'>Has conectado correctamente tu cuenta a la Extensión de Twitch del Kit de Público de Jackbox.</div>", this.lacksAudience ? e += "<div class='warning'>ESTE JUEGO NO TIENE FUNCIÓN DE PÚBLICO</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>ESTA SALA NO TIENE LA OPCIÓN DE PÚBLICO HABILITADA</div>"), Ot.show("custom", {
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
            const n = ce(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (ce(this.activeScreen).fadeOut("fast", () => {}), ce(this.activeScreen).show(), ce(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
                e && e()
            }), this.activeScreen = t, this.onResize()), !1
        },
        notify() {
            Ot.vibrate()
        },
        onRoomWasDestroyed() {
            Zt.remove("roomCode"), Zt.remove("reconnect"), Ot.show("error", {
                titleText: "Desconectado",
                text: "¡Gracias por jugar!",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onDisconnected() {
            Ot.show("error", {
                titleText: "Desconectado",
                text: "Has sido desconectado.",
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
            const t = ce("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? ce("#slide-in-banner").outerHeight(!0) : 0,
                n = ce(window).width(),
                i = ce(window).height() - t;
            ce(`.${this.getOption("appTag")}-page`).css("height", i - e), ce(`.${this.getOption("appTag")}-page`).attr("height", i - e), ce(`.${this.getOption("appTag")}-page`).css("top", t), ce(`.${this.getOption("appTag")}-page`).css("width", n), ce(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    VC = `<div id="controller" class="state-controller controller-content">
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
        <a id="artifactLink" aria-label="Visita la galería" class="artifactLink" target="_blank">
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
                wait: "¡Siéntate y relájate!",
                vip_waiting: "Esperando a que todos los jugadores se unan",
                vip_canStart: "Pulsa este botón cuando todos se hayan unido",
                vip_cancel: "Pulsa este botón para cancelar el inicio de la partida",
                vip_postgame: "¿Qué quieres hacer ahora?",
                vip_episodes_menu: "Menú de episodios",
                vip_episodes_unload: "Retirar episodio",
                vip_episodes_report: "Reportar episodio",
                vip_episodes_warning: "Aviso: El contenido de los usuarios no tiene clasificación de edad",
                vip_episodes_load: "Cargar un episodio por id:",
                vip_episodes_select: "O selecciona un episodio:",
                vip_episodes_back: "Atrás",
                vip_episodes_submit: "ENVIAR",
                vip_episodes_view_author: "Ver autor",
                button_start: "Estamos todos",
                button_cancel: "Cancelar",
                button_changename: "Cambiar el nombre",
                button_sameplayers: "Mismos jugadores",
                button_newplayers: "Nuevos jugadores",
                prompt_entername: "Ingresa tu nombre",
                prompt_choosecharacter: "Selecciona tu personaje",
                button_censorOptions: "Opciones de censura",
                censor_prompt: ""
            }
        }
    }),
    jC = Et.View.extend({
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
    FC = Et.View.extend({
        className: "Lobby scrollable",
        template: at.template(VC),
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
            this.titleComponent = new Vi({
                model: new ot.Model({})
            }), this.choicesListView = this.choicesListView || new fi, this.charactersListView = new Et.CollectionView({
                childView: jC,
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
            }), Bi.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = ce(t.currentTarget).data("action");
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
                            inputValidator: f => f ? f.length > 12 ? "Límite de 12 caracteres" : null : "¡Tienes que escribir algo!"
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
                        collection: new ot.Collection([])
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
                    })))), a.render(), ce(".lobbyUgcInput").mask("aaa-aaaa", {
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
    zC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visita la galería" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    HC = si.extend({
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
        model: new HC,
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : ce("<div />").text(t.text).html()
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
    Vs = {
        en: {
            LANGUAGE_NAME: "English",
            SUPPORTED_LANGUAGES: ["English", "Fran\xE7ais", "Italiano", "Deutsch", "Espa\xF1ol"],
            SUPPORTED_LOCALES: ["en", "fr", "it", "de", "es"],
            LANGUAGE: "Idioma",
            LOGIN: "Iniciar sesi\xF3n",
            STRING_ERROR_SERVER_ROOM_DISCONNECTED: "Desconectado",
            STRING_ERROR_SERVER_ROOM_DESTROYED: "¡Gracias por jugar!"
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
    GC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    qC = Et.View.extend({
        className: "playerTopBarView",
        template: at.template(GC),
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
                your_choice: "Gracias. Tu elección: ",
                censor_prompt: "¿Censurar esto?",
                censor_confirm: "¡Sí, censurarlo!",
                censor_cancel: "¡No!"
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
                    return t ? t.html ? t.html : ce("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : ce("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new Vi({
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
                text: "Enviar",
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
            let e = "Gracias.";
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
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
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

function Gs(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gs = function(e) {
        return typeof e
    } : Gs = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Gs(t)
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
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function QC(t, e) {
    if (t == null) return {};
    var n = JC(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
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
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function th(t, e, n) {
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

function Fn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Yt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, v, S, k, I, D, $;
        if (t !== window && t.parentNode && t !== Fn() ? (f = t.getBoundingClientRect(), v = f.top, S = f.left, k = f.bottom, I = f.right, D = f.height, $ = f.width) : (v = 0, S = 0, k = window.innerHeight, I = window.innerWidth, D = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !oi))
            do
                if (a && a.getBoundingClientRect && (tt(a, "transform") !== "none" || n && tt(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    v -= J.top + parseInt(tt(a, "border-top-width")), S -= J.left + parseInt(tt(a, "border-left-width")), k = v + f.height, I = S + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = pr(a || t),
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

function dc(t, e, n) {
    for (var i = di(t, !0), a = Yt(t)[e]; i;) {
        var f = Yt(i)[n],
            v = void 0;
        if (n === "top" || n === "left" ? v = a >= f : v = a <= f, !v) return i;
        if (i === Fn()) break;
        i = di(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var a = 0, f = 0, v = t.children; f < v.length;) {
        if (v[f].style.display !== "none" && v[f] !== Qe.ghost && (i || v[f] !== Qe.dragged) && $n(v[f], n.draggable, t, !1)) {
            if (a === e) return v[f];
            a++
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
        i = Fn();
    if (t)
        do {
            var a = pr(t),
                f = a.a,
                v = a.d;
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
    if (!t || !t.getBoundingClientRect) return Fn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = tt(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return Fn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return Fn()
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
                i.forEach(function(a) {
                    if (!(tt(a, "display") === "none" || a === Qe.ghost)) {
                        t.push({
                            target: a,
                            rect: Yt(a)
                        });
                        var f = zn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var v = pr(a, !0);
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
            t.splice(tx(t, {
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
                    $ = Yt(I),
                    J = I.prevFromRect,
                    ie = I.prevToRect,
                    Y = S.rect,
                    re = pr(I, !0);
                re && ($.top -= re.f, $.left -= re.e), I.toRect = $, I.thisAnimationDuration && ha(J, $) && !ha(D, $) && (Y.top - $.top) / (Y.left - $.left) === (D.top - $.top) / (D.left - $.left) && (k = ox(Y, J, ie, a.options)), ha($, D) || (I.prevFromRect = D, I.prevToRect = $, k || (k = a.options.animation), a.animate(I, Y, $, k)), k && (f = !0, v = Math.max(v, k), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, k), I.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, v) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, v) {
            if (v) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var S = pr(this.el),
                    k = S && S.a,
                    I = S && S.d,
                    D = (a.left - f.left) / (k || 1),
                    $ = (a.top - f.top) / (I || 1);
                i.animatingX = !!D, i.animatingY = !!$, tt(i, "transform", "translate3d(" + D + "px," + $ + "px,0)"), this.forRepaintDummy = sx(i), tt(i, "transition", "transform " + v + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
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
            var a = this;
            this.eventCanceled = !1, i.cancel = function() {
                a.eventCanceled = !0
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
        initializePlugins: function(e, n, i, a) {
            rr.forEach(function(S) {
                var k = S.pluginName;
                if (!(!e.options[k] && !S.initializeByDefault)) {
                    var I = new S(e, n, e.options);
                    I.sortable = e, I.options = e.options, e[k] = I, ri(i, I.defaults)
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
            return rr.forEach(function(a) {
                typeof a.eventProperties == "function" && ri(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return rr.forEach(function(f) {
                !e[f.pluginName] || f.optionListeners && typeof f.optionListeners[n] == "function" && (a = f.optionListeners[n].call(e[f.pluginName], i))
            }), a
        }
    };

function ax(t) {
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
    if (e = e || n && n[Sn], !!e) {
        var re, m = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = v || n, re.from = S || n, re.item = a || n, re.clone = f, re.oldIndex = k, re.newIndex = I, re.oldDraggableIndex = D, re.newDraggableIndex = $, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var q = zn(zn({}, Y), ps.getEventProperties(i, e));
        for (var ae in q) re[ae] = q[ae];
        n && n.dispatchEvent(re), m[P] && m[P].call(e, re)
    }
}
var lx = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = QC(i, lx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Ii,
            lastDownEl: qs,
            cloneEl: Nt,
            cloneHidden: ui,
            dragStarted: Qr,
            putSortable: en,
            activeSortable: Qe.active,
            originalEvent: a,
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
            dispatchSortableEvent: function(S) {
                gn({
                    sortable: n,
                    name: S,
                    originalEvent: a
                })
            }
        }, f))
    };

function gn(t) {
    ax(zn({
        putSortable: en,
        cloneEl: Nt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: _n,
        newDraggableIndex: ci
    }, t))
}
var Ie, $t, ut, Pt, Ii, qs, Nt, ui, cr, _n, as, ci, $s, en, lr = !1,
    io = !1,
    ro = [],
    Ai, Mn, fa, pa, pc, gc, Qr, sr, ls, cs = !1,
    js = !1,
    Ws, ln, ga = [],
    Da = !1,
    so = [],
    wo = typeof document < "u",
    Fs = Qu,
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
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = yr(e, 0, n),
            v = yr(e, 1, n),
            S = f && tt(f),
            k = v && tt(v),
            I = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Yt(f).width,
            D = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Yt(v).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && S.float && S.float !== "none") {
            var $ = S.float === "left" ? "left" : "right";
            return v && (k.clear === "both" || k.clear === $) ? "vertical" : "horizontal"
        }
        return f && (S.display === "block" || S.display === "flex" || S.display === "table" || S.display === "grid" || I >= a && i[mc] === "none" || v && i[mc] === "none" && I + D > a) ? "vertical" : "horizontal"
    },
    ux = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            v = i ? e.width : e.height,
            S = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return a === S || f === k || a + v / 2 === S + I / 2
    },
    hx = function(e, n) {
        var i;
        return ro.some(function(a) {
            var f = a[Sn].options.emptyInsertThreshold;
            if (!(!f || ul(a))) {
                var v = Yt(a),
                    S = e >= v.left - f && e <= v.right + f,
                    k = n >= v.top - f && n <= v.bottom + f;
                if (S && k) return i = a
            }
        }), i
    },
    ah = function(e) {
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
        (!a || Gs(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
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
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
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
        supportPointer: Qe.supportPointer !== !1 && "PointerEvent" in window && !ss,
        emptyInsertThreshold: 5
    };
    ps.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    ah(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
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
                a = this.options,
                f = a.preventOnFilter,
                v = e.type,
                S = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (S || e).target,
                I = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                D = a.filter;
            if (bx(i), !Ie && !(/mousedown|pointerdown/.test(v) && e.button !== 0 || a.disabled) && !I.isContentEditable && !(!this.nativeDraggable && ss && k && k.tagName.toUpperCase() === "SELECT") && (k = $n(k, a.draggable, i, !1), !(k && k.animated) && qs !== k)) {
                if (cr = On(k), as = On(k, a.draggable), typeof D == "function") {
                    if (D.call(this, e, k, this)) {
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
                } else if (D && (D = D.split(",").some(function($) {
                        if ($ = $n(I, $.trim(), i, !1), $) return gn({
                            sortable: n,
                            rootEl: $,
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
        if (i && !Ie && i.parentNode === f) {
            var I = Yt(i);
            if (Pt = f, Ie = i, $t = Ie.parentNode, Ii = Ie.nextSibling, qs = i, $s = v.group, Qe.dragged = Ie, Ai = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, pc = Ai.clientX - I.left, gc = Ai.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", a, {
                            evt: e
                        }), Qe.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !uc && a.nativeDraggable && (Ie.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, v.chosenClass, !0)
                }, v.ignore.split(",").forEach(function(D) {
                    th(Ie, D.trim(), ma)
                }), xt(S, "dragover", Oi), xt(S, "mousemove", Oi), xt(S, "touchmove", Oi), xt(S, "mouseup", a._onDrop), xt(S, "touchend", a._onDrop), xt(S, "touchcancel", a._onDrop), uc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), v.delay && (!v.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(S, "mouseup", a._disableDelayedDrag), xt(S, "touchend", a._disableDelayedDrag), xt(S, "touchcancel", a._disableDelayedDrag), xt(S, "mousemove", a._delayedDragTouchMoveHandler), xt(S, "touchmove", a._delayedDragTouchMoveHandler), v.supportPointer && xt(S, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, v.delay)
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
        if (Mn) {
            this._lastX = Mn.clientX, this._lastY = Mn.clientY, lh();
            for (var e = document.elementFromPoint(Mn.clientX, Mn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Mn.clientX, Mn.clientY), e !== n);) n = e;
            if (Ie.parentNode[Sn]._isOutsideThisEl(e), n)
                do {
                    if (n[Sn]) {
                        var i = void 0;
                        if (i = n[Sn]._onDragOver({
                                clientX: Mn.clientX,
                                clientY: Mn.clientY,
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
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                v = ut && pr(ut, !0),
                S = ut && v && v.a,
                k = ut && v && v.d,
                I = Fs && ln && fc(ln),
                D = (f.clientX - Ai.clientX + a.x) / (S || 1) + (I ? I[0] - ga[0] : 0) / (S || 1),
                $ = (f.clientY - Ai.clientY + a.y) / (k || 1) + (I ? I[1] - ga[1] : 0) / (k || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                v ? (v.e += D - (fa || 0), v.f += $ - (pa || 0)) : v = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: $
                };
                var J = "matrix(".concat(v.a, ",").concat(v.b, ",").concat(v.c, ",").concat(v.d, ",").concat(v.e, ",").concat(v.f, ")");
                tt(ut, "webkitTransform", J), tt(ut, "mozTransform", J), tt(ut, "msTransform", J), tt(ut, "transform", J), fa = D, pa = $, Mn = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Yt(Ie, !0, Fs, !0, e),
                i = this.options;
            if (Fs) {
                for (ln = e; tt(ln, "position") === "static" && tt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = Fn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = Fn(), ga = fc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", Fs ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", pc / parseInt(ut.style.width) * 100 + "% " + gc / parseInt(ut.style.height) * 100 + "%")
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
        wn("setupClone", this), Qe.eventCanceled || (Nt = rh(Ie), Nt.removeAttribute("id"), Nt.draggable = !1, Nt.style["will-change"] = "", this._hideClone(), En(Nt, this.options.chosenClass, !1), Qe.clone = Nt), i.cloneId = Xs(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Nt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, f.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Xs(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Qr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, v, S = this.options,
            k = S.group,
            I = Qe.active,
            D = $s === k,
            $ = S.sort,
            J = en || I,
            ie, Y = this,
            re = !1;
        if (Da) return;

        function m(we, he) {
            wn(we, Y, zn({
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
                onMove: function(Te, $e) {
                    return zs(Pt, n, Ie, a, Te, Yt(Te), e, $e)
                },
                changed: ae
            }, he))
        }

        function P() {
            m("dragOverAnimationCapture"), Y.captureAnimationState(), Y !== J && J.captureAnimationState()
        }

        function q(we) {
            return m("dragOverCompleted", {
                insertion: we
            }), we && (D ? I._hideClone() : I._showClone(Y), Y !== J && (En(Ie, en ? en.options.ghostClass : I.options.ghostClass, !1), En(Ie, S.ghostClass, !0)), en !== Y && Y !== Qe.active ? en = Y : Y === Qe.active && en && (en = null), J === Y && (Y._ignoreWhileAnimating = i), Y.animateAll(function() {
                m("dragOverAnimationComplete"), Y._ignoreWhileAnimating = null
            }), Y !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (sr = null), !S.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !we && Oi(e)), !S.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            _n = On(Ie), ci = On(Ie, S.draggable), gn({
                sortable: Y,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, S.draggable, n, !0), m("dragOver"), Qe.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || Y._ignoreWhileAnimating === i) return q(!1);
        if (io = !1, I && !S.disabled && (D ? $ || (v = $t !== Pt) : en === this || (this.lastPutMode = $s.checkPull(this, I, Ie, e)) && k.checkPut(this, I, Ie, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Yt(Ie), m("dragOverValid"), Qe.eventCanceled) return re;
            if (v) return $t = Pt, P(), this._hideClone(), m("revert"), Qe.eventCanceled || (Ii ? Pt.insertBefore(Ie, Ii) : Pt.appendChild(Ie)), q(!0);
            var se = ul(n, S.draggable);
            if (!se || mx(e, ie, this) && !se.animated) {
                if (se === Ie) return q(!1);
                if (se && n === e.target && (i = se), i && (f = Yt(i)), zs(Pt, n, Ie, a, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Ie, se.nextSibling) : n.appendChild(Ie), $t = n, ae(), q(!0)
            } else if (se && gx(e, ie, this)) {
                var ye = yr(n, 0, S, !0);
                if (ye === Ie) return q(!1);
                if (i = ye, f = Yt(i), zs(Pt, n, Ie, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Ie, ye), $t = n, ae(), q(!0)
            } else if (i.parentNode === n) {
                f = Yt(i);
                var d = 0,
                    _e, Oe = Ie.parentNode !== n,
                    Pe = !ux(Ie.animated && Ie.toRect || a, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Ve = dc(i, "top", "top") || dc(Ie, "top", "top"),
                    K = Ve ? Ve.scrollTop : void 0;
                sr !== i && (_e = f[lt], cs = !1, js = !Pe && S.invertSwap || Oe), d = vx(e, i, f, ie, Pe ? 1 : S.swapThreshold, S.invertedSwapThreshold == null ? S.swapThreshold : S.invertedSwapThreshold, js, sr === i);
                var Fe;
                if (d !== 0) {
                    var U = On(Ie);
                    do U -= d, Fe = $t.children[U]; while (Fe && (tt(Fe, "display") === "none" || Fe === ut))
                }
                if (d === 0 || Fe === i) return q(!1);
                sr = i, ls = d;
                var oe = i.nextElementSibling,
                    Ae = !1;
                Ae = d === 1;
                var be = zs(Pt, n, Ie, a, i, f, e, Ae);
                if (be !== !1) return (be === 1 || be === -1) && (Ae = be === 1), Da = !0, setTimeout(px, 30), P(), Ae && !oe ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? oe : i), Ve && ih(Ve, 0, K - Ve.scrollTop), $t = Ie.parentNode, _e !== void 0 && !js && (Ws = Math.abs(_e - Yt(i)[lt])), ae(), q(!0)
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
        lr = !1, js = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), La(this.cloneId), La(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || en && en.lastPutMode !== "clone") && Nt && Nt.parentNode && Nt.parentNode.removeChild(Nt), Ie && (this.nativeDraggable && wt(Ie, "dragend", this), ma(Ie), Ie.style["will-change"] = "", Qr && !lr && En(Ie, en ? en.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
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
        wn("nulling", this), Pt = Ie = $t = ut = Ii = Nt = qs = ui = Ai = Mn = Qr = _n = ci = cr = as = sr = ls = en = $s = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
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
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, v = this.options; a < f; a++) n = i[a], $n(n, v.draggable, this.el, !1) && e.push(n.getAttribute(v.dataIdAttr) || wx(n));
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
        var a = ps.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && ah(i)
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
            tt(Nt, "display", "none"), this.options.removeCloneOnHide && Nt.parentNode && Nt.parentNode.removeChild(Nt), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (wn("showClone", this), Qe.eventCanceled) return;
            Ie.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Nt, Ie) : Ii ? Pt.insertBefore(Nt, Ii) : Pt.appendChild(Nt), this.options.group.revertClone && this.animate(Ie, Nt), tt(Nt, "display", ""), ui = !1
        }
    }
};

function fx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, a, f, v, S) {
    var k, I = t[Sn],
        D = I.options.onMove,
        $;
    return window.CustomEvent && !oi && !fs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = f || Yt(e), k.willInsertAfter = S, k.originalEvent = v, t.dispatchEvent(k), D && ($ = D.call(I, k, v)), $
}

function ma(t) {
    t.draggable = !1
}

function px() {
    Da = !1
}

function gx(t, e, n) {
    var i = Yt(yr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function mx(t, e, n) {
    var i = Yt(ul(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function vx(t, e, n, i, a, f, v, S) {
    var k = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        D = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        J = !1;
    if (!v) {
        if (S && Ws < I * a) {
            if (!cs && (ls === 1 ? k > D + I * f / 2 : k < $ - I * f / 2) && (cs = !0), cs) J = !0;
            else if (ls === 1 ? k < D + Ws : k > $ - Ws) return -ls
        } else if (k > D + I * (1 - a) / 2 && k < $ - I * (1 - a) / 2) return yx(e)
    }
    return J = J || v, J && (k < D + I * f / 2 || k > $ - I * f / 2) ? k > D + I / 2 ? 1 : -1 : 0
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

function La(t) {
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
    cancelNextTick: La,
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
    Zr, Ma, Pa = !1,
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
            oo = Ma = Zr = Pa = es = va = ya = null, qt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                v = (n.touches ? n.touches[0] : n).clientY,
                S = document.elementFromPoint(f, v);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                wa(n, this.options, S, i);
                var k = di(S, !0);
                Pa && (!es || f !== va || v !== ya) && (es && vc(), es = setInterval(function() {
                    var I = di(document.elementFromPoint(f, v), !0);
                    I !== k && (k = I, Ys()), wa(n, a.options, I, i)
                }, 10), va = f, ya = v)
            } else {
                if (!this.options.bubbleScroll || di(S, !0) === Fn()) {
                    Ys();
                    return
                }
                wa(n, this.options, di(S, !1), !1)
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
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                v = e.scrollSensitivity,
                S = e.scrollSpeed,
                k = Fn(),
                I = !1,
                D;
            Ma !== n && (Ma = n, Ys(), Zr = e.scroll, D = e.scrollFn, Zr === !0 && (Zr = di(n, !0)));
            var $ = 0,
                J = Zr;
            do {
                var ie = J,
                    Y = Yt(ie),
                    re = Y.top,
                    m = Y.bottom,
                    P = Y.left,
                    q = Y.right,
                    ae = Y.width,
                    se = Y.height,
                    ye = void 0,
                    d = void 0,
                    _e = ie.scrollWidth,
                    Oe = ie.scrollHeight,
                    Pe = tt(ie),
                    lt = ie.scrollLeft,
                    Ve = ie.scrollTop;
                ie === k ? (ye = ae < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ye = ae < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var K = ye && (Math.abs(q - a) <= v && lt + ae < _e) - (Math.abs(P - a) <= v && !!lt),
                    Fe = d && (Math.abs(m - f) <= v && Ve + se < Oe) - (Math.abs(re - f) <= v && !!Ve);
                if (!qt[$])
                    for (var U = 0; U <= $; U++) qt[U] || (qt[U] = {});
                (qt[$].vx != K || qt[$].vy != Fe || qt[$].el !== ie) && (qt[$].el = ie, qt[$].vx = K, qt[$].vy = Fe, clearInterval(qt[$].pid), (K != 0 || Fe != 0) && (I = !0, qt[$].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var oe = qt[this.layer].vy ? qt[this.layer].vy * S : 0,
                        Ae = qt[this.layer].vx ? qt[this.layer].vx * S : 0;
                    typeof D == "function" && D.call(Qe.dragged.parentNode[Sn], Ae, oe, t, oo, qt[this.layer].el) !== "continue" || ih(qt[this.layer].el, Ae, oe)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && J !== k && (J = di(J, !1)));
            Pa = I
        }
    }, 30),
    uh = function(e) {
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
        var a = yr(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
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
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
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
                your_choice: "Gracias. Tu elección: ",
                censor_prompt: "¿Censurar esto?",
                censor_confirm: "¡Sí, censurarlo!",
                censor_cancel: "¡No!"
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
        <div class="instructions">Elige dónde se posiciona este artículo:</div>
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
                    html: "Bloquear"
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
    kx = Et.View.extend({
        className: "Sortable scrollable",
        template: at.template(xx),
        model: new Ex,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Vi({
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
                tos_warning: "Al compartir contenido, aceptas nuestros Términos de servicio",
                tos_warning_agree: "aceptar y compartir",
                tos_warning_back: "volver al menú",
                create_new_episode: "crear un nuevo episodio",
                create_new_name_prompt: "primero lo primero, ingresa un nombre para el episodio que contendrá todos tus enunciados y pulsa crear.",
                create_new_button: "crear",
                button_back_to_episodes: "volver a los episodios",
                button_back_to_menu: "volver al menú",
                previous_episodes: "episodios anteriores:",
                toggle_prompts_prompt: "toca para mostrar/ocultar los enunciados",
                button_close: "cerrar",
                button_done: "listo",
                button_add: "añadir enunciado",
                input_placeholder: "ingresa un enunciado",
                label_hidden: "oculto",
                button_edit: "editar",
                button_save: "guardar",
                button_publish: "publicar",
                button_play: "jugar",
                button_delete: "borrar",
                delete_warning: "¿Seguro que quieres eliminar este episodio?",
                delete_warning_confirm: "Sí",
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
                        a = n.length;
                    let f = `${t}/${e}`;
                    return a < t && (f += ` (${t-a} ${i})`), f
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.promptComponent = this.promptComponent || new Vi({
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
                const i = at.extend({}, n);
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
            const e = ce(t.currentTarget).data("action");
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
            const a = this.getDistance(n);
            if (a > 32) {
                const f = 32 / a;
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
    Lx = si.extend({
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
    Mx = Et.View.extend({
        model: new Lx,
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
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), ce(window).on("mousemove", this.move.bind(this)), ce(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), ce(window).off("mousemove"), ce(window).off("mouseup")
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
            const t = ce(".radial"),
                e = ce("#status-bar").outerHeight() + ce(".playerTopBar").outerHeight() + ce("#control-panel").outerHeight() + 10,
                n = ce(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
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
                return this.setLayout(MC);
            case "EnterSingleText":
                return this.setLayout(NC);
            case "Lobby":
                return this.setLayout(FC);
            case "Logo":
                return this.setLayout(UC);
            case "MakeSingleChoice":
                return this.setLayout(YC);
            case "Shoot":
                return this.setLayout(Mx);
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
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Bi.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), ce("#textDescriptions").append(ce("<p />").text(e.text)))
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
                Has conectado correctamente tu cuenta a la Extensión de Twitch del Kit de Público de Jackbox.
            </div>`, this.lacksAudience ? e += "<div class='warning'>ESTE JUEGO NO TIENE FUNCIÓN DE PÚBLICO</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>ESTA SALA NO TIENE LA OPCIÓN DE PÚBLICO HABILITADA</div>"), Ot.show("custom", {
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
        const t = ce(window).width(),
            e = ce(window).height();
        ce(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), Ot.show("error", {
            titleText: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        Ot.show("error", {
            titleText: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
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
    })(typeof window < "u" ? window : vt || {})
})(hh);
const Bx = hh.exports;
class Nx extends Bx {
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
            return Object.keys(n).forEach(a => {
                const f = n[a];
                a === "room" || a === "bc:room" || a === "roomBlob" ? (f instanceof Ri.TextEntity && (i.room = f.toBlob()), f instanceof Ri.ObjectEntity && (i.room = f.val)) : a === "player" || a === `player:${this.id}` || a === `bc:customer:${this.userId}` ? (f instanceof Ri.TextEntity && (i.player = f.toBlob()), f instanceof Ri.ObjectEntity && (i.player = f.val)) : a === "audiencePlayer" && (f instanceof Ri.TextEntity && (i.audiencePlayer = f.toBlob()), f instanceof Ri.ObjectEntity && (i.audiencePlayer = f.val))
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
            nc(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const v = f;
        i === "room" ? this.emit("client:entityDidChange", i, v) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", v) : i === "bc:room" ? this.emit("client:entityDidChange", "room", v) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", v) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", v) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
    }
    onObject(n) {
        const i = n.key,
            a = n.val;
        i === "room" ? this.emit("client:entityDidChange", i, a) : i === "player" ? this.emit("client:entityDidChange", "player", a) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", a) : i === "textDescriptions" ? this.emit("client:textDescriptions", i, a) : i === "bc:room" ? this.emit("client:entityDidChange", "room", a) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", a) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", a) : console.warn(`[Ecast Client] Unhandled json notification: ${i}`)
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
const Vx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(ce)
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
                        for (var we = J; ie >= we; we++)
                            if (D[we] && oe[we] === q(we)) return;
                        S.completed.call(U)
                    }
                }

                function q(we) {
                    return S.placeholder.charAt(we < S.placeholder.length ? we : 0)
                }

                function ae(we) {
                    for (; ++we < Y && !D[we];);
                    return we
                }

                function se(we) {
                    for (; --we >= 0 && !D[we];);
                    return we
                }

                function ye(we, he) {
                    var Se, Te;
                    if (!(0 > we)) {
                        for (Se = we, Te = ae(he); Y > Se; Se++)
                            if (D[Se]) {
                                if (!(Y > Te && D[Se].test(oe[Te]))) break;
                                oe[Se] = oe[Te], oe[Te] = q(Te), Te = ae(Te)
                            } K(), U.caret(Math.max(J, we))
                    }
                }

                function d(we) {
                    var he, Se, Te, $e;
                    for (he = we, Se = q(we); Y > he; he++)
                        if (D[he]) {
                            if (Te = ae(he), $e = oe[he], oe[he] = Se, !(Y > Te && D[Te].test($e))) break;
                            Se = $e
                        }
                }

                function _e() {
                    var we = U.val(),
                        he = U.caret();
                    if (re && re.length && re.length > we.length) {
                        for (Fe(!0); he.begin > 0 && !D[he.begin - 1];) he.begin--;
                        if (he.begin === 0)
                            for (; he.begin < J && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    } else {
                        for (Fe(!0); he.begin < Y && !D[he.begin];) he.begin++;
                        U.caret(he.begin, he.begin)
                    }
                    P()
                }

                function Oe() {
                    Fe(), U.val() != be && U.change()
                }

                function Pe(we) {
                    if (!U.prop("readonly")) {
                        var he, Se, Te, $e = we.which || we.keyCode;
                        re = U.val(), $e === 8 || $e === 46 || i && $e === 127 ? (he = U.caret(), Se = he.begin, Te = he.end, Te - Se === 0 && (Se = $e !== 46 ? se(Se) : Te = ae(Se - 1), Te = $e === 46 ? ae(Te) : Te), Ve(Se, Te), ye(Se, Te - 1), we.preventDefault()) : $e === 13 ? Oe.call(this, we) : $e === 27 && (U.val(be), U.caret(0, Fe()), we.preventDefault())
                    }
                }

                function lt(we) {
                    if (!U.prop("readonly")) {
                        var he, Se, Te, $e = we.which || we.keyCode,
                            Ke = U.caret();
                        if (!(we.ctrlKey || we.altKey || we.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Ve(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), he = ae(Ke.begin - 1), Y > he && (Se = String.fromCharCode($e), D[he].test(Se))) {
                                if (d(he), oe[he] = Se, K(), Te = ae(he), f) {
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

                function Ve(we, he) {
                    var Se;
                    for (Se = we; he > Se && Y > Se; Se++) D[Se] && (oe[Se] = q(Se))
                }

                function K() {
                    U.val(oe.join(""))
                }

                function Fe(we) {
                    var he, Se, Te, $e = U.val(),
                        Ke = -1;
                    for (he = 0, Te = 0; Y > he; he++)
                        if (D[he]) {
                            for (oe[he] = q(he); Te++ < $e.length;)
                                if (Se = $e.charAt(Te - 1), D[he].test(Se)) {
                                    oe[he] = Se, Ke = he;
                                    break
                                } if (Te > $e.length) {
                                Ve(he + 1, Y);
                                break
                            }
                        } else oe[he] === $e.charAt(Te) && Te++, $ > he && (Ke = he);
                    return we ? K() : $ > Ke + 1 ? S.autoclear || oe.join("") === Ae ? (U.val() && U.val(""), Ve(0, Y)) : K() : (K(), U.val(U.val().substring(0, Ke + 1))), $ ? he : J
                }
                var U = t(this),
                    oe = t.map(v.split(""), function(we, he) {
                        return we != "?" ? I[we] ? q(he) : we : void 0
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
                        be = U.val(), we = Fe(), e = setTimeout(function() {
                            U.get(0) === document.activeElement && (K(), we == v.replace("?", "").length ? U.caret(0, we) : U.caret(we))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    U.prop("readonly") || setTimeout(function() {
                        var we = Fe(!0);
                        U.caret(we), P()
                    }, 0)
                }), a && f && U.off("input.mask").on("input.mask", _e), Fe()
            })
        }
    })
});
window.$ = ce;
window.jQuery = ce;
const $x = Et.View.extend({
        className: "app-root",
        template: at.template(Vx),
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
    jx = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Ri.WSClient(n), e.connect()),
            mount: n => {
                const i = new Nx(e, n);
                let a = new Et.Application({
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
    Fx = `<div id="page-ydkj2015" class="page blue">
	<div id="player" style="background:#000000;">
		<h1 id="ydkj_playerName" class="ydkj-playerName-text"><%=username%></h1>
	</div>

	<div id="ydkj-preload-1" class="ydkj-preload-1"></div>
	<div id="ydkj-preload-2" class="ydkj-preload-2"></div>
	<div id="ydkj-preload-3" class="ydkj-preload-3"></div>
	<div id="ydkj-preload-4" class="ydkj-preload-4"></div>
	<div id="ydkj-preload-4" class="ydkj-preload-5"></div>
	<div id="ydkj-button-preload-1" class="ydkj-button-preload-1"></div>
	<div id="ydkj-button-preload-2" class="ydkj-button-preload-2"></div>
	<div id="ydkj-button-preload-3" class="ydkj-button-preload-3"></div>
	<div id="ydkj-button-preload-4" class="ydkj-button-preload-4"></div>
	<div id="ydkj-button-preload-5" class="ydkj-button-preload-5"></div>
	<div id="ydkj-button-preload-6" class="ydkj-button-preload-6"></div>
	<div id="ydkj-button-preload-7" class="ydkj-button-preload-7"></div>
	<div id="ydkj-button-preload-8" class="ydkj-button-preload-8"></div>
	<div id="ydkj-button-preload-9" class="ydkj-button-preload-9"></div>
	<div id="ydkj-button-preload-10" class="ydkj-button-preload-10"></div>
	<div id="ydkj-button-preload-11" class="ydkj-button-preload-11"></div>
	<div id="ydkj-button-preload-12" class="ydkj-button-preload-12"></div>
	<div id="ydkj-button-preload-13" class="ydkj-button-preload-13"></div>
	<div id="ydkj-button-preload-14" class="ydkj-button-preload-14"></div>
	<div id="ydkj-button-preload-15" class="ydkj-button-preload-15"></div>
	<div id="ydkj-button-preload-16" class="ydkj-button-preload-16"></div>
	
	<div id="ydkj-game" class="game pt-pageholder">
	
		<div id="ydkj-default" class="pt-page-off state-default ydkj-page">
			<div class="ydkj-gameplay gameplay-centered">

				<div style="margin:auto;" >
					<button type="button" id="button-ydkj-default-y" data-button="ANS_1" class="button-y" class-base="button-y" class-disable="button-y-disable" ></button>
				</div>

				<div id="button-ydkj-default-mid" style="margin:auto;" >
					<div style="float:left;">
						<button type="button" id="button-ydkj-default-x" data-button="ANS_2" class="button-x" class-base="button-x" class-disable="button-x-disable" ></button>
					</div>
					<div id="button-ydkj-default-spacer" style="float:left; width:15px;"></div>
					<div style="float:right;">
						<button type="button" id="button-ydkj-default-b" data-button="ANS_3" class="button-b" class-base="button-b" class-disable="button-b-disable" ></button>
					</div>
				</div>

				<div style="margin:auto;" >
					<button type="button" id="button-ydkj-default-a" data-button="ANS_4" class="button-a" class-base="button-a" class-disable="button-a-disable" ></button>
				</div>

				<div class="container pure-g" style="margin-top: 10px;" >
					<button type="button" id="button-ydkj-startgame" data-button="SCREW" class="button-ydkj button-xlarge pure-button pure-u-1">ESTAMOS TODOS</button>
					<button type="button" id="button-ydkj-default-screw" data-button="SCREW" class="button-screw" ></button>
				</div>
			</div>
		</div>

		<div id="ydkj-jack-attack" class="pt-page-off state-jack-attack ydkj-page">
			<div class="ydkj-gameplay gameplay-centered">
				<div style="margin:auto;" >
					<button type="button" id="button-ydkj-jack-attack-a" data-button="ANS_4" class="button-a-lg" ></button>
				</div>
			</div>
		</div>

		<div id="ydkj-game-in-progress" class="pt-page-off state-locked ydkj-page">
			<div class="ydkj-gameplay gameplay-centered">
				<h2 style="text-align:center;"La partida ya está en progreso, no puedes unirte.</h2>
			</div>
		</div>

		<div id="ydkj-game-full" class="pt-page-off state-full ydkj-page">
			<div class="ydkj-gameplay gameplay-centered">
				<h2 style="text-align:center;">La partida ya está llena, no puedes unirte.</h2>
			</div>
		</div>
	</div>
</div>
`;
const zx = lc.extend({
    template: at.template(Fx),
    lacksAudience: !0,
    bgClasses: ["ydkj-game-lobby", "ydkj-game-shortie", "ydkj-game-screwed", "ydkj-game-disordat", "ydkj-game-jackattack", "ydkj-game-credits"],
    events: {
        "click #button-ydkj-default-y": "sendButtonInput",
        "click #button-ydkj-default-x": "sendButtonInput",
        "click #button-ydkj-default-b": "sendButtonInput",
        "click #button-ydkj-default-a": "sendButtonInput",
        "click #button-ydkj-default-screw": "sendButtonInput",
        "click #button-ydkj-jack-attack-a": "sendButtonInput",
        "click #button-ydkj-startgame": "sendButtonInput"
    },
    initialize(t) {
        lc.prototype.initialize.apply(this, [t]), window.scrollTo(0, 0), ce.fn.nodoubletapzoom = function() {
            ce(this).bind("touchstart", function(i) {
                const a = i.timeStamp,
                    f = ce(this).data("lastTouch") || a,
                    v = a - f,
                    S = i.originalEvent.touches.length;
                ce(this).data("lastTouch", a), !(!v || v > 500 || S > 1) && (i.preventDefault(), ce(this).trigger("click"))
            })
        }
    },
    async update() {
        const t = this.model.get("player"),
            e = this.model.get("room");
        if (!(!t || !e)) {
            if (e && e.platform) {
                const n = e.platform.toLowerCase();
                this.$el.attr("class", n), this.platformCssLoaded = !0, ce("#player").css("color", "black"), this.disableDoubleTap()
            }
            if (this.platformCssLoaded !== void 0) {
                switch (ce("#ydkj_playerName").text(t.playerName), this.removeButton("#button-ydkj-default-screw"), this.removeButton("#button-ydkj-startgame"), this.enableButton("#button-ydkj-default-x"), this.enableButton("#button-ydkj-default-y"), this.enableButton("#button-ydkj-default-a"), this.enableButton("#button-ydkj-default-b"), t.state) {
                    case "RoomFull":
                        this.showScreen(".state-full"), this.setBackground("ydkj-game-lobby");
                        return;
                    case "GameLocked":
                        this.showScreen(".state-locked"), this.setBackground("ydkj-game-lobby");
                        return
                }
                switch (e.state) {
                    case "LoggedIn":
                        this.addButton("#button-ydkj-startgame"), this.showScreen(".state-default"), this.setBackground("ydkj-game-lobby");
                        break;
                    case "Skip":
                        this.disableButton("#button-ydkj-default-x"), this.disableButton("#button-ydkj-default-y"), this.disableButton("#button-ydkj-default-b"), this.showScreen(".state-default"), this.setBackground("ydkj-game-jackattack");
                        break;
                    case "WatchBigScreen":
                        this.disableButton("#button-ydkj-default-x"), this.disableButton("#button-ydkj-default-y"), this.disableButton("#button-ydkj-default-a"), this.disableButton("#button-ydkj-default-b"), this.showScreen(".state-default"), this.setBackground("ydkj-game-shortie");
                        break;
                    case "Shortie":
                        switch (t.state) {
                            case "WithScrew":
                                this.addButton("#button-ydkj-default-screw"), this.showScreen(".state-default"), this.setBackground("ydkj-game-shortie");
                                break;
                            case "NoScrew":
                                this.showScreen(".state-default"), this.setBackground("ydkj-game-shortie");
                                break;
                            case "Screwed":
                                this.showScreen(".state-default"), this.setBackground("ydkj-game-screwed");
                                break;
                            case "BuzzedIn":
                                this.disableButton("#button-ydkj-default-x"), this.disableButton("#button-ydkj-default-y"), this.disableButton("#button-ydkj-default-a"), this.disableButton("#button-ydkj-default-b"), this.showScreen(".state-default"), this.setBackground("ydkj-game-shortie");
                                break
                        }
                        break;
                    case "DisOrDat":
                        this.disableButton("#button-ydkj-default-y"), this.disableButton("#button-ydkj-default-a"), this.showScreen(".state-default"), this.setBackground("ydkj-game-disordat");
                        break;
                    case "DisDatBoth":
                        this.disableButton("#button-ydkj-default-y"), this.showScreen(".state-default"), this.setBackground("ydkj-game-disordat");
                        break;
                    case "JackAttack":
                        this.showScreen(".state-jack-attack"), this.setBackground("ydkj-game-jackattack");
                        break;
                    case "Credits":
                        this.disableButton("#button-ydkj-default-x"), this.disableButton("#button-ydkj-default-y"), e.demo === !0 && this.disableButton("#button-ydkj-default-a"), this.showScreen(".state-default"), this.setBackground("ydkj-game-credits");
                        break
                }
                this.onResize()
            }
        }
    },
    sendButtonInput(t) {
        const e = ce(t.target).data("button");
        this.client.send("SendMessageToRoomOwner", {
            button: e
        }), window.navigator && window.navigator.vibrate && window.navigator.vibrate(50)
    },
    removeButton(t) {
        ce(t).css("display", "none")
    },
    addButton(t) {
        ce(t).css("display", "inline")
    },
    enableButton(t) {
        ce(t).prop("disabled", !1), ce(t).removeClass(ce(t).attr("class-disable")), ce(t).addClass(ce(t).attr("class-base"))
    },
    disableButton(t) {
        ce(t).prop("disabled", !0), ce(t).removeClass(ce(t).attr("class-base")), ce(t).addClass(ce(t).attr("class-disable"))
    },
    setBackground(t) {
        ce("#ydkj-game").addClass(t), this.bgClasses.forEach(e => {
            t !== e && ce("#ydkj-game").removeClass(e)
        })
    },
    disableDoubleTap() {
        ce("#button-ydkj-default-screw").nodoubletapzoom(), ce("#button-ydkj-default-a").nodoubletapzoom(), ce("#button-ydkj-default-b").nodoubletapzoom(), ce("#button-ydkj-default-x").nodoubletapzoom(), ce("#button-ydkj-default-y").nodoubletapzoom(), ce("#button-ydkj-jack-attack-a").nodoubletapzoom()
    },
    onResize() {
        const t = ce(window).width();
        let e = ce(window).height() - 125,
            n = Math.floor(t * .4),
            i = Math.floor(t * .2),
            a = n / 1.65,
            f = a * 3.55;
        n * 4.24 > e && (n = e / 4.24, a = n / 1.65, f = a * 3.55, i = n / 2), ce("#button-ydkj-default-y").css("width", n), ce("#button-ydkj-default-y").attr("width", n), ce("#button-ydkj-default-y").css("height", n), ce("#button-ydkj-default-y").attr("height", n), ce("#button-ydkj-default-b").css("width", n), ce("#button-ydkj-default-b").attr("width", n), ce("#button-ydkj-default-b").css("height", n), ce("#button-ydkj-default-b").attr("height", n), ce("#button-ydkj-default-x").css("width", n), ce("#button-ydkj-default-x").attr("width", n), ce("#button-ydkj-default-x").css("height", n), ce("#button-ydkj-default-x").attr("height", n), ce("#button-ydkj-default-a").css("width", n), ce("#button-ydkj-default-a").attr("width", n), ce("#button-ydkj-default-a").css("height", n), ce("#button-ydkj-default-a").attr("height", n), ce("#button-ydkj-default-mid").css("width", n * 2 + i), ce("#button-ydkj-default-mid").attr("width", n * 2 + i), ce("#button-ydkj-default-spacer").css("width", i), ce("#button-ydkj-default-spacer").attr("width", i), ce("#button-ydkj-default-screw").css("width", f), ce("#button-ydkj-default-screw").attr("width", f), ce("#button-ydkj-default-screw").css("height", a), ce("#button-ydkj-default-screw").attr("height", a), ce("#button-ydkj-jack-attack-a").css("width", f), ce("#button-ydkj-jack-attack-a").attr("width", f), ce("#button-ydkj-jack-attack-a").css("height", f), ce("#button-ydkj-jack-attack-a").attr("height", f), e = ce(window).height() - ce("#player").outerHeight(!0), ce(".ydkj-page").css("height", e), ce(".ydkj-page").attr("height", e), ce(".ydkj-page").css("width", t), ce(".ydkj-page").attr("width", t)
    }
});
jx({
    MainView: zx
});
//# sourceMappingURL=db1903af.js.map