var ph = Object.defineProperty;
var gh = (t, e, n) => e in t ? ph(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var st = (t, e, n) => (gh(t, typeof e != "symbol" ? e + "" : e, n), n);
const mh = function() {
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
mh();
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function vh(t) {
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
            _ = a.push,
            k = a.slice,
            R = f.toString,
            D = f.hasOwnProperty,
            V = Array.isArray,
            X = Object.keys,
            Y = m.bind,
            G = Object.create,
            ne = function() {},
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
                        return function(O, M, B) {
                            return l.call(g, O, M, B)
                        };
                    case 4:
                        return function(O, M, B, ie) {
                            return l.call(g, O, M, B, ie)
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
        var se = function(l, g) {
                return function(S) {
                    var O = arguments.length;
                    if (O < 2 || S == null) return S;
                    for (var M = 1; M < O; M++)
                        for (var B = arguments[M], ie = l(B), ke = ie.length, he = 0; he < ke; he++) {
                            var De = ie[he];
                            (!g || S[De] === void 0) && (S[De] = B[De])
                        }
                    return S
                }
            },
            oe = function(l) {
                if (!v.isObject(l)) return {};
                if (G) return G(l);
                ne.prototype = l;
                var g = new ne;
                return ne.prototype = null, g
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
        v.each = v.forEach = function(l, g, S) {
            g = P(g, S);
            var O, M;
            if (Oe(l))
                for (O = 0, M = l.length; O < M; O++) g(l[O], O, l);
            else {
                var B = v.keys(l);
                for (O = 0, M = B.length; O < M; O++) g(l[B[O]], B[O], l)
            }
            return l
        }, v.map = v.collect = function(l, g, S) {
            g = W(g, S);
            for (var O = !Oe(l) && v.keys(l), M = (O || l).length, B = Array(M), ie = 0; ie < M; ie++) {
                var ke = O ? O[ie] : ie;
                B[ie] = g(l[ke], ke, l)
            }
            return B
        };

        function Pe(l) {
            function g(S, O, M, B, ie, ke) {
                for (; ie >= 0 && ie < ke; ie += l) {
                    var he = B ? B[ie] : ie;
                    M = O(M, S[he], he, S)
                }
                return M
            }
            return function(S, O, M, B) {
                O = P(O, B, 4);
                var ie = !Oe(S) && v.keys(S),
                    ke = (ie || S).length,
                    he = l > 0 ? 0 : ke - 1;
                return arguments.length < 3 && (M = S[ie ? ie[he] : he], he += l), g(S, O, M, ie, he, ke)
            }
        }
        v.reduce = v.foldl = v.inject = Pe(1), v.reduceRight = v.foldr = Pe(-1), v.find = v.detect = function(l, g, S) {
            var O;
            if (Oe(l) ? O = v.findIndex(l, g, S) : O = v.findKey(l, g, S), O !== void 0 && O !== -1) return l[O]
        }, v.filter = v.select = function(l, g, S) {
            var O = [];
            return g = W(g, S), v.each(l, function(M, B, ie) {
                g(M, B, ie) && O.push(M)
            }), O
        }, v.reject = function(l, g, S) {
            return v.filter(l, v.negate(W(g)), S)
        }, v.every = v.all = function(l, g, S) {
            g = W(g, S);
            for (var O = !Oe(l) && v.keys(l), M = (O || l).length, B = 0; B < M; B++) {
                var ie = O ? O[B] : B;
                if (!g(l[ie], ie, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, g, S) {
            g = W(g, S);
            for (var O = !Oe(l) && v.keys(l), M = (O || l).length, B = 0; B < M; B++) {
                var ie = O ? O[B] : B;
                if (g(l[ie], ie, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, g, S, O) {
            return Oe(l) || (l = v.values(l)), (typeof S != "number" || O) && (S = 0), v.indexOf(l, g, S) >= 0
        }, v.invoke = function(l, g) {
            var S = k.call(arguments, 2),
                O = v.isFunction(g);
            return v.map(l, function(M) {
                var B = O ? g : M[g];
                return B == null ? B : B.apply(M, S)
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
                B, ie;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, he = l.length; ke < he; ke++) B = l[ke], B > O && (O = B)
            } else g = W(g, S), v.each(l, function(De, Le, nt) {
                ie = g(De, Le, nt), (ie > M || ie === -1 / 0 && O === -1 / 0) && (O = De, M = ie)
            });
            return O
        }, v.min = function(l, g, S) {
            var O = 1 / 0,
                M = 1 / 0,
                B, ie;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, he = l.length; ke < he; ke++) B = l[ke], B < O && (O = B)
            } else g = W(g, S), v.each(l, function(De, Le, nt) {
                ie = g(De, Le, nt), (ie < M || ie === 1 / 0 && O === 1 / 0) && (O = De, M = ie)
            });
            return O
        }, v.shuffle = function(l) {
            for (var g = Oe(l) ? l : v.values(l), S = g.length, O = Array(S), M = 0, B; M < S; M++) B = v.random(0, M), B !== M && (O[M] = O[B]), O[B] = g[M];
            return O
        }, v.sample = function(l, g, S) {
            return g == null || S ? (Oe(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, g))
        }, v.sortBy = function(l, g, S) {
            return g = W(g, S), v.pluck(v.map(l, function(O, M, B) {
                return {
                    value: O,
                    index: M,
                    criteria: g(O, M, B)
                }
            }).sort(function(O, M) {
                var B = O.criteria,
                    ie = M.criteria;
                if (B !== ie) {
                    if (B > ie || B === void 0) return 1;
                    if (B < ie || ie === void 0) return -1
                }
                return O.index - M.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, S, O) {
                var M = {};
                return S = W(S, O), v.each(g, function(B, ie) {
                    var ke = S(B, ie, g);
                    l(M, B, ke)
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
            return l ? v.isArray(l) ? k.call(l) : Oe(l) ? v.map(l, v.identity) : v.values(l) : []
        }, v.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : v.keys(l).length
        }, v.partition = function(l, g, S) {
            g = W(g, S);
            var O = [],
                M = [];
            return v.each(l, function(B, ie, ke) {
                (g(B, ie, ke) ? O : M).push(B)
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
            for (var M = [], B = 0, ie = O || 0, ke = Ee(l); ie < ke; ie++) {
                var he = l[ie];
                if (Oe(he) && (v.isArray(he) || v.isArguments(he))) {
                    g || (he = Be(he, g, S));
                    var De = 0,
                        Le = he.length;
                    for (M.length += Le; De < Le;) M[B++] = he[De++]
                } else S || (M[B++] = he)
            }
            return M
        };
        v.flatten = function(l, g) {
            return Be(l, g, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, g, S, O) {
            v.isBoolean(g) || (O = S, S = g, g = !1), S != null && (S = W(S, O));
            for (var M = [], B = [], ie = 0, ke = Ee(l); ie < ke; ie++) {
                var he = l[ie],
                    De = S ? S(he, ie, l) : he;
                g ? ((!ie || B !== De) && M.push(he), B = De) : S ? v.contains(B, De) || (B.push(De), M.push(he)) : v.contains(M, he) || M.push(he)
            }
            return M
        }, v.union = function() {
            return v.uniq(Be(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var g = [], S = arguments.length, O = 0, M = Ee(l); O < M; O++) {
                var B = l[O];
                if (!v.contains(g, B)) {
                    for (var ie = 1; ie < S && v.contains(arguments[ie], B); ie++);
                    ie === S && g.push(B)
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

        function Q(l) {
            return function(g, S, O) {
                S = W(S, O);
                for (var M = Ee(g), B = l > 0 ? 0 : M - 1; B >= 0 && B < M; B += l)
                    if (S(g[B], B, g)) return B;
                return -1
            }
        }
        v.findIndex = Q(1), v.findLastIndex = Q(-1), v.sortedIndex = function(l, g, S, O) {
            S = W(S, O, 1);
            for (var M = S(g), B = 0, ie = Ee(l); B < ie;) {
                var ke = Math.floor((B + ie) / 2);
                S(l[ke]) < M ? B = ke + 1 : ie = ke
            }
            return B
        };

        function je(l, g, S) {
            return function(O, M, B) {
                var ie = 0,
                    ke = Ee(O);
                if (typeof B == "number") l > 0 ? ie = B >= 0 ? B : Math.max(B + ke, ie) : ke = B >= 0 ? Math.min(B + 1, ke) : B + ke + 1;
                else if (S && B && ke) return B = S(O, M), O[B] === M ? B : -1;
                if (M !== M) return B = g(k.call(O, ie, ke), v.isNaN), B >= 0 ? B + ie : -1;
                for (B = l > 0 ? ie : ke - 1; B >= 0 && B < ke; B += l)
                    if (O[B] === M) return B;
                return -1
            }
        }
        v.indexOf = je(1, v.findIndex, v.sortedIndex), v.lastIndexOf = je(-1, v.findLastIndex), v.range = function(l, g, S) {
            g == null && (g = l || 0, l = 0), S = S || 1;
            for (var O = Math.max(Math.ceil((g - l) / S), 0), M = Array(O), B = 0; B < O; B++, l += S) M[B] = l;
            return M
        };
        var U = function(l, g, S, O, M) {
            if (!(O instanceof g)) return l.apply(S, M);
            var B = oe(l.prototype),
                ie = l.apply(B, M);
            return v.isObject(ie) ? ie : B
        };
        v.bind = function(l, g) {
            if (Y && l.bind === Y) return Y.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var S = k.call(arguments, 2),
                O = function() {
                    return U(l, O, g, this, S.concat(k.call(arguments)))
                };
            return O
        }, v.partial = function(l) {
            var g = k.call(arguments, 1),
                S = function() {
                    for (var O = 0, M = g.length, B = Array(M), ie = 0; ie < M; ie++) B[ie] = g[ie] === v ? arguments[O++] : g[ie];
                    for (; O < arguments.length;) B.push(arguments[O++]);
                    return U(l, S, this, this, B)
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
                    B = "" + (g ? g.apply(this, arguments) : O);
                return v.has(M, B) || (M[B] = l.apply(this, arguments)), M[B]
            };
            return S.cache = {}, S
        }, v.delay = function(l, g) {
            var S = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, S)
            }, g)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, g, S) {
            var O, M, B, ie = null,
                ke = 0;
            S || (S = {});
            var he = function() {
                ke = S.leading === !1 ? 0 : v.now(), ie = null, B = l.apply(O, M), ie || (O = M = null)
            };
            return function() {
                var De = v.now();
                !ke && S.leading === !1 && (ke = De);
                var Le = g - (De - ke);
                return O = this, M = arguments, Le <= 0 || Le > g ? (ie && (clearTimeout(ie), ie = null), ke = De, B = l.apply(O, M), ie || (O = M = null)) : !ie && S.trailing !== !1 && (ie = setTimeout(he, Le)), B
            }
        }, v.debounce = function(l, g, S) {
            var O, M, B, ie, ke, he = function() {
                var De = v.now() - ie;
                De < g && De >= 0 ? O = setTimeout(he, g - De) : (O = null, S || (ke = l.apply(B, M), O || (B = M = null)))
            };
            return function() {
                B = this, M = arguments, ie = v.now();
                var De = S && !O;
                return O || (O = setTimeout(he, g)), De && (ke = l.apply(B, M), B = M = null), ke
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

        function we(l, g) {
            var S = Ae.length,
                O = l.constructor,
                M = v.isFunction(O) && O.prototype || f,
                B = "constructor";
            for (v.has(l, B) && !v.contains(g, B) && g.push(B); S--;) B = Ae[S], B in l && l[B] !== M[B] && !v.contains(g, B) && g.push(B)
        }
        v.keys = function(l) {
            if (!v.isObject(l)) return [];
            if (X) return X(l);
            var g = [];
            for (var S in l) v.has(l, S) && g.push(S);
            return ae && we(l, g), g
        }, v.allKeys = function(l) {
            if (!v.isObject(l)) return [];
            var g = [];
            for (var S in l) g.push(S);
            return ae && we(l, g), g
        }, v.values = function(l) {
            for (var g = v.keys(l), S = g.length, O = Array(S), M = 0; M < S; M++) O[M] = l[g[M]];
            return O
        }, v.mapObject = function(l, g, S) {
            g = W(g, S);
            for (var O = v.keys(l), M = O.length, B = {}, ie, ke = 0; ke < M; ke++) ie = O[ke], B[ie] = g(l[ie], ie, l);
            return B
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
        }, v.extend = se(v.allKeys), v.extendOwn = v.assign = se(v.keys), v.findKey = function(l, g, S) {
            g = W(g, S);
            for (var O = v.keys(l), M, B = 0, ie = O.length; B < ie; B++)
                if (M = O[B], g(l[M], M, l)) return M
        }, v.pick = function(l, g, S) {
            var O = {},
                M = l,
                B, ie;
            if (M == null) return O;
            v.isFunction(g) ? (ie = v.allKeys(M), B = P(g, S)) : (ie = Be(arguments, !1, !1, 1), B = function(nt, Ct, rn) {
                return Ct in rn
            }, M = Object(M));
            for (var ke = 0, he = ie.length; ke < he; ke++) {
                var De = ie[ke],
                    Le = M[De];
                B(Le, De, M) && (O[De] = Le)
            }
            return O
        }, v.omit = function(l, g, S) {
            if (v.isFunction(g)) g = v.negate(g);
            else {
                var O = v.map(Be(arguments, !1, !1, 1), String);
                g = function(M, B) {
                    return !v.contains(O, B)
                }
            }
            return v.pick(l, g, S)
        }, v.defaults = se(v.allKeys, !0), v.create = function(l, g) {
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
            for (var M = Object(l), B = 0; B < O; B++) {
                var ie = S[B];
                if (g[ie] !== M[ie] || !(ie in M)) return !1
            }
            return !0
        };
        var ye = function(l, g, S, O) {
            if (l === g) return l !== 0 || 1 / l === 1 / g;
            if (l == null || g == null) return l === g;
            l instanceof v && (l = l._wrapped), g instanceof v && (g = g._wrapped);
            var M = R.call(l);
            if (M !== R.call(g)) return !1;
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
            var B = M === "[object Array]";
            if (!B) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var ie = l.constructor,
                    ke = g.constructor;
                if (ie !== ke && !(v.isFunction(ie) && ie instanceof ie && v.isFunction(ke) && ke instanceof ke) && "constructor" in l && "constructor" in g) return !1
            }
            S = S || [], O = O || [];
            for (var he = S.length; he--;)
                if (S[he] === l) return O[he] === g;
            if (S.push(l), O.push(g), B) {
                if (he = l.length, he !== g.length) return !1;
                for (; he--;)
                    if (!ye(l[he], g[he], S, O)) return !1
            } else {
                var De = v.keys(l),
                    Le;
                if (he = De.length, v.keys(g).length !== he) return !1;
                for (; he--;)
                    if (Le = De[he], !(v.has(g, Le) && ye(l[Le], g[Le], S, O))) return !1
            }
            return S.pop(), O.pop(), !0
        };
        v.isEqual = function(l, g) {
            return ye(l, g)
        }, v.isEmpty = function(l) {
            return l == null ? !0 : Oe(l) && (v.isArray(l) || v.isString(l) || v.isArguments(l)) ? l.length === 0 : v.keys(l).length === 0
        }, v.isElement = function(l) {
            return !!(l && l.nodeType === 1)
        }, v.isArray = V || function(l) {
            return R.call(l) === "[object Array]"
        }, v.isObject = function(l) {
            var g = typeof l;
            return g === "function" || g === "object" && !!l
        }, v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(l) {
            v["is" + l] = function(g) {
                return R.call(g) === "[object " + l + "]"
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
            return l === !0 || l === !1 || R.call(l) === "[object Boolean]"
        }, v.isNull = function(l) {
            return l === null
        }, v.isUndefined = function(l) {
            return l === void 0
        }, v.has = function(l, g) {
            return l != null && D.call(l, g)
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
            Se = v.invert(ue),
            Te = function(l) {
                var g = function(B) {
                        return l[B]
                    },
                    S = "(?:" + v.keys(l).join("|") + ")",
                    O = RegExp(S),
                    M = RegExp(S, "g");
                return function(B) {
                    return B = B == null ? "" : "" + B, O.test(B) ? B.replace(M, g) : B
                }
            };
        v.escape = Te(ue), v.unescape = Te(Se), v.result = function(l, g, S) {
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
            var O = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                M = 0,
                B = "__p+='";
            l.replace(O, function(De, Le, nt, Ct, rn) {
                return B += l.slice(M, rn).replace(Bt, Gt), M = rn + De.length, Le ? B += `'+
((__t=(` + Le + `))==null?'':_.escape(__t))+
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
                var ie = new Function(g.variable || "obj", "_", B)
            } catch (De) {
                throw De.source = B, De
            }
            var ke = function(De) {
                    return ie.call(this, De, v)
                },
                he = g.variable || "obj";
            return ke.source = "function(" + he + `){
` + B + "}", ke
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
})(Ni, Ni.exports);
const at = Ni.exports;
var Va = {
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
            m = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            _ = i.push,
            k = i.indexOf,
            R = {},
            D = R.toString,
            V = R.hasOwnProperty,
            X = V.toString,
            Y = X.call(Object),
            G = {},
            ne = function(s) {
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

        function se(r, s, u) {
            u = u || P;
            var p, w, x = u.createElement("script");
            if (x.text = r, s)
                for (p in W) w = s[p] || s.getAttribute && s.getAttribute(p), w && x.setAttribute(p, w);
            u.head.appendChild(x).parentNode.removeChild(x)
        }

        function oe(r) {
            return r == null ? r + "" : typeof r == "object" || typeof r == "function" ? R[D.call(r)] || "object" : typeof r
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
                H = arguments.length,
                ee = !1;
            for (typeof T == "boolean" && (ee = T, T = arguments[z] || {}, z++), typeof T != "object" && !ne(T) && (T = {}), z === H && (T = this, z--); z < H; z++)
                if ((r = arguments[z]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (ee && p && (d.isPlainObject(p) || (w = Array.isArray(p))) ? (u = T[s], w && !Array.isArray(u) ? x = [] : !w && !d.isPlainObject(u) ? x = {} : x = u, w = !1, T[s] = d.extend(ee, x, p)) : p !== void 0 && (T[s] = p));
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
                return !r || D.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = V.call(s, "constructor") && s.constructor, typeof u == "function" && X.call(u) === Y) : !0)
            },
            isEmptyObject: function(r) {
                var s;
                for (s in r) return !1;
                return !0
            },
            globalEval: function(r, s, u) {
                se(r, {
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
            support: G
        }), typeof Symbol == "function" && (d.fn[Symbol.iterator] = i[Symbol.iterator]), d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            R["[object " + s + "]"] = s.toLowerCase()
        });

        function Ee(r) {
            var s = !!r && "length" in r && r.length,
                u = oe(r);
            return ne(r) || v(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, u, p, w, x, T, z, H, ee, le, be, re, ce, Ge, rt, Fe, zt, Nt, un, _t = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Dt = Ki(),
                _i = Ki(),
                Xi = Ki(),
                hn = Ki(),
                Kn = function(I, j) {
                    return I === j && (be = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Ln = an.pop,
                vn = an.push,
                Cn = an.push,
                Ss = an.slice,
                Qn = function(I, j) {
                    for (var J = 0, de = I.length; J < de; J++)
                        if (I[J] === j) return J;
                    return -1
                },
                zr = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                gt = "[\\x20\\t\\r\\n\\f]",
                Zn = "(?:\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                ks = "\\[" + gt + "*(" + Zn + ")(?:" + gt + "*([*^$|!~]?=)" + gt + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Zn + "))|)" + gt + "*\\]",
                Hr = ":(" + Zn + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + ks + ")*)|.*)\\)|)",
                Ts = new RegExp(gt + "+", "g"),
                Si = new RegExp("^" + gt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + gt + "+$", "g"),
                As = new RegExp("^" + gt + "*," + gt + "*"),
                Os = new RegExp("^" + gt + "*([>+~]|" + gt + ")" + gt + "*"),
                Fo = new RegExp(gt + "|>"),
                jo = new RegExp(Hr),
                zo = new RegExp("^" + Zn + "$"),
                Yi = {
                    ID: new RegExp("^#(" + Zn + ")"),
                    CLASS: new RegExp("^\\.(" + Zn + ")"),
                    TAG: new RegExp("^(" + Zn + "|[*])"),
                    ATTR: new RegExp("^" + ks),
                    PSEUDO: new RegExp("^" + Hr),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + gt + "*(even|odd|(([+-]|)(\\d*)n|)" + gt + "*(?:([+-]|)" + gt + "*(\\d+)|))" + gt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + zr + ")$", "i"),
                    needsContext: new RegExp("^" + gt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + gt + "*((?:-\\d)?\\d*)" + gt + "*\\)|)(?=[^-]|$)", "i")
                },
                Ho = /HTML$/i,
                Uo = /^(?:input|select|textarea|button)$/i,
                Go = /^h\d$/i,
                ki = /^[^{]+\{\s*\[native \w/,
                Wo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Ur = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(I, j) {
                    var J = "0x" + I.slice(1) - 65536;
                    return j || (J < 0 ? String.fromCharCode(J + 65536) : String.fromCharCode(J >> 10 | 55296, J & 1023 | 56320))
                },
                Gr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                Rs = function(I, j) {
                    return j ? I === "\0" ? "\uFFFD" : I.slice(0, -1) + "\\" + I.charCodeAt(I.length - 1).toString(16) + " " : "\\" + I
                },
                Is = function() {
                    re()
                },
                qo = er(function(I) {
                    return I.disabled === !0 && I.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                Cn.apply(an = Ss.call(et.childNodes), et.childNodes), an[et.childNodes.length].nodeType
            } catch {
                Cn = {
                    apply: an.length ? function(j, J) {
                        vn.apply(j, Ss.call(J))
                    } : function(j, J) {
                        for (var de = j.length, te = 0; j[de++] = J[te++];);
                        j.length = de - 1
                    }
                }
            }

            function St(I, j, J, de) {
                var te, me, xe, Re, Me, ze, Ue, Xe = j && j.ownerDocument,
                    ht = j ? j.nodeType : 9;
                if (J = J || [], typeof I != "string" || !I || ht !== 1 && ht !== 9 && ht !== 11) return J;
                if (!de && (re(j), j = j || ce, rt)) {
                    if (ht !== 11 && (Me = Wo.exec(I)))
                        if (te = Me[1]) {
                            if (ht === 9)
                                if (xe = j.getElementById(te)) {
                                    if (xe.id === te) return J.push(xe), J
                                } else return J;
                            else if (Xe && (xe = Xe.getElementById(te)) && un(j, xe) && xe.id === te) return J.push(xe), J
                        } else {
                            if (Me[2]) return Cn.apply(J, j.getElementsByTagName(I)), J;
                            if ((te = Me[3]) && u.getElementsByClassName && j.getElementsByClassName) return Cn.apply(J, j.getElementsByClassName(te)), J
                        } if (u.qsa && !hn[I + " "] && (!Fe || !Fe.test(I)) && (ht !== 1 || j.nodeName.toLowerCase() !== "object")) {
                        if (Ue = I, Xe = j, ht === 1 && (Fo.test(I) || Os.test(I))) {
                            for (Xe = Ur.test(I) && Wr(j.parentNode) || j, (Xe !== j || !u.scope) && ((Re = j.getAttribute("id")) ? Re = Re.replace(Gr, Rs) : j.setAttribute("id", Re = _t)), ze = T(I), me = ze.length; me--;) ze[me] = (Re ? "#" + Re : ":scope") + " " + Zi(ze[me]);
                            Ue = ze.join(",")
                        }
                        try {
                            return Cn.apply(J, Xe.querySelectorAll(Ue)), J
                        } catch {
                            hn(I, !0)
                        } finally {
                            Re === _t && j.removeAttribute("id")
                        }
                    }
                }
                return H(I.replace(Si, "$1"), j, J, de)
            }

            function Ki() {
                var I = [];

                function j(J, de) {
                    return I.push(J + " ") > p.cacheLength && delete j[I.shift()], j[J + " "] = de
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

            function Ji(I, j) {
                for (var J = I.split("|"), de = J.length; de--;) p.attrHandle[J[de]] = j
            }

            function Qi(I, j) {
                var J = j && I,
                    de = J && I.nodeType === 1 && j.nodeType === 1 && I.sourceIndex - j.sourceIndex;
                if (de) return de;
                if (J) {
                    for (; J = J.nextSibling;)
                        if (J === j) return -1
                }
                return I ? 1 : -1
            }

            function Xo(I) {
                return function(j) {
                    var J = j.nodeName.toLowerCase();
                    return J === "input" && j.type === I
                }
            }

            function Yo(I) {
                return function(j) {
                    var J = j.nodeName.toLowerCase();
                    return (J === "input" || J === "button") && j.type === I
                }
            }

            function Ds(I) {
                return function(j) {
                    return "form" in j ? j.parentNode && j.disabled === !1 ? "label" in j ? "label" in j.parentNode ? j.parentNode.disabled === I : j.disabled === I : j.isDisabled === I || j.isDisabled !== !I && qo(j) === I : j.disabled === I : "label" in j ? j.disabled === I : !1
                }
            }

            function An(I) {
                return dn(function(j) {
                    return j = +j, dn(function(J, de) {
                        for (var te, me = I([], J.length, j), xe = me.length; xe--;) J[te = me[xe]] && (J[te] = !(de[te] = J[te]))
                    })
                })
            }

            function Wr(I) {
                return I && typeof I.getElementsByTagName < "u" && I
            }
            u = St.support = {}, x = St.isXML = function(I) {
                var j = I && I.namespaceURI,
                    J = I && (I.ownerDocument || I).documentElement;
                return !Ho.test(j || J && J.nodeName || "HTML")
            }, re = St.setDocument = function(I) {
                var j, J, de = I ? I.ownerDocument || I : et;
                return de == ce || de.nodeType !== 9 || !de.documentElement || (ce = de, Ge = ce.documentElement, rt = !x(ce), et != ce && (J = ce.defaultView) && J.top !== J && (J.addEventListener ? J.addEventListener("unload", Is, !1) : J.attachEvent && J.attachEvent("onunload", Is)), u.scope = yn(function(te) {
                    return Ge.appendChild(te).appendChild(ce.createElement("div")), typeof te.querySelectorAll < "u" && !te.querySelectorAll(":scope fieldset div").length
                }), u.attributes = yn(function(te) {
                    return te.className = "i", !te.getAttribute("className")
                }), u.getElementsByTagName = yn(function(te) {
                    return te.appendChild(ce.createComment("")), !te.getElementsByTagName("*").length
                }), u.getElementsByClassName = ki.test(ce.getElementsByClassName), u.getById = yn(function(te) {
                    return Ge.appendChild(te).id = _t, !ce.getElementsByName || !ce.getElementsByName(_t).length
                }), u.getById ? (p.filter.ID = function(te) {
                    var me = te.replace(Tn, xn);
                    return function(xe) {
                        return xe.getAttribute("id") === me
                    }
                }, p.find.ID = function(te, me) {
                    if (typeof me.getElementById < "u" && rt) {
                        var xe = me.getElementById(te);
                        return xe ? [xe] : []
                    }
                }) : (p.filter.ID = function(te) {
                    var me = te.replace(Tn, xn);
                    return function(xe) {
                        var Re = typeof xe.getAttributeNode < "u" && xe.getAttributeNode("id");
                        return Re && Re.value === me
                    }
                }, p.find.ID = function(te, me) {
                    if (typeof me.getElementById < "u" && rt) {
                        var xe, Re, Me, ze = me.getElementById(te);
                        if (ze) {
                            if (xe = ze.getAttributeNode("id"), xe && xe.value === te) return [ze];
                            for (Me = me.getElementsByName(te), Re = 0; ze = Me[Re++];)
                                if (xe = ze.getAttributeNode("id"), xe && xe.value === te) return [ze]
                        }
                        return []
                    }
                }), p.find.TAG = u.getElementsByTagName ? function(te, me) {
                    if (typeof me.getElementsByTagName < "u") return me.getElementsByTagName(te);
                    if (u.qsa) return me.querySelectorAll(te)
                } : function(te, me) {
                    var xe, Re = [],
                        Me = 0,
                        ze = me.getElementsByTagName(te);
                    if (te === "*") {
                        for (; xe = ze[Me++];) xe.nodeType === 1 && Re.push(xe);
                        return Re
                    }
                    return ze
                }, p.find.CLASS = u.getElementsByClassName && function(te, me) {
                    if (typeof me.getElementsByClassName < "u" && rt) return me.getElementsByClassName(te)
                }, zt = [], Fe = [], (u.qsa = ki.test(ce.querySelectorAll)) && (yn(function(te) {
                    var me;
                    Ge.appendChild(te).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", te.querySelectorAll("[msallowcapture^='']").length && Fe.push("[*^$]=" + gt + `*(?:''|"")`), te.querySelectorAll("[selected]").length || Fe.push("\\[" + gt + "*(?:value|" + zr + ")"), te.querySelectorAll("[id~=" + _t + "-]").length || Fe.push("~="), me = ce.createElement("input"), me.setAttribute("name", ""), te.appendChild(me), te.querySelectorAll("[name='']").length || Fe.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), te.querySelectorAll(":checked").length || Fe.push(":checked"), te.querySelectorAll("a#" + _t + "+*").length || Fe.push(".#.+[+~]"), te.querySelectorAll("\\\f"), Fe.push("[\\r\\n\\f]")
                }), yn(function(te) {
                    te.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var me = ce.createElement("input");
                    me.setAttribute("type", "hidden"), te.appendChild(me).setAttribute("name", "D"), te.querySelectorAll("[name=d]").length && Fe.push("name" + gt + "*[*^$|!~]?="), te.querySelectorAll(":enabled").length !== 2 && Fe.push(":enabled", ":disabled"), Ge.appendChild(te).disabled = !0, te.querySelectorAll(":disabled").length !== 2 && Fe.push(":enabled", ":disabled"), te.querySelectorAll("*,:x"), Fe.push(",.*:")
                })), (u.matchesSelector = ki.test(Nt = Ge.matches || Ge.webkitMatchesSelector || Ge.mozMatchesSelector || Ge.oMatchesSelector || Ge.msMatchesSelector)) && yn(function(te) {
                    u.disconnectedMatch = Nt.call(te, "*"), Nt.call(te, "[s!='']:x"), zt.push("!=", Hr)
                }), Fe = Fe.length && new RegExp(Fe.join("|")), zt = zt.length && new RegExp(zt.join("|")), j = ki.test(Ge.compareDocumentPosition), un = j || ki.test(Ge.contains) ? function(te, me) {
                    var xe = te.nodeType === 9 ? te.documentElement : te,
                        Re = me && me.parentNode;
                    return te === Re || !!(Re && Re.nodeType === 1 && (xe.contains ? xe.contains(Re) : te.compareDocumentPosition && te.compareDocumentPosition(Re) & 16))
                } : function(te, me) {
                    if (me) {
                        for (; me = me.parentNode;)
                            if (me === te) return !0
                    }
                    return !1
                }, Kn = j ? function(te, me) {
                    if (te === me) return be = !0, 0;
                    var xe = !te.compareDocumentPosition - !me.compareDocumentPosition;
                    return xe || (xe = (te.ownerDocument || te) == (me.ownerDocument || me) ? te.compareDocumentPosition(me) : 1, xe & 1 || !u.sortDetached && me.compareDocumentPosition(te) === xe ? te == ce || te.ownerDocument == et && un(et, te) ? -1 : me == ce || me.ownerDocument == et && un(et, me) ? 1 : le ? Qn(le, te) - Qn(le, me) : 0 : xe & 4 ? -1 : 1)
                } : function(te, me) {
                    if (te === me) return be = !0, 0;
                    var xe, Re = 0,
                        Me = te.parentNode,
                        ze = me.parentNode,
                        Ue = [te],
                        Xe = [me];
                    if (!Me || !ze) return te == ce ? -1 : me == ce ? 1 : Me ? -1 : ze ? 1 : le ? Qn(le, te) - Qn(le, me) : 0;
                    if (Me === ze) return Qi(te, me);
                    for (xe = te; xe = xe.parentNode;) Ue.unshift(xe);
                    for (xe = me; xe = xe.parentNode;) Xe.unshift(xe);
                    for (; Ue[Re] === Xe[Re];) Re++;
                    return Re ? Qi(Ue[Re], Xe[Re]) : Ue[Re] == et ? -1 : Xe[Re] == et ? 1 : 0
                }), ce
            }, St.matches = function(I, j) {
                return St(I, null, null, j)
            }, St.matchesSelector = function(I, j) {
                if (re(I), u.matchesSelector && rt && !hn[j + " "] && (!zt || !zt.test(j)) && (!Fe || !Fe.test(j))) try {
                    var J = Nt.call(I, j);
                    if (J || u.disconnectedMatch || I.document && I.document.nodeType !== 11) return J
                } catch {
                    hn(j, !0)
                }
                return St(j, ce, null, [I]).length > 0
            }, St.contains = function(I, j) {
                return (I.ownerDocument || I) != ce && re(I), un(I, j)
            }, St.attr = function(I, j) {
                (I.ownerDocument || I) != ce && re(I);
                var J = p.attrHandle[j.toLowerCase()],
                    de = J && Jn.call(p.attrHandle, j.toLowerCase()) ? J(I, j, !rt) : void 0;
                return de !== void 0 ? de : u.attributes || !rt ? I.getAttribute(j) : (de = I.getAttributeNode(j)) && de.specified ? de.value : null
            }, St.escape = function(I) {
                return (I + "").replace(Gr, Rs)
            }, St.error = function(I) {
                throw new Error("Syntax error, unrecognized expression: " + I)
            }, St.uniqueSort = function(I) {
                var j, J = [],
                    de = 0,
                    te = 0;
                if (be = !u.detectDuplicates, le = !u.sortStable && I.slice(0), I.sort(Kn), be) {
                    for (; j = I[te++];) j === I[te] && (de = J.push(te));
                    for (; de--;) I.splice(J[de], 1)
                }
                return le = null, I
            }, w = St.getText = function(I) {
                var j, J = "",
                    de = 0,
                    te = I.nodeType;
                if (te) {
                    if (te === 1 || te === 9 || te === 11) {
                        if (typeof I.textContent == "string") return I.textContent;
                        for (I = I.firstChild; I; I = I.nextSibling) J += w(I)
                    } else if (te === 3 || te === 4) return I.nodeValue
                } else
                    for (; j = I[de++];) J += w(j);
                return J
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
                    ATTR: function(I) {
                        return I[1] = I[1].replace(Tn, xn), I[3] = (I[3] || I[4] || I[5] || "").replace(Tn, xn), I[2] === "~=" && (I[3] = " " + I[3] + " "), I.slice(0, 4)
                    },
                    CHILD: function(I) {
                        return I[1] = I[1].toLowerCase(), I[1].slice(0, 3) === "nth" ? (I[3] || St.error(I[0]), I[4] = +(I[4] ? I[5] + (I[6] || 1) : 2 * (I[3] === "even" || I[3] === "odd")), I[5] = +(I[7] + I[8] || I[3] === "odd")) : I[3] && St.error(I[0]), I
                    },
                    PSEUDO: function(I) {
                        var j, J = !I[6] && I[2];
                        return Yi.CHILD.test(I[0]) ? null : (I[3] ? I[2] = I[4] || I[5] || "" : J && jo.test(J) && (j = T(J, !0)) && (j = J.indexOf(")", J.length - j) - J.length) && (I[0] = I[0].slice(0, j), I[2] = J.slice(0, j)), I.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(I) {
                        var j = I.replace(Tn, xn).toLowerCase();
                        return I === "*" ? function() {
                            return !0
                        } : function(J) {
                            return J.nodeName && J.nodeName.toLowerCase() === j
                        }
                    },
                    CLASS: function(I) {
                        var j = Dt[I + " "];
                        return j || (j = new RegExp("(^|" + gt + ")" + I + "(" + gt + "|$)")) && Dt(I, function(J) {
                            return j.test(typeof J.className == "string" && J.className || typeof J.getAttribute < "u" && J.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(I, j, J) {
                        return function(de) {
                            var te = St.attr(de, I);
                            return te == null ? j === "!=" : j ? (te += "", j === "=" ? te === J : j === "!=" ? te !== J : j === "^=" ? J && te.indexOf(J) === 0 : j === "*=" ? J && te.indexOf(J) > -1 : j === "$=" ? J && te.slice(-J.length) === J : j === "~=" ? (" " + te.replace(Ts, " ") + " ").indexOf(J) > -1 : j === "|=" ? te === J || te.slice(0, J.length + 1) === J + "-" : !1) : !0
                        }
                    },
                    CHILD: function(I, j, J, de, te) {
                        var me = I.slice(0, 3) !== "nth",
                            xe = I.slice(-4) !== "last",
                            Re = j === "of-type";
                        return de === 1 && te === 0 ? function(Me) {
                            return !!Me.parentNode
                        } : function(Me, ze, Ue) {
                            var Xe, ht, At, qe, Ht, Jt, fn = me !== xe ? "nextSibling" : "previousSibling",
                                Ot = Me.parentNode,
                                c = Re && Me.nodeName.toLowerCase(),
                                h = !Ue && !Re,
                                b = !1;
                            if (Ot) {
                                if (me) {
                                    for (; fn;) {
                                        for (qe = Me; qe = qe[fn];)
                                            if (Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) return !1;
                                        Jt = fn = I === "only" && !Jt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Jt = [xe ? Ot.firstChild : Ot.lastChild], xe && h) {
                                    for (qe = Ot, At = qe[_t] || (qe[_t] = {}), ht = At[qe.uniqueID] || (At[qe.uniqueID] = {}), Xe = ht[I] || [], Ht = Xe[0] === on && Xe[1], b = Ht && Xe[2], qe = Ht && Ot.childNodes[Ht]; qe = ++Ht && qe && qe[fn] || (b = Ht = 0) || Jt.pop();)
                                        if (qe.nodeType === 1 && ++b && qe === Me) {
                                            ht[I] = [on, Ht, b];
                                            break
                                        }
                                } else if (h && (qe = Me, At = qe[_t] || (qe[_t] = {}), ht = At[qe.uniqueID] || (At[qe.uniqueID] = {}), Xe = ht[I] || [], Ht = Xe[0] === on && Xe[1], b = Ht), b === !1)
                                    for (;
                                        (qe = ++Ht && qe && qe[fn] || (b = Ht = 0) || Jt.pop()) && !((Re ? qe.nodeName.toLowerCase() === c : qe.nodeType === 1) && ++b && (h && (At = qe[_t] || (qe[_t] = {}), ht = At[qe.uniqueID] || (At[qe.uniqueID] = {}), ht[I] = [on, b]), qe === Me)););
                                return b -= te, b === de || b % de === 0 && b / de >= 0
                            }
                        }
                    },
                    PSEUDO: function(I, j) {
                        var J, de = p.pseudos[I] || p.setFilters[I.toLowerCase()] || St.error("unsupported pseudo: " + I);
                        return de[_t] ? de(j) : de.length > 1 ? (J = [I, I, "", j], p.setFilters.hasOwnProperty(I.toLowerCase()) ? dn(function(te, me) {
                            for (var xe, Re = de(te, j), Me = Re.length; Me--;) xe = Qn(te, Re[Me]), te[xe] = !(me[xe] = Re[Me])
                        }) : function(te) {
                            return de(te, 0, J)
                        }) : de
                    }
                },
                pseudos: {
                    not: dn(function(I) {
                        var j = [],
                            J = [],
                            de = z(I.replace(Si, "$1"));
                        return de[_t] ? dn(function(te, me, xe, Re) {
                            for (var Me, ze = de(te, null, Re, []), Ue = te.length; Ue--;)(Me = ze[Ue]) && (te[Ue] = !(me[Ue] = Me))
                        }) : function(te, me, xe) {
                            return j[0] = te, de(j, null, xe, J), j[0] = null, !J.pop()
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
                                var J;
                                do
                                    if (J = rt ? j.lang : j.getAttribute("xml:lang") || j.getAttribute("lang")) return J = J.toLowerCase(), J === I || J.indexOf(I + "-") === 0; while ((j = j.parentNode) && j.nodeType === 1);
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
                    enabled: Ds(!1),
                    disabled: Ds(!0),
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
                        return Go.test(I.nodeName)
                    },
                    input: function(I) {
                        return Uo.test(I.nodeName)
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
                    eq: An(function(I, j, J) {
                        return [J < 0 ? J + j : J]
                    }),
                    even: An(function(I, j) {
                        for (var J = 0; J < j; J += 2) I.push(J);
                        return I
                    }),
                    odd: An(function(I, j) {
                        for (var J = 1; J < j; J += 2) I.push(J);
                        return I
                    }),
                    lt: An(function(I, j, J) {
                        for (var de = J < 0 ? J + j : J > j ? j : J; --de >= 0;) I.push(de);
                        return I
                    }),
                    gt: An(function(I, j, J) {
                        for (var de = J < 0 ? J + j : J; ++de < j;) I.push(de);
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

            function Ls() {}
            Ls.prototype = p.filters = p.pseudos, p.setFilters = new Ls, T = St.tokenize = function(I, j) {
                var J, de, te, me, xe, Re, Me, ze = _i[I + " "];
                if (ze) return j ? 0 : ze.slice(0);
                for (xe = I, Re = [], Me = p.preFilter; xe;) {
                    (!J || (de = As.exec(xe))) && (de && (xe = xe.slice(de[0].length) || xe), Re.push(te = [])), J = !1, (de = Os.exec(xe)) && (J = de.shift(), te.push({
                        value: J,
                        type: de[0].replace(Si, " ")
                    }), xe = xe.slice(J.length));
                    for (me in p.filter)(de = Yi[me].exec(xe)) && (!Me[me] || (de = Me[me](de))) && (J = de.shift(), te.push({
                        value: J,
                        type: me,
                        matches: de
                    }), xe = xe.slice(J.length));
                    if (!J) break
                }
                return j ? xe.length : xe ? St.error(I) : _i(I, Re).slice(0)
            };

            function Zi(I) {
                for (var j = 0, J = I.length, de = ""; j < J; j++) de += I[j].value;
                return de
            }

            function er(I, j, J) {
                var de = j.dir,
                    te = j.next,
                    me = te || de,
                    xe = J && me === "parentNode",
                    Re = ft++;
                return j.first ? function(Me, ze, Ue) {
                    for (; Me = Me[de];)
                        if (Me.nodeType === 1 || xe) return I(Me, ze, Ue);
                    return !1
                } : function(Me, ze, Ue) {
                    var Xe, ht, At, qe = [on, Re];
                    if (Ue) {
                        for (; Me = Me[de];)
                            if ((Me.nodeType === 1 || xe) && I(Me, ze, Ue)) return !0
                    } else
                        for (; Me = Me[de];)
                            if (Me.nodeType === 1 || xe)
                                if (At = Me[_t] || (Me[_t] = {}), ht = At[Me.uniqueID] || (At[Me.uniqueID] = {}), te && te === Me.nodeName.toLowerCase()) Me = Me[de] || Me;
                                else {
                                    if ((Xe = ht[me]) && Xe[0] === on && Xe[1] === Re) return qe[2] = Xe[2];
                                    if (ht[me] = qe, qe[2] = I(Me, ze, Ue)) return !0
                                } return !1
                }
            }

            function tr(I) {
                return I.length > 1 ? function(j, J, de) {
                    for (var te = I.length; te--;)
                        if (!I[te](j, J, de)) return !1;
                    return !0
                } : I[0]
            }

            function Ko(I, j, J) {
                for (var de = 0, te = j.length; de < te; de++) St(I, j[de], J);
                return J
            }

            function nr(I, j, J, de, te) {
                for (var me, xe = [], Re = 0, Me = I.length, ze = j != null; Re < Me; Re++)(me = I[Re]) && (!J || J(me, de, te)) && (xe.push(me), ze && j.push(Re));
                return xe
            }

            function qr(I, j, J, de, te, me) {
                return de && !de[_t] && (de = qr(de)), te && !te[_t] && (te = qr(te, me)), dn(function(xe, Re, Me, ze) {
                    var Ue, Xe, ht, At = [],
                        qe = [],
                        Ht = Re.length,
                        Jt = xe || Ko(j || "*", Me.nodeType ? [Me] : Me, []),
                        fn = I && (xe || !j) ? nr(Jt, At, I, Me, ze) : Jt,
                        Ot = J ? te || (xe ? I : Ht || de) ? [] : Re : fn;
                    if (J && J(fn, Ot, Me, ze), de)
                        for (Ue = nr(Ot, qe), de(Ue, [], Me, ze), Xe = Ue.length; Xe--;)(ht = Ue[Xe]) && (Ot[qe[Xe]] = !(fn[qe[Xe]] = ht));
                    if (xe) {
                        if (te || I) {
                            if (te) {
                                for (Ue = [], Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && Ue.push(fn[Xe] = ht);
                                te(null, Ot = [], Ue, ze)
                            }
                            for (Xe = Ot.length; Xe--;)(ht = Ot[Xe]) && (Ue = te ? Qn(xe, ht) : At[Xe]) > -1 && (xe[Ue] = !(Re[Ue] = ht))
                        }
                    } else Ot = nr(Ot === Re ? Ot.splice(Ht, Ot.length) : Ot), te ? te(null, Re, Ot, ze) : Cn.apply(Re, Ot)
                })
            }

            function Xr(I) {
                for (var j, J, de, te = I.length, me = p.relative[I[0].type], xe = me || p.relative[" "], Re = me ? 1 : 0, Me = er(function(Xe) {
                        return Xe === j
                    }, xe, !0), ze = er(function(Xe) {
                        return Qn(j, Xe) > -1
                    }, xe, !0), Ue = [function(Xe, ht, At) {
                        var qe = !me && (At || ht !== ee) || ((j = ht).nodeType ? Me(Xe, ht, At) : ze(Xe, ht, At));
                        return j = null, qe
                    }]; Re < te; Re++)
                    if (J = p.relative[I[Re].type]) Ue = [er(tr(Ue), J)];
                    else {
                        if (J = p.filter[I[Re].type].apply(null, I[Re].matches), J[_t]) {
                            for (de = ++Re; de < te && !p.relative[I[de].type]; de++);
                            return qr(Re > 1 && tr(Ue), Re > 1 && Zi(I.slice(0, Re - 1).concat({
                                value: I[Re - 2].type === " " ? "*" : ""
                            })).replace(Si, "$1"), J, Re < de && Xr(I.slice(Re, de)), de < te && Xr(I = I.slice(de)), de < te && Zi(I))
                        }
                        Ue.push(J)
                    } return tr(Ue)
            }

            function Ms(I, j) {
                var J = j.length > 0,
                    de = I.length > 0,
                    te = function(me, xe, Re, Me, ze) {
                        var Ue, Xe, ht, At = 0,
                            qe = "0",
                            Ht = me && [],
                            Jt = [],
                            fn = ee,
                            Ot = me || de && p.find.TAG("*", ze),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = Ot.length;
                        for (ze && (ee = xe == ce || xe || ze); qe !== h && (Ue = Ot[qe]) != null; qe++) {
                            if (de && Ue) {
                                for (Xe = 0, !xe && Ue.ownerDocument != ce && (re(Ue), Re = !rt); ht = I[Xe++];)
                                    if (ht(Ue, xe || ce, Re)) {
                                        Me.push(Ue);
                                        break
                                    } ze && (on = c)
                            }
                            J && ((Ue = !ht && Ue) && At--, me && Ht.push(Ue))
                        }
                        if (At += qe, J && qe !== At) {
                            for (Xe = 0; ht = j[Xe++];) ht(Ht, Jt, xe, Re);
                            if (me) {
                                if (At > 0)
                                    for (; qe--;) Ht[qe] || Jt[qe] || (Jt[qe] = Ln.call(Me));
                                Jt = nr(Jt)
                            }
                            Cn.apply(Me, Jt), ze && !me && Jt.length > 0 && At + j.length > 1 && St.uniqueSort(Me)
                        }
                        return ze && (on = c, ee = fn), Ht
                    };
                return J ? dn(te) : te
            }
            return z = St.compile = function(I, j) {
                var J, de = [],
                    te = [],
                    me = Xi[I + " "];
                if (!me) {
                    for (j || (j = T(I)), J = j.length; J--;) me = Xr(j[J]), me[_t] ? de.push(me) : te.push(me);
                    me = Xi(I, Ms(te, de)), me.selector = I
                }
                return me
            }, H = St.select = function(I, j, J, de) {
                var te, me, xe, Re, Me, ze = typeof I == "function" && I,
                    Ue = !de && T(I = ze.selector || I);
                if (J = J || [], Ue.length === 1) {
                    if (me = Ue[0] = Ue[0].slice(0), me.length > 2 && (xe = me[0]).type === "ID" && j.nodeType === 9 && rt && p.relative[me[1].type]) {
                        if (j = (p.find.ID(xe.matches[0].replace(Tn, xn), j) || [])[0], j) ze && (j = j.parentNode);
                        else return J;
                        I = I.slice(me.shift().value.length)
                    }
                    for (te = Yi.needsContext.test(I) ? 0 : me.length; te-- && (xe = me[te], !p.relative[Re = xe.type]);)
                        if ((Me = p.find[Re]) && (de = Me(xe.matches[0].replace(Tn, xn), Ur.test(me[0].type) && Wr(j.parentNode) || j))) {
                            if (me.splice(te, 1), I = de.length && Zi(me), !I) return Cn.apply(J, de), J;
                            break
                        }
                }
                return (ze || z(I, Ue))(de, j, !rt, J, !j || Ur.test(I) && Wr(j.parentNode) || j), J
            }, u.sortStable = _t.split("").sort(Kn).join("") === _t, u.detectDuplicates = !!be, re(), u.sortDetached = yn(function(I) {
                return I.compareDocumentPosition(ce.createElement("fieldset")) & 1
            }), yn(function(I) {
                return I.innerHTML = "<a href='#'></a>", I.firstChild.getAttribute("href") === "#"
            }) || Ji("type|href|height|width", function(I, j, J) {
                if (!J) return I.getAttribute(j, j.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !yn(function(I) {
                return I.innerHTML = "<input/>", I.firstChild.setAttribute("value", ""), I.firstChild.getAttribute("value") === ""
            })) && Ji("value", function(I, j, J) {
                if (!J && I.nodeName.toLowerCase() === "input") return I.defaultValue
            }), yn(function(I) {
                return I.getAttribute("disabled") == null
            }) || Ji(zr, function(I, j, J) {
                var de;
                if (!J) return I[j] === !0 ? j.toLowerCase() : (de = I.getAttributeNode(j)) && de.specified ? de.value : null
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

        function Q(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function U(r, s, u) {
            return ne(s) ? d.grep(r, function(p, w) {
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
        var ae, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            we = d.fn.init = function(r, s, u) {
                var p, w;
                if (!r) return this;
                if (u = u || ae, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof d ? s[0] : s, d.merge(this, d.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), je.test(p[1]) && d.isPlainObject(s))
                                for (p in s) ne(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return w = P.getElementById(p[2]), w && (this[0] = w, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (ne(r)) return u.ready !== void 0 ? u.ready(r) : r(d)
                }
                return d.makeArray(r, this)
            };
        we.prototype = d.fn, ae = d(P);
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
                return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (Q(r, "template") && (r = r.content || r), d.merge([], r.childNodes))
            }
        }, function(r, s) {
            d.fn[r] = function(u, p) {
                var w = d.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (w = d.filter(p, w)), this.length > 1 && (ue[r] || d.uniqueSort(w), ye.test(r) && w.reverse()), this.pushStack(w)
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
                ee = {
                    add: function() {
                        return x && (u && !s && (z = x.length - 1, T.push(u)), function le(be) {
                            d.each(be, function(re, ce) {
                                ne(ce) ? (!r.unique || !ee.has(ce)) && x.push(ce) : ce && ce.length && oe(ce) !== "string" && le(ce)
                            })
                        }(arguments), u && !s && H()), this
                    },
                    remove: function() {
                        return d.each(arguments, function(le, be) {
                            for (var re;
                                (re = d.inArray(be, x, re)) > -1;) x.splice(re, 1), re <= z && z--
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
                        return w || (be = be || [], be = [le, be.slice ? be.slice() : be], T.push(be), s || H()), this
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

        function Bt(r, s, u, p) {
            var w;
            try {
                r && ne(w = r.promise) ? w.call(r).done(s).fail(u) : r && ne(w = r.then) ? w.call(r, s, u) : s.apply(void 0, [r].slice(p))
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
                                    var ee = ne(x[H[4]]) && x[H[4]];
                                    w[H[1]](function() {
                                        var le = ee && ee.apply(this, arguments);
                                        le && ne(le.promise) ? le.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[H[0] + "With"](this, ee ? [le] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, z) {
                            var H = 0;

                            function ee(le, be, re, ce) {
                                return function() {
                                    var Ge = this,
                                        rt = arguments,
                                        Fe = function() {
                                            var Nt, un;
                                            if (!(le < H)) {
                                                if (Nt = re.apply(Ge, rt), Nt === be.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Nt && (typeof Nt == "object" || typeof Nt == "function") && Nt.then, ne(un) ? ce ? un.call(Nt, ee(H, be, Ke, ce), ee(H, be, dt, ce)) : (H++, un.call(Nt, ee(H, be, Ke, ce), ee(H, be, dt, ce), ee(H, be, Ke, be.notifyWith))) : (re !== Ke && (Ge = void 0, rt = [Nt]), (ce || be.resolveWith)(Ge, rt))
                                            }
                                        },
                                        zt = ce ? Fe : function() {
                                            try {
                                                Fe()
                                            } catch (Nt) {
                                                d.Deferred.exceptionHook && d.Deferred.exceptionHook(Nt, zt.stackTrace), le + 1 >= H && (re !== dt && (Ge = void 0, rt = [Nt]), be.rejectWith(Ge, rt))
                                            }
                                        };
                                    le ? zt() : (d.Deferred.getStackHook && (zt.stackTrace = d.Deferred.getStackHook()), e.setTimeout(zt))
                                }
                            }
                            return d.Deferred(function(le) {
                                s[0][3].add(ee(0, le, ne(z) ? z : Ke, le.notifyWith)), s[1][3].add(ee(0, le, ne(x) ? x : Ke)), s[2][3].add(ee(0, le, ne(T) ? T : dt))
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
                if (s <= 1 && (Bt(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || ne(w[u] && w[u].then))) return x.then();
                for (; u--;) Bt(w[u], T(u), x.reject);
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
                    ee = u == null;
                if (oe(u) === "object") {
                    w = !0;
                    for (z in u) g(r, s, z, u[z], !0, x, T)
                } else if (p !== void 0 && (w = !0, ne(p) || (T = !0), ee && (T ? (s.call(r, p), s = null) : (ee = s, s = function(le, be, re) {
                        return ee.call(d(le), re)
                    })), s))
                    for (; z < H; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return w ? r : ee ? s.call(r) : H ? s(r[0], u) : x
            },
            S = /^-ms-/,
            O = /-([a-z])/g;

        function M(r, s) {
            return s.toUpperCase()
        }

        function B(r) {
            return r.replace(S, "ms-").replace(O, M)
        }
        var ie = function(r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function ke() {
            this.expando = d.expando + ke.uid++
        }
        ke.uid = 1, ke.prototype = {
            cache: function(r) {
                var s = r[this.expando];
                return s || (s = {}, ie(r) && (r.nodeType ? r[this.expando] = s : Object.defineProperty(r, this.expando, {
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
        var he = new ke,
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
                var u, p, w, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (w = De.get(x), x.nodeType === 1 && !he.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = B(p.slice(5)), rn(x, p, w[p])));
                        he.set(x, "hasDataAttrs", !0)
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
        var F = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && d.css(r, "display") === "none"
        };

        function N(r, s, u, p) {
            var w, x, T = 20,
                z = p ? function() {
                    return p.cur()
                } : function() {
                    return d.css(r, s, "")
                },
                H = z(),
                ee = u && u[3] || (d.cssNumber[s] ? "" : "px"),
                le = r.nodeType && (d.cssNumber[s] || ee !== "px" && +H) && yt.exec(d.css(r, s));
            if (le && le[3] !== ee) {
                for (H = H / 2, ee = ee || le[3], le = +H || 1; T--;) d.style(r, s, le + ee), (1 - x) * (1 - (x = z() / H || .5)) <= 0 && (T = 0), le = le / x;
                le = le * 2, d.style(r, s, le + ee), u = u || []
            }
            return u && (le = +le || +H || 0, w = u[1] ? le + (u[1] + 1) * u[2] : +u[2], p && (p.unit = ee, p.start = le, p.end = w)), w
        }
        var K = {};

        function L(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                w = K[p];
            return w || (s = u.body.appendChild(u.createElement(p)), w = d.css(s, "display"), s.parentNode.removeChild(s), w === "none" && (w = "block"), K[p] = w, w)
        }

        function q(r, s) {
            for (var u, p, w = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (w[x] = he.get(p, "display") || null, w[x] || (p.style.display = "")), p.style.display === "" && F(p) && (w[x] = L(p))) : u !== "none" && (w[x] = "none", he.set(p, "display", u)));
            for (x = 0; x < T; x++) w[x] != null && (r[x].style.display = w[x]);
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
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), G.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", G.option = !!s.lastChild
        })();
        var Ve = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, G.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && Q(r, s) ? d.merge([r], u) : u
        }

        function Ft(r, s) {
            for (var u = 0, p = r.length; u < p; u++) he.set(r[u], "globalEval", !s || he.get(s[u], "globalEval"))
        }
        var Ye = /<|&#?\w+;/;

        function In(r, s, u, p, w) {
            for (var x, T, z, H, ee, le, be = s.createDocumentFragment(), re = [], ce = 0, Ge = r.length; ce < Ge; ce++)
                if (x = r[ce], x || x === 0)
                    if (oe(x) === "object") d.merge(re, x.nodeType ? [x] : x);
                    else if (!Ye.test(x)) re.push(s.createTextNode(x));
            else {
                for (T = T || be.appendChild(s.createElement("div")), z = (pe.exec(x) || ["", ""])[1].toLowerCase(), H = Ve[z] || Ve._default, T.innerHTML = H[1] + d.htmlPrefilter(x) + H[2], le = H[0]; le--;) T = T.lastChild;
                d.merge(re, T.childNodes), T = be.firstChild, T.textContent = ""
            }
            for (be.textContent = "", ce = 0; x = re[ce++];) {
                if (p && d.inArray(x, p) > -1) {
                    w && w.push(x);
                    continue
                }
                if (ee = Je(x), T = pt(be.appendChild(x), "script"), ee && Ft(T), u)
                    for (le = 0; x = T[le++];) Ne.test(x.type || "") && u.push(x)
            }
            return be
        }
        var Pn = /^([^.]*)(?:\.(.+)|)/;

        function it() {
            return !0
        }

        function Dn() {
            return !1
        }

        function gi(r, s) {
            return r === kr() == (s === "focus")
        }

        function kr() {
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
                var x, T, z, H, ee, le, be, re, ce, Ge, rt, Fe = he.get(r);
                if (!!ie(r))
                    for (u.handler && (x = u, u = x.handler, w = x.selector), w && d.find.matchesSelector(Kt, w), u.guid || (u.guid = d.guid++), (H = Fe.events) || (H = Fe.events = Object.create(null)), (T = Fe.handle) || (T = Fe.handle = function(zt) {
                            return typeof d < "u" && d.event.triggered !== zt.type ? d.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], ee = s.length; ee--;) z = Pn.exec(s[ee]) || [], ce = rt = z[1], Ge = (z[2] || "").split(".").sort(), ce && (be = d.event.special[ce] || {}, ce = (w ? be.delegateType : be.bindType) || ce, be = d.event.special[ce] || {}, le = d.extend({
                        type: ce,
                        origType: rt,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: w,
                        needsContext: w && d.expr.match.needsContext.test(w),
                        namespace: Ge.join(".")
                    }, x), (re = H[ce]) || (re = H[ce] = [], re.delegateCount = 0, (!be.setup || be.setup.call(r, p, Ge, T) === !1) && r.addEventListener && r.addEventListener(ce, T)), be.add && (be.add.call(r, le), le.handler.guid || (le.handler.guid = u.guid)), w ? re.splice(re.delegateCount++, 0, le) : re.push(le), d.event.global[ce] = !0)
            },
            remove: function(r, s, u, p, w) {
                var x, T, z, H, ee, le, be, re, ce, Ge, rt, Fe = he.hasData(r) && he.get(r);
                if (!(!Fe || !(H = Fe.events))) {
                    for (s = (s || "").match(Te) || [""], ee = s.length; ee--;) {
                        if (z = Pn.exec(s[ee]) || [], ce = rt = z[1], Ge = (z[2] || "").split(".").sort(), !ce) {
                            for (ce in H) d.event.remove(r, ce + s[ee], u, p, !0);
                            continue
                        }
                        for (be = d.event.special[ce] || {}, ce = (p ? be.delegateType : be.bindType) || ce, re = H[ce] || [], z = z[2] && new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = re.length; x--;) le = re[x], (w || rt === le.origType) && (!u || u.guid === le.guid) && (!z || z.test(le.namespace)) && (!p || p === le.selector || p === "**" && le.selector) && (re.splice(x, 1), le.selector && re.delegateCount--, be.remove && be.remove.call(r, le));
                        T && !re.length && ((!be.teardown || be.teardown.call(r, Ge, Fe.handle) === !1) && d.removeEvent(r, ce, Fe.handle), delete H[ce])
                    }
                    d.isEmptyObject(H) && he.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, w, x, T, z = new Array(arguments.length),
                    H = d.event.fix(r),
                    ee = (he.get(this, "events") || Object.create(null))[H.type] || [],
                    le = d.event.special[H.type] || {};
                for (z[0] = H, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (H.delegateTarget = this, !(le.preDispatch && le.preDispatch.call(this, H) === !1)) {
                    for (T = d.event.handlers.call(this, H, ee), s = 0;
                        (w = T[s++]) && !H.isPropagationStopped();)
                        for (H.currentTarget = w.elem, u = 0;
                            (x = w.handlers[u++]) && !H.isImmediatePropagationStopped();)(!H.rnamespace || x.namespace === !1 || H.rnamespace.test(x.namespace)) && (H.handleObj = x, H.data = x.data, p = ((d.event.special[x.origType] || {}).handle || x.handler).apply(w.elem, z), p !== void 0 && (H.result = p) === !1 && (H.preventDefault(), H.stopPropagation()));
                    return le.postDispatch && le.postDispatch.call(this, H), H.result
                }
            },
            handlers: function(r, s) {
                var u, p, w, x, T, z = [],
                    H = s.delegateCount,
                    ee = r.target;
                if (H && ee.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; ee !== this; ee = ee.parentNode || this)
                        if (ee.nodeType === 1 && !(r.type === "click" && ee.disabled === !0)) {
                            for (x = [], T = {}, u = 0; u < H; u++) p = s[u], w = p.selector + " ", T[w] === void 0 && (T[w] = p.needsContext ? d(w, this).index(ee) > -1 : d.find(w, this, null, [ee]).length), T[w] && x.push(p);
                            x.length && z.push({
                                elem: ee,
                                handlers: x
                            })
                        }
                }
                return ee = this, H < s.length && z.push({
                    elem: ee,
                    handlers: s.slice(H)
                }), z
            },
            addProp: function(r, s) {
                Object.defineProperty(d.Event.prototype, r, {
                    enumerable: !0,
                    configurable: !0,
                    get: ne(s) ? function() {
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
                        return fe.test(s.type) && s.click && Q(s, "input") && sn(s, "click", it), !1
                    },
                    trigger: function(r) {
                        var s = this || r;
                        return fe.test(s.type) && s.click && Q(s, "input") && sn(s, "click"), !0
                    },
                    _default: function(r) {
                        var s = r.target;
                        return fe.test(s.type) && s.click && Q(s, "input") && he.get(s, "click") || Q(s, "a")
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
        var Tr = /<script|<style|<link/i,
            Ar = /checked\s*(?:[^=]|=\s*.checked.)/i,
            mi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Fi(r, s) {
            return Q(r, "table") && Q(s.nodeType !== 11 ? s : s.firstChild, "tr") && d(r).children("tbody")[0] || r
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
                if (he.hasData(r) && (x = he.get(r), H = x.events, H)) {
                    he.remove(s, "handle events");
                    for (w in H)
                        for (u = 0, p = H[w].length; u < p; u++) d.event.add(s, w, H[w][u])
                }
                De.hasData(r) && (T = De.access(r), z = d.extend({}, T), De.set(s, z))
            }
        }

        function zi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && fe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, u, p) {
            s = m(s);
            var w, x, T, z, H, ee, le = 0,
                be = r.length,
                re = be - 1,
                ce = s[0],
                Ge = ne(ce);
            if (Ge || be > 1 && typeof ce == "string" && !G.checkClone && Ar.test(ce)) return r.each(function(rt) {
                var Fe = r.eq(rt);
                Ge && (s[0] = ce.call(this, rt, Fe.html())), mn(Fe, s, u, p)
            });
            if (be && (w = In(s, r[0].ownerDocument, !1, r, p), x = w.firstChild, w.childNodes.length === 1 && (w = x), x || p)) {
                for (T = d.map(pt(w, "script"), vi), z = T.length; le < be; le++) H = w, le !== re && (H = d.clone(H, !0, !0), z && d.merge(T, pt(H, "script"))), u.call(r[le], H, le);
                if (z)
                    for (ee = T[T.length - 1].ownerDocument, d.map(T, yi), le = 0; le < z; le++) H = T[le], Ne.test(H.type || "") && !he.access(H, "globalEval") && d.contains(ee, H) && (H.src && (H.type || "").toLowerCase() !== "module" ? d._evalUrl && !H.noModule && d._evalUrl(H.src, {
                        nonce: H.nonce || H.getAttribute("nonce")
                    }, ee) : se(H.textContent.replace(mi, ""), H, ee))
            }
            return r
        }

        function Hi(r, s, u) {
            for (var p, w = s ? d.filter(s, r) : r, x = 0;
                (p = w[x]) != null; x++) !u && p.nodeType === 1 && d.cleanData(pt(p)), p.parentNode && (u && Je(p) && Ft(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        d.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, w, x, T, z = r.cloneNode(!0),
                    H = Je(r);
                if (!G.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !d.isXMLDoc(r))
                    for (T = pt(z), x = pt(r), p = 0, w = x.length; p < w; p++) zi(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || pt(r), T = T || pt(z), p = 0, w = x.length; p < w; p++) ji(x[p], T[p]);
                    else ji(r, z);
                return T = pt(z, "script"), T.length > 0 && Ft(T, !H && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, w = d.event.special, x = 0;
                    (u = r[x]) !== void 0; x++)
                    if (ie(u)) {
                        if (s = u[he.expando]) {
                            if (s.events)
                                for (p in s.events) w[p] ? d.event.remove(u, p) : d.removeEvent(u, p, s.handle);
                            u[he.expando] = void 0
                        }
                        u[De.expando] && (u[De.expando] = void 0)
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
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Fi(this, r);
                        s.appendChild(r)
                    }
                })
            },
            prepend: function() {
                return mn(this, arguments, function(r) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var s = Fi(this, r);
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
                    if (typeof s == "string" && !Tr.test(s) && !Ve[(pe.exec(s) || ["", ""])[1].toLowerCase()]) {
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
        var wi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            Hn = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Ui = function(r, s, u) {
                var p, w, x = {};
                for (w in s) x[w] = r.style[w], r.style[w] = s[w];
                p = u.call(r);
                for (w in s) r.style[w] = x[w];
                return p
            },
            bi = new RegExp(bt.join("|"), "i");
        (function() {
            function r() {
                if (!!ee) {
                    H.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", ee.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Kt.appendChild(H).appendChild(ee);
                    var le = e.getComputedStyle(ee);
                    u = le.top !== "1%", z = s(le.marginLeft) === 12, ee.style.right = "60%", x = s(le.right) === 36, p = s(le.width) === 36, ee.style.position = "absolute", w = s(ee.offsetWidth / 3) === 12, Kt.removeChild(H), ee = null
                }
            }

            function s(le) {
                return Math.round(parseFloat(le))
            }
            var u, p, w, x, T, z, H = P.createElement("div"),
                ee = P.createElement("div");
            !ee.style || (ee.style.backgroundClip = "content-box", ee.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = ee.style.backgroundClip === "content-box", d.extend(G, {
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
                    var le, be, re, ce;
                    return T == null && (le = P.createElement("table"), be = P.createElement("tr"), re = P.createElement("div"), le.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", be.style.cssText = "border:1px solid", be.style.height = "1px", re.style.height = "9px", re.style.display = "block", Kt.appendChild(le).appendChild(be).appendChild(re), ce = e.getComputedStyle(be), T = parseInt(ce.height, 10) + parseInt(ce.borderTopWidth, 10) + parseInt(ce.borderBottomWidth, 10) === be.offsetHeight, Kt.removeChild(le)), T
                }
            }))
        })();

        function Ze(r, s, u) {
            var p, w, x, T, z = r.style;
            return u = u || Hn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = d.style(r, s)), !G.pixelBoxStyles() && wi.test(T) && bi.test(s) && (p = z.width, w = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = w, z.maxWidth = x)), T !== void 0 ? T + "" : T
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

        function Z(r) {
            for (var s = r[0].toUpperCase() + r.slice(1), u = o.length; u--;)
                if (r = o[u] + s, r in C) return r
        }

        function Ce(r) {
            var s = d.cssProps[r] || A[r];
            return s || (r in C ? r : A[r] = Z(r) || r)
        }
        var We = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            qt = {
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

        function Gn(r, s, u, p, w, x) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                H = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (H += d.css(r, u + bt[T], !0, w)), p ? (u === "content" && (H -= d.css(r, "padding" + bt[T], !0, w)), u !== "margin" && (H -= d.css(r, "border" + bt[T] + "Width", !0, w))) : (H += d.css(r, "padding" + bt[T], !0, w), u !== "padding" ? H += d.css(r, "border" + bt[T] + "Width", !0, w) : z += d.css(r, "border" + bt[T] + "Width", !0, w));
            return !p && x >= 0 && (H += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - H - z - .5)) || 0), H
        }

        function Or(r, s, u) {
            var p = Hn(r),
                w = !G.boxSizingReliable() || u,
                x = w && d.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                z = Ze(r, s, p),
                H = "offset" + s[0].toUpperCase() + s.slice(1);
            if (wi.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!G.boxSizingReliable() && x || !G.reliableTrDimensions() && Q(r, "tr") || z === "auto" || !parseFloat(z) && d.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = d.css(r, "boxSizing", !1, p) === "border-box", T = H in r, T && (z = r[H])), z = parseFloat(z) || 0, z + Gn(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
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
                    var w, x, T, z = B(s),
                        H = It.test(s),
                        ee = r.style;
                    if (H || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], u !== void 0) {
                        if (x = typeof u, x === "string" && (w = yt.exec(u)) && w[1] && (u = N(r, s, w), x = "number"), u == null || u !== u) return;
                        x === "number" && !H && (u += w && w[3] || (d.cssNumber[z] ? "" : "px")), !G.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (ee[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (H ? ee.setProperty(s, u) : ee[s] = u)
                    } else return T && "get" in T && (w = T.get(r, !1, p)) !== void 0 ? w : ee[s]
                }
            },
            css: function(r, s, u, p) {
                var w, x, T, z = B(s),
                    H = It.test(s);
                return H || (s = Ce(z)), T = d.cssHooks[s] || d.cssHooks[z], T && "get" in T && (w = T.get(r, !0, u)), w === void 0 && (w = Ze(r, s, p)), w === "normal" && s in Un && (w = Un[s]), u === "" || u ? (x = parseFloat(w), u === !0 || isFinite(x) ? x || 0 : w) : w
            }
        }), d.each(["height", "width"], function(r, s) {
            d.cssHooks[s] = {
                get: function(u, p, w) {
                    if (p) return We.test(d.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Ui(u, qt, function() {
                        return Or(u, s, w)
                    }) : Or(u, s, w)
                },
                set: function(u, p, w) {
                    var x, T = Hn(u),
                        z = !G.scrollboxSize() && T.position === "absolute",
                        H = z || w,
                        ee = H && d.css(u, "boxSizing", !1, T) === "border-box",
                        le = w ? Gn(u, s, w, ee, T) : 0;
                    return ee && z && (le -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Gn(u, s, "border", !1, T) - .5)), le && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = d.css(u, s)), Nn(u, p, le)
                }
            }
        }), d.cssHooks.marginLeft = y(G.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Ui(r, {
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
        var jt, Gi, Co = /^(?:toggle|show|hide)$/,
            xo = /queueHooks$/;

        function Rr() {
            Gi && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Rr) : e.setTimeout(Rr, d.fx.interval), d.fx.tick())
        }

        function Ir() {
            return e.setTimeout(function() {
                jt = void 0
            }), jt = Date.now()
        }

        function Wi(r, s) {
            var u, p = 0,
                w = {
                    height: r
                };
            for (s = s ? 1 : 0; p < 4; p += 2 - s) u = bt[p], w["margin" + u] = w["padding" + u] = r;
            return s && (w.opacity = w.width = r), w
        }

        function ms(r, s, u) {
            for (var p, w = (bn.tweeners[s] || []).concat(bn.tweeners["*"]), x = 0, T = w.length; x < T; x++)
                if (p = w[x].call(u, s, r)) return p
        }

        function Eo(r, s, u) {
            var p, w, x, T, z, H, ee, le, be = "width" in s || "height" in s,
                re = this,
                ce = {},
                Ge = r.style,
                rt = r.nodeType && F(r),
                Fe = he.get(r, "fxshow");
            u.queue || (T = d._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, re.always(function() {
                re.always(function() {
                    T.unqueued--, d.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (w = s[p], Co.test(w)) {
                    if (delete s[p], x = x || w === "toggle", w === (rt ? "hide" : "show"))
                        if (w === "show" && Fe && Fe[p] !== void 0) rt = !0;
                        else continue;
                    ce[p] = Fe && Fe[p] || d.style(r, p)
                } if (H = !d.isEmptyObject(s), !(!H && d.isEmptyObject(ce))) {
                be && r.nodeType === 1 && (u.overflow = [Ge.overflow, Ge.overflowX, Ge.overflowY], ee = Fe && Fe.display, ee == null && (ee = he.get(r, "display")), le = d.css(r, "display"), le === "none" && (ee ? le = ee : (q([r], !0), ee = r.style.display || ee, le = d.css(r, "display"), q([r]))), (le === "inline" || le === "inline-block" && ee != null) && d.css(r, "float") === "none" && (H || (re.done(function() {
                    Ge.display = ee
                }), ee == null && (le = Ge.display, ee = le === "none" ? "" : le)), Ge.display = "inline-block")), u.overflow && (Ge.overflow = "hidden", re.always(function() {
                    Ge.overflow = u.overflow[0], Ge.overflowX = u.overflow[1], Ge.overflowY = u.overflow[2]
                })), H = !1;
                for (p in ce) H || (Fe ? "hidden" in Fe && (rt = Fe.hidden) : Fe = he.access(r, "fxshow", {
                    display: ee
                }), x && (Fe.hidden = !rt), rt && q([r], !0), re.done(function() {
                    rt || q([r]), he.remove(r, "fxshow");
                    for (p in ce) d.style(r, p, ce[p])
                })), H = ms(rt ? Fe[p] : 0, p, re), p in Fe || (Fe[p] = H.start, rt && (H.end = H.start, H.start = 0))
            }
        }

        function vs(r, s) {
            var u, p, w, x, T;
            for (u in r)
                if (p = B(u), w = s[p], x = r[u], Array.isArray(x) && (w = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = d.cssHooks[p], T && "expand" in T) {
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
                    for (var be = jt || Ir(), re = Math.max(0, ee.startTime + ee.duration - be), ce = re / ee.duration || 0, Ge = 1 - ce, rt = 0, Fe = ee.tweens.length; rt < Fe; rt++) ee.tweens[rt].run(Ge);
                    return z.notifyWith(r, [ee, Ge, re]), Ge < 1 && Fe ? re : (Fe || z.notifyWith(r, [ee, 1, 0]), z.resolveWith(r, [ee]), !1)
                },
                ee = z.promise({
                    elem: r,
                    props: d.extend({}, s),
                    opts: d.extend(!0, {
                        specialEasing: {},
                        easing: d.easing._default
                    }, u),
                    originalProperties: s,
                    originalOptions: u,
                    startTime: jt || Ir(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(be, re) {
                        var ce = d.Tween(r, ee.opts, be, re, ee.opts.specialEasing[be] || ee.opts.easing);
                        return ee.tweens.push(ce), ce
                    },
                    stop: function(be) {
                        var re = 0,
                            ce = be ? ee.tweens.length : 0;
                        if (w) return this;
                        for (w = !0; re < ce; re++) ee.tweens[re].run(1);
                        return be ? (z.notifyWith(r, [ee, 1, 0]), z.resolveWith(r, [ee, be])) : z.rejectWith(r, [ee, be]), this
                    }
                }),
                le = ee.props;
            for (vs(le, ee.opts.specialEasing); x < T; x++)
                if (p = bn.prefilters[x].call(ee, r, le, ee.opts), p) return ne(p.stop) && (d._queueHooks(ee.elem, ee.opts.queue).stop = p.stop.bind(p)), p;
            return d.map(le, ms, ee), ne(ee.opts.start) && ee.opts.start.call(r, ee), ee.progress(ee.opts.progress).done(ee.opts.done, ee.opts.complete).fail(ee.opts.fail).always(ee.opts.always), d.fx.timer(d.extend(H, {
                elem: r,
                anim: ee,
                queue: ee.opts.queue
            })), ee
        }
        d.Animation = d.extend(bn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return N(u.elem, r, yt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    ne(r) ? (s = r, r = ["*"]) : r = r.match(Te);
                    for (var u, p = 0, w = r.length; p < w; p++) u = r[p], bn.tweeners[u] = bn.tweeners[u] || [], bn.tweeners[u].unshift(s)
                },
                prefilters: [Eo],
                prefilter: function(r, s) {
                    s ? bn.prefilters.unshift(r) : bn.prefilters.push(r)
                }
            }), d.speed = function(r, s, u) {
                var p = r && typeof r == "object" ? d.extend({}, r) : {
                    complete: u || !u && s || ne(r) && r,
                    duration: r,
                    easing: u && s || s && !ne(s) && s
                };
                return d.fx.off ? p.duration = 0 : typeof p.duration != "number" && (p.duration in d.fx.speeds ? p.duration = d.fx.speeds[p.duration] : p.duration = d.fx.speeds._default), (p.queue == null || p.queue === !0) && (p.queue = "fx"), p.old = p.complete, p.complete = function() {
                    ne(p.old) && p.old.call(this), p.queue && d.dequeue(this, p.queue)
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
                            for (x in z) z[x] && z[x].stop && xo.test(x) && p(z[x]);
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
                Gi || (Gi = !0, Rr())
            }, d.fx.stop = function() {
                Gi = null
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
                r.type = "checkbox", G.checkOn = r.value !== "", G.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", G.radioValue = r.value === "t"
            }();
        var Dr, Ci = d.expr.attrHandle;
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
                        if (!G.radioValue && s === "radio" && Q(r, "input")) {
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
        }), Dr = {
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
                var p, w, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !d.isXMLDoc(r)) && (s = d.propFix[s] || s, w = d.propHooks[s]), u !== void 0 ? w && "set" in w && (p = w.set(r, u, s)) !== void 0 ? p : r[s] = u : w && "get" in w && (p = w.get(r, s)) !== null ? p : r[s]
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
        }), G.optSelected || (d.propHooks.selected = {
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
            var s = r.match(Te) || [];
            return s.join(" ")
        }

        function qn(r) {
            return r.getAttribute && r.getAttribute("class") || ""
        }

        function Lr(r) {
            return Array.isArray(r) ? r : typeof r == "string" ? r.match(Te) || [] : []
        }
        d.fn.extend({
            addClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (ne(r)) return this.each(function(ee) {
                    d(this).addClass(r.call(this, ee, qn(this)))
                });
                if (s = Lr(r), s.length) {
                    for (; u = this[H++];)
                        if (w = qn(u), p = u.nodeType === 1 && " " + Wn(w) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            z = Wn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, w, x, T, z, H = 0;
                if (ne(r)) return this.each(function(ee) {
                    d(this).removeClass(r.call(this, ee, qn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Lr(r), s.length) {
                    for (; u = this[H++];)
                        if (w = qn(u), p = u.nodeType === 1 && " " + Wn(w) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                            z = Wn(p), w !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : ne(r) ? this.each(function(w) {
                    d(this).toggleClass(r.call(this, w, qn(this), s), s)
                }) : this.each(function() {
                    var w, x, T, z;
                    if (p)
                        for (x = 0, T = d(this), z = Lr(r); w = z[x++];) T.hasClass(w) ? T.removeClass(w) : T.addClass(w);
                    else(r === void 0 || u === "boolean") && (w = qn(this), w && he.set(this, "__className__", w), this.setAttribute && this.setAttribute("class", w || r === !1 ? "" : he.get(this, "__className__") || ""))
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
                var s, u, p, w = this[0];
                return arguments.length ? (p = ne(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, d(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = d.map(T, function(z) {
                        return z == null ? "" : z + ""
                    })), s = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : w ? (s = d.valHooks[w.type] || d.valHooks[w.nodeName.toLowerCase()], s && "get" in s && (u = s.get(w, "value")) !== void 0 ? u : (u = w.value, typeof u == "string" ? u.replace(ko, "") : u == null ? "" : u)) : void 0
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
                            z = T ? null : [],
                            H = T ? x + 1 : w.length;
                        for (x < 0 ? p = H : p = T ? x : 0; p < H; p++)
                            if (u = w[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !Q(u.parentNode, "optgroup"))) {
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
            }, G.checkOn || (d.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), G.focusin = "onfocusin" in e;
        var Mr = /^(?:focusinfocus|focusoutblur)$/,
            Xn = function(r) {
                r.stopPropagation()
            };
        d.extend(d.event, {
            trigger: function(r, s, u, p) {
                var w, x, T, z, H, ee, le, be, re = [u || P],
                    ce = V.call(r, "type") ? r.type : r,
                    Ge = V.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = be = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Mr.test(ce + d.event.triggered) && (ce.indexOf(".") > -1 && (Ge = ce.split("."), ce = Ge.shift(), Ge.sort()), H = ce.indexOf(":") < 0 && "on" + ce, r = r[d.expando] ? r : new d.Event(ce, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ge.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ge.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : d.makeArray(s, [r]), le = d.event.special[ce] || {}, !(!p && le.trigger && le.trigger.apply(u, s) === !1))) {
                    if (!p && !le.noBubble && !v(u)) {
                        for (z = le.delegateType || ce, Mr.test(z + ce) || (x = x.parentNode); x; x = x.parentNode) re.push(x), T = x;
                        T === (u.ownerDocument || P) && re.push(T.defaultView || T.parentWindow || e)
                    }
                    for (w = 0;
                        (x = re[w++]) && !r.isPropagationStopped();) be = x, r.type = w > 1 ? z : le.bindType || ce, ee = (he.get(x, "events") || Object.create(null))[r.type] && he.get(x, "handle"), ee && ee.apply(x, s), ee = H && x[H], ee && ee.apply && ie(x) && (r.result = ee.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ce, !p && !r.isDefaultPrevented() && (!le._default || le._default.apply(re.pop(), s) === !1) && ie(u) && H && ne(u[ce]) && !v(u) && (T = u[H], T && (u[H] = null), d.event.triggered = ce, r.isPropagationStopped() && be.addEventListener(ce, Xn), u[ce](), r.isPropagationStopped() && be.removeEventListener(ce, Xn), d.event.triggered = void 0, T && (u[H] = T)), r.result
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
        }), G.focusin || d.each({
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
        var xi = e.location,
            Pr = {
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
            ys = /\r?\n/g,
            Ao = /^(?:submit|button|image|reset|file)$/i,
            Oo = /^(?:input|select|textarea|keygen)/i;

        function Nr(r, s, u, p) {
            var w;
            if (Array.isArray(s)) d.each(s, function(x, T) {
                u || To.test(r) ? p(r, T) : Nr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
            });
            else if (!u && oe(s) === "object")
                for (w in s) Nr(r + "[" + w + "]", s[w], u, p);
            else p(r, s)
        }
        d.param = function(r, s) {
            var u, p = [],
                w = function(x, T) {
                    var z = ne(T) ? T() : T;
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
                    return this.name && !d(this).is(":disabled") && Oo.test(this.nodeName) && !Ao.test(r) && (this.checked || !fe.test(r))
                }).map(function(r, s) {
                    var u = d(this).val();
                    return u == null ? null : Array.isArray(u) ? d.map(u, function(p) {
                        return {
                            name: s.name,
                            value: p.replace(ys, `\r
`)
                        }
                    }) : {
                        name: s.name,
                        value: u.replace(ys, `\r
`)
                    }
                }).get()
            }
        });
        var Ro = /%20/g,
            Io = /#.*$/,
            Do = /([?&])_=[^&]*/,
            Yn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ws = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Lo = /^(?:GET|HEAD)$/,
            Mo = /^\/\//,
            bs = {},
            Vr = {},
            Cs = "*/".concat("*"),
            Br = P.createElement("a");
        Br.href = xi.href;

        function xs(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, w = 0,
                    x = s.toLowerCase().match(Te) || [];
                if (ne(u))
                    for (; p = x[w++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function Es(r, s, u, p) {
            var w = {},
                x = r === Vr;

            function T(z) {
                var H;
                return w[z] = !0, d.each(r[z] || [], function(ee, le) {
                    var be = le(s, u, p);
                    if (typeof be == "string" && !x && !w[be]) return s.dataTypes.unshift(be), T(be), !1;
                    if (x) return !(H = be)
                }), H
            }
            return T(s.dataTypes[0]) || !w["*"] && T("*")
        }

        function $r(r, s) {
            var u, p, w = d.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((w[u] ? r : p || (p = {}))[u] = s[u]);
            return p && d.extend(!0, r, p), r
        }

        function Po(r, s, u) {
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

        function No(r, s, u, p) {
            var w, x, T, z, H, ee = {},
                le = r.dataTypes.slice();
            if (le[1])
                for (T in r.converters) ee[T.toLowerCase()] = r.converters[T];
            for (x = le.shift(); x;)
                if (r.responseFields[x] && (u[r.responseFields[x]] = s), !H && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), H = x, x = le.shift(), x) {
                    if (x === "*") x = H;
                    else if (H !== "*" && H !== x) {
                        if (T = ee[H + " " + x] || ee["* " + x], !T) {
                            for (w in ee)
                                if (z = w.split(" "), z[1] === x && (T = ee[H + " " + z[0]] || ee["* " + z[0]], T)) {
                                    T === !0 ? T = ee[w] : ee[w] !== !0 && (x = z[0], le.unshift(z[1]));
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
        d.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: xi.href,
                type: "GET",
                isLocal: ws.test(xi.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Cs,
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
            ajaxPrefilter: xs(bs),
            ajaxTransport: xs(Vr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, w, x, T, z, H, ee, le, be, re = d.ajaxSetup({}, s),
                    ce = re.context || re,
                    Ge = re.context && (ce.nodeType || ce.jquery) ? d(ce) : d.event,
                    rt = d.Deferred(),
                    Fe = d.Callbacks("once memory"),
                    zt = re.statusCode || {},
                    Nt = {},
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
                            return H == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Nt[ft] = Dt), this
                        },
                        overrideMimeType: function(ft) {
                            return H == null && (re.mimeType = ft), this
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
                if (rt.promise(et), re.url = ((r || re.url || xi.href) + "").replace(Mo, xi.protocol + "//"), re.type = s.method || s.type || re.method || re.type, re.dataTypes = (re.dataType || "*").toLowerCase().match(Te) || [""], re.crossDomain == null) {
                    z = P.createElement("a");
                    try {
                        z.href = re.url, z.href = z.href, re.crossDomain = Br.protocol + "//" + Br.host != z.protocol + "//" + z.host
                    } catch {
                        re.crossDomain = !0
                    }
                }
                if (re.data && re.processData && typeof re.data != "string" && (re.data = d.param(re.data, re.traditional)), Es(bs, re, s, et), H) return et;
                ee = d.event && re.global, ee && d.active++ === 0 && d.event.trigger("ajaxStart"), re.type = re.type.toUpperCase(), re.hasContent = !Lo.test(re.type), p = re.url.replace(Io, ""), re.hasContent ? re.data && re.processData && (re.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (re.data = re.data.replace(Ro, "+")) : (be = re.url.slice(p.length), re.data && (re.processData || typeof re.data == "string") && (p += (qi.test(p) ? "&" : "?") + re.data, delete re.data), re.cache === !1 && (p = p.replace(Do, "$1"), be = (qi.test(p) ? "&" : "?") + "_=" + Pr.guid++ + be), re.url = p + be), re.ifModified && (d.lastModified[p] && et.setRequestHeader("If-Modified-Since", d.lastModified[p]), d.etag[p] && et.setRequestHeader("If-None-Match", d.etag[p])), (re.data && re.hasContent && re.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", re.contentType), et.setRequestHeader("Accept", re.dataTypes[0] && re.accepts[re.dataTypes[0]] ? re.accepts[re.dataTypes[0]] + (re.dataTypes[0] !== "*" ? ", " + Cs + "; q=0.01" : "") : re.accepts["*"]);
                for (le in re.headers) et.setRequestHeader(le, re.headers[le]);
                if (re.beforeSend && (re.beforeSend.call(ce, et, re) === !1 || H)) return et.abort();
                if (_t = "abort", Fe.add(re.complete), et.done(re.success), et.fail(re.error), u = Es(Vr, re, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, ee && Ge.trigger("ajaxSend", [et, re]), H) return et;
                    re.async && re.timeout > 0 && (T = e.setTimeout(function() {
                        et.abort("timeout")
                    }, re.timeout));
                    try {
                        H = !1, u.send(Nt, on)
                    } catch (ft) {
                        if (H) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Dt, _i, Xi) {
                    var hn, Kn, Jn, an, Ln, vn = Dt;
                    H || (H = !0, T && e.clearTimeout(T), u = void 0, w = Xi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, _i && (an = Po(re, et, _i)), !hn && d.inArray("script", re.dataTypes) > -1 && d.inArray("json", re.dataTypes) < 0 && (re.converters["text script"] = function() {}), an = No(re, an, et, hn), hn ? (re.ifModified && (Ln = et.getResponseHeader("Last-Modified"), Ln && (d.lastModified[p] = Ln), Ln = et.getResponseHeader("etag"), Ln && (d.etag[p] = Ln)), ft === 204 || re.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Dt || vn) + "", hn ? rt.resolveWith(ce, [Kn, vn, et]) : rt.rejectWith(ce, [et, vn, Jn]), et.statusCode(zt), zt = void 0, ee && Ge.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, re, hn ? Kn : Jn]), Fe.fireWith(ce, [et, vn]), ee && (Ge.trigger("ajaxComplete", [et, re]), --d.active || d.event.trigger("ajaxStop")))
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
                return ne(p) && (x = x || w, w = p, p = void 0), d.ajax(d.extend({
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
                return this[0] && (ne(r) && (r = r.call(this[0])), s = d(r, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && s.insertBefore(this[0]), s.map(function() {
                    for (var u = this; u.firstElementChild;) u = u.firstElementChild;
                    return u
                }).append(this)), this
            },
            wrapInner: function(r) {
                return ne(r) ? this.each(function(s) {
                    d(this).wrapInner(r.call(this, s))
                }) : this.each(function() {
                    var s = d(this),
                        u = s.contents();
                    u.length ? u.wrapAll(r) : s.append(r)
                })
            },
            wrap: function(r) {
                var s = ne(r);
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
            Ei = d.ajaxSettings.xhr();
        G.cors = !!Ei && "withCredentials" in Ei, G.ajax = Ei = !!Ei, d.ajaxTransport(function(r) {
            var s, u;
            if (G.cors || Ei && !r.crossDomain) return {
                send: function(p, w) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
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
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = ne(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (qi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || d.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", w = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                w === void 0 ? d(e).removeProp(p) : e[p] = w, r[p] && (r.jsonpCallback = s.jsonpCallback, Fr.push(p)), x && ne(w) && w(x[0]), x = w = void 0
            }), "script"
        }), G.createHTMLDocument = function() {
            var r = P.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), d.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, w, x;
            return s || (G.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), w = je.exec(r), x = !u && [], w ? [s.createElement(w[1])] : (w = In([r], s, x), x && x.length && d(x).remove(), d.merge([], w.childNodes))
        }, d.fn.load = function(r, s, u) {
            var p, w, x, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = Wn(r.slice(z)), r = r.slice(0, z)), ne(s) ? (u = s, s = void 0) : s && typeof s == "object" && (w = "POST"), T.length > 0 && d.ajax({
                url: r,
                type: w || "GET",
                dataType: "html",
                data: s
            }).done(function(H) {
                x = arguments, T.html(p ? d("<div>").append(d.parseHTML(H)).find(p) : H)
            }).always(u && function(H, ee) {
                T.each(function() {
                    u.apply(this, x || [H.responseText, ee, H])
                })
            }), this
        }, d.expr.pseudos.animated = function(r) {
            return d.grep(d.timers, function(s) {
                return r === s.elem
            }).length
        }, d.offset = {
            setOffset: function(r, s, u) {
                var p, w, x, T, z, H, ee, le = d.css(r, "position"),
                    be = d(r),
                    re = {};
                le === "static" && (r.style.position = "relative"), z = be.offset(), x = d.css(r, "top"), H = d.css(r, "left"), ee = (le === "absolute" || le === "fixed") && (x + H).indexOf("auto") > -1, ee ? (p = be.position(), T = p.top, w = p.left) : (T = parseFloat(x) || 0, w = parseFloat(H) || 0), ne(s) && (s = s.call(r, u, d.extend({}, z))), s.top != null && (re.top = s.top - z.top + T), s.left != null && (re.left = s.left - z.left + w), "using" in s ? s.using.call(r, re) : be.css(re)
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
                    if (v(w) ? z = w : w.nodeType === 9 && (z = w.defaultView), T === void 0) return z ? z[s] : w[x];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : w[x] = T
                }, r, p, arguments.length)
            }
        }), d.each(["top", "left"], function(r, s) {
            d.cssHooks[s] = y(G.pixelPosition, function(u, p) {
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
                    return g(this, function(H, ee, le) {
                        var be;
                        return v(H) ? p.indexOf("outer") === 0 ? H["inner" + r] : H.document.documentElement["client" + r] : H.nodeType === 9 ? (be = H.documentElement, Math.max(H.body["scroll" + r], be["scroll" + r], H.body["offset" + r], be["offset" + r], be["client" + r])) : le === void 0 ? d.css(H, ee, z) : d.style(H, ee, le, z)
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
        var _s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        d.proxy = function(r, s) {
            var u, p, w;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!ne(r)) return p = f.call(arguments, 2), w = function() {
                return r.apply(s || this, p.concat(f.call(arguments)))
            }, w.guid = r.guid = r.guid || d.guid++, w
        }, d.holdReady = function(r) {
            r ? d.readyWait++ : d.ready(!0)
        }, d.isArray = Array.isArray, d.parseJSON = JSON.parse, d.nodeName = Q, d.isFunction = ne, d.isWindow = v, d.camelCase = B, d.type = oe, d.now = Date.now, d.isNumeric = function(r) {
            var s = d.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, d.trim = function(r) {
            return r == null ? "" : (r + "").replace(_s, "")
        };
        var Bo = e.jQuery,
            $o = e.$;
        return d.noConflict = function(r) {
            return e.$ === d && (e.$ = $o), r && e.jQuery === d && (e.jQuery = Bo), d
        }, typeof n > "u" && (e.jQuery = e.$ = d), d
    })
})(Va);
const _e = Va.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Ni.exports,
                a;
            try {
                a = Va.exports
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
                            return i[l](this[g], R(S, this), O)
                        };
                    case 4:
                        return function(S, O, M) {
                            return i[l](this[g], R(S, this), O, M)
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
            R = function(E, l) {
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
            V = n.Events = {},
            X = /\s+/,
            Y = function(E, l, g, S, O) {
                var M = 0,
                    B;
                if (g && typeof g == "object")
                    for (S !== void 0 && ("context" in O) && O.context === void 0 && (O.context = S), B = i.keys(g); M < B.length; M++) l = Y(E, l, B[M], g[B[M]], O);
                else if (g && X.test(g))
                    for (B = g.split(X); M < B.length; M++) l = E(l, B[M], S, O);
                else l = E(l, g, S, O);
                return l
            };
        V.on = function(E, l, g) {
            return G(this, E, l, g)
        };
        var G = function(E, l, g, S, O) {
            if (E._events = Y(ne, E._events || {}, l, g, {
                    context: S,
                    ctx: E,
                    listening: O
                }), O) {
                var M = E._listeners || (E._listeners = {});
                M[O.id] = O
            }
            return E
        };
        V.listenTo = function(E, l, g) {
            if (!E) return this;
            var S = E._listenId || (E._listenId = i.uniqueId("l")),
                O = this._listeningTo || (this._listeningTo = {}),
                M = O[S];
            if (!M) {
                var B = this._listenId || (this._listenId = i.uniqueId("l"));
                M = O[S] = {
                    obj: E,
                    objId: S,
                    id: B,
                    listeningTo: O,
                    count: 0
                }
            }
            return G(E, l, g, this, M), this
        };
        var ne = function(E, l, g, S) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    M = S.context,
                    B = S.ctx,
                    ie = S.listening;
                ie && ie.count++, O.push({
                    callback: g,
                    context: M,
                    ctx: M || B,
                    listening: ie
                })
            }
            return E
        };
        V.off = function(E, l, g) {
            return this._events ? (this._events = Y(v, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, V.stopListening = function(E, l, g) {
            var S = this._listeningTo;
            if (!S) return this;
            for (var O = E ? [E._listenId] : i.keys(S), M = 0; M < O.length; M++) {
                var B = S[O[M]];
                if (!B) break;
                B.obj.off(l, g, this)
            }
            return this
        };
        var v = function(E, l, g, S) {
            if (!!E) {
                var O = 0,
                    M, B = S.context,
                    ie = S.listeners;
                if (!l && !g && !B) {
                    for (var ke = i.keys(ie); O < ke.length; O++) M = ie[ke[O]], delete ie[M.id], delete M.listeningTo[M.objId];
                    return
                }
                for (var he = l ? [l] : i.keys(E); O < he.length; O++) {
                    l = he[O];
                    var De = E[l];
                    if (!De) break;
                    for (var Le = [], nt = 0; nt < De.length; nt++) {
                        var Ct = De[nt];
                        g && g !== Ct.callback && g !== Ct.callback._callback || B && B !== Ct.context ? Le.push(Ct) : (M = Ct.listening, M && --M.count === 0 && (delete ie[M.id], delete M.listeningTo[M.objId]))
                    }
                    Le.length ? E[l] = Le : delete E[l]
                }
                return E
            }
        };
        V.once = function(E, l, g) {
            var S = Y(P, {}, E, l, i.bind(this.off, this));
            return typeof E == "string" && g == null && (l = void 0), this.on(S, l, g)
        }, V.listenToOnce = function(E, l, g) {
            var S = Y(P, {}, l, g, i.bind(this.stopListening, this, E));
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
        V.trigger = function(E) {
            if (!this._events) return this;
            for (var l = Math.max(0, arguments.length - 1), g = Array(l), S = 0; S < l; S++) g[S] = arguments[S + 1];
            return Y(W, this._events, E, void 0, g), this
        };
        var W = function(E, l, g, S) {
                if (E) {
                    var O = E[l],
                        M = E.all;
                    O && M && (M = M.slice()), O && se(O, S), M && se(M, [l].concat(S))
                }
                return E
            },
            se = function(E, l) {
                var g, S = -1,
                    O = E.length,
                    M = l[0],
                    B = l[1],
                    ie = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, M);
                        return;
                    case 2:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, M, B);
                        return;
                    case 3:
                        for (; ++S < O;)(g = E[S]).callback.call(g.ctx, M, B, ie);
                        return;
                    default:
                        for (; ++S < O;)(g = E[S]).callback.apply(g.ctx, l);
                        return
                }
            };
        V.bind = V.on, V.unbind = V.off, i.extend(n, V);
        var oe = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var S = i.result(this, "defaults");
            g = i.defaults(i.extend({}, S, g), S), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
        };
        i.extend(oe.prototype, V, {
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
                    B = [],
                    ie = this._changing;
                this._changing = !0, ie || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var ke = this.attributes,
                    he = this.changed,
                    De = this._previousAttributes;
                for (var Le in S) l = S[Le], i.isEqual(ke[Le], l) || B.push(Le), i.isEqual(De[Le], l) ? delete he[Le] : he[Le] = l, O ? delete ke[Le] : ke[Le] = l;
                if (this.idAttribute in S && (this.id = this.get(this.idAttribute)), !M) {
                    B.length && (this._pending = g);
                    for (var nt = 0; nt < B.length; nt++) this.trigger("change:" + B[nt], this, ke[B[nt]], g)
                }
                if (ie) return this;
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
                }, Gt(this, E), this.sync("read", this, E)
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
                    B = g.success,
                    ie = this.attributes;
                g.success = function(De) {
                    M.attributes = ie;
                    var Le = g.parse ? M.parse(De, g) : De;
                    if (O && (Le = i.extend({}, S, Le)), Le && !M.set(Le, g)) return !1;
                    B && B.call(g.context, M, De, g), M.trigger("sync", M, De, g)
                }, Gt(this, g), S && O && (this.attributes = i.extend({}, ie, S));
                var ke = this.isNew() ? "create" : g.patch ? "patch" : "update";
                ke === "patch" && !g.attrs && (g.attrs = S);
                var he = this.sync(ke, this, g);
                return this.attributes = ie, he
            },
            destroy: function(E) {
                E = E ? i.clone(E) : {};
                var l = this,
                    g = E.success,
                    S = E.wait,
                    O = function() {
                        l.stopListening(), l.trigger("destroy", l, l.collection, E)
                    };
                E.success = function(B) {
                    S && O(), g && g.call(E.context, l, B, E), l.isNew() || l.trigger("sync", l, B, E)
                };
                var M = !1;
                return this.isNew() ? i.defer(E.success) : (Gt(this, E), M = this.sync("delete", this, E)), S || O(), M
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
        k(oe, ve, "attributes");
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
                var S = Array(E.length - g),
                    O = l.length,
                    M;
                for (M = 0; M < S.length; M++) S[M] = E[M + g];
                for (M = 0; M < O; M++) E[M + g] = l[M];
                for (M = 0; M < S.length; M++) E[M + O + g] = S[M]
            };
        i.extend(d.prototype, V, {
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
                    l = i.extend({}, Ee, l), l.parse && !this._isModel(E) && (E = this.parse(E, l) || []);
                    var g = !i.isArray(E);
                    E = g ? [E] : E.slice();
                    var S = l.at;
                    S != null && (S = +S), S > this.length && (S = this.length), S < 0 && (S += this.length + 1);
                    var O = [],
                        M = [],
                        B = [],
                        ie = [],
                        ke = {},
                        he = l.add,
                        De = l.merge,
                        Le = l.remove,
                        nt = !1,
                        Ct = this.comparator && S == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var bt = this.get(ct);
                        if (bt) {
                            if (De && ct !== bt) {
                                var Kt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Kt = bt.parse(Kt, l)), bt.set(Kt, l), B.push(bt), Ct && !nt && (nt = bt.hasChanged(rn))
                            }
                            ke[bt.cid] || (ke[bt.cid] = !0, O.push(bt)), E[yt] = bt
                        } else he && (ct = E[yt] = this._prepareModel(ct, l), ct && (M.push(ct), this._addReference(ct, l), ke[ct.cid] = !0, O.push(ct)))
                    }
                    if (Le) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], ke[ct.cid] || ie.push(ct);
                        ie.length && this._removeModels(ie, l)
                    }
                    var Je = !1,
                        Mt = !Ct && he && Le;
                    if (O.length && Mt ? (Je = this.length !== O.length || i.some(this.models, function(F, N) {
                            return F !== O[N]
                        }), this.models.length = 0, Pe(this.models, O, 0), this.length = this.models.length) : M.length && (Ct && (nt = !0), Pe(this.models, M, S == null ? this.length : S), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < M.length; yt++) S != null && (l.index = S + yt), ct = M[yt], ct.trigger("add", ct, this, l);
                        (nt || Je) && this.trigger("sort", this, l), (M.length || ie.length || B.length) && (l.changes = {
                            added: M,
                            removed: ie,
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
                }, Gt(this, E), this.sync("read", this, E)
            },
            create: function(E, l) {
                l = l ? i.clone(l) : {};
                var g = l.wait;
                if (E = this._prepareModel(E, l), !E) return !1;
                g || this.add(E, l);
                var S = this,
                    O = l.success;
                return l.success = function(M, B, ie) {
                    g && S.add(M, ie), O && O.call(ie.context, M, B, ie)
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
                        var B = this.modelId(O.attributes);
                        B != null && delete this._byId[B], l.silent || (l.index = M, O.trigger("remove", O, this, l)), g.push(O), this._removeReference(O, l)
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
            Q = /^(\S+)\s*(.*)$/,
            je = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        i.extend(Be.prototype, V, {
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
            var S = U[E];
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
                g.beforeSend = function(ke) {
                    if (ke.setRequestHeader("X-HTTP-Method-Override", S), M) return M.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var B = g.error;
            g.error = function(ke, he, De) {
                g.textStatus = he, g.errorThrown = De, B && B.call(g.context, ke, he, De)
            };
            var ie = g.xhr = n.ajax(i.extend(O, g));
            return l.trigger("request", l, ie, g), ie
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
        var ae = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Ae = /\((.*?)\)/g,
            we = /(\(\?)?:\w+/g,
            ye = /\*\w+/g,
            ue = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(ae.prototype, V, {
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
                return E = E.replace(ue, "\\$&").replace(Ae, "(?:$1)?").replace(we, function(l, g) {
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
        var Se = n.History = function() {
                this.handlers = [], this.checkUrl = i.bind(this.checkUrl, this), typeof window < "u" && (this.location = window.location, this.history = window.history)
            },
            Te = /^[#\/]|\s+$/g,
            $e = /^\/+|\/+$/g,
            Ke = /#.*$/;
        Se.started = !1, i.extend(Se.prototype, V, {
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
                        S = g.insertBefore(this.iframe, g.firstChild).contentWindow;
                    S.document.open(), S.document.close(), S.location.hash = "#" + this.fragment
                }
                var O = window.addEventListener || function(M, B) {
                    return attachEvent("on" + M, B)
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
        }), n.history = new Se;
        var dt = function(E, l) {
            var g = this,
                S;
            return E && i.has(E, "constructor") ? S = E.constructor : S = function() {
                return g.apply(this, arguments)
            }, i.extend(S, g, l), S.prototype = i.create(g.prototype, E), S.prototype.constructor = S, S.__super__ = g.prototype, S
        };
        oe.extend = d.extend = ae.extend = Be.extend = Se.extend = dt;
        var Bt = function() {
                throw new Error('A "url" property or function must be specified')
            },
            Gt = function(E, l) {
                var g = l.error;
                l.error = function(S) {
                    g && g.call(l.context, E, S, l), E.trigger("error", E, S, l)
                }
            };
        return n
    })
})(ot);
var Cc = {
        exports: {}
    },
    Qo = {
        exports: {}
    },
    gl;

function yh() {
    return gl || (gl = 1, function(t, e) {
        (function(n, i) {
            t.exports = i(Ni.exports, ot)
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
            }, m.DEBUG = !1, m._debugText = function(v, P, W) {
                return v + (W ? " on the " + W + " channel" : "") + ': "' + P + '"'
            }, m.debugLog = function(v, P, W) {
                m.DEBUG && console && console.warn && console.warn(m._debugText(v, P, W))
            };
            var _ = /\s+/;
            m._eventsApi = function(v, P, W, se) {
                if (!W) return !1;
                var oe = {};
                if ((typeof W > "u" ? "undefined" : a(W)) === "object") {
                    for (var ve in W) {
                        var d = v[P].apply(v, [ve, W[ve]].concat(se));
                        _.test(ve) ? n.extend(oe, d) : oe[ve] = d
                    }
                    return oe
                }
                if (_.test(W)) {
                    for (var Ee = W.split(_), Oe = 0, Pe = Ee.length; Oe < Pe; Oe++) oe[Ee[Oe]] = v[P].apply(v, [Ee[Oe]].concat(se));
                    return oe
                }
                return !1
            }, m._callHandler = function(v, P, W) {
                var se = W[0],
                    oe = W[1],
                    ve = W[2];
                switch (W.length) {
                    case 0:
                        return v.call(P);
                    case 1:
                        return v.call(P, se);
                    case 2:
                        return v.call(P, se, oe);
                    case 3:
                        return v.call(P, se, oe, ve);
                    default:
                        return v.apply(P, W)
                }
            };

            function k(v, P, W, se) {
                var oe = v[P];
                if ((!W || W === oe.callback || W === oe.callback._callback) && (!se || se === oe.context)) return delete v[P], !0
            }

            function R(v, P, W, se) {
                v || (v = {});
                for (var oe = P ? [P] : n.keys(v), ve = !1, d = 0, Ee = oe.length; d < Ee; d++) P = oe[d], !!v[P] && k(v, P, W, se) && (ve = !0);
                return ve
            }
            var D = {};

            function V(v) {
                return D[v] || (D[v] = n.bind(m.log, m, v))
            }
            n.extend(m, {
                log: function(P, W) {
                    if (!(typeof console > "u")) {
                        var se = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + W + '"', se)
                    }
                },
                tuneIn: function(P) {
                    var W = m.channel(P);
                    return W._tunedIn = !0, W.on("all", V(P)), this
                },
                tuneOut: function(P) {
                    var W = m.channel(P);
                    return W._tunedIn = !1, W.off("all", V(P)), delete D[P], this
                }
            });

            function X(v) {
                return n.isFunction(v) ? v : function() {
                    return v
                }
            }
            m.Requests = {
                request: function(P) {
                    var W = n.toArray(arguments).slice(1),
                        se = m._eventsApi(this, "request", P, W);
                    if (se) return se;
                    var oe = this.channelName,
                        ve = this._requests;
                    if (oe && this._tunedIn && m.log.apply(this, [oe, P].concat(W)), ve && (ve[P] || ve.default)) {
                        var d = ve[P] || ve.default;
                        return W = ve[P] ? W : arguments, m._callHandler(d.callback, d.context, W)
                    } else m.debugLog("An unhandled request was fired", P, oe)
                },
                reply: function(P, W, se) {
                    return m._eventsApi(this, "reply", P, [W, se]) ? this : (this._requests || (this._requests = {}), this._requests[P] && m.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: X(W),
                        context: se || this
                    }, this)
                },
                replyOnce: function(P, W, se) {
                    if (m._eventsApi(this, "replyOnce", P, [W, se])) return this;
                    var oe = this,
                        ve = n.once(function() {
                            return oe.stopReplying(P), X(W).apply(this, arguments)
                        });
                    return this.reply(P, ve, se)
                },
                stopReplying: function(P, W, se) {
                    return m._eventsApi(this, "stopReplying", P) ? this : (!P && !W && !se ? delete this._requests : R(this._requests, P, W, se) || m.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
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
            var Y, G, ne = [i.Events, m.Requests];
            return n.each(ne, function(v) {
                n.each(v, function(P, W) {
                    m[W] = function(se) {
                        return G = n.toArray(arguments).slice(1), Y = this.channel(se), Y[W].apply(Y, G)
                    }
                })
            }), m.reset = function(v) {
                var P = v ? [this._channels[v]] : this._channels;
                n.each(P, function(W) {
                    W.reset()
                })
            }, m
        })
    }(Qo)), Qo.exports
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
        t.exports = i(ot, Ni.exports, yh())
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var f = "3.5.1",
            m = function(o) {
                return function(C) {
                    for (var A = arguments.length, Z = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Z[Ce - 1] = arguments[Ce];
                    return o.apply(C, Z)
                }
            },
            _ = n.Model.extend,
            k = function y(o, C) {
                i.isObject(o) && (o = o.prev + " is going to be removed in the future. Please use " + o.next + " instead." + (o.url ? " See: " + o.url : "")), !!Ze.DEV_MODE && (C === void 0 || !C) && !y._cache[o] && (y._warn("Deprecation warning: " + o), y._cache[o] = !0)
            };
        k._console = typeof console < "u" ? console : {}, k._warn = function() {
            var y = k._console.warn || k._console.log || i.noop;
            return y.apply(k._console, arguments)
        }, k._cache = {};
        var R = function(o) {
                return document.documentElement.contains(o && o.parentNode)
            },
            D = function(o, C) {
                var A = this;
                !o || i.each(C, function(Z) {
                    var Ce = o[Z];
                    Ce !== void 0 && (A[Z] = Ce)
                })
            },
            V = function(o) {
                if (!!o) return this.options && this.options[o] !== void 0 ? this.options[o] : this[o]
            },
            X = function(o) {
                var C = this;
                return i.reduce(o, function(A, Z, Ce) {
                    return i.isFunction(Z) || (Z = C[Z]), Z && (A[Ce] = Z), A
                }, {})
            },
            Y = /(^|:)(\w)/gi;

        function G(y, o, C) {
            return C.toUpperCase()
        }
        var ne = i.memoize(function(y) {
            return "on" + y.replace(Y, G)
        });

        function v(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            var Z = ne(y),
                Ce = V.call(this, Z),
                We = void 0;
            return i.isFunction(Ce) && (We = Ce.apply(this, C)), this.trigger.apply(this, arguments), We
        }

        function P(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            return i.isFunction(y.triggerMethod) ? y.triggerMethod.apply(y, C) : v.apply(y, C)
        }

        function W(y, o, C) {
            !y._getImmediateChildren || i.each(y._getImmediateChildren(), function(A) {
                !C(A) || P(A, o, A)
            })
        }

        function se(y) {
            return !y._isAttached
        }

        function oe(y) {
            return se(y) ? (y._isAttached = !0, !0) : !1
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
            W(this, "before:attach", se)
        }

        function lt() {
            W(this, "attach", oe), Ee(this)
        }

        function Be() {
            W(this, "before:detach", ve), Oe(this)
        }

        function Q() {
            W(this, "detach", d)
        }

        function je() {
            Oe(this)
        }

        function U() {
            Ee(this)
        }

        function ae(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Be,
                detach: Q,
                "before:render": je,
                render: U
            }))
        }
        var Ae = ["description", "fileName", "lineNumber", "name", "message", "number"],
            we = _.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + f + "/",
                constructor: function(o, C) {
                    i.isObject(o) ? (C = o, o = C.message) : C || (C = {});
                    var A = Error.call(this, o);
                    i.extend(this, i.pick(A, Ae), i.pick(C, Ae)), this.captureStackTrace(), C.url && (this.url = this.urlRoot + C.url)
                },
                captureStackTrace: function() {
                    Error.captureStackTrace && Error.captureStackTrace(this, we)
                },
                toString: function() {
                    return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                }
            });
        we.extend = _;

        function ye(y, o, C, A, Z) {
            var Ce = A.split(/\s+/);
            Ce.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(Ce, function(We) {
                var It = y[We];
                if (!It) throw new we('Method "' + We + '" was configured as an event handler, but does not exist.');
                y[Z](o, C, It)
            })
        }

        function ue(y, o, C, A) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(Z, Ce) {
                if (i.isString(Z)) {
                    ye(y, o, Ce, Z, A);
                    return
                }
                y[A](o, Ce, Z)
            })
        }

        function Se(y, o) {
            return !y || !o ? this : (ue(this, y, o, "listenTo"), this)
        }

        function Te(y, o) {
            return y ? o ? (ue(this, y, o, "stopListening"), this) : (this.stopListening(y), this) : this
        }

        function $e(y, o, C, A) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindrequests"
            });
            var Z = X.call(y, C);
            o[A](Z, y)
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
            Gt = {
                normalizeMethods: X,
                _setOptions: Bt,
                mergeOptions: D,
                getOption: V,
                bindEvents: Se,
                unbindEvents: Te
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
                bindEvents: Se,
                unbindEvents: Te,
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
                for (var o = void 0, C = arguments.length, A = Array(C), Z = 0; Z < C; Z++) A[Z] = arguments[Z];
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
            return y.behaviorClass ? y.behaviorClass : i.isFunction(y) ? y : i.isFunction(Ze.Behaviors.behaviorsLookup) ? Ze.Behaviors.behaviorsLookup(y, o)[o] : Ze.Behaviors.behaviorsLookup[o]
        }

        function B(y, o) {
            return i.chain(o).map(function(C, A) {
                var Z = M(C, A),
                    Ce = C === Z ? {} : C,
                    We = new Z(Ce, y),
                    It = B(y, i.result(We, "behaviors"));
                return [We].concat(It)
            }).flatten().value()
        }
        var ie = {
                _initBehaviors: function() {
                    this._behaviors = this._getBehaviors()
                },
                _getBehaviors: function() {
                    var o = i.result(this, "behaviors");
                    return i.isObject(o) ? B(this, o) : {}
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
            ke = {
                _delegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    A && (Te.call(this, o, A), Se.call(this, o, A));
                    var Z = i.result(this, "collectionEvents");
                    Z && (Te.call(this, C, Z), Se.call(this, C, Z))
                },
                _undelegateEntityEvents: function(o, C) {
                    var A = i.result(this, "modelEvents");
                    Te.call(this, o, A);
                    var Z = i.result(this, "collectionEvents");
                    Te.call(this, C, Z)
                }
            },
            he = /^(\S+)\s*(.*)$/,
            De = function(o, C) {
                var A = o.match(he);
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
            var Z = !!o.stopPropagation;
            return nt("triggersStopPropagation") && (Z = o.stopPropagation !== !1),
                function(Ce) {
                    A && Ce.preventDefault(), Z && Ce.stopPropagation(), y.triggerMethod(C, y, Ce)
                }
        }
        var ct = {
                _getViewTriggers: function(o, C) {
                    var A = this;
                    return i.reduce(C, function(Z, Ce, We) {
                        return We = De(We, "trig" + A.cid), Z[We] = rn(o, Ce), Z
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(A, Z, Ce) {
                    var We = bt(Ce, C);
                    return A[We] = Z, A
                }, {})
            },
            bt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Kt = function y(o, C, A) {
                return i.each(o, function(Z, Ce) {
                    i.isString(Z) ? o[Ce] = bt(Z, C) : i.isObject(Z) && i.isArray(A) && (i.extend(Z, y(i.pick(Z, A), C)), i.each(A, function(We) {
                        var It = Z[We];
                        i.isString(It) && (Z[We] = bt(It, C))
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
                        this._ui = {}, i.each(C, function(A, Z) {
                            o._ui[Z] = o.$(A)
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
        var N = {
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
                            Z = C.parentNode;
                        if (!(!A || !Z)) {
                            var Ce = o.nextSibling,
                                We = C.nextSibling;
                            A.insertBefore(C, Ce), Z.insertBefore(o, We)
                        }
                    }
                },
                setContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Mt(o);
                    A.html(C)
                },
                appendContents: function(o, C) {
                    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                        Z = A._$el,
                        Ce = Z === void 0 ? Mt(o) : Z,
                        We = A._$contents,
                        It = We === void 0 ? Mt(C) : We;
                    Ce.append(It)
                },
                hasContents: function(o) {
                    return !!o && o.hasChildNodes()
                },
                detachContents: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Mt(o);
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
                    for (var o = this._isAttached && !this._shouldDisableEvents, C = arguments.length, A = Array(C), Z = 0; Z < C; Z++) A[Z] = arguments[Z];
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
                    for (var C = this.normalizeMethods(this._childViewEvents), A = arguments.length, Z = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Z[Ce - 1] = arguments[Ce];
                    typeof C < "u" && i.isFunction(C[o]) && C[o].apply(this, Z);
                    var We = this._childViewTriggers;
                    We && i.isString(We[o]) && this.triggerMethod.apply(this, [We[o]].concat(Z));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var qt = It + ":" + o;
                        this.triggerMethod.apply(this, [qt].concat(Z))
                    }
                }
            };
        i.extend(K, ie, Gt, ke, ct, Je);

        function L(y) {
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
                show: function(o, C) {
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, L(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
                },
                _setupChildView: function(o) {
                    ae(o), this._proxyChildViewEvents(o), o.on("destroy", this._empty, this)
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
                        A = !o._isAttached && R(this.el) && !this._shouldDisableMonitoring(),
                        Z = typeof C.replaceElement > "u" ? !!i.result(this, "replaceElement") : !!C.replaceElement;
                    A && P(o, "before:attach", o), Z ? this._replaceEl(o) : this.attachHtml(o), A && (o._isAttached = !0, P(o, "attach", o))
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
            Ne = function(y, o) {
                return y instanceof pe ? y : Ve(y, o)
            };

        function Ve(y, o) {
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
                    return i.reduce(o, function(Z, Ce, We) {
                        return Z[We] = Ne(Ce, A), C._addRegion(Z[We], We), Z
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
                    for (var A = this.getRegion(o), Z = arguments.length, Ce = Array(Z > 2 ? Z - 2 : 0), We = 2; We < Z; We++) Ce[We - 2] = arguments[We];
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
                    if (!o) throw new we({
                        name: "TemplateNotFoundError",
                        message: "Cannot render the template since its false, null or undefined."
                    });
                    var A = i.isFunction(o) ? o : S.get(o);
                    return A(C)
                }
            },
            In = ["behaviors", "childViewEventPrefix", "childViewEvents", "childViewTriggers", "collectionEvents", "events", "modelEvents", "regionClass", "regions", "template", "templateContext", "triggers", "ui"],
            Pn = n.View.extend({
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, In), ae(this), this._initBehaviors(), this._initRegions();
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
                    return n.View.prototype.setElement.apply(this, arguments), this._isRendered = this.Dom.hasContents(this.el), this._isAttached = R(this.el), this._isRendered && this.bindUIElements(), this
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
                setDomApi: F
            });
        i.extend(Pn.prototype, K, Ft);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Dn = function(o, C) {
                i.each(it, function(A) {
                    o[A] = function() {
                        var Z = i.result(this, C),
                            Ce = Array.prototype.slice.call(arguments);
                        return i[A].apply(i, [Z].concat(Ce))
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
                return o.model && delete this._indexByModel[o.model.cid], i.some(this._indexByCustom, i.bind(function(A, Z) {
                    if (A === C) return delete this._indexByCustom[Z], !0
                }, this)), delete this._views[C], this
            },
            _updateLength: function() {
                return this.length = i.size(this._views), this
            }
        });
        var kr = ["behaviors", "childView", "childViewEventPrefix", "childViewEvents", "childViewOptions", "childViewTriggers", "collectionEvents", "events", "filter", "emptyView", "emptyViewOptions", "modelEvents", "reorderOnSort", "sort", "triggers", "ui", "viewComparator"],
            kn = n.View.extend({
                sort: !0,
                constructor: function(o) {
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, kr), ae(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
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
                    var Z = A.at !== void 0 && (A.index || C.indexOf(o));
                    (this.filter || Z === !1) && (Z = i.indexOf(this._filteredSortedModels(Z), o)), this._shouldAddChild(o, Z) && (this._destroyEmptyView(), this._addChild(o, Z))
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
                    return i.reduce(o, function(A, Z) {
                        var Ce = Z && C.children.findByModel(Z);
                        return !Ce || Ce._isDestroyed || (C._removeChildView(Ce), A.push(Ce)), A
                    }, [])
                },
                _removeChildView: function(o) {
                    this.triggerMethod("before:remove:child", this, o), this.children._remove(o), o._shouldDisableEvents = this.monitorViewEvents === !1, q(o), this.stopListening(o), this.triggerMethod("remove:child", this, o)
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = R(this.el), this
                },
                render: function() {
                    return this._isDestroyed ? this : (this.triggerMethod("before:render", this), this._renderChildren(), this._isRendered = !0, this.triggerMethod("render", this), this)
                },
                setFilter: function(o) {
                    var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                        A = C.preventRender,
                        Z = this._isRendered && !this._isDestroyed,
                        Ce = this.filter !== o,
                        We = Z && Ce && !A;
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
                        Z = {};
                    i.each(o, function(We, It) {
                        var qt = !A.children.findByModel(We);
                        qt && A._onCollectionAdd(We, A.collection, {
                            at: It
                        }), Z[We.cid] = !0
                    });
                    var Ce = i.filter(C, function(We) {
                        return !Z[We.cid] && A.children.findByModel(We)
                    });
                    this._removeChildModels(Ce)
                },
                reorder: function() {
                    var o = this,
                        C = this.children,
                        A = this._filteredSortedModels();
                    if (!A.length && this._showingEmptyView) return this;
                    var Z = i.some(A, function(qt) {
                        return !C.findByModel(qt)
                    });
                    if (Z) this.render();
                    else {
                        var Ce = [],
                            We = i.reduce(this.children._views, function(qt, Un) {
                                var Nn = i.indexOf(A, Un.model);
                                return Nn === -1 ? (Ce.push(Un.model), qt) : (Un._index = Nn, qt[Nn] = Un.el, qt)
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
                        A = i.find(C, function(Z, Ce) {
                            var We = o.children.findByModel(Z);
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
                        Z = this._getChildViewOptions(o, C),
                        Ce = this.buildChildView(o, A, Z);
                    return Ce
                },
                _setupChildView: function(o, C) {
                    ae(o), this._proxyChildViewEvents(o), this.sort && (o._index = C)
                },
                _showCollection: function(o) {
                    i.each(o, i.bind(this._addChild, this)), this.children._updateLength()
                },
                _filteredSortedModels: function(o) {
                    if (!this.collection || !this.collection.length) return [];
                    var C = this.getViewComparator(),
                        A = this.collection.models;
                    if (o = Math.min(Math.max(o, 0), A.length - 1), C) {
                        var Z = void 0;
                        o && (Z = A[o], A = A.slice(0, o).concat(A.slice(o + 1))), A = this._sortModelsBy(A, C), Z && A.splice(o, 0, Z)
                    }
                    return A = this._filterModels(A), A
                },
                getViewComparator: function() {
                    return this.viewComparator
                },
                _filterModels: function(o) {
                    var C = this;
                    return this.filter && (o = i.filter(o, function(A, Z) {
                        return C._shouldAddChild(A, Z)
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
                        var Z = this.buildChildView(C, o, A);
                        this.triggerMethod("before:render:empty", this, Z), this.addChildView(Z, 0), this.triggerMethod("render:empty", this, Z)
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
                            i.each(i.sortBy(this.children._views, "_index"), function(Z, Ce) {
                                Z._index = Ce
                            });
                            return
                        }
                        var A = i.isArray(o) ? i.max(o, "_index") : o;
                        i.isObject(A) && i.each(this.children._views, function(Z) {
                            Z._index >= A._index && (Z._index += 1)
                        })
                    }
                },
                _attachView: function(o, C) {
                    var A = !o._isAttached && !this._isBuffering && this._isAttached && this.monitorViewEvents !== !1;
                    A && P(o, "before:attach", o), this.attachHtml(this, o, C), A && (o._isAttached = !0, P(o, "attach", o))
                },
                buildChildView: function(o, C, A) {
                    var Z = i.extend({
                        model: o
                    }, A);
                    return new C(Z)
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
                        Z = this.sort && C < this.children.length - 1;
                    return Z && (A = i.find(this.children._views, function(Ce) {
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
                setDomApi: F
            });
        i.extend(kn.prototype, K);
        var sn = function() {
            this._init()
        };
        Dn(sn.prototype, "_views");

        function Tr(y, o) {
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
                    Z = this.findIndexByView(C);
                if (!(A === -1 || Z === -1)) {
                    var Ce = this._views[A];
                    this._views[A] = this._views[Z], this._views[Z] = Ce
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
            mi = n.View.extend({
                sortWithCollection: !0,
                constructor: function(o) {
                    this._setOptions(o), this.mergeOptions(o, Ar), ae(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
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
                        Z = C.merge,
                        Ce = C.remove;
                    !this.sortWithCollection || this.viewComparator === !1 || A || Ce || Z || this.sort()
                },
                _onCollectionReset: function() {
                    this.render()
                },
                _onCollectionUpdate: function(o, C) {
                    var A = C.changes,
                        Z = A.removed.length && this._removeChildModels(A.removed);
                    this._addedViews = A.added.length && this._addChildModels(A.added), this._detachChildren(Z), this._showChildren(), this._removeChildViews(Z)
                },
                _removeChildModels: function(o) {
                    var C = this;
                    return i.reduce(o, function(A, Z) {
                        var Ce = C._removeChildModel(Z);
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
                        Z = this.buildChildView(o, C, A);
                    return Z
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
                    var Z = i.extend({
                        model: o
                    }, A);
                    return new C(Z)
                },
                _setupChildView: function(o) {
                    ae(o), o.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(o)
                },
                _getImmediateChildren: function() {
                    return this.children._views
                },
                setElement: function() {
                    return n.View.prototype.setElement.apply(this, arguments), this._isAttached = R(this.el), this
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
                        Z = this.viewComparator !== o,
                        Ce = Z && !A;
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
                    var Z = [],
                        Ce = [];
                    return i.each(this.children._views, function(We, It, qt) {
                        (C.call(o, We, It, qt) ? Z : Ce).push(We)
                    }), this._detachChildren(Ce), this.triggerMethod("filter", this, Z, Ce), Z
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
                        Z = this.viewFilter !== o,
                        Ce = Z && !A;
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
                    C = A ? C : [], i.each(C, function(Z) {
                        Z._isAttached || P(Z, "before:attach", Z)
                    }), this.attachHtml(o), i.each(C, function(Z) {
                        Z._isAttached || (Z._isAttached = !0, P(Z, "attach", Z))
                    })
                },
                _getBuffer: function(o) {
                    var C = this,
                        A = this.Dom.createBuffer();
                    return i.each(o, function(Z) {
                        L(Z), C.Dom.appendContents(A, Z.el, {
                            _$contents: Z.$el
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
        i.extend(mi.prototype, K);
        var Fi = ["childViewContainer", "template", "templateContext"],
            vi = kn.extend({
                constructor: function(o) {
                    k("CompositeView is deprecated. Convert to View at your earliest convenience"), this.mergeOptions(o, Fi), kn.prototype.constructor.apply(this, arguments)
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
                        Z = o.childViewContainer;
                    if (Z) {
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
            yi = i.pick(Pn.prototype, "serializeModel", "getTemplate", "_renderTemplate", "_renderHtml", "mixinTemplateContext", "attachElContent");
        i.extend(vi.prototype, yi);
        var ji = ["collectionEvents", "events", "modelEvents", "triggers", "ui"],
            zi = g.extend({
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
                    return i.reduce(C, function(A, Z, Ce) {
                        return i.isFunction(Z) || (Z = o[Z]), Z && (Ce = De(Ce, o.cid), A[Ce] = i.bind(Z, o)), A
                    }, {})
                },
                getTriggers: function() {
                    if (!!this.triggers) {
                        var o = this.normalizeUIKeys(i.result(this, "triggers"));
                        return this._getViewTriggers(this.view, o)
                    }
                }
            });
        i.extend(zi.prototype, ke, ct, Je);
        var mn = ["region", "regionClass"],
            Hi = g.extend({
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
                    for (var C = this.getRegion(), A = arguments.length, Z = Array(A > 1 ? A - 1 : 0), Ce = 1; Ce < A; Ce++) Z[Ce - 1] = arguments[Ce];
                    return C.show.apply(C, [o].concat(Z))
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
                    var Z = i.keys(C).reverse();
                    return i.each(Z, function(Ce) {
                        A._addAppRoute(o, Ce, C[Ce])
                    }), this
                },
                _getController: function() {
                    return this.controller
                },
                _addAppRoute: function(o, C, A) {
                    var Z = o[A];
                    if (!Z) throw new we('Method "' + A + '" was not found on the controller');
                    this.route(C, A, i.bind(Z, o))
                },
                triggerMethod: v
            });
        i.extend(Hn.prototype, Gt);

        function Ui() {
            throw new we({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var bi = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = bi, this
        }, Ze.bindEvents = m(Se), Ze.unbindEvents = m(Te), Ze.bindRequests = m(Ke), Ze.unbindRequests = m(dt), Ze.mergeOptions = m(D), Ze.getOption = m(V), Ze.normalizeMethods = m(X), Ze.extend = _, Ze.isNodeAttached = R, Ze.deprecate = k, Ze.triggerMethod = m(v), Ze.triggerMethodOn = P, Ze.isEnabled = nt, Ze.setEnabled = Ct, Ze.monitorViewEvents = ae, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Ui, Ze.Application = Hi, Ze.AppRouter = Hn, Ze.Renderer = Ye, Ze.TemplateCache = S, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = mi, Ze.CompositeView = vi, Ze.Behavior = zi, Ze.Region = pe, Ze.Error = we, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = Le, Ze.VERSION = f, Ze.DomApi = N, Ze.setDomApi = function(y) {
            kn.setDomApi(y), vi.setDomApi(y), mi.setDomApi(y), pe.setDomApi(y), Pn.setDomApi(y)
        }, Ze
    }), vt && vt.Marionette && (vt.Mn = vt.Marionette)
})(Cc);
const Et = Cc.exports;
class wh {
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

function bh() {
    this.__data__ = [], this.size = 0
}
var Ch = bh;

function xh(t, e) {
    return t === e || t !== t && e !== e
}
var lo = xh,
    Eh = lo;

function _h(t, e) {
    for (var n = t.length; n--;)
        if (Eh(t[n][0], e)) return n;
    return -1
}
var co = _h,
    Sh = co,
    kh = Array.prototype,
    Th = kh.splice;

function Ah(t) {
    var e = this.__data__,
        n = Sh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : Th.call(e, n, 1), --this.size, !0
}
var Oh = Ah,
    Rh = co;

function Ih(t) {
    var e = this.__data__,
        n = Rh(e, t);
    return n < 0 ? void 0 : e[n][1]
}
var Dh = Ih,
    Lh = co;

function Mh(t) {
    return Lh(this.__data__, t) > -1
}
var Ph = Mh,
    Nh = co;

function Vh(t, e) {
    var n = this.__data__,
        i = Nh(n, t);
    return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
}
var Bh = Vh,
    $h = Ch,
    Fh = Oh,
    jh = Dh,
    zh = Ph,
    Hh = Bh;

function br(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
br.prototype.clear = $h;
br.prototype.delete = Fh;
br.prototype.get = jh;
br.prototype.has = zh;
br.prototype.set = Hh;
var uo = br,
    Uh = uo;

function Gh() {
    this.__data__ = new Uh, this.size = 0
}
var Wh = Gh;

function qh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Xh = qh;

function Yh(t) {
    return this.__data__.get(t)
}
var Kh = Yh;

function Jh(t) {
    return this.__data__.has(t)
}
var Qh = Jh,
    Zh = typeof vt == "object" && vt && vt.Object === Object && vt,
    xc = Zh,
    ed = xc,
    td = typeof self == "object" && self && self.Object === Object && self,
    nd = ed || td || Function("return this")(),
    Cr = nd,
    id = Cr,
    rd = id.Symbol,
    Ec = rd,
    ml = Ec,
    _c = Object.prototype,
    sd = _c.hasOwnProperty,
    od = _c.toString,
    Yr = ml ? ml.toStringTag : void 0;

function ad(t) {
    var e = sd.call(t, Yr),
        n = t[Yr];
    try {
        t[Yr] = void 0;
        var i = !0
    } catch {}
    var a = od.call(t);
    return i && (e ? t[Yr] = n : delete t[Yr]), a
}
var ld = ad,
    cd = Object.prototype,
    ud = cd.toString;

function hd(t) {
    return ud.call(t)
}
var dd = hd,
    vl = Ec,
    fd = ld,
    pd = dd,
    gd = "[object Null]",
    md = "[object Undefined]",
    yl = vl ? vl.toStringTag : void 0;

function vd(t) {
    return t == null ? t === void 0 ? md : gd : yl && yl in Object(t) ? fd(t) : pd(t)
}
var ho = vd;

function yd(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function")
}
var Bi = yd,
    wd = ho,
    bd = Bi,
    Cd = "[object AsyncFunction]",
    xd = "[object Function]",
    Ed = "[object GeneratorFunction]",
    _d = "[object Proxy]";

function Sd(t) {
    if (!bd(t)) return !1;
    var e = wd(t);
    return e == xd || e == Ed || e == Cd || e == _d
}
var Ba = Sd,
    kd = Cr,
    Td = kd["__core-js_shared__"],
    Ad = Td,
    Zo = Ad,
    wl = function() {
        var t = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : ""
    }();

function Od(t) {
    return !!wl && wl in t
}
var Rd = Od,
    Id = Function.prototype,
    Dd = Id.toString;

function Ld(t) {
    if (t != null) {
        try {
            return Dd.call(t)
        } catch {}
        try {
            return t + ""
        } catch {}
    }
    return ""
}
var Md = Ld,
    Pd = Ba,
    Nd = Rd,
    Vd = Bi,
    Bd = Md,
    $d = /[\\^$.*+?()[\]{}|]/g,
    Fd = /^\[object .+?Constructor\]$/,
    jd = Function.prototype,
    zd = Object.prototype,
    Hd = jd.toString,
    Ud = zd.hasOwnProperty,
    Gd = RegExp("^" + Hd.call(Ud).replace($d, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Wd(t) {
    if (!Vd(t) || Nd(t)) return !1;
    var e = Pd(t) ? Gd : Fd;
    return e.test(Bd(t))
}
var qd = Wd;

function Xd(t, e) {
    return t == null ? void 0 : t[e]
}
var Yd = Xd,
    Kd = qd,
    Jd = Yd;

function Qd(t, e) {
    var n = Jd(t, e);
    return Kd(n) ? n : void 0
}
var $a = Qd,
    Zd = $a,
    ef = Cr,
    tf = Zd(ef, "Map"),
    Sc = tf,
    nf = $a,
    rf = nf(Object, "create"),
    fo = rf,
    bl = fo;

function sf() {
    this.__data__ = bl ? bl(null) : {}, this.size = 0
}
var of = sf;

function af(t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e
}
var lf = af,
    cf = fo,
    uf = "__lodash_hash_undefined__",
    hf = Object.prototype,
    df = hf.hasOwnProperty;

function ff(t) {
    var e = this.__data__;
    if (cf) {
        var n = e[t];
        return n === uf ? void 0 : n
    }
    return df.call(e, t) ? e[t] : void 0
}
var pf = ff,
    gf = fo,
    mf = Object.prototype,
    vf = mf.hasOwnProperty;

function yf(t) {
    var e = this.__data__;
    return gf ? e[t] !== void 0 : vf.call(e, t)
}
var wf = yf,
    bf = fo,
    Cf = "__lodash_hash_undefined__";

function xf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = bf && e === void 0 ? Cf : e, this
}
var Ef = xf,
    _f = of,
    Sf = lf,
    kf = pf,
    Tf = wf,
    Af = Ef;

function xr(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
xr.prototype.clear = _f;
xr.prototype.delete = Sf;
xr.prototype.get = kf;
xr.prototype.has = Tf;
xr.prototype.set = Af;
var Of = xr,
    Cl = Of,
    Rf = uo,
    If = Sc;

function Df() {
    this.size = 0, this.__data__ = {
        hash: new Cl,
        map: new(If || Rf),
        string: new Cl
    }
}
var Lf = Df;

function Mf(t) {
    var e = typeof t;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null
}
var Pf = Mf,
    Nf = Pf;

function Vf(t, e) {
    var n = t.__data__;
    return Nf(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map
}
var po = Vf,
    Bf = po;

function $f(t) {
    var e = Bf(this, t).delete(t);
    return this.size -= e ? 1 : 0, e
}
var Ff = $f,
    jf = po;

function zf(t) {
    return jf(this, t).get(t)
}
var Hf = zf,
    Uf = po;

function Gf(t) {
    return Uf(this, t).has(t)
}
var Wf = Gf,
    qf = po;

function Xf(t, e) {
    var n = qf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var Yf = Xf,
    Kf = Lf,
    Jf = Ff,
    Qf = Hf,
    Zf = Wf,
    ep = Yf;

function Er(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
Er.prototype.clear = Kf;
Er.prototype.delete = Jf;
Er.prototype.get = Qf;
Er.prototype.has = Zf;
Er.prototype.set = ep;
var tp = Er,
    np = uo,
    ip = Sc,
    rp = tp,
    sp = 200;

function op(t, e) {
    var n = this.__data__;
    if (n instanceof np) {
        var i = n.__data__;
        if (!ip || i.length < sp - 1) return i.push([t, e]), this.size = ++n.size, this;
        n = this.__data__ = new rp(i)
    }
    return n.set(t, e), this.size = n.size, this
}
var ap = op,
    lp = uo,
    cp = Wh,
    up = Xh,
    hp = Kh,
    dp = Qh,
    fp = ap;

function _r(t) {
    var e = this.__data__ = new lp(t);
    this.size = e.size
}
_r.prototype.clear = cp;
_r.prototype.delete = up;
_r.prototype.get = hp;
_r.prototype.has = dp;
_r.prototype.set = fp;
var pp = _r,
    gp = $a,
    mp = function() {
        try {
            var t = gp(Object, "defineProperty");
            return t({}, "", {}), t
        } catch {}
    }(),
    kc = mp,
    xl = kc;

function vp(t, e, n) {
    e == "__proto__" && xl ? xl(t, e, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : t[e] = n
}
var Fa = vp,
    yp = Fa,
    wp = lo;

function bp(t, e, n) {
    (n !== void 0 && !wp(t[e], n) || n === void 0 && !(e in t)) && yp(t, e, n)
}
var Tc = bp;

function Cp(t) {
    return function(e, n, i) {
        for (var a = -1, f = Object(e), m = i(e), _ = m.length; _--;) {
            var k = m[t ? _ : ++a];
            if (n(f[k], k, f) === !1) break
        }
        return e
    }
}
var xp = Cp,
    Ep = xp,
    _p = Ep(),
    Sp = _p,
    Ca = {
        exports: {}
    };
(function(t, e) {
    var n = Cr,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        f = a && a.exports === i,
        m = f ? n.Buffer : void 0,
        _ = m ? m.allocUnsafe : void 0;

    function k(R, D) {
        if (D) return R.slice();
        var V = R.length,
            X = _ ? _(V) : new R.constructor(V);
        return R.copy(X), X
    }
    t.exports = k
})(Ca, Ca.exports);
var kp = Cr,
    Tp = kp.Uint8Array,
    Ap = Tp,
    El = Ap;

function Op(t) {
    var e = new t.constructor(t.byteLength);
    return new El(e).set(new El(t)), e
}
var Rp = Op,
    Ip = Rp;

function Dp(t, e) {
    var n = e ? Ip(t.buffer) : t.buffer;
    return new t.constructor(n, t.byteOffset, t.length)
}
var Lp = Dp;

function Mp(t, e) {
    var n = -1,
        i = t.length;
    for (e || (e = Array(i)); ++n < i;) e[n] = t[n];
    return e
}
var Pp = Mp,
    Np = Bi,
    _l = Object.create,
    Vp = function() {
        function t() {}
        return function(e) {
            if (!Np(e)) return {};
            if (_l) return _l(e);
            t.prototype = e;
            var n = new t;
            return t.prototype = void 0, n
        }
    }(),
    Bp = Vp;

function $p(t, e) {
    return function(n) {
        return t(e(n))
    }
}
var Fp = $p,
    jp = Fp,
    zp = jp(Object.getPrototypeOf, Object),
    Ac = zp,
    Hp = Object.prototype;

function Up(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || Hp;
    return t === n
}
var Oc = Up,
    Gp = Bp,
    Wp = Ac,
    qp = Oc;

function Xp(t) {
    return typeof t.constructor == "function" && !qp(t) ? Gp(Wp(t)) : {}
}
var Yp = Xp;

function Kp(t) {
    return t != null && typeof t == "object"
}
var hs = Kp,
    Jp = ho,
    Qp = hs,
    Zp = "[object Arguments]";

function eg(t) {
    return Qp(t) && Jp(t) == Zp
}
var tg = eg,
    Sl = tg,
    ng = hs,
    Rc = Object.prototype,
    ig = Rc.hasOwnProperty,
    rg = Rc.propertyIsEnumerable,
    sg = Sl(function() {
        return arguments
    }()) ? Sl : function(t) {
        return ng(t) && ig.call(t, "callee") && !rg.call(t, "callee")
    },
    Ic = sg,
    og = Array.isArray,
    Dc = og,
    ag = 9007199254740991;

function lg(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ag
}
var Lc = lg,
    cg = Ba,
    ug = Lc;

function hg(t) {
    return t != null && ug(t.length) && !cg(t)
}
var ja = hg,
    dg = ja,
    fg = hs;

function pg(t) {
    return fg(t) && dg(t)
}
var gg = pg,
    Js = {
        exports: {}
    };

function mg() {
    return !1
}
var vg = mg;
(function(t, e) {
    var n = Cr,
        i = vg,
        a = e && !e.nodeType && e,
        f = a && !0 && t && !t.nodeType && t,
        m = f && f.exports === a,
        _ = m ? n.Buffer : void 0,
        k = _ ? _.isBuffer : void 0,
        R = k || i;
    t.exports = R
})(Js, Js.exports);
var yg = ho,
    wg = Ac,
    bg = hs,
    Cg = "[object Object]",
    xg = Function.prototype,
    Eg = Object.prototype,
    Mc = xg.toString,
    _g = Eg.hasOwnProperty,
    Sg = Mc.call(Object);

function kg(t) {
    if (!bg(t) || yg(t) != Cg) return !1;
    var e = wg(t);
    if (e === null) return !0;
    var n = _g.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Mc.call(n) == Sg
}
var Tg = kg,
    Ag = ho,
    Og = Lc,
    Rg = hs,
    Ig = "[object Arguments]",
    Dg = "[object Array]",
    Lg = "[object Boolean]",
    Mg = "[object Date]",
    Pg = "[object Error]",
    Ng = "[object Function]",
    Vg = "[object Map]",
    Bg = "[object Number]",
    $g = "[object Object]",
    Fg = "[object RegExp]",
    jg = "[object Set]",
    zg = "[object String]",
    Hg = "[object WeakMap]",
    Ug = "[object ArrayBuffer]",
    Gg = "[object DataView]",
    Wg = "[object Float32Array]",
    qg = "[object Float64Array]",
    Xg = "[object Int8Array]",
    Yg = "[object Int16Array]",
    Kg = "[object Int32Array]",
    Jg = "[object Uint8Array]",
    Qg = "[object Uint8ClampedArray]",
    Zg = "[object Uint16Array]",
    em = "[object Uint32Array]",
    Lt = {};
Lt[Wg] = Lt[qg] = Lt[Xg] = Lt[Yg] = Lt[Kg] = Lt[Jg] = Lt[Qg] = Lt[Zg] = Lt[em] = !0;
Lt[Ig] = Lt[Dg] = Lt[Ug] = Lt[Lg] = Lt[Gg] = Lt[Mg] = Lt[Pg] = Lt[Ng] = Lt[Vg] = Lt[Bg] = Lt[$g] = Lt[Fg] = Lt[jg] = Lt[zg] = Lt[Hg] = !1;

function tm(t) {
    return Rg(t) && Og(t.length) && !!Lt[Ag(t)]
}
var nm = tm;

function im(t) {
    return function(e) {
        return t(e)
    }
}
var rm = im,
    xa = {
        exports: {}
    };
(function(t, e) {
    var n = xc,
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
})(xa, xa.exports);
var sm = nm,
    om = rm,
    kl = xa.exports,
    Tl = kl && kl.isTypedArray,
    am = Tl ? om(Tl) : sm,
    Pc = am;

function lm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Nc = lm,
    cm = Fa,
    um = lo,
    hm = Object.prototype,
    dm = hm.hasOwnProperty;

function fm(t, e, n) {
    var i = t[e];
    (!(dm.call(t, e) && um(i, n)) || n === void 0 && !(e in t)) && cm(t, e, n)
}
var pm = fm,
    gm = pm,
    mm = Fa;

function vm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var f = -1, m = e.length; ++f < m;) {
        var _ = e[f],
            k = i ? i(n[_], t[_], _, n, t) : void 0;
        k === void 0 && (k = t[_]), a ? mm(n, _, k) : gm(n, _, k)
    }
    return n
}
var ym = vm;

function wm(t, e) {
    for (var n = -1, i = Array(t); ++n < t;) i[n] = e(n);
    return i
}
var bm = wm,
    Cm = 9007199254740991,
    xm = /^(?:0|[1-9]\d*)$/;

function Em(t, e) {
    var n = typeof t;
    return e = e == null ? Cm : e, !!e && (n == "number" || n != "symbol" && xm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Vc = Em,
    _m = bm,
    Sm = Ic,
    km = Dc,
    Tm = Js.exports,
    Am = Vc,
    Om = Pc,
    Rm = Object.prototype,
    Im = Rm.hasOwnProperty;

function Dm(t, e) {
    var n = km(t),
        i = !n && Sm(t),
        a = !n && !i && Tm(t),
        f = !n && !i && !a && Om(t),
        m = n || i || a || f,
        _ = m ? _m(t.length, String) : [],
        k = _.length;
    for (var R in t)(e || Im.call(t, R)) && !(m && (R == "length" || a && (R == "offset" || R == "parent") || f && (R == "buffer" || R == "byteLength" || R == "byteOffset") || Am(R, k))) && _.push(R);
    return _
}
var Lm = Dm;

function Mm(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Pm = Mm,
    Nm = Bi,
    Vm = Oc,
    Bm = Pm,
    $m = Object.prototype,
    Fm = $m.hasOwnProperty;

function jm(t) {
    if (!Nm(t)) return Bm(t);
    var e = Vm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Fm.call(t, i)) || n.push(i);
    return n
}
var zm = jm,
    Hm = Lm,
    Um = zm,
    Gm = ja;

function Wm(t) {
    return Gm(t) ? Hm(t, !0) : Um(t)
}
var Bc = Wm,
    qm = ym,
    Xm = Bc;

function Ym(t) {
    return qm(t, Xm(t))
}
var Km = Ym,
    Al = Tc,
    Jm = Ca.exports,
    Qm = Lp,
    Zm = Pp,
    ev = Yp,
    Ol = Ic,
    Rl = Dc,
    tv = gg,
    nv = Js.exports,
    iv = Ba,
    rv = Bi,
    sv = Tg,
    ov = Pc,
    Il = Nc,
    av = Km;

function lv(t, e, n, i, a, f, m) {
    var _ = Il(t, n),
        k = Il(e, n),
        R = m.get(k);
    if (R) {
        Al(t, n, R);
        return
    }
    var D = f ? f(_, k, n + "", t, e, m) : void 0,
        V = D === void 0;
    if (V) {
        var X = Rl(k),
            Y = !X && nv(k),
            G = !X && !Y && ov(k);
        D = k, X || Y || G ? Rl(_) ? D = _ : tv(_) ? D = Zm(_) : Y ? (V = !1, D = Jm(k, !0)) : G ? (V = !1, D = Qm(k, !0)) : D = [] : sv(k) || Ol(k) ? (D = _, Ol(_) ? D = av(_) : (!rv(_) || iv(_)) && (D = ev(k))) : V = !1
    }
    V && (m.set(k, D), a(D, k, i, f, m), m.delete(k)), Al(t, n, D)
}
var cv = lv,
    uv = pp,
    hv = Tc,
    dv = Sp,
    fv = cv,
    pv = Bi,
    gv = Bc,
    mv = Nc;

function $c(t, e, n, i, a) {
    t !== e && dv(e, function(f, m) {
        if (a || (a = new uv), pv(f)) fv(t, e, m, n, $c, i, a);
        else {
            var _ = i ? i(mv(t, m), f, m + "", t, e, a) : void 0;
            _ === void 0 && (_ = f), hv(t, m, _)
        }
    }, gv)
}
var vv = $c;

function yv(t) {
    return t
}
var Fc = yv;

function wv(t, e, n) {
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
var bv = wv,
    Cv = bv,
    Dl = Math.max;

function xv(t, e, n) {
    return e = Dl(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, f = Dl(i.length - e, 0), m = Array(f); ++a < f;) m[a] = i[e + a];
            a = -1;
            for (var _ = Array(e + 1); ++a < e;) _[a] = i[a];
            return _[e] = n(m), Cv(t, this, _)
        }
}
var Ev = xv;

function _v(t) {
    return function() {
        return t
    }
}
var Sv = _v,
    kv = Sv,
    Ll = kc,
    Tv = Fc,
    Av = Ll ? function(t, e) {
        return Ll(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: kv(e),
            writable: !0
        })
    } : Tv,
    Ov = Av,
    Rv = 800,
    Iv = 16,
    Dv = Date.now;

function Lv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Dv(),
            a = Iv - (i - n);
        if (n = i, a > 0) {
            if (++e >= Rv) return arguments[0]
        } else e = 0;
        return t.apply(void 0, arguments)
    }
}
var Mv = Lv,
    Pv = Ov,
    Nv = Mv,
    Vv = Nv(Pv),
    Bv = Vv,
    $v = Fc,
    Fv = Ev,
    jv = Bv;

function zv(t, e) {
    return jv(Fv(t, e, $v), t + "")
}
var Hv = zv,
    Uv = lo,
    Gv = ja,
    Wv = Vc,
    qv = Bi;

function Xv(t, e, n) {
    if (!qv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? Gv(n) && Wv(e, n.length) : i == "string" && e in n) ? Uv(n[e], t) : !1
}
var Yv = Xv,
    Kv = Hv,
    Jv = Yv;

function Qv(t) {
    return Kv(function(e, n) {
        var i = -1,
            a = n.length,
            f = a > 1 ? n[a - 1] : void 0,
            m = a > 2 ? n[2] : void 0;
        for (f = t.length > 3 && typeof f == "function" ? (a--, f) : void 0, m && Jv(n[0], n[1], m) && (f = a < 3 ? void 0 : f, a = 1), e = Object(e); ++i < a;) {
            var _ = n[i];
            _ && t(e, _, i, f)
        }
        return e
    })
}
var Zv = Qv,
    ey = vv,
    ty = Zv,
    ny = ty(function(t, e, n) {
        ey(t, e, n)
    }),
    iy = ny;
class Ea {
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
        return iy(e[0], ...e)
    }
}
st(Ea, "locale"), st(Ea, "supported", ["en", "fr", "it", "de", "es", "es-XL"]);
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
            m = Math.min(Math.max(0, (f >> 16) * n), 255),
            _ = Math.min(Math.max(0, (f >> 8 & 255) * n), 255);
        let R = (Math.min(Math.max(0, (f & 255) * n), 255) | _ << 8 | m << 16).toString(16);
        for (; R.length < a.length;) R = `0${R}`;
        return (i ? "#" : "") + R
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
let nn = pl;
st(nn, "queryParams", new URLSearchParams(window.location.search)), st(nn, "getQueryParam", e => pl.queryParams.get(e)), st(nn, "sleep", e => new Promise(n => {
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
st(Zt, "defaultNamespace", "tv");
class Vi {
    constructor() {
        st(this, "artifacts");
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
        const e = new Intl.DateTimeFormat(Ea.locale, {
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
                    R = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let D = f.categoryId;
                return D || (f.url.indexOf("Quiplash2") !== -1 ? D = "Quiplash2Game" : f.url.indexOf("Drawful") !== -1 ? D = "DrawfulGame" : f.url.indexOf("TeeKO") !== -1 ? D = "TeeKOGame" : f.url.indexOf("TriviaDeath") !== -1 && (D = "TriviaDeathResults")), {
                    id: R,
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
var _a = {
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

            function k(U) {
                return U && DataView.prototype.isPrototypeOf(U)
            }
            if (_.arrayBuffer) var R = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                D = ArrayBuffer.isView || function(U) {
                    return U && R.indexOf(Object.prototype.toString.call(U)) > -1
                };

            function V(U) {
                if (typeof U != "string" && (U = String(U)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U)) throw new TypeError("Invalid character in header field name");
                return U.toLowerCase()
            }

            function X(U) {
                return typeof U != "string" && (U = String(U)), U
            }

            function Y(U) {
                var ae = {
                    next: function() {
                        var Ae = U.shift();
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

            function G(U) {
                this.map = {}, U instanceof G ? U.forEach(function(ae, Ae) {
                    this.append(Ae, ae)
                }, this) : Array.isArray(U) ? U.forEach(function(ae) {
                    this.append(ae[0], ae[1])
                }, this) : U && Object.getOwnPropertyNames(U).forEach(function(ae) {
                    this.append(ae, U[ae])
                }, this)
            }
            G.prototype.append = function(U, ae) {
                U = V(U), ae = X(ae);
                var Ae = this.map[U];
                this.map[U] = Ae ? Ae + ", " + ae : ae
            }, G.prototype.delete = function(U) {
                delete this.map[V(U)]
            }, G.prototype.get = function(U) {
                return U = V(U), this.has(U) ? this.map[U] : null
            }, G.prototype.has = function(U) {
                return this.map.hasOwnProperty(V(U))
            }, G.prototype.set = function(U, ae) {
                this.map[V(U)] = X(ae)
            }, G.prototype.forEach = function(U, ae) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && U.call(ae, this.map[Ae], Ae, this)
            }, G.prototype.keys = function() {
                var U = [];
                return this.forEach(function(ae, Ae) {
                    U.push(Ae)
                }), Y(U)
            }, G.prototype.values = function() {
                var U = [];
                return this.forEach(function(ae) {
                    U.push(ae)
                }), Y(U)
            }, G.prototype.entries = function() {
                var U = [];
                return this.forEach(function(ae, Ae) {
                    U.push([Ae, ae])
                }), Y(U)
            }, _.iterable && (G.prototype[Symbol.iterator] = G.prototype.entries);

            function ne(U) {
                if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
                U.bodyUsed = !0
            }

            function v(U) {
                return new Promise(function(ae, Ae) {
                    U.onload = function() {
                        ae(U.result)
                    }, U.onerror = function() {
                        Ae(U.error)
                    }
                })
            }

            function P(U) {
                var ae = new FileReader,
                    Ae = v(ae);
                return ae.readAsArrayBuffer(U), Ae
            }

            function W(U) {
                var ae = new FileReader,
                    Ae = v(ae);
                return ae.readAsText(U), Ae
            }

            function se(U) {
                for (var ae = new Uint8Array(U), Ae = new Array(ae.length), we = 0; we < ae.length; we++) Ae[we] = String.fromCharCode(ae[we]);
                return Ae.join("")
            }

            function oe(U) {
                if (U.slice) return U.slice(0);
                var ae = new Uint8Array(U.byteLength);
                return ae.set(new Uint8Array(U)), ae.buffer
            }

            function ve() {
                return this.bodyUsed = !1, this._initBody = function(U) {
                    this._bodyInit = U, U ? typeof U == "string" ? this._bodyText = U : _.blob && Blob.prototype.isPrototypeOf(U) ? this._bodyBlob = U : _.formData && FormData.prototype.isPrototypeOf(U) ? this._bodyFormData = U : _.searchParams && URLSearchParams.prototype.isPrototypeOf(U) ? this._bodyText = U.toString() : _.arrayBuffer && _.blob && k(U) ? (this._bodyArrayBuffer = oe(U.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : _.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(U) || D(U)) ? this._bodyArrayBuffer = oe(U) : this._bodyText = U = Object.prototype.toString.call(U) : this._bodyText = "", this.headers.get("content-type") || (typeof U == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : _.searchParams && URLSearchParams.prototype.isPrototypeOf(U) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, _.blob && (this.blob = function() {
                    var U = ne(this);
                    if (U) return U;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? ne(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(P)
                }), this.text = function() {
                    var U = ne(this);
                    if (U) return U;
                    if (this._bodyBlob) return W(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(se(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, _.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function Ee(U) {
                var ae = U.toUpperCase();
                return d.indexOf(ae) > -1 ? ae : U
            }

            function Oe(U, ae) {
                ae = ae || {};
                var Ae = ae.body;
                if (U instanceof Oe) {
                    if (U.bodyUsed) throw new TypeError("Already read");
                    this.url = U.url, this.credentials = U.credentials, ae.headers || (this.headers = new G(U.headers)), this.method = U.method, this.mode = U.mode, this.signal = U.signal, !Ae && U._bodyInit != null && (Ae = U._bodyInit, U.bodyUsed = !0)
                } else this.url = String(U);
                if (this.credentials = ae.credentials || this.credentials || "same-origin", (ae.headers || !this.headers) && (this.headers = new G(ae.headers)), this.method = Ee(ae.method || this.method || "GET"), this.mode = ae.mode || this.mode || null, this.signal = ae.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Ae)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(U) {
                var ae = new FormData;
                return U.trim().split("&").forEach(function(Ae) {
                    if (Ae) {
                        var we = Ae.split("="),
                            ye = we.shift().replace(/\+/g, " "),
                            ue = we.join("=").replace(/\+/g, " ");
                        ae.append(decodeURIComponent(ye), decodeURIComponent(ue))
                    }
                }), ae
            }

            function lt(U) {
                var ae = new G,
                    Ae = U.replace(/\r?\n[\t ]+/g, " ");
                return Ae.split(/\r?\n/).forEach(function(we) {
                    var ye = we.split(":"),
                        ue = ye.shift().trim();
                    if (ue) {
                        var Se = ye.join(":").trim();
                        ae.append(ue, Se)
                    }
                }), ae
            }
            ve.call(Oe.prototype);

            function Be(U, ae) {
                ae || (ae = {}), this.type = "default", this.status = ae.status === void 0 ? 200 : ae.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ae ? ae.statusText : "OK", this.headers = new G(ae.headers), this.url = ae.url || "", this._initBody(U)
            }
            ve.call(Be.prototype), Be.prototype.clone = function() {
                return new Be(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new G(this.headers),
                    url: this.url
                })
            }, Be.error = function() {
                var U = new Be(null, {
                    status: 0,
                    statusText: ""
                });
                return U.type = "error", U
            };
            var Q = [301, 302, 303, 307, 308];
            Be.redirect = function(U, ae) {
                if (Q.indexOf(ae) === -1) throw new RangeError("Invalid status code");
                return new Be(null, {
                    status: ae,
                    headers: {
                        location: U
                    }
                })
            }, m.DOMException = f.DOMException;
            try {
                new m.DOMException
            } catch {
                m.DOMException = function(ae, Ae) {
                    this.message = ae, this.name = Ae;
                    var we = Error(ae);
                    this.stack = we.stack
                }, m.DOMException.prototype = Object.create(Error.prototype), m.DOMException.prototype.constructor = m.DOMException
            }

            function je(U, ae) {
                return new Promise(function(Ae, we) {
                    var ye = new Oe(U, ae);
                    if (ye.signal && ye.signal.aborted) return we(new m.DOMException("Aborted", "AbortError"));
                    var ue = new XMLHttpRequest;

                    function Se() {
                        ue.abort()
                    }
                    ue.onload = function() {
                        var Te = {
                            status: ue.status,
                            statusText: ue.statusText,
                            headers: lt(ue.getAllResponseHeaders() || "")
                        };
                        Te.url = "responseURL" in ue ? ue.responseURL : Te.headers.get("X-Request-URL");
                        var $e = "response" in ue ? ue.response : ue.responseText;
                        Ae(new Be($e, Te))
                    }, ue.onerror = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.ontimeout = function() {
                        we(new TypeError("Network request failed"))
                    }, ue.onabort = function() {
                        we(new m.DOMException("Aborted", "AbortError"))
                    }, ue.open(ye.method, ye.url, !0), ye.credentials === "include" ? ue.withCredentials = !0 : ye.credentials === "omit" && (ue.withCredentials = !1), "responseType" in ue && _.blob && (ue.responseType = "blob"), ye.headers.forEach(function(Te, $e) {
                        ue.setRequestHeader($e, Te)
                    }), ye.signal && (ye.signal.addEventListener("abort", Se), ue.onreadystatechange = function() {
                        ue.readyState === 4 && ye.signal.removeEventListener("abort", Se)
                    }), ue.send(typeof ye._bodyInit > "u" ? null : ye._bodyInit)
                })
            }
            return je.polyfill = !0, f.fetch || (f.fetch = je, f.Headers = G, f.Request = Oe, f.Response = Be), m.Headers = G, m.Request = Oe, m.Response = Be, m.fetch = je, Object.defineProperty(m, "__esModule", {
                value: !0
            }), m
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(_a, _a.exports);
var ry = function() {
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
    Ml = typeof Symbol < "u" && Symbol,
    sy = ry,
    oy = function() {
        return typeof Ml != "function" || typeof Symbol != "function" || typeof Ml("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : sy()
    },
    ay = "Function.prototype.bind called on incompatible ",
    ea = Array.prototype.slice,
    ly = Object.prototype.toString,
    cy = "[object Function]",
    uy = function(e) {
        var n = this;
        if (typeof n != "function" || ly.call(n) !== cy) throw new TypeError(ay + n);
        for (var i = ea.call(arguments, 1), a, f = function() {
                if (this instanceof a) {
                    var D = n.apply(this, i.concat(ea.call(arguments)));
                    return Object(D) === D ? D : this
                } else return n.apply(e, i.concat(ea.call(arguments)))
            }, m = Math.max(0, n.length - i.length), _ = [], k = 0; k < m; k++) _.push("$" + k);
        if (a = Function("binder", "return function (" + _.join(",") + "){ return binder.apply(this,arguments); }")(f), n.prototype) {
            var R = function() {};
            R.prototype = n.prototype, a.prototype = new R, R.prototype = null
        }
        return a
    },
    hy = uy,
    za = Function.prototype.bind || hy,
    dy = za,
    fy = dy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, mr = SyntaxError,
    jc = Function,
    hr = TypeError,
    ta = function(t) {
        try {
            return jc('"use strict"; return (' + t + ").constructor;")()
        } catch {}
    },
    Pi = Object.getOwnPropertyDescriptor;
if (Pi) try {
    Pi({}, "")
} catch {
    Pi = null
}
var na = function() {
        throw new hr
    },
    py = Pi ? function() {
        try {
            return arguments.callee, na
        } catch {
            try {
                return Pi(arguments, "callee").get
            } catch {
                return na
            }
        }
    }() : na,
    rr = oy(),
    ai = Object.getPrototypeOf || function(t) {
        return t.__proto__
    },
    ar = {},
    gy = typeof Uint8Array > "u" ? mt : ai(Uint8Array),
    dr = {
        "%AggregateError%": typeof AggregateError > "u" ? mt : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? mt : ArrayBuffer,
        "%ArrayIteratorPrototype%": rr ? ai([][Symbol.iterator]()) : mt,
        "%AsyncFromSyncIteratorPrototype%": mt,
        "%AsyncFunction%": ar,
        "%AsyncGenerator%": ar,
        "%AsyncGeneratorFunction%": ar,
        "%AsyncIteratorPrototype%": ar,
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
        "%Function%": jc,
        "%GeneratorFunction%": ar,
        "%Int8Array%": typeof Int8Array > "u" ? mt : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? mt : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? mt : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": rr ? ai(ai([][Symbol.iterator]())) : mt,
        "%JSON%": typeof JSON == "object" ? JSON : mt,
        "%Map%": typeof Map > "u" ? mt : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !rr ? mt : ai(new Map()[Symbol.iterator]()),
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
        "%SetIteratorPrototype%": typeof Set > "u" || !rr ? mt : ai(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? mt : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": rr ? ai("" [Symbol.iterator]()) : mt,
        "%Symbol%": rr ? Symbol : mt,
        "%SyntaxError%": mr,
        "%ThrowTypeError%": py,
        "%TypedArray%": gy,
        "%TypeError%": hr,
        "%Uint8Array%": typeof Uint8Array > "u" ? mt : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? mt : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? mt : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? mt : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? mt : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? mt : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? mt : WeakSet
    },
    my = function t(e) {
        var n;
        if (e === "%AsyncFunction%") n = ta("async function () {}");
        else if (e === "%GeneratorFunction%") n = ta("function* () {}");
        else if (e === "%AsyncGeneratorFunction%") n = ta("async function* () {}");
        else if (e === "%AsyncGenerator%") {
            var i = t("%AsyncGeneratorFunction%");
            i && (n = i.prototype)
        } else if (e === "%AsyncIteratorPrototype%") {
            var a = t("%AsyncGenerator%");
            a && (n = ai(a.prototype))
        }
        return dr[e] = n, n
    },
    Pl = {
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
    ds = za,
    Qs = fy,
    vy = ds.call(Function.call, Array.prototype.concat),
    yy = ds.call(Function.apply, Array.prototype.splice),
    Nl = ds.call(Function.call, String.prototype.replace),
    Zs = ds.call(Function.call, String.prototype.slice),
    wy = ds.call(Function.call, RegExp.prototype.exec),
    by = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Cy = /\\(\\)?/g,
    xy = function(e) {
        var n = Zs(e, 0, 1),
            i = Zs(e, -1);
        if (n === "%" && i !== "%") throw new mr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new mr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Nl(e, by, function(f, m, _, k) {
            a[a.length] = _ ? Nl(k, Cy, "$1") : m || f
        }), a
    },
    Ey = function(e, n) {
        var i = e,
            a;
        if (Qs(Pl, i) && (a = Pl[i], i = "%" + a[0] + "%"), Qs(dr, i)) {
            var f = dr[i];
            if (f === ar && (f = my(i)), typeof f > "u" && !n) throw new hr("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: f
            }
        }
        throw new mr("intrinsic " + e + " does not exist!")
    },
    Ha = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new hr("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new hr('"allowMissing" argument must be a boolean');
        if (wy(/^%?[^%]*%?$/g, e) === null) throw new mr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = xy(e),
            a = i.length > 0 ? i[0] : "",
            f = Ey("%" + a + "%", n),
            m = f.name,
            _ = f.value,
            k = !1,
            R = f.alias;
        R && (a = R[0], yy(i, vy([0, 1], R)));
        for (var D = 1, V = !0; D < i.length; D += 1) {
            var X = i[D],
                Y = Zs(X, 0, 1),
                G = Zs(X, -1);
            if ((Y === '"' || Y === "'" || Y === "`" || G === '"' || G === "'" || G === "`") && Y !== G) throw new mr("property names with quotes must have matching quotes");
            if ((X === "constructor" || !V) && (k = !0), a += "." + X, m = "%" + a + "%", Qs(dr, m)) _ = dr[m];
            else if (_ != null) {
                if (!(X in _)) {
                    if (!n) throw new hr("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Pi && D + 1 >= i.length) {
                    var ne = Pi(_, X);
                    V = !!ne, V && "get" in ne && !("originalValue" in ne.get) ? _ = ne.get : _ = _[X]
                } else V = Qs(_, X), _ = _[X];
                V && !k && (dr[m] = _)
            }
        }
        return _
    },
    zc = {
        exports: {}
    };
(function(t) {
    var e = za,
        n = Ha,
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
    t.exports = function(V) {
        var X = f(e, a, arguments);
        if (m && _) {
            var Y = m(X, "length");
            Y.configurable && _(X, "length", {
                value: 1 + k(0, V.length - (arguments.length - 1))
            })
        }
        return X
    };
    var R = function() {
        return f(e, i, arguments)
    };
    _ ? _(t.exports, "apply", {
        value: R
    }) : t.exports.apply = R
})(zc);
var Hc = Ha,
    Uc = zc.exports,
    _y = Uc(Hc("String.prototype.indexOf")),
    Sy = function(e, n) {
        var i = Hc(e, !!n);
        return typeof i == "function" && _y(e, ".prototype.") > -1 ? Uc(i) : i
    };
const ky = {},
    Ty = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: ky
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Ay = vh(Ty);
var Ua = typeof Map == "function" && Map.prototype,
    ia = Object.getOwnPropertyDescriptor && Ua ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    eo = Ua && ia && typeof ia.get == "function" ? ia.get : null,
    Oy = Ua && Map.prototype.forEach,
    Ga = typeof Set == "function" && Set.prototype,
    ra = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    to = Ga && ra && typeof ra.get == "function" ? ra.get : null,
    Ry = Ga && Set.prototype.forEach,
    Iy = typeof WeakMap == "function" && WeakMap.prototype,
    ns = Iy ? WeakMap.prototype.has : null,
    Dy = typeof WeakSet == "function" && WeakSet.prototype,
    is = Dy ? WeakSet.prototype.has : null,
    Ly = typeof WeakRef == "function" && WeakRef.prototype,
    Vl = Ly ? WeakRef.prototype.deref : null,
    My = Boolean.prototype.valueOf,
    Py = Object.prototype.toString,
    Ny = Function.prototype.toString,
    Vy = String.prototype.match,
    Wa = String.prototype.slice,
    hi = String.prototype.replace,
    By = String.prototype.toUpperCase,
    Bl = String.prototype.toLowerCase,
    Gc = RegExp.prototype.test,
    $l = Array.prototype.concat,
    Fn = Array.prototype.join,
    $y = Array.prototype.slice,
    Fl = Math.floor,
    Sa = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    sa = Object.getOwnPropertySymbols,
    ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    vr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === vr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Wc = Object.prototype.propertyIsEnumerable,
    jl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function zl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Gc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -Fl(-t) : Fl(t);
        if (i !== t) {
            var a = String(i),
                f = Wa.call(e, a.length + 1);
            return hi.call(a, n, "$&_") + "." + hi.call(hi.call(f, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var Ta = Ay,
    Hl = Ta.custom,
    Ul = Xc(Hl) ? Hl : null,
    Fy = function t(e, n, i, a) {
        var f = n || {};
        if (li(f, "quoteStyle") && f.quoteStyle !== "single" && f.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(f, "maxStringLength") && (typeof f.maxStringLength == "number" ? f.maxStringLength < 0 && f.maxStringLength !== 1 / 0 : f.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = li(f, "customInspect") ? f.customInspect : !0;
        if (typeof m != "boolean" && m !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(f, "indent") && f.indent !== null && f.indent !== "	" && !(parseInt(f.indent, 10) === f.indent && f.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(f, "numericSeparator") && typeof f.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var _ = f.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Kc(e, f);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return _ ? zl(e, k) : k
        }
        if (typeof e == "bigint") {
            var R = String(e) + "n";
            return _ ? zl(e, R) : R
        }
        var D = typeof f.depth > "u" ? 5 : f.depth;
        if (typeof i > "u" && (i = 0), i >= D && D > 0 && typeof e == "object") return Aa(e) ? "[Array]" : "[Object]";
        var V = rw(f, i);
        if (typeof a > "u") a = [];
        else if (Yc(a, e) >= 0) return "[Circular]";

        function X(je, U, ae) {
            if (U && (a = $y.call(a), a.push(U)), ae) {
                var Ae = {
                    depth: f.depth
                };
                return li(f, "quoteStyle") && (Ae.quoteStyle = f.quoteStyle), t(je, Ae, i + 1, a)
            }
            return t(je, f, i + 1, a)
        }
        if (typeof e == "function" && !Gl(e)) {
            var Y = Yy(e),
                G = Ps(e, X);
            return "[Function" + (Y ? ": " + Y : " (anonymous)") + "]" + (G.length > 0 ? " { " + Fn.call(G, ", ") + " }" : "")
        }
        if (Xc(e)) {
            var ne = vr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : ka.call(e);
            return typeof e == "object" && !vr ? Kr(ne) : ne
        }
        if (tw(e)) {
            for (var v = "<" + Bl.call(String(e.nodeName)), P = e.attributes || [], W = 0; W < P.length; W++) v += " " + P[W].name + "=" + qc(jy(P[W].value), "double", f);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + Bl.call(String(e.nodeName)) + ">", v
        }
        if (Aa(e)) {
            if (e.length === 0) return "[]";
            var se = Ps(e, X);
            return V && !iw(se) ? "[" + Oa(se, V) + "]" : "[ " + Fn.call(se, ", ") + " ]"
        }
        if (Hy(e)) {
            var oe = Ps(e, X);
            return !("cause" in Error.prototype) && "cause" in e && !Wc.call(e, "cause") ? "{ [" + String(e) + "] " + Fn.call($l.call("[cause]: " + X(e.cause), oe), ", ") + " }" : oe.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Fn.call(oe, ", ") + " }"
        }
        if (typeof e == "object" && m) {
            if (Ul && typeof e[Ul] == "function" && Ta) return Ta(e, {
                depth: D - i
            });
            if (m !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Ky(e)) {
            var ve = [];
            return Oy.call(e, function(je, U) {
                ve.push(X(U, e, !0) + " => " + X(je, e))
            }), Wl("Map", eo.call(e), ve, V)
        }
        if (Zy(e)) {
            var d = [];
            return Ry.call(e, function(je) {
                d.push(X(je, e))
            }), Wl("Set", to.call(e), d, V)
        }
        if (Jy(e)) return oa("WeakMap");
        if (ew(e)) return oa("WeakSet");
        if (Qy(e)) return oa("WeakRef");
        if (Gy(e)) return Kr(X(Number(e)));
        if (qy(e)) return Kr(X(Sa.call(e)));
        if (Wy(e)) return Kr(My.call(e));
        if (Uy(e)) return Kr(X(String(e)));
        if (!zy(e) && !Gl(e)) {
            var Ee = Ps(e, X),
                Oe = jl ? jl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Wa.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Be = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                Q = Be + (lt || Pe ? "[" + Fn.call($l.call([], lt || [], Pe || []), ": ") + "] " : "");
            return Ee.length === 0 ? Q + "{}" : V ? Q + "{" + Oa(Ee, V) + "}" : Q + "{ " + Fn.call(Ee, ", ") + " }"
        }
        return String(e)
    };

function qc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function jy(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Aa(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function zy(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gl(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function Hy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function Uy(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gy(t) {
    return pi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Wy(t) {
    return pi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function Xc(t) {
    if (vr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !ka) return !1;
    try {
        return ka.call(t), !0
    } catch {}
    return !1
}

function qy(t) {
    if (!t || typeof t != "object" || !Sa) return !1;
    try {
        return Sa.call(t), !0
    } catch {}
    return !1
}
var Xy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return Xy.call(t, e)
}

function pi(t) {
    return Py.call(t)
}

function Yy(t) {
    if (t.name) return t.name;
    var e = Vy.call(Ny.call(t), /^function\s*([\w$]+)/);
    return e ? e[1] : null
}

function Yc(t, e) {
    if (t.indexOf) return t.indexOf(e);
    for (var n = 0, i = t.length; n < i; n++)
        if (t[n] === e) return n;
    return -1
}

function Ky(t) {
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

function Jy(t) {
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

function Qy(t) {
    if (!Vl || !t || typeof t != "object") return !1;
    try {
        return Vl.call(t), !0
    } catch {}
    return !1
}

function Zy(t) {
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

function ew(t) {
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

function tw(t) {
    return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function"
}

function Kc(t, e) {
    if (t.length > e.maxStringLength) {
        var n = t.length - e.maxStringLength,
            i = "... " + n + " more character" + (n > 1 ? "s" : "");
        return Kc(Wa.call(t, 0, e.maxStringLength), e) + i
    }
    var a = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, nw);
    return qc(a, "single", e)
}

function nw(t) {
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

function Kr(t) {
    return "Object(" + t + ")"
}

function oa(t) {
    return t + " { ? }"
}

function Wl(t, e, n, i) {
    var a = i ? Oa(n, i) : Fn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function iw(t) {
    for (var e = 0; e < t.length; e++)
        if (Yc(t[e], `
`) >= 0) return !1;
    return !0
}

function rw(t, e) {
    var n;
    if (t.indent === "	") n = "	";
    else if (typeof t.indent == "number" && t.indent > 0) n = Fn.call(Array(t.indent + 1), " ");
    else return null;
    return {
        base: n,
        prev: Fn.call(Array(e + 1), n)
    }
}

function Oa(t, e) {
    if (t.length === 0) return "";
    var n = `
` + e.prev + e.base;
    return n + Fn.call(t, "," + n) + `
` + e.prev
}

function Ps(t, e) {
    var n = Aa(t),
        i = [];
    if (n) {
        i.length = t.length;
        for (var a = 0; a < t.length; a++) i[a] = li(t, a) ? e(t[a], t) : ""
    }
    var f = typeof sa == "function" ? sa(t) : [],
        m;
    if (vr) {
        m = {};
        for (var _ = 0; _ < f.length; _++) m["$" + f[_]] = f[_]
    }
    for (var k in t) !li(t, k) || n && String(Number(k)) === k && k < t.length || vr && m["$" + k] instanceof Symbol || (Gc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof sa == "function")
        for (var R = 0; R < f.length; R++) Wc.call(t, f[R]) && i.push("[" + e(f[R]) + "]: " + e(t[f[R]], t));
    return i
}
var qa = Ha,
    Sr = Sy,
    sw = Fy,
    ow = qa("%TypeError%"),
    Ns = qa("%WeakMap%", !0),
    Vs = qa("%Map%", !0),
    aw = Sr("WeakMap.prototype.get", !0),
    lw = Sr("WeakMap.prototype.set", !0),
    cw = Sr("WeakMap.prototype.has", !0),
    uw = Sr("Map.prototype.get", !0),
    hw = Sr("Map.prototype.set", !0),
    dw = Sr("Map.prototype.has", !0),
    Xa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    fw = function(t, e) {
        var n = Xa(t, e);
        return n && n.value
    },
    pw = function(t, e, n) {
        var i = Xa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    gw = function(t, e) {
        return !!Xa(t, e)
    },
    mw = function() {
        var e, n, i, a = {
            assert: function(f) {
                if (!a.has(f)) throw new ow("Side channel does not contain " + sw(f))
            },
            get: function(f) {
                if (Ns && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return aw(e, f)
                } else if (Vs) {
                    if (n) return uw(n, f)
                } else if (i) return fw(i, f)
            },
            has: function(f) {
                if (Ns && f && (typeof f == "object" || typeof f == "function")) {
                    if (e) return cw(e, f)
                } else if (Vs) {
                    if (n) return dw(n, f)
                } else if (i) return gw(i, f);
                return !1
            },
            set: function(f, m) {
                Ns && f && (typeof f == "object" || typeof f == "function") ? (e || (e = new Ns), lw(e, f, m)) : Vs ? (n || (n = new Vs), hw(n, f, m)) : (i || (i = {
                    key: {},
                    next: null
                }), pw(i, f, m))
            }
        };
        return a
    },
    vw = String.prototype.replace,
    yw = /%20/g,
    aa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Ya = {
        default: aa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return vw.call(t, yw, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: aa.RFC1738,
        RFC3986: aa.RFC3986
    },
    ww = Ya,
    la = Object.prototype.hasOwnProperty,
    Li = Array.isArray,
    Bn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    bw = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Li(i)) {
                for (var a = [], f = 0; f < i.length; ++f) typeof i[f] < "u" && a.push(i[f]);
                n.obj[n.prop] = a
            }
        }
    },
    Jc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    Cw = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Li(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !la.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Li(e) && !Li(n) && (a = Jc(e, i)), Li(e) && Li(n) ? (n.forEach(function(f, m) {
            if (la.call(e, m)) {
                var _ = e[m];
                _ && typeof _ == "object" && f && typeof f == "object" ? e[m] = t(_, f, i) : e.push(f)
            } else e[m] = f
        }), e) : Object.keys(n).reduce(function(f, m) {
            var _ = n[m];
            return la.call(f, m) ? f[m] = t(f[m], _, i) : f[m] = _, f
        }, a)
    },
    xw = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    Ew = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    _w = function(e, n, i, a, f) {
        if (e.length === 0) return e;
        var m = e;
        if (typeof e == "symbol" ? m = Symbol.prototype.toString.call(e) : typeof e != "string" && (m = String(e)), i === "iso-8859-1") return escape(m).replace(/%u[0-9a-f]{4}/gi, function(D) {
            return "%26%23" + parseInt(D.slice(2), 16) + "%3B"
        });
        for (var _ = "", k = 0; k < m.length; ++k) {
            var R = m.charCodeAt(k);
            if (R === 45 || R === 46 || R === 95 || R === 126 || R >= 48 && R <= 57 || R >= 65 && R <= 90 || R >= 97 && R <= 122 || f === ww.RFC1738 && (R === 40 || R === 41)) {
                _ += m.charAt(k);
                continue
            }
            if (R < 128) {
                _ = _ + Bn[R];
                continue
            }
            if (R < 2048) {
                _ = _ + (Bn[192 | R >> 6] + Bn[128 | R & 63]);
                continue
            }
            if (R < 55296 || R >= 57344) {
                _ = _ + (Bn[224 | R >> 12] + Bn[128 | R >> 6 & 63] + Bn[128 | R & 63]);
                continue
            }
            k += 1, R = 65536 + ((R & 1023) << 10 | m.charCodeAt(k) & 1023), _ += Bn[240 | R >> 18] + Bn[128 | R >> 12 & 63] + Bn[128 | R >> 6 & 63] + Bn[128 | R & 63]
        }
        return _
    },
    Sw = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var f = n[a], m = f.obj[f.prop], _ = Object.keys(m), k = 0; k < _.length; ++k) {
                var R = _[k],
                    D = m[R];
                typeof D == "object" && D !== null && i.indexOf(D) === -1 && (n.push({
                    obj: m,
                    prop: R
                }), i.push(D))
            }
        return bw(n), e
    },
    kw = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    Tw = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Aw = function(e, n) {
        return [].concat(e, n)
    },
    Ow = function(e, n) {
        if (Li(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    Qc = {
        arrayToObject: Jc,
        assign: xw,
        combine: Aw,
        compact: Sw,
        decode: Ew,
        encode: _w,
        isBuffer: Tw,
        isRegExp: kw,
        maybeMap: Ow,
        merge: Cw
    },
    Zc = mw,
    Ra = Qc,
    rs = Ya,
    Rw = Object.prototype.hasOwnProperty,
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
    Iw = String.prototype.split,
    Dw = Array.prototype.push,
    eu = function(t, e) {
        Dw.apply(t, ei(e) ? e : [e])
    },
    Lw = Date.prototype.toISOString,
    Xl = rs.default,
    tn = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: Ra.encode,
        encodeValuesOnly: !1,
        format: Xl,
        formatter: rs.formatters[Xl],
        indices: !1,
        serializeDate: function(e) {
            return Lw.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Mw = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    ca = {},
    Pw = function t(e, n, i, a, f, m, _, k, R, D, V, X, Y, G, ne, v) {
        for (var P = e, W = v, se = 0, oe = !1;
            (W = W.get(ca)) !== void 0 && !oe;) {
            var ve = W.get(e);
            if (se += 1, typeof ve < "u") {
                if (ve === se) throw new RangeError("Cyclic object value");
                oe = !0
            }
            typeof W.get(ca) > "u" && (se = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = V(P) : i === "comma" && ei(P) && (P = Ra.maybeMap(P, function(ue) {
                return ue instanceof Date ? V(ue) : ue
            })), P === null) {
            if (f) return _ && !G ? _(n, tn.encoder, ne, "key", X) : n;
            P = ""
        }
        if (Mw(P) || Ra.isBuffer(P)) {
            if (_) {
                var d = G ? n : _(n, tn.encoder, ne, "key", X);
                if (i === "comma" && G) {
                    for (var Ee = Iw.call(String(P), ","), Oe = "", Pe = 0; Pe < Ee.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + Y(_(Ee[Pe], tn.encoder, ne, "value", X));
                    return [Y(d) + (a && ei(P) && Ee.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [Y(d) + "=" + Y(_(P, tn.encoder, ne, "value", X))]
            }
            return [Y(n) + "=" + Y(String(P))]
        }
        var lt = [];
        if (typeof P > "u") return lt;
        var Be;
        if (i === "comma" && ei(P)) Be = [{
            value: P.length > 0 ? P.join(",") || null : void 0
        }];
        else if (ei(k)) Be = k;
        else {
            var Q = Object.keys(P);
            Be = R ? Q.sort(R) : Q
        }
        for (var je = a && ei(P) && P.length === 1 ? n + "[]" : n, U = 0; U < Be.length; ++U) {
            var ae = Be[U],
                Ae = typeof ae == "object" && typeof ae.value < "u" ? ae.value : P[ae];
            if (!(m && Ae === null)) {
                var we = ei(P) ? typeof i == "function" ? i(je, ae) : je : je + (D ? "." + ae : "[" + ae + "]");
                v.set(e, se);
                var ye = Zc();
                ye.set(ca, v), eu(lt, t(Ae, we, i, a, f, m, _, k, R, D, V, X, Y, G, ne, ye))
            }
        }
        return lt
    },
    Nw = function(e) {
        if (!e) return tn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || tn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = rs.default;
        if (typeof e.format < "u") {
            if (!Rw.call(rs.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = rs.formatters[i],
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
    Vw = function(t, e) {
        var n = t,
            i = Nw(e),
            a, f;
        typeof i.filter == "function" ? (f = i.filter, n = f("", n)) : ei(i.filter) && (f = i.filter, a = f);
        var m = [];
        if (typeof n != "object" || n === null) return "";
        var _;
        e && e.arrayFormat in ql ? _ = e.arrayFormat : e && "indices" in e ? _ = e.indices ? "indices" : "repeat" : _ = "indices";
        var k = ql[_];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var R = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var D = Zc(), V = 0; V < a.length; ++V) {
            var X = a[V];
            i.skipNulls && n[X] === null || eu(m, Pw(n[X], X, k, R, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, D))
        }
        var Y = m.join(i.delimiter),
            G = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? G += "utf8=%26%2310003%3B&" : G += "utf8=%E2%9C%93&"), Y.length > 0 ? G + Y : ""
    },
    yr = Qc,
    Ia = Object.prototype.hasOwnProperty,
    Bw = Array.isArray,
    Qt = {
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
    $w = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    tu = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Fw = "utf8=%26%2310003%3B",
    jw = "utf8=%E2%9C%93",
    zw = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            f = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            m = a.split(n.delimiter, f),
            _ = -1,
            k, R = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < m.length; ++k) m[k].indexOf("utf8=") === 0 && (m[k] === jw ? R = "utf-8" : m[k] === Fw && (R = "iso-8859-1"), _ = k, k = m.length);
        for (k = 0; k < m.length; ++k)
            if (k !== _) {
                var D = m[k],
                    V = D.indexOf("]="),
                    X = V === -1 ? D.indexOf("=") : V + 1,
                    Y, G;
                X === -1 ? (Y = n.decoder(D, Qt.decoder, R, "key"), G = n.strictNullHandling ? null : "") : (Y = n.decoder(D.slice(0, X), Qt.decoder, R, "key"), G = yr.maybeMap(tu(D.slice(X + 1), n), function(ne) {
                    return n.decoder(ne, Qt.decoder, R, "value")
                })), G && n.interpretNumericEntities && R === "iso-8859-1" && (G = $w(G)), D.indexOf("[]=") > -1 && (G = Bw(G) ? [G] : G), Ia.call(i, Y) ? i[Y] = yr.combine(i[Y], G) : i[Y] = G
            } return i
    },
    Hw = function(t, e, n, i) {
        for (var a = i ? e : tu(e, n), f = t.length - 1; f >= 0; --f) {
            var m, _ = t[f];
            if (_ === "[]" && n.parseArrays) m = [].concat(a);
            else {
                m = n.plainObjects ? Object.create(null) : {};
                var k = _.charAt(0) === "[" && _.charAt(_.length - 1) === "]" ? _.slice(1, -1) : _,
                    R = parseInt(k, 10);
                !n.parseArrays && k === "" ? m = {
                    0: a
                } : !isNaN(R) && _ !== k && String(R) === k && R >= 0 && n.parseArrays && R <= n.arrayLimit ? (m = [], m[R] = a) : k !== "__proto__" && (m[k] = a)
            }
            a = m
        }
        return a
    },
    Uw = function(e, n, i, a) {
        if (!!e) {
            var f = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                m = /(\[[^[\]]*])/,
                _ = /(\[[^[\]]*])/g,
                k = i.depth > 0 && m.exec(f),
                R = k ? f.slice(0, k.index) : f,
                D = [];
            if (R) {
                if (!i.plainObjects && Ia.call(Object.prototype, R) && !i.allowPrototypes) return;
                D.push(R)
            }
            for (var V = 0; i.depth > 0 && (k = _.exec(f)) !== null && V < i.depth;) {
                if (V += 1, !i.plainObjects && Ia.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                D.push(k[1])
            }
            return k && D.push("[" + f.slice(k.index) + "]"), Hw(D, n, i, a)
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
            delimiter: typeof e.delimiter == "string" || yr.isRegExp(e.delimiter) ? e.delimiter : Qt.delimiter,
            depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : Qt.depth,
            ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : Qt.interpretNumericEntities,
            parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : Qt.parameterLimit,
            parseArrays: e.parseArrays !== !1,
            plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : Qt.plainObjects,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Qt.strictNullHandling
        }
    },
    Ww = function(t, e) {
        var n = Gw(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? zw(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, f = Object.keys(i), m = 0; m < f.length; ++m) {
            var _ = f[m],
                k = Uw(_, i[_], n, typeof t == "string");
            a = yr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : yr.compact(a)
    },
    qw = Vw,
    Xw = Ww,
    Yw = Ya,
    nu = {
        formats: Yw,
        parse: Xw,
        stringify: qw
    };
class Kw {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Jw {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Qw {
    constructor(e) {
        this.connections = e.connections
    }
}
class Zw {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class eb {}
var go = {
    CreateRoomReply: Kw,
    GetRoomReply: Jw,
    GetAudienceReply: Qw,
    RoomExit: Zw,
    RoomLock: eb
};
const Yl = _a.exports,
    tb = nu,
    {
        CreateRoomReply: nb,
        GetRoomReply: ib
    } = go;
class rb {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = tb.stringify(n);
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
        return new nb({
            code: _.code,
            token: _.token,
            host: _.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Yl(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let f = a.body;
        return new ib({
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
var sb = {
        APIClient: rb
    },
    lr = null;
typeof WebSocket < "u" ? lr = WebSocket : typeof MozWebSocket < "u" ? lr = MozWebSocket : typeof vt < "u" ? lr = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? lr = window.WebSocket || window.MozWebSocket : typeof self < "u" && (lr = self.WebSocket || self.MozWebSocket);
var ob = lr,
    Ka = {
        exports: {}
    },
    fr = typeof Reflect == "object" ? Reflect : null,
    Kl = fr && typeof fr.apply == "function" ? fr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Us;
fr && typeof fr.ownKeys == "function" ? Us = fr.ownKeys : Object.getOwnPropertySymbols ? Us = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Us = function(e) {
    return Object.getOwnPropertyNames(e)
};

function ab(t) {
    console && console.warn && console.warn(t)
}
var iu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Ka.exports = Rt;
Ka.exports.once = hb;
Rt.EventEmitter = Rt;
Rt.prototype._events = void 0;
Rt.prototype._eventsCount = 0;
Rt.prototype._maxListeners = void 0;
var Jl = 10;

function mo(t) {
    if (typeof t != "function") throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
}
Object.defineProperty(Rt, "defaultMaxListeners", {
    enumerable: !0,
    get: function() {
        return Jl
    },
    set: function(t) {
        if (typeof t != "number" || t < 0 || iu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Jl = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || iu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function ru(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return ru(this)
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
        var _ = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw _.context = m, _
    }
    var k = f[e];
    if (k === void 0) return !1;
    if (typeof k == "function") Kl(k, this, n);
    else
        for (var R = k.length, D = cu(k, R), i = 0; i < R; ++i) Kl(D[i], this, n);
    return !0
};

function su(t, e, n, i) {
    var a, f, m;
    if (mo(n), f = t._events, f === void 0 ? (f = t._events = Object.create(null), t._eventsCount = 0) : (f.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), f = t._events), m = f[e]), m === void 0) m = f[e] = n, ++t._eventsCount;
    else if (typeof m == "function" ? m = f[e] = i ? [n, m] : [m, n] : i ? m.unshift(n) : m.push(n), a = ru(t), a > 0 && m.length > a && !m.warned) {
        m.warned = !0;
        var _ = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        _.name = "MaxListenersExceededWarning", _.emitter = t, _.type = e, _.count = m.length, ab(_)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return su(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return su(this, e, n, !0)
};

function lb() {
    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function ou(t, e, n) {
    var i = {
            fired: !1,
            wrapFn: void 0,
            target: t,
            type: e,
            listener: n
        },
        a = lb.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return mo(n), this.on(e, ou(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return mo(n), this.prependListener(e, ou(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, f, m, _;
    if (mo(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (f = -1, m = i.length - 1; m >= 0; m--)
            if (i[m] === n || i[m].listener === n) {
                _ = i[m].listener, f = m;
                break
            } if (f < 0) return this;
        f === 0 ? i.shift() : cb(i, f), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, _ || n)
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

function au(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? ub(a) : cu(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return au(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return au(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : lu.call(t, e)
};
Rt.prototype.listenerCount = lu;

function lu(t) {
    var e = this._events;
    if (e !== void 0) {
        var n = e[t];
        if (typeof n == "function") return 1;
        if (n !== void 0) return n.length
    }
    return 0
}
Rt.prototype.eventNames = function() {
    return this._eventsCount > 0 ? Us(this._events) : []
};

function cu(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function cb(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function ub(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function hb(t, e) {
    return new Promise(function(n, i) {
        function a(m) {
            t.removeListener(e, f), i(m)
        }

        function f() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        uu(t, e, f, {
            once: !0
        }), e !== "error" && db(t, a, {
            once: !0
        })
    })
}

function db(t, e, n) {
    typeof t.on == "function" && uu(t, "error", e, n)
}

function uu(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(f) {
        i.once && t.removeEventListener(e, a), n(f)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class fb {
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
class fs extends vo {
    constructor(e) {
        super(e), this.code = 1e3, this.message = e && e.message ? e.message : "ecast server error"
    }
}
class hu extends fs {
    constructor(e) {
        super(e), this.code = 1001, this.message = e && e.message ? e.message : "create room failed"
    }
}
class du extends fs {
    constructor(e) {
        super(e), this.code = 1002, this.message = e && e.message ? e.message : "unable to connect to room"
    }
}
class fu extends fs {
    constructor(e) {
        super(e), this.code = 1003, this.message = e && e.message ? e.message : "server is shutting down"
    }
}
class Tt extends vo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class pu extends Tt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class gu extends Tt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class mu extends Tt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class vu extends Tt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class yu extends Tt {
    constructor(e) {
        super(e), this.code = 2005, this.message = e && e.message ? e.message : "entity not found"
    }
}
class wu extends Tt {
    constructor(e) {
        super(e), this.code = 2006, this.message = e && e.message ? e.message : "an entity already exists with that key"
    }
}
class bu extends Tt {
    constructor(e) {
        super(e), this.code = 2007, this.message = e && e.message ? e.message : "the entity is not of the expected type"
    }
}
class Cu extends Tt {
    constructor(e) {
        super(e), this.code = 2008, this.message = e && e.message ? e.message : "no such client"
    }
}
class xu extends Tt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class Eu extends Tt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class _u extends Tt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class Su extends Tt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class ku extends Tt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class Tu extends Tt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Au extends Tt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class Ou extends Tt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Ru extends Tt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Iu extends Tt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Du extends Tt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Lu extends Tt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Mu extends Tt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Pu extends Tt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Nu extends Tt {
    constructor(e) {
        super(e), this.code = 2024, this.message = e && e.message ? e.message : "not connected to a room"
    }
}
class Vu extends Tt {
    constructor(e) {
        super(e), this.code = 2025, this.message = e && e.message ? e.message : "illegal operation"
    }
}
class Bu extends Tt {
    constructor(e) {
        super(e), this.code = 2026, this.message = e && e.message ? e.message : "invalid ACL change"
    }
}
class $u extends Tt {
    constructor(e) {
        super(e), this.code = 2027, this.message = e && e.message ? e.message : "room has already ended"
    }
}
class Fu extends Tt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class ju extends Tt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function pb({
    code: t,
    message: e
}) {
    const n = gb[t];
    return n ? new n({
        message: e
    }) : new vo({
        message: e
    })
}
var ti = {
    createError: pb,
    CallError: vo,
    EcastServerError: fs,
    EcastCreateRoomFailed: hu,
    EcastDialRoomFailed: du,
    EcastServerIsShuttingDown: fu,
    EcastClientError: Tt,
    EcastParseError: pu,
    EcastRequestIsMissingOpcode: gu,
    EcastRequestHasInvalidOpcode: mu,
    EcastRequestHasInvalidArguments: vu,
    EcastEntityNotFound: yu,
    EcastEntityAlreadyExists: wu,
    EcastEntityTypeError: bu,
    EcastNoSuchClient: Cu,
    EcastRoomIsLocked: xu,
    EcastRoomIsFull: Eu,
    EcastLicenseNotFound: _u,
    EcastLicenseCheckFailed: Su,
    EcastRoomNotFound: ku,
    EcastInvalidRole: Tu,
    EcastTwitchLoginRequired: Au,
    EcastInvalidOption: Ou,
    EcastPasswordRequired: Ru,
    EcastInvalidPassword: Iu,
    EcastNameRequired: Du,
    EcastFilterError: Lu,
    EcastNoSuchFilter: Mu,
    EcastPermissionDenied: Pu,
    EcastNotConnected: Nu,
    EcastIllegalOperation: Vu,
    EcastACLChangeDenied: Bu,
    EcastRoomHasEnded: $u,
    EcastEntityLocked: Fu,
    EcastRateLimitExceeded: ju,
    ObservedError: fb
};
const gb = {
    1e3: fs,
    1001: hu,
    1002: du,
    1003: fu,
    2e3: Tt,
    2001: pu,
    2002: gu,
    2003: mu,
    2004: vu,
    2005: yu,
    2006: wu,
    2007: bu,
    2008: Cu,
    2009: xu,
    2010: Eu,
    2011: _u,
    2012: Su,
    2013: ku,
    2014: Tu,
    2015: Au,
    2016: Ou,
    2017: Ru,
    2018: Iu,
    2019: Du,
    2021: Lu,
    2022: Mu,
    2023: Pu,
    2024: Nu,
    2025: Vu,
    2026: Bu,
    2027: $u,
    2028: Fu,
    2420: ju
};
class mb {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class vb {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class yb {
    constructor(e) {
        this.id = e.id, this.role = e.role
    }
}
class wb {
    constructor(e) {
        this.to = e.to, this.from = e.from, this.body = e.body, this.userId = e.userId
    }
}
class bb {
    constructor(e) {
        this.id = e.id, this.banned = e.banned, this.reason = e.reason
    }
}
var Ja = {
    ClientConnected: vb,
    ClientDisconnected: yb,
    ClientKicked: bb,
    ClientSend: wb,
    ClientWelcome: mb
};
class Cb {
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
    CountGroup: Cb
};
class xb {
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
    GCounter: xb
};
class Eb {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var zu = {
    Notification: Eb
};
class _b {
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
class Sb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var el = {
    ObjectEntity: _b,
    ObjectEcho: Sb
};
class kb {
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
    PNCounter: kb
};
class Tb {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var Hu = {
    Reply: Tb
};
class Ab {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var Ob = {
    Request: Ab
};
class Rb {
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
class Ib {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var nl = {
    TextEntity: Rb,
    TextEcho: Ib
};
class Db {
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
    TextRing: Db
};
class Lb {
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
var Uu = {
    ArtifactEntity: Lb
};
class Mb {
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
class Pb {
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
class Nb {
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
    DoodleEntity: Mb,
    DoodleLine: Pb,
    DoodleLineRemoved: Nb
};
class Vb {
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
class $b {
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
    StackEntity: Vb,
    StackElement: Bb,
    StackElements: $b
};
class Fb {
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
var Wu = {
    DropEntity: Fb
};
class jb {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var zb = {
    Echo: jb
};
class Hb {
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
var Ub = {
    LockEntity: Hb
};
class Gb {
    constructor() {}
    toString() {
        return "OK"
    }
}
var qu = {
    OK: Gb
};
class Wb {
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
var Xu = {
    NumberEntity: Wb
};
const {
    ArtifactEntity: qb
} = Uu, {
    ClientWelcome: Xb,
    ClientConnected: Yb,
    ClientDisconnected: Kb,
    ClientKicked: Jb,
    ClientSend: Qb
} = Ja, {
    CountGroup: Zb
} = Qa, {
    DoodleEntity: e0,
    DoodleLine: t0,
    DoodleLineRemoved: n0
} = rl, {
    StackEntity: i0,
    StackElement: r0,
    StackElements: s0
} = Gu, {
    DropEntity: o0
} = Wu, {
    Echo: a0
} = zb, {
    LockEntity: l0
} = Ub, {
    GCounter: c0
} = Za, {
    GetAudienceReply: u0,
    RoomExit: h0,
    RoomLock: d0
} = go, {
    Notification: f0
} = zu, {
    OK: p0
} = qu, {
    NumberEntity: g0
} = Xu, {
    ObjectEcho: m0,
    ObjectEntity: v0
} = el, {
    PNCounter: Ql
} = tl, {
    Reply: y0
} = Hu, {
    TextEcho: w0,
    TextEntity: b0
} = nl, {
    TextRing: C0
} = il, {
    createError: Zl,
    ObservedError: x0
} = ti;

function Da(t, e, n) {
    switch (t) {
        case "ok":
            return new p0;
        case "echo":
            return new a0({
                message: e.message
            });
        case "lock":
            return new l0({
                key: e.key,
                from: e.from
            });
        case "error":
            return Zl({
                code: e.code,
                message: e.msg
            });
        case "error/observed":
            return new x0({
                to: e.to,
                error: Zl({
                    code: e.error.code,
                    message: e.error.msg
                })
            });
        case "string":
            return e;
        case "text":
            return new b0({
                from: e.from,
                key: e.key,
                text: e.val,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "text/echo":
            return new w0({
                message: e.message
            });
        case "object":
            return new v0({
                from: e.from,
                key: e.key,
                val: e.val,
                meta: n,
                acl: e.acl
            });
        case "object/echo":
            return new m0({
                message: e.message
            });
        case "drop":
            return new o0({
                key: e.key
            });
        case "artifact":
            return new qb({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new Yb({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Kb({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Jb({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Qb({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Xb({
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
                    a[f] = Da(m[0], m[1], m[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new e0({
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
            return new t0({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new n0({
                key: e.key,
                index: e.index
            });
        case "stack":
            return new i0({
                key: e.key,
                size: e.size,
                from: e.from,
                version: e.version,
                meta: e.meta,
                acl: e.acl
            });
        case "stack/element":
            return new r0({
                key: e.key,
                val: e.val
            });
        case "stack/elements":
            return new s0({
                key: e.key,
                vals: e.vals
            });
        case "number":
            return new g0({
                key: e.key,
                val: e.val,
                restrictions: e.restrictions,
                from: e.from,
                version: e.version,
                meta: n,
                acl: e.acl
            });
        case "room/exit":
            return new h0({
                cause: e.cause
            });
        case "room/lock":
            return new d0;
        case "room/get-audience":
            return new u0({
                connections: e.connections
            });
        case "audience":
            return new Ql({
                key: t,
                count: e[1]
            });
        case "audience/count-group":
            return new Zb({
                key: e.key,
                choices: e.choices,
                meta: n
            });
        case "audience/text-ring":
            return new C0({
                key: e.key,
                elements: e.elements,
                meta: n
            });
        case "audience/g-counter":
            return new c0({
                key: e.key,
                count: e.count,
                meta: n
            });
        case "audience/pn-counter":
            return new Ql({
                key: e.key,
                count: e.count,
                meta: n
            });
        default:
            return console.error(`failed to parse result of type ${t}: ${JSON.stringify(e,null,2)}`), e
    }
}

function E0(t) {
    let e = JSON.parse(t.data),
        n = e.opcode || e.type;
    return e.re ? new y0({
        pc: e.pc,
        re: e.re,
        opcode: n,
        result: Da(n, e.result)
    }) : new f0({
        pc: e.pc,
        opcode: n,
        result: Da(n, e.result)
    })
}
var _0 = {
    parseResponseMessage: E0
};
const ec = ob,
    S0 = nu,
    k0 = Ka.exports,
    {
        CallError: T0
    } = ti,
    {
        ClientWelcome: A0
    } = Ja,
    {
        CountGroup: O0
    } = Qa,
    {
        GCounter: R0
    } = Za,
    {
        Notification: tc
    } = zu,
    {
        ObjectEntity: ua
    } = el,
    {
        PNCounter: I0
    } = tl,
    {
        Reply: D0
    } = Hu,
    {
        Request: L0
    } = Ob,
    {
        TextEntity: ha
    } = nl,
    {
        TextRing: M0
    } = il,
    {
        parseResponseMessage: P0
    } = _0,
    {
        DoodleEntity: N0
    } = rl,
    {
        StackEntity: V0
    } = Gu,
    B0 = 1e3 + Math.floor(Math.random() * 500),
    nc = 13e3;
class $0 extends k0 {
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
        const n = S0.stringify(e),
            i = this.role === "audience" || this.id > 1e7 ? `${this.scheme}://${this.host}/api/v2/audience/${this.code}/play?${n}` : `${this.scheme}://${this.host}/api/v2/rooms/${this.code}/play?${n}`;
        return new Promise((a, f) => {
            let m = !1,
                _ = !1,
                k = D => {
                    a(D), m = !0
                },
                R = D => {
                    f(D), m = !0
                };
            this.conn = new ec(i, "ecast-v0"), this.conn.onmessage = D => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(D.data),null,2)}`);
                const V = P0(D);
                if (V instanceof D0) this.onReply(V);
                else if (V instanceof tc) {
                    if (V.result instanceof A0) _ = !0, this.id = V.result.id, this.deviceId = V.result.deviceId, this.entities = V.result.entities, this.secret = V.result.secret, V.result.name && (this.name = V.result.name), k(V.result);
                    else if (!m) {
                        R(V.result);
                        return
                    }
                    this.onNotification(V)
                } else console.error(`failed to parse response messsage: ${V}`)
            }, this.conn.onerror = D => {
                m ? this.emit("socketError", D) : R(D)
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
            if (n >= nc) {
                this.debugLog("reconnect failed!", i), this.emit("socketClose", i);
                return
            }
            e += 1, this.debugLog("waiting", n), this.emit("connection", {
                status: "waiting",
                attempt: e
            }), await this.sleep(n), n = Math.min(nc, n * 2)
        }
    }
    disconnect() {
        !this.conn || (this.conn.close(), this.conn.onmessage = null, this.conn.onerror = null, this.conn.onopen = null, this.conn.onclose = null, this.conn = null)
    }
    onReply(e) {
        const n = e.re,
            i = this.pending[n];
        if (!i) {
            const a = new tc(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof T0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== ec.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new L0({
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
        return this.entities[e] = new ua({
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
        return this.entities[e] = new ua({
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
        return this.entities[e] = new ua({
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
        return this.entities[e] = new ha({
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
        return this.entities[e] = new ha({
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
        return this.entities[e] = new ha({
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
            weights: R
        } = n;
        a && (i.acl = a), f && (i.colors = f), i.live = m, _ != null && (i.maxPoints = _), k && (i.size = k), R && (i.weights = R);
        const D = await this.send("doodle/create", i);
        return this.entities[e] = new N0({
            key: e,
            colors: f,
            lines: [],
            live: m,
            locked: !1,
            maxPoints: i.maxPoints || 0,
            size: k,
            weights: R,
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
        return this.entities[e] = new V0({
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
        return this.entities[e] = new O0({
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
        return this.entities[e] = new R0({
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
        return this.entities[e] = new I0({
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
        return this.entities[e] = new M0({
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
var F0 = {
    WSClient: $0
};
const {
    APIClient: j0
} = sb, {
    WSClient: z0
} = F0, {
    CreateRoomReply: H0,
    GetRoomReply: U0
} = go, {
    ClientWelcome: G0,
    ClientDisconnected: W0
} = Ja, {
    ArtifactEntity: q0
} = Uu, {
    GCounter: X0
} = Za, {
    NumberEntity: Y0
} = Xu, {
    TextEntity: K0
} = nl, {
    DoodleEntity: J0
} = rl, {
    ObjectEntity: Q0
} = el, {
    CountGroup: Z0
} = Qa, {
    DropEntity: eC
} = Wu, {
    OK: tC
} = qu, {
    RoomExit: nC
} = go, {
    TextRing: iC
} = il, {
    PNCounter: rC
} = tl;
var Ii = {
    APIClient: j0,
    WSClient: z0,
    ClientWelcome: G0,
    CreateRoomReply: H0,
    DropEntity: eC,
    GetRoomReply: U0,
    ClientDisconnected: W0,
    RoomExit: nC,
    OK: tC,
    ArtifactEntity: q0,
    DoodleEntity: J0,
    NumberEntity: Y0,
    CountGroup: Z0,
    GCounter: X0,
    ObjectEntity: Q0,
    PNCounter: rC,
    TextEntity: K0,
    TextRing: iC
};

function ic(...t) {
    console.log(...t)
}

function sC(t) {
    throw new Error('Could not dynamically require "' + t + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var rc = {
    exports: {}
};
(function(t, e) {
    (function(n, i) {
        i(e)
    })(vt, function(n) {
        var i = typeof window < "u" ? window : typeof vt < "u" ? vt : typeof self < "u" ? self : {},
            a = function(N, K) {
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

        function R(F) {
            for (var N = /([^=?#&]+)=?([^&]*)/g, K = {}, L; L = N.exec(F);) {
                var q = _(L[1]),
                    fe = _(L[2]);
                q === null || fe === null || q in K || (K[q] = fe)
            }
            return K
        }

        function D(F, N) {
            N = N || "";
            var K = [],
                L, q;
            typeof N != "string" && (N = "?");
            for (q in F)
                if (f.call(F, q)) {
                    if (L = F[q], !L && (L === null || L === m || isNaN(L)) && (L = ""), q = k(q), L = k(L), q === null || L === null) continue;
                    K.push(q + "=" + L)
                } return K.length ? N + K.join("&") : ""
        }
        var V = D,
            X = R,
            Y = {
                stringify: V,
                parse: X
            },
            G = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            ne = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + v + "+");

        function W(F) {
            return (F || "").toString().replace(P, "")
        }
        var se = [
                ["#", "hash"],
                ["?", "query"],
                function(N, K) {
                    return d(K.protocol) ? N.replace(/\\/g, "/") : N
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

        function ve(F) {
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var K = N.location || {};
            F = F || K;
            var L = {},
                q = typeof F,
                fe;
            if (F.protocol === "blob:") L = new Pe(unescape(F.pathname), {});
            else if (q === "string") {
                L = new Pe(F, {});
                for (fe in oe) delete L[fe]
            } else if (q === "object") {
                for (fe in F) fe in oe || (L[fe] = F[fe]);
                L.slashes === void 0 && (L.slashes = G.test(F.href))
            }
            return L
        }

        function d(F) {
            return F === "file:" || F === "ftp:" || F === "http:" || F === "https:" || F === "ws:" || F === "wss:"
        }

        function Ee(F, N) {
            F = W(F), N = N || {};
            var K = ne.exec(F),
                L = K[1] ? K[1].toLowerCase() : "",
                q = !!K[2],
                fe = !!K[3],
                pe = 0,
                Ne;
            return q ? fe ? (Ne = K[2] + K[3] + K[4], pe = K[2].length + K[3].length) : (Ne = K[2] + K[4], pe = K[2].length) : fe ? (Ne = K[3] + K[4], pe = K[3].length) : Ne = K[4], L === "file:" ? pe >= 2 && (Ne = Ne.slice(2)) : d(L) ? Ne = K[4] : L ? q && (Ne = Ne.slice(2)) : pe >= 2 && d(N.protocol) && (Ne = K[4]), {
                protocol: L,
                slashes: q || d(L),
                slashesCount: pe,
                rest: Ne
            }
        }

        function Oe(F, N) {
            if (F === "") return N;
            for (var K = (N || "/").split("/").slice(0, -1).concat(F.split("/")), L = K.length, q = K[L - 1], fe = !1, pe = 0; L--;) K[L] === "." ? K.splice(L, 1) : K[L] === ".." ? (K.splice(L, 1), pe++) : pe && (L === 0 && (fe = !0), K.splice(L, 1), pe--);
            return fe && K.unshift(""), (q === "." || q === "..") && K.push(""), K.join("/")
        }

        function Pe(F, N, K) {
            if (F = W(F), !(this instanceof Pe)) return new Pe(F, N, K);
            var L, q, fe, pe, Ne, Ve, pt = se.slice(),
                Ft = typeof N,
                Ye = this,
                In = 0;
            for (Ft !== "object" && Ft !== "string" && (K = N, N = null), K && typeof K != "function" && (K = Y.parse), N = ve(N), q = Ee(F || "", N), L = !q.protocol && !q.slashes, Ye.slashes = q.slashes || L && N.slashes, Ye.protocol = q.protocol || N.protocol || "", F = q.rest, (Ye.protocol === "file:" || !q.slashes && (q.protocol || q.slashesCount < 2 || !d(Ye.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (pe = pt[In], typeof pe == "function") {
                    F = pe(F, Ye);
                    continue
                }
                fe = pe[0], Ve = pe[1], fe !== fe ? Ye[Ve] = F : typeof fe == "string" ? ~(Ne = F.indexOf(fe)) && (typeof pe[2] == "number" ? (Ye[Ve] = F.slice(0, Ne), F = F.slice(Ne + pe[2])) : (Ye[Ve] = F.slice(Ne), F = F.slice(0, Ne))) : (Ne = fe.exec(F)) && (Ye[Ve] = Ne[1], F = F.slice(0, Ne.index)), Ye[Ve] = Ye[Ve] || L && pe[3] && N[Ve] || "", pe[4] && (Ye[Ve] = Ye[Ve].toLowerCase())
            }
            K && (Ye.query = K(Ye.query)), L && N.slashes && Ye.pathname.charAt(0) !== "/" && (Ye.pathname !== "" || N.pathname !== "") && (Ye.pathname = Oe(Ye.pathname, N.pathname)), Ye.pathname.charAt(0) !== "/" && d(Ye.protocol) && (Ye.pathname = "/" + Ye.pathname), a(Ye.port, Ye.protocol) || (Ye.host = Ye.hostname, Ye.port = ""), Ye.username = Ye.password = "", Ye.auth && (pe = Ye.auth.split(":"), Ye.username = pe[0] || "", Ye.password = pe[1] || ""), Ye.origin = Ye.protocol !== "file:" && d(Ye.protocol) && Ye.host ? Ye.protocol + "//" + Ye.host : "null", Ye.href = Ye.toString()
        }

        function lt(F, N, K) {
            var L = this;
            switch (F) {
                case "query":
                    typeof N == "string" && N.length && (N = (K || Y.parse)(N)), L[F] = N;
                    break;
                case "port":
                    L[F] = N, a(N, L.protocol) ? N && (L.host = L.hostname + ":" + N) : (L.host = L.hostname, L[F] = "");
                    break;
                case "hostname":
                    L[F] = N, L.port && (N += ":" + L.port), L.host = N;
                    break;
                case "host":
                    L[F] = N, /:\d+$/.test(N) ? (N = N.split(":"), L.port = N.pop(), L.hostname = N.join(":")) : (L.hostname = N, L.port = "");
                    break;
                case "protocol":
                    L.protocol = N.toLowerCase(), L.slashes = !K;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var q = F === "pathname" ? "/" : "#";
                        L[F] = N.charAt(0) !== q ? q + N : N
                    } else L[F] = N;
                    break;
                default:
                    L[F] = N
            }
            for (var fe = 0; fe < se.length; fe++) {
                var pe = se[fe];
                pe[4] && (L[pe[1]] = L[pe[1]].toLowerCase())
            }
            return L.origin = L.protocol !== "file:" && d(L.protocol) && L.host ? L.protocol + "//" + L.host : "null", L.href = L.toString(), L
        }

        function Be(F) {
            (!F || typeof F != "function") && (F = Y.stringify);
            var N, K = this,
                L = K.protocol;
            L && L.charAt(L.length - 1) !== ":" && (L += ":");
            var q = L + (K.slashes || d(K.protocol) ? "//" : "");
            return K.username && (q += K.username, K.password && (q += ":" + K.password), q += "@"), q += K.host + K.pathname, N = typeof K.query == "object" ? F(K.query) : K.query, N && (q += N.charAt(0) !== "?" ? "?" + N : N), K.hash && (q += K.hash), q
        }
        Pe.prototype = {
            set: lt,
            toString: Be
        }, Pe.extractProtocol = Ee, Pe.location = ve, Pe.trimLeft = W, Pe.qs = Y;
        var Q = Pe;

        function je(F, N) {
            setTimeout(function(K) {
                return F.call(K)
            }, 4, N)
        }

        function U(F, N) {
            typeof process < "u" && console[F].call(null, N)
        }

        function ae(F, N) {
            F === void 0 && (F = []);
            var K = [];
            return F.forEach(function(L) {
                N(L) || K.push(L)
            }), K
        }

        function Ae(F, N) {
            F === void 0 && (F = []);
            var K = [];
            return F.forEach(function(L) {
                N(L) && K.push(L)
            }), K
        }
        var we = function() {
            this.listeners = {}
        };
        we.prototype.addEventListener = function(N, K) {
            typeof K == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Ae(this.listeners[N], function(L) {
                return L === K
            }).length === 0 && this.listeners[N].push(K))
        }, we.prototype.removeEventListener = function(N, K) {
            var L = this.listeners[N];
            this.listeners[N] = ae(L, function(q) {
                return q === K
            })
        }, we.prototype.dispatchEvent = function(N) {
            for (var K = this, L = [], q = arguments.length - 1; q-- > 0;) L[q] = arguments[q + 1];
            var fe = N.type,
                pe = this.listeners[fe];
            return Array.isArray(pe) ? (pe.forEach(function(Ne) {
                L.length > 0 ? Ne.apply(K, L) : Ne.call(K, N)
            }), !0) : !1
        };

        function ye(F) {
            var N = F.indexOf("?");
            return N >= 0 ? F.slice(0, N) : F
        }
        var ue = function() {
            this.urlMap = {}
        };
        ue.prototype.attachWebSocket = function(N, K) {
            var L = ye(K),
                q = this.urlMap[L];
            if (q && q.server && q.websockets.indexOf(N) === -1) return q.websockets.push(N), q.server
        }, ue.prototype.addMembershipToRoom = function(N, K) {
            var L = this.urlMap[ye(N.url)];
            L && L.server && L.websockets.indexOf(N) !== -1 && (L.roomMemberships[K] || (L.roomMemberships[K] = []), L.roomMemberships[K].push(N))
        }, ue.prototype.attachServer = function(N, K) {
            var L = ye(K),
                q = this.urlMap[L];
            if (!q) return this.urlMap[L] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, ue.prototype.serverLookup = function(N) {
            var K = ye(N),
                L = this.urlMap[K];
            if (L) return L.server
        }, ue.prototype.websocketsLookup = function(N, K, L) {
            var q = ye(N),
                fe, pe = this.urlMap[q];
            if (fe = pe ? pe.websockets : [], K) {
                var Ne = pe.roomMemberships[K];
                fe = Ne || []
            }
            return L ? fe.filter(function(Ve) {
                return Ve !== L
            }) : fe
        }, ue.prototype.removeServer = function(N) {
            delete this.urlMap[ye(N)]
        }, ue.prototype.removeWebSocket = function(N, K) {
            var L = ye(K),
                q = this.urlMap[L];
            q && (q.websockets = ae(q.websockets, function(fe) {
                return fe === N
            }))
        }, ue.prototype.removeMembershipFromRoom = function(N, K) {
            var L = this.urlMap[ye(N.url)],
                q = L.roomMemberships[K];
            L && q !== null && (L.roomMemberships[K] = ae(q, function(fe) {
                return fe === N
            }))
        };
        var Se = new ue,
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, K, L) {
            N === void 0 && (N = "undefined"), K === void 0 && (K = !1), L === void 0 && (L = !1), this.type = "" + N, this.bubbles = Boolean(K), this.cancelable = Boolean(L)
        };
        var dt = function(F) {
                function N(K, L) {
                    if (L === void 0 && (L = {}), F.call(this), !K) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var q = L.bubbles,
                        fe = L.cancelable;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = q ? Boolean(q) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Bt = function(F) {
                function N(K, L) {
                    if (L === void 0 && (L = {}), F.call(this), !K) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var q = L.bubbles,
                        fe = L.cancelable,
                        pe = L.data,
                        Ne = L.origin,
                        Ve = L.lastEventId,
                        pt = L.ports;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.canncelBubble = !1, this.bubbles = q ? Boolean(q) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof pe > "u" ? null : pe, this.lastEventId = "" + (Ve || "")
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke),
            Gt = function(F) {
                function N(K, L) {
                    if (L === void 0 && (L = {}), F.call(this), !K) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof L != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var q = L.bubbles,
                        fe = L.cancelable,
                        pe = L.code,
                        Ne = L.reason,
                        Ve = L.wasClean;
                    this.type = "" + K, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = fe ? Boolean(fe) : !1, this.cancelBubble = !1, this.bubbles = q ? Boolean(q) : !1, this.code = typeof pe == "number" ? parseInt(pe, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Ve ? Boolean(Ve) : !1
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N
            }(Ke);

        function E(F) {
            var N = F.type,
                K = F.target,
                L = new dt(N);
            return K && (L.target = K, L.srcElement = K, L.currentTarget = K), L
        }

        function l(F) {
            var N = F.type,
                K = F.origin,
                L = F.data,
                q = F.target,
                fe = new Bt(N, {
                    data: L,
                    origin: K
                });
            return q && (fe.target = q, fe.srcElement = q, fe.currentTarget = q), fe
        }

        function g(F) {
            var N = F.code,
                K = F.reason,
                L = F.type,
                q = F.target,
                fe = F.wasClean;
            fe || (fe = N === Te.CLOSE_NORMAL || N === Te.CLOSE_NO_STATUS);
            var pe = new Gt(L, {
                code: N,
                reason: K,
                wasClean: fe
            });
            return q && (pe.target = q, pe.srcElement = q, pe.currentTarget = q), pe
        }

        function S(F, N, K) {
            F.readyState = Le.CLOSING;
            var L = Se.serverLookup(F.url),
                q = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: K
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: K
                });
            je(function() {
                Se.removeWebSocket(F, F.url), F.readyState = Le.CLOSED, F.dispatchEvent(q), F.dispatchEvent(fe), L && L.dispatchEvent(q, L)
            }, F)
        }

        function O(F, N, K) {
            F.readyState = Le.CLOSING;
            var L = Se.serverLookup(F.url),
                q = g({
                    type: "close",
                    target: F.target,
                    code: N,
                    reason: K,
                    wasClean: !1
                }),
                fe = g({
                    type: "server::close",
                    target: F,
                    code: N,
                    reason: K,
                    wasClean: !1
                }),
                pe = E({
                    type: "error",
                    target: F.target
                });
            je(function() {
                Se.removeWebSocket(F, F.url), F.readyState = Le.CLOSED, F.dispatchEvent(pe), F.dispatchEvent(q), F.dispatchEvent(fe), L && L.dispatchEvent(q, L)
            }, F)
        }

        function M(F) {
            return Object.prototype.toString.call(F) !== "[object Blob]" && !(F instanceof ArrayBuffer) && (F = String(F)), F
        }
        var B = new WeakMap;

        function ie(F) {
            if (B.has(F)) return B.get(F);
            var N = new Proxy(F, {
                get: function(L, q) {
                    return q === "close" ? function(pe) {
                        pe === void 0 && (pe = {});
                        var Ne = pe.code || Te.CLOSE_NORMAL,
                            Ve = pe.reason || "";
                        S(N, Ne, Ve)
                    } : q === "send" ? function(pe) {
                        pe = M(pe), F.dispatchEvent(l({
                            type: "message",
                            data: pe,
                            origin: this.url,
                            target: F
                        }))
                    } : q === "on" ? function(pe, Ne) {
                        F.addEventListener("server::" + pe, Ne)
                    } : q === "target" ? F : L[q]
                }
            });
            return B.set(F, N), N
        }

        function ke(F) {
            var N = encodeURIComponent(F).match(/%[89ABab]/g);
            return F.length + (N ? N.length : 0)
        }

        function he(F) {
            var N = new Q(F),
                K = N.pathname,
                L = N.protocol,
                q = N.hash;
            if (!F) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (K || (N.pathname = "/"), L === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (L !== "ws:" && L !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + L + "' is not allowed.");
            if (q !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + q + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function De(F) {
            if (F === void 0 && (F = []), !Array.isArray(F) && typeof F != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + F.toString() + "' is invalid.");
            typeof F == "string" && (F = [F]);
            var N = F.map(function(L) {
                    return {
                        count: 1,
                        protocol: L
                    }
                }).reduce(function(L, q) {
                    return L[q.protocol] = (L[q.protocol] || 0) + q.count, L
                }, {}),
                K = Object.keys(N).filter(function(L) {
                    return N[L] > 1
                });
            if (K.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + K[0] + "' is duplicated.");
            return F
        }
        var Le = function(F) {
            function N(L, q) {
                F.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = he(L), q = De(q), this.protocol = q[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var fe = ie(this),
                    pe = Se.attachWebSocket(fe, this.url);
                je(function() {
                    if (pe)
                        if (pe.options.verifyClient && typeof pe.options.verifyClient == "function" && !pe.options.verifyClient()) this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Se.removeWebSocket(fe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (pe.options.selectProtocol && typeof pe.options.selectProtocol == "function") {
                                var Ve = pe.options.selectProtocol(q),
                                    pt = Ve !== "",
                                    Ft = q.indexOf(Ve) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = N.CLOSED, U("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Se.removeWebSocket(fe, this.url), this.dispatchEvent(E({
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
                        code: Te.CLOSE_NORMAL
                    })), U("error", "WebSocket connection to '" + this.url + "' failed")
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
            }, K.onopen.set = function(L) {
                this.removeEventListener("open", this._onopen), this._onopen = L, this.addEventListener("open", L)
            }, K.onmessage.set = function(L) {
                this.removeEventListener("message", this._onmessage), this._onmessage = L, this.addEventListener("message", L)
            }, K.onclose.set = function(L) {
                this.removeEventListener("close", this._onclose), this._onclose = L, this.addEventListener("close", L)
            }, K.onerror.set = function(L) {
                this.removeEventListener("error", this._onerror), this._onerror = L, this.addEventListener("error", L)
            }, N.prototype.send = function(q) {
                var fe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var pe = l({
                        type: "server::message",
                        origin: this.url,
                        data: M(q)
                    }),
                    Ne = Se.serverLookup(this.url);
                Ne && je(function() {
                    fe.dispatchEvent(pe, q)
                }, Ne)
            }, N.prototype.close = function(q, fe) {
                if (q !== void 0 && (typeof q != "number" || q !== 1e3 && (q < 3e3 || q > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + q + " is neither.");
                if (fe !== void 0) {
                    var pe = ke(fe);
                    if (pe > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === N.CLOSING || this.readyState === N.CLOSED)) {
                    var Ne = ie(this);
                    this.readyState === N.CONNECTING ? O(Ne, q || Te.CLOSE_ABNORMAL, fe) : S(Ne, q || Te.CLOSE_NO_STATUS, fe)
                }
            }, Object.defineProperties(N.prototype, K), N
        }(we);
        Le.CONNECTING = 0, Le.prototype.CONNECTING = Le.CONNECTING, Le.OPEN = 1, Le.prototype.OPEN = Le.OPEN, Le.CLOSING = 2, Le.prototype.CLOSING = Le.CLOSING, Le.CLOSED = 3, Le.prototype.CLOSED = Le.CLOSED;
        var nt = function(F) {
            return F.reduce(function(N, K) {
                return N.indexOf(K) > -1 ? N : N.concat(K)
            }, [])
        };

        function Ct() {
            return typeof window < "u" ? window : typeof process == "object" && typeof sC == "function" && typeof vt == "object" ? vt : this
        }
        var rn = {
                mock: !0,
                verifyClient: null,
                selectProtocol: null
            },
            ct = function(F) {
                function N(K, L) {
                    L === void 0 && (L = rn), F.call(this);
                    var q = new Q(K);
                    q.pathname || (q.pathname = "/"), this.url = q.toString(), this.originalWebSocket = null;
                    var fe = Se.attachServer(this, this.url);
                    if (!fe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, L), this.options.mock && this.mockWebsocket()
                }
                return F && (N.__proto__ = F), N.prototype = Object.create(F && F.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket = L.WebSocket, L.WebSocket = Le
                }, N.prototype.restoreWebsocket = function() {
                    var L = Ct();
                    this.originalWebSocket !== null && (L.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(L) {
                    L === void 0 && (L = function() {}), this.options.mock && this.restoreWebsocket(), Se.removeServer(this.url), typeof L == "function" && L()
                }, N.prototype.on = function(L, q) {
                    this.addEventListener(L, q)
                }, N.prototype.close = function(L) {
                    L === void 0 && (L = {});
                    var q = L.code,
                        fe = L.reason,
                        pe = L.wasClean,
                        Ne = Se.websocketsLookup(this.url);
                    Se.removeServer(this.url), Ne.forEach(function(Ve) {
                        Ve.readyState = Le.CLOSED, Ve.dispatchEvent(g({
                            type: "close",
                            target: Ve.target,
                            code: q || Te.CLOSE_NORMAL,
                            reason: fe || "",
                            wasClean: pe
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(L, q, fe) {
                    var pe = this;
                    fe === void 0 && (fe = {});
                    var Ne = fe.websockets;
                    Ne || (Ne = Se.websocketsLookup(this.url)), typeof fe != "object" || arguments.length > 3 ? (q = Array.prototype.slice.call(arguments, 1, arguments.length), q = q.map(function(Ve) {
                        return M(Ve)
                    })) : q = M(q), Ne.forEach(function(Ve) {
                        Array.isArray(q) ? Ve.dispatchEvent.apply(Ve, [l({
                            type: L,
                            data: q,
                            origin: pe.url,
                            target: Ve.target
                        })].concat(q)) : Ve.dispatchEvent(l({
                            type: L,
                            data: q,
                            origin: pe.url,
                            target: Ve.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return Se.websocketsLookup(this.url)
                }, N.prototype.to = function(L, q, fe) {
                    var pe = this;
                    fe === void 0 && (fe = []);
                    var Ne = this,
                        Ve = nt(fe.concat(Se.websocketsLookup(this.url, L, q)));
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
                    for (var L = [], q = arguments.length; q--;) L[q] = arguments[q];
                    return this.to.apply(null, L)
                }, N.prototype.simulate = function(L) {
                    var q = Se.websocketsLookup(this.url);
                    L === "error" && q.forEach(function(fe) {
                        fe.readyState = Le.CLOSED, fe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, N
            }(we);
        ct.of = function(N) {
            return new ct(N)
        };
        var yt = function(F) {
            function N(L, q) {
                var fe = this;
                L === void 0 && (L = "socket.io"), q === void 0 && (q = ""), F.call(this), this.binaryType = "blob";
                var pe = new Q(L);
                pe.pathname || (pe.pathname = "/"), this.url = pe.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof q == "string" || typeof q == "object" && q !== null ? this.protocol = q : Array.isArray(q) && q.length > 0 && (this.protocol = q[0]);
                var Ne = Se.attachWebSocket(this, this.url);
                je(function() {
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
            var K = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var q = Se.serverLookup(this.url);
                    return Se.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), q && q.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Te.CLOSE_NORMAL
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
                    Ve = Se.serverLookup(this.url);
                return Ve && Ve.dispatchEvent.apply(Ve, [Ne].concat(fe)), this
            }, N.prototype.send = function(q) {
                return this.emit("message", q), this
            }, K.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var L = this,
                    q = Se.serverLookup(this.url);
                if (!q) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(pe, Ne) {
                        return q.emit(pe, Ne, {
                            websockets: Se.websocketsLookup(L.url, null, L)
                        }), L
                    },
                    to: function(pe) {
                        return q.to(pe, L)
                    },
                    in: function(pe) {
                        return q.in(pe, L)
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
                Se.addMembershipToRoom(this, q)
            }, N.prototype.leave = function(q) {
                Se.removeMembershipFromRoom(this, q)
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
            }, Object.defineProperties(N.prototype, K), N
        }(we);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var bt = function(N, K) {
            return new yt(N, K)
        };
        bt.connect = function(N, K) {
            return bt(N, K)
        };
        var Kt = ct,
            Je = Le,
            Mt = bt;
        n.Server = Kt, n.WebSocket = Je, n.SocketIO = Mt, Object.defineProperty(n, "__esModule", {
            value: !0
        })
    })
})(rc, rc.exports);
var oC = {
    exports: {}
};
(function(t) {
    (function() {
        function e(_, k) {
            var R = _.x - k.x,
                D = _.y - k.y;
            return R * R + D * D
        }

        function n(_, k, R) {
            var D = k.x,
                V = k.y,
                X = R.x - D,
                Y = R.y - V;
            if (X !== 0 || Y !== 0) {
                var G = ((_.x - D) * X + (_.y - V) * Y) / (X * X + Y * Y);
                G > 1 ? (D = R.x, V = R.y) : G > 0 && (D += X * G, V += Y * G)
            }
            return X = _.x - D, Y = _.y - V, X * X + Y * Y
        }

        function i(_, k) {
            for (var R = _[0], D = [R], V, X = 1, Y = _.length; X < Y; X++) V = _[X], e(V, R) > k && (D.push(V), R = V);
            return R !== V && D.push(V), D
        }

        function a(_, k, R, D, V) {
            for (var X = D, Y, G = k + 1; G < R; G++) {
                var ne = n(_[G], _[k], _[R]);
                ne > X && (Y = G, X = ne)
            }
            X > D && (Y - k > 1 && a(_, k, Y, D, V), V.push(_[Y]), R - Y > 1 && a(_, Y, R, D, V))
        }

        function f(_, k) {
            var R = _.length - 1,
                D = [_[0]];
            return a(_, 0, R, k, D), D.push(_[R]), D
        }

        function m(_, k, R) {
            if (_.length <= 2) return _;
            var D = k !== void 0 ? k * k : 1;
            return _ = R ? _ : i(_, D), _ = f(_, D), _
        }
        t.exports = m, t.exports.default = m
    })()
})(oC);
const aC = Et.View.extend({
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
        wh.bannerClick(this.getCampaign(), "post_game"), this.model.get("url") && window.open(this.model.get("url"), "_blank")
    },
    onRender() {
        this.stickit()
    },
    visibleDidChange() {
        setTimeout(() => {
            _e(window).trigger("resize")
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
        this.bannerData = await this.loadBannerData(e), this.bannerData && (this.view = new aC({
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp2-auction/",
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
var lC = {};
(function(t) {
    (function(e) {
        e(Ni.exports, ot, t)
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
                    e.each(P, function(oe, ve) {
                        this.unstickit(v, ve)
                    }, this);
                    return
                }
                var W = [],
                    se = [];
                this._modelBindings = e.reject(this._modelBindings, function(oe) {
                    if (!(v && oe.model !== v) && !(P && oe.config.selector != P)) return oe.model.off(oe.event, oe.fn), se.push(oe.config._destroy), W.push(oe.model), !0
                }), e.invoke(e.uniq(W), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(se), function(oe) {
                    oe.call(this)
                }, this), this.$el.off(".stickit" + (v ? "." + v.cid : ""), P)
            },
            stickit: function(v, P) {
                var W = v || this.model,
                    se = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(W, se);
                var oe = this.remove;
                return oe.stickitWrapped || (this.remove = function() {
                    var ve = this;
                    return this.unstickit(), oe && (ve = oe.apply(this, arguments)), ve
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(v, P, W) {
                var se = v || this.model,
                    oe = ".stickit." + se.cid;
                if (W = W || {}, e.isObject(P)) {
                    var ve = P;
                    e.each(ve, function(Q, je) {
                        this.addBinding(se, je, Q)
                    }, this);
                    return
                }
                var d = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(se, P), !!d.length) {
                    e.isString(W) && (W = {
                        observe: W
                    }), e.isFunction(W.observe) && (W.observe = W.observe.call(this));
                    var Ee = V(d, W),
                        Oe = Ee.observe;
                    Ee.selector = P, Ee.view = this;
                    var Pe = Ee.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: Ee
                        }, Ee.setOptions);
                    if (Ee._destroy = function() {
                            m.call(this, Ee.destroy, d, se, Ee)
                        }, X(d, Ee, se, Oe), G(d, Ee, se, Oe), Y(d, Ee, se), Oe) {
                        e.each(Ee.events, function(Q) {
                            var je = Q + oe,
                                U = function(Ae) {
                                    var we = m.call(this, Ee.getVal, d, Ae, Ee, a.call(arguments, 1)),
                                        ye = _(Ee.updateModel, we, Ae, Ee);
                                    ye && R(se, Oe, we, lt, Ee)
                                },
                                ae = P === ":el" ? "" : P;
                            this.$el.on(je, ae, e.bind(U, this))
                        }, this), e.each(e.flatten([Oe]), function(Q) {
                            k(se, "change:" + Q, Ee, function(je, U, ae) {
                                var Ae = ae && ae.stickitChange && ae.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var we = D(se, Oe, Ee);
                                    ne(d, Ee, we, se)
                                }
                            })
                        });
                        var Be = D(se, Oe, Ee);
                        ne(d, Ee, Be, se, !0)
                    }
                    m.call(this, Ee.initialize, d, se, Ee)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            f = function(v, P) {
                var W = (P || "").split("."),
                    se = e.reduce(W, function(oe, ve) {
                        return oe[ve]
                    }, v);
                return se == null ? v : se
            },
            m = function(v) {
                if (v = e.isString(v) ? f(this, v) : v, v) return v.apply(this, a.call(arguments, 1))
            },
            _ = function(v, P, W) {
                if (e.isBoolean(v)) return v;
                if (e.isFunction(v) || e.isString(v)) {
                    var se = e.last(arguments).view;
                    return m.apply(se, arguments)
                }
                return !1
            },
            k = function(v, P, W, se) {
                var oe = W.view;
                v.on(P, se, oe), oe._modelBindings.push({
                    model: v,
                    event: P,
                    fn: se,
                    config: W
                })
            },
            R = function(v, P, W, se, oe) {
                var ve = {},
                    d = oe.view;
                oe.onSet && (W = m.call(d, oe.onSet, W, oe)), oe.set ? m.call(d, oe.set, P, W, se, oe) : (ve[P] = W, e.isArray(P) && e.isArray(W) && (ve = e.reduce(P, function(Ee, Oe, Pe) {
                    return Ee[Oe] = e.has(W, Pe) ? W[Pe] : null, Ee
                }, {})), v.set(ve, se))
            },
            D = function(v, P, W) {
                var se = W.view,
                    oe = function(Ee) {
                        return v[W.escape ? "escape" : "get"](Ee)
                    },
                    ve = function(Ee) {
                        return Ee == null ? "" : Ee
                    },
                    d = e.isArray(P) ? e.map(P, oe) : oe(P);
                return W.onGet && (d = m.call(se, W.onGet, d, W)), e.isArray(d) ? e.map(d, ve) : ve(d)
            },
            V = i.getConfiguration = function(v, P) {
                var W = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(oe, ve, d, Ee) {
                        oe[Ee.updateMethod] && oe[Ee.updateMethod](ve)
                    },
                    getVal: function(oe, ve, d) {
                        return oe[d.updateMethod]()
                    }
                }];
                W = W.concat(e.filter(i._handlers, function(oe) {
                    return v.is(oe.selector)
                })), W.push(P);
                var se = e.extend.apply(e, W);
                return e.has(se, "updateView") || (se.updateView = !se.visible), se
            },
            X = function(v, P, W, se) {
                var oe = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ve = P.view;
                e.each(P.attributes || [], function(d) {
                    d = e.clone(d), d.view = ve;
                    var Ee = "",
                        Oe = d.observe || (d.observe = se),
                        Pe = function() {
                            var lt = e.contains(oe, d.name) ? "prop" : "attr",
                                Be = D(W, Oe, d);
                            d.name === "class" ? (v.removeClass(Ee).addClass(Be), Ee = Be) : v[lt](d.name, Be)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        k(W, "change:" + lt, P, Pe)
                    }), Pe()
                })
            },
            Y = function(v, P, W, se) {
                e.each(P.classes || [], function(oe, ve) {
                    e.isString(oe) && (oe = {
                        observe: oe
                    }), oe.view = P.view;
                    var d = oe.observe,
                        Ee = function() {
                            var Oe = D(W, d, oe);
                            v.toggleClass(ve, !!Oe)
                        };
                    e.each(e.flatten([d]), function(Oe) {
                        k(W, "change:" + Oe, P, Ee)
                    }), Ee()
                })
            },
            G = function(v, P, W, se) {
                if (P.visible != null) {
                    var oe = P.view,
                        ve = function() {
                            var d = P.visible,
                                Ee = P.visibleFn,
                                Oe = D(W, se, P),
                                Pe = !!Oe;
                            (e.isFunction(d) || e.isString(d)) && (Pe = !!m.call(oe, d, Oe, P)), Ee ? m.call(oe, Ee, v, Pe, P) : v.toggle(Pe)
                        };
                    e.each(e.flatten([se]), function(d) {
                        k(W, "change:" + d, P, ve)
                    }), ve()
                }
            },
            ne = function(v, P, W, se, oe) {
                var ve = P.view;
                !_(P.updateView, W, P) || (m.call(ve, P.update, v, W, se, P), oe || m.call(ve, P.afterUpdate, v, W, P))
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
            update: function(v, P, W, se) {
                if (v.length > 1) P || (P = []), v.each(function(ve, d) {
                    var Ee = n.$(d),
                        Oe = e.contains(P, Ee.val());
                    Ee.prop("checked", Oe)
                });
                else {
                    var oe = e.isBoolean(P) ? P : P === v.val();
                    v.prop("checked", oe)
                }
            },
            getVal: function(v) {
                var P;
                if (v.length > 1) P = e.reduce(v, function(se, oe) {
                    var ve = n.$(oe);
                    return ve.prop("checked") && se.push(ve.val()), se
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
            update: function(v, P, W, se) {
                var oe, ve = se.selectOptions,
                    d = ve && ve.collection || void 0,
                    Ee = v.prop("multiple");
                if (!ve) {
                    ve = {};
                    var Oe = function(ue) {
                        return ue.map(function(Se, Te) {
                            var $e = n.$(Te).data("stickit-bind-val");
                            return {
                                value: $e !== void 0 ? $e : Te.value,
                                label: Te.text
                            }
                        }).get()
                    };
                    v.find("optgroup").length ? (d = {
                        opt_labels: []
                    }, v.find("> option").length && (d.opt_labels.push(void 0), e.each(v.find("> option"), function(ue) {
                        d[void 0] = Oe(n.$(ue))
                    })), e.each(v.find("optgroup"), function(ue) {
                        var Se = n.$(ue).attr("label");
                        d.opt_labels.push(Se), d[Se] = Oe(n.$(ue).find("option"))
                    })) : d = Oe(v.find("option"))
                }
                ve.valuePath = ve.valuePath || "value", ve.labelPath = ve.labelPath || "label", ve.disabledPath = ve.disabledPath || "disabled";
                var Pe = function(ue, Se, Te) {
                    e.each(ue, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            Bt = function(S, O, M) {
                                Ke.text(S), dt = O, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), M === !0 && Ke.prop("disabled", "disabled")
                            },
                            Gt, E, l;
                        $e === "__default__" ? (Gt = Te.label, E = Te.value, l = Te.disabled) : (Gt = f($e, ve.labelPath), E = f($e, ve.valuePath), l = f($e, ve.disabledPath)), Bt(Gt, E, l);
                        var g = function() {
                            return !Ee && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        g() ? Ke.prop("selected", !0) : Ee && e.isArray(Te) && e.each(Te, function(S) {
                            e.isObject(S) && (S = f(S, ve.valuePath)), (S === dt || e.isObject(S) && e.isEqual(dt, S)) && Ke.prop("selected", !0)
                        }), Se.append(Ke)
                    })
                };
                if (v.find("*").remove(), e.isString(d)) {
                    var lt = window;
                    d.indexOf("this.") === 0 && (lt = this), d = d.replace(/^[a-z]*\.(.+)$/, "$1"), oe = f(lt, d)
                } else e.isFunction(d) ? oe = m.call(this, d, v, se) : oe = d;
                if (oe instanceof n.Collection) {
                    var Be = oe,
                        Q = function() {
                            var ue = D(W, se.observe, se);
                            m.call(this, se.update, v, ue, W, se)
                        },
                        je = function() {
                            Be.off("add remove reset sort", Q)
                        },
                        U = function() {
                            je(), Be.off("stickit:selectRefresh"), W.off("stickit:selectRefresh")
                        };
                    Be.trigger("stickit:selectRefresh"), Be.once("stickit:selectRefresh", je, this), Be.on("add remove reset sort", Q, this), W.trigger("stickit:selectRefresh"), W.once("stickit:selectRefresh", function() {
                        W.off("stickit:unstuck", U)
                    }), W.once("stickit:unstuck", U, this), oe = oe.toJSON()
                }
                if (ve.defaultOption) {
                    var ae = e.isFunction(ve.defaultOption) ? ve.defaultOption.call(this, v, se) : ve.defaultOption;
                    Pe(["__default__"], v, ae)
                }
                if (e.isArray(oe)) Pe(oe, v, P);
                else if (oe.opt_labels) e.each(oe.opt_labels, function(ue) {
                    var Se = n.$("<optgroup/>").attr("label", ue);
                    Pe(oe[ue], Se, P), v.append(Se)
                });
                else {
                    var Ae = [],
                        we;
                    for (var ye in oe) we = {}, we[ve.valuePath] = ye, we[ve.labelPath] = oe[ye], Ae.push(we);
                    Ae = e.sortBy(Ae, ve.comparator || ve.labelPath), Pe(Ae, v, P)
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
})(lC);
const cC = `<button type="button" class='button choice-button btn btn-lg'></button>
<button data-action='censor' class='button censor-button btn btn-lg'></button>`,
    Yu = Et.View.extend({
        template: at.template(cC),
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
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || _e("<div />").text(t).html()
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
            const e = _e(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ti, Bs, ss = typeof Map == "function" ? new Map : (Ti = [], Bs = [], {
        has: function(t) {
            return Ti.indexOf(t) > -1
        },
        get: function(t) {
            return Bs[Ti.indexOf(t)]
        },
        set: function(t, e) {
            Ti.indexOf(t) === -1 && (Ti.push(t), Bs.push(e))
        },
        delete: function(t) {
            var e = Ti.indexOf(t);
            e > -1 && (Ti.splice(e, 1), Bs.splice(e, 1))
        }
    }),
    Ku = function(t) {
        return new Event(t, {
            bubbles: !0
        })
    };
try {
    new Event("test")
} catch {
    Ku = function(e) {
        var n = document.createEvent("Event");
        return n.initEvent(e, !0, !1), n
    }
}

function uC(t) {
    var e = ss.get(t);
    e && e.destroy()
}

function hC(t) {
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
                    m = null,
                    _ = null,
                    k = function() {
                        i.clientWidth !== m && X()
                    },
                    R = function(Y) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", X, !1), i.removeEventListener("keyup", X, !1), i.removeEventListener("autosize:destroy", R, !1), i.removeEventListener("autosize:update", X, !1), Object.keys(Y).forEach(function(G) {
                            i.style[G] = Y[G]
                        }), ss.delete(i)
                    }.bind(i, {
                        height: i.style.height,
                        resize: i.style.resize,
                        overflowY: i.style.overflowY,
                        overflowX: i.style.overflowX,
                        wordWrap: i.style.wordWrap
                    });
                i.addEventListener("autosize:destroy", R, !1), "onpropertychange" in i && "oninput" in i && i.addEventListener("keyup", X, !1), window.addEventListener("resize", k, !1), i.addEventListener("input", X, !1), i.addEventListener("autosize:update", X, !1), i.style.overflowX = "hidden", i.style.wordWrap = "break-word", ss.set(i, {
                    destroy: R,
                    update: X
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), f = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(f) && (f = 0), X()
            }

            function D(Y) {
                var G = i.style.width;
                i.style.width = "0px", i.style.width = G, i.style.overflowY = Y
            }

            function V() {
                if (i.scrollHeight !== 0) {
                    var Y = function(ne) {
                            for (var v = []; ne && ne.parentNode && ne.parentNode instanceof Element;) ne.parentNode.scrollTop && v.push({
                                node: ne.parentNode,
                                scrollTop: ne.parentNode.scrollTop
                            }), ne = ne.parentNode;
                            return v
                        }(i),
                        G = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + f + "px", m = i.clientWidth, Y.forEach(function(ne) {
                        ne.node.scrollTop = ne.scrollTop
                    }), G && (document.documentElement.scrollTop = G)
                }
            }

            function X() {
                V();
                var Y = Math.round(parseFloat(i.style.height)),
                    G = window.getComputedStyle(i, null),
                    ne = G.boxSizing === "content-box" ? Math.round(parseFloat(G.height)) : i.offsetHeight;
                if (ne < Y ? G.overflowY === "hidden" && (D("scroll"), V(), ne = G.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : G.overflowY !== "hidden" && (D("hidden"), V(), ne = G.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), _ !== ne) {
                    _ = ne;
                    var v = Ku("autosize:resized");
                    try {
                        i.dispatchEvent(v)
                    } catch {}
                }
            }
        }(n)
    }), t
}).destroy = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], uC), t
}, Jr.update = function(t) {
    return t && Array.prototype.forEach.call(t.length ? t : [t], hC), t
});
var sc = Jr;
const dC = `<form>\r
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
    no = Et.View.extend({
        tagName: "div",
        className: "input",
        model: new ot.Model({}),
        template: at.template(dC),
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
                    return t ? typeof t == "object" ? t.html ? t.html : _e("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || sc(_e("textarea"))
        },
        onSubmitClick() {
            return _e("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (_e("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            _e(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = _e(this.$el).find("textarea");
            _e(t).val(""), this.getOption("preventAutosize") || sc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = _e(this.$el).find("textarea");
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
    fC = '<div class="text"></div>',
    $i = Et.View.extend({
        tagName: "div",
        template: at.template(fC),
        model: new ot.Model({
            text: "",
            className: ""
        }),
        bindings: {
            ".text": {
                observe: ["text", "html"],
                updateMethod: "html",
                onGet([t, e]) {
                    return e !== void 0 ? e : _e("<div />").text(t).html()
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
            return t.get("type") === "input" ? no : t.get("type") === "text" ? $i : Yu
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
let oc = {};

function Ju(t, ...e) {
    !oc[t] || oc[t].map(n => n(...e))
}
let Qr, Gs;

function Mi() {
    return Qr
}

function yo() {
    return Gs
}

function pC(t) {
    if (Qr = document.getElementById(t) || t || document.querySelector("canvas"), !Qr) throw Error("You must provide a canvas element for the game");
    return Gs = Qr.getContext("2d"), Gs.imageSmoothingEnabled = !1, Ju("init"), {
        canvas: Qr,
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
            height: m,
            margin: _ = 0
        } = e.frame;
        this.width = f, this.height = m, this.margin = _, this._f = 0, this._a = 0
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
            _ = this.frames[this._f] % this.spriteSheet._f | 0;
        f.drawImage(this.spriteSheet.image, _ * this.width + (_ * 2 + 1) * this.margin, m * this.height + (m * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function wo(t) {
    return new sl(t)
}
wo.prototype = sl.prototype;
wo.class = sl;
const gC = () => {};

function mC() {
    let t = Mi();
    yo().clearRect(0, 0, t.width, t.height)
}

function vC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        f = 1e3 / t,
        m = 1 / t,
        _ = e ? mC : gC,
        k, R, D, V, X;
    const Y = window.performance || Date;

    function G() {
        if (R = requestAnimationFrame(G), D = Y.now(), V = D - k, k = D, !(V > 1e3)) {
            for (Ju("tick"), a += V; a >= f;) X.update(m), a -= f;
            _(), X.render()
        }
    }
    return X = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = Y.now(), this.isStopped = !1, requestAnimationFrame(G)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(R)
        },
        _frame: G,
        set _last(ne) {
            k = ne
        }
    }, X
}
class yC {
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
yC.prototype;

function ac(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        f = t.y < a && t.y + t.height >= e.y,
        m = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (f && n.push(0), m && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (f && n.push(1), m && n.push(3)), n
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
            for (i = ac(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(f => n.add(f));
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
        for (n = ac(e, this.bounds), i = 0; i < n.length; i++) this._s[n[i]].add(e)
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
    let i = new ll(t, e);
    return n._c && (i.clamp(n._a, n._b, n._d, n._e), i.x = t, i.y = e), i
}
pr.prototype = ll.prototype;
pr.class = ll;
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
            ddx: m,
            ddy: _,
            width: k,
            height: R,
            image: D
        } = e;
        this.position = pr(n, i), this.velocity = pr(a, f), this.acceleration = pr(m, _), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
            x: 0,
            y: 0
        }, this.context = yo();
        for (let V in e) this[V] = e[V];
        D && (this.width = k !== void 0 ? k : D.width, this.height = R !== void 0 ? R : D.height), this.sx = 0, this.sy = 0
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

function wC(t) {
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
class bC {
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
                n = n.concat(wC(_))
            }), this.animations[i] = wo({
                spriteSheet: this,
                frames: n,
                frameRate: f,
                loop: m
            })
        }
    }
}
bC.prototype;
var Qu = {
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
            R = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            D = c => typeof c == "function" ? c() : c,
            V = c => c && typeof c.toPromise == "function",
            X = c => V(c) ? c.toPromise() : Promise.resolve(c),
            Y = c => c && Promise.resolve(c) === c,
            G = c => c[Math.floor(Math.random() * c.length)],
            ne = {
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
            se = c => Object.prototype.hasOwnProperty.call(ne, c),
            oe = c => v.indexOf(c) !== -1,
            ve = c => P[c],
            d = c => {
                se(c) || f('Unknown parameter "'.concat(c, '"'))
            },
            Ee = c => {
                W.includes(c) && f('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ve(c) && R(c, ve(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) d(h), c.toast && Ee(h), Oe(h)
            },
            lt = "swal2-",
            Be = c => {
                const h = {};
                for (const b in c) h[c[b]] = lt + c[b];
                return h
            },
            Q = Be(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]),
            je = Be(["success", "warning", "info", "question", "error"]),
            U = () => document.body.querySelector(".".concat(Q.container)),
            ae = c => {
                const h = U();
                return h ? h.querySelector(c) : null
            },
            Ae = c => ae(".".concat(c)),
            we = () => Ae(Q.popup),
            ye = () => Ae(Q.icon),
            ue = () => Ae(Q.title),
            Se = () => Ae(Q["html-container"]),
            Te = () => Ae(Q.image),
            $e = () => Ae(Q["progress-steps"]),
            Ke = () => Ae(Q["validation-message"]),
            dt = () => ae(".".concat(Q.actions, " .").concat(Q.confirm)),
            Bt = () => ae(".".concat(Q.actions, " .").concat(Q.deny)),
            Gt = () => Ae(Q["input-label"]),
            E = () => ae(".".concat(Q.loader)),
            l = () => ae(".".concat(Q.actions, " .").concat(Q.cancel)),
            g = () => Ae(Q.actions),
            S = () => Ae(Q.footer),
            O = () => Ae(Q["timer-progress-bar"]),
            M = () => Ae(Q.close),
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
            ie = () => {
                const c = Array.from(we().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((b, $) => {
                        const ge = parseInt(b.getAttribute("tabindex")),
                            He = parseInt($.getAttribute("tabindex"));
                        return ge > He ? 1 : ge < He ? -1 : 0
                    }),
                    h = Array.from(we().querySelectorAll(B)).filter(b => b.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(b => pe(b))
            },
            ke = () => Ct(document.body, Q.shown) && !Ct(document.body, Q["toast-shown"]) && !Ct(document.body, Q["no-backdrop"]),
            he = () => we() && Ct(we(), Q.toast),
            De = () => we().hasAttribute("data-loading"),
            Le = {
                previousBodyPadding: null
            },
            nt = (c, h) => {
                if (c.textContent = "", h) {
                    const $ = new DOMParser().parseFromString(h, "text/html");
                    Array.from($.querySelector("head").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    }), Array.from($.querySelector("body").childNodes).forEach(ge => {
                        c.appendChild(ge)
                    })
                }
            },
            Ct = (c, h) => {
                if (!h) return !1;
                const b = h.split(/\s+/);
                for (let $ = 0; $ < b.length; $++)
                    if (!c.classList.contains(b[$])) return !1;
                return !0
            },
            rn = (c, h) => {
                Array.from(c.classList).forEach(b => {
                    !Object.values(Q).includes(b) && !Object.values(je).includes(b) && !Object.values(h.showClass).includes(b) && c.classList.remove(b)
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
                        return c.querySelector(".".concat(Q.popup, " > .").concat(Q[h]));
                    case "checkbox":
                        return c.querySelector(".".concat(Q.popup, " > .").concat(Q.checkbox, " input"));
                    case "radio":
                        return c.querySelector(".".concat(Q.popup, " > .").concat(Q.radio, " input:checked")) || c.querySelector(".".concat(Q.popup, " > .").concat(Q.radio, " input:first-child"));
                    case "range":
                        return c.querySelector(".".concat(Q.popup, " > .").concat(Q.range, " input"));
                    default:
                        return c.querySelector(".".concat(Q.popup, " > .").concat(Q.input))
                }
            },
            bt = c => {
                if (c.focus(), c.type !== "file") {
                    const h = c.value;
                    c.value = "", c.value = h
                }
            },
            Kt = (c, h, b) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach($ => {
                    Array.isArray(c) ? c.forEach(ge => {
                        b ? ge.classList.add($) : ge.classList.remove($)
                    }) : b ? c.classList.add($) : c.classList.remove($)
                }))
            },
            Je = (c, h) => {
                Kt(c, h, !0)
            },
            Mt = (c, h) => {
                Kt(c, h, !1)
            },
            F = (c, h) => {
                const b = Array.from(c.children);
                for (let $ = 0; $ < b.length; $++) {
                    const ge = b[$];
                    if (ge instanceof HTMLElement && Ct(ge, h)) return ge
                }
            },
            N = (c, h, b) => {
                b === "".concat(parseInt(b)) && (b = parseInt(b)), b || parseInt(b) === 0 ? c.style[h] = typeof b == "number" ? "".concat(b, "px") : b : c.style.removeProperty(h)
            },
            K = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            L = c => {
                c.style.display = "none"
            },
            q = (c, h, b, $) => {
                const ge = c.querySelector(h);
                ge && (ge.style[b] = $)
            },
            fe = function(c, h) {
                let b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? K(c, b) : L(c)
            },
            pe = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !pe(dt()) && !pe(Bt()) && !pe(l()),
            Ve = c => c.scrollHeight > c.clientHeight,
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
            Ye = () => {
                const c = O(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const b = parseInt(window.getComputedStyle(c).width),
                    $ = h / b * 100;
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
                const b = window.scrollX,
                    $ = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Dn(), h()
                }, Pn), window.scrollTo(b, $)
            }),
            kr = `
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
                const c = U();
                return c ? (c.remove(), Mt([document.documentElement, document.body], [Q["no-backdrop"], Q["toast-shown"], Q["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            Tr = () => {
                const c = we(),
                    h = F(c, Q.input),
                    b = F(c, Q.file),
                    $ = c.querySelector(".".concat(Q.range, " input")),
                    ge = c.querySelector(".".concat(Q.range, " output")),
                    He = F(c, Q.select),
                    Ut = c.querySelector(".".concat(Q.checkbox, " input")),
                    Vn = F(c, Q.textarea);
                h.oninput = sn, b.onchange = sn, He.onchange = sn, Ut.onchange = sn, Vn.oninput = sn, $.oninput = () => {
                    sn(), ge.value = $.value
                }, $.onchange = () => {
                    sn(), ge.value = $.value
                }
            },
            Ar = c => typeof c == "string" ? document.querySelector(c) : c,
            mi = c => {
                const h = we();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            Fi = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(U(), Q.rtl)
            },
            vi = c => {
                const h = kn();
                if (In()) {
                    m("SweetAlert2 requires document to initialize");
                    return
                }
                const b = document.createElement("div");
                b.className = Q.container, h && Je(b, Q["no-transition"]), nt(b, kr);
                const $ = Ar(c.target);
                $.appendChild(b), mi(c), Fi($), Tr()
            },
            yi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? ji(c, h) : c && nt(h, c)
            },
            ji = (c, h) => {
                c.jquery ? zi(h, c) : nt(h, c.toString())
            },
            zi = (c, h) => {
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
            Hi = () => {
                const c = document.createElement("div");
                c.className = Q["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            wi = (c, h) => {
                const b = g(),
                    $ = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? L(b) : K(b), ct(b, h, "actions"), Hn(b, $, h), nt($, h.loaderHtml), ct($, h, "loader")
            };

        function Hn(c, h, b) {
            const $ = dt(),
                ge = Bt(),
                He = l();
            bi($, "confirm", b), bi(ge, "deny", b), bi(He, "cancel", b), Ui($, ge, He, b), b.reverseButtons && (b.toast ? (c.insertBefore(He, $), c.insertBefore(ge, $)) : (c.insertBefore(He, h), c.insertBefore(ge, h), c.insertBefore($, h)))
        }

        function Ui(c, h, b, $) {
            if (!$.buttonsStyling) return Mt([c, h, b], Q.styled);
            Je([c, h, b], Q.styled), $.confirmButtonColor && (c.style.backgroundColor = $.confirmButtonColor, Je(c, Q["default-outline"])), $.denyButtonColor && (h.style.backgroundColor = $.denyButtonColor, Je(h, Q["default-outline"])), $.cancelButtonColor && (b.style.backgroundColor = $.cancelButtonColor, Je(b, Q["default-outline"]))
        }

        function bi(c, h, b) {
            fe(c, b["show".concat(a(h), "Button")], "inline-block"), nt(c, b["".concat(h, "ButtonText")]), c.setAttribute("aria-label", b["".concat(h, "ButtonAriaLabel")]), c.className = Q[h], ct(c, b, "".concat(h, "Button")), Je(c, b["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const b = U();
            !b || (y(b, h.backdrop), o(b, h.position), C(b, h.grow), ct(b, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], Q["no-backdrop"])
        }

        function o(c, h) {
            h in Q ? Je(c, Q[h]) : (f('The "position" parameter is not valid, defaulting to "center"'), Je(c, Q.center))
        }

        function C(c, h) {
            if (h && typeof h == "string") {
                const b = "grow-".concat(h);
                b in Q && Je(c, Q[b])
            }
        }
        var A = {
            awaitingPromise: new WeakMap,
            promise: new WeakMap,
            innerParams: new WeakMap,
            domCache: new WeakMap
        };
        const Z = ["input", "file", "range", "select", "radio", "checkbox", "textarea"],
            Ce = (c, h) => {
                const b = we(),
                    $ = A.innerParams.get(c),
                    ge = !$ || h.input !== $.input;
                Z.forEach(He => {
                    const Ut = F(b, Q[He]);
                    qt(He, h.inputAttributes), Ut.className = Q[He], ge && L(Ut)
                }), h.input && (ge && We(h), Un(h))
            },
            We = c => {
                if (!jt[c.input]) return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Or(c.input),
                    b = jt[c.input](h, c);
                K(h), setTimeout(() => {
                    bt(b)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const b = c.attributes[h].name;
                    ["type", "value", "style"].includes(b) || c.removeAttribute(b)
                }
            },
            qt = (c, h) => {
                const b = yt(we(), c);
                if (!!b) {
                    It(b);
                    for (const $ in h) b.setAttribute($, h[$])
                }
            },
            Un = c => {
                const h = Or(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Gn = (c, h, b) => {
                if (b.inputLabel) {
                    c.id = Q.input;
                    const $ = document.createElement("label"),
                        ge = Q["input-label"];
                    $.setAttribute("for", c.id), $.className = ge, typeof b.customClass == "object" && Je($, b.customClass.inputLabel), $.innerText = b.inputLabel, h.insertAdjacentElement("beforebegin", $)
                }
            },
            Or = c => F(we(), Q[c] || Q.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : Y(h) || f('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            jt = {};
        jt.text = jt.email = jt.password = jt.number = jt.tel = jt.url = (c, h) => (Xt(c, h.inputValue), Gn(c, c, h), Nn(c, h), c.type = h.input, c), jt.file = (c, h) => (Gn(c, c, h), Nn(c, h), c), jt.range = (c, h) => {
            const b = c.querySelector("input"),
                $ = c.querySelector("output");
            return Xt(b, h.inputValue), b.type = h.input, Xt($, h.inputValue), Gn(b, c, h), c
        }, jt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const b = document.createElement("option");
                nt(b, h.inputPlaceholder), b.value = "", b.disabled = !0, b.selected = !0, c.appendChild(b)
            }
            return Gn(c, c, h), c
        }, jt.radio = c => (c.textContent = "", c), jt.checkbox = (c, h) => {
            const b = yt(we(), "checkbox");
            b.value = "1", b.id = Q.checkbox, b.checked = Boolean(h.inputValue);
            const $ = c.querySelector("span");
            return nt($, h.inputPlaceholder), b
        }, jt.textarea = (c, h) => {
            Xt(c, h.inputValue), Nn(c, h), Gn(c, c, h);
            const b = $ => parseInt(window.getComputedStyle($).marginLeft) + parseInt(window.getComputedStyle($).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const $ = parseInt(window.getComputedStyle(we()).width),
                        ge = () => {
                            const He = c.offsetWidth + b(c);
                            He > $ ? we().style.width = "".concat(He, "px") : we().style.width = null
                        };
                    new MutationObserver(ge).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Gi = (c, h) => {
                const b = Se();
                ct(b, h, "htmlContainer"), h.html ? (yi(h.html, b), K(b, "block")) : h.text ? (b.textContent = h.text, K(b, "block")) : L(b), Ce(c, h)
            },
            Co = (c, h) => {
                const b = S();
                fe(b, h.footer), h.footer && yi(h.footer, b), ct(b, h, "footer")
            },
            xo = (c, h) => {
                const b = M();
                nt(b, h.closeButtonHtml), ct(b, h, "closeButton"), fe(b, h.showCloseButton), b.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Rr = (c, h) => {
                const b = A.innerParams.get(c),
                    $ = ye();
                if (b && h.icon === b.icon) {
                    vs($, h), Ir($, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    L($);
                    return
                }
                if (h.icon && Object.keys(je).indexOf(h.icon) === -1) {
                    m('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), L($);
                    return
                }
                K($), vs($, h), Ir($, h), Je($, h.showClass.icon)
            },
            Ir = (c, h) => {
                for (const b in je) h.icon !== b && Mt(c, je[b]);
                Je(c, je[h.icon]), bn(c, h), Wi(), ct(c, h, "icon")
            },
            Wi = () => {
                const c = we(),
                    h = window.getComputedStyle(c).getPropertyValue("background-color"),
                    b = c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
                for (let $ = 0; $ < b.length; $++) b[$].style.backgroundColor = h
            },
            ms = `
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
            vs = (c, h) => {
                let b = c.innerHTML,
                    $;
                h.iconHtml ? $ = Dr(h.iconHtml) : h.icon === "success" ? ($ = ms, b = b.replace(/ style=".*?"/g, "")) : h.icon === "error" ? $ = Eo : $ = Dr({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), b.trim() !== $.trim() && nt(c, $)
            },
            bn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const b of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) q(c, b, "backgroundColor", h.iconColor);
                    q(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Dr = c => '<div class="'.concat(Q["icon-content"], '">').concat(c, "</div>"),
            Ci = (c, h) => {
                const b = Te();
                if (!h.imageUrl) return L(b);
                K(b, ""), b.setAttribute("src", h.imageUrl), b.setAttribute("alt", h.imageAlt), N(b, "width", h.imageWidth), N(b, "height", h.imageHeight), b.className = Q.image, ct(b, h, "image")
            },
            _o = (c, h) => {
                const b = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return L(b);
                K(b), b.textContent = "", h.currentProgressStep >= h.progressSteps.length && f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach(($, ge) => {
                    const He = So($);
                    if (b.appendChild(He), ge === h.currentProgressStep && Je(He, Q["active-progress-step"]), ge !== h.progressSteps.length - 1) {
                        const Ut = Wn(h);
                        b.appendChild(Ut)
                    }
                })
            },
            So = c => {
                const h = document.createElement("li");
                return Je(h, Q["progress-step"]), nt(h, c), h
            },
            Wn = c => {
                const h = document.createElement("li");
                return Je(h, Q["progress-step-line"]), c.progressStepsDistance && N(h, "width", c.progressStepsDistance), h
            },
            qn = (c, h) => {
                const b = ue();
                fe(b, h.title || h.titleText, "block"), h.title && yi(h.title, b), h.titleText && (b.innerText = h.titleText), ct(b, h, "title")
            },
            Lr = (c, h) => {
                const b = U(),
                    $ = we();
                h.toast ? (N(b, "width", h.width), $.style.width = "100%", $.insertBefore(E(), ye())) : N($, "width", h.width), N($, "padding", h.padding), h.color && ($.style.color = h.color), h.background && ($.style.background = h.background), L(Ke()), ko($, h)
            },
            ko = (c, h) => {
                c.className = "".concat(Q.popup, " ").concat(pe(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], Q["toast-shown"]), Je(c, Q.toast)) : Je(c, Q.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, Q["icon-".concat(h.icon)])
            },
            Mr = (c, h) => {
                Lr(c, h), Ze(c, h), _o(c, h), Rr(c, h), Ci(c, h), qn(c, h), xo(c, h), Gi(c, h), wi(c, h), Co(c, h), typeof h.didRender == "function" && h.didRender(we())
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
            Pr = () => {
                Array.from(document.body.children).forEach(h => {
                    h.hasAttribute("data-previous-aria-hidden") ? (h.setAttribute("aria-hidden", h.getAttribute("data-previous-aria-hidden")), h.removeAttribute("data-previous-aria-hidden")) : h.removeAttribute("aria-hidden")
                })
            },
            qi = ["swal-title", "swal-html", "swal-footer"],
            To = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const b = h.content;
                return Do(b), Object.assign(ys(b), Ao(b), Oo(b), Nr(b), Ro(b), Io(b, qi))
            },
            ys = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach($ => {
                    Yn($, ["name", "value"]);
                    const ge = $.getAttribute("name"),
                        He = $.getAttribute("value");
                    typeof ne[ge] == "boolean" && He === "false" && (h[ge] = !1), typeof ne[ge] == "object" && (h[ge] = JSON.parse(He))
                }), h
            },
            Ao = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach($ => {
                    Yn($, ["type", "color", "aria-label"]);
                    const ge = $.getAttribute("type");
                    h["".concat(ge, "ButtonText")] = $.innerHTML, h["show".concat(a(ge), "Button")] = !0, $.hasAttribute("color") && (h["".concat(ge, "ButtonColor")] = $.getAttribute("color")), $.hasAttribute("aria-label") && (h["".concat(ge, "ButtonAriaLabel")] = $.getAttribute("aria-label"))
                }), h
            },
            Oo = c => {
                const h = {},
                    b = c.querySelector("swal-image");
                return b && (Yn(b, ["src", "width", "height", "alt"]), b.hasAttribute("src") && (h.imageUrl = b.getAttribute("src")), b.hasAttribute("width") && (h.imageWidth = b.getAttribute("width")), b.hasAttribute("height") && (h.imageHeight = b.getAttribute("height")), b.hasAttribute("alt") && (h.imageAlt = b.getAttribute("alt"))), h
            },
            Nr = c => {
                const h = {},
                    b = c.querySelector("swal-icon");
                return b && (Yn(b, ["type", "color"]), b.hasAttribute("type") && (h.icon = b.getAttribute("type")), b.hasAttribute("color") && (h.iconColor = b.getAttribute("color")), h.iconHtml = b.innerHTML), h
            },
            Ro = c => {
                const h = {},
                    b = c.querySelector("swal-input");
                b && (Yn(b, ["type", "label", "placeholder", "value"]), h.input = b.getAttribute("type") || "text", b.hasAttribute("label") && (h.inputLabel = b.getAttribute("label")), b.hasAttribute("placeholder") && (h.inputPlaceholder = b.getAttribute("placeholder")), b.hasAttribute("value") && (h.inputValue = b.getAttribute("value")));
                const $ = Array.from(c.querySelectorAll("swal-input-option"));
                return $.length && (h.inputOptions = {}, $.forEach(ge => {
                    Yn(ge, ["value"]);
                    const He = ge.getAttribute("value"),
                        Ut = ge.innerHTML;
                    h.inputOptions[He] = Ut
                })), h
            },
            Io = (c, h) => {
                const b = {};
                for (const $ in h) {
                    const ge = h[$],
                        He = c.querySelector(ge);
                    He && (Yn(He, []), b[ge.replace(/^swal-/, "")] = He.innerHTML.trim())
                }
                return b
            },
            Do = c => {
                const h = qi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(b => {
                    const $ = b.tagName.toLowerCase();
                    h.indexOf($) === -1 && f("Unrecognized element <".concat($, ">"))
                })
            },
            Yn = (c, h) => {
                Array.from(c.attributes).forEach(b => {
                    h.indexOf(b.name) === -1 && f(['Unrecognized attribute "'.concat(b.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var ws = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Lo(c) {
            c.inputValidator || Object.keys(ws).forEach(h => {
                c.input === h && (c.inputValidator = ws[h])
            })
        }

        function Mo(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (f('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function bs(c) {
            Lo(c), c.showLoaderOnConfirm && !c.preConfirm && f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Mo(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), vi(c)
        }
        class Vr {
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
        const Cs = () => {
                Le.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (Le.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(Le.previousBodyPadding + Hi(), "px"))
            },
            Br = () => {
                Le.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(Le.previousBodyPadding, "px"), Le.previousBodyPadding = null)
            },
            xs = () => {
                if ((/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && !Ct(document.body, Q.iosfix)) {
                    const h = document.body.scrollTop;
                    document.body.style.top = "".concat(h * -1, "px"), Je(document.body, Q.iosfix), $r(), Es()
                }
            },
            Es = () => {
                const c = navigator.userAgent,
                    h = !!c.match(/iPad/i) || !!c.match(/iPhone/i),
                    b = !!c.match(/WebKit/i);
                h && b && !c.match(/CriOS/i) && we().scrollHeight > window.innerHeight - 44 && (U().style.paddingBottom = "".concat(44, "px"))
            },
            $r = () => {
                const c = U();
                let h;
                c.ontouchstart = b => {
                    h = Po(b)
                }, c.ontouchmove = b => {
                    h && (b.preventDefault(), b.stopPropagation())
                }
            },
            Po = c => {
                const h = c.target,
                    b = U();
                return No(c) || Vo(c) ? !1 : h === b || !Ve(b) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Ve(Se()) && Se().contains(h))
            },
            No = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            Vo = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (Ct(document.body, Q.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Mt(document.body, Q.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            Fr = 10,
            jr = c => {
                const h = U(),
                    b = we();
                typeof c.willOpen == "function" && c.willOpen(b);
                const ge = window.getComputedStyle(document.body).overflowY;
                r(h, b, c), setTimeout(() => {
                    Bo(h, b)
                }, Fr), ke() && ($o(h, c.scrollbarPadding, ge), xi()), !he() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(b)), Mt(h, Q["no-transition"])
            },
            _s = c => {
                const h = we();
                if (c.target !== h) return;
                const b = U();
                h.removeEventListener(mn, _s), b.style.overflowY = "auto"
            },
            Bo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, _s)) : c.style.overflowY = "auto"
            },
            $o = (c, h, b) => {
                xs(), h && b !== "hidden" && Cs(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, b) => {
                Je(c, b.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), K(h, "grid"), setTimeout(() => {
                    Je(h, b.showClass.popup), h.style.removeProperty("opacity")
                }, Fr), Je([document.documentElement, document.body], Q.shown), b.heightAuto && b.backdrop && !b.toast && Je([document.documentElement, document.body], Q["height-auto"])
            },
            s = c => {
                let h = we();
                h || new Ot, h = we();
                const b = E();
                he() ? L(ye()) : u(h, c), K(b), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const b = g(),
                    $ = E();
                !h && pe(dt()) && (h = dt()), K(b), h && (L(h), $.setAttribute("data-button-to-replace", h.className)), $.parentNode.insertBefore($, h), Je([c, b], Q.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? H(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && (V(h.inputValue) || Y(h.inputValue)) && (s(dt()), ee(c, h))
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
                const b = we(),
                    $ = ge => le[h.input](b, be(ge), h);
                V(h.inputOptions) || Y(h.inputOptions) ? (s(dt()), X(h.inputOptions).then(ge => {
                    c.hideLoading(), $(ge)
                })) : typeof h.inputOptions == "object" ? $(h.inputOptions) : m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            ee = (c, h) => {
                const b = c.getInput();
                L(b), X(h.inputValue).then($ => {
                    b.value = h.input === "number" ? parseFloat($) || 0 : "".concat($), K(b), b.focus(), c.hideLoading()
                }).catch($ => {
                    m("Error in inputValue promise: ".concat($)), b.value = "", K(b), b.focus(), c.hideLoading()
                })
            },
            le = {
                select: (c, h, b) => {
                    const $ = F(c, Q.select),
                        ge = (He, Ut, Vn) => {
                            const pn = document.createElement("option");
                            pn.value = Vn, nt(pn, Ut), pn.selected = re(Vn, b.inputValue), He.appendChild(pn)
                        };
                    h.forEach(He => {
                        const Ut = He[0],
                            Vn = He[1];
                        if (Array.isArray(Vn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ut, pn.disabled = !1, $.appendChild(pn), Vn.forEach(ir => ge(pn, ir[1], ir[0]))
                        } else ge($, Vn, Ut)
                    }), $.focus()
                },
                radio: (c, h, b) => {
                    const $ = F(c, Q.radio);
                    h.forEach(He => {
                        const Ut = He[0],
                            Vn = He[1],
                            pn = document.createElement("input"),
                            ir = document.createElement("label");
                        pn.type = "radio", pn.name = Q.radio, pn.value = Ut, re(Ut, b.inputValue) && (pn.checked = !0);
                        const Jo = document.createElement("span");
                        nt(Jo, Vn), Jo.className = Q.label, ir.appendChild(pn), ir.appendChild(Jo), $.appendChild(ir)
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
            re = (c, h) => h && h.toString() === c.toString();

        function ce() {
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            L(h.loader), he() ? c.icon && K(ye()) : Ge(h), Mt([h.popup, h.actions], Q.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ge = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? K(h[0], "inline-block") : Ne() && L(c.actions)
        };

        function rt(c) {
            const h = A.innerParams.get(c || this),
                b = A.domCache.get(c || this);
            return b ? yt(b.popup, h.input) : null
        }
        var Fe = {
            swalPromiseResolve: new WeakMap,
            swalPromiseReject: new WeakMap
        };
        const zt = () => pe(we()),
            Nt = () => dt() && dt().click(),
            un = () => Bt() && Bt().click(),
            _t = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, b, $) => {
                et(h), b.toast || (h.keydownHandler = ge => Xi(c, ge, $), h.keydownTarget = b.keydownListenerCapture ? window : we(), h.keydownListenerCapture = b.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, b) => {
                const $ = ie();
                if ($.length) return h = h + b, h === $.length ? h = 0 : h === -1 && (h = $.length - 1), $[h].focus();
                we().focus()
            },
            Dt = ["ArrowRight", "ArrowDown"],
            _i = ["ArrowLeft", "ArrowUp"],
            Xi = (c, h, b) => {
                const $ = A.innerParams.get(c);
                !$ || h.isComposing || h.keyCode === 229 || ($.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, $) : h.key === "Tab" ? Kn(h, $) : [...Dt, ..._i].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, $, b))
            },
            hn = (c, h, b) => {
                if (!!D(b.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(b.input)) return;
                    Nt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const b = c.target,
                    $ = ie();
                let ge = -1;
                for (let He = 0; He < $.length; He++)
                    if (b === $[He]) {
                        ge = He;
                        break
                    } c.shiftKey ? ft(h, ge, -1) : ft(h, ge, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    b = Bt(),
                    $ = l();
                if (document.activeElement instanceof HTMLElement && ![h, b, $].includes(document.activeElement)) return;
                const ge = Dt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let He = document.activeElement;
                for (let Ut = 0; Ut < g().children.length; Ut++) {
                    if (He = He[ge], !He) return;
                    if (He instanceof HTMLButtonElement && pe(He)) break
                }
                He instanceof HTMLButtonElement && He.focus()
            },
            an = (c, h, b) => {
                D(h.allowEscapeKey) && (c.preventDefault(), b(Xn.esc))
            };

        function Ln(c, h, b, $) {
            he() ? Ts(c, $) : (gi(b).then(() => Ts(c, $)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), ke() && (Br(), Ei(), Pr()), vn()
        }

        function vn() {
            Mt([document.documentElement, document.body], [Q.shown, Q["height-auto"], Q["no-backdrop"], Q["toast-shown"]])
        }

        function Cn(c) {
            c = Zn(c);
            const h = Fe.swalPromiseResolve.get(this),
                b = Qn(this);
            this.isAwaitingPromise() ? c.isDismissed || (gt(this), h(c)) : b && h(c)
        }

        function Ss() {
            return !!A.awaitingPromise.get(this)
        }
        const Qn = c => {
            const h = we();
            if (!h) return !1;
            const b = A.innerParams.get(c);
            if (!b || Ct(h, b.hideClass.popup)) return !1;
            Mt(h, b.showClass.popup), Je(h, b.hideClass.popup);
            const $ = U();
            return Mt($, b.showClass.backdrop), Je($, b.hideClass.backdrop), ks(c, h, b), !0
        };

        function zr(c) {
            const h = Fe.swalPromiseReject.get(this);
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
            ks = (c, h, b) => {
                const $ = U(),
                    ge = mn && pt(h);
                typeof b.willClose == "function" && b.willClose(h), ge ? Hr(c, h, $, b.returnFocus, b.didClose) : Ln(c, $, b.returnFocus, b.didClose)
            },
            Hr = (c, h, b, $, ge) => {
                it.swalCloseEventFinishedCallback = Ln.bind(null, c, b, $, ge), h.addEventListener(mn, function(He) {
                    He.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            Ts = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Si(c, h, b) {
            const $ = A.domCache.get(c);
            h.forEach(ge => {
                $[ge].disabled = b
            })
        }

        function As(c, h) {
            if (!c) return !1;
            if (c.type === "radio") {
                const $ = c.parentNode.parentNode.querySelectorAll("input");
                for (let ge = 0; ge < $.length; ge++) $[ge].disabled = h
            } else c.disabled = h
        }

        function Os() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !1)
        }

        function Fo() {
            Si(this, ["confirmButton", "denyButton", "cancelButton"], !0)
        }

        function jo() {
            return As(this.getInput(), !1)
        }

        function zo() {
            return As(this.getInput(), !0)
        }

        function Yi(c) {
            const h = A.domCache.get(this),
                b = A.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = Q["validation-message"], b.customClass && b.customClass.validationMessage && Je(h.validationMessage, b.customClass.validationMessage), K(h.validationMessage);
            const $ = this.getInput();
            $ && ($.setAttribute("aria-invalid", !0), $.setAttribute("aria-describedby", Q["validation-message"]), bt($), Je($, Q.inputerror))
        }

        function Ho() {
            const c = A.domCache.get(this);
            c.validationMessage && L(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Mt(h, Q.inputerror))
        }

        function Uo() {
            return A.domCache.get(this).progressSteps
        }

        function Go(c) {
            const h = we(),
                b = A.innerParams.get(this);
            if (!h || Ct(h, b.hideClass.popup)) return f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const $ = ki(c),
                ge = Object.assign({}, b, $);
            Mr(this, ge), A.innerParams.set(this, ge), Object.defineProperties(this, {
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
                oe(b) ? h[b] = c[b] : f("Invalid parameter to update: ".concat(b))
            }), h
        };

        function Wo() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && it.swalCloseEventFinishedCallback && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Ur(this)
        }
        const Ur = c => {
                Tn(c), delete c.params, delete it.keydownHandler, delete it.keydownTarget, delete it.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(A, c), A.awaitingPromise.set(c, !0)) : (xn(Fe, c), xn(A, c))
            },
            xn = (c, h) => {
                for (const b in c) c[b].delete(h)
            };
        var Gr = Object.freeze({
            hideLoading: ce,
            disableLoading: ce,
            getInput: rt,
            close: Cn,
            isAwaitingPromise: Ss,
            rejectPromise: zr,
            handleAwaitingPromise: gt,
            closePopup: Cn,
            closeModal: Cn,
            closeToast: Cn,
            enableButtons: Os,
            disableButtons: Fo,
            enableInput: jo,
            disableInput: zo,
            showValidationMessage: Yi,
            resetValidationMessage: Ho,
            getProgressSteps: Uo,
            update: Go,
            _destroy: Wo
        });
        const Rs = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.input ? St(c, "confirm") : Qi(c, !0)
            },
            Is = c => {
                const h = A.innerParams.get(c);
                c.disableButtons(), h.returnInputValueOnDeny ? St(c, "deny") : dn(c, !1)
            },
            qo = (c, h) => {
                c.disableButtons(), h(Xn.cancel)
            },
            St = (c, h) => {
                const b = A.innerParams.get(c);
                if (!b.input) {
                    m('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const $ = w(c, b);
                b.inputValidator ? Ki(c, $, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, $) : Qi(c, $) : (c.enableButtons(), c.showValidationMessage(b.validationMessage))
            },
            Ki = (c, h, b) => {
                const $ = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => X($.inputValidator(h, $.validationMessage))).then(He => {
                    c.enableButtons(), c.enableInput(), He ? c.showValidationMessage(He) : b === "deny" ? dn(c, h) : Qi(c, h)
                })
            },
            dn = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnDeny && s(Bt()), b.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => X(b.preDeny(h, b.validationMessage))).then(ge => {
                    ge === !1 ? (c.hideLoading(), gt(c)) : c.close({
                        isDenied: !0,
                        value: typeof ge > "u" ? h : ge
                    })
                }).catch(ge => Ji(c || void 0, ge))) : c.close({
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
            Ji = (c, h) => {
                c.rejectPromise(h)
            },
            Qi = (c, h) => {
                const b = A.innerParams.get(c || void 0);
                b.showLoaderOnConfirm && s(), b.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => X(b.preConfirm(h, b.validationMessage))).then(ge => {
                    pe(Ke()) || ge === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof ge > "u" ? h : ge)
                }).catch(ge => Ji(c || void 0, ge))) : yn(c, h)
            },
            Xo = (c, h, b) => {
                A.innerParams.get(c).toast ? Yo(c, h, b) : (Wr(h), Ls(h), Zi(c, h, b))
            },
            Yo = (c, h, b) => {
                h.popup.onclick = () => {
                    const $ = A.innerParams.get(c);
                    $ && (Ds($) || $.timer || $.input) || b(Xn.close)
                }
            },
            Ds = c => c.showConfirmButton || c.showDenyButton || c.showCancelButton || c.showCloseButton;
        let An = !1;
        const Wr = c => {
                c.popup.onmousedown = () => {
                    c.container.onmouseup = function(h) {
                        c.container.onmouseup = void 0, h.target === c.container && (An = !0)
                    }
                }
            },
            Ls = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (An = !0)
                    }
                }
            },
            Zi = (c, h, b) => {
                h.container.onclick = $ => {
                    const ge = A.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    $.target === h.container && D(ge.allowOutsideClick) && b(Xn.backdrop)
                }
            },
            er = c => typeof c == "object" && c.jquery,
            tr = c => c instanceof Element || er(c),
            Ko = c => {
                const h = {};
                return typeof c[0] == "object" && !tr(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((b, $) => {
                    const ge = c[$];
                    typeof ge == "string" || tr(ge) ? h[b] = ge : ge !== void 0 && m("Unexpected type of ".concat(b, '! Expected "string" or "Element", got ').concat(typeof ge))
                }), h
            };

        function nr() {
            const c = this;
            for (var h = arguments.length, b = new Array(h), $ = 0; $ < h; $++) b[$] = arguments[$];
            return new c(...b)
        }

        function qr(c) {
            class h extends this {
                _main($, ge) {
                    return super._main($, Object.assign({}, c, ge))
                }
            }
            return h
        }
        const Xr = () => it.timeout && it.timeout.getTimerLeft(),
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
            J = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return Ft(h, !0), h
                }
            },
            de = () => it.timeout && it.timeout.isRunning();
        let te = !1;
        const me = {};

        function xe() {
            let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
            me[c] = this, te || (document.body.addEventListener("click", Re), te = !0)
        }
        const Re = c => {
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
        var Me = Object.freeze({
            isValidParameter: se,
            isUpdatableParameter: oe,
            isDeprecatedParameter: ve,
            argsToParams: Ko,
            isVisible: zt,
            clickConfirm: Nt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: U,
            getPopup: we,
            getTitle: ue,
            getHtmlContainer: Se,
            getImage: Te,
            getIcon: ye,
            getInputLabel: Gt,
            getCloseButton: M,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: Bt,
            getCancelButton: l,
            getLoader: E,
            getFooter: S,
            getTimerProgressBar: O,
            getFocusableElements: ie,
            getValidationMessage: Ke,
            isLoading: De,
            fire: nr,
            mixin: qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Xr,
            stopTimer: Ms,
            resumeTimer: I,
            toggleTimer: j,
            increaseTimer: J,
            isTimerRunning: de,
            bindClickHandler: xe
        });
        let ze;
        class Ue {
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
                const He = ze._main(ze.params);
                A.promise.set(this, He)
            }
            _main(h) {
                let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, b, h)), it.currentInstance && (it.currentInstance._destroy(), ke() && Pr()), it.currentInstance = ze;
                const $ = ht(h, b);
                bs($), Object.freeze($), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const ge = At(ze);
                return Mr(ze, $), A.innerParams.set(ze, $), Xe(ze, ge, $)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Xe = (c, h, b) => new Promise(($, ge) => {
                const He = Ut => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ut
                    })
                };
                Fe.swalPromiseResolve.set(c, $), Fe.swalPromiseReject.set(c, ge), h.confirmButton.onclick = () => Rs(c), h.denyButton.onclick = () => Is(c), h.cancelButton.onclick = () => qo(c, He), h.closeButton.onclick = () => He(Xn.close), Xo(c, h, He), on(c, it, b, He), p(c, b), jr(b), qe(it, b, He), Ht(h, b), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const b = To(c),
                    $ = Object.assign({}, ne, h, b, c);
                return $.showClass = Object.assign({}, ne.showClass, $.showClass), $.hideClass = Object.assign({}, ne.hideClass, $.hideClass), $
            },
            At = c => {
                const h = {
                    popup: we(),
                    container: U(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: Bt(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: M(),
                    validationMessage: Ke(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            qe = (c, h, b) => {
                const $ = O();
                L($), h.timer && (c.timeout = new Vr(() => {
                    b("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (K($), ct($, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(h.timer)
                })))
            },
            Ht = (c, h) => {
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
            const h = G([{
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
        Object.assign(Ue.prototype, Gr), Object.assign(Ue, Me), Object.keys(Gr).forEach(c => {
            Ue[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), Ue.DismissReason = Xn, Ue.version = "11.4.26";
        const Ot = Ue;
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
})(Qu);
const Rn = Qu.exports;
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
        const n = new URL("main/pp2/auction/assets/8cdd50e7.png", self.location).href,
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
const CC = `<div class="canvasContainer">\r
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
    xC = {
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
    EC = Et.View.extend({
        template: at.template(CC),
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
            pC("cameraCanvas"), t.sprites = [], t.gameLoop = vC({
                fps: 60,
                update(e) {
                    t.sprites.forEach(n => n.update(e)), t.sprites = t.sprites.filter(n => n.isAlive())
                },
                render(e) {
                    t.sprites.forEach(n => n.render(e))
                }
            });
            for (let e = 0; e < t.sprites.length; e++) t.sprites[e].ttl = 0;
            this.cameraSprite = ul(xC), this.cameraSprite.width = this.model.get("width"), this.cameraSprite.height = this.model.get("height"), this.cameraSprite.mask = this.model.get("mask"), t.sprites.push(this.cameraSprite), t.gameLoop.start(), this.facingMode = "user", this.startCamera(), this.onResize()
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
                i = _e(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                f = Math.max(_e(window).innerHeight(), 250),
                m = Math.min(a / t, f / e),
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
    _C = si.extend({
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
    SC = Et.View.extend({
        template: at.template('<div id="cameraRegion" class="cameraRegion"></div>'),
        className: "Camera",
        model: new _C,
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
            this.cameraView = this.cameraView || new EC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    kC = '<a class="change-color button-color btn"></a>',
    TC = Et.View.extend({
        tagName: "div",
        className: "colorSwatch",
        template: at.template(kC),
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
    AC = Et.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: TC,
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
    OC = `<ul class="nav nav-colors">\r
    <li class="pull-left button-pad">\r
        <button id="undoButton" class="undo button">\r
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp2/auction/assets/5f12600b.png"/></svg>\r
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
    RC = Et.View.extend({
        tagName: "div",
        className: "picker",
        template: at.template(OC),
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
            this.colorPaletteComponent = this.colorPaletteComponent || new AC({
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
class Zu {
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
        const m = this.smoothedMouseX - this.lastSmoothedMouse.x,
            _ = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(m * m + _ * _);
        let R;
        k !== 0 ? R = Math.PI / 2 + Math.atan2(_, m) : R = 0;
        const D = this.options.minThickness * e + this.options.thicknessFactor * k,
            V = this.lastThickness + this.options.thicknessSmoothingFactor * (D - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = R);
        const X = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(R),
            Y = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(R),
            G = Math.sin(R),
            ne = Math.cos(R),
            v = this.lastThickness * X,
            P = this.lastThickness * Y,
            W = V * G,
            se = V * ne,
            oe = .33 * k * X,
            ve = -.33 * k * Y,
            d = this.lastSmoothedMouse.x + P + oe,
            Ee = this.lastSmoothedMouse.y + v + ve,
            Oe = this.lastSmoothedMouse.x - P + oe,
            Pe = this.lastSmoothedMouse.y - v + ve;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(d, Ee, this.smoothedMouseX + se, this.smoothedMouseY + W), this.canvasCTX.lineTo(this.smoothedMouseX - se, this.smoothedMouseY - W), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * V;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + se, this.smoothedMouseY + W), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * se, i + this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * se, i - this.options.tipTaperFactor * W), this.tipCanvasCTX.lineTo(this.smoothedMouseX - se, this.smoothedMouseY - W), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = R, this.lastThickness = V, this.lastMouseChangeVector = {
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
const lc = {
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
class IC {
    constructor(e, n = {}) {
        st(this, "canvasSelector");
        st(this, "canvas");
        st(this, "ctx");
        st(this, "options");
        st(this, "history");
        st(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = _e(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(lc, n), this.history = [], this.layerNames.forEach(i => {
            const a = new Zu(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
        const n = Object.assign(lc.sketchOptions, e);
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
const DC = `<canvas id="fullLayer" class="sketchpad fullLayer" width='480' height='600' style=''></canvas>`,
    LC = Et.View.extend({
        className: "Sketchpad canvasContainer",
        template: at.template(DC),
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
            this.$("#fullLayer").addClass(t), this.sketchpad = new IC(`#fullLayer.${t}`), this.model.get("thicknesses") ? this.model.get("thicknesses").length === 1 && this.sketchpad.setThickness(this.model.get("thicknesses")[0]) : this.sketchpad.setThickness(1), this.triggerMethod("sketchpad:ready")
        },
        getCoords(t) {
            let e = t;
            e.preventDefault(), ["touchstart", "touchmove"].indexOf(e.type) !== -1 && (e = e.originalEvent.touches[0]);
            const n = this.sketchpad.canvas,
                i = _e(n)[0].width / _e(n).width(),
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
    MC = `<div class="controller-content">\r
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
    PC = si.extend({
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
    NC = Et.View.extend({
        className: "Draw",
        template: at.template(MC),
        model: new PC,
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
                    return t ? t.html ? t.html : _e("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new $i({}), this.toolbarComponent = this.toolbarComponent || new RC({
                model: new ot.Model({})
            }), this.sketchpadComponent = this.sketchpadComponent || new LC({
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
            const t = _e("#sketchpad"),
                e = _e("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(_e(".controller-content").css("border-top-width"), 10) * 2 + _e(".playerTopBar").innerHeight() + _e("#prompt").innerHeight() + _e("#toolbar").innerHeight() + parseInt(_e(".canvasContainer").css("border-top-width"), 10) * 2 + _e("#buttons").innerHeight() + _e("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(_e(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(_e(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(_e(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                f = e.height,
                m = 2,
                _ = Math.min(t.width() - i, a * m),
                k = Math.max(_e("#controller-container").innerHeight() - n, 250),
                R = Math.min(_ / a, k / f),
                D = a * R,
                V = f * R;
            e.style.width = `${D}px`, e.style.height = `${V}px`, window.scrollTo(0, 0)
        }
    }),
    VC = `<div>
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
    $C = Et.View.extend({
        className: "EnterSingleText scrollable",
        template: at.template(VC),
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
                    return t ? t.html ? t.html : _e("<div />").text(t.text).html() : ""
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
            }), this.inputComponent = this.inputComponent || new no({
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
        const a = new Zu(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
const cc = Et.View.extend({
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
            this.update().catch(this.caughtError), _e(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
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
            Vi.setAsViewed(0)
        },
        showScreen(t, e) {
            const n = _e(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (_e(this.activeScreen).fadeOut("fast", () => {}), _e(this.activeScreen).show(), _e(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
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
            const t = _e("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? _e("#slide-in-banner").outerHeight(!0) : 0,
                n = _e(window).width(),
                i = _e(window).height() - t;
            _e(`.${this.getOption("appTag")}-page`).css("height", i - e), _e(`.${this.getOption("appTag")}-page`).attr("height", i - e), _e(`.${this.getOption("appTag")}-page`).css("top", t), _e(`.${this.getOption("appTag")}-page`).css("width", n), _e(`.${this.getOption("appTag")}-page`).attr("width", n)
        }
    }),
    FC = `<div id="controller" class="state-controller controller-content">
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
    zC = Et.View.extend({
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
    HC = Et.View.extend({
        className: "Lobby scrollable",
        template: at.template(FC),
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
                childView: zC,
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
            }), Vi.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = _e(t.currentTarget).data("action");
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
                            const a = new fi({
                                    el: ".censorOptionsModal",
                                    action: "censor",
                                    collection: new ot.Collection
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
                    })))), a.render(), _e(".lobbyUgcInput").mask("aaa-aaaa", {
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
    UC = `<div id="image" class="logo logo-image"></div>
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
    WC = Et.View.extend({
        className: "Logo",
        template: at.template(UC),
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : _e("<div />").text(t.text).html()
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
    XC = Et.View.extend({
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
    KC = si.extend({
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
    JC = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(YC),
        model: new KC,
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
                    return t ? t.html ? t.html : _e("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : _e("<div />").text(t.text).html() : null
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
function uc(t, e) {
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
        e % 2 ? uc(Object(n), !0).forEach(function(i) {
            QC(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : uc(Object(n)).forEach(function(i) {
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

function QC(t, e, n) {
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

function ii(t) {
    if (typeof window < "u" && window.navigator) return !!navigator.userAgent.match(t)
}
var oi = ii(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    ps = ii(/Edge/i),
    hc = ii(/firefox/i),
    os = ii(/safari/i) && !ii(/chrome/i) && !ii(/android/i),
    eh = ii(/iP(ad|od|hone)/i),
    th = ii(/chrome/i) && ii(/android/i),
    nh = {
        capture: !1,
        passive: !1
    };

function xt(t, e, n) {
    t.addEventListener(e, n, !oi && nh)
}

function wt(t, e, n) {
    t.removeEventListener(e, n, !oi && nh)
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

function nx(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}

function $n(t, e, n, i) {
    if (t) {
        n = n || document;
        do {
            if (e != null && (e[0] === ">" ? t.parentNode === n && io(t, e) : io(t, e)) || i && t === n) return t;
            if (t === n) break
        } while (t = nx(t))
    }
    return null
}
var dc = /\s+/g;

function En(t, e, n) {
    if (t && e)
        if (t.classList) t.classList[n ? "add" : "remove"](e);
        else {
            var i = (" " + t.className + " ").replace(dc, " ").replace(" " + e + " ", " ");
            t.className = (i + (n ? " " + e : "")).replace(dc, " ")
        }
}

function tt(t, e, n) {
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
            var i = tt(t, "transform");
            i && i !== "none" && (n = i + " " + n)
        } while (!e && (t = t.parentNode));
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function ih(t, e, n) {
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

function Yt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var f, m, _, k, R, D, V;
        if (t !== window && t.parentNode && t !== jn() ? (f = t.getBoundingClientRect(), m = f.top, _ = f.left, k = f.bottom, R = f.right, D = f.height, V = f.width) : (m = 0, _ = 0, k = window.innerHeight, R = window.innerWidth, D = window.innerHeight, V = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !oi))
            do
                if (a && a.getBoundingClientRect && (tt(a, "transform") !== "none" || n && tt(a, "position") !== "static")) {
                    var X = a.getBoundingClientRect();
                    m -= X.top + parseInt(tt(a, "border-top-width")), _ -= X.left + parseInt(tt(a, "border-left-width")), k = m + f.height, R = _ + f.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var Y = gr(a || t),
                G = Y && Y.a,
                ne = Y && Y.d;
            Y && (m /= ne, _ /= G, V /= G, D /= ne, k = m + D, R = _ + V)
        }
        return {
            top: m,
            left: _,
            bottom: k,
            right: R,
            width: V,
            height: D
        }
    }
}

function fc(t, e, n) {
    for (var i = di(t, !0), a = Yt(t)[e]; i;) {
        var f = Yt(i)[n],
            m = void 0;
        if (n === "top" || n === "left" ? m = a >= f : m = a <= f, !m) return i;
        if (i === jn()) break;
        i = di(i, !1)
    }
    return !1
}

function wr(t, e, n, i) {
    for (var a = 0, f = 0, m = t.children; f < m.length;) {
        if (m[f].style.display !== "none" && m[f] !== Qe.ghost && (i || m[f] !== Qe.dragged) && $n(m[f], n.draggable, t, !1)) {
            if (a === e) return m[f];
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

function pc(t) {
    var e = 0,
        n = 0,
        i = jn();
    if (t)
        do {
            var a = gr(t),
                f = a.a,
                m = a.d;
            e += t.scrollLeft * f, n += t.scrollTop * m
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

function di(t, e) {
    if (!t || !t.getBoundingClientRect) return jn();
    var n = t,
        i = !1;
    do
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            var a = tt(n);
            if (n.clientWidth < n.scrollWidth && (a.overflowX == "auto" || a.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (a.overflowY == "auto" || a.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) return jn();
                if (i || e) return n;
                i = !0
            }
        } while (n = n.parentNode);
    return jn()
}

function rx(t, e) {
    if (t && e)
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    return t
}

function da(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
var as;

function rh(t, e) {
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

function sx() {
    clearTimeout(as), as = void 0
}

function sh(t, e, n) {
    t.scrollLeft += e, t.scrollTop += n
}

function oh(t) {
    var e = window.Polymer,
        n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
var Sn = "Sortable" + new Date().getTime();

function ox() {
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
                            var m = gr(a, !0);
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
                m = 0;
            t.forEach(function(_) {
                var k = 0,
                    R = _.target,
                    D = R.fromRect,
                    V = Yt(R),
                    X = R.prevFromRect,
                    Y = R.prevToRect,
                    G = _.rect,
                    ne = gr(R, !0);
                ne && (V.top -= ne.f, V.left -= ne.e), R.toRect = V, R.thisAnimationDuration && da(X, V) && !da(D, V) && (G.top - V.top) / (G.left - V.left) === (D.top - V.top) / (D.left - V.left) && (k = lx(G, X, Y, a.options)), da(V, D) || (R.prevFromRect = D, R.prevToRect = V, k || (k = a.options.animation), a.animate(R, G, V, k)), k && (f = !0, m = Math.max(m, k), clearTimeout(R.animationResetTimer), R.animationResetTimer = setTimeout(function() {
                    R.animationTime = 0, R.prevFromRect = null, R.fromRect = null, R.prevToRect = null, R.thisAnimationDuration = null
                }, k), R.thisAnimationDuration = k)
            }), clearTimeout(e), f ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, m) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, f, m) {
            if (m) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var _ = gr(this.el),
                    k = _ && _.a,
                    R = _ && _.d,
                    D = (a.left - f.left) / (k || 1),
                    V = (a.top - f.top) / (R || 1);
                i.animatingX = !!D, i.animatingY = !!V, tt(i, "transform", "translate3d(" + D + "px," + V + "px,0)"), this.forRepaintDummy = ax(i), tt(i, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, m)
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
var sr = [],
    fa = {
        initializeByDefault: !0
    },
    gs = {
        mount: function(e) {
            for (var n in fa) fa.hasOwnProperty(n) && !(n in e) && (e[n] = fa[n]);
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
            sr.forEach(function(m) {
                !n[m.pluginName] || (n[m.pluginName][f] && n[m.pluginName][f](zn({
                    sortable: n
                }, i)), n.options[m.pluginName] && n[m.pluginName][e] && n[m.pluginName][e](zn({
                    sortable: n
                }, i)))
            })
        },
        initializePlugins: function(e, n, i, a) {
            sr.forEach(function(_) {
                var k = _.pluginName;
                if (!(!e.options[k] && !_.initializeByDefault)) {
                    var R = new _(e, n, e.options);
                    R.sortable = e, R.options = e.options, e[k] = R, ri(i, R.defaults)
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
            return sr.forEach(function(a) {
                typeof a.eventProperties == "function" && ri(i, a.eventProperties.call(n[a.pluginName], e))
            }), i
        },
        modifyOption: function(e, n, i) {
            var a;
            return sr.forEach(function(f) {
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
        m = t.toEl,
        _ = t.fromEl,
        k = t.oldIndex,
        R = t.newIndex,
        D = t.oldDraggableIndex,
        V = t.newDraggableIndex,
        X = t.originalEvent,
        Y = t.putSortable,
        G = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var ne, v = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !ps ? ne = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (ne = document.createEvent("Event"), ne.initEvent(i, !0, !0)), ne.to = m || n, ne.from = _ || n, ne.item = a || n, ne.clone = f, ne.oldIndex = k, ne.newIndex = R, ne.oldDraggableIndex = D, ne.newDraggableIndex = V, ne.originalEvent = X, ne.pullMode = Y ? Y.lastPutMode : void 0;
        var W = zn(zn({}, G), gs.getEventProperties(i, e));
        for (var se in W) ne[se] = W[se];
        n && n.dispatchEvent(ne), v[P] && v[P].call(e, ne)
    }
}
var ux = ["evt"],
    wn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            f = ex(i, ux);
        gs.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: $t,
            ghostEl: ut,
            rootEl: Pt,
            nextEl: Di,
            lastDownEl: qs,
            cloneEl: Vt,
            cloneHidden: ui,
            dragStarted: Zr,
            putSortable: en,
            activeSortable: Qe.active,
            originalEvent: a,
            oldIndex: ur,
            oldDraggableIndex: ls,
            newIndex: _n,
            newDraggableIndex: ci,
            hideGhostForTarget: uh,
            unhideGhostForTarget: hh,
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
    cx(zn({
        putSortable: en,
        cloneEl: Vt,
        targetEl: Ie,
        rootEl: Pt,
        oldIndex: ur,
        oldDraggableIndex: ls,
        newIndex: _n,
        newDraggableIndex: ci
    }, t))
}
var Ie, $t, ut, Pt, Di, qs, Vt, ui, ur, _n, ls, ci, Fs, en, cr = !1,
    ro = !1,
    so = [],
    Ai, Mn, pa, ga, gc, mc, Zr, or, cs, us = !1,
    js = !1,
    Xs, ln, ma = [],
    La = !1,
    oo = [],
    bo = typeof document < "u",
    zs = eh,
    vc = ps || oi ? "cssFloat" : "float",
    hx = bo && !th && !eh && "draggable" in document.createElement("div"),
    ah = function() {
        if (!!bo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    lh = function(e, n) {
        var i = tt(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            f = wr(e, 0, n),
            m = wr(e, 1, n),
            _ = f && tt(f),
            k = m && tt(m),
            R = _ && parseInt(_.marginLeft) + parseInt(_.marginRight) + Yt(f).width,
            D = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Yt(m).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (f && _.float && _.float !== "none") {
            var V = _.float === "left" ? "left" : "right";
            return m && (k.clear === "both" || k.clear === V) ? "vertical" : "horizontal"
        }
        return f && (_.display === "block" || _.display === "flex" || _.display === "table" || _.display === "grid" || R >= a && i[vc] === "none" || m && i[vc] === "none" && R + D > a) ? "vertical" : "horizontal"
    },
    dx = function(e, n, i) {
        var a = i ? e.left : e.top,
            f = i ? e.right : e.bottom,
            m = i ? e.width : e.height,
            _ = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            R = i ? n.width : n.height;
        return a === _ || f === k || a + m / 2 === _ + R / 2
    },
    fx = function(e, n) {
        var i;
        return so.some(function(a) {
            var f = a[Sn].options.emptyInsertThreshold;
            if (!(!f || hl(a))) {
                var m = Yt(a),
                    _ = e >= m.left - f && e <= m.right + f,
                    k = n >= m.top - f && n <= m.bottom + f;
                if (_ && k) return i = a
            }
        }), i
    },
    ch = function(e) {
        function n(f, m) {
            return function(_, k, R, D) {
                var V = _.options.group.name && k.options.group.name && _.options.group.name === k.options.group.name;
                if (f == null && (m || V)) return !0;
                if (f == null || f === !1) return !1;
                if (m && f === "clone") return f;
                if (typeof f == "function") return n(f(_, k, R, D), m)(_, k, R, D);
                var X = (m ? _ : k).options.group.name;
                return f === !0 || typeof f == "string" && f === X || f.join && f.indexOf(X) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Ws(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    uh = function() {
        !ah && ut && tt(ut, "display", "none")
    },
    hh = function() {
        !ah && ut && tt(ut, "display", "")
    };
bo && !th && document.addEventListener("click", function(t) {
    if (ro) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ro = !1, !1
}, !0);
var Oi = function(e) {
        if (Ie) {
            e = e.touches ? e.touches[0] : e;
            var n = fx(e.clientX, e.clientY);
            if (n) {
                var i = {};
                for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a]);
                i.target = i.rootEl = n, i.preventDefault = void 0, i.stopPropagation = void 0, n[Sn]._onDragOver(i)
            }
        }
    },
    px = function(e) {
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
            return lh(t, this.options)
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
        supportPointer: Qe.supportPointer !== !1 && "PointerEvent" in window && !os,
        emptyInsertThreshold: 5
    };
    gs.initializePlugins(this, t, n);
    for (var i in n) !(i in e) && (e[i] = n[i]);
    ch(e);
    for (var a in this) a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
    this.nativeDraggable = e.forceFallback ? !1 : hx, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), so.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), ri(this, ox())
}
Qe.prototype = {
    constructor: Qe,
    _isOutsideThisEl: function(e) {
        !this.el.contains(e) && e !== this.el && (or = null)
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
                R = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                D = a.filter;
            if (xx(i), !Ie && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || a.disabled) && !R.isContentEditable && !(!this.nativeDraggable && os && k && k.tagName.toUpperCase() === "SELECT") && (k = $n(k, a.draggable, i, !1), !(k && k.animated) && qs !== k)) {
                if (ur = On(k), ls = On(k, a.draggable), typeof D == "function") {
                    if (D.call(this, e, k, this)) {
                        gn({
                            sortable: n,
                            rootEl: R,
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
                        if (V = $n(R, V.trim(), i, !1), V) return gn({
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
                a.handle && !$n(R, a.handle, i, !1) || this._prepareDragStart(e, _, k)
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
            var R = Yt(i);
            if (Pt = f, Ie = i, $t = Ie.parentNode, Di = Ie.nextSibling, qs = i, Fs = m.group, Qe.dragged = Ie, Ai = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, gc = Ai.clientX - R.left, mc = Ai.clientY - R.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (wn("delayEnded", a, {
                            evt: e
                        }), Qe.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !hc && a.nativeDraggable && (Ie.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, m.chosenClass, !0)
                }, m.ignore.split(",").forEach(function(D) {
                    ih(Ie, D.trim(), va)
                }), xt(_, "dragover", Oi), xt(_, "mousemove", Oi), xt(_, "touchmove", Oi), xt(_, "mouseup", a._onDrop), xt(_, "touchend", a._onDrop), xt(_, "touchcancel", a._onDrop), hc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), wn("delayStart", this, {
                    evt: e
                }), m.delay && (!m.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ps || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(_, "mouseup", a._disableDelayedDrag), xt(_, "touchend", a._disableDelayedDrag), xt(_, "touchcancel", a._disableDelayedDrag), xt(_, "mousemove", a._delayedDragTouchMoveHandler), xt(_, "touchmove", a._delayedDragTouchMoveHandler), m.supportPointer && xt(_, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, m.delay)
            } else k()
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        var n = e.touches ? e.touches[0] : e;
        Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        Ie && va(Ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        var e = this.el.ownerDocument;
        wt(e, "mouseup", this._disableDelayedDrag), wt(e, "touchend", this._disableDelayedDrag), wt(e, "touchcancel", this._disableDelayedDrag), wt(e, "mousemove", this._delayedDragTouchMoveHandler), wt(e, "touchmove", this._delayedDragTouchMoveHandler), wt(e, "pointermove", this._delayedDragTouchMoveHandler)
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
        if (cr = !1, Pt && Ie) {
            wn("dragStarted", this, {
                evt: n
            }), this.nativeDraggable && xt(document, "dragover", px);
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
            this._lastX = Mn.clientX, this._lastY = Mn.clientY, uh();
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
            hh()
        }
    },
    _onTouchMove: function(e) {
        if (Ai) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                f = e.touches ? e.touches[0] : e,
                m = ut && gr(ut, !0),
                _ = ut && m && m.a,
                k = ut && m && m.d,
                R = zs && ln && pc(ln),
                D = (f.clientX - Ai.clientX + a.x) / (_ || 1) + (R ? R[0] - ma[0] : 0) / (_ || 1),
                V = (f.clientY - Ai.clientY + a.y) / (k || 1) + (R ? R[1] - ma[1] : 0) / (k || 1);
            if (!Qe.active && !cr) {
                if (i && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < i) return;
                this._onDragStart(e, !0)
            }
            if (ut) {
                m ? (m.e += D - (pa || 0), m.f += V - (ga || 0)) : m = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: D,
                    f: V
                };
                var X = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
                tt(ut, "webkitTransform", X), tt(ut, "mozTransform", X), tt(ut, "msTransform", X), tt(ut, "transform", X), pa = D, ga = V, Mn = f
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
                ln !== document.body && ln !== document.documentElement ? (ln === document && (ln = jn()), n.top += ln.scrollTop, n.left += ln.scrollLeft) : ln = jn(), ma = pc(ln)
            }
            ut = Ie.cloneNode(!0), En(ut, i.ghostClass, !1), En(ut, i.fallbackClass, !0), En(ut, i.dragClass, !0), tt(ut, "transition", ""), tt(ut, "transform", ""), tt(ut, "box-sizing", "border-box"), tt(ut, "margin", 0), tt(ut, "top", n.top), tt(ut, "left", n.left), tt(ut, "width", n.width), tt(ut, "height", n.height), tt(ut, "opacity", "0.8"), tt(ut, "position", zs ? "absolute" : "fixed"), tt(ut, "zIndex", "100000"), tt(ut, "pointerEvents", "none"), Qe.ghost = ut, e.appendChild(ut), tt(ut, "transform-origin", gc / parseInt(ut.style.width) * 100 + "% " + mc / parseInt(ut.style.height) * 100 + "%")
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
        wn("setupClone", this), Qe.eventCanceled || (Vt = oh(Ie), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), En(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = Ys(function() {
            wn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Pt.insertBefore(Vt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, f.dragClass, !0), n ? (ro = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (wt(document, "mouseup", i._onDrop), wt(document, "touchend", i._onDrop), wt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", f.setData && f.setData.call(i, a, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), cr = !0, i._dragStartId = Ys(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Zr = !0, os && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, f, m, _ = this.options,
            k = _.group,
            R = Qe.active,
            D = Fs === k,
            V = _.sort,
            X = en || R,
            Y, G = this,
            ne = !1;
        if (La) return;

        function v(ye, ue) {
            wn(ye, G, zn({
                evt: e,
                isOwner: D,
                axis: Y ? "vertical" : "horizontal",
                revert: m,
                dragRect: a,
                targetRect: f,
                canSort: V,
                fromSortable: X,
                target: i,
                completed: W,
                onMove: function(Te, $e) {
                    return Hs(Pt, n, Ie, a, Te, Yt(Te), e, $e)
                },
                changed: se
            }, ue))
        }

        function P() {
            v("dragOverAnimationCapture"), G.captureAnimationState(), G !== X && X.captureAnimationState()
        }

        function W(ye) {
            return v("dragOverCompleted", {
                insertion: ye
            }), ye && (D ? R._hideClone() : R._showClone(G), G !== X && (En(Ie, en ? en.options.ghostClass : R.options.ghostClass, !1), En(Ie, _.ghostClass, !0)), en !== G && G !== Qe.active ? en = G : G === Qe.active && en && (en = null), X === G && (G._ignoreWhileAnimating = i), G.animateAll(function() {
                v("dragOverAnimationComplete"), G._ignoreWhileAnimating = null
            }), G !== X && (X.animateAll(), X._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (or = null), !_.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !ye && Oi(e)), !_.dragoverBubble && e.stopPropagation && e.stopPropagation(), ne = !0
        }

        function se() {
            _n = On(Ie), ci = On(Ie, _.draggable), gn({
                sortable: G,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, _.draggable, n, !0), v("dragOver"), Qe.eventCanceled) return ne;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || G._ignoreWhileAnimating === i) return W(!1);
        if (ro = !1, R && !_.disabled && (D ? V || (m = $t !== Pt) : en === this || (this.lastPutMode = Fs.checkPull(this, R, Ie, e)) && k.checkPut(this, R, Ie, e))) {
            if (Y = this._getDirection(e, i) === "vertical", a = Yt(Ie), v("dragOverValid"), Qe.eventCanceled) return ne;
            if (m) return $t = Pt, P(), this._hideClone(), v("revert"), Qe.eventCanceled || (Di ? Pt.insertBefore(Ie, Di) : Pt.appendChild(Ie)), W(!0);
            var oe = hl(n, _.draggable);
            if (!oe || yx(e, Y, this) && !oe.animated) {
                if (oe === Ie) return W(!1);
                if (oe && n === e.target && (i = oe), i && (f = Yt(i)), Hs(Pt, n, Ie, a, i, f, e, !!i) !== !1) return P(), oe && oe.nextSibling ? n.insertBefore(Ie, oe.nextSibling) : n.appendChild(Ie), $t = n, se(), W(!0)
            } else if (oe && vx(e, Y, this)) {
                var ve = wr(n, 0, _, !0);
                if (ve === Ie) return W(!1);
                if (i = ve, f = Yt(i), Hs(Pt, n, Ie, a, i, f, e, !1) !== !1) return P(), n.insertBefore(Ie, ve), $t = n, se(), W(!0)
            } else if (i.parentNode === n) {
                f = Yt(i);
                var d = 0,
                    Ee, Oe = Ie.parentNode !== n,
                    Pe = !dx(Ie.animated && Ie.toRect || a, i.animated && i.toRect || f, Y),
                    lt = Y ? "top" : "left",
                    Be = fc(i, "top", "top") || fc(Ie, "top", "top"),
                    Q = Be ? Be.scrollTop : void 0;
                or !== i && (Ee = f[lt], us = !1, js = !Pe && _.invertSwap || Oe), d = wx(e, i, f, Y, Pe ? 1 : _.swapThreshold, _.invertedSwapThreshold == null ? _.swapThreshold : _.invertedSwapThreshold, js, or === i);
                var je;
                if (d !== 0) {
                    var U = On(Ie);
                    do U -= d, je = $t.children[U]; while (je && (tt(je, "display") === "none" || je === ut))
                }
                if (d === 0 || je === i) return W(!1);
                or = i, cs = d;
                var ae = i.nextElementSibling,
                    Ae = !1;
                Ae = d === 1;
                var we = Hs(Pt, n, Ie, a, i, f, e, Ae);
                if (we !== !1) return (we === 1 || we === -1) && (Ae = we === 1), La = !0, setTimeout(mx, 30), P(), Ae && !ae ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? ae : i), Be && sh(Be, 0, Q - Be.scrollTop), $t = Ie.parentNode, Ee !== void 0 && !js && (Xs = Math.abs(Ee - Yt(i)[lt])), se(), W(!0)
            }
            if (n.contains(Ie)) return W(!1)
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
        cr = !1, js = !1, us = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Ma(this.cloneId), Ma(this._dragStartId), this.nativeDraggable && (wt(document, "drop", this), wt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), os && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Zr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Pt === $t || en && en.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Ie && (this.nativeDraggable && wt(Ie, "dragend", this), va(Ie), Ie.style["will-change"] = "", Zr && !cr && En(Ie, en ? en.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
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
        })), en && en.save()) : _n !== ur && _n >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: $t,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: $t,
            originalEvent: e
        })), Qe.active && ((_n == null || _n === -1) && (_n = ur, ci = ls), gn({
            sortable: this,
            name: "end",
            toEl: $t,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        wn("nulling", this), Pt = Ie = $t = ut = Di = Vt = qs = ui = Ai = Mn = Zr = _n = ci = ur = ls = or = cs = en = Fs = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, oo.forEach(function(e) {
            e.checked = !0
        }), oo.length = pa = ga = 0
    },
    handleEvent: function(e) {
        switch (e.type) {
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                Ie && (this._onDragOver(e), gx(e));
                break;
            case "selectstart":
                e.preventDefault();
                break
        }
    },
    toArray: function() {
        for (var e = [], n, i = this.el.children, a = 0, f = i.length, m = this.options; a < f; a++) n = i[a], $n(n, m.draggable, this.el, !1) && e.push(n.getAttribute(m.dataIdAttr) || Cx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(f, m) {
            var _ = a.children[m];
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
        var a = gs.modifyOption(this, e, n);
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && ch(i)
    },
    destroy: function() {
        wn("destroy", this);
        var e = this.el;
        e[Sn] = null, wt(e, "mousedown", this._onTapStart), wt(e, "touchstart", this._onTapStart), wt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (wt(e, "dragover", this), wt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), so.splice(so.indexOf(this.el), 1), this.el = e = null
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
            Ie.parentNode == Pt && !this.options.group.revertClone ? Pt.insertBefore(Vt, Ie) : Di ? Pt.insertBefore(Vt, Di) : Pt.appendChild(Vt), this.options.group.revertClone && this.animate(Ie, Vt), tt(Vt, "display", ""), ui = !1
        }
    }
};

function gx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function Hs(t, e, n, i, a, f, m, _) {
    var k, R = t[Sn],
        D = R.options.onMove,
        V;
    return window.CustomEvent && !oi && !ps ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = f || Yt(e), k.willInsertAfter = _, k.originalEvent = m, t.dispatchEvent(k), D && (V = D.call(R, k, m)), V
}

function va(t) {
    t.draggable = !1
}

function mx() {
    La = !1
}

function vx(t, e, n) {
    var i = Yt(wr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function yx(t, e, n) {
    var i = Yt(hl(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function wx(t, e, n, i, a, f, m, _) {
    var k = i ? t.clientY : t.clientX,
        R = i ? n.height : n.width,
        D = i ? n.top : n.left,
        V = i ? n.bottom : n.right,
        X = !1;
    if (!m) {
        if (_ && Xs < R * a) {
            if (!us && (cs === 1 ? k > D + R * f / 2 : k < V - R * f / 2) && (us = !0), us) X = !0;
            else if (cs === 1 ? k < D + Xs : k > V - Xs) return -cs
        } else if (k > D + R * (1 - a) / 2 && k < V - R * (1 - a) / 2) return bx(e)
    }
    return X = X || m, X && (k < D + R * f / 2 || k > V - R * f / 2) ? k > D + R / 2 ? 1 : -1 : 0
}

function bx(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function Cx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function xx(t) {
    oo.length = 0;
    for (var e = t.getElementsByTagName("input"), n = e.length; n--;) {
        var i = e[n];
        i.checked && oo.push(i)
    }
}

function Ys(t) {
    return setTimeout(t, 0)
}

function Ma(t) {
    return clearTimeout(t)
}
bo && xt(document, "touchmove", function(t) {
    (Qe.active || cr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: xt,
    off: wt,
    css: tt,
    find: ih,
    is: function(e, n) {
        return !!$n(e, n, e, !1)
    },
    extend: rx,
    throttle: rh,
    closest: $n,
    toggleClass: En,
    clone: oh,
    index: On,
    nextTick: Ys,
    cancelNextTick: Ma,
    detectDirection: lh,
    getChild: wr
};
Qe.get = function(t) {
    return t[Sn]
};
Qe.mount = function() {
    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
    e[0].constructor === Array && (e = e[0]), e.forEach(function(i) {
        if (!i.prototype || !i.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));
        i.utils && (Qe.utils = zn(zn({}, Qe.utils), i.utils)), gs.mount(i)
    })
};
Qe.create = function(t, e) {
    return new Qe(t, e)
};
Qe.version = tx;
var Wt = [],
    es, Pa, Na = !1,
    ya, wa, ao, ts;

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
            this.sortable.nativeDraggable ? xt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? xt(document, "pointermove", this._handleFallbackAutoScroll) : i.touches ? xt(document, "touchmove", this._handleFallbackAutoScroll) : xt(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(n) {
            var i = n.originalEvent;
            !this.options.dragOverBubble && !i.rootEl && this._handleAutoScroll(i)
        },
        drop: function() {
            this.sortable.nativeDraggable ? wt(document, "dragover", this._handleAutoScroll) : (wt(document, "pointermove", this._handleFallbackAutoScroll), wt(document, "touchmove", this._handleFallbackAutoScroll), wt(document, "mousemove", this._handleFallbackAutoScroll)), yc(), Ks(), sx()
        },
        nulling: function() {
            ao = Pa = es = Na = ts = ya = wa = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                f = (n.touches ? n.touches[0] : n).clientX,
                m = (n.touches ? n.touches[0] : n).clientY,
                _ = document.elementFromPoint(f, m);
            if (ao = n, i || this.options.forceAutoScrollFallback || ps || oi || os) {
                ba(n, this.options, _, i);
                var k = di(_, !0);
                Na && (!ts || f !== ya || m !== wa) && (ts && yc(), ts = setInterval(function() {
                    var R = di(document.elementFromPoint(f, m), !0);
                    R !== k && (k = R, Ks()), ba(n, a.options, R, i)
                }, 10), ya = f, wa = m)
            } else {
                if (!this.options.bubbleScroll || di(_, !0) === jn()) {
                    Ks();
                    return
                }
                ba(n, this.options, di(_, !1), !1)
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

function yc() {
    clearInterval(ts)
}
var ba = rh(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                f = (t.touches ? t.touches[0] : t).clientY,
                m = e.scrollSensitivity,
                _ = e.scrollSpeed,
                k = jn(),
                R = !1,
                D;
            Pa !== n && (Pa = n, Ks(), es = e.scroll, D = e.scrollFn, es === !0 && (es = di(n, !0)));
            var V = 0,
                X = es;
            do {
                var Y = X,
                    G = Yt(Y),
                    ne = G.top,
                    v = G.bottom,
                    P = G.left,
                    W = G.right,
                    se = G.width,
                    oe = G.height,
                    ve = void 0,
                    d = void 0,
                    Ee = Y.scrollWidth,
                    Oe = Y.scrollHeight,
                    Pe = tt(Y),
                    lt = Y.scrollLeft,
                    Be = Y.scrollTop;
                Y === k ? (ve = se < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), d = oe < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ve = se < Ee && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), d = oe < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var Q = ve && (Math.abs(W - a) <= m && lt + se < Ee) - (Math.abs(P - a) <= m && !!lt),
                    je = d && (Math.abs(v - f) <= m && Be + oe < Oe) - (Math.abs(ne - f) <= m && !!Be);
                if (!Wt[V])
                    for (var U = 0; U <= V; U++) Wt[U] || (Wt[U] = {});
                (Wt[V].vx != Q || Wt[V].vy != je || Wt[V].el !== Y) && (Wt[V].el = Y, Wt[V].vx = Q, Wt[V].vy = je, clearInterval(Wt[V].pid), (Q != 0 || je != 0) && (R = !0, Wt[V].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(ao);
                    var ae = Wt[this.layer].vy ? Wt[this.layer].vy * _ : 0,
                        Ae = Wt[this.layer].vx ? Wt[this.layer].vx * _ : 0;
                    typeof D == "function" && D.call(Qe.dragged.parentNode[Sn], Ae, ae, t, ao, Wt[this.layer].el) !== "continue" || sh(Wt[this.layer].el, Ae, ae)
                }.bind({
                    layer: V
                }), 24))), V++
            } while (e.bubbleScroll && X !== k && (X = di(X, !1)));
            Na = R
        }
    }, 30),
    dh = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            f = e.activeSortable,
            m = e.dispatchSortableEvent,
            _ = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var R = i || f;
            _();
            var D = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                V = document.elementFromPoint(D.clientX, D.clientY);
            k(), R && !R.el.contains(V) && (m("spill"), this.onSpill({
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
        var a = wr(this.sortable.el, this.startIndex, this.options);
        a ? this.sortable.el.insertBefore(n, a) : this.sortable.el.appendChild(n), this.sortable.animateAll(), i && i.animateAll()
    },
    drop: dh
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
    drop: dh
};
ri(fl, {
    pluginName: "removeOnSpill"
});
Qe.mount(new Ex);
Qe.mount(fl, dl);
const _x = `<div id="controller" class="state-controller controller-content">\r
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
    kx = Et.View.extend({
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
        childView: kx,
        collection: new ot.Collection([]),
        initialize(t) {
            this.listenTo(this.collection, "sync", this.render), this.mergeOptions(t, ["block"])
        }
    }),
    Tx = Et.View.extend({
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
            this.rankedCollectionView = this.rankedCollectionView || new wc({
                collection: new ot.Collection([])
            }), this.unrankedCollectionView = this.unrankedCollectionView || new wc({
                className: "sortable-collection unranked",
                collection: new ot.Collection([])
            }), this.lockInView = this.lockInView || new Yu({
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
    Ax = Et.View.extend({
        className: "Sortable scrollable",
        template: at.template(_x),
        model: new Sx,
        regions: {
            prompt: "#prompt",
            choices: "#choicesRegion"
        },
        initialize() {
            this.promptComponent = this.promptComponent || new $i({
                model: new ot.Model
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
    Rx = si.extend({
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
    Ix = Et.View.extend({
        className: "UGC scrollable",
        template: at.template(Ox),
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
            this.client = t.client, this.promptComponent = this.promptComponent || new $i({
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
            this.stickit(), this.update(), kt.vibrate()
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
            const e = _e(t.currentTarget).data("action");
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
    Dx = `<svg id="range-picker" class="range-picker" viewBox="-40 -40 80 80">
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
        template: at.template(Dx),
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
    Mx = `<div id="status-bar" class="health text">\r
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
    Px = si.extend({
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
    Nx = Et.View.extend({
        model: new Px,
        template: at.template(Mx),
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
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), _e(window).on("mousemove", this.move.bind(this)), _e(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), _e(window).off("mousemove"), _e(window).off("mouseup")
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
            const t = _e(".radial"),
                e = _e("#status-bar").outerHeight() + _e(".playerTopBar").outerHeight() + _e("#control-panel").outerHeight() + 10,
                n = _e(".controller-page").width(),
                i = window.innerHeight - e,
                a = Math.max(150, Math.min(n, i));
            t.css("width", `${a}px`), t.css("height", `${a}px`), window.scrollTo(0, 0)
        }
    }),
    Vx = `<div id="textDescriptions" class="textDescriptions" role="log" aria-atomic="false" aria-relevant="additions" aria-live="polite"></div>
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
    template: at.template(Vx),
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
        this.mergeOptions(t, ["appId", "appTag"]), this.locale = "en", this.client = t.client, this.playerTopBar = this.playerTopBar || new XC, this.onEntityDidChangeWithContext = this.onEntityDidChange.bind(this), this.onTextDescriptionsWithContext = this.onTextDescriptions.bind(this), this.onRoomWasDestroyedWithContext = this.onRoomWasDestroyed.bind(this), this.onDisconnectedWithContext = this.onDisconnected.bind(this), this.onConnectionMessageWithContext = this.onConnectionMessage.bind(this), t.client.on("client:entityDidChange", this.onEntityDidChangeWithContext), t.client.on("client:textDescriptions", this.onTextDescriptionsWithContext), t.client.on("client:roomWasDestroyed", this.onRoomWasDestroyedWithContext), t.client.on("client:disconnected", this.onDisconnectedWithContext), t.client.on("client:connection", this.onConnectionMessageWithContext), this.model = new ot.Model({});
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
                return this.setLayout(NC);
            case "EnterSingleText":
                return this.setLayout($C);
            case "Lobby":
                return this.setLayout(HC);
            case "Logo":
                return this.setLayout(WC);
            case "MakeSingleChoice":
                return this.setLayout(JC);
            case "Shoot":
                return this.setLayout(Nx);
            case "Sortable":
                return this.setLayout(Ax);
            case "Camera":
                return this.setLayout(SC);
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
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Vi.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), _e("#textDescriptions").append(_e("<p />").text(e.text)))
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
        const t = _e(window).width(),
            e = _e(window).height();
        _e(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        Zt.remove("roomCode"), Zt.remove("reconnect"), kt.show("error", {
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
var fh = {
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

        function f(k, R) {
            for (var D = k.length; D--;)
                if (k[D].listener === R) return D;
            return -1
        }

        function m(k) {
            return function() {
                return this[k].apply(this, arguments)
            }
        }
        i.getListeners = function(R) {
            var D = this._getEvents(),
                V, X;
            if (R instanceof RegExp) {
                V = {};
                for (X in D) D.hasOwnProperty(X) && R.test(X) && (V[X] = D[X])
            } else V = D[R] || (D[R] = []);
            return V
        }, i.flattenListeners = function(R) {
            var D = [],
                V;
            for (V = 0; V < R.length; V += 1) D.push(R[V].listener);
            return D
        }, i.getListenersAsObject = function(R) {
            var D = this.getListeners(R),
                V;
            return D instanceof Array && (V = {}, V[R] = D), V || D
        };

        function _(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? _(k.listener) : !1
        }
        i.addListener = function(R, D) {
            if (!_(D)) throw new TypeError("listener must be a function");
            var V = this.getListenersAsObject(R),
                X = typeof D == "object",
                Y;
            for (Y in V) V.hasOwnProperty(Y) && f(V[Y], D) === -1 && V[Y].push(X ? D : {
                listener: D,
                once: !1
            });
            return this
        }, i.on = m("addListener"), i.addOnceListener = function(R, D) {
            return this.addListener(R, {
                listener: D,
                once: !0
            })
        }, i.once = m("addOnceListener"), i.defineEvent = function(R) {
            return this.getListeners(R), this
        }, i.defineEvents = function(R) {
            for (var D = 0; D < R.length; D += 1) this.defineEvent(R[D]);
            return this
        }, i.removeListener = function(R, D) {
            var V = this.getListenersAsObject(R),
                X, Y;
            for (Y in V) V.hasOwnProperty(Y) && (X = f(V[Y], D), X !== -1 && V[Y].splice(X, 1));
            return this
        }, i.off = m("removeListener"), i.addListeners = function(R, D) {
            return this.manipulateListeners(!1, R, D)
        }, i.removeListeners = function(R, D) {
            return this.manipulateListeners(!0, R, D)
        }, i.manipulateListeners = function(R, D, V) {
            var X, Y, G = R ? this.removeListener : this.addListener,
                ne = R ? this.removeListeners : this.addListeners;
            if (typeof D == "object" && !(D instanceof RegExp))
                for (X in D) D.hasOwnProperty(X) && (Y = D[X]) && (typeof Y == "function" ? G.call(this, X, Y) : ne.call(this, X, Y));
            else
                for (X = V.length; X--;) G.call(this, D, V[X]);
            return this
        }, i.removeEvent = function(R) {
            var D = typeof R,
                V = this._getEvents(),
                X;
            if (D === "string") delete V[R];
            else if (R instanceof RegExp)
                for (X in V) V.hasOwnProperty(X) && R.test(X) && delete V[X];
            else delete this._events;
            return this
        }, i.removeAllListeners = m("removeEvent"), i.emitEvent = function(R, D) {
            var V = this.getListenersAsObject(R),
                X, Y, G, ne, v;
            for (ne in V)
                if (V.hasOwnProperty(ne))
                    for (X = V[ne].slice(0), G = 0; G < X.length; G++) Y = X[G], Y.once === !0 && this.removeListener(R, Y.listener), v = Y.listener.apply(this, D || []), v === this._getOnceReturnValue() && this.removeListener(R, Y.listener);
            return this
        }, i.trigger = m("emitEvent"), i.emit = function(R) {
            var D = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(R, D)
        }, i.setOnceReturnValue = function(R) {
            return this._onceReturnValue = R, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, n.noConflict = function() {
            return e.EventEmitter = a, n
        }, t.exports ? t.exports = n : e.EventEmitter = n
    })(typeof window < "u" ? window : vt || {})
})(fh);
const Bx = fh.exports;
class $x extends Bx {
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
            ic(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const m = f;
        i === "room" ? this.emit("client:entityDidChange", i, m) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", m) : i === "bc:room" ? this.emit("client:entityDidChange", "room", m) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", m) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", m) : ic(`[Ecast Client] Unhandled json notification: ${i}`)
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
const Fx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(_e)
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
            var k, R, D, V, X, Y, G, ne;
            if (!m && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return _ = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, _), R = t.mask.definitions, D = [], V = G = m.length, X = null, t.each(m.split(""), function(P, W) {
                W == "?" ? (G--, V = P) : R[W] ? (D.push(new RegExp(R[W])), X === null && (X = D.length - 1), V > P && (Y = D.length - 1)) : D.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (_.completed) {
                        for (var ye = X; Y >= ye; ye++)
                            if (D[ye] && ae[ye] === W(ye)) return;
                        _.completed.call(U)
                    }
                }

                function W(ye) {
                    return _.placeholder.charAt(ye < _.placeholder.length ? ye : 0)
                }

                function se(ye) {
                    for (; ++ye < G && !D[ye];);
                    return ye
                }

                function oe(ye) {
                    for (; --ye >= 0 && !D[ye];);
                    return ye
                }

                function ve(ye, ue) {
                    var Se, Te;
                    if (!(0 > ye)) {
                        for (Se = ye, Te = se(ue); G > Se; Se++)
                            if (D[Se]) {
                                if (!(G > Te && D[Se].test(ae[Te]))) break;
                                ae[Se] = ae[Te], ae[Te] = W(Te), Te = se(Te)
                            } Q(), U.caret(Math.max(X, ye))
                    }
                }

                function d(ye) {
                    var ue, Se, Te, $e;
                    for (ue = ye, Se = W(ye); G > ue; ue++)
                        if (D[ue]) {
                            if (Te = se(ue), $e = ae[ue], ae[ue] = Se, !(G > Te && D[Te].test($e))) break;
                            Se = $e
                        }
                }

                function Ee() {
                    var ye = U.val(),
                        ue = U.caret();
                    if (ne && ne.length && ne.length > ye.length) {
                        for (je(!0); ue.begin > 0 && !D[ue.begin - 1];) ue.begin--;
                        if (ue.begin === 0)
                            for (; ue.begin < X && !D[ue.begin];) ue.begin++;
                        U.caret(ue.begin, ue.begin)
                    } else {
                        for (je(!0); ue.begin < G && !D[ue.begin];) ue.begin++;
                        U.caret(ue.begin, ue.begin)
                    }
                    P()
                }

                function Oe() {
                    je(), U.val() != we && U.change()
                }

                function Pe(ye) {
                    if (!U.prop("readonly")) {
                        var ue, Se, Te, $e = ye.which || ye.keyCode;
                        ne = U.val(), $e === 8 || $e === 46 || i && $e === 127 ? (ue = U.caret(), Se = ue.begin, Te = ue.end, Te - Se === 0 && (Se = $e !== 46 ? oe(Se) : Te = se(Se - 1), Te = $e === 46 ? se(Te) : Te), Be(Se, Te), ve(Se, Te - 1), ye.preventDefault()) : $e === 13 ? Oe.call(this, ye) : $e === 27 && (U.val(we), U.caret(0, je()), ye.preventDefault())
                    }
                }

                function lt(ye) {
                    if (!U.prop("readonly")) {
                        var ue, Se, Te, $e = ye.which || ye.keyCode,
                            Ke = U.caret();
                        if (!(ye.ctrlKey || ye.altKey || ye.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Be(Ke.begin, Ke.end), ve(Ke.begin, Ke.end - 1)), ue = se(Ke.begin - 1), G > ue && (Se = String.fromCharCode($e), D[ue].test(Se))) {
                                if (d(ue), ae[ue] = Se, Q(), Te = se(ue), f) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, U, Te)()
                                    };
                                    setTimeout(dt, 0)
                                } else U.caret(Te);
                                Ke.begin <= Y && P()
                            }
                            ye.preventDefault()
                        }
                    }
                }

                function Be(ye, ue) {
                    var Se;
                    for (Se = ye; ue > Se && G > Se; Se++) D[Se] && (ae[Se] = W(Se))
                }

                function Q() {
                    U.val(ae.join(""))
                }

                function je(ye) {
                    var ue, Se, Te, $e = U.val(),
                        Ke = -1;
                    for (ue = 0, Te = 0; G > ue; ue++)
                        if (D[ue]) {
                            for (ae[ue] = W(ue); Te++ < $e.length;)
                                if (Se = $e.charAt(Te - 1), D[ue].test(Se)) {
                                    ae[ue] = Se, Ke = ue;
                                    break
                                } if (Te > $e.length) {
                                Be(ue + 1, G);
                                break
                            }
                        } else ae[ue] === $e.charAt(Te) && Te++, V > ue && (Ke = ue);
                    return ye ? Q() : V > Ke + 1 ? _.autoclear || ae.join("") === Ae ? (U.val() && U.val(""), Be(0, G)) : Q() : (Q(), U.val(U.val().substring(0, Ke + 1))), V ? ue : X
                }
                var U = t(this),
                    ae = t.map(m.split(""), function(ye, ue) {
                        return ye != "?" ? R[ye] ? W(ue) : ye : void 0
                    }),
                    Ae = ae.join(""),
                    we = U.val();
                U.data(t.mask.dataName, function() {
                    return t.map(ae, function(ye, ue) {
                        return D[ue] && ye != W(ue) ? ye : null
                    }).join("")
                }), U.one("unmask", function() {
                    U.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!U.prop("readonly")) {
                        clearTimeout(e);
                        var ye;
                        we = U.val(), ye = je(), e = setTimeout(function() {
                            U.get(0) === document.activeElement && (Q(), ye == m.replace("?", "").length ? U.caret(0, ye) : U.caret(ye))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    U.prop("readonly") || setTimeout(function() {
                        var ye = je(!0);
                        U.caret(ye), P()
                    }, 0)
                }), a && f && U.off("input.mask").on("input.mask", Ee), je()
            })
        }
    })
});
window.$ = _e;
window.jQuery = _e;
const jx = Et.View.extend({
        className: "app-root",
        template: at.template(Fx),
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
    zx = t => {
        let e;
        window.tv.register({
            connect: n => (e = new Ii.WSClient(n), e.connect()),
            mount: n => {
                const i = new $x(e, n);
                let a = new Et.Application({
                    region: "#app",
                    onStart() {
                        const f = new jx;
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
    Hx = "modulepreload",
    Ux = function(t) {
        return "https://bundles.jackbox.tv/main/pp2-auction/" + t
    },
    bc = {},
    Ri = function(e, n, i) {
        return !n || n.length === 0 ? e() : Promise.all(n.map(a => {
            if (a = Ux(a), a in bc) return;
            bc[a] = !0;
            const f = a.endsWith(".css"),
                m = f ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${m}`)) return;
            const _ = document.createElement("link");
            if (_.rel = f ? "stylesheet" : Hx, f || (_.as = "script", _.crossOrigin = ""), _.href = a, document.head.appendChild(_), f) return new Promise((k, R) => {
                _.addEventListener("load", k), _.addEventListener("error", () => R(new Error(`Unable to preload CSS for ${a}`)))
            })
        })).then(() => e())
    },
    Gx = (t, e) => {
        const n = t[e];
        return n ? typeof n == "function" ? n() : Promise.resolve(n) : new Promise((i, a) => {
            (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)))
        })
    },
    Wx = function(e, n, i, a, f) {
        this.isDrawing = !1, this.isClean = !0, this.isEnabled = !0, this.lines = [], this.canvas = e, this.context = n, this.context.save(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.restore(), this.widthDiff = i, this.heightDiff = Math.max(a, 113), this.strokestyle = f, typeof this.canvas.style.msTouchAction < "u" && (this.canvas.style.msTouchAction = "none");
        const m = this,
            _ = function() {
                let Y = window.innerWidth - m.widthDiff,
                    G = window.innerHeight - m.heightDiff;
                G < 25 && (G = 25, Y = G * (window.innerWidth / window.innerHeight));
                const ne = Y / G,
                    v = m.canvas.width / m.canvas.height;
                v < ne ? (m.canvas.style.height = `${G}px`, m.canvas.style.width = `${G*v}px`) : (m.canvas.style.width = `${Y}px`, m.canvas.style.height = `${Y*(1/v)}px`), window.scrollTo(0, 1)
            };
        window.onresize = _;
        const k = function(Y) {
                if (Y.type === "touchmove") Y.preventDefault();
                else if (Y.type === "touchend") {
                    m.isDrawing && Y.preventDefault(), m[Y.type]();
                    return
                }
                const G = m.canvas.getBoundingClientRect(),
                    ne = {
                        x: Y.targetTouches[0].pageX - G.left,
                        y: Y.targetTouches[0].pageY - G.top
                    };
                ne.x *= m.canvas.width / parseInt(m.canvas.style.width, 10), ne.y *= m.canvas.height / parseInt(m.canvas.style.height, 10), m[Y.type](ne)
            },
            R = function(Y) {
                if (Y.type === "mousemove") Y.preventDefault();
                else if (Y.type === "mouseup") {
                    m[Y.type]();
                    return
                }
                const G = m.canvas.getBoundingClientRect(),
                    ne = {
                        x: Y.clientX - G.left,
                        y: Y.clientY - G.top
                    };
                ne.x *= m.canvas.width / parseInt(m.canvas.style.width, 10), ne.y *= m.canvas.height / parseInt(m.canvas.style.height, 10), m[Y.type](ne)
            };
        this.canvas.addEventListener("touchstart", k, !1), this.canvas.addEventListener("touchmove", k, !1), document.addEventListener("touchend", k, !1), this.canvas.addEventListener("mousedown", R, !1), this.canvas.addEventListener("mousemove", R, !1), document.addEventListener("mouseup", R, !1);
        const D = function(Y, G, ne) {
                Y.strokeStyle = m.strokestyle, Y.lineCap = "round", Y.lineWidth = 6, Y.beginPath(), Y.arc(G, ne, 1, 0, 2 * Math.PI, !0), Y.stroke(), Y.moveTo(G, ne)
            },
            V = function(Y, G, ne) {
                Y.lineTo(G, ne), Y.stroke()
            };
        this.getBase64Image = function() {
            const Y = document.createElement("canvas");
            Y.width = m.canvas.width, Y.height = m.canvas.height;
            const G = Y.getContext("2d");
            m.context.strokeStyle = this.strokestyle, m.context.lineCap = "round", m.context.lineWidth = 6;
            for (let v = 0; v < m.lines.length; v++) {
                const P = m.lines[v];
                for (let W = 0; W < P.points.length; W++) {
                    const se = P.points[W];
                    W === 0 ? D(G, se.x, se.y) : V(G, se.x, se.y)
                }
            }
            let ne = Y.toDataURL("image/png");
            return ne = ne.replace("data:image/png;base64,", ""), ne
        }, this.start = function(Y) {
            !m.isEnabled || (D(m.context, Y.x, Y.y), m.isDrawing = !0, m.isClean = !1, m.lines.push({
                points: [Y]
            }))
        }, this.move = function(Y) {
            m.isDrawing && (V(m.context, Y.x, Y.y), m.lines[m.lines.length - 1].points.push(Y))
        }, this.end = function() {
            m.isDrawing && (m.isDrawing = !1)
        }, this.touchstart = this.start, this.touchmove = this.move, this.touchend = this.end, this.mousedown = this.start, this.mousemove = this.move, this.mouseup = this.end, _()
    },
    qx = `<div id="page-auction" class="page">\r
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Rokkitt">\r
    \r
    <div id="auction-preload" class="auction-preload"></div>\r
\r
    <div id="game" class="game pt-pageholder">    \r
        <div id="state-lobby" class="pt-page-off pushed-down-page auction-page">\r
            <div class="container">\r
                <br /><span id="auction-lobby-text" class="big-text"></span><br />\r
                <form class="pure-form">                    \r
                    <button type="button" id="auction-startgame" class="button-auction button-xlarge pure-button pure-input-1">EVERYBODY'S IN</button>\r
                    <button type="button" id="auction-stopcountdown" class="button-auction button-xlarge pure-button pure-input-1">CANCEL</button>  \r
                </form>\r
            </div>\r
        </div>\r
\r
        <div id="state-logo" class="pt-page-off pushed-down-page auction-page">\r
            <div class="logo-image" style="width:100%;">\r
                <img class="pure-img" style="margin-left:auto; margin-right:auto;"  src='main/pp2/auction/auction/logo.png'>\r
            </div>\r
        </div>\r
        \r
        <div id="state-draw" class="pt-page-off pushed-down-page auction-page">\r
            <span id="title" class="big-text">please draw:</span><br />\r
\r
            <canvas id="auction-sketchpad" class="sketchpad" width='240' height='300' style='background-color:white;'>\r
                Sorry, your browser is not supported.\r
            </canvas>\r
            \r
            <form class="pure-form container">\r
                <button type="submit" id="auction-submitdrawing" class="submit-drawing button-auction button-large pure-button pure-input-1" style="margin-top: 0px;"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;send</button>\r
                <div id="auction-submitdrawing-loading" style="display:none;" class="button-auction-loading"></div>\r
            </form>\r
        </div>\r
        \r
        <div id="state-done-drawing" class="pt-page-off pushed-down-page auction-page">\r
            <br/><span class="big-text">Thanks for the drawings!</span><br/>\r
        </div>\r
        \r
        <div id="state-auction" class="pt-page-off auction-page">\r
            <div id="available-cash"><h1 id="auction-money">$XXXXX</h1></div>\r
            <div id="auction-info"><div class="auction-centered-content" id="auction-centered-info"></div></div>\r
            <div id="auction-skip-content"><button type="button" id="auction-skip-button" class="button-auction button-large pure-button pure-input-1">Skip</button></div>\r
            <div id="auction-bid-buttons"></div>\r
            <div id="auction-screw-content"></div>\r
            <div id="auction-cashgrab-content"></div>\r
            <div id="auction-bank-content"></div>\r
			<div id="auction-message"><div class="auction-centered-content" id="auction-centered-message"></div></div>\r
        </div>\r
        \r
        <div id="state-post-game" class="pt-page-off pushed-down-page auction-page">\r
            <div class="container">\r
                <br /><span id="auction-post-game-text" class="big-text"></span><br />\r
                <form class="pure-form">                    \r
                    <button type="button" id="auction-sameplayers" class="button-auction  button-xlarge pure-button pure-input-1 auction-endbuttons">SAME PLAYERS</button>\r
                    <button type="button" id="auction-newplayers" class="button-auction  button-xlarge pure-button pure-input-1 auction-endbuttons">NEW PLAYERS</button>    \r
                </form>\r
            </div>\r
            \r
        </div>\r
    </div>\r
</div>\r
`;
const Xx = cc.extend({
    template: at.template(qx),
    lacksAudience: !0,
    test: 0,
    auctionMessageIsOn: !1,
    htmlWhenOff: null,
    lastMessage: null,
    events: {
        "click #auction-startgame": "startGame",
        "click #auction-stopcountdown": "stopCountdown",
        "click #auction-sameplayers": "newGameSamePlayers",
        "click #auction-newplayers": "newGameNewPlayers",
        "click #auction-submitdrawing": "submitDrawing",
        "click #auction-skip-button": "submitSkip",
        "click .auction-bid-button": "submitBid",
        "click .auction-screw-button": "submitScrew",
        "click .auction-screw-player-button": "submitScrewPlayer",
        "click .auction-open-bank-button": "submitOpenBank",
        "click .auction-take-loan-button": "submitTakeLoan"
    },
    initialize(t) {
        cc.prototype.initialize.apply(this, [t]), this.currentCanvas = null, this.titleThatImDrawing = null
    },
    async update() {
        if (!this.model.get("room")) {
            this.showScreen("#state-logo");
            return
        }
        const t = this.model.get("room"),
            e = this.model.get("player") ? this.model.get("player") : {},
            n = e ? e.state : "",
            i = t ? t.state : "",
            a = e !== void 0 && e.playerColor !== void 0 ? e.playerColor : "#CCCCCC";
        _e("#available-cash").css("background-color", a), this.currentCanvas = null, this.titleThatImDrawing = null;
        let f;
        if (n === "RoomFull") {
            kt.show(Error("The room is full"), {
                willClose: () => {
                    window.location.reload(!0)
                }
            });
            return
        }
        if (n === "GameLocked") kt.show(Error("Game is in progress. Please wait for a new game to start."), {
            willClose: () => {
                window.location.reload(!0)
            }
        });
        else if (i && i === "Lobby") {
            if (!this.client.isRole("player")) {
                this.showScreen("#state-logo");
                return
            }
            if (this.hideLobbyButtons(), !e.isAllowedToStartGame) {
                _e("#auction-lobby-text").html("sit back and relax!"), this.showScreen("#state-lobby");
                return
            }
            const m = t.lobbyState;
            m === "WaitingForMore" ? _e("#auction-lobby-text").html("waiting for all players to join") : m === "CanStart" ? (_e("#auction-lobby-text").html("press this button when everybody has joined"), _e("#auction-startgame").show()) : m === "Countdown" && (_e("#auction-lobby-text").html("press this button to cancel game start"), _e("#auction-stopcountdown").show()), this.showScreen("#state-lobby")
        } else if (i === "Gameplay_Logo") this.showScreen("#state-logo");
        else if (i === "Gameplay_Draw" && n === "Gameplay_Draw") {
            if (!e.title) {
                this.showScreen("#state-done-drawing");
                return
            }
            this.titleThatImDrawing = e.title, _e("#page-auction #state-draw #title").html(`Please Draw : ${this.titleThatImDrawing.text}`), this.showScreen("#state-draw");
            const m = this.$("#auction-sketchpad")[0],
                _ = m.getContext("2d"),
                k = _e("#state-draw #title").outerHeight(!0) + _e("#auction-submitdrawing").outerHeight(!0) + 10;
            this.currentCanvas = new Wx(m, _, 30, k, 0), this.enableLoadingButton("#auction-submitdrawing", !0)
        } else if (i === "Gameplay_Auction" && n === "Gameplay_Auction") {
            _e("#auction-money").html(this.formatMoney(e.money));
            let m = "";
            if (e.info && e.message)
                for (f = 0; f < e.info.length; f++) m += '<div class="auction-info-content text-content">', m += `<p>${e.info[f].title} is worth ${this.formatMoney(e.info[f].value)}</p>`, m += "</div>";
            _e("#auction-info").css("display", m.length > 0 ? "block" : "none"), _e("#auction-centered-info").html(m), _e("#auction-skip-content").css("display", t.skip ? "block" : "none"), this.onAuctionMessage(e.message);
            const _ = t.currentBidderId !== this.model.id;
            let k = "";
            if (t.bids)
                for (f = 0; f < t.bids.length; f++) t.bids[f].amount > e.money || (k += `<button type="button" data-bid="${t.bids[f].amount}" class="pure-input-1 button-large pure-button button-auction auction-bid-button"${_?"":" disabled"}>${this.formatMoney(t.bids[f].amount)}</button>`);
            _e("#auction-bid-buttons").html(k);
            let R = "";
            if (e.screws !== void 0) {
                const V = e.screws > 0 && t.screwedPlayerId == null;
                if (t.screwingPlayerId)
                    if (t.screwingPlayerId === this.client.userId)
                        for (f = 0; f < t.playersToScrew.length; f++) R += `<button type="button" data-player="${t.playersToScrew[f].id}" class="pure-input-1 button-large pure-button button-auction auction-screw-player-button">${t.playersToScrew[f].name}</button>`;
                    else R = "<span class='big-text'><p>Another player is screwing, hold your horses</p></span>";
                else t.bids && (R = `<button type="button" class="pure-input-1 button-large pure-button button-auction auction-screw-button"${V?"":" disabled"}>SCREW</button>`)
            } else R = "";
            _e("#auction-screw-content").html(R);
            let D = "";
            if (t.playerSignalledForBank !== void 0) {
                let V, X;
                t.playerSignalledForBank ? (V = !0, X = "BANK CALLED") : e.numLoans >= 3 ? (V = !0, X = "BAD CREDIT") : e.timesOpenedBank >= 3 ? (V = !0, X = "STOP CALLING") : (V = !1, X = "CALL THE BANK"), D += `<button type="button" class="pure-input-1 button-large pure-button button-auction auction-open-bank-button"${V?" disabled":""}>${X}</button><br>`
            } else t.loanAmount !== void 0 && t.debtAmount !== void 0 && e.hasTakenOutLoanInCurrentBank !== void 0 && (e.numLoans >= 3 ? D += `<span class="big-text"><p>You've taken out 3 loans already. No more for you!</p></span>` : (D += `<span class="big-text"><p>You will receive : ${this.formatMoney(t.loanAmount)}, and owe ${this.formatMoney(t.debtAmount)}</p></span>`, D += `<button type="button" class="pure-input-1 button-large pure-button button-auction auction-take-loan-button"${e.hasTakenOutLoanInCurrentBank?" disabled":""}>GET A LOAN</button><br>`));
            _e("#auction-bank-content").html(D), this.showScreen("#state-auction")
        } else if (i && i === "PostGame") {
            if (!this.client.isRole("player")) {
                this.showScreen("#state-logo");
                return
            }
            if (this.hideLobbyButtons(), !e.isAllowedToMakeChoice) {
                _e("#auction-lobby-text").html("sit back and relax!"), this.showScreen("#state-post-game");
                return
            }
            _e("#auction-post-game-text").html("make your choice"), _e(".auction-endbuttons").show(), this.showScreen("#state-post-game")
        }
    },
    hideLobbyButtons() {
        _e("#auction-startgame").hide(), _e("#auction-stopcountdown").hide(), _e(".auction-endbuttons").hide()
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
        e ? (_e(t).show(), _e(`${t}-loading`).hide()) : (_e(t).hide(), _e(`${t}-loading`).show())
    },
    submitDrawing() {
        if (this.currentCanvas.isClean) return alert("You have to draw something!"), !1;
        this.enableLoadingButton("#drawful-submitdrawing", !1);
        const t = {
            id: this.titleThatImDrawing.id,
            drawing: this.currentCanvas.getBase64Image()
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    submitSkip() {
        const t = {
            skip: !0
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    submitBid(t) {
        const n = {
            bid: _e(t.currentTarget).data("bid")
        };
        return this.client.send("SendMessageToRoomOwner", n), !1
    },
    submitScrew() {
        const t = {
            screw: !0
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    submitScrewPlayer(t) {
        const e = _e(t.currentTarget).data("player"),
            n = {
                screw: !0,
                playerIdToScrew: e
            };
        return this.client.send("SendMessageToRoomOwner", n), !1
    },
    submitOpenBank() {
        const t = {
            "open-bank": !0
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    submitTakeLoan() {
        const t = {
            "take-loan": !0
        };
        return this.client.send("SendMessageToRoomOwner", t), !1
    },
    newGameSamePlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            decision: "same-players"
        }), !1
    },
    newGameNewPlayers() {
        return this.client.send("SendMessageToRoomOwner", {
            decision: "new-players"
        }), !1
    },
    async onAuctionMessage(t) {
        if (!t || this.lastMessage && this.lastMessage.id === t.id) return;
        this.lastMessage = t;
        const e = await Gx(Object.assign({
            "../images/bank_arrow.png": () => Ri(() => import("main/pp2/auction/assets/bank_arrow.bc369641.js"), []),
            "../images/buyer0_arrow.png": () => Ri(() => import("main/pp2/auction/assets/buyer0_arrow.2c1457f7.js"), []),
            "../images/buyer1_arrow.png": () => Ri(() => import("main/pp2/auction/assets/buyer1_arrow.6488b809.js"), []),
            "../images/buyer2_arrow.png": () => Ri(() => import("main/pp2/auction/assets/buyer2_arrow.74324be2.js"), []),
            "../images/dog_arrow.png": () => Ri(() => import("main/pp2/auction/assets/dog_arrow.035272f5.js"), []),
            "../images/greg_arrow.png": () => Ri(() => import("main/pp2/auction/assets/greg_arrow.a4543b5d.js"), []),
            "../images/oldman_arrow.png": () => Ri(() => import("main/pp2/auction/assets/oldman_arrow.80ef9f3e.js"), [])
        }), `../images/${t.sender.id}_arrow.png`);
        this.htmlWhenOff = "", this.htmlWhenOff += `<div class="auction-messager"><img src="${e.default}"></div>`, this.htmlWhenOff += `<div class="message-content text-content"><p>${t.text}</p></div>`;
        const n = _e("#auction-message"),
            i = this;
        this.auctionMessageIsOn ? (t && (this.notify(), n.unbind(), n.bind("oTransitionEnd transitionend webkitTransitionEnd", function() {
            _e("#auction-centered-message").html(i.htmlWhenOff), n.css("bottom", "0px"), this.auctionMessageIsOn = !1
        })), n.css("bottom", "-100px")) : t && (this.notify(), this.auctionMessageIsOn = !0, _e("#auction-centered-message").html(this.htmlWhenOff), n.css("bottom", "0"))
    },
    formatMoney(t) {
        return `$${t.toString()}`
    },
    sanitize(t) {
        return t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,:]/gi, "").replace(/'/g, "\u2019").trim()
    }
});
zx({
    MainView: Xx
});
//# sourceMappingURL=9603dfdb.js.map