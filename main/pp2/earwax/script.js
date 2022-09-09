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
                for (const A of f.addedNodes) A.tagName === "LINK" && A.rel === "modulepreload" && i(A)
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
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

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
var Mi = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            o = Array.prototype,
            f = Object.prototype,
            A = Function.prototype,
            S = o.push,
            I = o.slice,
            L = f.toString,
            B = f.hasOwnProperty,
            U = Array.isArray,
            X = Object.keys,
            ie = A.bind,
            K = Object.create,
            re = function() {},
            m = function(l) {
                if (l instanceof m) return l;
                if (!(this instanceof m)) return new m(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = m), e._ = m, m.VERSION = "1.8.3";
        var M = function(l, g, x) {
                if (g === void 0) return l;
                switch (x == null ? 3 : x) {
                    case 1:
                        return function(O) {
                            return l.call(g, O)
                        };
                    case 2:
                        return function(O, R) {
                            return l.call(g, O, R)
                        };
                    case 3:
                        return function(O, R, N) {
                            return l.call(g, O, R, N)
                        };
                    case 4:
                        return function(O, R, N, te) {
                            return l.call(g, O, R, N, te)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            W = function(l, g, x) {
                return l == null ? m.identity : m.isFunction(l) ? M(l, g, x) : m.isObject(l) ? m.matcher(l) : m.property(l)
            };
        m.iteratee = function(l, g) {
            return W(l, g, 1 / 0)
        };
        var ae = function(l, g) {
                return function(x) {
                    var O = arguments.length;
                    if (O < 2 || x == null) return x;
                    for (var R = 1; R < O; R++)
                        for (var N = arguments[R], te = l(N), Se = te.length, he = 0; he < Se; he++) {
                            var Be = te[he];
                            (!g || x[Be] === void 0) && (x[Be] = N[Be])
                        }
                    return x
                }
            },
            se = function(l) {
                if (!m.isObject(l)) return {};
                if (K) return K(l);
                re.prototype = l;
                var g = new re;
                return re.prototype = null, g
            },
            me = function(l) {
                return function(g) {
                    return g == null ? void 0 : g[l]
                }
            },
            d = Math.pow(2, 53) - 1,
            Ee = me("length"),
            _e = function(l) {
                var g = Ee(l);
                return typeof g == "number" && g >= 0 && g <= d
            };
        m.each = m.forEach = function(l, g, x) {
            g = M(g, x);
            var O, R;
            if (_e(l))
                for (O = 0, R = l.length; O < R; O++) g(l[O], O, l);
            else {
                var N = m.keys(l);
                for (O = 0, R = N.length; O < R; O++) g(l[N[O]], N[O], l)
            }
            return l
        }, m.map = m.collect = function(l, g, x) {
            g = W(g, x);
            for (var O = !_e(l) && m.keys(l), R = (O || l).length, N = Array(R), te = 0; te < R; te++) {
                var Se = O ? O[te] : te;
                N[te] = g(l[Se], Se, l)
            }
            return N
        };

        function Me(l) {
            function g(x, O, R, N, te, Se) {
                for (; te >= 0 && te < Se; te += l) {
                    var he = N ? N[te] : te;
                    R = O(R, x[he], he, x)
                }
                return R
            }
            return function(x, O, R, N) {
                O = M(O, N, 4);
                var te = !_e(x) && m.keys(x),
                    Se = (te || x).length,
                    he = l > 0 ? 0 : Se - 1;
                return arguments.length < 3 && (R = x[te ? te[he] : he], he += l), g(x, O, R, te, he, Se)
            }
        }
        m.reduce = m.foldl = m.inject = Me(1), m.reduceRight = m.foldr = Me(-1), m.find = m.detect = function(l, g, x) {
            var O;
            if (_e(l) ? O = m.findIndex(l, g, x) : O = m.findKey(l, g, x), O !== void 0 && O !== -1) return l[O]
        }, m.filter = m.select = function(l, g, x) {
            var O = [];
            return g = W(g, x), m.each(l, function(R, N, te) {
                g(R, N, te) && O.push(R)
            }), O
        }, m.reject = function(l, g, x) {
            return m.filter(l, m.negate(W(g)), x)
        }, m.every = m.all = function(l, g, x) {
            g = W(g, x);
            for (var O = !_e(l) && m.keys(l), R = (O || l).length, N = 0; N < R; N++) {
                var te = O ? O[N] : N;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, m.some = m.any = function(l, g, x) {
            g = W(g, x);
            for (var O = !_e(l) && m.keys(l), R = (O || l).length, N = 0; N < R; N++) {
                var te = O ? O[N] : N;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, m.contains = m.includes = m.include = function(l, g, x, O) {
            return _e(l) || (l = m.values(l)), (typeof x != "number" || O) && (x = 0), m.indexOf(l, g, x) >= 0
        }, m.invoke = function(l, g) {
            var x = I.call(arguments, 2),
                O = m.isFunction(g);
            return m.map(l, function(R) {
                var N = O ? g : R[g];
                return N == null ? N : N.apply(R, x)
            })
        }, m.pluck = function(l, g) {
            return m.map(l, m.property(g))
        }, m.where = function(l, g) {
            return m.filter(l, m.matcher(g))
        }, m.findWhere = function(l, g) {
            return m.find(l, m.matcher(g))
        }, m.max = function(l, g, x) {
            var O = -1 / 0,
                R = -1 / 0,
                N, te;
            if (g == null && l != null) {
                l = _e(l) ? l : m.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N > O && (O = N)
            } else g = W(g, x), m.each(l, function(Be, De, nt) {
                te = g(Be, De, nt), (te > R || te === -1 / 0 && O === -1 / 0) && (O = Be, R = te)
            });
            return O
        }, m.min = function(l, g, x) {
            var O = 1 / 0,
                R = 1 / 0,
                N, te;
            if (g == null && l != null) {
                l = _e(l) ? l : m.values(l);
                for (var Se = 0, he = l.length; Se < he; Se++) N = l[Se], N < O && (O = N)
            } else g = W(g, x), m.each(l, function(Be, De, nt) {
                te = g(Be, De, nt), (te < R || te === 1 / 0 && O === 1 / 0) && (O = Be, R = te)
            });
            return O
        }, m.shuffle = function(l) {
            for (var g = _e(l) ? l : m.values(l), x = g.length, O = Array(x), R = 0, N; R < x; R++) N = m.random(0, R), N !== R && (O[R] = O[N]), O[N] = g[R];
            return O
        }, m.sample = function(l, g, x) {
            return g == null || x ? (_e(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
        }, m.sortBy = function(l, g, x) {
            return g = W(g, x), m.pluck(m.map(l, function(O, R, N) {
                return {
                    value: O,
                    index: R,
                    criteria: g(O, R, N)
                }
            }).sort(function(O, R) {
                var N = O.criteria,
                    te = R.criteria;
                if (N !== te) {
                    if (N > te || N === void 0) return 1;
                    if (N < te || te === void 0) return -1
                }
                return O.index - R.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, x, O) {
                var R = {};
                return x = W(x, O), m.each(g, function(N, te) {
                    var Se = x(N, te, g);
                    l(R, N, Se)
                }), R
            }
        };
        m.groupBy = lt(function(l, g, x) {
            m.has(l, x) ? l[x].push(g) : l[x] = [g]
        }), m.indexBy = lt(function(l, g, x) {
            l[x] = g
        }), m.countBy = lt(function(l, g, x) {
            m.has(l, x) ? l[x]++ : l[x] = 1
        }), m.toArray = function(l) {
            return l ? m.isArray(l) ? I.call(l) : _e(l) ? m.map(l, m.identity) : m.values(l) : []
        }, m.size = function(l) {
            return l == null ? 0 : _e(l) ? l.length : m.keys(l).length
        }, m.partition = function(l, g, x) {
            g = W(g, x);
            var O = [],
                R = [];
            return m.each(l, function(N, te, Se) {
                (g(N, te, Se) ? O : R).push(N)
            }), [O, R]
        }, m.first = m.head = m.take = function(l, g, x) {
            if (l != null) return g == null || x ? l[0] : m.initial(l, l.length - g)
        }, m.initial = function(l, g, x) {
            return I.call(l, 0, Math.max(0, l.length - (g == null || x ? 1 : g)))
        }, m.last = function(l, g, x) {
            if (l != null) return g == null || x ? l[l.length - 1] : m.rest(l, Math.max(0, l.length - g))
        }, m.rest = m.tail = m.drop = function(l, g, x) {
            return I.call(l, g == null || x ? 1 : g)
        }, m.compact = function(l) {
            return m.filter(l, m.identity)
        };
        var Ve = function(l, g, x, O) {
            for (var R = [], N = 0, te = O || 0, Se = Ee(l); te < Se; te++) {
                var he = l[te];
                if (_e(he) && (m.isArray(he) || m.isArguments(he))) {
                    g || (he = Ve(he, g, x));
                    var Be = 0,
                        De = he.length;
                    for (R.length += De; Be < De;) R[N++] = he[Be++]
                } else x || (R[N++] = he)
            }
            return R
        };
        m.flatten = function(l, g) {
            return Ve(l, g, !1)
        }, m.without = function(l) {
            return m.difference(l, I.call(arguments, 1))
        }, m.uniq = m.unique = function(l, g, x, O) {
            m.isBoolean(g) || (O = x, x = g, g = !1), x != null && (x = W(x, O));
            for (var R = [], N = [], te = 0, Se = Ee(l); te < Se; te++) {
                var he = l[te],
                    Be = x ? x(he, te, l) : he;
                g ? ((!te || N !== Be) && R.push(he), N = Be) : x ? m.contains(N, Be) || (N.push(Be), R.push(he)) : m.contains(R, he) || R.push(he)
            }
            return R
        }, m.union = function() {
            return m.uniq(Ve(arguments, !0, !0))
        }, m.intersection = function(l) {
            for (var g = [], x = arguments.length, O = 0, R = Ee(l); O < R; O++) {
                var N = l[O];
                if (!m.contains(g, N)) {
                    for (var te = 1; te < x && m.contains(arguments[te], N); te++);
                    te === x && g.push(N)
                }
            }
            return g
        }, m.difference = function(l) {
            var g = Ve(arguments, !0, !0, 1);
            return m.filter(l, function(x) {
                return !m.contains(g, x)
            })
        }, m.zip = function() {
            return m.unzip(arguments)
        }, m.unzip = function(l) {
            for (var g = l && m.max(l, Ee).length || 0, x = Array(g), O = 0; O < g; O++) x[O] = m.pluck(l, O);
            return x
        }, m.object = function(l, g) {
            for (var x = {}, O = 0, R = Ee(l); O < R; O++) g ? x[l[O]] = g[O] : x[l[O][0]] = l[O][1];
            return x
        };

        function J(l) {
            return function(g, x, O) {
                x = W(x, O);
                for (var R = Ee(g), N = l > 0 ? 0 : R - 1; N >= 0 && N < R; N += l)
                    if (x(g[N], N, g)) return N;
                return -1
            }
        }
        m.findIndex = J(1), m.findLastIndex = J(-1), m.sortedIndex = function(l, g, x, O) {
            x = W(x, O, 1);
            for (var R = x(g), N = 0, te = Ee(l); N < te;) {
                var Se = Math.floor((N + te) / 2);
                x(l[Se]) < R ? N = Se + 1 : te = Se
            }
            return N
        };

        function qe(l, g, x) {
            return function(O, R, N) {
                var te = 0,
                    Se = Ee(O);
                if (typeof N == "number") l > 0 ? te = N >= 0 ? N : Math.max(N + Se, te) : Se = N >= 0 ? Math.min(N + 1, Se) : N + Se + 1;
                else if (x && N && Se) return N = x(O, R), O[N] === R ? N : -1;
                if (R !== R) return N = g(I.call(O, te, Se), m.isNaN), N >= 0 ? N + te : -1;
                for (N = l > 0 ? te : Se - 1; N >= 0 && N < Se; N += l)
                    if (O[N] === R) return N;
                return -1
            }
        }
        m.indexOf = qe(1, m.findIndex, m.sortedIndex), m.lastIndexOf = qe(-1, m.findLastIndex), m.range = function(l, g, x) {
            g == null && (g = l || 0, l = 0), x = x || 1;
            for (var O = Math.max(Math.ceil((g - l) / x), 0), R = Array(O), N = 0; N < O; N++, l += x) R[N] = l;
            return R
        };
        var H = function(l, g, x, O, R) {
            if (!(O instanceof g)) return l.apply(x, R);
            var N = se(l.prototype),
                te = l.apply(N, R);
            return m.isObject(te) ? te : N
        };
        m.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, I.call(arguments, 1));
            if (!m.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var x = I.call(arguments, 2),
                O = function() {
                    return H(l, O, g, this, x.concat(I.call(arguments)))
                };
            return O
        }, m.partial = function(l) {
            var g = I.call(arguments, 1),
                x = function() {
                    for (var O = 0, R = g.length, N = Array(R), te = 0; te < R; te++) N[te] = g[te] === m ? arguments[O++] : g[te];
                    for (; O < arguments.length;) N.push(arguments[O++]);
                    return H(l, x, this, this, N)
                };
            return x
        }, m.bindAll = function(l) {
            var g, x = arguments.length,
                O;
            if (x <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < x; g++) O = arguments[g], l[O] = m.bind(l[O], l);
            return l
        }, m.memoize = function(l, g) {
            var x = function(O) {
                var R = x.cache,
                    N = "" + (g ? g.apply(this, arguments) : O);
                return m.has(R, N) || (R[N] = l.apply(this, arguments)), R[N]
            };
            return x.cache = {}, x
        }, m.delay = function(l, g) {
            var x = I.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, x)
            }, g)
        }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(l, g, x) {
            var O, R, N, te = null,
                Se = 0;
            x || (x = {});
            var he = function() {
                Se = x.leading === !1 ? 0 : m.now(), te = null, N = l.apply(O, R), te || (O = R = null)
            };
            return function() {
                var Be = m.now();
                !Se && x.leading === !1 && (Se = Be);
                var De = g - (Be - Se);
                return O = this, R = arguments, De <= 0 || De > g ? (te && (clearTimeout(te), te = null), Se = Be, N = l.apply(O, R), te || (O = R = null)) : !te && x.trailing !== !1 && (te = setTimeout(he, De)), N
            }
        }, m.debounce = function(l, g, x) {
            var O, R, N, te, Se, he = function() {
                var Be = m.now() - te;
                Be < g && Be >= 0 ? O = setTimeout(he, g - Be) : (O = null, x || (Se = l.apply(N, R), O || (N = R = null)))
            };
            return function() {
                N = this, R = arguments, te = m.now();
                var Be = x && !O;
                return O || (O = setTimeout(he, g)), Be && (Se = l.apply(N, R), N = R = null), Se
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
                for (var x = g, O = l[g].apply(this, arguments); x--;) O = l[x].call(this, O);
                return O
            }
        }, m.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, m.before = function(l, g) {
            var x;
            return function() {
                return --l > 0 && (x = g.apply(this, arguments)), l <= 1 && (g = null), x
            }
        }, m.once = m.partial(m.before, 2);
        var oe = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            ke = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function ye(l, g) {
            var x = ke.length,
                O = l.constructor,
                R = m.isFunction(O) && O.prototype || f,
                N = "constructor";
            for (m.has(l, N) && !m.contains(g, N) && g.push(N); x--;) N = ke[x], N in l && l[N] !== R[N] && !m.contains(g, N) && g.push(N)
        }
        m.keys = function(l) {
            if (!m.isObject(l)) return [];
            if (X) return X(l);
            var g = [];
            for (var x in l) m.has(l, x) && g.push(x);
            return oe && ye(l, g), g
        }, m.allKeys = function(l) {
            if (!m.isObject(l)) return [];
            var g = [];
            for (var x in l) g.push(x);
            return oe && ye(l, g), g
        }, m.values = function(l) {
            for (var g = m.keys(l), x = g.length, O = Array(x), R = 0; R < x; R++) O[R] = l[g[R]];
            return O
        }, m.mapObject = function(l, g, x) {
            g = W(g, x);
            for (var O = m.keys(l), R = O.length, N = {}, te, Se = 0; Se < R; Se++) te = O[Se], N[te] = g(l[te], te, l);
            return N
        }, m.pairs = function(l) {
            for (var g = m.keys(l), x = g.length, O = Array(x), R = 0; R < x; R++) O[R] = [g[R], l[g[R]]];
            return O
        }, m.invert = function(l) {
            for (var g = {}, x = m.keys(l), O = 0, R = x.length; O < R; O++) g[l[x[O]]] = x[O];
            return g
        }, m.functions = m.methods = function(l) {
            var g = [];
            for (var x in l) m.isFunction(l[x]) && g.push(x);
            return g.sort()
        }, m.extend = ae(m.allKeys), m.extendOwn = m.assign = ae(m.keys), m.findKey = function(l, g, x) {
            g = W(g, x);
            for (var O = m.keys(l), R, N = 0, te = O.length; N < te; N++)
                if (R = O[N], g(l[R], R, l)) return R
        }, m.pick = function(l, g, x) {
            var O = {},
                R = l,
                N, te;
            if (R == null) return O;
            m.isFunction(g) ? (te = m.allKeys(R), N = M(g, x)) : (te = Ve(arguments, !1, !1, 1), N = function(nt, bt, rn) {
                return bt in rn
            }, R = Object(R));
            for (var Se = 0, he = te.length; Se < he; Se++) {
                var Be = te[Se],
                    De = R[Be];
                N(De, Be, R) && (O[Be] = De)
            }
            return O
        }, m.omit = function(l, g, x) {
            if (m.isFunction(g)) g = m.negate(g);
            else {
                var O = m.map(Ve(arguments, !1, !1, 1), String);
                g = function(R, N) {
                    return !m.contains(O, N)
                }
            }
            return m.pick(l, g, x)
        }, m.defaults = ae(m.allKeys, !0), m.create = function(l, g) {
            var x = se(l);
            return g && m.extendOwn(x, g), x
        }, m.clone = function(l) {
            return m.isObject(l) ? m.isArray(l) ? l.slice() : m.extend({}, l) : l
        }, m.tap = function(l, g) {
            return g(l), l
        }, m.isMatch = function(l, g) {
            var x = m.keys(g),
                O = x.length;
            if (l == null) return !O;
            for (var R = Object(l), N = 0; N < O; N++) {
                var te = x[N];
                if (g[te] !== R[te] || !(te in R)) return !1
            }
            return !0
        };
        var ve = function(l, g, x, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof m && (l = l._wrapped), g instanceof m && (g = g._wrapped);
            var R = L.call(l);
            if (R !== L.call(g)) return !1;
            switch (R) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + g;
                case "[object Number]":
                    return +l != +l ? +g != +g : +l == 0 ? 1 / +l === 1 / g : +l == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +g
            }
            var N = R === "[object Array]";
            if (!N) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    Se = g.constructor;
                if (te !== Se && !(m.isFunction(te) && te instanceof te && m.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
            }
            x = x || [], O = O || [];
            for (var he = x.length; he--;)
                if (x[he] === l) return O[he] === g;
            if (x.push(l), O.push(g), N) {
                if (he = l.length, he !== g.length) return !1;
                for (; he--;)
                    if (!ve(l[he], g[he], x, O)) return !1
            } else {
                var Be = m.keys(l),
                    De;
                if (he = Be.length, m.keys(g).length !== he) return !1;
                for (; he--;)
                    if (De = Be[he], !(m.has(g, De) && ve(l[De], g[De], x, O))) return !1
            }
            return x.pop(), O.pop(), !0
        };
        m.isEqual = function(l, g) {
            return ve(l, g)
        }, m.isEmpty = function(l) {
            return l == null ? !0 : _e(l) && (m.isArray(l) || m.isString(l) || m.isArguments(l)) ? l.length === 0 : m.keys(l).length === 0
        }, m.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, m.isArray = U || function(l) {
            return L.call(l) === "[object Array]"
        }, m.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            m["is" + l] = function(g) {
                return L.call(g) === "[object " + l + "]"
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
            return l === !0 || l === !1 || L.call(l) === "[object Boolean]"
        }, m.isNull = function(l) {
            return l === null
        }, m.isUndefined = function(l) {
            return l === void 0
        }, m.has = function(l, g) {
            return l != null && B.call(l, g)
        }, m.noConflict = function() {
            return n._ = i, this
        }, m.identity = function(l) {
            return l
        }, m.constant = function(l) {
            return function() {
                return l
            }
        }, m.noop = function() {}, m.property = me, m.propertyOf = function(l) {
            return l == null ? function() {} : function(g) {
                return l[g]
            }
        }, m.matcher = m.matches = function(l) {
            return l = m.extendOwn({}, l),
                function(g) {
                    return m.isMatch(g, l)
                }
        }, m.times = function(l, g, x) {
            var O = Array(Math.max(0, l));
            g = M(g, x, 1);
            for (var R = 0; R < l; R++) O[R] = g(R);
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
            xe = m.invert(ue),
            Ie = function(l) {
                var g = function(N) {
                        return l[N]
                    },
                    x = "(?:" + m.keys(l).join("|") + ")",
                    O = RegExp(x),
                    R = RegExp(x, "g");
                return function(N) {
                    return N = N == null ? "" : "" + N, O.test(N) ? N.replace(R, g) : N
                }
            };
        m.escape = Ie(ue), m.unescape = Ie(xe), m.result = function(l, g, x) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = x), m.isFunction(O) ? O.call(l) : O
        };
        var Ue = 0;
        m.uniqueId = function(l) {
            var g = ++Ue + "";
            return l ? l + g : g
        }, m.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var Je = /(.)^/,
            dt = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Vt = /\\|'|\r|\n|\u2028|\u2029/g,
            Yt = function(l) {
                return "\\" + dt[l]
            };
        m.template = function(l, g, x) {
            !g && x && (g = x), g = m.defaults({}, g, m.templateSettings);
            var O = RegExp([(g.escape || Je).source, (g.interpolate || Je).source, (g.evaluate || Je).source].join("|") + "|$", "g"),
                R = 0,
                N = "__p+='";
            l.replace(O, function(Be, De, nt, bt, rn) {
                return N += l.slice(R, rn).replace(Vt, Yt), R = rn + Be.length, De ? N += `'+
((__t=(` + De + `))==null?'':_.escape(__t))+
'` : nt ? N += `'+
((__t=(` + nt + `))==null?'':__t)+
'` : bt && (N += `';
` + bt + `
__p+='`), Be
            }), N += `';
`, g.variable || (N = `with(obj||{}){
` + N + `}
`), N = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + N + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", N)
            } catch (Be) {
                throw Be.source = N, Be
            }
            var Se = function(Be) {
                    return te.call(this, Be, m)
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
                var x = m[g] = l[g];
                m.prototype[g] = function() {
                    var O = [this._wrapped];
                    return S.apply(O, arguments), E(this, x.apply(m, O))
                }
            })
        }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = o[l];
            m.prototype[l] = function() {
                var x = this._wrapped;
                return g.apply(x, arguments), (l === "shift" || l === "splice") && x.length === 0 && delete x[0], E(this, x)
            }
        }), m.each(["concat", "join", "slice"], function(l) {
            var g = o[l];
            m.prototype[l] = function() {
                return E(this, g.apply(this._wrapped, arguments))
            }
        }), m.prototype.value = function() {
            return this._wrapped
        }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(mt)
})(Mi, Mi.exports);
const at = Mi.exports;
var Pa = {
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
    })(typeof window < "u" ? window : mt, function(e, n) {
        var i = [],
            o = Object.getPrototypeOf,
            f = i.slice,
            A = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            S = i.push,
            I = i.indexOf,
            L = {},
            B = L.toString,
            U = L.hasOwnProperty,
            X = U.toString,
            ie = X.call(Object),
            K = {},
            re = function(s) {
                return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
            },
            m = function(s) {
                return s != null && s === s.window
            },
            M = e.document,
            W = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function ae(r, s, u) {
            u = u || M;
            var p, y, C = u.createElement("script");
            if (C.text = r, s)
                for (p in W) y = s[p] || s.getAttribute && s.getAttribute(p), y && C.setAttribute(p, y);
            u.head.appendChild(C).parentNode.removeChild(C)
        }

        function se(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? L[B.call(r)] || "object" : typeof r
        }
        var me = "3.6.0",
            d = function(r, s) {
                return new d.fn.init(r, s)
            };
        d.fn = d.prototype = {
            jquery: me,
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
            var r, s, u, p, y, C, k = arguments[0] || {},
                G = 1,
                F = arguments.length,
                $ = !1;
            for (typeof k == "boolean" && ($ = k, k = arguments[G] || {}, G++), typeof k != "object" && !re(k) && (k = {}), G === F && (k = this, G--); G < F; G++)
                if ((r = arguments[G]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || k === p) && ($ && p && (d.isPlainObject(p) || (y = Array.isArray(p))) ? (u = k[s], y && !Array.isArray(u) ? C = [] : !y && !d.isPlainObject(u) ? C = {} : C = u, y = !1, k[s] = d.extend($, C, p)) : p !== void 0 && (k[s] = p));
            return k
        }, d.extend({
            expando: "jQuery" + (me + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(r) {
                throw new Error(r)
            },
            noop: function() {},
            isPlainObject: function(r) {
                var s, u;
                return !r || B.call(r) !== "[object Object]" ? !1 : (s = o(r), s ? (u = U.call(s, "constructor") && s.constructor, typeof u == "function" && X.call(u) === ie) : !0)
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
                return s == null ? -1 : I.call(s, r, u)
            },
            merge: function(r, s) {
                for (var u = +s.length, p = 0, y = r.length; p < u; p++) r[y++] = s[p];
                return r.length = y, r
            },
            grep: function(r, s, u) {
                for (var p, y = [], C = 0, k = r.length, G = !u; C < k; C++) p = !s(r[C], C), p !== G && y.push(r[C]);
                return y
            },
            map: function(r, s, u) {
                var p, y, C = 0,
                    k = [];
                if (Ee(r))
                    for (p = r.length; C < p; C++) y = s(r[C], C, u), y != null && k.push(y);
                else
                    for (C in r) y = s(r[C], C, u), y != null && k.push(y);
                return A(k)
            },
            guid: 1,
            support: K
        }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            L["[object " + s + "]"] = s.toLowerCase()
        });

        function Ee(r) {
            var s = !!r && "length" in r && r.length,
                u = se(r);
            return re(r) || m(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var _e = function(r) {
            var s, u, p, y, C, k, G, F, $, le, we, ne, ce, Ye, rt, je, Gt, Pt, un, xt = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Bt = Ki(),
                xi = Ki(),
                zi = Ki(),
                hn = Ki(),
                Jn = function(T, q) {
                    return T === q && (we = !0), 0
                },
                Xn = {}.hasOwnProperty,
                an = [],
                Dn = an.pop,
                mn = an.push,
                bn = an.push,
                xs = an.slice,
                Zn = function(T, q) {
                    for (var Q = 0, de = T.length; Q < de; Q++)
                        if (T[Q] === q) return Q;
                    return -1
                },
                qr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                $n = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                Ss = "\\[" + gt + "*(" + $n + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + $n + "))|)" + gt + "*\\]",
                Gr = ":(" + $n + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ss + ")*)|.*)\\)|)",
                Is = new RegExp(gt + "+", "g"),
                Si = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                ks = new RegExp("^" + gt + "*," + gt + "*"),
                _s = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                Uo = new RegExp(gt + "|>"),
                jo = new RegExp(Gr),
                qo = new RegExp("^" + $n + "$"),
                Qi = {
                    ID: new RegExp("^#(" + $n + ")"),
                    CLASS: new RegExp("^\\.(" + $n + ")"),
                    TAG: new RegExp("^(" + $n + "|[*])"),
                    ATTR: new RegExp("^" + Ss),
                    PSEUDO: new RegExp("^" + Gr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + qr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                Go = /HTML$/i,
                Fo = /^(?:input|select|textarea|button)$/i,
                Ho = /^h\d$/i,
                Ii = /^[^{]+\{\s*\[native \w/,
                Yo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Fr = /[+~]/,
                kn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                Cn = function(T, q) {
                    var Q = "0x" + T.slice(1) - 65536;
                    return q || (Q < 0 ? String.fromCharCode(Q + 65536) : String.fromCharCode(Q >> 10 | 55296, Q & 1023 | 56320))
                },
                Hr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Os = function(T, q) {
                    return q ? T === "\0" ? "\uFFFD" : T.slice(0, -1) + "\\" + T.charCodeAt(T.length - 1).toString(16) + " " : "\\" + T
                },
                Ts = function() {
                    ne()
                },
                Wo = $i(function(T) {
                    return T.disabled === !0 && T.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                bn.apply(an = xs.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                bn = {
                    apply: an.length ? function(q, Q) {
                        mn.apply(q, xs.call(Q))
                    } : function(q, Q) {
                        for (var de = q.length, ee = 0; q[de++] = Q[ee++];);
                        q.length = de - 1
                    }
                }
            }

            function St(T, q, Q, de) {
                var ee, Ae, Ce, Oe, Re, Ge, He, Qe = q && q.ownerDocument,
                    ht = q ? q.nodeType : 9;
                if (Q = Q || [], typeof T != "string" || !T || ht !== 1 && ht !== 9 && ht !== 11) return Q;
                if (!de && (ne(q), q = q || ce, rt)) {
                    if (ht !== 11 && (Re = Yo.exec(T)))
                        if (ee = Re[1]) {
                            if (ht === 9)
                                if (Ce = q.getElementById(ee)) {
                                    if (Ce.id === ee) return Q.push(Ce), Q
                                } else return Q;
                            else if (Qe && (Ce = Qe.getElementById(ee)) && un(q, Ce) && Ce.id === ee) return Q.push(Ce), Q
                        } else {
                            if (Re[2]) return bn.apply(Q, q.getElementsByTagName(T)), Q;
                            if ((ee = Re[3]) && u.getElementsByClassName && q.getElementsByClassName) return bn.apply(Q, q.getElementsByClassName(ee)), Q
                        } if (u.qsa && !hn[T + " "] && (!je || !je.test(T)) && (ht !== 1 || q.nodeName.toLowerCase() !== "object")) {
                        if (He = T, Qe = q, ht === 1 && (Uo.test(T) || _s.test(T))) {
                            for (Qe = Fr.test(T) && Yr(q.parentNode) || q, (Qe !== q || !u.scope) && ((Oe = q.getAttribute("id")) ? Oe = Oe.replace(Hr, Os) : q.setAttribute("id", Oe = xt)), Ge = k(T), Ae = Ge.length; Ae--;) Ge[Ae] = (Oe ? "#" + Oe : ":scope") + " " + Zi(Ge[Ae]);
                            He = Ge.join(",")
                        }
                        try {
                            return bn.apply(Q, Qe.querySelectorAll(He)), Q
                        } catch {
                            hn(T, !0)
                        } finally {
                            Oe === xt && q.removeAttribute("id")
                        }
                    }
                }
                return F(T.replace(Si, "$1"), q, Q, de)
            }

            function Ki() {
                var T = [];

                function q(Q, de) {
                    return T.push(Q + " ") > p.cacheLength && delete q[T.shift()], q[Q + " "] = de
                }
                return q
            }

            function dn(T) {
                return T[xt] = !0, T
            }

            function vn(T) {
                var q = ce.createElement("fieldset");
                try {
                    return !!T(q)
                } catch {
                    return !1
                } finally {
                    q.parentNode && q.parentNode.removeChild(q), q = null
                }
            }

            function Ji(T, q) {
                for (var Q = T.split("|"), de = Q.length; de--;) p.attrHandle[Q[de]] = q
            }

            function Xi(T, q) {
                var Q = q && T,
                    de = Q && T.nodeType === 1 && q.nodeType === 1 && T.sourceIndex - q.sourceIndex;
                if (de) return de;
                if (Q) {
                    for (; Q = Q.nextSibling;)
                        if (Q === q) return -1
                }
                return T ? 1 : -1
            }

            function zo(T) {
                return function(q) {
                    var Q = q.nodeName.toLowerCase();
                    return Q === "input" && q.type === T
                }
            }

            function Qo(T) {
                return function(q) {
                    var Q = q.nodeName.toLowerCase();
                    return (Q === "input" || Q === "button") && q.type === T
                }
            }

            function Ls(T) {
                return function(q) {
                    return "form" in q ? q.parentNode && q.disabled === !1 ? "label" in q ? "label" in q.parentNode ? q.parentNode.disabled === T : q.disabled === T : q.isDisabled === T || q.isDisabled !== !T && Wo(q) === T : q.disabled === T : "label" in q ? q.disabled === T : !1
                }
            }

            function _n(T) {
                return dn(function(q) {
                    return q = +q, dn(function(Q, de) {
                        for (var ee, Ae = T([], Q.length, q), Ce = Ae.length; Ce--;) Q[ee = Ae[Ce]] && (Q[ee] = !(de[ee] = Q[ee]))
                    })
                })
            }

            function Yr(T) {
                return T && typeof T.getElementsByTagName < "u" && T
            }
            u = St.support = {}, C = St.isXML = function(T) {
                var q = T && T.namespaceURI,
                    Q = T && (T.ownerDocument || T).documentElement;
                return !Go.test(q || Q && Q.nodeName || "HTML")
            }, ne = St.setDocument = function(T) {
                var q, Q, de = T ? T.ownerDocument || T : et;
                return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, Ye = ce.documentElement, rt = !C(ce), et != ce && (Q = ce.defaultView) && Q.top !== Q && (Q.addEventListener ? Q.addEventListener("unload", Ts, !1) : Q.attachEvent && Q.attachEvent("onunload", Ts)), u.scope = vn(function(ee) {
                    return Ye.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = vn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = vn(function(ee) {
                    return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = Ii.test(ce.getElementsByClassName), u.getById = vn(function(ee) {
                    return Ye.appendChild(ee).id = xt, !ce.getElementsByName || !ce.getElementsByName(xt).length
                }), u.getById ? (p.filter.ID = function(ee) {
                    var Ae = ee.replace(kn, Cn);
                    return function(Ce) {
                        return Ce.getAttribute("id") === Ae
                    }
                }, p.find.ID = function(ee, Ae) {
                    if (typeof Ae.getElementById < "u" && rt) {
                        var Ce = Ae.getElementById(ee);
                        return Ce ? [Ce] : []
                    }
                }) : (p.filter.ID = function(ee) {
                    var Ae = ee.replace(kn, Cn);
                    return function(Ce) {
                        var Oe = typeof Ce.getAttributeNode < "u" && Ce.getAttributeNode("id");
                        return Oe && Oe.value === Ae
                    }
                }, p.find.ID = function(ee, Ae) {
                    if (typeof Ae.getElementById < "u" && rt) {
                        var Ce, Oe, Re, Ge = Ae.getElementById(ee);
                        if (Ge) {
                            if (Ce = Ge.getAttributeNode("id"), Ce && Ce.value === ee) return [Ge];
                            for (Re = Ae.getElementsByName(ee), Oe = 0; Ge = Re[Oe++];)
                                if (Ce = Ge.getAttributeNode("id"), Ce && Ce.value === ee) return [Ge]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(ee, Ae) {
                    if (typeof Ae.getElementsByTagName < "u") return Ae.getElementsByTagName(ee);
                    if (u.qsa) return Ae.querySelectorAll(ee)
                } : function(ee, Ae) {
                    var Ce, Oe = [],
                        Re = 0,
                        Ge = Ae.getElementsByTagName(ee);
                    if (ee === "*") {
                        for (; Ce = Ge[Re++];) Ce.nodeType === 1 && Oe.push(Ce);
                        return Oe
                    }
                    return Ge
                }, p.find.CLASS = u.getElementsByClassName && function(ee, Ae) {
                    if (typeof Ae.getElementsByClassName < "u" && rt) return Ae.getElementsByClassName(ee)
                }, Gt = [], je = [], (u.qsa = Ii.test(ce.querySelectorAll)) && (vn(function(ee) {
                    var Ae;
                    Ye.appendChild(ee).innerHTML = "<a id='" + xt + "'></a><select id='" + xt + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + qr + ")"), ee.querySelectorAll("[id~=" + xt + "-]").length || je.push("~="), Ae = ce.createElement("input"), Ae.setAttribute("name", ""), ee.appendChild(Ae), ee.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || je.push(":checked"), ee.querySelectorAll("a#" + xt + "+*").length || je.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                }), vn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var Ae = ce.createElement("input");
                    Ae.setAttribute("type", "hidden"), ee.appendChild(Ae).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), Ye.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), je.push(",.*:")
                })), (u.matchesSelector = Ii.test(Pt = Ye.matches || Ye.webkitMatchesSelector || Ye.mozMatchesSelector || Ye.oMatchesSelector || Ye.msMatchesSelector)) && vn(function(ee) {
                    u.disconnectedMatch = Pt.call(ee, "*"), Pt.call(ee, "[s!='']:x"), Gt.push("!=", Gr)
                }), je = je.length && new RegExp(je.join("|")), Gt = Gt.length && new RegExp(Gt.join("|")), q = Ii.test(Ye.compareDocumentPosition), un = q || Ii.test(Ye.contains) ? function(ee, Ae) {
                    var Ce = ee.nodeType === 9 ? ee.documentElement : ee,
                        Oe = Ae && Ae.parentNode;
                    return ee === Oe || !!(Oe && Oe.nodeType === 1 && (Ce.contains ? Ce.contains(Oe) : ee.compareDocumentPosition && ee.compareDocumentPosition(Oe) & 16))
                } : function(ee, Ae) {
                    if (Ae) {
                        for (; Ae = Ae.parentNode;)
                            if (Ae === ee) return !0
                    }
                    return !1
                }, Jn = q ? function(ee, Ae) {
                    if (ee === Ae) return we = !0, 0;
                    var Ce = !ee.compareDocumentPosition - !Ae.compareDocumentPosition;
                    return Ce || (Ce = (ee.ownerDocument || ee) == (Ae.ownerDocument || Ae) ? ee.compareDocumentPosition(Ae) : 1, Ce & 1 || !u.sortDetached && Ae.compareDocumentPosition(ee) === Ce ? ee == ce || ee.ownerDocument == et && un(et, ee) ? -1 : Ae == ce || Ae.ownerDocument == et && un(et, Ae) ? 1 : le ? Zn(le, ee) - Zn(le, Ae) : 0 : Ce & 4 ? -1 : 1)
                } : function(ee, Ae) {
                    if (ee === Ae) return we = !0, 0;
                    var Ce, Oe = 0,
                        Re = ee.parentNode,
                        Ge = Ae.parentNode,
                        He = [ee],
                        Qe = [Ae];
                    if (!Re || !Ge) return ee == ce ? -1 : Ae == ce ? 1 : Re ? -1 : Ge ? 1 : le ? Zn(le, ee) - Zn(le, Ae) : 0;
                    if (Re === Ge) return Xi(ee, Ae);
                    for (Ce = ee; Ce = Ce.parentNode;) He.unshift(Ce);
                    for (Ce = Ae; Ce = Ce.parentNode;) Qe.unshift(Ce);
                    for (; He[Oe] === Qe[Oe];) Oe++;
                    return Oe ? Xi(He[Oe], Qe[Oe]) : He[Oe] == et ? -1 : Qe[Oe] == et ? 1 : 0
                }), ce
            }, St.matches = function(T, q) {
                return St(T, null, null, q)
            }, St.matchesSelector = function(T, q) {
                if (ne(T), u.matchesSelector && rt && !hn[q + " "] && (!Gt || !Gt.test(q)) && (!je || !je.test(q))) try {
                    var Q = Pt.call(T, q);
                    if (Q || u.disconnectedMatch || T.document && T.document.nodeType !== 11) return Q
                } catch {
                    hn(q, !0)
                }
                return St(q, ce, null, [T]).length > 0
            }, St.contains = function(T, q) {
                return (T.ownerDocument || T) != ce && ne(T), un(T, q)
            }, St.attr = function(T, q) {
                (T.ownerDocument || T) != ce && ne(T);
                var Q = p.attrHandle[q.toLowerCase()],
                    de = Q && Xn.call(p.attrHandle, q.toLowerCase()) ? Q(T, q, !rt) : void 0;
                return de !== void 0 ? de : u.attributes || !rt ? T.getAttribute(q) : (de = T.getAttributeNode(q)) && de.specified ? de.value : null
            }, St.escape = function(T) {
                return (T + "").replace(Hr, Os)
            }, St.error = function(T) {
                throw new Error("Syntax error, unrecognized expression: " + T)
            }, St.uniqueSort = function(T) {
                var q, Q = [],
                    de = 0,
                    ee = 0;
                if (we = !u.detectDuplicates, le = !u.sortStable && T.slice(0), T.sort(Jn), we) {
                    for (; q = T[ee++];) q === T[ee] && (de = Q.push(ee));
                    for (; de--;) T.splice(Q[de], 1)
                }
                return le = null, T
            }, y = St.getText = function(T) {
                var q, Q = "",
                    de = 0,
                    ee = T.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof T.textContent == "string") return T.textContent;
                        for (T = T.firstChild; T; T = T.nextSibling) Q += y(T)
                    } else if (ee === 3 || ee === 4) return T.nodeValue
                } else
                    for (; q = T[de++];) Q += y(q);
                return Q
            }, p = St.selectors = {
                cacheLength: 50,
                createPseudo: dn,
                match: Qi,
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
                    ATTR: function(T) {
                        return T[1] = T[1].replace(kn, Cn), T[3] = (T[3] || T[4] || T[5] || "").replace(kn, Cn), T[2] === "~=" && (T[3] = " " + T[3] + " "), T.slice(0, 4)
                    },
                    CHILD: function(T) {
                        return T[1] = T[1].toLowerCase(), T[1].slice(0, 3) === "nth" ? (T[3] || St.error(T[0]), T[4] = +(T[4] ? T[5] + (T[6] || 1) : 2 * (T[3] === "even" || T[3] === "odd")), T[5] = +(T[7] + T[8] || T[3] === "odd")) : T[3] && St.error(T[0]), T
                    },
                    PSEUDO: function(T) {
                        var q, Q = !T[6] && T[2];
                        return Qi.CHILD.test(T[0]) ? null : (T[3] ? T[2] = T[4] || T[5] || "" : Q && jo.test(Q) && (q = k(Q, !0)) && (q = Q.indexOf(")", Q.length - q) - Q.length) && (T[0] = T[0].slice(0, q), T[2] = Q.slice(0, q)), T.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(T) {
                        var q = T.replace(kn, Cn).toLowerCase();
                        return T === "*" ? function() {
                            return !0
                        } : function(Q) {
                            return Q.nodeName && Q.nodeName.toLowerCase() === q
                        }
                    },
                    CLASS: function(T) {
                        var q = Bt[T + " "];
                        return q || (q = new RegExp("(^|" + gt + ")" + T + "(" + gt + "|$)")) && Bt(T, function(Q) {
                            return q.test(typeof Q.className == "string" && Q.className || typeof Q.getAttribute < "u" && Q.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(T, q, Q) {
                        return function(de) {
                            var ee = St.attr(de, T);
                            return ee == null ? q === "!=" : q ? (ee += "", q === "=" ? ee === Q : q === "!=" ? ee !== Q : q === "^=" ? Q && ee.indexOf(Q) === 0 : q === "*=" ? Q && ee.indexOf(Q) > -1 : q === "$=" ? Q && ee.slice(-Q.length) === Q : q === "~=" ? (" " + ee.replace(Is, " ") + " ").indexOf(Q) > -1 : q === "|=" ? ee === Q || ee.slice(0, Q.length + 1) === Q + "-" : !1) : !0
                        }
                    },
                    CHILD: function(T, q, Q, de, ee) {
                        var Ae = T.slice(0, 3) !== "nth",
                            Ce = T.slice(-4) !== "last",
                            Oe = q === "of-type";
                        return de === 1 && ee === 0 ? function(Re) {
                            return !!Re.parentNode
                        } : function(Re, Ge, He) {
                            var Qe, ht, _t, ze, Ft, Xt, fn = Ae !== Ce ? "nextSibling" : "previousSibling",
                                Ot = Re.parentNode,
                                c = Oe && Re.nodeName.toLowerCase(),
                                h = !He && !Oe,
                                w = !1;
                            if (Ot) {
                                if (Ae) {
                                    for (; fn;) {
                                        for (ze = Re; ze = ze[fn];)
                                            if (Oe ? ze.nodeName.toLowerCase() === c : ze.nodeType === 1) return !1;
                                        Xt = fn = T === "only" && !Xt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Xt = [Ce ? Ot.firstChild : Ot.lastChild], Ce && h) {
                                    for (ze = Ot, _t = ze[xt] || (ze[xt] = {}), ht = _t[ze.uniqueID] || (_t[ze.uniqueID] = {}), Qe = ht[T] || [], Ft = Qe[0] === on && Qe[1], w = Ft && Qe[2], ze = Ft && Ot.childNodes[Ft]; ze = ++Ft && ze && ze[fn] || (w = Ft = 0) || Xt.pop();)
                                        if (ze.nodeType === 1 && ++w && ze === Re) {
                                            ht[T] = [on, Ft, w];
                                            break
                                        }
                                } else if (h && (ze = Re, _t = ze[xt] || (ze[xt] = {}), ht = _t[ze.uniqueID] || (_t[ze.uniqueID] = {}), Qe = ht[T] || [], Ft = Qe[0] === on && Qe[1], w = Ft), w === !1)
                                    for (;
                                        (ze = ++Ft && ze && ze[fn] || (w = Ft = 0) || Xt.pop()) && !((Oe ? ze.nodeName.toLowerCase() === c : ze.nodeType === 1) && ++w && (h && (_t = ze[xt] || (ze[xt] = {}), ht = _t[ze.uniqueID] || (_t[ze.uniqueID] = {}), ht[T] = [on, w]), ze === Re)););
                                return w -= ee, w === de || w % de === 0 && w / de >= 0
                            }
                        }
                    },
                    PSEUDO: function(T, q) {
                        var Q, de = p.pseudos[T] || p.setFilters[T.toLowerCase()] || St.error("unsupported pseudo: " + T);
                        return de[xt] ? de(q) : de.length > 1 ? (Q = [T, T, "", q], p.setFilters.hasOwnProperty(T.toLowerCase()) ? dn(function(ee, Ae) {
                            for (var Ce, Oe = de(ee, q), Re = Oe.length; Re--;) Ce = Zn(ee, Oe[Re]), ee[Ce] = !(Ae[Ce] = Oe[Re])
                        }) : function(ee) {
                            return de(ee, 0, Q)
                        }) : de
                    }
                },
                pseudos: {
                    not: dn(function(T) {
                        var q = [],
                            Q = [],
                            de = G(T.replace(Si, "$1"));
                        return de[xt] ? dn(function(ee, Ae, Ce, Oe) {
                            for (var Re, Ge = de(ee, null, Oe, []), He = ee.length; He--;)(Re = Ge[He]) && (ee[He] = !(Ae[He] = Re))
                        }) : function(ee, Ae, Ce) {
                            return q[0] = ee, de(q, null, Ce, Q), q[0] = null, !Q.pop()
                        }
                    }),
                    has: dn(function(T) {
                        return function(q) {
                            return St(T, q).length > 0
                        }
                    }),
                    contains: dn(function(T) {
                        return T = T.replace(kn, Cn),
                            function(q) {
                                return (q.textContent || y(q)).indexOf(T) > -1
                            }
                    }),
                    lang: dn(function(T) {
                        return qo.test(T || "") || St.error("unsupported lang: " + T), T = T.replace(kn, Cn).toLowerCase(),
                            function(q) {
                                var Q;
                                do
                                    if (Q = rt ? q.lang : q.getAttribute("xml:lang") || q.getAttribute("lang")) return Q = Q.toLowerCase(), Q === T || Q.indexOf(T + "-") === 0; while ((q = q.parentNode) && q.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(T) {
                        var q = r.location && r.location.hash;
                        return q && q.slice(1) === T.id
                    },
                    root: function(T) {
                        return T === Ye
                    },
                    focus: function(T) {
                        return T === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(T.type || T.href || ~T.tabIndex)
                    },
                    enabled: Ls(!1),
                    disabled: Ls(!0),
                    checked: function(T) {
                        var q = T.nodeName.toLowerCase();
                        return q === "input" && !!T.checked || q === "option" && !!T.selected
                    },
                    selected: function(T) {
                        return T.parentNode && T.parentNode.selectedIndex, T.selected === !0
                    },
                    empty: function(T) {
                        for (T = T.firstChild; T; T = T.nextSibling)
                            if (T.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(T) {
                        return !p.pseudos.empty(T)
                    },
                    header: function(T) {
                        return Ho.test(T.nodeName)
                    },
                    input: function(T) {
                        return Fo.test(T.nodeName)
                    },
                    button: function(T) {
                        var q = T.nodeName.toLowerCase();
                        return q === "input" && T.type === "button" || q === "button"
                    },
                    text: function(T) {
                        var q;
                        return T.nodeName.toLowerCase() === "input" && T.type === "text" && ((q = T.getAttribute("type")) == null || q.toLowerCase() === "text")
                    },
                    first: _n(function() {
                        return [0]
                    }),
                    last: _n(function(T, q) {
                        return [q - 1]
                    }),
                    eq: _n(function(T, q, Q) {
                        return [Q < 0 ? Q + q : Q]
                    }),
                    even: _n(function(T, q) {
                        for (var Q = 0; Q < q; Q += 2) T.push(Q);
                        return T
                    }),
                    odd: _n(function(T, q) {
                        for (var Q = 1; Q < q; Q += 2) T.push(Q);
                        return T
                    }),
                    lt: _n(function(T, q, Q) {
                        for (var de = Q < 0 ? Q + q : Q > q ? q : Q; --de >= 0;) T.push(de);
                        return T
                    }),
                    gt: _n(function(T, q, Q) {
                        for (var de = Q < 0 ? Q + q : Q; ++de < q;) T.push(de);
                        return T
                    })
                }
            }, p.pseudos.nth = p.pseudos.eq;
            for (s in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) p.pseudos[s] = zo(s);
            for (s in {
                    submit: !0,
                    reset: !0
                }) p.pseudos[s] = Qo(s);

            function Bs() {}
            Bs.prototype = p.filters = p.pseudos, p.setFilters = new Bs, k = St.tokenize = function(T, q) {
                var Q, de, ee, Ae, Ce, Oe, Re, Ge = xi[T + " "];
                if (Ge) return q ? 0 : Ge.slice(0);
                for (Ce = T, Oe = [], Re = p.preFilter; Ce;) {
                    (!Q || (de = ks.exec(Ce))) && (de && (Ce = Ce.slice(de[0].length) || Ce), Oe.push(ee = [])), Q = !1, (de = _s.exec(Ce)) && (Q = de.shift(), ee.push({
                        value: Q,
                        type: de[0].replace(Si, " ")
                    }), Ce = Ce.slice(Q.length));
                    for (Ae in p.filter)(de = Qi[Ae].exec(Ce)) && (!Re[Ae] || (de = Re[Ae](de))) && (Q = de.shift(), ee.push({
                        value: Q,
                        type: Ae,
                        matches: de
                    }), Ce = Ce.slice(Q.length));
                    if (!Q) break
                }
                return q ? Ce.length : Ce ? St.error(T) : xi(T, Oe).slice(0)
            };

            function Zi(T) {
                for (var q = 0, Q = T.length, de = ""; q < Q; q++) de += T[q].value;
                return de
            }

            function $i(T, q, Q) {
                var de = q.dir,
                    ee = q.next,
                    Ae = ee || de,
                    Ce = Q && Ae === "parentNode",
                    Oe = ft++;
                return q.first ? function(Re, Ge, He) {
                    for (; Re = Re[de];)
                        if (Re.nodeType === 1 || Ce) return T(Re, Ge, He);
                    return !1
                } : function(Re, Ge, He) {
                    var Qe, ht, _t, ze = [on, Oe];
                    if (He) {
                        for (; Re = Re[de];)
                            if ((Re.nodeType === 1 || Ce) && T(Re, Ge, He)) return !0
                    } else
                        for (; Re = Re[de];)
                            if (Re.nodeType === 1 || Ce)
                                if (_t = Re[xt] || (Re[xt] = {}), ht = _t[Re.uniqueID] || (_t[Re.uniqueID] = {}), ee && ee === Re.nodeName.toLowerCase()) Re = Re[de] || Re;
                                else {
                                    if ((Qe = ht[Ae]) && Qe[0] === on && Qe[1] === Oe) return ze[2] = Qe[2];
                                    if (ht[Ae] = ze, ze[2] = T(Re, Ge, He)) return !0
                                } return !1
                }
            }

            function er(T) {
                return T.length > 1 ? function(q, Q, de) {
                    for (var ee = T.length; ee--;)
                        if (!T[ee](q, Q, de)) return !1;
                    return !0
                } : T[0]
            }

            function Ko(T, q, Q) {
                for (var de = 0, ee = q.length; de < ee; de++) St(T, q[de], Q);
                return Q
            }

            function tr(T, q, Q, de, ee) {
                for (var Ae, Ce = [], Oe = 0, Re = T.length, Ge = q != null; Oe < Re; Oe++)(Ae = T[Oe]) && (!Q || Q(Ae, de, ee)) && (Ce.push(Ae), Ge && q.push(Oe));
                return Ce
            }

            function Wr(T, q, Q, de, ee, Ae) {
                return de && !de[xt] && (de = Wr(de)), ee && !ee[xt] && (ee = Wr(ee, Ae)), dn(function(Ce, Oe, Re, Ge) {
                    var He, Qe, ht, _t = [],
                        ze = [],
                        Ft = Oe.length,
                        Xt = Ce || Ko(q || "*", Re.nodeType ? [Re] : Re, []),
                        fn = T && (Ce || !q) ? tr(Xt, _t, T, Re, Ge) : Xt,
                        Ot = Q ? ee || (Ce ? T : Ft || de) ? [] : Oe : fn;
                    if (Q && Q(fn, Ot, Re, Ge), de)
                        for (He = tr(Ot, ze), de(He, [], Re, Ge), Qe = He.length; Qe--;)(ht = He[Qe]) && (Ot[ze[Qe]] = !(fn[ze[Qe]] = ht));
                    if (Ce) {
                        if (ee || T) {
                            if (ee) {
                                for (He = [], Qe = Ot.length; Qe--;)(ht = Ot[Qe]) && He.push(fn[Qe] = ht);
                                ee(null, Ot = [], He, Ge)
                            }
                            for (Qe = Ot.length; Qe--;)(ht = Ot[Qe]) && (He = ee ? Zn(Ce, ht) : _t[Qe]) > -1 && (Ce[He] = !(Oe[He] = ht))
                        }
                    } else Ot = tr(Ot === Oe ? Ot.splice(Ft, Ot.length) : Ot), ee ? ee(null, Oe, Ot, Ge) : bn.apply(Oe, Ot)
                })
            }

            function zr(T) {
                for (var q, Q, de, ee = T.length, Ae = p.relative[T[0].type], Ce = Ae || p.relative[" "], Oe = Ae ? 1 : 0, Re = $i(function(Qe) {
                        return Qe === q
                    }, Ce, !0), Ge = $i(function(Qe) {
                        return Zn(q, Qe) > -1
                    }, Ce, !0), He = [function(Qe, ht, _t) {
                        var ze = !Ae && (_t || ht !== $) || ((q = ht).nodeType ? Re(Qe, ht, _t) : Ge(Qe, ht, _t));
                        return q = null, ze
                    }]; Oe < ee; Oe++)
                    if (Q = p.relative[T[Oe].type]) He = [$i(er(He), Q)];
                    else {
                        if (Q = p.filter[T[Oe].type].apply(null, T[Oe].matches), Q[xt]) {
                            for (de = ++Oe; de < ee && !p.relative[T[de].type]; de++);
                            return Wr(Oe > 1 && er(He), Oe > 1 && Zi(T.slice(0, Oe - 1).concat({
                                value: T[Oe - 2].type === " " ? "*" : ""
                            })).replace(Si, "$1"), Q, Oe < de && zr(T.slice(Oe, de)), de < ee && zr(T = T.slice(de)), de < ee && Zi(T))
                        }
                        He.push(Q)
                    } return er(He)
            }

            function Ds(T, q) {
                var Q = q.length > 0,
                    de = T.length > 0,
                    ee = function(Ae, Ce, Oe, Re, Ge) {
                        var He, Qe, ht, _t = 0,
                            ze = "0",
                            Ft = Ae && [],
                            Xt = [],
                            fn = $,
                            Ot = Ae || de && p.find.TAG("*", Ge),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = Ot.length;
                        for (Ge && ($ = Ce == ce || Ce || Ge); ze !== h && (He = Ot[ze]) != null; ze++) {
                            if (de && He) {
                                for (Qe = 0, !Ce && He.ownerDocument != ce && (ne(He), Oe = !rt); ht = T[Qe++];)
                                    if (ht(He, Ce || ce, Oe)) {
                                        Re.push(He);
                                        break
                                    } Ge && (on = c)
                            }
                            Q && ((He = !ht && He) && _t--, Ae && Ft.push(He))
                        }
                        if (_t += ze, Q && ze !== _t) {
                            for (Qe = 0; ht = q[Qe++];) ht(Ft, Xt, Ce, Oe);
                            if (Ae) {
                                if (_t > 0)
                                    for (; ze--;) Ft[ze] || Xt[ze] || (Xt[ze] = Dn.call(Re));
                                Xt = tr(Xt)
                            }
                            bn.apply(Re, Xt), Ge && !Ae && Xt.length > 0 && _t + q.length > 1 && St.uniqueSort(Re)
                        }
                        return Ge && (on = c, $ = fn), Ft
                    };
                return Q ? dn(ee) : ee
            }
            return G = St.compile = function(T, q) {
                var Q, de = [],
                    ee = [],
                    Ae = zi[T + " "];
                if (!Ae) {
                    for (q || (q = k(T)), Q = q.length; Q--;) Ae = zr(q[Q]), Ae[xt] ? de.push(Ae) : ee.push(Ae);
                    Ae = zi(T, Ds(ee, de)), Ae.selector = T
                }
                return Ae
            }, F = St.select = function(T, q, Q, de) {
                var ee, Ae, Ce, Oe, Re, Ge = typeof T == "function" && T,
                    He = !de && k(T = Ge.selector || T);
                if (Q = Q || [], He.length === 1) {
                    if (Ae = He[0] = He[0].slice(0), Ae.length > 2 && (Ce = Ae[0]).type === "ID" && q.nodeType === 9 && rt && p.relative[Ae[1].type]) {
                        if (q = (p.find.ID(Ce.matches[0].replace(kn, Cn), q) || [])[0], q) Ge && (q = q.parentNode);
                        else return Q;
                        T = T.slice(Ae.shift().value.length)
                    }
                    for (ee = Qi.needsContext.test(T) ? 0 : Ae.length; ee-- && (Ce = Ae[ee], !p.relative[Oe = Ce.type]);)
                        if ((Re = p.find[Oe]) && (de = Re(Ce.matches[0].replace(kn, Cn), Fr.test(Ae[0].type) && Yr(q.parentNode) || q))) {
                            if (Ae.splice(ee, 1), T = de.length && Zi(Ae), !T) return bn.apply(Q, de), Q;
                            break
                        }
                }
                return (Ge || G(T, He))(de, q, !rt, Q, !q || Fr.test(T) && Yr(q.parentNode) || q), Q
            }, u.sortStable = xt.split("").sort(Jn).join("") === xt, u.detectDuplicates = !!we, ne(), u.sortDetached = vn(function(T) {
                return T.compareDocumentPosition(ce.createElement("fieldset")) & 1
            }), vn(function(T) {
                return T.innerHTML = "<a href='#'></a>", T.firstChild.getAttribute("href") === "#"
            }) || Ji("type|href|height|width", function(T, q, Q) {
                if (!Q) return T.getAttribute(q, q.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !vn(function(T) {
                return T.innerHTML = "<input/>", T.firstChild.setAttribute("value", ""), T.firstChild.getAttribute("value") === ""
            })) && Ji("value", function(T, q, Q) {
                if (!Q && T.nodeName.toLowerCase() === "input") return T.defaultValue
            }), vn(function(T) {
                return T.getAttribute("disabled") == null
            }) || Ji(qr, function(T, q, Q) {
                var de;
                if (!Q) return T[q] === !0 ? q.toLowerCase() : (de = T.getAttributeNode(q)) && de.specified ? de.value : null
            }), St
        }(e);
        d.find = _e, d.expr = _e.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = _e.uniqueSort, d.text = _e.getText, d.isXMLDoc = _e.isXML, d.contains = _e.contains, d.escapeSelector = _e.escape;
        var Me = function(r, s, u) {
                for (var p = [], y = u !== void 0;
                    (r = r[s]) && r.nodeType !== 9;)
                    if (r.nodeType === 1) {
                        if (y && d(r).is(u)) break;
                        p.push(r)
                    } return p
            },
            lt = function(r, s) {
                for (var u = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && u.push(r);
                return u
            },
            Ve = d.expr.match.needsContext;

        function J(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var qe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function H(r, s, u) {
            return re(s) ? d.grep(r, function(p, y) {
                return !!s.call(p, y, p) !== u
            }) : s.nodeType ? d.grep(r, function(p) {
                return p === s !== u
            }) : typeof s != "string" ? d.grep(r, function(p) {
                return I.call(s, p) > -1 !== u
            }) : d.filter(s, r, u)
        }
        d.filter = function(r, s, u) {
            var p = s[0];
            return u && (r = ":not(" + r + ")"), s.length === 1 && p.nodeType === 1 ? d.find.matchesSelector(p, r) ? [p] : [] : d.find.matches(r, d.grep(s, function(y) {
                return y.nodeType === 1
            }))
        }, d.fn.extend({
            find: function(r) {
                var s, u, p = this.length,
                    y = this;
                if (typeof r != "string") return this.pushStack(d(r).filter(function() {
                    for (s = 0; s < p; s++)
                        if (d.contains(y[s], this)) return !0
                }));
                for (u = this.pushStack([]), s = 0; s < p; s++) d.find(r, y[s], u);
                return p > 1 ? d.uniqueSort(u) : u
            },
            filter: function(r) {
                return this.pushStack(H(this, r || [], !1))
            },
            not: function(r) {
                return this.pushStack(H(this, r || [], !0))
            },
            is: function(r) {
                return !!H(this, typeof r == "string" && Ve.test(r) ? d(r) : r || [], !1).length
            }
        });
        var oe, ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            ye = d.fn.init = function(r, s, u) {
                var p, y;
                if (!r) return this;
                if (u = u || oe, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = ke.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : M, !0)), qe.test(p[1]) && d.isPlainObject(s))
                                for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return y = M.getElementById(p[2]), y && (this[0] = y, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (re(r)) return u.ready !== void 0 ? u.ready(r) : r(d)
                }
                return d.makeArray(r, this)
            };
        ye.prototype = d.fn, oe = d(M);
        var ve = /^(?:parents|prev(?:Until|All))/,
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
                    y = this.length,
                    C = [],
                    k = typeof r != "string" && d(r);
                if (!Ve.test(r)) {
                    for (; p < y; p++)
                        for (u = this[p]; u && u !== s; u = u.parentNode)
                            if (u.nodeType < 11 && (k ? k.index(u) > -1 : u.nodeType === 1 && d.find.matchesSelector(u, r))) {
                                C.push(u);
                                break
                            }
                }
                return this.pushStack(C.length > 1 ? d.uniqueSort(C) : C)
            },
            index: function(r) {
                return r ? typeof r == "string" ? I.call(d(r), this[0]) : I.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(r, s) {
                return this.pushStack(d.uniqueSort(d.merge(this.get(), d(r, s))))
            },
            addBack: function(r) {
                return this.add(r == null ? this.prevObject : this.prevObject.filter(r))
            }
        });

        function xe(r, s) {
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
                return xe(r, "nextSibling")
            },
            prev: function(r) {
                return xe(r, "previousSibling")
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
                return r.contentDocument != null && o(r.contentDocument) ? r.contentDocument : (J(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
            }
        }, function(r, s) {
            d.fn[r] = function(u, p) {
                var y = d.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (y = d.filter(p, y)), this.length > 1 && (ue[r] || d.uniqueSort(y), ve.test(r) && y.reverse()), this.pushStack(y)
            }
        });
        var Ie = /[^\x20\t\r\n\f]+/g;

        function Ue(r) {
            var s = {};
            return d.each(r.match(Ie) || [], function(u, p) {
                s[p] = !0
            }), s
        }
        d.Callbacks = function(r) {
            r = typeof r == "string" ? Ue(r) : d.extend({}, r);
            var s, u, p, y, C = [],
                k = [],
                G = -1,
                F = function() {
                    for (y = y || r.once, p = s = !0; k.length; G = -1)
                        for (u = k.shift(); ++G < C.length;) C[G].apply(u[0], u[1]) === !1 && r.stopOnFalse && (G = C.length, u = !1);
                    r.memory || (u = !1), s = !1, y && (u ? C = [] : C = "")
                },
                $ = {
                    add: function() {
                        return C && (u && !s && (G = C.length - 1, k.push(u)), function le(we) {
                            d.each(we, function(ne, ce) {
                                re(ce) ? (!r.unique || !$.has(ce)) && C.push(ce) : ce && ce.length && se(ce) !== "string" && le(ce)
                            })
                        }(arguments), u && !s && F()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(le, we) {
                            for (var ne;
                                (ne = d.inArray(we, C, ne)) > -1;) C.splice(ne, 1), ne <= G && G--
                        }), this
                    },
                    has: function(le) {
                        return le ? d.inArray(le, C) > -1 : C.length > 0
                    },
                    empty: function() {
                        return C && (C = []), this
                    },
                    disable: function() {
                        return y = k = [], C = u = "", this
                    },
                    disabled: function() {
                        return !C
                    },
                    lock: function() {
                        return y = k = [], !u && !s && (C = u = ""), this
                    },
                    locked: function() {
                        return !!y
                    },
                    fireWith: function(le, we) {
                        return y || (we = we || [], we = [le, we.slice ? we.slice() : we], k.push(we), s || F()), this
                    },
                    fire: function() {
                        return $.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!p
                    }
                };
            return $
        };

        function Je(r) {
            return r
        }

        function dt(r) {
            throw r
        }

        function Vt(r, s, u, p) {
            var y;
            try {
                r && re(y = r.promise) ? y.call(r).done(s).fail(u) : r && re(y = r.then) ? y.call(r, s, u) : s.apply(void 0, [r].slice(p))
            } catch (C) {
                u.apply(void 0, [C])
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
                            return y.done(arguments).fail(arguments), this
                        },
                        catch: function(C) {
                            return p.then(null, C)
                        },
                        pipe: function() {
                            var C = arguments;
                            return d.Deferred(function(k) {
                                d.each(s, function(G, F) {
                                    var $ = re(C[F[4]]) && C[F[4]];
                                    y[F[1]](function() {
                                        var le = $ && $.apply(this, arguments);
                                        le && re(le.promise) ? le.promise().progress(k.notify).done(k.resolve).fail(k.reject) : k[F[0] + "With"](this, $ ? [le] : arguments)
                                    })
                                }), C = null
                            }).promise()
                        },
                        then: function(C, k, G) {
                            var F = 0;

                            function $(le, we, ne, ce) {
                                return function() {
                                    var Ye = this,
                                        rt = arguments,
                                        je = function() {
                                            var Pt, un;
                                            if (!(le < F)) {
                                                if (Pt = ne.apply(Ye, rt), Pt === we.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Pt && (typeof Pt == "object" || typeof Pt == "function") && Pt.then, re(un) ? ce ? un.call(Pt, $(F, we, Je, ce), $(F, we, dt, ce)) : (F++, un.call(Pt, $(F, we, Je, ce), $(F, we, dt, ce), $(F, we, Je, we.notifyWith))) : (ne !== Je && (Ye = void 0, rt = [Pt]), (ce || we.resolveWith)(Ye, rt))
                                            }
                                        },
                                        Gt = ce ? je : function() {
                                            try {
                                                je()
                                            } catch (Pt) {
                                                d.Deferred.exceptionHook && d.Deferred.exceptionHook(Pt, Gt.stackTrace), le + 1 >= F && (ne !== dt && (Ye = void 0, rt = [Pt]), we.rejectWith(Ye, rt))
                                            }
                                        };
                                    le ? Gt() : (d.Deferred.getStackHook && (Gt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(Gt))
                                }
                            }
                            return d.Deferred(function(le) {
                                s[0][3].add($(0, le, re(G) ? G : Je, le.notifyWith)), s[1][3].add($(0, le, re(C) ? C : Je)), s[2][3].add($(0, le, re(k) ? k : dt))
                            }).promise()
                        },
                        promise: function(C) {
                            return C != null ? d.extend(C, p) : p
                        }
                    },
                    y = {};
                return d.each(s, function(C, k) {
                    var G = k[2],
                        F = k[5];
                    p[k[1]] = G.add, F && G.add(function() {
                        u = F
                    }, s[3 - C][2].disable, s[3 - C][3].disable, s[0][2].lock, s[0][3].lock), G.add(k[3].fire), y[k[0]] = function() {
                        return y[k[0] + "With"](this === y ? void 0 : this, arguments), this
                    }, y[k[0] + "With"] = G.fireWith
                }), p.promise(y), r && r.call(y, y), y
            },
            when: function(r) {
                var s = arguments.length,
                    u = s,
                    p = Array(u),
                    y = f.call(arguments),
                    C = d.Deferred(),
                    k = function(G) {
                        return function(F) {
                            p[G] = this, y[G] = arguments.length > 1 ? f.call(arguments) : F, --s || C.resolveWith(p, y)
                        }
                    };
                if (s <= 1 && (Vt(r, C.done(k(u)).resolve, C.reject, !s), C.state() === "pending" || re(y[u] && y[u].then))) return C.then();
                for (; u--;) Vt(y[u], k(u), C.reject);
                return C.promise()
            }
        });
        var Yt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        d.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && Yt.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
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
                (r === !0 ? --d.readyWait : d.isReady) || (d.isReady = !0, !(r !== !0 && --d.readyWait > 0) && E.resolveWith(M, [d]))
            }
        }), d.ready.then = E.then;

        function l() {
            M.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), d.ready()
        }
        M.readyState === "complete" || M.readyState !== "loading" && !M.documentElement.doScroll ? e.setTimeout(d.ready) : (M.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(r, s, u, p, y, C, k) {
                var G = 0,
                    F = r.length,
                    $ = u == null;
                if (se(u) === "object") {
                    y = !0;
                    for (G in u) g(r, s, G, u[G], !0, C, k)
                } else if (p !== void 0 && (y = !0, re(p) || (k = !0), $ && (k ? (s.call(r, p), s = null) : ($ = s, s = function(le, we, ne) {
                        return $.call(d(le), ne)
                    })), s))
                    for (; G < F; G++) s(r[G], u, k ? p : p.call(r[G], G, s(r[G], u)));
                return y ? r : $ ? s.call(r) : F ? s(r[0], u) : C
            },
            x = /^-ms-/,
            O = /-([a-z])/g;

        function R(r, s) {
            return s.toUpperCase()
        }

        function N(r) {
            return r.replace(x, "ms-").replace(O, R)
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
                var p, y = this.cache(r);
                if (typeof s == "string") y[N(s)] = u;
                else
                    for (p in s) y[N(p)] = s[p];
                return y
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
                        for (Array.isArray(s) ? s = s.map(N) : (s = N(s), s = s in p ? [s] : s.match(Ie) || []), u = s.length; u--;) delete p[s[u]];
                    (s === void 0 || d.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            },
            hasData: function(r) {
                var s = r[this.expando];
                return s !== void 0 && !d.isEmptyObject(s)
            }
        };
        var he = new Se,
            Be = new Se,
            De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            nt = /[A-Z]/g;

        function bt(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : De.test(r) ? JSON.parse(r) : r
        }

        function rn(r, s, u) {
            var p;
            if (u === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(nt, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                    try {
                        u = bt(u)
                    } catch {}
                    Be.set(r, s, u)
                } else u = void 0;
            return u
        }
        d.extend({
            hasData: function(r) {
                return Be.hasData(r) || he.hasData(r)
            },
            data: function(r, s, u) {
                return Be.access(r, s, u)
            },
            removeData: function(r, s) {
                Be.remove(r, s)
            },
            _data: function(r, s, u) {
                return he.access(r, s, u)
            },
            _removeData: function(r, s) {
                he.remove(r, s)
            }
        }), d.fn.extend({
            data: function(r, s) {
                var u, p, y, C = this[0],
                    k = C && C.attributes;
                if (r === void 0) {
                    if (this.length && (y = Be.get(C), C.nodeType === 1 && !he.get(C, "hasDataAttrs"))) {
                        for (u = k.length; u--;) k[u] && (p = k[u].name, p.indexOf("data-") === 0 && (p = N(p.slice(5)), rn(C, p, y[p])));
                        he.set(C, "hasDataAttrs", !0)
                    }
                    return y
                }
                return typeof r == "object" ? this.each(function() {
                    Be.set(this, r)
                }) : g(this, function(G) {
                    var F;
                    if (C && G === void 0) return F = Be.get(C, r), F !== void 0 || (F = rn(C, r), F !== void 0) ? F : void 0;
                    this.each(function() {
                        Be.set(this, r, G)
                    })
                }, null, s, arguments.length > 1, null, !0)
            },
            removeData: function(r) {
                return this.each(function() {
                    Be.remove(this, r)
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
                    y = u.shift(),
                    C = d._queueHooks(r, s),
                    k = function() {
                        d.dequeue(r, s)
                    };
                y === "inprogress" && (y = u.shift(), p--), y && (s === "fx" && u.unshift("inprogress"), delete C.stop, y.call(r, k, C)), !p && C && C.empty.fire()
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
                    y = d.Deferred(),
                    C = this,
                    k = this.length,
                    G = function() {
                        --p || y.resolveWith(C, [C])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; k--;) u = he.get(C[k], r + "queueHooks"), u && u.empty && (p++, u.empty.add(G));
                return G(), y.promise(s)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            vt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            wt = ["Top", "Right", "Bottom", "Left"],
            Jt = M.documentElement,
            Xe = function(r) {
                return d.contains(r.ownerDocument, r)
            },
            Rt = {
                composed: !0
            };
        Jt.getRootNode && (Xe = function(r) {
            return d.contains(r.ownerDocument, r) || r.getRootNode(Rt) === r.ownerDocument
        });
        var j = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Xe(r) && d.css(r, "display") === "none"
        };

        function P(r, s, u, p) {
            var y, C, k = 20,
                G = p ? function() {
                    return p.cur()
                } : function() {
                    return d.css(r, s, "")
                },
                F = G(),
                $ = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                le = r.nodeType && (d.cssNumber[s] || $ !== "px" && +F) && vt.exec(d.css(r, s));
            if (le && le[3] !== $) {
                for (F = F / 2, $ = $ || le[3], le = +F || 1; k--;) d.style(r, s, le + $), (1 - C) * (1 - (C = G() / F || .5)) <= 0 && (k = 0), le = le / C;
                le = le * 2, d.style(r, s, le + $), u = u || []
            }
            return u && (le = +le || +F || 0, y = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = $, p.start = le, p.end = y)), y
        }
        var z = {};

        function D(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                y = z[p];
            return y || (s = u.body.appendChild(u.createElement(p)), y = d.css(s, "display"), s.parentNode.removeChild(s), y === "none" && (y = "block"), z[p] = y, y)
        }

        function Y(r, s) {
            for (var u, p, y = [], C = 0, k = r.length; C < k; C++) p = r[C], p.style && (u = p.style.display, s ? (u === "none" && (y[C] = he.get(p, "display") || null, y[C] || (p.style.display = "")), p.style.display === "" && j(p) && (y[C] = D(p))) : u !== "none" && (y[C] = "none", he.set(p, "display", u)));
            for (C = 0; C < k; C++) y[C] != null && (r[C].style.display = y[C]);
            return r
        }
        d.fn.extend({
            show: function() {
                return Y(this, !0)
            },
            hide: function() {
                return Y(this)
            },
            toggle: function(r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                    j(this) ? d(this).show() : d(this).hide()
                })
            }
        });
        var fe = /^(?:checkbox|radio)$/i,
            pe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Pe = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var r = M.createDocumentFragment(),
                s = r.appendChild(M.createElement("div")),
                u = M.createElement("input");
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
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && J(r, s) ? d.merge([r], u) : u
        }

        function jt(r, s) {
            for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
        }
        var Ke = /<|&#?\w+;/;

        function Ln(r, s, u, p, y) {
            for (var C, k, G, F, $, le, we = s.createDocumentFragment(), ne = [], ce = 0, Ye = r.length; ce < Ye; ce++)
                if (C = r[ce], C || C === 0)
                    if (se(C) === "object") d.merge(ne, C.nodeType ? [C] : C);
                    else if (!Ke.test(C)) ne.push(s.createTextNode(C));
            else {
                for (k = k || we.appendChild(s.createElement("div")), G = (pe.exec(C) || ["", ""])[1].toLowerCase(), F = Ne[G] || Ne._default, k.innerHTML = F[1] + d.htmlPrefilter(C) + F[2], le = F[0]; le--;) k = k.lastChild;
                d.merge(ne, k.childNodes), k = we.firstChild, k.textContent = ""
            }
            for (we.textContent = "", ce = 0; C = ne[ce++];) {
                if (p && d.inArray(C, p) > -1) {
                    y && y.push(C);
                    continue
                }
                if ($ = Xe(C), k = pt(we.appendChild(C), "script"), $ && jt(k), u)
                    for (le = 0; C = k[le++];) Pe.test(C.type || "") && u.push(C)
            }
            return we
        }
        var Mn = /^([^.]*)(?:\.(.+)|)/;

        function it() {
            return !0
        }

        function Bn() {
            return !1
        }

        function gi(r, s) {
            return r === Sr() == (s === "focus")
        }

        function Sr() {
            try {
                return M.activeElement
            } catch {}
        }

        function In(r, s, u, p, y, C) {
            var k, G;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (G in s) In(r, G, u, p, s[G], C);
                return r
            }
            if (p == null && y == null ? (y = u, p = u = void 0) : y == null && (typeof u == "string" ? (y = p, p = void 0) : (y = p, p = u, u = void 0)), y === !1) y = Bn;
            else if (!y) return r;
            return C === 1 && (k = y, y = function(F) {
                return d().off(F), k.apply(this, arguments)
            }, y.guid = k.guid || (k.guid = d.guid++)), r.each(function() {
                d.event.add(this, s, y, p, u)
            })
        }
        d.event = {
            global: {},
            add: function(r, s, u, p, y) {
                var C, k, G, F, $, le, we, ne, ce, Ye, rt, je = he.get(r);
                if (!!te(r))
                    for (u.handler && (C = u, u = C.handler, y = C.selector), y && d.find.matchesSelector(Jt, y), u.guid || (u.guid = d.guid++), (F = je.events) || (F = je.events = Object.create(null)), (k = je.handle) || (k = je.handle = function(Gt) {
                            return typeof d < "u" && d.event.triggered !== Gt.type ? d.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Ie) || [""], $ = s.length; $--;) G = Mn.exec(s[$]) || [], ce = rt = G[1], Ye = (G[2] || "").split(".").sort(), ce && (we = d.event.special[ce] || {}, ce = (y ? we.delegateType : we.bindType) || ce, we = d.event.special[ce] || {}, le = d.extend({
                        type: ce,
                        origType: rt,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: y,
                        needsContext: y && d.expr.match.needsContext.test(y),
                        namespace: Ye.join(".")
                    }, C), (ne = F[ce]) || (ne = F[ce] = [], ne.delegateCount = 0, (!we.setup || we.setup.call(r, p, Ye, k) === !1) && r.addEventListener && r.addEventListener(ce, k)), we.add && (we.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), y ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), d.event.global[ce] = !0)
            },
            remove: function(r, s, u, p, y) {
                var C, k, G, F, $, le, we, ne, ce, Ye, rt, je = he.hasData(r) && he.get(r);
                if (!(!je || !(F = je.events))) {
                    for (s = (s || "").match(Ie) || [""], $ = s.length; $--;) {
                        if (G = Mn.exec(s[$]) || [], ce = rt = G[1], Ye = (G[2] || "").split(".").sort(), !ce) {
                            for (ce in F) d.event.remove(r, ce + s[$], u, p, !0);
                            continue
                        }
                        for (we = d.event.special[ce] || {}, ce = (p ? we.delegateType : we.bindType) || ce, ne = F[ce] || [], G = G[2] && new RegExp("(^|\\.)" + Ye.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = C = ne.length; C--;) le = ne[C], (y || rt === le.origType) && (!u || u.guid === le.guid) && (!G || G.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(C, 1), le.selector && ne.delegateCount--, we.remove && we.remove.call(r, le));
                        k && !ne.length && ((!we.teardown || we.teardown.call(r, Ye, je.handle) === !1) && d.removeEvent(r, ce, je.handle), delete F[ce])
                    }
                    d.isEmptyObject(F) && he.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, y, C, k, G = new Array(arguments.length),
                    F = d.event.fix(r),
                    $ = (he.get(this, "events") || Object.create(null))[F.type] || [],
                    le = d.event.special[F.type] || {};
                for (G[0] = F, s = 1; s < arguments.length; s++) G[s] = arguments[s];
                if (F.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, F) === !1)) {
                    for (k = d.event.handlers.call(this, F, $), s = 0;
                        (y = k[s++]) && !F.isPropagationStopped();)
                        for (F.currentTarget = y.elem, u = 0;
                            (C = y.handlers[u++]) && !F.isImmediatePropagationStopped();)(!F.rnamespace || C.namespace === !1 || F.rnamespace.test(C.namespace)) && (F.handleObj = C, F.data = C.data, p = ((d.event.special[C.origType] || {}).handle || C.handler).apply(y.elem, G), p !== void 0 && (F.result = p) === !1 && (F.preventDefault(), F.stopPropagation()));
                    return le.postDispatch && le.postDispatch.call(this, F), F.result
                }
            },
            handlers: function(r, s) {
                var u, p, y, C, k, G = [],
                    F = s.delegateCount,
                    $ = r.target;
                if (F && $.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; $ !== this; $ = $.parentNode || this)
                        if ($.nodeType === 1 && !(r.type === "click" && $.disabled === !0)) {
                            for (C = [], k = {}, u = 0; u < F; u++) p = s[u], y = p.selector + " ", k[y] === void 0 && (k[y] = p.needsContext ? d(y, this).index($) > -1 : d.find(y, this, null, [$]).length), k[y] && C.push(p);
                            C.length && G.push({
                                elem: $,
                                handlers: C
                            })
                        }
                }
                return $ = this, F < s.length && G.push({
                    elem: $,
                    handlers: s.slice(F)
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
                        return fe.test(s.type) && s.click && J(s, "input") && sn(s, "click", it), !1
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
                he.get(r, s) === void 0 && d.event.add(r, s, it);
                return
            }
            he.set(r, s, !1), d.event.add(r, s, {
                namespace: !1,
                handler: function(p) {
                    var y, C, k = he.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (k.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (k = f.call(arguments), he.set(this, s, k), y = u(this, s), this[s](), C = he.get(this, s), k !== C || y ? he.set(this, s, !1) : C = {}, k !== C) return p.stopImmediatePropagation(), p.preventDefault(), C && C.value
                    } else k.length && (he.set(this, s, {
                        value: d.event.trigger(d.extend(k[0], d.Event.prototype), k.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        d.removeEvent = function(r, s, u) {
            r.removeEventListener && r.removeEventListener(s, u)
        }, d.Event = function(r, s) {
            if (!(this instanceof d.Event)) return new d.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? it : Bn, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && d.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[d.expando] = !0
        }, d.Event.prototype = {
            constructor: d.Event,
            isDefaultPrevented: Bn,
            isPropagationStopped: Bn,
            isImmediatePropagationStopped: Bn,
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
                    var p, y = this,
                        C = u.relatedTarget,
                        k = u.handleObj;
                    return (!C || C !== y && !d.contains(y, C)) && (u.type = k.origType, p = k.handler.apply(this, arguments), u.type = s), p
                }
            }
        }), d.fn.extend({
            on: function(r, s, u, p) {
                return In(this, r, s, u, p)
            },
            one: function(r, s, u, p) {
                return In(this, r, s, u, p, 1)
            },
            off: function(r, s, u) {
                var p, y;
                if (r && r.preventDefault && r.handleObj) return p = r.handleObj, d(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof r == "object") {
                    for (y in r) this.off(y, s, r[y]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Bn), this.each(function() {
                    d.event.remove(this, r, u, s)
                })
            }
        });
        var Ir = /<script|<style|<link/i,
            kr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ai = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Ui(r, s) {
            return J(r, "table") && J(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
        }

        function mi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function vi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function ji(r, s) {
            var u, p, y, C, k, G, F;
            if (s.nodeType === 1) {
                if (he.hasData(r) && (C = he.get(r), F = C.events, F)) {
                    he.remove(s, "handle events");
                    for (y in F)
                        for (u = 0, p = F[y].length; u < p; u++) d.event.add(s, y, F[y][u])
                }
                Be.hasData(r) && (k = Be.access(r), G = d.extend({}, k), Be.set(s, G))
            }
        }

        function qi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function An(r, s, u, p) {
            s = A(s);
            var y, C, k, G, F, $, le = 0,
                we = r.length,
                ne = we - 1,
                ce = s[0],
                Ye = re(ce);
            if (Ye || we > 1 && typeof ce == "string" && !K.checkClone && kr.test(ce)) return r.each(function(rt) {
                var je = r.eq(rt);
                Ye && (s[0] = ce.call(this, rt, je.html())), An(je, s, u, p)
            });
            if (we && (y = Ln(s, r[0].ownerDocument, !1, r, p), C = y.firstChild, y.childNodes.length === 1 && (y = C), C || p)) {
                for (k = d.map(pt(y, "script"), mi), G = k.length; le < we; le++) F = y, le !== ne && (F = d.clone(F, !0, !0), G && d.merge(k, pt(F, "script"))), u.call(r[le], F, le);
                if (G)
                    for ($ = k[k.length - 1].ownerDocument, d.map(k, vi), le = 0; le < G; le++) F = k[le], Pe.test(F.type || "") && !he.access(F, "globalEval") && d.contains($, F) && (F.src && (F.type || "").toLowerCase() !== "module" ? d._evalUrl && !F.noModule && d._evalUrl(F.src, {
                        nonce: F.nonce || F.getAttribute("nonce")
                    }, $) : ae(F.textContent.replace(Ai, ""), F, $))
            }
            return r
        }

        function Gi(r, s, u) {
            for (var p, y = s ? d.filter(s, r) : r, C = 0;
                (p = y[C]) != null; C++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Xe(p) && jt(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        d.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, y, C, k, G = r.cloneNode(!0),
                    F = Xe(r);
                if (!K.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                    for (k = pt(G), C = pt(r), p = 0, y = C.length; p < y; p++) qi(C[p], k[p]);
                if (s)
                    if (u)
                        for (C = C || pt(r), k = k || pt(G), p = 0, y = C.length; p < y; p++) ji(C[p], k[p]);
                    else ji(r, G);
                return k = pt(G, "script"), k.length > 0 && jt(k, !F && pt(r, "script")), G
            },
            cleanData: function(r) {
                for (var s, u, p, y = d.event.special, C = 0;
                    (u = r[C]) !== void 0; C++)
                    if (te(u)) {
                        if (s = u[he.expando]) {
                            if (s.events)
                                for (p in s.events) y[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                            u[he.expando] = void 0
                        }
                        u[Be.expando] && (u[Be.expando] = void 0)
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
                return An(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Ui(this, r);
                        s.appendChild(r)
                    }
                })
            },
            prepend: function() {
                return An(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Ui(this, r);
                        s.insertBefore(r, s.firstChild)
                    }
                })
            },
            before: function() {
                return An(this, arguments, function(r) {
                    this.parentNode && this.parentNode.insertBefore(r, this)
                })
            },
            after: function() {
                return An(this, arguments, function(r) {
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
                        y = this.length;
                    if (s === void 0 && u.nodeType === 1) return u.innerHTML;
                    if (typeof s == "string" && !Ir.test(s) && !Ne[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = d.htmlPrefilter(s);
                        try {
                            for (; p < y; p++) u = this[p] || {}, u.nodeType === 1 && (d.cleanData(pt(u, !1)), u.innerHTML = s);
                            u = 0
                        } catch {}
                    }
                    u && this.empty().append(s)
                }, null, r, arguments.length)
            },
            replaceWith: function() {
                var r = [];
                return An(this, arguments, function(s) {
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
                for (var p, y = [], C = d(u), k = C.length - 1, G = 0; G <= k; G++) p = G === k ? this : this.clone(!0), d(C[G])[s](p), S.apply(y, p.get());
                return this.pushStack(y)
            }
        });
        var yi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            Fn = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Fi = function(r, s, u) {
                var p, y, C = {};
                for (y in s) C[y] = r.style[y], r.style[y] = s[y];
                p = u.call(r);
                for (y in s) r.style[y] = C[y];
                return p
            },
            wi = new RegExp(wt.join("|"), "i");
        (function() {
            function r() {
                if (!!$) {
                    F.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", $.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Jt.appendChild(F).appendChild($);
                    var le = e.getComputedStyle($);
                    u = le.top !== "1%", G = s(le.marginLeft) === 12, $.style.right = "60%", C = s(le.right) === 36, p = s(le.width) === 36, $.style.position = "absolute", y = s($.offsetWidth / 3) === 12, Jt.removeChild(F), $ = null
                }
            }

            function s(le) {
                return Math.round(parseFloat(le))
            }
            var u, p, y, C, k, G, F = M.createElement("div"),
                $ = M.createElement("div");
            !$.style || ($.style.backgroundClip = "content-box", $.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = $.style.backgroundClip === "content-box", d.extend(K, {
                boxSizingReliable: function() {
                    return r(), p
                },
                pixelBoxStyles: function() {
                    return r(), C
                },
                pixelPosition: function() {
                    return r(), u
                },
                reliableMarginLeft: function() {
                    return r(), G
                },
                scrollboxSize: function() {
                    return r(), y
                },
                reliableTrDimensions: function() {
                    var le, we, ne, ce;
                    return k == null && (le = M.createElement("table"), we = M.createElement("tr"), ne = M.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", we.style.cssText = "border:1px solid", we.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Jt.appendChild(le).appendChild(we).appendChild(ne), ce = e.getComputedStyle(we), k = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === we.offsetHeight, Jt.removeChild(le)), k
                }
            }))
        })();

        function $e(r, s, u) {
            var p, y, C, k, G = r.style;
            return u = u || Fn(r), u && (k = u.getPropertyValue(s) || u[s], k === "" && !Xe(r) && (k = d.style(r, s)), !K.pixelBoxStyles() && yi.test(k) && wi.test(s) && (p = G.width, y = G.minWidth, C = G.maxWidth, G.minWidth = G.maxWidth = G.width = k, k = u.width, G.width = p, G.minWidth = y, G.maxWidth = C)), k !== void 0 ? k + "" : k
        }

        function v(r, s) {
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
            b = M.createElement("div").style,
            _ = {};

        function Z(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), u = a.length; u--;)
                if (r = a[u] + s, r in b) return r
        }

        function be(r) {
            var s = d.cssProps[r] || _[r];
            return s || (r in b ? r : _[r] = Z(r) || r)
        }
        var We = /^(none|table(?!-c[ea]).+)/,
            Lt = /^--/,
            zt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Hn = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Pn(r, s, u) {
            var p = vt.exec(s);
            return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
        }

        function Yn(r, s, u, p, y, C) {
            var k = s === "width" ? 1 : 0,
                G = 0,
                F = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; k < 4; k += 2) u === "margin" && (F += d.css(r, u + wt[k], !0, y)), p ? (u === "content" && (F -= d.css(r, "padding" + wt[k], !0, y)), u !== "margin" && (F -= d.css(r, "border" + wt[k] + "Width", !0, y))) : (F += d.css(r, "padding" + wt[k], !0, y), u !== "padding" ? F += d.css(r, "border" + wt[k] + "Width", !0, y) : G += d.css(r, "border" + wt[k] + "Width", !0, y));
            return !p && C >= 0 && (F += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - C - F - G - .5)) || 0), F
        }

        function _r(r, s, u) {
            var p = Fn(r),
                y = !K.boxSizingReliable() || u,
                C = y && d.css(r, "boxSizing", !1, p) === "border-box",
                k = C,
                G = $e(r, s, p),
                F = "offset" + s[0].toUpperCase() + s.slice(1);
            if (yi.test(G)) {
                if (!u) return G;
                G = "auto"
            }
            return (!K.boxSizingReliable() && C || !K.reliableTrDimensions() && J(r, "tr") || G === "auto" || !parseFloat(G) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (C = d.css(r, "boxSizing", !1, p) === "border-box", k = F in r, k && (G = r[F])), G = parseFloat(G) || 0, G + Yn(r, s, u || (C ? "border" : "content"), k, p, G) + "px"
        }
        d.extend({
            cssHooks: {
                opacity: {
                    get: function(r, s) {
                        if (s) {
                            var u = $e(r, "opacity");
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
                    var y, C, k, G = N(s),
                        F = Lt.test(s),
                        $ = r.style;
                    if (F || (s = be(G)), k = d.cssHooks[s] || d.cssHooks[G], u !== void 0) {
                        if (C = typeof u, C === "string" && (y = vt.exec(u)) && y[1] && (u = P(r, s, y), C = "number"), u == null || u !== u) return;
                        C === "number" && !F && (u += y && y[3] || (d.cssNumber[G] ? "" : "px")), !K.clearCloneStyle && u === "" && s.indexOf("background") === 0 && ($[s] = "inherit"), (!k || !("set" in k) || (u = k.set(r, u, p)) !== void 0) && (F ? $.setProperty(s, u) : $[s] = u)
                    } else return k && "get" in k && (y = k.get(r, !1, p)) !== void 0 ? y : $[s]
                }
            },
            css: function(r, s, u, p) {
                var y, C, k, G = N(s),
                    F = Lt.test(s);
                return F || (s = be(G)), k = d.cssHooks[s] || d.cssHooks[G], k && "get" in k && (y = k.get(r, !0, u)), y === void 0 && (y = $e(r, s, p)), y === "normal" && s in Hn && (y = Hn[s]), u === "" || u ? (C = parseFloat(y), u === !0 || isFinite(C) ? C || 0 : y) : y
            }
        }), d.each(["height", "width"], function(r, s) {
            d.cssHooks[s] = {
                get: function(u, p, y) {
                    if (p) return We.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Fi(u, zt, function() {
                        return _r(u, s, y)
                    }) : _r(u, s, y)
                },
                set: function(u, p, y) {
                    var C, k = Fn(u),
                        G = !K.scrollboxSize() && k.position === "absolute",
                        F = G || y,
                        $ = F && d.css(u, "boxSizing", !1, k) === "border-box",
                        le = y ? Yn(u, s, y, $, k) : 0;
                    return $ && G && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(k[s]) - Yn(u, s, "border", !1, k) - .5)), le && (C = vt.exec(p)) && (C[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Pn(u, p, le)
                }
            }
        }), d.cssHooks.marginLeft = v(K.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat($e(r, "marginLeft")) || r.getBoundingClientRect().left - Fi(r, {
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
                    for (var p = 0, y = {}, C = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) y[r + wt[p] + s] = C[p] || C[p - 2] || C[0];
                    return y
                }
            }, r !== "margin" && (d.cssHooks[r + s].set = Pn)
        }), d.fn.extend({
            css: function(r, s) {
                return g(this, function(u, p, y) {
                    var C, k, G = {},
                        F = 0;
                    if (Array.isArray(p)) {
                        for (C = Fn(u), k = p.length; F < k; F++) G[p[F]] = d.css(u, p[F], !1, C);
                        return G
                    }
                    return y !== void 0 ? d.style(u, p, y) : d.css(u, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Qt(r, s, u, p, y) {
            return new Qt.prototype.init(r, s, u, p, y)
        }
        d.Tween = Qt, Qt.prototype = {
            constructor: Qt,
            init: function(r, s, u, p, y, C) {
                this.elem = r, this.prop = u, this.easing = y || d.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = C || (d.cssNumber[u] ? "" : "px")
            },
            cur: function() {
                var r = Qt.propHooks[this.prop];
                return r && r.get ? r.get(this) : Qt.propHooks._default.get(this)
            },
            run: function(r) {
                var s, u = Qt.propHooks[this.prop];
                return this.options.duration ? this.pos = s = d.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : Qt.propHooks._default.set(this), this
            }
        }, Qt.prototype.init.prototype = Qt.prototype, Qt.propHooks = {
            _default: {
                get: function(r) {
                    var s;
                    return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = d.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s)
                },
                set: function(r) {
                    d.fx.step[r.prop] ? d.fx.step[r.prop](r) : r.elem.nodeType === 1 && (d.cssHooks[r.prop] || r.elem.style[be(r.prop)] != null) ? d.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
                }
            }
        }, Qt.propHooks.scrollTop = Qt.propHooks.scrollLeft = {
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
        }, d.fx = Qt.prototype.init, d.fx.step = {};
        var qt, Hi, wo = /^(?:toggle|show|hide)$/,
            bo = /queueHooks$/;

        function Or() {
            Hi && (M.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, d.fx.interval), d.fx.tick())
        }

        function Tr() {
            return e.setTimeout(function() {
                qt = void 0
            }), qt = Date.now()
        }

        function Yi(r, s) {
            var u, p = 0,
                y = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) u = wt[p], y["margin" + u] = y["padding" + u] = r;
            return s && (y.opacity = y.width = r), y
        }

        function gs(r, s, u) {
            for (var p, y = (wn.tweeners[s] || []).concat(wn.tweeners["*"]), C = 0, k = y.length; C < k; C++)
                if (p = y[C].call(u, s, r)) return p
        }

        function Co(r, s, u) {
            var p, y, C, k, G, F, $, le, we = "width" in s || "height" in s,
                ne = this,
                ce = {},
                Ye = r.style,
                rt = r.nodeType && j(r),
                je = he.get(r, "fxshow");
            u.queue || (k = d._queueHooks(r, "fx"), k.unqueued == null && (k.unqueued = 0, G = k.empty.fire, k.empty.fire = function() {
                k.unqueued || G()
            }), k.unqueued++, ne.always(function() {
                ne.always(function() {
                    k.unqueued--, d.queue(r, "fx").length || k.empty.fire()
                })
            }));
            for (p in s)
                if (y = s[p], wo.test(y)) {
                    if (delete s[p], C = C || y === "toggle", y === (rt ? "hide" : "show"))
                        if (y === "show" && je && je[p] !== void 0) rt = !0;
                        else continue;
                    ce[p] = je && je[p] || d.style(r, p)
                } if (F = !d.isEmptyObject(s), !(!F && d.isEmptyObject(ce))) {
                we && r.nodeType === 1 && (u.overflow = [Ye.overflow, Ye.overflowX, Ye.overflowY], $ = je && je.display, $ == null && ($ = he.get(r, "display")), le = d.css(r, "display"), le === "none" && ($ ? le = $ : (Y([r], !0), $ = r.style.display || $, le = d.css(r, "display"), Y([r]))), (le === "inline" || le === "inline-block" && $ != null) && d.css(r, "float") === "none" && (F || (ne.done(function() {
                    Ye.display = $
                }), $ == null && (le = Ye.display, $ = le === "none" ? "" : le)), Ye.display = "inline-block")), u.overflow && (Ye.overflow = "hidden", ne.always(function() {
                    Ye.overflow = u.overflow[0], Ye.overflowX = u.overflow[1], Ye.overflowY = u.overflow[2]
                })), F = !1;
                for (p in ce) F || (je ? "hidden" in je && (rt = je.hidden) : je = he.access(r, "fxshow", {
                    display: $
                }), C && (je.hidden = !rt), rt && Y([r], !0), ne.done(function() {
                    rt || Y([r]), he.remove(r, "fxshow");
                    for (p in ce) d.style(r, p, ce[p])
                })), F = gs(rt ? je[p] : 0, p, ne), p in je || (je[p] = F.start, rt && (F.end = F.start, F.start = 0))
            }
        }

        function As(r, s) {
            var u, p, y, C, k;
            for (u in r)
                if (p = N(u), y = s[p], C = r[u], Array.isArray(C) && (y = C[1], C = r[u] = C[0]), u !== p && (r[p] = C, delete r[u]), k = d.cssHooks[p], k && "expand" in k) {
                    C = k.expand(C), delete r[p];
                    for (u in C) u in r || (r[u] = C[u], s[u] = y)
                } else s[p] = y
        }

        function wn(r, s, u) {
            var p, y, C = 0,
                k = wn.prefilters.length,
                G = d.Deferred().always(function() {
                    delete F.elem
                }),
                F = function() {
                    if (y) return !1;
                    for (var we = qt || Tr(), ne = Math.max(0, $.startTime + $.duration - we), ce = ne / $.duration || 0, Ye = 1 - ce, rt = 0, je = $.tweens.length; rt < je; rt++) $.tweens[rt].run(Ye);
                    return G.notifyWith(r, [$, Ye, ne]), Ye < 1 && je ? ne : (je || G.notifyWith(r, [$, 1, 0]), G.resolveWith(r, [$]), !1)
                },
                $ = G.promise({
                    elem: r,
                    props: d.extend({}, s),
                    opts: d.extend(!0, {
                        specialEasing: {},
                        easing: d.easing._default
                    }, u),
                    originalProperties: s,
                    originalOptions: u,
                    startTime: qt || Tr(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(we, ne) {
                        var ce = d.Tween(r, $.opts, we, ne, $.opts.specialEasing[we] || $.opts.easing);
                        return $.tweens.push(ce), ce
                    },
                    stop: function(we) {
                        var ne = 0,
                            ce = we ? $.tweens.length : 0;
                        if (y) return this;
                        for (y = !0; ne < ce; ne++) $.tweens[ne].run(1);
                        return we ? (G.notifyWith(r, [$, 1, 0]), G.resolveWith(r, [$, we])) : G.rejectWith(r, [$, we]), this
                    }
                }),
                le = $.props;
            for (As(le, $.opts.specialEasing); C < k; C++)
                if (p = wn.prefilters[C].call($, r, le, $.opts), p) return re(p.stop) && (d._queueHooks($.elem, $.opts.queue).stop = p.stop.bind(p)), p;
            return d.map(le, gs, $), re($.opts.start) && $.opts.start.call(r, $), $.progress($.opts.progress).done($.opts.done, $.opts.complete).fail($.opts.fail).always($.opts.always), d.fx.timer(d.extend(F, {
                elem: r,
                anim: $,
                queue: $.opts.queue
            })), $
        }
        d.Animation = d.extend(wn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return P(u.elem, r, vt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    re(r) ? (s = r, r = ["*"]) : r = r.match(Ie);
                    for (var u, p = 0, y = r.length; p < y; p++) u = r[p], wn.tweeners[u] = wn.tweeners[u] || [], wn.tweeners[u].unshift(s)
                },
                prefilters: [Co],
                prefilter: function(r, s) {
                    s ? wn.prefilters.unshift(r) : wn.prefilters.push(r)
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
                    var y = d.isEmptyObject(r),
                        C = d.speed(s, u, p),
                        k = function() {
                            var G = wn(this, d.extend({}, r), C);
                            (y || he.get(this, "finish")) && G.stop(!0)
                        };
                    return k.finish = k, y || C.queue === !1 ? this.each(k) : this.queue(C.queue, k)
                },
                stop: function(r, s, u) {
                    var p = function(y) {
                        var C = y.stop;
                        delete y.stop, C(u)
                    };
                    return typeof r != "string" && (u = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
                        var y = !0,
                            C = r != null && r + "queueHooks",
                            k = d.timers,
                            G = he.get(this);
                        if (C) G[C] && G[C].stop && p(G[C]);
                        else
                            for (C in G) G[C] && G[C].stop && bo.test(C) && p(G[C]);
                        for (C = k.length; C--;) k[C].elem === this && (r == null || k[C].queue === r) && (k[C].anim.stop(u), y = !1, k.splice(C, 1));
                        (y || !u) && d.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = he.get(this),
                            p = u[r + "queue"],
                            y = u[r + "queueHooks"],
                            C = d.timers,
                            k = p ? p.length : 0;
                        for (u.finish = !0, d.queue(this, r, []), y && y.stop && y.stop.call(this, !0), s = C.length; s--;) C[s].elem === this && C[s].queue === r && (C[s].anim.stop(!0), C.splice(s, 1));
                        for (s = 0; s < k; s++) p[s] && p[s].finish && p[s].finish.call(this);
                        delete u.finish
                    })
                }
            }), d.each(["toggle", "show", "hide"], function(r, s) {
                var u = d.fn[s];
                d.fn[s] = function(p, y, C) {
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Yi(s, !0), p, y, C)
                }
            }), d.each({
                slideDown: Yi("show"),
                slideUp: Yi("hide"),
                slideToggle: Yi("toggle"),
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
                d.fn[r] = function(u, p, y) {
                    return this.animate(s, u, p, y)
                }
            }), d.timers = [], d.fx.tick = function() {
                var r, s = 0,
                    u = d.timers;
                for (qt = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || d.fx.stop(), qt = void 0
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
                    var y = e.setTimeout(u, r);
                    p.stop = function() {
                        e.clearTimeout(y)
                    }
                })
            },
            function() {
                var r = M.createElement("input"),
                    s = M.createElement("select"),
                    u = s.appendChild(M.createElement("option"));
                r.type = "checkbox", K.checkOn = r.value !== "", K.optSelected = u.selected, r = M.createElement("input"), r.value = "t", r.type = "radio", K.radioValue = r.value === "t"
            }();
        var Lr, bi = d.expr.attrHandle;
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
                var p, y, C = r.nodeType;
                if (!(C === 3 || C === 8 || C === 2)) {
                    if (typeof r.getAttribute > "u") return d.prop(r, s, u);
                    if ((C !== 1 || !d.isXMLDoc(r)) && (y = d.attrHooks[s.toLowerCase()] || (d.expr.match.bool.test(s) ? Lr : void 0)), u !== void 0) {
                        if (u === null) {
                            d.removeAttr(r, s);
                            return
                        }
                        return y && "set" in y && (p = y.set(r, u, s)) !== void 0 ? p : (r.setAttribute(s, u + ""), u)
                    }
                    return y && "get" in y && (p = y.get(r, s)) !== null ? p : (p = d.find.attr(r, s), p == null ? void 0 : p)
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
                    y = s && s.match(Ie);
                if (y && r.nodeType === 1)
                    for (; u = y[p++];) r.removeAttribute(u)
            }
        }), Lr = {
            set: function(r, s, u) {
                return s === !1 ? d.removeAttr(r, u) : r.setAttribute(u, u), u
            }
        }, d.each(d.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var u = bi[s] || d.find.attr;
            bi[s] = function(p, y, C) {
                var k, G, F = y.toLowerCase();
                return C || (G = bi[F], bi[F] = k, k = u(p, y, C) != null ? F : null, bi[F] = G), k
            }
        });
        var Eo = /^(?:input|select|textarea|button)$/i,
            xo = /^(?:a|area)$/i;
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
                var p, y, C = r.nodeType;
                if (!(C === 3 || C === 8 || C === 2)) return (C !== 1 || !d.isXMLDoc(r)) && (s = d.propFix[s] || s, y = d.propHooks[s]), u !== void 0 ? y && "set" in y && (p = y.set(r, u, s)) !== void 0 ? p : r[s] = u : y && "get" in y && (p = y.get(r, s)) !== null ? p : r[s]
            },
            propHooks: {
                tabIndex: {
                    get: function(r) {
                        var s = d.find.attr(r, "tabindex");
                        return s ? parseInt(s, 10) : Eo.test(r.nodeName) || xo.test(r.nodeName) && r.href ? 0 : -1
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

        function Wn(r) {
            var s = r.match(Ie) || [];
            return s.join(" ")
        }

        function zn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Br(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Ie) || [] : []
        }
        d.fn.extend({
            addClass: function(r) {
                var s, u, p, y, C, k, G, F = 0;
                if (re(r)) return this.each(function($) {
                    d(this).addClass(r.call(this, $, zn(this)))
                });
                if (s = Br(r), s.length) {
                    for (; u = this[F++];)
                        if (y = zn(u), p = u.nodeType === 1 && " " + Wn(y) + " ", p) {
                            for (k = 0; C = s[k++];) p.indexOf(" " + C + " ") < 0 && (p += C + " ");
                            G = Wn(p), y !== G && u.setAttribute("class", G)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, y, C, k, G, F = 0;
                if (re(r)) return this.each(function($) {
                    d(this).removeClass(r.call(this, $, zn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Br(r), s.length) {
                    for (; u = this[F++];)
                        if (y = zn(u), p = u.nodeType === 1 && " " + Wn(y) + " ", p) {
                            for (k = 0; C = s[k++];)
                                for (; p.indexOf(" " + C + " ") > -1;) p = p.replace(" " + C + " ", " ");
                            G = Wn(p), y !== G && u.setAttribute("class", G)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(y) {
                    d(this).toggleClass(r.call(this, y, zn(this), s), s)
                }) : this.each(function() {
                    var y, C, k, G;
                    if (p)
                        for (C = 0, k = d(this), G = Br(r); y = G[C++];) k.hasClass(y) ? k.removeClass(y) : k.addClass(y);
                    else(r === void 0 || u === "boolean") && (y = zn(this), y && he.set(this, "__className__", y), this.setAttribute && this.setAttribute("class", y || r === !1 ? "" : he.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, u, p = 0;
                for (s = " " + r + " "; u = this[p++];)
                    if (u.nodeType === 1 && (" " + Wn(zn(u)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var So = /\r/g;
        d.fn.extend({
            val: function(r) {
                var s, u, p, y = this[0];
                return arguments.length ? (p = re(r), this.each(function(C) {
                    var k;
                    this.nodeType === 1 && (p ? k = r.call(this, C, d(this).val()) : k = r, k == null ? k = "" : typeof k == "number" ? k += "" : Array.isArray(k) && (k = d.map(k, function(G) {
                        return G == null ? "" : G + ""
                    })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, k, "value") === void 0) && (this.value = k))
                })) : y ? (s = d.valHooks[y.type] || d.valHooks[y.nodeName.toLowerCase()], s && "get" in s && (u = s.get(y, "value")) !== void 0 ? u : (u = y.value, typeof u == "string" ? u.replace(So, "") : u == null ? "" : u)) : void 0
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
                        var s, u, p, y = r.options,
                            C = r.selectedIndex,
                            k = r.type === "select-one",
                            G = k ? null : [],
                            F = k ? C + 1 : y.length;
                        for (C < 0 ? p = F : p = k ? C : 0; p < F; p++)
                            if (u = y[p], (u.selected || p === C) && !u.disabled && (!u.parentNode.disabled || !J(u.parentNode, "optgroup"))) {
                                if (s = d(u).val(), k) return s;
                                G.push(s)
                            } return G
                    },
                    set: function(r, s) {
                        for (var u, p, y = r.options, C = d.makeArray(s), k = y.length; k--;) p = y[k], (p.selected = d.inArray(d.valHooks.option.get(p), C) > -1) && (u = !0);
                        return u || (r.selectedIndex = -1), C
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
            Qn = function(r) {
                r.stopPropagation()
            };
        d.extend(d.event, {
            trigger: function(r, s, u, p) {
                var y, C, k, G, F, $, le, we, ne = [u || M],
                    ce = U.call(r, "type") ? r.type : r,
                    Ye = U.call(r, "namespace") ? r.namespace.split(".") : [];
                if (C = we = k = u = u || M, !(u.nodeType === 3 || u.nodeType === 8) && !Dr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (Ye = ce.split("."), ce = Ye.shift(), Ye.sort()), F = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ye.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ye.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                    if (!p && !le.noBubble && !m(u)) {
                        for (G = le.delegateType || ce, Dr.test(G + ce) || (C = C.parentNode); C; C = C.parentNode) ne.push(C), k = C;
                        k === (u.ownerDocument || M) && ne.push(k.defaultView || k.parentWindow || e)
                    }
                    for (y = 0;
                        (C = ne[y++]) && !r.isPropagationStopped();) we = C, r.type = y > 1 ? G : le.bindType || ce, $ = (he.get(C, "events") || Object.create(null))[r.type] && he.get(C, "handle"), $ && $.apply(C, s), $ = F && C[F], $ && $.apply && te(C) && (r.result = $.apply(C, s), r.result === !1 && r.preventDefault());
                    return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), s) === !1) && te(u) && F && re(u[ce]) && !m(u) && (k = u[F], k && (u[F] = null), d.event.triggered = ce, r.isPropagationStopped() && we.addEventListener(ce, Qn), u[ce](), r.isPropagationStopped() && we.removeEventListener(ce, Qn), d.event.triggered = void 0, k && (u[F] = k)), r.result
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
                        y = he.access(p, s);
                    y || p.addEventListener(r, u, !0), he.access(p, s, (y || 0) + 1)
                },
                teardown: function() {
                    var p = this.ownerDocument || this.document || this,
                        y = he.access(p, s) - 1;
                    y ? he.access(p, s, y) : (p.removeEventListener(r, u, !0), he.remove(p, s))
                }
            }
        });
        var Ci = e.location,
            Rr = {
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
        var Io = /\[\]$/,
            ms = /\r?\n/g,
            ko = /^(?:submit|button|image|reset|file)$/i,
            _o = /^(?:input|select|textarea|keygen)/i;

        function Mr(r, s, u, p) {
            var y;
            if (Array.isArray(s)) d.each(s, function(C, k) {
                u || Io.test(r) ? p(r, k) : Mr(r + "[" + (typeof k == "object" && k != null ? C : "") + "]", k, u, p)
            });
            else if (!u && se(s) === "object")
                for (y in s) Mr(r + "[" + y + "]", s[y], u, p);
            else p(r, s)
        }
        d.param = function(r, s) {
            var u, p = [],
                y = function(C, k) {
                    var G = re(k) ? k() : k;
                    p[p.length] = encodeURIComponent(C) + "=" + encodeURIComponent(G == null ? "" : G)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !d.isPlainObject(r)) d.each(r, function() {
                y(this.name, this.value)
            });
            else
                for (u in r) Mr(u, r[u], s, y);
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
                    return this.name && !d(this).is(":disabled") && _o.test(this.nodeName) && !ko.test(r) && (this.checked || !fe.test(r))
                }).map(function(r, s) {
                    var u = d(this).val();
                    return u == null ? null : Array.isArray(u) ? d.map(u, function(p) {
                        return {
                            name: s.name,
                            value: p.replace(ms, `\r
`)
                        }
                    }) : {
                        name: s.name,
                        value: u.replace(ms, `\r
`)
                    }
                }).get()
            }
        });
        var Oo = /%20/g,
            To = /#.*$/,
            Lo = /([?&])_=[^&]*/,
            Kn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            vs = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Bo = /^(?:GET|HEAD)$/,
            Do = /^\/\//,
            ys = {},
            Pr = {},
            ws = "*/".concat("*"),
            Nr = M.createElement("a");
        Nr.href = Ci.href;

        function bs(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, y = 0,
                    C = s.toLowerCase().match(Ie) || [];
                if (re(u))
                    for (; p = C[y++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function Cs(r, s, u, p) {
            var y = {},
                C = r === Pr;

            function k(G) {
                var F;
                return y[G] = !0, d.each(r[G] || [], function($, le) {
                    var we = le(s, u, p);
                    if (typeof we == "string" && !C && !y[we]) return s.dataTypes.unshift(we), k(we), !1;
                    if (C) return !(F = we)
                }), F
            }
            return k(s.dataTypes[0]) || !y["*"] && k("*")
        }

        function Vr(r, s) {
            var u, p, y = d.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((y[u] ? r : p || (p = {}))[u] = s[u]);
            return p && d.extend(!0, r, p), r
        }

        function Ro(r, s, u) {
            for (var p, y, C, k, G = r.contents, F = r.dataTypes; F[0] === "*";) F.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (y in G)
                    if (G[y] && G[y].test(p)) {
                        F.unshift(y);
                        break
                    }
            }
            if (F[0] in u) C = F[0];
            else {
                for (y in u) {
                    if (!F[0] || r.converters[y + " " + F[0]]) {
                        C = y;
                        break
                    }
                    k || (k = y)
                }
                C = C || k
            }
            if (C) return C !== F[0] && F.unshift(C), u[C]
        }

        function Mo(r, s, u, p) {
            var y, C, k, G, F, $ = {},
                le = r.dataTypes.slice();
            if (le[1])
                for (k in r.converters) $[k.toLowerCase()] = r.converters[k];
            for (C = le.shift(); C;)
                if (r.responseFields[C] && (u[r.responseFields[C]] = s), !F && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), F = C, C = le.shift(), C) {
                    if (C === "*") C = F;
                    else if (F !== "*" && F !== C) {
                        if (k = $[F + " " + C] || $["* " + C], !k) {
                            for (y in $)
                                if (G = y.split(" "), G[1] === C && (k = $[F + " " + G[0]] || $["* " + G[0]], k)) {
                                    k === !0 ? k = $[y] : $[y] !== !0 && (C = G[0], le.unshift(G[1]));
                                    break
                                }
                        }
                        if (k !== !0)
                            if (k && r.throws) s = k(s);
                            else try {
                                s = k(s)
                            } catch (we) {
                                return {
                                    state: "parsererror",
                                    error: k ? we : "No conversion from " + F + " to " + C
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
                url: Ci.href,
                type: "GET",
                isLocal: vs.test(Ci.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ws,
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
            ajaxPrefilter: bs(ys),
            ajaxTransport: bs(Pr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, y, C, k, G, F, $, le, we, ne = d.ajaxSetup({}, s),
                    ce = ne.context || ne,
                    Ye = ne.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                    rt = d.Deferred(),
                    je = d.Callbacks("once memory"),
                    Gt = ne.statusCode || {},
                    Pt = {},
                    un = {},
                    xt = "canceled",
                    et = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Bt;
                            if (F) {
                                if (!C)
                                    for (C = {}; Bt = Kn.exec(y);) C[Bt[1].toLowerCase() + " "] = (C[Bt[1].toLowerCase() + " "] || []).concat(Bt[2]);
                                Bt = C[ft.toLowerCase() + " "]
                            }
                            return Bt == null ? null : Bt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return F ? y : null
                        },
                        setRequestHeader: function(ft, Bt) {
                            return F == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Pt[ft] = Bt), this
                        },
                        overrideMimeType: function(ft) {
                            return F == null && (ne.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Bt;
                            if (ft)
                                if (F) et.always(ft[et.status]);
                                else
                                    for (Bt in ft) Gt[Bt] = [Gt[Bt], ft[Bt]];
                            return this
                        },
                        abort: function(ft) {
                            var Bt = ft || xt;
                            return u && u.abort(Bt), on(0, Bt), this
                        }
                    };
                if (rt.promise(et), ne.url = ((r || ne.url || Ci.href) + "").replace(Do, Ci.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(Ie) || [""], ne.crossDomain == null) {
                    G = M.createElement("a");
                    try {
                        G.href = ne.url, G.href = G.href, ne.crossDomain = Nr.protocol + "//" + Nr.host != G.protocol + "//" + G.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), Cs(ys, ne, s, et), F) return et;
                $ = d.event && ne.global, $ && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Bo.test(ne.type), p = ne.url.replace(To, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Oo, "+")) : (we = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Wi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Lo, "$1"), we = (Wi.test(p) ? "&" : "?") + "_=" + Rr.guid++ + we), ne.url = p + we), ne.ifModified && (d.lastModified[p] && et.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && et.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", ne.contentType), et.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + ws + "; q=0.01" : "") : ne.accepts["*"]);
                for (le in ne.headers) et.setRequestHeader(le, ne.headers[le]);
                if (ne.beforeSend && (ne.beforeSend.call(ce, et, ne) === !1 || F)) return et.abort();
                if (xt = "abort", je.add(ne.complete), et.done(ne.success), et.fail(ne.error), u = Cs(Pr, ne, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, $ && Ye.trigger("ajaxSend", [et, ne]), F) return et;
                    ne.async && ne.timeout > 0 && (k = e.setTimeout(function() {
                        et.abort("timeout")
                    }, ne.timeout));
                    try {
                        F = !1, u.send(Pt, on)
                    } catch (ft) {
                        if (F) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Bt, xi, zi) {
                    var hn, Jn, Xn, an, Dn, mn = Bt;
                    F || (F = !0, k && e.clearTimeout(k), u = void 0, y = zi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, xi && (an = Ro(ne, et, xi)), !hn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = Mo(ne, an, et, hn), hn ? (ne.ifModified && (Dn = et.getResponseHeader("Last-Modified"), Dn && (d.lastModified[p] = Dn), Dn = et.getResponseHeader("etag"), Dn && (d.etag[p] = Dn)), ft === 204 || ne.type === "HEAD" ? mn = "nocontent" : ft === 304 ? mn = "notmodified" : (mn = an.state, Jn = an.data, Xn = an.error, hn = !Xn)) : (Xn = mn, (ft || !mn) && (mn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Bt || mn) + "", hn ? rt.resolveWith(ce, [Jn, mn, et]) : rt.rejectWith(ce, [et, mn, Xn]), et.statusCode(Gt), Gt = void 0, $ && Ye.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, ne, hn ? Jn : Xn]), je.fireWith(ce, [et, mn]), $ && (Ye.trigger("ajaxComplete", [et, ne]), --d.active || d.event.trigger("ajaxStop")))
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
            d[s] = function(u, p, y, C) {
                return re(p) && (C = C || y, y = p, p = void 0), d.ajax(d.extend({
                    url: u,
                    type: s,
                    dataType: C,
                    data: p,
                    success: y
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
        var Po = {
                0: 200,
                1223: 204
            },
            Ei = d.ajaxSettings.xhr();
        K.cors = !!Ei && "withCredentials" in Ei, K.ajax = Ei = !!Ei, d.ajaxTransport(function(r) {
            var s, u;
            if (K.cors || Ei && !r.crossDomain) return {
                send: function(p, y) {
                    var C, k = r.xhr();
                    if (k.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (C in r.xhrFields) k[C] = r.xhrFields[C];
                    r.mimeType && k.overrideMimeType && k.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (C in p) k.setRequestHeader(C, p[C]);
                    s = function(G) {
                        return function() {
                            s && (s = u = k.onload = k.onerror = k.onabort = k.ontimeout = k.onreadystatechange = null, G === "abort" ? k.abort() : G === "error" ? typeof k.status != "number" ? y(0, "error") : y(k.status, k.statusText) : y(Po[k.status] || k.status, k.statusText, (k.responseType || "text") !== "text" || typeof k.responseText != "string" ? {
                                binary: k.response
                            } : {
                                text: k.responseText
                            }, k.getAllResponseHeaders()))
                        }
                    }, k.onload = s(), u = k.onerror = k.ontimeout = s("error"), k.onabort !== void 0 ? k.onabort = u : k.onreadystatechange = function() {
                        k.readyState === 4 && e.setTimeout(function() {
                            s && u()
                        })
                    }, s = s("abort");
                    try {
                        k.send(r.hasContent && r.data || null)
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
                    send: function(p, y) {
                        s = d("<script>").attr(r.scriptAttrs || {}).prop({
                            charset: r.scriptCharset,
                            src: r.url
                        }).on("load error", u = function(C) {
                            s.remove(), u = null, C && y(C.type === "error" ? 404 : 200, C.type)
                        }), M.head.appendChild(s[0])
                    },
                    abort: function() {
                        u && u()
                    }
                }
            }
        });
        var Ur = [],
            jr = /(=)\?(?=&|$)|\?\?/;
        d.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = Ur.pop() || d.expando + "_" + Rr.guid++;
                return this[r] = !0, r
            }
        }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, y, C, k = r.jsonp !== !1 && (jr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && jr.test(r.data) && "data");
            if (k || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, k ? r[k] = r[k].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (Wi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return C || d.error(p + " was not called"), C[0]
            }, r.dataTypes[0] = "json", y = e[p], e[p] = function() {
                C = arguments
            }, u.always(function() {
                y === void 0 ? d(e).removeProp(p) : e[p] = y, r[p] && (r.jsonpCallback = s.jsonpCallback, Ur.push(p)), C && re(y) && y(C[0]), C = y = void 0
            }), "script"
        }), K.createHTMLDocument = function() {
            var r = M.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), d.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, y, C;
            return s || (K.createHTMLDocument ? (s = M.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = M.location.href, s.head.appendChild(p)) : s = M), y = qe.exec(r), C = !u && [], y ? [s.createElement(y[1])] : (y = Ln([r], s, C), C && C.length && d(C).remove(), d.merge([], y.childNodes))
        }, d.fn.load = function(r, s, u) {
            var p, y, C, k = this,
                G = r.indexOf(" ");
            return G > -1 && (p = Wn(r.slice(G)), r = r.slice(0, G)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (y = "POST"), k.length > 0 && d.ajax({
                url: r,
                type: y || "GET",
                dataType: "html",
                data: s
            }).done(function(F) {
                C = arguments, k.html(p ? d("<div>").append(d.parseHTML(F)).find(p) : F)
            }).always(u && function(F, $) {
                k.each(function() {
                    u.apply(this, C || [F.responseText, $, F])
                })
            }), this
        }, d.expr.pseudos.animated = function(r) {
            return d.grep(d.timers, function(s) {
                return r === s.elem
            }).length
        }, d.offset = {
            setOffset: function(r, s, u) {
                var p, y, C, k, G, F, $, le = d.css(r, "position"),
                    we = d(r),
                    ne = {};
                le === "static" && (r.style.position = "relative"), G = we.offset(), C = d.css(r, "top"), F = d.css(r, "left"), $ = (le === "absolute" || le === "fixed") && (C + F).indexOf("auto") > -1, $ ? (p = we.position(), k = p.top, y = p.left) : (k = parseFloat(C) || 0, y = parseFloat(F) || 0), re(s) && (s = s.call(r, u, d.extend({}, G))), s.top != null && (ne.top = s.top - G.top + k), s.left != null && (ne.left = s.left - G.left + y), "using" in s ? s.using.call(r, ne) : we.css(ne)
            }
        }, d.fn.extend({
            offset: function(r) {
                if (arguments.length) return r === void 0 ? this : this.each(function(y) {
                    d.offset.setOffset(this, r, y)
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
                        y = {
                            top: 0,
                            left: 0
                        };
                    if (d.css(p, "position") === "fixed") s = p.getBoundingClientRect();
                    else {
                        for (s = this.offset(), u = p.ownerDocument, r = p.offsetParent || u.documentElement; r && (r === u.body || r === u.documentElement) && d.css(r, "position") === "static";) r = r.parentNode;
                        r && r !== p && r.nodeType === 1 && (y = d(r).offset(), y.top += d.css(r, "borderTopWidth", !0), y.left += d.css(r, "borderLeftWidth", !0))
                    }
                    return {
                        top: s.top - y.top - d.css(p, "marginTop", !0),
                        left: s.left - y.left - d.css(p, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var r = this.offsetParent; r && d.css(r, "position") === "static";) r = r.offsetParent;
                    return r || Jt
                })
            }
        }), d.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(r, s) {
            var u = s === "pageYOffset";
            d.fn[r] = function(p) {
                return g(this, function(y, C, k) {
                    var G;
                    if (m(y) ? G = y : y.nodeType === 9 && (G = y.defaultView), k === void 0) return G ? G[s] : y[C];
                    G ? G.scrollTo(u ? G.pageXOffset : k, u ? k : G.pageYOffset) : y[C] = k
                }, r, p, arguments.length)
            }
        }), d.each(["top", "left"], function(r, s) {
            d.cssHooks[s] = v(K.pixelPosition, function(u, p) {
                if (p) return p = $e(u, s), yi.test(p) ? d(u).position()[s] + "px" : p
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
                d.fn[p] = function(y, C) {
                    var k = arguments.length && (u || typeof y != "boolean"),
                        G = u || (y === !0 || C === !0 ? "margin" : "border");
                    return g(this, function(F, $, le) {
                        var we;
                        return m(F) ? p.indexOf("outer") === 0 ? F["inner" + r] : F.document.documentElement["client" + r] : F.nodeType === 9 ? (we = F.documentElement, Math.max(F.body["scroll" + r], we["scroll" + r], F.body["offset" + r], we["offset" + r], we["client" + r])) : le === void 0 ? d.css(F, $, G) : d.style(F, $, le, G)
                    }, s, k ? y : void 0, k)
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
            var u, p, y;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = f.call(arguments, 2), y = function() {
                return r.apply(s || this, p.concat(f.call(arguments)))
            }, y.guid = r.guid = r.guid || d.guid++, y
        }, d.holdReady = function(r) {
            r ? d.readyWait++ : d.ready(!0)
        }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = J, d.isFunction = re, d.isWindow = m, d.camelCase = N, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
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
})(Pa);
const Le = Pa.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof mt == "object" && mt.global === mt && mt; {
            var i = Mi.exports,
                o;
            try {
                o = Pa.exports
            } catch {}
            e(n, t, i, o)
        }
    })(function(e, n, i, o) {
        var f = e.Backbone,
            A = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = o, n.noConflict = function() {
            return e.Backbone = f, this
        }, n.emulateHTTP = !1, n.emulateJSON = !1;
        var S = function(E, l, g) {
                switch (E) {
                    case 1:
                        return function() {
                            return i[l](this[g])
                        };
                    case 2:
                        return function(x) {
                            return i[l](this[g], x)
                        };
                    case 3:
                        return function(x, O) {
                            return i[l](this[g], L(x, this), O)
                        };
                    case 4:
                        return function(x, O, R) {
                            return i[l](this[g], L(x, this), O, R)
                        };
                    default:
                        return function() {
                            var x = A.call(arguments);
                            return x.unshift(this[g]), i[l].apply(i, x)
                        }
                }
            },
            I = function(E, l, g) {
                i.each(l, function(x, O) {
                    i[O] && (E.prototype[O] = S(x, O, g))
                })
            },
            L = function(E, l) {
                return i.isFunction(E) ? E : i.isObject(E) && !l._isModel(E) ? B(E) : i.isString(E) ? function(g) {
                    return g.get(E)
                } : E
            },
            B = function(E) {
                var l = i.matches(E);
                return function(g) {
                    return l(g.attributes)
                }
            },
            U = n.Events = {},
            X = /\s+/,
            ie = function(E, l, g, x, O) {
                var R = 0,
                    N;
                if (g && typeof g == "object")
                    for (x !== void 0 && ("context" in O) && O.context === void 0 && (O.context = x), N = i.keys(g); R < N.length; R++) l = ie(E, l, N[R], g[N[R]], O);
                else if (g && X.test(g))
                    for (N = g.split(X); R < N.length; R++) l = E(l, N[R], x, O);
                else l = E(l, g, x, O);
                return l
            };
        U.on = function(E, l, g) {
            return K(this, E, l, g)
        };
        var K = function(E, l, g, x, O) {
            if (E._events = ie(re, E._events || {}, l, g, {
                    context: x,
                    ctx: E,
                    listening: O
                }), O) {
                var R = E._listeners || (E._listeners = {});
                R[O.id] = O
            }
            return E
        };
        U.listenTo = function(E, l, g) {
            if (!E) return this;
            var x = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                R = O[x];
            if (!R) {
                var N = this._listenId || (this._listenId = i.uniqueId("l"));
                R = O[x] = {
                    obj: E,
                    objId: x,
                    id: N,
                    listeningTo: O,
                    count: 0
                }
            }
            return K(E, l, g, this, R), this
        };
        var re = function(E, l, g, x) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    R = x.context,
                    N = x.ctx,
                    te = x.listening;
                te && te.count++, O.push({
                    callback: g,
                    context: R,
                    ctx: R || N,
                    listening: te
                })
            }
            return E
        };
        U.off = function(E, l, g) {
            return this._events ? (this._events = ie(m, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, U.stopListening = function(E, l, g) {
            var x = this._listeningTo;
            if (!x) return this;
            for (var O = E ? [E._listenId] : i.keys(x), R = 0; R < O.length; R++) {
                var N = x[O[R]];
                if (!N) break;
                N.obj.off(l, g, this)
            }
            return this
        };
        var m = function(E, l, g, x) {
            if (!!E) {
                var O = 0,
                    R, N = x.context,
                    te = x.listeners;
                if (!l && !g && !N) {
                    for (var Se = i.keys(te); O < Se.length; O++) R = te[Se[O]], delete te[R.id], delete R.listeningTo[R.objId];
                    return
                }
                for (var he = l ? [l] : i.keys(E); O < he.length; O++) {
                    l = he[O];
                    var Be = E[l];
                    if (!Be) break;
                    for (var De = [], nt = 0; nt < Be.length; nt++) {
                        var bt = Be[nt];
                        g && g !== bt.callback && g !== bt.callback._callback || N && N !== bt.context ? De.push(bt) : (R = bt.listening, R && --R.count === 0 && (delete te[R.id], delete R.listeningTo[R.objId]))
                    }
                    De.length ? E[l] = De : delete E[l]
                }
                return E
            }
        };
        U.once = function(E, l, g) {
            var x = ie(M, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(x, l, g)
        }, U.listenToOnce = function(E, l, g) {
            var x = ie(M, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, x)
        };
        var M = function(E, l, g, x) {
            if (g) {
                var O = E[l] = i.once(function() {
                    x(l, O), g.apply(this, arguments)
                });
                O._callback = g
            }
            return E
        };
        U.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), x = 0; x < l; x++) g[x] = arguments[x + 1];
            return ie(W, this._events, E, void 0, g), this
        };
        var W = function(E, l, g, x) {
                if (E) {
                    var O = E[l],
                        R = E.all;
                    O && R && (R = R.slice()), O && ae(O, x), R && ae(R, [l].concat(x))
                }
                return E
            },
            ae = function(E, l) {
                var g, x = -1,
                    O = E.length,
                    R = l[0],
                    N = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++x < O;)(g = E[x]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++x < O;)(g = E[x]).callback.call(g.ctx, R);
                        return;
                    case 2:
                        for (; ++x < O;)(g = E[x]).callback.call(g.ctx, R, N);
                        return;
                    case 3:
                        for (; ++x < O;)(g = E[x]).callback.call(g.ctx, R, N, te);
                        return;
                    default:
                        for (; ++x < O;)(g = E[x]).callback.apply(g.ctx, l);
                        return
                }
            };
        U.bind = U.on, U.unbind = U.off, i.extend(n, U);
        var se = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var x = i.result(this, "defaults");
            g = i.defaults(i.extend({}, x, g), x), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(se.prototype, U, {
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
                var x;
                if (typeof E == "object" ? (x = E, g = l) : (x = {})[E] = l, g || (g = {}), !this._validate(x, g)) return !1;
                var O = g.unset,
                    R = g.silent,
                    N = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var Se = this.attributes,
                    he = this.changed,
                    Be = this._previousAttributes;
                for (var De in x) l = x[De], i.isEqual(Se[De], l) || N.push(De), i.isEqual(Be[De], l) ? delete he[De] : he[De] = l, O ? delete Se[De] : Se[De] = l;
                if (this.idAttribute in x && (this.id = this.get(this.idAttribute)), !R) {
                    N.length && (this._pending = g);
                    for (var nt = 0; nt < N.length; nt++) this.trigger("change:" + N[nt], this, Se[N[nt]], g)
                }
                if (te) return this;
                if (!R)
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
                for (var x in E) {
                    var O = E[x];
                    i.isEqual(l[x], O) || (g[x] = O)
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
                return E.success = function(x) {
                    var O = E.parse ? l.parse(x, E) : x;
                    if (!l.set(O, E)) return !1;
                    g && g.call(E.context, l, x, E), l.trigger("sync", l, x, E)
                }, Yt(this, E), this.sync("read", this, E)
            },
            save: function(E, l, g) {
                var x;
                E == null || typeof E == "object" ? (x = E, g = l) : (x = {})[E] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var O = g.wait;
                if (x && !O) {
                    if (!this.set(x, g)) return !1
                } else if (!this._validate(x, g)) return !1;
                var R = this,
                    N = g.success,
                    te = this.attributes;
                g.success = function(Be) {
                    R.attributes = te;
                    var De = g.parse ? R.parse(Be, g) : Be;
                    if (O && (De = i.extend({}, x, De)), De && !R.set(De, g)) return !1;
                    N && N.call(g.context, R, Be, g), R.trigger("sync", R, Be, g)
                }, Yt(this, g), x && O && (this.attributes = i.extend({}, te, x));
                var Se = this.isNew() ? "create" : g.patch ? "patch" : "update";
                Se === "patch" && !g.attrs && (g.attrs = x);
                var he = this.sync(Se, this, g);
                return this.attributes = te, he
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    x = E.wait,
                    O = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(N) {
                    x && O(), g && g.call(E.context, l, N, E), l.isNew() || l.trigger("sync", l, N, E)
                };
                var R = !1;
                return this.isNew() ? i.defer(E.success) : (Yt(this, E), R = this.sync("delete", this, E)), x || O(), R
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
        var me = {
            keys: 1,
            values: 1,
            pairs: 1,
            invert: 1,
            pick: 0,
            omit: 0,
            chain: 1,
            isEmpty: 1
        };
        I(se, me, "attributes");
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
            _e = {
                add: !0,
                remove: !1
            },
            Me = function(E, l, g) {
                g = Math.min(Math.max(g, 0), E.length);
                var x = Array(E.length - g),
                    O = l.length,
                    R;
                for (R = 0; R < x.length; R++) x[R] = E[R + g];
                for (R = 0; R < O; R++) E[R + g] = l[R];
                for (R = 0; R < x.length; R++) E[R + O + g] = x[R]
            };
        i.extend(d.prototype, U, {
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
                }, l, _e))
            },
            remove: function(E, l) {
                l = i.extend({}, l);
                var g = !i.isArray(E);
                E = g ? [E] : E.slice();
                var x = this._removeModels(E, l);
                return !l.silent && x.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: x
                }, this.trigger("update", this, l)), g ? x[0] : x
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, Ee, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var x = l.at;
                    x != null && (x = +x), x > this.length && (x = this.length), x < 0 && (x += this.length + 1);
                    var O = [],
                        R = [],
                        N = [],
                        te = [],
                        Se = {},
                        he = l.add,
                        Be = l.merge,
                        De = l.remove,
                        nt = !1,
                        bt = this.comparator && x == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, vt;
                    for (vt = 0; vt < E.length; vt++) {
                        ct = E[vt];
                        var wt = this.get(ct);
                        if (wt) {
                            if (Be && ct !== wt) {
                                var Jt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Jt = wt.parse(Jt, l)), wt.set(Jt, l), N.push(wt), bt && !nt && (nt = wt.hasChanged(rn))
                            }
                            Se[wt.cid] || (Se[wt.cid] = !0, O.push(wt)), E[vt] = wt
                        } else he && (ct = E[vt] = this._prepareModel(ct, l), ct && (R.push(ct), this._addReference(ct, l), Se[ct.cid] = !0, O.push(ct)))
                    }
                    if (De) {
                        for (vt = 0; vt < this.length; vt++) ct = this.models[vt], Se[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Xe = !1,
                        Rt = !bt && he && De;
                    if (O.length && Rt ? (Xe = this.length !== O.length || i.some(this.models, function(j, P) {
                            return j !== O[P]
                        }), this.models.length = 0, Me(this.models, O, 0), this.length = this.models.length) : R.length && (bt && (nt = !0), Me(this.models, R, x == null ? this.length : x), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (vt = 0; vt < R.length; vt++) x != null && (l.index = x + vt), ct = R[vt], ct.trigger("add", ct, this, l);
                        (nt || Xe) && this.trigger("sort", this, l), (R.length || te.length || N.length) && (l.changes = {
                            added: R,
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
                return A.apply(this.models, arguments)
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
                return E.success = function(x) {
                    var O = E.reset ? "reset" : "set";
                    g[O](x, E), l && l.call(E.context, g, x, E), g.trigger("sync", g, x, E)
                }, Yt(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var x = this,
                    O = l.success;
                return l.success = function(R, N, te) {
                    g && x.add(R, te), O && O.call(te.context, R, N, te)
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
                for (var g = [], x = 0; x < E.length; x++) {
                    var O = this.get(E[x]);
                    if (!!O) {
                        var R = this.indexOf(O);
                        this.models.splice(R, 1), this.length--, delete this._byId[O.cid];
                        var N = this.modelId(O.attributes);
                        N != null && delete this._byId[N], l.silent || (l.index = R, O.trigger("remove", O, this, l)), g.push(O), this._removeReference(O, l)
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
            _onModelEvent: function(E, l, g, x) {
                if (l) {
                    if ((E === "add" || E === "remove") && g !== this) return;
                    if (E === "destroy" && this.remove(l, x), E === "change") {
                        var O = this.modelId(l.previousAttributes()),
                            R = this.modelId(l.attributes);
                        O !== R && (O != null && delete this._byId[O], R != null && (this._byId[R] = l))
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
        I(d, lt, "models");
        var Ve = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, qe)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            J = /^(\S+)\s*(.*)$/,
            qe = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Ve.prototype, U, {
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
                        var x = l.match(J);
                        this.delegate(x[1], x[2], i.bind(g, this))
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
            var x = H[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var O = {
                type: x,
                dataType: "json"
            };
            if (g.url || (O.url = i.result(l, "url") || Vt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (O.contentType = "application/json", O.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (O.contentType = "application/x-www-form-urlencoded", O.data = O.data ? {
                    model: O.data
                } : {}), g.emulateHTTP && (x === "PUT" || x === "DELETE" || x === "PATCH")) {
                O.type = "POST", g.emulateJSON && (O.data._method = x);
                var R = g.beforeSend;
                g.beforeSend = function(Se) {
                    if (Se.setRequestHeader("X-HTTP-Method-Override", x), R) return R.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var N = g.error;
            g.error = function(Se, he, Be) {
                g.textStatus = he, g.errorThrown = Be, N && N.call(g.context, Se, he, Be)
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
            ke = /\((.*?)\)/g,
            ye = /(\(\?)?:\w+/g,
            ve = /\*\w+/g,
            ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(oe.prototype, U, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var x = this;
                return n.history.route(E, function(O) {
                    var R = x._extractParameters(E, O);
                    x.execute(g, R, l) !== !1 && (x.trigger.apply(x, ["route:" + l].concat(R)), x.trigger("route", l, R), n.history.trigger("route", x, l, R))
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
                return E = E.replace(ue, "\\$&").replace(ke, "(?:$1)?").replace(ye, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(ve, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(E, l) {
                var g = E.exec(l).slice(1);
                return i.map(g, function(x, O) {
                    return O === g.length - 1 ? x || null : x ? decodeURIComponent(x) : null
                })
            }
        });
        var xe = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Ie = /^[#\/]|\s+$/g,
            Ue = /^\/+|\/+$/g,
            Je = /#.*$/;
        xe.started = !1, i.extend(xe.prototype, U, {
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
                return E == null && (this._usePushState || !this._wantsHashChange ? E = this.getPath() : E = this.getHash()), E.replace(Ie, "")
            },
            start: function(E) {
                if (xe.started) throw new Error("Backbone.history has already been started");
                if (xe.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, E), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(Ue, "/"), this._wantsHashChange && this._wantsPushState)
                    if (!this._hasPushState && !this.atRoot()) {
                        var l = this.root.slice(0, -1) || "/";
                        return this.location.replace(l + "#" + this.getPath()), !0
                    } else this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                        replace: !0
                    });
                if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                    this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                    var g = document.body,
                        x = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    x.document.open(), x.document.close(), x.location.hash = "#" + this.fragment
                }
                var O = window.addEventListener || function(R, N) {
                    return attachEvent("on" + R, N)
                };
                if (this._usePushState ? O("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? O("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
            },
            stop: function() {
                var E = window.removeEventListener || function(l, g) {
                    return detachEvent("on" + l, g)
                };
                this._usePushState ? E("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && E("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), xe.started = !1
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
                if (!xe.started) return !1;
                (!l || l === !0) && (l = {
                    trigger: !!l
                }), E = this.getFragment(E || "");
                var g = this.root;
                (E === "" || E.charAt(0) === "?") && (g = g.slice(0, -1) || "/");
                var x = g + E;
                if (E = this.decodeFragment(E.replace(Je, "")), this.fragment !== E) {
                    if (this.fragment = E, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, x);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, E, l.replace), this.iframe && E !== this.getHash(this.iframe.contentWindow)) {
                            var O = this.iframe.contentWindow;
                            l.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, E, l.replace)
                        }
                    } else return this.location.assign(x);
                    if (l.trigger) return this.loadUrl(E)
                }
            },
            _updateHash: function(E, l, g) {
                if (g) {
                    var x = E.href.replace(/(javascript:|#).*$/, "");
                    E.replace(x + "#" + l)
                } else E.hash = "#" + l
            }
        }), n.history = new xe;
        var dt = function(E, l) {
            var g = this,
                x;
            return E && i.has(E, "constructor") ? x = E.constructor : x = function() {
                return g.apply(this, arguments)
            }, i.extend(x, g, l), x.prototype = i.create(g.prototype, E), x.prototype.constructor = x, x.__super__ = g.prototype, x
        };
        se.extend = d.extend = oe.extend = Ve.extend = xe.extend = dt;
        var Vt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Yt = function(E, l) {
                var g = l.error;
                l.error = function(x) {
                    g && g.call(l.context, E, x, l), E.trigger("error", E, x, l)
                }
            };
        return n
    })
})(ot);
var yc = {
        exports: {}
    },
    Xo = {
        exports: {}
    },
    pl;

function Ah() {
    return pl || (pl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Mi.exports, ot)
        })(mt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
                    return typeof m
                } : function(m) {
                    return m && typeof Symbol == "function" && m.constructor === Symbol ? "symbol" : typeof m
                },
                f = i.Radio,
                A = i.Radio = {};
            A.VERSION = "2.0.0", A.noConflict = function() {
                return i.Radio = f, this
            }, A.DEBUG = !1, A._debugText = function(m, M, W) {
                return m + (W ? " on the " + W + " channel" : "") + ': "' + M + '"'
            }, A.debugLog = function(m, M, W) {
                A.DEBUG && console && console.warn && console.warn(A._debugText(m, M, W))
            };
            var S = /\s+/;
            A._eventsApi = function(m, M, W, ae) {
                if (!W) return !1;
                var se = {};
                if ((typeof W > "u" ? "undefined" : o(W)) === "object") {
                    for (var me in W) {
                        var d = m[M].apply(m, [me, W[me]].concat(ae));
                        S.test(me) ? n.extend(se, d) : se[me] = d
                    }
                    return se
                }
                if (S.test(W)) {
                    for (var Ee = W.split(S), _e = 0, Me = Ee.length; _e < Me; _e++) se[Ee[_e]] = m[M].apply(m, [Ee[_e]].concat(ae));
                    return se
                }
                return !1
            }, A._callHandler = function(m, M, W) {
                var ae = W[0],
                    se = W[1],
                    me = W[2];
                switch (W.length) {
                    case 0:
                        return m.call(M);
                    case 1:
                        return m.call(M, ae);
                    case 2:
                        return m.call(M, ae, se);
                    case 3:
                        return m.call(M, ae, se, me);
                    default:
                        return m.apply(M, W)
                }
            };

            function I(m, M, W, ae) {
                var se = m[M];
                if ((!W || W === se.callback || W === se.callback._callback) && (!ae || ae === se.context)) return delete m[M], !0
            }

            function L(m, M, W, ae) {
                m || (m = {});
                for (var se = M ? [M] : n.keys(m), me = !1, d = 0, Ee = se.length; d < Ee; d++) M = se[d], !!m[M] && I(m, M, W, ae) && (me = !0);
                return me
            }
            var B = {};

            function U(m) {
                return B[m] || (B[m] = n.bind(A.log, A, m))
            }
            n.extend(A, {
                log: function(M, W) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + M + '] "' + W + '"', ae)
                    }
                },
                tuneIn: function(M) {
                    var W = A.channel(M);
                    return W._tunedIn = !0, W.on("all", U(M)), this
                },
                tuneOut: function(M) {
                    var W = A.channel(M);
                    return W._tunedIn = !1, W.off("all", U(M)), delete B[M], this
                }
            });

            function X(m) {
                return n.isFunction(m) ? m : function() {
                    return m
                }
            }
            A.Requests = {
                request: function(M) {
                    var W = n.toArray(arguments).slice(1),
                        ae = A._eventsApi(this, "request", M, W);
                    if (ae) return ae;
                    var se = this.channelName,
                        me = this._requests;
                    if (se && this._tunedIn && A.log.apply(this, [se, M].concat(W)), me && (me[M] || me.default)) {
                        var d = me[M] || me.default;
                        return W = me[M] ? W : arguments, A._callHandler(d.callback, d.context, W)
                    } else A.debugLog("An unhandled request was fired", M, se)
                },
                reply: function(M, W, ae) {
                    return A._eventsApi(this, "reply", M, [W, ae]) ? this : (this._requests || (this._requests = {}), this._requests[M] && A.debugLog("A request was overwritten", M, this.channelName), this._requests[M] = {
                        callback: X(W),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(M, W, ae) {
                    if (A._eventsApi(this, "replyOnce", M, [W, ae])) return this;
                    var se = this,
                        me = n.once(function() {
                            return se.stopReplying(M), X(W).apply(this, arguments)
                        });
                    return this.reply(M, me, ae)
                },
                stopReplying: function(M, W, ae) {
                    return A._eventsApi(this, "stopReplying", M) ? this : (!M && !W && !ae ? delete this._requests : L(this._requests, M, W, ae) || A.debugLog("Attempted to remove the unregistered request", M, this.channelName), this)
                }
            }, A._channels = {}, A.channel = function(m) {
                if (!m) throw new Error("You must provide a name for the channel.");
                return A._channels[m] ? A._channels[m] : A._channels[m] = new A.Channel(m)
            }, A.Channel = function(m) {
                this.channelName = m
            }, n.extend(A.Channel.prototype, i.Events, A.Requests, {
                reset: function() {
                    return this.off(), this.stopListening(), this.stopReplying(), this
                }
            });
            var ie, K, re = [i.Events, A.Requests];
            return n.each(re, function(m) {
                n.each(m, function(M, W) {
                    A[W] = function(ae) {
                        return K = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[W].apply(ie, K)
                    }
                })
            }), A.reset = function(m) {
                var M = m ? [this._channels[m]] : this._channels;
                n.each(M, function(W) {
                    W.reset()
                })
            }, A
        })
    }(Xo)), Xo.exports
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
        t.exports = i(ot, Mi.exports, Ah())
    })(mt, function(n, i, o) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, o = o && o.hasOwnProperty("default") ? o.default : o;
        var f = "3.5.1",
            A = function(a) {
                return function(b) {
                    for (var _ = arguments.length, Z = Array(_ > 1 ? _ - 1 : 0), be = 1; be < _; be++) Z[be - 1] = arguments[be];
                    return a.apply(b, Z)
                }
            },
            S = n.Model.extend,
            I = function v(a, b) {
                i.isObject(a) && (a = a.prev + " is going to be removed in the future. Please use " + a.next + " instead." + (a.url ? " See: " + a.url : "")), !!$e.DEV_MODE && (b === void 0 || !b) && !v._cache[a] && (v._warn("Deprecation warning: " + a), v._cache[a] = !0)
            };
        I._console = typeof console < "u" ? console : {}, I._warn = function() {
            var v = I._console.warn || I._console.log || i.noop;
            return v.apply(I._console, arguments)
        }, I._cache = {};
        var L = function(a) {
                return document.documentElement.contains(a && a.parentNode)
            },
            B = function(a, b) {
                var _ = this;
                !a || i.each(b, function(Z) {
                    var be = a[Z];
                    be !== void 0 && (_[Z] = be)
                })
            },
            U = function(a) {
                if (!!a) return this.options && this.options[a] !== void 0 ? this.options[a] : this[a]
            },
            X = function(a) {
                var b = this;
                return i.reduce(a, function(_, Z, be) {
                    return i.isFunction(Z) || (Z = b[Z]), Z && (_[be] = Z), _
                }, {})
            },
            ie = /(^|:)(\w)/gi;

        function K(v, a, b) {
            return b.toUpperCase()
        }
        var re = i.memoize(function(v) {
            return "on" + v.replace(ie, K)
        });

        function m(v) {
            for (var a = arguments.length, b = Array(a > 1 ? a - 1 : 0), _ = 1; _ < a; _++) b[_ - 1] = arguments[_];
            var Z = re(v),
                be = U.call(this, Z),
                We = void 0;
            return i.isFunction(be) && (We = be.apply(this, b)), this.trigger.apply(this, arguments), We
        }

        function M(v) {
            for (var a = arguments.length, b = Array(a > 1 ? a - 1 : 0), _ = 1; _ < a; _++) b[_ - 1] = arguments[_];
            return i.isFunction(v.triggerMethod) ? v.triggerMethod.apply(v, b) : m.apply(v, b)
        }

        function W(v, a, b) {
            !v._getImmediateChildren || i.each(v._getImmediateChildren(), function(_) {
                !b(_) || M(_, a, _)
            })
        }

        function ae(v) {
            return !v._isAttached
        }

        function se(v) {
            return ae(v) ? (v._isAttached = !0, !0) : !1
        }

        function me(v) {
            return v._isAttached
        }

        function d(v) {
            return me(v) ? (v._isAttached = !1, !0) : !1
        }

        function Ee(v) {
            v._isAttached && v._isRendered && M(v, "dom:refresh", v)
        }

        function _e(v) {
            v._isAttached && v._isRendered && M(v, "dom:remove", v)
        }

        function Me() {
            W(this, "before:attach", ae)
        }

        function lt() {
            W(this, "attach", se), Ee(this)
        }

        function Ve() {
            W(this, "before:detach", me), _e(this)
        }

        function J() {
            W(this, "detach", d)
        }

        function qe() {
            _e(this)
        }

        function H() {
            Ee(this)
        }

        function oe(v) {
            v._areViewEventsMonitored || v.monitorViewEvents === !1 || (v._areViewEventsMonitored = !0, v.on({
                "before:attach": Me,
                attach: lt,
                "before:detach": Ve,
                detach: J,
                "before:render": qe,
                render: H
            }))
        }
        var ke = ["description", "fileName", "lineNumber", "name", "message", "number"],
            ye = S.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(a, b) {
                    i.isObject(a) ? (b = a, a = b.message) : b || (b = {});
                    var _ = Error.call(this, a);
                    i.extend(this, i.pick(_, ke), i.pick(b, ke)), this.captureStackTrace(), b.url && (this.url = this.urlRoot + b.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, ye)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        ye.extend = S;

        function ve(v, a, b, _, Z) {
            var be = _.split(/\s+/);
            be.length > 1 && I("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(be, function(We) {
                var Lt = v[We];
                if (!Lt) throw new ye('Method "' + We + '" was configured as an event handler, but does not exist.');
                v[Z](a, b, Lt)
            })
        }

        function ue(v, a, b, _) {
            if (!i.isObject(b)) throw new ye({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(b, function(Z, be) {
                if (i.isString(Z)) {
                    ve(v, a, be, Z, _);
                    return
                }
                v[_](a, be, Z)
            })
        }

        function xe(v, a) {
            return !v || !a ? this : (ue(this, v, a, "listenTo"), this)
        }

        function Ie(v, a) {
            return v ? a ? (ue(this, v, a, "stopListening"), this) : (this.stopListening(v), this) : this
        }

        function Ue(v, a, b, _) {
            if (!i.isObject(b)) throw new ye({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Z = X.call(v, b);
            a[_](Z, v)
        }

        function Je(v, a) {
            return !v || !a ? this : (Ue(this, v, a, "reply"), this)
        }

        function dt(v, a) {
            return v ? a ? (Ue(this, v, a, "stopReplying"), this) : (v.stopReplying(null, null, this), this) : this
        }
        var Vt = function(a) {
                this.options = i.extend({}, i.result(this, "options"), a)
            },
            Yt = {
                normalizeMethods: X,
                _setOptions: Vt,
                mergeOptions: B,
                getOption: U,
                bindEvents: xe,
                unbindEvents: Ie
            },
            E = {
                _initRadio: function() {
                    var a = i.result(this, "channelName");
                    if (!!a) {
                        if (!o) throw new ye({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var b = this._channel = o.channel(a),
                            _ = i.result(this, "radioEvents");
                        this.bindEvents(b, _);
                        var Z = i.result(this, "radioRequests");
                        this.bindRequests(b, Z), this.on("destroy", this._destroyRadio)
                    }
                },
                _destroyRadio: function() {
                    this._channel.stopReplying(null, null, this)
                },
                getChannel: function() {
                    return this._channel
                },
                bindEvents: xe,
                unbindEvents: Ie,
                bindRequests: Je,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(a) {
                this.hasOwnProperty("options") || this._setOptions(a), this.mergeOptions(a, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = S, i.extend(g.prototype, n.Events, Yt, E, {
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
                for (var a = arguments.length, b = Array(a), _ = 0; _ < a; _++) b[_] = arguments[_];
                return this.triggerMethod.apply(this, ["before:destroy", this].concat(b)), this._isDestroyed = !0, this.triggerMethod.apply(this, ["destroy", this].concat(b)), this.stopListening(), this
            },
            triggerMethod: m
        });
        var x = function(a) {
            this.templateId = a
        };
        i.extend(x, {
            templateCaches: {},
            get: function(a, b) {
                var _ = this.templateCaches[a];
                return _ || (_ = new x(a), this.templateCaches[a] = _), _.load(b)
            },
            clear: function() {
                for (var a = void 0, b = arguments.length, _ = Array(b), Z = 0; Z < b; Z++) _[Z] = arguments[Z];
                var be = _.length;
                if (be > 0)
                    for (a = 0; a < be; a++) delete this.templateCaches[_[a]];
                else this.templateCaches = {}
            }
        }), i.extend(x.prototype, {
            load: function(a) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var b = this.loadTemplate(this.templateId, a);
                return this.compiledTemplate = this.compileTemplate(b, a), this.compiledTemplate
            },
            loadTemplate: function(a, b) {
                var _ = n.$(a);
                if (!_.length) throw new ye({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + a + '"'
                });
                return _.html()
            },
            compileTemplate: function(a, b) {
                return i.template(a, b)
            }
        });
        var O = i.invokeMap || i.invoke;

        function R(v, a) {
            return v.behaviorClass ? v.behaviorClass : i.isFunction(v) ? v : i.isFunction($e.Behaviors.behaviorsLookup) ? $e.Behaviors.behaviorsLookup(v, a)[a] : $e.Behaviors.behaviorsLookup[a]
        }

        function N(v, a) {
            return i.chain(a).map(function(b, _) {
                var Z = R(b, _),
                    be = b === Z ? {} : b,
                    We = new Z(be, v),
                    Lt = N(v, i.result(We, "behaviors"));
                return [We].concat(Lt)
            }).flatten().value()
        }
        var te = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var a = i.result(this, "behaviors");
                    return i.isObject(a) ? N(this, a) : {}
                },
                _getBehaviorTriggers: function() {
                    var a = O(this._behaviors, "getTriggers");
                    return i.reduce(a, function(b, _) {
                        return i.extend(b, _)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var a = O(this._behaviors, "getEvents");
                    return i.reduce(a, function(b, _) {
                        return i.extend(b, _)
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
                    for (var a = arguments.length, b = Array(a), _ = 0; _ < a; _++) b[_] = arguments[_];
                    O.apply(void 0, [this._behaviors, "destroy"].concat(b))
                },
                _removeBehavior: function(a) {
                    this._isDestroyed || (this.undelegate(".trig" + a.cid + " ." + a.cid), this._behaviors = i.without(this._behaviors, a))
                },
                _bindBehaviorUIElements: function() {
                    O(this._behaviors, "bindUIElements")
                },
                _unbindBehaviorUIElements: function() {
                    O(this._behaviors, "unbindUIElements")
                },
                _triggerEventOnBehaviors: function() {
                    for (var a = this._behaviors, b = 0, _ = a && a.length; b < _; b++) m.apply(a[b], arguments)
                }
            },
            Se = {
                _delegateEntityEvents: function(a, b) {
                    var _ = i.result(this, "modelEvents");
                    _ && (Ie.call(this, a, _), xe.call(this, a, _));
                    var Z = i.result(this, "collectionEvents");
                    Z && (Ie.call(this, b, Z), xe.call(this, b, Z))
                },
                _undelegateEntityEvents: function(a, b) {
                    var _ = i.result(this, "modelEvents");
                    Ie.call(this, a, _);
                    var Z = i.result(this, "collectionEvents");
                    Ie.call(this, b, Z)
                }
            },
            he = /^(\S+)\s*(.*)$/,
            Be = function(a, b) {
                var _ = a.match(he);
                return _[1] + "." + b + " " + _[2]
            },
            De = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function nt(v) {
            return !!De[v]
        }

        function bt(v, a) {
            return De[v] = a
        }

        function rn(v, a) {
            i.isString(a) && (a = {
                event: a
            });
            var b = a.event,
                _ = !!a.preventDefault;
            nt("triggersPreventDefault") && (_ = a.preventDefault !== !1);
            var Z = !!a.stopPropagation;
            return nt("triggersStopPropagation") && (Z = a.stopPropagation !== !1),
                function(be) {
                    _ && be.preventDefault(), Z && be.stopPropagation(), v.triggerMethod(b, v, be)
                }
        }
        var ct = {
                _getViewTriggers: function(a, b) {
                    var _ = this;
                    return i.reduce(b, function(Z, be, We) {
                        return We = Be(We, "trig" + _.cid), Z[We] = rn(a, be), Z
                    }, {})
                }
            },
            vt = function(a, b) {
                return i.reduce(a, function(_, Z, be) {
                    var We = wt(be, b);
                    return _[We] = Z, _
                }, {})
            },
            wt = function(a, b) {
                return a.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(_) {
                    return b[_.slice(4)]
                })
            },
            Jt = function v(a, b, _) {
                return i.each(a, function(Z, be) {
                    i.isString(Z) ? a[be] = wt(Z, b) : i.isObject(Z) && i.isArray(_) && (i.extend(Z, v(i.pick(Z, _), b)), i.each(_, function(We) {
                        var Lt = Z[We];
                        i.isString(Lt) && (Z[We] = wt(Lt, b))
                    }))
                }), a
            },
            Xe = {
                normalizeUIKeys: function(a) {
                    var b = this._getUIBindings();
                    return vt(a, b)
                },
                normalizeUIString: function(a) {
                    var b = this._getUIBindings();
                    return wt(a, b)
                },
                normalizeUIValues: function(a, b) {
                    var _ = this._getUIBindings();
                    return Jt(a, _, b)
                },
                _getUIBindings: function() {
                    var a = i.result(this, "_uiBindings"),
                        b = i.result(this, "ui");
                    return a || b
                },
                _bindUIElements: function() {
                    var a = this;
                    if (!!this.ui) {
                        this._uiBindings || (this._uiBindings = this.ui);
                        var b = i.result(this, "_uiBindings");
                        this._ui = {}, i.each(b, function(_, Z) {
                            a._ui[Z] = a.$(_)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var a = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(b, _) {
                        delete a.ui[_]
                    }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui)
                },
                _getUI: function(a) {
                    return this._ui[a]
                }
            };

        function Rt(v) {
            return v instanceof n.$ ? v : n.$(v)
        }

        function j(v) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, v), this
        }
        var P = {
                createBuffer: function() {
                    return document.createDocumentFragment()
                },
                getEl: function(a) {
                    return Rt(a)
                },
                findEl: function(a, b) {
                    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rt(a);
                    return _.find(b)
                },
                hasEl: function(a, b) {
                    return a.contains(b && b.parentNode)
                },
                detachEl: function(a) {
                    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt(a);
                    b.detach()
                },
                replaceEl: function(a, b) {
                    if (a !== b) {
                        var _ = b.parentNode;
                        !_ || _.replaceChild(a, b)
                    }
                },
                swapEl: function(a, b) {
                    if (a !== b) {
                        var _ = a.parentNode,
                            Z = b.parentNode;
                        if (!(!_ || !Z)) {
                            var be = a.nextSibling,
                                We = b.nextSibling;
                            _.insertBefore(b, be), Z.insertBefore(a, We)
                        }
                    }
                },
                setContents: function(a, b) {
                    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rt(a);
                    _.html(b)
                },
                appendContents: function(a, b) {
                    var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Z = _._$el,
                        be = Z === void 0 ? Rt(a) : Z,
                        We = _._$contents,
                        Lt = We === void 0 ? Rt(b) : We;
                    be.append(Lt)
                },
                hasContents: function(a) {
                    return !!a && a.hasChildNodes()
                },
                detachContents: function(a) {
                    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rt(a);
                    b.contents().detach()
                }
            },
            z = {
                Dom: P,
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
                    var b = this._getEvents(a);
                    typeof a > "u" && (this.events = b);
                    var _ = i.extend({}, this._getBehaviorEvents(), b, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, _), this
                },
                _getEvents: function(a) {
                    var b = a || this.events;
                    return i.isFunction(b) ? this.normalizeUIKeys(b.call(this)) : this.normalizeUIKeys(b)
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
                    for (var a = this._isAttached && !this._shouldDisableEvents, b = arguments.length, _ = Array(b), Z = 0; Z < b; Z++) _[Z] = arguments[Z];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(_)), a && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), a && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, _), this.triggerMethod.apply(this, ["destroy", this].concat(_)), this.stopListening(), this
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
                    for (var b = this.normalizeMethods(this._childViewEvents), _ = arguments.length, Z = Array(_ > 1 ? _ - 1 : 0), be = 1; be < _; be++) Z[be - 1] = arguments[be];
                    typeof b < "u" && i.isFunction(b[a]) && b[a].apply(this, Z);
                    var We = this._childViewTriggers;
                    We && i.isString(We[a]) && this.triggerMethod.apply(this, [We[a]].concat(Z));
                    var Lt = i.result(this, "childViewEventPrefix");
                    if (Lt !== !1) {
                        var zt = Lt + ":" + a;
                        this.triggerMethod.apply(this, [zt].concat(Z))
                    }
                }
            };
        i.extend(z, te, Yt, Se, ct, Xe);

        function D(v) {
            v._isRendered || (v.supportsRenderLifecycle || M(v, "before:render", v), v.render(), v.supportsRenderLifecycle || (v._isRendered = !0, M(v, "render", v)))
        }

        function Y(v) {
            if (v.destroy) {
                v.destroy();
                return
            }
            v.supportsDestroyLifecycle || M(v, "before:destroy", v);
            var a = v._isAttached && !v._shouldDisableEvents;
            a && M(v, "before:detach", v), v.remove(), a && (v._isAttached = !1, M(v, "detach", v)), v._isDestroyed = !0, v.supportsDestroyLifecycle || M(v, "destroy", v)
        }
        var fe = ["allowMissingEl", "parentEl", "replaceElement"],
            pe = g.extend({
                Dom: P,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(a) {
                    if (this._setOptions(a), this.mergeOptions(a, fe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new ye({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, a)
                },
                show: function(a, b) {
                    if (!!this._ensureElement(b)) return a = this._getView(a, b), a === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, a, b), a._isAttached || this.empty(b), this._setupChildView(a), this.currentView = a, D(a), this._attachView(a, b), this.triggerMethod("show", this, a, b), this._isSwappingView = !1, this)
                },
                _setupChildView: function(a) {
                    oe(a), this._proxyChildViewEvents(a), a.on("destroy", this._empty, this)
                },
                _proxyChildViewEvents: function(a) {
                    var b = this._parentView;
                    !b || b._proxyChildViewEvents(a)
                },
                _shouldDisableMonitoring: function() {
                    return this._parentView && this._parentView.monitorViewEvents === !1
                },
                _attachView: function(a) {
                    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = !a._isAttached && L(this.el) && !this._shouldDisableMonitoring(),
                        Z = typeof b.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!b.replaceElement;
                    _ && M(a, "before:attach", a), Z ? this._replaceEl(a) : this.attachHtml(a), _ && (a._isAttached = !0, M(a, "attach", a))
                },
                _ensureElement: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var b = typeof a.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!a.allowMissingEl;
                        if (b) return !1;
                        throw new ye('An "el" must exist in DOM for this region ' + this.cid)
                    }
                    return !0
                },
                _getView: function(a) {
                    if (!a) throw new ye({
                        name: "ViewNotValid",
                        message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                    });
                    if (a._isDestroyed) throw new ye({
                        name: "ViewDestroyedError",
                        message: 'View (cid: "' + a.cid + '") has already been destroyed and cannot be used.'
                    });
                    if (a instanceof n.View) return a;
                    var b = this._getViewOptions(a);
                    return new Mn(b)
                },
                _getViewOptions: function(a) {
                    if (i.isFunction(a)) return {
                        template: a
                    };
                    if (i.isObject(a)) return a;
                    var b = function() {
                        return a
                    };
                    return {
                        template: b
                    }
                },
                getEl: function(a) {
                    var b = i.result(this, "parentEl");
                    return b && i.isString(a) ? this.Dom.findEl(b, a) : this.Dom.getEl(a)
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
                        b = this.currentView;
                    if (!b) return this._ensureElement(a) && this.detachHtml(), this;
                    var _ = !a.preventDestroy;
                    return _ || I("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(b, _), this
                },
                _empty: function(a, b) {
                    a.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, a), this._restoreEl(), delete this.currentView, a._isDestroyed || (b ? this.removeView(a) : this._detachView(a), this._stopChildViewEvents(a)), this.triggerMethod("empty", this, a)
                },
                _stopChildViewEvents: function(a) {
                    var b = this._parentView;
                    !b || this._parentView.stopListening(a)
                },
                destroyView: function(a) {
                    return a._isDestroyed || (a._shouldDisableEvents = this._shouldDisableMonitoring(), Y(a)), a
                },
                removeView: function(a) {
                    this.destroyView(a)
                },
                detachView: function() {
                    var a = this.currentView;
                    if (!!a) return this._empty(a), a
                },
                _detachView: function(a) {
                    var b = a._isAttached && !this._shouldDisableMonitoring(),
                        _ = this._isReplaced;
                    b && M(a, "before:detach", a), _ ? this.Dom.replaceEl(this.el, a.el) : this.detachHtml(), b && (a._isAttached = !1, M(a, "detach", a))
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
                setDomApi: j
            }),
            Pe = function(v, a) {
                return v instanceof pe ? v : Ne(v, a)
            };

        function Ne(v, a) {
            var b = i.extend({}, a);
            if (i.isString(v)) return i.extend(b, {
                el: v
            }), pt(b);
            if (i.isFunction(v)) return i.extend(b, {
                regionClass: v
            }), pt(b);
            if (i.isObject(v)) return v.selector && I("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(b, {
                el: v.selector
            }, v), pt(b);
            throw new ye({
                message: "Improper region configuration type.",
                url: "marionette.region.html#region-configuration-types"
            })
        }

        function pt(v) {
            var a = v.regionClass,
                b = i.omit(v, "regionClass");
            return new a(b)
        }
        var jt = {
                regionClass: pe,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    O(this._regions, "reset")
                },
                addRegion: function(a, b) {
                    var _ = {};
                    return _[a] = b, this.addRegions(_)[a]
                },
                addRegions: function(a) {
                    if (!i.isEmpty(a)) return a = this.normalizeUIValues(a, ["selector", "el"]), this.regions = i.extend({}, this.regions, a), this._addRegions(a)
                },
                _addRegions: function(a) {
                    var b = this,
                        _ = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(a, function(Z, be, We) {
                        return Z[We] = Pe(be, _), b._addRegion(Z[We], We), Z
                    }, {})
                },
                _addRegion: function(a, b) {
                    this.triggerMethod("before:add:region", this, b, a), a._parentView = this, a._name = b, this._regions[b] = a, this.triggerMethod("add:region", this, b, a)
                },
                removeRegion: function(a) {
                    var b = this._regions[a];
                    return this._removeRegion(b, a), b
                },
                removeRegions: function() {
                    var a = this._getRegions();
                    return i.each(this._regions, i.bind(this._removeRegion, this)), a
                },
                _removeRegion: function(a, b) {
                    this.triggerMethod("before:remove:region", this, b, a), a.destroy(), this.triggerMethod("remove:region", this, b, a)
                },
                _removeReferences: function(a) {
                    delete this.regions[a], delete this._regions[a]
                },
                emptyRegions: function() {
                    var a = this.getRegions();
                    return O(a, "empty"), a
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
                showChildView: function(a, b) {
                    for (var _ = this.getRegion(a), Z = arguments.length, be = Array(Z > 2 ? Z - 2 : 0), We = 2; We < Z; We++) be[We - 2] = arguments[We];
                    return _.show.apply(_, [b].concat(be))
                },
                detachChildView: function(a) {
                    return this.getRegion(a).detachView()
                },
                getChildView: function(a) {
                    return this.getRegion(a).currentView
                }
            },
            Ke = {
                render: function(a, b) {
                    if (!a) throw new ye({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var _ = i.isFunction(a) ? a : x.get(a);
                    return _(b)
                }
            },
            Ln = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Mn = n.View.extend({
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, Ln), oe(this), this._initBehaviors(), this._initRegions();
                    var b = Array.prototype.slice.call(arguments);
                    b[0] = this.options, n.View.prototype.constructor.apply(this, b), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
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
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = L(this.el), this._isRendered && this.bindUIElements(), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._isRendered && this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                _renderTemplate: function() {
                    var a = this.getTemplate();
                    if (a === !1) {
                        I("template:false is deprecated.  Use _.noop.");
                        return
                    }
                    var b = this.mixinTemplateContext(this.serializeData()),
                        _ = this._renderHtml(a, b);
                    this.attachElContent(_)
                },
                _renderHtml: function(a, b) {
                    return Ke.render(a, b, this)
                },
                getTemplate: function() {
                    return this.template
                },
                mixinTemplateContext: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
                        b = i.result(this, "templateContext");
                    return i.extend(a, b)
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
                setDomApi: j
            });
        i.extend(Mn.prototype, z, jt);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Bn = function(a, b) {
                i.each(it, function(_) {
                    a[_] = function() {
                        var Z = i.result(this, b),
                            be = Array.prototype.slice.call(arguments);
                        return i[_].apply(i, [Z].concat(be))
                    }
                })
            },
            gi = function(a) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(a, i.bind(this.add, this))
            };
        Bn(gi.prototype, "_getViews"), i.extend(gi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(a, b) {
                return this._add(a, b)._updateLength()
            },
            _add: function(a, b) {
                var _ = a.cid;
                return this._views[_] = a, a.model && (this._indexByModel[a.model.cid] = _), b && (this._indexByCustom[b] = _), this
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var b = this._indexByModel[a];
                return this.findByCid(b)
            },
            findByCustom: function(a) {
                var b = this._indexByCustom[a];
                return this.findByCid(b)
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
                var b = a.cid;
                return a.model && delete this._indexByModel[a.model.cid], i.some(this._indexByCustom, i.bind(function(_, Z) {
                    if (_ === b) return delete this._indexByCustom[Z], !0
                }, this)), delete this._views[b], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var Sr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            In = n.View.extend({
                sort: !0,
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, Sr), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var b = Array.prototype.slice.call(arguments);
                    b[0] = this.options, n.View.prototype.constructor.apply(this, b), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var a = this._isAttached && this.monitorViewEvents !== !1,
                        b = a ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(b, function(_) {
                        M(_, "before:attach", _)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(b, function(_) {
                        _._isAttached = !0, M(_, "attach", _)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(a, b, _) {
                    var Z = _.at !== void 0 && (_.index || b.indexOf(a));
                    (this.filter || Z === !1) && (Z = i.indexOf(this._filteredSortedModels(Z), a)), this._shouldAddChild(a, Z) && (this._destroyEmptyView(), this._addChild(a, Z))
                },
                _onCollectionUpdate: function(a, b) {
                    var _ = b.changes;
                    this._removeChildModels(_.removed)
                },
                _removeChildModels: function(a) {
                    var b = this._getRemovedViews(a);
                    !b.length || (this.children._updateLength(), this._updateIndices(b, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(a) {
                    var b = this;
                    return i.reduce(a, function(_, Z) {
                        var be = Z && b.children.findByModel(Z);
                        return !be || be._isDestroyed || (b._removeChildView(be), _.push(be)), _
                    }, [])
                },
                _removeChildView: function(a) {
                    this.triggerMethod("before:remove:child", this, a), this.children._remove(a), a._shouldDisableEvents = this.monitorViewEvents === !1, Y(a), this.stopListening(a), this.triggerMethod("remove:child", this, a)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = L(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(a) {
                    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = b.preventRender,
                        Z = this._isRendered && !this._isDestroyed,
                        be = this.filter !== a,
                        We = Z && be && !_;
                    if (We) {
                        var Lt = this._filteredSortedModels();
                        this.filter = a;
                        var zt = this._filteredSortedModels();
                        this._applyModelDeltas(zt, Lt)
                    } else this.filter = a;
                    return this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _applyModelDeltas: function(a, b) {
                    var _ = this,
                        Z = {};
                    i.each(a, function(We, Lt) {
                        var zt = !_.children.findByModel(We);
                        zt && _._onCollectionAdd(We, _.collection, {
                            at: Lt
                        }), Z[We.cid] = !0
                    });
                    var be = i.filter(b, function(We) {
                        return !Z[We.cid] && _.children.findByModel(We)
                    });
                    this._removeChildModels(be)
                },
                reorder: function() {
                    var a = this,
                        b = this.children,
                        _ = this._filteredSortedModels();
                    if (!_.length && this._showingEmptyView) return this;
                    var Z = i.some(_, function(zt) {
                        return !b.findByModel(zt)
                    });
                    if (Z) this.render();
                    else {
                        var be = [],
                            We = i.reduce(this.children._views, function(zt, Hn) {
                                var Pn = i.indexOf(_, Hn.model);
                                return Pn === -1 ? (be.push(Hn.model), zt) : (Hn._index = Pn, zt[Pn] = Hn.el, zt)
                            }, new Array(_.length));
                        this.triggerMethod("before:reorder", this);
                        var Lt = this.Dom.createBuffer();
                        i.each(We, function(zt) {
                            a.Dom.appendContents(Lt, zt)
                        }), this._appendReorderedChildren(Lt), this._removeChildModels(be), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var a = this,
                        b = this._filteredSortedModels(),
                        _ = i.find(b, function(Z, be) {
                            var We = a.children.findByModel(Z);
                            return !We || We._index !== be
                        });
                    _ && this.resortView()
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
                _createView: function(a, b) {
                    var _ = this._getChildView(a),
                        Z = this._getChildViewOptions(a, b),
                        be = this.buildChildView(a, _, Z);
                    return be
                },
                _setupChildView: function(a, b) {
                    oe(a), this._proxyChildViewEvents(a), this.sort && (a._index = b)
                },
                _showCollection: function(a) {
                    i.each(a, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(a) {
                    if (!this.collection || !this.collection.length) return [];
                    var b = this.getViewComparator(),
                        _ = this.collection.models;
                    if (a = Math.min(Math.max(a, 0), _.length - 1), b) {
                        var Z = void 0;
                        a && (Z = _[a], _ = _.slice(0, a).concat(_.slice(a + 1))), _ = this._sortModelsBy(_, b), Z && _.splice(a, 0, Z)
                    }
                    return _ = this._filterModels(_), _
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(a) {
                    var b = this;
                    return this.filter && (a = i.filter(a, function(_, Z) {
                        return b._shouldAddChild(_, Z)
                    })), a
                },
                _sortModelsBy: function(a, b) {
                    return typeof b == "string" ? i.sortBy(a, function(_) {
                        return _.get(b)
                    }) : b.length === 1 ? i.sortBy(a, i.bind(b, this)) : i.clone(a).sort(i.bind(b, this))
                },
                _showEmptyView: function() {
                    var a = this._getEmptyView();
                    if (a && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var b = new n.Model,
                            _ = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(_) && (_ = _.call(this, b, this._emptyViewIndex));
                        var Z = this.buildChildView(b, a, _);
                        this.triggerMethod("before:render:empty", this, Z), this.addChildView(Z, 0), this.triggerMethod("render:empty", this, Z)
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
                    var b = this.childView;
                    if (!b) throw new ye({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (b = this._getView(b, a), !b) throw new ye({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return b
                },
                _getView: function(a, b) {
                    if (a.prototype instanceof n.View || a === n.View) return a;
                    if (i.isFunction(a)) return a.call(this, b)
                },
                _addChild: function(a, b) {
                    var _ = this._createView(a, b);
                    return this.addChildView(_, b), _
                },
                _getChildViewOptions: function(a, b) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(a, b) : this.childViewOptions
                },
                addChildView: function(a, b) {
                    return this.triggerMethod("before:add:child", this, a), this._setupChildView(a, b), this._isBuffering ? this.children._add(a) : (this._updateIndices(a, !0), this.children.add(a)), D(a), this._attachView(a, b), this.triggerMethod("add:child", this, a), a
                },
                _updateIndices: function(a, b) {
                    if (!!this.sort) {
                        if (!b) {
                            i.each(i.sortBy(this.children._views, "_index"), function(Z, be) {
                                Z._index = be
                            });
                            return
                        }
                        var _ = i.isArray(a) ? i.max(a, "_index") : a;
                        i.isObject(_) && i.each(this.children._views, function(Z) {
                            Z._index >= _._index && (Z._index += 1)
                        })
                    }
                },
                _attachView: function(a, b) {
                    var _ = !a._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    _ && M(a, "before:attach", a), this.attachHtml(this, a, b), _ && (a._isAttached = !0, M(a, "attach", a))
                },
                buildChildView: function(a, b, _) {
                    var Z = i.extend({
                        model: a
                    }, _);
                    return new b(Z)
                },
                removeChildView: function(a) {
                    return !a || a._isDestroyed || (this._removeChildView(a), this.children._updateLength(), this._updateIndices(a, !1)), a
                },
                isEmpty: function(a) {
                    var b = void 0;
                    return i.result(a, "processedModels") ? b = a.processedModels : (b = this.collection ? this.collection.models : [], b = this._filterModels(b)), b.length === 0
                },
                attachBuffer: function(a, b) {
                    this.Dom.appendContents(a.el, b, {
                        _$el: a.$el
                    })
                },
                _createBuffer: function() {
                    var a = this,
                        b = this.Dom.createBuffer();
                    return i.each(this._bufferedChildren, function(_) {
                        a.Dom.appendContents(b, _.el, {
                            _$contents: _.$el
                        })
                    }), b
                },
                attachHtml: function(a, b, _) {
                    a._isBuffering ? a._bufferedChildren.splice(_, 0, b) : a._insertBefore(b, _) || a._insertAfter(b)
                },
                _insertBefore: function(a, b) {
                    var _ = void 0,
                        Z = this.sort && b < this.children.length - 1;
                    return Z && (_ = i.find(this.children._views, function(be) {
                        return be._index === b + 1
                    })), _ ? (this.beforeEl(_.el, a.el), !0) : !1
                },
                beforeEl: function(a, b) {
                    this.$(a).before(b)
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
                _shouldAddChild: function(a, b) {
                    var _ = this.filter;
                    return !i.isFunction(_) || _.call(this, a, b, this.collection)
                }
            }, {
                setDomApi: j
            });
        i.extend(In.prototype, z);
        var sn = function() {
            this._init()
        };
        Bn(sn.prototype, "_views");

        function Ir(v, a) {
            return a.model && a.model.get(v)
        }
        i.extend(sn.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(a) {
                var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    _ = a.cid;
                this._viewsByCid[_] = a, a.model && (this._indexByModel[a.model.cid] = _), this._views.splice(b, 0, a), this._updateLength()
            },
            _sort: function(a, b) {
                return typeof a == "string" ? (a = i.partial(Ir, a), this._sortBy(a)) : a.length === 1 ? this._sortBy(i.bind(a, b)) : this._views.sort(i.bind(a, b))
            },
            _sortBy: function(a) {
                var b = i.sortBy(this._views, a);
                return this._set(b), b
            },
            _set: function(a) {
                this._views.length = 0, this._views.push.apply(this._views, a.slice(0)), this._updateLength()
            },
            _swap: function(a, b) {
                var _ = this.findIndexByView(a),
                    Z = this.findIndexByView(b);
                if (!(_ === -1 || Z === -1)) {
                    var be = this._views[_];
                    this._views[_] = this._views[Z], this._views[Z] = be
                }
            },
            findByModel: function(a) {
                return this.findByModelCid(a.cid)
            },
            findByModelCid: function(a) {
                var b = this._indexByModel[a];
                return this.findByCid(b)
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
                    var b = this.findIndexByView(a);
                    this._views.splice(b, 1), this._updateLength()
                }
            },
            _updateLength: function() {
                this.length = this._views.length
            }
        });
        var kr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            Ai = n.View.extend({
                sortWithCollection: !0,
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, kr), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
                    var b = Array.prototype.slice.call(arguments);
                    b[0] = this.options, n.View.prototype.constructor.apply(this, b), this.getEmptyRegion(), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
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
                _onCollectionSort: function(a, b) {
                    var _ = b.add,
                        Z = b.merge,
                        be = b.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || _ || be || Z || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(a, b) {
                    var _ = b.changes,
                        Z = _.removed.length && this._removeChildModels(_.removed);
                    this._addedViews = _.added.length && this._addChildModels(_.added), this._detachChildren(Z), this._showChildren(), this._removeChildViews(Z)
                },
                _removeChildModels: function(a) {
                    var b = this;
                    return i.reduce(a, function(_, Z) {
                        var be = b._removeChildModel(Z);
                        return be && _.push(be), _
                    }, [])
                },
                _removeChildModel: function(a) {
                    var b = this.children.findByModel(a);
                    return b && this._removeChild(b), b
                },
                _removeChild: function(a) {
                    this.triggerMethod("before:remove:child", this, a), this.children._remove(a), this.triggerMethod("remove:child", this, a)
                },
                _addChildModels: function(a) {
                    return i.map(a, i.bind(this._addChildModel, this))
                },
                _addChildModel: function(a) {
                    var b = this._createChildView(a);
                    return this._addChild(b), b
                },
                _createChildView: function(a) {
                    var b = this._getChildView(a),
                        _ = this._getChildViewOptions(a),
                        Z = this.buildChildView(a, b, _);
                    return Z
                },
                _addChild: function(a, b) {
                    this.triggerMethod("before:add:child", this, a), this._setupChildView(a), this.children._add(a, b), this.triggerMethod("add:child", this, a)
                },
                _getChildView: function(a) {
                    var b = this.childView;
                    if (!b) throw new ye({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (b = this._getView(b, a), !b) throw new ye({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return b
                },
                _getView: function(a, b) {
                    if (a.prototype instanceof n.View || a === n.View) return a;
                    if (i.isFunction(a)) return a.call(this, b)
                },
                _getChildViewOptions: function(a) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(a) : this.childViewOptions
                },
                buildChildView: function(a, b, _) {
                    var Z = i.extend({
                        model: a
                    }, _);
                    return new b(Z)
                },
                _setupChildView: function(a) {
                    oe(a), a.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(a)
                },
                _getImmediateChildren: function() {
                    return this.children._views
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = L(this.el), this
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
                        var b = this._getEmptyViewOptions(),
                            _ = this.getEmptyRegion();
                        _.show(new a(b))
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
                    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = b.preventRender,
                        Z = this.viewComparator !== a,
                        be = Z && !_;
                    return this.viewComparator = a, be && this.sort(), this
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
                        b = this._getFilter(),
                        _ = this._addedViews;
                    if (delete this._addedViews, !b) return _ || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var Z = [],
                        be = [];
                    return i.each(this.children._views, function(We, Lt, zt) {
                        (b.call(a, We, Lt, zt) ? Z : be).push(We)
                    }), this._detachChildren(be), this.triggerMethod("filter", this, Z, be), Z
                },
                _getFilter: function() {
                    var a = this.getFilter();
                    if (!a) return !1;
                    if (i.isFunction(a)) return a;
                    if (i.isObject(a)) {
                        var b = i.matches(a);
                        return function(_) {
                            return b(_.model && _.model.attributes)
                        }
                    }
                    if (i.isString(a)) return function(_) {
                        return _.model && _.model.get(a)
                    };
                    throw new ye({
                        name: "InvalidViewFilterError",
                        message: '"viewFilter" must be a function, predicate object literal, a string indicating a model attribute, or falsy'
                    })
                },
                getFilter: function() {
                    return this.viewFilter
                },
                setFilter: function(a) {
                    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = b.preventRender,
                        Z = this.viewFilter !== a,
                        be = Z && !_;
                    return this.viewFilter = a, be && this.filter(), this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _detachChildren: function(a) {
                    i.each(a, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(a) {
                    var b = a._isAttached && this.monitorViewEvents !== !1;
                    b && M(a, "before:detach", a), this.detachHtml(a), b && (a._isAttached = !1, M(a, "detach", a))
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
                    var b = this._getBuffer(a);
                    this._attachChildren(b, a), this.triggerMethod("render:children", this, a)
                },
                _attachChildren: function(a, b) {
                    var _ = this._isAttached && this.monitorViewEvents !== !1;
                    b = _ ? b : [], i.each(b, function(Z) {
                        Z._isAttached || M(Z, "before:attach", Z)
                    }), this.attachHtml(a), i.each(b, function(Z) {
                        Z._isAttached || (Z._isAttached = !0, M(Z, "attach", Z))
                    })
                },
                _getBuffer: function(a) {
                    var b = this,
                        _ = this.Dom.createBuffer();
                    return i.each(a, function(Z) {
                        D(Z), b.Dom.appendContents(_, Z.el, {
                            _$contents: Z.$el
                        })
                    }), _
                },
                attachHtml: function(a) {
                    this.Dom.appendContents(this.el, a, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(a, b) {
                    if (!this.children.hasView(a) || !this.children.hasView(b)) throw new ye({
                        name: "ChildSwapError",
                        message: "Both views must be children of the collection view"
                    });
                    return this.children._swap(a, b), this.Dom.swapEl(a.el, b.el), this.Dom.hasEl(this.el, a.el) !== this.Dom.hasEl(this.el, b.el) && this.filter(), this
                },
                addChildView: function(a, b) {
                    return !a || a._isDestroyed || ((!b || b >= this.children.length) && (this._addedViews = [a]), this._addChild(a, b), this._showChildren()), a
                },
                detachChildView: function(a) {
                    return this.removeChildView(a, {
                        shouldDetach: !0
                    }), a
                },
                removeChildView: function(a, b) {
                    return a && (this._removeChildView(a, b), this._removeChild(a), this.isEmpty() && this._showEmptyView(), a)
                },
                _removeChildViews: function(a) {
                    i.each(a, i.bind(this._removeChildView, this))
                },
                _removeChildView: function(a) {
                    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        _ = b.shouldDetach;
                    a.off("destroy", this.removeChildView, this), _ ? this._detachChildView(a) : this._destroyChildView(a), this.stopListening(a)
                },
                _destroyChildView: function(a) {
                    a._isDestroyed || (a._shouldDisableEvents = this.monitorViewEvents === !1, Y(a))
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
                setDomApi: j
            });
        i.extend(Ai.prototype, z);
        var Ui = ["childViewContainer", "template", "templateContext"],
            mi = In.extend({
                constructor: function(a) {
                    I("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(a, Ui), In.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(a) {
                    var b = this.childView;
                    if (!b) return this.constructor;
                    if (b = this._getView(b, a), !b) throw new ye({
                        name: "InvalidChildViewError",
                        message: '"childView" must be a view class or a function that returns a view class'
                    });
                    return b
                },
                serializeData: function() {
                    return this.serializeModel()
                },
                render: function() {
                    return this._isDestroyed ? this : (this._isRendering = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.renderChildren(), this._isRendering = !1, this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                renderChildren: function() {
                    (this._isRendered || this._isRendering) && In.prototype._renderChildren.call(this)
                },
                attachBuffer: function(a, b) {
                    var _ = this.getChildViewContainer(a);
                    this.Dom.appendContents(_[0], b, {
                        _$el: _
                    })
                },
                _insertAfter: function(a) {
                    var b = this.getChildViewContainer(this, a);
                    this.Dom.appendContents(b[0], a.el, {
                        _$el: b,
                        _$contents: a.$el
                    })
                },
                _appendReorderedChildren: function(a) {
                    var b = this.getChildViewContainer(this);
                    this.Dom.appendContents(b[0], a, {
                        _$el: b
                    })
                },
                getChildViewContainer: function(a, b) {
                    if (a.$childViewContainer) return a.$childViewContainer;
                    var _ = void 0,
                        Z = a.childViewContainer;
                    if (Z) {
                        var be = i.result(a, "childViewContainer");
                        if (be.charAt(0) === "@" && a.ui ? _ = a.ui[be.substr(4)] : _ = this.$(be), _.length <= 0) throw new ye({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + a.childViewContainer
                        })
                    } else _ = a.$el;
                    return a.$childViewContainer = _, _
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            vi = i.pick(Mn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(mi.prototype, vi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            qi = g.extend({
                cidPrefix: "mnb",
                constructor: function(a, b) {
                    this.view = b, this.defaults && I("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, a)), this.mergeOptions(this.options, ji), this.ui = i.extend({}, i.result(this, "ui"), i.result(b, "ui")), g.apply(this, arguments)
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
                        b = this.normalizeUIKeys(i.result(this, "events"));
                    return i.reduce(b, function(_, Z, be) {
                        return i.isFunction(Z) || (Z = a[Z]), Z && (be = Be(be, a.cid), _[be] = i.bind(Z, a)), _
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var a = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, a)
                    }
                }
            });
        i.extend(qi.prototype, Se, ct, Xe);
        var An = ["region", "regionClass"],
            Gi = g.extend({
                cidPrefix: "mna",
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, An), this._initRegion(), g.prototype.constructor.apply(this, arguments)
                },
                regionClass: pe,
                _initRegion: function() {
                    var a = this.region;
                    if (!!a) {
                        var b = {
                            regionClass: this.regionClass
                        };
                        this._region = Pe(a, b)
                    }
                },
                getRegion: function() {
                    return this._region
                },
                showView: function(a) {
                    for (var b = this.getRegion(), _ = arguments.length, Z = Array(_ > 1 ? _ - 1 : 0), be = 1; be < _; be++) Z[be - 1] = arguments[be];
                    return b.show.apply(b, [a].concat(Z))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(a) {
                    return this.triggerMethod("before:start", this, a), this.triggerMethod("start", this, a), this
                }
            }),
            yi = ["appRoutes", "controller"],
            Fn = n.Router.extend({
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, yi), n.Router.apply(this, arguments);
                    var b = this.appRoutes,
                        _ = this._getController();
                    this.processAppRoutes(_, b), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(a, b) {
                    var _ = this._getController();
                    return this._addAppRoute(_, a, b), this
                },
                _processOnRoute: function(a, b) {
                    if (i.isFunction(this.onRoute)) {
                        var _ = i.invert(this.appRoutes)[a];
                        this.onRoute(a, _, b)
                    }
                },
                processAppRoutes: function(a, b) {
                    var _ = this;
                    if (!b) return this;
                    var Z = i.keys(b).reverse();
                    return i.each(Z, function(be) {
                        _._addAppRoute(a, be, b[be])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(a, b, _) {
                    var Z = a[_];
                    if (!Z) throw new ye('Method "' + _ + '" was not found on the controller');
                    this.route(b, _, i.bind(Z, a))
                },
                triggerMethod: m
            });
        i.extend(Fn.prototype, Yt);

        function Fi() {
            throw new ye({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var wi = n.Marionette,
            $e = n.Marionette = {};
        return $e.noConflict = function() {
            return n.Marionette = wi, this
        }, $e.bindEvents = A(xe), $e.unbindEvents = A(Ie), $e.bindRequests = A(Je), $e.unbindRequests = A(dt), $e.mergeOptions = A(B), $e.getOption = A(U), $e.normalizeMethods = A(X), $e.extend = S, $e.isNodeAttached = L, $e.deprecate = I, $e.triggerMethod = A(m), $e.triggerMethodOn = M, $e.isEnabled = nt, $e.setEnabled = bt, $e.monitorViewEvents = oe, $e.Behaviors = {}, $e.Behaviors.behaviorsLookup = Fi, $e.Application = Gi, $e.AppRouter = Fn, $e.Renderer = Ke, $e.TemplateCache = x, $e.View = Mn, $e.CollectionView = In, $e.NextCollectionView = Ai, $e.CompositeView = mi, $e.Behavior = qi, $e.Region = pe, $e.Error = ye, $e.Object = g, $e.DEV_MODE = !1, $e.FEATURES = De, $e.VERSION = f, $e.DomApi = P, $e.setDomApi = function(v) {
            In.setDomApi(v), mi.setDomApi(v), Ai.setDomApi(v), pe.setDomApi(v), Mn.setDomApi(v)
        }, $e
    }), mt && mt.Marionette && (mt.Mn = mt.Marionette)
})(yc);
const Et = yc.exports;
class mh {
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

function vh() {
    this.__data__ = [], this.size = 0
}
var yh = vh;

function wh(t, e) {
    return t === e || t !== t && e !== e
}
var ao = wh,
    bh = ao;

function Ch(t, e) {
    for (var n = t.length; n--;)
        if (bh(t[n][0], e)) return n;
    return -1
}
var lo = Ch,
    Eh = lo,
    xh = Array.prototype,
    Sh = xh.splice;

function Ih(t) {
    var e = this.__data__,
        n = Eh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Sh.call(e, n, 1), --this.size, !0
}
var kh = Ih,
    _h = lo;

function Oh(t) {
    var e = this.__data__,
        n = _h(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Th = Oh,
    Lh = lo;

function Bh(t) {
    return Lh(this.__data__, t) > -1
}
var Dh = Bh,
    Rh = lo;

function Mh(t, e) {
    var n = this.__data__,
        i = Rh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Ph = Mh,
    Nh = yh,
    Vh = kh,
    Uh = Th,
    jh = Dh,
    qh = Ph;

function yr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
yr.prototype.clear = Nh;
yr.prototype.delete = Vh;
yr.prototype.get = Uh;
yr.prototype.has = jh;
yr.prototype.set = qh;
var co = yr,
    Gh = co;

function Fh() {
    this.__data__ = new Gh, this.size = 0
}
var Hh = Fh;

function Yh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Wh = Yh;

function zh(t) {
    return this.__data__.get(t)
}
var Qh = zh;

function Kh(t) {
    return this.__data__.has(t)
}
var Jh = Kh,
    Xh = typeof mt == "object" && mt && mt.Object === Object && mt,
    wc = Xh,
    Zh = wc,
    $h = typeof self == "object" && self && self.Object === Object && self,
    ed = Zh || $h || Function("return this")(),
    wr = ed,
    td = wr,
    nd = td.Symbol,
    bc = nd,
    gl = bc,
    Cc = Object.prototype,
    id = Cc.hasOwnProperty,
    rd = Cc.toString,
    Qr = gl ? gl.toStringTag : void 0;

function sd(t) {
    var e = id.call(t, Qr),
        n = t[Qr];
    try {
        t[Qr] = void 0;
        var i = !0
    } catch {}
    var o = rd.call(t);
    return i && (e ? t[Qr] = n : delete t[Qr]), o
}
var od = sd,
    ad = Object.prototype,
    ld = ad.toString;

function cd(t) {
    return ld.call(t)
}
var ud = cd,
    Al = bc,
    hd = od,
    dd = ud,
    fd = "[object Null]",
    pd = "[object Undefined]",
    ml = Al ? Al.toStringTag : void 0;

function gd(t) {
    return t == null ? t === void 0 ? pd : fd : ml && ml in Object(t) ? hd(t) : dd(t)
}
var uo = gd;

function Ad(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Ni = Ad,
    md = uo,
    vd = Ni,
    yd = "[object AsyncFunction]",
    wd = "[object Function]",
    bd = "[object GeneratorFunction]",
    Cd = "[object Proxy]";

function Ed(t) {
    if (!vd(t)) return !1;
    var e = md(t);
    return e == wd || e == bd || e == yd || e == Cd
}
var Na = Ed,
    xd = wr,
    Sd = xd["__core-js_shared__"],
    Id = Sd,
    Zo = Id,
    vl = function() {
        var t = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function kd(t) {
    return !!vl && vl in t
}
var _d = kd,
    Od = Function.prototype,
    Td = Od.toString;

function Ld(t) {
    if (t != null) {
        try {
            return Td.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Bd = Ld,
    Dd = Na,
    Rd = _d,
    Md = Ni,
    Pd = Bd,
    Nd = /[\\^$.*+?()[\]{}|]/g,
    Vd = /^\[object .+?Constructor\]$/,
    Ud = Function.prototype,
    jd = Object.prototype,
    qd = Ud.toString,
    Gd = jd.hasOwnProperty,
    Fd = RegExp("^" + qd.call(Gd).replace(Nd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Hd(t) {
    if (!Md(t) || Rd(t)) return !1;
    var e = Dd(t) ? Fd : Vd;
    return e.test(Pd(t))
}
var Yd = Hd;

function Wd(t, e) {
    return t == null ? void 0 : t[e]
}
var zd = Wd,
    Qd = Yd,
    Kd = zd;

function Jd(t, e) {
    var n = Kd(t, e);
    return Qd(n) ? n : void 0
}
var Va = Jd,
    Xd = Va,
    Zd = wr,
    $d = Xd(Zd, "Map"),
    Ec = $d,
    ef = Va,
    tf = ef(Object, "create"),
    ho = tf,
    yl = ho;

function nf() {
    this.__data__ = yl ? yl(null) : {}, this.size = 0
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

function Af(t) {
    var e = this.__data__;
    return ff ? e[t] !== void 0 : gf.call(e, t)
}
var mf = Af,
    vf = ho,
    yf = "__lodash_hash_undefined__";

function wf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = vf && e === void 0 ? yf : e, this
}
var bf = wf,
    Cf = rf,
    Ef = of,
    xf = df,
    Sf = mf,
    If = bf;

function br(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
br.prototype.clear = Cf;
br.prototype.delete = Ef;
br.prototype.get = xf;
br.prototype.has = Sf;
br.prototype.set = If;
var kf = br,
    wl = kf,
    _f = co,
    Of = Ec;

function Tf() {
    this.size = 0, this.__data__ = {
        hash: new wl,
        map: new(Of || _f),
        string: new wl
    }
}
var Lf = Tf;

function Bf(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Df = Bf,
    Rf = Df;

function Mf(t, e) {
    var n = t.__data__;
    return Rf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var fo = Mf,
    Pf = fo;

function Nf(t) {
    var e = Pf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Vf = Nf,
    Uf = fo;

function jf(t) {
    return Uf(this, t).get(t)
}
var qf = jf,
    Gf = fo;

function Ff(t) {
    return Gf(this, t).has(t)
}
var Hf = Ff,
    Yf = fo;

function Wf(t, e) {
    var n = Yf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var zf = Wf,
    Qf = Lf,
    Kf = Vf,
    Jf = qf,
    Xf = Hf,
    Zf = zf;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = Qf;
Cr.prototype.delete = Kf;
Cr.prototype.get = Jf;
Cr.prototype.has = Xf;
Cr.prototype.set = Zf;
var $f = Cr,
    ep = co,
    tp = Ec,
    np = $f,
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
    ap = Hh,
    lp = Wh,
    cp = Qh,
    up = Jh,
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
    xc = pp,
    bl = xc;

function gp(t, e, n) {
    e == "__proto__" && bl ? bl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var Ua = gp,
    Ap = Ua,
    mp = ao;

function vp(t, e, n) {
    (n !== void 0 && !mp(t[e], n) || n === void 0 && !(e in t)) && Ap(t, e, n)
}
var Sc = vp;

function yp(t) {
    return function(e, n, i) {
        for (var o = -1, f = Object(e), A = i(e), S = A.length; S--;) {
            var I = A[t ? S : ++o];
            if (n(f[I], I, f) === !1) break
        }
        return e
    }
}
var wp = yp,
    bp = wp,
    Cp = bp(),
    Ep = Cp,
    wa = {
        exports: {}
    };
(function(t, e) {
    var n = wr,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        f = o && o.exports === i,
        A = f ? n.Buffer : void 0,
        S = A ? A.allocUnsafe : void 0;

    function I(L, B) {
        if (B) return L.slice();
        var U = L.length,
            X = S ? S(U) : new L.constructor(U);
        return L.copy(X), X
    }
    t.exports = I
})(wa, wa.exports);
var xp = wr,
    Sp = xp.Uint8Array,
    Ip = Sp,
    Cl = Ip;

function kp(t) {
    var e = new t.constructor(t.byteLength);
    return new Cl(e).set(new Cl(t)), e
}
var _p = kp,
    Op = _p;

function Tp(t, e) {
    var n = e ? Op(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Lp = Tp;

function Bp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Dp = Bp,
    Rp = Ni,
    El = Object.create,
    Mp = function() {
        function t() {}
        return function(e) {
            if (!Rp(e)) return {};
            if (El) return El(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Pp = Mp;

function Np(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Vp = Np,
    Up = Vp,
    jp = Up(Object.getPrototypeOf, Object),
    Ic = jp,
    qp = Object.prototype;

function Gp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || qp;
    return t === n
}
var kc = Gp,
    Fp = Pp,
    Hp = Ic,
    Yp = kc;

function Wp(t) {
    return typeof t.constructor == "function" && !Yp(t) ? Fp(Hp(t)) : {}
}
var zp = Wp;

function Qp(t) {
    return t != null && typeof t == "object"
}
var us = Qp,
    Kp = uo,
    Jp = us,
    Xp = "[object Arguments]";

function Zp(t) {
    return Jp(t) && Kp(t) == Xp
}
var $p = Zp,
    xl = $p,
    eg = us,
    _c = Object.prototype,
    tg = _c.hasOwnProperty,
    ng = _c.propertyIsEnumerable,
    ig = xl(function() {
        return arguments
    }()) ? xl : function(t) {
        return eg(t) && tg.call(t, "callee") && !ng.call(t, "callee")
    },
    Oc = ig,
    rg = Array.isArray,
    Tc = rg,
    sg = 9007199254740991;

function og(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= sg
}
var Lc = og,
    ag = Na,
    lg = Lc;

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
    Js = {
        exports: {}
    };

function pg() {
    return !1
}
var gg = pg;
(function(t, e) {
    var n = wr,
        i = gg,
        o = e && !e.nodeType && e,
        f = o && !0 && t && !t.nodeType && t,
        A = f && f.exports === o,
        S = A ? n.Buffer : void 0,
        I = S ? S.isBuffer : void 0,
        L = I || i;
    t.exports = L
})(Js, Js.exports);
var Ag = uo,
    mg = Ic,
    vg = us,
    yg = "[object Object]",
    wg = Function.prototype,
    bg = Object.prototype,
    Bc = wg.toString,
    Cg = bg.hasOwnProperty,
    Eg = Bc.call(Object);

function xg(t) {
    if (!vg(t) || Ag(t) != yg) return !1;
    var e = mg(t);
    if (e === null) return !0;
    var n = Cg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Bc.call(n) == Eg
}
var Sg = xg,
    Ig = uo,
    kg = Lc,
    _g = us,
    Og = "[object Arguments]",
    Tg = "[object Array]",
    Lg = "[object Boolean]",
    Bg = "[object Date]",
    Dg = "[object Error]",
    Rg = "[object Function]",
    Mg = "[object Map]",
    Pg = "[object Number]",
    Ng = "[object Object]",
    Vg = "[object RegExp]",
    Ug = "[object Set]",
    jg = "[object String]",
    qg = "[object WeakMap]",
    Gg = "[object ArrayBuffer]",
    Fg = "[object DataView]",
    Hg = "[object Float32Array]",
    Yg = "[object Float64Array]",
    Wg = "[object Int8Array]",
    zg = "[object Int16Array]",
    Qg = "[object Int32Array]",
    Kg = "[object Uint8Array]",
    Jg = "[object Uint8ClampedArray]",
    Xg = "[object Uint16Array]",
    Zg = "[object Uint32Array]",
    Dt = {};
Dt[Hg] = Dt[Yg] = Dt[Wg] = Dt[zg] = Dt[Qg] = Dt[Kg] = Dt[Jg] = Dt[Xg] = Dt[Zg] = !0;
Dt[Og] = Dt[Tg] = Dt[Gg] = Dt[Lg] = Dt[Fg] = Dt[Bg] = Dt[Dg] = Dt[Rg] = Dt[Mg] = Dt[Pg] = Dt[Ng] = Dt[Vg] = Dt[Ug] = Dt[jg] = Dt[qg] = !1;

function $g(t) {
    return _g(t) && kg(t.length) && !!Dt[Ig(t)]
}
var eA = $g;

function tA(t) {
    return function(e) {
        return t(e)
    }
}
var nA = tA,
    ba = {
        exports: {}
    };
(function(t, e) {
    var n = wc,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        f = o && o.exports === i,
        A = f && n.process,
        S = function() {
            try {
                var I = o && o.require && o.require("util").types;
                return I || A && A.binding && A.binding("util")
            } catch {}
        }();
    t.exports = S
})(ba, ba.exports);
var iA = eA,
    rA = nA,
    Sl = ba.exports,
    Il = Sl && Sl.isTypedArray,
    sA = Il ? rA(Il) : iA,
    Dc = sA;

function oA(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Rc = oA,
    aA = Ua,
    lA = ao,
    cA = Object.prototype,
    uA = cA.hasOwnProperty;

function hA(t, e, n) {
    var i = t[e];
    (!(uA.call(t, e) && lA(i, n)) || n === void 0 && !(e in t)) && aA(t, e, n)
}
var dA = hA,
    fA = dA,
    pA = Ua;

function gA(t, e, n, i) {
    var o = !n;
    n || (n = {});
    for (var f = -1, A = e.length; ++f < A;) {
        var S = e[f],
            I = i ? i(n[S], t[S], S, n, t) : void 0;
        I === void 0 && (I = t[S]), o ? pA(n, S, I) : fA(n, S, I)
    }
    return n
}
var AA = gA;

function mA(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var vA = mA,
    yA = 9007199254740991,
    wA = /^(?:0|[1-9]\d*)$/;

function bA(t, e) {
    var n = typeof t;
    return e = e == null ? yA : e, !!e && (n == "number" || n != "symbol" && wA.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Mc = bA,
    CA = vA,
    EA = Oc,
    xA = Tc,
    SA = Js.exports,
    IA = Mc,
    kA = Dc,
    _A = Object.prototype,
    OA = _A.hasOwnProperty;

function TA(t, e) {
    var n = xA(t),
        i = !n && EA(t),
        o = !n && !i && SA(t),
        f = !n && !i && !o && kA(t),
        A = n || i || o || f,
        S = A ? CA(t.length, String) : [],
        I = S.length;
    for (var L in t)(e || OA.call(t, L)) && !(A && (L == "length" || o && (L == "offset" || L == "parent") || f && (L == "buffer" || L == "byteLength" || L == "byteOffset") || IA(L, I))) && S.push(L);
    return S
}
var LA = TA;

function BA(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var DA = BA,
    RA = Ni,
    MA = kc,
    PA = DA,
    NA = Object.prototype,
    VA = NA.hasOwnProperty;

function UA(t) {
    if (!RA(t)) return PA(t);
    var e = MA(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !VA.call(t, i)) || n.push(i);
    return n
}
var jA = UA,
    qA = LA,
    GA = jA,
    FA = ja;

function HA(t) {
    return FA(t) ? qA(t, !0) : GA(t)
}
var Pc = HA,
    YA = AA,
    WA = Pc;

function zA(t) {
    return YA(t, WA(t))
}
var QA = zA,
    kl = Sc,
    KA = wa.exports,
    JA = Lp,
    XA = Dp,
    ZA = zp,
    _l = Oc,
    Ol = Tc,
    $A = fg,
    em = Js.exports,
    tm = Na,
    nm = Ni,
    im = Sg,
    rm = Dc,
    Tl = Rc,
    sm = QA;

function om(t, e, n, i, o, f, A) {
    var S = Tl(t, n),
        I = Tl(e, n),
        L = A.get(I);
    if (L) {
        kl(t, n, L);
        return
    }
    var B = f ? f(S, I, n + "", t, e, A) : void 0,
        U = B === void 0;
    if (U) {
        var X = Ol(I),
            ie = !X && em(I),
            K = !X && !ie && rm(I);
        B = I, X || ie || K ? Ol(S) ? B = S : $A(S) ? B = XA(S) : ie ? (U = !1, B = KA(I, !0)) : K ? (U = !1, B = JA(I, !0)) : B = [] : im(I) || _l(I) ? (B = S, _l(S) ? B = sm(S) : (!nm(S) || tm(S)) && (B = ZA(I))) : U = !1
    }
    U && (A.set(I, B), o(B, I, i, f, A), A.delete(I)), kl(t, n, B)
}
var am = om,
    lm = dp,
    cm = Sc,
    um = Ep,
    hm = am,
    dm = Ni,
    fm = Pc,
    pm = Rc;

function Nc(t, e, n, i, o) {
    t !== e && um(e, function(f, A) {
        if (o || (o = new lm), dm(f)) hm(t, e, A, n, Nc, i, o);
        else {
            var S = i ? i(pm(t, A), f, A + "", t, e, o) : void 0;
            S === void 0 && (S = f), cm(t, A, S)
        }
    }, fm)
}
var gm = Nc;

function Am(t) {
    return t
}
var Vc = Am;

function mm(t, e, n) {
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
var vm = mm,
    ym = vm,
    Ll = Math.max;

function wm(t, e, n) {
    return e = Ll(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, o = -1, f = Ll(i.length - e, 0), A = Array(f); ++o < f;) A[o] = i[e + o];
            o = -1;
            for (var S = Array(e + 1); ++o < e;) S[o] = i[o];
            return S[e] = n(A), ym(t, this, S)
        }
}
var bm = wm;

function Cm(t) {
    return function() {
        return t
    }
}
var Em = Cm,
    xm = Em,
    Bl = xc,
    Sm = Vc,
    Im = Bl ? function(t, e) {
        return Bl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: xm(e),
            writable: !0
        })
    } : Sm,
    km = Im,
    _m = 800,
    Om = 16,
    Tm = Date.now;

function Lm(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Tm(),
            o = Om - (i - n);
        if (n = i, o > 0) {
            if (++e >= _m) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Bm = Lm,
    Dm = km,
    Rm = Bm,
    Mm = Rm(Dm),
    Pm = Mm,
    Nm = Vc,
    Vm = bm,
    Um = Pm;

function jm(t, e) {
    return Um(Vm(t, e, Nm), t + "")
}
var qm = jm,
    Gm = ao,
    Fm = ja,
    Hm = Mc,
    Ym = Ni;

function Wm(t, e, n) {
    if (!Ym(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Fm(n) && Hm(e, n.length) : i == "string" && e in n) ? Gm(n[e], t) : !1
}
var zm = Wm,
    Qm = qm,
    Km = zm;

function Jm(t) {
    return Qm(function(e, n) {
        var i = -1,
            o = n.length,
            f = o > 1 ? n[o - 1] : void 0,
            A = o > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (o--, f) : void 0, A && Km(n[0], n[1], A) && (f = o < 3 ? void 0 : f, o = 1), e = Object(e); ++i < o;) {
            var S = n[i];
            S && t(e, S, i, f)
        }
        return e
    })
}
var Xm = Jm,
    Zm = gm,
    $m = Xm,
    ev = $m(function(t, e, n) {
        Zm(t, e, n)
    }),
    tv = ev;
class Ca {
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
        return tv(e[0], ...e)
    }
}
st(Ca, "locale"), st(Ca, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
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
            A = Math.min(Math.max(0, (f >> 16) * n), 255),
            S = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let L = (Math.min(Math.max(0, (f & 255) * n), 255) | S << 8 | A << 16).toString(16);
        for (; L.length < o.length;) L = `0${L}`;
        return (i ? "#" : "") + L
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
class $t {
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
        var A;
        const n = e.toLowerCase(),
            i = (A = this.get("tags")) != null ? A : "[]",
            o = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(S => {
            const I = S.split("-")[0];
            return o !== I
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
st($t, "defaultNamespace", "tv");
class Pi {
    constructor() {
        st(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Pi.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!$t.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            o = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${o}/artifact/${e.categoryId}/${e.artifactId}/`,
            A = $t.get("galleries") || "[]";
        try {
            const S = JSON.parse(A) || [];
            if (S.some(I => I.url === f)) return;
            S.unshift({
                url: f,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), $t.set("galleries", JSON.stringify(S.slice(0, 40)))
        } catch {
            console.warn("[Artifacts] Unable to add artifact to local storage")
        }
    }
    remove(e) {
        if (!$t.isSupported) return;
        const n = $t.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.splice(e, 1), $t.set("galleries", JSON.stringify(i)), this.artifacts = this.list()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    setAsViewed(e) {
        Pi.setAsViewed(e), this.artifacts = this.list()
    }
    static setAsViewed(e) {
        if (!$t.isSupported) return;
        const n = $t.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.length && (i[e].viewed = !0), $t.set("galleries", JSON.stringify(i))
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    static isTestArtifact(e) {
        var n;
        return ((n = e == null ? void 0 : e.rootId) == null ? void 0 : n.indexOf("test")) !== -1
    }
    list() {
        if (!$t.isSupported) return [];
        const e = new Intl.DateTimeFormat(Ca.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = $t.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const A = new Date(f.time),
                    S = e.format(A),
                    I = f.url.split("/"),
                    L = I[I.length - 1] === "" ? I[I.length - 2] : I[I.length - 1];
                let B = f.categoryId;
                return B || (f.url.indexOf("Quiplash2") !== -1 ? B = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? B = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? B = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (B = "TriviaDeathResults")), {
                    id: L,
                    gameName: B,
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
    var n = typeof self < "u" ? self : mt,
        i = function() {
            function f() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return f.prototype = n, new f
        }();
    (function(f) {
        (function(A) {
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

            function I(H) {
                return H && DataView.prototype.isPrototypeOf(H)
            }
            if (S.arrayBuffer) var L = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                B = ArrayBuffer.isView || function(H) {
                    return H && L.indexOf(Object.prototype.toString.call(H)) > -1
                };

            function U(H) {
                if (typeof H != "string" && (H = String(H)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(H)) throw new TypeError("Invalid character in header field name");
                return H.toLowerCase()
            }

            function X(H) {
                return typeof H != "string" && (H = String(H)), H
            }

            function ie(H) {
                var oe = {
                    next: function() {
                        var ke = H.shift();
                        return {
                            done: ke === void 0,
                            value: ke
                        }
                    }
                };
                return S.iterable && (oe[Symbol.iterator] = function() {
                    return oe
                }), oe
            }

            function K(H) {
                this.map = {}, H instanceof K ? H.forEach(function(oe, ke) {
                    this.append(ke, oe)
                }, this) : Array.isArray(H) ? H.forEach(function(oe) {
                    this.append(oe[0], oe[1])
                }, this) : H && Object.getOwnPropertyNames(H).forEach(function(oe) {
                    this.append(oe, H[oe])
                }, this)
            }
            K.prototype.append = function(H, oe) {
                H = U(H), oe = X(oe);
                var ke = this.map[H];
                this.map[H] = ke ? ke + ", " + oe : oe
            }, K.prototype.delete = function(H) {
                delete this.map[U(H)]
            }, K.prototype.get = function(H) {
                return H = U(H), this.has(H) ? this.map[H] : null
            }, K.prototype.has = function(H) {
                return this.map.hasOwnProperty(U(H))
            }, K.prototype.set = function(H, oe) {
                this.map[U(H)] = X(oe)
            }, K.prototype.forEach = function(H, oe) {
                for (var ke in this.map) this.map.hasOwnProperty(ke) && H.call(oe, this.map[ke], ke, this)
            }, K.prototype.keys = function() {
                var H = [];
                return this.forEach(function(oe, ke) {
                    H.push(ke)
                }), ie(H)
            }, K.prototype.values = function() {
                var H = [];
                return this.forEach(function(oe) {
                    H.push(oe)
                }), ie(H)
            }, K.prototype.entries = function() {
                var H = [];
                return this.forEach(function(oe, ke) {
                    H.push([ke, oe])
                }), ie(H)
            }, S.iterable && (K.prototype[Symbol.iterator] = K.prototype.entries);

            function re(H) {
                if (H.bodyUsed) return Promise.reject(new TypeError("Already read"));
                H.bodyUsed = !0
            }

            function m(H) {
                return new Promise(function(oe, ke) {
                    H.onload = function() {
                        oe(H.result)
                    }, H.onerror = function() {
                        ke(H.error)
                    }
                })
            }

            function M(H) {
                var oe = new FileReader,
                    ke = m(oe);
                return oe.readAsArrayBuffer(H), ke
            }

            function W(H) {
                var oe = new FileReader,
                    ke = m(oe);
                return oe.readAsText(H), ke
            }

            function ae(H) {
                for (var oe = new Uint8Array(H), ke = new Array(oe.length), ye = 0; ye < oe.length; ye++) ke[ye] = String.fromCharCode(oe[ye]);
                return ke.join("")
            }

            function se(H) {
                if (H.slice) return H.slice(0);
                var oe = new Uint8Array(H.byteLength);
                return oe.set(new Uint8Array(H)), oe.buffer
            }

            function me() {
                return this.bodyUsed = !1, this._initBody = function(H) {
                    this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : S.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : S.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : S.arrayBuffer && S.blob && I(H) ? (this._bodyArrayBuffer = se(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : S.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || B(H)) ? this._bodyArrayBuffer = se(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, S.blob && (this.blob = function() {
                    var H = re(this);
                    if (H) return H;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? re(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(M)
                }), this.text = function() {
                    var H = re(this);
                    if (H) return H;
                    if (this._bodyBlob) return W(this._bodyBlob);
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

            function _e(H, oe) {
                oe = oe || {};
                var ke = oe.body;
                if (H instanceof _e) {
                    if (H.bodyUsed) throw new TypeError("Already read");
                    this.url = H.url, this.credentials = H.credentials, oe.headers || (this.headers = new K(H.headers)), this.method = H.method, this.mode = H.mode, this.signal = H.signal, !ke && H._bodyInit != null && (ke = H._bodyInit, H.bodyUsed = !0)
                } else this.url = String(H);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new K(oe.headers)), this.method = Ee(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && ke) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(ke)
            }
            _e.prototype.clone = function() {
                return new _e(this, {
                    body: this._bodyInit
                })
            };

            function Me(H) {
                var oe = new FormData;
                return H.trim().split("&").forEach(function(ke) {
                    if (ke) {
                        var ye = ke.split("="),
                            ve = ye.shift().replace(/\+/g, " "),
                            ue = ye.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(ve), decodeURIComponent(ue))
                    }
                }), oe
            }

            function lt(H) {
                var oe = new K,
                    ke = H.replace(/\r?\n[\t ]+/g, " ");
                return ke.split(/\r?\n/).forEach(function(ye) {
                    var ve = ye.split(":"),
                        ue = ve.shift().trim();
                    if (ue) {
                        var xe = ve.join(":").trim();
                        oe.append(ue, xe)
                    }
                }), oe
            }
            me.call(_e.prototype);

            function Ve(H, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new K(oe.headers), this.url = oe.url || "", this._initBody(H)
            }
            me.call(Ve.prototype), Ve.prototype.clone = function() {
                return new Ve(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new K(this.headers),
                    url: this.url
                })
            }, Ve.error = function() {
                var H = new Ve(null, {
                    status: 0,
                    statusText: ""
                });
                return H.type = "error", H
            };
            var J = [301, 302, 303, 307, 308];
            Ve.redirect = function(H, oe) {
                if (J.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Ve(null, {
                    status: oe,
                    headers: {
                        location: H
                    }
                })
            }, A.DOMException = f.DOMException;
            try {
                new A.DOMException
            } catch {
                A.DOMException = function(oe, ke) {
                    this.message = oe, this.name = ke;
                    var ye = Error(oe);
                    this.stack = ye.stack
                }, A.DOMException.prototype = Object.create(Error.prototype), A.DOMException.prototype.constructor = A.DOMException
            }

            function qe(H, oe) {
                return new Promise(function(ke, ye) {
                    var ve = new _e(H, oe);
                    if (ve.signal && ve.signal.aborted) return ye(new A.DOMException("Aborted", "AbortError"));
                    var ue = new XMLHttpRequest;

                    function xe() {
                        ue.abort()
                    }
                    ue.onload = function() {
                        var Ie = {
                            status: ue.status,
                            statusText: ue.statusText,
                            headers: lt(ue.getAllResponseHeaders() || "")
                        };
                        Ie.url = "responseURL" in ue ? ue.responseURL : Ie.headers.get("X-Request-URL");
                        var Ue = "response" in ue ? ue.response : ue.responseText;
                        ke(new Ve(Ue, Ie))
                    }, ue.onerror = function() {
                        ye(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        ye(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        ye(new A.DOMException("Aborted", "AbortError"))
                    }, ue.open(ve.method, ve.url, !0), ve.credentials === "include" ? ue.withCredentials = !0 : ve.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && S.blob && (ue.responseType = "blob"), ve.headers.forEach(function(Ie, Ue) {
                        ue.setRequestHeader(Ue, Ie)
                    }), ve.signal && (ve.signal.addEventListener("abort", xe), ue.onreadystatechange = function() {
                        ue.readyState === 4 && ve.signal.removeEventListener("abort", xe)
                    }), ue.send(typeof ve._bodyInit > "u" ? null : ve._bodyInit)
                })
            }
            return qe.polyfill = !0, f.fetch || (f.fetch = qe, f.Headers = K, f.Request = _e, f.Response = Ve), A.Headers = K, A.Request = _e, A.Response = Ve, A.fetch = qe, Object.defineProperty(A, "__esModule", {
                value: !0
            }), A
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var o = i;
    e = o.fetch, e.default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, t.exports = e
})(Ea, Ea.exports);
var nv = function() {
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
            var A = Object.getOwnPropertyDescriptor(e, n);
            if (A.value !== o || A.enumerable !== !0) return !1
        }
        return !0
    },
    Dl = typeof Symbol < "u" && Symbol,
    iv = nv,
    rv = function() {
        return typeof Dl != "function" || typeof Symbol != "function" || typeof Dl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : iv()
    },
    sv = "Function.prototype.bind called on incompatible ",
    $o = Array.prototype.slice,
    ov = Object.prototype.toString,
    av = "[object Function]",
    lv = function(e) {
        var n = this;
        if (typeof n != "function" || ov.call(n) !== av) throw new TypeError(sv + n);
        for (var i = $o.call(arguments, 1), o, f = function() {
                if (this instanceof o) {
                    var B = n.apply(this, i.concat($o.call(arguments)));
                    return Object(B) === B ? B : this
                } else return n.apply(e, i.concat($o.call(arguments)))
            }, A = Math.max(0, n.length - i.length), S = [], I = 0; I < A; I++) S.push("$" + I);
        if (o = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var L = function() {};
            L.prototype = n.prototype, o.prototype = new L, L.prototype = null
        }
        return o
    },
    cv = lv,
    qa = Function.prototype.bind || cv,
    uv = qa,
    hv = uv.call(Function.call, Object.prototype.hasOwnProperty),
    At, gr = SyntaxError,
    Uc = Function,
    ur = TypeError,
    ea = function(t) {
        try {
            return Uc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Ri = Object.getOwnPropertyDescriptor;
if (Ri) try {
    Ri({}, "")
} catch {
    Ri = null
}
var ta = function() {
        throw new ur
    },
    dv = Ri ? function() {
        try {
            return arguments.callee, ta
        } catch {
            try {
                return Ri(arguments, "callee").get
            } catch {
                return ta
            }
        }
    }() : ta,
    ir = rv(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    or = {},
    fv = typeof Uint8Array > "u" ? At : ai(Uint8Array),
    hr = {
        "%AggregateError%": typeof AggregateError > "u" ? At : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? At : ArrayBuffer,
        "%ArrayIteratorPrototype%": ir ? ai([][Symbol.iterator]()) : At,
        "%AsyncFromSyncIteratorPrototype%": At,
        "%AsyncFunction%": or,
        "%AsyncGenerator%": or,
        "%AsyncGeneratorFunction%": or,
        "%AsyncIteratorPrototype%": or,
        "%Atomics%": typeof Atomics > "u" ? At : Atomics,
        "%BigInt%": typeof BigInt > "u" ? At : BigInt,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? At : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? At : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? At : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? At : FinalizationRegistry,
        "%Function%": Uc,
        "%GeneratorFunction%": or,
        "%Int8Array%": typeof Int8Array > "u" ? At : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? At : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? At : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": ir ? ai(ai([][Symbol.iterator]())) : At,
        "%JSON%": typeof JSON == "object" ? JSON : At,
        "%Map%": typeof Map > "u" ? At : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !ir ? At : ai(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? At : Promise,
        "%Proxy%": typeof Proxy > "u" ? At : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? At : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? At : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !ir ? At : ai(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? At : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": ir ? ai("" [Symbol.iterator]()) : At,
        "%Symbol%": ir ? Symbol : At,
        "%SyntaxError%": gr,
        "%ThrowTypeError%": dv,
        "%TypedArray%": fv,
        "%TypeError%": ur,
        "%Uint8Array%": typeof Uint8Array > "u" ? At : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? At : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? At : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? At : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? At : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? At : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? At : WeakSet
    },
    pv = function t(e) {
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
    Rl = {
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
    hs = qa,
    Xs = hv,
    gv = hs.call(Function.call, Array.prototype.concat),
    Av = hs.call(Function.apply, Array.prototype.splice),
    Ml = hs.call(Function.call, String.prototype.replace),
    Zs = hs.call(Function.call, String.prototype.slice),
    mv = hs.call(Function.call, RegExp.prototype.exec),
    vv = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    yv = /\\(\\)?/g,
    wv = function(e) {
        var n = Zs(e, 0, 1),
            i = Zs(e, -1);
        if (n === "%" && i !== "%") throw new gr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new gr("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return Ml(e, vv, function(f, A, S, I) {
            o[o.length] = S ? Ml(I, yv, "$1") : A || f
        }), o
    },
    bv = function(e, n) {
        var i = e,
            o;
        if (Xs(Rl, i) && (o = Rl[i], i = "%" + o[0] + "%"), Xs(hr, i)) {
            var f = hr[i];
            if (f === or && (f = pv(i)), typeof f > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: o,
                name: i,
                value: f
            }
        }
        throw new gr("intrinsic " + e + " does not exist!")
    },
    Ga = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new ur("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new ur('"allowMissing" argument must be a boolean');
        if (mv(/^%?[^%]*%?$/g, e) === null) throw new gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = wv(e),
            o = i.length > 0 ? i[0] : "",
            f = bv("%" + o + "%", n),
            A = f.name,
            S = f.value,
            I = !1,
            L = f.alias;
        L && (o = L[0], Av(i, gv([0, 1], L)));
        for (var B = 1, U = !0; B < i.length; B += 1) {
            var X = i[B],
                ie = Zs(X, 0, 1),
                K = Zs(X, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || K === '"' || K === "'" || K === "`") && ie !== K) throw new gr("property names with quotes must have matching quotes");
            if ((X === "constructor" || !U) && (I = !0), o += "." + X, A = "%" + o + "%", Xs(hr, A)) S = hr[A];
            else if (S != null) {
                if (!(X in S)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Ri && B + 1 >= i.length) {
                    var re = Ri(S, X);
                    U = !!re, U && "get" in re && !("originalValue" in re.get) ? S = re.get : S = S[X]
                } else U = Xs(S, X), S = S[X];
                U && !I && (hr[A] = S)
            }
        }
        return S
    },
    jc = {
        exports: {}
    };
(function(t) {
    var e = qa,
        n = Ga,
        i = n("%Function.prototype.apply%"),
        o = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(o, i),
        A = n("%Object.getOwnPropertyDescriptor%", !0),
        S = n("%Object.defineProperty%", !0),
        I = n("%Math.max%");
    if (S) try {
        S({}, "a", {
            value: 1
        })
    } catch {
        S = null
    }
    t.exports = function(U) {
        var X = f(e, o, arguments);
        if (A && S) {
            var ie = A(X, "length");
            ie.configurable && S(X, "length", {
                value: 1 + I(0, U.length - (arguments.length - 1))
            })
        }
        return X
    };
    var L = function() {
        return f(e, i, arguments)
    };
    S ? S(t.exports, "apply", {
        value: L
    }) : t.exports.apply = L
})(jc);
var qc = Ga,
    Gc = jc.exports,
    Cv = Gc(qc("String.prototype.indexOf")),
    Ev = function(e, n) {
        var i = qc(e, !!n);
        return typeof i == "function" && Cv(e, ".prototype.") > -1 ? Gc(i) : i
    };
const xv = {},
    Sv = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: xv
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Iv = gh(Sv);
var Fa = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Fa ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    $s = Fa && na && typeof na.get == "function" ? na.get : null,
    kv = Fa && Map.prototype.forEach,
    Ha = typeof Set == "function" && Set.prototype,
    ia = Object.getOwnPropertyDescriptor && Ha ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Ha && ia && typeof ia.get == "function" ? ia.get : null,
    _v = Ha && Set.prototype.forEach,
    Ov = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Ov ? WeakMap.prototype.has : null,
    Tv = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Tv ? WeakSet.prototype.has : null,
    Lv = typeof WeakRef == "function" && WeakRef.prototype,
    Pl = Lv ? WeakRef.prototype.deref : null,
    Bv = Boolean.prototype.valueOf,
    Dv = Object.prototype.toString,
    Rv = Function.prototype.toString,
    Mv = String.prototype.match,
    Ya = String.prototype.slice,
    hi = String.prototype.replace,
    Pv = String.prototype.toUpperCase,
    Nl = String.prototype.toLowerCase,
    Fc = RegExp.prototype.test,
    Vl = Array.prototype.concat,
    jn = Array.prototype.join,
    Nv = Array.prototype.slice,
    Ul = Math.floor,
    xa = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    Ar = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === Ar ? "object" : "symbol") ? Symbol.toStringTag : null,
    Hc = Object.prototype.propertyIsEnumerable,
    jl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function ql(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Fc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Ul(-t) : Ul(t);
        if (i !== t) {
            var o = String(i),
                f = Ya.call(e, o.length + 1);
            return hi.call(o, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var Ia = Iv,
    Gl = Ia.custom,
    Fl = Wc(Gl) ? Gl : null,
    Vv = function t(e, n, i, o) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var A = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof A != "boolean" && A !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var S = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Qc(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var I = String(e);
            return S ? ql(e, I) : I
        }
        if (typeof e == "bigint") {
            var L = String(e) + "n";
            return S ? ql(e, L) : L
        }
        var B = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= B && B > 0 && typeof e == "object") return ka(e) ? "[Array]" : "[Object]";
        var U = ny(f, i);
        if (typeof o > "u") o = [];
        else if (zc(o, e) >= 0) return "[Circular]";

        function X(qe, H, oe) {
            if (H && (o = Nv.call(o), o.push(H)), oe) {
                var ke = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (ke.quoteStyle = f.quoteStyle), t(qe, ke, i + 1, o)
            }
            return t(qe, f, i + 1, o)
        }
        if (typeof e == "function" && !Hl(e)) {
            var ie = zv(e),
                K = Rs(e, X);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (K.length > 0 ? " { " + jn.call(K, ", ") + " }" : "")
        }
        if (Wc(e)) {
            var re = Ar ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Sa.call(e);
            return typeof e == "object" && !Ar ? Kr(re) : re
        }
        if ($v(e)) {
            for (var m = "<" + Nl.call(String(e.nodeName)), M = e.attributes || [], W = 0; W < M.length; W++) m += " " + M[W].name + "=" + Yc(Uv(M[W].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + Nl.call(String(e.nodeName)) + ">", m
        }
        if (ka(e)) {
            if (e.length === 0) return "[]";
            var ae = Rs(e, X);
            return U && !ty(ae) ? "[" + _a(ae, U) + "]" : "[ " + jn.call(ae, ", ") + " ]"
        }
        if (qv(e)) {
            var se = Rs(e, X);
            return !("cause" in Error.prototype) && "cause" in e && !Hc.call(e, "cause") ? "{ [" + String(e) + "] " + jn.call(Vl.call("[cause]: " + X(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + jn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && A) {
            if (Fl && typeof e[Fl] == "function" && Ia) return Ia(e, {
                depth: B - i
            });
            if (A !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Qv(e)) {
            var me = [];
            return kv.call(e, function(qe, H) {
                me.push(X(H, e, !0) + " => " + X(qe, e))
            }), Yl("Map", $s.call(e), me, U)
        }
        if (Xv(e)) {
            var d = [];
            return _v.call(e, function(qe) {
                d.push(X(qe, e))
            }), Yl("Set", eo.call(e), d, U)
        }
        if (Kv(e)) return sa("WeakMap");
        if (Zv(e)) return sa("WeakSet");
        if (Jv(e)) return sa("WeakRef");
        if (Fv(e)) return Kr(X(Number(e)));
        if (Yv(e)) return Kr(X(xa.call(e)));
        if (Hv(e)) return Kr(Bv.call(e));
        if (Gv(e)) return Kr(X(String(e)));
        if (!jv(e) && !Hl(e)) {
            var Ee = Rs(e, X),
                _e = jl ? jl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Me = e instanceof Object ? "" : "null prototype",
                lt = !_e && cn && Object(e) === e && cn in e ? Ya.call(pi(e), 8, -1) : Me ? "Object" : "",
                Ve = _e || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                J = Ve + (lt || Me ? "[" + jn.call(Vl.call([], lt || [], Me || []), ": ") + "] " : "");
            return Ee.length === 0 ? J + "{}" : U ? J + "{" + _a(Ee, U) + "}" : J + "{ " + jn.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function Yc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function Uv(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function ka(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function jv(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Hl(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function qv(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gv(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function Fv(t) {
    return pi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Hv(t) {
    return pi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function Wc(t) {
    if (Ar) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Sa) return !1;
    try {
        return Sa.call(t), !0
    } catch {}
    return !1
}

function Yv(t) {
    if (!t || typeof t != "object" || !xa) return !1;
    try {
        return xa.call(t), !0
    } catch {}
    return !1
}
var Wv = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return Wv.call(t, e)
}

function pi(t) {
    return Dv.call(t)
}

function zv(t) {
    if (t.name) return t.name;
    var e = Mv.call(Rv.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function zc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function Qv(t) {
    if (!$s || !t || typeof t != "object") return !1;
    try {
        $s.call(t);
        try {
            eo.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function Kv(t) {
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

function Jv(t) {
    if (!Pl || !t || typeof t != "object") return !1;
    try {
        return Pl.call(t), !0
    } catch {}
    return !1
}

function Xv(t) {
    if (!eo || !t || typeof t != "object") return !1;
    try {
        eo.call(t);
        try {
            $s.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function Zv(t) {
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

function $v(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Qc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Qc(Ya.call(t, 0, e.maxStringLength), e) + i
    }
    var o = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ey);
    return Yc(o, "single", e)
}

function ey(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Pv.call(e.toString(16))
}

function Kr(t) {
    return "Object(" + t + ")"
}

function sa(t) {
    return t + " { ? }"
}

function Yl(t, e, n, i) {
    var o = i ? _a(n, i) : jn.call(n, ", ");
    return t + " (" + e + ") {" + o + "}"
}

function ty(t) {
    for (var e = 0; e < t.length; e++)
        if (zc(t[e], `
`) >= 0) return !1;
    return !0
}

function ny(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = jn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: jn.call(Array(e + 1), n)
    }
}

function _a(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + jn.call(t, "," + n) + `
` + e.prev
}

function Rs(t, e) {
    var n = ka(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var o = 0; o < t.length; o++) i[o] = li(t, o) ? e(t[o], t) : ""
    }
    var f = typeof ra == "function" ? ra(t) : [],
        A;
    if (Ar) {
        A = {};
        for (var S = 0; S < f.length; S++) A["$" + f[S]] = f[S]
    }
    for (var I in t) !li(t, I) || n && String(Number(I)) === I && I < t.length || Ar && A["$" + I] instanceof Symbol || (Fc.call(/[^\w$]/, I) ? i.push(e(I, t) + ": " + e(t[I], t)) : i.push(I + ": " + e(t[I], t)));
    if (typeof ra == "function")
        for (var L = 0; L < f.length; L++) Hc.call(t, f[L]) && i.push("[" + e(f[L]) + "]: " + e(t[f[L]], t));
    return i
}
var Wa = Ga,
    xr = Ev,
    iy = Vv,
    ry = Wa("%TypeError%"),
    Ms = Wa("%WeakMap%", !0),
    Ps = Wa("%Map%", !0),
    sy = xr("WeakMap.prototype.get", !0),
    oy = xr("WeakMap.prototype.set", !0),
    ay = xr("WeakMap.prototype.has", !0),
    ly = xr("Map.prototype.get", !0),
    cy = xr("Map.prototype.set", !0),
    uy = xr("Map.prototype.has", !0),
    za = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    hy = function(t, e) {
        var n = za(t, e);
        return n && n.value
    },
    dy = function(t, e, n) {
        var i = za(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    fy = function(t, e) {
        return !!za(t, e)
    },
    py = function() {
        var e, n, i, o = {
            assert: function(f) {
                if (!o.has(f)) throw new ry("Side channel does not contain " + iy(f))
            },
            get: function(f) {
                if (Ms && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return sy(e, f)
                } else if (Ps) {
                    if (n) return ly(n, f)
                } else if (i) return hy(i, f)
            },
            has: function(f) {
                if (Ms && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return ay(e, f)
                } else if (Ps) {
                    if (n) return uy(n, f)
                } else if (i) return fy(i, f);
                return !1
            },
            set: function(f, A) {
                Ms && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ms), oy(e, f, A)) : Ps ? (n || (n = new Ps), cy(n, f, A)) : (i || (i = {
                    key: {},
                    next: null
                }), dy(i, f, A))
            }
        };
        return o
    },
    gy = String.prototype.replace,
    Ay = /%20/g,
    oa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Qa = {
        default: oa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return gy.call(t, Ay, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: oa.RFC1738,
        RFC3986: oa.RFC3986
    },
    my = Qa,
    aa = Object.prototype.hasOwnProperty,
    Bi = Array.isArray,
    Vn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    vy = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Bi(i)) {
                for (var o = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && o.push(i[f]);
                n.obj[n.prop] = o
            }
        }
    },
    Kc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o) typeof e[o] < "u" && (i[o] = e[o]);
        return i
    },
    yy = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Bi(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !aa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var o = e;
        return Bi(e) && !Bi(n) && (o = Kc(e, i)), Bi(e) && Bi(n) ? (n.forEach(function(f, A) {
            if (aa.call(e, A)) {
                var S = e[A];
                S && typeof S == "object" && f && typeof f == "object" ? e[A] = t(S, f, i) : e.push(f)
            } else e[A] = f
        }), e) : Object.keys(n).reduce(function(f, A) {
            var S = n[A];
            return aa.call(f, A) ? f[A] = t(f[A], S, i) : f[A] = S, f
        }, o)
    },
    wy = function(e, n) {
        return Object.keys(n).reduce(function(i, o) {
            return i[o] = n[o], i
        }, e)
    },
    by = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Cy = function(e, n, i, o, f) {
        if (e.length === 0) return e;
        var A = e;
        if (typeof e == "symbol" ? A = Symbol.prototype.toString.call(e) : typeof e != "string" && (A = String(e)), i === "iso-8859-1") return escape(A).replace(/%u[0-9a-f]{4}/gi, function(B) {
            return "%26%23" + parseInt(B.slice(2), 16) + "%3B"
        });
        for (var S = "", I = 0; I < A.length; ++I) {
            var L = A.charCodeAt(I);
            if (L === 45 || L === 46 || L === 95 || L === 126 || L >= 48 && L <= 57 || L >= 65 && L <= 90 || L >= 97 && L <= 122 || f === my.RFC1738 && (L === 40 || L === 41)) {
                S += A.charAt(I);
                continue
            }
            if (L < 128) {
                S = S + Vn[L];
                continue
            }
            if (L < 2048) {
                S = S + (Vn[192 | L >> 6] + Vn[128 | L & 63]);
                continue
            }
            if (L < 55296 || L >= 57344) {
                S = S + (Vn[224 | L >> 12] + Vn[128 | L >> 6 & 63] + Vn[128 | L & 63]);
                continue
            }
            I += 1, L = 65536 + ((L & 1023) << 10 | A.charCodeAt(I) & 1023), S += Vn[240 | L >> 18] + Vn[128 | L >> 12 & 63] + Vn[128 | L >> 6 & 63] + Vn[128 | L & 63]
        }
        return S
    },
    Ey = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], o = 0; o < n.length; ++o)
            for (var f = n[o], A = f.obj[f.prop], S = Object.keys(A), I = 0; I < S.length; ++I) {
                var L = S[I],
                    B = A[L];
                typeof B == "object" && B !== null && i.indexOf(B) === -1 && (n.push({
                    obj: A,
                    prop: L
                }), i.push(B))
            }
        return vy(n), e
    },
    xy = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Sy = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Iy = function(e, n) {
        return [].concat(e, n)
    },
    ky = function(e, n) {
        if (Bi(e)) {
            for (var i = [], o = 0; o < e.length; o += 1) i.push(n(e[o]));
            return i
        }
        return n(e)
    },
    Jc = {
        arrayToObject: Kc,
        assign: wy,
        combine: Iy,
        compact: Ey,
        decode: by,
        encode: Cy,
        isBuffer: Sy,
        isRegExp: xy,
        maybeMap: ky,
        merge: yy
    },
    Xc = py,
    Oa = Jc,
    is = Qa,
    _y = Object.prototype.hasOwnProperty,
    Wl = {
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
    Oy = String.prototype.split,
    Ty = Array.prototype.push,
    Zc = function(t, e) {
        Ty.apply(t, ei(e) ? e : [e])
    },
    Ly = Date.prototype.toISOString,
    zl = is.default,
    tn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Oa.encode,
        encodeValuesOnly: !1,
        format: zl,
        formatter: is.formatters[zl],
        indices: !1,
        serializeDate: function(e) {
            return Ly.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    By = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    la = {},
    Dy = function t(e, n, i, o, f, A, S, I, L, B, U, X, ie, K, re, m) {
        for (var M = e, W = m, ae = 0, se = !1;
            (W = W.get(la)) !== void 0 && !se;) {
            var me = W.get(e);
            if (ae += 1, typeof me < "u") {
                if (me === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof W.get(la) > "u" && (ae = 0)
        }
        if (typeof I == "function" ? M = I(n, M) : M instanceof Date ? M = U(M) : i === "comma" && ei(M) && (M = Oa.maybeMap(M, function(ue) {
                return ue instanceof Date ? U(ue) : ue
            })), M === null) {
            if (f) return S && !K ? S(n, tn.encoder, re, "key", X) : n;
            M = ""
        }
        if (By(M) || Oa.isBuffer(M)) {
            if (S) {
                var d = K ? n : S(n, tn.encoder, re, "key", X);
                if (i === "comma" && K) {
                    for (var Ee = Oy.call(String(M), ","), _e = "", Me = 0; Me < Ee.length; ++Me) _e += (Me === 0 ? "" : ",") + ie(S(Ee[Me], tn.encoder, re, "value", X));
                    return [ie(d) + (o && ei(M) && Ee.length === 1 ? "[]" : "") + "=" + _e]
                }
                return [ie(d) + "=" + ie(S(M, tn.encoder, re, "value", X))]
            }
            return [ie(n) + "=" + ie(String(M))]
        }
        var lt = [];
        if (typeof M > "u") return lt;
        var Ve;
        if (i === "comma" && ei(M)) Ve = [{
            value: M.length > 0 ? M.join(",") || null : void 0
        }];
        else if (ei(I)) Ve = I;
        else {
            var J = Object.keys(M);
            Ve = L ? J.sort(L) : J
        }
        for (var qe = o && ei(M) && M.length === 1 ? n + "[]" : n, H = 0; H < Ve.length; ++H) {
            var oe = Ve[H],
                ke = typeof oe == "object" && typeof oe.value < "u" ? oe.value : M[oe];
            if (!(A && ke === null)) {
                var ye = ei(M) ? typeof i == "function" ? i(qe, oe) : qe : qe + (B ? "." + oe : "[" + oe + "]");
                m.set(e, ae);
                var ve = Xc();
                ve.set(la, m), Zc(lt, t(ke, ye, i, o, f, A, S, I, L, B, U, X, ie, K, re, ve))
            }
        }
        return lt
    },
    Ry = function(e) {
        if (!e) return tn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || tn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!_y.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
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
    My = function(t, e) {
        var n = t,
            i = Ry(e),
            o, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, o = f);
        var A = [];
        if (typeof n != "object" || n === null) return "";
        var S;
        e && e.arrayFormat in Wl ? S = e.arrayFormat : e && "indices" in e ? S = e.indices ? "indices" : "repeat" : S = "indices";
        var I = Wl[S];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var L = I === "comma" && e && e.commaRoundTrip;
        o || (o = Object.keys(n)), i.sort && o.sort(i.sort);
        for (var B = Xc(), U = 0; U < o.length; ++U) {
            var X = o[U];
            i.skipNulls && n[X] === null || Zc(A, Dy(n[X], X, I, L, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, B))
        }
        var ie = A.join(i.delimiter),
            K = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? K += "utf8=%26%2310003%3B&" : K += "utf8=%E2%9C%93&"), ie.length > 0 ? K + ie : ""
    },
    mr = Jc,
    Ta = Object.prototype.hasOwnProperty,
    Py = Array.isArray,
    Zt = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: mr.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    Ny = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    $c = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Vy = "utf8=%26%2310003%3B",
    Uy = "utf8=%E2%9C%93",
    jy = function(e, n) {
        var i = {},
            o = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            A = o.split(n.delimiter, f),
            S = -1,
            I, L = n.charset;
        if (n.charsetSentinel)
            for (I = 0; I < A.length; ++I) A[I].indexOf("utf8=") === 0 && (A[I] === Uy ? L = "utf-8" : A[I] === Vy && (L = "iso-8859-1"), S = I, I = A.length);
        for (I = 0; I < A.length; ++I)
            if (I !== S) {
                var B = A[I],
                    U = B.indexOf("]="),
                    X = U === -1 ? B.indexOf("=") : U + 1,
                    ie, K;
                X === -1 ? (ie = n.decoder(B, Zt.decoder, L, "key"), K = n.strictNullHandling ? null : "") : (ie = n.decoder(B.slice(0, X), Zt.decoder, L, "key"), K = mr.maybeMap($c(B.slice(X + 1), n), function(re) {
                    return n.decoder(re, Zt.decoder, L, "value")
                })), K && n.interpretNumericEntities && L === "iso-8859-1" && (K = Ny(K)), B.indexOf("[]=") > -1 && (K = Py(K) ? [K] : K), Ta.call(i, ie) ? i[ie] = mr.combine(i[ie], K) : i[ie] = K
            } return i
    },
    qy = function(t, e, n, i) {
        for (var o = i ? e : $c(e, n), f = t.length - 1; f >= 0; --f) {
            var A, S = t[f];
            if (S === "[]" && n.parseArrays) A = [].concat(o);
            else {
                A = n.plainObjects ? Object.create(null) : {};
                var I = S.charAt(0) === "[" && S.charAt(S.length - 1) === "]" ? S.slice(1, -1) : S,
                    L = parseInt(I, 10);
                !n.parseArrays && I === "" ? A = {
                    0: o
                } : !isNaN(L) && S !== I && String(L) === I && L >= 0 && n.parseArrays && L <= n.arrayLimit ? (A = [], A[L] = o) : I !== "__proto__" && (A[I] = o)
            }
            o = A
        }
        return o
    },
    Gy = function(e, n, i, o) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                A = /(\[[^[\]]*])/,
                S = /(\[[^[\]]*])/g,
                I = i.depth > 0 && A.exec(f),
                L = I ? f.slice(0, I.index) : f,
                B = [];
            if (L) {
                if (!i.plainObjects && Ta.call(Object.prototype, L) && !i.allowPrototypes) return;
                B.push(L)
            }
            for (var U = 0; i.depth > 0 && (I = S.exec(f)) !== null && U < i.depth;) {
                if (U += 1, !i.plainObjects && Ta.call(Object.prototype, I[1].slice(1, -1)) && !i.allowPrototypes) return;
                B.push(I[1])
            }
            return I && B.push("[" + f.slice(I.index) + "]"), qy(B, n, i, o)
        }
    },
    Fy = function(e) {
        if (!e) return Zt;
        if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var n = typeof e.charset > "u" ? Zt.charset : e.charset;
        return {
            allowDots: typeof e.allowDots > "u" ? Zt.allowDots : !!e.allowDots,
            allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : Zt.allowPrototypes,
            allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : Zt.allowSparse,
            arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : Zt.arrayLimit,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Zt.charsetSentinel,
            comma: typeof e.comma == "boolean" ? e.comma : Zt.comma,
            decoder: typeof e.decoder == "function" ? e.decoder : Zt.decoder,
            delimiter: typeof e.delimiter == "string" || mr.isRegExp(e.delimiter) ? e.delimiter : Zt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Zt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Zt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Zt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Zt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Zt.strictNullHandling
        }
    },
    Hy = function(t, e) {
        var n = Fy(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? jy(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), A = 0; A < f.length; ++A) {
            var S = f[A],
                I = Gy(S, i[S], n, typeof t == "string");
            o = mr.merge(o, I, n)
        }
        return n.allowSparse === !0 ? o : mr.compact(o)
    },
    Yy = My,
    Wy = Hy,
    zy = Qa,
    eu = {
        formats: zy,
        parse: Wy,
        stringify: Yy
    };
class Qy {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Ky {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Jy {
    constructor(e) {
        this.connections = e.connections
    }
}
class Xy {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class Zy {}
var po = {
    CreateRoomReply: Qy,
    GetRoomReply: Ky,
    GetAudienceReply: Jy,
    RoomExit: Xy,
    RoomLock: Zy
};
const Ql = Ea.exports,
    $y = eu,
    {
        CreateRoomReply: ew,
        GetRoomReply: tw
    } = po;
class nw {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = $y.stringify(n);
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
            A = await (await Ql(i, {
                method: "POST"
            })).json();
        if (!A.ok) throw new Error(`failed to create room: ${A.error}`);
        let S = A.body;
        return new ew({
            code: S.code,
            token: S.token,
            host: S.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            o = await (await Ql(n)).json();
        if (!o.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${o.error}`);
        let f = o.body;
        return new tw({
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
var iw = {
        APIClient: nw
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof mt < "u" ? ar = mt.WebSocket || mt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var rw = ar,
    Ka = {
        exports: {}
    },
    dr = typeof Reflect == "object" ? Reflect : null,
    Kl = dr && typeof dr.apply == "function" ? dr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Fs;
dr && typeof dr.ownKeys == "function" ? Fs = dr.ownKeys : Object.getOwnPropertySymbols ? Fs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Fs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function sw(t) {
    console && console.warn && console.warn(t)
}
var tu = Number.isNaN || function(e) {
    return e !== e
};

function Tt() {
    Tt.init.call(this)
}
Ka.exports = Tt;
Ka.exports.once = cw;
Tt.EventEmitter = Tt;
Tt.prototype._events = void 0;
Tt.prototype._eventsCount = 0;
Tt.prototype._maxListeners = void 0;
var Jl = 10;

function go(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Tt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Jl
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || tu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Jl = t
    }
});
Tt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Tt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || tu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function nu(t) {
    return t._maxListeners === void 0 ? Tt.defaultMaxListeners : t._maxListeners
}
Tt.prototype.getMaxListeners = function() {
    return nu(this)
};
Tt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var o = e === "error",
        f = this._events;
    if (f !== void 0) o = o && f.error === void 0;
    else if (!o) return !1;
    if (o) {
        var A;
        if (n.length > 0 && (A = n[0]), A instanceof Error) throw A;
        var S = new Error("Unhandled error." + (A ? " (" + A.message + ")" : ""));
        throw S.context = A, S
    }
    var I = f[e];
    if (I === void 0) return !1;
    if (typeof I == "function") Kl(I, this, n);
    else
        for (var L = I.length, B = au(I, L), i = 0; i < L; ++i) Kl(B[i], this, n);
    return !0
};

function iu(t, e, n, i) {
    var o, f, A;
    if (go(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), A = f[e]), A === void 0) A = f[e] = n, ++t._eventsCount;
    else if (typeof A == "function" ? A = f[e] = i ? [n, A] : [A, n] : i ? A.unshift(n) : A.push(n), o = nu(t), o > 0 && A.length > o && !A.warned) {
        A.warned = !0;
        var S = new Error("Possible EventEmitter memory leak detected. " + A.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        S.name = "MaxListenersExceededWarning", S.emitter = t, S.type = e, S.count = A.length, sw(S)
    }
    return t
}
Tt.prototype.addListener = function(e, n) {
    return iu(this, e, n, !1)
};
Tt.prototype.on = Tt.prototype.addListener;
Tt.prototype.prependListener = function(e, n) {
    return iu(this, e, n, !0)
};

function ow() {
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
        o = ow.bind(i);
    return o.listener = n, i.wrapFn = o, o
}
Tt.prototype.once = function(e, n) {
    return go(n), this.on(e, ru(this, e, n)), this
};
Tt.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, ru(this, e, n)), this
};
Tt.prototype.removeListener = function(e, n) {
    var i, o, f, A, S;
    if (go(n), o = this._events, o === void 0) return this;
    if (i = o[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, A = i.length - 1; A >= 0; A--)
            if (i[A] === n || i[A].listener === n) {
                S = i[A].listener, f = A;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : aw(i, f), i.length === 1 && (o[e] = i[0]), o.removeListener !== void 0 && this.emit("removeListener", e, S || n)
    }
    return this
};
Tt.prototype.off = Tt.prototype.removeListener;
Tt.prototype.removeAllListeners = function(e) {
    var n, i, o;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var f = Object.keys(i),
            A;
        for (o = 0; o < f.length; ++o) A = f[o], A !== "removeListener" && this.removeAllListeners(A);
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
    return o === void 0 ? [] : typeof o == "function" ? n ? [o.listener || o] : [o] : n ? lw(o) : au(o, o.length)
}
Tt.prototype.listeners = function(e) {
    return su(this, e, !0)
};
Tt.prototype.rawListeners = function(e) {
    return su(this, e, !1)
};
Tt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : ou.call(t, e)
};
Tt.prototype.listenerCount = ou;

function ou(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
Tt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Fs(this._events) : []
};

function au(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function aw(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function lw(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function cw(t, e) {
    return new Promise(function(n, i) {
        function o(A) {
            t.removeListener(e, f), i(A)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", o), n([].slice.call(arguments))
        }
        lu(t, e, f, {
            once: !0
        }), e !== "error" && uw(t, o, {
            once: !0
        })
    })
}

function uw(t, e, n) {
    typeof t.on == "function" && lu(t, "error", e, n)
}

function lu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function o(f) {
        i.once && t.removeEventListener(e, o), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class hw {
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
class Ao extends Error {
    constructor(e) {
        super(e), e && (this.code = e.code, this.message = e.message)
    }
}
class ds extends Ao {
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
class kt extends Ao {
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
class Au extends kt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class mu extends kt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class vu extends kt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class yu extends kt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class wu extends kt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class bu extends kt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Cu extends kt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Eu extends kt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class xu extends kt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Su extends kt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Iu extends kt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class ku extends kt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class _u extends kt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Ou extends kt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Tu extends kt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Lu extends kt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Bu extends kt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Du extends kt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Ru extends kt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Mu extends kt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Pu extends kt {
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
class Uu extends kt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function dw({
    code: t,
    message: e
}) {
    const n = fw[t];
    return n ? new n({
        message: e
    }) : new Ao({
        message: e
    })
}
var ti = {
    createError: dw,
    CallError: Ao,
    EcastServerError: ds,
    EcastCreateRoomFailed: cu,
    EcastDialRoomFailed: uu,
    EcastServerIsShuttingDown: hu,
    EcastClientError: kt,
    EcastParseError: du,
    EcastRequestIsMissingOpcode: fu,
    EcastRequestHasInvalidOpcode: pu,
    EcastRequestHasInvalidArguments: gu,
    EcastEntityNotFound: Au,
    EcastEntityAlreadyExists: mu,
    EcastEntityTypeError: vu,
    EcastNoSuchClient: yu,
    EcastRoomIsLocked: wu,
    EcastRoomIsFull: bu,
    EcastLicenseNotFound: Cu,
    EcastLicenseCheckFailed: Eu,
    EcastRoomNotFound: xu,
    EcastInvalidRole: Su,
    EcastTwitchLoginRequired: Iu,
    EcastInvalidOption: ku,
    EcastPasswordRequired: _u,
    EcastInvalidPassword: Ou,
    EcastNameRequired: Tu,
    EcastFilterError: Lu,
    EcastNoSuchFilter: Bu,
    EcastPermissionDenied: Du,
    EcastNotConnected: Ru,
    EcastIllegalOperation: Mu,
    EcastACLChangeDenied: Pu,
    EcastRoomHasEnded: Nu,
    EcastEntityLocked: Vu,
    EcastRateLimitExceeded: Uu,
    ObservedError: hw
};
const fw = {
    1e3: ds,
    1001: cu,
    1002: uu,
    1003: hu,
    2e3: kt,
    2001: du,
    2002: fu,
    2003: pu,
    2004: gu,
    2005: Au,
    2006: mu,
    2007: vu,
    2008: yu,
    2009: wu,
    2010: bu,
    2011: Cu,
    2012: Eu,
    2013: xu,
    2014: Su,
    2015: Iu,
    2016: ku,
    2017: _u,
    2018: Ou,
    2019: Tu,
    2021: Lu,
    2022: Bu,
    2023: Du,
    2024: Ru,
    2025: Mu,
    2026: Pu,
    2027: Nu,
    2028: Vu,
    2420: Uu
};
class pw {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class gw {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class Aw {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class mw {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class vw {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ja = {
    ClientConnected: gw,
    ClientDisconnected: Aw,
    ClientKicked: vw,
    ClientSend: mw,
    ClientWelcome: pw
};
class yw {
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
var Xa = {
    CountGroup: yw
};
class ww {
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
var Za = {
    GCounter: ww
};
class bw {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var ju = {
    Notification: bw
};
class Cw {
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
class Ew {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var $a = {
    ObjectEntity: Cw,
    ObjectEcho: Ew
};
class xw {
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
    PNCounter: xw
};
class Sw {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var qu = {
    Reply: Sw
};
class Iw {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var kw = {
    Request: Iw
};
class _w {
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
class Ow {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var tl = {
    TextEntity: _w,
    TextEcho: Ow
};
class Tw {
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
    TextRing: Tw
};
class Lw {
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
var Gu = {
    ArtifactEntity: Lw
};
class Bw {
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
class Dw {
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
class Rw {
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
    DoodleEntity: Bw,
    DoodleLine: Dw,
    DoodleLineRemoved: Rw
};
class Mw {
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
class Pw {
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
class Nw {
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
var Fu = {
    StackEntity: Mw,
    StackElement: Pw,
    StackElements: Nw
};
class Vw {
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
var Hu = {
    DropEntity: Vw
};
class Uw {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var jw = {
    Echo: Uw
};
class qw {
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
var Gw = {
    LockEntity: qw
};
class Fw {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Yu = {
    OK: Fw
};
class Hw {
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
var Wu = {
    NumberEntity: Hw
};
const {
    ArtifactEntity: Yw
} = Gu, {
    ClientWelcome: Ww,
    ClientConnected: zw,
    ClientDisconnected: Qw,
    ClientKicked: Kw,
    ClientSend: Jw
} = Ja, {
    CountGroup: Xw
} = Xa, {
    DoodleEntity: Zw,
    DoodleLine: $w,
    DoodleLineRemoved: eb
} = il, {
    StackEntity: tb,
    StackElement: nb,
    StackElements: ib
} = Fu, {
    DropEntity: rb
} = Hu, {
    Echo: sb
} = jw, {
    LockEntity: ob
} = Gw, {
    GCounter: ab
} = Za, {
    GetAudienceReply: lb,
    RoomExit: cb,
    RoomLock: ub
} = po, {
    Notification: hb
} = ju, {
    OK: db
} = Yu, {
    NumberEntity: fb
} = Wu, {
    ObjectEcho: pb,
    ObjectEntity: gb
} = $a, {
    PNCounter: Xl
} = el, {
    Reply: Ab
} = qu, {
    TextEcho: mb,
    TextEntity: vb
} = tl, {
    TextRing: yb
} = nl, {
    createError: Zl,
    ObservedError: wb
} = ti;

function La(t, e, n) {
    switch (t) {
        case "ok":
            return new db;
        case "echo":
            return new sb({
                message: e.message
            });
        case "lock":
            return new ob({
                key: e.key,
                from: e.from
            });
        case "error":
            return Zl({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new wb({
                to: e.to,
                error: Zl({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new vb({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new mb({
                message: e.message
            });
        case "object":
            return new gb({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new pb({
                message: e.message
            });
        case "drop":
            return new rb({
                key: e.key
            });
        case "artifact":
            return new Yw({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new zw({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Qw({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Kw({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Jw({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Ww({
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
                Object.entries(e.entities).forEach(([f, A]) => {
                    o[f] = La(A[0], A[1], A[2])
                }), i.entities = o
            }
            return i
        }
        case "doodle":
            return new Zw({
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
            return new $w({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new eb({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new tb({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new nb({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new ib({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new fb({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new cb({
                cause: e.cause
            });
        case "room/lock":
            return new ub;
        case "room/get-audience":
            return new lb({
                connections: e.connections
            });
        case "audience":
            return new Xl({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new Xw({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new yb({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new ab({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new Xl({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function bb(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new Ab({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: La(n, e.result)
    }) : new hb({
        pc: e.pc,
        opcode: n,
        result: La(n, e.result)
    })
}
var Cb = {
    parseResponseMessage: bb
};
const $l = rw,
    Eb = eu,
    xb = Ka.exports,
    {
        CallError: Sb
    } = ti,
    {
        ClientWelcome: Ib
    } = Ja,
    {
        CountGroup: kb
    } = Xa,
    {
        GCounter: _b
    } = Za,
    {
        Notification: ec
    } = ju,
    {
        ObjectEntity: ca
    } = $a,
    {
        PNCounter: Ob
    } = el,
    {
        Reply: Tb
    } = qu,
    {
        Request: Lb
    } = kw,
    {
        TextEntity: ua
    } = tl,
    {
        TextRing: Bb
    } = nl,
    {
        parseResponseMessage: Db
    } = Cb,
    {
        DoodleEntity: Rb
    } = il,
    {
        StackEntity: Mb
    } = Fu,
    Pb = 1e3 + Math.floor(Math.random() * 500),
    tc = 13e3;
class Nb extends xb {
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
        const n = Eb.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((o, f) => {
            let A = !1,
                S = !1,
                I = B => {
                    o(B), A = !0
                },
                L = B => {
                    f(B), A = !0
                };
            this.conn = new $l(i, "ecast-v0"), this.conn.onmessage = B => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(B.data),null,2)}`);
                const U = Db(B);
                if (U instanceof Tb) this.onReply(U);
                else if (U instanceof ec) {
                    if (U.result instanceof Ib) S = !0, this.id = U.result.id, this.deviceId = U.result.deviceId, this.entities = U.result.entities, this.secret = U.result.secret, U.result.name && (this.name = U.result.name), I(U.result);
                    else if (!A) {
                        L(U.result);
                        return
                    }
                    this.onNotification(U)
                } else console.error(`failed to parse response messsage: ${U}`)
            }, this.conn.onerror = B => {
                A ? this.emit("socketError", B) : L(B)
            }, this.conn.onclose = B => {
                this.debugLog("onclose", B.code), S && B.code === 1006 ? this.reconnect() : this.emit("socketClose", B)
            }, this.conn.onopen = B => {
                this.emit("socketOpen", B)
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
            n = Pb;
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
        delete this.pending[n], e.result instanceof Sb ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== $l.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            o = new Lb({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((S, I) => {
                this.pending[i] = {
                    resolve: S,
                    reject: I,
                    request: o
                }
            }),
            A = JSON.stringify(o);
        return this.debugLog(`send -> ${A}`), this.conn.send(A), f
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
                accept: A,
                reject: S
            } = i;
        f && (o.acl = f), A && (o.accept = A), S && (o.reject = S);
        const I = await this.send("text/create", o);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), I
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
            live: A,
            maxPoints: S,
            size: I,
            weights: L
        } = n;
        o && (i.acl = o), f && (i.colors = f), i.live = A, S != null && (i.maxPoints = S), I && (i.size = I), L && (i.weights = L);
        const B = await this.send("doodle/create", i);
        return this.entities[e] = new Rb({
            key: e,
            colors: f,
            lines: [],
            live: A,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: I,
            weights: L,
            meta: {
                locked: !1
            }
        }), B
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
            points: A
        } = n, S = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: o,
            weight: f,
            points: A
        }), I = {
            layer: i,
            color: o,
            weight: f,
            points: A
        };
        return this.entities[e].lines.push(I), S
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
        return this.entities[e] = new Mb({
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
        return this.entities[e] = new kb({
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
        return this.entities[e] = new _b({
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
        return this.entities[e] = new Ob({
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
                reject: A
            } = n;
        o && (i.limit = o), f && (i.accept = f), A && (i.reject = A);
        const S = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new Bb({
            key: e,
            elements: [],
            limit: o,
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
var Vb = {
    WSClient: Nb
};
const {
    APIClient: Ub
} = iw, {
    WSClient: jb
} = Vb, {
    CreateRoomReply: qb,
    GetRoomReply: Gb
} = po, {
    ClientWelcome: Fb,
    ClientDisconnected: Hb
} = Ja, {
    ArtifactEntity: Yb
} = Gu, {
    GCounter: Wb
} = Za, {
    NumberEntity: zb
} = Wu, {
    TextEntity: Qb
} = tl, {
    DoodleEntity: Kb
} = il, {
    ObjectEntity: Jb
} = $a, {
    CountGroup: Xb
} = Xa, {
    DropEntity: Zb
} = Hu, {
    OK: $b
} = Yu, {
    RoomExit: e0
} = po, {
    TextRing: t0
} = nl, {
    PNCounter: n0
} = el;
var Ti = {
    APIClient: Ub,
    WSClient: jb,
    ClientWelcome: Fb,
    CreateRoomReply: qb,
    DropEntity: Zb,
    GetRoomReply: Gb,
    ClientDisconnected: Hb,
    RoomExit: e0,
    OK: $b,
    ArtifactEntity: Yb,
    DoodleEntity: Kb,
    NumberEntity: zb,
    CountGroup: Xb,
    GCounter: Wb,
    ObjectEntity: Jb,
    PNCounter: n0,
    TextEntity: Qb,
    TextRing: t0
};

function nc(...t) {
    console.log(...t)
}

function i0(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var ic = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(mt, function(n) {
        var i = typeof window < "u" ? window : typeof mt < "u" ? mt : typeof self < "u" ? self : {},
            o = function(P, z) {
                if (z = z.split(":")[0], P = +P, !P) return !1;
                switch (z) {
                    case "http":
                    case "ws":
                        return P !== 80;
                    case "https":
                    case "wss":
                        return P !== 443;
                    case "ftp":
                        return P !== 21;
                    case "gopher":
                        return P !== 70;
                    case "file":
                        return !1
                }
                return P !== 0
            },
            f = Object.prototype.hasOwnProperty,
            A;

        function S(j) {
            try {
                return decodeURIComponent(j.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function I(j) {
            try {
                return encodeURIComponent(j)
            } catch {
                return null
            }
        }

        function L(j) {
            for (var P = /([^=?#&]+)=?([^&]*)/g, z = {}, D; D = P.exec(j);) {
                var Y = S(D[1]),
                    fe = S(D[2]);
                Y === null || fe === null || Y in z || (z[Y] = fe)
            }
            return z
        }

        function B(j, P) {
            P = P || "";
            var z = [],
                D, Y;
            typeof P != "string" && (P = "?");
            for (Y in j)
                if (f.call(j, Y)) {
                    if (D = j[Y], !D && (D === null || D === A || isNaN(D)) && (D = ""), Y = I(Y), D = I(D), Y === null || D === null) continue;
                    z.push(Y + "=" + D)
                } return z.length ? P + z.join("&") : ""
        }
        var U = B,
            X = L,
            ie = {
                stringify: U,
                parse: X
            },
            K = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            m = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            M = new RegExp("^" + m + "+");

        function W(j) {
            return (j || "").toString().replace(M, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(P, z) {
                    return d(z.protocol) ? P.replace(/\\/g, "/") : P
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

        function me(j) {
            var P;
            typeof window < "u" ? P = window : typeof i < "u" ? P = i : typeof self < "u" ? P = self : P = {};
            var z = P.location || {};
            j = j || z;
            var D = {},
                Y = typeof j,
                fe;
            if (j.protocol === "blob:") D = new Me(unescape(j.pathname), {});
            else if (Y === "string") {
                D = new Me(j, {});
                for (fe in se) delete D[fe]
            } else if (Y === "object") {
                for (fe in j) fe in se || (D[fe] = j[fe]);
                D.slashes === void 0 && (D.slashes = K.test(j.href))
            }
            return D
        }

        function d(j) {
            return j === "file:" || j === "ftp:" || j === "http:" || j === "https:" || j === "ws:" || j === "wss:"
        }

        function Ee(j, P) {
            j = W(j), P = P || {};
            var z = re.exec(j),
                D = z[1] ? z[1].toLowerCase() : "",
                Y = !!z[2],
                fe = !!z[3],
                pe = 0,
                Pe;
            return Y ? fe ? (Pe = z[2] + z[3] + z[4], pe = z[2].length + z[3].length) : (Pe = z[2] + z[4], pe = z[2].length) : fe ? (Pe = z[3] + z[4], pe = z[3].length) : Pe = z[4], D === "file:" ? pe >= 2 && (Pe = Pe.slice(2)) : d(D) ? Pe = z[4] : D ? Y && (Pe = Pe.slice(2)) : pe >= 2 && d(P.protocol) && (Pe = z[4]), {
                protocol: D,
                slashes: Y || d(D),
                slashesCount: pe,
                rest: Pe
            }
        }

        function _e(j, P) {
            if (j === "") return P;
            for (var z = (P || "/").split("/").slice(0, -1).concat(j.split("/")), D = z.length, Y = z[D - 1], fe = !1, pe = 0; D--;) z[D] === "." ? z.splice(D, 1) : z[D] === ".." ? (z.splice(D, 1), pe++) : pe && (D === 0 && (fe = !0), z.splice(D, 1), pe--);
            return fe && z.unshift(""), (Y === "." || Y === "..") && z.push(""), z.join("/")
        }

        function Me(j, P, z) {
            if (j = W(j), !(this instanceof Me)) return new Me(j, P, z);
            var D, Y, fe, pe, Pe, Ne, pt = ae.slice(),
                jt = typeof P,
                Ke = this,
                Ln = 0;
            for (jt !== "object" && jt !== "string" && (z = P, P = null), z && typeof z != "function" && (z = ie.parse), P = me(P), Y = Ee(j || "", P), D = !Y.protocol && !Y.slashes, Ke.slashes = Y.slashes || D && P.slashes, Ke.protocol = Y.protocol || P.protocol || "", j = Y.rest, (Ke.protocol === "file:" || !Y.slashes && (Y.protocol || Y.slashesCount < 2 || !d(Ke.protocol))) && (pt[3] = [/(.*)/, "pathname"]); Ln < pt.length; Ln++) {
                if (pe = pt[Ln], typeof pe == "function") {
                    j = pe(j, Ke);
                    continue
                }
                fe = pe[0], Ne = pe[1], fe !== fe ? Ke[Ne] = j : typeof fe == "string" ? ~(Pe = j.indexOf(fe)) && (typeof pe[2] == "number" ? (Ke[Ne] = j.slice(0, Pe), j = j.slice(Pe + pe[2])) : (Ke[Ne] = j.slice(Pe), j = j.slice(0, Pe))) : (Pe = fe.exec(j)) && (Ke[Ne] = Pe[1], j = j.slice(0, Pe.index)), Ke[Ne] = Ke[Ne] || D && pe[3] && P[Ne] || "", pe[4] && (Ke[Ne] = Ke[Ne].toLowerCase())
            }
            z && (Ke.query = z(Ke.query)), D && P.slashes && Ke.pathname.charAt(0) !== "/" && (Ke.pathname !== "" || P.pathname !== "") && (Ke.pathname = _e(Ke.pathname, P.pathname)), Ke.pathname.charAt(0) !== "/" && d(Ke.protocol) && (Ke.pathname = "/" + Ke.pathname), o(Ke.port, Ke.protocol) || (Ke.host = Ke.hostname, Ke.port = ""), Ke.username = Ke.password = "", Ke.auth && (pe = Ke.auth.split(":"), Ke.username = pe[0] || "", Ke.password = pe[1] || ""), Ke.origin = Ke.protocol !== "file:" && d(Ke.protocol) && Ke.host ? Ke.protocol + "//" + Ke.host : "null", Ke.href = Ke.toString()
        }

        function lt(j, P, z) {
            var D = this;
            switch (j) {
                case "query":
                    typeof P == "string" && P.length && (P = (z || ie.parse)(P)), D[j] = P;
                    break;
                case "port":
                    D[j] = P, o(P, D.protocol) ? P && (D.host = D.hostname + ":" + P) : (D.host = D.hostname, D[j] = "");
                    break;
                case "hostname":
                    D[j] = P, D.port && (P += ":" + D.port), D.host = P;
                    break;
                case "host":
                    D[j] = P, /:\d+$/.test(P) ? (P = P.split(":"), D.port = P.pop(), D.hostname = P.join(":")) : (D.hostname = P, D.port = "");
                    break;
                case "protocol":
                    D.protocol = P.toLowerCase(), D.slashes = !z;
                    break;
                case "pathname":
                case "hash":
                    if (P) {
                        var Y = j === "pathname" ? "/" : "#";
                        D[j] = P.charAt(0) !== Y ? Y + P : P
                    } else D[j] = P;
                    break;
                default:
                    D[j] = P
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (D[pe[1]] = D[pe[1]].toLowerCase())
            }
            return D.origin = D.protocol !== "file:" && d(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
        }

        function Ve(j) {
            (!j || typeof j != "function") && (j = ie.stringify);
            var P, z = this,
                D = z.protocol;
            D && D.charAt(D.length - 1) !== ":" && (D += ":");
            var Y = D + (z.slashes || d(z.protocol) ? "//" : "");
            return z.username && (Y += z.username, z.password && (Y += ":" + z.password), Y += "@"), Y += z.host + z.pathname, P = typeof z.query == "object" ? j(z.query) : z.query, P && (Y += P.charAt(0) !== "?" ? "?" + P : P), z.hash && (Y += z.hash), Y
        }
        Me.prototype = {
            set: lt,
            toString: Ve
        }, Me.extractProtocol = Ee, Me.location = me, Me.trimLeft = W, Me.qs = ie;
        var J = Me;

        function qe(j, P) {
            setTimeout(function(z) {
                return j.call(z)
            }, 4, P)
        }

        function H(j, P) {
            typeof process < "u" && console[j].call(null, P)
        }

        function oe(j, P) {
            j === void 0 && (j = []);
            var z = [];
            return j.forEach(function(D) {
                P(D) || z.push(D)
            }), z
        }

        function ke(j, P) {
            j === void 0 && (j = []);
            var z = [];
            return j.forEach(function(D) {
                P(D) && z.push(D)
            }), z
        }
        var ye = function() {
            this.listeners = {}
        };
        ye.prototype.addEventListener = function(P, z) {
            typeof z == "function" && (Array.isArray(this.listeners[P]) || (this.listeners[P] = []), ke(this.listeners[P], function(D) {
                return D === z
            }).length === 0 && this.listeners[P].push(z))
        }, ye.prototype.removeEventListener = function(P, z) {
            var D = this.listeners[P];
            this.listeners[P] = oe(D, function(Y) {
                return Y === z
            })
        }, ye.prototype.dispatchEvent = function(P) {
            for (var z = this, D = [], Y = arguments.length - 1; Y-- > 0;) D[Y] = arguments[Y + 1];
            var fe = P.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Pe) {
                D.length > 0 ? Pe.apply(z, D) : Pe.call(z, P)
            }), !0) : !1
        };

        function ve(j) {
            var P = j.indexOf("?");
            return P >= 0 ? j.slice(0, P) : j
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(P, z) {
            var D = ve(z),
                Y = this.urlMap[D];
            if (Y && Y.server && Y.websockets.indexOf(P) === -1) return Y.websockets.push(P), Y.server
        }, ue.prototype.addMembershipToRoom = function(P, z) {
            var D = this.urlMap[ve(P.url)];
            D && D.server && D.websockets.indexOf(P) !== -1 && (D.roomMemberships[z] || (D.roomMemberships[z] = []), D.roomMemberships[z].push(P))
        }, ue.prototype.attachServer = function(P, z) {
            var D = ve(z),
                Y = this.urlMap[D];
            if (!Y) return this.urlMap[D] = {
                server: P,
                websockets: [],
                roomMemberships: {}
            }, P
        }, ue.prototype.serverLookup = function(P) {
            var z = ve(P),
                D = this.urlMap[z];
            if (D) return D.server
        }, ue.prototype.websocketsLookup = function(P, z, D) {
            var Y = ve(P),
                fe, pe = this.urlMap[Y];
            if (fe = pe ? pe.websockets : [], z) {
                var Pe = pe.roomMemberships[z];
                fe = Pe || []
            }
            return D ? fe.filter(function(Ne) {
                return Ne !== D
            }) : fe
        }, ue.prototype.removeServer = function(P) {
            delete this.urlMap[ve(P)]
        }, ue.prototype.removeWebSocket = function(P, z) {
            var D = ve(z),
                Y = this.urlMap[D];
            Y && (Y.websockets = oe(Y.websockets, function(fe) {
                return fe === P
            }))
        }, ue.prototype.removeMembershipFromRoom = function(P, z) {
            var D = this.urlMap[ve(P.url)],
                Y = D.roomMemberships[z];
            D && Y !== null && (D.roomMemberships[z] = oe(Y, function(fe) {
                return fe === P
            }))
        };
        var xe = new ue,
            Ie = {
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
            Ue = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Je = function() {};
        Je.prototype.stopPropagation = function() {}, Je.prototype.stopImmediatePropagation = function() {}, Je.prototype.initEvent = function(P, z, D) {
            P === void 0 && (P = "undefined"), z === void 0 && (z = !1), D === void 0 && (D = !1), this.type = "" + P, this.bubbles = Boolean(z), this.cancelable = Boolean(D)
        };
        var dt = function(j) {
                function P(z, D) {
                    if (D === void 0 && (D = {}), j.call(this), !z) throw new TypeError(Ue.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError(Ue.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var Y = D.bubbles,
                        fe = D.cancelable;
                    this.type = "" + z, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = Y ? Boolean(Y) : !1
                }
                return j && (P.__proto__ = j), P.prototype = Object.create(j && j.prototype), P.prototype.constructor = P, P
            }(Je),
            Vt = function(j) {
                function P(z, D) {
                    if (D === void 0 && (D = {}), j.call(this), !z) throw new TypeError(Ue.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError(Ue.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var Y = D.bubbles,
                        fe = D.cancelable,
                        pe = D.data,
                        Pe = D.origin,
                        Ne = D.lastEventId,
                        pt = D.ports;
                    this.type = "" + z, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = Y ? Boolean(Y) : !1, this.origin = "" + Pe, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Ne || "")
                }
                return j && (P.__proto__ = j), P.prototype = Object.create(j && j.prototype), P.prototype.constructor = P, P
            }(Je),
            Yt = function(j) {
                function P(z, D) {
                    if (D === void 0 && (D = {}), j.call(this), !z) throw new TypeError(Ue.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError(Ue.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var Y = D.bubbles,
                        fe = D.cancelable,
                        pe = D.code,
                        Pe = D.reason,
                        Ne = D.wasClean;
                    this.type = "" + z, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = Y ? Boolean(Y) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Pe || ""), this.wasClean = Ne ? Boolean(Ne) : !1
                }
                return j && (P.__proto__ = j), P.prototype = Object.create(j && j.prototype), P.prototype.constructor = P, P
            }(Je);

        function E(j) {
            var P = j.type,
                z = j.target,
                D = new dt(P);
            return z && (D.target = z, D.srcElement = z, D.currentTarget = z), D
        }

        function l(j) {
            var P = j.type,
                z = j.origin,
                D = j.data,
                Y = j.target,
                fe = new Vt(P, {
                    data: D,
                    origin: z
                });
            return Y && (fe.target = Y, fe.srcElement = Y, fe.currentTarget = Y), fe
        }

        function g(j) {
            var P = j.code,
                z = j.reason,
                D = j.type,
                Y = j.target,
                fe = j.wasClean;
            fe || (fe = P === Ie.CLOSE_NORMAL || P === Ie.CLOSE_NO_STATUS);
            var pe = new Yt(D, {
                code: P,
                reason: z,
                wasClean: fe
            });
            return Y && (pe.target = Y, pe.srcElement = Y, pe.currentTarget = Y), pe
        }

        function x(j, P, z) {
            j.readyState = De.CLOSING;
            var D = xe.serverLookup(j.url),
                Y = g({
                    type: "close",
                    target: j.target,
                    code: P,
                    reason: z
                }),
                fe = g({
                    type: "server::close",
                    target: j,
                    code: P,
                    reason: z
                });
            qe(function() {
                xe.removeWebSocket(j, j.url), j.readyState = De.CLOSED, j.dispatchEvent(Y), j.dispatchEvent(fe), D && D.dispatchEvent(Y, D)
            }, j)
        }

        function O(j, P, z) {
            j.readyState = De.CLOSING;
            var D = xe.serverLookup(j.url),
                Y = g({
                    type: "close",
                    target: j.target,
                    code: P,
                    reason: z,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: j,
                    code: P,
                    reason: z,
                    wasClean: !1
                }),
                pe = E({
                    type: "error",
                    target: j.target
                });
            qe(function() {
                xe.removeWebSocket(j, j.url), j.readyState = De.CLOSED, j.dispatchEvent(pe), j.dispatchEvent(Y), j.dispatchEvent(fe), D && D.dispatchEvent(Y, D)
            }, j)
        }

        function R(j) {
            return Object.prototype.toString.call(j) !== "[object Blob]" && !(j instanceof ArrayBuffer) && (j = String(j)), j
        }
        var N = new WeakMap;

        function te(j) {
            if (N.has(j)) return N.get(j);
            var P = new Proxy(j, {
                get: function(D, Y) {
                    return Y === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Pe = pe.code || Ie.CLOSE_NORMAL,
                            Ne = pe.reason || "";
                        x(P, Pe, Ne)
                    } : Y === "send" ? function(pe) {
                        pe = R(pe), j.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: j
                        }))
                    } : Y === "on" ? function(pe, Pe) {
                        j.addEventListener("server::" + pe, Pe)
                    } : Y === "target" ? j : D[Y]
                }
            });
            return N.set(j, P), P
        }

        function Se(j) {
            var P = encodeURIComponent(j).match(/%[89ABab]/g);
            return j.length + (P ? P.length : 0)
        }

        function he(j) {
            var P = new J(j),
                z = P.pathname,
                D = P.protocol,
                Y = P.hash;
            if (!j) throw new TypeError(Ue.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (z || (P.pathname = "/"), D === "") throw new SyntaxError(Ue.CONSTRUCTOR_ERROR + " The URL '" + P.toString() + "' is invalid.");
            if (D !== "ws:" && D !== "wss:") throw new SyntaxError(Ue.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + D + "' is not allowed.");
            if (Y !== "") throw new SyntaxError(Ue.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + Y + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return P.toString()
        }

        function Be(j) {
            if (j === void 0 && (j = []), !Array.isArray(j) && typeof j != "string") throw new SyntaxError(Ue.CONSTRUCTOR_ERROR + " The subprotocol '" + j.toString() + "' is invalid.");
            typeof j == "string" && (j = [j]);
            var P = j.map(function(D) {
                    return {
                        count: 1,
                        protocol: D
                    }
                }).reduce(function(D, Y) {
                    return D[Y.protocol] = (D[Y.protocol] || 0) + Y.count, D
                }, {}),
                z = Object.keys(P).filter(function(D) {
                    return P[D] > 1
                });
            if (z.length > 0) throw new SyntaxError(Ue.CONSTRUCTOR_ERROR + " The subprotocol '" + z[0] + "' is duplicated.");
            return j
        }
        var De = function(j) {
            function P(D, Y) {
                j.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(D), Y = Be(Y), this.protocol = Y[0] || "", this.binaryType = "blob", this.readyState = P.CONNECTING;
                var fe = te(this),
                    pe = xe.attachWebSocket(fe, this.url);
                qe(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = P.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), xe.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Ie.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var Ne = pe.options.selectProtocol(Y),
                                    pt = Ne !== "",
                                    jt = Y.indexOf(Ne) !== -1;
                                if (pt && !jt) {
                                    this.readyState = P.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), xe.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: Ie.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Ne
                            }
                            this.readyState = P.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), pe.dispatchEvent(E({
                                type: "connection"
                            }), fe)
                        }
                    else this.readyState = P.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    })), H("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            j && (P.__proto__ = j), P.prototype = Object.create(j && j.prototype), P.prototype.constructor = P;
            var z = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return z.onopen.get = function() {
                return this._onopen
            }, z.onmessage.get = function() {
                return this._onmessage
            }, z.onclose.get = function() {
                return this._onclose
            }, z.onerror.get = function() {
                return this._onerror
            }, z.onopen.set = function(D) {
                this.removeEventListener("open", this._onopen), this._onopen = D, this.addEventListener("open", D)
            }, z.onmessage.set = function(D) {
                this.removeEventListener("message", this._onmessage), this._onmessage = D, this.addEventListener("message", D)
            }, z.onclose.set = function(D) {
                this.removeEventListener("close", this._onclose), this._onclose = D, this.addEventListener("close", D)
            }, z.onerror.set = function(D) {
                this.removeEventListener("error", this._onerror), this._onerror = D, this.addEventListener("error", D)
            }, P.prototype.send = function(Y) {
                var fe = this;
                if (this.readyState === P.CLOSING || this.readyState === P.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: R(Y)
                    }),
                    Pe = xe.serverLookup(this.url);
                Pe && qe(function() {
                    fe.dispatchEvent(pe, Y)
                }, Pe)
            }, P.prototype.close = function(Y, fe) {
                if (Y !== void 0 && (typeof Y != "number" || Y !== 1e3 && (Y < 3e3 || Y > 4999))) throw new TypeError(Ue.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + Y + " is neither.");
                if (fe !== void 0) {
                    var pe = Se(fe);
                    if (pe > 123) throw new SyntaxError(Ue.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === P.CLOSING || this.readyState === P.CLOSED)) {
                    var Pe = te(this);
                    this.readyState === P.CONNECTING ? O(Pe, Y || Ie.CLOSE_ABNORMAL, fe) : x(Pe, Y || Ie.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(P.prototype, z), P
        }(ye);
        De.CONNECTING = 0, De.prototype.CONNECTING = De.CONNECTING, De.OPEN = 1, De.prototype.OPEN = De.OPEN, De.CLOSING = 2, De.prototype.CLOSING = De.CLOSING, De.CLOSED = 3, De.prototype.CLOSED = De.CLOSED;
        var nt = function(j) {
            return j.reduce(function(P, z) {
                return P.indexOf(z) > -1 ? P : P.concat(z)
            }, [])
        };

        function bt() {
            return typeof window < "u" ? window : typeof process == "object" && typeof i0 == "function" && typeof mt == "object" ? mt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(j) {
                function P(z, D) {
                    D === void 0 && (D = rn), j.call(this);
                    var Y = new J(z);
                    Y.pathname || (Y.pathname = "/"), this.url = Y.toString(), this.originalWebSocket = null;
                    var fe = xe.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, D), this.options.mock && this.mockWebsocket()
                }
                return j && (P.__proto__ = j), P.prototype = Object.create(j && j.prototype), P.prototype.constructor = P, P.prototype.mockWebsocket = function() {
                    var D = bt();
                    this.originalWebSocket = D.WebSocket, D.WebSocket = De
                }, P.prototype.restoreWebsocket = function() {
                    var D = bt();
                    this.originalWebSocket !== null && (D.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, P.prototype.stop = function(D) {
                    D === void 0 && (D = function() {}), this.options.mock && this.restoreWebsocket(), xe.removeServer(this.url), typeof D == "function" && D()
                }, P.prototype.on = function(D, Y) {
                    this.addEventListener(D, Y)
                }, P.prototype.close = function(D) {
                    D === void 0 && (D = {});
                    var Y = D.code,
                        fe = D.reason,
                        pe = D.wasClean,
                        Pe = xe.websocketsLookup(this.url);
                    xe.removeServer(this.url), Pe.forEach(function(Ne) {
                        Ne.readyState = De.CLOSED, Ne.dispatchEvent(g({
                            type: "close",
                            target: Ne.target,
                            code: Y || Ie.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, P.prototype.emit = function(D, Y, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Pe = fe.websockets;
                    Pe || (Pe = xe.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (Y = Array.prototype.slice.call(arguments, 1, arguments.length), Y = Y.map(function(Ne) {
                        return R(Ne)
                    })) : Y = R(Y), Pe.forEach(function(Ne) {
                        Array.isArray(Y) ? Ne.dispatchEvent.apply(Ne, [l({
                            type: D,
                            data: Y,
                            origin: pe.url,
                            target: Ne.target
                        })].concat(Y)) : Ne.dispatchEvent(l({
                            type: D,
                            data: Y,
                            origin: pe.url,
                            target: Ne.target
                        }))
                    })
                }, P.prototype.clients = function() {
                    return xe.websocketsLookup(this.url)
                }, P.prototype.to = function(D, Y, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Pe = this,
                        Ne = nt(fe.concat(xe.websocketsLookup(this.url, D, Y)));
                    return {
                        to: function(pt, jt) {
                            return pe.to.call(pe, pt, jt, Ne)
                        },
                        emit: function(jt, Ke) {
                            Pe.emit(jt, Ke, {
                                websockets: Ne
                            })
                        }
                    }
                }, P.prototype.in = function() {
                    for (var D = [], Y = arguments.length; Y--;) D[Y] = arguments[Y];
                    return this.to.apply(null, D)
                }, P.prototype.simulate = function(D) {
                    var Y = xe.websocketsLookup(this.url);
                    D === "error" && Y.forEach(function(fe) {
                        fe.readyState = De.CLOSED, fe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, P
            }(ye);
        ct.of = function(P) {
            return new ct(P)
        };
        var vt = function(j) {
            function P(D, Y) {
                var fe = this;
                D === void 0 && (D = "socket.io"), Y === void 0 && (Y = ""), j.call(this), this.binaryType = "blob";
                var pe = new J(D);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = P.CONNECTING, this.protocol = "", this.target = this, typeof Y == "string" || typeof Y == "object" && Y !== null ? this.protocol = Y : Array.isArray(Y) && Y.length > 0 && (this.protocol = Y[0]);
                var Pe = xe.attachWebSocket(this, this.url);
                qe(function() {
                    Pe ? (this.readyState = P.OPEN, Pe.dispatchEvent(E({
                        type: "connection"
                    }), Pe, this), Pe.dispatchEvent(E({
                        type: "connect"
                    }), Pe, this), this.dispatchEvent(E({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = P.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    })), H("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ne) {
                    fe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ne.target,
                        code: Ne.code
                    }))
                })
            }
            j && (P.__proto__ = j), P.prototype = Object.create(j && j.prototype), P.prototype.constructor = P;
            var z = {
                broadcast: {}
            };
            return P.prototype.close = function() {
                if (this.readyState === P.OPEN) {
                    var Y = xe.serverLookup(this.url);
                    return xe.removeWebSocket(this, this.url), this.readyState = P.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    })), Y && Y.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Ie.CLOSE_NORMAL
                    }), Y), this
                }
            }, P.prototype.disconnect = function() {
                return this.close()
            }, P.prototype.emit = function(Y) {
                for (var fe = [], pe = arguments.length - 1; pe-- > 0;) fe[pe] = arguments[pe + 1];
                if (this.readyState !== P.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Pe = l({
                        type: Y,
                        origin: this.url,
                        data: fe
                    }),
                    Ne = xe.serverLookup(this.url);
                return Ne && Ne.dispatchEvent.apply(Ne, [Pe].concat(fe)), this
            }, P.prototype.send = function(Y) {
                return this.emit("message", Y), this
            }, z.broadcast.get = function() {
                if (this.readyState !== P.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var D = this,
                    Y = xe.serverLookup(this.url);
                if (!Y) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Pe) {
                        return Y.emit(pe, Pe, {
                            websockets: xe.websocketsLookup(D.url, null, D)
                        }), D
                    },
                    to: function(pe) {
                        return Y.to(pe, D)
                    },
                    in: function(pe) {
                        return Y.in(pe, D)
                    }
                }
            }, P.prototype.on = function(Y, fe) {
                return this.addEventListener(Y, fe), this
            }, P.prototype.off = function(Y, fe) {
                this.removeEventListener(Y, fe)
            }, P.prototype.hasListeners = function(Y) {
                var fe = this.listeners[Y];
                return Array.isArray(fe) ? !!fe.length : !1
            }, P.prototype.join = function(Y) {
                xe.addMembershipToRoom(this, Y)
            }, P.prototype.leave = function(Y) {
                xe.removeMembershipFromRoom(this, Y)
            }, P.prototype.to = function(Y) {
                return this.broadcast.to(Y)
            }, P.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, P.prototype.dispatchEvent = function(Y) {
                for (var fe = this, pe = [], Pe = arguments.length - 1; Pe-- > 0;) pe[Pe] = arguments[Pe + 1];
                var Ne = Y.type,
                    pt = this.listeners[Ne];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(jt) {
                    pe.length > 0 ? jt.apply(fe, pe) : jt.call(fe, Y.data ? Y.data : Y)
                })
            }, Object.defineProperties(P.prototype, z), P
        }(ye);
        vt.CONNECTING = 0, vt.OPEN = 1, vt.CLOSING = 2, vt.CLOSED = 3;
        var wt = function(P, z) {
            return new vt(P, z)
        };
        wt.connect = function(P, z) {
            return wt(P, z)
        };
        var Jt = ct,
            Xe = De,
            Rt = wt;
        n.Server = Jt, n.WebSocket = Xe, n.SocketIO = Rt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(ic, ic.exports);
var r0 = {
    exports: {}
};
(function(t) {
    (function() {
        function e(S, I) {
            var L = S.x - I.x,
                B = S.y - I.y;
            return L * L + B * B
        }

        function n(S, I, L) {
            var B = I.x,
                U = I.y,
                X = L.x - B,
                ie = L.y - U;
            if (X !== 0 || ie !== 0) {
                var K = ((S.x - B) * X + (S.y - U) * ie) / (X * X + ie * ie);
                K > 1 ? (B = L.x, U = L.y) : K > 0 && (B += X * K, U += ie * K)
            }
            return X = S.x - B, ie = S.y - U, X * X + ie * ie
        }

        function i(S, I) {
            for (var L = S[0], B = [L], U, X = 1, ie = S.length; X < ie; X++) U = S[X], e(U, L) > I && (B.push(U), L = U);
            return L !== U && B.push(U), B
        }

        function o(S, I, L, B, U) {
            for (var X = B, ie, K = I + 1; K < L; K++) {
                var re = n(S[K], S[I], S[L]);
                re > X && (ie = K, X = re)
            }
            X > B && (ie - I > 1 && o(S, I, ie, B, U), U.push(S[ie]), L - ie > 1 && o(S, ie, L, B, U))
        }

        function f(S, I) {
            var L = S.length - 1,
                B = [S[0]];
            return o(S, 0, L, I, B), B.push(S[L]), B
        }

        function A(S, I, L) {
            if (S.length <= 2) return S;
            var B = I !== void 0 ? I * I : 1;
            return S = L ? S : i(S, B), S = f(S, B), S
        }
        t.exports = A, t.exports.default = A
    })()
})(r0);
const s0 = Et.View.extend({
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
        mh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            Le(window).trigger("resize")
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new s0({
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp2-earwax/",
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
var o0 = {};
(function(t) {
    (function(e) {
        e(Mi.exports, ot, t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(m) {
            m = e.map(e.flatten([m]), function(M) {
                return e.defaults({}, M, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(m)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(m, M) {
                if (e.isObject(M)) {
                    e.each(M, function(se, me) {
                        this.unstickit(m, me)
                    }, this);
                    return
                }
                var W = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(m && se.model !== m) && !(M && se.config.selector != M)) return se.model.off(se.event, se.fn), ae.push(se.config._destroy), W.push(se.model), !0
                }), e.invoke(e.uniq(W), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (m ? "." + m.cid : ""), M)
            },
            stickit: function(m, M) {
                var W = m || this.model,
                    ae = M || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(W, ae);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var me = this;
                    return this.unstickit(), se && (me = se.apply(this, arguments)), me
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(m, M, W) {
                var ae = m || this.model,
                    se = ".stickit." + ae.cid;
                if (W = W || {}, e.isObject(M)) {
                    var me = M;
                    e.each(me, function(J, qe) {
                        this.addBinding(ae, qe, J)
                    }, this);
                    return
                }
                var d = M === ":el" ? this.$el : this.$(M);
                if (this.unstickit(ae, M), !!d.length) {
                    e.isString(W) && (W = {
                        observe: W
                    }), e.isFunction(W.observe) && (W.observe = W.observe.call(this));
                    var Ee = U(d, W),
                        _e = Ee.observe;
                    Ee.selector = M, Ee.view = this;
                    var Me = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            A.call(this, Ee.destroy, d, ae, Ee)
                        }, X(d, Ee, ae, _e), K(d, Ee, ae, _e), ie(d, Ee, ae), _e) {
                        e.each(Ee.events, function(J) {
                            var qe = J + se,
                                H = function(ke) {
                                    var ye = A.call(this, Ee.getVal, d, ke, Ee, o.call(arguments, 1)),
                                        ve = S(Ee.updateModel, ye, ke, Ee);
                                    ve && L(ae, _e, ye, lt, Ee)
                                },
                                oe = M === ":el" ? "" : M;
                            this.$el.on(qe, oe, e.bind(H, this))
                        }, this), e.each(e.flatten([_e]), function(J) {
                            I(ae, "change:" + J, Ee, function(qe, H, oe) {
                                var ke = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (ke !== Me) {
                                    var ye = B(ae, _e, Ee);
                                    re(d, Ee, ye, ae)
                                }
                            })
                        });
                        var Ve = B(ae, _e, Ee);
                        re(d, Ee, Ve, ae, !0)
                    }
                    A.call(this, Ee.initialize, d, ae, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var o = [].slice,
            f = function(m, M) {
                var W = (M || "").split("."),
                    ae = e.reduce(W, function(se, me) {
                        return se[me]
                    }, m);
                return ae == null ? m : ae
            },
            A = function(m) {
                if (m = e.isString(m) ? f(this, m) : m, m) return m.apply(this, o.call(arguments, 1))
            },
            S = function(m, M, W) {
                if (e.isBoolean(m)) return m;
                if (e.isFunction(m) || e.isString(m)) {
                    var ae = e.last(arguments).view;
                    return A.apply(ae, arguments)
                }
                return !1
            },
            I = function(m, M, W, ae) {
                var se = W.view;
                m.on(M, ae, se), se._modelBindings.push({
                    model: m,
                    event: M,
                    fn: ae,
                    config: W
                })
            },
            L = function(m, M, W, ae, se) {
                var me = {},
                    d = se.view;
                se.onSet && (W = A.call(d, se.onSet, W, se)), se.set ? A.call(d, se.set, M, W, ae, se) : (me[M] = W, e.isArray(M) && e.isArray(W) && (me = e.reduce(M, function(Ee, _e, Me) {
                    return Ee[_e] = e.has(W, Me) ? W[Me] : null, Ee
                }, {})), m.set(me, ae))
            },
            B = function(m, M, W) {
                var ae = W.view,
                    se = function(Ee) {
                        return m[W.escape ? "escape" : "get"](Ee)
                    },
                    me = function(Ee) {
                        return Ee == null ? "" : Ee
                    },
                    d = e.isArray(M) ? e.map(M, se) : se(M);
                return W.onGet && (d = A.call(ae, W.onGet, d, W)), e.isArray(d) ? e.map(d, me) : me(d)
            },
            U = i.getConfiguration = function(m, M) {
                var W = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(se, me, d, Ee) {
                        se[Ee.updateMethod] && se[Ee.updateMethod](me)
                    },
                    getVal: function(se, me, d) {
                        return se[d.updateMethod]()
                    }
                }];
                W = W.concat(e.filter(i._handlers, function(se) {
                    return m.is(se.selector)
                })), W.push(M);
                var ae = e.extend.apply(e, W);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            X = function(m, M, W, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    me = M.view;
                e.each(M.attributes || [], function(d) {
                    d = e.clone(d), d.view = me;
                    var Ee = "",
                        _e = d.observe || (d.observe = ae),
                        Me = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Ve = B(W, _e, d);
                            d.name === "class" ? (m.removeClass(Ee).addClass(Ve), Ee = Ve) : m[lt](d.name, Ve)
                        };
                    e.each(e.flatten([_e]), function(lt) {
                        I(W, "change:" + lt, M, Me)
                    }), Me()
                })
            },
            ie = function(m, M, W, ae) {
                e.each(M.classes || [], function(se, me) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = M.view;
                    var d = se.observe,
                        Ee = function() {
                            var _e = B(W, d, se);
                            m.toggleClass(me, !!_e)
                        };
                    e.each(e.flatten([d]), function(_e) {
                        I(W, "change:" + _e, M, Ee)
                    }), Ee()
                })
            },
            K = function(m, M, W, ae) {
                if (M.visible != null) {
                    var se = M.view,
                        me = function() {
                            var d = M.visible,
                                Ee = M.visibleFn,
                                _e = B(W, ae, M),
                                Me = !!_e;
                            (e.isFunction(d) || e.isString(d)) && (Me = !!A.call(se, d, _e, M)), Ee ? A.call(se, Ee, m, Me, M) : m.toggle(Me)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        I(W, "change:" + d, M, me)
                    }), me()
                }
            },
            re = function(m, M, W, ae, se) {
                var me = M.view;
                !S(M.updateView, W, M) || (A.call(me, M.update, m, W, ae, M), se || A.call(me, M.afterUpdate, m, W, M))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(m, M) {
                m.val(M)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(m, M) {
                m.val(M)
            },
            getVal: function(m) {
                return m.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(m, M) {
                m.filter('[value="' + M + '"]').prop("checked", !0)
            },
            getVal: function(m) {
                return m.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(m, M, W, ae) {
                if (m.length > 1) M || (M = []), m.each(function(me, d) {
                    var Ee = n.$(d),
                        _e = e.contains(M, Ee.val());
                    Ee.prop("checked", _e)
                });
                else {
                    var se = e.isBoolean(M) ? M : M === m.val();
                    m.prop("checked", se)
                }
            },
            getVal: function(m) {
                var M;
                if (m.length > 1) M = e.reduce(m, function(ae, se) {
                    var me = n.$(se);
                    return me.prop("checked") && ae.push(me.val()), ae
                }, []);
                else {
                    M = m.prop("checked");
                    var W = m.val();
                    W !== "on" && W != null && (M = M ? m.val() : null)
                }
                return M
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(m, M, W, ae) {
                var se, me = ae.selectOptions,
                    d = me && me.collection || void 0,
                    Ee = m.prop("multiple");
                if (!me) {
                    me = {};
                    var _e = function(ue) {
                        return ue.map(function(xe, Ie) {
                            var Ue = n.$(Ie).data("stickit-bind-val");
                            return {
                                value: Ue !== void 0 ? Ue : Ie.value,
                                label: Ie.text
                            }
                        }).get()
                    };
                    m.find("optgroup").length ? (d = {
                        opt_labels: []
                    }, m.find("> option").length && (d.opt_labels.push(void 0), e.each(m.find("> option"), function(ue) {
                        d[void 0] = _e(n.$(ue))
                    })), e.each(m.find("optgroup"), function(ue) {
                        var xe = n.$(ue).attr("label");
                        d.opt_labels.push(xe), d[xe] = _e(n.$(ue).find("option"))
                    })) : d = _e(m.find("option"))
                }
                me.valuePath = me.valuePath || "value", me.labelPath = me.labelPath || "label", me.disabledPath = me.disabledPath || "disabled";
                var Me = function(ue, xe, Ie) {
                    e.each(ue, function(Ue) {
                        var Je = n.$("<option/>"),
                            dt = Ue,
                            Vt = function(x, O, R) {
                                Je.text(x), dt = O, Je.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Je.val(dt), R === !0 && Je.prop("disabled", "disabled")
                            },
                            Yt, E, l;
                        Ue === "__default__" ? (Yt = Ie.label, E = Ie.value, l = Ie.disabled) : (Yt = f(Ue, me.labelPath), E = f(Ue, me.valuePath), l = f(Ue, me.disabledPath)), Vt(Yt, E, l);
                        var g = function() {
                            return !Ee && dt != null && Ie != null && dt === Ie ? !0 : !!(e.isObject(Ie) && e.isEqual(dt, Ie))
                        };
                        g() ? Je.prop("selected", !0) : Ee && e.isArray(Ie) && e.each(Ie, function(x) {
                            e.isObject(x) && (x = f(x, me.valuePath)), (x === dt || e.isObject(x) && e.isEqual(dt, x)) && Je.prop("selected", !0)
                        }), xe.append(Je)
                    })
                };
                if (m.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = A.call(this, d, m, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Ve = se,
                        J = function() {
                            var ue = B(W, ae.observe, ae);
                            A.call(this, ae.update, m, ue, W, ae)
                        },
                        qe = function() {
                            Ve.off("add remove reset sort", J)
                        },
                        H = function() {
                            qe(), Ve.off("stickit:selectRefresh"), W.off("stickit:selectRefresh")
                        };
                    Ve.trigger("stickit:selectRefresh"), Ve.once("stickit:selectRefresh", qe, this), Ve.on("add remove reset sort", J, this), W.trigger("stickit:selectRefresh"), W.once("stickit:selectRefresh", function() {
                        W.off("stickit:unstuck", H)
                    }), W.once("stickit:unstuck", H, this), se = se.toJSON()
                }
                if (me.defaultOption) {
                    var oe = e.isFunction(me.defaultOption) ? me.defaultOption.call(this, m, ae) : me.defaultOption;
                    Me(["__default__"], m, oe)
                }
                if (e.isArray(se)) Me(se, m, M);
                else if (se.opt_labels) e.each(se.opt_labels, function(ue) {
                    var xe = n.$("<optgroup/>").attr("label", ue);
                    Me(se[ue], xe, M), m.append(xe)
                });
                else {
                    var ke = [],
                        ye;
                    for (var ve in se) ye = {}, ye[me.valuePath] = ve, ye[me.labelPath] = se[ve], ke.push(ye);
                    ke = e.sortBy(ke, me.comparator || me.labelPath), Me(ke, m, M)
                }
            },
            getVal: function(m) {
                var M = m.find("option:selected");
                return m.prop("multiple") ? e.map(M, function(W) {
                    return n.$(W).data("stickit-bind-val")
                }) : M.data("stickit-bind-val")
            }
        }]), i
    })
})(o0);
const a0 = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    zu = Et.View.extend({
        template: at.template(a0),
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
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || Le("<div />").text(t).html()
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
            const e = Le(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var ki, Ns, rs = typeof Map == "function" ? new Map : (ki = [], Ns = [], {
        has: function(t) {
            return ki.indexOf(t) > -1
        },
        get: function(t) {
            return Ns[ki.indexOf(t)]
        },
        set: function(t, e) {
            ki.indexOf(t) === -1 && (ki.push(t), Ns.push(e))
        },
        delete: function(t) {
            var e = ki.indexOf(t);
            e > -1 && (ki.splice(e, 1), Ns.splice(e, 1))
        }
    }),
    Qu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Qu = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function l0(t) {
    var e = rs.get(t);
    e && e.destroy()
}

function c0(t) {
    var e = rs.get(t);
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
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !rs.has(i)) {
                var o, f = null,
                    A = null,
                    S = null,
                    I = function() {
                        i.clientWidth !== A && X()
                    },
                    L = function(ie) {
                        window.removeEventListener("resize", I, !1), i.removeEventListener("input", X, !1), i.removeEventListener("keyup", X, !1), i.removeEventListener("autosize:destroy", L, !1), i.removeEventListener("autosize:update", X, !1), Object.keys(ie).forEach(function(K) {
                            i.style[K] = ie[K]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", L, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", X, !1), window.addEventListener("resize", I, !1), i.addEventListener("input", X, !1), i.addEventListener("autosize:update", X, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
                    destroy: L,
                    update: X
                }), (o = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : o.resize === "both" && (i.style.resize = "horizontal"), f = o.boxSizing === "content-box" ? -(parseFloat(o.paddingTop) + parseFloat(o.paddingBottom)) : parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), isNaN(f) && (f = 0), X()
            }

            function B(ie) {
                var K = i.style.width;
                i.style.width = "0px", i.style.width = K, i.style.overflowY = ie
            }

            function U() {
                if (i.scrollHeight !== 0) {
                    var ie = function(re) {
                            for (var m = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && m.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return m
                        }(i),
                        K = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", A = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), K && (document.documentElement.scrollTop = K)
                }
            }

            function X() {
                U();
                var ie = Math.round(parseFloat(i.style.height)),
                    K = window.getComputedStyle(i, null),
                    re = K.boxSizing === "content-box" ? Math.round(parseFloat(K.height)) : i.offsetHeight;
                if (re < ie ? K.overflowY === "hidden" && (B("scroll"), U(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : K.overflowY !== "hidden" && (B("hidden"), U(), re = K.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), S !== re) {
                    S = re;
                    var m = Qu("autosize:resized");
                    try {
                        i.dispatchEvent(m)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], l0), t
}, Jr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], c0), t
});
var rc = Jr;
const u0 = `<form>\r
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
        template: at.template(u0),
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
                    return t ? typeof t == "object" ? t.html ? t.html : Le("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || rc(Le("textarea"))
        },
        onSubmitClick() {
            return Le("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (Le("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            Le(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = Le(this.$el).find("textarea");
            Le(t).val(""), this.getOption("preventAutosize") || rc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Le(this.$el).find("textarea");
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
    h0 = '<div class="text"></div>',
    Vi = Et.View.extend({
        tagName: "div",
        template: at.template(h0),
        model: new ot.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : Le("<div />").text(t).html()
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
            return t.get("type") === "input" ? to : t.get("type") === "text" ? Vi : zu
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

function Ku(t, ...e) {
    !sc[t] || sc[t].map(n => n(...e))
}
let Xr, Hs;

function Di() {
    return Xr
}

function mo() {
    return Hs
}

function d0(t) {
    if (Xr = document.getElementById(t) || t || document.querySelector("canvas"), !Xr) throw Error("You must provide a canvas element for the game");
    return Hs = Xr.getContext("2d"), Hs.imageSmoothingEnabled = !1, Ku("init"), {
        canvas: Xr,
        context: Hs
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
            height: A,
            margin: S = 0
        } = e.frame;
        this.width = f, this.height = A, this.margin = S, this._f = 0, this._a = 0
    }
    clone() {
        return vo(this)
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
        context: f = mo()
    } = {}) {
        let A = this.frames[this._f] / this.spriteSheet._f | 0,
            S = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, S * this.width + (S * 2 + 1) * this.margin, A * this.height + (A * 2 + 1) * this.margin, this.width, this.height, e, n, i, o)
    }
}

function vo(t) {
    return new rl(t)
}
vo.prototype = rl.prototype;
vo.class = rl;
const f0 = () => {};

function p0() {
    let t = Di();
    mo().clearRect(0, 0, t.width, t.height)
}

function g0({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let o = 0,
        f = 1e3 / t,
        A = 1 / t,
        S = e ? p0 : f0,
        I, L, B, U, X;
    const ie = window.performance || Date;

    function K() {
        if (L = requestAnimationFrame(K), B = ie.now(), U = B - I, I = B, !(U > 1e3)) {
            for (Ku("tick"), o += U; o >= f;) X.update(A), o -= f;
            S(), X.render()
        }
    }
    return X = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            I = ie.now(), this.isStopped = !1, requestAnimationFrame(K)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(L)
        },
        _frame: K,
        set _last(re) {
            I = re
        }
    }, X
}
class A0 {
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
A0.prototype;

function oc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        o = e.y + e.height / 2,
        f = t.y < o && t.y + t.height >= e.y,
        A = t.y + t.height >= o && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), A && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), A && n.push(3)), n
}
class sl {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let o = Di();
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
            ddx: A,
            ddy: S,
            width: I,
            height: L,
            image: B
        } = e;
        this.position = fr(n, i), this.velocity = fr(o, f), this.acceleration = fr(A, S), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = mo();
        for (let U in e) this[U] = e[U];
        B && (this.width = I !== void 0 ? I : B.width, this.height = L !== void 0 ? L : B.height), this.sx = 0, this.sy = 0
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

function m0(t) {
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
class v0 {
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
                loop: A
            } = e[i];
            if (n = [], o === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(o).map(S => {
                n = n.concat(m0(S))
            }), this.animations[i] = vo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: A
            })
        }
    }
}
v0.prototype;
var Ju = {
    exports: {}
};
/*!
 * sweetalert2 v11.4.26
 * Released under the MIT License.
 */
(function(t, e) {
    (function(n, i) {
        t.exports = i()
    })(mt, function() {
        const n = "SweetAlert2:",
            i = c => {
                const h = [];
                for (let w = 0; w < c.length; w++) h.indexOf(c[w]) === -1 && h.push(c[w]);
                return h
            },
            o = c => c.charAt(0).toUpperCase() + c.slice(1),
            f = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            A = c => {
                console.error("".concat(n, " ").concat(c))
            },
            S = [],
            I = c => {
                S.includes(c) || (S.push(c), f(c))
            },
            L = (c, h) => {
                I('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            B = c => typeof c == "function" ? c() : c,
            U = c => c && typeof c.toPromise == "function",
            X = c => U(c) ? c.toPromise() : Promise.resolve(c),
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
            M = {},
            W = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => m.indexOf(c) !== -1,
            me = c => M[c],
            d = c => {
                ae(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            Ee = c => {
                W.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            _e = c => {
                me(c) && L(c, me(c))
            },
            Me = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && Ee(h), _e(h)
            },
            lt = "swal2-",
            Ve = c => {
                const h = {};
                for (const w in c) h[c[w]] = lt + c[w];
                return h
            },
            J = Ve(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            qe = Ve(["success", "warning", "info", "question", "error"]),
            H = () => document.body.querySelector(".".concat(J.container)),
            oe = c => {
                const h = H();
                return h ? h.querySelector(c) : null
            },
            ke = c => oe(".".concat(c)),
            ye = () => ke(J.popup),
            ve = () => ke(J.icon),
            ue = () => ke(J.title),
            xe = () => ke(J["html-container"]),
            Ie = () => ke(J.image),
            Ue = () => ke(J["progress-steps"]),
            Je = () => ke(J["validation-message"]),
            dt = () => oe(".".concat(J.actions, " .").concat(J.confirm)),
            Vt = () => oe(".".concat(J.actions, " .").concat(J.deny)),
            Yt = () => ke(J["input-label"]),
            E = () => oe(".".concat(J.loader)),
            l = () => oe(".".concat(J.actions, " .").concat(J.cancel)),
            g = () => ke(J.actions),
            x = () => ke(J.footer),
            O = () => ke(J["timer-progress-bar"]),
            R = () => ke(J.close),
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
                const c = Array.from(ye().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((w, V) => {
                        const ge = parseInt(w.getAttribute("tabindex")),
                            Fe = parseInt(V.getAttribute("tabindex"));
                        return ge > Fe ? 1 : ge < Fe ? -1 : 0
                    }),
                    h = Array.from(ye().querySelectorAll(N)).filter(w => w.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(w => pe(w))
            },
            Se = () => bt(document.body, J.shown) && !bt(document.body, J["toast-shown"]) && !bt(document.body, J["no-backdrop"]),
            he = () => ye() && bt(ye(), J.toast),
            Be = () => ye().hasAttribute("data-loading"),
            De = {
                previousBodyPadding: null
            },
            nt = (c, h) => {
                if (c.textContent = "", h) {
                    const V = new DOMParser().parseFromString(h, "text/html");
                    Array.from(V.querySelector("head").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    }), Array.from(V.querySelector("body").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    })
                }
            },
            bt = (c, h) => {
                if (!h) return !1;
                const w = h.split(/\s+/);
                for (let V = 0; V < w.length; V++)
                    if (!c.classList.contains(w[V])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(w => {
                    !Object.values(J).includes(w) && !Object.values(qe).includes(w) && !Object.values(h.showClass).includes(w) && c.classList.remove(w)
                })
            },
            ct = (c, h, w) => {
                if (rn(c, h), h.customClass && h.customClass[w]) {
                    if (typeof h.customClass[w] != "string" && !h.customClass[w].forEach) return f("Invalid type of customClass.".concat(w, '! Expected string or iterable object, got "').concat(typeof h.customClass[w], '"'));
                    Xe(c, h.customClass[w])
                }
            },
            vt = (c, h) => {
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
            wt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Jt = (c, h, w) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach(V => {
                    Array.isArray(c) ? c.forEach(ge => {
                        w ? ge.classList.add(V) : ge.classList.remove(V)
                    }) : w ? c.classList.add(V) : c.classList.remove(V)
                }))
            },
            Xe = (c, h) => {
                Jt(c, h, !0)
            },
            Rt = (c, h) => {
                Jt(c, h, !1)
            },
            j = (c, h) => {
                const w = Array.from(c.children);
                for (let V = 0; V < w.length; V++) {
                    const ge = w[V];
                    if (ge instanceof HTMLElement && bt(ge, h)) return ge
                }
            },
            P = (c, h, w) => {
                w === "".concat(parseInt(w)) && (w = parseInt(w)), w || parseInt(w) === 0 ? c.style[h] = typeof w == "number" ? "".concat(w, "px") : w : c.style.removeProperty(h)
            },
            z = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            D = c => {
                c.style.display = "none"
            },
            Y = (c, h, w, V) => {
                const ge = c.querySelector(h);
                ge && (ge.style[w] = V)
            },
            fe = function(c, h) {
                let w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? z(c, w) : D(c)
            },
            pe = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Pe = () => !pe(dt()) && !pe(Vt()) && !pe(l()),
            Ne = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    w = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    V = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return w > 0 || V > 0
            },
            jt = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const w = O();
                pe(w) && (h && (w.style.transition = "none", w.style.width = "100%"), setTimeout(() => {
                    w.style.transition = "width ".concat(c / 1e3, "s linear"), w.style.width = "0%"
                }, 10))
            },
            Ke = () => {
                const c = O(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const w = parseInt(window.getComputedStyle(c).width),
                    V = h / w * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(V, "%")
            },
            Ln = () => typeof window > "u" || typeof document > "u",
            Mn = 100,
            it = {},
            Bn = () => {
                it.previousActiveElement instanceof HTMLElement ? (it.previousActiveElement.focus(), it.previousActiveElement = null) : document.body && document.body.focus()
            },
            gi = c => new Promise(h => {
                if (!c) return h();
                const w = window.scrollX,
                    V = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Bn(), h()
                }, Mn), window.scrollTo(w, V)
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
            In = () => {
                const c = H();
                return c ? (c.remove(), Rt([document.documentElement, document.body], [J["no-backdrop"], J["toast-shown"], J["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            Ir = () => {
                const c = ye(),
                    h = j(c, J.input),
                    w = j(c, J.file),
                    V = c.querySelector(".".concat(J.range, " input")),
                    ge = c.querySelector(".".concat(J.range, " output")),
                    Fe = j(c, J.select),
                    Ht = c.querySelector(".".concat(J.checkbox, " input")),
                    Nn = j(c, J.textarea);
                h.oninput = sn, w.onchange = sn, Fe.onchange = sn, Ht.onchange = sn, Nn.oninput = sn, V.oninput = () => {
                    sn(), ge.value = V.value
                }, V.onchange = () => {
                    sn(), ge.value = V.value
                }
            },
            kr = c => typeof c == "string" ? document.querySelector(c) : c,
            Ai = c => {
                const h = ye();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            Ui = c => {
                window.getComputedStyle(c).direction === "rtl" && Xe(H(), J.rtl)
            },
            mi = c => {
                const h = In();
                if (Ln()) {
                    A("SweetAlert2 requires document to initialize");
                    return
                }
                const w = document.createElement("div");
                w.className = J.container, h && Xe(w, J["no-transition"]), nt(w, Sr);
                const V = kr(c.target);
                V.appendChild(w), Ai(c), Ui(V), Ir()
            },
            vi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? ji(c, h) : c && nt(h, c)
            },
            ji = (c, h) => {
                c.jquery ? qi(h, c) : nt(h, c.toString())
            },
            qi = (c, h) => {
                if (c.textContent = "", 0 in h)
                    for (let w = 0; w in h; w++) c.appendChild(h[w].cloneNode(!0));
                else c.appendChild(h.cloneNode(!0))
            },
            An = (() => {
                if (Ln()) return !1;
                const c = document.createElement("div"),
                    h = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const w in h)
                    if (Object.prototype.hasOwnProperty.call(h, w) && typeof c.style[w] < "u") return h[w];
                return !1
            })(),
            Gi = () => {
                const c = document.createElement("div");
                c.className = J["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            yi = (c, h) => {
                const w = g(),
                    V = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? D(w) : z(w), ct(w, h, "actions"), Fn(w, V, h), nt(V, h.loaderHtml), ct(V, h, "loader")
            };

        function Fn(c, h, w) {
            const V = dt(),
                ge = Vt(),
                Fe = l();
            wi(V, "confirm", w), wi(ge, "deny", w), wi(Fe, "cancel", w), Fi(V, ge, Fe, w), w.reverseButtons && (w.toast ? (c.insertBefore(Fe, V), c.insertBefore(ge, V)) : (c.insertBefore(Fe, h), c.insertBefore(ge, h), c.insertBefore(V, h)))
        }

        function Fi(c, h, w, V) {
            if (!V.buttonsStyling) return Rt([c, h, w], J.styled);
            Xe([c, h, w], J.styled), V.confirmButtonColor && (c.style.backgroundColor = V.confirmButtonColor, Xe(c, J["default-outline"])), V.denyButtonColor && (h.style.backgroundColor = V.denyButtonColor, Xe(h, J["default-outline"])), V.cancelButtonColor && (w.style.backgroundColor = V.cancelButtonColor, Xe(w, J["default-outline"]))
        }

        function wi(c, h, w) {
            fe(c, w["show".concat(o(h), "Button")], "inline-block"), nt(c, w["".concat(h, "ButtonText")]), c.setAttribute("aria-label", w["".concat(h, "ButtonAriaLabel")]), c.className = J[h], ct(c, w, "".concat(h, "Button")), Xe(c, w["".concat(h, "ButtonClass")])
        }
        const $e = (c, h) => {
            const w = H();
            !w || (v(w, h.backdrop), a(w, h.position), b(w, h.grow), ct(w, h, "container"))
        };

        function v(c, h) {
            typeof h == "string" ? c.style.background = h : h || Xe([document.documentElement, document.body], J["no-backdrop"])
        }

        function a(c, h) {
            h in J ? Xe(c, J[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Xe(c, J.center))
        }

        function b(c, h) {
            if (h && typeof h == "string") {
                const w = "grow-".concat(h);
                w in J && Xe(c, J[w])
            }
        }
        var _ = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Z = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            be = (c, h) => {
                const w = ye(),
                    V = _.innerParams.get(c),
                    ge = !V || h.input !== V.input;
                Z.forEach(Fe => {
                    const Ht = j(w, J[Fe]);
                    zt(Fe, h.inputAttributes), Ht.className = J[Fe], ge && D(Ht)
                }), h.input && (ge && We(h), Hn(h))
            },
            We = c => {
                if (!qt[c.input]) return A('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = _r(c.input),
                    w = qt[c.input](h, c);
                z(h), setTimeout(() => {
                    wt(w)
                })
            },
            Lt = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const w = c.attributes[h].name;
                    ["type", "value", "style"].includes(w) || c.removeAttribute(w)
                }
            },
            zt = (c, h) => {
                const w = vt(ye(), c);
                if (!!w) {
                    Lt(w);
                    for (const V in h) w.setAttribute(V, h[V])
                }
            },
            Hn = c => {
                const h = _r(c.input);
                typeof c.customClass == "object" && Xe(h, c.customClass.input)
            },
            Pn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Yn = (c, h, w) => {
                if (w.inputLabel) {
                    c.id = J.input;
                    const V = document.createElement("label"),
                        ge = J["input-label"];
                    V.setAttribute("for", c.id), V.className = ge, typeof w.customClass == "object" && Xe(V, w.customClass.inputLabel), V.innerText = w.inputLabel, h.insertAdjacentElement("beforebegin", V)
                }
            },
            _r = c => j(ye(), J[c] || J.input),
            Qt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            qt = {};
        qt.text = qt.email = qt.password = qt.number = qt.tel = qt.url = (c, h) => (Qt(c, h.inputValue), Yn(c, c, h), Pn(c, h), c.type = h.input, c), qt.file = (c, h) => (Yn(c, c, h), Pn(c, h), c), qt.range = (c, h) => {
            const w = c.querySelector("input"),
                V = c.querySelector("output");
            return Qt(w, h.inputValue), w.type = h.input, Qt(V, h.inputValue), Yn(w, c, h), c
        }, qt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const w = document.createElement("option");
                nt(w, h.inputPlaceholder), w.value = "", w.disabled = !0, w.selected = !0, c.appendChild(w)
            }
            return Yn(c, c, h), c
        }, qt.radio = c => (c.textContent = "", c), qt.checkbox = (c, h) => {
            const w = vt(ye(), "checkbox");
            w.value = "1", w.id = J.checkbox, w.checked = Boolean(h.inputValue);
            const V = c.querySelector("span");
            return nt(V, h.inputPlaceholder), w
        }, qt.textarea = (c, h) => {
            Qt(c, h.inputValue), Pn(c, h), Yn(c, c, h);
            const w = V => parseInt(window.getComputedStyle(V).marginLeft) + parseInt(window.getComputedStyle(V).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const V = parseInt(window.getComputedStyle(ye()).width),
                        ge = () => {
                            const Fe = c.offsetWidth + w(c);
                            Fe > V ? ye().style.width = "".concat(Fe, "px") : ye().style.width = null
                        };
                    new MutationObserver(ge).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Hi = (c, h) => {
                const w = xe();
                ct(w, h, "htmlContainer"), h.html ? (vi(h.html, w), z(w, "block")) : h.text ? (w.textContent = h.text, z(w, "block")) : D(w), be(c, h)
            },
            wo = (c, h) => {
                const w = x();
                fe(w, h.footer), h.footer && vi(h.footer, w), ct(w, h, "footer")
            },
            bo = (c, h) => {
                const w = R();
                nt(w, h.closeButtonHtml), ct(w, h, "closeButton"), fe(w, h.showCloseButton), w.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const w = _.innerParams.get(c),
                    V = ve();
                if (w && h.icon === w.icon) {
                    As(V, h), Tr(V, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    D(V);
                    return
                }
                if (h.icon && Object.keys(qe).indexOf(h.icon) === -1) {
                    A('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), D(V);
                    return
                }
                z(V), As(V, h), Tr(V, h), Xe(V, h.showClass.icon)
            },
            Tr = (c, h) => {
                for (const w in qe) h.icon !== w && Rt(c, qe[w]);
                Xe(c, qe[h.icon]), wn(c, h), Yi(), ct(c, h, "icon")
            },
            Yi = () => {
                const c = ye(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    w = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let V = 0; V < w.length; V++) w[V].style.backgroundColor = h
            },
            gs = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
            Co = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            As = (c, h) => {
                let w = c.innerHTML,
                    V;
                h.iconHtml ? V = Lr(h.iconHtml) : h.icon === "success" ? (V = gs, w = w.replace(/ style=".*?"/g, "")) : h.icon === "error" ? V = Co : V = Lr({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), w.trim() !== V.trim() && nt(c, V)
            },
            wn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const w of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) Y(c, w, "backgroundColor", h.iconColor);
                    Y(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Lr = c => '<div class="'.concat(J["icon-content"], '">').concat(c, "</div>"),
            bi = (c, h) => {
                const w = Ie();
                if (!h.imageUrl) return D(w);
                z(w, ""), w.setAttribute("src", h.imageUrl), w.setAttribute("alt", h.imageAlt), P(w, "width", h.imageWidth), P(w, "height", h.imageHeight), w.className = J.image, ct(w, h, "image")
            },
            Eo = (c, h) => {
                const w = Ue();
                if (!h.progressSteps || h.progressSteps.length === 0) return D(w);
                z(w), w.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((V, ge) => {
                    const Fe = xo(V);
                    if (w.appendChild(Fe), ge === h.currentProgressStep && Xe(Fe, J["active-progress-step"]), ge !== h.progressSteps.length - 1) {
                        const Ht = Wn(h);
                        w.appendChild(Ht)
                    }
                })
            },
            xo = c => {
                const h = document.createElement("li");
                return Xe(h, J["progress-step"]), nt(h, c), h
            },
            Wn = c => {
                const h = document.createElement("li");
                return Xe(h, J["progress-step-line"]), c.progressStepsDistance && P(h, "width", c.progressStepsDistance), h
            },
            zn = (c, h) => {
                const w = ue();
                fe(w, h.title || h.titleText, "block"), h.title && vi(h.title, w), h.titleText && (w.innerText = h.titleText), ct(w, h, "title")
            },
            Br = (c, h) => {
                const w = H(),
                    V = ye();
                h.toast ? (P(w, "width", h.width), V.style.width = "100%", V.insertBefore(E(), ve())) : P(V, "width", h.width), P(V, "padding", h.padding), h.color && (V.style.color = h.color), h.background && (V.style.background = h.background), D(Je()), So(V, h)
            },
            So = (c, h) => {
                c.className = "".concat(J.popup, " ").concat(pe(c) ? h.showClass.popup : ""), h.toast ? (Xe([document.documentElement, document.body], J["toast-shown"]), Xe(c, J.toast)) : Xe(c, J.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Xe(c, h.customClass), h.icon && Xe(c, J["icon-".concat(h.icon)])
            },
            Dr = (c, h) => {
                Br(c, h), $e(c, h), Eo(c, h), Or(c, h), bi(c, h), zn(c, h), bo(c, h), Hi(c, h), yi(c, h), wo(c, h), typeof h.didRender == "function" && h.didRender(ye())
            },
            Qn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            Ci = () => {
                Array.from(document.body.children).forEach(h => {
                    h === H() || h.contains(H()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Rr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            Wi = ["swal-title", "swal-html", "swal-footer"],
            Io = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const w = h.content;
                return Lo(w), Object.assign(ms(w), ko(w), _o(w), Mr(w), Oo(w), To(w, Wi))
            },
            ms = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(V => {
                    Kn(V, ["name", "value"]);
                    const ge = V.getAttribute("name"),
                        Fe = V.getAttribute("value");
                    typeof re[ge] == "boolean" && Fe === "false" && (h[ge] = !1), typeof re[ge] == "object" && (h[ge] = JSON.parse(Fe))
                }), h
            },
            ko = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(V => {
                    Kn(V, ["type", "color", "aria-label"]);
                    const ge = V.getAttribute("type");
                    h["".concat(ge, "ButtonText")] = V.innerHTML, h["show".concat(o(ge), "Button")] = !0, V.hasAttribute("color") && (h["".concat(ge, "ButtonColor")] = V.getAttribute("color")), V.hasAttribute("aria-label") && (h["".concat(ge, "ButtonAriaLabel")] = V.getAttribute("aria-label"))
                }), h
            },
            _o = c => {
                const h = {},
                    w = c.querySelector("swal-image");
                return w && (Kn(w, ["src", "width", "height", "alt"]), w.hasAttribute("src") && (h.imageUrl = w.getAttribute("src")), w.hasAttribute("width") && (h.imageWidth = w.getAttribute("width")), w.hasAttribute("height") && (h.imageHeight = w.getAttribute("height")), w.hasAttribute("alt") && (h.imageAlt = w.getAttribute("alt"))), h
            },
            Mr = c => {
                const h = {},
                    w = c.querySelector("swal-icon");
                return w && (Kn(w, ["type", "color"]), w.hasAttribute("type") && (h.icon = w.getAttribute("type")), w.hasAttribute("color") && (h.iconColor = w.getAttribute("color")), h.iconHtml = w.innerHTML), h
            },
            Oo = c => {
                const h = {},
                    w = c.querySelector("swal-input");
                w && (Kn(w, ["type", "label", "placeholder", "value"]), h.input = w.getAttribute("type") || "text", w.hasAttribute("label") && (h.inputLabel = w.getAttribute("label")), w.hasAttribute("placeholder") && (h.inputPlaceholder = w.getAttribute("placeholder")), w.hasAttribute("value") && (h.inputValue = w.getAttribute("value")));
                const V = Array.from(c.querySelectorAll("swal-input-option"));
                return V.length && (h.inputOptions = {}, V.forEach(ge => {
                    Kn(ge, ["value"]);
                    const Fe = ge.getAttribute("value"),
                        Ht = ge.innerHTML;
                    h.inputOptions[Fe] = Ht
                })), h
            },
            To = (c, h) => {
                const w = {};
                for (const V in h) {
                    const ge = h[V],
                        Fe = c.querySelector(ge);
                    Fe && (Kn(Fe, []), w[ge.replace(/^swal-/, "")] = Fe.innerHTML.trim())
                }
                return w
            },
            Lo = c => {
                const h = Wi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(w => {
                    const V = w.tagName.toLowerCase();
                    h.indexOf(V) === -1 && f("Unrecognized element <".concat(V, ">"))
                })
            },
            Kn = (c, h) => {
                Array.from(c.attributes).forEach(w => {
                    h.indexOf(w.name) === -1 && f(['Unrecognized attribute "'.concat(w.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var vs = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Bo(c) {
            c.inputValidator || Object.keys(vs).forEach(h => {
                c.input === h && (c.inputValidator = vs[h])
            })
        }

        function Do(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function ys(c) {
            Bo(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Do(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), mi(c)
        }
        class Pr {
            constructor(h, w) {
                this.callback = h, this.remaining = w, this.running = !1, this.start()
            }
            start() {
                return this.running || (this.running = !0, this.started = new Date, this.id = setTimeout(this.callback, this.remaining)), this.remaining
            }
            stop() {
                return this.running && (this.running = !1, clearTimeout(this.id), this.remaining -= new Date().getTime() - this.started.getTime()), this.remaining
            }
            increase(h) {
                const w = this.running;
                return w && this.stop(), this.remaining += h, w && this.start(), this.remaining
            }
            getTimerLeft() {
                return this.running && (this.stop(), this.start()), this.remaining
            }
            isRunning() {
                return this.running
            }
        }
        const ws = () => {
                De.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (De.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(De.previousBodyPadding + Gi(), "px"))
            },
            Nr = () => {
                De.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(De.previousBodyPadding, "px"), De.previousBodyPadding = null)
            },
            bs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !bt(document.body, J.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Xe(document.body, J.iosfix), Vr(), Cs()
                }
            },
            Cs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    w = !!c.match(/WebKit/i);
                h && w && !c.match(/CriOS/i) && ye().scrollHeight > window.innerHeight - 44 && (H().style.paddingBottom = "".concat(44, "px"))
            },
            Vr = () => {
                const c = H();
                let h;
                c.ontouchstart = w => {
                    h = Ro(w)
                }, c.ontouchmove = w => {
                    h && (w.preventDefault(), w.stopPropagation())
                }
            },
            Ro = c => {
                const h = c.target,
                    w = H();
                return Mo(c) || Po(c) ? !1 : h === w || !Ne(w) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ne(xe()) && xe().contains(h))
            },
            Mo = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            Po = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (bt(document.body, J.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Rt(document.body, J.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            Ur = 10,
            jr = c => {
                const h = H(),
                    w = ye();
                typeof c.willOpen == "function" && c.willOpen(w);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(h, w, c), setTimeout(() => {
                    No(h, w)
                }, Ur), Se() && (Vo(h, c.scrollbarPadding, ge), Ci()), !he() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(w)), Rt(h, J["no-transition"])
            },
            Es = c => {
                const h = ye();
                if (c.target !== h) return;
                const w = H();
                h.removeEventListener(An, Es), w.style.overflowY = "auto"
            },
            No = (c, h) => {
                An && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(An, Es)) : c.style.overflowY = "auto"
            },
            Vo = (c, h, w) => {
                bs(), h && w !== "hidden" && ws(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, w) => {
                Xe(c, w.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), z(h, "grid"), setTimeout(() => {
                    Xe(h, w.showClass.popup), h.style.removeProperty("opacity")
                }, Ur), Xe([document.documentElement, document.body], J.shown), w.heightAuto && w.backdrop && !w.toast && Xe([document.documentElement, document.body], J["height-auto"])
            },
            s = c => {
                let h = ye();
                h || new Ot, h = ye();
                const w = E();
                he() ? D(ve()) : u(h, c), z(w), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const w = g(),
                    V = E();
                !h && pe(dt()) && (h = dt()), z(w), h && (D(h), V.setAttribute("data-button-to-replace", h.className)), V.parentNode.insertBefore(V, h), Xe([c, w], J.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? F(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && (U(h.inputValue) || ie(h.inputValue)) && (s(dt()), $(c, h))
            },
            y = (c, h) => {
                const w = c.getInput();
                if (!w) return null;
                switch (h.input) {
                    case "checkbox":
                        return C(w);
                    case "radio":
                        return k(w);
                    case "file":
                        return G(w);
                    default:
                        return h.inputAutoTrim ? w.value.trim() : w.value
                }
            },
            C = c => c.checked ? 1 : 0,
            k = c => c.checked ? c.value : null,
            G = c => c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null,
            F = (c, h) => {
                const w = ye(),
                    V = ge => le[h.input](w, we(ge), h);
                U(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), X(h.inputOptions).then(ge => {
                    c.hideLoading(), V(ge)
                })) : typeof h.inputOptions == "object" ? V(h.inputOptions) : A("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            $ = (c, h) => {
                const w = c.getInput();
                D(w), X(h.inputValue).then(V => {
                    w.value = h.input === "number" ? parseFloat(V) || 0 : "".concat(V), z(w), w.focus(), c.hideLoading()
                }).catch(V => {
                    A("Error in inputValue promise: ".concat(V)), w.value = "", z(w), w.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, w) => {
                    const V = j(c, J.select),
                        ge = (Fe, Ht, Nn) => {
                            const pn = document.createElement("option");
                            pn.value = Nn, nt(pn, Ht), pn.selected = ne(Nn, w.inputValue), Fe.appendChild(pn)
                        };
                    h.forEach(Fe => {
                        const Ht = Fe[0],
                            Nn = Fe[1];
                        if (Array.isArray(Nn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ht, pn.disabled = !1, V.appendChild(pn), Nn.forEach(nr => ge(pn, nr[1], nr[0]))
                        } else ge(V, Nn, Ht)
                    }), V.focus()
                },
                radio: (c, h, w) => {
                    const V = j(c, J.radio);
                    h.forEach(Fe => {
                        const Ht = Fe[0],
                            Nn = Fe[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = J.radio, pn.value = Ht, ne(Ht, w.inputValue) && (pn.checked = !0);
                        const Jo = document.createElement("span");
                        nt(Jo, Nn), Jo.className = J.label, nr.appendChild(pn), nr.appendChild(Jo), V.appendChild(nr)
                    });
                    const ge = V.querySelectorAll("input");
                    ge.length && ge[0].focus()
                }
            },
            we = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((w, V) => {
                    let ge = w;
                    typeof ge == "object" && (ge = we(ge)), h.push([V, ge])
                }) : Object.keys(c).forEach(w => {
                    let V = c[w];
                    typeof V == "object" && (V = we(V)), h.push([w, V])
                }), h
            },
            ne = (c, h) => h && h.toString() === c.toString();

        function ce() {
            const c = _.innerParams.get(this);
            if (!c) return;
            const h = _.domCache.get(this);
            D(h.loader), he() ? c.icon && z(ve()) : Ye(h), Rt([h.popup, h.actions], J.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ye = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? z(h[0], "inline-block") : Pe() && D(c.actions)
        };

        function rt(c) {
            const h = _.innerParams.get(c || this),
                w = _.domCache.get(c || this);
            return w ? vt(w.popup, h.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const Gt = () => pe(ye()),
            Pt = () => dt() && dt().click(),
            un = () => Vt() && Vt().click(),
            xt = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, w, V) => {
                et(h), w.toast || (h.keydownHandler = ge => zi(c, ge, V), h.keydownTarget = w.keydownListenerCapture ? window : ye(), h.keydownListenerCapture = w.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, w) => {
                const V = te();
                if (V.length) return h = h + w, h === V.length ? h = 0 : h === -1 && (h = V.length - 1), V[h].focus();
                ye().focus()
            },
            Bt = ["ArrowRight", "ArrowDown"],
            xi = ["ArrowLeft", "ArrowUp"],
            zi = (c, h, w) => {
                const V = _.innerParams.get(c);
                !V || h.isComposing || h.keyCode === 229 || (V.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, V) : h.key === "Tab" ? Jn(h, V) : [...Bt, ...xi].includes(h.key) ? Xn(h.key) : h.key === "Escape" && an(h, V, w))
            },
            hn = (c, h, w) => {
                if (!!B(w.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(w.input)) return;
                    Pt(), h.preventDefault()
                }
            },
            Jn = (c, h) => {
                const w = c.target,
                    V = te();
                let ge = -1;
                for (let Fe = 0; Fe < V.length; Fe++)
                    if (w === V[Fe]) {
                        ge = Fe;
                        break
                    } c.shiftKey ? ft(h, ge, -1) : ft(h, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            Xn = c => {
                const h = dt(),
                    w = Vt(),
                    V = l();
                if (document.activeElement instanceof HTMLElement && ![h, w, V].includes(document.activeElement)) return;
                const ge = Bt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Fe = document.activeElement;
                for (let Ht = 0; Ht < g().children.length; Ht++) {
                    if (Fe = Fe[ge], !Fe) return;
                    if (Fe instanceof HTMLButtonElement && pe(Fe)) break
                }
                Fe instanceof HTMLButtonElement && Fe.focus()
            },
            an = (c, h, w) => {
                B(h.allowEscapeKey) && (c.preventDefault(), w(Qn.esc))
            };

        function Dn(c, h, w, V) {
            he() ? Is(c, V) : (gi(w).then(() => Is(c, V)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), Se() && (Nr(), Ei(), Rr()), mn()
        }

        function mn() {
            Rt([document.documentElement, document.body], [J.shown, J["height-auto"], J["no-backdrop"], J["toast-shown"]])
        }

        function bn(c) {
            c = $n(c);
            const h = je.swalPromiseResolve.get(this),
                w = Zn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : w && h(c)
        }

        function xs() {
            return !!_.awaitingPromise.get(this)
        }
        const Zn = c => {
            const h = ye();
            if (!h) return !1;
            const w = _.innerParams.get(c);
            if (!w || bt(h, w.hideClass.popup)) return !1;
            Rt(h, w.showClass.popup), Xe(h, w.hideClass.popup);
            const V = H();
            return Rt(V, w.showClass.backdrop), Xe(V, w.hideClass.backdrop), Ss(c, h, w), !0
        };

        function qr(c) {
            const h = je.swalPromiseReject.get(this);
            gt(this), h && h(c)
        }
        const gt = c => {
                c.isAwaitingPromise() && (_.awaitingPromise.delete(c), _.innerParams.get(c) || c._destroy())
            },
            $n = c => typeof c > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, c),
            Ss = (c, h, w) => {
                const V = H(),
                    ge = An && pt(h);
                typeof w.willClose == "function" && w.willClose(h), ge ? Gr(c, h, V, w.returnFocus, w.didClose) : Dn(c, V, w.returnFocus, w.didClose)
            },
            Gr = (c, h, w, V, ge) => {
                it.swalCloseEventFinishedCallback = Dn.bind(null, c, w, V, ge), h.addEventListener(An, function(Fe) {
                    Fe.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            Is = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Si(c, h, w) {
            const V = _.domCache.get(c);
            h.forEach(ge => {
                V[ge].disabled = w
            })
        }

        function ks(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const V = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < V.length; ge++) V[ge].disabled = h
            } else c.disabled = h
        }

        function _s() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function Uo() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function jo() {
            return ks(this.getInput(), !1)
        }

        function qo() {
            return ks(this.getInput(), !0)
        }

        function Qi(c) {
            const h = _.domCache.get(this),
                w = _.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = J["validation-message"], w.customClass && w.customClass.validationMessage && Xe(h.validationMessage, w.customClass.validationMessage), z(h.validationMessage);
            const V = this.getInput();
            V && (V.setAttribute("aria-invalid", !0), V.setAttribute("aria-describedby", J["validation-message"]), wt(V), Xe(V, J.inputerror))
        }

        function Go() {
            const c = _.domCache.get(this);
            c.validationMessage && D(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Rt(h, J.inputerror))
        }

        function Fo() {
            return _.domCache.get(this).progressSteps
        }

        function Ho(c) {
            const h = ye(),
                w = _.innerParams.get(this);
            if (!h || bt(h, w.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const V = Ii(c),
                ge = Object.assign({}, w, V);
            Dr(this, ge), _.innerParams.set(this, ge), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Ii = c => {
            const h = {};
            return Object.keys(c).forEach(w => {
                se(w) ? h[w] = c[w] : f("Invalid parameter to update: ".concat(w))
            }), h
        };

        function Yo() {
            const c = _.domCache.get(this),
                h = _.innerParams.get(this);
            if (!h) {
                kn(this);
                return
            }
            c.popup && it.swalCloseEventFinishedCallback && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Fr(this)
        }
        const Fr = c => {
                kn(c), delete c.params, delete it.keydownHandler, delete it.keydownTarget, delete it.currentInstance
            },
            kn = c => {
                c.isAwaitingPromise() ? (Cn(_, c), _.awaitingPromise.set(c, !0)) : (Cn(je, c), Cn(_, c))
            },
            Cn = (c, h) => {
                for (const w in c) c[w].delete(h)
            };
        var Hr = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: rt,
            close: bn,
            isAwaitingPromise: xs,
            rejectPromise: qr,
            handleAwaitingPromise: gt,
            closePopup: bn,
            closeModal: bn,
            closeToast: bn,
            enableButtons: _s,
            disableButtons: Uo,
            enableInput: jo,
            disableInput: qo,
            showValidationMessage: Qi,
            resetValidationMessage: Go,
            getProgressSteps: Fo,
            update: Ho,
            _destroy: Yo
        });
        const Os = c => {
                const h = _.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Xi(c, !0)
            },
            Ts = c => {
                const h = _.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            Wo = (c, h) => {
                c.disableButtons(), h(Qn.cancel)
            },
            St = (c, h) => {
                const w = _.innerParams.get(c);
                if (!w.input) {
                    A('The "input" parameter is needed to be set when using returnInputValueOn'.concat(o(h)));
                    return
                }
                const V = y(c, w);
                w.inputValidator ? Ki(c, V, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, V) : Xi(c, V) : (c.enableButtons(), c.showValidationMessage(w.validationMessage))
            },
            Ki = (c, h, w) => {
                const V = _.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => X(V.inputValidator(h, V.validationMessage))).then(Fe => {
                    c.enableButtons(), c.enableInput(), Fe ? c.showValidationMessage(Fe) : w === "deny" ? dn(c, h) : Xi(c, h)
                })
            },
            dn = (c, h) => {
                const w = _.innerParams.get(c || void 0);
                w.showLoaderOnDeny && s(Vt()), w.preDeny ? (_.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => X(w.preDeny(h, w.validationMessage))).then(ge => {
                    ge === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? h : ge
                    })
                }).catch(ge => Ji(c || void 0, ge))) : c.close({
                    isDenied: !0,
                    value: h
                })
            },
            vn = (c, h) => {
                c.close({
                    isConfirmed: !0,
                    value: h
                })
            },
            Ji = (c, h) => {
                c.rejectPromise(h)
            },
            Xi = (c, h) => {
                const w = _.innerParams.get(c || void 0);
                w.showLoaderOnConfirm && s(), w.preConfirm ? (c.resetValidationMessage(), _.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => X(w.preConfirm(h, w.validationMessage))).then(ge => {
                    pe(Je()) || ge === !1 ? (c.hideLoading(), gt(c)) : vn(c, typeof ge > "u" ? h : ge)
                }).catch(ge => Ji(c || void 0, ge))) : vn(c, h)
            },
            zo = (c, h, w) => {
                _.innerParams.get(c).toast ? Qo(c, h, w) : (Yr(h), Bs(h), Zi(c, h, w))
            },
            Qo = (c, h, w) => {
                h.popup.onclick = () => {
                    const V = _.innerParams.get(c);
                    V && (Ls(V) || V.timer || V.input) || w(Qn.close)
                }
            },
            Ls = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let _n = !1;
        const Yr = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (_n = !0)
                    }
                }
            },
            Bs = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (_n = !0)
                    }
                }
            },
            Zi = (c, h, w) => {
                h.container.onclick = V => {
                    const ge = _.innerParams.get(c);
                    if (_n) {
                        _n = !1;
                        return
                    }
                    V.target === h.container && B(ge.allowOutsideClick) && w(Qn.backdrop)
                }
            },
            $i = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || $i(c),
            Ko = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((w, V) => {
                    const ge = c[V];
                    typeof ge == "string" || er(ge) ? h[w] = ge : ge !== void 0 && A("Unexpected type of ".concat(w, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, w = new Array(h), V = 0; V < h; V++) w[V] = arguments[V];
            return new c(...w)
        }

        function Wr(c) {
            class h extends this {
                _main(V, ge) {
                    return super._main(V, Object.assign({}, c, ge))
                }
            }
            return h
        }
        const zr = () => it.timeout && it.timeout.getTimerLeft(),
            Ds = () => {
                if (it.timeout) return Ke(), it.timeout.stop()
            },
            T = () => {
                if (it.timeout) {
                    const c = it.timeout.start();
                    return jt(c), c
                }
            },
            q = () => {
                const c = it.timeout;
                return c && (c.running ? Ds() : T())
            },
            Q = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return jt(h, !0), h
                }
            },
            de = () => it.timeout && it.timeout.isRunning();
        let ee = !1;
        const Ae = {};

        function Ce() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            Ae[c] = this, ee || (document.body.addEventListener("click", Oe), ee = !0)
        }
        const Oe = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const w in Ae) {
                    const V = h.getAttribute(w);
                    if (V) {
                        Ae[w].fire({
                            template: V
                        });
                        return
                    }
                }
        };
        var Re = Object.freeze({
            isValidParameter: ae,
            isUpdatableParameter: se,
            isDeprecatedParameter: me,
            argsToParams: Ko,
            isVisible: Gt,
            clickConfirm: Pt,
            clickDeny: un,
            clickCancel: xt,
            getContainer: H,
            getPopup: ye,
            getTitle: ue,
            getHtmlContainer: xe,
            getImage: Ie,
            getIcon: ve,
            getInputLabel: Yt,
            getCloseButton: R,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Vt,
            getCancelButton: l,
            getLoader: E,
            getFooter: x,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Je,
            isLoading: Be,
            fire: tr,
            mixin: Wr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: zr,
            stopTimer: Ds,
            resumeTimer: T,
            toggleTimer: q,
            increaseTimer: Q,
            isTimerRunning: de,
            bindClickHandler: Ce
        });
        let Ge;
        class He {
            constructor() {
                if (typeof window > "u") return;
                Ge = this;
                for (var h = arguments.length, w = new Array(h), V = 0; V < h; V++) w[V] = arguments[V];
                const ge = Object.freeze(this.constructor.argsToParams(w));
                Object.defineProperties(this, {
                    params: {
                        value: ge,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const Fe = Ge._main(Ge.params);
                _.promise.set(this, Fe)
            }
            _main(h) {
                let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Me(Object.assign({}, w, h)), it.currentInstance && (it.currentInstance._destroy(), Se() && Rr()), it.currentInstance = Ge;
                const V = ht(h, w);
                ys(V), Object.freeze(V), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const ge = _t(Ge);
                return Dr(Ge, V), _.innerParams.set(Ge, V), Qe(Ge, ge, V)
            }
            then(h) {
                return _.promise.get(this).then(h)
            } finally(h) {
                return _.promise.get(this).finally(h)
            }
        }
        const Qe = (c, h, w) => new Promise((V, ge) => {
                const Fe = Ht => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ht
                    })
                };
                je.swalPromiseResolve.set(c, V), je.swalPromiseReject.set(c, ge), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Ts(c), h.cancelButton.onclick = () => Wo(c, Fe), h.closeButton.onclick = () => Fe(Qn.close), zo(c, h, Fe), on(c, it, w, Fe), p(c, w), jr(w), ze(it, w, Fe), Ft(h, w), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const w = Io(c),
                    V = Object.assign({}, re, h, w, c);
                return V.showClass = Object.assign({}, re.showClass, V.showClass), V.hideClass = Object.assign({}, re.hideClass, V.hideClass), V
            },
            _t = c => {
                const h = {
                    popup: ye(),
                    container: H(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Vt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: R(),
                    validationMessage: Je(),
                    progressSteps: Ue()
                };
                return _.domCache.set(c, h), h
            },
            ze = (c, h, w) => {
                const V = O();
                D(V), h.timer && (c.timeout = new Pr(() => {
                    w("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (z(V), ct(V, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && jt(h.timer)
                })))
            },
            Ft = (c, h) => {
                if (!h.toast) {
                    if (!B(h.allowEnterKey)) return fn();
                    Xt(c, h) || ft(h, -1, 1)
                }
            },
            Xt = (c, h) => h.focusDeny && pe(c.denyButton) ? (c.denyButton.focus(), !0) : h.focusCancel && pe(c.cancelButton) ? (c.cancelButton.focus(), !0) : h.focusConfirm && pe(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
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
            const w = document.createElement("button");
            w.innerHTML = "&times;", w.onclick = () => c.remove(), c.appendChild(w), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(c)
                }, 1e3)
            })
        }
        Object.assign(He.prototype, Hr), Object.assign(He, Re), Object.keys(Hr).forEach(c => {
            He[c] = function() {
                if (Ge) return Ge[c](...arguments)
            }
        }), He.DismissReason = Qn, He.version = "11.4.26";
        const Ot = He;
        return Ot.default = Ot, Ot
    }), typeof mt < "u" && mt.Sweetalert2 && (mt.swal = mt.sweetAlert = mt.Swal = mt.SweetAlert = mt.Sweetalert2), typeof document < "u" && function(n, i) {
        var o = n.createElement("style");
        if (n.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = i);
        else try {
            o.innerHTML = i
        } catch {
            o.innerText = i
        }
    }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px hsla(0deg,0%,0%,.075),0 1px 2px hsla(0deg,0%,0%,.075),1px 2px 4px hsla(0deg,0%,0%,.075),1px 3px 8px hsla(0deg,0%,0%,.075),2px 4px 16px hsla(0deg,0%,0%,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 3px}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:0 0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:0 0;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:0 0;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .5s;animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-i-mark .8s;animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{-webkit-animation:swal2-animate-question-mark .8s;animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:0 0;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.leave-russia-now-and-apply-your-skills-to-the-world{display:flex;position:fixed;z-index:1939;top:0;right:0;bottom:0;left:0;flex-direction:column;align-items:center;justify-content:center;padding:25px 0 20px;background:#20232a;color:#fff;text-align:center}.leave-russia-now-and-apply-your-skills-to-the-world div{max-width:560px;margin:10px;line-height:146%}.leave-russia-now-and-apply-your-skills-to-the-world iframe{max-width:100%;max-height:55.5555555556vmin;margin:16px auto}.leave-russia-now-and-apply-your-skills-to-the-world strong{border-bottom:2px dashed #fff}.leave-russia-now-and-apply-your-skills-to-the-world button{display:flex;position:fixed;z-index:1940;top:0;right:0;align-items:center;justify-content:center;width:48px;height:48px;margin-right:10px;margin-bottom:-10px;border:none;background:0 0;color:#aaa;font-size:48px;font-weight:700;cursor:pointer}.leave-russia-now-and-apply-your-skills-to-the-world button:hover{color:#fff}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@-webkit-keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')
})(Ju);
const Tn = Ju.exports;
class It {
    static get DismissReason() {
        return Tn.DismissReason
    }
    static show(e, n = {}) {
        switch (Tn.isVisible() && Tn.close(), e instanceof Error && (n.text = e.message, e = "error"), e) {
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
        Tn.close()
    }
    static vibrate(e = [100, 100]) {
        !window.navigator || !window.navigator.vibrate || window.navigator.vibrate(e)
    }
    static async showAlert(e) {
        const n = e.customClass || {};
        return e.customClass = {
            ...n,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", Tn.fire(e)
    }
    static async showError(e) {
        const n = new URL("main/pp2/earwax/assets/8cdd50e7.png", self.location).href,
            i = e.customClass || {};
        return e.customClass = {
            ...i,
            popup: "jbgModal"
        }, e.titleText = e.titleText || "Error", n && (e.imageUrl = n), Tn.fire(e)
    }
    static async showCustom(e) {
        return Tn.fire(e)
    }
    static async showToast(e) {
        return e.toast = !0, e.showConfirmButton = !1, e.timer = e.timer || 2500, e.position = e.position || "bottom", Tn.fire(e)
    }
}
const y0 = `<div class="canvasContainer">\r
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
    w0 = {
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
                i = Di().width,
                o = Di().height,
                f = Math.max(i / e, o / n);
            this.width = i, this.height = o, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (o - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = mo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Di().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Di().width, Di().height))
        }
    },
    b0 = Et.View.extend({
        template: at.template(y0),
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
            d0("cameraCanvas"), t.sprites = [], t.gameLoop = g0({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = cl(w0), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                    console.error(i), It.show("alert", {
                        titleText: "Unable to Access Camera",
                        text: `Looks like we don't have access to your device's camera. You can refresh and try again, or choose the ${t} option instead.`,
                        willClose: () => {
                            this.cameraAccessDenied()
                        }
                    })
                }
            } else It.show("alert", {
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
                i = Le(".canvasContainer");
            if (!n || !i) return;
            const o = i.width(),
                f = Math.max(Le(window).innerHeight(), 250),
                A = Math.min(o / t, f / e),
                S = t * A,
                I = e * A;
            n.style.width = `${S}px`, n.style.height = `${I}px`, n.width = S, n.height = I
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
    C0 = si.extend({
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
    E0 = Et.View.extend({
        template: at.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new C0,
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
            this.cameraView = this.cameraView || new b0(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    x0 = '<a class="change-color button-color btn"></a>',
    S0 = Et.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: at.template(x0),
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
    I0 = Et.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: S0,
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
    k0 = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp2/earwax/assets/5f12600b.png"/></svg>\r
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
    _0 = Et.View.extend({
        tagName: "div",
        className: "picker",
        template: at.template(k0),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new I0({
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
class Xu {
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
        const A = this.smoothedMouseX - this.lastSmoothedMouse.x,
            S = this.smoothedMouseY - this.lastSmoothedMouse.y,
            I = Math.sqrt(A * A + S * S);
        let L;
        I !== 0 ? L = Math.PI / 2 + Math.atan2(S, A) : L = 0;
        const B = this.options.minThickness * e + this.options.thicknessFactor * I,
            U = this.lastThickness + this.options.thicknessSmoothingFactor * (B - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = L);
        const X = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(L),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(L),
            K = Math.sin(L),
            re = Math.cos(L),
            m = this.lastThickness * X,
            M = this.lastThickness * ie,
            W = U * K,
            ae = U * re,
            se = .33 * I * X,
            me = -.33 * I * ie,
            d = this.lastSmoothedMouse.x + M + se,
            Ee = this.lastSmoothedMouse.y + m + me,
            _e = this.lastSmoothedMouse.x - M + se,
            Me = this.lastSmoothedMouse.y - m + me;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + M, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(d, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + W), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.canvasCTX.quadraticCurveTo(_e, Me, this.lastSmoothedMouse.x - M, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * U;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + W), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = L, this.lastThickness = U, this.lastMouseChangeVector = {
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
class O0 {
    constructor(e, n = {}) {
        st(this, "canvasSelector");
        st(this, "canvas");
        st(this, "ctx");
        st(this, "options");
        st(this, "history");
        st(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Le(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(ac, n), this.history = [], this.layerNames.forEach(i => {
            const o = new Xu(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
        const A = i.getContext("2d");
        return n && (A.fillStyle = n, A.fillRect(0, 0, o, f)), A.drawImage(this.highlighterSketch.canvas, 0, 0, o, f), A.drawImage(this.markerSketch.canvas, 0, 0, o, f), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const T0 = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    L0 = Et.View.extend({
        className: "Sketchpad canvasContainer",
        template: at.template(T0),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new O0(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = Le(n)[0].width / Le(n).width(),
                o = n.getBoundingClientRect(),
                f = this.model.get("size"),
                A = this.sketchpad.options.thickness;
            let S = (e.clientX - o.left) * i;
            S = Math.min(f.width - A, Math.max(A, S));
            let I = (e.clientY - o.top) * i;
            return I = Math.min(f.height - A, Math.max(A, I)), {
                x: S,
                y: I
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
    B0 = `<div class="controller-content">\r
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
    D0 = si.extend({
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
    R0 = Et.View.extend({
        className: "Draw",
        template: at.template(B0),
        model: new D0,
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
                    return t ? t.html ? t.html : Le("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new Vi({}), this.toolbarComponent = this.toolbarComponent || new _0({
                model: new ot.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new L0({
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
            this.stickit(), this.update(), this.onResize(), It.vibrate()
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
            if (t.length === 0 && !this.model.get("allowEmpty")) return It.show(Error(this.model.get("strings").drawing_empty)), !1;
            const e = {
                    lines: t,
                    action: "submit"
                },
                n = this.model.get("objectKey");
            return n && (e.objectKey = n, e.val = {
                lines: t,
                submit: !0
            }), this.triggerMethod("client:message", e), this.model.get("debug") && It.show("custom", {
                html: `<textarea id="lines" style='width:100%; height:400px;'>${JSON.stringify(t)}</textarea><button type="button" onclick="(function(){var copyText = document.querySelector('#lines'); copyText.select(); document.execCommand('copy');})();">Copy to clipboard</button>`
            }), !1
        },
        onObjectFilterError() {
            It.show(Error(this.model.get("strings").ERROR_REJECTED_OBJECT))
        },
        onResize() {
            const t = Le("#sketchpad"),
                e = Le("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(Le(".controller-content").css("border-top-width"), 10) * 2 + Le(".playerTopBar").innerHeight() + Le("#prompt").innerHeight() + Le("#toolbar").innerHeight() + parseInt(Le(".canvasContainer").css("border-top-width"), 10) * 2 + Le("#buttons").innerHeight() + Le("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(Le(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(Le(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(Le(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                o = e.width,
                f = e.height,
                A = 2,
                S = Math.min(t.width() - i, o * A),
                I = Math.max(Le("#controller-container").innerHeight() - n, 250),
                L = Math.min(S / o, I / f),
                B = o * L,
                U = f * L;
            e.style.width = `${B}px`, e.style.height = `${U}px`, window.scrollTo(0, 0)
        }
    }),
    M0 = `<div>
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
    P0 = si.extend({
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
    N0 = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: at.template(M0),
        model: new P0,
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
                    return t ? t.html ? t.html : Le("<div />").text(t.text).html() : ""
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
            this.update(), It.vibrate()
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
        const o = new Xu(t, e, n);
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
            }) : ni.hide(), t.platformId && $t.setTag(`platform-${t.platformId}`)
        },
        async update() {
            return null
        },
        caughtError(t) {
            throw t
        },
        onAttach() {
            this.update().catch(this.caughtError), Le(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
        },
        showTwitchBroadcasterDialog(t) {
            let e = `<div class='icon-${this.client.roles.broadcaster.platform}'>${this.client.roles.broadcaster.name}</div>`;
            e += "<div class='success'>You have successfully connected your account to the Jackbox Audience Kit Twitch Extension.</div>", this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), It.show("custom", {
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
            Pi.setAsViewed(0)
        },
        showScreen(t, e) {
            const n = Le(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (Le(this.activeScreen).fadeOut("fast", () => {}), Le(this.activeScreen).show(), Le(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
                e && e()
            }), this.activeScreen = t, this.onResize()), !1
        },
        notify() {
            It.vibrate()
        },
        onRoomWasDestroyed() {
            $t.remove("roomCode"), $t.remove("reconnect"), It.show("error", {
                titleText: "Disconnected",
                text: "Thanks for playing!",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onDisconnected() {
            It.show("error", {
                titleText: "Disconnected",
                text: "You have been disconnected.",
                willClose: () => {
                    window.location.reload(!0)
                }
            })
        },
        onConnectionMessage(t) {
            const e = `${t.status} ${t.attempt?`${t.attempt}/5'`:""}`;
            if (It.show("toast", {
                    text: e
                }), t.status === "connected") {
                const n = this.client.parseEntities();
                this.model.set(n)
            }
        },
        onResize() {
            const t = Le("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? Le("#slide-in-banner").outerHeight(!0) : 0,
                n = Le(window).width(),
                i = Le(window).height() - t;
            Le(`.${this.getOption("appTag")}-page`).css("height", i - e), Le(`.${this.getOption("appTag")}-page`).attr("height", i - e), Le(`.${this.getOption("appTag")}-page`).css("top", t), Le(`.${this.getOption("appTag")}-page`).css("width", n), Le(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    V0 = `<div id="controller" class="state-controller controller-content">
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
    U0 = si.extend({
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
    j0 = Et.View.extend({
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
    q0 = Et.View.extend({
        className: "Lobby scrollable",
        template: at.template(V0),
        model: new U0,
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
                childView: j0,
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
                e && e.error && this.lastUGCResultId !== e.id && (It.show("alert", {
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
            }), Pi.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = Le(t.currentTarget).data("action");
            if (i !== "back" && i !== "censorConfirm" && i !== "activateContentId")
                if (i === "changeName") try {
                        const o = await It.show("custom", {
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
                    } catch {} else if (i === "censorOptions") It.show("custom", {
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
                                }, ...e.model.get("censorablePlayers").map(A => ({
                                    action: "censorConfirm",
                                    html: A.name,
                                    key: A.id
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
            }) : i === "ugc" ? It.show("custom", {
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
                    })))), o.render(), Le(".lobbyUgcInput").mask("aaa-aaaa", {
                        placeholder: "???-????"
                    }), e.listenTo(o, "childview:button:activateContentId", e.activateContentId), e.listenTo(o, "childview:button:back", () => {
                        It.close()
                    }), e.listenTo(o, "childview:input:submit", e.activateContentIdFromInput)
                }
            }) : this.triggerMethod("client:message", {
                action: i
            })
        },
        censorPlayer(t) {
            It.close(), this.triggerMethod("client:message", {
                action: "censor",
                id: t.get("key")
            })
        },
        activateContentId(t) {
            It.close(), this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.get("key")
            })
        },
        activateContentIdFromInput(t) {
            (t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase() || "").length < 7 || (this.triggerMethod("client:message", {
                activateContentId: !0,
                contentId: t.getSanitizedValue().replace(/[^A-Za-z]/gi, "").toUpperCase()
            }), It.close())
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
    G0 = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    F0 = si.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    H0 = Et.View.extend({
        className: "Logo",
        template: at.template(G0),
        model: new F0,
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : Le("<div />").text(t.text).html()
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
            }), Pi.setAsViewed(0)
        }
    }),
    Vs = {
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
    Y0 = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    W0 = Et.View.extend({
        className: "playerTopBarView",
        template: at.template(Y0),
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
    z0 = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    Q0 = si.extend({
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
    K0 = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(z0),
        model: new Q0,
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
                    return t ? t.html ? t.html : Le("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : Le("<div />").text(t.text).html() : null
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
            this.update(), It.vibrate()
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
                const f = this.choicesList.children.find(A => A.model.get("index") === o);
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
                if (this.model.get("censorDialog") === "warning") return Tn.close(), Tn.fire({
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

function Gn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? cc(Object(n), !0).forEach(function(i) {
            J0(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cc(Object(n)).forEach(function(i) {
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

function J0(t, e, n) {
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

function X0(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        o, f;
    for (f = 0; f < i.length; f++) o = i[f], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n
}

function Z0(t, e) {
    if (t == null) return {};
    var n = X0(t, e),
        i, o;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (o = 0; o < f.length; o++) i = f[o], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var $0 = "1.15.0";

function ii(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    fs = ii(/Edge/i),
    uc = ii(/firefox/i),
    ss = ii(/safari/i) && !ii(/chrome/i) && !ii(/android/i),
    Zu = ii(/iP(ad|od|hone)/i),
    $u = ii(/chrome/i) && ii(/android/i),
    eh = {
        capture: !1,
        passive: !1
    };

function Ct(t, e, n) {
    t.addEventListener(e, n, !oi && eh)
}

function yt(t, e, n) {
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

function eC(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function Un(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && no(t, e) : no(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = eC(t))
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

function qn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Kt(t, e, n, i, o) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, A, S, I, L, B, U;
        if (t !== window && t.parentNode && t !== qn() ? (f = t.getBoundingClientRect(), A = f.top, S = f.left, I = f.bottom, L = f.right, B = f.height, U = f.width) : (A = 0, S = 0, I = window.innerHeight, L = window.innerWidth, B = window.innerHeight, U = window.innerWidth), (e || n) && t !== window && (o = o || t.parentNode, !oi))
            do
                if (o && o.getBoundingClientRect && (tt(o, "transform") !== "none" || n && tt(o, "position") !== "static")) {
                    var X = o.getBoundingClientRect();
                    A -= X.top + parseInt(tt(o, "border-top-width")), S -= X.left + parseInt(tt(o, "border-left-width")), I = A + f.height, L = S + f.width;
                    break
                } while (o = o.parentNode);
        if (i && t !== window) {
            var ie = pr(o || t),
                K = ie && ie.a,
                re = ie && ie.d;
            ie && (A /= re, S /= K, U /= K, B /= re, I = A + B, L = S + U)
        }
        return {
            top: A,
            left: S,
            bottom: I,
            right: L,
            width: U,
            height: B
        }
    }
}

function dc(t, e, n) {
    for (var i = di(t, !0), o = Kt(t)[e]; i;) {
        var f = Kt(i)[n],
            A = void 0;
        if (n === "top" || n === "left" ? A = o >= f : A = o <= f, !A) return i;
        if (i === qn()) break;
        i = di(i, !1)
    }
    return !1
}

function vr(t, e, n, i) {
    for (var o = 0, f = 0, A = t.children; f < A.length;) {
        if (A[f].style.display !== "none" && A[f] !== Ze.ghost && (i || A[f] !== Ze.dragged) && Un(A[f], n.draggable, t, !1)) {
            if (o === e) return A[f];
            o++
        }
        f++
    }
    return null
}

function ul(t, e) {
    for (var n = t.lastElementChild; n && (n === Ze.ghost || tt(n, "display") === "none" || e && !no(n, e));) n = n.previousElementSibling;
    return n || null
}

function On(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ze.clone && (!e || no(t, e)) && n++;
    return n
}

function fc(t) {
    var e = 0,
        n = 0,
        i = qn();
    if (t)
        do {
            var o = pr(t),
                f = o.a,
                A = o.d;
            e += t.scrollLeft * f, n += t.scrollTop * A
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function tC(t, e) {
    for (var n in t)
        if (!!t.hasOwnProperty(n)) {
            for (var i in e)
                if (e.hasOwnProperty(i) && e[i] === t[n][i]) return Number(n)
        } return -1
}

function di(t, e) {
    if (!t || !t.getBoundingClientRect) return qn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var o = tt(n);
            if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return qn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return qn()
}

function nC(t, e) {
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

function iC() {
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

function rC() {
    var t = [],
        e;
    return {
        captureAnimationState: function() {
            if (t = [], !!this.options.animation) {
                var i = [].slice.call(this.el.children);
                i.forEach(function(o) {
                    if (!(tt(o, "display") === "none" || o === Ze.ghost)) {
                        t.push({
                            target: o,
                            rect: Kt(o)
                        });
                        var f = Gn({}, t[t.length - 1].rect);
                        if (o.thisAnimationDuration) {
                            var A = pr(o, !0);
                            A && (f.top -= A.f, f.left -= A.e)
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
            t.splice(tC(t, {
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
                A = 0;
            t.forEach(function(S) {
                var I = 0,
                    L = S.target,
                    B = L.fromRect,
                    U = Kt(L),
                    X = L.prevFromRect,
                    ie = L.prevToRect,
                    K = S.rect,
                    re = pr(L, !0);
                re && (U.top -= re.f, U.left -= re.e), L.toRect = U, L.thisAnimationDuration && ha(X, U) && !ha(B, U) && (K.top - U.top) / (K.left - U.left) === (B.top - U.top) / (B.left - U.left) && (I = oC(K, X, ie, o.options)), ha(U, B) || (L.prevFromRect = B, L.prevToRect = U, I || (I = o.options.animation), o.animate(L, K, U, I)), I && (f = !0, A = Math.max(A, I), clearTimeout(L.animationResetTimer), L.animationResetTimer = setTimeout(function() {
                    L.animationTime = 0, L.prevFromRect = null, L.fromRect = null, L.prevToRect = null, L.thisAnimationDuration = null
                }, I), L.thisAnimationDuration = I)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, A) : typeof i == "function" && i(), t = []
        },
        animate: function(i, o, f, A) {
            if (A) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var S = pr(this.el),
                    I = S && S.a,
                    L = S && S.d,
                    B = (o.left - f.left) / (I || 1),
                    U = (o.top - f.top) / (L || 1);
                i.animatingX = !!B, i.animatingY = !!U, tt(i, "transform", "translate3d(" + B + "px," + U + "px,0)"), this.forRepaintDummy = sC(i), tt(i, "transition", "transform " + A + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, A)
            }
        }
    }
}

function sC(t) {
    return t.offsetWidth
}

function oC(t, e, n, i) {
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
            rr.forEach(function(A) {
                !n[A.pluginName] || (n[A.pluginName][f] && n[A.pluginName][f](Gn({
                    sortable: n
                }, i)), n.options[A.pluginName] && n[A.pluginName][e] && n[A.pluginName][e](Gn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, o) {
            rr.forEach(function(S) {
                var I = S.pluginName;
                if (!(!e.options[I] && !S.initializeByDefault)) {
                    var L = new S(e, n, e.options);
                    L.sortable = e, L.options = e.options, e[I] = L, ri(i, L.defaults)
                }
            });
            for (var f in e.options)
                if (!!e.options.hasOwnProperty(f)) {
                    var A = this.modifyOption(e, f, e.options[f]);
                    typeof A < "u" && (e.options[f] = A)
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

function aC(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        o = t.targetEl,
        f = t.cloneEl,
        A = t.toEl,
        S = t.fromEl,
        I = t.oldIndex,
        L = t.newIndex,
        B = t.oldDraggableIndex,
        U = t.newDraggableIndex,
        X = t.originalEvent,
        ie = t.putSortable,
        K = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var re, m = e.options,
            M = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = A || n, re.from = S || n, re.item = o || n, re.clone = f, re.oldIndex = I, re.newIndex = L, re.oldDraggableIndex = B, re.newDraggableIndex = U, re.originalEvent = X, re.pullMode = ie ? ie.lastPutMode : void 0;
        var W = Gn(Gn({}, K), ps.getEventProperties(i, e));
        for (var ae in W) re[ae] = W[ae];
        n && n.dispatchEvent(re), m[M] && m[M].call(e, re)
    }
}
var lC = ["evt"],
    yn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = i.evt,
            f = Z0(i, lC);
        ps.pluginEvent.bind(Ze)(e, n, Gn({
            dragEl: Te,
            parentEl: Ut,
            ghostEl: ut,
            rootEl: Mt,
            nextEl: Li,
            lastDownEl: Ws,
            cloneEl: Nt,
            cloneHidden: ui,
            dragStarted: Zr,
            putSortable: en,
            activeSortable: Ze.active,
            originalEvent: o,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: xn,
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
                    originalEvent: o
                })
            }
        }, f))
    };

function gn(t) {
    aC(Gn({
        putSortable: en,
        cloneEl: Nt,
        targetEl: Te,
        rootEl: Mt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: xn,
        newDraggableIndex: ci
    }, t))
}
var Te, Ut, ut, Mt, Li, Ws, Nt, ui, cr, xn, as, ci, Us, en, lr = !1,
    io = !1,
    ro = [],
    _i, Rn, fa, pa, pc, gc, Zr, sr, ls, cs = !1,
    js = !1,
    zs, ln, ga = [],
    Ba = !1,
    so = [],
    yo = typeof document < "u",
    qs = Zu,
    Ac = fs || oi ? "cssFloat" : "float",
    cC = yo && !$u && !Zu && "draggable" in document.createElement("div"),
    sh = function() {
        if (!!yo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    oh = function(e, n) {
        var i = tt(e),
            o = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = vr(e, 0, n),
            A = vr(e, 1, n),
            S = f && tt(f),
            I = A && tt(A),
            L = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Kt(f).width,
            B = I && parseInt(I.marginLeft) + parseInt(I.marginRight) + Kt(A).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && S.float && S.float !== "none") {
            var U = S.float === "left" ? "left" : "right";
            return A && (I.clear === "both" || I.clear === U) ? "vertical" : "horizontal"
        }
        return f && (S.display === "block" || S.display === "flex" || S.display === "table" || S.display === "grid" || L >= o && i[Ac] === "none" || A && i[Ac] === "none" && L + B > o) ? "vertical" : "horizontal"
    },
    uC = function(e, n, i) {
        var o = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            A = i ? e.width : e.height,
            S = i ? n.left : n.top,
            I = i ? n.right : n.bottom,
            L = i ? n.width : n.height;
        return o === S || f === I || o + A / 2 === S + L / 2
    },
    hC = function(e, n) {
        var i;
        return ro.some(function(o) {
            var f = o[Sn].options.emptyInsertThreshold;
            if (!(!f || ul(o))) {
                var A = Kt(o),
                    S = e >= A.left - f && e <= A.right + f,
                    I = n >= A.top - f && n <= A.bottom + f;
                if (S && I) return i = o
            }
        }), i
    },
    ah = function(e) {
        function n(f, A) {
            return function(S, I, L, B) {
                var U = S.options.group.name && I.options.group.name && S.options.group.name === I.options.group.name;
                if (f == null && (A || U)) return !0;
                if (f == null || f === !1) return !1;
                if (A && f === "clone") return f;
                if (typeof f == "function") return n(f(S, I, L, B), A)(S, I, L, B);
                var X = (A ? S : I).options.group.name;
                return f === !0 || typeof f == "string" && f === X || f.join && f.indexOf(X) > -1
            }
        }
        var i = {},
            o = e.group;
        (!o || Ys(o) != "object") && (o = {
            name: o
        }), i.name = o.name, i.checkPull = n(o.pull, !0), i.checkPut = n(o.put), i.revertClone = o.revertClone, e.group = i
    },
    lh = function() {
        !sh && ut && tt(ut, "display", "none")
    },
    ch = function() {
        !sh && ut && tt(ut, "display", "")
    };
yo && !$u && document.addEventListener("click", function(t) {
    if (io) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), io = !1, !1
}, !0);
var Oi = function(e) {
        if (Te) {
            e = e.touches ? e.touches[0] : e;
            var n = hC(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Sn]._onDragOver(i)
            }
        }
    },
    dC = function(e) {
        Te && Te.parentNode[Sn]._isOutsideThisEl(e.target)
    };

function Ze(t, e) {
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
        setData: function(A, S) {
            A.setData("Text", S.textContent)
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
        supportPointer: Ze.supportPointer !== !1 && "PointerEvent" in window && !ss,
        emptyInsertThreshold: 5
    };
    ps.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    ah(e);
    for (var o in this) o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : cC, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? Ct(t, "pointerdown", this._onTapStart) : (Ct(t, "mousedown", this._onTapStart), Ct(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ct(t, "dragover", this), Ct(t, "dragenter", this)), ro.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ri(this, rC())
}
Ze.prototype = {
    constructor: Ze,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (sr = null)
    },
    _getDirection: function(e, n) {
        return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Te) : this.options.direction
    },
    _onTapStart: function(e) {
        if (!!e.cancelable) {
            var n = this,
                i = this.el,
                o = this.options,
                f = o.preventOnFilter,
                A = e.type,
                S = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                I = (S || e).target,
                L = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || I,
                B = o.filter;
            if (wC(i), !Te && !(/mousedown|pointerdown/.test(A) && e.button !== 0 || o.disabled) && !L.isContentEditable && !(!this.nativeDraggable && ss && I && I.tagName.toUpperCase() === "SELECT") && (I = Un(I, o.draggable, i, !1), !(I && I.animated) && Ws !== I)) {
                if (cr = On(I), as = On(I, o.draggable), typeof B == "function") {
                    if (B.call(this, e, I, this)) {
                        gn({
                            sortable: n,
                            rootEl: L,
                            name: "filter",
                            targetEl: I,
                            toEl: i,
                            fromEl: i
                        }), yn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (B && (B = B.split(",").some(function(U) {
                        if (U = Un(L, U.trim(), i, !1), U) return gn({
                            sortable: n,
                            rootEl: U,
                            name: "filter",
                            targetEl: I,
                            fromEl: i,
                            toEl: i
                        }), yn("filter", n, {
                            evt: e
                        }), !0
                    }), B)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                o.handle && !Un(L, o.handle, i, !1) || this._prepareDragStart(e, S, I)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var o = this,
            f = o.el,
            A = o.options,
            S = f.ownerDocument,
            I;
        if (i && !Te && i.parentNode === f) {
            var L = Kt(i);
            if (Mt = f, Te = i, Ut = Te.parentNode, Li = Te.nextSibling, Ws = i, Us = A.group, Ze.dragged = Te, _i = {
                    target: Te,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, pc = _i.clientX - L.left, gc = _i.clientY - L.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Te.style["will-change"] = "all", I = function() {
                    if (yn("delayEnded", o, {
                            evt: e
                        }), Ze.eventCanceled) {
                        o._onDrop();
                        return
                    }
                    o._disableDelayedDragEvents(), !uc && o.nativeDraggable && (Te.draggable = !0), o._triggerDragStart(e, n), gn({
                        sortable: o,
                        name: "choose",
                        originalEvent: e
                    }), En(Te, A.chosenClass, !0)
                }, A.ignore.split(",").forEach(function(B) {
                    th(Te, B.trim(), Aa)
                }), Ct(S, "dragover", Oi), Ct(S, "mousemove", Oi), Ct(S, "touchmove", Oi), Ct(S, "mouseup", o._onDrop), Ct(S, "touchend", o._onDrop), Ct(S, "touchcancel", o._onDrop), uc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Te.draggable = !0), yn("delayStart", this, {
                    evt: e
                }), A.delay && (!A.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Ze.eventCanceled) {
                    this._onDrop();
                    return
                }
                Ct(S, "mouseup", o._disableDelayedDrag), Ct(S, "touchend", o._disableDelayedDrag), Ct(S, "touchcancel", o._disableDelayedDrag), Ct(S, "mousemove", o._delayedDragTouchMoveHandler), Ct(S, "touchmove", o._delayedDragTouchMoveHandler), A.supportPointer && Ct(S, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(I, A.delay)
            } else I()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Te && Aa(Te), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        yt(e, "mouseup", this._disableDelayedDrag), yt(e, "touchend", this._disableDelayedDrag), yt(e, "touchcancel", this._disableDelayedDrag), yt(e, "mousemove", this._delayedDragTouchMoveHandler), yt(e, "touchmove", this._delayedDragTouchMoveHandler), yt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? Ct(document, "pointermove", this._onTouchMove) : n ? Ct(document, "touchmove", this._onTouchMove) : Ct(document, "mousemove", this._onTouchMove) : (Ct(Te, "dragend", this), Ct(Mt, "dragstart", this._onDragStart));
        try {
            document.selection ? Qs(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (lr = !1, Mt && Te) {
            yn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && Ct(document, "dragover", dC);
            var i = this.options;
            !e && En(Te, i.dragClass, !1), En(Te, i.ghostClass, !0), Ze.active = this, e && this._appendGhost(), gn({
                sortable: this,
                name: "start",
                originalEvent: n
            })
        } else this._nulling()
    },
    _emulateDragOver: function() {
        if (Rn) {
            this._lastX = Rn.clientX, this._lastY = Rn.clientY, lh();
            for (var e = document.elementFromPoint(Rn.clientX, Rn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Rn.clientX, Rn.clientY), e !== n);) n = e;
            if (Te.parentNode[Sn]._isOutsideThisEl(e), n)
                do {
                    if (n[Sn]) {
                        var i = void 0;
                        if (i = n[Sn]._onDragOver({
                                clientX: Rn.clientX,
                                clientY: Rn.clientY,
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
        if (_i) {
            var n = this.options,
                i = n.fallbackTolerance,
                o = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                A = ut && pr(ut, !0),
                S = ut && A && A.a,
                I = ut && A && A.d,
                L = qs && ln && fc(ln),
                B = (f.clientX - _i.clientX + o.x) / (S || 1) + (L ? L[0] - ga[0] : 0) / (S || 1),
                U = (f.clientY - _i.clientY + o.y) / (I || 1) + (L ? L[1] - ga[1] : 0) / (I || 1);
            if (!Ze.active && !lr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                A ? (A.e += B - (fa || 0), A.f += U - (pa || 0)) : A = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: B,
                    f: U
                };
                var X = "matrix(".concat(A.a, ",").concat(A.b, ",").concat(A.c, ",").concat(A.d, ",").concat(A.e, ",").concat(A.f, ")");
                tt(ut, "webkitTransform", X), tt(ut, "mozTransform", X), tt(ut, "msTransform", X), tt(ut, "transform", X), fa = B, pa = U, Rn = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Mt,
                n = Kt(Te, !0, qs, !0, e),
                i = this.options;
            if (qs) {
                for (ln = e; tt(ln, "position") === "static" && tt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = qn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = qn(), ga = fc(ln)
            }
            ut = Te.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", qs ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Ze.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", pc / parseInt(ut.style.width) * 100 + "% " + gc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            o = e.dataTransfer,
            f = i.options;
        if (yn("dragStart", this, {
                evt: e
            }), Ze.eventCanceled) {
            this._onDrop();
            return
        }
        yn("setupClone", this), Ze.eventCanceled || (Nt = rh(Te), Nt.removeAttribute("id"), Nt.draggable = !1, Nt.style["will-change"] = "", this._hideClone(), En(Nt, this.options.chosenClass, !1), Ze.clone = Nt), i.cloneId = Qs(function() {
            yn("clone", i), !Ze.eventCanceled && (i.options.removeCloneOnHide || Mt.insertBefore(Nt, Te), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Te, f.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (yt(document, "mouseup", i._onDrop), yt(document, "touchend", i._onDrop), yt(document, "touchcancel", i._onDrop), o && (o.effectAllowed = "move", f.setData && f.setData.call(i, o, Te)), Ct(document, "drop", i), tt(Te, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Qs(i._dragStarted.bind(i, n, e)), Ct(document, "selectstart", i), Zr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            o, f, A, S = this.options,
            I = S.group,
            L = Ze.active,
            B = Us === I,
            U = S.sort,
            X = en || L,
            ie, K = this,
            re = !1;
        if (Ba) return;

        function m(ve, ue) {
            yn(ve, K, Gn({
                evt: e,
                isOwner: B,
                axis: ie ? "vertical" : "horizontal",
                revert: A,
                dragRect: o,
                targetRect: f,
                canSort: U,
                fromSortable: X,
                target: i,
                completed: W,
                onMove: function(Ie, Ue) {
                    return Gs(Mt, n, Te, o, Ie, Kt(Ie), e, Ue)
                },
                changed: ae
            }, ue))
        }

        function M() {
            m("dragOverAnimationCapture"), K.captureAnimationState(), K !== X && X.captureAnimationState()
        }

        function W(ve) {
            return m("dragOverCompleted", {
                insertion: ve
            }), ve && (B ? L._hideClone() : L._showClone(K), K !== X && (En(Te, en ? en.options.ghostClass : L.options.ghostClass, !1), En(Te, S.ghostClass, !0)), en !== K && K !== Ze.active ? en = K : K === Ze.active && en && (en = null), X === K && (K._ignoreWhileAnimating = i), K.animateAll(function() {
                m("dragOverAnimationComplete"), K._ignoreWhileAnimating = null
            }), K !== X && (X.animateAll(), X._ignoreWhileAnimating = null)), (i === Te && !Te.animated || i === n && !i.animated) && (sr = null), !S.dragoverBubble && !e.rootEl && i !== document && (Te.parentNode[Sn]._isOutsideThisEl(e.target), !ve && Oi(e)), !S.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            xn = On(Te), ci = On(Te, S.draggable), gn({
                sortable: K,
                name: "change",
                toEl: n,
                newIndex: xn,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = Un(i, S.draggable, n, !0), m("dragOver"), Ze.eventCanceled) return re;
        if (Te.contains(e.target) || i.animated && i.animatingX && i.animatingY || K._ignoreWhileAnimating === i) return W(!1);
        if (io = !1, L && !S.disabled && (B ? U || (A = Ut !== Mt) : en === this || (this.lastPutMode = Us.checkPull(this, L, Te, e)) && I.checkPut(this, L, Te, e))) {
            if (ie = this._getDirection(e, i) === "vertical", o = Kt(Te), m("dragOverValid"), Ze.eventCanceled) return re;
            if (A) return Ut = Mt, M(), this._hideClone(), m("revert"), Ze.eventCanceled || (Li ? Mt.insertBefore(Te, Li) : Mt.appendChild(Te)), W(!0);
            var se = ul(n, S.draggable);
            if (!se || AC(e, ie, this) && !se.animated) {
                if (se === Te) return W(!1);
                if (se && n === e.target && (i = se), i && (f = Kt(i)), Gs(Mt, n, Te, o, i, f, e, !!i) !== !1) return M(), se && se.nextSibling ? n.insertBefore(Te, se.nextSibling) : n.appendChild(Te), Ut = n, ae(), W(!0)
            } else if (se && gC(e, ie, this)) {
                var me = vr(n, 0, S, !0);
                if (me === Te) return W(!1);
                if (i = me, f = Kt(i), Gs(Mt, n, Te, o, i, f, e, !1) !== !1) return M(), n.insertBefore(Te, me), Ut = n, ae(), W(!0)
            } else if (i.parentNode === n) {
                f = Kt(i);
                var d = 0,
                    Ee, _e = Te.parentNode !== n,
                    Me = !uC(Te.animated && Te.toRect || o, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Ve = dc(i, "top", "top") || dc(Te, "top", "top"),
                    J = Ve ? Ve.scrollTop : void 0;
                sr !== i && (Ee = f[lt], cs = !1, js = !Me && S.invertSwap || _e), d = mC(e, i, f, ie, Me ? 1 : S.swapThreshold, S.invertedSwapThreshold == null ? S.swapThreshold : S.invertedSwapThreshold, js, sr === i);
                var qe;
                if (d !== 0) {
                    var H = On(Te);
                    do H -= d, qe = Ut.children[H]; while (qe && (tt(qe, "display") === "none" || qe === ut))
                }
                if (d === 0 || qe === i) return W(!1);
                sr = i, ls = d;
                var oe = i.nextElementSibling,
                    ke = !1;
                ke = d === 1;
                var ye = Gs(Mt, n, Te, o, i, f, e, ke);
                if (ye !== !1) return (ye === 1 || ye === -1) && (ke = ye === 1), Ba = !0, setTimeout(pC, 30), M(), ke && !oe ? n.appendChild(Te) : i.parentNode.insertBefore(Te, ke ? oe : i), Ve && ih(Ve, 0, J - Ve.scrollTop), Ut = Te.parentNode, Ee !== void 0 && !js && (zs = Math.abs(Ee - Kt(i)[lt])), ae(), W(!0)
            }
            if (n.contains(Te)) return W(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        yt(document, "mousemove", this._onTouchMove), yt(document, "touchmove", this._onTouchMove), yt(document, "pointermove", this._onTouchMove), yt(document, "dragover", Oi), yt(document, "mousemove", Oi), yt(document, "touchmove", Oi)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        yt(e, "mouseup", this._onDrop), yt(e, "touchend", this._onDrop), yt(e, "pointerup", this._onDrop), yt(e, "touchcancel", this._onDrop), yt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (xn = On(Te), ci = On(Te, i.draggable), yn("drop", this, {
                evt: e
            }), Ut = Te && Te.parentNode, xn = On(Te), ci = On(Te, i.draggable), Ze.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, js = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Da(this.cloneId), Da(this._dragStartId), this.nativeDraggable && (yt(document, "drop", this), yt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Te, "transform", ""), e && (Zr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Mt === Ut || en && en.lastPutMode !== "clone") && Nt && Nt.parentNode && Nt.parentNode.removeChild(Nt), Te && (this.nativeDraggable && yt(Te, "dragend", this), Aa(Te), Te.style["will-change"] = "", Zr && !lr && En(Te, en ? en.options.ghostClass : this.options.ghostClass, !1), En(Te, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: Ut,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Mt !== Ut ? (xn >= 0 && (gn({
            rootEl: Ut,
            name: "add",
            toEl: Ut,
            fromEl: Mt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "remove",
            toEl: Ut,
            originalEvent: e
        }), gn({
            rootEl: Ut,
            name: "sort",
            toEl: Ut,
            fromEl: Mt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: Ut,
            originalEvent: e
        })), en && en.save()) : xn !== cr && xn >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: Ut,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: Ut,
            originalEvent: e
        })), Ze.active && ((xn == null || xn === -1) && (xn = cr, ci = as), gn({
            sortable: this,
            name: "end",
            toEl: Ut,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        yn("nulling", this), Mt = Te = Ut = ut = Li = Nt = Ws = ui = _i = Rn = Zr = xn = ci = cr = as = sr = ls = en = Us = Ze.dragged = Ze.ghost = Ze.clone = Ze.active = null, so.forEach(function(e) {
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
                Te && (this._onDragOver(e), fC(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, o = 0, f = i.length, A = this.options; o < f; o++) n = i[o], Un(n, A.draggable, this.el, !1) && e.push(n.getAttribute(A.dataIdAttr) || yC(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            o = this.el;
        this.toArray().forEach(function(f, A) {
            var S = o.children[A];
            Un(S, this.options.draggable, o, !1) && (i[f] = S)
        }, this), n && this.captureAnimationState(), e.forEach(function(f) {
            i[f] && (o.removeChild(i[f]), o.appendChild(i[f]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return Un(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var o = ps.modifyOption(this, e, n);
        typeof o < "u" ? i[e] = o : i[e] = n, e === "group" && ah(i)
    },
    destroy: function() {
        yn("destroy", this);
        var e = this.el;
        e[Sn] = null, yt(e, "mousedown", this._onTapStart), yt(e, "touchstart", this._onTapStart), yt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (yt(e, "dragover", this), yt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ui) {
            if (yn("hideClone", this), Ze.eventCanceled) return;
            tt(Nt, "display", "none"), this.options.removeCloneOnHide && Nt.parentNode && Nt.parentNode.removeChild(Nt), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (yn("showClone", this), Ze.eventCanceled) return;
            Te.parentNode == Mt && !this.options.group.revertClone ? Mt.insertBefore(Nt, Te) : Li ? Mt.insertBefore(Nt, Li) : Mt.appendChild(Nt), this.options.group.revertClone && this.animate(Te, Nt), tt(Nt, "display", ""), ui = !1
        }
    }
};

function fC(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Gs(t, e, n, i, o, f, A, S) {
    var I, L = t[Sn],
        B = L.options.onMove,
        U;
    return window.CustomEvent && !oi && !fs ? I = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (I = document.createEvent("Event"), I.initEvent("move", !0, !0)), I.to = e, I.from = t, I.dragged = n, I.draggedRect = i, I.related = o || e, I.relatedRect = f || Kt(e), I.willInsertAfter = S, I.originalEvent = A, t.dispatchEvent(I), B && (U = B.call(L, I, A)), U
}

function Aa(t) {
    t.draggable = !1
}

function pC() {
    Ba = !1
}

function gC(t, e, n) {
    var i = Kt(vr(n.el, 0, n.options, !0)),
        o = 10;
    return e ? t.clientX < i.left - o || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - o || t.clientY < i.bottom && t.clientX < i.left
}

function AC(t, e, n) {
    var i = Kt(ul(n.el, n.options.draggable)),
        o = 10;
    return e ? t.clientX > i.right + o || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + o
}

function mC(t, e, n, i, o, f, A, S) {
    var I = i ? t.clientY : t.clientX,
        L = i ? n.height : n.width,
        B = i ? n.top : n.left,
        U = i ? n.bottom : n.right,
        X = !1;
    if (!A) {
        if (S && zs < L * o) {
            if (!cs && (ls === 1 ? I > B + L * f / 2 : I < U - L * f / 2) && (cs = !0), cs) X = !0;
            else if (ls === 1 ? I < B + zs : I > U - zs) return -ls
        } else if (I > B + L * (1 - o) / 2 && I < U - L * (1 - o) / 2) return vC(e)
    }
    return X = X || A, X && (I < B + L * f / 2 || I > U - L * f / 2) ? I > B + L / 2 ? 1 : -1 : 0
}

function vC(t) {
    return On(Te) < On(t) ? 1 : -1
}

function yC(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function wC(t) {
    so.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && so.push(i)
    }
}

function Qs(t) {
    return setTimeout(t, 0)
}

function Da(t) {
    return clearTimeout(t)
}
yo && Ct(document, "touchmove", function(t) {
    (Ze.active || lr) && t.cancelable && t.preventDefault()
});
Ze.utils = {
    on: Ct,
    off: yt,
    css: tt,
    find: th,
    is: function(e, n) {
        return !!Un(e, n, e, !1)
    },
    extend: nC,
    throttle: nh,
    closest: Un,
    toggleClass: En,
    clone: rh,
    index: On,
    nextTick: Qs,
    cancelNextTick: Da,
    detectDirection: oh,
    getChild: vr
};
Ze.get = function(t) {
    return t[Sn]
};
Ze.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (Ze.utils = Gn(Gn({}, Ze.utils), i.utils)), ps.mount(i)
    })
};
Ze.create = function(t, e) {
    return new Ze(t, e)
};
Ze.version = $0;
var Wt = [],
    $r, Ra, Ma = !1,
    ma, va, oo, es;

function bC() {
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
            this.sortable.nativeDraggable ? Ct(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ct(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? Ct(document, "touchmove", this._handleFallbackAutoScroll) : Ct(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(n) {
            var i = n.originalEvent;
            !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i)
        },
        drop: function() {
            this.sortable.nativeDraggable ? yt(document, "dragover", this._handleAutoScroll) : (yt(document, "pointermove", this._handleFallbackAutoScroll), yt(document, "touchmove", this._handleFallbackAutoScroll), yt(document, "mousemove", this._handleFallbackAutoScroll)), mc(), Ks(), iC()
        },
        nulling: function() {
            oo = Ra = $r = Ma = es = ma = va = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var o = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                A = (n.touches ? n.touches[0] : n).clientY,
                S = document.elementFromPoint(f, A);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                ya(n, this.options, S, i);
                var I = di(S, !0);
                Ma && (!es || f !== ma || A !== va) && (es && mc(), es = setInterval(function() {
                    var L = di(document.elementFromPoint(f, A), !0);
                    L !== I && (I = L, Ks()), ya(n, o.options, L, i)
                }, 10), ma = f, va = A)
            } else {
                if (!this.options.bubbleScroll || di(S, !0) === qn()) {
                    Ks();
                    return
                }
                ya(n, this.options, di(S, !1), !1)
            }
        }
    }, ri(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Ks() {
    Wt.forEach(function(t) {
        clearInterval(t.pid)
    }), Wt = []
}

function mc() {
    clearInterval(es)
}
var ya = nh(function(t, e, n, i) {
        if (!!e.scroll) {
            var o = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                A = e.scrollSensitivity,
                S = e.scrollSpeed,
                I = qn(),
                L = !1,
                B;
            Ra !== n && (Ra = n, Ks(), $r = e.scroll, B = e.scrollFn, $r === !0 && ($r = di(n, !0)));
            var U = 0,
                X = $r;
            do {
                var ie = X,
                    K = Kt(ie),
                    re = K.top,
                    m = K.bottom,
                    M = K.left,
                    W = K.right,
                    ae = K.width,
                    se = K.height,
                    me = void 0,
                    d = void 0,
                    Ee = ie.scrollWidth,
                    _e = ie.scrollHeight,
                    Me = tt(ie),
                    lt = ie.scrollLeft,
                    Ve = ie.scrollTop;
                ie === I ? (me = ae < Ee && (Me.overflowX === "auto" || Me.overflowX === "scroll" || Me.overflowX === "visible"), d = se < _e && (Me.overflowY === "auto" || Me.overflowY === "scroll" || Me.overflowY === "visible")) : (me = ae < Ee && (Me.overflowX === "auto" || Me.overflowX === "scroll"), d = se < _e && (Me.overflowY === "auto" || Me.overflowY === "scroll"));
                var J = me && (Math.abs(W - o) <= A && lt + ae < Ee) - (Math.abs(M - o) <= A && !!lt),
                    qe = d && (Math.abs(m - f) <= A && Ve + se < _e) - (Math.abs(re - f) <= A && !!Ve);
                if (!Wt[U])
                    for (var H = 0; H <= U; H++) Wt[H] || (Wt[H] = {});
                (Wt[U].vx != J || Wt[U].vy != qe || Wt[U].el !== ie) && (Wt[U].el = ie, Wt[U].vx = J, Wt[U].vy = qe, clearInterval(Wt[U].pid), (J != 0 || qe != 0) && (L = !0, Wt[U].pid = setInterval(function() {
                    i && this.layer === 0 && Ze.active._onTouchMove(oo);
                    var oe = Wt[this.layer].vy ? Wt[this.layer].vy * S : 0,
                        ke = Wt[this.layer].vx ? Wt[this.layer].vx * S : 0;
                    typeof B == "function" && B.call(Ze.dragged.parentNode[Sn], ke, oe, t, oo, Wt[this.layer].el) !== "continue" || ih(Wt[this.layer].el, ke, oe)
                }.bind({
                    layer: U
                }), 24))), U++
            } while (e.bubbleScroll && X !== I && (X = di(X, !1)));
            Ma = L
        }
    }, 30),
    uh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            o = e.dragEl,
            f = e.activeSortable,
            A = e.dispatchSortableEvent,
            S = e.hideGhostForTarget,
            I = e.unhideGhostForTarget;
        if (!!n) {
            var L = i || f;
            S();
            var B = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                U = document.elementFromPoint(B.clientX, B.clientY);
            I(), L && !L.el.contains(U) && (A("spill"), this.onSpill({
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
        var o = vr(this.sortable.el, this.startIndex, this.options);
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
Ze.mount(new bC);
Ze.mount(dl, hl);
const CC = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    EC = si.extend({
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
    xC = Et.View.extend({
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
    vc = Et.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: xC,
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    SC = Et.View.extend({
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
            this.rankedCollectionView = this.rankedCollectionView || new vc({
                collection: new ot.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new vc({
                className: "sortable-collection unranked",
                collection: new ot.Collection([])
            }), this.lockInView = this.lockInView || new zu({
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
            this.rankedSortable && this.rankedSortable.destroy(), this.rankedCollectionView.collection.set(e), this.rankedSortable = Ze.create(this.rankedCollectionView.el, {
                group: "shared",
                onSort: this.handleOnSort.bind(this),
                animation: 100,
                delay: 100
            }), this.unrankedSortable && this.unrankedSortable.destroy(), this.unrankedCollectionView.collection.set(n), this.unrankedSortable = Ze.create(this.unrankedCollectionView.el, {
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
    IC = Et.View.extend({
        className: "Sortable scrollable",
        template: at.template(CC),
        model: new EC,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Vi({
                model: new ot.Model
            }), this.sorterView = this.sorterView || new SC({}), this.listenTo(this.model, "change", this.update, this)
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
    kC = `<div id="controller" class="state-controller controller-content">
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
    _C = si.extend({
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
    OC = Et.View.extend({
        className: "UGC scrollable",
        template: at.template(kC),
        model: new _C,
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
            this.stickit(), this.update(), It.vibrate()
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
            const e = Le(t.currentTarget).data("action");
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
            Tn.fire({
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
            Tn.fire({
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
    TC = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    LC = Et.View.extend({
        className: "RadialView",
        template: at.template(TC),
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
    BC = `<div id="status-bar" class="health text">\r
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
    DC = si.extend({
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
    RC = Et.View.extend({
        model: new DC,
        template: at.template(BC),
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
            this.client = t.client, this.radialComponent = new LC({
                model: new ot.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Le(window).on("mousemove", this.move.bind(this)), Le(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), Le(window).off("mousemove"), Le(window).off("mouseup")
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
                    It.vibrate(n)
                }
                this.notified = !0
            }
        },
        onRender() {
            this.showChildView("radial", this.radialComponent), this.stickit()
        },
        onAttach() {
            this.update(), this.onResize(), It.vibrate()
        },
        onResize() {
            const t = Le(".radial"),
                e = Le("#status-bar").outerHeight() + Le(".playerTopBar").outerHeight() + Le("#control-panel").outerHeight() + 10,
                n = Le(".controller-page").width(),
                i = window.innerHeight - e,
                o = Math.max(150, Math.min(n, i));
            t.css("width", `${o}px`), t.css("height", `${o}px`), window.scrollTo(0, 0)
        }
    }),
    MC = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
    template: at.template(MC),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new W0, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new ot.Model({});
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
                return this.setLayout(R0);
            case "EnterSingleText":
                return this.setLayout(N0);
            case "Lobby":
                return this.setLayout(q0);
            case "Logo":
                return this.setLayout(H0);
            case "MakeSingleChoice":
                return this.setLayout(K0);
            case "Shoot":
                return this.setLayout(RC);
            case "Sortable":
                return this.setLayout(IC);
            case "Camera":
                return this.setLayout(E0);
            case "UGC":
                return this.setLayout(OC);
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
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && $t.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: at.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Pi.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), Le("#textDescriptions").append(Le("<p />").text(e.text)))
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
            </div>`, this.lacksAudience ? e += "<div class='warning'>THIS GAME DOESN'T HAVE AN AUDIENCE FEATURE</div>" : this.client.roomInfo.audienceEnabled || (e += "<div class='warning'>THIS ROOM DOESN'T HAVE THE AUDIENCE SETTING ENABLED</div>"), It.show("custom", {
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
        const t = Le(window).width(),
            e = Le(window).height();
        Le(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        $t.remove("roomCode"), $t.remove("reconnect"), It.show("error", {
            titleText: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        It.show("error", {
            titleText: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: Vs[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onConnectionMessage(t) {
        const e = `${t.status} ${t.attempt?`${t.attempt}/5`:""}`;
        if (It.show("toast", {
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

        function f(I, L) {
            for (var B = I.length; B--;)
                if (I[B].listener === L) return B;
            return -1
        }

        function A(I) {
            return function() {
                return this[I].apply(this, arguments)
            }
        }
        i.getListeners = function(L) {
            var B = this._getEvents(),
                U, X;
            if (L instanceof RegExp) {
                U = {};
                for (X in B) B.hasOwnProperty(X) && L.test(X) && (U[X] = B[X])
            } else U = B[L] || (B[L] = []);
            return U
        }, i.flattenListeners = function(L) {
            var B = [],
                U;
            for (U = 0; U < L.length; U += 1) B.push(L[U].listener);
            return B
        }, i.getListenersAsObject = function(L) {
            var B = this.getListeners(L),
                U;
            return B instanceof Array && (U = {}, U[L] = B), U || B
        };

        function S(I) {
            return typeof I == "function" || I instanceof RegExp ? !0 : I && typeof I == "object" ? S(I.listener) : !1
        }
        i.addListener = function(L, B) {
            if (!S(B)) throw new TypeError("listener must be a function");
            var U = this.getListenersAsObject(L),
                X = typeof B == "object",
                ie;
            for (ie in U) U.hasOwnProperty(ie) && f(U[ie], B) === -1 && U[ie].push(X ? B : {
                listener: B,
                once: !1
            });
            return this
        }, i.on = A("addListener"), i.addOnceListener = function(L, B) {
            return this.addListener(L, {
                listener: B,
                once: !0
            })
        }, i.once = A("addOnceListener"), i.defineEvent = function(L) {
            return this.getListeners(L), this
        }, i.defineEvents = function(L) {
            for (var B = 0; B < L.length; B += 1) this.defineEvent(L[B]);
            return this
        }, i.removeListener = function(L, B) {
            var U = this.getListenersAsObject(L),
                X, ie;
            for (ie in U) U.hasOwnProperty(ie) && (X = f(U[ie], B), X !== -1 && U[ie].splice(X, 1));
            return this
        }, i.off = A("removeListener"), i.addListeners = function(L, B) {
            return this.manipulateListeners(!1, L, B)
        }, i.removeListeners = function(L, B) {
            return this.manipulateListeners(!0, L, B)
        }, i.manipulateListeners = function(L, B, U) {
            var X, ie, K = L ? this.removeListener : this.addListener,
                re = L ? this.removeListeners : this.addListeners;
            if (typeof B == "object" && !(B instanceof RegExp))
                for (X in B) B.hasOwnProperty(X) && (ie = B[X]) && (typeof ie == "function" ? K.call(this, X, ie) : re.call(this, X, ie));
            else
                for (X = U.length; X--;) K.call(this, B, U[X]);
            return this
        }, i.removeEvent = function(L) {
            var B = typeof L,
                U = this._getEvents(),
                X;
            if (B === "string") delete U[L];
            else if (L instanceof RegExp)
                for (X in U) U.hasOwnProperty(X) && L.test(X) && delete U[X];
            else delete this._events;
            return this
        }, i.removeAllListeners = A("removeEvent"), i.emitEvent = function(L, B) {
            var U = this.getListenersAsObject(L),
                X, ie, K, re, m;
            for (re in U)
                if (U.hasOwnProperty(re))
                    for (X = U[re].slice(0), K = 0; K < X.length; K++) ie = X[K], ie.once === !0 && this.removeListener(L, ie.listener), m = ie.listener.apply(this, B || []), m === this._getOnceReturnValue() && this.removeListener(L, ie.listener);
            return this
        }, i.trigger = A("emitEvent"), i.emit = function(L) {
            var B = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(L, B)
        }, i.setOnceReturnValue = function(L) {
            return this._onceReturnValue = L, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = o, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : mt || {})
})(hh);
const PC = hh.exports;
class NC extends PC {
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
                o === "room" || o === "bc:room" || o === "roomBlob" ? (f instanceof Ti.TextEntity && (i.room = f.toBlob()), f instanceof Ti.ObjectEntity && (i.room = f.val)) : o === "player" || o === `player:${this.id}` || o === `bc:customer:${this.userId}` ? (f instanceof Ti.TextEntity && (i.player = f.toBlob()), f instanceof Ti.ObjectEntity && (i.player = f.val)) : o === "audiencePlayer" && (f instanceof Ti.TextEntity && (i.audiencePlayer = f.toBlob()), f instanceof Ti.ObjectEntity && (i.audiencePlayer = f.val))
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
        const A = f;
        i === "room" ? this.emit("client:entityDidChange", i, A) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", A) : i === "bc:room" ? this.emit("client:entityDidChange", "room", A) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", A) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", A) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
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
                const A = (f = (o = this.host) == null ? void 0 : o.id) != null ? f : "1";
                await this.wsClient.mail(A, i)
            } else await this.wsClient.send(n, i)
        } catch (A) {
            console.error(A)
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
const VC = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(Le)
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
        caret: function(A, S) {
            var I;
            if (this.length !== 0 && !this.is(":hidden")) return typeof A == "number" ? (S = typeof S == "number" ? S : A, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(A, S) : this.createTextRange && (I = this.createTextRange(), I.collapse(!0), I.moveEnd("character", S), I.moveStart("character", A), I.select())
            })) : (this[0].setSelectionRange ? (A = this[0].selectionStart, S = this[0].selectionEnd) : document.selection && document.selection.createRange && (I = document.selection.createRange(), A = 0 - I.duplicate().moveStart("character", -1e5), S = A + I.text.length), {
                begin: A,
                end: S
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(A, S) {
            var I, L, B, U, X, ie, K, re;
            if (!A && this.length > 0) {
                I = t(this[0]);
                var m = I.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return S = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, S), L = t.mask.definitions, B = [], U = K = A.length, X = null, t.each(A.split(""), function(M, W) {
                W == "?" ? (K--, U = M) : L[W] ? (B.push(new RegExp(L[W])), X === null && (X = B.length - 1), U > M && (ie = B.length - 1)) : B.push(null)
            }), this.trigger("unmask").each(function() {
                function M() {
                    if (S.completed) {
                        for (var ve = X; ie >= ve; ve++)
                            if (B[ve] && oe[ve] === W(ve)) return;
                        S.completed.call(H)
                    }
                }

                function W(ve) {
                    return S.placeholder.charAt(ve < S.placeholder.length ? ve : 0)
                }

                function ae(ve) {
                    for (; ++ve < K && !B[ve];);
                    return ve
                }

                function se(ve) {
                    for (; --ve >= 0 && !B[ve];);
                    return ve
                }

                function me(ve, ue) {
                    var xe, Ie;
                    if (!(0 > ve)) {
                        for (xe = ve, Ie = ae(ue); K > xe; xe++)
                            if (B[xe]) {
                                if (!(K > Ie && B[xe].test(oe[Ie]))) break;
                                oe[xe] = oe[Ie], oe[Ie] = W(Ie), Ie = ae(Ie)
                            } J(), H.caret(Math.max(X, ve))
                    }
                }

                function d(ve) {
                    var ue, xe, Ie, Ue;
                    for (ue = ve, xe = W(ve); K > ue; ue++)
                        if (B[ue]) {
                            if (Ie = ae(ue), Ue = oe[ue], oe[ue] = xe, !(K > Ie && B[Ie].test(Ue))) break;
                            xe = Ue
                        }
                }

                function Ee() {
                    var ve = H.val(),
                        ue = H.caret();
                    if (re && re.length && re.length > ve.length) {
                        for (qe(!0); ue.begin > 0 && !B[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < X && !B[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    } else {
                        for (qe(!0); ue.begin < K && !B[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    }
                    M()
                }

                function _e() {
                    qe(), H.val() != ye && H.change()
                }

                function Me(ve) {
                    if (!H.prop("readonly")) {
                        var ue, xe, Ie, Ue = ve.which || ve.keyCode;
                        re = H.val(), Ue === 8 || Ue === 46 || i && Ue === 127 ? (ue = H.caret(), xe = ue.begin, Ie = ue.end, Ie - xe === 0 && (xe = Ue !== 46 ? se(xe) : Ie = ae(xe - 1), Ie = Ue === 46 ? ae(Ie) : Ie), Ve(xe, Ie), me(xe, Ie - 1), ve.preventDefault()) : Ue === 13 ? _e.call(this, ve) : Ue === 27 && (H.val(ye), H.caret(0, qe()), ve.preventDefault())
                    }
                }

                function lt(ve) {
                    if (!H.prop("readonly")) {
                        var ue, xe, Ie, Ue = ve.which || ve.keyCode,
                            Je = H.caret();
                        if (!(ve.ctrlKey || ve.altKey || ve.metaKey || 32 > Ue) && Ue && Ue !== 13) {
                            if (Je.end - Je.begin !== 0 && (Ve(Je.begin, Je.end), me(Je.begin, Je.end - 1)), ue = ae(Je.begin - 1), K > ue && (xe = String.fromCharCode(Ue), B[ue].test(xe))) {
                                if (d(ue), oe[ue] = xe, J(), Ie = ae(ue), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, H, Ie)()
                                    };
                                    setTimeout(dt, 0)
                                } else H.caret(Ie);
                                Je.begin <= ie && M()
                            }
                            ve.preventDefault()
                        }
                    }
                }

                function Ve(ve, ue) {
                    var xe;
                    for (xe = ve; ue > xe && K > xe; xe++) B[xe] && (oe[xe] = W(xe))
                }

                function J() {
                    H.val(oe.join(""))
                }

                function qe(ve) {
                    var ue, xe, Ie, Ue = H.val(),
                        Je = -1;
                    for (ue = 0, Ie = 0; K > ue; ue++)
                        if (B[ue]) {
                            for (oe[ue] = W(ue); Ie++ < Ue.length;)
                                if (xe = Ue.charAt(Ie - 1), B[ue].test(xe)) {
                                    oe[ue] = xe, Je = ue;
                                    break
                                } if (Ie > Ue.length) {
                                Ve(ue + 1, K);
                                break
                            }
                        } else oe[ue] === Ue.charAt(Ie) && Ie++, U > ue && (Je = ue);
                    return ve ? J() : U > Je + 1 ? S.autoclear || oe.join("") === ke ? (H.val() && H.val(""), Ve(0, K)) : J() : (J(), H.val(H.val().substring(0, Je + 1))), U ? ue : X
                }
                var H = t(this),
                    oe = t.map(A.split(""), function(ve, ue) {
                        return ve != "?" ? L[ve] ? W(ue) : ve : void 0
                    }),
                    ke = oe.join(""),
                    ye = H.val();
                H.data(t.mask.dataName, function() {
                    return t.map(oe, function(ve, ue) {
                        return B[ue] && ve != W(ue) ? ve : null
                    }).join("")
                }), H.one("unmask", function() {
                    H.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!H.prop("readonly")) {
                        clearTimeout(e);
                        var ve;
                        ye = H.val(), ve = qe(), e = setTimeout(function() {
                            H.get(0) === document.activeElement && (J(), ve == A.replace("?", "").length ? H.caret(0, ve) : H.caret(ve))
                        }, 10)
                    }
                }).on("blur.mask", _e).on("keydown.mask", Me).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    H.prop("readonly") || setTimeout(function() {
                        var ve = qe(!0);
                        H.caret(ve), M()
                    }, 0)
                }), o && f && H.off("input.mask").on("input.mask", Ee), qe()
            })
        }
    })
});
window.$ = Le;
window.jQuery = Le;
const UC = Et.View.extend({
        className: "app-root",
        template: at.template(VC),
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
    jC = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Ti.WSClient(n), e.connect()),
            mount: n => {
                const i = new NC(e, n);
                let o = new Et.Application({
                    region: "#app",
                    onStart() {
                        const f = new UC;
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
    qC = "main/pp2/earwax/assets/87637680.gif",
    GC = "main/pp2/earwax/assets/50637d4b.gif",
    FC = "main/pp2/earwax/assets/58fc114f.gif",
    HC = "main/pp2/earwax/assets/5158e9ab.gif",
    YC = "main/pp2/earwax/assets/0bc67431.gif",
    WC = "main/pp2/earwax/assets/5e8e271e.gif",
    zC = "main/pp2/earwax/assets/e23b4086.gif",
    QC = "main/pp2/earwax/assets/6ef4c48d.gif",
    KC = "main/pp2/earwax/assets/59b28d2b.gif",
    JC = "main/pp2/earwax/assets/1af191e0.gif",
    XC = "main/pp2/earwax/assets/e49af413.gif",
    ZC = "main/pp2/earwax/assets/9f666bf9.gif",
    $C = "main/pp2/earwax/assets/64bf4b91.gif",
    eE = "main/pp2/earwax/assets/d28c5bf0.gif",
    tE = "main/pp2/earwax/assets/c76331de.gif",
    nE = "main/pp2/earwax/assets/ad54af62.gif",
    iE = "main/pp2/earwax/assets/7b2b09f9.gif",
    rE = "main/pp2/earwax/assets/38676708.gif",
    sE = "main/pp2/earwax/assets/5fcf9f16.gif",
    oE = "main/pp2/earwax/assets/7b798d87.gif",
    aE = "main/pp2/earwax/assets/98c07434.gif",
    lE = "main/pp2/earwax/assets/58b33b64.gif",
    cE = "main/pp2/earwax/assets/c2780970.gif",
    uE = "main/pp2/earwax/assets/c2b6d51b.gif",
    hE = "main/pp2/earwax/assets/96d621d4.gif",
    dE = "main/pp2/earwax/assets/84c7c06c.gif",
    fE = "main/pp2/earwax/assets/85a401d9.gif",
    pE = "main/pp2/earwax/assets/5b8ead3c.gif",
    gE = "main/pp2/earwax/assets/c63b650c.gif",
    AE = "main/pp2/earwax/assets/eed635a1.gif",
    mE = "main/pp2/earwax/assets/674e1116.gif",
    vE = "main/pp2/earwax/assets/e3820f54.gif",
    yE = "main/pp2/earwax/assets/7bd0ab38.gif",
    wE = "main/pp2/earwax/assets/569f1c99.gif",
    bE = "main/pp2/earwax/assets/090e3bb3.gif",
    CE = "main/pp2/earwax/assets/7ddd9b04.gif",
    EE = "main/pp2/earwax/assets/d40b8222.gif",
    xE = "main/pp2/earwax/assets/11508c9c.gif",
    SE = "main/pp2/earwax/assets/5821c8be.gif",
    IE = "main/pp2/earwax/assets/3e22e77b.gif",
    kE = "main/pp2/earwax/assets/dd60ea7c.gif",
    _E = "main/pp2/earwax/assets/aea51170.gif",
    OE = "main/pp2/earwax/assets/3868ce76.gif",
    TE = "main/pp2/earwax/assets/289af6f6.gif",
    LE = "main/pp2/earwax/assets/95df6c91.gif",
    BE = "main/pp2/earwax/assets/d394a751.gif",
    DE = "main/pp2/earwax/assets/b69cca85.gif",
    RE = "main/pp2/earwax/assets/1e4ad104.gif",
    ME = "main/pp2/earwax/assets/96d872dd.gif",
    PE = "main/pp2/earwax/assets/bb4bc643.gif",
    NE = "main/pp2/earwax/assets/d23a6d67.gif",
    VE = "main/pp2/earwax/assets/85f15a83.gif",
    UE = "main/pp2/earwax/assets/de28ec7f.gif",
    jE = "main/pp2/earwax/assets/104ae8b4.gif",
    qE = "main/pp2/earwax/assets/172b5ad7.gif",
    GE = "main/pp2/earwax/assets/e6247376.gif",
    FE = "main/pp2/earwax/assets/39bd090b.gif",
    HE = "main/pp2/earwax/assets/12727718.gif",
    YE = "main/pp2/earwax/assets/4d089df0.gif",
    WE = "main/pp2/earwax/assets/f4019297.gif",
    zE = "main/pp2/earwax/assets/c3d4f0f5.gif",
    QE = "main/pp2/earwax/assets/e03b47e4.gif",
    KE = "main/pp2/earwax/assets/6fb14b94.gif",
    JE = "main/pp2/earwax/assets/05d6e263.gif",
    XE = "main/pp2/earwax/assets/90635e5b.gif",
    ZE = "main/pp2/earwax/assets/1ede170b.gif",
    $E = "main/pp2/earwax/assets/221b91fc.gif",
    ex = "main/pp2/earwax/assets/8938b36a.gif",
    tx = "main/pp2/earwax/assets/fa5f2109.gif",
    nx = "main/pp2/earwax/assets/ff68bdc1.gif",
    ix = "main/pp2/earwax/assets/f2ea254f.gif",
    rx = "main/pp2/earwax/assets/0c11d751.gif",
    sx = "main/pp2/earwax/assets/8a91c5c8.gif",
    ox = "main/pp2/earwax/assets/a4db64f5.gif",
    ax = "main/pp2/earwax/assets/477fb762.gif",
    lx = "main/pp2/earwax/assets/a4f23ebc.gif",
    cx = "main/pp2/earwax/assets/824647cb.gif",
    ux = "main/pp2/earwax/assets/73f7e1ea.gif",
    hx = "main/pp2/earwax/assets/b332ab96.gif",
    dx = "main/pp2/earwax/assets/1a0f4d52.gif",
    fx = "main/pp2/earwax/assets/03232ec8.gif",
    px = "main/pp2/earwax/assets/0c0101d6.gif",
    gx = "main/pp2/earwax/assets/09a13850.gif",
    Ax = "main/pp2/earwax/assets/e373dc72.gif",
    mx = `<div id="page-earwax" class="page">\r
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700' rel='stylesheet' type='text/css'>\r
    \r
    <div id="player">\r
        <img id="player-character" src="main/pp2/earwax/earwax/cookie_standard.gif" /><span>&nbsp;<%=username%></span>\r
    </div>\r
\r
    <div id="earwax-preload1" class="earwax-preload1"></div>\r
    <div id="earwax-preload2" class="earwax-preload2"></div>\r
    <div id="earwax-preload3" class="earwax-preload3"></div>\r
    <div id="earwax-preload4" class="earwax-preload4"></div>\r
    <div id="earwax-preload5" class="earwax-preload5"></div>\r
    <div id="earwax-preload6" class="earwax-preload6"></div>\r
    <div id="earwax-preload7" class="earwax-preload7"></div>\r
\r
\r
\r
    <div id="game" class="game pt-pageholder">\r
        <div id="state-lobby" class="pt-page-off earwax-page">\r
            <div class="container">\r
                <br /><span id="earwax-lobby-text"></span><br />\r
                <form class="pure-form">\r
                    <button type="button" id="earwax-startgame" class="button-earwax button-xlarge pure-button pure-input-1">EVERYBODY'S IN</button>\r
                    <button type="button" id="earwax-stopcountdown" class="button-earwax  button-xlarge pure-button pure-input-1">CANCEL</button>\r
                    <button type="button" id="earwax-sameplayers" class="button-earwax  button-xlarge pure-button pure-input-1 earwax-endbuttons">SAME PLAYERS</button>\r
                    <button type="button" id="earwax-newplayers" class="button-earwax  button-xlarge pure-button pure-input-1 earwax-endbuttons">NEW PLAYERS</button>    \r
                </form>\r
            </div>\r
        </div>\r
\r
        <div id="state-intro" class="pt-page-off earwax-page">\r
            <div class="container">\r
                <div class="logo-image" style="width:75%; height:75%; margin-left:auto; margin-right:auto;">\r
                    <img class="pure-img" style="margin-left:auto; margin-right:auto;"  src='main/pp2/earwax/earwax/logo.png'>\r
                </div>\r
                <form class="pure-form">\r
                    <button type="button" id="earwax-skipintro" class="button-earwax  button-xlarge pure-button pure-input-1">SKIP INSTRUCTIONS >></button>\r
                </form>\r
            </div>\r
        </div>\r
\r
        <div id="state-logo" class="pt-page-off earwax-page">\r
            <div class="logo-image" style="width:75%; height:75%; margin-left:auto; margin-right:auto;">\r
                <img class="pure-img" style="margin-left:auto; margin-right:auto;"  src='main/pp2/earwax/earwax/logo.png'>\r
            </div>\r
        </div>\r
\r
		<div class="pt-page-off state-choosing earwax-page">\r
			<div class="container">\r
				<br /><span>PICK A PROMPT</span><br />\r
				<div class="button-container">\r
					<form class="pure-form">\r
						<fieldset class="button-fieldset">\r
						</fieldset>\r
					</form>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-notchoosing earwax-page">\r
			<br /><span id="notchoosing"></span><br />\r
		</div>\r
\r
		<div  id="state-notselectingsound" class="pt-page-off earwax-page">\r
			<br /><span id="notselectingsound"></span><br />\r
		</div>\r
\r
		<div id="state-selectingsound" class="pt-page-off earwax-page">\r
			<div class="container">\r
				<br /><span id="selectingsound"></span><br />\r
				<div class="button-container">\r
					<form class="pure-form">\r
						<fieldset class="button-fieldset">\r
						</fieldset>\r
					</form>\r
				</div>\r
			</div>\r
		</div>		\r
\r
		<div class="pt-page-off state-audience-join earwax-page">\r
			<br /><span>YOU'VE JOINED THE AUDIENCE!<br />WAITING FOR NEXT QUESTION TO START.</span><br />\r
		</div>\r
\r
        <div id="state-audience-wait" class="pt-page-off earwax-page">\r
            <br/><div class="state-audience-main"><br /><span class='state-audience-wait-text'></span><br /></div>\r
        </div>\r
\r
        <div id="state-answer-question-audience" class="pt-page-off earwax-page">\r
            <br/><div class="state-answer-question-audience-main"><br /><span class='state-answer-question-audience-text'></span><br /></div>\r
        </div>\r
\r
        <div id="state-vote" class="pt-page-off earwax-page">\r
            <div class="container">\r
                <br/>\r
                <span id="question-text"></span>\r
                <br/>\r
                <br/>\r
                <span id="vote-text"></span>\r
                <br/>\r
                <br/>\r
                <form id="earwax-vote" class="pure-form"></form>\r
            </div>\r
        </div>\r
    </div>\r
</div>\r
`;
const vx = lc.extend({
    template: at.template(mx),
    testBlob: null,
    clickEnabled: !1,
    audioContext: void 0,
    soundExtension: void 0,
    soundBaseUrl: "https://s3.amazonaws.com/earwax.jackboxgames.com/sfx/",
    soundsList: [{
        index: 0,
        state: "_SoundStateEnum.undefined",
        request: void 0
    }, {
        index: 1,
        state: "_SoundStateEnum.undefined",
        request: void 0
    }],
    events: {
        "click #earwax-startgame": "startGame",
        "click #earwax-stopcountdown": "stopCountdown",
        "click #earwax-skipintro": "skipIntro",
        "click #earwax-sameplayers": "newGameSamePlayers",
        "click #earwax-newplayers": "newGameNewPlayers",
        "click .earwax-playlocal": "playLocal",
        "click .earwax-play": "play",
        "click .earwax-vote": "vote",
        "click .earwax-like": "like",
        "click .earwax-category": "chooseCategory",
        "click .earwax-sound": "chooseSound"
    },
    initialize(t) {
        lc.prototype.initialize.apply(this, [t]), this.soundInit(), this.getSoundExtension(), this.soundPlaySingle("00_Hi")
    },
    soundInit() {
        if (!(typeof this.audioContext < "u") && !/iPad|iPhone|iPod/.test(navigator.platform)) try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext, this.audioContext = new AudioContext, this.soundsList[0].soundsList = this.soundsList, this.soundsList[1].soundsList = this.soundsList
        } catch {
            console.error("ERROR: Web Audio API not supported.")
        }
    },
    getSoundExtension() {
        return typeof this.soundExtension < "u" ? this.soundExtension : (this.soundExtension = new Audio().canPlayType("audio/ogg") !== "" ? ".ogg" : ".mp3", this.soundExtension)
    },
    soundLoad(t) {
        t.state === "_SoundStateEnum.undefined" && (t.state = "_SoundStateEnum.loading", t.request = new XMLHttpRequest, t.request.open("GET", this.soundBaseUrl + t.src + this.getSoundExtension(), !0), t.request.responseType = "arraybuffer", t.audioContext = this.audioContext, t.soundPlay = this.soundPlay, t.request.onload = function() {
            t.audioContext.decodeAudioData(t.request.response, n => {
                t.state = "_SoundStateEnum.loaded", t.buffer = n, (t.index === 0 || t.soundsList[0].state === "_SoundStateEnum.completed") && t.soundPlay(t)
            }, n => {
                throw t.state = "_SoundStateEnum.undefined", new Error(n)
            })
        }, t.request.onerror = function(n) {
            console.error("There was an error!", n)
        }, t.request.send())
    },
    soundPlay(t) {
        if (t.state === "_SoundStateEnum.undefined") {
            this.soundLoad(t);
            return
        }
        t.state = "_SoundStateEnum.playing", t.source = t.audioContext.createBufferSource(), t.source.buffer = t.buffer, t.source.connect(t.audioContext.destination), t.source.onended = function() {
            t.state = "_SoundStateEnum.completed", t.index === 0 && (t.soundsList[1].state === "_SoundStateEnum.loaded" || t.soundsList[1].state === "_SoundStateEnum.completed") && t.soundPlay(t.soundsList[1])
        }, t.source.start(0)
    },
    soundStop(t) {
        t.state === "_SoundStateEnum.playing" && (t.source.onended = null, t.state = "_SoundStateEnum.loaded", t.source.stop())
    },
    soundsPlay(t, e) {
        this.audioContext == null || typeof this.audioContext > "u" || (this.soundStop(this.soundsList[0]), this.soundStop(this.soundsList[1]), this.soundsList[0].src !== t && (this.soundsList[0].src = t, this.soundsList[0].state = "_SoundStateEnum.undefined"), this.soundsList[1].src !== e && (this.soundsList[1].src = e, this.soundsList[1].state = "_SoundStateEnum.undefined", this.soundLoad(this.soundsList[1])), this.soundPlay(this.soundsList[0]))
    },
    soundPlaySingle(t) {
        this.audioContext == null || typeof this.audioContext > "u" || (this.soundStop(this.soundsList[0]), this.soundStop(this.soundsList[1]), this.soundsList[0].src !== t && (this.soundsList[0].src = t, this.soundsList[0].state = "_SoundStateEnum.undefined"), this.soundPlay(this.soundsList[0]))
    },
    async update() {
        this.client.isRole("audience") ? this.updateAudience() : this.model.get("player") && this.updatePlayer(), this.onResize()
    },
    async updatePlayer() {
        if (!this.model.get("room")) {
            this.showScreen("#state-logo");
            return
        }
        const t = this.model.get("room"),
            e = this.model.get("player") ? this.model.get("player") : {},
            n = e ? e.state : "",
            i = t ? t.state : "";
        if (e !== void 0 && e.character !== void 0 && e.animation !== void 0) {
            const o = new URL(Object.assign({
                "../images/characters/apple_happy.gif": qC,
                "../images/characters/apple_lost.gif": GC,
                "../images/characters/apple_standard.gif": FC,
                "../images/characters/apple_win.gif": HC,
                "../images/characters/bat_happy.gif": YC,
                "../images/characters/bat_lost.gif": WC,
                "../images/characters/bat_standard.gif": zC,
                "../images/characters/bat_win.gif": QC,
                "../images/characters/bunny_happy.gif": KC,
                "../images/characters/bunny_lost.gif": JC,
                "../images/characters/bunny_standard.gif": XC,
                "../images/characters/bunny_win.gif": ZC,
                "../images/characters/cathat_happy.gif": $C,
                "../images/characters/cathat_lost.gif": eE,
                "../images/characters/cathat_standard.gif": tE,
                "../images/characters/cathat_win.gif": nE,
                "../images/characters/chick_happy.gif": iE,
                "../images/characters/chick_lost.gif": rE,
                "../images/characters/chick_standard.gif": sE,
                "../images/characters/chick_win.gif": oE,
                "../images/characters/cookie_happy.gif": aE,
                "../images/characters/cookie_lost.gif": lE,
                "../images/characters/cookie_standard.gif": cE,
                "../images/characters/cookie_win.gif": uE,
                "../images/characters/dolphin_happy.gif": hE,
                "../images/characters/dolphin_lost.gif": dE,
                "../images/characters/dolphin_standard.gif": fE,
                "../images/characters/dolphin_win.gif": pE,
                "../images/characters/egg_happy.gif": gE,
                "../images/characters/egg_lost.gif": AE,
                "../images/characters/egg_standard.gif": mE,
                "../images/characters/egg_win.gif": vE,
                "../images/characters/hat_happy.gif": yE,
                "../images/characters/hat_lost.gif": wE,
                "../images/characters/hat_standard.gif": bE,
                "../images/characters/hat_win.gif": CE,
                "../images/characters/icecream_happy.gif": EE,
                "../images/characters/icecream_lost.gif": xE,
                "../images/characters/icecream_standard.gif": SE,
                "../images/characters/icecream_win.gif": IE,
                "../images/characters/mime_happy.gif": kE,
                "../images/characters/mime_lost.gif": _E,
                "../images/characters/mime_standard.gif": OE,
                "../images/characters/mime_win.gif": TE,
                "../images/characters/monkey_happy.gif": LE,
                "../images/characters/monkey_lost.gif": BE,
                "../images/characters/monkey_standard.gif": DE,
                "../images/characters/monkey_win.gif": RE,
                "../images/characters/moon_happy.gif": ME,
                "../images/characters/moon_lost.gif": PE,
                "../images/characters/moon_standard.gif": NE,
                "../images/characters/moon_win.gif": VE,
                "../images/characters/octopus_happy.gif": UE,
                "../images/characters/octopus_lost.gif": jE,
                "../images/characters/octopus_standard.gif": qE,
                "../images/characters/octopus_win.gif": GE,
                "../images/characters/plate_happy.gif": FE,
                "../images/characters/plate_lost.gif": HE,
                "../images/characters/plate_standard.gif": YE,
                "../images/characters/plate_win.gif": WE,
                "../images/characters/poop_happy.gif": zE,
                "../images/characters/poop_lost.gif": QE,
                "../images/characters/poop_standard.gif": KE,
                "../images/characters/poop_win.gif": JE,
                "../images/characters/pot_happy.gif": XE,
                "../images/characters/pot_lost.gif": ZE,
                "../images/characters/pot_standard.gif": $E,
                "../images/characters/pot_win.gif": ex,
                "../images/characters/seal_happy.gif": tx,
                "../images/characters/seal_lost.gif": nx,
                "../images/characters/seal_standard.gif": ix,
                "../images/characters/seal_win.gif": rx,
                "../images/characters/toast_happy.gif": sx,
                "../images/characters/toast_lost.gif": ox,
                "../images/characters/toast_standard.gif": ax,
                "../images/characters/toast_win.gif": lx,
                "../images/characters/tuxbunny_happy.gif": cx,
                "../images/characters/tuxbunny_lost.gif": ux,
                "../images/characters/tuxbunny_standard.gif": hx,
                "../images/characters/tuxbunny_win.gif": dx,
                "../images/characters/tv_happy.gif": fx,
                "../images/characters/tv_lost.gif": px,
                "../images/characters/tv_standard.gif": gx,
                "../images/characters/tv_win.gif": Ax
            })[`../images/characters/${e.character}_${e.animation}.gif`], self.location).href;
            this.$el.find("#player-character").attr("src", o)
        }
        if (this.currentAnswerQuestionId = -1, n === "RoomFull") {
            It.show(Error("The room is full"), {
                willClose: () => {
                    window.location.reload(!0)
                }
            });
            return
        }
        if (n === "GameLocked") It.show(Error("Game is in progress. Please wait for a new game to start."), {
            willClose: () => {
                window.location.reload(!0)
            }
        });
        else if (i && i === "Lobby") {
            if (this.hideLobbyButtons(), !e.isAllowedToStartGame) {
                this.$el.find("#earwax-lobby-text").html("Sit back and relax!"), this.showScreen("#state-lobby");
                return
            }
            const o = t.lobbyState;
            o === "WaitingForMore" ? this.$el.find("#earwax-lobby-text").html("Waiting for more players") : o === "CanStart" ? (this.$el.find("#earwax-lobby-text").html("Waiting for more players"), this.$el.find("#earwax-startgame").show()) : o === "Countdown" ? (this.$el.find("#earwax-lobby-text").html("Press to cancel game start"), this.$el.find("#earwax-stopcountdown").show()) : o === "PostGame" && (this.$el.find("#earwax-lobby-text").html("What do you want to do?"), Le(".earwax-endbuttons").show()), this.showScreen("#state-lobby")
        } else if (i === "Gameplay_Logo") n === "GameIntro" ? (this.$el.find("#earwax-skipintro").show(), this.showScreen("#state-intro")) : this.showScreen("#state-logo");
        else if (i === "Gameplay_CategorySelection" && n === "Gameplay_CategorySelection")
            if (e.isChoosing) {
                let o = "";
                const f = t.choices || [];
                for (let A = 0; A < f.length; A++) o += `<button type="button" data-num="${A}" class="earwax-category button-earwax button-large pure-button pure-input-1">${f[A]}</button>`;
                Le(".button-fieldset").html(o), this.showScreen(".state-choosing")
            } else this.$el.find("#notchoosing").html(`${t.choosingPlayerName} is picking a prompt`), this.showScreen(".state-notchoosing");
        else if (i === "Gameplay_SoundSelection" && n === "Gameplay_SoundSelection")
            if (e.isSelecting) {
                let o = "",
                    f = !0;
                for (let A = 0; A < e.choices.length; A++) e.choices[A].picked ? (o += `<button type="button" data-num="-1" class="button-earwax button-large pure-input-1" disabled>${e.choices[A].name}</button>`, f = !1) : o += `<button type="button" data-num="${e.choices[A].id}" class="earwax-sound button-earwax button-large pure-button pure-input-1">${e.choices[A].name}</button>`;
                f ? this.$el.find("#selectingsound").html(`Pick first sound for:<br>${t.prompt}`) : this.$el.find("#selectingsound").html(`Pick second sound for:<br>${t.prompt}`), Le(".button-fieldset").html(o), this.showScreen("#state-selectingsound"), this.clickEnabled = !0
            } else this.$el.find("#notselectingsound").html("Waiting for other players"), this.showScreen("#state-notselectingsound");
        else if (i === "Gameplay_SoundSelection" && n === "Gameplay_SoundSelected") this.$el.find("#notselectingsound").html("Waiting for players to pick sounds"), this.showScreen("#state-notselectingsound");
        else if (i === "Gameplay_Vote" && n === "Gameplay_Vote") {
            t.prompt ? this.$el.find("#state-vote #question-text").html(t.prompt.replace(/<BLANK>/gi, "________")) : this.$el.find("#state-vote #question-text").html("");
            let o = "";
            if (e.isChoosing) {
                this.$el.find("#vote-text").html("PICK A WINNER");
                const f = t.choices || [];
                if (t.remote && this.audioContext != null && typeof this.audioContext < "u")
                    for (let A = 0; A < f.length; A++) o += '<div class="pure-form pure-g">', o += '<div class="pure-u-3-4 pure-u-md-6-8">', o += `<button type="button" data-vote="${A}" class="earwax-vote button-earwax-vote button-earwax button-large pure-button pure-input-1">${f[A].name}</button>`, o += "</div>", o += '<div class="pure-u-1-8 pure-u-md-1-8">', o += `<button type="button" aria-label="play" data-play="${A}" class="earwax-play  button-earwax-play button-earwax button-large pure-button pure-input-1">&nbsp;&nbsp;</button>`, o += "</div>", o += '<div class="pure-u-1-8  pure-u-md-1-8">', o += `<button type="button" aria-label="play locally" data-play="${f[A].id1}_${f[A].id2}" class="earwax-playlocal button-earwax-playLocal button-earwax button-large pure-button pure-input-1">&nbsp;&nbsp;</button>`, o += "</div>", o += "</div>";
                else
                    for (let A = 0; A < f.length; A++) o += '<div class="pure-form pure-g">', o += '<div class="pure-u-3-4 pure-u-md-7-8">', o += `<button type="button" data-vote="${A}" class="earwax-vote button-earwax-vote button-earwax button-large pure-button pure-input-1">${f[A].name}</button>`, o += "</div>", o += '<div class="pure-u-1-6 pure-u-md-1-8">', o += `<button type="button" aria-label="play" data-play="${A}" class="earwax-play button-earwax-play button-earwax button-large pure-button pure-input-1">&nbsp;&nbsp;</button>`, o += "</div>", o += "</div>"
            } else {
                this.$el.find("#vote-text").html("VOTE 4 FAVE");
                const f = t.choices || [];
                for (let A = 0; A < f.length; A++) e.choices[A].disabled || (o += `<button type="button" data-like="${A}" class="earwax-like button-earwax button-large pure-button pure-input-1">${f[A].name}</button>`)
            }
            this.notify(), this.$el.find("#earwax-vote").html(o), this.showScreen("#state-vote")
        }
    },
    updateAudience() {
        const t = this.model.get("room"),
            e = t ? t.state : "";
        if (e === "Gameplay_Vote") {
            t.prompt ? this.$el.find("#state-vote #question-text").html(t.prompt.replace(/<BLANK>/gi, "________")) : this.$el.find("#state-vote #question-text").html(""), this.$el.find("#vote-text").html("VOTE 4 FAVE");
            let n = "";
            const i = t.choices || [];
            for (let o = 0; o < i.length; o++) n += `<button type="button" data-like="${o}" class="pure-input-1 earwax-like button-large pure-button button-earwax">${i[o].name}</button>`;
            this.notify(), this.$el.find("#earwax-vote").html(n), this.showScreen("#state-vote")
        } else e === "Gameplay_CategorySelection" || e === "Gameplay_SoundSelection" ? (Le(".state-audience-wait-text").html("You\u2019re in the audience! Wait for the time to vote."), this.showScreen("#state-audience-wait")) : e === "Gameplay_Logo" ? this.showScreen("#state-logo") : this.showScreen(".state-audience-join")
    },
    hideLobbyButtons() {
        this.$el.find("#earwax-startgame").hide(), this.$el.find("#earwax-stopcountdown").hide(), Le(".earwax-endbuttons").hide()
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
    skipIntro() {
        return this.showScreen("#state-logo"), this.client.send("SendMessageToRoomOwner", {
            skipIntro: !0
        }), !1
    },
    chooseCategory(t) {
        this.showScreen("#state-logo");
        const e = Le(t.target).data("num");
        return this.client.send("SendMessageToRoomOwner", {
            chosenCategory: e
        }), !1
    },
    chooseSound(t) {
        if (!this.clickEnabled) return !1;
        this.clickEnabled = !1;
        const e = Le(t.target).data("num");
        return this.client.send("SendMessageToRoomOwner", {
            chosenSound: e
        }), !1
    },
    playLocal(t) {
        const e = Le(t.target).data("play").split("_");
        return this.client.isRole("player") && this.soundsPlay(e[0], e[1]), !1
    },
    vote(t) {
        const e = Le(t.target).data("vote");
        return this.client.isRole("player") && this.client.send("SendMessageToRoomOwner", {
            vote: e
        }), !1
    },
    play(t) {
        const e = Le(t.target).data("play");
        return this.client.isRole("player") && this.client.send("SendMessageToRoomOwner", {
            play: e
        }), Le(t.target).blur(), !1
    },
    like(t) {
        const e = Le(t.target).data("like");
        return this.client.isRole("player") ? this.client.send("SendMessageToRoomOwner", {
            like: e
        }) : this.client.isRole("audience") && (this.client.sessionSend("vote", "Earwax Vote", {
            type: "vote",
            vote: e
        }), this.$el.find("#vote-text").html("Thanks, audience member!"), this.$el.find("#earwax-vote").html(""), this.showScreen("#state-vote")), !1
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
    sanitize(t) {
        return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "\u2019").trim()
    }
});
jC({
    MainView: vx
});
//# sourceMappingURL=bf8c3f65.js.map