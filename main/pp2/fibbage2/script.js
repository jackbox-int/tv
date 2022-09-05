var hh = Object.defineProperty;
var dh = (t, e, n) => e in t ? hh(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var st = (t, e, n) => (dh(t, typeof e != "symbol" ? e + "" : e, n), n);
const fh = function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]')) i(a);
    new MutationObserver(a => {
        for (const d of a)
            if (d.type === "childList")
                for (const m of d.addedNodes) m.tagName === "LINK" && m.rel === "modulepreload" && i(m)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(a) {
        const d = {};
        return a.integrity && (d.integrity = a.integrity), a.referrerpolicy && (d.referrerPolicy = a.referrerpolicy), a.crossorigin === "use-credentials" ? d.credentials = "include" : a.crossorigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d
    }

    function i(a) {
        if (a.ep) return;
        a.ep = !0;
        const d = n(a);
        fetch(a.href, d)
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
            d = Object.prototype,
            m = Function.prototype,
            S = a.push,
            k = a.slice,
            I = d.toString,
            L = d.hasOwnProperty,
            $ = Array.isArray,
            J = Object.keys,
            ie = m.bind,
            X = Object.create,
            re = function() {},
            v = function(l) {
                if (l instanceof v) return l;
                if (!(this instanceof v)) return new v(l);
                this._wrapped = l
            };
        t.exports && (e = t.exports = v), e._ = v, v.VERSION = "1.8.3";
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
                        return function(O, M, B) {
                            return l.call(g, O, M, B)
                        };
                    case 4:
                        return function(O, M, B, te) {
                            return l.call(g, O, M, B, te)
                        }
                }
                return function() {
                    return l.apply(g, arguments)
                }
            },
            q = function(l, g, _) {
                return l == null ? v.identity : v.isFunction(l) ? P(l, g, _) : v.isObject(l) ? v.matcher(l) : v.property(l)
            };
        v.iteratee = function(l, g) {
            return q(l, g, 1 / 0)
        };
        var le = function(l, g) {
                return function(_) {
                    var O = arguments.length;
                    if (O < 2 || _ == null) return _;
                    for (var M = 1; M < O; M++)
                        for (var B = arguments[M], te = l(B), ke = te.length, de = 0; de < ke; de++) {
                            var Le = te[de];
                            (!g || _[Le] === void 0) && (_[Le] = B[Le])
                        }
                    return _
                }
            },
            oe = function(l) {
                if (!v.isObject(l)) return {};
                if (X) return X(l);
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
            _e = ye("length"),
            Oe = function(l) {
                var g = _e(l);
                return typeof g == "number" && g >= 0 && g <= f
            };
        v.each = v.forEach = function(l, g, _) {
            g = P(g, _);
            var O, M;
            if (Oe(l))
                for (O = 0, M = l.length; O < M; O++) g(l[O], O, l);
            else {
                var B = v.keys(l);
                for (O = 0, M = B.length; O < M; O++) g(l[B[O]], B[O], l)
            }
            return l
        }, v.map = v.collect = function(l, g, _) {
            g = q(g, _);
            for (var O = !Oe(l) && v.keys(l), M = (O || l).length, B = Array(M), te = 0; te < M; te++) {
                var ke = O ? O[te] : te;
                B[te] = g(l[ke], ke, l)
            }
            return B
        };

        function Pe(l) {
            function g(_, O, M, B, te, ke) {
                for (; te >= 0 && te < ke; te += l) {
                    var de = B ? B[te] : te;
                    M = O(M, _[de], de, _)
                }
                return M
            }
            return function(_, O, M, B) {
                O = P(O, B, 4);
                var te = !Oe(_) && v.keys(_),
                    ke = (te || _).length,
                    de = l > 0 ? 0 : ke - 1;
                return arguments.length < 3 && (M = _[te ? te[de] : de], de += l), g(_, O, M, te, de, ke)
            }
        }
        v.reduce = v.foldl = v.inject = Pe(1), v.reduceRight = v.foldr = Pe(-1), v.find = v.detect = function(l, g, _) {
            var O;
            if (Oe(l) ? O = v.findIndex(l, g, _) : O = v.findKey(l, g, _), O !== void 0 && O !== -1) return l[O]
        }, v.filter = v.select = function(l, g, _) {
            var O = [];
            return g = q(g, _), v.each(l, function(M, B, te) {
                g(M, B, te) && O.push(M)
            }), O
        }, v.reject = function(l, g, _) {
            return v.filter(l, v.negate(q(g)), _)
        }, v.every = v.all = function(l, g, _) {
            g = q(g, _);
            for (var O = !Oe(l) && v.keys(l), M = (O || l).length, B = 0; B < M; B++) {
                var te = O ? O[B] : B;
                if (!g(l[te], te, l)) return !1
            }
            return !0
        }, v.some = v.any = function(l, g, _) {
            g = q(g, _);
            for (var O = !Oe(l) && v.keys(l), M = (O || l).length, B = 0; B < M; B++) {
                var te = O ? O[B] : B;
                if (g(l[te], te, l)) return !0
            }
            return !1
        }, v.contains = v.includes = v.include = function(l, g, _, O) {
            return Oe(l) || (l = v.values(l)), (typeof _ != "number" || O) && (_ = 0), v.indexOf(l, g, _) >= 0
        }, v.invoke = function(l, g) {
            var _ = k.call(arguments, 2),
                O = v.isFunction(g);
            return v.map(l, function(M) {
                var B = O ? g : M[g];
                return B == null ? B : B.apply(M, _)
            })
        }, v.pluck = function(l, g) {
            return v.map(l, v.property(g))
        }, v.where = function(l, g) {
            return v.filter(l, v.matcher(g))
        }, v.findWhere = function(l, g) {
            return v.find(l, v.matcher(g))
        }, v.max = function(l, g, _) {
            var O = -1 / 0,
                M = -1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) B = l[ke], B > O && (O = B)
            } else g = q(g, _), v.each(l, function(Le, De, nt) {
                te = g(Le, De, nt), (te > M || te === -1 / 0 && O === -1 / 0) && (O = Le, M = te)
            });
            return O
        }, v.min = function(l, g, _) {
            var O = 1 / 0,
                M = 1 / 0,
                B, te;
            if (g == null && l != null) {
                l = Oe(l) ? l : v.values(l);
                for (var ke = 0, de = l.length; ke < de; ke++) B = l[ke], B < O && (O = B)
            } else g = q(g, _), v.each(l, function(Le, De, nt) {
                te = g(Le, De, nt), (te < M || te === 1 / 0 && O === 1 / 0) && (O = Le, M = te)
            });
            return O
        }, v.shuffle = function(l) {
            for (var g = Oe(l) ? l : v.values(l), _ = g.length, O = Array(_), M = 0, B; M < _; M++) B = v.random(0, M), B !== M && (O[M] = O[B]), O[B] = g[M];
            return O
        }, v.sample = function(l, g, _) {
            return g == null || _ ? (Oe(l) || (l = v.values(l)), l[v.random(l.length - 1)]) : v.shuffle(l).slice(0, Math.max(0, g))
        }, v.sortBy = function(l, g, _) {
            return g = q(g, _), v.pluck(v.map(l, function(O, M, B) {
                return {
                    value: O,
                    index: M,
                    criteria: g(O, M, B)
                }
            }).sort(function(O, M) {
                var B = O.criteria,
                    te = M.criteria;
                if (B !== te) {
                    if (B > te || B === void 0) return 1;
                    if (B < te || te === void 0) return -1
                }
                return O.index - M.index
            }), "value")
        };
        var lt = function(l) {
            return function(g, _, O) {
                var M = {};
                return _ = q(_, O), v.each(g, function(B, te) {
                    var ke = _(B, te, g);
                    l(M, B, ke)
                }), M
            }
        };
        v.groupBy = lt(function(l, g, _) {
            v.has(l, _) ? l[_].push(g) : l[_] = [g]
        }), v.indexBy = lt(function(l, g, _) {
            l[_] = g
        }), v.countBy = lt(function(l, g, _) {
            v.has(l, _) ? l[_]++ : l[_] = 1
        }), v.toArray = function(l) {
            return l ? v.isArray(l) ? k.call(l) : Oe(l) ? v.map(l, v.identity) : v.values(l) : []
        }, v.size = function(l) {
            return l == null ? 0 : Oe(l) ? l.length : v.keys(l).length
        }, v.partition = function(l, g, _) {
            g = q(g, _);
            var O = [],
                M = [];
            return v.each(l, function(B, te, ke) {
                (g(B, te, ke) ? O : M).push(B)
            }), [O, M]
        }, v.first = v.head = v.take = function(l, g, _) {
            if (l != null) return g == null || _ ? l[0] : v.initial(l, l.length - g)
        }, v.initial = function(l, g, _) {
            return k.call(l, 0, Math.max(0, l.length - (g == null || _ ? 1 : g)))
        }, v.last = function(l, g, _) {
            if (l != null) return g == null || _ ? l[l.length - 1] : v.rest(l, Math.max(0, l.length - g))
        }, v.rest = v.tail = v.drop = function(l, g, _) {
            return k.call(l, g == null || _ ? 1 : g)
        }, v.compact = function(l) {
            return v.filter(l, v.identity)
        };
        var Ve = function(l, g, _, O) {
            for (var M = [], B = 0, te = O || 0, ke = _e(l); te < ke; te++) {
                var de = l[te];
                if (Oe(de) && (v.isArray(de) || v.isArguments(de))) {
                    g || (de = Ve(de, g, _));
                    var Le = 0,
                        De = de.length;
                    for (M.length += De; Le < De;) M[B++] = de[Le++]
                } else _ || (M[B++] = de)
            }
            return M
        };
        v.flatten = function(l, g) {
            return Ve(l, g, !1)
        }, v.without = function(l) {
            return v.difference(l, k.call(arguments, 1))
        }, v.uniq = v.unique = function(l, g, _, O) {
            v.isBoolean(g) || (O = _, _ = g, g = !1), _ != null && (_ = q(_, O));
            for (var M = [], B = [], te = 0, ke = _e(l); te < ke; te++) {
                var de = l[te],
                    Le = _ ? _(de, te, l) : de;
                g ? ((!te || B !== Le) && M.push(de), B = Le) : _ ? v.contains(B, Le) || (B.push(Le), M.push(de)) : v.contains(M, de) || M.push(de)
            }
            return M
        }, v.union = function() {
            return v.uniq(Ve(arguments, !0, !0))
        }, v.intersection = function(l) {
            for (var g = [], _ = arguments.length, O = 0, M = _e(l); O < M; O++) {
                var B = l[O];
                if (!v.contains(g, B)) {
                    for (var te = 1; te < _ && v.contains(arguments[te], B); te++);
                    te === _ && g.push(B)
                }
            }
            return g
        }, v.difference = function(l) {
            var g = Ve(arguments, !0, !0, 1);
            return v.filter(l, function(_) {
                return !v.contains(g, _)
            })
        }, v.zip = function() {
            return v.unzip(arguments)
        }, v.unzip = function(l) {
            for (var g = l && v.max(l, _e).length || 0, _ = Array(g), O = 0; O < g; O++) _[O] = v.pluck(l, O);
            return _
        }, v.object = function(l, g) {
            for (var _ = {}, O = 0, M = _e(l); O < M; O++) g ? _[l[O]] = g[O] : _[l[O][0]] = l[O][1];
            return _
        };

        function K(l) {
            return function(g, _, O) {
                _ = q(_, O);
                for (var M = _e(g), B = l > 0 ? 0 : M - 1; B >= 0 && B < M; B += l)
                    if (_(g[B], B, g)) return B;
                return -1
            }
        }
        v.findIndex = K(1), v.findLastIndex = K(-1), v.sortedIndex = function(l, g, _, O) {
            _ = q(_, O, 1);
            for (var M = _(g), B = 0, te = _e(l); B < te;) {
                var ke = Math.floor((B + te) / 2);
                _(l[ke]) < M ? B = ke + 1 : te = ke
            }
            return B
        };

        function Fe(l, g, _) {
            return function(O, M, B) {
                var te = 0,
                    ke = _e(O);
                if (typeof B == "number") l > 0 ? te = B >= 0 ? B : Math.max(B + ke, te) : ke = B >= 0 ? Math.min(B + 1, ke) : B + ke + 1;
                else if (_ && B && ke) return B = _(O, M), O[B] === M ? B : -1;
                if (M !== M) return B = g(k.call(O, te, ke), v.isNaN), B >= 0 ? B + te : -1;
                for (B = l > 0 ? te : ke - 1; B >= 0 && B < ke; B += l)
                    if (O[B] === M) return B;
                return -1
            }
        }
        v.indexOf = Fe(1, v.findIndex, v.sortedIndex), v.lastIndexOf = Fe(-1, v.findLastIndex), v.range = function(l, g, _) {
            g == null && (g = l || 0, l = 0), _ = _ || 1;
            for (var O = Math.max(Math.ceil((g - l) / _), 0), M = Array(O), B = 0; B < O; B++, l += _) M[B] = l;
            return M
        };
        var H = function(l, g, _, O, M) {
            if (!(O instanceof g)) return l.apply(_, M);
            var B = oe(l.prototype),
                te = l.apply(B, M);
            return v.isObject(te) ? te : B
        };
        v.bind = function(l, g) {
            if (ie && l.bind === ie) return ie.apply(l, k.call(arguments, 1));
            if (!v.isFunction(l)) throw new TypeError("Bind must be called on a function");
            var _ = k.call(arguments, 2),
                O = function() {
                    return H(l, O, g, this, _.concat(k.call(arguments)))
                };
            return O
        }, v.partial = function(l) {
            var g = k.call(arguments, 1),
                _ = function() {
                    for (var O = 0, M = g.length, B = Array(M), te = 0; te < M; te++) B[te] = g[te] === v ? arguments[O++] : g[te];
                    for (; O < arguments.length;) B.push(arguments[O++]);
                    return H(l, _, this, this, B)
                };
            return _
        }, v.bindAll = function(l) {
            var g, _ = arguments.length,
                O;
            if (_ <= 1) throw new Error("bindAll must be passed function names");
            for (g = 1; g < _; g++) O = arguments[g], l[O] = v.bind(l[O], l);
            return l
        }, v.memoize = function(l, g) {
            var _ = function(O) {
                var M = _.cache,
                    B = "" + (g ? g.apply(this, arguments) : O);
                return v.has(M, B) || (M[B] = l.apply(this, arguments)), M[B]
            };
            return _.cache = {}, _
        }, v.delay = function(l, g) {
            var _ = k.call(arguments, 2);
            return setTimeout(function() {
                return l.apply(null, _)
            }, g)
        }, v.defer = v.partial(v.delay, v, 1), v.throttle = function(l, g, _) {
            var O, M, B, te = null,
                ke = 0;
            _ || (_ = {});
            var de = function() {
                ke = _.leading === !1 ? 0 : v.now(), te = null, B = l.apply(O, M), te || (O = M = null)
            };
            return function() {
                var Le = v.now();
                !ke && _.leading === !1 && (ke = Le);
                var De = g - (Le - ke);
                return O = this, M = arguments, De <= 0 || De > g ? (te && (clearTimeout(te), te = null), ke = Le, B = l.apply(O, M), te || (O = M = null)) : !te && _.trailing !== !1 && (te = setTimeout(de, De)), B
            }
        }, v.debounce = function(l, g, _) {
            var O, M, B, te, ke, de = function() {
                var Le = v.now() - te;
                Le < g && Le >= 0 ? O = setTimeout(de, g - Le) : (O = null, _ || (ke = l.apply(B, M), O || (B = M = null)))
            };
            return function() {
                B = this, M = arguments, te = v.now();
                var Le = _ && !O;
                return O || (O = setTimeout(de, g)), Le && (ke = l.apply(B, M), B = M = null), ke
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
                for (var _ = g, O = l[g].apply(this, arguments); _--;) O = l[_].call(this, O);
                return O
            }
        }, v.after = function(l, g) {
            return function() {
                if (--l < 1) return g.apply(this, arguments)
            }
        }, v.before = function(l, g) {
            var _;
            return function() {
                return --l > 0 && (_ = g.apply(this, arguments)), l <= 1 && (g = null), _
            }
        }, v.once = v.partial(v.before, 2);
        var ae = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            Ae = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];

        function we(l, g) {
            var _ = Ae.length,
                O = l.constructor,
                M = v.isFunction(O) && O.prototype || d,
                B = "constructor";
            for (v.has(l, B) && !v.contains(g, B) && g.push(B); _--;) B = Ae[_], B in l && l[B] !== M[B] && !v.contains(g, B) && g.push(B)
        }
        v.keys = function(l) {
            if (!v.isObject(l)) return [];
            if (J) return J(l);
            var g = [];
            for (var _ in l) v.has(l, _) && g.push(_);
            return ae && we(l, g), g
        }, v.allKeys = function(l) {
            if (!v.isObject(l)) return [];
            var g = [];
            for (var _ in l) g.push(_);
            return ae && we(l, g), g
        }, v.values = function(l) {
            for (var g = v.keys(l), _ = g.length, O = Array(_), M = 0; M < _; M++) O[M] = l[g[M]];
            return O
        }, v.mapObject = function(l, g, _) {
            g = q(g, _);
            for (var O = v.keys(l), M = O.length, B = {}, te, ke = 0; ke < M; ke++) te = O[ke], B[te] = g(l[te], te, l);
            return B
        }, v.pairs = function(l) {
            for (var g = v.keys(l), _ = g.length, O = Array(_), M = 0; M < _; M++) O[M] = [g[M], l[g[M]]];
            return O
        }, v.invert = function(l) {
            for (var g = {}, _ = v.keys(l), O = 0, M = _.length; O < M; O++) g[l[_[O]]] = _[O];
            return g
        }, v.functions = v.methods = function(l) {
            var g = [];
            for (var _ in l) v.isFunction(l[_]) && g.push(_);
            return g.sort()
        }, v.extend = le(v.allKeys), v.extendOwn = v.assign = le(v.keys), v.findKey = function(l, g, _) {
            g = q(g, _);
            for (var O = v.keys(l), M, B = 0, te = O.length; B < te; B++)
                if (M = O[B], g(l[M], M, l)) return M
        }, v.pick = function(l, g, _) {
            var O = {},
                M = l,
                B, te;
            if (M == null) return O;
            v.isFunction(g) ? (te = v.allKeys(M), B = P(g, _)) : (te = Ve(arguments, !1, !1, 1), B = function(nt, Ct, rn) {
                return Ct in rn
            }, M = Object(M));
            for (var ke = 0, de = te.length; ke < de; ke++) {
                var Le = te[ke],
                    De = M[Le];
                B(De, Le, M) && (O[Le] = De)
            }
            return O
        }, v.omit = function(l, g, _) {
            if (v.isFunction(g)) g = v.negate(g);
            else {
                var O = v.map(Ve(arguments, !1, !1, 1), String);
                g = function(M, B) {
                    return !v.contains(O, B)
                }
            }
            return v.pick(l, g, _)
        }, v.defaults = le(v.allKeys, !0), v.create = function(l, g) {
            var _ = oe(l);
            return g && v.extendOwn(_, g), _
        }, v.clone = function(l) {
            return v.isObject(l) ? v.isArray(l) ? l.slice() : v.extend({}, l) : l
        }, v.tap = function(l, g) {
            return g(l), l
        }, v.isMatch = function(l, g) {
            var _ = v.keys(g),
                O = _.length;
            if (l == null) return !O;
            for (var M = Object(l), B = 0; B < O; B++) {
                var te = _[B];
                if (g[te] !== M[te] || !(te in M)) return !1
            }
            return !0
        };
        var be = function(l, g, _, O) {
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
            var B = M === "[object Array]";
            if (!B) {
                if (typeof l != "object" || typeof g != "object") return !1;
                var te = l.constructor,
                    ke = g.constructor;
                if (te !== ke && !(v.isFunction(te) && te instanceof te && v.isFunction(ke) && ke instanceof ke) && "constructor" in l && "constructor" in g) return !1
            }
            _ = _ || [], O = O || [];
            for (var de = _.length; de--;)
                if (_[de] === l) return O[de] === g;
            if (_.push(l), O.push(g), B) {
                if (de = l.length, de !== g.length) return !1;
                for (; de--;)
                    if (!be(l[de], g[de], _, O)) return !1
            } else {
                var Le = v.keys(l),
                    De;
                if (de = Le.length, v.keys(g).length !== de) return !1;
                for (; de--;)
                    if (De = Le[de], !(v.has(g, De) && be(l[De], g[De], _, O))) return !1
            }
            return _.pop(), O.pop(), !0
        };
        v.isEqual = function(l, g) {
            return be(l, g)
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
        }, v.times = function(l, g, _) {
            var O = Array(Math.max(0, l));
            g = P(g, _, 1);
            for (var M = 0; M < l; M++) O[M] = g(M);
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
            Se = v.invert(he),
            Te = function(l) {
                var g = function(B) {
                        return l[B]
                    },
                    _ = "(?:" + v.keys(l).join("|") + ")",
                    O = RegExp(_),
                    M = RegExp(_, "g");
                return function(B) {
                    return B = B == null ? "" : "" + B, O.test(B) ? B.replace(M, g) : B
                }
            };
        v.escape = Te(he), v.unescape = Te(Se), v.result = function(l, g, _) {
            var O = l == null ? void 0 : l[g];
            return O === void 0 && (O = _), v.isFunction(O) ? O.call(l) : O
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
            $t = /\\|'|\r|\n|\u2028|\u2029/g,
            qt = function(l) {
                return "\\" + dt[l]
            };
        v.template = function(l, g, _) {
            !g && _ && (g = _), g = v.defaults({}, g, v.templateSettings);
            var O = RegExp([(g.escape || Ke).source, (g.interpolate || Ke).source, (g.evaluate || Ke).source].join("|") + "|$", "g"),
                M = 0,
                B = "__p+='";
            l.replace(O, function(Le, De, nt, Ct, rn) {
                return B += l.slice(M, rn).replace($t, qt), M = rn + Le.length, De ? B += `'+
((__t=(` + De + `))==null?'':_.escape(__t))+
'` : nt ? B += `'+
((__t=(` + nt + `))==null?'':__t)+
'` : Ct && (B += `';
` + Ct + `
__p+='`), Le
            }), B += `';
`, g.variable || (B = `with(obj||{}){
` + B + `}
`), B = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + B + `return __p;
`;
            try {
                var te = new Function(g.variable || "obj", "_", B)
            } catch (Le) {
                throw Le.source = B, Le
            }
            var ke = function(Le) {
                    return te.call(this, Le, v)
                },
                de = g.variable || "obj";
            return ke.source = "function(" + de + `){
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
                var _ = v[g] = l[g];
                v.prototype[g] = function() {
                    var O = [this._wrapped];
                    return S.apply(O, arguments), E(this, _.apply(v, O))
                }
            })
        }, v.mixin(v), v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(l) {
            var g = a[l];
            v.prototype[l] = function() {
                var _ = this._wrapped;
                return g.apply(_, arguments), (l === "shift" || l === "splice") && _.length === 0 && delete _[0], E(this, _)
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
})(Pi, Pi.exports);
const at = Pi.exports;
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
            a = Object.getPrototypeOf,
            d = i.slice,
            m = i.flat ? function(r) {
                return i.flat.call(r)
            } : function(r) {
                return i.concat.apply([], r)
            },
            S = i.push,
            k = i.indexOf,
            I = {},
            L = I.toString,
            $ = I.hasOwnProperty,
            J = $.toString,
            ie = J.call(Object),
            X = {},
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

        function le(r, s, u) {
            u = u || P;
            var p, b, x = u.createElement("script");
            if (x.text = r, s)
                for (p in q) b = s[p] || s.getAttribute && s.getAttribute(p), b && x.setAttribute(p, b);
            u.head.appendChild(x).parentNode.removeChild(x)
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
                return d.call(this)
            },
            get: function(r) {
                return r == null ? d.call(this) : r < 0 ? this[r + this.length] : this[r]
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
                return this.pushStack(d.apply(this, arguments))
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
            push: S,
            sort: i.sort,
            splice: i.splice
        }, f.extend = f.fn.extend = function() {
            var r, s, u, p, b, x, T = arguments[0] || {},
                z = 1,
                G = arguments.length,
                Z = !1;
            for (typeof T == "boolean" && (Z = T, T = arguments[z] || {}, z++), typeof T != "object" && !re(T) && (T = {}), z === G && (T = this, z--); z < G; z++)
                if ((r = arguments[z]) != null)
                    for (s in r) p = r[s], !(s === "__proto__" || T === p) && (Z && p && (f.isPlainObject(p) || (b = Array.isArray(p))) ? (u = T[s], b && !Array.isArray(u) ? x = [] : !b && !f.isPlainObject(u) ? x = {} : x = u, b = !1, T[s] = f.extend(Z, x, p)) : p !== void 0 && (T[s] = p));
            return T
        }, f.extend({
            expando: "jQuery" + (ye + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(r) {
                throw new Error(r)
            },
            noop: function() {},
            isPlainObject: function(r) {
                var s, u;
                return !r || L.call(r) !== "[object Object]" ? !1 : (s = a(r), s ? (u = $.call(s, "constructor") && s.constructor, typeof u == "function" && J.call(u) === ie) : !0)
            },
            isEmptyObject: function(r) {
                var s;
                for (s in r) return !1;
                return !0
            },
            globalEval: function(r, s, u) {
                le(r, {
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
                return r != null && (_e(Object(r)) ? f.merge(u, typeof r == "string" ? [r] : r) : S.call(u, r)), u
            },
            inArray: function(r, s, u) {
                return s == null ? -1 : k.call(s, r, u)
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
                if (_e(r))
                    for (p = r.length; x < p; x++) b = s(r[x], x, u), b != null && T.push(b);
                else
                    for (x in r) b = s(r[x], x, u), b != null && T.push(b);
                return m(T)
            },
            guid: 1,
            support: X
        }), typeof Symbol == "function" && (f.fn[Symbol.iterator] = i[Symbol.iterator]), f.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(r, s) {
            I["[object " + s + "]"] = s.toLowerCase()
        });

        function _e(r) {
            var s = !!r && "length" in r && r.length,
                u = oe(r);
            return re(r) || v(r) ? !1 : u === "array" || s === 0 || typeof s == "number" && s > 0 && s - 1 in r
        }
        var Oe = function(r) {
            var s, u, p, b, x, T, z, G, Z, ce, Ce, ne, ue, Ue, rt, je, Gt, Bt, un, _t = "sizzle" + 1 * new Date,
                et = r.document,
                on = 0,
                ft = 0,
                Lt = Xi(),
                _i = Xi(),
                Wi = Xi(),
                hn = Xi(),
                Kn = function(R, F) {
                    return R === F && (Ce = !0), 0
                },
                Jn = {}.hasOwnProperty,
                an = [],
                Dn = an.pop,
                vn = an.push,
                Cn = an.push,
                _s = an.slice,
                Qn = function(R, F) {
                    for (var Y = 0, fe = R.length; Y < fe; Y++)
                        if (R[Y] === F) return Y;
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
                Yi = {
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
                Go = /^(?:input|select|textarea|button)$/i,
                Ho = /^h\d$/i,
                ki = /^[^{]+\{\s*\[native \w/,
                Uo = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                Gr = /[+~]/,
                Tn = new RegExp("\\\\[\\da-fA-F]{1,6}" + gt + "?|\\\\([^\\r\\n\\f])", "g"),
                xn = function(R, F) {
                    var Y = "0x" + R.slice(1) - 65536;
                    return F || (Y < 0 ? String.fromCharCode(Y + 65536) : String.fromCharCode(Y >> 10 | 55296, Y & 1023 | 56320))
                },
                Hr = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
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
                    apply: an.length ? function(F, Y) {
                        vn.apply(F, _s.call(Y))
                    } : function(F, Y) {
                        for (var fe = F.length, ee = 0; F[fe++] = Y[ee++];);
                        F.length = fe - 1
                    }
                }
            }

            function St(R, F, Y, fe) {
                var ee, ve, Ee, Re, Me, ze, He, Ye = F && F.ownerDocument,
                    ht = F ? F.nodeType : 9;
                if (Y = Y || [], typeof R != "string" || !R || ht !== 1 && ht !== 9 && ht !== 11) return Y;
                if (!fe && (ne(F), F = F || ue, rt)) {
                    if (ht !== 11 && (Me = Uo.exec(R)))
                        if (ee = Me[1]) {
                            if (ht === 9)
                                if (Ee = F.getElementById(ee)) {
                                    if (Ee.id === ee) return Y.push(Ee), Y
                                } else return Y;
                            else if (Ye && (Ee = Ye.getElementById(ee)) && un(F, Ee) && Ee.id === ee) return Y.push(Ee), Y
                        } else {
                            if (Me[2]) return Cn.apply(Y, F.getElementsByTagName(R)), Y;
                            if ((ee = Me[3]) && u.getElementsByClassName && F.getElementsByClassName) return Cn.apply(Y, F.getElementsByClassName(ee)), Y
                        } if (u.qsa && !hn[R + " "] && (!je || !je.test(R)) && (ht !== 1 || F.nodeName.toLowerCase() !== "object")) {
                        if (He = R, Ye = F, ht === 1 && ($o.test(R) || As.test(R))) {
                            for (Ye = Gr.test(R) && Ur(F.parentNode) || F, (Ye !== F || !u.scope) && ((Re = F.getAttribute("id")) ? Re = Re.replace(Hr, Os) : F.setAttribute("id", Re = _t)), ze = T(R), ve = ze.length; ve--;) ze[ve] = (Re ? "#" + Re : ":scope") + " " + Qi(ze[ve]);
                            He = ze.join(",")
                        }
                        try {
                            return Cn.apply(Y, Ye.querySelectorAll(He)), Y
                        } catch {
                            hn(R, !0)
                        } finally {
                            Re === _t && F.removeAttribute("id")
                        }
                    }
                }
                return G(R.replace(Si, "$1"), F, Y, fe)
            }

            function Xi() {
                var R = [];

                function F(Y, fe) {
                    return R.push(Y + " ") > p.cacheLength && delete F[R.shift()], F[Y + " "] = fe
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
                for (var Y = R.split("|"), fe = Y.length; fe--;) p.attrHandle[Y[fe]] = F
            }

            function Ji(R, F) {
                var Y = F && R,
                    fe = Y && R.nodeType === 1 && F.nodeType === 1 && R.sourceIndex - F.sourceIndex;
                if (fe) return fe;
                if (Y) {
                    for (; Y = Y.nextSibling;)
                        if (Y === F) return -1
                }
                return R ? 1 : -1
            }

            function Wo(R) {
                return function(F) {
                    var Y = F.nodeName.toLowerCase();
                    return Y === "input" && F.type === R
                }
            }

            function Yo(R) {
                return function(F) {
                    var Y = F.nodeName.toLowerCase();
                    return (Y === "input" || Y === "button") && F.type === R
                }
            }

            function Is(R) {
                return function(F) {
                    return "form" in F ? F.parentNode && F.disabled === !1 ? "label" in F ? "label" in F.parentNode ? F.parentNode.disabled === R : F.disabled === R : F.isDisabled === R || F.isDisabled !== !R && qo(F) === R : F.disabled === R : "label" in F ? F.disabled === R : !1
                }
            }

            function An(R) {
                return dn(function(F) {
                    return F = +F, dn(function(Y, fe) {
                        for (var ee, ve = R([], Y.length, F), Ee = ve.length; Ee--;) Y[ee = ve[Ee]] && (Y[ee] = !(fe[ee] = Y[ee]))
                    })
                })
            }

            function Ur(R) {
                return R && typeof R.getElementsByTagName < "u" && R
            }
            u = St.support = {}, x = St.isXML = function(R) {
                var F = R && R.namespaceURI,
                    Y = R && (R.ownerDocument || R).documentElement;
                return !zo.test(F || Y && Y.nodeName || "HTML")
            }, ne = St.setDocument = function(R) {
                var F, Y, fe = R ? R.ownerDocument || R : et;
                return fe == ue || fe.nodeType !== 9 || !fe.documentElement || (ue = fe, Ue = ue.documentElement, rt = !x(ue), et != ue && (Y = ue.defaultView) && Y.top !== Y && (Y.addEventListener ? Y.addEventListener("unload", Rs, !1) : Y.attachEvent && Y.attachEvent("onunload", Rs)), u.scope = yn(function(ee) {
                    return Ue.appendChild(ee).appendChild(ue.createElement("div")), typeof ee.querySelectorAll < "u" && !ee.querySelectorAll(":scope fieldset div").length
                }), u.attributes = yn(function(ee) {
                    return ee.className = "i", !ee.getAttribute("className")
                }), u.getElementsByTagName = yn(function(ee) {
                    return ee.appendChild(ue.createComment("")), !ee.getElementsByTagName("*").length
                }), u.getElementsByClassName = ki.test(ue.getElementsByClassName), u.getById = yn(function(ee) {
                    return Ue.appendChild(ee).id = _t, !ue.getElementsByName || !ue.getElementsByName(_t).length
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
                }, Gt = [], je = [], (u.qsa = ki.test(ue.querySelectorAll)) && (yn(function(ee) {
                    var ve;
                    Ue.appendChild(ee).innerHTML = "<a id='" + _t + "'></a><select id='" + _t + "-\r\\' msallowcapture=''><option selected=''></option></select>", ee.querySelectorAll("[msallowcapture^='']").length && je.push("[*^$]=" + gt + `*(?:''|"")`), ee.querySelectorAll("[selected]").length || je.push("\\[" + gt + "*(?:value|" + Fr + ")"), ee.querySelectorAll("[id~=" + _t + "-]").length || je.push("~="), ve = ue.createElement("input"), ve.setAttribute("name", ""), ee.appendChild(ve), ee.querySelectorAll("[name='']").length || je.push("\\[" + gt + "*name" + gt + "*=" + gt + `*(?:''|"")`), ee.querySelectorAll(":checked").length || je.push(":checked"), ee.querySelectorAll("a#" + _t + "+*").length || je.push(".#.+[+~]"), ee.querySelectorAll("\\\f"), je.push("[\\r\\n\\f]")
                }), yn(function(ee) {
                    ee.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var ve = ue.createElement("input");
                    ve.setAttribute("type", "hidden"), ee.appendChild(ve).setAttribute("name", "D"), ee.querySelectorAll("[name=d]").length && je.push("name" + gt + "*[*^$|!~]?="), ee.querySelectorAll(":enabled").length !== 2 && je.push(":enabled", ":disabled"), Ue.appendChild(ee).disabled = !0, ee.querySelectorAll(":disabled").length !== 2 && je.push(":enabled", ":disabled"), ee.querySelectorAll("*,:x"), je.push(",.*:")
                })), (u.matchesSelector = ki.test(Bt = Ue.matches || Ue.webkitMatchesSelector || Ue.mozMatchesSelector || Ue.oMatchesSelector || Ue.msMatchesSelector)) && yn(function(ee) {
                    u.disconnectedMatch = Bt.call(ee, "*"), Bt.call(ee, "[s!='']:x"), Gt.push("!=", zr)
                }), je = je.length && new RegExp(je.join("|")), Gt = Gt.length && new RegExp(Gt.join("|")), F = ki.test(Ue.compareDocumentPosition), un = F || ki.test(Ue.contains) ? function(ee, ve) {
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
                    return Ee || (Ee = (ee.ownerDocument || ee) == (ve.ownerDocument || ve) ? ee.compareDocumentPosition(ve) : 1, Ee & 1 || !u.sortDetached && ve.compareDocumentPosition(ee) === Ee ? ee == ue || ee.ownerDocument == et && un(et, ee) ? -1 : ve == ue || ve.ownerDocument == et && un(et, ve) ? 1 : ce ? Qn(ce, ee) - Qn(ce, ve) : 0 : Ee & 4 ? -1 : 1)
                } : function(ee, ve) {
                    if (ee === ve) return Ce = !0, 0;
                    var Ee, Re = 0,
                        Me = ee.parentNode,
                        ze = ve.parentNode,
                        He = [ee],
                        Ye = [ve];
                    if (!Me || !ze) return ee == ue ? -1 : ve == ue ? 1 : Me ? -1 : ze ? 1 : ce ? Qn(ce, ee) - Qn(ce, ve) : 0;
                    if (Me === ze) return Ji(ee, ve);
                    for (Ee = ee; Ee = Ee.parentNode;) He.unshift(Ee);
                    for (Ee = ve; Ee = Ee.parentNode;) Ye.unshift(Ee);
                    for (; He[Re] === Ye[Re];) Re++;
                    return Re ? Ji(He[Re], Ye[Re]) : He[Re] == et ? -1 : Ye[Re] == et ? 1 : 0
                }), ue
            }, St.matches = function(R, F) {
                return St(R, null, null, F)
            }, St.matchesSelector = function(R, F) {
                if (ne(R), u.matchesSelector && rt && !hn[F + " "] && (!Gt || !Gt.test(F)) && (!je || !je.test(F))) try {
                    var Y = Bt.call(R, F);
                    if (Y || u.disconnectedMatch || R.document && R.document.nodeType !== 11) return Y
                } catch {
                    hn(F, !0)
                }
                return St(F, ue, null, [R]).length > 0
            }, St.contains = function(R, F) {
                return (R.ownerDocument || R) != ue && ne(R), un(R, F)
            }, St.attr = function(R, F) {
                (R.ownerDocument || R) != ue && ne(R);
                var Y = p.attrHandle[F.toLowerCase()],
                    fe = Y && Jn.call(p.attrHandle, F.toLowerCase()) ? Y(R, F, !rt) : void 0;
                return fe !== void 0 ? fe : u.attributes || !rt ? R.getAttribute(F) : (fe = R.getAttributeNode(F)) && fe.specified ? fe.value : null
            }, St.escape = function(R) {
                return (R + "").replace(Hr, Os)
            }, St.error = function(R) {
                throw new Error("Syntax error, unrecognized expression: " + R)
            }, St.uniqueSort = function(R) {
                var F, Y = [],
                    fe = 0,
                    ee = 0;
                if (Ce = !u.detectDuplicates, ce = !u.sortStable && R.slice(0), R.sort(Kn), Ce) {
                    for (; F = R[ee++];) F === R[ee] && (fe = Y.push(ee));
                    for (; fe--;) R.splice(Y[fe], 1)
                }
                return ce = null, R
            }, b = St.getText = function(R) {
                var F, Y = "",
                    fe = 0,
                    ee = R.nodeType;
                if (ee) {
                    if (ee === 1 || ee === 9 || ee === 11) {
                        if (typeof R.textContent == "string") return R.textContent;
                        for (R = R.firstChild; R; R = R.nextSibling) Y += b(R)
                    } else if (ee === 3 || ee === 4) return R.nodeValue
                } else
                    for (; F = R[fe++];) Y += b(F);
                return Y
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
                        var F, Y = !R[6] && R[2];
                        return Yi.CHILD.test(R[0]) ? null : (R[3] ? R[2] = R[4] || R[5] || "" : Y && jo.test(Y) && (F = T(Y, !0)) && (F = Y.indexOf(")", Y.length - F) - Y.length) && (R[0] = R[0].slice(0, F), R[2] = Y.slice(0, F)), R.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(R) {
                        var F = R.replace(Tn, xn).toLowerCase();
                        return R === "*" ? function() {
                            return !0
                        } : function(Y) {
                            return Y.nodeName && Y.nodeName.toLowerCase() === F
                        }
                    },
                    CLASS: function(R) {
                        var F = Lt[R + " "];
                        return F || (F = new RegExp("(^|" + gt + ")" + R + "(" + gt + "|$)")) && Lt(R, function(Y) {
                            return F.test(typeof Y.className == "string" && Y.className || typeof Y.getAttribute < "u" && Y.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(R, F, Y) {
                        return function(fe) {
                            var ee = St.attr(fe, R);
                            return ee == null ? F === "!=" : F ? (ee += "", F === "=" ? ee === Y : F === "!=" ? ee !== Y : F === "^=" ? Y && ee.indexOf(Y) === 0 : F === "*=" ? Y && ee.indexOf(Y) > -1 : F === "$=" ? Y && ee.slice(-Y.length) === Y : F === "~=" ? (" " + ee.replace(ks, " ") + " ").indexOf(Y) > -1 : F === "|=" ? ee === Y || ee.slice(0, Y.length + 1) === Y + "-" : !1) : !0
                        }
                    },
                    CHILD: function(R, F, Y, fe, ee) {
                        var ve = R.slice(0, 3) !== "nth",
                            Ee = R.slice(-4) !== "last",
                            Re = F === "of-type";
                        return fe === 1 && ee === 0 ? function(Me) {
                            return !!Me.parentNode
                        } : function(Me, ze, He) {
                            var Ye, ht, Tt, We, Ht, Qt, fn = ve !== Ee ? "nextSibling" : "previousSibling",
                                At = Me.parentNode,
                                c = Re && Me.nodeName.toLowerCase(),
                                h = !He && !Re,
                                w = !1;
                            if (At) {
                                if (ve) {
                                    for (; fn;) {
                                        for (We = Me; We = We[fn];)
                                            if (Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) return !1;
                                        Qt = fn = R === "only" && !Qt && "nextSibling"
                                    }
                                    return !0
                                }
                                if (Qt = [Ee ? At.firstChild : At.lastChild], Ee && h) {
                                    for (We = At, Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), Ye = ht[R] || [], Ht = Ye[0] === on && Ye[1], w = Ht && Ye[2], We = Ht && At.childNodes[Ht]; We = ++Ht && We && We[fn] || (w = Ht = 0) || Qt.pop();)
                                        if (We.nodeType === 1 && ++w && We === Me) {
                                            ht[R] = [on, Ht, w];
                                            break
                                        }
                                } else if (h && (We = Me, Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), Ye = ht[R] || [], Ht = Ye[0] === on && Ye[1], w = Ht), w === !1)
                                    for (;
                                        (We = ++Ht && We && We[fn] || (w = Ht = 0) || Qt.pop()) && !((Re ? We.nodeName.toLowerCase() === c : We.nodeType === 1) && ++w && (h && (Tt = We[_t] || (We[_t] = {}), ht = Tt[We.uniqueID] || (Tt[We.uniqueID] = {}), ht[R] = [on, w]), We === Me)););
                                return w -= ee, w === fe || w % fe === 0 && w / fe >= 0
                            }
                        }
                    },
                    PSEUDO: function(R, F) {
                        var Y, fe = p.pseudos[R] || p.setFilters[R.toLowerCase()] || St.error("unsupported pseudo: " + R);
                        return fe[_t] ? fe(F) : fe.length > 1 ? (Y = [R, R, "", F], p.setFilters.hasOwnProperty(R.toLowerCase()) ? dn(function(ee, ve) {
                            for (var Ee, Re = fe(ee, F), Me = Re.length; Me--;) Ee = Qn(ee, Re[Me]), ee[Ee] = !(ve[Ee] = Re[Me])
                        }) : function(ee) {
                            return fe(ee, 0, Y)
                        }) : fe
                    }
                },
                pseudos: {
                    not: dn(function(R) {
                        var F = [],
                            Y = [],
                            fe = z(R.replace(Si, "$1"));
                        return fe[_t] ? dn(function(ee, ve, Ee, Re) {
                            for (var Me, ze = fe(ee, null, Re, []), He = ee.length; He--;)(Me = ze[He]) && (ee[He] = !(ve[He] = Me))
                        }) : function(ee, ve, Ee) {
                            return F[0] = ee, fe(F, null, Ee, Y), F[0] = null, !Y.pop()
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
                                return (F.textContent || b(F)).indexOf(R) > -1
                            }
                    }),
                    lang: dn(function(R) {
                        return Fo.test(R || "") || St.error("unsupported lang: " + R), R = R.replace(Tn, xn).toLowerCase(),
                            function(F) {
                                var Y;
                                do
                                    if (Y = rt ? F.lang : F.getAttribute("xml:lang") || F.getAttribute("lang")) return Y = Y.toLowerCase(), Y === R || Y.indexOf(R + "-") === 0; while ((F = F.parentNode) && F.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(R) {
                        var F = r.location && r.location.hash;
                        return F && F.slice(1) === R.id
                    },
                    root: function(R) {
                        return R === Ue
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
                        return Ho.test(R.nodeName)
                    },
                    input: function(R) {
                        return Go.test(R.nodeName)
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
                    eq: An(function(R, F, Y) {
                        return [Y < 0 ? Y + F : Y]
                    }),
                    even: An(function(R, F) {
                        for (var Y = 0; Y < F; Y += 2) R.push(Y);
                        return R
                    }),
                    odd: An(function(R, F) {
                        for (var Y = 1; Y < F; Y += 2) R.push(Y);
                        return R
                    }),
                    lt: An(function(R, F, Y) {
                        for (var fe = Y < 0 ? Y + F : Y > F ? F : Y; --fe >= 0;) R.push(fe);
                        return R
                    }),
                    gt: An(function(R, F, Y) {
                        for (var fe = Y < 0 ? Y + F : Y; ++fe < F;) R.push(fe);
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
            Ls.prototype = p.filters = p.pseudos, p.setFilters = new Ls, T = St.tokenize = function(R, F) {
                var Y, fe, ee, ve, Ee, Re, Me, ze = _i[R + " "];
                if (ze) return F ? 0 : ze.slice(0);
                for (Ee = R, Re = [], Me = p.preFilter; Ee;) {
                    (!Y || (fe = Ts.exec(Ee))) && (fe && (Ee = Ee.slice(fe[0].length) || Ee), Re.push(ee = [])), Y = !1, (fe = As.exec(Ee)) && (Y = fe.shift(), ee.push({
                        value: Y,
                        type: fe[0].replace(Si, " ")
                    }), Ee = Ee.slice(Y.length));
                    for (ve in p.filter)(fe = Yi[ve].exec(Ee)) && (!Me[ve] || (fe = Me[ve](fe))) && (Y = fe.shift(), ee.push({
                        value: Y,
                        type: ve,
                        matches: fe
                    }), Ee = Ee.slice(Y.length));
                    if (!Y) break
                }
                return F ? Ee.length : Ee ? St.error(R) : _i(R, Re).slice(0)
            };

            function Qi(R) {
                for (var F = 0, Y = R.length, fe = ""; F < Y; F++) fe += R[F].value;
                return fe
            }

            function Zi(R, F, Y) {
                var fe = F.dir,
                    ee = F.next,
                    ve = ee || fe,
                    Ee = Y && ve === "parentNode",
                    Re = ft++;
                return F.first ? function(Me, ze, He) {
                    for (; Me = Me[fe];)
                        if (Me.nodeType === 1 || Ee) return R(Me, ze, He);
                    return !1
                } : function(Me, ze, He) {
                    var Ye, ht, Tt, We = [on, Re];
                    if (He) {
                        for (; Me = Me[fe];)
                            if ((Me.nodeType === 1 || Ee) && R(Me, ze, He)) return !0
                    } else
                        for (; Me = Me[fe];)
                            if (Me.nodeType === 1 || Ee)
                                if (Tt = Me[_t] || (Me[_t] = {}), ht = Tt[Me.uniqueID] || (Tt[Me.uniqueID] = {}), ee && ee === Me.nodeName.toLowerCase()) Me = Me[fe] || Me;
                                else {
                                    if ((Ye = ht[ve]) && Ye[0] === on && Ye[1] === Re) return We[2] = Ye[2];
                                    if (ht[ve] = We, We[2] = R(Me, ze, He)) return !0
                                } return !1
                }
            }

            function er(R) {
                return R.length > 1 ? function(F, Y, fe) {
                    for (var ee = R.length; ee--;)
                        if (!R[ee](F, Y, fe)) return !1;
                    return !0
                } : R[0]
            }

            function Xo(R, F, Y) {
                for (var fe = 0, ee = F.length; fe < ee; fe++) St(R, F[fe], Y);
                return Y
            }

            function tr(R, F, Y, fe, ee) {
                for (var ve, Ee = [], Re = 0, Me = R.length, ze = F != null; Re < Me; Re++)(ve = R[Re]) && (!Y || Y(ve, fe, ee)) && (Ee.push(ve), ze && F.push(Re));
                return Ee
            }

            function qr(R, F, Y, fe, ee, ve) {
                return fe && !fe[_t] && (fe = qr(fe)), ee && !ee[_t] && (ee = qr(ee, ve)), dn(function(Ee, Re, Me, ze) {
                    var He, Ye, ht, Tt = [],
                        We = [],
                        Ht = Re.length,
                        Qt = Ee || Xo(F || "*", Me.nodeType ? [Me] : Me, []),
                        fn = R && (Ee || !F) ? tr(Qt, Tt, R, Me, ze) : Qt,
                        At = Y ? ee || (Ee ? R : Ht || fe) ? [] : Re : fn;
                    if (Y && Y(fn, At, Me, ze), fe)
                        for (He = tr(At, We), fe(He, [], Me, ze), Ye = He.length; Ye--;)(ht = He[Ye]) && (At[We[Ye]] = !(fn[We[Ye]] = ht));
                    if (Ee) {
                        if (ee || R) {
                            if (ee) {
                                for (He = [], Ye = At.length; Ye--;)(ht = At[Ye]) && He.push(fn[Ye] = ht);
                                ee(null, At = [], He, ze)
                            }
                            for (Ye = At.length; Ye--;)(ht = At[Ye]) && (He = ee ? Qn(Ee, ht) : Tt[Ye]) > -1 && (Ee[He] = !(Re[He] = ht))
                        }
                    } else At = tr(At === Re ? At.splice(Ht, At.length) : At), ee ? ee(null, Re, At, ze) : Cn.apply(Re, At)
                })
            }

            function Wr(R) {
                for (var F, Y, fe, ee = R.length, ve = p.relative[R[0].type], Ee = ve || p.relative[" "], Re = ve ? 1 : 0, Me = Zi(function(Ye) {
                        return Ye === F
                    }, Ee, !0), ze = Zi(function(Ye) {
                        return Qn(F, Ye) > -1
                    }, Ee, !0), He = [function(Ye, ht, Tt) {
                        var We = !ve && (Tt || ht !== Z) || ((F = ht).nodeType ? Me(Ye, ht, Tt) : ze(Ye, ht, Tt));
                        return F = null, We
                    }]; Re < ee; Re++)
                    if (Y = p.relative[R[Re].type]) He = [Zi(er(He), Y)];
                    else {
                        if (Y = p.filter[R[Re].type].apply(null, R[Re].matches), Y[_t]) {
                            for (fe = ++Re; fe < ee && !p.relative[R[fe].type]; fe++);
                            return qr(Re > 1 && er(He), Re > 1 && Qi(R.slice(0, Re - 1).concat({
                                value: R[Re - 2].type === " " ? "*" : ""
                            })).replace(Si, "$1"), Y, Re < fe && Wr(R.slice(Re, fe)), fe < ee && Wr(R = R.slice(fe)), fe < ee && Qi(R))
                        }
                        He.push(Y)
                    } return er(He)
            }

            function Ds(R, F) {
                var Y = F.length > 0,
                    fe = R.length > 0,
                    ee = function(ve, Ee, Re, Me, ze) {
                        var He, Ye, ht, Tt = 0,
                            We = "0",
                            Ht = ve && [],
                            Qt = [],
                            fn = Z,
                            At = ve || fe && p.find.TAG("*", ze),
                            c = on += fn == null ? 1 : Math.random() || .1,
                            h = At.length;
                        for (ze && (Z = Ee == ue || Ee || ze); We !== h && (He = At[We]) != null; We++) {
                            if (fe && He) {
                                for (Ye = 0, !Ee && He.ownerDocument != ue && (ne(He), Re = !rt); ht = R[Ye++];)
                                    if (ht(He, Ee || ue, Re)) {
                                        Me.push(He);
                                        break
                                    } ze && (on = c)
                            }
                            Y && ((He = !ht && He) && Tt--, ve && Ht.push(He))
                        }
                        if (Tt += We, Y && We !== Tt) {
                            for (Ye = 0; ht = F[Ye++];) ht(Ht, Qt, Ee, Re);
                            if (ve) {
                                if (Tt > 0)
                                    for (; We--;) Ht[We] || Qt[We] || (Qt[We] = Dn.call(Me));
                                Qt = tr(Qt)
                            }
                            Cn.apply(Me, Qt), ze && !ve && Qt.length > 0 && Tt + F.length > 1 && St.uniqueSort(Me)
                        }
                        return ze && (on = c, Z = fn), Ht
                    };
                return Y ? dn(ee) : ee
            }
            return z = St.compile = function(R, F) {
                var Y, fe = [],
                    ee = [],
                    ve = Wi[R + " "];
                if (!ve) {
                    for (F || (F = T(R)), Y = F.length; Y--;) ve = Wr(F[Y]), ve[_t] ? fe.push(ve) : ee.push(ve);
                    ve = Wi(R, Ds(ee, fe)), ve.selector = R
                }
                return ve
            }, G = St.select = function(R, F, Y, fe) {
                var ee, ve, Ee, Re, Me, ze = typeof R == "function" && R,
                    He = !fe && T(R = ze.selector || R);
                if (Y = Y || [], He.length === 1) {
                    if (ve = He[0] = He[0].slice(0), ve.length > 2 && (Ee = ve[0]).type === "ID" && F.nodeType === 9 && rt && p.relative[ve[1].type]) {
                        if (F = (p.find.ID(Ee.matches[0].replace(Tn, xn), F) || [])[0], F) ze && (F = F.parentNode);
                        else return Y;
                        R = R.slice(ve.shift().value.length)
                    }
                    for (ee = Yi.needsContext.test(R) ? 0 : ve.length; ee-- && (Ee = ve[ee], !p.relative[Re = Ee.type]);)
                        if ((Me = p.find[Re]) && (fe = Me(Ee.matches[0].replace(Tn, xn), Gr.test(ve[0].type) && Ur(F.parentNode) || F))) {
                            if (ve.splice(ee, 1), R = fe.length && Qi(ve), !R) return Cn.apply(Y, fe), Y;
                            break
                        }
                }
                return (ze || z(R, He))(fe, F, !rt, Y, !F || Gr.test(R) && Ur(F.parentNode) || F), Y
            }, u.sortStable = _t.split("").sort(Kn).join("") === _t, u.detectDuplicates = !!Ce, ne(), u.sortDetached = yn(function(R) {
                return R.compareDocumentPosition(ue.createElement("fieldset")) & 1
            }), yn(function(R) {
                return R.innerHTML = "<a href='#'></a>", R.firstChild.getAttribute("href") === "#"
            }) || Ki("type|href|height|width", function(R, F, Y) {
                if (!Y) return R.getAttribute(F, F.toLowerCase() === "type" ? 1 : 2)
            }), (!u.attributes || !yn(function(R) {
                return R.innerHTML = "<input/>", R.firstChild.setAttribute("value", ""), R.firstChild.getAttribute("value") === ""
            })) && Ki("value", function(R, F, Y) {
                if (!Y && R.nodeName.toLowerCase() === "input") return R.defaultValue
            }), yn(function(R) {
                return R.getAttribute("disabled") == null
            }) || Ki(Fr, function(R, F, Y) {
                var fe;
                if (!Y) return R[F] === !0 ? F.toLowerCase() : (fe = R.getAttributeNode(F)) && fe.specified ? fe.value : null
            }), St
        }(e);
        f.find = Oe, f.expr = Oe.selectors, f.expr[":"] = f.expr.pseudos, f.uniqueSort = f.unique = Oe.uniqueSort, f.text = Oe.getText, f.isXMLDoc = Oe.isXML, f.contains = Oe.contains, f.escapeSelector = Oe.escape;
        var Pe = function(r, s, u) {
                for (var p = [], b = u !== void 0;
                    (r = r[s]) && r.nodeType !== 9;)
                    if (r.nodeType === 1) {
                        if (b && f(r).is(u)) break;
                        p.push(r)
                    } return p
            },
            lt = function(r, s) {
                for (var u = []; r; r = r.nextSibling) r.nodeType === 1 && r !== s && u.push(r);
                return u
            },
            Ve = f.expr.match.needsContext;

        function K(r, s) {
            return r.nodeName && r.nodeName.toLowerCase() === s.toLowerCase()
        }
        var Fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function H(r, s, u) {
            return re(s) ? f.grep(r, function(p, b) {
                return !!s.call(p, b, p) !== u
            }) : s.nodeType ? f.grep(r, function(p) {
                return p === s !== u
            }) : typeof s != "string" ? f.grep(r, function(p) {
                return k.call(s, p) > -1 !== u
            }) : f.filter(s, r, u)
        }
        f.filter = function(r, s, u) {
            var p = s[0];
            return u && (r = ":not(" + r + ")"), s.length === 1 && p.nodeType === 1 ? f.find.matchesSelector(p, r) ? [p] : [] : f.find.matches(r, f.grep(s, function(b) {
                return b.nodeType === 1
            }))
        }, f.fn.extend({
            find: function(r) {
                var s, u, p = this.length,
                    b = this;
                if (typeof r != "string") return this.pushStack(f(r).filter(function() {
                    for (s = 0; s < p; s++)
                        if (f.contains(b[s], this)) return !0
                }));
                for (u = this.pushStack([]), s = 0; s < p; s++) f.find(r, b[s], u);
                return p > 1 ? f.uniqueSort(u) : u
            },
            filter: function(r) {
                return this.pushStack(H(this, r || [], !1))
            },
            not: function(r) {
                return this.pushStack(H(this, r || [], !0))
            },
            is: function(r) {
                return !!H(this, typeof r == "string" && Ve.test(r) ? f(r) : r || [], !1).length
            }
        });
        var ae, Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
            we = f.fn.init = function(r, s, u) {
                var p, b;
                if (!r) return this;
                if (u = u || ae, typeof r == "string")
                    if (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3 ? p = [null, r, null] : p = Ae.exec(r), p && (p[1] || !s))
                        if (p[1]) {
                            if (s = s instanceof f ? s[0] : s, f.merge(this, f.parseHTML(p[1], s && s.nodeType ? s.ownerDocument || s : P, !0)), Fe.test(p[1]) && f.isPlainObject(s))
                                for (p in s) re(this[p]) ? this[p](s[p]) : this.attr(p, s[p]);
                            return this
                        } else return b = P.getElementById(p[2]), b && (this[0] = b, this.length = 1), this;
                else return !s || s.jquery ? (s || u).find(r) : this.constructor(s).find(r);
                else {
                    if (r.nodeType) return this[0] = r, this.length = 1, this;
                    if (re(r)) return u.ready !== void 0 ? u.ready(r) : r(f)
                }
                return f.makeArray(r, this)
            };
        we.prototype = f.fn, ae = f(P);
        var be = /^(?:parents|prev(?:Until|All))/,
            he = {
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
                    b = this.length,
                    x = [],
                    T = typeof r != "string" && f(r);
                if (!Ve.test(r)) {
                    for (; p < b; p++)
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

        function Se(r, s) {
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
                return r.contentDocument != null && a(r.contentDocument) ? r.contentDocument : (K(r, "template") && (r = r.content || r), f.merge([], r.childNodes))
            }
        }, function(r, s) {
            f.fn[r] = function(u, p) {
                var b = f.map(this, s, u);
                return r.slice(-5) !== "Until" && (p = u), p && typeof p == "string" && (b = f.filter(p, b)), this.length > 1 && (he[r] || f.uniqueSort(b), be.test(r) && b.reverse()), this.pushStack(b)
            }
        });
        var Te = /[^\x20\t\r\n\f]+/g;

        function $e(r) {
            var s = {};
            return f.each(r.match(Te) || [], function(u, p) {
                s[p] = !0
            }), s
        }
        f.Callbacks = function(r) {
            r = typeof r == "string" ? $e(r) : f.extend({}, r);
            var s, u, p, b, x = [],
                T = [],
                z = -1,
                G = function() {
                    for (b = b || r.once, p = s = !0; T.length; z = -1)
                        for (u = T.shift(); ++z < x.length;) x[z].apply(u[0], u[1]) === !1 && r.stopOnFalse && (z = x.length, u = !1);
                    r.memory || (u = !1), s = !1, b && (u ? x = [] : x = "")
                },
                Z = {
                    add: function() {
                        return x && (u && !s && (z = x.length - 1, T.push(u)), function ce(Ce) {
                            f.each(Ce, function(ne, ue) {
                                re(ue) ? (!r.unique || !Z.has(ue)) && x.push(ue) : ue && ue.length && oe(ue) !== "string" && ce(ue)
                            })
                        }(arguments), u && !s && G()), this
                    },
                    remove: function() {
                        return f.each(arguments, function(ce, Ce) {
                            for (var ne;
                                (ne = f.inArray(Ce, x, ne)) > -1;) x.splice(ne, 1), ne <= z && z--
                        }), this
                    },
                    has: function(ce) {
                        return ce ? f.inArray(ce, x) > -1 : x.length > 0
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
                    fireWith: function(ce, Ce) {
                        return b || (Ce = Ce || [], Ce = [ce, Ce.slice ? Ce.slice() : Ce], T.push(Ce), s || G()), this
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

        function $t(r, s, u, p) {
            var b;
            try {
                r && re(b = r.promise) ? b.call(r).done(s).fail(u) : r && re(b = r.then) ? b.call(r, s, u) : s.apply(void 0, [r].slice(p))
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
                            return b.done(arguments).fail(arguments), this
                        },
                        catch: function(x) {
                            return p.then(null, x)
                        },
                        pipe: function() {
                            var x = arguments;
                            return f.Deferred(function(T) {
                                f.each(s, function(z, G) {
                                    var Z = re(x[G[4]]) && x[G[4]];
                                    b[G[1]](function() {
                                        var ce = Z && Z.apply(this, arguments);
                                        ce && re(ce.promise) ? ce.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[G[0] + "With"](this, Z ? [ce] : arguments)
                                    })
                                }), x = null
                            }).promise()
                        },
                        then: function(x, T, z) {
                            var G = 0;

                            function Z(ce, Ce, ne, ue) {
                                return function() {
                                    var Ue = this,
                                        rt = arguments,
                                        je = function() {
                                            var Bt, un;
                                            if (!(ce < G)) {
                                                if (Bt = ne.apply(Ue, rt), Bt === Ce.promise()) throw new TypeError("Thenable self-resolution");
                                                un = Bt && (typeof Bt == "object" || typeof Bt == "function") && Bt.then, re(un) ? ue ? un.call(Bt, Z(G, Ce, Ke, ue), Z(G, Ce, dt, ue)) : (G++, un.call(Bt, Z(G, Ce, Ke, ue), Z(G, Ce, dt, ue), Z(G, Ce, Ke, Ce.notifyWith))) : (ne !== Ke && (Ue = void 0, rt = [Bt]), (ue || Ce.resolveWith)(Ue, rt))
                                            }
                                        },
                                        Gt = ue ? je : function() {
                                            try {
                                                je()
                                            } catch (Bt) {
                                                f.Deferred.exceptionHook && f.Deferred.exceptionHook(Bt, Gt.stackTrace), ce + 1 >= G && (ne !== dt && (Ue = void 0, rt = [Bt]), Ce.rejectWith(Ue, rt))
                                            }
                                        };
                                    ce ? Gt() : (f.Deferred.getStackHook && (Gt.stackTrace = f.Deferred.getStackHook()), e.setTimeout(Gt))
                                }
                            }
                            return f.Deferred(function(ce) {
                                s[0][3].add(Z(0, ce, re(z) ? z : Ke, ce.notifyWith)), s[1][3].add(Z(0, ce, re(x) ? x : Ke)), s[2][3].add(Z(0, ce, re(T) ? T : dt))
                            }).promise()
                        },
                        promise: function(x) {
                            return x != null ? f.extend(x, p) : p
                        }
                    },
                    b = {};
                return f.each(s, function(x, T) {
                    var z = T[2],
                        G = T[5];
                    p[T[1]] = z.add, G && z.add(function() {
                        u = G
                    }, s[3 - x][2].disable, s[3 - x][3].disable, s[0][2].lock, s[0][3].lock), z.add(T[3].fire), b[T[0]] = function() {
                        return b[T[0] + "With"](this === b ? void 0 : this, arguments), this
                    }, b[T[0] + "With"] = z.fireWith
                }), p.promise(b), r && r.call(b, b), b
            },
            when: function(r) {
                var s = arguments.length,
                    u = s,
                    p = Array(u),
                    b = d.call(arguments),
                    x = f.Deferred(),
                    T = function(z) {
                        return function(G) {
                            p[z] = this, b[z] = arguments.length > 1 ? d.call(arguments) : G, --s || x.resolveWith(p, b)
                        }
                    };
                if (s <= 1 && ($t(r, x.done(T(u)).resolve, x.reject, !s), x.state() === "pending" || re(b[u] && b[u].then))) return x.then();
                for (; u--;) $t(b[u], T(u), x.reject);
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
                (r === !0 ? --f.readyWait : f.isReady) || (f.isReady = !0, !(r !== !0 && --f.readyWait > 0) && E.resolveWith(P, [f]))
            }
        }), f.ready.then = E.then;

        function l() {
            P.removeEventListener("DOMContentLoaded", l), e.removeEventListener("load", l), f.ready()
        }
        P.readyState === "complete" || P.readyState !== "loading" && !P.documentElement.doScroll ? e.setTimeout(f.ready) : (P.addEventListener("DOMContentLoaded", l), e.addEventListener("load", l));
        var g = function(r, s, u, p, b, x, T) {
                var z = 0,
                    G = r.length,
                    Z = u == null;
                if (oe(u) === "object") {
                    b = !0;
                    for (z in u) g(r, s, z, u[z], !0, x, T)
                } else if (p !== void 0 && (b = !0, re(p) || (T = !0), Z && (T ? (s.call(r, p), s = null) : (Z = s, s = function(ce, Ce, ne) {
                        return Z.call(f(ce), ne)
                    })), s))
                    for (; z < G; z++) s(r[z], u, T ? p : p.call(r[z], z, s(r[z], u)));
                return b ? r : Z ? s.call(r) : G ? s(r[0], u) : x
            },
            _ = /^-ms-/,
            O = /-([a-z])/g;

        function M(r, s) {
            return s.toUpperCase()
        }

        function B(r) {
            return r.replace(_, "ms-").replace(O, M)
        }
        var te = function(r) {
            return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType
        };

        function ke() {
            this.expando = f.expando + ke.uid++
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
                        for (Array.isArray(s) ? s = s.map(B) : (s = B(s), s = s in p ? [s] : s.match(Te) || []), u = s.length; u--;) delete p[s[u]];
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
            nt = /[A-Z]/g;

        function Ct(r) {
            return r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : r === +r + "" ? +r : De.test(r) ? JSON.parse(r) : r
        }

        function rn(r, s, u) {
            var p;
            if (u === void 0 && r.nodeType === 1)
                if (p = "data-" + s.replace(nt, "-$&").toLowerCase(), u = r.getAttribute(p), typeof u == "string") {
                    try {
                        u = Ct(u)
                    } catch {}
                    Le.set(r, s, u)
                } else u = void 0;
            return u
        }
        f.extend({
            hasData: function(r) {
                return Le.hasData(r) || de.hasData(r)
            },
            data: function(r, s, u) {
                return Le.access(r, s, u)
            },
            removeData: function(r, s) {
                Le.remove(r, s)
            },
            _data: function(r, s, u) {
                return de.access(r, s, u)
            },
            _removeData: function(r, s) {
                de.remove(r, s)
            }
        }), f.fn.extend({
            data: function(r, s) {
                var u, p, b, x = this[0],
                    T = x && x.attributes;
                if (r === void 0) {
                    if (this.length && (b = Le.get(x), x.nodeType === 1 && !de.get(x, "hasDataAttrs"))) {
                        for (u = T.length; u--;) T[u] && (p = T[u].name, p.indexOf("data-") === 0 && (p = B(p.slice(5)), rn(x, p, b[p])));
                        de.set(x, "hasDataAttrs", !0)
                    }
                    return b
                }
                return typeof r == "object" ? this.each(function() {
                    Le.set(this, r)
                }) : g(this, function(z) {
                    var G;
                    if (x && z === void 0) return G = Le.get(x, r), G !== void 0 || (G = rn(x, r), G !== void 0) ? G : void 0;
                    this.each(function() {
                        Le.set(this, r, z)
                    })
                }, null, s, arguments.length > 1, null, !0)
            },
            removeData: function(r) {
                return this.each(function() {
                    Le.remove(this, r)
                })
            }
        }), f.extend({
            queue: function(r, s, u) {
                var p;
                if (r) return s = (s || "fx") + "queue", p = de.get(r, s), u && (!p || Array.isArray(u) ? p = de.access(r, s, f.makeArray(u)) : p.push(u)), p || []
            },
            dequeue: function(r, s) {
                s = s || "fx";
                var u = f.queue(r, s),
                    p = u.length,
                    b = u.shift(),
                    x = f._queueHooks(r, s),
                    T = function() {
                        f.dequeue(r, s)
                    };
                b === "inprogress" && (b = u.shift(), p--), b && (s === "fx" && u.unshift("inprogress"), delete x.stop, b.call(r, T, x)), !p && x && x.empty.fire()
            },
            _queueHooks: function(r, s) {
                var u = s + "queueHooks";
                return de.get(r, u) || de.access(r, u, {
                    empty: f.Callbacks("once memory").add(function() {
                        de.remove(r, [s + "queue", u])
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
                    b = f.Deferred(),
                    x = this,
                    T = this.length,
                    z = function() {
                        --p || b.resolveWith(x, [x])
                    };
                for (typeof r != "string" && (s = r, r = void 0), r = r || "fx"; T--;) u = de.get(x[T], r + "queueHooks"), u && u.empty && (p++, u.empty.add(z));
                return z(), b.promise(s)
            }
        });
        var ct = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            yt = new RegExp("^(?:([+-])=|)(" + ct + ")([a-z%]*)$", "i"),
            wt = ["Top", "Right", "Bottom", "Left"],
            Jt = P.documentElement,
            Je = function(r) {
                return f.contains(r.ownerDocument, r)
            },
            Pt = {
                composed: !0
            };
        Jt.getRootNode && (Je = function(r) {
            return f.contains(r.ownerDocument, r) || r.getRootNode(Pt) === r.ownerDocument
        });
        var j = function(r, s) {
            return r = s || r, r.style.display === "none" || r.style.display === "" && Je(r) && f.css(r, "display") === "none"
        };

        function N(r, s, u, p) {
            var b, x, T = 20,
                z = p ? function() {
                    return p.cur()
                } : function() {
                    return f.css(r, s, "")
                },
                G = z(),
                Z = u && u[3] || (f.cssNumber[s] ? "" : "px"),
                ce = r.nodeType && (f.cssNumber[s] || Z !== "px" && +G) && yt.exec(f.css(r, s));
            if (ce && ce[3] !== Z) {
                for (G = G / 2, Z = Z || ce[3], ce = +G || 1; T--;) f.style(r, s, ce + Z), (1 - x) * (1 - (x = z() / G || .5)) <= 0 && (T = 0), ce = ce / x;
                ce = ce * 2, f.style(r, s, ce + Z), u = u || []
            }
            return u && (ce = +ce || +G || 0, b = u[1] ? ce + (u[1] + 1) * u[2] : +u[2], p && (p.unit = Z, p.start = ce, p.end = b)), b
        }
        var W = {};

        function D(r) {
            var s, u = r.ownerDocument,
                p = r.nodeName,
                b = W[p];
            return b || (s = u.body.appendChild(u.createElement(p)), b = f.css(s, "display"), s.parentNode.removeChild(s), b === "none" && (b = "block"), W[p] = b, b)
        }

        function U(r, s) {
            for (var u, p, b = [], x = 0, T = r.length; x < T; x++) p = r[x], p.style && (u = p.style.display, s ? (u === "none" && (b[x] = de.get(p, "display") || null, b[x] || (p.style.display = "")), p.style.display === "" && j(p) && (b[x] = D(p))) : u !== "none" && (b[x] = "none", de.set(p, "display", u)));
            for (x = 0; x < T; x++) b[x] != null && (r[x].style.display = b[x]);
            return r
        }
        f.fn.extend({
            show: function() {
                return U(this, !0)
            },
            hide: function() {
                return U(this)
            },
            toggle: function(r) {
                return typeof r == "boolean" ? r ? this.show() : this.hide() : this.each(function() {
                    j(this) ? f(this).show() : f(this).hide()
                })
            }
        });
        var pe = /^(?:checkbox|radio)$/i,
            ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            Ne = /^$|^module$|\/(?:java|ecma)script/i;
        (function() {
            var r = P.createDocumentFragment(),
                s = r.appendChild(P.createElement("div")),
                u = P.createElement("input");
            u.setAttribute("type", "radio"), u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), s.appendChild(u), X.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, s.innerHTML = "<textarea>x</textarea>", X.noCloneChecked = !!s.cloneNode(!0).lastChild.defaultValue, s.innerHTML = "<option></option>", X.option = !!s.lastChild
        })();
        var Be = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, X.option || (Be.optgroup = Be.option = [1, "<select multiple='multiple'>", "</select>"]);

        function pt(r, s) {
            var u;
            return typeof r.getElementsByTagName < "u" ? u = r.getElementsByTagName(s || "*") : typeof r.querySelectorAll < "u" ? u = r.querySelectorAll(s || "*") : u = [], s === void 0 || s && K(r, s) ? f.merge([r], u) : u
        }

        function Ft(r, s) {
            for (var u = 0, p = r.length; u < p; u++) de.set(r[u], "globalEval", !s || de.get(s[u], "globalEval"))
        }
        var Xe = /<|&#?\w+;/;

        function In(r, s, u, p, b) {
            for (var x, T, z, G, Z, ce, Ce = s.createDocumentFragment(), ne = [], ue = 0, Ue = r.length; ue < Ue; ue++)
                if (x = r[ue], x || x === 0)
                    if (oe(x) === "object") f.merge(ne, x.nodeType ? [x] : x);
                    else if (!Xe.test(x)) ne.push(s.createTextNode(x));
            else {
                for (T = T || Ce.appendChild(s.createElement("div")), z = (ge.exec(x) || ["", ""])[1].toLowerCase(), G = Be[z] || Be._default, T.innerHTML = G[1] + f.htmlPrefilter(x) + G[2], ce = G[0]; ce--;) T = T.lastChild;
                f.merge(ne, T.childNodes), T = Ce.firstChild, T.textContent = ""
            }
            for (Ce.textContent = "", ue = 0; x = ne[ue++];) {
                if (p && f.inArray(x, p) > -1) {
                    b && b.push(x);
                    continue
                }
                if (Z = Je(x), T = pt(Ce.appendChild(x), "script"), Z && Ft(T), u)
                    for (ce = 0; x = T[ce++];) Ne.test(x.type || "") && u.push(x)
            }
            return Ce
        }
        var Pn = /^([^.]*)(?:\.(.+)|)/;

        function it() {
            return !0
        }

        function Ln() {
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

        function kn(r, s, u, p, b, x) {
            var T, z;
            if (typeof s == "object") {
                typeof u != "string" && (p = p || u, u = void 0);
                for (z in s) kn(r, z, u, p, s[z], x);
                return r
            }
            if (p == null && b == null ? (b = u, p = u = void 0) : b == null && (typeof u == "string" ? (b = p, p = void 0) : (b = p, p = u, u = void 0)), b === !1) b = Ln;
            else if (!b) return r;
            return x === 1 && (T = b, b = function(G) {
                return f().off(G), T.apply(this, arguments)
            }, b.guid = T.guid || (T.guid = f.guid++)), r.each(function() {
                f.event.add(this, s, b, p, u)
            })
        }
        f.event = {
            global: {},
            add: function(r, s, u, p, b) {
                var x, T, z, G, Z, ce, Ce, ne, ue, Ue, rt, je = de.get(r);
                if (!!te(r))
                    for (u.handler && (x = u, u = x.handler, b = x.selector), b && f.find.matchesSelector(Jt, b), u.guid || (u.guid = f.guid++), (G = je.events) || (G = je.events = Object.create(null)), (T = je.handle) || (T = je.handle = function(Gt) {
                            return typeof f < "u" && f.event.triggered !== Gt.type ? f.event.dispatch.apply(r, arguments) : void 0
                        }), s = (s || "").match(Te) || [""], Z = s.length; Z--;) z = Pn.exec(s[Z]) || [], ue = rt = z[1], Ue = (z[2] || "").split(".").sort(), ue && (Ce = f.event.special[ue] || {}, ue = (b ? Ce.delegateType : Ce.bindType) || ue, Ce = f.event.special[ue] || {}, ce = f.extend({
                        type: ue,
                        origType: rt,
                        data: p,
                        handler: u,
                        guid: u.guid,
                        selector: b,
                        needsContext: b && f.expr.match.needsContext.test(b),
                        namespace: Ue.join(".")
                    }, x), (ne = G[ue]) || (ne = G[ue] = [], ne.delegateCount = 0, (!Ce.setup || Ce.setup.call(r, p, Ue, T) === !1) && r.addEventListener && r.addEventListener(ue, T)), Ce.add && (Ce.add.call(r, ce), ce.handler.guid || (ce.handler.guid = u.guid)), b ? ne.splice(ne.delegateCount++, 0, ce) : ne.push(ce), f.event.global[ue] = !0)
            },
            remove: function(r, s, u, p, b) {
                var x, T, z, G, Z, ce, Ce, ne, ue, Ue, rt, je = de.hasData(r) && de.get(r);
                if (!(!je || !(G = je.events))) {
                    for (s = (s || "").match(Te) || [""], Z = s.length; Z--;) {
                        if (z = Pn.exec(s[Z]) || [], ue = rt = z[1], Ue = (z[2] || "").split(".").sort(), !ue) {
                            for (ue in G) f.event.remove(r, ue + s[Z], u, p, !0);
                            continue
                        }
                        for (Ce = f.event.special[ue] || {}, ue = (p ? Ce.delegateType : Ce.bindType) || ue, ne = G[ue] || [], z = z[2] && new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)"), T = x = ne.length; x--;) ce = ne[x], (b || rt === ce.origType) && (!u || u.guid === ce.guid) && (!z || z.test(ce.namespace)) && (!p || p === ce.selector || p === "**" && ce.selector) && (ne.splice(x, 1), ce.selector && ne.delegateCount--, Ce.remove && Ce.remove.call(r, ce));
                        T && !ne.length && ((!Ce.teardown || Ce.teardown.call(r, Ue, je.handle) === !1) && f.removeEvent(r, ue, je.handle), delete G[ue])
                    }
                    f.isEmptyObject(G) && de.remove(r, "handle events")
                }
            },
            dispatch: function(r) {
                var s, u, p, b, x, T, z = new Array(arguments.length),
                    G = f.event.fix(r),
                    Z = (de.get(this, "events") || Object.create(null))[G.type] || [],
                    ce = f.event.special[G.type] || {};
                for (z[0] = G, s = 1; s < arguments.length; s++) z[s] = arguments[s];
                if (G.delegateTarget = this, !(ce.preDispatch && ce.preDispatch.call(this, G) === !1)) {
                    for (T = f.event.handlers.call(this, G, Z), s = 0;
                        (b = T[s++]) && !G.isPropagationStopped();)
                        for (G.currentTarget = b.elem, u = 0;
                            (x = b.handlers[u++]) && !G.isImmediatePropagationStopped();)(!G.rnamespace || x.namespace === !1 || G.rnamespace.test(x.namespace)) && (G.handleObj = x, G.data = x.data, p = ((f.event.special[x.origType] || {}).handle || x.handler).apply(b.elem, z), p !== void 0 && (G.result = p) === !1 && (G.preventDefault(), G.stopPropagation()));
                    return ce.postDispatch && ce.postDispatch.call(this, G), G.result
                }
            },
            handlers: function(r, s) {
                var u, p, b, x, T, z = [],
                    G = s.delegateCount,
                    Z = r.target;
                if (G && Z.nodeType && !(r.type === "click" && r.button >= 1)) {
                    for (; Z !== this; Z = Z.parentNode || this)
                        if (Z.nodeType === 1 && !(r.type === "click" && Z.disabled === !0)) {
                            for (x = [], T = {}, u = 0; u < G; u++) p = s[u], b = p.selector + " ", T[b] === void 0 && (T[b] = p.needsContext ? f(b, this).index(Z) > -1 : f.find(b, this, null, [Z]).length), T[b] && x.push(p);
                            x.length && z.push({
                                elem: Z,
                                handlers: x
                            })
                        }
                }
                return Z = this, G < s.length && z.push({
                    elem: Z,
                    handlers: s.slice(G)
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
                de.get(r, s) === void 0 && f.event.add(r, s, it);
                return
            }
            de.set(r, s, !1), f.event.add(r, s, {
                namespace: !1,
                handler: function(p) {
                    var b, x, T = de.get(this, s);
                    if (p.isTrigger & 1 && this[s]) {
                        if (T.length)(f.event.special[s] || {}).delegateType && p.stopPropagation();
                        else if (T = d.call(arguments), de.set(this, s, T), b = u(this, s), this[s](), x = de.get(this, s), T !== x || b ? de.set(this, s, !1) : x = {}, T !== x) return p.stopImmediatePropagation(), p.preventDefault(), x && x.value
                    } else T.length && (de.set(this, s, {
                        value: f.event.trigger(f.extend(T[0], f.Event.prototype), T.slice(1), this)
                    }), p.stopImmediatePropagation())
                }
            })
        }
        f.removeEvent = function(r, s, u) {
            r.removeEventListener && r.removeEventListener(s, u)
        }, f.Event = function(r, s) {
            if (!(this instanceof f.Event)) return new f.Event(r, s);
            r && r.type ? (this.originalEvent = r, this.type = r.type, this.isDefaultPrevented = r.defaultPrevented || r.defaultPrevented === void 0 && r.returnValue === !1 ? it : Ln, this.target = r.target && r.target.nodeType === 3 ? r.target.parentNode : r.target, this.currentTarget = r.currentTarget, this.relatedTarget = r.relatedTarget) : this.type = r, s && f.extend(this, s), this.timeStamp = r && r.timeStamp || Date.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            constructor: f.Event,
            isDefaultPrevented: Ln,
            isPropagationStopped: Ln,
            isImmediatePropagationStopped: Ln,
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
                    var p, b = this,
                        x = u.relatedTarget,
                        T = u.handleObj;
                    return (!x || x !== b && !f.contains(b, x)) && (u.type = T.origType, p = T.handler.apply(this, arguments), u.type = s), p
                }
            }
        }), f.fn.extend({
            on: function(r, s, u, p) {
                return kn(this, r, s, u, p)
            },
            one: function(r, s, u, p) {
                return kn(this, r, s, u, p, 1)
            },
            off: function(r, s, u) {
                var p, b;
                if (r && r.preventDefault && r.handleObj) return p = r.handleObj, f(r.delegateTarget).off(p.namespace ? p.origType + "." + p.namespace : p.origType, p.selector, p.handler), this;
                if (typeof r == "object") {
                    for (b in r) this.off(b, s, r[b]);
                    return this
                }
                return (s === !1 || typeof s == "function") && (u = s, s = void 0), u === !1 && (u = Ln), this.each(function() {
                    f.event.remove(this, r, u, s)
                })
            }
        });
        var kr = /<script|<style|<link/i,
            Tr = /checked\s*(?:[^=]|=\s*.checked.)/i,
            mi = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function $i(r, s) {
            return K(r, "table") && K(s.nodeType !== 11 ? s : s.firstChild, "tr") && f(r).children("tbody")[0] || r
        }

        function vi(r) {
            return r.type = (r.getAttribute("type") !== null) + "/" + r.type, r
        }

        function yi(r) {
            return (r.type || "").slice(0, 5) === "true/" ? r.type = r.type.slice(5) : r.removeAttribute("type"), r
        }

        function ji(r, s) {
            var u, p, b, x, T, z, G;
            if (s.nodeType === 1) {
                if (de.hasData(r) && (x = de.get(r), G = x.events, G)) {
                    de.remove(s, "handle events");
                    for (b in G)
                        for (u = 0, p = G[b].length; u < p; u++) f.event.add(s, b, G[b][u])
                }
                Le.hasData(r) && (T = Le.access(r), z = f.extend({}, T), Le.set(s, z))
            }
        }

        function Fi(r, s) {
            var u = s.nodeName.toLowerCase();
            u === "input" && pe.test(r.type) ? s.checked = r.checked : (u === "input" || u === "textarea") && (s.defaultValue = r.defaultValue)
        }

        function mn(r, s, u, p) {
            s = m(s);
            var b, x, T, z, G, Z, ce = 0,
                Ce = r.length,
                ne = Ce - 1,
                ue = s[0],
                Ue = re(ue);
            if (Ue || Ce > 1 && typeof ue == "string" && !X.checkClone && Tr.test(ue)) return r.each(function(rt) {
                var je = r.eq(rt);
                Ue && (s[0] = ue.call(this, rt, je.html())), mn(je, s, u, p)
            });
            if (Ce && (b = In(s, r[0].ownerDocument, !1, r, p), x = b.firstChild, b.childNodes.length === 1 && (b = x), x || p)) {
                for (T = f.map(pt(b, "script"), vi), z = T.length; ce < Ce; ce++) G = b, ce !== ne && (G = f.clone(G, !0, !0), z && f.merge(T, pt(G, "script"))), u.call(r[ce], G, ce);
                if (z)
                    for (Z = T[T.length - 1].ownerDocument, f.map(T, yi), ce = 0; ce < z; ce++) G = T[ce], Ne.test(G.type || "") && !de.access(G, "globalEval") && f.contains(Z, G) && (G.src && (G.type || "").toLowerCase() !== "module" ? f._evalUrl && !G.noModule && f._evalUrl(G.src, {
                        nonce: G.nonce || G.getAttribute("nonce")
                    }, Z) : le(G.textContent.replace(mi, ""), G, Z))
            }
            return r
        }

        function zi(r, s, u) {
            for (var p, b = s ? f.filter(s, r) : r, x = 0;
                (p = b[x]) != null; x++) !u && p.nodeType === 1 && f.cleanData(pt(p)), p.parentNode && (u && Je(p) && Ft(pt(p, "script")), p.parentNode.removeChild(p));
            return r
        }
        f.extend({
            htmlPrefilter: function(r) {
                return r
            },
            clone: function(r, s, u) {
                var p, b, x, T, z = r.cloneNode(!0),
                    G = Je(r);
                if (!X.noCloneChecked && (r.nodeType === 1 || r.nodeType === 11) && !f.isXMLDoc(r))
                    for (T = pt(z), x = pt(r), p = 0, b = x.length; p < b; p++) Fi(x[p], T[p]);
                if (s)
                    if (u)
                        for (x = x || pt(r), T = T || pt(z), p = 0, b = x.length; p < b; p++) ji(x[p], T[p]);
                    else ji(r, z);
                return T = pt(z, "script"), T.length > 0 && Ft(T, !G && pt(r, "script")), z
            },
            cleanData: function(r) {
                for (var s, u, p, b = f.event.special, x = 0;
                    (u = r[x]) !== void 0; x++)
                    if (te(u)) {
                        if (s = u[de.expando]) {
                            if (s.events)
                                for (p in s.events) b[p] ? f.event.remove(u, p) : f.removeEvent(u, p, s.handle);
                            u[de.expando] = void 0
                        }
                        u[Le.expando] && (u[Le.expando] = void 0)
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
                        b = this.length;
                    if (s === void 0 && u.nodeType === 1) return u.innerHTML;
                    if (typeof s == "string" && !kr.test(s) && !Be[(ge.exec(s) || ["", ""])[1].toLowerCase()]) {
                        s = f.htmlPrefilter(s);
                        try {
                            for (; p < b; p++) u = this[p] || {}, u.nodeType === 1 && (f.cleanData(pt(u, !1)), u.innerHTML = s);
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
                for (var p, b = [], x = f(u), T = x.length - 1, z = 0; z <= T; z++) p = z === T ? this : this.clone(!0), f(x[z])[s](p), S.apply(b, p.get());
                return this.pushStack(b)
            }
        });
        var bi = new RegExp("^(" + ct + ")(?!px)[a-z%]+$", "i"),
            Gn = function(r) {
                var s = r.ownerDocument.defaultView;
                return (!s || !s.opener) && (s = e), s.getComputedStyle(r)
            },
            Gi = function(r, s, u) {
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
                    G.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Z.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Jt.appendChild(G).appendChild(Z);
                    var ce = e.getComputedStyle(Z);
                    u = ce.top !== "1%", z = s(ce.marginLeft) === 12, Z.style.right = "60%", x = s(ce.right) === 36, p = s(ce.width) === 36, Z.style.position = "absolute", b = s(Z.offsetWidth / 3) === 12, Jt.removeChild(G), Z = null
                }
            }

            function s(ce) {
                return Math.round(parseFloat(ce))
            }
            var u, p, b, x, T, z, G = P.createElement("div"),
                Z = P.createElement("div");
            !Z.style || (Z.style.backgroundClip = "content-box", Z.cloneNode(!0).style.backgroundClip = "", X.clearCloneStyle = Z.style.backgroundClip === "content-box", f.extend(X, {
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
                    var ce, Ce, ne, ue;
                    return T == null && (ce = P.createElement("table"), Ce = P.createElement("tr"), ne = P.createElement("div"), ce.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", Ce.style.cssText = "border:1px solid", Ce.style.height = "1px", ne.style.height = "9px", ne.style.display = "block", Jt.appendChild(ce).appendChild(Ce).appendChild(ne), ue = e.getComputedStyle(Ce), T = parseInt(ue.height, 10) + parseInt(ue.borderTopWidth, 10) + parseInt(ue.borderBottomWidth, 10) === Ce.offsetHeight, Jt.removeChild(ce)), T
                }
            }))
        })();

        function Ze(r, s, u) {
            var p, b, x, T, z = r.style;
            return u = u || Gn(r), u && (T = u.getPropertyValue(s) || u[s], T === "" && !Je(r) && (T = f.style(r, s)), !X.pixelBoxStyles() && bi.test(T) && wi.test(s) && (p = z.width, b = z.minWidth, x = z.maxWidth, z.minWidth = z.maxWidth = z.width = T, T = u.width, z.width = p, z.minWidth = b, z.maxWidth = x)), T !== void 0 ? T + "" : T
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
            var s = f.cssProps[r] || A[r];
            return s || (r in C ? r : A[r] = Q(r) || r)
        }
        var qe = /^(none|table(?!-c[ea]).+)/,
            It = /^--/,
            Yt = {
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

        function Un(r, s, u, p, b, x) {
            var T = s === "width" ? 1 : 0,
                z = 0,
                G = 0;
            if (u === (p ? "border" : "content")) return 0;
            for (; T < 4; T += 2) u === "margin" && (G += f.css(r, u + wt[T], !0, b)), p ? (u === "content" && (G -= f.css(r, "padding" + wt[T], !0, b)), u !== "margin" && (G -= f.css(r, "border" + wt[T] + "Width", !0, b))) : (G += f.css(r, "padding" + wt[T], !0, b), u !== "padding" ? G += f.css(r, "border" + wt[T] + "Width", !0, b) : z += f.css(r, "border" + wt[T] + "Width", !0, b));
            return !p && x >= 0 && (G += Math.max(0, Math.ceil(r["offset" + s[0].toUpperCase() + s.slice(1)] - x - G - z - .5)) || 0), G
        }

        function Ar(r, s, u) {
            var p = Gn(r),
                b = !X.boxSizingReliable() || u,
                x = b && f.css(r, "boxSizing", !1, p) === "border-box",
                T = x,
                z = Ze(r, s, p),
                G = "offset" + s[0].toUpperCase() + s.slice(1);
            if (bi.test(z)) {
                if (!u) return z;
                z = "auto"
            }
            return (!X.boxSizingReliable() && x || !X.reliableTrDimensions() && K(r, "tr") || z === "auto" || !parseFloat(z) && f.css(r, "display", !1, p) === "inline") && r.getClientRects().length && (x = f.css(r, "boxSizing", !1, p) === "border-box", T = G in r, T && (z = r[G])), z = parseFloat(z) || 0, z + Un(r, s, u || (x ? "border" : "content"), T, p, z) + "px"
        }
        f.extend({
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
                        G = It.test(s),
                        Z = r.style;
                    if (G || (s = xe(z)), T = f.cssHooks[s] || f.cssHooks[z], u !== void 0) {
                        if (x = typeof u, x === "string" && (b = yt.exec(u)) && b[1] && (u = N(r, s, b), x = "number"), u == null || u !== u) return;
                        x === "number" && !G && (u += b && b[3] || (f.cssNumber[z] ? "" : "px")), !X.clearCloneStyle && u === "" && s.indexOf("background") === 0 && (Z[s] = "inherit"), (!T || !("set" in T) || (u = T.set(r, u, p)) !== void 0) && (G ? Z.setProperty(s, u) : Z[s] = u)
                    } else return T && "get" in T && (b = T.get(r, !1, p)) !== void 0 ? b : Z[s]
                }
            },
            css: function(r, s, u, p) {
                var b, x, T, z = B(s),
                    G = It.test(s);
                return G || (s = xe(z)), T = f.cssHooks[s] || f.cssHooks[z], T && "get" in T && (b = T.get(r, !0, u)), b === void 0 && (b = Ze(r, s, p)), b === "normal" && s in Hn && (b = Hn[s]), u === "" || u ? (x = parseFloat(b), u === !0 || isFinite(x) ? x || 0 : b) : b
            }
        }), f.each(["height", "width"], function(r, s) {
            f.cssHooks[s] = {
                get: function(u, p, b) {
                    if (p) return qe.test(f.css(u, "display")) && (!u.getClientRects().length || !u.getBoundingClientRect().width) ? Gi(u, Yt, function() {
                        return Ar(u, s, b)
                    }) : Ar(u, s, b)
                },
                set: function(u, p, b) {
                    var x, T = Gn(u),
                        z = !X.scrollboxSize() && T.position === "absolute",
                        G = z || b,
                        Z = G && f.css(u, "boxSizing", !1, T) === "border-box",
                        ce = b ? Un(u, s, b, Z, T) : 0;
                    return Z && z && (ce -= Math.ceil(u["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(T[s]) - Un(u, s, "border", !1, T) - .5)), ce && (x = yt.exec(p)) && (x[3] || "px") !== "px" && (u.style[s] = p, p = f.css(u, s)), Nn(u, p, ce)
                }
            }
        }), f.cssHooks.marginLeft = y(X.reliableMarginLeft, function(r, s) {
            if (s) return (parseFloat(Ze(r, "marginLeft")) || r.getBoundingClientRect().left - Gi(r, {
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
                    for (var p = 0, b = {}, x = typeof u == "string" ? u.split(" ") : [u]; p < 4; p++) b[r + wt[p] + s] = x[p] || x[p - 2] || x[0];
                    return b
                }
            }, r !== "margin" && (f.cssHooks[r + s].set = Nn)
        }), f.fn.extend({
            css: function(r, s) {
                return g(this, function(u, p, b) {
                    var x, T, z = {},
                        G = 0;
                    if (Array.isArray(p)) {
                        for (x = Gn(u), T = p.length; G < T; G++) z[p[G]] = f.css(u, p[G], !1, x);
                        return z
                    }
                    return b !== void 0 ? f.style(u, p, b) : f.css(u, p)
                }, r, s, arguments.length > 1)
            }
        });

        function Xt(r, s, u, p, b) {
            return new Xt.prototype.init(r, s, u, p, b)
        }
        f.Tween = Xt, Xt.prototype = {
            constructor: Xt,
            init: function(r, s, u, p, b, x) {
                this.elem = r, this.prop = u, this.easing = b || f.easing._default, this.options = s, this.start = this.now = this.cur(), this.end = p, this.unit = x || (f.cssNumber[u] ? "" : "px")
            },
            cur: function() {
                var r = Xt.propHooks[this.prop];
                return r && r.get ? r.get(this) : Xt.propHooks._default.get(this)
            },
            run: function(r) {
                var s, u = Xt.propHooks[this.prop];
                return this.options.duration ? this.pos = s = f.easing[this.easing](r, this.options.duration * r, 0, 1, this.options.duration) : this.pos = s = r, this.now = (this.end - this.start) * s + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), u && u.set ? u.set(this) : Xt.propHooks._default.set(this), this
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
        var zt, Hi, wo = /^(?:toggle|show|hide)$/,
            Co = /queueHooks$/;

        function Or() {
            Hi && (P.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(Or) : e.setTimeout(Or, f.fx.interval), f.fx.tick())
        }

        function Rr() {
            return e.setTimeout(function() {
                zt = void 0
            }), zt = Date.now()
        }

        function Ui(r, s) {
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

        function xo(r, s, u) {
            var p, b, x, T, z, G, Z, ce, Ce = "width" in s || "height" in s,
                ne = this,
                ue = {},
                Ue = r.style,
                rt = r.nodeType && j(r),
                je = de.get(r, "fxshow");
            u.queue || (T = f._queueHooks(r, "fx"), T.unqueued == null && (T.unqueued = 0, z = T.empty.fire, T.empty.fire = function() {
                T.unqueued || z()
            }), T.unqueued++, ne.always(function() {
                ne.always(function() {
                    T.unqueued--, f.queue(r, "fx").length || T.empty.fire()
                })
            }));
            for (p in s)
                if (b = s[p], wo.test(b)) {
                    if (delete s[p], x = x || b === "toggle", b === (rt ? "hide" : "show"))
                        if (b === "show" && je && je[p] !== void 0) rt = !0;
                        else continue;
                    ue[p] = je && je[p] || f.style(r, p)
                } if (G = !f.isEmptyObject(s), !(!G && f.isEmptyObject(ue))) {
                Ce && r.nodeType === 1 && (u.overflow = [Ue.overflow, Ue.overflowX, Ue.overflowY], Z = je && je.display, Z == null && (Z = de.get(r, "display")), ce = f.css(r, "display"), ce === "none" && (Z ? ce = Z : (U([r], !0), Z = r.style.display || Z, ce = f.css(r, "display"), U([r]))), (ce === "inline" || ce === "inline-block" && Z != null) && f.css(r, "float") === "none" && (G || (ne.done(function() {
                    Ue.display = Z
                }), Z == null && (ce = Ue.display, Z = ce === "none" ? "" : ce)), Ue.display = "inline-block")), u.overflow && (Ue.overflow = "hidden", ne.always(function() {
                    Ue.overflow = u.overflow[0], Ue.overflowX = u.overflow[1], Ue.overflowY = u.overflow[2]
                })), G = !1;
                for (p in ue) G || (je ? "hidden" in je && (rt = je.hidden) : je = de.access(r, "fxshow", {
                    display: Z
                }), x && (je.hidden = !rt), rt && U([r], !0), ne.done(function() {
                    rt || U([r]), de.remove(r, "fxshow");
                    for (p in ue) f.style(r, p, ue[p])
                })), G = gs(rt ? je[p] : 0, p, ne), p in je || (je[p] = G.start, rt && (G.end = G.start, G.start = 0))
            }
        }

        function ms(r, s) {
            var u, p, b, x, T;
            for (u in r)
                if (p = B(u), b = s[p], x = r[u], Array.isArray(x) && (b = x[1], x = r[u] = x[0]), u !== p && (r[p] = x, delete r[u]), T = f.cssHooks[p], T && "expand" in T) {
                    x = T.expand(x), delete r[p];
                    for (u in x) u in r || (r[u] = x[u], s[u] = b)
                } else s[p] = b
        }

        function wn(r, s, u) {
            var p, b, x = 0,
                T = wn.prefilters.length,
                z = f.Deferred().always(function() {
                    delete G.elem
                }),
                G = function() {
                    if (b) return !1;
                    for (var Ce = zt || Rr(), ne = Math.max(0, Z.startTime + Z.duration - Ce), ue = ne / Z.duration || 0, Ue = 1 - ue, rt = 0, je = Z.tweens.length; rt < je; rt++) Z.tweens[rt].run(Ue);
                    return z.notifyWith(r, [Z, Ue, ne]), Ue < 1 && je ? ne : (je || z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z]), !1)
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
                    startTime: zt || Rr(),
                    duration: u.duration,
                    tweens: [],
                    createTween: function(Ce, ne) {
                        var ue = f.Tween(r, Z.opts, Ce, ne, Z.opts.specialEasing[Ce] || Z.opts.easing);
                        return Z.tweens.push(ue), ue
                    },
                    stop: function(Ce) {
                        var ne = 0,
                            ue = Ce ? Z.tweens.length : 0;
                        if (b) return this;
                        for (b = !0; ne < ue; ne++) Z.tweens[ne].run(1);
                        return Ce ? (z.notifyWith(r, [Z, 1, 0]), z.resolveWith(r, [Z, Ce])) : z.rejectWith(r, [Z, Ce]), this
                    }
                }),
                ce = Z.props;
            for (ms(ce, Z.opts.specialEasing); x < T; x++)
                if (p = wn.prefilters[x].call(Z, r, ce, Z.opts), p) return re(p.stop) && (f._queueHooks(Z.elem, Z.opts.queue).stop = p.stop.bind(p)), p;
            return f.map(ce, gs, Z), re(Z.opts.start) && Z.opts.start.call(r, Z), Z.progress(Z.opts.progress).done(Z.opts.done, Z.opts.complete).fail(Z.opts.fail).always(Z.opts.always), f.fx.timer(f.extend(G, {
                elem: r,
                anim: Z,
                queue: Z.opts.queue
            })), Z
        }
        f.Animation = f.extend(wn, {
                tweeners: {
                    "*": [function(r, s) {
                        var u = this.createTween(r, s);
                        return N(u.elem, r, yt.exec(s), u), u
                    }]
                },
                tweener: function(r, s) {
                    re(r) ? (s = r, r = ["*"]) : r = r.match(Te);
                    for (var u, p = 0, b = r.length; p < b; p++) u = r[p], wn.tweeners[u] = wn.tweeners[u] || [], wn.tweeners[u].unshift(s)
                },
                prefilters: [xo],
                prefilter: function(r, s) {
                    s ? wn.prefilters.unshift(r) : wn.prefilters.push(r)
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
                    return this.filter(j).css("opacity", 0).show().end().animate({
                        opacity: s
                    }, r, u, p)
                },
                animate: function(r, s, u, p) {
                    var b = f.isEmptyObject(r),
                        x = f.speed(s, u, p),
                        T = function() {
                            var z = wn(this, f.extend({}, r), x);
                            (b || de.get(this, "finish")) && z.stop(!0)
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
                            T = f.timers,
                            z = de.get(this);
                        if (x) z[x] && z[x].stop && p(z[x]);
                        else
                            for (x in z) z[x] && z[x].stop && Co.test(x) && p(z[x]);
                        for (x = T.length; x--;) T[x].elem === this && (r == null || T[x].queue === r) && (T[x].anim.stop(u), b = !1, T.splice(x, 1));
                        (b || !u) && f.dequeue(this, r)
                    })
                },
                finish: function(r) {
                    return r !== !1 && (r = r || "fx"), this.each(function() {
                        var s, u = de.get(this),
                            p = u[r + "queue"],
                            b = u[r + "queueHooks"],
                            x = f.timers,
                            T = p ? p.length : 0;
                        for (u.finish = !0, f.queue(this, r, []), b && b.stop && b.stop.call(this, !0), s = x.length; s--;) x[s].elem === this && x[s].queue === r && (x[s].anim.stop(!0), x.splice(s, 1));
                        for (s = 0; s < T; s++) p[s] && p[s].finish && p[s].finish.call(this);
                        delete u.finish
                    })
                }
            }), f.each(["toggle", "show", "hide"], function(r, s) {
                var u = f.fn[s];
                f.fn[s] = function(p, b, x) {
                    return p == null || typeof p == "boolean" ? u.apply(this, arguments) : this.animate(Ui(s, !0), p, b, x)
                }
            }), f.each({
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
                f.fn[r] = function(u, p, b) {
                    return this.animate(s, u, p, b)
                }
            }), f.timers = [], f.fx.tick = function() {
                var r, s = 0,
                    u = f.timers;
                for (zt = Date.now(); s < u.length; s++) r = u[s], !r() && u[s] === r && u.splice(s--, 1);
                u.length || f.fx.stop(), zt = void 0
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
                return r = f.fx && f.fx.speeds[r] || r, s = s || "fx", this.queue(s, function(u, p) {
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
                r.type = "checkbox", X.checkOn = r.value !== "", X.optSelected = u.selected, r = P.createElement("input"), r.value = "t", r.type = "radio", X.radioValue = r.value === "t"
            }();
        var Ir, Ci = f.expr.attrHandle;
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
                var p, b, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) {
                    if (typeof r.getAttribute > "u") return f.prop(r, s, u);
                    if ((x !== 1 || !f.isXMLDoc(r)) && (b = f.attrHooks[s.toLowerCase()] || (f.expr.match.bool.test(s) ? Ir : void 0)), u !== void 0) {
                        if (u === null) {
                            f.removeAttr(r, s);
                            return
                        }
                        return b && "set" in b && (p = b.set(r, u, s)) !== void 0 ? p : (r.setAttribute(s, u + ""), u)
                    }
                    return b && "get" in b && (p = b.get(r, s)) !== null ? p : (p = f.find.attr(r, s), p == null ? void 0 : p)
                }
            },
            attrHooks: {
                type: {
                    set: function(r, s) {
                        if (!X.radioValue && s === "radio" && K(r, "input")) {
                            var u = r.value;
                            return r.setAttribute("type", s), u && (r.value = u), s
                        }
                    }
                }
            },
            removeAttr: function(r, s) {
                var u, p = 0,
                    b = s && s.match(Te);
                if (b && r.nodeType === 1)
                    for (; u = b[p++];) r.removeAttribute(u)
            }
        }), Ir = {
            set: function(r, s, u) {
                return s === !1 ? f.removeAttr(r, u) : r.setAttribute(u, u), u
            }
        }, f.each(f.expr.match.bool.source.match(/\w+/g), function(r, s) {
            var u = Ci[s] || f.find.attr;
            Ci[s] = function(p, b, x) {
                var T, z, G = b.toLowerCase();
                return x || (z = Ci[G], Ci[G] = T, T = u(p, b, x) != null ? G : null, Ci[G] = z), T
            }
        });
        var Eo = /^(?:input|select|textarea|button)$/i,
            _o = /^(?:a|area)$/i;
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
                var p, b, x = r.nodeType;
                if (!(x === 3 || x === 8 || x === 2)) return (x !== 1 || !f.isXMLDoc(r)) && (s = f.propFix[s] || s, b = f.propHooks[s]), u !== void 0 ? b && "set" in b && (p = b.set(r, u, s)) !== void 0 ? p : r[s] = u : b && "get" in b && (p = b.get(r, s)) !== null ? p : r[s]
            },
            propHooks: {
                tabIndex: {
                    get: function(r) {
                        var s = f.find.attr(r, "tabindex");
                        return s ? parseInt(s, 10) : Eo.test(r.nodeName) || _o.test(r.nodeName) && r.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), X.optSelected || (f.propHooks.selected = {
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
                var s, u, p, b, x, T, z, G = 0;
                if (re(r)) return this.each(function(Z) {
                    f(this).addClass(r.call(this, Z, Wn(this)))
                });
                if (s = Lr(r), s.length) {
                    for (; u = this[G++];)
                        if (b = Wn(u), p = u.nodeType === 1 && " " + qn(b) + " ", p) {
                            for (T = 0; x = s[T++];) p.indexOf(" " + x + " ") < 0 && (p += x + " ");
                            z = qn(p), b !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            removeClass: function(r) {
                var s, u, p, b, x, T, z, G = 0;
                if (re(r)) return this.each(function(Z) {
                    f(this).removeClass(r.call(this, Z, Wn(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (s = Lr(r), s.length) {
                    for (; u = this[G++];)
                        if (b = Wn(u), p = u.nodeType === 1 && " " + qn(b) + " ", p) {
                            for (T = 0; x = s[T++];)
                                for (; p.indexOf(" " + x + " ") > -1;) p = p.replace(" " + x + " ", " ");
                            z = qn(p), b !== z && u.setAttribute("class", z)
                        }
                }
                return this
            },
            toggleClass: function(r, s) {
                var u = typeof r,
                    p = u === "string" || Array.isArray(r);
                return typeof s == "boolean" && p ? s ? this.addClass(r) : this.removeClass(r) : re(r) ? this.each(function(b) {
                    f(this).toggleClass(r.call(this, b, Wn(this), s), s)
                }) : this.each(function() {
                    var b, x, T, z;
                    if (p)
                        for (x = 0, T = f(this), z = Lr(r); b = z[x++];) T.hasClass(b) ? T.removeClass(b) : T.addClass(b);
                    else(r === void 0 || u === "boolean") && (b = Wn(this), b && de.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || r === !1 ? "" : de.get(this, "__className__") || ""))
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
        f.fn.extend({
            val: function(r) {
                var s, u, p, b = this[0];
                return arguments.length ? (p = re(r), this.each(function(x) {
                    var T;
                    this.nodeType === 1 && (p ? T = r.call(this, x, f(this).val()) : T = r, T == null ? T = "" : typeof T == "number" ? T += "" : Array.isArray(T) && (T = f.map(T, function(z) {
                        return z == null ? "" : z + ""
                    })), s = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], (!s || !("set" in s) || s.set(this, T, "value") === void 0) && (this.value = T))
                })) : b ? (s = f.valHooks[b.type] || f.valHooks[b.nodeName.toLowerCase()], s && "get" in s && (u = s.get(b, "value")) !== void 0 ? u : (u = b.value, typeof u == "string" ? u.replace(So, "") : u == null ? "" : u)) : void 0
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
                        var s, u, p, b = r.options,
                            x = r.selectedIndex,
                            T = r.type === "select-one",
                            z = T ? null : [],
                            G = T ? x + 1 : b.length;
                        for (x < 0 ? p = G : p = T ? x : 0; p < G; p++)
                            if (u = b[p], (u.selected || p === x) && !u.disabled && (!u.parentNode.disabled || !K(u.parentNode, "optgroup"))) {
                                if (s = f(u).val(), T) return s;
                                z.push(s)
                            } return z
                    },
                    set: function(r, s) {
                        for (var u, p, b = r.options, x = f.makeArray(s), T = b.length; T--;) p = b[T], (p.selected = f.inArray(f.valHooks.option.get(p), x) > -1) && (u = !0);
                        return u || (r.selectedIndex = -1), x
                    }
                }
            }
        }), f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = {
                set: function(r, s) {
                    if (Array.isArray(s)) return r.checked = f.inArray(f(r).val(), s) > -1
                }
            }, X.checkOn || (f.valHooks[this].get = function(r) {
                return r.getAttribute("value") === null ? "on" : r.value
            })
        }), X.focusin = "onfocusin" in e;
        var Dr = /^(?:focusinfocus|focusoutblur)$/,
            Yn = function(r) {
                r.stopPropagation()
            };
        f.extend(f.event, {
            trigger: function(r, s, u, p) {
                var b, x, T, z, G, Z, ce, Ce, ne = [u || P],
                    ue = $.call(r, "type") ? r.type : r,
                    Ue = $.call(r, "namespace") ? r.namespace.split(".") : [];
                if (x = Ce = T = u = u || P, !(u.nodeType === 3 || u.nodeType === 8) && !Dr.test(ue + f.event.triggered) && (ue.indexOf(".") > -1 && (Ue = ue.split("."), ue = Ue.shift(), Ue.sort()), G = ue.indexOf(":") < 0 && "on" + ue, r = r[f.expando] ? r : new f.Event(ue, typeof r == "object" && r), r.isTrigger = p ? 2 : 3, r.namespace = Ue.join("."), r.rnamespace = r.namespace ? new RegExp("(^|\\.)" + Ue.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, r.result = void 0, r.target || (r.target = u), s = s == null ? [r] : f.makeArray(s, [r]), ce = f.event.special[ue] || {}, !(!p && ce.trigger && ce.trigger.apply(u, s) === !1))) {
                    if (!p && !ce.noBubble && !v(u)) {
                        for (z = ce.delegateType || ue, Dr.test(z + ue) || (x = x.parentNode); x; x = x.parentNode) ne.push(x), T = x;
                        T === (u.ownerDocument || P) && ne.push(T.defaultView || T.parentWindow || e)
                    }
                    for (b = 0;
                        (x = ne[b++]) && !r.isPropagationStopped();) Ce = x, r.type = b > 1 ? z : ce.bindType || ue, Z = (de.get(x, "events") || Object.create(null))[r.type] && de.get(x, "handle"), Z && Z.apply(x, s), Z = G && x[G], Z && Z.apply && te(x) && (r.result = Z.apply(x, s), r.result === !1 && r.preventDefault());
                    return r.type = ue, !p && !r.isDefaultPrevented() && (!ce._default || ce._default.apply(ne.pop(), s) === !1) && te(u) && G && re(u[ue]) && !v(u) && (T = u[G], T && (u[G] = null), f.event.triggered = ue, r.isPropagationStopped() && Ce.addEventListener(ue, Yn), u[ue](), r.isPropagationStopped() && Ce.removeEventListener(ue, Yn), f.event.triggered = void 0, T && (u[G] = T)), r.result
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
        }), X.focusin || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(r, s) {
            var u = function(p) {
                f.event.simulate(s, p.target, f.event.fix(p))
            };
            f.event.special[s] = {
                setup: function() {
                    var p = this.ownerDocument || this.document || this,
                        b = de.access(p, s);
                    b || p.addEventListener(r, u, !0), de.access(p, s, (b || 0) + 1)
                },
                teardown: function() {
                    var p = this.ownerDocument || this.document || this,
                        b = de.access(p, s) - 1;
                    b ? de.access(p, s, b) : (p.removeEventListener(r, u, !0), de.remove(p, s))
                }
            }
        });
        var xi = e.location,
            Mr = {
                guid: Date.now()
            },
            qi = /\?/;
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
        var ko = /\[\]$/,
            vs = /\r?\n/g,
            To = /^(?:submit|button|image|reset|file)$/i,
            Ao = /^(?:input|select|textarea|keygen)/i;

        function Pr(r, s, u, p) {
            var b;
            if (Array.isArray(s)) f.each(s, function(x, T) {
                u || ko.test(r) ? p(r, T) : Pr(r + "[" + (typeof T == "object" && T != null ? x : "") + "]", T, u, p)
            });
            else if (!u && oe(s) === "object")
                for (b in s) Pr(r + "[" + b + "]", s[b], u, p);
            else p(r, s)
        }
        f.param = function(r, s) {
            var u, p = [],
                b = function(x, T) {
                    var z = re(T) ? T() : T;
                    p[p.length] = encodeURIComponent(x) + "=" + encodeURIComponent(z == null ? "" : z)
                };
            if (r == null) return "";
            if (Array.isArray(r) || r.jquery && !f.isPlainObject(r)) f.each(r, function() {
                b(this.name, this.value)
            });
            else
                for (u in r) Pr(u, r[u], s, b);
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
                    var u = f(this).val();
                    return u == null ? null : Array.isArray(u) ? f.map(u, function(p) {
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
            Xn = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            ys = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Lo = /^(?:GET|HEAD)$/,
            Do = /^\/\//,
            bs = {},
            Nr = {},
            ws = "*/".concat("*"),
            Br = P.createElement("a");
        Br.href = xi.href;

        function Cs(r) {
            return function(s, u) {
                typeof s != "string" && (u = s, s = "*");
                var p, b = 0,
                    x = s.toLowerCase().match(Te) || [];
                if (re(u))
                    for (; p = x[b++];) p[0] === "+" ? (p = p.slice(1) || "*", (r[p] = r[p] || []).unshift(u)) : (r[p] = r[p] || []).push(u)
            }
        }

        function xs(r, s, u, p) {
            var b = {},
                x = r === Nr;

            function T(z) {
                var G;
                return b[z] = !0, f.each(r[z] || [], function(Z, ce) {
                    var Ce = ce(s, u, p);
                    if (typeof Ce == "string" && !x && !b[Ce]) return s.dataTypes.unshift(Ce), T(Ce), !1;
                    if (x) return !(G = Ce)
                }), G
            }
            return T(s.dataTypes[0]) || !b["*"] && T("*")
        }

        function Vr(r, s) {
            var u, p, b = f.ajaxSettings.flatOptions || {};
            for (u in s) s[u] !== void 0 && ((b[u] ? r : p || (p = {}))[u] = s[u]);
            return p && f.extend(!0, r, p), r
        }

        function Mo(r, s, u) {
            for (var p, b, x, T, z = r.contents, G = r.dataTypes; G[0] === "*";) G.shift(), p === void 0 && (p = r.mimeType || s.getResponseHeader("Content-Type"));
            if (p) {
                for (b in z)
                    if (z[b] && z[b].test(p)) {
                        G.unshift(b);
                        break
                    }
            }
            if (G[0] in u) x = G[0];
            else {
                for (b in u) {
                    if (!G[0] || r.converters[b + " " + G[0]]) {
                        x = b;
                        break
                    }
                    T || (T = b)
                }
                x = x || T
            }
            if (x) return x !== G[0] && G.unshift(x), u[x]
        }

        function Po(r, s, u, p) {
            var b, x, T, z, G, Z = {},
                ce = r.dataTypes.slice();
            if (ce[1])
                for (T in r.converters) Z[T.toLowerCase()] = r.converters[T];
            for (x = ce.shift(); x;)
                if (r.responseFields[x] && (u[r.responseFields[x]] = s), !G && p && r.dataFilter && (s = r.dataFilter(s, r.dataType)), G = x, x = ce.shift(), x) {
                    if (x === "*") x = G;
                    else if (G !== "*" && G !== x) {
                        if (T = Z[G + " " + x] || Z["* " + x], !T) {
                            for (b in Z)
                                if (z = b.split(" "), z[1] === x && (T = Z[G + " " + z[0]] || Z["* " + z[0]], T)) {
                                    T === !0 ? T = Z[b] : Z[b] !== !0 && (x = z[0], ce.unshift(z[1]));
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
                    "text xml": f.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(r, s) {
                return s ? Vr(Vr(r, f.ajaxSettings), s) : Vr(f.ajaxSettings, r)
            },
            ajaxPrefilter: Cs(bs),
            ajaxTransport: Cs(Nr),
            ajax: function(r, s) {
                typeof r == "object" && (s = r, r = void 0), s = s || {};
                var u, p, b, x, T, z, G, Z, ce, Ce, ne = f.ajaxSetup({}, s),
                    ue = ne.context || ne,
                    Ue = ne.context && (ue.nodeType || ue.jquery) ? f(ue) : f.event,
                    rt = f.Deferred(),
                    je = f.Callbacks("once memory"),
                    Gt = ne.statusCode || {},
                    Bt = {},
                    un = {},
                    _t = "canceled",
                    et = {
                        readyState: 0,
                        getResponseHeader: function(ft) {
                            var Lt;
                            if (G) {
                                if (!x)
                                    for (x = {}; Lt = Xn.exec(b);) x[Lt[1].toLowerCase() + " "] = (x[Lt[1].toLowerCase() + " "] || []).concat(Lt[2]);
                                Lt = x[ft.toLowerCase() + " "]
                            }
                            return Lt == null ? null : Lt.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return G ? b : null
                        },
                        setRequestHeader: function(ft, Lt) {
                            return G == null && (ft = un[ft.toLowerCase()] = un[ft.toLowerCase()] || ft, Bt[ft] = Lt), this
                        },
                        overrideMimeType: function(ft) {
                            return G == null && (ne.mimeType = ft), this
                        },
                        statusCode: function(ft) {
                            var Lt;
                            if (ft)
                                if (G) et.always(ft[et.status]);
                                else
                                    for (Lt in ft) Gt[Lt] = [Gt[Lt], ft[Lt]];
                            return this
                        },
                        abort: function(ft) {
                            var Lt = ft || _t;
                            return u && u.abort(Lt), on(0, Lt), this
                        }
                    };
                if (rt.promise(et), ne.url = ((r || ne.url || xi.href) + "").replace(Do, xi.protocol + "//"), ne.type = s.method || s.type || ne.method || ne.type, ne.dataTypes = (ne.dataType || "*").toLowerCase().match(Te) || [""], ne.crossDomain == null) {
                    z = P.createElement("a");
                    try {
                        z.href = ne.url, z.href = z.href, ne.crossDomain = Br.protocol + "//" + Br.host != z.protocol + "//" + z.host
                    } catch {
                        ne.crossDomain = !0
                    }
                }
                if (ne.data && ne.processData && typeof ne.data != "string" && (ne.data = f.param(ne.data, ne.traditional)), xs(bs, ne, s, et), G) return et;
                Z = f.event && ne.global, Z && f.active++ === 0 && f.event.trigger("ajaxStart"), ne.type = ne.type.toUpperCase(), ne.hasContent = !Lo.test(ne.type), p = ne.url.replace(Ro, ""), ne.hasContent ? ne.data && ne.processData && (ne.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (ne.data = ne.data.replace(Oo, "+")) : (Ce = ne.url.slice(p.length), ne.data && (ne.processData || typeof ne.data == "string") && (p += (qi.test(p) ? "&" : "?") + ne.data, delete ne.data), ne.cache === !1 && (p = p.replace(Io, "$1"), Ce = (qi.test(p) ? "&" : "?") + "_=" + Mr.guid++ + Ce), ne.url = p + Ce), ne.ifModified && (f.lastModified[p] && et.setRequestHeader("If-Modified-Since", f.lastModified[p]), f.etag[p] && et.setRequestHeader("If-None-Match", f.etag[p])), (ne.data && ne.hasContent && ne.contentType !== !1 || s.contentType) && et.setRequestHeader("Content-Type", ne.contentType), et.setRequestHeader("Accept", ne.dataTypes[0] && ne.accepts[ne.dataTypes[0]] ? ne.accepts[ne.dataTypes[0]] + (ne.dataTypes[0] !== "*" ? ", " + ws + "; q=0.01" : "") : ne.accepts["*"]);
                for (ce in ne.headers) et.setRequestHeader(ce, ne.headers[ce]);
                if (ne.beforeSend && (ne.beforeSend.call(ue, et, ne) === !1 || G)) return et.abort();
                if (_t = "abort", je.add(ne.complete), et.done(ne.success), et.fail(ne.error), u = xs(Nr, ne, s, et), !u) on(-1, "No Transport");
                else {
                    if (et.readyState = 1, Z && Ue.trigger("ajaxSend", [et, ne]), G) return et;
                    ne.async && ne.timeout > 0 && (T = e.setTimeout(function() {
                        et.abort("timeout")
                    }, ne.timeout));
                    try {
                        G = !1, u.send(Bt, on)
                    } catch (ft) {
                        if (G) throw ft;
                        on(-1, ft)
                    }
                }

                function on(ft, Lt, _i, Wi) {
                    var hn, Kn, Jn, an, Dn, vn = Lt;
                    G || (G = !0, T && e.clearTimeout(T), u = void 0, b = Wi || "", et.readyState = ft > 0 ? 4 : 0, hn = ft >= 200 && ft < 300 || ft === 304, _i && (an = Mo(ne, et, _i)), !hn && f.inArray("script", ne.dataTypes) > -1 && f.inArray("json", ne.dataTypes) < 0 && (ne.converters["text script"] = function() {}), an = Po(ne, an, et, hn), hn ? (ne.ifModified && (Dn = et.getResponseHeader("Last-Modified"), Dn && (f.lastModified[p] = Dn), Dn = et.getResponseHeader("etag"), Dn && (f.etag[p] = Dn)), ft === 204 || ne.type === "HEAD" ? vn = "nocontent" : ft === 304 ? vn = "notmodified" : (vn = an.state, Kn = an.data, Jn = an.error, hn = !Jn)) : (Jn = vn, (ft || !vn) && (vn = "error", ft < 0 && (ft = 0))), et.status = ft, et.statusText = (Lt || vn) + "", hn ? rt.resolveWith(ue, [Kn, vn, et]) : rt.rejectWith(ue, [et, vn, Jn]), et.statusCode(Gt), Gt = void 0, Z && Ue.trigger(hn ? "ajaxSuccess" : "ajaxError", [et, ne, hn ? Kn : Jn]), je.fireWith(ue, [et, vn]), Z && (Ue.trigger("ajaxComplete", [et, ne]), --f.active || f.event.trigger("ajaxStop")))
                }
                return et
            },
            getJSON: function(r, s, u) {
                return f.get(r, s, u, "json")
            },
            getScript: function(r, s) {
                return f.get(r, void 0, s, "script")
            }
        }), f.each(["get", "post"], function(r, s) {
            f[s] = function(u, p, b, x) {
                return re(p) && (x = x || b, b = p, p = void 0), f.ajax(f.extend({
                    url: u,
                    type: s,
                    dataType: x,
                    data: p,
                    success: b
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
        var No = {
                0: 200,
                1223: 204
            },
            Ei = f.ajaxSettings.xhr();
        X.cors = !!Ei && "withCredentials" in Ei, X.ajax = Ei = !!Ei, f.ajaxTransport(function(r) {
            var s, u;
            if (X.cors || Ei && !r.crossDomain) return {
                send: function(p, b) {
                    var x, T = r.xhr();
                    if (T.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                        for (x in r.xhrFields) T[x] = r.xhrFields[x];
                    r.mimeType && T.overrideMimeType && T.overrideMimeType(r.mimeType), !r.crossDomain && !p["X-Requested-With"] && (p["X-Requested-With"] = "XMLHttpRequest");
                    for (x in p) T.setRequestHeader(x, p[x]);
                    s = function(z) {
                        return function() {
                            s && (s = u = T.onload = T.onerror = T.onabort = T.ontimeout = T.onreadystatechange = null, z === "abort" ? T.abort() : z === "error" ? typeof T.status != "number" ? b(0, "error") : b(T.status, T.statusText) : b(No[T.status] || T.status, T.statusText, (T.responseType || "text") !== "text" || typeof T.responseText != "string" ? {
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
                    send: function(p, b) {
                        s = f("<script>").attr(r.scriptAttrs || {}).prop({
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
        var $r = [],
            jr = /(=)\?(?=&|$)|\?\?/;
        f.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var r = $r.pop() || f.expando + "_" + Mr.guid++;
                return this[r] = !0, r
            }
        }), f.ajaxPrefilter("json jsonp", function(r, s, u) {
            var p, b, x, T = r.jsonp !== !1 && (jr.test(r.url) ? "url" : typeof r.data == "string" && (r.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && jr.test(r.data) && "data");
            if (T || r.dataTypes[0] === "jsonp") return p = r.jsonpCallback = re(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, T ? r[T] = r[T].replace(jr, "$1" + p) : r.jsonp !== !1 && (r.url += (qi.test(r.url) ? "&" : "?") + r.jsonp + "=" + p), r.converters["script json"] = function() {
                return x || f.error(p + " was not called"), x[0]
            }, r.dataTypes[0] = "json", b = e[p], e[p] = function() {
                x = arguments
            }, u.always(function() {
                b === void 0 ? f(e).removeProp(p) : e[p] = b, r[p] && (r.jsonpCallback = s.jsonpCallback, $r.push(p)), x && re(b) && b(x[0]), x = b = void 0
            }), "script"
        }), X.createHTMLDocument = function() {
            var r = P.implementation.createHTMLDocument("").body;
            return r.innerHTML = "<form></form><form></form>", r.childNodes.length === 2
        }(), f.parseHTML = function(r, s, u) {
            if (typeof r != "string") return [];
            typeof s == "boolean" && (u = s, s = !1);
            var p, b, x;
            return s || (X.createHTMLDocument ? (s = P.implementation.createHTMLDocument(""), p = s.createElement("base"), p.href = P.location.href, s.head.appendChild(p)) : s = P), b = Fe.exec(r), x = !u && [], b ? [s.createElement(b[1])] : (b = In([r], s, x), x && x.length && f(x).remove(), f.merge([], b.childNodes))
        }, f.fn.load = function(r, s, u) {
            var p, b, x, T = this,
                z = r.indexOf(" ");
            return z > -1 && (p = qn(r.slice(z)), r = r.slice(0, z)), re(s) ? (u = s, s = void 0) : s && typeof s == "object" && (b = "POST"), T.length > 0 && f.ajax({
                url: r,
                type: b || "GET",
                dataType: "html",
                data: s
            }).done(function(G) {
                x = arguments, T.html(p ? f("<div>").append(f.parseHTML(G)).find(p) : G)
            }).always(u && function(G, Z) {
                T.each(function() {
                    u.apply(this, x || [G.responseText, Z, G])
                })
            }), this
        }, f.expr.pseudos.animated = function(r) {
            return f.grep(f.timers, function(s) {
                return r === s.elem
            }).length
        }, f.offset = {
            setOffset: function(r, s, u) {
                var p, b, x, T, z, G, Z, ce = f.css(r, "position"),
                    Ce = f(r),
                    ne = {};
                ce === "static" && (r.style.position = "relative"), z = Ce.offset(), x = f.css(r, "top"), G = f.css(r, "left"), Z = (ce === "absolute" || ce === "fixed") && (x + G).indexOf("auto") > -1, Z ? (p = Ce.position(), T = p.top, b = p.left) : (T = parseFloat(x) || 0, b = parseFloat(G) || 0), re(s) && (s = s.call(r, u, f.extend({}, z))), s.top != null && (ne.top = s.top - z.top + T), s.left != null && (ne.left = s.left - z.left + b), "using" in s ? s.using.call(r, ne) : Ce.css(ne)
            }
        }, f.fn.extend({
            offset: function(r) {
                if (arguments.length) return r === void 0 ? this : this.each(function(b) {
                    f.offset.setOffset(this, r, b)
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
                    if (f.css(p, "position") === "fixed") s = p.getBoundingClientRect();
                    else {
                        for (s = this.offset(), u = p.ownerDocument, r = p.offsetParent || u.documentElement; r && (r === u.body || r === u.documentElement) && f.css(r, "position") === "static";) r = r.parentNode;
                        r && r !== p && r.nodeType === 1 && (b = f(r).offset(), b.top += f.css(r, "borderTopWidth", !0), b.left += f.css(r, "borderLeftWidth", !0))
                    }
                    return {
                        top: s.top - b.top - f.css(p, "marginTop", !0),
                        left: s.left - b.left - f.css(p, "marginLeft", !0)
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
            var u = s === "pageYOffset";
            f.fn[r] = function(p) {
                return g(this, function(b, x, T) {
                    var z;
                    if (v(b) ? z = b : b.nodeType === 9 && (z = b.defaultView), T === void 0) return z ? z[s] : b[x];
                    z ? z.scrollTo(u ? z.pageXOffset : T, u ? T : z.pageYOffset) : b[x] = T
                }, r, p, arguments.length)
            }
        }), f.each(["top", "left"], function(r, s) {
            f.cssHooks[s] = y(X.pixelPosition, function(u, p) {
                if (p) return p = Ze(u, s), bi.test(p) ? f(u).position()[s] + "px" : p
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
                f.fn[p] = function(b, x) {
                    var T = arguments.length && (u || typeof b != "boolean"),
                        z = u || (b === !0 || x === !0 ? "margin" : "border");
                    return g(this, function(G, Z, ce) {
                        var Ce;
                        return v(G) ? p.indexOf("outer") === 0 ? G["inner" + r] : G.document.documentElement["client" + r] : G.nodeType === 9 ? (Ce = G.documentElement, Math.max(G.body["scroll" + r], Ce["scroll" + r], G.body["offset" + r], Ce["offset" + r], Ce["client" + r])) : ce === void 0 ? f.css(G, Z, z) : f.style(G, Z, ce, z)
                    }, s, T ? b : void 0, T)
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
        var Es = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        f.proxy = function(r, s) {
            var u, p, b;
            if (typeof s == "string" && (u = r[s], s = r, r = u), !!re(r)) return p = d.call(arguments, 2), b = function() {
                return r.apply(s || this, p.concat(d.call(arguments)))
            }, b.guid = r.guid = r.guid || f.guid++, b
        }, f.holdReady = function(r) {
            r ? f.readyWait++ : f.ready(!0)
        }, f.isArray = Array.isArray, f.parseJSON = JSON.parse, f.nodeName = K, f.isFunction = re, f.isWindow = v, f.camelCase = B, f.type = oe, f.now = Date.now, f.isNumeric = function(r) {
            var s = f.type(r);
            return (s === "number" || s === "string") && !isNaN(r - parseFloat(r))
        }, f.trim = function(r) {
            return r == null ? "" : (r + "").replace(Es, "")
        };
        var Bo = e.jQuery,
            Vo = e.$;
        return f.noConflict = function(r) {
            return e.$ === f && (e.$ = Vo), r && e.jQuery === f && (e.jQuery = Bo), f
        }, typeof n > "u" && (e.jQuery = e.$ = f), f
    })
})(Na);
const se = Na.exports;
var ot = {};
(function(t) {
    (function(e) {
        var n = typeof self == "object" && self.self === self && self || typeof vt == "object" && vt.global === vt && vt; {
            var i = Pi.exports,
                a;
            try {
                a = Na.exports
            } catch {}
            e(n, t, i, a)
        }
    })(function(e, n, i, a) {
        var d = e.Backbone,
            m = Array.prototype.slice;
        n.VERSION = "1.3.3", n.$ = a, n.noConflict = function() {
            return e.Backbone = d, this
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
                            var _ = m.call(arguments);
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
            J = /\s+/,
            ie = function(E, l, g, _, O) {
                var M = 0,
                    B;
                if (g && typeof g == "object")
                    for (_ !== void 0 && ("context" in O) && O.context === void 0 && (O.context = _), B = i.keys(g); M < B.length; M++) l = ie(E, l, B[M], g[B[M]], O);
                else if (g && J.test(g))
                    for (B = g.split(J); M < B.length; M++) l = E(l, B[M], _, O);
                else l = E(l, g, _, O);
                return l
            };
        $.on = function(E, l, g) {
            return X(this, E, l, g)
        };
        var X = function(E, l, g, _, O) {
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
                var B = this._listenId || (this._listenId = i.uniqueId("l"));
                M = O[_] = {
                    obj: E,
                    objId: _,
                    id: B,
                    listeningTo: O,
                    count: 0
                }
            }
            return X(E, l, g, this, M), this
        };
        var re = function(E, l, g, _) {
            if (g) {
                var O = E[l] || (E[l] = []),
                    M = _.context,
                    B = _.ctx,
                    te = _.listening;
                te && te.count++, O.push({
                    callback: g,
                    context: M,
                    ctx: M || B,
                    listening: te
                })
            }
            return E
        };
        $.off = function(E, l, g) {
            return this._events ? (this._events = ie(v, this._events, E, l, {
                context: g,
                listeners: this._listeners
            }), this) : this
        }, $.stopListening = function(E, l, g) {
            var _ = this._listeningTo;
            if (!_) return this;
            for (var O = E ? [E._listenId] : i.keys(_), M = 0; M < O.length; M++) {
                var B = _[O[M]];
                if (!B) break;
                B.obj.off(l, g, this)
            }
            return this
        };
        var v = function(E, l, g, _) {
            if (!!E) {
                var O = 0,
                    M, B = _.context,
                    te = _.listeners;
                if (!l && !g && !B) {
                    for (var ke = i.keys(te); O < ke.length; O++) M = te[ke[O]], delete te[M.id], delete M.listeningTo[M.objId];
                    return
                }
                for (var de = l ? [l] : i.keys(E); O < de.length; O++) {
                    l = de[O];
                    var Le = E[l];
                    if (!Le) break;
                    for (var De = [], nt = 0; nt < Le.length; nt++) {
                        var Ct = Le[nt];
                        g && g !== Ct.callback && g !== Ct.callback._callback || B && B !== Ct.context ? De.push(Ct) : (M = Ct.listening, M && --M.count === 0 && (delete te[M.id], delete M.listeningTo[M.objId]))
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
                    O && M && (M = M.slice()), O && le(O, _), M && le(M, [l].concat(_))
                }
                return E
            },
            le = function(E, l) {
                var g, _ = -1,
                    O = E.length,
                    M = l[0],
                    B = l[1],
                    te = l[2];
                switch (l.length) {
                    case 0:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx);
                        return;
                    case 1:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, M);
                        return;
                    case 2:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, M, B);
                        return;
                    case 3:
                        for (; ++_ < O;)(g = E[_]).callback.call(g.ctx, M, B, te);
                        return;
                    default:
                        for (; ++_ < O;)(g = E[_]).callback.apply(g.ctx, l);
                        return
                }
            };
        $.bind = $.on, $.unbind = $.off, i.extend(n, $);
        var oe = n.Model = function(E, l) {
            var g = E || {};
            l || (l = {}), this.cid = i.uniqueId(this.cidPrefix), this.attributes = {}, l.collection && (this.collection = l.collection), l.parse && (g = this.parse(g, l) || {});
            var _ = i.result(this, "defaults");
            g = i.defaults(i.extend({}, _, g), _), this.set(g, l), this.changed = {}, this.initialize.apply(this, arguments)
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
                var _;
                if (typeof E == "object" ? (_ = E, g = l) : (_ = {})[E] = l, g || (g = {}), !this._validate(_, g)) return !1;
                var O = g.unset,
                    M = g.silent,
                    B = [],
                    te = this._changing;
                this._changing = !0, te || (this._previousAttributes = i.clone(this.attributes), this.changed = {});
                var ke = this.attributes,
                    de = this.changed,
                    Le = this._previousAttributes;
                for (var De in _) l = _[De], i.isEqual(ke[De], l) || B.push(De), i.isEqual(Le[De], l) ? delete de[De] : de[De] = l, O ? delete ke[De] : ke[De] = l;
                if (this.idAttribute in _ && (this.id = this.get(this.idAttribute)), !M) {
                    B.length && (this._pending = g);
                    for (var nt = 0; nt < B.length; nt++) this.trigger("change:" + B[nt], this, ke[B[nt]], g)
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
                    B = g.success,
                    te = this.attributes;
                g.success = function(Le) {
                    M.attributes = te;
                    var De = g.parse ? M.parse(Le, g) : Le;
                    if (O && (De = i.extend({}, _, De)), De && !M.set(De, g)) return !1;
                    B && B.call(g.context, M, Le, g), M.trigger("sync", M, Le, g)
                }, qt(this, g), _ && O && (this.attributes = i.extend({}, te, _));
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
                E.success = function(B) {
                    _ && O(), g && g.call(E.context, l, B, E), l.isNew() || l.trigger("sync", l, B, E)
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
                        B = [],
                        te = [],
                        ke = {},
                        de = l.add,
                        Le = l.merge,
                        De = l.remove,
                        nt = !1,
                        Ct = this.comparator && _ == null && l.sort !== !1,
                        rn = i.isString(this.comparator) ? this.comparator : null,
                        ct, yt;
                    for (yt = 0; yt < E.length; yt++) {
                        ct = E[yt];
                        var wt = this.get(ct);
                        if (wt) {
                            if (Le && ct !== wt) {
                                var Jt = this._isModel(ct) ? ct.attributes : ct;
                                l.parse && (Jt = wt.parse(Jt, l)), wt.set(Jt, l), B.push(wt), Ct && !nt && (nt = wt.hasChanged(rn))
                            }
                            ke[wt.cid] || (ke[wt.cid] = !0, O.push(wt)), E[yt] = wt
                        } else de && (ct = E[yt] = this._prepareModel(ct, l), ct && (M.push(ct), this._addReference(ct, l), ke[ct.cid] = !0, O.push(ct)))
                    }
                    if (De) {
                        for (yt = 0; yt < this.length; yt++) ct = this.models[yt], ke[ct.cid] || te.push(ct);
                        te.length && this._removeModels(te, l)
                    }
                    var Je = !1,
                        Pt = !Ct && de && De;
                    if (O.length && Pt ? (Je = this.length !== O.length || i.some(this.models, function(j, N) {
                            return j !== O[N]
                        }), this.models.length = 0, Pe(this.models, O, 0), this.length = this.models.length) : M.length && (Ct && (nt = !0), Pe(this.models, M, _ == null ? this.length : _), this.length = this.models.length), nt && this.sort({
                            silent: !0
                        }), !l.silent) {
                        for (yt = 0; yt < M.length; yt++) _ != null && (l.index = _ + yt), ct = M[yt], ct.trigger("add", ct, this, l);
                        (nt || Je) && this.trigger("sort", this, l), (M.length || te.length || B.length) && (l.changes = {
                            added: M,
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
                return l.success = function(M, B, te) {
                    g && _.add(M, te), O && O.call(te.context, M, B, te)
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
        k(f, lt, "models");
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
                g.beforeSend = function(ke) {
                    if (ke.setRequestHeader("X-HTTP-Method-Override", _), M) return M.apply(this, arguments)
                }
            }
            O.type !== "GET" && !g.emulateJSON && (O.processData = !1);
            var B = g.error;
            g.error = function(ke, de, Le) {
                g.textStatus = de, g.errorThrown = Le, B && B.call(g.context, ke, de, Le)
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
        var ae = n.Router = function(E) {
                E || (E = {}), E.routes && (this.routes = E.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            Ae = /\((.*?)\)/g,
            we = /(\(\?)?:\w+/g,
            be = /\*\w+/g,
            he = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        i.extend(ae.prototype, $, {
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
                return E = E.replace(he, "\\$&").replace(Ae, "(?:$1)?").replace(we, function(l, g) {
                    return g ? l : "([^/?]+)"
                }).replace(be, "([^?]*?)"), new RegExp("^" + E + "(?:\\?([\\s\\S]*))?$")
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
        oe.extend = f.extend = ae.extend = Ve.extend = Se.extend = dt;
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
            t.exports = i(Pi.exports, ot)
        })(vt, function(n, i) {
            n = "default" in n ? n.default : n, i = "default" in i ? i.default : i;
            var a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
                    return typeof v
                } : function(v) {
                    return v && typeof Symbol == "function" && v.constructor === Symbol ? "symbol" : typeof v
                },
                d = i.Radio,
                m = i.Radio = {};
            m.VERSION = "2.0.0", m.noConflict = function() {
                return i.Radio = d, this
            }, m.DEBUG = !1, m._debugText = function(v, P, q) {
                return v + (q ? " on the " + q + " channel" : "") + ': "' + P + '"'
            }, m.debugLog = function(v, P, q) {
                m.DEBUG && console && console.warn && console.warn(m._debugText(v, P, q))
            };
            var S = /\s+/;
            m._eventsApi = function(v, P, q, le) {
                if (!q) return !1;
                var oe = {};
                if ((typeof q > "u" ? "undefined" : a(q)) === "object") {
                    for (var ye in q) {
                        var f = v[P].apply(v, [ye, q[ye]].concat(le));
                        S.test(ye) ? n.extend(oe, f) : oe[ye] = f
                    }
                    return oe
                }
                if (S.test(q)) {
                    for (var _e = q.split(S), Oe = 0, Pe = _e.length; Oe < Pe; Oe++) oe[_e[Oe]] = v[P].apply(v, [_e[Oe]].concat(le));
                    return oe
                }
                return !1
            }, m._callHandler = function(v, P, q) {
                var le = q[0],
                    oe = q[1],
                    ye = q[2];
                switch (q.length) {
                    case 0:
                        return v.call(P);
                    case 1:
                        return v.call(P, le);
                    case 2:
                        return v.call(P, le, oe);
                    case 3:
                        return v.call(P, le, oe, ye);
                    default:
                        return v.apply(P, q)
                }
            };

            function k(v, P, q, le) {
                var oe = v[P];
                if ((!q || q === oe.callback || q === oe.callback._callback) && (!le || le === oe.context)) return delete v[P], !0
            }

            function I(v, P, q, le) {
                v || (v = {});
                for (var oe = P ? [P] : n.keys(v), ye = !1, f = 0, _e = oe.length; f < _e; f++) P = oe[f], !!v[P] && k(v, P, q, le) && (ye = !0);
                return ye
            }
            var L = {};

            function $(v) {
                return L[v] || (L[v] = n.bind(m.log, m, v))
            }
            n.extend(m, {
                log: function(P, q) {
                    if (!(typeof console > "u")) {
                        var le = n.toArray(arguments).slice(2);
                        console.log("[" + P + '] "' + q + '"', le)
                    }
                },
                tuneIn: function(P) {
                    var q = m.channel(P);
                    return q._tunedIn = !0, q.on("all", $(P)), this
                },
                tuneOut: function(P) {
                    var q = m.channel(P);
                    return q._tunedIn = !1, q.off("all", $(P)), delete L[P], this
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
                        le = m._eventsApi(this, "request", P, q);
                    if (le) return le;
                    var oe = this.channelName,
                        ye = this._requests;
                    if (oe && this._tunedIn && m.log.apply(this, [oe, P].concat(q)), ye && (ye[P] || ye.default)) {
                        var f = ye[P] || ye.default;
                        return q = ye[P] ? q : arguments, m._callHandler(f.callback, f.context, q)
                    } else m.debugLog("An unhandled request was fired", P, oe)
                },
                reply: function(P, q, le) {
                    return m._eventsApi(this, "reply", P, [q, le]) ? this : (this._requests || (this._requests = {}), this._requests[P] && m.debugLog("A request was overwritten", P, this.channelName), this._requests[P] = {
                        callback: J(q),
                        context: le || this
                    }, this)
                },
                replyOnce: function(P, q, le) {
                    if (m._eventsApi(this, "replyOnce", P, [q, le])) return this;
                    var oe = this,
                        ye = n.once(function() {
                            return oe.stopReplying(P), J(q).apply(this, arguments)
                        });
                    return this.reply(P, ye, le)
                },
                stopReplying: function(P, q, le) {
                    return m._eventsApi(this, "stopReplying", P) ? this : (!P && !q && !le ? delete this._requests : I(this._requests, P, q, le) || m.debugLog("Attempted to remove the unregistered request", P, this.channelName), this)
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
            var ie, X, re = [i.Events, m.Requests];
            return n.each(re, function(v) {
                n.each(v, function(P, q) {
                    m[q] = function(le) {
                        return X = n.toArray(arguments).slice(1), ie = this.channel(le), ie[q].apply(ie, X)
                    }
                })
            }), m.reset = function(v) {
                var P = v ? [this._channels[v]] : this._channels;
                n.each(P, function(q) {
                    q.reset()
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
        t.exports = i(ot, Pi.exports, gh())
    })(vt, function(n, i, a) {
        n = n && n.hasOwnProperty("default") ? n.default : n, i = i && i.hasOwnProperty("default") ? i.default : i, a = a && a.hasOwnProperty("default") ? a.default : a;
        var d = "3.5.1",
            m = function(o) {
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
            L = function(o, C) {
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

        function X(y, o, C) {
            return C.toUpperCase()
        }
        var re = i.memoize(function(y) {
            return "on" + y.replace(ie, X)
        });

        function v(y) {
            for (var o = arguments.length, C = Array(o > 1 ? o - 1 : 0), A = 1; A < o; A++) C[A - 1] = arguments[A];
            var Q = re(y),
                xe = $.call(this, Q),
                qe = void 0;
            return i.isFunction(xe) && (qe = xe.apply(this, C)), this.trigger.apply(this, arguments), qe
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

        function _e(y) {
            y._isAttached && y._isRendered && P(y, "dom:refresh", y)
        }

        function Oe(y) {
            y._isAttached && y._isRendered && P(y, "dom:remove", y)
        }

        function Pe() {
            q(this, "before:attach", le)
        }

        function lt() {
            q(this, "attach", oe), _e(this)
        }

        function Ve() {
            q(this, "before:detach", ye), Oe(this)
        }

        function K() {
            q(this, "detach", f)
        }

        function Fe() {
            Oe(this)
        }

        function H() {
            _e(this)
        }

        function ae(y) {
            y._areViewEventsMonitored || y.monitorViewEvents === !1 || (y._areViewEventsMonitored = !0, y.on({
                "before:attach": Pe,
                attach: lt,
                "before:detach": Ve,
                detach: K,
                "before:render": Fe,
                render: H
            }))
        }
        var Ae = ["description", "fileName", "lineNumber", "name", "message", "number"],
            we = S.call(Error, {
                urlRoot: "http://marionettejs.com/docs/v" + d + "/",
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
        we.extend = S;

        function be(y, o, C, A, Q) {
            var xe = A.split(/\s+/);
            xe.length > 1 && k("Multiple handlers for a single event are deprecated. If needed, use a single handler to call multiple methods."), i.each(xe, function(qe) {
                var It = y[qe];
                if (!It) throw new we('Method "' + qe + '" was configured as an event handler, but does not exist.');
                y[Q](o, C, It)
            })
        }

        function he(y, o, C, A) {
            if (!i.isObject(C)) throw new we({
                message: "Bindings must be an object.",
                url: "marionette.functions.html#marionettebindevents"
            });
            i.each(C, function(Q, xe) {
                if (i.isString(Q)) {
                    be(y, o, xe, Q, A);
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
            if (!i.isObject(C)) throw new we({
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
        var $t = function(o) {
                this.options = i.extend({}, i.result(this, "options"), o)
            },
            qt = {
                normalizeMethods: J,
                _setOptions: $t,
                mergeOptions: L,
                getOption: $,
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
            triggerMethod: v
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
                var Q = M(C, A),
                    xe = C === Q ? {} : C,
                    qe = new Q(xe, y),
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
            Le = function(o, C) {
                var A = o.match(de);
                return A[1] + "." + C + " " + A[2]
            },
            De = {
                childViewEventPrefix: !0,
                triggersStopPropagation: !0,
                triggersPreventDefault: !0
            };

        function nt(y) {
            return !!De[y]
        }

        function Ct(y, o) {
            return De[y] = o
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
                        return qe = Le(qe, "trig" + A.cid), Q[qe] = rn(o, xe), Q
                    }, {})
                }
            },
            yt = function(o, C) {
                return i.reduce(o, function(A, Q, xe) {
                    var qe = wt(xe, C);
                    return A[qe] = Q, A
                }, {})
            },
            wt = function(o, C) {
                return o.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(A) {
                    return C[A.slice(4)]
                })
            },
            Jt = function y(o, C, A) {
                return i.each(o, function(Q, xe) {
                    i.isString(Q) ? o[xe] = wt(Q, C) : i.isObject(Q) && i.isArray(A) && (i.extend(Q, y(i.pick(Q, A), C)), i.each(A, function(qe) {
                        var It = Q[qe];
                        i.isString(It) && (Q[qe] = wt(It, C))
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
                    return Jt(o, A, C)
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

        function j(y) {
            return this.prototype.Dom = i.extend({}, this.prototype.Dom, y), this
        }
        var N = {
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
                            var xe = o.nextSibling,
                                qe = C.nextSibling;
                            A.insertBefore(C, xe), Q.insertBefore(o, qe)
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
                        xe = Q === void 0 ? Pt(o) : Q,
                        qe = A._$contents,
                        It = qe === void 0 ? Pt(C) : qe;
                    xe.append(It)
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
                    for (var C = this.normalizeMethods(this._childViewEvents), A = arguments.length, Q = Array(A > 1 ? A - 1 : 0), xe = 1; xe < A; xe++) Q[xe - 1] = arguments[xe];
                    typeof C < "u" && i.isFunction(C[o]) && C[o].apply(this, Q);
                    var qe = this._childViewTriggers;
                    qe && i.isString(qe[o]) && this.triggerMethod.apply(this, [qe[o]].concat(Q));
                    var It = i.result(this, "childViewEventPrefix");
                    if (It !== !1) {
                        var Yt = It + ":" + o;
                        this.triggerMethod.apply(this, [Yt].concat(Q))
                    }
                }
            };
        i.extend(W, te, qt, ke, ct, Je);

        function D(y) {
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
        var pe = ["allowMissingEl", "parentEl", "replaceElement"],
            ge = g.extend({
                Dom: N,
                cidPrefix: "mnr",
                replaceElement: !1,
                _isReplaced: !1,
                _isSwappingView: !1,
                constructor: function(o) {
                    if (this._setOptions(o), this.mergeOptions(o, pe), this._initEl = this.el = this.getOption("el"), this.el = this.el instanceof n.$ ? this.el[0] : this.el, !this.el) throw new we({
                        name: "NoElError",
                        message: 'An "el" must be specified for a region.'
                    });
                    this.$el = this.getEl(this.el), g.call(this, o)
                },
                show: function(o, C) {
                    if (!!this._ensureElement(C)) return o = this._getView(o, C), o === this.currentView ? this : (this._isSwappingView = !!this.currentView, this.triggerMethod("before:show", this, o, C), o._isAttached || this.empty(C), this._setupChildView(o), this.currentView = o, D(o), this._attachView(o, C), this.triggerMethod("show", this, o, C), this._isSwappingView = !1, this)
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
                setDomApi: j
            }),
            Ne = function(y, o) {
                return y instanceof ge ? y : Be(y, o)
            };

        function Be(y, o) {
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
                        return Q[qe] = Ne(xe, A), C._addRegion(Q[qe], qe), Q
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
            Xe = {
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
                    return Xe.render(o, C, this)
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
        i.extend(Pn.prototype, W, Ft);
        var it = ["forEach", "each", "map", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "toArray", "first", "initial", "rest", "last", "without", "isEmpty", "pluck", "reduce", "partition"],
            Ln = function(o, C) {
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
        Ln(gi.prototype, "_getViews"), i.extend(gi.prototype, {
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
                    this.render = i.bind(this.render, this), this._setOptions(o), this.mergeOptions(o, Sr), ae(this), this._initBehaviors(), this.once("render", this._initialEvents), this._initChildViewStorage(), this._bufferedChildren = [];
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
                        xe = this.filter !== o,
                        qe = Q && xe && !A;
                    if (qe) {
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
                    i.each(o, function(qe, It) {
                        var Yt = !A.children.findByModel(qe);
                        Yt && A._onCollectionAdd(qe, A.collection, {
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
                    var Q = i.some(A, function(Yt) {
                        return !C.findByModel(Yt)
                    });
                    if (Q) this.render();
                    else {
                        var xe = [],
                            qe = i.reduce(this.children._views, function(Yt, Hn) {
                                var Nn = i.indexOf(A, Hn.model);
                                return Nn === -1 ? (xe.push(Hn.model), Yt) : (Hn._index = Nn, Yt[Nn] = Hn.el, Yt)
                            }, new Array(A.length));
                        this.triggerMethod("before:reorder", this);
                        var It = this.Dom.createBuffer();
                        i.each(qe, function(Yt) {
                            o.Dom.appendContents(It, Yt)
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
        Ln(sn.prototype, "_views");

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
                    this._setOptions(o), this.mergeOptions(o, Tr), ae(this), this.once("render", this._initialEvents), this._initChildViewStorage(), this._initBehaviors();
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
                    ae(o), o.on("destroy", this.removeChildView, this), this._proxyChildViewEvents(o)
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
                    return i.each(this.children._views, function(qe, It, Yt) {
                        (C.call(o, qe, It, Yt) ? Q : xe).push(qe)
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
                        var xe = i.result(o, "childViewContainer");
                        if (xe.charAt(0) === "@" && o.ui ? A = o.ui[xe.substr(4)] : A = this.$(xe), A.length <= 0) throw new we({
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
                        return i.isFunction(Q) || (Q = o[Q]), Q && (xe = Le(xe, o.cid), A[xe] = i.bind(Q, o)), A
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
                        this._region = Ne(o, C)
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
            bi = ["appRoutes", "controller"],
            Gn = n.Router.extend({
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
                    return i.each(Q, function(xe) {
                        A._addAppRoute(o, xe, C[xe])
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
        i.extend(Gn.prototype, qt);

        function Gi() {
            throw new we({
                message: "You must define where your behaviors are stored.",
                url: "marionette.behaviors.md#behaviorslookup"
            })
        }
        var wi = n.Marionette,
            Ze = n.Marionette = {};
        return Ze.noConflict = function() {
            return n.Marionette = wi, this
        }, Ze.bindEvents = m(Se), Ze.unbindEvents = m(Te), Ze.bindRequests = m(Ke), Ze.unbindRequests = m(dt), Ze.mergeOptions = m(L), Ze.getOption = m($), Ze.normalizeMethods = m(J), Ze.extend = S, Ze.isNodeAttached = I, Ze.deprecate = k, Ze.triggerMethod = m(v), Ze.triggerMethodOn = P, Ze.isEnabled = nt, Ze.setEnabled = Ct, Ze.monitorViewEvents = ae, Ze.Behaviors = {}, Ze.Behaviors.behaviorsLookup = Gi, Ze.Application = zi, Ze.AppRouter = Gn, Ze.Renderer = Xe, Ze.TemplateCache = _, Ze.View = Pn, Ze.CollectionView = kn, Ze.NextCollectionView = mi, Ze.CompositeView = vi, Ze.Behavior = Fi, Ze.Region = ge, Ze.Error = we, Ze.Object = g, Ze.DEV_MODE = !1, Ze.FEATURES = De, Ze.VERSION = d, Ze.DomApi = N, Ze.setDomApi = function(y) {
            kn.setDomApi(y), vi.setDomApi(y), mi.setDomApi(y), ge.setDomApi(y), Pn.setDomApi(y)
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

function bh(t, e) {
    return t === e || t !== t && e !== e
}
var ao = bh,
    wh = ao;

function Ch(t, e) {
    for (var n = t.length; n--;)
        if (wh(t[n][0], e)) return n;
    return -1
}
var lo = Ch,
    xh = lo,
    Eh = Array.prototype,
    _h = Eh.splice;

function Sh(t) {
    var e = this.__data__,
        n = xh(e, t);
    if (n < 0) return !1;
    var i = e.length - 1;
    return n == i ? e.pop() : _h.call(e, n, 1), --this.size, !0
}
var kh = Sh,
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
    Bh = kh,
    Vh = Oh,
    $h = Lh,
    jh = Ph;

function br(t) {
    var e = -1,
        n = t == null ? 0 : t.length;
    for (this.clear(); ++e < n;) {
        var i = t[e];
        this.set(i[0], i[1])
    }
}
br.prototype.clear = Nh;
br.prototype.delete = Bh;
br.prototype.get = Vh;
br.prototype.has = $h;
br.prototype.set = jh;
var co = br,
    Fh = co;

function zh() {
    this.__data__ = new Fh, this.size = 0
}
var Gh = zh;

function Hh(t) {
    var e = this.__data__,
        n = e.delete(t);
    return this.size = e.size, n
}
var Uh = Hh;

function qh(t) {
    return this.__data__.get(t)
}
var Wh = qh;

function Yh(t) {
    return this.__data__.has(t)
}
var Xh = Yh,
    Kh = typeof vt == "object" && vt && vt.Object === Object && vt,
    bc = Kh,
    Jh = bc,
    Qh = typeof self == "object" && self && self.Object === Object && self,
    Zh = Jh || Qh || Function("return this")(),
    wr = Zh,
    ed = wr,
    td = ed.Symbol,
    wc = td,
    gl = wc,
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
    var a = id.call(t);
    return i && (e ? t[Yr] = n : delete t[Yr]), a
}
var sd = rd,
    od = Object.prototype,
    ad = od.toString;

function ld(t) {
    return ad.call(t)
}
var cd = ld,
    ml = wc,
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
var Bi = gd,
    md = uo,
    vd = Bi,
    yd = "[object AsyncFunction]",
    bd = "[object Function]",
    wd = "[object GeneratorFunction]",
    Cd = "[object Proxy]";

function xd(t) {
    if (!vd(t)) return !1;
    var e = md(t);
    return e == bd || e == wd || e == yd || e == Cd
}
var Ba = xd,
    Ed = wr,
    _d = Ed["__core-js_shared__"],
    Sd = _d,
    Qo = Sd,
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
    Ld = Ba,
    Dd = Td,
    Md = Bi,
    Pd = Id,
    Nd = /[\\^$.*+?()[\]{}|]/g,
    Bd = /^\[object .+?Constructor\]$/,
    Vd = Function.prototype,
    $d = Object.prototype,
    jd = Vd.toString,
    Fd = $d.hasOwnProperty,
    zd = RegExp("^" + jd.call(Fd).replace(Nd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

function Gd(t) {
    if (!Md(t) || Dd(t)) return !1;
    var e = Ld(t) ? zd : Bd;
    return e.test(Pd(t))
}
var Hd = Gd;

function Ud(t, e) {
    return t == null ? void 0 : t[e]
}
var qd = Ud,
    Wd = Hd,
    Yd = qd;

function Xd(t, e) {
    var n = Yd(t, e);
    return Wd(n) ? n : void 0
}
var Va = Xd,
    Kd = Va,
    Jd = wr,
    Qd = Kd(Jd, "Map"),
    xc = Qd,
    Zd = Va,
    ef = Zd(Object, "create"),
    ho = ef,
    bl = ho;

function tf() {
    this.__data__ = bl ? bl(null) : {}, this.size = 0
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

function bf(t, e) {
    var n = this.__data__;
    return this.size += this.has(t) ? 0 : 1, n[t] = vf && e === void 0 ? yf : e, this
}
var wf = bf,
    Cf = nf,
    xf = sf,
    Ef = hf,
    _f = mf,
    Sf = wf;

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
Cr.prototype.has = _f;
Cr.prototype.set = Sf;
var kf = Cr,
    wl = kf,
    Tf = co,
    Af = xc;

function Of() {
    this.size = 0, this.__data__ = {
        hash: new wl,
        map: new(Af || Tf),
        string: new wl
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
var Bf = Nf,
    Vf = fo;

function $f(t) {
    return Vf(this, t).get(t)
}
var jf = $f,
    Ff = fo;

function zf(t) {
    return Ff(this, t).has(t)
}
var Gf = zf,
    Hf = fo;

function Uf(t, e) {
    var n = Hf(this, t),
        i = n.size;
    return n.set(t, e), this.size += n.size == i ? 0 : 1, this
}
var qf = Uf,
    Wf = Rf,
    Yf = Bf,
    Xf = jf,
    Kf = Gf,
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
    op = Gh,
    ap = Uh,
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
    dp = Va,
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
var $a = pp,
    gp = $a,
    mp = ao;

function vp(t, e, n) {
    (n !== void 0 && !mp(t[e], n) || n === void 0 && !(e in t)) && gp(t, e, n)
}
var _c = vp;

function yp(t) {
    return function(e, n, i) {
        for (var a = -1, d = Object(e), m = i(e), S = m.length; S--;) {
            var k = m[t ? S : ++a];
            if (n(d[k], k, d) === !1) break
        }
        return e
    }
}
var bp = yp,
    wp = bp,
    Cp = wp(),
    xp = Cp,
    wa = {
        exports: {}
    };
(function(t, e) {
    var n = wr,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        d = a && a.exports === i,
        m = d ? n.Buffer : void 0,
        S = m ? m.allocUnsafe : void 0;

    function k(I, L) {
        if (L) return I.slice();
        var $ = I.length,
            J = S ? S($) : new I.constructor($);
        return I.copy(J), J
    }
    t.exports = k
})(wa, wa.exports);
var Ep = wr,
    _p = Ep.Uint8Array,
    Sp = _p,
    xl = Sp;

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
    Dp = Bi,
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
var Bp = Np,
    Vp = Bp,
    $p = Vp(Object.getPrototypeOf, Object),
    Sc = $p,
    jp = Object.prototype;

function Fp(t) {
    var e = t && t.constructor,
        n = typeof e == "function" && e.prototype || jp;
    return t === n
}
var kc = Fp,
    zp = Pp,
    Gp = Sc,
    Hp = kc;

function Up(t) {
    return typeof t.constructor == "function" && !Hp(t) ? zp(Gp(t)) : {}
}
var qp = Up;

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
    _l = Qp,
    Zp = us,
    Tc = Object.prototype,
    eg = Tc.hasOwnProperty,
    tg = Tc.propertyIsEnumerable,
    ng = _l(function() {
        return arguments
    }()) ? _l : function(t) {
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
    og = Ba,
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
    var n = wr,
        i = pg,
        a = e && !e.nodeType && e,
        d = a && !0 && t && !t.nodeType && t,
        m = d && d.exports === a,
        S = m ? n.Buffer : void 0,
        k = S ? S.isBuffer : void 0,
        I = k || i;
    t.exports = I
})(Ks, Ks.exports);
var gg = uo,
    mg = Sc,
    vg = us,
    yg = "[object Object]",
    bg = Function.prototype,
    wg = Object.prototype,
    Ic = bg.toString,
    Cg = wg.hasOwnProperty,
    xg = Ic.call(Object);

function Eg(t) {
    if (!vg(t) || gg(t) != yg) return !1;
    var e = mg(t);
    if (e === null) return !0;
    var n = Cg.call(e, "constructor") && e.constructor;
    return typeof n == "function" && n instanceof n && Ic.call(n) == xg
}
var _g = Eg,
    Sg = uo,
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
    Bg = "[object RegExp]",
    Vg = "[object Set]",
    $g = "[object String]",
    jg = "[object WeakMap]",
    Fg = "[object ArrayBuffer]",
    zg = "[object DataView]",
    Gg = "[object Float32Array]",
    Hg = "[object Float64Array]",
    Ug = "[object Int8Array]",
    qg = "[object Int16Array]",
    Wg = "[object Int32Array]",
    Yg = "[object Uint8Array]",
    Xg = "[object Uint8ClampedArray]",
    Kg = "[object Uint16Array]",
    Jg = "[object Uint32Array]",
    Dt = {};
Dt[Gg] = Dt[Hg] = Dt[Ug] = Dt[qg] = Dt[Wg] = Dt[Yg] = Dt[Xg] = Dt[Kg] = Dt[Jg] = !0;
Dt[Ag] = Dt[Og] = Dt[Fg] = Dt[Rg] = Dt[zg] = Dt[Ig] = Dt[Lg] = Dt[Dg] = Dt[Mg] = Dt[Pg] = Dt[Ng] = Dt[Bg] = Dt[Vg] = Dt[$g] = Dt[jg] = !1;

function Qg(t) {
    return Tg(t) && kg(t.length) && !!Dt[Sg(t)]
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
    var n = bc,
        i = e && !e.nodeType && e,
        a = i && !0 && t && !t.nodeType && t,
        d = a && a.exports === i,
        m = d && n.process,
        S = function() {
            try {
                var k = a && a.require && a.require("util").types;
                return k || m && m.binding && m.binding("util")
            } catch {}
        }();
    t.exports = S
})(Ca, Ca.exports);
var nm = Zg,
    im = tm,
    Sl = Ca.exports,
    kl = Sl && Sl.isTypedArray,
    rm = kl ? im(kl) : nm,
    Lc = rm;

function sm(t, e) {
    if (!(e === "constructor" && typeof t[e] == "function") && e != "__proto__") return t[e]
}
var Dc = sm,
    om = $a,
    am = ao,
    lm = Object.prototype,
    cm = lm.hasOwnProperty;

function um(t, e, n) {
    var i = t[e];
    (!(cm.call(t, e) && am(i, n)) || n === void 0 && !(e in t)) && om(t, e, n)
}
var hm = um,
    dm = hm,
    fm = $a;

function pm(t, e, n, i) {
    var a = !n;
    n || (n = {});
    for (var d = -1, m = e.length; ++d < m;) {
        var S = e[d],
            k = i ? i(n[S], t[S], S, n, t) : void 0;
        k === void 0 && (k = t[S]), a ? fm(n, S, k) : dm(n, S, k)
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
    bm = /^(?:0|[1-9]\d*)$/;

function wm(t, e) {
    var n = typeof t;
    return e = e == null ? ym : e, !!e && (n == "number" || n != "symbol" && bm.test(t)) && t > -1 && t % 1 == 0 && t < e
}
var Mc = wm,
    Cm = vm,
    xm = Ac,
    Em = Oc,
    _m = Ks.exports,
    Sm = Mc,
    km = Lc,
    Tm = Object.prototype,
    Am = Tm.hasOwnProperty;

function Om(t, e) {
    var n = Em(t),
        i = !n && xm(t),
        a = !n && !i && _m(t),
        d = !n && !i && !a && km(t),
        m = n || i || a || d,
        S = m ? Cm(t.length, String) : [],
        k = S.length;
    for (var I in t)(e || Am.call(t, I)) && !(m && (I == "length" || a && (I == "offset" || I == "parent") || d && (I == "buffer" || I == "byteLength" || I == "byteOffset") || Sm(I, k))) && S.push(I);
    return S
}
var Rm = Om;

function Im(t) {
    var e = [];
    if (t != null)
        for (var n in Object(t)) e.push(n);
    return e
}
var Lm = Im,
    Dm = Bi,
    Mm = kc,
    Pm = Lm,
    Nm = Object.prototype,
    Bm = Nm.hasOwnProperty;

function Vm(t) {
    if (!Dm(t)) return Pm(t);
    var e = Mm(t),
        n = [];
    for (var i in t) i == "constructor" && (e || !Bm.call(t, i)) || n.push(i);
    return n
}
var $m = Vm,
    jm = Rm,
    Fm = $m,
    zm = ja;

function Gm(t) {
    return zm(t) ? jm(t, !0) : Fm(t)
}
var Pc = Gm,
    Hm = gm,
    Um = Pc;

function qm(t) {
    return Hm(t, Um(t))
}
var Wm = qm,
    Tl = _c,
    Ym = wa.exports,
    Xm = Rp,
    Km = Lp,
    Jm = qp,
    Al = Ac,
    Ol = Oc,
    Qm = dg,
    Zm = Ks.exports,
    ev = Ba,
    tv = Bi,
    nv = _g,
    iv = Lc,
    Rl = Dc,
    rv = Wm;

function sv(t, e, n, i, a, d, m) {
    var S = Rl(t, n),
        k = Rl(e, n),
        I = m.get(k);
    if (I) {
        Tl(t, n, I);
        return
    }
    var L = d ? d(S, k, n + "", t, e, m) : void 0,
        $ = L === void 0;
    if ($) {
        var J = Ol(k),
            ie = !J && Zm(k),
            X = !J && !ie && iv(k);
        L = k, J || ie || X ? Ol(S) ? L = S : Qm(S) ? L = Km(S) : ie ? ($ = !1, L = Ym(k, !0)) : X ? ($ = !1, L = Xm(k, !0)) : L = [] : nv(k) || Al(k) ? (L = S, Al(S) ? L = rv(S) : (!tv(S) || ev(S)) && (L = Jm(k))) : $ = !1
    }
    $ && (m.set(k, L), a(L, k, i, d, m), m.delete(k)), Tl(t, n, L)
}
var ov = sv,
    av = hp,
    lv = _c,
    cv = xp,
    uv = ov,
    hv = Bi,
    dv = Pc,
    fv = Dc;

function Nc(t, e, n, i, a) {
    t !== e && cv(e, function(d, m) {
        if (a || (a = new av), hv(d)) uv(t, e, m, n, Nc, i, a);
        else {
            var S = i ? i(fv(t, m), d, m + "", t, e, a) : void 0;
            S === void 0 && (S = d), lv(t, m, S)
        }
    }, dv)
}
var pv = Nc;

function gv(t) {
    return t
}
var Bc = gv;

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

function bv(t, e, n) {
    return e = Il(e === void 0 ? t.length - 1 : e, 0),
        function() {
            for (var i = arguments, a = -1, d = Il(i.length - e, 0), m = Array(d); ++a < d;) m[a] = i[e + a];
            a = -1;
            for (var S = Array(e + 1); ++a < e;) S[a] = i[a];
            return S[e] = n(m), yv(t, this, S)
        }
}
var wv = bv;

function Cv(t) {
    return function() {
        return t
    }
}
var xv = Cv,
    Ev = xv,
    Ll = Ec,
    _v = Bc,
    Sv = Ll ? function(t, e) {
        return Ll(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ev(e),
            writable: !0
        })
    } : _v,
    kv = Sv,
    Tv = 800,
    Av = 16,
    Ov = Date.now;

function Rv(t) {
    var e = 0,
        n = 0;
    return function() {
        var i = Ov(),
            a = Av - (i - n);
        if (n = i, a > 0) {
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
    Nv = Bc,
    Bv = wv,
    Vv = Pv;

function $v(t, e) {
    return Vv(Bv(t, e, Nv), t + "")
}
var jv = $v,
    Fv = ao,
    zv = ja,
    Gv = Mc,
    Hv = Bi;

function Uv(t, e, n) {
    if (!Hv(n)) return !1;
    var i = typeof e;
    return (i == "number" ? zv(n) && Gv(e, n.length) : i == "string" && e in n) ? Fv(n[e], t) : !1
}
var qv = Uv,
    Wv = jv,
    Yv = qv;

function Xv(t) {
    return Wv(function(e, n) {
        var i = -1,
            a = n.length,
            d = a > 1 ? n[a - 1] : void 0,
            m = a > 2 ? n[2] : void 0;
        for (d = t.length > 3 && typeof d == "function" ? (a--, d) : void 0, m && Yv(n[0], n[1], m) && (d = a < 3 ? void 0 : d, a = 1), e = Object(e); ++i < a;) {
            var S = n[i];
            S && t(e, S, i, d)
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
        const d = parseInt(a, 16),
            m = Math.min(Math.max(0, (d >> 16) * n), 255),
            S = Math.min(Math.max(0, (d >> 8 & 255) * n), 255);
        let I = (Math.min(Math.max(0, (d & 255) * n), 255) | S << 8 | m << 16).toString(16);
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
let Mt = fl;
st(Mt, "queryParams", new URLSearchParams(window.location.search)), st(Mt, "getQueryParam", e => fl.queryParams.get(e)), st(Mt, "sleep", e => new Promise(n => {
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
        var i, a;
        delete window.tv.storage, window.tv.storage = {
            namespace: (a = (i = Mt.getQueryParam("namespace")) != null ? i : Mt.getQueryParam("ns")) != null ? a : this.defaultNamespace,
            isDisabled: Mt.queryParams.has("incognito") || Mt.queryParams.has("nc")
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
        let d = JSON.parse(i);
        d = d.filter(S => {
            const k = S.split("-")[0];
            return a !== k
        }), d.push(n), this.set("tags", JSON.stringify(d))
    }
    static getScopedKey(e, n) {
        const i = `${this.namespace}:${e}`,
            a = this.tag ? `${this.namespace}:${e}:tag:${this.tag}` : null,
            d = this.code ? `${this.namespace}:${e}:code:${this.code}` : null;
        if (n === "none") return i;
        if (n === "tag") {
            if (!a) throw new Error('[Storage] requested "tag" scope but tv.storage.tag is undefined');
            return a
        }
        if (n === "code") {
            if (!d) throw new Error('[Storage] requested "code" scope but tv.storage.code is undefined');
            return d
        }
        return d && window.localStorage.getItem(d) !== null ? d : a && window.localStorage.getItem(a) !== null ? a : i
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
                d = window.localStorage.getItem(i);
            !d || (window.localStorage.setItem(a, d), window.localStorage.removeItem(i))
        })
    }
}
st(en, "defaultNamespace", "tv");
class Ni {
    constructor() {
        st(this, "artifacts");
        this.artifacts = this.list()
    }
    get hasUnviewed() {
        return this.artifacts.some(e => !e.viewed)
    }
    add(e, n) {
        Ni.add(e, n), this.artifacts = this.list()
    }
    static add(e, n) {
        if (!en.isSupported) return;
        const i = this.isTestArtifact(e) ? "http" : "https",
            a = this.isTestArtifact(e) ? "games-test.jackbox.tv" : "games.jackbox.tv",
            d = `${i}://${a}/artifact/${e.categoryId}/${e.artifactId}/`,
            m = en.get("galleries") || "[]";
        try {
            const S = JSON.parse(m) || [];
            if (S.some(k => k.url === d)) return;
            S.unshift({
                url: d,
                time: new Date().getTime(),
                categoryId: e.categoryId,
                viewed: !1
            }), en.set("galleries", JSON.stringify(S.slice(0, 40)))
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
        Ni.setAsViewed(e), this.artifacts = this.list()
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
            return (JSON.parse(n) || []).filter(d => i - d.time < 525600 * 60 * 1e3).map(d => {
                const m = new Date(d.time),
                    S = e.format(m),
                    k = d.url.split("/"),
                    I = k[k.length - 1] === "" ? k[k.length - 2] : k[k.length - 1];
                let L = d.categoryId;
                return L || (d.url.indexOf("Quiplash2") !== -1 ? L = "Quiplash2Game" : d.url.indexOf("Drawful") !== -1 ? L = "DrawfulGame" : d.url.indexOf("TeeKO") !== -1 ? L = "TeeKOGame" : d.url.indexOf("TriviaDeath") !== -1 && (L = "TriviaDeathResults")), {
                    id: I,
                    gameName: L,
                    date: S,
                    ...d
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
            function d() {
                this.fetch = !1, this.DOMException = n.DOMException
            }
            return d.prototype = n, new d
        }();
    (function(d) {
        (function(m) {
            var S = {
                searchParams: "URLSearchParams" in d,
                iterable: "Symbol" in d && "iterator" in Symbol,
                blob: "FileReader" in d && "Blob" in d && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in d,
                arrayBuffer: "ArrayBuffer" in d
            };

            function k(H) {
                return H && DataView.prototype.isPrototypeOf(H)
            }
            if (S.arrayBuffer) var I = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                L = ArrayBuffer.isView || function(H) {
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
                var ae = {
                    next: function() {
                        var Ae = H.shift();
                        return {
                            done: Ae === void 0,
                            value: Ae
                        }
                    }
                };
                return S.iterable && (ae[Symbol.iterator] = function() {
                    return ae
                }), ae
            }

            function X(H) {
                this.map = {}, H instanceof X ? H.forEach(function(ae, Ae) {
                    this.append(Ae, ae)
                }, this) : Array.isArray(H) ? H.forEach(function(ae) {
                    this.append(ae[0], ae[1])
                }, this) : H && Object.getOwnPropertyNames(H).forEach(function(ae) {
                    this.append(ae, H[ae])
                }, this)
            }
            X.prototype.append = function(H, ae) {
                H = $(H), ae = J(ae);
                var Ae = this.map[H];
                this.map[H] = Ae ? Ae + ", " + ae : ae
            }, X.prototype.delete = function(H) {
                delete this.map[$(H)]
            }, X.prototype.get = function(H) {
                return H = $(H), this.has(H) ? this.map[H] : null
            }, X.prototype.has = function(H) {
                return this.map.hasOwnProperty($(H))
            }, X.prototype.set = function(H, ae) {
                this.map[$(H)] = J(ae)
            }, X.prototype.forEach = function(H, ae) {
                for (var Ae in this.map) this.map.hasOwnProperty(Ae) && H.call(ae, this.map[Ae], Ae, this)
            }, X.prototype.keys = function() {
                var H = [];
                return this.forEach(function(ae, Ae) {
                    H.push(Ae)
                }), ie(H)
            }, X.prototype.values = function() {
                var H = [];
                return this.forEach(function(ae) {
                    H.push(ae)
                }), ie(H)
            }, X.prototype.entries = function() {
                var H = [];
                return this.forEach(function(ae, Ae) {
                    H.push([Ae, ae])
                }), ie(H)
            }, S.iterable && (X.prototype[Symbol.iterator] = X.prototype.entries);

            function re(H) {
                if (H.bodyUsed) return Promise.reject(new TypeError("Already read"));
                H.bodyUsed = !0
            }

            function v(H) {
                return new Promise(function(ae, Ae) {
                    H.onload = function() {
                        ae(H.result)
                    }, H.onerror = function() {
                        Ae(H.error)
                    }
                })
            }

            function P(H) {
                var ae = new FileReader,
                    Ae = v(ae);
                return ae.readAsArrayBuffer(H), Ae
            }

            function q(H) {
                var ae = new FileReader,
                    Ae = v(ae);
                return ae.readAsText(H), Ae
            }

            function le(H) {
                for (var ae = new Uint8Array(H), Ae = new Array(ae.length), we = 0; we < ae.length; we++) Ae[we] = String.fromCharCode(ae[we]);
                return Ae.join("")
            }

            function oe(H) {
                if (H.slice) return H.slice(0);
                var ae = new Uint8Array(H.byteLength);
                return ae.set(new Uint8Array(H)), ae.buffer
            }

            function ye() {
                return this.bodyUsed = !1, this._initBody = function(H) {
                    this._bodyInit = H, H ? typeof H == "string" ? this._bodyText = H : S.blob && Blob.prototype.isPrototypeOf(H) ? this._bodyBlob = H : S.formData && FormData.prototype.isPrototypeOf(H) ? this._bodyFormData = H : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) ? this._bodyText = H.toString() : S.arrayBuffer && S.blob && k(H) ? (this._bodyArrayBuffer = oe(H.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : S.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(H) || L(H)) ? this._bodyArrayBuffer = oe(H) : this._bodyText = H = Object.prototype.toString.call(H) : this._bodyText = "", this.headers.get("content-type") || (typeof H == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : S.searchParams && URLSearchParams.prototype.isPrototypeOf(H) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
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
                    if (this._bodyArrayBuffer) return Promise.resolve(le(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, S.formData && (this.formData = function() {
                    return this.text().then(Pe)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function _e(H) {
                var ae = H.toUpperCase();
                return f.indexOf(ae) > -1 ? ae : H
            }

            function Oe(H, ae) {
                ae = ae || {};
                var Ae = ae.body;
                if (H instanceof Oe) {
                    if (H.bodyUsed) throw new TypeError("Already read");
                    this.url = H.url, this.credentials = H.credentials, ae.headers || (this.headers = new X(H.headers)), this.method = H.method, this.mode = H.mode, this.signal = H.signal, !Ae && H._bodyInit != null && (Ae = H._bodyInit, H.bodyUsed = !0)
                } else this.url = String(H);
                if (this.credentials = ae.credentials || this.credentials || "same-origin", (ae.headers || !this.headers) && (this.headers = new X(ae.headers)), this.method = _e(ae.method || this.method || "GET"), this.mode = ae.mode || this.mode || null, this.signal = ae.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && Ae) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody(Ae)
            }
            Oe.prototype.clone = function() {
                return new Oe(this, {
                    body: this._bodyInit
                })
            };

            function Pe(H) {
                var ae = new FormData;
                return H.trim().split("&").forEach(function(Ae) {
                    if (Ae) {
                        var we = Ae.split("="),
                            be = we.shift().replace(/\+/g, " "),
                            he = we.join("=").replace(/\+/g, " ");
                        ae.append(decodeURIComponent(be), decodeURIComponent(he))
                    }
                }), ae
            }

            function lt(H) {
                var ae = new X,
                    Ae = H.replace(/\r?\n[\t ]+/g, " ");
                return Ae.split(/\r?\n/).forEach(function(we) {
                    var be = we.split(":"),
                        he = be.shift().trim();
                    if (he) {
                        var Se = be.join(":").trim();
                        ae.append(he, Se)
                    }
                }), ae
            }
            ye.call(Oe.prototype);

            function Ve(H, ae) {
                ae || (ae = {}), this.type = "default", this.status = ae.status === void 0 ? 200 : ae.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in ae ? ae.statusText : "OK", this.headers = new X(ae.headers), this.url = ae.url || "", this._initBody(H)
            }
            ye.call(Ve.prototype), Ve.prototype.clone = function() {
                return new Ve(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new X(this.headers),
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
            Ve.redirect = function(H, ae) {
                if (K.indexOf(ae) === -1) throw new RangeError("Invalid status code");
                return new Ve(null, {
                    status: ae,
                    headers: {
                        location: H
                    }
                })
            }, m.DOMException = d.DOMException;
            try {
                new m.DOMException
            } catch {
                m.DOMException = function(ae, Ae) {
                    this.message = ae, this.name = Ae;
                    var we = Error(ae);
                    this.stack = we.stack
                }, m.DOMException.prototype = Object.create(Error.prototype), m.DOMException.prototype.constructor = m.DOMException
            }

            function Fe(H, ae) {
                return new Promise(function(Ae, we) {
                    var be = new Oe(H, ae);
                    if (be.signal && be.signal.aborted) return we(new m.DOMException("Aborted", "AbortError"));
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
                        we(new TypeError("Network request failed"))
                    }, he.ontimeout = function() {
                        we(new TypeError("Network request failed"))
                    }, he.onabort = function() {
                        we(new m.DOMException("Aborted", "AbortError"))
                    }, he.open(be.method, be.url, !0), be.credentials === "include" ? he.withCredentials = !0 : be.credentials === "omit" && (he.withCredentials = !1), "responseType" in he && S.blob && (he.responseType = "blob"), be.headers.forEach(function(Te, $e) {
                        he.setRequestHeader($e, Te)
                    }), be.signal && (be.signal.addEventListener("abort", Se), he.onreadystatechange = function() {
                        he.readyState === 4 && be.signal.removeEventListener("abort", Se)
                    }), he.send(typeof be._bodyInit > "u" ? null : be._bodyInit)
                })
            }
            return Fe.polyfill = !0, d.fetch || (d.fetch = Fe, d.Headers = X, d.Request = Oe, d.Response = Ve), m.Headers = X, m.Request = Oe, m.Response = Ve, m.fetch = Fe, Object.defineProperty(m, "__esModule", {
                value: !0
            }), m
        })({})
    })(i), i.fetch.ponyfill = !0, delete i.fetch.polyfill;
    var a = i;
    e = a.fetch, e.default = a.fetch, e.fetch = a.fetch, e.Headers = a.Headers, e.Request = a.Request, e.Response = a.Response, t.exports = e
})(Ea, Ea.exports);
var ty = function() {
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
        var d = Object.getOwnPropertySymbols(e);
        if (d.length !== 1 || d[0] !== n || !Object.prototype.propertyIsEnumerable.call(e, n)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var m = Object.getOwnPropertyDescriptor(e, n);
            if (m.value !== a || m.enumerable !== !0) return !1
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
        for (var i = Zo.call(arguments, 1), a, d = function() {
                if (this instanceof a) {
                    var L = n.apply(this, i.concat(Zo.call(arguments)));
                    return Object(L) === L ? L : this
                } else return n.apply(e, i.concat(Zo.call(arguments)))
            }, m = Math.max(0, n.length - i.length), S = [], k = 0; k < m; k++) S.push("$" + k);
        if (a = Function("binder", "return function (" + S.join(",") + "){ return binder.apply(this,arguments); }")(d), n.prototype) {
            var I = function() {};
            I.prototype = n.prototype, a.prototype = new I, I.prototype = null
        }
        return a
    },
    ly = ay,
    Fa = Function.prototype.bind || ly,
    cy = Fa,
    uy = cy.call(Function.call, Object.prototype.hasOwnProperty),
    mt, gr = SyntaxError,
    Vc = Function,
    ur = TypeError,
    ea = function(t) {
        try {
            return Vc('"use strict"; return (' + t + ").constructor;")()
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
    hy = Mi ? function() {
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
        "%Function%": Vc,
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
    Js = uy,
    py = hs.call(Function.call, Array.prototype.concat),
    gy = hs.call(Function.apply, Array.prototype.splice),
    Pl = hs.call(Function.call, String.prototype.replace),
    Qs = hs.call(Function.call, String.prototype.slice),
    my = hs.call(Function.call, RegExp.prototype.exec),
    vy = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    yy = /\\(\\)?/g,
    by = function(e) {
        var n = Qs(e, 0, 1),
            i = Qs(e, -1);
        if (n === "%" && i !== "%") throw new gr("invalid intrinsic syntax, expected closing `%`");
        if (i === "%" && n !== "%") throw new gr("invalid intrinsic syntax, expected opening `%`");
        var a = [];
        return Pl(e, vy, function(d, m, S, k) {
            a[a.length] = S ? Pl(k, yy, "$1") : m || d
        }), a
    },
    wy = function(e, n) {
        var i = e,
            a;
        if (Js(Ml, i) && (a = Ml[i], i = "%" + a[0] + "%"), Js(hr, i)) {
            var d = hr[i];
            if (d === or && (d = fy(i)), typeof d > "u" && !n) throw new ur("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return {
                alias: a,
                name: i,
                value: d
            }
        }
        throw new gr("intrinsic " + e + " does not exist!")
    },
    za = function(e, n) {
        if (typeof e != "string" || e.length === 0) throw new ur("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof n != "boolean") throw new ur('"allowMissing" argument must be a boolean');
        if (my(/^%?[^%]*%?$/g, e) === null) throw new gr("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var i = by(e),
            a = i.length > 0 ? i[0] : "",
            d = wy("%" + a + "%", n),
            m = d.name,
            S = d.value,
            k = !1,
            I = d.alias;
        I && (a = I[0], gy(i, py([0, 1], I)));
        for (var L = 1, $ = !0; L < i.length; L += 1) {
            var J = i[L],
                ie = Qs(J, 0, 1),
                X = Qs(J, -1);
            if ((ie === '"' || ie === "'" || ie === "`" || X === '"' || X === "'" || X === "`") && ie !== X) throw new gr("property names with quotes must have matching quotes");
            if ((J === "constructor" || !$) && (k = !0), a += "." + J, m = "%" + a + "%", Js(hr, m)) S = hr[m];
            else if (S != null) {
                if (!(J in S)) {
                    if (!n) throw new ur("base intrinsic for " + e + " exists, but the property is not available.");
                    return
                }
                if (Mi && L + 1 >= i.length) {
                    var re = Mi(S, J);
                    $ = !!re, $ && "get" in re && !("originalValue" in re.get) ? S = re.get : S = S[J]
                } else $ = Js(S, J), S = S[J];
                $ && !k && (hr[m] = S)
            }
        }
        return S
    },
    $c = {
        exports: {}
    };
(function(t) {
    var e = Fa,
        n = za,
        i = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        d = n("%Reflect.apply%", !0) || e.call(a, i),
        m = n("%Object.getOwnPropertyDescriptor%", !0),
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
        var J = d(e, a, arguments);
        if (m && S) {
            var ie = m(J, "length");
            ie.configurable && S(J, "length", {
                value: 1 + k(0, $.length - (arguments.length - 1))
            })
        }
        return J
    };
    var I = function() {
        return d(e, i, arguments)
    };
    S ? S(t.exports, "apply", {
        value: I
    }) : t.exports.apply = I
})($c);
var jc = za,
    Fc = $c.exports,
    Cy = Fc(jc("String.prototype.indexOf")),
    xy = function(e, n) {
        var i = jc(e, !!n);
        return typeof i == "function" && Cy(e, ".prototype.") > -1 ? Fc(i) : i
    };
const Ey = {},
    _y = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ey
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Sy = ph(_y);
var Ga = typeof Map == "function" && Map.prototype,
    na = Object.getOwnPropertyDescriptor && Ga ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Zs = Ga && na && typeof na.get == "function" ? na.get : null,
    ky = Ga && Map.prototype.forEach,
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
    Ua = String.prototype.slice,
    hi = String.prototype.replace,
    Py = String.prototype.toUpperCase,
    Bl = String.prototype.toLowerCase,
    zc = RegExp.prototype.test,
    Vl = Array.prototype.concat,
    jn = Array.prototype.join,
    Ny = Array.prototype.slice,
    $l = Math.floor,
    _a = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    ra = Object.getOwnPropertySymbols,
    Sa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    mr = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    cn = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mr ? "object" : "symbol") ? Symbol.toStringTag : null,
    Gc = Object.prototype.propertyIsEnumerable,
    jl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
        return t.__proto__
    } : null);

function Fl(t, e) {
    if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || zc.call(/e/, e)) return e;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof t == "number") {
        var i = t < 0 ? -$l(-t) : $l(t);
        if (i !== t) {
            var a = String(i),
                d = Ua.call(e, a.length + 1);
            return hi.call(a, n, "$&_") + "." + hi.call(hi.call(d, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return hi.call(e, n, "$&_")
}
var ka = Sy,
    zl = ka.custom,
    Gl = Uc(zl) ? zl : null,
    By = function t(e, n, i, a) {
        var d = n || {};
        if (li(d, "quoteStyle") && d.quoteStyle !== "single" && d.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (li(d, "maxStringLength") && (typeof d.maxStringLength == "number" ? d.maxStringLength < 0 && d.maxStringLength !== 1 / 0 : d.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var m = li(d, "customInspect") ? d.customInspect : !0;
        if (typeof m != "boolean" && m !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (li(d, "indent") && d.indent !== null && d.indent !== "	" && !(parseInt(d.indent, 10) === d.indent && d.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (li(d, "numericSeparator") && typeof d.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var S = d.numericSeparator;
        if (typeof e > "u") return "undefined";
        if (e === null) return "null";
        if (typeof e == "boolean") return e ? "true" : "false";
        if (typeof e == "string") return Wc(e, d);
        if (typeof e == "number") {
            if (e === 0) return 1 / 0 / e > 0 ? "0" : "-0";
            var k = String(e);
            return S ? Fl(e, k) : k
        }
        if (typeof e == "bigint") {
            var I = String(e) + "n";
            return S ? Fl(e, I) : I
        }
        var L = typeof d.depth > "u" ? 5 : d.depth;
        if (typeof i > "u" && (i = 0), i >= L && L > 0 && typeof e == "object") return Ta(e) ? "[Array]" : "[Object]";
        var $ = tb(d, i);
        if (typeof a > "u") a = [];
        else if (qc(a, e) >= 0) return "[Circular]";

        function J(Fe, H, ae) {
            if (H && (a = Ny.call(a), a.push(H)), ae) {
                var Ae = {
                    depth: d.depth
                };
                return li(d, "quoteStyle") && (Ae.quoteStyle = d.quoteStyle), t(Fe, Ae, i + 1, a)
            }
            return t(Fe, d, i + 1, a)
        }
        if (typeof e == "function" && !Hl(e)) {
            var ie = qy(e),
                X = Ms(e, J);
            return "[Function" + (ie ? ": " + ie : " (anonymous)") + "]" + (X.length > 0 ? " { " + jn.call(X, ", ") + " }" : "")
        }
        if (Uc(e)) {
            var re = mr ? hi.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : Sa.call(e);
            return typeof e == "object" && !mr ? Xr(re) : re
        }
        if (Qy(e)) {
            for (var v = "<" + Bl.call(String(e.nodeName)), P = e.attributes || [], q = 0; q < P.length; q++) v += " " + P[q].name + "=" + Hc(Vy(P[q].value), "double", d);
            return v += ">", e.childNodes && e.childNodes.length && (v += "..."), v += "</" + Bl.call(String(e.nodeName)) + ">", v
        }
        if (Ta(e)) {
            if (e.length === 0) return "[]";
            var le = Ms(e, J);
            return $ && !eb(le) ? "[" + Aa(le, $) + "]" : "[ " + jn.call(le, ", ") + " ]"
        }
        if (jy(e)) {
            var oe = Ms(e, J);
            return !("cause" in Error.prototype) && "cause" in e && !Gc.call(e, "cause") ? "{ [" + String(e) + "] " + jn.call(Vl.call("[cause]: " + J(e.cause), oe), ", ") + " }" : oe.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + jn.call(oe, ", ") + " }"
        }
        if (typeof e == "object" && m) {
            if (Gl && typeof e[Gl] == "function" && ka) return ka(e, {
                depth: L - i
            });
            if (m !== "symbol" && typeof e.inspect == "function") return e.inspect()
        }
        if (Wy(e)) {
            var ye = [];
            return ky.call(e, function(Fe, H) {
                ye.push(J(H, e, !0) + " => " + J(Fe, e))
            }), Ul("Map", Zs.call(e), ye, $)
        }
        if (Ky(e)) {
            var f = [];
            return Ty.call(e, function(Fe) {
                f.push(J(Fe, e))
            }), Ul("Set", eo.call(e), f, $)
        }
        if (Yy(e)) return sa("WeakMap");
        if (Jy(e)) return sa("WeakSet");
        if (Xy(e)) return sa("WeakRef");
        if (zy(e)) return Xr(J(Number(e)));
        if (Hy(e)) return Xr(J(_a.call(e)));
        if (Gy(e)) return Xr(Iy.call(e));
        if (Fy(e)) return Xr(J(String(e)));
        if (!$y(e) && !Hl(e)) {
            var _e = Ms(e, J),
                Oe = jl ? jl(e) === Object.prototype : e instanceof Object || e.constructor === Object,
                Pe = e instanceof Object ? "" : "null prototype",
                lt = !Oe && cn && Object(e) === e && cn in e ? Ua.call(pi(e), 8, -1) : Pe ? "Object" : "",
                Ve = Oe || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "",
                K = Ve + (lt || Pe ? "[" + jn.call(Vl.call([], lt || [], Pe || []), ": ") + "] " : "");
            return _e.length === 0 ? K + "{}" : $ ? K + "{" + Aa(_e, $) + "}" : K + "{ " + jn.call(_e, ", ") + " }"
        }
        return String(e)
    };

function Hc(t, e, n) {
    var i = (n.quoteStyle || e) === "double" ? '"' : "'";
    return i + t + i
}

function Vy(t) {
    return hi.call(String(t), /"/g, "&quot;")
}

function Ta(t) {
    return pi(t) === "[object Array]" && (!cn || !(typeof t == "object" && cn in t))
}

function $y(t) {
    return pi(t) === "[object Date]" && (!cn || !(typeof t == "object" && cn in t))
}

function Hl(t) {
    return pi(t) === "[object RegExp]" && (!cn || !(typeof t == "object" && cn in t))
}

function jy(t) {
    return pi(t) === "[object Error]" && (!cn || !(typeof t == "object" && cn in t))
}

function Fy(t) {
    return pi(t) === "[object String]" && (!cn || !(typeof t == "object" && cn in t))
}

function zy(t) {
    return pi(t) === "[object Number]" && (!cn || !(typeof t == "object" && cn in t))
}

function Gy(t) {
    return pi(t) === "[object Boolean]" && (!cn || !(typeof t == "object" && cn in t))
}

function Uc(t) {
    if (mr) return t && typeof t == "object" && t instanceof Symbol;
    if (typeof t == "symbol") return !0;
    if (!t || typeof t != "object" || !Sa) return !1;
    try {
        return Sa.call(t), !0
    } catch {}
    return !1
}

function Hy(t) {
    if (!t || typeof t != "object" || !_a) return !1;
    try {
        return _a.call(t), !0
    } catch {}
    return !1
}
var Uy = Object.prototype.hasOwnProperty || function(t) {
    return t in this
};

function li(t, e) {
    return Uy.call(t, e)
}

function pi(t) {
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
        return Wc(Ua.call(t, 0, e.maxStringLength), e) + i
    }
    var a = hi.call(hi.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Zy);
    return Hc(a, "single", e)
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

function Ul(t, e, n, i) {
    var a = i ? Aa(n, i) : jn.call(n, ", ");
    return t + " (" + e + ") {" + a + "}"
}

function eb(t) {
    for (var e = 0; e < t.length; e++)
        if (qc(t[e], `
`) >= 0) return !1;
    return !0
}

function tb(t, e) {
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
    var d = typeof ra == "function" ? ra(t) : [],
        m;
    if (mr) {
        m = {};
        for (var S = 0; S < d.length; S++) m["$" + d[S]] = d[S]
    }
    for (var k in t) !li(t, k) || n && String(Number(k)) === k && k < t.length || mr && m["$" + k] instanceof Symbol || (zc.call(/[^\w$]/, k) ? i.push(e(k, t) + ": " + e(t[k], t)) : i.push(k + ": " + e(t[k], t)));
    if (typeof ra == "function")
        for (var I = 0; I < d.length; I++) Gc.call(t, d[I]) && i.push("[" + e(d[I]) + "]: " + e(t[d[I]], t));
    return i
}
var qa = za,
    _r = xy,
    nb = By,
    ib = qa("%TypeError%"),
    Ps = qa("%WeakMap%", !0),
    Ns = qa("%Map%", !0),
    rb = _r("WeakMap.prototype.get", !0),
    sb = _r("WeakMap.prototype.set", !0),
    ob = _r("WeakMap.prototype.has", !0),
    ab = _r("Map.prototype.get", !0),
    lb = _r("Map.prototype.set", !0),
    cb = _r("Map.prototype.has", !0),
    Wa = function(t, e) {
        for (var n = t, i;
            (i = n.next) !== null; n = i)
            if (i.key === e) return n.next = i.next, i.next = t.next, t.next = i, i
    },
    ub = function(t, e) {
        var n = Wa(t, e);
        return n && n.value
    },
    hb = function(t, e, n) {
        var i = Wa(t, e);
        i ? i.value = n : t.next = {
            key: e,
            next: t.next,
            value: n
        }
    },
    db = function(t, e) {
        return !!Wa(t, e)
    },
    fb = function() {
        var e, n, i, a = {
            assert: function(d) {
                if (!a.has(d)) throw new ib("Side channel does not contain " + nb(d))
            },
            get: function(d) {
                if (Ps && d && (typeof d == "object" || typeof d == "function")) {
                    if (e) return rb(e, d)
                } else if (Ns) {
                    if (n) return ab(n, d)
                } else if (i) return ub(i, d)
            },
            has: function(d) {
                if (Ps && d && (typeof d == "object" || typeof d == "function")) {
                    if (e) return ob(e, d)
                } else if (Ns) {
                    if (n) return cb(n, d)
                } else if (i) return db(i, d);
                return !1
            },
            set: function(d, m) {
                Ps && d && (typeof d == "object" || typeof d == "function") ? (e || (e = new Ps), sb(e, d, m)) : Ns ? (n || (n = new Ns), lb(n, d, m)) : (i || (i = {
                    key: {},
                    next: null
                }), hb(i, d, m))
            }
        };
        return a
    },
    pb = String.prototype.replace,
    gb = /%20/g,
    oa = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Ya = {
        default: oa.RFC3986,
        formatters: {
            RFC1738: function(t) {
                return pb.call(t, gb, "+")
            },
            RFC3986: function(t) {
                return String(t)
            }
        },
        RFC1738: oa.RFC1738,
        RFC3986: oa.RFC3986
    },
    mb = Ya,
    aa = Object.prototype.hasOwnProperty,
    Li = Array.isArray,
    Vn = function() {
        for (var t = [], e = 0; e < 256; ++e) t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
        return t
    }(),
    vb = function(e) {
        for (; e.length > 1;) {
            var n = e.pop(),
                i = n.obj[n.prop];
            if (Li(i)) {
                for (var a = [], d = 0; d < i.length; ++d) typeof i[d] < "u" && a.push(i[d]);
                n.obj[n.prop] = a
            }
        }
    },
    Yc = function(e, n) {
        for (var i = n && n.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) typeof e[a] < "u" && (i[a] = e[a]);
        return i
    },
    yb = function t(e, n, i) {
        if (!n) return e;
        if (typeof n != "object") {
            if (Li(e)) e.push(n);
            else if (e && typeof e == "object")(i && (i.plainObjects || i.allowPrototypes) || !aa.call(Object.prototype, n)) && (e[n] = !0);
            else return [e, n];
            return e
        }
        if (!e || typeof e != "object") return [e].concat(n);
        var a = e;
        return Li(e) && !Li(n) && (a = Yc(e, i)), Li(e) && Li(n) ? (n.forEach(function(d, m) {
            if (aa.call(e, m)) {
                var S = e[m];
                S && typeof S == "object" && d && typeof d == "object" ? e[m] = t(S, d, i) : e.push(d)
            } else e[m] = d
        }), e) : Object.keys(n).reduce(function(d, m) {
            var S = n[m];
            return aa.call(d, m) ? d[m] = t(d[m], S, i) : d[m] = S, d
        }, a)
    },
    bb = function(e, n) {
        return Object.keys(n).reduce(function(i, a) {
            return i[a] = n[a], i
        }, e)
    },
    wb = function(t, e, n) {
        var i = t.replace(/\+/g, " ");
        if (n === "iso-8859-1") return i.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(i)
        } catch {
            return i
        }
    },
    Cb = function(e, n, i, a, d) {
        if (e.length === 0) return e;
        var m = e;
        if (typeof e == "symbol" ? m = Symbol.prototype.toString.call(e) : typeof e != "string" && (m = String(e)), i === "iso-8859-1") return escape(m).replace(/%u[0-9a-f]{4}/gi, function(L) {
            return "%26%23" + parseInt(L.slice(2), 16) + "%3B"
        });
        for (var S = "", k = 0; k < m.length; ++k) {
            var I = m.charCodeAt(k);
            if (I === 45 || I === 46 || I === 95 || I === 126 || I >= 48 && I <= 57 || I >= 65 && I <= 90 || I >= 97 && I <= 122 || d === mb.RFC1738 && (I === 40 || I === 41)) {
                S += m.charAt(k);
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
            k += 1, I = 65536 + ((I & 1023) << 10 | m.charCodeAt(k) & 1023), S += Vn[240 | I >> 18] + Vn[128 | I >> 12 & 63] + Vn[128 | I >> 6 & 63] + Vn[128 | I & 63]
        }
        return S
    },
    xb = function(e) {
        for (var n = [{
                obj: {
                    o: e
                },
                prop: "o"
            }], i = [], a = 0; a < n.length; ++a)
            for (var d = n[a], m = d.obj[d.prop], S = Object.keys(m), k = 0; k < S.length; ++k) {
                var I = S[k],
                    L = m[I];
                typeof L == "object" && L !== null && i.indexOf(L) === -1 && (n.push({
                    obj: m,
                    prop: I
                }), i.push(L))
            }
        return vb(n), e
    },
    Eb = function(e) {
        return Object.prototype.toString.call(e) === "[object RegExp]"
    },
    _b = function(e) {
        return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    },
    Sb = function(e, n) {
        return [].concat(e, n)
    },
    kb = function(e, n) {
        if (Li(e)) {
            for (var i = [], a = 0; a < e.length; a += 1) i.push(n(e[a]));
            return i
        }
        return n(e)
    },
    Xc = {
        arrayToObject: Yc,
        assign: bb,
        combine: Sb,
        compact: xb,
        decode: wb,
        encode: Cb,
        isBuffer: _b,
        isRegExp: Eb,
        maybeMap: kb,
        merge: yb
    },
    Kc = fb,
    Oa = Xc,
    is = Ya,
    Tb = Object.prototype.hasOwnProperty,
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
    Ab = String.prototype.split,
    Ob = Array.prototype.push,
    Jc = function(t, e) {
        Ob.apply(t, ei(e) ? e : [e])
    },
    Rb = Date.prototype.toISOString,
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
            return Rb.call(e)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Ib = function(e) {
        return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint"
    },
    la = {},
    Lb = function t(e, n, i, a, d, m, S, k, I, L, $, J, ie, X, re, v) {
        for (var P = e, q = v, le = 0, oe = !1;
            (q = q.get(la)) !== void 0 && !oe;) {
            var ye = q.get(e);
            if (le += 1, typeof ye < "u") {
                if (ye === le) throw new RangeError("Cyclic object value");
                oe = !0
            }
            typeof q.get(la) > "u" && (le = 0)
        }
        if (typeof k == "function" ? P = k(n, P) : P instanceof Date ? P = $(P) : i === "comma" && ei(P) && (P = Oa.maybeMap(P, function(he) {
                return he instanceof Date ? $(he) : he
            })), P === null) {
            if (d) return S && !X ? S(n, nn.encoder, re, "key", J) : n;
            P = ""
        }
        if (Ib(P) || Oa.isBuffer(P)) {
            if (S) {
                var f = X ? n : S(n, nn.encoder, re, "key", J);
                if (i === "comma" && X) {
                    for (var _e = Ab.call(String(P), ","), Oe = "", Pe = 0; Pe < _e.length; ++Pe) Oe += (Pe === 0 ? "" : ",") + ie(S(_e[Pe], nn.encoder, re, "value", J));
                    return [ie(f) + (a && ei(P) && _e.length === 1 ? "[]" : "") + "=" + Oe]
                }
                return [ie(f) + "=" + ie(S(P, nn.encoder, re, "value", J))]
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
        for (var Fe = a && ei(P) && P.length === 1 ? n + "[]" : n, H = 0; H < Ve.length; ++H) {
            var ae = Ve[H],
                Ae = typeof ae == "object" && typeof ae.value < "u" ? ae.value : P[ae];
            if (!(m && Ae === null)) {
                var we = ei(P) ? typeof i == "function" ? i(Fe, ae) : Fe : Fe + (L ? "." + ae : "[" + ae + "]");
                v.set(e, le);
                var be = Kc();
                be.set(la, v), Jc(lt, t(Ae, we, i, a, d, m, S, k, I, L, $, J, ie, X, re, be))
            }
        }
        return lt
    },
    Db = function(e) {
        if (!e) return nn;
        if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var n = e.charset || nn.charset;
        if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = is.default;
        if (typeof e.format < "u") {
            if (!Tb.call(is.formatters, e.format)) throw new TypeError("Unknown format option provided.");
            i = e.format
        }
        var a = is.formatters[i],
            d = nn.filter;
        return (typeof e.filter == "function" || ei(e.filter)) && (d = e.filter), {
            addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : nn.addQueryPrefix,
            allowDots: typeof e.allowDots > "u" ? nn.allowDots : !!e.allowDots,
            charset: n,
            charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : nn.charsetSentinel,
            delimiter: typeof e.delimiter > "u" ? nn.delimiter : e.delimiter,
            encode: typeof e.encode == "boolean" ? e.encode : nn.encode,
            encoder: typeof e.encoder == "function" ? e.encoder : nn.encoder,
            encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : nn.encodeValuesOnly,
            filter: d,
            format: i,
            formatter: a,
            serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : nn.serializeDate,
            skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : nn.skipNulls,
            sort: typeof e.sort == "function" ? e.sort : null,
            strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : nn.strictNullHandling
        }
    },
    Mb = function(t, e) {
        var n = t,
            i = Db(e),
            a, d;
        typeof i.filter == "function" ? (d = i.filter, n = d("", n)) : ei(i.filter) && (d = i.filter, a = d);
        var m = [];
        if (typeof n != "object" || n === null) return "";
        var S;
        e && e.arrayFormat in ql ? S = e.arrayFormat : e && "indices" in e ? S = e.indices ? "indices" : "repeat" : S = "indices";
        var k = ql[S];
        if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var I = k === "comma" && e && e.commaRoundTrip;
        a || (a = Object.keys(n)), i.sort && a.sort(i.sort);
        for (var L = Kc(), $ = 0; $ < a.length; ++$) {
            var J = a[$];
            i.skipNulls && n[J] === null || Jc(m, Lb(n[J], J, k, I, i.strictNullHandling, i.skipNulls, i.encode ? i.encoder : null, i.filter, i.sort, i.allowDots, i.serializeDate, i.format, i.formatter, i.encodeValuesOnly, i.charset, L))
        }
        var ie = m.join(i.delimiter),
            X = i.addQueryPrefix === !0 ? "?" : "";
        return i.charsetSentinel && (i.charset === "iso-8859-1" ? X += "utf8=%26%2310003%3B&" : X += "utf8=%E2%9C%93&"), ie.length > 0 ? X + ie : ""
    },
    vr = Xc,
    Ra = Object.prototype.hasOwnProperty,
    Pb = Array.isArray,
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
    Nb = function(t) {
        return t.replace(/&#(\d+);/g, function(e, n) {
            return String.fromCharCode(parseInt(n, 10))
        })
    },
    Qc = function(t, e) {
        return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t
    },
    Bb = "utf8=%26%2310003%3B",
    Vb = "utf8=%E2%9C%93",
    $b = function(e, n) {
        var i = {},
            a = n.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
            d = n.parameterLimit === 1 / 0 ? void 0 : n.parameterLimit,
            m = a.split(n.delimiter, d),
            S = -1,
            k, I = n.charset;
        if (n.charsetSentinel)
            for (k = 0; k < m.length; ++k) m[k].indexOf("utf8=") === 0 && (m[k] === Vb ? I = "utf-8" : m[k] === Bb && (I = "iso-8859-1"), S = k, k = m.length);
        for (k = 0; k < m.length; ++k)
            if (k !== S) {
                var L = m[k],
                    $ = L.indexOf("]="),
                    J = $ === -1 ? L.indexOf("=") : $ + 1,
                    ie, X;
                J === -1 ? (ie = n.decoder(L, Zt.decoder, I, "key"), X = n.strictNullHandling ? null : "") : (ie = n.decoder(L.slice(0, J), Zt.decoder, I, "key"), X = vr.maybeMap(Qc(L.slice(J + 1), n), function(re) {
                    return n.decoder(re, Zt.decoder, I, "value")
                })), X && n.interpretNumericEntities && I === "iso-8859-1" && (X = Nb(X)), L.indexOf("[]=") > -1 && (X = Pb(X) ? [X] : X), Ra.call(i, ie) ? i[ie] = vr.combine(i[ie], X) : i[ie] = X
            } return i
    },
    jb = function(t, e, n, i) {
        for (var a = i ? e : Qc(e, n), d = t.length - 1; d >= 0; --d) {
            var m, S = t[d];
            if (S === "[]" && n.parseArrays) m = [].concat(a);
            else {
                m = n.plainObjects ? Object.create(null) : {};
                var k = S.charAt(0) === "[" && S.charAt(S.length - 1) === "]" ? S.slice(1, -1) : S,
                    I = parseInt(k, 10);
                !n.parseArrays && k === "" ? m = {
                    0: a
                } : !isNaN(I) && S !== k && String(I) === k && I >= 0 && n.parseArrays && I <= n.arrayLimit ? (m = [], m[I] = a) : k !== "__proto__" && (m[k] = a)
            }
            a = m
        }
        return a
    },
    Fb = function(e, n, i, a) {
        if (!!e) {
            var d = i.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                m = /(\[[^[\]]*])/,
                S = /(\[[^[\]]*])/g,
                k = i.depth > 0 && m.exec(d),
                I = k ? d.slice(0, k.index) : d,
                L = [];
            if (I) {
                if (!i.plainObjects && Ra.call(Object.prototype, I) && !i.allowPrototypes) return;
                L.push(I)
            }
            for (var $ = 0; i.depth > 0 && (k = S.exec(d)) !== null && $ < i.depth;) {
                if ($ += 1, !i.plainObjects && Ra.call(Object.prototype, k[1].slice(1, -1)) && !i.allowPrototypes) return;
                L.push(k[1])
            }
            return k && L.push("[" + d.slice(k.index) + "]"), jb(L, n, i, a)
        }
    },
    zb = function(e) {
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
    Gb = function(t, e) {
        var n = zb(e);
        if (t === "" || t === null || typeof t > "u") return n.plainObjects ? Object.create(null) : {};
        for (var i = typeof t == "string" ? $b(t, n) : t, a = n.plainObjects ? Object.create(null) : {}, d = Object.keys(i), m = 0; m < d.length; ++m) {
            var S = d[m],
                k = Fb(S, i[S], n, typeof t == "string");
            a = vr.merge(a, k, n)
        }
        return n.allowSparse === !0 ? a : vr.compact(a)
    },
    Hb = Mb,
    Ub = Gb,
    qb = Ya,
    Zc = {
        formats: qb,
        parse: Ub,
        stringify: Hb
    };
class Wb {
    constructor(e) {
        this.code = e.code, this.token = e.token, this.host = e.host
    }
}
class Yb {
    constructor(e) {
        this.appId = e.appId, this.appTag = e.appTag, this.audienceEnabled = e.audienceEnabled, this.code = e.code, this.host = e.host, this.audienceHost = e.audienceHost, this.locked = e.locked, this.full = e.full, this.moderationEnabled = e.moderationEnabled, this.passwordRequired = e.passwordRequired, this.twitchLocked = e.twitchLocked, this.locale = e.locale, this.keepalive = e.keepalive, this.controllerBranch = e.controllerBranch
    }
}
class Xb {
    constructor(e) {
        this.connections = e.connections
    }
}
class Kb {
    constructor(e) {
        this.cause = e.cause
    }
    whenReceived(e) {
        e.disconnect()
    }
}
class Jb {}
var po = {
    CreateRoomReply: Wb,
    GetRoomReply: Yb,
    GetAudienceReply: Xb,
    RoomExit: Kb,
    RoomLock: Jb
};
const Yl = Ea.exports,
    Qb = Zc,
    {
        CreateRoomReply: Zb,
        GetRoomReply: ew
    } = po;
class tw {
    constructor(e) {
        if (!e.host) throw new Error("unable to create ecast APIClient: no host provided");
        if (this.host = e.host, !e.scheme) throw new Error("unable to create ecast APIClient: no scheme provided");
        this.scheme = e.scheme
    }
    url(e, n) {
        if (n) {
            let i = Qb.stringify(n);
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
        let S = m.body;
        return new Zb({
            code: S.code,
            token: S.token,
            host: S.host
        })
    }
    async getRoom(e) {
        let n = this.url(`/rooms/${e.code}`),
            a = await (await Yl(n)).json();
        if (!a.ok) throw new Error(`unable to get room with options ${JSON.stringify(e)}: ${a.error}`);
        let d = a.body;
        return new ew({
            appId: d.appId,
            appTag: d.appTag,
            audienceEnabled: d.audienceEnabled,
            code: d.code,
            host: d.host,
            audienceHost: d.audienceHost,
            locked: d.locked,
            full: d.full,
            moderationEnabled: d.moderationEnabled,
            passwordRequired: d.passwordRequired,
            twitchLocked: d.twitchLocked,
            locale: d.locale,
            keepalive: d.keepalive,
            controllerBranch: d.controllerBranch
        })
    }
}
var nw = {
        APIClient: tw
    },
    ar = null;
typeof WebSocket < "u" ? ar = WebSocket : typeof MozWebSocket < "u" ? ar = MozWebSocket : typeof vt < "u" ? ar = vt.WebSocket || vt.MozWebSocket : typeof window < "u" ? ar = window.WebSocket || window.MozWebSocket : typeof self < "u" && (ar = self.WebSocket || self.MozWebSocket);
var iw = ar,
    Xa = {
        exports: {}
    },
    dr = typeof Reflect == "object" ? Reflect : null,
    Xl = dr && typeof dr.apply == "function" ? dr.apply : function(e, n, i) {
        return Function.prototype.apply.call(e, n, i)
    },
    Gs;
dr && typeof dr.ownKeys == "function" ? Gs = dr.ownKeys : Object.getOwnPropertySymbols ? Gs = function(e) {
    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : Gs = function(e) {
    return Object.getOwnPropertyNames(e)
};

function rw(t) {
    console && console.warn && console.warn(t)
}
var eu = Number.isNaN || function(e) {
    return e !== e
};

function Rt() {
    Rt.init.call(this)
}
Xa.exports = Rt;
Xa.exports.once = lw;
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
        if (typeof t != "number" || t < 0 || eu(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
        Kl = t
    }
});
Rt.init = function() {
    (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
};
Rt.prototype.setMaxListeners = function(e) {
    if (typeof e != "number" || e < 0 || eu(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
    return this._maxListeners = e, this
};

function tu(t) {
    return t._maxListeners === void 0 ? Rt.defaultMaxListeners : t._maxListeners
}
Rt.prototype.getMaxListeners = function() {
    return tu(this)
};
Rt.prototype.emit = function(e) {
    for (var n = [], i = 1; i < arguments.length; i++) n.push(arguments[i]);
    var a = e === "error",
        d = this._events;
    if (d !== void 0) a = a && d.error === void 0;
    else if (!a) return !1;
    if (a) {
        var m;
        if (n.length > 0 && (m = n[0]), m instanceof Error) throw m;
        var S = new Error("Unhandled error." + (m ? " (" + m.message + ")" : ""));
        throw S.context = m, S
    }
    var k = d[e];
    if (k === void 0) return !1;
    if (typeof k == "function") Xl(k, this, n);
    else
        for (var I = k.length, L = ou(k, I), i = 0; i < I; ++i) Xl(L[i], this, n);
    return !0
};

function nu(t, e, n, i) {
    var a, d, m;
    if (go(n), d = t._events, d === void 0 ? (d = t._events = Object.create(null), t._eventsCount = 0) : (d.newListener !== void 0 && (t.emit("newListener", e, n.listener ? n.listener : n), d = t._events), m = d[e]), m === void 0) m = d[e] = n, ++t._eventsCount;
    else if (typeof m == "function" ? m = d[e] = i ? [n, m] : [m, n] : i ? m.unshift(n) : m.push(n), a = tu(t), a > 0 && m.length > a && !m.warned) {
        m.warned = !0;
        var S = new Error("Possible EventEmitter memory leak detected. " + m.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
        S.name = "MaxListenersExceededWarning", S.emitter = t, S.type = e, S.count = m.length, rw(S)
    }
    return t
}
Rt.prototype.addListener = function(e, n) {
    return nu(this, e, n, !1)
};
Rt.prototype.on = Rt.prototype.addListener;
Rt.prototype.prependListener = function(e, n) {
    return nu(this, e, n, !0)
};

function sw() {
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
        a = sw.bind(i);
    return a.listener = n, i.wrapFn = a, a
}
Rt.prototype.once = function(e, n) {
    return go(n), this.on(e, iu(this, e, n)), this
};
Rt.prototype.prependOnceListener = function(e, n) {
    return go(n), this.prependListener(e, iu(this, e, n)), this
};
Rt.prototype.removeListener = function(e, n) {
    var i, a, d, m, S;
    if (go(n), a = this._events, a === void 0) return this;
    if (i = a[e], i === void 0) return this;
    if (i === n || i.listener === n) --this._eventsCount === 0 ? this._events = Object.create(null) : (delete a[e], a.removeListener && this.emit("removeListener", e, i.listener || n));
    else if (typeof i != "function") {
        for (d = -1, m = i.length - 1; m >= 0; m--)
            if (i[m] === n || i[m].listener === n) {
                S = i[m].listener, d = m;
                break
            } if (d < 0) return this;
        d === 0 ? i.shift() : ow(i, d), i.length === 1 && (a[e] = i[0]), a.removeListener !== void 0 && this.emit("removeListener", e, S || n)
    }
    return this
};
Rt.prototype.off = Rt.prototype.removeListener;
Rt.prototype.removeAllListeners = function(e) {
    var n, i, a;
    if (i = this._events, i === void 0) return this;
    if (i.removeListener === void 0) return arguments.length === 0 ? (this._events = Object.create(null), this._eventsCount = 0) : i[e] !== void 0 && (--this._eventsCount === 0 ? this._events = Object.create(null) : delete i[e]), this;
    if (arguments.length === 0) {
        var d = Object.keys(i),
            m;
        for (a = 0; a < d.length; ++a) m = d[a], m !== "removeListener" && this.removeAllListeners(m);
        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
    }
    if (n = i[e], typeof n == "function") this.removeListener(e, n);
    else if (n !== void 0)
        for (a = n.length - 1; a >= 0; a--) this.removeListener(e, n[a]);
    return this
};

function ru(t, e, n) {
    var i = t._events;
    if (i === void 0) return [];
    var a = i[e];
    return a === void 0 ? [] : typeof a == "function" ? n ? [a.listener || a] : [a] : n ? aw(a) : ou(a, a.length)
}
Rt.prototype.listeners = function(e) {
    return ru(this, e, !0)
};
Rt.prototype.rawListeners = function(e) {
    return ru(this, e, !1)
};
Rt.listenerCount = function(t, e) {
    return typeof t.listenerCount == "function" ? t.listenerCount(e) : su.call(t, e)
};
Rt.prototype.listenerCount = su;

function su(t) {
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

function ou(t, e) {
    for (var n = new Array(e), i = 0; i < e; ++i) n[i] = t[i];
    return n
}

function ow(t, e) {
    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
    t.pop()
}

function aw(t) {
    for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
    return e
}

function lw(t, e) {
    return new Promise(function(n, i) {
        function a(m) {
            t.removeListener(e, d), i(m)
        }

        function d() {
            typeof t.removeListener == "function" && t.removeListener("error", a), n([].slice.call(arguments))
        }
        au(t, e, d, {
            once: !0
        }), e !== "error" && cw(t, a, {
            once: !0
        })
    })
}

function cw(t, e, n) {
    typeof t.on == "function" && au(t, "error", e, n)
}

function au(t, e, n, i) {
    if (typeof t.on == "function") i.once ? t.once(e, n) : t.on(e, n);
    else if (typeof t.addEventListener == "function") t.addEventListener(e, function a(d) {
        i.once && t.removeEventListener(e, a), n(d)
    });
    else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t)
}
class uw {
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
class kt extends mo {
    constructor(e) {
        super(e), this.code = 2e3, this.message = e && e.message ? e.message : "ecast client error"
    }
}
class hu extends kt {
    constructor(e) {
        super(e), this.code = 2001, this.message = e && e.message ? e.message : "parse error in ecast protocol"
    }
}
class du extends kt {
    constructor(e) {
        super(e), this.code = 2002, this.message = e && e.message ? e.message : "missing opcode"
    }
}
class fu extends kt {
    constructor(e) {
        super(e), this.code = 2003, this.message = e && e.message ? e.message : "invalid opcode"
    }
}
class pu extends kt {
    constructor(e) {
        super(e), this.code = 2004, this.message = e && e.message ? e.message : "invalid arguments"
    }
}
class gu extends kt {
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
class bu extends kt {
    constructor(e) {
        super(e), this.code = 2009, this.message = e && e.message ? e.message : "room is locked"
    }
}
class wu extends kt {
    constructor(e) {
        super(e), this.code = 2010, this.message = e && e.message ? e.message : "room is full"
    }
}
class Cu extends kt {
    constructor(e) {
        super(e), this.code = 2011, this.message = e && e.message ? e.message : "no such license"
    }
}
class xu extends kt {
    constructor(e) {
        super(e), this.code = 2012, this.message = e && e.message ? e.message : "invalid license"
    }
}
class Eu extends kt {
    constructor(e) {
        super(e), this.code = 2013, this.message = e && e.message ? e.message : "room not found"
    }
}
class _u extends kt {
    constructor(e) {
        super(e), this.code = 2014, this.message = e && e.message ? e.message : "requested role does not exist"
    }
}
class Su extends kt {
    constructor(e) {
        super(e), this.code = 2015, this.message = e && e.message ? e.message : "twitch login required"
    }
}
class ku extends kt {
    constructor(e) {
        super(e), this.code = 2016, this.message = e && e.message ? e.message : "no such option"
    }
}
class Tu extends kt {
    constructor(e) {
        super(e), this.code = 2017, this.message = e && e.message ? e.message : "password required"
    }
}
class Au extends kt {
    constructor(e) {
        super(e), this.code = 2018, this.message = e && e.message ? e.message : "invalid room password"
    }
}
class Ou extends kt {
    constructor(e) {
        super(e), this.code = 2019, this.message = e && e.message ? e.message : "missing name"
    }
}
class Ru extends kt {
    constructor(e) {
        super(e), this.code = 2021, this.message = e && e.message ? e.message : "text did not pass text filters"
    }
}
class Iu extends kt {
    constructor(e) {
        super(e), this.code = 2022, this.message = e && e.message ? e.message : "no such filter"
    }
}
class Lu extends kt {
    constructor(e) {
        super(e), this.code = 2023, this.message = e && e.message ? e.message : "permission denied"
    }
}
class Du extends kt {
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
class Bu extends kt {
    constructor(e) {
        super(e), this.code = 2028, this.message = e && e.message ? e.message : "the entity is locked"
    }
}
class Vu extends kt {
    constructor(e) {
        super(e), this.code = 2420, this.message = e && e.message ? e.message : "rate limit exceeded"
    }
}

function hw({
    code: t,
    message: e
}) {
    const n = dw[t];
    return n ? new n({
        message: e
    }) : new mo({
        message: e
    })
}
var ti = {
    createError: hw,
    CallError: mo,
    EcastServerError: ds,
    EcastCreateRoomFailed: lu,
    EcastDialRoomFailed: cu,
    EcastServerIsShuttingDown: uu,
    EcastClientError: kt,
    EcastParseError: hu,
    EcastRequestIsMissingOpcode: du,
    EcastRequestHasInvalidOpcode: fu,
    EcastRequestHasInvalidArguments: pu,
    EcastEntityNotFound: gu,
    EcastEntityAlreadyExists: mu,
    EcastEntityTypeError: vu,
    EcastNoSuchClient: yu,
    EcastRoomIsLocked: bu,
    EcastRoomIsFull: wu,
    EcastLicenseNotFound: Cu,
    EcastLicenseCheckFailed: xu,
    EcastRoomNotFound: Eu,
    EcastInvalidRole: _u,
    EcastTwitchLoginRequired: Su,
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
    EcastEntityLocked: Bu,
    EcastRateLimitExceeded: Vu,
    ObservedError: uw
};
const dw = {
    1e3: ds,
    1001: lu,
    1002: cu,
    1003: uu,
    2e3: kt,
    2001: hu,
    2002: du,
    2003: fu,
    2004: pu,
    2005: gu,
    2006: mu,
    2007: vu,
    2008: yu,
    2009: bu,
    2010: wu,
    2011: Cu,
    2012: xu,
    2013: Eu,
    2014: _u,
    2015: Su,
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
    2028: Bu,
    2420: Vu
};
class fw {
    constructor(e) {
        this.id = e.id, this.deviceId = e.deviceId, this.name = e.name, this.secret = e.secret, this.reconnect = e.reconnect, this.entities = e.entities, this.here = e.here, this.profile = e.profile, this.replayEnd = e.replayEnd
    }
}
class pw {
    constructor(e) {
        this.id = e.id, this.userId = e.userId, this.name = e.name, this.role = e.role, this.reconnect = e.reconnect
    }
}
class gw {
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
var Ka = {
    ClientConnected: pw,
    ClientDisconnected: gw,
    ClientKicked: vw,
    ClientSend: mw,
    ClientWelcome: fw
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
var Ja = {
    CountGroup: yw
};
class bw {
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
    GCounter: bw
};
class ww {
    constructor(e) {
        this.pc = e.pc, this.opcode = e.opcode, this.result = e.result
    }
}
var $u = {
    Notification: ww
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
class xw {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `ObjectEcho{message: ${this.message}}`
    }
}
var Za = {
    ObjectEntity: Cw,
    ObjectEcho: xw
};
class Ew {
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
    PNCounter: Ew
};
class _w {
    constructor(e) {
        this.pc = e.pc, this.re = e.re, this.opcode = e.opcode, this.result = e.result
    }
}
var ju = {
    Reply: _w
};
class Sw {
    constructor(e) {
        this.seq = e.seq, this.opcode = e.opcode, this.params = e.params
    }
}
var kw = {
    Request: Sw
};
class Tw {
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
class Aw {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `TextEcho{message: ${this.message}
}`
    }
}
var tl = {
    TextEntity: Tw,
    TextEcho: Aw
};
class Ow {
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
    TextRing: Ow
};
class Rw {
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
    ArtifactEntity: Rw
};
class Iw {
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
class Lw {
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
class Dw {
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
    DoodleEntity: Iw,
    DoodleLine: Lw,
    DoodleLineRemoved: Dw
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
var zu = {
    StackEntity: Mw,
    StackElement: Pw,
    StackElements: Nw
};
class Bw {
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
var Gu = {
    DropEntity: Bw
};
class Vw {
    constructor(e) {
        this.message = e.message
    }
    toString() {
        return `Echo{message: ${this.message}
}`
    }
}
var $w = {
    Echo: Vw
};
class jw {
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
var Fw = {
    LockEntity: jw
};
class zw {
    constructor() {}
    toString() {
        return "OK"
    }
}
var Hu = {
    OK: zw
};
class Gw {
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
var Uu = {
    NumberEntity: Gw
};
const {
    ArtifactEntity: Hw
} = Fu, {
    ClientWelcome: Uw,
    ClientConnected: qw,
    ClientDisconnected: Ww,
    ClientKicked: Yw,
    ClientSend: Xw
} = Ka, {
    CountGroup: Kw
} = Ja, {
    DoodleEntity: Jw,
    DoodleLine: Qw,
    DoodleLineRemoved: Zw
} = il, {
    StackEntity: e0,
    StackElement: t0,
    StackElements: n0
} = zu, {
    DropEntity: i0
} = Gu, {
    Echo: r0
} = $w, {
    LockEntity: s0
} = Fw, {
    GCounter: o0
} = Qa, {
    GetAudienceReply: a0,
    RoomExit: l0,
    RoomLock: c0
} = po, {
    Notification: u0
} = $u, {
    OK: h0
} = Hu, {
    NumberEntity: d0
} = Uu, {
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
    ObservedError: b0
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
            return new Hw({
                key: e.key,
                artifactId: e.artifactId,
                categoryId: e.categoryId,
                rootId: e.rootId,
                meta: n
            });
        case "client/connected":
            return new qw({
                id: e.id,
                userId: e.userId,
                name: e.name,
                role: e.role,
                reconnect: e.reconnect
            });
        case "client/disconnected":
            return new Ww({
                id: e.id,
                role: e.role
            });
        case "client/kicked":
            return new Yw({
                id: e.id,
                banned: e.banned,
                reason: e.reason
            });
        case "client/send":
            return new Xw({
                to: e.to,
                from: e.from,
                body: e.body,
                userId: e.userID
            });
        case "client/welcome": {
            let i = new Uw({
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
                Object.entries(e.entities).forEach(([d, m]) => {
                    a[d] = Ia(m[0], m[1], m[2])
                }), i.entities = a
            }
            return i
        }
        case "doodle":
            return new Jw({
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
            return new Qw({
                key: e.key,
                line: e.val
            });
        case "doodle/line/removed":
            return new Zw({
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
            return new Kw({
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

function w0(t) {
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
    parseResponseMessage: w0
};
const Zl = iw,
    x0 = Zc,
    E0 = Xa.exports,
    {
        CallError: _0
    } = ti,
    {
        ClientWelcome: S0
    } = Ka,
    {
        CountGroup: k0
    } = Ja,
    {
        GCounter: T0
    } = Qa,
    {
        Notification: ec
    } = $u,
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
    } = kw,
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
        return new Promise((a, d) => {
            let m = !1,
                S = !1,
                k = L => {
                    a(L), m = !0
                },
                I = L => {
                    d(L), m = !0
                };
            this.conn = new Zl(i, "ecast-v0"), this.conn.onmessage = L => {
                this.debugLog(`recv <- ${JSON.stringify(JSON.parse(L.data),null,2)}`);
                const $ = L0(L);
                if ($ instanceof O0) this.onReply($);
                else if ($ instanceof ec) {
                    if ($.result instanceof S0) S = !0, this.id = $.result.id, this.deviceId = $.result.deviceId, this.entities = $.result.entities, this.secret = $.result.secret, $.result.name && (this.name = $.result.name), k($.result);
                    else if (!m) {
                        I($.result);
                        return
                    }
                    this.onNotification($)
                } else console.error(`failed to parse response messsage: ${$}`)
            }, this.conn.onerror = L => {
                m ? this.emit("socketError", L) : I(L)
            }, this.conn.onclose = L => {
                this.debugLog("onclose", L.code), S && L.code === 1006 ? this.reconnect() : this.emit("socketClose", L)
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
            const a = new ec(e);
            a.re = n, this.emit("notification", a);
            return
        }
        delete this.pending[n], e.result instanceof _0 ? i.reject(e.result) : i.resolve(e.result)
    }
    onNotification(e) {
        typeof e.result.whenReceived == "function" && e.result.whenReceived(this), this.emit("notification", e), this.emit(e.opcode, e.result)
    }
    send(e, n = {}) {
        if (!this.conn) throw new Error("No connection available");
        if (this.conn.readyState !== Zl.OPEN) throw new Error(`Socket not ready to send, readyState is ${this.conn.readyState}`);
        const i = ++this.seq,
            a = new R0({
                seq: i,
                opcode: e,
                params: n
            }),
            d = new Promise((S, k) => {
                this.pending[i] = {
                    resolve: S,
                    reject: k,
                    request: a
                }
            }),
            m = JSON.stringify(a);
        return this.debugLog(`send -> ${m}`), this.conn.send(m), d
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
        const d = await this.send("object/create", a);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), d
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
        const d = await this.send("object/set", a);
        return this.entities[e] = new ca({
            key: e,
            val: n,
            meta: {
                locked: !1
            }
        }), d
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
                acl: d,
                accept: m,
                reject: S
            } = i;
        d && (a.acl = d), m && (a.accept = m), S && (a.reject = S);
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
        const d = await this.send("text/set", a);
        return this.entities[e] = new ua({
            key: e,
            text: n,
            meta: {
                locked: !1
            }
        }), d
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
            colors: d,
            live: m,
            maxPoints: S,
            size: k,
            weights: I
        } = n;
        a && (i.acl = a), d && (i.colors = d), i.live = m, S != null && (i.maxPoints = S), k && (i.size = k), I && (i.weights = I);
        const L = await this.send("doodle/create", i);
        return this.entities[e] = new D0({
            key: e,
            colors: d,
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
            weight: d,
            points: m
        } = n, S = await this.send("doodle/stroke", {
            key: e,
            layer: i,
            color: a,
            weight: d,
            points: m
        }), k = {
            layer: i,
            color: a,
            weight: d,
            points: m
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
        return this.entities[e] = new M0({
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
                limit: a,
                accept: d,
                reject: m
            } = n;
        a && (i.limit = a), d && (i.accept = d), m && (i.reject = m);
        const S = await this.send("audience/text-ring/create", i);
        return this.entities[e] = new I0({
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
var B0 = {
    WSClient: N0
};
const {
    APIClient: V0
} = nw, {
    WSClient: $0
} = B0, {
    CreateRoomReply: j0,
    GetRoomReply: F0
} = po, {
    ClientWelcome: z0,
    ClientDisconnected: G0
} = Ka, {
    ArtifactEntity: H0
} = Fu, {
    GCounter: U0
} = Qa, {
    NumberEntity: q0
} = Uu, {
    TextEntity: W0
} = tl, {
    DoodleEntity: Y0
} = il, {
    ObjectEntity: X0
} = Za, {
    CountGroup: K0
} = Ja, {
    DropEntity: J0
} = Gu, {
    OK: Q0
} = Hu, {
    RoomExit: Z0
} = po, {
    TextRing: eC
} = nl, {
    PNCounter: tC
} = el;
var Ri = {
    APIClient: V0,
    WSClient: $0,
    ClientWelcome: z0,
    CreateRoomReply: j0,
    DropEntity: J0,
    GetRoomReply: F0,
    ClientDisconnected: G0,
    RoomExit: Z0,
    OK: Q0,
    ArtifactEntity: H0,
    DoodleEntity: Y0,
    NumberEntity: q0,
    CountGroup: K0,
    GCounter: U0,
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
            a = function(N, W) {
                if (W = W.split(":")[0], N = +N, !N) return !1;
                switch (W) {
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
            d = Object.prototype.hasOwnProperty,
            m;

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
            for (var N = /([^=?#&]+)=?([^&]*)/g, W = {}, D; D = N.exec(j);) {
                var U = S(D[1]),
                    pe = S(D[2]);
                U === null || pe === null || U in W || (W[U] = pe)
            }
            return W
        }

        function L(j, N) {
            N = N || "";
            var W = [],
                D, U;
            typeof N != "string" && (N = "?");
            for (U in j)
                if (d.call(j, U)) {
                    if (D = j[U], !D && (D === null || D === m || isNaN(D)) && (D = ""), U = k(U), D = k(D), U === null || D === null) continue;
                    W.push(U + "=" + D)
                } return W.length ? N + W.join("&") : ""
        }
        var $ = L,
            J = I,
            ie = {
                stringify: $,
                parse: J
            },
            X = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            re = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
            v = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
            P = new RegExp("^" + v + "+");

        function q(j) {
            return (j || "").toString().replace(P, "")
        }
        var le = [
                ["#", "hash"],
                ["?", "query"],
                function(N, W) {
                    return f(W.protocol) ? N.replace(/\\/g, "/") : N
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

        function ye(j) {
            var N;
            typeof window < "u" ? N = window : typeof i < "u" ? N = i : typeof self < "u" ? N = self : N = {};
            var W = N.location || {};
            j = j || W;
            var D = {},
                U = typeof j,
                pe;
            if (j.protocol === "blob:") D = new Pe(unescape(j.pathname), {});
            else if (U === "string") {
                D = new Pe(j, {});
                for (pe in oe) delete D[pe]
            } else if (U === "object") {
                for (pe in j) pe in oe || (D[pe] = j[pe]);
                D.slashes === void 0 && (D.slashes = X.test(j.href))
            }
            return D
        }

        function f(j) {
            return j === "file:" || j === "ftp:" || j === "http:" || j === "https:" || j === "ws:" || j === "wss:"
        }

        function _e(j, N) {
            j = q(j), N = N || {};
            var W = re.exec(j),
                D = W[1] ? W[1].toLowerCase() : "",
                U = !!W[2],
                pe = !!W[3],
                ge = 0,
                Ne;
            return U ? pe ? (Ne = W[2] + W[3] + W[4], ge = W[2].length + W[3].length) : (Ne = W[2] + W[4], ge = W[2].length) : pe ? (Ne = W[3] + W[4], ge = W[3].length) : Ne = W[4], D === "file:" ? ge >= 2 && (Ne = Ne.slice(2)) : f(D) ? Ne = W[4] : D ? U && (Ne = Ne.slice(2)) : ge >= 2 && f(N.protocol) && (Ne = W[4]), {
                protocol: D,
                slashes: U || f(D),
                slashesCount: ge,
                rest: Ne
            }
        }

        function Oe(j, N) {
            if (j === "") return N;
            for (var W = (N || "/").split("/").slice(0, -1).concat(j.split("/")), D = W.length, U = W[D - 1], pe = !1, ge = 0; D--;) W[D] === "." ? W.splice(D, 1) : W[D] === ".." ? (W.splice(D, 1), ge++) : ge && (D === 0 && (pe = !0), W.splice(D, 1), ge--);
            return pe && W.unshift(""), (U === "." || U === "..") && W.push(""), W.join("/")
        }

        function Pe(j, N, W) {
            if (j = q(j), !(this instanceof Pe)) return new Pe(j, N, W);
            var D, U, pe, ge, Ne, Be, pt = le.slice(),
                Ft = typeof N,
                Xe = this,
                In = 0;
            for (Ft !== "object" && Ft !== "string" && (W = N, N = null), W && typeof W != "function" && (W = ie.parse), N = ye(N), U = _e(j || "", N), D = !U.protocol && !U.slashes, Xe.slashes = U.slashes || D && N.slashes, Xe.protocol = U.protocol || N.protocol || "", j = U.rest, (Xe.protocol === "file:" || !U.slashes && (U.protocol || U.slashesCount < 2 || !f(Xe.protocol))) && (pt[3] = [/(.*)/, "pathname"]); In < pt.length; In++) {
                if (ge = pt[In], typeof ge == "function") {
                    j = ge(j, Xe);
                    continue
                }
                pe = ge[0], Be = ge[1], pe !== pe ? Xe[Be] = j : typeof pe == "string" ? ~(Ne = j.indexOf(pe)) && (typeof ge[2] == "number" ? (Xe[Be] = j.slice(0, Ne), j = j.slice(Ne + ge[2])) : (Xe[Be] = j.slice(Ne), j = j.slice(0, Ne))) : (Ne = pe.exec(j)) && (Xe[Be] = Ne[1], j = j.slice(0, Ne.index)), Xe[Be] = Xe[Be] || D && ge[3] && N[Be] || "", ge[4] && (Xe[Be] = Xe[Be].toLowerCase())
            }
            W && (Xe.query = W(Xe.query)), D && N.slashes && Xe.pathname.charAt(0) !== "/" && (Xe.pathname !== "" || N.pathname !== "") && (Xe.pathname = Oe(Xe.pathname, N.pathname)), Xe.pathname.charAt(0) !== "/" && f(Xe.protocol) && (Xe.pathname = "/" + Xe.pathname), a(Xe.port, Xe.protocol) || (Xe.host = Xe.hostname, Xe.port = ""), Xe.username = Xe.password = "", Xe.auth && (ge = Xe.auth.split(":"), Xe.username = ge[0] || "", Xe.password = ge[1] || ""), Xe.origin = Xe.protocol !== "file:" && f(Xe.protocol) && Xe.host ? Xe.protocol + "//" + Xe.host : "null", Xe.href = Xe.toString()
        }

        function lt(j, N, W) {
            var D = this;
            switch (j) {
                case "query":
                    typeof N == "string" && N.length && (N = (W || ie.parse)(N)), D[j] = N;
                    break;
                case "port":
                    D[j] = N, a(N, D.protocol) ? N && (D.host = D.hostname + ":" + N) : (D.host = D.hostname, D[j] = "");
                    break;
                case "hostname":
                    D[j] = N, D.port && (N += ":" + D.port), D.host = N;
                    break;
                case "host":
                    D[j] = N, /:\d+$/.test(N) ? (N = N.split(":"), D.port = N.pop(), D.hostname = N.join(":")) : (D.hostname = N, D.port = "");
                    break;
                case "protocol":
                    D.protocol = N.toLowerCase(), D.slashes = !W;
                    break;
                case "pathname":
                case "hash":
                    if (N) {
                        var U = j === "pathname" ? "/" : "#";
                        D[j] = N.charAt(0) !== U ? U + N : N
                    } else D[j] = N;
                    break;
                default:
                    D[j] = N
            }
            for (var pe = 0; pe < le.length; pe++) {
                var ge = le[pe];
                ge[4] && (D[ge[1]] = D[ge[1]].toLowerCase())
            }
            return D.origin = D.protocol !== "file:" && f(D.protocol) && D.host ? D.protocol + "//" + D.host : "null", D.href = D.toString(), D
        }

        function Ve(j) {
            (!j || typeof j != "function") && (j = ie.stringify);
            var N, W = this,
                D = W.protocol;
            D && D.charAt(D.length - 1) !== ":" && (D += ":");
            var U = D + (W.slashes || f(W.protocol) ? "//" : "");
            return W.username && (U += W.username, W.password && (U += ":" + W.password), U += "@"), U += W.host + W.pathname, N = typeof W.query == "object" ? j(W.query) : W.query, N && (U += N.charAt(0) !== "?" ? "?" + N : N), W.hash && (U += W.hash), U
        }
        Pe.prototype = {
            set: lt,
            toString: Ve
        }, Pe.extractProtocol = _e, Pe.location = ye, Pe.trimLeft = q, Pe.qs = ie;
        var K = Pe;

        function Fe(j, N) {
            setTimeout(function(W) {
                return j.call(W)
            }, 4, N)
        }

        function H(j, N) {
            typeof process < "u" && console[j].call(null, N)
        }

        function ae(j, N) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(D) {
                N(D) || W.push(D)
            }), W
        }

        function Ae(j, N) {
            j === void 0 && (j = []);
            var W = [];
            return j.forEach(function(D) {
                N(D) && W.push(D)
            }), W
        }
        var we = function() {
            this.listeners = {}
        };
        we.prototype.addEventListener = function(N, W) {
            typeof W == "function" && (Array.isArray(this.listeners[N]) || (this.listeners[N] = []), Ae(this.listeners[N], function(D) {
                return D === W
            }).length === 0 && this.listeners[N].push(W))
        }, we.prototype.removeEventListener = function(N, W) {
            var D = this.listeners[N];
            this.listeners[N] = ae(D, function(U) {
                return U === W
            })
        }, we.prototype.dispatchEvent = function(N) {
            for (var W = this, D = [], U = arguments.length - 1; U-- > 0;) D[U] = arguments[U + 1];
            var pe = N.type,
                ge = this.listeners[pe];
            return Array.isArray(ge) ? (ge.forEach(function(Ne) {
                D.length > 0 ? Ne.apply(W, D) : Ne.call(W, N)
            }), !0) : !1
        };

        function be(j) {
            var N = j.indexOf("?");
            return N >= 0 ? j.slice(0, N) : j
        }
        var he = function() {
            this.urlMap = {}
        };
        he.prototype.attachWebSocket = function(N, W) {
            var D = be(W),
                U = this.urlMap[D];
            if (U && U.server && U.websockets.indexOf(N) === -1) return U.websockets.push(N), U.server
        }, he.prototype.addMembershipToRoom = function(N, W) {
            var D = this.urlMap[be(N.url)];
            D && D.server && D.websockets.indexOf(N) !== -1 && (D.roomMemberships[W] || (D.roomMemberships[W] = []), D.roomMemberships[W].push(N))
        }, he.prototype.attachServer = function(N, W) {
            var D = be(W),
                U = this.urlMap[D];
            if (!U) return this.urlMap[D] = {
                server: N,
                websockets: [],
                roomMemberships: {}
            }, N
        }, he.prototype.serverLookup = function(N) {
            var W = be(N),
                D = this.urlMap[W];
            if (D) return D.server
        }, he.prototype.websocketsLookup = function(N, W, D) {
            var U = be(N),
                pe, ge = this.urlMap[U];
            if (pe = ge ? ge.websockets : [], W) {
                var Ne = ge.roomMemberships[W];
                pe = Ne || []
            }
            return D ? pe.filter(function(Be) {
                return Be !== D
            }) : pe
        }, he.prototype.removeServer = function(N) {
            delete this.urlMap[be(N)]
        }, he.prototype.removeWebSocket = function(N, W) {
            var D = be(W),
                U = this.urlMap[D];
            U && (U.websockets = ae(U.websockets, function(pe) {
                return pe === N
            }))
        }, he.prototype.removeMembershipFromRoom = function(N, W) {
            var D = this.urlMap[be(N.url)],
                U = D.roomMemberships[W];
            D && U !== null && (D.roomMemberships[W] = ae(U, function(pe) {
                return pe === N
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
        Ke.prototype.stopPropagation = function() {}, Ke.prototype.stopImmediatePropagation = function() {}, Ke.prototype.initEvent = function(N, W, D) {
            N === void 0 && (N = "undefined"), W === void 0 && (W = !1), D === void 0 && (D = !1), this.type = "" + N, this.bubbles = Boolean(W), this.cancelable = Boolean(D)
        };
        var dt = function(j) {
                function N(W, D) {
                    if (D === void 0 && (D = {}), j.call(this), !W) throw new TypeError($e.EVENT_ERROR + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT_ERROR + " parameter 2 ('eventInitDict') is not an object.");
                    var U = D.bubbles,
                        pe = D.cancelable;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = U ? Boolean(U) : !1
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke),
            $t = function(j) {
                function N(W, D) {
                    if (D === void 0 && (D = {}), j.call(this), !W) throw new TypeError($e.EVENT.MESSAGE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.MESSAGE + " parameter 2 ('eventInitDict') is not an object");
                    var U = D.bubbles,
                        pe = D.cancelable,
                        ge = D.data,
                        Ne = D.origin,
                        Be = D.lastEventId,
                        pt = D.ports;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.canncelBubble = !1, this.bubbles = U ? Boolean(U) : !1, this.origin = "" + Ne, this.ports = typeof pt > "u" ? null : pt, this.data = typeof ge > "u" ? null : ge, this.lastEventId = "" + (Be || "")
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke),
            qt = function(j) {
                function N(W, D) {
                    if (D === void 0 && (D = {}), j.call(this), !W) throw new TypeError($e.EVENT.CLOSE + " 1 argument required, but only 0 present.");
                    if (typeof D != "object") throw new TypeError($e.EVENT.CLOSE + " parameter 2 ('eventInitDict') is not an object");
                    var U = D.bubbles,
                        pe = D.cancelable,
                        ge = D.code,
                        Ne = D.reason,
                        Be = D.wasClean;
                    this.type = "" + W, this.timeStamp = Date.now(), this.target = null, this.srcElement = null, this.returnValue = !0, this.isTrusted = !1, this.eventPhase = 0, this.defaultPrevented = !1, this.currentTarget = null, this.cancelable = pe ? Boolean(pe) : !1, this.cancelBubble = !1, this.bubbles = U ? Boolean(U) : !1, this.code = typeof ge == "number" ? parseInt(ge, 10) : 0, this.reason = "" + (Ne || ""), this.wasClean = Be ? Boolean(Be) : !1
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N
            }(Ke);

        function E(j) {
            var N = j.type,
                W = j.target,
                D = new dt(N);
            return W && (D.target = W, D.srcElement = W, D.currentTarget = W), D
        }

        function l(j) {
            var N = j.type,
                W = j.origin,
                D = j.data,
                U = j.target,
                pe = new $t(N, {
                    data: D,
                    origin: W
                });
            return U && (pe.target = U, pe.srcElement = U, pe.currentTarget = U), pe
        }

        function g(j) {
            var N = j.code,
                W = j.reason,
                D = j.type,
                U = j.target,
                pe = j.wasClean;
            pe || (pe = N === Te.CLOSE_NORMAL || N === Te.CLOSE_NO_STATUS);
            var ge = new qt(D, {
                code: N,
                reason: W,
                wasClean: pe
            });
            return U && (ge.target = U, ge.srcElement = U, ge.currentTarget = U), ge
        }

        function _(j, N, W) {
            j.readyState = De.CLOSING;
            var D = Se.serverLookup(j.url),
                U = g({
                    type: "close",
                    target: j.target,
                    code: N,
                    reason: W
                }),
                pe = g({
                    type: "server::close",
                    target: j,
                    code: N,
                    reason: W
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = De.CLOSED, j.dispatchEvent(U), j.dispatchEvent(pe), D && D.dispatchEvent(U, D)
            }, j)
        }

        function O(j, N, W) {
            j.readyState = De.CLOSING;
            var D = Se.serverLookup(j.url),
                U = g({
                    type: "close",
                    target: j.target,
                    code: N,
                    reason: W,
                    wasClean: !1
                }),
                pe = g({
                    type: "server::close",
                    target: j,
                    code: N,
                    reason: W,
                    wasClean: !1
                }),
                ge = E({
                    type: "error",
                    target: j.target
                });
            Fe(function() {
                Se.removeWebSocket(j, j.url), j.readyState = De.CLOSED, j.dispatchEvent(ge), j.dispatchEvent(U), j.dispatchEvent(pe), D && D.dispatchEvent(U, D)
            }, j)
        }

        function M(j) {
            return Object.prototype.toString.call(j) !== "[object Blob]" && !(j instanceof ArrayBuffer) && (j = String(j)), j
        }
        var B = new WeakMap;

        function te(j) {
            if (B.has(j)) return B.get(j);
            var N = new Proxy(j, {
                get: function(D, U) {
                    return U === "close" ? function(ge) {
                        ge === void 0 && (ge = {});
                        var Ne = ge.code || Te.CLOSE_NORMAL,
                            Be = ge.reason || "";
                        _(N, Ne, Be)
                    } : U === "send" ? function(ge) {
                        ge = M(ge), j.dispatchEvent(l({
                            type: "message",
                            data: ge,
                            origin: this.url,
                            target: j
                        }))
                    } : U === "on" ? function(ge, Ne) {
                        j.addEventListener("server::" + ge, Ne)
                    } : U === "target" ? j : D[U]
                }
            });
            return B.set(j, N), N
        }

        function ke(j) {
            var N = encodeURIComponent(j).match(/%[89ABab]/g);
            return j.length + (N ? N.length : 0)
        }

        function de(j) {
            var N = new K(j),
                W = N.pathname,
                D = N.protocol,
                U = N.hash;
            if (!j) throw new TypeError($e.CONSTRUCTOR_ERROR + " 1 argument required, but only 0 present.");
            if (W || (N.pathname = "/"), D === "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL '" + N.toString() + "' is invalid.");
            if (D !== "ws:" && D !== "wss:") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL's scheme must be either 'ws' or 'wss'. '" + D + "' is not allowed.");
            if (U !== "") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The URL contains a fragment identifier ('" + U + "'). Fragment identifiers are not allowed in WebSocket URLs.");
            return N.toString()
        }

        function Le(j) {
            if (j === void 0 && (j = []), !Array.isArray(j) && typeof j != "string") throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + j.toString() + "' is invalid.");
            typeof j == "string" && (j = [j]);
            var N = j.map(function(D) {
                    return {
                        count: 1,
                        protocol: D
                    }
                }).reduce(function(D, U) {
                    return D[U.protocol] = (D[U.protocol] || 0) + U.count, D
                }, {}),
                W = Object.keys(N).filter(function(D) {
                    return N[D] > 1
                });
            if (W.length > 0) throw new SyntaxError($e.CONSTRUCTOR_ERROR + " The subprotocol '" + W[0] + "' is duplicated.");
            return j
        }
        var De = function(j) {
            function N(D, U) {
                j.call(this), this._onopen = null, this._onmessage = null, this._onerror = null, this._onclose = null, this.url = de(D), U = Le(U), this.protocol = U[0] || "", this.binaryType = "blob", this.readyState = N.CONNECTING;
                var pe = te(this),
                    ge = Se.attachWebSocket(pe, this.url);
                Fe(function() {
                    if (ge)
                        if (ge.options.verifyClient && typeof ge.options.verifyClient == "function" && !ge.options.verifyClient()) this.readyState = N.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: HTTP Authentication failed; no valid credentials available"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                            type: "error",
                            target: this
                        })), this.dispatchEvent(g({
                            type: "close",
                            target: this,
                            code: Te.CLOSE_NORMAL
                        }));
                        else {
                            if (ge.options.selectProtocol && typeof ge.options.selectProtocol == "function") {
                                var Be = ge.options.selectProtocol(U),
                                    pt = Be !== "",
                                    Ft = U.indexOf(Be) !== -1;
                                if (pt && !Ft) {
                                    this.readyState = N.CLOSED, H("error", "WebSocket connection to '" + this.url + "' failed: Invalid Sub-Protocol"), Se.removeWebSocket(pe, this.url), this.dispatchEvent(E({
                                        type: "error",
                                        target: this
                                    })), this.dispatchEvent(g({
                                        type: "close",
                                        target: this,
                                        code: Te.CLOSE_NORMAL
                                    }));
                                    return
                                }
                                this.protocol = Be
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
                    })), H("error", "WebSocket connection to '" + this.url + "' failed")
                }, this)
            }
            j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N;
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
            }, N.prototype.send = function(U) {
                var pe = this;
                if (this.readyState === N.CLOSING || this.readyState === N.CLOSED) throw new Error("WebSocket is already in CLOSING or CLOSED state");
                var ge = l({
                        type: "server::message",
                        origin: this.url,
                        data: M(U)
                    }),
                    Ne = Se.serverLookup(this.url);
                Ne && Fe(function() {
                    pe.dispatchEvent(ge, U)
                }, Ne)
            }, N.prototype.close = function(U, pe) {
                if (U !== void 0 && (typeof U != "number" || U !== 1e3 && (U < 3e3 || U > 4999))) throw new TypeError($e.CLOSE_ERROR + " The code must be either 1000, or between 3000 and 4999. " + U + " is neither.");
                if (pe !== void 0) {
                    var ge = ke(pe);
                    if (ge > 123) throw new SyntaxError($e.CLOSE_ERROR + " The message must not be greater than 123 bytes.")
                }
                if (!(this.readyState === N.CLOSING || this.readyState === N.CLOSED)) {
                    var Ne = te(this);
                    this.readyState === N.CONNECTING ? O(Ne, U || Te.CLOSE_ABNORMAL, pe) : _(Ne, U || Te.CLOSE_NO_STATUS, pe)
                }
            }, Object.defineProperties(N.prototype, W), N
        }(we);
        De.CONNECTING = 0, De.prototype.CONNECTING = De.CONNECTING, De.OPEN = 1, De.prototype.OPEN = De.OPEN, De.CLOSING = 2, De.prototype.CLOSING = De.CLOSING, De.CLOSED = 3, De.prototype.CLOSED = De.CLOSED;
        var nt = function(j) {
            return j.reduce(function(N, W) {
                return N.indexOf(W) > -1 ? N : N.concat(W)
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
            ct = function(j) {
                function N(W, D) {
                    D === void 0 && (D = rn), j.call(this);
                    var U = new K(W);
                    U.pathname || (U.pathname = "/"), this.url = U.toString(), this.originalWebSocket = null;
                    var pe = Se.attachServer(this, this.url);
                    if (!pe) throw this.dispatchEvent(E({
                        type: "error"
                    })), new Error("A mock server is already listening on this url");
                    this.options = Object.assign({}, rn, D), this.options.mock && this.mockWebsocket()
                }
                return j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N, N.prototype.mockWebsocket = function() {
                    var D = Ct();
                    this.originalWebSocket = D.WebSocket, D.WebSocket = De
                }, N.prototype.restoreWebsocket = function() {
                    var D = Ct();
                    this.originalWebSocket !== null && (D.WebSocket = this.originalWebSocket), this.originalWebSocket = null
                }, N.prototype.stop = function(D) {
                    D === void 0 && (D = function() {}), this.options.mock && this.restoreWebsocket(), Se.removeServer(this.url), typeof D == "function" && D()
                }, N.prototype.on = function(D, U) {
                    this.addEventListener(D, U)
                }, N.prototype.close = function(D) {
                    D === void 0 && (D = {});
                    var U = D.code,
                        pe = D.reason,
                        ge = D.wasClean,
                        Ne = Se.websocketsLookup(this.url);
                    Se.removeServer(this.url), Ne.forEach(function(Be) {
                        Be.readyState = De.CLOSED, Be.dispatchEvent(g({
                            type: "close",
                            target: Be.target,
                            code: U || Te.CLOSE_NORMAL,
                            reason: pe || "",
                            wasClean: ge
                        }))
                    }), this.dispatchEvent(g({
                        type: "close"
                    }), this)
                }, N.prototype.emit = function(D, U, pe) {
                    var ge = this;
                    pe === void 0 && (pe = {});
                    var Ne = pe.websockets;
                    Ne || (Ne = Se.websocketsLookup(this.url)), typeof pe != "object" || arguments.length > 3 ? (U = Array.prototype.slice.call(arguments, 1, arguments.length), U = U.map(function(Be) {
                        return M(Be)
                    })) : U = M(U), Ne.forEach(function(Be) {
                        Array.isArray(U) ? Be.dispatchEvent.apply(Be, [l({
                            type: D,
                            data: U,
                            origin: ge.url,
                            target: Be.target
                        })].concat(U)) : Be.dispatchEvent(l({
                            type: D,
                            data: U,
                            origin: ge.url,
                            target: Be.target
                        }))
                    })
                }, N.prototype.clients = function() {
                    return Se.websocketsLookup(this.url)
                }, N.prototype.to = function(D, U, pe) {
                    var ge = this;
                    pe === void 0 && (pe = []);
                    var Ne = this,
                        Be = nt(pe.concat(Se.websocketsLookup(this.url, D, U)));
                    return {
                        to: function(pt, Ft) {
                            return ge.to.call(ge, pt, Ft, Be)
                        },
                        emit: function(Ft, Xe) {
                            Ne.emit(Ft, Xe, {
                                websockets: Be
                            })
                        }
                    }
                }, N.prototype.in = function() {
                    for (var D = [], U = arguments.length; U--;) D[U] = arguments[U];
                    return this.to.apply(null, D)
                }, N.prototype.simulate = function(D) {
                    var U = Se.websocketsLookup(this.url);
                    D === "error" && U.forEach(function(pe) {
                        pe.readyState = De.CLOSED, pe.dispatchEvent(E({
                            type: "error"
                        }))
                    })
                }, N
            }(we);
        ct.of = function(N) {
            return new ct(N)
        };
        var yt = function(j) {
            function N(D, U) {
                var pe = this;
                D === void 0 && (D = "socket.io"), U === void 0 && (U = ""), j.call(this), this.binaryType = "blob";
                var ge = new K(D);
                ge.pathname || (ge.pathname = "/"), this.url = ge.toString(), this.readyState = N.CONNECTING, this.protocol = "", this.target = this, typeof U == "string" || typeof U == "object" && U !== null ? this.protocol = U : Array.isArray(U) && U.length > 0 && (this.protocol = U[0]);
                var Ne = Se.attachWebSocket(this, this.url);
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
                    })), H("error", "Socket.io connection to '" + this.url + "' failed"))
                }, this), this.addEventListener("close", function(Be) {
                    pe.dispatchEvent(g({
                        type: "disconnect",
                        target: Be.target,
                        code: Be.code
                    }))
                })
            }
            j && (N.__proto__ = j), N.prototype = Object.create(j && j.prototype), N.prototype.constructor = N;
            var W = {
                broadcast: {}
            };
            return N.prototype.close = function() {
                if (this.readyState === N.OPEN) {
                    var U = Se.serverLookup(this.url);
                    return Se.removeWebSocket(this, this.url), this.readyState = N.CLOSED, this.dispatchEvent(g({
                        type: "close",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    })), U && U.dispatchEvent(g({
                        type: "disconnect",
                        target: this,
                        code: Te.CLOSE_NORMAL
                    }), U), this
                }
            }, N.prototype.disconnect = function() {
                return this.close()
            }, N.prototype.emit = function(U) {
                for (var pe = [], ge = arguments.length - 1; ge-- > 0;) pe[ge] = arguments[ge + 1];
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var Ne = l({
                        type: U,
                        origin: this.url,
                        data: pe
                    }),
                    Be = Se.serverLookup(this.url);
                return Be && Be.dispatchEvent.apply(Be, [Ne].concat(pe)), this
            }, N.prototype.send = function(U) {
                return this.emit("message", U), this
            }, W.broadcast.get = function() {
                if (this.readyState !== N.OPEN) throw new Error("SocketIO is already in CLOSING or CLOSED state");
                var D = this,
                    U = Se.serverLookup(this.url);
                if (!U) throw new Error("SocketIO can not find a server at the specified URL (" + this.url + ")");
                return {
                    emit: function(ge, Ne) {
                        return U.emit(ge, Ne, {
                            websockets: Se.websocketsLookup(D.url, null, D)
                        }), D
                    },
                    to: function(ge) {
                        return U.to(ge, D)
                    },
                    in: function(ge) {
                        return U.in(ge, D)
                    }
                }
            }, N.prototype.on = function(U, pe) {
                return this.addEventListener(U, pe), this
            }, N.prototype.off = function(U, pe) {
                this.removeEventListener(U, pe)
            }, N.prototype.hasListeners = function(U) {
                var pe = this.listeners[U];
                return Array.isArray(pe) ? !!pe.length : !1
            }, N.prototype.join = function(U) {
                Se.addMembershipToRoom(this, U)
            }, N.prototype.leave = function(U) {
                Se.removeMembershipFromRoom(this, U)
            }, N.prototype.to = function(U) {
                return this.broadcast.to(U)
            }, N.prototype.in = function() {
                return this.to.apply(null, arguments)
            }, N.prototype.dispatchEvent = function(U) {
                for (var pe = this, ge = [], Ne = arguments.length - 1; Ne-- > 0;) ge[Ne] = arguments[Ne + 1];
                var Be = U.type,
                    pt = this.listeners[Be];
                if (!Array.isArray(pt)) return !1;
                pt.forEach(function(Ft) {
                    ge.length > 0 ? Ft.apply(pe, ge) : Ft.call(pe, U.data ? U.data : U)
                })
            }, Object.defineProperties(N.prototype, W), N
        }(we);
        yt.CONNECTING = 0, yt.OPEN = 1, yt.CLOSING = 2, yt.CLOSED = 3;
        var wt = function(N, W) {
            return new yt(N, W)
        };
        wt.connect = function(N, W) {
            return wt(N, W)
        };
        var Jt = ct,
            Je = De,
            Pt = wt;
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
        function e(S, k) {
            var I = S.x - k.x,
                L = S.y - k.y;
            return I * I + L * L
        }

        function n(S, k, I) {
            var L = k.x,
                $ = k.y,
                J = I.x - L,
                ie = I.y - $;
            if (J !== 0 || ie !== 0) {
                var X = ((S.x - L) * J + (S.y - $) * ie) / (J * J + ie * ie);
                X > 1 ? (L = I.x, $ = I.y) : X > 0 && (L += J * X, $ += ie * X)
            }
            return J = S.x - L, ie = S.y - $, J * J + ie * ie
        }

        function i(S, k) {
            for (var I = S[0], L = [I], $, J = 1, ie = S.length; J < ie; J++) $ = S[J], e($, I) > k && (L.push($), I = $);
            return I !== $ && L.push($), L
        }

        function a(S, k, I, L, $) {
            for (var J = L, ie, X = k + 1; X < I; X++) {
                var re = n(S[X], S[k], S[I]);
                re > J && (ie = X, J = re)
            }
            J > L && (ie - k > 1 && a(S, k, ie, L, $), $.push(S[ie]), I - ie > 1 && a(S, ie, I, L, $))
        }

        function d(S, k) {
            var I = S.length - 1,
                L = [S[0]];
            return a(S, 0, I, k, L), L.push(S[I]), L
        }

        function m(S, k, I) {
            if (S.length <= 2) return S;
            var L = k !== void 0 ? k * k : 1;
            return S = I ? S : i(S, L), S = d(S, L), S
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
            se(window).trigger("resize")
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
                BASE_URL: "https://bundles.jackbox.tv/main/pp2-fibbage2/",
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
var sC = {};
(function(t) {
    (function(e) {
        e(Pi.exports, ot, t)
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
                    e.each(P, function(oe, ye) {
                        this.unstickit(v, ye)
                    }, this);
                    return
                }
                var q = [],
                    le = [];
                this._modelBindings = e.reject(this._modelBindings, function(oe) {
                    if (!(v && oe.model !== v) && !(P && oe.config.selector != P)) return oe.model.off(oe.event, oe.fn), le.push(oe.config._destroy), q.push(oe.model), !0
                }), e.invoke(e.uniq(q), "trigger", "stickit:unstuck", this.cid), e.each(e.uniq(le), function(oe) {
                    oe.call(this)
                }, this), this.$el.off(".stickit" + (v ? "." + v.cid : ""), P)
            },
            stickit: function(v, P) {
                var q = v || this.model,
                    le = P || e.result(this, "bindings") || {};
                this._modelBindings || (this._modelBindings = []), this.addBinding(q, le);
                var oe = this.remove;
                return oe.stickitWrapped || (this.remove = function() {
                    var ye = this;
                    return this.unstickit(), oe && (ye = oe.apply(this, arguments)), ye
                }), this.remove.stickitWrapped = !0, this
            },
            addBinding: function(v, P, q) {
                var le = v || this.model,
                    oe = ".stickit." + le.cid;
                if (q = q || {}, e.isObject(P)) {
                    var ye = P;
                    e.each(ye, function(K, Fe) {
                        this.addBinding(le, Fe, K)
                    }, this);
                    return
                }
                var f = P === ":el" ? this.$el : this.$(P);
                if (this.unstickit(le, P), !!f.length) {
                    e.isString(q) && (q = {
                        observe: q
                    }), e.isFunction(q.observe) && (q.observe = q.observe.call(this));
                    var _e = $(f, q),
                        Oe = _e.observe;
                    _e.selector = P, _e.view = this;
                    var Pe = _e.bindId = e.uniqueId(),
                        lt = e.extend({
                            stickitChange: _e
                        }, _e.setOptions);
                    if (_e._destroy = function() {
                            m.call(this, _e.destroy, f, le, _e)
                        }, J(f, _e, le, Oe), X(f, _e, le, Oe), ie(f, _e, le), Oe) {
                        e.each(_e.events, function(K) {
                            var Fe = K + oe,
                                H = function(Ae) {
                                    var we = m.call(this, _e.getVal, f, Ae, _e, a.call(arguments, 1)),
                                        be = S(_e.updateModel, we, Ae, _e);
                                    be && I(le, Oe, we, lt, _e)
                                },
                                ae = P === ":el" ? "" : P;
                            this.$el.on(Fe, ae, e.bind(H, this))
                        }, this), e.each(e.flatten([Oe]), function(K) {
                            k(le, "change:" + K, _e, function(Fe, H, ae) {
                                var Ae = ae && ae.stickitChange && ae.stickitChange.bindId;
                                if (Ae !== Pe) {
                                    var we = L(le, Oe, _e);
                                    re(f, _e, we, le)
                                }
                            })
                        });
                        var Ve = L(le, Oe, _e);
                        re(f, _e, Ve, le, !0)
                    }
                    m.call(this, _e.initialize, f, le, _e)
                }
            }
        }, e.extend(n.View.prototype, i.ViewMixin);
        var a = [].slice,
            d = function(v, P) {
                var q = (P || "").split("."),
                    le = e.reduce(q, function(oe, ye) {
                        return oe[ye]
                    }, v);
                return le == null ? v : le
            },
            m = function(v) {
                if (v = e.isString(v) ? d(this, v) : v, v) return v.apply(this, a.call(arguments, 1))
            },
            S = function(v, P, q) {
                if (e.isBoolean(v)) return v;
                if (e.isFunction(v) || e.isString(v)) {
                    var le = e.last(arguments).view;
                    return m.apply(le, arguments)
                }
                return !1
            },
            k = function(v, P, q, le) {
                var oe = q.view;
                v.on(P, le, oe), oe._modelBindings.push({
                    model: v,
                    event: P,
                    fn: le,
                    config: q
                })
            },
            I = function(v, P, q, le, oe) {
                var ye = {},
                    f = oe.view;
                oe.onSet && (q = m.call(f, oe.onSet, q, oe)), oe.set ? m.call(f, oe.set, P, q, le, oe) : (ye[P] = q, e.isArray(P) && e.isArray(q) && (ye = e.reduce(P, function(_e, Oe, Pe) {
                    return _e[Oe] = e.has(q, Pe) ? q[Pe] : null, _e
                }, {})), v.set(ye, le))
            },
            L = function(v, P, q) {
                var le = q.view,
                    oe = function(_e) {
                        return v[q.escape ? "escape" : "get"](_e)
                    },
                    ye = function(_e) {
                        return _e == null ? "" : _e
                    },
                    f = e.isArray(P) ? e.map(P, oe) : oe(P);
                return q.onGet && (f = m.call(le, q.onGet, f, q)), e.isArray(f) ? e.map(f, ye) : ye(f)
            },
            $ = i.getConfiguration = function(v, P) {
                var q = [{
                    updateModel: !1,
                    updateMethod: "text",
                    update: function(oe, ye, f, _e) {
                        oe[_e.updateMethod] && oe[_e.updateMethod](ye)
                    },
                    getVal: function(oe, ye, f) {
                        return oe[f.updateMethod]()
                    }
                }];
                q = q.concat(e.filter(i._handlers, function(oe) {
                    return v.is(oe.selector)
                })), q.push(P);
                var le = e.extend.apply(e, q);
                return e.has(le, "updateView") || (le.updateView = !le.visible), le
            },
            J = function(v, P, q, le) {
                var oe = ["autofocus", "autoplay", "async", "checked", "controls", "defer", "disabled", "hidden", "indeterminate", "loop", "multiple", "open", "readonly", "required", "scoped", "selected"],
                    ye = P.view;
                e.each(P.attributes || [], function(f) {
                    f = e.clone(f), f.view = ye;
                    var _e = "",
                        Oe = f.observe || (f.observe = le),
                        Pe = function() {
                            var lt = e.contains(oe, f.name) ? "prop" : "attr",
                                Ve = L(q, Oe, f);
                            f.name === "class" ? (v.removeClass(_e).addClass(Ve), _e = Ve) : v[lt](f.name, Ve)
                        };
                    e.each(e.flatten([Oe]), function(lt) {
                        k(q, "change:" + lt, P, Pe)
                    }), Pe()
                })
            },
            ie = function(v, P, q, le) {
                e.each(P.classes || [], function(oe, ye) {
                    e.isString(oe) && (oe = {
                        observe: oe
                    }), oe.view = P.view;
                    var f = oe.observe,
                        _e = function() {
                            var Oe = L(q, f, oe);
                            v.toggleClass(ye, !!Oe)
                        };
                    e.each(e.flatten([f]), function(Oe) {
                        k(q, "change:" + Oe, P, _e)
                    }), _e()
                })
            },
            X = function(v, P, q, le) {
                if (P.visible != null) {
                    var oe = P.view,
                        ye = function() {
                            var f = P.visible,
                                _e = P.visibleFn,
                                Oe = L(q, le, P),
                                Pe = !!Oe;
                            (e.isFunction(f) || e.isString(f)) && (Pe = !!m.call(oe, f, Oe, P)), _e ? m.call(oe, _e, v, Pe, P) : v.toggle(Pe)
                        };
                    e.each(e.flatten([le]), function(f) {
                        k(q, "change:" + f, P, ye)
                    }), ye()
                }
            },
            re = function(v, P, q, le, oe) {
                var ye = P.view;
                !S(P.updateView, q, P) || (m.call(ye, P.update, v, q, le, P), oe || m.call(ye, P.afterUpdate, v, q, P))
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
            update: function(v, P, q, le) {
                if (v.length > 1) P || (P = []), v.each(function(ye, f) {
                    var _e = n.$(f),
                        Oe = e.contains(P, _e.val());
                    _e.prop("checked", Oe)
                });
                else {
                    var oe = e.isBoolean(P) ? P : P === v.val();
                    v.prop("checked", oe)
                }
            },
            getVal: function(v) {
                var P;
                if (v.length > 1) P = e.reduce(v, function(le, oe) {
                    var ye = n.$(oe);
                    return ye.prop("checked") && le.push(ye.val()), le
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
            update: function(v, P, q, le) {
                var oe, ye = le.selectOptions,
                    f = ye && ye.collection || void 0,
                    _e = v.prop("multiple");
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
                    v.find("optgroup").length ? (f = {
                        opt_labels: []
                    }, v.find("> option").length && (f.opt_labels.push(void 0), e.each(v.find("> option"), function(he) {
                        f[void 0] = Oe(n.$(he))
                    })), e.each(v.find("optgroup"), function(he) {
                        var Se = n.$(he).attr("label");
                        f.opt_labels.push(Se), f[Se] = Oe(n.$(he).find("option"))
                    })) : f = Oe(v.find("option"))
                }
                ye.valuePath = ye.valuePath || "value", ye.labelPath = ye.labelPath || "label", ye.disabledPath = ye.disabledPath || "disabled";
                var Pe = function(he, Se, Te) {
                    e.each(he, function($e) {
                        var Ke = n.$("<option/>"),
                            dt = $e,
                            $t = function(_, O, M) {
                                Ke.text(_), dt = O, Ke.data("stickit-bind-val", dt), !e.isArray(dt) && !e.isObject(dt) && Ke.val(dt), M === !0 && Ke.prop("disabled", "disabled")
                            },
                            qt, E, l;
                        $e === "__default__" ? (qt = Te.label, E = Te.value, l = Te.disabled) : (qt = d($e, ye.labelPath), E = d($e, ye.valuePath), l = d($e, ye.disabledPath)), $t(qt, E, l);
                        var g = function() {
                            return !_e && dt != null && Te != null && dt === Te ? !0 : !!(e.isObject(Te) && e.isEqual(dt, Te))
                        };
                        g() ? Ke.prop("selected", !0) : _e && e.isArray(Te) && e.each(Te, function(_) {
                            e.isObject(_) && (_ = d(_, ye.valuePath)), (_ === dt || e.isObject(_) && e.isEqual(dt, _)) && Ke.prop("selected", !0)
                        }), Se.append(Ke)
                    })
                };
                if (v.find("*").remove(), e.isString(f)) {
                    var lt = window;
                    f.indexOf("this.") === 0 && (lt = this), f = f.replace(/^[a-z]*\.(.+)$/, "$1"), oe = d(lt, f)
                } else e.isFunction(f) ? oe = m.call(this, f, v, le) : oe = f;
                if (oe instanceof n.Collection) {
                    var Ve = oe,
                        K = function() {
                            var he = L(q, le.observe, le);
                            m.call(this, le.update, v, he, q, le)
                        },
                        Fe = function() {
                            Ve.off("add remove reset sort", K)
                        },
                        H = function() {
                            Fe(), Ve.off("stickit:selectRefresh"), q.off("stickit:selectRefresh")
                        };
                    Ve.trigger("stickit:selectRefresh"), Ve.once("stickit:selectRefresh", Fe, this), Ve.on("add remove reset sort", K, this), q.trigger("stickit:selectRefresh"), q.once("stickit:selectRefresh", function() {
                        q.off("stickit:unstuck", H)
                    }), q.once("stickit:unstuck", H, this), oe = oe.toJSON()
                }
                if (ye.defaultOption) {
                    var ae = e.isFunction(ye.defaultOption) ? ye.defaultOption.call(this, v, le) : ye.defaultOption;
                    Pe(["__default__"], v, ae)
                }
                if (e.isArray(oe)) Pe(oe, v, P);
                else if (oe.opt_labels) e.each(oe.opt_labels, function(he) {
                    var Se = n.$("<optgroup/>").attr("label", he);
                    Pe(oe[he], Se, P), v.append(Se)
                });
                else {
                    var Ae = [],
                        we;
                    for (var be in oe) we = {}, we[ye.valuePath] = be, we[ye.labelPath] = oe[be], Ae.push(we);
                    Ae = e.sortBy(Ae, ye.comparator || ye.labelPath), Pe(Ae, v, P)
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
                        let a = "";
                        return t && (a += t), e && (a += " selected"), n && (a += " disabled"), i && (a += " active"), a
                    }
                }]
            },
            "button:first": {
                observe: ["text", "html", "label"],
                updateMethod: "html",
                onGet([t, e, n]) {
                    return n ? this.$el.find("button:first").attr("aria-label", n) : this.$el.find("button:first").removeAttr("aria-label"), e || se("<div />").text(t).html()
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
            const e = se(t.target).data("action");
            this.triggerMethod(`button:${e}`, this.model)
        }
    });
var Ti, Bs, rs = typeof Map == "function" ? new Map : (Ti = [], Bs = [], {
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
                var a, d = null,
                    m = null,
                    S = null,
                    k = function() {
                        i.clientWidth !== m && J()
                    },
                    I = function(ie) {
                        window.removeEventListener("resize", k, !1), i.removeEventListener("input", J, !1), i.removeEventListener("keyup", J, !1), i.removeEventListener("autosize:destroy", I, !1), i.removeEventListener("autosize:update", J, !1), Object.keys(ie).forEach(function(X) {
                            i.style[X] = ie[X]
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
                }), (a = window.getComputedStyle(i, null)).resize === "vertical" ? i.style.resize = "none" : a.resize === "both" && (i.style.resize = "horizontal"), d = a.boxSizing === "content-box" ? -(parseFloat(a.paddingTop) + parseFloat(a.paddingBottom)) : parseFloat(a.borderTopWidth) + parseFloat(a.borderBottomWidth), isNaN(d) && (d = 0), J()
            }

            function L(ie) {
                var X = i.style.width;
                i.style.width = "0px", i.style.width = X, i.style.overflowY = ie
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
                        X = document.documentElement && document.documentElement.scrollTop;
                    i.style.height = "", i.style.height = i.scrollHeight + d + "px", m = i.clientWidth, ie.forEach(function(re) {
                        re.node.scrollTop = re.scrollTop
                    }), X && (document.documentElement.scrollTop = X)
                }
            }

            function J() {
                $();
                var ie = Math.round(parseFloat(i.style.height)),
                    X = window.getComputedStyle(i, null),
                    re = X.boxSizing === "content-box" ? Math.round(parseFloat(X.height)) : i.offsetHeight;
                if (re < ie ? X.overflowY === "hidden" && (L("scroll"), $(), re = X.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight) : X.overflowY !== "hidden" && (L("hidden"), $(), re = X.boxSizing === "content-box" ? Math.round(parseFloat(window.getComputedStyle(i, null).height)) : i.offsetHeight), S !== re) {
                    S = re;
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
                    return t ? typeof t == "object" ? t.html ? t.html : se("<div />").text(t.text).html() : t : null
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
            this.getOption("preventAutosize") || rc(se("textarea"))
        },
        onSubmitClick() {
            return se("textarea").blur(), this.triggerMethod("input:submit", this), !1
        },
        onKeypress(t) {
            return this.model.set("error", ""), t.keyCode === 13 ? (se("textarea").blur(), this.triggerMethod("input:submit", this), !1) : !0
        },
        onInputChange() {
            const t = this.$("textarea").first();
            if (this.triggerMethod("input:text", this), !t) return;
            const e = t.val() || "";
            this.model.set("remaining", this.model.get("maxLength") - e.length)
        },
        focus() {
            se(this.$el).find("textarea").focus()
        },
        clearInput() {
            const t = se(this.$el).find("textarea");
            se(t).val(""), this.getOption("preventAutosize") || rc.update(t), this.onInputChange()
        },
        setValue(t) {
            const e = se(this.$el).find("textarea");
            e[0].value = t, this.onInputChange()
        },
        getValue() {
            return this.$("textarea").val()
        },
        getSanitizedValue() {
            return Mt.sanitize(this.getValue())
        },
        sanitize(t) {
            return Mt.sanitize(t)
        },
        sanitizeInput(t) {
            return Mt.sanitizeInput(t)
        }
    }),
    uC = '<div class="text"></div>',
    Vi = Et.View.extend({
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
                    return e !== void 0 ? e : se("<div />").text(t).html()
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
            return t.get("type") === "input" ? to : t.get("type") === "text" ? Vi : qu
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

function Di() {
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
        loop: a = !0
    } = {}) {
        this.spriteSheet = e, this.frames = n, this.frameRate = i, this.loop = a;
        let {
            width: d,
            height: m,
            margin: S = 0
        } = e.frame;
        this.width = d, this.height = m, this.margin = S, this._f = 0, this._a = 0
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
        context: d = vo()
    } = {}) {
        let m = this.frames[this._f] / this.spriteSheet._f | 0,
            S = this.frames[this._f] % this.spriteSheet._f | 0;
        d.drawImage(this.spriteSheet.image, S * this.width + (S * 2 + 1) * this.margin, m * this.height + (m * 2 + 1) * this.margin, this.width, this.height, e, n, i, a)
    }
}

function yo(t) {
    return new rl(t)
}
yo.prototype = rl.prototype;
yo.class = rl;
const dC = () => {};

function fC() {
    let t = Di();
    vo().clearRect(0, 0, t.width, t.height)
}

function pC({
    fps: t = 60,
    clearCanvas: e = !0,
    update: n,
    render: i
} = {}) {
    if (!(n && i)) throw Error("You must provide update() and render() functions");
    let a = 0,
        d = 1e3 / t,
        m = 1 / t,
        S = e ? fC : dC,
        k, I, L, $, J;
    const ie = window.performance || Date;

    function X() {
        if (I = requestAnimationFrame(X), L = ie.now(), $ = L - k, k = L, !($ > 1e3)) {
            for (Yu("tick"), a += $; a >= d;) J.update(m), a -= d;
            S(), J.render()
        }
    }
    return J = {
        update: n,
        render: i,
        isStopped: !0,
        start() {
            k = ie.now(), this.isStopped = !1, requestAnimationFrame(X)
        },
        stop() {
            this.isStopped = !0, cancelAnimationFrame(I)
        },
        _frame: X,
        set _last(re) {
            k = re
        }
    }, J
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
        for (let a = this.size; a--;) n = this.objects[a], n.update(e), n.isAlive() || (i = !0, this.size--);
        i && this.objects.sort((a, d) => d.isAlive() - a.isAlive())
    }
    render() {
        for (let e = this.size; e--;) this.objects[e].render()
    }
}
gC.prototype;

function oc(t, e) {
    let n = [],
        i = e.x + e.width / 2,
        a = e.y + e.height / 2,
        d = t.y < a && t.y + t.height >= e.y,
        m = t.y + t.height >= a && t.y < e.y + e.height;
    return t.x < i && t.x + t.width >= e.x && (d && n.push(0), m && n.push(2)), t.x + t.width >= i && t.x < e.x + e.width && (d && n.push(1), m && n.push(3)), n
}
class sl {
    constructor({
        maxDepth: e = 3,
        maxObjects: n = 25,
        bounds: i
    } = {}) {
        this.maxDepth = e, this.maxObjects = n;
        let a = Di();
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
            for (i = oc(e, this.bounds), a = 0; a < i.length; a++) this._s[i[a]].get(e).forEach(d => n.add(d));
            return Array.from(n)
        }
        return this._o.filter(d => d !== e)
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
            dy: d,
            ddx: m,
            ddy: S,
            width: k,
            height: I,
            image: L
        } = e;
        this.position = fr(n, i), this.velocity = fr(a, d), this.acceleration = fr(m, S), this._fx = this._fy = 1, this.width = this.height = this.rotation = 0, this.ttl = 1 / 0, this.anchor = {
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
            a = e.x,
            d = e.y;
        return e.anchor && (a -= e.width * e.anchor.x, d -= e.height * e.anchor.y), n < a + e.width && n + this.width > a && i < d + e.height && i + this.height > d
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

function mC(t) {
    if (+t === t) return t;
    let e = [],
        n = t.split(".."),
        i = +n[0],
        a = +n[1],
        d = i;
    if (i < a)
        for (; d <= a; d++) e.push(d);
    else
        for (; d >= a; d--) e.push(d);
    return e
}
class vC {
    constructor({
        image: e,
        frameWidth: n,
        frameHeight: i,
        frameMargin: a,
        animations: d
    } = {}) {
        if (!e) throw Error("You must provide an Image for the SpriteSheet");
        this.animations = {}, this.image = e, this.frame = {
            width: n,
            height: i,
            margin: a
        }, this._f = e.width / n | 0, this.createAnimations(d)
    }
    createAnimations(e) {
        let n, i;
        for (i in e) {
            let {
                frames: a,
                frameRate: d,
                loop: m
            } = e[i];
            if (n = [], a === void 0) throw Error("Animation " + i + " must provide a frames property");
            [].concat(a).map(S => {
                n = n.concat(mC(S))
            }), this.animations[i] = yo({
                spriteSheet: this,
                frames: n,
                frameRate: d,
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
            i = c => {
                const h = [];
                for (let w = 0; w < c.length; w++) h.indexOf(c[w]) === -1 && h.push(c[w]);
                return h
            },
            a = c => c.charAt(0).toUpperCase() + c.slice(1),
            d = c => {
                console.warn("".concat(n, " ").concat(typeof c == "object" ? c.join(" ") : c))
            },
            m = c => {
                console.error("".concat(n, " ").concat(c))
            },
            S = [],
            k = c => {
                S.includes(c) || (S.push(c), d(c))
            },
            I = (c, h) => {
                k('"'.concat(c, '" is deprecated and will be removed in the next major release. Please use "').concat(h, '" instead.'))
            },
            L = c => typeof c == "function" ? c() : c,
            $ = c => c && typeof c.toPromise == "function",
            J = c => $(c) ? c.toPromise() : Promise.resolve(c),
            ie = c => c && Promise.resolve(c) === c,
            X = c => c[Math.floor(Math.random() * c.length)],
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
            le = c => Object.prototype.hasOwnProperty.call(re, c),
            oe = c => v.indexOf(c) !== -1,
            ye = c => P[c],
            f = c => {
                le(c) || d('Unknown parameter "'.concat(c, '"'))
            },
            _e = c => {
                q.includes(c) && d('The parameter "'.concat(c, '" is incompatible with toasts'))
            },
            Oe = c => {
                ye(c) && I(c, ye(c))
            },
            Pe = c => {
                !c.backdrop && c.allowOutsideClick && d('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
                for (const h in c) f(h), c.toast && _e(h), Oe(h)
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
            ae = c => {
                const h = H();
                return h ? h.querySelector(c) : null
            },
            Ae = c => ae(".".concat(c)),
            we = () => Ae(K.popup),
            be = () => Ae(K.icon),
            he = () => Ae(K.title),
            Se = () => Ae(K["html-container"]),
            Te = () => Ae(K.image),
            $e = () => Ae(K["progress-steps"]),
            Ke = () => Ae(K["validation-message"]),
            dt = () => ae(".".concat(K.actions, " .").concat(K.confirm)),
            $t = () => ae(".".concat(K.actions, " .").concat(K.deny)),
            qt = () => Ae(K["input-label"]),
            E = () => ae(".".concat(K.loader)),
            l = () => ae(".".concat(K.actions, " .").concat(K.cancel)),
            g = () => Ae(K.actions),
            _ = () => Ae(K.footer),
            O = () => Ae(K["timer-progress-bar"]),
            M = () => Ae(K.close),
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
                const c = Array.from(we().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((w, V) => {
                        const me = parseInt(w.getAttribute("tabindex")),
                            Ge = parseInt(V.getAttribute("tabindex"));
                        return me > Ge ? 1 : me < Ge ? -1 : 0
                    }),
                    h = Array.from(we().querySelectorAll(B)).filter(w => w.getAttribute("tabindex") !== "-1");
                return i(c.concat(h)).filter(w => ge(w))
            },
            ke = () => Ct(document.body, K.shown) && !Ct(document.body, K["toast-shown"]) && !Ct(document.body, K["no-backdrop"]),
            de = () => we() && Ct(we(), K.toast),
            Le = () => we().hasAttribute("data-loading"),
            De = {
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
                    if (typeof h.customClass[w] != "string" && !h.customClass[w].forEach) return d("Invalid type of customClass.".concat(w, '! Expected string or iterable object, got "').concat(typeof h.customClass[w], '"'));
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
            Jt = (c, h, w) => {
                !c || !h || (typeof h == "string" && (h = h.split(/\s+/).filter(Boolean)), h.forEach(V => {
                    Array.isArray(c) ? c.forEach(me => {
                        w ? me.classList.add(V) : me.classList.remove(V)
                    }) : w ? c.classList.add(V) : c.classList.remove(V)
                }))
            },
            Je = (c, h) => {
                Jt(c, h, !0)
            },
            Pt = (c, h) => {
                Jt(c, h, !1)
            },
            j = (c, h) => {
                const w = Array.from(c.children);
                for (let V = 0; V < w.length; V++) {
                    const me = w[V];
                    if (me instanceof HTMLElement && Ct(me, h)) return me
                }
            },
            N = (c, h, w) => {
                w === "".concat(parseInt(w)) && (w = parseInt(w)), w || parseInt(w) === 0 ? c.style[h] = typeof w == "number" ? "".concat(w, "px") : w : c.style.removeProperty(h)
            },
            W = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
                c.style.display = h
            },
            D = c => {
                c.style.display = "none"
            },
            U = (c, h, w, V) => {
                const me = c.querySelector(h);
                me && (me.style[w] = V)
            },
            pe = function(c, h) {
                let w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
                h ? W(c, w) : D(c)
            },
            ge = c => !!(c && (c.offsetWidth || c.offsetHeight || c.getClientRects().length)),
            Ne = () => !ge(dt()) && !ge($t()) && !ge(l()),
            Be = c => c.scrollHeight > c.clientHeight,
            pt = c => {
                const h = window.getComputedStyle(c),
                    w = parseFloat(h.getPropertyValue("animation-duration") || "0"),
                    V = parseFloat(h.getPropertyValue("transition-duration") || "0");
                return w > 0 || V > 0
            },
            Ft = function(c) {
                let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                const w = O();
                ge(w) && (h && (w.style.transition = "none", w.style.width = "100%"), setTimeout(() => {
                    w.style.transition = "width ".concat(c / 1e3, "s linear"), w.style.width = "0%"
                }, 10))
            },
            Xe = () => {
                const c = O(),
                    h = parseInt(window.getComputedStyle(c).width);
                c.style.removeProperty("transition"), c.style.width = "100%";
                const w = parseInt(window.getComputedStyle(c).width),
                    V = h / w * 100;
                c.style.removeProperty("transition"), c.style.width = "".concat(V, "%")
            },
            In = () => typeof window > "u" || typeof document > "u",
            Pn = 100,
            it = {},
            Ln = () => {
                it.previousActiveElement instanceof HTMLElement ? (it.previousActiveElement.focus(), it.previousActiveElement = null) : document.body && document.body.focus()
            },
            gi = c => new Promise(h => {
                if (!c) return h();
                const w = window.scrollX,
                    V = window.scrollY;
                it.restoreFocusTimeout = setTimeout(() => {
                    Ln(), h()
                }, Pn), window.scrollTo(w, V)
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
                const c = H();
                return c ? (c.remove(), Pt([document.documentElement, document.body], [K["no-backdrop"], K["toast-shown"], K["has-column"]]), !0) : !1
            },
            sn = () => {
                it.currentInstance.resetValidationMessage()
            },
            kr = () => {
                const c = we(),
                    h = j(c, K.input),
                    w = j(c, K.file),
                    V = c.querySelector(".".concat(K.range, " input")),
                    me = c.querySelector(".".concat(K.range, " output")),
                    Ge = j(c, K.select),
                    Ut = c.querySelector(".".concat(K.checkbox, " input")),
                    Bn = j(c, K.textarea);
                h.oninput = sn, w.onchange = sn, Ge.onchange = sn, Ut.onchange = sn, Bn.oninput = sn, V.oninput = () => {
                    sn(), me.value = V.value
                }, V.onchange = () => {
                    sn(), me.value = V.value
                }
            },
            Tr = c => typeof c == "string" ? document.querySelector(c) : c,
            mi = c => {
                const h = we();
                h.setAttribute("role", c.toast ? "alert" : "dialog"), h.setAttribute("aria-live", c.toast ? "polite" : "assertive"), c.toast || h.setAttribute("aria-modal", "true")
            },
            $i = c => {
                window.getComputedStyle(c).direction === "rtl" && Je(H(), K.rtl)
            },
            vi = c => {
                const h = kn();
                if (In()) {
                    m("SweetAlert2 requires document to initialize");
                    return
                }
                const w = document.createElement("div");
                w.className = K.container, h && Je(w, K["no-transition"]), nt(w, Sr);
                const V = Tr(c.target);
                V.appendChild(w), mi(c), $i(V), kr()
            },
            yi = (c, h) => {
                c instanceof HTMLElement ? h.appendChild(c) : typeof c == "object" ? ji(c, h) : c && nt(h, c)
            },
            ji = (c, h) => {
                c.jquery ? Fi(h, c) : nt(h, c.toString())
            },
            Fi = (c, h) => {
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
            zi = () => {
                const c = document.createElement("div");
                c.className = K["scrollbar-measure"], document.body.appendChild(c);
                const h = c.getBoundingClientRect().width - c.clientWidth;
                return document.body.removeChild(c), h
            },
            bi = (c, h) => {
                const w = g(),
                    V = E();
                !h.showConfirmButton && !h.showDenyButton && !h.showCancelButton ? D(w) : W(w), ct(w, h, "actions"), Gn(w, V, h), nt(V, h.loaderHtml), ct(V, h, "loader")
            };

        function Gn(c, h, w) {
            const V = dt(),
                me = $t(),
                Ge = l();
            wi(V, "confirm", w), wi(me, "deny", w), wi(Ge, "cancel", w), Gi(V, me, Ge, w), w.reverseButtons && (w.toast ? (c.insertBefore(Ge, V), c.insertBefore(me, V)) : (c.insertBefore(Ge, h), c.insertBefore(me, h), c.insertBefore(V, h)))
        }

        function Gi(c, h, w, V) {
            if (!V.buttonsStyling) return Pt([c, h, w], K.styled);
            Je([c, h, w], K.styled), V.confirmButtonColor && (c.style.backgroundColor = V.confirmButtonColor, Je(c, K["default-outline"])), V.denyButtonColor && (h.style.backgroundColor = V.denyButtonColor, Je(h, K["default-outline"])), V.cancelButtonColor && (w.style.backgroundColor = V.cancelButtonColor, Je(w, K["default-outline"]))
        }

        function wi(c, h, w) {
            pe(c, w["show".concat(a(h), "Button")], "inline-block"), nt(c, w["".concat(h, "ButtonText")]), c.setAttribute("aria-label", w["".concat(h, "ButtonAriaLabel")]), c.className = K[h], ct(c, w, "".concat(h, "Button")), Je(c, w["".concat(h, "ButtonClass")])
        }
        const Ze = (c, h) => {
            const w = H();
            !w || (y(w, h.backdrop), o(w, h.position), C(w, h.grow), ct(w, h, "container"))
        };

        function y(c, h) {
            typeof h == "string" ? c.style.background = h : h || Je([document.documentElement, document.body], K["no-backdrop"])
        }

        function o(c, h) {
            h in K ? Je(c, K[h]) : (d('The "position" parameter is not valid, defaulting to "center"'), Je(c, K.center))
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
            xe = (c, h) => {
                const w = we(),
                    V = A.innerParams.get(c),
                    me = !V || h.input !== V.input;
                Q.forEach(Ge => {
                    const Ut = j(w, K[Ge]);
                    Yt(Ge, h.inputAttributes), Ut.className = K[Ge], me && D(Ut)
                }), h.input && (me && qe(h), Hn(h))
            },
            qe = c => {
                if (!zt[c.input]) return m('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(c.input, '"'));
                const h = Ar(c.input),
                    w = zt[c.input](h, c);
                W(h), setTimeout(() => {
                    wt(w)
                })
            },
            It = c => {
                for (let h = 0; h < c.attributes.length; h++) {
                    const w = c.attributes[h].name;
                    ["type", "value", "style"].includes(w) || c.removeAttribute(w)
                }
            },
            Yt = (c, h) => {
                const w = yt(we(), c);
                if (!!w) {
                    It(w);
                    for (const V in h) w.setAttribute(V, h[V])
                }
            },
            Hn = c => {
                const h = Ar(c.input);
                typeof c.customClass == "object" && Je(h, c.customClass.input)
            },
            Nn = (c, h) => {
                (!c.placeholder || h.inputPlaceholder) && (c.placeholder = h.inputPlaceholder)
            },
            Un = (c, h, w) => {
                if (w.inputLabel) {
                    c.id = K.input;
                    const V = document.createElement("label"),
                        me = K["input-label"];
                    V.setAttribute("for", c.id), V.className = me, typeof w.customClass == "object" && Je(V, w.customClass.inputLabel), V.innerText = w.inputLabel, h.insertAdjacentElement("beforebegin", V)
                }
            },
            Ar = c => j(we(), K[c] || K.input),
            Xt = (c, h) => {
                ["string", "number"].includes(typeof h) ? c.value = "".concat(h) : ie(h) || d('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof h, '"'))
            },
            zt = {};
        zt.text = zt.email = zt.password = zt.number = zt.tel = zt.url = (c, h) => (Xt(c, h.inputValue), Un(c, c, h), Nn(c, h), c.type = h.input, c), zt.file = (c, h) => (Un(c, c, h), Nn(c, h), c), zt.range = (c, h) => {
            const w = c.querySelector("input"),
                V = c.querySelector("output");
            return Xt(w, h.inputValue), w.type = h.input, Xt(V, h.inputValue), Un(w, c, h), c
        }, zt.select = (c, h) => {
            if (c.textContent = "", h.inputPlaceholder) {
                const w = document.createElement("option");
                nt(w, h.inputPlaceholder), w.value = "", w.disabled = !0, w.selected = !0, c.appendChild(w)
            }
            return Un(c, c, h), c
        }, zt.radio = c => (c.textContent = "", c), zt.checkbox = (c, h) => {
            const w = yt(we(), "checkbox");
            w.value = "1", w.id = K.checkbox, w.checked = Boolean(h.inputValue);
            const V = c.querySelector("span");
            return nt(V, h.inputPlaceholder), w
        }, zt.textarea = (c, h) => {
            Xt(c, h.inputValue), Nn(c, h), Un(c, c, h);
            const w = V => parseInt(window.getComputedStyle(V).marginLeft) + parseInt(window.getComputedStyle(V).marginRight);
            return setTimeout(() => {
                if ("MutationObserver" in window) {
                    const V = parseInt(window.getComputedStyle(we()).width),
                        me = () => {
                            const Ge = c.offsetWidth + w(c);
                            Ge > V ? we().style.width = "".concat(Ge, "px") : we().style.width = null
                        };
                    new MutationObserver(me).observe(c, {
                        attributes: !0,
                        attributeFilter: ["style"]
                    })
                }
            }), c
        };
        const Hi = (c, h) => {
                const w = Se();
                ct(w, h, "htmlContainer"), h.html ? (yi(h.html, w), W(w, "block")) : h.text ? (w.textContent = h.text, W(w, "block")) : D(w), xe(c, h)
            },
            wo = (c, h) => {
                const w = _();
                pe(w, h.footer), h.footer && yi(h.footer, w), ct(w, h, "footer")
            },
            Co = (c, h) => {
                const w = M();
                nt(w, h.closeButtonHtml), ct(w, h, "closeButton"), pe(w, h.showCloseButton), w.setAttribute("aria-label", h.closeButtonAriaLabel)
            },
            Or = (c, h) => {
                const w = A.innerParams.get(c),
                    V = be();
                if (w && h.icon === w.icon) {
                    ms(V, h), Rr(V, h);
                    return
                }
                if (!h.icon && !h.iconHtml) {
                    D(V);
                    return
                }
                if (h.icon && Object.keys(Fe).indexOf(h.icon) === -1) {
                    m('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(h.icon, '"')), D(V);
                    return
                }
                W(V), ms(V, h), Rr(V, h), Je(V, h.showClass.icon)
            },
            Rr = (c, h) => {
                for (const w in Fe) h.icon !== w && Pt(c, Fe[w]);
                Je(c, Fe[h.icon]), wn(c, h), Ui(), ct(c, h, "icon")
            },
            Ui = () => {
                const c = we(),
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
            xo = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
            ms = (c, h) => {
                let w = c.innerHTML,
                    V;
                h.iconHtml ? V = Ir(h.iconHtml) : h.icon === "success" ? (V = gs, w = w.replace(/ style=".*?"/g, "")) : h.icon === "error" ? V = xo : V = Ir({
                    question: "?",
                    warning: "!",
                    info: "i"
                } [h.icon]), w.trim() !== V.trim() && nt(c, V)
            },
            wn = (c, h) => {
                if (!!h.iconColor) {
                    c.style.color = h.iconColor, c.style.borderColor = h.iconColor;
                    for (const w of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) U(c, w, "backgroundColor", h.iconColor);
                    U(c, ".swal2-success-ring", "borderColor", h.iconColor)
                }
            },
            Ir = c => '<div class="'.concat(K["icon-content"], '">').concat(c, "</div>"),
            Ci = (c, h) => {
                const w = Te();
                if (!h.imageUrl) return D(w);
                W(w, ""), w.setAttribute("src", h.imageUrl), w.setAttribute("alt", h.imageAlt), N(w, "width", h.imageWidth), N(w, "height", h.imageHeight), w.className = K.image, ct(w, h, "image")
            },
            Eo = (c, h) => {
                const w = $e();
                if (!h.progressSteps || h.progressSteps.length === 0) return D(w);
                W(w), w.textContent = "", h.currentProgressStep >= h.progressSteps.length && d("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), h.progressSteps.forEach((V, me) => {
                    const Ge = _o(V);
                    if (w.appendChild(Ge), me === h.currentProgressStep && Je(Ge, K["active-progress-step"]), me !== h.progressSteps.length - 1) {
                        const Ut = qn(h);
                        w.appendChild(Ut)
                    }
                })
            },
            _o = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step"]), nt(h, c), h
            },
            qn = c => {
                const h = document.createElement("li");
                return Je(h, K["progress-step-line"]), c.progressStepsDistance && N(h, "width", c.progressStepsDistance), h
            },
            Wn = (c, h) => {
                const w = he();
                pe(w, h.title || h.titleText, "block"), h.title && yi(h.title, w), h.titleText && (w.innerText = h.titleText), ct(w, h, "title")
            },
            Lr = (c, h) => {
                const w = H(),
                    V = we();
                h.toast ? (N(w, "width", h.width), V.style.width = "100%", V.insertBefore(E(), be())) : N(V, "width", h.width), N(V, "padding", h.padding), h.color && (V.style.color = h.color), h.background && (V.style.background = h.background), D(Ke()), So(V, h)
            },
            So = (c, h) => {
                c.className = "".concat(K.popup, " ").concat(ge(c) ? h.showClass.popup : ""), h.toast ? (Je([document.documentElement, document.body], K["toast-shown"]), Je(c, K.toast)) : Je(c, K.modal), ct(c, h, "popup"), typeof h.customClass == "string" && Je(c, h.customClass), h.icon && Je(c, K["icon-".concat(h.icon)])
            },
            Dr = (c, h) => {
                Lr(c, h), Ze(c, h), Eo(c, h), Or(c, h), Ci(c, h), Wn(c, h), Co(c, h), Hi(c, h), bi(c, h), wo(c, h), typeof h.didRender == "function" && h.didRender(we())
            },
            Yn = Object.freeze({
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
            qi = ["swal-title", "swal-html", "swal-footer"],
            ko = c => {
                const h = typeof c.template == "string" ? document.querySelector(c.template) : c.template;
                if (!h) return {};
                const w = h.content;
                return Io(w), Object.assign(vs(w), To(w), Ao(w), Pr(w), Oo(w), Ro(w, qi))
            },
            vs = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-param")).forEach(V => {
                    Xn(V, ["name", "value"]);
                    const me = V.getAttribute("name"),
                        Ge = V.getAttribute("value");
                    typeof re[me] == "boolean" && Ge === "false" && (h[me] = !1), typeof re[me] == "object" && (h[me] = JSON.parse(Ge))
                }), h
            },
            To = c => {
                const h = {};
                return Array.from(c.querySelectorAll("swal-button")).forEach(V => {
                    Xn(V, ["type", "color", "aria-label"]);
                    const me = V.getAttribute("type");
                    h["".concat(me, "ButtonText")] = V.innerHTML, h["show".concat(a(me), "Button")] = !0, V.hasAttribute("color") && (h["".concat(me, "ButtonColor")] = V.getAttribute("color")), V.hasAttribute("aria-label") && (h["".concat(me, "ButtonAriaLabel")] = V.getAttribute("aria-label"))
                }), h
            },
            Ao = c => {
                const h = {},
                    w = c.querySelector("swal-image");
                return w && (Xn(w, ["src", "width", "height", "alt"]), w.hasAttribute("src") && (h.imageUrl = w.getAttribute("src")), w.hasAttribute("width") && (h.imageWidth = w.getAttribute("width")), w.hasAttribute("height") && (h.imageHeight = w.getAttribute("height")), w.hasAttribute("alt") && (h.imageAlt = w.getAttribute("alt"))), h
            },
            Pr = c => {
                const h = {},
                    w = c.querySelector("swal-icon");
                return w && (Xn(w, ["type", "color"]), w.hasAttribute("type") && (h.icon = w.getAttribute("type")), w.hasAttribute("color") && (h.iconColor = w.getAttribute("color")), h.iconHtml = w.innerHTML), h
            },
            Oo = c => {
                const h = {},
                    w = c.querySelector("swal-input");
                w && (Xn(w, ["type", "label", "placeholder", "value"]), h.input = w.getAttribute("type") || "text", w.hasAttribute("label") && (h.inputLabel = w.getAttribute("label")), w.hasAttribute("placeholder") && (h.inputPlaceholder = w.getAttribute("placeholder")), w.hasAttribute("value") && (h.inputValue = w.getAttribute("value")));
                const V = Array.from(c.querySelectorAll("swal-input-option"));
                return V.length && (h.inputOptions = {}, V.forEach(me => {
                    Xn(me, ["value"]);
                    const Ge = me.getAttribute("value"),
                        Ut = me.innerHTML;
                    h.inputOptions[Ge] = Ut
                })), h
            },
            Ro = (c, h) => {
                const w = {};
                for (const V in h) {
                    const me = h[V],
                        Ge = c.querySelector(me);
                    Ge && (Xn(Ge, []), w[me.replace(/^swal-/, "")] = Ge.innerHTML.trim())
                }
                return w
            },
            Io = c => {
                const h = qi.concat(["swal-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
                Array.from(c.children).forEach(w => {
                    const V = w.tagName.toLowerCase();
                    h.indexOf(V) === -1 && d("Unrecognized element <".concat(V, ">"))
                })
            },
            Xn = (c, h) => {
                Array.from(c.attributes).forEach(w => {
                    h.indexOf(w.name) === -1 && d(['Unrecognized attribute "'.concat(w.name, '" on <').concat(c.tagName.toLowerCase(), ">."), "".concat(h.length ? "Allowed attributes are: ".concat(h.join(", ")) : "To set the value, use HTML within the element.")])
                })
            };
        var ys = {
            email: (c, h) => /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid email address"),
            url: (c, h) => /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c) ? Promise.resolve() : Promise.resolve(h || "Invalid URL")
        };

        function Lo(c) {
            c.inputValidator || Object.keys(ys).forEach(h => {
                c.input === h && (c.inputValidator = ys[h])
            })
        }

        function Do(c) {
            (!c.target || typeof c.target == "string" && !document.querySelector(c.target) || typeof c.target != "string" && !c.target.appendChild) && (d('Target parameter is not valid, defaulting to "body"'), c.target = "body")
        }

        function bs(c) {
            Lo(c), c.showLoaderOnConfirm && !c.preConfirm && d(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`), Do(c), typeof c.title == "string" && (c.title = c.title.split(`
`).join("<br />")), vi(c)
        }
        class Nr {
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
                De.previousBodyPadding === null && document.body.scrollHeight > window.innerHeight && (De.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")), document.body.style.paddingRight = "".concat(De.previousBodyPadding + zi(), "px"))
            },
            Br = () => {
                De.previousBodyPadding !== null && (document.body.style.paddingRight = "".concat(De.previousBodyPadding, "px"), De.previousBodyPadding = null)
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
                    w = !!c.match(/WebKit/i);
                h && w && !c.match(/CriOS/i) && we().scrollHeight > window.innerHeight - 44 && (H().style.paddingBottom = "".concat(44, "px"))
            },
            Vr = () => {
                const c = H();
                let h;
                c.ontouchstart = w => {
                    h = Mo(w)
                }, c.ontouchmove = w => {
                    h && (w.preventDefault(), w.stopPropagation())
                }
            },
            Mo = c => {
                const h = c.target,
                    w = H();
                return Po(c) || No(c) ? !1 : h === w || !Be(w) && h.tagName !== "INPUT" && h.tagName !== "TEXTAREA" && !(Be(Se()) && Se().contains(h))
            },
            Po = c => c.touches && c.touches.length && c.touches[0].touchType === "stylus",
            No = c => c.touches && c.touches.length > 1,
            Ei = () => {
                if (Ct(document.body, K.iosfix)) {
                    const c = parseInt(document.body.style.top, 10);
                    Pt(document.body, K.iosfix), document.body.style.top = "", document.body.scrollTop = c * -1
                }
            },
            $r = 10,
            jr = c => {
                const h = H(),
                    w = we();
                typeof c.willOpen == "function" && c.willOpen(w);
                const me = window.getComputedStyle(document.body).overflowY;
                r(h, w, c), setTimeout(() => {
                    Bo(h, w)
                }, $r), ke() && (Vo(h, c.scrollbarPadding, me), xi()), !de() && !it.previousActiveElement && (it.previousActiveElement = document.activeElement), typeof c.didOpen == "function" && setTimeout(() => c.didOpen(w)), Pt(h, K["no-transition"])
            },
            Es = c => {
                const h = we();
                if (c.target !== h) return;
                const w = H();
                h.removeEventListener(mn, Es), w.style.overflowY = "auto"
            },
            Bo = (c, h) => {
                mn && pt(h) ? (c.style.overflowY = "hidden", h.addEventListener(mn, Es)) : c.style.overflowY = "auto"
            },
            Vo = (c, h, w) => {
                Cs(), h && w !== "hidden" && ws(), setTimeout(() => {
                    c.scrollTop = 0
                })
            },
            r = (c, h, w) => {
                Je(c, w.showClass.backdrop), h.style.setProperty("opacity", "0", "important"), W(h, "grid"), setTimeout(() => {
                    Je(h, w.showClass.popup), h.style.removeProperty("opacity")
                }, $r), Je([document.documentElement, document.body], K.shown), w.heightAuto && w.backdrop && !w.toast && Je([document.documentElement, document.body], K["height-auto"])
            },
            s = c => {
                let h = we();
                h || new At, h = we();
                const w = E();
                de() ? D(be()) : u(h, c), W(w), h.setAttribute("data-loading", "true"), h.setAttribute("aria-busy", "true"), h.focus()
            },
            u = (c, h) => {
                const w = g(),
                    V = E();
                !h && ge(dt()) && (h = dt()), W(w), h && (D(h), V.setAttribute("data-button-to-replace", h.className)), V.parentNode.insertBefore(V, h), Je([c, w], K.loading)
            },
            p = (c, h) => {
                h.input === "select" || h.input === "radio" ? G(c, h) : ["text", "email", "number", "tel", "textarea"].includes(h.input) && ($(h.inputValue) || ie(h.inputValue)) && (s(dt()), Z(c, h))
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
            G = (c, h) => {
                const w = we(),
                    V = me => ce[h.input](w, Ce(me), h);
                $(h.inputOptions) || ie(h.inputOptions) ? (s(dt()), J(h.inputOptions).then(me => {
                    c.hideLoading(), V(me)
                })) : typeof h.inputOptions == "object" ? V(h.inputOptions) : m("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof h.inputOptions))
            },
            Z = (c, h) => {
                const w = c.getInput();
                D(w), J(h.inputValue).then(V => {
                    w.value = h.input === "number" ? parseFloat(V) || 0 : "".concat(V), W(w), w.focus(), c.hideLoading()
                }).catch(V => {
                    m("Error in inputValue promise: ".concat(V)), w.value = "", W(w), w.focus(), c.hideLoading()
                })
            },
            ce = {
                select: (c, h, w) => {
                    const V = j(c, K.select),
                        me = (Ge, Ut, Bn) => {
                            const pn = document.createElement("option");
                            pn.value = Bn, nt(pn, Ut), pn.selected = ne(Bn, w.inputValue), Ge.appendChild(pn)
                        };
                    h.forEach(Ge => {
                        const Ut = Ge[0],
                            Bn = Ge[1];
                        if (Array.isArray(Bn)) {
                            const pn = document.createElement("optgroup");
                            pn.label = Ut, pn.disabled = !1, V.appendChild(pn), Bn.forEach(nr => me(pn, nr[1], nr[0]))
                        } else me(V, Bn, Ut)
                    }), V.focus()
                },
                radio: (c, h, w) => {
                    const V = j(c, K.radio);
                    h.forEach(Ge => {
                        const Ut = Ge[0],
                            Bn = Ge[1],
                            pn = document.createElement("input"),
                            nr = document.createElement("label");
                        pn.type = "radio", pn.name = K.radio, pn.value = Ut, ne(Ut, w.inputValue) && (pn.checked = !0);
                        const Ko = document.createElement("span");
                        nt(Ko, Bn), Ko.className = K.label, nr.appendChild(pn), nr.appendChild(Ko), V.appendChild(nr)
                    });
                    const me = V.querySelectorAll("input");
                    me.length && me[0].focus()
                }
            },
            Ce = c => {
                const h = [];
                return typeof Map < "u" && c instanceof Map ? c.forEach((w, V) => {
                    let me = w;
                    typeof me == "object" && (me = Ce(me)), h.push([V, me])
                }) : Object.keys(c).forEach(w => {
                    let V = c[w];
                    typeof V == "object" && (V = Ce(V)), h.push([w, V])
                }), h
            },
            ne = (c, h) => h && h.toString() === c.toString();

        function ue() {
            const c = A.innerParams.get(this);
            if (!c) return;
            const h = A.domCache.get(this);
            D(h.loader), de() ? c.icon && W(be()) : Ue(h), Pt([h.popup, h.actions], K.loading), h.popup.removeAttribute("aria-busy"), h.popup.removeAttribute("data-loading"), h.confirmButton.disabled = !1, h.denyButton.disabled = !1, h.cancelButton.disabled = !1
        }
        const Ue = c => {
            const h = c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));
            h.length ? W(h[0], "inline-block") : Ne() && D(c.actions)
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
        const Gt = () => ge(we()),
            Bt = () => dt() && dt().click(),
            un = () => $t() && $t().click(),
            _t = () => l() && l().click(),
            et = c => {
                c.keydownTarget && c.keydownHandlerAdded && (c.keydownTarget.removeEventListener("keydown", c.keydownHandler, {
                    capture: c.keydownListenerCapture
                }), c.keydownHandlerAdded = !1)
            },
            on = (c, h, w, V) => {
                et(h), w.toast || (h.keydownHandler = me => Wi(c, me, V), h.keydownTarget = w.keydownListenerCapture ? window : we(), h.keydownListenerCapture = w.keydownListenerCapture, h.keydownTarget.addEventListener("keydown", h.keydownHandler, {
                    capture: h.keydownListenerCapture
                }), h.keydownHandlerAdded = !0)
            },
            ft = (c, h, w) => {
                const V = te();
                if (V.length) return h = h + w, h === V.length ? h = 0 : h === -1 && (h = V.length - 1), V[h].focus();
                we().focus()
            },
            Lt = ["ArrowRight", "ArrowDown"],
            _i = ["ArrowLeft", "ArrowUp"],
            Wi = (c, h, w) => {
                const V = A.innerParams.get(c);
                !V || h.isComposing || h.keyCode === 229 || (V.stopKeydownPropagation && h.stopPropagation(), h.key === "Enter" ? hn(c, h, V) : h.key === "Tab" ? Kn(h, V) : [...Lt, ..._i].includes(h.key) ? Jn(h.key) : h.key === "Escape" && an(h, V, w))
            },
            hn = (c, h, w) => {
                if (!!L(w.allowEnterKey) && h.target && c.getInput() && h.target instanceof HTMLElement && h.target.outerHTML === c.getInput().outerHTML) {
                    if (["textarea", "file"].includes(w.input)) return;
                    Bt(), h.preventDefault()
                }
            },
            Kn = (c, h) => {
                const w = c.target,
                    V = te();
                let me = -1;
                for (let Ge = 0; Ge < V.length; Ge++)
                    if (w === V[Ge]) {
                        me = Ge;
                        break
                    } c.shiftKey ? ft(h, me, -1) : ft(h, me, 1), c.stopPropagation(), c.preventDefault()
            },
            Jn = c => {
                const h = dt(),
                    w = $t(),
                    V = l();
                if (document.activeElement instanceof HTMLElement && ![h, w, V].includes(document.activeElement)) return;
                const me = Lt.includes(c) ? "nextElementSibling" : "previousElementSibling";
                let Ge = document.activeElement;
                for (let Ut = 0; Ut < g().children.length; Ut++) {
                    if (Ge = Ge[me], !Ge) return;
                    if (Ge instanceof HTMLButtonElement && ge(Ge)) break
                }
                Ge instanceof HTMLButtonElement && Ge.focus()
            },
            an = (c, h, w) => {
                L(h.allowEscapeKey) && (c.preventDefault(), w(Yn.esc))
            };

        function Dn(c, h, w, V) {
            de() ? ks(c, V) : (gi(w).then(() => ks(c, V)), et(it)), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? (h.setAttribute("style", "display:none !important"), h.removeAttribute("class"), h.innerHTML = "") : h.remove(), ke() && (Br(), Ei(), Mr()), vn()
        }

        function vn() {
            Pt([document.documentElement, document.body], [K.shown, K["height-auto"], K["no-backdrop"], K["toast-shown"]])
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
            const h = we();
            if (!h) return !1;
            const w = A.innerParams.get(c);
            if (!w || Ct(h, w.hideClass.popup)) return !1;
            Pt(h, w.showClass.popup), Je(h, w.hideClass.popup);
            const V = H();
            return Pt(V, w.showClass.backdrop), Je(V, w.hideClass.backdrop), Ss(c, h, w), !0
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
            Ss = (c, h, w) => {
                const V = H(),
                    me = mn && pt(h);
                typeof w.willClose == "function" && w.willClose(h), me ? zr(c, h, V, w.returnFocus, w.didClose) : Dn(c, V, w.returnFocus, w.didClose)
            },
            zr = (c, h, w, V, me) => {
                it.swalCloseEventFinishedCallback = Dn.bind(null, c, w, V, me), h.addEventListener(mn, function(Ge) {
                    Ge.target === h && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback)
                })
            },
            ks = (c, h) => {
                setTimeout(() => {
                    typeof h == "function" && h.bind(c.params)(), c._destroy()
                })
            };

        function Si(c, h, w) {
            const V = A.domCache.get(c);
            h.forEach(me => {
                V[me].disabled = w
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

        function Yi(c) {
            const h = A.domCache.get(this),
                w = A.innerParams.get(this);
            nt(h.validationMessage, c), h.validationMessage.className = K["validation-message"], w.customClass && w.customClass.validationMessage && Je(h.validationMessage, w.customClass.validationMessage), W(h.validationMessage);
            const V = this.getInput();
            V && (V.setAttribute("aria-invalid", !0), V.setAttribute("aria-describedby", K["validation-message"]), wt(V), Je(V, K.inputerror))
        }

        function zo() {
            const c = A.domCache.get(this);
            c.validationMessage && D(c.validationMessage);
            const h = this.getInput();
            h && (h.removeAttribute("aria-invalid"), h.removeAttribute("aria-describedby"), Pt(h, K.inputerror))
        }

        function Go() {
            return A.domCache.get(this).progressSteps
        }

        function Ho(c) {
            const h = we(),
                w = A.innerParams.get(this);
            if (!h || Ct(h, w.hideClass.popup)) return d("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
            const V = ki(c),
                me = Object.assign({}, w, V);
            Dr(this, me), A.innerParams.set(this, me), Object.defineProperties(this, {
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
                oe(w) ? h[w] = c[w] : d("Invalid parameter to update: ".concat(w))
            }), h
        };

        function Uo() {
            const c = A.domCache.get(this),
                h = A.innerParams.get(this);
            if (!h) {
                Tn(this);
                return
            }
            c.popup && it.swalCloseEventFinishedCallback && (it.swalCloseEventFinishedCallback(), delete it.swalCloseEventFinishedCallback), typeof h.didDestroy == "function" && h.didDestroy(), Gr(this)
        }
        const Gr = c => {
                Tn(c), delete c.params, delete it.keydownHandler, delete it.keydownTarget, delete it.currentInstance
            },
            Tn = c => {
                c.isAwaitingPromise() ? (xn(A, c), A.awaitingPromise.set(c, !0)) : (xn(je, c), xn(A, c))
            },
            xn = (c, h) => {
                for (const w in c) c[w].delete(h)
            };
        var Hr = Object.freeze({
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
            showValidationMessage: Yi,
            resetValidationMessage: zo,
            getProgressSteps: Go,
            update: Ho,
            _destroy: Uo
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
                c.disableButtons(), h(Yn.cancel)
            },
            St = (c, h) => {
                const w = A.innerParams.get(c);
                if (!w.input) {
                    m('The "input" parameter is needed to be set when using returnInputValueOn'.concat(a(h)));
                    return
                }
                const V = b(c, w);
                w.inputValidator ? Xi(c, V, h) : c.getInput().checkValidity() ? h === "deny" ? dn(c, V) : Ji(c, V) : (c.enableButtons(), c.showValidationMessage(w.validationMessage))
            },
            Xi = (c, h, w) => {
                const V = A.innerParams.get(c);
                c.disableInput(), Promise.resolve().then(() => J(V.inputValidator(h, V.validationMessage))).then(Ge => {
                    c.enableButtons(), c.enableInput(), Ge ? c.showValidationMessage(Ge) : w === "deny" ? dn(c, h) : Ji(c, h)
                })
            },
            dn = (c, h) => {
                const w = A.innerParams.get(c || void 0);
                w.showLoaderOnDeny && s($t()), w.preDeny ? (A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(w.preDeny(h, w.validationMessage))).then(me => {
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
                const w = A.innerParams.get(c || void 0);
                w.showLoaderOnConfirm && s(), w.preConfirm ? (c.resetValidationMessage(), A.awaitingPromise.set(c || void 0, !0), Promise.resolve().then(() => J(w.preConfirm(h, w.validationMessage))).then(me => {
                    ge(Ke()) || me === !1 ? (c.hideLoading(), gt(c)) : yn(c, typeof me > "u" ? h : me)
                }).catch(me => Ki(c || void 0, me))) : yn(c, h)
            },
            Wo = (c, h, w) => {
                A.innerParams.get(c).toast ? Yo(c, h, w) : (Ur(h), Ls(h), Qi(c, h, w))
            },
            Yo = (c, h, w) => {
                h.popup.onclick = () => {
                    const V = A.innerParams.get(c);
                    V && (Is(V) || V.timer || V.input) || w(Yn.close)
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
            Ls = c => {
                c.container.onmousedown = () => {
                    c.popup.onmouseup = function(h) {
                        c.popup.onmouseup = void 0, (h.target === c.popup || c.popup.contains(h.target)) && (An = !0)
                    }
                }
            },
            Qi = (c, h, w) => {
                h.container.onclick = V => {
                    const me = A.innerParams.get(c);
                    if (An) {
                        An = !1;
                        return
                    }
                    V.target === h.container && L(me.allowOutsideClick) && w(Yn.backdrop)
                }
            },
            Zi = c => typeof c == "object" && c.jquery,
            er = c => c instanceof Element || Zi(c),
            Xo = c => {
                const h = {};
                return typeof c[0] == "object" && !er(c[0]) ? Object.assign(h, c[0]) : ["title", "html", "icon"].forEach((w, V) => {
                    const me = c[V];
                    typeof me == "string" || er(me) ? h[w] = me : me !== void 0 && m("Unexpected type of ".concat(w, '! Expected "string" or "Element", got ').concat(typeof me))
                }), h
            };

        function tr() {
            const c = this;
            for (var h = arguments.length, w = new Array(h), V = 0; V < h; V++) w[V] = arguments[V];
            return new c(...w)
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
            Ds = () => {
                if (it.timeout) return Xe(), it.timeout.stop()
            },
            R = () => {
                if (it.timeout) {
                    const c = it.timeout.start();
                    return Ft(c), c
                }
            },
            F = () => {
                const c = it.timeout;
                return c && (c.running ? Ds() : R())
            },
            Y = c => {
                if (it.timeout) {
                    const h = it.timeout.increase(c);
                    return Ft(h, !0), h
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
                for (const w in ve) {
                    const V = h.getAttribute(w);
                    if (V) {
                        ve[w].fire({
                            template: V
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
            isVisible: Gt,
            clickConfirm: Bt,
            clickDeny: un,
            clickCancel: _t,
            getContainer: H,
            getPopup: we,
            getTitle: he,
            getHtmlContainer: Se,
            getImage: Te,
            getIcon: be,
            getInputLabel: qt,
            getCloseButton: M,
            getActions: g,
            getConfirmButton: dt,
            getDenyButton: $t,
            getCancelButton: l,
            getLoader: E,
            getFooter: _,
            getTimerProgressBar: O,
            getFocusableElements: te,
            getValidationMessage: Ke,
            isLoading: Le,
            fire: tr,
            mixin: qr,
            showLoading: s,
            enableLoading: s,
            getTimerLeft: Wr,
            stopTimer: Ds,
            resumeTimer: R,
            toggleTimer: F,
            increaseTimer: Y,
            isTimerRunning: fe,
            bindClickHandler: Ee
        });
        let ze;
        class He {
            constructor() {
                if (typeof window > "u") return;
                ze = this;
                for (var h = arguments.length, w = new Array(h), V = 0; V < h; V++) w[V] = arguments[V];
                const me = Object.freeze(this.constructor.argsToParams(w));
                Object.defineProperties(this, {
                    params: {
                        value: me,
                        writable: !1,
                        enumerable: !0,
                        configurable: !0
                    }
                });
                const Ge = ze._main(ze.params);
                A.promise.set(this, Ge)
            }
            _main(h) {
                let w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                Pe(Object.assign({}, w, h)), it.currentInstance && (it.currentInstance._destroy(), ke() && Mr()), it.currentInstance = ze;
                const V = ht(h, w);
                bs(V), Object.freeze(V), it.timeout && (it.timeout.stop(), delete it.timeout), clearTimeout(it.restoreFocusTimeout);
                const me = Tt(ze);
                return Dr(ze, V), A.innerParams.set(ze, V), Ye(ze, me, V)
            }
            then(h) {
                return A.promise.get(this).then(h)
            } finally(h) {
                return A.promise.get(this).finally(h)
            }
        }
        const Ye = (c, h, w) => new Promise((V, me) => {
                const Ge = Ut => {
                    c.closePopup({
                        isDismissed: !0,
                        dismiss: Ut
                    })
                };
                je.swalPromiseResolve.set(c, V), je.swalPromiseReject.set(c, me), h.confirmButton.onclick = () => Os(c), h.denyButton.onclick = () => Rs(c), h.cancelButton.onclick = () => qo(c, Ge), h.closeButton.onclick = () => Ge(Yn.close), Wo(c, h, Ge), on(c, it, w, Ge), p(c, w), jr(w), We(it, w, Ge), Ht(h, w), setTimeout(() => {
                    h.container.scrollTop = 0
                })
            }),
            ht = (c, h) => {
                const w = ko(c),
                    V = Object.assign({}, re, h, w, c);
                return V.showClass = Object.assign({}, re.showClass, V.showClass), V.hideClass = Object.assign({}, re.hideClass, V.hideClass), V
            },
            Tt = c => {
                const h = {
                    popup: we(),
                    container: H(),
                    actions: g(),
                    confirmButton: dt(),
                    denyButton: $t(),
                    cancelButton: l(),
                    loader: E(),
                    closeButton: M(),
                    validationMessage: Ke(),
                    progressSteps: $e()
                };
                return A.domCache.set(c, h), h
            },
            We = (c, h, w) => {
                const V = O();
                D(V), h.timer && (c.timeout = new Nr(() => {
                    w("timer"), delete c.timeout
                }, h.timer), h.timerProgressBar && (W(V), ct(V, h, "timerProgressBar"), setTimeout(() => {
                    c.timeout && c.timeout.running && Ft(h.timer)
                })))
            },
            Ht = (c, h) => {
                if (!h.toast) {
                    if (!L(h.allowEnterKey)) return fn();
                    Qt(c, h) || ft(h, -1, 1)
                }
            },
            Qt = (c, h) => h.focusDeny && ge(c.denyButton) ? (c.denyButton.focus(), !0) : h.focusCancel && ge(c.cancelButton) ? (c.cancelButton.focus(), !0) : h.focusConfirm && ge(c.confirmButton) ? (c.confirmButton.focus(), !0) : !1,
            fn = () => {
                document.activeElement instanceof HTMLElement && typeof document.activeElement.blur == "function" && document.activeElement.blur()
            };
        if (typeof window < "u" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/) && Math.random() < .1) {
            const c = document.createElement("div");
            c.className = "leave-russia-now-and-apply-your-skills-to-the-world";
            const h = X([{
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
        Object.assign(He.prototype, Hr), Object.assign(He, Me), Object.keys(Hr).forEach(c => {
            He[c] = function() {
                if (ze) return ze[c](...arguments)
            }
        }), He.DismissReason = Yn, He.version = "11.4.26";
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
})(Xu);
const Rn = Xu.exports;
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
        const n = new URL("main/pp2/fibbage2/assets/8cdd50e7.png", self.location).href,
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
                i = Di().width,
                a = Di().height,
                d = Math.max(i / e, a / n);
            this.width = i, this.height = a, this.finalWidth = e * d, this.finalHeight = n * d, this.offsetX = .5 * (i - this.finalWidth), this.offsetY = .5 * (a - this.finalHeight), this.dy = this.transmitting ? Math.min(-100, this.dy) : 0, this.ddy = this.transmitting ? -1200 : 0, this.transmitting || (this.y = 0), this.advance(t)
        },
        render() {
            if (!this.video) return;
            const t = vo();
            t.save(), t.translate(this.x, this.y), this.preview ? t.drawImage(this.preview, 0, 0) : this.mirror ? (t.scale(-1, 1), t.drawImage(this.video, this.offsetX - Di().width, this.offsetY, this.finalWidth, this.finalHeight)) : t.drawImage(this.video, this.offsetX, this.offsetY, this.finalWidth, this.finalHeight), t.restore(), !this.preview && this.mask && this.image && (t.scale(1, 1), t.drawImage(this.image, this.x, this.y, Di().width, Di().height))
        }
    },
    wC = Et.View.extend({
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
                const d = i.toDataURL().split(",")[1];
                e.push({
                    size: n,
                    picture: d
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
                i = se(".canvasContainer");
            if (!n || !i) return;
            const a = i.width(),
                d = Math.max(se(window).innerHeight(), 250),
                m = Math.min(a / t, d / e),
                S = t * m,
                k = e * m;
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
            this.cameraView = this.cameraView || new wC(t), this.listenTo(this.model, "change", this.update, this), this.update()
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
    _C = Et.View.extend({
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
    SC = Et.CollectionView.extend({
        tagName: "div",
        id: "color-buttons",
        className: "colorPalette",
        childView: _C,
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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64"><image x="12" y="20" width="41" height="39" xlink:href="main/pp2/fibbage2/assets/5f12600b.png"/></svg>\r
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
            this.colorPaletteComponent = this.colorPaletteComponent || new SC({
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
            return typeof a == "string" ? a = i.points.split("|").map(d => ({
                x: parseInt(d.split(",")[0], 10),
                y: parseInt(d.split(",")[1], 10)
            })) : a = a.map(d => ({
                x: parseInt(d.x, 10),
                y: parseInt(d.y, 10)
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
            d = i - this.lastMouse.y;
        a * this.lastMouseChangeVector.x + d * this.lastMouseChangeVector.y < 0 && (this.tipCanvasCTX && this.canvasCTX.drawImage(this.tipCanvasCTX.canvas, 0, 0), this.smoothedMouseX = this.lastMouse.x, this.lastSmoothedMouse.x = this.lastMouse.x, this.smoothedMouseY = this.lastMouse.y, this.lastSmoothedMouse.y = this.lastMouse.y, this.lastRotation += Math.PI, this.lastThickness *= this.options.tipTaperFactor), this.smoothedMouseX += this.options.smoothingFactor * (n - this.smoothedMouseX), this.smoothedMouseY += this.options.smoothingFactor * (i - this.smoothedMouseY);
        const m = this.smoothedMouseX - this.lastSmoothedMouse.x,
            S = this.smoothedMouseY - this.lastSmoothedMouse.y,
            k = Math.sqrt(m * m + S * S);
        let I;
        k !== 0 ? I = Math.PI / 2 + Math.atan2(S, m) : I = 0;
        const L = this.options.minThickness * e + this.options.thicknessFactor * k,
            $ = this.lastThickness + this.options.thicknessSmoothingFactor * (L - this.lastThickness);
        this.lastRotation === void 0 && (this.lastRotation = I);
        const J = this.lastRotation !== null ? Math.sin(this.lastRotation) : Math.sin(I),
            ie = this.lastRotation !== null ? Math.cos(this.lastRotation) : Math.sin(I),
            X = Math.sin(I),
            re = Math.cos(I),
            v = this.lastThickness * J,
            P = this.lastThickness * ie,
            q = $ * X,
            le = $ * re,
            oe = .33 * k * J,
            ye = -.33 * k * ie,
            f = this.lastSmoothedMouse.x + P + oe,
            _e = this.lastSmoothedMouse.y + v + ye,
            Oe = this.lastSmoothedMouse.x - P + oe,
            Pe = this.lastSmoothedMouse.y - v + ye;
        this.canvasCTX.beginPath(), this.canvasCTX.moveTo(this.lastSmoothedMouse.x + P, this.lastSmoothedMouse.y + v), this.canvasCTX.quadraticCurveTo(f, _e, this.smoothedMouseX + le, this.smoothedMouseY + q), this.canvasCTX.lineTo(this.smoothedMouseX - le, this.smoothedMouseY - q), this.canvasCTX.quadraticCurveTo(Oe, Pe, this.lastSmoothedMouse.x - P, this.lastSmoothedMouse.y - v), this.canvasCTX.closePath(), this.canvasCTX.fill(), this.canvasCTX.stroke();
        const lt = this.options.tipTaperFactor * $;
        this.tipCanvasCTX.clearRect(0, 0, this.tipCanvasCTX.canvas.width, this.tipCanvasCTX.canvas.height), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.arc(n, i, lt, 0, 2 * Math.PI, !0), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.tipCanvasCTX.beginPath(), this.tipCanvasCTX.moveTo(this.smoothedMouseX + le, this.smoothedMouseY + q), this.tipCanvasCTX.lineTo(n + this.options.tipTaperFactor * le, i + this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(n - this.options.tipTaperFactor * le, i - this.options.tipTaperFactor * q), this.tipCanvasCTX.lineTo(this.smoothedMouseX - le, this.smoothedMouseY - q), this.tipCanvasCTX.closePath(), this.tipCanvasCTX.fill(), this.tipCanvasCTX.stroke(), this.lastSmoothedMouse = {
            x: this.smoothedMouseX,
            y: this.smoothedMouseY
        }, this.lastRotation = I, this.lastThickness = $, this.lastMouseChangeVector = {
            x: a,
            y: d
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
        st(this, "canvasSelector");
        st(this, "canvas");
        st(this, "ctx");
        st(this, "options");
        st(this, "history");
        st(this, "layerNames", ["backgroundSketch", "highlighterSketch", "highlighterLineSketch", "markerSketch", "markerLineSketch"]);
        this.canvasSelector = e, this.canvas = se(this.canvasSelector)[0], this.ctx = this.canvas.getContext("2d"), this.options = Object.assign(ac, n), this.history = [], this.layerNames.forEach(i => {
            const a = new Ku(this.canvas.width, this.canvas.height, this.options.sketchOptions);
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
            d = this.canvas.height * e;
        i.width = a, i.height = d;
        const m = i.getContext("2d");
        return n && (m.fillStyle = n, m.fillRect(0, 0, a, d)), m.drawImage(this.highlighterSketch.canvas, 0, 0, a, d), m.drawImage(this.markerSketch.canvas, 0, 0, a, d), i.toDataURL()
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
                i = se(n)[0].width / se(n).width(),
                a = n.getBoundingClientRect(),
                d = this.model.get("size"),
                m = this.sketchpad.options.thickness;
            let S = (e.clientX - a.left) * i;
            S = Math.min(d.width - m, Math.max(m, S));
            let k = (e.clientY - a.top) * i;
            return k = Math.min(d.height - m, Math.max(m, k)), {
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
                    return t ? t.html ? t.html : se("<div />").text(t.text).html() : null
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
            this.promptComponent = this.promptComponent || new Vi({}), this.toolbarComponent = this.toolbarComponent || new TC({
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
            const t = se("#sketchpad"),
                e = se("#sketchpad canvas")[0];
            if (!e) return;
            const n = parseInt(se(".controller-content").css("border-top-width"), 10) * 2 + se(".playerTopBar").innerHeight() + se("#prompt").innerHeight() + se("#toolbar").innerHeight() + parseInt(se(".canvasContainer").css("border-top-width"), 10) * 2 + se("#buttons").innerHeight() + se("#post-sketchpad").innerHeight() + 10,
                i = parseInt(parseInt(se(".canvasContainer").css("border-left-width"), 10) * 2 || 0 + parseInt(se(".canvasContainer").css("padding-left"), 10) * 2 || 0 + parseInt(se(".Draw").css("padding-left"), 10) * 2 || 0, 10),
                a = e.width,
                d = e.height,
                m = 2,
                S = Math.min(t.width() - i, a * m),
                k = Math.max(se("#controller-container").innerHeight() - n, 250),
                I = Math.min(S / a, k / d),
                L = a * I,
                $ = d * I;
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
                    return t ? t.html ? t.html : se("<div />").text(t.text).html() : ""
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
        const a = new Ku(t, e, n);
        a.setLines(i), this.model.set("src", a.canvas.toDataURL("image/png"))
    },
    onRender() {
        this.stickit()
    }
});
const BC = Et.View.extend({
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
            this.model.set("username", Mt.safeText(this.client.name), {
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
            this.update().catch(this.caughtError), se(".gallery-link").click(this.artifactClicked.bind(this)), this.client.isRole("broadcaster") && this.showTwitchBroadcasterDialog(20 * 1e3)
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
            Ni.setAsViewed(0)
        },
        showScreen(t, e) {
            const n = se(t);
            return this.activeScreen && t === this.activeScreen || (this.activeScreen && (se(this.activeScreen).fadeOut("fast", () => {}), se(this.activeScreen).show(), se(this.activeScreen).addClass("pt-page-off")), n.hide(), n.removeClass("pt-page-off"), n.removeClass("pt-page-moveToLeft"), n.fadeIn("fast", () => {
                e && e()
            }), this.activeScreen = t, this.onResize()), !1
        },
        notify() {
            Ot.vibrate()
        },
        onRoomWasDestroyed() {
            en.remove("roomCode"), en.remove("reconnect"), Ot.show("error", {
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
            const t = se("#player").outerHeight(!0) || 0,
                e = ni.isVisible ? se("#slide-in-banner").outerHeight(!0) : 0,
                n = se(window).width(),
                i = se(window).height() - t;
            se(`.${this.getOption("appTag")}-page`).css("height", i - e), se(`.${this.getOption("appTag")}-page`).attr("height", i - e), se(`.${this.getOption("appTag")}-page`).css("top", t), se(`.${this.getOption("appTag")}-page`).css("width", n), se(`.${this.getOption("appTag")}-page`).attr("width", n)
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
        <a id="artifactLink" aria-label="Visit the Gallery" class="artifactLink" target="_blank">
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
                        i = this.model.get("history").find(d => n === (d.remoteContentId || d.localContentId)),
                        a = i && i.metadata ? Mt.htmlUnescape(i.metadata.title) : null;
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
            }), Ni.setAsViewed(0)
        },
        async onButtonClick(t) {
            const e = this;
            t.preventDefault();
            const i = se(t.currentTarget).data("action");
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
                            inputValidator: d => d ? d.length > 12 ? "Limit 12 characters" : null : "You need to write something!"
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
                                d = [{
                                    type: "text",
                                    className: "prompt",
                                    html: e.model.get("strings").censor_prompt
                                }, ...e.model.get("censorablePlayers").map(m => ({
                                    action: "censorConfirm",
                                    html: m.name,
                                    key: m.id
                                }))];
                            a.collection.set(d), a.render(), e.listenTo(a, "childview:button:censorConfirm", e.censorPlayer)
                        }
                    });
                    else if (i === "ugc-unload") this.triggerMethod("client:message", {
                clearContentId: !0
            });
            else if (i === "ugc-report") {
                const a = "http://support.jackboxgames.com/",
                    d = this.model.get("formattedActiveContentId");
                window.open(`${a}?episodeID=${d}`, "_blank")
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
                    }), a.collection.add(e.model.get("history").map(d => ({
                        action: "activateContentId",
                        html: d.remoteContentId ? `${d.metadata.title}<br/>${d.formattedRemoteContentId}` : `${d.metadata.title}`,
                        key: d.remoteContentId || d.localContentId
                    })))), a.render(), se(".lobbyUgcInput").mask("aaa-aaaa", {
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
    HC = Et.View.extend({
        className: "Logo",
        template: at.template(zC),
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
                    return !t || !t.html && !t.text ? null : t.html ? t.html : se("<div />").text(t.text).html()
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
            }), Ni.setAsViewed(0)
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
    UC = `<div id="player" class="playerTopBar">
    <div id="playericon" class="playerIcon"></div>
    <div id="playername" class="playerName controller-text"></div>
</div>`,
    qC = Et.View.extend({
        className: "playerTopBarView",
        template: at.template(UC),
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
    YC = si.extend({
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
    XC = Et.View.extend({
        className: "MakeSingleChoice scrollable",
        template: at.template(WC),
        model: new YC,
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
                    return t ? t.html ? t.html : se("<div />").text(t.text).html() : null
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
                    return t ? t.html ? t.html : se("<div />").text(t.text).html() : null
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
                        this.choicesList.children.forEach(d => {
                            d.model.get("selected") && a.push(d.getOption("index"))
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
                const d = this.choicesList.children.find(m => m.model.get("index") === a);
                return d ? d.model.get("html") || d.model.get("text") : ""
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
        e && (i = i.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
        })), n.push.apply(n, i)
    }
    return n
}

function zn(t) {
    for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? lc(Object(n), !0).forEach(function(i) {
            KC(t, i, n[i])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lc(Object(n)).forEach(function(i) {
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
        a, d;
    for (d = 0; d < i.length; d++) a = i[d], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
    return n
}

function QC(t, e) {
    if (t == null) return {};
    var n = JC(t, e),
        i, a;
    if (Object.getOwnPropertySymbols) {
        var d = Object.getOwnPropertySymbols(t);
        for (a = 0; a < d.length; a++) i = d[a], !(e.indexOf(i) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, i) || (n[i] = t[i]))
    }
    return n
}
var ZC = "1.15.0";

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

function bt(t, e, n) {
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
    var a = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return a && new a(n)
}

function eh(t, e, n) {
    if (t) {
        var i = t.getElementsByTagName(e),
            a = 0,
            d = i.length;
        if (n)
            for (; a < d; a++) n(i[a], a);
        return i
    }
    return []
}

function Fn() {
    var t = document.scrollingElement;
    return t || document.documentElement
}

function Kt(t, e, n, i, a) {
    if (!(!t.getBoundingClientRect && t !== window)) {
        var d, m, S, k, I, L, $;
        if (t !== window && t.parentNode && t !== Fn() ? (d = t.getBoundingClientRect(), m = d.top, S = d.left, k = d.bottom, I = d.right, L = d.height, $ = d.width) : (m = 0, S = 0, k = window.innerHeight, I = window.innerWidth, L = window.innerHeight, $ = window.innerWidth), (e || n) && t !== window && (a = a || t.parentNode, !oi))
            do
                if (a && a.getBoundingClientRect && (tt(a, "transform") !== "none" || n && tt(a, "position") !== "static")) {
                    var J = a.getBoundingClientRect();
                    m -= J.top + parseInt(tt(a, "border-top-width")), S -= J.left + parseInt(tt(a, "border-left-width")), k = m + d.height, I = S + d.width;
                    break
                } while (a = a.parentNode);
        if (i && t !== window) {
            var ie = pr(a || t),
                X = ie && ie.a,
                re = ie && ie.d;
            ie && (m /= re, S /= X, $ /= X, L /= re, k = m + L, I = S + $)
        }
        return {
            top: m,
            left: S,
            bottom: k,
            right: I,
            width: $,
            height: L
        }
    }
}

function hc(t, e, n) {
    for (var i = di(t, !0), a = Kt(t)[e]; i;) {
        var d = Kt(i)[n],
            m = void 0;
        if (n === "top" || n === "left" ? m = a >= d : m = a <= d, !m) return i;
        if (i === Fn()) break;
        i = di(i, !1)
    }
    return !1
}

function yr(t, e, n, i) {
    for (var a = 0, d = 0, m = t.children; d < m.length;) {
        if (m[d].style.display !== "none" && m[d] !== Qe.ghost && (i || m[d] !== Qe.dragged) && $n(m[d], n.draggable, t, !1)) {
            if (a === e) return m[d];
            a++
        }
        d++
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
            var a = pr(t),
                d = a.a,
                m = a.d;
            e += t.scrollLeft * d, n += t.scrollTop * m
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

function ix() {
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
                            rect: Kt(a)
                        });
                        var d = zn({}, t[t.length - 1].rect);
                        if (a.thisAnimationDuration) {
                            var m = pr(a, !0);
                            m && (d.top -= m.f, d.left -= m.e)
                        }
                        a.fromRect = d
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
            var d = !1,
                m = 0;
            t.forEach(function(S) {
                var k = 0,
                    I = S.target,
                    L = I.fromRect,
                    $ = Kt(I),
                    J = I.prevFromRect,
                    ie = I.prevToRect,
                    X = S.rect,
                    re = pr(I, !0);
                re && ($.top -= re.f, $.left -= re.e), I.toRect = $, I.thisAnimationDuration && ha(J, $) && !ha(L, $) && (X.top - $.top) / (X.left - $.left) === (L.top - $.top) / (L.left - $.left) && (k = ox(X, J, ie, a.options)), ha($, L) || (I.prevFromRect = L, I.prevToRect = $, k || (k = a.options.animation), a.animate(I, X, $, k)), k && (d = !0, m = Math.max(m, k), clearTimeout(I.animationResetTimer), I.animationResetTimer = setTimeout(function() {
                    I.animationTime = 0, I.prevFromRect = null, I.fromRect = null, I.prevToRect = null, I.thisAnimationDuration = null
                }, k), I.thisAnimationDuration = k)
            }), clearTimeout(e), d ? e = setTimeout(function() {
                typeof i == "function" && i()
            }, m) : typeof i == "function" && i(), t = []
        },
        animate: function(i, a, d, m) {
            if (m) {
                tt(i, "transition", ""), tt(i, "transform", "");
                var S = pr(this.el),
                    k = S && S.a,
                    I = S && S.d,
                    L = (a.left - d.left) / (k || 1),
                    $ = (a.top - d.top) / (I || 1);
                i.animatingX = !!L, i.animatingY = !!$, tt(i, "transform", "translate3d(" + L + "px," + $ + "px,0)"), this.forRepaintDummy = sx(i), tt(i, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), tt(i, "transform", "translate3d(0,0,0)"), typeof i.animated == "number" && clearTimeout(i.animated), i.animated = setTimeout(function() {
                    tt(i, "transition", ""), tt(i, "transform", ""), i.animated = !1, i.animatingX = !1, i.animatingY = !1
                }, m)
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
            var d = e + "Global";
            rr.forEach(function(m) {
                !n[m.pluginName] || (n[m.pluginName][d] && n[m.pluginName][d](zn({
                    sortable: n
                }, i)), n.options[m.pluginName] && n[m.pluginName][e] && n[m.pluginName][e](zn({
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
            for (var d in e.options)
                if (!!e.options.hasOwnProperty(d)) {
                    var m = this.modifyOption(e, d, e.options[d]);
                    typeof m < "u" && (e.options[d] = m)
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
            return rr.forEach(function(d) {
                !e[d.pluginName] || d.optionListeners && typeof d.optionListeners[n] == "function" && (a = d.optionListeners[n].call(e[d.pluginName], i))
            }), a
        }
    };

function ax(t) {
    var e = t.sortable,
        n = t.rootEl,
        i = t.name,
        a = t.targetEl,
        d = t.cloneEl,
        m = t.toEl,
        S = t.fromEl,
        k = t.oldIndex,
        I = t.newIndex,
        L = t.oldDraggableIndex,
        $ = t.newDraggableIndex,
        J = t.originalEvent,
        ie = t.putSortable,
        X = t.extraEventProperties;
    if (e = e || n && n[Sn], !!e) {
        var re, v = e.options,
            P = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        window.CustomEvent && !oi && !fs ? re = new CustomEvent(i, {
            bubbles: !0,
            cancelable: !0
        }) : (re = document.createEvent("Event"), re.initEvent(i, !0, !0)), re.to = m || n, re.from = S || n, re.item = a || n, re.clone = d, re.oldIndex = k, re.newIndex = I, re.oldDraggableIndex = L, re.newDraggableIndex = $, re.originalEvent = J, re.pullMode = ie ? ie.lastPutMode : void 0;
        var q = zn(zn({}, X), ps.getEventProperties(i, e));
        for (var le in q) re[le] = q[le];
        n && n.dispatchEvent(re), v[P] && v[P].call(e, re)
    }
}
var lx = ["evt"],
    bn = function(e, n) {
        var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            a = i.evt,
            d = QC(i, lx);
        ps.pluginEvent.bind(Qe)(e, n, zn({
            dragEl: Ie,
            parentEl: jt,
            ghostEl: ut,
            rootEl: Nt,
            nextEl: Ii,
            lastDownEl: qs,
            cloneEl: Vt,
            cloneHidden: ui,
            dragStarted: Qr,
            putSortable: tn,
            activeSortable: Qe.active,
            originalEvent: a,
            oldIndex: cr,
            oldDraggableIndex: as,
            newIndex: _n,
            newDraggableIndex: ci,
            hideGhostForTarget: ah,
            unhideGhostForTarget: lh,
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
        }, d))
    };

function gn(t) {
    ax(zn({
        putSortable: tn,
        cloneEl: Vt,
        targetEl: Ie,
        rootEl: Nt,
        oldIndex: cr,
        oldDraggableIndex: as,
        newIndex: _n,
        newDraggableIndex: ci
    }, t))
}
var Ie, jt, ut, Nt, Ii, qs, Vt, ui, cr, _n, as, ci, $s, tn, lr = !1,
    io = !1,
    ro = [],
    Ai, Mn, fa, pa, fc, pc, Qr, sr, ls, cs = !1,
    js = !1,
    Ws, ln, ga = [],
    La = !1,
    so = [],
    bo = typeof document < "u",
    Fs = Ju,
    gc = fs || oi ? "cssFloat" : "float",
    cx = bo && !Qu && !Ju && "draggable" in document.createElement("div"),
    rh = function() {
        if (!!bo) {
            if (oi) return !1;
            var t = document.createElement("x");
            return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto"
        }
    }(),
    sh = function(e, n) {
        var i = tt(e),
            a = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
            d = yr(e, 0, n),
            m = yr(e, 1, n),
            S = d && tt(d),
            k = m && tt(m),
            I = S && parseInt(S.marginLeft) + parseInt(S.marginRight) + Kt(d).width,
            L = k && parseInt(k.marginLeft) + parseInt(k.marginRight) + Kt(m).width;
        if (i.display === "flex") return i.flexDirection === "column" || i.flexDirection === "column-reverse" ? "vertical" : "horizontal";
        if (i.display === "grid") return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
        if (d && S.float && S.float !== "none") {
            var $ = S.float === "left" ? "left" : "right";
            return m && (k.clear === "both" || k.clear === $) ? "vertical" : "horizontal"
        }
        return d && (S.display === "block" || S.display === "flex" || S.display === "table" || S.display === "grid" || I >= a && i[gc] === "none" || m && i[gc] === "none" && I + L > a) ? "vertical" : "horizontal"
    },
    ux = function(e, n, i) {
        var a = i ? e.left : e.top,
            d = i ? e.right : e.bottom,
            m = i ? e.width : e.height,
            S = i ? n.left : n.top,
            k = i ? n.right : n.bottom,
            I = i ? n.width : n.height;
        return a === S || d === k || a + m / 2 === S + I / 2
    },
    hx = function(e, n) {
        var i;
        return ro.some(function(a) {
            var d = a[Sn].options.emptyInsertThreshold;
            if (!(!d || ul(a))) {
                var m = Kt(a),
                    S = e >= m.left - d && e <= m.right + d,
                    k = n >= m.top - d && n <= m.bottom + d;
                if (S && k) return i = a
            }
        }), i
    },
    oh = function(e) {
        function n(d, m) {
            return function(S, k, I, L) {
                var $ = S.options.group.name && k.options.group.name && S.options.group.name === k.options.group.name;
                if (d == null && (m || $)) return !0;
                if (d == null || d === !1) return !1;
                if (m && d === "clone") return d;
                if (typeof d == "function") return n(d(S, k, I, L), m)(S, k, I, L);
                var J = (m ? S : k).options.group.name;
                return d === !0 || typeof d == "string" && d === J || d.join && d.indexOf(J) > -1
            }
        }
        var i = {},
            a = e.group;
        (!a || Us(a) != "object") && (a = {
            name: a
        }), i.name = a.name, i.checkPull = n(a.pull, !0), i.checkPut = n(a.put), i.revertClone = a.revertClone, e.group = i
    },
    ah = function() {
        !rh && ut && tt(ut, "display", "none")
    },
    lh = function() {
        !rh && ut && tt(ut, "display", "")
    };
bo && !Qu && document.addEventListener("click", function(t) {
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
        setData: function(m, S) {
            m.setData("Text", S.textContent)
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
                d = a.preventOnFilter,
                m = e.type,
                S = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e,
                k = (S || e).target,
                I = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || k,
                L = a.filter;
            if (wx(i), !Ie && !(/mousedown|pointerdown/.test(m) && e.button !== 0 || a.disabled) && !I.isContentEditable && !(!this.nativeDraggable && ss && k && k.tagName.toUpperCase() === "SELECT") && (k = $n(k, a.draggable, i, !1), !(k && k.animated) && qs !== k)) {
                if (cr = On(k), as = On(k, a.draggable), typeof L == "function") {
                    if (L.call(this, e, k, this)) {
                        gn({
                            sortable: n,
                            rootEl: I,
                            name: "filter",
                            targetEl: k,
                            toEl: i,
                            fromEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), d && e.cancelable && e.preventDefault();
                        return
                    }
                } else if (L && (L = L.split(",").some(function($) {
                        if ($ = $n(I, $.trim(), i, !1), $) return gn({
                            sortable: n,
                            rootEl: $,
                            name: "filter",
                            targetEl: k,
                            fromEl: i,
                            toEl: i
                        }), bn("filter", n, {
                            evt: e
                        }), !0
                    }), L)) {
                    d && e.cancelable && e.preventDefault();
                    return
                }
                a.handle && !$n(I, a.handle, i, !1) || this._prepareDragStart(e, S, k)
            }
        }
    },
    _prepareDragStart: function(e, n, i) {
        var a = this,
            d = a.el,
            m = a.options,
            S = d.ownerDocument,
            k;
        if (i && !Ie && i.parentNode === d) {
            var I = Kt(i);
            if (Nt = d, Ie = i, jt = Ie.parentNode, Ii = Ie.nextSibling, qs = i, $s = m.group, Qe.dragged = Ie, Ai = {
                    target: Ie,
                    clientX: (n || e).clientX,
                    clientY: (n || e).clientY
                }, fc = Ai.clientX - I.left, pc = Ai.clientY - I.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Ie.style["will-change"] = "all", k = function() {
                    if (bn("delayEnded", a, {
                            evt: e
                        }), Qe.eventCanceled) {
                        a._onDrop();
                        return
                    }
                    a._disableDelayedDragEvents(), !cc && a.nativeDraggable && (Ie.draggable = !0), a._triggerDragStart(e, n), gn({
                        sortable: a,
                        name: "choose",
                        originalEvent: e
                    }), En(Ie, m.chosenClass, !0)
                }, m.ignore.split(",").forEach(function(L) {
                    eh(Ie, L.trim(), ma)
                }), xt(S, "dragover", Oi), xt(S, "mousemove", Oi), xt(S, "touchmove", Oi), xt(S, "mouseup", a._onDrop), xt(S, "touchend", a._onDrop), xt(S, "touchcancel", a._onDrop), cc && this.nativeDraggable && (this.options.touchStartThreshold = 4, Ie.draggable = !0), bn("delayStart", this, {
                    evt: e
                }), m.delay && (!m.delayOnTouchOnly || n) && (!this.nativeDraggable || !(fs || oi))) {
                if (Qe.eventCanceled) {
                    this._onDrop();
                    return
                }
                xt(S, "mouseup", a._disableDelayedDrag), xt(S, "touchend", a._disableDelayedDrag), xt(S, "touchcancel", a._disableDelayedDrag), xt(S, "mousemove", a._delayedDragTouchMoveHandler), xt(S, "touchmove", a._delayedDragTouchMoveHandler), m.supportPointer && xt(S, "pointermove", a._delayedDragTouchMoveHandler), a._dragStartTimer = setTimeout(k, m.delay)
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
        bt(e, "mouseup", this._disableDelayedDrag), bt(e, "touchend", this._disableDelayedDrag), bt(e, "touchcancel", this._disableDelayedDrag), bt(e, "mousemove", this._delayedDragTouchMoveHandler), bt(e, "touchmove", this._delayedDragTouchMoveHandler), bt(e, "pointermove", this._delayedDragTouchMoveHandler)
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
            bn("dragStarted", this, {
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
            this._lastX = Mn.clientX, this._lastY = Mn.clientY, ah();
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
            lh()
        }
    },
    _onTouchMove: function(e) {
        if (Ai) {
            var n = this.options,
                i = n.fallbackTolerance,
                a = n.fallbackOffset,
                d = e.touches ? e.touches[0] : e,
                m = ut && pr(ut, !0),
                S = ut && m && m.a,
                k = ut && m && m.d,
                I = Fs && ln && dc(ln),
                L = (d.clientX - Ai.clientX + a.x) / (S || 1) + (I ? I[0] - ga[0] : 0) / (S || 1),
                $ = (d.clientY - Ai.clientY + a.y) / (k || 1) + (I ? I[1] - ga[1] : 0) / (k || 1);
            if (!Qe.active && !lr) {
                if (i && Math.max(Math.abs(d.clientX - this._lastX), Math.abs(d.clientY - this._lastY)) < i) return;
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
                var J = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
                tt(ut, "webkitTransform", J), tt(ut, "mozTransform", J), tt(ut, "msTransform", J), tt(ut, "transform", J), fa = L, pa = $, Mn = d
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
            a = e.dataTransfer,
            d = i.options;
        if (bn("dragStart", this, {
                evt: e
            }), Qe.eventCanceled) {
            this._onDrop();
            return
        }
        bn("setupClone", this), Qe.eventCanceled || (Vt = ih(Ie), Vt.removeAttribute("id"), Vt.draggable = !1, Vt.style["will-change"] = "", this._hideClone(), En(Vt, this.options.chosenClass, !1), Qe.clone = Vt), i.cloneId = Ys(function() {
            bn("clone", i), !Qe.eventCanceled && (i.options.removeCloneOnHide || Nt.insertBefore(Vt, Ie), i._hideClone(), gn({
                sortable: i,
                name: "clone"
            }))
        }), !n && En(Ie, d.dragClass, !0), n ? (io = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (bt(document, "mouseup", i._onDrop), bt(document, "touchend", i._onDrop), bt(document, "touchcancel", i._onDrop), a && (a.effectAllowed = "move", d.setData && d.setData.call(i, a, Ie)), xt(document, "drop", i), tt(Ie, "transform", "translateZ(0)")), lr = !0, i._dragStartId = Ys(i._dragStarted.bind(i, n, e)), xt(document, "selectstart", i), Qr = !0, ss && tt(document.body, "user-select", "none")
    },
    _onDragOver: function(e) {
        var n = this.el,
            i = e.target,
            a, d, m, S = this.options,
            k = S.group,
            I = Qe.active,
            L = $s === k,
            $ = S.sort,
            J = tn || I,
            ie, X = this,
            re = !1;
        if (La) return;

        function v(be, he) {
            bn(be, X, zn({
                evt: e,
                isOwner: L,
                axis: ie ? "vertical" : "horizontal",
                revert: m,
                dragRect: a,
                targetRect: d,
                canSort: $,
                fromSortable: J,
                target: i,
                completed: q,
                onMove: function(Te, $e) {
                    return zs(Nt, n, Ie, a, Te, Kt(Te), e, $e)
                },
                changed: le
            }, he))
        }

        function P() {
            v("dragOverAnimationCapture"), X.captureAnimationState(), X !== J && J.captureAnimationState()
        }

        function q(be) {
            return v("dragOverCompleted", {
                insertion: be
            }), be && (L ? I._hideClone() : I._showClone(X), X !== J && (En(Ie, tn ? tn.options.ghostClass : I.options.ghostClass, !1), En(Ie, S.ghostClass, !0)), tn !== X && X !== Qe.active ? tn = X : X === Qe.active && tn && (tn = null), J === X && (X._ignoreWhileAnimating = i), X.animateAll(function() {
                v("dragOverAnimationComplete"), X._ignoreWhileAnimating = null
            }), X !== J && (J.animateAll(), J._ignoreWhileAnimating = null)), (i === Ie && !Ie.animated || i === n && !i.animated) && (sr = null), !S.dragoverBubble && !e.rootEl && i !== document && (Ie.parentNode[Sn]._isOutsideThisEl(e.target), !be && Oi(e)), !S.dragoverBubble && e.stopPropagation && e.stopPropagation(), re = !0
        }

        function le() {
            _n = On(Ie), ci = On(Ie, S.draggable), gn({
                sortable: X,
                name: "change",
                toEl: n,
                newIndex: _n,
                newDraggableIndex: ci,
                originalEvent: e
            })
        }
        if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), i = $n(i, S.draggable, n, !0), v("dragOver"), Qe.eventCanceled) return re;
        if (Ie.contains(e.target) || i.animated && i.animatingX && i.animatingY || X._ignoreWhileAnimating === i) return q(!1);
        if (io = !1, I && !S.disabled && (L ? $ || (m = jt !== Nt) : tn === this || (this.lastPutMode = $s.checkPull(this, I, Ie, e)) && k.checkPut(this, I, Ie, e))) {
            if (ie = this._getDirection(e, i) === "vertical", a = Kt(Ie), v("dragOverValid"), Qe.eventCanceled) return re;
            if (m) return jt = Nt, P(), this._hideClone(), v("revert"), Qe.eventCanceled || (Ii ? Nt.insertBefore(Ie, Ii) : Nt.appendChild(Ie)), q(!0);
            var oe = ul(n, S.draggable);
            if (!oe || mx(e, ie, this) && !oe.animated) {
                if (oe === Ie) return q(!1);
                if (oe && n === e.target && (i = oe), i && (d = Kt(i)), zs(Nt, n, Ie, a, i, d, e, !!i) !== !1) return P(), oe && oe.nextSibling ? n.insertBefore(Ie, oe.nextSibling) : n.appendChild(Ie), jt = n, le(), q(!0)
            } else if (oe && gx(e, ie, this)) {
                var ye = yr(n, 0, S, !0);
                if (ye === Ie) return q(!1);
                if (i = ye, d = Kt(i), zs(Nt, n, Ie, a, i, d, e, !1) !== !1) return P(), n.insertBefore(Ie, ye), jt = n, le(), q(!0)
            } else if (i.parentNode === n) {
                d = Kt(i);
                var f = 0,
                    _e, Oe = Ie.parentNode !== n,
                    Pe = !ux(Ie.animated && Ie.toRect || a, i.animated && i.toRect || d, ie),
                    lt = ie ? "top" : "left",
                    Ve = hc(i, "top", "top") || hc(Ie, "top", "top"),
                    K = Ve ? Ve.scrollTop : void 0;
                sr !== i && (_e = d[lt], cs = !1, js = !Pe && S.invertSwap || Oe), f = vx(e, i, d, ie, Pe ? 1 : S.swapThreshold, S.invertedSwapThreshold == null ? S.swapThreshold : S.invertedSwapThreshold, js, sr === i);
                var Fe;
                if (f !== 0) {
                    var H = On(Ie);
                    do H -= f, Fe = jt.children[H]; while (Fe && (tt(Fe, "display") === "none" || Fe === ut))
                }
                if (f === 0 || Fe === i) return q(!1);
                sr = i, ls = f;
                var ae = i.nextElementSibling,
                    Ae = !1;
                Ae = f === 1;
                var we = zs(Nt, n, Ie, a, i, d, e, Ae);
                if (we !== !1) return (we === 1 || we === -1) && (Ae = we === 1), La = !0, setTimeout(px, 30), P(), Ae && !ae ? n.appendChild(Ie) : i.parentNode.insertBefore(Ie, Ae ? ae : i), Ve && nh(Ve, 0, K - Ve.scrollTop), jt = Ie.parentNode, _e !== void 0 && !js && (Ws = Math.abs(_e - Kt(i)[lt])), le(), q(!0)
            }
            if (n.contains(Ie)) return q(!1)
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
            }), jt = Ie && Ie.parentNode, _n = On(Ie), ci = On(Ie, i.draggable), Qe.eventCanceled) {
            this._nulling();
            return
        }
        lr = !1, js = !1, cs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Da(this.cloneId), Da(this._dragStartId), this.nativeDraggable && (bt(document, "drop", this), bt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ss && tt(document.body, "user-select", ""), tt(Ie, "transform", ""), e && (Qr && (e.cancelable && e.preventDefault(), !i.dropBubble && e.stopPropagation()), ut && ut.parentNode && ut.parentNode.removeChild(ut), (Nt === jt || tn && tn.lastPutMode !== "clone") && Vt && Vt.parentNode && Vt.parentNode.removeChild(Vt), Ie && (this.nativeDraggable && bt(Ie, "dragend", this), ma(Ie), Ie.style["will-change"] = "", Qr && !lr && En(Ie, tn ? tn.options.ghostClass : this.options.ghostClass, !1), En(Ie, this.options.chosenClass, !1), gn({
            sortable: this,
            name: "unchoose",
            toEl: jt,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: e
        }), Nt !== jt ? (_n >= 0 && (gn({
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
        })), tn && tn.save()) : _n !== cr && _n >= 0 && (gn({
            sortable: this,
            name: "update",
            toEl: jt,
            originalEvent: e
        }), gn({
            sortable: this,
            name: "sort",
            toEl: jt,
            originalEvent: e
        })), Qe.active && ((_n == null || _n === -1) && (_n = cr, ci = as), gn({
            sortable: this,
            name: "end",
            toEl: jt,
            originalEvent: e
        }), this.save()))), this._nulling()
    },
    _nulling: function() {
        bn("nulling", this), Nt = Ie = jt = ut = Ii = Vt = qs = ui = Ai = Mn = Qr = _n = ci = cr = as = sr = ls = tn = $s = Qe.dragged = Qe.ghost = Qe.clone = Qe.active = null, so.forEach(function(e) {
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
        for (var e = [], n, i = this.el.children, a = 0, d = i.length, m = this.options; a < d; a++) n = i[a], $n(n, m.draggable, this.el, !1) && e.push(n.getAttribute(m.dataIdAttr) || bx(n));
        return e
    },
    sort: function(e, n) {
        var i = {},
            a = this.el;
        this.toArray().forEach(function(d, m) {
            var S = a.children[m];
            $n(S, this.options.draggable, a, !1) && (i[d] = S)
        }, this), n && this.captureAnimationState(), e.forEach(function(d) {
            i[d] && (a.removeChild(i[d]), a.appendChild(i[d]))
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
        typeof a < "u" ? i[e] = a : i[e] = n, e === "group" && oh(i)
    },
    destroy: function() {
        bn("destroy", this);
        var e = this.el;
        e[Sn] = null, bt(e, "mousedown", this._onTapStart), bt(e, "touchstart", this._onTapStart), bt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (bt(e, "dragover", this), bt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
            n.removeAttribute("draggable")
        }), this._onDrop(), this._disableDelayedDragEvents(), ro.splice(ro.indexOf(this.el), 1), this.el = e = null
    },
    _hideClone: function() {
        if (!ui) {
            if (bn("hideClone", this), Qe.eventCanceled) return;
            tt(Vt, "display", "none"), this.options.removeCloneOnHide && Vt.parentNode && Vt.parentNode.removeChild(Vt), ui = !0
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode !== "clone") {
            this._hideClone();
            return
        }
        if (ui) {
            if (bn("showClone", this), Qe.eventCanceled) return;
            Ie.parentNode == Nt && !this.options.group.revertClone ? Nt.insertBefore(Vt, Ie) : Ii ? Nt.insertBefore(Vt, Ii) : Nt.appendChild(Vt), this.options.group.revertClone && this.animate(Ie, Vt), tt(Vt, "display", ""), ui = !1
        }
    }
};

function fx(t) {
    t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault()
}

function zs(t, e, n, i, a, d, m, S) {
    var k, I = t[Sn],
        L = I.options.onMove,
        $;
    return window.CustomEvent && !oi && !fs ? k = new CustomEvent("move", {
        bubbles: !0,
        cancelable: !0
    }) : (k = document.createEvent("Event"), k.initEvent("move", !0, !0)), k.to = e, k.from = t, k.dragged = n, k.draggedRect = i, k.related = a || e, k.relatedRect = d || Kt(e), k.willInsertAfter = S, k.originalEvent = m, t.dispatchEvent(k), L && ($ = L.call(I, k, m)), $
}

function ma(t) {
    t.draggable = !1
}

function px() {
    La = !1
}

function gx(t, e, n) {
    var i = Kt(yr(n.el, 0, n.options, !0)),
        a = 10;
    return e ? t.clientX < i.left - a || t.clientY < i.top && t.clientX < i.right : t.clientY < i.top - a || t.clientY < i.bottom && t.clientX < i.left
}

function mx(t, e, n) {
    var i = Kt(ul(n.el, n.options.draggable)),
        a = 10;
    return e ? t.clientX > i.right + a || t.clientX <= i.right && t.clientY > i.bottom && t.clientX >= i.left : t.clientX > i.right && t.clientY > i.top || t.clientX <= i.right && t.clientY > i.bottom + a
}

function vx(t, e, n, i, a, d, m, S) {
    var k = i ? t.clientY : t.clientX,
        I = i ? n.height : n.width,
        L = i ? n.top : n.left,
        $ = i ? n.bottom : n.right,
        J = !1;
    if (!m) {
        if (S && Ws < I * a) {
            if (!cs && (ls === 1 ? k > L + I * d / 2 : k < $ - I * d / 2) && (cs = !0), cs) J = !0;
            else if (ls === 1 ? k < L + Ws : k > $ - Ws) return -ls
        } else if (k > L + I * (1 - a) / 2 && k < $ - I * (1 - a) / 2) return yx(e)
    }
    return J = J || m, J && (k < L + I * d / 2 || k > $ - I * d / 2) ? k > L + I / 2 ? 1 : -1 : 0
}

function yx(t) {
    return On(Ie) < On(t) ? 1 : -1
}

function bx(t) {
    for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, i = 0; n--;) i += e.charCodeAt(n);
    return i.toString(36)
}

function wx(t) {
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
bo && xt(document, "touchmove", function(t) {
    (Qe.active || lr) && t.cancelable && t.preventDefault()
});
Qe.utils = {
    on: xt,
    off: bt,
    css: tt,
    find: eh,
    is: function(e, n) {
        return !!$n(e, n, e, !1)
    },
    extend: nx,
    throttle: th,
    closest: $n,
    toggleClass: En,
    clone: ih,
    index: On,
    nextTick: Ys,
    cancelNextTick: Da,
    detectDirection: sh,
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
var Wt = [],
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
            this.sortable.nativeDraggable ? bt(document, "dragover", this._handleAutoScroll) : (bt(document, "pointermove", this._handleFallbackAutoScroll), bt(document, "touchmove", this._handleFallbackAutoScroll), bt(document, "mousemove", this._handleFallbackAutoScroll)), mc(), Xs(), ix()
        },
        nulling: function() {
            oo = Ma = Zr = Pa = es = va = ya = null, Wt.length = 0
        },
        _handleFallbackAutoScroll: function(n) {
            this._handleAutoScroll(n, !0)
        },
        _handleAutoScroll: function(n, i) {
            var a = this,
                d = (n.touches ? n.touches[0] : n).clientX,
                m = (n.touches ? n.touches[0] : n).clientY,
                S = document.elementFromPoint(d, m);
            if (oo = n, i || this.options.forceAutoScrollFallback || fs || oi || ss) {
                ba(n, this.options, S, i);
                var k = di(S, !0);
                Pa && (!es || d !== va || m !== ya) && (es && mc(), es = setInterval(function() {
                    var I = di(document.elementFromPoint(d, m), !0);
                    I !== k && (k = I, Xs()), ba(n, a.options, I, i)
                }, 10), va = d, ya = m)
            } else {
                if (!this.options.bubbleScroll || di(S, !0) === Fn()) {
                    Xs();
                    return
                }
                ba(n, this.options, di(S, !1), !1)
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
var ba = th(function(t, e, n, i) {
        if (!!e.scroll) {
            var a = (t.touches ? t.touches[0] : t).clientX,
                d = (t.touches ? t.touches[0] : t).clientY,
                m = e.scrollSensitivity,
                S = e.scrollSpeed,
                k = Fn(),
                I = !1,
                L;
            Ma !== n && (Ma = n, Xs(), Zr = e.scroll, L = e.scrollFn, Zr === !0 && (Zr = di(n, !0)));
            var $ = 0,
                J = Zr;
            do {
                var ie = J,
                    X = Kt(ie),
                    re = X.top,
                    v = X.bottom,
                    P = X.left,
                    q = X.right,
                    le = X.width,
                    oe = X.height,
                    ye = void 0,
                    f = void 0,
                    _e = ie.scrollWidth,
                    Oe = ie.scrollHeight,
                    Pe = tt(ie),
                    lt = ie.scrollLeft,
                    Ve = ie.scrollTop;
                ie === k ? (ye = le < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll" || Pe.overflowX === "visible"), f = oe < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll" || Pe.overflowY === "visible")) : (ye = le < _e && (Pe.overflowX === "auto" || Pe.overflowX === "scroll"), f = oe < Oe && (Pe.overflowY === "auto" || Pe.overflowY === "scroll"));
                var K = ye && (Math.abs(q - a) <= m && lt + le < _e) - (Math.abs(P - a) <= m && !!lt),
                    Fe = f && (Math.abs(v - d) <= m && Ve + oe < Oe) - (Math.abs(re - d) <= m && !!Ve);
                if (!Wt[$])
                    for (var H = 0; H <= $; H++) Wt[H] || (Wt[H] = {});
                (Wt[$].vx != K || Wt[$].vy != Fe || Wt[$].el !== ie) && (Wt[$].el = ie, Wt[$].vx = K, Wt[$].vy = Fe, clearInterval(Wt[$].pid), (K != 0 || Fe != 0) && (I = !0, Wt[$].pid = setInterval(function() {
                    i && this.layer === 0 && Qe.active._onTouchMove(oo);
                    var ae = Wt[this.layer].vy ? Wt[this.layer].vy * S : 0,
                        Ae = Wt[this.layer].vx ? Wt[this.layer].vx * S : 0;
                    typeof L == "function" && L.call(Qe.dragged.parentNode[Sn], Ae, ae, t, oo, Wt[this.layer].el) !== "continue" || nh(Wt[this.layer].el, Ae, ae)
                }.bind({
                    layer: $
                }), 24))), $++
            } while (e.bubbleScroll && J !== k && (J = di(J, !1)));
            Pa = I
        }
    }, 30),
    ch = function(e) {
        var n = e.originalEvent,
            i = e.putSortable,
            a = e.dragEl,
            d = e.activeSortable,
            m = e.dispatchSortableEvent,
            S = e.hideGhostForTarget,
            k = e.unhideGhostForTarget;
        if (!!n) {
            var I = i || d;
            S();
            var L = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n,
                $ = document.elementFromPoint(L.clientX, L.clientY);
            k(), I && !I.el.contains($) && (m("spill"), this.onSpill({
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
            a = i || this.sortable;
        a.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), a.animateAll()
    },
    drop: ch
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
    Sx = Et.View.extend({
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
                    let d = `${t}/${e}`;
                    return a < t && (d += ` (${t-a} ${i})`), d
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
                const i = Mt.htmlUnescape(n.metadata.title);
                let a = Mt.safeText(i);
                return a += n.remoteContentId !== null ? `<br><div class='episodeId'>${n.formattedRemoteContentId}</div>` : "", {
                    key: n.remoteContentId || n.localContentId,
                    html: a
                }
            });
            this.episodesList.collection.set(e), this.inputComponent.model.set("maxLength", this.model.get("maxContentLength")), this.inputComponent.model.set("inlineSubmitText", this.model.get("strings").button_add), this.titleInputComponent.model.set("maxLength", this.model.get("maxTitleLength")), this.titleInputComponent.model.set("inlineSubmitText", this.model.get("strings").create_new_button), this.promptsList.collection.set(this.model.get("prompts").map(n => {
                const i = at.extend({}, n);
                i.text = Mt.htmlUnescape(n.text);
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
            const e = se(t.currentTarget).data("action");
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
                            d = 207 * (1 - n);
                        return e += `stroke-dasharray:${a} ${d};`, e += `transform:rotate(${-360*n-90}deg);`, e
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
                const d = 32 / a;
                n.x *= d, n.y *= d
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
    Dx = si.extend({
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
        model: new Dx,
        template: at.template(Lx),
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
                d = Math.floor(a / 10);
            this.triggerMethod("client:message", {
                action: "fire",
                type: "fire",
                weapon: i,
                vector: t
            }), this.model.get("isAudience") && (this.audienceShot = d * 10, this.shotId = this.model.get("shotId") || 0, this.model.setUpdate({
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
            }), this.throttledUpdate = at.throttle(this.updateVector, this.model.get("throttle")), this.listenTo(this.model, "change", this.update, this), this.onResizeWithContext = this.onResize.bind(this), window.addEventListener("resize", this.onResizeWithContext), se(window).on("mousemove", this.move.bind(this)), se(window).on("mouseup", this.end.bind(this))
        },
        onBeforeDestroy() {
            window.removeEventListener("resize", this.onResizeWithContext), se(window).off("mousemove"), se(window).off("mouseup")
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
            const t = se(".radial"),
                e = se("#status-bar").outerHeight() + se(".playerTopBar").outerHeight() + se("#control-panel").outerHeight() + 10,
                n = se(".controller-page").width(),
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
                return this.setLayout(DC);
            case "EnterSingleText":
                return this.setLayout(NC);
            case "Lobby":
                return this.setLayout(FC);
            case "Logo":
                return this.setLayout(HC);
            case "MakeSingleChoice":
                return this.setLayout(XC);
            case "Shoot":
                return this.setLayout(Mx);
            case "Sortable":
                return this.setLayout(kx);
            case "Camera":
                return this.setLayout(xC);
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
        } : i = e || {}, i.isPlayer = this.client.isRole("player"), i.isAudience = this.client.isRole("audience"), i = this.parseBlob(i), !i.state && i.isAudience && (i.state = "Logo"), i.platformId && en.set(`platform-${i.platformId}`), i.locale && typeof i.locale == "string" && (this.locale = i.locale), this.model.set({
            blob: i
        })
    },
    update: at.debounce(function() {
        const e = this.model.get("blob");
        !e || (this.willUpdate(), e.playerInfo ? this.playerTopBar.model.set(e.playerInfo) : this.playerTopBar.model.clear(), !this.currentState || this.currentState !== e.state ? (this.updateLayout(), this.currentLayout && this.currentLayout.model.set(e)) : this.currentLayout && this.currentLayout.model.set(e), e.textDescriptions && this.setTextDescriptions(e.textDescriptions), e.artifact && Ni.add(e.artifact, this.client.appTag), this.didUpdate())
    }, 25),
    willUpdate() {},
    didUpdate() {},
    setTextDescriptions(t) {
        t && t.length && (this.textDescriptions = this.textDescriptions || [], t.forEach(e => {
            (e.id === void 0 || !this.textDescriptions.slice(-10).find(n => n.id === e.id)) && (this.textDescriptions.push(e), se("#textDescriptions").append(se("<p />").text(e.text)))
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
        const t = se(window).width(),
            e = se(window).height();
        se(".content,.controller-page").css({
            height: e,
            width: t
        })
    },
    onRoomWasDestroyed() {
        en.remove("roomCode"), en.remove("reconnect"), Ot.show("error", {
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
            a = e.EventEmitter;

        function d(k, I) {
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
                $, J;
            if (I instanceof RegExp) {
                $ = {};
                for (J in L) L.hasOwnProperty(J) && I.test(J) && ($[J] = L[J])
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

        function S(k) {
            return typeof k == "function" || k instanceof RegExp ? !0 : k && typeof k == "object" ? S(k.listener) : !1
        }
        i.addListener = function(I, L) {
            if (!S(L)) throw new TypeError("listener must be a function");
            var $ = this.getListenersAsObject(I),
                J = typeof L == "object",
                ie;
            for (ie in $) $.hasOwnProperty(ie) && d($[ie], L) === -1 && $[ie].push(J ? L : {
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
                J, ie;
            for (ie in $) $.hasOwnProperty(ie) && (J = d($[ie], L), J !== -1 && $[ie].splice(J, 1));
            return this
        }, i.off = m("removeListener"), i.addListeners = function(I, L) {
            return this.manipulateListeners(!1, I, L)
        }, i.removeListeners = function(I, L) {
            return this.manipulateListeners(!0, I, L)
        }, i.manipulateListeners = function(I, L, $) {
            var J, ie, X = I ? this.removeListener : this.addListener,
                re = I ? this.removeListeners : this.addListeners;
            if (typeof L == "object" && !(L instanceof RegExp))
                for (J in L) L.hasOwnProperty(J) && (ie = L[J]) && (typeof ie == "function" ? X.call(this, J, ie) : re.call(this, J, ie));
            else
                for (J = $.length; J--;) X.call(this, L, $[J]);
            return this
        }, i.removeEvent = function(I) {
            var L = typeof I,
                $ = this._getEvents(),
                J;
            if (L === "string") delete $[I];
            else if (I instanceof RegExp)
                for (J in $) $.hasOwnProperty(J) && I.test(J) && delete $[J];
            else delete this._events;
            return this
        }, i.removeAllListeners = m("removeEvent"), i.emitEvent = function(I, L) {
            var $ = this.getListenersAsObject(I),
                J, ie, X, re, v;
            for (re in $)
                if ($.hasOwnProperty(re))
                    for (J = $[re].slice(0), X = 0; X < J.length; X++) ie = J[X], ie.once === !0 && this.removeListener(I, ie.listener), v = ie.listener.apply(this, L || []), v === this._getOnceReturnValue() && this.removeListener(I, ie.listener);
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
})(uh);
const Nx = uh.exports;
class Bx extends Nx {
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
                const d = n[a];
                a === "room" || a === "bc:room" || a === "roomBlob" ? (d instanceof Ri.TextEntity && (i.room = d.toBlob()), d instanceof Ri.ObjectEntity && (i.room = d.val)) : a === "player" || a === `player:${this.id}` || a === `bc:customer:${this.userId}` ? (d instanceof Ri.TextEntity && (i.player = d.toBlob()), d instanceof Ri.ObjectEntity && (i.player = d.val)) : a === "audiencePlayer" && (d instanceof Ri.TextEntity && (i.audiencePlayer = d.toBlob()), d instanceof Ri.ObjectEntity && (i.audiencePlayer = d.val))
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
        let d = n.text;
        try {
            d = JSON.parse(d)
        } catch {
            nc(`[Ecast Client] Unhandled text notification: ${n.key} ${a}`);
            return
        }
        const m = d;
        i === "room" ? this.emit("client:entityDidChange", i, m) : i === `player:${this.id}` ? this.emit("client:entityDidChange", "player", m) : i === "bc:room" ? this.emit("client:entityDidChange", "room", m) : i === "audiencePlayer" ? this.emit("client:entityDidChange", "audiencePlayer", m) : i === `bc:customer:${this.userId}` ? this.emit("client:entityDidChange", "player", m) : nc(`[Ecast Client] Unhandled json notification: ${i}`)
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
        var a, d;
        if (!!this.isReady) try {
            if (n === "SendMessageToRoomOwner") {
                const m = (d = (a = this.host) == null ? void 0 : a.id) != null ? d : "1";
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
const Vx = `<div id="content-region" class="content"></div>
<div id="debug-region" class="debug"></div>
<div id="banner" class="post-banner"></div>`;
(function(t) {
    t(se)
})(function(t) {
    var e, n = navigator.userAgent,
        i = /iphone/i.test(n),
        a = /chrome/i.test(n),
        d = /android/i.test(n);
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
        caret: function(m, S) {
            var k;
            if (this.length !== 0 && !this.is(":hidden")) return typeof m == "number" ? (S = typeof S == "number" ? S : m, this.each(function() {
                this.setSelectionRange ? this.setSelectionRange(m, S) : this.createTextRange && (k = this.createTextRange(), k.collapse(!0), k.moveEnd("character", S), k.moveStart("character", m), k.select())
            })) : (this[0].setSelectionRange ? (m = this[0].selectionStart, S = this[0].selectionEnd) : document.selection && document.selection.createRange && (k = document.selection.createRange(), m = 0 - k.duplicate().moveStart("character", -1e5), S = m + k.text.length), {
                begin: m,
                end: S
            })
        },
        unmask: function() {
            return this.trigger("unmask")
        },
        mask: function(m, S) {
            var k, I, L, $, J, ie, X, re;
            if (!m && this.length > 0) {
                k = t(this[0]);
                var v = k.data(t.mask.dataName);
                return v ? v() : void 0
            }
            return S = t.extend({
                autoclear: t.mask.autoclear,
                placeholder: t.mask.placeholder,
                completed: null
            }, S), I = t.mask.definitions, L = [], $ = X = m.length, J = null, t.each(m.split(""), function(P, q) {
                q == "?" ? (X--, $ = P) : I[q] ? (L.push(new RegExp(I[q])), J === null && (J = L.length - 1), $ > P && (ie = L.length - 1)) : L.push(null)
            }), this.trigger("unmask").each(function() {
                function P() {
                    if (S.completed) {
                        for (var be = J; ie >= be; be++)
                            if (L[be] && ae[be] === q(be)) return;
                        S.completed.call(H)
                    }
                }

                function q(be) {
                    return S.placeholder.charAt(be < S.placeholder.length ? be : 0)
                }

                function le(be) {
                    for (; ++be < X && !L[be];);
                    return be
                }

                function oe(be) {
                    for (; --be >= 0 && !L[be];);
                    return be
                }

                function ye(be, he) {
                    var Se, Te;
                    if (!(0 > be)) {
                        for (Se = be, Te = le(he); X > Se; Se++)
                            if (L[Se]) {
                                if (!(X > Te && L[Se].test(ae[Te]))) break;
                                ae[Se] = ae[Te], ae[Te] = q(Te), Te = le(Te)
                            } K(), H.caret(Math.max(J, be))
                    }
                }

                function f(be) {
                    var he, Se, Te, $e;
                    for (he = be, Se = q(be); X > he; he++)
                        if (L[he]) {
                            if (Te = le(he), $e = ae[he], ae[he] = Se, !(X > Te && L[Te].test($e))) break;
                            Se = $e
                        }
                }

                function _e() {
                    var be = H.val(),
                        he = H.caret();
                    if (re && re.length && re.length > be.length) {
                        for (Fe(!0); he.begin > 0 && !L[he.begin - 1];) he.begin--;
                        if (he.begin === 0)
                            for (; he.begin < J && !L[he.begin];) he.begin++;
                        H.caret(he.begin, he.begin)
                    } else {
                        for (Fe(!0); he.begin < X && !L[he.begin];) he.begin++;
                        H.caret(he.begin, he.begin)
                    }
                    P()
                }

                function Oe() {
                    Fe(), H.val() != we && H.change()
                }

                function Pe(be) {
                    if (!H.prop("readonly")) {
                        var he, Se, Te, $e = be.which || be.keyCode;
                        re = H.val(), $e === 8 || $e === 46 || i && $e === 127 ? (he = H.caret(), Se = he.begin, Te = he.end, Te - Se === 0 && (Se = $e !== 46 ? oe(Se) : Te = le(Se - 1), Te = $e === 46 ? le(Te) : Te), Ve(Se, Te), ye(Se, Te - 1), be.preventDefault()) : $e === 13 ? Oe.call(this, be) : $e === 27 && (H.val(we), H.caret(0, Fe()), be.preventDefault())
                    }
                }

                function lt(be) {
                    if (!H.prop("readonly")) {
                        var he, Se, Te, $e = be.which || be.keyCode,
                            Ke = H.caret();
                        if (!(be.ctrlKey || be.altKey || be.metaKey || 32 > $e) && $e && $e !== 13) {
                            if (Ke.end - Ke.begin !== 0 && (Ve(Ke.begin, Ke.end), ye(Ke.begin, Ke.end - 1)), he = le(Ke.begin - 1), X > he && (Se = String.fromCharCode($e), L[he].test(Se))) {
                                if (f(he), ae[he] = Se, K(), Te = le(he), d) {
                                    var dt = function() {
                                        t.proxy(t.fn.caret, H, Te)()
                                    };
                                    setTimeout(dt, 0)
                                } else H.caret(Te);
                                Ke.begin <= ie && P()
                            }
                            be.preventDefault()
                        }
                    }
                }

                function Ve(be, he) {
                    var Se;
                    for (Se = be; he > Se && X > Se; Se++) L[Se] && (ae[Se] = q(Se))
                }

                function K() {
                    H.val(ae.join(""))
                }

                function Fe(be) {
                    var he, Se, Te, $e = H.val(),
                        Ke = -1;
                    for (he = 0, Te = 0; X > he; he++)
                        if (L[he]) {
                            for (ae[he] = q(he); Te++ < $e.length;)
                                if (Se = $e.charAt(Te - 1), L[he].test(Se)) {
                                    ae[he] = Se, Ke = he;
                                    break
                                } if (Te > $e.length) {
                                Ve(he + 1, X);
                                break
                            }
                        } else ae[he] === $e.charAt(Te) && Te++, $ > he && (Ke = he);
                    return be ? K() : $ > Ke + 1 ? S.autoclear || ae.join("") === Ae ? (H.val() && H.val(""), Ve(0, X)) : K() : (K(), H.val(H.val().substring(0, Ke + 1))), $ ? he : J
                }
                var H = t(this),
                    ae = t.map(m.split(""), function(be, he) {
                        return be != "?" ? I[be] ? q(he) : be : void 0
                    }),
                    Ae = ae.join(""),
                    we = H.val();
                H.data(t.mask.dataName, function() {
                    return t.map(ae, function(be, he) {
                        return L[he] && be != q(he) ? be : null
                    }).join("")
                }), H.one("unmask", function() {
                    H.off(".mask").removeData(t.mask.dataName)
                }).on("focus.mask", function() {
                    if (!H.prop("readonly")) {
                        clearTimeout(e);
                        var be;
                        we = H.val(), be = Fe(), e = setTimeout(function() {
                            H.get(0) === document.activeElement && (K(), be == m.replace("?", "").length ? H.caret(0, be) : H.caret(be))
                        }, 10)
                    }
                }).on("blur.mask", Oe).on("keydown.mask", Pe).on("keypress.mask", lt).on("input.mask paste.mask", function() {
                    H.prop("readonly") || setTimeout(function() {
                        var be = Fe(!0);
                        H.caret(be), P()
                    }, 0)
                }), a && d && H.off("input.mask").on("input.mask", _e), Fe()
            })
        }
    })
});
window.$ = se;
window.jQuery = se;
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
                const i = new Bx(e, n);
                let a = new Et.Application({
                    region: "#app",
                    onStart() {
                        const d = new $x;
                        this.showView(d), d.showView(t.MainView, {
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
    Fx = `<div id="page-fibbage" class="page green">\r
	<link href='https://fonts.googleapis.com/css?family=Raleway:800' rel='stylesheet' type='text/css'>\r
	\r
	<div id="player">\r
		<h1><%=username%></h1>\r
	</div>\r
\r
	<div id="fibbage-preload" class="fibbage-preload"></div>\r
\r
    <div id="game" class="game pt-pageholder">\r
		<div class="pt-page-off state-lobby fibbage-page">\r
			<div class="container">\r
				<br /><span id="fibbage-lobby-text"></span><br />\r
				<form class="pure-form">\r
					<button type="button" id="fibbage-startgame" class="button-fibbage button-xlarge pure-button pure-input-1">EVERYBODY'S IN</button>\r
					<button type="button" id="fibbage-stopcountdown" class="button-fibbage  button-xlarge pure-button pure-input-1">CANCEL</button>\r
					<button type="button" id="fibbage-sameplayers" class="button-fibbage  button-xlarge pure-button pure-input-1 fibbage-endbuttons">SAME PLAYERS</button>\r
					<button type="button" id="fibbage-newplayers" class="button-fibbage  button-xlarge pure-button pure-input-1 fibbage-endbuttons">NEW PLAYERS</button>	\r
				</form>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-nothing fibbage-page">\r
			<div class="logo-image" style="width:100%;">\r
            	<img class="pure-img" style="margin-left:auto; margin-right:auto;"  src='main/pp2/fibbage2/fibbage2/logo.png'>\r
            </div>\r
		</div>\r
	\r
		<div class="pt-page-off state-round fibbage-page">\r
			<div class="round-main"><p class='round-text'></div>\r
		</div>\r
\r
        <div class="pt-page-off state-pickbloop fibbage-page">\r
			<div class="container">\r
				<br /><span>SELECT YOUR SOUND FOR THE GAME!</span><br />\r
				<div class="button-container">\r
					<form class="pure-form">\r
						<fieldset class="bloop-fieldset">\r
						</fieldset>\r
					</form>\r
				</div>\r
			</div>\r
		</div>	\r
\r
		<div class="pt-page-off state-choosing fibbage-page">\r
			<div class="container">\r
				<br /><span>You're choosing the category!</span><br />\r
				<div class="button-container">\r
					<form class="pure-form">\r
						<fieldset class="button-fieldset">\r
						</fieldset>\r
					</form>\r
				</div>\r
			</div>\r
		</div>		\r
\r
		<div class="pt-page-off state-enterlie fibbage-page">\r
			<div class="container">\r
				<br /><span id="question-text"></span><br /><br />\r
\r
				<div id="fibbage-submit-alert" class="alert alert-info">Alert message goes here</div>\r
				<form class="pure-form" id="fibbage-enterlie-field">\r
					<div class="pure-u-1">\r
						<input id="fibbage-lie-input" name="fibbage-lie" class="pure-input-1 capitalize jbg-input fibbage-lie-input" type="text" maxlength="45" placeholder="ENTER A LIE" autocapitalize="off" autocorrect="off" autocomplete="off">\r
					</div>\r
					<button type="button" id="fibbage-lieforme" class="button-fibbage button-large pure-button capitalize left">Lie for me<br/>(Half Points)</button>\r
					<button type="submit" id="fibbage-submitlie" class="button-fibbage button-large pure-button capitalize right"><i class="fas fa-paper-plane"></i>&nbsp;&nbsp;SEND</button>\r
					<div id="fibbage-submitlie-loading" style="display:none;" class="button-fibbage-loading"></div>\r
				</form>\r
				<div id="fibbage-suggestions" class="pure-g"></div>\r
			</div>\r
		</div>	\r
\r
		<div class="pt-page-off state-chooselie fibbage-page">\r
			<div class="container">\r
				<br /><span id="chooselie-text"></span><br />\r
				<form id="fibbage-chooselie" class="pure-form"></form>\r
				<br />\r
				<form id="fibbage-defib" class="pure-form">\r
					<button type="button" data-param="defib" class="pure-input-1 fibbage-defib-button button-large pure-button button-fibbage button-fibbage-defib">\r
						<img class="defib-icon" src='main/pp2/fibbage2/fibbage2/defib.png' />&nbsp;&nbsp;&nbsp;&nbsp;DE<font color="red">FIB</font>RILLATOR\r
					</button>\r
					<br /><span>CUT YOUR CHOICES DOWN TO TWO!</span>\r
				</form>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-chooselikes fibbage-page">\r
			<div class="container">\r
				<br /><span id="chooselikes-choice"></span><br />\r
				<span id="chooselikes-text"></span><br />\r
				<form id="fibbage-chooselikes" class="pure-form"></form>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-liereceived fibbage-page">\r
			<br /><span>LIE ENTERED!<br />WAITING FOR OTHER PLAYERS.</span><br />\r
		</div>\r
\r
		<div class="pt-page-off state-lyingdone fibbage-page">\r
			<br /><span>LYING IS DONE!</span><br />\r
		</div>		\r
\r
		<div class="pt-page-off state-notchoosing fibbage-page">\r
			<br /><span id="notchoosing"></span><br />\r
		</div>\r
\r
\r
\r
		<div class="pt-page-off state-audience-join fibbage-page">\r
			<br />\r
            <img style="margin-left:auto; margin-right:auto; max-width:75%; max-height:75%;"  src='main/pp2/fibbage2/fibbage2/logo.png'>\r
			<span>\r
				<br /><br />\r
				You can \u201CLike\u201D your favorite lies (one Like per question).\r
				<br /><br />\r
				- AND -\r
				<br /><br />\r
				You can play along by guessing the Truth on each question! Get a perfect 7/7 score and receive a free, weird bonus fact \u2013 great for parties!\r
			</span>\r
			<br />\r
		</div>\r
\r
		<div class="pt-page-off state-audience-postgame fibbage-page">\r
			<div class="container">\r
				<br /><img style="margin-left:auto; margin-right:auto; max-width:75%; max-height:75%;"  src='main/pp2/fibbage2/fibbage2/logo.png'>\r
				<br /><br /><span>FINAL SCORE</span><br /><br />\r
				<span id="audience-postgame-score" class="audience-score"></span><br /><br />\r
				<span id="audience-postgame-score-quip"></span><br /><br />\r
				<div class="audience-bonus-fact"><span id="audience-bonus-fact" class="audience-bonus-fact"></span></div><br />\r
				<span id="audience-bonus-quip"></span><br /><br />\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-audience-score fibbage-page">\r
			<div class="container">\r
				<br /><img style="margin-left:auto; margin-right:auto; max-width:75%; max-height:75%;"  src='main/pp2/fibbage2/fibbage2/logo.png'>\r
				<br /><br /><span>YOUR SCORE SO FAR</span><br /><br />\r
				<span id="audience-score" class="audience-score"></span><br /><br />\r
				<span id="audience-score-quip"></span>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-audience-chooselie fibbage-page">\r
			<div class="container">\r
				<br /><span id="audience-chooselie-text"></span><br />\r
				<form id="fibbage-audience-chooselie" class="pure-form"></form>\r
			</div>\r
		</div>\r
\r
		<div class="pt-page-off state-audience-chooselikes fibbage-page">\r
			<div class="container">\r
				<br /><span id="audience-chooselikes-choice"></span><br />\r
				<span id="audience-chooselikes-text"></span><br />\r
				<form id="fibbage-audience-chooselikes" class="pure-form"></form>\r
			</div>\r
		</div>\r
\r
	</div>\r
</div>\r
`;
const zx = BC.extend({
    template: at.template(Fx),
    lacksAudience: !0,
    numCorrect: 0,
    currentChoice: "",
    currentLike: "",
    currentQuip: "",
    currentFact: "",
    bonusFacts: ["During the 1988 Iditarod dog sled race in Alaska, John Suter competed not with a team of traditional sled dogs, but with a team of poodles! (He lost.)", "The barking sounds of the velociraptors in Jurassic Park were made by recording the sound of turtles mating.", "Seattle\u2019s 2011 census report revealed that citizens had more dogs than children.", "Former U.S. President Warren G. Harding once lost the White House china in a poker match!", "The inventors of bubble wrap were initially trying to make a plastic wallpaper!", "Poodle Clipping was a demonstration sport in the 1900 Olympics!", "Doritos were invented at Disneyland!", "Dr. Seuss proposed to his wife while she was riding on the back of his motorcycle!", "In 2015, the Atlanta Falcons were fined $350,000 and lost a 2016 NFL draft pick after they were caught blasting fake crowd noise out of their stadium speakers.", "One of the first prototypes of the Apple mouse was constructed out of a butter dish and a roll-on deodorant!", "There\u2019s a Baltimore-based metal band whose lead singer is an African Grey parrot. They\u2019re called Hatebeak.", "Andrew Lloyd Weber\u2019s musical score for the sequel to The Phantom of the Opera was, and this is true, deleted by his cat.", "Disney animators were instructed to make Aladdin resemble Tom Cruise and Michael J. Fox.", "The first sports bra was constructed by sewing two jock straps together!", "Before portraying them as owners of a burger restaurant, the creator of Bob\u2019s Burgers intended for the Belchers to be a family of cannibals!", "Fan of Breaking Bad? The real people who live in Walter White\u2019s house probably aren\u2019t, because people keep imitating a famous scene by throwing pizzas on their roof.", "If you travel to the Italian town of Laglio, be warned. There\u2019s a 500 Euro fine for getting too close to George Clooney. (He loves to vacation there.)", "If you\u2019re looking for that perfect place for your next party or wedding, consider the Sixth Floor Museum, which is now available for rental. It\u2019s the building from which Lee Harvey Oswald allegedly shot JFK! Romantic!", "A Los Angeles tree that was planted in 2001 in memory of George Harrison\u2019s life also ceased to be in 2015 after it was killed by\u2026 beetles.", "New York City averages about 2,100 exploding manholes per year, many of which seriously injure passersby. That\u2019s only about 6 per day, don\u2019t worry. You\u2019ll probably be fine."],
    reaction01: ["Annnnd you lost. But keep playing! You can\u2019t do any worse!", "Down and out in the first round. But keep playing to partially salvage your reputation!", "Lost on the first question. But keep playing for the second place prize of NOTHING!", "Lost in the first round! But keep playing and we won\u2019t tell people how you utterly, utterly failed.", "Lost in the first round. But hey, defy the odds against you and keep playing for a chance to get a perfect score!", "And just like that you\u2019ve lost. Your parents still think you\u2019re a winner though, so keep playing for them!"],
    reaction11: ["Nailed it! Now just do that six more times. No pressure!", "Boom! You\u2019re flying high!", "Great start! You can do this...unless the mounting pressure makes you crack!", "Perfect so far! These are the things memories are made of!!!", "And the streak begins! You got this!!! (Unless you don\u2019t. We\u2019ll see.)", "One for one! You are invincible and nothing can stop you!"],
    reaction02: ["Okay, you\u2019re still not gonna win, but you\u2019re playing for fun! Right? Right?!", "If the goal was to get them all wrong, then YOU\u2019RE DOING GREAT!!!", "And the streak continues! It\u2019s not a good streak but\u2026 IT CONTINUES!!!", "You\u2019re completely out of it, but we salute your never-give-up spirit!!!", "You\u2019re completely out of it, but keep playing! What else you gonna do?", "Ok, new goal: Try to go 0 for 3!", "Alright, 0 for 2. You can only go up (or farther down) from here!"],
    reaction12: ["You\u2019ve answered half of them right...but more importantly, you\u2019ve answered half of them wrong.", "You\u2019ve gotten 50% of them right! But there\u2019s a 100% chance you won\u2019t win!", "On one hand, you got one out of two right! But that hand doesn\u2019t matter. Sorry.", "One out of two ain\u2019t bad. It ain\u2019t good enough to win, but it ain\u2019t bad.", "One out of two. Math is hard but that\u2019s roughly a success rate of 46%.", "You\u2019ve gotten 50% of them right! Be 50% excited!"],
    reaction22: ["Perfect score! Keep it up because it doesn\u2019t get any easier from here.", "Is your brain even breaking a sweat yet? Do brains sweat? Don\u2019t answer that, you might ruin your perfect score.", "Two for two! It\u2019s time to get mildly but not too excited!", "Perfect score so far! Be confident, but don\u2019t be cocky.", "According to our genius math dog who counts with his paws, you\u2019re on your way to a perfect score!", "You\u2019re perfect! Well, your score is."],
    reaction03: ["But keep playing because we want to see how bad this can get.", "You\u2019re not letting your cat play for you, are you?", "So, you haven\u2019t gotten any right. Big deal. Accomplishing things is overrated. You just keep doing what you\u2019re doing, which is nothing!", "Keep going. You can\u2019t get them all wrong. Right? Right?! (We don\u2019t expect you to know the correct answer to that.)", "0 for 3. No need to panic. Stay calm until you\u2019re 0 for 4.", "You get an A for effort. Still a big F for score, though."],
    reaction13: ["You obviously can\u2019t spot a lie and should probably stay off the internet.", "Is it futile to continue? Yes, but do it anyway!", "One for three. You\u2019re dumping a giant third on this game.", "Just one correct, but remember: A score is just a number that dictates whether you win or not.", "One out of three. Prove that you are more than just a fraction!"],
    reaction23: ["Two for three. You\u2019re not gonna win, but at least you\u2019re not embarrassing yourself.", "Two outta three. Dig deep into yourself and find the courage to go on!", "A perfect score is still not out of the question, in an alternate reality.", "Whatever you do, don\u2019t get them all right from here on out or it\u2019ll be excruciating"],
    reaction33: ["Three for three! Nobody\u2019s sneaking any BS past you!", "Three in a row! That\u2019s officially a streak! You\u2019re streaking!", "Three for three! Are you peeking at the back of the game screen where all the answers are printed in tiny upside-down type?", "Three for three! You need a water or anything? No? Ok, keep going!", "Three for three! We don\u2019t want to jinx you but you\u2019re going to get a perfect score!"],
    reaction04: ["Okay, okay. This is bad. You have to keep going. You have to get one right.", "You obviously can\u2019t spot a lie. We can help you if you send us your credit card and social security numbers.", "This is terrible. We can\u2019t stand to look, yet\u2026 we can\u2019t look away. Please keep going, it\u2019s entertaining.", "Zero for four. You think Rocky would stop now? No way! He LOVES Fibbage.", "In case it wasn\u2019t clear, pick the ones that AREN\u2019T lies."],
    reaction14: ["One right, three wrong. You\u2019re hopeless, but we admire you coming back for more punishment.", "One for four. A blindfolded mouse could do better. (We\u2019ve done the research.)", "On the plus side, you\u2019re probably a really good child and/or parent.", "One out of four. Let\u2019s see if that can become one out of seven! Yeah!", "You\u2019re just pressing buttons, aren\u2019t you?"],
    reaction24: ["Two for four. Just do twice as good next time and you\u2019ve got this!", "Two for four. At this rate, you\u2019ll get 3.5 right!", "Keep reaching for halfway to the stars! Be the best mediocre you can be!", "If you believe in yourself, anything is possible! Except a perfect score. That\u2019s long gone at this point.", "Two out of four. You\u2019ve seen the face of adversity. Slap it and keep playing!"],
    reaction34: ["Three out of four. That one wrong answer will haunt you forever!", "So close! One day you\u2019ll look back on this failure and laugh.", "Remember that ONE ANSWER you missed? We do.", "Usually, three out of four is good. This is not one of those times."],
    reaction44: ["Perfect so far! Don\u2019t choke!", "Okay, we get it. You\u2019re smart. Don\u2019t blow it, brainiac.", "C\u2019mon! Just admit you\u2019re cheating! You have inside information\u2026 a spy in our offices\u2026 something.", "Wow, still perfect! You\u2019re starting to make us sweat.", "Four for four. That\u2019s fun to say out loud. Try it!"],
    reaction05: ["Okay, this hurts. But you\u2019ve got to finish. You\u2019ve endured this much.", "A baby could\u2019ve gotten ONE right!", "We want to insult you, but it\u2019s too easy and that makes us feel bad.", "Zero for five. You remind us of a certain Jamaican bobsled team.", "Well, there\u2019s no way to sugarcoat this. You\u2019re doing pretty well. (We tried.)", "Zero for five! Lesser players would quit. Wait, there can\u2019t be lesser players."],
    reaction15: ["Somehow, it would seem better if you had just missed them all, you know?", "You\u2019re great! (We figured you\u2019d probably believe that, too.)", "Don\u2019t quit your day job. Or your night job.", "You\u2019re no longer an underdog. You\u2019re now the dog that\u2019s under the underdog.", "One out of five. But who cares? Your hair looks fantastic!"],
    reaction25: ["Just two more questions and you can be put out of your misery.", "Okay, the strategy next time is to ignore your instincts.", "Even if you had gotten twice as many right, it still wouldn\u2019t be enough!!!", "Not good. But, as Gandhi once said, \u201CKeep playing!\u201D", "Just two correct. If you can find the will to live on, you\u2019re more than welcome to keep playing."],
    reaction35: ["It\u2019s still not gonna happen, but it\u2019s the journey that counts.", "Even though you\u2019re technically a loser, you\u2019re kind of a half-winner in our eyes!", "Two questions left. Do it for pride.", "We had you pegged as a middle-of-the-road player, and look! You are!", "Three out of five. Clutch your amulet and find the strength to go on!"],
    reaction45: ["You\u2019re on pace for the 90% award! Unfortunately, there\u2019s no such thing!", "You had one hiccup. Next time try holding your breath for the whole game.", "Four out of five looks good, but it still gets you squat. Hope you like squat!", "Great effort! You\u2019ll still get nothing\u2026 but GREAT EFFORT!!!", "Hey, you\u2019ve only missed one after five questions! Celebrate by whispering \u201Cyay!\u201D"],
    reaction55: ["Two questions left to perfection. Relax, and be one with the Fibbage.", "Are you a carpenter or general contractor or manicurist or nailmaker? Because you are nailing this.", "Just two more. We\u2019re so nervous for you!", "Perfect score after five! Now comes the real pressure. Don\u2019t blow it.", "Wow, we can\u2019t trip you up. We blame it on the terrible lies the players are putting in."],
    reaction06: ["This has been nothing short of a trainwreck.", "Again, we\u2019d to insult you, but I\u2019m not sure you would understand it.", "Shhhhh. It\u2019ll all be over soon.", "Look, the past is the past. The future is bright!", "Let\u2019s talk about anything else but your score."],
    reaction16: ["Okay, you just need one more right to go from crappy to stinky.", "Good news: With this score you\u2019ve just won the title of Most Gullible Person in The World!", "One out of six. At least you aren\u2019t one of those losers who has zero!", "Just one out of six. But think about how sweet 2 out of 7 would be! Smell it!", "One out of six. We bet you\u2019ve learned a lot about yourself though!"],
    reaction26: ["You know what? Next time just cheat.", "Okay, not your best showing\u2026 at least we hope this isn\u2019t your best.", "Sure, you could\u2019ve stopped several questions ago, but what\u2019s so bad about embarrassment?!", "We\u2019re not sure what makes you tick, except that it\u2019s obviously not the will to reach perfection!", "Average. Vanilla. Ho-hum. Any of those adjectives are too good for your performance."],
    reaction36: ["Most people would\u2019ve looked at this crappy score and quit. Way to gut it out!", "Three out of six. We owe you a half of a congrats!"],
    reaction46: ["4 correct, 2 incorrect. Unfortunately two horrific wrongs don\u2019t make a right.", "It\u2019s hard to criticize this score. Hard, but not impossible. It\u2019s a relatively bad score.", "4 out of 6 correct. You\u2019re two thirds of a winner!!!", "4 out of 6 correct. If Fibbage were a government job, you\u2019d be killing it!", "After six questions, you have four right. Let\u2019s double-check that\u2026 yes, that\u2019s right."],
    reaction56: ["Let\u2019s get the next one right, so the one you missed will sting even more!", "5 out of 6 is pretty good. Pointless and without reward, but pretty good!", "Five out of six! We\u2019re not allowed to make trophies for that, so make your own!.", "You\u2019ve only missed one! Too bad we can\u2019t be bribed to change it\u2026 or can we? You know our address."],
    reaction66: ["Just one more left! Don\u2019t crack under the pressure like so many before you!", "Don\u2019t screw it up now and ruin the greatest moment of your life!", "You\u2019re a well-oiled Fibbage machine! You look greasy but oil will do that!", "6 for 6! You\u2019re not falling for these weak lies!", "Apparently, you\u2019ve confused Fibbage for old carpet, because you are tearing it up!", "Are you ready for Fibbage fame? If not, quit now or hand the controller to an idiot.", "Perfect after six! Eternal glory is just one question away!", "Perfect after six! What a crazy ride this has been! We\u2019re putting together a touching montage right now!"],
    reaction07: ["Let us never speak of this again.", "A big goose egg. No, you know what? We won\u2019t insult a perfectly good egg like that.", "You did it! You failed in the most complete way possible!!!", "You did it! Zero for seven! Take that, success!", "Slow clap.", "At least you had fun, right? Probably not.", "People said it couldn\u2019t be done, but you proved them wrong!"],
    reaction17: ["How the heck did you get one right?", "This score has set video games back a decade.", "We won\u2019t tell anyone about this score if you won\u2019t.", "Do you just believe everything anyone tells you?", "One for seven. You may be a loser but you\u2019re no quitter!"],
    reaction27: ["We don\u2019t want to discourage you, but that was terrible and this game probably isn\u2019t for you.", "Were you distracted by shiny, jingling keys while you were playing?", "Winning isn\u2019t everything. It\u2019s just 5 better than what you did.", "On the plus side, your haters are happy.", "Hit the showers. Better yet, take a nice, long bath. Better yet, pick up a book and try to learn something."],
    reaction37: ["Well, you stuck it out to the end like a champ. Except for winning. Champs win.", "At least you finished. You can go ahead and call yourself The Finisher \u2013 we won\u2019t tell anyone what really happened.", "You\u2019re probably discouraged enough, so here\u2019s a positive image: puppies riding baby pigs. Feel better.", "Don\u2019t worry. You\u2019ll get them next time! (Although we\u2019re not betting on it.)", "Let this inspire you to go on and do something with your life! (Something that doesn\u2019t involve recognizing obvious lies.)"],
    reaction47: ["Well, you got more right than wrong\u2026 so that\u2019s already better than most referees, psychics, and teenagers trying to identify Mexico on a map!", "Look, getting four out of seven happens to all of us. It doesn\u2019t make you any less of a Fibbage player.", "Hey, the average player gets 4/7. Nah\u2026 just kidding, they do better than that.", "Keep being you. Not great, not bad. Just you."],
    reaction57: ["Sorry you didn\u2019t win, but on the bright side, no one expected you to win anyway!", "You only missed two, but a quick recap: You weren\u2019t supposed to miss any.", "Well, you only missed two. Two huge, irrevocable mistakes.", "Now you have something to strive for in the offseason.", "Don\u2019t look at them as two mistakes. Look at them as two goofs. Goofs is funnier.", "Partially moderately respectable!"],
    reaction67: ["Six out of seven! It\u2019s no different than getting zero out of seven, but still, good job.", "You were so close!!! The important thing is not to dwell on it tonight in your nightmares.", "So close! That\u2019s the type of thing that would drive most people nuts. Oh well. Have a good day!", "You might not realize this, but 6/7 is as close to a perfect score as you be get without actually getting one.", "This will either make you stronger or absolutely destroy you. Send us a post card and let us know.", "There is a lesson in here. Not sure what. But there is, probably."],
    events: {
        "click #fibbage-startgame": "startGame",
        "click #fibbage-stopcountdown": "stopCountdown",
        "click #fibbage-sameplayers": "newGameSamePlayers",
        "click #fibbage-newplayers": "newGameNewPlayers",
        "click .fibbage-category-button": "chooseCategory",
        "click .fibbage-bloop-button": "chooseBloop",
        "click #fibbage-lieforme": "lieForMe",
        "click #fibbage-submitlie": "submitLie",
        "click .fibbage-suggestion-button": "chooseSuggestion",
        "click .fibbage-lie-button": "chooseLie",
        "click .fibbage-like-button": "toggleLike",
        "click .fibbage-defib-button": "chooseDefib",
        "click .fibbage-audience-lie-button": "chooseLieAudience",
        "click .fibbage-audience-like-button": "chooseLikeAudience"
    },
    async update() {
        const t = this.model.get("player");
        t !== void 0 && t.playerColor !== void 0 && (se("#player").css("background-color", t.playerColor), se("#game").css("background-color", t.playerColor), se("#fibbage-lie-input").css("background-color", t.playerColor)), this.client.isRole("audience") ? this.updateAudience() : t && this.updatePlayer(), this.onResize()
    },
    updatePlayer() {
        const t = this.model.get("player"),
            e = this.model.get("room"),
            n = t ? t.state : "",
            i = e ? e.state : "";
        if (n === "Lobby_PickBloop") {
            let a = "";
            for (let d = 0; d < t.bloops.length; d++) a += `<button type="button" data-num="${d}" data-id="${t.bloops[d].id}" class="fibbage-bloop-button button-fibbage button-large pure-button pure-input-1">${t.bloops[d].name}</button>`;
            se(".bloop-fieldset").html(a), this.showScreen(".state-pickbloop")
        } else if (i && i.split("_")[0] === "Lobby") {
            if (n && n.split("_")[0] === "Lobby") {
                this.hideLobbyButtons(), se("#player").css("background-color", t.playerColor);
                const a = n.split("_")[1];
                a === "WaitingForMore" ? se("#fibbage-lobby-text").html("Waiting for all players to join") : a === "CanStart" ? (se("#fibbage-lobby-text").html("Press this button when everybody has joined"), se("#fibbage-startgame").show()) : a === "Countdown" ? (se("#fibbage-lobby-text").html("Press this button to cancel game start"), se("#fibbage-stopcountdown").show()) : a === "PostGameHost" ? (se("#fibbage-lobby-text").html("What do you want to do?"), se(".fibbage-endbuttons").show()) : a === "PostGame" && se("#fibbage-lobby-text").html("Waiting for host decision"), this.showScreen(".state-lobby")
            }
        } else if (i === "Gameplay_EndShortie") this.showScreen(".state-nothing");
        else if (i === "Gameplay_EndGame") this.showScreen(".state-nothing");
        else if (i === "Gameplay_Logo") this.showScreen(".state-nothing");
        else if (i === "Gameplay_Round") se(".round-text").html(`ROUND ${e.round}`), this.showScreen(".state-round");
        else if (i === "Gameplay_CategorySelection" && n === "Gameplay_CategorySelection")
            if (t.isChoosing) {
                let a = "";
                for (let d = 0; d < e.choices.length; d++) a += `<button type="button" data-num="${d}" class="fibbage-category-button button-fibbage button-large pure-button pure-input-1">${Mt.safeText(e.choices[d])}</button>`;
                se(".button-fieldset").html(a), this.showScreen(".state-choosing")
            } else se("#notchoosing").html(`${Mt.safeText(e.choosingPlayerName)} is picking a category`), this.showScreen(".state-notchoosing");
        else if (i === "Gameplay_EnterLie")
            if (n === "Gameplay_EnterLie") {
                if (this.activeScreen !== ".state-enterlie") {
                    se("#fibbage-lie-input").val(""), se("#fibbage-enterlie-field").show(), se("#fibbage-suggestions").hide(), se("#fibbage-submit-alert").hide(), se(".state-enterlie #question-text").html(e.question);
                    let a = "";
                    for (let d = 0; d < t.suggestions.length; d++) a += `<button type="button" data-num="${d}" class="fibbage-suggestion-button gridmargin button-fibbage button-large pure-button pure-u-1">${t.suggestions[d]}</button>`;
                    se("#fibbage-suggestions").html(a)
                }
                if (t.showError) {
                    const a = se("#fibbage-submit-alert");
                    se("#fibbage-submit-alert").html("You entered the truth! Enter a lie!"), a.addClass("alert-info"), a.removeClass("alert-danger"), a.show()
                }
                this.showScreen(".state-enterlie")
            } else n === "Gameplay_LieReceived" && this.showScreen(".state-liereceived");
        else if (i === "Gameplay_LyingDone") this.showScreen(".state-lyingdone");
        else if (i === "Gameplay_ChooseLie" && n === "Gameplay_ChooseLie")
            if (t.choosingDone || t.chosen !== void 0) {
                se("#chooselikes-choice").html(t.chosen ? `You chose: ${t.chosen}` : "You didn't make a choice"), se("#chooselikes-text").html("Award bonus likes");
                let d = "";
                for (let m = 0; m < t.choices.length; m++) {
                    const S = t.likes.indexOf(t.choices[m]) >= 0,
                        k = S ? "button-fibbage-liked" : "button-fibbage-like",
                        I = S ? "fa-check-square" : "fa-square";
                    d += `<button type="button" data-num="${m}" class="pure-input-1 fibbage-like-button button-large pure-button button-fibbage ${k}"><div class="like-text">${Mt.safeText(t.choices[m])}</div><div class="like-checkbox"><i class="far ${I} fa-lg"></i></div></button>`
                }
                se("#fibbage-chooselikes").html(d), this.showScreen(".state-chooselikes")
            } else {
                se("#chooselie-text").html("find the truth!");
                let d = "";
                for (let m = 0; m < t.choices.length; m++) d += `<button type="button" data-num="${m}" class="pure-input-1 fibbage-lie-button button-large pure-button button-fibbage">${Mt.safeText(t.choices[m])}</button>`;
                t.hasDefib ? se("#fibbage-defib").show() : se("#fibbage-defib").hide(), se("#fibbage-chooselie").html(d), this.showScreen(".state-chooselie")
            }
        else if (i === "Gameplay_ChooseLike" && n === "Gameplay_ChooseLike") {
            se("#chooselikes-choice").html(t.chosen ? `You chose: ${t.chosen}` : "You didn't make a choice"), se("#chooselikes-text").html("Award bonus likes");
            let a = "";
            for (let d = 0; d < t.choices.length; d++) {
                const m = t.likes.indexOf(t.choices[d]) >= 0,
                    S = m ? "button-fibbage-liked" : "button-fibbage-like",
                    k = m ? "fa-check-square-o" : "fa-square-o";
                a += `<button type="button" data-num="${d}" class="pure-input-1 fibbage-like-button button-large pure-button button-fibbage ${S}"><div class="like-text">${Mt.safeText(t.choices[d])}</div><div class="like-checkbox"><i class="far ${k} fa-lg"></i></div></button>`
            }
            se("#fibbage-chooselikes").html(a), this.showScreen(".state-chooselikes")
        }
    },
    updateAudienceLikes() {
        const t = this.model.get("room");
        se("#audience-chooselikes-choice").html(`You chose: ${this.currentChoice===""?"NO ANSWER!":this.currentChoice}`), se("#audience-chooselikes-text").html("Award a like");
        const e = this.currentLike !== "";
        let n = "";
        for (let i = 0; i < t.choices.length; i++) {
            let a = e;
            a && (a = t.choices[i] !== this.currentLike);
            const d = t.choices[i] === this.currentLike ? "button-fibbage-liked" : "button-fibbage-like",
                m = t.choices[i] === this.currentLike ? "fa-check-square" : "fa-square";
            n += `<button type="button" data-num="${i}" class="pure-input-1 fibbage-audience-like-button button-large pure-button button-fibbage ${d}" ${a?"disabled":""}><div class="like-text">${Mt.safeText(t.choices[i])}</div><div class="like-checkbox"><i class="far ${m} fa-lg"></i></div></button>`
        }
        se("#fibbage-audience-chooselikes").html(n), this.showScreen(".state-audience-chooselikes")
    },
    updateAudience() {
        const t = this.model.get("room"),
            e = t ? t.state : "";
        if (e === "Gameplay_ChooseLie") {
            this.currentChoice = "", this.currentLike = "", se("#audience-chooselie-text").html(t.question);
            let n = "";
            for (let i = 0; i < t.choices.length; i++) n += `<button type="button" data-num="${i}" class="pure-input-1 fibbage-audience-lie-button button-large pure-button button-fibbage">${Mt.safeText(t.choices[i])}</button>`;
            se("#fibbage-audience-chooselie").html(n), this.showScreen(".state-audience-chooselie")
        } else if (e === "Gameplay_ChooseLike") this.updateAudienceLikes();
        else if (e === "Lobby_PostGame") this.numCorrect = 0, this.currentFact = "", this.currentQuip = "";
        else if (e === "Gameplay_Logo") this.showScreen(".state-audience-join"), this.currentQuip = "";
        else if (e === "Gameplay_CategorySelection") se("#notchoosing").html(`${Mt.safeText(t.choosingPlayerName)} is picking a category`), this.showScreen(".state-notchoosing");
        else if (e === "Gameplay_Round") se(".round-text").html(`ROUND ${t.round}`), this.showScreen(".state-round");
        else if (e === "Gameplay_EnterLie") this.showScreen(".state-audience-join");
        else if (e === "Gameplay_LyingDone") this.showScreen(".state-audience-join");
        else if (e === "Gameplay_EndGame") {
            if (se("#audience-postgame-score").html(`<span>${this.numCorrect}/7</span>`), this.numCorrect === 7) {
                if (se("#audience-postgame-score-quip").html("You won a free bonus fact!"), this.currentFact === "") {
                    const n = this.bonusFacts;
                    this.currentFact = n[Math.floor(Math.random() * n.length)]
                }
                se("#audience-bonus-fact").html(this.currentFact), se("#audience-bonus-quip").html("Play again to win more"), se(".audience-bonus-fact").show(), se(".audience-bonus-quip").show()
            } else {
                const n = this[`reaction${this.numCorrect.toString()}7`];
                this.currentQuip = n[Math.floor(Math.random() * n.length)], se("#audience-postgame-score-quip").html(this.currentQuip), se("#audience-bonus-fact").html(""), se("#audience-bonus-quip").html(""), se(".audience-bonus-fact").hide(), se(".audience-bonus-quip").hide()
            }
            this.showScreen(".state-audience-postgame")
        } else if (e === "Gameplay_EndShortie") {
            if (se("#audience-score").html(`${this.numCorrect}/${t.questionNumber}`), this.currentQuip === "") {
                const n = this[`reaction${this.numCorrect.toString()}${t.questionNumber.toString()}`];
                this.currentQuip = n[Math.floor(Math.random() * n.length)]
            }
            se("#audience-score-quip").html(this.currentQuip), this.showScreen(".state-audience-score")
        } else this.showScreen(".state-audience-join")
    },
    hideLobbyButtons() {
        se("#fibbage-startgame").hide(), se("#fibbage-stopcountdown").hide(), se(".fibbage-endbuttons").hide()
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
    chooseCategory(t) {
        const e = se(t.target).data("num");
        return this.client.send("SendMessageToRoomOwner", {
            chosenCategory: e
        }), !1
    },
    chooseBloop(t) {
        const e = se(t.target).data("id");
        return this.client.send("SendMessageToRoomOwner", {
            bloop: e
        }), !1
    },
    lieForMe() {
        return se("#fibbage-enterlie-field").hide(), se("#fibbage-suggestions").show(), !1
    },
    submitLie() {
        let t = this.sanitize(se("#fibbage-lie-input").val()).toUpperCase();
        if (t = t.replace(/\s\s+/g, " ").trim(), t.length === 0) {
            const e = se("#fibbage-submit-alert");
            return se("#fibbage-submit-alert").html("You can't enter nothing! Use a suggestion if you need help!"), e.removeClass("alert-info"), e.addClass("alert-danger"), e.show(), !1
        }
        return this.client.send("SendMessageToRoomOwner", {
            lieEntered: t,
            usedSuggestion: !1
        }), !1
    },
    chooseSuggestion(t) {
        const e = se(t.target).data("num"),
            n = this.model.get("player").suggestions[e],
            i = this.sanitize(n).toUpperCase();
        return this.client.send("SendMessageToRoomOwner", {
            lieEntered: i,
            usedSuggestion: !0
        }), !1
    },
    chooseLie(t) {
        const e = se(t.target).data("num"),
            n = this.model.get("player").choices[e];
        return this.client.send("SendMessageToRoomOwner", {
            choice: n
        }), !1
    },
    chooseDefib(t) {
        const e = se(t.target).data("param");
        return this.client.send("SendMessageToRoomOwner", {
            choice: e
        }), !1
    },
    toggleLike(t) {
        const e = se(t.currentTarget).data("num"),
            n = this.model.get("player") || {},
            i = n.likes || [],
            a = n.choices || [],
            d = i.indexOf(a[e]) >= 0;
        if (!d) {
            se(t.currentTarget).removeClass(d ? "button-fibbage-liked" : "button-fibbage-like"), se(t.currentTarget).addClass(d ? "button-fibbage-like" : "button-fibbage-liked"), se(t.currentTarget).find(".like-checkbox").html(`<i class="far ${d?"fa-square":"fa-check-square"} fa-lg"></i>`);
            const m = a[e];
            this.client.send("SendMessageToRoomOwner", {
                like: m
            })
        }
        return !1
    },
    chooseLieAudience(t) {
        const e = se(t.target).data("num"),
            n = this.model.get("room"),
            i = n.choices[e];
        return this.currentChoice = n.choices[e], i === n.answer && (this.numCorrect += 1), this.updateAudienceLikes(), !1
    },
    chooseLikeAudience(t) {
        const e = se(t.currentTarget).data("num");
        return this.currentLike = this.model.get("room").choices[e].toUpperCase(), this.client.sessionSend("vote", "fibbage2-likes", {
            type: "vote",
            vote: this.currentLike
        }), this.updateAudienceLikes(), !1
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
        return t && t.replace(/[^A-Z0-9\u00A1\u0020-\u002F\u00BF-\u00FF!?*$+\-’'_ .,]/gi, "").replace(/'/g, "\u2019").trim()
    },
    onResize() {
        const t = se(window).width(),
            e = se(window).height() - se("#player").outerHeight(!0);
        se(".fibbage-page").css("height", e), se(".fibbage-page").attr("height", e), se(".fibbage-page").css("width", t), se(".fibbage-page").attr("width", t)
    }
});
jx({
    MainView: zx
});
//# sourceMappingURL=ac8326b7.js.map