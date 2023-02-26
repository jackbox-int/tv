var bh = Object.defineProperty;
var wh = (t, e, n) => e in t ? bh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var st = (t, e, n) => (wh(t, typeof e != "symbol" ? e + "" : e, n), n);
const Ch = function() {
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
Ch();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function xh(t) {
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
var Ls = {
        exports: {}
    },
    gl;

function cs() {
    return gl || (gl = 1, function(t, e) {
        (function() {
            var n = this,
                i = n._,
                a = Array.prototype,
                f = Object.prototype,
                v = Function.prototype,
                _ = a.push,
                S = a.slice,
                O = f.toString,
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
            var P = function(l, g, k) {
                    if (g === void 0) return l;
                    switch (k == null ? 3 : k) {
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
                W = function(l, g, k) {
                    return l == null ? m.identity : m.isFunction(l) ? P(l, g, k) : m.isObject(l) ? m.matcher(l) : m.property(l)
                };
            m.iteratee = function(l, g) {
                return W(l, g, 1 / 0)
            };
            var ae = function(l, g) {
                    return function(k) {
                        var R = arguments.length;
                        if (R < 2 || k == null) return k;
                        for (var L = 1; L < R; L++)
                            for (var B = arguments[L], te = l(B), Se = te.length, he = 0; he < Se; he++) {
                                var De = te[he];
                                (!g || k[De] === void 0) && (k[De] = B[De])
                            }
                        return k
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
                Oe = function(l) {
                    var g = Ee(l);
                    return typeof g == "number" && g >= 0 && g <= d
                };
            m.each = m.forEach = function(l, g, k) {
                g = P(g, k);
                var R, L;
                if (Oe(l))
                    for (R = 0, L = l.length; R < L; R++) g(l[R], R, l);
                else {
                    var B = m.keys(l);
                    for (R = 0, L = B.length; R < L; R++) g(l[B[R]], B[R], l)
                }
                return l
            }, m.map = m.collect = function(l, g, k) {
                g = W(g, k);
                for (var R = !Oe(l) && m.keys(l), L = (R || l).length, B = Array(L), te = 0; te < L; te++) {
                    var Se = R ? R[te] : te;
                    B[te] = g(l[Se], Se, l)
                }
                return B
            };

            function Pe(l) {
                function g(k, R, L, B, te, Se) {
                    for (; te >= 0 && te < Se; te += l) {
                        var he = B ? B[te] : te;
                        L = R(L, k[he], he, k)
                    }
                    return L
                }
                return function(k, R, L, B) {
                    R = P(R, B, 4);
                    var te = !Oe(k) && m.keys(k),
                        Se = (te || k).length,
                        he = l > 0 ? 0 : Se - 1;
                    return arguments.length < 3 && (L = k[te ? te[he] : he], he += l), g(k, R, L, te, he, Se)
                }
            }
            m.reduce = m.foldl = m.inject = Pe(1), m.reduceRight = m.foldr = Pe(-1), m.find = m.detect = function(l, g, k) {
                var R;
                if (Oe(l) ? R = m.findIndex(l, g, k) : R = m.findKey(l, g, k), R !== void 0 && R !== -1) return l[R]
            }, m.filter = m.select = function(l, g, k) {
                var R = [];
                return g = W(g, k), m.each(l, function(L, B, te) {
                    g(L, B, te) && R.push(L)
                }), R
            }, m.reject = function(l, g, k) {
                return m.filter(l, m.negate(W(g)), k)
            }, m.every = m.all = function(l, g, k) {
                g = W(g, k);
                for (var R = !Oe(l) && m.keys(l), L = (R || l).length, B = 0; B < L; B++) {
                    var te = R ? R[B] : B;
                    if (!g(l[te], te, l)) return !1
                }
                return !0
            }, m.some = m.any = function(l, g, k) {
                g = W(g, k);
                for (var R = !Oe(l) && m.keys(l), L = (R || l).length, B = 0; B < L; B++) {
                    var te = R ? R[B] : B;
                    if (g(l[te], te, l)) return !0
                }
                return !1
            }, m.contains = m.includes = m.include = function(l, g, k, R) {
                return Oe(l) || (l = m.values(l)), (typeof k != "number" || R) && (k = 0), m.indexOf(l, g, k) >= 0
            }, m.invoke = function(l, g) {
                var k = S.call(arguments, 2),
                    R = m.isFunction(g);
                return m.map(l, function(L) {
                    var B = R ? g : L[g];
                    return B == null ? B : B.apply(L, k)
                })
            }, m.pluck = function(l, g) {
                return m.map(l, m.property(g))
            }, m.where = function(l, g) {
                return m.filter(l, m.matcher(g))
            }, m.findWhere = function(l, g) {
                return m.find(l, m.matcher(g))
            }, m.max = function(l, g, k) {
                var R = -1 / 0,
                    L = -1 / 0,
                    B, te;
                if (g == null && l != null) {
                    l = Oe(l) ? l : m.values(l);
                    for (var Se = 0, he = l.length; Se < he; Se++) B = l[Se], B > R && (R = B)
                } else g = W(g, k), m.each(l, function(De, Me, nt) {
                    te = g(De, Me, nt), (te > L || te === -1 / 0 && R === -1 / 0) && (R = De, L = te)
                });
                return R
            }, m.min = function(l, g, k) {
                var R = 1 / 0,
                    L = 1 / 0,
                    B, te;
                if (g == null && l != null) {
                    l = Oe(l) ? l : m.values(l);
                    for (var Se = 0, he = l.length; Se < he; Se++) B = l[Se], B < R && (R = B)
                } else g = W(g, k), m.each(l, function(De, Me, nt) {
                    te = g(De, Me, nt), (te < L || te === 1 / 0 && R === 1 / 0) && (R = De, L = te)
                });
                return R
            }, m.shuffle = function(l) {
                for (var g = Oe(l) ? l : m.values(l), k = g.length, R = Array(k), L = 0, B; L < k; L++) B = m.random(0, L), B !== L && (R[L] = R[B]), R[B] = g[L];
                return R
            }, m.sample = function(l, g, k) {
                return g == null || k ? (Oe(l) || (l = m.values(l)), l[m.random(l.length - 1)]) : m.shuffle(l).slice(0, Math.max(0, g))
            }, m.sortBy = function(l, g, k) {
                return g = W(g, k), m.pluck(m.map(l, function(R, L, B) {
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
                return function(g, k, R) {
                    var L = {};
                    return k = W(k, R), m.each(g, function(B, te) {
                        var Se = k(B, te, g);
                        l(L, B, Se)
                    }), L
                }
            };
            m.groupBy = lt(function(l, g, k) {
                m.has(l, k) ? l[k].push(g) : l[k] = [g]
            }), m.indexBy = lt(function(l, g, k) {
                l[k] = g
            }), m.countBy = lt(function(l, g, k) {
                m.has(l, k) ? l[k]++ : l[k] = 1
            }), m.toArray = function(l) {
                return l ? m.isArray(l) ? S.call(l) : Oe(l) ? m.map(l, m.identity) : m.values(l) : []
            }, m.size = function(l) {
                return l == null ? 0 : Oe(l) ? l.length : m.keys(l).length
            }, m.partition = function(l, g, k) {
                g = W(g, k);
                var R = [],
                    L = [];
                return m.each(l, function(B, te, Se) {
                    (g(B, te, Se) ? R : L).push(B)
                }), [R, L]
            }, m.first = m.head = m.take = function(l, g, k) {
                if (l != null) return g == null || k ? l[0] : m.initial(l, l.length - g)
            }, m.initial = function(l, g, k) {
                return S.call(l, 0, Math.max(0, l.length - (g == null || k ? 1 : g)))
            }, m.last = function(l, g, k) {
                if (l != null) return g == null || k ? l[l.length - 1] : m.rest(l, Math.max(0, l.length - g))
            }, m.rest = m.tail = m.drop = function(l, g, k) {
                return S.call(l, g == null || k ? 1 : g)
            }, m.compact = function(l) {
                return m.filter(l, m.identity)
            };
            var Ve = function(l, g, k, R) {
                for (var L = [], B = 0, te = R || 0, Se = Ee(l); te < Se; te++) {
                    var he = l[te];
                    if (Oe(he) && (m.isArray(he) || m.isArguments(he))) {
                        g || (he = Ve(he, g, k));
                        var De = 0,
                            Me = he.length;
                        for (L.length += Me; De < Me;) L[B++] = he[De++]
                    } else k || (L[B++] = he)
                }
                return L
            };
            m.flatten = function(l, g) {
                return Ve(l, g, !1)
            }, m.without = function(l) {
                return m.difference(l, S.call(arguments, 1))
            }, m.uniq = m.unique = function(l, g, k, R) {
                m.isBoolean(g) || (R = k, k = g, g = !1), k != null && (k = W(k, R));
                for (var L = [], B = [], te = 0, Se = Ee(l); te < Se; te++) {
                    var he = l[te],
                        De = k ? k(he, te, l) : he;
                    g ? ((!te || B !== De) && L.push(he), B = De) : k ? m.contains(B, De) || (B.push(De), L.push(he)) : m.contains(L, he) || L.push(he)
                }
                return L
            }, m.union = function() {
                return m.uniq(Ve(arguments, !0, !0))
            }, m.intersection = function(l) {
                for (var g = [], k = arguments.length, R = 0, L = Ee(l); R < L; R++) {
                    var B = l[R];
                    if (!m.contains(g, B)) {
                        for (var te = 1; te < k && m.contains(arguments[te], B); te++);
                        te === k && g.push(B)
                    }
                }
                return g
            }, m.difference = function(l) {
                var g = Ve(arguments, !0, !0, 1);
                return m.filter(l, function(k) {
                    return !m.contains(g, k)
                })
            }, m.zip = function() {
                return m.unzip(arguments)
            }, m.unzip = function(l) {
                for (var g = l && m.max(l, Ee).length || 0, k = Array(g), R = 0; R < g; R++) k[R] = m.pluck(l, R);
                return k
            }, m.object = function(l, g) {
                for (var k = {}, R = 0, L = Ee(l); R < L; R++) g ? k[l[R]] = g[R] : k[l[R][0]] = l[R][1];
                return k
            };

            function K(l) {
                return function(g, k, R) {
                    k = W(k, R);
                    for (var L = Ee(g), B = l > 0 ? 0 : L - 1; B >= 0 && B < L; B += l)
                        if (k(g[B], B, g)) return B;
                    return -1
                }
            }
            m.findIndex = K(1), m.findLastIndex = K(-1), m.sortedIndex = function(l, g, k, R) {
                k = W(k, R, 1);
                for (var L = k(g), B = 0, te = Ee(l); B < te;) {
                    var Se = Math.floor((B + te) / 2);
                    k(l[Se]) < L ? B = Se + 1 : te = Se
                }
                return B
            };

            function Fe(l, g, k) {
                return function(R, L, B) {
                    var te = 0,
                        Se = Ee(R);
                    if (typeof B == "number") l > 0 ? te = B >= 0 ? B : Math.max(B + Se, te) : Se = B >= 0 ? Math.min(B + 1, Se) : B + Se + 1;
                    else if (k && B && Se) return B = k(R, L), R[B] === L ? B : -1;
                    if (L !== L) return B = g(S.call(R, te, Se), m.isNaN), B >= 0 ? B + te : -1;
                    for (B = l > 0 ? te : Se - 1; B >= 0 && B < Se; B += l)
                        if (R[B] === L) return B;
                    return -1
                }
            }
            m.indexOf = Fe(1, m.findIndex, m.sortedIndex), m.lastIndexOf = Fe(-1, m.findLastIndex), m.range = function(l, g, k) {
                g == null && (g = l || 0, l = 0), k = k || 1;
                for (var R = Math.max(Math.ceil((g - l) / k), 0), L = Array(R), B = 0; B < R; B++, l += k) L[B] = l;
                return L
            };
            var H = function(l, g, k, R, L) {
                if (!(R instanceof g)) return l.apply(k, L);
                var B = se(l.prototype),
                    te = l.apply(B, L);
                return m.isObject(te) ? te : B
            };
            m.bind = function(l, g) {
                if (ie && l.bind === ie) return ie.apply(l, S.call(arguments, 1));
                if (!m.isFunction(l)) throw new TypeError("Bind must be called on a function");
                var k = S.call(arguments, 2),
                    R = function() {
                        return H(l, R, g, this, k.concat(S.call(arguments)))
                    };
                return R
            }, m.partial = function(l) {
                var g = S.call(arguments, 1),
                    k = function() {
                        for (var R = 0, L = g.length, B = Array(L), te = 0; te < L; te++) B[te] = g[te] === m ? arguments[R++] : g[te];
                        for (; R < arguments.length;) B.push(arguments[R++]);
                        return H(l, k, this, this, B)
                    };
                return k
            }, m.bindAll = function(l) {
                var g, k = arguments.length,
                    R;
                if (k <= 1) throw new Error("bindAll must be passed function names");
                for (g = 1; g < k; g++) R = arguments[g], l[R] = m.bind(l[R], l);
                return l
            }, m.memoize = function(l, g) {
                var k = function(R) {
                    var L = k.cache,
                        B = "" + (g ? g.apply(this, arguments) : R);
                    return m.has(L, B) || (L[B] = l.apply(this, arguments)), L[B]
                };
                return k.cache = {}, k
            }, m.delay = function(l, g) {
                var k = S.call(arguments, 2);
                return setTimeout(function() {
                    return l.apply(null, k)
                }, g)
            }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(l, g, k) {
                var R, L, B, te = null,
                    Se = 0;
                k || (k = {});
                var he = function() {
                    Se = k.leading === !1 ? 0 : m.now(), te = null, B = l.apply(R, L), te || (R = L = null)
                };
                return function() {
                    var De = m.now();
                    !Se && k.leading === !1 && (Se = De);
                    var Me = g - (De - Se);
                    return R = this, L = arguments, Me <= 0 || Me > g ? (te && (clearTimeout(te), te = null), Se = De, B = l.apply(R, L), te || (R = L = null)) : !te && k.trailing !== !1 && (te = setTimeout(he, Me)), B
                }
            }, m.debounce = function(l, g, k) {
                var R, L, B, te, Se, he = function() {
                    var De = m.now() - te;
                    De < g && De >= 0 ? R = setTimeout(he, g - De) : (R = null, k || (Se = l.apply(B, L), R || (B = L = null)))
                };
                return function() {
                    B = this, L = arguments, te = m.now();
                    var De = k && !R;
                    return R || (R = setTimeout(he, g)), De && (Se = l.apply(B, L), B = L = null), Se
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
                    for (var k = g, R = l[g].apply(this, arguments); k--;) R = l[k].call(this, R);
                    return R
                }
            }, m.after = function(l, g) {
                return function() {
                    if (--l < 1) return g.apply(this, arguments)
                }
            }, m.before = function(l, g) {
                var k;
                return function() {
                    return --l > 0 && (k = g.apply(this, arguments)), l <= 1 && (g = null), k
                }
            }, m.once = m.partial(m.before, 2);
            var oe = !{
                    toString: null
                }.propertyIsEnumerable("toString"),
                Te = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

            function be(l, g) {
                var k = Te.length,
                    R = l.constructor,
                    L = m.isFunction(R) && R.prototype || f,
                    B = "constructor";
                for (m.has(l, B) && !m.contains(g, B) && g.push(B); k--;) B = Te[k], B in l && l[B] !== L[B] && !m.contains(g, B) && g.push(B)
            }
            m.keys = function(l) {
                if (!m.isObject(l)) return [];
                if (J) return J(l);
                var g = [];
                for (var k in l) m.has(l, k) && g.push(k);
                return oe && be(l, g), g
            }, m.allKeys = function(l) {
                if (!m.isObject(l)) return [];
                var g = [];
                for (var k in l) g.push(k);
                return oe && be(l, g), g
            }, m.values = function(l) {
                for (var g = m.keys(l), k = g.length, R = Array(k), L = 0; L < k; L++) R[L] = l[g[L]];
                return R
            }, m.mapObject = function(l, g, k) {
                g = W(g, k);
                for (var R = m.keys(l), L = R.length, B = {}, te, Se = 0; Se < L; Se++) te = R[Se], B[te] = g(l[te], te, l);
                return B
            }, m.pairs = function(l) {
                for (var g = m.keys(l), k = g.length, R = Array(k), L = 0; L < k; L++) R[L] = [g[L], l[g[L]]];
                return R
            }, m.invert = function(l) {
                for (var g = {}, k = m.keys(l), R = 0, L = k.length; R < L; R++) g[l[k[R]]] = k[R];
                return g
            }, m.functions = m.methods = function(l) {
                var g = [];
                for (var k in l) m.isFunction(l[k]) && g.push(k);
                return g.sort()
            }, m.extend = ae(m.allKeys), m.extendOwn = m.assign = ae(m.keys), m.findKey = function(l, g, k) {
                g = W(g, k);
                for (var R = m.keys(l), L, B = 0, te = R.length; B < te; B++)
                    if (L = R[B], g(l[L], L, l)) return L
            }, m.pick = function(l, g, k) {
                var R = {},
                    L = l,
                    B, te;
                if (L == null) return R;
                m.isFunction(g) ? (te = m.allKeys(L), B = P(g, k)) : (te = Ve(arguments, !1, !1, 1), B = function(nt, Ct, rn) {
                    return Ct in rn
                }, L = Object(L));
                for (var Se = 0, he = te.length; Se < he; Se++) {
                    var De = te[Se],
                        Me = L[De];
                    B(Me, De, L) && (R[De] = Me)
                }
                return R
            }, m.omit = function(l, g, k) {
                if (m.isFunction(g)) g = m.negate(g);
                else {
                    var R = m.map(Ve(arguments, !1, !1, 1), String);
                    g = function(L, B) {
                        return !m.contains(R, B)
                    }
                }
                return m.pick(l, g, k)
            }, m.defaults = ae(m.allKeys, !0), m.create = function(l, g) {
                var k = se(l);
                return g && m.extendOwn(k, g), k
            }, m.clone = function(l) {
                return m.isObject(l) ? m.isArray(l) ? l.slice() : m.extend({}, l) : l
            }, m.tap = function(l, g) {
                return g(l), l
            }, m.isMatch = function(l, g) {
                var k = m.keys(g),
                    R = k.length;
                if (l == null) return !R;
                for (var L = Object(l), B = 0; B < R; B++) {
                    var te = k[B];
                    if (g[te] !== L[te] || !(te in L)) return !1
                }
                return !0
            };
            var ye = function(l, g, k, R) {
                if (l === g) return l !== 0 || 1 / l === 1 / g;
                if (l == null || g == null) return l === g;
                l instanceof m && (l = l._wrapped), g instanceof m && (g = g._wrapped);
                var L = O.call(l);
                if (L !== O.call(g)) return !1;
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
                    if (te !== Se && !(m.isFunction(te) && te instanceof te && m.isFunction(Se) && Se instanceof Se) && "constructor" in l && "constructor" in g) return !1
                }
                k = k || [], R = R || [];
                for (var he = k.length; he--;)
                    if (k[he] === l) return R[he] === g;
                if (k.push(l), R.push(g), B) {
                    if (he = l.length, he !== g.length) return !1;
                    for (; he--;)
                        if (!ye(l[he], g[he], k, R)) return !1
                } else {
                    var De = m.keys(l),
                        Me;
                    if (he = De.length, m.keys(g).length !== he) return !1;
                    for (; he--;)
                        if (Me = De[he], !(m.has(g, Me) && ye(l[Me], g[Me], k, R))) return !1
                }
                return k.pop(), R.pop(), !0
            };
            m.isEqual = function(l, g) {
                return ye(l, g)
            }, m.isEmpty = function(l) {
                return l == null ? !0 : Oe(l) && (m.isArray(l) || m.isString(l) || m.isArguments(l)) ? l.length === 0 : m.keys(l).length === 0
            }, m.isElement = function(l) {
                return !!(l && l.nodeType === 1)
            }, m.isArray = $ || function(l) {
                return O.call(l) === "[object Array]"
            }, m.isObject = function(l) {
                var g = typeof l;
                return g === "function" || g === "object" && !!l
            }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
                m["is" + l] = function(g) {
                    return O.call(g) === "[object " + l + "]"
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
                return l === !0 || l === !1 || O.call(l) === "[object Boolean]"
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
            }, m.times = function(l, g, k) {
                var R = Array(Math.max(0, l));
                g = P(g, k, 1);
                for (var L = 0; L < l; L++) R[L] = g(L);
                return R
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
                    var g = function(B) {
                            return l[B]
                        },
                        k = "(?:" + m.keys(l).join("|") + ")",
                        R = RegExp(k),
                        L = RegExp(k, "g");
                    return function(B) {
                        return B = B == null ? "" : "" + B, R.test(B) ? B.replace(L, g) : B
                    }
                };
            m.escape = ke(ue), m.unescape = ke(_e), m.result = function(l, g, k) {
                var R = l == null ? void 0 : l[g];
                return R === void 0 && (R = k), m.isFunction(R) ? R.call(l) : R
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
            m.template = function(l, g, k) {
                !g && k && (g = k), g = m.defaults({}, g, m.templateSettings);
                var R = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                    L = 0,
                    B = "__p+='";
                l.replace(R, function(De, Me, nt, Ct, rn) {
                    return B += l.slice(L, rn).replace(Vt, Gt), L = rn + De.length, Me ? B += `'+
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
                var Se = function(De) {
                        return te.call(this, De, m)
                    },
                    he = g.variable || "obj";
                return Se.source = "function(" + he + `){
` + B + "}", Se
            }, m.chain = function(l) {
                var g = m(l);
                return g._chain = !0, g
            };
            var E = function(l, g) {
                return l._chain ? m(g).chain() : g
            };
            m.mixin = function(l) {
                m.each(m.functions(l), function(g) {
                    var k = m[g] = l[g];
                    m.prototype[g] = function() {
                        var R = [this._wrapped];
                        return _.apply(R, arguments), E(this, k.apply(m, R))
                    }
                })
            }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
                var g = a[l];
                m.prototype[l] = function() {
                    var k = this._wrapped;
                    return g.apply(k, arguments), (l === "shift" || l === "splice") && k.length === 0 && delete k[0], E(this, k)
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
    }(Ls, Ls.exports)), Ls.exports
}
var at = cs(),
    Qo = {
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
var ml;

function Sc() {
    return ml || (ml = 1, function(t) {
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
                _ = i.push,
                S = i.indexOf,
                O = {},
                D = O.toString,
                $ = O.hasOwnProperty,
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
                W = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function ae(r, s, u) {
                u = u || P;
                var p, b, x = u.createElement("script");
                if (x.text = r, s)
                    for (p in W) b = s[p] || s.getAttribute && s.getAttribute(p), b && x.setAttribute(p, b);
                u.head.appendChild(x).parentNode.removeChild(x)
            }

            function se(r) {
                return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? O[D.call(r)] || "object" : typeof r
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
                var r, s, u, p, b, x, T = arguments[0] || {},
                    z = 1,
                    U = arguments.length,
                    Z = !1;
                for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === U && (T = this, z--); z < U; z++)
                    if ((r = arguments[z]) != null)
                        for (s in r) p = r[s], !(s === "__proto__" || T === p) && (Z && p && (d.isPlainObject(p) || (b = Array.isArray(p))) ? (u = T[s], b && !Array.isArray(u) ? x = [] : !b && !d.isPlainObject(u) ? x = {} : x = u, b = !1, T[s] = d.extend(Z, x, p)) : p !== void 0 && (T[s] = p));
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
                    return r != null && (Ee(Object(r)) ? d.merge(u, typeof r == "string" ? [r] : r) : _.call(u, r)), u
                },
                inArray: function(r, s, u) {
                    return s == null ? -1 : S.call(s, r, u)
                },
                merge: function(r, s) {
                    for (var u = +s.length, p = 0, b = r.length; p < u; p++) r[b++] = s[p];
                    return r.length = b, r
                },
                grep: function(r, s, u) {
                    for (var p, b = [], x = 0, T = r.length, z = !u; x < T; x++) p = !s(r[x], x), p !== z && b.push(r[x]);
                    return b
                },
                map: function(r, s, u) {
                    var p, b, x = 0,
                        T = [];
                    if (Ee(r))
                        for (p = r.length; x < p; x++) b = s(r[x], x, u), b != null && T.push(b);
                    else
                        for (x in r) b = s(r[x], x, u), b != null && T.push(b);
                    return v(T)
                },
                guid: 1,
                support: Y
            }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
                O["[object " + s + "]"] = s.toLowerCase()
            });

            function Ee(r) {
                var s = !!r && "length" in r && r.length,
                    u = se(r);
                return re(r) || m(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
            }
            var Oe = function(r) {
                var s, u, p, b, x, T, z, U, Z, le, we, ne, ce, Ge, rt, je, zt, Nt, un, _t = "sizzle" + 1 * new Date,
                    et = r.document,
                    on = 0,
                    ft = 0,
                    Dt = Xi(),
                    _i = Xi(),
                    Wi = Xi(),
                    hn = Xi(),
                    Kn = function(I, F) {
                        return I === F && (we = !0), 0
                    },
                    Jn = {}.hasOwnProperty,
                    an = [],
                    Mn = an.pop,
                    vn = an.push,
                    Cn = an.push,
                    _s = an.slice,
                    Qn = function(I, F) {
                        for (var X = 0, de = I.length; X < de; X++)
                            if (I[X] === F) return X;
                        return -1
                    },
                    jr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    gt = "[\\x20\\t\\r\\n\\f]",
                    Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    Ss = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                    Fr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + Ss + ")*)|.*)\\)|)",
                    ks = new RegExp(gt + "+", "g"),
                    Si = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                    Ts = new RegExp("^" + gt + "*," + gt + "*"),
                    As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                    jo = new RegExp(gt + "|>"),
                    Fo = new RegExp(Fr),
                    zo = new RegExp("^" + Zn + "$"),
                    qi = {
                        ID: new RegExp("^#(" + Zn + ")"),
                        CLASS: new RegExp("^\\.(" + Zn + ")"),
                        TAG: new RegExp("^(" + Zn + "|[*])"),
                        ATTR: new RegExp("^" + Ss),
                        PSEUDO: new RegExp("^" + Fr),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + jr + ")$", "i"),
                        needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Uo = /HTML$/i,
                    Ho = /^(?:input|select|textarea|button)$/i,
                    Go = /^h\d$/i,
                    ki = /^[^{]+\{\s*\[native \w/,
                    Wo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    zr = /[+~]/,
                    Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                    xn = function(I, F) {
                        var X = "0x" + I.slice(1) - 65536;
                        return F || (X < 0 ? String.fromCharCode(X + 65536) : String.fromCharCode(X >> 10 | 55296, X & 1023 | 56320))
                    },
                    Ur = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    Os = function(I, F) {
                        return F ? I === "\0" ? "\uFFFD" : I.slice(0, -1) + "\\" + I.charCodeAt(I.length - 1).toString(16) + " " : "\\" + I
                    },
                    Rs = function() {
                        ne()
                    },
                    qo = Qi(function(I) {
                        return I.disabled === !0 && I.nodeName.toLowerCase() === "fieldset"
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
                            for (var de = F.length, ee = 0; F[de++] = X[ee++];);
                            F.length = de - 1
                        }
                    }
                }

                function St(I, F, X, de) {
                    var ee, me, xe, Re, Le, ze, He, Xe = F && F.ownerDocument,
                        ht = F ? F.nodeType : 9;
                    if (X = X || [], typeof I != "string" || !I || ht !== 1 && ht !== 9 && ht !== 11) return X;
                    if (!de && (ne(F), F = F || ce, rt)) {
                        if (ht !== 11 && (Le = Wo.exec(I)))
                            if (ee = Le[1]) {
                                if (ht === 9)
                                    if (xe = F.getElementById(ee)) {
                                        if (xe.id === ee) return X.push(xe), X
                                    } else return X;
                                else if (Xe && (xe = Xe.getElementById(ee)) && un(F, xe) && xe.id === ee) return X.push(xe), X
                            } else {
                                if (Le[2]) return Cn.apply(X, F.getElementsByTagName(I)), X;
                                if ((ee = Le[3]) && u.getElementsByClassName && F.getElementsByClassName) return Cn.apply(X, F.getElementsByClassName(ee)), X
                            } if (u.qsa && !hn[I + " "] && (!je || !je.test(I)) && (ht !== 1 || F.nodeName.toLowerCase() !== "object")) {
                            if (He = I, Xe = F, ht === 1 && (jo.test(I) || As.test(I))) {
                                for (Xe = zr.test(I) && Hr(F.parentNode) || F, (Xe !== F || !u.scope) && ((Re = F.getAttribute("id")) ? Re = Re.replace(Ur, Os) : F.setAttribute("id", Re = _t)), ze = T(I), me = ze.length; me--;) ze[me] = (Re ? "#" + Re : ":scope") + " " + Ji(ze[me]);
                                He = ze.join(",")
                            }
                            try {
                                return Cn.apply(X, Xe.querySelectorAll(He)), X
                            } catch {
                                hn(I, !0)
                            } finally {
                                Re === _t && F.removeAttribute("id")
                            }
                        }
                    }
                    return U(I.replace(Si, "$1"), F, X, de)
                }

                function Xi() {
                    var I = [];

                    function F(X, de) {
                        return I.push(X + " ") > p.cacheLength && delete F[I.shift()], F[X + " "] = de
                    }
                    return F
                }

                function dn(I) {
                    return I[_t] = !0, I
                }

                function yn(I) {
                    var F = ce.createElement("fieldset");
                    try {
                        return !!I(F)
                    } catch {
                        return !1
                    } finally {
                        F.parentNode && F.parentNode.removeChild(F), F = null
                    }
                }

                function Yi(I, F) {
                    for (var X = I.split("|"), de = X.length; de--;) p.attrHandle[X[de]] = F
                }

                function Ki(I, F) {
                    var X = F && I,
                        de = X && I.nodeType === 1 && F.nodeType === 1 && I.sourceIndex - F.sourceIndex;
                    if (de) return de;
                    if (X) {
                        for (; X = X.nextSibling;)
                            if (X === F) return -1
                    }
                    return I ? 1 : -1
                }

                function Xo(I) {
                    return function(F) {
                        var X = F.nodeName.toLowerCase();
                        return X === "input" && F.type === I
                    }
                }

                function Yo(I) {
                    return function(F) {
                        var X = F.nodeName.toLowerCase();
                        return (X === "input" || X === "button") && F.type === I
                    }
                }

                function Is(I) {
                    return function(F) {
                        return "form" in F ? F.parentNode && F.disabled === !1 ? "label" in F ? "label" in F.parentNode ? F.parentNode.disabled === I : F.disabled === I : F.isDisabled === I || F.isDisabled !== !I && qo(F) === I : F.disabled === I : "label" in F ? F.disabled === I : !1
                    }
                }

                function An(I) {
                    return dn(function(F) {
                        return F = +F, dn(function(X, de) {
                            for (var ee, me = I([], X.length, F), xe = me.length; xe--;) X[ee = me[xe]] && (X[ee] = !(de[ee] = X[ee]))
                        })
                    })
                }

                function Hr(I) {
                    return I && typeof I.getElementsByTagName < "u" && I
                }
                u = St.support = {}, x = St.isXML = function(I) {
                    var F = I && I.namespaceURI,
                        X = I && (I.ownerDocument || I).documentElement;
                    return !Uo.test(F || X && X.nodeName || "HTML")
                }, ne = St.setDocument = function(I) {
                    var F, X, de = I ? I.ownerDocument || I : et;
                    return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, Ge = ce.documentElement, rt = !x(ce), et != ce && (X = ce.defaultView) && X.top !== X && (X.addEventListener ? X.addEventListener("unload", Rs, !1) : X.attachEvent && X.attachEvent("onunload", Rs)), u.scope = yn(function(ee) {
                        return Ge.appendChild(ee).appendChild(ce.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                    }), u.attributes = yn(function(ee) {
                        return ee.className = "i", !ee.getAttribute("className")
                    }), u.getElementsByTagName = yn(function(ee) {
                        return ee.appendChild(ce.createComment("")), !ee.getElementsByTagName("*").length
                    }), u.getElementsByClassName = ki.test(ce.getElementsByClassName), u.getById = yn(function(ee) {
                        return Ge.appendChild(ee).id = _t, !ce.getElementsByName || !ce.getElementsByName(_t).length
                    }), u.getById ? (p.filter.ID = function(ee) {
                        var me = ee.replace(Tn, xn);
                        return function(xe) {
                            return xe.getAttribute("id") === me
                        }
                    }, p.find.ID = function(ee, me) {
                        if (typeof me.getElementById < "u" && rt) {
                            var xe = me.getElementById(ee);
                            return xe ? [xe] : []
                        }
                    }) : (p.filter.ID = function(ee) {
                        var me = ee.replace(Tn, xn);
                        return function(xe) {
                            var Re = typeof xe.getAttributeNode < "u" && xe.getAttributeNode("id");
                            return Re && Re.value === me
                        }
                    }, p.find.ID = function(ee, me) {
                        if (typeof me.getElementById < "u" && rt) {
                            var xe, Re, Le, ze = me.getElementById(ee);
                            if (ze) {
                                if (xe = ze.getAttributeNode("id"), xe && xe.value === ee) return [ze];
                                for (Le = me.getElementsByName(ee), Re = 0; ze = Le[Re++];)
                                    if (xe = ze.getAttributeNode("id"), xe && xe.value === ee) return [ze]
                            }
                            return []
                        }
                    }), p.find.TAG = u.getElementsByTagName ? function(ee, me) {
                        if (typeof me.getElementsByTagName < "u") return me.getElementsByTagName(ee);
                        if (u.qsa) return me.querySelectorAll(ee)
                    } : function(ee, me) {
                        var xe, Re = [],
                            Le = 0,
                            ze = me.getElementsByTagName(ee);
                        if (ee === "*") {
                            for (; xe = ze[Le++];) xe.nodeType === 1 && Re.push(xe);
                            return Re
                        }
                        return ze
                    }, p.find.CLASS = u.getElementsByClassName && function(ee, me) {
                        if (typeof me.getElementsByClassName < "u" && rt) return me.getElementsByClassName(ee)
                    }, zt = [], je = [], (u.qsa = ki.test(ce.querySelectorAll)) && (yn(function(ee) {
                        var me;
                        Ge.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + jr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || je.push("~="), me = ce.createElement("input"), me.setAttribute("name", ""), ee.appendChild(me), ee.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || je.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || je.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                    }), yn(function(ee) {
                        ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var me = ce.createElement("input");
                        me.setAttribute("type", "hidden"), ee.appendChild(me).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), Ge.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), je.push(",.*:")
                    })), (u.matchesSelector = ki.test(Nt = Ge.matches || Ge.webkitMatchesSelector || Ge.mozMatchesSelector || Ge.oMatchesSelector || Ge.msMatchesSelector)) && yn(function(ee) {
                        u.disconnectedMatch = Nt.call(ee, "*"), Nt.call(ee, "[s!='']:x"), zt.push("!=", Fr)
                    }), je = je.length && new RegExp(je.join("|")), zt = zt.length && new RegExp(zt.join("|")), F = ki.test(Ge.compareDocumentPosition), un = F || ki.test(Ge.contains) ? function(ee, me) {
                        var xe = ee.nodeType === 9 ? ee.documentElement : ee,
                            Re = me && me.parentNode;
                        return ee === Re || !!(Re && Re.nodeType === 1 && (xe.contains ? xe.contains(Re) : ee.compareDocumentPosition && ee.compareDocumentPosition(Re) & 16))
                    } : function(ee, me) {
                        if (me) {
                            for (; me = me.parentNode;)
                                if (me === ee) return !0
                        }
                        return !1
                    }, Kn = F ? function(ee, me) {
                        if (ee === me) return we = !0, 0;
                        var xe = !ee.compareDocumentPosition - !me.compareDocumentPosition;
                        return xe || (xe = (ee.ownerDocument || ee) == (me.ownerDocument || me) ? ee.compareDocumentPosition(me) : 1, xe & 1 || !u.sortDetached && me.compareDocumentPosition(ee) === xe ? ee == ce || ee.ownerDocument == et && un(et, ee) ? -1 : me == ce || me.ownerDocument == et && un(et, me) ? 1 : le ? Qn(le, ee) - Qn(le, me) : 0 : xe & 4 ? -1 : 1)
                    } : function(ee, me) {
                        if (ee === me) return we = !0, 0;
                        var xe, Re = 0,
                            Le = ee.parentNode,
                            ze = me.parentNode,
                            He = [ee],
                            Xe = [me];
                        if (!Le || !ze) return ee == ce ? -1 : me == ce ? 1 : Le ? -1 : ze ? 1 : le ? Qn(le, ee) - Qn(le, me) : 0;
                        if (Le === ze) return Ki(ee, me);
                        for (xe = ee; xe = xe.parentNode;) He.unshift(xe);
                        for (xe = me; xe = xe.parentNode;) Xe.unshift(xe);
                        for (; He[Re] === Xe[Re];) Re++;
                        return Re ? Ki(He[Re], Xe[Re]) : He[Re] == et ? -1 : Xe[Re] == et ? 1 : 0
                    }), ce
                }, St.matches = function(I, F) {
                    return St(I, null, null, F)
                }, St.matchesSelector = function(I, F) {
                    if (ne(I), u.matchesSelector && rt && !hn[F + " "] && (!zt || !zt.test(F)) && (!je || !je.test(F))) try {
                        var X = Nt.call(I, F);
                        if (X || u.disconnectedMatch || I.document && I.document.nodeType !== 11) return X
                    } catch {
                        hn(F, !0)
                    }
                    return St(F, ce, null, [I]).length > 0
                }, St.contains = function(I, F) {
                    return (I.ownerDocument || I) != ce && ne(I), un(I, F)
                }, St.attr = function(I, F) {
                    (I.ownerDocument || I) != ce && ne(I);
                    var X = p.attrHandle[F.toLowerCase()],
                        de = X && Jn.call(p.attrHandle, F.toLowerCase()) ? X(I, F, !rt) : void 0;
                    return de !== void 0 ? de : u.attributes || !rt ? I.getAttribute(F) : (de = I.getAttributeNode(F)) && de.specified ? de.value : null
                }, St.escape = function(I) {
                    return (I + "").replace(Ur, Os)
                }, St.error = function(I) {
                    throw new Error("Syntax error, unrecognized expression: " + I)
                }, St.uniqueSort = function(I) {
                    var F, X = [],
                        de = 0,
                        ee = 0;
                    if (we = !u.detectDuplicates, le = !u.sortStable && I.slice(0), I.sort(Kn), we) {
                        for (; F = I[ee++];) F === I[ee] && (de = X.push(ee));
                        for (; de--;) I.splice(X[de], 1)
                    }
                    return le = null, I
                }, b = St.getText = function(I) {
                    var F, X = "",
                        de = 0,
                        ee = I.nodeType;
                    if (ee) {
                        if (ee === 1 || ee === 9 || ee === 11) {
                            if (typeof I.textContent == "string") return I.textContent;
                            for (I = I.firstChild; I; I = I.nextSibling) X += b(I)
                        } else if (ee === 3 || ee === 4) return I.nodeValue
                    } else
                        for (; F = I[de++];) X += b(F);
                    return X
                }, p = St.selectors = {
                    cacheLength: 50,
                    createPseudo: dn,
                    match: qi,
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
                            var F, X = !I[6] && I[2];
                            return qi.CHILD.test(I[0]) ? null : (I[3] ? I[2] = I[4] || I[5] || "" : X && Fo.test(X) && (F = T(X, !0)) && (F = X.indexOf(")", X.length - F) - X.length) && (I[0] = I[0].slice(0, F), I[2] = X.slice(0, F)), I.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(I) {
                            var F = I.replace(Tn, xn).toLowerCase();
                            return I === "*" ? function() {
                                return !0
                            } : function(X) {
                                return X.nodeName && X.nodeName.toLowerCase() === F
                            }
                        },
                        CLASS: function(I) {
                            var F = Dt[I + " "];
                            return F || (F = new RegExp("(^|" + gt + ")" + I + "(" + gt + "|$)")) && Dt(I, function(X) {
                                return F.test(typeof X.className == "string" && X.className || typeof X.getAttribute < "u" && X.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(I, F, X) {
                            return function(de) {
                                var ee = St.attr(de, I);
                                return ee == null ? F === "!=" : F ? (ee += "", F === "=" ? ee === X : F === "!=" ? ee !== X : F === "^=" ? X && ee.indexOf(X) === 0 : F === "*=" ? X && ee.indexOf(X) > -1 : F === "$=" ? X && ee.slice(-X.length) === X : F === "~=" ? (" " + ee.replace(ks, " ") + " ").indexOf(X) > -1 : F === "|=" ? ee === X || ee.slice(0, X.length + 1) === X + "-" : !1) : !0
                            }
                        },
                        CHILD: function(I, F, X, de, ee) {
                            var me = I.slice(0, 3) !== "nth",
                                xe = I.slice(-4) !== "last",
                                Re = F === "of-type";
                            return de === 1 && ee === 0 ? function(Le) {
                                return !!Le.parentNode
                            } : function(Le, ze, He) {
                                var Xe, ht, Tt, qe, Ut, Jt, fn = me !== xe ? "nextSibling" : "previousSibling",
                                    At = Le.parentNode,
                                    c = Re && Le.nodeName.toLowerCase(),
                                    h = !He && !Re,
                                    w = !1;
                                if (At) {
                                    if (me) {
                                        for (; fn;) {
                                            for (qe = Le; qe = qe[fn];)
                                                if (Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) return !1;
                                            Jt = fn = I === "only" && !Jt && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (Jt = [xe ? At.firstChild : At.lastChild], xe && h) {
                                        for (qe = At, Tt = qe[_t] || (qe[_t] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), Xe = ht[I] || [], Ut = Xe[0] === on && Xe[1], w = Ut && Xe[2], qe = Ut && At.childNodes[Ut]; qe = ++Ut && qe && qe[fn] || (w = Ut = 0) || Jt.pop();)
                                            if (qe.nodeType === 1 && ++w && qe === Le) {
                                                ht[I] = [on, Ut, w];
                                                break
                                            }
                                    } else if (h && (qe = Le, Tt = qe[_t] || (qe[_t] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), Xe = ht[I] || [], Ut = Xe[0] === on && Xe[1], w = Ut), w === !1)
                                        for (;
                                            (qe = ++Ut && qe && qe[fn] || (w = Ut = 0) || Jt.pop()) && !((Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) && ++w && (h && (Tt = qe[_t] || (qe[_t] = {}), ht = Tt[qe.uniqueID] || (Tt[qe.uniqueID] = {}), ht[I] = [on, w]), qe === Le)););
                                    return w -= ee, w === de || w % de === 0 && w / de >= 0
                                }
                            }
                        },
                        PSEUDO: function(I, F) {
                            var X, de = p.pseudos[I] || p.setFilters[I.toLowerCase()] || St.error("unsupported pseudo: " + I);
                            return de[_t] ? de(F) : de.length > 1 ? (X = [I, I, "", F], p.setFilters.hasOwnProperty(I.toLowerCase()) ? dn(function(ee, me) {
                                for (var xe, Re = de(ee, F), Le = Re.length; Le--;) xe = Qn(ee, Re[Le]), ee[xe] = !(me[xe] = Re[Le])
                            }) : function(ee) {
                                return de(ee, 0, X)
                            }) : de
                        }
                    },
                    pseudos: {
                        not: dn(function(I) {
                            var F = [],
                                X = [],
                                de = z(I.replace(Si, "$1"));
                            return de[_t] ? dn(function(ee, me, xe, Re) {
                                for (var Le, ze = de(ee, null, Re, []), He = ee.length; He--;)(Le = ze[He]) && (ee[He] = !(me[He] = Le))
                            }) : function(ee, me, xe) {
                                return F[0] = ee, de(F, null, xe, X), F[0] = null, !X.pop()
                            }
                        }),
                        has: dn(function(I) {
                            return function(F) {
                                return St(I, F).length > 0
                            }
                        }),
                        contains: dn(function(I) {
                            return I = I.replace(Tn, xn),
                                function(F) {
                                    return (F.textContent || b(F)).indexOf(I) > -1
                                }
                        }),
                        lang: dn(function(I) {
                            return zo.test(I || "") || St.error("unsupported lang: " + I), I = I.replace(Tn, xn).toLowerCase(),
                                function(F) {
                                    var X;
                                    do
                                        if (X = rt ? F.lang : F.getAttribute("xml:lang") || F.getAttribute("lang")) return X = X.toLowerCase(), X === I || X.indexOf(I + "-") === 0; while ((F = F.parentNode) && F.nodeType === 1);
                                    return !1
                                }
                        }),
                        target: function(I) {
                            var F = r.location && r.location.hash;
                            return F && F.slice(1) === I.id
                        },
                        root: function(I) {
                            return I === Ge
                        },
                        focus: function(I) {
                            return I === ce.activeElement && (!ce.hasFocus || ce.hasFocus()) && !!(I.type || I.href || ~I.tabIndex)
                        },
                        enabled: Is(!1),
                        disabled: Is(!0),
                        checked: function(I) {
                            var F = I.nodeName.toLowerCase();
                            return F === "input" && !!I.checked || F === "option" && !!I.selected
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
                            return Go.test(I.nodeName)
                        },
                        input: function(I) {
                            return Ho.test(I.nodeName)
                        },
                        button: function(I) {
                            var F = I.nodeName.toLowerCase();
                            return F === "input" && I.type === "button" || F === "button"
                        },
                        text: function(I) {
                            var F;
                            return I.nodeName.toLowerCase() === "input" && I.type === "text" && ((F = I.getAttribute("type")) == null || F.toLowerCase() === "text")
                        },
                        first: An(function() {
                            return [0]
                        }),
                        last: An(function(I, F) {
                            return [F - 1]
                        }),
                        eq: An(function(I, F, X) {
                            return [X < 0 ? X + F : X]
                        }),
                        even: An(function(I, F) {
                            for (var X = 0; X < F; X += 2) I.push(X);
                            return I
                        }),
                        odd: An(function(I, F) {
                            for (var X = 1; X < F; X += 2) I.push(X);
                            return I
                        }),
                        lt: An(function(I, F, X) {
                            for (var de = X < 0 ? X + F : X > F ? F : X; --de >= 0;) I.push(de);
                            return I
                        }),
                        gt: An(function(I, F, X) {
                            for (var de = X < 0 ? X + F : X; ++de < F;) I.push(de);
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

                function Ds() {}
                Ds.prototype = p.filters = p.pseudos, p.setFilters = new Ds, T = St.tokenize = function(I, F) {
                    var X, de, ee, me, xe, Re, Le, ze = _i[I + " "];
                    if (ze) return F ? 0 : ze.slice(0);
                    for (xe = I, Re = [], Le = p.preFilter; xe;) {
                        (!X || (de = Ts.exec(xe))) && (de && (xe = xe.slice(de[0].length) || xe), Re.push(ee = [])), X = !1, (de = As.exec(xe)) && (X = de.shift(), ee.push({
                            value: X,
                            type: de[0].replace(Si, " ")
                        }), xe = xe.slice(X.length));
                        for (me in p.filter)(de = qi[me].exec(xe)) && (!Le[me] || (de = Le[me](de))) && (X = de.shift(), ee.push({
                            value: X,
                            type: me,
                            matches: de
                        }), xe = xe.slice(X.length));
                        if (!X) break
                    }
                    return F ? xe.length : xe ? St.error(I) : _i(I, Re).slice(0)
                };

                function Ji(I) {
                    for (var F = 0, X = I.length, de = ""; F < X; F++) de += I[F].value;
                    return de
                }

                function Qi(I, F, X) {
                    var de = F.dir,
                        ee = F.next,
                        me = ee || de,
                        xe = X && me === "parentNode",
                        Re = ft++;
                    return F.first ? function(Le, ze, He) {
                        for (; Le = Le[de];)
                            if (Le.nodeType === 1 || xe) return I(Le, ze, He);
                        return !1
                    } : function(Le, ze, He) {
                        var Xe, ht, Tt, qe = [on, Re];
                        if (He) {
                            for (; Le = Le[de];)
                                if ((Le.nodeType === 1 || xe) && I(Le, ze, He)) return !0
                        } else
                            for (; Le = Le[de];)
                                if (Le.nodeType === 1 || xe)
                                    if (Tt = Le[_t] || (Le[_t] = {}), ht = Tt[Le.uniqueID] || (Tt[Le.uniqueID] = {}), ee && ee === Le.nodeName.toLowerCase()) Le = Le[de] || Le;
                                    else {
                                        if ((Xe = ht[me]) && Xe[0] === on && Xe[1] === Re) return qe[2] = Xe[2];
                                        if (ht[me] = qe, qe[2] = I(Le, ze, He)) return !0
                                    } return !1
                    }
                }

                function Zi(I) {
                    return I.length > 1 ? function(F, X, de) {
                        for (var ee = I.length; ee--;)
                            if (!I[ee](F, X, de)) return !1;
                        return !0
                    } : I[0]
                }

                function Ko(I, F, X) {
                    for (var de = 0, ee = F.length; de < ee; de++) St(I, F[de], X);
                    return X
                }

                function er(I, F, X, de, ee) {
                    for (var me, xe = [], Re = 0, Le = I.length, ze = F != null; Re < Le; Re++)(me = I[Re]) && (!X || X(me, de, ee)) && (xe.push(me), ze && F.push(Re));
                    return xe
                }

                function Gr(I, F, X, de, ee, me) {
                    return de && !de[_t] && (de = Gr(de)), ee && !ee[_t] && (ee = Gr(ee, me)), dn(function(xe, Re, Le, ze) {
                        var He, Xe, ht, Tt = [],
                            qe = [],
                            Ut = Re.length,
                            Jt = xe || Ko(F || "*", Le.nodeType ? [Le] : Le, []),
                            fn = I && (xe || !F) ? er(Jt, Tt, I, Le, ze) : Jt,
                            At = X ? ee || (xe ? I : Ut || de) ? [] : Re : fn;
                        if (X && X(fn, At, Le, ze), de)
                            for (He = er(At, qe), de(He, [], Le, ze), Xe = He.length; Xe--;)(ht = He[Xe]) && (At[qe[Xe]] = !(fn[qe[Xe]] = ht));
                        if (xe) {
                            if (ee || I) {
                                if (ee) {
                                    for (He = [], Xe = At.length; Xe--;)(ht = At[Xe]) && He.push(fn[Xe] = ht);
                                    ee(null, At = [], He, ze)
                                }
                                for (Xe = At.length; Xe--;)(ht = At[Xe]) && (He = ee ? Qn(xe, ht) : Tt[Xe]) > -1 && (xe[He] = !(Re[He] = ht))
                            }
                        } else At = er(At === Re ? At.splice(Ut, At.length) : At), ee ? ee(null, Re, At, ze) : Cn.apply(Re, At)
                    })
                }

                function Wr(I) {
                    for (var F, X, de, ee = I.length, me = p.relative[I[0].type], xe = me || p.relative[" "], Re = me ? 1 : 0, Le = Qi(function(Xe) {
                            return Xe === F
                        }, xe, !0), ze = Qi(function(Xe) {
                            return Qn(F, Xe) > -1
                        }, xe, !0), He = [function(Xe, ht, Tt) {
                            var qe = !me && (Tt || ht !== Z) || ((F = ht).nodeType ? Le(Xe, ht, Tt) : ze(Xe, ht, Tt));
                            return F = null, qe
                        }]; Re < ee; Re++)
                        if (X = p.relative[I[Re].type]) He = [Qi(Zi(He), X)];
                        else {
                            if (X = p.filter[I[Re].type].apply(null, I[Re].matches), X[_t]) {
                                for (de = ++Re; de < ee && !p.relative[I[de].type]; de++);
                                return Gr(Re > 1 && Zi(He), Re > 1 && Ji(I.slice(0, Re - 1).concat({
                                    value: I[Re - 2].type === " " ? "*" : ""
                                })).replace(Si, "$1"), X, Re < de && Wr(I.slice(Re, de)), de < ee && Wr(I = I.slice(de)), de < ee && Ji(I))
                            }
                            He.push(X)
                        } return Zi(He)
                }

                function Ms(I, F) {
                    var X = F.length > 0,
                        de = I.length > 0,
                        ee = function(me, xe, Re, Le, ze) {
                            var He, Xe, ht, Tt = 0,
                                qe = "0",
                                Ut = me && [],
                                Jt = [],
                                fn = Z,
                                At = me || de && p.find.TAG("*", ze),
                                c = on += fn == null ? 1 : Math.random() || .1,
                                h = At.length;
                            for (ze && (Z = xe == ce || xe || ze); qe !== h && (He = At[qe]) != null; qe++) {
                                if (de && He) {
                                    for (Xe = 0, !xe && He.ownerDocument != ce && (ne(He), Re = !rt); ht = I[Xe++];)
                                        if (ht(He, xe || ce, Re)) {
                                            Le.push(He);
                                            break
                                        } ze && (on = c)
                                }
                                X && ((He = !ht && He) && Tt--, me && Ut.push(He))
                            }
                            if (Tt += qe, X && qe !== Tt) {
                                for (Xe = 0; ht = F[Xe++];) ht(Ut, Jt, xe, Re);
                                if (me) {
                                    if (Tt > 0)
                                        for (; qe--;) Ut[qe] || Jt[qe] || (Jt[qe] = Mn.call(Le));
                                    Jt = er(Jt)
                                }
                                Cn.apply(Le, Jt), ze && !me && Jt.length > 0 && Tt + F.length > 1 && St.uniqueSort(Le)
                            }
                            return ze && (on = c, Z = fn), Ut
                        };
                    return X ? dn(ee) : ee
                }
                return z = St.compile = function(I, F) {
                    var X, de = [],
                        ee = [],
                        me = Wi[I + " "];
                    if (!me) {
                        for (F || (F = T(I)), X = F.length; X--;) me = Wr(F[X]), me[_t] ? de.push(me) : ee.push(me);
                        me = Wi(I, Ms(ee, de)), me.selector = I
                    }
                    return me
                }, U = St.select = function(I, F, X, de) {
                    var ee, me, xe, Re, Le, ze = typeof I == "function" && I,
                        He = !de && T(I = ze.selector || I);
                    if (X = X || [], He.length === 1) {
                        if (me = He[0] = He[0].slice(0), me.length > 2 && (xe = me[0]).type === "ID" && F.nodeType === 9 && rt && p.relative[me[1].type]) {
                            if (F = (p.find.ID(xe.matches[0].replace(Tn, xn), F) || [])[0], F) ze && (F = F.parentNode);
                            else return X;
                            I = I.slice(me.shift().value.length)
                        }
                        for (ee = qi.needsContext.test(I) ? 0 : me.length; ee-- && (xe = me[ee], !p.relative[Re = xe.type]);)
                            if ((Le = p.find[Re]) && (de = Le(xe.matches[0].replace(Tn, xn), zr.test(me[0].type) && Hr(F.parentNode) || F))) {
                                if (me.splice(ee, 1), I = de.length && Ji(me), !I) return Cn.apply(X, de), X;
                                break
                            }
                    }
                    return (ze || z(I, He))(de, F, !rt, X, !F || zr.test(I) && Hr(F.parentNode) || F), X
                }, u.sortStable = _t.split("").sort(Kn).join("") === _t, u.detectDuplicates = !!we, ne(), u.sortDetached = yn(function(I) {
                    return I.compareDocumentPosition(ce.createElement("fieldset")) & 1
                }), yn(function(I) {
                    return I.innerHTML = "<a href='#'></a>", I.firstChild.getAttribute("href") === "#"
                }) || Yi("type|href|height|width", function(I, F, X) {
                    if (!X) return I.getAttribute(F, F.toLowerCase() === "type" ? 1 : 2)
                }), (!u.attributes || !yn(function(I) {
                    return I.innerHTML = "<input/>", I.firstChild.setAttribute("value", ""), I.firstChild.getAttribute("value") === ""
                })) && Yi("value", function(I, F, X) {
                    if (!X && I.nodeName.toLowerCase() === "input") return I.defaultValue
                }), yn(function(I) {
                    return I.getAttribute("disabled") == null
                }) || Yi(jr, function(I, F, X) {
                    var de;
                    if (!X) return I[F] === !0 ? F.toLowerCase() : (de = I.getAttributeNode(F)) && de.specified ? de.value : null
                }), St
            }(e);
            d.find = Oe, d.expr = Oe.selectors, d.expr[":"] = d.expr.pseudos, d.uniqueSort = d.unique = Oe.uniqueSort, d.text = Oe.getText, d.isXMLDoc = Oe.isXML, d.contains = Oe.contains, d.escapeSelector = Oe.escape;
            var Pe = function(r, s, u) {
                    for (var p = [], b = u !== void 0;
                        (r = r[s]) && r.nodeType !== 9;)
                        if (r.nodeType === 1) {
                            if (b && d(r).is(u)) break;
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

            function H(r, s, u) {
                return re(s) ? d.grep(r, function(p, b) {
                    return !!s.call(p, b, p) !== u
                }) : s.nodeType ? d.grep(r, function(p) {
                    return p === s !== u
                }) : typeof s != "string" ? d.grep(r, function(p) {
                    return S.call(s, p) > -1 !== u
                }) : d.filter(s, r, u)
            }
            d.filter = function(r, s, u) {
                var p = s[0];
                return u && (r = ":not(" + r + ")"), s.length === 1 && p.nodeType === 1 ? d.find.matchesSelector(p, r) ? [p] : [] : d.find.matches(r, d.grep(s, function(b) {
                    return b.nodeType === 1
                }))
            }, d.fn.extend({
                find: function(r) {
                    var s, u, p = this.length,
                        b = this;
                    if (typeof r != "string") return this.pushStack(d(r).filter(function() {
                        for (s = 0; s < p; s++)
                            if (d.contains(b[s], this)) return !0
                    }));
                    for (u = this.pushStack([]), s = 0; s < p; s++) d.find(r, b[s], u);
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
            var oe, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
                be = d.fn.init = function(r, s, u) {
                    var p, b;
                    if (!r) return this;
                    if (u = u || oe, typeof r == "string")
                        if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Te.exec(r), p && (p[1] || !s))
                            if (p[1]) {
                                if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), Fe.test(p[1]) && d.isPlainObject(s))
                                    for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                                return this
                            } else return b = P.getElementById(p[2]), b && (this[0] = b, this.length = 1), this;
                    else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                    else {
                        if (r.nodeType) return this[0] = r, this.length = 1, this;
                        if (re(r)) return u.ready !== void 0 ? u.ready(r) : r(d)
                    }
                    return d.makeArray(r, this)
                };
            be.prototype = d.fn, oe = d(P);
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
                        b = this.length,
                        x = [],
                        T = typeof r != "string" && d(r);
                    if (!Ve.test(r)) {
                        for (; p < b; p++)
                            for (u = this[p]; u && u !== s; u = u.parentNode)
                                if (u.nodeType < 11 && (T ? T.index(u) > -1 : u.nodeType === 1 && d.find.matchesSelector(u, r))) {
                                    x.push(u);
                                    break
                                }
                    }
                    return this.pushStack(x.length > 1 ? d.uniqueSort(x) : x)
                },
                index: function(r) {
                    return r ? typeof r == "string" ? S.call(d(r), this[0]) : S.call(this, r.jquery ? r[0] : r) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
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
                    return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (K(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
                }
            }, function(r, s) {
                d.fn[r] = function(u, p) {
                    var b = d.map(this, s, u);
                    return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (b = d.filter(p, b)), this.length > 1 && (ue[r] || d.uniqueSort(b), ye.test(r) && b.reverse()), this.pushStack(b)
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
                var s, u, p, b, x = [],
                    T = [],
                    z = -1,
                    U = function() {
                        for (b = b || r.once, p = s = !0; T.length; z = -1)
                            for (u = T.shift(); ++z < x.length;) x[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = x.length, u = !1);
                        r.memory || (u = !1), s = !1, b && (u ? x = [] : x = "")
                    },
                    Z = {
                        add: function() {
                            return x && (u && !s && (z = x.length - 1, T.push(u)), function le(we) {
                                d.each(we, function(ne, ce) {
                                    re(ce) ? (!r.unique || !Z.has(ce)) && x.push(ce) : ce && ce.length && se(ce) !== "string" && le(ce)
                                })
                            }(arguments), u && !s && U()), this
                        },
                        remove: function() {
                            return d.each(arguments, function(le, we) {
                                for (var ne;
                                    (ne = d.inArray(we, x, ne)) > -1;) x.splice(ne, 1), ne <= z && z--
                            }), this
                        },
                        has: function(le) {
                            return le ? d.inArray(le, x) > -1 : x.length > 0
                        },
                        empty: function() {
                            return x && (x = []), this
                        },
                        disable: function() {
                            return b = T = [], x = u = "", this
                        },
                        disabled: function() {
                            return !x
                        },
                        lock: function() {
                            return b = T = [], !u && !s && (x = u = ""), this
                        },
                        locked: function() {
                            return !!b
                        },
                        fireWith: function(le, we) {
                            return b || (we = we || [], we = [le, we.slice ? we.slice() : we], T.push(we), s || U()), this
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
                var b;
                try {
                    r && re(b = r.promise) ? b.call(r).done(s).fail(u) : r && re(b = r.then) ? b.call(r, s, u) : s.apply(void 0, [r].slice(p))
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
                                return b.done(arguments).fail(arguments), this
                            },
                            catch: function(x) {
                                return p.then(null, x)
                            },
                            pipe: function() {
                                var x = arguments;
                                return d.Deferred(function(T) {
                                    d.each(s, function(z, U) {
                                        var Z = re(x[U[4]]) && x[U[4]];
                                        b[U[1]](function() {
                                            var le = Z && Z.apply(this, arguments);
                                            le && re(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[U[0] + "With"](this, Z ? [le] : arguments)
                                        })
                                    }), x = null
                                }).promise()
                            },
                            then: function(x, T, z) {
                                var U = 0;

                                function Z(le, we, ne, ce) {
                                    return function() {
                                        var Ge = this,
                                            rt = arguments,
                                            je = function() {
                                                var Nt, un;
                                                if (!(le < U)) {
                                                    if (Nt = ne.apply(Ge, rt), Nt === we.promise()) throw new TypeError("Thenable self-resolution");
                                                    un = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, re(un) ? ce ? un.call(Nt, Z(U, we, Ke, ce), Z(U, we, dt, ce)) : (U++, un.call(Nt, Z(U, we, Ke, ce), Z(U, we, dt, ce), Z(U, we, Ke, we.notifyWith))) : (ne !== Ke && (Ge = void 0, rt = [Nt]), (ce || we.resolveWith)(Ge, rt))
                                                }
                                            },
                                            zt = ce ? je : function() {
                                                try {
                                                    je()
                                                } catch (Nt) {
                                                    d.Deferred.exceptionHook && d.Deferred.exceptionHook(Nt, zt.stackTrace), le + 1 >= U && (ne !== dt && (Ge = void 0, rt = [Nt]), we.rejectWith(Ge, rt))
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
                        b = {};
                    return d.each(s, function(x, T) {
                        var z = T[2],
                            U = T[5];
                        p[T[1]] = z.add, U && z.add(function() {
                            u = U
                        }, s[3 - x][2].disable, s[3 - x][3].disable, s[0][2].lock, s[0][3].lock), z.add(T[3].fire), b[T[0]] = function() {
                            return b[T[0] + "With"](this === b ? void 0 : this, arguments), this
                        }, b[T[0] + "With"] = z.fireWith
                    }), p.promise(b), r && r.call(b, b), b
                },
                when: function(r) {
                    var s = arguments.length,
                        u = s,
                        p = Array(u),
                        b = f.call(arguments),
                        x = d.Deferred(),
                        T = function(z) {
                            return function(U) {
                                p[z] = this, b[z] = arguments.length > 1 ? f.call(arguments) : U, --s || x.resolveWith(p, b)
                            }
                        };
                    if (s <= 1 && (Vt(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(b[u] && b[u].then))) return x.then();
                    for (; u--;) Vt(b[u], T(u), x.reject);
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
            var g = function(r, s, u, p, b, x, T) {
                    var z = 0,
                        U = r.length,
                        Z = u == null;
                    if (se(u) === "object") {
                        b = !0;
                        for (z in u) g(r, s, z, u[z], !0, x, T)
                    } else if (p !== void 0 && (b = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(le, we, ne) {
                            return Z.call(d(le), ne)
                        })), s))
                        for (; z < U; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                    return b ? r : Z ? s.call(r) : U ? s(r[0], u) : x
                },
                k = /^-ms-/,
                R = /-([a-z])/g;

            function L(r, s) {
                return s.toUpperCase()
            }

            function B(r) {
                return r.replace(k, "ms-").replace(R, L)
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
                    var p, b = this.cache(r);
                    if (typeof s == "string") b[B(s)] = u;
                    else
                        for (p in s) b[B(p)] = s[p];
                    return b
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
                De = new Se,
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
                    return De.hasData(r) || he.hasData(r)
                },
                data: function(r, s, u) {
                    return De.access(r, s, u)
                },
                removeData: function(r, s) {
                    De.remove(r, s)
                },
                _data: function(r, s, u) {
                    return he.access(r, s, u)
                },
                _removeData: function(r, s) {
                    he.remove(r, s)
                }
            }), d.fn.extend({
                data: function(r, s) {
                    var u, p, b, x = this[0],
                        T = x && x.attributes;
                    if (r === void 0) {
                        if (this.length && (b = De.get(x), x.nodeType === 1 && !he.get(x, "hasDataAttrs"))) {
                            for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = B(p.slice(5)), rn(x, p, b[p])));
                            he.set(x, "hasDataAttrs", !0)
                        }
                        return b
                    }
                    return typeof r == "object" ? this.each(function() {
                        De.set(this, r)
                    }) : g(this, function(z) {
                        var U;
                        if (x && z === void 0) return U = De.get(x, r), U !== void 0 || (U = rn(x, r), U !== void 0) ? U : void 0;
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
                    if (r) return s = (s || "fx") + "queue", p = he.get(r, s), u && (!p || Array.isArray(u) ? p = he.access(r, s, d.makeArray(u)) : p.push(u)), p || []
                },
                dequeue: function(r, s) {
                    s = s || "fx";
                    var u = d.queue(r, s),
                        p = u.length,
                        b = u.shift(),
                        x = d._queueHooks(r, s),
                        T = function() {
                            d.dequeue(r, s)
                        };
                    b === "inprogress" && (b = u.shift(), p--), b && (s === "fx" && u.unshift("inprogress"), delete x.stop, b.call(r, T, x)), !p && x && x.empty.fire()
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
                        b = d.Deferred(),
                        x = this,
                        T = this.length,
                        z = function() {
                            --p || b.resolveWith(x, [x])
                        };
                    for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = he.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                    return z(), b.promise(s)
                }
            });
            var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                yt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
                wt = ["Top", "Right", "Bottom", "Left"],
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
            var j = function(r, s) {
                return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && d.css(r, "display") === "none"
            };

            function N(r, s, u, p) {
                var b, x, T = 20,
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
                return u && (le = +le || +U || 0, b = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = le, p.end = b)), b
            }
            var q = {};

            function M(r) {
                var s, u = r.ownerDocument,
                    p = r.nodeName,
                    b = q[p];
                return b || (s = u.body.appendChild(u.createElement(p)), b = d.css(s, "display"), s.parentNode.removeChild(s), b === "none" && (b = "block"), q[p] = b, b)
            }

            function G(r, s) {
                for (var u, p, b = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (b[x] = he.get(p, "display") || null, b[x] || (p.style.display = "")), p.style.display === "" && j(p) && (b[x] = M(p))) : u !== "none" && (b[x] = "none", he.set(p, "display", u)));
                for (x = 0; x < T; x++) b[x] != null && (r[x].style.display = b[x]);
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
                Ne = /^$|^module$|\/(?:java|ecma)script/i;
            (function() {
                var r = P.createDocumentFragment(),
                    s = r.appendChild(P.createElement("div")),
                    u = P.createElement("input");
                u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), Y.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", Y.option = !!s.lastChild
            })();
            var Be = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, Y.option || (Be.optgroup = Be.option = [1, "<select multiple='multiple'>", "</select>"]);

            function pt(r, s) {
                var u;
                return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && K(r, s) ? d.merge([r], u) : u
            }

            function jt(r, s) {
                for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
            }
            var Ye = /<|&#?\w+;/;

            function In(r, s, u, p, b) {
                for (var x, T, z, U, Z, le, we = s.createDocumentFragment(), ne = [], ce = 0, Ge = r.length; ce < Ge; ce++)
                    if (x = r[ce], x || x === 0)
                        if (se(x) === "object") d.merge(ne, x.nodeType ? [x] : x);
                        else if (!Ye.test(x)) ne.push(s.createTextNode(x));
                else {
                    for (T = T || we.appendChild(s.createElement("div")), z = (pe.exec(x) || ["", ""])[1].toLowerCase(), U = Be[z] || Be._default, T.innerHTML = U[1] + d.htmlPrefilter(x) + U[2], le = U[0]; le--;) T = T.lastChild;
                    d.merge(ne, T.childNodes), T = we.firstChild, T.textContent = ""
                }
                for (we.textContent = "", ce = 0; x = ne[ce++];) {
                    if (p && d.inArray(x, p) > -1) {
                        b && b.push(x);
                        continue
                    }
                    if (Z = Je(x), T = pt(we.appendChild(x), "script"), Z && jt(T), u)
                        for (le = 0; x = T[le++];) Ne.test(x.type || "") && u.push(x)
                }
                return we
            }
            var Pn = /^([^.]*)(?:\.(.+)|)/;

            function it() {
                return !0
            }

            function Dn() {
                return !1
            }

            function gi(r, s) {
                return r === _r() == (s === "focus")
            }

            function _r() {
                try {
                    return P.activeElement
                } catch {}
            }

            function kn(r, s, u, p, b, x) {
                var T, z;
                if (typeof s == "object") {
                    typeof u != "string" && (p = p || u, u = void 0);
                    for (z in s) kn(r, z, u, p, s[z], x);
                    return r
                }
                if (p == null && b == null ? (b = u, p = u = void 0) : b == null && (typeof u == "string" ? (b = p, p = void 0) : (b = p, p = u, u = void 0)), b === !1) b = Dn;
                else if (!b) return r;
                return x === 1 && (T = b, b = function(U) {
                    return d().off(U), T.apply(this, arguments)
                }, b.guid = T.guid || (T.guid = d.guid++)), r.each(function() {
                    d.event.add(this, s, b, p, u)
                })
            }
            d.event = {
                global: {},
                add: function(r, s, u, p, b) {
                    var x, T, z, U, Z, le, we, ne, ce, Ge, rt, je = he.get(r);
                    if (!!te(r))
                        for (u.handler && (x = u, u = x.handler, b = x.selector), b && d.find.matchesSelector(Kt, b), u.guid || (u.guid = d.guid++), (U = je.events) || (U = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(zt) {
                                return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                            }), s = (s || "").match(ke) || [""], Z = s.length; Z--;) z = Pn.exec(s[Z]) || [], ce = rt = z[1], Ge = (z[2] || "").split(".").sort(), ce && (we = d.event.special[ce] || {}, ce = (b ? we.delegateType : we.bindType) || ce, we = d.event.special[ce] || {}, le = d.extend({
                            type: ce,
                            origType: rt,
                            data: p,
                            handler: u,
                            guid: u.guid,
                            selector: b,
                            needsContext: b && d.expr.match.needsContext.test(b),
                            namespace: Ge.join(".")
                        }, x), (ne = U[ce]) || (ne = U[ce] = [], ne.delegateCount = 0, (!we.setup || we.setup.call(r, p, Ge, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), we.add && (we.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), b ? ne.splice(ne.delegateCount++, 0, le) : ne.push(le), d.event.global[ce] = !0)
                },
                remove: function(r, s, u, p, b) {
                    var x, T, z, U, Z, le, we, ne, ce, Ge, rt, je = he.hasData(r) && he.get(r);
                    if (!(!je || !(U = je.events))) {
                        for (s = (s || "").match(ke) || [""], Z = s.length; Z--;) {
                            if (z = Pn.exec(s[Z]) || [], ce = rt = z[1], Ge = (z[2] || "").split(".").sort(), !ce) {
                                for (ce in U) d.event.remove(r, ce + s[Z], u, p, !0);
                                continue
                            }
                            for (we = d.event.special[ce] || {}, ce = (p ? we.delegateType : we.bindType) || ce, ne = U[ce] || [], z = z[2] && new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) le = ne[x], (b || rt === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (ne.splice(x, 1), le.selector && ne.delegateCount--, we.remove && we.remove.call(r, le));
                            T && !ne.length && ((!we.teardown || we.teardown.call(r, Ge, je.handle) === !1) && d.removeEvent(r, ce, je.handle), delete U[ce])
                        }
                        d.isEmptyObject(U) && he.remove(r, "handle events")
                    }
                },
                dispatch: function(r) {
                    var s, u, p, b, x, T, z = new Array(arguments.length),
                        U = d.event.fix(r),
                        Z = (he.get(this, "events") || Object.create(null))[U.type] || [],
                        le = d.event.special[U.type] || {};
                    for (z[0] = U, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                    if (U.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, U) === !1)) {
                        for (T = d.event.handlers.call(this, U, Z), s = 0;
                            (b = T[s++]) && !U.isPropagationStopped();)
                            for (U.currentTarget = b.elem, u = 0;
                                (x = b.handlers[u++]) && !U.isImmediatePropagationStopped();)(!U.rnamespace || x.namespace === !1 || U.rnamespace.test(x.namespace)) && (U.handleObj = x, U.data = x.data, p = ((d.event.special[x.origType] || {}).handle || x.handler).apply(b.elem, z), p !== void 0 && (U.result = p) === !1 && (U.preventDefault(), U.stopPropagation()));
                        return le.postDispatch && le.postDispatch.call(this, U), U.result
                    }
                },
                handlers: function(r, s) {
                    var u, p, b, x, T, z = [],
                        U = s.delegateCount,
                        Z = r.target;
                    if (U && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                        for (; Z !== this; Z = Z.parentNode || this)
                            if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                                for (x = [], T = {}, u = 0; u < U; u++) p = s[u], b = p.selector + " ", T[b] === void 0 && (T[b] = p.needsContext ? d(b, this).index(Z) > -1 : d.find(b, this, null, [Z]).length), T[b] && x.push(p);
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
                            return fe.test(s.type) && s.click && K(s, "input") && sn(s, "click", it), !1
                        },
                        trigger: function(r) {
                            var s = this || r;
                            return fe.test(s.type) && s.click && K(s, "input") && sn(s, "click"), !0
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

            function sn(r, s, u) {
                if (!u) {
                    he.get(r, s) === void 0 && d.event.add(r, s, it);
                    return
                }
                he.set(r, s, !1), d.event.add(r, s, {
                    namespace: !1,
                    handler: function(p) {
                        var b, x, T = he.get(this, s);
                        if (p.isTrigger & 1 && this[s]) {
                            if (T.length)(d.event.special[s] || {}).delegateType && p.stopPropagation();
                            else if (T = f.call(arguments), he.set(this, s, T), b = u(this, s), this[s](), x = he.get(this, s), T !== x || b ? he.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
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
                        var p, b = this,
                            x = u.relatedTarget,
                            T = u.handleObj;
                        return (!x || x !== b && !d.contains(b, x)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = s), p
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
                    var p, b;
                    if (r && r.preventDefault && r.handleObj) return p = r.handleObj, d(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                    if (typeof r == "object") {
                        for (b in r) this.off(b, s, r[b]);
                        return this
                    }
                    return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Dn), this.each(function() {
                        d.event.remove(this, r, u, s)
                    })
                }
            });
            var Sr = /<script|<style|<link/i,
                kr = /checked\s*(?:[^=]|=\s*.checked.)/i,
                mi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Vi(r, s) {
                return K(r, "table") && K(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
            }

            function vi(r) {
                return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
            }

            function yi(r) {
                return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
            }

            function $i(r, s) {
                var u, p, b, x, T, z, U;
                if (s.nodeType === 1) {
                    if (he.hasData(r) && (x = he.get(r), U = x.events, U)) {
                        he.remove(s, "handle events");
                        for (b in U)
                            for (u = 0, p = U[b].length; u < p; u++) d.event.add(s, b, U[b][u])
                    }
                    De.hasData(r) && (T = De.access(r), z = d.extend({}, T), De.set(s, z))
                }
            }

            function ji(r, s) {
                var u = s.nodeName.toLowerCase();
                u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
            }

            function mn(r, s, u, p) {
                s = v(s);
                var b, x, T, z, U, Z, le = 0,
                    we = r.length,
                    ne = we - 1,
                    ce = s[0],
                    Ge = re(ce);
                if (Ge || we > 1 && typeof ce == "string" && !Y.checkClone && kr.test(ce)) return r.each(function(rt) {
                    var je = r.eq(rt);
                    Ge && (s[0] = ce.call(this, rt, je.html())), mn(je, s, u, p)
                });
                if (we && (b = In(s, r[0].ownerDocument, !1, r, p), x = b.firstChild, b.childNodes.length === 1 && (b = x), x || p)) {
                    for (T = d.map(pt(b, "script"), vi), z = T.length; le < we; le++) U = b, le !== ne && (U = d.clone(U, !0, !0), z && d.merge(T, pt(U, "script"))), u.call(r[le], U, le);
                    if (z)
                        for (Z = T[T.length - 1].ownerDocument, d.map(T, yi), le = 0; le < z; le++) U = T[le], Ne.test(U.type || "") && !he.access(U, "globalEval") && d.contains(Z, U) && (U.src && (U.type || "").toLowerCase() !== "module" ? d._evalUrl && !U.noModule && d._evalUrl(U.src, {
                            nonce: U.nonce || U.getAttribute("nonce")
                        }, Z) : ae(U.textContent.replace(mi, ""), U, Z))
                }
                return r
            }

            function Fi(r, s, u) {
                for (var p, b = s ? d.filter(s, r) : r, x = 0;
                    (p = b[x]) != null; x++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Je(p) && jt(pt(p, "script")), p.parentNode.removeChild(p));
                return r
            }
            d.extend({
                htmlPrefilter: function(r) {
                    return r
                },
                clone: function(r, s, u) {
                    var p, b, x, T, z = r.cloneNode(!0),
                        U = Je(r);
                    if (!Y.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                        for (T = pt(z), x = pt(r), p = 0, b = x.length; p < b; p++) ji(x[p], T[p]);
                    if (s)
                        if (u)
                            for (x = x || pt(r), T = T || pt(z), p = 0, b = x.length; p < b; p++) $i(x[p], T[p]);
                        else $i(r, z);
                    return T = pt(z, "script"), T.length > 0 && jt(T, !U && pt(r, "script")), z
                },
                cleanData: function(r) {
                    for (var s, u, p, b = d.event.special, x = 0;
                        (u = r[x]) !== void 0; x++)
                        if (te(u)) {
                            if (s = u[he.expando]) {
                                if (s.events)
                                    for (p in s.events) b[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                                u[he.expando] = void 0
                            }
                            u[De.expando] && (u[De.expando] = void 0)
                        }
                }
            }), d.fn.extend({
                detach: function(r) {
                    return Fi(this, r, !0)
                },
                remove: function(r) {
                    return Fi(this, r)
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
                            var s = Vi(this, r);
                            s.appendChild(r)
                        }
                    })
                },
                prepend: function() {
                    return mn(this, arguments, function(r) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var s = Vi(this, r);
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
                            b = this.length;
                        if (s === void 0 && u.nodeType === 1) return u.innerHTML;
                        if (typeof s == "string" && !Sr.test(s) && !Be[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
                            s = d.htmlPrefilter(s);
                            try {
                                for (; p < b; p++) u = this[p] || {}, u.nodeType === 1 && (d.cleanData(pt(u, !1)), u.innerHTML = s);
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
                    for (var p, b = [], x = d(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), d(x[z])[s](p), _.apply(b, p.get());
                    return this.pushStack(b)
                }
            });
            var bi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
                Un = function(r) {
                    var s = r.ownerDocument.defaultView;
                    return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
                },
                zi = function(r, s, u) {
                    var p, b, x = {};
                    for (b in s) x[b] = r.style[b], r.style[b] = s[b];
                    p = u.call(r);
                    for (b in s) r.style[b] = x[b];
                    return p
                },
                wi = new RegExp(wt.join("|"), "i");
            (function() {
                function r() {
                    if (!!Z) {
                        U.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Kt.appendChild(U).appendChild(Z);
                        var le = e.getComputedStyle(Z);
                        u = le.top !== "1%", z = s(le.marginLeft) === 12, Z.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, Z.style.position = "absolute", b = s(Z.offsetWidth / 3) === 12, Kt.removeChild(U), Z = null
                    }
                }

                function s(le) {
                    return Math.round(parseFloat(le))
                }
                var u, p, b, x, T, z, U = P.createElement("div"),
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
                        return r(), b
                    },
                    reliableTrDimensions: function() {
                        var le, we, ne, ce;
                        return T == null && (le = P.createElement("table"), we = P.createElement("tr"), ne = P.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", we.style.cssText = "border:1px solid", we.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Kt.appendChild(le).appendChild(we).appendChild(ne), ce = e.getComputedStyle(we), T = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === we.offsetHeight, Kt.removeChild(le)), T
                    }
                }))
            })();

            function Ze(r, s, u) {
                var p, b, x, T, z = r.style;
                return u = u || Un(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = d.style(r, s)), !Y.pixelBoxStyles() && bi.test(T) && wi.test(s) && (p = z.width, b = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = b, z.maxWidth = x)), T !== void 0 ? T + "" : T
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
                qt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Hn = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function Nn(r, s, u) {
                var p = yt.exec(s);
                return p ? Math.max(0, p[2] - (u || 0)) + (p[3] || "px") : s
            }

            function Gn(r, s, u, p, b, x) {
                var T = s === "width" ? 1 : 0,
                    z = 0,
                    U = 0;
                if (u === (p ? "border" : "content")) return 0;
                for (; T < 4; T += 2) u === "margin" && (U += d.css(r, u + wt[T], !0, b)), p ? (u === "content" && (U -= d.css(r, "padding" + wt[T], !0, b)), u !== "margin" && (U -= d.css(r, "border" + wt[T] + "Width", !0, b))) : (U += d.css(r, "padding" + wt[T], !0, b), u !== "padding" ? U += d.css(r, "border" + wt[T] + "Width", !0, b) : z += d.css(r, "border" + wt[T] + "Width", !0, b));
                return !p && x >= 0 && (U += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - U - z - .5)) || 0), U
            }

            function Tr(r, s, u) {
                var p = Un(r),
                    b = !Y.boxSizingReliable() || u,
                    x = b && d.css(r, "boxSizing", !1, p) === "border-box",
                    T = x,
                    z = Ze(r, s, p),
                    U = "offset" + s[0].toUpperCase() + s.slice(1);
                if (bi.test(z)) {
                    if (!u) return z;
                    z = "auto"
                }
                return (!Y.boxSizingReliable() && x || !Y.reliableTrDimensions() && K(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = d.css(r, "boxSizing", !1, p) === "border-box", T = U in r, T && (z = r[U])), z = parseFloat(z) || 0, z + Gn(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
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
                        var b, x, T, z = B(s),
                            U = It.test(s),
                            Z = r.style;
                        if (U || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                            if (x = typeof u, x === "string" && (b = yt.exec(u)) && b[1] && (u = N(r, s, b), x = "number"), u == null || u !== u) return;
                            x === "number" && !U && (u += b && b[3] || (d.cssNumber[z] ? "" : "px")), !Y.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (U ? Z.setProperty(s, u) : Z[s] = u)
                        } else return T && "get" in T && (b = T.get(r, !1, p)) !== void 0 ? b : Z[s]
                    }
                },
                css: function(r, s, u, p) {
                    var b, x, T, z = B(s),
                        U = It.test(s);
                    return U || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (b = T.get(r, !0, u)), b === void 0 && (b = Ze(r, s, p)), b === "normal" && s in Hn && (b = Hn[s]), u === "" || u ? (x = parseFloat(b), u === !0 || isFinite(x) ? x || 0 : b) : b
                }
            }), d.each(["height", "width"], function(r, s) {
                d.cssHooks[s] = {
                    get: function(u, p, b) {
                        if (p) return We.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? zi(u, qt, function() {
                            return Tr(u, s, b)
                        }) : Tr(u, s, b)
                    },
                    set: function(u, p, b) {
                        var x, T = Un(u),
                            z = !Y.scrollboxSize() && T.position === "absolute",
                            U = z || b,
                            Z = U && d.css(u, "boxSizing", !1, T) === "border-box",
                            le = b ? Gn(u, s, b, Z, T) : 0;
                        return Z && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Gn(u, s, "border", !1, T) - .5)), le && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Nn(u, p, le)
                    }
                }
            }), d.cssHooks.marginLeft = y(Y.reliableMarginLeft, function(r, s) {
                if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - zi(r, {
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
                        for (var p = 0, b = {}, x = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) b[r + wt[p] + s] = x[p] || x[p - 2] || x[0];
                        return b
                    }
                }, r !== "margin" && (d.cssHooks[r + s].set = Nn)
            }), d.fn.extend({
                css: function(r, s) {
                    return g(this, function(u, p, b) {
                        var x, T, z = {},
                            U = 0;
                        if (Array.isArray(p)) {
                            for (x = Un(u), T = p.length; U < T; U++) z[p[U]] = d.css(u, p[U], !1, x);
                            return z
                        }
                        return b !== void 0 ? d.style(u, p, b) : d.css(u, p)
                    }, r, s, arguments.length > 1)
                }
            });

            function Xt(r, s, u, p, b) {
                return new Xt.prototype.init(r, s, u, p, b)
            }
            d.Tween = Xt, Xt.prototype = {
                constructor: Xt,
                init: function(r, s, u, p, b, x) {
                    this.elem = r, this.prop = u, this.easing = b || d.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (d.cssNumber[u] ? "" : "px")
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
            var Ft, Ui, Co = /^(?:toggle|show|hide)$/,
                xo = /queueHooks$/;

            function Ar() {
                Ui && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Ar) : e.setTimeout(Ar, d.fx.interval), d.fx.tick())
            }

            function Or() {
                return e.setTimeout(function() {
                    Ft = void 0
                }), Ft = Date.now()
            }

            function Hi(r, s) {
                var u, p = 0,
                    b = {
                        height: r
                    };
                for (s = s ? 1 : 0; p < 4; p += 2 - s) u = wt[p], b["margin" + u] = b["padding" + u] = r;
                return s && (b.opacity = b.width = r), b
            }

            function gs(r, s, u) {
                for (var p, b = (wn.tweeners[s] || []).concat(wn.tweeners["*"]), x = 0, T = b.length; x < T; x++)
                    if (p = b[x].call(u, s, r)) return p
            }

            function Eo(r, s, u) {
                var p, b, x, T, z, U, Z, le, we = "width" in s || "height" in s,
                    ne = this,
                    ce = {},
                    Ge = r.style,
                    rt = r.nodeType && j(r),
                    je = he.get(r, "fxshow");
                u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                    T.unqueued || z()
                }), T.unqueued++, ne.always(function() {
                    ne.always(function() {
                        T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                    })
                }));
                for (p in s)
                    if (b = s[p], Co.test(b)) {
                        if (delete s[p], x = x || b === "toggle", b === (rt ? "hide" : "show"))
                            if (b === "show" && je && je[p] !== void 0) rt = !0;
                            else continue;
                        ce[p] = je && je[p] || d.style(r, p)
                    } if (U = !d.isEmptyObject(s), !(!U && d.isEmptyObject(ce))) {
                    we && r.nodeType === 1 && (u.overflow = [Ge.overflow, Ge.overflowX, Ge.overflowY], Z = je && je.display, Z == null && (Z = he.get(r, "display")), le = d.css(r, "display"), le === "none" && (Z ? le = Z : (G([r], !0), Z = r.style.display || Z, le = d.css(r, "display"), G([r]))), (le === "inline" || le === "inline-block" && Z != null) && d.css(r, "float") === "none" && (U || (ne.done(function() {
                        Ge.display = Z
                    }), Z == null && (le = Ge.display, Z = le === "none" ? "" : le)), Ge.display = "inline-block")), u.overflow && (Ge.overflow = "hidden", ne.always(function() {
                        Ge.overflow = u.overflow[0], Ge.overflowX = u.overflow[1], Ge.overflowY = u.overflow[2]
                    })), U = !1;
                    for (p in ce) U || (je ? "hidden" in je && (rt = je.hidden) : je = he.access(r, "fxshow", {
                        display: Z
                    }), x && (je.hidden = !rt), rt && G([r], !0), ne.done(function() {
                        rt || G([r]), he.remove(r, "fxshow");
                        for (p in ce) d.style(r, p, ce[p])
                    })), U = gs(rt ? je[p] : 0, p, ne), p in je || (je[p] = U.start, rt && (U.end = U.start, U.start = 0))
                }
            }

            function ms(r, s) {
                var u, p, b, x, T;
                for (u in r)
                    if (p = B(u), b = s[p], x = r[u], Array.isArray(x) && (b = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = d.cssHooks[p], T && "expand" in T) {
                        x = T.expand(x), delete r[p];
                        for (u in x) u in r || (r[u] = x[u], s[u] = b)
                    } else s[p] = b
            }

            function wn(r, s, u) {
                var p, b, x = 0,
                    T = wn.prefilters.length,
                    z = d.Deferred().always(function() {
                        delete U.elem
                    }),
                    U = function() {
                        if (b) return !1;
                        for (var we = Ft || Or(), ne = Math.max(0, Z.startTime + Z.duration - we), ce = ne / Z.duration || 0, Ge = 1 - ce, rt = 0, je = Z.tweens.length; rt < je; rt++) Z.tweens[rt].run(Ge);
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
                        startTime: Ft || Or(),
                        duration: u.duration,
                        tweens: [],
                        createTween: function(we, ne) {
                            var ce = d.Tween(r, Z.opts, we, ne, Z.opts.specialEasing[we] || Z.opts.easing);
                            return Z.tweens.push(ce), ce
                        },
                        stop: function(we) {
                            var ne = 0,
                                ce = we ? Z.tweens.length : 0;
                            if (b) return this;
                            for (b = !0; ne < ce; ne++) Z.tweens[ne].run(1);
                            return we ? (z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z, we])) : z.rejectWith(r, [Z, we]), this
                        }
                    }),
                    le = Z.props;
                for (ms(le, Z.opts.specialEasing); x < T; x++)
                    if (p = wn.prefilters[x].call(Z, r, le, Z.opts), p) return re(p.stop) && (d._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
                return d.map(le, gs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), d.fx.timer(d.extend(U, {
                    elem: r,
                    anim: Z,
                    queue: Z.opts.queue
                })), Z
            }
            d.Animation = d.extend(wn, {
                    tweeners: {
                        "*": [function(r, s) {
                            var u = this.createTween(r, s);
                            return N(u.elem, r, yt.exec(s), u), u
                        }]
                    },
                    tweener: function(r, s) {
                        re(r) ? (s = r, r = ["*"]) : r = r.match(ke);
                        for (var u, p = 0, b = r.length; p < b; p++) u = r[p], wn.tweeners[u] = wn.tweeners[u] || [], wn.tweeners[u].unshift(s)
                    },
                    prefilters: [Eo],
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
                        var b = d.isEmptyObject(r),
                            x = d.speed(s, u, p),
                            T = function() {
                                var z = wn(this, d.extend({}, r), x);
                                (b || he.get(this, "finish")) && z.stop(!0)
                            };
                        return T.finish = T, b || x.queue === !1 ? this.each(T) : this.queue(x.queue, T)
                    },
                    stop: function(r, s, u) {
                        var p = function(b) {
                            var x = b.stop;
                            delete b.stop, x(u)
                        };
                        return typeof r != "string" && (u = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
                            var b = !0,
                                x = r != null && r + "queueHooks",
                                T = d.timers,
                                z = he.get(this);
                            if (x) z[x] && z[x].stop && p(z[x]);
                            else
                                for (x in z) z[x] && z[x].stop && xo.test(x) && p(z[x]);
                            for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), b = !1, T.splice(x, 1));
                            (b || !u) && d.dequeue(this, r)
                        })
                    },
                    finish: function(r) {
                        return r !== !1 && (r = r || "fx"), this.each(function() {
                            var s, u = he.get(this),
                                p = u[r + "queue"],
                                b = u[r + "queueHooks"],
                                x = d.timers,
                                T = p ? p.length : 0;
                            for (u.finish = !0, d.queue(this, r, []), b && b.stop && b.stop.call(this, !0), s = x.length; s--;) x[s].elem === this && x[s].queue === r && (x[s].anim.stop(!0), x.splice(s, 1));
                            for (s = 0; s < T; s++) p[s] && p[s].finish && p[s].finish.call(this);
                            delete u.finish
                        })
                    }
                }), d.each(["toggle", "show", "hide"], function(r, s) {
                    var u = d.fn[s];
                    d.fn[s] = function(p, b, x) {
                        return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Hi(s, !0), p, b, x)
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
                    d.fn[r] = function(u, p, b) {
                        return this.animate(s, u, p, b)
                    }
                }), d.timers = [], d.fx.tick = function() {
                    var r, s = 0,
                        u = d.timers;
                    for (Ft = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                    u.length || d.fx.stop(), Ft = void 0
                }, d.fx.timer = function(r) {
                    d.timers.push(r), d.fx.start()
                }, d.fx.interval = 13, d.fx.start = function() {
                    Ui || (Ui = !0, Ar())
                }, d.fx.stop = function() {
                    Ui = null
                }, d.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                }, d.fn.delay = function(r, s) {
                    return r = d.fx && d.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(u, p) {
                        var b = e.setTimeout(u, r);
                        p.stop = function() {
                            e.clearTimeout(b)
                        }
                    })
                },
                function() {
                    var r = P.createElement("input"),
                        s = P.createElement("select"),
                        u = s.appendChild(P.createElement("option"));
                    r.type = "checkbox", Y.checkOn = r.value !== "", Y.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", Y.radioValue = r.value === "t"
                }();
            var Rr, Ci = d.expr.attrHandle;
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
                    var p, b, x = r.nodeType;
                    if (!(x === 3 || x === 8 || x === 2)) {
                        if (typeof r.getAttribute > "u") return d.prop(r, s, u);
                        if ((x !== 1 || !d.isXMLDoc(r)) && (b = d.attrHooks[s.toLowerCase()] || (d.expr.match.bool.test(s) ? Rr : void 0)), u !== void 0) {
                            if (u === null) {
                                d.removeAttr(r, s);
                                return
                            }
                            return b && "set" in b && (p = b.set(r, u, s)) !== void 0 ? p : (r.setAttribute(s, u + ""), u)
                        }
                        return b && "get" in b && (p = b.get(r, s)) !== null ? p : (p = d.find.attr(r, s), p == null ? void 0 : p)
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
                        b = s && s.match(ke);
                    if (b && r.nodeType === 1)
                        for (; u = b[p++];) r.removeAttribute(u)
                }
            }), Rr = {
                set: function(r, s, u) {
                    return s === !1 ? d.removeAttr(r, u) : r.setAttribute(u, u), u
                }
            }, d.each(d.expr.match.bool.source.match(/\w+/g), function(r, s) {
                var u = Ci[s] || d.find.attr;
                Ci[s] = function(p, b, x) {
                    var T, z, U = b.toLowerCase();
                    return x || (z = Ci[U], Ci[U] = T, T = u(p, b, x) != null ? U : null, Ci[U] = z), T
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
                    var p, b, x = r.nodeType;
                    if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !d.isXMLDoc(r)) && (s = d.propFix[s] || s, b = d.propHooks[s]), u !== void 0 ? b && "set" in b && (p = b.set(r, u, s)) !== void 0 ? p : r[s] = u : b && "get" in b && (p = b.get(r, s)) !== null ? p : r[s]
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

            function qn(r) {
                return r.getAttribute && r.getAttribute("class") || ""
            }

            function Ir(r) {
                return Array.isArray(r) ? r : typeof r == "string" ? r.match(ke) || [] : []
            }
            d.fn.extend({
                addClass: function(r) {
                    var s, u, p, b, x, T, z, U = 0;
                    if (re(r)) return this.each(function(Z) {
                        d(this).addClass(r.call(this, Z, qn(this)))
                    });
                    if (s = Ir(r), s.length) {
                        for (; u = this[U++];)
                            if (b = qn(u), p = u.nodeType === 1 && " " + Wn(b) + " ", p) {
                                for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                                z = Wn(p), b !== z && u.setAttribute("class", z)
                            }
                    }
                    return this
                },
                removeClass: function(r) {
                    var s, u, p, b, x, T, z, U = 0;
                    if (re(r)) return this.each(function(Z) {
                        d(this).removeClass(r.call(this, Z, qn(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if (s = Ir(r), s.length) {
                        for (; u = this[U++];)
                            if (b = qn(u), p = u.nodeType === 1 && " " + Wn(b) + " ", p) {
                                for (T = 0; x = s[T++];)
                                    for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                                z = Wn(p), b !== z && u.setAttribute("class", z)
                            }
                    }
                    return this
                },
                toggleClass: function(r, s) {
                    var u = typeof r,
                        p = u === "string" || Array.isArray(r);
                    return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(b) {
                        d(this).toggleClass(r.call(this, b, qn(this), s), s)
                    }) : this.each(function() {
                        var b, x, T, z;
                        if (p)
                            for (x = 0, T = d(this), z = Ir(r); b = z[x++];) T.hasClass(b) ? T.removeClass(b) : T.addClass(b);
                        else(r === void 0 || u === "boolean") && (b = qn(this), b && he.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || r === !1 ? "" : he.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(r) {
                    var s, u, p = 0;
                    for (s = " " + r + " "; u = this[p++];)
                        if (u.nodeType === 1 && (" " + Wn(qn(u)) + " ").indexOf(s) > -1) return !0;
                    return !1
                }
            });
            var ko = /\r/g;
            d.fn.extend({
                val: function(r) {
                    var s, u, p, b = this[0];
                    return arguments.length ? (p = re(r), this.each(function(x) {
                        var T;
                        this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                            return z == null ? "" : z + ""
                        })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                    })) : b ? (s = d.valHooks[b.type] || d.valHooks[b.nodeName.toLowerCase()], s && "get" in s && (u = s.get(b, "value")) !== void 0 ? u : (u = b.value, typeof u == "string" ? u.replace(ko, "") : u == null ? "" : u)) : void 0
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
                            var s, u, p, b = r.options,
                                x = r.selectedIndex,
                                T = r.type === "select-one",
                                z = T ? null : [],
                                U = T ? x + 1 : b.length;
                            for (x < 0 ? p = U : p = T ? x : 0; p < U; p++)
                                if (u = b[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !K(u.parentNode, "optgroup"))) {
                                    if (s = d(u).val(), T) return s;
                                    z.push(s)
                                } return z
                        },
                        set: function(r, s) {
                            for (var u, p, b = r.options, x = d.makeArray(s), T = b.length; T--;) p = b[T], (p.selected = d.inArray(d.valHooks.option.get(p), x) > -1) && (u = !0);
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
            var Dr = /^(?:focusinfocus|focusoutblur)$/,
                Xn = function(r) {
                    r.stopPropagation()
                };
            d.extend(d.event, {
                trigger: function(r, s, u, p) {
                    var b, x, T, z, U, Z, le, we, ne = [u || P],
                        ce = $.call(r, "type") ? r.type : r,
                        Ge = $.call(r, "namespace") ? r.namespace.split(".") : [];
                    if (x = we = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Dr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (Ge = ce.split("."), ce = Ge.shift(), Ge.sort()), U = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ge.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                        if (!p && !le.noBubble && !m(u)) {
                            for (z = le.delegateType || ce, Dr.test(z + ce) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                            T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                        }
                        for (b = 0;
                            (x = ne[b++]) && !r.isPropagationStopped();) we = x, r.type = b > 1 ? z : le.bindType || ce, Z = (he.get(x, "events") || Object.create(null))[r.type] && he.get(x, "handle"), Z && Z.apply(x, s), Z = U && x[U], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                        return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(ne.pop(), s) === !1) && te(u) && U && re(u[ce]) && !m(u) && (T = u[U], T && (u[U] = null), d.event.triggered = ce, r.isPropagationStopped() && we.addEventListener(ce, Xn), u[ce](), r.isPropagationStopped() && we.removeEventListener(ce, Xn), d.event.triggered = void 0, T && (u[U] = T)), r.result
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
                            b = he.access(p, s);
                        b || p.addEventListener(r, u, !0), he.access(p, s, (b || 0) + 1)
                    },
                    teardown: function() {
                        var p = this.ownerDocument || this.document || this,
                            b = he.access(p, s) - 1;
                        b ? he.access(p, s, b) : (p.removeEventListener(r, u, !0), he.remove(p, s))
                    }
                }
            });
            var xi = e.location,
                Mr = {
                    guid: Date.now()
                },
                Gi = /\?/;
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

            function Lr(r, s, u, p) {
                var b;
                if (Array.isArray(s)) d.each(s, function(x, T) {
                    u || To.test(r) ? p(r, T) : Lr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
                });
                else if (!u && se(s) === "object")
                    for (b in s) Lr(r + "[" + b + "]", s[b], u, p);
                else p(r, s)
            }
            d.param = function(r, s) {
                var u, p = [],
                    b = function(x, T) {
                        var z = re(T) ? T() : T;
                        p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(z == null ? "" : z)
                    };
                if (r == null) return "";
                if (Array.isArray(r) || r.jquery && !d.isPlainObject(r)) d.each(r, function() {
                    b(this.name, this.value)
                });
                else
                    for (u in r) Lr(u, r[u], s, b);
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
                Do = /([?&])_=[^&]*/,
                Yn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
                ys = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                Mo = /^(?:GET|HEAD)$/,
                Lo = /^\/\//,
                bs = {},
                Pr = {},
                ws = "*/".concat("*"),
                Nr = P.createElement("a");
            Nr.href = xi.href;

            function Cs(r) {
                return function(s, u) {
                    typeof s != "string" && (u = s, s = "*");
                    var p, b = 0,
                        x = s.toLowerCase().match(ke) || [];
                    if (re(u))
                        for (; p = x[b++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
                }
            }

            function xs(r, s, u, p) {
                var b = {},
                    x = r === Pr;

                function T(z) {
                    var U;
                    return b[z] = !0, d.each(r[z] || [], function(Z, le) {
                        var we = le(s, u, p);
                        if (typeof we == "string" && !x && !b[we]) return s.dataTypes.unshift(we), T(we), !1;
                        if (x) return !(U = we)
                    }), U
                }
                return T(s.dataTypes[0]) || !b["*"] && T("*")
            }

            function Br(r, s) {
                var u, p, b = d.ajaxSettings.flatOptions || {};
                for (u in s) s[u] !== void 0 && ((b[u] ? r : p || (p = {}))[u] = s[u]);
                return p && d.extend(!0, r, p), r
            }

            function Po(r, s, u) {
                for (var p, b, x, T, z = r.contents, U = r.dataTypes; U[0] === "*";) U.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
                if (p) {
                    for (b in z)
                        if (z[b] && z[b].test(p)) {
                            U.unshift(b);
                            break
                        }
                }
                if (U[0] in u) x = U[0];
                else {
                    for (b in u) {
                        if (!U[0] || r.converters[b + " " + U[0]]) {
                            x = b;
                            break
                        }
                        T || (T = b)
                    }
                    x = x || T
                }
                if (x) return x !== U[0] && U.unshift(x), u[x]
            }

            function No(r, s, u, p) {
                var b, x, T, z, U, Z = {},
                    le = r.dataTypes.slice();
                if (le[1])
                    for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
                for (x = le.shift(); x;)
                    if (r.responseFields[x] && (u[r.responseFields[x]] = s), !U && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), U = x, x = le.shift(), x) {
                        if (x === "*") x = U;
                        else if (U !== "*" && U !== x) {
                            if (T = Z[U + " " + x] || Z["* " + x], !T) {
                                for (b in Z)
                                    if (z = b.split(" "), z[1] === x && (T = Z[U + " " + z[0]] || Z["* " + z[0]], T)) {
                                        T === !0 ? T = Z[b] : Z[b] !== !0 && (x = z[0], le.unshift(z[1]));
                                        break
                                    }
                            }
                            if (T !== !0)
                                if (T && r.throws) s = T(s);
                                else try {
                                    s = T(s)
                                } catch (we) {
                                    return {
                                        state: "parsererror",
                                        error: T ? we : "No conversion from " + U + " to " + x
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
                    return s ? Br(Br(r, d.ajaxSettings), s) : Br(d.ajaxSettings, r)
                },
                ajaxPrefilter: Cs(bs),
                ajaxTransport: Cs(Pr),
                ajax: function(r, s) {
                    typeof r == "object" && (s = r, r = void 0), s = s || {};
                    var u, p, b, x, T, z, U, Z, le, we, ne = d.ajaxSetup({}, s),
                        ce = ne.context || ne,
                        Ge = ne.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                        rt = d.Deferred(),
                        je = d.Callbacks("once memory"),
                        zt = ne.statusCode || {},
                        Nt = {},
                        un = {},
                        _t = "canceled",
                        et = {
                            readyState: 0,
                            getResponseHeader: function(ft) {
                                var Dt;
                                if (U) {
                                    if (!x)
                                        for (x = {}; Dt = Yn.exec(b);) x[Dt[1].toLowerCase() + " "] = (x[Dt[1].toLowerCase() + " "] || []).concat(Dt[2]);
                                    Dt = x[ft.toLowerCase() + " "]
                                }
                                return Dt == null ? null : Dt.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return U ? b : null
                            },
                            setRequestHeader: function(ft, Dt) {
                                return U == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Nt[ft] = Dt), this
                            },
                            overrideMimeType: function(ft) {
                                return U == null && (ne.mimeType = ft), this
                            },
                            statusCode: function(ft) {
                                var Dt;
                                if (ft)
                                    if (U) et.always(ft[et.status]);
                                    else
                                        for (Dt in ft) zt[Dt] = [zt[Dt], ft[Dt]];
                                return this
                            },
                            abort: function(ft) {
                                var Dt = ft || _t;
                                return u && u.abort(Dt), on(0, Dt), this
                            }
                        };
                    if (rt.promise(et), ne.url = ((r || ne.url || xi.href) + "").replace(Lo, xi.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(ke) || [""], ne.crossDomain == null) {
                        z = P.createElement("a");
                        try {
                            z.href = ne.url, z.href = z.href, ne.crossDomain = Nr.protocol + "//" + Nr.host != z.protocol + "//" + z.host
                        } catch {
                            ne.crossDomain = !0
                        }
                    }
                    if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = d.param(ne.data, ne.traditional)), xs(bs, ne, s, et), U) return et;
                    Z = d.event && ne.global, Z && d.active++ === 0 && d.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Mo.test(ne.type), p = ne.url.replace(Io, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Ro, "+")) : (we = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (Gi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Do, "$1"), we = (Gi.test(p) ? "&" : "?") + "_=" + Mr.guid++ + we), ne.url = p + we), ne.ifModified && (d.lastModified[p] && et.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && et.setRequestHeader("If-None-Match", d.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", ne.contentType), et.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + ws + "; q=0.01" : "") : ne.accepts["*"]);
                    for (le in ne.headers) et.setRequestHeader(le, ne.headers[le]);
                    if (ne.beforeSend && (ne.beforeSend.call(ce, et, ne) === !1 || U)) return et.abort();
                    if (_t = "abort", je.add(ne.complete), et.done(ne.success), et.fail(ne.error), u = xs(Pr, ne, s, et), !u) on(-1, "No Transport");
                    else {
                        if (et.readyState = 1, Z && Ge.trigger("ajaxSend", [et, ne]), U) return et;
                        ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                            et.abort("timeout")
                        }, ne.timeout));
                        try {
                            U = !1, u.send(Nt, on)
                        } catch (ft) {
                            if (U) throw ft;
                            on(-1, ft)
                        }
                    }

                    function on(ft, Dt, _i, Wi) {
                        var hn, Kn, Jn, an, Mn, vn = Dt;
                        U || (U = !0, T && e.clearTimeout(T), u = void 0, b = Wi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, _i && (an = Po(ne, et, _i)), !hn && d.inArray("script", ne.dataTypes) > -1 && d.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = No(ne, an, et, hn), hn ? (ne.ifModified && (Mn = et.getResponseHeader("Last-Modified"), Mn && (d.lastModified[p] = Mn), Mn = et.getResponseHeader("etag"), Mn && (d.etag[p] = Mn)), ft === 204 || ne.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? rt.resolveWith(ce, [Kn, vn, et]) : rt.rejectWith(ce, [et, vn, Jn]), et.statusCode(zt), zt = void 0, Z && Ge.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, ne, hn ? Kn : Jn]), je.fireWith(ce, [et, vn]), Z && (Ge.trigger("ajaxComplete", [et, ne]), --d.active || d.event.trigger("ajaxStop")))
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
                d[s] = function(u, p, b, x) {
                    return re(p) && (x = x || b, b = p, p = void 0), d.ajax(d.extend({
                        url: u,
                        type: s,
                        dataType: x,
                        data: p,
                        success: b
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
                    send: function(p, b) {
                        var x, T = r.xhr();
                        if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                            for (x in r.xhrFields) T[x] = r.xhrFields[x];
                        r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                        for (x in p) T.setRequestHeader(x, p[x]);
                        s = function(z) {
                            return function() {
                                s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? b(0, "error") : b(T.status, T.statusText) : b(Bo[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
                        send: function(p, b) {
                            s = d("<script>").attr(r.scriptAttrs || {}).prop({
                                charset: r.scriptCharset,
                                src: r.url
                            }).on("load error", u = function(x) {
                                s.remove(), u = null, x && b(x.type === "error" ? 404 : 200, x.type)
                            }), P.head.appendChild(s[0])
                        },
                        abort: function() {
                            u && u()
                        }
                    }
                }
            });
            var Vr = [],
                $r = /(=)\?(?=&|$)|\?\?/;
            d.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var r = Vr.pop() || d.expando + "_" + Mr.guid++;
                    return this[r] = !0, r
                }
            }), d.ajaxPrefilter("json jsonp", function(r, s, u) {
                var p, b, x, T = r.jsonp !== !1 && ($r.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && $r.test(r.data) && "data");
                if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace($r, "$1" + p) : r.jsonp !== !1 && (r.url += (Gi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                    return x || d.error(p + " was not called"), x[0]
                }, r.dataTypes[0] = "json", b = e[p], e[p] = function() {
                    x = arguments
                }, u.always(function() {
                    b === void 0 ? d(e).removeProp(p) : e[p] = b, r[p] && (r.jsonpCallback = s.jsonpCallback, Vr.push(p)), x && re(b) && b(x[0]), x = b = void 0
                }), "script"
            }), Y.createHTMLDocument = function() {
                var r = P.implementation.createHTMLDocument("").body;
                return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
            }(), d.parseHTML = function(r, s, u) {
                if (typeof r != "string") return [];
                typeof s == "boolean" && (u = s, s = !1);
                var p, b, x;
                return s || (Y.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), b = Fe.exec(r), x = !u && [], b ? [s.createElement(b[1])] : (b = In([r], s, x), x && x.length && d(x).remove(), d.merge([], b.childNodes))
            }, d.fn.load = function(r, s, u) {
                var p, b, x, T = this,
                    z = r.indexOf(" ");
                return z > -1 && (p = Wn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (b = "POST"), T.length > 0 && d.ajax({
                    url: r,
                    type: b || "GET",
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
                    var p, b, x, T, z, U, Z, le = d.css(r, "position"),
                        we = d(r),
                        ne = {};
                    le === "static" && (r.style.position = "relative"), z = we.offset(), x = d.css(r, "top"), U = d.css(r, "left"), Z = (le === "absolute" || le === "fixed") && (x + U).indexOf("auto") > -1, Z ? (p = we.position(), T = p.top, b = p.left) : (T = parseFloat(x) || 0, b = parseFloat(U) || 0), re(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (ne.top = s.top - z.top + T), s.left != null && (ne.left = s.left - z.left + b), "using" in s ? s.using.call(r, ne) : we.css(ne)
                }
            }, d.fn.extend({
                offset: function(r) {
                    if (arguments.length) return r === void 0 ? this : this.each(function(b) {
                        d.offset.setOffset(this, r, b)
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
                            b = {
                                top: 0,
                                left: 0
                            };
                        if (d.css(p, "position") === "fixed") s = p.getBoundingClientRect();
                        else {
                            for (s = this.offset(), u = p.ownerDocument, r = p.offsetParent || u.documentElement; r && (r === u.body || r === u.documentElement) && d.css(r, "position") === "static";) r = r.parentNode;
                            r && r !== p && r.nodeType === 1 && (b = d(r).offset(), b.top += d.css(r, "borderTopWidth", !0), b.left += d.css(r, "borderLeftWidth", !0))
                        }
                        return {
                            top: s.top - b.top - d.css(p, "marginTop", !0),
                            left: s.left - b.left - d.css(p, "marginLeft", !0)
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
                    return g(this, function(b, x, T) {
                        var z;
                        if (m(b) ? z = b : b.nodeType === 9 && (z = b.defaultView), T === void 0) return z ? z[s] : b[x];
                        z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : b[x] = T
                    }, r, p, arguments.length)
                }
            }), d.each(["top", "left"], function(r, s) {
                d.cssHooks[s] = y(Y.pixelPosition, function(u, p) {
                    if (p) return p = Ze(u, s), bi.test(p) ? d(u).position()[s] + "px" : p
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
                    d.fn[p] = function(b, x) {
                        var T = arguments.length && (u || typeof b != "boolean"),
                            z = u || (b === !0 || x === !0 ? "margin" : "border");
                        return g(this, function(U, Z, le) {
                            var we;
                            return m(U) ? p.indexOf("outer") === 0 ? U["inner" + r] : U.document.documentElement["client" + r] : U.nodeType === 9 ? (we = U.documentElement, Math.max(U.body["scroll" + r], we["scroll" + r], U.body["offset" + r], we["offset" + r], we["client" + r])) : le === void 0 ? d.css(U, Z, z) : d.style(U, Z, le, z)
                        }, s, T ? b : void 0, T)
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
                var u, p, b;
                if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = f.call(arguments, 2), b = function() {
                    return r.apply(s || this, p.concat(f.call(arguments)))
                }, b.guid = r.guid = r.guid || d.guid++, b
            }, d.holdReady = function(r) {
                r ? d.readyWait++ : d.ready(!0)
            }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = K, d.isFunction = re, d.isWindow = m, d.camelCase = B, d.type = se, d.now = Date.now, d.isNumeric = function(r) {
                var s = d.type(r);
                return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
            }, d.trim = function(r) {
                return r == null ? "" : (r + "").replace(Es, "")
            };
            var Vo = e.jQuery,
                $o = e.$;
            return d.noConflict = function(r) {
                return e.$ === d && (e.$ = $o), r && e.jQuery === d && (e.jQuery = Vo), d
            }, typeof n > "u" && (e.jQuery = e.$ = d), d
        })
    }(Qo)), Qo.exports
}
var Ae = Sc(),
    ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = cs(),
                a;
            try {
                a = Sc()
            } catch {}
            e(n, t, i, a)
        }
    })(function(e, n, i, a) {
        var f = e.Backbone,
            v = Array.prototype.slice;
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
                        return function(k) {
                            return i[l](this[g], k)
                        };
                    case 3:
                        return function(k, R) {
                            return i[l](this[g], O(k, this), R)
                        };
                    case 4:
                        return function(k, R, L) {
                            return i[l](this[g], O(k, this), R, L)
                        };
                    default:
                        return function() {
                            var k = v.call(arguments);
                            return k.unshift(this[g]), i[l].apply(i, k)
                        }
                }
            },
            S = function(E, l, g) {
                i.each(l, function(k, R) {
                    i[R] && (E.prototype[R] = _(k, R, g))
                })
            },
            O = function(E, l) {
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
            ie = function(E, l, g, k, R) {
                var L = 0,
                    B;
                if (g && typeof g == "object")
                    for (k !== void 0 && ("context" in R) && R.context === void 0 && (R.context = k), B = i.keys(g); L < B.length; L++) l = ie(E, l, B[L], g[B[L]], R);
                else if (g && J.test(g))
                    for (B = g.split(J); L < B.length; L++) l = E(l, B[L], k, R);
                else l = E(l, g, k, R);
                return l
            };
        $.on = function(E, l, g) {
            return Y(this, E, l, g)
        };
        var Y = function(E, l, g, k, R) {
            if (E._events = ie(re, E._events || {}, l, g, {
                    context: k,
                    ctx: E,
                    listening: R
                }), R) {
                var L = E._listeners || (E._listeners = {});
                L[R.id] = R
            }
            return E
        };
        $.listenTo = function(E, l, g) {
            if (!E) return this;
            var k = E._listenId || (E._listenId = i.uniqueId("l")),
                R = this._listeningTo || (this._listeningTo = {}),
                L = R[k];
            if (!L) {
                var B = this._listenId || (this._listenId = i.uniqueId("l"));
                L = R[k] = {
                    obj: E,
                    objId: k,
                    id: B,
                    listeningTo: R,
                    count: 0
                }
            }
            return Y(E, l, g, this, L), this
        };
        var re = function(E, l, g, k) {
            if (g) {
                var R = E[l] || (E[l] = []),
                    L = k.context,
                    B = k.ctx,
                    te = k.listening;
                te && te.count++, R.push({
                    callback: g,
                    context: L,
                    ctx: L || B,
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
            var k = this._listeningTo;
            if (!k) return this;
            for (var R = E ? [E._listenId] : i.keys(k), L = 0; L < R.length; L++) {
                var B = k[R[L]];
                if (!B) break;
                B.obj.off(l, g, this)
            }
            return this
        };
        var m = function(E, l, g, k) {
            if (!!E) {
                var R = 0,
                    L, B = k.context,
                    te = k.listeners;
                if (!l && !g && !B) {
                    for (var Se = i.keys(te); R < Se.length; R++) L = te[Se[R]], delete te[L.id], delete L.listeningTo[L.objId];
                    return
                }
                for (var he = l ? [l] : i.keys(E); R < he.length; R++) {
                    l = he[R];
                    var De = E[l];
                    if (!De) break;
                    for (var Me = [], nt = 0; nt < De.length; nt++) {
                        var Ct = De[nt];
                        g && g !== Ct.callback && g !== Ct.callback._callback || B && B !== Ct.context ? Me.push(Ct) : (L = Ct.listening, L && --L.count === 0 && (delete te[L.id], delete L.listeningTo[L.objId]))
                    }
                    Me.length ? E[l] = Me : delete E[l]
                }
                return E
            }
        };
        $.once = function(E, l, g) {
            var k = ie(P, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(k, l, g)
        }, $.listenToOnce = function(E, l, g) {
            var k = ie(P, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, k)
        };
        var P = function(E, l, g, k) {
            if (g) {
                var R = E[l] = i.once(function() {
                    k(l, R), g.apply(this, arguments)
                });
                R._callback = g
            }
            return E
        };
        $.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), k = 0; k < l; k++) g[k] = arguments[k + 1];
            return ie(W, this._events, E, void 0, g), this
        };
        var W = function(E, l, g, k) {
                if (E) {
                    var R = E[l],
                        L = E.all;
                    R && L && (L = L.slice()), R && ae(R, k), L && ae(L, [l].concat(k))
                }
                return E
            },
            ae = function(E, l) {
                var g, k = -1,
                    R = E.length,
                    L = l[0],
                    B = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++k < R;)(g = E[k]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++k < R;)(g = E[k]).callback.call(g.ctx, L);
                        return;
                    case 2:
                        for (; ++k < R;)(g = E[k]).callback.call(g.ctx, L, B);
                        return;
                    case 3:
                        for (; ++k < R;)(g = E[k]).callback.call(g.ctx, L, B, te);
                        return;
                    default:
                        for (; ++k < R;)(g = E[k]).callback.apply(g.ctx, l);
                        return
                }
            };
        $.bind = $.on, $.unbind = $.off, i.extend(n, $);
        var se = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var k = i.result(this, "defaults");
            g = i.defaults(i.extend({}, k, g), k), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
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
                var k;
                if (typeof E == "object" ? (k = E, g = l) : (k = {})[E] = l, g || (g = {}), !this._validate(k, g)) return !1;
                var R = g.unset,
                    L = g.silent,
                    B = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var Se = this.attributes,
                    he = this.changed,
                    De = this._previousAttributes;
                for (var Me in k) l = k[Me], i.isEqual(Se[Me], l) || B.push(Me), i.isEqual(De[Me], l) ? delete he[Me] : he[Me] = l, R ? delete Se[Me] : Se[Me] = l;
                if (this.idAttribute in k && (this.id = this.get(this.idAttribute)), !L) {
                    B.length && (this._pending = g);
                    for (var nt = 0; nt < B.length; nt++) this.trigger("change:" + B[nt], this, Se[B[nt]], g)
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
                for (var k in E) {
                    var R = E[k];
                    i.isEqual(l[k], R) || (g[k] = R)
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
                return E.success = function(k) {
                    var R = E.parse ? l.parse(k, E) : k;
                    if (!l.set(R, E)) return !1;
                    g && g.call(E.context, l, k, E), l.trigger("sync", l, k, E)
                }, Gt(this, E), this.sync("read", this, E)
            },
            save: function(E, l, g) {
                var k;
                E == null || typeof E == "object" ? (k = E, g = l) : (k = {})[E] = l, g = i.extend({
                    validate: !0,
                    parse: !0
                }, g);
                var R = g.wait;
                if (k && !R) {
                    if (!this.set(k, g)) return !1
                } else if (!this._validate(k, g)) return !1;
                var L = this,
                    B = g.success,
                    te = this.attributes;
                g.success = function(De) {
                    L.attributes = te;
                    var Me = g.parse ? L.parse(De, g) : De;
                    if (R && (Me = i.extend({}, k, Me)), Me && !L.set(Me, g)) return !1;
                    B && B.call(g.context, L, De, g), L.trigger("sync", L, De, g)
                }, Gt(this, g), k && R && (this.attributes = i.extend({}, te, k));
                var Se = this.isNew() ? "create" : g.patch ? "patch" : "update";
                Se === "patch" && !g.attrs && (g.attrs = k);
                var he = this.sync(Se, this, g);
                return this.attributes = te, he
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    k = E.wait,
                    R = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(B) {
                    k && R(), g && g.call(E.context, l, B, E), l.isNew() || l.trigger("sync", l, B, E)
                };
                var L = !1;
                return this.isNew() ? i.defer(E.success) : (Gt(this, E), L = this.sync("delete", this, E)), k || R(), L
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
        S(se, ve, "attributes");
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
            Oe = {
                add: !0,
                remove: !1
            },
            Pe = function(E, l, g) {
                g = Math.min(Math.max(g, 0), E.length);
                var k = Array(E.length - g),
                    R = l.length,
                    L;
                for (L = 0; L < k.length; L++) k[L] = E[L + g];
                for (L = 0; L < R; L++) E[L + g] = l[L];
                for (L = 0; L < k.length; L++) E[L + R + g] = k[L]
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
                var k = this._removeModels(E, l);
                return !l.silent && k.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: k
                }, this.trigger("update", this, l)), g ? k[0] : k
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, Ee, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var k = l.at;
                    k != null && (k = +k), k > this.length && (k = this.length), k < 0 && (k += this.length + 1);
                    var R = [],
                        L = [],
                        B = [],
                        te = [],
                        Se = {},
                        he = l.add,
                        De = l.merge,
                        Me = l.remove,
                        nt = !1,
                        Ct = this.comparator && k == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var wt = this.get(ct);
                        if (wt) {
                            if (De && ct !== wt) {
                                var Kt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Kt = wt.parse(Kt, l)), wt.set(Kt, l), B.push(wt), Ct && !nt && (nt = wt.hasChanged(rn))
                            }
                            Se[wt.cid] || (Se[wt.cid] = !0, R.push(wt)), E[yt] = wt
                        } else he && (ct = E[yt] = this._prepareModel(ct, l), ct && (L.push(ct), this._addReference(ct, l), Se[ct.cid] = !0, R.push(ct)))
                    }
                    if (Me) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], Se[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Je = !1,
                        Lt = !Ct && he && Me;
                    if (R.length && Lt ? (Je = this.length !== R.length || i.some(this.models, function(j, N) {
                            return j !== R[N]
                        }), this.models.length = 0, Pe(this.models, R, 0), this.length = this.models.length) : L.length && (Ct && (nt = !0), Pe(this.models, L, k == null ? this.length : k), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < L.length; yt++) k != null && (l.index = k + yt), ct = L[yt], ct.trigger("add", ct, this, l);
                        (nt || Je) && this.trigger("sort", this, l), (L.length || te.length || B.length) && (l.changes = {
                            added: L,
                            removed: te,
                            merged: B
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
                return E.success = function(k) {
                    var R = E.reset ? "reset" : "set";
                    g[R](k, E), l && l.call(E.context, g, k, E), g.trigger("sync", g, k, E)
                }, Gt(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var k = this,
                    R = l.success;
                return l.success = function(L, B, te) {
                    g && k.add(L, te), R && R.call(te.context, L, B, te)
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
                for (var g = [], k = 0; k < E.length; k++) {
                    var R = this.get(E[k]);
                    if (!!R) {
                        var L = this.indexOf(R);
                        this.models.splice(L, 1), this.length--, delete this._byId[R.cid];
                        var B = this.modelId(R.attributes);
                        B != null && delete this._byId[B], l.silent || (l.index = L, R.trigger("remove", R, this, l)), g.push(R), this._removeReference(R, l)
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
            _onModelEvent: function(E, l, g, k) {
                if (l) {
                    if ((E === "add" || E === "remove") && g !== this) return;
                    if (E === "destroy" && this.remove(l, k), E === "change") {
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
        S(d, lt, "models");
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
                        var k = l.match(K);
                        this.delegate(k[1], k[2], i.bind(g, this))
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
            var k = H[E];
            i.defaults(g || (g = {}), {
                emulateHTTP: n.emulateHTTP,
                emulateJSON: n.emulateJSON
            });
            var R = {
                type: k,
                dataType: "json"
            };
            if (g.url || (R.url = i.result(l, "url") || Vt()), g.data == null && l && (E === "create" || E === "update" || E === "patch") && (R.contentType = "application/json", R.data = JSON.stringify(g.attrs || l.toJSON(g))), g.emulateJSON && (R.contentType = "application/x-www-form-urlencoded", R.data = R.data ? {
                    model: R.data
                } : {}), g.emulateHTTP && (k === "PUT" || k === "DELETE" || k === "PATCH")) {
                R.type = "POST", g.emulateJSON && (R.data._method = k);
                var L = g.beforeSend;
                g.beforeSend = function(Se) {
                    if (Se.setRequestHeader("X-HTTP-Method-Override", k), L) return L.apply(this, arguments)
                }
            }
            R.type !== "GET" && !g.emulateJSON && (R.processData = !1);
            var B = g.error;
            g.error = function(Se, he, De) {
                g.textStatus = he, g.errorThrown = De, B && B.call(g.context, Se, he, De)
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
        var oe = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Te = /\((.*?)\)/g,
            be = /(\(\?)?:\w+/g,
            ye = /\*\w+/g,
            ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(oe.prototype, $, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var k = this;
                return n.history.route(E, function(R) {
                    var L = k._extractParameters(E, R);
                    k.execute(g, L, l) !== !1 && (k.trigger.apply(k, ["route:" + l].concat(L)), k.trigger("route", l, L), n.history.trigger("route", k, l, L))
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
                return E = E.replace(ue, "\\$&").replace(Te, "(?:$1)?").replace(be, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(ye, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
            },
            _extractParameters: function(E, l) {
                var g = E.exec(l).slice(1);
                return i.map(g, function(k, R) {
                    return R === g.length - 1 ? k || null : k ? decodeURIComponent(k) : null
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
                        k = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    k.document.open(), k.document.close(), k.location.hash = "#" + this.fragment
                }
                var R = window.addEventListener || function(L, B) {
                    return attachEvent("on" + L, B)
                };
                if (this._usePushState ? R("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? R("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
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
                var k = g + E;
                if (E = this.decodeFragment(E.replace(Ke, "")), this.fragment !== E) {
                    if (this.fragment = E, this._usePushState) this.history[l.replace ? "replaceState" : "pushState"]({}, document.title, k);
                    else if (this._wantsHashChange) {
                        if (this._updateHash(this.location, E, l.replace), this.iframe && E !== this.getHash(this.iframe.contentWindow)) {
                            var R = this.iframe.contentWindow;
                            l.replace || (R.document.open(), R.document.close()), this._updateHash(R.location, E, l.replace)
                        }
                    } else return this.location.assign(k);
                    if (l.trigger) return this.loadUrl(E)
                }
            },
            _updateHash: function(E, l, g) {
                if (g) {
                    var k = E.href.replace(/(javascript:|#).*$/, "");
                    E.replace(k + "#" + l)
                } else E.hash = "#" + l
            }
        }), n.history = new _e;
        var dt = function(E, l) {
            var g = this,
                k;
            return E && i.has(E, "constructor") ? k = E.constructor : k = function() {
                return g.apply(this, arguments)
            }, i.extend(k, g, l), k.prototype = i.create(g.prototype, E), k.prototype.constructor = k, k.__super__ = g.prototype, k
        };
        se.extend = d.extend = oe.extend = Ve.extend = _e.extend = dt;
        var Vt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Gt = function(E, l) {
                var g = l.error;
                l.error = function(k) {
                    g && g.call(l.context, E, k, l), E.trigger("error", E, k, l)
                }
            };
        return n
    })
})(ot);
var kc = {
        exports: {}
    },
    Zo = {
        exports: {}
    },
    vl;

function Eh() {
    return vl || (vl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(cs(), ot)
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
            }, v.DEBUG = !1, v._debugText = function(m, P, W) {
                return m + (W ? " on the " + W + " channel" : "") + ': "' + P + '"'
            }, v.debugLog = function(m, P, W) {
                v.DEBUG && console && console.warn && console.warn(v._debugText(m, P, W))
            };
            var _ = /\s+/;
            v._eventsApi = function(m, P, W, ae) {
                if (!W) return !1;
                var se = {};
                if ((typeof W > "u" ? "undefined" : a(W)) === "object") {
                    for (var ve in W) {
                        var d = m[P].apply(m, [ve, W[ve]].concat(ae));
                        _.test(ve) ? n.extend(se, d) : se[ve] = d
                    }
                    return se
                }
                if (_.test(W)) {
                    for (var Ee = W.split(_), Oe = 0, Pe = Ee.length; Oe < Pe; Oe++) se[Ee[Oe]] = m[P].apply(m, [Ee[Oe]].concat(ae));
                    return se
                }
                return !1
            }, v._callHandler = function(m, P, W) {
                var ae = W[0],
                    se = W[1],
                    ve = W[2];
                switch (W.length) {
                    case 0:
                        return m.call(P);
                    case 1:
                        return m.call(P, ae);
                    case 2:
                        return m.call(P, ae, se);
                    case 3:
                        return m.call(P, ae, se, ve);
                    default:
                        return m.apply(P, W)
                }
            };

            function S(m, P, W, ae) {
                var se = m[P];
                if ((!W || W === se.callback || W === se.callback._callback) && (!ae || ae === se.context)) return delete m[P], !0
            }

            function O(m, P, W, ae) {
                m || (m = {});
                for (var se = P ? [P] : n.keys(m), ve = !1, d = 0, Ee = se.length; d < Ee; d++) P = se[d], !!m[P] && S(m, P, W, ae) && (ve = !0);
                return ve
            }
            var D = {};

            function $(m) {
                return D[m] || (D[m] = n.bind(v.log, v, m))
            }
            n.extend(v, {
                log: function(P, W) {
                    if (!(typeof console > "u")) {
                        var ae = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + W + '"', ae)
                    }
                },
                tuneIn: function(P) {
                    var W = v.channel(P);
                    return W._tunedIn = !0, W.on("all", $(P)), this
                },
                tuneOut: function(P) {
                    var W = v.channel(P);
                    return W._tunedIn = !1, W.off("all", $(P)), delete D[P], this
                }
            });

            function J(m) {
                return n.isFunction(m) ? m : function() {
                    return m
                }
            }
            v.Requests = {
                request: function(P) {
                    var W = n.toArray(arguments).slice(1),
                        ae = v._eventsApi(this, "request", P, W);
                    if (ae) return ae;
                    var se = this.channelName,
                        ve = this._requests;
                    if (se && this._tunedIn && v.log.apply(this, [se, P].concat(W)), ve && (ve[P] || ve.default)) {
                        var d = ve[P] || ve.default;
                        return W = ve[P] ? W : arguments, v._callHandler(d.callback, d.context, W)
                    } else v.debugLog("An unhandled request was fired", P, se)
                },
                reply: function(P, W, ae) {
                    return v._eventsApi(this, "reply", P, [W, ae]) ? this : (this._requests || (this._requests = {}), this._requests[P] && v.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: J(W),
                        context: ae || this
                    }, this)
                },
                replyOnce: function(P, W, ae) {
                    if (v._eventsApi(this, "replyOnce", P, [W, ae])) return this;
                    var se = this,
                        ve = n.once(function() {
                            return se.stopReplying(P), J(W).apply(this, arguments)
                        });
                    return this.reply(P, ve, ae)
                },
                stopReplying: function(P, W, ae) {
                    return v._eventsApi(this, "stopReplying", P) ? this : (!P && !W && !ae ? delete this._requests : O(this._requests, P, W, ae) || v.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
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
                n.each(m, function(P, W) {
                    v[W] = function(ae) {
                        return Y = n.toArray(arguments).slice(1), ie = this.channel(ae), ie[W].apply(ie, Y)
                    }
                })
            }), v.reset = function(m) {
                var P = m ? [this._channels[m]] : this._channels;
                n.each(P, function(W) {
                    W.reset()
                })
            }, v
        })
    }(Zo)), Zo.exports
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
        t.exports = i(ot, cs(), Eh())
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            v = function(o) {
                return function(C) {
                    for (var A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Q[Ce - 1] = arguments[Ce];
                    return o.apply(C, Q)
                }
            },
            _ = n.Model.extend,
            S = function y(o, C) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!Ze.DEV_MODE && (C === void 0 || !C) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
            };
        S._console = typeof console < "u" ? console : {}, S._warn = function() {
            var y = S._console.warn || S._console.log || i.noop;
            return y.apply(S._console, arguments)
        }, S._cache = {};
        var O = function(o) {
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
                We = void 0;
            return i.isFunction(Ce) && (We = Ce.apply(this, C)), this.trigger.apply(this, arguments), We
        }

        function P(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : m.apply(y, C)
        }

        function W(y, o, C) {
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

        function Oe(y) {
            y._isAttached && y._isRendered && P(y, "dom:remove", y)
        }

        function Pe() {
            W(this, "before:attach", ae)
        }

        function lt() {
            W(this, "attach", se), Ee(this)
        }

        function Ve() {
            W(this, "before:detach", ve), Oe(this)
        }

        function K() {
            W(this, "detach", d)
        }

        function Fe() {
            Oe(this)
        }

        function H() {
            Ee(this)
        }

        function oe(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Ve,
                detach: K,
                "before:render": Fe,
                render: H
            }))
        }
        var Te = ["description", "fileName", "lineNumber", "name", "message", "number"],
            be = _.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(o, C) {
                    i.isObject(o) ? (C = o, o = C.message) : C || (C = {});
                    var A = Error.call(this, o);
                    i.extend(this, i.pick(A, Te), i.pick(C, Te)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, be)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        be.extend = _;

        function ye(y, o, C, A, Q) {
            var Ce = A.split(/\s+/);
            Ce.length > 1 && S("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(Ce, function(We) {
                var It = y[We];
                if (!It) throw new be('Method "' + We + '" was configured as an event handler, but does not exist.');
                y[Q](o, C, It)
            })
        }

        function ue(y, o, C, A) {
            if (!i.isObject(C)) throw new be({
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
                bindEvents: _e,
                unbindEvents: ke
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
                bindEvents: _e,
                unbindEvents: ke,
                bindRequests: Ke,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(o) {
                this.hasOwnProperty("options") || this._setOptions(o), this.mergeOptions(o, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = _, i.extend(g.prototype, n.Events, Gt, E, {
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
        var k = function(o) {
            this.templateId = o
        };
        i.extend(k, {
            templateCaches: {},
            get: function(o, C) {
                var A = this.templateCaches[o];
                return A || (A = new k(o), this.templateCaches[o] = A), A.load(C)
            },
            clear: function() {
                for (var o = void 0, C = arguments.length, A = Array(C), Q = 0; Q < C; Q++) A[Q] = arguments[Q];
                var Ce = A.length;
                if (Ce > 0)
                    for (o = 0; o < Ce; o++) delete this.templateCaches[A[o]];
                else this.templateCaches = {}
            }
        }), i.extend(k.prototype, {
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
        var R = i.invokeMap || i.invoke;

        function L(y, o) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, o)[o] : Ze.Behaviors.behaviorsLookup[o]
        }

        function B(y, o) {
            return i.chain(o).map(function(C, A) {
                var Q = L(C, A),
                    Ce = C === Q ? {} : C,
                    We = new Q(Ce, y),
                    It = B(y, i.result(We, "behaviors"));
                return [We].concat(It)
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
                    return i.reduce(o, function(C, A) {
                        return i.extend(C, A)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var o = R(this._behaviors, "getEvents");
                    return i.reduce(o, function(C, A) {
                        return i.extend(C, A)
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
                    for (var o = arguments.length, C = Array(o), A = 0; A < o; A++) C[A] = arguments[A];
                    R.apply(void 0, [this._behaviors, "destroy"].concat(C))
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
            De = function(o, C) {
                var A = o.match(he);
                return A[1] + "." + C + " " + A[2]
            },
            Me = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function nt(y) {
            return !!Me[y]
        }

        function Ct(y, o) {
            return Me[y] = o
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
                function(Ce) {
                    A && Ce.preventDefault(), Q && Ce.stopPropagation(), y.triggerMethod(C, y, Ce)
                }
        }
        var ct = {
                _getViewTriggers: function(o, C) {
                    var A = this;
                    return i.reduce(C, function(Q, Ce, We) {
                        return We = De(We, "trig" + A.cid), Q[We] = rn(o, Ce), Q
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(A, Q, Ce) {
                    var We = wt(Ce, C);
                    return A[We] = Q, A
                }, {})
            },
            wt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Kt = function y(o, C, A) {
                return i.each(o, function(Q, Ce) {
                    i.isString(Q) ? o[Ce] = wt(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(We) {
                        var It = Q[We];
                        i.isString(It) && (Q[We] = wt(It, C))
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
                    return wt(o, C)
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

        function Lt(y) {
            return y instanceof n.$ ? y : n.$(y)
        }

        function j(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var N = {
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
                    for (var C = this.normalizeMethods(this._childViewEvents), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Q[Ce - 1] = arguments[Ce];
                    typeof C < "u" && i.isFunction(C[o]) && C[o].apply(this, Q);
                    var We = this._childViewTriggers;
                    We && i.isString(We[o]) && this.triggerMethod.apply(this, [We[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var qt = It + ":" + o;
                        this.triggerMethod.apply(this, [qt].concat(Q))
                    }
                }
            };
        i.extend(q, te, Gt, Se, ct, Je);

        function M(y) {
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
                Dom: N,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(o) {
                    if (this._setOptions(o), this.mergeOptions(o, fe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new be({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, o)
                },
                show: function(o, C) {
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, M(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
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
                        A = !o._isAttached && O(this.el) && !this._shouldDisableMonitoring(),
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
                    return A || S("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(C, A), this
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
            Ne = function(y, o) {
                return y instanceof pe ? y : Be(y, o)
            };

        function Be(y, o) {
            var C = i.extend({}, o);
            if (i.isString(y)) return i.extend(C, {
                el: y
            }), pt(C);
            if (i.isFunction(y)) return i.extend(C, {
                regionClass: y
            }), pt(C);
            if (i.isObject(y)) return y.selector && S("The selector option on a Region definition object is deprecated. Use el to pass a selector string"), i.extend(C, {
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
                regionClass: pe,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    R(this._regions, "reset")
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
                        return Q[We] = Ne(Ce, A), C._addRegion(Q[We], We), Q
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
            Ye = {
                render: function(o, C) {
                    if (!o) throw new be({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var A = i.isFunction(o) ? o : k.get(o);
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
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = O(this.el), this._isRendered && this.bindUIElements(), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._isRendered && this._reInitRegions(), this._renderTemplate(), this.bindUIElements(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                _renderTemplate: function() {
                    var o = this.getTemplate();
                    if (o === !1) {
                        S("template:false is deprecated.  Use _.noop.");
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
        i.extend(Pn.prototype, q, jt);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(o, C) {
                i.each(it, function(A) {
                    o[A] = function() {
                        var Q = i.result(this, C),
                            Ce = Array.prototype.slice.call(arguments);
                        return i[A].apply(i, [Q].concat(Ce))
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
        var _r = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            kn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, _r), oe(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
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
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = O(this.el), this
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
                        var qt = this._filteredSortedModels();
                        this._applyModelDeltas(qt, It)
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
                        var qt = !A.children.findByModel(We);
                        qt && A._onCollectionAdd(We, A.collection, {
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
                    var Q = i.some(A, function(qt) {
                        return !C.findByModel(qt)
                    });
                    if (Q) this.render();
                    else {
                        var Ce = [],
                            We = i.reduce(this.children._views, function(qt, Hn) {
                                var Nn = i.indexOf(A, Hn.model);
                                return Nn === -1 ? (Ce.push(Hn.model), qt) : (Hn._index = Nn, qt[Nn] = Hn.el, qt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(We, function(qt) {
                            o.Dom.appendContents(It, qt)
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
                    return this.triggerMethod("before:add:child", this, o), this._setupChildView(o, C), this._isBuffering ? this.children._add(o) : (this._updateIndices(o, !0), this.children.add(o)), M(o), this._attachView(o, C), this.triggerMethod("add:child", this, o), o
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
        i.extend(kn.prototype, q);
        var sn = function() {
            this._init()
        };
        Dn(sn.prototype, "_views");

        function Sr(y, o) {
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
                return typeof o == "string" ? (o = i.partial(Sr, o), this._sortBy(o)) : o.length === 1 ? this._sortBy(i.bind(o, C)) : this._views.sort(i.bind(o, C))
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
        var kr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            mi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, kr), oe(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
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
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = O(this.el), this
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
                    return i.each(this.children._views, function(We, It, qt) {
                        (C.call(o, We, It, qt) ? Q : Ce).push(We)
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
                        M(Q), C.Dom.appendContents(A, Q.el, {
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
        i.extend(mi.prototype, q);
        var Vi = ["childViewContainer", "template", "templateContext"],
            vi = kn.extend({
                constructor: function(o) {
                    S("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, Vi), kn.prototype.constructor.apply(this, arguments)
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
                        var Ce = i.result(o, "childViewContainer");
                        if (Ce.charAt(0) === "@" && o.ui ? A = o.ui[Ce.substr(4)] : A = this.$(Ce), A.length <= 0) throw new be({
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
        var $i = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            ji = g.extend({
                cidPrefix: "mnb",
                constructor: function(o, C) {
                    this.view = C, this.defaults && S("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, o)), this.mergeOptions(this.options, $i), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), g.apply(this, arguments)
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
                        return i.isFunction(Q) || (Q = o[Q]), Q && (Ce = De(Ce, o.cid), A[Ce] = i.bind(Q, o)), A
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
            Fi = g.extend({
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
                        this._region = Ne(o, C)
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
            bi = ["appRoutes", "controller"],
            Un = n.Router.extend({
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, bi), n.Router.apply(this, arguments);
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
                    if (!Q) throw new be('Method "' + A + '" was not found on the controller');
                    this.route(C, A, i.bind(Q, o))
                },
                triggerMethod: m
            });
        i.extend(Un.prototype, Gt);

        function zi() {
            throw new be({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var wi = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = wi, this
        }, Ze.bindEvents = v(_e), Ze.unbindEvents = v(ke), Ze.bindRequests = v(Ke), Ze.unbindRequests = v(dt), Ze.mergeOptions = v(D), Ze.getOption = v($), Ze.normalizeMethods = v(J), Ze.extend = _, Ze.isNodeAttached = O, Ze.deprecate = S, Ze.triggerMethod = v(m), Ze.triggerMethodOn = P, Ze.isEnabled = nt, Ze.setEnabled = Ct, Ze.monitorViewEvents = oe, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = zi, Ze.Application = Fi, Ze.AppRouter = Un, Ze.Renderer = Ye, Ze.TemplateCache = k, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = mi, Ze.CompositeView = vi, Ze.Behavior = ji, Ze.Region = pe, Ze.Error = be, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = Me, Ze.VERSION = f, Ze.DomApi = N, Ze.setDomApi = function(y) {
            kn.setDomApi(y), vi.setDomApi(y), mi.setDomApi(y), pe.setDomApi(y), Pn.setDomApi(y)
        }, Ze
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
})(kc);
const Et = kc.exports;
class _h {
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

function Sh() {
    this.__data__ = [], this.size = 0
}
var kh = Sh;

function Th(t, e) {
    return t === e || t !== t && e !== e
}
var lo = Th,
    Ah = lo;

function Oh(t, e) {
    for (var n = t.length; n--;)
        if (Ah(t[n][0], e)) return n;
    return -1
}
var co = Oh,
    Rh = co,
    Ih = Array.prototype,
    Dh = Ih.splice;

function Mh(t) {
    var e = this.__data__,
        n = Rh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Dh.call(e, n, 1), --this.size, !0
}
var Lh = Mh,
    Ph = co;

function Nh(t) {
    var e = this.__data__,
        n = Ph(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Bh = Nh,
    Vh = co;

function $h(t) {
    return Vh(this.__data__, t) > -1
}
var jh = $h,
    Fh = co;

function zh(t, e) {
    var n = this.__data__,
        i = Fh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Uh = zh,
    Hh = kh,
    Gh = Lh,
    Wh = Bh,
    qh = jh,
    Xh = Uh;

function yr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
yr.prototype.clear = Hh;
yr.prototype.delete = Gh;
yr.prototype.get = Wh;
yr.prototype.has = qh;
yr.prototype.set = Xh;
var uo = yr,
    Yh = uo;

function Kh() {
    this.__data__ = new Yh, this.size = 0
}
var Jh = Kh;

function Qh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Zh = Qh;

function ed(t) {
    return this.__data__.get(t)
}
var td = ed;

function nd(t) {
    return this.__data__.has(t)
}
var id = nd,
    rd = typeof vt == "object" && vt && vt.Object === Object && vt,
    Tc = rd,
    sd = Tc,
    od = typeof self == "object" && self && self.Object === Object && self,
    ad = sd || od || Function("return this")(),
    br = ad,
    ld = br,
    cd = ld.Symbol,
    Ac = cd,
    yl = Ac,
    Oc = Object.prototype,
    ud = Oc.hasOwnProperty,
    hd = Oc.toString,
    qr = yl ? yl.toStringTag : void 0;

function dd(t) {
    var e = ud.call(t, qr),
        n = t[qr];
    try {
        t[qr] = void 0;
        var i = !0
    } catch {}
    var a = hd.call(t);
    return i && (e ? t[qr] = n : delete t[qr]), a
}
var fd = dd,
    pd = Object.prototype,
    gd = pd.toString;

function md(t) {
    return gd.call(t)
}
var vd = md,
    bl = Ac,
    yd = fd,
    bd = vd,
    wd = "[object Null]",
    Cd = "[object Undefined]",
    wl = bl ? bl.toStringTag : void 0;

function xd(t) {
    return t == null ? t === void 0 ? Cd : wd : wl && wl in Object(t) ? yd(t) : bd(t)
}
var ho = xd;

function Ed(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Ni = Ed,
    _d = ho,
    Sd = Ni,
    kd = "[object AsyncFunction]",
    Td = "[object Function]",
    Ad = "[object GeneratorFunction]",
    Od = "[object Proxy]";

function Rd(t) {
    if (!Sd(t)) return !1;
    var e = _d(t);
    return e == Td || e == Ad || e == kd || e == Od
}
var Va = Rd,
    Id = br,
    Dd = Id["__core-js_shared__"],
    Md = Dd,
    ea = Md,
    Cl = function() {
        var t = /[^.]+$/.exec(ea && ea.keys && ea.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Ld(t) {
    return !!Cl && Cl in t
}
var Pd = Ld,
    Nd = Function.prototype,
    Bd = Nd.toString;

function Vd(t) {
    if (t != null) {
        try {
            return Bd.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var $d = Vd,
    jd = Va,
    Fd = Pd,
    zd = Ni,
    Ud = $d,
    Hd = /[\\^$.*+?()[\]{}|]/g,
    Gd = /^\[object .+?Constructor\]$/,
    Wd = Function.prototype,
    qd = Object.prototype,
    Xd = Wd.toString,
    Yd = qd.hasOwnProperty,
    Kd = RegExp("^" + Xd.call(Yd).replace(Hd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Jd(t) {
    if (!zd(t) || Fd(t)) return !1;
    var e = jd(t) ? Kd : Gd;
    return e.test(Ud(t))
}
var Qd = Jd;

function Zd(t, e) {
    return t == null ? void 0 : t[e]
}
var ef = Zd,
    tf = Qd,
    nf = ef;

function rf(t, e) {
    var n = nf(t, e);
    return tf(n) ? n : void 0
}
var $a = rf,
    sf = $a,
    of = br,
    af = sf(of, "Map"),
    Rc = af,
    lf = $a,
    cf = lf(Object, "create"),
    fo = cf,
    xl = fo;

function uf() {
    this.__data__ = xl ? xl(null) : {}, this.size = 0
}
var hf = uf;

function df(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var ff = df,
    pf = fo,
    gf = "__lodash_hash_undefined__",
    mf = Object.prototype,
    vf = mf.hasOwnProperty;

function yf(t) {
    var e = this.__data__;
    if (pf) {
        var n = e[t];
        return n === gf ? void 0 : n
    }
    return vf.call(e, t) ? e[t] : void 0
}
var bf = yf,
    wf = fo,
    Cf = Object.prototype,
    xf = Cf.hasOwnProperty;

function Ef(t) {
    var e = this.__data__;
    return wf ? e[t] !== void 0 : xf.call(e, t)
}
var _f = Ef,
    Sf = fo,
    kf = "__lodash_hash_undefined__";

function Tf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = Sf && e === void 0 ? kf : e, this
}
var Af = Tf,
    Of = hf,
    Rf = ff,
    If = bf,
    Df = _f,
    Mf = Af;

function wr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
wr.prototype.clear = Of;
wr.prototype.delete = Rf;
wr.prototype.get = If;
wr.prototype.has = Df;
wr.prototype.set = Mf;
var Lf = wr,
    El = Lf,
    Pf = uo,
    Nf = Rc;

function Bf() {
    this.size = 0, this.__data__ = {
        hash: new El,
        map: new(Nf || Pf),
        string: new El
    }
}
var Vf = Bf;

function $f(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var jf = $f,
    Ff = jf;

function zf(t, e) {
    var n = t.__data__;
    return Ff(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var po = zf,
    Uf = po;

function Hf(t) {
    var e = Uf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Gf = Hf,
    Wf = po;

function qf(t) {
    return Wf(this, t).get(t)
}
var Xf = qf,
    Yf = po;

function Kf(t) {
    return Yf(this, t).has(t)
}
var Jf = Kf,
    Qf = po;

function Zf(t, e) {
    var n = Qf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var ep = Zf,
    tp = Vf,
    np = Gf,
    ip = Xf,
    rp = Jf,
    sp = ep;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = tp;
Cr.prototype.delete = np;
Cr.prototype.get = ip;
Cr.prototype.has = rp;
Cr.prototype.set = sp;
var op = Cr,
    ap = uo,
    lp = Rc,
    cp = op,
    up = 200;

function hp(t, e) {
    var n = this.__data__;
    if (n instanceof ap) {
        var i = n.__data__;
        if (!lp || i.length < up - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new cp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var dp = hp,
    fp = uo,
    pp = Jh,
    gp = Zh,
    mp = td,
    vp = id,
    yp = dp;

function xr(t) {
    var e = this.__data__ = new fp(t);
    this.size = e.size
}
xr.prototype.clear = pp;
xr.prototype.delete = gp;
xr.prototype.get = mp;
xr.prototype.has = vp;
xr.prototype.set = yp;
var bp = xr,
    wp = $a,
    Cp = function() {
        try {
            var t = wp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Ic = Cp,
    _l = Ic;

function xp(t, e, n) {
    e == "__proto__" && _l ? _l(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var ja = xp,
    Ep = ja,
    _p = lo;

function Sp(t, e, n) {
    (n !== void 0 && !_p(t[e], n) || n === void 0 && !(e in t)) && Ep(t, e, n)
}
var Dc = Sp;

function kp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), v = i(e), _ = v.length; _--;) {
            var S = v[t ? _ : ++a];
            if (n(f[S], S, f) === !1) break
        }
        return e
    }
}
var Tp = kp,
    Ap = Tp,
    Op = Ap(),
    Rp = Op,
    xa = {
        exports: {}
    };
(function(t, e) {
    var n = br,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        v = f ? n.Buffer : void 0,
        _ = v ? v.allocUnsafe : void 0;

    function S(O, D) {
        if (D) return O.slice();
        var $ = O.length,
            J = _ ? _($) : new O.constructor($);
        return O.copy(J), J
    }
    t.exports = S
})(xa, xa.exports);
var Ip = br,
    Dp = Ip.Uint8Array,
    Mp = Dp,
    Sl = Mp;

function Lp(t) {
    var e = new t.constructor(t.byteLength);
    return new Sl(e).set(new Sl(t)), e
}
var Pp = Lp,
    Np = Pp;

function Bp(t, e) {
    var n = e ? Np(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Vp = Bp;

function $p(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var jp = $p,
    Fp = Ni,
    kl = Object.create,
    zp = function() {
        function t() {}
        return function(e) {
            if (!Fp(e)) return {};
            if (kl) return kl(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Up = zp;

function Hp(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Gp = Hp,
    Wp = Gp,
    qp = Wp(Object.getPrototypeOf, Object),
    Mc = qp,
    Xp = Object.prototype;

function Yp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || Xp;
    return t === n
}
var Lc = Yp,
    Kp = Up,
    Jp = Mc,
    Qp = Lc;

function Zp(t) {
    return typeof t.constructor == "function" && !Qp(t) ? Kp(Jp(t)) : {}
}
var eg = Zp;

function tg(t) {
    return t != null && typeof t == "object"
}
var us = tg,
    ng = ho,
    ig = us,
    rg = "[object Arguments]";

function sg(t) {
    return ig(t) && ng(t) == rg
}
var og = sg,
    Tl = og,
    ag = us,
    Pc = Object.prototype,
    lg = Pc.hasOwnProperty,
    cg = Pc.propertyIsEnumerable,
    ug = Tl(function() {
        return arguments
    }()) ? Tl : function(t) {
        return ag(t) && lg.call(t, "callee") && !cg.call(t, "callee")
    },
    Nc = ug,
    hg = Array.isArray,
    Bc = hg,
    dg = 9007199254740991;

function fg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= dg
}
var Vc = fg,
    pg = Va,
    gg = Vc;

function mg(t) {
    return t != null && gg(t.length) && !pg(t)
}
var Fa = mg,
    vg = Fa,
    yg = us;

function bg(t) {
    return yg(t) && vg(t)
}
var wg = bg,
    Js = {
        exports: {}
    };

function Cg() {
    return !1
}
var xg = Cg;
(function(t, e) {
    var n = br,
        i = xg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        v = f && f.exports === a,
        _ = v ? n.Buffer : void 0,
        S = _ ? _.isBuffer : void 0,
        O = S || i;
    t.exports = O
})(Js, Js.exports);
var Eg = ho,
    _g = Mc,
    Sg = us,
    kg = "[object Object]",
    Tg = Function.prototype,
    Ag = Object.prototype,
    $c = Tg.toString,
    Og = Ag.hasOwnProperty,
    Rg = $c.call(Object);

function Ig(t) {
    if (!Sg(t) || Eg(t) != kg) return !1;
    var e = _g(t);
    if (e === null) return !0;
    var n = Og.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && $c.call(n) == Rg
}
var Dg = Ig,
    Mg = ho,
    Lg = Vc,
    Pg = us,
    Ng = "[object Arguments]",
    Bg = "[object Array]",
    Vg = "[object Boolean]",
    $g = "[object Date]",
    jg = "[object Error]",
    Fg = "[object Function]",
    zg = "[object Map]",
    Ug = "[object Number]",
    Hg = "[object Object]",
    Gg = "[object RegExp]",
    Wg = "[object Set]",
    qg = "[object String]",
    Xg = "[object WeakMap]",
    Yg = "[object ArrayBuffer]",
    Kg = "[object DataView]",
    Jg = "[object Float32Array]",
    Qg = "[object Float64Array]",
    Zg = "[object Int8Array]",
    em = "[object Int16Array]",
    tm = "[object Int32Array]",
    nm = "[object Uint8Array]",
    im = "[object Uint8ClampedArray]",
    rm = "[object Uint16Array]",
    sm = "[object Uint32Array]",
    Mt = {};
Mt[Jg] = Mt[Qg] = Mt[Zg] = Mt[em] = Mt[tm] = Mt[nm] = Mt[im] = Mt[rm] = Mt[sm] = !0;
Mt[Ng] = Mt[Bg] = Mt[Yg] = Mt[Vg] = Mt[Kg] = Mt[$g] = Mt[jg] = Mt[Fg] = Mt[zg] = Mt[Ug] = Mt[Hg] = Mt[Gg] = Mt[Wg] = Mt[qg] = Mt[Xg] = !1;

function om(t) {
    return Pg(t) && Lg(t.length) && !!Mt[Mg(t)]
}
var am = om;

function lm(t) {
    return function(e) {
        return t(e)
    }
}
var cm = lm,
    Ea = {
        exports: {}
    };
(function(t, e) {
    var n = Tc,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        v = f && n.process,
        _ = function() {
            try {
                var S = a && a.require && a.require("util").types;
                return S || v && v.binding && v.binding("util")
            } catch {}
        }();
    t.exports = _
})(Ea, Ea.exports);
var um = am,
    hm = cm,
    Al = Ea.exports,
    Ol = Al && Al.isTypedArray,
    dm = Ol ? hm(Ol) : um,
    jc = dm;

function fm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Fc = fm,
    pm = ja,
    gm = lo,
    mm = Object.prototype,
    vm = mm.hasOwnProperty;

function ym(t, e, n) {
    var i = t[e];
    (!(vm.call(t, e) && gm(i, n)) || n === void 0 && !(e in t)) && pm(t, e, n)
}
var bm = ym,
    wm = bm,
    Cm = ja;

function xm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, v = e.length; ++f < v;) {
        var _ = e[f],
            S = i ? i(n[_], t[_], _, n, t) : void 0;
        S === void 0 && (S = t[_]), a ? Cm(n, _, S) : wm(n, _, S)
    }
    return n
}
var Em = xm;

function _m(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var Sm = _m,
    km = 9007199254740991,
    Tm = /^(?:0|[1-9]\d*)$/;

function Am(t, e) {
    var n = typeof t;
    return e = e == null ? km : e, !!e && (n == "number" || n != "symbol" && Tm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var zc = Am,
    Om = Sm,
    Rm = Nc,
    Im = Bc,
    Dm = Js.exports,
    Mm = zc,
    Lm = jc,
    Pm = Object.prototype,
    Nm = Pm.hasOwnProperty;

function Bm(t, e) {
    var n = Im(t),
        i = !n && Rm(t),
        a = !n && !i && Dm(t),
        f = !n && !i && !a && Lm(t),
        v = n || i || a || f,
        _ = v ? Om(t.length, String) : [],
        S = _.length;
    for (var O in t)(e || Nm.call(t, O)) && !(v && (O == "length" || a && (O == "offset" || O == "parent") || f && (O == "buffer" || O == "byteLength" || O == "byteOffset") || Mm(O, S))) && _.push(O);
    return _
}
var Vm = Bm;

function $m(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var jm = $m,
    Fm = Ni,
    zm = Lc,
    Um = jm,
    Hm = Object.prototype,
    Gm = Hm.hasOwnProperty;

function Wm(t) {
    if (!Fm(t)) return Um(t);
    var e = zm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Gm.call(t, i)) || n.push(i);
    return n
}
var qm = Wm,
    Xm = Vm,
    Ym = qm,
    Km = Fa;

function Jm(t) {
    return Km(t) ? Xm(t, !0) : Ym(t)
}
var Uc = Jm,
    Qm = Em,
    Zm = Uc;

function ev(t) {
    return Qm(t, Zm(t))
}
var tv = ev,
    Rl = Dc,
    nv = xa.exports,
    iv = Vp,
    rv = jp,
    sv = eg,
    Il = Nc,
    Dl = Bc,
    ov = wg,
    av = Js.exports,
    lv = Va,
    cv = Ni,
    uv = Dg,
    hv = jc,
    Ml = Fc,
    dv = tv;

function fv(t, e, n, i, a, f, v) {
    var _ = Ml(t, n),
        S = Ml(e, n),
        O = v.get(S);
    if (O) {
        Rl(t, n, O);
        return
    }
    var D = f ? f(_, S, n + "", t, e, v) : void 0,
        $ = D === void 0;
    if ($) {
        var J = Dl(S),
            ie = !J && av(S),
            Y = !J && !ie && hv(S);
        D = S, J || ie || Y ? Dl(_) ? D = _ : ov(_) ? D = rv(_) : ie ? ($ = !1, D = nv(S, !0)) : Y ? ($ = !1, D = iv(S, !0)) : D = [] : uv(S) || Il(S) ? (D = _, Il(_) ? D = dv(_) : (!cv(_) || lv(_)) && (D = sv(S))) : $ = !1
    }
    $ && (v.set(S, D), a(D, S, i, f, v), v.delete(S)), Rl(t, n, D)
}
var pv = fv,
    gv = bp,
    mv = Dc,
    vv = Rp,
    yv = pv,
    bv = Ni,
    wv = Uc,
    Cv = Fc;

function Hc(t, e, n, i, a) {
    t !== e && vv(e, function(f, v) {
        if (a || (a = new gv), bv(f)) yv(t, e, v, n, Hc, i, a);
        else {
            var _ = i ? i(Cv(t, v), f, v + "", t, e, a) : void 0;
            _ === void 0 && (_ = f), mv(t, v, _)
        }
    }, wv)
}
var xv = Hc;

function Ev(t) {
    return t
}
var Gc = Ev;

function _v(t, e, n) {
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
var Sv = _v,
    kv = Sv,
    Ll = Math.max;

function Tv(t, e, n) {
    return e = Ll(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = Ll(i.length - e, 0), v = Array(f); ++a < f;) v[a] = i[e + a];
            a = -1;
            for (var _ = Array(e + 1); ++a < e;) _[a] = i[a];
            return _[e] = n(v), kv(t, this, _)
        }
}
var Av = Tv;

function Ov(t) {
    return function() {
        return t
    }
}
var Rv = Ov,
    Iv = Rv,
    Pl = Ic,
    Dv = Gc,
    Mv = Pl ? function(t, e) {
        return Pl(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Iv(e),
            writable: !0
        })
    } : Dv,
    Lv = Mv,
    Pv = 800,
    Nv = 16,
    Bv = Date.now;

function Vv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Bv(),
            a = Nv - (i - n);
        if (n = i, a > 0) {
            if (++e >= Pv) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var $v = Vv,
    jv = Lv,
    Fv = $v,
    zv = Fv(jv),
    Uv = zv,
    Hv = Gc,
    Gv = Av,
    Wv = Uv;

function qv(t, e) {
    return Wv(Gv(t, e, Hv), t + "")
}
var Xv = qv,
    Yv = lo,
    Kv = Fa,
    Jv = zc,
    Qv = Ni;

function Zv(t, e, n) {
    if (!Qv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Kv(n) && Jv(e, n.length) : i == "string" && e in n) ? Yv(n[e], t) : !1
}
var ey = Zv,
    ty = Xv,
    ny = ey;

function iy(t) {
    return ty(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            v = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, v && ny(n[0], n[1], v) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var _ = n[i];
            _ && t(e, _, i, f)
        }
        return e
    })
}
var ry = iy,
    sy = xv,
    oy = ry,
    ay = oy(function(t, e, n) {
        sy(t, e, n)
    }),
    ly = ay;
class _a {
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
        return ly(e[0], ...e)
    }
}
st(_a, "locale"), st(_a, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
const pl = class {
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
            _ = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let O = (Math.min(Math.max(0, (f & 255) * n), 255) | _ << 8 | v << 16).toString(16);
        for (; O.length < a.length;) O = `0${O}`;
        return (i ? "#" : "") + O
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
let en = pl;
st(en, "queryParams", new URLSearchParams(window.location.search)), st(en, "getQueryParam", e => pl.queryParams.get(e)), st(en, "sleep", e => new Promise(n => {
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
        var v;
        const n = e.toLowerCase(),
            i = (v = this.get("tags")) != null ? v : "[]",
            a = n.split("-")[0];
        let f = JSON.parse(i);
        f = f.filter(_ => {
            const S = _.split("-")[0];
            return a !== S
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
        if (!Zt.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            f = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            v = Zt.get("galleries") || "[]";
        try {
            const _ = JSON.parse(v) || [];
            if (_.some(S => S.url === f)) return;
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
        Pi.setAsViewed(e), this.artifacts = this.list()
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
        const e = new Intl.DateTimeFormat(_a.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = Zt.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(f => i - f.time < 525600 * 60 * 1e3).map(f => {
                const v = new Date(f.time),
                    _ = e.format(v),
                    S = f.url.split("/"),
                    O = S[S.length - 1] === "" ? S[S.length - 2] : S[S.length - 1];
                let D = f.categoryId;
                return D || (f.url.indexOf("Quiplash2") !== -1 ? D = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? D = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? D = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (D = "TriviaDeathResults")), {
                    id: O,
                    gameName: D,
                    date: _,
                    ...f
                }
            })
        } catch {
            return console.warn("[Artifacts] Unable to parse artifacts array"), []
        }
    }
}
var Sa = {
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

            function S(H) {
                return H && DataView.prototype.isPrototypeOf(H)
            }
            if (_.arrayBuffer) var O = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(H) {
                    return H && O.indexOf(Object.prototype.toString.call(H)) > -1
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
                return _.iterable && (oe[Symbol.iterator] = function() {
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
            }, _.iterable && (Y.prototype[Symbol.iterator] = Y.prototype.entries);

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

            function W(H) {
                var oe = new FileReader,
                    Te = m(oe);
                return oe.readAsText(H), Te
            }

            function ae(H) {
                for (var oe = new Uint8Array(H), Te = new Array(oe.length), be = 0; be < oe.length; be++) Te[be] = String.fromCharCode(oe[be]);
                return Te.join("")
            }

            function se(H) {
                if (H.slice) return H.slice(0);
                var oe = new Uint8Array(H.byteLength);
                return oe.set(new Uint8Array(H)), oe.buffer
            }

            function ve() {
                return this.bodyUsed = !1, this._initBody = function(H) {
                    this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : _.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : _.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : _.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : _.arrayBuffer && _.blob && S(H) ? (this._bodyArrayBuffer = se(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || D(H)) ? this._bodyArrayBuffer = se(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, _.blob && (this.blob = function() {
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
                }, _.formData && (this.formData = function() {
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

            function Oe(H, oe) {
                oe = oe || {};
                var Te = oe.body;
                if (H instanceof Oe) {
                    if (H.bodyUsed) throw new TypeError("Already read");
                    this.url = H.url, this.credentials = H.credentials, oe.headers || (this.headers = new Y(H.headers)), this.method = H.method, this.mode = H.mode, this.signal = H.signal, !Te && H._bodyInit != null && (Te = H._bodyInit, H.bodyUsed = !0)
                } else this.url = String(H);
                if (this.credentials = oe.credentials || this.credentials || "same-origin", (oe.headers || !this.headers) && (this.headers = new Y(oe.headers)), this.method = Ee(oe.method || this.method || "GET"), this.mode = oe.mode || this.mode || null, this.signal = oe.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Te) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Te)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(H) {
                var oe = new FormData;
                return H.trim().split("&").forEach(function(Te) {
                    if (Te) {
                        var be = Te.split("="),
                            ye = be.shift().replace(/\+/g, " "),
                            ue = be.join("=").replace(/\+/g, " ");
                        oe.append(decodeURIComponent(ye), decodeURIComponent(ue))
                    }
                }), oe
            }

            function lt(H) {
                var oe = new Y,
                    Te = H.replace(/\r?\n[\t ]+/g, " ");
                return Te.split(/\r?\n/).forEach(function(be) {
                    var ye = be.split(":"),
                        ue = ye.shift().trim();
                    if (ue) {
                        var _e = ye.join(":").trim();
                        oe.append(ue, _e)
                    }
                }), oe
            }
            ve.call(Oe.prototype);

            function Ve(H, oe) {
                oe || (oe = {}), this.type = "default", this.status = oe.status === void 0 ? 200 : oe.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in oe ? oe.statusText : "OK", this.headers = new Y(oe.headers), this.url = oe.url || "", this._initBody(H)
            }
            ve.call(Ve.prototype), Ve.prototype.clone = function() {
                return new Ve(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new Y(this.headers),
                    url: this.url
                })
            }, Ve.error = function() {
                var H = new Ve(null, {
                    status: 0,
                    statusText: ""
                });
                return H.type = "error", H
            };
            var K = [301, 302, 303, 307, 308];
            Ve.redirect = function(H, oe) {
                if (K.indexOf(oe) === -1) throw new RangeError("Invalid status code");
                return new Ve(null, {
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
                    var be = Error(oe);
                    this.stack = be.stack
                }, v.DOMException.prototype = Object.create(Error.prototype), v.DOMException.prototype.constructor = v.DOMException
            }

            function Fe(H, oe) {
                return new Promise(function(Te, be) {
                    var ye = new Oe(H, oe);
                    if (ye.signal && ye.signal.aborted) return be(new v.DOMException("Aborted", "AbortError"));
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
                        Te(new Ve($e, ke))
                    }, ue.onerror = function() {
                        be(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        be(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        be(new v.DOMException("Aborted", "AbortError"))
                    }, ue.open(ye.method, ye.url, !0), ye.credentials === "include" ? ue.withCredentials = !0 : ye.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && _.blob && (ue.responseType = "blob"), ye.headers.forEach(function(ke, $e) {
                        ue.setRequestHeader($e, ke)
                    }), ye.signal && (ye.signal.addEventListener("abort", _e), ue.onreadystatechange = function() {
                        ue.readyState === 4 && ye.signal.removeEventListener("abort", _e)
                    }), ue.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                })
            }
            return Fe.polyfill = !0, f.fetch || (f.fetch = Fe, f.Headers = Y, f.Request = Oe, f.Response = Ve), v.Headers = Y, v.Request = Oe, v.Response = Ve, v.fetch = Fe, Object.defineProperty(v, "__esModule", {
                value: !0
            }), v
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Sa, Sa.exports);
var cy = function() {
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
    Nl = typeof Symbol < "u" && Symbol,
    uy = cy,
    hy = function() {
        return typeof Nl != "function" || typeof Symbol != "function" || typeof Nl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : uy()
    },
    dy = "Function.prototype.bind called on incompatible ",
    ta = Array.prototype.slice,
    fy = Object.prototype.toString,
    py = "[object Function]",
    gy = function(e) {
        var n = this;
        if (typeof n != "function" || fy.call(n) !== py) throw new TypeError(dy + n);
        for (var i = ta.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var D = n.apply(this, i.concat(ta.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(ta.call(arguments)))
            }, v = Math.max(0, n.length - i.length), _ = [], S = 0; S < v; S++) _.push("$" + S);
        if (a = Function("binder", "return function (" + _.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var O = function() {};
            O.prototype = n.prototype, a.prototype = new O, O.prototype = null
        }
        return a
    },
    my = gy,
    za = Function.prototype.bind || my,
    vy = za,
    yy = vy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, pr = SyntaxError,
    Wc = Function,
    cr = TypeError,
    na = function(t) {
        try {
            return Wc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Li = Object.getOwnPropertyDescriptor;
if (Li) try {
    Li({}, "")
} catch {
    Li = null
}
var ia = function() {
        throw new cr
    },
    by = Li ? function() {
        try {
            return arguments.callee, ia
        } catch {
            try {
                return Li(arguments, "callee").get
            } catch {
                return ia
            }
        }
    }() : ia,
    nr = hy(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    sr = {},
    wy = typeof Uint8Array > "u" ? mt : ai(Uint8Array),
    ur = {
        "%AggregateError%": typeof AggregateError > "u" ? mt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? mt : ArrayBuffer,
        "%ArrayIteratorPrototype%": nr ? ai([][Symbol.iterator]()) : mt,
        "%AsyncFromSyncIteratorPrototype%": mt,
        "%AsyncFunction%": sr,
        "%AsyncGenerator%": sr,
        "%AsyncGeneratorFunction%": sr,
        "%AsyncIteratorPrototype%": sr,
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
        "%GeneratorFunction%": sr,
        "%Int8Array%": typeof Int8Array > "u" ? mt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? mt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? mt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": nr ? ai(ai([][Symbol.iterator]())) : mt,
        "%JSON%": typeof JSON == "object" ? JSON : mt,
        "%Map%": typeof Map > "u" ? mt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !nr ? mt : ai(new Map()[Symbol.iterator]()),
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
        "%SetIteratorPrototype%": typeof Set > "u" || !nr ? mt : ai(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? mt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": nr ? ai("" [Symbol.iterator]()) : mt,
        "%Symbol%": nr ? Symbol : mt,
        "%SyntaxError%": pr,
        "%ThrowTypeError%": by,
        "%TypedArray%": wy,
        "%TypeError%": cr,
        "%Uint8Array%": typeof Uint8Array > "u" ? mt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? mt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? mt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? mt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? mt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? mt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? mt : WeakSet
    },
    Cy = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = na("async function () {}");
        else if (e === "%GeneratorFunction%") n = na("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = na("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = ai(a.prototype))
        }
        return ur[e] = n, n
    },
    Bl = {
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
    hs = za,
    Qs = yy,
    xy = hs.call(Function.call, Array.prototype.concat),
    Ey = hs.call(Function.apply, Array.prototype.splice),
    Vl = hs.call(Function.call, String.prototype.replace),
    Zs = hs.call(Function.call, String.prototype.slice),
    _y = hs.call(Function.call, RegExp.prototype.exec),
    Sy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    ky = /\\(\\)?/g,
    Ty = function(e) {
        var n = Zs(e, 0, 1),
            i = Zs(e, -1);
        if (n === "%" && i !== "%") throw new pr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new pr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Vl(e, Sy, function(f, v, _, S) {
            a[a.length] = _ ? Vl(S, ky, "$1") : v || f
        }), a
    },
    Ay = function(e, n) {
        var i = e,
            a;
        if (Qs(Bl, i) && (a = Bl[i], i = "%" + a[0] + "%"), Qs(ur, i)) {
            var f = ur[i];
            if (f === sr && (f = Cy(i)), typeof f > "u" && !n) throw new cr("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new pr("intrinsic " + e + " does not exist!")
    },
    Ua = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new cr("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new cr('"allowMissing" argument must be a boolean');
        if (_y(/^%?[^%]*%?$/g, e) === null) throw new pr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = Ty(e),
            a = i.length > 0 ? i[0] : "",
            f = Ay("%" + a + "%", n),
            v = f.name,
            _ = f.value,
            S = !1,
            O = f.alias;
        O && (a = O[0], Ey(i, xy([0, 1], O)));
        for (var D = 1, $ = !0; D < i.length; D += 1) {
            var J = i[D],
                ie = Zs(J, 0, 1),
                Y = Zs(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || Y === '"' || Y === "'" || Y === "`") && ie !== Y) throw new pr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !$) && (S = !0), a += "." + J, v = "%" + a + "%", Qs(ur, v)) _ = ur[v];
            else if (_ != null) {
                if (!(J in _)) {
                    if (!n) throw new cr("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Li && D + 1 >= i.length) {
                    var re = Li(_, J);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? _ = re.get : _ = _[J]
                } else $ = Qs(_, J), _ = _[J];
                $ && !S && (ur[v] = _)
            }
        }
        return _
    },
    qc = {
        exports: {}
    };
(function(t) {
    var e = za,
        n = Ua,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        f = n("%Reflect.apply%", !0) || e.call(a, i),
        v = n("%Object.getOwnPropertyDescriptor%", !0),
        _ = n("%Object.defineProperty%", !0),
        S = n("%Math.max%");
    if (_) try {
        _({}, "a", {
            value: 1
        })
    } catch {
        _ = null
    }
    t.exports = function($) {
        var J = f(e, a, arguments);
        if (v && _) {
            var ie = v(J, "length");
            ie.configurable && _(J, "length", {
                value: 1 + S(0, $.length - (arguments.length - 1))
            })
        }
        return J
    };
    var O = function() {
        return f(e, i, arguments)
    };
    _ ? _(t.exports, "apply", {
        value: O
    }) : t.exports.apply = O
})(qc);
var Xc = Ua,
    Yc = qc.exports,
    Oy = Yc(Xc("String.prototype.indexOf")),
    Ry = function(e, n) {
        var i = Xc(e, !!n);
        return typeof i == "function" && Oy(e, ".prototype.") > -1 ? Yc(i) : i
    };
const Iy = {},
    Dy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Iy
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    My = xh(Dy);
var Ha = typeof Map == "function" && Map.prototype,
    ra = Object.getOwnPropertyDescriptor && Ha ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    eo = Ha && ra && typeof ra.get == "function" ? ra.get : null,
    Ly = Ha && Map.prototype.forEach,
    Ga = typeof Set == "function" && Set.prototype,
    sa = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    to = Ga && sa && typeof sa.get == "function" ? sa.get : null,
    Py = Ga && Set.prototype.forEach,
    Ny = typeof WeakMap == "function" && WeakMap.prototype,
    es = Ny ? WeakMap.prototype.has : null,
    By = typeof WeakSet == "function" && WeakSet.prototype,
    ts = By ? WeakSet.prototype.has : null,
    Vy = typeof WeakRef == "function" && WeakRef.prototype,
    $l = Vy ? WeakRef.prototype.deref : null,
    $y = Boolean.prototype.valueOf,
    jy = Object.prototype.toString,
    Fy = Function.prototype.toString,
    zy = String.prototype.match,
    Wa = String.prototype.slice,
    hi = String.prototype.replace,
    Uy = String.prototype.toUpperCase,
    jl = String.prototype.toLowerCase,
    Kc = RegExp.prototype.test,
    Fl = Array.prototype.concat,
    jn = Array.prototype.join,
    Hy = Array.prototype.slice,
    zl = Math.floor,
    ka = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    oa = Object.getOwnPropertySymbols,
    Ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    gr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === gr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Jc = Object.prototype.propertyIsEnumerable,
    Ul = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Hl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Kc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -zl(-t) : zl(t);
        if (i !== t) {
            var a = String(i),
                f = Wa.call(e, a.length + 1);
            return hi.call(a, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var Aa = My,
    Gl = Aa.custom,
    Wl = Zc(Gl) ? Gl : null,
    Gy = function t(e, n, i, a) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var v = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof v != "boolean" && v !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var _ = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return tu(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var S = String(e);
            return _ ? Hl(e, S) : S
        }
        if (typeof e == "bigint") {
            var O = String(e) + "n";
            return _ ? Hl(e, O) : O
        }
        var D = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Oa(e) ? "[Array]" : "[Object]";
        var $ = cb(f, i);
        if (typeof a > "u") a = [];
        else if (eu(a, e) >= 0) return "[Circular]";

        function J(Fe, H, oe) {
            if (H && (a = Hy.call(a), a.push(H)), oe) {
                var Te = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (Te.quoteStyle = f.quoteStyle), t(Fe, Te, i + 1, a)
            }
            return t(Fe, f, i + 1, a)
        }
        if (typeof e == "function" && !ql(e)) {
            var ie = eb(e),
                Y = Ps(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (Y.length > 0 ? " { " + jn.call(Y, ", ") + " }" : "")
        }
        if (Zc(e)) {
            var re = gr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Ta.call(e);
            return typeof e == "object" && !gr ? Xr(re) : re
        }
        if (ob(e)) {
            for (var m = "<" + jl.call(String(e.nodeName)), P = e.attributes || [], W = 0; W < P.length; W++) m += " " + P[W].name + "=" + Qc(Wy(P[W].value), "double", f);
            return m += ">", e.childNodes && e.childNodes.length && (m += "..."), m += "</" + jl.call(String(e.nodeName)) + ">", m
        }
        if (Oa(e)) {
            if (e.length === 0) return "[]";
            var ae = Ps(e, J);
            return $ && !lb(ae) ? "[" + Ra(ae, $) + "]" : "[ " + jn.call(ae, ", ") + " ]"
        }
        if (Xy(e)) {
            var se = Ps(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !Jc.call(e, "cause") ? "{ [" + String(e) + "] " + jn.call(Fl.call("[cause]: " + J(e.cause), se), ", ") + " }" : se.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + jn.call(se, ", ") + " }"
        }
        if (typeof e == "object" && v) {
            if (Wl && typeof e[Wl] == "function" && Aa) return Aa(e, {
                depth: D - i
            });
            if (v !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (tb(e)) {
            var ve = [];
            return Ly.call(e, function(Fe, H) {
                ve.push(J(H, e, !0) + " => " + J(Fe, e))
            }), Xl("Map", eo.call(e), ve, $)
        }
        if (rb(e)) {
            var d = [];
            return Py.call(e, function(Fe) {
                d.push(J(Fe, e))
            }), Xl("Set", to.call(e), d, $)
        }
        if (nb(e)) return aa("WeakMap");
        if (sb(e)) return aa("WeakSet");
        if (ib(e)) return aa("WeakRef");
        if (Ky(e)) return Xr(J(Number(e)));
        if (Qy(e)) return Xr(J(ka.call(e)));
        if (Jy(e)) return Xr($y.call(e));
        if (Yy(e)) return Xr(J(String(e)));
        if (!qy(e) && !ql(e)) {
            var Ee = Ps(e, J),
                Oe = Ul ? Ul(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Wa.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Ve = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                K = Ve + (lt || Pe ? "[" + jn.call(Fl.call([], lt || [], Pe || []), ": ") + "] " : "");
            return Ee.length === 0 ? K + "{}" : $ ? K + "{" + Ra(Ee, $) + "}" : K + "{ " + jn.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function Qc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function Wy(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Oa(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function qy(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function ql(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function Xy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function Yy(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function Ky(t) {
    return pi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Jy(t) {
    return pi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function Zc(t) {
    if (gr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Ta) return !1;
    try {
        return Ta.call(t), !0
    } catch {}
    return !1
}

function Qy(t) {
    if (!t || typeof t != "object" || !ka) return !1;
    try {
        return ka.call(t), !0
    } catch {}
    return !1
}
var Zy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return Zy.call(t, e)
}

function pi(t) {
    return jy.call(t)
}

function eb(t) {
    if (t.name) return t.name;
    var e = zy.call(Fy.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function eu(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function tb(t) {
    if (!eo || !t || typeof t != "object") return !1;
    try {
        eo.call(t);
        try {
            to.call(t)
        } catch {
            return !0
        }
        return t instanceof Map
    } catch {}
    return !1
}

function nb(t) {
    if (!es || !t || typeof t != "object") return !1;
    try {
        es.call(t, es);
        try {
            ts.call(t, ts)
        } catch {
            return !0
        }
        return t instanceof WeakMap
    } catch {}
    return !1
}

function ib(t) {
    if (!$l || !t || typeof t != "object") return !1;
    try {
        return $l.call(t), !0
    } catch {}
    return !1
}

function rb(t) {
    if (!to || !t || typeof t != "object") return !1;
    try {
        to.call(t);
        try {
            eo.call(t)
        } catch {
            return !0
        }
        return t instanceof Set
    } catch {}
    return !1
}

function sb(t) {
    if (!ts || !t || typeof t != "object") return !1;
    try {
        ts.call(t, ts);
        try {
            es.call(t, es)
        } catch {
            return !0
        }
        return t instanceof WeakSet
    } catch {}
    return !1
}

function ob(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function tu(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return tu(Wa.call(t, 0, e.maxStringLength), e) + i
    }
    var a = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ab);
    return Qc(a, "single", e)
}

function ab(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Uy.call(e.toString(16))
}

function Xr(t) {
    return "Object(" + t + ")"
}

function aa(t) {
    return t + " { ? }"
}

function Xl(t, e, n, i) {
    var a = i ? Ra(n, i) : jn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function lb(t) {
    for (var e = 0; e < t.length; e++)
        if (eu(t[e], `
`) >= 0) return !1;
    return !0
}

function cb(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = jn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: jn.call(Array(e + 1), n)
    }
}

function Ra(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + jn.call(t, "," + n) + `
` + e.prev
}

function Ps(t, e) {
    var n = Oa(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = li(t, a) ? e(t[a], t) : ""
    }
    var f = typeof oa == "function" ? oa(t) : [],
        v;
    if (gr) {
        v = {};
        for (var _ = 0; _ < f.length; _++) v["$" + f[_]] = f[_]
    }
    for (var S in t) !li(t, S) || n && String(Number(S)) === S && S < t.length || gr && v["$" + S] instanceof Symbol || (Kc.call(/[^\w$]/, S) ? i.push(e(S, t) + ": " + e(t[S], t)) : i.push(S + ": " + e(t[S], t)));
    if (typeof oa == "function")
        for (var O = 0; O < f.length; O++) Jc.call(t, f[O]) && i.push("[" + e(f[O]) + "]: " + e(t[f[O]], t));
    return i
}
var qa = Ua,
    Er = Ry,
    ub = Gy,
    hb = qa("%TypeError%"),
    Ns = qa("%WeakMap%", !0),
    Bs = qa("%Map%", !0),
    db = Er("WeakMap.prototype.get", !0),
    fb = Er("WeakMap.prototype.set", !0),
    pb = Er("WeakMap.prototype.has", !0),
    gb = Er("Map.prototype.get", !0),
    mb = Er("Map.prototype.set", !0),
    vb = Er("Map.prototype.has", !0),
    Xa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    yb = function(t, e) {
        var n = Xa(t, e);
        return n && n.value
    },
    bb = function(t, e, n) {
        var i = Xa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    wb = function(t, e) {
        return !!Xa(t, e)
    },
    Cb = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new hb("Side channel does not contain " + ub(f))
            },
            get: function(f) {
                if (Ns && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return db(e, f)
                } else if (Bs) {
                    if (n) return gb(n, f)
                } else if (i) return yb(i, f)
            },
            has: function(f) {
                if (Ns && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return pb(e, f)
                } else if (Bs) {
                    if (n) return vb(n, f)
                } else if (i) return wb(i, f);
                return !1
            },
            set: function(f, v) {
                Ns && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ns), fb(e, f, v)) : Bs ? (n || (n = new Bs), mb(n, f, v)) : (i || (i = {
                    key: {},
                    next: null
                }), bb(i, f, v))
            }
        };
        return a
    },
    xb = String.prototype.replace,
    Eb = /%20/g,
    la = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Ya = {
        default: la.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return xb.call(t, Eb, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: la.RFC1738,
        RFC3986: la.RFC3986
    },
    _b = Ya,
    ca = Object.prototype.hasOwnProperty,
    Di = Array.isArray,
    Vn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    Sb = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Di(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    nu = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    kb = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Di(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !ca.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Di(e) && !Di(n) && (a = nu(e, i)), Di(e) && Di(n) ? (n.forEach(function(f, v) {
            if (ca.call(e, v)) {
                var _ = e[v];
                _ && typeof _ == "object" && f && typeof f == "object" ? e[v] = t(_, f, i) : e.push(f)
            } else e[v] = f
        }), e) : Object.keys(n).reduce(function(f, v) {
            var _ = n[v];
            return ca.call(f, v) ? f[v] = t(f[v], _, i) : f[v] = _, f
        }, a)
    },
    Tb = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    Ab = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Ob = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var v = e;
        if (typeof e == "symbol" ? v = Symbol.prototype.toString.call(e) : typeof e != "string" && (v = String(e)), i === "iso-8859-1") return escape(v).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var _ = "", S = 0; S < v.length; ++S) {
            var O = v.charCodeAt(S);
            if (O === 45 || O === 46 || O === 95 || O === 126 || O >= 48 && O <= 57 || O >= 65 && O <= 90 || O >= 97 && O <= 122 || f === _b.RFC1738 && (O === 40 || O === 41)) {
                _ += v.charAt(S);
                continue
            }
            if (O < 128) {
                _ = _ + Vn[O];
                continue
            }
            if (O < 2048) {
                _ = _ + (Vn[192 | O >> 6] + Vn[128 | O & 63]);
                continue
            }
            if (O < 55296 || O >= 57344) {
                _ = _ + (Vn[224 | O >> 12] + Vn[128 | O >> 6 & 63] + Vn[128 | O & 63]);
                continue
            }
            S += 1, O = 65536 + ((O & 1023) << 10 | v.charCodeAt(S) & 1023), _ += Vn[240 | O >> 18] + Vn[128 | O >> 12 & 63] + Vn[128 | O >> 6 & 63] + Vn[128 | O & 63]
        }
        return _
    },
    Rb = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], v = f.obj[f.prop], _ = Object.keys(v), S = 0; S < _.length; ++S) {
                var O = _[S],
                    D = v[O];
                typeof D == "object" && D !== null && i.indexOf(D) === -1 && (n.push({
                    obj: v,
                    prop: O
                }), i.push(D))
            }
        return Sb(n), e
    },
    Ib = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Db = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Mb = function(e, n) {
        return [].concat(e, n)
    },
    Lb = function(e, n) {
        if (Di(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    iu = {
        arrayToObject: nu,
        assign: Tb,
        combine: Mb,
        compact: Rb,
        decode: Ab,
        encode: Ob,
        isBuffer: Db,
        isRegExp: Ib,
        maybeMap: Lb,
        merge: kb
    },
    ru = Cb,
    Ia = iu,
    ns = Ya,
    Pb = Object.prototype.hasOwnProperty,
    Yl = {
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
    Nb = String.prototype.split,
    Bb = Array.prototype.push,
    su = function(t, e) {
        Bb.apply(t, ei(e) ? e : [e])
    },
    Vb = Date.prototype.toISOString,
    Kl = ns.default,
    nn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Ia.encode,
        encodeValuesOnly: !1,
        format: Kl,
        formatter: ns.formatters[Kl],
        indices: !1,
        serializeDate: function(e) {
            return Vb.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    $b = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    ua = {},
    jb = function t(e, n, i, a, f, v, _, S, O, D, $, J, ie, Y, re, m) {
        for (var P = e, W = m, ae = 0, se = !1;
            (W = W.get(ua)) !== void 0 && !se;) {
            var ve = W.get(e);
            if (ae += 1, typeof ve < "u") {
                if (ve === ae) throw new RangeError("Cyclic object value");
                se = !0
            }
            typeof W.get(ua) > "u" && (ae = 0)
        }
        if (typeof S == "function" ? P = S(n, P) : P instanceof Date ? P = $(P) : i === "comma" && ei(P) && (P = Ia.maybeMap(P, function(ue) {
                return ue instanceof Date ? $(ue) : ue
            })), P === null) {
            if (f) return _ && !Y ? _(n, nn.encoder, re, "key", J) : n;
            P = ""
        }
        if ($b(P) || Ia.isBuffer(P)) {
            if (_) {
                var d = Y ? n : _(n, nn.encoder, re, "key", J);
                if (i === "comma" && Y) {
                    for (var Ee = Nb.call(String(P), ","), Oe = "", Pe = 0; Pe < Ee.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + ie(_(Ee[Pe], nn.encoder, re, "value", J));
                    return [ie(d) + (a && ei(P) && Ee.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [ie(d) + "=" + ie(_(P, nn.encoder, re, "value", J))]
            }
            return [ie(n) + "=" + ie(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var Ve;
        if (i === "comma" && ei(P)) Ve = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ei(S)) Ve = S;
        else {
            var K = Object.keys(P);
            Ve = O ? K.sort(O) : K
        }
        for (var Fe = a && ei(P) && P.length === 1 ? n + "[]" : n, H = 0; H < Ve.length; ++H) {
            var oe = Ve[H],
                Te = typeof oe == "object" && typeof oe.value < "u" ? oe.value : P[oe];
            if (!(v && Te === null)) {
                var be = ei(P) ? typeof i == "function" ? i(Fe, oe) : Fe : Fe + (D ? "." + oe : "[" + oe + "]");
                m.set(e, ae);
                var ye = ru();
                ye.set(ua, m), su(lt, t(Te, be, i, a, f, v, _, S, O, D, $, J, ie, Y, re, ye))
            }
        }
        return lt
    },
    Fb = function(e) {
        if (!e) return nn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || nn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = ns.default;
        if (typeof e.format < "u") {
            if (!Pb.call(ns.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = ns.formatters[i],
            f = nn.filter;
        return (typeof e.filter == "function" || ei(e.filter)) && (f = e.filter), {
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
    zb = function(t, e) {
        var n = t,
            i = Fb(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, a = f);
        var v = [];
        if (typeof n != "object" || n === null) return "";
        var _;
        e && e.arrayFormat in Yl ? _ = e.arrayFormat : e && "indices" in e ? _ = e.indices ? "indices" : "repeat" : _ = "indices";
        var S = Yl[_];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var O = S === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var D = ru(), $ = 0; $ < a.length; ++$) {
            var J = a[$];
            i.skipNulls && n[J] === null || su(v, jb(n[J], J, S, O, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var ie = v.join(i.delimiter),
            Y = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? Y += "utf8=%26%2310003%3B&" : Y += "utf8=%E2%9C%93&"), ie.length > 0 ? Y + ie : ""
    },
    mr = iu,
    Da = Object.prototype.hasOwnProperty,
    Ub = Array.isArray,
    Qt = {
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
    Hb = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    ou = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Gb = "utf8=%26%2310003%3B",
    Wb = "utf8=%E2%9C%93",
    qb = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            v = a.split(n.delimiter, f),
            _ = -1,
            S, O = n.charset;
        if (n.charsetSentinel)
            for (S = 0; S < v.length; ++S) v[S].indexOf("utf8=") === 0 && (v[S] === Wb ? O = "utf-8" : v[S] === Gb && (O = "iso-8859-1"), _ = S, S = v.length);
        for (S = 0; S < v.length; ++S)
            if (S !== _) {
                var D = v[S],
                    $ = D.indexOf("]="),
                    J = $ === -1 ? D.indexOf("=") : $ + 1,
                    ie, Y;
                J === -1 ? (ie = n.decoder(D, Qt.decoder, O, "key"), Y = n.strictNullHandling ? null : "") : (ie = n.decoder(D.slice(0, J), Qt.decoder, O, "key"), Y = mr.maybeMap(ou(D.slice(J + 1), n), function(re) {
                    return n.decoder(re, Qt.decoder, O, "value")
                })), Y && n.interpretNumericEntities && O === "iso-8859-1" && (Y = Hb(Y)), D.indexOf("[]=") > -1 && (Y = Ub(Y) ? [Y] : Y), Da.call(i, ie) ? i[ie] = mr.combine(i[ie], Y) : i[ie] = Y
            } return i
    },
    Xb = function(t, e, n, i) {
        for (var a = i ? e : ou(e, n), f = t.length - 1; f >= 0; --f) {
            var v, _ = t[f];
            if (_ === "[]" && n.parseArrays) v = [].concat(a);
            else {
                v = n.plainObjects ? Object.create(null) : {};
                var S = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _,
                    O = parseInt(S, 10);
                !n.parseArrays && S === "" ? v = {
                    0: a
                } : !isNaN(O) && _ !== S && String(O) === S && O >= 0 && n.parseArrays && O <= n.arrayLimit ? (v = [], v[O] = a) : S !== "__proto__" && (v[S] = a)
            }
            a = v
        }
        return a
    },
    Yb = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                v = /(\[[^[\]]*])/,
                _ = /(\[[^[\]]*])/g,
                S = i.depth > 0 && v.exec(f),
                O = S ? f.slice(0, S.index) : f,
                D = [];
            if (O) {
                if (!i.plainObjects && Da.call(Object.prototype, O) && !i.allowPrototypes) return;
                D.push(O)
            }
            for (var $ = 0; i.depth > 0 && (S = _.exec(f)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Da.call(Object.prototype, S[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(S[1])
            }
            return S && D.push("[" + f.slice(S.index) + "]"), Xb(D, n, i, a)
        }
    },
    Kb = function(e) {
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
            delimiter: typeof e.delimiter == "string" || mr.isRegExp(e.delimiter) ? e.delimiter : Qt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Qt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Qt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Qt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Qt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Qt.strictNullHandling
        }
    },
    Jb = function(t, e) {
        var n = Kb(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? qb(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), v = 0; v < f.length; ++v) {
            var _ = f[v],
                S = Yb(_, i[_], n, typeof t == "string");
            a = mr.merge(a, S, n)
        }
        return n.allowSparse === !0 ? a : mr.compact(a)
    },
    Qb = zb,
    Zb = Jb,
    ew = Ya,
    au = {
        formats: ew,
        parse: Zb,
        stringify: Qb
    };
class tw {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class nw {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class iw {
    constructor(e) {
        this.connections = e.connections
    }
}
class rw {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class sw {}
var go = {
    CreateRoomReply: tw,
    GetRoomReply: nw,
    GetAudienceReply: iw,
    RoomExit: rw,
    RoomLock: sw
};
const Jl = Sa.exports,
    ow = au,
    {
        CreateRoomReply: aw,
        GetRoomReply: lw
    } = go;
class cw {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = ow.stringify(n);
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
            v = await (await Jl(i, {
                method: "POST"
            })).json();
        if (!v.ok) throw new Error(`failed to create room: ${v.error}`);
        let _ = v.body;
        return new aw({
            code: _.code,
            token: _.token,
            host: _.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Jl(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
        return new lw({
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
var uw = {
        APIClient: cw
    },
    or = null;
typeof WebSocket < "u" ? or = WebSocket : typeof MozWebSocket < "u" ? or = MozWebSocket : typeof vt < "u" ? or = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? or = window.WebSocket || window.MozWebSocket : typeof self < "u" && (or = self.WebSocket || self.MozWebSocket);
var hw = or,
    Ka = {
        exports: {}
    },
    hr = typeof Reflect == "object" ? Reflect : null,
    Ql = hr && typeof hr.apply == "function" ? hr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Hs;
hr && typeof hr.ownKeys == "function" ? Hs = hr.ownKeys : Object.getOwnPropertySymbols ? Hs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Hs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function dw(t) {
    console && console.warn && console.warn(t)
}
var lu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Ka.exports = Rt;
Ka.exports.once = mw;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var Zl = 10;

function mo(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Zl
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || lu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Zl = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || lu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function cu(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return cu(this)
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
        var _ = new Error("Unhandled error." + (v ? " (" + v.message + ")" : ""));
        throw _.context = v, _
    }
    var S = f[e];
    if (S === void 0) return !1;
    if (typeof S == "function") Ql(S, this, n);
    else
        for (var O = S.length, D = pu(S, O), i = 0; i < O; ++i) Ql(D[i], this, n);
    return !0
};

function uu(t, e, n, i) {
    var a, f, v;
    if (mo(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), v = f[e]), v === void 0) v = f[e] = n, ++t._eventsCount;
    else if (typeof v == "function" ? v = f[e] = i ? [n, v] : [v, n] : i ? v.unshift(n) : v.push(n), a = cu(t), a > 0 && v.length > a && !v.warned) {
        v.warned = !0;
        var _ = new Error("Possible EventEmitter memory leak detected. " + v.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _.name = "MaxListenersExceededWarning", _.emitter = t, _.type = e, _.count = v.length, dw(_)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return uu(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return uu(this, e, n, !0)
};

function fw() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function hu(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = fw.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return mo(n), this.on(e, hu(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return mo(n), this.prependListener(e, hu(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, v, _;
    if (mo(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, v = i.length - 1; v >= 0; v--)
            if (i[v] === n || i[v].listener === n) {
                _ = i[v].listener, f = v;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : pw(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, _ || n)
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

function du(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? gw(a) : pu(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return du(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return du(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : fu.call(t, e)
};
Rt.prototype.listenerCount = fu;

function fu(t) {
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

function pu(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function pw(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function gw(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function mw(t, e) {
    return new Promise(function(n, i) {
        function a(v) {
            t.removeListener(e, f), i(v)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        gu(t, e, f, {
            once: !0
        }), e !== "error" && vw(t, a, {
            once: !0
        })
    })
}

function vw(t, e, n) {
    typeof t.on == "function" && gu(t, "error", e, n)
}

function gu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class yw {
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
class mu extends ds {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class vu extends ds {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class yu extends ds {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class kt extends vo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class bu extends kt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class wu extends kt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class Cu extends kt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class xu extends kt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class Eu extends kt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class _u extends kt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class Su extends kt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class ku extends kt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class Tu extends kt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Au extends kt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Ou extends kt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Ru extends kt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Iu extends kt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Du extends kt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Mu extends kt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Lu extends kt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Pu extends kt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Nu extends kt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Bu extends kt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Vu extends kt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class $u extends kt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class ju extends kt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Fu extends kt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class zu extends kt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Uu extends kt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Hu extends kt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Gu extends kt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class Wu extends kt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function bw({
    code: t,
    message: e
}) {
    const n = ww[t];
    return n ? new n({
        message: e
    }) : new vo({
        message: e
    })
}
var ti = {
    createError: bw,
    CallError: vo,
    EcastServerError: ds,
    EcastCreateRoomFailed: mu,
    EcastDialRoomFailed: vu,
    EcastServerIsShuttingDown: yu,
    EcastClientError: kt,
    EcastParseError: bu,
    EcastRequestIsMissingOpcode: wu,
    EcastRequestHasInvalidOpcode: Cu,
    EcastRequestHasInvalidArguments: xu,
    EcastEntityNotFound: Eu,
    EcastEntityAlreadyExists: _u,
    EcastEntityTypeError: Su,
    EcastNoSuchClient: ku,
    EcastRoomIsLocked: Tu,
    EcastRoomIsFull: Au,
    EcastLicenseNotFound: Ou,
    EcastLicenseCheckFailed: Ru,
    EcastRoomNotFound: Iu,
    EcastInvalidRole: Du,
    EcastTwitchLoginRequired: Mu,
    EcastInvalidOption: Lu,
    EcastPasswordRequired: Pu,
    EcastInvalidPassword: Nu,
    EcastNameRequired: Bu,
    EcastFilterError: Vu,
    EcastNoSuchFilter: $u,
    EcastPermissionDenied: ju,
    EcastNotConnected: Fu,
    EcastIllegalOperation: zu,
    EcastACLChangeDenied: Uu,
    EcastRoomHasEnded: Hu,
    EcastEntityLocked: Gu,
    EcastRateLimitExceeded: Wu,
    ObservedError: yw
};
const ww = {
    1e3: ds,
    1001: mu,
    1002: vu,
    1003: yu,
    2e3: kt,
    2001: bu,
    2002: wu,
    2003: Cu,
    2004: xu,
    2005: Eu,
    2006: _u,
    2007: Su,
    2008: ku,
    2009: Tu,
    2010: Au,
    2011: Ou,
    2012: Ru,
    2013: Iu,
    2014: Du,
    2015: Mu,
    2016: Lu,
    2017: Pu,
    2018: Nu,
    2019: Bu,
    2021: Vu,
    2022: $u,
    2023: ju,
    2024: Fu,
    2025: zu,
    2026: Uu,
    2027: Hu,
    2028: Gu,
    2420: Wu
};
class Cw {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class xw {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class Ew {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class _w {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class Sw {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ja = {
    ClientConnected: xw,
    ClientDisconnected: Ew,
    ClientKicked: Sw,
    ClientSend: _w,
    ClientWelcome: Cw
};
class kw {
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
var Qa = {
    CountGroup: kw
};
class Tw {
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
    GCounter: Tw
};
class Aw {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var qu = {
    Notification: Aw
};
class Ow {
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
class Rw {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var el = {
    ObjectEntity: Ow,
    ObjectEcho: Rw
};
class Iw {
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
var tl = {
    PNCounter: Iw
};
class Dw {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var Xu = {
    Reply: Dw
};
class Mw {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Lw = {
    Request: Mw
};
class Pw {
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
class Nw {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var nl = {
    TextEntity: Pw,
    TextEcho: Nw
};
class Bw {
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
var il = {
    TextRing: Bw
};
class Vw {
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
    ArtifactEntity: Vw
};
class $w {
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
class jw {
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
class Fw {
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
var rl = {
    DoodleEntity: $w,
    DoodleLine: jw,
    DoodleLineRemoved: Fw
};
class zw {
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
class Uw {
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
class Hw {
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
var Ku = {
    StackEntity: zw,
    StackElement: Uw,
    StackElements: Hw
};
class Gw {
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
var Ju = {
    DropEntity: Gw
};
class Ww {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var qw = {
    Echo: Ww
};
class Xw {
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
var Yw = {
    LockEntity: Xw
};
class Kw {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Qu = {
    OK: Kw
};
class Jw {
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
var Zu = {
    NumberEntity: Jw
};
const {
    ArtifactEntity: Qw
} = Yu, {
    ClientWelcome: Zw,
    ClientConnected: e0,
    ClientDisconnected: t0,
    ClientKicked: n0,
    ClientSend: i0
} = Ja, {
    CountGroup: r0
} = Qa, {
    DoodleEntity: s0,
    DoodleLine: o0,
    DoodleLineRemoved: a0
} = rl, {
    StackEntity: l0,
    StackElement: c0,
    StackElements: u0
} = Ku, {
    DropEntity: h0
} = Ju, {
    Echo: d0
} = qw, {
    LockEntity: f0
} = Yw, {
    GCounter: p0
} = Za, {
    GetAudienceReply: g0,
    RoomExit: m0,
    RoomLock: v0
} = go, {
    Notification: y0
} = qu, {
    OK: b0
} = Qu, {
    NumberEntity: w0
} = Zu, {
    ObjectEcho: C0,
    ObjectEntity: x0
} = el, {
    PNCounter: ec
} = tl, {
    Reply: E0
} = Xu, {
    TextEcho: _0,
    TextEntity: S0
} = nl, {
    TextRing: k0
} = il, {
    createError: tc,
    ObservedError: T0
} = ti;

function Ma(t, e, n) {
    switch (t) {
        case "ok":
            return new b0;
        case "echo":
            return new d0({
                message: e.message
            });
        case "lock":
            return new f0({
                key: e.key,
                from: e.from
            });
        case "error":
            return tc({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new T0({
                to: e.to,
                error: tc({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new S0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new _0({
                message: e.message
            });
        case "object":
            return new x0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new C0({
                message: e.message
            });
        case "drop":
            return new h0({
                key: e.key
            });
        case "artifact":
            return new Qw({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new e0({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new t0({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new n0({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new i0({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Zw({
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
                    a[f] = Ma(v[0], v[1], v[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new s0({
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
            return new o0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new a0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new l0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new c0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new u0({
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
            return new m0({
                cause: e.cause
            });
        case "room/lock":
            return new v0;
        case "room/get-audience":
            return new g0({
                connections: e.connections
            });
        case "audience":
            return new ec({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new r0({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new k0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new p0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new ec({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function A0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new E0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Ma(n, e.result)
    }) : new y0({
        pc: e.pc,
        opcode: n,
        result: Ma(n, e.result)
    })
}
var O0 = {
    parseResponseMessage: A0
};
const nc = hw,
    R0 = au,
    I0 = Ka.exports,
    {
        CallError: D0
    } = ti,
    {
        ClientWelcome: M0
    } = Ja,
    {
        CountGroup: L0
    } = Qa,
    {
        GCounter: P0
    } = Za,
    {
        Notification: ic
    } = qu,
    {
        ObjectEntity: ha
    } = el,
    {
        PNCounter: N0
    } = tl,
    {
        Reply: B0
    } = Xu,
    {
        Request: V0
    } = Lw,
    {
        TextEntity: da
    } = nl,
    {
        TextRing: $0
    } = il,
    {
        parseResponseMessage: j0
    } = O0,
    {
        DoodleEntity: F0
    } = rl,
    {
        StackEntity: z0
    } = Ku,
    U0 = 1e3 + Math.floor(Math.random() * 500),
    rc = 13e3;
class H0 extends I0 {
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
        const n = R0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let v = !1,
                _ = !1,
                S = D => {
                    a(D), v = !0
                },
                O = D => {
                    f(D), v = !0
                };
            this.conn = new nc(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const $ = j0(D);
                if ($ instanceof B0) this.onReply($);
                else if ($ instanceof ic) {
                    if ($.result instanceof M0) _ = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), S($.result);
                    else if (!v) {
                        O($.result);
                        return
                    }
                    this.onNotification($)
                } else console.error(`failed to parse response messsage: ${$}`)
            }, this.conn.onerror = D => {
                v ? this.emit("socketError", D) : O(D)
            }, this.conn.onclose = D => {
                this.debugLog("onclose", D.code), _ && D.code === 1006 ? this.reconnect() : this.emit("socketClose", D)
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
            n = U0;
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
            if (n >= rc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(rc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new ic(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof D0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== nc.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new V0({
                seq: i,
                opcode: e,
                params: n
            }),
            f = new Promise((_, S) => {
                this.pending[i] = {
                    resolve: _,
                    reject: S,
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
        return this.entities[e] = new ha({
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
        return this.entities[e] = new ha({
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
        return this.entities[e] = new ha({
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
                reject: _
            } = i;
        f && (a.acl = f), v && (a.accept = v), _ && (a.reject = _);
        const S = await this.send("text/create", a);
        return this.entities[e] = new da({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), S
    }
    async setText(e, n, i) {
        const a = {
            key: e,
            val: n
        };
        i && (a.acl = i);
        const f = await this.send("text/set", a);
        return this.entities[e] = new da({
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
        return this.entities[e] = new da({
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
            maxPoints: _,
            size: S,
            weights: O
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = v, _ != null && (i.maxPoints = _), S && (i.size = S), O && (i.weights = O);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new F0({
            key: e,
            colors: f,
            lines: [],
            live: v,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: S,
            weights: O,
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
        } = n, _ = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: f,
            points: v
        }), S = {
            layer: i,
            color: a,
            weight: f,
            points: v
        };
        return this.entities[e].lines.push(S), _
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
        return this.entities[e] = new z0({
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
        return this.entities[e] = new P0({
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
        return this.entities[e] = new N0({
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
        const _ = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new $0({
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
var G0 = {
    WSClient: H0
};
const {
    APIClient: W0
} = uw, {
    WSClient: q0
} = G0, {
    CreateRoomReply: X0,
    GetRoomReply: Y0
} = go, {
    ClientWelcome: K0,
    ClientDisconnected: J0
} = Ja, {
    ArtifactEntity: Q0
} = Yu, {
    GCounter: Z0
} = Za, {
    NumberEntity: eC
} = Zu, {
    TextEntity: tC
} = nl, {
    DoodleEntity: nC
} = rl, {
    ObjectEntity: iC
} = el, {
    CountGroup: rC
} = Qa, {
    DropEntity: sC
} = Ju, {
    OK: oC
} = Qu, {
    RoomExit: aC
} = go, {
    TextRing: lC
} = il, {
    PNCounter: cC
} = tl;
var Ri = {
    APIClient: W0,
    WSClient: q0,
    ClientWelcome: K0,
    CreateRoomReply: X0,
    DropEntity: sC,
    GetRoomReply: Y0,
    ClientDisconnected: J0,
    RoomExit: aC,
    OK: oC,
    ArtifactEntity: Q0,
    DoodleEntity: nC,
    NumberEntity: eC,
    CountGroup: rC,
    GCounter: Z0,
    ObjectEntity: iC,
    PNCounter: cC,
    TextEntity: tC,
    TextRing: lC
};

function sc(...t) {
    console.log(...t)
}

function uC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var oc = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(vt, function(n) {
        var i = typeof window < "u" ? window : typeof vt < "u" ? vt : typeof self < "u" ? self : {},
            a = function(N, q) {
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
            f = Object.prototype.hasOwnProperty,
            v;

        function _(j) {
            try {
                return decodeURIComponent(j.replace(/\+/g, " "))
            } catch {
                return null
            }
        }

        function S(j) {
            try {
                return encodeURIComponent(j)
            } catch {
                return null
            }
        }

        function O(j) {
            for (var N = /([^=?#&]+)=?([^&]*)/g, q = {}, M; M = N.exec(j);) {
                var G = _(M[1]),
                    fe = _(M[2]);
                G === null || fe === null || G in q || (q[G] = fe)
            }
            return q
        }

        function D(j, N) {
            N = N || "";
            var q = [],
                M, G;
            typeof N != "string" && (N = "?");
            for (G in j)
                if (f.call(j, G)) {
                    if (M = j[G], !M && (M === null || M === v || isNaN(M)) && (M = ""), G = S(G), M = S(M), G === null || M === null) continue;
                    q.push(G + "=" + M)
                } return q.length ? N + q.join("&") : ""
        }
        var $ = D,
            J = O,
            ie = {
                stringify: $,
                parse: J
            },
            Y = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            m = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + m + "+");

        function W(j) {
            return (j || "").toString().replace(P, "")
        }
        var ae = [
                ["#", "hash"],
                ["?", "query"],
                function(N, q) {
                    return d(q.protocol) ? N.replace(/\\/g, "/") : N
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
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var q = N.location || {};
            j = j || q;
            var M = {},
                G = typeof j,
                fe;
            if (j.protocol === "blob:") M = new Pe(unescape(j.pathname), {});
            else if (G === "string") {
                M = new Pe(j, {});
                for (fe in se) delete M[fe]
            } else if (G === "object") {
                for (fe in j) fe in se || (M[fe] = j[fe]);
                M.slashes === void 0 && (M.slashes = Y.test(j.href))
            }
            return M
        }

        function d(j) {
            return j === "file:" || j === "ftp:" || j === "http:" || j === "https:" || j === "ws:" || j === "wss:"
        }

        function Ee(j, N) {
            j = W(j), N = N || {};
            var q = re.exec(j),
                M = q[1] ? q[1].toLowerCase() : "",
                G = !!q[2],
                fe = !!q[3],
                pe = 0,
                Ne;
            return G ? fe ? (Ne = q[2] + q[3] + q[4], pe = q[2].length + q[3].length) : (Ne = q[2] + q[4], pe = q[2].length) : fe ? (Ne = q[3] + q[4], pe = q[3].length) : Ne = q[4], M === "file:" ? pe >= 2 && (Ne = Ne.slice(2)) : d(M) ? Ne = q[4] : M ? G && (Ne = Ne.slice(2)) : pe >= 2 && d(N.protocol) && (Ne = q[4]), {
                protocol: M,
                slashes: G || d(M),
                slashesCount: pe,
                rest: Ne
            }
        }

        function Oe(j, N) {
            if (j === "") return N;
            for (var q = (N || "/").split("/").slice(0, -1).concat(j.split("/")), M = q.length, G = q[M - 1], fe = !1, pe = 0; M--;) q[M] === "." ? q.splice(M, 1) : q[M] === ".." ? (q.splice(M, 1), pe++) : pe && (M === 0 && (fe = !0), q.splice(M, 1), pe--);
            return fe && q.unshift(""), (G === "." || G === "..") && q.push(""), q.join("/")
        }

        function Pe(j, N, q) {
            if (j = W(j), !(this instanceof Pe)) return new Pe(j, N, q);
            var M, G, fe, pe, Ne, Be, pt = ae.slice(),
                jt = typeof N,
                Ye = this,
                In = 0;
            for (jt !== "object" && jt !== "string" && (q = N, N = null), q && typeof q != "function" && (q = ie.parse), N = ve(N), G = Ee(j || "", N), M = !G.protocol && !G.slashes, Ye.slashes = G.slashes || M && N.slashes, Ye.protocol = G.protocol || N.protocol || "", j = G.rest, (Ye.protocol === "file:" || !G.slashes && (G.protocol || G.slashesCount < 2 || !d(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (pe = pt[In], typeof pe == "function") {
                    j = pe(j, Ye);
                    continue
                }
                fe = pe[0], Be = pe[1], fe !== fe ? Ye[Be] = j : typeof fe == "string" ? ~(Ne = j.indexOf(fe)) && (typeof pe[2] == "number" ? (Ye[Be] = j.slice(0, Ne), j = j.slice(Ne + pe[2])) : (Ye[Be] = j.slice(Ne), j = j.slice(0, Ne))) : (Ne = fe.exec(j)) && (Ye[Be] = Ne[1], j = j.slice(0, Ne.index)), Ye[Be] = Ye[Be] || M && pe[3] && N[Be] || "", pe[4] && (Ye[Be] = Ye[Be].toLowerCase())
            }
            q && (Ye.query = q(Ye.query)), M && N.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || N.pathname !== "") && (Ye.pathname = Oe(Ye.pathname, N.pathname)), Ye.pathname.charAt(0) !== "/" && d(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), a(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (pe = Ye.auth.split(":"), Ye.username = pe[0] || "", Ye.password = pe[1] || ""), Ye.origin = Ye.protocol !== "file:" && d(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(j, N, q) {
            var M = this;
            switch (j) {
                case "query":
                    typeof N == "string" && N.length && (N = (q || ie.parse)(N)), M[j] = N;
                    break;
                case "port":
                    M[j] = N, a(N, M.protocol) ? N && (M.host = M.hostname + ":" + N) : (M.host = M.hostname, M[j] = "");
                    break;
                case "hostname":
                    M[j] = N, M.port && (N += ":" + M.port), M.host = N;
                    break;
                case "host":
                    M[j] = N, /:\d+$/.test(N) ? (N = N.split(":"), M.port = N.pop(), M.hostname = N.join(":")) : (M.hostname = N, M.port = "");
                    break;
                case "protocol":
                    M.protocol = N.toLowerCase(), M.slashes = !q;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var G = j === "pathname" ? "/" : "#";
                        M[j] = N.charAt(0) !== G ? G + N : N
                    } else M[j] = N;
                    break;
                default:
                    M[j] = N
            }
            for (var fe = 0; fe < ae.length; fe++) {
                var pe = ae[fe];
                pe[4] && (M[pe[1]] = M[pe[1]].toLowerCase())
            }
            return M.origin = M.protocol !== "file:" && d(M.protocol) && M.host ? M.protocol + "//" + M.host : "null", M.href = M.toString(), M
        }

        function Ve(j) {
            (!j || typeof j != "function") && (j = ie.stringify);
            var N, q = this,
                M = q.protocol;
            M && M.charAt(M.length - 1) !== ":" && (M += ":");
            var G = M + (q.slashes || d(q.protocol) ? "//" : "");
            return q.username && (G += q.username, q.password && (G += ":" + q.password), G += "@"), G += q.host + q.pathname, N = typeof q.query == "object" ? j(q.query) : q.query, N && (G += N.charAt(0) !== "?" ? "?" + N : N), q.hash && (G += q.hash), G
        }
        Pe.prototype = {
            set: lt,
            toString: Ve
        }, Pe.extractProtocol = Ee, Pe.location = ve, Pe.trimLeft = W, Pe.qs = ie;
        var K = Pe;

        function Fe(j, N) {
            setTimeout(function(q) {
                return j.call(q)
            }, 4, N)
        }

        function H(j, N) {
            typeof process < "u" && console[j].call(null, N)
        }

        function oe(j, N) {
            j === void 0 && (j = []);
            var q = [];
            return j.forEach(function(M) {
                N(M) || q.push(M)
            }), q
        }

        function Te(j, N) {
            j === void 0 && (j = []);
            var q = [];
            return j.forEach(function(M) {
                N(M) && q.push(M)
            }), q
        }
        var be = function() {
            this.listeners = {}
        };
        be.prototype.addEventListener = function(N, q) {
            typeof q == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Te(this.listeners[N], function(M) {
                return M === q
            }).length === 0 && this.listeners[N].push(q))
        }, be.prototype.removeEventListener = function(N, q) {
            var M = this.listeners[N];
            this.listeners[N] = oe(M, function(G) {
                return G === q
            })
        }, be.prototype.dispatchEvent = function(N) {
            for (var q = this, M = [], G = arguments.length - 1; G-- > 0;) M[G] = arguments[G + 1];
            var fe = N.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Ne) {
                M.length > 0 ? Ne.apply(q, M) : Ne.call(q, N)
            }), !0) : !1
        };

        function ye(j) {
            var N = j.indexOf("?");
            return N >= 0 ? j.slice(0, N) : j
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(N, q) {
            var M = ye(q),
                G = this.urlMap[M];
            if (G && G.server && G.websockets.indexOf(N) === -1) return G.websockets.push(N), G.server
        }, ue.prototype.addMembershipToRoom = function(N, q) {
            var M = this.urlMap[ye(N.url)];
            M && M.server && M.websockets.indexOf(N) !== -1 && (M.roomMemberships[q] || (M.roomMemberships[q] = []), M.roomMemberships[q].push(N))
        }, ue.prototype.attachServer = function(N, q) {
            var M = ye(q),
                G = this.urlMap[M];
            if (!G) return this.urlMap[M] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, ue.prototype.serverLookup = function(N) {
            var q = ye(N),
                M = this.urlMap[q];
            if (M) return M.server
        }, ue.prototype.websocketsLookup = function(N, q, M) {
            var G = ye(N),
                fe, pe = this.urlMap[G];
            if (fe = pe ? pe.websockets : [], q) {
                var Ne = pe.roomMemberships[q];
                fe = Ne || []
            }
            return M ? fe.filter(function(Be) {
                return Be !== M
            }) : fe
        }, ue.prototype.removeServer = function(N) {
            delete this.urlMap[ye(N)]
        }, ue.prototype.removeWebSocket = function(N, q) {
            var M = ye(q),
                G = this.urlMap[M];
            G && (G.websockets = oe(G.websockets, function(fe) {
                return fe === N
            }))
        }, ue.prototype.removeMembershipFromRoom = function(N, q) {
            var M = this.urlMap[ye(N.url)],
                G = M.roomMemberships[q];
            M && G !== null && (M.roomMemberships[q] = oe(G, function(fe) {
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, q, M) {
            N === void 0 && (N = "undefined"), q === void 0 && (q = !1), M === void 0 && (M = !1), this.type = "" + N, this.bubbles = Boolean(q), this.cancelable = Boolean(M)
        };
        var dt = function(j) {
                function N(q, M) {
                    if (M === void 0 && (M = {}), j.call(this), !q) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var G = M.bubbles,
                        fe = M.cancelable;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke),
            Vt = function(j) {
                function N(q, M) {
                    if (M === void 0 && (M = {}), j.call(this), !q) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var G = M.bubbles,
                        fe = M.cancelable,
                        pe = M.data,
                        Ne = M.origin,
                        Be = M.lastEventId,
                        pt = M.ports;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Be || "")
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke),
            Gt = function(j) {
                function N(q, M) {
                    if (M === void 0 && (M = {}), j.call(this), !q) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var G = M.bubbles,
                        fe = M.cancelable,
                        pe = M.code,
                        Ne = M.reason,
                        Be = M.wasClean;
                    this.type = "" + q, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = G ? Boolean(G) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Be ? Boolean(Be) : !1
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke);

        function E(j) {
            var N = j.type,
                q = j.target,
                M = new dt(N);
            return q && (M.target = q, M.srcElement = q, M.currentTarget = q), M
        }

        function l(j) {
            var N = j.type,
                q = j.origin,
                M = j.data,
                G = j.target,
                fe = new Vt(N, {
                    data: M,
                    origin: q
                });
            return G && (fe.target = G, fe.srcElement = G, fe.currentTarget = G), fe
        }

        function g(j) {
            var N = j.code,
                q = j.reason,
                M = j.type,
                G = j.target,
                fe = j.wasClean;
            fe || (fe = N === ke.CLOSE_NORMAL || N === ke.CLOSE_NO_STATUS);
            var pe = new Gt(M, {
                code: N,
                reason: q,
                wasClean: fe
            });
            return G && (pe.target = G, pe.srcElement = G, pe.currentTarget = G), pe
        }

        function k(j, N, q) {
            j.readyState = Me.CLOSING;
            var M = _e.serverLookup(j.url),
                G = g({
                    type: "close",
                    target: j.target,
                    code: N,
                    reason: q
                }),
                fe = g({
                    type: "server::close",
                    target: j,
                    code: N,
                    reason: q
                });
            Fe(function() {
                _e.removeWebSocket(j, j.url), j.readyState = Me.CLOSED, j.dispatchEvent(G), j.dispatchEvent(fe), M && M.dispatchEvent(G, M)
            }, j)
        }

        function R(j, N, q) {
            j.readyState = Me.CLOSING;
            var M = _e.serverLookup(j.url),
                G = g({
                    type: "close",
                    target: j.target,
                    code: N,
                    reason: q,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: j,
                    code: N,
                    reason: q,
                    wasClean: !1
                }),
                pe = E({
                    type: "error",
                    target: j.target
                });
            Fe(function() {
                _e.removeWebSocket(j, j.url), j.readyState = Me.CLOSED, j.dispatchEvent(pe), j.dispatchEvent(G), j.dispatchEvent(fe), M && M.dispatchEvent(G, M)
            }, j)
        }

        function L(j) {
            return Object.prototype.toString.call(j) !== "[object Blob]" && !(j instanceof ArrayBuffer) && (j = String(j)), j
        }
        var B = new WeakMap;

        function te(j) {
            if (B.has(j)) return B.get(j);
            var N = new Proxy(j, {
                get: function(M, G) {
                    return G === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Ne = pe.code || ke.CLOSE_NORMAL,
                            Be = pe.reason || "";
                        k(N, Ne, Be)
                    } : G === "send" ? function(pe) {
                        pe = L(pe), j.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: j
                        }))
                    } : G === "on" ? function(pe, Ne) {
                        j.addEventListener("server::" + pe, Ne)
                    } : G === "target" ? j : M[G]
                }
            });
            return B.set(j, N), N
        }

        function Se(j) {
            var N = encodeURIComponent(j).match(/%[89ABab]/g);
            return j.length + (N ? N.length : 0)
        }

        function he(j) {
            var N = new K(j),
                q = N.pathname,
                M = N.protocol,
                G = N.hash;
            if (!j) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (q || (N.pathname = "/"), M === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (M !== "ws:" && M !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + M + "' is not allowed.");
            if (G !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + G + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function De(j) {
            if (j === void 0 && (j = []), !Array.isArray(j) && typeof j != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + j.toString() + "' is invalid.");
            typeof j == "string" && (j = [j]);
            var N = j.map(function(M) {
                    return {
                        count: 1,
                        protocol: M
                    }
                }).reduce(function(M, G) {
                    return M[G.protocol] = (M[G.protocol] || 0) + G.count, M
                }, {}),
                q = Object.keys(N).filter(function(M) {
                    return N[M] > 1
                });
            if (q.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + q[0] + "' is duplicated.");
            return j
        }
        var Me = function(j) {
            function N(M, G) {
                j.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(M), G = De(G), this.protocol = G[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var fe = te(this),
                    pe = _e.attachWebSocket(fe, this.url);
                Fe(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = N.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: ke.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var Be = pe.options.selectProtocol(G),
                                    pt = Be !== "",
                                    jt = G.indexOf(Be) !== -1;
                                if (pt && !jt) {
                                    this.readyState = N.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), _e.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: ke.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Be
                            }
                            this.readyState = N.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), pe.dispatchEvent(E({
                                type: "connection"
                            }), fe)
                        }
                    else this.readyState = N.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), H("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N;
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
            }, q.onopen.set = function(M) {
                this.removeEventListener("open", this._onopen), this._onopen = M, this.addEventListener("open", M)
            }, q.onmessage.set = function(M) {
                this.removeEventListener("message", this._onmessage), this._onmessage = M, this.addEventListener("message", M)
            }, q.onclose.set = function(M) {
                this.removeEventListener("close", this._onclose), this._onclose = M, this.addEventListener("close", M)
            }, q.onerror.set = function(M) {
                this.removeEventListener("error", this._onerror), this._onerror = M, this.addEventListener("error", M)
            }, N.prototype.send = function(G) {
                var fe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: L(G)
                    }),
                    Ne = _e.serverLookup(this.url);
                Ne && Fe(function() {
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
                    this.readyState === N.CONNECTING ? R(Ne, G || ke.CLOSE_ABNORMAL, fe) : k(Ne, G || ke.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(N.prototype, q), N
        }(be);
        Me.CONNECTING = 0, Me.prototype.CONNECTING = Me.CONNECTING, Me.OPEN = 1, Me.prototype.OPEN = Me.OPEN, Me.CLOSING = 2, Me.prototype.CLOSING = Me.CLOSING, Me.CLOSED = 3, Me.prototype.CLOSED = Me.CLOSED;
        var nt = function(j) {
            return j.reduce(function(N, q) {
                return N.indexOf(q) > -1 ? N : N.concat(q)
            }, [])
        };

        function Ct() {
            return typeof window < "u" ? window : typeof process == "object" && typeof uC == "function" && typeof vt == "object" ? vt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(j) {
                function N(q, M) {
                    M === void 0 && (M = rn), j.call(this);
                    var G = new K(q);
                    G.pathname || (G.pathname = "/"), this.url = G.toString(), this.originalWebSocket = null;
                    var fe = _e.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, M), this.options.mock && this.mockWebsocket()
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket = M.WebSocket, M.WebSocket = Me
                }, N.prototype.restoreWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket !== null && (M.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(M) {
                    M === void 0 && (M = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof M == "function" && M()
                }, N.prototype.on = function(M, G) {
                    this.addEventListener(M, G)
                }, N.prototype.close = function(M) {
                    M === void 0 && (M = {});
                    var G = M.code,
                        fe = M.reason,
                        pe = M.wasClean,
                        Ne = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ne.forEach(function(Be) {
                        Be.readyState = Me.CLOSED, Be.dispatchEvent(g({
                            type: "close",
                            target: Be.target,
                            code: G || ke.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(M, G, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Ne = fe.websockets;
                    Ne || (Ne = _e.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (G = Array.prototype.slice.call(arguments, 1, arguments.length), G = G.map(function(Be) {
                        return L(Be)
                    })) : G = L(G), Ne.forEach(function(Be) {
                        Array.isArray(G) ? Be.dispatchEvent.apply(Be, [l({
                            type: M,
                            data: G,
                            origin: pe.url,
                            target: Be.target
                        })].concat(G)) : Be.dispatchEvent(l({
                            type: M,
                            data: G,
                            origin: pe.url,
                            target: Be.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, N.prototype.to = function(M, G, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Ne = this,
                        Be = nt(fe.concat(_e.websocketsLookup(this.url, M, G)));
                    return {
                        to: function(pt, jt) {
                            return pe.to.call(pe, pt, jt, Be)
                        },
                        emit: function(jt, Ye) {
                            Ne.emit(jt, Ye, {
                                websockets: Be
                            })
                        }
                    }
                }, N.prototype.in = function() {
                    for (var M = [], G = arguments.length; G--;) M[G] = arguments[G];
                    return this.to.apply(null, M)
                }, N.prototype.simulate = function(M) {
                    var G = _e.websocketsLookup(this.url);
                    M === "error" && G.forEach(function(fe) {
                        fe.readyState = Me.CLOSED, fe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, N
            }(be);
        ct.of = function(N) {
            return new ct(N)
        };
        var yt = function(j) {
            function N(M, G) {
                var fe = this;
                M === void 0 && (M = "socket.io"), G === void 0 && (G = ""), j.call(this), this.binaryType = "blob";
                var pe = new K(M);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof G == "string" || typeof G == "object" && G !== null ? this.protocol = G : Array.isArray(G) && G.length > 0 && (this.protocol = G[0]);
                var Ne = _e.attachWebSocket(this, this.url);
                Fe(function() {
                    Ne ? (this.readyState = N.OPEN, Ne.dispatchEvent(E({
                        type: "connection"
                    }), Ne, this), Ne.dispatchEvent(E({
                        type: "connect"
                    }), Ne, this), this.dispatchEvent(E({
                        type: "connect",
                        target: this
                    }))) : (this.readyState = N.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: ke.CLOSE_NORMAL
                    })), H("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Be) {
                    fe.dispatchEvent(g({
                        type: "disconnect",
                        target: Be.target,
                        code: Be.code
                    }))
                })
            }
            j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N;
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
                    Be = _e.serverLookup(this.url);
                return Be && Be.dispatchEvent.apply(Be, [Ne].concat(fe)), this
            }, N.prototype.send = function(G) {
                return this.emit("message", G), this
            }, q.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var M = this,
                    G = _e.serverLookup(this.url);
                if (!G) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Ne) {
                        return G.emit(pe, Ne, {
                            websockets: _e.websocketsLookup(M.url, null, M)
                        }), M
                    },
                    to: function(pe) {
                        return G.to(pe, M)
                    },
                    in: function(pe) {
                        return G.in(pe, M)
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
                var Be = G.type,
                    pt = this.listeners[Be];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(jt) {
                    pe.length > 0 ? jt.apply(fe, pe) : jt.call(fe, G.data ? G.data : G)
                })
            }, Object.defineProperties(N.prototype, q), N
        }(be);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var wt = function(N, q) {
            return new yt(N, q)
        };
        wt.connect = function(N, q) {
            return wt(N, q)
        };
        var Kt = ct,
            Je = Me,
            Lt = wt;
        n.Server = Kt, n.WebSocket = Je, n.SocketIO = Lt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(oc, oc.exports);
var hC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(_, S) {
            var O = _.x - S.x,
                D = _.y - S.y;
            return O * O + D * D
        }

        function n(_, S, O) {
            var D = S.x,
                $ = S.y,
                J = O.x - D,
                ie = O.y - $;
            if (J !== 0 || ie !== 0) {
                var Y = ((_.x - D) * J + (_.y - $) * ie) / (J * J + ie * ie);
                Y > 1 ? (D = O.x, $ = O.y) : Y > 0 && (D += J * Y, $ += ie * Y)
            }
            return J = _.x - D, ie = _.y - $, J * J + ie * ie
        }

        function i(_, S) {
            for (var O = _[0], D = [O], $, J = 1, ie = _.length; J < ie; J++) $ = _[J], e($, O) > S && (D.push($), O = $);
            return O !== $ && D.push($), D
        }

        function a(_, S, O, D, $) {
            for (var J = D, ie, Y = S + 1; Y < O; Y++) {
                var re = n(_[Y], _[S], _[O]);
                re > J && (ie = Y, J = re)
            }
            J > D && (ie - S > 1 && a(_, S, ie, D, $), $.push(_[ie]), O - ie > 1 && a(_, ie, O, D, $))
        }

        function f(_, S) {
            var O = _.length - 1,
                D = [_[0]];
            return a(_, 0, O, S, D), D.push(_[O]), D
        }

        function v(_, S, O) {
            if (_.length <= 2) return _;
            var D = S !== void 0 ? S * S : 1;
            return _ = O ? _ : i(_, D), _ = f(_, D), _
        }
        t.exports = v, t.exports.default = v
    })()
})(hC);
const dC = Et.View.extend({
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
        _h.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            Ae(window).trigger("resize")
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new dC({
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp2-bombintern/",
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
var fC = {};
(function(t) {
    (function(e) {
        e(cs(), ot, t)
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
                var W = [],
                    ae = [];
                this._modelBindings = e.reject(this._modelBindings, function(se) {
                    if (!(m && se.model !== m) && !(P && se.config.selector != P)) return se.model.off(se.event, se.fn), ae.push(se.config._destroy), W.push(se.model), !0
                }), e.invoke(e.uniq(W), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(ae), function(se) {
                    se.call(this)
                }, this), this.$el.off(".stickit" + (m ? "." + m.cid : ""), P)
            },
            stickit: function(m, P) {
                var W = m || this.model,
                    ae = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(W, ae);
                var se = this.remove;
                return se.stickitWrapped || (this.remove = function() {
                    var ve = this;
                    return this.unstickit(), se && (ve = se.apply(this, arguments)), ve
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(m, P, W) {
                var ae = m || this.model,
                    se = ".stickit." + ae.cid;
                if (W = W || {}, e.isObject(P)) {
                    var ve = P;
                    e.each(ve, function(K, Fe) {
                        this.addBinding(ae, Fe, K)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(ae, P), !!d.length) {
                    e.isString(W) && (W = {
                        observe: W
                    }), e.isFunction(W.observe) && (W.observe = W.observe.call(this));
                    var Ee = $(d, W),
                        Oe = Ee.observe;
                    Ee.selector = P, Ee.view = this;
                    var Pe = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            v.call(this, Ee.destroy, d, ae, Ee)
                        }, J(d, Ee, ae, Oe), Y(d, Ee, ae, Oe), ie(d, Ee, ae), Oe) {
                        e.each(Ee.events, function(K) {
                            var Fe = K + se,
                                H = function(Te) {
                                    var be = v.call(this, Ee.getVal, d, Te, Ee, a.call(arguments, 1)),
                                        ye = _(Ee.updateModel, be, Te, Ee);
                                    ye && O(ae, Oe, be, lt, Ee)
                                },
                                oe = P === ":el" ? "" : P;
                            this.$el.on(Fe, oe, e.bind(H, this))
                        }, this), e.each(e.flatten([Oe]), function(K) {
                            S(ae, "change:" + K, Ee, function(Fe, H, oe) {
                                var Te = oe && oe.stickitChange && oe.stickitChange.bindId;
                                if (Te !== Pe) {
                                    var be = D(ae, Oe, Ee);
                                    re(d, Ee, be, ae)
                                }
                            })
                        });
                        var Ve = D(ae, Oe, Ee);
                        re(d, Ee, Ve, ae, !0)
                    }
                    v.call(this, Ee.initialize, d, ae, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(m, P) {
                var W = (P || "").split("."),
                    ae = e.reduce(W, function(se, ve) {
                        return se[ve]
                    }, m);
                return ae == null ? m : ae
            },
            v = function(m) {
                if (m = e.isString(m) ? f(this, m) : m, m) return m.apply(this, a.call(arguments, 1))
            },
            _ = function(m, P, W) {
                if (e.isBoolean(m)) return m;
                if (e.isFunction(m) || e.isString(m)) {
                    var ae = e.last(arguments).view;
                    return v.apply(ae, arguments)
                }
                return !1
            },
            S = function(m, P, W, ae) {
                var se = W.view;
                m.on(P, ae, se), se._modelBindings.push({
                    model: m,
                    event: P,
                    fn: ae,
                    config: W
                })
            },
            O = function(m, P, W, ae, se) {
                var ve = {},
                    d = se.view;
                se.onSet && (W = v.call(d, se.onSet, W, se)), se.set ? v.call(d, se.set, P, W, ae, se) : (ve[P] = W, e.isArray(P) && e.isArray(W) && (ve = e.reduce(P, function(Ee, Oe, Pe) {
                    return Ee[Oe] = e.has(W, Pe) ? W[Pe] : null, Ee
                }, {})), m.set(ve, ae))
            },
            D = function(m, P, W) {
                var ae = W.view,
                    se = function(Ee) {
                        return m[W.escape ? "escape" : "get"](Ee)
                    },
                    ve = function(Ee) {
                        return Ee == null ? "" : Ee
                    },
                    d = e.isArray(P) ? e.map(P, se) : se(P);
                return W.onGet && (d = v.call(ae, W.onGet, d, W)), e.isArray(d) ? e.map(d, ve) : ve(d)
            },
            $ = i.getConfiguration = function(m, P) {
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
                    return m.is(se.selector)
                })), W.push(P);
                var ae = e.extend.apply(e, W);
                return e.has(ae, "updateView") || (ae.updateView = !ae.visible), ae
            },
            J = function(m, P, W, ae) {
                var se = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ve = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ve;
                    var Ee = "",
                        Oe = d.observe || (d.observe = ae),
                        Pe = function() {
                            var lt = e.contains(se, d.name) ? "prop" : "attr",
                                Ve = D(W, Oe, d);
                            d.name === "class" ? (m.removeClass(Ee).addClass(Ve), Ee = Ve) : m[lt](d.name, Ve)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        S(W, "change:" + lt, P, Pe)
                    }), Pe()
                })
            },
            ie = function(m, P, W, ae) {
                e.each(P.classes || [], function(se, ve) {
                    e.isString(se) && (se = {
                        observe: se
                    }), se.view = P.view;
                    var d = se.observe,
                        Ee = function() {
                            var Oe = D(W, d, se);
                            m.toggleClass(ve, !!Oe)
                        };
                    e.each(e.flatten([d]), function(Oe) {
                        S(W, "change:" + Oe, P, Ee)
                    }), Ee()
                })
            },
            Y = function(m, P, W, ae) {
                if (P.visible != null) {
                    var se = P.view,
                        ve = function() {
                            var d = P.visible,
                                Ee = P.visibleFn,
                                Oe = D(W, ae, P),
                                Pe = !!Oe;
                            (e.isFunction(d) || e.isString(d)) && (Pe = !!v.call(se, d, Oe, P)), Ee ? v.call(se, Ee, m, Pe, P) : m.toggle(Pe)
                        };
                    e.each(e.flatten([ae]), function(d) {
                        S(W, "change:" + d, P, ve)
                    }), ve()
                }
            },
            re = function(m, P, W, ae, se) {
                var ve = P.view;
                !_(P.updateView, W, P) || (v.call(ve, P.update, m, W, ae, P), se || v.call(ve, P.afterUpdate, m, W, P))
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
            update: function(m, P, W, ae) {
                if (m.length > 1) P || (P = []), m.each(function(ve, d) {
                    var Ee = n.$(d),
                        Oe = e.contains(P, Ee.val());
                    Ee.prop("checked", Oe)
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
                    var W = m.val();
                    W !== "on" && W != null && (P = P ? m.val() : null)
                }
                return P
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(m, P, W, ae) {
                var se, ve = ae.selectOptions,
                    d = ve && ve.collection || void 0,
                    Ee = m.prop("multiple");
                if (!ve) {
                    ve = {};
                    var Oe = function(ue) {
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
                        d[void 0] = Oe(n.$(ue))
                    })), e.each(m.find("optgroup"), function(ue) {
                        var _e = n.$(ue).attr("label");
                        d.opt_labels.push(_e), d[_e] = Oe(n.$(ue).find("option"))
                    })) : d = Oe(m.find("option"))
                }
                ve.valuePath = ve.valuePath || "value", ve.labelPath = ve.labelPath || "label", ve.disabledPath = ve.disabledPath || "disabled";
                var Pe = function(ue, _e, ke) {
                    e.each(ue, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            Vt = function(k, R, L) {
                                Ke.text(k), dt = R, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), L === !0 && Ke.prop("disabled", "disabled")
                            },
                            Gt, E, l;
                        $e === "__default__" ? (Gt = ke.label, E = ke.value, l = ke.disabled) : (Gt = f($e, ve.labelPath), E = f($e, ve.valuePath), l = f($e, ve.disabledPath)), Vt(Gt, E, l);
                        var g = function() {
                            return !Ee && dt != null && ke != null && dt === ke ? !0 : !!(e.isObject(ke) && e.isEqual(dt, ke))
                        };
                        g() ? Ke.prop("selected", !0) : Ee && e.isArray(ke) && e.each(ke, function(k) {
                            e.isObject(k) && (k = f(k, ve.valuePath)), (k === dt || e.isObject(k) && e.isEqual(dt, k)) && Ke.prop("selected", !0)
                        }), _e.append(Ke)
                    })
                };
                if (m.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), se = f(lt, d)
                } else e.isFunction(d) ? se = v.call(this, d, m, ae) : se = d;
                if (se instanceof n.Collection) {
                    var Ve = se,
                        K = function() {
                            var ue = D(W, ae.observe, ae);
                            v.call(this, ae.update, m, ue, W, ae)
                        },
                        Fe = function() {
                            Ve.off("add remove reset sort", K)
                        },
                        H = function() {
                            Fe(), Ve.off("stickit:selectRefresh"), W.off("stickit:selectRefresh")
                        };
                    Ve.trigger("stickit:selectRefresh"), Ve.once("stickit:selectRefresh", Fe, this), Ve.on("add remove reset sort", K, this), W.trigger("stickit:selectRefresh"), W.once("stickit:selectRefresh", function() {
                        W.off("stickit:unstuck", H)
                    }), W.once("stickit:unstuck", H, this), se = se.toJSON()
                }
                if (ve.defaultOption) {
                    var oe = e.isFunction(ve.defaultOption) ? ve.defaultOption.call(this, m, ae) : ve.defaultOption;
                    Pe(["__default__"], m, oe)
                }
                if (e.isArray(se)) Pe(se, m, P);
                else if (se.opt_labels) e.each(se.opt_labels, function(ue) {
                    var _e = n.$("<optgroup/>").attr("label", ue);
                    Pe(se[ue], _e, P), m.append(_e)
                });
                else {
                    var Te = [],
                        be;
                    for (var ye in se) be = {}, be[ve.valuePath] = ye, be[ve.labelPath] = se[ye], Te.push(be);
                    Te = e.sortBy(Te, ve.comparator || ve.labelPath), Pe(Te, m, P)
                }
            },
            getVal: function(m) {
                var P = m.find("option:selected");
                return m.prop("multiple") ? e.map(P, function(W) {
                    return n.$(W).data("stickit-bind-val")
                }) : P.data("stickit-bind-val")
            }
        }]), i
    })
})(fC);
const pC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    eh = Et.View.extend({
        template: at.template(pC),
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
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || Ae("<div />").text(t).html()
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
            const e = Ae(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ti, Vs, is = typeof Map == "function" ? new Map : (Ti = [], Vs = [], {
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

function gC(t) {
    var e = is.get(t);
    e && e.destroy()
}

function mC(t) {
    var e = is.get(t);
    e && e.update()
}
var Yr = null;
typeof window > "u" || typeof window.getComputedStyle != "function" ? ((Yr = function(t) {
    return t
}).destroy = function(t) {
    return t
}, Yr.update = function(t) {
    return t
}) : ((Yr = function(t, e) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], function(n) {
        return function(i) {
            if (i && i.nodeName && i.nodeName === "TEXTAREA" && !is.has(i)) {
                var a, f = null,
                    v = null,
                    _ = null,
                    S = function() {
                        i.clientWidth !== v && J()
                    },
                    O = function(ie) {
                        window.removeEventListener("resize", S, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", O, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(ie).forEach(function(Y) {
                            i.style[Y] = ie[Y]
                        }), is.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", O, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", J, !1), window.addEventListener("resize", S, !1), i.addEventListener("input", J, !1), i.addEventListener("autosize:update", J, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", is.set(i, {
                    destroy: O,
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
                if (re < ie ? Y.overflowY === "hidden" && (D("scroll"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : Y.overflowY !== "hidden" && (D("hidden"), $(), re = Y.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), _ !== re) {
                    _ = re;
                    var m = th("autosize:resized");
                    try {
                        i.dispatchEvent(m)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], gC), t
}, Yr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], mC), t
});
var ac = Yr;
const vC = `<form>\r
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
    no = Et.View.extend({
        tagName: "div",
        className: "input",
        model: new ot.Model({}),
        template: at.template(vC),
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
                    return t ? typeof t == "object" ? t.html ? t.html : Ae("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || ac(Ae("textarea"))
        },
        onSubmitClick() {
            return Ae("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (Ae("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            Ae(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = Ae(this.$el).find("textarea");
            Ae(t).val(""), this.getOption("preventAutosize") || ac.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = Ae(this.$el).find("textarea");
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
    yC = '<div class="text"></div>',
    Bi = Et.View.extend({
        tagName: "div",
        template: at.template(yC),
        model: new ot.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : Ae("<div />").text(t).html()
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
            return t.get("type") === "input" ? no : t.get("type") === "text" ? Bi : eh
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
let lc = {};

function nh(t, ...e) {
    !lc[t] || lc[t].map(n => n(...e))
}
let Kr, Gs;

function Mi() {
    return Kr
}

function yo() {
    return Gs
}

function bC(t) {
    if (Kr = document.getElementById(t) || t || document.querySelector("canvas"), !Kr) throw Error("You must provide a canvas element for the game");
    return Gs = Kr.getContext("2d"), Gs.imageSmoothingEnabled = !1, nh("init"), {
        canvas: Kr,
        context: Gs
    }
}
class sl {
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
            margin: _ = 0
        } = e.frame;
        this.width = f, this.height = v, this.margin = _, this._f = 0, this._a = 0
    }
    clone() {
        return bo(this)
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
        let v = this.frames[this._f] / this.spriteSheet._f | 0,
            _ = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, _ * this.width + (_ * 2 + 1) * this.margin, v * this.height + (v * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function bo(t) {
    return new sl(t)
}
bo.prototype = sl.prototype;
bo.class = sl;
const wC = () => {};

function CC() {
    let t = Mi();
    yo().clearRect(0, 0, t.width, t.height)
}

function xC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        v = 1 / t,
        _ = e ? CC : wC,
        S, O, D, $, J;
    const ie = window.performance || Date;

    function Y() {
        if (O = requestAnimationFrame(Y), D = ie.now(), $ = D - S, S = D, !($ > 1e3)) {
            for (nh("tick"), a += $; a >= f;) J.update(v), a -= f;
            _(), J.render()
        }
    }
    return J = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            S = ie.now(), this.isStopped = !1, requestAnimationFrame(Y)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(O)
        },
        _frame: Y,
        set _last(re) {
            S = re
        }
    }, J
}
class EC {
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
EC.prototype;

function cc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        v = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), v && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), v && n.push(3)), n
}
class ol {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Mi();
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
            for (i = cc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
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
        for (n = cc(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
    }
    _sp(e, n, i) {
        if (this._b = !0, !this._s.length)
            for (e = this.bounds.width / 2 | 0, n = this.bounds.height / 2 | 0, i = 0; i < 4; i++) this._s[i] = al({
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

function al(t) {
    return new ol(t)
}
al.prototype = ol.prototype;
al.class = ol;
class ll {
    constructor(e = 0, n = 0) {
        this._x = e, this._y = n
    }
    add(e, n = 1) {
        return dr(this.x + (e.x || 0) * n, this.y + (e.y || 0) * n, this)
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

function dr(t, e, n = {}) {
    let i = new ll(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
dr.prototype = ll.prototype;
dr.class = ll;
class cl {
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
            ddy: _,
            width: S,
            height: O,
            image: D
        } = e;
        this.position = dr(n, i), this.velocity = dr(a, f), this.acceleration = dr(v, _), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = yo();
        for (let $ in e) this[$] = e[$];
        D && (this.width = S !== void 0 ? S : D.width, this.height = O !== void 0 ? O : D.height), this.sx = 0, this.sy = 0
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

function ul(t) {
    return new cl(t)
}
ul.prototype = cl.prototype;
ul.class = cl;

function _C(t) {
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
class SC {
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
            [].concat(a).map(_ => {
                n = n.concat(_C(_))
            }), this.animations[i] = bo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: v
            })
        }
    }
}
SC.prototype;
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
                for (let w = 0; w < c.length; w++) h.indexOf(c[w]) === -1 && h.push(c[w]);
                return h
            },
            a = c => c.charAt(0).toUpperCase() + c.slice(1),
            f = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            v = c => {
                console.error("".concat(n, " ").concat(c))
            },
            _ = [],
            S = c => {
                _.includes(c) || (_.push(c), f(c))
            },
            O = (c, h) => {
                S('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
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
            W = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            ae = c => Object.prototype.hasOwnProperty.call(re, c),
            se = c => m.indexOf(c) !== -1,
            ve = c => P[c],
            d = c => {
                ae(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            Ee = c => {
                W.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ve(c) && O(c, ve(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && Ee(h), Oe(h)
            },
            lt = "swal2-",
            Ve = c => {
                const h = {};
                for (const w in c) h[c[w]] = lt + c[w];
                return h
            },
            K = Ve(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            Fe = Ve(["success", "warning", "info", "question", "error"]),
            H = () => document.body.querySelector(".".concat(K.container)),
            oe = c => {
                const h = H();
                return h ? h.querySelector(c) : null
            },
            Te = c => oe(".".concat(c)),
            be = () => Te(K.popup),
            ye = () => Te(K.icon),
            ue = () => Te(K.title),
            _e = () => Te(K["html-container"]),
            ke = () => Te(K.image),
            $e = () => Te(K["progress-steps"]),
            Ke = () => Te(K["validation-message"]),
            dt = () => oe(".".concat(K.actions, " .").concat(K.confirm)),
            Vt = () => oe(".".concat(K.actions, " .").concat(K.deny)),
            Gt = () => Te(K["input-label"]),
            E = () => oe(".".concat(K.loader)),
            l = () => oe(".".concat(K.actions, " .").concat(K.cancel)),
            g = () => Te(K.actions),
            k = () => Te(K.footer),
            R = () => Te(K["timer-progress-bar"]),
            L = () => Te(K.close),
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
                const c = Array.from(be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((w, V) => {
                        const ge = parseInt(w.getAttribute("tabindex")),
                            Ue = parseInt(V.getAttribute("tabindex"));
                        return ge > Ue ? 1 : ge < Ue ? -1 : 0
                    }),
                    h = Array.from(be().querySelectorAll(B)).filter(w => w.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(w => pe(w))
            },
            Se = () => Ct(document.body, K.shown) && !Ct(document.body, K["toast-shown"]) && !Ct(document.body, K["no-backdrop"]),
            he = () => be() && Ct(be(), K.toast),
            De = () => be().hasAttribute("data-loading"),
            Me = {
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
            Ct = (c, h) => {
                if (!h) return !1;
                const w = h.split(/\s+/);
                for (let V = 0; V < w.length; V++)
                    if (!c.classList.contains(w[V])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(w => {
                    !Object.values(K).includes(w) && !Object.values(Fe).includes(w) && !Object.values(h.showClass).includes(w) && c.classList.remove(w)
                })
            },
            ct = (c, h, w) => {
                if (rn(c, h), h.customClass && h.customClass[w]) {
                    if (typeof h.customClass[w] != "string" && !h.customClass[w].forEach) return f("Invalid type of customClass.".concat(w, '! Expected string or iterable object, got "').concat(typeof h.customClass[w], '"'));
                    Je(c, h.customClass[w])
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
            wt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Kt = (c, h, w) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach(V => {
                    Array.isArray(c) ? c.forEach(ge => {
                        w ? ge.classList.add(V) : ge.classList.remove(V)
                    }) : w ? c.classList.add(V) : c.classList.remove(V)
                }))
            },
            Je = (c, h) => {
                Kt(c, h, !0)
            },
            Lt = (c, h) => {
                Kt(c, h, !1)
            },
            j = (c, h) => {
                const w = Array.from(c.children);
                for (let V = 0; V < w.length; V++) {
                    const ge = w[V];
                    if (ge instanceof HTMLElement && Ct(ge, h)) return ge
                }
            },
            N = (c, h, w) => {
                w === "".concat(parseInt(w)) && (w = parseInt(w)), w || parseInt(w) === 0 ? c.style[h] = typeof w == "number" ? "".concat(w, "px") : w : c.style.removeProperty(h)
            },
            q = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            M = c => {
                c.style.display = "none"
            },
            G = (c, h, w, V) => {
                const ge = c.querySelector(h);
                ge && (ge.style[w] = V)
            },
            fe = function(c, h) {
                let w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? q(c, w) : M(c)
            },
            pe = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !pe(dt()) && !pe(Vt()) && !pe(l()),
            Be = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    w = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    V = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return w > 0 || V > 0
            },
            jt = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const w = R();
                pe(w) && (h && (w.style.transition = "none", w.style.width = "100%"), setTimeout(() => {
                    w.style.transition = "width ".concat(c / 1e3, "s linear"), w.style.width = "0%"
                }, 10))
            },
            Ye = () => {
                const c = R(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const w = parseInt(window.getComputedStyle(c).width),
                    V = h / w * 100;
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
                const w = window.scrollX,
                    V = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(w, V)
            }),
            _r = `
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
                const c = H();
                return c ? (c.remove(), Lt([document.documentElement, document.body], [K["no-backdrop"], K["toast-shown"], K["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            Sr = () => {
                const c = be(),
                    h = j(c, K.input),
                    w = j(c, K.file),
                    V = c.querySelector(".".concat(K.range, " input")),
                    ge = c.querySelector(".".concat(K.range, " output")),
                    Ue = j(c, K.select),
                    Ht = c.querySelector(".".concat(K.checkbox, " input")),
                    Bn = j(c, K.textarea);
                h.oninput = sn, w.onchange = sn, Ue.onchange = sn, Ht.onchange = sn, Bn.oninput = sn, V.oninput = () => {
                    sn(), ge.value = V.value
                }, V.onchange = () => {
                    sn(), ge.value = V.value
                }
            },
            kr = c => typeof c == "string" ? document.querySelector(c) : c,
            mi = c => {
                const h = be();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            Vi = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(H(), K.rtl)
            },
            vi = c => {
                const h = kn();
                if (In()) {
                    v("SweetAlert2 requires document to initialize");
                    return
                }
                const w = document.createElement("div");
                w.className = K.container, h && Je(w, K["no-transition"]), nt(w, _r);
                const V = kr(c.target);
                V.appendChild(w), mi(c), Vi(V), Sr()
            },
            yi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? $i(c, h) : c && nt(h, c)
            },
            $i = (c, h) => {
                c.jquery ? ji(h, c) : nt(h, c.toString())
            },
            ji = (c, h) => {
                if (c.textContent = "", 0 in h)
                    for (let w = 0; w in h; w++) c.appendChild(h[w].cloneNode(!0));
                else c.appendChild(h.cloneNode(!0))
            },
            mn = (() => {
                if (In()) return !1;
                const c = document.createElement("div"),
                    h = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const w in h)
                    if (Object.prototype.hasOwnProperty.call(h, w) && typeof c.style[w] < "u") return h[w];
                return !1
            })(),
            Fi = () => {
                const c = document.createElement("div");
                c.className = K["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            bi = (c, h) => {
                const w = g(),
                    V = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? M(w) : q(w), ct(w, h, "actions"), Un(w, V, h), nt(V, h.loaderHtml), ct(V, h, "loader")
            };

        function Un(c, h, w) {
            const V = dt(),
                ge = Vt(),
                Ue = l();
            wi(V, "confirm", w), wi(ge, "deny", w), wi(Ue, "cancel", w), zi(V, ge, Ue, w), w.reverseButtons && (w.toast ? (c.insertBefore(Ue, V), c.insertBefore(ge, V)) : (c.insertBefore(Ue, h), c.insertBefore(ge, h), c.insertBefore(V, h)))
        }

        function zi(c, h, w, V) {
            if (!V.buttonsStyling) return Lt([c, h, w], K.styled);
            Je([c, h, w], K.styled), V.confirmButtonColor && (c.style.backgroundColor = V.confirmButtonColor, Je(c, K["default-outline"])), V.denyButtonColor && (h.style.backgroundColor = V.denyButtonColor, Je(h, K["default-outline"])), V.cancelButtonColor && (w.style.backgroundColor = V.cancelButtonColor, Je(w, K["default-outline"]))
        }

        function wi(c, h, w) {
            fe(c, w["show".concat(a(h), "Button")], "inline-block"), nt(c, w["".concat(h, "ButtonText")]), c.setAttribute("aria-label", w["".concat(h, "ButtonAriaLabel")]), c.className = K[h], ct(c, w, "".concat(h, "Button")), Je(c, w["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const w = H();
            !w || (y(w, h.backdrop), o(w, h.position), C(w, h.grow), ct(w, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], K["no-backdrop"])
        }

        function o(c, h) {
            h in K ? Je(c, K[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Je(c, K.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const w = "grow-".concat(h);
                w in K && Je(c, K[w])
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
                const w = be(),
                    V = A.innerParams.get(c),
                    ge = !V || h.input !== V.input;
                Q.forEach(Ue => {
                    const Ht = j(w, K[Ue]);
                    qt(Ue, h.inputAttributes), Ht.className = K[Ue], ge && M(Ht)
                }), h.input && (ge && We(h), Hn(h))
            },
            We = c => {
                if (!Ft[c.input]) return v('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Tr(c.input),
                    w = Ft[c.input](h, c);
                q(h), setTimeout(() => {
                    wt(w)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const w = c.attributes[h].name;
                    ["type", "value", "style"].includes(w) || c.removeAttribute(w)
                }
            },
            qt = (c, h) => {
                const w = yt(be(), c);
                if (!!w) {
                    It(w);
                    for (const V in h) w.setAttribute(V, h[V])
                }
            },
            Hn = c => {
                const h = Tr(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Gn = (c, h, w) => {
                if (w.inputLabel) {
                    c.id = K.input;
                    const V = document.createElement("label"),
                        ge = K["input-label"];
                    V.setAttribute("for", c.id), V.className = ge, typeof w.customClass == "object" && Je(V, w.customClass.inputLabel), V.innerText = w.inputLabel, h.insertAdjacentElement("beforebegin", V)
                }
            },
            Tr = c => j(be(), K[c] || K.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            Ft = {};
        Ft.text = Ft.email = Ft.password = Ft.number = Ft.tel = Ft.url = (c, h) => (Xt(c, h.inputValue), Gn(c, c, h), Nn(c, h), c.type = h.input, c), Ft.file = (c, h) => (Gn(c, c, h), Nn(c, h), c), Ft.range = (c, h) => {
            const w = c.querySelector("input"),
                V = c.querySelector("output");
            return Xt(w, h.inputValue), w.type = h.input, Xt(V, h.inputValue), Gn(w, c, h), c
        }, Ft.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const w = document.createElement("option");
                nt(w, h.inputPlaceholder), w.value = "", w.disabled = !0, w.selected = !0, c.appendChild(w)
            }
            return Gn(c, c, h), c
        }, Ft.radio = c => (c.textContent = "", c), Ft.checkbox = (c, h) => {
            const w = yt(be(), "checkbox");
            w.value = "1", w.id = K.checkbox, w.checked = Boolean(h.inputValue);
            const V = c.querySelector("span");
            return nt(V, h.inputPlaceholder), w
        }, Ft.textarea = (c, h) => {
            Xt(c, h.inputValue), Nn(c, h), Gn(c, c, h);
            const w = V => parseInt(window.getComputedStyle(V).marginLeft) + parseInt(window.getComputedStyle(V).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const V = parseInt(window.getComputedStyle(be()).width),
                        ge = () => {
                            const Ue = c.offsetWidth + w(c);
                            Ue > V ? be().style.width = "".concat(Ue, "px") : be().style.width = null
                        };
                    new MutationObserver(ge).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Ui = (c, h) => {
                const w = _e();
                ct(w, h, "htmlContainer"), h.html ? (yi(h.html, w), q(w, "block")) : h.text ? (w.textContent = h.text, q(w, "block")) : M(w), Ce(c, h)
            },
            Co = (c, h) => {
                const w = k();
                fe(w, h.footer), h.footer && yi(h.footer, w), ct(w, h, "footer")
            },
            xo = (c, h) => {
                const w = L();
                nt(w, h.closeButtonHtml), ct(w, h, "closeButton"), fe(w, h.showCloseButton), w.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Ar = (c, h) => {
                const w = A.innerParams.get(c),
                    V = ye();
                if (w && h.icon === w.icon) {
                    ms(V, h), Or(V, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    M(V);
                    return
                }
                if (h.icon && Object.keys(Fe).indexOf(h.icon) === -1) {
                    v('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), M(V);
                    return
                }
                q(V), ms(V, h), Or(V, h), Je(V, h.showClass.icon)
            },
            Or = (c, h) => {
                for (const w in Fe) h.icon !== w && Lt(c, Fe[w]);
                Je(c, Fe[h.icon]), wn(c, h), Hi(), ct(c, h, "icon")
            },
            Hi = () => {
                const c = be(),
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
            Eo = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            ms = (c, h) => {
                let w = c.innerHTML,
                    V;
                h.iconHtml ? V = Rr(h.iconHtml) : h.icon === "success" ? (V = gs, w = w.replace(/ style=".*?"/g, "")) : h.icon === "error" ? V = Eo : V = Rr({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), w.trim() !== V.trim() && nt(c, V)
            },
            wn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const w of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) G(c, w, "backgroundColor", h.iconColor);
                    G(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Rr = c => '<div class="'.concat(K["icon-content"], '">').concat(c, "</div>"),
            Ci = (c, h) => {
                const w = ke();
                if (!h.imageUrl) return M(w);
                q(w, ""), w.setAttribute("src", h.imageUrl), w.setAttribute("alt", h.imageAlt), N(w, "width", h.imageWidth), N(w, "height", h.imageHeight), w.className = K.image, ct(w, h, "image")
            },
            _o = (c, h) => {
                const w = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return M(w);
                q(w), w.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((V, ge) => {
                    const Ue = So(V);
                    if (w.appendChild(Ue), ge === h.currentProgressStep && Je(Ue, K["active-progress-step"]), ge !== h.progressSteps.length - 1) {
                        const Ht = Wn(h);
                        w.appendChild(Ht)
                    }
                })
            },
            So = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step"]), nt(h, c), h
            },
            Wn = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step-line"]), c.progressStepsDistance && N(h, "width", c.progressStepsDistance), h
            },
            qn = (c, h) => {
                const w = ue();
                fe(w, h.title || h.titleText, "block"), h.title && yi(h.title, w), h.titleText && (w.innerText = h.titleText), ct(w, h, "title")
            },
            Ir = (c, h) => {
                const w = H(),
                    V = be();
                h.toast ? (N(w, "width", h.width), V.style.width = "100%", V.insertBefore(E(), ye())) : N(V, "width", h.width), N(V, "padding", h.padding), h.color && (V.style.color = h.color), h.background && (V.style.background = h.background), M(Ke()), ko(V, h)
            },
            ko = (c, h) => {
                c.className = "".concat(K.popup, " ").concat(pe(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], K["toast-shown"]), Je(c, K.toast)) : Je(c, K.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, K["icon-".concat(h.icon)])
            },
            Dr = (c, h) => {
                Ir(c, h), Ze(c, h), _o(c, h), Ar(c, h), Ci(c, h), qn(c, h), xo(c, h), Ui(c, h), bi(c, h), Co(c, h), typeof h.didRender == "function" && h.didRender(be())
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
                    h === H() || h.contains(H()) || (h.hasAttribute("aria-hidden") && h.setAttribute("data-previous-aria-hidden", h.getAttribute("aria-hidden")), h.setAttribute("aria-hidden", "true"))
                })
            },
            Mr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            Gi = ["swal-title", "swal-html", "swal-footer"],
            To = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const w = h.content;
                return Do(w), Object.assign(vs(w), Ao(w), Oo(w), Lr(w), Ro(w), Io(w, Gi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(V => {
                    Yn(V, ["name", "value"]);
                    const ge = V.getAttribute("name"),
                        Ue = V.getAttribute("value");
                    typeof re[ge] == "boolean" && Ue === "false" && (h[ge] = !1), typeof re[ge] == "object" && (h[ge] = JSON.parse(Ue))
                }), h
            },
            Ao = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(V => {
                    Yn(V, ["type", "color", "aria-label"]);
                    const ge = V.getAttribute("type");
                    h["".concat(ge, "ButtonText")] = V.innerHTML, h["show".concat(a(ge), "Button")] = !0, V.hasAttribute("color") && (h["".concat(ge, "ButtonColor")] = V.getAttribute("color")), V.hasAttribute("aria-label") && (h["".concat(ge, "ButtonAriaLabel")] = V.getAttribute("aria-label"))
                }), h
            },
            Oo = c => {
                const h = {},
                    w = c.querySelector("swal-image");
                return w && (Yn(w, ["src", "width", "height", "alt"]), w.hasAttribute("src") && (h.imageUrl = w.getAttribute("src")), w.hasAttribute("width") && (h.imageWidth = w.getAttribute("width")), w.hasAttribute("height") && (h.imageHeight = w.getAttribute("height")), w.hasAttribute("alt") && (h.imageAlt = w.getAttribute("alt"))), h
            },
            Lr = c => {
                const h = {},
                    w = c.querySelector("swal-icon");
                return w && (Yn(w, ["type", "color"]), w.hasAttribute("type") && (h.icon = w.getAttribute("type")), w.hasAttribute("color") && (h.iconColor = w.getAttribute("color")), h.iconHtml = w.innerHTML), h
            },
            Ro = c => {
                const h = {},
                    w = c.querySelector("swal-input");
                w && (Yn(w, ["type", "label", "placeholder", "value"]), h.input = w.getAttribute("type") || "text", w.hasAttribute("label") && (h.inputLabel = w.getAttribute("label")), w.hasAttribute("placeholder") && (h.inputPlaceholder = w.getAttribute("placeholder")), w.hasAttribute("value") && (h.inputValue = w.getAttribute("value")));
                const V = Array.from(c.querySelectorAll("swal-input-option"));
                return V.length && (h.inputOptions = {}, V.forEach(ge => {
                    Yn(ge, ["value"]);
                    const Ue = ge.getAttribute("value"),
                        Ht = ge.innerHTML;
                    h.inputOptions[Ue] = Ht
                })), h
            },
            Io = (c, h) => {
                const w = {};
                for (const V in h) {
                    const ge = h[V],
                        Ue = c.querySelector(ge);
                    Ue && (Yn(Ue, []), w[ge.replace(/^swal-/, "")] = Ue.innerHTML.trim())
                }
                return w
            },
            Do = c => {
                const h = Gi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(w => {
                    const V = w.tagName.toLowerCase();
                    h.indexOf(V) === -1 && f("Unrecognized element <".concat(V, ">"))
                })
            },
            Yn = (c, h) => {
                Array.from(c.attributes).forEach(w => {
                    h.indexOf(w.name) === -1 && f(['Unrecognized attribute "'.concat(w.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var ys = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Mo(c) {
            c.inputValidator || Object.keys(ys).forEach(h => {
                c.input === h && (c.inputValidator = ys[h])
            })
        }

        function Lo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function bs(c) {
            Mo(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Lo(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), vi(c)
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
                Me.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Me.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Me.previousBodyPadding + Fi(), "px"))
            },
            Nr = () => {
                Me.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Me.previousBodyPadding, "px"), Me.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, K.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, K.iosfix), Br(), xs()
                }
            },
            xs = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    w = !!c.match(/WebKit/i);
                h && w && !c.match(/CriOS/i) && be().scrollHeight > window.innerHeight - 44 && (H().style.paddingBottom = "".concat(44, "px"))
            },
            Br = () => {
                const c = H();
                let h;
                c.ontouchstart = w => {
                    h = Po(w)
                }, c.ontouchmove = w => {
                    h && (w.preventDefault(), w.stopPropagation())
                }
            },
            Po = c => {
                const h = c.target,
                    w = H();
                return No(c) || Bo(c) ? !1 : h === w || !Be(w) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Be(_e()) && _e().contains(h))
            },
            No = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            Bo = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (Ct(document.body, K.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Lt(document.body, K.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            Vr = 10,
            $r = c => {
                const h = H(),
                    w = be();
                typeof c.willOpen == "function" && c.willOpen(w);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(h, w, c), setTimeout(() => {
                    Vo(h, w)
                }, Vr), Se() && ($o(h, c.scrollbarPadding, ge), xi()), !he() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(w)), Lt(h, K["no-transition"])
            },
            Es = c => {
                const h = be();
                if (c.target !== h) return;
                const w = H();
                h.removeEventListener(mn, Es), w.style.overflowY = "auto"
            },
            Vo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, Es)) : c.style.overflowY = "auto"
            },
            $o = (c, h, w) => {
                Cs(), h && w !== "hidden" && ws(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, w) => {
                Je(c, w.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), q(h, "grid"), setTimeout(() => {
                    Je(h, w.showClass.popup), h.style.removeProperty("opacity")
                }, Vr), Je([document.documentElement, document.body], K.shown), w.heightAuto && w.backdrop && !w.toast && Je([document.documentElement, document.body], K["height-auto"])
            },
            s = c => {
                let h = be();
                h || new At, h = be();
                const w = E();
                he() ? M(ye()) : u(h, c), q(w), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const w = g(),
                    V = E();
                !h && pe(dt()) && (h = dt()), q(w), h && (M(h), V.setAttribute("data-button-to-replace", h.className)), V.parentNode.insertBefore(V, h), Je([c, w], K.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? U(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && ($(h.inputValue) || ie(h.inputValue)) && (s(dt()), Z(c, h))
            },
            b = (c, h) => {
                const w = c.getInput();
                if (!w) return null;
                switch (h.input) {
                    case "checkbox":
                        return x(w);
                    case "radio":
                        return T(w);
                    case "file":
                        return z(w);
                    default:
                        return h.inputAutoTrim ? w.value.trim() : w.value
                }
            },
            x = c => c.checked ? 1 : 0,
            T = c => c.checked ? c.value : null,
            z = c => c.files.length ? c.getAttribute("multiple") !== null ? c.files : c.files[0] : null,
            U = (c, h) => {
                const w = be(),
                    V = ge => le[h.input](w, we(ge), h);
                $(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), J(h.inputOptions).then(ge => {
                    c.hideLoading(), V(ge)
                })) : typeof h.inputOptions == "object" ? V(h.inputOptions) : v("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const w = c.getInput();
                M(w), J(h.inputValue).then(V => {
                    w.value = h.input === "number" ? parseFloat(V) || 0 : "".concat(V), q(w), w.focus(), c.hideLoading()
                }).catch(V => {
                    v("Error in inputValue promise: ".concat(V)), w.value = "", q(w), w.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, w) => {
                    const V = j(c, K.select),
                        ge = (Ue, Ht, Bn) => {
                            const pn = document.createElement("option");
                            pn.value = Bn, nt(pn, Ht), pn.selected = ne(Bn, w.inputValue), Ue.appendChild(pn)
                        };
                    h.forEach(Ue => {
                        const Ht = Ue[0],
                            Bn = Ue[1];
                        if (Array.isArray(Bn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ht, pn.disabled = !1, V.appendChild(pn), Bn.forEach(tr => ge(pn, tr[1], tr[0]))
                        } else ge(V, Bn, Ht)
                    }), V.focus()
                },
                radio: (c, h, w) => {
                    const V = j(c, K.radio);
                    h.forEach(Ue => {
                        const Ht = Ue[0],
                            Bn = Ue[1],
                            pn = document.createElement("input"),
                            tr = document.createElement("label");
                        pn.type = "radio", pn.name = K.radio, pn.value = Ht, ne(Ht, w.inputValue) && (pn.checked = !0);
                        const Jo = document.createElement("span");
                        nt(Jo, Bn), Jo.className = K.label, tr.appendChild(pn), tr.appendChild(Jo), V.appendChild(tr)
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
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            M(h.loader), he() ? c.icon && q(ye()) : Ge(h), Lt([h.popup, h.actions], K.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ge = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? q(h[0], "inline-block") : Ne() && M(c.actions)
        };

        function rt(c) {
            const h = A.innerParams.get(c || this),
                w = A.domCache.get(c || this);
            return w ? yt(w.popup, h.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => pe(be()),
            Nt = () => dt() && dt().click(),
            un = () => Vt() && Vt().click(),
            _t = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, w, V) => {
                et(h), w.toast || (h.keydownHandler = ge => Wi(c, ge, V), h.keydownTarget = w.keydownListenerCapture ? window : be(), h.keydownListenerCapture = w.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, w) => {
                const V = te();
                if (V.length) return h = h + w, h === V.length ? h = 0 : h === -1 && (h = V.length - 1), V[h].focus();
                be().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            _i = ["ArrowLeft", "ArrowUp"],
            Wi = (c, h, w) => {
                const V = A.innerParams.get(c);
                !V || h.isComposing || h.keyCode === 229 || (V.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, V) : h.key === "Tab" ? Kn(h, V) : [...Dt, ..._i].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, V, w))
            },
            hn = (c, h, w) => {
                if (!!D(w.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(w.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const w = c.target,
                    V = te();
                let ge = -1;
                for (let Ue = 0; Ue < V.length; Ue++)
                    if (w === V[Ue]) {
                        ge = Ue;
                        break
                    } c.shiftKey ? ft(h, ge, -1) : ft(h, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    w = Vt(),
                    V = l();
                if (document.activeElement instanceof HTMLElement && ![h, w, V].includes(document.activeElement)) return;
                const ge = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Ue = document.activeElement;
                for (let Ht = 0; Ht < g().children.length; Ht++) {
                    if (Ue = Ue[ge], !Ue) return;
                    if (Ue instanceof HTMLButtonElement && pe(Ue)) break
                }
                Ue instanceof HTMLButtonElement && Ue.focus()
            },
            an = (c, h, w) => {
                D(h.allowEscapeKey) && (c.preventDefault(), w(Xn.esc))
            };

        function Mn(c, h, w, V) {
            he() ? ks(c, V) : (gi(w).then(() => ks(c, V)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), Se() && (Nr(), Ei(), Mr()), vn()
        }

        function vn() {
            Lt([document.documentElement, document.body], [K.shown, K["height-auto"], K["no-backdrop"], K["toast-shown"]])
        }

        function Cn(c) {
            c = Zn(c);
            const h = je.swalPromiseResolve.get(this),
                w = Qn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : w && h(c)
        }

        function _s() {
            return !!A.awaitingPromise.get(this)
        }
        const Qn = c => {
            const h = be();
            if (!h) return !1;
            const w = A.innerParams.get(c);
            if (!w || Ct(h, w.hideClass.popup)) return !1;
            Lt(h, w.showClass.popup), Je(h, w.hideClass.popup);
            const V = H();
            return Lt(V, w.showClass.backdrop), Je(V, w.hideClass.backdrop), Ss(c, h, w), !0
        };

        function jr(c) {
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
            Ss = (c, h, w) => {
                const V = H(),
                    ge = mn && pt(h);
                typeof w.willClose == "function" && w.willClose(h), ge ? Fr(c, h, V, w.returnFocus, w.didClose) : Mn(c, V, w.returnFocus, w.didClose)
            },
            Fr = (c, h, w, V, ge) => {
                it.swalCloseEventFinishedCallback = Mn.bind(null, c, w, V, ge), h.addEventListener(mn, function(Ue) {
                    Ue.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            ks = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Si(c, h, w) {
            const V = A.domCache.get(c);
            h.forEach(ge => {
                V[ge].disabled = w
            })
        }

        function Ts(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const V = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < V.length; ge++) V[ge].disabled = h
            } else c.disabled = h
        }

        function As() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function jo() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function Fo() {
            return Ts(this.getInput(), !1)
        }

        function zo() {
            return Ts(this.getInput(), !0)
        }

        function qi(c) {
            const h = A.domCache.get(this),
                w = A.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = K["validation-message"], w.customClass && w.customClass.validationMessage && Je(h.validationMessage, w.customClass.validationMessage), q(h.validationMessage);
            const V = this.getInput();
            V && (V.setAttribute("aria-invalid", !0), V.setAttribute("aria-describedby", K["validation-message"]), wt(V), Je(V, K.inputerror))
        }

        function Uo() {
            const c = A.domCache.get(this);
            c.validationMessage && M(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Lt(h, K.inputerror))
        }

        function Ho() {
            return A.domCache.get(this).progressSteps
        }

        function Go(c) {
            const h = be(),
                w = A.innerParams.get(this);
            if (!h || Ct(h, w.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const V = ki(c),
                ge = Object.assign({}, w, V);
            Dr(this, ge), A.innerParams.set(this, ge), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, c),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const ki = c => {
            const h = {};
            return Object.keys(c).forEach(w => {
                se(w) ? h[w] = c[w] : f("Invalid parameter to update: ".concat(w))
            }), h
        };

        function Wo() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && it.swalCloseEventFinishedCallback && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), zr(this)
        }
        const zr = c => {
                Tn(c), delete c.params, delete it.keydownHandler, delete it.keydownTarget, delete it.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(A, c), A.awaitingPromise.set(c, !0)) : (xn(je, c), xn(A, c))
            },
            xn = (c, h) => {
                for (const w in c) c[w].delete(h)
            };
        var Ur = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: rt,
            close: Cn,
            isAwaitingPromise: _s,
            rejectPromise: jr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: As,
            disableButtons: jo,
            enableInput: Fo,
            disableInput: zo,
            showValidationMessage: qi,
            resetValidationMessage: Uo,
            getProgressSteps: Ho,
            update: Go,
            _destroy: Wo
        });
        const Os = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Ki(c, !0)
            },
            Rs = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            qo = (c, h) => {
                c.disableButtons(), h(Xn.cancel)
            },
            St = (c, h) => {
                const w = A.innerParams.get(c);
                if (!w.input) {
                    v('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const V = b(c, w);
                w.inputValidator ? Xi(c, V, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, V) : Ki(c, V) : (c.enableButtons(), c.showValidationMessage(w.validationMessage))
            },
            Xi = (c, h, w) => {
                const V = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(V.inputValidator(h, V.validationMessage))).then(Ue => {
                    c.enableButtons(), c.enableInput(), Ue ? c.showValidationMessage(Ue) : w === "deny" ? dn(c, h) : Ki(c, h)
                })
            },
            dn = (c, h) => {
                const w = A.innerParams.get(c || void 0);
                w.showLoaderOnDeny && s(Vt()), w.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(w.preDeny(h, w.validationMessage))).then(ge => {
                    ge === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? h : ge
                    })
                }).catch(ge => Yi(c || void 0, ge))) : c.close({
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
            Yi = (c, h) => {
                c.rejectPromise(h)
            },
            Ki = (c, h) => {
                const w = A.innerParams.get(c || void 0);
                w.showLoaderOnConfirm && s(), w.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(w.preConfirm(h, w.validationMessage))).then(ge => {
                    pe(Ke()) || ge === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof ge > "u" ? h : ge)
                }).catch(ge => Yi(c || void 0, ge))) : yn(c, h)
            },
            Xo = (c, h, w) => {
                A.innerParams.get(c).toast ? Yo(c, h, w) : (Hr(h), Ds(h), Ji(c, h, w))
            },
            Yo = (c, h, w) => {
                h.popup.onclick = () => {
                    const V = A.innerParams.get(c);
                    V && (Is(V) || V.timer || V.input) || w(Xn.close)
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
            Ji = (c, h, w) => {
                h.container.onclick = V => {
                    const ge = A.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    V.target === h.container && D(ge.allowOutsideClick) && w(Xn.backdrop)
                }
            },
            Qi = c => typeof c == "object" && c.jquery,
            Zi = c => c instanceof Element || Qi(c),
            Ko = c => {
                const h = {};
                return typeof c[0] == "object" && !Zi(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((w, V) => {
                    const ge = c[V];
                    typeof ge == "string" || Zi(ge) ? h[w] = ge : ge !== void 0 && v("Unexpected type of ".concat(w, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), h
            };

        function er() {
            const c = this;
            for (var h = arguments.length, w = new Array(h), V = 0; V < h; V++) w[V] = arguments[V];
            return new c(...w)
        }

        function Gr(c) {
            class h extends this {
                _main(V, ge) {
                    return super._main(V, Object.assign({}, c, ge))
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
                    return jt(c), c
                }
            },
            F = () => {
                const c = it.timeout;
                return c && (c.running ? Ms() : I())
            },
            X = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return jt(h, !0), h
                }
            },
            de = () => it.timeout && it.timeout.isRunning();
        let ee = !1;
        const me = {};

        function xe() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            me[c] = this, ee || (document.body.addEventListener("click", Re), ee = !0)
        }
        const Re = c => {
            for (let h = c.target; h && h !== document; h = h.parentNode)
                for (const w in me) {
                    const V = h.getAttribute(w);
                    if (V) {
                        me[w].fire({
                            template: V
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
            getPopup: be,
            getTitle: ue,
            getHtmlContainer: _e,
            getImage: ke,
            getIcon: ye,
            getInputLabel: Gt,
            getCloseButton: L,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Vt,
            getCancelButton: l,
            getLoader: E,
            getFooter: k,
            getTimerProgressBar: R,
            getFocusableElements: te,
            getValidationMessage: Ke,
            isLoading: De,
            fire: er,
            mixin: Gr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Wr,
            stopTimer: Ms,
            resumeTimer: I,
            toggleTimer: F,
            increaseTimer: X,
            isTimerRunning: de,
            bindClickHandler: xe
        });
        let ze;
        class He {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
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
                const Ue = ze._main(ze.params);
                A.promise.set(this, Ue)
            }
            _main(h) {
                let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, w, h)), it.currentInstance && (it.currentInstance._destroy(), Se() && Mr()), it.currentInstance = ze;
                const V = ht(h, w);
                bs(V), Object.freeze(V), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const ge = Tt(ze);
                return Dr(ze, V), A.innerParams.set(ze, V), Xe(ze, ge, V)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, w) => new Promise((V, ge) => {
                const Ue = Ht => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ht
                    })
                };
                je.swalPromiseResolve.set(c, V), je.swalPromiseReject.set(c, ge), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => qo(c, Ue), h.closeButton.onclick = () => Ue(Xn.close), Xo(c, h, Ue), on(c, it, w, Ue), p(c, w), $r(w), qe(it, w, Ue), Ut(h, w), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const w = To(c),
                    V = Object.assign({}, re, h, w, c);
                return V.showClass = Object.assign({}, re.showClass, V.showClass), V.hideClass = Object.assign({}, re.hideClass, V.hideClass), V
            },
            Tt = c => {
                const h = {
                    popup: be(),
                    container: H(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Vt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: L(),
                    validationMessage: Ke(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            qe = (c, h, w) => {
                const V = R();
                M(V), h.timer && (c.timeout = new Pr(() => {
                    w("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (q(V), ct(V, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && jt(h.timer)
                })))
            },
            Ut = (c, h) => {
                if (!h.toast) {
                    if (!D(h.allowEnterKey)) return fn();
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
            const w = document.createElement("button");
            w.innerHTML = "&times;", w.onclick = () => c.remove(), c.appendChild(w), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(c)
                }, 1e3)
            })
        }
        Object.assign(He.prototype, Ur), Object.assign(He, Le), Object.keys(Ur).forEach(c => {
            He[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), He.DismissReason = Xn, He.version = "11.4.26";
        const At = He;
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
})(ih);
const Rn = ih.exports;
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
        const n = new URL("main/pp2/bombintern/assets/8cdd50e7.png", self.location).href,
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
const kC = `<div class="canvasContainer">\r
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
    TC = {
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
                a = Mi().height,
                f = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * f, this.finalHeight = n * f, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (console.log("render"), !this.video) return;
            const t = yo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Mi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Mi().width, Mi().height))
        }
    },
    AC = Et.View.extend({
        template: at.template(kC),
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
            bC("cameraCanvas"), t.sprites = [], t.gameLoop = xC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = ul(TC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                i = Ae(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(Ae(window).innerHeight(), 250),
                v = Math.min(a / t, f / e),
                _ = t * v,
                S = e * v;
            n.style.width = `${_}px`, n.style.height = `${S}px`, n.width = _, n.height = S
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
    OC = si.extend({
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
    RC = Et.View.extend({
        template: at.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new OC,
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
            this.cameraView = this.cameraView || new AC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    IC = '<a class="change-color button-color btn"></a>',
    DC = Et.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: at.template(IC),
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
    MC = Et.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: DC,
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
    LC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp2/bombintern/assets/5f12600b.png"/></svg>\r
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
    PC = Et.View.extend({
        tagName: "div",
        className: "picker",
        template: at.template(LC),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new MC({
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
class rh {
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
            _ = this.smoothedMouseY - this.lastSmoothedMouse.y,
            S = Math.sqrt(v * v + _ * _);
        let O;
        S !== 0 ? O = Math.PI / 2 + Math.atan2(_, v) : O = 0;
        const D = this.options.minThickness * e + this.options.thicknessFactor * S,
            $ = this.lastThickness + this.options.thicknessSmoothingFactor * (D - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = O);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(O),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(O),
            Y = Math.sin(O),
            re = Math.cos(O),
            m = this.lastThickness * J,
            P = this.lastThickness * ie,
            W = $ * Y,
            ae = $ * re,
            se = .33 * S * J,
            ve = -.33 * S * ie,
            d = this.lastSmoothedMouse.x + P + se,
            Ee = this.lastSmoothedMouse.y + m + ve,
            Oe = this.lastSmoothedMouse.x - P + se,
            Pe = this.lastSmoothedMouse.y - m + ve;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + m), this.canvasCTX.quadraticCurveTo(d, Ee, this.smoothedMouseX + ae, this.smoothedMouseY + W), this.canvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - m), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * $;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + ae, this.smoothedMouseY + W), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * ae, i + this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * ae, i - this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(this.smoothedMouseX - ae, this.smoothedMouseY - W), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = O, this.lastThickness = $, this.lastMouseChangeVector = {
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
const uc = {
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
        st(this, "canvasSelector");
        st(this, "canvas");
        st(this, "ctx");
        st(this, "options");
        st(this, "history");
        st(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = Ae(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(uc, n), this.history = [], this.layerNames.forEach(i => {
            const a = new rh(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
        const n = Object.assign(uc.sketchOptions, e);
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
    VC = Et.View.extend({
        className: "Sketchpad canvasContainer",
        template: at.template(BC),
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
                i = Ae(n)[0].width / Ae(n).width(),
                a = n.getBoundingClientRect(),
                f = this.model.get("size"),
                v = this.sketchpad.options.thickness;
            let _ = (e.clientX - a.left) * i;
            _ = Math.min(f.width - v, Math.max(v, _));
            let S = (e.clientY - a.top) * i;
            return S = Math.min(f.height - v, Math.max(v, S)), {
                x: _,
                y: S
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
    $C = `<div class="controller-content">\r
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
    jC = si.extend({
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
    FC = Et.View.extend({
        className: "Draw",
        template: at.template($C),
        model: new jC,
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
                    return t ? t.html ? t.html : Ae("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new Bi({}), this.toolbarComponent = this.toolbarComponent || new PC({
                model: new ot.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new VC({
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
            const t = Ae("#sketchpad"),
                e = Ae("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(Ae(".controller-content").css("border-top-width"), 10) * 2 + Ae(".playerTopBar").innerHeight() + Ae("#prompt").innerHeight() + Ae("#toolbar").innerHeight() + parseInt(Ae(".canvasContainer").css("border-top-width"), 10) * 2 + Ae("#buttons").innerHeight() + Ae("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(Ae(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(Ae(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(Ae(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                v = 2,
                _ = Math.min(t.width() - i, a * v),
                S = Math.max(Ae("#controller-container").innerHeight() - n, 250),
                O = Math.min(_ / a, S / f),
                D = a * O,
                $ = f * O;
            e.style.width = `${D}px`, e.style.height = `${$}px`, window.scrollTo(0, 0)
        }
    }),
    zC = `<div>
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
    UC = si.extend({
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
    HC = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: at.template(zC),
        model: new UC,
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
                    return t ? t.html ? t.html : Ae("<div />").text(t.text).html() : ""
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
            }), this.inputComponent = this.inputComponent || new no({
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
        const a = new rh(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
const GC = Et.View.extend({
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
            this.update().catch(this.caughtError), Ae(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
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
            Pi.setAsViewed(0)
        },
        showScreen(t, e) {
            const n = Ae(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (Ae(this.activeScreen).fadeOut("fast", () => {}), Ae(this.activeScreen).show(), Ae(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
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
            const t = Ae("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? Ae("#slide-in-banner").outerHeight(!0) : 0,
                n = Ae(window).width(),
                i = Ae(window).height() - t;
            Ae(`.${this.getOption("appTag")}-page`).css("height", i - e), Ae(`.${this.getOption("appTag")}-page`).attr("height", i - e), Ae(`.${this.getOption("appTag")}-page`).css("top", t), Ae(`.${this.getOption("appTag")}-page`).css("width", n), Ae(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    WC = `<div id="controller" class="state-controller controller-content">
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
    qC = si.extend({
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
    XC = Et.View.extend({
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
    YC = Et.View.extend({
        className: "Lobby scrollable",
        template: at.template(WC),
        model: new qC,
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
                childView: XC,
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
            const i = Ae(t.currentTarget).data("action");
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
                    })))), a.render(), Ae(".lobbyUgcInput").mask("aaa-aaaa", {
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
    KC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visita la galería" class="artifactLink" target="_blank">
        <button id="artifactButton" class="artifactButton"></button>
    </a>
</div>
`,
    JC = si.extend({
        defaults: {
            message: {
                text: null
            },
            classes: [],
            artifact: null
        }
    }),
    QC = Et.View.extend({
        className: "Logo",
        template: at.template(KC),
        model: new JC,
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : Ae("<div />").text(t.text).html()
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
    $s = {
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
    ZC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    ex = Et.View.extend({
        className: "playerTopBarView",
        template: at.template(ZC),
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
    tx = `<div id="controller" class="state-controller controller-content">
    <div id="prompt" class="prompt text"></div>
    <div class="error text-danger"></div>
    <div id="choicesRegion"></div>
    <div id="chosen" class="chosen text"></div>
    <div class="makeSingleChoiceDone">
        <span class="doneText"></span>
    </div>
</div>`,
    nx = si.extend({
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
    ix = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(tx),
        model: new nx,
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
                    return t ? t.html ? t.html : Ae("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : Ae("<div />").text(t.text).html() : null
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
function hc(t, e) {
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
        e % 2 ? hc(Object(n), !0).forEach(function(i) {
            rx(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hc(Object(n)).forEach(function(i) {
            Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(n, i))
        })
    }
    return t
}

function Ws(t) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ws = function(e) {
        return typeof e
    } : Ws = function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Ws(t)
}

function rx(t, e, n) {
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

function sx(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        a, f;
    for (f = 0; f < i.length; f++) a = i[f], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function ox(t, e) {
    if (t == null) return {};
    var n = sx(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(t);
        for (a = 0; a < f.length; a++) i = f[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var ax = "1.15.0";

function ii(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    fs = ii(/Edge/i),
    dc = ii(/firefox/i),
    rs = ii(/safari/i) && !ii(/chrome/i) && !ii(/android/i),
    sh = ii(/iP(ad|od|hone)/i),
    oh = ii(/chrome/i) && ii(/android/i),
    ah = {
        capture: !1,
        passive: !1
    };

function xt(t, e, n) {
    t.addEventListener(e, n, !oi && ah)
}

function bt(t, e, n) {
    t.removeEventListener(e, n, !oi && ah)
}

function io(t, e) {
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

function lx(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function $n(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && io(t, e) : io(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = lx(t))
    }
    return null
}
var fc = /\s+/g;

function En(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(fc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(fc, " ")
        }
}

function tt(t, e, n) {
    var i = t && t.style;
    if (i) {
        if (n === void 0) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
        !(e in i) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), i[e] = n + (typeof n == "string" ? "" : "px")
    }
}

function fr(t, e) {
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

function lh(t, e, n) {
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
        var f, v, _, S, O, D, $;
        if (t !== window && t.parentNode && t !== Fn() ? (f = t.getBoundingClientRect(), v = f.top, _ = f.left, S = f.bottom, O = f.right, D = f.height, $ = f.width) : (v = 0, _ = 0, S = window.innerHeight, O = window.innerWidth, D = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !oi))
            do
                if (a && a.getBoundingClientRect && (tt(a, "transform") !== "none" || n && tt(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    v -= J.top + parseInt(tt(a, "border-top-width")), _ -= J.left + parseInt(tt(a, "border-left-width")), S = v + f.height, O = _ + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = fr(a || t),
                Y = ie && ie.a,
                re = ie && ie.d;
            ie && (v /= re, _ /= Y, $ /= Y, D /= re, S = v + D, O = _ + $)
        }
        return {
            top: v,
            left: _,
            bottom: S,
            right: O,
            width: $,
            height: D
        }
    }
}

function pc(t, e, n) {
    for (var i = di(t, !0), a = Yt(t)[e]; i;) {
        var f = Yt(i)[n],
            v = void 0;
        if (n === "top" || n === "left" ? v = a >= f : v = a <= f, !v) return i;
        if (i === Fn()) break;
        i = di(i, !1)
    }
    return !1
}

function vr(t, e, n, i) {
    for (var a = 0, f = 0, v = t.children; f < v.length;) {
        if (v[f].style.display !== "none" && v[f] !== Qe.ghost && (i || v[f] !== Qe.dragged) && $n(v[f], n.draggable, t, !1)) {
            if (a === e) return v[f];
            a++
        }
        f++
    }
    return null
}

function hl(t, e) {
    for (var n = t.lastElementChild; n && (n === Qe.ghost || tt(n, "display") === "none" || e && !io(n, e));) n = n.previousElementSibling;
    return n || null
}

function On(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; t = t.previousElementSibling;) t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Qe.clone && (!e || io(t, e)) && n++;
    return n
}

function gc(t) {
    var e = 0,
        n = 0,
        i = Fn();
    if (t)
        do {
            var a = fr(t),
                f = a.a,
                v = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * v
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function cx(t, e) {
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

function ux(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function fa(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var ss;

function ch(t, e) {
    return function() {
        if (!ss) {
            var n = arguments,
                i = this;
            n.length === 1 ? t.call(i, n[0]) : t.apply(i, n), ss = setTimeout(function() {
                ss = void 0
            }, e)
        }
    }
}

function hx() {
    clearTimeout(ss), ss = void 0
}

function uh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function hh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var Sn = "Sortable" + new Date().getTime();

function dx() {
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
                            var v = fr(a, !0);
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
            t.splice(cx(t, {
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
            t.forEach(function(_) {
                var S = 0,
                    O = _.target,
                    D = O.fromRect,
                    $ = Yt(O),
                    J = O.prevFromRect,
                    ie = O.prevToRect,
                    Y = _.rect,
                    re = fr(O, !0);
                re && ($.top -= re.f, $.left -= re.e), O.toRect = $, O.thisAnimationDuration && fa(J, $) && !fa(D, $) && (Y.top - $.top) / (Y.left - $.left) === (D.top - $.top) / (D.left - $.left) && (S = px(Y, J, ie, a.options)), fa($, D) || (O.prevFromRect = D, O.prevToRect = $, S || (S = a.options.animation), a.animate(O, Y, $, S)), S && (f = !0, v = Math.max(v, S), clearTimeout(O.animationResetTimer), O.animationResetTimer = setTimeout(function() {
                    O.animationTime = 0, O.prevFromRect = null, O.fromRect = null, O.prevToRect = null, O.thisAnimationDuration = null
                }, S), O.thisAnimationDuration = S)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, v) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, v) {
            if (v) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var _ = fr(this.el),
                    S = _ && _.a,
                    O = _ && _.d,
                    D = (a.left - f.left) / (S || 1),
                    $ = (a.top - f.top) / (O || 1);
                i.animatingX = !!D, i.animatingY = !!$, tt(i, "transform", "translate3d(" + D + "px," + $ + "px,0)"), this.forRepaintDummy = fx(i), tt(i, "transition", "transform " + v + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, v)
            }
        }
    }
}

function fx(t) {
    return t.offsetWidth
}

function px(t, e, n, i) {
    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * i.animation
}
var ir = [],
    pa = {
        initializeByDefault: !0
    },
    ps = {
        mount: function(e) {
            for (var n in pa) pa.hasOwnProperty(n) && !(n in e) && (e[n] = pa[n]);
            ir.forEach(function(i) {
                if (i.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
            }), ir.push(e)
        },
        pluginEvent: function(e, n, i) {
            var a = this;
            this.eventCanceled = !1, i.cancel = function() {
                a.eventCanceled = !0
            };
            var f = e + "Global";
            ir.forEach(function(v) {
                !n[v.pluginName] || (n[v.pluginName][f] && n[v.pluginName][f](zn({
                    sortable: n
                }, i)), n.options[v.pluginName] && n[v.pluginName][e] && n[v.pluginName][e](zn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            ir.forEach(function(_) {
                var S = _.pluginName;
                if (!(!e.options[S] && !_.initializeByDefault)) {
                    var O = new _(e, n, e.options);
                    O.sortable = e, O.options = e.options, e[S] = O, ri(i, O.defaults)
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
            return ir.forEach(function(a) {
                typeof a.eventProperties == "function" && ri(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return ir.forEach(function(f) {
                !e[f.pluginName] || f.optionListeners && typeof f.optionListeners[n] == "function" && (a = f.optionListeners[n].call(e[f.pluginName], i))
            }), a
        }
    };

function gx(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        f = t.cloneEl,
        v = t.toEl,
        _ = t.fromEl,
        S = t.oldIndex,
        O = t.newIndex,
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
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = v || n, re.from = _ || n, re.item = a || n, re.clone = f, re.oldIndex = S, re.newIndex = O, re.oldDraggableIndex = D, re.newDraggableIndex = $, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var W = zn(zn({}, Y), ps.getEventProperties(i, e));
        for (var ae in W) re[ae] = W[ae];
        n && n.dispatchEvent(re), m[P] && m[P].call(e, re)
    }
}
var mx = ["evt"],
    bn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = ox(i, mx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Ii,
            lastDownEl: qs,
            cloneEl: Bt,
            cloneHidden: ui,
            dragStarted: Jr,
            putSortable: tn,
            activeSortable: Qe.active,
            originalEvent: a,
            oldIndex: lr,
            oldDraggableIndex: os,
            newIndex: _n,
            newDraggableIndex: ci,
            hideGhostForTarget: gh,
            unhideGhostForTarget: mh,
            cloneNowHidden: function() {
                ui = !0
            },
            cloneNowShown: function() {
                ui = !1
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
    gx(zn({
        putSortable: tn,
        cloneEl: Bt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: lr,
        oldDraggableIndex: os,
        newIndex: _n,
        newDraggableIndex: ci
    }, t))
}
var Ie, $t, ut, Pt, Ii, qs, Bt, ui, lr, _n, os, ci, js, tn, ar = !1,
    ro = !1,
    so = [],
    Ai, Ln, ga, ma, mc, vc, Jr, rr, as, ls = !1,
    Fs = !1,
    Xs, ln, va = [],
    La = !1,
    oo = [],
    wo = typeof document < "u",
    zs = sh,
    yc = fs || oi ? "cssFloat" : "float",
    vx = wo && !oh && !sh && "draggable" in document.createElement("div"),
    dh = function() {
        if (!!wo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    fh = function(e, n) {
        var i = tt(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = vr(e, 0, n),
            v = vr(e, 1, n),
            _ = f && tt(f),
            S = v && tt(v),
            O = _ && parseInt(_.marginLeft) + parseInt(_.marginRight) + Yt(f).width,
            D = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Yt(v).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && _.float && _.float !== "none") {
            var $ = _.float === "left" ? "left" : "right";
            return v && (S.clear === "both" || S.clear === $) ? "vertical" : "horizontal"
        }
        return f && (_.display === "block" || _.display === "flex" || _.display === "table" || _.display === "grid" || O >= a && i[yc] === "none" || v && i[yc] === "none" && O + D > a) ? "vertical" : "horizontal"
    },
    yx = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            v = i ? e.width : e.height,
            _ = i ? n.left : n.top,
            S = i ? n.right : n.bottom,
            O = i ? n.width : n.height;
        return a === _ || f === S || a + v / 2 === _ + O / 2
    },
    bx = function(e, n) {
        var i;
        return so.some(function(a) {
            var f = a[Sn].options.emptyInsertThreshold;
            if (!(!f || hl(a))) {
                var v = Yt(a),
                    _ = e >= v.left - f && e <= v.right + f,
                    S = n >= v.top - f && n <= v.bottom + f;
                if (_ && S) return i = a
            }
        }), i
    },
    ph = function(e) {
        function n(f, v) {
            return function(_, S, O, D) {
                var $ = _.options.group.name && S.options.group.name && _.options.group.name === S.options.group.name;
                if (f == null && (v || $)) return !0;
                if (f == null || f === !1) return !1;
                if (v && f === "clone") return f;
                if (typeof f == "function") return n(f(_, S, O, D), v)(_, S, O, D);
                var J = (v ? _ : S).options.group.name;
                return f === !0 || typeof f == "string" && f === J || f.join && f.indexOf(J) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Ws(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    gh = function() {
        !dh && ut && tt(ut, "display", "none")
    },
    mh = function() {
        !dh && ut && tt(ut, "display", "")
    };
wo && !oh && document.addEventListener("click", function(t) {
    if (ro) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ro = !1, !1
}, !0);
var Oi = function(e) {
        if (Ie) {
            e = e.touches ? e.touches[0] : e;
            var n = bx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Sn]._onDragOver(i)
            }
        }
    },
    wx = function(e) {
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
            return fh(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(v, _) {
            v.setData("Text", _.textContent)
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
        supportPointer: Qe.supportPointer !== !1 && "PointerEvent" in window && !rs,
        emptyInsertThreshold: 5
    };
    ps.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    ph(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : vx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), so.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ri(this, dx())
}
Qe.prototype = {
    constructor: Qe,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (rr = null)
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
                _ = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                S = (_ || e).target,
                O = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || S,
                D = a.filter;
            if (Ax(i), !Ie && !(/mousedown|pointerdown/.test(v) && e.button !== 0 || a.disabled) && !O.isContentEditable && !(!this.nativeDraggable && rs && S && S.tagName.toUpperCase() === "SELECT") && (S = $n(S, a.draggable, i, !1), !(S && S.animated) && qs !== S)) {
                if (lr = On(S), os = On(S, a.draggable), typeof D == "function") {
                    if (D.call(this, e, S, this)) {
                        gn({
                            sortable: n,
                            rootEl: O,
                            name: "filter",
                            targetEl: S,
                            toEl: i,
                            fromEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), f && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (D && (D = D.split(",").some(function($) {
                        if ($ = $n(O, $.trim(), i, !1), $) return gn({
                            sortable: n,
                            rootEl: $,
                            name: "filter",
                            targetEl: S,
                            fromEl: i,
                            toEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), !0
                    }), D)) {
                    f && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !$n(O, a.handle, i, !1) || this._prepareDragStart(e, _, S)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            f = a.el,
            v = a.options,
            _ = f.ownerDocument,
            S;
        if (i && !Ie && i.parentNode === f) {
            var O = Yt(i);
            if (Pt = f, Ie = i, $t = Ie.parentNode, Ii = Ie.nextSibling, qs = i, js = v.group, Qe.dragged = Ie, Ai = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, mc = Ai.clientX - O.left, vc = Ai.clientY - O.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", S = function() {
                    if (bn("delayEnded", a, {
                            evt: e
                        }), Qe.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !dc && a.nativeDraggable && (Ie.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, v.chosenClass, !0)
                }, v.ignore.split(",").forEach(function(D) {
                    lh(Ie, D.trim(), ya)
                }), xt(_, "dragover", Oi), xt(_, "mousemove", Oi), xt(_, "touchmove", Oi), xt(_, "mouseup", a._onDrop), xt(_, "touchend", a._onDrop), xt(_, "touchcancel", a._onDrop), dc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), bn("delayStart", this, {
                    evt: e
                }), v.delay && (!v.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(_, "mouseup", a._disableDelayedDrag), xt(_, "touchend", a._disableDelayedDrag), xt(_, "touchcancel", a._disableDelayedDrag), xt(_, "mousemove", a._delayedDragTouchMoveHandler), xt(_, "touchmove", a._delayedDragTouchMoveHandler), v.supportPointer && xt(_, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(S, v.delay)
            } else S()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Ie && ya(Ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._disableDelayedDrag), bt(e, "touchend", this._disableDelayedDrag), bt(e, "touchcancel", this._disableDelayedDrag), bt(e, "mousemove", this._delayedDragTouchMoveHandler), bt(e, "touchmove", this._delayedDragTouchMoveHandler), bt(e, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(e, n) {
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? xt(document, "pointermove", this._onTouchMove) : n ? xt(document, "touchmove", this._onTouchMove) : xt(document, "mousemove", this._onTouchMove) : (xt(Ie, "dragend", this), xt(Pt, "dragstart", this._onDragStart));
        try {
            document.selection ? Ys(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (ar = !1, Pt && Ie) {
            bn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && xt(document, "dragover", wx);
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
            this._lastX = Ln.clientX, this._lastY = Ln.clientY, gh();
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
            mh()
        }
    },
    _onTouchMove: function(e) {
        if (Ai) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                v = ut && fr(ut, !0),
                _ = ut && v && v.a,
                S = ut && v && v.d,
                O = zs && ln && gc(ln),
                D = (f.clientX - Ai.clientX + a.x) / (_ || 1) + (O ? O[0] - va[0] : 0) / (_ || 1),
                $ = (f.clientY - Ai.clientY + a.y) / (S || 1) + (O ? O[1] - va[1] : 0) / (S || 1);
            if (!Qe.active && !ar) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                v ? (v.e += D - (ga || 0), v.f += $ - (ma || 0)) : v = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: $
                };
                var J = "matrix(".concat(v.a, ",").concat(v.b, ",").concat(v.c, ",").concat(v.d, ",").concat(v.e, ",").concat(v.f, ")");
                tt(ut, "webkitTransform", J), tt(ut, "mozTransform", J), tt(ut, "msTransform", J), tt(ut, "transform", J), ga = D, ma = $, Ln = f
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Pt,
                n = Yt(Ie, !0, zs, !0, e),
                i = this.options;
            if (zs) {
                for (ln = e; tt(ln, "position") === "static" && tt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = Fn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = Fn(), va = gc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", zs ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", mc / parseInt(ut.style.width) * 100 + "% " + vc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            a = e.dataTransfer,
            f = i.options;
        if (bn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        bn("setupClone", this), Qe.eventCanceled || (Bt = hh(Ie), Bt.removeAttribute("id"), Bt.draggable = !1, Bt.style["will-change"] = "", this._hideClone(), En(Bt, this.options.chosenClass, !1), Qe.clone = Bt), i.cloneId = Ys(function() {
            bn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Bt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, f.dragClass, !0), n ? (ro = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (bt(document, "mouseup", i._onDrop), bt(document, "touchend", i._onDrop), bt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), ar = !0, i._dragStartId = Ys(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Jr = !0, rs && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, v, _ = this.options,
            S = _.group,
            O = Qe.active,
            D = js === S,
            $ = _.sort,
            J = tn || O,
            ie, Y = this,
            re = !1;
        if (La) return;

        function m(ye, ue) {
            bn(ye, Y, zn({
                evt: e,
                isOwner: D,
                axis: ie ? "vertical" : "horizontal",
                revert: v,
                dragRect: a,
                targetRect: f,
                canSort: $,
                fromSortable: J,
                target: i,
                completed: W,
                onMove: function(ke, $e) {
                    return Us(Pt, n, Ie, a, ke, Yt(ke), e, $e)
                },
                changed: ae
            }, ue))
        }

        function P() {
            m("dragOverAnimationCapture"), Y.captureAnimationState(), Y !== J && J.captureAnimationState()
        }

        function W(ye) {
            return m("dragOverCompleted", {
                insertion: ye
            }), ye && (D ? O._hideClone() : O._showClone(Y), Y !== J && (En(Ie, tn ? tn.options.ghostClass : O.options.ghostClass, !1), En(Ie, _.ghostClass, !0)), tn !== Y && Y !== Qe.active ? tn = Y : Y === Qe.active && tn && (tn = null), J === Y && (Y._ignoreWhileAnimating = i), Y.animateAll(function() {
                m("dragOverAnimationComplete"), Y._ignoreWhileAnimating = null
            }), Y !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (rr = null), !_.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !ye && Oi(e)), !_.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function ae() {
            _n = On(Ie), ci = On(Ie, _.draggable), gn({
                sortable: Y,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, _.draggable, n, !0), m("dragOver"), Qe.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || Y._ignoreWhileAnimating === i) return W(!1);
        if (ro = !1, O && !_.disabled && (D ? $ || (v = $t !== Pt) : tn === this || (this.lastPutMode = js.checkPull(this, O, Ie, e)) && S.checkPut(this, O, Ie, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Yt(Ie), m("dragOverValid"), Qe.eventCanceled) return re;
            if (v) return $t = Pt, P(), this._hideClone(), m("revert"), Qe.eventCanceled || (Ii ? Pt.insertBefore(Ie, Ii) : Pt.appendChild(Ie)), W(!0);
            var se = hl(n, _.draggable);
            if (!se || _x(e, ie, this) && !se.animated) {
                if (se === Ie) return W(!1);
                if (se && n === e.target && (i = se), i && (f = Yt(i)), Us(Pt, n, Ie, a, i, f, e, !!i) !== !1) return P(), se && se.nextSibling ? n.insertBefore(Ie, se.nextSibling) : n.appendChild(Ie), $t = n, ae(), W(!0)
            } else if (se && Ex(e, ie, this)) {
                var ve = vr(n, 0, _, !0);
                if (ve === Ie) return W(!1);
                if (i = ve, f = Yt(i), Us(Pt, n, Ie, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Ie, ve), $t = n, ae(), W(!0)
            } else if (i.parentNode === n) {
                f = Yt(i);
                var d = 0,
                    Ee, Oe = Ie.parentNode !== n,
                    Pe = !yx(Ie.animated && Ie.toRect || a, i.animated && i.toRect || f, ie),
                    lt = ie ? "top" : "left",
                    Ve = pc(i, "top", "top") || pc(Ie, "top", "top"),
                    K = Ve ? Ve.scrollTop : void 0;
                rr !== i && (Ee = f[lt], ls = !1, Fs = !Pe && _.invertSwap || Oe), d = Sx(e, i, f, ie, Pe ? 1 : _.swapThreshold, _.invertedSwapThreshold == null ? _.swapThreshold : _.invertedSwapThreshold, Fs, rr === i);
                var Fe;
                if (d !== 0) {
                    var H = On(Ie);
                    do H -= d, Fe = $t.children[H]; while (Fe && (tt(Fe, "display") === "none" || Fe === ut))
                }
                if (d === 0 || Fe === i) return W(!1);
                rr = i, as = d;
                var oe = i.nextElementSibling,
                    Te = !1;
                Te = d === 1;
                var be = Us(Pt, n, Ie, a, i, f, e, Te);
                if (be !== !1) return (be === 1 || be === -1) && (Te = be === 1), La = !0, setTimeout(xx, 30), P(), Te && !oe ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Te ? oe : i), Ve && uh(Ve, 0, K - Ve.scrollTop), $t = Ie.parentNode, Ee !== void 0 && !Fs && (Xs = Math.abs(Ee - Yt(i)[lt])), ae(), W(!0)
            }
            if (n.contains(Ie)) return W(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        bt(document, "mousemove", this._onTouchMove), bt(document, "touchmove", this._onTouchMove), bt(document, "pointermove", this._onTouchMove), bt(document, "dragover", Oi), bt(document, "mousemove", Oi), bt(document, "touchmove", Oi)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        bt(e, "mouseup", this._onDrop), bt(e, "touchend", this._onDrop), bt(e, "pointerup", this._onDrop), bt(e, "touchcancel", this._onDrop), bt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (_n = On(Ie), ci = On(Ie, i.draggable), bn("drop", this, {
                evt: e
            }), $t = Ie && Ie.parentNode, _n = On(Ie), ci = On(Ie, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        ar = !1, Fs = !1, ls = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Pa(this.cloneId), Pa(this._dragStartId), this.nativeDraggable && (bt(document, "drop", this), bt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), rs && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Jr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || tn && tn.lastPutMode !== "clone") && Bt && Bt.parentNode && Bt.parentNode.removeChild(Bt), Ie && (this.nativeDraggable && bt(Ie, "dragend", this), ya(Ie), Ie.style["will-change"] = "", Jr && !ar && En(Ie, tn ? tn.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
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
        })), tn && tn.save()) : _n !== lr && _n >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), Qe.active && ((_n == null || _n === -1) && (_n = lr, ci = os), gn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        bn("nulling", this), Pt = Ie = $t = ut = Ii = Bt = qs = ui = Ai = Ln = Jr = _n = ci = lr = os = rr = as = tn = js = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, oo.forEach(function(e) {
            e.checked = !0
        }), oo.length = ga = ma = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Ie && (this._onDragOver(e), Cx(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, v = this.options; a < f; a++) n = i[a], $n(n, v.draggable, this.el, !1) && e.push(n.getAttribute(v.dataIdAttr) || Tx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, v) {
            var _ = a.children[v];
            $n(_, this.options.draggable, a, !1) && (i[f] = _)
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
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && ph(i)
    },
    destroy: function() {
        bn("destroy", this);
        var e = this.el;
        e[Sn] = null, bt(e, "mousedown", this._onTapStart), bt(e, "touchstart", this._onTapStart), bt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (bt(e, "dragover", this), bt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), so.splice(so.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ui) {
            if (bn("hideClone", this), Qe.eventCanceled) return;
            tt(Bt, "display", "none"), this.options.removeCloneOnHide && Bt.parentNode && Bt.parentNode.removeChild(Bt), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (bn("showClone", this), Qe.eventCanceled) return;
            Ie.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Bt, Ie) : Ii ? Pt.insertBefore(Bt, Ii) : Pt.appendChild(Bt), this.options.group.revertClone && this.animate(Ie, Bt), tt(Bt, "display", ""), ui = !1
        }
    }
};

function Cx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Us(t, e, n, i, a, f, v, _) {
    var S, O = t[Sn],
        D = O.options.onMove,
        $;
    return window.CustomEvent && !oi && !fs ? S = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (S = document.createEvent("Event"), S.initEvent("move", !0, !0)), S.to = e, S.from = t, S.dragged = n, S.draggedRect = i, S.related = a || e, S.relatedRect = f || Yt(e), S.willInsertAfter = _, S.originalEvent = v, t.dispatchEvent(S), D && ($ = D.call(O, S, v)), $
}

function ya(t) {
    t.draggable = !1
}

function xx() {
    La = !1
}

function Ex(t, e, n) {
    var i = Yt(vr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function _x(t, e, n) {
    var i = Yt(hl(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function Sx(t, e, n, i, a, f, v, _) {
    var S = i ? t.clientY : t.clientX,
        O = i ? n.height : n.width,
        D = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        J = !1;
    if (!v) {
        if (_ && Xs < O * a) {
            if (!ls && (as === 1 ? S > D + O * f / 2 : S < $ - O * f / 2) && (ls = !0), ls) J = !0;
            else if (as === 1 ? S < D + Xs : S > $ - Xs) return -as
        } else if (S > D + O * (1 - a) / 2 && S < $ - O * (1 - a) / 2) return kx(e)
    }
    return J = J || v, J && (S < D + O * f / 2 || S > $ - O * f / 2) ? S > D + O / 2 ? 1 : -1 : 0
}

function kx(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function Tx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function Ax(t) {
    oo.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && oo.push(i)
    }
}

function Ys(t) {
    return setTimeout(t, 0)
}

function Pa(t) {
    return clearTimeout(t)
}
wo && xt(document, "touchmove", function(t) {
    (Qe.active || ar) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: xt,
    off: bt,
    css: tt,
    find: lh,
    is: function(e, n) {
        return !!$n(e, n, e, !1)
    },
    extend: ux,
    throttle: ch,
    closest: $n,
    toggleClass: En,
    clone: hh,
    index: On,
    nextTick: Ys,
    cancelNextTick: Pa,
    detectDirection: fh,
    getChild: vr
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
Qe.version = ax;
var Wt = [],
    Qr, Na, Ba = !1,
    ba, wa, ao, Zr;

function Ox() {
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
            this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : (bt(document, "pointermove", this._handleFallbackAutoScroll), bt(document, "touchmove", this._handleFallbackAutoScroll), bt(document, "mousemove", this._handleFallbackAutoScroll)), bc(), Ks(), hx()
        },
        nulling: function() {
            ao = Na = Qr = Ba = Zr = ba = wa = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                v = (n.touches ? n.touches[0] : n).clientY,
                _ = document.elementFromPoint(f, v);
            if (ao = n, i || this.options.forceAutoScrollFallback || fs || oi || rs) {
                Ca(n, this.options, _, i);
                var S = di(_, !0);
                Ba && (!Zr || f !== ba || v !== wa) && (Zr && bc(), Zr = setInterval(function() {
                    var O = di(document.elementFromPoint(f, v), !0);
                    O !== S && (S = O, Ks()), Ca(n, a.options, O, i)
                }, 10), ba = f, wa = v)
            } else {
                if (!this.options.bubbleScroll || di(_, !0) === Fn()) {
                    Ks();
                    return
                }
                Ca(n, this.options, di(_, !1), !1)
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

function bc() {
    clearInterval(Zr)
}
var Ca = ch(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                v = e.scrollSensitivity,
                _ = e.scrollSpeed,
                S = Fn(),
                O = !1,
                D;
            Na !== n && (Na = n, Ks(), Qr = e.scroll, D = e.scrollFn, Qr === !0 && (Qr = di(n, !0)));
            var $ = 0,
                J = Qr;
            do {
                var ie = J,
                    Y = Yt(ie),
                    re = Y.top,
                    m = Y.bottom,
                    P = Y.left,
                    W = Y.right,
                    ae = Y.width,
                    se = Y.height,
                    ve = void 0,
                    d = void 0,
                    Ee = ie.scrollWidth,
                    Oe = ie.scrollHeight,
                    Pe = tt(ie),
                    lt = ie.scrollLeft,
                    Ve = ie.scrollTop;
                ie === S ? (ve = ae < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ve = ae < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), d = se < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var K = ve && (Math.abs(W - a) <= v && lt + ae < Ee) - (Math.abs(P - a) <= v && !!lt),
                    Fe = d && (Math.abs(m - f) <= v && Ve + se < Oe) - (Math.abs(re - f) <= v && !!Ve);
                if (!Wt[$])
                    for (var H = 0; H <= $; H++) Wt[H] || (Wt[H] = {});
                (Wt[$].vx != K || Wt[$].vy != Fe || Wt[$].el !== ie) && (Wt[$].el = ie, Wt[$].vx = K, Wt[$].vy = Fe, clearInterval(Wt[$].pid), (K != 0 || Fe != 0) && (O = !0, Wt[$].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(ao);
                    var oe = Wt[this.layer].vy ? Wt[this.layer].vy * _ : 0,
                        Te = Wt[this.layer].vx ? Wt[this.layer].vx * _ : 0;
                    typeof D == "function" && D.call(Qe.dragged.parentNode[Sn], Te, oe, t, ao, Wt[this.layer].el) !== "continue" || uh(Wt[this.layer].el, Te, oe)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && J !== S && (J = di(J, !1)));
            Ba = O
        }
    }, 30),
    vh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            v = e.dispatchSortableEvent,
            _ = e.hideGhostForTarget,
            S = e.unhideGhostForTarget;
        if (!!n) {
            var O = i || f;
            _();
            var D = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                $ = document.elementFromPoint(D.clientX, D.clientY);
            S(), O && !O.el.contains($) && (v("spill"), this.onSpill({
                dragEl: a,
                putSortable: i
            }))
        }
    };

function dl() {}
dl.prototype = {
    startIndex: null,
    dragStart: function(e) {
        var n = e.oldDraggableIndex;
        this.startIndex = n
    },
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable;
        this.sortable.captureAnimationState(), i && i.captureAnimationState();
        var a = vr(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: vh
};
ri(dl, {
    pluginName: "revertOnSpill"
});

function fl() {}
fl.prototype = {
    onSpill: function(e) {
        var n = e.dragEl,
            i = e.putSortable,
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
    },
    drop: vh
};
ri(fl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new Ox);
Qe.mount(fl, dl);
const Rx = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Ix = si.extend({
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
    Dx = Et.View.extend({
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
    wc = Et.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: Dx,
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    Mx = Et.View.extend({
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
            this.rankedCollectionView = this.rankedCollectionView || new wc({
                collection: new ot.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new wc({
                className: "sortable-collection unranked",
                collection: new ot.Collection([])
            }), this.lockInView = this.lockInView || new eh({
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
    Lx = Et.View.extend({
        className: "Sortable scrollable",
        template: at.template(Rx),
        model: new Ix,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.sorterView = this.sorterView || new Mx({}), this.listenTo(this.model, "change", this.update, this)
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
    Px = `<div id="controller" class="state-controller controller-content">
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
    Nx = si.extend({
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
    Bx = Et.View.extend({
        className: "UGC scrollable",
        template: at.template(Px),
        model: new Nx,
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
            this.client = t.client, this.promptComponent = this.promptComponent || new Bi({
                model: new ot.Model
            }), this.episodesList = this.episodesList || new fi({
                action: "load",
                collection: new ot.Collection
            }), this.inputComponent = this.inputComponent || new no({
                model: new ot.Model({
                    inlineSubmit: !0,
                    inlineSubmitText: "",
                    className: "addPrompt",
                    counter: !0
                })
            }), this.titleInputComponent = this.titleInputComponent || new no({
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
                const i = en.htmlUnescape(n.metadata.title);
                let a = en.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = at.extend({}, n);
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
            const e = Ae(t.currentTarget).data("action");
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
    Vx = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    $x = Et.View.extend({
        className: "RadialView",
        template: at.template(Vx),
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
    jx = `<div id="status-bar" class="health text">\r
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
    Fx = si.extend({
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
    zx = Et.View.extend({
        model: new Fx,
        template: at.template(jx),
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
            this.client = t.client, this.radialComponent = new $x({
                model: new ot.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), Ae(window).on("mousemove", this.move.bind(this)), Ae(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), Ae(window).off("mousemove"), Ae(window).off("mouseup")
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
            const t = Ae(".radial"),
                e = Ae("#status-bar").outerHeight() + Ae(".playerTopBar").outerHeight() + Ae("#control-panel").outerHeight() + 10,
                n = Ae(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
        }
    }),
    Ux = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
    template: at.template(Ux),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new ex, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new ot.Model({});
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
                return this.setLayout(HC);
            case "Lobby":
                return this.setLayout(YC);
            case "Logo":
                return this.setLayout(QC);
            case "MakeSingleChoice":
                return this.setLayout(ix);
            case "Shoot":
                return this.setLayout(zx);
            case "Sortable":
                return this.setLayout(Lx);
            case "Camera":
                return this.setLayout(RC);
            case "UGC":
                return this.setLayout(Bx);
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
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Pi.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), Ae("#textDescriptions").append(Ae("<p />").text(e.text)))
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
        const t = Ae(window).width(),
            e = Ae(window).height();
        Ae(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), Ot.show("error", {
            titleText: $s[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: $s[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        Ot.show("error", {
            titleText: $s[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: $s[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
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
var yh = {
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

        function f(S, O) {
            for (var D = S.length; D--;)
                if (S[D].listener === O) return D;
            return -1
        }

        function v(S) {
            return function() {
                return this[S].apply(this, arguments)
            }
        }
        i.getListeners = function(O) {
            var D = this._getEvents(),
                $, J;
            if (O instanceof RegExp) {
                $ = {};
                for (J in D) D.hasOwnProperty(J) && O.test(J) && ($[J] = D[J])
            } else $ = D[O] || (D[O] = []);
            return $
        }, i.flattenListeners = function(O) {
            var D = [],
                $;
            for ($ = 0; $ < O.length; $ += 1) D.push(O[$].listener);
            return D
        }, i.getListenersAsObject = function(O) {
            var D = this.getListeners(O),
                $;
            return D instanceof Array && ($ = {}, $[O] = D), $ || D
        };

        function _(S) {
            return typeof S == "function" || S instanceof RegExp ? !0 : S && typeof S == "object" ? _(S.listener) : !1
        }
        i.addListener = function(O, D) {
            if (!_(D)) throw new TypeError("listener must be a function");
            var $ = this.getListenersAsObject(O),
                J = typeof D == "object",
                ie;
            for (ie in $) $.hasOwnProperty(ie) && f($[ie], D) === -1 && $[ie].push(J ? D : {
                listener: D,
                once: !1
            });
            return this
        }, i.on = v("addListener"), i.addOnceListener = function(O, D) {
            return this.addListener(O, {
                listener: D,
                once: !0
            })
        }, i.once = v("addOnceListener"), i.defineEvent = function(O) {
            return this.getListeners(O), this
        }, i.defineEvents = function(O) {
            for (var D = 0; D < O.length; D += 1) this.defineEvent(O[D]);
            return this
        }, i.removeListener = function(O, D) {
            var $ = this.getListenersAsObject(O),
                J, ie;
            for (ie in $) $.hasOwnProperty(ie) && (J = f($[ie], D), J !== -1 && $[ie].splice(J, 1));
            return this
        }, i.off = v("removeListener"), i.addListeners = function(O, D) {
            return this.manipulateListeners(!1, O, D)
        }, i.removeListeners = function(O, D) {
            return this.manipulateListeners(!0, O, D)
        }, i.manipulateListeners = function(O, D, $) {
            var J, ie, Y = O ? this.removeListener : this.addListener,
                re = O ? this.removeListeners : this.addListeners;
            if (typeof D == "object" && !(D instanceof RegExp))
                for (J in D) D.hasOwnProperty(J) && (ie = D[J]) && (typeof ie == "function" ? Y.call(this, J, ie) : re.call(this, J, ie));
            else
                for (J = $.length; J--;) Y.call(this, D, $[J]);
            return this
        }, i.removeEvent = function(O) {
            var D = typeof O,
                $ = this._getEvents(),
                J;
            if (D === "string") delete $[O];
            else if (O instanceof RegExp)
                for (J in $) $.hasOwnProperty(J) && O.test(J) && delete $[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = v("removeEvent"), i.emitEvent = function(O, D) {
            var $ = this.getListenersAsObject(O),
                J, ie, Y, re, m;
            for (re in $)
                if ($.hasOwnProperty(re))
                    for (J = $[re].slice(0), Y = 0; Y < J.length; Y++) ie = J[Y], ie.once === !0 && this.removeListener(O, ie.listener), m = ie.listener.apply(this, D || []), m === this._getOnceReturnValue() && this.removeListener(O, ie.listener);
            return this
        }, i.trigger = v("emitEvent"), i.emit = function(O) {
            var D = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(O, D)
        }, i.setOnceReturnValue = function(O) {
            return this._onceReturnValue = O, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = a, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : vt || {})
})(yh);
const Hx = yh.exports;
class Gx extends Hx {
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
            sc(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const v = f;
        i === "room" ? this.emit("client:entityDidChange", i, v) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", v) : i === "bc:room" ? this.emit("client:entityDidChange", "room", v) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", v) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", v) : sc(`[Ecast Client] Unhandled json notification: ${i}`)
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
const Wx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(Ae)
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
        caret: function(v, _) {
            var S;
            if (this.length !== 0 && !this.is(":hidden")) return typeof v == "number" ? (_ = typeof _ == "number" ? _ : v, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(v, _) : this.createTextRange && (S = this.createTextRange(), S.collapse(!0), S.moveEnd("character", _), S.moveStart("character", v), S.select())
            })) : (this[0].setSelectionRange ? (v = this[0].selectionStart, _ = this[0].selectionEnd) : document.selection && document.selection.createRange && (S = document.selection.createRange(), v = 0 - S.duplicate().moveStart("character", -1e5), _ = v + S.text.length), {
                begin: v,
                end: _
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(v, _) {
            var S, O, D, $, J, ie, Y, re;
            if (!v && this.length > 0) {
                S = t(this[0]);
                var m = S.data(t.mask.dataName);
                return m ? m() : void 0
            }
            return _ = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, _), O = t.mask.definitions, D = [], $ = Y = v.length, J = null, t.each(v.split(""), function(P, W) {
                W == "?" ? (Y--, $ = P) : O[W] ? (D.push(new RegExp(O[W])), J === null && (J = D.length - 1), $ > P && (ie = D.length - 1)) : D.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (_.completed) {
                        for (var ye = J; ie >= ye; ye++)
                            if (D[ye] && oe[ye] === W(ye)) return;
                        _.completed.call(H)
                    }
                }

                function W(ye) {
                    return _.placeholder.charAt(ye < _.placeholder.length ? ye : 0)
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
                                oe[_e] = oe[ke], oe[ke] = W(ke), ke = ae(ke)
                            } K(), H.caret(Math.max(J, ye))
                    }
                }

                function d(ye) {
                    var ue, _e, ke, $e;
                    for (ue = ye, _e = W(ye); Y > ue; ue++)
                        if (D[ue]) {
                            if (ke = ae(ue), $e = oe[ue], oe[ue] = _e, !(Y > ke && D[ke].test($e))) break;
                            _e = $e
                        }
                }

                function Ee() {
                    var ye = H.val(),
                        ue = H.caret();
                    if (re && re.length && re.length > ye.length) {
                        for (Fe(!0); ue.begin > 0 && !D[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < J && !D[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    } else {
                        for (Fe(!0); ue.begin < Y && !D[ue.begin];) ue.begin++;
                        H.caret(ue.begin, ue.begin)
                    }
                    P()
                }

                function Oe() {
                    Fe(), H.val() != be && H.change()
                }

                function Pe(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode;
                        re = H.val(), $e === 8 || $e === 46 || i && $e === 127 ? (ue = H.caret(), _e = ue.begin, ke = ue.end, ke - _e === 0 && (_e = $e !== 46 ? se(_e) : ke = ae(_e - 1), ke = $e === 46 ? ae(ke) : ke), Ve(_e, ke), ve(_e, ke - 1), ye.preventDefault()) : $e === 13 ? Oe.call(this, ye) : $e === 27 && (H.val(be), H.caret(0, Fe()), ye.preventDefault())
                    }
                }

                function lt(ye) {
                    if (!H.prop("readonly")) {
                        var ue, _e, ke, $e = ye.which || ye.keyCode,
                            Ke = H.caret();
                        if (!(ye.ctrlKey || ye.altKey || ye.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Ve(Ke.begin, Ke.end), ve(Ke.begin, Ke.end - 1)), ue = ae(Ke.begin - 1), Y > ue && (_e = String.fromCharCode($e), D[ue].test(_e))) {
                                if (d(ue), oe[ue] = _e, K(), ke = ae(ue), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, H, ke)()
                                    };
                                    setTimeout(dt, 0)
                                } else H.caret(ke);
                                Ke.begin <= ie && P()
                            }
                            ye.preventDefault()
                        }
                    }
                }

                function Ve(ye, ue) {
                    var _e;
                    for (_e = ye; ue > _e && Y > _e; _e++) D[_e] && (oe[_e] = W(_e))
                }

                function K() {
                    H.val(oe.join(""))
                }

                function Fe(ye) {
                    var ue, _e, ke, $e = H.val(),
                        Ke = -1;
                    for (ue = 0, ke = 0; Y > ue; ue++)
                        if (D[ue]) {
                            for (oe[ue] = W(ue); ke++ < $e.length;)
                                if (_e = $e.charAt(ke - 1), D[ue].test(_e)) {
                                    oe[ue] = _e, Ke = ue;
                                    break
                                } if (ke > $e.length) {
                                Ve(ue + 1, Y);
                                break
                            }
                        } else oe[ue] === $e.charAt(ke) && ke++, $ > ue && (Ke = ue);
                    return ye ? K() : $ > Ke + 1 ? _.autoclear || oe.join("") === Te ? (H.val() && H.val(""), Ve(0, Y)) : K() : (K(), H.val(H.val().substring(0, Ke + 1))), $ ? ue : J
                }
                var H = t(this),
                    oe = t.map(v.split(""), function(ye, ue) {
                        return ye != "?" ? O[ye] ? W(ue) : ye : void 0
                    }),
                    Te = oe.join(""),
                    be = H.val();
                H.data(t.mask.dataName, function() {
                    return t.map(oe, function(ye, ue) {
                        return D[ue] && ye != W(ue) ? ye : null
                    }).join("")
                }), H.one("unmask", function() {
                    H.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!H.prop("readonly")) {
                        clearTimeout(e);
                        var ye;
                        be = H.val(), ye = Fe(), e = setTimeout(function() {
                            H.get(0) === document.activeElement && (K(), ye == v.replace("?", "").length ? H.caret(0, ye) : H.caret(ye))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    H.prop("readonly") || setTimeout(function() {
                        var ye = Fe(!0);
                        H.caret(ye), P()
                    }, 0)
                }), a && f && H.off("input.mask").on("input.mask", Ee), Fe()
            })
        }
    })
});
window.$ = Ae;
window.jQuery = Ae;
const qx = Et.View.extend({
        className: "app-root",
        template: at.template(Wx),
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
    Xx = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Ri.WSClient(n), e.connect()),
            mount: n => {
                const i = new Gx(e, n);
                let a = new Et.Application({
                    region: "#app",
                    onStart() {
                        const f = new qx;
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
    Cc = "main/pp2/bombintern/assets/90281e38.png",
    xc = "main/pp2/bombintern/assets/d1fcf3e5.png",
    Ec = "main/pp2/bombintern/assets/984904cd.png",
    _c = "main/pp2/bombintern/assets/9ee83e7e.png",
    Yx = "main/pp2/bombintern/assets/c0eab6d1.png",
    Kx = "main/pp2/bombintern/assets/60c1751d.png",
    Jx = "main/pp2/bombintern/assets/d21e52bc.png",
    Qx = "main/pp2/bombintern/assets/604e2594.png",
    Zx = "main/pp2/bombintern/assets/43eaa9da.png",
    e1 = "main/pp2/bombintern/assets/9385c178.png",
    t1 = "main/pp2/bombintern/assets/797cd845.png",
    n1 = "main/pp2/bombintern/assets/426e2086.png",
    i1 = "main/pp2/bombintern/assets/9c269e40.png",
    r1 = "main/pp2/bombintern/assets/e5dc1127.png",
    s1 = "main/pp2/bombintern/assets/8c5e7663.png",
    o1 = "main/pp2/bombintern/assets/25208ec3.png",
    a1 = "main/pp2/bombintern/assets/5bdafb63.png",
    l1 = "main/pp2/bombintern/assets/bfc3719e.png",
    c1 = "main/pp2/bombintern/assets/13091a8a.png",
    u1 = "main/pp2/bombintern/assets/99e487b3.png",
    h1 = "main/pp2/bombintern/assets/d834aeba.png",
    d1 = "main/pp2/bombintern/assets/67b086cf.png",
    f1 = "main/pp2/bombintern/assets/811aefe7.png",
    p1 = "main/pp2/bombintern/assets/be7a5962.png",
    g1 = `<div id="page-bombintern" class="page gray">\r
    <link href='https://fonts.googleapis.com/css?family=Press+Start+2P&subset=latin,greek,latin-ext' rel='stylesheet' type='text/css'>\r
    <link href="https://fonts.googleapis.com/css?family=Rokkitt:400,700" rel="stylesheet" type="text/css" >\r
\r
    <div id="player">\r
        <h1><%=username%></h1>\r
    </div>\r
\r
    <div id="game" class="game pt-pageholder">\r
\r
        <div class="pt-page-off state-lobby bombintern-page">\r
            <div class="container">\r
                <div class='bomb-header'><span id="bombintern-lobby-text"></span></div>\r
                <form class="pure-form">\r
                    <button type="button" id="bombintern-startgame" class="button-bombintern button-xlarge pure-button pure-input-1">EMPEZAR</button>\r
                    <button type="button" id="bombintern-stopcountdown" class="button-bombintern  button-xlarge pure-button pure-input-1">CANCELAR</button>\r
                </form>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-dayend bombintern-page">\r
            <div class="container">\r
                <div class='bomb-header'><span id="bombintern-dayend-text"></span></div>\r
                <form class="pure-form">\r
                    <button type="button" id="bombintern-nextday" class="button-bombintern button-xlarge pure-button pure-input-1">SIGUIENTE DÍA</button>\r
                    <button type="button" id="bombintern-retryday" class="button-bombintern button-xlarge pure-button pure-input-1">REINTENTAR DÍA</button>\r
                    <button type="button" id="bombintern-menuday" class="button-bombintern  button-xlarge pure-button pure-input-1">MENÚ</button>\r
                </form>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-gameover bombintern-page">\r
            <div class="container">\r
                <div class='bomb-header'><span id="bombintern-gameover-text"></span></div>\r
                <form class="pure-form">\r
                    <button type="button" id="bombintern-retry" class="button-bombintern button-xlarge pure-button pure-input-1">REINTENTAR</button>\r
                    <button type="button" id="bombintern-menu" class="button-bombintern  button-xlarge pure-button pure-input-1">MENÚ</button>\r
                </form>\r
                <div id='bombintern-container-top'></div>\r
                <div id="bombintern-gameover-rules"></div>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-nothing bombintern-page">\r
            <div class="logo-image" style="width:100%;">\r
                <img class="pure-img" style="margin-left:auto; margin-right:auto;"  src='main/pp2/bombintern/bombintern/logo.png'>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-message bombintern-page">\r
            <div class='bomb-header'><span id="bombintern-message-text"></span></div>\r
        </div>\r
\r
        <div class="pt-page-off state-smashpuzzle bombintern-page">\r
            <div class="container">\r
                <div id='bombintern-smashpuzzle-top'></div>\r
                <div id="bombintern-smashpuzzle-rules"></div>\r
                <form id="bombintern-smashpuzzle-triggers" class="pure-form"></form>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-wiredbomb bombintern-page">\r
            <div class="container">\r
                <div id='bombintern-wiredbomb-top'></div>\r
                <div id="bombintern-wiredbomb-rules"></div>\r
                <form id="bombintern-wiredbomb-triggers" class="pure-form"></form>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-coffeebomb bombintern-page">\r
            <div class="container">\r
                <div id='bombintern-coffeebomb-top'></div>\r
                <div id="bombintern-coffeebomb-rules"></div>\r
                <form id="bombintern-coffeebomb-triggers" class="pure-form"></form>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-filingbomb bombintern-page">\r
            <div class="container">\r
                <div id='bombintern-filingbomb-top'></div>\r
                <div id="bombintern-filingbomb-rules"></div>\r
                <form id="bombintern-filingbomb-triggers" class="pure-form"></form>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-keypadbomb bombintern-page">\r
            <div class="container">\r
                <div id='bombintern-keypadbomb-top'></div>\r
                <div id="bombintern-keypadbomb-rules"></div>\r
                <form id="bombintern-keypadbomb-triggers" class="pure-form"></form>\r
            </div>\r
        </div>\r
\r
        <div class="pt-page-off state-copierbomb bombintern-page">\r
            <div class="container">\r
                <div id='bombintern-copierbomb-top'></div>\r
                <div id="bombintern-copierbomb-rules"></div>\r
                <form id="bombintern-copierbomb-triggers" class="pure-form"></form>\r
            </div>\r
        </div>\r
\r
    </div>\r
</div>\r
`;
const m1 = GC.extend({
    template: at.template(g1),
    lacksAudience: !0,
    events: {
        "click #bombintern-startgame": "startGame",
        "click #bombintern-stopcountdown": "stopCountdown",
        "click #bombintern-nextday": "gameoverContinue",
        "click #bombintern-retryday": "gameoverRetry",
        "click #bombintern-retry": "gameoverRetry",
        "click #bombintern-menuday": "gameoverMenu",
        "click #bombintern-menu": "gameoverMenu",
        "click .bombintern-smashpuzzle-button": "sendSmashInput",
        "click .bombintern-wiredbomb-button": "sendWireInput",
        "click .bombintern-filingbomb-button": "sendFilingInput",
        "click .bombintern-copierbomb-button": "sendCopierInput",
        "click .bombintern-keypadbomb-button": "sendKeypadInput",
        "click .bombintern-coffeebomb-remove-button": "removeIngredient",
        "click .bombintern-coffeebomb-add-button": "addIngredient",
        "click .bombintern-coffeebomb-brew-button": "brewCoffee"
    },
    async update() {
        let t = "";
        const e = this.model.get("room"),
            n = e ? e.state : "",
            i = this.model.get("player"),
            a = i ? i.state : "",
            f = i !== void 0 && i.playerColor !== void 0 ? i.playerColor : "#CCCCCC";
        this.$el.find("#player").css("background-color", f);
        const v = en.adjustColor(f, 1.3);
        switch (Ae(".bombintern-page").css("background-color", v), n) {
            case "Lobby":
                switch (this.$el.find("#bombintern-startgame").hide(), this.$el.find("#bombintern-stopcountdown").hide(), a) {
                    case "WaitingForMore":
                        this.$el.find("#bombintern-lobby-text").html("Esperando a que todos los jugadores se unan"), this.showScreen(".state-lobby");
                        break;
                    case "CanStart":
                        this.$el.find("#bombintern-lobby-text").html("Pulsa este botón cuando todos se hayan unido"), this.$el.find("#bombintern-startgame").show(), this.showScreen(".state-lobby");
                        break;
                    case "Countdown":
                        this.$el.find("#bombintern-lobby-text").html("Pulsa este botón para cancelar el inicio de la partida"), this.$el.find("#bombintern-stopcountdown").show(), this.showScreen(".state-lobby");
                        break;
                    case "WaitingToStart":
                        this.$el.find("#bombintern-lobby-text").html("Esperando a que empiece la partida"), this.showScreen(".state-lobby");
                        break
                }
                break;
            case "Logo":
                this.showScreen(".state-nothing");
                break;
            case "Message":
                a === "Message" && (this.$el.find("#bombintern-message-text").html(i.message), this.showScreen(".state-message"));
                break;
            case "Puzzle":
                switch (Ae(".bombintern-rules").html(""), this.lastPuzzle = a, a) {
                    case "SmashPuzzle":
                        if (this.$el.find("#bombintern-smashpuzzle-triggers").html(""), this.buildRuleFolder(a, "bombintern-smashpuzzle-rules"), i.smasher === !0) {
                            t = "<div class='bomb-header' id='button-header'><span>PULSA DEBAJO PARA ROMPER ALGO</span></div>";
                            for (let _ = 0; _ < i.triggers.length; ++_) {
                                const S = i.triggers[_];
                                t += `<button type='button' data-param='${S.object}' class='pure-input-1 bombintern-smashpuzzle-button button-large pure-button button-bombintern' ${S.hasBeenSmashed?"disabled":""}>${S.object}</button>`
                            }
                            this.$el.find("#bombintern-smashpuzzle-triggers").html(t)
                        }
                        this.showScreen(".state-smashpuzzle");
                        break;
                    case "WiredBomb":
                        if (this.$el.find("#bombintern-wiredbomb-triggers").html(""), this.buildRuleFolder(a, "bombintern-wiredbomb-rules"), i.triggers && i.triggers.length > 0) {
                            t = "<div class='bomb-header' id='button-header'><span>TOCA BOTONES PARA CORTAR LOS CABLES</span></div>";
                            for (let _ = 0; _ < i.triggers.length; ++_) {
                                const S = i.triggers[_],
                                    O = S.name || "Cable";
                                t += `<button type='button' ${S.hasBeenCut?"disabled":""} data-param='${S.index}' class='pure-input-1 bombintern-wiredbomb-button button-large pure-button button-bombintern'>${O} ${S.index}</button>`
                            }
                            this.$el.find("#bombintern-wiredbomb-triggers").html(t)
                        }
                        this.showScreen(".state-wiredbomb");
                        break;
                    case "CoffeeBomb":
                        if (this.$el.find("#bombintern-coffeebomb-triggers").html(""), this.buildRuleFolder(a, "bombintern-coffeebomb-rules"), i.triggers && i.triggers.length > 0) {
                            t = "<div class='bomb-header' id='button-header'><span>PULSA PARA AÑADIR O REMOVER INGREDIENTES</span></div>";
                            for (let _ = 0; _ < i.triggers.length; ++_) {
                                const S = i.triggers[_];
                                t += `<div class='bombinterns-ingredient-controls'><span class='bombinterns-ingredient-name'>${S.ingredient}</span><br />`, t += `<button type='button' data-param='${S.ingredient}' class='pure-input-2 bombintern-coffeebomb-button bombintern-coffeebomb-remove-button button-large pure-button button-bombintern'>-</button>`, t += `<span class = 'bombinterns-ingredient-count'>${S.count}</span>`, t += `<button type='button' data-param='${S.ingredient}' class='pure-input-2 bombintern-coffeebomb-button bombintern-coffeebomb-add-button button-large pure-button button-bombintern'>+</button></div>`
                            }
                            t += "<div class='bomb-header' id='brew-header'><span>PULSA CUANDO ESTÉS LISTO PARA PREPARAR</span></div>", t += "<button type='button' class='pure-input-1 bombintern-coffeebomb-brew-button button-large pure-button button-bombintern'>Preparar</button>", this.$el.find("#bombintern-coffeebomb-triggers").html(t)
                        }
                        this.showScreen(".state-coffeebomb");
                        break;
                    case "FilingBomb":
                        if (this.$el.find("#bombintern-filingbomb-triggers").html(""), this.buildRuleFolder(a, "bombintern-filingbomb-rules"), i.triggers.length > 0) {
                            t = "<div id='button-header'<br /><span>PULSA DEBAJO PARA ARCHIVAR</span><br /></div>";
                            for (let _ = 0; _ < i.triggers.length; ++_) {
                                const S = i.triggers[_];
                                t += `<button type='button' ${S.hasBeenFiled?"disabled":""} data-param='${S.fullName}' class='pure-input-1 bombintern-filingbomb-button button-large pure-button button-bombintern'>${S.fullName}</button>`
                            }
                            this.$el.find("#bombintern-filingbomb-triggers").html(t)
                        }
                        this.showScreen(".state-filingbomb");
                        break;
                    case "CopierBomb":
                        if (this.$el.find("#bombintern-copierbomb-rules").html(""), this.$el.find("#bombintern-copierbomb-triggers").html(""), this.buildRuleFolder(a, "bombintern-copierbomb-rules"), i.triggers.length > 0) {
                            for (let _ = 0; _ < i.triggers.length; ++_) {
                                t += "<div class='bombintern-copier-control'>";
                                const S = i.triggers[_],
                                    O = S.text || S.name;
                                t += `<button type='button' data-param='${S.index}' class='pure-input-1 bombintern-copierbomb-button button-large pure-button button-bombintern'>`, t += `<span>${O}</span>`, S.type === "button" ? t += `<div class='copier-control-image'><img src='${new URL("main/pp2/bombintern/assets/5bdafb63.png",self.location).href}'/></div>` : S.type === "action" ? t += `<div class='copier-control-image'><img src='${new URL("main/pp2/bombintern/assets/8c5e7663.png",self.location).href}'/></div>` : S.type === "load" ? t += `<div class='copier-control-image'><img src='${new URL("main/pp2/bombintern/assets/bfc3719e.png",self.location).href}'/></div>` : S.type === "panel" ? S.state === 0 ? (t += `<div class='copier-control-image'><img src='${new URL("main/pp2/bombintern/assets/13091a8a.png",self.location).href}'/></div>`, t += "(cerrado)") : (t += `<div class='copier-control-image'><img src='${new URL("main/pp2/bombintern/assets/99e487b3.png",self.location).href}'/></div>`, t += "(abierto)") : S.type === "setting" && (t += `<div class='copier-control-image'><img src='${new URL(Object.assign({"../images/copier-knob-1.png":Cc,"../images/copier-knob-2.png":xc,"../images/copier-knob-3.png":Ec,"../images/copier-knob-4.png":_c})[`../images/copier-knob-${S.value + 1}.png`],self.location).href}'/></div>`, t += S.options[S.value]), t += "</button>", t += "</div>"
                            }
                            this.$el.find("#bombintern-copierbomb-triggers").html(t)
                        }
                        this.showScreen(".state-copierbomb");
                        break;
                    case "KeypadBomb":
                        if (this.$el.find("#bombintern-keypadbomb-triggers").html(""), this.buildRuleFolder(a, "bombintern-keypadbomb-rules"), i.triggers && i.triggers.length > 0) {
                            t = "<div class='bomb-header' id='button-header'><span>Enter a 4-digit keycode:</span></div>";
                            for (let _ = 0; _ < i.triggers.length; ++_) {
                                const S = i.triggers[_];
                                let O = S.key;
                                O === "Pound" ? O = "#" : O === "Star" && (O = "*"), t += `<button type='button' data-param='${S.index}' class='pure-input-3 bombintern-keypadbomb-button button-large pure-button button-bombintern'>${O}</button>`, S.index % 3 === 0 && (t += "<br />")
                            }
                            this.$el.find("#bombintern-keypadbomb-triggers").html(t)
                        }
                        this.showScreen(".state-keypadbomb");
                        break
                }
                if ((i.rules && i.rules.length > 0 || i.sort && i.sort.length > 0) && (i.triggers && i.triggers.length > 0 || i.smasher === !0)) {
                    this.$el.find("#player").html("");
                    const _ = new URL("main/pp2/bombintern/assets/67b086cf.png", self.location).href,
                        S = new URL("main/pp2/bombintern/assets/67b086cf.png", self.location).href;
                    t = `<div id='player-content-bombinterns'><div class='image-button-bombinterns-wrapper' id='leftButton'><input type='image' class='image-button-bombinterns' id='bombinterns-jump-rule-button' src='${_}' /></div><div class='player-name-bombintern' ><p>${i.playerName}</p></div><div class='image-button-bombinterns-wrapper' id='rightButton'><input type='image' class='image-button-bombinterns' id='bombinterns-jump-cut-button' src='${S}' /></div></div>`, this.$el.find("#player").html(t), this.$el.find("#bombinterns-jump-rule-button").on("click", () => {
                        const O = this.$el.find("#instruction-header")[0];
                        !O || (O.parentElement.parentElement.parentElement.scrollTop = this.$el.find("#instruction-header").offset().top)
                    }), this.$el.find("#bombinterns-jump-cut-button").on("click", () => {
                        const O = this.$el.find("#button-header")[0];
                        !O || (O.parentElement.parentElement.parentElement.scrollTop = this.$el.find("#button-header").offset().top)
                    })
                }
                break;
            case "DayEnd":
                switch (a) {
                    case "DayEndDecision":
                        this.$el.find("#bombintern-dayend-text").html("¡Día completado!"), this.showScreen(".state-dayend");
                        break;
                    default:
                        this.$el.find("#bombintern-message-text").html("¡Día completado!"), this.showScreen(".state-message");
                        break
                }
                break;
            case "GameOver":
                switch (a) {
                    case "GameOver":
                    case "GameOverDecision":
                        this.$el.find("#bombintern-gameover-text").html("¡Juego terminado!"), this.$el.find("#bombintern-retry").hide(), this.$el.find("#bombintern-menu").hide(), a === "GameOverDecision" && (this.$el.find("#bombintern-retry").show(), this.$el.find("#bombintern-menu").show()), this.$el.find("#bombintern-gameover-rules").html(""), this.buildRuleFolder(this.lastPuzzle, "bombintern-gameover-rules"), this.showScreen(".state-gameover");
                        break
                }
                break
        }
        n !== "Puzzle" && i && i.playerName && this.$el.find("#player").html(`<h1>${i.playerName}</h1>`), this.scrollToTopOnPuzzleStart(a), this.onResize()
    },
    startGame() {
        return this.client.send("SendMessageToRoomOwner", {
            startGame: !0
        }), !1
    },
    stopCountdown() {
        return this.client.send("SendMessageToRoomOwner", {
            cancel: !0
        }), !1
    },
    chooseSuggestion(t) {
        const e = Ae(t.target).data("num"),
            n = this.model.get("player").suggestions[e],
            i = this.sanitize(n).toUpperCase();
        return this.client.send("SendMessageToRoomOwner", {
            lieEntered: i,
            usedSuggestion: !0
        }), !1
    },
    sendSmashInput(t) {
        const e = Ae(t.target).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            object: e
        }), Ae(t.target).prop("disabled", !0), !1
    },
    sendWireInput(t) {
        const e = Ae(t.target).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            index: e
        }), Ae(t.target).prop("disabled", !0), !1
    },
    sendFilingInput(t) {
        const e = Ae(t.target).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            file: e
        }), Ae(t.target).prop("disabled", !0), !1
    },
    sendCopierInput(t) {
        const e = Ae(t.currentTarget).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            index: e
        }), !1
    },
    removeIngredient(t) {
        const e = Ae(t.target).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            remove: !0,
            ingredient: e
        }), !1
    },
    addIngredient(t) {
        const e = Ae(t.target).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            add: !0,
            ingredient: e
        }), !1
    },
    brewCoffee(t) {
        return this.client.send("SendMessageToRoomOwner", {
            brew: !0
        }), Ae(t.target).prop("disabled", !0), !1
    },
    sendKeypadInput(t) {
        const e = Ae(t.target).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            index: e
        }), !1
    },
    gameoverContinue() {
        return this.client.send("SendMessageToRoomOwner", {
            decision: "Gameover_Continue"
        }), !1
    },
    gameoverRetry() {
        return this.client.send("SendMessageToRoomOwner", {
            decision: "Gameover_Retry"
        }), !1
    },
    gameoverMenu() {
        return this.client.send("SendMessageToRoomOwner", {
            decision: "Gameover_Menu"
        }), !1
    },
    async buildRuleFolder(t, e) {
        let n = "",
            i;
        this.$el.find(`#${e}`).html(n);
        const a = this.model.get("player");
        if (a.rules && a.rules.length > 0 || a.sort && a.sort.length > 0) {
            switch (n += "<div class='bomb-header' id='instruction-header'>", t) {
                case "SmashPuzzle":
                    n += "<span>¡LEE LAS INSTRUCCIONES DEBAJO PARA AYUDAR A ROMPER!</span>";
                    break;
                case "WiredBomb":
                    n += "<span>SIGUE LAS INSTRUCCIONES</span>";
                    break;
                case "CoffeeBomb":
                    n += "<span>SIGUE LAS INSTRUCCIONES</span>";
                    break;
                case "FilingBomb":
                    break;
                case "CopierBomb":
                    break;
                case "KeypadBomb":
                    n += "<span>SIGUE LAS INSTRUCCIONES</span>";
                    break
            }
            if (n += "</div>", n += "<div class='rules-folder-tab'><span>MANUAL</span></div><div class='rules-folder'>", t === "FilingBomb") n += `<div class='rules-page'><span>${a.sort}</span></div>`;
            else if (t === "CopierBomb")
                for (let f = 0; f < a.rules.length; ++f) n += "<div class='rules-page copier-rule-page'>", i = a.rules[f], i.header !== "" && (n += `<div class='copier-icon'><img src='${new URL(Object.assign({"../images/AlienBlue.png":Yx,"../images/AlienGreen.png":Kx,"../images/AlienPink.png":Jx,"../images/AlienPurple.png":Qx,"../images/AlienYellow.png":Zx,"../images/GreenDiamond.png":e1,"../images/OrangeArrow.png":t1,"../images/RedCircle.png":n1,"../images/WhiteSquare.png":i1,"../images/YellowTriangle.png":r1,"../images/copier-action.png":s1,"../images/copier-button-down.png":o1,"../images/copier-button.png":a1,"../images/copier-knob-1.png":Cc,"../images/copier-knob-2.png":xc,"../images/copier-knob-3.png":Ec,"../images/copier-knob-4.png":_c,"../images/copier-load.png":l1,"../images/copier-panel-closed.png":c1,"../images/copier-panel-open.png":u1,"../images/jumpbttncutwires.png":h1,"../images/jumpbttnrules.png":d1,"../images/logo.png":f1,"../images/panel_open_alt.png":p1})[`../images/${i.header}.png`],self.location).href}'/></div>`), n += `<span class='bombintern-rule copier-rule'>${i.body}</span>`, n += "</div>";
            else
                for (let f = 0; f < a.rules.length; ++f) n += "<div class='rules-page'>", i = a.rules[f], i.header !== "" && (n += `<span><b>${i.header}.</b></span><br/>`), n += `<span class='bombintern-rule'>${i.body}</span></div>`;
            n += "</div>"
        } else switch (t) {
            case "SmashPuzzle":
                n += "<div class='bomb-header' id='instruction-header'><span>¡ERES QUIEN ROMPE!</span></div>";
                break;
            case "WiredBomb":
                n += "<div class='bomb-header' id='instruction-header'><span>¡ERES QUIEN CORTA!</span></div>";
                break;
            case "CoffeeBomb":
                n += "<div class='bomb-header' id='instruction-header'><span>¡ERES QUIEN PREPARA!</span></div>";
                break;
            case "FilingBomb":
                n += "<div class='bomb-header' id='instruction-header'><span>¡ERES QUIEN ARCHIVA!</span></div>";
                break;
            case "CopierBomb":
                n += "<div class='bomb-header' id='instruction-header'><span>¡ARREGLA LA COPIADORA!</span></div>";
                break;
            case "KeypadBomb":
                n += "<div class='bomb-header' id='instruction-header'><span>¡DESCIFRA EL CÓDIGO!</span></div>";
                break
        }
        this.$el.find(`#${e}`).html(n)
    },
    scrollToTopOnPuzzleStart(t) {
        const e = this.model.get("room");
        if ((e ? e.state : "") !== "Puzzle") switch (t) {
            case "SmashPuzzle":
                Ae(".state-smashpuzzle")[0].scrollTop = 0;
                break;
            case "WiredBomb":
                Ae(".state-wiredbomb")[0].scrollTop = 0;
                break;
            case "CoffeeBomb":
                Ae(".state-coffeebomb")[0].scrollTop = 0;
                break;
            case "FilingBomb":
                Ae(".state-filingbomb")[0].scrollTop = 0;
                break;
            case "CopierBomb":
                Ae(".state-copierbomb")[0].scrollTop = 0;
                break;
            case "KeypadBomb":
                Ae(".state-keypadbomb")[0].scrollTop = 0;
                break
        }
    }
});
Xx({
    MainView: m1
});
//# sourceMappingURL=0a23956d.js.map