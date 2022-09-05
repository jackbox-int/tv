var hh = Object.defineProperty;
var dh = (t, e, n) => e in t ? hh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var nt = (t, e, n) => (dh(t, typeof e != "symbol" ? e + "" : e, n), n);
const fh = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) i(o);
    new MutationObserver(o => {
        for (const c of o)
            if (c.type === "childList")
                for (const m of c.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && i(m)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const c = {};
        return o.integrity && (c.integrity = o.integrity), o.referrerpolicy && (c.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? c.credentials = "include" : o.crossorigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin", c
    }

    function i(o) {
        if (o.ep) return;
        o.ep = !0;
        const c = n(o);
        fetch(o.href, c)
    }
};
fh();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ph(t) {
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
var Ni = {
    exports: {}
};
(function(t, e) {
    (function() {
        var n = this,
            i = n._,
            o = Array.prototype,
            c = Object.prototype,
            m = Function.prototype,
            _ = o.push,
            k = o.slice,
            I = c.toString,
            L = c.hasOwnProperty,
            $ = Array.isArray,
            H = Object.keys,
            te = m.bind,
            W = Object.create,
            re = function() {},
            v = function(l) {
                if (l instanceof v) return l;
                if (!(this instanceof v)) return new v(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = v), e._ = v, v.VERSION = "1.8.3";
        var D = function(l, g, S) {
                if (g === void 0) return l;
                switch (S == null ? 3 : S) {
                    case 1:
                        return function(O) {
                            return l.call(g, O)
                        };
                    case 2:
                        return function(O, P) {
                            return l.call(g, O, P)
                        };
                    case 3:
                        return function(O, P, V) {
                            return l.call(g, O, P, V)
                        };
                    case 4:
                        return function(O, P, V, ie) {
                            return l.call(g, O, P, V, ie)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            Y = function(l, g, S) {
                return l == null ? v.identity : v.isFunction(l) ? D(l, g, S) : v.isObject(l) ? v.matcher(l) : v.property(l)
            };
        v.iteratee = function(l, g) {
            return Y(l, g, 1 / 0)
        };
        var le = function(l, g) {
                return function(S) {
                    var O = arguments.length;
                    if (O < 2 || S == null) return S;
                    for (var P = 1; P < O; P++)
                        for (var V = arguments[P], ie = l(V), ke = ie.length, de = 0; de < ke; de++) {
                            var Le = ie[de];
                            (!g || S[Le] === void 0) && (S[Le] = V[Le])
                        }
                    return S
                }
            },
            oe = function(l) {
                if (!v.isObject(l)) return {};
                if (W) return W(l);
                re.prototype = l;
                var g = new re;
                return re.prototype = null, g
            },
            ye = function(l) {
                return function(g) {
                    return g == null ? void 0 : g[l]
                }
            },
            f = Math.pow(2, 53) - 1,
            Se = ye("length"),
            Oe = function(l) {
                var g = Se(l);
                return typeof g == "number" && g >= 0 && g <= f
            };
        v.each = v.forEach = function(l, g, S) {
            g = D(g, S);
            var O, P;
            if (Oe(l))
                for (O = 0, P = l.length; O < P; O++) g(l[O], O, l);
            else {
                var V = v.keys(l);
                for (O = 0, P = V.length; O < P; O++) g(l[V[O]], V[O], l)
            }
            return l
        }, v.map = v.collect = function(l, g, S) {
            g = Y(g, S);
            for (var O = !Oe(l) && v.keys(l), P = (O || l).length, V = Array(P), ie = 0; ie < P; ie++) {
                var ke = O ? O[ie] : ie;
                V[ie] = g(l[ke], ke, l)
            }
            return V
        };

        function Pe(l) {
            function g(S, O, P, V, ie, ke) {
                for (; ie >= 0 && ie < ke; ie += l) {
                    var de = V ? V[ie] : ie;
                    P = O(P, S[de], de, S)
                }
                return P
            }
            return function(S, O, P, V) {
                O = D(O, V, 4);
                var ie = !Oe(S) && v.keys(S),
                    ke = (ie || S).length,
                    de = l > 0 ? 0 : ke - 1;
                return arguments.length < 3 && (P = S[ie ? ie[de] : de], de += l), g(S, O, P, ie, de, ke)
            }
        }
        v.reduce = v.foldl = v.inject = Pe(1), v.reduceRight = v.foldr = Pe(-1), v.find = v.detect = function(l, g, S) {
            var O;
            if (Oe(l) ? O = v.findIndex(l, g, S) : O = v.findKey(l, g, S), O !== void 0 && O !== -1) return l[O]
        }, v.filter = v.select = function(l, g, S) {
            var O = [];
            return g = Y(g, S), v.each(l, function(P, V, ie) {
                g(P, V, ie) && O.push(P)
            }), O
        }, v.reject = function(l, g, S) {
            return v.filter(l, v.negate(Y(g)), S)
        }, v.every = v.all = function(l, g, S) {
            g = Y(g, S);
            for (var O = !Oe(l) && v.keys(l), P = (O || l).length, V = 0; V < P; V++) {
                var ie = O ? O[V] : V;
                if (!g(l[ie], ie, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, g, S) {
            g = Y(g, S);
            for (var O = !Oe(l) && v.keys(l), P = (O || l).length, V = 0; V < P; V++) {
                var ie = O ? O[V] : V;
                if (g(l[ie], ie, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, g, S, O) {
            return Oe(l) || (l = v.values(l)), (typeof S != "number" || O) && (S = 0), v.indexOf(l, g, S) >= 0
        }, v.invoke = function(l, g) {
            var S = k.call(arguments, 2),
                O = v.isFunction(g);
            return v.map(l, function(P) {
                var V = O ? g : P[g];
                return V == null ? V : V.apply(P, S)
            })
        }, v.pluck = function(l, g) {
            return v.map(l, v.property(g))
        }, v.where = function(l, g) {
            return v.filter(l, v.matcher(g))
        }, v.findWhere = function(l, g) {
            return v.find(l, v.matcher(g))
        }, v.max = function(l, g, S) {
            var O = -1 / 0,
                P = -1 / 0,
                V, ie;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) V = l[ke], V > O && (O = V)
            } else g = Y(g, S), v.each(l, function(Le, De, it) {
                ie = g(Le, De, it), (ie > P || ie === -1 / 0 && O === -1 / 0) && (O = Le, P = ie)
            });
            return O
        }, v.min = function(l, g, S) {
            var O = 1 / 0,
                P = 1 / 0,
                V, ie;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) V = l[ke], V < O && (O = V)
            } else g = Y(g, S), v.each(l, function(Le, De, it) {
                ie = g(Le, De, it), (ie < P || ie === 1 / 0 && O === 1 / 0) && (O = Le, P = ie)
            });
            return O
        }, v.shuffle = function(l) {
            for (var g = Oe(l) ? l : v.values(l), S = g.length, O = Array(S), P = 0, V; P < S; P++) V = v.random(0, P), V !== P && (O[P] = O[V]), O[V] = g[P];
            return O
        }, v.sample = function(l, g, S) {
            return g == null || S ? (Oe(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, g))
        }, v.sortBy = function(l, g, S) {
            return g = Y(g, S), v.pluck(v.map(l, function(O, P, V) {
                return {
                    value: O,
                    index: P,
                    criteria: g(O, P, V)
                }
            }).sort(function(O, P) {
                var V = O.criteria,
                    ie = P.criteria;
                if (V !== ie) {
                    if (V > ie || V === void 0) return 1;
                    if (V < ie || ie === void 0) return -1
                }
                return O.index - P.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, S, O) {
                var P = {};
                return S = Y(S, O), v.each(g, function(V, ie) {
                    var ke = S(V, ie, g);
                    l(P, V, ke)
                }), P
            }
        };
        v.groupBy = lt(function(l, g, S) {
            v.has(l, S) ? l[S].push(g) : l[S] = [g]
        }), v.indexBy = lt(function(l, g, S) {
            l[S] = g
        }), v.countBy = lt(function(l, g, S) {
            v.has(l, S) ? l[S]++ : l[S] = 1
        }), v.toArray = function(l) {
            return l ? v.isArray(l) ? k.call(l) : Oe(l) ? v.map(l, v.identity) : v.values(l) : []
        }, v.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : v.keys(l).length
        }, v.partition = function(l, g, S) {
            g = Y(g, S);
            var O = [],
                P = [];
            return v.each(l, function(V, ie, ke) {
                (g(V, ie, ke) ? O : P).push(V)
            }), [O, P]
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
        var $e = function(l, g, S, O) {
            for (var P = [], V = 0, ie = O || 0, ke = Se(l); ie < ke; ie++) {
                var de = l[ie];
                if (Oe(de) && (v.isArray(de) || v.isArguments(de))) {
                    g || (de = $e(de, g, S));
                    var Le = 0,
                        De = de.length;
                    for (P.length += De; Le < De;) P[V++] = de[Le++]
                } else S || (P[V++] = de)
            }
            return P
        };
        v.flatten = function(l, g) {
            return $e(l, g, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, g, S, O) {
            v.isBoolean(g) || (O = S, S = g, g = !1), S != null && (S = Y(S, O));
            for (var P = [], V = [], ie = 0, ke = Se(l); ie < ke; ie++) {
                var de = l[ie],
                    Le = S ? S(de, ie, l) : de;
                g ? ((!ie || V !== Le) && P.push(de), V = Le) : S ? v.contains(V, Le) || (V.push(Le), P.push(de)) : v.contains(P, de) || P.push(de)
            }
            return P
        }, v.union = function() {
            return v.uniq($e(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var g = [], S = arguments.length, O = 0, P = Se(l); O < P; O++) {
                var V = l[O];
                if (!v.contains(g, V)) {
                    for (var ie = 1; ie < S && v.contains(arguments[ie], V); ie++);
                    ie === S && g.push(V)
                }
            }
            return g
        }, v.difference = function(l) {
            var g = $e(arguments, !0, !0, 1);
            return v.filter(l, function(S) {
                return !v.contains(g, S)
            })
        }, v.zip = function() {
            return v.unzip(arguments)
        }, v.unzip = function(l) {
            for (var g = l && v.max(l, Se).length || 0, S = Array(g), O = 0; O < g; O++) S[O] = v.pluck(l, O);
            return S
        }, v.object = function(l, g) {
            for (var S = {}, O = 0, P = Se(l); O < P; O++) g ? S[l[O]] = g[O] : S[l[O][0]] = l[O][1];
            return S
        };

        function Q(l) {
            return function(g, S, O) {
                S = Y(S, O);
                for (var P = Se(g), V = l > 0 ? 0 : P - 1; V >= 0 && V < P; V += l)
                    if (S(g[V], V, g)) return V;
                return -1
            }
        }
        v.findIndex = Q(1), v.findLastIndex = Q(-1), v.sortedIndex = function(l, g, S, O) {
            S = Y(S, O, 1);
            for (var P = S(g), V = 0, ie = Se(l); V < ie;) {
                var ke = Math.floor((V + ie) / 2);
                S(l[ke]) < P ? V = ke + 1 : ie = ke
            }
            return V
        };

        function Fe(l, g, S) {
            return function(O, P, V) {
                var ie = 0,
                    ke = Se(O);
                if (typeof V == "number") l > 0 ? ie = V >= 0 ? V : Math.max(V + ke, ie) : ke = V >= 0 ? Math.min(V + 1, ke) : V + ke + 1;
                else if (S && V && ke) return V = S(O, P), O[V] === P ? V : -1;
                if (P !== P) return V = g(k.call(O, ie, ke), v.isNaN), V >= 0 ? V + ie : -1;
                for (V = l > 0 ? ie : ke - 1; V >= 0 && V < ke; V += l)
                    if (O[V] === P) return V;
                return -1
            }
        }
        v.indexOf = Fe(1, v.findIndex, v.sortedIndex), v.lastIndexOf = Fe(-1, v.findLastIndex), v.range = function(l, g, S) {
            g == null && (g = l || 0, l = 0), S = S || 1;
            for (var O = Math.max(Math.ceil((g - l) / S), 0), P = Array(O), V = 0; V < O; V++, l += S) P[V] = l;
            return P
        };
        var q = function(l, g, S, O, P) {
            if (!(O instanceof g)) return l.apply(S, P);
            var V = oe(l.prototype),
                ie = l.apply(V, P);
            return v.isObject(ie) ? ie : V
        };
        v.bind = function(l, g) {
            if (te && l.bind === te) return te.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                O = function() {
                    return q(l, O, g, this, S.concat(k.call(arguments)))
                };
            return O
        }, v.partial = function(l) {
            var g = k.call(arguments, 1),
                S = function() {
                    for (var O = 0, P = g.length, V = Array(P), ie = 0; ie < P; ie++) V[ie] = g[ie] === v ? arguments[O++] : g[ie];
                    for (; O < arguments.length;) V.push(arguments[O++]);
                    return q(l, S, this, this, V)
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
                var P = S.cache,
                    V = "" + (g ? g.apply(this, arguments) : O);
                return v.has(P, V) || (P[V] = l.apply(this, arguments)), P[V]
            };
            return S.cache = {}, S
        }, v.delay = function(l, g) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, g)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, g, S) {
            var O, P, V, ie = null,
                ke = 0;
            S || (S = {});
            var de = function() {
                ke = S.leading === !1 ? 0 : v.now(), ie = null, V = l.apply(O, P), ie || (O = P = null)
            };
            return function() {
                var Le = v.now();
                !ke && S.leading === !1 && (ke = Le);
                var De = g - (Le - ke);
                return O = this, P = arguments, De <= 0 || De > g ? (ie && (clearTimeout(ie), ie = null), ke = Le, V = l.apply(O, P), ie || (O = P = null)) : !ie && S.trailing !== !1 && (ie = setTimeout(de, De)), V
            }
        }, v.debounce = function(l, g, S) {
            var O, P, V, ie, ke, de = function() {
                var Le = v.now() - ie;
                Le < g && Le >= 0 ? O = setTimeout(de, g - Le) : (O = null, S || (ke = l.apply(V, P), O || (V = P = null)))
            };
            return function() {
                V = this, P = arguments, ie = v.now();
                var Le = S && !O;
                return O || (O = setTimeout(de, g)), Le && (ke = l.apply(V, P), V = P = null), ke
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
        var ae = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Ae = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function be(l, g) {
            var S = Ae.length,
                O = l.constructor,
                P = v.isFunction(O) && O.prototype || c,
                V = "constructor";
            for (v.has(l, V) && !v.contains(g, V) && g.push(V); S--;) V = Ae[S], V in l && l[V] !== P[V] && !v.contains(g, V) && g.push(V)
        }
        v.keys = function(l) {
            if (!v.isObject(l)) return [];
            if (H) return H(l);
            var g = [];
            for (var S in l) v.has(l, S) && g.push(S);
            return ae && be(l, g), g
        }, v.allKeys = function(l) {
            if (!v.isObject(l)) return [];
            var g = [];
            for (var S in l) g.push(S);
            return ae && be(l, g), g
        }, v.values = function(l) {
            for (var g = v.keys(l), S = g.length, O = Array(S), P = 0; P < S; P++) O[P] = l[g[P]];
            return O
        }, v.mapObject = function(l, g, S) {
            g = Y(g, S);
            for (var O = v.keys(l), P = O.length, V = {}, ie, ke = 0; ke < P; ke++) ie = O[ke], V[ie] = g(l[ie], ie, l);
            return V
        }, v.pairs = function(l) {
            for (var g = v.keys(l), S = g.length, O = Array(S), P = 0; P < S; P++) O[P] = [g[P], l[g[P]]];
            return O
        }, v.invert = function(l) {
            for (var g = {}, S = v.keys(l), O = 0, P = S.length; O < P; O++) g[l[S[O]]] = S[O];
            return g
        }, v.functions = v.methods = function(l) {
            var g = [];
            for (var S in l) v.isFunction(l[S]) && g.push(S);
            return g.sort()
        }, v.extend = le(v.allKeys), v.extendOwn = v.assign = le(v.keys), v.findKey = function(l, g, S) {
            g = Y(g, S);
            for (var O = v.keys(l), P, V = 0, ie = O.length; V < ie; V++)
                if (P = O[V], g(l[P], P, l)) return P
        }, v.pick = function(l, g, S) {
            var O = {},
                P = l,
                V, ie;
            if (P == null) return O;
            v.isFunction(g) ? (ie = v.allKeys(P), V = D(g, S)) : (ie = $e(arguments, !1, !1, 1), V = function(it, Ct, rn) {
                return Ct in rn
            }, P = Object(P));
            for (var ke = 0, de = ie.length; ke < de; ke++) {
                var Le = ie[ke],
                    De = P[Le];
                V(De, Le, P) && (O[Le] = De)
            }
            return O
        }, v.omit = function(l, g, S) {
            if (v.isFunction(g)) g = v.negate(g);
            else {
                var O = v.map($e(arguments, !1, !1, 1), String);
                g = function(P, V) {
                    return !v.contains(O, V)
                }
            }
            return v.pick(l, g, S)
        }, v.defaults = le(v.allKeys, !0), v.create = function(l, g) {
            var S = oe(l);
            return g && v.extendOwn(S, g), S
        }, v.clone = function(l) {
            return v.isObject(l) ? v.isArray(l) ? l.slice() : v.extend({}, l) : l
        }, v.tap = function(l, g) {
            return g(l), l
        }, v.isMatch = function(l, g) {
            var S = v.keys(g),
                O = S.length;
            if (l == null) return !O;
            for (var P = Object(l), V = 0; V < O; V++) {
                var ie = S[V];
                if (g[ie] !== P[ie] || !(ie in P)) return !1
            }
            return !0
        };
        var we = function(l, g, S, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof v && (l = l._wrapped), g instanceof v && (g = g._wrapped);
            var P = I.call(l);
            if (P !== I.call(g)) return !1;
            switch (P) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + l == "" + g;
                case "[object Number]":
                    return +l != +l ? +g != +g : +l == 0 ? 1 / +l === 1 / g : +l == +g;
                case "[object Date]":
                case "[object Boolean]":
                    return +l == +g
            }
            var V = P === "[object Array]";
            if (!V) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var ie = l.constructor,
                    ke = g.constructor;
                if (ie !== ke && !(v.isFunction(ie) && ie instanceof ie && v.isFunction(ke) && ke instanceof ke) && "constructor" in l && "constructor" in g) return !1
            }
            S = S || [], O = O || [];
            for (var de = S.length; de--;)
                if (S[de] === l) return O[de] === g;
            if (S.push(l), O.push(g), V) {
                if (de = l.length, de !== g.length) return !1;
                for (; de--;)
                    if (!we(l[de], g[de], S, O)) return !1
            } else {
                var Le = v.keys(l),
                    De;
                if (de = Le.length, v.keys(g).length !== de) return !1;
                for (; de--;)
                    if (De = Le[de], !(v.has(g, De) && we(l[De], g[De], S, O))) return !1
            }
            return S.pop(), O.pop(), !0
        };
        v.isEqual = function(l, g) {
            return we(l, g)
        }, v.isEmpty = function(l) {
            return l == null ? !0 : Oe(l) && (v.isArray(l) || v.isString(l) || v.isArguments(l)) ? l.length === 0 : v.keys(l).length === 0
        }, v.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, v.isArray = $ || function(l) {
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
        }, v.noop = function() {}, v.property = ye, v.propertyOf = function(l) {
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
            g = D(g, S, 1);
            for (var P = 0; P < l; P++) O[P] = g(P);
            return O
        }, v.random = function(l, g) {
            return g == null && (g = l, l = 0), l + Math.floor(Math.random() * (g - l + 1))
        }, v.now = Date.now || function() {
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
            _e = v.invert(he),
            Te = function(l) {
                var g = function(V) {
                        return l[V]
                    },
                    S = "(?:" + v.keys(l).join("|") + ")",
                    O = RegExp(S),
                    P = RegExp(S, "g");
                return function(V) {
                    return V = V == null ? "" : "" + V, O.test(V) ? V.replace(P, g) : V
                }
            };
        v.escape = Te(he), v.unescape = Te(_e), v.result = function(l, g, S) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = S), v.isFunction(O) ? O.call(l) : O
        };
        var Be = 0;
        v.uniqueId = function(l) {
            var g = ++Be + "";
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
            qt = function(l) {
                return "\\" + dt[l]
            };
        v.template = function(l, g, S) {
            !g && S && (g = S), g = v.defaults({}, g, v.templateSettings);
            var O = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                P = 0,
                V = "__p+='";
            l.replace(O, function(Le, De, it, Ct, rn) {
                return V += l.slice(P, rn).replace(Bt, qt), P = rn + Le.length, De ? V += `'+
((__t=(` + De + `))==null?'':_.escape(__t))+
'` : it ? V += `'+
((__t=(` + it + `))==null?'':__t)+
'` : Ct && (V += `';
` + Ct + `
__p+='`), Le
            }), V += `';
`, g.variable || (V = `with(obj||{}){
` + V + `}
`), V = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + V + `return __p;
`;
            try {
                var ie = new Function(g.variable || "obj", "_", V)
            } catch (Le) {
                throw Le.source = V, Le
            }
            var ke = function(Le) {
                    return ie.call(this, Le, v)
                },
                de = g.variable || "obj";
            return ke.source = "function(" + de + `){
` + V + "}", ke
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
            var g = o[l];
            v.prototype[l] = function() {
                var S = this._wrapped;
                return g.apply(S, arguments), (l === "shift" || l === "splice") && S.length === 0 && delete S[0], E(this, S)
            }
        }), v.each(["concat", "join", "slice"], function(l) {
            var g = o[l];
            v.prototype[l] = function() {
                return E(this, g.apply(this._wrapped, arguments))
            }
        }), v.prototype.value = function() {
            return this._wrapped
        }, v.prototype.valueOf = v.prototype.toJSON = v.prototype.value, v.prototype.toString = function() {
            return "" + this._wrapped
        }
    }).call(vt)
})(Ni, Ni.exports);
const at = Ni.exports;
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
            c = i.slice,
            m = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            _ = i.push,
            k = i.indexOf,
            I = {},
            L = I.toString,
            $ = I.hasOwnProperty,
            H = $.toString,
            te = H.call(Object),
            W = {},
            re = function(s) {
                return typeof s == "function" && typeof s.nodeType != "number" && typeof s.item != "function"
            },
            v = function(s) {
                return s != null && s === s.window
            },
            D = e.document,
            Y = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function le(r, s, h) {
            h = h || D;
            var p, w, x = h.createElement("script");
            if (x.text = r, s)
                for (p in Y) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
            h.head.appendChild(x).parentNode.removeChild(x)
        }

        function oe(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? I[L.call(r)] || "object" : typeof r
        }
        var ye = "3.6.0",
            f = function(r, s) {
                return new f.fn.init(r, s)
            };
        f.fn = f.prototype = {
            jquery: ye,
            constructor: f,
            length: 0,
            toArray: function() {
                return c.call(this)
            },
            get: function(r) {
                return r == null ? c.call(this) : r < 0 ? this[r + this.length] : this[r]
            },
            pushStack: function(r) {
                var s = f.merge(this.constructor(), r);
                return s.prevObject = this, s
            },
            each: function(r) {
                return f.each(this, r)
            },
            map: function(r) {
                return this.pushStack(f.map(this, function(s, h) {
                    return r.call(s, h, s)
                }))
            },
            slice: function() {
                return this.pushStack(c.apply(this, arguments))
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
                    h = +r + (r < 0 ? s : 0);
                return this.pushStack(h >= 0 && h < s ? [this[h]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: _,
            sort: i.sort,
            splice: i.splice
        }, f.extend = f.fn.extend = function() {
            var r, s, h, p, w, x, T = arguments[0] || {},
                U = 1,
                G = arguments.length,
                ee = !1;
            for (typeof T == "boolean" && (ee = T, T = arguments[U] || {}, U++), typeof T != "object" && !re(T) && (T = {}), U === G && (T = this, U--); U < G; U++)
                if ((r = arguments[U]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (ee && p && (f.isPlainObject(p) || (w = Array.isArray(p))) ? (h = T[s], w && !Array.isArray(h) ? x = [] : !w && !f.isPlainObject(h) ? x = {} : x = h, w = !1, T[s] = f.extend(ee, x, p)) : p !== void 0 && (T[s] = p));
            return T
        }, f.extend({
            expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(r) {
                throw new Error(r)
            },
            noop: function() {},
            isPlainObject: function(r) {
                var s, h;
                return !r || L.call(r) !== "[object Object]" ? !1 : (s = o(r), s ? (h = $.call(s, "constructor") && s.constructor, typeof h == "function" && H.call(h) === te) : !0)
            },
            isEmptyObject: function(r) {
                var s;
                for (s in r) return !1;
                return !0
            },
            globalEval: function(r, s, h) {
                le(r, {
                    nonce: s && s.nonce
                }, h)
            },
            each: function(r, s) {
                var h, p = 0;
                if (Se(r))
                    for (h = r.length; p < h && s.call(r[p], p, r[p]) !== !1; p++);
                else
                    for (p in r)
                        if (s.call(r[p], p, r[p]) === !1) break;
                return r
            },
            makeArray: function(r, s) {
                var h = s || [];
                return r != null && (Se(Object(r)) ? f.merge(h, typeof r == "string" ? [r] : r) : _.call(h, r)), h
            },
            inArray: function(r, s, h) {
                return s == null ? -1 : k.call(s, r, h)
            },
            merge: function(r, s) {
                for (var h = +s.length, p = 0, w = r.length; p < h; p++) r[w++] = s[p];
                return r.length = w, r
            },
            grep: function(r, s, h) {
                for (var p, w = [], x = 0, T = r.length, U = !h; x < T; x++) p = !s(r[x], x), p !== U && w.push(r[x]);
                return w
            },
            map: function(r, s, h) {
                var p, w, x = 0,
                    T = [];
                if (Se(r))
                    for (p = r.length; x < p; x++) w = s(r[x], x, h), w != null && T.push(w);
                else
                    for (x in r) w = s(r[x], x, h), w != null && T.push(w);
                return m(T)
            },
            guid: 1,
            support: W
        }), typeof Symbol == "function" && (f.fn[Symbol.iterator] = i[Symbol.iterator]), f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            I["[object " + s + "]"] = s.toLowerCase()
        });

        function Se(r) {
            var s = !!r && "length" in r && r.length,
                h = oe(r);
            return re(r) || v(r) ? !1 : h === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, h, p, w, x, T, U, G, ee, ce, Ce, se, ue, Ge, st, je, Ut, Vt, un, St = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Dt = Xi(),
                _i = Xi(),
                Wi = Xi(),
                hn = Xi(),
                Kn = function(R, z) {
                    return R === z && (Ce = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Dn = an.pop,
                vn = an.push,
                Cn = an.push,
                Ss = an.slice,
                Qn = function(R, z) {
                    for (var J = 0, fe = R.length; J < fe; J++)
                        if (R[J] === z) return J;
                    return -1
                },
                Fr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                _s = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                zr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + _s + ")*)|.*)\\)|)",
                ks = new RegExp(gt + "+", "g"),
                ki = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                Ts = new RegExp("^" + gt + "*," + gt + "*"),
                As = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                Bo = new RegExp(gt + "|>"),
                jo = new RegExp(zr),
                Fo = new RegExp("^" + Zn + "$"),
                Yi = {
                    ID: new RegExp("^#(" + Zn + ")"),
                    CLASS: new RegExp("^\\.(" + Zn + ")"),
                    TAG: new RegExp("^(" + Zn + "|[*])"),
                    ATTR: new RegExp("^" + _s),
                    PSEUDO: new RegExp("^" + zr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Fr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                zo = /HTML$/i,
                Uo = /^(?:input|select|textarea|button)$/i,
                Ho = /^h\d$/i,
                Ti = /^[^{]+\{\s*\[native \w/,
                Go = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Ur = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(R, z) {
                    var J = "0x" + R.slice(1) - 65536;
                    return z || (J < 0 ? String.fromCharCode(J + 65536) : String.fromCharCode(J >> 10 | 55296, J & 1023 | 56320))
                },
                Hr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Os = function(R, z) {
                    return z ? R === "\0" ? "\uFFFD" : R.slice(0, -1) + "\\" + R.charCodeAt(R.length - 1).toString(16) + " " : "\\" + R
                },
                Rs = function() {
                    se()
                },
                qo = Zi(function(R) {
                    return R.disabled === !0 && R.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = Ss.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(z, J) {
                        vn.apply(z, Ss.call(J))
                    } : function(z, J) {
                        for (var fe = z.length, ne = 0; z[fe++] = J[ne++];);
                        z.length = fe - 1
                    }
                }
            }

            function _t(R, z, J, fe) {
                var ne, ve, Ee, Re, Me, ze, He, Ye = z && z.ownerDocument,
                    ht = z ? z.nodeType : 9;
                if (J = J || [], typeof R != "string" || !R || ht !== 1 && ht !== 9 && ht !== 11) return J;
                if (!fe && (se(z), z = z || ue, st)) {
                    if (ht !== 11 && (Me = Go.exec(R)))
                        if (ne = Me[1]) {
                            if (ht === 9)
                                if (Ee = z.getElementById(ne)) {
                                    if (Ee.id === ne) return J.push(Ee), J
                                } else return J;
                            else if (Ye && (Ee = Ye.getElementById(ne)) && un(z, Ee) && Ee.id === ne) return J.push(Ee), J
                        } else {
                            if (Me[2]) return Cn.apply(J, z.getElementsByTagName(R)), J;
                            if ((ne = Me[3]) && h.getElementsByClassName && z.getElementsByClassName) return Cn.apply(J, z.getElementsByClassName(ne)), J
                        } if (h.qsa && !hn[R + " "] && (!je || !je.test(R)) && (ht !== 1 || z.nodeName.toLowerCase() !== "object")) {
                        if (He = R, Ye = z, ht === 1 && (Bo.test(R) || As.test(R))) {
                            for (Ye = Ur.test(R) && Gr(z.parentNode) || z, (Ye !== z || !h.scope) && ((Re = z.getAttribute("id")) ? Re = Re.replace(Hr, Os) : z.setAttribute("id", Re = St)), ze = T(R), ve = ze.length; ve--;) ze[ve] = (Re ? "#" + Re : ":scope") + " " + Qi(ze[ve]);
                            He = ze.join(",")
                        }
                        try {
                            return Cn.apply(J, Ye.querySelectorAll(He)), J
                        } catch {
                            hn(R, !0)
                        } finally {
                            Re === St && z.removeAttribute("id")
                        }
                    }
                }
                return G(R.replace(ki, "$1"), z, J, fe)
            }

            function Xi() {
                var R = [];

                function z(J, fe) {
                    return R.push(J + " ") > p.cacheLength && delete z[R.shift()], z[J + " "] = fe
                }
                return z
            }

            function dn(R) {
                return R[St] = !0, R
            }

            function yn(R) {
                var z = ue.createElement("fieldset");
                try {
                    return !!R(z)
                } catch {
                    return !1
                } finally {
                    z.parentNode && z.parentNode.removeChild(z), z = null
                }
            }

            function Ki(R, z) {
                for (var J = R.split("|"), fe = J.length; fe--;) p.attrHandle[J[fe]] = z
            }

            function Ji(R, z) {
                var J = z && R,
                    fe = J && R.nodeType === 1 && z.nodeType === 1 && R.sourceIndex - z.sourceIndex;
                if (fe) return fe;
                if (J) {
                    for (; J = J.nextSibling;)
                        if (J === z) return -1
                }
                return R ? 1 : -1
            }

            function Wo(R) {
                return function(z) {
                    var J = z.nodeName.toLowerCase();
                    return J === "input" && z.type === R
                }
            }

            function Yo(R) {
                return function(z) {
                    var J = z.nodeName.toLowerCase();
                    return (J === "input" || J === "button") && z.type === R
                }
            }

            function Is(R) {
                return function(z) {
                    return "form" in z ? z.parentNode && z.disabled === !1 ? "label" in z ? "label" in z.parentNode ? z.parentNode.disabled === R : z.disabled === R : z.isDisabled === R || z.isDisabled !== !R && qo(z) === R : z.disabled === R : "label" in z ? z.disabled === R : !1
                }
            }

            function An(R) {
                return dn(function(z) {
                    return z = +z, dn(function(J, fe) {
                        for (var ne, ve = R([], J.length, z), Ee = ve.length; Ee--;) J[ne = ve[Ee]] && (J[ne] = !(fe[ne] = J[ne]))
                    })
                })
            }

            function Gr(R) {
                return R && typeof R.getElementsByTagName < "u" && R
            }
            h = _t.support = {}, x = _t.isXML = function(R) {
                var z = R && R.namespaceURI,
                    J = R && (R.ownerDocument || R).documentElement;
                return !zo.test(z || J && J.nodeName || "HTML")
            }, se = _t.setDocument = function(R) {
                var z, J, fe = R ? R.ownerDocument || R : et;
                return fe == ue || fe.nodeType !== 9 || !fe.documentElement || (ue = fe, Ge = ue.documentElement, st = !x(ue), et != ue && (J = ue.defaultView) && J.top !== J && (J.addEventListener ? J.addEventListener("unload", Rs, !1) : J.attachEvent && J.attachEvent("onunload", Rs)), h.scope = yn(function(ne) {
                    return Ge.appendChild(ne).appendChild(ue.createElement("div")), typeof ne.querySelectorAll < "u" && !ne.querySelectorAll(":scope fieldset div").length
                }), h.attributes = yn(function(ne) {
                    return ne.className = "i", !ne.getAttribute("className")
                }), h.getElementsByTagName = yn(function(ne) {
                    return ne.appendChild(ue.createComment("")), !ne.getElementsByTagName("*").length
                }), h.getElementsByClassName = Ti.test(ue.getElementsByClassName), h.getById = yn(function(ne) {
                    return Ge.appendChild(ne).id = St, !ue.getElementsByName || !ue.getElementsByName(St).length
                }), h.getById ? (p.filter.ID = function(ne) {
                    var ve = ne.replace(Tn, xn);
                    return function(Ee) {
                        return Ee.getAttribute("id") === ve
                    }
                }, p.find.ID = function(ne, ve) {
                    if (typeof ve.getElementById < "u" && st) {
                        var Ee = ve.getElementById(ne);
                        return Ee ? [Ee] : []
                    }
                }) : (p.filter.ID = function(ne) {
                    var ve = ne.replace(Tn, xn);
                    return function(Ee) {
                        var Re = typeof Ee.getAttributeNode < "u" && Ee.getAttributeNode("id");
                        return Re && Re.value === ve
                    }
                }, p.find.ID = function(ne, ve) {
                    if (typeof ve.getElementById < "u" && st) {
                        var Ee, Re, Me, ze = ve.getElementById(ne);
                        if (ze) {
                            if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ne) return [ze];
                            for (Me = ve.getElementsByName(ne), Re = 0; ze = Me[Re++];)
                                if (Ee = ze.getAttributeNode("id"), Ee && Ee.value === ne) return [ze]
                        }
                        return []
                    }
                }), p.find.TAG = h.getElementsByTagName ? function(ne, ve) {
                    if (typeof ve.getElementsByTagName < "u") return ve.getElementsByTagName(ne);
                    if (h.qsa) return ve.querySelectorAll(ne)
                } : function(ne, ve) {
                    var Ee, Re = [],
                        Me = 0,
                        ze = ve.getElementsByTagName(ne);
                    if (ne === "*") {
                        for (; Ee = ze[Me++];) Ee.nodeType === 1 && Re.push(Ee);
                        return Re
                    }
                    return ze
                }, p.find.CLASS = h.getElementsByClassName && function(ne, ve) {
                    if (typeof ve.getElementsByClassName < "u" && st) return ve.getElementsByClassName(ne)
                }, Ut = [], je = [], (h.qsa = Ti.test(ue.querySelectorAll)) && (yn(function(ne) {
                    var ve;
                    Ge.appendChild(ne).innerHTML = "<a id='" + St + "'></a><select id='" + St + "-\r\\' msallowcapture=''><option selected=''></option></select>", ne.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ne.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + Fr + ")"), ne.querySelectorAll("[id~=" + St + "-]").length || je.push("~="), ve = ue.createElement("input"), ve.setAttribute("name", ""), ne.appendChild(ve), ne.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ne.querySelectorAll(":checked").length || je.push(":checked"), ne.querySelectorAll("a#" + St + "+*").length || je.push(".#.+[+~]"), ne.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                }), yn(function(ne) {
                    ne.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var ve = ue.createElement("input");
                    ve.setAttribute("type", "hidden"), ne.appendChild(ve).setAttribute("name", "D"), ne.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ne.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), Ge.appendChild(ne).disabled = !0, ne.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ne.querySelectorAll("*,:x"), je.push(",.*:")
                })), (h.matchesSelector = Ti.test(Vt = Ge.matches || Ge.webkitMatchesSelector || Ge.mozMatchesSelector || Ge.oMatchesSelector || Ge.msMatchesSelector)) && yn(function(ne) {
                    h.disconnectedMatch = Vt.call(ne, "*"), Vt.call(ne, "[s!='']:x"), Ut.push("!=", zr)
                }), je = je.length && new RegExp(je.join("|")), Ut = Ut.length && new RegExp(Ut.join("|")), z = Ti.test(Ge.compareDocumentPosition), un = z || Ti.test(Ge.contains) ? function(ne, ve) {
                    var Ee = ne.nodeType === 9 ? ne.documentElement : ne,
                        Re = ve && ve.parentNode;
                    return ne === Re || !!(Re && Re.nodeType === 1 && (Ee.contains ? Ee.contains(Re) : ne.compareDocumentPosition && ne.compareDocumentPosition(Re) & 16))
                } : function(ne, ve) {
                    if (ve) {
                        for (; ve = ve.parentNode;)
                            if (ve === ne) return !0
                    }
                    return !1
                }, Kn = z ? function(ne, ve) {
                    if (ne === ve) return Ce = !0, 0;
                    var Ee = !ne.compareDocumentPosition - !ve.compareDocumentPosition;
                    return Ee || (Ee = (ne.ownerDocument || ne) == (ve.ownerDocument || ve) ? ne.compareDocumentPosition(ve) : 1, Ee & 1 || !h.sortDetached && ve.compareDocumentPosition(ne) === Ee ? ne == ue || ne.ownerDocument == et && un(et, ne) ? -1 : ve == ue || ve.ownerDocument == et && un(et, ve) ? 1 : ce ? Qn(ce, ne) - Qn(ce, ve) : 0 : Ee & 4 ? -1 : 1)
                } : function(ne, ve) {
                    if (ne === ve) return Ce = !0, 0;
                    var Ee, Re = 0,
                        Me = ne.parentNode,
                        ze = ve.parentNode,
                        He = [ne],
                        Ye = [ve];
                    if (!Me || !ze) return ne == ue ? -1 : ve == ue ? 1 : Me ? -1 : ze ? 1 : ce ? Qn(ce, ne) - Qn(ce, ve) : 0;
                    if (Me === ze) return Ji(ne, ve);
                    for (Ee = ne; Ee = Ee.parentNode;) He.unshift(Ee);
                    for (Ee = ve; Ee = Ee.parentNode;) Ye.unshift(Ee);
                    for (; He[Re] === Ye[Re];) Re++;
                    return Re ? Ji(He[Re], Ye[Re]) : He[Re] == et ? -1 : Ye[Re] == et ? 1 : 0
                }), ue
            }, _t.matches = function(R, z) {
                return _t(R, null, null, z)
            }, _t.matchesSelector = function(R, z) {
                if (se(R), h.matchesSelector && st && !hn[z + " "] && (!Ut || !Ut.test(z)) && (!je || !je.test(z))) try {
                    var J = Vt.call(R, z);
                    if (J || h.disconnectedMatch || R.document && R.document.nodeType !== 11) return J
                } catch {
                    hn(z, !0)
                }
                return _t(z, ue, null, [R]).length > 0
            }, _t.contains = function(R, z) {
                return (R.ownerDocument || R) != ue && se(R), un(R, z)
            }, _t.attr = function(R, z) {
                (R.ownerDocument || R) != ue && se(R);
                var J = p.attrHandle[z.toLowerCase()],
                    fe = J && Jn.call(p.attrHandle, z.toLowerCase()) ? J(R, z, !st) : void 0;
                return fe !== void 0 ? fe : h.attributes || !st ? R.getAttribute(z) : (fe = R.getAttributeNode(z)) && fe.specified ? fe.value : null
            }, _t.escape = function(R) {
                return (R + "").replace(Hr, Os)
            }, _t.error = function(R) {
                throw new Error("Syntax error, unrecognized expression: " + R)
            }, _t.uniqueSort = function(R) {
                var z, J = [],
                    fe = 0,
                    ne = 0;
                if (Ce = !h.detectDuplicates, ce = !h.sortStable && R.slice(0), R.sort(Kn), Ce) {
                    for (; z = R[ne++];) z === R[ne] && (fe = J.push(ne));
                    for (; fe--;) R.splice(J[fe], 1)
                }
                return ce = null, R
            }, w = _t.getText = function(R) {
                var z, J = "",
                    fe = 0,
                    ne = R.nodeType;
                if (ne) {
                    if (ne === 1 || ne === 9 || ne === 11) {
                        if (typeof R.textContent == "string") return R.textContent;
                        for (R = R.firstChild; R; R = R.nextSibling) J += w(R)
                    } else if (ne === 3 || ne === 4) return R.nodeValue
                } else
                    for (; z = R[fe++];) J += w(z);
                return J
            }, p = _t.selectors = {
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
                        return R[1] = R[1].toLowerCase(), R[1].slice(0, 3) === "nth" ? (R[3] || _t.error(R[0]), R[4] = +(R[4] ? R[5] + (R[6] || 1) : 2 * (R[3] === "even" || R[3] === "odd")), R[5] = +(R[7] + R[8] || R[3] === "odd")) : R[3] && _t.error(R[0]), R
                    },
                    PSEUDO: function(R) {
                        var z, J = !R[6] && R[2];
                        return Yi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : J && jo.test(J) && (z = T(J, !0)) && (z = J.indexOf(")", J.length - z) - J.length) && (R[0] = R[0].slice(0, z), R[2] = J.slice(0, z)), R.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(R) {
                        var z = R.replace(Tn, xn).toLowerCase();
                        return R === "*" ? function() {
                            return !0
                        } : function(J) {
                            return J.nodeName && J.nodeName.toLowerCase() === z
                        }
                    },
                    CLASS: function(R) {
                        var z = Dt[R + " "];
                        return z || (z = new RegExp("(^|" + gt + ")" + R + "(" + gt + "|$)")) && Dt(R, function(J) {
                            return z.test(typeof J.className == "string" && J.className || typeof J.getAttribute < "u" && J.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(R, z, J) {
                        return function(fe) {
                            var ne = _t.attr(fe, R);
                            return ne == null ? z === "!=" : z ? (ne += "", z === "=" ? ne === J : z === "!=" ? ne !== J : z === "^=" ? J && ne.indexOf(J) === 0 : z === "*=" ? J && ne.indexOf(J) > -1 : z === "$=" ? J && ne.slice(-J.length) === J : z === "~=" ? (" " + ne.replace(ks, " ") + " ").indexOf(J) > -1 : z === "|=" ? ne === J || ne.slice(0, J.length + 1) === J + "-" : !1) : !0
                        }
                    },
                    CHILD: function(R, z, J, fe, ne) {
                        var ve = R.slice(0, 3) !== "nth",
                            Ee = R.slice(-4) !== "last",
                            Re = z === "of-type";
                        return fe === 1 && ne === 0 ? function(Me) {
                            return !!Me.parentNode
                        } : function(Me, ze, He) {
                            var Ye, ht, At, We, Ht, Qt, fn = ve !== Ee ? "nextSibling" : "previousSibling",
                                Ot = Me.parentNode,
                                u = Re && Me.nodeName.toLowerCase(),
                                d = !He && !Re,
                                b = !1;
                            if (Ot) {
                                if (ve) {
                                    for (; fn;) {
                                        for (We = Me; We = We[fn];)
                                            if (Re ? We.nodeName.toLowerCase() === u : We.nodeType === 1) return !1;
                                        Qt = fn = R === "only" && !Qt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Qt = [Ee ? Ot.firstChild : Ot.lastChild], Ee && d) {
                                    for (We = Ot, At = We[St] || (We[St] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), Ye = ht[R] || [], Ht = Ye[0] === on && Ye[1], b = Ht && Ye[2], We = Ht && Ot.childNodes[Ht]; We = ++Ht && We && We[fn] || (b = Ht = 0) || Qt.pop();)
                                        if (We.nodeType === 1 && ++b && We === Me) {
                                            ht[R] = [on, Ht, b];
                                            break
                                        }
                                } else if (d && (We = Me, At = We[St] || (We[St] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), Ye = ht[R] || [], Ht = Ye[0] === on && Ye[1], b = Ht), b === !1)
                                    for (;
                                        (We = ++Ht && We && We[fn] || (b = Ht = 0) || Qt.pop()) && !((Re ? We.nodeName.toLowerCase() === u : We.nodeType === 1) && ++b && (d && (At = We[St] || (We[St] = {}), ht = At[We.uniqueID] || (At[We.uniqueID] = {}), ht[R] = [on, b]), We === Me)););
                                return b -= ne, b === fe || b % fe === 0 && b / fe >= 0
                            }
                        }
                    },
                    PSEUDO: function(R, z) {
                        var J, fe = p.pseudos[R] || p.setFilters[R.toLowerCase()] || _t.error("unsupported pseudo: " + R);
                        return fe[St] ? fe(z) : fe.length > 1 ? (J = [R, R, "", z], p.setFilters.hasOwnProperty(R.toLowerCase()) ? dn(function(ne, ve) {
                            for (var Ee, Re = fe(ne, z), Me = Re.length; Me--;) Ee = Qn(ne, Re[Me]), ne[Ee] = !(ve[Ee] = Re[Me])
                        }) : function(ne) {
                            return fe(ne, 0, J)
                        }) : fe
                    }
                },
                pseudos: {
                    not: dn(function(R) {
                        var z = [],
                            J = [],
                            fe = U(R.replace(ki, "$1"));
                        return fe[St] ? dn(function(ne, ve, Ee, Re) {
                            for (var Me, ze = fe(ne, null, Re, []), He = ne.length; He--;)(Me = ze[He]) && (ne[He] = !(ve[He] = Me))
                        }) : function(ne, ve, Ee) {
                            return z[0] = ne, fe(z, null, Ee, J), z[0] = null, !J.pop()
                        }
                    }),
                    has: dn(function(R) {
                        return function(z) {
                            return _t(R, z).length > 0
                        }
                    }),
                    contains: dn(function(R) {
                        return R = R.replace(Tn, xn),
                            function(z) {
                                return (z.textContent || w(z)).indexOf(R) > -1
                            }
                    }),
                    lang: dn(function(R) {
                        return Fo.test(R || "") || _t.error("unsupported lang: " + R), R = R.replace(Tn, xn).toLowerCase(),
                            function(z) {
                                var J;
                                do
                                    if (J = st ? z.lang : z.getAttribute("xml:lang") || z.getAttribute("lang")) return J = J.toLowerCase(), J === R || J.indexOf(R + "-") === 0; while ((z = z.parentNode) && z.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(R) {
                        var z = r.location && r.location.hash;
                        return z && z.slice(1) === R.id
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
                        var z = R.nodeName.toLowerCase();
                        return z === "input" && !!R.checked || z === "option" && !!R.selected
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
                        return Ho.test(R.nodeName)
                    },
                    input: function(R) {
                        return Uo.test(R.nodeName)
                    },
                    button: function(R) {
                        var z = R.nodeName.toLowerCase();
                        return z === "input" && R.type === "button" || z === "button"
                    },
                    text: function(R) {
                        var z;
                        return R.nodeName.toLowerCase() === "input" && R.type === "text" && ((z = R.getAttribute("type")) == null || z.toLowerCase() === "text")
                    },
                    first: An(function() {
                        return [0]
                    }),
                    last: An(function(R, z) {
                        return [z - 1]
                    }),
                    eq: An(function(R, z, J) {
                        return [J < 0 ? J + z : J]
                    }),
                    even: An(function(R, z) {
                        for (var J = 0; J < z; J += 2) R.push(J);
                        return R
                    }),
                    odd: An(function(R, z) {
                        for (var J = 1; J < z; J += 2) R.push(J);
                        return R
                    }),
                    lt: An(function(R, z, J) {
                        for (var fe = J < 0 ? J + z : J > z ? z : J; --fe >= 0;) R.push(fe);
                        return R
                    }),
                    gt: An(function(R, z, J) {
                        for (var fe = J < 0 ? J + z : J; ++fe < z;) R.push(fe);
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
                }) p.pseudos[s] = Yo(s);

            function Ls() {}
            Ls.prototype = p.filters = p.pseudos, p.setFilters = new Ls, T = _t.tokenize = function(R, z) {
                var J, fe, ne, ve, Ee, Re, Me, ze = _i[R + " "];
                if (ze) return z ? 0 : ze.slice(0);
                for (Ee = R, Re = [], Me = p.preFilter; Ee;) {
                    (!J || (fe = Ts.exec(Ee))) && (fe && (Ee = Ee.slice(fe[0].length) || Ee), Re.push(ne = [])), J = !1, (fe = As.exec(Ee)) && (J = fe.shift(), ne.push({
                        value: J,
                        type: fe[0].replace(ki, " ")
                    }), Ee = Ee.slice(J.length));
                    for (ve in p.filter)(fe = Yi[ve].exec(Ee)) && (!Me[ve] || (fe = Me[ve](fe))) && (J = fe.shift(), ne.push({
                        value: J,
                        type: ve,
                        matches: fe
                    }), Ee = Ee.slice(J.length));
                    if (!J) break
                }
                return z ? Ee.length : Ee ? _t.error(R) : _i(R, Re).slice(0)
            };

            function Qi(R) {
                for (var z = 0, J = R.length, fe = ""; z < J; z++) fe += R[z].value;
                return fe
            }

            function Zi(R, z, J) {
                var fe = z.dir,
                    ne = z.next,
                    ve = ne || fe,
                    Ee = J && ve === "parentNode",
                    Re = ft++;
                return z.first ? function(Me, ze, He) {
                    for (; Me = Me[fe];)
                        if (Me.nodeType === 1 || Ee) return R(Me, ze, He);
                    return !1
                } : function(Me, ze, He) {
                    var Ye, ht, At, We = [on, Re];
                    if (He) {
                        for (; Me = Me[fe];)
                            if ((Me.nodeType === 1 || Ee) && R(Me, ze, He)) return !0
                    } else
                        for (; Me = Me[fe];)
                            if (Me.nodeType === 1 || Ee)
                                if (At = Me[St] || (Me[St] = {}), ht = At[Me.uniqueID] || (At[Me.uniqueID] = {}), ne && ne === Me.nodeName.toLowerCase()) Me = Me[fe] || Me;
                                else {
                                    if ((Ye = ht[ve]) && Ye[0] === on && Ye[1] === Re) return We[2] = Ye[2];
                                    if (ht[ve] = We, We[2] = R(Me, ze, He)) return !0
                                } return !1
                }
            }

            function er(R) {
                return R.length > 1 ? function(z, J, fe) {
                    for (var ne = R.length; ne--;)
                        if (!R[ne](z, J, fe)) return !1;
                    return !0
                } : R[0]
            }

            function Xo(R, z, J) {
                for (var fe = 0, ne = z.length; fe < ne; fe++) _t(R, z[fe], J);
                return J
            }

            function tr(R, z, J, fe, ne) {
                for (var ve, Ee = [], Re = 0, Me = R.length, ze = z != null; Re < Me; Re++)(ve = R[Re]) && (!J || J(ve, fe, ne)) && (Ee.push(ve), ze && z.push(Re));
                return Ee
            }

            function qr(R, z, J, fe, ne, ve) {
                return fe && !fe[St] && (fe = qr(fe)), ne && !ne[St] && (ne = qr(ne, ve)), dn(function(Ee, Re, Me, ze) {
                    var He, Ye, ht, At = [],
                        We = [],
                        Ht = Re.length,
                        Qt = Ee || Xo(z || "*", Me.nodeType ? [Me] : Me, []),
                        fn = R && (Ee || !z) ? tr(Qt, At, R, Me, ze) : Qt,
                        Ot = J ? ne || (Ee ? R : Ht || fe) ? [] : Re : fn;
                    if (J && J(fn, Ot, Me, ze), fe)
                        for (He = tr(Ot, We), fe(He, [], Me, ze), Ye = He.length; Ye--;)(ht = He[Ye]) && (Ot[We[Ye]] = !(fn[We[Ye]] = ht));
                    if (Ee) {
                        if (ne || R) {
                            if (ne) {
                                for (He = [], Ye = Ot.length; Ye--;)(ht = Ot[Ye]) && He.push(fn[Ye] = ht);
                                ne(null, Ot = [], He, ze)
                            }
                            for (Ye = Ot.length; Ye--;)(ht = Ot[Ye]) && (He = ne ? Qn(Ee, ht) : At[Ye]) > -1 && (Ee[He] = !(Re[He] = ht))
                        }
                    } else Ot = tr(Ot === Re ? Ot.splice(Ht, Ot.length) : Ot), ne ? ne(null, Re, Ot, ze) : Cn.apply(Re, Ot)
                })
            }

            function Wr(R) {
                for (var z, J, fe, ne = R.length, ve = p.relative[R[0].type], Ee = ve || p.relative[" "], Re = ve ? 1 : 0, Me = Zi(function(Ye) {
                        return Ye === z
                    }, Ee, !0), ze = Zi(function(Ye) {
                        return Qn(z, Ye) > -1
                    }, Ee, !0), He = [function(Ye, ht, At) {
                        var We = !ve && (At || ht !== ee) || ((z = ht).nodeType ? Me(Ye, ht, At) : ze(Ye, ht, At));
                        return z = null, We
                    }]; Re < ne; Re++)
                    if (J = p.relative[R[Re].type]) He = [Zi(er(He), J)];
                    else {
                        if (J = p.filter[R[Re].type].apply(null, R[Re].matches), J[St]) {
                            for (fe = ++Re; fe < ne && !p.relative[R[fe].type]; fe++);
                            return qr(Re > 1 && er(He), Re > 1 && Qi(R.slice(0, Re - 1).concat({
                                value: R[Re - 2].type === " " ? "*" : ""
                            })).replace(ki, "$1"), J, Re < fe && Wr(R.slice(Re, fe)), fe < ne && Wr(R = R.slice(fe)), fe < ne && Qi(R))
                        }
                        He.push(J)
                    } return er(He)
            }

            function Ds(R, z) {
                var J = z.length > 0,
                    fe = R.length > 0,
                    ne = function(ve, Ee, Re, Me, ze) {
                        var He, Ye, ht, At = 0,
                            We = "0",
                            Ht = ve && [],
                            Qt = [],
                            fn = ee,
                            Ot = ve || fe && p.find.TAG("*", ze),
                            u = on += fn == null ? 1 : Math.random() || .1,
                            d = Ot.length;
                        for (ze && (ee = Ee == ue || Ee || ze); We !== d && (He = Ot[We]) != null; We++) {
                            if (fe && He) {
                                for (Ye = 0, !Ee && He.ownerDocument != ue && (se(He), Re = !st); ht = R[Ye++];)
                                    if (ht(He, Ee || ue, Re)) {
                                        Me.push(He);
                                        break
                                    } ze && (on = u)
                            }
                            J && ((He = !ht && He) && At--, ve && Ht.push(He))
                        }
                        if (At += We, J && We !== At) {
                            for (Ye = 0; ht = z[Ye++];) ht(Ht, Qt, Ee, Re);
                            if (ve) {
                                if (At > 0)
                                    for (; We--;) Ht[We] || Qt[We] || (Qt[We] = Dn.call(Me));
                                Qt = tr(Qt)
                            }
                            Cn.apply(Me, Qt), ze && !ve && Qt.length > 0 && At + z.length > 1 && _t.uniqueSort(Me)
                        }
                        return ze && (on = u, ee = fn), Ht
                    };
                return J ? dn(ne) : ne
            }
            return U = _t.compile = function(R, z) {
                var J, fe = [],
                    ne = [],
                    ve = Wi[R + " "];
                if (!ve) {
                    for (z || (z = T(R)), J = z.length; J--;) ve = Wr(z[J]), ve[St] ? fe.push(ve) : ne.push(ve);
                    ve = Wi(R, Ds(ne, fe)), ve.selector = R
                }
                return ve
            }, G = _t.select = function(R, z, J, fe) {
                var ne, ve, Ee, Re, Me, ze = typeof R == "function" && R,
                    He = !fe && T(R = ze.selector || R);
                if (J = J || [], He.length === 1) {
                    if (ve = He[0] = He[0].slice(0), ve.length > 2 && (Ee = ve[0]).type === "ID" && z.nodeType === 9 && st && p.relative[ve[1].type]) {
                        if (z = (p.find.ID(Ee.matches[0].replace(Tn, xn), z) || [])[0], z) ze && (z = z.parentNode);
                        else return J;
                        R = R.slice(ve.shift().value.length)
                    }
                    for (ne = Yi.needsContext.test(R) ? 0 : ve.length; ne-- && (Ee = ve[ne], !p.relative[Re = Ee.type]);)
                        if ((Me = p.find[Re]) && (fe = Me(Ee.matches[0].replace(Tn, xn), Ur.test(ve[0].type) && Gr(z.parentNode) || z))) {
                            if (ve.splice(ne, 1), R = fe.length && Qi(ve), !R) return Cn.apply(J, fe), J;
                            break
                        }
                }
                return (ze || U(R, He))(fe, z, !st, J, !z || Ur.test(R) && Gr(z.parentNode) || z), J
            }, h.sortStable = St.split("").sort(Kn).join("") === St, h.detectDuplicates = !!Ce, se(), h.sortDetached = yn(function(R) {
                return R.compareDocumentPosition(ue.createElement("fieldset")) & 1
            }), yn(function(R) {
                return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
            }) || Ki("type|href|height|width", function(R, z, J) {
                if (!J) return R.getAttribute(z, z.toLowerCase() === "type" ? 1 : 2)
            }), (!h.attributes || !yn(function(R) {
                return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
            })) && Ki("value", function(R, z, J) {
                if (!J && R.nodeName.toLowerCase() === "input") return R.defaultValue
            }), yn(function(R) {
                return R.getAttribute("disabled") == null
            }) || Ki(Fr, function(R, z, J) {
                var fe;
                if (!J) return R[z] === !0 ? z.toLowerCase() : (fe = R.getAttributeNode(z)) && fe.specified ? fe.value : null
            }), _t
        }(e);
        f.find = Oe, f.expr = Oe.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = Oe.uniqueSort, f.text = Oe.getText, f.isXMLDoc = Oe.isXML, f.contains = Oe.contains, f.escapeSelector = Oe.escape;
        var Pe = function(r, s, h) {
                for (var p = [], w = h !== void 0;
                    (r = r[s]) && r.nodeType !== 9;)
                    if (r.nodeType === 1) {
                        if (w && f(r).is(h)) break;
                        p.push(r)
                    } return p
            },
            lt = function(r, s) {
                for (var h = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && h.push(r);
                return h
            },
            $e = f.expr.match.needsContext;

        function Q(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function q(r, s, h) {
            return re(s) ? f.grep(r, function(p, w) {
                return !!s.call(p, w, p) !== h
            }) : s.nodeType ? f.grep(r, function(p) {
                return p === s !== h
            }) : typeof s != "string" ? f.grep(r, function(p) {
                return k.call(s, p) > -1 !== h
            }) : f.filter(s, r, h)
        }
        f.filter = function(r, s, h) {
            var p = s[0];
            return h && (r = ":not(" + r + ")"), s.length === 1 && p.nodeType === 1 ? f.find.matchesSelector(p, r) ? [p] : [] : f.find.matches(r, f.grep(s, function(w) {
                return w.nodeType === 1
            }))
        }, f.fn.extend({
            find: function(r) {
                var s, h, p = this.length,
                    w = this;
                if (typeof r != "string") return this.pushStack(f(r).filter(function() {
                    for (s = 0; s < p; s++)
                        if (f.contains(w[s], this)) return !0
                }));
                for (h = this.pushStack([]), s = 0; s < p; s++) f.find(r, w[s], h);
                return p > 1 ? f.uniqueSort(h) : h
            },
            filter: function(r) {
                return this.pushStack(q(this, r || [], !1))
            },
            not: function(r) {
                return this.pushStack(q(this, r || [], !0))
            },
            is: function(r) {
                return !!q(this, typeof r == "string" && $e.test(r) ? f(r) : r || [], !1).length
            }
        });
        var ae, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            be = f.fn.init = function(r, s, h) {
                var p, w;
                if (!r) return this;
                if (h = h || ae, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof f ? s[0] : s, f.merge(this, f.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : D, !0)), Fe.test(p[1]) && f.isPlainObject(s))
                                for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return w = D.getElementById(p[2]), w && (this[0] = w, this.length = 1), this;
                else return !s || s.jquery ? (s || h).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (re(r)) return h.ready !== void 0 ? h.ready(r) : r(f)
                }
                return f.makeArray(r, this)
            };
        be.prototype = f.fn, ae = f(D);
        var we = /^(?:parents|prev(?:Until|All))/,
            he = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        f.fn.extend({
            has: function(r) {
                var s = f(r, this),
                    h = s.length;
                return this.filter(function() {
                    for (var p = 0; p < h; p++)
                        if (f.contains(this, s[p])) return !0
                })
            },
            closest: function(r, s) {
                var h, p = 0,
                    w = this.length,
                    x = [],
                    T = typeof r != "string" && f(r);
                if (!$e.test(r)) {
                    for (; p < w; p++)
                        for (h = this[p]; h && h !== s; h = h.parentNode)
                            if (h.nodeType < 11 && (T ? T.index(h) > -1 : h.nodeType === 1 && f.find.matchesSelector(h, r))) {
                                x.push(h);
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
            parentsUntil: function(r, s, h) {
                return Pe(r, "parentNode", h)
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
            nextUntil: function(r, s, h) {
                return Pe(r, "nextSibling", h)
            },
            prevUntil: function(r, s, h) {
                return Pe(r, "previousSibling", h)
            },
            siblings: function(r) {
                return lt((r.parentNode || {}).firstChild, r)
            },
            children: function(r) {
                return lt(r.firstChild)
            },
            contents: function(r) {
                return r.contentDocument != null && o(r.contentDocument) ? r.contentDocument : (Q(r, "template") && (r = r.content || r), f.merge([], r.childNodes))
            }
        }, function(r, s) {
            f.fn[r] = function(h, p) {
                var w = f.map(this, s, h);
                return r.slice(-5) !== "Until" && (p = h), p && typeof p == "string" && (w = f.filter(p, w)), this.length > 1 && (he[r] || f.uniqueSort(w), we.test(r) && w.reverse()), this.pushStack(w)
            }
        });
        var Te = /[^\x20\t\r\n\f]+/g;

        function Be(r) {
            var s = {};
            return f.each(r.match(Te) || [], function(h, p) {
                s[p] = !0
            }), s
        }
        f.Callbacks = function(r) {
            r = typeof r == "string" ? Be(r) : f.extend({}, r);
            var s, h, p, w, x = [],
                T = [],
                U = -1,
                G = function() {
                    for (w = w || r.once, p = s = !0; T.length; U = -1)
                        for (h = T.shift(); ++U < x.length;) x[U].apply(h[0], h[1]) === !1 && r.stopOnFalse && (U = x.length, h = !1);
                    r.memory || (h = !1), s = !1, w && (h ? x = [] : x = "")
                },
                ee = {
                    add: function() {
                        return x && (h && !s && (U = x.length - 1, T.push(h)), function ce(Ce) {
                            f.each(Ce, function(se, ue) {
                                re(ue) ? (!r.unique || !ee.has(ue)) && x.push(ue) : ue && ue.length && oe(ue) !== "string" && ce(ue)
                            })
                        }(arguments), h && !s && G()), this
                    },
                    remove: function() {
                        return f.each(arguments, function(ce, Ce) {
                            for (var se;
                                (se = f.inArray(Ce, x, se)) > -1;) x.splice(se, 1), se <= U && U--
                        }), this
                    },
                    has: function(ce) {
                        return ce ? f.inArray(ce, x) > -1 : x.length > 0
                    },
                    empty: function() {
                        return x && (x = []), this
                    },
                    disable: function() {
                        return w = T = [], x = h = "", this
                    },
                    disabled: function() {
                        return !x
                    },
                    lock: function() {
                        return w = T = [], !h && !s && (x = h = ""), this
                    },
                    locked: function() {
                        return !!w
                    },
                    fireWith: function(ce, Ce) {
                        return w || (Ce = Ce || [], Ce = [ce, Ce.slice ? Ce.slice() : Ce], T.push(Ce), s || G()), this
                    },
                    fire: function() {
                        return ee.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!p
                    }
                };
            return ee
        };

        function Ke(r) {
            return r
        }

        function dt(r) {
            throw r
        }

        function Bt(r, s, h, p) {
            var w;
            try {
                r && re(w = r.promise) ? w.call(r).done(s).fail(h) : r && re(w = r.then) ? w.call(r, s, h) : s.apply(void 0, [r].slice(p))
            } catch (x) {
                h.apply(void 0, [x])
            }
        }
        f.extend({
            Deferred: function(r) {
                var s = [
                        ["notify", "progress", f.Callbacks("memory"), f.Callbacks("memory"), 2],
                        ["resolve", "done", f.Callbacks("once memory"), f.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", f.Callbacks("once memory"), f.Callbacks("once memory"), 1, "rejected"]
                    ],
                    h = "pending",
                    p = {
                        state: function() {
                            return h
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
                                f.each(s, function(U, G) {
                                    var ee = re(x[G[4]]) && x[G[4]];
                                    w[G[1]](function() {
                                        var ce = ee && ee.apply(this, arguments);
                                        ce && re(ce.promise) ? ce.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[G[0] + "With"](this, ee ? [ce] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, U) {
                            var G = 0;

                            function ee(ce, Ce, se, ue) {
                                return function() {
                                    var Ge = this,
                                        st = arguments,
                                        je = function() {
                                            var Vt, un;
                                            if (!(ce < G)) {
                                                if (Vt = se.apply(Ge, st), Vt === Ce.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Vt && (typeof Vt == "object" || typeof Vt == "function") && Vt.then, re(un) ? ue ? un.call(Vt, ee(G, Ce, Ke, ue), ee(G, Ce, dt, ue)) : (G++, un.call(Vt, ee(G, Ce, Ke, ue), ee(G, Ce, dt, ue), ee(G, Ce, Ke, Ce.notifyWith))) : (se !== Ke && (Ge = void 0, st = [Vt]), (ue || Ce.resolveWith)(Ge, st))
                                            }
                                        },
                                        Ut = ue ? je : function() {
                                            try {
                                                je()
                                            } catch (Vt) {
                                                f.Deferred.exceptionHook && f.Deferred.exceptionHook(Vt, Ut.stackTrace), ce + 1 >= G && (se !== dt && (Ge = void 0, st = [Vt]), Ce.rejectWith(Ge, st))
                                            }
                                        };
                                    ce ? Ut() : (f.Deferred.getStackHook && (Ut.stackTrace = f.Deferred.getStackHook()), e.setTimeout(Ut))
                                }
                            }
                            return f.Deferred(function(ce) {
                                s[0][3].add(ee(0, ce, re(U) ? U : Ke, ce.notifyWith)), s[1][3].add(ee(0, ce, re(x) ? x : Ke)), s[2][3].add(ee(0, ce, re(T) ? T : dt))
                            }).promise()
                        },
                        promise: function(x) {
                            return x != null ? f.extend(x, p) : p
                        }
                    },
                    w = {};
                return f.each(s, function(x, T) {
                    var U = T[2],
                        G = T[5];
                    p[T[1]] = U.add, G && U.add(function() {
                        h = G
                    }, s[3 - x][2].disable, s[3 - x][3].disable, s[0][2].lock, s[0][3].lock), U.add(T[3].fire), w[T[0]] = function() {
                        return w[T[0] + "With"](this === w ? void 0 : this, arguments), this
                    }, w[T[0] + "With"] = U.fireWith
                }), p.promise(w), r && r.call(w, w), w
            },
            when: function(r) {
                var s = arguments.length,
                    h = s,
                    p = Array(h),
                    w = c.call(arguments),
                    x = f.Deferred(),
                    T = function(U) {
                        return function(G) {
                            p[U] = this, w[U] = arguments.length > 1 ? c.call(arguments) : G, --s || x.resolveWith(p, w)
                        }
                    };
                if (s <= 1 && (Bt(r, x.done(T(h)).resolve, x.reject, !s), x.state() === "pending" || re(w[h] && w[h].then))) return x.then();
                for (; h--;) Bt(w[h], T(h), x.reject);
                return x.promise()
            }
        });
        var qt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        f.Deferred.exceptionHook = function(r, s) {
            e.console && e.console.warn && r && qt.test(r.name) && e.console.warn("jQuery.Deferred exception: " + r.message, r.stack, s)
        }, f.readyException = function(r) {
            e.setTimeout(function() {
                throw r
            })
        };
        var E = f.Deferred();
        f.fn.ready = function(r) {
            return E.then(r).catch(function(s) {
                f.readyException(s)
            }), this
        }, f.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(r) {
                (r === !0 ? --f.readyWait : f.isReady) || (f.isReady = !0, !(r !== !0 && --f.readyWait > 0) && E.resolveWith(D, [f]))
            }
        }), f.ready.then = E.then;

        function l() {
            D.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), f.ready()
        }
        D.readyState === "complete" || D.readyState !== "loading" && !D.documentElement.doScroll ? e.setTimeout(f.ready) : (D.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(r, s, h, p, w, x, T) {
                var U = 0,
                    G = r.length,
                    ee = h == null;
                if (oe(h) === "object") {
                    w = !0;
                    for (U in h) g(r, s, U, h[U], !0, x, T)
                } else if (p !== void 0 && (w = !0, re(p) || (T = !0), ee && (T ? (s.call(r, p), s = null) : (ee = s, s = function(ce, Ce, se) {
                        return ee.call(f(ce), se)
                    })), s))
                    for (; U < G; U++) s(r[U], h, T ? p : p.call(r[U], U, s(r[U], h)));
                return w ? r : ee ? s.call(r) : G ? s(r[0], h) : x
            },
            S = /^-ms-/,
            O = /-([a-z])/g;

        function P(r, s) {
            return s.toUpperCase()
        }

        function V(r) {
            return r.replace(S, "ms-").replace(O, P)
        }
        var ie = function(r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function ke() {
            this.expando = f.expando + ke.uid++
        }
        ke.uid = 1, ke.prototype = {
            cache: function(r) {
                var s = r[this.expando];
                return s || (s = {}, ie(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
                    value: s,
                    configurable: !0
                }))), s
            },
            set: function(r, s, h) {
                var p, w = this.cache(r);
                if (typeof s == "string") w[V(s)] = h;
                else
                    for (p in s) w[V(p)] = s[p];
                return w
            },
            get: function(r, s) {
                return s === void 0 ? this.cache(r) : r[this.expando] && r[this.expando][V(s)]
            },
            access: function(r, s, h) {
                return s === void 0 || s && typeof s == "string" && h === void 0 ? this.get(r, s) : (this.set(r, s, h), h !== void 0 ? h : s)
            },
            remove: function(r, s) {
                var h, p = r[this.expando];
                if (p !== void 0) {
                    if (s !== void 0)
                        for (Array.isArray(s) ? s = s.map(V) : (s = V(s), s = s in p ? [s] : s.match(Te) || []), h = s.length; h--;) delete p[s[h]];
                    (s === void 0 || f.isEmptyObject(p)) && (r.nodeType ? r[this.expando] = void 0 : delete r[this.expando])
                }
            },
            hasData: function(r) {
                var s = r[this.expando];
                return s !== void 0 && !f.isEmptyObject(s)
            }
        };
        var de = new ke,
            Le = new ke,
            De = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            it = /[A-Z]/g;

        function Ct(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : De.test(r) ? JSON.parse(r) : r
        }

        function rn(r, s, h) {
            var p;
            if (h === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(it, "-$&").toLowerCase(), h = r.getAttribute(p), typeof h == "string") {
                    try {
                        h = Ct(h)
                    } catch {}
                    Le.set(r, s, h)
                } else h = void 0;
            return h
        }
        f.extend({
            hasData: function(r) {
                return Le.hasData(r) || de.hasData(r)
            },
            data: function(r, s, h) {
                return Le.access(r, s, h)
            },
            removeData: function(r, s) {
                Le.remove(r, s)
            },
            _data: function(r, s, h) {
                return de.access(r, s, h)
            },
            _removeData: function(r, s) {
                de.remove(r, s)
            }
        }), f.fn.extend({
            data: function(r, s) {
                var h, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = Le.get(x), x.nodeType === 1 && !de.get(x, "hasDataAttrs"))) {
                        for (h = T.length; h--;) T[h] && (p = T[h].name, p.indexOf("data-") === 0 && (p = V(p.slice(5)), rn(x, p, w[p])));
                        de.set(x, "hasDataAttrs", !0)
                    }
                    return w
                }
                return typeof r == "object" ? this.each(function() {
                    Le.set(this, r)
                }) : g(this, function(U) {
                    var G;
                    if (x && U === void 0) return G = Le.get(x, r), G !== void 0 || (G = rn(x, r), G !== void 0) ? G : void 0;
                    this.each(function() {
                        Le.set(this, r, U)
                    })
                }, null, s, arguments.length > 1, null, !0)
            },
            removeData: function(r) {
                return this.each(function() {
                    Le.remove(this, r)
                })
            }
        }), f.extend({
            queue: function(r, s, h) {
                var p;
                if (r) return s = (s || "fx") + "queue", p = de.get(r, s), h && (!p || Array.isArray(h) ? p = de.access(r, s, f.makeArray(h)) : p.push(h)), p || []
            },
            dequeue: function(r, s) {
                s = s || "fx";
                var h = f.queue(r, s),
                    p = h.length,
                    w = h.shift(),
                    x = f._queueHooks(r, s),
                    T = function() {
                        f.dequeue(r, s)
                    };
                w === "inprogress" && (w = h.shift(), p--), w && (s === "fx" && h.unshift("inprogress"), delete x.stop, w.call(r, T, x)), !p && x && x.empty.fire()
            },
            _queueHooks: function(r, s) {
                var h = s + "queueHooks";
                return de.get(r, h) || de.access(r, h, {
                    empty: f.Callbacks("once memory").add(function() {
                        de.remove(r, [s + "queue", h])
                    })
                })
            }
        }), f.fn.extend({
            queue: function(r, s) {
                var h = 2;
                return typeof r != "string" && (s = r, r = "fx", h--), arguments.length < h ? f.queue(this[0], r) : s === void 0 ? this : this.each(function() {
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
                var h, p = 1,
                    w = f.Deferred(),
                    x = this,
                    T = this.length,
                    U = function() {
                        --p || w.resolveWith(x, [x])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) h = de.get(x[T], r + "queueHooks"), h && h.empty && (p++, h.empty.add(U));
                return U(), w.promise(s)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            yt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            bt = ["Top", "Right", "Bottom", "Left"],
            Jt = D.documentElement,
            Je = function(r) {
                return f.contains(r.ownerDocument, r)
            },
            Pt = {
                composed: !0
            };
        Jt.getRootNode && (Je = function(r) {
            return f.contains(r.ownerDocument, r) || r.getRootNode(Pt) === r.ownerDocument
        });
        var F = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && f.css(r, "display") === "none"
        };

        function N(r, s, h, p) {
            var w, x, T = 20,
                U = p ? function() {
                    return p.cur()
                } : function() {
                    return f.css(r, s, "")
                },
                G = U(),
                ee = h && h[3] || (f.cssNumber[s] ? "" : "px"),
                ce = r.nodeType && (f.cssNumber[s] || ee !== "px" && +G) && yt.exec(f.css(r, s));
            if (ce && ce[3] !== ee) {
                for (G = G / 2, ee = ee || ce[3], ce = +G || 1; T--;) f.style(r, s, ce + ee), (1 - x) * (1 - (x = U() / G || .5)) <= 0 && (T = 0), ce = ce / x;
                ce = ce * 2, f.style(r, s, ce + ee), h = h || []
            }
            return h && (ce = +ce || +G || 0, w = h[1] ? ce + (h[1] + 1) * h[2] : +h[2], p && (p.unit = ee, p.start = ce, p.end = w)), w
        }
        var K = {};

        function M(r) {
            var s, h = r.ownerDocument,
                p = r.nodeName,
                w = K[p];
            return w || (s = h.body.appendChild(h.createElement(p)), w = f.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), K[p] = w, w)
        }

        function X(r, s) {
            for (var h, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (h = p.style.display, s ? (h === "none" && (w[x] = de.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && F(p) && (w[x] = M(p))) : h !== "none" && (w[x] = "none", de.set(p, "display", h)));
            for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
            return r
        }
        f.fn.extend({
            show: function() {
                return X(this, !0)
            },
            hide: function() {
                return X(this)
            },
            toggle: function(r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                    F(this) ? f(this).show() : f(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ne = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var r = D.createDocumentFragment(),
                s = r.appendChild(D.createElement("div")),
                h = D.createElement("input");
            h.setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), s.appendChild(h), W.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", W.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", W.option = !!s.lastChild
        })();
        var Ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, W.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(r, s) {
            var h;
            return typeof r.getElementsByTagName < "u" ? h = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? h = r.querySelectorAll(s || "*") : h = [], s === void 0 || s && Q(r, s) ? f.merge([r], h) : h
        }

        function Ft(r, s) {
            for (var h = 0, p = r.length; h < p; h++) de.set(r[h], "globalEval", !s || de.get(s[h], "globalEval"))
        }
        var Xe = /<|&#?\w+;/;

        function In(r, s, h, p, w) {
            for (var x, T, U, G, ee, ce, Ce = s.createDocumentFragment(), se = [], ue = 0, Ge = r.length; ue < Ge; ue++)
                if (x = r[ue], x || x === 0)
                    if (oe(x) === "object") f.merge(se, x.nodeType ? [x] : x);
                    else if (!Xe.test(x)) se.push(s.createTextNode(x));
            else {
                for (T = T || Ce.appendChild(s.createElement("div")), U = (ge.exec(x) || ["", ""])[1].toLowerCase(), G = Ve[U] || Ve._default, T.innerHTML = G[1] + f.htmlPrefilter(x) + G[2], ce = G[0]; ce--;) T = T.lastChild;
                f.merge(se, T.childNodes), T = Ce.firstChild, T.textContent = ""
            }
            for (Ce.textContent = "", ue = 0; x = se[ue++];) {
                if (p && f.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (ee = Je(x), T = pt(Ce.appendChild(x), "script"), ee && Ft(T), h)
                    for (ce = 0; x = T[ce++];) Ne.test(x.type || "") && h.push(x)
            }
            return Ce
        }
        var Pn = /^([^.]*)(?:\.(.+)|)/;

        function rt() {
            return !0
        }

        function Ln() {
            return !1
        }

        function mi(r, s) {
            return r === _r() == (s === "focus")
        }

        function _r() {
            try {
                return D.activeElement
            } catch {}
        }

        function kn(r, s, h, p, w, x) {
            var T, U;
            if (typeof s == "object") {
                typeof h != "string" && (p = p || h, h = void 0);
                for (U in s) kn(r, U, h, p, s[U], x);
                return r
            }
            if (p == null && w == null ? (w = h, p = h = void 0) : w == null && (typeof h == "string" ? (w = p, p = void 0) : (w = p, p = h, h = void 0)), w === !1) w = Ln;
            else if (!w) return r;
            return x === 1 && (T = w, w = function(G) {
                return f().off(G), T.apply(this, arguments)
            }, w.guid = T.guid || (T.guid = f.guid++)), r.each(function() {
                f.event.add(this, s, w, p, h)
            })
        }
        f.event = {
            global: {},
            add: function(r, s, h, p, w) {
                var x, T, U, G, ee, ce, Ce, se, ue, Ge, st, je = de.get(r);
                if (!!ie(r))
                    for (h.handler && (x = h, h = x.handler, w = x.selector), w && f.find.matchesSelector(Jt, w), h.guid || (h.guid = f.guid++), (G = je.events) || (G = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(Ut) {
                            return typeof f < "u" && f.event.triggered !== Ut.type ? f.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], ee = s.length; ee--;) U = Pn.exec(s[ee]) || [], ue = st = U[1], Ge = (U[2] || "").split(".").sort(), ue && (Ce = f.event.special[ue] || {}, ue = (w ? Ce.delegateType : Ce.bindType) || ue, Ce = f.event.special[ue] || {}, ce = f.extend({
                        type: ue,
                        origType: st,
                        data: p,
                        handler: h,
                        guid: h.guid,
                        selector: w,
                        needsContext: w && f.expr.match.needsContext.test(w),
                        namespace: Ge.join(".")
                    }, x), (se = G[ue]) || (se = G[ue] = [], se.delegateCount = 0, (!Ce.setup || Ce.setup.call(r, p, Ge, T) === !1) && r.addEventListener && r.addEventListener(ue, T)), Ce.add && (Ce.add.call(r, ce), ce.handler.guid || (ce.handler.guid = h.guid)), w ? se.splice(se.delegateCount++, 0, ce) : se.push(ce), f.event.global[ue] = !0)
            },
            remove: function(r, s, h, p, w) {
                var x, T, U, G, ee, ce, Ce, se, ue, Ge, st, je = de.hasData(r) && de.get(r);
                if (!(!je || !(G = je.events))) {
                    for (s = (s || "").match(Te) || [""], ee = s.length; ee--;) {
                        if (U = Pn.exec(s[ee]) || [], ue = st = U[1], Ge = (U[2] || "").split(".").sort(), !ue) {
                            for (ue in G) f.event.remove(r, ue + s[ee], h, p, !0);
                            continue
                        }
                        for (Ce = f.event.special[ue] || {}, ue = (p ? Ce.delegateType : Ce.bindType) || ue, se = G[ue] || [], U = U[2] && new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = se.length; x--;) ce = se[x], (w || st === ce.origType) && (!h || h.guid === ce.guid) && (!U || U.test(ce.namespace)) && (!p || p === ce.selector || p === "**" && ce.selector) && (se.splice(x, 1), ce.selector && se.delegateCount--, Ce.remove && Ce.remove.call(r, ce));
                        T && !se.length && ((!Ce.teardown || Ce.teardown.call(r, Ge, je.handle) === !1) && f.removeEvent(r, ue, je.handle), delete G[ue])
                    }
                    f.isEmptyObject(G) && de.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, h, p, w, x, T, U = new Array(arguments.length),
                    G = f.event.fix(r),
                    ee = (de.get(this, "events") || Object.create(null))[G.type] || [],
                    ce = f.event.special[G.type] || {};
                for (U[0] = G, s = 1; s < arguments.length; s++) U[s] = arguments[s];
                if (G.delegateTarget = this, !(ce.preDispatch && ce.preDispatch.call(this, G) === !1)) {
                    for (T = f.event.handlers.call(this, G, ee), s = 0;
                        (w = T[s++]) && !G.isPropagationStopped();)
                        for (G.currentTarget = w.elem, h = 0;
                            (x = w.handlers[h++]) && !G.isImmediatePropagationStopped();)(!G.rnamespace || x.namespace === !1 || G.rnamespace.test(x.namespace)) && (G.handleObj = x, G.data = x.data, p = ((f.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, U), p !== void 0 && (G.result = p) === !1 && (G.preventDefault(), G.stopPropagation()));
                    return ce.postDispatch && ce.postDispatch.call(this, G), G.result
                }
            },
            handlers: function(r, s) {
                var h, p, w, x, T, U = [],
                    G = s.delegateCount,
                    ee = r.target;
                if (G && ee.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; ee !== this; ee = ee.parentNode || this)
                        if (ee.nodeType === 1 && !(r.type === "click" && ee.disabled === !0)) {
                            for (x = [], T = {}, h = 0; h < G; h++) p = s[h], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? f(w, this).index(ee) > -1 : f.find(w, this, null, [ee]).length), T[w] && x.push(p);
                            x.length && U.push({
                                elem: ee,
                                handlers: x
                            })
                        }
                }
                return ee = this, G < s.length && U.push({
                    elem: ee,
                    handlers: s.slice(G)
                }), U
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
                    set: function(h) {
                        Object.defineProperty(this, r, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: h
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
                        return pe.test(s.type) && s.click && Q(s, "input") && sn(s, "click", rt), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return pe.test(s.type) && s.click && Q(s, "input") && sn(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return pe.test(s.type) && s.click && Q(s, "input") && de.get(s, "click") || Q(s, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(r) {
                        r.result !== void 0 && r.originalEvent && (r.originalEvent.returnValue = r.result)
                    }
                }
            }
        };

        function sn(r, s, h) {
            if (!h) {
                de.get(r, s) === void 0 && f.event.add(r, s, rt);
                return
            }
            de.set(r, s, !1), f.event.add(r, s, {
                namespace: !1,
                handler: function(p) {
                    var w, x, T = de.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(f.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = c.call(arguments), de.set(this, s, T), w = h(this, s), this[s](), x = de.get(this, s), T !== x || w ? de.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
                    } else T.length && (de.set(this, s, {
                        value: f.event.trigger(f.extend(T[0], f.Event.prototype), T.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        f.removeEvent = function(r, s, h) {
            r.removeEventListener && r.removeEventListener(s, h)
        }, f.Event = function(r, s) {
            if (!(this instanceof f.Event)) return new f.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? rt : Ln, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && f.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            constructor: f.Event,
            isDefaultPrevented: Ln,
            isPropagationStopped: Ln,
            isImmediatePropagationStopped: Ln,
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
        }), f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(r, s) {
            f.event.special[r] = {
                delegateType: s,
                bindType: s,
                handle: function(h) {
                    var p, w = this,
                        x = h.relatedTarget,
                        T = h.handleObj;
                    return (!x || x !== w && !f.contains(w, x)) && (h.type = T.origType, p = T.handler.apply(this, arguments), h.type = s), p
                }
            }
        }), f.fn.extend({
            on: function(r, s, h, p) {
                return kn(this, r, s, h, p)
            },
            one: function(r, s, h, p) {
                return kn(this, r, s, h, p, 1)
            },
            off: function(r, s, h) {
                var p, w;
                if (r && r.preventDefault && r.handleObj) return p = r.handleObj, f(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof r == "object") {
                    for (w in r) this.off(w, s, r[w]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (h = s, s = void 0), h === !1 && (h = Ln), this.each(function() {
                    f.event.remove(this, r, h, s)
                })
            }
        });
        var kr = /<script|<style|<link/i,
            Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            vi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Bi(r, s) {
            return Q(r, "table") && Q(s.nodeType !== 11 ? s : s.firstChild, "tr") && f(r).children("tbody")[0] || r
        }

        function yi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function wi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function ji(r, s) {
            var h, p, w, x, T, U, G;
            if (s.nodeType === 1) {
                if (de.hasData(r) && (x = de.get(r), G = x.events, G)) {
                    de.remove(s, "handle events");
                    for (w in G)
                        for (h = 0, p = G[w].length; h < p; h++) f.event.add(s, w, G[w][h])
                }
                Le.hasData(r) && (T = Le.access(r), U = f.extend({}, T), Le.set(s, U))
            }
        }

        function Fi(r, s) {
            var h = s.nodeName.toLowerCase();
            h === "input" && pe.test(r.type) ? s.checked = r.checked : (h === "input" || h === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, h, p) {
            s = m(s);
            var w, x, T, U, G, ee, ce = 0,
                Ce = r.length,
                se = Ce - 1,
                ue = s[0],
                Ge = re(ue);
            if (Ge || Ce > 1 && typeof ue == "string" && !W.checkClone && Tr.test(ue)) return r.each(function(st) {
                var je = r.eq(st);
                Ge && (s[0] = ue.call(this, st, je.html())), mn(je, s, h, p)
            });
            if (Ce && (w = In(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = f.map(pt(w, "script"), yi), U = T.length; ce < Ce; ce++) G = w, ce !== se && (G = f.clone(G, !0, !0), U && f.merge(T, pt(G, "script"))), h.call(r[ce], G, ce);
                if (U)
                    for (ee = T[T.length - 1].ownerDocument, f.map(T, wi), ce = 0; ce < U; ce++) G = T[ce], Ne.test(G.type || "") && !de.access(G, "globalEval") && f.contains(ee, G) && (G.src && (G.type || "").toLowerCase() !== "module" ? f._evalUrl && !G.noModule && f._evalUrl(G.src, {
                        nonce: G.nonce || G.getAttribute("nonce")
                    }, ee) : le(G.textContent.replace(vi, ""), G, ee))
            }
            return r
        }

        function zi(r, s, h) {
            for (var p, w = s ? f.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !h && p.nodeType === 1 && f.cleanData(pt(p)), p.parentNode && (h && Je(p) && Ft(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        f.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, h) {
                var p, w, x, T, U = r.cloneNode(!0),
                    G = Je(r);
                if (!W.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !f.isXMLDoc(r))
                    for (T = pt(U), x = pt(r), p = 0, w = x.length; p < w; p++) Fi(x[p], T[p]);
                if (s)
                    if (h)
                        for (x = x || pt(r), T = T || pt(U), p = 0, w = x.length; p < w; p++) ji(x[p], T[p]);
                    else ji(r, U);
                return T = pt(U, "script"), T.length > 0 && Ft(T, !G && pt(r, "script")), U
            },
            cleanData: function(r) {
                for (var s, h, p, w = f.event.special, x = 0;
                    (h = r[x]) !== void 0; x++)
                    if (ie(h)) {
                        if (s = h[de.expando]) {
                            if (s.events)
                                for (p in s.events) w[p] ? f.event.remove(h, p) : f.removeEvent(h, p, s.handle);
                            h[de.expando] = void 0
                        }
                        h[Le.expando] && (h[Le.expando] = void 0)
                    }
            }
        }), f.fn.extend({
            detach: function(r) {
                return zi(this, r, !0)
            },
            remove: function(r) {
                return zi(this, r)
            },
            text: function(r) {
                return g(this, function(s) {
                    return s === void 0 ? f.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = s)
                    })
                }, null, r, arguments.length)
            },
            append: function() {
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Bi(this, r);
                        s.appendChild(r)
                    }
                })
            },
            prepend: function() {
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Bi(this, r);
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
                    var h = this[0] || {},
                        p = 0,
                        w = this.length;
                    if (s === void 0 && h.nodeType === 1) return h.innerHTML;
                    if (typeof s == "string" && !kr.test(s) && !Ve[(ge.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = f.htmlPrefilter(s);
                        try {
                            for (; p < w; p++) h = this[p] || {}, h.nodeType === 1 && (f.cleanData(pt(h, !1)), h.innerHTML = s);
                            h = 0
                        } catch {}
                    }
                    h && this.empty().append(s)
                }, null, r, arguments.length)
            },
            replaceWith: function() {
                var r = [];
                return mn(this, arguments, function(s) {
                    var h = this.parentNode;
                    f.inArray(this, r) < 0 && (f.cleanData(pt(this)), h && h.replaceChild(s, this))
                }, r)
            }
        }), f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(r, s) {
            f.fn[r] = function(h) {
                for (var p, w = [], x = f(h), T = x.length - 1, U = 0; U <= T; U++) p = U === T ? this : this.clone(!0), f(x[U])[s](p), _.apply(w, p.get());
                return this.pushStack(w)
            }
        });
        var bi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            Un = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Ui = function(r, s, h) {
                var p, w, x = {};
                for (w in s) x[w] = r.style[w], r.style[w] = s[w];
                p = h.call(r);
                for (w in s) r.style[w] = x[w];
                return p
            },
            Ci = new RegExp(bt.join("|"), "i");
        (function() {
            function r() {
                if (!!ee) {
                    G.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", ee.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Jt.appendChild(G).appendChild(ee);
                    var ce = e.getComputedStyle(ee);
                    h = ce.top !== "1%", U = s(ce.marginLeft) === 12, ee.style.right = "60%", x = s(ce.right) === 36, p = s(ce.width) === 36, ee.style.position = "absolute", w = s(ee.offsetWidth / 3) === 12, Jt.removeChild(G), ee = null
                }
            }

            function s(ce) {
                return Math.round(parseFloat(ce))
            }
            var h, p, w, x, T, U, G = D.createElement("div"),
                ee = D.createElement("div");
            !ee.style || (ee.style.backgroundClip = "content-box", ee.cloneNode(!0).style.backgroundClip = "", W.clearCloneStyle = ee.style.backgroundClip === "content-box", f.extend(W, {
                boxSizingReliable: function() {
                    return r(), p
                },
                pixelBoxStyles: function() {
                    return r(), x
                },
                pixelPosition: function() {
                    return r(), h
                },
                reliableMarginLeft: function() {
                    return r(), U
                },
                scrollboxSize: function() {
                    return r(), w
                },
                reliableTrDimensions: function() {
                    var ce, Ce, se, ue;
                    return T == null && (ce = D.createElement("table"), Ce = D.createElement("tr"), se = D.createElement("div"), ce.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Ce.style.cssText = "border:1px solid", Ce.style.height = "1px", se.style.height = "9px", se.style.display = "block", Jt.appendChild(ce).appendChild(Ce).appendChild(se), ue = e.getComputedStyle(Ce), T = parseInt(ue.height, 10) + parseInt(ue.borderTopWidth, 10) + parseInt(ue.borderBottomWidth, 10) === Ce.offsetHeight, Jt.removeChild(ce)), T
                }
            }))
        })();

        function Ze(r, s, h) {
            var p, w, x, T, U = r.style;
            return h = h || Un(r), h && (T = h.getPropertyValue(s) || h[s], T === "" && !Je(r) && (T = f.style(r, s)), !W.pixelBoxStyles() && bi.test(T) && Ci.test(s) && (p = U.width, w = U.minWidth, x = U.maxWidth, U.minWidth = U.maxWidth = U.width = T, T = h.width, U.width = p, U.minWidth = w, U.maxWidth = x)), T !== void 0 ? T + "" : T
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
            C = D.createElement("div").style,
            A = {};

        function Z(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), h = a.length; h--;)
                if (r = a[h] + s, r in C) return r
        }

        function xe(r) {
            var s = f.cssProps[r] || A[r];
            return s || (r in C ? r : A[r] = Z(r) || r)
        }
        var qe = /^(none|table(?!-c[ea]).+)/,
            Lt = /^--/,
            Yt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Hn = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function Nn(r, s, h) {
            var p = yt.exec(s);
            return p ? Math.max(0, p[2] - (h || 0)) + (p[3] || "px") : s
        }

        function Gn(r, s, h, p, w, x) {
            var T = s === "width" ? 1 : 0,
                U = 0,
                G = 0;
            if (h === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) h === "margin" && (G += f.css(r, h + bt[T], !0, w)), p ? (h === "content" && (G -= f.css(r, "padding" + bt[T], !0, w)), h !== "margin" && (G -= f.css(r, "border" + bt[T] + "Width", !0, w))) : (G += f.css(r, "padding" + bt[T], !0, w), h !== "padding" ? G += f.css(r, "border" + bt[T] + "Width", !0, w) : U += f.css(r, "border" + bt[T] + "Width", !0, w));
            return !p && x >= 0 && (G += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - G - U - .5)) || 0), G
        }

        function Ar(r, s, h) {
            var p = Un(r),
                w = !W.boxSizingReliable() || h,
                x = w && f.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                U = Ze(r, s, p),
                G = "offset" + s[0].toUpperCase() + s.slice(1);
            if (bi.test(U)) {
                if (!h) return U;
                U = "auto"
            }
            return (!W.boxSizingReliable() && x || !W.reliableTrDimensions() && Q(r, "tr") || U === "auto" || !parseFloat(U) && f.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = f.css(r, "boxSizing", !1, p) === "border-box", T = G in r, T && (U = r[G])), U = parseFloat(U) || 0, U + Gn(r, s, h || (x ? "border" : "content"), T, p, U) + "px"
        }
        f.extend({
            cssHooks: {
                opacity: {
                    get: function(r, s) {
                        if (s) {
                            var h = Ze(r, "opacity");
                            return h === "" ? "1" : h
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
            style: function(r, s, h, p) {
                if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
                    var w, x, T, U = V(s),
                        G = Lt.test(s),
                        ee = r.style;
                    if (G || (s = xe(U)), T = f.cssHooks[s] || f.cssHooks[U], h !== void 0) {
                        if (x = typeof h, x === "string" && (w = yt.exec(h)) && w[1] && (h = N(r, s, w), x = "number"), h == null || h !== h) return;
                        x === "number" && !G && (h += w && w[3] || (f.cssNumber[U] ? "" : "px")), !W.clearCloneStyle && h === "" && s.indexOf("background") === 0 && (ee[s] = "inherit"), (!T || !("set" in T) || (h = T.set(r, h, p)) !== void 0) && (G ? ee.setProperty(s, h) : ee[s] = h)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : ee[s]
                }
            },
            css: function(r, s, h, p) {
                var w, x, T, U = V(s),
                    G = Lt.test(s);
                return G || (s = xe(U)), T = f.cssHooks[s] || f.cssHooks[U], T && "get" in T && (w = T.get(r, !0, h)), w === void 0 && (w = Ze(r, s, p)), w === "normal" && s in Hn && (w = Hn[s]), h === "" || h ? (x = parseFloat(w), h === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), f.each(["height", "width"], function(r, s) {
            f.cssHooks[s] = {
                get: function(h, p, w) {
                    if (p) return qe.test(f.css(h, "display")) && (!h.getClientRects().length || !h.getBoundingClientRect().width) ? Ui(h, Yt, function() {
                        return Ar(h, s, w)
                    }) : Ar(h, s, w)
                },
                set: function(h, p, w) {
                    var x, T = Un(h),
                        U = !W.scrollboxSize() && T.position === "absolute",
                        G = U || w,
                        ee = G && f.css(h, "boxSizing", !1, T) === "border-box",
                        ce = w ? Gn(h, s, w, ee, T) : 0;
                    return ee && U && (ce -= Math.ceil(h["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Gn(h, s, "border", !1, T) - .5)), ce && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (h.style[s] = p, p = f.css(h, s)), Nn(h, p, ce)
                }
            }
        }), f.cssHooks.marginLeft = y(W.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Ui(r, {
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
                expand: function(h) {
                    for (var p = 0, w = {}, x = typeof h == "string" ? h.split(" ") : [h]; p < 4; p++) w[r + bt[p] + s] = x[p] || x[p - 2] || x[0];
                    return w
                }
            }, r !== "margin" && (f.cssHooks[r + s].set = Nn)
        }), f.fn.extend({
            css: function(r, s) {
                return g(this, function(h, p, w) {
                    var x, T, U = {},
                        G = 0;
                    if (Array.isArray(p)) {
                        for (x = Un(h), T = p.length; G < T; G++) U[p[G]] = f.css(h, p[G], !1, x);
                        return U
                    }
                    return w !== void 0 ? f.style(h, p, w) : f.css(h, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Xt(r, s, h, p, w) {
            return new Xt.prototype.init(r, s, h, p, w)
        }
        f.Tween = Xt, Xt.prototype = {
            constructor: Xt,
            init: function(r, s, h, p, w, x) {
                this.elem = r, this.prop = h, this.easing = w || f.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (f.cssNumber[h] ? "" : "px")
            },
            cur: function() {
                var r = Xt.propHooks[this.prop];
                return r && r.get ? r.get(this) : Xt.propHooks._default.get(this)
            },
            run: function(r) {
                var s, h = Xt.propHooks[this.prop];
                return this.options.duration ? this.pos = s = f.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), h && h.set ? h.set(this) : Xt.propHooks._default.set(this), this
            }
        }, Xt.prototype.init.prototype = Xt.prototype, Xt.propHooks = {
            _default: {
                get: function(r) {
                    var s;
                    return r.elem.nodeType !== 1 || r.elem[r.prop] != null && r.elem.style[r.prop] == null ? r.elem[r.prop] : (s = f.css(r.elem, r.prop, ""), !s || s === "auto" ? 0 : s)
                },
                set: function(r) {
                    f.fx.step[r.prop] ? f.fx.step[r.prop](r) : r.elem.nodeType === 1 && (f.cssHooks[r.prop] || r.elem.style[xe(r.prop)] != null) ? f.style(r.elem, r.prop, r.now + r.unit) : r.elem[r.prop] = r.now
                }
            }
        }, Xt.propHooks.scrollTop = Xt.propHooks.scrollLeft = {
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
        }, f.fx = Xt.prototype.init, f.fx.step = {};
        var zt, Hi, bo = /^(?:toggle|show|hide)$/,
            Co = /queueHooks$/;

        function Or() {
            Hi && (D.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, f.fx.interval), f.fx.tick())
        }

        function Rr() {
            return e.setTimeout(function() {
                zt = void 0
            }), zt = Date.now()
        }

        function Gi(r, s) {
            var h, p = 0,
                w = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) h = bt[p], w["margin" + h] = w["padding" + h] = r;
            return s && (w.opacity = w.width = r), w
        }

        function gs(r, s, h) {
            for (var p, w = (bn.tweeners[s] || []).concat(bn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                if (p = w[x].call(h, s, r)) return p
        }

        function xo(r, s, h) {
            var p, w, x, T, U, G, ee, ce, Ce = "width" in s || "height" in s,
                se = this,
                ue = {},
                Ge = r.style,
                st = r.nodeType && F(r),
                je = de.get(r, "fxshow");
            h.queue || (T = f._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, U = T.empty.fire, T.empty.fire = function() {
                T.unqueued || U()
            }), T.unqueued++, se.always(function() {
                se.always(function() {
                    T.unqueued--, f.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], bo.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (st ? "hide" : "show"))
                        if (w === "show" && je && je[p] !== void 0) st = !0;
                        else continue;
                    ue[p] = je && je[p] || f.style(r, p)
                } if (G = !f.isEmptyObject(s), !(!G && f.isEmptyObject(ue))) {
                Ce && r.nodeType === 1 && (h.overflow = [Ge.overflow, Ge.overflowX, Ge.overflowY], ee = je && je.display, ee == null && (ee = de.get(r, "display")), ce = f.css(r, "display"), ce === "none" && (ee ? ce = ee : (X([r], !0), ee = r.style.display || ee, ce = f.css(r, "display"), X([r]))), (ce === "inline" || ce === "inline-block" && ee != null) && f.css(r, "float") === "none" && (G || (se.done(function() {
                    Ge.display = ee
                }), ee == null && (ce = Ge.display, ee = ce === "none" ? "" : ce)), Ge.display = "inline-block")), h.overflow && (Ge.overflow = "hidden", se.always(function() {
                    Ge.overflow = h.overflow[0], Ge.overflowX = h.overflow[1], Ge.overflowY = h.overflow[2]
                })), G = !1;
                for (p in ue) G || (je ? "hidden" in je && (st = je.hidden) : je = de.access(r, "fxshow", {
                    display: ee
                }), x && (je.hidden = !st), st && X([r], !0), se.done(function() {
                    st || X([r]), de.remove(r, "fxshow");
                    for (p in ue) f.style(r, p, ue[p])
                })), G = gs(st ? je[p] : 0, p, se), p in je || (je[p] = G.start, st && (G.end = G.start, G.start = 0))
            }
        }

        function ms(r, s) {
            var h, p, w, x, T;
            for (h in r)
                if (p = V(h), w = s[p], x = r[h], Array.isArray(x) && (w = x[1], x = r[h] = x[0]), h !== p && (r[p] = x, delete r[h]), T = f.cssHooks[p], T && "expand" in T) {
                    x = T.expand(x), delete r[p];
                    for (h in x) h in r || (r[h] = x[h], s[h] = w)
                } else s[p] = w
        }

        function bn(r, s, h) {
            var p, w, x = 0,
                T = bn.prefilters.length,
                U = f.Deferred().always(function() {
                    delete G.elem
                }),
                G = function() {
                    if (w) return !1;
                    for (var Ce = zt || Rr(), se = Math.max(0, ee.startTime + ee.duration - Ce), ue = se / ee.duration || 0, Ge = 1 - ue, st = 0, je = ee.tweens.length; st < je; st++) ee.tweens[st].run(Ge);
                    return U.notifyWith(r, [ee, Ge, se]), Ge < 1 && je ? se : (je || U.notifyWith(r, [ee, 1, 0]), U.resolveWith(r, [ee]), !1)
                },
                ee = U.promise({
                    elem: r,
                    props: f.extend({}, s),
                    opts: f.extend(!0, {
                        specialEasing: {},
                        easing: f.easing._default
                    }, h),
                    originalProperties: s,
                    originalOptions: h,
                    startTime: zt || Rr(),
                    duration: h.duration,
                    tweens: [],
                    createTween: function(Ce, se) {
                        var ue = f.Tween(r, ee.opts, Ce, se, ee.opts.specialEasing[Ce] || ee.opts.easing);
                        return ee.tweens.push(ue), ue
                    },
                    stop: function(Ce) {
                        var se = 0,
                            ue = Ce ? ee.tweens.length : 0;
                        if (w) return this;
                        for (w = !0; se < ue; se++) ee.tweens[se].run(1);
                        return Ce ? (U.notifyWith(r, [ee, 1, 0]), U.resolveWith(r, [ee, Ce])) : U.rejectWith(r, [ee, Ce]), this
                    }
                }),
                ce = ee.props;
            for (ms(ce, ee.opts.specialEasing); x < T; x++)
                if (p = bn.prefilters[x].call(ee, r, ce, ee.opts), p) return re(p.stop) && (f._queueHooks(ee.elem, ee.opts.queue).stop = p.stop.bind(p)), p;
            return f.map(ce, gs, ee), re(ee.opts.start) && ee.opts.start.call(r, ee), ee.progress(ee.opts.progress).done(ee.opts.done, ee.opts.complete).fail(ee.opts.fail).always(ee.opts.always), f.fx.timer(f.extend(G, {
                elem: r,
                anim: ee,
                queue: ee.opts.queue
            })), ee
        }
        f.Animation = f.extend(bn, {
                tweeners: {
                    "*": [function(r, s) {
                        var h = this.createTween(r, s);
                        return N(h.elem, r, yt.exec(s), h), h
                    }]
                },
                tweener: function(r, s) {
                    re(r) ? (s = r, r = ["*"]) : r = r.match(Te);
                    for (var h, p = 0, w = r.length; p < w; p++) h = r[p], bn.tweeners[h] = bn.tweeners[h] || [], bn.tweeners[h].unshift(s)
                },
                prefilters: [xo],
                prefilter: function(r, s) {
                    s ? bn.prefilters.unshift(r) : bn.prefilters.push(r)
                }
            }), f.speed = function(r, s, h) {
                var p = r && typeof r == "object" ? f.extend({}, r) : {
                    complete: h || !h && s || re(r) && r,
                    duration: r,
                    easing: h && s || s && !re(s) && s
                };
                return f.fx.off ? p.duration = 0 : typeof p.duration != "number" && (p.duration in f.fx.speeds ? p.duration = f.fx.speeds[p.duration] : p.duration = f.fx.speeds._default), (p.queue == null || p.queue === !0) && (p.queue = "fx"), p.old = p.complete, p.complete = function() {
                    re(p.old) && p.old.call(this), p.queue && f.dequeue(this, p.queue)
                }, p
            }, f.fn.extend({
                fadeTo: function(r, s, h, p) {
                    return this.filter(F).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, h, p)
                },
                animate: function(r, s, h, p) {
                    var w = f.isEmptyObject(r),
                        x = f.speed(s, h, p),
                        T = function() {
                            var U = bn(this, f.extend({}, r), x);
                            (w || de.get(this, "finish")) && U.stop(!0)
                        };
                    return T.finish = T, w || x.queue === !1 ? this.each(T) : this.queue(x.queue, T)
                },
                stop: function(r, s, h) {
                    var p = function(w) {
                        var x = w.stop;
                        delete w.stop, x(h)
                    };
                    return typeof r != "string" && (h = s, s = r, r = void 0), s && this.queue(r || "fx", []), this.each(function() {
                        var w = !0,
                            x = r != null && r + "queueHooks",
                            T = f.timers,
                            U = de.get(this);
                        if (x) U[x] && U[x].stop && p(U[x]);
                        else
                            for (x in U) U[x] && U[x].stop && Co.test(x) && p(U[x]);
                        for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(h), w = !1, T.splice(x, 1));
                        (w || !h) && f.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, h = de.get(this),
                            p = h[r + "queue"],
                            w = h[r + "queueHooks"],
                            x = f.timers,
                            T = p ? p.length : 0;
                        for (h.finish = !0, f.queue(this, r, []), w && w.stop && w.stop.call(this, !0), s = x.length; s--;) x[s].elem === this && x[s].queue === r && (x[s].anim.stop(!0), x.splice(s, 1));
                        for (s = 0; s < T; s++) p[s] && p[s].finish && p[s].finish.call(this);
                        delete h.finish
                    })
                }
            }), f.each(["toggle", "show", "hide"], function(r, s) {
                var h = f.fn[s];
                f.fn[s] = function(p, w, x) {
                    return p == null || typeof p == "boolean" ? h.apply(this, arguments) : this.animate(Gi(s, !0), p, w, x)
                }
            }), f.each({
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
                f.fn[r] = function(h, p, w) {
                    return this.animate(s, h, p, w)
                }
            }), f.timers = [], f.fx.tick = function() {
                var r, s = 0,
                    h = f.timers;
                for (zt = Date.now(); s < h.length; s++) r = h[s], !r() && h[s] === r && h.splice(s--, 1);
                h.length || f.fx.stop(), zt = void 0
            }, f.fx.timer = function(r) {
                f.timers.push(r), f.fx.start()
            }, f.fx.interval = 13, f.fx.start = function() {
                Hi || (Hi = !0, Or())
            }, f.fx.stop = function() {
                Hi = null
            }, f.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, f.fn.delay = function(r, s) {
                return r = f.fx && f.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(h, p) {
                    var w = e.setTimeout(h, r);
                    p.stop = function() {
                        e.clearTimeout(w)
                    }
                })
            },
            function() {
                var r = D.createElement("input"),
                    s = D.createElement("select"),
                    h = s.appendChild(D.createElement("option"));
                r.type = "checkbox", W.checkOn = r.value !== "", W.optSelected = h.selected, r = D.createElement("input"), r.value = "t", r.type = "radio", W.radioValue = r.value === "t"
            }();
        var Ir, xi = f.expr.attrHandle;
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
            attr: function(r, s, h) {
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) {
                    if (typeof r.getAttribute > "u") return f.prop(r, s, h);
                    if ((x !== 1 || !f.isXMLDoc(r)) && (w = f.attrHooks[s.toLowerCase()] || (f.expr.match.bool.test(s) ? Ir : void 0)), h !== void 0) {
                        if (h === null) {
                            f.removeAttr(r, s);
                            return
                        }
                        return w && "set" in w && (p = w.set(r, h, s)) !== void 0 ? p : (r.setAttribute(s, h + ""), h)
                    }
                    return w && "get" in w && (p = w.get(r, s)) !== null ? p : (p = f.find.attr(r, s), p == null ? void 0 : p)
                }
            },
            attrHooks: {
                type: {
                    set: function(r, s) {
                        if (!W.radioValue && s === "radio" && Q(r, "input")) {
                            var h = r.value;
                            return r.setAttribute("type", s), h && (r.value = h), s
                        }
                    }
                }
            },
            removeAttr: function(r, s) {
                var h, p = 0,
                    w = s && s.match(Te);
                if (w && r.nodeType === 1)
                    for (; h = w[p++];) r.removeAttribute(h)
            }
        }), Ir = {
            set: function(r, s, h) {
                return s === !1 ? f.removeAttr(r, h) : r.setAttribute(h, h), h
            }
        }, f.each(f.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var h = xi[s] || f.find.attr;
            xi[s] = function(p, w, x) {
                var T, U, G = w.toLowerCase();
                return x || (U = xi[G], xi[G] = T, T = h(p, w, x) != null ? G : null, xi[G] = U), T
            }
        });
        var Eo = /^(?:input|select|textarea|button)$/i,
            So = /^(?:a|area)$/i;
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
            prop: function(r, s, h) {
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !f.isXMLDoc(r)) && (s = f.propFix[s] || s, w = f.propHooks[s]), h !== void 0 ? w && "set" in w && (p = w.set(r, h, s)) !== void 0 ? p : r[s] = h : w && "get" in w && (p = w.get(r, s)) !== null ? p : r[s]
            },
            propHooks: {
                tabIndex: {
                    get: function(r) {
                        var s = f.find.attr(r, "tabindex");
                        return s ? parseInt(s, 10) : Eo.test(r.nodeName) || So.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), W.optSelected || (f.propHooks.selected = {
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

        function qn(r) {
            var s = r.match(Te) || [];
            return s.join(" ")
        }

        function Wn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Lr(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Te) || [] : []
        }
        f.fn.extend({
            addClass: function(r) {
                var s, h, p, w, x, T, U, G = 0;
                if (re(r)) return this.each(function(ee) {
                    f(this).addClass(r.call(this, ee, Wn(this)))
                });
                if (s = Lr(r), s.length) {
                    for (; h = this[G++];)
                        if (w = Wn(h), p = h.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            U = qn(p), w !== U && h.setAttribute("class", U)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, h, p, w, x, T, U, G = 0;
                if (re(r)) return this.each(function(ee) {
                    f(this).removeClass(r.call(this, ee, Wn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Lr(r), s.length) {
                    for (; h = this[G++];)
                        if (w = Wn(h), p = h.nodeType === 1 && " " + qn(w) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                            U = qn(p), w !== U && h.setAttribute("class", U)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var h = typeof r,
                    p = h === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(w) {
                    f(this).toggleClass(r.call(this, w, Wn(this), s), s)
                }) : this.each(function() {
                    var w, x, T, U;
                    if (p)
                        for (x = 0, T = f(this), U = Lr(r); w = U[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || h === "boolean") && (w = Wn(this), w && de.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : de.get(this, "__className__") || ""))
                })
            },
            hasClass: function(r) {
                var s, h, p = 0;
                for (s = " " + r + " "; h = this[p++];)
                    if (h.nodeType === 1 && (" " + qn(Wn(h)) + " ").indexOf(s) > -1) return !0;
                return !1
            }
        });
        var _o = /\r/g;
        f.fn.extend({
            val: function(r) {
                var s, h, p, w = this[0];
                return arguments.length ? (p = re(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, f(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = f.map(T, function(U) {
                        return U == null ? "" : U + ""
                    })), s = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = f.valHooks[w.type] || f.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (h = s.get(w, "value")) !== void 0 ? h : (h = w.value, typeof h == "string" ? h.replace(_o, "") : h == null ? "" : h)) : void 0
            }
        }), f.extend({
            valHooks: {
                option: {
                    get: function(r) {
                        var s = f.find.attr(r, "value");
                        return s != null ? s : qn(f.text(r))
                    }
                },
                select: {
                    get: function(r) {
                        var s, h, p, w = r.options,
                            x = r.selectedIndex,
                            T = r.type === "select-one",
                            U = T ? null : [],
                            G = T ? x + 1 : w.length;
                        for (x < 0 ? p = G : p = T ? x : 0; p < G; p++)
                            if (h = w[p], (h.selected || p === x) && !h.disabled && (!h.parentNode.disabled || !Q(h.parentNode, "optgroup"))) {
                                if (s = f(h).val(), T) return s;
                                U.push(s)
                            } return U
                    },
                    set: function(r, s) {
                        for (var h, p, w = r.options, x = f.makeArray(s), T = w.length; T--;) p = w[T], (p.selected = f.inArray(f.valHooks.option.get(p), x) > -1) && (h = !0);
                        return h || (r.selectedIndex = -1), x
                    }
                }
            }
        }), f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = {
                set: function(r, s) {
                    if (Array.isArray(s)) return r.checked = f.inArray(f(r).val(), s) > -1
                }
            }, W.checkOn || (f.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), W.focusin = "onfocusin" in e;
        var Dr = /^(?:focusinfocus|focusoutblur)$/,
            Yn = function(r) {
                r.stopPropagation()
            };
        f.extend(f.event, {
            trigger: function(r, s, h, p) {
                var w, x, T, U, G, ee, ce, Ce, se = [h || D],
                    ue = $.call(r, "type") ? r.type : r,
                    Ge = $.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = Ce = T = h = h || D, !(h.nodeType === 3 || h.nodeType === 8) && !Dr.test(ue + f.event.triggered) && (ue.indexOf(".") > -1 && (Ge = ue.split("."), ue = Ge.shift(), Ge.sort()), G = ue.indexOf(":") < 0 && "on" + ue, r = r[f.expando] ? r : new f.Event(ue, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ge.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = h), s = s == null ? [r] : f.makeArray(s, [r]), ce = f.event.special[ue] || {}, !(!p && ce.trigger && ce.trigger.apply(h, s) === !1))) {
                    if (!p && !ce.noBubble && !v(h)) {
                        for (U = ce.delegateType || ue, Dr.test(U + ue) || (x = x.parentNode); x; x = x.parentNode) se.push(x), T = x;
                        T === (h.ownerDocument || D) && se.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = se[w++]) && !r.isPropagationStopped();) Ce = x, r.type = w > 1 ? U : ce.bindType || ue, ee = (de.get(x, "events") || Object.create(null))[r.type] && de.get(x, "handle"), ee && ee.apply(x, s), ee = G && x[G], ee && ee.apply && ie(x) && (r.result = ee.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ue, !p && !r.isDefaultPrevented() && (!ce._default || ce._default.apply(se.pop(), s) === !1) && ie(h) && G && re(h[ue]) && !v(h) && (T = h[G], T && (h[G] = null), f.event.triggered = ue, r.isPropagationStopped() && Ce.addEventListener(ue, Yn), h[ue](), r.isPropagationStopped() && Ce.removeEventListener(ue, Yn), f.event.triggered = void 0, T && (h[G] = T)), r.result
                }
            },
            simulate: function(r, s, h) {
                var p = f.extend(new f.Event, h, {
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
                var h = this[0];
                if (h) return f.event.trigger(r, s, h, !0)
            }
        }), W.focusin || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            var h = function(p) {
                f.event.simulate(s, p.target, f.event.fix(p))
            };
            f.event.special[s] = {
                setup: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = de.access(p, s);
                    w || p.addEventListener(r, h, !0), de.access(p, s, (w || 0) + 1)
                },
                teardown: function() {
                    var p = this.ownerDocument || this.document || this,
                        w = de.access(p, s) - 1;
                    w ? de.access(p, s, w) : (p.removeEventListener(r, h, !0), de.remove(p, s))
                }
            }
        });
        var Ei = e.location,
            Mr = {
                guid: Date.now()
            },
            qi = /\?/;
        f.parseXML = function(r) {
            var s, h;
            if (!r || typeof r != "string") return null;
            try {
                s = new e.DOMParser().parseFromString(r, "text/xml")
            } catch {}
            return h = s && s.getElementsByTagName("parsererror")[0], (!s || h) && f.error("Invalid XML: " + (h ? f.map(h.childNodes, function(p) {
                return p.textContent
            }).join(`
`) : r)), s
        };
        var ko = /\[\]$/,
            vs = /\r?\n/g,
            To = /^(?:submit|button|image|reset|file)$/i,
            Ao = /^(?:input|select|textarea|keygen)/i;

        function Pr(r, s, h, p) {
            var w;
            if (Array.isArray(s)) f.each(s, function(x, T) {
                h || ko.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, h, p)
            });
            else if (!h && oe(s) === "object")
                for (w in s) Pr(r + "[" + w + "]", s[w], h, p);
            else p(r, s)
        }
        f.param = function(r, s) {
            var h, p = [],
                w = function(x, T) {
                    var U = re(T) ? T() : T;
                    p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(U == null ? "" : U)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !f.isPlainObject(r)) f.each(r, function() {
                w(this.name, this.value)
            });
            else
                for (h in r) Pr(h, r[h], s, w);
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
                    return this.name && !f(this).is(":disabled") && Ao.test(this.nodeName) && !To.test(r) && (this.checked || !pe.test(r))
                }).map(function(r, s) {
                    var h = f(this).val();
                    return h == null ? null : Array.isArray(h) ? f.map(h, function(p) {
                        return {
                            name: s.name,
                            value: p.replace(vs, `\r
`)
                        }
                    }) : {
                        name: s.name,
                        value: h.replace(vs, `\r
`)
                    }
                }).get()
            }
        });
        var Oo = /%20/g,
            Ro = /#.*$/,
            Io = /([?&])_=[^&]*/,
            Xn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ys = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Lo = /^(?:GET|HEAD)$/,
            Do = /^\/\//,
            ws = {},
            Nr = {},
            bs = "*/".concat("*"),
            Vr = D.createElement("a");
        Vr.href = Ei.href;

        function Cs(r) {
            return function(s, h) {
                typeof s != "string" && (h = s, s = "*");
                var p, w = 0,
                    x = s.toLowerCase().match(Te) || [];
                if (re(h))
                    for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(h)) : (r[p] = r[p] || []).push(h)
            }
        }

        function xs(r, s, h, p) {
            var w = {},
                x = r === Nr;

            function T(U) {
                var G;
                return w[U] = !0, f.each(r[U] || [], function(ee, ce) {
                    var Ce = ce(s, h, p);
                    if (typeof Ce == "string" && !x && !w[Ce]) return s.dataTypes.unshift(Ce), T(Ce), !1;
                    if (x) return !(G = Ce)
                }), G
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function $r(r, s) {
            var h, p, w = f.ajaxSettings.flatOptions || {};
            for (h in s) s[h] !== void 0 && ((w[h] ? r : p || (p = {}))[h] = s[h]);
            return p && f.extend(!0, r, p), r
        }

        function Mo(r, s, h) {
            for (var p, w, x, T, U = r.contents, G = r.dataTypes; G[0] === "*";) G.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (w in U)
                    if (U[w] && U[w].test(p)) {
                        G.unshift(w);
                        break
                    }
            }
            if (G[0] in h) x = G[0];
            else {
                for (w in h) {
                    if (!G[0] || r.converters[w + " " + G[0]]) {
                        x = w;
                        break
                    }
                    T || (T = w)
                }
                x = x || T
            }
            if (x) return x !== G[0] && G.unshift(x), h[x]
        }

        function Po(r, s, h, p) {
            var w, x, T, U, G, ee = {},
                ce = r.dataTypes.slice();
            if (ce[1])
                for (T in r.converters) ee[T.toLowerCase()] = r.converters[T];
            for (x = ce.shift(); x;)
                if (r.responseFields[x] && (h[r.responseFields[x]] = s), !G && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), G = x, x = ce.shift(), x) {
                    if (x === "*") x = G;
                    else if (G !== "*" && G !== x) {
                        if (T = ee[G + " " + x] || ee["* " + x], !T) {
                            for (w in ee)
                                if (U = w.split(" "), U[1] === x && (T = ee[G + " " + U[0]] || ee["* " + U[0]], T)) {
                                    T === !0 ? T = ee[w] : ee[w] !== !0 && (x = U[0], ce.unshift(U[1]));
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
                                    error: T ? Ce : "No conversion from " + G + " to " + x
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
                    "text xml": f.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(r, s) {
                return s ? $r($r(r, f.ajaxSettings), s) : $r(f.ajaxSettings, r)
            },
            ajaxPrefilter: Cs(ws),
            ajaxTransport: Cs(Nr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var h, p, w, x, T, U, G, ee, ce, Ce, se = f.ajaxSetup({}, s),
                    ue = se.context || se,
                    Ge = se.context && (ue.nodeType || ue.jquery) ? f(ue) : f.event,
                    st = f.Deferred(),
                    je = f.Callbacks("once memory"),
                    Ut = se.statusCode || {},
                    Vt = {},
                    un = {},
                    St = "canceled",
                    et = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Dt;
                            if (G) {
                                if (!x)
                                    for (x = {}; Dt = Xn.exec(w);) x[Dt[1].toLowerCase() + " "] = (x[Dt[1].toLowerCase() + " "] || []).concat(Dt[2]);
                                Dt = x[ft.toLowerCase() + " "]
                            }
                            return Dt == null ? null : Dt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return G ? w : null
                        },
                        setRequestHeader: function(ft, Dt) {
                            return G == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Vt[ft] = Dt), this
                        },
                        overrideMimeType: function(ft) {
                            return G == null && (se.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Dt;
                            if (ft)
                                if (G) et.always(ft[et.status]);
                                else
                                    for (Dt in ft) Ut[Dt] = [Ut[Dt], ft[Dt]];
                            return this
                        },
                        abort: function(ft) {
                            var Dt = ft || St;
                            return h && h.abort(Dt), on(0, Dt), this
                        }
                    };
                if (st.promise(et), se.url = ((r || se.url || Ei.href) + "").replace(Do, Ei.protocol + "//"), se.type = s.method || s.type || se.method || se.type, se.dataTypes = (se.dataType || "*").toLowerCase().match(Te) || [""], se.crossDomain == null) {
                    U = D.createElement("a");
                    try {
                        U.href = se.url, U.href = U.href, se.crossDomain = Vr.protocol + "//" + Vr.host != U.protocol + "//" + U.host
                    } catch {
                        se.crossDomain = !0
                    }
                }
                if (se.data && se.processData && typeof se.data != "string" && (se.data = f.param(se.data, se.traditional)), xs(ws, se, s, et), G) return et;
                ee = f.event && se.global, ee && f.active++ === 0 && f.event.trigger("ajaxStart"), se.type = se.type.toUpperCase(), se.hasContent = !Lo.test(se.type), p = se.url.replace(Ro, ""), se.hasContent ? se.data && se.processData && (se.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (se.data = se.data.replace(Oo, "+")) : (Ce = se.url.slice(p.length), se.data && (se.processData || typeof se.data == "string") && (p += (qi.test(p) ? "&" : "?") + se.data, delete se.data), se.cache === !1 && (p = p.replace(Io, "$1"), Ce = (qi.test(p) ? "&" : "?") + "_=" + Mr.guid++ + Ce), se.url = p + Ce), se.ifModified && (f.lastModified[p] && et.setRequestHeader("If-Modified-Since", f.lastModified[p]), f.etag[p] && et.setRequestHeader("If-None-Match", f.etag[p])), (se.data && se.hasContent && se.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", se.contentType), et.setRequestHeader("Accept", se.dataTypes[0] && se.accepts[se.dataTypes[0]] ? se.accepts[se.dataTypes[0]] + (se.dataTypes[0] !== "*" ? ", " + bs + "; q=0.01" : "") : se.accepts["*"]);
                for (ce in se.headers) et.setRequestHeader(ce, se.headers[ce]);
                if (se.beforeSend && (se.beforeSend.call(ue, et, se) === !1 || G)) return et.abort();
                if (St = "abort", je.add(se.complete), et.done(se.success), et.fail(se.error), h = xs(Nr, se, s, et), !h) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, ee && Ge.trigger("ajaxSend", [et, se]), G) return et;
                    se.async && se.timeout > 0 && (T = e.setTimeout(function() {
                        et.abort("timeout")
                    }, se.timeout));
                    try {
                        G = !1, h.send(Vt, on)
                    } catch (ft) {
                        if (G) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Dt, _i, Wi) {
                    var hn, Kn, Jn, an, Dn, vn = Dt;
                    G || (G = !0, T && e.clearTimeout(T), h = void 0, w = Wi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, _i && (an = Mo(se, et, _i)), !hn && f.inArray("script", se.dataTypes) > -1 && f.inArray("json", se.dataTypes) < 0 && (se.converters["text script"] = function() {}), an = Po(se, an, et, hn), hn ? (se.ifModified && (Dn = et.getResponseHeader("Last-Modified"), Dn && (f.lastModified[p] = Dn), Dn = et.getResponseHeader("etag"), Dn && (f.etag[p] = Dn)), ft === 204 || se.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? st.resolveWith(ue, [Kn, vn, et]) : st.rejectWith(ue, [et, vn, Jn]), et.statusCode(Ut), Ut = void 0, ee && Ge.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, se, hn ? Kn : Jn]), je.fireWith(ue, [et, vn]), ee && (Ge.trigger("ajaxComplete", [et, se]), --f.active || f.event.trigger("ajaxStop")))
                }
                return et
            },
            getJSON: function(r, s, h) {
                return f.get(r, s, h, "json")
            },
            getScript: function(r, s) {
                return f.get(r, void 0, s, "script")
            }
        }), f.each(["get", "post"], function(r, s) {
            f[s] = function(h, p, w, x) {
                return re(p) && (x = x || w, w = p, p = void 0), f.ajax(f.extend({
                    url: h,
                    type: s,
                    dataType: x,
                    data: p,
                    success: w
                }, f.isPlainObject(h) && h))
            }
        }), f.ajaxPrefilter(function(r) {
            var s;
            for (s in r.headers) s.toLowerCase() === "content-type" && (r.contentType = r.headers[s] || "")
        }), f._evalUrl = function(r, s, h) {
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
                    f.globalEval(p, s, h)
                }
            })
        }, f.fn.extend({
            wrapAll: function(r) {
                var s;
                return this[0] && (re(r) && (r = r.call(this[0])), s = f(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
                    for (var h = this; h.firstElementChild;) h = h.firstElementChild;
                    return h
                }).append(this)), this
            },
            wrapInner: function(r) {
                return re(r) ? this.each(function(s) {
                    f(this).wrapInner(r.call(this, s))
                }) : this.each(function() {
                    var s = f(this),
                        h = s.contents();
                    h.length ? h.wrapAll(r) : s.append(r)
                })
            },
            wrap: function(r) {
                var s = re(r);
                return this.each(function(h) {
                    f(this).wrapAll(s ? r.call(this, h) : r)
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
        var No = {
                0: 200,
                1223: 204
            },
            Si = f.ajaxSettings.xhr();
        W.cors = !!Si && "withCredentials" in Si, W.ajax = Si = !!Si, f.ajaxTransport(function(r) {
            var s, h;
            if (W.cors || Si && !r.crossDomain) return {
                send: function(p, w) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
                    s = function(U) {
                        return function() {
                            s && (s = h = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, U === "abort" ? T.abort() : U === "error" ? typeof T.status != "number" ? w(0, "error") : w(T.status, T.statusText) : w(No[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
                                binary: T.response
                            } : {
                                text: T.responseText
                            }, T.getAllResponseHeaders()))
                        }
                    }, T.onload = s(), h = T.onerror = T.ontimeout = s("error"), T.onabort !== void 0 ? T.onabort = h : T.onreadystatechange = function() {
                        T.readyState === 4 && e.setTimeout(function() {
                            s && h()
                        })
                    }, s = s("abort");
                    try {
                        T.send(r.hasContent && r.data || null)
                    } catch (U) {
                        if (s) throw U
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
                var s, h;
                return {
                    send: function(p, w) {
                        s = f("<script>").attr(r.scriptAttrs || {}).prop({
                            charset: r.scriptCharset,
                            src: r.url
                        }).on("load error", h = function(x) {
                            s.remove(), h = null, x && w(x.type === "error" ? 404 : 200, x.type)
                        }), D.head.appendChild(s[0])
                    },
                    abort: function() {
                        h && h()
                    }
                }
            }
        });
        var Br = [],
            jr = /(=)\?(?=&|$)|\?\?/;
        f.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = Br.pop() || f.expando + "_" + Mr.guid++;
                return this[r] = !0, r
            }
        }), f.ajaxPrefilter("json jsonp", function(r, s, h) {
            var p, w, x, T = r.jsonp !== !1 && (jr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && jr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (qi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || f.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, h.always(function() {
                w === void 0 ? f(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, Br.push(p)), x && re(w) && w(x[0]), x = w = void 0
            }), "script"
        }), W.createHTMLDocument = function() {
            var r = D.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), f.parseHTML = function(r, s, h) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (h = s, s = !1);
            var p, w, x;
            return s || (W.createHTMLDocument ? (s = D.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = D.location.href, s.head.appendChild(p)) : s = D), w = Fe.exec(r), x = !h && [], w ? [s.createElement(w[1])] : (w = In([r], s, x), x && x.length && f(x).remove(), f.merge([], w.childNodes))
        }, f.fn.load = function(r, s, h) {
            var p, w, x, T = this,
                U = r.indexOf(" ");
            return U > -1 && (p = qn(r.slice(U)), r = r.slice(0, U)), re(s) ? (h = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && f.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(G) {
                x = arguments, T.html(p ? f("<div>").append(f.parseHTML(G)).find(p) : G)
            }).always(h && function(G, ee) {
                T.each(function() {
                    h.apply(this, x || [G.responseText, ee, G])
                })
            }), this
        }, f.expr.pseudos.animated = function(r) {
            return f.grep(f.timers, function(s) {
                return r === s.elem
            }).length
        }, f.offset = {
            setOffset: function(r, s, h) {
                var p, w, x, T, U, G, ee, ce = f.css(r, "position"),
                    Ce = f(r),
                    se = {};
                ce === "static" && (r.style.position = "relative"), U = Ce.offset(), x = f.css(r, "top"), G = f.css(r, "left"), ee = (ce === "absolute" || ce === "fixed") && (x + G).indexOf("auto") > -1, ee ? (p = Ce.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(G) || 0), re(s) && (s = s.call(r, h, f.extend({}, U))), s.top != null && (se.top = s.top - U.top + T), s.left != null && (se.left = s.left - U.left + w), "using" in s ? s.using.call(r, se) : Ce.css(se)
            }
        }, f.fn.extend({
            offset: function(r) {
                if (arguments.length) return r === void 0 ? this : this.each(function(w) {
                    f.offset.setOffset(this, r, w)
                });
                var s, h, p = this[0];
                if (!!p) return p.getClientRects().length ? (s = p.getBoundingClientRect(), h = p.ownerDocument.defaultView, {
                    top: s.top + h.pageYOffset,
                    left: s.left + h.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                }
            },
            position: function() {
                if (!!this[0]) {
                    var r, s, h, p = this[0],
                        w = {
                            top: 0,
                            left: 0
                        };
                    if (f.css(p, "position") === "fixed") s = p.getBoundingClientRect();
                    else {
                        for (s = this.offset(), h = p.ownerDocument, r = p.offsetParent || h.documentElement; r && (r === h.body || r === h.documentElement) && f.css(r, "position") === "static";) r = r.parentNode;
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
                    return r || Jt
                })
            }
        }), f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(r, s) {
            var h = s === "pageYOffset";
            f.fn[r] = function(p) {
                return g(this, function(w, x, T) {
                    var U;
                    if (v(w) ? U = w : w.nodeType === 9 && (U = w.defaultView), T === void 0) return U ? U[s] : w[x];
                    U ? U.scrollTo(h ? U.pageXOffset : T, h ? T : U.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), f.each(["top", "left"], function(r, s) {
            f.cssHooks[s] = y(W.pixelPosition, function(h, p) {
                if (p) return p = Ze(h, s), bi.test(p) ? f(h).position()[s] + "px" : p
            })
        }), f.each({
            Height: "height",
            Width: "width"
        }, function(r, s) {
            f.each({
                padding: "inner" + r,
                content: s,
                "": "outer" + r
            }, function(h, p) {
                f.fn[p] = function(w, x) {
                    var T = arguments.length && (h || typeof w != "boolean"),
                        U = h || (w === !0 || x === !0 ? "margin" : "border");
                    return g(this, function(G, ee, ce) {
                        var Ce;
                        return v(G) ? p.indexOf("outer") === 0 ? G["inner" + r] : G.document.documentElement["client" + r] : G.nodeType === 9 ? (Ce = G.documentElement, Math.max(G.body["scroll" + r], Ce["scroll" + r], G.body["offset" + r], Ce["offset" + r], Ce["client" + r])) : ce === void 0 ? f.css(G, ee, U) : f.style(G, ee, ce, U)
                    }, s, T ? w : void 0, T)
                }
            })
        }), f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(r, s) {
            f.fn[s] = function(h) {
                return this.on(s, h)
            }
        }), f.fn.extend({
            bind: function(r, s, h) {
                return this.on(r, null, s, h)
            },
            unbind: function(r, s) {
                return this.off(r, null, s)
            },
            delegate: function(r, s, h, p) {
                return this.on(s, r, h, p)
            },
            undelegate: function(r, s, h) {
                return arguments.length === 1 ? this.off(r, "**") : this.off(s, r || "**", h)
            },
            hover: function(r, s) {
                return this.mouseenter(r).mouseleave(s || r)
            }
        }), f.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(r, s) {
            f.fn[s] = function(h, p) {
                return arguments.length > 0 ? this.on(s, null, h, p) : this.trigger(s)
            }
        });
        var Es = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        f.proxy = function(r, s) {
            var h, p, w;
            if (typeof s == "string" && (h = r[s], s = r, r = h), !!re(r)) return p = c.call(arguments, 2), w = function() {
                return r.apply(s || this, p.concat(c.call(arguments)))
            }, w.guid = r.guid = r.guid || f.guid++, w
        }, f.holdReady = function(r) {
            r ? f.readyWait++ : f.ready(!0)
        }, f.isArray = Array.isArray, f.parseJSON = JSON.parse, f.nodeName = Q, f.isFunction = re, f.isWindow = v, f.camelCase = V, f.type = oe, f.now = Date.now, f.isNumeric = function(r) {
            var s = f.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, f.trim = function(r) {
            return r == null ? "" : (r + "").replace(Es, "")
        };
        var Vo = e.jQuery,
            $o = e.$;
        return f.noConflict = function(r) {
            return e.$ === f && (e.$ = $o), r && e.jQuery === f && (e.jQuery = Vo), f
        }, typeof n > "u" && (e.jQuery = e.$ = f), f
    })
})(Na);
const j = Na.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Ni.exports,
                o;
            try {
                o = Na.exports
            } catch {}
            e(n, t, i, o)
        }
    })(function(e, n, i, o) {
        var c = e.Backbone,
            m = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = o, n.noConflict = function() {
            return e.Backbone = c, this
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
                        return function(S, O, P) {
                            return i[l](this[g], I(S, this), O, P)
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
            $ = n.Events = {},
            H = /\s+/,
            te = function(E, l, g, S, O) {
                var P = 0,
                    V;
                if (g && typeof g == "object")
                    for (S !== void 0 && ("context" in O) && O.context === void 0 && (O.context = S), V = i.keys(g); P < V.length; P++) l = te(E, l, V[P], g[V[P]], O);
                else if (g && H.test(g))
                    for (V = g.split(H); P < V.length; P++) l = E(l, V[P], S, O);
                else l = E(l, g, S, O);
                return l
            };
        $.on = function(E, l, g) {
            return W(this, E, l, g)
        };
        var W = function(E, l, g, S, O) {
            if (E._events = te(re, E._events || {}, l, g, {
                    context: S,
                    ctx: E,
                    listening: O
                }), O) {
                var P = E._listeners || (E._listeners = {});
                P[O.id] = O
            }
            return E
        };
        $.listenTo = function(E, l, g) {
            if (!E) return this;
            var S = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                P = O[S];
            if (!P) {
                var V = this._listenId || (this._listenId = i.uniqueId("l"));
                P = O[S] = {
                    obj: E,
                    objId: S,
                    id: V,
                    listeningTo: O,
                    count: 0
                }
            }
            return W(E, l, g, this, P), this
        };
        var re = function(E, l, g, S) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    P = S.context,
                    V = S.ctx,
                    ie = S.listening;
                ie && ie.count++, O.push({
                    callback: g,
                    context: P,
                    ctx: P || V,
                    listening: ie
                })
            }
            return E
        };
        $.off = function(E, l, g) {
            return this._events ? (this._events = te(v, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, $.stopListening = function(E, l, g) {
            var S = this._listeningTo;
            if (!S) return this;
            for (var O = E ? [E._listenId] : i.keys(S), P = 0; P < O.length; P++) {
                var V = S[O[P]];
                if (!V) break;
                V.obj.off(l, g, this)
            }
            return this
        };
        var v = function(E, l, g, S) {
            if (!!E) {
                var O = 0,
                    P, V = S.context,
                    ie = S.listeners;
                if (!l && !g && !V) {
                    for (var ke = i.keys(ie); O < ke.length; O++) P = ie[ke[O]], delete ie[P.id], delete P.listeningTo[P.objId];
                    return
                }
                for (var de = l ? [l] : i.keys(E); O < de.length; O++) {
                    l = de[O];
                    var Le = E[l];
                    if (!Le) break;
                    for (var De = [], it = 0; it < Le.length; it++) {
                        var Ct = Le[it];
                        g && g !== Ct.callback && g !== Ct.callback._callback || V && V !== Ct.context ? De.push(Ct) : (P = Ct.listening, P && --P.count === 0 && (delete ie[P.id], delete P.listeningTo[P.objId]))
                    }
                    De.length ? E[l] = De : delete E[l]
                }
                return E
            }
        };
        $.once = function(E, l, g) {
            var S = te(D, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(S, l, g)
        }, $.listenToOnce = function(E, l, g) {
            var S = te(D, {}, l, g, i.bind(this.stopListening, this, E));
            return this.listenTo(E, S)
        };
        var D = function(E, l, g, S) {
            if (g) {
                var O = E[l] = i.once(function() {
                    S(l, O), g.apply(this, arguments)
                });
                O._callback = g
            }
            return E
        };
        $.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), S = 0; S < l; S++) g[S] = arguments[S + 1];
            return te(Y, this._events, E, void 0, g), this
        };
        var Y = function(E, l, g, S) {
                if (E) {
                    var O = E[l],
                        P = E.all;
                    O && P && (P = P.slice()), O && le(O, S), P && le(P, [l].concat(S))
                }
                return E
            },
            le = function(E, l) {
                var g, S = -1,
                    O = E.length,
                    P = l[0],
                    V = l[1],
                    ie = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, P);
                        return;
                    case 2:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, P, V);
                        return;
                    case 3:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, P, V, ie);
                        return;
                    default:
                        for (; ++S < O;)(g = E[S]).callback.apply(g.ctx, l);
                        return
                }
            };
        $.bind = $.on, $.unbind = $.off, i.extend(n, $);
        var oe = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var S = i.result(this, "defaults");
            g = i.defaults(i.extend({}, S, g), S), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(oe.prototype, $, {
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
                    P = g.silent,
                    V = [],
                    ie = this._changing;
                this._changing = !0, ie || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var ke = this.attributes,
                    de = this.changed,
                    Le = this._previousAttributes;
                for (var De in S) l = S[De], i.isEqual(ke[De], l) || V.push(De), i.isEqual(Le[De], l) ? delete de[De] : de[De] = l, O ? delete ke[De] : ke[De] = l;
                if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !P) {
                    V.length && (this._pending = g);
                    for (var it = 0; it < V.length; it++) this.trigger("change:" + V[it], this, ke[V[it]], g)
                }
                if (ie) return this;
                if (!P)
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
                }, qt(this, E), this.sync("read", this, E)
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
                var P = this,
                    V = g.success,
                    ie = this.attributes;
                g.success = function(Le) {
                    P.attributes = ie;
                    var De = g.parse ? P.parse(Le, g) : Le;
                    if (O && (De = i.extend({}, S, De)), De && !P.set(De, g)) return !1;
                    V && V.call(g.context, P, Le, g), P.trigger("sync", P, Le, g)
                }, qt(this, g), S && O && (this.attributes = i.extend({}, ie, S));
                var ke = this.isNew() ? "create" : g.patch ? "patch" : "update";
                ke === "patch" && !g.attrs && (g.attrs = S);
                var de = this.sync(ke, this, g);
                return this.attributes = ie, de
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    S = E.wait,
                    O = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(V) {
                    S && O(), g && g.call(E.context, l, V, E), l.isNew() || l.trigger("sync", l, V, E)
                };
                var P = !1;
                return this.isNew() ? i.defer(E.success) : (qt(this, E), P = this.sync("delete", this, E)), S || O(), P
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
        k(oe, ye, "attributes");
        var f = n.Collection = function(E, l) {
                l || (l = {}), l.model && (this.model = l.model), l.comparator !== void 0 && (this.comparator = l.comparator), this._reset(), this.initialize.apply(this, arguments), E && this.reset(E, i.extend({
                    silent: !0
                }, l))
            },
            Se = {
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
                var S = Array(E.length - g),
                    O = l.length,
                    P;
                for (P = 0; P < S.length; P++) S[P] = E[P + g];
                for (P = 0; P < O; P++) E[P + g] = l[P];
                for (P = 0; P < S.length; P++) E[P + O + g] = S[P]
            };
        i.extend(f.prototype, $, {
            model: oe,
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
                var S = this._removeModels(E, l);
                return !l.silent && S.length && (l.changes = {
                    added: [],
                    merged: [],
                    removed: S
                }, this.trigger("update", this, l)), g ? S[0] : S
            },
            set: function(E, l) {
                if (E != null) {
                    l = i.extend({}, Se, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var S = l.at;
                    S != null && (S = +S), S > this.length && (S = this.length), S < 0 && (S += this.length + 1);
                    var O = [],
                        P = [],
                        V = [],
                        ie = [],
                        ke = {},
                        de = l.add,
                        Le = l.merge,
                        De = l.remove,
                        it = !1,
                        Ct = this.comparator && S == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (Le && ct !== bt) {
                                var Jt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Jt = bt.parse(Jt, l)), bt.set(Jt, l), V.push(bt), Ct && !it && (it = bt.hasChanged(rn))
                            }
                            ke[bt.cid] || (ke[bt.cid] = !0, O.push(bt)), E[yt] = bt
                        } else de && (ct = E[yt] = this._prepareModel(ct, l), ct && (P.push(ct), this._addReference(ct, l), ke[ct.cid] = !0, O.push(ct)))
                    }
                    if (De) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], ke[ct.cid] || ie.push(ct);
                        ie.length && this._removeModels(ie, l)
                    }
                    var Je = !1,
                        Pt = !Ct && de && De;
                    if (O.length && Pt ? (Je = this.length !== O.length || i.some(this.models, function(F, N) {
                            return F !== O[N]
                        }), this.models.length = 0, Pe(this.models, O, 0), this.length = this.models.length) : P.length && (Ct && (it = !0), Pe(this.models, P, S == null ? this.length : S), this.length = this.models.length), it && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < P.length; yt++) S != null && (l.index = S + yt), ct = P[yt], ct.trigger("add", ct, this, l);
                        (it || Je) && this.trigger("sort", this, l), (P.length || ie.length || V.length) && (l.changes = {
                            added: P,
                            removed: ie,
                            merged: V
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
                }, qt(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var S = this,
                    O = l.success;
                return l.success = function(P, V, ie) {
                    g && S.add(P, ie), O && O.call(ie.context, P, V, ie)
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
                        var P = this.indexOf(O);
                        this.models.splice(P, 1), this.length--, delete this._byId[O.cid];
                        var V = this.modelId(O.attributes);
                        V != null && delete this._byId[V], l.silent || (l.index = P, O.trigger("remove", O, this, l)), g.push(O), this._removeReference(O, l)
                    }
                }
                return g
            },
            _isModel: function(E) {
                return E instanceof oe
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
                            P = this.modelId(l.attributes);
                        O !== P && (O != null && delete this._byId[O], P != null && (this._byId[P] = l))
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
        k(f, lt, "models");
        var $e = n.View = function(E) {
                this.cid = i.uniqueId("view"), i.extend(this, i.pick(E, Fe)), this._ensureElement(), this.initialize.apply(this, arguments)
            },
            Q = /^(\S+)\s*(.*)$/,
            Fe = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
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
                        var S = l.match(Q);
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
            var S = q[E];
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
                var P = g.beforeSend;
                g.beforeSend = function(ke) {
                    if (ke.setRequestHeader("X-HTTP-Method-Override", S), P) return P.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var V = g.error;
            g.error = function(ke, de, Le) {
                g.textStatus = de, g.errorThrown = Le, V && V.call(g.context, ke, de, Le)
            };
            var ie = g.xhr = n.ajax(i.extend(O, g));
            return l.trigger("request", l, ie, g), ie
        };
        var q = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        n.ajax = function() {
            return n.$.ajax.apply(n.$, arguments)
        };
        var ae = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Ae = /\((.*?)\)/g,
            be = /(\(\?)?:\w+/g,
            we = /\*\w+/g,
            he = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(ae.prototype, $, {
            initialize: function() {},
            route: function(E, l, g) {
                i.isRegExp(E) || (E = this._routeToRegExp(E)), i.isFunction(l) && (g = l, l = ""), g || (g = this[l]);
                var S = this;
                return n.history.route(E, function(O) {
                    var P = S._extractParameters(E, O);
                    S.execute(g, P, l) !== !1 && (S.trigger.apply(S, ["route:" + l].concat(P)), S.trigger("route", l, P), n.history.trigger("route", S, l, P))
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
                return i.map(g, function(S, O) {
                    return O === g.length - 1 ? S || null : S ? decodeURIComponent(S) : null
                })
            }
        });
        var _e = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Te = /^[#\/]|\s+$/g,
            Be = /^\/+|\/+$/g,
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
                return E == null && (this._usePushState || !this._wantsHashChange ? E = this.getPath() : E = this.getHash()), E.replace(Te, "")
            },
            start: function(E) {
                if (_e.started) throw new Error("Backbone.history has already been started");
                if (_e.started = !0, this.options = i.extend({
                        root: "/"
                    }, this.options, E), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(Be, "/"), this._wantsHashChange && this._wantsPushState)
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
                var O = window.addEventListener || function(P, V) {
                    return attachEvent("on" + P, V)
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
                if (E = this.decodeFragment(E.replace(Ke, "")), this.fragment !== E) {
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
        oe.extend = f.extend = ae.extend = $e.extend = _e.extend = dt;
        var Bt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            qt = function(E, l) {
                var g = l.error;
                l.error = function(S) {
                    g && g.call(l.context, E, S, l), E.trigger("error", E, S, l)
                }
            };
        return n
    })
})(ot);
var yc = {
        exports: {}
    },
    Jo = {
        exports: {}
    },
    pl;

function gh() {
    return pl || (pl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Ni.exports, ot)
        })(vt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                    return typeof v
                } : function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol ? "symbol" : typeof v
                },
                c = i.Radio,
                m = i.Radio = {};
            m.VERSION = "2.0.0", m.noConflict = function() {
                return i.Radio = c, this
            }, m.DEBUG = !1, m._debugText = function(v, D, Y) {
                return v + (Y ? " on the " + Y + " channel" : "") + ': "' + D + '"'
            }, m.debugLog = function(v, D, Y) {
                m.DEBUG && console && console.warn && console.warn(m._debugText(v, D, Y))
            };
            var _ = /\s+/;
            m._eventsApi = function(v, D, Y, le) {
                if (!Y) return !1;
                var oe = {};
                if ((typeof Y > "u" ? "undefined" : o(Y)) === "object") {
                    for (var ye in Y) {
                        var f = v[D].apply(v, [ye, Y[ye]].concat(le));
                        _.test(ye) ? n.extend(oe, f) : oe[ye] = f
                    }
                    return oe
                }
                if (_.test(Y)) {
                    for (var Se = Y.split(_), Oe = 0, Pe = Se.length; Oe < Pe; Oe++) oe[Se[Oe]] = v[D].apply(v, [Se[Oe]].concat(le));
                    return oe
                }
                return !1
            }, m._callHandler = function(v, D, Y) {
                var le = Y[0],
                    oe = Y[1],
                    ye = Y[2];
                switch (Y.length) {
                    case 0:
                        return v.call(D);
                    case 1:
                        return v.call(D, le);
                    case 2:
                        return v.call(D, le, oe);
                    case 3:
                        return v.call(D, le, oe, ye);
                    default:
                        return v.apply(D, Y)
                }
            };

            function k(v, D, Y, le) {
                var oe = v[D];
                if ((!Y || Y === oe.callback || Y === oe.callback._callback) && (!le || le === oe.context)) return delete v[D], !0
            }

            function I(v, D, Y, le) {
                v || (v = {});
                for (var oe = D ? [D] : n.keys(v), ye = !1, f = 0, Se = oe.length; f < Se; f++) D = oe[f], !!v[D] && k(v, D, Y, le) && (ye = !0);
                return ye
            }
            var L = {};

            function $(v) {
                return L[v] || (L[v] = n.bind(m.log, m, v))
            }
            n.extend(m, {
                log: function(D, Y) {
                    if (!(typeof console > "u")) {
                        var le = n.toArray(arguments).slice(2);
                        console.log("[" + D + '] "' + Y + '"', le)
                    }
                },
                tuneIn: function(D) {
                    var Y = m.channel(D);
                    return Y._tunedIn = !0, Y.on("all", $(D)), this
                },
                tuneOut: function(D) {
                    var Y = m.channel(D);
                    return Y._tunedIn = !1, Y.off("all", $(D)), delete L[D], this
                }
            });

            function H(v) {
                return n.isFunction(v) ? v : function() {
                    return v
                }
            }
            m.Requests = {
                request: function(D) {
                    var Y = n.toArray(arguments).slice(1),
                        le = m._eventsApi(this, "request", D, Y);
                    if (le) return le;
                    var oe = this.channelName,
                        ye = this._requests;
                    if (oe && this._tunedIn && m.log.apply(this, [oe, D].concat(Y)), ye && (ye[D] || ye.default)) {
                        var f = ye[D] || ye.default;
                        return Y = ye[D] ? Y : arguments, m._callHandler(f.callback, f.context, Y)
                    } else m.debugLog("An unhandled request was fired", D, oe)
                },
                reply: function(D, Y, le) {
                    return m._eventsApi(this, "reply", D, [Y, le]) ? this : (this._requests || (this._requests = {}), this._requests[D] && m.debugLog("A request was overwritten", D, this.channelName), this._requests[D] = {
                        callback: H(Y),
                        context: le || this
                    }, this)
                },
                replyOnce: function(D, Y, le) {
                    if (m._eventsApi(this, "replyOnce", D, [Y, le])) return this;
                    var oe = this,
                        ye = n.once(function() {
                            return oe.stopReplying(D), H(Y).apply(this, arguments)
                        });
                    return this.reply(D, ye, le)
                },
                stopReplying: function(D, Y, le) {
                    return m._eventsApi(this, "stopReplying", D) ? this : (!D && !Y && !le ? delete this._requests : I(this._requests, D, Y, le) || m.debugLog("Attempted to remove the unregistered request", D, this.channelName), this)
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
            var te, W, re = [i.Events, m.Requests];
            return n.each(re, function(v) {
                n.each(v, function(D, Y) {
                    m[Y] = function(le) {
                        return W = n.toArray(arguments).slice(1), te = this.channel(le), te[Y].apply(te, W)
                    }
                })
            }), m.reset = function(v) {
                var D = v ? [this._channels[v]] : this._channels;
                n.each(D, function(Y) {
                    Y.reset()
                })
            }, m
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
        t.exports = i(ot, Ni.exports, gh())
    })(vt, function(n, i, o) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, o = o && o.hasOwnProperty("default") ? o.default : o;
        var c = "3.5.1",
            m = function(a) {
                return function(C) {
                    for (var A = arguments.length, Z = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Z[xe - 1] = arguments[xe];
                    return a.apply(C, Z)
                }
            },
            _ = n.Model.extend,
            k = function y(a, C) {
                i.isObject(a) && (a = a.prev + " is going to be removed in the future. Please use " + a.next + " instead." + (a.url ? " See: " + a.url : "")), !!Ze.DEV_MODE && (C === void 0 || !C) && !y._cache[a] && (y._warn("Deprecation warning: " + a), y._cache[a] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var I = function(a) {
                return document.documentElement.contains(a && a.parentNode)
            },
            L = function(a, C) {
                var A = this;
                !a || i.each(C, function(Z) {
                    var xe = a[Z];
                    xe !== void 0 && (A[Z] = xe)
                })
            },
            $ = function(a) {
                if (!!a) return this.options && this.options[a] !== void 0 ? this.options[a] : this[a]
            },
            H = function(a) {
                var C = this;
                return i.reduce(a, function(A, Z, xe) {
                    return i.isFunction(Z) || (Z = C[Z]), Z && (A[xe] = Z), A
                }, {})
            },
            te = /(^|:)(\w)/gi;

        function W(y, a, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(te, W)
        });

        function v(y) {
            for (var a = arguments.length, C = Array(a > 1 ? a - 1 : 0), A = 1; A < a; A++) C[A - 1] = arguments[A];
            var Z = re(y),
                xe = $.call(this, Z),
                qe = void 0;
            return i.isFunction(xe) && (qe = xe.apply(this, C)), this.trigger.apply(this, arguments), qe
        }

        function D(y) {
            for (var a = arguments.length, C = Array(a > 1 ? a - 1 : 0), A = 1; A < a; A++) C[A - 1] = arguments[A];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : v.apply(y, C)
        }

        function Y(y, a, C) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(A) {
                !C(A) || D(A, a, A)
            })
        }

        function le(y) {
            return !y._isAttached
        }

        function oe(y) {
            return le(y) ? (y._isAttached = !0, !0) : !1
        }

        function ye(y) {
            return y._isAttached
        }

        function f(y) {
            return ye(y) ? (y._isAttached = !1, !0) : !1
        }

        function Se(y) {
            y._isAttached && y._isRendered && D(y, "dom:refresh", y)
        }

        function Oe(y) {
            y._isAttached && y._isRendered && D(y, "dom:remove", y)
        }

        function Pe() {
            Y(this, "before:attach", le)
        }

        function lt() {
            Y(this, "attach", oe), Se(this)
        }

        function $e() {
            Y(this, "before:detach", ye), Oe(this)
        }

        function Q() {
            Y(this, "detach", f)
        }

        function Fe() {
            Oe(this)
        }

        function q() {
            Se(this)
        }

        function ae(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": $e,
                detach: Q,
                "before:render": Fe,
                render: q
            }))
        }
        var Ae = ["description", "fileName", "lineNumber", "name", "message", "number"],
            be = _.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + c + "/",
                constructor: function(a, C) {
                    i.isObject(a) ? (C = a, a = C.message) : C || (C = {});
                    var A = Error.call(this, a);
                    i.extend(this, i.pick(A, Ae), i.pick(C, Ae)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, be)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        be.extend = _;

        function we(y, a, C, A, Z) {
            var xe = A.split(/\s+/);
            xe.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(xe, function(qe) {
                var Lt = y[qe];
                if (!Lt) throw new be('Method "' + qe + '" was configured as an event handler, but does not exist.');
                y[Z](a, C, Lt)
            })
        }

        function he(y, a, C, A) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(Z, xe) {
                if (i.isString(Z)) {
                    we(y, a, xe, Z, A);
                    return
                }
                y[A](a, xe, Z)
            })
        }

        function _e(y, a) {
            return !y || !a ? this : (he(this, y, a, "listenTo"), this)
        }

        function Te(y, a) {
            return y ? a ? (he(this, y, a, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function Be(y, a, C, A) {
            if (!i.isObject(C)) throw new be({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Z = H.call(y, C);
            a[A](Z, y)
        }

        function Ke(y, a) {
            return !y || !a ? this : (Be(this, y, a, "reply"), this)
        }

        function dt(y, a) {
            return y ? a ? (Be(this, y, a, "stopReplying"), this) : (y.stopReplying(null, null, this), this) : this
        }
        var Bt = function(a) {
                this.options = i.extend({}, i.result(this, "options"), a)
            },
            qt = {
                normalizeMethods: H,
                _setOptions: Bt,
                mergeOptions: L,
                getOption: $,
                bindEvents: _e,
                unbindEvents: Te
            },
            E = {
                _initRadio: function() {
                    var a = i.result(this, "channelName");
                    if (!!a) {
                        if (!o) throw new be({
                            name: "BackboneRadioMissing",
                            message: 'The dependency "backbone.radio" is missing.'
                        });
                        var C = this._channel = o.channel(a),
                            A = i.result(this, "radioEvents");
                        this.bindEvents(C, A);
                        var Z = i.result(this, "radioRequests");
                        this.bindRequests(C, Z), this.on("destroy", this._destroyRadio)
                    }
                },
                _destroyRadio: function() {
                    this._channel.stopReplying(null, null, this)
                },
                getChannel: function() {
                    return this._channel
                },
                bindEvents: _e,
                unbindEvents: Te,
                bindRequests: Ke,
                unbindRequests: dt
            },
            l = ["channelName", "radioEvents", "radioRequests"],
            g = function(a) {
                this.hasOwnProperty("options") || this._setOptions(a), this.mergeOptions(a, l), this._setCid(), this._initRadio(), this.initialize.apply(this, arguments)
            };
        g.extend = _, i.extend(g.prototype, n.Events, qt, E, {
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
                for (var a = arguments.length, C = Array(a), A = 0; A < a; A++) C[A] = arguments[A];
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
                var A = this.templateCaches[a];
                return A || (A = new S(a), this.templateCaches[a] = A), A.load(C)
            },
            clear: function() {
                for (var a = void 0, C = arguments.length, A = Array(C), Z = 0; Z < C; Z++) A[Z] = arguments[Z];
                var xe = A.length;
                if (xe > 0)
                    for (a = 0; a < xe; a++) delete this.templateCaches[A[a]];
                else this.templateCaches = {}
            }
        }), i.extend(S.prototype, {
            load: function(a) {
                if (this.compiledTemplate) return this.compiledTemplate;
                var C = this.loadTemplate(this.templateId, a);
                return this.compiledTemplate = this.compileTemplate(C, a), this.compiledTemplate
            },
            loadTemplate: function(a, C) {
                var A = n.$(a);
                if (!A.length) throw new be({
                    name: "NoTemplateError",
                    message: 'Could not find template: "' + a + '"'
                });
                return A.html()
            },
            compileTemplate: function(a, C) {
                return i.template(a, C)
            }
        });
        var O = i.invokeMap || i.invoke;

        function P(y, a) {
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, a)[a] : Ze.Behaviors.behaviorsLookup[a]
        }

        function V(y, a) {
            return i.chain(a).map(function(C, A) {
                var Z = P(C, A),
                    xe = C === Z ? {} : C,
                    qe = new Z(xe, y),
                    Lt = V(y, i.result(qe, "behaviors"));
                return [qe].concat(Lt)
            }).flatten().value()
        }
        var ie = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var a = i.result(this, "behaviors");
                    return i.isObject(a) ? V(this, a) : {}
                },
                _getBehaviorTriggers: function() {
                    var a = O(this._behaviors, "getTriggers");
                    return i.reduce(a, function(C, A) {
                        return i.extend(C, A)
                    }, {})
                },
                _getBehaviorEvents: function() {
                    var a = O(this._behaviors, "getEvents");
                    return i.reduce(a, function(C, A) {
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
                    for (var a = arguments.length, C = Array(a), A = 0; A < a; A++) C[A] = arguments[A];
                    O.apply(void 0, [this._behaviors, "destroy"].concat(C))
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
                    for (var a = this._behaviors, C = 0, A = a && a.length; C < A; C++) v.apply(a[C], arguments)
                }
            },
            ke = {
                _delegateEntityEvents: function(a, C) {
                    var A = i.result(this, "modelEvents");
                    A && (Te.call(this, a, A), _e.call(this, a, A));
                    var Z = i.result(this, "collectionEvents");
                    Z && (Te.call(this, C, Z), _e.call(this, C, Z))
                },
                _undelegateEntityEvents: function(a, C) {
                    var A = i.result(this, "modelEvents");
                    Te.call(this, a, A);
                    var Z = i.result(this, "collectionEvents");
                    Te.call(this, C, Z)
                }
            },
            de = /^(\S+)\s*(.*)$/,
            Le = function(a, C) {
                var A = a.match(de);
                return A[1] + "." + C + " " + A[2]
            },
            De = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function it(y) {
            return !!De[y]
        }

        function Ct(y, a) {
            return De[y] = a
        }

        function rn(y, a) {
            i.isString(a) && (a = {
                event: a
            });
            var C = a.event,
                A = !!a.preventDefault;
            it("triggersPreventDefault") && (A = a.preventDefault !== !1);
            var Z = !!a.stopPropagation;
            return it("triggersStopPropagation") && (Z = a.stopPropagation !== !1),
                function(xe) {
                    A && xe.preventDefault(), Z && xe.stopPropagation(), y.triggerMethod(C, y, xe)
                }
        }
        var ct = {
                _getViewTriggers: function(a, C) {
                    var A = this;
                    return i.reduce(C, function(Z, xe, qe) {
                        return qe = Le(qe, "trig" + A.cid), Z[qe] = rn(a, xe), Z
                    }, {})
                }
            },
            yt = function(a, C) {
                return i.reduce(a, function(A, Z, xe) {
                    var qe = bt(xe, C);
                    return A[qe] = Z, A
                }, {})
            },
            bt = function(a, C) {
                return a.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Jt = function y(a, C, A) {
                return i.each(a, function(Z, xe) {
                    i.isString(Z) ? a[xe] = bt(Z, C) : i.isObject(Z) && i.isArray(A) && (i.extend(Z, y(i.pick(Z, A), C)), i.each(A, function(qe) {
                        var Lt = Z[qe];
                        i.isString(Lt) && (Z[qe] = bt(Lt, C))
                    }))
                }), a
            },
            Je = {
                normalizeUIKeys: function(a) {
                    var C = this._getUIBindings();
                    return yt(a, C)
                },
                normalizeUIString: function(a) {
                    var C = this._getUIBindings();
                    return bt(a, C)
                },
                normalizeUIValues: function(a, C) {
                    var A = this._getUIBindings();
                    return Jt(a, A, C)
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
                        this._ui = {}, i.each(C, function(A, Z) {
                            a._ui[Z] = a.$(A)
                        }), this.ui = this._ui
                    }
                },
                _unbindUIElements: function() {
                    var a = this;
                    !this.ui || !this._uiBindings || (i.each(this.ui, function(C, A) {
                        delete a.ui[A]
                    }), this.ui = this._uiBindings, delete this._uiBindings, delete this._ui)
                },
                _getUI: function(a) {
                    return this._ui[a]
                }
            };

        function Pt(y) {
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
                    return Pt(a)
                },
                findEl: function(a, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pt(a);
                    return A.find(C)
                },
                hasEl: function(a, C) {
                    return a.contains(C && C.parentNode)
                },
                detachEl: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt(a);
                    C.detach()
                },
                replaceEl: function(a, C) {
                    if (a !== C) {
                        var A = C.parentNode;
                        !A || A.replaceChild(a, C)
                    }
                },
                swapEl: function(a, C) {
                    if (a !== C) {
                        var A = a.parentNode,
                            Z = C.parentNode;
                        if (!(!A || !Z)) {
                            var xe = a.nextSibling,
                                qe = C.nextSibling;
                            A.insertBefore(C, xe), Z.insertBefore(a, qe)
                        }
                    }
                },
                setContents: function(a, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pt(a);
                    A.html(C)
                },
                appendContents: function(a, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Z = A._$el,
                        xe = Z === void 0 ? Pt(a) : Z,
                        qe = A._$contents,
                        Lt = qe === void 0 ? Pt(C) : qe;
                    xe.append(Lt)
                },
                hasContents: function(a) {
                    return !!a && a.hasChildNodes()
                },
                detachContents: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Pt(a);
                    C.contents().detach()
                }
            },
            K = {
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
                    var A = i.extend({}, this._getBehaviorEvents(), C, this._getBehaviorTriggers(), this.getTriggers());
                    return n.View.prototype.delegateEvents.call(this, A), this
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
                    for (var a = this._isAttached && !this._shouldDisableEvents, C = arguments.length, A = Array(C), Z = 0; Z < C; Z++) A[Z] = arguments[Z];
                    return this.triggerMethod.apply(this, ["before:destroy", this].concat(A)), a && this.triggerMethod("before:detach", this), this.unbindUIElements(), this._removeElement(), a && (this._isAttached = !1, this.triggerMethod("detach", this)), this._removeChildren(), this._isDestroyed = !0, this._isRendered = !1, this._destroyBehaviors.apply(this, A), this.triggerMethod.apply(this, ["destroy", this].concat(A)), this.stopListening(), this
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
                    for (var C = this.normalizeMethods(this._childViewEvents), A = arguments.length, Z = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Z[xe - 1] = arguments[xe];
                    typeof C < "u" && i.isFunction(C[a]) && C[a].apply(this, Z);
                    var qe = this._childViewTriggers;
                    qe && i.isString(qe[a]) && this.triggerMethod.apply(this, [qe[a]].concat(Z));
                    var Lt = i.result(this, "childViewEventPrefix");
                    if (Lt !== !1) {
                        var Yt = Lt + ":" + a;
                        this.triggerMethod.apply(this, [Yt].concat(Z))
                    }
                }
            };
        i.extend(K, ie, qt, ke, ct, Je);

        function M(y) {
            y._isRendered || (y.supportsRenderLifecycle || D(y, "before:render", y), y.render(), y.supportsRenderLifecycle || (y._isRendered = !0, D(y, "render", y)))
        }

        function X(y) {
            if (y.destroy) {
                y.destroy();
                return
            }
            y.supportsDestroyLifecycle || D(y, "before:destroy", y);
            var a = y._isAttached && !y._shouldDisableEvents;
            a && D(y, "before:detach", y), y.remove(), a && (y._isAttached = !1, D(y, "detach", y)), y._isDestroyed = !0, y.supportsDestroyLifecycle || D(y, "destroy", y)
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
                show: function(a, C) {
                    if (!!this._ensureElement(C)) return a = this._getView(a, C), a === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, a, C), a._isAttached || this.empty(C), this._setupChildView(a), this.currentView = a, M(a), this._attachView(a, C), this.triggerMethod("show", this, a, C), this._isSwappingView = !1, this)
                },
                _setupChildView: function(a) {
                    ae(a), this._proxyChildViewEvents(a), a.on("destroy", this._empty, this)
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
                        A = !a._isAttached && I(this.el) && !this._shouldDisableMonitoring(),
                        Z = typeof C.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!C.replaceElement;
                    A && D(a, "before:attach", a), Z ? this._replaceEl(a) : this.attachHtml(a), A && (a._isAttached = !0, D(a, "attach", a))
                },
                _ensureElement: function() {
                    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    if (i.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0], this.$el = this.Dom.getEl(this.el)), !this.$el || this.$el.length === 0) {
                        var C = typeof a.allowMissingEl > "u" ? !!i.result(this, "allowMissingEl") : !!a.allowMissingEl;
                        if (C) return !1;
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
                    var C = this._getViewOptions(a);
                    return new Pn(C)
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
                    var A = !a.preventDestroy;
                    return A || k("The preventDestroy option is deprecated. Use Region#detachView"), this._empty(C, A), this
                },
                _empty: function(a, C) {
                    a.off("destroy", this._empty, this), this.triggerMethod("before:empty", this, a), this._restoreEl(), delete this.currentView, a._isDestroyed || (C ? this.removeView(a) : this._detachView(a), this._stopChildViewEvents(a)), this.triggerMethod("empty", this, a)
                },
                _stopChildViewEvents: function(a) {
                    var C = this._parentView;
                    !C || this._parentView.stopListening(a)
                },
                destroyView: function(a) {
                    return a._isDestroyed || (a._shouldDisableEvents = this._shouldDisableMonitoring(), X(a)), a
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
                        A = this._isReplaced;
                    C && D(a, "before:detach", a), A ? this.Dom.replaceEl(this.el, a.el) : this.detachHtml(), C && (a._isAttached = !1, D(a, "detach", a))
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
            throw new be({
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
                regionClass: ge,
                _initRegions: function() {
                    this.regions = this.regions || {}, this._regions = {}, this.addRegions(i.result(this, "regions"))
                },
                _reInitRegions: function() {
                    O(this._regions, "reset")
                },
                addRegion: function(a, C) {
                    var A = {};
                    return A[a] = C, this.addRegions(A)[a]
                },
                addRegions: function(a) {
                    if (!i.isEmpty(a)) return a = this.normalizeUIValues(a, ["selector", "el"]), this.regions = i.extend({}, this.regions, a), this._addRegions(a)
                },
                _addRegions: function(a) {
                    var C = this,
                        A = {
                            regionClass: this.regionClass,
                            parentEl: i.partial(i.result, this, "el")
                        };
                    return i.reduce(a, function(Z, xe, qe) {
                        return Z[qe] = Ne(xe, A), C._addRegion(Z[qe], qe), Z
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
                showChildView: function(a, C) {
                    for (var A = this.getRegion(a), Z = arguments.length, xe = Array(Z > 2 ? Z - 2 : 0), qe = 2; qe < Z; qe++) xe[qe - 2] = arguments[qe];
                    return A.show.apply(A, [C].concat(xe))
                },
                detachChildView: function(a) {
                    return this.getRegion(a).detachView()
                },
                getChildView: function(a) {
                    return this.getRegion(a).currentView
                }
            },
            Xe = {
                render: function(a, C) {
                    if (!a) throw new be({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var A = i.isFunction(a) ? a : S.get(a);
                    return A(C)
                }
            },
            In = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Pn = n.View.extend({
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, In), ae(this), this._initBehaviors(), this._initRegions();
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
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = I(this.el), this._isRendered && this.bindUIElements(), this
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
                        A = this._renderHtml(a, C);
                    this.attachElContent(A)
                },
                _renderHtml: function(a, C) {
                    return Xe.render(a, C, this)
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
        i.extend(Pn.prototype, K, Ft);
        var rt = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Ln = function(a, C) {
                i.each(rt, function(A) {
                    a[A] = function() {
                        var Z = i.result(this, C),
                            xe = Array.prototype.slice.call(arguments);
                        return i[A].apply(i, [Z].concat(xe))
                    }
                })
            },
            mi = function(a) {
                this._views = {}, this._indexByModel = {}, this._indexByCustom = {}, this._updateLength(), i.each(a, i.bind(this.add, this))
            };
        Ln(mi.prototype, "_getViews"), i.extend(mi.prototype, {
            _getViews: function() {
                return i.values(this._views)
            },
            add: function(a, C) {
                return this._add(a, C)._updateLength()
            },
            _add: function(a, C) {
                var A = a.cid;
                return this._views[A] = a, a.model && (this._indexByModel[a.model.cid] = A), C && (this._indexByCustom[C] = A), this
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
                return a.model && delete this._indexByModel[a.model.cid], i.some(this._indexByCustom, i.bind(function(A, Z) {
                    if (A === C) return delete this._indexByCustom[Z], !0
                }, this)), delete this._views[C], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var _r = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            kn = n.View.extend({
                sort: !0,
                constructor: function(a) {
                    this.render = i.bind(this.render, this), this._setOptions(a), this.mergeOptions(a, _r), ae(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
                    var C = Array.prototype.slice.call(arguments);
                    C[0] = this.options, n.View.prototype.constructor.apply(this, C), this.delegateEntityEvents(), this._triggerEventOnBehaviors("initialize", this)
                },
                _startBuffering: function() {
                    this._isBuffering = !0
                },
                _endBuffering: function() {
                    var a = this._isAttached && this.monitorViewEvents !== !1,
                        C = a ? this._getImmediateChildren() : [];
                    this._isBuffering = !1, i.each(C, function(A) {
                        D(A, "before:attach", A)
                    }), this.attachBuffer(this, this._createBuffer()), i.each(C, function(A) {
                        A._isAttached = !0, D(A, "attach", A)
                    }), this._bufferedChildren = []
                },
                _getImmediateChildren: function() {
                    return i.values(this.children._views)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _onCollectionAdd: function(a, C, A) {
                    var Z = A.at !== void 0 && (A.index || C.indexOf(a));
                    (this.filter || Z === !1) && (Z = i.indexOf(this._filteredSortedModels(Z), a)), this._shouldAddChild(a, Z) && (this._destroyEmptyView(), this._addChild(a, Z))
                },
                _onCollectionUpdate: function(a, C) {
                    var A = C.changes;
                    this._removeChildModels(A.removed)
                },
                _removeChildModels: function(a) {
                    var C = this._getRemovedViews(a);
                    !C.length || (this.children._updateLength(), this._updateIndices(C, !1), this.isEmpty() && this._showEmptyView())
                },
                _getRemovedViews: function(a) {
                    var C = this;
                    return i.reduce(a, function(A, Z) {
                        var xe = Z && C.children.findByModel(Z);
                        return !xe || xe._isDestroyed || (C._removeChildView(xe), A.push(xe)), A
                    }, [])
                },
                _removeChildView: function(a) {
                    this.triggerMethod("before:remove:child", this, a), this.children._remove(a), a._shouldDisableEvents = this.monitorViewEvents === !1, X(a), this.stopListening(a), this.triggerMethod("remove:child", this, a)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = I(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(a) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Z = this._isRendered && !this._isDestroyed,
                        xe = this.filter !== a,
                        qe = Z && xe && !A;
                    if (qe) {
                        var Lt = this._filteredSortedModels();
                        this.filter = a;
                        var Yt = this._filteredSortedModels();
                        this._applyModelDeltas(Yt, Lt)
                    } else this.filter = a;
                    return this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _applyModelDeltas: function(a, C) {
                    var A = this,
                        Z = {};
                    i.each(a, function(qe, Lt) {
                        var Yt = !A.children.findByModel(qe);
                        Yt && A._onCollectionAdd(qe, A.collection, {
                            at: Lt
                        }), Z[qe.cid] = !0
                    });
                    var xe = i.filter(C, function(qe) {
                        return !Z[qe.cid] && A.children.findByModel(qe)
                    });
                    this._removeChildModels(xe)
                },
                reorder: function() {
                    var a = this,
                        C = this.children,
                        A = this._filteredSortedModels();
                    if (!A.length && this._showingEmptyView) return this;
                    var Z = i.some(A, function(Yt) {
                        return !C.findByModel(Yt)
                    });
                    if (Z) this.render();
                    else {
                        var xe = [],
                            qe = i.reduce(this.children._views, function(Yt, Hn) {
                                var Nn = i.indexOf(A, Hn.model);
                                return Nn === -1 ? (xe.push(Hn.model), Yt) : (Hn._index = Nn, Yt[Nn] = Hn.el, Yt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var Lt = this.Dom.createBuffer();
                        i.each(qe, function(Yt) {
                            a.Dom.appendContents(Lt, Yt)
                        }), this._appendReorderedChildren(Lt), this._removeChildModels(xe), this.triggerMethod("reorder", this)
                    }
                    return this
                },
                resortView: function() {
                    return this.reorderOnSort ? this.reorder() : this._renderChildren(), this
                },
                _sortViews: function() {
                    var a = this,
                        C = this._filteredSortedModels(),
                        A = i.find(C, function(Z, xe) {
                            var qe = a.children.findByModel(Z);
                            return !qe || qe._index !== xe
                        });
                    A && this.resortView()
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
                    var A = this._getChildView(a),
                        Z = this._getChildViewOptions(a, C),
                        xe = this.buildChildView(a, A, Z);
                    return xe
                },
                _setupChildView: function(a, C) {
                    ae(a), this._proxyChildViewEvents(a), this.sort && (a._index = C)
                },
                _showCollection: function(a) {
                    i.each(a, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(a) {
                    if (!this.collection || !this.collection.length) return [];
                    var C = this.getViewComparator(),
                        A = this.collection.models;
                    if (a = Math.min(Math.max(a, 0), A.length - 1), C) {
                        var Z = void 0;
                        a && (Z = A[a], A = A.slice(0, a).concat(A.slice(a + 1))), A = this._sortModelsBy(A, C), Z && A.splice(a, 0, Z)
                    }
                    return A = this._filterModels(A), A
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(a) {
                    var C = this;
                    return this.filter && (a = i.filter(a, function(A, Z) {
                        return C._shouldAddChild(A, Z)
                    })), a
                },
                _sortModelsBy: function(a, C) {
                    return typeof C == "string" ? i.sortBy(a, function(A) {
                        return A.get(C)
                    }) : C.length === 1 ? i.sortBy(a, i.bind(C, this)) : i.clone(a).sort(i.bind(C, this))
                },
                _showEmptyView: function() {
                    var a = this._getEmptyView();
                    if (a && !this._showingEmptyView) {
                        this._showingEmptyView = !0;
                        var C = new n.Model,
                            A = this.emptyViewOptions || this.childViewOptions;
                        i.isFunction(A) && (A = A.call(this, C, this._emptyViewIndex));
                        var Z = this.buildChildView(C, a, A);
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
                    var C = this.childView;
                    if (!C) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, a), !C) throw new be({
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
                    var A = this._createView(a, C);
                    return this.addChildView(A, C), A
                },
                _getChildViewOptions: function(a, C) {
                    return i.isFunction(this.childViewOptions) ? this.childViewOptions(a, C) : this.childViewOptions
                },
                addChildView: function(a, C) {
                    return this.triggerMethod("before:add:child", this, a), this._setupChildView(a, C), this._isBuffering ? this.children._add(a) : (this._updateIndices(a, !0), this.children.add(a)), M(a), this._attachView(a, C), this.triggerMethod("add:child", this, a), a
                },
                _updateIndices: function(a, C) {
                    if (!!this.sort) {
                        if (!C) {
                            i.each(i.sortBy(this.children._views, "_index"), function(Z, xe) {
                                Z._index = xe
                            });
                            return
                        }
                        var A = i.isArray(a) ? i.max(a, "_index") : a;
                        i.isObject(A) && i.each(this.children._views, function(Z) {
                            Z._index >= A._index && (Z._index += 1)
                        })
                    }
                },
                _attachView: function(a, C) {
                    var A = !a._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    A && D(a, "before:attach", a), this.attachHtml(this, a, C), A && (a._isAttached = !0, D(a, "attach", a))
                },
                buildChildView: function(a, C, A) {
                    var Z = i.extend({
                        model: a
                    }, A);
                    return new C(Z)
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
                    return i.each(this._bufferedChildren, function(A) {
                        a.Dom.appendContents(C, A.el, {
                            _$contents: A.$el
                        })
                    }), C
                },
                attachHtml: function(a, C, A) {
                    a._isBuffering ? a._bufferedChildren.splice(A, 0, C) : a._insertBefore(C, A) || a._insertAfter(C)
                },
                _insertBefore: function(a, C) {
                    var A = void 0,
                        Z = this.sort && C < this.children.length - 1;
                    return Z && (A = i.find(this.children._views, function(xe) {
                        return xe._index === C + 1
                    })), A ? (this.beforeEl(A.el, a.el), !0) : !1
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
                    this.children = new mi
                },
                _removeChildren: function() {
                    this._destroyChildren()
                },
                _destroyChildren: function(a) {
                    !this.children.length || (this.triggerMethod("before:destroy:children", this), i.each(this.children._views, i.bind(this._removeChildView, this)), this.children._updateLength(), this.triggerMethod("destroy:children", this))
                },
                _shouldAddChild: function(a, C) {
                    var A = this.filter;
                    return !i.isFunction(A) || A.call(this, a, C, this.collection)
                }
            }, {
                setDomApi: F
            });
        i.extend(kn.prototype, K);
        var sn = function() {
            this._init()
        };
        Ln(sn.prototype, "_views");

        function kr(y, a) {
            return a.model && a.model.get(y)
        }
        i.extend(sn.prototype, {
            _init: function() {
                this._views = [], this._viewsByCid = {}, this._indexByModel = {}, this._updateLength()
            },
            _add: function(a) {
                var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._views.length,
                    A = a.cid;
                this._viewsByCid[A] = a, a.model && (this._indexByModel[a.model.cid] = A), this._views.splice(C, 0, a), this._updateLength()
            },
            _sort: function(a, C) {
                return typeof a == "string" ? (a = i.partial(kr, a), this._sortBy(a)) : a.length === 1 ? this._sortBy(i.bind(a, C)) : this._views.sort(i.bind(a, C))
            },
            _sortBy: function(a) {
                var C = i.sortBy(this._views, a);
                return this._set(C), C
            },
            _set: function(a) {
                this._views.length = 0, this._views.push.apply(this._views, a.slice(0)), this._updateLength()
            },
            _swap: function(a, C) {
                var A = this.findIndexByView(a),
                    Z = this.findIndexByView(C);
                if (!(A === -1 || Z === -1)) {
                    var xe = this._views[A];
                    this._views[A] = this._views[Z], this._views[Z] = xe
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
        var Tr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "emptyView", "emptyViewOptions", "events", "modelEvents", "sortWithCollection", "triggers", "ui", "viewComparator", "viewFilter"],
            vi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, Tr), ae(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
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
                _onCollectionSort: function(a, C) {
                    var A = C.add,
                        Z = C.merge,
                        xe = C.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || A || xe || Z || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(a, C) {
                    var A = C.changes,
                        Z = A.removed.length && this._removeChildModels(A.removed);
                    this._addedViews = A.added.length && this._addChildModels(A.added), this._detachChildren(Z), this._showChildren(), this._removeChildViews(Z)
                },
                _removeChildModels: function(a) {
                    var C = this;
                    return i.reduce(a, function(A, Z) {
                        var xe = C._removeChildModel(Z);
                        return xe && A.push(xe), A
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
                        A = this._getChildViewOptions(a),
                        Z = this.buildChildView(a, C, A);
                    return Z
                },
                _addChild: function(a, C) {
                    this.triggerMethod("before:add:child", this, a), this._setupChildView(a), this.children._add(a, C), this.triggerMethod("add:child", this, a)
                },
                _getChildView: function(a) {
                    var C = this.childView;
                    if (!C) throw new be({
                        name: "NoChildViewError",
                        message: 'A "childView" must be specified'
                    });
                    if (C = this._getView(C, a), !C) throw new be({
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
                buildChildView: function(a, C, A) {
                    var Z = i.extend({
                        model: a
                    }, A);
                    return new C(Z)
                },
                _setupChildView: function(a) {
                    ae(a), a.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(a)
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
                isEmpty: function(a) {
                    return a || !this.children.length
                },
                _showEmptyView: function() {
                    var a = this._getEmptyView();
                    if (!!a) {
                        var C = this._getEmptyViewOptions(),
                            A = this.getEmptyRegion();
                        A.show(new a(C))
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
                        A = C.preventRender,
                        Z = this.viewComparator !== a,
                        xe = Z && !A;
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
                        C = this._getFilter(),
                        A = this._addedViews;
                    if (delete this._addedViews, !C) return A || this.children._views;
                    this.triggerMethod("before:filter", this);
                    var Z = [],
                        xe = [];
                    return i.each(this.children._views, function(qe, Lt, Yt) {
                        (C.call(a, qe, Lt, Yt) ? Z : xe).push(qe)
                    }), this._detachChildren(xe), this.triggerMethod("filter", this, Z, xe), Z
                },
                _getFilter: function() {
                    var a = this.getFilter();
                    if (!a) return !1;
                    if (i.isFunction(a)) return a;
                    if (i.isObject(a)) {
                        var C = i.matches(a);
                        return function(A) {
                            return C(A.model && A.model.attributes)
                        }
                    }
                    if (i.isString(a)) return function(A) {
                        return A.model && A.model.get(a)
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
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Z = this.viewFilter !== a,
                        xe = Z && !A;
                    return this.viewFilter = a, xe && this.filter(), this
                },
                removeFilter: function(a) {
                    return this.setFilter(null, a)
                },
                _detachChildren: function(a) {
                    i.each(a, i.bind(this._detachChildView, this))
                },
                _detachChildView: function(a) {
                    var C = a._isAttached && this.monitorViewEvents !== !1;
                    C && D(a, "before:detach", a), this.detachHtml(a), C && (a._isAttached = !1, D(a, "detach", a))
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
                    var A = this._isAttached && this.monitorViewEvents !== !1;
                    C = A ? C : [], i.each(C, function(Z) {
                        Z._isAttached || D(Z, "before:attach", Z)
                    }), this.attachHtml(a), i.each(C, function(Z) {
                        Z._isAttached || (Z._isAttached = !0, D(Z, "attach", Z))
                    })
                },
                _getBuffer: function(a) {
                    var C = this,
                        A = this.Dom.createBuffer();
                    return i.each(a, function(Z) {
                        M(Z), C.Dom.appendContents(A, Z.el, {
                            _$contents: Z.$el
                        })
                    }), A
                },
                attachHtml: function(a) {
                    this.Dom.appendContents(this.el, a, {
                        _$el: this.$el
                    })
                },
                swapChildViews: function(a, C) {
                    if (!this.children.hasView(a) || !this.children.hasView(C)) throw new be({
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
                        A = C.shouldDetach;
                    a.off("destroy", this.removeChildView, this), A ? this._detachChildView(a) : this._destroyChildView(a), this.stopListening(a)
                },
                _destroyChildView: function(a) {
                    a._isDestroyed || (a._shouldDisableEvents = this.monitorViewEvents === !1, X(a))
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
        i.extend(vi.prototype, K);
        var Bi = ["childViewContainer", "template", "templateContext"],
            yi = kn.extend({
                constructor: function(a) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(a, Bi), kn.prototype.constructor.apply(this, arguments)
                },
                _initialEvents: function() {
                    this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "update", this._onCollectionUpdate), this.listenTo(this.collection, "reset", this.renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                },
                _getChildView: function(a) {
                    var C = this.childView;
                    if (!C) return this.constructor;
                    if (C = this._getView(C, a), !C) throw new be({
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
                attachBuffer: function(a, C) {
                    var A = this.getChildViewContainer(a);
                    this.Dom.appendContents(A[0], C, {
                        _$el: A
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
                    var A = void 0,
                        Z = a.childViewContainer;
                    if (Z) {
                        var xe = i.result(a, "childViewContainer");
                        if (xe.charAt(0) === "@" && a.ui ? A = a.ui[xe.substr(4)] : A = this.$(xe), A.length <= 0) throw new be({
                            name: "ChildViewContainerMissingError",
                            message: 'The specified "childViewContainer" was not found: ' + a.childViewContainer
                        })
                    } else A = a.$el;
                    return a.$childViewContainer = A, A
                },
                resetChildViewContainer: function() {
                    this.$childViewContainer && (this.$childViewContainer = void 0)
                }
            }),
            wi = i.pick(Pn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(yi.prototype, wi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            Fi = g.extend({
                cidPrefix: "mnb",
                constructor: function(a, C) {
                    this.view = C, this.defaults && k("Behavior defaults are deprecated. For similar functionality set options on the Behavior class."), this.defaults = i.clone(i.result(this, "defaults", {})), this._setOptions(i.extend({}, this.defaults, a)), this.mergeOptions(this.options, ji), this.ui = i.extend({}, i.result(this, "ui"), i.result(C, "ui")), g.apply(this, arguments)
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
                    return i.reduce(C, function(A, Z, xe) {
                        return i.isFunction(Z) || (Z = a[Z]), Z && (xe = Le(xe, a.cid), A[xe] = i.bind(Z, a)), A
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var a = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, a)
                    }
                }
            });
        i.extend(Fi.prototype, ke, ct, Je);
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
                    for (var C = this.getRegion(), A = arguments.length, Z = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Z[xe - 1] = arguments[xe];
                    return C.show.apply(C, [a].concat(Z))
                },
                getView: function() {
                    return this.getRegion().currentView
                },
                start: function(a) {
                    return this.triggerMethod("before:start", this, a), this.triggerMethod("start", this, a), this
                }
            }),
            bi = ["appRoutes", "controller"],
            Un = n.Router.extend({
                constructor: function(a) {
                    this._setOptions(a), this.mergeOptions(a, bi), n.Router.apply(this, arguments);
                    var C = this.appRoutes,
                        A = this._getController();
                    this.processAppRoutes(A, C), this.on("route", this._processOnRoute, this)
                },
                appRoute: function(a, C) {
                    var A = this._getController();
                    return this._addAppRoute(A, a, C), this
                },
                _processOnRoute: function(a, C) {
                    if (i.isFunction(this.onRoute)) {
                        var A = i.invert(this.appRoutes)[a];
                        this.onRoute(a, A, C)
                    }
                },
                processAppRoutes: function(a, C) {
                    var A = this;
                    if (!C) return this;
                    var Z = i.keys(C).reverse();
                    return i.each(Z, function(xe) {
                        A._addAppRoute(a, xe, C[xe])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(a, C, A) {
                    var Z = a[A];
                    if (!Z) throw new be('Method "' + A + '" was not found on the controller');
                    this.route(C, A, i.bind(Z, a))
                },
                triggerMethod: v
            });
        i.extend(Un.prototype, qt);

        function Ui() {
            throw new be({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var Ci = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = Ci, this
        }, Ze.bindEvents = m(_e), Ze.unbindEvents = m(Te), Ze.bindRequests = m(Ke), Ze.unbindRequests = m(dt), Ze.mergeOptions = m(L), Ze.getOption = m($), Ze.normalizeMethods = m(H), Ze.extend = _, Ze.isNodeAttached = I, Ze.deprecate = k, Ze.triggerMethod = m(v), Ze.triggerMethodOn = D, Ze.isEnabled = it, Ze.setEnabled = Ct, Ze.monitorViewEvents = ae, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Ui, Ze.Application = zi, Ze.AppRouter = Un, Ze.Renderer = Xe, Ze.TemplateCache = S, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = vi, Ze.CompositeView = yi, Ze.Behavior = Fi, Ze.Region = ge, Ze.Error = be, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = De, Ze.VERSION = c, Ze.DomApi = N, Ze.setDomApi = function(y) {
            kn.setDomApi(y), yi.setDomApi(y), vi.setDomApi(y), ge.setDomApi(y), Pn.setDomApi(y)
        }, Ze
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
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
    xh = lo,
    Eh = Array.prototype,
    Sh = Eh.splice;

function _h(t) {
    var e = this.__data__,
        n = xh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Sh.call(e, n, 1), --this.size, !0
}
var kh = _h,
    Th = lo;

function Ah(t) {
    var e = this.__data__,
        n = Th(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Oh = Ah,
    Rh = lo;

function Ih(t) {
    return Rh(this.__data__, t) > -1
}
var Lh = Ih,
    Dh = lo;

function Mh(t, e) {
    var n = this.__data__,
        i = Dh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Ph = Mh,
    Nh = yh,
    Vh = kh,
    $h = Oh,
    Bh = Lh,
    jh = Ph;

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
wr.prototype.has = Bh;
wr.prototype.set = jh;
var co = wr,
    Fh = co;

function zh() {
    this.__data__ = new Fh, this.size = 0
}
var Uh = zh;

function Hh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Gh = Hh;

function qh(t) {
    return this.__data__.get(t)
}
var Wh = qh;

function Yh(t) {
    return this.__data__.has(t)
}
var Xh = Yh,
    Kh = typeof vt == "object" && vt && vt.Object === Object && vt,
    wc = Kh,
    Jh = wc,
    Qh = typeof self == "object" && self && self.Object === Object && self,
    Zh = Jh || Qh || Function("return this")(),
    br = Zh,
    ed = br,
    td = ed.Symbol,
    bc = td,
    gl = bc,
    Cc = Object.prototype,
    nd = Cc.hasOwnProperty,
    id = Cc.toString,
    Yr = gl ? gl.toStringTag : void 0;

function rd(t) {
    var e = nd.call(t, Yr),
        n = t[Yr];
    try {
        t[Yr] = void 0;
        var i = !0
    } catch {}
    var o = id.call(t);
    return i && (e ? t[Yr] = n : delete t[Yr]), o
}
var sd = rd,
    od = Object.prototype,
    ad = od.toString;

function ld(t) {
    return ad.call(t)
}
var cd = ld,
    ml = bc,
    ud = sd,
    hd = cd,
    dd = "[object Null]",
    fd = "[object Undefined]",
    vl = ml ? ml.toStringTag : void 0;

function pd(t) {
    return t == null ? t === void 0 ? fd : dd : vl && vl in Object(t) ? ud(t) : hd(t)
}
var uo = pd;

function gd(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Vi = gd,
    md = uo,
    vd = Vi,
    yd = "[object AsyncFunction]",
    wd = "[object Function]",
    bd = "[object GeneratorFunction]",
    Cd = "[object Proxy]";

function xd(t) {
    if (!vd(t)) return !1;
    var e = md(t);
    return e == wd || e == bd || e == yd || e == Cd
}
var Va = xd,
    Ed = br,
    Sd = Ed["__core-js_shared__"],
    _d = Sd,
    Qo = _d,
    yl = function() {
        var t = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function kd(t) {
    return !!yl && yl in t
}
var Td = kd,
    Ad = Function.prototype,
    Od = Ad.toString;

function Rd(t) {
    if (t != null) {
        try {
            return Od.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Id = Rd,
    Ld = Va,
    Dd = Td,
    Md = Vi,
    Pd = Id,
    Nd = /[\\^$.*+?()[\]{}|]/g,
    Vd = /^\[object .+?Constructor\]$/,
    $d = Function.prototype,
    Bd = Object.prototype,
    jd = $d.toString,
    Fd = Bd.hasOwnProperty,
    zd = RegExp("^" + jd.call(Fd).replace(Nd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Ud(t) {
    if (!Md(t) || Dd(t)) return !1;
    var e = Ld(t) ? zd : Vd;
    return e.test(Pd(t))
}
var Hd = Ud;

function Gd(t, e) {
    return t == null ? void 0 : t[e]
}
var qd = Gd,
    Wd = Hd,
    Yd = qd;

function Xd(t, e) {
    var n = Yd(t, e);
    return Wd(n) ? n : void 0
}
var $a = Xd,
    Kd = $a,
    Jd = br,
    Qd = Kd(Jd, "Map"),
    xc = Qd,
    Zd = $a,
    ef = Zd(Object, "create"),
    ho = ef,
    wl = ho;

function tf() {
    this.__data__ = wl ? wl(null) : {}, this.size = 0
}
var nf = tf;

function rf(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var sf = rf,
    of = ho,
    af = "__lodash_hash_undefined__",
    lf = Object.prototype,
    cf = lf.hasOwnProperty;

function uf(t) {
    var e = this.__data__;
    if (of) {
        var n = e[t];
        return n === af ? void 0 : n
    }
    return cf.call(e, t) ? e[t] : void 0
}
var hf = uf,
    df = ho,
    ff = Object.prototype,
    pf = ff.hasOwnProperty;

function gf(t) {
    var e = this.__data__;
    return df ? e[t] !== void 0 : pf.call(e, t)
}
var mf = gf,
    vf = ho,
    yf = "__lodash_hash_undefined__";

function wf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = vf && e === void 0 ? yf : e, this
}
var bf = wf,
    Cf = nf,
    xf = sf,
    Ef = hf,
    Sf = mf,
    _f = bf;

function Cr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Cr.prototype.clear = Cf;
Cr.prototype.delete = xf;
Cr.prototype.get = Ef;
Cr.prototype.has = Sf;
Cr.prototype.set = _f;
var kf = Cr,
    bl = kf,
    Tf = co,
    Af = xc;

function Of() {
    this.size = 0, this.__data__ = {
        hash: new bl,
        map: new(Af || Tf),
        string: new bl
    }
}
var Rf = Of;

function If(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Lf = If,
    Df = Lf;

function Mf(t, e) {
    var n = t.__data__;
    return Df(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var fo = Mf,
    Pf = fo;

function Nf(t) {
    var e = Pf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Vf = Nf,
    $f = fo;

function Bf(t) {
    return $f(this, t).get(t)
}
var jf = Bf,
    Ff = fo;

function zf(t) {
    return Ff(this, t).has(t)
}
var Uf = zf,
    Hf = fo;

function Gf(t, e) {
    var n = Hf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var qf = Gf,
    Wf = Rf,
    Yf = Vf,
    Xf = jf,
    Kf = Uf,
    Jf = qf;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = Wf;
xr.prototype.delete = Yf;
xr.prototype.get = Xf;
xr.prototype.has = Kf;
xr.prototype.set = Jf;
var Qf = xr,
    Zf = co,
    ep = xc,
    tp = Qf,
    np = 200;

function ip(t, e) {
    var n = this.__data__;
    if (n instanceof Zf) {
        var i = n.__data__;
        if (!ep || i.length < np - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new tp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var rp = ip,
    sp = co,
    op = Uh,
    ap = Gh,
    lp = Wh,
    cp = Xh,
    up = rp;

function Er(t) {
    var e = this.__data__ = new sp(t);
    this.size = e.size
}
Er.prototype.clear = op;
Er.prototype.delete = ap;
Er.prototype.get = lp;
Er.prototype.has = cp;
Er.prototype.set = up;
var hp = Er,
    dp = $a,
    fp = function() {
        try {
            var t = dp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    Ec = fp,
    Cl = Ec;

function pp(t, e, n) {
    e == "__proto__" && Cl ? Cl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var Ba = pp,
    gp = Ba,
    mp = ao;

function vp(t, e, n) {
    (n !== void 0 && !mp(t[e], n) || n === void 0 && !(e in t)) && gp(t, e, n)
}
var Sc = vp;

function yp(t) {
    return function(e, n, i) {
        for (var o = -1, c = Object(e), m = i(e), _ = m.length; _--;) {
            var k = m[t ? _ : ++o];
            if (n(c[k], k, c) === !1) break
        }
        return e
    }
}
var wp = yp,
    bp = wp,
    Cp = bp(),
    xp = Cp,
    ba = {
        exports: {}
    };
(function(t, e) {
    var n = br,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        c = o && o.exports === i,
        m = c ? n.Buffer : void 0,
        _ = m ? m.allocUnsafe : void 0;

    function k(I, L) {
        if (L) return I.slice();
        var $ = I.length,
            H = _ ? _($) : new I.constructor($);
        return I.copy(H), H
    }
    t.exports = k
})(ba, ba.exports);
var Ep = br,
    Sp = Ep.Uint8Array,
    _p = Sp,
    xl = _p;

function kp(t) {
    var e = new t.constructor(t.byteLength);
    return new xl(e).set(new xl(t)), e
}
var Tp = kp,
    Ap = Tp;

function Op(t, e) {
    var n = e ? Ap(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Rp = Op;

function Ip(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Lp = Ip,
    Dp = Vi,
    El = Object.create,
    Mp = function() {
        function t() {}
        return function(e) {
            if (!Dp(e)) return {};
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
    $p = Vp,
    Bp = $p(Object.getPrototypeOf, Object),
    _c = Bp,
    jp = Object.prototype;

function Fp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || jp;
    return t === n
}
var kc = Fp,
    zp = Pp,
    Up = _c,
    Hp = kc;

function Gp(t) {
    return typeof t.constructor == "function" && !Hp(t) ? zp(Up(t)) : {}
}
var qp = Gp;

function Wp(t) {
    return t != null && typeof t == "object"
}
var us = Wp,
    Yp = uo,
    Xp = us,
    Kp = "[object Arguments]";

function Jp(t) {
    return Xp(t) && Yp(t) == Kp
}
var Qp = Jp,
    Sl = Qp,
    Zp = us,
    Tc = Object.prototype,
    eg = Tc.hasOwnProperty,
    tg = Tc.propertyIsEnumerable,
    ng = Sl(function() {
        return arguments
    }()) ? Sl : function(t) {
        return Zp(t) && eg.call(t, "callee") && !tg.call(t, "callee")
    },
    Ac = ng,
    ig = Array.isArray,
    Oc = ig,
    rg = 9007199254740991;

function sg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= rg
}
var Rc = sg,
    og = Va,
    ag = Rc;

function lg(t) {
    return t != null && ag(t.length) && !og(t)
}
var ja = lg,
    cg = ja,
    ug = us;

function hg(t) {
    return ug(t) && cg(t)
}
var dg = hg,
    Ks = {
        exports: {}
    };

function fg() {
    return !1
}
var pg = fg;
(function(t, e) {
    var n = br,
        i = pg,
        o = e && !e.nodeType && e,
        c = o && !0 && t && !t.nodeType && t,
        m = c && c.exports === o,
        _ = m ? n.Buffer : void 0,
        k = _ ? _.isBuffer : void 0,
        I = k || i;
    t.exports = I
})(Ks, Ks.exports);
var gg = uo,
    mg = _c,
    vg = us,
    yg = "[object Object]",
    wg = Function.prototype,
    bg = Object.prototype,
    Ic = wg.toString,
    Cg = bg.hasOwnProperty,
    xg = Ic.call(Object);

function Eg(t) {
    if (!vg(t) || gg(t) != yg) return !1;
    var e = mg(t);
    if (e === null) return !0;
    var n = Cg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Ic.call(n) == xg
}
var Sg = Eg,
    _g = uo,
    kg = Rc,
    Tg = us,
    Ag = "[object Arguments]",
    Og = "[object Array]",
    Rg = "[object Boolean]",
    Ig = "[object Date]",
    Lg = "[object Error]",
    Dg = "[object Function]",
    Mg = "[object Map]",
    Pg = "[object Number]",
    Ng = "[object Object]",
    Vg = "[object RegExp]",
    $g = "[object Set]",
    Bg = "[object String]",
    jg = "[object WeakMap]",
    Fg = "[object ArrayBuffer]",
    zg = "[object DataView]",
    Ug = "[object Float32Array]",
    Hg = "[object Float64Array]",
    Gg = "[object Int8Array]",
    qg = "[object Int16Array]",
    Wg = "[object Int32Array]",
    Yg = "[object Uint8Array]",
    Xg = "[object Uint8ClampedArray]",
    Kg = "[object Uint16Array]",
    Jg = "[object Uint32Array]",
    Mt = {};
Mt[Ug] = Mt[Hg] = Mt[Gg] = Mt[qg] = Mt[Wg] = Mt[Yg] = Mt[Xg] = Mt[Kg] = Mt[Jg] = !0;
Mt[Ag] = Mt[Og] = Mt[Fg] = Mt[Rg] = Mt[zg] = Mt[Ig] = Mt[Lg] = Mt[Dg] = Mt[Mg] = Mt[Pg] = Mt[Ng] = Mt[Vg] = Mt[$g] = Mt[Bg] = Mt[jg] = !1;

function Qg(t) {
    return Tg(t) && kg(t.length) && !!Mt[_g(t)]
}
var Zg = Qg;

function em(t) {
    return function(e) {
        return t(e)
    }
}
var tm = em,
    Ca = {
        exports: {}
    };
(function(t, e) {
    var n = wc,
        i = e && !e.nodeType && e,
        o = i && !0 && t && !t.nodeType && t,
        c = o && o.exports === i,
        m = c && n.process,
        _ = function() {
            try {
                var k = o && o.require && o.require("util").types;
                return k || m && m.binding && m.binding("util")
            } catch {}
        }();
    t.exports = _
})(Ca, Ca.exports);
var nm = Zg,
    im = tm,
    _l = Ca.exports,
    kl = _l && _l.isTypedArray,
    rm = kl ? im(kl) : nm,
    Lc = rm;

function sm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Dc = sm,
    om = Ba,
    am = ao,
    lm = Object.prototype,
    cm = lm.hasOwnProperty;

function um(t, e, n) {
    var i = t[e];
    (!(cm.call(t, e) && am(i, n)) || n === void 0 && !(e in t)) && om(t, e, n)
}
var hm = um,
    dm = hm,
    fm = Ba;

function pm(t, e, n, i) {
    var o = !n;
    n || (n = {});
    for (var c = -1, m = e.length; ++c < m;) {
        var _ = e[c],
            k = i ? i(n[_], t[_], _, n, t) : void 0;
        k === void 0 && (k = t[_]), o ? fm(n, _, k) : dm(n, _, k)
    }
    return n
}
var gm = pm;

function mm(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var vm = mm,
    ym = 9007199254740991,
    wm = /^(?:0|[1-9]\d*)$/;

function bm(t, e) {
    var n = typeof t;
    return e = e == null ? ym : e, !!e && (n == "number" || n != "symbol" && wm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Mc = bm,
    Cm = vm,
    xm = Ac,
    Em = Oc,
    Sm = Ks.exports,
    _m = Mc,
    km = Lc,
    Tm = Object.prototype,
    Am = Tm.hasOwnProperty;

function Om(t, e) {
    var n = Em(t),
        i = !n && xm(t),
        o = !n && !i && Sm(t),
        c = !n && !i && !o && km(t),
        m = n || i || o || c,
        _ = m ? Cm(t.length, String) : [],
        k = _.length;
    for (var I in t)(e || Am.call(t, I)) && !(m && (I == "length" || o && (I == "offset" || I == "parent") || c && (I == "buffer" || I == "byteLength" || I == "byteOffset") || _m(I, k))) && _.push(I);
    return _
}
var Rm = Om;

function Im(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Lm = Im,
    Dm = Vi,
    Mm = kc,
    Pm = Lm,
    Nm = Object.prototype,
    Vm = Nm.hasOwnProperty;

function $m(t) {
    if (!Dm(t)) return Pm(t);
    var e = Mm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Vm.call(t, i)) || n.push(i);
    return n
}
var Bm = $m,
    jm = Rm,
    Fm = Bm,
    zm = ja;

function Um(t) {
    return zm(t) ? jm(t, !0) : Fm(t)
}
var Pc = Um,
    Hm = gm,
    Gm = Pc;

function qm(t) {
    return Hm(t, Gm(t))
}
var Wm = qm,
    Tl = Sc,
    Ym = ba.exports,
    Xm = Rp,
    Km = Lp,
    Jm = qp,
    Al = Ac,
    Ol = Oc,
    Qm = dg,
    Zm = Ks.exports,
    ev = Va,
    tv = Vi,
    nv = Sg,
    iv = Lc,
    Rl = Dc,
    rv = Wm;

function sv(t, e, n, i, o, c, m) {
    var _ = Rl(t, n),
        k = Rl(e, n),
        I = m.get(k);
    if (I) {
        Tl(t, n, I);
        return
    }
    var L = c ? c(_, k, n + "", t, e, m) : void 0,
        $ = L === void 0;
    if ($) {
        var H = Ol(k),
            te = !H && Zm(k),
            W = !H && !te && iv(k);
        L = k, H || te || W ? Ol(_) ? L = _ : Qm(_) ? L = Km(_) : te ? ($ = !1, L = Ym(k, !0)) : W ? ($ = !1, L = Xm(k, !0)) : L = [] : nv(k) || Al(k) ? (L = _, Al(_) ? L = rv(_) : (!tv(_) || ev(_)) && (L = Jm(k))) : $ = !1
    }
    $ && (m.set(k, L), o(L, k, i, c, m), m.delete(k)), Tl(t, n, L)
}
var ov = sv,
    av = hp,
    lv = Sc,
    cv = xp,
    uv = ov,
    hv = Vi,
    dv = Pc,
    fv = Dc;

function Nc(t, e, n, i, o) {
    t !== e && cv(e, function(c, m) {
        if (o || (o = new av), hv(c)) uv(t, e, m, n, Nc, i, o);
        else {
            var _ = i ? i(fv(t, m), c, m + "", t, e, o) : void 0;
            _ === void 0 && (_ = c), lv(t, m, _)
        }
    }, dv)
}
var pv = Nc;

function gv(t) {
    return t
}
var Vc = gv;

function mv(t, e, n) {
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
var vv = mv,
    yv = vv,
    Il = Math.max;

function wv(t, e, n) {
    return e = Il(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, o = -1, c = Il(i.length - e, 0), m = Array(c); ++o < c;) m[o] = i[e + o];
            o = -1;
            for (var _ = Array(e + 1); ++o < e;) _[o] = i[o];
            return _[e] = n(m), yv(t, this, _)
        }
}
var bv = wv;

function Cv(t) {
    return function() {
        return t
    }
}
var xv = Cv,
    Ev = xv,
    Ll = Ec,
    Sv = Vc,
    _v = Ll ? function(t, e) {
        return Ll(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ev(e),
            writable: !0
        })
    } : Sv,
    kv = _v,
    Tv = 800,
    Av = 16,
    Ov = Date.now;

function Rv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Ov(),
            o = Av - (i - n);
        if (n = i, o > 0) {
            if (++e >= Tv) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Iv = Rv,
    Lv = kv,
    Dv = Iv,
    Mv = Dv(Lv),
    Pv = Mv,
    Nv = Vc,
    Vv = bv,
    $v = Pv;

function Bv(t, e) {
    return $v(Vv(t, e, Nv), t + "")
}
var jv = Bv,
    Fv = ao,
    zv = ja,
    Uv = Mc,
    Hv = Vi;

function Gv(t, e, n) {
    if (!Hv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? zv(n) && Uv(e, n.length) : i == "string" && e in n) ? Fv(n[e], t) : !1
}
var qv = Gv,
    Wv = jv,
    Yv = qv;

function Xv(t) {
    return Wv(function(e, n) {
        var i = -1,
            o = n.length,
            c = o > 1 ? n[o - 1] : void 0,
            m = o > 2 ? n[2] : void 0;
        for (c = t.length > 3 && typeof c == "function" ? (o--, c) : void 0, m && Yv(n[0], n[1], m) && (c = o < 3 ? void 0 : c, o = 1), e = Object(e); ++i < o;) {
            var _ = n[i];
            _ && t(e, _, i, c)
        }
        return e
    })
}
var Kv = Xv,
    Jv = pv,
    Qv = Kv,
    Zv = Qv(function(t, e, n) {
        Jv(t, e, n)
    }),
    ey = Zv;
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
        return ey(e[0], ...e)
    }
}
nt(xa, "locale"), nt(xa, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
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
        const c = parseInt(o, 16),
            m = Math.min(Math.max(0, (c >> 16) * n), 255),
            _ = Math.min(Math.max(0, (c >> 8 & 255) * n), 255);
        let I = (Math.min(Math.max(0, (c & 255) * n), 255) | _ << 8 | m << 16).toString(16);
        for (; I.length < o.length;) I = `0${I}`;
        return (i ? "#" : "") + I
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
let Rt = fl;
nt(Rt, "queryParams", new URLSearchParams(window.location.search)), nt(Rt, "getQueryParam", e => fl.queryParams.get(e)), nt(Rt, "sleep", e => new Promise(n => {
    window.setTimeout(n, e)
}));
class en {
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
            namespace: (o = (i = Rt.getQueryParam("namespace")) != null ? i : Rt.getQueryParam("ns")) != null ? o : this.defaultNamespace,
            isDisabled: Rt.queryParams.has("incognito") || Rt.queryParams.has("nc")
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
        let c = JSON.parse(i);
        c = c.filter(_ => {
            const k = _.split("-")[0];
            return o !== k
        }), c.push(n), this.set("tags", JSON.stringify(c))
    }
    static getScopedKey(e, n) {
        const i = `${this.namespace}:${e}`,
            o = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            c = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (n === "none") return i;
        if (n === "tag") {
            if (!o) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return o
        }
        if (n === "code") {
            if (!c) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return c
        }
        return c && window.localStorage.getItem(c) !== null ? c : o && window.localStorage.getItem(o) !== null ? o : i
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
                c = window.localStorage.getItem(i);
            !c || (window.localStorage.setItem(o, c), window.localStorage.removeItem(i))
        })
    }
}
nt(en, "defaultNamespace", "tv");
class pi {
    constructor() {
        nt(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        pi.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!en.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            o = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            c = `${i}://${o}/artifact/${e.categoryId}/${e.artifactId}/`,
            m = en.get("galleries") || "[]";
        try {
            const _ = JSON.parse(m) || [];
            if (_.some(k => k.url === c)) return;
            _.unshift({
                url: c,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), en.set("galleries", JSON.stringify(_.slice(0, 40)))
        } catch {
            console.warn("[Artifacts] Unable to add artifact to local storage")
        }
    }
    remove(e) {
        if (!en.isSupported) return;
        const n = en.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.splice(e, 1), en.set("galleries", JSON.stringify(i)), this.artifacts = this.list()
        } catch {
            console.warn("[Artifacts] Unable to remove artifact")
        }
    }
    setAsViewed(e) {
        pi.setAsViewed(e), this.artifacts = this.list()
    }
    static setAsViewed(e) {
        if (!en.isSupported) return;
        const n = en.get("galleries") || "[]";
        try {
            const i = JSON.parse(n) || [];
            i.length && (i[e].viewed = !0), en.set("galleries", JSON.stringify(i))
        } catch {
            console.warn(`[Artifacts] Unable to mark artifact ${e} as viewed`)
        }
    }
    static isTestArtifact(e) {
        var n;
        return ((n = e == null ? void 0 : e.rootId) == null ? void 0 : n.indexOf("test")) !== -1
    }
    list() {
        if (!en.isSupported) return [];
        const e = new Intl.DateTimeFormat(xa.locale, {
                year: "numeric",
                month: "short",
                day: "numeric"
            }),
            n = en.get("galleries") || "[]",
            i = Date.now();
        try {
            return (JSON.parse(n) || []).filter(c => i - c.time < 525600 * 60 * 1e3).map(c => {
                const m = new Date(c.time),
                    _ = e.format(m),
                    k = c.url.split("/"),
                    I = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let L = c.categoryId;
                return L || (c.url.indexOf("Quiplash2") !== -1 ? L = "Quiplash2Game" : c.url.indexOf("Drawful") !== -1 ? L = "DrawfulGame" : c.url.indexOf("TeeKO") !== -1 ? L = "TeeKOGame" : c.url.indexOf("TriviaDeath") !== -1 && (L = "TriviaDeathResults")), {
                    id: I,
                    gameName: L,
                    date: _,
                    ...c
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
            function c() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return c.prototype = n, new c
        }();
    (function(c) {
        (function(m) {
            var _ = {
                searchParams: "URLSearchParams" in c,
                iterable: "Symbol" in c && "iterator" in Symbol,
                blob: "FileReader" in c && "Blob" in c && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in c,
                arrayBuffer: "ArrayBuffer" in c
            };

            function k(q) {
                return q && DataView.prototype.isPrototypeOf(q)
            }
            if (_.arrayBuffer) var I = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                L = ArrayBuffer.isView || function(q) {
                    return q && I.indexOf(Object.prototype.toString.call(q)) > -1
                };

            function $(q) {
                if (typeof q != "string" && (q = String(q)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(q)) throw new TypeError("Invalid character in header field name");
                return q.toLowerCase()
            }

            function H(q) {
                return typeof q != "string" && (q = String(q)), q
            }

            function te(q) {
                var ae = {
                    next: function() {
                        var Ae = q.shift();
                        return {
                            done: Ae === void 0,
                            value: Ae
                        }
                    }
                };
                return _.iterable && (ae[Symbol.iterator] = function() {
                    return ae
                }), ae
            }

            function W(q) {
                this.map = {}, q instanceof W ? q.forEach(function(ae, Ae) {
                    this.append(Ae, ae)
                }, this) : Array.isArray(q) ? q.forEach(function(ae) {
                    this.append(ae[0], ae[1])
                }, this) : q && Object.getOwnPropertyNames(q).forEach(function(ae) {
                    this.append(ae, q[ae])
                }, this)
            }
            W.prototype.append = function(q, ae) {
                q = $(q), ae = H(ae);
                var Ae = this.map[q];
                this.map[q] = Ae ? Ae + ", " + ae : ae
            }, W.prototype.delete = function(q) {
                delete this.map[$(q)]
            }, W.prototype.get = function(q) {
                return q = $(q), this.has(q) ? this.map[q] : null
            }, W.prototype.has = function(q) {
                return this.map.hasOwnProperty($(q))
            }, W.prototype.set = function(q, ae) {
                this.map[$(q)] = H(ae)
            }, W.prototype.forEach = function(q, ae) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && q.call(ae, this.map[Ae], Ae, this)
            }, W.prototype.keys = function() {
                var q = [];
                return this.forEach(function(ae, Ae) {
                    q.push(Ae)
                }), te(q)
            }, W.prototype.values = function() {
                var q = [];
                return this.forEach(function(ae) {
                    q.push(ae)
                }), te(q)
            }, W.prototype.entries = function() {
                var q = [];
                return this.forEach(function(ae, Ae) {
                    q.push([Ae, ae])
                }), te(q)
            }, _.iterable && (W.prototype[Symbol.iterator] = W.prototype.entries);

            function re(q) {
                if (q.bodyUsed) return Promise.reject(new TypeError("Already read"));
                q.bodyUsed = !0
            }

            function v(q) {
                return new Promise(function(ae, Ae) {
                    q.onload = function() {
                        ae(q.result)
                    }, q.onerror = function() {
                        Ae(q.error)
                    }
                })
            }

            function D(q) {
                var ae = new FileReader,
                    Ae = v(ae);
                return ae.readAsArrayBuffer(q), Ae
            }

            function Y(q) {
                var ae = new FileReader,
                    Ae = v(ae);
                return ae.readAsText(q), Ae
            }

            function le(q) {
                for (var ae = new Uint8Array(q), Ae = new Array(ae.length), be = 0; be < ae.length; be++) Ae[be] = String.fromCharCode(ae[be]);
                return Ae.join("")
            }

            function oe(q) {
                if (q.slice) return q.slice(0);
                var ae = new Uint8Array(q.byteLength);
                return ae.set(new Uint8Array(q)), ae.buffer
            }

            function ye() {
                return this.bodyUsed = !1, this._initBody = function(q) {
                    this._bodyInit = q, q ? typeof q == "string" ? this._bodyText = q : _.blob && Blob.prototype.isPrototypeOf(q) ? this._bodyBlob = q : _.formData && FormData.prototype.isPrototypeOf(q) ? this._bodyFormData = q : _.searchParams && URLSearchParams.prototype.isPrototypeOf(q) ? this._bodyText = q.toString() : _.arrayBuffer && _.blob && k(q) ? (this._bodyArrayBuffer = oe(q.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(q) || L(q)) ? this._bodyArrayBuffer = oe(q) : this._bodyText = q = Object.prototype.toString.call(q) : this._bodyText = "", this.headers.get("content-type") || (typeof q == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(q) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, _.blob && (this.blob = function() {
                    var q = re(this);
                    if (q) return q;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? re(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(D)
                }), this.text = function() {
                    var q = re(this);
                    if (q) return q;
                    if (this._bodyBlob) return Y(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(le(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, _.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Se(q) {
                var ae = q.toUpperCase();
                return f.indexOf(ae) > -1 ? ae : q
            }

            function Oe(q, ae) {
                ae = ae || {};
                var Ae = ae.body;
                if (q instanceof Oe) {
                    if (q.bodyUsed) throw new TypeError("Already read");
                    this.url = q.url, this.credentials = q.credentials, ae.headers || (this.headers = new W(q.headers)), this.method = q.method, this.mode = q.mode, this.signal = q.signal, !Ae && q._bodyInit != null && (Ae = q._bodyInit, q.bodyUsed = !0)
                } else this.url = String(q);
                if (this.credentials = ae.credentials || this.credentials || "same-origin", (ae.headers || !this.headers) && (this.headers = new W(ae.headers)), this.method = Se(ae.method || this.method || "GET"), this.mode = ae.mode || this.mode || null, this.signal = ae.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Ae)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(q) {
                var ae = new FormData;
                return q.trim().split("&").forEach(function(Ae) {
                    if (Ae) {
                        var be = Ae.split("="),
                            we = be.shift().replace(/\+/g, " "),
                            he = be.join("=").replace(/\+/g, " ");
                        ae.append(decodeURIComponent(we), decodeURIComponent(he))
                    }
                }), ae
            }

            function lt(q) {
                var ae = new W,
                    Ae = q.replace(/\r?\n[\t ]+/g, " ");
                return Ae.split(/\r?\n/).forEach(function(be) {
                    var we = be.split(":"),
                        he = we.shift().trim();
                    if (he) {
                        var _e = we.join(":").trim();
                        ae.append(he, _e)
                    }
                }), ae
            }
            ye.call(Oe.prototype);

            function $e(q, ae) {
                ae || (ae = {}), this.type = "default", this.status = ae.status === void 0 ? 200 : ae.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ae ? ae.statusText : "OK", this.headers = new W(ae.headers), this.url = ae.url || "", this._initBody(q)
            }
            ye.call($e.prototype), $e.prototype.clone = function() {
                return new $e(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new W(this.headers),
                    url: this.url
                })
            }, $e.error = function() {
                var q = new $e(null, {
                    status: 0,
                    statusText: ""
                });
                return q.type = "error", q
            };
            var Q = [301, 302, 303, 307, 308];
            $e.redirect = function(q, ae) {
                if (Q.indexOf(ae) === -1) throw new RangeError("Invalid status code");
                return new $e(null, {
                    status: ae,
                    headers: {
                        location: q
                    }
                })
            }, m.DOMException = c.DOMException;
            try {
                new m.DOMException
            } catch {
                m.DOMException = function(ae, Ae) {
                    this.message = ae, this.name = Ae;
                    var be = Error(ae);
                    this.stack = be.stack
                }, m.DOMException.prototype = Object.create(Error.prototype), m.DOMException.prototype.constructor = m.DOMException
            }

            function Fe(q, ae) {
                return new Promise(function(Ae, be) {
                    var we = new Oe(q, ae);
                    if (we.signal && we.signal.aborted) return be(new m.DOMException("Aborted", "AbortError"));
                    var he = new XMLHttpRequest;

                    function _e() {
                        he.abort()
                    }
                    he.onload = function() {
                        var Te = {
                            status: he.status,
                            statusText: he.statusText,
                            headers: lt(he.getAllResponseHeaders() || "")
                        };
                        Te.url = "responseURL" in he ? he.responseURL : Te.headers.get("X-Request-URL");
                        var Be = "response" in he ? he.response : he.responseText;
                        Ae(new $e(Be, Te))
                    }, he.onerror = function() {
                        be(new TypeError("Network request failed"))
                    }, he.ontimeout = function() {
                        be(new TypeError("Network request failed"))
                    }, he.onabort = function() {
                        be(new m.DOMException("Aborted", "AbortError"))
                    }, he.open(we.method, we.url, !0), we.credentials === "include" ? he.withCredentials = !0 : we.credentials === "omit" && (he.withCredentials = !1), "responseType" in he && _.blob && (he.responseType = "blob"), we.headers.forEach(function(Te, Be) {
                        he.setRequestHeader(Be, Te)
                    }), we.signal && (we.signal.addEventListener("abort", _e), he.onreadystatechange = function() {
                        he.readyState === 4 && we.signal.removeEventListener("abort", _e)
                    }), he.send(typeof we._bodyInit > "u" ? null : we._bodyInit)
                })
            }
            return Fe.polyfill = !0, c.fetch || (c.fetch = Fe, c.Headers = W, c.Request = Oe, c.Response = $e), m.Headers = W, m.Request = Oe, m.Response = $e, m.fetch = Fe, Object.defineProperty(m, "__esModule", {
                value: !0
            }), m
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var o = i;
    e = o.fetch, e.default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, t.exports = e
})(Ea, Ea.exports);
var ty = function() {
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
        var c = Object.getOwnPropertySymbols(e);
        if (c.length !== 1 || c[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var m = Object.getOwnPropertyDescriptor(e, n);
            if (m.value !== o || m.enumerable !== !0) return !1
        }
        return !0
    },
    Dl = typeof Symbol < "u" && Symbol,
    ny = ty,
    iy = function() {
        return typeof Dl != "function" || typeof Symbol != "function" || typeof Dl("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : ny()
    },
    ry = "Function.prototype.bind called on incompatible ",
    Zo = Array.prototype.slice,
    sy = Object.prototype.toString,
    oy = "[object Function]",
    ay = function(e) {
        var n = this;
        if (typeof n != "function" || sy.call(n) !== oy) throw new TypeError(ry + n);
        for (var i = Zo.call(arguments, 1), o, c = function() {
                if (this instanceof o) {
                    var L = n.apply(this, i.concat(Zo.call(arguments)));
                    return Object(L) === L ? L : this
                } else return n.apply(e, i.concat(Zo.call(arguments)))
            }, m = Math.max(0, n.length - i.length), _ = [], k = 0; k < m; k++) _.push("$" + k);
        if (o = Function("binder", "return function (" + _.join(",") + "){ return binder.apply(this,arguments); }")(c), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, o.prototype = new I, I.prototype = null
        }
        return o
    },
    ly = ay,
    Fa = Function.prototype.bind || ly,
    cy = Fa,
    uy = cy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, gr = SyntaxError,
    $c = Function,
    ur = TypeError,
    ea = function(t) {
        try {
            return $c('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Pi = Object.getOwnPropertyDescriptor;
if (Pi) try {
    Pi({}, "")
} catch {
    Pi = null
}
var ta = function() {
        throw new ur
    },
    hy = Pi ? function() {
        try {
            return arguments.callee, ta
        } catch {
            try {
                return Pi(arguments, "callee").get
            } catch {
                return ta
            }
        }
    }() : ta,
    ir = iy(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    or = {},
    dy = typeof Uint8Array > "u" ? mt : ai(Uint8Array),
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
        "%ThrowTypeError%": hy,
        "%TypedArray%": dy,
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
    fy = function t(e) {
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
    Js = uy,
    py = hs.call(Function.call, Array.prototype.concat),
    gy = hs.call(Function.apply, Array.prototype.splice),
    Pl = hs.call(Function.call, String.prototype.replace),
    Qs = hs.call(Function.call, String.prototype.slice),
    my = hs.call(Function.call, RegExp.prototype.exec),
    vy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    yy = /\\(\\)?/g,
    wy = function(e) {
        var n = Qs(e, 0, 1),
            i = Qs(e, -1);
        if (n === "%" && i !== "%") throw new gr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new gr("invalid intrinsic syntax, expected opening `%`");
        var o = [];
        return Pl(e, vy, function(c, m, _, k) {
            o[o.length] = _ ? Pl(k, yy, "$1") : m || c
        }), o
    },
    by = function(e, n) {
        var i = e,
            o;
        if (Js(Ml, i) && (o = Ml[i], i = "%" + o[0] + "%"), Js(hr, i)) {
            var c = hr[i];
            if (c === or && (c = fy(i)), typeof c > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: o,
                name: i,
                value: c
            }
        }
        throw new gr("intrinsic " + e + " does not exist!")
    },
    za = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new ur("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new ur('"allowMissing" argument must be a boolean');
        if (my(/^%?[^%]*%?$/g, e) === null) throw new gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = wy(e),
            o = i.length > 0 ? i[0] : "",
            c = by("%" + o + "%", n),
            m = c.name,
            _ = c.value,
            k = !1,
            I = c.alias;
        I && (o = I[0], gy(i, py([0, 1], I)));
        for (var L = 1, $ = !0; L < i.length; L += 1) {
            var H = i[L],
                te = Qs(H, 0, 1),
                W = Qs(H, -1);
            if ((te === '"' || te === "'" || te === "`" || W === '"' || W === "'" || W === "`") && te !== W) throw new gr("property names with quotes must have matching quotes");
            if ((H === "constructor" || !$) && (k = !0), o += "." + H, m = "%" + o + "%", Js(hr, m)) _ = hr[m];
            else if (_ != null) {
                if (!(H in _)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Pi && L + 1 >= i.length) {
                    var re = Pi(_, H);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? _ = re.get : _ = _[H]
                } else $ = Js(_, H), _ = _[H];
                $ && !k && (hr[m] = _)
            }
        }
        return _
    },
    Bc = {
        exports: {}
    };
(function(t) {
    var e = Fa,
        n = za,
        i = n("%Function.prototype.apply%"),
        o = n("%Function.prototype.call%"),
        c = n("%Reflect.apply%", !0) || e.call(o, i),
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
    t.exports = function($) {
        var H = c(e, o, arguments);
        if (m && _) {
            var te = m(H, "length");
            te.configurable && _(H, "length", {
                value: 1 + k(0, $.length - (arguments.length - 1))
            })
        }
        return H
    };
    var I = function() {
        return c(e, i, arguments)
    };
    _ ? _(t.exports, "apply", {
        value: I
    }) : t.exports.apply = I
})(Bc);
var jc = za,
    Fc = Bc.exports,
    Cy = Fc(jc("String.prototype.indexOf")),
    xy = function(e, n) {
        var i = jc(e, !!n);
        return typeof i == "function" && Cy(e, ".prototype.") > -1 ? Fc(i) : i
    };
const Ey = {},
    Sy = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ey
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    _y = ph(Sy);
var Ua = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Ua ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = Ua && na && typeof na.get == "function" ? na.get : null,
    ky = Ua && Map.prototype.forEach,
    Ha = typeof Set == "function" && Set.prototype,
    ia = Object.getOwnPropertyDescriptor && Ha ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    eo = Ha && ia && typeof ia.get == "function" ? ia.get : null,
    Ty = Ha && Set.prototype.forEach,
    Ay = typeof WeakMap == "function" && WeakMap.prototype,
    ts = Ay ? WeakMap.prototype.has : null,
    Oy = typeof WeakSet == "function" && WeakSet.prototype,
    ns = Oy ? WeakSet.prototype.has : null,
    Ry = typeof WeakRef == "function" && WeakRef.prototype,
    Nl = Ry ? WeakRef.prototype.deref : null,
    Iy = Boolean.prototype.valueOf,
    Ly = Object.prototype.toString,
    Dy = Function.prototype.toString,
    My = String.prototype.match,
    Ga = String.prototype.slice,
    hi = String.prototype.replace,
    Py = String.prototype.toUpperCase,
    Vl = String.prototype.toLowerCase,
    zc = RegExp.prototype.test,
    $l = Array.prototype.concat,
    jn = Array.prototype.join,
    Ny = Array.prototype.slice,
    Bl = Math.floor,
    Sa = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    _a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Uc = Object.prototype.propertyIsEnumerable,
    jl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Fl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || zc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Bl(-t) : Bl(t);
        if (i !== t) {
            var o = String(i),
                c = Ga.call(e, o.length + 1);
            return hi.call(o, n, "$&_") + "." + hi.call(hi.call(c, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var ka = _y,
    zl = ka.custom,
    Ul = Gc(zl) ? zl : null,
    Vy = function t(e, n, i, o) {
        var c = n || {};
        if (li(c, "quoteStyle") && c.quoteStyle !== "single" && c.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(c, "maxStringLength") && (typeof c.maxStringLength == "number" ? c.maxStringLength < 0 && c.maxStringLength !== 1 / 0 : c.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = li(c, "customInspect") ? c.customInspect : !0;
        if (typeof m != "boolean" && m !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(c, "indent") && c.indent !== null && c.indent !== "	" && !(parseInt(c.indent, 10) === c.indent && c.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(c, "numericSeparator") && typeof c.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var _ = c.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Wc(e, c);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return _ ? Fl(e, k) : k
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return _ ? Fl(e, I) : I
        }
        var L = typeof c.depth > "u" ? 5 : c.depth;
        if (typeof i > "u" && (i = 0), i >= L && L > 0 && typeof e == "object") return Ta(e) ? "[Array]" : "[Object]";
        var $ = tw(c, i);
        if (typeof o > "u") o = [];
        else if (qc(o, e) >= 0) return "[Circular]";

        function H(Fe, q, ae) {
            if (q && (o = Ny.call(o), o.push(q)), ae) {
                var Ae = {
                    depth: c.depth
                };
                return li(c, "quoteStyle") && (Ae.quoteStyle = c.quoteStyle), t(Fe, Ae, i + 1, o)
            }
            return t(Fe, c, i + 1, o)
        }
        if (typeof e == "function" && !Hl(e)) {
            var te = qy(e),
                W = Ms(e, H);
            return "[Function" + (te ? ": " + te : " (anonymous)") + "]" + (W.length > 0 ? " { " + jn.call(W, ", ") + " }" : "")
        }
        if (Gc(e)) {
            var re = mr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : _a.call(e);
            return typeof e == "object" && !mr ? Xr(re) : re
        }
        if (Qy(e)) {
            for (var v = "<" + Vl.call(String(e.nodeName)), D = e.attributes || [], Y = 0; Y < D.length; Y++) v += " " + D[Y].name + "=" + Hc($y(D[Y].value), "double", c);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + Vl.call(String(e.nodeName)) + ">", v
        }
        if (Ta(e)) {
            if (e.length === 0) return "[]";
            var le = Ms(e, H);
            return $ && !ew(le) ? "[" + Aa(le, $) + "]" : "[ " + jn.call(le, ", ") + " ]"
        }
        if (jy(e)) {
            var oe = Ms(e, H);
            return !("cause" in Error.prototype) && "cause" in e && !Uc.call(e, "cause") ? "{ [" + String(e) + "] " + jn.call($l.call("[cause]: " + H(e.cause), oe), ", ") + " }" : oe.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + jn.call(oe, ", ") + " }"
        }
        if (typeof e == "object" && m) {
            if (Ul && typeof e[Ul] == "function" && ka) return ka(e, {
                depth: L - i
            });
            if (m !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Wy(e)) {
            var ye = [];
            return ky.call(e, function(Fe, q) {
                ye.push(H(q, e, !0) + " => " + H(Fe, e))
            }), Gl("Map", Zs.call(e), ye, $)
        }
        if (Ky(e)) {
            var f = [];
            return Ty.call(e, function(Fe) {
                f.push(H(Fe, e))
            }), Gl("Set", eo.call(e), f, $)
        }
        if (Yy(e)) return sa("WeakMap");
        if (Jy(e)) return sa("WeakSet");
        if (Xy(e)) return sa("WeakRef");
        if (zy(e)) return Xr(H(Number(e)));
        if (Hy(e)) return Xr(H(Sa.call(e)));
        if (Uy(e)) return Xr(Iy.call(e));
        if (Fy(e)) return Xr(H(String(e)));
        if (!By(e) && !Hl(e)) {
            var Se = Ms(e, H),
                Oe = jl ? jl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Ga.call(gi(e), 8, -1) : Pe ? "Object" : "",
                $e = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Q = $e + (lt || Pe ? "[" + jn.call($l.call([], lt || [], Pe || []), ": ") + "] " : "");
            return Se.length === 0 ? Q + "{}" : $ ? Q + "{" + Aa(Se, $) + "}" : Q + "{ " + jn.call(Se, ", ") + " }"
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
    return gi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function By(t) {
    return gi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Hl(t) {
    return gi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function jy(t) {
    return gi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function Fy(t) {
    return gi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function zy(t) {
    return gi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Uy(t) {
    return gi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gc(t) {
    if (mr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !_a) return !1;
    try {
        return _a.call(t), !0
    } catch {}
    return !1
}

function Hy(t) {
    if (!t || typeof t != "object" || !Sa) return !1;
    try {
        return Sa.call(t), !0
    } catch {}
    return !1
}
var Gy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return Gy.call(t, e)
}

function gi(t) {
    return Ly.call(t)
}

function qy(t) {
    if (t.name) return t.name;
    var e = My.call(Dy.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function qc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function Wy(t) {
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

function Xy(t) {
    if (!Nl || !t || typeof t != "object") return !1;
    try {
        return Nl.call(t), !0
    } catch {}
    return !1
}

function Ky(t) {
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

function Jy(t) {
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

function Qy(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Wc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Wc(Ga.call(t, 0, e.maxStringLength), e) + i
    }
    var o = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Zy);
    return Hc(o, "single", e)
}

function Zy(t) {
    var e = t.charCodeAt(0),
        n = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [e];
    return n ? "\\" + n : "\\x" + (e < 16 ? "0" : "") + Py.call(e.toString(16))
}

function Xr(t) {
    return "Object(" + t + ")"
}

function sa(t) {
    return t + " { ? }"
}

function Gl(t, e, n, i) {
    var o = i ? Aa(n, i) : jn.call(n, ", ");
    return t + " (" + e + ") {" + o + "}"
}

function ew(t) {
    for (var e = 0; e < t.length; e++)
        if (qc(t[e], `
`) >= 0) return !1;
    return !0
}

function tw(t, e) {
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
        for (var o = 0; o < t.length; o++) i[o] = li(t, o) ? e(t[o], t) : ""
    }
    var c = typeof ra == "function" ? ra(t) : [],
        m;
    if (mr) {
        m = {};
        for (var _ = 0; _ < c.length; _++) m["$" + c[_]] = c[_]
    }
    for (var k in t) !li(t, k) || n && String(Number(k)) === k && k < t.length || mr && m["$" + k] instanceof Symbol || (zc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ra == "function")
        for (var I = 0; I < c.length; I++) Uc.call(t, c[I]) && i.push("[" + e(c[I]) + "]: " + e(t[c[I]], t));
    return i
}
var qa = za,
    Sr = xy,
    nw = Vy,
    iw = qa("%TypeError%"),
    Ps = qa("%WeakMap%", !0),
    Ns = qa("%Map%", !0),
    rw = Sr("WeakMap.prototype.get", !0),
    sw = Sr("WeakMap.prototype.set", !0),
    ow = Sr("WeakMap.prototype.has", !0),
    aw = Sr("Map.prototype.get", !0),
    lw = Sr("Map.prototype.set", !0),
    cw = Sr("Map.prototype.has", !0),
    Wa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    uw = function(t, e) {
        var n = Wa(t, e);
        return n && n.value
    },
    hw = function(t, e, n) {
        var i = Wa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    dw = function(t, e) {
        return !!Wa(t, e)
    },
    fw = function() {
        var e, n, i, o = {
            assert: function(c) {
                if (!o.has(c)) throw new iw("Side channel does not contain " + nw(c))
            },
            get: function(c) {
                if (Ps && c && (typeof c == "object" || typeof c == "function")) {
                    if (e) return rw(e, c)
                } else if (Ns) {
                    if (n) return aw(n, c)
                } else if (i) return uw(i, c)
            },
            has: function(c) {
                if (Ps && c && (typeof c == "object" || typeof c == "function")) {
                    if (e) return ow(e, c)
                } else if (Ns) {
                    if (n) return cw(n, c)
                } else if (i) return dw(i, c);
                return !1
            },
            set: function(c, m) {
                Ps && c && (typeof c == "object" || typeof c == "function") ? (e || (e = new Ps), sw(e, c, m)) : Ns ? (n || (n = new Ns), lw(n, c, m)) : (i || (i = {
                    key: {},
                    next: null
                }), hw(i, c, m))
            }
        };
        return o
    },
    pw = String.prototype.replace,
    gw = /%20/g,
    oa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Ya = {
        default: oa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return pw.call(t, gw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: oa.RFC1738,
        RFC3986: oa.RFC3986
    },
    mw = Ya,
    aa = Object.prototype.hasOwnProperty,
    Di = Array.isArray,
    $n = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    vw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Di(i)) {
                for (var o = [], c = 0; c < i.length; ++c) typeof i[c] < "u" && o.push(i[c]);
                n.obj[n.prop] = o
            }
        }
    },
    Yc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, o = 0; o < e.length; ++o) typeof e[o] < "u" && (i[o] = e[o]);
        return i
    },
    yw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Di(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !aa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var o = e;
        return Di(e) && !Di(n) && (o = Yc(e, i)), Di(e) && Di(n) ? (n.forEach(function(c, m) {
            if (aa.call(e, m)) {
                var _ = e[m];
                _ && typeof _ == "object" && c && typeof c == "object" ? e[m] = t(_, c, i) : e.push(c)
            } else e[m] = c
        }), e) : Object.keys(n).reduce(function(c, m) {
            var _ = n[m];
            return aa.call(c, m) ? c[m] = t(c[m], _, i) : c[m] = _, c
        }, o)
    },
    ww = function(e, n) {
        return Object.keys(n).reduce(function(i, o) {
            return i[o] = n[o], i
        }, e)
    },
    bw = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Cw = function(e, n, i, o, c) {
        if (e.length === 0) return e;
        var m = e;
        if (typeof e == "symbol" ? m = Symbol.prototype.toString.call(e) : typeof e != "string" && (m = String(e)), i === "iso-8859-1") return escape(m).replace(/%u[0-9a-f]{4}/gi, function(L) {
            return "%26%23" + parseInt(L.slice(2), 16) + "%3B"
        });
        for (var _ = "", k = 0; k < m.length; ++k) {
            var I = m.charCodeAt(k);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || c === mw.RFC1738 && (I === 40 || I === 41)) {
                _ += m.charAt(k);
                continue
            }
            if (I < 128) {
                _ = _ + $n[I];
                continue
            }
            if (I < 2048) {
                _ = _ + ($n[192 | I >> 6] + $n[128 | I & 63]);
                continue
            }
            if (I < 55296 || I >= 57344) {
                _ = _ + ($n[224 | I >> 12] + $n[128 | I >> 6 & 63] + $n[128 | I & 63]);
                continue
            }
            k += 1, I = 65536 + ((I & 1023) << 10 | m.charCodeAt(k) & 1023), _ += $n[240 | I >> 18] + $n[128 | I >> 12 & 63] + $n[128 | I >> 6 & 63] + $n[128 | I & 63]
        }
        return _
    },
    xw = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], o = 0; o < n.length; ++o)
            for (var c = n[o], m = c.obj[c.prop], _ = Object.keys(m), k = 0; k < _.length; ++k) {
                var I = _[k],
                    L = m[I];
                typeof L == "object" && L !== null && i.indexOf(L) === -1 && (n.push({
                    obj: m,
                    prop: I
                }), i.push(L))
            }
        return vw(n), e
    },
    Ew = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Sw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    _w = function(e, n) {
        return [].concat(e, n)
    },
    kw = function(e, n) {
        if (Di(e)) {
            for (var i = [], o = 0; o < e.length; o += 1) i.push(n(e[o]));
            return i
        }
        return n(e)
    },
    Xc = {
        arrayToObject: Yc,
        assign: ww,
        combine: _w,
        compact: xw,
        decode: bw,
        encode: Cw,
        isBuffer: Sw,
        isRegExp: Ew,
        maybeMap: kw,
        merge: yw
    },
    Kc = fw,
    Oa = Xc,
    is = Ya,
    Tw = Object.prototype.hasOwnProperty,
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
    Aw = String.prototype.split,
    Ow = Array.prototype.push,
    Jc = function(t, e) {
        Ow.apply(t, ei(e) ? e : [e])
    },
    Rw = Date.prototype.toISOString,
    Wl = is.default,
    nn = {
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
            return Rw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Iw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    la = {},
    Lw = function t(e, n, i, o, c, m, _, k, I, L, $, H, te, W, re, v) {
        for (var D = e, Y = v, le = 0, oe = !1;
            (Y = Y.get(la)) !== void 0 && !oe;) {
            var ye = Y.get(e);
            if (le += 1, typeof ye < "u") {
                if (ye === le) throw new RangeError("Cyclic object value");
                oe = !0
            }
            typeof Y.get(la) > "u" && (le = 0)
        }
        if (typeof k == "function" ? D = k(n, D) : D instanceof Date ? D = $(D) : i === "comma" && ei(D) && (D = Oa.maybeMap(D, function(he) {
                return he instanceof Date ? $(he) : he
            })), D === null) {
            if (c) return _ && !W ? _(n, nn.encoder, re, "key", H) : n;
            D = ""
        }
        if (Iw(D) || Oa.isBuffer(D)) {
            if (_) {
                var f = W ? n : _(n, nn.encoder, re, "key", H);
                if (i === "comma" && W) {
                    for (var Se = Aw.call(String(D), ","), Oe = "", Pe = 0; Pe < Se.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + te(_(Se[Pe], nn.encoder, re, "value", H));
                    return [te(f) + (o && ei(D) && Se.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [te(f) + "=" + te(_(D, nn.encoder, re, "value", H))]
            }
            return [te(n) + "=" + te(String(D))]
        }
        var lt = [];
        if (typeof D > "u") return lt;
        var $e;
        if (i === "comma" && ei(D)) $e = [{
            value: D.length > 0 ? D.join(",") || null : void 0
        }];
        else if (ei(k)) $e = k;
        else {
            var Q = Object.keys(D);
            $e = I ? Q.sort(I) : Q
        }
        for (var Fe = o && ei(D) && D.length === 1 ? n + "[]" : n, q = 0; q < $e.length; ++q) {
            var ae = $e[q],
                Ae = typeof ae == "object" && typeof ae.value < "u" ? ae.value : D[ae];
            if (!(m && Ae === null)) {
                var be = ei(D) ? typeof i == "function" ? i(Fe, ae) : Fe : Fe + (L ? "." + ae : "[" + ae + "]");
                v.set(e, le);
                var we = Kc();
                we.set(la, v), Jc(lt, t(Ae, be, i, o, c, m, _, k, I, L, $, H, te, W, re, we))
            }
        }
        return lt
    },
    Dw = function(e) {
        if (!e) return nn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || nn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!Tw.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var o = is.formatters[i],
            c = nn.filter;
        return (typeof e.filter == "function" || ei(e.filter)) && (c = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : nn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? nn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : nn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? nn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : nn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : nn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : nn.encodeValuesOnly,
            filter: c,
            format: i,
            formatter: o,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : nn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : nn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : nn.strictNullHandling
        }
    },
    Mw = function(t, e) {
        var n = t,
            i = Dw(e),
            o, c;
        typeof i.filter == "function" ? (c = i.filter, n = c("", n)) : ei(i.filter) && (c = i.filter, o = c);
        var m = [];
        if (typeof n != "object" || n === null) return "";
        var _;
        e && e.arrayFormat in ql ? _ = e.arrayFormat : e && "indices" in e ? _ = e.indices ? "indices" : "repeat" : _ = "indices";
        var k = ql[_];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = k === "comma" && e && e.commaRoundTrip;
        o || (o = Object.keys(n)), i.sort && o.sort(i.sort);
        for (var L = Kc(), $ = 0; $ < o.length; ++$) {
            var H = o[$];
            i.skipNulls && n[H] === null || Jc(m, Lw(n[H], H, k, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, L))
        }
        var te = m.join(i.delimiter),
            W = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? W += "utf8=%26%2310003%3B&" : W += "utf8=%E2%9C%93&"), te.length > 0 ? W + te : ""
    },
    vr = Xc,
    Ra = Object.prototype.hasOwnProperty,
    Pw = Array.isArray,
    Zt = {
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
    Qc = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Vw = "utf8=%26%2310003%3B",
    $w = "utf8=%E2%9C%93",
    Bw = function(e, n) {
        var i = {},
            o = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            c = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            m = o.split(n.delimiter, c),
            _ = -1,
            k, I = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < m.length; ++k) m[k].indexOf("utf8=") === 0 && (m[k] === $w ? I = "utf-8" : m[k] === Vw && (I = "iso-8859-1"), _ = k, k = m.length);
        for (k = 0; k < m.length; ++k)
            if (k !== _) {
                var L = m[k],
                    $ = L.indexOf("]="),
                    H = $ === -1 ? L.indexOf("=") : $ + 1,
                    te, W;
                H === -1 ? (te = n.decoder(L, Zt.decoder, I, "key"), W = n.strictNullHandling ? null : "") : (te = n.decoder(L.slice(0, H), Zt.decoder, I, "key"), W = vr.maybeMap(Qc(L.slice(H + 1), n), function(re) {
                    return n.decoder(re, Zt.decoder, I, "value")
                })), W && n.interpretNumericEntities && I === "iso-8859-1" && (W = Nw(W)), L.indexOf("[]=") > -1 && (W = Pw(W) ? [W] : W), Ra.call(i, te) ? i[te] = vr.combine(i[te], W) : i[te] = W
            } return i
    },
    jw = function(t, e, n, i) {
        for (var o = i ? e : Qc(e, n), c = t.length - 1; c >= 0; --c) {
            var m, _ = t[c];
            if (_ === "[]" && n.parseArrays) m = [].concat(o);
            else {
                m = n.plainObjects ? Object.create(null) : {};
                var k = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _,
                    I = parseInt(k, 10);
                !n.parseArrays && k === "" ? m = {
                    0: o
                } : !isNaN(I) && _ !== k && String(I) === k && I >= 0 && n.parseArrays && I <= n.arrayLimit ? (m = [], m[I] = o) : k !== "__proto__" && (m[k] = o)
            }
            o = m
        }
        return o
    },
    Fw = function(e, n, i, o) {
        if (!!e) {
            var c = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                m = /(\[[^[\]]*])/,
                _ = /(\[[^[\]]*])/g,
                k = i.depth > 0 && m.exec(c),
                I = k ? c.slice(0, k.index) : c,
                L = [];
            if (I) {
                if (!i.plainObjects && Ra.call(Object.prototype, I) && !i.allowPrototypes) return;
                L.push(I)
            }
            for (var $ = 0; i.depth > 0 && (k = _.exec(c)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Ra.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                L.push(k[1])
            }
            return k && L.push("[" + c.slice(k.index) + "]"), jw(L, n, i, o)
        }
    },
    zw = function(e) {
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
            delimiter: typeof e.delimiter == "string" || vr.isRegExp(e.delimiter) ? e.delimiter : Zt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Zt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Zt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Zt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Zt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Zt.strictNullHandling
        }
    },
    Uw = function(t, e) {
        var n = zw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? Bw(t, n) : t, o = n.plainObjects ? Object.create(null) : {}, c = Object.keys(i), m = 0; m < c.length; ++m) {
            var _ = c[m],
                k = Fw(_, i[_], n, typeof t == "string");
            o = vr.merge(o, k, n)
        }
        return n.allowSparse === !0 ? o : vr.compact(o)
    },
    Hw = Mw,
    Gw = Uw,
    qw = Ya,
    Zc = {
        formats: qw,
        parse: Gw,
        stringify: Hw
    };
class Ww {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Yw {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Xw {
    constructor(e) {
        this.connections = e.connections
    }
}
class Kw {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class Jw {}
var po = {
    CreateRoomReply: Ww,
    GetRoomReply: Yw,
    GetAudienceReply: Xw,
    RoomExit: Kw,
    RoomLock: Jw
};
const Yl = Ea.exports,
    Qw = Zc,
    {
        CreateRoomReply: Zw,
        GetRoomReply: eb
    } = po;
class tb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = Qw.stringify(n);
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
            m = await (await Yl(i, {
                method: "POST"
            })).json();
        if (!m.ok) throw new Error(`failed to create room: ${m.error}`);
        let _ = m.body;
        return new Zw({
            code: _.code,
            token: _.token,
            host: _.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            o = await (await Yl(n)).json();
        if (!o.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${o.error}`);
        let c = o.body;
        return new eb({
            appId: c.appId,
            appTag: c.appTag,
            audienceEnabled: c.audienceEnabled,
            code: c.code,
            host: c.host,
            audienceHost: c.audienceHost,
            locked: c.locked,
            full: c.full,
            moderationEnabled: c.moderationEnabled,
            passwordRequired: c.passwordRequired,
            twitchLocked: c.twitchLocked,
            locale: c.locale,
            keepalive: c.keepalive,
            controllerBranch: c.controllerBranch
        })
    }
}
var nb = {
        APIClient: tb
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof vt < "u" ? ar = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var ib = ar,
    Xa = {
        exports: {}
    },
    dr = typeof Reflect == "object" ? Reflect : null,
    Xl = dr && typeof dr.apply == "function" ? dr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Us;
dr && typeof dr.ownKeys == "function" ? Us = dr.ownKeys : Object.getOwnPropertySymbols ? Us = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Us = function(e) {
    return Object.getOwnPropertyNames(e)
};

function rb(t) {
    console && console.warn && console.warn(t)
}
var eu = Number.isNaN || function(e) {
    return e !== e
};

function It() {
    It.init.call(this)
}
Xa.exports = It;
Xa.exports.once = lb;
It.EventEmitter = It;
It.prototype._events = void 0;
It.prototype._eventsCount = 0;
It.prototype._maxListeners = void 0;
var Kl = 10;

function go(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(It, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Kl
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || eu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Kl = t
    }
});
It.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
It.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || eu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function tu(t) {
    return t._maxListeners === void 0 ? It.defaultMaxListeners : t._maxListeners
}
It.prototype.getMaxListeners = function() {
    return tu(this)
};
It.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var o = e === "error",
        c = this._events;
    if (c !== void 0) o = o && c.error === void 0;
    else if (!o) return !1;
    if (o) {
        var m;
        if (n.length > 0 && (m = n[0]), m instanceof Error) throw m;
        var _ = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw _.context = m, _
    }
    var k = c[e];
    if (k === void 0) return !1;
    if (typeof k == "function") Xl(k, this, n);
    else
        for (var I = k.length, L = ou(k, I), i = 0; i < I; ++i) Xl(L[i], this, n);
    return !0
};

function nu(t, e, n, i) {
    var o, c, m;
    if (go(n), c = t._events, c === void 0 ? (c = t._events = Object.create(null), t._eventsCount = 0) : (c.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), c = t._events), m = c[e]), m === void 0) m = c[e] = n, ++t._eventsCount;
    else if (typeof m == "function" ? m = c[e] = i ? [n, m] : [m, n] : i ? m.unshift(n) : m.push(n), o = tu(t), o > 0 && m.length > o && !m.warned) {
        m.warned = !0;
        var _ = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _.name = "MaxListenersExceededWarning", _.emitter = t, _.type = e, _.count = m.length, rb(_)
    }
    return t
}
It.prototype.addListener = function(e, n) {
    return nu(this, e, n, !1)
};
It.prototype.on = It.prototype.addListener;
It.prototype.prependListener = function(e, n) {
    return nu(this, e, n, !0)
};

function sb() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function iu(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        o = sb.bind(i);
    return o.listener = n, i.wrapFn = o, o
}
It.prototype.once = function(e, n) {
    return go(n), this.on(e, iu(this, e, n)), this
};
It.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, iu(this, e, n)), this
};
It.prototype.removeListener = function(e, n) {
    var i, o, c, m, _;
    if (go(n), o = this._events, o === void 0) return this;
    if (i = o[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete o[e], o.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (c = -1, m = i.length - 1; m >= 0; m--)
            if (i[m] === n || i[m].listener === n) {
                _ = i[m].listener, c = m;
                break
            } if (c < 0) return this;
        c === 0 ? i.shift() : ob(i, c), i.length === 1 && (o[e] = i[0]), o.removeListener !== void 0 && this.emit("removeListener", e, _ || n)
    }
    return this
};
It.prototype.off = It.prototype.removeListener;
It.prototype.removeAllListeners = function(e) {
    var n, i, o;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var c = Object.keys(i),
            m;
        for (o = 0; o < c.length; ++o) m = c[o], m !== "removeListener" && this.removeAllListeners(m);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (o = n.length - 1; o >= 0; o--) this.removeListener(e, n[o]);
    return this
};

function ru(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var o = i[e];
    return o === void 0 ? [] : typeof o == "function" ? n ? [o.listener || o] : [o] : n ? ab(o) : ou(o, o.length)
}
It.prototype.listeners = function(e) {
    return ru(this, e, !0)
};
It.prototype.rawListeners = function(e) {
    return ru(this, e, !1)
};
It.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : su.call(t, e)
};
It.prototype.listenerCount = su;

function su(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
It.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Us(this._events) : []
};

function ou(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function ob(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function ab(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function lb(t, e) {
    return new Promise(function(n, i) {
        function o(m) {
            t.removeListener(e, c), i(m)
        }

        function c() {
            typeof t.removeListener == "function" && t.removeListener("error", o), n([].slice.call(arguments))
        }
        au(t, e, c, {
            once: !0
        }), e !== "error" && cb(t, o, {
            once: !0
        })
    })
}

function cb(t, e, n) {
    typeof t.on == "function" && au(t, "error", e, n)
}

function au(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function o(c) {
        i.once && t.removeEventListener(e, o), n(c)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class ub {
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
class lu extends ds {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class cu extends ds {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class uu extends ds {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class Tt extends mo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class hu extends Tt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class du extends Tt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class fu extends Tt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class pu extends Tt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class gu extends Tt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class mu extends Tt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class vu extends Tt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class yu extends Tt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class wu extends Tt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class bu extends Tt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Cu extends Tt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class xu extends Tt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Eu extends Tt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Su extends Tt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class _u extends Tt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class ku extends Tt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Tu extends Tt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Au extends Tt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Ou extends Tt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Ru extends Tt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Iu extends Tt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Lu extends Tt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Du extends Tt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Mu extends Tt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Pu extends Tt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class Nu extends Tt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Vu extends Tt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class $u extends Tt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function hb({
    code: t,
    message: e
}) {
    const n = db[t];
    return n ? new n({
        message: e
    }) : new mo({
        message: e
    })
}
var ti = {
    createError: hb,
    CallError: mo,
    EcastServerError: ds,
    EcastCreateRoomFailed: lu,
    EcastDialRoomFailed: cu,
    EcastServerIsShuttingDown: uu,
    EcastClientError: Tt,
    EcastParseError: hu,
    EcastRequestIsMissingOpcode: du,
    EcastRequestHasInvalidOpcode: fu,
    EcastRequestHasInvalidArguments: pu,
    EcastEntityNotFound: gu,
    EcastEntityAlreadyExists: mu,
    EcastEntityTypeError: vu,
    EcastNoSuchClient: yu,
    EcastRoomIsLocked: wu,
    EcastRoomIsFull: bu,
    EcastLicenseNotFound: Cu,
    EcastLicenseCheckFailed: xu,
    EcastRoomNotFound: Eu,
    EcastInvalidRole: Su,
    EcastTwitchLoginRequired: _u,
    EcastInvalidOption: ku,
    EcastPasswordRequired: Tu,
    EcastInvalidPassword: Au,
    EcastNameRequired: Ou,
    EcastFilterError: Ru,
    EcastNoSuchFilter: Iu,
    EcastPermissionDenied: Lu,
    EcastNotConnected: Du,
    EcastIllegalOperation: Mu,
    EcastACLChangeDenied: Pu,
    EcastRoomHasEnded: Nu,
    EcastEntityLocked: Vu,
    EcastRateLimitExceeded: $u,
    ObservedError: ub
};
const db = {
    1e3: ds,
    1001: lu,
    1002: cu,
    1003: uu,
    2e3: Tt,
    2001: hu,
    2002: du,
    2003: fu,
    2004: pu,
    2005: gu,
    2006: mu,
    2007: vu,
    2008: yu,
    2009: wu,
    2010: bu,
    2011: Cu,
    2012: xu,
    2013: Eu,
    2014: Su,
    2015: _u,
    2016: ku,
    2017: Tu,
    2018: Au,
    2019: Ou,
    2021: Ru,
    2022: Iu,
    2023: Lu,
    2024: Du,
    2025: Mu,
    2026: Pu,
    2027: Nu,
    2028: Vu,
    2420: $u
};
class fb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class pb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class gb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class mb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class vb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ka = {
    ClientConnected: pb,
    ClientDisconnected: gb,
    ClientKicked: vb,
    ClientSend: mb,
    ClientWelcome: fb
};
class yb {
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
    CountGroup: yb
};
class wb {
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
    GCounter: wb
};
class bb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var Bu = {
    Notification: bb
};
class Cb {
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
class xb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var Za = {
    ObjectEntity: Cb,
    ObjectEcho: xb
};
class Eb {
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
    PNCounter: Eb
};
class Sb {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var ju = {
    Reply: Sb
};
class _b {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var kb = {
    Request: _b
};
class Tb {
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
class Ab {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var tl = {
    TextEntity: Tb,
    TextEcho: Ab
};
class Ob {
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
    TextRing: Ob
};
class Rb {
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
var Fu = {
    ArtifactEntity: Rb
};
class Ib {
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
class Db {
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
    DoodleEntity: Ib,
    DoodleLine: Lb,
    DoodleLineRemoved: Db
};
class Mb {
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
class Pb {
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
var zu = {
    StackEntity: Mb,
    StackElement: Pb,
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
var Bb = {
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
var Fb = {
    LockEntity: jb
};
class zb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Hu = {
    OK: zb
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
var Gu = {
    NumberEntity: Ub
};
const {
    ArtifactEntity: Hb
} = Fu, {
    ClientWelcome: Gb,
    ClientConnected: qb,
    ClientDisconnected: Wb,
    ClientKicked: Yb,
    ClientSend: Xb
} = Ka, {
    CountGroup: Kb
} = Ja, {
    DoodleEntity: Jb,
    DoodleLine: Qb,
    DoodleLineRemoved: Zb
} = il, {
    StackEntity: e0,
    StackElement: t0,
    StackElements: n0
} = zu, {
    DropEntity: i0
} = Uu, {
    Echo: r0
} = Bb, {
    LockEntity: s0
} = Fb, {
    GCounter: o0
} = Qa, {
    GetAudienceReply: a0,
    RoomExit: l0,
    RoomLock: c0
} = po, {
    Notification: u0
} = Bu, {
    OK: h0
} = Hu, {
    NumberEntity: d0
} = Gu, {
    ObjectEcho: f0,
    ObjectEntity: p0
} = Za, {
    PNCounter: Jl
} = el, {
    Reply: g0
} = ju, {
    TextEcho: m0,
    TextEntity: v0
} = tl, {
    TextRing: y0
} = nl, {
    createError: Ql,
    ObservedError: w0
} = ti;

function Ia(t, e, n) {
    switch (t) {
        case "ok":
            return new h0;
        case "echo":
            return new r0({
                message: e.message
            });
        case "lock":
            return new s0({
                key: e.key,
                from: e.from
            });
        case "error":
            return Ql({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new w0({
                to: e.to,
                error: Ql({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new v0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new m0({
                message: e.message
            });
        case "object":
            return new p0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new f0({
                message: e.message
            });
        case "drop":
            return new i0({
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
            return new qb({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Wb({
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
            return new Xb({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Gb({
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
                Object.entries(e.entities).forEach(([c, m]) => {
                    o[c] = Ia(m[0], m[1], m[2])
                }), i.entities = o
            }
            return i
        }
        case "doodle":
            return new Jb({
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
            return new Qb({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new Zb({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new e0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new t0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new n0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new d0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new l0({
                cause: e.cause
            });
        case "room/lock":
            return new c0;
        case "room/get-audience":
            return new a0({
                connections: e.connections
            });
        case "audience":
            return new Jl({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new Kb({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new y0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new o0({
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

function b0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new g0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Ia(n, e.result)
    }) : new u0({
        pc: e.pc,
        opcode: n,
        result: Ia(n, e.result)
    })
}
var C0 = {
    parseResponseMessage: b0
};
const Zl = ib,
    x0 = Zc,
    E0 = Xa.exports,
    {
        CallError: S0
    } = ti,
    {
        ClientWelcome: _0
    } = Ka,
    {
        CountGroup: k0
    } = Ja,
    {
        GCounter: T0
    } = Qa,
    {
        Notification: ec
    } = Bu,
    {
        ObjectEntity: ca
    } = Za,
    {
        PNCounter: A0
    } = el,
    {
        Reply: O0
    } = ju,
    {
        Request: R0
    } = kb,
    {
        TextEntity: ua
    } = tl,
    {
        TextRing: I0
    } = nl,
    {
        parseResponseMessage: L0
    } = C0,
    {
        DoodleEntity: D0
    } = il,
    {
        StackEntity: M0
    } = zu,
    P0 = 1e3 + Math.floor(Math.random() * 500),
    tc = 13e3;
class N0 extends E0 {
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
        const n = x0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((o, c) => {
            let m = !1,
                _ = !1,
                k = L => {
                    o(L), m = !0
                },
                I = L => {
                    c(L), m = !0
                };
            this.conn = new Zl(i, "ecast-v0"), this.conn.onmessage = L => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(L.data),null,2)}`);
                const $ = L0(L);
                if ($ instanceof O0) this.onReply($);
                else if ($ instanceof ec) {
                    if ($.result instanceof _0) _ = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), k($.result);
                    else if (!m) {
                        I($.result);
                        return
                    }
                    this.onNotification($)
                } else console.error(`failed to parse response messsage: ${$}`)
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
            n = P0;
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
            o = new R0({
                seq: i,
                opcode: e,
                params: n
            }),
            c = new Promise((_, k) => {
                this.pending[i] = {
                    resolve: _,
                    reject: k,
                    request: o
                }
            }),
            m = JSON.stringify(o);
        return this.debugLog(`send -> ${m}`), this.conn.send(m), c
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
        const c = await this.send("object/create", o);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), c
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
        const c = await this.send("object/set", o);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), c
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
                acl: c,
                accept: m,
                reject: _
            } = i;
        c && (o.acl = c), m && (o.accept = m), _ && (o.reject = _);
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
        const c = await this.send("text/set", o);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), c
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
            colors: c,
            live: m,
            maxPoints: _,
            size: k,
            weights: I
        } = n;
        o && (i.acl = o), c && (i.colors = c), i.live = m, _ != null && (i.maxPoints = _), k && (i.size = k), I && (i.weights = I);
        const L = await this.send("doodle/create", i);
        return this.entities[e] = new D0({
            key: e,
            colors: c,
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
            color: o,
            weight: c,
            points: m
        } = n, _ = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: o,
            weight: c,
            points: m
        }), k = {
            layer: i,
            color: o,
            weight: c,
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
        const o = await this.send("stack/create", i);
        return this.entities[e] = new M0({
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
        return this.entities[e] = new k0({
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
        return this.entities[e] = new T0({
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
        return this.entities[e] = new A0({
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
                accept: c,
                reject: m
            } = n;
        o && (i.limit = o), c && (i.accept = c), m && (i.reject = m);
        const _ = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new I0({
            key: e,
            elements: [],
            limit: o,
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
var V0 = {
    WSClient: N0
};
const {
    APIClient: $0
} = nb, {
    WSClient: B0
} = V0, {
    CreateRoomReply: j0,
    GetRoomReply: F0
} = po, {
    ClientWelcome: z0,
    ClientDisconnected: U0
} = Ka, {
    ArtifactEntity: H0
} = Fu, {
    GCounter: G0
} = Qa, {
    NumberEntity: q0
} = Gu, {
    TextEntity: W0
} = tl, {
    DoodleEntity: Y0
} = il, {
    ObjectEntity: X0
} = Za, {
    CountGroup: K0
} = Ja, {
    DropEntity: J0
} = Uu, {
    OK: Q0
} = Hu, {
    RoomExit: Z0
} = po, {
    TextRing: eC
} = nl, {
    PNCounter: tC
} = el;
var Ii = {
    APIClient: $0,
    WSClient: B0,
    ClientWelcome: z0,
    CreateRoomReply: j0,
    DropEntity: J0,
    GetRoomReply: F0,
    ClientDisconnected: U0,
    RoomExit: Z0,
    OK: Q0,
    ArtifactEntity: H0,
    DoodleEntity: Y0,
    NumberEntity: q0,
    CountGroup: K0,
    GCounter: G0,
    ObjectEntity: X0,
    PNCounter: tC,
    TextEntity: W0,
    TextRing: eC
};

function nc(...t) {
    console.log(...t)
}

function nC(t) {
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
            o = function(N, K) {
                if (K = K.split(":")[0], N = +N, !N) return !1;
                switch (K) {
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
            c = Object.prototype.hasOwnProperty,
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
            for (var N = /([^=?#&]+)=?([^&]*)/g, K = {}, M; M = N.exec(F);) {
                var X = _(M[1]),
                    pe = _(M[2]);
                X === null || pe === null || X in K || (K[X] = pe)
            }
            return K
        }

        function L(F, N) {
            N = N || "";
            var K = [],
                M, X;
            typeof N != "string" && (N = "?");
            for (X in F)
                if (c.call(F, X)) {
                    if (M = F[X], !M && (M === null || M === m || isNaN(M)) && (M = ""), X = k(X), M = k(M), X === null || M === null) continue;
                    K.push(X + "=" + M)
                } return K.length ? N + K.join("&") : ""
        }
        var $ = L,
            H = I,
            te = {
                stringify: $,
                parse: H
            },
            W = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            D = new RegExp("^" + v + "+");

        function Y(F) {
            return (F || "").toString().replace(D, "")
        }
        var le = [
                ["#", "hash"],
                ["?", "query"],
                function(N, K) {
                    return f(K.protocol) ? N.replace(/\\/g, "/") : N
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            oe = {
                hash: 1,
                query: 1
            };

        function ye(F) {
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var K = N.location || {};
            F = F || K;
            var M = {},
                X = typeof F,
                pe;
            if (F.protocol === "blob:") M = new Pe(unescape(F.pathname), {});
            else if (X === "string") {
                M = new Pe(F, {});
                for (pe in oe) delete M[pe]
            } else if (X === "object") {
                for (pe in F) pe in oe || (M[pe] = F[pe]);
                M.slashes === void 0 && (M.slashes = W.test(F.href))
            }
            return M
        }

        function f(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function Se(F, N) {
            F = Y(F), N = N || {};
            var K = re.exec(F),
                M = K[1] ? K[1].toLowerCase() : "",
                X = !!K[2],
                pe = !!K[3],
                ge = 0,
                Ne;
            return X ? pe ? (Ne = K[2] + K[3] + K[4], ge = K[2].length + K[3].length) : (Ne = K[2] + K[4], ge = K[2].length) : pe ? (Ne = K[3] + K[4], ge = K[3].length) : Ne = K[4], M === "file:" ? ge >= 2 && (Ne = Ne.slice(2)) : f(M) ? Ne = K[4] : M ? X && (Ne = Ne.slice(2)) : ge >= 2 && f(N.protocol) && (Ne = K[4]), {
                protocol: M,
                slashes: X || f(M),
                slashesCount: ge,
                rest: Ne
            }
        }

        function Oe(F, N) {
            if (F === "") return N;
            for (var K = (N || "/").split("/").slice(0, -1).concat(F.split("/")), M = K.length, X = K[M - 1], pe = !1, ge = 0; M--;) K[M] === "." ? K.splice(M, 1) : K[M] === ".." ? (K.splice(M, 1), ge++) : ge && (M === 0 && (pe = !0), K.splice(M, 1), ge--);
            return pe && K.unshift(""), (X === "." || X === "..") && K.push(""), K.join("/")
        }

        function Pe(F, N, K) {
            if (F = Y(F), !(this instanceof Pe)) return new Pe(F, N, K);
            var M, X, pe, ge, Ne, Ve, pt = le.slice(),
                Ft = typeof N,
                Xe = this,
                In = 0;
            for (Ft !== "object" && Ft !== "string" && (K = N, N = null), K && typeof K != "function" && (K = te.parse), N = ye(N), X = Se(F || "", N), M = !X.protocol && !X.slashes, Xe.slashes = X.slashes || M && N.slashes, Xe.protocol = X.protocol || N.protocol || "", F = X.rest, (Xe.protocol === "file:" || !X.slashes && (X.protocol || X.slashesCount < 2 || !f(Xe.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (ge = pt[In], typeof ge == "function") {
                    F = ge(F, Xe);
                    continue
                }
                pe = ge[0], Ve = ge[1], pe !== pe ? Xe[Ve] = F : typeof pe == "string" ? ~(Ne = F.indexOf(pe)) && (typeof ge[2] == "number" ? (Xe[Ve] = F.slice(0, Ne), F = F.slice(Ne + ge[2])) : (Xe[Ve] = F.slice(Ne), F = F.slice(0, Ne))) : (Ne = pe.exec(F)) && (Xe[Ve] = Ne[1], F = F.slice(0, Ne.index)), Xe[Ve] = Xe[Ve] || M && ge[3] && N[Ve] || "", ge[4] && (Xe[Ve] = Xe[Ve].toLowerCase())
            }
            K && (Xe.query = K(Xe.query)), M && N.slashes && Xe.pathname.charAt(0) !== "/" && (Xe.pathname !== "" || N.pathname !== "") && (Xe.pathname = Oe(Xe.pathname, N.pathname)), Xe.pathname.charAt(0) !== "/" && f(Xe.protocol) && (Xe.pathname = "/" + Xe.pathname), o(Xe.port, Xe.protocol) || (Xe.host = Xe.hostname, Xe.port = ""), Xe.username = Xe.password = "", Xe.auth && (ge = Xe.auth.split(":"), Xe.username = ge[0] || "", Xe.password = ge[1] || ""), Xe.origin = Xe.protocol !== "file:" && f(Xe.protocol) && Xe.host ? Xe.protocol + "//" + Xe.host : "null", Xe.href = Xe.toString()
        }

        function lt(F, N, K) {
            var M = this;
            switch (F) {
                case "query":
                    typeof N == "string" && N.length && (N = (K || te.parse)(N)), M[F] = N;
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
                    M.protocol = N.toLowerCase(), M.slashes = !K;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var X = F === "pathname" ? "/" : "#";
                        M[F] = N.charAt(0) !== X ? X + N : N
                    } else M[F] = N;
                    break;
                default:
                    M[F] = N
            }
            for (var pe = 0; pe < le.length; pe++) {
                var ge = le[pe];
                ge[4] && (M[ge[1]] = M[ge[1]].toLowerCase())
            }
            return M.origin = M.protocol !== "file:" && f(M.protocol) && M.host ? M.protocol + "//" + M.host : "null", M.href = M.toString(), M
        }

        function $e(F) {
            (!F || typeof F != "function") && (F = te.stringify);
            var N, K = this,
                M = K.protocol;
            M && M.charAt(M.length - 1) !== ":" && (M += ":");
            var X = M + (K.slashes || f(K.protocol) ? "//" : "");
            return K.username && (X += K.username, K.password && (X += ":" + K.password), X += "@"), X += K.host + K.pathname, N = typeof K.query == "object" ? F(K.query) : K.query, N && (X += N.charAt(0) !== "?" ? "?" + N : N), K.hash && (X += K.hash), X
        }
        Pe.prototype = {
            set: lt,
            toString: $e
        }, Pe.extractProtocol = Se, Pe.location = ye, Pe.trimLeft = Y, Pe.qs = te;
        var Q = Pe;

        function Fe(F, N) {
            setTimeout(function(K) {
                return F.call(K)
            }, 4, N)
        }

        function q(F, N) {
            typeof process < "u" && console[F].call(null, N)
        }

        function ae(F, N) {
            F === void 0 && (F = []);
            var K = [];
            return F.forEach(function(M) {
                N(M) || K.push(M)
            }), K
        }

        function Ae(F, N) {
            F === void 0 && (F = []);
            var K = [];
            return F.forEach(function(M) {
                N(M) && K.push(M)
            }), K
        }
        var be = function() {
            this.listeners = {}
        };
        be.prototype.addEventListener = function(N, K) {
            typeof K == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Ae(this.listeners[N], function(M) {
                return M === K
            }).length === 0 && this.listeners[N].push(K))
        }, be.prototype.removeEventListener = function(N, K) {
            var M = this.listeners[N];
            this.listeners[N] = ae(M, function(X) {
                return X === K
            })
        }, be.prototype.dispatchEvent = function(N) {
            for (var K = this, M = [], X = arguments.length - 1; X-- > 0;) M[X] = arguments[X + 1];
            var pe = N.type,
                ge = this.listeners[pe];
            return Array.isArray(ge) ? (ge.forEach(function(Ne) {
                M.length > 0 ? Ne.apply(K, M) : Ne.call(K, N)
            }), !0) : !1
        };

        function we(F) {
            var N = F.indexOf("?");
            return N >= 0 ? F.slice(0, N) : F
        }
        var he = function() {
            this.urlMap = {}
        };
        he.prototype.attachWebSocket = function(N, K) {
            var M = we(K),
                X = this.urlMap[M];
            if (X && X.server && X.websockets.indexOf(N) === -1) return X.websockets.push(N), X.server
        }, he.prototype.addMembershipToRoom = function(N, K) {
            var M = this.urlMap[we(N.url)];
            M && M.server && M.websockets.indexOf(N) !== -1 && (M.roomMemberships[K] || (M.roomMemberships[K] = []), M.roomMemberships[K].push(N))
        }, he.prototype.attachServer = function(N, K) {
            var M = we(K),
                X = this.urlMap[M];
            if (!X) return this.urlMap[M] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, he.prototype.serverLookup = function(N) {
            var K = we(N),
                M = this.urlMap[K];
            if (M) return M.server
        }, he.prototype.websocketsLookup = function(N, K, M) {
            var X = we(N),
                pe, ge = this.urlMap[X];
            if (pe = ge ? ge.websockets : [], K) {
                var Ne = ge.roomMemberships[K];
                pe = Ne || []
            }
            return M ? pe.filter(function(Ve) {
                return Ve !== M
            }) : pe
        }, he.prototype.removeServer = function(N) {
            delete this.urlMap[we(N)]
        }, he.prototype.removeWebSocket = function(N, K) {
            var M = we(K),
                X = this.urlMap[M];
            X && (X.websockets = ae(X.websockets, function(pe) {
                return pe === N
            }))
        }, he.prototype.removeMembershipFromRoom = function(N, K) {
            var M = this.urlMap[we(N.url)],
                X = M.roomMemberships[K];
            M && X !== null && (M.roomMemberships[K] = ae(X, function(pe) {
                return pe === N
            }))
        };
        var _e = new he,
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
            Be = {
                CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                CLOSE_ERROR: "Failed to execute 'close' on 'WebSocket':",
                EVENT: {
                    CONSTRUCT: "Failed to construct 'Event':",
                    MESSAGE: "Failed to construct 'MessageEvent':",
                    CLOSE: "Failed to construct 'CloseEvent':"
                }
            },
            Ke = function() {};
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, K, M) {
            N === void 0 && (N = "undefined"), K === void 0 && (K = !1), M === void 0 && (M = !1), this.type = "" + N, this.bubbles = Boolean(K), this.cancelable = Boolean(M)
        };
        var dt = function(F) {
                function N(K, M) {
                    if (M === void 0 && (M = {}), F.call(this), !K) throw new TypeError(Be.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError(Be.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var X = M.bubbles,
                        pe = M.cancelable;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = X ? Boolean(X) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Bt = function(F) {
                function N(K, M) {
                    if (M === void 0 && (M = {}), F.call(this), !K) throw new TypeError(Be.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError(Be.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var X = M.bubbles,
                        pe = M.cancelable,
                        ge = M.data,
                        Ne = M.origin,
                        Ve = M.lastEventId,
                        pt = M.ports;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.canncelBubble = !1, this.bubbles = X ? Boolean(X) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof ge > "u" ? null : ge, this.lastEventId = "" + (Ve || "")
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            qt = function(F) {
                function N(K, M) {
                    if (M === void 0 && (M = {}), F.call(this), !K) throw new TypeError(Be.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof M != "object") throw new TypeError(Be.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var X = M.bubbles,
                        pe = M.cancelable,
                        ge = M.code,
                        Ne = M.reason,
                        Ve = M.wasClean;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = X ? Boolean(X) : !1, this.code = typeof ge == "number" ? parseInt(ge, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke);

        function E(F) {
            var N = F.type,
                K = F.target,
                M = new dt(N);
            return K && (M.target = K, M.srcElement = K, M.currentTarget = K), M
        }

        function l(F) {
            var N = F.type,
                K = F.origin,
                M = F.data,
                X = F.target,
                pe = new Bt(N, {
                    data: M,
                    origin: K
                });
            return X && (pe.target = X, pe.srcElement = X, pe.currentTarget = X), pe
        }

        function g(F) {
            var N = F.code,
                K = F.reason,
                M = F.type,
                X = F.target,
                pe = F.wasClean;
            pe || (pe = N === Te.CLOSE_NORMAL || N === Te.CLOSE_NO_STATUS);
            var ge = new qt(M, {
                code: N,
                reason: K,
                wasClean: pe
            });
            return X && (ge.target = X, ge.srcElement = X, ge.currentTarget = X), ge
        }

        function S(F, N, K) {
            F.readyState = De.CLOSING;
            var M = _e.serverLookup(F.url),
                X = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: K
                }),
                pe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: K
                });
            Fe(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(X), F.dispatchEvent(pe), M && M.dispatchEvent(X, M)
            }, F)
        }

        function O(F, N, K) {
            F.readyState = De.CLOSING;
            var M = _e.serverLookup(F.url),
                X = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: K,
                    wasClean: !1
                }),
                pe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: K,
                    wasClean: !1
                }),
                ge = E({
                    type: "error",
                    target: F.target
                });
            Fe(function() {
                _e.removeWebSocket(F, F.url), F.readyState = De.CLOSED, F.dispatchEvent(ge), F.dispatchEvent(X), F.dispatchEvent(pe), M && M.dispatchEvent(X, M)
            }, F)
        }

        function P(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var V = new WeakMap;

        function ie(F) {
            if (V.has(F)) return V.get(F);
            var N = new Proxy(F, {
                get: function(M, X) {
                    return X === "close" ? function(ge) {
                        ge === void 0 && (ge = {});
                        var Ne = ge.code || Te.CLOSE_NORMAL,
                            Ve = ge.reason || "";
                        S(N, Ne, Ve)
                    } : X === "send" ? function(ge) {
                        ge = P(ge), F.dispatchEvent(l({
                            type: "message",
                            data: ge,
                            origin: this.url,
                            target: F
                        }))
                    } : X === "on" ? function(ge, Ne) {
                        F.addEventListener("server::" + ge, Ne)
                    } : X === "target" ? F : M[X]
                }
            });
            return V.set(F, N), N
        }

        function ke(F) {
            var N = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (N ? N.length : 0)
        }

        function de(F) {
            var N = new Q(F),
                K = N.pathname,
                M = N.protocol,
                X = N.hash;
            if (!F) throw new TypeError(Be.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (K || (N.pathname = "/"), M === "") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (M !== "ws:" && M !== "wss:") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + M + "' is not allowed.");
            if (X !== "") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + X + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function Le(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var N = F.map(function(M) {
                    return {
                        count: 1,
                        protocol: M
                    }
                }).reduce(function(M, X) {
                    return M[X.protocol] = (M[X.protocol] || 0) + X.count, M
                }, {}),
                K = Object.keys(N).filter(function(M) {
                    return N[M] > 1
                });
            if (K.length > 0) throw new SyntaxError(Be.CONSTRUCTOR_ERROR + " The subprotocol '" + K[0] + "' is duplicated.");
            return F
        }
        var De = function(F) {
            function N(M, X) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = de(M), X = Le(X), this.protocol = X[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var pe = ie(this),
                    ge = _e.attachWebSocket(pe, this.url);
                Fe(function() {
                    if (ge)
                        if (ge.options.verifyClient && typeof ge.options.verifyClient == "function" && !ge.options.verifyClient()) this.readyState = N.CLOSED, q("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), _e.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (ge.options.selectProtocol && typeof ge.options.selectProtocol == "function") {
                                var Ve = ge.options.selectProtocol(X),
                                    pt = Ve !== "",
                                    Ft = X.indexOf(Ve) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = N.CLOSED, q("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), _e.removeWebSocket(pe, this.url), this.dispatchEvent(E({
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
                            this.readyState = N.OPEN, this.dispatchEvent(E({
                                type: "open",
                                target: this
                            })), ge.dispatchEvent(E({
                                type: "connection"
                            }), pe)
                        }
                    else this.readyState = N.CLOSED, this.dispatchEvent(E({
                        type: "error",
                        target: this
                    })), this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), q("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var K = {
                onopen: {},
                onmessage: {},
                onclose: {},
                onerror: {}
            };
            return K.onopen.get = function() {
                return this._onopen
            }, K.onmessage.get = function() {
                return this._onmessage
            }, K.onclose.get = function() {
                return this._onclose
            }, K.onerror.get = function() {
                return this._onerror
            }, K.onopen.set = function(M) {
                this.removeEventListener("open", this._onopen), this._onopen = M, this.addEventListener("open", M)
            }, K.onmessage.set = function(M) {
                this.removeEventListener("message", this._onmessage), this._onmessage = M, this.addEventListener("message", M)
            }, K.onclose.set = function(M) {
                this.removeEventListener("close", this._onclose), this._onclose = M, this.addEventListener("close", M)
            }, K.onerror.set = function(M) {
                this.removeEventListener("error", this._onerror), this._onerror = M, this.addEventListener("error", M)
            }, N.prototype.send = function(X) {
                var pe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var ge = l({
                        type: "server::message",
                        origin: this.url,
                        data: P(X)
                    }),
                    Ne = _e.serverLookup(this.url);
                Ne && Fe(function() {
                    pe.dispatchEvent(ge, X)
                }, Ne)
            }, N.prototype.close = function(X, pe) {
                if (X !== void 0 && (typeof X != "number" || X !== 1e3 && (X < 3e3 || X > 4999))) throw new TypeError(Be.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + X + " is neither.");
                if (pe !== void 0) {
                    var ge = ke(pe);
                    if (ge > 123) throw new SyntaxError(Be.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === N.CLOSING || this.readyState === N.CLOSED)) {
                    var Ne = ie(this);
                    this.readyState === N.CONNECTING ? O(Ne, X || Te.CLOSE_ABNORMAL, pe) : S(Ne, X || Te.CLOSE_NO_STATUS, pe)
                }
            }, Object.defineProperties(N.prototype, K), N
        }(be);
        De.CONNECTING = 0, De.prototype.CONNECTING = De.CONNECTING, De.OPEN = 1, De.prototype.OPEN = De.OPEN, De.CLOSING = 2, De.prototype.CLOSING = De.CLOSING, De.CLOSED = 3, De.prototype.CLOSED = De.CLOSED;
        var it = function(F) {
            return F.reduce(function(N, K) {
                return N.indexOf(K) > -1 ? N : N.concat(K)
            }, [])
        };

        function Ct() {
            return typeof window < "u" ? window : typeof process == "object" && typeof nC == "function" && typeof vt == "object" ? vt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(F) {
                function N(K, M) {
                    M === void 0 && (M = rn), F.call(this);
                    var X = new Q(K);
                    X.pathname || (X.pathname = "/"), this.url = X.toString(), this.originalWebSocket = null;
                    var pe = _e.attachServer(this, this.url);
                    if (!pe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, M), this.options.mock && this.mockWebsocket()
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket = M.WebSocket, M.WebSocket = De
                }, N.prototype.restoreWebsocket = function() {
                    var M = Ct();
                    this.originalWebSocket !== null && (M.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(M) {
                    M === void 0 && (M = function() {}), this.options.mock && this.restoreWebsocket(), _e.removeServer(this.url), typeof M == "function" && M()
                }, N.prototype.on = function(M, X) {
                    this.addEventListener(M, X)
                }, N.prototype.close = function(M) {
                    M === void 0 && (M = {});
                    var X = M.code,
                        pe = M.reason,
                        ge = M.wasClean,
                        Ne = _e.websocketsLookup(this.url);
                    _e.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = De.CLOSED, Ve.dispatchEvent(g({
                            type: "close",
                            target: Ve.target,
                            code: X || Te.CLOSE_NORMAL,
                            reason: pe || "",
                            wasClean: ge
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(M, X, pe) {
                    var ge = this;
                    pe === void 0 && (pe = {});
                    var Ne = pe.websockets;
                    Ne || (Ne = _e.websocketsLookup(this.url)), typeof pe != "object" || arguments.length > 3 ? (X = Array.prototype.slice.call(arguments, 1, arguments.length), X = X.map(function(Ve) {
                        return P(Ve)
                    })) : X = P(X), Ne.forEach(function(Ve) {
                        Array.isArray(X) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: M,
                            data: X,
                            origin: ge.url,
                            target: Ve.target
                        })].concat(X)) : Ve.dispatchEvent(l({
                            type: M,
                            data: X,
                            origin: ge.url,
                            target: Ve.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return _e.websocketsLookup(this.url)
                }, N.prototype.to = function(M, X, pe) {
                    var ge = this;
                    pe === void 0 && (pe = []);
                    var Ne = this,
                        Ve = it(pe.concat(_e.websocketsLookup(this.url, M, X)));
                    return {
                        to: function(pt, Ft) {
                            return ge.to.call(ge, pt, Ft, Ve)
                        },
                        emit: function(Ft, Xe) {
                            Ne.emit(Ft, Xe, {
                                websockets: Ve
                            })
                        }
                    }
                }, N.prototype.in = function() {
                    for (var M = [], X = arguments.length; X--;) M[X] = arguments[X];
                    return this.to.apply(null, M)
                }, N.prototype.simulate = function(M) {
                    var X = _e.websocketsLookup(this.url);
                    M === "error" && X.forEach(function(pe) {
                        pe.readyState = De.CLOSED, pe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, N
            }(be);
        ct.of = function(N) {
            return new ct(N)
        };
        var yt = function(F) {
            function N(M, X) {
                var pe = this;
                M === void 0 && (M = "socket.io"), X === void 0 && (X = ""), F.call(this), this.binaryType = "blob";
                var ge = new Q(M);
                ge.pathname || (ge.pathname = "/"), this.url = ge.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof X == "string" || typeof X == "object" && X !== null ? this.protocol = X : Array.isArray(X) && X.length > 0 && (this.protocol = X[0]);
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
                        code: Te.CLOSE_NORMAL
                    })), q("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Ve) {
                    pe.dispatchEvent(g({
                        type: "disconnect",
                        target: Ve.target,
                        code: Ve.code
                    }))
                })
            }
            F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N;
            var K = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var X = _e.serverLookup(this.url);
                    return _e.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), X && X.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    }), X), this
                }
            }, N.prototype.disconnect = function() {
                return this.close()
            }, N.prototype.emit = function(X) {
                for (var pe = [], ge = arguments.length - 1; ge-- > 0;) pe[ge] = arguments[ge + 1];
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ne = l({
                        type: X,
                        origin: this.url,
                        data: pe
                    }),
                    Ve = _e.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(pe)), this
            }, N.prototype.send = function(X) {
                return this.emit("message", X), this
            }, K.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var M = this,
                    X = _e.serverLookup(this.url);
                if (!X) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(ge, Ne) {
                        return X.emit(ge, Ne, {
                            websockets: _e.websocketsLookup(M.url, null, M)
                        }), M
                    },
                    to: function(ge) {
                        return X.to(ge, M)
                    },
                    in: function(ge) {
                        return X.in(ge, M)
                    }
                }
            }, N.prototype.on = function(X, pe) {
                return this.addEventListener(X, pe), this
            }, N.prototype.off = function(X, pe) {
                this.removeEventListener(X, pe)
            }, N.prototype.hasListeners = function(X) {
                var pe = this.listeners[X];
                return Array.isArray(pe) ? !!pe.length : !1
            }, N.prototype.join = function(X) {
                _e.addMembershipToRoom(this, X)
            }, N.prototype.leave = function(X) {
                _e.removeMembershipFromRoom(this, X)
            }, N.prototype.to = function(X) {
                return this.broadcast.to(X)
            }, N.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, N.prototype.dispatchEvent = function(X) {
                for (var pe = this, ge = [], Ne = arguments.length - 1; Ne-- > 0;) ge[Ne] = arguments[Ne + 1];
                var Ve = X.type,
                    pt = this.listeners[Ve];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    ge.length > 0 ? Ft.apply(pe, ge) : Ft.call(pe, X.data ? X.data : X)
                })
            }, Object.defineProperties(N.prototype, K), N
        }(be);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(N, K) {
            return new yt(N, K)
        };
        bt.connect = function(N, K) {
            return bt(N, K)
        };
        var Jt = ct,
            Je = De,
            Pt = bt;
        n.Server = Jt, n.WebSocket = Je, n.SocketIO = Pt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(ic, ic.exports);
var iC = {
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
                $ = k.y,
                H = I.x - L,
                te = I.y - $;
            if (H !== 0 || te !== 0) {
                var W = ((_.x - L) * H + (_.y - $) * te) / (H * H + te * te);
                W > 1 ? (L = I.x, $ = I.y) : W > 0 && (L += H * W, $ += te * W)
            }
            return H = _.x - L, te = _.y - $, H * H + te * te
        }

        function i(_, k) {
            for (var I = _[0], L = [I], $, H = 1, te = _.length; H < te; H++) $ = _[H], e($, I) > k && (L.push($), I = $);
            return I !== $ && L.push($), L
        }

        function o(_, k, I, L, $) {
            for (var H = L, te, W = k + 1; W < I; W++) {
                var re = n(_[W], _[k], _[I]);
                re > H && (te = W, H = re)
            }
            H > L && (te - k > 1 && o(_, k, te, L, $), $.push(_[te]), I - te > 1 && o(_, te, I, L, $))
        }

        function c(_, k) {
            var I = _.length - 1,
                L = [_[0]];
            return o(_, 0, I, k, L), L.push(_[I]), L
        }

        function m(_, k, I) {
            if (_.length <= 2) return _;
            var L = k !== void 0 ? k * k : 1;
            return _ = I ? _ : i(_, L), _ = c(_, L), _
        }
        t.exports = m, t.exports.default = m
    })()
})(iC);
const rC = Et.View.extend({
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
            j(window).trigger("resize")
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new rC({
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
                BASE_URL: "https://bundles.jackbox.tv/main/standalone-drawful2/",
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
nt(ni, "view", null), nt(ni, "isInitialized", !1), nt(ni, "bannerConfig", null);
var sC = {};
(function(t) {
    (function(e) {
        e(Ni.exports, ot, t)
    })(function(e, n, i) {
        n.Stickit = i, i._handlers = [], i.addHandler = function(v) {
            v = e.map(e.flatten([v]), function(D) {
                return e.defaults({}, D, {
                    updateModel: !0,
                    updateView: !0,
                    updateMethod: "text"
                })
            }), this._handlers = this._handlers.concat(v)
        }, i.ViewMixin = {
            _modelBindings: null,
            unstickit: function(v, D) {
                if (e.isObject(D)) {
                    e.each(D, function(oe, ye) {
                        this.unstickit(v, ye)
                    }, this);
                    return
                }
                var Y = [],
                    le = [];
                this._modelBindings = e.reject(this._modelBindings, function(oe) {
                    if (!(v && oe.model !== v) && !(D && oe.config.selector != D)) return oe.model.off(oe.event, oe.fn), le.push(oe.config._destroy), Y.push(oe.model), !0
                }), e.invoke(e.uniq(Y), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(le), function(oe) {
                    oe.call(this)
                }, this), this.$el.off(".stickit" + (v ? "." + v.cid : ""), D)
            },
            stickit: function(v, D) {
                var Y = v || this.model,
                    le = D || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(Y, le);
                var oe = this.remove;
                return oe.stickitWrapped || (this.remove = function() {
                    var ye = this;
                    return this.unstickit(), oe && (ye = oe.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(v, D, Y) {
                var le = v || this.model,
                    oe = ".stickit." + le.cid;
                if (Y = Y || {}, e.isObject(D)) {
                    var ye = D;
                    e.each(ye, function(Q, Fe) {
                        this.addBinding(le, Fe, Q)
                    }, this);
                    return
                }
                var f = D === ":el" ? this.$el : this.$(D);
                if (this.unstickit(le, D), !!f.length) {
                    e.isString(Y) && (Y = {
                        observe: Y
                    }), e.isFunction(Y.observe) && (Y.observe = Y.observe.call(this));
                    var Se = $(f, Y),
                        Oe = Se.observe;
                    Se.selector = D, Se.view = this;
                    var Pe = Se.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Se
                        }, Se.setOptions);
                    if (Se._destroy = function() {
                            m.call(this, Se.destroy, f, le, Se)
                        }, H(f, Se, le, Oe), W(f, Se, le, Oe), te(f, Se, le), Oe) {
                        e.each(Se.events, function(Q) {
                            var Fe = Q + oe,
                                q = function(Ae) {
                                    var be = m.call(this, Se.getVal, f, Ae, Se, o.call(arguments, 1)),
                                        we = _(Se.updateModel, be, Ae, Se);
                                    we && I(le, Oe, be, lt, Se)
                                },
                                ae = D === ":el" ? "" : D;
                            this.$el.on(Fe, ae, e.bind(q, this))
                        }, this), e.each(e.flatten([Oe]), function(Q) {
                            k(le, "change:" + Q, Se, function(Fe, q, ae) {
                                var Ae = ae && ae.stickitChange && ae.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var be = L(le, Oe, Se);
                                    re(f, Se, be, le)
                                }
                            })
                        });
                        var $e = L(le, Oe, Se);
                        re(f, Se, $e, le, !0)
                    }
                    m.call(this, Se.initialize, f, le, Se)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var o = [].slice,
            c = function(v, D) {
                var Y = (D || "").split("."),
                    le = e.reduce(Y, function(oe, ye) {
                        return oe[ye]
                    }, v);
                return le == null ? v : le
            },
            m = function(v) {
                if (v = e.isString(v) ? c(this, v) : v, v) return v.apply(this, o.call(arguments, 1))
            },
            _ = function(v, D, Y) {
                if (e.isBoolean(v)) return v;
                if (e.isFunction(v) || e.isString(v)) {
                    var le = e.last(arguments).view;
                    return m.apply(le, arguments)
                }
                return !1
            },
            k = function(v, D, Y, le) {
                var oe = Y.view;
                v.on(D, le, oe), oe._modelBindings.push({
                    model: v,
                    event: D,
                    fn: le,
                    config: Y
                })
            },
            I = function(v, D, Y, le, oe) {
                var ye = {},
                    f = oe.view;
                oe.onSet && (Y = m.call(f, oe.onSet, Y, oe)), oe.set ? m.call(f, oe.set, D, Y, le, oe) : (ye[D] = Y, e.isArray(D) && e.isArray(Y) && (ye = e.reduce(D, function(Se, Oe, Pe) {
                    return Se[Oe] = e.has(Y, Pe) ? Y[Pe] : null, Se
                }, {})), v.set(ye, le))
            },
            L = function(v, D, Y) {
                var le = Y.view,
                    oe = function(Se) {
                        return v[Y.escape ? "escape" : "get"](Se)
                    },
                    ye = function(Se) {
                        return Se == null ? "" : Se
                    },
                    f = e.isArray(D) ? e.map(D, oe) : oe(D);
                return Y.onGet && (f = m.call(le, Y.onGet, f, Y)), e.isArray(f) ? e.map(f, ye) : ye(f)
            },
            $ = i.getConfiguration = function(v, D) {
                var Y = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(oe, ye, f, Se) {
                        oe[Se.updateMethod] && oe[Se.updateMethod](ye)
                    },
                    getVal: function(oe, ye, f) {
                        return oe[f.updateMethod]()
                    }
                }];
                Y = Y.concat(e.filter(i._handlers, function(oe) {
                    return v.is(oe.selector)
                })), Y.push(D);
                var le = e.extend.apply(e, Y);
                return e.has(le, "updateView") || (le.updateView = !le.visible), le
            },
            H = function(v, D, Y, le) {
                var oe = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = D.view;
                e.each(D.attributes || [], function(f) {
                    f = e.clone(f), f.view = ye;
                    var Se = "",
                        Oe = f.observe || (f.observe = le),
                        Pe = function() {
                            var lt = e.contains(oe, f.name) ? "prop" : "attr",
                                $e = L(Y, Oe, f);
                            f.name === "class" ? (v.removeClass(Se).addClass($e), Se = $e) : v[lt](f.name, $e)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        k(Y, "change:" + lt, D, Pe)
                    }), Pe()
                })
            },
            te = function(v, D, Y, le) {
                e.each(D.classes || [], function(oe, ye) {
                    e.isString(oe) && (oe = {
                        observe: oe
                    }), oe.view = D.view;
                    var f = oe.observe,
                        Se = function() {
                            var Oe = L(Y, f, oe);
                            v.toggleClass(ye, !!Oe)
                        };
                    e.each(e.flatten([f]), function(Oe) {
                        k(Y, "change:" + Oe, D, Se)
                    }), Se()
                })
            },
            W = function(v, D, Y, le) {
                if (D.visible != null) {
                    var oe = D.view,
                        ye = function() {
                            var f = D.visible,
                                Se = D.visibleFn,
                                Oe = L(Y, le, D),
                                Pe = !!Oe;
                            (e.isFunction(f) || e.isString(f)) && (Pe = !!m.call(oe, f, Oe, D)), Se ? m.call(oe, Se, v, Pe, D) : v.toggle(Pe)
                        };
                    e.each(e.flatten([le]), function(f) {
                        k(Y, "change:" + f, D, ye)
                    }), ye()
                }
            },
            re = function(v, D, Y, le, oe) {
                var ye = D.view;
                !_(D.updateView, Y, D) || (m.call(ye, D.update, v, Y, le, D), oe || m.call(ye, D.afterUpdate, v, Y, D))
            };
        return i.addHandler([{
            selector: "[contenteditable]",
            updateMethod: "html",
            events: ["input", "change"]
        }, {
            selector: "input",
            events: ["propertychange", "input", "change"],
            update: function(v, D) {
                v.val(D)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: "textarea",
            events: ["propertychange", "input", "change"],
            update: function(v, D) {
                v.val(D)
            },
            getVal: function(v) {
                return v.val()
            }
        }, {
            selector: 'input[type="radio"]',
            events: ["change"],
            update: function(v, D) {
                v.filter('[value="' + D + '"]').prop("checked", !0)
            },
            getVal: function(v) {
                return v.filter(":checked").val()
            }
        }, {
            selector: 'input[type="checkbox"]',
            events: ["change"],
            update: function(v, D, Y, le) {
                if (v.length > 1) D || (D = []), v.each(function(ye, f) {
                    var Se = n.$(f),
                        Oe = e.contains(D, Se.val());
                    Se.prop("checked", Oe)
                });
                else {
                    var oe = e.isBoolean(D) ? D : D === v.val();
                    v.prop("checked", oe)
                }
            },
            getVal: function(v) {
                var D;
                if (v.length > 1) D = e.reduce(v, function(le, oe) {
                    var ye = n.$(oe);
                    return ye.prop("checked") && le.push(ye.val()), le
                }, []);
                else {
                    D = v.prop("checked");
                    var Y = v.val();
                    Y !== "on" && Y != null && (D = D ? v.val() : null)
                }
                return D
            }
        }, {
            selector: "select",
            events: ["change"],
            update: function(v, D, Y, le) {
                var oe, ye = le.selectOptions,
                    f = ye && ye.collection || void 0,
                    Se = v.prop("multiple");
                if (!ye) {
                    ye = {};
                    var Oe = function(he) {
                        return he.map(function(_e, Te) {
                            var Be = n.$(Te).data("stickit-bind-val");
                            return {
                                value: Be !== void 0 ? Be : Te.value,
                                label: Te.text
                            }
                        }).get()
                    };
                    v.find("optgroup").length ? (f = {
                        opt_labels: []
                    }, v.find("> option").length && (f.opt_labels.push(void 0), e.each(v.find("> option"), function(he) {
                        f[void 0] = Oe(n.$(he))
                    })), e.each(v.find("optgroup"), function(he) {
                        var _e = n.$(he).attr("label");
                        f.opt_labels.push(_e), f[_e] = Oe(n.$(he).find("option"))
                    })) : f = Oe(v.find("option"))
                }
                ye.valuePath = ye.valuePath || "value", ye.labelPath = ye.labelPath || "label", ye.disabledPath = ye.disabledPath || "disabled";
                var Pe = function(he, _e, Te) {
                    e.each(he, function(Be) {
                        var Ke = n.$("<option/>"),
                            dt = Be,
                            Bt = function(S, O, P) {
                                Ke.text(S), dt = O, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), P === !0 && Ke.prop("disabled", "disabled")
                            },
                            qt, E, l;
                        Be === "__default__" ? (qt = Te.label, E = Te.value, l = Te.disabled) : (qt = c(Be, ye.labelPath), E = c(Be, ye.valuePath), l = c(Be, ye.disabledPath)), Bt(qt, E, l);
                        var g = function() {
                            return !Se && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        g() ? Ke.prop("selected", !0) : Se && e.isArray(Te) && e.each(Te, function(S) {
                            e.isObject(S) && (S = c(S, ye.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Ke.prop("selected", !0)
                        }), _e.append(Ke)
                    })
                };
                if (v.find("*").remove(), e.isString(f)) {
                    var lt = window;
                    f.indexOf("this.") === 0 && (lt = this), f = f.replace(/^[a-z]*\.(.+)$/, "$1"), oe = c(lt, f)
                } else e.isFunction(f) ? oe = m.call(this, f, v, le) : oe = f;
                if (oe instanceof n.Collection) {
                    var $e = oe,
                        Q = function() {
                            var he = L(Y, le.observe, le);
                            m.call(this, le.update, v, he, Y, le)
                        },
                        Fe = function() {
                            $e.off("add remove reset sort", Q)
                        },
                        q = function() {
                            Fe(), $e.off("stickit:selectRefresh"), Y.off("stickit:selectRefresh")
                        };
                    $e.trigger("stickit:selectRefresh"), $e.once("stickit:selectRefresh", Fe, this), $e.on("add remove reset sort", Q, this), Y.trigger("stickit:selectRefresh"), Y.once("stickit:selectRefresh", function() {
                        Y.off("stickit:unstuck", q)
                    }), Y.once("stickit:unstuck", q, this), oe = oe.toJSON()
                }
                if (ye.defaultOption) {
                    var ae = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, v, le) : ye.defaultOption;
                    Pe(["__default__"], v, ae)
                }
                if (e.isArray(oe)) Pe(oe, v, D);
                else if (oe.opt_labels) e.each(oe.opt_labels, function(he) {
                    var _e = n.$("<optgroup/>").attr("label", he);
                    Pe(oe[he], _e, D), v.append(_e)
                });
                else {
                    var Ae = [],
                        be;
                    for (var we in oe) be = {}, be[ye.valuePath] = we, be[ye.labelPath] = oe[we], Ae.push(be);
                    Ae = e.sortBy(Ae, ye.comparator || ye.labelPath), Pe(Ae, v, D)
                }
            },
            getVal: function(v) {
                var D = v.find("option:selected");
                return v.prop("multiple") ? e.map(D, function(Y) {
                    return n.$(Y).data("stickit-bind-val")
                }) : D.data("stickit-bind-val")
            }
        }]), i
    })
})(sC);
const oC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    qu = Et.View.extend({
        template: at.template(oC),
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
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || j("<div />").text(t).html()
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
            const e = j(t.target).data("action");
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
    Wu = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Wu = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function aC(t) {
    var e = rs.get(t);
    e && e.destroy()
}

function lC(t) {
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
                var o, c = null,
                    m = null,
                    _ = null,
                    k = function() {
                        i.clientWidth !== m && H()
                    },
                    I = function(te) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", H, !1), i.removeEventListener("keyup", H, !1), i.removeEventListener("autosize:destroy", I, !1), i.removeEventListener("autosize:update", H, !1), Object.keys(te).forEach(function(W) {
                            i.style[W] = te[W]
                        }), rs.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", I, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", H, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", H, !1), i.addEventListener("autosize:update", H, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", rs.set(i, {
                    destroy: I,
                    update: H
                }), (o = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : o.resize === "both" && (i.style.resize = "horizontal"), c = o.boxSizing === "content-box" ? -(parseFloat(o.paddingTop) + parseFloat(o.paddingBottom)) : parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), isNaN(c) && (c = 0), H()
            }

            function L(te) {
                var W = i.style.width;
                i.style.width = "0px", i.style.width = W, i.style.overflowY = te
            }

            function $() {
                if (i.scrollHeight !== 0) {
                    var te = function(re) {
                            for (var v = []; re && re.parentNode && re.parentNode instanceof Element;) re.parentNode.scrollTop && v.push({
                                node: re.parentNode,
                                scrollTop: re.parentNode.scrollTop
                            }), re = re.parentNode;
                            return v
                        }(i),
                        W = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + c + "px", m = i.clientWidth, te.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), W && (document.documentElement.scrollTop = W)
                }
            }

            function H() {
                $();
                var te = Math.round(parseFloat(i.style.height)),
                    W = window.getComputedStyle(i, null),
                    re = W.boxSizing === "content-box" ? Math.round(parseFloat(W.height)) : i.offsetHeight;
                if (re < te ? W.overflowY === "hidden" && (L("scroll"), $(), re = W.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : W.overflowY !== "hidden" && (L("hidden"), $(), re = W.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), _ !== re) {
                    _ = re;
                    var v = Wu("autosize:resized");
                    try {
                        i.dispatchEvent(v)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], aC), t
}, Kr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], lC), t
});
var rc = Kr;
const cC = `<form>\r
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
        template: at.template(cC),
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
                    return t ? typeof t == "object" ? t.html ? t.html : j("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || rc(j("textarea"))
        },
        onSubmitClick() {
            return j("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (j("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            j(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = j(this.$el).find("textarea");
            j(t).val(""), this.getOption("preventAutosize") || rc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = j(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return Rt.sanitize(this.getValue())
        },
        sanitize(t) {
            return Rt.sanitize(t)
        },
        sanitizeInput(t) {
            return Rt.sanitizeInput(t)
        }
    }),
    uC = '<div class="text"></div>',
    $i = Et.View.extend({
        tagName: "div",
        template: at.template(uC),
        model: new ot.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : j("<div />").text(t).html()
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
            return t.get("type") === "input" ? to : t.get("type") === "text" ? $i : qu
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
let Jr, Hs;

function Mi() {
    return Jr
}

function vo() {
    return Hs
}

function hC(t) {
    if (Jr = document.getElementById(t) || t || document.querySelector("canvas"), !Jr) throw Error("You must provide a canvas element for the game");
    return Hs = Jr.getContext("2d"), Hs.imageSmoothingEnabled = !1, Yu("init"), {
        canvas: Jr,
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
            width: c,
            height: m,
            margin: _ = 0
        } = e.frame;
        this.width = c, this.height = m, this.margin = _, this._f = 0, this._a = 0
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
        context: c = vo()
    } = {}) {
        let m = this.frames[this._f] / this.spriteSheet._f | 0,
            _ = this.frames[this._f] % this.spriteSheet._f | 0;
        c.drawImage(this.spriteSheet.image, _ * this.width + (_ * 2 + 1) * this.margin, m * this.height + (m * 2 + 1) * this.margin, this.width, this.height, e, n, i, o)
    }
}

function yo(t) {
    return new rl(t)
}
yo.prototype = rl.prototype;
yo.class = rl;
const dC = () => {};

function fC() {
    let t = Mi();
    vo().clearRect(0, 0, t.width, t.height)
}

function pC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let o = 0,
        c = 1e3 / t,
        m = 1 / t,
        _ = e ? fC : dC,
        k, I, L, $, H;
    const te = window.performance || Date;

    function W() {
        if (I = requestAnimationFrame(W), L = te.now(), $ = L - k, k = L, !($ > 1e3)) {
            for (Yu("tick"), o += $; o >= c;) H.update(m), o -= c;
            _(), H.render()
        }
    }
    return H = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = te.now(), this.isStopped = !1, requestAnimationFrame(W)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(I)
        },
        _frame: W,
        set _last(re) {
            k = re
        }
    }, H
}
class gC {
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
        i && this.objects.sort((o, c) => c.isAlive() - o.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
gC.prototype;

function oc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        o = e.y + e.height / 2,
        c = t.y < o && t.y + t.height >= e.y,
        m = t.y + t.height >= o && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (c && n.push(0), m && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (c && n.push(1), m && n.push(3)), n
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
            for (i = oc(e, this.bounds), o = 0; o < i.length; o++) this._s[i[o]].get(e).forEach(c => n.add(c));
            return Array.from(n)
        }
        return this._o.filter(c => c !== e)
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
            dy: c,
            ddx: m,
            ddy: _,
            width: k,
            height: I,
            image: L
        } = e;
        this.position = fr(n, i), this.velocity = fr(o, c), this.acceleration = fr(m, _), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = vo();
        for (let $ in e) this[$] = e[$];
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
            o = e.x,
            c = e.y;
        return e.anchor && (o -= e.width * e.anchor.x, c -= e.height * e.anchor.y), n < o + e.width && n + this.width > o && i < c + e.height && i + this.height > c
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

function mC(t) {
    if (+t === t) return t;
    let e = [],
        n = t.split(".."),
        i = +n[0],
        o = +n[1],
        c = i;
    if (i < o)
        for (; c <= o; c++) e.push(c);
    else
        for (; c >= o; c--) e.push(c);
    return e
}
class vC {
    constructor({
        image: e,
        frameWidth: n,
        frameHeight: i,
        frameMargin: o,
        animations: c
    } = {}) {
        if (!e) throw Error("You must provide an Image for the SpriteSheet");
        this.animations = {}, this.image = e, this.frame = {
            width: n,
            height: i,
            margin: o
        }, this._f = e.width / n | 0, this.createAnimations(c)
    }
    createAnimations(e) {
        let n, i;
        for (i in e) {
            let {
                frames: o,
                frameRate: c,
                loop: m
            } = e[i];
            if (n = [], o === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(o).map(_ => {
                n = n.concat(mC(_))
            }), this.animations[i] = yo({
                spriteSheet: this,
                frames: n,
                frameRate: c,
                loop: m
            })
        }
    }
}
vC.prototype;
var Xu = {
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
            i = u => {
                const d = [];
                for (let b = 0; b < u.length; b++) d.indexOf(u[b]) === -1 && d.push(u[b]);
                return d
            },
            o = u => u.charAt(0).toUpperCase() + u.slice(1),
            c = u => {
                console.warn("".concat(n, " ").concat(typeof u == "object" ? u.join(" ") : u))
            },
            m = u => {
                console.error("".concat(n, " ").concat(u))
            },
            _ = [],
            k = u => {
                _.includes(u) || (_.push(u), c(u))
            },
            I = (u, d) => {
                k('"'.concat(u, '" is deprecated and will be removed in the next major release. Please use "').concat(d, '" instead.'))
            },
            L = u => typeof u == "function" ? u() : u,
            $ = u => u && typeof u.toPromise == "function",
            H = u => $(u) ? u.toPromise() : Promise.resolve(u),
            te = u => u && Promise.resolve(u) === u,
            W = u => u[Math.floor(Math.random() * u.length)],
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
            D = {},
            Y = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"],
            le = u => Object.prototype.hasOwnProperty.call(re, u),
            oe = u => v.indexOf(u) !== -1,
            ye = u => D[u],
            f = u => {
                le(u) || c('Unknown parameter "'.concat(u, '"'))
            },
            Se = u => {
                Y.includes(u) && c('The parameter "'.concat(u, '" is incompatible with toasts'))
            },
            Oe = u => {
                ye(u) && I(u, ye(u))
            },
            Pe = u => {
                !u.backdrop && u.allowOutsideClick && c('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const d in u) f(d), u.toast && Se(d), Oe(d)
            },
            lt = "swal2-",
            $e = u => {
                const d = {};
                for (const b in u) d[u[b]] = lt + u[b];
                return d
            },
            Q = $e(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            Fe = $e(["success", "warning", "info", "question", "error"]),
            q = () => document.body.querySelector(".".concat(Q.container)),
            ae = u => {
                const d = q();
                return d ? d.querySelector(u) : null
            },
            Ae = u => ae(".".concat(u)),
            be = () => Ae(Q.popup),
            we = () => Ae(Q.icon),
            he = () => Ae(Q.title),
            _e = () => Ae(Q["html-container"]),
            Te = () => Ae(Q.image),
            Be = () => Ae(Q["progress-steps"]),
            Ke = () => Ae(Q["validation-message"]),
            dt = () => ae(".".concat(Q.actions, " .").concat(Q.confirm)),
            Bt = () => ae(".".concat(Q.actions, " .").concat(Q.deny)),
            qt = () => Ae(Q["input-label"]),
            E = () => ae(".".concat(Q.loader)),
            l = () => ae(".".concat(Q.actions, " .").concat(Q.cancel)),
            g = () => Ae(Q.actions),
            S = () => Ae(Q.footer),
            O = () => Ae(Q["timer-progress-bar"]),
            P = () => Ae(Q.close),
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
            ie = () => {
                const u = Array.from(be().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, B) => {
                        const me = parseInt(b.getAttribute("tabindex")),
                            Ue = parseInt(B.getAttribute("tabindex"));
                        return me > Ue ? 1 : me < Ue ? -1 : 0
                    }),
                    d = Array.from(be().querySelectorAll(V)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(u.concat(d)).filter(b => ge(b))
            },
            ke = () => Ct(document.body, Q.shown) && !Ct(document.body, Q["toast-shown"]) && !Ct(document.body, Q["no-backdrop"]),
            de = () => be() && Ct(be(), Q.toast),
            Le = () => be().hasAttribute("data-loading"),
            De = {
                previousBodyPadding: null
            },
            it = (u, d) => {
                if (u.textContent = "", d) {
                    const B = new DOMParser().parseFromString(d, "text/html");
                    Array.from(B.querySelector("head").childNodes).forEach(me => {
                        u.appendChild(me)
                    }), Array.from(B.querySelector("body").childNodes).forEach(me => {
                        u.appendChild(me)
                    })
                }
            },
            Ct = (u, d) => {
                if (!d) return !1;
                const b = d.split(/\s+/);
                for (let B = 0; B < b.length; B++)
                    if (!u.classList.contains(b[B])) return !1;
                return !0
            },
            rn = (u, d) => {
                Array.from(u.classList).forEach(b => {
                    !Object.values(Q).includes(b) && !Object.values(Fe).includes(b) && !Object.values(d.showClass).includes(b) && u.classList.remove(b)
                })
            },
            ct = (u, d, b) => {
                if (rn(u, d), d.customClass && d.customClass[b]) {
                    if (typeof d.customClass[b] != "string" && !d.customClass[b].forEach) return c("Invalid type of customClass.".concat(b, '! Expected string or iterable object, got "').concat(typeof d.customClass[b], '"'));
                    Je(u, d.customClass[b])
                }
            },
            yt = (u, d) => {
                if (!d) return null;
                switch (d) {
                    case "select":
                    case "textarea":
                    case "file":
                        return u.querySelector(".".concat(Q.popup, " > .").concat(Q[d]));
                    case "checkbox":
                        return u.querySelector(".".concat(Q.popup, " > .").concat(Q.checkbox, " input"));
                    case "radio":
                        return u.querySelector(".".concat(Q.popup, " > .").concat(Q.radio, " input:checked")) || u.querySelector(".".concat(Q.popup, " > .").concat(Q.radio, " input:first-child"));
                    case "range":
                        return u.querySelector(".".concat(Q.popup, " > .").concat(Q.range, " input"));
                    default:
                        return u.querySelector(".".concat(Q.popup, " > .").concat(Q.input))
                }
            },
            bt = u => {
                if (u.focus(), u.type !== "file") {
                    const d = u.value;
                    u.value = "", u.value = d
                }
            },
            Jt = (u, d, b) => {
                !u || !d || (typeof d == "string" && (d = d.split(/\s+/).filter(Boolean)), d.forEach(B => {
                    Array.isArray(u) ? u.forEach(me => {
                        b ? me.classList.add(B) : me.classList.remove(B)
                    }) : b ? u.classList.add(B) : u.classList.remove(B)
                }))
            },
            Je = (u, d) => {
                Jt(u, d, !0)
            },
            Pt = (u, d) => {
                Jt(u, d, !1)
            },
            F = (u, d) => {
                const b = Array.from(u.children);
                for (let B = 0; B < b.length; B++) {
                    const me = b[B];
                    if (me instanceof HTMLElement && Ct(me, d)) return me
                }
            },
            N = (u, d, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? u.style[d] = typeof b == "number" ? "".concat(b, "px") : b : u.style.removeProperty(d)
            },
            K = function(u) {
                let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                u.style.display = d
            },
            M = u => {
                u.style.display = "none"
            },
            X = (u, d, b, B) => {
                const me = u.querySelector(d);
                me && (me.style[b] = B)
            },
            pe = function(u, d) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                d ? K(u, b) : M(u)
            },
            ge = u => !!(u && (u.offsetWidth || u.offsetHeight || u.getClientRects().length)),
            Ne = () => !ge(dt()) && !ge(Bt()) && !ge(l()),
            Ve = u => u.scrollHeight > u.clientHeight,
            pt = u => {
                const d = window.getComputedStyle(u),
                    b = parseFloat(d.getPropertyValue("animation-duration") || "0"),
                    B = parseFloat(d.getPropertyValue("transition-duration") || "0");
                return b > 0 || B > 0
            },
            Ft = function(u) {
                let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const b = O();
                ge(b) && (d && (b.style.transition = "none", b.style.width = "100%"), setTimeout(() => {
                    b.style.transition = "width ".concat(u / 1e3, "s linear"), b.style.width = "0%"
                }, 10))
            },
            Xe = () => {
                const u = O(),
                    d = parseInt(window.getComputedStyle(u).width);
                u.style.removeProperty("transition"), u.style.width = "100%";
                const b = parseInt(window.getComputedStyle(u).width),
                    B = d / b * 100;
                u.style.removeProperty("transition"), u.style.width = "".concat(B, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            rt = {},
            Ln = () => {
                rt.previousActiveElement instanceof HTMLElement ? (rt.previousActiveElement.focus(), rt.previousActiveElement = null) : document.body && document.body.focus()
            },
            mi = u => new Promise(d => {
                if (!u) return d();
                const b = window.scrollX,
                    B = window.scrollY;
                rt.restoreFocusTimeout = setTimeout(() => {
                    Ln(), d()
                }, Pn), window.scrollTo(b, B)
            }),
            _r = `
 <div aria-labelledby="`.concat(Q.title, '" aria-describedby="').concat(Q["html-container"], '" class="').concat(Q.popup, `" tabindex="-1">
   <button type="button" class="`).concat(Q.close, `"></button>
   <ul class="`).concat(Q["progress-steps"], `"></ul>
   <div class="`).concat(Q.icon, `"></div>
   <img class="`).concat(Q.image, `" />
   <h2 class="`).concat(Q.title, '" id="').concat(Q.title, `"></h2>
   <div class="`).concat(Q["html-container"], '" id="').concat(Q["html-container"], `"></div>
   <input class="`).concat(Q.input, `" />
   <input type="file" class="`).concat(Q.file, `" />
   <div class="`).concat(Q.range, `">
     <input type="range" />
     <output></output>
   </div>
   <select class="`).concat(Q.select, `"></select>
   <div class="`).concat(Q.radio, `"></div>
   <label for="`).concat(Q.checkbox, '" class="').concat(Q.checkbox, `">
     <input type="checkbox" />
     <span class="`).concat(Q.label, `"></span>
   </label>
   <textarea class="`).concat(Q.textarea, `"></textarea>
   <div class="`).concat(Q["validation-message"], '" id="').concat(Q["validation-message"], `"></div>
   <div class="`).concat(Q.actions, `">
     <div class="`).concat(Q.loader, `"></div>
     <button type="button" class="`).concat(Q.confirm, `"></button>
     <button type="button" class="`).concat(Q.deny, `"></button>
     <button type="button" class="`).concat(Q.cancel, `"></button>
   </div>
   <div class="`).concat(Q.footer, `"></div>
   <div class="`).concat(Q["timer-progress-bar-container"], `">
     <div class="`).concat(Q["timer-progress-bar"], `"></div>
   </div>
 </div>
`).replace(/(^|\n)\s*/g, ""),
            kn = () => {
                const u = q();
                return u ? (u.remove(), Pt([document.documentElement, document.body], [Q["no-backdrop"], Q["toast-shown"], Q["has-column"]]), !0) : !1
            },
            sn = () => {
                rt.currentInstance.resetValidationMessage()
            },
            kr = () => {
                const u = be(),
                    d = F(u, Q.input),
                    b = F(u, Q.file),
                    B = u.querySelector(".".concat(Q.range, " input")),
                    me = u.querySelector(".".concat(Q.range, " output")),
                    Ue = F(u, Q.select),
                    Gt = u.querySelector(".".concat(Q.checkbox, " input")),
                    Vn = F(u, Q.textarea);
                d.oninput = sn, b.onchange = sn, Ue.onchange = sn, Gt.onchange = sn, Vn.oninput = sn, B.oninput = () => {
                    sn(), me.value = B.value
                }, B.onchange = () => {
                    sn(), me.value = B.value
                }
            },
            Tr = u => typeof u == "string" ? document.querySelector(u) : u,
            vi = u => {
                const d = be();
                d.setAttribute("role", u.toast ? "alert" : "dialog"), d.setAttribute("aria-live", u.toast ? "polite" : "assertive"), u.toast || d.setAttribute("aria-modal", "true")
            },
            Bi = u => {
                window.getComputedStyle(u).direction === "rtl" && Je(q(), Q.rtl)
            },
            yi = u => {
                const d = kn();
                if (In()) {
                    m("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = Q.container, d && Je(b, Q["no-transition"]), it(b, _r);
                const B = Tr(u.target);
                B.appendChild(b), vi(u), Bi(B), kr()
            },
            wi = (u, d) => {
                u instanceof HTMLElement ? d.appendChild(u) : typeof u == "object" ? ji(u, d) : u && it(d, u)
            },
            ji = (u, d) => {
                u.jquery ? Fi(d, u) : it(d, u.toString())
            },
            Fi = (u, d) => {
                if (u.textContent = "", 0 in d)
                    for (let b = 0; b in d; b++) u.appendChild(d[b].cloneNode(!0));
                else u.appendChild(d.cloneNode(!0))
            },
            mn = (() => {
                if (In()) return !1;
                const u = document.createElement("div"),
                    d = {
                        WebkitAnimation: "webkitAnimationEnd",
                        animation: "animationend"
                    };
                for (const b in d)
                    if (Object.prototype.hasOwnProperty.call(d, b) && typeof u.style[b] < "u") return d[b];
                return !1
            })(),
            zi = () => {
                const u = document.createElement("div");
                u.className = Q["scrollbar-measure"], document.body.appendChild(u);
                const d = u.getBoundingClientRect().width - u.clientWidth;
                return document.body.removeChild(u), d
            },
            bi = (u, d) => {
                const b = g(),
                    B = E();
                !d.showConfirmButton && !d.showDenyButton && !d.showCancelButton ? M(b) : K(b), ct(b, d, "actions"), Un(b, B, d), it(B, d.loaderHtml), ct(B, d, "loader")
            };

        function Un(u, d, b) {
            const B = dt(),
                me = Bt(),
                Ue = l();
            Ci(B, "confirm", b), Ci(me, "deny", b), Ci(Ue, "cancel", b), Ui(B, me, Ue, b), b.reverseButtons && (b.toast ? (u.insertBefore(Ue, B), u.insertBefore(me, B)) : (u.insertBefore(Ue, d), u.insertBefore(me, d), u.insertBefore(B, d)))
        }

        function Ui(u, d, b, B) {
            if (!B.buttonsStyling) return Pt([u, d, b], Q.styled);
            Je([u, d, b], Q.styled), B.confirmButtonColor && (u.style.backgroundColor = B.confirmButtonColor, Je(u, Q["default-outline"])), B.denyButtonColor && (d.style.backgroundColor = B.denyButtonColor, Je(d, Q["default-outline"])), B.cancelButtonColor && (b.style.backgroundColor = B.cancelButtonColor, Je(b, Q["default-outline"]))
        }

        function Ci(u, d, b) {
            pe(u, b["show".concat(o(d), "Button")], "inline-block"), it(u, b["".concat(d, "ButtonText")]), u.setAttribute("aria-label", b["".concat(d, "ButtonAriaLabel")]), u.className = Q[d], ct(u, b, "".concat(d, "Button")), Je(u, b["".concat(d, "ButtonClass")])
        }
        const Ze = (u, d) => {
            const b = q();
            !b || (y(b, d.backdrop), a(b, d.position), C(b, d.grow), ct(b, d, "container"))
        };

        function y(u, d) {
            typeof d == "string" ? u.style.background = d : d || Je([document.documentElement, document.body], Q["no-backdrop"])
        }

        function a(u, d) {
            d in Q ? Je(u, Q[d]) : (c('The "position" parameter is not valid, defaulting to "center"'), Je(u, Q.center))
        }

        function C(u, d) {
            if (d && typeof d == "string") {
                const b = "grow-".concat(d);
                b in Q && Je(u, Q[b])
            }
        }
        var A = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Z = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            xe = (u, d) => {
                const b = be(),
                    B = A.innerParams.get(u),
                    me = !B || d.input !== B.input;
                Z.forEach(Ue => {
                    const Gt = F(b, Q[Ue]);
                    Yt(Ue, d.inputAttributes), Gt.className = Q[Ue], me && M(Gt)
                }), d.input && (me && qe(d), Hn(d))
            },
            qe = u => {
                if (!zt[u.input]) return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(u.input, '"'));
                const d = Ar(u.input),
                    b = zt[u.input](d, u);
                K(d), setTimeout(() => {
                    bt(b)
                })
            },
            Lt = u => {
                for (let d = 0; d < u.attributes.length; d++) {
                    const b = u.attributes[d].name;
                    ["type", "value", "style"].includes(b) || u.removeAttribute(b)
                }
            },
            Yt = (u, d) => {
                const b = yt(be(), u);
                if (!!b) {
                    Lt(b);
                    for (const B in d) b.setAttribute(B, d[B])
                }
            },
            Hn = u => {
                const d = Ar(u.input);
                typeof u.customClass == "object" && Je(d, u.customClass.input)
            },
            Nn = (u, d) => {
                (!u.placeholder || d.inputPlaceholder) && (u.placeholder = d.inputPlaceholder)
            },
            Gn = (u, d, b) => {
                if (b.inputLabel) {
                    u.id = Q.input;
                    const B = document.createElement("label"),
                        me = Q["input-label"];
                    B.setAttribute("for", u.id), B.className = me, typeof b.customClass == "object" && Je(B, b.customClass.inputLabel), B.innerText = b.inputLabel, d.insertAdjacentElement("beforebegin", B)
                }
            },
            Ar = u => F(be(), Q[u] || Q.input),
            Xt = (u, d) => {
                ["string", "number"].includes(typeof d) ? u.value = "".concat(d) : te(d) || c('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof d, '"'))
            },
            zt = {};
        zt.text = zt.email = zt.password = zt.number = zt.tel = zt.url = (u, d) => (Xt(u, d.inputValue), Gn(u, u, d), Nn(u, d), u.type = d.input, u), zt.file = (u, d) => (Gn(u, u, d), Nn(u, d), u), zt.range = (u, d) => {
            const b = u.querySelector("input"),
                B = u.querySelector("output");
            return Xt(b, d.inputValue), b.type = d.input, Xt(B, d.inputValue), Gn(b, u, d), u
        }, zt.select = (u, d) => {
            if (u.textContent = "", d.inputPlaceholder) {
                const b = document.createElement("option");
                it(b, d.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, u.appendChild(b)
            }
            return Gn(u, u, d), u
        }, zt.radio = u => (u.textContent = "", u), zt.checkbox = (u, d) => {
            const b = yt(be(), "checkbox");
            b.value = "1", b.id = Q.checkbox, b.checked = Boolean(d.inputValue);
            const B = u.querySelector("span");
            return it(B, d.inputPlaceholder), b
        }, zt.textarea = (u, d) => {
            Xt(u, d.inputValue), Nn(u, d), Gn(u, u, d);
            const b = B => parseInt(window.getComputedStyle(B).marginLeft) + parseInt(window.getComputedStyle(B).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const B = parseInt(window.getComputedStyle(be()).width),
                        me = () => {
                            const Ue = u.offsetWidth + b(u);
                            Ue > B ? be().style.width = "".concat(Ue, "px") : be().style.width = null
                        };
                    new MutationObserver(me).observe(u, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), u
        };
        const Hi = (u, d) => {
                const b = _e();
                ct(b, d, "htmlContainer"), d.html ? (wi(d.html, b), K(b, "block")) : d.text ? (b.textContent = d.text, K(b, "block")) : M(b), xe(u, d)
            },
            bo = (u, d) => {
                const b = S();
                pe(b, d.footer), d.footer && wi(d.footer, b), ct(b, d, "footer")
            },
            Co = (u, d) => {
                const b = P();
                it(b, d.closeButtonHtml), ct(b, d, "closeButton"), pe(b, d.showCloseButton), b.setAttribute("aria-label", d.closeButtonAriaLabel)
            },
            Or = (u, d) => {
                const b = A.innerParams.get(u),
                    B = we();
                if (b && d.icon === b.icon) {
                    ms(B, d), Rr(B, d);
                    return
                }
                if (!d.icon && !d.iconHtml) {
                    M(B);
                    return
                }
                if (d.icon && Object.keys(Fe).indexOf(d.icon) === -1) {
                    m('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(d.icon, '"')), M(B);
                    return
                }
                K(B), ms(B, d), Rr(B, d), Je(B, d.showClass.icon)
            },
            Rr = (u, d) => {
                for (const b in Fe) d.icon !== b && Pt(u, Fe[b]);
                Je(u, Fe[d.icon]), bn(u, d), Gi(), ct(u, d, "icon")
            },
            Gi = () => {
                const u = be(),
                    d = window.getComputedStyle(u).getPropertyValue("background-color"),
                    b = u.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let B = 0; B < b.length; B++) b[B].style.backgroundColor = d
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
            ms = (u, d) => {
                let b = u.innerHTML,
                    B;
                d.iconHtml ? B = Ir(d.iconHtml) : d.icon === "success" ? (B = gs, b = b.replace(/ style=".*?"/g, "")) : d.icon === "error" ? B = xo : B = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [d.icon]), b.trim() !== B.trim() && it(u, B)
            },
            bn = (u, d) => {
                if (!!d.iconColor) {
                    u.style.color = d.iconColor, u.style.borderColor = d.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) X(u, b, "backgroundColor", d.iconColor);
                    X(u, ".swal2-success-ring", "borderColor", d.iconColor)
                }
            },
            Ir = u => '<div class="'.concat(Q["icon-content"], '">').concat(u, "</div>"),
            xi = (u, d) => {
                const b = Te();
                if (!d.imageUrl) return M(b);
                K(b, ""), b.setAttribute("src", d.imageUrl), b.setAttribute("alt", d.imageAlt), N(b, "width", d.imageWidth), N(b, "height", d.imageHeight), b.className = Q.image, ct(b, d, "image")
            },
            Eo = (u, d) => {
                const b = Be();
                if (!d.progressSteps || d.progressSteps.length === 0) return M(b);
                K(b), b.textContent = "", d.currentProgressStep >= d.progressSteps.length && c("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), d.progressSteps.forEach((B, me) => {
                    const Ue = So(B);
                    if (b.appendChild(Ue), me === d.currentProgressStep && Je(Ue, Q["active-progress-step"]), me !== d.progressSteps.length - 1) {
                        const Gt = qn(d);
                        b.appendChild(Gt)
                    }
                })
            },
            So = u => {
                const d = document.createElement("li");
                return Je(d, Q["progress-step"]), it(d, u), d
            },
            qn = u => {
                const d = document.createElement("li");
                return Je(d, Q["progress-step-line"]), u.progressStepsDistance && N(d, "width", u.progressStepsDistance), d
            },
            Wn = (u, d) => {
                const b = he();
                pe(b, d.title || d.titleText, "block"), d.title && wi(d.title, b), d.titleText && (b.innerText = d.titleText), ct(b, d, "title")
            },
            Lr = (u, d) => {
                const b = q(),
                    B = be();
                d.toast ? (N(b, "width", d.width), B.style.width = "100%", B.insertBefore(E(), we())) : N(B, "width", d.width), N(B, "padding", d.padding), d.color && (B.style.color = d.color), d.background && (B.style.background = d.background), M(Ke()), _o(B, d)
            },
            _o = (u, d) => {
                u.className = "".concat(Q.popup, " ").concat(ge(u) ? d.showClass.popup : ""), d.toast ? (Je([document.documentElement, document.body], Q["toast-shown"]), Je(u, Q.toast)) : Je(u, Q.modal), ct(u, d, "popup"), typeof d.customClass == "string" && Je(u, d.customClass), d.icon && Je(u, Q["icon-".concat(d.icon)])
            },
            Dr = (u, d) => {
                Lr(u, d), Ze(u, d), Eo(u, d), Or(u, d), xi(u, d), Wn(u, d), Co(u, d), Hi(u, d), bi(u, d), bo(u, d), typeof d.didRender == "function" && d.didRender(be())
            },
            Yn = Object.freeze({
                cancel: "cancel",
                backdrop: "backdrop",
                close: "close",
                esc: "esc",
                timer: "timer"
            }),
            Ei = () => {
                Array.from(document.body.children).forEach(d => {
                    d === q() || d.contains(q()) || (d.hasAttribute("aria-hidden") && d.setAttribute("data-previous-aria-hidden", d.getAttribute("aria-hidden")), d.setAttribute("aria-hidden", "true"))
                })
            },
            Mr = () => {
                Array.from(document.body.children).forEach(d => {
                    d.hasAttribute("data-previous-aria-hidden") ? (d.setAttribute("aria-hidden", d.getAttribute("data-previous-aria-hidden")), d.removeAttribute("data-previous-aria-hidden")) : d.removeAttribute("aria-hidden")
                })
            },
            qi = ["swal-title", "swal-html", "swal-footer"],
            ko = u => {
                const d = typeof u.template == "string" ? document.querySelector(u.template) : u.template;
                if (!d) return {};
                const b = d.content;
                return Io(b), Object.assign(vs(b), To(b), Ao(b), Pr(b), Oo(b), Ro(b, qi))
            },
            vs = u => {
                const d = {};
                return Array.from(u.querySelectorAll("swal-param")).forEach(B => {
                    Xn(B, ["name", "value"]);
                    const me = B.getAttribute("name"),
                        Ue = B.getAttribute("value");
                    typeof re[me] == "boolean" && Ue === "false" && (d[me] = !1), typeof re[me] == "object" && (d[me] = JSON.parse(Ue))
                }), d
            },
            To = u => {
                const d = {};
                return Array.from(u.querySelectorAll("swal-button")).forEach(B => {
                    Xn(B, ["type", "color", "aria-label"]);
                    const me = B.getAttribute("type");
                    d["".concat(me, "ButtonText")] = B.innerHTML, d["show".concat(o(me), "Button")] = !0, B.hasAttribute("color") && (d["".concat(me, "ButtonColor")] = B.getAttribute("color")), B.hasAttribute("aria-label") && (d["".concat(me, "ButtonAriaLabel")] = B.getAttribute("aria-label"))
                }), d
            },
            Ao = u => {
                const d = {},
                    b = u.querySelector("swal-image");
                return b && (Xn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (d.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (d.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (d.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (d.imageAlt = b.getAttribute("alt"))), d
            },
            Pr = u => {
                const d = {},
                    b = u.querySelector("swal-icon");
                return b && (Xn(b, ["type", "color"]), b.hasAttribute("type") && (d.icon = b.getAttribute("type")), b.hasAttribute("color") && (d.iconColor = b.getAttribute("color")), d.iconHtml = b.innerHTML), d
            },
            Oo = u => {
                const d = {},
                    b = u.querySelector("swal-input");
                b && (Xn(b, ["type", "label", "placeholder", "value"]), d.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (d.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (d.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (d.inputValue = b.getAttribute("value")));
                const B = Array.from(u.querySelectorAll("swal-input-option"));
                return B.length && (d.inputOptions = {}, B.forEach(me => {
                    Xn(me, ["value"]);
                    const Ue = me.getAttribute("value"),
                        Gt = me.innerHTML;
                    d.inputOptions[Ue] = Gt
                })), d
            },
            Ro = (u, d) => {
                const b = {};
                for (const B in d) {
                    const me = d[B],
                        Ue = u.querySelector(me);
                    Ue && (Xn(Ue, []), b[me.replace(/^swal-/, "")] = Ue.innerHTML.trim())
                }
                return b
            },
            Io = u => {
                const d = qi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(u.children).forEach(b => {
                    const B = b.tagName.toLowerCase();
                    d.indexOf(B) === -1 && c("Unrecognized element <".concat(B, ">"))
                })
            },
            Xn = (u, d) => {
                Array.from(u.attributes).forEach(b => {
                    d.indexOf(b.name) === -1 && c(['Unrecognized attribute "'.concat(b.name, '" on <').concat(u.tagName.toLowerCase(), ">."), "".concat(d.length ? "Allowed attributes are: ".concat(d.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var ys = {
            email: (u, d) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u) ? Promise.resolve() : Promise.resolve(d || "Invalid email address"),
            url: (u, d) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(u) ? Promise.resolve() : Promise.resolve(d || "Invalid URL")
        };

        function Lo(u) {
            u.inputValidator || Object.keys(ys).forEach(d => {
                u.input === d && (u.inputValidator = ys[d])
            })
        }

        function Do(u) {
            (!u.target || typeof u.target == "string" && !document.querySelector(u.target) || typeof u.target != "string" && !u.target.appendChild) && (c('Target parameter is not valid, defaulting to "body"'), u.target = "body")
        }

        function ws(u) {
            Lo(u), u.showLoaderOnConfirm && !u.preConfirm && c(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Do(u), typeof u.title == "string" && (u.title = u.title.split(`
`).join("<br />")), yi(u)
        }
        class Nr {
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
        const bs = () => {
                De.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (De.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(De.previousBodyPadding + zi(), "px"))
            },
            Vr = () => {
                De.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(De.previousBodyPadding, "px"), De.previousBodyPadding = null)
            },
            Cs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, Q.iosfix)) {
                    const d = document.body.scrollTop;
                    document.body.style.top = "".concat(d * -1, "px"), Je(document.body, Q.iosfix), $r(), xs()
                }
            },
            xs = () => {
                const u = navigator.userAgent,
                    d = !!u.match(/iPad/i) || !!u.match(/iPhone/i),
                    b = !!u.match(/WebKit/i);
                d && b && !u.match(/CriOS/i) && be().scrollHeight > window.innerHeight - 44 && (q().style.paddingBottom = "".concat(44, "px"))
            },
            $r = () => {
                const u = q();
                let d;
                u.ontouchstart = b => {
                    d = Mo(b)
                }, u.ontouchmove = b => {
                    d && (b.preventDefault(), b.stopPropagation())
                }
            },
            Mo = u => {
                const d = u.target,
                    b = q();
                return Po(u) || No(u) ? !1 : d === b || !Ve(b) && d.tagName !== "INPUT" && d.tagName !== "TEXTAREA" && !(Ve(_e()) && _e().contains(d))
            },
            Po = u => u.touches && u.touches.length && u.touches[0].touchType === "stylus",
            No = u => u.touches && u.touches.length > 1,
            Si = () => {
                if (Ct(document.body, Q.iosfix)) {
                    const u = parseInt(document.body.style.top, 10);
                    Pt(document.body, Q.iosfix), document.body.style.top = "", document.body.scrollTop = u * -1
                }
            },
            Br = 10,
            jr = u => {
                const d = q(),
                    b = be();
                typeof u.willOpen == "function" && u.willOpen(b);
                const me = window.getComputedStyle(document.body).overflowY;
                r(d, b, u), setTimeout(() => {
                    Vo(d, b)
                }, Br), ke() && ($o(d, u.scrollbarPadding, me), Ei()), !de() && !rt.previousActiveElement && (rt.previousActiveElement = document.activeElement), typeof u.didOpen == "function" && setTimeout(() => u.didOpen(b)), Pt(d, Q["no-transition"])
            },
            Es = u => {
                const d = be();
                if (u.target !== d) return;
                const b = q();
                d.removeEventListener(mn, Es), b.style.overflowY = "auto"
            },
            Vo = (u, d) => {
                mn && pt(d) ? (u.style.overflowY = "hidden", d.addEventListener(mn, Es)) : u.style.overflowY = "auto"
            },
            $o = (u, d, b) => {
                Cs(), d && b !== "hidden" && bs(), setTimeout(() => {
                    u.scrollTop = 0
                })
            },
            r = (u, d, b) => {
                Je(u, b.showClass.backdrop), d.style.setProperty("opacity", "0", "important"), K(d, "grid"), setTimeout(() => {
                    Je(d, b.showClass.popup), d.style.removeProperty("opacity")
                }, Br), Je([document.documentElement, document.body], Q.shown), b.heightAuto && b.backdrop && !b.toast && Je([document.documentElement, document.body], Q["height-auto"])
            },
            s = u => {
                let d = be();
                d || new Ot, d = be();
                const b = E();
                de() ? M(we()) : h(d, u), K(b), d.setAttribute("data-loading", "true"), d.setAttribute("aria-busy", "true"), d.focus()
            },
            h = (u, d) => {
                const b = g(),
                    B = E();
                !d && ge(dt()) && (d = dt()), K(b), d && (M(d), B.setAttribute("data-button-to-replace", d.className)), B.parentNode.insertBefore(B, d), Je([u, b], Q.loading)
            },
            p = (u, d) => {
                d.input === "select" || d.input === "radio" ? G(u, d) : ["text", "email", "number", "tel", "textarea"].includes(d.input) && ($(d.inputValue) || te(d.inputValue)) && (s(dt()), ee(u, d))
            },
            w = (u, d) => {
                const b = u.getInput();
                if (!b) return null;
                switch (d.input) {
                    case "checkbox":
                        return x(b);
                    case "radio":
                        return T(b);
                    case "file":
                        return U(b);
                    default:
                        return d.inputAutoTrim ? b.value.trim() : b.value
                }
            },
            x = u => u.checked ? 1 : 0,
            T = u => u.checked ? u.value : null,
            U = u => u.files.length ? u.getAttribute("multiple") !== null ? u.files : u.files[0] : null,
            G = (u, d) => {
                const b = be(),
                    B = me => ce[d.input](b, Ce(me), d);
                $(d.inputOptions) || te(d.inputOptions) ? (s(dt()), H(d.inputOptions).then(me => {
                    u.hideLoading(), B(me)
                })) : typeof d.inputOptions == "object" ? B(d.inputOptions) : m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof d.inputOptions))
            },
            ee = (u, d) => {
                const b = u.getInput();
                M(b), H(d.inputValue).then(B => {
                    b.value = d.input === "number" ? parseFloat(B) || 0 : "".concat(B), K(b), b.focus(), u.hideLoading()
                }).catch(B => {
                    m("Error in inputValue promise: ".concat(B)), b.value = "", K(b), b.focus(), u.hideLoading()
                })
            },
            ce = {
                select: (u, d, b) => {
                    const B = F(u, Q.select),
                        me = (Ue, Gt, Vn) => {
                            const pn = document.createElement("option");
                            pn.value = Vn, it(pn, Gt), pn.selected = se(Vn, b.inputValue), Ue.appendChild(pn)
                        };
                    d.forEach(Ue => {
                        const Gt = Ue[0],
                            Vn = Ue[1];
                        if (Array.isArray(Vn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Gt, pn.disabled = !1, B.appendChild(pn), Vn.forEach(nr => me(pn, nr[1], nr[0]))
                        } else me(B, Vn, Gt)
                    }), B.focus()
                },
                radio: (u, d, b) => {
                    const B = F(u, Q.radio);
                    d.forEach(Ue => {
                        const Gt = Ue[0],
                            Vn = Ue[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = Q.radio, pn.value = Gt, se(Gt, b.inputValue) && (pn.checked = !0);
                        const Ko = document.createElement("span");
                        it(Ko, Vn), Ko.className = Q.label, nr.appendChild(pn), nr.appendChild(Ko), B.appendChild(nr)
                    });
                    const me = B.querySelectorAll("input");
                    me.length && me[0].focus()
                }
            },
            Ce = u => {
                const d = [];
                return typeof Map < "u" && u instanceof Map ? u.forEach((b, B) => {
                    let me = b;
                    typeof me == "object" && (me = Ce(me)), d.push([B, me])
                }) : Object.keys(u).forEach(b => {
                    let B = u[b];
                    typeof B == "object" && (B = Ce(B)), d.push([b, B])
                }), d
            },
            se = (u, d) => d && d.toString() === u.toString();

        function ue() {
            const u = A.innerParams.get(this);
            if (!u) return;
            const d = A.domCache.get(this);
            M(d.loader), de() ? u.icon && K(we()) : Ge(d), Pt([d.popup, d.actions], Q.loading), d.popup.removeAttribute("aria-busy"), d.popup.removeAttribute("data-loading"), d.confirmButton.disabled = !1, d.denyButton.disabled = !1, d.cancelButton.disabled = !1
        }
        const Ge = u => {
            const d = u.popup.getElementsByClassName(u.loader.getAttribute("data-button-to-replace"));
            d.length ? K(d[0], "inline-block") : Ne() && M(u.actions)
        };

        function st(u) {
            const d = A.innerParams.get(u || this),
                b = A.domCache.get(u || this);
            return b ? yt(b.popup, d.input) : null
        }
        var je = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const Ut = () => ge(be()),
            Vt = () => dt() && dt().click(),
            un = () => Bt() && Bt().click(),
            St = () => l() && l().click(),
            et = u => {
                u.keydownTarget && u.keydownHandlerAdded && (u.keydownTarget.removeEventListener("keydown", u.keydownHandler, {
                    capture: u.keydownListenerCapture
                }), u.keydownHandlerAdded = !1)
            },
            on = (u, d, b, B) => {
                et(d), b.toast || (d.keydownHandler = me => Wi(u, me, B), d.keydownTarget = b.keydownListenerCapture ? window : be(), d.keydownListenerCapture = b.keydownListenerCapture, d.keydownTarget.addEventListener("keydown", d.keydownHandler, {
                    capture: d.keydownListenerCapture
                }), d.keydownHandlerAdded = !0)
            },
            ft = (u, d, b) => {
                const B = ie();
                if (B.length) return d = d + b, d === B.length ? d = 0 : d === -1 && (d = B.length - 1), B[d].focus();
                be().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            _i = ["ArrowLeft", "ArrowUp"],
            Wi = (u, d, b) => {
                const B = A.innerParams.get(u);
                !B || d.isComposing || d.keyCode === 229 || (B.stopKeydownPropagation && d.stopPropagation(), d.key === "Enter" ? hn(u, d, B) : d.key === "Tab" ? Kn(d, B) : [...Dt, ..._i].includes(d.key) ? Jn(d.key) : d.key === "Escape" && an(d, B, b))
            },
            hn = (u, d, b) => {
                if (!!L(b.allowEnterKey) && d.target && u.getInput() && d.target instanceof HTMLElement && d.target.outerHTML === u.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Vt(), d.preventDefault()
                }
            },
            Kn = (u, d) => {
                const b = u.target,
                    B = ie();
                let me = -1;
                for (let Ue = 0; Ue < B.length; Ue++)
                    if (b === B[Ue]) {
                        me = Ue;
                        break
                    } u.shiftKey ? ft(d, me, -1) : ft(d, me, 1), u.stopPropagation(), u.preventDefault()
            },
            Jn = u => {
                const d = dt(),
                    b = Bt(),
                    B = l();
                if (document.activeElement instanceof HTMLElement && ![d, b, B].includes(document.activeElement)) return;
                const me = Dt.includes(u) ? "nextElementSibling" : "previousElementSibling";
                let Ue = document.activeElement;
                for (let Gt = 0; Gt < g().children.length; Gt++) {
                    if (Ue = Ue[me], !Ue) return;
                    if (Ue instanceof HTMLButtonElement && ge(Ue)) break
                }
                Ue instanceof HTMLButtonElement && Ue.focus()
            },
            an = (u, d, b) => {
                L(d.allowEscapeKey) && (u.preventDefault(), b(Yn.esc))
            };

        function Dn(u, d, b, B) {
            de() ? ks(u, B) : (mi(b).then(() => ks(u, B)), et(rt)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (d.setAttribute("style", "display:none !important"), d.removeAttribute("class"), d.innerHTML = "") : d.remove(), ke() && (Vr(), Si(), Mr()), vn()
        }

        function vn() {
            Pt([document.documentElement, document.body], [Q.shown, Q["height-auto"], Q["no-backdrop"], Q["toast-shown"]])
        }

        function Cn(u) {
            u = Zn(u);
            const d = je.swalPromiseResolve.get(this),
                b = Qn(this);
            this.isAwaitingPromise() ? u.isDismissed || (gt(this), d(u)) : b && d(u)
        }

        function Ss() {
            return !!A.awaitingPromise.get(this)
        }
        const Qn = u => {
            const d = be();
            if (!d) return !1;
            const b = A.innerParams.get(u);
            if (!b || Ct(d, b.hideClass.popup)) return !1;
            Pt(d, b.showClass.popup), Je(d, b.hideClass.popup);
            const B = q();
            return Pt(B, b.showClass.backdrop), Je(B, b.hideClass.backdrop), _s(u, d, b), !0
        };

        function Fr(u) {
            const d = je.swalPromiseReject.get(this);
            gt(this), d && d(u)
        }
        const gt = u => {
                u.isAwaitingPromise() && (A.awaitingPromise.delete(u), A.innerParams.get(u) || u._destroy())
            },
            Zn = u => typeof u > "u" ? {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !0
            } : Object.assign({
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1
            }, u),
            _s = (u, d, b) => {
                const B = q(),
                    me = mn && pt(d);
                typeof b.willClose == "function" && b.willClose(d), me ? zr(u, d, B, b.returnFocus, b.didClose) : Dn(u, B, b.returnFocus, b.didClose)
            },
            zr = (u, d, b, B, me) => {
                rt.swalCloseEventFinishedCallback = Dn.bind(null, u, b, B, me), d.addEventListener(mn, function(Ue) {
                    Ue.target === d && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback)
                })
            },
            ks = (u, d) => {
                setTimeout(() => {
                    typeof d == "function" && d.bind(u.params)(), u._destroy()
                })
            };

        function ki(u, d, b) {
            const B = A.domCache.get(u);
            d.forEach(me => {
                B[me].disabled = b
            })
        }

        function Ts(u, d) {
            if (!u) return !1;
            if (u.type === "radio") {
                const B = u.parentNode.parentNode.querySelectorAll("input");
                for (let me = 0; me < B.length; me++) B[me].disabled = d
            } else u.disabled = d
        }

        function As() {
            ki(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function Bo() {
            ki(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function jo() {
            return Ts(this.getInput(), !1)
        }

        function Fo() {
            return Ts(this.getInput(), !0)
        }

        function Yi(u) {
            const d = A.domCache.get(this),
                b = A.innerParams.get(this);
            it(d.validationMessage, u), d.validationMessage.className = Q["validation-message"], b.customClass && b.customClass.validationMessage && Je(d.validationMessage, b.customClass.validationMessage), K(d.validationMessage);
            const B = this.getInput();
            B && (B.setAttribute("aria-invalid", !0), B.setAttribute("aria-describedby", Q["validation-message"]), bt(B), Je(B, Q.inputerror))
        }

        function zo() {
            const u = A.domCache.get(this);
            u.validationMessage && M(u.validationMessage);
            const d = this.getInput();
            d && (d.removeAttribute("aria-invalid"), d.removeAttribute("aria-describedby"), Pt(d, Q.inputerror))
        }

        function Uo() {
            return A.domCache.get(this).progressSteps
        }

        function Ho(u) {
            const d = be(),
                b = A.innerParams.get(this);
            if (!d || Ct(d, b.hideClass.popup)) return c("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const B = Ti(u),
                me = Object.assign({}, b, B);
            Dr(this, me), A.innerParams.set(this, me), Object.defineProperties(this, {
                params: {
                    value: Object.assign({}, this.params, u),
                    writable: !1,
                    enumerable: !0
                }
            })
        }
        const Ti = u => {
            const d = {};
            return Object.keys(u).forEach(b => {
                oe(b) ? d[b] = u[b] : c("Invalid parameter to update: ".concat(b))
            }), d
        };

        function Go() {
            const u = A.domCache.get(this),
                d = A.innerParams.get(this);
            if (!d) {
                Tn(this);
                return
            }
            u.popup && rt.swalCloseEventFinishedCallback && (rt.swalCloseEventFinishedCallback(), delete rt.swalCloseEventFinishedCallback), typeof d.didDestroy == "function" && d.didDestroy(), Ur(this)
        }
        const Ur = u => {
                Tn(u), delete u.params, delete rt.keydownHandler, delete rt.keydownTarget, delete rt.currentInstance
            },
            Tn = u => {
                u.isAwaitingPromise() ? (xn(A, u), A.awaitingPromise.set(u, !0)) : (xn(je, u), xn(A, u))
            },
            xn = (u, d) => {
                for (const b in u) u[b].delete(d)
            };
        var Hr = Object.freeze({
            hideLoading: ue,
            disableLoading: ue,
            getInput: st,
            close: Cn,
            isAwaitingPromise: Ss,
            rejectPromise: Fr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: As,
            disableButtons: Bo,
            enableInput: jo,
            disableInput: Fo,
            showValidationMessage: Yi,
            resetValidationMessage: zo,
            getProgressSteps: Uo,
            update: Ho,
            _destroy: Go
        });
        const Os = u => {
                const d = A.innerParams.get(u);
                u.disableButtons(), d.input ? _t(u, "confirm") : Ji(u, !0)
            },
            Rs = u => {
                const d = A.innerParams.get(u);
                u.disableButtons(), d.returnInputValueOnDeny ? _t(u, "deny") : dn(u, !1)
            },
            qo = (u, d) => {
                u.disableButtons(), d(Yn.cancel)
            },
            _t = (u, d) => {
                const b = A.innerParams.get(u);
                if (!b.input) {
                    m('The "input" parameter is needed to be set when using returnInputValueOn'.concat(o(d)));
                    return
                }
                const B = w(u, b);
                b.inputValidator ? Xi(u, B, d) : u.getInput().checkValidity() ? d === "deny" ? dn(u, B) : Ji(u, B) : (u.enableButtons(), u.showValidationMessage(b.validationMessage))
            },
            Xi = (u, d, b) => {
                const B = A.innerParams.get(u);
                u.disableInput(), Promise.resolve().then(() => H(B.inputValidator(d, B.validationMessage))).then(Ue => {
                    u.enableButtons(), u.enableInput(), Ue ? u.showValidationMessage(Ue) : b === "deny" ? dn(u, d) : Ji(u, d)
                })
            },
            dn = (u, d) => {
                const b = A.innerParams.get(u || void 0);
                b.showLoaderOnDeny && s(Bt()), b.preDeny ? (A.awaitingPromise.set(u || void 0, !0), Promise.resolve().then(() => H(b.preDeny(d, b.validationMessage))).then(me => {
                    me === !1 ? (u.hideLoading(), gt(u)) : u.close({
                        isDenied: !0,
                        value: typeof me > "u" ? d : me
                    })
                }).catch(me => Ki(u || void 0, me))) : u.close({
                    isDenied: !0,
                    value: d
                })
            },
            yn = (u, d) => {
                u.close({
                    isConfirmed: !0,
                    value: d
                })
            },
            Ki = (u, d) => {
                u.rejectPromise(d)
            },
            Ji = (u, d) => {
                const b = A.innerParams.get(u || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (u.resetValidationMessage(), A.awaitingPromise.set(u || void 0, !0), Promise.resolve().then(() => H(b.preConfirm(d, b.validationMessage))).then(me => {
                    ge(Ke()) || me === !1 ? (u.hideLoading(), gt(u)) : yn(u, typeof me > "u" ? d : me)
                }).catch(me => Ki(u || void 0, me))) : yn(u, d)
            },
            Wo = (u, d, b) => {
                A.innerParams.get(u).toast ? Yo(u, d, b) : (Gr(d), Ls(d), Qi(u, d, b))
            },
            Yo = (u, d, b) => {
                d.popup.onclick = () => {
                    const B = A.innerParams.get(u);
                    B && (Is(B) || B.timer || B.input) || b(Yn.close)
                }
            },
            Is = u => u.showConfirmButton || u.showDenyButton || u.showCancelButton || u.showCloseButton;
        let An = !1;
        const Gr = u => {
                u.popup.onmousedown = () => {
                    u.container.onmouseup = function(d) {
                        u.container.onmouseup = void 0, d.target === u.container && (An = !0)
                    }
                }
            },
            Ls = u => {
                u.container.onmousedown = () => {
                    u.popup.onmouseup = function(d) {
                        u.popup.onmouseup = void 0, (d.target === u.popup || u.popup.contains(d.target)) && (An = !0)
                    }
                }
            },
            Qi = (u, d, b) => {
                d.container.onclick = B => {
                    const me = A.innerParams.get(u);
                    if (An) {
                        An = !1;
                        return
                    }
                    B.target === d.container && L(me.allowOutsideClick) && b(Yn.backdrop)
                }
            },
            Zi = u => typeof u == "object" && u.jquery,
            er = u => u instanceof Element || Zi(u),
            Xo = u => {
                const d = {};
                return typeof u[0] == "object" && !er(u[0]) ? Object.assign(d, u[0]) : ["title", "html", "icon"].forEach((b, B) => {
                    const me = u[B];
                    typeof me == "string" || er(me) ? d[b] = me : me !== void 0 && m("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof me))
                }), d
            };

        function tr() {
            const u = this;
            for (var d = arguments.length, b = new Array(d), B = 0; B < d; B++) b[B] = arguments[B];
            return new u(...b)
        }

        function qr(u) {
            class d extends this {
                _main(B, me) {
                    return super._main(B, Object.assign({}, u, me))
                }
            }
            return d
        }
        const Wr = () => rt.timeout && rt.timeout.getTimerLeft(),
            Ds = () => {
                if (rt.timeout) return Xe(), rt.timeout.stop()
            },
            R = () => {
                if (rt.timeout) {
                    const u = rt.timeout.start();
                    return Ft(u), u
                }
            },
            z = () => {
                const u = rt.timeout;
                return u && (u.running ? Ds() : R())
            },
            J = u => {
                if (rt.timeout) {
                    const d = rt.timeout.increase(u);
                    return Ft(d, !0), d
                }
            },
            fe = () => rt.timeout && rt.timeout.isRunning();
        let ne = !1;
        const ve = {};

        function Ee() {
            let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            ve[u] = this, ne || (document.body.addEventListener("click", Re), ne = !0)
        }
        const Re = u => {
            for (let d = u.target; d && d !== document; d = d.parentNode)
                for (const b in ve) {
                    const B = d.getAttribute(b);
                    if (B) {
                        ve[b].fire({
                            template: B
                        });
                        return
                    }
                }
        };
        var Me = Object.freeze({
            isValidParameter: le,
            isUpdatableParameter: oe,
            isDeprecatedParameter: ye,
            argsToParams: Xo,
            isVisible: Ut,
            clickConfirm: Vt,
            clickDeny: un,
            clickCancel: St,
            getContainer: q,
            getPopup: be,
            getTitle: he,
            getHtmlContainer: _e,
            getImage: Te,
            getIcon: we,
            getInputLabel: qt,
            getCloseButton: P,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Bt,
            getCancelButton: l,
            getLoader: E,
            getFooter: S,
            getTimerProgressBar: O,
            getFocusableElements: ie,
            getValidationMessage: Ke,
            isLoading: Le,
            fire: tr,
            mixin: qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Wr,
            stopTimer: Ds,
            resumeTimer: R,
            toggleTimer: z,
            increaseTimer: J,
            isTimerRunning: fe,
            bindClickHandler: Ee
        });
        let ze;
        class He {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var d = arguments.length, b = new Array(d), B = 0; B < d; B++) b[B] = arguments[B];
                const me = Object.freeze(this.constructor.argsToParams(b));
                Object.defineProperties(this, {
                    params: {
                        value: me,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const Ue = ze._main(ze.params);
                A.promise.set(this, Ue)
            }
            _main(d) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, b, d)), rt.currentInstance && (rt.currentInstance._destroy(), ke() && Mr()), rt.currentInstance = ze;
                const B = ht(d, b);
                ws(B), Object.freeze(B), rt.timeout && (rt.timeout.stop(), delete rt.timeout), clearTimeout(rt.restoreFocusTimeout);
                const me = At(ze);
                return Dr(ze, B), A.innerParams.set(ze, B), Ye(ze, me, B)
            }
            then(d) {
                return A.promise.get(this).then(d)
            } finally(d) {
                return A.promise.get(this).finally(d)
            }
        }
        const Ye = (u, d, b) => new Promise((B, me) => {
                const Ue = Gt => {
                    u.closePopup({
                        isDismissed: !0,
                        dismiss: Gt
                    })
                };
                je.swalPromiseResolve.set(u, B), je.swalPromiseReject.set(u, me), d.confirmButton.onclick = () => Os(u), d.denyButton.onclick = () => Rs(u), d.cancelButton.onclick = () => qo(u, Ue), d.closeButton.onclick = () => Ue(Yn.close), Wo(u, d, Ue), on(u, rt, b, Ue), p(u, b), jr(b), We(rt, b, Ue), Ht(d, b), setTimeout(() => {
                    d.container.scrollTop = 0
                })
            }),
            ht = (u, d) => {
                const b = ko(u),
                    B = Object.assign({}, re, d, b, u);
                return B.showClass = Object.assign({}, re.showClass, B.showClass), B.hideClass = Object.assign({}, re.hideClass, B.hideClass), B
            },
            At = u => {
                const d = {
                    popup: be(),
                    container: q(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Bt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: P(),
                    validationMessage: Ke(),
                    progressSteps: Be()
                };
                return A.domCache.set(u, d), d
            },
            We = (u, d, b) => {
                const B = O();
                M(B), d.timer && (u.timeout = new Nr(() => {
                    b("timer"), delete u.timeout
                }, d.timer), d.timerProgressBar && (K(B), ct(B, d, "timerProgressBar"), setTimeout(() => {
                    u.timeout && u.timeout.running && Ft(d.timer)
                })))
            },
            Ht = (u, d) => {
                if (!d.toast) {
                    if (!L(d.allowEnterKey)) return fn();
                    Qt(u, d) || ft(d, -1, 1)
                }
            },
            Qt = (u, d) => d.focusDeny && ge(u.denyButton) ? (u.denyButton.focus(), !0) : d.focusCancel && ge(u.cancelButton) ? (u.cancelButton.focus(), !0) : d.focusConfirm && ge(u.confirmButton) ? (u.confirmButton.focus(), !0) : !1,
            fn = () => {
                document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
            };
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
            const u = document.createElement("div");
            u.className = "leave-russia-now-and-apply-your-skills-to-the-world";
            const d = W([{
                text: `\u0412 \u043D\u0438\u0436\u0435\u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u0442\u0441\u044F \u043A\u0430\u043A \u043A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u043C\u043E\u0436\u0435\u0442 \u043F\u043E\u043C\u043E\u0447\u044C \u0432 \u0442\u043E\u043C,
        <strong>\u0447\u0442\u043E\u0431\u044B \u044D\u0442\u0430 \u0431\u0435\u0441\u0441\u043C\u044B\u0441\u043B\u0435\u043D\u043D\u0430\u044F \u0438 \u0431\u0435\u0441\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u043D\u0430\u044F \u0432\u043E\u0439\u043D\u0430 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u043B\u0430\u0441\u044C</strong>:`,
                id: "4CfDhaRkw7I"
            }, {
                text: "\u042D\u043C\u043F\u0430\u0442\u0438\u044F - \u0433\u043B\u0430\u0432\u043D\u043E\u0435 <strong>\u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u043E\u0435</strong> \u0447\u0443\u0432\u0441\u0442\u0432\u043E. \u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u0441\u043E\u043F\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0442\u044C. <strong>\u0421\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u044C \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0435\u0431\u044F \u043D\u0430 \u043C\u0435\u0441\u0442\u043E \u0434\u0440\u0443\u0433\u043E\u0433\u043E.</strong>",
                id: "s-GLAIY4DXA"
            }]);
            it(u, `
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
            b.innerHTML = "&times;", b.onclick = () => u.remove(), u.appendChild(b), window.addEventListener("load", () => {
                setTimeout(() => {
                    document.body.appendChild(u)
                }, 1e3)
            })
        }
        Object.assign(He.prototype, Hr), Object.assign(He, Me), Object.keys(Hr).forEach(u => {
            He[u] = function() {
                if (ze) return ze[u](...arguments)
            }
        }), He.DismissReason = Yn, He.version = "11.4.26";
        const Ot = He;
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
})(Xu);
const Rn = Xu.exports;
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
        const n = new URL("main/standalone/drawful2/assets/8cdd50e7.png", self.location).href,
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
const yC = `<div class="canvasContainer">\r
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
    wC = {
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
                c = Math.max(i / e, o / n);
            this.width = i, this.height = o, this.finalWidth = e * c, this.finalHeight = n * c, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (o - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (console.log("render"), !this.video) return;
            const t = vo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Mi().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Mi().width, Mi().height))
        }
    },
    bC = Et.View.extend({
        template: at.template(yC),
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
            hC("cameraCanvas"), t.sprites = [], t.gameLoop = pC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = cl(wC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                const c = i.toDataURL().split(",")[1];
                e.push({
                    size: n,
                    picture: c
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
                i = j(".canvasContainer");
            if (!n || !i) return;
            const o = i.width(),
                c = Math.max(j(window).innerHeight(), 250),
                m = Math.min(o / t, c / e),
                _ = t * m,
                k = e * m;
            n.style.width = `${_}px`, n.style.height = `${k}px`, n.width = _, n.height = k
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
    CC = si.extend({
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
    xC = Et.View.extend({
        template: at.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new CC,
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
            this.cameraView = this.cameraView || new bC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    EC = '<a class="change-color button-color btn"></a>',
    SC = Et.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: at.template(EC),
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
    _C = Et.CollectionView.extend({
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
    kC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/standalone/drawful2/assets/5f12600b.png"/></svg>\r
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
    TC = Et.View.extend({
        tagName: "div",
        className: "picker",
        template: at.template(kC),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new _C({
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
class Ku {
    constructor(e, n, i) {
        nt(this, "options");
        nt(this, "canvas");
        nt(this, "canvasCTX");
        nt(this, "tipCanvas");
        nt(this, "tipCanvasCTX");
        nt(this, "lines", []);
        nt(this, "image");
        nt(this, "startX", null);
        nt(this, "startY", null);
        nt(this, "smoothedMouseX", null);
        nt(this, "smoothedMouseY", null);
        nt(this, "lastMouse", {});
        nt(this, "lastMouseChangeVector", {});
        nt(this, "lastSmoothedMouse", {});
        nt(this, "lastThickness");
        nt(this, "lastRotation");
        nt(this, "colorLevel");
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
            return typeof o == "string" ? o = i.points.split("|").map(c => ({
                x: parseInt(c.split(",")[0], 10),
                y: parseInt(c.split(",")[1], 10)
            })) : o = o.map(c => ({
                x: parseInt(c.x, 10),
                y: parseInt(c.y, 10)
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
            c = i - this.lastMouse.y;
        o * this.lastMouseChangeVector.x + c * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (n - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
        const m = this.smoothedMouseX - this.lastSmoothedMouse.x,
            _ = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(m * m + _ * _);
        let I;
        k !== 0 ? I = Math.PI / 2 + Math.atan2(_, m) : I = 0;
        const L = this.options.minThickness * e + this.options.thicknessFactor * k,
            $ = this.lastThickness + this.options.thicknessSmoothingFactor * (L - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = I);
        const H = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(I),
            te = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(I),
            W = Math.sin(I),
            re = Math.cos(I),
            v = this.lastThickness * H,
            D = this.lastThickness * te,
            Y = $ * W,
            le = $ * re,
            oe = .33 * k * H,
            ye = -.33 * k * te,
            f = this.lastSmoothedMouse.x + D + oe,
            Se = this.lastSmoothedMouse.y + v + ye,
            Oe = this.lastSmoothedMouse.x - D + oe,
            Pe = this.lastSmoothedMouse.y - v + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + D, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(f, Se, this.smoothedMouseX + le, this.smoothedMouseY + Y), this.canvasCTX.lineTo(this.smoothedMouseX - le, this.smoothedMouseY - Y), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - D, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * $;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + le, this.smoothedMouseY + Y), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * le, i + this.options.tipTaperFactor * Y), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * le, i - this.options.tipTaperFactor * Y), this.tipCanvasCTX.lineTo(this.smoothedMouseX - le, this.smoothedMouseY - Y), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = I, this.lastThickness = $, this.lastMouseChangeVector = {
            x: o,
            y: c
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
class AC {
    constructor(e, n = {}) {
        nt(this, "canvasSelector");
        nt(this, "canvas");
        nt(this, "ctx");
        nt(this, "options");
        nt(this, "history");
        nt(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = j(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(ac, n), this.history = [], this.layerNames.forEach(i => {
            const o = new Ku(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
            c = this.canvas.height * e;
        i.width = o, i.height = c;
        const m = i.getContext("2d");
        return n && (m.fillStyle = n, m.fillRect(0, 0, o, c)), m.drawImage(this.highlighterSketch.canvas, 0, 0, o, c), m.drawImage(this.markerSketch.canvas, 0, 0, o, c), i.toDataURL()
    }
    resetAll() {
        this.layerNames.forEach(e => {
            this[e].reset()
        }), this.update()
    }
}
const OC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    RC = Et.View.extend({
        className: "Sketchpad canvasContainer",
        template: at.template(OC),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new AC(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = j(n)[0].width / j(n).width(),
                o = n.getBoundingClientRect(),
                c = this.model.get("size"),
                m = this.sketchpad.options.thickness;
            let _ = (e.clientX - o.left) * i;
            _ = Math.min(c.width - m, Math.max(m, _));
            let k = (e.clientY - o.top) * i;
            return k = Math.min(c.height - m, Math.max(m, k)), {
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
                const o = i.target;
                this.sketchpad.setLayerImage("backgroundSketch", o)
            }, n.src = e
        },
        handleContextMenu(t) {
            t.preventDefault()
        }
    }),
    IC = `<div class="controller-content">\r
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
                drawing_empty: "You must draw something!",
                submit: "submit",
                ERROR_REJECTED_OBJECT: "That's not allowed, enter something else!"
            }
        }
    }),
    DC = Et.View.extend({
        className: "Draw",
        template: at.template(IC),
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
                    return t ? t.html ? t.html : j("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new $i({}), this.toolbarComponent = this.toolbarComponent || new TC({
                model: new ot.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new RC({
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
            const t = j("#sketchpad"),
                e = j("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(j(".controller-content").css("border-top-width"), 10) * 2 + j(".playerTopBar").innerHeight() + j("#prompt").innerHeight() + j("#toolbar").innerHeight() + parseInt(j(".canvasContainer").css("border-top-width"), 10) * 2 + j("#buttons").innerHeight() + j("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(j(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(j(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(j(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                o = e.width,
                c = e.height,
                m = 2,
                _ = Math.min(t.width() - i, o * m),
                k = Math.max(j("#controller-container").innerHeight() - n, 250),
                I = Math.min(_ / o, k / c),
                L = o * I,
                $ = c * I;
            e.style.width = `${L}px`, e.style.height = `${$}px`, window.scrollTo(0, 0)
        }
    }),
    MC = `<div>
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
    PC = si.extend({
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
    NC = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: at.template(MC),
        model: new PC,
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
                    return t ? t.html ? t.html : j("<div />").text(t.text).html() : ""
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
            this.currentEntry = null, this.shouldSubmit = !1, this.promptComponent = new $i({
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
        const o = new Ku(t, e, n);
        o.setLines(i), this.model.set("src", o.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
const VC = Et.View.extend({
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
        this.model.set("username", Rt.safeText(this.client.name), {
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
        }) : ni.hide(), t.platformId && en.setTag(`platform-${t.platformId}`)
    },
    async update() {
        return null
    },
    caughtError(t) {
        throw t
    },
    onAttach() {
        this.update().catch(this.caughtError), j(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
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
        pi.setAsViewed(0)
    },
    showScreen(t, e) {
        const n = j(t);
        return this.activeScreen && t === this.activeScreen || (this.activeScreen && (j(this.activeScreen).fadeOut("fast", () => {}), j(this.activeScreen).show(), j(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
            e && e()
        }), this.activeScreen = t, this.onResize()), !1
    },
    notify() {
        kt.vibrate()
    },
    onRoomWasDestroyed() {
        en.remove("roomCode"), en.remove("reconnect"), kt.show("error", {
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
        const t = j("#player").outerHeight(!0) || 0,
            e = ni.isVisible ? j("#slide-in-banner").outerHeight(!0) : 0,
            n = j(window).width(),
            i = j(window).height() - t;
        j(`.${this.getOption("appTag")}-page`).css("height", i - e), j(`.${this.getOption("appTag")}-page`).attr("height", i - e), j(`.${this.getOption("appTag")}-page`).css("top", t), j(`.${this.getOption("appTag")}-page`).css("width", n), j(`.${this.getOption("appTag")}-page`).attr("width", n)
    }
});
class $C {
    constructor(e) {
        nt(this, "topNode");
        this.topNode = e
    }
    reset() {
        this.nodeStack = [this.topNode], this.resetNode(this.topNode), this.topNode.e.show()
    }
    resetNode(e) {
        e.e.hide(), e.branches && e.branches.forEach(n => this.resetNode(n.node))
    }
    input(e) {
        if (e === "back") {
            if (this.nodeStack.length <= 1) return;
            this.nodeStack.pop().e.hide(), this.nodeStack[this.nodeStack.length - 1].e.show();
            return
        }
        const n = this.nodeStack[this.nodeStack.length - 1];
        !n.branches || n.branches.forEach(i => {
            if (i.input === e) {
                this.nodeStack[this.nodeStack.length - 1].e.hide();
                const c = i.node;
                c.e.show(), this.nodeStack.push(c)
            }
        })
    }
}
const BC = `<div id="controller" class="state-controller controller-content">
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
    jC = si.extend({
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
    zC = Et.View.extend({
        className: "Lobby scrollable",
        template: at.template(BC),
        model: new jC,
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
            this.titleComponent = new $i({
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
                        i = this.model.get("history").find(c => n === (c.remoteContentId || c.localContentId)),
                        o = i && i.metadata ? Rt.htmlUnescape(i.metadata.title) : null;
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
            }), pi.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = j(t.currentTarget).data("action");
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
                            inputValidator: c => c ? c.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
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
                                c = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(m => ({
                                    action: "censorConfirm",
                                    html: m.name,
                                    key: m.id
                                }))];
                            o.collection.set(c), o.render(), e.listenTo(o, "childview:button:censorConfirm", e.censorPlayer)
                        }
                    });
                    else if (i === "ugc-unload") this.triggerMethod("client:message", {
                clearContentId: !0
            });
            else if (i === "ugc-report") {
                const o = "http://support.jackboxgames.com/",
                    c = this.model.get("formattedActiveContentId");
                window.open(`${o}?episodeID=${c}`, "_blank")
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
                    }), o.collection.add(e.model.get("history").map(c => ({
                        action: "activateContentId",
                        html: c.remoteContentId ? `${c.metadata.title}<br/>${c.formattedRemoteContentId}` : `${c.metadata.title}`,
                        key: c.remoteContentId || c.localContentId
                    })))), o.render(), j(".lobbyUgcInput").mask("aaa-aaaa", {
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
    UC = `<div id="image" class="logo logo-image"></div>
<div id="message" class="message"><h2 class="messageText"></h2></div>
<div id="action" class="action"></div>
<div id="artifactId" class="artifactContainer text">
    <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
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
    GC = Et.View.extend({
        className: "Logo",
        template: at.template(UC),
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : j("<div />").text(t.text).html()
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
            }), pi.setAsViewed(0)
        }
    }),
    $s = {
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
    qC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    WC = Et.View.extend({
        className: "playerTopBarView",
        template: at.template(qC),
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
    YC = `<div id="controller" class="state-controller controller-content">
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
    KC = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(YC),
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
                    return t ? t.html ? t.html : j("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : j("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new $i({
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
                        this.choicesList.children.forEach(c => {
                            c.model.get("selected") && o.push(c.getOption("index"))
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
                const c = this.choicesList.children.find(m => m.model.get("index") === o);
                return c ? c.model.get("html") || c.model.get("text") : ""
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
function lc(t, e) {
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
        e % 2 ? lc(Object(n), !0).forEach(function(i) {
            JC(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lc(Object(n)).forEach(function(i) {
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

function JC(t, e, n) {
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

function QC(t, e) {
    if (t == null) return {};
    var n = {},
        i = Object.keys(t),
        o, c;
    for (c = 0; c < i.length; c++) o = i[c], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
    return n
}

function ZC(t, e) {
    if (t == null) return {};
    var n = QC(t, e),
        i, o;
    if (Object.getOwnPropertySymbols) {
        var c = Object.getOwnPropertySymbols(t);
        for (o = 0; o < c.length; o++) i = c[o], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var ex = "1.15.0";

function ii(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    fs = ii(/Edge/i),
    cc = ii(/firefox/i),
    ss = ii(/safari/i) && !ii(/chrome/i) && !ii(/android/i),
    Ju = ii(/iP(ad|od|hone)/i),
    Qu = ii(/chrome/i) && ii(/android/i),
    Zu = {
        capture: !1,
        passive: !1
    };

function xt(t, e, n) {
    t.addEventListener(e, n, !oi && Zu)
}

function wt(t, e, n) {
    t.removeEventListener(e, n, !oi && Zu)
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

function tx(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function Bn(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && no(t, e) : no(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = tx(t))
    }
    return null
}
var uc = /\s+/g;

function En(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(uc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(uc, " ")
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

function eh(t, e, n) {
    if (t) {
        var i = t.getElementsByTagName(e),
            o = 0,
            c = i.length;
        if (n)
            for (; o < c; o++) n(i[o], o);
        return i
    }
    return []
}

function Fn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Kt(t, e, n, i, o) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var c, m, _, k, I, L, $;
        if (t !== window && t.parentNode && t !== Fn() ? (c = t.getBoundingClientRect(), m = c.top, _ = c.left, k = c.bottom, I = c.right, L = c.height, $ = c.width) : (m = 0, _ = 0, k = window.innerHeight, I = window.innerWidth, L = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (o = o || t.parentNode, !oi))
            do
                if (o && o.getBoundingClientRect && (tt(o, "transform") !== "none" || n && tt(o, "position") !== "static")) {
                    var H = o.getBoundingClientRect();
                    m -= H.top + parseInt(tt(o, "border-top-width")), _ -= H.left + parseInt(tt(o, "border-left-width")), k = m + c.height, I = _ + c.width;
                    break
                } while (o = o.parentNode);
        if (i && t !== window) {
            var te = pr(o || t),
                W = te && te.a,
                re = te && te.d;
            te && (m /= re, _ /= W, $ /= W, L /= re, k = m + L, I = _ + $)
        }
        return {
            top: m,
            left: _,
            bottom: k,
            right: I,
            width: $,
            height: L
        }
    }
}

function hc(t, e, n) {
    for (var i = di(t, !0), o = Kt(t)[e]; i;) {
        var c = Kt(i)[n],
            m = void 0;
        if (n === "top" || n === "left" ? m = o >= c : m = o <= c, !m) return i;
        if (i === Fn()) break;
        i = di(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var o = 0, c = 0, m = t.children; c < m.length;) {
        if (m[c].style.display !== "none" && m[c] !== Qe.ghost && (i || m[c] !== Qe.dragged) && Bn(m[c], n.draggable, t, !1)) {
            if (o === e) return m[c];
            o++
        }
        c++
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

function dc(t) {
    var e = 0,
        n = 0,
        i = Fn();
    if (t)
        do {
            var o = pr(t),
                c = o.a,
                m = o.d;
            e += t.scrollLeft * c, n += t.scrollTop * m
        } while (t !== i && (t = t.parentNode));
    return [e, n]
}

function nx(t, e) {
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
            var o = tt(n);
            if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return Fn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return Fn()
}

function ix(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function ha(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var os;

function th(t, e) {
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

function rx() {
    clearTimeout(os), os = void 0
}

function nh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function ih(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var _n = "Sortable" + new Date().getTime();

function sx() {
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
                            rect: Kt(o)
                        });
                        var c = zn({}, t[t.length - 1].rect);
                        if (o.thisAnimationDuration) {
                            var m = pr(o, !0);
                            m && (c.top -= m.f, c.left -= m.e)
                        }
                        o.fromRect = c
                    }
                })
            }
        },
        addAnimationState: function(i) {
            t.push(i)
        },
        removeAnimationState: function(i) {
            t.splice(nx(t, {
                target: i
            }), 1)
        },
        animateAll: function(i) {
            var o = this;
            if (!this.options.animation) {
                clearTimeout(e), typeof i == "function" && i();
                return
            }
            var c = !1,
                m = 0;
            t.forEach(function(_) {
                var k = 0,
                    I = _.target,
                    L = I.fromRect,
                    $ = Kt(I),
                    H = I.prevFromRect,
                    te = I.prevToRect,
                    W = _.rect,
                    re = pr(I, !0);
                re && ($.top -= re.f, $.left -= re.e), I.toRect = $, I.thisAnimationDuration && ha(H, $) && !ha(L, $) && (W.top - $.top) / (W.left - $.left) === (L.top - $.top) / (L.left - $.left) && (k = ax(W, H, te, o.options)), ha($, L) || (I.prevFromRect = L, I.prevToRect = $, k || (k = o.options.animation), o.animate(I, W, $, k)), k && (c = !0, m = Math.max(m, k), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, k), I.thisAnimationDuration = k)
            }), clearTimeout(e), c ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, m) : typeof i == "function" && i(), t = []
        },
        animate: function(i, o, c, m) {
            if (m) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var _ = pr(this.el),
                    k = _ && _.a,
                    I = _ && _.d,
                    L = (o.left - c.left) / (k || 1),
                    $ = (o.top - c.top) / (I || 1);
                i.animatingX = !!L, i.animatingY = !!$, tt(i, "transform", "translate3d(" + L + "px," + $ + "px,0)"), this.forRepaintDummy = ox(i), tt(i, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, m)
            }
        }
    }
}

function ox(t) {
    return t.offsetWidth
}

function ax(t, e, n, i) {
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
            var c = e + "Global";
            rr.forEach(function(m) {
                !n[m.pluginName] || (n[m.pluginName][c] && n[m.pluginName][c](zn({
                    sortable: n
                }, i)), n.options[m.pluginName] && n[m.pluginName][e] && n[m.pluginName][e](zn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, o) {
            rr.forEach(function(_) {
                var k = _.pluginName;
                if (!(!e.options[k] && !_.initializeByDefault)) {
                    var I = new _(e, n, e.options);
                    I.sortable = e, I.options = e.options, e[k] = I, ri(i, I.defaults)
                }
            });
            for (var c in e.options)
                if (!!e.options.hasOwnProperty(c)) {
                    var m = this.modifyOption(e, c, e.options[c]);
                    typeof m < "u" && (e.options[c] = m)
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
            return rr.forEach(function(c) {
                !e[c.pluginName] || c.optionListeners && typeof c.optionListeners[n] == "function" && (o = c.optionListeners[n].call(e[c.pluginName], i))
            }), o
        }
    };

function lx(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        o = t.targetEl,
        c = t.cloneEl,
        m = t.toEl,
        _ = t.fromEl,
        k = t.oldIndex,
        I = t.newIndex,
        L = t.oldDraggableIndex,
        $ = t.newDraggableIndex,
        H = t.originalEvent,
        te = t.putSortable,
        W = t.extraEventProperties;
    if (e = e || n && n[_n], !!e) {
        var re, v = e.options,
            D = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = m || n, re.from = _ || n, re.item = o || n, re.clone = c, re.oldIndex = k, re.newIndex = I, re.oldDraggableIndex = L, re.newDraggableIndex = $, re.originalEvent = H, re.pullMode = te ? te.lastPutMode : void 0;
        var Y = zn(zn({}, W), ps.getEventProperties(i, e));
        for (var le in Y) re[le] = Y[le];
        n && n.dispatchEvent(re), v[D] && v[D].call(e, re)
    }
}
var cx = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            o = i.evt,
            c = ZC(i, cx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: jt,
            ghostEl: ut,
            rootEl: Nt,
            nextEl: Li,
            lastDownEl: qs,
            cloneEl: $t,
            cloneHidden: ui,
            dragStarted: Qr,
            putSortable: tn,
            activeSortable: Qe.active,
            originalEvent: o,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: Sn,
            newDraggableIndex: ci,
            hideGhostForTarget: ah,
            unhideGhostForTarget: lh,
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
                    originalEvent: o
                })
            }
        }, c))
    };

function gn(t) {
    lx(zn({
        putSortable: tn,
        cloneEl: $t,
        targetEl: Ie,
        rootEl: Nt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: Sn,
        newDraggableIndex: ci
    }, t))
}
var Ie, jt, ut, Nt, Li, qs, $t, ui, cr, Sn, as, ci, Bs, tn, lr = !1,
    io = !1,
    ro = [],
    Oi, Mn, fa, pa, fc, pc, Qr, sr, ls, cs = !1,
    js = !1,
    Ws, ln, ga = [],
    La = !1,
    so = [],
    wo = typeof document < "u",
    Fs = Ju,
    gc = fs || oi ? "cssFloat" : "float",
    ux = wo && !Qu && !Ju && "draggable" in document.createElement("div"),
    rh = function() {
        if (!!wo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    sh = function(e, n) {
        var i = tt(e),
            o = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            c = yr(e, 0, n),
            m = yr(e, 1, n),
            _ = c && tt(c),
            k = m && tt(m),
            I = _ && parseInt(_.marginLeft) + parseInt(_.marginRight) + Kt(c).width,
            L = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Kt(m).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (c && _.float && _.float !== "none") {
            var $ = _.float === "left" ? "left" : "right";
            return m && (k.clear === "both" || k.clear === $) ? "vertical" : "horizontal"
        }
        return c && (_.display === "block" || _.display === "flex" || _.display === "table" || _.display === "grid" || I >= o && i[gc] === "none" || m && i[gc] === "none" && I + L > o) ? "vertical" : "horizontal"
    },
    hx = function(e, n, i) {
        var o = i ? e.left : e.top,
            c = i ? e.right : e.bottom,
            m = i ? e.width : e.height,
            _ = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return o === _ || c === k || o + m / 2 === _ + I / 2
    },
    dx = function(e, n) {
        var i;
        return ro.some(function(o) {
            var c = o[_n].options.emptyInsertThreshold;
            if (!(!c || ul(o))) {
                var m = Kt(o),
                    _ = e >= m.left - c && e <= m.right + c,
                    k = n >= m.top - c && n <= m.bottom + c;
                if (_ && k) return i = o
            }
        }), i
    },
    oh = function(e) {
        function n(c, m) {
            return function(_, k, I, L) {
                var $ = _.options.group.name && k.options.group.name && _.options.group.name === k.options.group.name;
                if (c == null && (m || $)) return !0;
                if (c == null || c === !1) return !1;
                if (m && c === "clone") return c;
                if (typeof c == "function") return n(c(_, k, I, L), m)(_, k, I, L);
                var H = (m ? _ : k).options.group.name;
                return c === !0 || typeof c == "string" && c === H || c.join && c.indexOf(H) > -1
            }
        }
        var i = {},
            o = e.group;
        (!o || Gs(o) != "object") && (o = {
            name: o
        }), i.name = o.name, i.checkPull = n(o.pull, !0), i.checkPut = n(o.put), i.revertClone = o.revertClone, e.group = i
    },
    ah = function() {
        !rh && ut && tt(ut, "display", "none")
    },
    lh = function() {
        !rh && ut && tt(ut, "display", "")
    };
wo && !Qu && document.addEventListener("click", function(t) {
    if (io) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), io = !1, !1
}, !0);
var Ri = function(e) {
        if (Ie) {
            e = e.touches ? e.touches[0] : e;
            var n = dx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var o in e) e.hasOwnProperty(o) && (i[o] = e[o]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[_n]._onDragOver(i)
            }
        }
    },
    fx = function(e) {
        Ie && Ie.parentNode[_n]._isOutsideThisEl(e.target)
    };

function Qe(t, e) {
    if (!(t && t.nodeType && t.nodeType === 1)) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t, this.options = e = ri({}, e), t[_n] = this;
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
            return sh(t, this.options)
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
        supportPointer: Qe.supportPointer !== !1 && "PointerEvent" in window && !ss,
        emptyInsertThreshold: 5
    };
    ps.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    oh(e);
    for (var o in this) o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : ux, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), ro.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ri(this, sx())
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
                c = o.preventOnFilter,
                m = e.type,
                _ = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (_ || e).target,
                I = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                L = o.filter;
            if (Cx(i), !Ie && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || o.disabled) && !I.isContentEditable && !(!this.nativeDraggable && ss && k && k.tagName.toUpperCase() === "SELECT") && (k = Bn(k, o.draggable, i, !1), !(k && k.animated) && qs !== k)) {
                if (cr = On(k), as = On(k, o.draggable), typeof L == "function") {
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
                        }), c && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (L && (L = L.split(",").some(function($) {
                        if ($ = Bn(I, $.trim(), i, !1), $) return gn({
                            sortable: n,
                            rootEl: $,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), wn("filter", n, {
                            evt: e
                        }), !0
                    }), L)) {
                    c && e.cancelable && e.preventDefault();
                    return
                }
                o.handle && !Bn(I, o.handle, i, !1) || this._prepareDragStart(e, _, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var o = this,
            c = o.el,
            m = o.options,
            _ = c.ownerDocument,
            k;
        if (i && !Ie && i.parentNode === c) {
            var I = Kt(i);
            if (Nt = c, Ie = i, jt = Ie.parentNode, Li = Ie.nextSibling, qs = i, Bs = m.group, Qe.dragged = Ie, Oi = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, fc = Oi.clientX - I.left, pc = Oi.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", o, {
                            evt: e
                        }), Qe.eventCanceled) {
                        o._onDrop();
                        return
                    }
                    o._disableDelayedDragEvents(), !cc && o.nativeDraggable && (Ie.draggable = !0), o._triggerDragStart(e, n), gn({
                        sortable: o,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, m.chosenClass, !0)
                }, m.ignore.split(",").forEach(function(L) {
                    eh(Ie, L.trim(), ma)
                }), xt(_, "dragover", Ri), xt(_, "mousemove", Ri), xt(_, "touchmove", Ri), xt(_, "mouseup", o._onDrop), xt(_, "touchend", o._onDrop), xt(_, "touchcancel", o._onDrop), cc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), m.delay && (!m.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(_, "mouseup", o._disableDelayedDrag), xt(_, "touchend", o._disableDelayedDrag), xt(_, "touchcancel", o._disableDelayedDrag), xt(_, "mousemove", o._delayedDragTouchMoveHandler), xt(_, "touchmove", o._delayedDragTouchMoveHandler), m.supportPointer && xt(_, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(k, m.delay)
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
        n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? xt(document, "pointermove", this._onTouchMove) : n ? xt(document, "touchmove", this._onTouchMove) : xt(document, "mousemove", this._onTouchMove) : (xt(Ie, "dragend", this), xt(Nt, "dragstart", this._onDragStart));
        try {
            document.selection ? Ys(function() {
                document.selection.empty()
            }) : window.getSelection().removeAllRanges()
        } catch {}
    },
    _dragStarted: function(e, n) {
        if (lr = !1, Nt && Ie) {
            wn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && xt(document, "dragover", fx);
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
            this._lastX = Mn.clientX, this._lastY = Mn.clientY, ah();
            for (var e = document.elementFromPoint(Mn.clientX, Mn.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Mn.clientX, Mn.clientY), e !== n);) n = e;
            if (Ie.parentNode[_n]._isOutsideThisEl(e), n)
                do {
                    if (n[_n]) {
                        var i = void 0;
                        if (i = n[_n]._onDragOver({
                                clientX: Mn.clientX,
                                clientY: Mn.clientY,
                                target: e,
                                rootEl: n
                            }), i && !this.options.dragoverBubble) break
                    }
                    e = n
                } while (n = n.parentNode);
            lh()
        }
    },
    _onTouchMove: function(e) {
        if (Oi) {
            var n = this.options,
                i = n.fallbackTolerance,
                o = n.fallbackOffset,
                c = e.touches ? e.touches[0] : e,
                m = ut && pr(ut, !0),
                _ = ut && m && m.a,
                k = ut && m && m.d,
                I = Fs && ln && dc(ln),
                L = (c.clientX - Oi.clientX + o.x) / (_ || 1) + (I ? I[0] - ga[0] : 0) / (_ || 1),
                $ = (c.clientY - Oi.clientY + o.y) / (k || 1) + (I ? I[1] - ga[1] : 0) / (k || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                m ? (m.e += L - (fa || 0), m.f += $ - (pa || 0)) : m = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: L,
                    f: $
                };
                var H = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
                tt(ut, "webkitTransform", H), tt(ut, "mozTransform", H), tt(ut, "msTransform", H), tt(ut, "transform", H), fa = L, pa = $, Mn = c
            }
            e.cancelable && e.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!ut) {
            var e = this.options.fallbackOnBody ? document.body : Nt,
                n = Kt(Ie, !0, Fs, !0, e),
                i = this.options;
            if (Fs) {
                for (ln = e; tt(ln, "position") === "static" && tt(ln, "transform") === "none" && ln !== document;) ln = ln.parentNode;
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = Fn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = Fn(), ga = dc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", Fs ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", fc / parseInt(ut.style.width) * 100 + "% " + pc / parseInt(ut.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(e, n) {
        var i = this,
            o = e.dataTransfer,
            c = i.options;
        if (wn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        wn("setupClone", this), Qe.eventCanceled || ($t = ih(Ie), $t.removeAttribute("id"), $t.draggable = !1, $t.style["will-change"] = "", this._hideClone(), En($t, this.options.chosenClass, !1), Qe.clone = $t), i.cloneId = Ys(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Nt.insertBefore($t, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, c.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), o && (o.effectAllowed = "move", c.setData && c.setData.call(i, o, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Ys(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Qr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            o, c, m, _ = this.options,
            k = _.group,
            I = Qe.active,
            L = Bs === k,
            $ = _.sort,
            H = tn || I,
            te, W = this,
            re = !1;
        if (La) return;

        function v(we, he) {
            wn(we, W, zn({
                evt: e,
                isOwner: L,
                axis: te ? "vertical" : "horizontal",
                revert: m,
                dragRect: o,
                targetRect: c,
                canSort: $,
                fromSortable: H,
                target: i,
                completed: Y,
                onMove: function(Te, Be) {
                    return zs(Nt, n, Ie, o, Te, Kt(Te), e, Be)
                },
                changed: le
            }, he))
        }

        function D() {
            v("dragOverAnimationCapture"), W.captureAnimationState(), W !== H && H.captureAnimationState()
        }

        function Y(we) {
            return v("dragOverCompleted", {
                insertion: we
            }), we && (L ? I._hideClone() : I._showClone(W), W !== H && (En(Ie, tn ? tn.options.ghostClass : I.options.ghostClass, !1), En(Ie, _.ghostClass, !0)), tn !== W && W !== Qe.active ? tn = W : W === Qe.active && tn && (tn = null), H === W && (W._ignoreWhileAnimating = i), W.animateAll(function() {
                v("dragOverAnimationComplete"), W._ignoreWhileAnimating = null
            }), W !== H && (H.animateAll(), H._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (sr = null), !_.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[_n]._isOutsideThisEl(e.target), !we && Ri(e)), !_.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function le() {
            Sn = On(Ie), ci = On(Ie, _.draggable), gn({
                sortable: W,
                name: "change",
                toEl: n,
                newIndex: Sn,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = Bn(i, _.draggable, n, !0), v("dragOver"), Qe.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || W._ignoreWhileAnimating === i) return Y(!1);
        if (io = !1, I && !_.disabled && (L ? $ || (m = jt !== Nt) : tn === this || (this.lastPutMode = Bs.checkPull(this, I, Ie, e)) && k.checkPut(this, I, Ie, e))) {
            if (te = this._getDirection(e, i) === "vertical", o = Kt(Ie), v("dragOverValid"), Qe.eventCanceled) return re;
            if (m) return jt = Nt, D(), this._hideClone(), v("revert"), Qe.eventCanceled || (Li ? Nt.insertBefore(Ie, Li) : Nt.appendChild(Ie)), Y(!0);
            var oe = ul(n, _.draggable);
            if (!oe || vx(e, te, this) && !oe.animated) {
                if (oe === Ie) return Y(!1);
                if (oe && n === e.target && (i = oe), i && (c = Kt(i)), zs(Nt, n, Ie, o, i, c, e, !!i) !== !1) return D(), oe && oe.nextSibling ? n.insertBefore(Ie, oe.nextSibling) : n.appendChild(Ie), jt = n, le(), Y(!0)
            } else if (oe && mx(e, te, this)) {
                var ye = yr(n, 0, _, !0);
                if (ye === Ie) return Y(!1);
                if (i = ye, c = Kt(i), zs(Nt, n, Ie, o, i, c, e, !1) !== !1) return D(), n.insertBefore(Ie, ye), jt = n, le(), Y(!0)
            } else if (i.parentNode === n) {
                c = Kt(i);
                var f = 0,
                    Se, Oe = Ie.parentNode !== n,
                    Pe = !hx(Ie.animated && Ie.toRect || o, i.animated && i.toRect || c, te),
                    lt = te ? "top" : "left",
                    $e = hc(i, "top", "top") || hc(Ie, "top", "top"),
                    Q = $e ? $e.scrollTop : void 0;
                sr !== i && (Se = c[lt], cs = !1, js = !Pe && _.invertSwap || Oe), f = yx(e, i, c, te, Pe ? 1 : _.swapThreshold, _.invertedSwapThreshold == null ? _.swapThreshold : _.invertedSwapThreshold, js, sr === i);
                var Fe;
                if (f !== 0) {
                    var q = On(Ie);
                    do q -= f, Fe = jt.children[q]; while (Fe && (tt(Fe, "display") === "none" || Fe === ut))
                }
                if (f === 0 || Fe === i) return Y(!1);
                sr = i, ls = f;
                var ae = i.nextElementSibling,
                    Ae = !1;
                Ae = f === 1;
                var be = zs(Nt, n, Ie, o, i, c, e, Ae);
                if (be !== !1) return (be === 1 || be === -1) && (Ae = be === 1), La = !0, setTimeout(gx, 30), D(), Ae && !ae ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? ae : i), $e && nh($e, 0, Q - $e.scrollTop), jt = Ie.parentNode, Se !== void 0 && !js && (Ws = Math.abs(Se - Kt(i)[lt])), le(), Y(!0)
            }
            if (n.contains(Ie)) return Y(!1)
        }
        return !1
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        wt(document, "mousemove", this._onTouchMove), wt(document, "touchmove", this._onTouchMove), wt(document, "pointermove", this._onTouchMove), wt(document, "dragover", Ri), wt(document, "mousemove", Ri), wt(document, "touchmove", Ri)
    },
    _offUpEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._onDrop), wt(e, "touchend", this._onDrop), wt(e, "pointerup", this._onDrop), wt(e, "touchcancel", this._onDrop), wt(document, "selectstart", this)
    },
    _onDrop: function(e) {
        var n = this.el,
            i = this.options;
        if (Sn = On(Ie), ci = On(Ie, i.draggable), wn("drop", this, {
                evt: e
            }), jt = Ie && Ie.parentNode, Sn = On(Ie), ci = On(Ie, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, js = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Da(this.cloneId), Da(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Nt === jt || tn && tn.lastPutMode !== "clone") && $t && $t.parentNode && $t.parentNode.removeChild($t), Ie && (this.nativeDraggable && wt(Ie, "dragend", this), ma(Ie), Ie.style["will-change"] = "", Qr && !lr && En(Ie, tn ? tn.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: jt,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Nt !== jt ? (Sn >= 0 && (gn({
            rootEl: jt,
            name: "add",
            toEl: jt,
            fromEl: Nt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "remove",
            toEl: jt,
            originalEvent: e
        }), gn({
            rootEl: jt,
            name: "sort",
            toEl: jt,
            fromEl: Nt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: jt,
            originalEvent: e
        })), tn && tn.save()) : Sn !== cr && Sn >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: jt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: jt,
            originalEvent: e
        })), Qe.active && ((Sn == null || Sn === -1) && (Sn = cr, ci = as), gn({
            sortable: this,
            name: "end",
            toEl: jt,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        wn("nulling", this), Nt = Ie = jt = ut = Li = $t = qs = ui = Oi = Mn = Qr = Sn = ci = cr = as = sr = ls = tn = Bs = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
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
                Ie && (this._onDragOver(e), px(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, o = 0, c = i.length, m = this.options; o < c; o++) n = i[o], Bn(n, m.draggable, this.el, !1) && e.push(n.getAttribute(m.dataIdAttr) || bx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            o = this.el;
        this.toArray().forEach(function(c, m) {
            var _ = o.children[m];
            Bn(_, this.options.draggable, o, !1) && (i[c] = _)
        }, this), n && this.captureAnimationState(), e.forEach(function(c) {
            i[c] && (o.removeChild(i[c]), o.appendChild(i[c]))
        }), n && this.animateAll()
    },
    save: function() {
        var e = this.options.store;
        e && e.set && e.set(this)
    },
    closest: function(e, n) {
        return Bn(e, n || this.options.draggable, this.el, !1)
    },
    option: function(e, n) {
        var i = this.options;
        if (n === void 0) return i[e];
        var o = ps.modifyOption(this, e, n);
        typeof o < "u" ? i[e] = o : i[e] = n, e === "group" && oh(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[_n] = null, wt(e, "mousedown", this._onTapStart), wt(e, "touchstart", this._onTapStart), wt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (wt(e, "dragover", this), wt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ui) {
            if (wn("hideClone", this), Qe.eventCanceled) return;
            tt($t, "display", "none"), this.options.removeCloneOnHide && $t.parentNode && $t.parentNode.removeChild($t), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (wn("showClone", this), Qe.eventCanceled) return;
            Ie.parentNode == Nt && !this.options.group.revertClone ? Nt.insertBefore($t, Ie) : Li ? Nt.insertBefore($t, Li) : Nt.appendChild($t), this.options.group.revertClone && this.animate(Ie, $t), tt($t, "display", ""), ui = !1
        }
    }
};

function px(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, o, c, m, _) {
    var k, I = t[_n],
        L = I.options.onMove,
        $;
    return window.CustomEvent && !oi && !fs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = o || e, k.relatedRect = c || Kt(e), k.willInsertAfter = _, k.originalEvent = m, t.dispatchEvent(k), L && ($ = L.call(I, k, m)), $
}

function ma(t) {
    t.draggable = !1
}

function gx() {
    La = !1
}

function mx(t, e, n) {
    var i = Kt(yr(n.el, 0, n.options, !0)),
        o = 10;
    return e ? t.clientX < i.left - o || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - o || t.clientY < i.bottom && t.clientX < i.left
}

function vx(t, e, n) {
    var i = Kt(ul(n.el, n.options.draggable)),
        o = 10;
    return e ? t.clientX > i.right + o || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + o
}

function yx(t, e, n, i, o, c, m, _) {
    var k = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        L = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        H = !1;
    if (!m) {
        if (_ && Ws < I * o) {
            if (!cs && (ls === 1 ? k > L + I * c / 2 : k < $ - I * c / 2) && (cs = !0), cs) H = !0;
            else if (ls === 1 ? k < L + Ws : k > $ - Ws) return -ls
        } else if (k > L + I * (1 - o) / 2 && k < $ - I * (1 - o) / 2) return wx(e)
    }
    return H = H || m, H && (k < L + I * c / 2 || k > $ - I * c / 2) ? k > L + I / 2 ? 1 : -1 : 0
}

function wx(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function bx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function Cx(t) {
    so.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && so.push(i)
    }
}

function Ys(t) {
    return setTimeout(t, 0)
}

function Da(t) {
    return clearTimeout(t)
}
wo && xt(document, "touchmove", function(t) {
    (Qe.active || lr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: xt,
    off: wt,
    css: tt,
    find: eh,
    is: function(e, n) {
        return !!Bn(e, n, e, !1)
    },
    extend: ix,
    throttle: th,
    closest: Bn,
    toggleClass: En,
    clone: ih,
    index: On,
    nextTick: Ys,
    cancelNextTick: Da,
    detectDirection: sh,
    getChild: yr
};
Qe.get = function(t) {
    return t[_n]
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
Qe.version = ex;
var Wt = [],
    Zr, Ma, Pa = !1,
    va, ya, oo, es;

function xx() {
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
            this.sortable.nativeDraggable ? wt(document, "dragover", this._handleAutoScroll) : (wt(document, "pointermove", this._handleFallbackAutoScroll), wt(document, "touchmove", this._handleFallbackAutoScroll), wt(document, "mousemove", this._handleFallbackAutoScroll)), mc(), Xs(), rx()
        },
        nulling: function() {
            oo = Ma = Zr = Pa = es = va = ya = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var o = this,
                c = (n.touches ? n.touches[0] : n).clientX,
                m = (n.touches ? n.touches[0] : n).clientY,
                _ = document.elementFromPoint(c, m);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                wa(n, this.options, _, i);
                var k = di(_, !0);
                Pa && (!es || c !== va || m !== ya) && (es && mc(), es = setInterval(function() {
                    var I = di(document.elementFromPoint(c, m), !0);
                    I !== k && (k = I, Xs()), wa(n, o.options, I, i)
                }, 10), va = c, ya = m)
            } else {
                if (!this.options.bubbleScroll || di(_, !0) === Fn()) {
                    Xs();
                    return
                }
                wa(n, this.options, di(_, !1), !1)
            }
        }
    }, ri(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}

function Xs() {
    Wt.forEach(function(t) {
        clearInterval(t.pid)
    }), Wt = []
}

function mc() {
    clearInterval(es)
}
var wa = th(function(t, e, n, i) {
        if (!!e.scroll) {
            var o = (t.touches ? t.touches[0] : t).clientX,
                c = (t.touches ? t.touches[0] : t).clientY,
                m = e.scrollSensitivity,
                _ = e.scrollSpeed,
                k = Fn(),
                I = !1,
                L;
            Ma !== n && (Ma = n, Xs(), Zr = e.scroll, L = e.scrollFn, Zr === !0 && (Zr = di(n, !0)));
            var $ = 0,
                H = Zr;
            do {
                var te = H,
                    W = Kt(te),
                    re = W.top,
                    v = W.bottom,
                    D = W.left,
                    Y = W.right,
                    le = W.width,
                    oe = W.height,
                    ye = void 0,
                    f = void 0,
                    Se = te.scrollWidth,
                    Oe = te.scrollHeight,
                    Pe = tt(te),
                    lt = te.scrollLeft,
                    $e = te.scrollTop;
                te === k ? (ye = le < Se && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), f = oe < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ye = le < Se && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), f = oe < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var Q = ye && (Math.abs(Y - o) <= m && lt + le < Se) - (Math.abs(D - o) <= m && !!lt),
                    Fe = f && (Math.abs(v - c) <= m && $e + oe < Oe) - (Math.abs(re - c) <= m && !!$e);
                if (!Wt[$])
                    for (var q = 0; q <= $; q++) Wt[q] || (Wt[q] = {});
                (Wt[$].vx != Q || Wt[$].vy != Fe || Wt[$].el !== te) && (Wt[$].el = te, Wt[$].vx = Q, Wt[$].vy = Fe, clearInterval(Wt[$].pid), (Q != 0 || Fe != 0) && (I = !0, Wt[$].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var ae = Wt[this.layer].vy ? Wt[this.layer].vy * _ : 0,
                        Ae = Wt[this.layer].vx ? Wt[this.layer].vx * _ : 0;
                    typeof L == "function" && L.call(Qe.dragged.parentNode[_n], Ae, ae, t, oo, Wt[this.layer].el) !== "continue" || nh(Wt[this.layer].el, Ae, ae)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && H !== k && (H = di(H, !1)));
            Pa = I
        }
    }, 30),
    ch = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            o = e.dragEl,
            c = e.activeSortable,
            m = e.dispatchSortableEvent,
            _ = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var I = i || c;
            _();
            var L = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                $ = document.elementFromPoint(L.clientX, L.clientY);
            k(), I && !I.el.contains($) && (m("spill"), this.onSpill({
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
    drop: ch
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
    drop: ch
};
ri(dl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new xx);
Qe.mount(dl, hl);
const Ex = `<div id="controller" class="state-controller controller-content">\r
    <div id="prompt" class="prompt text"></div>\r
    <div class="error text-danger"></div>\r
    <div id="choicesRegion"></div>\r
    <div id="chosen" class="chosen text"></div>\r
    <div class="makeSingleChoiceDone">\r
        <span class="doneText"></span>\r
    </div>\r
</div>`,
    Sx = si.extend({
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
    vc = Et.CollectionView.extend({
        tagName: "div",
        className: "sortable-collection",
        childView: _x,
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    kx = Et.View.extend({
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
            }), this.lockInView = this.lockInView || new qu({
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
    Tx = Et.View.extend({
        className: "Sortable scrollable",
        template: at.template(Ex),
        model: new Sx,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new $i({
                model: new ot.Model
            }), this.sorterView = this.sorterView || new kx({}), this.listenTo(this.model, "change", this.update, this)
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
    Ax = `<div id="controller" class="state-controller controller-content">
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
    Ox = si.extend({
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
    Rx = Et.View.extend({
        className: "UGC scrollable",
        template: at.template(Ax),
        model: new Ox,
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
                    let c = `${t}/${e}`;
                    return o < t && (c += ` (${t-o} ${i})`), c
                }
            }
        },
        initialize(t) {
            this.client = t.client, this.promptComponent = this.promptComponent || new $i({
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
                const i = Rt.htmlUnescape(n.metadata.title);
                let o = Rt.safeText(i);
                return o += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: o
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = at.extend({}, n);
                i.text = Rt.htmlUnescape(n.text);
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
            const e = j(t.currentTarget).data("action");
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
    Ix = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
    Lx = Et.View.extend({
        className: "RadialView",
        template: at.template(Ix),
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
                            c = 207 * (1 - n);
                        return e += `stroke-dasharray:${o} ${c};`, e += `transform:rotate(${-360*n-90}deg);`, e
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
                const c = 32 / o;
                n.x *= c, n.y *= c
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
    Px = Et.View.extend({
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
                c = Math.floor(o / 10);
            this.triggerMethod("client:message", {
                action: "fire",
                type: "fire",
                weapon: i,
                vector: t
            }), this.model.get("isAudience") && (this.audienceShot = c * 10, this.shotId = this.model.get("shotId") || 0, this.model.setUpdate({
                lockedIn: !0,
                shotId: this.shotId
            }))
        },
        initialize(t) {
            this.client = t.client, this.radialComponent = new Lx({
                model: new ot.Model({
                    isTouching: !1,
                    angle: 0,
                    vector: {
                        x: 0,
                        y: 0
                    },
                    touchBuffer: 5
                })
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), j(window).on("mousemove", this.move.bind(this)), j(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), j(window).off("mousemove"), j(window).off("mouseup")
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
            const t = j(".radial"),
                e = j("#status-bar").outerHeight() + j(".playerTopBar").outerHeight() + j("#control-panel").outerHeight() + 10,
                n = j(".controller-page").width(),
                i = window.innerHeight - e,
                o = Math.max(150, Math.min(n, i));
            t.css("width", `${o}px`), t.css("height", `${o}px`), window.scrollTo(0, 0)
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
Et.View.extend({
    client: null,
    template: at.template(Nx),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new WC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new ot.Model({});
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
                return this.setLayout(DC);
            case "EnterSingleText":
                return this.setLayout(NC);
            case "Lobby":
                return this.setLayout(zC);
            case "Logo":
                return this.setLayout(GC);
            case "MakeSingleChoice":
                return this.setLayout(KC);
            case "Shoot":
                return this.setLayout(Px);
            case "Sortable":
                return this.setLayout(Tx);
            case "Camera":
                return this.setLayout(xC);
            case "UGC":
                return this.setLayout(Rx);
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
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && en.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: at.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && pi.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), j("#textDescriptions").append(j("<p />").text(e.text)))
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
        const t = j(window).width(),
            e = j(window).height();
        j(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        en.remove("roomCode"), en.remove("reconnect"), kt.show("error", {
            titleText: $s[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: $s[this.locale].STRING_ERROR_SERVER_ROOM_DESTROYED,
            willClose: () => {
                window.location.reload(!0)
            }
        })
    },
    onDisconnected() {
        kt.show("error", {
            titleText: $s[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
            text: $s[this.locale].STRING_ERROR_SERVER_ROOM_DISCONNECTED,
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
var uh = {
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

        function c(k, I) {
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
                $, H;
            if (I instanceof RegExp) {
                $ = {};
                for (H in L) L.hasOwnProperty(H) && I.test(H) && ($[H] = L[H])
            } else $ = L[I] || (L[I] = []);
            return $
        }, i.flattenListeners = function(I) {
            var L = [],
                $;
            for ($ = 0; $ < I.length; $ += 1) L.push(I[$].listener);
            return L
        }, i.getListenersAsObject = function(I) {
            var L = this.getListeners(I),
                $;
            return L instanceof Array && ($ = {}, $[I] = L), $ || L
        };

        function _(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? _(k.listener) : !1
        }
        i.addListener = function(I, L) {
            if (!_(L)) throw new TypeError("listener must be a function");
            var $ = this.getListenersAsObject(I),
                H = typeof L == "object",
                te;
            for (te in $) $.hasOwnProperty(te) && c($[te], L) === -1 && $[te].push(H ? L : {
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
            var $ = this.getListenersAsObject(I),
                H, te;
            for (te in $) $.hasOwnProperty(te) && (H = c($[te], L), H !== -1 && $[te].splice(H, 1));
            return this
        }, i.off = m("removeListener"), i.addListeners = function(I, L) {
            return this.manipulateListeners(!1, I, L)
        }, i.removeListeners = function(I, L) {
            return this.manipulateListeners(!0, I, L)
        }, i.manipulateListeners = function(I, L, $) {
            var H, te, W = I ? this.removeListener : this.addListener,
                re = I ? this.removeListeners : this.addListeners;
            if (typeof L == "object" && !(L instanceof RegExp))
                for (H in L) L.hasOwnProperty(H) && (te = L[H]) && (typeof te == "function" ? W.call(this, H, te) : re.call(this, H, te));
            else
                for (H = $.length; H--;) W.call(this, L, $[H]);
            return this
        }, i.removeEvent = function(I) {
            var L = typeof I,
                $ = this._getEvents(),
                H;
            if (L === "string") delete $[I];
            else if (I instanceof RegExp)
                for (H in $) $.hasOwnProperty(H) && I.test(H) && delete $[H];
            else delete this._events;
            return this
        }, i.removeAllListeners = m("removeEvent"), i.emitEvent = function(I, L) {
            var $ = this.getListenersAsObject(I),
                H, te, W, re, v;
            for (re in $)
                if ($.hasOwnProperty(re))
                    for (H = $[re].slice(0), W = 0; W < H.length; W++) te = H[W], te.once === !0 && this.removeListener(I, te.listener), v = te.listener.apply(this, L || []), v === this._getOnceReturnValue() && this.removeListener(I, te.listener);
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
            return e.EventEmitter = o, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : vt || {})
})(uh);
const Vx = uh.exports;
class $x extends Vx {
    constructor(n, i) {
        super();
        nt(this, "wsClient");
        nt(this, "name");
        nt(this, "id");
        nt(this, "userId");
        nt(this, "uuid");
        nt(this, "joinAs", "player");
        nt(this, "room");
        nt(this, "roles", {});
        nt(this, "code", null);
        nt(this, "host");
        nt(this, "onPlayerWelcome", n => {
            this.id = n.id, this.roles = n.profile ? n.profile.roles : {}, n.here && (this.host = Object.values(n.here).find(({
                roles: i
            }) => i.host)), this.emit("client:didJoinRoom", {
                appId: this.room.appId,
                appTag: this.room.appTag,
                id: n.id,
                reconnect: `${n.id}:${this.joinAs}:${n.secret}`
            })
        });
        nt(this, "parseEntities", () => {
            if (!this.wsClient) return {};
            const n = this.wsClient.entities,
                i = {};
            return Object.keys(n).forEach(o => {
                const c = n[o];
                o === "room" || o === "bc:room" || o === "roomBlob" ? (c instanceof Ii.TextEntity && (i.room = c.toBlob()), c instanceof Ii.ObjectEntity && (i.room = c.val)) : o === "player" || o === `player:${this.id}` || o === `bc:customer:${this.userId}` ? (c instanceof Ii.TextEntity && (i.player = c.toBlob()), c instanceof Ii.ObjectEntity && (i.player = c.val)) : o === "audiencePlayer" && (c instanceof Ii.TextEntity && (i.audiencePlayer = c.toBlob()), c instanceof Ii.ObjectEntity && (i.audiencePlayer = c.val))
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
        let c = n.text;
        try {
            c = JSON.parse(c)
        } catch {
            nc(`[Ecast Client] Unhandled text notification: ${n.key} ${o}`);
            return
        }
        const m = c;
        i === "room" ? this.emit("client:entityDidChange", i, m) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", m) : i === "bc:room" ? this.emit("client:entityDidChange", "room", m) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", m) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", m) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
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
        var o, c;
        if (!!this.isReady) try {
            if (n === "SendMessageToRoomOwner") {
                const m = (c = (o = this.host) == null ? void 0 : o.id) != null ? c : "1";
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
const Bx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(j)
})(function(t) {
    var e, n = navigator.userAgent,
        i = /iphone/i.test(n),
        o = /chrome/i.test(n),
        c = /android/i.test(n);
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
            var k, I, L, $, H, te, W, re;
            if (!m && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return _ = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, _), I = t.mask.definitions, L = [], $ = W = m.length, H = null, t.each(m.split(""), function(D, Y) {
                Y == "?" ? (W--, $ = D) : I[Y] ? (L.push(new RegExp(I[Y])), H === null && (H = L.length - 1), $ > D && (te = L.length - 1)) : L.push(null)
            }), this.trigger("unmask").each(function() {
                function D() {
                    if (_.completed) {
                        for (var we = H; te >= we; we++)
                            if (L[we] && ae[we] === Y(we)) return;
                        _.completed.call(q)
                    }
                }

                function Y(we) {
                    return _.placeholder.charAt(we < _.placeholder.length ? we : 0)
                }

                function le(we) {
                    for (; ++we < W && !L[we];);
                    return we
                }

                function oe(we) {
                    for (; --we >= 0 && !L[we];);
                    return we
                }

                function ye(we, he) {
                    var _e, Te;
                    if (!(0 > we)) {
                        for (_e = we, Te = le(he); W > _e; _e++)
                            if (L[_e]) {
                                if (!(W > Te && L[_e].test(ae[Te]))) break;
                                ae[_e] = ae[Te], ae[Te] = Y(Te), Te = le(Te)
                            } Q(), q.caret(Math.max(H, we))
                    }
                }

                function f(we) {
                    var he, _e, Te, Be;
                    for (he = we, _e = Y(we); W > he; he++)
                        if (L[he]) {
                            if (Te = le(he), Be = ae[he], ae[he] = _e, !(W > Te && L[Te].test(Be))) break;
                            _e = Be
                        }
                }

                function Se() {
                    var we = q.val(),
                        he = q.caret();
                    if (re && re.length && re.length > we.length) {
                        for (Fe(!0); he.begin > 0 && !L[he.begin - 1];) he.begin--;
                        if (he.begin === 0)
                            for (; he.begin < H && !L[he.begin];) he.begin++;
                        q.caret(he.begin, he.begin)
                    } else {
                        for (Fe(!0); he.begin < W && !L[he.begin];) he.begin++;
                        q.caret(he.begin, he.begin)
                    }
                    D()
                }

                function Oe() {
                    Fe(), q.val() != be && q.change()
                }

                function Pe(we) {
                    if (!q.prop("readonly")) {
                        var he, _e, Te, Be = we.which || we.keyCode;
                        re = q.val(), Be === 8 || Be === 46 || i && Be === 127 ? (he = q.caret(), _e = he.begin, Te = he.end, Te - _e === 0 && (_e = Be !== 46 ? oe(_e) : Te = le(_e - 1), Te = Be === 46 ? le(Te) : Te), $e(_e, Te), ye(_e, Te - 1), we.preventDefault()) : Be === 13 ? Oe.call(this, we) : Be === 27 && (q.val(be), q.caret(0, Fe()), we.preventDefault())
                    }
                }

                function lt(we) {
                    if (!q.prop("readonly")) {
                        var he, _e, Te, Be = we.which || we.keyCode,
                            Ke = q.caret();
                        if (!(we.ctrlKey || we.altKey || we.metaKey || 32 > Be) && Be && Be !== 13) {
                            if (Ke.end - Ke.begin !== 0 && ($e(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), he = le(Ke.begin - 1), W > he && (_e = String.fromCharCode(Be), L[he].test(_e))) {
                                if (f(he), ae[he] = _e, Q(), Te = le(he), c) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, q, Te)()
                                    };
                                    setTimeout(dt, 0)
                                } else q.caret(Te);
                                Ke.begin <= te && D()
                            }
                            we.preventDefault()
                        }
                    }
                }

                function $e(we, he) {
                    var _e;
                    for (_e = we; he > _e && W > _e; _e++) L[_e] && (ae[_e] = Y(_e))
                }

                function Q() {
                    q.val(ae.join(""))
                }

                function Fe(we) {
                    var he, _e, Te, Be = q.val(),
                        Ke = -1;
                    for (he = 0, Te = 0; W > he; he++)
                        if (L[he]) {
                            for (ae[he] = Y(he); Te++ < Be.length;)
                                if (_e = Be.charAt(Te - 1), L[he].test(_e)) {
                                    ae[he] = _e, Ke = he;
                                    break
                                } if (Te > Be.length) {
                                $e(he + 1, W);
                                break
                            }
                        } else ae[he] === Be.charAt(Te) && Te++, $ > he && (Ke = he);
                    return we ? Q() : $ > Ke + 1 ? _.autoclear || ae.join("") === Ae ? (q.val() && q.val(""), $e(0, W)) : Q() : (Q(), q.val(q.val().substring(0, Ke + 1))), $ ? he : H
                }
                var q = t(this),
                    ae = t.map(m.split(""), function(we, he) {
                        return we != "?" ? I[we] ? Y(he) : we : void 0
                    }),
                    Ae = ae.join(""),
                    be = q.val();
                q.data(t.mask.dataName, function() {
                    return t.map(ae, function(we, he) {
                        return L[he] && we != Y(he) ? we : null
                    }).join("")
                }), q.one("unmask", function() {
                    q.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!q.prop("readonly")) {
                        clearTimeout(e);
                        var we;
                        be = q.val(), we = Fe(), e = setTimeout(function() {
                            q.get(0) === document.activeElement && (Q(), we == m.replace("?", "").length ? q.caret(0, we) : q.caret(we))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    q.prop("readonly") || setTimeout(function() {
                        var we = Fe(!0);
                        q.caret(we), D()
                    }, 0)
                }), o && c && q.off("input.mask").on("input.mask", Se), Fe()
            })
        }
    })
});
window.$ = j;
window.jQuery = j;
const jx = Et.View.extend({
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
            connect: n => (e = new Ii.WSClient(n), e.connect()),
            mount: n => {
                const i = new $x(e, n);
                let o = new Et.Application({
                    region: "#app",
                    onStart() {
                        const c = new jx;
                        this.showView(c), c.showView(t.MainView, {
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
    zx = function(e, n, i, o) {
        this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.lines = [], this.canvas = e, this.context = n, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = i, this.heightDiff = o, this.thickness = 6, this.color = "#000000", typeof this.canvas.style.msTouchAction < "u" && (this.canvas.style.msTouchAction = "none");
        const c = this,
            m = function() {
                let H = window.innerWidth - c.widthDiff,
                    te = window.innerHeight - c.heightDiff;
                te < 25 && (te = 25, H = te * (window.innerWidth / window.innerHeight));
                const W = H / te,
                    re = c.canvas.width / c.canvas.height;
                re < W ? (c.canvas.style.height = `${te}px`, c.canvas.style.width = `${te*re}px`) : (c.canvas.style.width = `${H}px`, c.canvas.style.height = `${H*(1/re)}px`), window.scrollTo(0, 1)
            };
        window.onresize = m;
        const _ = function(H) {
                if (H.type === "touchmove") H.preventDefault();
                else if (H.type === "touchend") {
                    c.isDrawing && H.preventDefault(), c[H.type]();
                    return
                }
                const te = c.canvas.getBoundingClientRect(),
                    W = {
                        x: H.targetTouches[0].pageX - te.left,
                        y: H.targetTouches[0].pageY - te.top
                    };
                W.x *= c.canvas.width / parseInt(c.canvas.style.width, 10), W.y *= c.canvas.height / parseInt(c.canvas.style.height, 10), c[H.type](W)
            },
            k = function(H) {
                if (H.type === "mousemove") H.preventDefault();
                else if (H.type === "mouseup") {
                    c[H.type]();
                    return
                }
                const te = c.canvas.getBoundingClientRect(),
                    W = {
                        x: H.clientX - te.left,
                        y: H.clientY - te.top
                    };
                W.x *= c.canvas.width / parseInt(c.canvas.style.width, 10), W.y *= c.canvas.height / parseInt(c.canvas.style.height, 10), c[H.type](W)
            };
        this.canvas.addEventListener("touchstart", _, !1), this.canvas.addEventListener("touchmove", _, !1), document.addEventListener("touchend", _, !1), this.canvas.addEventListener("mousedown", k, !1), this.canvas.addEventListener("mousemove", k, !1), document.addEventListener("mouseup", k, !1);
        const I = function(H, te, W) {
                H.strokeStyle = c.color, H.lineCap = "round", H.lineJoin = "round", H.miterLimit = c.thickness, H.lineWidth = c.thickness, H.beginPath(), H.arc(te, W, .01, 0, 2 * Math.PI, !0), H.stroke(), H.moveTo(te, W)
            },
            L = function(H, te, W) {
                H.lineTo(te, W), H.stroke()
            };
        this.getLines = function() {
            return this.lines
        }, this.getBase64Image = function() {
            const H = document.createElement("canvas");
            H.width = c.canvas.width, H.height = c.canvas.height;
            const te = H.getContext("2d");
            c.context.strokeStyle = c.color, c.context.lineCap = "round", c.context.lineJoin = "round", c.context.lineWidth = 6;
            for (let re = 0; re < c.lines.length; re++) {
                const v = c.lines[re];
                for (let D = 0; D < v.points.length; D++) {
                    const Y = v.points[D];
                    D === 0 ? I(te, Y.x, Y.y) : L(te, Y.x, Y.y)
                }
            }
            let W = H.toDataURL("image/png");
            return W = W.replace("data:image/png;base64,", ""), W
        }, this.start = function(H) {
            !c.isEnabled || (I(c.context, H.x, H.y), c.isDrawing = !0, c.isClean = !1, c.lines.push({
                thickness: c.thickness,
                color: c.color,
                points: [H]
            }))
        }, this.move = function(H) {
            if (c.isDrawing) {
                const te = {
                        x: parseInt(H.x, 10),
                        y: parseInt(H.y, 10)
                    },
                    re = c.lines[c.lines.length - 1].points;
                if (re.length > 0) {
                    const v = re[re.length - 1];
                    if (v.x === te.x && v.y === te.y) return
                }
                re.push(te), L(c.context, H.x, H.y)
            }
        }, this.end = function() {
            c.isDrawing && (c.isDrawing = !1)
        }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, m()
    },
    Ux = `<div id="page-drawful" class="page drawful">
    <div id="player">
        <span class="drawful-text"><%=username%></span>
    </div>

    <div id="drawful-preload" class="drawful-preload"></div>

    <div id="game" class="game pt-pageholder">    
        <div class="pt-page-off state-lobby drawful2-page">
            <div class="container">
                <br />
				
				<div id="lobby-main-menu">
					<span id="drawful-lobby-text" class='drawful-text drawful-text-box'></span><br />
					<form class="pure-form">                    
						<button type="button" id="drawful-startgame" class="lobby-button button-drawful button-xlarge pure-button pure-input-1">everybody's in</button>
						<button type="button" id="drawful-stopcountdown" class="lobby-button button-drawful button-xlarge pure-button pure-input-1">cancel</button>
						<button type="button" id="drawful-sameplayers" class="lobby-button button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">same players</button>
						<button type="button" id="drawful-newplayers" class="lobby-button button-drawful button-xlarge pure-button pure-input-1 drawful-endbuttons">new players</button>    
					</form>
					<br>
					<br>
					<div class="drawful-start-menu">
                        <button type="button" id="drawful-lobby-menu-ugc" class="menu-button lobby-button button-drawful button-drawful-black button-xlarge pure-button pure-input-1 drawful-text">custom episodes</button><br>
    					<button type="button" id="drawful-lobby-menu-censor" class="menu-button lobby-button button-drawful button-drawful-black button-xlarge pure-button pure-input-1 drawful-text">censor menu</button><br>
                    </div>
                    <div id="drawful-lobby-postgame" class="drawful-images">
                        <a target="_blank" class="gallery-link" href=""><div class='galleryImage'></div></a>
                    </div>
                </div>
				
                <div id="lobby-ugc">
					<div id="lobby-ugc-error"></div>
					<button type="button" class="drawful-lobby-menu-back button-drawful button-drawful-black button-xlarge pure-button pure-input-1">back</button><br>
                    <div id="lobby-ugc-enter" class="lobby-ugc-option">
                        <form class="">
                        <div class="row">
                            <div class="col-xs-12">
                                <p id="lobby-ugc-help">to load a custom episode, go to "make your own" or enter a 7-letter episode id</p>
                                <p class="drawful-text-box">load an episode by id:</p>
                            </div>
                            <div class="col-xs-12">
                                <div class="input-group input-group-lg drawful-box-border">
                                    <input id="lobby-ugc-input" type="text" class="capitalized jbg-input form-control" placeholder="???-????">
                                    <span class="input-group-btn">
                                        <button type="submit" id="lobby-ugc-submit" class="btn">submit</button>
                                    </span>
                                </div>
                            </div>
                        </div>
						<small class="help text-danger">warning : user generated content is not rated.</small>
                        </form>
						
                        <div class="drawful-ugc-previous">
                            <p>or select an episode:</p>
    						<!-- <div id="lobby-ugc-history"></div> -->
                            <table id="lobby-ugc-history" class="drawful-list"></table>
                        </div>
                    </div>
                    
                    <div id="lobby-ugc-choices" class="lobby-ugc-option">
                        <div class="drawful-text-box" id="lobby-ugc-choices-content-id"></div>
                        <button type="button" id="lobby-ugc-clear" class="button-drawful button-drawful-black button-xlarge pure-button">unload</button><br>
						<button type="button" id="lobby-ugc-report" class="button-drawful button-drawful-black button-xlarge pure-button">report</button>
						<button type="button" id="lobby-ugc-view-author" class="button-drawful button-xlarge pure-button">view author</button>
                    </div>
                </div>
                
				<div id="lobby-censor">
					<button type="button" class="drawful-lobby-menu-back button-drawful button-drawful-black button-xlarge pure-button pure-input-1">back</button><br>
					<p style="display:none;" class="drawful-player-censor-dialog drawful-confirm-dialog">
                        <span class="drawful-text drawful-text-box text-danger">This will remove this player's name, avatar, entries and drawings. Are you sure?</span>
                        <button class="drawful-player-censor-confirm button-drawful button-drawful-black">Yes</button>
                        <button class="drawful-player-censor-cancel button-drawful">No</button>
                    </p>
					<table id="lobby-censor-players" class="drawful-list">
					</table>
                    <div class="drawful-text">hit <span class="censor-button-image censor-button-black"></span> to censor player for rest of the game, removing their answers, name and avatar (it's kind of intense)</div>
				</div>
				
            </div>
        </div>

        <div class="pt-page-off state-nothing drawful2-page">
            <div id="drawful-nothing-skip-round-container">
                <button type="button" class="drawful-skip-round-button button-drawful button-xlarge pure-button pure-input-1">skip!</button>
            </div>
            <div class="logo-image" style=""></div>
        </div>
    
        <div class="pt-page-off state-round drawful2-page">
            <div class="container">
                <div class="round-main"><br /><br /><span class='drawful-text round-text'></span><br /></div>
            </div>
        </div>

        <div class="pt-page-off state-drawing-sent drawful2-page">
            <div class="container">
                <br /><span id="drawful-drawing-received" class='drawful-text'></span><br />
                <span class='drawful-text'>thanks for your drawing</span><br />
            </div>
        </div>

        <div class="pt-page-off state-drawing-done drawful2-page">
            <div class="container">
                <br /><span class='drawful-text'>drawing time is over!</span><br />
            </div>
        </div>        

        <div class="pt-page-off state-enterlie drawful2-page">
            <div class="container">
                
                <br /><span class="drawful-text author-text"></span><br />

                <div id="drawful-submit-alert" class="alert alert-info">Alert message goes here</div>
                <form class="pure-form" id="drawful-enterlie-field">
                    <div class="">
                        <input id="drawful-lie-input" name="drawful-lie" class="lowercase pure-input-1 jbg-input" type="text" maxlength="45" placeholder="enter a title" autocapitalize="off" autocorrect="off" autocomplete="off">
                    </div>
                    <div class=" right">
                        <button type="submit" id="drawful-submitlie" class="button-drawful button-drawful-black button-xlarge pure-button  right">send</button>
                        <div id="drawful-submitlie-loading" class="button-drawful-loading  right" style="display:none; width: 110px; height: 48px; margin-top:10px;" ></div>
                    </div>
                </form>
                <div id="drawful-enterlie-skip-round-container">
                    <button type="button" class="drawful-skip-round-button button-drawful button-xlarge pure-button pure-input-1">skip!</button>
                </div>
            </div>
        </div>    

        <div class="pt-page-off state-chooselie drawful2-page">
            <div class="container">
                <p style="display:none;" class="drawful-chooselie-censor-dialog drawful-confirm-dialog">
                    <span class="drawful-text drawful-text-box text-danger">this will remove this player's entry and all future entries and future drawings. are you sure?</span>
                    <button class="drawful-chooselie-censor-confirm button-drawful button-drawful-black">Yes</button>
                    <button class="drawful-chooselie-censor-cancel button-drawful">No</button>
                </p>
                <br /><span id="chooselie-text" class='drawful-text'></span><br />
                <table id="drawful-chooselie" class="drawful-list" style="width:100%;">
                </table>                        
            </div>
        </div>

        <div class="pt-page-off state-chooselikes drawful2-page">
            <div class="container">
                <br /><span id="chooselikes-choice" class='drawful-text'></span><br />
                <span id="chooselikes-text" class='drawful-text'></span><br />
                <p style="display:none;" class="drawful-chooselie-censor-dialog drawful-confirm-dialog">
                    <span class="drawful-text drawful-text-box text-danger">this will remove this player's entry and all future entries and future drawings. are you sure?</span>
                    <button class="drawful-chooselie-censor-confirm button-drawful button-drawful-black">Yes</button>
                    <button class="drawful-chooselie-censor-cancel button-drawful">No</button>
                </p>
                <table id="drawful-chooselikes" class="drawful-list drawful-list-no-border" style="width:100%; display:inline-block;">
                </table>
            </div>
        </div>        

        <div class="pt-page-off state-liereceived drawful2-page">
            <div class="container">
                <br /><span class='drawful-text'>title entered!<br />waiting for other players.</span><br />
            </div>
        </div>

        <div class="pt-page-off state-lyingdone drawful2-page">
            <div class="container">
                <br /><span class='drawful-text'>done!</span><br />
            </div>
        </div>        

        <div class="pt-page-off state-notchoosing drawful2-page">
            <div class="container">
                <br /><span class='drawful-text'></span><br />
            </div>
        </div>

        <div class="pt-page-off state-draw drawful2-page">
            <!-- <div class="container"> -->
                <span id="drawful-prompt" class='prompt drawful-text'>please draw:</span><br />
                <span id="drawful-instructions" class='instructions drawful-text'>a picture of yourself!</span><br />

                <div class="sketchpad-container">
                    <canvas class="sketchpad" width='240' height='300' style='background-color:white;'>
                        Sorry, your browser is not supported.
                    </canvas>
                </div>
                <div class="row button-bar">
                    
                    
                    <div id="drawful-color-buttons" class="col-xs-5 col-xs-offset-1"></div>
                    <div class="col-xs-5">
                        <form class="pure-form">
                            
                            <button type="submit" id="drawful-submitdrawing" class="submit-drawing button-drawful button-drawful-black button-large col-xs-12" style="margin-top: 0px;">send</button>
                            <div id="drawful-submitdrawing-loading" style="display:none;" class="button-drawful-loading"></div>
                        </form>
                    </div>
                </div>
            <!-- </div> -->
        </div>
        
		<div class="pt-page-off state-audience-chose drawful2-page">
            <div class="container">
                <br /><span class='drawful-text'>thank you for your input, audience member!</span><br />
            </div>
        </div>
		
        <div class="pt-page-off drawful2-page" id="state-ugc">
            <div id="ugc-submit-dialog" style="display:none;" class="container">
                <div class="drawful-text-box">By sharing content, you agree to our <a href="http://www.jackboxgames.com/terms-of-service/" target="_blank">Terms of service</a></div>
                <button id="ugc-submit-confirm" class="button-drawful">agree and share</button><br />
                <button id="ugc-submit-cancel" class="button-drawful">back to menu</button>
            </div>
            <div id="ugc-container" class="container">
                <div id="ugc-episode-name"></div>
    			<div id="ugc-new" class="ugc-option">
    				<button type="button" id="ugc-new-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">create a new episode</button>
    			</div>

                <p class="ugc-option drawful-text-box ugc-load">previous episodes:</p>
    			<table id="ugc-load" class="ugc-option drawful-list">
    			</table>
    			
                <!--<div id="ugc-screen-main" class="ugc-screen">-->
    				<div id="ugc-text"></div>
    				<div id="ugc-no-actions-text"></div>
    				<div id="ugc-title" class="ugc-option">
    					<p class="drawful-text-box">
                            <span class='drawful-text'>first things first, enter a name for the episode that will contain all your prompts and hit create.</span>
                        </p>
                        <form class="pure-form">
                            <div class="">
                                <input id="ugc-title-input" class="lowercase ugc-input pure-input-1 jbg-input" type="text" placeholder="" autocapitalize="off" autocorrect="off" autocomplete="off"/>
                            </div>
                            <div class="right">
                                <button type="submit" id="ugc-title-button" name="ugc-title-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button  right">create</button>
                                <button type="button" id="ugc-exit-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button left">back to episodes</button>
                            </div>
                                
                            
                        </form>
                    </div>
                    <div id="ugc-toggle-visibility" class="ugc-option">
                        <span class="drawful-text">tap to show/hide prompts</span><br/>
                        <div class="drawful-text-box">
                            <div id="ugc-toggle-visibility-button-controller" class="ugc-toggle-visibility-button drawful-image-controller ugc-toggle-visibility-button pure-u-1-2" data-target="controller"></div>
                            <div id="ugc-toggle-visibility-button-screen" class="ugc-toggle-visibility-button drawful-image-screen ugc-toggle-visibility-button-screen pure-u-1-2" data-target="screen"></div>
                        </div>
                    </div>
                    
                        <form class="pure-form">
                            <div class="">
                                <input id="ugc-add-input" class="lowercase ugc-input pure-input-1 jbg-input ugc-option ugc-add" type="text" placeholder="enter a prompt" autocapitalize="off" autocorrect="off" autocomplete="off"/>
                            </div>
                            <div class="ugc-option ugc-add">
                                <button type="submit" id="ugc-add-button" name="ugc-add-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button right">add prompt</button>
                            </div>
                            <div id="ugc-close" class="ugc-option">
                                <button type="button" id="ugc-close-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button left">close</button>
                            </div>
                            <div id="ugc-save" class="ugc-option">
                                <button type="save" id="ugc-save-button" class="ugc-form-button button-drawful button-drawful-black button-xlarge pure-button left">done</button>
                            </div>
                        </form>
                    
                    

                    <table id="ugc-remove" class="ugc-option drawful-list">
                    </table>
                <!--</div>-->
                
                <!--<div id="ugc-screen-confirm" class="ugc-screen">-->
                    <div id="ugc-unlock" class="ugc-option">
                        <button type="button" id="ugc-unlock-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">edit</button>
                    </div>
                    
                    <div id="ugc-save" class="ugc-option">
                        <button type="save" id="ugc-save-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">save</button>
                    </div>
                <!--</div>-->
                
                <!--<div id="ugc-screen-post-save" class="ugc-screen">-->
    			    <div id="ugc-submit" class="ugc-option">
                        <button type="button" id="ugc-submit-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">publish</button>
                    </div>
                    <div id="ugc-play" class="ugc-option">
                        <button type="button" id="ugc-play-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">play</button>
                    </div>
                    <div id="ugc-delete" class="ugc-option">
                        <button type="button" id="ugc-delete-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1 ugc-remove-content-button">delete</button>
                        <div id="ugc-remove-content-dialog" style="display:none;" class="drawful-confirm-dialog">
                            <span class="drawful-text drawful-text-box text-danger">Are you sure you want to delete this episode?</span>
                            <button id="ugc-remove-content-confirm" class="button-drawful button-drawful-black">Yes</button>
                            <button id="ugc-remove-content-cancel" class="button-drawful">No</button>
                        </div>

                    </div>

                    <div id="ugc-exit" class="ugc-option">
                        <button type="button" id="ugc-exit-button" class="button-drawful button-drawful-black button-xlarge pure-button pure-input-1">back to episodes</button>
                    </div>
                <!--</div>-->
            </div>
        </div>

        <div class="pt-page-off state-audience drawful2-page" id="state-wait">
            <p id="audience-welcome" class="drawful-text drawful-text-box">welcome to the audience</p>
        </div>
    </div>
</div>
`;
const Hx = VC.extend({
    template: at.template(Ux),
    currentCanvas: void 0,
    prevRoomState: "",
    audienceMessages: ["welcome to the audience<br />it\u2019s fun!", "welcome to the audience<br />you\u2019ll get to participate in just a moment", "welcome to the audience<br />the fun is coming any second", "welcome to the audience<br />we\u2019ve been waiting for you", "welcome to the audience<br />not quite as fun as owning the game, but more fun than sitting alone doing nothing", "welcome to the audience<br />the more the merrier", "welcome to the audience<br />one of us, one of us", "welcome to the audience<br />please don\u2019t unwrap any hard candy during the show", "welcome to the audience<br />it\u2019s our time down here", "welcome to the audience<br />you like to watch, eh?", "welcome to the audience<br />this is one of those slow moments for the audience but it\u2019ll pick up", "welcome to the audience<br />please don\u2019t organize and form a coup", "welcome to the audience<br />make yourself at home", "welcome to the audience<br />we hope you like judging people", "welcome to the audience<br />take a deep breath, the action will start soon", "welcome to the audience<br />enjoy it", "welcome to the audience<br />of everyone in the audience, you\u2019re our favorite", "welcome to the audience<br />dreams do come true!", "welcome to the audience<br />the second most fun way to play this game!", "welcome to the audience<br />we wrote this extra sentence here just for you", "welcome to the audience<br />please find your seat", "welcome to the audience<br />soooooo... what\u2019s new with you?"],
    authorMessages: ["You drew this.<br />Take a moment to reflect.", "You drew this.<br />Maybe consult a doctor?", "You drew this.<br />This is what you've become.", "You drew this.<br />This is your design.", "You drew this.<br />There's nowhere to go but up!", "You drew this.<br />Relax.", "You drew this.<br />Enjoy this moment.", "You drew this.<br />It's too late to change it.", "You drew this.<br />There's no way to blame someone else.", "You drew this.<br />And your life is forever changed.", "You drew this.<br />Yay?", "You drew this.<br />No comment.", "You drew this.<br />It could be worse.", "You drew this.<br />You're to blame.", "You drew this.<br />So...yeah...", "You drew this.<br />Don't worry, it'll be over soon.", "You drew this.<br />Feel as good about that as you can.", "You drew this.<br />It is art.", "You drew this.<br />Thank you?", "You drew this.<br />High five!", "You drew this.<br />Maybe take a quick nap.", "You drew this.<br />Be cool about it.", "You drew this.<br />This too shall pass.", "You drew this.<br />Deal with it.", "You drew this.<br />Confront the consequences.", "You drew this.<br />It is done.", "You drew this?<br />It's okay. It's going to be okay.", "You drew this.<br />But you still deserve love, probably.", "You drew this.<br />Thank you.", "You drew this.<br />Creation is its own gift.", "You drew this.<br />Ha ha ha ha ha.", "You drew this.<br />And I love you for it.", "You drew this.<br />Weird.", "You drew this.<br />I hope it works out for you.", "You drew this.<br />Have you ever considered that you might be the only person in the universe? And everything else...everyone, every thing, is just in your mind? Have you?", "You drew this.<br />And fun was had by all.", "You drew this.<br />It will not be fully appreciated until after you are dead.", "You drew this.<br />But, you probably know that already.", "You drew this.<br />You.", "You drew this.<br />Only history can judge you.", "You drew this.<br />Enjoy it.", "You drew this.<br />It is good."],
    events: {
        "click .drawful-lobby-menu-back": "lobbyMenuBack",
        "click #drawful-lobby-menu-ugc": "lobbyMenuUgc",
        "click #drawful-lobby-menu-censor": "lobbyMenuCensor",
        "click #drawful-startgame": "startGame",
        "click #drawful-stopcountdown": "stopCountdown",
        "click #drawful-sameplayers": "newGameSamePlayers",
        "click #drawful-newplayers": "newGameNewPlayers",
        "click .drawful-player-censor-button": "censorPlayer",
        "click .drawful-player-censor-confirm": "censorPlayerConfirm",
        "click .drawful-player-censor-cancel": "censorPlayerCancel",
        "click #lobby-ugc-submit": "lobbyUgcSubmit",
        "click .drawful-history-button": "lobbyUgcHistory",
        "click #lobby-ugc-clear": "lobbyUgcClear",
        "click #lobby-ugc-report": "lobbyUgcReport",
        "click #lobby-ugc-view-author": "lobbyUgcViewAuthor",
        "click .drawful-change-color": "changeColor",
        "click #drawful-submitdrawing": "submitDrawing",
        "click .drawful-skip-round-button": "submitSkipRound",
        "click #drawful-submitlie": "submitLie",
        "click .drawful-suggestion-button": "chooseSuggestion",
        "click .drawful-lie-button": "chooseLie",
        "click .drawful-censor-button": "censor",
        "click .drawful-chooselie-censor-confirm": "censorConfirm",
        "click .drawful-chooselie-censor-cancel": "censorCancel",
        "click .drawful-like-button": "toggleLike",
        "click #ugc-new-button": "ugcNew",
        "click .ugc-load-button": "ugcLoad",
        "click .ugc-remove-content-button": "ugcRemoveContent",
        "click #ugc-remove-content-confirm": "ugcRemoveContentConfirm",
        "click #ugc-remove-content-cancel": "ugcRemoveContentCancel",
        "click #ugc-close-button": "ugcClose",
        "click #ugc-title-button": "ugcTitle",
        "click #ugc-add-button": "ugcAdd",
        "click .ugc-remove-button": "ugcRemove",
        "click #ugc-clear-button": "ugcClear",
        "click .ugc-toggle-visibility-button": "ugcToggleVisibility",
        "click #ugc-save-button": "ugcSave",
        "click #ugc-submit-button": "ugcSubmit",
        "click #ugc-submit-confirm": "ugcSubmitConfirm",
        "click #ugc-submit-cancel": "ugcSubmitCancel",
        "click #ugc-unlock-button": "ugcUnlock",
        "click #ugc-play-button": "ugcPlay",
        "click #ugc-exit-button": "ugcExit"
    },
    onAttach() {
        this.lobbyMenu = new $C({
            e: j("#lobby-main-menu"),
            branches: [{
                input: "ugc",
                node: {
                    e: j("#lobby-ugc")
                }
            }, {
                input: "censor",
                node: {
                    e: j("#lobby-censor")
                }
            }]
        }), this.lobbyMenu.reset(), j(".quiplash2-button").hover(function() {
            j(this).toggleClass("quiplash2-button-hover")
        }), j("#lobby-ugc-input").mask("aaa-aaaa", {
            placeholder: "???-????"
        }), j("input").bind("input propertychange", this.validateInput.bind(this)), this.update().catch(this.catchError), j(".button-drawful").hover(function() {
            j(this).toggleClass("button-drawful-hover")
        }), j("#lobby-ugc-input").mask("aaa-aaaa", {
            placeholder: "???-????"
        });
        const t = j("#player span").html();
        j("#player span").html(t.replace("\u2026", "...")), j("input").bind("input propertychange", this.validateInput.bind(this)), this.update().catch(this.catchError)
    },
    async update() {
        const t = this.model.get("player") || {},
            e = this.model.get("room") || {},
            n = t ? t.state : "",
            i = e ? e.state : "";
        let o;
        if (t.playerColors !== void 0 && t.playerColors.length > 0 && (j("#player").css("background-color", t.playerColors[0]), j("#drawful-instructions").css("color", t.playerColors[0]), j("#chooselikes-choice").css("color", t.playerColors[0])), i === "UGC") {
            this.updateUGC(e, t);
            return
        }
        if (j(".ugc-option").hide(), n === "RoomFull") {
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
        if (t.hasPicture === !1) {
            if (this.joiningInterfaceIsUp) {
                this.onResize();
                return
            }
            this.startDrawingInterface(t.playerColors, "a picture of yourself!"), this.onResize(), this.joiningInterfaceIsUp = !0;
            return
        }
        if (this.joiningInterfaceIsUp = !1, i === "Lobby") {
            if (this.currentCanvas = void 0, this.formattedActiveContentId = e.formattedActiveContentId, this.hideLobbyButtons(), !t.isAllowedToStartGame) {
                j("#drawful-lobby-text").html("Sit back and relax!"), this.showScreen(".state-lobby"), e.lobbyState && e.lobbyState === "PostGame" && this.showPostgameDrawings(e.artifact);
                return
            }
            j(".menu-button").hide(); {
                const c = e.lobbyState;
                c === "WaitingForMore" ? j("#drawful-lobby-text").html("waiting for all players to join") : c === "CanStart" ? (j("#drawful-startgame").html("everybody's in"), j("#drawful-lobby-text").html("press this button when everybody has joined"), j("#drawful-startgame").removeClass("button-drawful-red"), j("#drawful-startgame").show()) : c === "Countdown" ? (j("#drawful-lobby-text").html("press this button to cancel game start"), j("#drawful-stopcountdown").show()) : c === "PostGame" && (j("#drawful-lobby-text").html("what do you want to do?"), j(".drawful-endbuttons").show(), this.showPostgameDrawings(e.artifact))
            }
            if (t.canDoUGC) {
                if (j(".lobby-ugc-option").hide(), e.formattedActiveContentId ? (e.isLocal ? j("#lobby-ugc-choices-content-id").html("local content loaded") : j("#lobby-ugc-choices-content-id").html(`published content loaded<br><span class="lobby-episode-id capitalize">${e.formattedActiveContentId}</span>`), j("#lobby-ugc-choices").show(), !e.isLocal && t.canReport ? j("#lobby-ugc-report").show() : j("#lobby-ugc-report").hide(), !e.isLocal && t.canViewAuthor ? j("#lobby-ugc-view-author").show() : j("#lobby-ugc-view-author").hide()) : j("#lobby-ugc-enter").show(), t.history !== void 0) {
                    j("#lobby-ugc-help").hide();
                    let c = "";
                    t.history.forEach(m => {
                        c += `<tr data-id="${m.remoteContentId?m.remoteContentId:m.localContentId}" class="drawful-history-button">`, c += `<td class="drawful-list-fill">${m.metadata.title}`, m.remoteContentId && (c += `<br><span class="lobby-episode-id capitalize">${m.formattedRemoteContentId}</span>`), c += "</td>", c += "</tr>"
                    }), j("#lobby-ugc-history").html(c)
                } else j("#lobby-ugc-help").show();
                j("#drawful-lobby-menu-ugc").show()
            }
            if (t.canCensor) {
                if (t.censorablePlayers !== void 0) {
                    let c = "";
                    t.censorablePlayers.forEach(m => {
                        c += "<tr>", c += `<td class="drawful-list-white drawful-list-fill">${m.name}</td>`, c += '<td class="drawful-list-black">', c += `<div data-censor="${Rt.htmlEscape(m.id)}" class="drawful-player-censor-button"></div>`, c += "</td>", c += "</tr>"
                    }), j("#lobby-censor-players").html(c)
                }
                j("#drawful-lobby-menu-censor").show()
            }
            t.lastUGCResult && !t.lastUGCResult.success && t.lastUGCResult.error ? j("#lobby-ugc-error").html(`<span>${t.lastUGCResult.error}</span>`) : j("#lobby-ugc-error").html(""), this.showScreen(".state-lobby")
        } else if (i === "Gameplay_Logo" || i === "Logo") this.showLogo(t.showSkip);
        else if (i === "Gameplay_Round") j(".round-text").html(`ROUND ${e.round}`), this.showScreen(".state-round");
        else if (i === "Gameplay_DrawingTime") n === "Gameplay_DrawingTime" ? t.receivedDrawing ? (j("#drawful-drawing-received").html(t.prompt), this.showScreen(".state-drawing-sent")) : this.startDrawingInterface(t.playerColors, t.prompt) : this.showLogo(!1);
        else if (i === "Gameplay_DrawingDone") this.showScreen(".state-drawing-done"), this.currentCanvas = void 0;
        else if (i === "Gameplay_EnterLie")
            if (n === "Gameplay_EnterLie") {
                if (!this.activeScreen !== ".state-enterlie" && (t.canSkipRound ? (this.setSkipButtonState(!1), j("#drawful-enterlie-skip-round-container").show()) : j("#drawful-enterlie-skip-round-container").hide(), t.isAuthor ? (j("#drawful-lie-input").hide(), j("#drawful-enterlie-field").hide(), j("#drawful-submit-alert").hide(), j("#drawful-submitlie").hide(), j(".state-enterlie .author-text").html(this.authorMessages[Math.floor(Math.random() * this.authorMessages.length)])) : (j(".state-enterlie .author-text").html(""), j("#drawful-lie-input").val(""), j("#drawful-lie-input").show(), j("#drawful-enterlie-field").show(), j("#drawful-submitlie").show(), j("#drawful-submit-alert").hide())), t.showError) {
                    const c = j("#drawful-submit-alert");
                    j("#drawful-submit-alert").html("you got too close to the real title, or entered something someone else already did!"), c.addClass("alert-info"), c.removeClass("alert-danger"), c.show()
                }
                this.enableLoadingButton("#drawful-submitlie", !0), this.showScreen(".state-enterlie")
            } else n === "Gameplay_LieReceived" ? this.showScreen(".state-liereceived") : this.showLogo(!1);
        else if (i === "Gameplay_LyingDone") this.showScreen(".state-lyingdone");
        else if (i === "Gameplay_ChooseLie") {
            const c = !!(e.choosingDone || t.chosen || t.isAuthor);
            if (this.lastLikesMode !== void 0 && this.lastLikesMode === c && this.activeScreen === ".state-audience-chose") return;
            if (c) {
                t.isAuthor ? j("#chooselikes-choice").html("") : this.client.isRole("player") ? j("#chooselikes-choice").html(t.chosen ? `you chose: ${t.chosen.isCensored?"************":t.chosen.text}` : "you didn't make a choice") : j("#chooselikes-choice").html(""), j("#chooselikes-text").html(this.client.isRole("player") ? "award bonus likes" : "award a bonus like");
                let m = "";
                for (o = 0; o < e.choices.length; o++) {
                    if (t.entry && e.choices[o].text === t.entry.text) continue;
                    const _ = t.likes ? t.likes.indexOf(e.choices[o].text) >= 0 : !1,
                        k = _ ? "button-drawful-liked" : "button-drawful-like",
                        I = _ ? "box-checked" : "box-unchecked";
                    e.choices[o].isCensored || (m += "<tr>", m += `<td data-choice="${Rt.htmlEscape(e.choices[o].text)}" class="drawful-like-button ${k}">`, m += '<div class="like-checkbox">', m += `<i class="checkbox ${I}"></i>`, m += "</div>", m += "</td>", m += `<td data-choice="${Rt.htmlEscape(e.choices[o].text)}" class="drawful-list-fill drawful-like-button ${k} text-left">${Rt.safeText(e.choices[o].text)}</td>`, t.canCensor && (m += `<td class=""><div data-censor="${Rt.htmlEscape(e.choices[o].text)}" class="drawful-censor-button censor-button-black"></div></td>`), m += "</tr>")
                }
                j("#drawful-chooselikes").html(m), this.showScreen(".state-chooselikes")
            } else {
                j("#chooselie-text").html("What's the real title?");
                let m = "";
                for (o = 0; o < e.choices.length; o++) t.entry && e.choices[o].text === t.entry.text || (e.choices[o].isCensored ? m += '<tr><td class="drawful-list-black">************</td></tr>' : (m += "<tr>", m += `<td data-choice="${Rt.htmlEscape(e.choices[o].text)}" class="drawful-list-fill drawful-lie-button drawful-list-button">${Rt.safeText(e.choices[o].text)}</td>`, t.canCensor && (m += `<td class="drawful-list-black"><div data-censor="${Rt.htmlEscape(e.choices[o].text)}" class="drawful-censor-button"></div></td>`), m += "</tr>"));
                j("#drawful-chooselie").html(m), this.showScreen(".state-chooselie")
            }
            this.lastLikesMode = c
        } else this.client.isRole("audience") && (j("#audience-welcome").html(this.audienceMessages[Math.floor(Math.random() * this.audienceMessages.length)]), this.showScreen(".state-audience"));
        this.prevRoomState = i, this.onResize()
    },
    hideLobbyButtons() {
        j(".lobby-button").hide()
    },
    async showPostgameDrawings(t) {
        if (t && t.success && t.rootId) {
            let e = "games.jackbox.tv";
            t.rootId.indexOf("test") !== -1 && (e = "games-test.jackbox.tv");
            const n = "DrawfulGame";
            t.categoryId = n;
            const i = `https://${e}/artifact/${n}/${t.artifactId}/`,
                o = new URL("main/standalone/drawful2/assets/8423241d.jpg", self.location).href;
            this.$el.find(".gallery-link").attr("href", i);
            const c = `<img src="${o}" />`;
            this.$el.find(".gallery-link").html(c), pi.add(t, this.getOption("appTag"))
        } else j("#drawful-lobby-postgame").html("")
    },
    startDrawingInterface(t, e) {
        this.enableLoadingButton("#drawful-submitdrawing", !0), this.showScreen(".state-draw"), j(".drawful .state-draw .instructions").html(e);
        let n = '<div class="row">';
        for (let m = 0; m < t.length; m++) n += `<button data-color="${t[m]}" class="col-xs-1 drawful-change-color button-color button-large pure-button pure-input-1-8 color-${(m+1).toString()}" style="background-color:${t[m]}"></button>`;
        n += "</div>", j("#drawful-color-buttons").html(n), j(".button-color").first().addClass("selected");
        const i = this.$(".drawful .sketchpad")[0],
            o = i.getContext("2d"),
            c = j("#player").outerHeight(!0) + j("#drawful-instructions").outerHeight(!0) + j("#drawful-prompt").outerHeight(!0) + j("#drawful-submitdrawing").outerHeight(!0) + j("#drawful-color-buttons").outerHeight(!0) + 10;
        this.currentCanvas = new zx(i, o, 30, c), this.currentCanvas.color = t[0]
    },
    lobbyMenuBack() {
        this.lobbyMenu.input("back")
    },
    lobbyMenuUgc() {
        this.lobbyMenu.input("ugc")
    },
    lobbyMenuCensor() {
        this.lobbyMenu.input("censor")
    },
    startGame(t) {
        const e = this.model.get("room") || {},
            n = j(t.target);
        return n.hasClass("button-drawful-red") ? (this.client.send("SendMessageToRoomOwner", {
            startGame: !0
        }), n.removeClass("button-drawful-red")) : e.allPlayersHavePortraits ? (this.client.send("SendMessageToRoomOwner", {
            startGame: !0
        }), n.removeClass("button-drawful-red")) : (n.html("Are you sure?"), n.addClass("button-drawful-red"), t.stopPropagation()), !1
    },
    stopCountdown() {
        return this.client.send("SendMessageToRoomOwner", {
            cancelStartGame: !0
        }), !1
    },
    enableLoadingButton(t, e) {
        e ? (j(t).show(), j(`${t}-loading`).hide()) : (j(t).hide(), j(`${t}-loading`).show())
    },
    activateContentId(t) {
        return t.length === 0 || this.client.send("SendMessageToRoomOwner", {
            activateContentId: !0,
            contentId: t
        }), !1
    },
    lobbyUgcSubmit() {
        let t = this.sanitize(j("#lobby-ugc-input").val());
        return t = t.replace(/[^A-Za-z]/gi, ""), t = t.toUpperCase(), this.activateContentId(t), !1
    },
    lobbyUgcHistory(t) {
        const e = j(t.currentTarget).data("id");
        this.activateContentId(e)
    },
    lobbyUgcClear() {
        return this.client.send("SendMessageToRoomOwner", {
            clearContentId: !0
        }), !1
    },
    lobbyUgcReport() {
        const t = "http://support.jackboxgames.com/",
            e = this.model.get("room").formattedActiveContentId;
        return window.open(`${t}?episodeID=${e}`, "_blank"), !1
    },
    lobbyUgcViewAuthor() {
        return this.client.send("SendMessageToRoomOwner", {
            viewAuthor: !0
        }), !1
    },
    changeColor(t) {
        !this.currentCanvas || (this.currentCanvas.color = j(t.currentTarget).data("color"), j(".button-color").removeClass("selected"), j(t.currentTarget).addClass("selected"), j("#player").css("background-color", this.currentCanvas.color), j("#drawful-instructions").css("color", this.currentCanvas.color), j("#chooselikes-choice").css("color", this.currentCanvas.color))
    },
    submitDrawing() {
        if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
        this.enableLoadingButton("#drawful-submitdrawing", !1);
        const t = this.joiningInterfaceIsUp ? {
            setPlayerPicture: !0,
            pictureLines: this.currentCanvas.getLines()
        } : {
            drawingLines: this.currentCanvas.getLines()
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    setSkipButtonState(t) {
        t ? (j(".drawful-skip-round-button").addClass("button-drawful-red"), j(".drawful-skip-round-button").html("are you sure?")) : (j(".drawful-skip-round-button").removeClass("button-drawful-red"), j(".drawful-skip-round-button").html("skip (this is offensive)"))
    },
    submitSkipRound(t) {
        j(t.target).hasClass("button-drawful-red") ? this.client.send("SendMessageToRoomOwner", {
            skipRound: !0
        }) : (this.setSkipButtonState(!0), t.stopPropagation())
    },
    submitLie() {
        let t = this.sanitize(j("#drawful-lie-input").val()).toLowerCase();
        if (t = t.replace(/\s\s+/g, " ").trim(), t.length === 0) {
            const e = j("#drawful-submit-alert");
            return j("#drawful-submit-alert").html("you can't enter nothing!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
        }
        return this.enableLoadingButton("#drawful-submitlie", !1), this.client.send("SendMessageToRoomOwner", {
            lieEntered: t,
            usedSuggestion: !1
        }), !1
    },
    chooseLie(t) {
        const e = j(t.target).data("choice");
        return this.client.isRole("player") ? this.client.send("SendMessageToRoomOwner", {
            choice: e
        }) : this.client.isRole("audience") && (this.client.sessionSend("vote", "Drawful 2 Vote", {
            type: "vote",
            vote: e
        }), this.showScreen(".state-audience-chose")), !1
    },
    censor(t) {
        if (!this.client.isRole("player")) return !1;
        const e = j(t.target),
            n = e.data("censor");
        return this.cancelConfirm(), j(".drawful-chooselie-censor-dialog").show(), j(".drawful-chooselie-censor-confirm").data("censor", n), j(e).closest("tr").children().addClass("button-drawful-red"), j(e).closest("button.drawful-like-button").addClass("button-drawful-red"), !1
    },
    censorConfirm(t) {
        const n = j(t.target).data("censor");
        return this.client.send("SendMessageToRoomOwner", {
            censor: n
        }), this.cancelConfirm(), !1
    },
    censorCancel() {
        return j(".drawful-chooselie-censor-confirm").data("censor", ""), this.cancelConfirm(), !1
    },
    toggleLike(t) {
        const e = j(t.currentTarget).data("choice");
        if (this.client.isRole("player")) {
            const o = ((this.model.get("player") || {}).likes || []).includes(e);
            o || (j(t.currentTarget).closest("tr").find(".drawful-like-button").removeClass(o ? "button-drawful-liked" : "button-drawful-like"), j(t.currentTarget).closest("tr").find(".drawful-like-button").addClass(o ? "button-drawful-like" : "button-drawful-liked"), j(t.currentTarget).closest("tr").find(".like-checkbox").html(`<i class="checkbox ${o?"box-unchecked":"box-checked"}"></i>`), this.client.send("SendMessageToRoomOwner", {
                like: e
            }))
        } else this.client.isRole("audience") && (this.client.sessionSend("vote", "Drawful 2 Vote", {
            type: "vote",
            vote: e
        }), this.showScreen(".state-audience-chose"));
        return !1
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
    censorPlayer(t) {
        if (!this.client.isRole("player")) return;
        const e = j(t.target),
            n = e.data("censor");
        j(".drawful-player-censor-confirm").data("censor", n), j(".drawful-player-censor-dialog").show(), j(e).closest("tr").children().addClass("button-drawful-red")
    },
    censorPlayerConfirm(t) {
        const n = j(t.target).data("censor");
        return this.client.send("SendMessageToRoomOwner", {
            censorPlayerId: n
        }), this.cancelConfirm(), !1
    },
    censorPlayerCancel() {
        return this.cancelConfirm(), !1
    },
    showLogo(t) {
        t ? (this.setSkipButtonState(!1), j("#drawful-nothing-skip-round-container").show()) : j("#drawful-nothing-skip-round-container").hide(), this.showScreen(".state-nothing")
    },
    updateUGC(t, e) {
        if (j(".ugc-screen").hide(), j(".ugc-option").hide(), j("#ugc-text").hide(), j("#ugc-no-actions-text").hide(), e.validActions === void 0 || e.prompts === void 0) {
            this.onResize();
            return
        }
        for (let i = 0; i < e.validActions.length; i++) {
            const o = e.validActions[i];
            j(`#ugc-${o}`).show()
        }
        if (e.validActions.indexOf("add") >= 0 && j(".ugc-add").show(), e.validActions.indexOf("save") >= 0 && j("#ugc-close").hide(), e.validActions.indexOf("exit") >= 0 && j("#ugc-close").hide(), e.validActions.indexOf("title") >= 0 && j("#ugc-close").hide(), e.validActions.indexOf("exit") >= 0 && j("#ugc-remove-content-confirm").data("id") != null && j("#ugc-delete").show(), e.validActions.indexOf("load") >= 0 && j(".ugc-load").show(), e.validActions.length === 0 && t.noActionsText && (j("#ugc-no-actions-text").html(`<span>${t.noActionsText}</span>`), j("#ugc-no-actions-text").show()), e.validActions.indexOf("play") < 0 ? j("#ugc-episode-name").hide() : j("#ugc-episode-name").show(), t.text && (j("#ugc-text").html(`<span>${t.text}</span>`), j("#ugc-text").show()), e.episodes !== void 0) {
            let i = "";
            e.episodes = at.sortBy(e.episodes, o => !!o.remoteContentId), e.episodes.forEach(o => {
                i += "<tr>", i += `<td class="ugc-load-button drawful-list-fill" data-id="${o.localContentId}" >${o.metadata.title}`, o.remoteContentId && (i += `<br><span class="lobby-episode-id capitalize">${o.formattedRemoteContentId}</span>`), i += "</td>", i += "</tr>"
            }), j("#ugc-load").html(i)
        }
        j("#ugc-title-input").prop("maxLength", t.maxTitleLength), j("#ugc-add-input").prop("maxLength", t.maxContentLength);
        let n = "";
        for (let i = e.prompts.length - 1; i >= 0; i--) n += "<tr>", n += `<td class="drawful-list-fill">${e.prompts[i].text}</td>`, n += `<td class="drawful-list-black ugc-remove-button" data-text="${Rt.htmlEscape(e.prompts[i].text)}"><div class="ugc-remove-x"></div></td>`, n += "</tr>";
        j("#ugc-remove").html(n), this.showScreen("#state-ugc"), this.onResize()
    },
    ugcNew() {
        this.client.send("SendMessageToRoomOwner", {
            action: "new"
        }), j("#ugc-remove-content-confirm").data("id", null)
    },
    ugcLoad(t) {
        const e = j(t.currentTarget).data("id");
        j("#ugc-remove-content-confirm").data("id", e), this.cancelConfirm(), this.client.send("SendMessageToRoomOwner", {
            action: "load",
            contentId: e
        });
        const n = j(t.currentTarget).data("name");
        j("#ugc-episode-name").html(n)
    },
    ugcRemoveContent(t) {
        const e = j(t.currentTarget);
        j("#ugc-remove-content-dialog").show(), j(".button-drawful-red").removeClass("drawful-censor-confirm button-drawful-red"), e.addClass("button-drawful-red"), t.stopPropagation()
    },
    ugcRemoveContentConfirm(t) {
        const e = j(t.target),
            n = Rt.htmlUnescape(e.data("id"));
        return j("#ugc-delete-dialog").hide(), this.client.send("SendMessageToRoomOwner", {
            action: "close"
        }), this.client.send("SendMessageToRoomOwner", {
            action: "remove-content",
            contentId: n
        }), this.cancelConfirm(), !1
    },
    ugcRemoveContentCancel() {
        return this.cancelConfirm(), !1
    },
    ugcClose() {
        this.client.send("SendMessageToRoomOwner", {
            action: "close"
        })
    },
    ugcTitle() {
        const t = this.sanitize(j("#ugc-title-input").val()).toLowerCase();
        return t.length === 0 || (this.client.send("SendMessageToRoomOwner", {
            action: "title",
            text: t
        }), j("#ugc-title-input").val("")), !1
    },
    ugcAdd() {
        const t = this.sanitize(j("#ugc-add-input").val()).toLowerCase();
        return t.length === 0 || (this.client.send("SendMessageToRoomOwner", {
            action: "add",
            text: t
        }), j("#ugc-add-input").val(""), j("#ugc-add-input").focus()), !1
    },
    ugcKeyUp(t) {
        t.which === 13 && (t.preventDefault(), this.ugcAdd(t))
    },
    ugcRemove(t) {
        let e = j(t.target);
        e.data("text") || (e = e.parent());
        const n = e.data("text");
        this.client.send("SendMessageToRoomOwner", {
            action: "remove",
            text: n
        })
    },
    ugcClear() {
        this.client.send("SendMessageToRoomOwner", {
            action: "clear"
        })
    },
    ugcToggleVisibility(t) {
        const e = j(t.target);
        this.client.send("SendMessageToRoomOwner", {
            action: "toggle-visibility",
            target: e.data("target")
        })
    },
    ugcUnlock() {
        this.cancelConfirm(), this.client.send("SendMessageToRoomOwner", {
            action: "unlock"
        })
    },
    ugcSave(t) {
        t.preventDefault(), this.client.send("SendMessageToRoomOwner", {
            action: "save"
        })
    },
    ugcSubmit() {
        this.cancelConfirm(), j("#ugc-submit-dialog").show(), j("#ugc-container").hide()
    },
    ugcSubmitConfirm() {
        this.client.send("SendMessageToRoomOwner", {
            action: "submit"
        }), j("#ugc-submit-dialog").hide(), j("#ugc-container").show()
    },
    ugcSubmitCancel() {
        j("#ugc-submit-dialog").hide(), j("#ugc-container").show()
    },
    ugcPlay() {
        this.client.send("SendMessageToRoomOwner", {
            action: "play"
        })
    },
    ugcExit() {
        this.client.send("SendMessageToRoomOwner", {
            action: "close"
        }), j("#ugc-episode-name").html("")
    },
    cancelConfirm() {
        j(".button-drawful-red").removeClass("drawful-censor-confirm button-drawful-red"), j(".drawful-confirm-dialog").hide()
    },
    sanitize(t) {
        return t = t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,=<>]/gi, "").replace(/'/g, "\u2019").trim(), Rt.htmlEscape(t)
    },
    validateInput(t) {
        const e = j(t.target);
        let n = e.val();
        const i = e.attr("maxLength");
        if (!!i && !(this.sanitize(n).length <= i)) {
            for (; this.sanitize(n).length > i;) n = n.slice(0, -1);
            e.val(n)
        }
    }
});
Fx({
    MainView: Hx
});
//# sourceMappingURL=3e4cf35a.js.map